# [News Summary](https://kherrick.github.io/news-summary/)

## Quantum Computing and AI Advances

* [IBM, Cisco Outline Plans For Networks of Quantum Computers By Early 2030s](https://tech.slashdot.org/story/25/11/20/2251228/ibm-cisco-outline-plans-for-networks-of-quantum-computers-by-early-2030s?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Tech giants IBM and Cisco reveal their ambitious strategy to create interconnected quantum computers by the 2030s.

* [Major Music Labels Strike Deals With New AI Streaming Service](https://entertainment.slashdot.org/story/25/11/20/2239227/major-music-labels-strike-deals-with-new-ai-streaming-service?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Music industry explores AI-powered streaming models through new licensing agreements.

* [Google's New Nano Banana Pro Uses Gemini 3 Power To Generate More Realistic AI Images](https://tech.slashdot.org/story/25/11/20/2215205/googles-new-nano-banana-pro-uses-gemini-3-power-to-generate-more-realistic-ai-images?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Google's latest AI chip enhances image generation with unprecedented realism.

## Open Source and Programming Developments

* [Microsoft Open-Sources Classic Text Adventure Zork Trilogy](https://news.slashdot.org/story/25/11/20/1942250/microsoft-open-sources-classic-text-adventure-zork-trilogy?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Iconic Zork game series is now available as open source by Microsoft.

* [Finally, run Docker containers natively in Proxmox 9.1 (OCI images)](https://raymii.org/s/tutorials/Finally_run_Docker_containers_natively_in_Proxmox_9.1.html) - A detailed guide to running Docker containers in the latest Proxmox environment.

## Regulatory Challenges and Social Impact

* [CDC Changes Webpage To Say Vaccines May Cause Autism, Revising Prior Language](https://science.slashdot.org/story/25/11/20/1912215/cdc-changes-webpage-to-say-vaccines-may-cause-autism-revising-prior-language?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Recent CDC updates on vaccine side effects spark controversy.

* [US Employee Well-Being Hit New Low In 2024, Survey Reveals](https://news.slashdot.org/story/25/11/20/2222218/us-employee-well-being-hit-new-low-in-2024-survey-reveals?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Survey highlights American workers' struggles to maintain mental and physical health.

## Emerging Technologies and Innovations

* [Roblox Blocks Children From Chatting To Adult Strangers](https://games.slashdot.org/story/25/11/20/2227214/roblox-blocks-children-from-chatting-to-adult-strangers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Popular online platform takes measures to safeguard young users.

* [You Can Finally AirDrop Files Between Android and iPhone, Starting with Pixel 10](https://it.slashdot.org/story/25/11/20/1732245/you-can-finally-airdrop-files-between-android-and-iphone-starting-with-pixel-10?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Cross-platform file-sharing becomes a reality for modern smartphone users.

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

* [2025-11-21, 01:40:00](https://tech.slashdot.org/story/25/11/20/2251228/ibm-cisco-outline-plans-for-networks-of-quantum-computers-by-early-2030s?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [IBM, Cisco Outline Plans For Networks of Quantum Computers By Early 2030s](https://tech.slashdot.org/story/25/11/20/2251228/ibm-cisco-outline-plans-for-networks-of-quantum-computers-by-early-2030s?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-21, 01:00:00](https://tech.slashdot.org/story/25/11/20/2243257/mozilla-says-its-finally-done-with-two-faced-onerep?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mozilla Says It&apos;s Finally Done With Two-Faced Onerep](https://tech.slashdot.org/story/25/11/20/2243257/mozilla-says-its-finally-done-with-two-faced-onerep?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-21, 00:20:00](https://entertainment.slashdot.org/story/25/11/20/2239227/major-music-labels-strike-deals-with-new-ai-streaming-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Major Music Labels Strike Deals With New AI Streaming Service](https://entertainment.slashdot.org/story/25/11/20/2239227/major-music-labels-strike-deals-with-new-ai-streaming-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-21, 00:07:00](https://soylentnews.org/article.pl?sid=25/11/19/0138242&amp;from=rss) - [Is Perplexity the First AI Unicorn to Fail?](https://soylentnews.org/article.pl?sid=25/11/19/0138242&amp;from=rss)
* [2025-11-21, 00:02:18](https://news.ycombinator.com/item?id=45999622) - [Prozac &apos;no better than placebo&apos; for treating children with depression, experts](https://www.theguardian.com/society/2025/nov/20/prozac-no-better-than-placebo-for-treating-children-with-depression-experts-say)
* [2025-11-20, 23:40:00](https://games.slashdot.org/story/25/11/20/2227214/roblox-blocks-children-from-chatting-to-adult-strangers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Roblox Blocks Children From Chatting To Adult Strangers](https://games.slashdot.org/story/25/11/20/2227214/roblox-blocks-children-from-chatting-to-adult-strangers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-20, 23:03:00](https://news.slashdot.org/story/25/11/20/2222218/us-employee-well-being-hit-new-low-in-2024-survey-reveals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Employee Well-Being Hit New Low In 2024, Survey Reveals](https://news.slashdot.org/story/25/11/20/2222218/us-employee-well-being-hit-new-low-in-2024-survey-reveals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-20, 22:58:06](https://news.ycombinator.com/item?id=45999038) - [Over-Regulation Is Doubling the Cost by Peter Reinhardt](https://rein.pk/over-regulation-is-doubling-the-cost)
* [2025-11-20, 22:17:00](https://tech.slashdot.org/story/25/11/20/2215205/googles-new-nano-banana-pro-uses-gemini-3-power-to-generate-more-realistic-ai-images?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s New Nano Banana Pro Uses Gemini 3 Power To Generate More Realistic AI Images](https://tech.slashdot.org/story/25/11/20/2215205/googles-new-nano-banana-pro-uses-gemini-3-power-to-generate-more-realistic-ai-images?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-20, 22:01:00](https://lobste.rs/s/smkwo1/how_slide_rules_work) - [How Slide Rules Work](https://amenzwa.github.io/stem/ComputingHistory/HowSlideRulesWork/)
* [2025-11-20, 21:41:49](https://lobste.rs/s/is1abw/olmo_3_charting_path_through_model_flow) - [Olmo 3: Charting a path through the model flow to lead open-source AI](https://allenai.org/blog/olmo3)
* [2025-11-20, 21:33:37](https://news.ycombinator.com/item?id=45998047) - [GitHut – Programming Languages and GitHub (2014)](https://githut.info/)
* [2025-11-20, 21:22:00](https://tech.slashdot.org/story/25/11/20/1951234/future-google-tv-devices-might-come-with-a-solar-powered-remote?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Future Google TV Devices Might Come With a Solar-powered Remote](https://tech.slashdot.org/story/25/11/20/1951234/future-google-tv-devices-might-come-with-a-solar-powered-remote?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-20, 21:21:08](https://news.ycombinator.com/item?id=45997914) - [New Glenn Update](https://www.blueorigin.com/news/new-glenn-upgraded-engines-subcooled-components-drive-enhanced-performance)
* [2025-11-20, 21:20:34](https://lobste.rs/s/8bojbq/2025_go_cryptography_state_union) - [2025 Go Cryptography State of the Union](https://words.filippo.io/2025-state/)
* [2025-11-20, 21:05:12](https://news.ycombinator.com/item?id=45997722) - [Run Docker containers natively in Proxmox 9.1 (OCI images)](https://raymii.org/s/tutorials/Finally_run_Docker_containers_natively_in_Proxmox_9.1.html)
* [2025-11-20, 21:05:00](https://lobste.rs/s/2opemx/finally_run_docker_containers_natively) - [Finally, run Docker containers natively in Proxmox 9.1 (OCI images)](https://raymii.org/s/tutorials/Finally_run_Docker_containers_natively_in_Proxmox_9.1.html)
* [2025-11-20, 20:51:00](https://news.slashdot.org/story/25/11/20/1942250/microsoft-open-sources-classic-text-adventure-zork-trilogy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Open-Sources Classic Text Adventure Zork Trilogy](https://news.slashdot.org/story/25/11/20/1942250/microsoft-open-sources-classic-text-adventure-zork-trilogy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-20, 20:24:42](https://news.ycombinator.com/item?id=45997212) - [New OS aims to provide (some) compatibility with macOS](https://github.com/ravynsoft/ravynos)
* [2025-11-20, 20:15:56](https://news.ycombinator.com/item?id=45997099) - [OOP is shifting between domains, not disappearing](https://blog.jsbarretto.com/post/actors)
* [2025-11-20, 20:10:00](https://games.slashdot.org/story/25/11/20/1924218/nvidia-brings-ad-free-cloud-gaming-to-new-chromebooks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia Brings Ad-free Cloud Gaming To New Chromebooks](https://games.slashdot.org/story/25/11/20/1924218/nvidia-brings-ad-free-cloud-gaming-to-new-chromebooks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-20, 20:00:48](https://lobste.rs/s/omsu9k/we_found_cryptography_bugs_elliptic) - [We found cryptography bugs in the elliptic library using Wycheproof](https://blog.trailofbits.com/2025/11/18/we-found-cryptography-bugs-in-the-elliptic-library-using-wycheproof/)
* [2025-11-20, 19:30:00](https://science.slashdot.org/story/25/11/20/1912215/cdc-changes-webpage-to-say-vaccines-may-cause-autism-revising-prior-language?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CDC Changes Webpage To Say Vaccines May Cause Autism, Revising Prior Language](https://science.slashdot.org/story/25/11/20/1912215/cdc-changes-webpage-to-say-vaccines-may-cause-autism-revising-prior-language?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-20, 19:29:58](https://lobste.rs/s/wtzy7u/zork_i_ii_iii_go_open_source) - [Zork I, II, and III go Open Source](https://opensource.microsoft.com/blog/2025/11/20/preserving-code-that-shaped-generations-zork-i-ii-and-iii-go-open-source)
* [2025-11-20, 19:26:12](https://news.ycombinator.com/item?id=45996585) - [Data-at-Rest Encryption in DuckDB](https://duckdb.org/2025/11/19/encryption-in-duckdb)
* [2025-11-20, 19:15:00](https://soylentnews.org/article.pl?sid=25/11/18/1216240&amp;from=rss) - [Turris Releases Their New Omnia NG Router](https://soylentnews.org/article.pl?sid=25/11/18/1216240&amp;from=rss)
* [2025-11-20, 19:13:51](https://news.ycombinator.com/item?id=45996433) - [Mozilla says it&apos;s finally done with Onerep](https://krebsonsecurity.com/2025/11/mozilla-says-its-finally-done-with-two-faced-onerep/)
* [2025-11-20, 18:52:00](https://tech.slashdot.org/story/25/11/20/1852230/as-windows-turns-40-microsoft-faces-an-ai-backlash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [As Windows Turns 40, Microsoft Faces an AI Backlash](https://tech.slashdot.org/story/25/11/20/1852230/as-windows-turns-40-microsoft-faces-an-ai-backlash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-20, 18:20:59](https://news.ycombinator.com/item?id=45995834) - [NTSB Preliminary Report – UPS Boeing MD-11F Crash [pdf]](https://www.ntsb.gov/Documents/Prelimiary%20Report%20DCA26MA024.pdf)
* [2025-11-20, 18:19:31](https://news.ycombinator.com/item?id=45995816) - [The Lions Operating System](https://lionsos.org)
* [2025-11-20, 18:13:39](https://news.ycombinator.com/item?id=45995740) - [Microsoft makes Zork open-source](https://opensource.microsoft.com/blog/2025/11/20/preserving-code-that-shaped-generations-zork-i-ii-and-iii-go-open-source)
* [2025-11-20, 18:05:54](https://lobste.rs/s/cphkc3/firefox_147_will_support_xdg_base) - [Firefox 147 Will Support The XDG Base Directory Specification](https://www.phoronix.com/news/Firefox-147-XDG-Base-Directory)
* [2025-11-20, 18:05:00](https://tech.slashdot.org/story/25/11/20/1752232/monarch-tractor-preps-for-layoffs-and-warns-employees-it-may-shut-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Monarch Tractor Preps For Layoffs and Warns Employees It May &apos;Shut Down&apos;](https://tech.slashdot.org/story/25/11/20/1752232/monarch-tractor-preps-for-layoffs-and-warns-employees-it-may-shut-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-20, 17:47:06](https://news.ycombinator.com/item?id=45995394) - [Launch HN: Poly (YC S22) – Cursor for Files](https://news.ycombinator.com/item?id=45995394)
* [2025-11-20, 17:32:00](https://it.slashdot.org/story/25/11/20/1732245/you-can-finally-airdrop-files-between-android-and-iphone-starting-with-pixel-10?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [You Can Finally AirDrop Files Between Android and iPhone, Starting with Pixel 10](https://it.slashdot.org/story/25/11/20/1732245/you-can-finally-airdrop-files-between-android-and-iphone-starting-with-pixel-10?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-20, 17:27:13](https://lobste.rs/s/w9lkk3/adversarial_poetry_as_universal_single) - [Adversarial Poetry as a Universal Single-Turn Jailbreak Mechanism in Large Language Models](https://arxiv.org/html/2511.15304v1)
* [2025-11-20, 17:07:49](https://news.ycombinator.com/item?id=45994895) - [Go Cryptography State of the Union](https://words.filippo.io/2025-state/)
* [2025-11-20, 17:04:34](https://news.ycombinator.com/item?id=45994854) - [Android and iPhone users can now share files, starting with the Pixel 10](https://blog.google/products/android/quick-share-airdrop/)
* [2025-11-20, 17:02:55](https://lobste.rs/s/ul2vxd/django_liveview_2_0_0) - [Django LiveView 2.0.0](https://github.com/Django-LiveView/liveview)
* [2025-11-20, 16:46:00](https://entertainment.slashdot.org/story/25/11/20/1646232/disney-loses-bid-to-block-sling-tvs-one-day-cable-passes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Disney Loses Bid To Block Sling TV&apos;s One-Day Cable Passes](https://entertainment.slashdot.org/story/25/11/20/1646232/disney-loses-bid-to-block-sling-tvs-one-day-cable-passes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-20, 16:14:10](https://lobste.rs/s/6kzphy/thunderbird_pro_november_2025_update) - [Thunderbird Pro November 2025 Update](https://blog.thunderbird.net/2025/11/thunderbird-pro-november-2025-update/)
* [2025-11-20, 16:03:00](https://science.slashdot.org/story/25/11/20/163208/american-kids-cant-do-math-anymore?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [American Kids Can&apos;t Do Math Anymore](https://science.slashdot.org/story/25/11/20/163208/american-kids-cant-do-math-anymore?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-20, 15:53:30](https://lobste.rs/s/p9i6g3/open_source_developers_are_exhausted) - [Open Source Developers Are Exhausted, Unpaid, and Ready to Walk Away](https://itsfoss.com/news/open-source-developers-are-exhausted/)
* [2025-11-20, 15:42:52](https://lobste.rs/s/g0trax/i_ve_been_thinking_about_agents_mcp_all) - [I’ve been thinking about Agents and MCP all wrong](https://rmoff.net/2025/11/20/ive-been-thinking-about-agents-and-mcp-all-wrong/)
* [2025-11-20, 15:06:03](https://lobste.rs/s/empan7/signal_polls_yes_no_maybe_yes) - [Signal Polls: Yes, no, maybe (yes!)](https://signal.org/blog/polls/)
* [2025-11-20, 15:05:53](https://lobste.rs/s/cr4ihl/what_s_cooking_on_sourcehut_q4_2025) - [What&apos;s cooking on SourceHut? Q4 2025](https://sourcehut.org/blog/2025-11-20-whats-cooking-q4-2025/)
* [2025-11-20, 15:04:23](https://news.ycombinator.com/item?id=45993296) - [Nano Banana Pro](https://blog.google/technology/ai/nano-banana-pro/)
* [2025-11-20, 14:56:47](https://news.ycombinator.com/item?id=45993214) - [Freer Monads, More Extensible Effects (2015) [pdf]](https://okmij.org/ftp/Haskell/extensible/more.pdf)
* [2025-11-20, 14:37:00](https://soylentnews.org/article.pl?sid=25/11/18/1212257&amp;from=rss) - [Many Hard Leetcode Problems Are Easy Constraint Problems](https://soylentnews.org/article.pl?sid=25/11/18/1212257&amp;from=rss)
* [2025-11-20, 13:56:04](https://lobste.rs/s/kmdqnf/freer_monads_more_extensible_effects) - [Freer Monads, More Extensible Effects (2015)](https://okmij.org/ftp/Haskell/extensible/more.pdf)
* [2025-11-20, 12:21:15](https://news.ycombinator.com/item?id=45991853) - [Red Alert 2 in web browser](https://chronodivide.com/)
* [2025-11-20, 12:01:26](https://news.ycombinator.com/item?id=45991738) - [Adversarial poetry as a universal single-turn jailbreak mechanism in LLMs](https://arxiv.org/abs/2511.15304)
* [2025-11-20, 11:20:02](https://lobste.rs/s/j5qgj6/memory_is_slow_disk_is_fast) - [Memory is slow, Disk is fast](https://www.bitflux.ai/blog/memory-is-slow-part2)
* [2025-11-20, 10:34:45](https://lobste.rs/s/towtni/agentic_pelican_on_bicycle_gemini_3_pro) - [Agentic Pelican on a Bicycle: Gemini 3 Pro](https://www.robert-glaser.de/agentic-pelican-on-a-bicycle-gemini-3-pro/)
* [2025-11-20, 09:52:11](https://news.ycombinator.com/item?id=45990934) - [Interactive World History Atlas Since 3000 BC](http://geacron.com/home-en/)
* [2025-11-20, 09:52:00](https://soylentnews.org/article.pl?sid=25/11/18/1210237&amp;from=rss) - [Floating Solar Panels Show Promise, but Environmental Impacts Vary by Location](https://soylentnews.org/article.pl?sid=25/11/18/1210237&amp;from=rss)
* [2025-11-20, 06:37:50](https://lobste.rs/s/esyfcl/battery_included_hacker_s_file_manager) - [A battery included hacker&apos;s file manager with VIM inspired keybind in a single binary](https://github.com/houqp/kiorg)
* [2025-11-20, 05:04:00](https://soylentnews.org/article.pl?sid=25/11/18/125234&amp;from=rss) - [The Intel 4004 Was the First Microprocessor, Right? ](https://soylentnews.org/article.pl?sid=25/11/18/125234&amp;from=rss)
* [2025-11-20, 04:01:47](https://lobste.rs/s/ua1kvs/rfc_hub) - [RFC Hub](https://rfchub.app/)
* [2025-11-20, 02:47:13](https://news.ycombinator.com/item?id=45988278) - [50th Anniversary of BitBLT](https://mastodon.sdf.org/@fvzappa/115574872559813280)
* [2025-11-20, 01:09:53](https://lobste.rs/s/dtzplf/lions_operating_system) - [The Lions Operating System](https://lionsos.org/)
* [2025-11-20, 00:18:00](https://soylentnews.org/article.pl?sid=25/11/18/120241&amp;from=rss) - [Full Metal Modine](https://soylentnews.org/article.pl?sid=25/11/18/120241&amp;from=rss)
* [2025-11-19, 23:21:45](https://lobste.rs/s/uoekej/we_re_now_moving_from_openbsd_freebsd_for) - [We&apos;re (now) moving from OpenBSD to FreeBSD for firewalls](https://utcc.utoronto.ca/~cks/space/blog/sysadmin/OpenBSDToFreeBSDMove)
* [2025-11-19, 22:16:41](https://lobste.rs/s/amboaj/disallow_code_usage_with_custom_clippy) - [Disallow code usage with a custom `clippy.toml`](https://www.schneems.com/2025/11/19/find-accidental-code-usage-with-a-custom-clippytoml/)
* [2025-11-19, 20:09:30](https://news.ycombinator.com/item?id=45984461) - [Show HN: F32 – An Extremely Small ESP32 Board](https://github.com/PegorK/f32)
* [2025-11-19, 19:36:00](https://soylentnews.org/article.pl?sid=25/11/18/113239&amp;from=rss) - [Big Tech Wants Direct Access to Our Brains](https://soylentnews.org/article.pl?sid=25/11/18/113239&amp;from=rss)
* [2025-11-19, 18:42:54](https://lobste.rs/s/0m6yln/what_killed_perl) - [What Killed Perl?](https://entropicthoughts.com/what-killed-perl)
* [2025-11-19, 14:49:00](https://soylentnews.org/article.pl?sid=25/11/18/0121255&amp;from=rss) - [FPGA Based IBM-PC-XT](https://soylentnews.org/article.pl?sid=25/11/18/0121255&amp;from=rss)
* [2025-11-19, 14:03:35](https://lobste.rs/s/jlf6y8/what_makes_intro_crafting_interpreters) - [What Makes the Intro to Crafting Interpreters so Good?](https://refactoringenglish.com/blog/crafting-interpreters-intro/)
* [2025-11-19, 10:01:00](https://soylentnews.org/article.pl?sid=25/11/18/0113223&amp;from=rss) - [Canonical Extends Ubuntu Support to 15 Years](https://soylentnews.org/article.pl?sid=25/11/18/0113223&amp;from=rss)
* [2025-11-19, 09:10:07](https://lobste.rs/s/gj8uup/static_web_hosting_on_intel_n150_freebsd) - [Static Web Hosting on the Intel N150: FreeBSD, SmartOS, NetBSD, OpenBSD and Linux Compared](https://it-notes.dragas.net/2025/11/19/static-web-hosting-intel-n150-freebsd-smartos-netbsd-openbsd-linux/)
* [2025-11-19, 07:13:00](https://news.ycombinator.com/item?id=45976693) - [Free interactive tool that shows you how PCIe lanes work on motherboards](https://mobomaps.com)
* [2025-11-19, 05:16:00](https://soylentnews.org/article.pl?sid=25/11/18/018202&amp;from=rss) - [Mozilla Unveils Plans for New &apos;AI Window&apos; Browsing Mode in Firefox, Opens Signups](https://soylentnews.org/article.pl?sid=25/11/18/018202&amp;from=rss)
* [2025-11-19, 00:31:00](https://soylentnews.org/article.pl?sid=25/11/18/014241&amp;from=rss) - [Raccoons Are Showing Early Signs of Domestication](https://soylentnews.org/article.pl?sid=25/11/18/014241&amp;from=rss)
* [2025-11-18, 19:47:00](https://soylentnews.org/article.pl?sid=25/11/17/119215&amp;from=rss) - [DHS Offers “Disturbing New Excuses” to Seize Kids’ Biometric Data, Expert Says](https://soylentnews.org/article.pl?sid=25/11/17/119215&amp;from=rss)
* [2025-11-18, 15:04:00](https://soylentnews.org/article.pl?sid=25/11/17/0246249&amp;from=rss) - [The Data Center Resistance Has Arrived](https://soylentnews.org/article.pl?sid=25/11/17/0246249&amp;from=rss)
* [2025-11-18, 10:23:00](https://soylentnews.org/article.pl?sid=25/11/17/0243214&amp;from=rss) - [Google Settlement With Epic Caps Play Store Fees, Boosts Other Android App Stores](https://soylentnews.org/article.pl?sid=25/11/17/0243214&amp;from=rss)
* [2025-11-18, 10:17:20](https://news.ycombinator.com/item?id=45963350) - [Okta&apos;s NextJS-0auth troubles](https://joshua.hu/ai-slop-okta-nextjs-0auth-security-vulnerability)
* [2025-11-18, 05:37:00](https://soylentnews.org/article.pl?sid=25/11/17/0240210&amp;from=rss) - [Nvidia’s Jensen Huang: China will Surpass U.S. in AI Race Through ENERGY](https://soylentnews.org/article.pl?sid=25/11/17/0240210&amp;from=rss)
* [2025-11-18, 00:53:00](https://soylentnews.org/article.pl?sid=25/11/16/1340211&amp;from=rss) - [Starshield Satellite Constellation Emitting Unusual Radio Signals](https://soylentnews.org/article.pl?sid=25/11/16/1340211&amp;from=rss)
* [2025-11-17, 22:15:44](https://news.ycombinator.com/item?id=45958988) - [Show HN: My hobby OS that runs Minecraft](https://astral-os.org/posts/2025/10/31/astral-minecraft.html)
* [2025-11-17, 20:14:00](https://soylentnews.org/article.pl?sid=25/11/16/1329214&amp;from=rss) - [Microsoft: the Company Doesn&apos;t Have Enough Electricity to Install All the AI GPUs in its Inventory](https://soylentnews.org/article.pl?sid=25/11/16/1329214&amp;from=rss)
* [2025-11-17, 20:13:54](https://news.ycombinator.com/item?id=45957743) - [Two recently found works of J.S. Bach presented in Leipzig [video]](https://www.youtube.com/watch?v=4hXzUGYIL9M#t=15m19s)
* [2025-11-17, 15:33:00](https://soylentnews.org/article.pl?sid=25/11/16/1317229&amp;from=rss) - [Lawmakers Want to Ban VPNs—And They Have No Idea What They&apos;re Doing](https://soylentnews.org/article.pl?sid=25/11/16/1317229&amp;from=rss)
* [2025-11-17, 10:44:00](https://soylentnews.org/article.pl?sid=25/11/16/1316249&amp;from=rss) - [NVIDIA 580.105.08 Linux Graphics Driver Released With a New Environment Variable](https://soylentnews.org/article.pl?sid=25/11/16/1316249&amp;from=rss)
* [2025-11-17, 06:01:00](https://soylentnews.org/article.pl?sid=25/11/16/1311207&amp;from=rss) - [A Spine-Tingling Discovery: This Dinosaur Had Spiked Body Armor](https://soylentnews.org/article.pl?sid=25/11/16/1311207&amp;from=rss)
* [2025-11-17, 01:14:00](https://soylentnews.org/article.pl?sid=25/11/15/0741250&amp;from=rss) - [Devuan Version 6.0 \&quot;Excalibur\&quot; is Available Now](https://soylentnews.org/article.pl?sid=25/11/15/0741250&amp;from=rss)
