# StartupTube

**The startup videos founders actually recommend.** → [startuptube.co](https://startuptube.co)

StartupTube is an open-source, community-driven library of the best free startup talks on YouTube — on ideas, customers, sales, business psychology, fundraising and founder stories. Every video is hand-picked and comes with a one-line note on why it's worth watching.

- No account, no algorithm, no clickbait
- Learn by Journey: Idea → Validation → MVP → First Customer → Growth → Fundraising
- Hidden Gems, Founder Playbooks and Startup Case Studies
- Likes, history and watch-later are stored only in your own browser

## How videos are played

Every video plays through YouTube's official embedded player (the privacy-enhanced `youtube-nocookie.com` embed) and follows YouTube's Terms of Service. StartupTube does not host, download or edit any video. Views count toward the original creator's channel, and all videos belong to their creators.

StartupTube is an independent project and is not affiliated with YouTube, Y Combinator, Stanford or any speaker.

## Suggest a video

Open an issue with:

1. The YouTube link
2. Which category it belongs in
3. One sentence on why founders should watch it

Good suggestions are talks you'd send a friend who is starting a company — not motivational clips or ads.

## Add a video yourself

All videos live in the `VIDEOS` list inside `index.html`. Copy one block, change the fields and open a pull request:

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

It's a single HTML file with no build step. Open `index.html` in a browser, or serve the folder with any static server.

## Licence

Code and curation notes: [MIT](LICENSE). Videos are not part of this project and belong to their creators.
