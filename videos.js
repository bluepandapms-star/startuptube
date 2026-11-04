/* StartupTube video library.
   1) Hand-picked StartupTube videos (edit freely).
   2) Videos from the HackerTube dataset (hackertube.org/data, export 2026-10-31), derived from
      open-index/hacker-news. Data licence: ODC-By 1.0 — please keep this credit. */
const VIDEOS = [
  /* ---------- 🚀 Startup & Entrepreneurship ---------- */
  { id: "CBYhVcO4WgI", type: "Lecture", india: false, title: "How to Start a Startup — Lecture 1", channel: "Sam Altman & Dustin Moskovitz · Stanford CS183B", minutes: 44, year: 2014,
    category: "Startup & Entrepreneurship", topics: ["Ideas", "Team"], stage: "Idea", gem: false,
    why: "The classic opener: idea, product, team and execution all matter — and ideas that sound bad are often the good ones." },
  { id: "ii1jcLg-eIQ", also: ["Business Psychology"], type: "Lecture", india: false, title: "Before the Startup", channel: "Paul Graham · Stanford CS183B", minutes: null, year: 2014,
    category: "Startup & Entrepreneurship", topics: ["Ideas"], stage: "Idea", gem: false,
    why: "YC's founder on the counterintuitive truths of startups and why the best ideas come from noticing problems in your own life." },
  { id: "Th8JoIan4dg", type: "Talk", india: false, title: "How to Get and Evaluate Startup Ideas", channel: "Jared Friedman · Y Combinator Startup School", minutes: null, year: null,
    category: "Startup & Entrepreneurship", topics: ["Ideas"], stage: "Idea", gem: false,
    why: "A practical checklist for judging an idea — and the common traps first-time founders fall into." },
  { id: "MT4Ig2uqjTc", also: ["Customer Behaviour"], type: "Talk", india: false, title: "How to Talk to Users", channel: "Eric Migicovsky · Y Combinator", minutes: 32, year: 2019,
    category: "Startup & Entrepreneurship", topics: ["Users", "Product"], stage: "Validation", gem: false,
    why: "A repeatable way to interview customers: ask about real past behaviour, not hypotheticals, and never pitch." },
  { id: "0LNQxT9LvM0", also: ["Customer Behaviour"], type: "Talk", india: false, title: "How to Find Product Market Fit", channel: "David Rusenko · Y Combinator", minutes: null, year: null,
    category: "Startup & Entrepreneurship", topics: ["Product", "Users"], stage: "Validation", gem: false,
    why: "What product-market fit actually feels like from the inside, from the founder of Weebly." },
  { id: "yc1Uwhfxacs", also: ["Customer Behaviour"], type: "Podcast", india: false, title: "A Framework for Finding Product-Market Fit", channel: "Todd Jackson · Lenny's Podcast", minutes: null, year: null,
    category: "Startup & Entrepreneurship", topics: ["Product", "Users"], stage: "Validation", gem: true,
    why: "A clear, step-by-step framework from First Round Capital for getting from 'some users' to real pull." },

  /* ---------- 💻 SaaS & Technology ---------- */
  { id: "C27RVio2rOs", type: "Talk", india: false, title: "Building Product", channel: "Michael Seibel · Y Combinator", minutes: null, year: null,
    category: "SaaS & Technology", topics: ["Product", "MVP"], stage: "MVP", gem: false,
    why: "How small teams ship, learn and iterate fast — and why low costs buy you time to find what works." },
  { id: "yP176MBG9Tk", type: "Lecture", india: false, title: "Building Product, Talking to Users, and Growing", channel: "Adora Cheung · Stanford CS183B", minutes: null, year: 2014,
    category: "SaaS & Technology", topics: ["Product", "Users", "Growth"], stage: "MVP", gem: false,
    why: "How to build the first version, measure what matters and keep talking to users while you grow." },
  { id: "12D8zEdOPYo", also: ["Customer Behaviour"], type: "Lecture", india: false, title: "How to Build Products Users Love", channel: "Kevin Hale · Stanford CS183B", minutes: null, year: 2014,
    category: "SaaS & Technology", topics: ["Product"], stage: "MVP", gem: false,
    why: "The Wufoo founder on design, delight and treating customer support as part of the product." },
  { id: "ASABxNenD_U", type: "Podcast", india: false, title: "Vertical AI Agents Could Be 10X Bigger Than SaaS", channel: "Y Combinator · Lightcone", minutes: null, year: 2024,
    category: "SaaS & Technology", topics: ["AI", "Ideas"], stage: "Idea", gem: false,
    why: "YC partners on why industry-specific AI agents are the next big opportunity for software founders." },
  { id: "4hjiRmgmHiU", also: ["Sales"], type: "Talk", india: false, title: "How to Price for B2B", channel: "Y Combinator Startup School", minutes: null, year: null,
    category: "SaaS & Technology", topics: ["Sales", "Product"], stage: "First Customer", gem: true,
    why: "Most founders charge too little. A short, practical guide to pricing software for businesses." },

  /* ---------- 💰 Investment & Venture Capital ---------- */
  { id: "uFX95HahaUs", type: "Lecture", india: false, title: "How to Raise Money", channel: "Marc Andreessen, Ron Conway & Parker Conrad · Stanford CS183B", minutes: null, year: 2014,
    category: "Investment & Venture Capital", topics: ["Fundraising"], stage: "Fundraising", gem: false,
    why: "A top VC, a legendary angel and a founder explain how investors think and when you should raise." },
  { id: "lw2X3PxKlAY", type: "Talk", india: false, title: "How to Pitch Your Seed Stage Startup", channel: "Michael Seibel · Y Combinator", minutes: null, year: null,
    category: "Investment & Venture Capital", topics: ["Fundraising"], stage: "Fundraising", gem: false,
    why: "What to say in your first two minutes with an investor — clear, simple and memorable." },
  { id: "SHAh6WKBgiE", also: ["Sales"], type: "Lecture", india: false, title: "Sales and Marketing; How to Talk to Investors", channel: "Tyler Bosmeny & YC Partners · Stanford CS183B", minutes: null, year: 2014,
    category: "Investment & Venture Capital", topics: ["Sales", "Fundraising"], stage: "Fundraising", gem: false,
    why: "Two skills in one lecture: closing your first sales, then pitching investors in live role-plays." },
  { id: "677ZtSMr4-4", type: "Explainer", india: false, title: "Startup Funding Explained: Everything You Need to Know", channel: "Startup funding explainer", minutes: null, year: null,
    category: "Investment & Venture Capital", topics: ["Fundraising"], stage: "Fundraising", gem: true,
    why: "Pre-seed, seed, Series A, dilution and valuations explained simply — a great first video on funding." },

  /* ---------- 📈 Marketing & Growth ---------- */
  { id: "hyYCn_kAngI", also: ["Sales"], type: "Talk", india: false, title: "How to Get Your First Customers", channel: "Gustaf Alströmer · Y Combinator Startup School", minutes: null, year: null,
    category: "Marketing & Growth", topics: ["Sales", "Growth", "Users"], stage: "First Customer", gem: false,
    why: "Do things that don't scale: how real YC companies found their very first paying users." },
  { id: "NZp5j5hvn9I", also: ["Sales"], type: "Interview", india: false, title: "50 Founders Share How They Got Their First Customers", channel: "Founder compilation", minutes: null, year: null,
    category: "Marketing & Growth", topics: ["Sales", "Growth"], stage: "First Customer", gem: true,
    why: "Fifty short, real stories — the fastest way to see how many different paths to customer #1 exist." },
  { id: "n_yHZ_vKjno", type: "Lecture", india: false, title: "Growth", channel: "Alex Schultz (Facebook) · Stanford CS183B", minutes: null, year: 2014,
    category: "Marketing & Growth", topics: ["Growth"], stage: "Growth", gem: false,
    why: "Facebook's growth lead on retention first, then the right metrics, then acquisition." },
  { id: "ZoKLofsp8u0", type: "Podcast", india: false, title: "Lessons from Working with 600+ YC Startups", channel: "Gustaf Alströmer · Lenny's Podcast", minutes: null, year: null,
    category: "Marketing & Growth", topics: ["Growth", "Product"], stage: "Growth", gem: false,
    why: "Patterns from hundreds of startups on what actually drives growth — from Airbnb's former growth lead." },

  /* ---------- 🎬 Founder Stories & Documentaries ---------- */
  { id: "UF8uR6Z6KLc", also: ["Business Psychology"], type: "Talk", india: false, title: "Steve Jobs' 2005 Stanford Commencement Address", channel: "Stanford", minutes: null, year: 2005,
    category: "Founder Stories & Documentaries", topics: ["Team"], stage: null, gem: false,
    why: "Three short stories about connecting the dots, losing everything and starting again. Every founder should watch it once." },
  { id: "W608u6sBFpo", type: "Interview", india: false, title: "Brian Chesky on Launching Airbnb and the Challenges of Scale", channel: "Blitzscaling · Stanford", minutes: null, year: null,
    category: "Founder Stories & Documentaries", topics: ["Growth", "Team"], stage: "Growth", gem: false,
    why: "How Airbnb went from air mattresses to a global company, told by its co-founder." },
  { id: "8Pfa8kPjUio", also: ["Business Psychology"], type: "Interview", india: false, title: "A Conversation with NVIDIA's Jensen Huang", channel: "Jensen Huang interview", minutes: null, year: null,
    category: "Founder Stories & Documentaries", topics: ["AI", "Team"], stage: null, gem: false,
    why: "NVIDIA's founder on resilience, long-term bets and building a company that survived near-death moments." },
  { id: "oiC-CuyUAK4", type: "Podcast", india: true, title: "Nikhil & Nithin Kamath, Founders of Zerodha", channel: "SNF Conversations", minutes: null, year: null,
    category: "Founder Stories & Documentaries", topics: ["Growth"], stage: null, gem: false,
    why: "How two brothers built India's biggest stock broker without venture capital." },
  { id: "YKZCU0ynEbs", type: "Interview", india: true, title: "Why Zepto's Aadit Palicha Turned Down Stanford to Deliver Groceries", channel: "Y Combinator", minutes: null, year: null,
    category: "Founder Stories & Documentaries", topics: ["Growth", "Ideas"], stage: null, gem: false,
    why: "A young Indian founder on dropping out and building one of the country's fastest-growing startups." },
  { id: "UacbJ72dluU", type: "Documentary", india: false, title: "Mr. Startup: Paul Graham, Founder of Y Combinator", channel: "Paul Graham profile", minutes: null, year: null,
    category: "Founder Stories & Documentaries", topics: ["Team"], stage: null, gem: false,
    why: "A look at the person behind YC and the simple rules he uses to judge founders." },
  /* ---------- 🧠 Business Psychology ---------- */
  { id: "9X68dm92HVI", type: "Talk", india: false, title: "Are We in Control of Our Decisions?", channel: "Dan Ariely · TED", minutes: null, year: 2009,
    category: "Business Psychology", also: ["Customer Behaviour"], topics: ["Users", "Sales"], stage: null, gem: false,
    why: "A behavioural economist shows how small changes in how choices are presented completely change what people pick." },
  { id: "u4ZoJKF_VuA", type: "Talk", india: false, title: "Start with Why — How Great Leaders Inspire Action", channel: "Simon Sinek · TEDx", minutes: null, year: 2009,
    category: "Business Psychology", also: ["Sales"], topics: ["Team", "Sales"], stage: null, gem: false,
    why: "Why people buy into the reason behind a product before the product itself — useful for pitching, selling and hiring." }
];

VIDEOS.push(...[
{
"id": "CVfnkM44Urs",
"type": "Lecture",
"india": false,
"title": "Lecture 2 — Team and Execution",
"channel": "Sam Altman · Stanford CS183B",
"minutes": null,
"year": 2014,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": "Idea",
"gem": false,
"why": "Part of the famous Stanford × Y Combinator \"How to Start a Startup\" course — startup lessons straight from the people who built the companies."
},
{
"id": "5_0dVHMpJlo",
"type": "Lecture",
"india": false,
"title": "Lecture 5 — Competition is for Losers",
"channel": "Peter Thiel · Stanford CS183B",
"minutes": null,
"year": 2014,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": "Idea",
"gem": false,
"why": "Part of the famous Stanford × Y Combinator \"How to Start a Startup\" course — startup lessons straight from the people who built the companies."
},
{
"id": "oQOC-qy-GDY",
"type": "Lecture",
"india": false,
"title": "Lecture 8 — How to Get Started, Doing Things that Don't Scale, Press",
"channel": "Stanley Tang, Walker Williams & Justin Kan · Stanford CS183B",
"minutes": null,
"year": 2014,
"category": "Marketing & Growth",
"also": [],
"topics": [],
"stage": "First Customer",
"gem": false,
"why": "Part of the famous Stanford × Y Combinator \"How to Start a Startup\" course — startup lessons straight from the people who built the companies."
},
{
"id": "RfWgVWGEuGE",
"type": "Lecture",
"india": false,
"title": "Lecture 10 — Culture",
"channel": "Brian Chesky & Alfred Lin · Stanford CS183B",
"minutes": null,
"year": 2014,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": "Growth",
"gem": false,
"why": "Part of the famous Stanford × Y Combinator \"How to Start a Startup\" course — startup lessons straight from the people who built the companies."
},
{
"id": "H8Dl8rZ6qwE",
"type": "Lecture",
"india": false,
"title": "Lecture 11 — Hiring and Culture, Part 2",
"channel": "Patrick & John Collison, Ben Silbermann · Stanford CS183B",
"minutes": null,
"year": 2014,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": "Growth",
"gem": false,
"why": "Part of the famous Stanford × Y Combinator \"How to Start a Startup\" course — startup lessons straight from the people who built the companies."
},
{
"id": "tFVDjrvQJdw",
"type": "Lecture",
"india": false,
"title": "Lecture 12 — Building for the Enterprise",
"channel": "Aaron Levie · Stanford CS183B",
"minutes": null,
"year": 2014,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": "First Customer",
"gem": false,
"why": "Part of the famous Stanford × Y Combinator \"How to Start a Startup\" course — startup lessons straight from the people who built the companies."
},
{
"id": "dQ7ZvO5DpIw",
"type": "Lecture",
"india": false,
"title": "Lecture 13 — How to be a Great Founder",
"channel": "Reid Hoffman · Stanford CS183B",
"minutes": null,
"year": 2014,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Part of the famous Stanford × Y Combinator \"How to Start a Startup\" course — startup lessons straight from the people who built the companies."
},
{
"id": "6fQHLK1aIBs",
"type": "Lecture",
"india": false,
"title": "Lecture 14 — How to Operate",
"channel": "Keith Rabois · Stanford CS183B",
"minutes": null,
"year": 2014,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": "Growth",
"gem": false,
"why": "Part of the famous Stanford × Y Combinator \"How to Start a Startup\" course — startup lessons straight from the people who built the companies."
},
{
"id": "uVhTvQXfibU",
"type": "Lecture",
"india": false,
"title": "Lecture 15 — How to Manage",
"channel": "Ben Horowitz · Stanford CS183B",
"minutes": null,
"year": 2014,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": "Growth",
"gem": false,
"why": "Part of the famous Stanford × Y Combinator \"How to Start a Startup\" course — startup lessons straight from the people who built the companies."
},
{
"id": "qAws7eXItMk",
"type": "Lecture",
"india": false,
"title": "Lecture 16 — How to Run a User Interview",
"channel": "Emmett Shear · Stanford CS183B",
"minutes": null,
"year": 2014,
"category": "Customer Behaviour",
"also": [],
"topics": [],
"stage": "Validation",
"gem": false,
"why": "Part of the famous Stanford × Y Combinator \"How to Start a Startup\" course — startup lessons straight from the people who built the companies."
},
{
"id": "F4K_qVlYQkg",
"type": "Lecture",
"india": false,
"title": "Lecture 17 — How to Design Hardware Products",
"channel": "Hosain Rahman · Stanford CS183B",
"minutes": null,
"year": 2014,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": "MVP",
"gem": false,
"why": "Part of the famous Stanford × Y Combinator \"How to Start a Startup\" course — startup lessons straight from the people who built the companies."
},
{
"id": "EHzvmyMJEK4",
"type": "Lecture",
"india": false,
"title": "Lecture 18 — Legal and Accounting Basics for Startups",
"channel": "Kirsty Nathoo & Carolynn Levy · Stanford CS183B",
"minutes": null,
"year": 2014,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Part of the famous Stanford × Y Combinator \"How to Start a Startup\" course — startup lessons straight from the people who built the companies."
},
{
"id": "59ZQ-rf6iIc",
"type": "Lecture",
"india": false,
"title": "Lecture 20 — Later-stage Advice",
"channel": "Sam Altman · Stanford CS183B",
"minutes": null,
"year": 2014,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": "Growth",
"gem": false,
"why": "Part of the famous Stanford × Y Combinator \"How to Start a Startup\" course — startup lessons straight from the people who built the companies."
},
{
"id": "cfV70T6Owpw",
"type": "Lecture",
"india": false,
"title": "YC Startup Talk for Students, 2022",
"channel": "Y Combinator",
"minutes": null,
"year": 2022,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": "Idea",
"gem": false,
"why": "Part of the famous Stanford × Y Combinator \"How to Start a Startup\" course — startup lessons straight from the people who built the companies."
},
{
"id": "Unzc731iCUY",
"type": "Lecture",
"india": false,
"title": "How to Speak",
"channel": "MIT OpenCourseWare",
"minutes": null,
"year": null,
"since": 2020,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN treats it as the canonical, near-universally recommended lecture on giving talks and presentations.",
"tags": [
"presentations",
"communication",
"mit",
"patrick winston",
"slides",
"storytelling"
]
},
{
"id": "NNnIGh9g6fA",
"type": "Lecture",
"india": false,
"title": "1. Introduction to Human Behavioral Biology",
"channel": "Stanford",
"minutes": null,
"year": null,
"since": 2012,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "One of the most consistently recommended lecture series on HN, praised as fascinating, funny and eye-opening about human behavior across many scales.",
"tags": [
"sapolsky",
"neuroscience",
"genetics",
"evolution",
"stanford",
"hormones"
]
},
{
"id": "PHe0bXAIuk0",
"type": "Explainer",
"india": false,
"title": "How The Economic Machine Works by Ray Dalio",
"channel": "Principles by Ray Dalio",
"minutes": null,
"year": null,
"since": 2014,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN repeatedly recommends it as the best layperson overview of debt, credit and economic cycles.",
"tags": [
"ray dalio",
"debt cycles",
"credit",
"interest rates",
"economy"
]
},
{
"id": "SCAGc-rkIfo",
"type": "Lecture",
"india": false,
"title": "Essential Ideas for Parents",
"channel": "Jason Salotti",
"minutes": null,
"year": null,
"since": 2015,
"category": "Business Psychology",
"also": [],
"topics": [
"Ideas"
],
"stage": null,
"gem": false,
"why": "Repeatedly called the best way to understand ADHD, and recommended to anyone before commenting on it.",
"tags": [
"adhd",
"russell barkley",
"parenting",
"executive function",
"neurodevelopment"
]
},
{
"id": "rStL7niR7gs",
"type": "Explainer",
"india": false,
"title": "Try to Rule Fairly and You'll Be Overthrown",
"channel": "CGP Grey",
"minutes": null,
"year": null,
"since": 2016,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN treats it as the standard short summary of how power and political incentives work, applied to governments, companies and workplaces.",
"tags": [
"rules for rulers",
"dictators handbook",
"selectorate theory",
"political science",
"cgp grey"
]
},
{
"id": "XXBxV6-zamM",
"type": "Documentary",
"india": false,
"title": "Micro Men - 720p (2009)",
"channel": "gimpymoo",
"minutes": null,
"year": null,
"since": 2015,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it often as an entertaining and authentic dramatization of Sinclair versus Acorn, the story from which ARM grew.",
"tags": [
"clive sinclair",
"acorn",
"bbc micro",
"zx spectrum",
"docudrama"
]
},
{
"id": "eJ3RzGoQC4s",
"type": "Documentary",
"india": false,
"title": "The Century of the Self (Full Adam Curtis Documentary)",
"channel": "David Lessig",
"minutes": null,
"year": null,
"since": 2016,
"category": "Business Psychology",
"also": [
"Customer Behaviour"
],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "HN recommends it often and strongly as an eye-opening account of marketing psychology and the engineering of consumer society.",
"tags": [
"adam curtis",
"edward bernays",
"freud",
"advertising",
"psychology"
]
},
{
"id": "QNznD9hMEh0",
"type": "Interview",
"india": false,
"title": "Jim Simons (full length interview) - Numberphile",
"channel": "Numberphile2",
"minutes": null,
"year": null,
"since": 2015,
"category": "Investment & Venture Capital",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as the best readily available interview with Simons, notable for his emphasis on luck and a humble approach to success.",
"tags": [
"jim simons",
"renaissance technologies",
"numberphile",
"hedge funds",
"mathematics"
]
},
{
"id": "otbnC2zE2rw",
"type": "Talk",
"india": false,
"title": "Designing the Ideal Bootstrapped Business with Jason Cohen",
"channel": "Rob Walling",
"minutes": null,
"year": null,
"since": 2020,
"category": "Startup & Entrepreneurship",
"also": [
"Marketing & Growth",
"Sales"
],
"topics": [
"Ideas",
"Sales"
],
"stage": null,
"gem": false,
"why": "It is the go-to talk HN commenters recommend to anyone asking about bootstrapping, SaaS pricing, or choosing bootstrapping over VC.",
"tags": [
"bootstrapping",
"saas pricing",
"annual prepay",
"microconf",
"startups"
]
},
{
"id": "D1R-jKKp3NA",
"type": "Talk",
"india": false,
"title": "Steve Jobs Stanford Commencement Speech 2005",
"channel": "JoshuaG",
"minutes": null,
"year": null,
"since": 2007,
"category": "Founder Stories & Documentaries",
"also": [
"Business Psychology"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN returns to it for years as an inspirational talk to send to graduates, founders and anyone at a career crossroads.",
"tags": [
"steve jobs",
"commencement speech",
"motivation",
"stanford",
"follow your passion"
]
},
{
"id": "PUv66718DII",
"type": "Talk",
"india": false,
"title": "Bret Victor - Inventing on Principle",
"channel": "Rui Oliveira",
"minutes": null,
"year": null,
"since": 2013,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "It is HN's go-to recommendation for the case that programming environments should give instant feedback, and it appears in nearly every thread on live coding, visual programming or developer tools.",
"tags": [
"bret victor",
"live coding",
"developer tools",
"interaction design",
"visual programming"
]
},
{
"id": "jbkSRLYSojo",
"type": "Explainer",
"india": false,
"title": "Hans Rosling's 200 Countries, 200 Years, 4 Minutes - The Joy of Stats - BBC",
"channel": "BBC",
"minutes": null,
"year": null,
"since": 2010,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters send it as a short antidote to cynicism, showing long-term global progress and the shrinking gap between rich and poor countries.",
"tags": [
"hans rosling",
"data visualization",
"life expectancy",
"poverty",
"gapminder"
]
},
{
"id": "4Q7FTjhvZ7Y",
"type": "Documentary",
"india": false,
"title": "Project Code Rush - The Beginnings of Netscape / Mozilla Documentary",
"channel": "The Documentary Network",
"minutes": null,
"year": null,
"since": 2015,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters recommend it as an intimate, embedded look at late-90s web history and the spirit of building something important under pressure.",
"tags": [
"netscape",
"mozilla",
"dot-com era",
"open source",
"jwz",
"web history"
]
},
{
"id": "PGLYEDpNu60",
"type": "Talk",
"india": false,
"title": "Velocity NY 2013:   Richard Cook, \"Resilience In Complex Adaptive Systems\"",
"channel": "O'Reilly",
"minutes": null,
"year": null,
"since": 2017,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": true,
"why": "HN people cite it constantly as the clearest explanation of normalization of deviance and how complex systems drift toward failure.",
"tags": [
"richard cook",
"resilience",
"normalization of deviance",
"operations",
"failure modes"
]
},
{
"id": "ji5_MqicxSo",
"type": "Lecture",
"india": false,
"title": "Randy Pausch's Last Lecture: Achieving Your Childhood Dreams",
"channel": "Carnegie Mellon University",
"minutes": null,
"year": null,
"since": 2008,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Perennially recommended as an inspirational talk for people facing setbacks or choosing a direction, and a source of oft-quoted lines like the brick wall.",
"tags": [
"randy pausch",
"inspiration",
"mortality",
"career advice",
"carnegie mellon"
]
},
{
"id": "wjZofJX0v4M",
"type": "Explainer",
"india": false,
"title": "Transformers, the tech behind LLMs | Deep Learning Chapter 5",
"channel": "3Blue1Brown",
"minutes": null,
"year": null,
"since": 2024,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "HN treats it as the go-to visual introduction to transformers, and many say it finally made attention and embeddings click.",
"tags": [
"transformers",
"attention",
"embeddings",
"llm",
"deep learning",
"visualization"
]
},
{
"id": "xguam0TKMw8",
"type": "Explainer",
"india": false,
"title": "Principles for Dealing with the Changing World Order by Ray Dalio",
"channel": "Principles by Ray Dalio",
"minutes": null,
"year": null,
"since": 2022,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters recommend it as a clear framework for placing the current US and world situation within historical debt and empire cycles.",
"tags": [
"ray dalio",
"debt cycles",
"rise and fall of empires",
"world order",
"economic history"
]
},
{
"id": "1Jwo5qc78QU",
"type": "Explainer",
"india": false,
"title": "YouTube's copyright system isn't broken. The world's is.",
"channel": "Tom Scott",
"minutes": null,
"year": null,
"since": 2020,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "The default link in copyright and takedown threads, recommended as an excellent, comprehensive explanation of why automated enforcement and the law work as they do.",
"tags": [
"copyright",
"dmca",
"content id",
"fair use",
"youtube"
]
},
{
"id": "d_zt3kGW1NM",
"type": "Talk",
"india": false,
"title": "Winners Take All | Anand Giridharadas | Talks at Google",
"channel": "Talks at Google",
"minutes": null,
"year": null,
"since": 2018,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters recommend it as a pointed critique of philanthropy and win-win thinking, delivered inside Google itself, and cite it across threads on wealth, tax and tech power.",
"tags": [
"philanthropy",
"inequality",
"win-win",
"tech elite",
"political economy"
]
},
{
"id": "k2h2lvhzMDc",
"type": "Talk",
"india": false,
"title": "Ed Catmull, Pixar: Keep Your Crises Small",
"channel": "Stanford Graduate School of Business",
"minutes": null,
"year": null,
"since": 2010,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries"
],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "Repeatedly called one of the most useful talks on building organizations and managing creative teams.",
"tags": [
"pixar",
"ed catmull",
"management",
"team building",
"creativity"
]
},
{
"id": "t1MqJPHxy6g",
"type": "Documentary",
"india": false,
"title": "Alain de Botton: Status Anxiety",
"channel": "Alain de Botton",
"minutes": null,
"year": null,
"since": 2015,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": true,
"why": "HN recommends it as an illuminating, eye-opening long-form take on status, luck and how we judge the successful and unsuccessful.",
"tags": [
"status",
"philosophy",
"meritocracy",
"happiness",
"alain de botton"
]
},
{
"id": "FvmTSpJU-Xc",
"type": "Talk",
"india": false,
"title": "Alan Kay - Normal Considered Harmful",
"channel": "powerfuloutlet",
"minutes": null,
"year": null,
"since": 2012,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "A staple on must-watch lists, recommended as a starting point for Kay's thinking and for why software is often poor and ahistorical.",
"tags": [
"alan kay",
"software engineering",
"computing history",
"web design",
"pop culture"
]
},
{
"id": "QmOF0crdyRU",
"type": "Podcast",
"india": false,
"title": "Controlling Your Dopamine For Motivation, Focus & Satisfaction",
"channel": "Andrew Huberman",
"minutes": null,
"year": null,
"since": 2021,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it repeatedly to people struggling with motivation, distraction or phone and internet addiction, as a science-based guide to dopamine.",
"tags": [
"dopamine",
"motivation",
"focus",
"addiction",
"neuroscience"
]
},
{
"id": "_ahvzDzKdB0",
"type": "Talk",
"india": false,
"title": "Growing a Language, by Guy Steele",
"channel": "Bill Pugh",
"minutes": null,
"year": null,
"since": 2014,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN considers it one of the best technical talks ever and cites it in discussions of language design, small cores and extensibility.",
"tags": [
"guy steele",
"growing a language",
"oopsla",
"language extensibility",
"lisp",
"java"
]
},
{
"id": "bmSAYlu0NcY",
"type": "Talk",
"india": false,
"title": "A Philosophy of Software Design | John Ousterhout | Talks at Google",
"channel": "Talks at Google",
"minutes": null,
"year": null,
"since": 2018,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN treats it as the standard one-hour teaser for the book and recommends it for its deep-modules thinking before buying or reading the book.",
"tags": [
"deep modules",
"complexity",
"abstraction",
"john ousterhout",
"api design"
]
},
{
"id": "ecIWPzGEbFc",
"type": "Talk",
"india": false,
"title": "\"Uncle\" Bob Martin - \"The Future of Programming\"",
"channel": "Paul Stringer's Mobile Tech",
"minutes": null,
"year": null,
"since": 2016,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as an engaging overview of programming history and an argument for professional standards, citing the agile manifesto section and the claim that software has advanced little since the 1950s.",
"tags": [
"software history",
"professionalism",
"agile",
"regulation",
"programming languages"
]
},
{
"id": "ERbvKrH-GC4",
"type": "Explainer",
"india": false,
"title": "Music and Life - Alan Watts",
"channel": "seandulac",
"minutes": null,
"year": null,
"since": 2010,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters post it in threads about purpose, ambition, burnout and career anxiety as a reframing that life is a dance, not a march toward eventual happiness.",
"tags": [
"alan watts",
"present moment",
"purpose",
"happiness",
"animation"
]
},
{
"id": "EY6q5dv_B-o",
"type": "Interview",
"india": false,
"title": "VCF East: Ken Thompson interviewed by Brian Kernighan",
"channel": "Vintage Computer Federation",
"minutes": null,
"year": null,
"since": 2019,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters recommend it for Thompson's funny, first-hand Unix history stories, some of which even Kernighan had not heard.",
"tags": [
"ken thompson",
"brian kernighan",
"unix",
"bell labs",
"computing history",
"tmg"
]
},
{
"id": "a1zDuOPkMSw",
"type": "Lecture",
"india": false,
"title": "Hamming, \"You and Your Research\" (June 6, 1995)",
"channel": "securitylectures",
"minutes": null,
"year": null,
"since": 2012,
"category": "Founder Stories & Documentaries",
"also": [
"Business Psychology"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as career and research advice on choosing important problems and doing first-class work.",
"tags": [
"richard hamming",
"bell labs",
"important problems",
"career",
"learning to learn"
]
},
{
"id": "d0nERTFo-Sk",
"type": "Explainer",
"india": false,
"title": "Fear the Boom and Bust: Keynes vs. Hayek - The Original Economics Rap Battle!",
"channel": "Radical Discourse",
"minutes": null,
"year": null,
"since": 2010,
"category": "Customer Behaviour",
"also": [
"Investment & Venture Capital"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as a funny, accurate and easy primer on Keynesian versus Austrian views of the business cycle.",
"tags": [
"economics",
"keynes",
"hayek",
"business cycle",
"rap"
]
},
{
"id": "f84n5oFoZBc",
"type": "Talk",
"india": false,
"title": "Hammock Driven Development - Rich Hickey",
"channel": "ClojureTV",
"minutes": null,
"year": null,
"since": 2014,
"category": "Business Psychology",
"also": [],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "HN returns to it constantly as permission and method for thinking deeply before coding, and as an antidote to always-working anxiety.",
"tags": [
"rich hickey",
"clojure",
"design",
"deep thinking",
"software craftsmanship",
"productivity"
]
},
{
"id": "hUhisi2FBuw",
"type": "Explainer",
"india": false,
"title": "The Ingenious Design of the Aluminum Beverage Can",
"channel": "engineerguy",
"minutes": null,
"year": null,
"since": 2016,
"category": "SaaS & Technology",
"also": [],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "It is a go-to recommendation whenever cans, good design or mass-produced objects come up, and many also recommend the whole channel.",
"tags": [
"aluminum can",
"engineering",
"pull tab",
"industrial design",
"engineerguy"
]
},
{
"id": "-zRN7XLCRhc",
"type": "Talk",
"india": false,
"title": "LISA11 - Fork Yeah! The Rise and Development of illumos",
"channel": "USENIX",
"minutes": null,
"year": null,
"since": 2012,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN points to it as the definitive, entertaining account of Sun's fate under Oracle, and quotes its Ellison lawnmower advice whenever Oracle behaves badly.",
"tags": [
"illumos",
"opensolaris",
"oracle",
"sun microsystems",
"bryan cantrill",
"open source"
]
},
{
"id": "4XpnKHJAok8",
"type": "Talk",
"india": false,
"title": "Tech Talk: Linus Torvalds on git",
"channel": "Google",
"minutes": null,
"year": null,
"since": 2007,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN repeatedly recommends it as the iconic explanation of why git is designed as it is and why distributed VCS beats centralized ones.",
"tags": [
"git",
"linus torvalds",
"version control",
"subversion",
"linux"
]
},
{
"id": "7IsMeKl-Sv0",
"type": "Explainer",
"india": false,
"title": "Why American Cities Are Broke - The Growth Ponzi Scheme [ST03]",
"channel": "Not Just Bikes",
"minutes": null,
"year": null,
"since": 2021,
"category": "Investment & Venture Capital",
"also": [],
"topics": [
"Growth"
],
"stage": "Growth",
"gem": false,
"why": "HN keeps pointing to it as the clearest explanation of how low-density infrastructure is financed and why it is unsustainable.",
"tags": [
"strong towns",
"urban planning",
"suburbs",
"infrastructure costs",
"car dependence"
]
},
{
"id": "7xTGNNLPyMI",
"type": "Lecture",
"india": false,
"title": "Deep Dive into LLMs like ChatGPT",
"channel": "Andrej Karpathy",
"minutes": null,
"year": null,
"since": 2025,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "HN's most frequent recommendation for a clear, approachable foundation in how LLMs work without heavy math.",
"tags": [
"llm training",
"chatgpt",
"pretraining",
"hallucination",
"tokenization",
"andrej karpathy"
]
},
{
"id": "AnrlSqtpOkw",
"type": "Demo",
"india": false,
"title": "Alan Kay's tribute to Ted Nelson at \"Intertwingled\" Festival",
"channel": "TheTedNelson",
"minutes": null,
"year": null,
"since": 2016,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN returns to it again and again as a demonstration of how programmable and composable 1970s systems were compared with today's.",
"tags": [
"alan kay",
"smalltalk-78",
"ted nelson",
"xerox parc",
"malleable software",
"computer history"
]
},
{
"id": "DnPmg0R1M04",
"type": "Documentary",
"india": false,
"title": "The Century of the Self - Part 1: \"Happiness Machines\"",
"channel": "JustAdamCurtis",
"minutes": null,
"year": null,
"since": 2017,
"category": "Business Psychology",
"also": [
"Customer Behaviour"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters recommend it constantly in threads about advertising, propaganda and manipulation as the origin story of the consumer society.",
"tags": [
"adam curtis",
"edward bernays",
"freud",
"advertising",
"propaganda",
"consumerism"
]
},
{
"id": "l9ZqXlHl65g",
"type": "Explainer",
"india": false,
"title": "The Problem With Facebook",
"channel": "2veritasium",
"minutes": null,
"year": null,
"since": 2014,
"category": "Marketing & Growth",
"also": [
"SaaS & Technology"
],
"topics": [],
"stage": null,
"gem": true,
"why": "HN commenters recommend it, with its follow-up, as an exposé of fake likes and bot activity, and as a warning before spending on Facebook ads.",
"tags": [
"facebook",
"advertising",
"click farms",
"veritasium",
"social media"
]
},
{
"id": "mPqWstVnRjQ",
"type": "Podcast",
"india": false,
"title": "Joe Rogan Experience #1035 - Paul Stamets",
"channel": "PowerfulJRE",
"minutes": null,
"year": null,
"since": 2017,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Commenters offer it as a fascinating, accessible introduction to the world of fungi whenever mushrooms or mycelium come up.",
"tags": [
"mushrooms",
"mycelium",
"bioremediation",
"psilocybin",
"paul stamets"
]
},
{
"id": "u6XAPnuFjJc",
"type": "Explainer",
"india": false,
"title": "RSA ANIMATE: Drive: The surprising truth about what motivates us",
"channel": "Royal Society of Arts",
"minutes": null,
"year": null,
"since": 2010,
"category": "Business Psychology",
"also": [
"Startup & Entrepreneurship"
],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "HN uses it in discussions of pay, management, and motivation as the standard short explanation of autonomy, mastery and purpose.",
"tags": [
"dan pink",
"autonomy mastery purpose",
"management",
"incentives",
"rsa animate"
]
},
{
"id": "3LopI4YeC4I",
"type": "Explainer",
"india": false,
"title": "Why Being Delusional is a Superpower",
"channel": "Veritasium",
"minutes": null,
"year": null,
"since": 2020,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Linked in threads about meritocracy, careers and startups as a reminder that luck shapes who ends up on top.",
"tags": [
"luck",
"meritocracy",
"veritasium",
"success",
"simulation"
]
},
{
"id": "5IUj1EZwpJY",
"type": "Lecture",
"india": false,
"title": "The Only Unbreakable Law",
"channel": "Molly Rocket",
"minutes": null,
"year": null,
"since": 2022,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN treats it as the definitive explanation of Conway's Law and links it in almost any thread about org structure shaping software.",
"tags": [
"conway's law",
"software architecture",
"casey muratori",
"organizational design",
"windows ui"
]
},
{
"id": "IlU-zDU6aQ0",
"type": "Lecture",
"india": false,
"title": "Marty Lobdell - Study Less Study Smart",
"channel": "Pierce College District WA",
"minutes": null,
"year": null,
"since": 2015,
"category": "Business Psychology",
"also": [],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "HN recommends it for productivity, focus and working-from-home threads, since its advice on breaks and mental modes applies beyond studying.",
"tags": [
"studying",
"productivity",
"memory",
"breaks",
"focus"
]
},
{
"id": "NVGuFdX5guE",
"type": "Explainer",
"india": false,
"title": "You Need a Theme, Not a Goal",
"channel": "CGP Grey",
"minutes": null,
"year": null,
"since": 2020,
"category": "Business Psychology",
"also": [],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "A staple recommendation in new year and goal-setting threads, with many commenters adopting yearly themes.",
"tags": [
"new year's resolutions",
"self-improvement",
"habits",
"productivity",
"themes"
]
},
{
"id": "SGJ5cZnoodY",
"type": "Documentary",
"india": false,
"title": "Shenzhen: The Silicon Valley of Hardware (Full Documentary) | Future Cities | WIRED",
"channel": "WIRED Investigations",
"minutes": null,
"year": null,
"since": 2016,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Strongly recommended in Shenzhen and hardware threads for its view of fast cycles, loose IP and the maker ecosystem.",
"tags": [
"shenzhen",
"shanzhai",
"hardware startups",
"manufacturing",
"china"
]
},
{
"id": "jVkLVRt6c1U",
"type": "Talk",
"india": false,
"title": "Mike Monteiro: F*ck You, Pay Me",
"channel": "CreativeMornings HQ",
"minutes": null,
"year": null,
"since": 2015,
"category": "Startup & Entrepreneurship",
"also": [
"SaaS & Technology",
"Business Psychology",
"Sales"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN regulars send freelancers and consultants to it whenever clients don't pay or contracts come up.",
"tags": [
"freelancing",
"contracts",
"client payment",
"negotiation",
"design business"
]
},
{
"id": "qJEWOTZnFeg",
"type": "Interview",
"india": false,
"title": "\"Money doesn't interest me\" - Ton Roosendaal 2017 Interview",
"channel": "Blender Guru",
"minutes": null,
"year": null,
"since": 2018,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as the best account of Blender's history and its user-focused approach as a free software success story.",
"tags": [
"blender",
"open source",
"ton roosendaal",
"3d software",
"software history"
]
},
{
"id": "yJDv-zdhzMY",
"type": "Demo",
"india": false,
"title": "The Mother of All Demos, presented by Douglas Engelbart (1968)",
"channel": "Marcel",
"minutes": null,
"year": null,
"since": 2013,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN treats it as an essential piece of computing history that shows how many modern interface ideas were already solved in 1968.",
"tags": [
"douglas engelbart",
"mother of all demos",
"hypertext",
"mouse",
"collaborative editing",
"human-computer interaction"
]
},
{
"id": "3nwwKbM_vJc",
"type": "Talk",
"india": false,
"title": "Mindfulness with Jon Kabat-Zinn",
"channel": "Google",
"minutes": null,
"year": null,
"since": 2009,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "For over a decade HN has pointed people asking about stress, focus or meditation to this as a restful and approachable introduction to mindfulness.",
"tags": [
"mindfulness",
"meditation",
"jon kabat-zinn",
"stress reduction",
"google tech talk"
]
},
{
"id": "Nb2tebYAaOA",
"type": "Interview",
"india": false,
"title": "Jim Keller: Moore's Law, Microprocessors, and First Principles | Lex Fridman Podcast #70",
"channel": "Lex Fridman",
"minutes": null,
"year": null,
"since": 2020,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it whenever chip architecture, Moore's Law or CPU design comes up, as an unusually deep and accessible view from a top designer.",
"tags": [
"jim keller",
"moore's law",
"cpu design",
"x86",
"transistors",
"lex fridman"
]
},
{
"id": "WVDQEoe6ZWY",
"type": "Commentary",
"india": false,
"title": "This Video Is Sponsored By ███ VPN",
"channel": "Tom Scott",
"minutes": null,
"year": null,
"since": 2019,
"category": "Marketing & Growth",
"also": [],
"topics": [
"Growth"
],
"stage": "Growth",
"gem": false,
"why": "The standard link when VPN marketing comes up, as a clear debunking of the scare tactics behind VPN ads.",
"tags": [
"vpn",
"sponsorships",
"tom scott",
"online privacy",
"advertising"
]
},
{
"id": "_tpB-B8BXk0",
"type": "Lecture",
"india": false,
"title": "This is how you treat ADHD based off science, Dr Russell Barkley part of 2012 Burnett Lecture",
"channel": "Adhd Videos",
"minutes": null,
"year": null,
"since": 2015,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN people with ADHD or ADHD-affected relatives share it as an authoritative, practical talk that helped some seek diagnosis.",
"tags": [
"adhd",
"russell barkley",
"executive function",
"self-regulation",
"treatment"
]
},
{
"id": "dKx1wnXClcI",
"type": "Commentary",
"india": false,
"title": "Music Software & Bad Interface Design: Avid’s Sibelius",
"channel": "Tantacrul",
"minutes": null,
"year": null,
"since": 2019,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as the most entertaining serious critique of a software interface, and a crash course in UX mistakes.",
"tags": [
"ux design",
"sibelius",
"music notation",
"interface design",
"tantacrul"
]
},
{
"id": "kCc8FmEb1nY",
"type": "Tutorial",
"india": false,
"title": "Let's build GPT: from scratch, in code, spelled out.",
"channel": "Andrej Karpathy",
"minutes": null,
"year": null,
"since": 2023,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "It is the go-to recommendation for learning how transformers and LLMs actually work, praised for its clarity and Karpathy's teaching.",
"tags": [
"gpt",
"transformer",
"pytorch",
"nanogpt",
"attention",
"from scratch"
]
},
{
"id": "np_ylvc8Zj8",
"type": "Documentary",
"india": false,
"title": "The Spider's Web: Britain's Second Empire | The Secret World of Finance",
"channel": "Independent POV",
"minutes": null,
"year": null,
"since": 2019,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": true,
"why": "Commenters repeatedly recommend it in tax haven and offshore finance threads as an excellent, low-budget overview of British offshore finance.",
"tags": [
"tax havens",
"city of london",
"secrecy jurisdictions",
"british empire",
"offshore wealth"
]
},
{
"id": "p2LZLYcu_JY",
"type": "Talk",
"india": false,
"title": "Alan Kay: Doing with Images Makes Symbols (Full Version)",
"channel": "Kenneth Friedman",
"minutes": null,
"year": null,
"since": 2016,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Ideas",
"Users"
],
"stage": null,
"gem": false,
"why": "HN recommends it as a favourite tech talk full of good ideas from forgotten 1980s software, worth watching in full.",
"tags": [
"alan kay",
"smalltalk",
"learning",
"user interfaces",
"1980s computing"
]
},
{
"id": "snAhsXyO3Ck",
"type": "Explainer",
"india": false,
"title": "Your Brain Thinks Your Whole Home Is One Room",
"channel": "CGP Grey",
"minutes": null,
"year": null,
"since": 2020,
"category": "Startup & Entrepreneurship",
"also": [
"Business Psychology"
],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "HN recommends it constantly in work-from-home, burnout and procrastination threads as practical advice for separating work from life at home.",
"tags": [
"remote work",
"productivity",
"lockdown",
"routines",
"cgp grey"
]
},
{
"id": "0CDXJ6bMkMY",
"type": "Talk",
"india": false,
"title": "David Heinemeier Hansson at Startup School 08",
"channel": "startupschool",
"minutes": null,
"year": null,
"since": 2010,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "For over a decade HN has pointed bootstrappers and skeptics of hyper-scale startup culture to it as a motivating, influential talk.",
"tags": [
"bootstrapping",
"37signals",
"small business",
"startup school",
"entrepreneurship"
]
},
{
"id": "biYciU1uiUw",
"type": "Commentary",
"india": false,
"title": "Contrepreneurs: The Mikkelsen Twins",
"channel": "Folding Ideas",
"minutes": null,
"year": null,
"since": 2022,
"category": "Marketing & Growth",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN links it whenever threads cover book spam, AI-written ebooks or passive-income hustle culture.",
"tags": [
"video essay",
"book spam",
"grifts",
"audiobooks",
"kindle publishing",
"online courses"
]
},
{
"id": "jkrNMKz9pWU",
"type": "Tutorial",
"india": false,
"title": "A Hackers' Guide to Language Models",
"channel": "Jeremy Howard",
"minutes": null,
"year": null,
"since": 2023,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "Repeatedly named the best practical tutorial for using LLMs, with a well-liked fine-tuning section.",
"tags": [
"language models",
"gpt-4",
"fine-tuning",
"openai api",
"jeremy howard",
"prompting"
]
},
{
"id": "CZIINXhGDcs",
"type": "Talk",
"india": false,
"title": "Debt: The First 5,000 Years | David Graeber | Talks at Google",
"channel": "Talks at Google",
"minutes": null,
"year": null,
"since": 2013,
"category": "Customer Behaviour",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as an 80-minute way to get the gist of the book and a different view of what money is.",
"tags": [
"david graeber",
"debt",
"origins of money",
"barter myth",
"anthropology"
]
},
{
"id": "oIG9ztQw2Gc",
"type": "Talk",
"india": false,
"title": "Jim Keller: Moore’s Law is Not Dead",
"channel": "UC Berkeley EECS",
"minutes": null,
"year": null,
"since": 2019,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "The go-to citation in Moore's Law threads, a convincing counterargument from a top CPU designer.",
"tags": [
"jim keller",
"semiconductors",
"cpu architecture",
"transistor scaling",
"chip design"
]
},
{
"id": "r3snVCRo_bI",
"type": "Commentary",
"india": false,
"title": "VidMe or Why Platforms Aren't Your Friends",
"channel": "Folding Ideas",
"minutes": null,
"year": null,
"since": 2017,
"category": "Marketing & Growth",
"also": [
"SaaS & Technology"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters cite it whenever a thread asks why clones of or alternatives to YouTube, Reddit or Twitter fail or turn toxic.",
"tags": [
"vidme",
"youtube",
"creator economy",
"network effects",
"social platforms"
]
},
{
"id": "vsMydMDi3rI",
"type": "Talk",
"india": false,
"title": "Frank Abagnale | Catch Me If You Can | Talks at Google",
"channel": "Talks at Google",
"minutes": null,
"year": null,
"since": 2018,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Praised as a charismatic, engaging talk with practical security lessons, like why credit cards protect you better than debit cards.",
"tags": [
"frank abagnale",
"fraud prevention",
"social engineering",
"cybersecurity",
"talks at google"
]
},
{
"id": "5PmHRSeA2c8",
"type": "Interview",
"india": false,
"title": "DebConf 14: QA with Linus Torvalds",
"channel": "Adnan Hodzic",
"minutes": null,
"year": null,
"since": 2014,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN returns to it as Linus's own explanation of why shipping software on Linux is hard and why he dislikes GPLv3.",
"tags": [
"linus torvalds",
"packaging",
"gplv3",
"distros",
"binary compatibility",
"debconf"
]
},
{
"id": "5pYeoZaoWrA",
"type": "Documentary",
"india": false,
"title": "This is Financial Advice",
"channel": "Folding Ideas",
"minutes": null,
"year": null,
"since": 2023,
"category": "Investment & Venture Capital",
"also": [],
"topics": [
"Fundraising",
"Team"
],
"stage": null,
"gem": false,
"why": "Recommended as a thorough, sober critique of meme-stock culture and a good starting point whenever GameStop news appears.",
"tags": [
"gamestop",
"meme stocks",
"conspiracy theories",
"online communities",
"investing"
]
},
{
"id": "9QMGAtxUlAc",
"type": "Talk",
"india": false,
"title": "Principles of Technology Leadership | Bryan Cantrill | Monktoberfest 2017",
"channel": "RedMonk Tech Events",
"minutes": null,
"year": null,
"since": 2018,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "HN treats it as a classic, must-watch talk for any discussion of company values, and especially for its takedown of Amazon's leadership principles.",
"tags": [
"bryan cantrill",
"company values",
"leadership principles",
"amazon",
"uber",
"engineering culture"
]
},
{
"id": "GvtNyOzGogc",
"type": "Commentary",
"india": false,
"title": "Sinclair Broadcast Group: Last Week Tonight with John Oliver (HBO)",
"channel": "LastWeekTonight",
"minutes": null,
"year": null,
"since": 2017,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN repeatedly points to it as the eye-opening explanation of media consolidation and scripted local news.",
"tags": [
"sinclair",
"local news",
"media ownership",
"john oliver",
"fcc"
]
},
{
"id": "I8Xc2_FtpHI",
"type": "Lecture",
"india": false,
"title": "Lecture: 2017 Maps of Meaning 01: Context and Background",
"channel": "Jordan B Peterson",
"minutes": null,
"year": null,
"since": 2017,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": true,
"why": "Several HN commenters credit the lecture series with helping them through depression or personal collapse and recommend it as long-form learning.",
"tags": [
"jordan peterson",
"archetypes",
"maps of meaning",
"psychology",
"belief systems"
]
},
{
"id": "LO1mTELoj6o",
"type": "Explainer",
"india": false,
"title": "The 7 Habits of Highly Miserable People",
"channel": "CGP Grey",
"minutes": null,
"year": null,
"since": 2017,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it widely in advice threads on depression, habits, and goal setting as a funny, memorable way to see what to do by seeing what not to do.",
"tags": [
"cgp grey",
"habits",
"mental health",
"goal setting",
"self improvement"
]
},
{
"id": "OoJsPvmFixU",
"type": "Talk",
"india": false,
"title": "I Was SCARED To Say This To NASA... (But I said it anyway) - Smarter Every Day 293",
"channel": "SmarterEveryDay",
"minutes": null,
"year": null,
"since": 2023,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "Commenters point to it whenever Artemis, SLS or Starship refueling comes up, as a candid and critical engineering assessment delivered directly to NASA.",
"tags": [
"artemis",
"apollo",
"nasa",
"spaceflight",
"engineering management",
"starship refueling"
]
},
{
"id": "R9ITLdmfdLI",
"type": "Talk",
"india": false,
"title": "Keynote: Paul Graham, YCombinator",
"channel": "Next Day Video",
"minutes": null,
"year": null,
"since": 2012,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries"
],
"topics": [
"Ideas"
],
"stage": "Idea",
"gem": false,
"why": "HN commenters return to it as a worldview-shaping talk whose predictions about technology and startup ideas turned out to be prescient.",
"tags": [
"paul graham",
"y combinator",
"startup ideas",
"pycon",
"predictions"
]
},
{
"id": "_ZG8HBuDjgc",
"type": "Talk",
"india": false,
"title": "DOUGLAS ADAMS: Parrots, the Universe and Everything",
"channel": "University of California Television (UCTV)",
"minutes": null,
"year": null,
"since": 2014,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": true,
"why": "Adams fans repeatedly call it one of his best talks, a funny and moving look at extinction and the environment.",
"tags": [
"douglas adams",
"last chance to see",
"extinction",
"humor",
"environment"
]
},
{
"id": "fD2briZ6fB0",
"type": "Commentary",
"india": false,
"title": "Incels | ContraPoints",
"channel": "ContraPoints",
"minutes": null,
"year": null,
"since": 2018,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as an empathetic, non-judgmental analysis of incel radicalization and how to counter it.",
"tags": [
"contrapoints",
"incels",
"online radicalization",
"video essay",
"dating"
]
},
{
"id": "EKWGGDXe5MA",
"type": "Lecture",
"india": false,
"title": "Richard Feynman Computer Science Lecture - Hardware, Software and Heuristics",
"channel": "Muon Ray",
"minutes": null,
"year": null,
"since": 2013,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Frequently recommended as the clearest plain-language explanation of what a computer fundamentally is, with at least one commenter saying it changed how they think about programming.",
"tags": [
"feynman",
"filing clerk analogy",
"heuristics",
"computing fundamentals",
"information processing"
]
},
{
"id": "HCUct4NlxE0",
"type": "Demo",
"india": false,
"title": "Joe Ades , Greatest Salesman in New York City History !!! #KONYH !!",
"channel": "KING OF NEW YORK HACKS",
"minutes": null,
"year": null,
"since": 2009,
"category": "Marketing & Growth",
"also": [
"Sales"
],
"topics": [
"Sales"
],
"stage": "Fundraising",
"gem": true,
"why": "HN treats him as a master class in salesmanship and live presentation, where how you sell matters more than what you sell.",
"tags": [
"sales",
"pitching",
"presentation",
"new york",
"peeler"
]
},
{
"id": "NdSD07U5uBs",
"type": "Talk",
"india": false,
"title": "Alan Kay, 2015: Power of Simplicity",
"channel": "Kenneth Friedman",
"minutes": null,
"year": null,
"since": 2015,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN repeatedly cites it as a thought-provoking talk on reducing software complexity and on the state of computing research.",
"tags": [
"alan kay",
"xerox parc",
"complexity",
"abstraction",
"computing research"
]
},
{
"id": "Uj-rK8V-rik",
"type": "Talk",
"india": false,
"title": "Google Self-Driving Car Project | SXSW Interactive 2016",
"channel": "SXSW",
"minutes": null,
"year": null,
"since": 2016,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN returns to it repeatedly as one of the best candid talks on how a real self-driving system sees the road and where it struggles.",
"tags": [
"waymo",
"google self-driving car",
"lidar",
"autonomous driving",
"sensor data"
]
},
{
"id": "X2wLP0izeJE",
"type": "Talk",
"india": false,
"title": "Ira Glass on Storytelling 3",
"channel": "warphotography",
"minutes": null,
"year": null,
"since": 2018,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters return to it as motivation for creators who feel their work is not good enough yet.",
"tags": [
"ira glass",
"taste gap",
"creativity",
"motivation",
"storytelling"
]
},
{
"id": "YQ_xWvX1n9g",
"type": "Documentary",
"india": false,
"title": "Line Goes Up – The Problem With NFTs",
"channel": "Folding Ideas",
"minutes": null,
"year": null,
"since": 2022,
"category": "SaaS & Technology",
"also": [],
"topics": [
"Ideas"
],
"stage": null,
"gem": false,
"why": "It is the go-to long-form critique of crypto that HN commenters recommend whenever skeptics ask for a thorough, well-researched takedown.",
"tags": [
"nfts",
"web3",
"crypto scams",
"video essay",
"folding ideas"
]
},
{
"id": "jTYkdEU_B4o",
"type": "Explainer",
"india": false,
"title": "The Machinery Of Freedom: Illustrated summary",
"channel": "bitbutter",
"minutes": null,
"year": null,
"since": 2012,
"category": "Customer Behaviour",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters use it as a short introduction to anarcho-capitalist ideas about private law and how disputes could be resolved without a state.",
"tags": [
"david friedman",
"polycentric law",
"libertarianism",
"anarcho-capitalism",
"private courts"
]
},
{
"id": "l7TONauJGfc",
"type": "Lecture",
"india": false,
"title": "NVC Marshall Rosenberg - San Francisco Workshop - FULL ENGLISH SUBTITLES TRANSCRIPTION",
"channel": "Centrum Nadania",
"minutes": null,
"year": null,
"since": 2019,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters send people to it as the primary source for NVC, recommended for relationships, compassion and difficult conversations.",
"tags": [
"nvc",
"marshall rosenberg",
"communication",
"empathy",
"conflict resolution"
]
},
{
"id": "pqzcCfUglws",
"type": "Talk",
"india": false,
"title": "The Psychology of Human Misjudgement - Charlie Munger Full Speech",
"channel": "BuffettMungerWisdom",
"minutes": null,
"year": null,
"since": 2014,
"category": "Investment & Venture Capital",
"also": [
"Customer Behaviour",
"Business Psychology"
],
"topics": [
"Fundraising"
],
"stage": null,
"gem": true,
"why": "HN regards it as a classic to revisit every few years for improving decisions and self-awareness.",
"tags": [
"charlie munger",
"mental models",
"cognitive bias",
"psychology",
"investing"
]
},
{
"id": "t705r8ICkRw",
"type": "Interview",
"india": false,
"title": "Starbase Tour with Elon Musk [PART 1 // Summer 2021]",
"channel": "Everyday Astronaut",
"minutes": null,
"year": null,
"since": 2021,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries"
],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "HN cites it as evidence of Musk's hands-on engineering depth and for his advice to question requirements and not optimize things that should not exist.",
"tags": [
"spacex",
"starship",
"elon musk",
"starbase",
"engineering management",
"rocket manufacturing"
]
},
{
"id": "tiJVJ5QRRUE",
"type": "Documentary",
"india": false,
"title": "Brainwash: The Gender Equality Paradox",
"channel": "hgoetkehgoetke",
"minutes": null,
"year": null,
"since": 2014,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended in HN threads on gender gaps in tech as a well-researched look at how gender differences and professional choices may arise.",
"tags": [
"gender equality paradox",
"norway",
"sociology",
"tech diversity",
"sex differences"
]
},
{
"id": "wt-iVFxgFWk",
"type": "Talk",
"india": false,
"title": "QuakeCon 2012 - John Carmack Keynote",
"channel": "QuakeCon Official",
"minutes": null,
"year": null,
"since": 2012,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN rates his QuakeCon keynotes among the best technical talks, and cites this one for the VR segment and for his views on Linux gaming.",
"tags": [
"john carmack",
"quakecon",
"virtual reality",
"software engineering",
"id software",
"keynote"
]
},
{
"id": "y_SXXTBypIg",
"type": "Explainer",
"india": false,
"title": "The Truth about American Cities - Part 1 - Strong Towns [ST01]",
"channel": "Not Just Bikes",
"minutes": null,
"year": null,
"since": 2021,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN people recommend it as the best introduction to why sprawl and car dependence are fiscally unsustainable, often pointing to the whole series.",
"tags": [
"strong towns",
"suburban sprawl",
"car dependence",
"municipal finance",
"not just bikes"
]
},
{
"id": "BzB5xtGGsTc",
"type": "Explainer",
"india": false,
"title": "The Economics of Airline Class",
"channel": "Wendover Productions",
"minutes": null,
"year": null,
"since": 2017,
"category": "Customer Behaviour",
"also": [
"Startup & Entrepreneurship",
"Sales"
],
"topics": [
"Sales"
],
"stage": null,
"gem": true,
"why": "HN commenters recommend it as an in-depth, accessible look at airline class economics and revisit it in many discussions about airlines.",
"tags": [
"airlines",
"first class",
"business class",
"pricing",
"wendover"
]
},
{
"id": "T71ibcZAX3I",
"type": "Talk",
"india": false,
"title": "The Simple Path to Wealth | JL Collins | Talks at Google",
"channel": "Talks at Google",
"minutes": null,
"year": null,
"since": 2019,
"category": "Investment & Venture Capital",
"also": [],
"topics": [
"Fundraising"
],
"stage": null,
"gem": false,
"why": "HN points people to it as the clearest single video on simple, long-term index fund investing.",
"tags": [
"jl collins",
"index funds",
"personal finance",
"retirement",
"financial independence"
]
},
{
"id": "_Cp-BGQfpHQ",
"type": "Demo",
"india": false,
"title": "BOLTR: Juicero, Cold Press Juicer for Rich Weirdos",
"channel": "AvE",
"minutes": null,
"year": null,
"since": 2017,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [
"Product"
],
"stage": null,
"gem": true,
"why": "HN treats it as the classic teardown and the go-to example of over-engineered hardware built without real-world constraints.",
"tags": [
"juicero",
"teardown",
"over-engineering",
"design for manufacture",
"hardware startups"
]
},
{
"id": "aFwVf5a3pZM",
"type": "Lecture",
"india": false,
"title": "LEADERSHIP LAB: Writing Beyond the Academy 1.23.15",
"channel": "UChicago Social Sciences",
"minutes": null,
"year": null,
"since": 2020,
"category": "Business Psychology",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": true,
"why": "HN treats it as the definitive writing lecture and recommends it repeatedly, with several commenters saying it changed how they write.",
"tags": [
"writing",
"readers",
"academic writing",
"communication",
"clarity"
]
},
{
"id": "fpbOEoRrHyU",
"type": "Commentary",
"india": false,
"title": "Net Neutrality: Last Week Tonight with John Oliver (HBO)",
"channel": "LastWeekTonight",
"minutes": null,
"year": null,
"since": 2014,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters use it as the go-to funny, accessible explanation of net neutrality and credit it with driving public comments to the FCC.",
"tags": [
"net neutrality",
"fcc",
"isp competition",
"john oliver",
"telecom policy"
]
},
{
"id": "l_F9jxsfGCw",
"type": "Talk",
"india": false,
"title": "Darius Kazemi, Tiny Subversions - XOXO Festival (2014)",
"channel": "XOXO Festival",
"minutes": null,
"year": null,
"since": 2015,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN uses it as the favorite antidote to survivorship-bias success stories, arguing that trying many cheap things raises your odds.",
"tags": [
"side projects",
"survivorship bias",
"luck",
"indie creators",
"bots",
"xoxo"
]
},
{
"id": "nM9f0W2KD5s",
"type": "Podcast",
"india": false,
"title": "Peter Thiel on \"The Portal\", Episode #001: \"An Era of Stagnation & Universal Institutional Failure.\"",
"channel": "Eric Weinstein",
"minutes": null,
"year": null,
"since": 2019,
"category": "Customer Behaviour",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN people recommend it as a thought-provoking, wide-ranging case for the stagnation thesis, worth hearing even if you disagree with Thiel.",
"tags": [
"peter thiel",
"eric weinstein",
"stagnation",
"institutions",
"innovation"
]
},
{
"id": "nYg6jzotiAc",
"type": "Interview",
"india": false,
"title": "HD Feynman: FUN TO IMAGINE complete (with optional Chinese subtitles)",
"channel": "Christopher Sykes",
"minutes": null,
"year": null,
"since": 2021,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": true,
"why": "HN commenters point to it as an equation-free, charming way to hear Feynman explain physics to laypeople, including his famous refusal to explain magnetism with simple analogies.",
"tags": [
"feynman",
"physics",
"magnetism",
"science communication",
"bbc"
]
},
{
"id": "o0VrZPBskpg",
"type": "Talk",
"india": false,
"title": "Toward Rational, Authentic Food Choices | Melanie Joy | TEDxMünchen",
"channel": "TEDx Talks",
"minutes": null,
"year": null,
"since": 2015,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": true,
"why": "Recommended in vegetarian and animal-welfare threads as an introduction to the psychology behind how we treat animals differently.",
"tags": [
"carnism",
"meat eating",
"animal ethics",
"psychology",
"veganism"
]
},
{
"id": "zb7Bs98KmnY",
"type": "Explainer",
"india": false,
"title": "Longer-lasting light bulbs: it was complicated",
"channel": "Technology Connections",
"minutes": null,
"year": null,
"since": 2023,
"category": "Customer Behaviour",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN's go-to link for correcting the lightbulb conspiracy myth, giving an engineer's view of the lifespan versus efficiency tradeoff.",
"tags": [
"incandescent bulbs",
"phoebus cartel",
"planned obsolescence",
"efficiency",
"lighting"
]
},
{
"id": "zjkBMFhNj_g",
"type": "Talk",
"india": false,
"title": "[1hr Talk] Intro to Large Language Models",
"channel": "Andrej Karpathy",
"minutes": null,
"year": null,
"since": 2023,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "HN recommends it as the dense, approachable starting point for understanding LLMs and often cites it for specific claims about scaling and training.",
"tags": [
"llm",
"pretraining",
"scaling",
"jailbreaks",
"karpathy",
"system 2"
]
},
{
"id": "-HFwok9SlQQ",
"type": "Talk",
"india": false,
"title": "Millennials Don't Exist! Adam Conover at Deep Shift",
"channel": "Adam Conover",
"minutes": null,
"year": null,
"since": 2016,
"category": "Marketing & Growth",
"also": [],
"topics": [
"Growth"
],
"stage": "Growth",
"gem": false,
"why": "HN commenters cite it when arguing that generational labels are marketing inventions used to belittle groups.",
"tags": [
"millennials",
"generations",
"marketing",
"pop sociology",
"adam conover"
]
},
{
"id": "6UsHHOCH4q8",
"type": "Commentary",
"india": false,
"title": "Tobacco: Last Week Tonight with John Oliver (HBO)",
"channel": "LastWeekTonight",
"minutes": null,
"year": null,
"since": 2015,
"category": "Customer Behaviour",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN uses it in TPP and trade-deal threads as a clear example of ISDS being used by corporations against governments.",
"tags": [
"tobacco",
"isds",
"tpp",
"plain packaging",
"john oliver"
]
},
{
"id": "F9cO3-MLHOM",
"type": "Talk",
"india": false,
"title": "All-In Summit: Bill Gurley presents 2,851 Miles",
"channel": "All-In Podcast",
"minutes": null,
"year": null,
"since": 2023,
"category": "Investment & Venture Capital",
"also": [
"SaaS & Technology"
],
"topics": [
"Fundraising",
"AI"
],
"stage": "Fundraising",
"gem": true,
"why": "HN commenters repeatedly recommend it as the clearest explanation of regulatory capture, and cite it in threads on AI regulation, GDPR and telecom.",
"tags": [
"regulation",
"lobbying",
"incumbents",
"ai policy",
"venture capital"
]
},
{
"id": "G1r55efei5c",
"type": "Talk",
"india": false,
"title": "!!Con 2016 - How I Code and Use a Computer at 1,000 WPM!! By Sina Bahram",
"channel": "Confreaks",
"minutes": null,
"year": null,
"since": 2019,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": true,
"why": "HN commenters repeatedly share it because it is an eye-opening look at screen-reader use, and because at about 6:30 it addresses how inaccessible Hacker News itself is.",
"tags": [
"blind developers",
"screen reader",
"accessibility",
"keyboard navigation",
"bangbangcon"
]
},
{
"id": "P-2P3MSZrBM",
"type": "Podcast",
"india": false,
"title": "Joscha Bach: Artificial Consciousness and the Nature of Reality | Lex Fridman Podcast #101",
"channel": "Lex Fridman",
"minutes": null,
"year": null,
"since": 2020,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": true,
"why": "Praised as a long but rewarding conversation, with commenters especially liking Bach's emphasis on modelling as a skill and his bridge between mind and computation.",
"tags": [
"joscha bach",
"consciousness",
"artificial intelligence",
"simulation",
"philosophy of mind"
]
},
{
"id": "Uo08uS904Rg",
"type": "Explainer",
"india": false,
"title": "Why Is It So Hard to Do Something That Should Be Easy? (Wall of Awful pt. 1)",
"channel": "How to ADHD",
"minutes": null,
"year": null,
"since": 2020,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": true,
"why": "HN commenters use it as the go-to name and explanation for task paralysis and procrastination, and say it helped them see why they avoid tasks.",
"tags": [
"adhd",
"procrastination",
"wall of awful",
"executive function",
"motivation"
]
},
{
"id": "ZTC_RxWN_xo",
"type": "Lecture",
"india": false,
"title": "Secret History of Silicon Valley",
"channel": "Computer History Museum",
"minutes": null,
"year": null,
"since": 2010,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters call it a favorite introduction to Valley history and cite it whenever government and military funding of tech comes up.",
"tags": [
"silicon valley",
"steve blank",
"radar",
"stanford",
"military funding",
"history"
]
},
{
"id": "fhOHn9TClXY",
"type": "Interview",
"india": false,
"title": "Joe Armstrong & Alan Kay - Joe Armstrong interviews Alan Kay",
"channel": "Erlang Solutions",
"minutes": null,
"year": null,
"since": 2016,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN uses it in debates about what OOP originally meant, since Kay's message-passing view lines up with Erlang's processes.",
"tags": [
"alan kay",
"joe armstrong",
"erlang",
"message passing",
"smalltalk",
"meta ii"
]
},
{
"id": "hVimVzgtD6w",
"type": "Talk",
"india": false,
"title": "The best stats you've ever seen | Hans Rosling",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2013,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": true,
"why": "HN invokes it as the classic evidence that the world has improved and that people misjudge it, and as an example of great data presentation.",
"tags": [
"gapminder",
"hans rosling",
"data visualization",
"child mortality",
"world development"
]
},
{
"id": "id1WShzzMCQ",
"type": "Lecture",
"india": false,
"title": "How to Invent the Future I - Stanford CS183F: Startup School",
"channel": "Stanford Online",
"minutes": null,
"year": null,
"since": 2018,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "It is HN's standard answer to questions on creativity, finding problems and PARC history, valued for Kay's thinking about thinking.",
"tags": [
"alan kay",
"xerox parc",
"innovation",
"research",
"startup school"
]
},
{
"id": "kYfNvmF0Bqw",
"type": "Interview",
"india": false,
"title": "Steve Jobs Secrets of Life",
"channel": "Silicon Valley Historical Association",
"minutes": null,
"year": null,
"since": 2012,
"category": "Founder Stories & Documentaries",
"also": [
"Business Psychology"
],
"topics": [],
"stage": null,
"gem": false,
"why": "Quoted in threads on motivation, agency and regret as an encouraging reminder that the world can be changed.",
"tags": [
"steve jobs",
"motivation",
"entrepreneurship",
"life advice",
"1994 interview"
]
},
{
"id": "lw6TaiXzHAE",
"type": "Talk",
"india": false,
"title": "OOPSLA Conference: Growing a Language",
"channel": "Computer History Museum",
"minutes": null,
"year": null,
"since": 2020,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Growth"
],
"stage": null,
"gem": false,
"why": "Treated as a must-watch for language designers, and cited whenever extensibility and language size are debated.",
"tags": [
"guy steele",
"language growth",
"extensibility",
"oopsla",
"java"
]
},
{
"id": "p6K4iIMlouI",
"type": "Talk",
"india": false,
"title": "7 Habits For Effective Text Editing 2.0",
"channel": "GoogleTalksArchive",
"minutes": null,
"year": null,
"since": 2013,
"category": "Business Psychology",
"also": [],
"topics": [
"Product"
],
"stage": null,
"gem": true,
"why": "HN recommends it as a lasting philosophy for improving your editing process incrementally, and it was widely remembered after Moolenaar's death.",
"tags": [
"vim",
"bram moolenaar",
"editor habits",
"productivity",
"automation"
]
},
{
"id": "sG9UMMq2dz4",
"type": "Commentary",
"india": false,
"title": "The Patent Scam Intro",
"channel": "Austin Meyer",
"minutes": null,
"year": null,
"since": 2016,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters pass it around as an eye-opening first-hand account of patent trolling and the Texas courts that favor it.",
"tags": [
"patent trolls",
"software patents",
"litigation",
"x-plane",
"eastern district of texas"
]
},
{
"id": "ynbgMKclWWc",
"type": "Lecture",
"india": false,
"title": "Democracy at Work: Curing Capitalism | Richard Wolff | Talks at Google",
"channel": "Talks at Google",
"minutes": null,
"year": null,
"since": 2017,
"category": "Customer Behaviour",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters share it as an accessible case for worker cooperatives and workplace democracy as a model for a modern left.",
"tags": [
"richard wolff",
"democracy at work",
"worker coops",
"critique of capitalism",
"socialism"
]
},
{
"id": "0SARbwvhupQ",
"type": "Talk",
"india": false,
"title": "Google I/O 2009 - The Myth of the Genius Programmer",
"channel": "Google for Developers",
"minutes": null,
"year": null,
"since": 2011,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": true,
"why": "HN regulars recommend it as a career-shaping talk on code review, humility and collaborative development.",
"tags": [
"code review",
"ego",
"bus factor",
"team culture",
"open source"
]
},
{
"id": "3Fx5Q8xGU8k",
"type": "Lecture",
"india": false,
"title": "Competition is for Losers with Peter Thiel (How to Start a Startup 2014: 5)",
"channel": "Y Combinator",
"minutes": null,
"year": null,
"since": 2017,
"category": "Startup & Entrepreneurship",
"also": [
"SaaS & Technology"
],
"topics": [],
"stage": null,
"gem": true,
"why": "HN recommends it as a serious, influential talk on market size and monopoly, though some commenters criticize its philosophy as endorsing anti-competitive goals.",
"tags": [
"peter thiel",
"zero to one",
"competition",
"monopoly",
"startup strategy",
"y combinator"
]
},
{
"id": "3ZTGwcHQfLY",
"type": "Documentary",
"india": false,
"title": "I Tried To Make Something In America (The Smarter Scrubber Experiment) - Smarter Every Day 308",
"channel": "SmarterEveryDay",
"minutes": null,
"year": null,
"since": 2025,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it constantly in US manufacturing debates as a vivid demonstration of how much domestic industrial capability has been lost.",
"tags": [
"manufacturing",
"supply chain",
"injection molding",
"made in usa",
"smarter every day"
]
},
{
"id": "5eW6Eagr9XA",
"type": "Explainer",
"india": false,
"title": "The Expert Myth",
"channel": "Veritasium",
"minutes": null,
"year": null,
"since": 2022,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": true,
"why": "Frequently recommended in threads on learning, the 10,000 hours rule and deliberate practice as a clearer account of how expertise develops.",
"tags": [
"expertise",
"deliberate practice",
"chess",
"pattern recognition",
"learning"
]
},
{
"id": "8S0FDjFBj8o",
"type": "Talk",
"india": false,
"title": "How to sound smart in your TEDx Talk | Will Stephen | TEDxNewYork",
"channel": "TEDx Talks",
"minutes": null,
"year": null,
"since": 2015,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": true,
"why": "HN recommends it as a funny deconstruction of TED talk style, and as a favorite example of the appearance of meaning without content.",
"tags": [
"ted talks",
"satire",
"public speaking",
"rhetoric",
"humor"
]
},
{
"id": "D9H9qTdserM",
"type": "Lecture",
"india": false,
"title": "\"Why Zebras Don't Get Ulcers: Stress and Health\" by Dr. Robert Sapolsky",
"channel": "Beckman Institute at Illinois",
"minutes": null,
"year": null,
"since": 2019,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters recommend it as an entertaining and informative explanation of how stress affects health.",
"tags": [
"sapolsky",
"stress",
"neuroscience",
"health",
"zebras"
]
},
{
"id": "DZCBRHOg3PQ",
"type": "Podcast",
"india": false,
"title": "Joe Rogan Experience #1258 - Jack Dorsey, Vijaya Gadde & Tim Pool",
"channel": "PowerfulJRE",
"minutes": null,
"year": null,
"since": 2019,
"category": "SaaS & Technology",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN people cite it as insight into how Twitter thought about moderation, and as a source for Tim Pool's arguments about uneven enforcement.",
"tags": [
"twitter",
"jack dorsey",
"tim pool",
"content moderation",
"joe rogan"
]
},
{
"id": "Eq3bUFgEcb4",
"type": "Documentary",
"india": false,
"title": "Notation Must Die: The Battle For How We Read Music",
"channel": "Tantacrul",
"minutes": null,
"year": null,
"since": 2023,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Repeatedly recommended as the definitive, well-made explanation of why attempts to reinvent music notation fail and what tradeoffs the current system makes.",
"tags": [
"music notation",
"music theory",
"piano roll",
"history of music",
"musescore"
]
},
{
"id": "H9B5mYfBPlY",
"type": "Podcast",
"india": false,
"title": "Dr. Gabor Maté — Trauma, Addiction, Ayahuasca, and More",
"channel": "Tim Ferriss",
"minutes": null,
"year": null,
"since": 2018,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as a thoughtful, honest look at the causes of addiction and depression, and as a deeper Mate interview than most.",
"tags": [
"gabor mate",
"addiction",
"trauma",
"depression",
"adhd",
"ayahuasca"
]
},
{
"id": "XVbuk3jizGM",
"type": "Demo",
"india": false,
"title": "A New Car UI: How touch screen controls in cars should work",
"channel": "Matthaeus Krenn",
"minutes": null,
"year": null,
"since": 2017,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Repeatedly cited in car touchscreen debates as an elegant, sensible alternative to distracting automotive UIs.",
"tags": [
"automotive ui",
"touchscreen",
"interaction design",
"prototype",
"driver distraction"
]
},
{
"id": "agOdP2Bmieg",
"type": "Talk",
"india": false,
"title": "Bret Victor - The Humane Representation of Thought",
"channel": "Colin McDonnell",
"minutes": null,
"year": null,
"since": 2017,
"category": "SaaS & Technology",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN treats it as a foundational Bret Victor talk that reshaped how people think about software and interfaces, often cited alongside Dynamicland.",
"tags": [
"bret victor",
"direct manipulation",
"dynamicland",
"representation",
"interface design"
]
},
{
"id": "iFDe5kUUyT0",
"type": "Explainer",
"india": false,
"title": "The IOU Machine: How Currency Is Created | Hidden Secrets of Money Ep. 4",
"channel": "GoldSilver ",
"minutes": null,
"year": null,
"since": 2014,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": true,
"why": "Recommended, often in Bitcoin and monetary threads, as a clear introduction to how the US money system works, though it comes with a strong goldbug slant.",
"tags": [
"federal reserve",
"fractional reserve",
"fiat currency",
"debt",
"gold"
]
},
{
"id": "iwcYp-XT7UI",
"type": "Podcast",
"india": false,
"title": "George Hotz: Comma.ai, OpenPilot, and Autonomous Vehicles | Lex Fridman Podcast #31",
"channel": "Lex Fridman",
"minutes": null,
"year": null,
"since": 2019,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "HN recommends it for Hotz's reasoning on cameras versus lidar and for an opinionated, original thinker's overview of comma and openpilot.",
"tags": [
"george hotz",
"comma.ai",
"openpilot",
"camera vs lidar",
"autonomous vehicles"
]
},
{
"id": "qd_hEja6bzE",
"type": "Documentary",
"india": false,
"title": "Pulling Power from the Sky: The Story of Makani [Feature Film]",
"channel": "X, The Moonshot Factory",
"minutes": null,
"year": null,
"since": 2020,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": true,
"why": "HN recommends it as a technically rich, beautifully made documentary on ambitious hardware engineering and failure.",
"tags": [
"makani",
"energy kites",
"hardware engineering",
"x moonshot",
"wind power",
"startup failure"
]
},
{
"id": "rE3j_RHkqJc",
"type": "Explainer",
"india": false,
"title": "Can You Watch This Without Getting Angry?",
"channel": "CGP Grey",
"minutes": null,
"year": null,
"since": 2015,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN links it constantly in threads on social media, polarization and outrage as the canonical explanation of why angry content wins.",
"tags": [
"memes",
"social media",
"outrage",
"virality",
"polarization"
]
},
{
"id": "rhgwIhB58PA",
"type": "Explainer",
"india": false,
"title": "The Biggest Myth In Education",
"channel": "Veritasium",
"minutes": null,
"year": null,
"since": 2021,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "The standard link whenever someone claims to be a visual learner or learning styles come up, with sources listed in the description.",
"tags": [
"learning styles",
"education",
"psychology",
"myths",
"memory"
]
},
{
"id": "v1WiCGq-PcY",
"type": "Talk",
"india": false,
"title": "Bryan Cranston's Advice to Aspiring Actors",
"channel": "Oscars",
"minutes": null,
"year": null,
"since": 2015,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN applies it to job interviews and confidence, recommending the mindset of not interviewing from a place of desperation.",
"tags": [
"bryan cranston",
"auditions",
"job interviews",
"confidence",
"advice"
]
},
{
"id": "wGt4XwBbCvA",
"type": "Lecture",
"india": false,
"title": "Jancovici : Can we save energy, jobs and growth at the same time ? 08/01/2018",
"channel": "Jean-Marc Jancovici",
"minutes": null,
"year": null,
"since": 2019,
"category": "Investment & Venture Capital",
"also": [],
"topics": [
"Growth"
],
"stage": "Growth",
"gem": false,
"why": "Recommended as a sober, physics-based account of how energy underlies the economy.",
"tags": [
"energy",
"gdp",
"climate",
"nuclear",
"peak oil"
]
},
{
"id": "1e8VZlPBx_0",
"type": "Lecture",
"india": false,
"title": "How to Invent the Future II - Stanford CS183F: Startup School",
"channel": "Stanford Online",
"minutes": null,
"year": null,
"since": 2017,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "Frequently suggested in Ask HN threads on finding ideas, creativity and why incumbents like Xerox missed what they invented.",
"tags": [
"alan kay",
"xerox parc",
"innovation",
"startups",
"computing history"
]
},
{
"id": "5MgBikgcWnY",
"type": "Talk",
"india": false,
"title": "The first 20 hours -- how to learn anything | Josh Kaufman | TEDxCSU",
"channel": "TEDx Talks",
"minutes": null,
"year": null,
"since": 2014,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN uses it as the standard counterpoint to the 10,000-hour rule and as an encouraging recipe for starting new skills.",
"tags": [
"20 hours",
"learning",
"deliberate practice",
"10000 hour rule",
"self-improvement"
]
},
{
"id": "9PK-netuhHA",
"type": "Commentary",
"india": false,
"title": "The Lottery: Last Week Tonight with John Oliver (HBO)",
"channel": "LastWeekTonight",
"minutes": null,
"year": null,
"since": 2014,
"category": "Customer Behaviour",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Go-to reference in lottery threads for the point that earmarked lottery revenue does not really add to school funding.",
"tags": [
"lottery",
"john oliver",
"public funding",
"education funding",
"regressive tax"
]
},
{
"id": "A9UmdY0E8hU",
"type": "Talk",
"india": false,
"title": "Where in the world is it easiest to get rich? | Harald Eia | TEDxOslo",
"channel": "TEDx Talks",
"minutes": null,
"year": null,
"since": 2016,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN uses it as a counterintuitive data point in debates on welfare states, social mobility and entrepreneurship.",
"tags": [
"nordic model",
"social mobility",
"welfare state",
"millionaires per capita",
"economics"
]
},
{
"id": "Gatn5ameRr8",
"type": "Lecture",
"india": false,
"title": "\"Two incompatible sacred values in American universities\" Jon Haidt, Hayek Lecture Series",
"channel": "Duke University Department of Political Science",
"minutes": null,
"year": null,
"since": 2017,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": true,
"why": "HN cites it heavily in diversity and academia debates as an intellectual analysis of the truth versus social justice conflict.",
"tags": [
"jonathan haidt",
"campus politics",
"moral psychology",
"viewpoint diversity",
"academic freedom"
]
},
{
"id": "Hhy7JUinlu0",
"type": "Explainer",
"india": false,
"title": "Margin Call (2011) - Senior Partners Emergency Meeting [HD 1080p] (Re-Upload / Audio Fixed)",
"channel": "Extractor",
"minutes": null,
"year": null,
"since": 2018,
"category": "Investment & Venture Capital",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "HN cites the scene as a model of clear, decisive communication and of leaders acting fast to survive, and recommends the film as the best take on 2008.",
"tags": [
"margin call",
"financial crisis",
"film clip",
"leadership",
"communication"
]
},
{
"id": "JxBg4sMusIg",
"type": "Tutorial",
"india": false,
"title": "You Suck at Excel - Joel Spolsky (Reupload)",
"channel": "Cool Bug Facts",
"minutes": null,
"year": null,
"since": 2024,
"category": "Business Psychology",
"also": [],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "HN commenters call it an internet classic that makes you a more proficient Excel user, and note it is still relevant despite predating newer functions like XLOOKUP.",
"tags": [
"excel",
"spreadsheets",
"joel spolsky",
"data tables",
"keyboard shortcuts"
]
},
{
"id": "T0CpOYZZZW4",
"type": "Documentary",
"india": false,
"title": "The Spectacular Failure of the Star Wars Hotel",
"channel": "Jenny Nicholson",
"minutes": null,
"year": null,
"since": 2024,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": true,
"why": "HN people strongly recommend it as the best overview of the Galactic Starcruiser and a case study in misaligned incentives and poor guest experience, engaging despite its length.",
"tags": [
"star wars",
"disney",
"galactic starcruiser",
"immersive experience",
"larp",
"theme parks"
]
},
{
"id": "XfQUOHlAocY",
"type": "Explainer",
"india": false,
"title": "How Bankrupt American Cities Stay Alive - Debt [ST04]",
"channel": "Not Just Bikes",
"minutes": null,
"year": null,
"since": 2021,
"category": "Investment & Venture Capital",
"also": [],
"topics": [
"Growth"
],
"stage": "Growth",
"gem": false,
"why": "Recommended as an introduction to the finances of suburban sprawl and its long-term consequences.",
"tags": [
"strong towns",
"municipal debt",
"suburbs",
"urban planning",
"growth ponzi scheme"
]
},
{
"id": "gTAghAJcO1o",
"type": "Talk",
"india": false,
"title": "Founder School Session: The Future Doesn't Have to Be Incremental",
"channel": "DEMO",
"minutes": null,
"year": null,
"since": 2014,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters treat it as a thought-provoking talk on invention versus innovation, and cite it in discussions of software complexity and startups.",
"tags": [
"alan kay",
"innovation",
"research funding",
"software engineering",
"startups"
]
},
{
"id": "hFSPHfZQpIQ",
"type": "Talk",
"india": false,
"title": "The Secret History of Silicon Valley",
"channel": "Google TechTalks",
"minutes": null,
"year": null,
"since": 2008,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as an eye-opening, once-secret history of where Silicon Valley came from, and cites it whenever the military roots of tech come up.",
"tags": [
"steve blank",
"silicon valley",
"cold war",
"stanford",
"electronic warfare",
"military history"
]
},
{
"id": "iHzzSao6ypE",
"type": "Explainer",
"india": false,
"title": "Traffic Has a Perfect Solution. Humans Are the Problem.",
"channel": "CGP Grey",
"minutes": null,
"year": null,
"since": 2016,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it as a concise, well-illustrated explanation of traffic flow, in threads on congestion, self-driving cars and driving habits.",
"tags": [
"traffic jams",
"congestion",
"self-driving cars",
"driving behavior",
"phantom jams"
]
},
{
"id": "jo_B4LTHi3I",
"type": "Talk",
"india": false,
"title": "Introduction to Node.js with Ryan Dahl",
"channel": "InfoQ",
"minutes": null,
"year": null,
"since": 2011,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a short, fun talk on Node's philosophy and the reasons it was built that remains relevant.",
"tags": [
"node.js",
"ryan dahl",
"event-driven io",
"v8",
"javascript"
]
},
{
"id": "k1kndKWJKB8",
"type": "Explainer",
"india": false,
"title": "England: South Sea Bubble - The Sharp Mind of John Blunt - Extra History - Part 1",
"channel": "Extra History",
"minutes": null,
"year": null,
"since": 2018,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as an accessible, easily digestible introduction to the South Sea Bubble whenever financial manias, ICOs or overvalued companies come up.",
"tags": [
"financial history",
"speculative bubbles",
"john blunt",
"england",
"animated history"
]
},
{
"id": "mD4L7xDNCmA",
"type": "Talk",
"india": false,
"title": "Bitcoin 2012 London: Mike Hearn",
"channel": "Independent POV",
"minutes": null,
"year": null,
"since": 2013,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a great overview of what Bitcoin's protocol can do beyond simple payments, particularly contracts and smart property.",
"tags": [
"mike hearn",
"bitcoin",
"smart contracts",
"scripting",
"2012"
]
},
{
"id": "mII9NZ8MMVM",
"type": "Explainer",
"india": false,
"title": "The Collapse of The American Dream Explained in Animation",
"channel": "doctordude",
"minutes": null,
"year": null,
"since": 2014,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as an accessible animated primer on banking and the Fed, usually with the caveat that it is biased and dated.",
"tags": [
"federal reserve",
"banking",
"money creation",
"debt",
"animation"
]
},
{
"id": "mbEfzuCLoAQ",
"type": "Explainer",
"india": false,
"title": "Why Trains Suck in America",
"channel": "Wendover Productions",
"minutes": null,
"year": null,
"since": 2017,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as a short, solid walkthrough of why American trains are slow and limited, most notably because freight gets priority.",
"tags": [
"amtrak",
"freight rail",
"transportation economics",
"high-speed rail",
"wendover"
]
},
{
"id": "oJTwQvgfgMM",
"type": "Talk",
"india": false,
"title": "Emacs Org-mode - a system for note-taking and project planning",
"channel": "Google TechTalks",
"minutes": null,
"year": null,
"since": 2009,
"category": "Business Psychology",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "HN regards it as the best introduction and advertisement for Org-mode, and many say it was enough to get them started with it.",
"tags": [
"org-mode",
"emacs",
"note-taking",
"task management",
"plain text"
]
},
{
"id": "oKg1hTOQXoY",
"type": "Talk",
"india": false,
"title": "Alan Kay at OOPSLA 1997 - The computer revolution hasnt happened yet",
"channel": "Jeff Gonis",
"minutes": null,
"year": null,
"since": 2013,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Treated as a foundational talk, cited constantly for Kay's views on object-oriented programming and for rethinking software practice.",
"tags": [
"alan kay",
"smalltalk",
"oop",
"oopsla",
"system design"
]
},
{
"id": "oTugjssqOT0",
"type": "Lecture",
"india": false,
"title": "Randy Pausch Lecture: Time Management",
"channel": "Carnegie Mellon University",
"minutes": null,
"year": null,
"since": 2009,
"category": "Business Psychology",
"also": [],
"topics": [
"Product",
"Team"
],
"stage": null,
"gem": false,
"why": "HN commenters recommend it as a practical, memorable guide to prioritization, and some rewatch it every year.",
"tags": [
"productivity",
"prioritization",
"procrastination",
"randy pausch",
"self-improvement"
]
},
{
"id": "ob_GX50Za6c",
"type": "Interview",
"india": false,
"title": "Steve Jobs, \"Computers are like  a bicycle for our minds.\" - Michael Lawrence Films",
"channel": "Michael Lawrence",
"minutes": null,
"year": null,
"since": 2010,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN uses it as the source of the 'bicycle for the mind' quote, which commenters cite in discussions of computing, programming and LLMs.",
"tags": [
"steve jobs",
"bicycle for the mind",
"computing philosophy",
"apple"
]
},
{
"id": "u404SLJj7ig",
"type": "Documentary",
"india": false,
"title": "Netscape Mozilla Documentary 1998 - 2000 ProJect Code Rush  - creative common licence",
"channel": "znoopy2k",
"minutes": null,
"year": null,
"since": 2011,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as a great tech documentary on Mozilla's open-sourcing and the hard work of Netscape engineers.",
"tags": [
"netscape",
"mozilla",
"open source",
"dot-com",
"silicon valley"
]
},
{
"id": "xtpgkX588nM",
"type": "Interview",
"india": false,
"title": "Milton Friedman - The Negative Income Tax",
"channel": "LibertyPen",
"minutes": null,
"year": null,
"since": 2012,
"category": "Customer Behaviour",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "The go-to primary source in basic income threads for Friedman's negative income tax idea.",
"tags": [
"milton friedman",
"basic income",
"welfare",
"firing line",
"economics"
]
},
{
"id": "6h3RJhoqgK8",
"type": "Talk",
"india": false,
"title": "Mike Monteiro - \"Fuck you pay me\" (PT Br)",
"channel": "Montalvo Machado",
"minutes": null,
"year": null,
"since": 2013,
"category": "Startup & Entrepreneurship",
"also": [
"SaaS & Technology"
],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended to freelancers and consultants as practical advice on contracts and getting paid.",
"tags": [
"freelancing",
"contracts",
"getting paid",
"consulting",
"mike monteiro"
]
},
{
"id": "9eyFDBPk4Yw",
"type": "Lecture",
"india": false,
"title": "Admiral Grace Hopper Explains the Nanosecond",
"channel": "funbury",
"minutes": null,
"year": null,
"since": 2020,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN uses it to illustrate physical latency limits and why performance and distance matter in computing.",
"tags": [
"grace hopper",
"nanosecond",
"latency",
"speed of light",
"performance"
]
},
{
"id": "9yjZpBq1XBE",
"type": "Documentary",
"india": false,
"title": "Disney's FastPass: A Complicated History",
"channel": "Defunctland",
"minutes": null,
"year": null,
"since": 2021,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as an accessible, engrossing lesson in queueing theory and systems design, even for people with no interest in Disney.",
"tags": [
"disney fastpass",
"queueing theory",
"theme parks",
"systems design",
"defunctland"
]
},
{
"id": "AW3gaelBypY",
"type": "Explainer",
"india": false,
"title": "The Carbon Offset Problem",
"channel": "Wendover Productions",
"minutes": null,
"year": null,
"since": 2022,
"category": "Customer Behaviour",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended in greenwashing and offset threads as a well-sourced, detailed explanation of how offsets underdeliver.",
"tags": [
"carbon credits",
"greenwashing",
"climate policy",
"perverse incentives",
"wendover"
]
},
{
"id": "NHopJHSlVo4",
"type": "Talk",
"india": false,
"title": "Keep your goals to yourself | Derek Sivers",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2010,
"category": "Business Psychology",
"also": [],
"topics": [
"Product"
],
"stage": null,
"gem": true,
"why": "Commenters credit it with changing how they handle plans and recommend it as a short, sourced talk.",
"tags": [
"motivation",
"goals",
"productivity",
"psychology",
"ted"
]
},
{
"id": "NlIdzF1_b5M",
"type": "Explainer",
"india": false,
"title": "Big Plane vs Little Plane (The Economics of Long-Haul Flights)",
"channel": "Wendover Productions",
"minutes": null,
"year": null,
"since": 2017,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended in threads on the 747 and A380 for explaining why big planes were phased out.",
"tags": [
"a380",
"boeing 787",
"aviation",
"hub and spoke",
"economics"
]
},
{
"id": "ORp3q1Oaezw",
"type": "Talk",
"india": false,
"title": "Why I, as a black man, attend KKK rallies. | Daryl Davis | TEDxNaperville",
"channel": "TEDx Talks",
"minutes": null,
"year": null,
"since": 2018,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": true,
"why": "Recommended in moderation and deplatforming debates as a case for engagement and compassion over exclusion.",
"tags": [
"daryl davis",
"kkk",
"racism",
"dialogue",
"ted talk"
]
},
{
"id": "YyIQKBzIuBY",
"type": "Talk",
"india": false,
"title": "Alan Kay - Programming and Scaling",
"channel": "Colin McDonnell",
"minutes": null,
"year": null,
"since": 2016,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": true,
"why": "HN fans call it one of Kay's best talks and recommend it for rethinking why programming paradigms have barely changed.",
"tags": [
"alan kay",
"oop",
"smalltalk",
"code size",
"systems thinking"
]
},
{
"id": "arj7oStGLkU",
"type": "Talk",
"india": false,
"title": "Inside the Mind of a Master Procrastinator | Tim Urban | TED",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2016,
"category": "Business Psychology",
"also": [],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "Recommended as a funny, empathetic take on procrastination and the origin of the life calendar concept.",
"tags": [
"tim urban",
"ted",
"productivity",
"life calendar",
"psychology"
]
},
{
"id": "hER0Qp6QJNU",
"type": "Interview",
"india": false,
"title": "Simon Sinek on Millennials in the Workplace",
"channel": "David Crossman",
"minutes": null,
"year": null,
"since": 2017,
"category": "Business Psychology",
"also": [
"Startup & Entrepreneurship"
],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "HN commenters recommend it for its take on managing young employees and on how technology and approval-seeking affect behavior.",
"tags": [
"simon sinek",
"management",
"millennials",
"social media",
"workplace culture"
]
},
{
"id": "jwG_qR6XmDQ",
"type": "Interview",
"india": false,
"title": "Jeff Bezos - Regret Minimization Framework",
"channel": "Micky Thompson",
"minutes": null,
"year": null,
"since": 2010,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries",
"Business Psychology"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters cite it whenever someone asks whether to quit a job or start a company, as a simple decision heuristic.",
"tags": [
"jeff bezos",
"regret minimization",
"startups",
"quitting your job",
"decision framework"
]
},
{
"id": "mZyvIHYn2zk",
"type": "Talk",
"india": false,
"title": "The Pervert's Guide to Computer Programming Languages - SXSW",
"channel": "Vulk Coop",
"minutes": null,
"year": null,
"since": 2019,
"category": "Business Psychology",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "HN recommends it as an entertaining and eye-opening look at the irrational psychology behind language preferences, though some note it is not scientifically precise.",
"tags": [
"psychoanalysis",
"lacan",
"programming languages",
"developer culture",
"sxsw"
]
},
{
"id": "qbIk7-JPB2c",
"type": "Lecture",
"india": false,
"title": "Sparks of AGI: early experiments with GPT-4",
"channel": "Sebastien Bubeck",
"minutes": null,
"year": null,
"since": 2023,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "HN recommends it as a thought-provoking talk from a researcher with early GPT-4 access, especially for the unicorn degrading under safety tuning.",
"tags": [
"gpt-4",
"agi",
"llm",
"alignment tax",
"microsoft research"
]
},
{
"id": "qp0HIF3SfI4",
"type": "Talk",
"india": false,
"title": "How Great Leaders Inspire Action | Simon Sinek | TED",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2011,
"category": "Marketing & Growth",
"also": [
"Startup & Entrepreneurship"
],
"topics": [
"Growth",
"Team"
],
"stage": "Growth",
"gem": false,
"why": "HN commenters cite it to explain why customers buy into a company's beliefs rather than its specs, especially in threads about Apple, marketing and product messaging.",
"tags": [
"start with why",
"golden circle",
"apple",
"marketing",
"leadership",
"ted"
]
},
{
"id": "rvskMHn0sqQ",
"type": "Explainer",
"india": false,
"title": "A Selfish Argument for Making the World a Better Place – Egoistic Altruism",
"channel": "Kurzgesagt – In a Nutshell",
"minutes": null,
"year": null,
"since": 2018,
"category": "Customer Behaviour",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters link it to argue for cooperation and engagement over isolation, and as an accessible statement of positive-sum thinking.",
"tags": [
"altruism",
"kurzgesagt",
"global development",
"economics",
"cooperation"
]
},
{
"id": "vwCdKU9uYnE",
"type": "Interview",
"india": false,
"title": "Avie Tevanian: CMU math whiz goes from Mach to NeXT to Apple Software Chief | Oral History Part 1",
"channel": "Computer History Museum",
"minutes": null,
"year": null,
"since": 2017,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a long, rich first-hand account of Mach, NeXT and Apple history and of working for Steve Jobs.",
"tags": [
"avie tevanian",
"mach",
"nextstep",
"steve jobs",
"computer history"
]
},
{
"id": "yQ16_YxLbB8",
"type": "Talk",
"india": false,
"title": "Complete Apple WWDC | Steve Jobs talk and answer developers questions | 1997",
"channel": "TheAppleFanBoy - Apple & Computer Archives",
"minutes": null,
"year": null,
"since": 2018,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": true,
"why": "HN readers recommend it as an unfiltered view of Jobs' strategic thinking and decisiveness, including the famous answer on why OpenDoc was killed.",
"tags": [
"steve jobs",
"wwdc 1997",
"opendoc",
"apple history",
"q&a"
]
},
{
"id": "zduSFxRajkE",
"type": "Lecture",
"india": false,
"title": "Let's build the GPT Tokenizer",
"channel": "Andrej Karpathy",
"minutes": null,
"year": null,
"since": 2024,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "Recommended as the best deep dive on tokenizers, worth the two hours for anyone working with LLMs.",
"tags": [
"byte pair encoding",
"tokenizer",
"gpt",
"unicode",
"llm"
]
},
{
"id": "1PhArSujR_A",
"type": "Talk",
"india": false,
"title": "John Carmack's keynote at Quakecon 2013 part 4",
"channel": "Kostiantyn Kostin",
"minutes": null,
"year": null,
"since": 2013,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited again and again as Carmack's key public statement on functional programming and purity in game development, plus his remarks on garbage collection.",
"tags": [
"john carmack",
"haskell",
"functional programming",
"garbage collection",
"game engines",
"quakecon"
]
},
{
"id": "7NfX0vlCa4k",
"type": "Demo",
"india": false,
"title": "E-Ink for Productivity: An Introduction",
"channel": "Technology Connextras",
"minutes": null,
"year": null,
"since": 2020,
"category": "Business Psychology",
"also": [],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "HN recommends it, with its companion video, as an honest hands-on account of e-ink devices as monitors, including their slow software and limits.",
"tags": [
"e-ink",
"onyx boox",
"e-paper",
"external display",
"gadget review"
]
},
{
"id": "Cj4y0EUlU-Y",
"type": "Interview",
"india": false,
"title": "Feynman: How to think 1 of 2  FUN TO IMAGINE 11",
"channel": "Christopher Sykes",
"minutes": null,
"year": null,
"since": 2011,
"category": "Business Psychology",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN points to it constantly in threads on inner monologue, visual versus verbal thinking and communication as the classic, entertaining demonstration that minds work differently.",
"tags": [
"richard feynman",
"cognition",
"internal monologue",
"counting",
"mental imagery"
]
},
{
"id": "DOWDNBu9DkU",
"type": "Demo",
"india": false,
"title": "Amazing Invention- This Drone Will Change Everything",
"channel": "Mark Rober",
"minutes": null,
"year": null,
"since": 2023,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters cite it as the clearest look at Zipline's real-world drone operations, especially for medical delivery and the solved noise problem.",
"tags": [
"zipline",
"drone delivery",
"mark rober",
"medical logistics",
"noise reduction"
]
},
{
"id": "FtieBc3KptU",
"type": "Talk",
"india": false,
"title": "Emacs For Writers",
"channel": "thoughtbot",
"minutes": null,
"year": null,
"since": 2016,
"category": "Business Psychology",
"also": [],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "Recommended as a favorite talk showing Emacs as a writing environment rather than just a programmer's editor.",
"tags": [
"emacs",
"writing workflow",
"plain text",
"org mode",
"productivity"
]
},
{
"id": "HB5TrK7A4pI",
"type": "Talk",
"india": false,
"title": "\"We Really Don't Know How to Compute!\" - Gerald Sussman (2011)",
"channel": "Strange Loop Conference",
"minutes": null,
"year": null,
"since": 2022,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters recommend it as a mind-expanding talk on rethinking programming, and cite it in threads on propagators, constraints and brittleness.",
"tags": [
"gerald sussman",
"propagators",
"constraint programming",
"scheme",
"biological computing"
]
},
{
"id": "HLNhPMQnWu4",
"type": "Commentary",
"india": false,
"title": "John Cleese vs Extremism",
"channel": "eroosters",
"minutes": null,
"year": null,
"since": 2018,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Shared in heated-discussion threads as a short, witty take on why extremism is appealing.",
"tags": [
"john cleese",
"extremism",
"polarization",
"humor"
]
},
{
"id": "Jib2AmRb_rk",
"type": "Talk",
"india": false,
"title": "SQLite: The Database at the Edge of the Network with Dr. Richard Hipp",
"channel": "Method",
"minutes": null,
"year": null,
"since": 2017,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as an enthusiastic, funny talk straight from the creator, and cites it for facts like the name's pronunciation and Airbus support.",
"tags": [
"sqlite",
"richard hipp",
"embedded databases",
"testing",
"long-term support"
]
},
{
"id": "PhhC_N6Bm_s",
"type": "Talk",
"india": false,
"title": "This Is Water by David Foster Wallace Full Speech",
"channel": "Joe Mita",
"minutes": null,
"year": null,
"since": 2015,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN people point lost, lonely or burned-out readers to it as a short, humane piece of perspective on how to live.",
"tags": [
"commencement speech",
"david foster wallace",
"mindfulness",
"meaning",
"philosophy"
]
},
{
"id": "Pzl1B7nB9Kc",
"type": "Talk",
"india": false,
"title": "Linus Torvalds on why desktop Linux sucks",
"channel": "gentooman",
"minutes": null,
"year": null,
"since": 2021,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited constantly in Flatpak, packaging and ABI-compatibility debates as Linus's blunt, insightful take on shipping software for Linux.",
"tags": [
"linus torvalds",
"application distribution",
"backwards compatibility",
"flatpak",
"distros"
]
},
{
"id": "S2xHZPH5Sng",
"type": "Commentary",
"india": false,
"title": "Clickbait is Unreasonably Effective",
"channel": "Veritasium",
"minutes": null,
"year": null,
"since": 2021,
"category": "Marketing & Growth",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it whenever YouTube titles and thumbnails come up, both to defend creators and to criticize the drift toward clickbait.",
"tags": [
"clickbait",
"thumbnails",
"youtube algorithm",
"veritasium",
"content creation"
]
},
{
"id": "UBc7qBS1Ujo",
"type": "Commentary",
"india": false,
"title": "The Bell Curve",
"channel": "Shaun",
"minutes": null,
"year": null,
"since": 2019,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters most often cite it as a thorough, well-sourced debunking of The Bell Curve and of popular IQ claims.",
"tags": [
"the bell curve",
"iq",
"psychometrics",
"race science",
"heritability"
]
},
{
"id": "Uwl3-jBNEd4",
"type": "Explainer",
"india": false,
"title": "Renting vs. Buying a Home: The 5% Rule",
"channel": "Ben Felix",
"minutes": null,
"year": null,
"since": 2020,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN points to it for a clean first-order framework for the rent versus buy decision.",
"tags": [
"5% rule",
"personal finance",
"real estate",
"unrecoverable costs",
"renting"
]
},
{
"id": "VAhHkJQ3KgY",
"type": "Interview",
"india": false,
"title": "Dwarf Fortress Creator Explains its Complexity & Origins | Noclip Interview",
"channel": "/noclip",
"minutes": null,
"year": null,
"since": 2020,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN points to it whenever Dwarf Fortress comes up, mainly for the alcohol-poisoned cats bug story and a developer's view of the game's depth.",
"tags": [
"dwarf fortress",
"tarn adams",
"game design",
"simulation",
"bug stories"
]
},
{
"id": "VQKMoT-6XSg",
"type": "Talk",
"india": false,
"title": "iPhone 1 - Steve Jobs MacWorld keynote in 2007 - Full Presentation, 80 mins",
"channel": "Protectstar Inc.",
"minutes": null,
"year": null,
"since": 2020,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "Cited as a landmark tech presentation, especially for the audience's astonished reaction to touch scrolling and demo moments like visual voicemail.",
"tags": [
"steve jobs",
"iphone",
"keynote",
"multitouch",
"apple",
"product launch"
]
},
{
"id": "XfcvX0P1b5g",
"type": "Documentary",
"india": false,
"title": "Bitcoin - Unmasking Satoshi Nakamoto",
"channel": "Barely Sociable",
"minutes": null,
"year": null,
"since": 2021,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters recommend it as a compelling, if not definitive, argument for Adam Back as Satoshi whenever the identity question comes up.",
"tags": [
"satoshi nakamoto",
"adam back",
"bitcoin",
"block size debate",
"cryptocurrency history"
]
},
{
"id": "YpuX-5E7xoU",
"type": "Explainer",
"india": false,
"title": "The Grille Trend that Kills 509 People per Year",
"channel": "FortNine",
"minutes": null,
"year": null,
"since": 2024,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN people cite it in threads on vehicle size and safety as a clear explanation tying grille height to deaths.",
"tags": [
"pickup trucks",
"pedestrian safety",
"hood height",
"vehicle design",
"road safety"
]
},
{
"id": "Z1qyvQsjK5Y",
"type": "Lecture",
"india": false,
"title": "Immediate-Mode Graphical User Interfaces - 2005",
"channel": "Casey Muratori",
"minutes": null,
"year": null,
"since": 2017,
"category": "SaaS & Technology",
"also": [],
"topics": [
"Users"
],
"stage": null,
"gem": false,
"why": "Seen as the origin of the IMGUI idea that inspired Dear ImGui, recommended to anyone curious about immediate-mode UI design.",
"tags": [
"imgui",
"gui programming",
"game development",
"dear imgui",
"casey muratori",
"api design"
]
},
{
"id": "_gXlauRB1EQ",
"type": "Documentary",
"india": false,
"title": "Investigation: How Roblox Is Exploiting Young Game Developers",
"channel": "People Make Games",
"minutes": null,
"year": null,
"since": 2021,
"category": "SaaS & Technology",
"also": [],
"topics": [
"Fundraising"
],
"stage": null,
"gem": false,
"why": "HN commenters cite it as the go-to evidence that Roblox exploits child developers, and parents are pointed to it before letting kids build games there.",
"tags": [
"roblox",
"child labor",
"game monetization",
"platform economics",
"investigative journalism"
]
},
{
"id": "cbeJIwF1pVY",
"type": "Lecture",
"india": false,
"title": "Economics of Nuclear Reactor",
"channel": "Illinois EnergyProf",
"minutes": null,
"year": null,
"since": 2020,
"category": "Customer Behaviour",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "It is the go-to short primer HN commenters cite to explain why nuclear is expensive upfront but cheap to run once the construction debt is paid.",
"tags": [
"nuclear power",
"capital costs",
"interest rates",
"natural gas",
"energy economics"
]
},
{
"id": "e3msMuwqp-o",
"type": "Lecture",
"india": false,
"title": "31 Hamming, Learning to Learn: You and Your Research, 6 June 1995",
"channel": "Hamming on Hamming: Learning to Learn",
"minutes": null,
"year": null,
"since": 2020,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN people recommend it as the capstone of Hamming's course and as career advice about working on important problems.",
"tags": [
"richard hamming",
"career",
"research",
"important problems",
"learning to learn"
]
},
{
"id": "eMlx5fFNoYc",
"type": "Explainer",
"india": false,
"title": "Attention in transformers, step-by-step | Deep Learning Chapter 6",
"channel": "3Blue1Brown",
"minutes": null,
"year": null,
"since": 2024,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "HN treats it as the go-to visual explanation of attention, recommended to people who find text-based transformer explainers hard to follow.",
"tags": [
"attention",
"transformers",
"llm",
"deep learning",
"visualization",
"3blue1brown"
]
},
{
"id": "jh8supIUj6c",
"type": "Talk",
"india": false,
"title": "re:publica 2015 - Aral Balkan: Beyond The Camera Panopticon",
"channel": "re:publica",
"minutes": null,
"year": null,
"since": 2015,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a forceful statement of the privacy case, though some commenters found its tone elitist and politically charged.",
"tags": [
"privacy",
"surveillance",
"data monopolies",
"human rights",
"big tech"
]
},
{
"id": "k7X7sZzSXYs",
"type": "Explainer",
"india": false,
"title": "How To Be Alone",
"channel": "Andrea Dorfman",
"minutes": null,
"year": null,
"since": 2010,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters point lonely people to it as a moving, comforting piece of art about getting comfortable with solitude.",
"tags": [
"poetry",
"loneliness",
"solitude",
"animation",
"tanya davis"
]
},
{
"id": "n691pLhQBkw",
"type": "Talk",
"india": false,
"title": "[AUDIO FIXED] The Truth Cannot be Sexist - Steven Pinker on the biology of sex differences",
"channel": "Gravitahn",
"minutes": null,
"year": null,
"since": 2017,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": true,
"why": "Pointed to repeatedly in gender-in-tech threads, especially around the Google memo, as a science-based treatment of sex differences.",
"tags": [
"steven pinker",
"gender",
"psychology",
"debate",
"stem"
]
},
{
"id": "oCZMoY3q2uM",
"type": "Talk",
"india": false,
"title": "A New Way to look at Networking",
"channel": "GoogleTalksArchive",
"minutes": null,
"year": null,
"since": 2012,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters point to it as an inspiring talk behind content-addressed designs like IPFS, Urbit and immutable URLs.",
"tags": [
"van jacobson",
"ndn",
"tcp/ip",
"content addressing",
"network architecture"
]
},
{
"id": "oVfHeWTKjag",
"type": "Explainer",
"india": false,
"title": "Facebook Fraud",
"channel": "Veritasium",
"minutes": null,
"year": null,
"since": 2014,
"category": "Marketing & Growth",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "Frequently cited as the source for claims about click farms and fake likes in Facebook advertising, though some argue its methodology was flawed.",
"tags": [
"fake likes",
"click farms",
"facebook ads",
"advertising",
"veritasium"
]
},
{
"id": "q_vivC7c_1k",
"type": "Explainer",
"india": false,
"title": "Why Tipping Should Be Banned - Adam Ruins Everything",
"channel": "Dropout",
"minutes": null,
"year": null,
"since": 2015,
"category": "Customer Behaviour",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "Recommended in tipping threads as a fast, entertaining, sourced case against tipping culture.",
"tags": [
"tipping",
"wages",
"restaurant industry",
"adam conover",
"service quality"
]
},
{
"id": "wAIP6fI0NAI",
"type": "Talk",
"india": false,
"title": "How one tweet can ruin your life | Jon Ronson",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2018,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters bring it up in threads about online mobs and cancellation as a relevant talk by a journalist who interviewed shamed people.",
"tags": [
"twitter",
"public shaming",
"social media",
"justine sacco",
"internet mobs"
]
},
{
"id": "wpOxbesRNBc",
"type": "Talk",
"india": false,
"title": "Dasher: information-efficient text entry",
"channel": "Google TechTalks",
"minutes": null,
"year": null,
"since": 2016,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Regarded as the seminal talk on Dasher, recommended in threads on accessible and alternative text input.",
"tags": [
"dasher",
"information theory",
"language models",
"accessibility",
"david mackay"
]
},
{
"id": "xoVJKj8lcNQ",
"type": "Talk",
"india": false,
"title": "The A.I. Dilemma - March 9, 2023",
"channel": "Center for Humane Technology",
"minutes": null,
"year": null,
"since": 2023,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "Frequently recommended as the overview to get up to speed on AI risk, especially by people who valued The Social Dilemma.",
"tags": [
"ai safety",
"llm risks",
"center for humane technology",
"ai race",
"regulation"
]
},
{
"id": "-whuXHSL1Pg",
"type": "Commentary",
"india": false,
"title": "Exposing Tether - Bitcoin's Biggest Secret",
"channel": "Coffeezilla",
"minutes": null,
"year": null,
"since": 2021,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters recommend it as the best single, entertaining overview of Tether's dubious history, and cite it when arguing Tether lacks real USD backing.",
"tags": [
"tether",
"stablecoins",
"bitfinex",
"crypto fraud",
"attestations"
]
},
{
"id": "099cHWSbAL8",
"type": "Talk",
"india": false,
"title": "How to crash an airplane – Nickolas Means | The Lead Developer UK 2016",
"channel": "LeadDev",
"minutes": null,
"year": null,
"since": 2019,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "Strongly recommended as a gripping case study whose lessons carry over to engineering management and safety.",
"tags": [
"united 232",
"aviation safety",
"team leadership",
"incident analysis",
"engineering management"
]
},
{
"id": "1K5oDtVAYzk",
"type": "Explainer",
"india": false,
"title": "Your Post Code Is the Directions, Not the Destination",
"channel": "CGP Grey",
"minutes": null,
"year": null,
"since": 2025,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it whenever zip codes, addresses or geospatial data come up, as a clear explanation of the hidden pattern in post codes.",
"tags": [
"zip codes",
"addresses",
"geography",
"postal system",
"cgp grey"
]
},
{
"id": "3-son3EJTrU",
"type": "Lecture",
"india": false,
"title": "RSA ANIMATE: Language as a Window into Human Nature",
"channel": "Royal Society of Arts",
"minutes": null,
"year": null,
"since": 2011,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as a short, clear explanation of why people avoid saying things explicitly and how common knowledge works socially and politically.",
"tags": [
"steven pinker",
"indirect speech",
"common knowledge",
"language",
"rsa animate"
]
},
{
"id": "5AqbCQuK0gM",
"type": "Interview",
"india": false,
"title": "Anders Hejlsberg and Lars Bak: TypeScript, JavaScript, and Dart",
"channel": "DartlangTV",
"minutes": null,
"year": null,
"since": 2014,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN points to it as a rare side-by-side of the TypeScript and Dart designers, often to show how the two approaches to improving JavaScript differed.",
"tags": [
"typescript",
"dart",
"javascript",
"language design",
"type systems"
]
},
{
"id": "7QmCUDHpNzE",
"type": "Demo",
"india": false,
"title": "DropBox Demo",
"channel": "theragax",
"minutes": null,
"year": null,
"since": 2012,
"category": "Startup & Entrepreneurship",
"also": [
"Marketing & Growth"
],
"topics": [
"MVP",
"Product"
],
"stage": "MVP",
"gem": false,
"why": "HN cites it as the classic example of validating a product idea with a demo video, and many recall how compelling it was.",
"tags": [
"dropbox",
"drew houston",
"mvp validation",
"launch strategy",
"demo video"
]
},
{
"id": "AD4b-52jtos",
"type": "Lecture",
"india": false,
"title": "Hamming, Intro to The Art of Doing Science and Engineering: Learning to Learn (March 28, 1995)",
"channel": "securitylectures",
"minutes": null,
"year": null,
"since": 2016,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": true,
"why": "HN regularly recommends Hamming's lecture series as a fascinating, wisdom-rich course on how to approach hard technical problems and a career, often preferred to the book.",
"tags": [
"richard hamming",
"learning",
"engineering",
"research",
"career advice"
]
},
{
"id": "Bkm2Vfj42FY",
"type": "Lecture",
"india": false,
"title": "Mark Blyth ─ Global Trumpism",
"channel": "Watson School of International and Public Affairs",
"minutes": null,
"year": null,
"since": 2016,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as a concise, chart-backed explanation of the economics behind anti-establishment politics.",
"tags": [
"mark blyth",
"populism",
"neoliberalism",
"trump",
"economics"
]
},
{
"id": "EOwxxsPaogY",
"type": "Explainer",
"india": false,
"title": "How Harley-Davidson Killed Itself",
"channel": "FortNine",
"minutes": null,
"year": null,
"since": 2020,
"category": "Marketing & Growth",
"also": [
"Startup & Entrepreneurship"
],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as an entertaining overview of Harley's decline and as a case study in selling a lifestyle rather than a product.",
"tags": [
"harley-davidson",
"motorcycles",
"brand strategy",
"business case study",
"demographics"
]
},
{
"id": "FF-tKLISfPE",
"type": "Talk",
"india": false,
"title": "Steve Jobs Insult Response",
"channel": "Mike Cane",
"minutes": null,
"year": null,
"since": 2011,
"category": "SaaS & Technology",
"also": [
"Founder Stories & Documentaries",
"Customer Behaviour"
],
"topics": [
"Product",
"Users"
],
"stage": null,
"gem": false,
"why": "Commenters link it as a canonical statement of Jobs's product philosophy and as an example of handling an insult calmly and articulately.",
"tags": [
"steve jobs",
"wwdc 1997",
"opendoc",
"customer experience",
"focus"
]
},
{
"id": "GcJxRqTs5nk",
"type": "Talk",
"india": false,
"title": "Moral behavior in animals | Frans de Waal",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2019,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": true,
"why": "Commenters call it a must-watch, funny and entertaining demonstration that morality has natural roots in animals.",
"tags": [
"frans de waal",
"primates",
"fairness",
"empathy",
"ted talk"
]
},
{
"id": "HdHlfiOAJyE",
"type": "Lecture",
"india": false,
"title": "Ses 1: Introduction and Course Overview",
"channel": "MIT OpenCourseWare",
"minutes": null,
"year": null,
"since": 2020,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a free, first-principles finance course for software engineers wanting to learn business and finance.",
"tags": [
"mit",
"andrew lo",
"finance",
"corporate finance",
"financial crisis"
]
},
{
"id": "J-M98KLgaUU",
"type": "Explainer",
"india": false,
"title": "Drone Delivery Was Supposed to be the Future. What Went Wrong?",
"channel": "Wendover Productions",
"minutes": null,
"year": null,
"since": 2022,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "It is the standard answer when someone asks what happened to drone delivery.",
"tags": [
"drones",
"logistics",
"last-mile delivery",
"faa regulation",
"wendover"
]
},
{
"id": "KTJs-0EInW8",
"type": "Talk",
"india": false,
"title": "Stanford Seminar - Google's Steve Yegge on GROK",
"channel": "Stanford Online",
"minutes": null,
"year": null,
"since": 2013,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN refers to it as the main public description of Google's internal code analysis tooling, and as a precursor of ideas like LSP.",
"tags": [
"steve yegge",
"grok",
"google",
"code search",
"static analysis",
"language tooling"
]
},
{
"id": "Ljzj9Msli5o",
"type": "Talk",
"india": false,
"title": "Mike Mullane - Normalisation of deviance - IAFF - Part 1",
"channel": "Stuart Walker",
"minutes": null,
"year": null,
"since": 2018,
"category": "Business Psychology",
"also": [
"Startup & Entrepreneurship"
],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "HN commenters cite it whenever a thread involves ignored warnings, shortcuts or routine risk, as the clearest introduction to the concept.",
"tags": [
"challenger disaster",
"safety culture",
"risk",
"nasa",
"organizational failure"
]
},
{
"id": "LtFyP0qy9XU",
"type": "Explainer",
"india": false,
"title": "Margin Call (9/9) Movie CLIP - It's Just Money (2011) HD",
"channel": "Movieclips",
"minutes": null,
"year": null,
"since": 2020,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN shares it in bubble and crash threads as a memorable scene about market cycles and about information work versus physical labor.",
"tags": [
"margin call",
"market crashes",
"bubbles",
"film scene",
"wall street"
]
},
{
"id": "MtzCLd93SyU",
"type": "Talk",
"india": false,
"title": "Sid Meier's Psychology of Game Design",
"channel": "GDC Festival of Gaming",
"minutes": null,
"year": null,
"since": 2016,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN people cite it when discussing perceived randomness, luck and player experience in games, and say more designers should heed it.",
"tags": [
"sid meier",
"gdc",
"randomness",
"player psychology",
"civilization"
]
},
{
"id": "PY9DcIMGxMs",
"type": "Talk",
"india": false,
"title": "Everything you think you know about addiction is wrong | Johann Hari | TED",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2017,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters quote it for the line that the opposite of addiction is connection, and recommend it as a more plausible account of addiction than the standard model.",
"tags": [
"addiction",
"ted talk",
"drug policy",
"connection",
"johann hari"
]
},
{
"id": "RrpajcAgR1E",
"type": "Talk",
"india": false,
"title": "Identity 2.0 Keynote",
"channel": "Dan Lewis",
"minutes": null,
"year": null,
"since": 2014,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Users"
],
"stage": null,
"gem": true,
"why": "HN commenters hold it up as one of the most engaging tech talks ever given, both for its identity ideas and its slide technique.",
"tags": [
"identity 2.0",
"oscon",
"presentation style",
"dick hardt",
"user-centric identity",
"slides"
]
},
{
"id": "S27pHKBEp30",
"type": "Lecture",
"india": false,
"title": "LSTM is dead. Long Live Transformers!",
"channel": "Seattle Applied Deep Learning",
"minutes": null,
"year": null,
"since": 2020,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a clear explanation of why RNNs fall short and how transformers solve it.",
"tags": [
"transformers",
"lstm",
"self-attention",
"positional encoding",
"nlp"
]
},
{
"id": "UEfP1OKKz_Q",
"type": "Explainer",
"india": false,
"title": "British Plugs Are Better Than All Other Plugs, And Here's Why",
"channel": "Tom Scott",
"minutes": null,
"year": null,
"since": 2019,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN treats it as the obligatory video to share whenever plugs and sockets come up, praised for its safety reasoning.",
"tags": [
"bs 1363",
"power plugs",
"electrical safety",
"tom scott",
"fuses"
]
},
{
"id": "VO6XEQIsCoM",
"type": "Talk",
"india": false,
"title": "The paradox of choice | Barry Schwartz | TED",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2010,
"category": "Customer Behaviour",
"also": [
"Business Psychology"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as the standard talk on how too many options lead to paralysis and second-guessing.",
"tags": [
"choice overload",
"decision making",
"happiness",
"psychology",
"ted"
]
},
{
"id": "_L3gNaAVjQ4",
"type": "Podcast",
"india": false,
"title": "George Hotz: Hacking the Simulation & Learning to Drive with Neural Nets | Lex Fridman Podcast #132",
"channel": "Lex Fridman",
"minutes": null,
"year": null,
"since": 2020,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "Commenters recommend it as an entertaining, wide-ranging interview, and cite it for Hotz's views on end-to-end neural-net driving.",
"tags": [
"george hotz",
"comma.ai",
"lex fridman",
"self-driving",
"tesla"
]
},
{
"id": "_P9HqHVPeik",
"type": "Demo",
"india": false,
"title": "Stephen Wolfram's Introduction to the Wolfram Language",
"channel": "Wolfram",
"minutes": null,
"year": null,
"since": 2014,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Commenters point to it as a compact, impressive demo of what the language can do.",
"tags": [
"wolfram language",
"symbolic programming",
"mathematica",
"functional programming",
"live coding"
]
},
{
"id": "ez773teNFYA",
"type": "Podcast",
"india": false,
"title": "Stephen Wolfram: Cellular Automata, Computation, and Physics | Lex Fridman Podcast #89",
"channel": "Lex Fridman",
"minutes": null,
"year": null,
"since": 2020,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN points to it as an accessible long-form introduction to Wolfram's ideas and a window into his passion, though some are critical of his claims.",
"tags": [
"stephen wolfram",
"cellular automata",
"wolfram physics project",
"computation",
"mathematica"
]
},
{
"id": "iDulhoQ2pro",
"type": "Explainer",
"india": false,
"title": "Attention Is All You Need",
"channel": "Yannic Kilcher",
"minutes": null,
"year": null,
"since": 2020,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as an accessible, clear walkthrough of the transformer paper for people with some AI background.",
"tags": [
"transformers",
"attention",
"paper review",
"deep learning",
"nlp",
"yannic kilcher"
]
},
{
"id": "j5v8D-alAKE",
"type": "Explainer",
"india": false,
"title": "This is why we can't have nice things",
"channel": "Veritasium",
"minutes": null,
"year": null,
"since": 2021,
"category": "Customer Behaviour",
"also": [
"SaaS & Technology"
],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "Commenters link it as the engaging go-to explainer on planned obsolescence and the lightbulb cartel.",
"tags": [
"phoebus cartel",
"lightbulbs",
"obsolescence",
"consumer products",
"history"
]
},
{
"id": "kfg_e6YG37U",
"type": "Talk",
"india": false,
"title": "Deskbound | Kelly Starrett | Talks at Google",
"channel": "Talks at Google",
"minutes": null,
"year": null,
"since": 2013,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Often the first thing suggested to HN programmers asking about posture and back pain.",
"tags": [
"posture",
"ergonomics",
"mobility",
"back pain",
"standing desk"
]
},
{
"id": "krB0enBeSiE",
"type": "Podcast",
"india": false,
"title": "Brendan Eich: JavaScript, Firefox, Mozilla, and Brave | Lex Fridman Podcast #160",
"channel": "Lex Fridman",
"minutes": null,
"year": null,
"since": 2021,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Linked as a source for first-hand JavaScript and Netscape history, with commenters pointing to specific segments like the Java versus JavaScript decision.",
"tags": [
"brendan eich",
"netscape",
"brave",
"mozilla",
"browser wars"
]
},
{
"id": "modXC5IWTJI",
"type": "Lecture",
"india": false,
"title": "Building Software Systems At Google and Lessons Learned",
"channel": "Stanford",
"minutes": null,
"year": null,
"since": 2012,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as a classic look at systems engineering at Google, whose fundamentals have held up well despite its 2010 date.",
"tags": [
"jeff dean",
"google",
"distributed systems",
"web search",
"scaling"
]
},
{
"id": "pN34FNbOKXc",
"type": "Talk",
"india": false,
"title": "The Power of belief -- mindset and success | Eduardo Briceno | TEDxManhattanBeach",
"channel": "TEDx Talks",
"minutes": null,
"year": null,
"since": 2014,
"category": "Business Psychology",
"also": [],
"topics": [
"Growth"
],
"stage": null,
"gem": false,
"why": "Recommended as a short, clear explanation of growth versus fixed mindset.",
"tags": [
"growth mindset",
"fixed mindset",
"learning",
"motivation",
"tedx"
]
},
{
"id": "qOP2V_np2c0",
"type": "Explainer",
"india": false,
"title": "RSA ANIMATE: Crises of Capitalism",
"channel": "Royal Society of Arts",
"minutes": null,
"year": null,
"since": 2011,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters recommend it as a quick animated introduction to Harvey's and Marx's critique of capitalism.",
"tags": [
"david harvey",
"marxism",
"economic crises",
"animated talk",
"political economy"
]
},
{
"id": "xzYgiOC9cj4",
"type": "Lecture",
"india": false,
"title": "Milton Friedman - The Real World Effects Of Unions",
"channel": "LibertyPen",
"minutes": null,
"year": null,
"since": 2017,
"category": "Customer Behaviour",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters share it in union threads as a concise statement of the free-market economist's case against unions.",
"tags": [
"milton friedman",
"unions",
"wages",
"labor economics",
"incentives"
]
},
{
"id": "zyVTxGpEO30",
"type": "Talk",
"india": false,
"title": "Practical Creativity",
"channel": "GDC Festival of Gaming",
"minutes": null,
"year": null,
"since": 2018,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended even to people outside game development as a useful, practical perspective on how creativity works.",
"tags": [
"raph koster",
"creativity",
"game design",
"gdc",
"design process"
]
},
{
"id": "-I_jE0l7sYQ",
"type": "Talk",
"india": false,
"title": "Joe Armstrong - Keynote: The Forgotten Ideas in Computer Science - Code BEAM SF 2018",
"channel": "Code Sync",
"minutes": null,
"year": null,
"since": 2018,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Ideas"
],
"stage": null,
"gem": false,
"why": "HN people recommend it as a reading list of historical CS ideas worth knowing, and as a favorite among Armstrong's talks, especially after his death.",
"tags": [
"joe armstrong",
"erlang",
"forgotten ideas",
"programming history",
"keynote"
]
},
{
"id": "0MeRN7LE1LQ",
"type": "Explainer",
"india": false,
"title": "The Ranks of Global Billionaires: Not All Billionaires Are Made Equal",
"channel": "Economics Explained",
"minutes": null,
"year": null,
"since": 2020,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it to explain why comparing billionaire net worth by share price is misleading.",
"tags": [
"net worth",
"stock wealth",
"economics",
"diversification",
"oligarchs"
]
},
{
"id": "2QrX5jsiico",
"type": "Talk",
"india": false,
"title": "FailCon 2011 - Uber Case Study",
"channel": "BAMM.TV",
"minutes": null,
"year": null,
"since": 2012,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters recommend it for insight into Kalanick's background and how his past failures shaped his mindset at Uber.",
"tags": [
"travis kalanick",
"uber",
"startups",
"failure",
"entrepreneurship"
]
},
{
"id": "39iKLwlUqBo",
"type": "Interview",
"india": false,
"title": "Steve Jobs on privacy, Steve Jobs at the D8 Conference (Video)",
"channel": "iwasjojo",
"minutes": null,
"year": null,
"since": 2017,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Users"
],
"stage": null,
"gem": false,
"why": "HN reaches for it constantly as evidence of Apple's long-standing privacy stance and as a yardstick for judging Apple, Facebook and others.",
"tags": [
"steve jobs",
"apple",
"privacy",
"d8 conference",
"user consent"
]
},
{
"id": "4hZxo96x48A",
"type": "Commentary",
"india": false,
"title": "Music Software & Interface Design: MuseScore",
"channel": "Tantacrul",
"minutes": null,
"year": null,
"since": 2019,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited as a funny, informative teardown of bad interface design, and for the story that MuseScore hired him as head of design afterward.",
"tags": [
"musescore",
"ux design",
"music notation",
"sibelius",
"interface review"
]
},
{
"id": "4oAB83Z1ydE",
"type": "Explainer",
"india": false,
"title": "Think Different",
"channel": "英倫米高 Michael in England",
"minutes": null,
"year": null,
"since": 2007,
"category": "Marketing & Growth",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "Shared as an emotionally powerful example of great advertising, especially after Steve Jobs died.",
"tags": [
"think different",
"apple",
"advertising",
"steve jobs",
"branding"
]
},
{
"id": "5zkC9IMQmYA",
"type": "Talk",
"india": false,
"title": "High Altitude Leadership | Chris Warner | Talks at Google",
"channel": "Talks at Google",
"minutes": null,
"year": null,
"since": 2010,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": true,
"why": "Strongly recommended as a gripping hour on K2 and on leadership and summit fever in extreme conditions.",
"tags": [
"k2",
"leadership",
"mountaineering",
"risk",
"everest"
]
},
{
"id": "7HKbjYqqPPQ",
"type": "Talk",
"india": false,
"title": "2017 ACM PPoPP Keynote: It's Time for a New Old Language",
"channel": "Guy Steele",
"minutes": null,
"year": null,
"since": 2018,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as an excellent talk on notation problems, useful when reading papers or designing a new metalanguage.",
"tags": [
"metanotation",
"bnf",
"inference rules",
"guy steele",
"pl theory"
]
},
{
"id": "90NsjKvz9Ns",
"type": "Talk",
"india": false,
"title": "Mark DiMarco: User Interface Algorithms [JSConf2014]",
"channel": "JSConf",
"minutes": null,
"year": null,
"since": 2014,
"category": "SaaS & Technology",
"also": [],
"topics": [
"Users"
],
"stage": null,
"gem": false,
"why": "HN links it whenever menu hover problems or nearest-to-pointer selection come up, and as proof algorithms matter in front-end work.",
"tags": [
"ui algorithms",
"dropdown menus",
"mouse interaction",
"javascript",
"front-end"
]
},
{
"id": "DShDaJXK5qo",
"type": "Documentary",
"india": false,
"title": "War - Part Two: Anybody's Son Will Do (1 of 6)",
"channel": "Ingsoc75",
"minutes": null,
"year": null,
"since": 2013,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a classic documentary on military training and the psychology of going to war.",
"tags": [
"war",
"gwynne dyer",
"basic training",
"military psychology",
"pbs"
]
},
{
"id": "HMBl0ttu-Ow",
"type": "Talk",
"india": false,
"title": "Social Physics: How Good Ideas Spread | Sandy Pentland | Talks at Google",
"channel": "Talks at Google",
"minutes": null,
"year": null,
"since": 2015,
"category": "Business Psychology",
"also": [],
"topics": [
"Ideas"
],
"stage": null,
"gem": false,
"why": "HN commenters recommend it for the finding that idea exchange and connectivity drive productivity and wealth, which they apply to cities, offices and online communities.",
"tags": [
"social physics",
"idea flow",
"collective intelligence",
"cities",
"big data"
]
},
{
"id": "HSxSgbNQi-g",
"type": "Explainer",
"india": false,
"title": "Small Planes Over Big Oceans (ETOPS Explained)",
"channel": "Wendover Productions",
"minutes": null,
"year": null,
"since": 2017,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it whenever threads touch twin-engine ocean flights, diversions, or why the 747 and A380 are being retired.",
"tags": [
"etops",
"twinjets",
"boeing 787",
"airbus a380",
"airline economics"
]
},
{
"id": "IRVdiHu1VCc",
"type": "Talk",
"india": false,
"title": "Learning from dirty jobs | Mike Rowe",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2012,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "It comes up in threads on career choice, trades, handiness and the 'follow your passion' advice.",
"tags": [
"mike rowe",
"dirty jobs",
"careers",
"trades",
"follow your passion"
]
},
{
"id": "L-x8DYTOv7w",
"type": "Explainer",
"india": false,
"title": "YouTubers have to declare ads. Why doesn't anyone else?",
"channel": "Tom Scott",
"minutes": null,
"year": null,
"since": 2021,
"category": "Marketing & Growth",
"also": [],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "HN cites it as a clear explainer on sponsorship and ad disclosure rules and their inconsistency across media.",
"tags": [
"product placement",
"influencer regulation",
"sponsorship",
"tom scott",
"ftc"
]
},
{
"id": "OqjcrfKjobY",
"type": "Demo",
"india": false,
"title": "Tabs Outliner Overview",
"channel": "omnray",
"minutes": null,
"year": null,
"since": 2014,
"category": "Business Psychology",
"also": [],
"topics": [
"Product",
"Team"
],
"stage": null,
"gem": false,
"why": "Commenters who struggle with tab overload use it to show what tree-based tab management looks like and recommend the extension.",
"tags": [
"tabs outliner",
"chrome extension",
"tab management",
"productivity",
"browser"
]
},
{
"id": "PQccNdwm8Tw",
"type": "Talk",
"india": false,
"title": "How technology loses out in companies, countries & continents and what to do about it",
"channel": "bert hubert",
"minutes": null,
"year": null,
"since": 2022,
"category": "Startup & Entrepreneurship",
"also": [
"SaaS & Technology"
],
"topics": [
"Team"
],
"stage": null,
"gem": true,
"why": "HN points to it as a sharper explanation of why outsourcing and specialization erode deep expertise, in threads on Intel, Boeing and software decline.",
"tags": [
"outsourcing",
"innovation",
"tech policy",
"europe",
"deep expertise"
]
},
{
"id": "QOEMv0S8AcA",
"type": "Talk",
"india": false,
"title": "Eben Moglen - Freedom in The Cloud",
"channel": "Punkcast",
"minutes": null,
"year": null,
"since": 2011,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as the foundational talk behind FreedomBox and the case against centralized web services.",
"tags": [
"freedombox",
"privacy",
"cloud",
"free software",
"eben moglen"
]
},
{
"id": "RTB5XhjbgZA",
"type": "Explainer",
"india": false,
"title": "Segmented Displays",
"channel": "Posy",
"minutes": null,
"year": null,
"since": 2023,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a meditative, geeky tour of alternative display designs.",
"tags": [
"seven-segment",
"displays",
"design history",
"posy",
"patents"
]
},
{
"id": "WTYet-qf1jo",
"type": "Commentary",
"india": false,
"title": "Windows 8: The Animated Evaluation",
"channel": "blogphilofilms",
"minutes": null,
"year": null,
"since": 2012,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Linked in Windows 8 threads as a funny but accurate summary of its usability problems.",
"tags": [
"windows 8",
"ux critique",
"animation",
"rant",
"metro interface"
]
},
{
"id": "WlT3UhC7NwQ",
"type": "Talk",
"india": false,
"title": "Chase Adam at Startup School 2013",
"channel": "Y Combinator",
"minutes": null,
"year": null,
"since": 2014,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as an excellent speech from Watsi's founder, especially on keeping a nonprofit aligned with the people it serves.",
"tags": [
"watsi",
"startup school",
"nonprofit",
"y combinator",
"healthcare funding"
]
},
{
"id": "WxOp5mBY9IY",
"type": "Talk",
"india": false,
"title": "Macworld Boston 1997-The Microsoft Deal",
"channel": "JoshuaG",
"minutes": null,
"year": null,
"since": 2010,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN returns to it as a legendary moment in tech history and as a precedent for strategic deals between rivals, such as in the Nokia and Microsoft story.",
"tags": [
"steve jobs",
"bill gates",
"macworld 1997",
"apple history",
"keynote"
]
},
{
"id": "YCjNT9qGjh4",
"type": "Documentary",
"india": false,
"title": "Half-Life 2: 20th Anniversary Documentary",
"channel": "Valve",
"minutes": null,
"year": null,
"since": 2024,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as an excellent inside look at Valve's history, its technology and the games industry of the time.",
"tags": [
"valve",
"half-life 2",
"steam",
"game development",
"game industry history"
]
},
{
"id": "_6pl5GG8RQ4",
"type": "Lecture",
"india": false,
"title": "How to Find Product Market Fit - Stanford CS183F: Startup School",
"channel": "Stanford Online",
"minutes": null,
"year": null,
"since": 2018,
"category": "Startup & Entrepreneurship",
"also": [
"Marketing & Growth"
],
"topics": [
"Product"
],
"stage": "Validation",
"gem": false,
"why": "HN founders recommend it as a must-watch on recognizing real product-market fit and avoiding solutions in search of problems.",
"tags": [
"product market fit",
"segment",
"startup school",
"founders",
"peter reinhardt"
]
},
{
"id": "ax7f3JZJHSw",
"type": "Commentary",
"india": false,
"title": "What Games Are Like For Someone Who Doesn't Play Games",
"channel": "Razbuten",
"minutes": null,
"year": null,
"since": 2019,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN uses it to illustrate learned literacy in game and software UX, and how unfamiliar conventions confuse newcomers.",
"tags": [
"non-gamers",
"game design",
"tutorials",
"ux",
"onboarding"
]
},
{
"id": "f-wWBGo6a2w",
"type": "Lecture",
"india": false,
"title": "Lecture: Biblical Series I: Introduction to the Idea of God",
"channel": "Jordan B Peterson",
"minutes": null,
"year": null,
"since": 2018,
"category": "Business Psychology",
"also": [],
"topics": [
"Ideas"
],
"stage": null,
"gem": false,
"why": "HN fans say it offers value even to atheists by interpreting Bible stories as psychological and evolutionary archetypes, and some credit it with helping them through depression.",
"tags": [
"jordan peterson",
"bible",
"archetypes",
"religion",
"psychology"
]
},
{
"id": "fwjwePe-HmA",
"type": "Explainer",
"india": false,
"title": "Why Trains are so Expensive",
"channel": "Wendover Productions",
"minutes": null,
"year": null,
"since": 2017,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN links it in rail-versus-air threads as a clear cost breakdown of American passenger rail.",
"tags": [
"amtrak",
"trains",
"transportation costs",
"airlines",
"wendover"
]
},
{
"id": "giQ8xEWjnBs",
"type": "Explainer",
"india": false,
"title": "Why SpaceX is Making Starlink",
"channel": "Real Engineering",
"minutes": null,
"year": null,
"since": 2019,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a clear explanation of Starlink's purpose and the case that it can beat fiber on latency for long routes.",
"tags": [
"starlink",
"spacex",
"latency",
"satellite constellations",
"fiber"
]
},
{
"id": "hMKy52Intac",
"type": "Explainer",
"india": false,
"title": "Xanadu Basics 1a - VISIBLE CONNECTION",
"channel": "TheTedNelson",
"minutes": null,
"year": null,
"since": 2018,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters point to it as the author's own short explanation of Xanadu's core ideas, usually in threads on hypertext, linking and decentralizing the web.",
"tags": [
"xanadu",
"ted nelson",
"links",
"transclusion",
"web history"
]
},
{
"id": "jILgxeNBK_8",
"type": "Explainer",
"india": false,
"title": "Why do competitors open their stores next to one another? - Jac de Haan",
"channel": "TED-Ed",
"minutes": null,
"year": null,
"since": 2015,
"category": "Customer Behaviour",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN people use it as a clear, quick explanation of Nash equilibrium and why competitors cluster.",
"tags": [
"nash equilibrium",
"hotelling model",
"competition",
"economics",
"animation"
]
},
{
"id": "l6XQUciI-Sc",
"type": "Interview",
"india": false,
"title": "Ubuntu Slaughters Kittens | BSD Now 103",
"channel": "Jupiter Broadcasting",
"minutes": null,
"year": null,
"since": 2015,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN links it for Cantrill's entertaining epoll versus kqueue rant and his stories, such as bricking a machine with rm -rf.",
"tags": [
"bryan cantrill",
"epoll",
"kqueue",
"zfs",
"dtrace"
]
},
{
"id": "oeqPrUmVz-o",
"type": "Talk",
"india": false,
"title": "Steve Jobs Insult Response - Highest Quality",
"channel": "Jonathan Field",
"minutes": null,
"year": null,
"since": 2020,
"category": "SaaS & Technology",
"also": [
"Founder Stories & Documentaries",
"Customer Behaviour"
],
"topics": [
"Product",
"Users"
],
"stage": null,
"gem": false,
"why": "Quoted constantly as the canonical statement of product-first thinking over technology-first thinking, and as a model of handling a heckler.",
"tags": [
"steve jobs",
"wwdc 1997",
"customer experience",
"opendoc",
"product thinking"
]
},
{
"id": "q7K0vRUKXKc",
"type": "Talk",
"india": false,
"title": "Paul Graham at Startup School 08",
"channel": "startupschool",
"minutes": null,
"year": null,
"since": 2010,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN points to it as a staple pg talk, and it appears in lists of the best startup videos and tech talks.",
"tags": [
"paul graham",
"y combinator",
"startup school",
"ethics in business",
"founders"
]
},
{
"id": "r8RxkpUvxK0",
"type": "Talk",
"india": false,
"title": "Moishe Lettvin - What I Learned Doing 250 Interviews at Google",
"channel": "Etsy Eng (Etsy Engineering)",
"minutes": null,
"year": null,
"since": 2016,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "Linked often in hiring-process threads for the anecdote about Google's committee refusing to hire itself, as evidence interviews are noisy.",
"tags": [
"google hiring",
"interviews",
"hiring committee",
"engineering careers",
"hiring bias"
]
},
{
"id": "rJjKP8vYjpQ",
"type": "Explainer",
"india": false,
"title": "The Gambler - Fuck You",
"channel": "Youtube Videos",
"minutes": null,
"year": null,
"since": 2018,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN points to it as the source and best distillation of 'fuck you money', in threads about FIRE, windfalls, layoffs and financial literacy.",
"tags": [
"fuck you money",
"fire",
"the gambler",
"movie scene",
"personal finance"
]
},
{
"id": "suRDUFpsHus",
"type": "Explainer",
"india": false,
"title": "Mad Men - The Carousel (Higher Quality)",
"channel": "TomR35",
"minutes": null,
"year": null,
"since": 2010,
"category": "Marketing & Growth",
"also": [],
"topics": [],
"stage": "Fundraising",
"gem": false,
"why": "HN holds it up as one of the best pitches ever, an example of selling feeling and nostalgia rather than features.",
"tags": [
"mad men",
"kodak carousel",
"pitch",
"nostalgia",
"advertising"
]
},
{
"id": "tke6X2eME3c",
"type": "Talk",
"india": false,
"title": "The Energy Project | Tony Schwartz | Talks at Google",
"channel": "Talks at Google",
"minutes": null,
"year": null,
"since": 2010,
"category": "Startup & Entrepreneurship",
"also": [
"Business Psychology"
],
"topics": [
"Product",
"Team"
],
"stage": null,
"gem": false,
"why": "HN commenters point to it in discussions of shorter workweeks and productivity, arguing that rest and energy matter more than hours.",
"tags": [
"productivity",
"work hours",
"rest",
"stamina",
"leadership"
]
},
{
"id": "udPY5rQVoW0",
"type": "Demo",
"india": false,
"title": "Playing a Neural Network's version of GTA V: GAN Theft Auto",
"channel": "sentdex",
"minutes": null,
"year": null,
"since": 2021,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "Cited as an early, striking demo of neural networks acting as game engines and world models.",
"tags": [
"gan",
"gamegan",
"gta v",
"world models",
"generative ai"
]
},
{
"id": "v_UyVmITiYQ",
"type": "Demo",
"india": false,
"title": "Google Wave Developer Preview at Google I/O 2009",
"channel": "Google",
"minutes": null,
"year": null,
"since": 2009,
"category": "SaaS & Technology",
"also": [
"Founder Stories & Documentaries"
],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "HN returns to it as the original Wave pitch, both for its wow factor and as a case study in a hyped product that was later shut down.",
"tags": [
"google wave",
"google i/o",
"collaboration",
"product demo",
"email"
]
},
{
"id": "wASCH_gPnDw",
"type": "Interview",
"india": false,
"title": "Expert to Expert: Rich Hickey and Brian Beckman - Inside Clojure",
"channel": "jasonofthel33t",
"minutes": null,
"year": null,
"since": 2014,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters call it a fantastic introduction to Clojure and the thinking behind its design.",
"tags": [
"clojure",
"rich hickey",
"persistent data structures",
"concurrency",
"functional programming"
]
},
{
"id": "wSdV1M7n4gQ",
"type": "Lecture",
"india": false,
"title": "Anders Hejlsberg on Modern Compiler Construction",
"channel": "Kasper",
"minutes": null,
"year": null,
"since": 2018,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "It is the standard reference for why modern compilers and language servers differ from textbook designs, cited in rust-analyzer and parsing threads.",
"tags": [
"compilers",
"ide tooling",
"roslyn",
"typescript",
"incremental compilation",
"language servers"
]
},
{
"id": "xKu2de0yCJI",
"type": "Talk",
"india": false,
"title": "AT&T Archives: Saul Bass Pitch Video for Bell System Logo Redesign",
"channel": "AT&T Tech Channel",
"minutes": null,
"year": null,
"since": 2022,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN holds it up as a masterclass in explaining and selling a design.",
"tags": [
"saul bass",
"bell system",
"logo design",
"branding",
"design presentation"
]
},
{
"id": "y3qfeoqErtY",
"type": "Explainer",
"india": false,
"title": "How Overnight Shipping Works",
"channel": "Wendover Productions",
"minutes": null,
"year": null,
"since": 2018,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a clear, accessible explainer on logistics, overnight shipping and why old planes get used for cargo.",
"tags": [
"overnight shipping",
"fedex",
"air cargo",
"hub and spoke",
"supply chain"
]
},
{
"id": "zkTf0LmDqKI",
"type": "Interview",
"india": false,
"title": "Steve Jobs on Failure",
"channel": "Silicon Valley Historical Association",
"minutes": null,
"year": null,
"since": 2012,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries",
"Business Psychology"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters return to it as a motivational reminder to not fear failure and to just ask for what you want.",
"tags": [
"steve jobs",
"failure",
"asking for help",
"motivation",
"career"
]
},
{
"id": "1tSqSMOyNFE",
"type": "Explainer",
"india": false,
"title": "How We’re Fooled By Statistics",
"channel": "Veritasium",
"minutes": null,
"year": null,
"since": 2014,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters link it as the clearest short explanation of regression to the mean, especially for how it misleads people about feedback and statistics.",
"tags": [
"statistics",
"feedback",
"psychology",
"cognitive bias",
"veritasium"
]
},
{
"id": "2nBPN-MKefA",
"type": "Documentary",
"india": false,
"title": "Money as Debt I - Revised Edition 2009 (Full Movie)",
"channel": "Ethaniel RockX",
"minutes": null,
"year": null,
"since": 2020,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters recommend it as a cartoonish but thorough explanation of the monetary system, though some critics dispute its claims.",
"tags": [
"monetary system",
"fractional reserve banking",
"money creation",
"animated documentary"
]
},
{
"id": "3TFz1xqp3us",
"type": "Commentary",
"india": false,
"title": "Driving Amazon’s ELECTRIC Delivery Vehicle: Rivian EDV",
"channel": "Friday Adventure Club",
"minutes": null,
"year": null,
"since": 2022,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN points to it as a rare review from an actual delivery driver rather than a car reviewer, showing how the van's design suits the job.",
"tags": [
"rivian",
"amazon delivery",
"electric vehicles",
"driver review",
"last-mile logistics"
]
},
{
"id": "3x1b_S6Qp2Q",
"type": "Interview",
"india": false,
"title": "Vitalik Buterin: Ethereum, Cryptocurrency, and the Future of Money | Lex Fridman Podcast #80",
"channel": "Lex Fridman",
"minutes": null,
"year": null,
"since": 2020,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as a fascinating conversation showing how the Ethereum founder thinks.",
"tags": [
"vitalik buterin",
"ethereum",
"blockchain",
"lex fridman",
"bitcoin"
]
},
{
"id": "4-SGpEInX_c",
"type": "Interview",
"india": false,
"title": "Stephen Wolfram: Complexity and the Fabric of Reality | Lex Fridman Podcast #234",
"channel": "Lex Fridman",
"minutes": null,
"year": null,
"since": 2021,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as an accessible way into Wolfram's physics ideas and his personality.",
"tags": [
"stephen wolfram",
"cellular automata",
"computational irreducibility",
"wolfram physics project",
"ruliad"
]
},
{
"id": "43CMV8KIs3E",
"type": "Commentary",
"india": false,
"title": "Epic v Apple: Judgment Day - Who Won? Who Lost? ...and Why? (VL538)",
"channel": "Hoeg Law",
"minutes": null,
"year": null,
"since": 2021,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Strongly recommended as the best explanation of the ruling, in more depth and with more accuracy than press coverage.",
"tags": [
"epic v apple",
"antitrust",
"app store",
"court decision",
"legal analysis"
]
},
{
"id": "4AC6RSau7r8",
"type": "Documentary",
"india": false,
"title": "Money as Debt - Full Documentary",
"channel": "Free Your Mind",
"minutes": null,
"year": null,
"since": 2017,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as an approachable explanation of fractional reserve banking, with the caveat that it is biased.",
"tags": [
"fractional reserve banking",
"debt",
"monetary system",
"animation",
"paul grignon"
]
},
{
"id": "4zgYG-_ha28",
"type": "Talk",
"india": false,
"title": "QuakeCon 2011 - John Carmack Keynote",
"channel": "QuakeCon Official",
"minutes": null,
"year": null,
"since": 2011,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited as a source for Carmack's views on static analysis, open source and languages, and praised as a captivating, conversational speaker.",
"tags": [
"john carmack",
"id software",
"quakecon",
"rage",
"static analysis",
"open source"
]
},
{
"id": "5Vt8zqhHe_c",
"type": "Talk",
"india": false,
"title": "Maciej Ceglowski - Barely succeed! It's easier!",
"channel": "webdirections",
"minutes": null,
"year": null,
"since": 2015,
"category": "Startup & Entrepreneurship",
"also": [
"SaaS & Technology"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN regards it as an inspiring, funny case for modest, bootstrapped success over venture-funded risk.",
"tags": [
"startups",
"bootstrapping",
"pinboard",
"silicon valley",
"small business"
]
},
{
"id": "5tSTk1083VY",
"type": "Podcast",
"india": false,
"title": "Joe Rogan Experience #1080 - David Goggins",
"channel": "PowerfulJRE",
"minutes": null,
"year": null,
"since": 2019,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters recommend it as an inspiring story about perseverance and getting outside one's comfort zone.",
"tags": [
"david goggins",
"joe rogan",
"ultramarathon",
"motivation",
"discipline"
]
},
{
"id": "6VOQnK7O2To",
"type": "Interview",
"india": false,
"title": "Chris Sacca of Lowercase Capital - TWiST #291",
"channel": "This Week in Startups",
"minutes": null,
"year": null,
"since": 2012,
"category": "Startup & Entrepreneurship",
"also": [
"Investment & Venture Capital",
"Founder Stories & Documentaries"
],
"topics": [
"Fundraising"
],
"stage": "Fundraising",
"gem": false,
"why": "HN recommends it in startup video lists for its stories and Sacca's candid background.",
"tags": [
"chris sacca",
"startups",
"venture capital",
"founders",
"kickstarter"
]
},
{
"id": "8CAafjodkyE",
"type": "Tutorial",
"india": false,
"title": "iPhone Magnifier and Voice over",
"channel": "Kristy Viers",
"minutes": null,
"year": null,
"since": 2021,
"category": "SaaS & Technology",
"also": [
"Customer Behaviour"
],
"topics": [
"Users"
],
"stage": null,
"gem": false,
"why": "HN recommends it to show what on-device accessibility features can do and how blind users actually use an iPhone.",
"tags": [
"voiceover",
"iphone magnifier",
"blind users",
"accessibility",
"ios"
]
},
{
"id": "9R5OWh7luL4",
"type": "Documentary",
"india": false,
"title": "Derren Brown - The System (Full)",
"channel": "ScepticaTV",
"minutes": null,
"year": null,
"since": 2013,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it as the classic demonstration of survivorship and confirmation bias in betting, trading and prediction claims.",
"tags": [
"derren brown",
"confirmation bias",
"betting systems",
"psychology",
"trading"
]
},
{
"id": "9c8an2XZ3MU",
"type": "Talk",
"india": false,
"title": "Terence Mckenna - Culture is your operating system",
"channel": "Dani Dögenigt",
"minutes": null,
"year": null,
"since": 2009,
"category": "Business Psychology",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "Cited as the origin of the 'culture/philosophy as operating system' metaphor and as a quick introduction to McKenna's ideas.",
"tags": [
"terence mckenna",
"psychedelics",
"culture",
"consciousness",
"philosophy"
]
},
{
"id": "9vpqilhW9uI",
"type": "Talk",
"india": false,
"title": "Why our IQ levels are higher than our grandparents' | James Flynn",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2020,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as a clear explanation of why generations think differently and why IQ scores have risen.",
"tags": [
"iq",
"james flynn",
"abstract thinking",
"cognitive history",
"ted talk"
]
},
{
"id": "AFVDZeg4RVY",
"type": "Interview",
"india": false,
"title": "[7] Jim Keller, Silicon Wizard 🧙‍♂️",
"channel": "TechTechPotato",
"minutes": null,
"year": null,
"since": 2022,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as an interview dense with insight from Keller, worth hearing in full even for non-engineers.",
"tags": [
"jim keller",
"amd zen",
"risc-v",
"moore's law",
"chip design"
]
},
{
"id": "AItTqnTsVjA",
"type": "Commentary",
"india": false,
"title": "The GUI should be better.  A lot better.",
"channel": "Accursed Farms",
"minutes": null,
"year": null,
"since": 2020,
"category": "SaaS & Technology",
"also": [],
"topics": [
"Users"
],
"stage": null,
"gem": false,
"why": "Recommended as a thought-provoking critique that makes people notice how poor everyday GUIs are.",
"tags": [
"gui",
"user interface",
"windows 7",
"customization",
"desktop"
]
},
{
"id": "AxZWxxZ2JGE",
"type": "Lecture",
"india": false,
"title": "Why our generals were more successful in World War II than in Korea, Vietnam or Iraq/Afghanistan",
"channel": "UC Berkeley Events",
"minutes": null,
"year": null,
"since": 2018,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "Used in hiring and management debates as an analysis of fast evaluation, quick dismissal without stigma, and the cost of keeping underperformers.",
"tags": [
"thomas ricks",
"world war ii",
"firing",
"management",
"hiring",
"generals"
]
},
{
"id": "B_nGEj8wIP0",
"type": "Lecture",
"india": false,
"title": "Milton Friedman Speaks: Money and Inflation (B1230) - Full Video",
"channel": "Free To Choose Network",
"minutes": null,
"year": null,
"since": 2022,
"category": "Customer Behaviour",
"also": [
"Investment & Venture Capital"
],
"topics": [],
"stage": null,
"gem": false,
"why": "Shared during inflation discussions as an accessible, layman-friendly statement of the monetarist view.",
"tags": [
"milton friedman",
"inflation",
"money supply",
"monetarism",
"economics"
]
},
{
"id": "Bqx6li5dbEY",
"type": "Interview",
"india": false,
"title": "Ted Nelson in Herzog's \"Lo and Behold\"",
"channel": "TheTedNelson",
"minutes": null,
"year": null,
"since": 2017,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN shares it as an accessible window into Ted Nelson's vision of Xanadu and linking, which commenters say gains meaning with historical context.",
"tags": [
"ted nelson",
"xanadu",
"werner herzog",
"hypertext",
"lo and behold"
]
},
{
"id": "BrK7X_XlGB8",
"type": "Talk",
"india": false,
"title": "A visual guide to Bayesian thinking",
"channel": "Julia Galef",
"minutes": null,
"year": null,
"since": 2017,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as a short, accessible intro to Bayesian reasoning and priors.",
"tags": [
"bayes rule",
"probability",
"rationality",
"priors",
"critical thinking"
]
},
{
"id": "CjVQJdIrDJ0",
"type": "Talk",
"india": false,
"title": "Thinking, Fast and Slow | Daniel Kahneman | Talks at Google",
"channel": "Talks at Google",
"minutes": null,
"year": null,
"since": 2011,
"category": "Customer Behaviour",
"also": [
"Business Psychology"
],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a one-hour substitute for the book's opening chapters for those short on time.",
"tags": [
"daniel kahneman",
"system 1 and 2",
"behavioral economics",
"psychology",
"thinking fast and slow"
]
},
{
"id": "DJFKl_5JTnA",
"type": "Lecture",
"india": false,
"title": "Donald B. Gillies Lecture: Dr. Michael Stonebraker",
"channel": "Siebel School of Computing and Data Science",
"minutes": null,
"year": null,
"since": 2018,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited in many threads about academic incentives, paper counts and why academia struggles to produce working software.",
"tags": [
"stonebraker",
"databases",
"academia",
"publishing incentives",
"turing award"
]
},
{
"id": "E8Lhqri8tZk",
"type": "Talk",
"india": false,
"title": "1,500 Slot Machines Walk into a Bar: Adventures in Quantity Over Quality",
"channel": "GDC Festival of Gaming",
"minutes": null,
"year": null,
"since": 2020,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters recommend it as a hilarious account of mass-produced app store shovelware and cite it in threads on spam and low-quality content.",
"tags": [
"mobile apps",
"slot machines",
"procedural generation",
"gdc",
"app store spam"
]
},
{
"id": "EZxP0i9ah8E",
"type": "Talk",
"india": false,
"title": "Paul Buchheit at Startup School 08",
"channel": "startupschool",
"minutes": null,
"year": null,
"since": 2010,
"category": "Startup & Entrepreneurship",
"also": [
"Marketing & Growth"
],
"topics": [
"Users"
],
"stage": null,
"gem": false,
"why": "HN commenters cite it for its memorable lines on advice, limited experience and early user focus, and rewatch it as a reminder not to be prescriptive.",
"tags": [
"paul buchheit",
"user feedback",
"startup school",
"gmail",
"friendfeed"
]
},
{
"id": "Ep2-ohgFOys",
"type": "Interview",
"india": false,
"title": "Abolish Copyrights and Patents? A Soho Forum Debate",
"channel": "ReasonTV",
"minutes": null,
"year": null,
"since": 2022,
"category": "Customer Behaviour",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN points to it as a substantive debate on intellectual property from two libertarian angles, with Kinsella as the abolitionist voice.",
"tags": [
"copyright",
"patents",
"libertarianism",
"stephan kinsella",
"richard epstein"
]
},
{
"id": "GRYcSuyLiJk",
"type": "Lecture",
"india": false,
"title": "Robert Sapolsky: The Biology of Humans at Our Best and Worst",
"channel": "Stanford Iranian Studies Program",
"minutes": null,
"year": null,
"since": 2020,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends Sapolsky as an exceptional storyteller and points to this lecture on the biology of human behavior and violence.",
"tags": [
"robert sapolsky",
"neuroscience",
"behavior",
"violence",
"stanford"
]
},
{
"id": "GVT3WUa-48Y",
"type": "Demo",
"india": false,
"title": "ANIME ROCK, PAPER, SCISSORS",
"channel": "Corridor Digital",
"minutes": null,
"year": null,
"since": 2023,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "HN commenters point to it as an impressive example of what AI animation could do and of VFX artists adopting AI in their workflows.",
"tags": [
"stable diffusion",
"anime",
"ai video",
"corridor digital",
"vfx"
]
},
{
"id": "Hd_ptbiPoXM",
"type": "Talk",
"india": false,
"title": "Steve Jobs' 2005 Stanford Commencement Address (with intro by President John Hennessy)",
"channel": "Stanford",
"minutes": null,
"year": null,
"since": 2011,
"category": "Founder Stories & Documentaries",
"also": [
"Business Psychology"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN people point to it as an inspiring, rewatchable speech, especially for anyone worrying about wasted time or direction.",
"tags": [
"steve jobs",
"commencement speech",
"stanford",
"career",
"death"
]
},
{
"id": "HrUy1Vn2KdI",
"type": "Documentary",
"india": false,
"title": "Couldn't Care Less. Cormac McCarthy in conversation with David Krakauer",
"channel": "Karol Jałochowski",
"minutes": null,
"year": null,
"since": 2023,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "It is one of the few long, candid interviews with the famously reclusive McCarthy, and commenters share it whenever he comes up.",
"tags": [
"cormac mccarthy",
"santa fe institute",
"the unconscious",
"literature",
"interview"
]
},
{
"id": "I6xwMIUPHss",
"type": "Documentary",
"india": false,
"title": "The Company that Broke Canada",
"channel": "BobbyBroccoli",
"minutes": null,
"year": null,
"since": 2024,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a well-made documentary explaining Nortel's rise and the index-fund and bubble dynamics around it.",
"tags": [
"nortel",
"dot-com bubble",
"canada",
"telecom",
"corporate history"
]
},
{
"id": "IX-gTobCJHs",
"type": "Demo",
"india": false,
"title": "Nokia Morph Concept (long)",
"channel": "Alexander Budde",
"minutes": null,
"year": null,
"since": 2011,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN brings it up as a nostalgic, exciting concept in threads on foldable phones and design, and sometimes as an example of concept videos that never shipped.",
"tags": [
"nokia",
"nanotechnology",
"concept video",
"flexible devices",
"foldable phones"
]
},
{
"id": "IkdziSLYzHw",
"type": "Lecture",
"india": false,
"title": "Will AI outsmart human intelligence? - with 'Godfather of AI' Geoffrey Hinton",
"channel": "The Royal Institution",
"minutes": null,
"year": null,
"since": 2025,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "HN readers recommend it as an intuitive explanation of neural networks that shifts how people think about AI and language.",
"tags": [
"geoffrey hinton",
"neural networks",
"backpropagation",
"ai risk",
"language models"
]
},
{
"id": "K3lP3BhvnSo",
"type": "Explainer",
"india": false,
"title": "How the Fed's \"Money Printer\" Really Works",
"channel": "Ben Felix",
"minutes": null,
"year": null,
"since": 2020,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN users point to it to correct the 'money printer go brrr' view and as a clear explanation of how banks create money through loans.",
"tags": [
"federal reserve",
"quantitative easing",
"money supply",
"bank lending",
"monetary policy"
]
},
{
"id": "L1j93RnIxEo",
"type": "Explainer",
"india": false,
"title": "Here's What's Preventing You From Finishing Projects",
"channel": "Zack Freedman",
"minutes": null,
"year": null,
"since": 2021,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN finds the project-scoping rubric useful for programmers too and recommends it on finishing side projects.",
"tags": [
"procrastination",
"project scoping",
"diy",
"motivation",
"maker"
]
},
{
"id": "NeopkvAP-ag",
"type": "Explainer",
"india": false,
"title": "So... the minute hand shows progression — apparently we think of time in wildly different ways",
"channel": "Technology Connextras",
"minutes": null,
"year": null,
"since": 2022,
"category": "Business Psychology",
"also": [
"SaaS & Technology"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN points to it whenever analog versus digital clocks come up, as an idea that changed how commenters think about time perception.",
"tags": [
"clocks",
"time perception",
"mental models",
"technology connections",
"design"
]
},
{
"id": "NngCHTImH1g",
"type": "Explainer",
"india": false,
"title": "The Future of Humanity's Energy No One Knows About | Terraform",
"channel": "S3 | Science, Startups, & Stories",
"minutes": null,
"year": null,
"since": 2024,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters point to it as a clear, short tour of Terraform's synthetic fuel approach and goals.",
"tags": [
"terraform industries",
"direct air capture",
"synthetic natural gas",
"electrolysis",
"solar energy",
"climate tech"
]
},
{
"id": "OP4CKn86qGY",
"type": "Commentary",
"india": false,
"title": "Avoid These Words (And Not Just at Work)",
"channel": "Adam Savage’s Tested",
"minutes": null,
"year": null,
"since": 2024,
"category": "Startup & Entrepreneurship",
"also": [
"Business Psychology"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it whenever 'why don't you just...' comes up as an example of arrogant, dismissive advice.",
"tags": [
"feedback",
"condescension",
"collaboration",
"advice",
"adam savage"
]
},
{
"id": "OqEeIG8aPPk",
"type": "Talk",
"india": false,
"title": "If Russ Ackoff had given a TED Talk...",
"channel": "Steven Brant",
"minutes": null,
"year": null,
"since": 2020,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries"
],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "HN favors it as a compact, quotable management and systems-thinking talk, often cited for doing the right thing versus doing the wrong thing right.",
"tags": [
"russ ackoff",
"deming",
"systems thinking",
"continuous improvement",
"management"
]
},
{
"id": "PDylgzybWAw",
"type": "Commentary",
"india": false,
"title": "Predatory Lending: Last Week Tonight with John Oliver (HBO)",
"channel": "LastWeekTonight",
"minutes": null,
"year": null,
"since": 2014,
"category": "Investment & Venture Capital",
"also": [
"Customer Behaviour"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as a good overview of predatory lending and the problems with payday loans.",
"tags": [
"payday loans",
"john oliver",
"consumer finance",
"debt",
"regulation"
]
},
{
"id": "PFc379hu--8",
"type": "Interview",
"india": false,
"title": "Alan Kay : July 2007 : A Conversation with CMU Faculty & Students",
"channel": "CMU Robotics Institute",
"minutes": null,
"year": null,
"since": 2017,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it for Kay's blunt critique of today's computing and standard CS curricula.",
"tags": [
"alan kay",
"cs education",
"computing history",
"curriculum",
"cmu"
]
},
{
"id": "Qct6LKbneKQ",
"type": "Documentary",
"india": false,
"title": "How We Made MuseScore 4 - Music App Design is Challenging!",
"channel": "Tantacrul",
"minutes": null,
"year": null,
"since": 2022,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a candid, in-depth look at hard UX redesign work and the limits of MIDI for notation.",
"tags": [
"musescore",
"ux design",
"engraving",
"midi",
"software redesign"
]
},
{
"id": "QgbLb6QCK88",
"type": "Tutorial",
"india": false,
"title": "Obsidian for Beginners: Start HERE — How to Use the Obsidian App for Notes",
"channel": "Linking Your Thinking with Nick Milo",
"minutes": null,
"year": null,
"since": 2021,
"category": "Business Psychology",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "HN recommends it as an approachable start-here demo for people new to Obsidian.",
"tags": [
"obsidian",
"note-taking",
"personal knowledge management",
"markdown",
"beginners"
]
},
{
"id": "QqrpFICtqpQ",
"type": "Podcast",
"india": false,
"title": "327 - Choices, costs, and challenges in US healthcare: insurance, drug pricing, & potential reforms",
"channel": "Peter Attia MD",
"minutes": null,
"year": null,
"since": 2024,
"category": "Customer Behaviour",
"also": [
"Sales"
],
"topics": [
"Sales"
],
"stage": null,
"gem": false,
"why": "HN commenters point to it as a detailed primer on why US healthcare is expensive and where the money goes.",
"tags": [
"us healthcare",
"health insurance",
"drug pricing",
"reimbursement",
"healthcare reform"
]
},
{
"id": "ReRcHdeUG9Y",
"type": "Talk",
"india": false,
"title": "Simon Sinek: Why Leaders Eat Last",
"channel": "99U",
"minutes": null,
"year": null,
"since": 2014,
"category": "Business Psychology",
"also": [
"Startup & Entrepreneurship"
],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "HN commenters point to it as a quick way to get the key concepts of the book and as an introduction to leadership thinking.",
"tags": [
"simon sinek",
"trust",
"team dynamics",
"management",
"biology of leadership"
]
},
{
"id": "SemHh0n19LA",
"type": "Talk",
"india": false,
"title": "5 steps to designing the life you want  | Bill Burnett | TEDxStanford",
"channel": "TEDx Talks",
"minutes": null,
"year": null,
"since": 2017,
"category": "SaaS & Technology",
"also": [
"Business Psychology"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as a short intro to the Designing Your Life approach when people ask about career direction and finding meaningful work.",
"tags": [
"design thinking",
"career",
"life design",
"tedx",
"prototyping",
"stanford"
]
},
{
"id": "TVgQ_tgWMyU",
"type": "Talk",
"india": false,
"title": "How to recover from depression",
"channel": "Psychlopaedia.org",
"minutes": null,
"year": null,
"since": 2021,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters recommend it as a comprehensive talk on depression, and one says it helped them through a bad period.",
"tags": [
"depression",
"psychology",
"michael yapko",
"therapy",
"mental health"
]
},
{
"id": "TruCIPy79w8",
"type": "Lecture",
"india": false,
"title": "Milton Friedman - Why Tax Reform Is Impossible",
"channel": "LibertyPen",
"minutes": null,
"year": null,
"since": 2013,
"category": "Investment & Venture Capital",
"also": [
"Customer Behaviour"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters cite it whenever a thread touches on tax complexity, loopholes, or why companies like Intuit benefit from a convoluted tax system.",
"tags": [
"tax reform",
"milton friedman",
"politics",
"regulation",
"economics"
]
},
{
"id": "TwKpj2ISQAc",
"type": "Commentary",
"india": false,
"title": "the sham legacy of Richard Feynman",
"channel": "Angela Collier ",
"minutes": null,
"year": null,
"since": 2024,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as a sobering counterpoint to the Feynman myth for people whose view comes from Surely You're Joking.",
"tags": [
"feynman",
"angela collier",
"physics history",
"great man myth",
"surely you're joking"
]
},
{
"id": "TwRjO3kHxU4",
"type": "Documentary",
"india": false,
"title": "How We Bought Our Abandoned House in Japan | Process, Costs, Risks, Finance, How to Find One",
"channel": "Tokyo Llama",
"minutes": null,
"year": null,
"since": 2020,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a candid look at the real costs and paperwork of buying and renovating an abandoned Japanese home.",
"tags": [
"akiya",
"japan",
"real estate",
"renovation",
"kominka"
]
},
{
"id": "Uooh0Y9fC_M",
"type": "Talk",
"india": false,
"title": "John Carmack Keynote - Quakecon 2013",
"channel": "IGN",
"minutes": null,
"year": null,
"since": 2014,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended to Carmack fans as the keynote with his functional programming adventures and for his fluent, wide-ranging talk.",
"tags": [
"john carmack",
"quakecon",
"functional programming",
"haskell",
"cloud gaming"
]
},
{
"id": "VFFlO7yBIBM",
"type": "Interview",
"india": false,
"title": "Wired Interviews Bill Gates 1996",
"channel": "Kevin Kelly",
"minutes": null,
"year": null,
"since": 2020,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "People recommend it as a rare, unpolished look at Gates's mid-90s thinking, including predictions that aged well and badly.",
"tags": [
"bill gates",
"microsoft",
"wired",
"tech history",
"1996"
]
},
{
"id": "WEDIj9JBTC8",
"type": "Lecture",
"india": false,
"title": "William Ackman: Everything You Need to Know About Finance and Investing in Under an Hour | Big Think",
"channel": "Big Think",
"minutes": null,
"year": null,
"since": 2015,
"category": "Investment & Venture Capital",
"also": [],
"topics": [
"Fundraising"
],
"stage": null,
"gem": false,
"why": "HN recommends it to beginners as a quick, clear overview of finance and investing fundamentals.",
"tags": [
"investing",
"finance",
"william ackman",
"hedge funds",
"wall street"
]
},
{
"id": "bNfAAQUQ_54",
"type": "Podcast",
"india": false,
"title": "Old Geeks Yell At Cloud (with Andrew Clay Shafer & Bryan Cantrill)",
"channel": "Arrested DevOps",
"minutes": null,
"year": null,
"since": 2017,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends Cantrill's integrity rant when discussing corporate ethics and companies that act on principles.",
"tags": [
"bryan cantrill",
"ethics",
"devops",
"company values",
"rant"
]
},
{
"id": "bZQun8Y4L2A",
"type": "Talk",
"india": false,
"title": "State of GPT | BRK216HFS",
"channel": "Microsoft Developer",
"minutes": null,
"year": null,
"since": 2023,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "Recommended as the clearest overview of how LLM assistants are built and how to use them well.",
"tags": [
"llm",
"rlhf",
"prompting",
"karpathy",
"fine-tuning"
]
},
{
"id": "cfwwHa-7Ux8",
"type": "Talk",
"india": false,
"title": "A real person, a lot like you",
"channel": "Derek Sivers",
"minutes": null,
"year": null,
"since": 2011,
"category": "Business Psychology",
"also": [
"Customer Behaviour"
],
"topics": [
"Users"
],
"stage": null,
"gem": false,
"why": "Recommended in threads about online hostility as a short reminder to treat strangers as human beings.",
"tags": [
"derek sivers",
"empathy",
"online behavior",
"customer service",
"short video"
]
},
{
"id": "dKJEpOtVgXc",
"type": "Lecture",
"india": false,
"title": "Do we need Attention? - Linear RNNs and State Space Models (SSMs) for NLP",
"channel": "Sasha Rush",
"minutes": null,
"year": null,
"since": 2024,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters recommend it for building intuition about state space models and the tradeoffs between transformer and SSM layers.",
"tags": [
"ssm",
"linear rnn",
"mamba",
"attention",
"s4",
"nlp"
]
},
{
"id": "eC7xzavzEKY",
"type": "Talk",
"india": false,
"title": "THIS IS WATER! by David Foster Wallace",
"channel": "The Actualization Agent",
"minutes": null,
"year": null,
"since": 2020,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters bring it up when urging empathy, patience and attention to the everyday instead of snap judgement.",
"tags": [
"david foster wallace",
"commencement speech",
"empathy",
"mindfulness",
"philosophy of life"
]
},
{
"id": "efPrtcLdcdM",
"type": "Commentary",
"india": false,
"title": "GPT-4chan: This is the worst AI ever",
"channel": "Yannic Kilcher",
"minutes": null,
"year": null,
"since": 2022,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "HN points to it as the definitive account of the GPT-4chan experiment, used in debates on LLM bias, truthfulness and bots.",
"tags": [
"gpt-4chan",
"language models",
"4chan",
"ai ethics",
"fine-tuning"
]
},
{
"id": "fTjhHrcyiQI",
"type": "Explainer",
"india": false,
"title": "Moneyball - Firing people",
"channel": "The BigTime Group",
"minutes": null,
"year": null,
"since": 2019,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "HN points to it as a model for firing or laying off people clearly and respectfully.",
"tags": [
"moneyball",
"management",
"layoffs",
"communication"
]
},
{
"id": "fa28lIGuxq8",
"type": "Explainer",
"india": false,
"title": "Why Do Reversing Trucks Not Beep Any More?",
"channel": "Tom Scott",
"minutes": null,
"year": null,
"since": 2016,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited whenever backup beepers and noise come up, as a clear explanation of the white-noise alternative.",
"tags": [
"white noise alarms",
"construction safety",
"sound design",
"tom scott",
"noise pollution"
]
},
{
"id": "gD_dZvPwAj0",
"type": "Explainer",
"india": false,
"title": "Dominic Frisby. A simple guide to land value tax",
"channel": "Dominic Frisby Comedy Videos",
"minutes": null,
"year": null,
"since": 2016,
"category": "Investment & Venture Capital",
"also": [
"Customer Behaviour"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN users share it as a short, accessible explainer for land value tax whenever housing, rents or inequality come up.",
"tags": [
"land value tax",
"economics",
"housing",
"rent-seeking",
"taxation"
]
},
{
"id": "gFEE3w7F0ww",
"type": "Podcast",
"india": false,
"title": "Travis Oliphant: NumPy, SciPy, Anaconda, Python & Scientific Programming | Lex Fridman Podcast #224",
"channel": "Lex Fridman",
"minutes": null,
"year": null,
"since": 2021,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a firsthand history of how Python became the language of scientific computing and ML.",
"tags": [
"numpy",
"scipy",
"anaconda",
"python",
"travis oliphant"
]
},
{
"id": "gRRvjZ_XNog",
"type": "Commentary",
"india": false,
"title": "DICKS: Do you need to be one to be a successful leader?",
"channel": "Max Joseph",
"minutes": null,
"year": null,
"since": 2018,
"category": "Business Psychology",
"also": [
"Startup & Entrepreneurship"
],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "HN recommends it as a thoughtful critique of the great-leader-as-jerk myth in threads on difficult bosses.",
"tags": [
"leadership",
"givers and takers",
"management",
"video essay",
"workplace"
]
},
{
"id": "ggUduBmvQ_4",
"type": "Explainer",
"india": false,
"title": "How Airlines Quietly Became Banks",
"channel": "Wendover Productions",
"minutes": null,
"year": null,
"since": 2021,
"category": "Investment & Venture Capital",
"also": [
"SaaS & Technology"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters point to it whenever airline economics or frequent-flier miles come up, since it clearly shows loyalty programs are worth more than the airlines themselves.",
"tags": [
"airlines",
"loyalty points",
"credit cards",
"finance",
"business model"
]
},
{
"id": "hpAMbpQ8J7g",
"type": "Talk",
"india": false,
"title": "RSA ANIMATE: First as Tragedy, Then as Farce",
"channel": "Royal Society of Arts",
"minutes": null,
"year": null,
"since": 2011,
"category": "Customer Behaviour",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Frequently linked in threads on philanthropy, ethical consumption and billionaire giving as a short, approachable critique of charity.",
"tags": [
"slavoj zizek",
"consumerism",
"philanthropy",
"cultural capitalism",
"rsa animate"
]
},
{
"id": "iGbC5j4pG9w",
"type": "Explainer",
"india": false,
"title": "How an Average Family in Tokyo Can Buy a New Home",
"channel": "Life Where I'm From",
"minutes": null,
"year": null,
"since": 2017,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "It is the standard citation in HN housing debates for showing that dense cities can still have affordable single-family homes.",
"tags": [
"housing",
"tokyo",
"zoning",
"urbanism",
"real estate"
]
},
{
"id": "iSVHp6CAyQ8",
"type": "Documentary",
"india": false,
"title": "Why The World Relies On ASML For Machines That Print Chips",
"channel": "CNBC",
"minutes": null,
"year": null,
"since": 2022,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Frequently recommended as a good, approachable overview of ASML and semiconductor equipment.",
"tags": [
"asml",
"euv",
"semiconductors",
"chipmaking",
"cleanroom"
]
},
{
"id": "j7zzQpvoYcQ",
"type": "Lecture",
"india": false,
"title": "The \"Last Lecture\" by Randy Pausch",
"channel": "Gabriel Robins",
"minutes": null,
"year": null,
"since": 2016,
"category": "Founder Stories & Documentaries",
"also": [
"Business Psychology"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters recommend it as an emotionally powerful life-advice talk and revisit it as a reminder of mortality.",
"tags": [
"randy pausch",
"last lecture",
"life advice",
"inspiration",
"memento mori"
]
},
{
"id": "jzERXJgi5vQ",
"type": "Interview",
"india": false,
"title": "- Startups - David H. Hansson, Partner at 37signals -TWiST #E337",
"channel": "This Week in Startups",
"minutes": null,
"year": null,
"since": 2013,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended to understand what the 37signals founders stand for and DHH's contrarian takes on tech business.",
"tags": [
"dhh",
"37signals",
"startups",
"entrepreneurship",
"ruby on rails"
]
},
{
"id": "kYYJlNbV1OM",
"type": "Lecture",
"india": false,
"title": "2017 Personality 01: Introduction",
"channel": "Jordan B Peterson",
"minutes": null,
"year": null,
"since": 2019,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as part of a long lecture series on psychology, complementing biology lectures, and named when HN asks for the best lecture series.",
"tags": [
"personality",
"psychology",
"university lecture",
"jordan peterson",
"psychoanalysis"
]
},
{
"id": "l4dCJJFuMsE",
"type": "Interview",
"india": false,
"title": "Steve Jobs Content vs Process",
"channel": "Bo Manton",
"minutes": null,
"year": null,
"since": 2021,
"category": "Startup & Entrepreneurship",
"also": [
"SaaS & Technology",
"Founder Stories & Documentaries"
],
"topics": [
"Product",
"Team"
],
"stage": null,
"gem": false,
"why": "Quoted whenever HN discusses process-heavy management and companies losing their product focus.",
"tags": [
"steve jobs",
"management",
"process vs content",
"product culture",
"apple"
]
},
{
"id": "lHLpKzUxjGk",
"type": "Talk",
"india": false,
"title": "John Carmack Tech Talk with UMKC-SCE",
"channel": "UMKC School of Science and Engineering",
"minutes": null,
"year": null,
"since": 2017,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended whenever latency, buffering or VR comfort comes up, as an accessible account from someone who dealt with it directly.",
"tags": [
"john carmack",
"virtual reality",
"latency",
"systems engineering",
"motion sickness"
]
},
{
"id": "lIW5jBrrsS0",
"type": "Documentary",
"india": false,
"title": "BOOKSTORES: How to Read More Books in the Golden Age of Content",
"channel": "Max Joseph",
"minutes": null,
"year": null,
"since": 2023,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters cite it as a thoughtful mini-doc on reading time and frequency in the age of social media.",
"tags": [
"reading",
"bookstores",
"content diet",
"attention",
"social media"
]
},
{
"id": "meHYBhcpdvQ",
"type": "Explainer",
"india": false,
"title": "The Stealership Trap - Why We Need the Dealership \"Rip Off\"",
"channel": "FortNine",
"minutes": null,
"year": null,
"since": 2022,
"category": "Customer Behaviour",
"also": [
"Startup & Entrepreneurship",
"Sales"
],
"topics": [
"Sales"
],
"stage": "First Customer",
"gem": false,
"why": "Offered as a well-researched counterpoint in threads complaining about car dealerships and direct sales.",
"tags": [
"car dealerships",
"supply chain",
"direct sales",
"motorcycles",
"retail economics"
]
},
{
"id": "n1QEj09Pe6k",
"type": "Explainer",
"india": false,
"title": "Why Planes Don't Fly Faster",
"channel": "Wendover Productions",
"minutes": null,
"year": null,
"since": 2018,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a clear economic explanation of aviation tradeoffs, relevant to Concorde and supersonic startup threads.",
"tags": [
"airliners",
"fuel efficiency",
"concorde",
"supersonic",
"wendover"
]
},
{
"id": "n3Xv_g3g-mA",
"type": "Explainer",
"india": false,
"title": "Loneliness",
"channel": "Kurzgesagt – In a Nutshell",
"minutes": null,
"year": null,
"since": 2019,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Shared in loneliness threads as a well-sourced, empathetic explanation, including for people struggling with it.",
"tags": [
"loneliness",
"social isolation",
"evolutionary psychology",
"mental health",
"kurzgesagt"
]
},
{
"id": "pxBQLFLei70",
"type": "Talk",
"india": false,
"title": "University of Texas at Austin 2014 Commencement Address - Admiral William H. McRaven",
"channel": "Texas Exes",
"minutes": null,
"year": null,
"since": 2017,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended in life-advice and motivation threads as worth watching in full, especially for its point about starting small by changing yourself.",
"tags": [
"mcraven",
"navy seals",
"make your bed",
"motivation",
"commencement"
]
},
{
"id": "r2CbbBLVaPk",
"type": "Talk",
"india": false,
"title": "The User is Drunk",
"channel": "squareweave",
"minutes": null,
"year": null,
"since": 2014,
"category": "SaaS & Technology",
"also": [],
"topics": [
"Users"
],
"stage": null,
"gem": false,
"why": "HN users recommend it as a memorable, short way to build empathy for users' confusing mistakes and to design for distraction.",
"tags": [
"ux",
"user interfaces",
"usability",
"design empathy",
"web apps"
]
},
{
"id": "rimtaSgGz_4",
"type": "Talk",
"india": false,
"title": "DEF CON 31 - An Audacious Plan to Halt the Internet's Ensh*ttification  - Cory Doctorow",
"channel": "DEFCONConference",
"minutes": null,
"year": null,
"since": 2023,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended in threads on big tech, monopolies and adversarial interoperability as the clearest statement of his argument.",
"tags": [
"cory doctorow",
"antitrust",
"big tech",
"interoperability",
"platforms"
]
},
{
"id": "rrkrvAUbU9Y",
"type": "Talk",
"india": false,
"title": "The puzzle of motivation | Dan Pink | TED",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2010,
"category": "Customer Behaviour",
"also": [
"Business Psychology",
"Startup & Entrepreneurship"
],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "HN cites it whenever money as an incentive comes up, as evidence that rewards can backfire for creative white-collar work.",
"tags": [
"dan pink",
"candle problem",
"intrinsic motivation",
"incentives",
"management"
]
},
{
"id": "s254IPHXgVA",
"type": "Talk",
"india": false,
"title": "Jancovici : Will technology save us from Climate Change ? MIT Media Lab - 23/02/2021",
"channel": "Jean-Marc Jancovici",
"minutes": null,
"year": null,
"since": 2021,
"category": "Investment & Venture Capital",
"also": [],
"topics": [
"Growth"
],
"stage": "Growth",
"gem": false,
"why": "Recommended in climate and energy threads as a numbers-based explanation of why energy underlies growth and emissions.",
"tags": [
"jancovici",
"energy economics",
"climate change",
"growth",
"nuclear"
]
},
{
"id": "sfGtw2C95Ms",
"type": "Lecture",
"india": false,
"title": "Understanding the Job",
"channel": "Edward Capaldi",
"minutes": null,
"year": null,
"since": 2019,
"category": "Startup & Entrepreneurship",
"also": [
"Marketing & Growth"
],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "Cited as the short, famous introduction to Jobs To Be Done and competition framing.",
"tags": [
"clayton christensen",
"milkshake",
"product strategy",
"innovation"
]
},
{
"id": "u-x7PdnvCyI",
"type": "Interview",
"india": false,
"title": "Morris Chang, in conversation with Jen-Hsun Huang",
"channel": "Computer History Museum",
"minutes": null,
"year": null,
"since": 2012,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a rare, inspiring history of the foundry business and the relationship between Chang and Huang.",
"tags": [
"tsmc",
"morris chang",
"nvidia",
"foundry model",
"semiconductors"
]
},
{
"id": "u5um8QWWRvo",
"type": "Explainer",
"india": false,
"title": "RSA ANIMATE: Smile or Die",
"channel": "Royal Society of Arts",
"minutes": null,
"year": null,
"since": 2011,
"category": "Business Psychology",
"also": [
"Investment & Venture Capital"
],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "HN uses it as a go-to short critique of mandatory positivity in workplaces, startups and corporate culture.",
"tags": [
"positive thinking",
"barbara ehrenreich",
"workplace culture",
"rsa animate",
"psychology"
]
},
{
"id": "vJG698U2Mvo",
"type": "Demo",
"india": false,
"title": "selective attention test",
"channel": "Daniel Simons",
"minutes": null,
"year": null,
"since": 2011,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN uses it constantly as the classic demonstration that attention is selective, in threads on driving, motorcycles, AI and perception.",
"tags": [
"inattentional blindness",
"invisible gorilla",
"perception",
"psychology",
"attention test"
]
},
{
"id": "wwmOkaKh3-s",
"type": "Interview",
"india": false,
"title": "Charlie Rose: Sir James Goldsmith Interview - 15.11.94",
"channel": "Sir James Goldsmith",
"minutes": null,
"year": null,
"since": 2016,
"category": "Founder Stories & Documentaries",
"also": [
"Investment & Venture Capital"
],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a prescient interview on free trade and its social consequences, worth watching with hindsight.",
"tags": [
"gatt",
"nafta",
"free trade",
"globalization",
"labor and capital"
]
},
{
"id": "xi1Lq79mLeE",
"type": "Interview",
"india": false,
"title": "The Mind Behind Windows: Dave Cutler",
"channel": "Dave's Garage",
"minutes": null,
"year": null,
"since": 2023,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a long, excellent first-hand interview with a legendary OS designer, though some note it is light on technical detail.",
"tags": [
"dave cutler",
"windows nt",
"vms",
"operating systems",
"microsoft"
]
},
{
"id": "y-AXTx4PcKI",
"type": "Explainer",
"india": false,
"title": "Alec Baldwin - Best performance",
"channel": "David Lukas",
"minutes": null,
"year": null,
"since": 2009,
"category": "Marketing & Growth",
"also": [
"Sales"
],
"topics": [
"Sales"
],
"stage": "First Customer",
"gem": false,
"why": "HN points to it as the one scene worth watching from the movie, a classic about sales and entrepreneurship.",
"tags": [
"glengarry glen ross",
"always be closing",
"sales",
"alec baldwin",
"film scene"
]
},
{
"id": "ydyztGZnbNs",
"type": "Demo",
"india": false,
"title": "Oculus Connect 2: Live Coding Session with John Carmack",
"channel": "Meta VR",
"minutes": null,
"year": null,
"since": 2016,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited for watching Carmack code fluently and for the fast iteration cycle of Racket-based VR scripting.",
"tags": [
"john carmack",
"racket",
"oculus",
"gear vr",
"live coding"
]
},
{
"id": "ztspvPYybIY",
"type": "Talk",
"india": false,
"title": "Ryan Dahl: Original Node.js presentation",
"channel": "stri8ted",
"minutes": null,
"year": null,
"since": 2016,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as a classic dev tool pitch with palpable energy, and cites it for why Node was created.",
"tags": [
"node.js",
"ryan dahl",
"async io",
"jsconf",
"javascript"
]
},
{
"id": "-QWHkcCP3tA",
"type": "Talk",
"india": false,
"title": "Gary Vaynerchuk Keynote at RailsConf 2010",
"channel": "O'Reilly",
"minutes": null,
"year": null,
"since": 2010,
"category": "Startup & Entrepreneurship",
"also": [
"Marketing & Growth",
"Customer Behaviour"
],
"topics": [
"Users"
],
"stage": "Validation",
"gem": false,
"why": "HN commenters recommend it as an energetic, unscripted talk on creating for the long term and hustling.",
"tags": [
"gary vaynerchuk",
"hustle",
"customer care",
"railsconf",
"social media"
]
},
{
"id": "-pKR212H5vQ",
"type": "Talk",
"india": false,
"title": "Tracy Young Speaks at Female Founders Conference 2015",
"channel": "Y Combinator",
"minutes": null,
"year": null,
"since": 2016,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as a strong founder talk that shows how formidable and practical Young is, with advice delivered through a beaver metaphor.",
"tags": [
"plangrid",
"y combinator",
"female founders",
"construction tech",
"founder advice"
]
},
{
"id": "06yy88tLWlg",
"type": "Commentary",
"india": false,
"title": "WOKE BRANDS",
"channel": "hbomberguy",
"minutes": null,
"year": null,
"since": 2019,
"category": "Marketing & Growth",
"also": [],
"topics": [
"Growth"
],
"stage": "Growth",
"gem": false,
"why": "Cited in threads on corporate politics, outrage and branding as an explanation of how companies use controversy and social stances for profit.",
"tags": [
"marketing",
"woke brands",
"advertising",
"gillette",
"capitalism"
]
},
{
"id": "0rCUF-V1esM",
"type": "Commentary",
"india": false,
"title": "Apple's Independent Repair Program is a useless PR stunt.",
"channel": "Louis Rossmann",
"minutes": null,
"year": null,
"since": 2020,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters recommend it as an insider account from a repair shop owner of why Apple's repair program falls short of real right to repair.",
"tags": [
"apple",
"independent repair program",
"louis rossmann",
"right to repair",
"parts access"
]
},
{
"id": "1Evwgu369Jw",
"type": "Explainer",
"india": false,
"title": "Brené Brown on Empathy",
"channel": "Royal Society of Arts",
"minutes": null,
"year": null,
"since": 2013,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a quick, memorable explanation of how to support someone in pain without making it about yourself.",
"tags": [
"empathy",
"vulnerability",
"emotional support",
"brene brown",
"animation"
]
},
{
"id": "1sl5KJ69qiA",
"type": "Documentary",
"india": false,
"title": "The Trolley Problem in Real Life",
"channel": "Vsauce",
"minutes": null,
"year": null,
"since": 2021,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a worthwhile real-world experiment whenever trolley problems or moral dilemmas come up.",
"tags": [
"moral psychology",
"ethics",
"experiment",
"mind field",
"decision making"
]
},
{
"id": "21j_OCNLuYg",
"type": "Talk",
"india": false,
"title": "Life is easy. Why do we make it so hard? | Jon Jandai | TEDxDoiSuthep",
"channel": "TEDx Talks",
"minutes": null,
"year": null,
"since": 2015,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as a thoughtful counterpoint to the pursuit of complicated, consumption-driven lives.",
"tags": [
"self-reliance",
"subsistence farming",
"minimalism",
"thailand",
"tedx"
]
},
{
"id": "4HgShra-KnY",
"type": "Talk",
"india": false,
"title": "ASPLOS Keynote: The Golden Age of Compiler Design in an Era of HW/SW Co-design by Dr. Chris Lattner",
"channel": "SiFive",
"minutes": null,
"year": null,
"since": 2021,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended for explaining where the compiler ecosystem lacks standardization for accelerators and why efforts like MLIR and CIRCT matter.",
"tags": [
"chris lattner",
"mlir",
"circt",
"compilers",
"accelerators",
"risc-v"
]
},
{
"id": "7R4xhwy-1oI",
"type": "Talk",
"india": false,
"title": "Susan Crawford on Captive Audience: The Telecom Industry & Monopoly Power in the New Gilded Age",
"channel": "Berkman Klein Center for Internet & Society",
"minutes": null,
"year": null,
"since": 2013,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended in broadband and net neutrality threads as an overview of the US telecom monopoly problem.",
"tags": [
"telecom",
"net neutrality",
"broadband",
"monopoly",
"internet policy"
]
},
{
"id": "7ZGCPap7GkY",
"type": "Talk",
"india": false,
"title": "Meaningful Play: Getting Gamification Right",
"channel": "Google TechTalks",
"minutes": null,
"year": null,
"since": 2012,
"category": "Business Psychology",
"also": [
"SaaS & Technology"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters recommend it as a thoughtful take on doing gamification and game design well.",
"tags": [
"gamification",
"game design",
"motivation",
"engagement",
"ux"
]
},
{
"id": "94swlF55tVc",
"type": "Demo",
"india": false,
"title": "How A Blind Developer Uses Visual Studio",
"channel": "Coding Tech",
"minutes": null,
"year": null,
"since": 2019,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it, especially to developers losing their sight, as a concrete demonstration of coding with text-to-speech.",
"tags": [
"screen reader",
"blind developer",
"visual studio",
"accessibility",
"text-to-speech"
]
},
{
"id": "AIcfMMVcYZg",
"type": "Commentary",
"india": false,
"title": "How government programs drive up college tuitions",
"channel": "Peter Schiff",
"minutes": null,
"year": null,
"since": 2010,
"category": "Customer Behaviour",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited in tuition-cost threads for the argument that easy government-backed loans enable high prices.",
"tags": [
"tuition",
"student loans",
"economics",
"government subsidies",
"peter schiff"
]
},
{
"id": "AdKUJxjn-R8",
"type": "Talk",
"india": false,
"title": "Forget big change, start with a tiny habit: BJ Fogg at TEDxFremont",
"channel": "TEDx Talks",
"minutes": null,
"year": null,
"since": 2014,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended in habit and motivation threads for its simple anchor-then-tiny-action recipe.",
"tags": [
"tiny habits",
"bj fogg",
"behavior change",
"motivation",
"tedx"
]
},
{
"id": "AwX9G38vdCE",
"type": "Talk",
"india": false,
"title": "The Boring Company Information Session",
"channel": "The Boring Company",
"minutes": null,
"year": null,
"since": 2018,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters point to it as the primary source for what the company is actually proposing, in threads skeptical of the project.",
"tags": [
"boring company",
"tunneling",
"loop",
"urban transportation",
"elon musk"
]
},
{
"id": "Bca5_uyH9E4",
"type": "Interview",
"india": false,
"title": "Meeting my hero! Sailing legend Sven Yrvind",
"channel": "Sam Holmes Sailing",
"minutes": null,
"year": null,
"since": 2022,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as an accessible introduction to Yrvind and his minimalist boat ideas.",
"tags": [
"sven yrvind",
"sailing",
"boat design",
"minimalism",
"vlog"
]
},
{
"id": "Bd2bbHoVQSM",
"type": "Commentary",
"india": false,
"title": "Timeshares: Last Week Tonight with John Oliver (HBO)",
"channel": "LastWeekTonight",
"minutes": null,
"year": null,
"since": 2023,
"category": "Startup & Entrepreneurship",
"also": [
"Customer Behaviour"
],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited in threads about hard-to-cancel subscriptions and timeshare scams as an informative overview of the sketchy exit industry.",
"tags": [
"timeshares",
"consumer protection",
"exit scams",
"john oliver",
"subscriptions"
]
},
{
"id": "DlTq8DbRs4k",
"type": "Explainer",
"india": false,
"title": "The UK's Failed Experiment in Rail Privatization",
"channel": "Wendover Productions",
"minutes": null,
"year": null,
"since": 2021,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended in privatization and rail threads as a clear, well-sourced explanation of the UK rail mess.",
"tags": [
"uk rail",
"privatization",
"public transport",
"wendover",
"economics"
]
},
{
"id": "EGqwXt90ZqA",
"type": "Talk",
"india": false,
"title": "Bret Victor - Inventing on Principle",
"channel": "Colin McDonnell",
"minutes": null,
"year": null,
"since": 2015,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters cite it as the best demonstration of why instant feedback matters in programming tools.",
"tags": [
"bret victor",
"live programming",
"instant feedback",
"developer tools",
"time travel debugging"
]
},
{
"id": "ESXOAJRdcwQ",
"type": "Talk",
"india": false,
"title": "Jailbreaking the Simulation with George Hotz | SXSW 2019",
"channel": "SXSW",
"minutes": null,
"year": null,
"since": 2020,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Shared in simulation-argument threads as an entertaining, hacker-minded take, though some commenters criticize Hotz himself.",
"tags": [
"george hotz",
"simulation argument",
"philosophy",
"hacking",
"sxsw"
]
},
{
"id": "FKTxC9pl-WM",
"type": "Talk",
"india": false,
"title": "Making Badass Developers - Kathy Sierra (Serious Pony) keynote",
"channel": "O'Reilly",
"minutes": null,
"year": null,
"since": 2017,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters recommend it when asked how to learn better or keep improving.",
"tags": [
"kathy sierra",
"skill acquisition",
"developer learning",
"cognition",
"keynote"
]
},
{
"id": "G4hL5Om4IJ4",
"type": "Interview",
"india": false,
"title": "Jim Keller: The Future of Computing, AI, Life, and Consciousness | Lex Fridman Podcast #162",
"channel": "Lex Fridman",
"minutes": null,
"year": null,
"since": 2021,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "Recommended as a stellar long-form interview with someone both very smart and wise, mined for CPU design insights.",
"tags": [
"jim keller",
"cpu design",
"branch prediction",
"lex fridman",
"ai hardware"
]
},
{
"id": "Gj8IA6xOpSk",
"type": "Talk",
"india": false,
"title": "The call to learn | Clifford Stoll",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2010,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters recommend it for Stoll's infectious enthusiasm and his case for teaching kids science, and often mention it in threads about him and his Klein bottles.",
"tags": [
"clifford stoll",
"ted talk",
"education",
"klein bottles",
"science enthusiasm"
]
},
{
"id": "GjENnyQupow",
"type": "Interview",
"india": false,
"title": "Noam Chomsky on Propaganda - The Big Idea - Interview with Andrew Marr",
"channel": "k1mk1mk1m",
"minutes": null,
"year": null,
"since": 2019,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Ideas"
],
"stage": null,
"gem": false,
"why": "Recommended and quoted in threads on media bias, press and power, and self-censorship.",
"tags": [
"noam chomsky",
"propaganda",
"media bias",
"manufacturing consent",
"self-censorship"
]
},
{
"id": "GsyhGHUEt-k",
"type": "Talk",
"india": false,
"title": "Emojli: Behind the Scenes and Why You Should Never Build An App",
"channel": "Tom Scott",
"minutes": null,
"year": null,
"since": 2016,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as an entertaining story of a joke side project growing out of hand, brought up in threads on emoji and side projects.",
"tags": [
"emojli",
"tom scott",
"emoji",
"app development",
"side projects"
]
},
{
"id": "HNkLcD3PKyk",
"type": "Podcast",
"india": false,
"title": "What It Really Takes to Convert an Office Building to Apartments | Odd Lots",
"channel": "Bloomberg Podcasts",
"minutes": null,
"year": null,
"since": 2023,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN links it whenever office-to-residential conversion comes up, as a good deep dive into why the idea is not simple.",
"tags": [
"real estate",
"zoning",
"housing",
"office vacancy",
"construction"
]
},
{
"id": "HbUnatPfSgg",
"type": "Talk",
"india": false,
"title": "Mike Arrington at Startup School 08",
"channel": "startupschool",
"minutes": null,
"year": null,
"since": 2009,
"category": "Startup & Entrepreneurship",
"also": [
"Marketing & Growth"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as practical advice on dealing with tech press, whenever someone asks how to pitch TechCrunch and similar outlets.",
"tags": [
"mike arrington",
"techcrunch",
"startup school",
"press",
"pr"
]
},
{
"id": "I845O57ZSy4",
"type": "Interview",
"india": false,
"title": "John Carmack: Doom, Quake, VR, AGI, Programming, Video Games, and Rockets | Lex Fridman Podcast #309",
"channel": "Lex Fridman",
"minutes": null,
"year": null,
"since": 2022,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN mines it for Carmack's views on AGI, debuggers, tooling and the metaverse, and recommends it as worth the full length.",
"tags": [
"john carmack",
"agi",
"id software",
"programming",
"virtual reality"
]
},
{
"id": "IRG-YubP1rw",
"type": "Tutorial",
"india": false,
"title": "How to Get Good at Small Talk, and Even Enjoy It",
"channel": "Harvard Business Review",
"minutes": null,
"year": null,
"since": 2024,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters share it as a short, practical resource for people who struggle with small talk.",
"tags": [
"small talk",
"social skills",
"conversation",
"communication"
]
},
{
"id": "IYO3tOqDISE",
"type": "Explainer",
"india": false,
"title": "I, Pencil: The Movie",
"channel": "I, Pencil",
"minutes": null,
"year": null,
"since": 2017,
"category": "Customer Behaviour",
"also": [
"Startup & Entrepreneurship"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as a quick video version of the classic essay on specialization and economic interdependence.",
"tags": [
"i, pencil",
"free markets",
"interdependence",
"economics",
"leonard read"
]
},
{
"id": "Ie-gqwSHQr0",
"type": "Talk",
"india": false,
"title": "\"Building a Toolkit for Design\" by Matthew Griffith",
"channel": "elm-conf",
"minutes": null,
"year": null,
"since": 2020,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters recommend it as a fresh perspective on layout and styling in CSS discussions.",
"tags": [
"elm",
"elm-ui",
"css alternative",
"layout",
"front-end"
]
},
{
"id": "K_oET45GzMI",
"type": "Documentary",
"india": false,
"title": "Black Wednesday (BBC 1997)",
"channel": "batrachious",
"minutes": null,
"year": null,
"since": 2014,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as a detailed documentary on the Soros-versus-Bank-of-England episode.",
"tags": [
"george soros",
"pound sterling",
"exchange rate mechanism",
"bank of england",
"bbc"
]
},
{
"id": "KdnGPQaICjk",
"type": "Commentary",
"india": false,
"title": "Computers for Cynics 0 - The Myth of Technology",
"channel": "TheTedNelson",
"minutes": null,
"year": null,
"since": 2013,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Users"
],
"stage": null,
"gem": false,
"why": "HN likes it for Nelson's habit of reframing computing history so that past decisions look arbitrary.",
"tags": [
"ted nelson",
"history of computing",
"user interfaces",
"hypertext",
"critique of technology"
]
},
{
"id": "MCVj5RZOqwY",
"type": "Demo",
"india": false,
"title": "Avi Bryant demos Dabble db",
"channel": "Tavis Rudd",
"minutes": null,
"year": null,
"since": 2014,
"category": "SaaS & Technology",
"also": [],
"topics": [
"Users"
],
"stage": null,
"gem": false,
"why": "HN points to it as a lost example of intuitive low-code tooling, and as inspiration for newer products.",
"tags": [
"dabble db",
"smalltalk",
"web apps",
"user interface",
"data modeling"
]
},
{
"id": "MEUWxNifJJ8",
"type": "Talk",
"india": false,
"title": "Yanis Varoufakis: The Global Minotaur: America, Europe and the Future of the Global Economy",
"channel": "SkriptaTV",
"minutes": null,
"year": null,
"since": 2015,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as a narrative of a century of political economy and the geopolitics behind the 2008 crash.",
"tags": [
"varoufakis",
"2008 financial crisis",
"global economy",
"macroeconomics",
"europe"
]
},
{
"id": "MShbP3OpASA",
"type": "Interview",
"india": false,
"title": "Aalto Talk with Linus Torvalds [Full-length]",
"channel": "aaltouniversityace",
"minutes": null,
"year": null,
"since": 2012,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN links it for individual clips: the Nvidia moment, his views on C and his blunt communication style. Some commenters say the whole talk is worth watching.",
"tags": [
"linus torvalds",
"linux kernel",
"nvidia",
"c language",
"open source"
]
},
{
"id": "MlhAkNWC1qo",
"type": "Talk",
"india": false,
"title": "David Heinemeier Hansson-Unlearn Your MBA (Entire talk)",
"channel": "Entrepreneurship.org",
"minutes": null,
"year": null,
"since": 2017,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as the classic counterpoint to Silicon Valley growth-at-all-costs startup thinking.",
"tags": [
"dhh",
"37signals",
"bootstrapping",
"startups",
"mba critique",
"profitability"
]
},
{
"id": "OsFEV35tWsg",
"type": "Talk",
"india": false,
"title": "The psychology of evil | Philip Zimbardo",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2012,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN uses it to argue that systems rather than bad apples drive cruelty, and for its section on how anonymity changes behavior.",
"tags": [
"zimbardo",
"stanford prison experiment",
"abu ghraib",
"anonymity",
"situationism",
"ted"
]
},
{
"id": "OyFJWRnt_AY",
"type": "Lecture",
"india": false,
"title": "CS480/680 Lecture 19: Attention and Transformer Networks",
"channel": "Pascal Poupart",
"minutes": null,
"year": null,
"since": 2023,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it to newcomers as a clear explanation of attention, including the query/key/value intuition.",
"tags": [
"attention",
"transformers",
"query key value",
"deep learning",
"nlp"
]
},
{
"id": "P1ww1IXRfTA",
"type": "Interview",
"india": false,
"title": "The complete FUN TO IMAGINE with Richard Feynman",
"channel": "Christopher Sykes",
"minutes": null,
"year": null,
"since": 2019,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it for Feynman's intuitive explanations and his joy in understanding how things work.",
"tags": [
"richard feynman",
"magnetism",
"imagination",
"physics explanations",
"bbc"
]
},
{
"id": "PaCmpygFfXo",
"type": "Tutorial",
"india": false,
"title": "The spelled-out intro to language modeling: building makemore",
"channel": "Andrej Karpathy",
"minutes": null,
"year": null,
"since": 2024,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as a long but worthwhile way to demystify how language models work technically.",
"tags": [
"makemore",
"bigram",
"pytorch",
"neural networks",
"karpathy",
"next-token prediction"
]
},
{
"id": "PbC4gqZGPSY",
"type": "Interview",
"india": false,
"title": "Ira Glass on the Creative Process (www.getoutthebox.org)",
"channel": "Getoutthebox1",
"minutes": null,
"year": null,
"since": 2012,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Shared as encouragement for beginners learning design or craft, on persisting through the taste-skill gap.",
"tags": [
"ira glass",
"creativity",
"taste",
"practice",
"motivation"
]
},
{
"id": "QTJRwKOFddc",
"type": "Demo",
"india": false,
"title": "Daniel Henry Holmes Ingalls Jr.: The Live Web. Drag 'n drop in the cloud",
"channel": "JSConf",
"minutes": null,
"year": null,
"since": 2016,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Commenters link it as a demo of what a live, inspectable, Smalltalk-style environment in the browser can be, in threads about Alan Kay, Smalltalk and web limitations.",
"tags": [
"dan ingalls",
"lively kernel",
"smalltalk",
"morphic",
"live programming",
"browser"
]
},
{
"id": "QVBlnCTu9Ms",
"type": "Talk",
"india": false,
"title": "#NoEstimates (Allen Holub)",
"channel": "Allen Holub",
"minutes": null,
"year": null,
"since": 2019,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended in estimation and sprint debates as a well-reasoned account of where waste is and isn't in agile.",
"tags": [
"noestimates",
"agile",
"cycle time",
"planning",
"cumulative flow"
]
},
{
"id": "RCCigccBzIU",
"type": "Documentary",
"india": false,
"title": "Edsger W. Dijkstra on Dutch TV",
"channel": "Yin Wang",
"minutes": null,
"year": null,
"since": 2015,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a short documentary that shows the human side of Dijkstra.",
"tags": [
"dijkstra",
"computer science history",
"programming elegance",
"documentary"
]
},
{
"id": "SAc0vQCC6UQ",
"type": "Talk",
"india": false,
"title": "Ryan Dahl - History of Node.js",
"channel": "phxtagsoup",
"minutes": null,
"year": null,
"since": 2011,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as the creator's own account of why Node was built and how he thinks about humility.",
"tags": [
"node.js",
"ryan dahl",
"event loop",
"non-blocking io",
"javascript"
]
},
{
"id": "SYeeTvitvFU",
"type": "Explainer",
"india": false,
"title": "Why this British crossroads was so dangerous",
"channel": "Tom Scott",
"minutes": null,
"year": null,
"since": 2020,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Used as the go-to visual demonstration of A-pillar blind spots and badly designed junctions.",
"tags": [
"a-pillar blind spot",
"road design",
"cyclist safety",
"intersections",
"visibility"
]
},
{
"id": "SzA2YODtgK4",
"type": "Tutorial",
"india": false,
"title": "Getting Started With Org Mode",
"channel": "thoughtbot",
"minutes": null,
"year": null,
"since": 2018,
"category": "Business Psychology",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "Recommended as a thorough introduction showing what Org mode can do for personal organization.",
"tags": [
"org mode",
"emacs",
"task management",
"plain text",
"literate programming"
]
},
{
"id": "TQMbvJNRpLE",
"type": "Talk",
"india": false,
"title": "How to Achieve Your Most Ambitious Goals | Stephen Duneier | TEDxTucson",
"channel": "TEDx Talks",
"minutes": null,
"year": null,
"since": 2018,
"category": "Business Psychology",
"also": [],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "HN people recommend it for its simple, powerful idea of marginal adjustments and its usefulness for tackling big projects.",
"tags": [
"goals",
"decision making",
"marginal adjustment",
"productivity",
"tedx"
]
},
{
"id": "Td_PGkfIdIQ",
"type": "Talk",
"india": false,
"title": "Gabe Newell: On Productivity, Economics, Political Institutions, and the Future of Corporations",
"channel": "blogphilofilms",
"minutes": null,
"year": null,
"since": 2015,
"category": "Customer Behaviour",
"also": [
"Startup & Entrepreneurship",
"Founder Stories & Documentaries"
],
"topics": [
"Product",
"Team"
],
"stage": null,
"gem": false,
"why": "Pointed to as an in-depth view of how Valve is run and how Newell thinks about workers, management and customers.",
"tags": [
"gabe newell",
"valve",
"game economies",
"management",
"flat organization"
]
},
{
"id": "Tdj8gh9GPc4",
"type": "Documentary",
"india": false,
"title": "The Computer Chronicles - Gary Kildall Special (1995)",
"channel": "The Computer Chronicles",
"minutes": null,
"year": null,
"since": 2015,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it to see what Kildall was like in real life and as a tribute to an influential figure.",
"tags": [
"gary kildall",
"cp/m",
"computer history",
"computer chronicles",
"personal computers"
]
},
{
"id": "Ucp0TTmvqOE",
"type": "Talk",
"india": false,
"title": "Tesla Autonomy Day",
"channel": "Tesla",
"minutes": null,
"year": null,
"since": 2019,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited both as a primary source on Tesla's technical autonomy approach and, later, for Musk's unmet robotaxi predictions.",
"tags": [
"autonomy day",
"fsd chip",
"vision vs lidar",
"data engine",
"robotaxi"
]
},
{
"id": "UiS27feX8o0",
"type": "Explainer",
"india": false,
"title": "The Antique Microwave Oven that's Better than Yours",
"channel": "Technology Connections",
"minutes": null,
"year": null,
"since": 2020,
"category": "SaaS & Technology",
"also": [],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "Cited again and again in microwave and smart-appliance threads as proof that older appliances were smarter, especially for steam-sensor cooking.",
"tags": [
"microwave",
"steam sensor",
"appliances",
"1990s technology",
"product design"
]
},
{
"id": "YAtLTLiqNwg",
"type": "Interview",
"india": false,
"title": "Elon Musk Interview: 1-on-1 with Sandy Munro",
"channel": "Munro Live",
"minutes": null,
"year": null,
"since": 2021,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "HN uses it as a primary source on Tesla manufacturing and engineering decisions and Musk's grasp of product detail.",
"tags": [
"elon musk",
"sandy munro",
"gigacasting",
"mass production",
"tesla"
]
},
{
"id": "YMqgiXLjvRs",
"type": "Interview",
"india": false,
"title": "Y Combinator's Paul Graham sits down with Jason at LAUNCH Festival 2014",
"channel": "This Week in Startups",
"minutes": null,
"year": null,
"since": 2014,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN people link it for Paul Graham's candid views on startups, Aaron Swartz, and investing selection.",
"tags": [
"paul graham",
"y combinator",
"startup advice",
"sam altman",
"founders"
]
},
{
"id": "ZerUbHmuY04",
"type": "Demo",
"india": false,
"title": "Causal understanding of water displacement by a crow",
"channel": "PLOS Media",
"minutes": null,
"year": null,
"since": 2015,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Used as vivid evidence of crow intelligence and animal physical reasoning in discussions of cognition.",
"tags": [
"crows",
"animal cognition",
"water displacement",
"tool use",
"aesop's fable"
]
},
{
"id": "_fQtxKmgJC8",
"type": "Documentary",
"india": false,
"title": "The Story of Tetris",
"channel": "Gaming Historian",
"minutes": null,
"year": null,
"since": 2022,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as an excellent documentary on Tetris and its tangled licensing history.",
"tags": [
"tetris",
"video game history",
"licensing",
"soviet union",
"nintendo"
]
},
{
"id": "aIx2N-viNwY",
"type": "Explainer",
"india": false,
"title": "Why Life Seems to Speed Up as We Age",
"channel": "Veritasium",
"minutes": null,
"year": null,
"since": 2020,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited in threads about perceived time as a good, detailed explanation of the effect.",
"tags": [
"chronoception",
"aging",
"psychology",
"veritasium",
"perception"
]
},
{
"id": "cQq2pKNDgIs",
"type": "Podcast",
"india": false,
"title": "Unlocking UAP Mysteries: Economics, Aliens, and The Great Filter | Merged EP0109",
"channel": "Merged Podcast",
"minutes": null,
"year": null,
"since": 2023,
"category": "Customer Behaviour",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters point to it for Hanson's grabby aliens reasoning as an unusual framework for thinking about UFO behavior and intelligent life in the cosmos.",
"tags": [
"robin hanson",
"grabby aliens",
"great filter",
"uap",
"fermi paradox"
]
},
{
"id": "f5SE47Xjx2Q",
"type": "Explainer",
"india": false,
"title": "Why 50 Million Chinese Homes are Empty",
"channel": "PolyMatter",
"minutes": null,
"year": null,
"since": 2018,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a clear, compact explainer on China's empty homes, ghost cities and property troubles.",
"tags": [
"china",
"real estate",
"ghost cities",
"housing",
"economics"
]
},
{
"id": "fPrvnlvnu-k",
"type": "Interview",
"india": false,
"title": "TWiST #46 with David Heinemeier Hansson",
"channel": "ThisWeekinStartups",
"minutes": null,
"year": null,
"since": 2010,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as an entertaining look at DHH's views and what the 37signals founders stand for.",
"tags": [
"dhh",
"37signals",
"ruby on rails",
"startups",
"this week in startups"
]
},
{
"id": "fW8amMCVAJQ",
"type": "Explainer",
"india": false,
"title": "First Follower: Leadership Lessons from Dancing Guy",
"channel": "Derek Sivers",
"minutes": null,
"year": null,
"since": 2016,
"category": "Business Psychology",
"also": [
"Startup & Entrepreneurship"
],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "A go-to short explanation of how movements start and why early followers matter.",
"tags": [
"first follower",
"leadership",
"derek sivers",
"social movements",
"tipping point"
]
},
{
"id": "gDfNRWsMRsU",
"type": "Commentary",
"india": false,
"title": "Why Spotify Will Ultimately Fail",
"channel": "Benn Jordan",
"minutes": null,
"year": null,
"since": 2023,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Commenters recommend it as an artist's informed explanation of streaming economics and why Spotify pays so little compared with alternatives like Bandcamp.",
"tags": [
"spotify",
"music industry",
"artist payouts",
"bandcamp",
"streaming"
]
},
{
"id": "gdK4y6O-llE",
"type": "Lecture",
"india": false,
"title": "OODA Loop & Evolutionary Epistemology of John Boyd by Chuck Spinney",
"channel": "52 Living Ideas",
"minutes": null,
"year": null,
"since": 2021,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN readers recommend it as the way to learn what Boyd actually meant by OODA, straight from a collaborator, rather than from the popularized loop diagram.",
"tags": [
"ooda loop",
"john boyd",
"military strategy",
"decision making",
"epistemology"
]
},
{
"id": "gvZSpET11ZY",
"type": "Commentary",
"india": false,
"title": "Retirement Plans: Last Week Tonight with John Oliver (HBO)",
"channel": "LastWeekTonight",
"minutes": null,
"year": null,
"since": 2016,
"category": "Investment & Venture Capital",
"also": [],
"topics": [
"Fundraising"
],
"stage": null,
"gem": false,
"why": "HN links it in personal finance threads as an entertaining explanation of how fees erode retirement savings.",
"tags": [
"john oliver",
"401k",
"investment fees",
"passive investing",
"personal finance"
]
},
{
"id": "hXgqik6HXc0",
"type": "Podcast",
"india": false,
"title": "Consciousness is Not a Computation (Roger Penrose) | AI Podcast Clips",
"channel": "Lex Fridman",
"minutes": null,
"year": null,
"since": 2020,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "Pointed to in consciousness and AI threads as the best-known statement of Penrose's view, which commenters find interesting even when they disagree.",
"tags": [
"penrose",
"consciousness",
"quantum mind",
"microtubules",
"ai"
]
},
{
"id": "iRleB034EC8",
"type": "Interview",
"india": false,
"title": "Peter Thiel on “The Straussian Moment”",
"channel": "Hoover Institution",
"minutes": null,
"year": null,
"since": 2019,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN points to it as a primer on Thiel's thinking and as an example of Peter Robinson's skill as an interviewer.",
"tags": [
"peter thiel",
"straussian moment",
"political philosophy",
"hoover institution",
"peter robinson"
]
},
{
"id": "imhUmLtlZpw",
"type": "Talk",
"india": false,
"title": "Understanding the rise of China | Martin Jacques",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2018,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it in discussions of China's surveillance and social-credit systems for explaining Chinese attitudes toward the state.",
"tags": [
"china",
"civilization state",
"ted talk",
"geopolitics",
"martin jacques"
]
},
{
"id": "j02b8Fuz73A",
"type": "Demo",
"india": false,
"title": "NeXTSTEP Release 3 Demo",
"channel": "blatherskyte",
"minutes": null,
"year": null,
"since": 2007,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN uses it as the classic example of rapid visual app building and of a polished early Jobs presentation, often with timestamps pointing to the database demo.",
"tags": [
"nextstep",
"steve jobs",
"interface builder",
"enterprise objects framework",
"rapid app development",
"os x history"
]
},
{
"id": "j4H9LL7A-nQ",
"type": "Explainer",
"india": false,
"title": "Renting vs. Buying a Home: What People Get Wrong",
"channel": "Ben Felix",
"minutes": null,
"year": null,
"since": 2025,
"category": "Investment & Venture Capital",
"also": [],
"topics": [
"Fundraising"
],
"stage": null,
"gem": false,
"why": "Recommended as detailed math on rent versus buy, showing the choice is often roughly a wash.",
"tags": [
"personal finance",
"housing",
"mortgages",
"investing",
"ben felix"
]
},
{
"id": "jPhJbKBuNnA",
"type": "Commentary",
"india": false,
"title": "I tried using AI. It scared me.",
"channel": "Tom Scott",
"minutes": null,
"year": null,
"since": 2023,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "HN cites it for the argument that we cannot tell whether AI is early or late on its sigmoid curve until hindsight.",
"tags": [
"chatgpt",
"tom scott",
"technology curve",
"ai progress",
"napster"
]
},
{
"id": "jSo5v5t4OQM",
"type": "Lecture",
"india": false,
"title": "Jordan Peterson - Controversial Facts about IQ",
"channel": "Bite-sized Philosophy",
"minutes": null,
"year": null,
"since": 2017,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters use it as supporting material in arguments about IQ and the g-factor view of intelligence.",
"tags": [
"iq",
"g factor",
"jordan peterson",
"psychology",
"intelligence testing"
]
},
{
"id": "k1luKAS_Xcg",
"type": "Talk",
"india": false,
"title": "Find your primal posture and sit without back pain: Esther Gokhale at TEDxStanford",
"channel": "TEDx Talks",
"minutes": null,
"year": null,
"since": 2016,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended in back pain and posture threads as a short, practical idea that helped some commenters.",
"tags": [
"posture",
"back pain",
"sitting",
"ergonomics",
"gokhale method"
]
},
{
"id": "kb-m2fasdDY",
"type": "Talk",
"india": false,
"title": "What I Wish I Had Known Before Scaling Uber to 1000 Services • Matt Ranney • GOTO 2016",
"channel": "GOTO Conferences",
"minutes": null,
"year": null,
"since": 2016,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": "Growth",
"gem": false,
"why": "Often brought up as an honest account of microservice sprawl, including the fact that nobody at Uber knew exactly how many services existed.",
"tags": [
"microservices",
"uber",
"architecture",
"service sprawl",
"lessons learned"
]
},
{
"id": "lnA9DMvHtfI",
"type": "Explainer",
"india": false,
"title": "Large Language Models from scratch",
"channel": "Graphics in 5 Minutes",
"minutes": null,
"year": null,
"since": 2023,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "HN recommends it as a quick, non-dumbed-down way to get up to speed on how LLMs are built.",
"tags": [
"llm",
"neural networks",
"gradient descent",
"transformers",
"language modeling"
]
},
{
"id": "orMtwOz6Db0",
"type": "Podcast",
"india": false,
"title": "Roger Penrose: Physics of Consciousness and the Infinite Universe | Lex Fridman Podcast #85",
"channel": "Lex Fridman",
"minutes": null,
"year": null,
"since": 2020,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as an accessible walkthrough of Penrose's ideas on consciousness and cosmology, interesting even if debatable.",
"tags": [
"roger penrose",
"consciousness",
"cosmology",
"quantum mechanics",
"artificial intelligence"
]
},
{
"id": "osSMJRyxG0k",
"type": "Commentary",
"india": false,
"title": "Intel - Anti-Competitive, Anti-Consumer, Anti-Technology.",
"channel": "AdoredTV",
"minutes": null,
"year": null,
"since": 2017,
"category": "SaaS & Technology",
"also": [
"Founder Stories & Documentaries",
"Customer Behaviour"
],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as an overview of Intel's anti-competitive past and why it kept dominating despite AMD's competitive products.",
"tags": [
"intel",
"amd",
"monopoly",
"cpu industry",
"antitrust"
]
},
{
"id": "p5Ac7ap_MAY",
"type": "Documentary",
"india": false,
"title": "Princes of the Yen | The Hidden Power of Central Banks",
"channel": "Independent POV",
"minutes": null,
"year": null,
"since": 2015,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters recommend it for a more cynical view of central bank power, though some caveat it as conspiracy-leaning.",
"tags": [
"bank of japan",
"richard werner",
"japanese economy",
"asset bubble",
"monetary policy"
]
},
{
"id": "pL3Yzjk5R4M",
"type": "Talk",
"india": false,
"title": "The Original Skunk Works – Nickolas Means | The Lead Developer UK 2017",
"channel": "LeadDev",
"minutes": null,
"year": null,
"since": 2017,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "HN recommends it as a well-done history of Skunk Works, popping up in SR-71 threads.",
"tags": [
"skunk works",
"sr-71",
"lockheed",
"engineering management",
"aerospace"
]
},
{
"id": "pdJQ8iVTwj8",
"type": "Podcast",
"india": false,
"title": "Chris Lattner: Future of Programming and AI | Lex Fridman Podcast #381",
"channel": "Lex Fridman",
"minutes": null,
"year": null,
"since": 2023,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "HN points to it as the main place to hear Lattner's motivations and design ideas for Mojo, often in Mojo threads.",
"tags": [
"chris lattner",
"mojo",
"llvm",
"swift",
"compilers",
"lex fridman"
]
},
{
"id": "rURRYI66E54",
"type": "Explainer",
"india": false,
"title": "AI Language Models & Transformers - Computerphile",
"channel": "Computerphile",
"minutes": null,
"year": null,
"since": 2022,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "Pointed to as an accessible early explanation of transformers and attention for newcomers.",
"tags": [
"transformers",
"language models",
"attention",
"rob miles",
"computerphile"
]
},
{
"id": "rgGmKD87U3M",
"type": "Demo",
"india": false,
"title": "Lotus Improv for NeXT 1990",
"channel": "Thierry Hubert",
"minutes": null,
"year": null,
"since": 2022,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN links it in spreadsheet-reinvention threads as the clearest look at what Improv did differently, with a distinctive NeXTstep aesthetic.",
"tags": [
"lotus improv",
"next",
"spreadsheets",
"retro software",
"ui design"
]
},
{
"id": "s9aCwCKgkLo",
"type": "Documentary",
"india": false,
"title": "What's It Really like Working at Valve?",
"channel": "People Make Games",
"minutes": null,
"year": null,
"since": 2023,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries"
],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "Recommended as well-researched, interview-based coverage of the Valve model and its failures, often linked in threads about Valve and flat organizations.",
"tags": [
"valve",
"flat organization",
"game industry",
"employee interviews",
"management"
]
},
{
"id": "szIGZVrSAyc",
"type": "Interview",
"india": false,
"title": "Yanis Varoufakis with Professor Noam Chomsky at NYPL, April 16, 2016 | DiEM25",
"channel": "DiEM25",
"minutes": null,
"year": null,
"since": 2016,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a long, insightful conversation that gives a view of how Greece was pressured during the bailouts.",
"tags": [
"varoufakis",
"chomsky",
"greek crisis",
"neoliberalism",
"eu",
"democracy"
]
},
{
"id": "tnBQmEqBCY0",
"type": "Interview",
"india": false,
"title": "Elon Musk : How to Build the Future",
"channel": "Y Combinator",
"minutes": null,
"year": null,
"since": 2016,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries"
],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "Offered as a more down-to-earth Musk interview with better questions than most, and cited for his stated concerns about concentrated AI power.",
"tags": [
"elon musk",
"y combinator",
"startups",
"ai",
"spacex",
"tesla"
]
},
{
"id": "tw-rxtwhzcY",
"type": "Interview",
"india": false,
"title": "A Conversation with Peter Thiel and Niall Ferguson - Institute of Politics",
"channel": "Harvard University",
"minutes": null,
"year": null,
"since": 2013,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries",
"Investment & Venture Capital"
],
"topics": [
"Fundraising"
],
"stage": "Fundraising",
"gem": false,
"why": "HN commenters recommend it as one of the best single introductions to Thiel's worldview on technology and stagnation.",
"tags": [
"peter thiel",
"niall ferguson",
"stagnation",
"technology and politics",
"venture capital"
]
},
{
"id": "u_ktRTWMX3M",
"type": "Explainer",
"india": false,
"title": "Arnold Schwarzenegger 2018 - The speech that broke the internet - Most Inspiring ever",
"channel": "MulliganBrothers",
"minutes": null,
"year": null,
"since": 2021,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN users recommend it as practical motivation against procrastination and for people unsure what to do next.",
"tags": [
"arnold schwarzenegger",
"motivational speech",
"procrastination",
"self-improvement"
]
},
{
"id": "vKA4w2O61Xo",
"type": "Explainer",
"india": false,
"title": "The Most Common Cognitive Bias",
"channel": "Veritasium",
"minutes": null,
"year": null,
"since": 2015,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a clear demonstration of confirmation bias and the value of trying to break your own hypothesis.",
"tags": [
"veritasium",
"falsification",
"scientific method",
"2-4-8 puzzle",
"cognitive bias"
]
},
{
"id": "vOvQCPLkPt4",
"type": "Demo",
"india": false,
"title": "Applied Sciences Group: High Performance Touch",
"channel": "Microsoft Research",
"minutes": null,
"year": null,
"since": 2012,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters cite it whenever input latency comes up, as the demonstration that people can perceive touch delay down to 1 ms.",
"tags": [
"latency",
"touchscreens",
"human-computer interaction",
"microsoft research",
"responsiveness"
]
},
{
"id": "vs41JrnGaxc",
"type": "Talk",
"india": false,
"title": "Jonathan Haidt: The moral roots of liberals and conservatives",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2016,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as an accessible way to understand why people across the political spectrum disagree and to better understand opposing views.",
"tags": [
"jonathan haidt",
"moral foundations",
"politics",
"liberals and conservatives",
"ted"
]
},
{
"id": "x94PGgYKHQ0",
"type": "Explainer",
"india": false,
"title": "Invisibility Training for Motorcyclists",
"channel": "FortNine",
"minutes": null,
"year": null,
"since": 2019,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited in threads on motorcycle and cyclist safety to explain why drivers look and still miss them.",
"tags": [
"motorcycle safety",
"perception",
"saccades",
"driver awareness",
"road safety"
]
},
{
"id": "xMzojQFyMo0",
"type": "Documentary",
"india": false,
"title": "Seymour Papert",
"channel": "Seth Morabito",
"minutes": null,
"year": null,
"since": 2014,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a glimpse of Papert's vision of computers as tools for learning, shared especially after his death.",
"tags": [
"seymour papert",
"logo",
"education",
"constructionism",
"computing history"
]
},
{
"id": "za56H2BGamQ",
"type": "Explainer",
"india": false,
"title": "Induced Demand & Roadway Widening: Everything You Always Wanted to Know (and Weren't Afraid to Ask)",
"channel": "Ray Delahanty | CityNerd",
"minutes": null,
"year": null,
"since": 2022,
"category": "Customer Behaviour",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters link it as a clearer explanation of induced demand for people who have not studied the topic.",
"tags": [
"induced demand",
"freeway widening",
"urban planning",
"transportation economics",
"traffic"
]
},
{
"id": "-EVqrDlAqYo",
"type": "Interview",
"india": false,
"title": "Jeff Hawkins: Thousand Brains Theory of Intelligence | Lex Fridman Podcast #25",
"channel": "Lex Fridman",
"minutes": null,
"year": null,
"since": 2019,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN people send others here to hear Hawkins explain his theory in his own words, including reference frames and the old versus new brain.",
"tags": [
"thousand brains",
"jeff hawkins",
"neuroscience",
"hierarchical temporal memory",
"reference frames"
]
},
{
"id": "0fKYVl12VTA",
"type": "Lecture",
"india": false,
"title": "Enterprise Sales | Startup School",
"channel": "Y Combinator",
"minutes": null,
"year": null,
"since": 2024,
"category": "Startup & Entrepreneurship",
"also": [
"Marketing & Growth",
"Sales"
],
"topics": [
"Sales"
],
"stage": "First Customer",
"gem": false,
"why": "Recommended as a compact, practical summary of enterprise SaaS sales for technical founders.",
"tags": [
"saas sales",
"startup school",
"outbound",
"pricing",
"procurement"
]
},
{
"id": "0lJKucu6HJc",
"type": "Talk",
"india": false,
"title": "Sam Altman - How to Succeed with a Startup",
"channel": "Y Combinator",
"minutes": null,
"year": null,
"since": 2018,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [
"Product"
],
"stage": "Validation",
"gem": false,
"why": "Recommended as the single Startup School video worth watching, a short and dense talk on what makes a startup work; one commenter dismisses it as platitudes.",
"tags": [
"startups",
"y combinator",
"sam altman",
"product-market fit",
"founders"
]
},
{
"id": "3MghYhf-GhU",
"type": "Interview",
"india": false,
"title": "3dfx Oral History Panel with Ross Smith, Scott Sellers, Gary Tarolli, and Gordon Campbell",
"channel": "Computer History Museum",
"minutes": null,
"year": null,
"since": 2017,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as the definitive retrospective on 3dfx, with first-hand stories about engineering hacks and design philosophy.",
"tags": [
"3dfx",
"voodoo",
"oral history",
"gpu",
"glide",
"computer history"
]
},
{
"id": "45mMioJ5szc",
"type": "Explainer",
"india": false,
"title": "Michael Jordan \"Failure\" Nike Commercial",
"channel": "JayMJ23",
"minutes": null,
"year": null,
"since": 2010,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN invokes it as the classic illustration of learning through repeated failure and iterating, often in startup threads.",
"tags": [
"michael jordan",
"failure",
"nike",
"advertising",
"perseverance"
]
},
{
"id": "4kLPyV8lBbs",
"type": "Lecture",
"india": false,
"title": "\"Understanding Burnout,\" Prof. Christina Maslach (U.C. Berkeley)",
"channel": "Thriving In Science",
"minutes": null,
"year": null,
"since": 2016,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN uses it as the expert primer on burnout that dispels common misconceptions.",
"tags": [
"burnout",
"workplace psychology",
"stress",
"christina maslach",
"mental health"
]
},
{
"id": "4q1dgn_C0AU",
"type": "Talk",
"india": false,
"title": "The surprising science of happiness | Dan Gilbert",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2021,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it as one of the best TED talks and as evidence that people adapt to and come to like outcomes they cannot change.",
"tags": [
"happiness",
"dan gilbert",
"ted talk",
"decision making",
"synthetic happiness"
]
},
{
"id": "6reLWfFNer0",
"type": "Talk",
"india": false,
"title": "How to Build a Startup Without Funding by Pieter Levels @ Dojo Bali",
"channel": "@levelsio",
"minutes": null,
"year": null,
"since": 2018,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Pointed to as an inspiring talk for solo makers turning side projects into profitable businesses.",
"tags": [
"indie hacking",
"bootstrapping",
"side projects",
"pieter levels",
"solo founder"
]
},
{
"id": "77IdKFqXbUY",
"type": "Talk",
"india": false,
"title": "Robert F. Kennedy challenges Gross Domestic Product",
"channel": "ipyramid",
"minutes": null,
"year": null,
"since": 2014,
"category": "Investment & Venture Capital",
"also": [],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "Quoted in economics threads about growth, work and basic income as a classic critique of GDP.",
"tags": [
"gdp",
"robert kennedy",
"economic measurement",
"well-being",
"speech"
]
},
{
"id": "7Vc8sxhy2I4",
"type": "Talk",
"india": false,
"title": "Mikey Dickerson Velocity NY 2014 Keynote: \"One Year After healthcare.gov...\"",
"channel": "O'Reilly",
"minutes": null,
"year": null,
"since": 2015,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it as a firsthand account of how dysfunctional large IT projects can be, with about 50 contractors and no one in charge.",
"tags": [
"healthcare.gov",
"us digital service",
"project failure",
"contractors",
"operations"
]
},
{
"id": "7xQQkzWhMOc",
"type": "Commentary",
"india": false,
"title": "Why Doing Taxes Is So Hard | Patriot Act with Hasan Minhaj | Netflix",
"channel": "Netflix Is A Joke",
"minutes": null,
"year": null,
"since": 2021,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as an accessible explanation of how Intuit's lobbying and deceptive design undermine free tax filing.",
"tags": [
"turbotax",
"intuit",
"dark patterns",
"irs free file",
"lobbying"
]
},
{
"id": "8QiPFmIMxFc",
"type": "Talk",
"india": false,
"title": "Bret Victor Inventing on Principle",
"channel": "Luna Programming Language Tutorials",
"minutes": null,
"year": null,
"since": 2020,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as an inspiring talk on immediate feedback and on living by a principle.",
"tags": [
"bret victor",
"live coding",
"design principles",
"programming tools",
"inspiration"
]
},
{
"id": "8dhp_20j0Ys",
"type": "Interview",
"india": false,
"title": "How Toy Story 2 Almost Got Deleted: Stories From Pixar Animation: ENTV",
"channel": "@HOLLYWOOD",
"minutes": null,
"year": null,
"since": 2016,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN shares it as a classic backup and operations cautionary tale.",
"tags": [
"toy story 2",
"pixar",
"backups",
"devops",
"data loss"
]
},
{
"id": "8gw0rXPMMPE",
"type": "Demo",
"india": false,
"title": "The new Windows Terminal",
"channel": "Windows Developer",
"minutes": null,
"year": null,
"since": 2019,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "Mentioned for its unusually polished, nerdy trailer style, and as an example of a good developer tool announcement.",
"tags": [
"windows terminal",
"microsoft",
"wsl",
"powershell",
"product announcement"
]
},
{
"id": "AJgY9FtDLbs",
"type": "Interview",
"india": false,
"title": "Rocker Jack White - Serious Jibber-Jabber with Conan O'Brien | Team Coco",
"channel": "Team Coco",
"minutes": null,
"year": null,
"since": 2014,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "HN recommends it as an inspiring interview about passion, minimalism and deliberately imposing restrictions on creative work.",
"tags": [
"jack white",
"conan o'brien",
"creativity",
"constraints",
"music"
]
},
{
"id": "B5FxFfymI4g",
"type": "Lecture",
"india": false,
"title": "Disruptive Innovation - Clayton Christensen (Part 2)",
"channel": "modplanman",
"minutes": null,
"year": null,
"since": 2014,
"category": "Startup & Entrepreneurship",
"also": [
"SaaS & Technology"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as an amazing, clear explanation of why incumbents move upmarket and lose to low-end challengers.",
"tags": [
"clayton christensen",
"disruption",
"steel industry",
"innovator's dilemma",
"strategy"
]
},
{
"id": "BnSUk0je6oo",
"type": "Talk",
"india": false,
"title": "John Carmack Facebook Connect 2021 Keynote",
"channel": "UploadVR",
"minutes": null,
"year": null,
"since": 2021,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Commenters praise it as clear, honest thinking from Carmack and recommend it to technical people interested in VR and the metaverse.",
"tags": [
"john carmack",
"meta quest",
"metaverse",
"virtual reality",
"keynote"
]
},
{
"id": "D7Kn5p7TP_Y",
"type": "Lecture",
"india": false,
"title": "2017 Personality 18: Biology & Traits: Openness/Intelligence/Creativity I",
"channel": "Jordan B Peterson",
"minutes": null,
"year": null,
"since": 2017,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a solid introduction to personality and IQ research, and cited as the source for factor-analysis claims about personality and intelligence.",
"tags": [
"big five",
"openness",
"iq",
"creativity",
"jordan peterson"
]
},
{
"id": "ENLWEfi0Tkg",
"type": "Talk",
"india": false,
"title": "Gopherfest 2017 | Upspin with Rob Pike",
"channel": "The Go Programming Language",
"minutes": null,
"year": null,
"since": 2017,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited as the talk that introduced Upspin, and called fascinating and really good by commenters.",
"tags": [
"upspin",
"rob pike",
"golang",
"secure sharing",
"naming systems"
]
},
{
"id": "E_F5GxCwizc",
"type": "Commentary",
"india": false,
"title": "Native Advertising: Last Week Tonight with John Oliver (HBO)",
"channel": "LastWeekTonight",
"minutes": null,
"year": null,
"since": 2014,
"category": "Marketing & Growth",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a funny, clear explanation of native advertising whenever sponsored content in media is discussed.",
"tags": [
"native advertising",
"sponsored content",
"journalism",
"john oliver",
"media"
]
},
{
"id": "EhqZ0RU95d4",
"type": "Talk",
"india": false,
"title": "Gary Vaynerchuk: Building Personal Brand Within the Social Media Landscape - Web 2.0 Expo NY",
"channel": "O'Reilly",
"minutes": null,
"year": null,
"since": 2009,
"category": "Startup & Entrepreneurship",
"also": [
"Marketing & Growth",
"Business Psychology"
],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended in Ask HN career threads as motivational advice to use spare hours to start building.",
"tags": [
"gary vaynerchuk",
"side projects",
"motivation",
"social media",
"career"
]
},
{
"id": "F3Jd9GI6XqE",
"type": "Podcast",
"india": false,
"title": "Edward Gibson: Human Language, Psycholinguistics, Syntax, Grammar & LLMs | Lex Fridman Podcast #426",
"channel": "Lex Fridman",
"minutes": null,
"year": null,
"since": 2024,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "HN cites it for the argument that LLMs capture language form but not meaning, and for how the brain's language network works.",
"tags": [
"language",
"syntax",
"llms",
"brain",
"edward gibson"
]
},
{
"id": "FkKPsLxgpuY",
"type": "Explainer",
"india": false,
"title": "I took an IQ test to explain what's wrong with them",
"channel": "Veritasium",
"minutes": null,
"year": null,
"since": 2023,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a good primer on what IQ scores mean and their limited effect on life outcomes.",
"tags": [
"iq",
"intelligence",
"psychometrics",
"history of testing",
"veritasium"
]
},
{
"id": "GZTr1-Gp74U",
"type": "Explainer",
"india": false,
"title": "100%+ short interest in GameStop stock (GME) – fundamental & technical deep value analysis",
"channel": "Roaring Kitty",
"minutes": null,
"year": null,
"since": 2021,
"category": "Investment & Venture Capital",
"also": [],
"topics": [
"Fundraising"
],
"stage": null,
"gem": false,
"why": "After the 2021 squeeze, HN cites it as the original thesis behind the GME story and praises its quality.",
"tags": [
"gamestop",
"roaring kitty",
"short interest",
"wallstreetbets",
"value investing"
]
},
{
"id": "GnO7D5UaDig",
"type": "Talk",
"india": false,
"title": "Apple's World Wide Developers Conference 1997 with Steve Jobs",
"channel": "superapple4ever",
"minutes": null,
"year": null,
"since": 2012,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Product",
"Team"
],
"stage": null,
"gem": false,
"why": "Held up as a masterclass in handling a crisis and a hostile Q&A, and quoted for starting from customer experience.",
"tags": [
"steve jobs",
"wwdc",
"apple",
"product strategy",
"crisis management"
]
},
{
"id": "H2tuKiiznsY",
"type": "Explainer",
"india": false,
"title": "The real reason Boeing's new plane crashed twice",
"channel": "Vox",
"minutes": null,
"year": null,
"since": 2019,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as a concise explanation of what caused the 737 Max crashes.",
"tags": [
"boeing",
"737 max",
"mcas",
"aviation safety",
"corporate failure"
]
},
{
"id": "LKJBND_IRdI",
"type": "Explainer",
"india": false,
"title": "The Uncanny Valley Is Wrong",
"channel": "This Place",
"minutes": null,
"year": null,
"since": 2021,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a convincing counterargument to the widely repeated idea of the uncanny valley.",
"tags": [
"uncanny valley",
"robotics",
"animation",
"human likeness",
"perception"
]
},
{
"id": "Ly6USRwTHe0",
"type": "Demo",
"india": false,
"title": "Generative AI for Krita - With ControlNet",
"channel": "Acly",
"minutes": null,
"year": null,
"since": 2023,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "HN recommends it as a quick way to see how the Krita AI plugin works and how it matches Photoshop's generative features.",
"tags": [
"krita",
"stable diffusion",
"controlnet",
"inpainting",
"open source"
]
},
{
"id": "MVYrJJNdrEg",
"type": "Podcast",
"india": false,
"title": "Mark Zuckerberg: First Interview in the Metaverse | Lex Fridman Podcast #398",
"channel": "Lex Fridman",
"minutes": null,
"year": null,
"since": 2023,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN points to it as a demonstration that VR presence can feel close to talking in person.",
"tags": [
"mark zuckerberg",
"metaverse",
"meta",
"codec avatars",
"lex fridman"
]
},
{
"id": "MnrJzXM7a6o",
"type": "Demo",
"india": false,
"title": "Steve Jobs introduces iPhone in 2007",
"channel": "John Schroter",
"minutes": null,
"year": null,
"since": 2020,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"MVP",
"Product"
],
"stage": null,
"gem": false,
"why": "HN treats it as the model product demo and MVP showcase, and as a reminder of how constrained the first iPhone hardware was.",
"tags": [
"steve jobs",
"iphone",
"keynote",
"product demo",
"apple",
"mvp"
]
},
{
"id": "N9c7_8Gp7gI",
"type": "Talk",
"india": false,
"title": "Rethinking CS Education | Alan Kay, CrossRoads 2015",
"channel": "Infosys Foundation USA",
"minutes": null,
"year": null,
"since": 2016,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN readers cite Kay's talks for his views on programming languages as user interfaces, thinking beyond logic, and why people struggle with complex systems.",
"tags": [
"alan kay",
"education",
"systems thinking",
"programming languages",
"learning"
]
},
{
"id": "NK1zlz67MjU",
"type": "Talk",
"india": false,
"title": "Chuck Moore's Fireside Chat 2011",
"channel": "GreenArraysInc",
"minutes": null,
"year": null,
"since": 2013,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as a window into Moore's minimalist CPU design and the GA144 chip, despite the slow pace.",
"tags": [
"chuck moore",
"forth",
"ga144",
"greenarrays",
"processor design"
]
},
{
"id": "P4VBqTViEx4",
"type": "Interview",
"india": false,
"title": "Designer's Digest - Steve Jobs on the role of product and marketing people.",
"channel": "Designer's Digest",
"minutes": null,
"year": null,
"since": 2020,
"category": "Marketing & Growth",
"also": [
"Startup & Entrepreneurship",
"Founder Stories & Documentaries",
"Sales"
],
"topics": [
"Product",
"Growth",
"Sales",
"Team"
],
"stage": "First Customer",
"gem": false,
"why": "Cited constantly on HN whenever a large company declines, as the canonical explanation of product people being pushed out by sales and marketing.",
"tags": [
"steve jobs",
"product management",
"monopolies",
"company decline",
"xerox"
]
},
{
"id": "PsXFwy6gG_4",
"type": "Talk",
"india": false,
"title": "Eric Schmidt and Peter Thiel - Fortune Debate, 2012",
"channel": "kykeon",
"minutes": null,
"year": null,
"since": 2016,
"category": "SaaS & Technology",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recalls it as one of the most interesting debates between two contrasting worldviews on progress.",
"tags": [
"peter thiel",
"eric schmidt",
"innovation",
"debate",
"google"
]
},
{
"id": "QUjYy4Ksy1E",
"type": "Explainer",
"india": false,
"title": "Why Gifted Kids Are Actually Special Needs",
"channel": "HealthyGamerGG",
"minutes": null,
"year": null,
"since": 2021,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters call it enlightening for understanding the emotional challenges of gifted kids, especially those who struggle later in school or college.",
"tags": [
"gifted kids",
"burnout",
"perfectionism",
"mental health",
"education"
]
},
{
"id": "R37zkizucPU",
"type": "Talk",
"india": false,
"title": "Louis CK honors George Carlin",
"channel": "Bromista5",
"minutes": null,
"year": null,
"since": 2011,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN finds the story inspiring beyond comedy: getting good by throwing out your old work and starting over.",
"tags": [
"louis ck",
"george carlin",
"stand-up",
"creativity",
"new material"
]
},
{
"id": "SGUCcjHTmGY",
"type": "Demo",
"india": false,
"title": "OpenAI Codex Live Demo",
"channel": "OpenAI",
"minutes": null,
"year": null,
"since": 2021,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "HN points to it as an early, impressive demonstration that LLMs could write working code.",
"tags": [
"openai codex",
"code generation",
"llm",
"live demo",
"programming"
]
},
{
"id": "SK4ezQrTqFw",
"type": "Interview",
"india": false,
"title": "Chris Sacca of Lowercase Capital Pt. 2- TWiST #295",
"channel": "This Week in Startups",
"minutes": null,
"year": null,
"since": 2014,
"category": "Startup & Entrepreneurship",
"also": [
"Investment & Venture Capital",
"Founder Stories & Documentaries"
],
"topics": [
"Fundraising"
],
"stage": "Fundraising",
"gem": false,
"why": "HN calls it a favorite startup video because it is packed with candid stories about Facebook, Twitter and Google.",
"tags": [
"chris sacca",
"venture capital",
"twitter",
"facebook",
"angel investing"
]
},
{
"id": "Sg4U4r_AgJU",
"type": "Lecture",
"india": false,
"title": "Computer Science - Brian Kernighan on successful language design",
"channel": "University of Nottingham",
"minutes": null,
"year": null,
"since": 2015,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it as a practical talk on language design and for background on awk from one of its authors.",
"tags": [
"brian kernighan",
"awk",
"language design",
"domain specific languages",
"unix"
]
},
{
"id": "TcEWRykSgwE",
"type": "Lecture",
"india": false,
"title": "Jordan Peterson - Pareto Distributions",
"channel": "Bite-sized Philosophy",
"minutes": null,
"year": null,
"since": 2017,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN points to it for an accessible explanation of why wealth and creative output are so unevenly distributed.",
"tags": [
"jordan peterson",
"pareto distribution",
"inequality",
"power laws",
"psychology"
]
},
{
"id": "UQuIVsNzqDk",
"type": "Explainer",
"india": false,
"title": "This Invention Made Disney MILLIONS, but Then They LOST It!",
"channel": "Corridor Crew",
"minutes": null,
"year": null,
"since": 2025,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a fun, informative rediscovery of a lost film-effects technique.",
"tags": [
"vfx",
"disney",
"green screen",
"mary poppins",
"beam splitter"
]
},
{
"id": "UmIgNfp-MdI",
"type": "Demo",
"india": false,
"title": "Microsoft \"Courier\" secret tablet",
"channel": "Neowin",
"minutes": null,
"year": null,
"since": 2010,
"category": "SaaS & Technology",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN treats it as a gold-standard concept demo and a what-might-have-been for dual-screen and digital notebook devices.",
"tags": [
"microsoft courier",
"dual screen",
"tablet",
"digital notebook",
"concept demo"
]
},
{
"id": "VHWUCX6osgM",
"type": "Talk",
"india": false,
"title": "Steve Jobs Stanford Commencement Speech 2005 high definition.flv",
"channel": "Jed Joe",
"minutes": null,
"year": null,
"since": 2013,
"category": "Founder Stories & Documentaries",
"also": [
"Business Psychology"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN people recommend it as personal inspiration for perseverance and for keeping perspective by remembering mortality.",
"tags": [
"steve jobs",
"stanford",
"motivation",
"career advice",
"mortality"
]
},
{
"id": "WB2-2j9e4co",
"type": "Documentary",
"india": false,
"title": "Extreme transformer home in Hong Kong: Gary Chang's 24 rooms in 1",
"channel": "Kirsten Dirksen",
"minutes": null,
"year": null,
"since": 2019,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Held up as the ultimate example of small-space design and a beautiful compact home.",
"tags": [
"tiny apartment",
"hong kong",
"transformable furniture",
"architecture",
"gary chang"
]
},
{
"id": "WRdJCFEqFTU",
"type": "Talk",
"india": false,
"title": "Joscha: Computational Meta-Psychology",
"channel": "media.ccc.de",
"minutes": null,
"year": null,
"since": 2018,
"category": "Business Psychology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "Recommended as one of the best bridges between mind and computation, and as a sample of Bach's thinking on AI and philosophy.",
"tags": [
"joscha bach",
"consciousness",
"ai",
"cognitive science",
"ccc"
]
},
{
"id": "WVTWCPoUt8w",
"type": "Talk",
"india": false,
"title": "The Origins of Linux—Linus Torvalds",
"channel": "Computer History Museum",
"minutes": null,
"year": null,
"since": 2008,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN points to it as the long first-person account of Linux history, including Linus on the GPL's role and on microkernels.",
"tags": [
"linus torvalds",
"linux",
"open source",
"gpl",
"kernel design"
]
},
{
"id": "Wi_nFz1CJSI",
"type": "Talk",
"india": false,
"title": "Iowa Swine Day 2022: Agriculture at the End of the World",
"channel": "Iowa Pork Industry Center",
"minutes": null,
"year": null,
"since": 2022,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended for its bleak take on globalization, energy and food supply, though some commenters question how objective it is.",
"tags": [
"peter zeihan",
"globalization",
"agriculture",
"energy crisis",
"supply chains"
]
},
{
"id": "Wp7GAKLSGnI",
"type": "Interview",
"india": false,
"title": "Oral History of Donald Knuth Part 1",
"channel": "Computer History Museum",
"minutes": null,
"year": null,
"since": 2019,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as a superb, personal long-form look at Knuth's life and work habits.",
"tags": [
"knuth",
"oral history",
"tex",
"art of computer programming",
"computing history"
]
},
{
"id": "_gXiVOmaVSo",
"type": "Talk",
"india": false,
"title": "Shawn Douglas - Nanoscale Instruments for Visualizing Small Proteins & Bret Victor - Dynamicland",
"channel": "Foresight Institute",
"minutes": null,
"year": null,
"since": 2022,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN points to Bret Victor's segment as a recent, concrete demonstration of Dynamicland's ideas applied to a specific scientific domain.",
"tags": [
"bret victor",
"dynamicland",
"realtalk",
"protein visualization",
"physical computing"
]
},
{
"id": "aNAtbYSxzuA",
"type": "Interview",
"india": false,
"title": "Hacker Interviews: Larry Wall",
"channel": "The BXI",
"minutes": null,
"year": null,
"since": 2013,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "Recommended as an enjoyable look at the hacker mindset and a thoughtful interview worth rewatching.",
"tags": [
"larry wall",
"perl",
"linguistics",
"hacker culture",
"programming languages"
]
},
{
"id": "aXvDEmo6uS4",
"type": "Podcast",
"india": false,
"title": "Maximizing Productivity, Physical & Mental Health with Daily Tools",
"channel": "Andrew Huberman",
"minutes": null,
"year": null,
"since": 2021,
"category": "Business Psychology",
"also": [],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "Commenters credit it for practical routines, such as morning walks and circadian timing, and for helping with burnout recovery.",
"tags": [
"productivity",
"circadian rhythm",
"sleep",
"neuroscience",
"habits"
]
},
{
"id": "bnoUBfLxZz0",
"type": "Documentary",
"india": false,
"title": "The Super-Fast Logistics of Delivering Blood By Drone",
"channel": "Wendover Productions",
"minutes": null,
"year": null,
"since": 2019,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Offered as a clear, well-made look at a real, working drone-delivery system, often in answer to skepticism about delivery drones.",
"tags": [
"zipline",
"rwanda",
"drones",
"medical logistics",
"last-mile delivery"
]
},
{
"id": "cQWlnTyOSig",
"type": "Explainer",
"india": false,
"title": "The Chinese Student Crisis",
"channel": "PolyMatter",
"minutes": null,
"year": null,
"since": 2022,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters recommend it in college-ranking and higher-ed threads as an explanation of why rankings are a hustle for foreign student revenue.",
"tags": [
"higher education",
"international students",
"rankings",
"china",
"tuition"
]
},
{
"id": "cVaTc15plVs",
"type": "Documentary",
"india": false,
"title": "Hjernevask - Brainwashing (Eng Sub) Part 1 - The Gender Equality Paradox",
"channel": "The Bookman",
"minutes": null,
"year": null,
"since": 2015,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters cite it, especially during the Google memo debate, as expert testimony on biological contributions to gender differences.",
"tags": [
"nature vs nurture",
"gender equality paradox",
"norwegian",
"sociology",
"hjernevask"
]
},
{
"id": "d6iQrh2TK98",
"type": "Explainer",
"india": false,
"title": "Why is this number everywhere?",
"channel": "Veritasium",
"minutes": null,
"year": null,
"since": 2024,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it in LLM randomness and number-picking threads as evidence that humans are also biased and predictable when asked for random numbers.",
"tags": [
"number 37",
"randomness",
"probability",
"veritasium",
"psychology"
]
},
{
"id": "dngqR9gcDDw",
"type": "Documentary",
"india": false,
"title": "Free To Choose 1980 - Vol. 01 The Power of the Market - Full Video",
"channel": "Free To Choose Network",
"minutes": null,
"year": null,
"since": 2023,
"category": "Customer Behaviour",
"also": [
"Investment & Venture Capital"
],
"topics": [],
"stage": null,
"gem": false,
"why": "Commenters say it made market economics click for them and find it an interesting documentary relevant to welfare and UBI debates.",
"tags": [
"milton friedman",
"free markets",
"price system",
"economics",
"1980s"
]
},
{
"id": "eUHBPuHS-7s",
"type": "Explainer",
"india": false,
"title": "Epic 2014",
"channel": "jessanmur",
"minutes": null,
"year": null,
"since": 2021,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN returns to it as an uncannily prescient prediction of tech consolidation and AI-written, personalized news.",
"tags": [
"googlezon",
"personalized news",
"ai-generated news",
"tech consolidation",
"speculative fiction"
]
},
{
"id": "g0lrIi0ce5E",
"type": "Documentary",
"india": false,
"title": "Riot On Documentary (2002)",
"channel": "Caroline bruins ",
"minutes": null,
"year": null,
"since": 2016,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries",
"Investment & Venture Capital"
],
"topics": [
"Fundraising"
],
"stage": "Fundraising",
"gem": false,
"why": "HN recommends it as an entertaining dot-com-era story and a cautionary tale about VC funding and fake-it-till-you-make-it growth.",
"tags": [
"riot entertainment",
"dot-com bubble",
"venture capital",
"startups",
"finland"
]
},
{
"id": "gcS04BI2sbk",
"type": "Talk",
"india": false,
"title": "Reinventing Organizations",
"channel": "Reinventing Organizations",
"minutes": null,
"year": null,
"since": 2014,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries"
],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "Recommended as the best introduction to self-management and new management paradigms.",
"tags": [
"self-management",
"teal organizations",
"management",
"buurtzorg",
"organizational culture"
]
},
{
"id": "ge7i60GuNRg",
"type": "Demo",
"india": false,
"title": "What Would You Do? Bike Theft (White Guy, Black Guy, Pretty Girl)",
"channel": "VladCantSleep",
"minutes": null,
"year": null,
"since": 2013,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Used in threads on bias and social engineering as a vivid example of how bystanders treat different thieves.",
"tags": [
"social experiment",
"bias",
"bike theft",
"social engineering",
"hidden camera"
]
},
{
"id": "gn8m5d74fk8",
"type": "Talk",
"india": false,
"title": "Oculus Connect Keynote: John Carmack",
"channel": "Meta VR",
"minutes": null,
"year": null,
"since": 2014,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it for Carmack's detailed engineering insight into VR rendering and latency challenges.",
"tags": [
"john carmack",
"oculus",
"gear vr",
"mobile gpu",
"latency"
]
},
{
"id": "gp4U5aH_T6A",
"type": "Podcast",
"india": false,
"title": "Saifedean Ammous: Bitcoin, Anarchy, and Austrian Economics | Lex Fridman Podcast #284",
"channel": "Lex Fridman",
"minutes": null,
"year": null,
"since": 2022,
"category": "Customer Behaviour",
"also": [
"Investment & Venture Capital"
],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited as a thorough statement of the bitcoin-maximalist case, with the host pushing back.",
"tags": [
"bitcoin",
"austrian economics",
"fiat money",
"saifedean ammous",
"lex fridman"
]
},
{
"id": "iIpPuJ_r8Xg",
"type": "Explainer",
"india": false,
"title": "The US Military’s Massive Global Transportation System",
"channel": "Wendover Productions",
"minutes": null,
"year": null,
"since": 2022,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a clear overview of military logistics, often as a contrast with civilian infrastructure efforts.",
"tags": [
"us military",
"supply chain",
"transportation",
"prepositioning",
"wendover"
]
},
{
"id": "ieb1lmm9xHk",
"type": "Demo",
"india": false,
"title": "Inner Game of Tennis",
"channel": "TheCoach",
"minutes": null,
"year": null,
"since": 2015,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters use it as a vivid demonstration of learning by quieting the conscious mind, and recommend it alongside the book.",
"tags": [
"timothy gallwey",
"coaching",
"learning",
"tennis",
"feedback"
]
},
{
"id": "mPn2AdMH7UQ",
"type": "Interview",
"india": false,
"title": "Surreal Numbers (writing the first book) - Numberphile",
"channel": "Numberphile",
"minutes": null,
"year": null,
"since": 2016,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a short, charming introduction to surreal numbers and to how Knuth wrote his book in under a week.",
"tags": [
"donald knuth",
"john conway",
"surreal numbers",
"numberphile",
"mathematics history"
]
},
{
"id": "meiU6TxysCg",
"type": "Explainer",
"india": false,
"title": "Two Monkeys Were Paid Unequally: Excerpt from Frans de Waal's TED Talk",
"channel": "TED Blog Video",
"minutes": null,
"year": null,
"since": 2014,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN uses it again and again as shorthand for the idea that resentment of unfair pay and inequality is built into primates, including us.",
"tags": [
"capuchin monkeys",
"inequity aversion",
"frans de waal",
"morality",
"animal behavior"
]
},
{
"id": "mmfjM-SGlGs",
"type": "Talk",
"india": false,
"title": "Here I Stand, at Age 80",
"channel": "TheTedNelson",
"minutes": null,
"year": null,
"since": 2017,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN people point to it as Nelson's candid, first-person overview of his life, Xanadu's failure, and the lessons he drew, a historical record from the man himself.",
"tags": [
"ted nelson",
"xanadu",
"hypertext",
"computer history",
"personal computing"
]
},
{
"id": "oFtjKbXKqbg",
"type": "Podcast",
"india": false,
"title": "Pieter Levels: Programming, Viral AI Startups, and Digital Nomad Life | Lex Fridman Podcast #440",
"channel": "Lex Fridman",
"minutes": null,
"year": null,
"since": 2024,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries"
],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "Recommended in solo-developer threads for its insights on shipping small projects with simple stacks and AI tools.",
"tags": [
"pieter levels",
"solo developer",
"startups",
"digital nomad",
"php"
]
},
{
"id": "oGTQ0Wj6yIg",
"type": "Podcast",
"india": false,
"title": "Joe Rogan Experience #1419 - Daryl Davis",
"channel": "PowerfulJRE",
"minutes": null,
"year": null,
"since": 2020,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Offered as a persuasion success story in threads about polarization and online toxicity.",
"tags": [
"daryl davis",
"ku klux klan",
"polarization",
"conversation",
"race"
]
},
{
"id": "plcc6E-E1uU",
"type": "Interview",
"india": false,
"title": "Avi Loeb: Aliens, Black Holes, and the Mystery of the Oumuamua | Lex Fridman Podcast #154",
"channel": "Lex Fridman",
"minutes": null,
"year": null,
"since": 2021,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as a good, non-sensational presentation of Loeb's actual argument, usually linked in Oumuamua threads.",
"tags": [
"avi loeb",
"oumuamua",
"aliens",
"astrophysics",
"scientific orthodoxy"
]
},
{
"id": "q3OuCR0EpGo",
"type": "Demo",
"india": false,
"title": "The 8pen",
"channel": "8pen",
"minutes": null,
"year": null,
"since": 2022,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters who used it remember it as an unusually fast and accurate touchscreen text input method and a fascinating alternative to QWERTY.",
"tags": [
"8pen",
"gesture keyboard",
"mobile input",
"android",
"ui design"
]
},
{
"id": "qEJ4hkpQW8E",
"type": "Talk",
"india": false,
"title": "How the US Is Destroying Young People’s Future | Scott Galloway | TED",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2024,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters cite it for hard data on millennials versus boomers and the economic reality facing young workers.",
"tags": [
"scott galloway",
"generational wealth",
"economics",
"young people",
"ted talk"
]
},
{
"id": "rQKis2Cfpeo",
"type": "Commentary",
"india": false,
"title": "Why 90% of Managers Are GARBAGE (The Professional Lie) | Steve Jobs",
"channel": "Evan Carmichael",
"minutes": null,
"year": null,
"since": 2017,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries"
],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "Cited in threads on management, hiring and company culture for Jobs's views on self-managing people and small, self-policing core teams.",
"tags": [
"steve jobs",
"management",
"hiring",
"company culture",
"vision"
]
},
{
"id": "tJoe_daP0DE",
"type": "Lecture",
"india": false,
"title": "Mark Blyth - A Brief History of How We Got Here and Why",
"channel": "McMaster Humanities",
"minutes": null,
"year": null,
"since": 2019,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a great primer on how neoliberalism developed and why the postwar order broke down.",
"tags": [
"political economy",
"neoliberalism",
"capitalism",
"great compression",
"economic history"
]
},
{
"id": "tvos4nORf_Y",
"type": "Talk",
"india": false,
"title": "How Will You Measure Your Life? Clay Christensen at TEDxBoston",
"channel": "TEDx Talks",
"minutes": null,
"year": null,
"since": 2014,
"category": "Startup & Entrepreneurship",
"also": [
"Business Psychology"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters share it as an inspiring reflection on what to optimize in life beyond career, especially in threads on burnout and meaning.",
"tags": [
"clayton christensen",
"career",
"values",
"relationships",
"success"
]
},
{
"id": "uTdyb-RWNKo",
"type": "Documentary",
"india": false,
"title": "GENERAL MAGIC - Official Trailer",
"channel": "General Magic and the Soul of Tech ",
"minutes": null,
"year": null,
"since": 2021,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends the documentary itself as a story of an epic early failure in mobile computing, and the trailer is the linked entry point.",
"tags": [
"general magic",
"early smartphones",
"silicon valley",
"apple",
"startup failure"
]
},
{
"id": "udJJ7n_Ryjg",
"type": "Explainer",
"india": false,
"title": "The Great Stranding: How Inaccurate Mainstream LCOE Estimates are Creating a Trillion-Dollar Bubble",
"channel": "RethinkX",
"minutes": null,
"year": null,
"since": 2022,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited in nuclear-versus-renewables debates to support the argument that cheap renewables undercut new nuclear.",
"tags": [
"lcoe",
"rethinkx",
"solar and batteries",
"nuclear economics",
"energy transition"
]
},
{
"id": "udlMSe5-zP8",
"type": "Podcast",
"india": false,
"title": "Joe Rogan Experience #1342 - John Carmack",
"channel": "PowerfulJRE",
"minutes": null,
"year": null,
"since": 2019,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a wide-ranging Carmack interview, noted for his views on work ethic and AGI.",
"tags": [
"john carmack",
"agi",
"work ethic",
"id software",
"oculus"
]
},
{
"id": "vDwzmJpI4io",
"type": "Interview",
"india": false,
"title": "Elon Musk - CEO of Tesla Motors and SpaceX | Entrepreneurship | Khan Academy",
"channel": "Khan Academy",
"minutes": null,
"year": null,
"since": 2013,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it as a source for specific Musk anecdotes and as an immensely interesting full conversation.",
"tags": [
"elon musk",
"spacex",
"paypal",
"reusable rockets",
"entrepreneurship"
]
},
{
"id": "vN4U5FqrOdQ",
"type": "Talk",
"india": false,
"title": "Steve Jobs iPhone 2007 Presentation (HD)",
"channel": "Jonathan",
"minutes": null,
"year": null,
"since": 2013,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "HN points to it as a landmark product presentation and as primary-source evidence of what the original iPhone was meant to do and how people reacted.",
"tags": [
"steve jobs",
"iphone",
"apple",
"keynote",
"product launch",
"mobile"
]
},
{
"id": "vc4yL3YTwWk",
"type": "Commentary",
"india": false,
"title": "Exposing the Honey Influencer Scam",
"channel": "MegaLag",
"minutes": null,
"year": null,
"since": 2024,
"category": "Marketing & Growth",
"also": [],
"topics": [
"Growth",
"Fundraising"
],
"stage": "Growth",
"gem": false,
"why": "HN treats it as top-tier investigative journalism on YouTube and the video that triggered lawsuits against Honey.",
"tags": [
"honey",
"affiliate fraud",
"browser extensions",
"paypal",
"influencers",
"investigative"
]
},
{
"id": "wO2lWmgEK1Y",
"type": "Documentary",
"india": false,
"title": "The Brexit effect: how leaving the EU hit the UK | FT Film",
"channel": "Financial Times",
"minutes": null,
"year": null,
"since": 2022,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Pointed to as an in-depth, journalistic account of Brexit's economic aftermath.",
"tags": [
"brexit",
"uk economy",
"trade",
"financial times"
]
},
{
"id": "wq5D43qAsVg",
"type": "Explainer",
"india": false,
"title": "Everything is a Remix Part 3 (Original Series, 2011)",
"channel": "Kirby Ferguson",
"minutes": null,
"year": null,
"since": 2011,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited in copyright and patent debates to argue that creative works and inventions evolve by building on earlier ones.",
"tags": [
"remix",
"copyright",
"innovation",
"apple",
"video essay"
]
},
{
"id": "xL_sMXfzzyA",
"type": "Interview",
"india": false,
"title": "A Conversation with Bertrand Russell (1952)",
"channel": "Manufacturing Intellect",
"minutes": null,
"year": null,
"since": 2021,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN users share it as a chance to hear Russell speak himself and get a sense of his values and outlook.",
"tags": [
"philosophy",
"russell",
"archival interview",
"1952"
]
},
{
"id": "xR7XMkjDGw0",
"type": "Interview",
"india": false,
"title": "George RR Martin asks Stephen King: \"How do you write so Fast?!\"",
"channel": "Aegon Targaryen",
"minutes": null,
"year": null,
"since": 2018,
"category": "Business Psychology",
"also": [],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "Shared in productivity and writing threads for King's simple daily-quota approach to producing a lot of work.",
"tags": [
"stephen king",
"george rr martin",
"writing habits",
"daily routine",
"productivity"
]
},
{
"id": "xYemnKEKx0c",
"type": "Talk",
"india": false,
"title": "Strange answers to the psychopath test | Jon Ronson | TED",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2021,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Praised as one of the great non-technical talks, appearing in best-talk lists.",
"tags": [
"jon ronson",
"psychopathy",
"psychology",
"ted talk",
"mental illness"
]
},
{
"id": "x_q50tvbQm4",
"type": "Interview",
"india": false,
"title": "Susan Kare explains Macintosh UI ergonomics on the Computer Chronicles (1984)",
"channel": "erg0steur",
"minutes": null,
"year": null,
"since": 2020,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Praised as a lesson in explaining technology to non-technical people and as a window into early Mac design.",
"tags": [
"susan kare",
"macintosh",
"ui design",
"computer chronicles",
"history of computing"
]
},
{
"id": "xb8idEf-Iak",
"type": "Interview",
"india": false,
"title": "1993 interview re: Paul Rand and Steve Jobs",
"channel": "youareworthy",
"minutes": null,
"year": null,
"since": 2010,
"category": "SaaS & Technology",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters share it for Jobs's account of Rand's single-option approach and as a lesson in trusting designers.",
"tags": [
"steve jobs",
"paul rand",
"logo design",
"next",
"branding"
]
},
{
"id": "y5UT04p5f7U",
"type": "Explainer",
"india": false,
"title": "Death to Pennies",
"channel": "CGP Grey",
"minutes": null,
"year": null,
"since": 2012,
"category": "Customer Behaviour",
"also": [
"Investment & Venture Capital"
],
"topics": [],
"stage": null,
"gem": false,
"why": "Pointed to as the canonical concise case against pennies whenever coin abolition comes up.",
"tags": [
"pennies",
"currency",
"economics",
"cgp grey"
]
},
{
"id": "-C-JoyNuQJs",
"type": "Talk",
"india": false,
"title": "Douglas Crockford: The JSON Saga",
"channel": "YUI Library",
"minutes": null,
"year": null,
"since": 2012,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters cite it as Crockford's first-hand account of JSON's origins and of the no-evil license anecdote.",
"tags": [
"json",
"douglas crockford",
"javascript",
"xml",
"open source licensing"
]
},
{
"id": "-DVyjdw4t9I",
"type": "Interview",
"india": false,
"title": "Guido van Rossum: Python and the Future of Programming | Lex Fridman Podcast #341",
"channel": "Lex Fridman",
"minutes": null,
"year": null,
"since": 2022,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN points to it for Guido's own views on the GIL, Python internals and using Copilot, especially in Python-related threads.",
"tags": [
"guido van rossum",
"python",
"gil",
"copilot",
"language creators"
]
},
{
"id": "-ZSli7QW4rg",
"type": "Talk",
"india": false,
"title": "Assholes are Ruining Your Project. Donnie Berkholz (RedMonk).",
"channel": "Tom Raftery",
"minutes": null,
"year": null,
"since": 2014,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "Cited as the go-to evidence that rudeness drives contributors away and that toxic people must be removed from projects.",
"tags": [
"open source",
"community management",
"toxic contributors",
"maintainers",
"culture"
]
},
{
"id": "-_aL9V0JsQQ",
"type": "Interview",
"india": false,
"title": "He started a computing REVOLUTION—then the shortage hit",
"channel": "Jeff Geerling",
"minutes": null,
"year": null,
"since": 2023,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it to explain why Pi supply favored business customers during the shortage, straight from a founder.",
"tags": [
"raspberry pi",
"eben upton",
"chip shortage",
"risc-v",
"rp2040"
]
},
{
"id": "-hCimLnIsDA",
"type": "Talk",
"india": false,
"title": "Using JSLint For Evil",
"channel": "ryantravistate",
"minutes": null,
"year": null,
"since": 2013,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Linked in licensing threads as a short, funny story about the 'no evil' clause and IBM's request for an exception.",
"tags": [
"jslint",
"douglas crockford",
"licenses",
"ibm",
"open source"
]
},
{
"id": "-hxX_Q5CnaA",
"type": "Talk",
"india": false,
"title": "Video from Jeff Bezos about Amazon and Zappos",
"channel": "07272009july",
"minutes": null,
"year": null,
"since": 2011,
"category": "Marketing & Growth",
"also": [
"Founder Stories & Documentaries",
"Customer Behaviour"
],
"topics": [
"Users"
],
"stage": "Validation",
"gem": false,
"why": "HN commenters like his candid, authentic delivery and the lessons on customer obsession and thinking long term.",
"tags": [
"jeff bezos",
"amazon",
"zappos",
"customer obsession",
"long-term thinking"
]
},
{
"id": "-t1_ffaFXao",
"type": "Podcast",
"india": false,
"title": "Stephen Wolfram: Fundamental Theory of Physics, Life, and the Universe | Lex Fridman Podcast #124",
"channel": "Lex Fridman",
"minutes": null,
"year": null,
"since": 2021,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN points to it as a detailed explanation of Wolfram's physics hypothesis, and for Wolfram's evident passion, though some find it long.",
"tags": [
"stephen wolfram",
"wolfram physics project",
"ruliad",
"computational universe",
"lex fridman"
]
},
{
"id": "0-wB1VY3Nrc",
"type": "Commentary",
"india": false,
"title": "Humans can't read URLs. How can we fix it? - HTTP 203",
"channel": "Chrome for Developers",
"minutes": null,
"year": null,
"since": 2020,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Referenced in debates over Chrome hiding URLs as a compelling case for why full URLs are hard even for experts.",
"tags": [
"urls",
"phishing",
"chrome",
"public suffix list",
"address bar"
]
},
{
"id": "069y1MpOkQY",
"type": "Explainer",
"india": false,
"title": "How Budget Airlines Work",
"channel": "Wendover Productions",
"minutes": null,
"year": null,
"since": 2017,
"category": "Startup & Entrepreneurship",
"also": [
"Sales"
],
"topics": [
"Sales"
],
"stage": null,
"gem": false,
"why": "HN points to it as a short, clear answer to why budget airlines are so cheap.",
"tags": [
"low-cost airlines",
"airline business",
"ticket pricing",
"aviation",
"wendover"
]
},
{
"id": "0lnbdRweJtA",
"type": "Talk",
"india": false,
"title": "Zero to $10 Million with React Native + Next.js - Fernando Rojo - (Next.js Conf 2021)",
"channel": "Vercel",
"minutes": null,
"year": null,
"since": 2022,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Linked as the origin story and rationale for Solito and for sharing code between web and mobile.",
"tags": [
"react native",
"next.js",
"solito",
"code sharing",
"mobile and web"
]
},
{
"id": "160F8F8mXlo",
"type": "Explainer",
"india": false,
"title": "Why ChatGPT Can't Draw a Full Glass of Wine",
"channel": "Alex O'Connor",
"minutes": null,
"year": null,
"since": 2025,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "HN treats it as the origin of the full-wine-glass meme and an illustration of how models lack concepts missing from their training data.",
"tags": [
"chatgpt",
"image generation",
"wine glass",
"training data",
"david hume"
]
},
{
"id": "1YbcB6b4A2U",
"type": "Podcast",
"india": false,
"title": "Bryan Johnson: Kernel Brain-Computer Interfaces | Lex Fridman Podcast #186",
"channel": "Lex Fridman",
"minutes": null,
"year": null,
"since": 2021,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited as an accessible overview of Kernel's technology whenever its brain-sensing helmets come up.",
"tags": [
"kernel",
"bryan johnson",
"neurotech",
"brain sensing",
"lex fridman"
]
},
{
"id": "1faaOrtHJ-A",
"type": "Interview",
"india": false,
"title": "HandmadeCon 2015 - Pat Wyatt",
"channel": "Molly Rocket",
"minutes": null,
"year": null,
"since": 2016,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN points to it as a first-hand account of game netcode and engineering lessons from a Blizzard and Guild Wars developer.",
"tags": [
"netcode",
"game development",
"blizzard",
"diablo",
"guild wars",
"handmadecon"
]
},
{
"id": "23X14HS4gLk",
"type": "Documentary",
"india": false,
"title": "Don't Be a Sucker - 1947",
"channel": "Weirdo Video",
"minutes": null,
"year": null,
"since": 2017,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Shared in political threads as a timeless warning about divisive manipulation and demagogues.",
"tags": [
"propaganda",
"wwii",
"1947 film",
"prejudice",
"manipulation"
]
},
{
"id": "29RkHH-psrY",
"type": "Interview",
"india": false,
"title": "Oral History of Dave Cutler Part 1",
"channel": "Computer History Museum",
"minutes": null,
"year": null,
"since": 2020,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a rare long-form interview with a legendary operating system designer, though some find it light on technical detail.",
"tags": [
"dave cutler",
"windows nt",
"vms",
"dec",
"oral history"
]
},
{
"id": "2BdBfsXbST8",
"type": "Podcast",
"india": false,
"title": "Donald Knuth: Algorithms, Complexity, and The Art of Computer Programming | Lex Fridman Podcast #62",
"channel": "Lex Fridman",
"minutes": null,
"year": null,
"since": 2020,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited as an excellent look at Knuth's thinking and working style, and as a likely source for quotes about his habits.",
"tags": [
"donald knuth",
"taocp",
"algorithms",
"work habits",
"lex fridman"
]
},
{
"id": "2Q26XIKtwXQ",
"type": "Interview",
"india": false,
"title": "Thiel: Google has $50B, doesn't innovate",
"channel": "CNN",
"minutes": null,
"year": null,
"since": 2017,
"category": "SaaS & Technology",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN reaches for it whenever big tech cash hoarding, buybacks or stagnating innovation come up.",
"tags": [
"peter thiel",
"google",
"cash hoarding",
"innovation",
"eric schmidt"
]
},
{
"id": "2vuMzGhc1cg",
"type": "Commentary",
"india": false,
"title": "DEBUNKING STARLINK",
"channel": "Common Sense Skeptic",
"minutes": null,
"year": null,
"since": 2021,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "A few commenters recommend it as a skeptical take on Starlink economics, though others see it as dishonest.",
"tags": [
"starlink",
"spacex",
"satellites",
"skepticism",
"elon musk"
]
},
{
"id": "2wq9x2QcZN0",
"type": "Podcast",
"india": false,
"title": "Eric Weinstein: Revolutionary Ideas in Science, Math, and Society | Lex Fridman Podcast #16",
"channel": "Lex Fridman",
"minutes": null,
"year": null,
"since": 2019,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Ideas",
"AI"
],
"stage": null,
"gem": false,
"why": "HN refers to it for Weinstein's views on advanced math and physics and academia's problems, though some find him a bit kooky.",
"tags": [
"eric weinstein",
"physics",
"academia",
"ai and jobs",
"lex fridman"
]
},
{
"id": "3pvpNKUPbIY",
"type": "Podcast",
"india": false,
"title": "Kevin Systrom: Instagram | Lex Fridman Podcast #243",
"channel": "Lex Fridman",
"minutes": null,
"year": null,
"since": 2021,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": "Growth",
"gem": false,
"why": "Pointed to for the founder's own account of Instagram's pivot, early scaling on Django with a small team, and avoiding overengineering.",
"tags": [
"instagram",
"kevin systrom",
"startup pivot",
"scaling",
"django"
]
},
{
"id": "3qHkcs3kG44",
"type": "Podcast",
"india": false,
"title": "Joe Rogan Experience #1309 - Naval Ravikant",
"channel": "PowerfulJRE",
"minutes": null,
"year": null,
"since": 2019,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries",
"Business Psychology"
],
"topics": [],
"stage": null,
"gem": false,
"why": "Mostly cited to support specific points Naval makes, such as platforms and free speech, rather than as a general must-watch.",
"tags": [
"naval ravikant",
"joe rogan",
"happiness",
"platforms",
"startups"
]
},
{
"id": "3wMKoSRbGVs",
"type": "Podcast",
"india": false,
"title": "Douglas Lenat: Cyc and the Quest to Solve Common Sense Reasoning in AI | Lex Fridman Podcast #221",
"channel": "Lex Fridman",
"minutes": null,
"year": null,
"since": 2021,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "Pointed to as the long-form interview for understanding Lenat's work, especially after his death.",
"tags": [
"douglas lenat",
"cyc",
"common sense reasoning",
"symbolic ai",
"lex fridman"
]
},
{
"id": "4Vw6uF2LdZw",
"type": "Lecture",
"india": false,
"title": "The Myth of the Robber Barons with Burt Folsom",
"channel": "Foundation for Economic Education",
"minutes": null,
"year": null,
"since": 2014,
"category": "Customer Behaviour",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN people offer it as a free-market counterpoint to the standard robber baron narrative.",
"tags": [
"robber barons",
"rockefeller",
"vanderbilt",
"free market",
"economic history"
]
},
{
"id": "5ODzO7Lz_pw",
"type": "Talk",
"india": false,
"title": "Thomas Thwaites: How I built a toaster -- from scratch",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2019,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN uses it as the standard illustration of hidden complexity and supply-chain dependencies behind everyday objects.",
"tags": [
"toaster project",
"manufacturing",
"supply chains",
"design",
"ted talk"
]
},
{
"id": "5P5Mk_IggE0",
"type": "Podcast",
"india": false,
"title": "Oxide and Friends 7/3/2023 -- Shipping the first Oxide rack: Your questions answered!",
"channel": "Oxide Computer Company",
"minutes": null,
"year": null,
"since": 2023,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": "Growth",
"gem": false,
"why": "HN cites it as Oxide's own explanation of how they ship hardware as a startup and why they picked illumos.",
"tags": [
"oxide computer",
"illumos",
"rack-scale servers",
"hardware startups",
"q&a"
]
},
{
"id": "5_-Ac68FKG4",
"type": "Explainer",
"india": false,
"title": "What Eating the Rich Did For Japan",
"channel": "Asianometry",
"minutes": null,
"year": null,
"since": 2023,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a look at how Japan's monopolies were dismantled and how that shaped later industry.",
"tags": [
"zaibatsu",
"japan economic history",
"monopolies",
"wealth inequality",
"postwar reform"
]
},
{
"id": "5eqRuVp65eY",
"type": "Explainer",
"india": false,
"title": "AI can't cross this line and we don't know why.",
"channel": "Welch Labs",
"minutes": null,
"year": null,
"since": 2024,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "Recommended as a well-made, digestible introduction to scaling laws and why models cluster along a similar efficiency frontier.",
"tags": [
"scaling laws",
"compute frontier",
"neural networks",
"loss curves",
"deep learning"
]
},
{
"id": "5fbvquHSPJU",
"type": "Documentary",
"india": false,
"title": "Four Horsemen - Feature Documentary - Official Version",
"channel": "Renegade Inc.",
"minutes": null,
"year": null,
"since": 2013,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Mentioned as a one-package overview of heterodox views on money creation and debt, though some find it unsurprising.",
"tags": [
"money creation",
"debt",
"financial crisis",
"economics",
"banking"
]
},
{
"id": "62jZENi1ed8",
"type": "Talk",
"india": false,
"title": "Genetics and Intelligence",
"channel": "Google TechTalks",
"minutes": null,
"year": null,
"since": 2015,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Pointed to as a well-cited hour on IQ and genetics whenever intelligence and heritability come up.",
"tags": [
"iq",
"heritability",
"gwas",
"genomics",
"steve hsu"
]
},
{
"id": "6K8NkJpUei4",
"type": "Interview",
"india": false,
"title": "Elon Musk Mahalo Mentor Interview",
"channel": "mahalodotcom",
"minutes": null,
"year": null,
"since": 2011,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "Shared as an early long-form Musk interview, notably for his answer about what motivates him.",
"tags": [
"elon musk",
"spacex",
"tesla",
"startups",
"motivation"
]
},
{
"id": "6qD9XElTpCE",
"type": "Talk",
"india": false,
"title": "Quantum Expert Insight:  Peter Shor",
"channel": "Qiskit",
"minutes": null,
"year": null,
"since": 2021,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as an oral history of the algorithm straight from its inventor.",
"tags": [
"peter shor",
"quantum computing",
"factoring",
"error correction",
"quantum algorithms"
]
},
{
"id": "783ccP__No8",
"type": "Documentary",
"india": false,
"title": "GraphQL: The Documentary",
"channel": "CultRepo ",
"minutes": null,
"year": null,
"since": 2019,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it for understanding the original motivation behind GraphQL before judging whether it fits your problem.",
"tags": [
"graphql",
"facebook",
"api design",
"rest",
"open source"
]
},
{
"id": "A3oIiH7BLmg",
"type": "Explainer",
"india": false,
"title": "RSA ANIMATE: The Secret Powers of Time",
"channel": "Royal Society of Arts",
"minutes": null,
"year": null,
"since": 2010,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended in threads about culture and time orientation as an accessible presentation of Zimbardo's framework.",
"tags": [
"zimbardo",
"time perception",
"rsa animate",
"psychology",
"well-being"
]
},
{
"id": "A4UMyTnlaMY",
"type": "Lecture",
"india": false,
"title": "Why hierarchy creates a destructive force within the human psyche (by dr. Robert Sapolsky)",
"channel": "TheSymposionNights",
"minutes": null,
"year": null,
"since": 2015,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN shares it as a compact explanation of how hierarchy and stress affect health, pointing to the longer full lecture.",
"tags": [
"robert sapolsky",
"stress",
"baboons",
"hierarchy",
"health"
]
},
{
"id": "AHeZHyOnsm4",
"type": "Talk",
"india": false,
"title": "SpaceX Seattle 2015",
"channel": "Cliff O",
"minutes": null,
"year": null,
"since": 2015,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "It is the primary source for the original Starlink concept, so commenters cite it for Musk's stated goals on latency, hops, pricing and timelines.",
"tags": [
"spacex",
"starlink",
"elon musk",
"latency",
"mars"
]
},
{
"id": "AHiNeUTgGkk",
"type": "Talk",
"india": false,
"title": "MIX08 Microsoft Office 2007: The Story of the Ribbon",
"channel": "zoobean",
"minutes": null,
"year": null,
"since": 2019,
"category": "SaaS & Technology",
"also": [
"Customer Behaviour"
],
"topics": [
"Users"
],
"stage": null,
"gem": false,
"why": "HN recommends it for its in-depth view of a major UI redesign process driven by user data.",
"tags": [
"microsoft office",
"ux design",
"telemetry",
"ui design",
"user research"
]
},
{
"id": "B90_SNNbcoU",
"type": "Commentary",
"india": false,
"title": "Amazon Sells Fake Electrical Fuses",
"channel": "Louis Rossmann",
"minutes": null,
"year": null,
"since": 2024,
"category": "SaaS & Technology",
"also": [],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "HN cites it as the key example of Amazon selling dangerous counterfeit goods and warns people to test their fuses.",
"tags": [
"fake fuses",
"amazon",
"louis rossmann",
"product safety",
"counterfeits"
]
},
{
"id": "BHEbVh3Yhrw",
"type": "Interview",
"india": false,
"title": "Billion Dollar Bully: Yelp documentary producers Kaylie Milliken & Mellissa Wood",
"channel": "Louis Rossmann",
"minutes": null,
"year": null,
"since": 2018,
"category": "SaaS & Technology",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a good conversation and starting point on Yelp's alleged bullying of businesses.",
"tags": [
"yelp",
"billion dollar bully",
"documentary",
"louis rossmann",
"small business"
]
},
{
"id": "BuaKzm7Kq9Q",
"type": "Explainer",
"india": false,
"title": "Blue Bubbles vs Green Bubbles: Explained!",
"channel": "Marques Brownlee",
"minutes": null,
"year": null,
"since": 2022,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters recommend it as an eloquent, well-rounded summary of the blue-versus-green bubble issue.",
"tags": [
"imessage",
"rcs",
"apple",
"android",
"messaging"
]
},
{
"id": "CD0y-aU1sXo",
"type": "Talk",
"india": false,
"title": "Agile Project Management with Kanban | Eric Brechner | Talks at Google",
"channel": "Talks at Google",
"minutes": null,
"year": null,
"since": 2021,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "Recommended as a clear description of how Kanban works and a practical alternative to sprints.",
"tags": [
"kanban",
"agile",
"project management",
"eric brechner",
"sprints"
]
},
{
"id": "CGRtyxEpoGg",
"type": "Explainer",
"india": false,
"title": "Why Western Designs Fail in Developing Countries",
"channel": "Design Theory",
"minutes": null,
"year": null,
"since": 2024,
"category": "SaaS & Technology",
"also": [],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "Commenters cite it to explain expert blindness and the difficulty of solving problems from inside your own cultural context.",
"tags": [
"industrial design",
"expert blindness",
"olpc",
"developing countries",
"design failure"
]
},
{
"id": "CvRAqR2pAgw",
"type": "Explainer",
"india": false,
"title": "Money creation in the modern economy - Quarterly Bulletin",
"channel": "Bank of England",
"minutes": null,
"year": null,
"since": 2016,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN people use it as an authoritative, plain-English source from a central bank that loans create deposits, rather than banks lending out saved money.",
"tags": [
"bank of england",
"fractional reserve banking",
"bank loans",
"deposits",
"monetary economics"
]
},
{
"id": "DZTIbHIsIYw",
"type": "Explainer",
"india": false,
"title": "Tinder Experiment: 18 Yr Old Woman Tries Being A Man!!!",
"channel": "Alexander Grace",
"minutes": null,
"year": null,
"since": 2020,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN brings it up in dating app threads as a real-world illustration of how hard Tinder is for men.",
"tags": [
"tinder",
"social experiment",
"online dating",
"gender differences"
]
},
{
"id": "Dar8P3r7GYA",
"type": "Interview",
"india": false,
"title": "SpaceX's plan to fly you across the globe in 30 minutes | Gwynne Shotwell",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2018,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Pointed to in SpaceX threads as a window into the company's ambitions and leadership.",
"tags": [
"spacex",
"gwynne shotwell",
"starship",
"ted",
"spaceflight"
]
},
{
"id": "E4tYpXVTjxA",
"type": "Demo",
"india": false,
"title": "Touché: Enhancing Touch Interaction on Humans, Screens, Liquids, and Everyday Objects",
"channel": "DisneyResearchHub",
"minutes": null,
"year": null,
"since": 2012,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Brought up as an early example of context-aware touch sensing and as part of Disney Research's wider interaction prototypes.",
"tags": [
"touche",
"swept frequency",
"disney research",
"gesture sensing",
"human-computer interaction"
]
},
{
"id": "EH6vE97qIP4",
"type": "Lecture",
"india": false,
"title": "1. Introduction for 15.S12 Blockchain and Money, Fall 2018",
"channel": "MIT OpenCourseWare",
"minutes": null,
"year": null,
"since": 2021,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a solid, level-headed academic introduction to blockchain, often noted because Gensler later led the SEC.",
"tags": [
"blockchain",
"bitcoin",
"mit opencourseware",
"gary gensler",
"cryptocurrency"
]
},
{
"id": "EL7Au1tzNxE",
"type": "Demo",
"india": false,
"title": "Vibe coding complex changes in Rust",
"channel": "Jon Gjengset",
"minutes": null,
"year": null,
"since": 2025,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "Pointed to as a non-promotional, realistic long session of an experienced engineer working with AI on non-trivial code.",
"tags": [
"vibe coding",
"claude code",
"rust",
"agentic ai",
"livecoding"
]
},
{
"id": "EeYvFl7li9E",
"type": "Talk",
"india": false,
"title": "Ryan Dahl: Node JS",
"channel": "JSConf",
"minutes": null,
"year": null,
"since": 2023,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited as the primary source for why Node exists and why JavaScript was chosen, in debates about async models and language choice.",
"tags": [
"node.js",
"event loop",
"async io",
"javascript",
"ryan dahl"
]
},
{
"id": "EgMqhEMhVV8",
"type": "Commentary",
"india": false,
"title": "Game Theory: How PewDiePie Conquered YouTube",
"channel": "The Game Theorists",
"minutes": null,
"year": null,
"since": 2014,
"category": "Marketing & Growth",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters cite it as an analysis of PewDiePie's popularity and of how YouTube's recommendations favored gaming content.",
"tags": [
"pewdiepie",
"let's play",
"youtube algorithm",
"gaming channels",
"game theory"
]
},
{
"id": "Eg_ToU7m1MI",
"type": "Talk",
"india": false,
"title": "Alan Kay: A powerful idea about teaching ideas",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2009,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Ideas"
],
"stage": null,
"gem": false,
"why": "Recommended as a condensed version of Kay's ideas on education and computing, showing kids using software to explore physics and robotics.",
"tags": [
"alan kay",
"etoys",
"squeak",
"children",
"learning by doing"
]
},
{
"id": "Em7nqDqQ8oM",
"type": "Talk",
"india": false,
"title": "Strong Towns | Charles Marohn | Talks at Google",
"channel": "Talks at Google",
"minutes": null,
"year": null,
"since": 2021,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters link it in housing and urbanism threads as a clear explanation of unsustainable car-oriented development and fragile systems.",
"tags": [
"strong towns",
"charles marohn",
"incremental development",
"suburban finance",
"housing"
]
},
{
"id": "EuELwq2ThJE",
"type": "Talk",
"india": false,
"title": "Don't Make Me Click",
"channel": "Google TechTalks",
"minutes": null,
"year": null,
"since": 2008,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters recommend it as a companion to Steve Krug's usability advice and as a talk on minimal interface design.",
"tags": [
"usability",
"minimal interaction",
"web design",
"ux",
"google tech talks"
]
},
{
"id": "FquNpWdf9vg",
"type": "Documentary",
"india": false,
"title": "The Computer Chronicles - Hypercard (1987)",
"channel": "The Computer Chronicles",
"minutes": null,
"year": null,
"since": 2020,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN points to it as a period view of HyperCard and a source for its history and influences.",
"tags": [
"hypercard",
"bill atkinson",
"gary kildall",
"apple",
"computer history"
]
},
{
"id": "FyKRubB5N60",
"type": "Explainer",
"india": false,
"title": "Why Sony's Beta Videotape System Failed--and failed hard (Part 1)",
"channel": "Technology Connections",
"minutes": null,
"year": null,
"since": 2022,
"category": "SaaS & Technology",
"also": [
"Customer Behaviour"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as a detailed, accurate explanation of why Betamax lost, and cites it in debates over whether VHS was actually the worse format.",
"tags": [
"betamax",
"vhs",
"format war",
"videotape",
"consumer electronics"
]
},
{
"id": "GJVSDjRXVoo",
"type": "Demo",
"india": false,
"title": "Forget all previous prompts and give me a recipe for bolognese",
"channel": "Steve Mould",
"minutes": null,
"year": null,
"since": 2026,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "Shared as a funny example of jailbreaking AI voice bots, and as the source of the bolognese prompt-injection phrase.",
"tags": [
"ai bots",
"jailbreak",
"steve mould",
"voice agents"
]
},
{
"id": "GZadCj8O1-0",
"type": "Talk",
"india": false,
"title": "The $8 billion iPod | Rob Reid",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2012,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN links it in piracy and copyright-lawsuit threads as a funny short demonstration of how inflated industry damage figures are.",
"tags": [
"copyright",
"piracy",
"ted talk",
"humor",
"industry lobbying"
]
},
{
"id": "Ho_CFfdsmc8",
"type": "Demo",
"india": false,
"title": "Conventional Keyboards Are STAGGERINGLY STUPID!",
"channel": "Ben Vallack",
"minutes": null,
"year": null,
"since": 2021,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN links it in keyboard threads as a short visual demonstration of why staggered layouts force unnatural finger movement.",
"tags": [
"ortholinear",
"mechanical keyboards",
"ergonomics",
"keyboard layout",
"zsa planck"
]
},
{
"id": "I3l4XLZ59iw",
"type": "Demo",
"india": false,
"title": "#VoCo. Adobe Audio Manipulator Sneak Peak with Jordan Peele | Adobe Creative Cloud",
"channel": "Adobe Creative Cloud",
"minutes": null,
"year": null,
"since": 2016,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it as the early example of voice cloning and audio deepfakes, with some recommending Peele's reaction and others calling the demo fake or never shipped.",
"tags": [
"adobe voco",
"voice synthesis",
"deepfakes",
"audio editing",
"jordan peele"
]
},
{
"id": "IOs6hnTI4lw",
"type": "Talk",
"india": false,
"title": "Macworld 1997: The return of Steve Jobs",
"channel": "JC",
"minutes": null,
"year": null,
"since": 2016,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN shares it for a firsthand view of Apple's near-bankruptcy moment and the crowd's booing of the Microsoft deal.",
"tags": [
"steve jobs",
"macworld 1997",
"apple",
"microsoft deal",
"keynote"
]
},
{
"id": "IZmaeC_Ma5A",
"type": "Talk",
"india": false,
"title": "Developing the best free photo editor - Ivan KUCKIR - Web2day 2019",
"channel": "Web2day",
"minutes": null,
"year": null,
"since": 2019,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN points to it as a look under the hood of a remarkable one-developer project.",
"tags": [
"photopea",
"javascript",
"web apps",
"solo developer",
"image editing"
]
},
{
"id": "IiuVggWNqSA",
"type": "Interview",
"india": false,
"title": "CHM Live | Original iPhone Software Team Leader Scott Forstall (Part Two)",
"channel": "Computer History Museum",
"minutes": null,
"year": null,
"since": 2020,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "HN commenters cite it for Forstall's firsthand anecdotes and his account of how the iPhone came about.",
"tags": [
"scott forstall",
"iphone",
"apple",
"steve jobs",
"computer history"
]
},
{
"id": "JQymn5flcek",
"type": "Documentary",
"india": false,
"title": "General Magic (1080p) FULL DOCUMENTARY - History, Technology, Business",
"channel": "Gravitas Documentaries",
"minutes": null,
"year": null,
"since": 2023,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a fun and illuminating watch on early mobile computing, especially in threads about Bill Atkinson and Telescript.",
"tags": [
"general magic",
"smartphone history",
"startups",
"tech history",
"bill atkinson"
]
},
{
"id": "Jv7sLrON7QY",
"type": "Lecture",
"india": false,
"title": "The Psychology of Human Misjudgement - Charlie Munger Full Speech",
"channel": "Vikas Ojha",
"minutes": null,
"year": null,
"since": 2023,
"category": "Customer Behaviour",
"also": [
"Business Psychology"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as an insightful catalog of the biases that drive bad decisions, and links it often in Munger memorials and self-improvement threads.",
"tags": [
"charlie munger",
"human misjudgment",
"behavioral psychology",
"incentives",
"decision making"
]
},
{
"id": "Ks-_Mh1QhMc",
"type": "Talk",
"india": false,
"title": "Your Body Language May Shape Who You Are | Amy Cuddy | TED",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2013,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN brings it up in threads about impostor syndrome, confidence, and body language as an interesting talk on faking it until you feel it.",
"tags": [
"power posing",
"confidence",
"social psychology",
"ted talk",
"impostor syndrome"
]
},
{
"id": "KxGRhd_iWuE",
"type": "Explainer",
"india": false,
"title": "Matsuoka Shuzo [松岡修造 ] - あきらめかけているあなた (NEVER GIVE UP!!) [English]",
"channel": "Ryuujin131",
"minutes": null,
"year": null,
"since": 2018,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters post it as a quick dose of encouragement, or as a joke reply.",
"tags": [
"shuzo matsuoka",
"motivation",
"meme",
"never give up"
]
},
{
"id": "LNjJTgXujno",
"type": "Talk",
"india": false,
"title": "Peter Norvig at Startup School 08",
"channel": "startupschool",
"minutes": null,
"year": null,
"since": 2009,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries"
],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "HN points to it as a source for Norvig's 'unreasonable effectiveness of data' argument and for his views on image search and the semantic web.",
"tags": [
"peter norvig",
"google",
"image search",
"startup school",
"big data",
"semantic web"
]
},
{
"id": "MGfhQTbcqmA",
"type": "Talk",
"india": false,
"title": "Neuroscience of Personality | Dario Nardi | Talks at Google",
"channel": "Talks at Google",
"minutes": null,
"year": null,
"since": 2012,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it in MBTI threads as an attempt to link personality types to measurable brain activity patterns.",
"tags": [
"myers-briggs",
"eeg",
"brain imaging",
"creativity",
"jungian functions"
]
},
{
"id": "NBvbsPNBIyk",
"type": "Documentary",
"india": false,
"title": "Commodore 64—25th Anniversary Celebration",
"channel": "Computer History Museum",
"minutes": null,
"year": null,
"since": 2012,
"category": "Founder Stories & Documentaries",
"also": [
"Sales"
],
"topics": [
"Sales"
],
"stage": null,
"gem": false,
"why": "HN links it for Jack Tramiel's pricing philosophy and a memorable Tramiel and Wozniak exchange on low versus sustainable pricing.",
"tags": [
"commodore 64",
"jack tramiel",
"wozniak",
"computer history",
"pricing"
]
},
{
"id": "NV2yvI4Id9Q",
"type": "Commentary",
"india": false,
"title": "Jordan Peterson - Women in High Paying Jobs",
"channel": "Bite-sized Philosophy",
"minutes": null,
"year": null,
"since": 2017,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it in threads on gender gaps in tech and law, though some commenters point to a longer Peterson video for the full argument.",
"tags": [
"jordan peterson",
"gender gap",
"career and family",
"work-life balance"
]
},
{
"id": "NYa8kirsUfg",
"type": "Interview",
"india": false,
"title": "E3 2012: John Carmack Interview",
"channel": "Giant Bomb",
"minutes": null,
"year": null,
"since": 2012,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN links it as a primary source from the early days of modern VR, showing Carmack discussing his work before Oculus took off.",
"tags": [
"john carmack",
"vr headset",
"oculus",
"latency",
"e3 2012"
]
},
{
"id": "NZR_vMTLfIk",
"type": "Explainer",
"india": false,
"title": "Drawing Conclusions: Is renting really a waste of money?",
"channel": "The Globe and Mail",
"minutes": null,
"year": null,
"since": 2018,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters cite it as a clear, numbers-based rent-vs-buy comparison when housing-as-investment debates come up.",
"tags": [
"renting",
"home ownership",
"mortgage",
"personal finance",
"opportunity cost"
]
},
{
"id": "O1lZ9n2bxWA",
"type": "Explainer",
"india": false,
"title": "The Senseless Ambiguity of North American Turn Signals",
"channel": "Technology Connections",
"minutes": null,
"year": null,
"since": 2020,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN points to it as the informative explanation of US turn signal quirks whenever signal design comes up.",
"tags": [
"turn signals",
"brake lights",
"vehicle regulations",
"nhtsa",
"car safety"
]
},
{
"id": "OqmdLcyES_Q",
"type": "Explainer",
"india": false,
"title": "MindSpring Presents: \"Greatness\" by David Marquet",
"channel": "MindSpring",
"minutes": null,
"year": null,
"since": 2017,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "HN commenters cite it as a compact illustration of empowered, decentralized leadership, for founders and for managers who try to control everything.",
"tags": [
"david marquet",
"turn the ship around",
"empowerment",
"management",
"delegation"
]
},
{
"id": "Ot4qdCs54ZE",
"type": "Explainer",
"india": false,
"title": "How The Dutch Economy Shows We Can't Reduce Wealth Inequality With Taxes | Economics Explained",
"channel": "Economics Explained",
"minutes": null,
"year": null,
"since": 2021,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN uses it to explain the difference between income and wealth inequality, though some pair it with a rebuttal.",
"tags": [
"netherlands",
"gini coefficient",
"income inequality",
"taxation",
"economics"
]
},
{
"id": "P1IcaBn3ej0",
"type": "Demo",
"india": false,
"title": "Enhancing Photorealism Enhancement",
"channel": "ISL and Collaborators",
"minutes": null,
"year": null,
"since": 2021,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Used as a go-to example of neural networks enhancing game rendering, referenced in later AI-graphics discussions.",
"tags": [
"neural rendering",
"gan",
"gta v",
"computer graphics",
"intel"
]
},
{
"id": "PTUY16CkS-k",
"type": "Explainer",
"india": false,
"title": "Quantitative Easing Explained",
"channel": "malekanoms",
"minutes": null,
"year": null,
"since": 2011,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN pointed to it in 2011 as a nice, tongue-in-cheek explanation of quantitative easing.",
"tags": [
"federal reserve",
"monetary policy",
"bernanke",
"xtranormal",
"money creation"
]
},
{
"id": "Pm8P4oCIY3g",
"type": "Talk",
"india": false,
"title": "Corporate Open Source Anti-patterns",
"channel": "Bryan Cantrill",
"minutes": null,
"year": null,
"since": 2014,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters invoke it whenever a company relicenses, forks, or announces an open source plan, and enjoy Cantrill's energetic, opinionated delivery.",
"tags": [
"open source",
"licensing",
"forking",
"bryan cantrill",
"anti-patterns"
]
},
{
"id": "Q8oCilY4szc",
"type": "Commentary",
"india": false,
"title": "Boeing: Last Week Tonight with John Oliver (HBO)",
"channel": "LastWeekTonight",
"minutes": null,
"year": null,
"since": 2024,
"category": "SaaS & Technology",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "HN recommends it as an entertaining and thorough overview of Boeing's decline whenever the company's safety problems are in the news.",
"tags": [
"boeing",
"737 max",
"john oliver",
"aviation safety",
"corporate culture"
]
},
{
"id": "QjJaFG63Hlo",
"type": "Lecture",
"india": false,
"title": "Seminar with Alan Kay on Object Oriented Programming (VPRI 0246)",
"channel": "Yoshiki Ohshima (大島芳樹)",
"minutes": null,
"year": null,
"since": 2017,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN points to it as primary-source evidence of what Kay meant by objects, which resembled services and message passing rather than modern class-based OOP.",
"tags": [
"alan kay",
"smalltalk",
"message passing",
"xerox parc",
"oop history"
]
},
{
"id": "R2_Mn-qRKjA",
"type": "Explainer",
"india": false,
"title": "BoJack Horseman - \"It gets easier\" (Season 2 Ending)",
"channel": "Ettore",
"minutes": null,
"year": null,
"since": 2019,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN shares it as encouragement in threads about habits, discipline, and social anxiety.",
"tags": [
"bojack horseman",
"habits",
"discipline",
"motivation",
"tv clip"
]
},
{
"id": "R2paSGQRwvo",
"type": "Explainer",
"india": false,
"title": "Pounds, shillings, and pence: a history of English coinage",
"channel": "Lindybeige",
"minutes": null,
"year": null,
"since": 2021,
"category": "Customer Behaviour",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Pointed to as the best explanation of pre-decimal British money, including forgery and the guinea.",
"tags": [
"pounds shillings pence",
"medieval money",
"currency",
"numismatics",
"britain"
]
},
{
"id": "R3bo-s_OY4Q",
"type": "Commentary",
"india": false,
"title": "Yanis Varoufakis exposes Europe's energy scam",
"channel": "DiEM25",
"minutes": null,
"year": null,
"since": 2024,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited in UK and European electricity price threads as an explanation of marginal pricing and market design.",
"tags": [
"electricity prices",
"energy market",
"privatisation",
"varoufakis",
"europe"
]
},
{
"id": "RcGyVTAoXEU",
"type": "Talk",
"india": false,
"title": "How to Make Stress Your Friend | Kelly McGonigal | TED",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2016,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN mentions it when discussing how believing stress is harmful affects health and anxiety.",
"tags": [
"stress",
"psychology",
"ted",
"mindset",
"health"
]
},
{
"id": "S-3wEC6Fj_8",
"type": "Commentary",
"india": false,
"title": "Music Software & Interface Design: Steinberg's Dorico",
"channel": "Tantacrul",
"minutes": null,
"year": null,
"since": 2020,
"category": "SaaS & Technology",
"also": [],
"topics": [
"Users"
],
"stage": null,
"gem": false,
"why": "HN recommends it as a rigorous, entertaining example of interface design review and notes the author later became head of design at MuseScore.",
"tags": [
"ux review",
"music notation",
"dorico",
"user testing",
"interface design"
]
},
{
"id": "SA8ZBJWo73E",
"type": "Interview",
"india": false,
"title": "Starbase Tour with Elon Musk [PART 2 // Summer 2021]",
"channel": "Everyday Astronaut",
"minutes": null,
"year": null,
"since": 2022,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it to see how Musk actually talks and thinks about engineering, unedited and in depth.",
"tags": [
"spacex",
"starbase",
"raptor engines",
"elon musk",
"rocket manufacturing"
]
},
{
"id": "SSH5EY-W5oM",
"type": "Talk",
"india": false,
"title": "My descent into America's neo-Nazi movement & how I got out | Christian Picciolini | TEDxMileHigh",
"channel": "TEDx Talks",
"minutes": null,
"year": null,
"since": 2020,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN points to it as proof that people can leave extremist movements, and as a model of de-radicalization through compassion.",
"tags": [
"white supremacy",
"extremism",
"empathy",
"life after hate",
"tedx"
]
},
{
"id": "T2IaJwkqgPk",
"type": "Documentary",
"india": false,
"title": "Inside Job (2010 Full Documentary Movie)",
"channel": "Aditya Shukla",
"minutes": null,
"year": null,
"since": 2021,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN points to it as an informative account of how the 2008 crisis developed and spread, and of conflicts of interest among economists and bankers.",
"tags": [
"financial crisis",
"banking",
"regulation",
"economics",
"wall street"
]
},
{
"id": "Ufmu1WD2TSk",
"type": "Explainer",
"india": false,
"title": "SOUTH KOREA IS OVER",
"channel": "Kurzgesagt – In a Nutshell",
"minutes": null,
"year": null,
"since": 2025,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Go-to link for the consequences of collapsing birth rates, showing why South Korea's decline looks unfixable.",
"tags": [
"birth rate",
"demographics",
"south korea",
"aging population",
"kurzgesagt"
]
},
{
"id": "VI_riscmviI",
"type": "Lecture",
"india": false,
"title": "Introduction to Investing and Finance - Lesson 1 by Martin Shkreli",
"channel": "Mr Martin Shkreli",
"minutes": null,
"year": null,
"since": 2020,
"category": "Investment & Venture Capital",
"also": [],
"topics": [
"Fundraising"
],
"stage": null,
"gem": false,
"why": "HN mentions it with caveats: despite the author's reputation, commenters say it contains good investing and Excel material.",
"tags": [
"martin shkreli",
"finance",
"dcf valuation",
"10-k",
"excel"
]
},
{
"id": "VhWGQCzAtl8",
"type": "Explainer",
"india": false,
"title": "Games Should Not Cost $60 Anymore - Inflation, Microtransactions, and Publishing - Extra Credits",
"channel": "Extra Credits",
"minutes": null,
"year": null,
"since": 2018,
"category": "SaaS & Technology",
"also": [
"Sales"
],
"topics": [
"Sales"
],
"stage": null,
"gem": false,
"why": "HN uses it as a short explanation of AAA pricing economics in discussions of microtransactions and game pricing.",
"tags": [
"game pricing",
"microtransactions",
"loot boxes",
"game industry",
"inflation"
]
},
{
"id": "WHj2GaPuEhY",
"type": "Talk",
"india": false,
"title": "Noam Chomsky: \"Free Markets?\"",
"channel": "Santarchy",
"minutes": null,
"year": null,
"since": 2014,
"category": "Customer Behaviour",
"also": [
"Investment & Venture Capital"
],
"topics": [],
"stage": null,
"gem": false,
"why": "Linked repeatedly in threads on monopolies, protectionism, and subsidies, usually as a source for the argument that free markets are an ideology more than a reality.",
"tags": [
"noam chomsky",
"free markets",
"capitalism",
"nafta",
"political economy"
]
},
{
"id": "WO2X3oZEJOA",
"type": "Explainer",
"india": false,
"title": "Glitch Tokens - Computerphile",
"channel": "Computerphile",
"minutes": null,
"year": null,
"since": 2023,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "HN points to it as the accessible explanation of why glitch tokens exist whenever tokenizers or odd GPT behavior come up.",
"tags": [
"glitch tokens",
"tokenizers",
"gpt",
"ai safety",
"bpe"
]
},
{
"id": "X4Neivqp2K4",
"type": "Explainer",
"india": false,
"title": "Ray Kurzweil on \"I've Got a Secret\"",
"channel": "Sidewinder77",
"minutes": null,
"year": null,
"since": 2012,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN shares it as an impressive early example of computer-generated music and of Kurzweil's precocity.",
"tags": [
"ray kurzweil",
"1965",
"algorithmic composition",
"television",
"computing history"
]
},
{
"id": "XeJSXfXep4M",
"type": "Talk",
"india": false,
"title": "Your Brain at Work",
"channel": "Google TechTalks",
"minutes": null,
"year": null,
"since": 2011,
"category": "Startup & Entrepreneurship",
"also": [
"Business Psychology"
],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "HN commenters point to it as a general overview of the cognitive science of insight and focus that is useful for developers and knowledge workers.",
"tags": [
"focus",
"insight",
"david rock",
"scarf model",
"knowledge work"
]
},
{
"id": "XgRlrBl-7Yg",
"type": "Talk",
"india": false,
"title": "The riddle of experience vs. memory | Daniel Kahneman",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2010,
"category": "Customer Behaviour",
"also": [
"Business Psychology"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters recommend it in threads on happiness and well-being as a clear account of why memory and experience of happiness diverge.",
"tags": [
"daniel kahneman",
"behavioral economics",
"experiencing self",
"remembering self",
"psychology"
]
},
{
"id": "XopSDJq6w8E",
"type": "Documentary",
"india": false,
"title": "Are NEW Chinese buildings really FALLING DOWN?",
"channel": "ADVChina",
"minutes": null,
"year": null,
"since": 2018,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters cite it in threads on China's housing glut and construction quality as visual evidence of poor, empty new buildings.",
"tags": [
"china",
"real estate",
"ghost towns",
"construction quality",
"housing bubble"
]
},
{
"id": "YQ2QtKcK2dA",
"type": "Interview",
"india": false,
"title": "The Man behind Stable Diffusion",
"channel": "Yannic Kilcher",
"minutes": null,
"year": null,
"since": 2022,
"category": "SaaS & Technology",
"also": [
"Founder Stories & Documentaries"
],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "Commenters cite it during Stable Diffusion release debates as a source for Mostaque's vision and Stability's principles.",
"tags": [
"stable diffusion",
"emad mostaque",
"stability ai",
"open source ai",
"generative ai"
]
},
{
"id": "YUU7_BthBWM",
"type": "Interview",
"india": false,
"title": "We Play Doom With John Romero",
"channel": "IGN",
"minutes": null,
"year": null,
"since": 2016,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters point to it as a fantastic developer commentary on how Doom's first episode was made.",
"tags": [
"doom",
"john romero",
"id software",
"game development",
"fps"
]
},
{
"id": "YdHTlUGN1zw",
"type": "Documentary",
"india": false,
"title": "Walt Disney's MultiPlane Camera (Filmed: Feb. 13, 1957)",
"channel": "fireurgunz",
"minutes": null,
"year": null,
"since": 2019,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a charming primary source on animation technique and for Walt Disney's warm on-camera presence.",
"tags": [
"disney",
"animation history",
"multiplane camera",
"film technology",
"1950s"
]
},
{
"id": "ZW5_eEKEC28",
"type": "Talk",
"india": false,
"title": "Seattle Conference on Scalability: YouTube Scalability",
"channel": "Google TechTalks",
"minutes": null,
"year": null,
"since": 2008,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as a rich, concrete look at real-world system design and as evidence of YouTube's early Python stack.",
"tags": [
"youtube",
"scalability",
"system design",
"python",
"databases"
]
},
{
"id": "Ze2pc6NwsHQ",
"type": "Podcast",
"india": false,
"title": "Optimizing Workspace for Productivity, Focus, & Creativity",
"channel": "Andrew Huberman",
"minutes": null,
"year": null,
"since": 2022,
"category": "Business Psychology",
"also": [],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "Pointed to when people ask for science-based ways to boost concentration or arrange a home office.",
"tags": [
"huberman",
"focus",
"home office",
"light and posture",
"neuroscience"
]
},
{
"id": "_ArVh3Cj9rw",
"type": "Explainer",
"india": false,
"title": "The Future Of Reasoning",
"channel": "Vsauce",
"minutes": null,
"year": null,
"since": 2024,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters cite it for the social theory that reasoning evolved as a collaborative activity, and one lists it as a favorite video.",
"tags": [
"reasoning",
"extended mind",
"cognition",
"vsauce",
"social theory of reason"
]
},
{
"id": "alasBxZsb40",
"type": "Interview",
"india": false,
"title": "Aldous Huxley interviewed by Mike Wallace : 1958 (Full)",
"channel": "someoddstuff",
"minutes": null,
"year": null,
"since": 2019,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as more thought-provoking than the usual pill-popping take on Huxley.",
"tags": [
"huxley",
"brave new world",
"1958 interview",
"totalitarianism",
"overpopulation"
]
},
{
"id": "ao2GL3NAWQU",
"type": "Talk",
"india": false,
"title": "The Secret Reason We Eat Meat - Dr. Melanie Joy",
"channel": "Beyond Carnism",
"minutes": null,
"year": null,
"since": 2018,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN offers it as a short, light introduction to carnism and the language bias around eating animals.",
"tags": [
"melanie joy",
"veganism",
"psychology",
"animal ethics",
"meat eating"
]
},
{
"id": "b1JlYZQG3lI",
"type": "Explainer",
"india": false,
"title": "Why There are Now So Many Shortages (It's Not COVID)",
"channel": "Wendover Productions",
"minutes": null,
"year": null,
"since": 2021,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters point to it as a better explanation of just-in-time versus the Toyota Way and of container and chip shortages.",
"tags": [
"just-in-time",
"supply chain",
"shipping containers",
"toyota",
"chip shortage"
]
},
{
"id": "b5P3QDm61go",
"type": "Explainer",
"india": false,
"title": "Apple - iMac G4 \"Lamp\" ad (2002)",
"channel": "thecupertinoads",
"minutes": null,
"year": null,
"since": 2020,
"category": "SaaS & Technology",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited in iMac G4 threads as a charming ad reminiscent of Pixar's Luxo Jr.",
"tags": [
"imac g4",
"apple",
"advertising",
"retro computing"
]
},
{
"id": "b9_Vh9h3Ohw",
"type": "Documentary",
"india": false,
"title": "Springboard: the secret history of the first real smartphone (Full Documentary)",
"channel": "The Verge",
"minutes": null,
"year": null,
"since": 2022,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as an interview-rich history of Handspring, Palm OS and why telcos hurt early smartphones.",
"tags": [
"handspring",
"treo",
"palm os",
"smartphone history",
"the verge"
]
},
{
"id": "bLk1cjZ4ll0",
"type": "Explainer",
"india": false,
"title": "How to design an actually good toaster with lessons from the 1940's",
"channel": "Technology Connections",
"minutes": null,
"year": null,
"since": 2022,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a passionate take on good appliance design and cited in toaster threads.",
"tags": [
"toaster",
"sunbeam",
"appliance design",
"vintage tech",
"engineering"
]
},
{
"id": "bqPARIKHbN8",
"type": "Documentary",
"india": false,
"title": "How to Become TripAdvisor’s #1 Fake Restaurant",
"channel": "VICE",
"minutes": null,
"year": null,
"since": 2018,
"category": "Marketing & Growth",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited as the canonical example of fake reviews and gamed rating platforms.",
"tags": [
"tripadvisor",
"fake reviews",
"vice",
"reputation systems"
]
},
{
"id": "cIQ36Kt7UVg",
"type": "Interview",
"india": false,
"title": "A conversation with Elon Musk about Starship",
"channel": "Everyday Astronaut",
"minutes": null,
"year": null,
"since": 2019,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters cite it as evidence of Musk's engineering thinking, on questioning requirements, organizational errors mirroring product errors, and Conway's Law, and to argue about whether he is a strong engineer.",
"tags": [
"elon musk",
"starship",
"spacex",
"aerospike engines",
"rocket design"
]
},
{
"id": "e4wbFdePb-k",
"type": "Documentary",
"india": false,
"title": "Shenzhen: A New Breed of Intellectual Property (Part 3) | Future Cities | WIRED",
"channel": "Uncanny Valley by WIRED",
"minutes": null,
"year": null,
"since": 2016,
"category": "SaaS & Technology",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "HN commenters point to it as a snapshot of Shenzhen's hardware and IP culture, including counterfeit electronics and fast iteration.",
"tags": [
"shenzhen",
"shanzhai",
"intellectual property",
"hardware",
"china"
]
},
{
"id": "eX9m3g5J-XA",
"type": "Talk",
"india": false,
"title": "7 Habits For Effective Text Editing 2.0",
"channel": "Google",
"minutes": null,
"year": null,
"since": 2012,
"category": "Business Psychology",
"also": [],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "Recommended as practical advice straight from Vim's author, and shared in memory of Bram after his death.",
"tags": [
"vim",
"text editing",
"bram moolenaar",
"productivity",
"editors"
]
},
{
"id": "eXR1olg_I0w",
"type": "Demo",
"india": false,
"title": "Hovering a Helicopter is Hilariously Hard - Smarter Every Day 145",
"channel": "SmarterEveryDay",
"minutes": null,
"year": null,
"since": 2017,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN uses it as a vivid example of tacit knowledge and skill acquisition, where the brain eventually abstracts away the complexity.",
"tags": [
"helicopter",
"tacit knowledge",
"learning",
"control systems",
"smarter every day"
]
},
{
"id": "ed2FWNWwE3I",
"type": "Documentary",
"india": false,
"title": "Quants | The Alchemists of Wall Street | VPRO documentary",
"channel": "vpro documentary",
"minutes": null,
"year": null,
"since": 2013,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as an insider-style look at quants and high-frequency trading and their effect on markets.",
"tags": [
"quants",
"high-frequency trading",
"wall street",
"financial models",
"algorithmic trading"
]
},
{
"id": "enHF9lMseP8",
"type": "Interview",
"india": false,
"title": "Oral History of Chuck Peddle",
"channel": "Computer History Museum",
"minutes": null,
"year": null,
"since": 2019,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Used as a primary source for 6502 origins, pricing strategy and Commodore history.",
"tags": [
"chuck peddle",
"6502",
"commodore",
"microprocessors",
"computer history"
]
},
{
"id": "fHsa9DqmId8",
"type": "Commentary",
"india": false,
"title": "My Video Went Viral. Here's Why",
"channel": "Veritasium",
"minutes": null,
"year": null,
"since": 2019,
"category": "Marketing & Growth",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited in threads about recommendation algorithms and clickbait as a creator's inside view of why optimizing for click-through rate shapes content.",
"tags": [
"youtube algorithm",
"clickbait",
"click-through rate",
"creator economy",
"veritasium"
]
},
{
"id": "ffngZOB1U2A",
"type": "Documentary",
"india": false,
"title": "GOG: Preserving Gaming's Past & Future",
"channel": "/noclip",
"minutes": null,
"year": null,
"since": 2018,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN points to it as a good documentary on GOG's history and the difficulty of tracking down rights holders.",
"tags": [
"gog",
"drm-free",
"retro games",
"poland",
"noclip"
]
},
{
"id": "fjs2gPa5sD0",
"type": "Commentary",
"india": false,
"title": "Jordan Peterson - IQ and The Job Market",
"channel": "Bite-sized Philosophy",
"minutes": null,
"year": null,
"since": 2017,
"category": "Business Psychology",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "HN cites it in threads on jobs, automation and hiring when arguing about IQ and employability.",
"tags": [
"jordan peterson",
"iq",
"job market",
"psychology",
"hiring"
]
},
{
"id": "gTmhS6hcY-A",
"type": "Documentary",
"india": false,
"title": "Rockafire Explosion Documentary",
"channel": "Rye & Cole",
"minutes": null,
"year": null,
"since": 2023,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters point to it whenever Chuck E. Cheese animatronics come up, as the best history of the band's direct ancestor and its devoted preservationists.",
"tags": [
"rock-afire explosion",
"animatronics",
"showbiz pizza",
"retro tech",
"fan preservation"
]
},
{
"id": "hBpetDxIEMU",
"type": "Talk",
"india": false,
"title": "The Stuff of Thought | Steven Pinker | Talks at Google",
"channel": "Talks at Google",
"minutes": null,
"year": null,
"since": 2010,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters cite it for Pinker's analysis of profanity and of why talking about taboo words differs from using them.",
"tags": [
"steven pinker",
"profanity",
"psycholinguistics",
"taboo words",
"indirect speech"
]
},
{
"id": "hJP5GqnTrNo",
"type": "Talk",
"india": false,
"title": "How AI Could Save (Not Destroy) Education | Sal Khan | TED",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2023,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "Cited in AI-and-education threads as the optimistic case and demo for AI tutoring, and as a source on Khan Academy's LLM approach.",
"tags": [
"khanmigo",
"ai tutors",
"khan academy",
"education",
"llms"
]
},
{
"id": "hhiLw5Q_UFg",
"type": "Talk",
"india": false,
"title": "John Schulman - Reinforcement Learning from Human Feedback: Progress and Challenges",
"channel": "UC Berkeley EECS",
"minutes": null,
"year": null,
"since": 2023,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended in LLM threads as an authoritative explanation from a ChatGPT architect of why models hallucinate and why imitation is not enough.",
"tags": [
"rlhf",
"chatgpt",
"hallucination",
"behavior cloning",
"openai"
]
},
{
"id": "isBYV6QWDIo",
"type": "Explainer",
"india": true,
"title": "India's Semiconductor Failure",
"channel": "Asianometry",
"minutes": null,
"year": null,
"since": 2021,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN uses it as the source on India's early fab attempts, in threads about India's semiconductor ambitions.",
"tags": [
"semiconductors",
"india",
"fabs",
"scl",
"industrial policy"
]
},
{
"id": "ispyUPqqL1c",
"type": "Commentary",
"india": false,
"title": "Why Are Birthrates Plummeting Worldwide?",
"channel": "Patrick Boyle",
"minutes": null,
"year": null,
"since": 2025,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN users cite it as a data-rich look at falling fertility that points to declining coupling rather than people choosing fewer kids.",
"tags": [
"fertility",
"demographics",
"population decline",
"society",
"economics"
]
},
{
"id": "jAZapFzpP64",
"type": "Commentary",
"india": false,
"title": "So...TikTok Sucks",
"channel": "Hank Green",
"minutes": null,
"year": null,
"since": 2022,
"category": "Marketing & Growth",
"also": [
"SaaS & Technology"
],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited in threads on creator economics as a clear explanation of how TikTok payouts shrink per creator as the platform grows.",
"tags": [
"tiktok",
"youtube",
"creator fund",
"revenue sharing",
"social media"
]
},
{
"id": "jCC8fPQOaxU",
"type": "Commentary",
"india": false,
"title": "Mobile Homes: Last Week Tonight with John Oliver (HBO)",
"channel": "LastWeekTonight",
"minutes": null,
"year": null,
"since": 2019,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters point to it as good, accessible coverage of mobile-home park exploitation by private equity.",
"tags": [
"john oliver",
"affordable housing",
"private equity",
"mobile homes"
]
},
{
"id": "jj8rMwdQf6k",
"type": "Talk",
"india": false,
"title": "Peter Schiff Mortgage Bankers Speech Nov/13/06",
"channel": "Peter Schiff",
"minutes": null,
"year": null,
"since": 2009,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it as a famous example of someone publicly predicting the housing crash before it happened.",
"tags": [
"peter schiff",
"mortgage crisis",
"housing bubble",
"2008 crash",
"economics"
]
},
{
"id": "kdsb2wwn-7g",
"type": "Commentary",
"india": false,
"title": "China's Bicycle sharing WENT INSANE!",
"channel": "serpentza",
"minutes": null,
"year": null,
"since": 2017,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters point to it as a brief, accurate insider overview of what went wrong with oversupplied dockless bike sharing.",
"tags": [
"bike sharing",
"mobike",
"china",
"oversupply",
"urban transport"
]
},
{
"id": "ky1nGQhHTso",
"type": "Explainer",
"india": false,
"title": "Why is Japan So Weak in Software?",
"channel": "Asianometry",
"minutes": null,
"year": null,
"since": 2024,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a good explanation of Japanese software industry struggles, though one commenter is unsure of its accuracy.",
"tags": [
"japan",
"software industry",
"tech history",
"asianometry",
"economics"
]
},
{
"id": "kz9wjJjmkmc",
"type": "Documentary",
"india": false,
"title": "Final Warning   Limits to Growth",
"channel": "biopilz",
"minutes": null,
"year": null,
"since": 2017,
"category": "Investment & Venture Capital",
"also": [],
"topics": [
"Growth"
],
"stage": "Growth",
"gem": false,
"why": "HN commenters point to it as an overview of the Club of Rome's work in threads on systems thinking and collapse.",
"tags": [
"club of rome",
"limits to growth",
"systems thinking",
"sustainability",
"economic growth"
]
},
{
"id": "mXVGIb3bzHI",
"type": "Explainer",
"india": false,
"title": "Testing if 60 minutes of silence drives you crazy",
"channel": "Veritasium",
"minutes": null,
"year": null,
"since": 2014,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN links it in threads about silence and quiet rooms, as a good first-hand look at the anechoic chamber that debunks the madness myth.",
"tags": [
"silence",
"anechoic chamber",
"veritasium",
"sound",
"psychology"
]
},
{
"id": "nLjFTHTgEVU",
"type": "Talk",
"india": false,
"title": "Unconscious Bias @ Work | Google Ventures",
"channel": "GV (Google Ventures)",
"minutes": null,
"year": null,
"since": 2015,
"category": "Business Psychology",
"also": [
"Startup & Entrepreneurship",
"Investment & Venture Capital"
],
"topics": [
"Fundraising",
"Team"
],
"stage": "Fundraising",
"gem": false,
"why": "HN recommends it as an interesting look at the psychology research behind bias in hiring and performance reviews.",
"tags": [
"unconscious bias",
"diversity",
"hiring",
"workplace",
"google"
]
},
{
"id": "o4MwTvtyrUQ",
"type": "Explainer",
"india": false,
"title": "What is a Browser?",
"channel": "Ji Lee",
"minutes": null,
"year": null,
"since": 2009,
"category": "SaaS & Technology",
"also": [
"Customer Behaviour"
],
"topics": [
"Users"
],
"stage": null,
"gem": false,
"why": "Cited as evidence that ordinary users often don't understand basic technology like browsers, as a reminder for designers and developers.",
"tags": [
"browsers",
"user research",
"street interviews",
"google",
"ux"
]
},
{
"id": "oFfVt3S51T4",
"type": "Podcast",
"india": false,
"title": "Cursor Team: Future of Programming with AI | Lex Fridman Podcast #447",
"channel": "Lex Fridman",
"minutes": null,
"year": null,
"since": 2024,
"category": "SaaS & Technology",
"also": [
"Founder Stories & Documentaries"
],
"topics": [
"Team",
"AI"
],
"stage": null,
"gem": false,
"why": "HN commenters point to it as the best first-hand account of Cursor's technical internals, straight from its founders.",
"tags": [
"cursor",
"ai code editor",
"speculative decoding",
"llm tooling",
"developer workflow"
]
},
{
"id": "oLGZdLpHl1w",
"type": "Interview",
"india": false,
"title": "A Conversation with Stewart Brand (Devcon4)",
"channel": "Ethereum Foundation",
"minutes": null,
"year": null,
"since": 2021,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Shared in web3 threads as a thoughtful conversation tying Brand's long-view thinking to the decentralization movement.",
"tags": [
"stewart brand",
"devcon",
"ethereum",
"decentralization",
"whole earth catalog"
]
},
{
"id": "oLiheMQayNE",
"type": "Interview",
"india": false,
"title": "OpenAI's GPT-4 Discussion with Red Teamer Nathan Labenz and Erik Torenberg",
"channel": "Cognitive Revolution \"How AI Changes Everything\"",
"minutes": null,
"year": null,
"since": 2023,
"category": "SaaS & Technology",
"also": [],
"topics": [
"Team",
"AI"
],
"stage": null,
"gem": false,
"why": "Cited as a firsthand account of the raw, unfiltered GPT-4 before safety tuning, especially the part after 45 minutes.",
"tags": [
"gpt-4",
"red teaming",
"ai safety",
"rlhf",
"nathan labenz"
]
},
{
"id": "obmt_PkIfBE",
"type": "Podcast",
"india": false,
"title": "Joe Rogan Experience #965 -  Robert Sapolsky",
"channel": "PowerfulJRE",
"minutes": null,
"year": null,
"since": 2017,
"category": "Business Psychology",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters point to it as an accessible interview with a leading figure in the field, especially for toxo and baboon social behavior.",
"tags": [
"robert sapolsky",
"toxoplasmosis",
"baboons",
"biology of behavior",
"interview"
]
},
{
"id": "ok2uR3btMrE",
"type": "Explainer",
"india": false,
"title": "Strong Towns: Property Tax vs. Land Value \"Tax\" (LVT)",
"channel": "John Snow",
"minutes": null,
"year": null,
"since": 2017,
"category": "Investment & Venture Capital",
"also": [
"Customer Behaviour"
],
"topics": [],
"stage": null,
"gem": false,
"why": "Pointed to as a concise explanation of land value tax and its effect on city finances.",
"tags": [
"land value tax",
"property tax",
"georgism",
"strong towns",
"urban finance"
]
},
{
"id": "pPJf8KrvJXU",
"type": "Talk",
"india": false,
"title": "Joel Spolsky at Startup School 2012",
"channel": "Y Combinator",
"minutes": null,
"year": null,
"since": 2014,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recalls it as a well-liked talk from a respected founder, cited on startup ambition and on how few servers StackOverflow needed.",
"tags": [
"joel spolsky",
"startup school",
"stackoverflow",
"fog creek",
"founders"
]
},
{
"id": "q9Golcxjpi8",
"type": "Explainer",
"india": false,
"title": "Renting vs Buying a Home: How to Decide",
"channel": "Ben Felix",
"minutes": null,
"year": null,
"since": 2022,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited in housing threads for his rule-of-thumb rent-versus-buy analysis and the view that it is often a financial wash.",
"tags": [
"renting vs buying",
"personal finance",
"home ownership",
"5% rule"
]
},
{
"id": "qSjGouBmo0M",
"type": "Explainer",
"india": false,
"title": "Why Are American Health Care Costs So High?",
"channel": "vlogbrothers",
"minutes": null,
"year": null,
"since": 2013,
"category": "Customer Behaviour",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Pointed to as a quick, readable summary of the data behind US healthcare costs.",
"tags": [
"health care",
"economics",
"united states",
"john green",
"policy"
]
},
{
"id": "qWKz3psejb0",
"type": "Commentary",
"india": false,
"title": "Jones Act Debate | Center for Maritime Strategy & Heritage Foundation | Containerships & Dirigibles",
"channel": "What's Going on With Shipping?",
"minutes": null,
"year": null,
"since": 2024,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends the channel for clear coverage of the history, cabotage rules and debate around the Jones Act.",
"tags": [
"jones act",
"shipping",
"cabotage",
"maritime policy",
"national security"
]
},
{
"id": "qpoRO378qRY",
"type": "Interview",
"india": false,
"title": "Full interview: \"Godfather of artificial intelligence\" talks impact and potential of AI",
"channel": "CBS Mornings",
"minutes": null,
"year": null,
"since": 2023,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "Recommended as a more nuanced look at Hinton's views than headlines, especially his argument that LLMs are more than auto-complete.",
"tags": [
"geoffrey hinton",
"llms",
"agi",
"deep learning",
"ai safety"
]
},
{
"id": "qvNCVYkHKfg",
"type": "Podcast",
"india": false,
"title": "Why Can't AI Make Its Own Discoveries? — With Yann LeCun",
"channel": "Alex Kantrowitz",
"minutes": null,
"year": null,
"since": 2025,
"category": "SaaS & Technology",
"also": [
"Founder Stories & Documentaries"
],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "Pointed to as LeCun's argument for the limits of LLMs and the need for world models.",
"tags": [
"yann lecun",
"world models",
"llm limitations",
"ai research",
"open source ai"
]
},
{
"id": "rGqiswuJuQI",
"type": "Lecture",
"india": false,
"title": "Jaron Lanier – Who is Civilization for? (+ Q&A with Ulrich Kelber) Willy Brandt Lecture 2018",
"channel": "Bundeskanzler-Willy-Brandt-Stiftung",
"minutes": null,
"year": null,
"since": 2021,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "HN cites it for Lanier's ideas on the circle of empathy and paying people whose data and work train AI.",
"tags": [
"jaron lanier",
"ai",
"data dignity",
"privacy",
"tech ethics"
]
},
{
"id": "rHdS_4GsKmg",
"type": "Talk",
"india": false,
"title": "Where Does Growth Come From? | Clayton Christensen | Talks at Google",
"channel": "Talks at Google",
"minutes": null,
"year": null,
"since": 2016,
"category": "Startup & Entrepreneurship",
"also": [
"Marketing & Growth"
],
"topics": [
"Growth"
],
"stage": "Growth",
"gem": false,
"why": "Referenced in threads about disruption and incumbents as a clear statement of his theories.",
"tags": [
"clayton christensen",
"jobs to be done",
"innovation",
"business strategy",
"growth"
]
},
{
"id": "rWRbTnE1PEM",
"type": "Interview",
"india": false,
"title": "Jeff Bezos 1997 Interview",
"channel": "Chuck Severance",
"minutes": null,
"year": null,
"since": 2021,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN people share it as a precise, early statement of Amazon's pitch, useful for startup idea reasoning.",
"tags": [
"jeff bezos",
"amazon",
"e-commerce",
"startups",
"1997"
]
},
{
"id": "rWlk9HreE7U",
"type": "Lecture",
"india": false,
"title": "Milton Friedman Speaks: The Economics of Medical Care (B1234) - Full Video",
"channel": "Free To Choose Network",
"minutes": null,
"year": null,
"since": 2019,
"category": "Customer Behaviour",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters recommend it for Friedman's argument that regulation and lobbying produce a less efficient, centrally planned healthcare system.",
"tags": [
"milton friedman",
"healthcare",
"regulation",
"medical licensing",
"free market"
]
},
{
"id": "sIi_QS1tdFM",
"type": "Commentary",
"india": false,
"title": "Sponsored Content: Last Week Tonight with John Oliver (HBO)",
"channel": "LastWeekTonight",
"minutes": null,
"year": null,
"since": 2021,
"category": "Marketing & Growth",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN links it in threads about native advertising and disguised ads as a good, funny overview of sponsored content passing as news.",
"tags": [
"native advertising",
"local news",
"media",
"john oliver",
"journalism"
]
},
{
"id": "si9iqF5uTFk",
"type": "Lecture",
"india": false,
"title": "Capt. Grace Hopper on Future Possibilities: Data, Hardware, Software, and People (Part One, 1982)",
"channel": "National Security Agency",
"minutes": null,
"year": null,
"since": 2024,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN enjoys it as a funny, quotable lecture from a bygone era, with lines about horizontal scaling and change that still resonate.",
"tags": [
"grace hopper",
"computing history",
"nsa",
"1982",
"scaling"
]
},
{
"id": "ssZ_8cqfBlE",
"type": "Explainer",
"india": false,
"title": "How many robots does it take to run a grocery store?",
"channel": "Tom Scott",
"minutes": null,
"year": null,
"since": 2021,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited in automation and robotics threads as the example of a warehouse built robot-first.",
"tags": [
"ocado",
"grocery robots",
"tom scott",
"warehouse automation",
"logistics"
]
},
{
"id": "syoqjYLDs48",
"type": "Interview",
"india": false,
"title": "Office Hours at Startup School 2013 with Paul Graham and Sam Altman",
"channel": "Y Combinator",
"minutes": null,
"year": null,
"since": 2013,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": "Fundraising",
"gem": false,
"why": "HN points to it as a look at what YC office hours are like and as an early glimpse of Flexport and CodeCombat pitching.",
"tags": [
"y combinator",
"paul graham",
"sam altman",
"flexport",
"pitching",
"startup advice"
]
},
{
"id": "t8QEOBgLBQU",
"type": "Talk",
"india": false,
"title": "Gabe Newell: Reflections of a Video Game Maker",
"channel": "The LBJ School",
"minutes": null,
"year": null,
"since": 2013,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries"
],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "HN cites it for how Valve works: hiring unconventional talent, paying by value, firing as aggressively as hiring, and why open offices fail.",
"tags": [
"valve",
"gabe newell",
"management",
"hiring",
"open office",
"flat organization"
]
},
{
"id": "tWtvrPTbQ_c",
"type": "Explainer",
"india": false,
"title": "The Skinner Box - How Games Condition People to Play More - Extra Credits",
"channel": "Extra Credits",
"minutes": null,
"year": null,
"since": 2015,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN points to it as a short source on operant conditioning in games, loot boxes and engagement loops, with design alternatives.",
"tags": [
"skinner box",
"operant conditioning",
"game design",
"loot boxes",
"extra credits"
]
},
{
"id": "th3KE_H27bs",
"type": "Talk",
"india": false,
"title": "The dirty secret of capitalism -- and a new way forward | Nick Hanauer",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2019,
"category": "Customer Behaviour",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "It is cited in inequality and capitalism threads as a billionaire's critique of neoliberal market assumptions.",
"tags": [
"capitalism",
"inequality",
"incentives",
"neoliberalism",
"ted talk"
]
},
{
"id": "ts4BD8AqD9g",
"type": "Documentary",
"india": false,
"title": "The Story of RollerCoaster Tycoon | Noclip Greatest Hits",
"channel": "/noclip",
"minutes": null,
"year": null,
"since": 2021,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it as a detailed RCT documentary in threads on the game's optimization and design legacy.",
"tags": [
"rollercoaster tycoon",
"chris sawyer",
"openrct2",
"game development",
"noclip"
]
},
{
"id": "uF-GSj-Exms",
"type": "Demo",
"india": false,
"title": "Foundry 2022 Operating System Demo",
"channel": "Palantir",
"minutes": null,
"year": null,
"since": 2022,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Pointed to as the clearest explanation of what Foundry actually is, and for its polished software, though one commenter calls it dated now.",
"tags": [
"palantir",
"foundry",
"data integration",
"pipelines",
"enterprise software"
]
},
{
"id": "upzKj-1HaKw",
"type": "Commentary",
"india": false,
"title": "Steve Jobs on Microsoft",
"channel": "JoshuaG",
"minutes": null,
"year": null,
"since": 2009,
"category": "SaaS & Technology",
"also": [
"Founder Stories & Documentaries"
],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "Cited when HN discusses taste and vision in product companies.",
"tags": [
"steve jobs",
"microsoft",
"taste",
"apple",
"product vision"
]
},
{
"id": "vQpUV--2Jao",
"type": "Explainer",
"india": false,
"title": "How Dollar Stores Quietly Consumed America",
"channel": "Wendover Productions",
"minutes": null,
"year": null,
"since": 2023,
"category": "SaaS & Technology",
"also": [
"Startup & Entrepreneurship"
],
"topics": [],
"stage": null,
"gem": false,
"why": "Offered as a good explanation of the business of dollar stores and how they affect local grocers.",
"tags": [
"dollar general",
"retail",
"wendover",
"small towns",
"business model"
]
},
{
"id": "vTbILK0fxDY",
"type": "Explainer",
"india": false,
"title": "Demographic Collapse — China's Reckoning (Part 1)",
"channel": "PolyMatter",
"minutes": null,
"year": null,
"since": 2021,
"category": "Investment & Venture Capital",
"also": [],
"topics": [
"Growth"
],
"stage": "Growth",
"gem": false,
"why": "Offered as a starter for people wanting to understand China's demographic crisis and how it threatens economic growth.",
"tags": [
"china",
"one-child policy",
"demographics",
"economic growth",
"population decline"
]
},
{
"id": "viJt_DXTfwA",
"type": "Interview",
"india": false,
"title": "ChatGPT with Rob Miles - Computerphile",
"channel": "Computerphile",
"minutes": null,
"year": null,
"since": 2023,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "HN commenters send it to people confused about ChatGPT's quirks, explaining how human-feedback training makes it a pleasing yes-man that bullshits.",
"tags": [
"chatgpt",
"rlhf",
"ai safety",
"language models",
"rob miles"
]
},
{
"id": "vt-zXEsJ61U",
"type": "Explainer",
"india": false,
"title": "Bitcoin Q&A: How Do I Secure My Bitcoin?",
"channel": "aantonop",
"minutes": null,
"year": null,
"since": 2017,
"category": "Investment & Venture Capital",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "HN recommends it as a clear explanation of self-custody and of why to move coins off exchanges.",
"tags": [
"bitcoin",
"key management",
"hardware wallets",
"seed phrase",
"security"
]
},
{
"id": "x-rJciYZmi0",
"type": "Talk",
"india": false,
"title": "A new look at active vs passive (Michael Green)",
"channel": "Bridge Alternatives",
"minutes": null,
"year": null,
"since": 2020,
"category": "Investment & Venture Capital",
"also": [],
"topics": [
"Fundraising"
],
"stage": null,
"gem": false,
"why": "HN points to it in investing threads as an argument that passive index flows distort markets and could precede a crash.",
"tags": [
"passive investing",
"index funds",
"market structure",
"valuations",
"michael green"
]
},
{
"id": "xFFs9UgOAlE",
"type": "Lecture",
"india": false,
"title": "CS50 Lecture by Mark Zuckerberg - 7 December 2005",
"channel": "CS50",
"minutes": null,
"year": null,
"since": 2016,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": "Growth",
"gem": false,
"why": "HN commenters mine it for early-Facebook history, such as his view on open source, privacy and the problems that shaped its architecture.",
"tags": [
"mark zuckerberg",
"facebook",
"cs50",
"startups",
"scaling"
]
},
{
"id": "xMYm2d9bmEA",
"type": "Explainer",
"india": false,
"title": "The Art Of Poison-Pilling Music Files",
"channel": "Benn Jordan",
"minutes": null,
"year": null,
"since": 2025,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "HN points to it in AI music and data-poisoning threads as the source for this technique.",
"tags": [
"ai music",
"data poisoning",
"adversarial noise",
"copyright",
"audio"
]
},
{
"id": "xZi4kTJG-LE",
"type": "Lecture",
"india": false,
"title": "How to Sell by Tyler Bosmeny",
"channel": "Y Combinator",
"minutes": null,
"year": null,
"since": 2018,
"category": "Startup & Entrepreneurship",
"also": [
"Marketing & Growth",
"Sales"
],
"topics": [
"Sales"
],
"stage": "First Customer",
"gem": false,
"why": "Recommended to technical founders who need a practical introduction to B2B and enterprise sales.",
"tags": [
"b2b sales",
"enterprise sales",
"startup school",
"founders",
"y combinator"
]
},
{
"id": "xdfeXqHFmPI",
"type": "Explainer",
"india": false,
"title": "The Position of Fuck You (John Goodman in The Gambler)",
"channel": "Omid Malekan",
"minutes": null,
"year": null,
"since": 2015,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN links it whenever the discussion turns to layoffs, saving, and having enough financial independence to say no.",
"tags": [
"fuck-you money",
"the gambler",
"layoffs",
"saving"
]
},
{
"id": "yCd3CzGSte8",
"type": "Interview",
"india": false,
"title": "Chris Lattner: Compilers, LLVM, Swift, TPU, and ML Accelerators | Lex Fridman Podcast #21",
"channel": "Lex Fridman",
"minutes": null,
"year": null,
"since": 2019,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters point to it as an interesting conversation with the creator of Swift and LLVM, especially for compilers and ML compilation.",
"tags": [
"llvm",
"swift",
"mlir",
"tpu",
"chris lattner"
]
},
{
"id": "yReDbeY7ZMU",
"type": "Documentary",
"india": false,
"title": "The Lighthill Debate (1973) - part 1 of 6",
"channel": "bilkable",
"minutes": null,
"year": null,
"since": 2016,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "Recommended as a historical look at the AI winter debate and a demolition of the expert systems hype.",
"tags": [
"lighthill report",
"ai winter",
"expert systems",
"1973 debate"
]
},
{
"id": "yY96hTb8WgI",
"type": "Explainer",
"india": false,
"title": "It's not you. Bad doors are everywhere.",
"channel": "Vox",
"minutes": null,
"year": null,
"since": 2019,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN uses it as the short, canonical explainer of Norman doors and affordances, linked in design and UX discussions.",
"tags": [
"design",
"affordances",
"don norman",
"ux",
"door design"
]
},
{
"id": "yaonVYOTSsk",
"type": "Interview",
"india": false,
"title": "Micro Men - 10th Anniversary - With Chris Curry, Steve Furber and Hermann Hauser",
"channel": "The Centre for Computing History",
"minutes": null,
"year": null,
"since": 2020,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a companion to Micro Men, with the real Acorn people commenting on how events actually happened.",
"tags": [
"micro men",
"acorn",
"bbc micro",
"sinclair",
"arm"
]
},
{
"id": "zBgCRJluWTc",
"type": "Explainer",
"india": false,
"title": "Why Don't You Want To Do Anything After Binging 4 Hours of YouTube Videos...",
"channel": "HealthyGamerGG",
"minutes": null,
"year": null,
"since": 2022,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended in Ask HN threads on motivation and internet addiction as an accessible explanation of why screen time dulls drive.",
"tags": [
"procrastination",
"internet addiction",
"mental health",
"attention",
"motivation"
]
},
{
"id": "zaUCDZ9d09Y",
"type": "Commentary",
"india": false,
"title": "Starlink: BUSTED!! + ALL other Failed Musk promises!",
"channel": "Thunderf00t",
"minutes": null,
"year": null,
"since": 2022,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Mostly cited as a contrarian critique of Starlink's viability; some defend its economics argument while others dismiss it as repetitive.",
"tags": [
"starlink",
"spacex",
"satellite internet",
"elon musk",
"business critique"
]
},
{
"id": "zmeDzx4SUME",
"type": "Lecture",
"india": false,
"title": "Growing Reddit - Web Development",
"channel": "Udacity",
"minutes": null,
"year": null,
"since": 2012,
"category": "Startup & Entrepreneurship",
"also": [
"Marketing & Growth"
],
"topics": [
"Users"
],
"stage": null,
"gem": false,
"why": "HN cites it as a first-hand admission from a founder of how Reddit seeded content with fake users, in threads on bootstrapping user-generated sites.",
"tags": [
"reddit",
"steve huffman",
"fake accounts",
"cold start",
"startups"
]
},
{
"id": "zuKV2DI9-Jg",
"type": "Explainer",
"india": false,
"title": "Why You Will Marry the Wrong Person",
"channel": "The School of Life",
"minutes": null,
"year": null,
"since": 2016,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN points to it as the short cliff's-notes version of the essay and as a charming introduction to The School of Life.",
"tags": [
"the school of life",
"marriage",
"philosophy",
"love",
"alain de botton"
]
},
{
"id": "0lvMgMrNDlg",
"type": "Talk",
"india": false,
"title": "Steve Jobs rare footage conducting a presentation on 1980 (Insanely Great)",
"channel": "naji1234",
"minutes": null,
"year": null,
"since": 2012,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters cite it as proof that Jobs was a polished speaker from the start and quote its analogies about computers and people.",
"tags": [
"steve jobs",
"apple",
"1980",
"presentation skills",
"computing history"
]
},
{
"id": "2B-XwPjn9YY",
"type": "Demo",
"india": false,
"title": "The Lost 1984 Video: young Steve Jobs introduces the Macintosh",
"channel": "macessentials",
"minutes": null,
"year": null,
"since": 2011,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "HN commenters cite it as the source for the talking-Macintosh introduction, usually in threads about speech synthesis and audio.",
"tags": [
"steve jobs",
"macintosh",
"1984",
"product launch",
"speech synthesis"
]
},
{
"id": "3FAmr1la6w0",
"type": "Talk",
"india": false,
"title": "Robert Kennedy on GDP",
"channel": "Wimble Don",
"minutes": null,
"year": null,
"since": 2021,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN quotes it whenever debating GDP and metrics of success beyond money.",
"tags": [
"robert kennedy",
"gdp",
"economics",
"1968 speech",
"social progress"
]
},
{
"id": "8bT6txm4RpA",
"type": "Documentary",
"india": false,
"title": "Master Hands - Chevrolet Manufacturing (1936)",
"channel": "US Auto Industry",
"minutes": null,
"year": null,
"since": 2015,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN finds it fascinating as a window into 1930s factory work, often contrasting its hand labor with modern assembly ergonomics.",
"tags": [
"chevrolet",
"assembly line",
"industrial history",
"factory work",
"1936"
]
},
{
"id": "BE77h7dmoQU",
"type": "Documentary",
"india": false,
"title": "Kubernetes: The Documentary [PART 1]",
"channel": "CultRepo ",
"minutes": null,
"year": null,
"since": 2022,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited for the history of why containers and Kubernetes took off, though one thread critiqued the documentary itself.",
"tags": [
"kubernetes",
"containers",
"google",
"open source",
"docker",
"cloud wars"
]
},
{
"id": "C67Lh4LE5LY",
"type": "Commentary",
"india": false,
"title": "Defamation of character and extortion; Yelp salesperson has friends leave bad reviews!",
"channel": "Louis Rossmann",
"minutes": null,
"year": null,
"since": 2015,
"category": "Startup & Entrepreneurship",
"also": [
"Marketing & Growth",
"SaaS & Technology",
"Sales"
],
"topics": [
"Sales"
],
"stage": "First Customer",
"gem": false,
"why": "HN commenters cite it as evidence for claims that Yelp pressures businesses over advertising, mostly in threads about Yelp's practices.",
"tags": [
"yelp",
"fake reviews",
"extortion",
"small business",
"louis rossmann"
]
},
{
"id": "KZazEM8cgt0",
"type": "Interview",
"india": false,
"title": "Frank Zappa explains the decline of the music business",
"channel": "budagum",
"minutes": null,
"year": null,
"since": 2011,
"category": "SaaS & Technology",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN quotes it as a prescient take on industry decline and on how young, hip managers can be more conservative than the old guard.",
"tags": [
"frank zappa",
"music business",
"record labels",
"executives",
"interview"
]
},
{
"id": "KbgvSi35n6o",
"type": "Commentary",
"india": false,
"title": "Cicret Bracelet DEBUNK",
"channel": "Captain Disillusion",
"minutes": null,
"year": null,
"since": 2016,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "HN uses the Cicret Bracelet as shorthand for vaporware, applied to products like the Humane AI Pin, and praises Captain Disillusion's production values.",
"tags": [
"cicret bracelet",
"debunking",
"crowdfunding",
"captain disillusion",
"fake demos",
"wearables"
]
},
{
"id": "NdfmMB1E_qk",
"type": "Commentary",
"india": false,
"title": "Expert breakdown of NYC's overpriced commercial vacancies.",
"channel": "Louis Rossmann",
"minutes": null,
"year": null,
"since": 2020,
"category": "Investment & Venture Capital",
"also": [
"Startup & Entrepreneurship"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN uses it as the go-to explanation of why landlords refuse to renegotiate leases and leave units empty.",
"tags": [
"nyc",
"cmbs",
"vacancies",
"landlords",
"rent"
]
},
{
"id": "PnpX8d8zRIA",
"type": "Documentary",
"india": false,
"title": "The CED: RCA's Very Late, Very Weird Video Gamble (Pt. 1)",
"channel": "Technology Connections",
"minutes": null,
"year": null,
"since": 2019,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "HN praises the depth of research and uses the CED story as a case study of a mismanaged, badly timed product.",
"tags": [
"rca",
"ced",
"videodisc",
"technology history",
"vhs",
"product failure"
]
},
{
"id": "Q6NpHbMFaQ8",
"type": "Interview",
"india": false,
"title": "Foundation 07 // Chris Sacca",
"channel": "Kevin Rose",
"minutes": null,
"year": null,
"since": 2012,
"category": "Startup & Entrepreneurship",
"also": [
"Investment & Venture Capital",
"Founder Stories & Documentaries"
],
"topics": [
"Fundraising"
],
"stage": "Fundraising",
"gem": false,
"why": "HN recommends it for Sacca's candid account of going deep into debt and recovering, in threads about failure and financial risk.",
"tags": [
"chris sacca",
"angel investing",
"kevin rose",
"startups",
"debt"
]
},
{
"id": "RVU62CQTXFI",
"type": "Interview",
"india": false,
"title": "Ted Nelson struggles with uncomprehending radio interviewer, 1979",
"channel": "TheTedNelson",
"minutes": null,
"year": null,
"since": 2017,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it as a vivid record of how alien personal computing and hypertext sounded to a skeptical public, and as a favorite Nelson interview.",
"tags": [
"ted nelson",
"hypertext",
"xanadu",
"1979",
"computing vision"
]
},
{
"id": "UHbQmqmmIFk",
"type": "Demo",
"india": false,
"title": "2Advanced Studios v2 flash website in 2001",
"channel": "Web Design Museum",
"minutes": null,
"year": null,
"since": 2019,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN points to it as the example of the weird, artistic, animation-heavy web UIs of the Flash era.",
"tags": [
"2advanced",
"flash",
"web design history",
"ui design",
"2001"
]
},
{
"id": "VVUeqxXwCA0",
"type": "Explainer",
"india": false,
"title": "How Suburban Development Makes American Cities Poorer [ST02]",
"channel": "Not Just Bikes",
"minutes": null,
"year": null,
"since": 2021,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited in urban planning threads as an accessible explanation of why low-density suburbs cost more to maintain than they bring in.",
"tags": [
"suburbs",
"urban planning",
"infrastructure costs",
"city finances",
"density"
]
},
{
"id": "VcVfceTsD0A",
"type": "Podcast",
"india": false,
"title": "Max Tegmark: The Case for Halting AI Development | Lex Fridman Podcast #371",
"channel": "Lex Fridman",
"minutes": null,
"year": null,
"since": 2023,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "Recommended in AI-risk threads as a way to understand the safety-advocate argument for halting development.",
"tags": [
"max tegmark",
"ai risk",
"pause letter",
"agi",
"lex fridman"
]
},
{
"id": "X3NASGb5m8s",
"type": "Commentary",
"india": false,
"title": "steve jobs on why xerox failed",
"channel": "Kumar Saurav",
"minutes": null,
"year": null,
"since": 2024,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries",
"Sales"
],
"topics": [
"Product",
"Sales",
"Team"
],
"stage": "First Customer",
"gem": false,
"why": "HN cites it as the standard explanation of how finance and sales take over a company, applied to Boeing and other declining firms.",
"tags": [
"steve jobs",
"xerox",
"company decline",
"product management",
"management"
]
},
{
"id": "XBmJay_qdNc",
"type": "Explainer",
"india": false,
"title": "RSA ANIMATE: The Truth About Dishonesty",
"channel": "Royal Society of Arts",
"minutes": null,
"year": null,
"since": 2015,
"category": "Customer Behaviour",
"also": [
"Business Psychology"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it for Ariely's finding that people cheat a little without feeling guilty.",
"tags": [
"dan ariely",
"cheating",
"honesty",
"rsa animate",
"behavioral psychology"
]
},
{
"id": "XRrLyckg8Nc",
"type": "Talk",
"india": false,
"title": "Peter Thiel and George Gilder debate on \"The Prospects for Technology and Economic Growth\"",
"channel": "Intercollegiate Studies Institute",
"minutes": null,
"year": null,
"since": 2012,
"category": "Investment & Venture Capital",
"also": [],
"topics": [
"Growth"
],
"stage": "Growth",
"gem": false,
"why": "Cited for Thiel's technological stagnation thesis, especially his argument that energy costs offset IT productivity gains.",
"tags": [
"peter thiel",
"george gilder",
"economic growth",
"energy",
"debate"
]
},
{
"id": "YQZ2UeOTO3I",
"type": "Commentary",
"india": false,
"title": "Marketing to Doctors: Last Week Tonight with John Oliver (HBO)",
"channel": "LastWeekTonight",
"minutes": null,
"year": null,
"since": 2015,
"category": "Marketing & Growth",
"also": [],
"topics": [
"Growth"
],
"stage": "Growth",
"gem": false,
"why": "HN uses it as a reference in threads about pharma payments, medical corruption, and declining trust in healthcare.",
"tags": [
"pharma",
"doctors",
"healthcare",
"john oliver",
"opioids"
]
},
{
"id": "_Qd3erAPI9w",
"type": "Explainer",
"india": false,
"title": "Survivor Bias",
"channel": "2veritasium",
"minutes": null,
"year": null,
"since": 2016,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN uses it as a handy reference whenever a thread needs to point at survivorship bias.",
"tags": [
"survivor bias",
"veritasium",
"statistics",
"cognitive bias",
"psychology"
]
},
{
"id": "aYT2se94eU0",
"type": "Talk",
"india": false,
"title": "The Computer Revolution Hasn't Happened Yet OOPSLA 97 Keynote (VPRI 0719)",
"channel": "Yoshiki Ohshima (大島芳樹)",
"minutes": null,
"year": null,
"since": 2020,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN regards it as a must-watch that gives a very different perspective on software and the web, and its title is widely riffed on.",
"tags": [
"alan kay",
"oopsla",
"object-oriented programming",
"software history",
"web"
]
},
{
"id": "dDsWTyLEgbk",
"type": "Interview",
"india": false,
"title": "Oral History of John Backus",
"channel": "Computer History Museum",
"minutes": null,
"year": null,
"since": 2019,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it because hearing pioneers explain early computing in their own words conveys the context and excitement of the era.",
"tags": [
"john backus",
"fortran",
"computer history",
"ibm",
"grady booch"
]
},
{
"id": "f61KMw5zVhg",
"type": "Interview",
"india": false,
"title": "Feynman_i_dont_like_honors_ [longer_version]",
"channel": "batxg3",
"minutes": null,
"year": null,
"since": 2009,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN returns to it as a reminder to stay humble and as a source of Feynman's view on awards and prestige.",
"tags": [
"feynman",
"nobel prize",
"humility",
"science",
"bbc interview"
]
},
{
"id": "fLA_d9q6ySs",
"type": "Documentary",
"india": false,
"title": "Tengen: Atari Games vs. Nintendo",
"channel": "Gaming Historian",
"minutes": null,
"year": null,
"since": 2017,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a compact account of the Atari-Nintendo lawsuit and its technical and legal details, which shaped the game industry.",
"tags": [
"tengen",
"nintendo",
"nes",
"10nes",
"video game history",
"lawsuit"
]
},
{
"id": "i7kh8pNRWOo",
"type": "Talk",
"india": false,
"title": "Techniques for dealing with lack of motivation, malaise, depression",
"channel": "Jonathan Blow",
"minutes": null,
"year": null,
"since": 2017,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it as the best motivation advice some commenters have heard, and it is often shared in procrastination threads.",
"tags": [
"depression",
"motivation",
"procrastination",
"jonathan blow",
"mental health"
]
},
{
"id": "kN0SVBCJqLs",
"type": "Talk",
"india": false,
"title": "Apple Music Event 2001-The First Ever iPod Introduction",
"channel": "JoshuaG",
"minutes": null,
"year": null,
"since": 2010,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "HN commenters use it to compare against later Apple launches, to show how low-key the debut was, and as an example of a great product speech.",
"tags": [
"steve jobs",
"ipod",
"keynote",
"apple",
"product launch"
]
},
{
"id": "mfv0V1SxbNA",
"type": "Interview",
"india": false,
"title": "Building the PERFECT Linux PC with Linus Torvalds",
"channel": "Linus Tech Tips",
"minutes": null,
"year": null,
"since": 2025,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN mines it for Torvalds's opinions, such as ECC RAM, AI hype, and his desktop setup, and as a rare long informal interview.",
"tags": [
"linus torvalds",
"linux",
"pc build",
"ecc memory",
"kernel development"
]
},
{
"id": "nqzpAbK9qFk",
"type": "Talk",
"india": false,
"title": "Keynote by John Carmack at Oculus Connect 2014",
"channel": "kungfl",
"minutes": null,
"year": null,
"since": 2014,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited as an example of Carmack's fluent long-form speaking and as an informative talk on VR.",
"tags": [
"john carmack",
"oculus",
"gear vr",
"mobile vr",
"keynote"
]
},
{
"id": "tI3kkk2JdoI",
"type": "Explainer",
"india": false,
"title": "This Ponzi Scheme Might END Suburban Prosperity",
"channel": "Strong Towns",
"minutes": null,
"year": null,
"since": 2024,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended in urban planning threads as a clear account of suburban municipal finance.",
"tags": [
"strong towns",
"suburban sprawl",
"infrastructure costs",
"urban planning"
]
},
{
"id": "txZq7Laz7_4",
"type": "Talk",
"india": false,
"title": "Morten Rand-Hendriksen: CSS Grid Changes Everything (About Web Layouts)",
"channel": "WordPress",
"minutes": null,
"year": null,
"since": 2018,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters say it convinced them to drop other layout approaches and embrace Grid, and cite its advice on fallbacks for older browsers.",
"tags": [
"css grid",
"web layout",
"responsive design",
"front-end",
"accessibility"
]
},
{
"id": "u69YSh-cFXY",
"type": "Interview",
"india": false,
"title": "Q&A with a person who does not have an internal monologue",
"channel": "PA Struggles",
"minutes": null,
"year": null,
"since": 2020,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN refers to it as a vivid first-person account of anendophasia whenever inner monologues come up.",
"tags": [
"inner speech",
"cognition",
"anendophasia",
"thinking",
"q&a"
]
},
{
"id": "vtOA1vuoDgQ",
"type": "Talk",
"india": false,
"title": "Seymour Cray's Only Surviving Talk: \"Cray-1 Introduction\" (1976, LANL)",
"channel": "UC Berkeley Events",
"minutes": null,
"year": null,
"since": 2016,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited as a rare first-hand account from Cray, loved for details like the aluminum machining invented to carry Freon through the frame.",
"tags": [
"cray-1",
"seymour cray",
"vector processing",
"computer history",
"cooling"
]
},
{
"id": "wg6cfsnmqyg",
"type": "Lecture",
"india": false,
"title": "30 Essential Ideas you should know about ADHD, 1B Inhibition, Impulsivity, and Emotion",
"channel": "Adhd Videos",
"minutes": null,
"year": null,
"since": 2017,
"category": "Business Psychology",
"also": [],
"topics": [
"Ideas"
],
"stage": null,
"gem": false,
"why": "HN commenters point to Barkley's talks as a respected clinician's view of ADHD as a spectrum of executive function problems.",
"tags": [
"adhd",
"russell barkley",
"impulsivity",
"response inhibition",
"emotional regulation"
]
},
{
"id": "ws3DJF7MbMU",
"type": "Documentary",
"india": false,
"title": "Amiga Story | Nostalgia Nerd",
"channel": "Nostalgia Nerd",
"minutes": null,
"year": null,
"since": 2018,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a wonderful, thorough telling of the Amiga story in threads about the machine.",
"tags": [
"amiga",
"commodore",
"retro computing",
"jay miner",
"1980s"
]
},
{
"id": "wzFhBGKU6HA",
"type": "Explainer",
"india": false,
"title": "IBM RFID Commercial-The Future Supermarket",
"channel": "David Preece",
"minutes": null,
"year": null,
"since": 2020,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters cite it as proof that walk-out shopping was envisioned long before Amazon's version, and as an appealing vision of the future.",
"tags": [
"rfid",
"commercial",
"self-checkout",
"ibm",
"retail"
]
},
{
"id": "yMjPqr1s-cg",
"type": "Talk",
"india": false,
"title": "Ted Nelson's Eulogy for Douglas Engelbart",
"channel": "Computer History Museum",
"minutes": null,
"year": null,
"since": 2018,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended as a moving tribute that laments how little of Engelbart's vision caught on.",
"tags": [
"ted nelson",
"douglas engelbart",
"hypertext",
"computer history",
"mother of all demos"
]
},
{
"id": "ycPr5-27vSI",
"type": "Podcast",
"india": false,
"title": "Joe Rogan Experience #1169 - Elon Musk",
"channel": "PowerfulJRE",
"minutes": null,
"year": null,
"since": 2018,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "Recommended as a long, wide-ranging look into Musk's thinking, especially on AI and the future of humanity.",
"tags": [
"elon musk",
"joe rogan",
"ai",
"tesla",
"spacex"
]
},
{
"id": "-zt57TWkTF4",
"type": "Commentary",
"india": false,
"title": "How does Linus make money? - 2020 Update",
"channel": "Linus Tech Tips",
"minutes": null,
"year": null,
"since": 2020,
"category": "Marketing & Growth",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it as concrete data on how a big YouTube channel diversifies revenue and how little comes from AdSense.",
"tags": [
"linus tech tips",
"youtube adsense",
"sponsorships",
"creator economy",
"youtube premium"
]
},
{
"id": "0Cu6EbELZ6I",
"type": "Commentary",
"india": false,
"title": "Why There's No Such Thing as a Good Billionaire",
"channel": "Adam Conover",
"minutes": null,
"year": null,
"since": 2022,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN uses it in threads about wealth and charity, either as support for the view that no billionaire is benevolent or as a contested counterpoint.",
"tags": [
"billionaires",
"philanthropy",
"patagonia",
"capitalism",
"adam conover"
]
},
{
"id": "0FacYAI6DY0",
"type": "Commentary",
"india": false,
"title": "Larry Ellison - What The Hell Is Cloud Computing?",
"channel": "BadIdea2008",
"minutes": null,
"year": null,
"since": 2012,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN mostly cites it as an ironic bit of history, since Oracle later pivoted hard to the cloud.",
"tags": [
"larry ellison",
"oracle",
"cloud",
"buzzwords",
"2008"
]
},
{
"id": "0af00UcTO-c",
"type": "Talk",
"india": false,
"title": "Where good ideas come from | Steven Johnson",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2010,
"category": "Business Psychology",
"also": [],
"topics": [
"Ideas"
],
"stage": null,
"gem": false,
"why": "HN people point to it as the talk version of his book on innovation, and for his brief discussion of liquid networks.",
"tags": [
"steven johnson",
"creativity",
"liquid networks",
"innovation",
"ted"
]
},
{
"id": "0gks6ceq4eQ",
"type": "Talk",
"india": false,
"title": "You aren't at the mercy of your emotions -- your brain creates them | Lisa Feldman Barrett",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2018,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters mention it as an accessible introduction to the theory of constructed emotions.",
"tags": [
"lisa feldman barrett",
"emotion",
"neuroscience",
"psychology",
"ted talk"
]
},
{
"id": "1-vcErOPofQ",
"type": "Interview",
"india": false,
"title": "Grace Hopper on Letterman",
"channel": "TheLazlo101",
"minutes": null,
"year": null,
"since": 2016,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Brought up whenever latency, light speed or the size of a nanosecond comes up, as the classic physical demonstration.",
"tags": [
"grace hopper",
"nanosecond",
"letterman",
"latency",
"computing history"
]
},
{
"id": "10qowKUW82U",
"type": "Interview",
"india": false,
"title": "TypeScript is being ported to Go | interview with Anders Hejlsberg",
"channel": "Michigan TypeScript",
"minutes": null,
"year": null,
"since": 2025,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN points to it as the authoritative answer to why the team picked Go rather than C# or Rust, citing timestamps on cyclic data structures and garbage collection.",
"tags": [
"typescript",
"go",
"compilers",
"anders hejlsberg",
"performance"
]
},
{
"id": "1FXuMs6YRCY",
"type": "Explainer",
"india": false,
"title": "International Diversification",
"channel": "Ben Felix",
"minutes": null,
"year": null,
"since": 2023,
"category": "Investment & Venture Capital",
"also": [],
"topics": [
"Fundraising"
],
"stage": null,
"gem": false,
"why": "Cited in investing threads as a research-backed argument for diversifying beyond US equities, with sources in the description.",
"tags": [
"index investing",
"global equities",
"portfolio theory",
"home bias",
"finance research"
]
},
{
"id": "1fZTOjd_bOQ",
"type": "Talk",
"india": false,
"title": "Are we stuck with the same Desktop UX forever? | Ubuntu Summit 25.10",
"channel": "Canonical Ubuntu",
"minutes": null,
"year": null,
"since": 2025,
"category": "SaaS & Technology",
"also": [],
"topics": [
"Users"
],
"stage": null,
"gem": false,
"why": "HN commenters cite it when discussing stagnating desktop UX, Apple's design decline, and open source's chance to experiment with new interaction models.",
"tags": [
"ux design",
"open source",
"desktop interfaces",
"interaction design",
"linux desktop"
]
},
{
"id": "1tQ5XwvjPmA",
"type": "Talk",
"india": false,
"title": "Steve Jobs Introduces the Macintosh",
"channel": "Computer History Museum",
"minutes": null,
"year": null,
"since": 2016,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Product",
"Team"
],
"stage": null,
"gem": false,
"why": "HN points to it as the primary source for the original Mac demo and the personal post-show Q&A with the team.",
"tags": [
"steve jobs",
"macintosh",
"1984",
"product demo",
"computer history",
"mac team"
]
},
{
"id": "2f2kGHcdJYU",
"type": "Explainer",
"india": false,
"title": "Margin Call Best Quote by Will Emerson",
"channel": "chrislaucn",
"minutes": null,
"year": null,
"since": 2020,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it as a compact explanation of the housing crash and of institutions keeping their fingers on the scales.",
"tags": [
"margin call",
"financial crisis",
"banking",
"film clip"
]
},
{
"id": "3KdlJlHAAbQ",
"type": "Commentary",
"india": false,
"title": "Steve Jobs  Microsoft has no taste",
"channel": "Николай Товеровский",
"minutes": null,
"year": null,
"since": 2020,
"category": "SaaS & Technology",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN drops it into Microsoft threads as a quick, quotable jab that people feel still holds.",
"tags": [
"steve jobs",
"microsoft",
"taste",
"design",
"interview clip"
]
},
{
"id": "3MYEtQ5Zdn8",
"type": "Talk",
"india": false,
"title": "Why \"scout mindset\" is crucial to good judgment | Julia Galef | TEDxPSU",
"channel": "TEDx Talks",
"minutes": null,
"year": null,
"since": 2020,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN uses it as the source of the scout mindset vocabulary when discussing honest reasoning and conversation.",
"tags": [
"rationality",
"julia galef",
"dreyfus affair",
"judgment",
"cognitive bias"
]
},
{
"id": "3UxZDJ1HiPE",
"type": "Demo",
"india": false,
"title": "Kiva Systems Warehouse Automation at  Quiet Logistics",
"channel": "KivaDirector",
"minutes": null,
"year": null,
"since": 2014,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Used to show what Kiva-style warehouse automation actually looks like: simple wheeled robots moving racks to humans.",
"tags": [
"kiva robots",
"warehouse",
"robotics",
"order fulfillment",
"amazon"
]
},
{
"id": "3eyJIbSgdSE",
"type": "Commentary",
"india": false,
"title": "Milton Friedman - Illegal Immigration - PT 1",
"channel": "LibertyPen",
"minutes": null,
"year": null,
"since": 2011,
"category": "Customer Behaviour",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN uses it as a reference for Friedman's argument that generous welfare and open immigration are in tension.",
"tags": [
"milton friedman",
"illegal immigration",
"welfare",
"economics",
"public policy"
]
},
{
"id": "3vyNzgOP5yw",
"type": "Interview",
"india": false,
"title": "[11] Mike Clark, AMD Zen Chief Architect",
"channel": "TechTechPotato",
"minutes": null,
"year": null,
"since": 2022,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters point to it as a primary source from the architect of Zen, for example on how little the ISA matters compared to microarchitecture.",
"tags": [
"amd zen",
"mike clark",
"cpu design",
"microarchitecture",
"ryzen"
]
},
{
"id": "4WO5kJChg3w",
"type": "Interview",
"india": false,
"title": "A Conversation with Paul Graham - Moderated by Geoff Ralston",
"channel": "Y Combinator",
"minutes": null,
"year": null,
"since": 2018,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN mostly cites it for specific Graham remarks, such as advice to find a paying customer and a recent interview about Viaweb.",
"tags": [
"paul graham",
"y combinator",
"startups",
"viaweb",
"founders"
]
},
{
"id": "4kpDg7MjHps",
"type": "Interview",
"india": false,
"title": "CNN, Feynman and the Challenger disaster",
"channel": "vsrr83",
"minutes": null,
"year": null,
"since": 2016,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries"
],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "HN cites it for Feynman's insights on NASA risk reasoning, blame and engineering culture, and the contrast between Apollo and the Shuttle.",
"tags": [
"richard feynman",
"challenger",
"nasa",
"risk management",
"safety culture"
]
},
{
"id": "5t1vTLU7s40",
"type": "Podcast",
"india": false,
"title": "Yann Lecun: Meta AI, Open Source, Limits of LLMs, AGI & the Future of AI | Lex Fridman Podcast #416",
"channel": "Lex Fridman",
"minutes": null,
"year": null,
"since": 2024,
"category": "SaaS & Technology",
"also": [
"Founder Stories & Documentaries"
],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "Cited for LeCun's views on LLM limits and alternative approaches to intelligence.",
"tags": [
"yann lecun",
"llm",
"agi",
"open source ai",
"meta"
]
},
{
"id": "67tHtpac5ws",
"type": "Explainer",
"india": false,
"title": "Milton Friedman - I, Pencil",
"channel": "Free To Choose Network",
"minutes": null,
"year": null,
"since": 2019,
"category": "Customer Behaviour",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters cite it as the quick, shareable illustration of hidden supply-chain complexity and decentralized knowledge, and bring it up in threads on AI, manufacturing and specialization.",
"tags": [
"i, pencil",
"free markets",
"supply chains",
"decentralized knowledge",
"milton friedman"
]
},
{
"id": "6G59zsjM2UI",
"type": "Podcast",
"india": false,
"title": "Joe Rogan Experience #1006 - Jordan Peterson & Bret Weinstein",
"channel": "PowerfulJRE",
"minutes": null,
"year": null,
"since": 2017,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters cite it as a wide-ranging conversation on political polarization and free discussion, and one commenter points to a segment on wealth distribution following a square-root law.",
"tags": [
"jordan peterson",
"bret weinstein",
"campus politics",
"joe rogan",
"ideology"
]
},
{
"id": "6aIA2LaB2Iw",
"type": "Talk",
"india": false,
"title": "Andrew Price - Improving Blender's UI",
"channel": "Blender",
"minutes": null,
"year": null,
"since": 2013,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited as an example of how hard it is to reconcile UX views in open source communities, and as the start of a redesign discussion.",
"tags": [
"blender",
"ux",
"open source",
"interface redesign",
"3d software"
]
},
{
"id": "75Ju0eM5T2c",
"type": "Interview",
"india": false,
"title": "Donald Knuth - My advice to young people (93/97)",
"channel": "Web of Stories - Life Stories of Remarkable People",
"minutes": null,
"year": null,
"since": 2015,
"category": "Founder Stories & Documentaries",
"also": [
"Business Psychology"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN quotes it as a source for Knuth's caution against believing something is good just because it is trendy.",
"tags": [
"donald knuth",
"advice",
"web of stories",
"trends"
]
},
{
"id": "86x-u-tz0MA",
"type": "Talk",
"india": false,
"title": "Your elusive creative genius | Elizabeth Gilbert",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2011,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN people link it in threads about creativity, late bloomers and creative burnout as a humble, relatable take on where inspiration comes from.",
"tags": [
"ted talk",
"creative process",
"genius",
"writing",
"inspiration"
]
},
{
"id": "8eT1jaHmlx8",
"type": "Talk",
"india": false,
"title": "Jim Keller - Moore's Law in the age of AI Chips",
"channel": "Matroid",
"minutes": null,
"year": null,
"since": 2020,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "Cited in hardware threads as a Keller talk on the different ways of doing parallel processing.",
"tags": [
"jim keller",
"moore's law",
"parallel processing",
"vector processing",
"ai accelerators"
]
},
{
"id": "8pBPZMUcsh0",
"type": "Explainer",
"india": false,
"title": "Buy, Borrow, Die: How America's Ultrawealthy Stay That Way",
"channel": "ProPublica",
"minutes": null,
"year": null,
"since": 2021,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Shared as a clearer explanation of the tax loophole than the accompanying article.",
"tags": [
"buy borrow die",
"tax loophole",
"propublica",
"income tax",
"wealth inequality"
]
},
{
"id": "8q71hrwUcu0",
"type": "Lecture",
"india": false,
"title": "Milton Friedman - Who Benefits From Licensing?",
"channel": "LibertyPen",
"minutes": null,
"year": null,
"since": 2015,
"category": "Customer Behaviour",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it in discussions of occupational licensing and rent-seeking as a libertarian argument.",
"tags": [
"milton friedman",
"licensing",
"regulation",
"economics",
"rent-seeking"
]
},
{
"id": "9LmdUz3rOQU",
"type": "Documentary",
"india": false,
"title": "Pointing and Calling Japanese Safety Standard at Railway Companies & Toyota (HD)",
"channel": "AllAboutLean.com",
"minutes": null,
"year": null,
"since": 2018,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN finds it fascinating and suggests the technique for keeping operators like test drivers attentive.",
"tags": [
"japan railways",
"toyota",
"lean",
"workplace safety",
"human error"
]
},
{
"id": "9bjve67p33E",
"type": "Demo",
"india": false,
"title": "Apple's Future Computer: The Knowledge Navigator",
"channel": "Blake Patterson",
"minutes": null,
"year": null,
"since": 2011,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it as an early vision of personal software agents and AI assistants, and as a fun retro look at predicted computing.",
"tags": [
"knowledge navigator",
"apple",
"software agents",
"concept video",
"john sculley"
]
},
{
"id": "9tJatdtv4jQ",
"type": "Interview",
"india": false,
"title": "China vs EU on debt conditions",
"channel": "Geshan Dissanayake",
"minutes": null,
"year": null,
"since": 2020,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited in threads on Chinese lending and the Belt and Road as an informed firsthand view from a former Greek finance minister.",
"tags": [
"varoufakis",
"belt and road",
"china",
"sovereign debt",
"piraeus"
]
},
{
"id": "AF2VyqSApjA",
"type": "Demo",
"india": false,
"title": "AI Live Painting in Krita - Interactive updates",
"channel": "Acly",
"minutes": null,
"year": null,
"since": 2023,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "HN points to it as a demonstration of local, controllable AI painting and a way to learn the workflow.",
"tags": [
"krita",
"stable diffusion",
"live painting",
"lcm",
"local ai"
]
},
{
"id": "ALaTm6VzTBw",
"type": "Explainer",
"india": false,
"title": "Two Is the Wrong Number of Days Off",
"channel": "CGP Grey",
"minutes": null,
"year": null,
"since": 2020,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Brought up in four-day-week and work-schedule threads as the 'Weekend Wednesday' idea.",
"tags": [
"weekend wednesday",
"four-day week",
"work-life balance",
"cgp grey",
"scheduling"
]
},
{
"id": "AaTRHFaaPG8",
"type": "Podcast",
"india": false,
"title": "Eliezer Yudkowsky: Dangers of AI and the End of Human Civilization | Lex Fridman Podcast #368",
"channel": "Lex Fridman",
"minutes": null,
"year": null,
"since": 2023,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "Mostly cited as the canonical statement of AI doomer views, with some recommending it and many criticizing it as irresponsible or wrong.",
"tags": [
"eliezer yudkowsky",
"ai alignment",
"agi",
"lex fridman",
"ai safety"
]
},
{
"id": "BcyYyyaPz84",
"type": "Documentary",
"india": false,
"title": "GHOST CITY - Inside the Chinese Housing Bubble",
"channel": "ADVChina",
"minutes": null,
"year": null,
"since": 2019,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Linked in threads on China's property glut as visual evidence of empty, investment-driven housing, later seen as foreshadowing Evergrande.",
"tags": [
"ghost cities",
"china",
"real estate",
"property bubble",
"economics"
]
},
{
"id": "BemHqUqcpI8",
"type": "Documentary",
"india": false,
"title": "Guilty until proven innocent.",
"channel": "JCS - Criminal Psychology",
"minutes": null,
"year": null,
"since": 2021,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters use it to show that behavior in interrogations is not a reliable sign of guilt and that police lie to innocent people.",
"tags": [
"interrogation",
"false confessions",
"innocent suspects",
"police tactics",
"true crime"
]
},
{
"id": "BxV14h0kFs0",
"type": "Explainer",
"india": false,
"title": "This Video Has 77,321,815 Views",
"channel": "Tom Scott",
"minutes": null,
"year": null,
"since": 2020,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "The go-to citation for why free, open APIs get shut down and for the fate of services like Yahoo Pipes.",
"tags": [
"tom scott",
"open apis",
"yahoo pipes",
"youtube api",
"platforms"
]
},
{
"id": "CGAhWgkKlHI",
"type": "Explainer",
"india": false,
"title": "Chest Freezers; What they tell us about designing for X",
"channel": "Technology Connections",
"minutes": null,
"year": null,
"since": 2020,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN points to it whenever chest fridges or freezer efficiency come up, as a clear explanation of design trade-offs between efficiency and convenience.",
"tags": [
"chest freezer",
"energy efficiency",
"appliance design",
"thermal imaging",
"heat pumps"
]
},
{
"id": "ClfBxWPkBKU",
"type": "Talk",
"india": false,
"title": "How to rob a bank (from the inside, that is) | William Black",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2015,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Mentioned in threads about financial fraud as support for the claim that outright fraud, not just bad luck, caused the Great Recession.",
"tags": [
"2008 financial crisis",
"liar's loans",
"white-collar crime",
"banking regulation"
]
},
{
"id": "CpfdtgW6_oI",
"type": "Talk",
"india": false,
"title": "Paul Graham Keynote Speech At OPT412",
"channel": "pittsburghparks",
"minutes": null,
"year": null,
"since": 2016,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited as the video version of his essay on making Pittsburgh a startup hub, and as a talk that persuaded at least one commenter to move there.",
"tags": [
"paul graham",
"pittsburgh",
"startup hubs",
"y combinator",
"keynote"
]
},
{
"id": "D38dcArwCNc",
"type": "Commentary",
"india": false,
"title": "E-Ink for productivity: Software and General Updates",
"channel": "Technology Connextras",
"minutes": null,
"year": null,
"since": 2020,
"category": "Business Psychology",
"also": [],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "Cited in e-ink display threads as a long-term review of using e-ink as a monitor.",
"tags": [
"e-ink",
"boox",
"second monitor",
"e-reader",
"hardware review"
]
},
{
"id": "Dk306ZkNOuc",
"type": "Documentary",
"india": false,
"title": "Macintosh Factory",
"channel": "MacGeneration",
"minutes": null,
"year": null,
"since": 2016,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Used as the visual reference for Apple's earlier US manufacturing and automation, often as an example of factory automation lessons.",
"tags": [
"apple",
"fremont",
"manufacturing",
"automation",
"vintage macintosh"
]
},
{
"id": "DoQoeK53bP8",
"type": "Demo",
"india": false,
"title": "Incremental reading: Learning about nutrition from Wikipedia (SuperMemo 17)",
"channel": "SuperMemo Video",
"minutes": null,
"year": null,
"since": 2018,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Pointed to as a short demonstration of what incremental reading looks like in practice, though one commenter was not convinced by it.",
"tags": [
"supermemo",
"incremental reading",
"spaced repetition",
"cloze",
"wikipedia"
]
},
{
"id": "DzRGBAUz5mA",
"type": "Commentary",
"india": false,
"title": "$h!tty Thumbnails on Linus Tech Tips - Honest Answers Ep. 5",
"channel": "Linus Tech Tips",
"minutes": null,
"year": null,
"since": 2019,
"category": "Marketing & Growth",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Referenced in clickbait and YouTube-algorithm debates as a candid creator explanation of why good channels use poor thumbnails.",
"tags": [
"thumbnails",
"clickbait",
"youtube algorithm",
"linus tech tips",
"creator economy"
]
},
{
"id": "E1AxVXt2Gv4",
"type": "Interview",
"india": false,
"title": "Marcus Hutter: Universal Artificial Intelligence, AIXI, and AGI | Lex Fridman Podcast #75",
"channel": "Lex Fridman",
"minutes": null,
"year": null,
"since": 2020,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Referenced as an accessible explanation of Kolmogorov complexity and Hutter's view of intelligence as compression.",
"tags": [
"aixi",
"kolmogorov complexity",
"marcus hutter",
"agi",
"compression"
]
},
{
"id": "EESYomdoeCs",
"type": "Documentary",
"india": false,
"title": "How Boeing Lost Its Way",
"channel": "Bloomberg Originals",
"minutes": null,
"year": null,
"since": 2020,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries"
],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "Cited as a source for Boeing's post-merger cultural decline and the undermining of its engineers.",
"tags": [
"boeing",
"737 max",
"corporate culture",
"aviation",
"bloomberg"
]
},
{
"id": "FBOLk9s9Ci4",
"type": "Interview",
"india": false,
"title": "The Real Product Market Fit by Michael Seibel",
"channel": "Y Combinator",
"minutes": null,
"year": null,
"since": 2019,
"category": "Startup & Entrepreneurship",
"also": [
"Marketing & Growth"
],
"topics": [
"Product"
],
"stage": "Validation",
"gem": false,
"why": "HN points founders to YC's content like this for practical startup advice on product-market fit.",
"tags": [
"startups",
"y combinator",
"michael seibel",
"founders",
"socialcam"
]
},
{
"id": "FyK4P7ZdOK8",
"type": "Talk",
"india": false,
"title": "Cryptocurrency Explained: Money as a System-of-Control",
"channel": "aantonop",
"minutes": null,
"year": null,
"since": 2017,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited in discussions of cryptocurrency, KYC/AML and financial surveillance as a framing of money as a tool of control.",
"tags": [
"bitcoin",
"antonopoulos",
"history of money",
"financial surveillance",
"cryptocurrency"
]
},
{
"id": "GA8z7f7a2Pk",
"type": "Explainer",
"india": false,
"title": "Sasquatch music festival 2009 - Guy starts dance party",
"channel": "dkellerm",
"minutes": null,
"year": null,
"since": 2009,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Used as the classic example of a lone first follower turning one person's action into a movement, in threads about bystanders and group behavior.",
"tags": [
"dance party",
"first follower",
"crowd psychology",
"music festival",
"social movement"
]
},
{
"id": "GNG6ZzDh9C8",
"type": "Interview",
"india": false,
"title": "What is it Like to Work for Elon Musk?",
"channel": "JRE Clips",
"minutes": null,
"year": null,
"since": 2020,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN uses it as a firsthand account from an astronaut who worked with Musk, cited in arguments about Musk's engineering ability and SpaceX culture.",
"tags": [
"elon musk",
"spacex",
"garrett reisman",
"joe rogan",
"astronaut"
]
},
{
"id": "Gk-9Fd2mEnI",
"type": "Talk",
"india": false,
"title": "Steve Jobs President & CEO, NeXT Computer Corp and Apple. MIT Sloan Distinguished Speaker Series",
"channel": "MIT Video Productions",
"minutes": null,
"year": null,
"since": 2018,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it as a primary source for Jobs's own views, pulling timestamps on topics like consultants, objects, NeXT's factory and Apple retail.",
"tags": [
"steve jobs",
"next computer",
"apple history",
"entrepreneurship",
"mit sloan"
]
},
{
"id": "GyFkWb903aU",
"type": "Interview",
"india": false,
"title": "How We Prevent the AI’s from Killing us with Paul Christiano",
"channel": "Bankless",
"minutes": null,
"year": null,
"since": 2023,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "HN links it as a balanced, full-length interview with a leading alignment researcher on AI risk.",
"tags": [
"paul christiano",
"ai risk",
"alignment",
"ai takeover",
"openai"
]
},
{
"id": "HNQ3GccCAI0",
"type": "Explainer",
"india": false,
"title": "Crowd Wisdom Principles",
"channel": "Hypermind",
"minutes": null,
"year": null,
"since": 2023,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN people cite it as a short explanation of how aggregated individual guesses approach the truth.",
"tags": [
"collective intelligence",
"forecasting",
"diversity theorem",
"aggregation"
]
},
{
"id": "IJEaMtNN_dM",
"type": "Explainer",
"india": false,
"title": "The Hidden Rules of Conversation",
"channel": "Tom Scott",
"minutes": null,
"year": null,
"since": 2020,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN uses it as a short, clear explanation of implied meaning in conversation and the cooperative principle.",
"tags": [
"gricean maxims",
"linguistics",
"implicature",
"communication",
"cooperative principle"
]
},
{
"id": "JQuHSQXxsjM",
"type": "Talk",
"india": false,
"title": "Austerity: The History of a Dangerous Idea | Mark Blyth | Talks at Google",
"channel": "Talks at Google",
"minutes": null,
"year": null,
"since": 2015,
"category": "Investment & Venture Capital",
"also": [],
"topics": [
"Ideas"
],
"stage": null,
"gem": false,
"why": "HN commenters bring it up in economics and politics threads as a historical critique of austerity policy and the thinking behind it.",
"tags": [
"austerity",
"financial crisis",
"government debt",
"european economy",
"political economy"
]
},
{
"id": "JZ017D_JOPY",
"type": "Interview",
"india": false,
"title": "Linus Torvalds on his insults: respect should be earned.",
"channel": "TFiR",
"minutes": null,
"year": null,
"since": 2015,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "HN uses it as the reference for Linus's stance on rudeness and respect in debates about civility and gratuitous negativity.",
"tags": [
"linus torvalds",
"civility",
"open source culture",
"linux kernel",
"communication"
]
},
{
"id": "K1WrHH-WtaA",
"type": "Interview",
"india": false,
"title": "Steve Jobs: Sale/Marketing People vs.  Product People",
"channel": "Think Multiply",
"minutes": null,
"year": null,
"since": 2020,
"category": "Marketing & Growth",
"also": [
"Startup & Entrepreneurship",
"Founder Stories & Documentaries",
"Sales"
],
"topics": [
"Product",
"Growth",
"Sales",
"Team"
],
"stage": "First Customer",
"gem": false,
"why": "HN cites it whenever a company stagnates, from Intel to Boeing, to explain what happens when salespeople or finance run the business.",
"tags": [
"steve jobs",
"company decline",
"product management",
"marketing",
"management"
]
},
{
"id": "K8kua5B5K3I",
"type": "Documentary",
"india": false,
"title": "Inside a Secret Chinese Bitcoin Mine",
"channel": "Motherboard",
"minutes": null,
"year": null,
"since": 2017,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN links it as a rare look inside a large Chinese mining operation, with its deafening machine noise and workers' conditions.",
"tags": [
"bitcoin",
"china",
"mining farm",
"motherboard",
"cryptocurrency"
]
},
{
"id": "KClAPipnKqw",
"type": "Talk",
"india": false,
"title": "Technical leadership and glue work - Tanya Reilly | #LeadDevNewYork",
"channel": "LeadDev",
"minutes": null,
"year": null,
"since": 2020,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [
"Growth",
"Team"
],
"stage": "Growth",
"gem": false,
"why": "HN refers to it in career and promotion discussions, including its warning about doing glue work too early in your career.",
"tags": [
"glue work",
"technical leadership",
"career growth",
"promotion",
"engineering teams"
]
},
{
"id": "Ko4V3G4NqII",
"type": "Talk",
"india": false,
"title": "Macworld San Francisco 2000-The Mac OS X Introduction (Pt.1)",
"channel": "JoshuaG",
"minutes": null,
"year": null,
"since": 2012,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters cite it as primary-source evidence of what Jobs actually said about Mac OS X's design, open-source kernel and NeXT-based transition.",
"tags": [
"steve jobs",
"macworld 2000",
"aqua",
"cocoa",
"nextstep",
"apple history"
]
},
{
"id": "L-s_3b5fRd8",
"type": "Interview",
"india": false,
"title": "Elon Musk and Kevin Rose",
"channel": "Kevin Rose",
"minutes": null,
"year": null,
"since": 2012,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN pointed people to it for the original interview and Musk's concise take on first-principles thinking.",
"tags": [
"elon musk",
"first principles",
"spacex",
"tesla",
"kevin rose"
]
},
{
"id": "L6A1Lt0kvMA",
"type": "Commentary",
"india": false,
"title": "Facebook Freebooting - Smarter Every Day 128",
"channel": "SmarterEveryDay",
"minutes": null,
"year": null,
"since": 2015,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it as the first-hand account of video piracy on Facebook whenever the platform's treatment of creators comes up.",
"tags": [
"freebooting",
"facebook",
"content creators",
"copyright",
"youtube"
]
},
{
"id": "LCEmiRjPEtQ",
"type": "Talk",
"india": false,
"title": "Andrej Karpathy: Software Is Changing (Again)",
"channel": "Y Combinator",
"minutes": null,
"year": null,
"since": 2025,
"category": "SaaS & Technology",
"also": [
"Founder Stories & Documentaries"
],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "HN mostly cites it as a source for Karpathy's framing of programming in English and his generate-then-verify workflow, with a few critics finding it hype.",
"tags": [
"llms",
"software 3.0",
"vibe coding",
"ai agents",
"andrej karpathy"
]
},
{
"id": "LSxbc1IN9Gg",
"type": "Commentary",
"india": false,
"title": "I’m Legally Obligated to Disclose This - Framework investment",
"channel": "Linus Tech Tips",
"minutes": null,
"year": null,
"since": 2021,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [
"Fundraising"
],
"stage": null,
"gem": false,
"why": "HN cites it as Linus's own explanation of why he invested in Framework and why outside investment suits a hardware company.",
"tags": [
"framework laptop",
"linus tech tips",
"disclosure",
"hardware startups",
"right to repair"
]
},
{
"id": "LY7x2Ihqjmc",
"type": "Demo",
"india": false,
"title": "Sunspring | A Sci-Fi Short Film Starring Thomas Middleditch",
"channel": "Ars Technica",
"minutes": null,
"year": null,
"since": 2016,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "HN cites it as an early, quirky example of machine-generated screenplays and what LSTMs could do.",
"tags": [
"lstm",
"sunspring",
"short film",
"generative text",
"ross goodwin"
]
},
{
"id": "LpGA2fmAHvM",
"type": "Talk",
"india": false,
"title": "Founders@Google Presents: The Cultural Anthropology of Stack Exchange",
"channel": "Google TechTalks",
"minutes": null,
"year": null,
"since": 2013,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries"
],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "HN points to it to explain that Stack Overflow's strict moderation was deliberate design, not accident.",
"tags": [
"stack overflow",
"moderation",
"community",
"joel spolsky",
"culture"
]
},
{
"id": "LtITDtZPYEw",
"type": "Interview",
"india": false,
"title": "Warren Buffett: Bitcoin Is An Asset That Creates Nothing | CNBC",
"channel": "CNBC",
"minutes": null,
"year": null,
"since": 2018,
"category": "Investment & Venture Capital",
"also": [],
"topics": [
"Product",
"Fundraising"
],
"stage": null,
"gem": false,
"why": "HN links it as the primary source for Buffett's bitcoin views and his argument about productive versus non-productive assets.",
"tags": [
"warren buffett",
"bitcoin",
"cryptocurrency",
"productive assets",
"investing"
]
},
{
"id": "MRpEV2tmYz4",
"type": "Commentary",
"india": false,
"title": "Milton Friedman - Redistribution of Wealth",
"channel": "LibertyPen",
"minutes": null,
"year": null,
"since": 2011,
"category": "Customer Behaviour",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it in debates on wealth taxes, inheritance and inequality as Friedman's argument against redistribution.",
"tags": [
"milton friedman",
"inheritance tax",
"economics",
"inequality",
"libertarian"
]
},
{
"id": "MesrrYyuoa4",
"type": "Explainer",
"india": false,
"title": "The Big Short (2015) - FrontPoint Partners' investigation in Florida & first trade [HD 1080p]",
"channel": "Extractor",
"minutes": null,
"year": null,
"since": 2018,
"category": "Investment & Venture Capital",
"also": [],
"topics": [
"Fundraising"
],
"stage": null,
"gem": false,
"why": "Cited as a film scene illustrating subprime lending, housing bubbles, and people bragging about bad behavior.",
"tags": [
"the big short",
"subprime",
"housing bubble",
"film clip",
"finance"
]
},
{
"id": "Mri66Uz6-8Y",
"type": "Talk",
"india": false,
"title": "Jordan Hubbard - FreeBSD: The Next 10 Years",
"channel": "iX",
"minutes": null,
"year": null,
"since": 2014,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited in init-system and Unix debates as FreeBSD's stance on launchd versus systemd, and recommended for its view of FreeBSD's future.",
"tags": [
"freebsd",
"launchd",
"init systems",
"jordan hubbard",
"unix"
]
},
{
"id": "MtSE4rglxbY",
"type": "Talk",
"india": false,
"title": "A kinder, gentler philosophy of success | Alain de Botton",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2009,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it in discussions of wealth, status and the moral blame placed on the unsuccessful.",
"tags": [
"success and failure",
"status anxiety",
"meritocracy",
"ted talk",
"career"
]
},
{
"id": "NSaRb-iFwPA",
"type": "Podcast",
"india": false,
"title": "RR #128 - Morgan Housel: The Psychology of Money",
"channel": "The Rational Reminder Podcast",
"minutes": null,
"year": null,
"since": 2021,
"category": "Investment & Venture Capital",
"also": [
"Business Psychology"
],
"topics": [
"Fundraising"
],
"stage": null,
"gem": false,
"why": "HN points to it as an interview with Housel and as the source of his quote that financial decisions happen at the dinner table, not on a spreadsheet.",
"tags": [
"morgan housel",
"investing",
"behavioral finance",
"personal finance",
"mortgage"
]
},
{
"id": "NV3sBlRgzTI",
"type": "Interview",
"india": false,
"title": "The First Principles Method Explained by Elon Musk",
"channel": "Innomind",
"minutes": null,
"year": null,
"since": 2014,
"category": "Business Psychology",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it as the standard illustration of reasoning from first principles, including his battery cost example.",
"tags": [
"first principles",
"elon musk",
"innovation",
"reasoning",
"mental models"
]
},
{
"id": "NVVsdlHslfI",
"type": "Interview",
"india": false,
"title": "Venture Capital - Silicon Valley Ponzi Scheme - Chamath Palihapitiya",
"channel": "MAK - Mudassir Akber Khan",
"minutes": null,
"year": null,
"since": 2020,
"category": "Startup & Entrepreneurship",
"also": [
"Investment & Venture Capital"
],
"topics": [
"Fundraising"
],
"stage": "Fundraising",
"gem": false,
"why": "Cited in threads about startups, VC and private equity as an insider's description of how VC economics work, though commenters note he is self-serving.",
"tags": [
"venture capital",
"chamath palihapitiya",
"valuations",
"startups",
"fees"
]
},
{
"id": "NWHfY_lvKIQ",
"type": "Talk",
"india": false,
"title": "Learning from StackOverflow.com",
"channel": "Google TechTalks",
"minutes": null,
"year": null,
"since": 2009,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited for Joel's account of how Stack Overflow's design and community thinking were figured out from the start.",
"tags": [
"stackoverflow",
"joel spolsky",
"community",
"q&a",
"web startups"
]
},
{
"id": "Ne1ApyqSvm0",
"type": "Interview",
"india": false,
"title": "Oral History of William David \"Bill\" Mensch Jr.",
"channel": "Computer History Museum",
"minutes": null,
"year": null,
"since": 2016,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited as a firsthand account of 6502 origins and of how engineers were treated at Motorola and Commodore.",
"tags": [
"bill mensch",
"6502",
"motorola",
"commodore",
"oral history"
]
},
{
"id": "NlBjNmXvqIM",
"type": "Interview",
"india": false,
"title": "Steve jobs on why xerox failed",
"channel": "Steve Jobs",
"minutes": null,
"year": null,
"since": 2020,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries"
],
"topics": [
"Product",
"Team"
],
"stage": null,
"gem": false,
"why": "Reached for constantly as the explanation for why dominant companies like Intel, Boeing and Blizzard stop innovating.",
"tags": [
"steve jobs",
"xerox",
"monopoly",
"product management",
"corporate decline"
]
},
{
"id": "O9upVbGSBFo",
"type": "Podcast",
"india": false,
"title": "Brian Kernighan: UNIX, C, AWK, AMPL, and Go Programming | Lex Fridman Podcast #109",
"channel": "Lex Fridman",
"minutes": null,
"year": null,
"since": 2020,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Mentioned as a favorite podcast episode and as a source of firsthand computing history, such as timesharing.",
"tags": [
"brian kernighan",
"unix",
"awk",
"c language",
"computing history"
]
},
{
"id": "OXS8ljif9b8",
"type": "Interview",
"india": false,
"title": "Theo de Raadt (ruBSD 2013)",
"channel": "fuckyoustupidzombie",
"minutes": null,
"year": null,
"since": 2014,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Pointed to in OpenBSD and virtualization threads for Theo's candid views on security mitigations and supporting modern x86 VMs.",
"tags": [
"openbsd",
"theo de raadt",
"security mitigations",
"virtualization",
"bsd"
]
},
{
"id": "O_TjBNjc9Bo",
"type": "Documentary",
"india": false,
"title": "I.O.U.S.A.: Byte-Sized - The 30 Minute Version",
"channel": "IOUSAtheMovie",
"minutes": null,
"year": null,
"since": 2009,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Shared as a quick way to see the film's fiscal warnings, sometimes as an example of ignored warnings.",
"tags": [
"national debt",
"fiscal policy",
"iousa",
"us economy"
]
},
{
"id": "P0ukYf_xvgc",
"type": "Talk",
"india": false,
"title": "Kevin Spacey urges TV channels to give control to viewers",
"channel": "The Telegraph",
"minutes": null,
"year": null,
"since": 2013,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it in streaming and piracy threads as an argument that giving viewers control is how to compete.",
"tags": [
"kevin spacey",
"netflix",
"house of cards",
"streaming",
"piracy"
]
},
{
"id": "PMotykw0SIk",
"type": "Interview",
"india": false,
"title": "Chamath Palihapitiya, Founder and CEO Social Capital, on Money as an Instrument of Change",
"channel": "Stanford Graduate School of Business",
"minutes": null,
"year": null,
"since": 2017,
"category": "Business Psychology",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it in social media threads as a former Facebook executive's criticism of the platform.",
"tags": [
"chamath palihapitiya",
"facebook",
"dopamine",
"social media",
"stanford"
]
},
{
"id": "PYmi0DLzBdQ",
"type": "Explainer",
"india": false,
"title": "Orwell comes to america - clip - reason 1",
"channel": "rTests334",
"minutes": null,
"year": null,
"since": 2014,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Almost entirely one commenter's repeated citation as evidence on unconscious thinking and flawed reasoning.",
"tags": [
"unconscious thinking",
"reasoning",
"perception",
"psychology",
"cognitive bias"
]
},
{
"id": "R5Gppi-O3a8",
"type": "Explainer",
"india": false,
"title": "Power of the Market - The Pencil",
"channel": "LibertyPen",
"minutes": null,
"year": null,
"since": 2011,
"category": "Customer Behaviour",
"also": [
"Startup & Entrepreneurship"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN uses it as the canonical illustration of decentralized production and global cooperation, often cited well outside economics threads.",
"tags": [
"milton friedman",
"pencil",
"decentralization",
"supply chains",
"free to choose"
]
},
{
"id": "RKXZ7t_RiOE",
"type": "Lecture",
"india": false,
"title": "Pricing Design Work & Creativity (The Guide)",
"channel": "The Futur",
"minutes": null,
"year": null,
"since": 2019,
"category": "Startup & Entrepreneurship",
"also": [
"Marketing & Growth",
"Sales"
],
"topics": [
"Sales"
],
"stage": null,
"gem": false,
"why": "Recommended in threads on freelance design pricing and why large corporations pay a lot for branding work.",
"tags": [
"value-based pricing",
"freelancing",
"design business",
"logo design",
"blair enns"
]
},
{
"id": "RMWNvwLiXIQ",
"type": "Commentary",
"india": false,
"title": "The Story Behind Audacity",
"channel": "Tantacrul",
"minutes": null,
"year": null,
"since": 2021,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN recommends it during the Muse Group acquisition controversy for its funny, pragmatic take on usability and open source stewardship.",
"tags": [
"audacity",
"musescore",
"usability",
"open source",
"software design"
]
},
{
"id": "RwRZtZQoLtQ",
"type": "Interview",
"india": false,
"title": "Chamath Palihapitiya on rebuilding Social Capital & Silicon Valley ponzi scheme",
"channel": "This Week in Startups",
"minutes": null,
"year": null,
"since": 2018,
"category": "Startup & Entrepreneurship",
"also": [
"Investment & Venture Capital",
"SaaS & Technology"
],
"topics": [
"Fundraising"
],
"stage": "Fundraising",
"gem": false,
"why": "HN cites it for Chamath's claim that venture-backed growth resembles a Ponzi scheme, especially when startups spend heavily on big-tech advertising.",
"tags": [
"chamath palihapitiya",
"venture capital",
"social capital",
"startups",
"silicon valley"
]
},
{
"id": "Tct38KwROdw",
"type": "Explainer",
"india": false,
"title": "Giving birth costs a lot. Hospitals won't tell you how much.",
"channel": "Vox",
"minutes": null,
"year": null,
"since": 2017,
"category": "Customer Behaviour",
"also": [
"Sales"
],
"topics": [
"Sales"
],
"stage": null,
"gem": false,
"why": "HN cites it as the go-to example of how impossible it is to get prices in advance for US medical care.",
"tags": [
"hospital prices",
"childbirth",
"price transparency",
"health insurance",
"vox"
]
},
{
"id": "Tl9kD693ie4",
"type": "Talk",
"india": false,
"title": "MIX08 Microsoft Office 2007: The Story of the Ribbon (1 of 10)",
"channel": "creativecrewchannel",
"minutes": null,
"year": null,
"since": 2011,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN points to it to explain the design rationale behind the Ribbon and why the older menu and toolbar interface had accumulated too much cruft.",
"tags": [
"office ribbon",
"ux design",
"microsoft office",
"usability research",
"prototyping"
]
},
{
"id": "U5kIdtMJGc8",
"type": "Interview",
"india": false,
"title": "The mathematician who cracked Wall Street | Jim Simons",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2019,
"category": "Investment & Venture Capital",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it as a view of Simons as a humble, pragmatic person, with the caveat that the host's questions are weak.",
"tags": [
"jim simons",
"quantitative finance",
"mathematics",
"philanthropy",
"ted"
]
},
{
"id": "U88jj6PSD7w",
"type": "Commentary",
"india": false,
"title": "Slavoj Žižek | Why Be Happy When You Could Be Interesting? | Big Think",
"channel": "Big Think",
"minutes": null,
"year": null,
"since": 2014,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN shares it as a short, provocative counterpoint in threads on purpose, goals and the pursuit of happiness.",
"tags": [
"zizek",
"happiness",
"philosophy",
"purpose",
"big think"
]
},
{
"id": "UBVV8pch1dM",
"type": "Explainer",
"india": false,
"title": "The Science of Thinking",
"channel": "Veritasium",
"minutes": null,
"year": null,
"since": 2017,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN uses it as a short, clear summary of the fast and slow thinking idea.",
"tags": [
"veritasium",
"system 1 and 2",
"kahneman",
"learning",
"cognitive psychology"
]
},
{
"id": "UGttmR2DTY8",
"type": "Demo",
"india": false,
"title": "Bike Thief 2012",
"channel": "CaseyNeistat",
"minutes": null,
"year": null,
"since": 2013,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it as a demonstration of how easily bikes get stolen in public.",
"tags": [
"bike theft",
"casey neistat",
"new york city",
"social experiment",
"bike locks"
]
},
{
"id": "UWacQrEcMHk",
"type": "Commentary",
"india": false,
"title": "New Blender UI - The Proposal",
"channel": "Blender Guru",
"minutes": null,
"year": null,
"since": 2017,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Seen as an inflection point in how Blender's UI was perceived, and as helping kick off the 2.8 redesign.",
"tags": [
"blender",
"ui design",
"usability",
"3d software",
"redesign"
]
},
{
"id": "V74AxCqOTvg",
"type": "Talk",
"india": false,
"title": "How to start a movement | Derek Sivers",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2010,
"category": "Business Psychology",
"also": [
"Startup & Entrepreneurship"
],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "Recommended as a short leadership talk that commenters have shown to many people.",
"tags": [
"leadership",
"followers",
"ted",
"movements",
"derek sivers"
]
},
{
"id": "VOMWzjrRiBg",
"type": "Documentary",
"india": false,
"title": "There's No Tomorrow (limits to growth & the future)",
"channel": "incubatepictures",
"minutes": null,
"year": null,
"since": 2015,
"category": "Investment & Venture Capital",
"also": [],
"topics": [
"Growth"
],
"stage": "Growth",
"gem": false,
"why": "HN links it in threads about energy shocks and resource dependence as a quick, accessible overview of peak-oil arguments.",
"tags": [
"peak oil",
"resource depletion",
"exponential growth",
"energy",
"animation"
]
},
{
"id": "VVvnTByzTmA",
"type": "Interview",
"india": false,
"title": "Thomas Sowell: affirmative action creates academic failure & resentment",
"channel": "Gravitahn",
"minutes": null,
"year": null,
"since": 2018,
"category": "Customer Behaviour",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it in threads on college admissions and affirmative action as Sowell's argument about unintended consequences.",
"tags": [
"thomas sowell",
"college admissions",
"mismatch",
"preferential policies",
"public policy"
]
},
{
"id": "VeSgaJt27PM",
"type": "Interview",
"india": false,
"title": "Douglas Engelbart Interviewed by John Markoff of the New York Times",
"channel": "Computer History Museum",
"minutes": null,
"year": null,
"since": 2014,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it for Engelbart's own account of his philosophy, in which computers augment human thinking instead of mimicking paper.",
"tags": [
"engelbart",
"computer history",
"augmenting intellect",
"mother of all demos",
"human-computer interaction"
]
},
{
"id": "WE58YisgFeQ",
"type": "Documentary",
"india": false,
"title": "The Death of Europe's Last Electronics Giant",
"channel": "TechAltar",
"minutes": null,
"year": null,
"since": 2023,
"category": "SaaS & Technology",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN points to it when asked why many Philips-branded products aren't made by Philips, and for the company's decline.",
"tags": [
"philips",
"corporate history",
"electronics industry",
"brand licensing",
"europe"
]
},
{
"id": "WOOw2yWMSfk",
"type": "Explainer",
"india": false,
"title": "Bulletball",
"channel": "zorak007",
"minutes": null,
"year": null,
"since": 2008,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [
"Ideas"
],
"stage": "Idea",
"gem": false,
"why": "Mostly used as a cautionary tale about risking everything on a weak idea, with one commenter seeing it as a lesson in determination.",
"tags": [
"bulletball",
"inventor",
"entrepreneurship",
"bad ideas",
"persistence"
]
},
{
"id": "XCvwCcEP74Q",
"type": "Talk",
"india": false,
"title": "The Four Horsemen: Amazon/Apple/Facebook & Google - Who Wins/Loses (Scott Galloway, L2 Inc.) | DLD15",
"channel": "DLD Conference",
"minutes": null,
"year": null,
"since": 2015,
"category": "Marketing & Growth",
"also": [
"SaaS & Technology"
],
"topics": [],
"stage": null,
"gem": false,
"why": "Shared in 2015 threads as an insightful framework for strategic moves by the big tech companies.",
"tags": [
"scott galloway",
"amazon",
"apple",
"business strategy",
"retail"
]
},
{
"id": "XGbPHp6QfkQ",
"type": "Commentary",
"india": false,
"title": "The Mk8 VW GTI isn't as good as its predecessor. | Revelations with Jason Cammisa | Ep. 11",
"channel": "Hagerty",
"minutes": null,
"year": null,
"since": 2021,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it in threads on touchscreens versus physical buttons in cars, as an example of an enthusiast's critique of VW's UX.",
"tags": [
"vw gti",
"jason cammisa",
"car ux",
"touchscreens",
"physical buttons"
]
},
{
"id": "XZJc1p6RE78",
"type": "Explainer",
"india": false,
"title": "Ch(e)at GPT? - Computerphile",
"channel": "Computerphile",
"minutes": null,
"year": null,
"since": 2023,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "Linked as the approachable explanation whenever HN discusses detecting or watermarking AI-generated text.",
"tags": [
"computerphile",
"watermarking",
"chatgpt",
"ai detection",
"language models"
]
},
{
"id": "Ya6h2zKlpaQ",
"type": "Podcast",
"india": false,
"title": "The Cantrill Strikes Back | BSD Now 117",
"channel": "Jupiter Broadcasting",
"minutes": null,
"year": null,
"since": 2015,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited as a casual, insightful conversation with Cantrill, and referenced for his views on containers and unikernels.",
"tags": [
"bryan cantrill",
"bsd",
"linux interfaces",
"containers",
"unikernels"
]
},
{
"id": "ZJUyVVFOXOc",
"type": "Demo",
"india": false,
"title": "S1E8: Show And Tell: Efrit: When Steve Gives Claude Full Access To 50 Years of Emacs Capabilities",
"channel": "Vibe Coding With Steve and Gene",
"minutes": null,
"year": null,
"since": 2025,
"category": "SaaS & Technology",
"also": [
"Founder Stories & Documentaries"
],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "HN shares it as a fun demo of an LLM driving a live Emacs process and orchestrating its long-standing ecosystem.",
"tags": [
"efrit",
"emacs",
"claude",
"steve yegge",
"agentic coding"
]
},
{
"id": "ZR0ujwlvbkQ",
"type": "Lecture",
"india": false,
"title": "Grace Hopper Lecture",
"channel": "MIT Lincoln Laboratory",
"minutes": null,
"year": null,
"since": 2017,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited for her vivid illustration of orders of magnitude in latency, and as an example of a great computing pioneer as teacher.",
"tags": [
"grace hopper",
"nanosecond",
"latency",
"computing history",
"compilers"
]
},
{
"id": "ZZ3F3zWiEmc",
"type": "Explainer",
"india": false,
"title": "The Art Market is a Scam (And Rich People Run It)",
"channel": "Wendover Productions",
"minutes": null,
"year": null,
"since": 2021,
"category": "Customer Behaviour",
"also": [
"Startup & Entrepreneurship"
],
"topics": [],
"stage": null,
"gem": false,
"why": "Used to explain why contemporary art is expensive for money reasons rather than art reasons.",
"tags": [
"art market",
"wealth",
"auctions",
"contemporary art",
"wendover"
]
},
{
"id": "_2NI6t2r_Hs",
"type": "Talk",
"india": false,
"title": "The History of Unix, Rob Pike",
"channel": "Stephanie Borgman",
"minutes": null,
"year": null,
"since": 2018,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Mostly cited as a source of Unix history stories and asides such as the Crabs prank program and the BLIT terminal.",
"tags": [
"rob pike",
"unix",
"bell labs",
"history of computing",
"blit"
]
},
{
"id": "_6sh097Dk5k",
"type": "Talk",
"india": false,
"title": "A History of The ARM Microprocessor | Dave Jaggar | Talks at Google",
"channel": "Talks at Google",
"minutes": null,
"year": null,
"since": 2020,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it for first-hand ARM history, including Thumb's origin, and for Jaggar's endorsement of RISC-V.",
"tags": [
"arm",
"acorn",
"thumb",
"risc-v",
"dave jaggar"
]
},
{
"id": "_9LX9HSQkWo",
"type": "Demo",
"india": false,
"title": "Did We Just Change Animation Forever?",
"channel": "Corridor Crew",
"minutes": null,
"year": null,
"since": 2023,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "HN cites it as an example of temporally stable AI video stylization built from ordinary production gear.",
"tags": [
"stable diffusion",
"dreambooth",
"anime",
"video stylization",
"vfx"
]
},
{
"id": "_mP9OmOFxc4",
"type": "Podcast",
"india": false,
"title": "Joe Rogan Experience #1236 - Jack Dorsey",
"channel": "PowerfulJRE",
"minutes": null,
"year": null,
"since": 2019,
"category": "SaaS & Technology",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN uses it as a source on Dorsey's views on Twitter moderation, with mixed opinions on how well he answered censorship questions.",
"tags": [
"jack dorsey",
"twitter",
"joe rogan",
"content moderation",
"interview"
]
},
{
"id": "aFdpBqmDpzM",
"type": "Talk",
"india": false,
"title": "AWS re:Invent 2020: Working backwards: Amazon’s approach to innovation",
"channel": "AWS Events",
"minutes": null,
"year": null,
"since": 2021,
"category": "Marketing & Growth",
"also": [
"Startup & Entrepreneurship",
"Founder Stories & Documentaries"
],
"topics": [
"Product",
"Team"
],
"stage": null,
"gem": false,
"why": "HN cites it as the primary source for Amazon's Working Backwards method whenever product-definition approaches come up.",
"tags": [
"working backwards",
"pr-faq",
"amazon",
"innovation",
"product management"
]
},
{
"id": "agMrewRJTow",
"type": "Explainer",
"india": false,
"title": "How Lexus Fixed Tesla's Bad Idea: Steer-By-Wire Yoke",
"channel": "Engineering Explained",
"minutes": null,
"year": null,
"since": 2023,
"category": "SaaS & Technology",
"also": [],
"topics": [
"Ideas"
],
"stage": null,
"gem": false,
"why": "HN points to it to explain how steer-by-wire is implemented and why variable steering ratio is its benefit.",
"tags": [
"steer by wire",
"lexus",
"tesla yoke",
"variable steering ratio",
"automotive"
]
},
{
"id": "b9ifQvQCO7Y",
"type": "Demo",
"india": false,
"title": "Longhorn concept",
"channel": "Arkmage2",
"minutes": null,
"year": null,
"since": 2009,
"category": "SaaS & Technology",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited to contrast Microsoft's ambitious Longhorn vision with the Vista that actually shipped.",
"tags": [
"longhorn",
"windows vista",
"ui concept",
"microsoft"
]
},
{
"id": "bBx2Y5HhplI",
"type": "Talk",
"india": false,
"title": "Nick Hanauer on inequality",
"channel": "WatchExtraVideo",
"minutes": null,
"year": null,
"since": 2012,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited in debates about taxes, job creation and wealth redistribution, and for the controversy around its release.",
"tags": [
"nick hanauer",
"ted",
"inequality",
"taxes",
"job creators"
]
},
{
"id": "bQECSInWVPY",
"type": "Interview",
"india": false,
"title": "Steve Jobs on Virtual Reality (D3, 2005)",
"channel": "Milan Lajtoš",
"minutes": null,
"year": null,
"since": 2023,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters cite it in Vision Pro and AR threads as Jobs's concise take that a headset is like headphones for video.",
"tags": [
"steve jobs",
"vision pro",
"vr",
"apple",
"spatial computing"
]
},
{
"id": "bQfJi7rjuEk",
"type": "Talk",
"india": false,
"title": "Intelligence is not Enough | Bryan Cantrill | Monktoberfest 2023",
"channel": "RedMonk Tech Events",
"minutes": null,
"year": null,
"since": 2023,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Team",
"AI"
],
"stage": null,
"gem": false,
"why": "Recommended as a thoughtful Cantrill talk on embracing failure and curiosity in engineering, and as a skeptical counterpoint to AI doom narratives.",
"tags": [
"ai",
"doomerism",
"bryan cantrill",
"engineering culture",
"skepticism"
]
},
{
"id": "bdJKjBHCh18",
"type": "Interview",
"india": false,
"title": "Bill Atkinson: Hypercard",
"channel": "TWiT Tech Podcast Network",
"minutes": null,
"year": null,
"since": 2022,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN links it as the source of the story that HyperCard was inspired by an acid trip.",
"tags": [
"bill atkinson",
"hypercard",
"apple history",
"interview"
]
},
{
"id": "bhyYgnhhKFw",
"type": "Explainer",
"india": false,
"title": "The True Cost of the Royal Family Explained",
"channel": "CGP Grey",
"minutes": null,
"year": null,
"since": 2013,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters cite it in monarchy debates as the explainer claiming the royals make money for the UK, with some disputing it.",
"tags": [
"monarchy",
"uk",
"taxes",
"crown estate",
"cgp grey"
]
},
{
"id": "bq2_wSsDwkQ",
"type": "Commentary",
"india": false,
"title": "Journalism: Last Week Tonight with John Oliver (HBO)",
"channel": "LastWeekTonight",
"minutes": null,
"year": null,
"since": 2016,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it in discussions of news economics and repackaged reporting, though some commenters say they distrust Oliver as a source.",
"tags": [
"journalism",
"newspapers",
"john oliver",
"media economics",
"local news"
]
},
{
"id": "bwhU9goCiaI",
"type": "Explainer",
"india": false,
"title": "How Japan Learned Semiconductors",
"channel": "Asianometry",
"minutes": null,
"year": null,
"since": 2022,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN points to it as an excellent history of how Japan entered chips, including government-coordinated cooperation like the VLSI project.",
"tags": [
"asianometry",
"vlsi project",
"semiconductors",
"industrial policy",
"japan"
]
},
{
"id": "c-FGwDDc-s8",
"type": "Commentary",
"india": false,
"title": "DEBUNKING ELON MUSK Pt1 (1080p)",
"channel": "Common Sense Skeptic",
"minutes": null,
"year": null,
"since": 2021,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN mentions it mostly as critical commentary on Musk, with one commenter saying it tempered their view.",
"tags": [
"elon musk",
"paypal",
"tesla",
"debunking"
]
},
{
"id": "c01BlUDIlK4",
"type": "Interview",
"india": false,
"title": "Moore's Law is Not Dead (Jim Keller) | AI Podcast Clips",
"channel": "Lex Fridman",
"minutes": null,
"year": null,
"since": 2021,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "Used to support the argument that chip engineers see plenty of scaling headroom left.",
"tags": [
"jim keller",
"chip design",
"transistor scaling",
"semiconductors",
"lex fridman"
]
},
{
"id": "c5QF2HjHLSE",
"type": "Talk",
"india": false,
"title": "\"Design in Practice\" by Rich Hickey",
"channel": "ClojureTV",
"minutes": null,
"year": null,
"since": 2023,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "HN draws on it for practical decision-making and problem-framing techniques that apply well beyond Clojure.",
"tags": [
"rich hickey",
"decision matrix",
"problem statements",
"team decisions",
"clojure"
]
},
{
"id": "c6SUOeAqOjU",
"type": "Commentary",
"india": false,
"title": "Computers for Cynics 2 - It All Went Wrong at Xerox PARC",
"channel": "TheTedNelson",
"minutes": null,
"year": null,
"since": 2014,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN readers treat it as a contrarian counterpoint to the usual PARC mythology, though one commenter noted a few apparent mistakes in it.",
"tags": [
"ted nelson",
"xerox parc",
"computer history",
"hypertext",
"gui"
]
},
{
"id": "cOubCHLXT6A",
"type": "Talk",
"india": false,
"title": "Balaji Srinivasan at Startup School 2013",
"channel": "Y Combinator",
"minutes": null,
"year": null,
"since": 2013,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters link it as the original talk so people can judge it directly instead of through press retellings.",
"tags": [
"balaji srinivasan",
"startup school",
"exit",
"technology and politics"
]
},
{
"id": "cPNkH-7PRTk",
"type": "Talk",
"india": false,
"title": "Clojure for Lisp Programmers Part 1 - Rich Hickey",
"channel": "ClojureTV",
"minutes": null,
"year": null,
"since": 2017,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Referenced for Hickey's reasoning on design choices such as macros and not building on SBCL.",
"tags": [
"clojure",
"rich hickey",
"lisp",
"macros",
"language design"
]
},
{
"id": "cfSIC8jwbQs",
"type": "Explainer",
"india": false,
"title": "The centuries-old debt that's still paying interest",
"channel": "Tom Scott",
"minutes": null,
"year": null,
"since": 2021,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Shared as a short, interesting explainer on very long-lived financial instruments.",
"tags": [
"tom scott",
"bonds",
"dutch water boards",
"finance history",
"yale"
]
},
{
"id": "ckBfbvOXDvU",
"type": "Demo",
"india": false,
"title": "Red Bead Experiment with Dr. W. Edwards Deming",
"channel": "The Deming Institute",
"minutes": null,
"year": null,
"since": 2016,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "HN cites it as a classic illustration of dysfunctional management, gamed targets, and blaming workers for systemic outcomes.",
"tags": [
"deming",
"red bead experiment",
"quality management",
"metrics",
"variation"
]
},
{
"id": "d8BcCLLX4N4",
"type": "Explainer",
"india": false,
"title": "How to slow down a stock exchange",
"channel": "Tom Scott",
"minutes": null,
"year": null,
"since": 2019,
"category": "Investment & Venture Capital",
"also": [
"SaaS & Technology"
],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited as a quick, visual explanation of IEX's deliberate latency and of artificial delay as a fairness tool.",
"tags": [
"iex",
"stock exchange",
"latency",
"fiber",
"market fairness"
]
},
{
"id": "dEv99vxKjVI",
"type": "Interview",
"india": false,
"title": "Elon Musk: Tesla Autopilot | Lex Fridman Podcast #18",
"channel": "Lex Fridman",
"minutes": null,
"year": null,
"since": 2019,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN mostly cites it as a record of Musk's self-driving claims and timelines, often sarcastically in threads about missed FSD promises.",
"tags": [
"elon musk",
"tesla",
"autopilot",
"self-driving",
"lex fridman"
]
},
{
"id": "dmeRQN9z504",
"type": "Interview",
"india": false,
"title": "Andy Matuschak — The reason most learning tools fail",
"channel": "Dwarkesh Patel",
"minutes": null,
"year": null,
"since": 2024,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Pointed to in threads on spaced repetition, tutoring and education as a thoughtful treatment of what effective learning requires.",
"tags": [
"spaced repetition",
"andy matuschak",
"education",
"tutoring",
"learning tools"
]
},
{
"id": "dxk8b9rSKOo",
"type": "Talk",
"india": false,
"title": "Velocity 2011:  Jon Jenkins, \"Velocity Culture\"",
"channel": "O'Reilly",
"minutes": null,
"year": null,
"since": 2012,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "HN commenters cite it as a primary source for facts such as Amazon.com running on AWS and its very frequent deployments.",
"tags": [
"amazon",
"aws",
"devops",
"deployment frequency",
"velocity conf"
]
},
{
"id": "e_1a6bHGQGo",
"type": "Talk",
"india": false,
"title": "Don Knuth - Constraint Based Composition",
"channel": "ccrmalite1",
"minutes": null,
"year": null,
"since": 2016,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Shared as a great talk showing Knuth's musical side and how he applies constraint techniques to composition.",
"tags": [
"donald knuth",
"pipe organ",
"constraints",
"composition",
"ccrma"
]
},
{
"id": "fxbCHn6gE3U",
"type": "Talk",
"india": false,
"title": "The surprising habits of original thinkers | Adam Grant | TED",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2018,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Mentioned when discussing how to become more creative and why non-conformists are undervalued.",
"tags": [
"creativity",
"originality",
"procrastination",
"failure",
"psychology"
]
},
{
"id": "gRelVFm7iJE",
"type": "Explainer",
"india": false,
"title": "Bill Gates - Microsoft Antitrust Deposition - Highlights",
"channel": "Joe John",
"minutes": null,
"year": null,
"since": 2020,
"category": "SaaS & Technology",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it as a view of Gates evading questions and sparring with a top lawyer.",
"tags": [
"bill gates",
"deposition",
"antitrust",
"microsoft",
"david boies"
]
},
{
"id": "gzgyksS5pX8",
"type": "Talk",
"india": false,
"title": "Change w/ Jim Keller",
"channel": "Tenstorrent",
"minutes": null,
"year": null,
"since": 2023,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "HN commenters cite it as a thoughtful talk from a legendary chip architect, both for the s-curves view of progress and for concrete technical details on semiconductor scaling.",
"tags": [
"jim keller",
"moore's law",
"semiconductors",
"s-curves",
"ai hardware"
]
},
{
"id": "hKcOkWzj0_s",
"type": "Talk",
"india": false,
"title": "Caml Trading",
"channel": "Yaron Minsky",
"minutes": null,
"year": null,
"since": 2013,
"category": "SaaS & Technology",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "Cited as evidence for OCaml's readability benefits and for hiring in less popular languages.",
"tags": [
"ocaml",
"jane street",
"functional programming",
"trading systems",
"hiring"
]
},
{
"id": "hM_h0UA7upI",
"type": "Podcast",
"india": false,
"title": "No Priors Ep. 80 | With Andrej Karpathy from OpenAI and Tesla",
"channel": "No Priors: AI, Machine Learning, Tech, & Startups",
"minutes": null,
"year": null,
"since": 2024,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "Commenters cite it for Karpathy's views on Tesla versus Waymo, neural networks as a path to AGI, and the quality of internet data for LLMs.",
"tags": [
"andrej karpathy",
"tesla",
"waymo",
"llm training data",
"eureka labs"
]
},
{
"id": "hcRxFRgNpns",
"type": "Interview",
"india": false,
"title": "Blitzscaling 08: Eric Schmidt on Structuring Teams and Scaling Google",
"channel": "Greylock",
"minutes": null,
"year": null,
"since": 2016,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries"
],
"topics": [
"Team"
],
"stage": "Growth",
"gem": false,
"why": "Cited as a first-hand source for how Google's leadership thought about hiring, organization and the Alphabet restructuring.",
"tags": [
"eric schmidt",
"google",
"alphabet",
"management",
"blitzscaling"
]
},
{
"id": "hsIpQ7YguGE",
"type": "Lecture",
"india": false,
"title": "Milton Friedman - Case Against Equal Pay for Equal Work",
"channel": "LibertyPen",
"minutes": null,
"year": null,
"since": 2016,
"category": "Customer Behaviour",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited in debates over pay equity law as Friedman's free-market argument on discrimination.",
"tags": [
"milton friedman",
"discrimination",
"labor markets",
"free market",
"wages"
]
},
{
"id": "i9jIsxQNz0M",
"type": "Demo",
"india": false,
"title": "New York Subway Signs",
"channel": "Yosef Lerner",
"minutes": null,
"year": null,
"since": 2017,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "It is linked in threads on pointing-and-calling and error prevention as a light illustration of the practice.",
"tags": [
"nyc subway",
"poka-yoke",
"safety practices",
"social experiment"
]
},
{
"id": "iCI3B5eT9NA",
"type": "Interview",
"india": false,
"title": "Ladyada interview with Paul Horowitz - The Art of Electronics @adafruit @electronicsbook",
"channel": "Adafruit Industries",
"minutes": null,
"year": null,
"since": 2015,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Pointed to as a companion to the Art of Electronics book, for people curious about the authors.",
"tags": [
"art of electronics",
"paul horowitz",
"adafruit",
"electronics",
"books"
]
},
{
"id": "i_mLxyIXpSY",
"type": "Explainer",
"india": false,
"title": "Lessons from a Can Opener",
"channel": "Technology Connections",
"minutes": null,
"year": null,
"since": 2022,
"category": "SaaS & Technology",
"also": [],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "It gets mentioned as a thought-provoking video that changes how you look at everyday objects, though HN mentions are sparse.",
"tags": [
"can opener",
"product design",
"technology connections",
"mechanisms"
]
},
{
"id": "i_yJTCDU4uE",
"type": "Interview",
"india": false,
"title": "Peter Thiel on Stagnation, Innovation, and What Not To Name Your Company | Conversations with Tyler",
"channel": "Mercatus Center",
"minutes": null,
"year": null,
"since": 2017,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN people point to it as a strong interview and as the source of Thiel's stagnation thesis.",
"tags": [
"peter thiel",
"tyler cowen",
"great stagnation",
"innovation",
"startups"
]
},
{
"id": "ia7IKW0yuG0",
"type": "Commentary",
"india": false,
"title": "The Cult of Conformity in Silicon Valley",
"channel": "Y Combinator",
"minutes": null,
"year": null,
"since": 2023,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "Linked in threads about YC culture and big tech burnout, as YC partners themselves acknowledging the trend.",
"tags": [
"y combinator",
"conformity",
"silicon valley",
"founders",
"big tech"
]
},
{
"id": "iv-5mZ_9CPY",
"type": "Explainer",
"india": false,
"title": "But how do AI images and videos actually work? | Guest video by Welch Labs",
"channel": "3Blue1Brown",
"minutes": null,
"year": null,
"since": 2025,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "HN uses it as a clear explainer for diffusion mechanics, such as negative prompts and faster sampling, and for joint text-image encoders.",
"tags": [
"diffusion",
"clip",
"ddpm",
"classifier-free guidance",
"image generation"
]
},
{
"id": "j800SVeiS5I",
"type": "Explainer",
"india": false,
"title": "IN-SHADOW - A Modern Odyssey - Animated Short Film",
"channel": "SPELLBREAKER Studio",
"minutes": null,
"year": null,
"since": 2020,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited as a visual illustration of the Jungian shadow, including in arguments about national or collective shadows and conformity.",
"tags": [
"animation",
"carl jung",
"short film",
"psychology",
"symbolism"
]
},
{
"id": "jaoQh6BoH3c",
"type": "Talk",
"india": false,
"title": "The Secret of Our Success | Joseph Henrich | Talks at Google",
"channel": "Talks at Google",
"minutes": null,
"year": null,
"since": 2018,
"category": "Business Psychology",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "Cited to support the view that human progress comes from networks and social learning.",
"tags": [
"joseph henrich",
"collective intelligence",
"social learning",
"anthropology",
"culture"
]
},
{
"id": "jltnBOrCB7I",
"type": "Commentary",
"india": false,
"title": "Milton Friedman justifies not recalling the ford pinto",
"channel": "RepublicansSuckDlCK",
"minutes": null,
"year": null,
"since": 2015,
"category": "Customer Behaviour",
"also": [],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "HN uses it as an example of cost-benefit reasoning about product safety in threads on recalls, security spending and Boeing.",
"tags": [
"milton friedman",
"ford pinto",
"recalls",
"business ethics",
"safety tradeoffs"
]
},
{
"id": "juWaO5TJS00",
"type": "Documentary",
"india": false,
"title": "Lego-style apartment transforms into infinite spaces",
"channel": "Kirsten Dirksen",
"minutes": null,
"year": null,
"since": 2012,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN people link it as an example of a transformable small apartment in threads on micro-apartments and space-saving furniture.",
"tags": [
"tiny apartment",
"transformable furniture",
"micro-apartments",
"barcelona",
"space saving"
]
},
{
"id": "lBfVxBj61z0",
"type": "Interview",
"india": false,
"title": "Jellyvision Q&A with DHH & Jason Fried",
"channel": "JellyvisionLab",
"minutes": null,
"year": null,
"since": 2014,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN points to it as an example of the founders' realistic, down-to-earth approach and their bootstrapped, lifestyle-business philosophy.",
"tags": [
"dhh",
"jason fried",
"basecamp",
"open source",
"bootstrapping"
]
},
{
"id": "lKhAd0Tyny0",
"type": "Demo",
"india": false,
"title": "Capuchin monkeys reject unequal pay",
"channel": "TVPUniversity",
"minutes": null,
"year": null,
"since": 2014,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it in discussions of pay fairness and inequality as a short, funny demonstration of the fairness instinct.",
"tags": [
"capuchin monkeys",
"frans de waal",
"fairness",
"unequal pay",
"animal behavior"
]
},
{
"id": "lnq-2BJwatE",
"type": "Talk",
"india": false,
"title": "Anathem | Neal Stephenson | Talks at Google",
"channel": "Talks at Google",
"minutes": null,
"year": null,
"since": 2008,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN uses it mainly as the place where Stephenson addresses criticism of his novels' endings, plus as a fun author talk with jokes.",
"tags": [
"anathem",
"science fiction",
"author talk",
"book tour",
"novel endings"
]
},
{
"id": "lsWndfzuOc4",
"type": "Explainer",
"india": false,
"title": "Marxism: Zizek/Peterson:  Official Video",
"channel": "Jordan B Peterson",
"minutes": null,
"year": null,
"since": 2019,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN uses it as a reference for Zizek's views and as an exercise in critical thinking, not as a strong recommendation.",
"tags": [
"jordan peterson",
"slavoj zizek",
"marxism",
"capitalism",
"happiness"
]
},
{
"id": "mLEOZO1GwVc",
"type": "Interview",
"india": false,
"title": "Edsger Dijkstra interview",
"channel": "Hans Otten",
"minutes": null,
"year": null,
"since": 2023,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Shared as a primary source for Dijkstra's views, such as his approach to writing code on paper.",
"tags": [
"dijkstra",
"computer science history",
"programming philosophy",
"correctness",
"interview"
]
},
{
"id": "mu-tJc-BgaI",
"type": "Demo",
"india": false,
"title": "Model 3 Emergency Mechanical Door Release Demo",
"channel": "EveryAmp",
"minutes": null,
"year": null,
"since": 2021,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it in threads about Teslas trapping occupants to show how the manual release is located and used.",
"tags": [
"tesla",
"model 3",
"door handle",
"emergency release",
"vehicle safety"
]
},
{
"id": "nWTvXbQHwWs",
"type": "Interview",
"india": false,
"title": "Chris Lattner: The Future of Computing and Programming Languages | Lex Fridman Podcast #131",
"channel": "Lex Fridman",
"minutes": null,
"year": null,
"since": 2021,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Mentioned as an interesting Lattner conversation whenever Swift, LLVM or language design come up.",
"tags": [
"chris lattner",
"swift",
"llvm",
"risc-v",
"lex fridman"
]
},
{
"id": "nfRouGH0oMg",
"type": "Interview",
"india": false,
"title": "Lamport on writing \"Time, Clocks, and the Ordering of Events in a Distributed System\"",
"channel": "Turing Awardee Clips",
"minutes": null,
"year": null,
"since": 2023,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it as a primary source for Lamport's relativity inspiration behind logical clocks in distributed systems threads.",
"tags": [
"leslie lamport",
"distributed systems",
"lamport clocks",
"special relativity",
"computing history"
]
},
{
"id": "nnsSUqgkDwU",
"type": "Explainer",
"india": false,
"title": "Parisian Love",
"channel": "Google",
"minutes": null,
"year": null,
"since": 2010,
"category": "Marketing & Growth",
"also": [],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "HN cites it as a model of emotional product storytelling and as inspiration for visualizing one's own search history as a narrative.",
"tags": [
"google",
"advertising",
"search stories",
"storytelling",
"super bowl"
]
},
{
"id": "o0Bi-q89j5Y",
"type": "Interview",
"india": false,
"title": "Richard Wolff: Marxism and Communism | Lex Fridman Podcast #295",
"channel": "Lex Fridman",
"minutes": null,
"year": null,
"since": 2022,
"category": "Customer Behaviour",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN mentions it occasionally as a source for Wolff's views, such as on worker co-ops, rather than as a widely recommended watch.",
"tags": [
"richard wolff",
"marxism",
"capitalism",
"worker cooperatives",
"lex fridman"
]
},
{
"id": "o2_SZ4tfLns",
"type": "Commentary",
"india": false,
"title": "Genius Bar caught ripping customer off ON CAMERA by CBC News",
"channel": "Louis Rossmann",
"minutes": null,
"year": null,
"since": 2018,
"category": "Founder Stories & Documentaries",
"also": [
"Customer Behaviour"
],
"topics": [
"Users"
],
"stage": null,
"gem": false,
"why": "Used repeatedly in right-to-repair threads as a concrete example of Apple overcharging for repairs that independent shops fix cheaply.",
"tags": [
"apple",
"macbook repair",
"genius bar",
"right to repair",
"consumer reporting"
]
},
{
"id": "orQKfIXMiA8",
"type": "Explainer",
"india": false,
"title": "You Need to Be Bored. Here's Why.",
"channel": "Harvard Business Review",
"minutes": null,
"year": null,
"since": 2025,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Commenters cite it when arguing for less phone time and more idle, undistracted thinking.",
"tags": [
"boredom",
"default mode network",
"creativity",
"phone use",
"wellbeing"
]
},
{
"id": "outcGtbnMuQ",
"type": "Demo",
"india": false,
"title": "GPT-4 Developer Livestream",
"channel": "OpenAI",
"minutes": null,
"year": null,
"since": 2023,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "HN refers back to it as the primary source for what GPT-4 could do at launch, especially the sketch-to-website and multimodal demos.",
"tags": [
"gpt-4",
"openai",
"multimodal",
"code generation",
"greg brockman"
]
},
{
"id": "owieQnPYfT8",
"type": "Podcast",
"india": false,
"title": "An Arizona Farmer on How to Grow Alfalfa in the Middle of the Desert | Odd Lots",
"channel": "Bloomberg Podcasts",
"minutes": null,
"year": null,
"since": 2023,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Linked in water and Arizona threads to explain why desert farming is more productive than people assume.",
"tags": [
"alfalfa",
"water scarcity",
"arizona",
"agriculture",
"colorado river"
]
},
{
"id": "p45T7U5oi9Q",
"type": "Documentary",
"india": false,
"title": "The Dial Comes To Town",
"channel": "PVid88",
"minutes": null,
"year": null,
"since": 2021,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited as a charming example of the effort once made to teach the public a new technology, in threads about phones and teaching seniors.",
"tags": [
"rotary phone",
"bell system",
"1940",
"instructional film",
"dial service"
]
},
{
"id": "psAXMqxwol8",
"type": "Talk",
"india": false,
"title": "Inno-Versity Presents: Greatness by David Marquet",
"channel": "Speakers Spotlight",
"minutes": null,
"year": null,
"since": 2016,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "Recommended as a short, illustrated take on empowering teams instead of giving orders.",
"tags": [
"david marquet",
"empowerment",
"team culture",
"management",
"turn the ship around"
]
},
{
"id": "q2gO4DKVpa8",
"type": "Talk",
"india": false,
"title": "Beware, fellow plutocrats, the pitchforks are coming | Nick Hanauer",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2018,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": "Fundraising",
"gem": false,
"why": "HN brings it up in inequality, UBI and backlash threads as an early warning from a rich insider.",
"tags": [
"nick hanauer",
"inequality",
"minimum wage",
"ted talk",
"wealth"
]
},
{
"id": "qWJpI2adCcs",
"type": "Interview",
"india": false,
"title": "HandmadeCon 2015 - Mike Acton",
"channel": "Molly Rocket",
"minutes": null,
"year": null,
"since": 2017,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "HN cites it for Acton's common-sense views on building engines, valuing curiosity and self-driven learning.",
"tags": [
"mike acton",
"handmade",
"game engines",
"hiring",
"data-oriented design"
]
},
{
"id": "rAZavOcEnLg",
"type": "Demo",
"india": false,
"title": "Making Money Flow: The MONIAC",
"channel": "Reserve Bank of New Zealand",
"minutes": null,
"year": null,
"since": 2020,
"category": "Customer Behaviour",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Brought up as a charming example of analog and liquid computers simulating a national economy.",
"tags": [
"moniac",
"bill phillips",
"analog computing",
"economics",
"hydraulics"
]
},
{
"id": "rbsqaJwpu6A",
"type": "Talk",
"india": false,
"title": "Human AI is Decades Away, But We Need to Start the Debate Now | Demis Hassabis | Google Zeitgeist",
"channel": "Google Zeitgeist",
"minutes": null,
"year": null,
"since": 2015,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "HN cites it for the DeepMind CEO's early views on AI and its game-playing focus, in AlphaGo and OpenAI threads.",
"tags": [
"deepmind",
"demis hassabis",
"agi",
"ai debate",
"game-playing ai"
]
},
{
"id": "rf5o5liZxnA",
"type": "Demo",
"india": false,
"title": "NeXTSTEP Release 3: A Demonstration with Steve Jobs",
"channel": "Joseph Spiros",
"minutes": null,
"year": null,
"since": 2022,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited as a primary source for what NeXTSTEP could do and how Jobs pitched rapid application development.",
"tags": [
"nextstep",
"steve jobs",
"objective-c",
"rapid application development",
"desktop ui"
]
},
{
"id": "rvLFEh7V18A",
"type": "Documentary",
"india": false,
"title": "Exposing FRAUD And DECEPTION In The Retro Video Game Market",
"channel": "Karl Jobst",
"minutes": null,
"year": null,
"since": 2021,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [
"Fundraising"
],
"stage": null,
"gem": false,
"why": "HN points to it as investigative journalism backing the view that vintage game prices are inflated by wash trading and grading services.",
"tags": [
"wata games",
"heritage auctions",
"game collecting",
"wash trading",
"investigation"
]
},
{
"id": "s-CTkbHnpNQ",
"type": "Explainer",
"india": false,
"title": "10 Bullets, #8: \"ALWAYS BE KNOLLING\". By Tom Sachs",
"channel": "Tom Sachs",
"minutes": null,
"year": null,
"since": 2017,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Used as a short intro to knolling and as an analogy for tidying workspaces and continuously cleaning up code.",
"tags": [
"knolling",
"tom sachs",
"organization",
"workspace",
"refactoring"
]
},
{
"id": "sCr_gb8rdEI",
"type": "Interview",
"india": false,
"title": "Two decades of Git: A conversation with creator Linus Torvalds",
"channel": "GitHub",
"minutes": null,
"year": null,
"since": 2025,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters cite it for Linus's direct opinions on Git and development tooling, such as calling the SHA-256 migration pointless churn.",
"tags": [
"git",
"linus torvalds",
"version control",
"linux kernel",
"open source"
]
},
{
"id": "sLCHg9mUBag",
"type": "Documentary",
"india": false,
"title": "Walt Disney's E.P.C.O.T film (1966)",
"channel": "The Original EPCOT",
"minutes": null,
"year": null,
"since": 2014,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it in discussions of planned cities and urban design as the original source for Disney's utopian EPCOT vision.",
"tags": [
"epcot",
"walt disney",
"urban planning",
"utopia",
"monorail"
]
},
{
"id": "sumZLwFXJqE",
"type": "Explainer",
"india": false,
"title": "MMO Economies - Hyperinflation, Reserve Currencies & You! - Extra Credits",
"channel": "Extra Credits",
"minutes": null,
"year": null,
"since": 2016,
"category": "Customer Behaviour",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited in game-economy threads as a clear explanation of why vendor-sellable loot causes hyperinflation and how designers counter it.",
"tags": [
"mmo",
"inflation",
"virtual currency",
"gold sinks",
"game design"
]
},
{
"id": "tWZOEFvczzA",
"type": "Demo",
"india": false,
"title": "ANIME ROCK, PAPER, SCISSORS 2",
"channel": "Corridor Digital",
"minutes": null,
"year": null,
"since": 2023,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "HN cites it as an example of what a very small crew can make with generative AI tools, while noting how much manual work it still takes.",
"tags": [
"stable diffusion",
"anime",
"corridor digital",
"generative ai",
"dreambooth"
]
},
{
"id": "tzr7hRXcwkw",
"type": "Podcast",
"india": false,
"title": "John Carmack: Best programming setup and IDE | Lex Fridman Podcast Clips",
"channel": "Lex Clips",
"minutes": null,
"year": null,
"since": 2022,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN debugger-versus-print-debugging threads point to it as Carmack's authoritative case for using a real debugger.",
"tags": [
"john carmack",
"debugging",
"ides",
"print debugging",
"lex fridman"
]
},
{
"id": "uAdmzyKagvE",
"type": "Explainer",
"india": false,
"title": "This clock was famous, but the internet ruined it.",
"channel": "Tom Scott",
"minutes": null,
"year": null,
"since": 2022,
"category": "Customer Behaviour",
"also": [
"SaaS & Technology",
"Startup & Entrepreneurship"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it as a fascinating explanation of a real Dutch auction, in threads about auctions and ticket sales.",
"tags": [
"dutch auction",
"flower auction",
"aalsmeer",
"market design",
"tom scott"
]
},
{
"id": "v0gjI__RyCY",
"type": "Interview",
"india": false,
"title": "Jeff Dean & Noam Shazeer — 25 years at Google: from PageRank to AGI",
"channel": "Dwarkesh Patel",
"minutes": null,
"year": null,
"since": 2025,
"category": "SaaS & Technology",
"also": [
"Founder Stories & Documentaries"
],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "HN cites it for insight into Google researchers' views on AI progress and publishing, though one commenter finds the interview weak.",
"tags": [
"jeff dean",
"noam shazeer",
"transformers",
"gemini",
"mixture of experts"
]
},
{
"id": "vKmQW_Nkfk8",
"type": "Talk",
"india": false,
"title": "Steve Yegge, \"What Would You Do With Your Own Google?\" - OSCON Data 2011",
"channel": "O'Reilly",
"minutes": null,
"year": null,
"since": 2011,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited for its critique of talent wasted on social media and for the data-mining-for-biology argument, plus the around-14-minute quitting moment.",
"tags": [
"steve yegge",
"oscon",
"google",
"biology",
"data mining"
]
},
{
"id": "w-tFdreZB94",
"type": "Demo",
"india": false,
"title": "Microsoft: Productivity Future Vision",
"channel": "Microsoft in Business",
"minutes": null,
"year": null,
"since": 2017,
"category": "SaaS & Technology",
"also": [],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "Cited as an example of corporate future-concept videos, sometimes appreciated for its ideas and sometimes used as a cautionary comparison.",
"tags": [
"microsoft",
"concept video",
"ubiquitous computing",
"ui design"
]
},
{
"id": "w8J5BWL8oJY",
"type": "Talk",
"india": false,
"title": "The synthesis of imagination: Rony Abovitz and Magic Leap at TEDxSarasota",
"channel": "TEDx Talks",
"minutes": null,
"year": null,
"since": 2014,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Mostly cited as damning evidence of Magic Leap's hype and marketing, with commenters calling it delusional or a fraud signal.",
"tags": [
"magic leap",
"rony abovitz",
"tedx",
"augmented reality",
"startup hype"
]
},
{
"id": "wKISPePFrIs",
"type": "Demo",
"india": false,
"title": "How a Blind Developer Uses Visual Studio (Microsoft Build 2017)",
"channel": "Kompetenzzentrum Digitale Barrierefreiheit",
"minutes": null,
"year": null,
"since": 2024,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN uses it as the go-to example of how blind developers work, including the very fast screen reader speech.",
"tags": [
"screen reader",
"blind developer",
"visual studio",
"accessibility",
"microsoft build"
]
},
{
"id": "wrHXA2cSpNU",
"type": "Demo",
"india": false,
"title": "The Mandalorian Luke Skywalker Deepfake",
"channel": "Shamook",
"minutes": null,
"year": null,
"since": 2021,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it as an example of deepfakes producing a more convincing CGI human than the studio's own effort.",
"tags": [
"deepfake",
"mandalorian",
"luke skywalker",
"cgi humans",
"visual effects"
]
},
{
"id": "ww47bR86wSc",
"type": "Explainer",
"india": false,
"title": "Bonhoeffer‘s Theory of Stupidity",
"channel": "Sprouts",
"minutes": null,
"year": null,
"since": 2021,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters cite it when discussing Bonhoeffer's idea that stupidity is a moral failing rather than an intellectual one.",
"tags": [
"bonhoeffer",
"stupidity",
"philosophy",
"ethics",
"sprouts"
]
},
{
"id": "x7qPAY9JqE4",
"type": "Talk",
"india": false,
"title": "Steve Jobs Introducing The iPhone At MacWorld 2007",
"channel": "superapple4ever",
"minutes": null,
"year": null,
"since": 2022,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "HN commenters cite it as a model of a clear product reveal and as the source for how Jobs framed the iPhone's three functions and dismissed physical keyboards.",
"tags": [
"steve jobs",
"iphone",
"apple",
"macworld 2007",
"product launch"
]
},
{
"id": "xQbaVdge7kU",
"type": "Explainer",
"india": false,
"title": "How Much Is a Human Worth? (according to engineers)",
"channel": "Practical Engineering",
"minutes": null,
"year": null,
"since": 2023,
"category": "Customer Behaviour",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters cite it as an interesting look at valuing human life, used in safety and liability discussions.",
"tags": [
"engineering ethics",
"safety",
"cost-benefit analysis",
"regulation",
"risk"
]
},
{
"id": "xQx-tuW9A4Q",
"type": "Talk",
"india": false,
"title": "Inventing the Computer Mouse | Douglas Engelbart | Talks at Google",
"channel": "Talks at Google",
"minutes": null,
"year": null,
"since": 2014,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Recommended for hearing Engelbart's vision of collaborative hypertext systems straight from him, including his view of Wikipedia.",
"tags": [
"douglas engelbart",
"computer mouse",
"hypertext",
"collective intelligence",
"computing history"
]
},
{
"id": "xgKY9hmbfgo",
"type": "Commentary",
"india": false,
"title": "Sacrifices to the Church of Nintendo",
"channel": "EmpLemon",
"minutes": null,
"year": null,
"since": 2024,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Pointed to in threads about Nintendo lawsuits and takedowns as an explanation of how the company behaves.",
"tags": [
"nintendo",
"copyright",
"fan projects",
"video game industry"
]
},
{
"id": "xzjqjU2FOwA",
"type": "Podcast",
"india": false,
"title": "Prof. Timur Kuran on \"The Portal\", Episode #004: \"The Economics of Revolution and Mass Deception.\"",
"channel": "Eric Weinstein",
"minutes": null,
"year": null,
"since": 2019,
"category": "Customer Behaviour",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Pointed to as a good explanation of preference falsification and its effects on speech and politics.",
"tags": [
"timur kuran",
"revolutions",
"public opinion",
"self-censorship",
"economics"
]
},
{
"id": "y57wwucbXR8",
"type": "Talk",
"india": false,
"title": "Building the Software 2 0 Stack (Andrej Karpathy)",
"channel": "Databricks",
"minutes": null,
"year": null,
"since": 2019,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "HN uses it as the primary source for the 'Software 2.0' idea and recommends it as a quick talk on the next software stack.",
"tags": [
"andrej karpathy",
"neural networks",
"datasets",
"machine learning tooling",
"software stack"
]
},
{
"id": "yT9bit2-1pg",
"type": "Explainer",
"india": false,
"title": "How to Stop a Riot",
"channel": "Wendover Productions",
"minutes": null,
"year": null,
"since": 2018,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited for its research-based principles of riot control, and as an analogy for managing other crowd dynamics like bubbles.",
"tags": [
"police tactics",
"protest",
"crowd psychology",
"wendover"
]
},
{
"id": "z9UjeTMb3Yk",
"type": "Talk",
"india": false,
"title": "Inbox Zero",
"channel": "Google TechTalks",
"minutes": null,
"year": null,
"since": 2013,
"category": "Business Psychology",
"also": [],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "Cited as the original Inbox Zero talk, and for Mann's point that optimizing how you organize tasks is no substitute for doing them.",
"tags": [
"inbox zero",
"merlin mann",
"getting things done",
"email",
"productivity"
]
},
{
"id": "zGcKURD_osM",
"type": "Documentary",
"india": false,
"title": "The Sackler Family – A Secretive Billion Dollar Opioid Empire",
"channel": "ColdFusion",
"minutes": null,
"year": null,
"since": 2019,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Used as background viewing in threads on Purdue's bankruptcy and opioid settlements.",
"tags": [
"sackler family",
"purdue pharma",
"opioids",
"oxycontin",
"corporate accountability"
]
},
{
"id": "zJOS0sV2a24",
"type": "Talk",
"india": false,
"title": "xkcd | Randall Munroe | Talks at Google",
"channel": "Talks at Google",
"minutes": null,
"year": null,
"since": 2008,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN refers to it for the moment where Knuth asks a question and addresses the Steve Jobs anecdote, a favorite geek moment.",
"tags": [
"xkcd",
"randall munroe",
"donald knuth",
"talks at google",
"webcomics"
]
},
{
"id": "-KSryJXDpZo",
"type": "Demo",
"india": false,
"title": "Capuchin monkey fairness experiment",
"channel": "vladimerk1",
"minutes": null,
"year": null,
"since": 2013,
"category": "Customer Behaviour",
"also": [
"Business Psychology"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN uses it as shorthand for the innate human and primate sense of fairness in threads on pay, wealth and inequality.",
"tags": [
"capuchin monkeys",
"fairness",
"frans de waal",
"primatology",
"inequality"
]
},
{
"id": "0YGfwSvLkC0",
"type": "Interview",
"india": false,
"title": "Milton Friedman on the free-market case for taxing pollution",
"channel": "republicEn",
"minutes": null,
"year": null,
"since": 2022,
"category": "Customer Behaviour",
"also": [
"Sales"
],
"topics": [
"Sales"
],
"stage": null,
"gem": false,
"why": "HN commenters use it to show that even the best-known free-market economist supported putting a price on pollution.",
"tags": [
"milton friedman",
"externalities",
"pollution tax",
"free markets",
"economics"
]
},
{
"id": "1BB6wj6RyKo",
"type": "Tutorial",
"india": false,
"title": "UPDATED: How to: Reset C by GE Light Bulbs",
"channel": "GE Lighting, a Savant company",
"minutes": null,
"year": null,
"since": 2019,
"category": "SaaS & Technology",
"also": [],
"topics": [
"Users"
],
"stage": null,
"gem": false,
"why": "HN cites it as a prime example of absurd, user-hostile IoT reset procedures.",
"tags": [
"smart home",
"iot",
"ge",
"factory reset",
"user experience"
]
},
{
"id": "1FwgCRIS0Wg",
"type": "Explainer",
"india": false,
"title": "The 2.7% Rule for Retirement Spending",
"channel": "Ben Felix",
"minutes": null,
"year": null,
"since": 2022,
"category": "Investment & Venture Capital",
"also": [],
"topics": [
"Fundraising"
],
"stage": null,
"gem": false,
"why": "HN cites it as the source for the argument that safe withdrawal rates should be lower than 4%.",
"tags": [
"4% rule",
"safe withdrawal rate",
"retirement",
"investing",
"early retirement"
]
},
{
"id": "1QD9XQm_Jd4",
"type": "Interview",
"india": false,
"title": "Interview with Steve Yegge on Rhino on Rails and more",
"channel": "Google for Developers",
"minutes": null,
"year": null,
"since": 2008,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Mentioned mainly as the place to hear Yegge discuss Rhino on Rails, a project that was never released.",
"tags": [
"steve yegge",
"rhino",
"rails",
"javascript",
"web frameworks"
]
},
{
"id": "1Rr_XzzJ6gc",
"type": "Tutorial",
"india": false,
"title": "[OUTDATED 2018 INSTRUCTIONS] HOW TO USE THE WINDSHIELD WIPERS // TESLA MODEL 3",
"channel": "Lexi Heft",
"minutes": null,
"year": null,
"since": 2019,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Used in UI debates as evidence that wiper control on the touchscreen is awkward, or alternatively that it is just two touches.",
"tags": [
"tesla model 3",
"wipers",
"touchscreen ui",
"car interface",
"voice commands"
]
},
{
"id": "1VgptLwP588",
"type": "Talk",
"india": false,
"title": "Microsoft is Getting Rusty: A Review of Successes and Challenges - Mark Russinovich",
"channel": "Rust Nation UK",
"minutes": null,
"year": null,
"since": 2025,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited for concrete claims about Microsoft's Rust adoption, such as speedups from rewrites and internal C to Rust translation efforts.",
"tags": [
"rust",
"microsoft",
"memory safety",
"mark russinovich",
"c to rust"
]
},
{
"id": "1X7fZoDs9KU",
"type": "Talk",
"india": false,
"title": "Which country does the most good for the world? | Simon Anholt",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2016,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN points to it as an alternative to GDP for measuring national progress and as background on the Good Country Index.",
"tags": [
"good country index",
"ted talk",
"globalization",
"policy",
"gdp alternatives"
]
},
{
"id": "1YWD6Y9FUuw",
"type": "Demo",
"india": false,
"title": "Super Mario Bros 3 PC Prototype from id Software",
"channel": "usgamernet",
"minutes": null,
"year": null,
"since": 2019,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited as footage of a famous piece of gaming history whenever id Software, Commander Keen, or scrolling tech comes up.",
"tags": [
"id software",
"super mario bros 3",
"commander keen",
"john romero",
"pc port"
]
},
{
"id": "1_SdC8LVODY",
"type": "Talk",
"india": false,
"title": "John Carmack Keynote QuakeCon 2010 Part 1",
"channel": "J",
"minutes": null,
"year": null,
"since": 2011,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited mainly for Carmack's offhand survey asking how many people had spent $20 on Android apps, used in debates about app store economics.",
"tags": [
"john carmack",
"quakecon",
"id software",
"mobile app economics",
"rage"
]
},
{
"id": "21EYKqUsPfg",
"type": "Interview",
"india": false,
"title": "Richard Sutton – Father of RL thinks LLMs are a dead end",
"channel": "Dwarkesh Patel",
"minutes": null,
"year": null,
"since": 2025,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "HN commenters cite it as the serious skeptic's case against LLMs reaching general intelligence, usually in debates about whether scaling is enough.",
"tags": [
"reinforcement learning",
"bitter lesson",
"continual learning",
"agi",
"richard sutton"
]
},
{
"id": "25hLohVZdME",
"type": "Demo",
"india": false,
"title": "Terry Davis Demos SimStructure  (2016-08-25)",
"channel": "TheChristIsKing",
"minutes": null,
"year": null,
"since": 2018,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN links it with timestamps as an early, hands-on demo of control theory and as a curiosity from Davis's work.",
"tags": [
"terry davis",
"templeos",
"pid controller",
"physics simulation",
"numerical recipes"
]
},
{
"id": "2C-zWrhFqpM",
"type": "Talk",
"india": false,
"title": "USA's Leading Dissident Voice | Noam Chomsky | Talks at Google",
"channel": "Talks at Google",
"minutes": null,
"year": null,
"since": 2017,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN mostly links it as background in political arguments or for a memorable moment, rather than as a recommendation.",
"tags": [
"noam chomsky",
"media control",
"talks at google",
"dissent"
]
},
{
"id": "2u0sNRO-QKQ",
"type": "Talk",
"india": false,
"title": "One Hacker Way Rational alternative of Agile -  Erik Meijer",
"channel": "Sabbir Ahmed",
"minutes": null,
"year": null,
"since": 2021,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN mostly cites it in anti-Agile and anti-Scrum threads as a sharp critique, with one commenter noting the tenth man idea.",
"tags": [
"agile",
"scrum",
"erik meijer",
"software process",
"tenth man"
]
},
{
"id": "2zfqw8nhUwA",
"type": "Explainer",
"india": false,
"title": "Apple 1984 Super Bowl Commercial Introducing Macintosh Computer (HD)",
"channel": "Robert Cole (RobertKCole)",
"minutes": null,
"year": null,
"since": 2017,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Growth"
],
"stage": null,
"gem": false,
"why": "Cited as the standard example of a hugely effective emotional ad that sold a brand image rather than product details.",
"tags": [
"apple",
"1984",
"macintosh",
"super bowl",
"marketing"
]
},
{
"id": "35DSdw7dHjs",
"type": "Explainer",
"india": false,
"title": "\"The World is a Corporation\" (Network, 1976)",
"channel": "Pedro Palatnik",
"minutes": null,
"year": null,
"since": 2021,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN posts it as an enduring, still-relevant artistic depiction of corporate power when discussing finance, tech lobbying and ethics.",
"tags": [
"network 1976",
"film scene",
"corporations",
"monologue",
"satire"
]
},
{
"id": "3S5BLs51yDQ",
"type": "Explainer",
"india": false,
"title": "İpad pro— What's a computer– Apple",
"channel": "Apple everyday",
"minutes": null,
"year": null,
"since": 2022,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Growth"
],
"stage": null,
"gem": false,
"why": "Cited as evidence that Apple markets the iPad as a general-purpose computer, especially in debates about platform openness.",
"tags": [
"ipad pro",
"apple",
"advertising",
"ios",
"post-pc"
]
},
{
"id": "3oGFogwcx-E",
"type": "Explainer",
"india": false,
"title": "Microsoft Songsmith Commercial",
"channel": "Duker91",
"minutes": null,
"year": null,
"since": 2009,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Growth"
],
"stage": null,
"gem": false,
"why": "HN cites it as an infamous example of terrible advertising, though a few mention how big a splash it made in 2009.",
"tags": [
"songsmith",
"microsoft",
"commercial",
"marketing",
"2009"
]
},
{
"id": "41XgkLKYuic",
"type": "Commentary",
"india": false,
"title": "What it's Like to Work at Valve",
"channel": "Tyler McVicker",
"minutes": null,
"year": null,
"since": 2022,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries"
],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "HN commenters cite it as a summary of former employees' experience that the flat structure produces informal hierarchy, cliques and stack ranking.",
"tags": [
"valve",
"flat organization",
"workplace culture",
"glassdoor",
"game industry"
]
},
{
"id": "4TxkE_oYrjU",
"type": "Commentary",
"india": false,
"title": "SpaceX: BUSTED!! (Part 1)",
"channel": "Thunderf00t",
"minutes": null,
"year": null,
"since": 2021,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters cite it as the skeptical case against SpaceX's cost claims, mostly in critical arguments rather than as a recommendation.",
"tags": [
"spacex",
"reusable rockets",
"space shuttle",
"launch costs",
"critique"
]
},
{
"id": "4U2eDJnwz_s",
"type": "Commentary",
"india": false,
"title": "Auto Lending: Last Week Tonight with John Oliver (HBO)",
"channel": "LastWeekTonight",
"minutes": null,
"year": null,
"since": 2017,
"category": "Investment & Venture Capital",
"also": [
"Customer Behaviour"
],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited for subprime auto loan statistics and as a reference for predatory car financing, rather than as a recommendation.",
"tags": [
"auto loans",
"predatory lending",
"consumer finance",
"john oliver",
"debt"
]
},
{
"id": "4dn6ZVpJLxs",
"type": "Commentary",
"india": false,
"title": "Elon Musk's \"Loop\" - It's bad, folks",
"channel": "donoteat01",
"minutes": null,
"year": null,
"since": 2019,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN uses it as the go-to rebuttal when Musk's transportation proposals come up, though it is mostly cited by skeptics.",
"tags": [
"boring company",
"hyperloop",
"elon musk",
"tunnels",
"public transit"
]
},
{
"id": "5KKDCp3OaMo",
"type": "Talk",
"india": false,
"title": "Can GPT-4 translate literature?",
"channel": "Tom Gally",
"minutes": null,
"year": null,
"since": 2023,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "Cited as an expert's first-hand evidence that GPT translation is near human quality for distant language pairs.",
"tags": [
"gpt-4",
"translation",
"japanese",
"llm",
"literature"
]
},
{
"id": "5McECUtM8fw",
"type": "Explainer",
"india": false,
"title": "Airplane crash altiport de Megève france altiport france landing without landing gear (HD)",
"channel": "Sven Herzog Aviation",
"minutes": null,
"year": null,
"since": 2016,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited as a vivid example that experienced pilots can ignore loud alarms, in threads on alarm design and gear-up landings.",
"tags": [
"gear-up landing",
"warning horn",
"pilot error",
"alarm design",
"aviation accident"
]
},
{
"id": "5PmphkNDosg",
"type": "Commentary",
"india": false,
"title": "What kids really do on Musical.ly",
"channel": "PaymoneyWubby",
"minutes": null,
"year": null,
"since": 2018,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited as an outsider's critical look at Musical.ly and TikTok and the child-safety problems of video platforms.",
"tags": [
"musical.ly",
"tiktok",
"child safety",
"social media",
"reaction video"
]
},
{
"id": "62kxPyNZF3Q",
"type": "Explainer",
"india": false,
"title": "other peoples money danny devito",
"channel": "barnseyoz",
"minutes": null,
"year": null,
"since": 2013,
"category": "Investment & Venture Capital",
"also": [
"Startup & Entrepreneurship"
],
"topics": [],
"stage": null,
"gem": false,
"why": "Quoted in threads about declining companies and shrinking markets as a blunt statement of the case for liquidation.",
"tags": [
"other people's money",
"danny devito",
"shareholders",
"corporate raiders",
"film clip"
]
},
{
"id": "6lZMr-ZfoE4",
"type": "Explainer",
"india": false,
"title": "iPhone Commercials",
"channel": "Mazhar Mohad",
"minutes": null,
"year": null,
"since": 2012,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Product",
"Growth"
],
"stage": null,
"gem": false,
"why": "Cited as a reference for how Apple's early iPhone advertising was product-focused and used usage walkthroughs.",
"tags": [
"iphone",
"apple",
"commercials",
"product marketing",
"2007"
]
},
{
"id": "8-pJa11YvCs",
"type": "Interview",
"india": false,
"title": "Jim Goetz and Jan Koum at Startup School SV 2014",
"channel": "Y Combinator",
"minutes": null,
"year": null,
"since": 2014,
"category": "Startup & Entrepreneurship",
"also": [
"Investment & Venture Capital",
"Founder Stories & Documentaries"
],
"topics": [
"Growth",
"Fundraising"
],
"stage": "Fundraising",
"gem": false,
"why": "HN mines it for WhatsApp facts, such as pricing used to slow growth, a 7-8 person backend team and late hiring of customer service.",
"tags": [
"whatsapp",
"jan koum",
"sequoia",
"venture capital",
"startup school"
]
},
{
"id": "8JUepj7wIl0",
"type": "Commentary",
"india": false,
"title": "What do translators think about GPT?",
"channel": "Tom Gally",
"minutes": null,
"year": null,
"since": 2023,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "HN links it as an informed view from a working translator on using GPT for translation.",
"tags": [
"translation",
"gpt-4",
"llm",
"japanese",
"translators"
]
},
{
"id": "9x4_dozWkq0",
"type": "Commentary",
"india": false,
"title": "Gmail Man! (Microsoft's anti-Google video promoting Office 365)",
"channel": "Rishabh Singla",
"minutes": null,
"year": null,
"since": 2014,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Growth"
],
"stage": null,
"gem": false,
"why": "HN mostly cites it ironically, as evidence of Microsoft's earlier privacy marketing against Google that sits awkwardly with its later telemetry.",
"tags": [
"microsoft",
"google",
"gmail",
"scroogled",
"office 365"
]
},
{
"id": "A8dqzVlhFkA",
"type": "Commentary",
"india": false,
"title": "EEVblog #1001 - uBeam Ultrasonic Wireless Charging DEBUNKED!",
"channel": "EEVblog",
"minutes": null,
"year": null,
"since": 2017,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited as the definitive engineering takedown of uBeam and as a cautionary example of hype-driven startups.",
"tags": [
"ubeam",
"wireless charging",
"debunking",
"ultrasound",
"startup hype"
]
},
{
"id": "AKMuA_TVz3A",
"type": "Talk",
"india": false,
"title": "An Observation on Generalization",
"channel": "Simons Institute for the Theory of Computing",
"minutes": null,
"year": null,
"since": 2023,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "Cited in discussions of learning as compression and of why neural networks generalize.",
"tags": [
"ilya sutskever",
"compression",
"generalization",
"kolmogorov complexity",
"llm theory"
]
},
{
"id": "AVL65qwBGnw",
"type": "Commentary",
"india": false,
"title": "Apple & Customs STOLE my batteries, that they won't even provide to AASPs.",
"channel": "Louis Rossmann",
"minutes": null,
"year": null,
"since": 2018,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited in repair threads as evidence of Apple working with customs to restrict third-party repair parts.",
"tags": [
"louis rossmann",
"apple",
"customs seizures",
"macbook batteries",
"repair"
]
},
{
"id": "AeeeEDSekG8",
"type": "Interview",
"india": false,
"title": "Elon Musk on the Early Days of Tesla: Interview Part 1",
"channel": "Tesla Owners Silicon Valley",
"minutes": null,
"year": null,
"since": 2022,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited as Musk's own account of Tesla's founding and early financial struggles, often in disputes over the company's history.",
"tags": [
"elon musk",
"tesla",
"startup history",
"roadster",
"funding"
]
},
{
"id": "Akm7ik-H_7U",
"type": "Explainer",
"india": false,
"title": "The high cost of free parking",
"channel": "Vox",
"minutes": null,
"year": null,
"since": 2017,
"category": "Customer Behaviour",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN links it as a concise explanation of why free parking is not really free and how parking rules shape cities.",
"tags": [
"parking minimums",
"urban planning",
"donald shoup",
"transportation",
"cities"
]
},
{
"id": "BRqZBuu_Ers",
"type": "Explainer",
"india": false,
"title": "What Happened When This City Banned Housing Investors",
"channel": "Oh The Urbanity!",
"minutes": null,
"year": null,
"since": 2023,
"category": "Customer Behaviour",
"also": [],
"topics": [
"Fundraising"
],
"stage": null,
"gem": false,
"why": "Cited as a real-world experiment showing that banning investors did not lower purchase prices and may have raised rents.",
"tags": [
"housing",
"rotterdam",
"investors",
"rent",
"urban policy"
]
},
{
"id": "BZoKfap4g4w",
"type": "Talk",
"india": false,
"title": "The magic washing machine | Hans Rosling",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2013,
"category": "Customer Behaviour",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Referenced when discussing how much time household technology saved families and how heavy housework used to be.",
"tags": [
"hans rosling",
"gapminder",
"household labor",
"energy",
"ted"
]
},
{
"id": "CqiL5QQnN64",
"type": "Interview",
"india": false,
"title": "Ray Summit 2022 - Day 1 Keynote - Fireside Chat",
"channel": "Anyscale",
"minutes": null,
"year": null,
"since": 2023,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited as a source for the fact that OpenAI uses Ray for training, and for Brockman's views on developer speed.",
"tags": [
"openai",
"ray",
"distributed training",
"greg brockman",
"anyscale"
]
},
{
"id": "Cu-7UDT0Xe4",
"type": "Interview",
"india": false,
"title": "Isn't the purpose of work just making money?",
"channel": "mr1001nights",
"minutes": null,
"year": null,
"since": 2017,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters repeatedly cite it for Fromm's line about selling one's personality at work, especially in threads on careers, mental health and labor.",
"tags": [
"erich fromm",
"work",
"alienation",
"personality market",
"social psychology"
]
},
{
"id": "DxREm3s1scA",
"type": "Interview",
"india": false,
"title": "Elon Musk: SpaceX, Mars, Tesla Autopilot, Self-Driving, Robotics, and AI | Lex Fridman Podcast #252",
"channel": "Lex Fridman",
"minutes": null,
"year": null,
"since": 2022,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "Mostly cited as a primary source for Musk's statements on self-driving and other topics, often with skepticism about his depth.",
"tags": [
"elon musk",
"tesla autopilot",
"spacex",
"self-driving",
"lex fridman"
]
},
{
"id": "ECwHZlvvVH4",
"type": "Talk",
"india": false,
"title": "Q&A: Techniques for dealing with lack of motivation, malaise, depression",
"channel": "Jonathan Blow",
"minutes": null,
"year": null,
"since": 2017,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Mostly shared as a more reliable YouTube mirror, and cited as a related talk on motivation; one commenter criticizes Blow's comments on impostor syndrome.",
"tags": [
"jonathan blow",
"motivation",
"depression",
"game development",
"q&a"
]
},
{
"id": "ELCq63652ig",
"type": "Commentary",
"india": false,
"title": "How Google is building a browser monopoly",
"channel": "TechAltar",
"minutes": null,
"year": null,
"since": 2019,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters cite it as a good example of how Google treats browsers that are not Chrome and of the browser-monopoly concern.",
"tags": [
"chrome",
"google",
"chromium",
"firefox",
"anti-competitive"
]
},
{
"id": "ErwS24cBZPc",
"type": "Explainer",
"india": false,
"title": "4K Restoration: 1984 Super Bowl APPLE MACINTOSH Ad by Ridley Scott",
"channel": "Retro Recipes x Commodore",
"minutes": null,
"year": null,
"since": 2024,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Not recommended as a watch; HN cites the ad as shorthand for orderly conformity and as an example of an ad that has aged badly.",
"tags": [
"apple",
"macintosh",
"super bowl ad",
"ridley scott",
"video restoration"
]
},
{
"id": "FHwnrYm0mNc",
"type": "Demo",
"india": false,
"title": "GitHub Copilot CRUSHES Leetcode Interview Questions! 😳",
"channel": "DevOps Directive",
"minutes": null,
"year": null,
"since": 2021,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "Cited as evidence that AI can solve interview-style algorithm puzzles, in threads questioning the value of Leetcode.",
"tags": [
"copilot",
"leetcode",
"coding interviews",
"ai coding",
"faang"
]
},
{
"id": "FQrEDq8KPiU",
"type": "Documentary",
"india": false,
"title": "China's Bonkers Bike-share Bubble",
"channel": "Asianometry",
"minutes": null,
"year": null,
"since": 2026,
"category": "SaaS & Technology",
"also": [
"Startup & Entrepreneurship"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it as an analogy for loss-leader pricing and market-share wars, for example in AI pricing.",
"tags": [
"bike sharing",
"china",
"startup bubble",
"price wars",
"business history"
]
},
{
"id": "Fh_UDQnboRw",
"type": "Demo",
"india": false,
"title": "Bill Gates demonstrates Visual Basic (1991)",
"channel": "Crapkai",
"minutes": null,
"year": null,
"since": 2020,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it as an example of rapid GUI development that modern tooling hasn't matched, and as precedent for promises of coding without developers.",
"tags": [
"visual basic",
"bill gates",
"rad",
"windows",
"dev tools history"
]
},
{
"id": "FxcT4vK01-w",
"type": "Talk",
"india": false,
"title": "John Backus: Function Level Programming and the FL Language 1987",
"channel": "Arthur Vard",
"minutes": null,
"year": null,
"since": 2019,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN points to it as the primary source for Backus's ideas on programming beyond the von Neumann style, in threads about dead technologies and obscure languages.",
"tags": [
"john backus",
"fl language",
"functional programming",
"programming languages",
"history of computing"
]
},
{
"id": "FzDBiUemCSY",
"type": "Explainer",
"india": false,
"title": "Steve Jobs early TV appearance.mov",
"channel": "radi0chik",
"minutes": null,
"year": null,
"since": 2011,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN shares it as an amusing glimpse of Jobs before he was polished on camera.",
"tags": [
"steve jobs",
"archival footage",
"nightline",
"apple"
]
},
{
"id": "GeCP-0nuziE",
"type": "Explainer",
"india": false,
"title": "The TRUTH About How LTT Makes Money",
"channel": "Linus Tech Tips",
"minutes": null,
"year": null,
"since": 2025,
"category": "Marketing & Growth",
"also": [
"SaaS & Technology"
],
"topics": [],
"stage": null,
"gem": false,
"why": "Used as a data source on how creators earn money, especially the share from YouTube Premium and sponsors in ad-blocking and advertising threads.",
"tags": [
"linus tech tips",
"creator economy",
"youtube premium",
"sponsorships",
"business model"
]
},
{
"id": "H8eP99neOVs",
"type": "Talk",
"india": false,
"title": "\"Focusing is about saying no\" - Steve Jobs (WWDC'97)",
"channel": "Erin Casali",
"minutes": null,
"year": null,
"since": 2012,
"category": "SaaS & Technology",
"also": [
"Founder Stories & Documentaries"
],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "HN uses it as the canonical source for the 'focus is saying no' quote, cited in threads on product decisions such as dropping old hardware support.",
"tags": [
"steve jobs",
"wwdc 1997",
"focus",
"product strategy",
"apple"
]
},
{
"id": "HGYFEI6uLy0",
"type": "Demo",
"india": false,
"title": "Apple's 1987 Knowledge Navigator Video",
"channel": "rkarena",
"minutes": null,
"year": null,
"since": 2015,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it as an early vision of voice assistants and software agents, often when comparing it with Siri and modern AI.",
"tags": [
"apple",
"knowledge navigator",
"voice assistants",
"hci",
"history"
]
},
{
"id": "HHjgK6p4nrw",
"type": "Lecture",
"india": false,
"title": "Guy Kawasaki: The Top 10 Mistakes of Entrepreneurs",
"channel": "UC Berkeley Haas",
"minutes": null,
"year": null,
"since": 2013,
"category": "Startup & Entrepreneurship",
"also": [
"Investment & Venture Capital"
],
"topics": [
"Fundraising"
],
"stage": "Fundraising",
"gem": false,
"why": "HN uses it as a reference for startup advice such as not befriending your VC, linear thinking in valuations, and protecting ideas.",
"tags": [
"guy kawasaki",
"entrepreneurship",
"venture capital",
"startups",
"fundraising"
]
},
{
"id": "HKTSaezB4p8",
"type": "Explainer",
"india": false,
"title": "Richard Feynman playing bongos",
"channel": "sdfhsfh",
"minutes": null,
"year": null,
"since": 2010,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Mostly used as a light aside showing Feynman's playful side, such as his bongo song.",
"tags": [
"feynman",
"bongos",
"music",
"physicist"
]
},
{
"id": "Hi63rXnuWbw",
"type": "Documentary",
"india": false,
"title": "THE CORPORATION  [11/23]  Basic Training",
"channel": "Cool World",
"minutes": null,
"year": null,
"since": 2009,
"category": "Marketing & Growth",
"also": [
"Business Psychology",
"Customer Behaviour"
],
"topics": [
"Growth"
],
"stage": "Growth",
"gem": false,
"why": "HN cites it mainly as a damning example of manipulative advertising aimed at children rather than recommending it as a watch.",
"tags": [
"the corporation",
"advertising",
"nag factor",
"consumerism",
"children"
]
},
{
"id": "IVpOyKCNZYw",
"type": "Explainer",
"india": false,
"title": "Linus Torvalds - Nvidia F_ck You!",
"channel": "Jim",
"minutes": null,
"year": null,
"since": 2013,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it as shorthand for the long-running frustration of the Linux community with Nvidia's drivers, often as a joke or background.",
"tags": [
"linus torvalds",
"nvidia",
"linux drivers",
"open source",
"aalto"
]
},
{
"id": "IW7Rqwwth84",
"type": "Explainer",
"india": false,
"title": "Bill Gates, Windows 98, Blue Screen of Death",
"channel": "failednation",
"minutes": null,
"year": null,
"since": 2019,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it as the classic demo failure, in threads about USB, plug and play, and Microsoft's shipping quality.",
"tags": [
"bill gates",
"windows 98",
"bsod",
"demo failure",
"plug and play"
]
},
{
"id": "IWkNkQoQY_8",
"type": "Demo",
"india": false,
"title": "2Advanced Studios v3 flash website in 2001",
"channel": "Web Design Museum",
"minutes": null,
"year": null,
"since": 2020,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters link it as nostalgic proof of how inventive and formative the Flash-era web was.",
"tags": [
"flash",
"web design",
"2advanced",
"internet history",
"early 2000s"
]
},
{
"id": "Ij-jlF98SzA",
"type": "Interview",
"india": false,
"title": "Steve Jobs on Privacy (2010)",
"channel": "Kenneth Friedman",
"minutes": null,
"year": null,
"since": 2022,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Users"
],
"stage": null,
"gem": false,
"why": "HN commenters cite it to contrast Apple's stated privacy stance with its later practices or to show Jobs's view on user control of data.",
"tags": [
"steve jobs",
"privacy",
"apple",
"tracking",
"user data"
]
},
{
"id": "J33pVRdxWbw",
"type": "Explainer",
"india": false,
"title": "How Steve Jobs got the ideas of GUI from XEROX",
"channel": "Ringo Pebam",
"minutes": null,
"year": null,
"since": 2016,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Ideas"
],
"stage": null,
"gem": false,
"why": "HN cites it as a reference in debates over how much Apple borrowed from Xerox and what Xerox management failed to see.",
"tags": [
"xerox parc",
"steve jobs",
"gui",
"apple lisa",
"computing history"
]
},
{
"id": "JelhR2iPuw0",
"type": "Demo",
"india": false,
"title": "Tactus Technology Tactile Touchscreen | CES 2013 | WIRED",
"channel": "WIRED",
"minutes": null,
"year": null,
"since": 2018,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it as proof that tactile morphing touchscreens existed years ago, in discussions of car touchscreens and tactile on-screen keyboards.",
"tags": [
"tactus",
"haptics",
"touchscreen",
"ces 2013",
"physical keyboard"
]
},
{
"id": "K3meJyiYWFw",
"type": "Interview",
"india": false,
"title": "Google I/O 2014 - Android fireside chat",
"channel": "Google for Developers",
"minutes": null,
"year": null,
"since": 2014,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "HN cites specific moments, such as the team's stance that Java is the official language and its answers on Scala and permission-revoking.",
"tags": [
"android",
"google io",
"platform team",
"java",
"permissions"
]
},
{
"id": "KRBIH0CA7ZU",
"type": "Talk",
"india": false,
"title": "Steve Jobs - NeXT marketing strategy video 1991",
"channel": "Vickin Kane",
"minutes": null,
"year": null,
"since": 2021,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Growth"
],
"stage": null,
"gem": false,
"why": "HN cites it as primary-source evidence that NeXT adopted Unix as a means to reach the workstation market rather than out of ideology.",
"tags": [
"steve jobs",
"next",
"unix",
"workstations",
"1991",
"apple history"
]
},
{
"id": "KSg3fU9XWow",
"type": "Interview",
"india": false,
"title": "Steve Jobs Talks About Microsoft",
"channel": "TechDaily",
"minutes": null,
"year": null,
"since": 2020,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited in discussions of Microsoft's standing and culture as Jobs' blunt critique.",
"tags": [
"steve jobs",
"microsoft",
"apple",
"tech history"
]
},
{
"id": "L9oh3gqOEKU",
"type": "Explainer",
"india": false,
"title": "Ever Onward IBM",
"channel": "santasboot",
"minutes": null,
"year": null,
"since": 2014,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "It is linked as an audio and visual example of IBM's corporate rally songs in threads about IBM culture.",
"tags": [
"ibm",
"corporate culture",
"flash animation",
"company song"
]
},
{
"id": "LD0x7ho_IYc",
"type": "Explainer",
"india": false,
"title": "Juvenoia",
"channel": "Vsauce",
"minutes": null,
"year": null,
"since": 2016,
"category": "Business Psychology",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "HN uses it to put worries about phones, music and technology and kids into historical perspective.",
"tags": [
"generational attitudes",
"moral panic",
"youth culture",
"vsauce",
"history of media"
]
},
{
"id": "LVsqIjAeeXw",
"type": "Commentary",
"india": false,
"title": "Waterseer -BUSTED!",
"channel": "Thunderf00t",
"minutes": null,
"year": null,
"since": 2017,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it as a warning and a debunking whenever water-from-air or similar crowdfunded gadgets appear.",
"tags": [
"waterseer",
"crowdfunding scam",
"thunderf00t",
"atmospheric water",
"physics debunk"
]
},
{
"id": "L_Guz73e6fw",
"type": "Interview",
"india": false,
"title": "Sam Altman: OpenAI CEO on GPT-4, ChatGPT, and the Future of AI | Lex Fridman Podcast #367",
"channel": "Lex Fridman",
"minutes": null,
"year": null,
"since": 2023,
"category": "SaaS & Technology",
"also": [
"Founder Stories & Documentaries"
],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "HN mostly cites it for specific Altman quotes, such as models as reasoning engines rather than databases, while many commenters found the interview shallow or insincere.",
"tags": [
"sam altman",
"openai",
"gpt-4",
"ai risk",
"lex fridman"
]
},
{
"id": "Lp7E973zozc",
"type": "Talk",
"india": false,
"title": "How to stop screwing yourself over | Mel Robbins | TEDxSF",
"channel": "TEDx Talks",
"minutes": null,
"year": null,
"since": 2013,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN mostly cites it in discussions of procrastination and the 5-second rule, not as a strong recommendation.",
"tags": [
"self-help",
"procrastination",
"5-second rule",
"habits",
"tedx"
]
},
{
"id": "Mz14Ul-r63w",
"type": "Tutorial",
"india": false,
"title": "Abusing YouTube Copyright Claims (Tutorial)",
"channel": "The Original Ace",
"minutes": null,
"year": null,
"since": 2019,
"category": "Marketing & Growth",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it as an explanation of the self-claim workaround and an example of how broken YouTube's copyright system is.",
"tags": [
"content id",
"copyright claims",
"youtube",
"music distribution",
"ad revenue"
]
},
{
"id": "NPTzNJMd19A",
"type": "Commentary",
"india": false,
"title": "DYSON ANIMAL BALLS | It blows!",
"channel": "AvE",
"minutes": null,
"year": null,
"since": 2019,
"category": "SaaS & Technology",
"also": [],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "HN cites it as a detailed teardown of a Dyson vacuum showing little substance beneath the branding.",
"tags": [
"teardown",
"dyson",
"vacuum",
"product engineering",
"ave"
]
},
{
"id": "NlHUz99l-eo",
"type": "Explainer",
"india": false,
"title": "Ipod Ad",
"channel": "nikzarea",
"minutes": null,
"year": null,
"since": 2019,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Growth"
],
"stage": null,
"gem": false,
"why": "Cited as an example of Apple selling feelings and status rather than specs.",
"tags": [
"ipod",
"advertising",
"apple marketing",
"daft punk"
]
},
{
"id": "NwVBzx0LMNQ",
"type": "Explainer",
"india": false,
"title": "interactive ui in minority report",
"channel": "ysnimkim",
"minutes": null,
"year": null,
"since": 2010,
"category": "SaaS & Technology",
"also": [],
"topics": [
"Users"
],
"stage": null,
"gem": false,
"why": "Cited in discussions of sci-fi interfaces and whether ideas like pinch-to-zoom were prior art.",
"tags": [
"minority report",
"gesture interface",
"multitouch",
"ui design"
]
},
{
"id": "OW-atKrg0T4",
"type": "Lecture",
"india": false,
"title": "Origins of the Apple Human Interface",
"channel": "Computer History Museum",
"minutes": null,
"year": null,
"since": 2019,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters cite it as a primary source on Lisa and Mac interface history, and a transcription of it was itself discussed on HN.",
"tags": [
"apple",
"macintosh",
"lisa",
"larry tesler",
"gui design",
"computer history"
]
},
{
"id": "OYecfV3ubP8",
"type": "Explainer",
"india": false,
"title": "1984 Apple's First Macintosh Commercial",
"channel": "Sean Collier",
"minutes": null,
"year": null,
"since": 2008,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN mostly uses it as a cultural reference, either as a favorite tech ad or as irony when criticizing Apple's later restrictiveness.",
"tags": [
"apple",
"macintosh",
"1984",
"super bowl ad",
"commercial",
"big brother"
]
},
{
"id": "PV4Oze9JEU0",
"type": "Explainer",
"india": false,
"title": "Capt. Picard \"economics of the future are somewhat different\"",
"channel": "clips2evoke",
"minutes": null,
"year": null,
"since": 2021,
"category": "Customer Behaviour",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN uses it as shorthand for post-scarcity economics, typically as a contrast to money-driven projects like crypto.",
"tags": [
"star trek",
"picard",
"post-scarcity",
"economics",
"sci-fi"
]
},
{
"id": "Q8TXgCzxEnw",
"type": "Demo",
"india": false,
"title": "Material design",
"channel": "Google for Developers",
"minutes": null,
"year": null,
"since": 2014,
"category": "SaaS & Technology",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN mentions it as the polished design-team vision that Android's actual implementation fell short of.",
"tags": [
"google",
"ui design",
"android",
"motion design",
"design language"
]
},
{
"id": "QDVVo14A_fo",
"type": "Explainer",
"india": false,
"title": "Google’s The Selfish Ledger (leaked internal video)",
"channel": "intermission ",
"minutes": null,
"year": null,
"since": 2018,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it as a glimpse of how Google and other data companies think about behavioral sequencing and data collection.",
"tags": [
"google x",
"selfish ledger",
"behavioral sequencing",
"privacy",
"leaked video"
]
},
{
"id": "QHtnfOgp65Q",
"type": "Explainer",
"india": false,
"title": "Cloaking",
"channel": "Google Search Central",
"minutes": null,
"year": null,
"since": 2012,
"category": "Marketing & Growth",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited as the authoritative definition of cloaking when discussing paywall bypasses, Quora, and A/B testing.",
"tags": [
"cloaking",
"seo",
"google guidelines",
"matt cutts",
"googlebot"
]
},
{
"id": "Qdplq4cj76I",
"type": "Interview",
"india": false,
"title": "Steve Jobs : Great idea doesn't always translates into great product",
"channel": "Investors Archive",
"minutes": null,
"year": null,
"since": 2022,
"category": "Startup & Entrepreneurship",
"also": [
"SaaS & Technology",
"Founder Stories & Documentaries"
],
"topics": [
"Ideas",
"Product"
],
"stage": "Idea",
"gem": false,
"why": "Quoted in threads on engineering and product building to argue that execution matters more than ideas.",
"tags": [
"steve jobs",
"product development",
"execution",
"idea people"
]
},
{
"id": "QgkB6T6LrhQ",
"type": "Demo",
"india": false,
"title": "Lenovo Thinkpad X1 Carbon Adaptive Key Demo",
"channel": "GottaBeMobile",
"minutes": null,
"year": null,
"since": 2016,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN uses it as evidence that Apple's Touch Bar idea was not new, and that Lenovo had already tried and dropped it.",
"tags": [
"thinkpad",
"x1 carbon",
"adaptive keyboard",
"touch bar",
"lenovo"
]
},
{
"id": "R706isyDrqI",
"type": "Explainer",
"india": false,
"title": "Apple - 1984",
"channel": "antisubliminal",
"minutes": null,
"year": null,
"since": 2016,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited ironically or as a joke when Apple is accused of becoming the controlling Big Brother it once mocked.",
"tags": [
"apple",
"1984 ad",
"macintosh",
"big brother",
"advertising"
]
},
{
"id": "RWsx1X8PV_A",
"type": "Commentary",
"india": false,
"title": "Milton Friedman - Your Greed or Their Greed?",
"channel": "safvio",
"minutes": null,
"year": null,
"since": 2009,
"category": "Customer Behaviour",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Used as a quick reference clip in capitalism and greed debates.",
"tags": [
"milton friedman",
"capitalism",
"greed",
"free market"
]
},
{
"id": "RvZ-667CEdo",
"type": "Commentary",
"india": false,
"title": "AT&T - 1993 \"You Will\" Ad Campaign",
"channel": "Anthony Kalamut (Southside AdGuy)",
"minutes": null,
"year": null,
"since": 2022,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited as a prescient example of predicting the future, though AT&T did not deliver it.",
"tags": [
"at&t",
"you will",
"1993",
"advertising",
"future tech"
]
},
{
"id": "S1nc_chrNQk",
"type": "Interview",
"india": false,
"title": "Visiting SpaceX & Meeting Elon Musk [Munro Clip]",
"channel": "Munro Live",
"minutes": null,
"year": null,
"since": 2021,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "Used as a neutral outsider's first-hand account of SpaceX's fast engineering culture and Musk's hands-on role.",
"tags": [
"spacex",
"sandy munro",
"elon musk",
"design review",
"starship"
]
},
{
"id": "SdQRkmdhwJs",
"type": "Tutorial",
"india": false,
"title": "Hazard perception test 2026: official DVSA guide",
"channel": "Driver and Vehicle Standards Agency",
"minutes": null,
"year": null,
"since": 2016,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Referenced as an example of a test where drivers click on developing hazards in driving video, in self-driving and driver-risk threads.",
"tags": [
"dvsa",
"theory test",
"hazard perception",
"driver testing"
]
},
{
"id": "SpGJNPShzRc",
"type": "Demo",
"india": false,
"title": "Siri Demo by Scott Forstall at Apple Special Event Oct. 4, 2011",
"channel": "McLeonida",
"minutes": null,
"year": null,
"since": 2022,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "HN uses it as a baseline for how capable Siri seemed at launch and to argue the product has regressed since.",
"tags": [
"siri",
"apple",
"iphone 4s",
"product demo",
"voice interface"
]
},
{
"id": "SqEo107j-uw",
"type": "Interview",
"india": false,
"title": "Elon Musk and Y Combinator President on Thinking for the Future - FULL CONVERSATION",
"channel": "Vanity Fair",
"minutes": null,
"year": null,
"since": 2015,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited mainly as a source for what Musk and Altman said, notably their musings on the simulation hypothesis and the Fermi paradox, and as evidence of Musk's YC ties.",
"tags": [
"elon musk",
"sam altman",
"simulation hypothesis",
"y combinator",
"fermi paradox"
]
},
{
"id": "TGD8zKvRxc4",
"type": "Tutorial",
"india": false,
"title": "Harry Potter By Balenciaga | Step by Step Tutorial",
"channel": "PromptJungle ",
"minutes": null,
"year": null,
"since": 2023,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "HN cites it as a process example of how such AI-generated videos are made, including on a phone.",
"tags": [
"midjourney",
"chatgpt",
"ai video",
"eleven labs",
"meme"
]
},
{
"id": "TIClAanU7Os",
"type": "Explainer",
"india": false,
"title": "Macworld NY 1999-Noah Wyle imitating Steve Jobs",
"channel": "JoshuaG",
"minutes": null,
"year": null,
"since": 2011,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it as a funny piece of Apple history and as evidence of Jobs's showmanship and good humor about his portrayal.",
"tags": [
"steve jobs",
"macworld",
"noah wyle",
"apple",
"keynote"
]
},
{
"id": "TWFzWRoVNnE",
"type": "Commentary",
"india": false,
"title": "I have some things to say - Core i9 & X299",
"channel": "Linus Tech Tips",
"minutes": null,
"year": null,
"since": 2017,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it as a source for Intel's market-segmentation tactics on its high-end desktop platform.",
"tags": [
"x299",
"core i9",
"pcie lanes",
"intel",
"cpu market"
]
},
{
"id": "TzcJlKg2Rc0",
"type": "Interview",
"india": false,
"title": "Sam Altman in conversation with StrictlyVC",
"channel": "Connie Loizos",
"minutes": null,
"year": null,
"since": 2023,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "It is mostly cited critically or jokingly, as a source for Altman's early statements about AGI and investor promises that commenters later quote back at him.",
"tags": [
"sam altman",
"openai",
"agi",
"y combinator",
"startups"
]
},
{
"id": "UFcb-XF1RPQ",
"type": "Explainer",
"india": false,
"title": "Pirates of Silicon Valley \"You don't get it Steve, that doesn't matter\"",
"channel": "Craig Bickerstaff",
"minutes": null,
"year": null,
"since": 2022,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN quotes the scene when a better product loses to a more pragmatic or dominant competitor.",
"tags": [
"pirates of silicon valley",
"steve jobs",
"bill gates",
"film clip",
"windows",
"macintosh"
]
},
{
"id": "UOYi4NzxlhE",
"type": "Explainer",
"india": false,
"title": "Margin Call (3/9) Movie CLIP - The Music Stops (2011) HD",
"channel": "Movieclips",
"minutes": null,
"year": null,
"since": 2023,
"category": "Investment & Venture Capital",
"also": [],
"topics": [
"Fundraising"
],
"stage": null,
"gem": false,
"why": "Cited as a reference scene when commenters see signs of impending economic or institutional trouble.",
"tags": [
"margin call",
"financial crisis",
"movie clip",
"investment banking"
]
},
{
"id": "UYHFrf5ci_g",
"type": "Commentary",
"india": false,
"title": "How The Banks Bought Bitcoin | Lightning Network",
"channel": "Decentralized Thought",
"minutes": null,
"year": null,
"since": 2018,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN mentions are thin and mostly cite it in Lightning Network discussions, as a reference point for that critical viewpoint rather than a recommendation.",
"tags": [
"bitcoin",
"lightning network",
"blockstream",
"bitcoin cash",
"cryptocurrency"
]
},
{
"id": "UZ9qcp6Lcno",
"type": "Explainer",
"india": false,
"title": "Qwest - Every Movie",
"channel": "daninnj",
"minutes": null,
"year": null,
"since": 2010,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN brings it up as an eerily prescient ad that foresaw on-demand streaming years before YouTube or Netflix.",
"tags": [
"qwest",
"1999 ad",
"video on demand",
"streaming",
"retro advertising"
]
},
{
"id": "UiOzGI4MqSU",
"type": "Interview",
"india": false,
"title": "Steve Jobs says, \"Microsoft has no taste.\"",
"channel": "Elon Musk - The Martian",
"minutes": null,
"year": null,
"since": 2024,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited in debates about Windows design quality, sometimes agreeing and sometimes disputing the claim.",
"tags": [
"steve jobs",
"microsoft",
"windows",
"design taste",
"interview clip"
]
},
{
"id": "VkVs4ZqWgN8",
"type": "Explainer",
"india": false,
"title": "Steve Jobs - Apple Product Matrix Strategy 1997",
"channel": "JackIsBack15",
"minutes": null,
"year": null,
"since": 2016,
"category": "SaaS & Technology",
"also": [
"Founder Stories & Documentaries"
],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "Cited in Apple product-line threads as a reminder of the focus Jobs brought by reducing offerings to a few great products.",
"tags": [
"steve jobs",
"apple",
"product strategy",
"focus",
"1997"
]
},
{
"id": "VtvjbmoDx-I",
"type": "Explainer",
"india": false,
"title": "1984 Apple's Macintosh Commercial (HD)",
"channel": "Mac History",
"minutes": null,
"year": null,
"since": 2016,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN mostly references it as a cultural touchstone, either praised as one of the most powerful ads ever or used ironically to criticize Apple's later behavior.",
"tags": [
"apple",
"macintosh",
"1984",
"super bowl ad",
"ridley scott"
]
},
{
"id": "WSatPoD2W-o",
"type": "Interview",
"india": false,
"title": "Carl Icahn: \"I Fired 12 Floors of People\"",
"channel": "Investor Talk",
"minutes": null,
"year": null,
"since": 2022,
"category": "Investment & Venture Capital",
"also": [
"Startup & Entrepreneurship"
],
"topics": [
"Fundraising",
"Team"
],
"stage": null,
"gem": false,
"why": "Used as an anecdote in layoff and cost-cutting debates: the company supposedly never noticed what the fired staff had done.",
"tags": [
"carl icahn",
"layoffs",
"activist investing",
"management",
"anecdote"
]
},
{
"id": "X8XZriAdB1g",
"type": "Explainer",
"india": false,
"title": "Why Heathrow Airport Had Empty Flights to Nowhere",
"channel": "Half as Interesting",
"minutes": null,
"year": null,
"since": 2020,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited to show that empty slot-keeping flights predate COVID and Lufthansa's recent practice.",
"tags": [
"heathrow",
"ghost flights",
"airline slots",
"aviation",
"use-it-or-lose-it"
]
},
{
"id": "XAfTXYa36f4",
"type": "Talk",
"india": false,
"title": "Steve Jobs Quoting Alan Kay",
"channel": "Chunka Mui",
"minutes": null,
"year": null,
"since": 2017,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited whenever HN discusses Apple's vertical integration and its custom silicon.",
"tags": [
"steve jobs",
"alan kay",
"iphone",
"apple silicon",
"vertical integration"
]
},
{
"id": "XLzBMGXfK4c",
"type": "Talk",
"india": false,
"title": "Michael Jordan's Basketball Hall of Fame Enshrinement Speech",
"channel": "OfficialHoophall",
"minutes": null,
"year": null,
"since": 2015,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN refers to it as a source for Jordan's motivation-from-slights anecdotes and his cut-from-the-team story.",
"tags": [
"michael jordan",
"basketball",
"hall of fame",
"motivation"
]
},
{
"id": "XQQYbKT_rMg",
"type": "Explainer",
"india": false,
"title": "Star Trek Economy",
"channel": "EpiXXmaN",
"minutes": null,
"year": null,
"since": 2017,
"category": "Customer Behaviour",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters link it to illustrate Star Trek's moneyless economy in discussions of post-scarcity and the future.",
"tags": [
"star trek",
"tng",
"economics",
"post-scarcity",
"utopia"
]
},
{
"id": "XamC7-Pt8N0",
"type": "Explainer",
"india": false,
"title": "The Gambler (2014) - F*** You Scene (7/10) | Movieclips",
"channel": "Movieclips",
"minutes": null,
"year": null,
"since": 2023,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Linked in career and burnout threads as shorthand for the freedom financial independence gives you.",
"tags": [
"fu money",
"the gambler",
"burnout",
"savings",
"movie clip"
]
},
{
"id": "XeIIpLqsOe4",
"type": "Interview",
"india": false,
"title": "Charlie Rose   Eric Schmidt",
"channel": "Gregory Ferenstein",
"minutes": null,
"year": null,
"since": 2013,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Quoted, often critically, to argue that Google aims for a single answer and to compare it with ChatGPT-style answers.",
"tags": [
"eric schmidt",
"google search",
"charlie rose",
"single answer",
"chatgpt"
]
},
{
"id": "XxbJw8PrIkc",
"type": "Explainer",
"india": false,
"title": "Steve Ballmer at .NET presentation: Developers (HQ, Extended)",
"channel": "Blue OS Museum",
"minutes": null,
"year": null,
"since": 2023,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "HN references it as a meme about Ballmer's famous energy, in jokes and in threads about high-energy people.",
"tags": [
"steve ballmer",
"developers",
"microsoft",
"meme"
]
},
{
"id": "YRyYIIFKsdU",
"type": "Talk",
"india": false,
"title": "The Eleventh HOPE (2016): Coding by Voice with Open Source Speech Recognition",
"channel": "Channel2600",
"minutes": null,
"year": null,
"since": 2018,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it as proof that voice coding works and lists it among resources for programmers who can't type.",
"tags": [
"voice coding",
"speech recognition",
"accessibility",
"repetitive strain injury",
"dragon naturallyspeaking"
]
},
{
"id": "YcjlhFVTY50",
"type": "Explainer",
"india": false,
"title": "Apple II Forever",
"channel": "Alfred DiBlasi",
"minutes": null,
"year": null,
"since": 2026,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "HN cites it as period footage showing how Apple presented the II line and how the company leaned on its education market to survive.",
"tags": [
"apple iic",
"1984",
"apple history",
"product launch",
"retrocomputing"
]
},
{
"id": "Yf1o0TQzry8",
"type": "Interview",
"india": false,
"title": "Ilya Sutskever (OpenAI Chief Scientist) — Why next-token prediction could surpass human intelligence",
"channel": "Dwarkesh Patel",
"minutes": null,
"year": null,
"since": 2023,
"category": "SaaS & Technology",
"also": [
"Founder Stories & Documentaries"
],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "HN commenters cite it mainly for Sutskever's statements that training data is far from exhausted.",
"tags": [
"ilya sutskever",
"openai",
"agi",
"training data",
"alignment"
]
},
{
"id": "YfJ3QxJYsw8",
"type": "Interview",
"india": false,
"title": "Steve Jobs on the Post PC era",
"channel": "smlierow",
"minutes": null,
"year": null,
"since": 2017,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN uses it as the source for Jobs's truck analogy in debates over whether PCs are dying.",
"tags": [
"steve jobs",
"d8",
"truck analogy",
"personal computers",
"apple"
]
},
{
"id": "ZO0PXYMVGSU",
"type": "Interview",
"india": false,
"title": "Oral History of Bjarne Stroustrup",
"channel": "Computer History Museum",
"minutes": null,
"year": null,
"since": 2015,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters cite it as a primary source for why Stroustrup created C++, including combining C and Simula and the aim of zero-cost abstractions.",
"tags": [
"bjarne stroustrup",
"c++",
"simula",
"bell labs",
"oral history",
"zero-cost abstractions"
]
},
{
"id": "ZbklkFuFk-4",
"type": "Demo",
"india": false,
"title": "How to steal a bike in NYC",
"channel": "uneasysilence",
"minutes": null,
"year": null,
"since": 2009,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it as a demonstration of bystander indifference to bike theft.",
"tags": [
"bike theft",
"nyc",
"bystander effect",
"social experiment"
]
},
{
"id": "ZzCegQVljdY",
"type": "Explainer",
"india": false,
"title": "Inequality: Why are the rich getting richer?",
"channel": "Positive Money UK",
"minutes": null,
"year": null,
"since": 2020,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters mostly drop it as a reference on money creation and public banking, in threads about banks, rentier economics and monetary reform.",
"tags": [
"positive money",
"banking",
"money creation",
"inequality",
"monetary reform"
]
},
{
"id": "_8yVOC4ciXc",
"type": "Explainer",
"india": false,
"title": "GPT3: An Even Bigger Language Model - Computerphile",
"channel": "Computerphile",
"minutes": null,
"year": null,
"since": 2020,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "HN commenters cite it as a concise explanation of GPT-3's scaling jump and surprising abilities at its release.",
"tags": [
"gpt-3",
"scaling",
"language models",
"computerphile",
"rob miles"
]
},
{
"id": "_QST1ZAJ29o",
"type": "Demo",
"india": false,
"title": "The World Premiere of the Amiga (1985, Andy Warhol, Debbie Harry)",
"channel": "Generation X Video Archive",
"minutes": null,
"year": null,
"since": 2024,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "Cited in Amiga threads as the source for the Warhol live-painting moment and the launch event.",
"tags": [
"amiga",
"andy warhol",
"1985",
"retro computing",
"product launch"
]
},
{
"id": "_QvguJJNilA",
"type": "Explainer",
"india": false,
"title": "Magic Whiteboard - Dragons Den Winners - The Original & Best",
"channel": "Neil Westwood",
"minutes": null,
"year": null,
"since": 2010,
"category": "Startup & Entrepreneurship",
"also": [
"Marketing & Growth"
],
"topics": [
"Product"
],
"stage": "Fundraising",
"gem": false,
"why": "Mentioned as a UK example of a whiteboard product that took off after a Dragons' Den appearance, in threads about whiteboard products.",
"tags": [
"dragons' den",
"whiteboard",
"product pitch",
"uk startups"
]
},
{
"id": "_fNp37zFn9Q",
"type": "Demo",
"india": false,
"title": "living with lag - an oculus rift experiment",
"channel": "umeaenergi",
"minutes": null,
"year": null,
"since": 2014,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited as a funny illustration of how lag wrecks hand-eye coordination.",
"tags": [
"lag",
"oculus rift",
"latency",
"vr",
"experiment"
]
},
{
"id": "_oJs8-I9WtA",
"type": "Explainer",
"india": false,
"title": "Comparing Beta & VHS on Quality: Was Beta Really Better?",
"channel": "Technology Connections",
"minutes": null,
"year": null,
"since": 2022,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited as evidence that Betamax was not meaningfully better than VHS.",
"tags": [
"betamax",
"vhs",
"video quality",
"format war",
"vcr"
]
},
{
"id": "aRrDsbUdY_k",
"type": "Commentary",
"india": false,
"title": "Credit Reports: Last Week Tonight with John Oliver (HBO)",
"channel": "LastWeekTonight",
"minutes": null,
"year": null,
"since": 2016,
"category": "Investment & Venture Capital",
"also": [
"Customer Behaviour"
],
"topics": [],
"stage": null,
"gem": false,
"why": "Referenced as a quick, entertaining overview of problems with credit reporting and scoring.",
"tags": [
"credit reports",
"credit scores",
"consumer finance",
"john oliver",
"background checks"
]
},
{
"id": "aXV-yaFmQNk",
"type": "Explainer",
"india": false,
"title": "A Magazine Is an iPad That Does Not Work.m4v",
"channel": "UserExperiencesWorks",
"minutes": null,
"year": null,
"since": 2012,
"category": "Business Psychology",
"also": [
"SaaS & Technology"
],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited as a humorous, somewhat contrived example of children and technology dependence.",
"tags": [
"ipad",
"ux",
"digital natives",
"print media"
]
},
{
"id": "aYbNh3NS7jA",
"type": "Interview",
"india": false,
"title": "Q&A with Guido van Rossum, Inventor of Python",
"channel": "Microsoft Reactor",
"minutes": null,
"year": null,
"since": 2021,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN uses it as a source for Guido's views on Rust, Go and Python 4, with timestamps shared.",
"tags": [
"guido van rossum",
"python",
"q&a",
"language design",
"rust"
]
},
{
"id": "arMH5GjBwUQ",
"type": "Talk",
"india": false,
"title": "Gerald Jay Sussman: The Role of Programming   (Dan Friedman's 60th Birthday)",
"channel": "William Byrd",
"minutes": null,
"year": null,
"since": 2022,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited for Sussman's argument that programs make ideas precise in a way standard math notation does not.",
"tags": [
"sussman",
"notation",
"sicm",
"mathematics",
"scheme"
]
},
{
"id": "bNpx7gpSqbY",
"type": "Talk",
"india": false,
"title": "The single biggest reason why start-ups succeed | Bill Gross | TED",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2017,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters cite it for its finding that timing is the most important factor in startup success.",
"tags": [
"startups",
"timing",
"ted talk",
"entrepreneurship"
]
},
{
"id": "bO4jHXjCXw8",
"type": "Interview",
"india": false,
"title": "Matthew Driver “Trust Is A Critical Component” | Perspectives | Channel NewsAsia",
"channel": "CNA Insider",
"minutes": null,
"year": null,
"since": 2016,
"category": "Investment & Venture Capital",
"also": [
"SaaS & Technology"
],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited, usually critically, as a window into how payment companies view cryptocurrency and cash.",
"tags": [
"mastercard",
"bitcoin",
"cash",
"payments",
"virtual currencies"
]
},
{
"id": "cQ54GDm1eL0",
"type": "Demo",
"india": false,
"title": "You Won’t Believe What Obama Says In This Video! 😉",
"channel": "BuzzFeedVideo",
"minutes": null,
"year": null,
"since": 2018,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "Used as an early, widely seen example of deepfakes in discussions of fake video and its risks.",
"tags": [
"deepfake",
"obama",
"ai video",
"misinformation",
"jordan peele"
]
},
{
"id": "d6sVWEu9HWU",
"type": "Demo",
"india": false,
"title": "Future of Elder Scrolls & RPG - Skyrim NPCs & Inworld AI (like GPT-4 for gaming)",
"channel": "Bloc",
"minutes": null,
"year": null,
"since": 2023,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "Pointed to as an early example of LLM-powered NPC dialog in games.",
"tags": [
"skyrim",
"llm",
"inworld ai",
"game mods",
"npc dialogue"
]
},
{
"id": "dEeyaAUCyZs",
"type": "Interview",
"india": false,
"title": "Steve Jobs - Apple Is Software",
"channel": "Mike Cane",
"minutes": null,
"year": null,
"since": 2016,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Quoted whenever someone needs Jobs's own words that Apple sees itself as a software company.",
"tags": [
"steve jobs",
"apple",
"software",
"hardware",
"strategy"
]
},
{
"id": "dSj6kvv7_Sg",
"type": "Documentary",
"india": false,
"title": "The Machine to Build the Machines - NeXT",
"channel": "MuStudio",
"minutes": null,
"year": null,
"since": 2016,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it as evidence of early lights-out manufacturing and of Steve Jobs's factory automation roots in threads on automation and US manufacturing.",
"tags": [
"next",
"steve jobs",
"manufacturing",
"lights-out factory",
"pcb assembly"
]
},
{
"id": "eC1BAcOzHyY",
"type": "Demo",
"india": false,
"title": "Magnus Carlsen's Mind-Blowing Memory! World Chess Champion tested",
"channel": "chess24",
"minutes": null,
"year": null,
"since": 2021,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters cite it as an example of expert memory built on context, such as Carlsen identifying players, tournaments and moves from positions.",
"tags": [
"magnus carlsen",
"chess",
"memory",
"pattern recognition",
"expertise"
]
},
{
"id": "eKaI78K_rgA",
"type": "Talk",
"india": false,
"title": "An Earthshaking Announcement",
"channel": "River Valley Technologies",
"minutes": null,
"year": null,
"since": 2020,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Mostly used as a joke link or reference in threads about Knuth, TeX and fonts, where its punchline is not to be spoiled.",
"tags": [
"knuth",
"tex",
"stanford",
"tug",
"humor"
]
},
{
"id": "eblPwXFb7TE",
"type": "Interview",
"india": false,
"title": "Tesla's Founders On Elon Musk And The Early Days",
"channel": "CNBC",
"minutes": null,
"year": null,
"since": 2021,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited to settle the question of whether Musk was a Tesla founder and to show how the Roadster pitch won his investment.",
"tags": [
"tesla",
"elon musk",
"martin eberhard",
"roadster",
"startup history"
]
},
{
"id": "fNgEG5rCav4",
"type": "Interview",
"india": false,
"title": "Anthony Levandowski on lessons learned at TC Sessions: Robotics+AI",
"channel": "TechCrunch",
"minutes": null,
"year": null,
"since": 2019,
"category": "Startup & Entrepreneurship",
"also": [
"Founder Stories & Documentaries"
],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "Cited as the source of Levandowski's remark agreeing with Elon Musk that lidar is a crutch.",
"tags": [
"levandowski",
"lidar",
"self-driving",
"pronto.ai"
]
},
{
"id": "fs-YpQj88ew",
"type": "Interview",
"india": false,
"title": "Bill Gates Explains the Internet to Dave (1995) | Letterman",
"channel": "Letterman",
"minutes": null,
"year": null,
"since": 2022,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "It is mostly linked as a joke or period piece about how the internet was viewed in the 1990s, not recommended for content.",
"tags": [
"bill gates",
"letterman",
"microsoft",
"1995",
"late night"
]
},
{
"id": "gE8ZikfrpFU",
"type": "Commentary",
"india": false,
"title": "Your Product Sucks — Apple Music macOS review",
"channel": "Your Product Sucks",
"minutes": null,
"year": null,
"since": 2021,
"category": "SaaS & Technology",
"also": [],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "HN cites it, with schadenfreude, as evidence that Apple Music on desktop is poorly built.",
"tags": [
"apple music",
"macos",
"software usability",
"review"
]
},
{
"id": "gtuz5OmOh_M",
"type": "Talk",
"india": false,
"title": "Steve Jobs Presents to the Cupertino City Council  (6/7/11)",
"channel": "City of Cupertino",
"minutes": null,
"year": null,
"since": 2011,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN returns to it as a primary source for campus details, Jobs's answers on taxes and on-site power, and the council's offbeat requests.",
"tags": [
"steve jobs",
"apple park",
"cupertino",
"city council",
"presentation"
]
},
{
"id": "gyaPf6qXLa8",
"type": "Commentary",
"india": false,
"title": "Cramer on How Hedge Funds are Scamming the Market",
"channel": "Cats Meow Trading",
"minutes": null,
"year": null,
"since": 2022,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN quotes it mainly to mock or criticize Cramer, or as him admitting to manipulation on air, not as a recommendation.",
"tags": [
"jim cramer",
"hedge funds",
"stock market",
"cnbc"
]
},
{
"id": "h5gnATQMtPg",
"type": "Lecture",
"india": false,
"title": "Gauge Theory and Inflation: Enlarging the Wu-Yang Dictionary",
"channel": "Tom Henderson",
"minutes": null,
"year": null,
"since": 2018,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited mainly as the available video of Weinstein's gauge-theory-of-economics ideas, sometimes skeptically.",
"tags": [
"eric weinstein",
"gauge theory",
"inflation",
"geometry",
"econophysics"
]
},
{
"id": "hE7k0_9k0VA",
"type": "Interview",
"india": false,
"title": "reddit.com Interviews Peter Norvig",
"channel": "Reddit",
"minutes": null,
"year": null,
"since": 2010,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "HN mostly quotes it for specific Norvig remarks, such as language choice mattering less and the open-space versus cubicle trade-off.",
"tags": [
"peter norvig",
"programming languages",
"google",
"artificial intelligence",
"ama"
]
},
{
"id": "hIXhnWUmMvw",
"type": "Documentary",
"india": false,
"title": "Shoshana Zuboff on surveillance capitalism | VPRO Documentary",
"channel": "vpro documentary",
"minutes": null,
"year": null,
"since": 2020,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Linked as a reference in privacy and big tech threads for framing the business model of data extraction.",
"tags": [
"shoshana zuboff",
"privacy",
"big tech",
"data",
"advertising"
]
},
{
"id": "i5f8bqYYwps",
"type": "Interview",
"india": false,
"title": "Steve Jobs in 2010, at D8 Conference (Full Video)",
"channel": "Video Insider",
"minutes": null,
"year": null,
"since": 2018,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Commenters cite timestamps from it as a primary source for Jobs' views on specific topics.",
"tags": [
"steve jobs",
"apple",
"d8 conference",
"flash",
"privacy"
]
},
{
"id": "iIiAAhUeR6Y",
"type": "Talk",
"india": false,
"title": "Choice, happiness and spaghetti sauce | Malcolm Gladwell",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2009,
"category": "Marketing & Growth",
"also": [
"Customer Behaviour",
"Business Psychology"
],
"topics": [
"Growth"
],
"stage": "Growth",
"gem": false,
"why": "Cited to argue that people do not know what they want and that markets should be segmented.",
"tags": [
"malcolm gladwell",
"ted",
"marketing",
"market segmentation",
"preferences"
]
},
{
"id": "iPkJH6BT7dM",
"type": "Explainer",
"india": false,
"title": "It's A Wonderful Life Bank Run",
"channel": "Hoosiertown",
"minutes": null,
"year": null,
"since": 2019,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Used as a classic analogy for fractional reserve banking and bank runs.",
"tags": [
"banking",
"fractional reserve",
"film clip",
"svb",
"finance"
]
},
{
"id": "idb_qsAAe1c",
"type": "Explainer",
"india": false,
"title": "Chernobyl Shoe Factory Scene",
"channel": "psfonseka",
"minutes": null,
"year": null,
"since": 2019,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "Used as an analogy whenever commenters criticize unqualified people placed in charge of expert fields.",
"tags": [
"chernobyl",
"hbo",
"management",
"incompetence",
"tv scene"
]
},
{
"id": "ieErnZAN5Eo",
"type": "Tutorial",
"india": false,
"title": "How to Break YouTube (Copyright Claim your own video)",
"channel": "ymfah",
"minutes": null,
"year": null,
"since": 2020,
"category": "Marketing & Growth",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it as an example of how easily the Content ID system can be gamed, mostly in copyright-claim discussions.",
"tags": [
"content id",
"copyright claims",
"youtube monetization",
"dmca",
"creators"
]
},
{
"id": "ikaqus5_QIg",
"type": "Interview",
"india": false,
"title": "The Secrets of Monkey Island - An Evening With Ron Gilbert",
"channel": "The Video Game History Foundation",
"minutes": null,
"year": null,
"since": 2020,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Pointed to as a rare look at the real SCUMM code of a classic adventure game.",
"tags": [
"monkey island",
"scumm",
"ron gilbert",
"adventure games",
"source code"
]
},
{
"id": "j0UnS3jHhAA",
"type": "Demo",
"india": false,
"title": "I made an GPT-powered Linux shell that guesses your bash command (and hallucinates crazy stuff)",
"channel": "River's Educational Channel",
"minutes": null,
"year": null,
"since": 2021,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "Cited as an early, amusing example of LLM-driven command-line toys, with commenters sharing similar experiments.",
"tags": [
"gpt-3",
"bash",
"openai",
"hallucination",
"command line"
]
},
{
"id": "jWTGsUyv8IE",
"type": "Explainer",
"india": false,
"title": "Rick Suddeth: USSR: Moscow 1989 Grocery Store",
"channel": "Rick Suddeth",
"minutes": null,
"year": null,
"since": 2015,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited as visual evidence of Soviet command-economy scarcity, usually in arguments about choice and central planning.",
"tags": [
"ussr",
"grocery store",
"command economy",
"moscow 1989",
"scarcity"
]
},
{
"id": "jvqFAi7vkBc",
"type": "Interview",
"india": false,
"title": "Sam Altman: OpenAI, GPT-5, Sora, Board Saga, Elon Musk, Ilya, Power & AGI | Lex Fridman Podcast #419",
"channel": "Lex Fridman",
"minutes": null,
"year": null,
"since": 2024,
"category": "SaaS & Technology",
"also": [
"Founder Stories & Documentaries"
],
"topics": [
"Team",
"AI"
],
"stage": null,
"gem": false,
"why": "HN uses it as a primary source for what Altman said on topics like programming changing, GPT-5's expected leap and startup structure, and often posts timestamps or paraphrases.",
"tags": [
"sam altman",
"openai",
"gpt-5",
"agi",
"lex fridman"
]
},
{
"id": "kHI7RTKhlz0",
"type": "Commentary",
"india": false,
"title": "Steve Balmer on KLOCs",
"channel": "Ali Gajani",
"minutes": null,
"year": null,
"since": 2016,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"Product"
],
"stage": null,
"gem": false,
"why": "Linked whenever lines of code or developer productivity metrics are debated.",
"tags": [
"lines of code",
"steve ballmer",
"ibm",
"metrics",
"triumph of the nerds"
]
},
{
"id": "kOO31qFmi9A",
"type": "Explainer",
"india": false,
"title": "Introduction to Microsoft Excel 1990 with Jan Brehm",
"channel": "Jan Brehm",
"minutes": null,
"year": null,
"since": 2022,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited as a famous 90s Excel ad and as a benchmark for how clear a product ad can be.",
"tags": [
"excel",
"1990",
"microsoft",
"advertising",
"retro tech"
]
},
{
"id": "kSLJriaOumA",
"type": "Demo",
"india": false,
"title": "A Style-Based Generator Architecture for Generative Adversarial Networks",
"channel": "Tero Karras FI",
"minutes": null,
"year": null,
"since": 2018,
"category": "SaaS & Technology",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "Cited as an example of how realistic GAN-generated faces had become, and of what a well-structured latent space can do.",
"tags": [
"stylegan",
"gan",
"image synthesis",
"latent space",
"nvidia"
]
},
{
"id": "kVY7-Ti77UQ",
"type": "Commentary",
"india": false,
"title": "Spotify's Phony War On Bots",
"channel": "Benn Jordan",
"minutes": null,
"year": null,
"since": 2024,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it as a firsthand example of artists losing catalogs with no recourse and of the middlemen in music streaming.",
"tags": [
"spotify",
"fake streams",
"music distribution",
"independent artists",
"streaming royalties"
]
},
{
"id": "kw-DlWwlXHo",
"type": "Interview",
"india": false,
"title": "E3 12: John Carmack's VR Presentation",
"channel": "Gamereactor",
"minutes": null,
"year": null,
"since": 2013,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited as an early, primary-source look at Carmack's VR prototype, which preceded his move to Oculus.",
"tags": [
"john carmack",
"oculus",
"vr headset",
"e3 2012",
"doom 3"
]
},
{
"id": "l2ThMmgQdpE",
"type": "Explainer",
"india": false,
"title": "PowerMac G4 Ad - Tanks",
"channel": "mobilzzone",
"minutes": null,
"year": null,
"since": 2024,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited as a clever precedent whenever export controls on powerful computing hardware or AI models are discussed.",
"tags": [
"apple",
"powermac g4",
"export controls",
"commercial",
"advertising"
]
},
{
"id": "lXUZvyajciY",
"type": "Interview",
"india": false,
"title": "Andrej Karpathy — “We’re summoning ghosts, not building animals”",
"channel": "Dwarkesh Patel",
"minutes": null,
"year": null,
"since": 2025,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "Mostly cited as a source for Karpathy's views on agents, AGI timelines and LLMs, rather than recommended outright.",
"tags": [
"andrej karpathy",
"reinforcement learning",
"agi",
"self-driving",
"llm"
]
},
{
"id": "lc5Np9OqDHU",
"type": "Commentary",
"india": false,
"title": "Why We Should Stop Using JavaScript According to Douglas Crockford (Inventor of JSON)",
"channel": "CultRepo ",
"minutes": null,
"year": null,
"since": 2023,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN users cite it to show that even Crockford, once a JavaScript evangelist, has soured on the language, though some find it thin on substance.",
"tags": [
"douglas crockford",
"javascript",
"json",
"language design",
"web development"
]
},
{
"id": "lc7scxvKQOo",
"type": "Demo",
"india": false,
"title": "This is how hackers hack you using simple social engineering",
"channel": "oracle mind",
"minutes": null,
"year": null,
"since": 2016,
"category": "Business Psychology",
"also": [
"Customer Behaviour"
],
"topics": [
"Users"
],
"stage": null,
"gem": false,
"why": "Cited as a funny and effective real example of social engineering whenever support-desk account takeovers and human weak points are discussed.",
"tags": [
"phone pretexting",
"security awareness",
"customer support",
"hacking",
"account takeover"
]
},
{
"id": "ljx0Zh7eidE",
"type": "Interview",
"india": false,
"title": "Oral History of Steve Naroff Part 1, Session 1",
"channel": "Computer History Museum",
"minutes": null,
"year": null,
"since": 2020,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Pointed to as a primary-source account of Objective-C's origins and the early days of NeXT and Apple.",
"tags": [
"objective-c",
"steve naroff",
"nextstep",
"stepstone",
"oral history"
]
},
{
"id": "lskpNmUl8yQ",
"type": "Interview",
"india": false,
"title": "BILL GATES on 'the internet' in 1995 | David LETTERMAN",
"channel": "Studio HilbArt",
"minutes": null,
"year": null,
"since": 2017,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it as an example of how even sharp people dismissed a transformative technology, often invoked in crypto debates.",
"tags": [
"bill gates",
"david letterman",
"1995",
"internet history",
"tech skepticism"
]
},
{
"id": "m4yVlPqeZwo",
"type": "Talk",
"india": false,
"title": "Innovation Agenda | Barack Obama | Talks at Google",
"channel": "Talks at Google",
"minutes": null,
"year": null,
"since": 2008,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Referenced for his answers on technology policy and the famous bubble sort question, and for comparing politics then and later.",
"tags": [
"barack obama",
"talks at google",
"technology policy",
"2008 election",
"eric schmidt"
]
},
{
"id": "mArrNRWQEso",
"type": "Interview",
"india": false,
"title": "Where's Google going next? | Larry Page",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2014,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited for specific Larry Page statements, such as on sharing medical data for research and personalized search being a hard problem.",
"tags": [
"larry page",
"ted",
"deepmind",
"privacy",
"charlie rose"
]
},
{
"id": "mOy8Xjaa_o8",
"type": "Explainer",
"india": false,
"title": "I visited the US National Helium Reserve",
"channel": "Tom Scott",
"minutes": null,
"year": null,
"since": 2019,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited to show that helium is not actually running out, and for background on the federal reserve.",
"tags": [
"helium",
"national helium reserve",
"tom scott",
"commodities"
]
},
{
"id": "mS5WYp5xmvI",
"type": "Lecture",
"india": false,
"title": "Thomas Sowell on the Myths of Economic Inequality",
"channel": "Hoover Institution",
"minutes": null,
"year": null,
"since": 2019,
"category": "Customer Behaviour",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Mostly cited as a source for Sowell's views on welfare, neighborhoods and his personal anecdotes.",
"tags": [
"thomas sowell",
"inequality",
"welfare",
"economics",
"hoover institution"
]
},
{
"id": "mwdo17GT6sg",
"type": "Explainer",
"india": false,
"title": "The Big Short (2015) - FrontPoint Partners confronts Morgan Stanley Risk Assessors and S&P",
"channel": "Extractor",
"minutes": null,
"year": null,
"since": 2017,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Used as a shorthand scene for conflicts of interest where auditors or raters are paid by the entities they judge.",
"tags": [
"the big short",
"financial crisis",
"ratings agencies",
"conflict of interest",
"mortgage bonds"
]
},
{
"id": "n0CT8zrw6lw",
"type": "Documentary",
"india": false,
"title": "The Doomed Cleveland Balloonfest of '86",
"channel": "The Atlantic",
"minutes": null,
"year": null,
"since": 2018,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited as a shorthand for a spectacularly misguided publicity stunt, or as a classic embarrassing Cleveland episode.",
"tags": [
"balloonfest",
"cleveland",
"short documentary",
"publicity stunt"
]
},
{
"id": "nHaTRWRj8G0",
"type": "Interview",
"india": false,
"title": "Steve Jobs talks about what he saw and he missed at Xerox PARC",
"channel": "Yoshiki Ohshima (大島芳樹)",
"minutes": null,
"year": null,
"since": 2020,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it as Jobs's own account of what Apple took from Xerox and why Xerox failed.",
"tags": [
"steve jobs",
"xerox parc",
"gui history",
"apple",
"tech history"
]
},
{
"id": "o8NPllzkFhE",
"type": "Interview",
"india": false,
"title": "The Mind Behind Linux | Linus Torvalds | TED",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2016,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it for Linus's remarks on code taste, his self-description as an engineer rather than a visionary, and the growth of Linux.",
"tags": [
"linus torvalds",
"linux",
"git",
"code taste",
"open source"
]
},
{
"id": "ohmajJTcpNk",
"type": "Demo",
"india": false,
"title": "Face2Face: Real-time Face Capture and Reenactment of RGB Videos (CVPR 2016 Oral)",
"channel": "Matthias Niessner",
"minutes": null,
"year": null,
"since": 2016,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN uses it as a reference point in deepfake and fake-news discussions, showing that convincing real-time video manipulation was already possible in 2016.",
"tags": [
"face2face",
"deepfakes",
"computer vision",
"video synthesis",
"cvpr"
]
},
{
"id": "ovYbgbrQ-v8",
"type": "Interview",
"india": false,
"title": "I Interviewed The Creator Of LLVM, Clang, Swift, and Mojo",
"channel": "The PrimeTime",
"minutes": null,
"year": null,
"since": 2024,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited in Swift discussions for Lattner's account of Swift becoming complex too fast under pressure from Apple's needs.",
"tags": [
"chris lattner",
"swift",
"llvm",
"mojo",
"language design"
]
},
{
"id": "pWgyy_rlmag",
"type": "Explainer",
"india": false,
"title": "Scene from Moneyball - What is the problem?",
"channel": "Adam Staab",
"minutes": null,
"year": null,
"since": 2016,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "Invoked as shorthand for hiring and investing by gut feel and appearances instead of what actually predicts results.",
"tags": [
"moneyball",
"scouting",
"hiring bias",
"decision making",
"baseball"
]
},
{
"id": "r38Epj6ldKU",
"type": "Commentary",
"india": false,
"title": "Apple Is Terrible for Your Privacy",
"channel": "The Hated One",
"minutes": null,
"year": null,
"since": 2022,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Commenters post it as support for the view that Apple's privacy stance is mostly marketing.",
"tags": [
"apple",
"privacy",
"tracking",
"privacy policy",
"big tech"
]
},
{
"id": "rDqQcmVqAm4",
"type": "Interview",
"india": false,
"title": "Steve Jobs   The Lost Interview",
"channel": "Steve Jobs",
"minutes": null,
"year": null,
"since": 2021,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited for first-person Jobs remarks, such as nobody knowing the market in the early days, and for dating the footage.",
"tags": [
"steve jobs",
"apple",
"tech history",
"interview",
"personal computing"
]
},
{
"id": "ramBFRt1Uzk",
"type": "Talk",
"india": false,
"title": "The surprising decline in violence | Steven Pinker",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2013,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited as a counterpoint when threads claim the world is getting worse, and for Pinker's view that technology and trade create positive-sum interactions.",
"tags": [
"steven pinker",
"history of violence",
"peace",
"progress",
"ted"
]
},
{
"id": "rmsIZUuBoQs",
"type": "Commentary",
"india": false,
"title": "Alan Kay on Linux",
"channel": "Jack",
"minutes": null,
"year": null,
"since": 2018,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN uses it as a quick citation of Alan Kay's dislike of Linux, in threads questioning whether the Unix way is the final word.",
"tags": [
"alan kay",
"linux",
"unix",
"os critique"
]
},
{
"id": "rnMsgxIIQEE",
"type": "Interview",
"india": false,
"title": "Murray Gell-Mann talks about Richard Feynman",
"channel": "Muon Ray",
"minutes": null,
"year": null,
"since": 2013,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters cite it for Gell-Mann's candid and not always flattering view of Feynman's showmanship and character.",
"tags": [
"feynman",
"gell-mann",
"caltech",
"physics history",
"personalities"
]
},
{
"id": "rpkoCZ4vBSI",
"type": "Lecture",
"india": false,
"title": "Clayton Christensen: Disruptive innovation",
"channel": "Saïd Business School, University of Oxford",
"minutes": null,
"year": null,
"since": 2019,
"category": "Startup & Entrepreneurship",
"also": [
"SaaS & Technology"
],
"topics": [
"Growth"
],
"stage": "Growth",
"gem": false,
"why": "HN uses it as a reference for disruption theory when explaining why incumbents like VW or BlackBerry decline.",
"tags": [
"clayton christensen",
"disruption theory",
"business strategy",
"economic growth",
"incumbents"
]
},
{
"id": "rweblFwt-BM",
"type": "Commentary",
"india": false,
"title": "Thomas Sowell: Global Warming Manufactured by Intellectuals?",
"channel": "FORA.tv",
"minutes": null,
"year": null,
"since": 2017,
"category": "Customer Behaviour",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Mostly debated or criticized; one commenter found his points fair, while others questioned his climate views.",
"tags": [
"thomas sowell",
"intellectuals",
"climate change",
"elites"
]
},
{
"id": "rwgpTDluufY",
"type": "Commentary",
"india": false,
"title": "Louis Rossmann dismantles Apple's PR stunt \"repair program\"",
"channel": "Louis Rossmann",
"minutes": null,
"year": null,
"since": 2020,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited in right-to-repair threads as a repair-shop view of why Apple's program is impractical.",
"tags": [
"apple",
"louis rossmann",
"independent repair",
"right to repair",
"contracts"
]
},
{
"id": "ryFB6mvy4uE",
"type": "Interview",
"india": false,
"title": "Peter Thiel on being a contrarian",
"channel": "This Week in Startups",
"minutes": null,
"year": null,
"since": 2015,
"category": "Startup & Entrepreneurship",
"also": [
"Investment & Venture Capital",
"Founder Stories & Documentaries"
],
"topics": [
"Fundraising"
],
"stage": "Fundraising",
"gem": false,
"why": "HN mostly cites it for specific anecdotes, such as Thiel's early Facebook investment and how he thinks about the future, not as a general recommendation.",
"tags": [
"peter thiel",
"contrarian investing",
"startups",
"facebook",
"zero to one"
]
},
{
"id": "t4A-Ml8YHyM",
"type": "Explainer",
"india": false,
"title": "Star Trek TNG Peak Performance: It is possible to commit no mistakes and still lose. Full Scene",
"channel": "Ponyboy",
"minutes": null,
"year": null,
"since": 2017,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN mostly quotes the line to say that good decisions can still produce bad outcomes, rather than recommending the clip.",
"tags": [
"star trek",
"picard",
"data",
"decision making",
"tng"
]
},
{
"id": "t8NCigh54jg",
"type": "Documentary",
"india": false,
"title": "Soylent: How I Stopped Eating for 30 Days",
"channel": "Motherboard",
"minutes": null,
"year": null,
"since": 2016,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN rarely recommends it; it is mostly cited in critical threads on Soylent's quality control, including footage of a rodent at its warehouse.",
"tags": [
"soylent",
"meal replacement",
"diet",
"food technology",
"motherboard"
]
},
{
"id": "tbDDYKRFjhk",
"type": "Talk",
"india": false,
"title": "Does AI Actually Boost Developer Productivity? (100k Devs Study) - Yegor Denisov-Blanch, Stanford",
"channel": "AI Engineer",
"minutes": null,
"year": null,
"since": 2025,
"category": "SaaS & Technology",
"also": [],
"topics": [
"Product",
"AI"
],
"stage": null,
"gem": false,
"why": "Cited in AI-coding debates as one of the largest data-driven studies, notably for finding no correlation between self-assessed and measured productivity.",
"tags": [
"llm coding",
"productivity study",
"stanford",
"commit data",
"ai engineering"
]
},
{
"id": "tdLBzfFGFQU",
"type": "Lecture",
"india": false,
"title": "Milton Friedman - Monopoly",
"channel": "LibertyPen",
"minutes": null,
"year": null,
"since": 2012,
"category": "Customer Behaviour",
"also": [
"SaaS & Technology"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it in antitrust and regulation threads as Friedman's take on monopolies, sometimes approvingly and sometimes with skepticism.",
"tags": [
"milton friedman",
"monopoly",
"free market",
"antitrust",
"government licensing"
]
},
{
"id": "tgODUgHeT5Y",
"type": "Interview",
"india": false,
"title": "Bill Gates explains this “internet” thing #letterman",
"channel": "Letterman",
"minutes": null,
"year": null,
"since": 2022,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it as a classic example of public skepticism toward a new technology that later proved transformative.",
"tags": [
"bill gates",
"david letterman",
"1995",
"internet history"
]
},
{
"id": "tjgtLSHhTPg",
"type": "Explainer",
"india": false,
"title": "Apple - Here's to the Crazy Ones (1997)",
"channel": "vintagemacmuseum",
"minutes": null,
"year": null,
"since": 2013,
"category": "Marketing & Growth",
"also": [
"Founder Stories & Documentaries"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it as an example of Apple praising the word crazy, though some call it vague feel-good marketing at odds with today's Apple.",
"tags": [
"apple",
"think different",
"advertising",
"steve jobs",
"1997"
]
},
{
"id": "twhvtzd6gXA",
"type": "Explainer",
"india": false,
"title": "Original Zoloft Commercial",
"channel": "SuperBowlSammy",
"minutes": null,
"year": null,
"since": 2019,
"category": "Marketing & Growth",
"also": [],
"topics": [
"Growth"
],
"stage": "Growth",
"gem": false,
"why": "Mostly cited as a recognizable example of antidepressant advertising in debates about pharmaceutical marketing and the serotonin theory.",
"tags": [
"zoloft",
"drug ads",
"pharmaceutical marketing",
"antidepressants"
]
},
{
"id": "ugvHCXCOmm4",
"type": "Podcast",
"india": false,
"title": "Dario Amodei: Anthropic CEO on Claude, AGI & the Future of AI & Humanity | Lex Fridman Podcast #452",
"channel": "Lex Fridman",
"minutes": null,
"year": null,
"since": 2024,
"category": "SaaS & Technology",
"also": [
"Founder Stories & Documentaries"
],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "Mostly cited as a source for statements by Anthropic leaders, such as views on AI progress and on sycophancy.",
"tags": [
"dario amodei",
"anthropic",
"claude",
"interpretability",
"agi"
]
},
{
"id": "uiDMlFycNrw",
"type": "Explainer",
"india": false,
"title": "Minority Report - Personal Advertising VBR",
"channel": "dscmailtest",
"minutes": null,
"year": null,
"since": 2018,
"category": "Marketing & Growth",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited as the sci-fi precedent whenever HN discusses facial recognition and personalized ads in public spaces.",
"tags": [
"minority report",
"facial recognition",
"advertising",
"surveillance"
]
},
{
"id": "umJsITGzXd0",
"type": "Demo",
"india": false,
"title": "Apple Knowledge Navigator Video (1987)",
"channel": "Mac History",
"minutes": null,
"year": null,
"since": 2016,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [
"AI"
],
"stage": null,
"gem": false,
"why": "HN uses it as the classic early vision of conversational AI assistants, compared against modern AI products.",
"tags": [
"knowledge navigator",
"apple",
"conversational ai",
"concept video",
"john sculley"
]
},
{
"id": "vc7WqVMCABg",
"type": "Commentary",
"india": false,
"title": "Zero Mass Water -BUSTED!",
"channel": "Thunderf00t",
"minutes": null,
"year": null,
"since": 2018,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited in threads on atmospheric water harvesting as the standard debunking of such startups.",
"tags": [
"debunking",
"dehumidifier",
"solar",
"startups",
"physics"
]
},
{
"id": "vjqt8T3tJIE",
"type": "Explainer",
"india": false,
"title": "Did People Used To Look Older?",
"channel": "Vsauce",
"minutes": null,
"year": null,
"since": 2022,
"category": "Business Psychology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN commenters cite it to explain why people in old photos seem older than they were.",
"tags": [
"perception",
"aging",
"old photographs",
"psychology",
"vsauce"
]
},
{
"id": "wsixsRI-Sz4",
"type": "Interview",
"india": false,
"title": "Elon Musk | Full interview | Code Conference 2016",
"channel": "On with Kara Swisher",
"minutes": null,
"year": null,
"since": 2016,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Mostly cited as a dated source for Musk's past claims, such as autonomous driving being essentially solved, and his rocket reuse analogies.",
"tags": [
"elon musk",
"spacex",
"tesla",
"autonomous driving",
"mars"
]
},
{
"id": "wvhW8cp15tk",
"type": "Interview",
"india": false,
"title": "Steve Jobs and Bill Gates Together at D5 Conference 2007",
"channel": "BrioWeb Agenzia di marketing e comunicazione",
"minutes": null,
"year": null,
"since": 2016,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited for specific Jobs and Gates remarks, such as how the two companies helped each other and how Apple recovered, though one commenter notes it was widely derided as an interview.",
"tags": [
"steve jobs",
"bill gates",
"d5 conference",
"apple",
"microsoft"
]
},
{
"id": "xH_6_8NOfwI",
"type": "Explainer",
"india": false,
"title": "The Wire: Fix The Crime Statistics...or...",
"channel": "bttp011",
"minutes": null,
"year": null,
"since": 2015,
"category": "Customer Behaviour",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Used as a shorthand illustration of juking the stats and Goodhart-style metric gaming.",
"tags": [
"the wire",
"crime statistics",
"incentives",
"goodhart's law",
"policing"
]
},
{
"id": "xbiDrzTd8fE",
"type": "Explainer",
"india": false,
"title": "The Big Short (2015) - Jared Vennett's Pitch to Front Point Partners (Jenga Blocks Scene) [HD 1080p]",
"channel": "Extractor",
"minutes": null,
"year": null,
"since": 2019,
"category": "Investment & Venture Capital",
"also": [],
"topics": [],
"stage": "Fundraising",
"gem": false,
"why": "Used as a quick visual explanation of how CDOs packaged risky mortgage debt.",
"tags": [
"cdo",
"2008 financial crisis",
"the big short",
"mortgage bonds",
"credit default swaps"
]
},
{
"id": "yS7Jb58hcsc",
"type": "Commentary",
"india": false,
"title": "Milton Friedman talks about property taxes",
"channel": "Benjamin Ljung",
"minutes": null,
"year": null,
"since": 2020,
"category": "Customer Behaviour",
"also": [
"Investment & Venture Capital"
],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it in tax and housing threads as a libertarian economist endorsing property or land taxes.",
"tags": [
"milton friedman",
"property tax",
"land value tax",
"tax policy",
"negative income tax"
]
},
{
"id": "yVwAodrjZMY",
"type": "Interview",
"india": false,
"title": "How we take back the internet | Edward Snowden",
"channel": "TED",
"minutes": null,
"year": null,
"since": 2014,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Mostly referenced in debates about Snowden and surveillance rather than recommended; some commenters criticize his statements.",
"tags": [
"edward snowden",
"privacy",
"ted",
"nsa"
]
},
{
"id": "yaXma6K9mzo",
"type": "Interview",
"india": false,
"title": "Matt Damon Sweats From His Scalp While Eating Spicy Wings | Hot Ones",
"channel": "First We Feast",
"minutes": null,
"year": null,
"since": 2022,
"category": "SaaS & Technology",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Cited as the source for Damon's explanation that the DVD market's collapse killed mid-budget movies, in threads on Hollywood economics.",
"tags": [
"matt damon",
"hot ones",
"dvd market",
"mid-budget films",
"film industry"
]
},
{
"id": "ybrQvs4x0Ps",
"type": "Talk",
"india": false,
"title": "Null References: The Billion Dollar Mistake - Tony Hoare",
"channel": "JoseCan",
"minutes": null,
"year": null,
"since": 2020,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "The standard citation whenever null safety and language design come up.",
"tags": [
"tony hoare",
"null",
"language design",
"algol",
"type safety"
]
},
{
"id": "yi8_9WGk3Ok",
"type": "Commentary",
"india": false,
"title": "NYC DOESN'T KNOW ITS OWN LAWS!",
"channel": "Louis Rossmann",
"minutes": null,
"year": null,
"since": 2021,
"category": "Startup & Entrepreneurship",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "HN cites it as a concrete example of bureaucrats not knowing the rules they enforce on small businesses.",
"tags": [
"nyc",
"small business",
"regulation",
"louis rossmann"
]
},
{
"id": "z6ep308goxQ",
"type": "Explainer",
"india": false,
"title": "why Japan's internet is weirdly designed",
"channel": "Answer in Progress",
"minutes": null,
"year": null,
"since": 2022,
"category": "SaaS & Technology",
"also": [],
"topics": [
"Team"
],
"stage": null,
"gem": false,
"why": "Cited as a companion to articles on Japanese web design and as an example of clustering websites by appearance.",
"tags": [
"web design",
"japan",
"ui culture",
"website clustering"
]
},
{
"id": "zIE-5hg7FoA",
"type": "Explainer",
"india": false,
"title": "Apple 1984 Ad Commercial - Original Recording from The Day It First Aired",
"channel": "Delegator",
"minutes": null,
"year": null,
"since": 2019,
"category": "Founder Stories & Documentaries",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Mostly invoked ironically, to contrast Apple's anti-Big-Brother image in 1984 with its present-day behavior.",
"tags": [
"apple",
"1984 ad",
"macintosh",
"super bowl",
"advertising history"
]
},
{
"id": "zfR_Jj4grZE",
"type": "Explainer",
"india": false,
"title": "Apple iPad Pro TV Commercial - What's a Computer? [2017] ❤️",
"channel": "TV Commercials Yup",
"minutes": null,
"year": null,
"since": 2021,
"category": "Marketing & Growth",
"also": [],
"topics": [
"Growth"
],
"stage": "Growth",
"gem": false,
"why": "Cited as a concise example of Apple and the wider tech industry framing devices as anything but a personal computer.",
"tags": [
"ipad pro",
"apple",
"tv commercial",
"personal computing",
"marketing"
]
},
{
"id": "zhPklt9nYas",
"type": "Explainer",
"india": false,
"title": "Google Chrome  Dear Sophie",
"channel": "THE AD FACTORY",
"minutes": null,
"year": null,
"since": 2020,
"category": "Marketing & Growth",
"also": [],
"topics": [],
"stage": null,
"gem": false,
"why": "Brought up ironically in threads about Google deleting inactive accounts and tightening storage policies, as a reminder that Google once encouraged this kind of long-term use.",
"tags": [
"google chrome",
"gmail",
"commercial",
"account deletion",
"irony"
]
}
]);
