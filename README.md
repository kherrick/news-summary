# [News Summary](https://kherrick.github.io/news-summary/)

## Programming and Software Development

* [What Languages is Arthur Whitney Style Code Possible in?](https://lobste.rs/s/s40j01/what_languages_is_arthur_whitney_style) - An exploration of programming languages suitable for Arthur Whitney-style coding practices.

* [Drugwars for the TI-82/83/83 Calculators](https://gist.github.com/mattmanning/1002653/b7a1e88479a10eaae3bd5298b8b2c86e16fb4404) - A nostalgic look at a classic game designed for TI calculators.

* [acdc - AsciiDoc tooling in Rust](https://acdc.nlopes.dev/) - Introduction to a Rust-based AsciiDoc tooling system.

* [Building an LSP Server with Rust is surprisingly easy and fun](https://codeinput.com/blog/lsp-server) - How developers can create Language Server Protocols effortlessly using Rust.

* [Noq: n0's new QUIC implementation in Rust](https://www.iroh.computer/blog/noq-announcement) - A significant update introducing a QUIC implementation written in Rust.

## Cybersecurity and Privacy

* [Full Disclosure: A Third (and Fourth) Azure Sign-In Log Bypass Found](https://trustedsec.com/blog/full-disclosure-a-third-and-fourth-azure-sign-in-log-bypass-found) - Details of newly discovered bypass vulnerabilities impacting Azure sign-in logs.

* [CVE-2026-3888: Snap Flaw, Local Privilege Escalation to Root](https://blog.qualys.com/vulnerabilities-threat-research/2026/03/17/cve-2026-3888-important-snap-flaw-enables-local-privilege-escalation-to-root) - Analysis of a Snap package vulnerability leading to elevated privileges.

* [Root from the parking lot: OpenWRT XSS through SSID scanning (CVE-2026-32721)](https://mxsasha.eu/posts/openwrt-ssid-xss-to-root/) - Insights into a newly uncovered OpenWRT cross-site scripting exploit.

## Artificial Intelligence and Machine Learning

* [EsoLang-Bench: Evaluating Genuine Reasoning in LLMs via Esoteric Languages](https://esolang-bench.vercel.app/) - A novel way to measure reasoning in large language models using esoteric programming languages.

* [Scaling Karpathy's Autoresearch: What Happens When the Agent Gets a GPU Cluster](https://blog.skypilot.co/scaling-autoresearch/) - Study of AI research agents powered by GPU clusters.

* [AI's impact on mathematics is analogous to the car's impact on cities](https://mathstodon.xyz/@tao/116252708577614828) - A philosophical perspective on how AI influences mathematics.

## Infrastructure and Technology Trends

* [Wayland set the Linux Desktop back by 10 years?](https://omar.yt/posts/wayland-set-the-linux-desktop-back-by-10-years) - A critique of Wayland's impact on the Linux desktop ecosystem.

* [Online Bot Traffic Will Exceed Human Traffic By 2027, Cloudflare CEO Says](https://tech.slashdot.org/story/26/03/19/2144200/online-bot-traffic-will-exceed-human-traffic-by-2027-cloudflare-ceo-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Predictions of web traffic dominated by bots by 2027.

* [Google Details New 24-Hour Process To Sideload Unverified Android Apps](https://developers.slashdot.org/story/26/03/19/1832217/google-details-new-24-hour-process-to-sideload-unverified-android-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Google's new process for sideloading unverified apps onto Android devices.

## Business and Lawsuits

* [Clockwise acquired by Salesforce and shutting down next week](https://www.getclockwise.com) - News of Salesforce's acquisition of Clockwise and its subsequent shutdown.

* [Microsoft Considers Legal Action Over $50 Billion Amazon-OpenAI Cloud Deal](https://yro.slashdot.org/story/26/03/19/0012252/microsoft-considers-legal-action-over-50-billion-amazon-openai-cloud-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Microsoft's potential litigation over a massive cloud computing deal.

## Miscellaneous

* [The day I discovered type design](https://www.marksimonson.com/notebook/view/the-day-i-discovered-type-design/) - A personal account of a designer's journey into typeface creation.

* [The Science of How Fireflies Stay in Sync](https://soylentnews.org/article.pl?sid=26/03/18/1522208&amp;from=rss) - An exploration into the biological and physical mechanisms behind firefly synchronization.

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

* [2026-03-20, 01:11:39](https://lobste.rs/s/s40j01/what_languages_is_arthur_whitney_style) - [What Languages is Arthur Whitney Style Code Possible in?](https://lobste.rs/s/s40j01/what_languages_is_arthur_whitney_style)
* [2026-03-20, 01:09:45](https://news.ycombinator.com/item?id=47448994) - [Full Disclosure: A Third (and Fourth) Azure Sign-In Log Bypass Found](https://trustedsec.com/blog/full-disclosure-a-third-and-fourth-azure-sign-in-log-bypass-found)
* [2026-03-20, 00:26:47](https://news.ycombinator.com/item?id=47448566) - [Drugwars for the TI-82/83/83 Calculators](https://gist.github.com/mattmanning/1002653/b7a1e88479a10eaae3bd5298b8b2c86e16fb4404)
* [2026-03-20, 00:22:08](https://news.ycombinator.com/item?id=47448524) - [Push events into a running session with channels](https://code.claude.com/docs/en/channels)
* [2026-03-20, 00:01:40](https://news.ycombinator.com/item?id=47448328) - [Wayland set the Linux Desktop back by 10 years?](https://omar.yt/posts/wayland-set-the-linux-desktop-back-by-10-years)
* [2026-03-19, 23:08:37](https://news.ycombinator.com/item?id=47447690) - [The day I discovered type design](https://www.marksimonson.com/notebook/view/the-day-i-discovered-type-design/)
* [2026-03-19, 23:00:00](https://tech.slashdot.org/story/26/03/19/2144200/online-bot-traffic-will-exceed-human-traffic-by-2027-cloudflare-ceo-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Online Bot Traffic Will Exceed Human Traffic By 2027, Cloudflare CEO Says](https://tech.slashdot.org/story/26/03/19/2144200/online-bot-traffic-will-exceed-human-traffic-by-2027-cloudflare-ceo-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-19, 22:59:18](https://news.ycombinator.com/item?id=47447600) - [Bombarding gamblers with offers greatly increases betting and gambling harm](https://www.bristol.ac.uk/news/2026/march/bombarding-gamblers-with-offers-greatly-increases-betting-and-gambling-harm.html)
* [2026-03-19, 22:23:00](https://soylentnews.org/article.pl?sid=26/03/19/0258237&amp;from=rss) - [Over Fifteen Years Later, Microsoft Morged My Diagram](https://soylentnews.org/article.pl?sid=26/03/19/0258237&amp;from=rss)
* [2026-03-19, 22:00:00](https://tech.slashdot.org/story/26/03/19/208232/4chan-mocks-700k-fine-for-uk-online-safety-breaches?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [4Chan Mocks $700K Fine For UK Online Safety Breaches](https://tech.slashdot.org/story/26/03/19/208232/4chan-mocks-700k-fine-for-uk-online-safety-breaches?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-19, 21:23:24](https://news.ycombinator.com/item?id=47446373) - [Be intentional about how AI changes your codebase](https://aicode.swerdlow.dev)
* [2026-03-19, 21:01:03](https://news.ycombinator.com/item?id=47446021) - [EsoLang-Bench: Evaluating Genuine Reasoning in LLMs via Esoteric Languages](https://esolang-bench.vercel.app/)
* [2026-03-19, 21:00:00](https://yro.slashdot.org/story/26/03/19/1936250/rogue-ai-triggers-serious-security-incident-at-meta?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rogue AI Triggers Serious Security Incident At Meta](https://yro.slashdot.org/story/26/03/19/1936250/rogue-ai-triggers-serious-security-incident-at-meta?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-19, 20:33:02](https://news.ycombinator.com/item?id=47445599) - [Cockpit is a web-based graphical interface for servers](https://github.com/cockpit-project/cockpit)
* [2026-03-19, 20:13:35](https://news.ycombinator.com/item?id=47445246) - [Waymo Safety Impact](https://waymo.com/safety/impact/)
* [2026-03-19, 20:00:00](https://yro.slashdot.org/story/26/03/19/1912217/rapper-afroman-wins-defamation-lawsuit-over-use-of-police-raid-footage-in-his-music-videos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rapper Afroman Wins Defamation Lawsuit Over Use of Police Raid Footage In His Music Videos](https://yro.slashdot.org/story/26/03/19/1912217/rapper-afroman-wins-defamation-lawsuit-over-use-of-police-raid-footage-in-his-music-videos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-19, 19:55:14](https://lobste.rs/s/mvcoda/acdc_asciidoc_tooling_rust) - [acdc - AsciiDoc tooling in Rust](https://acdc.nlopes.dev/)
* [2026-03-19, 19:50:51](https://news.ycombinator.com/item?id=47444906) - [Clockwise acquired by Salesforce and shutting down next week](https://www.getclockwise.com)
* [2026-03-19, 19:33:38](https://lobste.rs/s/gm6wyt/bug_report_macos_26_breaks_etc_resolver) - [Bug Report: macOS 26 breaks /etc/resolver/ supplemental DNS for custom TLDs](https://gist.github.com/adamamyl/81b78eced40feae50eae7c4f3bec1f5a)
* [2026-03-19, 19:22:58](https://lobste.rs/s/740euz/monuses_heaps) - [Monuses and Heaps](https://doisinkidney.com/posts/2026-03-03-monus-heaps.html)
* [2026-03-19, 19:18:25](https://news.ycombinator.com/item?id=47444460) - [From Oscilloscope to Wireshark: A UDP Story (2022)](https://www.mattkeeter.com/blog/2022-08-11-udp/)
* [2026-03-19, 19:00:00](https://developers.slashdot.org/story/26/03/19/1832217/google-details-new-24-hour-process-to-sideload-unverified-android-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Details New 24-Hour Process To Sideload Unverified Android Apps](https://developers.slashdot.org/story/26/03/19/1832217/google-details-new-24-hour-process-to-sideload-unverified-android-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-19, 18:52:28](https://lobste.rs/s/5d6qru/how_many_branches_can_your_cpu_predict) - [How many branches can your CPU predict?](https://lemire.me/blog/2026/03/18/how-many-branches-can-your-cpu-predict/)
* [2026-03-19, 18:51:25](https://news.ycombinator.com/item?id=47444072) - [NanoGPT Slowrun: 10x Data Efficiency with Infinite Compute](https://qlabs.sh/10x)
* [2026-03-19, 18:20:53](https://lobste.rs/s/evllsj/binary_fuse_filters_fast_smaller_than_xor) - [Binary Fuse Filters: Fast and Smaller Than Xor Filters (2022)](https://dl.acm.org/doi/pdf/10.1145/3510449?download=true)
* [2026-03-19, 18:17:15](https://news.ycombinator.com/item?id=47443588) - [Noq: n0&apos;s new QUIC implementation in Rust](https://www.iroh.computer/blog/noq-announcement)
* [2026-03-19, 18:00:00](https://games.slashdot.org/story/26/03/19/182233/meta-backtracks-will-keep-horizon-worlds-vr-support-for-existing-games?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Backtracks, Will Keep Horizon Worlds VR Support &apos;For Existing Games&apos;](https://games.slashdot.org/story/26/03/19/182233/meta-backtracks-will-keep-horizon-worlds-vr-support-for-existing-games?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-19, 17:50:28](https://lobste.rs/s/3qhmza/getting_ziggy_with_it_re_factor) - [Getting Ziggy With It – Re: Factor](https://re.factorcode.org/2026/03/getting-ziggy-with-it.html)
* [2026-03-19, 17:38:00](https://soylentnews.org/article.pl?sid=26/03/18/1530220&amp;from=rss) - [Predicted by Einstein 100 Years Ago, This Cosmic Phenomenon Has Finally Been Observed](https://soylentnews.org/article.pl?sid=26/03/18/1530220&amp;from=rss)
* [2026-03-19, 17:32:34](https://lobste.rs/s/g1ktjl/android_developer_verification) - [Android developer verification: Balancing openness and choice with safety](https://android-developers.googleblog.com/2026/03/android-developer-verification.html)
* [2026-03-19, 17:27:17](https://news.ycombinator.com/item?id=47442834) - [An update on Steam / GOG changes for OpenTTD](https://www.openttd.org/news/2026/03/19/steam-changes-update)
* [2026-03-19, 17:16:04](https://news.ycombinator.com/item?id=47442690) - [Google details new 24-hour process to sideload unverified Android apps](https://arstechnica.com/gadgets/2026/03/google-details-new-24-hour-process-to-sideload-unverified-android-apps/)
* [2026-03-19, 17:00:00](https://developers.slashdot.org/story/26/03/19/1621209/openai-acquires-developer-tooling-startup-astral?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Acquires Developer Tooling Startup Astral](https://developers.slashdot.org/story/26/03/19/1621209/openai-acquires-developer-tooling-startup-astral?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-19, 16:57:02](https://news.ycombinator.com/item?id=47442452) - [Launch HN: Voltair (YC W26) – Drone and charging network for power utilities](https://news.ycombinator.com/item?id=47442452)
* [2026-03-19, 16:55:45](https://news.ycombinator.com/item?id=47442435) - [Scaling Karpathy&apos;s Autoresearch: What Happens When the Agent Gets a GPU Cluster](https://blog.skypilot.co/scaling-autoresearch/)
* [2026-03-19, 16:39:31](https://lobste.rs/s/nzg621/things_turbo_pascal_is_smaller_than_2011) - [Things That Turbo Pascal is Smaller Than (2011)](https://prog21.dadgum.com/116.html)
* [2026-03-19, 16:01:30](https://news.ycombinator.com/item?id=47441629) - [Launch HN: Canary (YC W26) – AI QA that understands your code](https://news.ycombinator.com/item?id=47441629)
* [2026-03-19, 16:00:00](https://yro.slashdot.org/story/26/03/19/0430224/walmart-wins-patents-to-give-algorithms-more-sway-over-prices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Walmart Wins Patents To Give Algorithms More Sway Over Prices](https://yro.slashdot.org/story/26/03/19/0430224/walmart-wins-patents-to-give-algorithms-more-sway-over-prices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-19, 15:56:06](https://news.ycombinator.com/item?id=47441546) - [Show HN: Three new Kitten TTS models – smallest less than 25MB](https://github.com/KittenML/KittenTTS)
* [2026-03-19, 15:14:27](https://lobste.rs/s/ckreil/introducing_dial9_flight_recorder_for) - [Introducing dial9: a flight recorder for Tokio](https://tokio.rs/blog/2026-03-18-dial9)
* [2026-03-19, 15:00:00](https://yro.slashdot.org/story/26/03/19/0012252/microsoft-considers-legal-action-over-50-billion-amazon-openai-cloud-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Considers Legal Action Over $50 Billion Amazon-OpenAI Cloud Deal](https://yro.slashdot.org/story/26/03/19/0012252/microsoft-considers-legal-action-over-50-billion-amazon-openai-cloud-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-19, 14:46:25](https://news.ycombinator.com/item?id=47440430) - [4Chan mocks £520k fine for UK online safety breaches](https://www.bbc.com/news/articles/c624330lg1ko)
* [2026-03-19, 14:11:07](https://lobste.rs/s/xd4fd7/anthropic_s_hidden_vercel_competitor) - [Anthropic&apos;s Hidden Vercel Competitor \&quot;Antspace\&quot;](https://aprilnea.me/en/blog/reverse-engineering-claude-code-antspace)
* [2026-03-19, 14:01:12](https://lobste.rs/s/vteijd/root_from_parking_lot_openwrt_xss_through) - [Root from the parking lot: OpenWRT XSS through SSID scanning (CVE-2026-32721)](https://mxsasha.eu/posts/openwrt-ssid-xss-to-root/)
* [2026-03-19, 13:43:26](https://news.ycombinator.com/item?id=47439320) - [OpenBSD: PF queues break the 4 Gbps barrier](https://undeadly.org/cgi?action=article;sid=20260319125859)
* [2026-03-19, 13:05:50](https://news.ycombinator.com/item?id=47438723) - [Astral to Join OpenAI](https://astral.sh/blog/openai)
* [2026-03-19, 13:02:35](https://news.ycombinator.com/item?id=47438675) - [Juggalo makeup blocks facial recognition technology (2019)](https://consequence.net/2019/07/juggalo-makeup-facial-recognition/)
* [2026-03-19, 12:53:00](https://soylentnews.org/article.pl?sid=26/03/18/1524211&amp;from=rss) - [100 Years Later, Where is Robert Goddard&apos;s First Liquid-Fuel Rocket?](https://soylentnews.org/article.pl?sid=26/03/18/1524211&amp;from=rss)
* [2026-03-19, 12:32:27](https://lobste.rs/s/nfkpw4/ai_s_impact_on_mathematics_is_analogous) - [AI&apos;s impact on mathematics is analogous to the car&apos;s impact on cities](https://mathstodon.xyz/@tao/116252708577614828)
* [2026-03-19, 12:04:07](https://lobste.rs/s/qsbva3/building_lsp_server_with_rust_is) - [Building an LSP Server with Rust is surprisingly easy and fun](https://codeinput.com/blog/lsp-server)
* [2026-03-19, 11:56:19](https://lobste.rs/s/cllyvq/modular_monolith_dependencies) - [Modular Monolith: dependencies and communication between Modules](https://binaryigor.com/modular-monolith-dependencies-and-communication.html)
* [2026-03-19, 11:34:24](https://news.ycombinator.com/item?id=47437655) - [“Your frustration is the product”](https://daringfireball.net/2026/03/your_frustration_is_the_product)
* [2026-03-19, 11:21:38](https://lobste.rs/s/gqdltt/comprehension_debt_hidden_cost_ai) - [Comprehension Debt - the hidden cost of AI generated code](https://addyosmani.com/blog/comprehension-debt/)
* [2026-03-19, 11:04:51](https://lobste.rs/s/audam9/shape_inequalities) - [The Shape of Inequalities](https://www.andreinc.net/2026/03/16/the-shape-of-inequalities/)
* [2026-03-19, 11:00:00](https://apple.slashdot.org/story/26/03/19/006207/iphone-exploit-darksword-steals-data-in-minutes-with-no-trace?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [iPhone Exploit DarkSword Steals Data In Minutes With No Trace](https://apple.slashdot.org/story/26/03/19/006207/iphone-exploit-darksword-steals-data-in-minutes-with-no-trace?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-19, 08:08:00](https://soylentnews.org/article.pl?sid=26/03/18/1522208&amp;from=rss) - [The Science of How Fireflies Stay in Sync](https://soylentnews.org/article.pl?sid=26/03/18/1522208&amp;from=rss)
* [2026-03-19, 07:00:00](https://tech.slashdot.org/story/26/03/19/001230/pardoned-nikola-fraudster-is-raising-funds-for-ai-powered-planes-he-claims-will-reshape-aviation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pardoned Nikola Fraudster Is Raising Funds For AI-Powered Planes He Claims Will Reshape Aviation](https://tech.slashdot.org/story/26/03/19/001230/pardoned-nikola-fraudster-is-raising-funds-for-ai-powered-planes-he-claims-will-reshape-aviation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-19, 04:41:45](https://lobste.rs/s/09wmcz/no_semicolons_needed) - [No Semicolons Needed](https://terts.dev/blog/no-semicolons-needed/)
* [2026-03-19, 03:30:00](https://yro.slashdot.org/story/26/03/18/217205/fbi-is-buying-location-data-to-track-us-citizens-director-confirms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FBI Is Buying Location Data To Track US Citizens, Director Confirms](https://yro.slashdot.org/story/26/03/18/217205/fbi-is-buying-location-data-to-track-us-citizens-director-confirms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-19, 03:23:00](https://soylentnews.org/article.pl?sid=26/03/17/0844255&amp;from=rss) - [Humanities in the Machine](https://soylentnews.org/article.pl?sid=26/03/17/0844255&amp;from=rss)
* [2026-03-19, 03:10:56](https://lobste.rs/s/vba3az/49mb_web_page) - [The 49MB Web Page](https://thatshubham.com/blog/news-audit)
* [2026-03-19, 02:56:11](https://lobste.rs/s/ccys1t/cve_2026_3888_snap_flaw_local_privilege) - [CVE-2026-3888: Snap Flaw, Local Privilege Escalation to Root](https://blog.qualys.com/vulnerabilities-threat-research/2026/03/17/cve-2026-3888-important-snap-flaw-enables-local-privilege-escalation-to-root)
* [2026-03-18, 23:39:58](https://news.ycombinator.com/item?id=47432779) - [How many branches can your CPU predict?](https://lemire.me/blog/2026/03/18/how-many-branches-can-your-cpu-predict/)
* [2026-03-18, 23:00:00](https://yro.slashdot.org/story/26/03/18/2059236/cloudflare-appeals-piracy-shield-fine-hopes-to-kill-italys-site-blocking-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cloudflare Appeals Piracy Shield Fine, Hopes To Kill Italy&apos;s Site-Blocking Law](https://yro.slashdot.org/story/26/03/18/2059236/cloudflare-appeals-piracy-shield-fine-hopes-to-kill-italys-site-blocking-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-18, 22:38:00](https://soylentnews.org/article.pl?sid=26/03/17/0839217&amp;from=rss) - [Chimps’ Love for Crystals Could Help Us Understand Our Own Ancestors’ Fascination With Gems](https://soylentnews.org/article.pl?sid=26/03/17/0839217&amp;from=rss)
* [2026-03-18, 22:00:00](https://tech.slashdot.org/story/26/03/18/2042233/google-is-trying-to-make-vibe-design-happen?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Is Trying To Make &apos;Vibe Design&apos; Happen](https://tech.slashdot.org/story/26/03/18/2042233/google-is-trying-to-make-vibe-design-happen?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-18, 21:29:51](https://lobste.rs/s/5ebeb4/supercazzola_generate_spam_for_web) - [Supercazzola - Generate spam for web scrapers (update)](https://dacav.org/projects/supercazzola/)
* [2026-03-18, 21:00:00](https://it.slashdot.org/story/26/03/18/2020255/new-windows-11-bug-breaks-samsung-pcs-blocking-access-to-c-drive?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Windows 11 Bug Breaks Samsung PCs, Blocking Access To C: Drive](https://it.slashdot.org/story/26/03/18/2020255/new-windows-11-bug-breaks-samsung-pcs-blocking-access-to-c-drive?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-18, 19:53:19](https://lobste.rs/s/ywrcll/java_26_is_here_with_it_solid_foundation) - [Java 26 Is Here, And With It a Solid Foundation for the Future](https://hanno.codes/2026/03/17/java-26-is-here/)
* [2026-03-18, 17:54:00](https://soylentnews.org/politics/article.pl?sid=26/03/17/0835230&amp;from=rss) - [FCC Chairman Threatens To Revoke TV Licenses Over Iran Coverage](https://soylentnews.org/politics/article.pl?sid=26/03/17/0835230&amp;from=rss)
* [2026-03-18, 16:13:42](https://lobste.rs/s/hoarih/gnome_50_released) - [GNOME 50 released](https://release.gnome.org/50/)
* [2026-03-18, 15:53:18](https://lobste.rs/s/fbyvmx/go_home_windows_exe_you_re_drunk) - [Go Home, Windows EXE, You&apos;re Drunk](https://gpfault.net/posts/drunk-exe.html)
* [2026-03-18, 13:29:14](https://lobste.rs/s/9keraw/rob_pike_s_5_rules_programming) - [Rob Pike&apos;s 5 Rules of Programming](https://www.cs.unc.edu/~stotts/COMP590-059-f24/robsrules.html)
* [2026-03-18, 13:04:00](https://soylentnews.org/article.pl?sid=26/03/17/0831246&amp;from=rss) - [Woman Sneezes Out Maggots After Fly Larvae Get Trapped in Her Deviated Septum](https://soylentnews.org/article.pl?sid=26/03/17/0831246&amp;from=rss)
* [2026-03-18, 08:21:00](https://soylentnews.org/article.pl?sid=26/03/17/0828240&amp;from=rss) - [Research Shows How Lost Memories Can be Reactivated](https://soylentnews.org/article.pl?sid=26/03/17/0828240&amp;from=rss)
* [2026-03-18, 03:36:00](https://soylentnews.org/article.pl?sid=26/03/17/0827224&amp;from=rss) - [Apocalyptic Beliefs Are No Longer Fringe—and They&apos;re Shaping How People Respond](https://soylentnews.org/article.pl?sid=26/03/17/0827224&amp;from=rss)
* [2026-03-17, 22:53:00](https://soylentnews.org/article.pl?sid=26/03/16/140213&amp;from=rss) - [Porsche Puts Its Faith Back in Internal Combustion Engines](https://soylentnews.org/article.pl?sid=26/03/16/140213&amp;from=rss)
* [2026-03-17, 19:19:44](https://news.ycombinator.com/item?id=47416972) - [How the Turner twins are mythbusting modern technical apparel](https://www.carryology.com/insights/how-the-turner-twins-are-mythbusting-modern-gear/)
* [2026-03-17, 18:08:00](https://soylentnews.org/article.pl?sid=26/03/16/1356204&amp;from=rss) - [Meta is Ending Instagram Direct Message End-to-End Encryption](https://soylentnews.org/article.pl?sid=26/03/16/1356204&amp;from=rss)
* [2026-03-17, 13:23:00](https://soylentnews.org/article.pl?sid=26/03/16/1353215&amp;from=rss) - [IBM, Sonic Delay Lines, and the History of the 80×24 Display](https://soylentnews.org/article.pl?sid=26/03/16/1353215&amp;from=rss)
* [2026-03-17, 08:38:00](https://soylentnews.org/article.pl?sid=26/03/15/1351230&amp;from=rss) - [Magnetars Drag Spacetime to Power Superluminous Supernovae](https://soylentnews.org/article.pl?sid=26/03/15/1351230&amp;from=rss)
* [2026-03-17, 03:57:00](https://soylentnews.org/article.pl?sid=26/03/15/1339231&amp;from=rss) - [Musk Fails To Block California Data Disclosure Law He Fears Will Ruin XAI](https://soylentnews.org/article.pl?sid=26/03/15/1339231&amp;from=rss)
* [2026-03-16, 23:09:00](https://soylentnews.org/article.pl?sid=26/03/15/1330233&amp;from=rss) - [11-Month Old Russian Outfit Claims It Has Developed 16-Core and 32-Core Processors, Flaunts Cyrillic](https://soylentnews.org/article.pl?sid=26/03/15/1330233&amp;from=rss)
* [2026-03-16, 22:56:13](https://news.ycombinator.com/item?id=47406160) - [Return of the Obra Dinn: spherical mapped dithering for a 1bpp first-person game](https://forums.tigsource.com/index.php?topic=40832.msg1363742#msg1363742)
* [2026-03-16, 18:26:00](https://soylentnews.org/article.pl?sid=26/03/15/1328200&amp;from=rss) - [Google Fiber Will be Sold to Private Equity Firm and Merge With Cable Company](https://soylentnews.org/article.pl?sid=26/03/15/1328200&amp;from=rss)
* [2026-03-16, 18:16:26](https://news.ycombinator.com/item?id=47402687) - [My Random Forest Was Mostly Learning Time-to-Expiry Noise](https://illya.sh/threads/out-of-sample-permutation-feature-importance-for-random)
* [2026-03-16, 13:37:00](https://soylentnews.org/article.pl?sid=26/03/15/1319251&amp;from=rss) - [Why the World&apos;s Militaries Are Scrambling to Create Their Own Starlink](https://soylentnews.org/article.pl?sid=26/03/15/1319251&amp;from=rss)
* [2026-03-16, 08:55:00](https://soylentnews.org/article.pl?sid=26/03/15/0111236&amp;from=rss) - [Iran Conflict Delays Meta&apos;s 2Africa Undersea Cable Project — Cable Layer Declares Force Majeure](https://soylentnews.org/article.pl?sid=26/03/15/0111236&amp;from=rss)
* [2026-03-16, 04:07:00](https://soylentnews.org/article.pl?sid=26/03/15/016219&amp;from=rss) - [Nvidia Is Reportedly Planning Its Own Open Source OpenClaw Competitor](https://soylentnews.org/article.pl?sid=26/03/15/016219&amp;from=rss)
