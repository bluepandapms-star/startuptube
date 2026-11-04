// Builds one static page per video (/v/ID.html), one per category (/c/slug.html),
// plus sitemap.xml and robots.txt — so Google can find every video.
// Run from the repo root:  node scripts/build-pages.mjs
import fs from "node:fs";
import vm from "node:vm";

const SITE = "https://startuptube.pages.dev";
const ctx = {};
vm.createContext(ctx);
vm.runInContext(fs.readFileSync("videos.js", "utf8") + "\nthis.__V = VIDEOS;", ctx);
const VIDEOS = ctx.__V;

const CATEGORIES = [
  ["Startup & Entrepreneurship", "Starting up, bootstrapping, scaling and business models"],
  ["SaaS & Technology", "SaaS, AI, software and product building"],
  ["Investment & Venture Capital", "Fundraising, angel investors, VC and valuations"],
  ["Marketing & Growth", "SEO, advertising, distribution and growth"],
  ["Founder Stories & Documentaries", "Company origins, failures and success stories"],
  ["Sales", "Selling, pricing, closing deals and getting paying customers"],
  ["Customer Behaviour", "Why customers buy, what they really want, user research"],
  ["Business Psychology", "How people decide, persuasion and founder mindset"],
];
const slug = s => s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const inCat = (v, c) => v.category === c || (v.also || []).includes(c);
const cut = (s, n) => (s.length > n ? s.slice(0, n - 1).replace(/\s+\S*$/, "") + "…" : s);

const css = `
:root{--bg:#F5F6FA;--surface:#fff;--hover:#EAEDF4;--text:#16213E;--muted:#5D6680;--line:#DFE3EC;--accent:#EA580C;--display:"Bricolage Grotesque","Instrument Sans",system-ui,sans-serif}
@media (prefers-color-scheme:dark){:root{--bg:#0E1628;--surface:#172238;--hover:#202D47;--text:#EDF0F7;--muted:#9AA4BD;--line:#26324D;--accent:#FB923C}}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font:400 16px/1.6 "Instrument Sans",system-ui,sans-serif}
a{color:inherit}header{border-bottom:1px solid var(--line);background:var(--surface)}
.bar{max-width:1100px;margin:0 auto;padding:14px 20px;display:flex;align-items:center;gap:12px;justify-content:space-between}
.logo{display:flex;align-items:center;gap:8px;font-family:var(--display);font-weight:800;font-size:20px;letter-spacing:-.03em;text-decoration:none}
.logo b{color:var(--accent)}.logo svg{width:30px;height:30px}
.cta{background:var(--accent);color:#fff;text-decoration:none;padding:9px 16px;border-radius:12px;font-weight:600;font-size:15px}
main{max-width:1100px;margin:0 auto;padding:32px 20px 56px}
h1{font-family:var(--display);font-size:clamp(28px,4vw,42px);line-height:1.1;letter-spacing:-.03em;margin:6px 0 10px}
h2{font-family:var(--display);font-size:22px;letter-spacing:-.02em;margin:40px 0 14px}
.meta{color:var(--muted);margin-bottom:22px}
.player{position:relative;aspect-ratio:16/9;border-radius:18px;overflow:hidden;background:#16213E;cursor:pointer;max-width:960px}
.player img{width:100%;height:100%;object-fit:cover;display:block;opacity:.9}
.player .play{position:absolute;left:50%;top:50%;width:76px;height:76px;margin:-38px 0 0 -38px;border-radius:50%;background:var(--accent);border:0;cursor:pointer}
.player .play:after{content:"";position:absolute;left:30px;top:22px;border-left:22px solid #fff;border-top:16px solid transparent;border-bottom:16px solid transparent}
.player iframe{position:absolute;inset:0;width:100%;height:100%;border:0}
.why{max-width:760px;border-left:3px solid var(--accent);background:var(--surface);border-radius:0 14px 14px 0;padding:14px 18px;margin:22px 0}
.why b{display:block;color:var(--accent);font-size:14px;margin-bottom:2px}
.tags{display:flex;flex-wrap:wrap;gap:8px;margin:8px 0}
.tags a,.tags span{border:1px solid var(--line);background:var(--surface);border-radius:999px;padding:5px 12px;font-size:14px;text-decoration:none;color:var(--muted)}
.tags a:hover{color:var(--text);border-color:var(--accent)}
.list{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:24px 18px;padding:0;list-style:none;margin:0}
.list a{text-decoration:none;display:block}.list img{width:100%;aspect-ratio:16/9;object-fit:cover;border-radius:14px;background:var(--hover);display:block}
.list strong{display:block;font-family:var(--display);font-size:16px;line-height:1.3;margin-top:10px}.list a:hover strong{color:var(--accent)}
.list span{color:var(--muted);font-size:14px}
.intro{color:var(--muted);max-width:62ch;font-size:17px}
footer{border-top:1px solid var(--line);color:var(--muted);font-size:13px;max-width:1100px;margin:0 auto;padding:22px 20px 40px;line-height:1.7}
`;
const logo = `<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="15" fill="#EA580C"/><path d="M10 21l6-6 6 6" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 14l6-6 6 6" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity=".55"/></svg>`;
const page = ({ title, desc, url, image, body }) => `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title><meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${url}"><link rel="icon" href="/favicon.svg" type="image/svg+xml">
<meta property="og:type" content="website"><meta property="og:site_name" content="StartupTube">
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}"><meta property="og:image" content="${image}">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:image" content="${image}">
<link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,600..800&family=Instrument+Sans:wght@400;600&display=swap" rel="stylesheet">
<style>${css}</style></head><body>
<header><div class="bar"><a class="logo" href="/">${logo}<span>Startup<b>Tube</b></span></a><a class="cta" href="/">Browse all ${VIDEOS.length.toLocaleString("en-US")} talks</a></div></header>
<main>${body}</main>
<footer>StartupTube is an open-source, community-driven library of the startup talks founders recommend most. Every video plays through YouTube's official embedded player and belongs to its creator. Includes data from <a href="https://hackertube.org/data">HackerTube</a> and <a href="https://huggingface.co/datasets/open-index/hacker-news">open-index/hacker-news</a> (ODC-By 1.0). <a href="https://github.com/bluepandapms-star/startuptube">Source on GitHub</a>.</footer>
</body></html>`;
const thumb = id => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
const item = v => `<li><a href="/v/${v.id}.html"><img loading="lazy" src="${thumb(v.id)}" alt=""><strong>${esc(v.title)}</strong><span>${esc(v.channel)}</span></a></li>`;

