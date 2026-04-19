# [News Summary](https://kherrick.github.io/news-summary/)

## Scientific and Technological Advancements

* [NIST scientists create 'any wavelength' lasers](https://www.nist.gov/news-events/news/2026/04/any-color-you-nist-scientists-create-any-wavelength-lasers-tiny-circuits) - A groundbreaking discovery enabling lasers to emit at any desired wavelength, with potential applications in a variety of fields.

* [Physicists Think They've Resolved the Proton Size Puzzle](https://soylentnews.org/article.pl?sid=26/04/16/1137236&amp;from=rss) - Researchers believe they've resolved a long-standing mystery surrounding the exact size of protons.

* [NASA Restarts Work To Support Europe's Uncrewed Trip To Mars After Years of Setbacks](https://science.slashdot.org/story/26/04/18/0051201/nasa-restarts-work-to-support-europes-uncrewed-trip-to-mars-after-years-of-setbacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - NASA resumes collaboration with Europe on a groundbreaking mission to Mars.

## AI and Machine Learning Innovations

* [Scientists Invented a Fake Disease. AI Told People It Was Real](https://soylentnews.org/article.pl?sid=26/04/17/0337240&amp;from=rss) - A critical look at how AI can contribute to misinformation when used irresponsibly.

* [New Movie Trailer Shows First AI-Generated Performance By a Major Star: the Late Val Kilmer](https://entertainment.slashdot.org/story/26/04/18/2010257/new-movie-trailer-shows-first-ai-generated-performance-by-a-major-star-the-late-val-kilmer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - First AI-generated performance of a deceased actor highlights ongoing evolution in entertainment technology.

* [Shuttered Startups Are Selling Old Slack Chats, Emails To AI Companies](https://yro.slashdot.org/story/26/04/18/014244/shuttered-startups-are-selling-old-slack-chats-emails-to-ai-companies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Exploration of a rising trend where defunct startups monetize their archived data for use in AI.

## Cybersecurity and Privacy Concerns

* [Anthropic Claude Code Leak Reveals Critical Command Injection Vulnerabilities](https://beyondmachines.net/event_details/anthropic-claude-code-leak-reveals-critical-command-injection-vulnerabilities-e-6-c-1-k/gD2P6Ple2L) - Examination of serious vulnerabilities discovered in Anthropic Claude's code.

* [30 WordPress Plugins Turned Into Malware After Ownership Change](https://it.slashdot.org/story/26/04/18/0552210/30-wordpress-plugins-turned-into-malware-after-ownership-change?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A concerning development in plugin security highlights the risk of ownership changes.

* [It Is Time to Ban the Sale of Precise Geolocation Data](https://www.lawfaremedia.org/article/it-is-time-to-ban-the-sale-of-precise-geolocation) - A call for regulation on the sale of detailed geolocation data to protect user privacy.

## Innovative Applications and Historical Discoveries

* [Running a Minecraft Server and More on a 1960s UNIVAC Computer](https://farlow.dev/2026/04/17/running-a-minecraft-server-and-more-on-a-1960s-univac-computer) - A creative combination of retro computing and modern gaming.

* [The electromechanical angle computer inside the B-52 bomber's star tracker](http://www.righto.com/2026/04/B-52-star-tracker-angle-computer.html) - A dive into the inner workings of a crucial piece of military technology.

* [Remembering Zip Drives - the Trendy Storage Technology of the 1990s](https://hardware.slashdot.org/story/26/04/19/0222227/remembering-zip-drives---the-trendy-storage-technology-of-the-1990s?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A nostalgic look at the rise and fall of the once-popular storage medium.

## Environmental and Health Research

* [Irish Bog Plant Revives Ancient Remedy as a New Weapon Vs Superbugs](https://soylentnews.org/article.pl?sid=26/04/18/1847221&amp;from=rss) - How an ancient Irish remedy is being used to fight modern superbugs.

* [Fructose Isn't Just Sugar. It Acts More Like a Hormone](https://science.slashdot.org/story/26/04/18/0444250/fructose-isnt-just-sugar-it-acts-more-like-a-hormone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A study reveals new insights into the biological roles of fructose.

* [Critical Atlantic Current Significantly More Likely To Collapse Than Thought](https://science.slashdot.org/story/26/04/18/0056244/critical-atlantic-current-significantly-more-likely-to-collapse-than-thought?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Research highlights the increasing likelihood of a major shift in ocean currents with significant global implications.

## Policy and Social Issues

* [Keep Pushing: We Get 10 More Days to Reform Section 702](https://www.eff.org/deeplinks/2026/04/keep-pushing-we-get-10-more-days-reform-section-702) - An advocacy group calls for reforms to US surveillance policy as an extension looms.

* [US Congress Fails to Pass Long-Term FISA Extension, Authorizes It Through April 30](https://yro.slashdot.org/story/26/04/18/1834202/us-congress-fails-to-pass-long-term-fisa-extension-authorizes-it-through-april-30?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Legislative updates about the extension of FISA and the implications for surveillance regulation.

* [20-Year-Old Enters Prison for Historic Breach, Ransoming of Massive Student Database](https://yro.slashdot.org/story/26/04/18/156236/20-year-old-enters-prison-for-historic-breach-ransoming-of-massive-student-database?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Case study of a young cybercriminal's journey to prison for a significant data breach.

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

* [2026-04-19, 09:04:50](https://lobste.rs/s/x5hnnp/si_units_for_request_rate) - [SI Units for Request Rate](https://entropicthoughts.com/si-units-for-request-rate)
* [2026-04-19, 08:45:48](https://news.ycombinator.com/item?id=47822805) - [SPEAKE(a)R: Turn Speakers to Microphones for Fun and Profit [pdf] (2017)](https://www.usenix.org/system/files/conference/woot17/woot17-paper-guri.pdf)
* [2026-04-19, 08:03:00](https://soylentnews.org/article.pl?sid=26/04/18/1855201&amp;from=rss) - [Why the Phrase &apos;Super El Niño&apos; Makes Australian Climate Scientists Roll Their Eyes](https://soylentnews.org/article.pl?sid=26/04/18/1855201&amp;from=rss)
* [2026-04-19, 07:34:00](https://hardware.slashdot.org/story/26/04/19/0222227/remembering-zip-drives---the-trendy-storage-technology-of-the-1990s?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Remembering Zip Drives - the Trendy Storage Technology of the 1990s](https://hardware.slashdot.org/story/26/04/19/0222227/remembering-zip-drives---the-trendy-storage-technology-of-the-1990s?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-19, 07:32:29](https://lobste.rs/s/na7cxg/yojam_macos_default_browser_shim_routes) - [Yojam: a macOS default-browser shim that routes URLs through a rule engine](https://github.com/fluffypony/yojam)
* [2026-04-19, 07:05:17](https://news.ycombinator.com/item?id=47822356) - [Keep Pushing: We Get 10 More Days to Reform Section 702](https://www.eff.org/deeplinks/2026/04/keep-pushing-we-get-10-more-days-reform-section-702)
* [2026-04-19, 06:40:31](https://lobste.rs/s/uxjpyz/optimizing_xreferee_with_elemindex) - [Optimizing xreferee with elemIndex](https://brandonchinn178.github.io/posts/2026/04/17/optimizing-xreferee-with-elemindex/)
* [2026-04-19, 05:34:20](https://lobste.rs/s/vugypt/when_compilers_surprise_you) - [When compilers surprise you](https://xania.org/202512/24-cunning-clang)
* [2026-04-19, 03:34:00](https://slashdot.org/story/26/04/19/0136252/duolingo-ceo-says-theyve-stopped-tracking-employees-ai-use-for-performance-reviews?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Duolingo CEO Says They&apos;ve Stopped Tracking Employees&apos; AI Use for Performance Reviews](https://slashdot.org/story/26/04/19/0136252/duolingo-ceo-says-theyve-stopped-tracking-employees-ai-use-for-performance-reviews?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-19, 03:14:00](https://soylentnews.org/article.pl?sid=26/04/18/1847221&amp;from=rss) - [Irish Bog Plant Revives Ancient Remedy as a New Weapon Vs Superbugs](https://soylentnews.org/article.pl?sid=26/04/18/1847221&amp;from=rss)
* [2026-04-19, 02:50:43](https://news.ycombinator.com/item?id=47821429) - [The world in which IPv6 was a good design](https://apenwarr.ca/log/20170810)
* [2026-04-19, 01:34:00](https://science.slashdot.org/story/26/04/18/2227222/spacex-blue-origin-compete-for-artemis-iii-mission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX, Blue Origin Compete For &apos;Artemis III&apos; Mission](https://science.slashdot.org/story/26/04/18/2227222/spacex-blue-origin-compete-for-artemis-iii-mission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-19, 01:08:29](https://lobste.rs/s/dluyzo/electromechanical_angle_computer) - [The electromechanical angle computer inside the B-52 bomber&apos;s star tracker](http://www.righto.com/2026/04/B-52-star-tracker-angle-computer.html)
* [2026-04-19, 00:59:30](https://lobste.rs/s/nxfvyw/anthropic_claude_code_leak_reveals) - [Anthropic Claude Code Leak Reveals Critical Command Injection Vulnerabilities](https://beyondmachines.net/event_details/anthropic-claude-code-leak-reveals-critical-command-injection-vulnerabilities-e-6-c-1-k/gD2P6Ple2L)
* [2026-04-18, 23:47:45](https://news.ycombinator.com/item?id=47820531) - [NASA Shuts Off Instrument on Voyager 1 to Keep Spacecraft Operating](https://science.nasa.gov/blogs/voyager/2026/04/17/nasa-shuts-off-instrument-on-voyager-1-to-keep-spacecraft-operating/)
* [2026-04-18, 22:46:13](https://news.ycombinator.com/item?id=47820195) - [Zero-Copy GPU Inference from WebAssembly on Apple Silicon](https://abacusnoir.com/2026/04/18/zero-copy-gpu-inference-from-webassembly-on-apple-silicon/)
* [2026-04-18, 22:34:00](https://entertainment.slashdot.org/story/26/04/18/2010257/new-movie-trailer-shows-first-ai-generated-performance-by-a-major-star-the-late-val-kilmer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Movie Trailer Shows First AI-Generated Performance By a Major Star: the Late Val Kilmer](https://entertainment.slashdot.org/story/26/04/18/2010257/new-movie-trailer-shows-first-ai-generated-performance-by-a-major-star-the-late-val-kilmer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-18, 22:28:13](https://lobste.rs/s/8teb8e/pgque_zero_bloat_postgres_queue) - [PgQue: Zero-bloat Postgres queue](https://github.com/NikolayS/pgque)
* [2026-04-18, 22:26:00](https://soylentnews.org/article.pl?sid=26/04/17/0348237&amp;from=rss) - [Netgear Routers Seemingly Won&apos;t be Banned in the US After All](https://soylentnews.org/article.pl?sid=26/04/17/0348237&amp;from=rss)
* [2026-04-18, 21:50:48](https://news.ycombinator.com/item?id=47819823) - [My first impressions on ROCm and Strix Halo](https://blog.marcoinacio.com/posts/my-first-impressions-rocm-strix-halo/)
* [2026-04-18, 21:46:44](https://lobste.rs/s/nbt8uq/some_secret_management_belongs_your_http) - [Some secret management belongs in your HTTP proxy](https://blog.exe.dev/http-proxy-secrets)
* [2026-04-18, 21:34:00](https://tech.slashdot.org/story/26/04/18/0621217/old-cars-tell-tales-by-storing-data-thats-never-wiped?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Old Cars &apos;Tell Tales&apos; by Storing Data That&apos;s Never Wiped](https://tech.slashdot.org/story/26/04/18/0621217/old-cars-tell-tales-by-storing-data-thats-never-wiped?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-18, 20:54:17](https://news.ycombinator.com/item?id=47819453) - [NIST scientists create &apos;any wavelength&apos; lasers](https://www.nist.gov/news-events/news/2026/04/any-color-you-nist-scientists-create-any-wavelength-lasers-tiny-circuits)
* [2026-04-18, 20:42:29](https://news.ycombinator.com/item?id=47819369) - [Optimizing Ruby Path Methods](https://byroot.github.io/ruby/performance/2026/04/18/faster-paths.html)
* [2026-04-18, 20:34:00](https://developers.slashdot.org/story/26/04/18/0332245/fewer-us-college-students-major-in-cs-more-choose-data-science-engineering?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fewer US College Students Major in CS. More Choose Data Science, Engineering](https://developers.slashdot.org/story/26/04/18/0332245/fewer-us-college-students-major-in-cs-more-choose-data-science-engineering?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-18, 19:34:00](https://yro.slashdot.org/story/26/04/18/1834202/us-congress-fails-to-pass-long-term-fisa-extension-authorizes-it-through-april-30?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Congress Fails to Pass Long-Term FISA Extension, Authorizes It Through April 30](https://yro.slashdot.org/story/26/04/18/1834202/us-congress-fails-to-pass-long-term-fisa-extension-authorizes-it-through-april-30?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-18, 19:19:24](https://news.ycombinator.com/item?id=47818700) - [Thoughts and feelings around Claude Design](https://samhenri.gold/blog/20260418-claude-design/)
* [2026-04-18, 19:00:00](https://news.ycombinator.com/item?id=47818485) - [College instructor turns to typewriters to curb AI-written work](https://sentinelcolorado.com/uncategorized/a-college-instructor-turns-to-typewriters-to-curb-ai-written-work-and-teach-life-lessons/)
* [2026-04-18, 18:34:00](https://it.slashdot.org/story/26/04/18/0552210/30-wordpress-plugins-turned-into-malware-after-ownership-change?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [30 WordPress Plugins Turned Into Malware After Ownership Change](https://it.slashdot.org/story/26/04/18/0552210/30-wordpress-plugins-turned-into-malware-after-ownership-change?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-18, 17:42:00](https://soylentnews.org/article.pl?sid=26/04/17/0337240&amp;from=rss) - [Scientists Invented a Fake Disease. AI Told People It Was Real](https://soylentnews.org/article.pl?sid=26/04/17/0337240&amp;from=rss)
* [2026-04-18, 17:34:40](https://lobste.rs/s/2htlsp/hello_old_new_projects_directory) - [Hello old new “Projects” directory](https://blog.tenstral.net/2026/04/hello-projects-directory.html)
* [2026-04-18, 17:34:00](https://science.slashdot.org/story/26/04/18/0444250/fructose-isnt-just-sugar-it-acts-more-like-a-hormone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fructose Isn&apos;t Just Sugar. It Acts More Like a Hormone](https://science.slashdot.org/story/26/04/18/0444250/fructose-isnt-just-sugar-it-acts-more-like-a-hormone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-18, 17:11:42](https://lobste.rs/s/gisyhv/optimizing_ruby_path_methods) - [Optimizing Ruby Path Methods](https://byroot.github.io/ruby/performance/2026/04/18/faster-paths.html)
* [2026-04-18, 16:34:00](https://yro.slashdot.org/story/26/04/18/156236/20-year-old-enters-prison-for-historic-breach-ransoming-of-massive-student-database?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [20-Year-Old Enters Prison for Historic Breach, Ransoming of Massive Student Database](https://yro.slashdot.org/story/26/04/18/156236/20-year-old-enters-prison-for-historic-breach-ransoming-of-massive-student-database?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-18, 16:26:47](https://news.ycombinator.com/item?id=47817132) - [The electromechanical angle computer inside the B-52 bomber&apos;s star tracker](https://www.righto.com/2026/04/B-52-star-tracker-angle-computer.html)
* [2026-04-18, 16:08:31](https://lobste.rs/s/1kgeq0/anthropic_s_claude_mythos_launch_is_built) - [Anthropic&apos;s Claude Mythos Launch Is Built on Misinformation](https://www.artificialintelligencemadesimple.com/p/anthropics-claude-mythos-launch-is)
* [2026-04-18, 16:05:43](https://news.ycombinator.com/item?id=47816960) - [Anonymous request-token comparisons from Opus 4.6 and Opus 4.7](https://tokens.billchambers.me/leaderboard)
* [2026-04-18, 15:46:02](https://lobste.rs/s/hwdd5o/secret_life_circuits) - [The Secret Life of Circuits](https://lcamtuf.coredump.cx/electronics/)
* [2026-04-18, 15:34:00](https://news.slashdot.org/story/26/04/18/0417208/fsf-to-onlyoffice-you-cant-use-the-gnu-agpl-to-take-software-freedom-away?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FSF to OnlyOffice:  You Can&apos;t Use the GNU (A)GPL to Take Software Freedom Away](https://news.slashdot.org/story/26/04/18/0417208/fsf-to-onlyoffice-you-cant-use-the-gnu-agpl-to-take-software-freedom-away?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-18, 15:24:39](https://news.ycombinator.com/item?id=47816629) - [Show HN: MDV – a Markdown superset for docs, dashboards, and slides with data](https://github.com/drasimwagan/mdv)
* [2026-04-18, 14:58:19](https://lobste.rs/s/lhcktd/mad_bugs_even_cat_readme_txt_is_not_safe) - [MAD Bugs: Even \&quot;cat readme.txt\&quot; is not safe](https://blog.calif.io/p/mad-bugs-even-cat-readmetxt-is-not)
* [2026-04-18, 14:35:30](https://lobste.rs/s/tttexr/sqlite_prefixes_its_temp_files_with) - [SQLite prefixes its temp files with `etilqs_`](https://avi.im/blag/2026/etilqs/)
* [2026-04-18, 14:34:00](https://yro.slashdot.org/story/26/04/18/039221/us-government-now-wants-anthropics-mythos-preparing-for-ai-cybersecurity-threats?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Government Now Wants Anthropic&apos;s &apos;Mythos&apos;, Preparing for AI Cybersecurity Threats](https://yro.slashdot.org/story/26/04/18/039221/us-government-now-wants-anthropics-mythos-preparing-for-ai-cybersecurity-threats?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-18, 14:01:51](https://lobste.rs/s/tnogqh/native_ipv6_kubernetes_for_true_edge) - [Native IPv6 Kubernetes for true edge routing](https://henrikgerdes.me/blog/2026-04-k8s-native-ipv6-edge/)
* [2026-04-18, 13:53:19](https://lobste.rs/s/hsrqhj/state_kdenlive_2026) - [State of Kdenlive - 2026](https://kdenlive.org/news/2026/state-2026/)
* [2026-04-18, 13:29:04](https://news.ycombinator.com/item?id=47815774) - [Migrating from DigitalOcean to Hetzner](https://isayeter.com/posts/digitalocean-to-hetzner-migration/)
* [2026-04-18, 13:19:17](https://lobste.rs/s/zjqc4a/running_minecraft_server_more_on_1960s) - [Running a Minecraft Server and more on a 1960s UNIVAC Computer](https://farlow.dev/2026/04/17/running-a-minecraft-server-and-more-on-a-1960s-univac-computer)
* [2026-04-18, 12:54:00](https://soylentnews.org/article.pl?sid=26/04/17/0336248&amp;from=rss) - [Online Response to the Attack on Sam Altman&apos;s House Shows a Generational Divide](https://soylentnews.org/article.pl?sid=26/04/17/0336248&amp;from=rss)
* [2026-04-18, 12:30:57](https://lobste.rs/s/jzgjbm/how_why_we_rewrote_our_production_c) - [How (and why) we rewrote our production C++ frontend infrastructure in Rust](https://blog.nearlyfreespeech.net/2026/04/17/how-and-why-we-rewrote-our-production-c-frontend-infrastructure-in-rust/)
* [2026-04-18, 12:29:06](https://news.ycombinator.com/item?id=47815395) - [Why Japan has such good railways](https://worksinprogress.co/issue/why-japan-has-such-good-railways/)
* [2026-04-18, 12:15:03](https://lobste.rs/s/qmk3ph/towards_trust_emacs) - [Towards Trust in Emacs](https://eshelyaron.com/posts/2026-04-15-towards-trust-in-emacs.html)
* [2026-04-18, 11:42:37](https://news.ycombinator.com/item?id=47815118) - [State of Kdenlive](https://kdenlive.org/news/2026/state-2026/)
* [2026-04-18, 11:00:00](https://yro.slashdot.org/story/26/04/18/014244/shuttered-startups-are-selling-old-slack-chats-emails-to-ai-companies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Shuttered Startups Are Selling Old Slack Chats, Emails To AI Companies](https://yro.slashdot.org/story/26/04/18/014244/shuttered-startups-are-selling-old-slack-chats-emails-to-ai-companies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-18, 09:17:46](https://lobste.rs/s/9xgleb/how_github_uses_ebpf_improve_deployment) - [How GitHub uses eBPF to improve deployment safety](https://github.blog/engineering/infrastructure/how-github-uses-ebpf-to-improve-deployment-safety/)
* [2026-04-18, 08:12:00](https://soylentnews.org/article.pl?sid=26/04/17/0326235&amp;from=rss) - [Meet Orpheus—a Hopper Mission Built to Hunt for Life in Martian Volcanoes](https://soylentnews.org/article.pl?sid=26/04/17/0326235&amp;from=rss)
* [2026-04-18, 07:00:00](https://science.slashdot.org/story/26/04/18/0051201/nasa-restarts-work-to-support-europes-uncrewed-trip-to-mars-after-years-of-setbacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Restarts Work To Support Europe&apos;s Uncrewed Trip To Mars After Years of Setbacks](https://science.slashdot.org/story/26/04/18/0051201/nasa-restarts-work-to-support-europes-uncrewed-trip-to-mars-after-years-of-setbacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-18, 03:30:00](https://science.slashdot.org/story/26/04/18/0056244/critical-atlantic-current-significantly-more-likely-to-collapse-than-thought?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Critical Atlantic Current Significantly More Likely To Collapse Than Thought](https://science.slashdot.org/story/26/04/18/0056244/critical-atlantic-current-significantly-more-likely-to-collapse-than-thought?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-18, 03:30:00](https://soylentnews.org/article.pl?sid=26/04/17/0318245&amp;from=rss) - [IPv6 Adoption Reaches 50% - The Long Journey Toward Internet&apos;s Next Generation](https://soylentnews.org/article.pl?sid=26/04/17/0318245&amp;from=rss)
* [2026-04-18, 02:42:46](https://lobste.rs/s/i0tuyd/lenses_rust_my_solution) - [Lenses in Rust and My Solution](https://lambdalemon.gay/posts/grist-lens)
* [2026-04-18, 01:19:05](https://lobste.rs/s/muofgb/deleteduser_com_15_pii_magnet) - [Deleteduser.com —a $15 PII Magnet](https://mike-sheward.medium.com/deleteduser-com-a-15-pii-magnet-c4396eb21061)
* [2026-04-17, 23:59:56](https://lobste.rs/s/a6ztsz/it_is_time_ban_sale_precise_geolocation) - [It Is Time to Ban the Sale of Precise Geolocation Data](https://www.lawfaremedia.org/article/it-is-time-to-ban-the-sale-of-precise-geolocation)
* [2026-04-17, 22:50:00](https://soylentnews.org/article.pl?sid=26/04/16/1142203&amp;from=rss) - [Back Button Hijacking to be Penalised in Google Crackdown](https://soylentnews.org/article.pl?sid=26/04/16/1142203&amp;from=rss)
* [2026-04-17, 21:00:34](https://lobste.rs/s/m0c78b/why_is_ipv6_so_complicated) - [Why is IPv6 so complicated?](https://github.com/becarpenter/misc/blob/main/why6why.md)
* [2026-04-17, 20:27:16](https://lobste.rs/s/rp1yrv/simplified_model_fil_c) - [A simplified model of Fil-C](https://www.corsix.org/content/simplified-model-of-fil-c)
* [2026-04-17, 18:06:00](https://soylentnews.org/article.pl?sid=26/04/16/1137236&amp;from=rss) - [Physicists Think They&apos;ve Resolved the Proton Size Puzzle](https://soylentnews.org/article.pl?sid=26/04/16/1137236&amp;from=rss)
* [2026-04-17, 13:57:27](https://news.ycombinator.com/item?id=47806021) - [What are skiplists good for?](https://antithesis.com/blog/2026/skiptrees/)
* [2026-04-17, 13:20:00](https://soylentnews.org/article.pl?sid=26/04/15/1730255&amp;from=rss) - [Claude Mythos Preview Has Officially Frightened the British](https://soylentnews.org/article.pl?sid=26/04/15/1730255&amp;from=rss)
* [2026-04-17, 08:36:00](https://soylentnews.org/article.pl?sid=26/04/15/1727239&amp;from=rss) - [Meta Zuckerberg Becomes the New Clippy](https://soylentnews.org/article.pl?sid=26/04/15/1727239&amp;from=rss)
* [2026-04-17, 03:52:00](https://soylentnews.org/article.pl?sid=26/04/15/1723257&amp;from=rss) - [Ukraine&apos;s Military Robot Surge Aims to Offset Drone Risks to Humans](https://soylentnews.org/article.pl?sid=26/04/15/1723257&amp;from=rss)
* [2026-04-16, 23:07:00](https://soylentnews.org/article.pl?sid=26/04/15/1539246&amp;from=rss) - [The Entity That Has Been Watching Bitcoin for 14 Years](https://soylentnews.org/article.pl?sid=26/04/15/1539246&amp;from=rss)
* [2026-04-16, 19:05:20](https://news.ycombinator.com/item?id=47797987) - [Binary Dependencies: Identifying the Hidden Packages We All Depend On](https://vlad.website/binary-dependencies-identifying-the-hidden-packages-we-all-depend-on/)
* [2026-04-16, 18:20:00](https://soylentnews.org/article.pl?sid=26/04/15/1535223&amp;from=rss) - [US Appeals Court Declares 158-Year-Old Home Distilling Ban Unconstitutional](https://soylentnews.org/article.pl?sid=26/04/15/1535223&amp;from=rss)
* [2026-04-16, 17:13:50](https://news.ycombinator.com/item?id=47796496) - [Bypassing the kernel for 56ns cross-language IPC](https://github.com/riyaneel/Tachyon/tree/main/docs/adr)
* [2026-04-16, 15:08:33](https://news.ycombinator.com/item?id=47794299) - [Dizzying Spiral Staircase with Single Guardrail Once Led to Top of Eiffel Tower](https://www.smithsonianmag.com/smart-news/a-dizzying-spiral-staircase-with-a-single-guardrail-once-led-to-the-top-of-the-eiffel-tower-now-you-can-buy-14-of-the-original-steps-180988535/)
* [2026-04-16, 14:05:10](https://news.ycombinator.com/item?id=47793161) - [Game Devs Explain the Tricks Involved with Letting You Pause a Game](https://kotaku.com/video-game-devs-explain-how-pausing-works-and-sometimes-it-gets-weird-2000686339)
* [2026-04-16, 13:36:00](https://soylentnews.org/article.pl?sid=26/04/15/0217209&amp;from=rss) - [AI Token Freeloaders Manipulating Customer Support Bots](https://soylentnews.org/article.pl?sid=26/04/15/0217209&amp;from=rss)
* [2026-04-16, 12:00:00](https://news.ycombinator.com/item?id=47791771) - [Updating Gun Rocket through 10 years of Unity Engine](https://jackpritz.com/blog/updating-gun-rocket-through-10-years-of-unity-engine)
* [2026-04-16, 08:52:00](https://soylentnews.org/communityreviews/article.pl?sid=26/04/15/0214204&amp;from=rss) - [OpenAI Says Elon Musk is ‘Injecting Chaos’ With Recent Legal Maneuver](https://soylentnews.org/communityreviews/article.pl?sid=26/04/15/0214204&amp;from=rss)
* [2026-04-16, 08:42:05](https://news.ycombinator.com/item?id=47790337) - [SI Units for Request Rate (2024)](https://entropicthoughts.com/si-units-for-request-rate)
* [2026-04-16, 04:05:00](https://soylentnews.org/article.pl?sid=26/04/15/028227&amp;from=rss) - [This Memory Chip Survives Temperatures Hotter Than Lava](https://soylentnews.org/article.pl?sid=26/04/15/028227&amp;from=rss)
* [2026-04-15, 23:20:00](https://soylentnews.org/article.pl?sid=26/04/15/021231&amp;from=rss) - [Blaming Kids for Poor Security](https://soylentnews.org/article.pl?sid=26/04/15/021231&amp;from=rss)
* [2026-04-15, 19:56:31](https://news.ycombinator.com/item?id=47784395) - [Sumida Aquarium Posts 2026 Penguin Relationship Chart, with Drama and Breakups](https://www.sumida-aquarium.com/special/sokanzu/en/2026/)
* [2026-04-15, 19:46:16](https://news.ycombinator.com/item?id=47784250) - [Scientists discover “cleaner ants” that groom giant ants in Arizona desert](https://www.sciencedaily.com/releases/2026/04/260414075641.htm)
* [2026-04-15, 19:18:38](https://news.ycombinator.com/item?id=47783890) - [Metatextual Literacy](https://www.jenn.site/metatextual-literacy/)
* [2026-04-15, 18:37:00](https://soylentnews.org/article.pl?sid=26/04/15/0158227&amp;from=rss) - [South Korea&apos;s Telecom Giants Surprise 7 Million Users With Unlimited, Universal Internet](https://soylentnews.org/article.pl?sid=26/04/15/0158227&amp;from=rss)
* [2026-04-15, 14:38:38](https://news.ycombinator.com/item?id=47779659) - [Modern Common Lisp with FSet](https://fset.common-lisp.dev/Modern-CL/Top_html/index.html)
* [2026-04-15, 14:20:42](https://news.ycombinator.com/item?id=47779372) - [It&apos;s cool to care (2025)](https://alexwlchan.net/2025/cool-to-care/)
* [2026-04-15, 13:52:00](https://soylentnews.org/article.pl?sid=26/04/14/0413241&amp;from=rss) - [Electrode Technology Achieves 86% Efficiency for Converting CO₂ Into Plastic Precursors](https://soylentnews.org/article.pl?sid=26/04/14/0413241&amp;from=rss)
* [2026-04-15, 09:07:00](https://soylentnews.org/article.pl?sid=26/04/14/049220&amp;from=rss) - [Linux Lays Down the Law on AI-Generated Code](https://soylentnews.org/article.pl?sid=26/04/14/049220&amp;from=rss)
* [2026-04-15, 04:22:00](https://soylentnews.org/article.pl?sid=26/04/14/043205&amp;from=rss) - [The AI Great Leap Forward](https://soylentnews.org/article.pl?sid=26/04/14/043205&amp;from=rss)
* [2026-04-15, 02:29:39](https://news.ycombinator.com/item?id=47773969) - [Understanding the FFT Algorithm (2013)](https://jakevdp.github.io/blog/2013/08/28/understanding-the-fft/)
