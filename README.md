# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Science Collaborations

* [Study Shows How Earthquake Monitors Can Track Space Junk Through Sonic Booms](https://science.slashdot.org/story/26/01/24/014216/study-shows-how-earthquake-monitors-can-track-space-junk-through-sonic-booms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A new study reveals the innovative use of earthquake monitoring equipment for tracking space debris through sonic booms, broadening the potential applications of existing technologies.

* [New Filtration Technology Could Be Gamechanger In Removal of PFAS 'Forever Chemicals'](https://science.slashdot.org/story/26/01/24/002216/new-filtration-technology-could-be-gamechanger-in-removal-of-pfas-forever-chemicals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Researchers have developed a new filtration technology aimed at effectively removing harmful 'forever chemicals,' a significant step toward environmental conservation.

## Economic and Policy Changes

* [When Order Matters: How A Single DNS Change Broke The Internet For Millions](https://soylentnews.org/article.pl?sid=26/01/22/121252&amp;from=rss) - A single DNS configuration change led to widespread internet disruptions, highlighting the fragile interconnectedness of the web.

* [California Becomes First State To Join WHO Disease Network After US Exit](https://yro.slashdot.org/story/26/01/23/2350246/california-becomes-first-state-to-join-who-disease-network-after-us-exit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - In a landmark decision amidst global health concerns, California independently joins the WHO Disease Network following the US's withdrawal.

* [Campaigner Launches $2 Billion Legal Action In UK Against Apple Over Wallet's 'Hidden Fees'](https://news.slashdot.org/story/26/01/23/2328228/campaigner-launches-2-billion-legal-action-in-uk-against-apple-over-wallets-hidden-fees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A consumer rights advocate seeks $2 billion in a legal battle against Apple for allegedly charging excessive hidden fees on its digital wallet.

## Privacy and Surveillance

* [Justice Department Opens Criminal Probe Into Silicon Valley Spy Allegations](https://yro.slashdot.org/story/26/01/23/2317211/justice-department-opens-criminal-probe-into-silicon-valley-spy-allegations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The US Justice Department has launched a criminal investigation into allegations of corporate espionage within Silicon Valley's tech industry.

* [TikTok Is Now Collecting Even More Data About Its Users](https://yro.slashdot.org/story/26/01/23/236200/tiktok-is-now-collecting-even-more-data-about-its-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - TikTok has intensified scrutiny over its privacy practices by collecting even more user data, sparking fresh privacy concerns.

## Innovative Tools and Interfaces

* [Visualizing K-Way Merge: An Interactive Guide to Database Sorting](http://justinhj.github.io/2026/01/19/visualizing-k-way-merge.html) - An educational interactive guide illustrates techniques for database sorting using K-Way merge.

* [Comma openpilot – Open source driver-assistance](https://comma.ai) - Learn about Comma openpilot, an open-source platform for enhancing driver assistance systems with impressive potential.

* [Rheo - Typesetting and static site engine based on Typst](https://github.com/freecomputinglab/rheo) - Explore the new 'Rheo' engine, combining typesetting and static site generation with innovative features stemming from Typst.

## Breaking Boundaries in Energy and Math

* [Solar and Wind Overtake Fossil Fuels in the EU](https://hardware.slashdot.org/story/26/01/23/127254/solar-and-wind-overtake-fossil-fuels-in-the-eu?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - In a landmark success, the European Union sustains higher energy output from solar and wind sources compared to fossil fuels.

* [Proof of Corn](https://proofofcorn.com/) - A unique exploration of cryptocurrency, where Proof of Corn delves into alternative methodologies and concepts.

## Impacts of AI, Culture, and Education

* [Wikipedia Volunteers Spent Years Cataloging AI Tells. Now There's a Plugin to Avoid Them.](https://soylentnews.org/article.pl?sid=26/01/22/0422248&amp;from=rss) - Dedicated Wikipedia volunteers who documented indicative patterns of AI have now launched a plugin designed to counteract AI imitation.

* [Professors Issue Warning Over Surge in College Students Unable to Read](https://soylentnews.org/article.pl?sid=26/01/21/0136237&amp;from=rss) - Alarm bells are ringing in academia as educators observe a growing trend of diminished reading skills among college students.

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

* [2026-01-24, 07:00:00](https://science.slashdot.org/story/26/01/24/014216/study-shows-how-earthquake-monitors-can-track-space-junk-through-sonic-booms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Study Shows How Earthquake Monitors Can Track Space Junk Through Sonic Booms](https://science.slashdot.org/story/26/01/24/014216/study-shows-how-earthquake-monitors-can-track-space-junk-through-sonic-booms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-24, 04:01:00](https://soylentnews.org/article.pl?sid=26/01/22/121252&amp;from=rss) - [When Order Matters: How A Single DNS Change Broke The Internet For Millions](https://soylentnews.org/article.pl?sid=26/01/22/121252&amp;from=rss)
* [2026-01-24, 03:30:00](https://science.slashdot.org/story/26/01/24/002216/new-filtration-technology-could-be-gamechanger-in-removal-of-pfas-forever-chemicals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Filtration Technology Could Be Gamechanger In Removal of PFAS &apos;Forever Chemicals&apos;](https://science.slashdot.org/story/26/01/24/002216/new-filtration-technology-could-be-gamechanger-in-removal-of-pfas-forever-chemicals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-24, 02:59:42](https://news.ycombinator.com/item?id=46740644) - [SEC obtains final consent judgments against former FTX and Alameda executives](https://www.sec.gov/enforcement-litigation/litigation-releases/lr-26450)
* [2026-01-24, 02:19:41](https://lobste.rs/s/z55cm5/considering_strictly_monotonic_time) - [Considering Strictly Monotonic Time](https://matklad.github.io/2026/01/23/strictly-monotonic-time.html)
* [2026-01-24, 02:14:40](https://lobste.rs/s/9nwumc/december_servo) - [December in Servo](https://servo.org/blog/2026/01/23/december-in-servo/)
* [2026-01-24, 02:02:00](https://yro.slashdot.org/story/26/01/23/2350246/california-becomes-first-state-to-join-who-disease-network-after-us-exit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California Becomes First State To Join WHO Disease Network After US Exit](https://yro.slashdot.org/story/26/01/23/2350246/california-becomes-first-state-to-join-who-disease-network-after-us-exit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-24, 01:57:42](https://lobste.rs/s/ujoilh/visualizing_k_way_merge_interactive) - [Visualizing K-Way Merge: An Interactive Guide to Database Sorting](http://justinhj.github.io/2026/01/19/visualizing-k-way-merge.html)
* [2026-01-24, 01:28:30](https://lobste.rs/s/m8uv5t/why_god_can_t_play_link_past) - [Why a God Can&apos;t Play A Link to the Past](https://www.youtube.com/watch?v=nQ6e2_QKnmg)
* [2026-01-24, 01:25:00](https://news.slashdot.org/story/26/01/23/2328228/campaigner-launches-2-billion-legal-action-in-uk-against-apple-over-wallets-hidden-fees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Campaigner Launches $2 Billion Legal Action In UK Against Apple Over Wallet&apos;s &apos;Hidden Fees&apos;](https://news.slashdot.org/story/26/01/23/2328228/campaigner-launches-2-billion-legal-action-in-uk-against-apple-over-wallets-hidden-fees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-24, 01:00:50](https://news.ycombinator.com/item?id=46740029) - [Comma openpilot – Open source driver-assistance](https://comma.ai)
* [2026-01-24, 01:00:48](https://news.ycombinator.com/item?id=46740028) - [Noora Health (YC W14) Is Hiring AI/ML Engineer](https://www.ycombinator.com/companies/noora-health/jobs/2B4RxLG-ai-ml-engineer)
* [2026-01-24, 00:45:00](https://yro.slashdot.org/story/26/01/23/2317211/justice-department-opens-criminal-probe-into-silicon-valley-spy-allegations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Justice Department Opens Criminal Probe Into Silicon Valley Spy Allegations](https://yro.slashdot.org/story/26/01/23/2317211/justice-department-opens-criminal-probe-into-silicon-valley-spy-allegations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-24, 00:02:00](https://yro.slashdot.org/story/26/01/23/236200/tiktok-is-now-collecting-even-more-data-about-its-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [TikTok Is Now Collecting Even More Data About Its Users](https://yro.slashdot.org/story/26/01/23/236200/tiktok-is-now-collecting-even-more-data-about-its-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-23, 23:55:27](https://lobste.rs/s/dspppf/how_i_estimate_work_as_staff_software) - [How I estimate work as a staff software engineer](https://www.seangoedecke.com/how-i-estimate-work/)
* [2026-01-23, 23:20:00](https://yro.slashdot.org/story/26/01/23/1928230/white-house-labels-altered-photo-of-arrested-minnesota-protester-a-meme?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [White House Labels Altered Photo of Arrested Minnesota Protester a &apos;Meme&apos;](https://yro.slashdot.org/story/26/01/23/1928230/white-house-labels-altered-photo-of-arrested-minnesota-protester-a-meme?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-23, 23:16:00](https://soylentnews.org/article.pl?sid=26/01/22/1148259&amp;from=rss) - [Caltech-Led Team Finds New Superconducting State](https://soylentnews.org/article.pl?sid=26/01/22/1148259&amp;from=rss)
* [2026-01-23, 22:40:00](https://tech.slashdot.org/story/26/01/23/1915259/powershell-architect-retires-after-decades-at-the-prompt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [PowerShell Architect Retires After Decades At the Prompt](https://tech.slashdot.org/story/26/01/23/1915259/powershell-architect-retires-after-decades-at-the-prompt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-23, 22:28:01](https://news.ycombinator.com/item?id=46738853) - [Wilson Lin on FastRender: a browser built by parallel agents](https://simonwillison.net/2026/Jan/23/fastrender/)
* [2026-01-23, 22:02:00](https://it.slashdot.org/story/26/01/23/1910235/microsoft-gave-fbi-a-set-of-bitlocker-encryption-keys-to-unlock-suspects-laptops?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Gave FBI a Set of BitLocker Encryption Keys To Unlock Suspects&apos; Laptops](https://it.slashdot.org/story/26/01/23/1910235/microsoft-gave-fbi-a-set-of-bitlocker-encryption-keys-to-unlock-suspects-laptops?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-23, 21:25:00](https://slashdot.org/story/26/01/23/1855256/toilet-maker-totos-shares-get-unlikely-boost-from-ai-rush?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Toilet Maker Toto&apos;s Shares Get Unlikely Boost From AI Rush](https://slashdot.org/story/26/01/23/1855256/toilet-maker-totos-shares-get-unlikely-boost-from-ai-rush?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-23, 21:08:55](https://news.ycombinator.com/item?id=46737957) - [Mental Models (2018)](https://fs.blog/mental-models/)
* [2026-01-23, 20:42:36](https://news.ycombinator.com/item?id=46737630) - [Unrolling the Codex agent loop](https://openai.com/index/unrolling-the-codex-agent-loop/)
* [2026-01-23, 20:41:00](https://slashdot.org/story/26/01/23/0925259/the-great-graduate-job-drought?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Great Graduate Job Drought](https://slashdot.org/story/26/01/23/0925259/the-great-graduate-job-drought?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-23, 20:27:58](https://news.ycombinator.com/item?id=46737447) - [Banned C++ features in Chromium](https://chromium.googlesource.com/chromium/src/+/main/styleguide/c++/c++-features.md)
* [2026-01-23, 20:01:00](https://news.slashdot.org/story/26/01/23/1218254/wall-street-pushes-solo-401ks-as-more-americans-work-for-themselves?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wall Street Pushes Solo 401(k)s as More Americans Work for Themselves](https://news.slashdot.org/story/26/01/23/1218254/wall-street-pushes-solo-401ks-as-more-americans-work-for-themselves?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-23, 19:22:00](https://tech.slashdot.org/story/26/01/23/1213224/china-makes-too-many-cars-and-the-world-is-increasingly-ok-with-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Makes Too Many Cars, and the World Is Increasingly OK With It](https://tech.slashdot.org/story/26/01/23/1213224/china-makes-too-many-cars-and-the-world-is-increasingly-ok-with-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-23, 18:47:19](https://lobste.rs/s/rua81a/open_widevine_support_added_chromium) - [(Open) Widevine support added to the chromium port](https://undeadly.org/cgi?action=article;sid=20260118112808)
* [2026-01-23, 18:44:00](https://hardware.slashdot.org/story/26/01/23/127254/solar-and-wind-overtake-fossil-fuels-in-the-eu?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Solar and Wind Overtake Fossil Fuels in the EU](https://hardware.slashdot.org/story/26/01/23/127254/solar-and-wind-overtake-fossil-fuels-in-the-eu?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-23, 18:32:00](https://soylentnews.org/article.pl?sid=26/01/22/1144249&amp;from=rss) - [Starlink in Iran: How the Regime Jams the Service and What Helps Against It](https://soylentnews.org/article.pl?sid=26/01/22/1144249&amp;from=rss)
* [2026-01-23, 18:25:17](https://lobste.rs/s/dsjhhw/isometric_nyc) - [Isometric NYC](https://cannoneyed.com/projects/isometric-nyc)
* [2026-01-23, 18:20:43](https://lobste.rs/s/3zsexb/rheo_typesetting_static_site_engine) - [Rheo - Typesetting and static site engine based on Typst](https://github.com/freecomputinglab/rheo)
* [2026-01-23, 18:08:11](https://news.ycombinator.com/item?id=46735644) - [New YC homepage](https://www.ycombinator.com/)
* [2026-01-23, 18:00:00](https://news.slashdot.org/story/26/01/23/123218/toronto-man-posed-as-pilot-to-rack-up-hundreds-of-free-flights-prosecutors-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Toronto Man Posed as Pilot To Rack Up Hundreds of Free Flights, Prosecutors Say](https://news.slashdot.org/story/26/01/23/123218/toronto-man-posed-as-pilot-to-rack-up-hundreds-of-free-flights-prosecutors-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-23, 17:58:56](https://news.ycombinator.com/item?id=46735545) - [Microsoft gave FBI set of BitLocker encryption keys to unlock suspects&apos; laptops](https://techcrunch.com/2026/01/23/microsoft-gave-fbi-a-set-of-bitlocker-encryption-keys-to-unlock-suspects-laptops-reports/)
* [2026-01-23, 17:56:31](https://news.ycombinator.com/item?id=46735511) - [Proof of Corn](https://proofofcorn.com/)
* [2026-01-23, 17:54:45](https://news.ycombinator.com/item?id=46735489) - [Route leak incident on January 22, 2026](https://blog.cloudflare.com/route-leak-incident-january-22-2026/)
* [2026-01-23, 17:29:53](https://news.ycombinator.com/item?id=46735179) - [Killing the ISP Appliance: An eBPF/XDP Approach to Distributed BNG](https://markgascoyne.co.uk/posts/ebpf-bng/)
* [2026-01-23, 17:26:57](https://news.ycombinator.com/item?id=46735139) - [Nobody likes lag: How to make low-latency dev sandboxes](https://www.compyle.ai/blog/nobody-likes-lag/)
* [2026-01-23, 17:14:20](https://lobste.rs/s/7jshu6/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/7jshu6/what_are_you_doing_this_weekend)
* [2026-01-23, 16:45:06](https://lobste.rs/s/cqrtbd/portable_cartesian_brace_expansion_your) - [Portable (cartesian) brace expansion in your shell](https://neosmart.net/blog/portable-cartesian-brace-expansion-in-your-shell/)
* [2026-01-23, 16:19:18](https://news.ycombinator.com/item?id=46734302) - [Gas Town&apos;s agent patterns, design bottlenecks, and vibecoding at scale](https://maggieappleton.com/gastown)
* [2026-01-23, 16:01:53](https://lobste.rs/s/2x5eee/achieving_0_cve_os_for_vms_end_traditional) - [Achieving a 0-CVE OS for VMs: The End of Traditional Patching](https://tuananh.net/2026/01/21/achieving-a-0-cve-os-for-vms-the-end-of-traditional-patching/)
* [2026-01-23, 15:26:33](https://news.ycombinator.com/item?id=46733624) - [The tech monoculture is finally breaking](http://www.jasonwillems.com/technology/2025/12/17/Tech-Is-Fun-Again/)
* [2026-01-23, 15:03:01](https://news.ycombinator.com/item?id=46733301) - [Waypoint-1: Real-Time Interactive Video Diffusion from Overworld](https://huggingface.co/blog/waypoint-1)
* [2026-01-23, 14:45:54](https://lobste.rs/s/uluua1/scaling_postgresql_power_800_million) - [Scaling PostgreSQL to power 800 million ChatGPT users](https://openai.com/index/scaling-postgresql/)
* [2026-01-23, 14:34:46](https://news.ycombinator.com/item?id=46732967) - [KORG phase8 – Acoustic Synthesizer](https://www.korg.com/us/products/dj/phase8/)
* [2026-01-23, 14:04:59](https://lobste.rs/s/wn2gyb/firefox_linux_2025) - [Firefox &amp; Linux in 2025](https://mastransky.wordpress.com/2026/01/23/firefox-linux-in-2025/)
* [2026-01-23, 13:56:22](https://lobste.rs/s/b95hk4/interfaces_traits_c) - [Interfaces and traits in C](https://antonz.org/interfaces-in-c/)
* [2026-01-23, 13:45:00](https://soylentnews.org/article.pl?sid=26/01/22/1141230&amp;from=rss) - [Physics of Foam Strangely Resembles AI Training](https://soylentnews.org/article.pl?sid=26/01/22/1141230&amp;from=rss)
* [2026-01-23, 13:31:49](https://lobste.rs/s/5ogdk7/what_has_docker_become) - [What has Docker become?](https://tuananh.net/2026/01/20/what-has-docker-become/)
* [2026-01-23, 13:26:09](https://lobste.rs/s/x0qrlm/agents_md_as_dark_signal) - [AGENTS.md as a dark signal](https://joshmock.com/post/2026-agents-md-as-a-dark-signal/)
* [2026-01-23, 13:07:11](https://lobste.rs/s/zhsi80/gnu_guix_1_5_0_released) - [GNU Guix 1.5.0 released](https://guix.gnu.org/en/blog/2026/gnu-guix-1.5.0-released/)
* [2026-01-23, 11:54:53](https://news.ycombinator.com/item?id=46731432) - [Show HN: Whosthere: A LAN discovery tool with a modern TUI, written in Go](https://github.com/ramonvermeulen/whosthere)
* [2026-01-23, 11:04:18](https://news.ycombinator.com/item?id=46731068) - [Ask HN: What&apos;s the current best local/open speech-to-speech setup?](https://news.ycombinator.com/item?id=46731068)
* [2026-01-23, 10:39:09](https://news.ycombinator.com/item?id=46730885) - [Booting from a vinyl record (2020)](https://boginjr.com/it/sw/dev/vinyl-boot/)
* [2026-01-23, 10:00:33](https://lobste.rs/s/qhickw/explainer_tree_sitter_vs_lsp) - [Explainer: Tree-sitter vs. LSP](https://lambdaland.org/posts/2026-01-21_tree-sitter_vs_lsp/)
* [2026-01-23, 08:59:00](https://soylentnews.org/article.pl?sid=26/01/22/0422248&amp;from=rss) - [Wikipedia Volunteers Spent Years Cataloging AI Tells. Now There&apos;s a Plugin to Avoid Them.](https://soylentnews.org/article.pl?sid=26/01/22/0422248&amp;from=rss)
* [2026-01-23, 08:16:31](https://lobste.rs/s/uujlga/webracket_language_is_subset_racket) - [The WebRacket language is a subset of Racket that compiles to WebAssembly](https://github.com/soegaard/webracket)
* [2026-01-23, 07:40:07](https://lobste.rs/s/uskrd1/maintaining_shadow_branches_for_github) - [Maintaining shadow branches for GitHub PRs](https://maskray.me/blog/2026-01-22-maintaining-shadow-branches-for-github-prs)
* [2026-01-23, 07:01:29](https://news.ycombinator.com/item?id=46729368) - [Proton Spam and the AI Consent Problem](https://dbushell.com/2026/01/22/proton-spam/)
* [2026-01-23, 06:34:12](https://lobste.rs/s/iyowrd/selectively_disabling_http_1_0_http_1_1) - [Selectively Disabling HTTP/1.0 and HTTP/1.1](https://markmcb.com/web/selectively_disabling_http_1/)
* [2026-01-23, 04:12:00](https://soylentnews.org/article.pl?sid=26/01/22/043242&amp;from=rss) - [Nvidia Wanted Pirated Book Stash Access](https://soylentnews.org/article.pl?sid=26/01/22/043242&amp;from=rss)
* [2026-01-23, 02:39:31](https://lobste.rs/s/go7npe/why_does_ssh_send_100_packets_per) - [Why does SSH send 100 packets per keystroke?](https://eieio.games/blog/ssh-sends-100-packets-per-keystroke/)
* [2026-01-23, 00:12:09](https://lobste.rs/s/ijyacx/overrun_with_ai_slop_curl_scraps_bug) - [Overrun with AI slop, cURL scraps bug bounties to ensure \&quot;intact mental health\&quot;](https://arstechnica.com/security/2026/01/overrun-with-ai-slop-curl-scraps-bug-bounties-to-ensure-intact-mental-health/)
* [2026-01-22, 23:28:00](https://soylentnews.org/article.pl?sid=26/01/22/0355223&amp;from=rss) - [Textbooks Were Wrong: Human Hair Doesn&apos;t Grow the Way Scientists Thought](https://soylentnews.org/article.pl?sid=26/01/22/0355223&amp;from=rss)
* [2026-01-22, 23:23:54](https://lobste.rs/s/jumnjp/we_built_museum_exhibit_about_1990s_game) - [We built a museum exhibit about a 1990s game hint line, with a physical binder](https://yarnspinner.dev/blog/hint-line-93/)
* [2026-01-22, 21:54:02](https://news.ycombinator.com/item?id=46725632) - [Anthropic Economic Index report: economic primitives](https://www.anthropic.com/research/anthropic-economic-index-january-2026-report)
* [2026-01-22, 20:05:45](https://lobste.rs/s/7oqiqi/ssh_has_no_host_header) - [SSH has no Host header](https://blog.exe.dev/ssh-host-header)
* [2026-01-22, 18:40:00](https://soylentnews.org/article.pl?sid=26/01/21/0150257&amp;from=rss) - [Cows Use Tools](https://soylentnews.org/article.pl?sid=26/01/21/0150257&amp;from=rss)
* [2026-01-22, 16:31:47](https://news.ycombinator.com/item?id=46721488) - [Show HN: Text-to-video model from scratch (2 brothers, 2 years, 2B params)](https://huggingface.co/collections/Linum-AI/linum-v2-2b-text-to-video)
* [2026-01-22, 13:46:00](https://soylentnews.org/article.pl?sid=26/01/21/0147238&amp;from=rss) - [AI Bathroom Monitors? Welcome To America’s New Surveillance High Schools](https://soylentnews.org/article.pl?sid=26/01/21/0147238&amp;from=rss)
* [2026-01-22, 09:07:00](https://soylentnews.org/article.pl?sid=26/01/21/0141201&amp;from=rss) - [France Records More Deaths Than Births for First Time Since End of Second World War](https://soylentnews.org/article.pl?sid=26/01/21/0141201&amp;from=rss)
* [2026-01-22, 04:16:00](https://soylentnews.org/article.pl?sid=26/01/21/0136237&amp;from=rss) - [Professors Issue Warning Over Surge in College Students Unable to Read](https://soylentnews.org/article.pl?sid=26/01/21/0136237&amp;from=rss)
* [2026-01-21, 23:34:00](https://soylentnews.org/article.pl?sid=26/01/19/1628204&amp;from=rss) - [The Science That Casts Doubt on Claims About Microplastics](https://soylentnews.org/article.pl?sid=26/01/19/1628204&amp;from=rss)
* [2026-01-21, 18:49:00](https://soylentnews.org/article.pl?sid=26/01/19/1619249&amp;from=rss) - [Hobbies Don&apos;t Just Improve Personal Lives, They Can Boost Workplace Creativity Too](https://soylentnews.org/article.pl?sid=26/01/19/1619249&amp;from=rss)
* [2026-01-21, 14:06:00](https://soylentnews.org/article.pl?sid=26/01/19/1618219&amp;from=rss) - [IT Spending Set to Hit $1.4 Trillion in 2026 - but What Exactly Are We Spending It On?](https://soylentnews.org/article.pl?sid=26/01/19/1618219&amp;from=rss)
* [2026-01-21, 09:20:00](https://soylentnews.org/article.pl?sid=26/01/19/1615238&amp;from=rss) - [The Places We Make Memories Help Us Inscribe Them](https://soylentnews.org/article.pl?sid=26/01/19/1615238&amp;from=rss)
* [2026-01-21, 04:34:00](https://soylentnews.org/article.pl?sid=26/01/19/1613240&amp;from=rss) - [Proton VPN Kills Off Legacy OpenVPN Configs in Push for Better Security](https://soylentnews.org/article.pl?sid=26/01/19/1613240&amp;from=rss)
* [2026-01-20, 23:51:00](https://soylentnews.org/article.pl?sid=26/01/19/166239&amp;from=rss) - [Building the World&apos;s First Graviton Detector](https://soylentnews.org/article.pl?sid=26/01/19/166239&amp;from=rss)
* [2026-01-20, 19:06:00](https://soylentnews.org/article.pl?sid=26/01/19/0533234&amp;from=rss) - [China&apos;s Wind Farms Are Doing a Lot More Than Generating Electricity](https://soylentnews.org/article.pl?sid=26/01/19/0533234&amp;from=rss)
* [2026-01-20, 17:16:49](https://news.ycombinator.com/item?id=46694618) - [Internet Archive&apos;s Storage](https://blog.dshr.org/2026/01/internet-archives-storage.html)
* [2026-01-20, 14:22:00](https://soylentnews.org/article.pl?sid=26/01/19/046252&amp;from=rss) - [Mosquitoes&apos; Thirst for Human Blood Has Increased as Biodiversity Loss Worsens](https://soylentnews.org/article.pl?sid=26/01/19/046252&amp;from=rss)
* [2026-01-20, 09:34:00](https://soylentnews.org/article.pl?sid=26/01/19/0357224&amp;from=rss) - [New Studies Can Explain Why Comet 3I/Atlas Isn&apos;t an Alien (Probably)](https://soylentnews.org/article.pl?sid=26/01/19/0357224&amp;from=rss)
* [2026-01-20, 09:08:22](https://news.ycombinator.com/item?id=46689631) - [Extracting verified C++ from the Rocq theorem prover at Bloomberg](https://bloomberg.github.io/crane/)
* [2026-01-20, 04:44:00](https://soylentnews.org/article.pl?sid=26/01/18/0044243&amp;from=rss) - [Stellantis Drops Jeep, Chrysler Plug-in Hybrids Amid EV Sales Slowdown](https://soylentnews.org/article.pl?sid=26/01/18/0044243&amp;from=rss)
* [2026-01-20, 00:02:00](https://soylentnews.org/article.pl?sid=26/01/18/0043231&amp;from=rss) - [Anthropologists Offer New Evidence of Bipedalism in Long-Debated Fossil Discovery](https://soylentnews.org/article.pl?sid=26/01/18/0043231&amp;from=rss)