fs.rmSync("v", { recursive: true, force: true }); fs.rmSync("c", { recursive: true, force: true });
fs.mkdirSync("v"); fs.mkdirSync("c");
const urls = [`${SITE}/`];

for (const v of VIDEOS) {
  const cats = [v.category, ...(v.also || [])].filter(Boolean);
  const related = VIDEOS.filter(x => x.id !== v.id && inCat(x, v.category)).slice(0, 8);
  const url = `${SITE}/v/${v.id}.html`;
  const desc = cut(`${v.why} Watch "${v.title}" by ${v.channel} on StartupTube.`, 158);
  const body = `
<p class="tags">${cats.map(c => `<a href="/c/${slug(c)}.html">${esc(c)}</a>`).join("")}</p>
<h1>${esc(v.title)}</h1>
<div class="meta">${esc(v.channel)}${v.type ? ` · ${esc(v.type)}` : ""}${v.year ? ` · ${v.year}` : v.since ? ` · recommended since ${v.since}` : ""}</div>
<div class="player" id="p"><img src="${thumb(v.id)}" alt="${esc(v.title)}"><button class="play" aria-label="Play video"></button></div>
<div class="why"><b>Why founders recommend it</b>${esc(v.why)}</div>
${(v.tags || []).length ? `<div class="tags">${v.tags.map(t => `<span>${esc(t)}</span>`).join("")}</div>` : ""}
<p><a href="/#v=${v.id}">Open in StartupTube</a> · <a href="https://www.youtube.com/watch?v=${v.id}" rel="noopener">Watch on YouTube</a></p>
${related.length ? `<h2>More in ${esc(v.category)}</h2><ul class="list">${related.map(item).join("")}</ul>` : ""}
<script>document.getElementById("p").addEventListener("click",function(){this.innerHTML='<iframe src="https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0" title="${esc(v.title).replace(/'/g, "&#39;")}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';},{once:true});</script>`;
  fs.writeFileSync(`v/${v.id}.html`, page({ title: `${v.title} — StartupTube`, desc, url, image: thumb(v.id), body }));
  urls.push(url);
}

for (const [name, about] of CATEGORIES) {
  const list = VIDEOS.filter(v => inCat(v, name));
  const url = `${SITE}/c/${slug(name)}.html`;
  const body = `
<h1>Best ${esc(name)} videos for founders</h1>
<p class="intro">${list.length} talks on ${esc(about.toLowerCase())} — the ones founders and builders keep recommending. Free to watch, no login.</p>
<p class="tags">${CATEGORIES.filter(c => c[0] !== name).map(c => `<a href="/c/${slug(c[0])}.html">${esc(c[0])}</a>`).join("")}</p>
<ul class="list">${list.map(item).join("")}</ul>`;
  fs.writeFileSync(`c/${slug(name)}.html`, page({ title: `Best ${name} videos for founders — StartupTube`, desc: `${list.length} hand-picked and community-recommended talks on ${about.toLowerCase()}. Free, no login.`, url, image: `${SITE}/og-image.png`, body }));
  urls.push(url);
}

fs.writeFileSync("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `<url><loc>${u}</loc></url>`).join("\n")}\n</urlset>\n`);
fs.writeFileSync("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
console.log(`Built ${VIDEOS.length} video pages, ${CATEGORIES.length} category pages, sitemap with ${urls.length} URLs.`);
