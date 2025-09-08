# [News Summary](https://kherrick.github.io/news-summary/)

## Tech Industry Incidents and Security Breaches

* [NPM debug and chalk packages compromised](https://www.aikido.dev/blog/npm-debug-and-chalk-packages-compromised) ([comments](https://news.ycombinator.com/item?id=45169657))

* [Vibe-coded build system NX gets hacked, steals vibe-coders’ crypto](https://pivot-to-ai.com/2025/08/29/vibe-coded-build-system-nx-gets-hacked-steals-vibe-coders-crypto/) ([comments](https://lobste.rs/s/zctogg/vibe_coded_build_system_nx_gets_hacked))

* [Meta suppressed research on child safety, employees say](https://www.washingtonpost.com/investigations/2025/09/08/meta-research-child-safety-virtual-reality/) ([comments](https://news.ycombinator.com/item?id=45167705))

* [14 Killed in protests in Nepal over social media ban](https://www.tribuneindia.com/news/world/massive-protests-in-nepal-over-social-media-ban/) ([comments](https://news.ycombinator.com/item?id=45166972))

## Artificial Intelligence and Machine Learning

* [Experimenting with Local LLMs on macOS](https://blog.6nok.org/experimenting-with-local-llms-on-macos/) ([comments](https://news.ycombinator.com/item?id=45168953))

* [Some Angry GitHub Users Are Rebelling Against GitHub's Forced Copilot AI Features](https://developers.slashdot.org/story/25/09/08/0235251/some-angry-github-users-are-rebelling-against-githubs-forced-copilot-ai-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=45167245))

* [What if artificial intelligence is just a "+normal+" technology?](https://www.economist.com/finance-and-economics/2025/09/04/what-if-artificial-intelligence-is-just-a-normal-technology) ([comments](https://news.ycombinator.com/item?id=45167625))

* [OpenAI Says Its Business Will Burn $115 Billion Through 2029](https://news.slashdot.org/story/25/09/08/1426211/openai-says-its-business-will-burn-115-billion-through-2029?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=45168883))

## Innovative Scientific and Technological Advances

* [Browser Fingerprint Detector](https://fingerprint.goldenowl.ai/) ([comments](https://news.ycombinator.com/item?id=45169286))

* [Dietary omega-3 polyunsaturated fatty acids as a protective factor of myopia](https://bjo.bmj.com/content/early/2025/08/17/bjo-2024-326872) ([comments](https://news.ycombinator.com/item?id=45169157))

* [New Hollow-Core Fiber Outperforms Glass, Pushing Data Closer to Light Speed](https://soylentnews.org/article.pl?sid=25/09/05/0527230&amp;from=rss)

* [Stressed Ice Generates Electricity, Researchers Find](https://soylentnews.org/article.pl?sid=25/09/04/0430216&amp;from=rss)

## Corporate and Legal Updates

* [Google gets away almost scot-free in US search antitrust case](https://www.computerworld.com/article/4052428/google-gets-away-almost-scot-free-in-us-search-antitrust-case.html) ([comments](https://news.ycombinator.com/item?id=45169584))

* [Texas Sued Over Its Lab-Grown Meat Ban](https://news.slashdot.org/story/25/09/08/1511251/texas-sued-over-its-lab-grown-meat-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.slashdot.org/story/25/09/08/1511251/texas-sued-over-its-lab-grown-meat-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [VMware's in court again. Customer relationships rarely go this wrong](https://www.theregister.com/2025/09/08/vmware_in_court_opinion/) ([comments](https://news.ycombinator.com/item?id=45167239))

## Quirky and Unique Developments

* [We will not accept changes created with the aid of "AI"](https://codeberg.org/superseriousbusiness/gotosocial/src/commit/9b7db51436/CODE_OF_CONDUCT.md) ([comments](https://lobste.rs/s/hnd00z/we_will_not_accept_changes_created_with))

* [Indiana Jones and the Last Crusade Adventure Prototype Recovered for the C64](https://www.gamesthatwerent.com/2025/09/indiana-jones-and-the-last-crusade-adventure-prototype-recovered-for-the-commodore-64/) ([comments](https://news.ycombinator.com/item?id=45167229))

* [A New Four-Person Crew Will Simulate a Year-Long Mars Mission, NASA Announces](https://science.slashdot.org/story/25/09/08/0310211/a-new-four-person-crew-will-simulate-a-year-long-mars-mission-nasa-announces?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=45169119))

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

* [2025-09-08, 15:57:40](https://news.ycombinator.com/item?id=45169892) - [Job Mismatch and Early Career Success](https://www.nber.org/papers/w34215)
* [2025-09-08, 15:37:57](https://news.ycombinator.com/item?id=45169657) - [NPM debug and chalk packages compromised](https://www.aikido.dev/blog/npm-debug-and-chalk-packages-compromised)
* [2025-09-08, 15:32:46](https://news.ycombinator.com/item?id=45169584) - [Google gets away almost scot-free in US search antitrust case](https://www.computerworld.com/article/4052428/google-gets-away-almost-scot-free-in-us-search-antitrust-case.html)
* [2025-09-08, 15:25:03](https://news.ycombinator.com/item?id=45169480) - [American Flying Empty Airbus A321neo Across the Atlantic 20 Times](https://onemileatatime.com/news/american-flying-empty-airbus-a321neo-across-atlantic/)
* [2025-09-08, 15:21:00](https://news.slashdot.org/story/25/09/08/1511251/texas-sued-over-its-lab-grown-meat-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Texas Sued Over Its Lab-Grown Meat Ban](https://news.slashdot.org/story/25/09/08/1511251/texas-sued-over-its-lab-grown-meat-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-08, 15:08:56](https://news.ycombinator.com/item?id=45169286) - [Browser Fingerprint Detector](https://fingerprint.goldenowl.ai/)
* [2025-09-08, 15:08:20](https://news.ycombinator.com/item?id=45169275) - [Clankers Die on Christmas](https://remyhax.xyz/posts/clankers-die-on-christmas/)
* [2025-09-08, 14:59:30](https://news.ycombinator.com/item?id=45169157) - [Dietary omega-3 polyunsaturated fatty acids as a protective factor of myopia](https://bjo.bmj.com/content/early/2025/08/17/bjo-2024-326872)
* [2025-09-08, 14:43:44](https://lobste.rs/s/hnd00z/we_will_not_accept_changes_created_with) - [We will not accept changes created with the aid of \&quot;AI\&quot;](https://codeberg.org/superseriousbusiness/gotosocial/src/commit/9b7db51436/CODE_OF_CONDUCT.md)
* [2025-09-08, 14:43:17](https://news.ycombinator.com/item?id=45168953) - [Experimenting with Local LLMs on macOS](https://blog.6nok.org/experimenting-with-local-llms-on-macos/)
* [2025-09-08, 14:42:54](https://lobste.rs/s/7mxb1p/experimenting_with_local_llms_on_macos) - [Experimenting with local LLMs on macOS](https://blog.6nok.org/experimenting-with-local-llms-on-macos/)
* [2025-09-08, 14:40:00](https://news.slashdot.org/story/25/09/08/1426211/openai-says-its-business-will-burn-115-billion-through-2029?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Says Its Business Will Burn $115 Billion Through 2029](https://news.slashdot.org/story/25/09/08/1426211/openai-says-its-business-will-burn-115-billion-through-2029?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-08, 14:38:30](https://news.ycombinator.com/item?id=45168883) - [&apos;We can do it for under $100M&apos;: Startup joins race to build local ChatGPT](https://www.afr.com/technology/we-can-do-it-for-under-100m-start-up-joins-race-to-build-local-chatgpt-20250908-p5mt5o)
* [2025-09-08, 14:00:00](https://slashdot.org/story/25/09/08/1235210/the-new-american-hustle-dividends-over-day-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The New American Hustle: Dividends Over Day Jobs](https://slashdot.org/story/25/09/08/1235210/the-new-american-hustle-dividends-over-day-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-08, 12:59:28](https://news.ycombinator.com/item?id=45167705) - [Meta suppressed research on child safety, employees say](https://www.washingtonpost.com/investigations/2025/09/08/meta-research-child-safety-virtual-reality/)
* [2025-09-08, 12:55:13](https://lobste.rs/s/zvdtdn/package_managers_are_evil) - [Package Managers are Evil](https://www.gingerbill.org/article/2025/09/08/package-managers-are-evil/)
* [2025-09-08, 12:49:46](https://news.ycombinator.com/item?id=45167625) - [What if artificial intelligence is just a \&quot;normal\&quot; technology?](https://www.economist.com/finance-and-economics/2025/09/04/what-if-artificial-intelligence-is-just-a-normal-technology)
* [2025-09-08, 12:21:15](https://news.ycombinator.com/item?id=45167401) - [A complete map of the Rust type system](https://rustcurious.com/elements/)
* [2025-09-08, 12:01:18](https://news.ycombinator.com/item?id=45167245) - [Indiana Jones and the Last Crusade Adventure Prototype Recovered for the C64](https://www.gamesthatwerent.com/2025/09/indiana-jones-and-the-last-crusade-adventure-prototype-recovered-for-the-commodore-64/)
* [2025-09-08, 12:00:23](https://news.ycombinator.com/item?id=45167239) - [VMware&apos;s in court again. Customer relationships rarely go this wrong](https://www.theregister.com/2025/09/08/vmware_in_court_opinion/)
* [2025-09-08, 11:34:00](https://developers.slashdot.org/story/25/09/08/0235251/some-angry-github-users-are-rebelling-against-githubs-forced-copilot-ai-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Some Angry GitHub Users Are Rebelling Against GitHub&apos;s Forced Copilot AI Features](https://developers.slashdot.org/story/25/09/08/0235251/some-angry-github-users-are-rebelling-against-githubs-forced-copilot-ai-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-08, 11:25:00](https://soylentnews.org/article.pl?sid=25/09/07/1358242&amp;from=rss) - [New China-Aligned Crew Poisons Windows Servers for SEO Fraud](https://soylentnews.org/article.pl?sid=25/09/07/1358242&amp;from=rss)
* [2025-09-08, 11:24:42](https://news.ycombinator.com/item?id=45166972) - [14 Killed in protests in Nepal over social media ban](https://www.tribuneindia.com/news/world/massive-protests-in-nepal-over-social-media-ban/)
* [2025-09-08, 10:50:01](https://news.ycombinator.com/item?id=45166750) - [RSS Beat Microsoft](https://buttondown.com/blog/rss-vs-ice)
* [2025-09-08, 10:44:46](https://news.ycombinator.com/item?id=45166711) - [How inaccurate are Nintendo&apos;s official emulators? [video]](https://www.youtube.com/watch?v=oYjYmSniQyM)
* [2025-09-08, 10:39:53](https://lobste.rs/s/pokmo0/strong_eventual_consistency_big_idea) - [Strong Eventual Consistency - The Big Idea behind CRDTs](https://lewiscampbell.tech/blog/250908.html)
* [2025-09-08, 09:36:50](https://lobste.rs/s/z3iuxt/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/z3iuxt/what_are_you_doing_this_week)
* [2025-09-08, 08:39:36](https://lobste.rs/s/itj50a/make_invalid_states_unrepresentable) - [&apos;Make invalid states unrepresentable&apos; considered harmful](https://www.seangoedecke.com/invalid-states/)
* [2025-09-08, 08:25:21](https://lobste.rs/s/zctogg/vibe_coded_build_system_nx_gets_hacked) - [Vibe-coded build system NX gets hacked, steals vibe-coders’ crypto](https://pivot-to-ai.com/2025/08/29/vibe-coded-build-system-nx-gets-hacked-steals-vibe-coders-crypto/)
* [2025-09-08, 08:01:17](https://lobste.rs/s/4cnnuw/hashed_sorting_is_typically_faster_than) - [Hashed sorting is typically faster than hash tables](https://reiner.org/hashed-sorting)
* [2025-09-08, 07:58:38](https://news.ycombinator.com/item?id=45165684) - [Immich – High performance self-hosted photo and video management solution](https://github.com/immich-app/immich)
* [2025-09-08, 07:34:00](https://it.slashdot.org/story/25/09/08/0423228/theres-50-fewer-young-employees-at-tech-companies-now-than-two-years-ago?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [There&apos;s 50% Fewer Young Employees at Tech Companies Now Than Two Years Ago](https://it.slashdot.org/story/25/09/08/0423228/theres-50-fewer-young-employees-at-tech-companies-now-than-two-years-ago?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-08, 07:18:20](https://lobste.rs/s/jwreod/deliberate_abstraction) - [Deliberate Abstraction](https://entropicthoughts.com/deliberate-abstraction)
* [2025-09-08, 06:43:00](https://soylentnews.org/article.pl?sid=25/09/07/1352214&amp;from=rss) - [Trump Family&apos;s Crypto Token Just Made Them $5 Billion Richer](https://soylentnews.org/article.pl?sid=25/09/07/1352214&amp;from=rss)
* [2025-09-08, 05:27:05](https://lobste.rs/s/eo4uo7/how_i_solved_distributed_queue_problem) - [How I solved a distributed queue problem after 15 years](https://www.dbos.dev/blog/durable-queues)
* [2025-09-08, 04:34:00](https://science.slashdot.org/story/25/09/08/0310211/a-new-four-person-crew-will-simulate-a-year-long-mars-mission-nasa-announces?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A New Four-Person Crew Will Simulate a Year-Long Mars Mission, NASA Announces](https://science.slashdot.org/story/25/09/08/0310211/a-new-four-person-crew-will-simulate-a-year-long-mars-mission-nasa-announces?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-08, 04:01:03](https://lobste.rs/s/eipoef/adventures_porting_wayland_compositor) - [Adventures in porting a Wayland Compositor to NetBSD and OpenBSD](https://youtu.be/oo_8gnWQ4xo)
* [2025-09-08, 02:00:00](https://soylentnews.org/article.pl?sid=25/09/07/0222253&amp;from=rss) - [Microsoft Shows Off its Latest Analog Optical Computer](https://soylentnews.org/article.pl?sid=25/09/07/0222253&amp;from=rss)
* [2025-09-08, 01:34:00](https://hardware.slashdot.org/story/25/09/08/0125250/microsofts-analog-optical-computer-shows-ai-promise?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft&apos;s Analog Optical Computer Shows AI Promise](https://hardware.slashdot.org/story/25/09/08/0125250/microsofts-analog-optical-computer-shows-ai-promise?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-08, 01:14:21](https://lobste.rs/s/oyw6ya/css_bed) - [CSS Bed](https://www.cssbed.com/)
* [2025-09-08, 00:17:31](https://lobste.rs/s/zgnsn4/using_claude_code_modernize_25_year_old) - [Using Claude Code to modernize a 25-year-old kernel driver](https://dmitrybrant.com/2025/09/07/using-claude-code-to-modernize-a-25-year-old-kernel-driver)
* [2025-09-07, 23:53:47](https://news.ycombinator.com/item?id=45163362) - [Using Claude Code to modernize a 25-year-old kernel driver](https://dmitrybrant.com/2025/09/07/using-claude-code-to-modernize-a-25-year-old-kernel-driver)
* [2025-09-07, 23:08:42](https://news.ycombinator.com/item?id=45163043) - [Formatting code should be unnecessary](https://maxleiter.com/blog/formatting)
* [2025-09-07, 22:21:38](https://lobste.rs/s/hboytm/beyond_markdown_2018) - [Beyond Markdown (2018)](https://johnmacfarlane.net/beyond-markdown.html)
* [2025-09-07, 22:06:35](https://news.ycombinator.com/item?id=45162626) - [Intel Arc Pro B50 GPU Launched at $349 for Compact Workstations](https://www.guru3d.com/story/intel-arc-pro-b50-gpu-launched-at-for-compact-workstations/)
* [2025-09-07, 21:57:00](https://tech.slashdot.org/story/25/09/07/2149212/microsofts-cloud-services-disrupted-by-red-sea-cable-cuts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft&apos;s Cloud Services Disrupted by Red Sea Cable Cuts ](https://tech.slashdot.org/story/25/09/07/2149212/microsofts-cloud-services-disrupted-by-red-sea-cable-cuts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-07, 21:50:30](https://news.ycombinator.com/item?id=45162501) - [Creative Technology: The Sound Blaster](https://www.abortretry.fail/p/the-story-of-creative-technology)
* [2025-09-07, 21:32:45](https://lobste.rs/s/6mhq6t/ever_shared_spotify_link_on_internet) - [Ever shared a Spotify link on the internet? Someone you don&apos;t know can now message you](https://www.androidauthority.com/psa-spotify-messages-tracker-urls-3593498/)
* [2025-09-07, 21:29:39](https://lobste.rs/s/a3hcsy/pico_css_minimal_css_framework_for) - [Pico CSS • Minimal CSS Framework for semantic HTML](https://picocss.com)
* [2025-09-07, 21:26:00](https://soylentnews.org/article.pl?sid=25/09/07/005257&amp;from=rss) - [This Unlikely Chemical Could be a Powerful Weapon Against Climate Change](https://soylentnews.org/article.pl?sid=25/09/07/005257&amp;from=rss)
* [2025-09-07, 20:34:00](https://yro.slashdot.org/story/25/09/07/1944229/chinese-hackers-impersonated-us-lawmaker-in-email-espionage-campaign?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chinese Hackers Impersonated US Lawmaker in Email Espionage Campaign](https://yro.slashdot.org/story/25/09/07/1944229/chinese-hackers-impersonated-us-lawmaker-in-email-espionage-campaign?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-07, 20:11:28](https://lobste.rs/s/twnxj9/hilbert_space_treating_functions_as) - [Hilbert space: treating functions as vectors](https://eli.thegreenplace.net/2025/hilbert-space-treating-functions-as-vectors/)
* [2025-09-07, 19:34:00](https://news.slashdot.org/story/25/09/07/184203/publishers-demand-ai-overview-traffic-stats-from-google-alleging-forced-deals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Publishers Demand &apos;AI Overview&apos; Traffic Stats from Google, Alleging &apos;Forced&apos; Deals](https://news.slashdot.org/story/25/09/07/184203/publishers-demand-ai-overview-traffic-stats-from-google-alleging-forced-deals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-07, 18:34:00](https://linux.slashdot.org/story/25/09/07/177225/linus-torvalds-expresses-frustration-with-garbage-link-tags-in-git-commits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linus Torvalds Expresses Frustration With &apos;Garbage&apos; Link Tags In Git Commits](https://linux.slashdot.org/story/25/09/07/177225/linus-torvalds-expresses-frustration-with-garbage-link-tags-in-git-commits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-07, 17:34:00](https://science.slashdot.org/story/25/09/07/1510215/scientists-discuss-next-steps-to-prevent-dangerous-mirror-life-research?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Discuss Next Steps to Prevent Dangerous &apos;Mirror Life&apos; Research](https://science.slashdot.org/story/25/09/07/1510215/scientists-discuss-next-steps-to-prevent-dangerous-mirror-life-research?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-07, 16:47:00](https://soylentnews.org/article.pl?sid=25/09/07/001206&amp;from=rss) - [What the Hell is Going on Right Now?](https://soylentnews.org/article.pl?sid=25/09/07/001206&amp;from=rss)
* [2025-09-07, 16:34:00](https://news.slashdot.org/story/25/09/07/0533233/ai-tool-usage-correlates-negatively-with-performance-in-cs-class-estonian-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Tool Usage &apos;Correlates Negatively&apos; With Performance in CS Class, Estonian Study Finds](https://news.slashdot.org/story/25/09/07/0533233/ai-tool-usage-correlates-negatively-with-performance-in-cs-class-estonian-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-07, 15:34:00](https://news.slashdot.org/story/25/09/07/0358226/new-in-firefox-nightly-builds-copilot-chatbot-new-tab-widgets-jpeg-xl-support?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New In Firefox Nightly Builds: Copilot Chatbot, New Tab Widgets, JPEG-XL Support](https://news.slashdot.org/story/25/09/07/0358226/new-in-firefox-nightly-builds-copilot-chatbot-new-tab-widgets-jpeg-xl-support?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-07, 15:20:29](https://news.ycombinator.com/item?id=45158968) - [The MacBook has a sensor that knows the exact angle of the screen hinge](https://twitter.com/samhenrigold/status/1964428927159382261)
* [2025-09-07, 14:04:00](https://developers.slashdot.org/story/25/09/07/0615217/32-of-senior-developers-say-half-their-shipped-code-is-ai-generated?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [32% of Senior Developers Say Half Their Shipped Code is AI-Generated](https://developers.slashdot.org/story/25/09/07/0615217/32-of-senior-developers-say-half-their-shipped-code-is-ai-generated?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-07, 13:56:39](https://lobste.rs/s/y5iegk/algebraic_effects_practice_with_flix) - [Algebraic Effects in Practice with Flix](https://www.relax.software/blog/flix-effects-intro/)
* [2025-09-07, 13:50:46](https://lobste.rs/s/htogek/everything_is_u8) - [Everything is a []u8](https://www.openmymind.net/Everything-Is-A-u8-array/)
* [2025-09-07, 13:24:14](https://lobste.rs/s/6j4xmw/expression_problem_its_solutions_2016) - [The Expression Problem and its solutions (2016)](https://eli.thegreenplace.net/2016/the-expression-problem-and-its-solutions)
* [2025-09-07, 12:41:32](https://lobste.rs/s/odeql3/do_you_have_personal_wiki) - [Do you have a personal wiki?](https://lobste.rs/s/odeql3/do_you_have_personal_wiki)
* [2025-09-07, 12:12:01](https://lobste.rs/s/chvsdq/semantic_line_breaks) - [Semantic Line Breaks](https://sembr.org)
* [2025-09-07, 11:56:00](https://soylentnews.org/article.pl?sid=25/09/06/1527240&amp;from=rss) - [France Fines Google, SHEIN for Undercooked Cookie Policies](https://soylentnews.org/article.pl?sid=25/09/06/1527240&amp;from=rss)
* [2025-09-07, 07:11:00](https://soylentnews.org/article.pl?sid=25/09/06/1514247&amp;from=rss) - [Nvidia&apos;s Next-Gen AI Chip Could Be Double  the Price of H20 If China Export is Approved](https://soylentnews.org/article.pl?sid=25/09/06/1514247&amp;from=rss)
* [2025-09-07, 06:51:47](https://lobste.rs/s/mwhbyo/bye_intel_hi_amd_i_m_done_after_2_dead_intels) - [Bye Intel, hi AMD! I’m done after 2 dead Intels](https://michael.stapelberg.ch/posts/2025-09-07-bye-intel-hi-amd-9950x3d/)
* [2025-09-07, 02:27:00](https://soylentnews.org/article.pl?sid=25/09/06/1510251&amp;from=rss) - [Porsche&apos;s New Cayenne Will Charge Itself Like No Other EV](https://soylentnews.org/article.pl?sid=25/09/06/1510251&amp;from=rss)
* [2025-09-07, 01:14:47](https://lobste.rs/s/hu3jkb/secret_web) - [A Secret Web](https://blog.clew.se/posts/secret-web/)
* [2025-09-06, 21:42:00](https://soylentnews.org/article.pl?sid=25/09/05/0544216&amp;from=rss) - [Bill Gates’ 48-Year-Old Microsoft 6502 BASIC Goes Open Source](https://soylentnews.org/article.pl?sid=25/09/05/0544216&amp;from=rss)
* [2025-09-06, 19:42:48](https://news.ycombinator.com/item?id=45152284) - [GPT-5 Thinking in ChatGPT (a.k.a. Research Goblin) is good at search](https://simonwillison.net/2025/Sep/6/research-goblin/)
* [2025-09-06, 18:19:51](https://lobste.rs/s/deaem7/stop_writing_cli_validation_parse_it) - [Stop writing CLI validation. Parse it right the first time](https://hackers.pub/@hongminhee/2025/stop-writing-cli-validation-parse-it-right-the-first-time)
* [2025-09-06, 16:59:00](https://soylentnews.org/article.pl?sid=25/09/05/0540222&amp;from=rss) - [Jury Orders Google to Pay $425 Million for Unlawfully Tracking Millions of Users](https://soylentnews.org/article.pl?sid=25/09/05/0540222&amp;from=rss)
* [2025-09-06, 12:13:00](https://soylentnews.org/article.pl?sid=25/09/05/0536245&amp;from=rss) - [China Likely to Land on Moon Before US Does Again](https://soylentnews.org/article.pl?sid=25/09/05/0536245&amp;from=rss)
* [2025-09-06, 07:29:00](https://soylentnews.org/article.pl?sid=25/09/05/0527230&amp;from=rss) - [New Hollow-Core Fiber Outperforms Glass, Pushing Data Closer to Light Speed](https://soylentnews.org/article.pl?sid=25/09/05/0527230&amp;from=rss)
* [2025-09-06, 02:45:00](https://soylentnews.org/article.pl?sid=25/09/05/0259211&amp;from=rss) - [The Fight Against Labeling Long-Term Streaming Rentals as “Purchases” You “Buy”](https://soylentnews.org/article.pl?sid=25/09/05/0259211&amp;from=rss)
* [2025-09-05, 21:57:00](https://soylentnews.org/article.pl?sid=25/09/04/155234&amp;from=rss) - [M365 Copilot Fails to Up Productivity in UK Government Trial](https://soylentnews.org/article.pl?sid=25/09/04/155234&amp;from=rss)
* [2025-09-05, 18:27:24](https://news.ycombinator.com/item?id=45141907) - [Why Is Japan Still Investing in Custom Floating Point Accelerators?](https://www.nextplatform.com/2025/09/04/why-is-japan-still-investing-in-custom-floating-point-accelerators/)
* [2025-09-05, 17:13:00](https://soylentnews.org/article.pl?sid=25/09/04/150221&amp;from=rss) - [Nvidia Blasts Proposed US Bill That Would Force It to Give American Buyers First Option](https://soylentnews.org/article.pl?sid=25/09/04/150221&amp;from=rss)
* [2025-09-05, 12:28:00](https://soylentnews.org/article.pl?sid=25/09/04/0430216&amp;from=rss) - [Stressed Ice Generates Electricity, Researchers Find](https://soylentnews.org/article.pl?sid=25/09/04/0430216&amp;from=rss)
* [2025-09-05, 12:05:17](https://news.ycombinator.com/item?id=45137584) - [Building an acoustic camera with UMA-16 and Acoular](https://www.minidsp.com/applications/usb-mic-array/acoustic-camera-uma16)
* [2025-09-05, 07:47:00](https://soylentnews.org/article.pl?sid=25/09/04/0419219&amp;from=rss) - [Google Won&apos;t Have to Sell Chrome, Judge Rules](https://soylentnews.org/article.pl?sid=25/09/04/0419219&amp;from=rss)
* [2025-09-05, 03:03:00](https://soylentnews.org/article.pl?sid=25/09/04/0414246&amp;from=rss) - [U.S. Gov&apos;t Revokes TSMC&apos;s Authorization to Ship Tools to its Fabs in China](https://soylentnews.org/article.pl?sid=25/09/04/0414246&amp;from=rss)
* [2025-09-05, 01:23:59](https://news.ycombinator.com/item?id=45134144) - [Writing by manipulating visual representations of stories](https://github.com/m-damien/VisualStoryWriting)
* [2025-09-04, 22:16:00](https://soylentnews.org/article.pl?sid=25/09/04/048238&amp;from=rss) - [Scammers Will Try to Trick You Into Filling Out Google Forms. Don’t Fall for It](https://soylentnews.org/article.pl?sid=25/09/04/048238&amp;from=rss)
* [2025-09-04, 19:13:10](https://news.ycombinator.com/item?id=45131091) - [Integer Programming (2002) [pdf]](https://web.mit.edu/15.053/www/AMP-Chapter-09.pdf)
* [2025-09-04, 18:18:27](https://news.ycombinator.com/item?id=45130433) - [We Rarely Lose Technology (2023)](https://www.hopefulmons.com/p/we-rarely-lose-technology)
* [2025-09-04, 17:29:00](https://soylentnews.org/article.pl?sid=25/09/04/0350224&amp;from=rss) - [Passkeys Are Incompatible With Open-Source Software](https://soylentnews.org/article.pl?sid=25/09/04/0350224&amp;from=rss)
* [2025-09-04, 14:59:45](https://news.ycombinator.com/item?id=45128055) - [Look Out for Bugs](https://matklad.github.io/2025/09/04/look-for-bugs.html)
* [2025-09-04, 12:44:00](https://soylentnews.org/article.pl?sid=25/09/03/0226210&amp;from=rss) - [Get Ready for Plastic Blood](https://soylentnews.org/article.pl?sid=25/09/03/0226210&amp;from=rss)
* [2025-09-04, 07:57:00](https://soylentnews.org/article.pl?sid=25/09/03/0223245&amp;from=rss) - [Nearly 40% of Nvidia&apos;s Revenue Tied to Two Mystery Customers, Filing Shows](https://soylentnews.org/article.pl?sid=25/09/03/0223245&amp;from=rss)
* [2025-09-04, 03:14:00](https://soylentnews.org/article.pl?sid=25/09/03/0216228&amp;from=rss) - [People Who Believe in Conspiracy Theories Process Information Differently at the Neural Level](https://soylentnews.org/article.pl?sid=25/09/03/0216228&amp;from=rss)
