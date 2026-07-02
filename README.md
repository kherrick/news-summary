# [News Summary](https://kherrick.github.io/news-summary/)

## Space Innovation

* [SpaceX Reportedly Has an AI Device Prototype](https://hardware.slashdot.org/story/26/07/02/0217230/spacex-reportedly-has-an-ai-device-prototype?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - SpaceX is reportedly working on a prototype for an AI-powered device, showcasing its advancements in space technology.

* [NASA Wants To Send Spare Nuclear-Powered Mars Rover To the Moon](https://science.slashdot.org/story/26/07/01/0613245/nasa-wants-to-send-spare-nuclear-powered-mars-rover-to-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - NASA explores using a spare nuclear-powered Mars rover on the Moon, signaling advancements in cross-planetary tech.

## AI and Automation Developments

* [Senior SWE-Bench: open-source benchmark that assesses agents as senior engineers](https://senior-swe-bench.snorkel.ai/) - A new open-source benchmark helps evaluate AI agents' skills mirroring senior software engineers.

* [The Control Plane Was the Point: Revisiting autofz in the LLM Era](https://yfu.tw/blog/en/autofz-revisited/) - This article revisits autofz and its relevance within the context of the growing influence of large language models (LLMs).

* [Meta Is Reportedly Building Its Own Cloud Business](https://meta.slashdot.org/story/26/07/01/1952253/meta-is-reportedly-building-its-own-cloud-business?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Meta is reportedly expanding into the cloud infrastructure space.

## Tech and Open Source Initiatives

* [FreeBSD Vs. Linux: the Eternal Open-Source Showdown](https://soylentnews.org/article.pl?sid=26/07/01/0611205&amp;from=rss) - An ongoing examination of the features, community, and strengths of FreeBSD and Linux in the open-source ecosystem.

* [On Ditching Vagrant](https://benjamintoll.com/2026/06/29/on-ditching-vagrant/) - A personal account exploring the decision to move away from Vagrant to modern development tools.

* [Improving token efficiency for GitHub Copilot in VS Code](https://code.visualstudio.com/blogs/2026/06/17/improving-token-efficiency-in-github-copilot) - Latest efforts to enhance GitHub Copilot's token efficiency in Visual Studio Code.

* [Pidgin 3.0 Alpha 2 (2.96.0) has been released](https://discourse.imfreedom.org/t/pidgin-3-0-alpha-2-2-96-0-has-been-released/398) - Update on Pidgin's upcoming version focused on open-source instant messaging tools.

## Advancements in Health and Safety

* [Global review confirms mRNA vaccines are safe, effective and full of promise](https://news.ubc.ca/2026/06/mrna-vaccines-are-safe-effective-and-full-of-promise/) - A global review affirms the safety, effectiveness, and potential of mRNA vaccines for global health.

* [New Florida Law Bans Local Net-Zero Emissions Policies](https://yro.slashdot.org/story/26/06/30/2157253/new-florida-law-bans-local-net-zero-emissions-policies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A controversial law in Florida restricts municipalities from implementing net-zero emissions policies.

## Consumer Technology Insights

* [Sony PlayStation Will Stop Releasing Games On Discs In 2028](https://games.slashdot.org/story/26/07/01/1734219/sony-playstation-will-stop-releasing-games-on-discs-in-2028?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Sony announces plans to transition away from releasing PlayStation games on physical discs by 2028.

* [The &lt;Usermedia&gt; HTML Element](https://developer.chrome.com/blog/usermedia-html-element) - Exploration of the potential applications of the new Usermedia HTML element for web developers and users.

* [Reddit Will Require You To Log In To Use Old Reddit](https://tech.slashdot.org/story/26/07/01/1743219/reddit-will-require-you-to-log-in-to-use-old-reddit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Reddit's new policy limits access to its 'Old Reddit' version, requiring users to log in to navigate the platform.

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

* [2026-07-02, 07:00:00](https://hardware.slashdot.org/story/26/07/02/0217230/spacex-reportedly-has-an-ai-device-prototype?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX Reportedly Has an AI Device Prototype](https://hardware.slashdot.org/story/26/07/02/0217230/spacex-reportedly-has-an-ai-device-prototype?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-02, 06:31:00](https://soylentnews.org/article.pl?sid=26/07/01/0611205&amp;from=rss) - [FreeBSD Vs. Linux: the Eternal Open-Source Showdown](https://soylentnews.org/article.pl?sid=26/07/01/0611205&amp;from=rss)
* [2026-07-02, 05:21:42](https://lobste.rs/s/vuqsur/on_ditching_vagrant) - [On Ditching Vagrant](https://benjamintoll.com/2026/06/29/on-ditching-vagrant/)
* [2026-07-02, 05:19:34](https://news.ycombinator.com/item?id=48756840) - [CursorBench 3.1](https://cursor.com/evals)
* [2026-07-02, 05:19:10](https://lobste.rs/s/gwxqmh/control_plane_was_point_revisiting) - [The Control Plane Was the Point: Revisiting autofz in the LLM Era](https://yfu.tw/blog/en/autofz-revisited/)
* [2026-07-02, 04:32:41](https://news.ycombinator.com/item?id=48756602) - [Kimi K2.7 Code is generally available in GitHub Copilot](https://github.blog/changelog/2026-07-01-kimi-k2-7-is-now-available-in-github-copilot/)
* [2026-07-02, 04:23:14](https://lobste.rs/s/q8vdre/physics_memory_aka_can_javascript_ecs) - [The Physics of Memory (aka can Javascript ECS?)](https://www.dmurph.com/posts/2026/06/ecs_vs_oop_benchmark/ecs_vs_oop_benchmark.html)
* [2026-07-02, 03:30:00](https://hardware.slashdot.org/story/26/07/01/237251/us-home-battery-installations-hit-record-high-on-rising-electricity-costs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Home Battery Installations Hit Record High On Rising Electricity Costs](https://hardware.slashdot.org/story/26/07/01/237251/us-home-battery-installations-hit-record-high-on-rising-electricity-costs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-02, 03:00:15](https://news.ycombinator.com/item?id=48755965) - [A new Android malware from Google](https://f-droid.org/2026/07/01/adv-malware.html)
* [2026-07-02, 02:55:16](https://news.ycombinator.com/item?id=48755928) - [Senior SWE-Bench: open-source benchmark that assesses agents as senior engineers](https://senior-swe-bench.snorkel.ai/)
* [2026-07-02, 02:32:44](https://lobste.rs/s/tgjz7s/improving_token_efficiency_for_github) - [Improving token efficiency for GitHub Copilot in VS Code](https://code.visualstudio.com/blogs/2026/06/17/improving-token-efficiency-in-github-copilot)
* [2026-07-02, 02:30:16](https://news.ycombinator.com/item?id=48755731) - [Bring back crappy forums](https://tedium.co/2026/07/01/online-web-forums-retrospective/)
* [2026-07-02, 02:29:04](https://lobste.rs/s/mml3sh/creating_development_sandbox_with) - [Creating a development sandbox with crosvm](https://www.erat.org/crosvm.html)
* [2026-07-02, 01:47:00](https://soylentnews.org/article.pl?sid=26/07/01/0552223&amp;from=rss) - [Prompt Injection as Role Confusion](https://soylentnews.org/article.pl?sid=26/07/01/0552223&amp;from=rss)
* [2026-07-02, 01:11:56](https://lobste.rs/s/khdiby/artificial_adventures) - [Artificial adventures](https://www.scattered-thoughts.net/writing/artificial-adventures/)
* [2026-07-02, 00:48:01](https://news.ycombinator.com/item?id=48755005) - [Oomwoo, an open-source robot vacuum you build yourself](https://makerspet.com/blog/building-an-open-source-robot-vacuum-meet-oomwoo/)
* [2026-07-02, 00:40:14](https://news.ycombinator.com/item?id=48754963) - [Global review confirms mRNA vaccines are safe, effective and full of promise ](https://news.ubc.ca/2026/06/mrna-vaccines-are-safe-effective-and-full-of-promise/)
* [2026-07-02, 00:36:55](https://lobste.rs/s/0kc445/unprivileged_root_via_out_bounds_write) - [Unprivileged root via an out-of-bounds write in the FUSE readdir cache (CVE-2026-31694)](https://cyberstan.co.uk/fuse-readdir-oob/)
* [2026-07-01, 23:56:15](https://news.ycombinator.com/item?id=48754700) - [The &lt;Usermedia&gt; HTML Element](https://developer.chrome.com/blog/usermedia-html-element)
* [2026-07-01, 23:00:00](https://yro.slashdot.org/story/26/07/01/2255231/t-mobile-appears-to-be-quitting-vmware-amid-support-rights-lawsuit-with-broadcom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [T-Mobile Appears To Be Quitting VMware Amid Support Rights Lawsuit With Broadcom](https://yro.slashdot.org/story/26/07/01/2255231/t-mobile-appears-to-be-quitting-vmware-amid-support-rights-lawsuit-with-broadcom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-01, 22:39:15](https://news.ycombinator.com/item?id=48754080) - [The Underhanded C Contest](https://underhanded-c.org/)
* [2026-07-01, 22:27:47](https://news.ycombinator.com/item?id=48753979) - [Opening up &apos;Zero-Knowledge Proof&apos; technology to promote privacy in age assurance](https://blog.google/innovation-and-ai/technology/safety-security/opening-up-zero-knowledge-proof-technology-to-promote-privacy-in-age-assurance/)
* [2026-07-01, 22:03:36](https://news.ycombinator.com/item?id=48753715) - [ZCode – Harness for GLM-5.2](https://zcode.z.ai/en)
* [2026-07-01, 22:00:00](https://meta.slashdot.org/story/26/07/01/1952253/meta-is-reportedly-building-its-own-cloud-business?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Is Reportedly Building Its Own Cloud Business](https://meta.slashdot.org/story/26/07/01/1952253/meta-is-reportedly-building-its-own-cloud-business?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-01, 21:42:57](https://news.ycombinator.com/item?id=48753524) - [Chip Off The Old Block](https://www.astralcodexten.com/p/chip-off-the-old-block)
* [2026-07-01, 21:05:00](https://soylentnews.org/article.pl?sid=26/06/30/0946220&amp;from=rss) - [Malaysia Ponders Regulating Management of IP Addresses](https://soylentnews.org/article.pl?sid=26/06/30/0946220&amp;from=rss)
* [2026-07-01, 21:01:42](https://news.ycombinator.com/item?id=48753069) - [Qualcomm Linux 2.0](https://www.qualcomm.com/developer/blog/2026/06/qualcomm-linux-2-now-available)
* [2026-07-01, 21:00:14](https://news.ycombinator.com/item?id=48753045) - [Proliferate (YC S25) Is Hiring](https://www.ycombinator.com/companies/proliferate/jobs/mMHvKR9-founding-product-engineer)
* [2026-07-01, 21:00:00](https://tech.slashdot.org/story/26/07/01/1930218/cloudflare-pushes-ai-companies-to-pay-for-publishers-content?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cloudflare Pushes AI Companies To Pay For Publishers&apos; Content](https://tech.slashdot.org/story/26/07/01/1930218/cloudflare-pushes-ai-companies-to-pay-for-publishers-content?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-01, 20:47:41](https://news.ycombinator.com/item?id=48752905) - [Show HN: Searchable directory of 22k+ products from worker-owned co-ops](https://www.workerowned.info/)
* [2026-07-01, 20:00:00](https://science.slashdot.org/story/26/07/01/1912205/scientists-made-a-cell-from-scratch-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Made a Cell From Scratch For First Time](https://science.slashdot.org/story/26/07/01/1912205/scientists-made-a-cell-from-scratch-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-01, 19:00:00](https://tech.slashdot.org/story/26/07/01/1743219/reddit-will-require-you-to-log-in-to-use-old-reddit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Reddit Will Require You To Log In To Use Old Reddit](https://tech.slashdot.org/story/26/07/01/1743219/reddit-will-require-you-to-log-in-to-use-old-reddit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-01, 18:12:18](https://news.ycombinator.com/item?id=48750989) - [Weave Robotics launches Isaac 1, a $7,999 home robot with Fall 2026 deliveries](https://www.weaverobotics.com/isaac-1)
* [2026-07-01, 18:00:07](https://news.ycombinator.com/item?id=48750803) - [Learn Vim motions with an ice-cream van](https://thisismodest.com/vimscoops/)
* [2026-07-01, 18:00:00](https://games.slashdot.org/story/26/07/01/1734219/sony-playstation-will-stop-releasing-games-on-discs-in-2028?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sony PlayStation Will Stop Releasing Games On Discs In 2028](https://games.slashdot.org/story/26/07/01/1734219/sony-playstation-will-stop-releasing-games-on-discs-in-2028?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-01, 17:53:44](https://news.ycombinator.com/item?id=48750710) - [What to learn to be a graphics programmer](https://blog.demofox.org/2026/07/01/what-to-learn-to-be-a-graphics-programmer/)
* [2026-07-01, 17:29:00](https://lobste.rs/s/z2wzap/open_source_as_infrastructure_taking) - [Open Source as Infrastructure: Taking Roads and Bridges literally](https://nesbitt.io/2026/06/30/taking-roads-and-bridges-literally.html)
* [2026-07-01, 17:23:00](https://yro.slashdot.org/story/26/07/01/1721251/meta-loses-bid-to-dismiss-us-states-claims-that-facebook-instagram-addict-children?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Loses Bid To Dismiss US States&apos; Claims That Facebook, Instagram Addict Children](https://yro.slashdot.org/story/26/07/01/1721251/meta-loses-bid-to-dismiss-us-states-claims-that-facebook-instagram-addict-children?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-01, 16:20:00](https://soylentnews.org/article.pl?sid=26/06/30/0941251&amp;from=rss) - [Australia&apos;s Floating Solar Panels Solve Two Resource Problems at Once](https://soylentnews.org/article.pl?sid=26/06/30/0941251&amp;from=rss)
* [2026-07-01, 16:04:07](https://lobste.rs/s/iloa3u/pidgin_3_0_alpha_2_2_96_0_has_been_released) - [Pidgin 3.0 Alpha 2 (2.96.0) has been released](https://discourse.imfreedom.org/t/pidgin-3-0-alpha-2-2-96-0-has-been-released/398)
* [2026-07-01, 16:00:00](https://science.slashdot.org/story/26/07/01/0613245/nasa-wants-to-send-spare-nuclear-powered-mars-rover-to-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Wants To Send Spare Nuclear-Powered Mars Rover To the Moon](https://science.slashdot.org/story/26/07/01/0613245/nasa-wants-to-send-spare-nuclear-powered-mars-rover-to-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-01, 15:16:54](https://lobste.rs/s/paoclp/graalvm_hello_world_program_down_just_6) - [GraalVM Hello World Program Down To \&quot;Just\&quot; 6.5MB](https://www.phoronix.com/news/GraalVM-Community-25.1.3)
* [2026-07-01, 15:01:21](https://news.ycombinator.com/item?id=48747976) - [Ask HN: Who is hiring? (July 2026)](https://news.ycombinator.com/item?id=48747976)
* [2026-07-01, 15:01:21](https://news.ycombinator.com/item?id=48747975) - [Ask HN: Who wants to be hired? (July 2026)](https://news.ycombinator.com/item?id=48747975)
* [2026-07-01, 14:55:34](https://lobste.rs/s/thkwcf/us_supreme_court_just_blew_up_eu_us_data) - [US Supreme Court just blew up EU-US Data Transfers](https://noyb.eu/en/us-supreme-court-just-blew-eu-us-data-transfers)
* [2026-07-01, 14:20:52](https://news.ycombinator.com/item?id=48747304) - [For first time, a cell built from scratch grows and divides](https://www.quantamagazine.org/for-the-first-time-a-cell-built-from-scratch-grows-and-divides-20260701/)
* [2026-07-01, 14:19:33](https://lobste.rs/s/bsojea/gameboy_emulator_on_esp32_eink) - [GameBoy Emulator on ESP32 + Eink](https://www.youtube.com/watch?v=oPbOK90aJEo)
* [2026-07-01, 14:10:28](https://news.ycombinator.com/item?id=48747116) - [FFmpeg 9.1&apos;s new AAC encoder](https://hydrogenaudio.org/index.php/topic,129691.0.html)
* [2026-07-01, 14:00:35](https://lobste.rs/s/dvhioc/progress_report_linux_7_1_asahi_linux) - [Progress Report: Linux 7.1 - Asahi Linux](https://asahilinux.org/2026/06/progress-report-7-1/)
* [2026-07-01, 13:59:13](https://news.ycombinator.com/item?id=48746914) - [Monetization Gateway: Charge for any resource behind Cloudflare via x402](https://blog.cloudflare.com/monetization-gateway/)
* [2026-07-01, 13:38:39](https://lobste.rs/s/jcdcit/announcing_box3d) - [Announcing Box3D](https://box2d.org/posts/2026/06/announcing-box3d/)
* [2026-07-01, 13:04:16](https://news.ycombinator.com/item?id=48746076) - [Internal Combustion Engine (2021)](https://ciechanow.ski/internal-combustion-engine/)
* [2026-07-01, 12:00:00](https://science.slashdot.org/story/26/07/01/064221/the-vera-rubin-telescope-begins-surveying-our-cosmos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Vera Rubin Telescope Begins Surveying Our Cosmos](https://science.slashdot.org/story/26/07/01/064221/the-vera-rubin-telescope-begins-surveying-our-cosmos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-01, 11:58:15](https://lobste.rs/s/pth2bm/internet_i_grew_up_with_doesn_t_exist) - [The Internet I Grew Up With Doesn’t Exist Anymore](https://cleberg.net/blog/internet.html)
* [2026-07-01, 11:38:00](https://soylentnews.org/article.pl?sid=26/06/30/0939227&amp;from=rss) - [PlayStation Removes Over 500 Purchased Movies](https://soylentnews.org/article.pl?sid=26/06/30/0939227&amp;from=rss)
* [2026-07-01, 11:29:46](https://lobste.rs/s/4liqdw/all_package_management_functionality) - [All Package Management Functionality Moved from Compiler to Build System](https://ziglang.org/devlog/2026/?2026-06-30#2026-06-30)
* [2026-07-01, 10:59:34](https://lobste.rs/s/knec7o/changes_godot_engine_contribution) - [Changes to Godot Engine Contribution Policies](https://godotengine.org/article/contribution-policy-2026/)
* [2026-07-01, 10:32:50](https://lobste.rs/s/qwk5vn/building_passive_ethernet_tap) - [Building a passive Ethernet tap](https://blog.lvmbdv.dev/posts/building-a-passive-ethernet-tap/)
* [2026-07-01, 10:22:06](https://lobste.rs/s/w01x4p/which_github_features_are_needed_code) - [Which GitHub features are needed in a code forge before you can migrate?](https://lobste.rs/s/w01x4p/which_github_features_are_needed_code)
* [2026-07-01, 09:00:00](https://tech.slashdot.org/story/26/07/01/0554258/dot-announces-return-of-supersonic-flight-for-commercial-airlines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DOT Announces &apos;Return of Supersonic Flight&apos; For Commercial Airlines](https://tech.slashdot.org/story/26/07/01/0554258/dot-announces-return-of-supersonic-flight-for-commercial-airlines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-01, 08:01:30](https://lobste.rs/s/ivfo77/who_s_hiring_q3_2026) - [Who&apos;s hiring? Q3 2026](https://lobste.rs/s/ivfo77/who_s_hiring_q3_2026)
* [2026-07-01, 06:54:13](https://lobste.rs/s/ujlr19/uruky_paid_european_search_engine) - [Uruky - The Paid European Search Engine](https://robheghan.prose.sh/26_06_30_uruky)
* [2026-07-01, 06:51:00](https://soylentnews.org/article.pl?sid=26/06/30/0934235&amp;from=rss) - [Lenovo Says The &apos;RAMageddon&apos; Is The New Normal, Outlines Survival Guide](https://soylentnews.org/article.pl?sid=26/06/30/0934235&amp;from=rss)
* [2026-07-01, 06:00:00](https://yro.slashdot.org/story/26/07/01/0545222/trump-drops-restrictions-on-anthropics-mythos-and-fable-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Drops Restrictions On Anthropic&apos;s Mythos and Fable Models](https://yro.slashdot.org/story/26/07/01/0545222/trump-drops-restrictions-on-anthropics-mythos-and-fable-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-01, 03:30:00](https://yro.slashdot.org/story/26/06/30/2157253/new-florida-law-bans-local-net-zero-emissions-policies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Florida Law Bans Local Net-Zero Emissions Policies](https://yro.slashdot.org/story/26/06/30/2157253/new-florida-law-bans-local-net-zero-emissions-policies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-01, 02:10:00](https://soylentnews.org/article.pl?sid=26/06/30/0929204&amp;from=rss) - [Scientists Build a Better Pixel Capable of Emitting and Receiving Light](https://soylentnews.org/article.pl?sid=26/06/30/0929204&amp;from=rss)
* [2026-07-01, 01:38:44](https://lobste.rs/s/v7ghbn/it_s_not_me_it_s_compiler) - [It&apos;s not me, it&apos;s the compiler](https://parsa.wtf/cast/)
* [2026-07-01, 00:22:41](https://news.ycombinator.com/item?id=48740971) - [Why jet engines aren&apos;t made in China](https://aakash.substack.com/p/why-jet-engines-arent-made-in-china)
* [2026-07-01, 00:17:06](https://lobste.rs/s/rfkmw3/what_happened_fight_for_internet) - [What happened to the fight for the internet?](https://dustycloud.org/blog/what-happened-to-the-fight-for-the-internet/)
* [2026-06-30, 23:00:00](https://yro.slashdot.org/story/26/06/30/2149243/amazon-blames-piracy-apps-with-malware-for-killing-new-fire-stick-sideloading?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Blames Piracy Apps With Malware For Killing New Fire Stick Sideloading](https://yro.slashdot.org/story/26/06/30/2149243/amazon-blames-piracy-apps-with-malware-for-killing-new-fire-stick-sideloading?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-30, 22:16:39](https://lobste.rs/s/96kp1m/jj_jj_jj_jj_jj) - [jj jj jj jj jj](https://caiustheory.com/jj-jj-jj-jj-jj/)
* [2026-06-30, 21:25:00](https://soylentnews.org/article.pl?sid=26/06/29/191210&amp;from=rss) - [I Built A Whole-Home Ad Blocker With A $7 ESP32-S3 Board - And It Took Just Minutes](https://soylentnews.org/article.pl?sid=26/06/29/191210&amp;from=rss)
* [2026-06-30, 19:04:44](https://lobste.rs/s/qs2sxd/claude_code_is_steganographically) - [Claude Code Is Steganographically Marking Requests](https://thereallo.dev/blog/claude-code-prompt-steganography)
* [2026-06-30, 16:41:00](https://soylentnews.org/article.pl?sid=26/06/29/1852228&amp;from=rss) - [Ford Rehires ‘Gray Beard’ Engineers After AI Falls Short](https://soylentnews.org/article.pl?sid=26/06/29/1852228&amp;from=rss)
* [2026-06-30, 13:59:32](https://news.ycombinator.com/item?id=48732860) - [How do wombats poop cubes?](https://www.science.org/content/article/how-do-wombats-poop-cubes-scientists-get-bottom-mystery)
* [2026-06-30, 11:49:00](https://soylentnews.org/article.pl?sid=26/06/29/1850225&amp;from=rss) - [Intel&apos;s Next-Gen 52-Core Nova Lake CPU Could Pull Up To 474W — May Need Three 8-Pin Power Connectors](https://soylentnews.org/article.pl?sid=26/06/29/1850225&amp;from=rss)
* [2026-06-30, 08:58:41](https://news.ycombinator.com/item?id=48730151) - [Database Traffic Control](https://planetscale.com/blog/introducing-database-traffic-control)
* [2026-06-30, 07:05:00](https://soylentnews.org/article.pl?sid=26/06/29/1848249&amp;from=rss) - [Mark Zuckerberg Is Selflessly Building Yet Another Horrible Product Nobody Asked For](https://soylentnews.org/article.pl?sid=26/06/29/1848249&amp;from=rss)
* [2026-06-30, 02:18:00](https://soylentnews.org/article.pl?sid=26/06/29/1844208&amp;from=rss) - [The Boeing 747 Begins Its Final Descent](https://soylentnews.org/article.pl?sid=26/06/29/1844208&amp;from=rss)
* [2026-06-29, 21:33:00](https://soylentnews.org/article.pl?sid=26/06/28/1824219&amp;from=rss) - [Administration Tells US Techies It Expects American Quantum Computer by 2028](https://soylentnews.org/article.pl?sid=26/06/28/1824219&amp;from=rss)
* [2026-06-29, 18:23:02](https://news.ycombinator.com/item?id=48723102) - [The Apple Disk II Controller Card (2021)](https://www.bigmessowires.com/2021/11/12/the-amazing-disk-ii-controller-card/)
* [2026-06-29, 18:04:41](https://news.ycombinator.com/item?id=48722819) - [Avo 4 released – 15 months and 2000 commits later](https://avohq.io/blog/avo-4)
* [2026-06-29, 16:48:00](https://soylentnews.org/article.pl?sid=26/06/28/1820239&amp;from=rss) - [Brits Still Reckon Big Tech Isn&apos;t Paying Enough Tax](https://soylentnews.org/article.pl?sid=26/06/28/1820239&amp;from=rss)
* [2026-06-29, 12:02:00](https://soylentnews.org/article.pl?sid=26/06/28/1816241&amp;from=rss) - [Five Eyes Spooks Warn AI Means Infosec Incidents Can Become &apos;Major Operational and Financial Crises&apos;](https://soylentnews.org/article.pl?sid=26/06/28/1816241&amp;from=rss)
* [2026-06-29, 07:16:00](https://soylentnews.org/article.pl?sid=26/06/28/188242&amp;from=rss) - [SK Telecom Named as the Korean Carrier at the Center of Anthropic&apos;s Mythos Export Controls](https://soylentnews.org/article.pl?sid=26/06/28/188242&amp;from=rss)
* [2026-06-29, 02:32:00](https://soylentnews.org/article.pl?sid=26/06/28/183229&amp;from=rss) - [Photoshop Now Censors Your Art as You Edit](https://soylentnews.org/article.pl?sid=26/06/28/183229&amp;from=rss)
* [2026-06-28, 21:48:00](https://soylentnews.org/article.pl?sid=26/06/27/1833254&amp;from=rss) - [Acoustic Mapping App Uses Thousands of Networked Old Android Phones to Hunt Shahed Drones](https://soylentnews.org/article.pl?sid=26/06/27/1833254&amp;from=rss)
* [2026-06-28, 17:01:00](https://soylentnews.org/article.pl?sid=26/06/27/1825233&amp;from=rss) - [How Do Airbags Deploy So Quickly in a Crash? The Physics, Explained](https://soylentnews.org/article.pl?sid=26/06/27/1825233&amp;from=rss)
* [2026-06-28, 15:06:43](https://news.ycombinator.com/item?id=48707979) - [The vibration of the pager has a sound all its own](https://www.notyouremergency.com/triage-intro)
* [2026-06-28, 12:19:00](https://soylentnews.org/article.pl?sid=26/06/27/1820224&amp;from=rss) - [‘Cost Me the Election’: Data Centers Trigger Voter Backlash](https://soylentnews.org/article.pl?sid=26/06/27/1820224&amp;from=rss)
* [2026-06-28, 07:36:00](https://soylentnews.org/article.pl?sid=26/06/27/1818212&amp;from=rss) - [I Stored a Website in a Favicon](https://soylentnews.org/article.pl?sid=26/06/27/1818212&amp;from=rss)
* [2026-06-28, 02:54:00](https://soylentnews.org/article.pl?sid=26/06/27/1815209&amp;from=rss) - [ASML Denies US Government Report That its EUV Chipmaking Tool Was Shipped to China](https://soylentnews.org/article.pl?sid=26/06/27/1815209&amp;from=rss)
