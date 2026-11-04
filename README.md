# StartupTube

**The startup videos founders actually recommend.** → [startuptube.pages.dev](https://startuptube.pages.dev)

StartupTube is an open-source, community-driven library of 1,000+ free startup talks on YouTube — on ideas, customers, sales, business psychology, fundraising and founder stories. Every video comes with a short note on why people recommend it.

- No account, no algorithm, no clickbait
- Learn by Journey: Idea → Validation → MVP → First Customer → Growth → Fundraising
- Hidden Gems, Founder Playbooks and Startup Case Studies
- Likes, history and watch-later are stored only in your own browser

## How videos are played

Every video plays through YouTube's official embedded player (the privacy-enhanced `youtube-nocookie.com` embed) and follows YouTube's Terms of Service. StartupTube does not host, download or edit any video. Views count toward the original creator's channel, and all videos belong to their creators.

StartupTube is an independent project and is not affiliated with YouTube, Y Combinator, Stanford or any speaker.

## Where the videos come from

- **Hand-picked StartupTube videos** — curated with a note on why each is worth watching.
- **The Stanford × Y Combinator "How to Start a Startup" course** (2014).
- **Y Combinator talks** — around 590 talks from YC's channel, with notes from [yc-base](https://github.com/MrFishPL/yc-base) (MIT).
- **Lenny's Podcast** — around 265 episodes on product, growth and startups (episode list from [ChatPRD/lennys-podcast-transcripts](https://github.com/ChatPRD/lennys-podcast-transcripts)).
- **The HackerTube dataset** ([hackertube.org/data](https://hackertube.org/data), export 2026-10-31), derived from [open-index/hacker-news](https://huggingface.co/datasets/open-index/hacker-news): videos that Hacker News commenters recommended again and again, hand-filtered to about 115 startup and founder videos. Used under **ODC-By 1.0** — this credit must stay with the data.

## Suggest a video

Open an issue with:

1. The YouTube link
2. Which category it belongs in
3. One sentence on why founders should watch it

Good suggestions are talks you'd send a friend who is starting a company — not motivational clips or ads.

## Add a video yourself

All videos live in `videos.js`. Add hand-picked videos to the first `VIDEOS` list at the top: copy one block, change the fields and open a pull request:

```js
{ id: "YOUTUBE_ID", type: "Talk", india: false, title: "Video title", channel: "Speaker · Channel",
  minutes: null, year: 2024,
  category: "Sales", also: ["Customer Behaviour"], topics: ["Sales"], stage: "First Customer", gem: false,
  why: "One sentence on why founders should watch it." },
```

- `id` — the part after `watch?v=` in the YouTube link
- `category` — one of the categories in the `CATEGORIES` list
- `stage` — one of `Idea`, `Validation`, `MVP`, `First Customer`, `Growth`, `Fundraising` (or `null`)
- `gem` — `true` for an excellent but little-known video

## Run it locally

The app is `index.html` plus `videos.js`. Open `index.html` in a browser, or serve the folder with any static server.

After changing `videos.js`, run `node scripts/build-pages.mjs` to rebuild the per-video pages (`v/`), category pages (`c/`) and `sitemap.xml` that search engines use.

## Licence

Code and curation notes: [MIT](LICENSE). Data from the HackerTube dataset: [ODC-By 1.0](https://opendatacommons.org/licenses/by/1-0/). Videos are not part of this project and belong to their creators.
