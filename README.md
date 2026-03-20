# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Advancements and AI

* [OpenCode – The open source AI coding agent](https://opencode.ai/) ([Comments](https://news.ycombinator.com/item?id=47460525)): An innovation in coding tools, OpenCode emerges as an AI-powered open-source agent aimed at enhancing debugging and programming efficiency.

* [OpenAI Plans Launch of Desktop 'Superapp'](https://slashdot.org/story/26/03/20/1711251/openai-plans-launch-of-desktop-superapp?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=47460452)): OpenAI seeks to revolutionize daily workflows by integrating diverse AI tools into a single superapp for desktops.

* [Attention Residuals](https://github.com/MoonshotAI/Attention-Residuals) ([Comments](https://news.ycombinator.com/item?id=47458595)): Exploration of a new AI-related method presents promising improvements in machine learning architectures.

## Business and Legal Updates

* [DOJ Charges Super Micro Co-Founder For Smuggling $2.5 Billion In Nvidia GPUs To China](https://yro.slashdot.org/story/26/03/20/177200/doj-charges-super-micro-co-founder-for-smuggling-25-billion-in-nvidia-gpus-to-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=47458348)): Investigation into illegal AI hardware smuggling implicates a high-profile tech executive.

* [Super Micro Shares Plunge 25% After Co-Founder Charged in $2.5B Smuggling Plot](https://www.forbes.com/sites/tylerroush/2026/03/20/super-micro-shares-plunge-25-after-co-founder-charged-in-25-billion-ai-chip-smuggling-plot/) ([Comments](https://news.ycombinator.com/item?id=47455365)): The aftermath of legal charges against a co-founder cripples the company’s stock valuation.

* [Amazon Plans Smartphone Comeback More Than a Decade After Fire Phone Flop](https://mobile.slashdot.org/story/26/03/20/1556216/amazon-plans-smartphone-comeback-more-than-a-decade-after-fire-phone-flop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=47457472)): Amazon strategizes a reentry into the smartphone market after its earlier failure with the Fire Phone.

## Cultural and Social Trends

* [A Japanese Glossary of Chopsticks Faux Pas](https://www.nippon.com/en/japan-data/h01362/) ([Comments](https://news.ycombinator.com/item?id=47460452)): Japanese traditions highlight common dining etiquette that is often misunderstood by outsiders.

* [The Social Smolnet](https://ploum.net/2026-03-20-social-smolnet.html) ([Comments](https://news.ycombinator.com/item?id=47453947)): A perspective on minimalist and localized social networks as an antidote to mainstream platforms.

* [France's aircraft carrier located in real time by Le Monde through fitness app](https://www.lemonde.fr/en/international/article/2026/03/20/stravaleaks-france-s-aircraft-carrier-located-in-real-time-by-le-monde-through-fitness-app_6751640_4.html) ([Comments](https://news.ycombinator.com/item?id=47453942)): Misuse of fitness apps leads to unintended security exposures of military operations.

## Scientific Discoveries and Research

* [Researchers Played Music to Cells – Aggressiveness of Laryngeal Cancer Decreased](https://soylentnews.org/article.pl?sid=26/03/19/1635218&amp;from=rss) ([Comments](https://news.ycombinator.com/item?id=47458348)): Exploring unconventional therapies, a study demonstrates music’s potential impact on cancer cell behaviors.

* [The Ongoing Strait of Hormuz Blockage Will Impact the Semiconductor and AI Industries](https://soylentnews.org/article.pl?sid=26/03/19/035202&amp;from=rss) ([Comments](https://news.ycombinator.com/item?id=47450478)): Critical trade routes face disruption, signaling challenges for tech hardware supply chains.

* [Entso-E final report on Iberian 2025 blackout](https://www.entsoe.eu/publications/blackout/28-april-2025-iberian-blackout/) ([Comments](https://news.ycombinator.com/item?id=47452955)): A comprehensive study reveals the causes and cascading impacts of a historic regional blackout.

## Developer Insights and Tools

* [Developer Spotlight: Somtochi Onyekwere from Fly.io](https://theconsensus.dev/p/2026/03/19/developer-spotlight-somtochi-onyekwere.html) ([Comments](https://lobste.rs/s/4ovp13/developer_spotlight_somtochi_onyekwere)): Insightful reflections from a developer innovating in cloud technology spaces.

* [Show HN: Sonar – A tiny CLI to see and kill whatever's running on localhost](https://github.com/RasKrebs/sonar) ([Comments](https://news.ycombinator.com/item?id=47452515)): Launch of a lightweight tool simplifies local development workflows for developers.

* [Adding Live Reload to a Static Site Generator Written in Go](https://jon.chrt.dev/2026/03/20/adding-live-reload-to-a-static-site-generator-written-in-go.html) ([Comments](https://lobste.rs/s/ldglpx/adding_live_reload_static_site_generator)): Innovations in Go-based development streamline the static website creation process.

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

* [2026-03-20, 21:03:52](https://news.ycombinator.com/item?id=47460525) - [OpenCode – The open source AI coding agent](https://opencode.ai/)
* [2026-03-20, 21:00:00](https://hardware.slashdot.org/story/26/03/20/2035252/work-from-home-and-drive-more-slowly-to-save-energy-iea-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Work From Home and Drive More Slowly To Save Energy, IEA Says](https://hardware.slashdot.org/story/26/03/20/2035252/work-from-home-and-drive-more-slowly-to-save-energy-iea-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-20, 20:54:57](https://news.ycombinator.com/item?id=47460452) - [A Japanese Glossary of Chopsticks Faux Pas](https://www.nippon.com/en/japan-data/h01362/)
* [2026-03-20, 20:25:23](https://news.ycombinator.com/item?id=47460154) - [The bespoke software revolution? I&apos;m not buying it](https://world.hey.com/jason/the-bespoke-software-revolution-i-m-not-buying-it-4bfad9ec)
* [2026-03-20, 20:00:00](https://slashdot.org/story/26/03/20/1711251/openai-plans-launch-of-desktop-superapp?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Plans Launch of Desktop &apos;Superapp&apos;](https://slashdot.org/story/26/03/20/1711251/openai-plans-launch-of-desktop-superapp?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-20, 19:51:54](https://lobste.rs/s/4ovp13/developer_spotlight_somtochi_onyekwere) - [Developer Spotlight: Somtochi Onyekwere from Fly.io](https://theconsensus.dev/p/2026/03/19/developer-spotlight-somtochi-onyekwere.html)
* [2026-03-20, 19:29:39](https://news.ycombinator.com/item?id=47459447) - [NumKong: 2&apos;000 Mixed Precision Kernels for All](https://ashvardanian.com/posts/numkong/)
* [2026-03-20, 19:16:13](https://news.ycombinator.com/item?id=47459296) - [Our commitment to Windows quality](https://blogs.windows.com/windows-insider/2026/03/20/our-commitment-to-windows-quality/)
* [2026-03-20, 19:00:00](https://news.slashdot.org/story/26/03/20/1725229/oregon-school-cell-phone-ban-engaged-students-joyful-teachers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Oregon School Cell Phone Ban: &apos;Engaged Students, Joyful Teachers&apos;](https://news.slashdot.org/story/26/03/20/1725229/oregon-school-cell-phone-ban-engaged-students-joyful-teachers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-20, 18:43:40](https://lobste.rs/s/vfsjtm/linear_temporal_logic_visualizer) - [Linear Temporal Logic Visualizer](https://quickstrom.github.io/ltl-visualizer/)
* [2026-03-20, 18:23:41](https://news.ycombinator.com/item?id=47458595) - [Attention Residuals](https://github.com/MoonshotAI/Attention-Residuals)
* [2026-03-20, 18:08:40](https://lobste.rs/s/ldglpx/adding_live_reload_static_site_generator) - [Adding Live Reload to a Static Site Generator Written in Go](https://jon.chrt.dev/2026/03/20/adding-live-reload-to-a-static-site-generator-written-in-go.html)
* [2026-03-20, 18:06:20](https://news.ycombinator.com/item?id=47458348) - [Show HN: I made an email app inspired by Arc browser](https://demo.define.app)
* [2026-03-20, 18:00:00](https://yro.slashdot.org/story/26/03/20/177200/doj-charges-super-micro-co-founder-for-smuggling-25-billion-in-nvidia-gpus-to-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DOJ Charges Super Micro Co-Founder For Smuggling $2.5 Billion In Nvidia GPUs To China](https://yro.slashdot.org/story/26/03/20/177200/doj-charges-super-micro-co-founder-for-smuggling-25-billion-in-nvidia-gpus-to-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-20, 17:55:57](https://lobste.rs/s/4fhlaz/trivy_compromised_second_time_malicious) - [Trivy Compromised a Second Time - Malicious v0.69.4 Release](https://www.stepsecurity.io/blog/trivy-compromised-a-second-time---malicious-v0-69-4-release)
* [2026-03-20, 17:53:00](https://soylentnews.org/article.pl?sid=26/03/19/1635218&amp;from=rss) - [Researchers Played Music to Cells – Aggressiveness of Laryngeal Cancer Decreased](https://soylentnews.org/article.pl?sid=26/03/19/1635218&amp;from=rss)
* [2026-03-20, 17:42:40](https://lobste.rs/s/8iyfng/related_ui_elements_should_not_appear) - [Related UI elements should not appear unrelated](https://rakhim.exotext.com/related-ui-elements-should-not-appear-unrelated)
* [2026-03-20, 17:05:38](https://news.ycombinator.com/item?id=47457472) - [Launch HN: Sitefire (YC W26) – Automating actions to improve AI visibility](https://news.ycombinator.com/item?id=47457472)
* [2026-03-20, 17:00:00](https://news.slashdot.org/story/26/03/20/1643218/chuck-norris-dies-at-86?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chuck Norris Dies At 86](https://news.slashdot.org/story/26/03/20/1643218/chuck-norris-dies-at-86?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-20, 16:27:31](https://lobste.rs/s/bekb7j/lobsters_interview_with_internet) - [Lobsters Interview with Internet_Jannitor](https://alexalejandre.com/programming/interview-with-john-earnest/)
* [2026-03-20, 16:24:22](https://lobste.rs/s/phidcq/emacs_internal_01_is_lisp_runtime_c_not) - [Emacs Internal #01: is a Lisp Runtime in C, Not an Editor](https://thecloudlet.github.io/technical/project/emacs-01/)
* [2026-03-20, 16:14:06](https://lobste.rs/s/eewvj8/what_we_heard_about_rust_s_challenges_how) - [What we heard about Rust&apos;s challenges, and how we can address them](https://blog.rust-lang.org/2026/03/20/rust-challenges.md/)
* [2026-03-20, 16:00:00](https://mobile.slashdot.org/story/26/03/20/1556216/amazon-plans-smartphone-comeback-more-than-a-decade-after-fire-phone-flop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Plans Smartphone Comeback More Than a Decade After Fire Phone Flop](https://mobile.slashdot.org/story/26/03/20/1556216/amazon-plans-smartphone-comeback-more-than-a-decade-after-fire-phone-flop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-20, 15:00:00](https://slashdot.org/story/26/03/19/2231252/as-openclaw-enthusiasm-grips-china-kids-and-retirees-alike-raise-lobsters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [As OpenClaw Enthusiasm Grips China, Kids and Retirees Alike Raise &apos;Lobsters&apos;](https://slashdot.org/story/26/03/19/2231252/as-openclaw-enthusiasm-grips-china-kids-and-retirees-alike-raise-lobsters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-20, 14:48:09](https://news.ycombinator.com/item?id=47455365) - [Super Micro Shares Plunge 25% After Co-Founder Charged in $2.5B Smuggling Plot](https://www.forbes.com/sites/tylerroush/2026/03/20/super-micro-shares-plunge-25-after-co-founder-charged-in-25-billion-ai-chip-smuggling-plot/)
* [2026-03-20, 14:24:28](https://lobste.rs/s/htjtfq/thunderbird_introducing_our_public) - [Thunderbird: Introducing our Public Roadmaps](https://blog.thunderbird.net/2026/03/introducing-our-public-roadmaps/)
* [2026-03-20, 13:53:48](https://lobste.rs/s/ghtnpx/i_m_ok_being_left_behind_thanks) - [I&apos;m OK being left behind, thanks](https://shkspr.mobi/blog/2026/03/im-ok-being-left-behind-thanks/)
* [2026-03-20, 13:47:35](https://lobste.rs/s/fg34ds/good_bad_leaky_jemalloc_bumpalo_mimalloc) - [The Good, the Bad, and the Leaky: jemalloc, bumpalo, and mimalloc in meilisearch](https://blog.kerollmops.com/the-good-the-bad-and-the-leaky-jemalloc-bumpalo-and-mimalloc-in-meilisearch)
* [2026-03-20, 13:43:23](https://news.ycombinator.com/item?id=47454384) - [Java is fast, code might not be](https://jvogel.me/posts/2026/java-is-fast-your-code-might-not-be/)
* [2026-03-20, 13:23:56](https://news.ycombinator.com/item?id=47454164) - [HP trialed mandatory 15-minute support call wait times (2025)](https://arstechnica.com/gadgets/2025/02/misguided-hp-customer-support-approach-included-forced-15-minute-call-wait-times/)
* [2026-03-20, 13:02:19](https://news.ycombinator.com/item?id=47453947) - [The Social Smolnet](https://ploum.net/2026-03-20-social-smolnet.html)
* [2026-03-20, 13:01:56](https://news.ycombinator.com/item?id=47453942) - [France&apos;s aircraft carrier located in real time by Le Monde through fitness app](https://www.lemonde.fr/en/international/article/2026/03/20/stravaleaks-france-s-aircraft-carrier-located-in-real-time-by-le-monde-through-fitness-app_6751640_4.html)
* [2026-03-20, 12:46:00](https://soylentnews.org/article.pl?sid=26/03/19/0318230&amp;from=rss) - [Elon Musk Says His Chipmaking &apos;Terafab Project&apos; Venture Will Launch in Seven Days](https://soylentnews.org/article.pl?sid=26/03/19/0318230&amp;from=rss)
* [2026-03-20, 12:30:38](https://lobste.rs/s/lzg26o/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/lzg26o/what_are_you_doing_this_weekend)
* [2026-03-20, 12:16:15](https://lobste.rs/s/5pkjai/wayland_set_linux_desktop_back_by_10_years) - [Wayland set the Linux Desktop back by 10 years](https://omar.yt/posts/wayland-set-the-linux-desktop-back-by-10-years)
* [2026-03-20, 11:59:40](https://lobste.rs/s/ozandm/social_smolnet) - [The Social Smolnet](https://ploum.net/2026-03-20-social-smolnet.html)
* [2026-03-20, 11:16:14](https://lobste.rs/s/wictlh/unified_modules_for_your_nixfiles) - [Unified Modules For Your Nixfiles](https://jadarma.github.io/blog/posts/2026/03/unified-modules-for-your-nixfiles/)
* [2026-03-20, 11:03:27](https://news.ycombinator.com/item?id=47452955) - [Entso-E final report on Iberian 2025 blackout](https://www.entsoe.eu/publications/blackout/28-april-2025-iberian-blackout/)
* [2026-03-20, 11:00:00](https://linux.slashdot.org/story/26/03/19/2224251/opera-gx-web-browser-comes-to-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Opera GX Web Browser Comes To Linux](https://linux.slashdot.org/story/26/03/19/2224251/opera-gx-web-browser-comes-to-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-20, 10:43:55](https://lobste.rs/s/oh23lt/fedora_asahi_remix_43_is_now_available) - [Fedora Asahi Remix 43 is now available](https://fedoramagazine.org/fedora-asahi-remix-43-is-now-available/)
* [2026-03-20, 10:21:12](https://lobste.rs/s/cvt7fd/enshittifaication) - [EnshittifAIcation](https://it-notes.dragas.net/2026/03/20/enshittifaication/)
* [2026-03-20, 09:59:56](https://news.ycombinator.com/item?id=47452515) - [Show HN: Sonar – A tiny CLI to see and kill whatever&apos;s running on localhost](https://github.com/RasKrebs/sonar)
* [2026-03-20, 09:40:56](https://news.ycombinator.com/item?id=47452399) - [The Soul of a Pedicab Driver](https://www.sheldonbrown.com/pedicab.html)
* [2026-03-20, 08:12:32](https://lobste.rs/s/4zl7y3/atuin_v18_13_better_search_pty_proxy_ai_for) - [Atuin v18.13 – better search, a PTY proxy, and AI for your shell](https://blog.atuin.sh/atuin-v18-13/)
* [2026-03-20, 07:57:00](https://soylentnews.org/article.pl?sid=26/03/19/0310236&amp;from=rss) - [Massive Interpol Operation Takes Down 45,000 Ip Addresses and Leads to 94 Arrests](https://soylentnews.org/article.pl?sid=26/03/19/0310236&amp;from=rss)
* [2026-03-20, 07:05:38](https://lobste.rs/s/1qcwfl/video_conferencing_with_durable_streams) - [Video Conferencing with Durable Streams](https://s2.dev/blog/video-conferencing)
* [2026-03-20, 07:00:00](https://hardware.slashdot.org/story/26/03/19/2157201/china-is-helping-drive-cubas-solar-boom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Is Helping Drive Cuba&apos;s Solar Boom](https://hardware.slashdot.org/story/26/03/19/2157201/china-is-helping-drive-cubas-solar-boom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-20, 04:55:43](https://lobste.rs/s/h008ee/100_kernel_bugs_30_days) - [100+ Kernel Bugs in 30 Days](https://substack.com/home/post/p-188916866)
* [2026-03-20, 04:24:11](https://news.ycombinator.com/item?id=47450478) - [ArXiv declares independence from Cornell](https://www.science.org/content/article/arxiv-pioneering-preprint-server-declares-independence-cornell)
* [2026-03-20, 03:30:00](https://tech.slashdot.org/story/26/03/19/2217208/eu-cloud-lobby-asks-regulator-to-block-vmware-from-terminating-partner-program?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EU Cloud Lobby Asks Regulator To Block VMware From Terminating Partner Program](https://tech.slashdot.org/story/26/03/19/2217208/eu-cloud-lobby-asks-regulator-to-block-vmware-from-terminating-partner-program?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-20, 03:27:11](https://lobste.rs/s/hjr72q/be_better_programmer_write_little_proofs) - [To be a better programmer, write little proofs in your head (2025)](https://blog.get-nerve.com/to-be-a-better-programmer-write-little-proofs-in-your-head/)
* [2026-03-20, 03:11:00](https://soylentnews.org/article.pl?sid=26/03/19/035202&amp;from=rss) - [The Ongoing Strait of Hormuz Blockage Will Impact the Semiconductor and AI Industries](https://soylentnews.org/article.pl?sid=26/03/19/035202&amp;from=rss)
* [2026-03-19, 23:00:00](https://tech.slashdot.org/story/26/03/19/2144200/online-bot-traffic-will-exceed-human-traffic-by-2027-cloudflare-ceo-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Online Bot Traffic Will Exceed Human Traffic By 2027, Cloudflare CEO Says](https://tech.slashdot.org/story/26/03/19/2144200/online-bot-traffic-will-exceed-human-traffic-by-2027-cloudflare-ceo-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-19, 22:23:00](https://soylentnews.org/article.pl?sid=26/03/19/0258237&amp;from=rss) - [Over Fifteen Years Later, Microsoft Morged My Diagram](https://soylentnews.org/article.pl?sid=26/03/19/0258237&amp;from=rss)
* [2026-03-19, 22:00:00](https://tech.slashdot.org/story/26/03/19/208232/4chan-mocks-700k-fine-for-uk-online-safety-breaches?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [4Chan Mocks $700K Fine For UK Online Safety Breaches](https://tech.slashdot.org/story/26/03/19/208232/4chan-mocks-700k-fine-for-uk-online-safety-breaches?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-19, 21:00:00](https://yro.slashdot.org/story/26/03/19/1936250/rogue-ai-triggers-serious-security-incident-at-meta?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rogue AI Triggers Serious Security Incident At Meta](https://yro.slashdot.org/story/26/03/19/1936250/rogue-ai-triggers-serious-security-incident-at-meta?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-19, 20:00:00](https://yro.slashdot.org/story/26/03/19/1912217/rapper-afroman-wins-defamation-lawsuit-over-use-of-police-raid-footage-in-his-music-videos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rapper Afroman Wins Defamation Lawsuit Over Use of Police Raid Footage In His Music Videos](https://yro.slashdot.org/story/26/03/19/1912217/rapper-afroman-wins-defamation-lawsuit-over-use-of-police-raid-footage-in-his-music-videos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-19, 19:08:02](https://news.ycombinator.com/item?id=47444319) - [Delve – Fake Compliance as a Service](https://deepdelver.substack.com/p/delve-fake-compliance-as-a-service)
* [2026-03-19, 19:00:00](https://developers.slashdot.org/story/26/03/19/1832217/google-details-new-24-hour-process-to-sideload-unverified-android-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Details New 24-Hour Process To Sideload Unverified Android Apps](https://developers.slashdot.org/story/26/03/19/1832217/google-details-new-24-hour-process-to-sideload-unverified-android-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-19, 17:50:28](https://lobste.rs/s/3qhmza/getting_ziggy_with_it_re_factor) - [Getting Ziggy With It – Re: Factor](https://re.factorcode.org/2026/03/getting-ziggy-with-it.html)
* [2026-03-19, 17:38:00](https://soylentnews.org/article.pl?sid=26/03/18/1530220&amp;from=rss) - [Predicted by Einstein 100 Years Ago, This Cosmic Phenomenon Has Finally Been Observed](https://soylentnews.org/article.pl?sid=26/03/18/1530220&amp;from=rss)
* [2026-03-19, 17:32:34](https://lobste.rs/s/g1ktjl/android_developer_verification) - [Android developer verification: Balancing openness and choice with safety](https://android-developers.googleblog.com/2026/03/android-developer-verification.html)
* [2026-03-19, 16:39:31](https://lobste.rs/s/nzg621/things_turbo_pascal_is_smaller_than_2011) - [Things That Turbo Pascal is Smaller Than (2011)](https://prog21.dadgum.com/116.html)
* [2026-03-19, 12:53:00](https://soylentnews.org/article.pl?sid=26/03/18/1524211&amp;from=rss) - [100 Years Later, Where is Robert Goddard&apos;s First Liquid-Fuel Rocket?](https://soylentnews.org/article.pl?sid=26/03/18/1524211&amp;from=rss)
* [2026-03-19, 12:32:27](https://lobste.rs/s/nfkpw4/ai_s_impact_on_mathematics_is_analogous) - [AI&apos;s impact on mathematics is analogous to the car&apos;s impact on cities](https://mathstodon.xyz/@tao/116252708577614828)
* [2026-03-19, 08:08:00](https://soylentnews.org/article.pl?sid=26/03/18/1522208&amp;from=rss) - [The Science of How Fireflies Stay in Sync](https://soylentnews.org/article.pl?sid=26/03/18/1522208&amp;from=rss)
* [2026-03-19, 03:23:00](https://soylentnews.org/article.pl?sid=26/03/17/0844255&amp;from=rss) - [Humanities in the Machine](https://soylentnews.org/article.pl?sid=26/03/17/0844255&amp;from=rss)
* [2026-03-18, 22:38:00](https://soylentnews.org/article.pl?sid=26/03/17/0839217&amp;from=rss) - [Chimps’ Love for Crystals Could Help Us Understand Our Own Ancestors’ Fascination With Gems](https://soylentnews.org/article.pl?sid=26/03/17/0839217&amp;from=rss)
* [2026-03-18, 20:52:30](https://news.ycombinator.com/item?id=47431304) - [Work_mem: It&apos;s a Trap](https://mydbanotebook.org/posts/work_mem-its-a-trap/)
* [2026-03-18, 17:54:00](https://soylentnews.org/politics/article.pl?sid=26/03/17/0835230&amp;from=rss) - [FCC Chairman Threatens To Revoke TV Licenses Over Iran Coverage](https://soylentnews.org/politics/article.pl?sid=26/03/17/0835230&amp;from=rss)
* [2026-03-18, 13:04:00](https://soylentnews.org/article.pl?sid=26/03/17/0831246&amp;from=rss) - [Woman Sneezes Out Maggots After Fly Larvae Get Trapped in Her Deviated Septum](https://soylentnews.org/article.pl?sid=26/03/17/0831246&amp;from=rss)
* [2026-03-18, 11:59:05](https://news.ycombinator.com/item?id=47424592) - [Parallel Perl – autoparallelizing interpreter with JIT](https://perl.petamem.com/gpw2026/perl-mit-ai-gpw2026.html#/4/1/1)
* [2026-03-18, 10:22:38](https://news.ycombinator.com/item?id=47423762) - [The worst volume control UI in the world (2017)](https://uxdesign.cc/the-worst-volume-control-ui-in-the-world-60713dc86950)
* [2026-03-18, 08:21:00](https://soylentnews.org/article.pl?sid=26/03/17/0828240&amp;from=rss) - [Research Shows How Lost Memories Can be Reactivated](https://soylentnews.org/article.pl?sid=26/03/17/0828240&amp;from=rss)
* [2026-03-18, 03:36:00](https://soylentnews.org/article.pl?sid=26/03/17/0827224&amp;from=rss) - [Apocalyptic Beliefs Are No Longer Fringe—and They&apos;re Shaping How People Respond](https://soylentnews.org/article.pl?sid=26/03/17/0827224&amp;from=rss)
* [2026-03-18, 02:28:23](https://news.ycombinator.com/item?id=47420950) - [Too Much Color](https://www.keithcirkel.co.uk/too-much-color/)
* [2026-03-17, 22:53:00](https://soylentnews.org/article.pl?sid=26/03/16/140213&amp;from=rss) - [Porsche Puts Its Faith Back in Internal Combustion Engines](https://soylentnews.org/article.pl?sid=26/03/16/140213&amp;from=rss)
* [2026-03-17, 21:00:54](https://news.ycombinator.com/item?id=47418247) - [Regex Blaster](https://mdp.github.io/regex-blaster/)
* [2026-03-17, 18:43:53](https://news.ycombinator.com/item?id=47416543) - [The Los Angeles Aqueduct Is Wild](https://practical.engineering/blog/2026/3/17/the-los-angeles-aqueduct-is-wild)
* [2026-03-17, 18:08:00](https://soylentnews.org/article.pl?sid=26/03/16/1356204&amp;from=rss) - [Meta is Ending Instagram Direct Message End-to-End Encryption](https://soylentnews.org/article.pl?sid=26/03/16/1356204&amp;from=rss)
* [2026-03-17, 13:23:00](https://soylentnews.org/article.pl?sid=26/03/16/1353215&amp;from=rss) - [IBM, Sonic Delay Lines, and the History of the 80×24 Display](https://soylentnews.org/article.pl?sid=26/03/16/1353215&amp;from=rss)
* [2026-03-17, 10:39:55](https://news.ycombinator.com/item?id=47410871) - [VisiCalc Reconstructed](https://zserge.com/posts/visicalc/)
* [2026-03-17, 08:38:00](https://soylentnews.org/article.pl?sid=26/03/15/1351230&amp;from=rss) - [Magnetars Drag Spacetime to Power Superluminous Supernovae](https://soylentnews.org/article.pl?sid=26/03/15/1351230&amp;from=rss)
* [2026-03-17, 05:38:26](https://news.ycombinator.com/item?id=47409055) - [Flash-KMeans: Fast and Memory-Efficient Exact K-Means](https://arxiv.org/abs/2603.09229)
* [2026-03-17, 03:57:00](https://soylentnews.org/article.pl?sid=26/03/15/1339231&amp;from=rss) - [Musk Fails To Block California Data Disclosure Law He Fears Will Ruin XAI](https://soylentnews.org/article.pl?sid=26/03/15/1339231&amp;from=rss)
* [2026-03-17, 01:02:41](https://news.ycombinator.com/item?id=47407293) - [Video Encoding and Decoding with Vulkan Compute Shaders in FFmpeg](https://www.khronos.org/blog/video-encoding-and-decoding-with-vulkan-compute-shaders-in-ffmpeg)
* [2026-03-17, 00:48:15](https://news.ycombinator.com/item?id=47407184) - [Show HN: An open-source safety net for home hemodialysis](https://safehemo.com/)
* [2026-03-16, 23:09:00](https://soylentnews.org/article.pl?sid=26/03/15/1330233&amp;from=rss) - [11-Month Old Russian Outfit Claims It Has Developed 16-Core and 32-Core Processors, Flaunts Cyrillic](https://soylentnews.org/article.pl?sid=26/03/15/1330233&amp;from=rss)
* [2026-03-16, 19:49:20](https://news.ycombinator.com/item?id=47403905) - [FSF statement on copyright infringement lawsuit Bartz v. Anthropic](https://www.fsf.org/blogs/licensing/2026-anthropic-settlement)
* [2026-03-16, 18:26:00](https://soylentnews.org/article.pl?sid=26/03/15/1328200&amp;from=rss) - [Google Fiber Will be Sold to Private Equity Firm and Merge With Cable Company](https://soylentnews.org/article.pl?sid=26/03/15/1328200&amp;from=rss)
* [2026-03-16, 13:37:00](https://soylentnews.org/article.pl?sid=26/03/15/1319251&amp;from=rss) - [Why the World&apos;s Militaries Are Scrambling to Create Their Own Starlink](https://soylentnews.org/article.pl?sid=26/03/15/1319251&amp;from=rss)
* [2026-03-16, 10:53:10](https://news.ycombinator.com/item?id=47397372) - [Just Put It on a Map](https://progressandpoverty.substack.com/p/just-put-it-on-a-map)
* [2026-03-16, 08:55:00](https://soylentnews.org/article.pl?sid=26/03/15/0111236&amp;from=rss) - [Iran Conflict Delays Meta&apos;s 2Africa Undersea Cable Project — Cable Layer Declares Force Majeure](https://soylentnews.org/article.pl?sid=26/03/15/0111236&amp;from=rss)
* [2026-03-16, 04:07:00](https://soylentnews.org/article.pl?sid=26/03/15/016219&amp;from=rss) - [Nvidia Is Reportedly Planning Its Own Open Source OpenClaw Competitor](https://soylentnews.org/article.pl?sid=26/03/15/016219&amp;from=rss)
