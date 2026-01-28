# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Android's Full Desktop Mode Surfaces in Accidental Chromium Leak](https://slashdot.org/story/26/01/28/1443215/androids-full-desktop-mode-surfaces-in-accidental-chromium-leak?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Rust at Scale: An Added Layer of Security for WhatsApp](https://engineering.fb.com/2026/01/27/security/rust-at-scale-security-whatsapp/)

* [Asteroid 2024 YR4 Has a 4% Chance of Hitting the Moon](https://science.slashdot.org/story/26/01/28/0522257/asteroid-2024-yr4-has-a-4-chance-of-hitting-the-moon?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Economic Shifts and Employment

* [30,000 More UPS Jobs On the Chopping Block as Amazon Era Ends](https://slashdot.org/story/26/01/28/1529207/30000-more-ups-jobs-on-the-chopping-block-as-amazon-era-ends?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Amazon Cuts Another 16,000 Jobs](https://slashdot.org/story/26/01/28/1043253/amazon-cuts-another-16000-jobs?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Historical and Scientific Discoveries

* [Ancient Martian Beach Discovered, Providing New Clues To Planet's Habitability](https://science.slashdot.org/story/26/01/28/051200/ancient-martian-beach-discovered-providing-new-clues-to-planets-habitability?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [430k-year-old well-preserved wooden tools are the oldest ever found](https://www.nytimes.com/2026/01/26/science/archaeology-neanderthals-tools.html)

## Privacy and Security

* [SoundCloud Data Breach Impacts 29.8 Million Accounts](https://yro.slashdot.org/story/26/01/27/2223256/soundcloud-data-breach-impacts-298-million-accounts?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Supreme Court To Decide How 1988 Videotape Privacy Law Applies To Online Video](https://yro.slashdot.org/story/26/01/27/2217211/supreme-court-to-decide-how-1988-videotape-privacy-law-applies-to-online-video?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Developer Tools and Resources

* [We read the JSON Schema spec so you don't have to](https://blog.dottxt.ai/dotjson-has-good-schema-support.html)

* [make.ts](https://matklad.github.io/2026/01/27/make-ts.html)

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

* [2026-01-28, 15:55:00](https://soylentnews.org/article.pl?sid=26/01/26/197234&amp;from=rss) - [Socializing Alone: The Downside of Communication Technology](https://soylentnews.org/article.pl?sid=26/01/26/197234&amp;from=rss)
* [2026-01-28, 15:37:53](https://lobste.rs/s/dhhiyl/we_read_json_schema_spec_so_you_don_t_have) - [We read the JSON Schema spec so you don&apos;t have to](https://blog.dottxt.ai/dotjson-has-good-schema-support.html)
* [2026-01-28, 15:29:00](https://slashdot.org/story/26/01/28/1529207/30000-more-ups-jobs-on-the-chopping-block-as-amazon-era-ends?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [30,000 More UPS Jobs On the Chopping Block as Amazon Era Ends](https://slashdot.org/story/26/01/28/1529207/30000-more-ups-jobs-on-the-chopping-block-as-amazon-era-ends?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-28, 15:27:49](https://news.ycombinator.com/item?id=46796571) - [Dole Kemp 96 Web Site](https://www.dolekemp96.org/main.htm)
* [2026-01-28, 14:43:00](https://slashdot.org/story/26/01/28/1443215/androids-full-desktop-mode-surfaces-in-accidental-chromium-leak?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Android&apos;s Full Desktop Mode Surfaces in Accidental Chromium Leak](https://slashdot.org/story/26/01/28/1443215/androids-full-desktop-mode-surfaces-in-accidental-chromium-leak?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-28, 14:38:39](https://lobste.rs/s/m0krf8/there_back_again_from_quickstrom) - [There and Back Again: From Quickstrom to Bombadil](https://wickstrom.tech/2026-01-28-there-and-back-again-from-quickstrom-to-bombadil.html)
* [2026-01-28, 14:32:30](https://news.ycombinator.com/item?id=46795908) - [Airfoil (2024)](https://ciechanow.ski/airfoil/)
* [2026-01-28, 14:28:21](https://news.ycombinator.com/item?id=46795864) - [Microsoft forced me to switch to Linux](https://www.himthe.dev/blog/microsoft-to-linux)
* [2026-01-28, 14:00:00](https://slashdot.org/story/26/01/28/1043253/amazon-cuts-another-16000-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Cuts Another 16,000 Jobs](https://slashdot.org/story/26/01/28/1043253/amazon-cuts-another-16000-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-28, 13:44:48](https://lobste.rs/s/rcffs8/make_ts) - [make.ts](https://matklad.github.io/2026/01/27/make-ts.html)
* [2026-01-28, 13:00:00](https://tech.slashdot.org/story/26/01/28/0510226/clawdbot-has-ai-techies-buying-mac-minis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Clawdbot&apos; Has AI Techies Buying Mac Minis](https://tech.slashdot.org/story/26/01/28/0510226/clawdbot-has-ai-techies-buying-mac-minis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-28, 12:24:13](https://lobste.rs/s/yt1a6v/data_consistency_transactions_delays) - [Data Consistency: transactions, delays and long-running processes](https://binaryigor.com/data-consistency-transactions-delays-processes.html)
* [2026-01-28, 12:00:08](https://news.ycombinator.com/item?id=46794231) - [Kyber (YC W23) Is Hiring a Staff Engineer](https://www.ycombinator.com/companies/kyber/jobs/GPJkv5v-staff-engineer-tech-lead)
* [2026-01-28, 11:59:30](https://lobste.rs/s/1omm6b/uefigame_win_boot_lose_shutdown) - [UEFIGame: \&quot;Win -&gt; Boot, Lose -&gt; Shutdown\&quot;](https://github.com/mycroftsnm/UEFIGame)
* [2026-01-28, 11:13:00](https://soylentnews.org/article.pl?sid=26/01/26/195201&amp;from=rss) - [TSMC Says AI Demand is “Endless” After Record Q4 Earnings](https://soylentnews.org/article.pl?sid=26/01/26/195201&amp;from=rss)
* [2026-01-28, 10:50:32](https://news.ycombinator.com/item?id=46793693) - [Show HN: The HN Arcade](https://andrewgy8.github.io/hnarcade/)
* [2026-01-28, 10:00:00](https://science.slashdot.org/story/26/01/28/0522257/asteroid-2024-yr4-has-a-4-chance-of-hitting-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Asteroid 2024 YR4 Has a 4% Chance of Hitting the Moon](https://science.slashdot.org/story/26/01/28/0522257/asteroid-2024-yr4-has-a-4-chance-of-hitting-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-28, 09:37:34](https://lobste.rs/s/0x2zgn/time_machine_inside_freebsd_jail) - [Time Machine inside a FreeBSD jail](https://it-notes.dragas.net/2026/01/28/time-machine-freebsd-jail/)
* [2026-01-28, 09:35:17](https://lobste.rs/s/xpujwk/taming_claude_code) - [Taming Claude Code](https://thisalex.com/posts/claude-taming/)
* [2026-01-28, 08:42:23](https://lobste.rs/s/2a2fgl/neocities_is_blocked_by_bing) - [Neocities Is Blocked by Bing](https://blog.neocities.org/blog/2026/01/27/bing-block.html)
* [2026-01-28, 08:32:50](https://news.ycombinator.com/item?id=46792572) - [Virtual Boy on TV with Intelligent Systems Video Boy](https://hcs64.com/video-boy-vue/)
* [2026-01-28, 07:42:25](https://lobste.rs/s/pjuesf/rise_sanityware) - [The Rise of Sanityware](https://thatshubham.com/blog/2026.html)
* [2026-01-28, 07:35:51](https://news.ycombinator.com/item?id=46792194) - [Make.ts](https://matklad.github.io/2026/01/27/make-ts.html)
* [2026-01-28, 07:00:00](https://science.slashdot.org/story/26/01/28/051200/ancient-martian-beach-discovered-providing-new-clues-to-planets-habitability?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ancient Martian Beach Discovered, Providing New Clues To Planet&apos;s Habitability](https://science.slashdot.org/story/26/01/28/051200/ancient-martian-beach-discovered-providing-new-clues-to-planets-habitability?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-28, 06:27:00](https://soylentnews.org/article.pl?sid=26/01/26/192227&amp;from=rss) - [Design Your Next Building Out of Bamboo](https://soylentnews.org/article.pl?sid=26/01/26/192227&amp;from=rss)
* [2026-01-28, 06:21:07](https://news.ycombinator.com/item?id=46791742) - [Rust at Scale: An Added Layer of Security for WhatsApp](https://engineering.fb.com/2026/01/27/security/rust-at-scale-security-whatsapp/)
* [2026-01-28, 05:00:00](https://slashdot.org/story/26/01/28/0457219/amazon-inadvertently-announces-cloud-unit-layoffs-in-email-to-employees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Inadvertently Announces Cloud Unit Layoffs In Email To Employees](https://slashdot.org/story/26/01/28/0457219/amazon-inadvertently-announces-cloud-unit-layoffs-in-email-to-employees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-28, 04:24:34](https://lobste.rs/s/rxowxr/use_z_not_with_python_regular_expressions) - [Use “\\A...\\z”, not “^...$” with Python regular expressions](https://sethmlarson.dev/use-backslash-A-and-z-not-%5E-and-%24-with-python-regular-expressions)
* [2026-01-28, 03:30:00](https://yro.slashdot.org/story/26/01/27/2343239/us-government-lost-more-than-10000-stem-phds-last-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Government Lost More Than 10,000 STEM PhDs Last Year](https://yro.slashdot.org/story/26/01/27/2343239/us-government-lost-more-than-10000-stem-phds-last-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-28, 03:28:42](https://lobste.rs/s/ukutpb/monkeyball_online) - [MonkeyBall Online](https://monkeyball-online.pages.dev/)
* [2026-01-28, 02:08:14](https://news.ycombinator.com/item?id=46790127) - [A verification layer for browser agents: Amazon case study](https://sentienceapi.com/blog/verification-layer-amazon-case-study)
* [2026-01-28, 02:02:00](https://apple.slashdot.org/story/26/01/27/2336257/apple-updates-ios-12-for-the-first-time-since-2023?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Updates iOS 12 For the First Time Since 2023](https://apple.slashdot.org/story/26/01/27/2336257/apple-updates-ios-12-for-the-first-time-since-2023?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-28, 01:42:00](https://soylentnews.org/article.pl?sid=26/01/26/191227&amp;from=rss) - [North Sea Winds Of Change](https://soylentnews.org/article.pl?sid=26/01/26/191227&amp;from=rss)
* [2026-01-28, 01:25:00](https://science.slashdot.org/story/26/01/27/2235231/scientists-launch-ai-dinotracker-app-that-identifies-dinosaur-footprints?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Launch AI DinoTracker App That Identifies Dinosaur Footprints](https://science.slashdot.org/story/26/01/27/2235231/scientists-launch-ai-dinotracker-app-that-identifies-dinosaur-footprints?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-28, 00:45:00](https://yro.slashdot.org/story/26/01/27/2223256/soundcloud-data-breach-impacts-298-million-accounts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SoundCloud Data Breach Impacts 29.8 Million Accounts](https://yro.slashdot.org/story/26/01/27/2223256/soundcloud-data-breach-impacts-298-million-accounts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-28, 00:02:00](https://yro.slashdot.org/story/26/01/27/2217211/supreme-court-to-decide-how-1988-videotape-privacy-law-applies-to-online-video?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Supreme Court To Decide How 1988 Videotape Privacy Law Applies To Online Video](https://yro.slashdot.org/story/26/01/27/2217211/supreme-court-to-decide-how-1988-videotape-privacy-law-applies-to-online-video?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-27, 23:20:00](https://science.slashdot.org/story/26/01/27/2157226/openai-releases-prism-a-claude-code-like-app-for-scientific-research?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Releases Prism, a Claude Code-Like App For Scientific Research](https://science.slashdot.org/story/26/01/27/2157226/openai-releases-prism-a-claude-code-like-app-for-scientific-research?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-27, 22:40:00](https://yro.slashdot.org/story/26/01/27/2148253/amazon-to-pay-309-million-to-us-shoppers-in-settlement-over-returns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon To Pay $309 Million To US Shoppers In Settlement Over Returns](https://yro.slashdot.org/story/26/01/27/2148253/amazon-to-pay-309-million-to-us-shoppers-in-settlement-over-returns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-27, 22:08:16](https://lobste.rs/s/aqhrie/barev_xmpp_flavoured_p2p_protocol) - [Barev - XMPP flavoured p2p protocol](https://discourse.imfreedom.org/t/barev-xmpp-flavoured-p2p-protocol/348)
* [2026-01-27, 22:02:00](https://tech.slashdot.org/story/26/01/27/2138239/internal-messages-may-doom-meta-at-social-media-addiction-trial?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Internal Messages May Doom Meta At Social Media Addiction Trial](https://tech.slashdot.org/story/26/01/27/2138239/internal-messages-may-doom-meta-at-social-media-addiction-trial?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-27, 21:22:07](https://lobste.rs/s/7cdb2b/pure_go_linux_environment_written_by) - [A \&quot;Pure Go\&quot; Linux environment, written by Claude](https://www.jtolio.com/2026/01/a-pure-go-linux-environment-written-by-claude-directed-by-fabrice-bellard/)
* [2026-01-27, 21:02:47](https://lobste.rs/s/atvvjp/it_is_incorrect_normalize_http_url_paths) - [It is incorrect to “normalize” // in HTTP URL paths](https://runxiyu.org/comp/doubleslash/)
* [2026-01-27, 21:02:00](https://soylentnews.org/article.pl?sid=26/01/26/1857242&amp;from=rss) - [Proton VPN Reveals Major Linux Makeover](https://soylentnews.org/article.pl?sid=26/01/26/1857242&amp;from=rss)
* [2026-01-27, 20:36:14](https://news.ycombinator.com/item?id=46786196) - [Parametric CAD in Rust](https://campedersen.com/vcad)
* [2026-01-27, 19:40:59](https://lobste.rs/s/vfofzr/blocking_claude) - [Blocking Claude](https://aphyr.com/posts/403-blocking-claude)
* [2026-01-27, 18:57:15](https://news.ycombinator.com/item?id=46784572) - [Lennart Poettering, Christian Brauner founded a new company](https://amutable.com/about)
* [2026-01-27, 18:55:13](https://lobste.rs/s/igpevt/lobsters_vibecoding_challenge_winter) - [Lobsters Vibecoding Challenge (Winter 2025-2026)](https://gist.github.com/MostAwesomeDude/bb8cbfd005a33f5dd262d1f20a63a693)
* [2026-01-27, 18:08:48](https://lobste.rs/s/kaftkn/i_started_identifying_corporate_devices) - [I Started Identifying Corporate Devices in My Software](https://lgug2z.com/articles/i-started-identifying-corporate-devices-in-my-software/)
* [2026-01-27, 18:03:10](https://news.ycombinator.com/item?id=46783752) - [Prism](https://openai.com/index/introducing-prism)
* [2026-01-27, 17:17:54](https://news.ycombinator.com/item?id=46783017) - [AI2: Open Coding Agents](https://allenai.org/blog/open-coding-agents)
* [2026-01-27, 16:22:52](https://lobste.rs/s/csxfc6/cloudflare_claimed_they_implemented) - [Cloudflare claimed they implemented Matrix on Cloudflare workers. They didn&apos;t](https://tech.lgbt/@JadedBlueEyes/115967791152135761)
* [2026-01-27, 16:19:00](https://soylentnews.org/article.pl?sid=26/01/26/1850245&amp;from=rss) - [80386 Multiplication and Division](https://soylentnews.org/article.pl?sid=26/01/26/1850245&amp;from=rss)
* [2026-01-27, 15:46:29](https://news.ycombinator.com/item?id=46781530) - [430k-year-old well-preserved wooden tools are the oldest ever found](https://www.nytimes.com/2026/01/26/science/archaeology-neanderthals-tools.html)
* [2026-01-27, 15:41:14](https://news.ycombinator.com/item?id=46781444) - [Amazon closing its Fresh and Go stores](https://finance.yahoo.com/news/amazon-closing-fresh-grocery-convenience-150437789.html)
* [2026-01-27, 14:48:07](https://lobste.rs/s/xcwljr/xfwl4_roadmap_for_xfce_wayland) - [Xfwl4: The roadmap for a Xfce Wayland Compositor](https://alexxcons.github.io/blogpost_15.html)
* [2026-01-27, 14:40:22](https://lobste.rs/s/dskpn4/after_two_years_vibecoding_i_m_back) - [After two years of vibecoding, I&apos;m back to writing by hand](https://atmoio.substack.com/p/after-two-years-of-vibecoding-im)
* [2026-01-27, 14:38:32](https://lobste.rs/s/rjw7zn/t_concise_language_for_manipulating_text) - [t: a concise language for manipulating text, replacing common usage patterns of Unix utilities like grep, sed, cut, awk, sort, and uniq](https://github.com/alecthomas/t)
* [2026-01-27, 14:13:44](https://lobste.rs/s/fdbsyl/c_shaped_hole_package_management) - [The C-Shaped Hole in Package Management](https://nesbitt.io/2026/01/27/the-c-shaped-hole-in-package-management.html)
* [2026-01-27, 13:48:30](https://news.ycombinator.com/item?id=46779864) - [Show HN: Build Web Automations via Demonstration](https://www.notte.cc/launch-week-i/demonstrate-mode)
* [2026-01-27, 13:33:47](https://lobste.rs/s/xhqliz/bugs_apple_loves) - [Bugs Apple Loves](https://www.bugsappleloves.com/)
* [2026-01-27, 13:25:53](https://news.ycombinator.com/item?id=46779645) - [Xfwl4 – The Roadmap for a Xfce Wayland Compositor](https://alexxcons.github.io/blogpost_15.html)
* [2026-01-27, 11:39:00](https://soylentnews.org/article.pl?sid=26/01/25/1435251&amp;from=rss) - [Microsoft CEO Says AI Needs to Have Wider Impact or Risk Quickly Losing \&quot;Social Permission\&quot;](https://soylentnews.org/article.pl?sid=26/01/25/1435251&amp;from=rss)
* [2026-01-27, 10:06:36](https://lobste.rs/s/seknf5/how_get_european_cloud) - [But how to get to that European cloud?](https://berthub.eu/articles/posts/now-how-to-get-that-european-cloud/)
* [2026-01-27, 09:21:47](https://lobste.rs/s/hf6q1n/why_ai_coding_advice_contradicts_itself) - [Why AI Coding Advice Contradicts Itself](https://www.anup.io/why-ai-coding-advice-contradicts-itself/)
* [2026-01-27, 06:54:00](https://soylentnews.org/article.pl?sid=26/01/25/1419203&amp;from=rss) - [The Hidden Complexity Crisis: When Simple Radio Buttons Require 200+ Lines of Code](https://soylentnews.org/article.pl?sid=26/01/25/1419203&amp;from=rss)
* [2026-01-27, 06:17:46](https://news.ycombinator.com/item?id=46776155) - [Doing the thing is doing the thing](https://www.softwaredesign.ing/blog/doing-the-thing-is-doing-the-thing)
* [2026-01-27, 02:08:00](https://soylentnews.org/article.pl?sid=26/01/25/1410231&amp;from=rss) - [Elon Musk Restarts Dojo3 &apos;Space&apos; Supercomputer Project As AI5 Chip Design Gets In &apos;Good Shape&apos;](https://soylentnews.org/article.pl?sid=26/01/25/1410231&amp;from=rss)
* [2026-01-26, 21:19:00](https://soylentnews.org/article.pl?sid=26/01/25/145215&amp;from=rss) - [Apple&apos;s Enshittification Moment: How the App Store is Quietly Abandoning User Trust](https://soylentnews.org/article.pl?sid=26/01/25/145215&amp;from=rss)
* [2026-01-26, 21:09:19](https://news.ycombinator.com/item?id=46771564) - [A few random notes from Claude coding quite a bit last few weeks](https://twitter.com/karpathy/status/2015883857489522876)
* [2026-01-26, 17:46:22](https://news.ycombinator.com/item?id=46768906) - [Show HN: Cua-Bench – a benchmark for AI agents in GUI environments](https://github.com/trycua/cua)
* [2026-01-26, 16:38:00](https://soylentnews.org/article.pl?sid=26/01/25/1312202&amp;from=rss) - [Snover.exit()](https://soylentnews.org/article.pl?sid=26/01/25/1312202&amp;from=rss)
* [2026-01-26, 11:55:00](https://soylentnews.org/article.pl?sid=26/01/25/0439223&amp;from=rss) - [Starlink Now Uses Customers&apos; Personal Data for AI Training](https://soylentnews.org/article.pl?sid=26/01/25/0439223&amp;from=rss)
* [2026-01-26, 07:11:00](https://soylentnews.org/article.pl?sid=26/01/25/0432221&amp;from=rss) - [Attackers Find a New Way to Share Malicious Snap Packages](https://soylentnews.org/article.pl?sid=26/01/25/0432221&amp;from=rss)
* [2026-01-26, 03:26:00](https://soylentnews.org/article.pl?sid=26/01/25/0429246&amp;from=rss) - [UK MPs Call for AI Stress Testing in Financial Services](https://soylentnews.org/article.pl?sid=26/01/25/0429246&amp;from=rss)
* [2026-01-25, 22:36:00](https://soylentnews.org/article.pl?sid=26/01/24/0116243&amp;from=rss) - [Microsoft Gave FBI a Set of BitLocker Encryption Keys to Unlock Suspects’ Laptops](https://soylentnews.org/article.pl?sid=26/01/24/0116243&amp;from=rss)
* [2026-01-25, 17:53:49](https://news.ycombinator.com/item?id=46756311) - [Thirty Years of the Square Kilometre Array](https://physicsworld.com/a/thirty-years-of-the-square-kilometre-array-heres-what-the-worlds-largest-radio-telescope-project-has-achieved-so-far/)
* [2026-01-25, 17:53:00](https://soylentnews.org/article.pl?sid=26/01/24/0114253&amp;from=rss) - [This May Be The Grossest Eye Pic Ever—but the Cause is What’s Truly Horrifying](https://soylentnews.org/article.pl?sid=26/01/24/0114253&amp;from=rss)
* [2026-01-25, 13:02:00](https://soylentnews.org/article.pl?sid=26/01/24/0112225&amp;from=rss) - [OpenAI Rolls Out Ads in ChatGPT as Expenses Skyrocket](https://soylentnews.org/article.pl?sid=26/01/24/0112225&amp;from=rss)
* [2026-01-25, 09:08:57](https://news.ycombinator.com/item?id=46752172) - [I Made a MIT Licensed Mecrisp-Stellaris Language Server](https://mecrisp-stellaris-folkdoc.sourceforge.io/mecrisp-stellaris-lsp.html)
* [2026-01-25, 08:30:00](https://soylentnews.org/article.pl?sid=26/01/24/0110242&amp;from=rss) - [Major River Deltas Are Sinking Faster Than Sea-Level Rise](https://soylentnews.org/article.pl?sid=26/01/24/0110242&amp;from=rss)
* [2026-01-25, 03:38:00](https://soylentnews.org/article.pl?sid=26/01/24/019242&amp;from=rss) - [How Greenwashing Creates &apos;False Stability&apos; for Companies](https://soylentnews.org/article.pl?sid=26/01/24/019242&amp;from=rss)
* [2026-01-24, 22:54:00](https://soylentnews.org/article.pl?sid=26/01/23/1016236&amp;from=rss) - [Ancient “Mosaic” Fossils Found in Morocco Challenge the Timeline of Human Evolution](https://soylentnews.org/article.pl?sid=26/01/23/1016236&amp;from=rss)
* [2026-01-24, 18:11:00](https://soylentnews.org/article.pl?sid=26/01/23/1010250&amp;from=rss) - [Micron Acquires PSMC Fab Site in Taiwan for $1.8 Billion](https://soylentnews.org/article.pl?sid=26/01/23/1010250&amp;from=rss)
* [2026-01-24, 13:25:00](https://soylentnews.org/article.pl?sid=26/01/23/1012244&amp;from=rss) - [Hygienic Conditions in Pompeii&apos;s Early Baths Were Poor](https://soylentnews.org/article.pl?sid=26/01/23/1012244&amp;from=rss)
* [2026-01-24, 08:42:00](https://soylentnews.org/article.pl?sid=26/01/22/124243&amp;from=rss) - [A Billiard Ball as a Universal Computation Machine](https://soylentnews.org/article.pl?sid=26/01/22/124243&amp;from=rss)
* [2026-01-24, 04:49:02](https://news.ycombinator.com/item?id=46741150) - [Rust’s Standard Library on the GPU](https://www.vectorware.com/blog/rust-std-on-gpu/)
* [2026-01-24, 04:24:22](https://news.ycombinator.com/item?id=46741045) - [Package Management Is a Wicked Problem](https://nesbitt.io/2026/01/23/package-management-is-a-wicked-problem.html)
* [2026-01-24, 04:01:00](https://soylentnews.org/article.pl?sid=26/01/22/121252&amp;from=rss) - [When Order Matters: How A Single DNS Change Broke The Internet For Millions](https://soylentnews.org/article.pl?sid=26/01/22/121252&amp;from=rss)
* [2026-01-24, 00:15:20](https://news.ycombinator.com/item?id=46739704) - [Show HN: Dwm.tmux – a dwm-inspired window manager for tmux](https://github.com/saysjonathan/dwm.tmux)
