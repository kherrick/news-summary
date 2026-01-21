# [News Summary](https://kherrick.github.io/news-summary/)

## AI Innovations and Implications

* [Comic-Con Bans AI Art After Artist Pushback](https://slashdot.org/story/26/01/21/1528206/comic-con-bans-ai-art-after-artist-pushback?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Comic-Con reacts to artist concerns by prohibiting the use of AI-generated art, signaling a pivotal moment in the intersection of creativity and technology.

* [YouTube CEO Acknowledges 'AI Slop' Problem, Says Platform Will Curb Low-Quality AI Content](https://news.slashdot.org/story/26/01/21/1422227/youtube-ceo-acknowledges-ai-slop-problem-says-platform-will-curb-low-quality-ai-content?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Addressing concerns with AI-generated videos, YouTube promises to reduce the proliferation of low-quality AI content on its platform.

* [OpenAI and ServiceNow Strike Deal to Put AI Agents in Business Software](https://slashdot.org/story/26/01/20/2234239/openai-and-servicenow-strike-deal-to-put-ai-agents-in-business-software?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Collaboration aims to integrate advanced AI agents into enterprise applications, advancing automation in business workflows.

## Technological Breakthroughs

* [I Made Zig Compute 33M Satellite Positions in 3 Seconds. No GPU Required](https://atempleton.bearblog.dev/i-made-zig-compute-33-million-satellite-positions-in-3-seconds-no-gpu-required/) - Developer shares method for achieving a high-performance computation feat with Zig programming language, without relying on GPUs.

* [Show HN: ChartGPU – WebGPU-powered charting library (1M points at 60fps)](https://github.com/ChartGPU/ChartGPU) - Experience high-performance data visualization with ChartGPU, a library powered by cutting-edge WebGPU technology.

* [The first 100 days as a Renovate maintainer](https://www.jvt.me/posts/2026/01/21/renovate-100-days/) - Lessons and achievements from maintaining the Renovate open-source project for three months.

## Privacy, Security, and Policy

* [Ireland wants to give its cops spyware, ability to crack encrypted messages](https://www.theregister.com/2026/01/21/ireland_wants_to_give_police/) - Ireland debates empowering law enforcement with intrusive tools that could undermine individual privacy.

* [AWS Flips Switch on Euro Cloud as Customers Fret About Digital Sovereignty](https://soylentnews.org/article.pl?sid=26/01/17/2355208&from=rss) - Amazon responds to European sovereignty concerns by launching region-specific cloud services.

* [cURL Removes Bug Bounties](https://etn.se/index.php/nyheter/72808-curl-removes-bug-bounties.html) - The cURL project discontinues its bug bounty program, questioning the effectiveness and risks of such initiatives.

## Sustainability and Global Challenges

* [Era of 'Global Water Bankruptcy' Is Here, UN Report Says](https://news.slashdot.org/story/26/01/20/2244259/era-of-global-water-bankruptcy-is-here-un-report-says?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A UN report warns of looming water resource crises, signaling urgent need for global intervention.

* [China's Wind Farms Are Doing a Lot More Than Generating Electricity](https://soylentnews.org/article.pl?sid=26/01/19/0533234&from=rss) - Innovative wind farm approaches not only generate power but could offer environmental benefits beyond energy production.

* [Proton VPN Kills Off Legacy OpenVPN Configs in Push for Better Security](https://soylentnews.org/article.pl?sid=26/01/19/1613240&from=rss) - In an effort to enhance user security, Proton VPN phases out outdated configurations in favor of advanced alternatives.

## Exploration and Discovery

* [Hypothetical Wormholes May Not Exist, but They Could Reveal Secrets About Our Universe](https://soylentnews.org/article.pl?sid=26/01/17/0434215&from=rss) - Wormholes might not be real, but recent theories suggest they can provide profound insights into the fundamental nature of the cosmos.

* [A 26,000-year astronomical monument hidden in plain sight (2019)](https://longnow.org/ideas/the-26000-year-astronomical-monument-hidden-in-plain-sight/) - Discover the architectural wonders of an ancient astronomical monument, hidden yet revealing secrets of timekeeping.

* [Anthropologists Offer New Evidence of Bipedalism in Long-Debated Fossil Discovery](https://soylentnews.org/article.pl?sid=26/01/18/0043231&from=rss) - New findings reignite debates on early humans' transition to walking upright.

---

## Below are the rules that were sent.

### System content.

Rules:

1. You are a news robot that summarizes a list of links and their associated descriptions.
2. Use the following markdown for the top most header in the final output: [News Summary](https://kherrick.github.io/news-summary/)
3. The news items are given to you in date ordered markdown format.
4. Make one section per day, but do not include dates in the section headers.
5. Under each day's section, group each item of news together under a commonly themed sub-section with an appropriate description.
6. While each news item is a string, use valid markdown to include relevant links to articles and their associated comments.
7. Within a news item, do not use links for articles and comments from other news items' article or comment links.
8. You must ONLY RESPOND IN JSON according to the following JSON Schema:

```json
{"$schema":"http://json-schema.org/draft-07/schema#","$id":"https://kherrick.github.io/news-summary/news-summary-schema.json","type":"object","properties":{"heading":{"type":"string"},"sections":{"type":"array","items":{"type":"object","properties":{"title":{"type":"string"},"newsItems":{"type":"array","items":{"type":"string"},"minItems":1}},"required":["title","newsItems"]},"minItems":1}},"required":["heading","sections"]}
```

### User content.

Highlight the most unique and interesting articles from within the bulleted list that follows:

* [2026-01-21, 15:27:00](https://slashdot.org/story/26/01/21/1528206/comic-con-bans-ai-art-after-artist-pushback?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comic-Con Bans AI Art After Artist Pushback](https://slashdot.org/story/26/01/21/1528206/comic-con-bans-ai-art-after-artist-pushback?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-21, 15:19:55](https://lobste.rs/s/wee6qk/vibecoding_2) - [Vibecoding #2](https://matklad.github.io/2026/01/20/vibecoding-2.html)
* [2026-01-21, 15:13:29](https://news.ycombinator.com/item?id=46706796) - [Show HN: yolo-cage – AI coding agents that can&apos;t exfiltrate secrets](https://github.com/borenstein/yolo-cage)
* [2026-01-21, 15:04:07](https://news.ycombinator.com/item?id=46706668) - [Show HN: See the carbon impact of your cloud as you code](https://dashboard.infracost.io/)
* [2026-01-21, 14:58:45](https://lobste.rs/s/zjje5x/so_why_should_gnome_support_server_side) - [So, why *should* GNOME support server side decorations?](https://blister.zip/posts/gnome-ssd/)
* [2026-01-21, 14:54:56](https://news.ycombinator.com/item?id=46706528) - [Show HN: ChartGPU – WebGPU-powered charting library (1M points at 60fps)](https://github.com/ChartGPU/ChartGPU)
* [2026-01-21, 14:40:00](https://news.slashdot.org/story/26/01/21/1422227/youtube-ceo-acknowledges-ai-slop-problem-says-platform-will-curb-low-quality-ai-content?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [YouTube CEO Acknowledges &apos;AI Slop&apos; Problem, Says Platform Will Curb Low-Quality AI Content](https://news.slashdot.org/story/26/01/21/1422227/youtube-ceo-acknowledges-ai-slop-problem-says-platform-will-curb-low-quality-ai-content?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-21, 14:12:32](https://news.ycombinator.com/item?id=46705952) - [Comic-Con Bans AI Art After Artist Pushback](https://www.404media.co/comic-con-bans-ai-art-after-artist-pushback/)
* [2026-01-21, 14:06:00](https://soylentnews.org/article.pl?sid=26/01/19/1618219&amp;from=rss) - [IT Spending Set to Hit $1.4 Trillion in 2026 - but What Exactly Are We Spending It On?](https://soylentnews.org/article.pl?sid=26/01/19/1618219&amp;from=rss)
* [2026-01-21, 14:01:00](https://slashdot.org/story/26/01/21/141239/ceos-say-ai-is-making-work-more-efficient-employees-tell-a-different-story?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CEOs Say AI is Making Work More Efficient. Employees Tell a Different Story.](https://slashdot.org/story/26/01/21/141239/ceos-say-ai-is-making-work-more-efficient-employees-tell-a-different-story?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-21, 13:52:27](https://news.ycombinator.com/item?id=46705715) - [Ireland wants to give its cops spyware, ability to crack encrypted messages](https://www.theregister.com/2026/01/21/ireland_wants_to_give_police/)
* [2026-01-21, 13:35:41](https://news.ycombinator.com/item?id=46705512) - [The first 100 days as a Renovate maintainer](https://www.jvt.me/posts/2026/01/21/renovate-100-days/)
* [2026-01-21, 13:11:23](https://lobste.rs/s/oxjhnd/foss_for_digital_sovereignty_eu) - [FOSS for digital sovereignty in the EU](https://www.more-magic.net/posts/open-source-in-the-eu.html)
* [2026-01-21, 13:08:35](https://news.ycombinator.com/item?id=46705201) - [Nested Code Fences in Markdown](https://susam.net/nested-code-fences.html)
* [2026-01-21, 13:00:00](https://mobile.slashdot.org/story/26/01/21/0458212/verizon-wastes-no-time-switching-device-unlock-policy-to-365-days?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Verizon Wastes No Time Switching Device Unlock Policy To 365 Days](https://mobile.slashdot.org/story/26/01/21/0458212/verizon-wastes-no-time-switching-device-unlock-policy-to-365-days?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-21, 12:54:26](https://lobste.rs/s/t1mmsv/art_craftsmanship_monozukuri_age_ai) - [The Art of Craftsmanship (Monozukuri) in the Age of AI - Raphael Amorim](https://rapha.land/the-art-of-craftsmanship-monozukuri-in-the-age-of-ai/)
* [2026-01-21, 12:47:52](https://lobste.rs/s/itkq4m/nested_code_fences_markdown) - [Nested Code Fences in Markdown](https://susam.net/nested-code-fences.html)
* [2026-01-21, 12:46:27](https://news.ycombinator.com/item?id=46704943) - [Vibecoding #2](https://matklad.github.io/2026/01/20/vibecoding-2.html)
* [2026-01-21, 12:11:11](https://news.ycombinator.com/item?id=46704555) - [Stories removed from the Hacker News Front Page, updated in real time (2024)](https://github.com/vitoplantamura/HackerNewsRemovals)
* [2026-01-21, 12:02:09](https://news.ycombinator.com/item?id=46704465) - [Hightouch (YC S19) Is Hiring](https://hightouch.com/careers)
* [2026-01-21, 11:52:15](https://lobste.rs/s/m4hkml/emudevz_game_about_building_emulators) - [EmuDevz: A game about building emulators](https://github.com/afska/emudevz)
* [2026-01-21, 11:44:48](https://news.ycombinator.com/item?id=46704310) - [Nukeproof: Manifesto for European Data Sovereignty](https://nukeproof.org/)
* [2026-01-21, 11:36:09](https://news.ycombinator.com/item?id=46704223) - [The super-slow conversion of the U.S. to metric (2025)](https://www.thefabricator.com/thefabricator/blog/testingmeasuring/the-super-slow-conversion-of-the-us-to-metric)
* [2026-01-21, 10:49:20](https://news.ycombinator.com/item?id=46703763) - [EU–INC – A new pan-European legal entity](https://www.eu-inc.org/)
* [2026-01-21, 10:07:03](https://lobste.rs/s/hzj99p/building_blog_gleam) - [Building a Blog in Gleam](https://gearsco.de/blog/blog-in-gleam/)
* [2026-01-21, 10:00:00](https://yro.slashdot.org/story/26/01/21/0449250/snap-settles-social-media-addiction-lawsuit-ahead-of-landmark-trial?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Snap Settles Social media Addiction Lawsuit Ahead of Landmark Trial](https://yro.slashdot.org/story/26/01/21/0449250/snap-settles-social-media-addiction-lawsuit-ahead-of-landmark-trial?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-21, 09:51:27](https://news.ycombinator.com/item?id=46703317) - [I Made Zig Compute 33M Satellite Positions in 3 Seconds. No GPU Required](https://atempleton.bearblog.dev/i-made-zig-compute-33-million-satellite-positions-in-3-seconds-no-gpu-required/)
* [2026-01-21, 09:50:50](https://lobste.rs/s/lesn5t/real_programming_vs_interviews_dyslexic) - [Real programming vs. interviews: A dyslexic perspective](https://lobste.rs/s/lesn5t/real_programming_vs_interviews_dyslexic)
* [2026-01-21, 09:49:34](https://news.ycombinator.com/item?id=46703301) - [SETI@home is in hiberation](https://setiathome.berkeley.edu/)
* [2026-01-21, 09:20:00](https://soylentnews.org/article.pl?sid=26/01/19/1615238&amp;from=rss) - [The Places We Make Memories Help Us Inscribe Them](https://soylentnews.org/article.pl?sid=26/01/19/1615238&amp;from=rss)
* [2026-01-21, 07:09:03](https://news.ycombinator.com/item?id=46702099) - [The percentage of Show HN posts is increasing, but their scores are decreasing](https://snubi.net/posts/Show-HN/)
* [2026-01-21, 07:00:00](https://news.slashdot.org/story/26/01/21/0442254/aurora-watch-in-effect-as-severe-solar-storm-slams-into-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Aurora Watch In Effect As Severe Solar Storm Slams Into Earth](https://news.slashdot.org/story/26/01/21/0442254/aurora-watch-in-effect-as-severe-solar-storm-slams-into-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-21, 06:07:03](https://news.ycombinator.com/item?id=46701733) - [cURL removes bug bounties](https://etn.se/index.php/nyheter/72808-curl-removes-bug-bounties.html)
* [2026-01-21, 04:34:00](https://soylentnews.org/article.pl?sid=26/01/19/1613240&amp;from=rss) - [Proton VPN Kills Off Legacy OpenVPN Configs in Push for Better Security](https://soylentnews.org/article.pl?sid=26/01/19/1613240&amp;from=rss)
* [2026-01-21, 04:27:08](https://news.ycombinator.com/item?id=46701114) - [Libbbf: Bound Book Format, A high-performance container for comics and manga](https://github.com/ef1500/libbbf)
* [2026-01-21, 03:58:15](https://lobste.rs/s/v653ds/i_got_into_argument_on_discord_about_how) - [I got into an argument on Discord about how inefficient CBR/CBZ is, so I wrote a new file format](https://old.reddit.com/r/selfhosted/comments/1qi64pr/i_got_into_an_argument_on_discord_about_how/)
* [2026-01-21, 03:30:00](https://news.slashdot.org/story/26/01/20/2244259/era-of-global-water-bankruptcy-is-here-un-report-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Era of &apos;Global Water Bankruptcy&apos; Is Here, UN Report Says](https://news.slashdot.org/story/26/01/20/2244259/era-of-global-water-bankruptcy-is-here-un-report-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-21, 02:54:32](https://news.ycombinator.com/item?id=46700594) - [Anthropic&apos;s original take home assignment open sourced](https://github.com/anthropics/original_performance_takehome)
* [2026-01-21, 02:36:44](https://news.ycombinator.com/item?id=46700503) - [RSS.Social – the latest and best from small sites across the web](https://rss.social/)
* [2026-01-21, 02:09:15](https://lobste.rs/s/mpnhom/why_not_tail_recursion) - [Why not tail recursion?](https://futhark-lang.org/blog/2026-01-20-why-not-tail-recursion.html)
* [2026-01-21, 02:07:05](https://lobste.rs/s/fxrdwz/building_javascript_runtime_one_month) - [Building a javascript runtime in one month](https://s.tail.so/js-in-one-month)
* [2026-01-21, 02:02:00](https://it.slashdot.org/story/26/01/20/2251253/curl-removes-bug-bounties?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [cURL Removes Bug Bounties](https://it.slashdot.org/story/26/01/20/2251253/curl-removes-bug-bounties?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-21, 01:25:00](https://slashdot.org/story/26/01/20/2234239/openai-and-servicenow-strike-deal-to-put-ai-agents-in-business-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI and ServiceNow Strike Deal to Put AI Agents in Business Software](https://slashdot.org/story/26/01/20/2234239/openai-and-servicenow-strike-deal-to-put-ai-agents-in-business-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-21, 00:45:00](https://tech.slashdot.org/story/26/01/20/2226236/developer-rescues-stadia-bluetooth-tool-that-google-killed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Developer Rescues Stadia Bluetooth Tool That Google Killed](https://tech.slashdot.org/story/26/01/20/2226236/developer-rescues-stadia-bluetooth-tool-that-google-killed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-21, 00:02:00](https://mobile.slashdot.org/story/26/01/20/2215254/hhs-announces-new-study-of-cellphone-radiation-and-health?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [HHS Announces New Study of Cellphone Radiation and Health](https://mobile.slashdot.org/story/26/01/20/2215254/hhs-announces-new-study-of-cellphone-radiation-and-health?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 23:51:00](https://soylentnews.org/article.pl?sid=26/01/19/166239&amp;from=rss) - [Building the World&apos;s First Graviton Detector](https://soylentnews.org/article.pl?sid=26/01/19/166239&amp;from=rss)
* [2026-01-20, 23:20:00](https://news.slashdot.org/story/26/01/20/2150205/uk-mulls-australia-like-social-media-ban-for-users-under-16?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Mulls Australia-Like Social Media Ban For Users Under 16](https://news.slashdot.org/story/26/01/20/2150205/uk-mulls-australia-like-social-media-ban-for-users-under-16?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 22:40:00](https://slashdot.org/story/26/01/20/2133237/majority-of-ceos-report-zero-payoff-from-ai-splurge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Majority of CEOs Report Zero Payoff From AI Splurge](https://slashdot.org/story/26/01/20/2133237/majority-of-ceos-report-zero-payoff-from-ai-splurge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 22:09:49](https://news.ycombinator.com/item?id=46698370) - [Which AI Lies Best? A game theory classic designed by John Nash](https://so-long-sucker.vercel.app/)
* [2026-01-20, 22:02:00](https://meta.slashdot.org/story/26/01/20/2115249/metas-oversight-board-takes-up-permanent-bans-in-landmark-case?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta&apos;s Oversight Board Takes Up Permanent Bans In Landmark Case](https://meta.slashdot.org/story/26/01/20/2115249/metas-oversight-board-takes-up-permanent-bans-in-landmark-case?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 21:36:34](https://news.ycombinator.com/item?id=46698061) - [The challenges of soft delete](https://atlas9.dev/blog/soft-delete.html)
* [2026-01-20, 21:22:00](https://slashdot.org/story/26/01/20/1924238/56-of-companies-have-seen-zero-financial-return-from-ai-investments-pwc-survey-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [56% of Companies Have Seen Zero Financial Return From AI Investments, PwC Survey Says](https://slashdot.org/story/26/01/20/1924238/56-of-companies-have-seen-zero-financial-return-from-ai-investments-pwc-survey-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-20, 21:14:03](https://lobste.rs/s/cxwenf/i_made_zig_compute_33_million_satellite) - [I Made Zig Compute 33 Million Satellite Positions in 3 Seconds. No GPU Required](https://atempleton.bearblog.dev/i-made-zig-compute-33-million-satellite-positions-in-3-seconds-no-gpu-required/)
* [2026-01-20, 19:18:28](https://lobste.rs/s/cnkpcm/little_sound_dj) - [Little Sound Dj](https://www.littlesounddj.com/lsd/index.php)
* [2026-01-20, 19:08:22](https://lobste.rs/s/udglku/building_critical_infrastructure_with) - [Building Critical Infrastructure with htmx: Network Automation for the Paris 2024 Olympics](https://htmx.org/essays/paris-2024-olympics-htmx-network-automation/)
* [2026-01-20, 19:06:07](https://lobste.rs/s/ezyebi/where_i_m_at_with_ai) - [Where I&apos;m at with AI](https://paulosman.me/2026/01/18/where-im-at-with-ai/)
* [2026-01-20, 19:06:00](https://soylentnews.org/article.pl?sid=26/01/19/0533234&amp;from=rss) - [China&apos;s Wind Farms Are Doing a Lot More Than Generating Electricity](https://soylentnews.org/article.pl?sid=26/01/19/0533234&amp;from=rss)
* [2026-01-20, 19:01:44](https://lobste.rs/s/qy6azg/reliable_signals_honest_intent) - [Reliable Signals of Honest Intent](https://zanlib.dev/blog/reliable-signals-of-honest-intent/)
* [2026-01-20, 18:16:09](https://news.ycombinator.com/item?id=46695628) - [A 26,000-year astronomical monument hidden in plain sight (2019)](https://longnow.org/ideas/the-26000-year-astronomical-monument-hidden-in-plain-sight/)
* [2026-01-20, 16:39:26](https://lobste.rs/s/qywnk6/rust_s_standard_library_on_gpu) - [Rust&apos;s standard library on the GPU](https://vectorware.com/blog/rust-std-on-gpu/)
* [2026-01-20, 16:38:56](https://news.ycombinator.com/item?id=46693959) - [Show HN: Mastra 1.0, open-source JavaScript agent framework from the Gatsby devs](https://github.com/mastra-ai/mastra)
* [2026-01-20, 16:12:34](https://lobste.rs/s/kvviy0/type_safe_eval_grace) - [Type-safe eval in Grace](https://haskellforall.com/2026/01/typesafe-eval)
* [2026-01-20, 14:24:13](https://lobste.rs/s/hrsaz6/unconventional_postgresql) - [Unconventional PostgreSQL Optimizations](https://hakibenita.com/postgresql-unconventional-optimizations)
* [2026-01-20, 14:22:00](https://soylentnews.org/article.pl?sid=26/01/19/046252&amp;from=rss) - [Mosquitoes&apos; Thirst for Human Blood Has Increased as Biodiversity Loss Worsens](https://soylentnews.org/article.pl?sid=26/01/19/046252&amp;from=rss)
* [2026-01-20, 13:48:11](https://lobste.rs/s/nsjybj/why_alter_table_is_such_problem_for_sqlite) - [Why ALTER TABLE is such a problem for SQLite](https://www.sqlite.org/lang_altertable.html#why_alter_table_is_such_a_problem_for_sqlite)
* [2026-01-20, 13:16:22](https://lobste.rs/s/oxeeyz/my_week_with_opencode) - [My week with opencode](https://deadsimpletech.com/blog/week_with_opencode)
* [2026-01-20, 12:23:41](https://lobste.rs/s/tq0yv5/jule_programming_language) - [The Jule Programming Language](https://jule.dev/)
* [2026-01-20, 10:54:51](https://lobste.rs/s/fsq2qu/static_site_generator_written_posix) - [A static site generator written in POSIX shell](https://aashvik.com/posts/shell-ssg)
* [2026-01-20, 09:34:00](https://soylentnews.org/article.pl?sid=26/01/19/0357224&amp;from=rss) - [New Studies Can Explain Why Comet 3I/Atlas Isn&apos;t an Alien (Probably)](https://soylentnews.org/article.pl?sid=26/01/19/0357224&amp;from=rss)
* [2026-01-20, 09:01:25](https://lobste.rs/s/parmy3/giving_university_exams_age_chatbots) - [Giving University Exams in the Age of Chatbots](https://ploum.net/2026-01-19-exam-with-chatbots.html)
* [2026-01-20, 04:44:00](https://soylentnews.org/article.pl?sid=26/01/18/0044243&amp;from=rss) - [Stellantis Drops Jeep, Chrysler Plug-in Hybrids Amid EV Sales Slowdown](https://soylentnews.org/article.pl?sid=26/01/18/0044243&amp;from=rss)
* [2026-01-20, 01:23:58](https://lobste.rs/s/yzsckk/prediction_within_15_years_microsoft) - [Prediction: Within 15 years Microsoft will discontinue Windows in favor of a Windows themed Linux distribution](https://gamesbymason.com/blog/2026/microsoft/)
* [2026-01-20, 00:02:00](https://soylentnews.org/article.pl?sid=26/01/18/0043231&amp;from=rss) - [Anthropologists Offer New Evidence of Bipedalism in Long-Debated Fossil Discovery](https://soylentnews.org/article.pl?sid=26/01/18/0043231&amp;from=rss)
* [2026-01-19, 19:11:00](https://soylentnews.org/article.pl?sid=26/01/18/0042202&amp;from=rss) - [Linux Mint 22.3 “Zena” is Now Available for Download, Here&apos;s What&apos;s New](https://soylentnews.org/article.pl?sid=26/01/18/0042202&amp;from=rss)
* [2026-01-19, 14:38:00](https://soylentnews.org/article.pl?sid=26/01/18/0040215&amp;from=rss) - [Anything-Goes “Anyons” May be at the Root of Surprising Quantum Experiments](https://soylentnews.org/article.pl?sid=26/01/18/0040215&amp;from=rss)
* [2026-01-19, 09:45:55](https://news.ycombinator.com/item?id=46676919) - [TPM on Embedded Systems: Pitfalls and Caveats to Watch Out For](https://sigma-star.at/blog/2026/01/tpm-on-embedded-systems-pitfalls-and-caveats/)
* [2026-01-19, 09:45:00](https://soylentnews.org/article.pl?sid=26/01/18/0037250&amp;from=rss) - [AI and the Corporate Capture of Knowledge](https://soylentnews.org/article.pl?sid=26/01/18/0037250&amp;from=rss)
* [2026-01-19, 05:03:00](https://soylentnews.org/article.pl?sid=26/01/17/2355208&amp;from=rss) - [AWS Flips Switch on Euro Cloud as Customers Fret About Digital Sovereignty](https://soylentnews.org/article.pl?sid=26/01/17/2355208&amp;from=rss)
* [2026-01-19, 00:22:00](https://soylentnews.org/article.pl?sid=26/01/18/003211&amp;from=rss) - [Are You Dead?](https://soylentnews.org/article.pl?sid=26/01/18/003211&amp;from=rss)
* [2026-01-18, 19:30:00](https://soylentnews.org/article.pl?sid=26/01/18/001228&amp;from=rss) - [How Screwed is Generation Alpha, and the Generations Which Will Depend on Them?](https://soylentnews.org/article.pl?sid=26/01/18/001228&amp;from=rss)
* [2026-01-18, 14:50:00](https://soylentnews.org/article.pl?sid=26/01/17/055254&amp;from=rss) - [Hobby FPV Drone Developer Breaks 400mph Limit With New World Record](https://soylentnews.org/article.pl?sid=26/01/17/055254&amp;from=rss)
* [2026-01-18, 10:03:00](https://soylentnews.org/article.pl?sid=26/01/17/0457243&amp;from=rss) - [Sorry, Eh](https://soylentnews.org/article.pl?sid=26/01/17/0457243&amp;from=rss)
* [2026-01-18, 05:13:00](https://soylentnews.org/article.pl?sid=26/01/17/0446252&amp;from=rss) - [Linux Kernel Bugs Hide for 2+ Years on Average](https://soylentnews.org/article.pl?sid=26/01/17/0446252&amp;from=rss)
* [2026-01-18, 01:29:42](https://news.ycombinator.com/item?id=46663931) - [Batmobile: 10-20x Faster CUDA Kernels for Equivariant Graph Neural Networks](https://elliotarledge.com/blog/batmobile)
* [2026-01-18, 00:29:00](https://soylentnews.org/article.pl?sid=26/01/17/0434215&amp;from=rss) - [Wormholes May Not Exist—We&apos;ve Found They Reveal Something Deeper About Time and the Universe](https://soylentnews.org/article.pl?sid=26/01/17/0434215&amp;from=rss)
* [2026-01-17, 21:57:21](https://news.ycombinator.com/item?id=46662515) - [EmuDevz: A game about developing emulators](https://afska.github.io/emudevz/)
* [2026-01-17, 19:43:00](https://soylentnews.org/article.pl?sid=26/01/17/0229252&amp;from=rss) - [&apos;Society Cannot Function If No One is Accountable for AI&apos; — Jaron Lanier](https://soylentnews.org/article.pl?sid=26/01/17/0229252&amp;from=rss)
* [2026-01-17, 15:00:00](https://soylentnews.org/article.pl?sid=26/01/17/0222224&amp;from=rss) - [Why Flies Matter, Their Vital Role in Ecosystems, and Surprising Diversity](https://soylentnews.org/article.pl?sid=26/01/17/0222224&amp;from=rss)
* [2026-01-17, 10:18:00](https://soylentnews.org/article.pl?sid=26/01/17/0220205&amp;from=rss) - [Researchers Expose WHILL Wheelchair Safety Risks Via Remote Hacking](https://soylentnews.org/article.pl?sid=26/01/17/0220205&amp;from=rss)
* [2026-01-17, 05:30:00](https://soylentnews.org/article.pl?sid=26/01/16/0510252&amp;from=rss) - [Signal Creator Moxie Marlinspike Wants to Do for AI What He Did for Messaging](https://soylentnews.org/article.pl?sid=26/01/16/0510252&amp;from=rss)
* [2026-01-17, 00:42:00](https://soylentnews.org/article.pl?sid=26/01/16/0215254&amp;from=rss) - [X Didn&apos;t Fix Grok&apos;s ‘Undressing’ Problem. It Just Makes People Pay for It](https://soylentnews.org/article.pl?sid=26/01/16/0215254&amp;from=rss)
