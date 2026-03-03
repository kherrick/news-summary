# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Amazon Cloud Unit's Data Centers In UAE, Bahrain Damaged In Drone Strikes](https://tech.slashdot.org/story/26/03/03/0423206/amazon-cloud-units-data-centers-in-uae-bahrain-damaged-in-drone-strikes?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Major disruptions as drone strikes affect Amazon's data centers in the UAE and Bahrain, showcasing the risks faced by digital infrastructure in conflict zones.

* [Stolen Gemini API key racks up $82,000 in 48 hours](https://llmhorrors.com/all/gemini-stolen-api-key-82k/) - The rapid exploitation of a stolen API key underscores the vulnerabilities in managing sensitive platform credentials.

* [Announcing npmx: a fast, modern browser for the npm registry](https://npmx.dev/blog/alpha-release) - A new modern tool to interact with the npm registry, promising improved speed and performance for developers.

* [The beauty and terror of modding Windows](https://windowsread.me/p/windhawk-explained) - Exploring the allure and risks of modifying Windows systems to enhance functionality and appearance.

* [Privacy-preserving age and identity verification via anonymous credentials](https://blog.cryptographyengineering.com/2026/03/02/anonymous-credentials-an-illustrated-primer/) - Innovations in anonymous credentials aim to enhance online age and identity verification without compromising user privacy.

* [I built a pint-sized Macintosh](https://www.jeffgeerling.com/blog/2026/pint-sized-macintosh-pico-micro-mac/) - A fascinating DIY project to build a miniature Macintosh using a Raspberry Pi.

* [I Put a Full JVM Inside a Browser Tab](https://bmarti44.substack.com/p/i-put-a-full-jvm-inside-a-browser) - A significant technical achievement embedding a full Java Virtual Machine directly inside a browser tab.

* [Detecting LLM-Generated Web Novels Using "Classical" Machine Learning (AIGC Text Detection)](https://blog.lyc8503.net/en/post/llm-classifier/) - Machine learning tackles the growing challenge of identifying AI-generated web content.

* [Physicists developing a quantum computer that’s entirely open source](https://physics.aps.org/articles/v19/24) - A groundbreaking effort to create accessible and transparent quantum computing platforms that invite collaboration from the tech community.

## Ethics and Society

* [Porn depicting sex between step-relatives set to be banned in the UK](https://www.lbc.co.uk/article/pornography-sexual-relationships-step-relatives-5HjdTkd_2/) - Ethical debates surface as the UK government sets to ban certain pornographic content.

* [India's top court angry after junior judge cites fake AI-generated orders](https://www.bbc.com/news/articles/c178zzw780xo) - Misuse of AI tools leads to significant legal fallout in an Indian court case.

* [Ars Technica fires reporter after AI controversy involving fabricated quotes](https://futurism.com/artificial-intelligence/ars-technica-fires-reporter-ai-quotes) - The ethical challenges of artificial intelligence in journalism come to light as a reporter is dismissed over fabricated quotes.

* [Charter Gets FCC Permission To Buy Cox, Become Largest ISP In the US](https://yro.slashdot.org/story/26/03/02/1856252/charter-gets-fcc-permission-to-buy-cox-become-largest-isp-in-the-us?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Controversial industry consolidation as Charter Communications prepares to be the largest ISP after acquiring Cox.

## Science and Environment

* [China's 450kmph bullet train is the fastest ever built](https://www.executivetraveller.com/news/china-cr450-world-s-fastest-bullet-train) - A technological marvel as China debuts the world's fastest bullet train, redefining modern transport.

* [Satellites Found a 'Brown Ribbon' Near Africa – Now Scientists Are Sounding Alarms](https://soylentnews.org/article.pl?sid=26/03/02/2018219&from=rss) - Alarming discoveries from satellite imagery raise environmental concerns near Africa.

* [Superagers' 'Secret Ingredient' May Be the Growth of New Brain Cells](https://science.slashdot.org/story/26/03/03/048214/superagers-secret-ingredient-may-be-the-growth-of-new-brain-cells?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Breakthrough findings link the creation of new brain cells to improvements in mental longevity.

* [Cleaner Ship Fuel is Reducing Lightning in Key Shipping Lanes](https://soylentnews.org/article.pl?sid=26/03/02/1659243&from=rss) - A surprising side effect of cleaner shipping fuels: reductions in lightning strikes across major shipping lanes.

* [First in-utero stem cell therapy for fetal spina bifida repair is safe: study](https://health.ucdavis.edu/news/headlines/first-ever-in-utero-stem-cell-therapy-for-fetal-spina-bifida-repair-is-safe-study-finds/2026/02) - A pioneering medical procedure offers hope in the treatment of fetal spina bifida using in-utero stem cell therapy.

## Historical and Cultural Insights

* [The 19th Century Silent Film That First Captured a Robot Attack](https://hardware.slashdot.org/story/26/03/03/0439237/the-19th-century-silent-film-that-first-captured-a-robot-attack?utm_source=rss1.0mainlinkanon&utm_medium=feed) - An early cinematic look at robotics, shedding light on humanity's historical fascination with machines.

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

* [2026-03-03, 13:00:00](https://tech.slashdot.org/story/26/03/03/0423206/amazon-cloud-units-data-centers-in-uae-bahrain-damaged-in-drone-strikes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Cloud Unit&apos;s Data Centers In UAE, Bahrain Damaged In Drone Strikes](https://tech.slashdot.org/story/26/03/03/0423206/amazon-cloud-units-data-centers-in-uae-bahrain-damaged-in-drone-strikes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-03, 12:45:13](https://news.ycombinator.com/item?id=47231503) - [Porn depicting sex between step-relatives set to be banned in the UK](https://www.lbc.co.uk/article/pornography-sexual-relationships-step-relatives-5HjdTkd_2/)
* [2026-03-03, 12:41:17](https://news.ycombinator.com/item?id=47231469) - [Stolen Gemini API key racks up $82,000 in 48 hours](https://llmhorrors.com/all/gemini-stolen-api-key-82k/)
* [2026-03-03, 12:13:40](https://news.ycombinator.com/item?id=47231261) - [India&apos;s top court angry after junior judge cites fake AI-generated orders](https://www.bbc.com/news/articles/c178zzw780xo)
* [2026-03-03, 12:09:59](https://news.ycombinator.com/item?id=47231242) - [Mullvad VPN: Banned TV Ad in the Streets of London [video]](https://www.youtube.com/watch?v=rwhznrpgl7k)
* [2026-03-03, 12:05:06](https://lobste.rs/s/6h04uj/announcing_npmx_fast_modern_browser_for) - [Announcing npmx: a fast, modern browser for the npm registry](https://npmx.dev/blog/alpha-release)
* [2026-03-03, 10:56:52](https://news.ycombinator.com/item?id=47230704) - [The Xkcd thing, now interactive](https://editor.p5js.org/isohedral/full/vJa5RiZWs)
* [2026-03-03, 10:49:05](https://news.ycombinator.com/item?id=47230663) - [The beauty and terror of modding Windows](https://windowsread.me/p/windhawk-explained)
* [2026-03-03, 10:28:36](https://news.ycombinator.com/item?id=47230539) - [China&apos;s 450kmph bullet train is the fastest ever built](https://www.executivetraveller.com/news/china-cr450-world-s-fastest-bullet-train)
* [2026-03-03, 10:28:00](https://soylentnews.org/article.pl?sid=26/03/02/2018219&amp;from=rss) - [Satellites Found a &apos;Brown Ribbon&apos; Near Africa – Now Scientists Are Sounding Alarms](https://soylentnews.org/article.pl?sid=26/03/02/2018219&amp;from=rss)
* [2026-03-03, 10:21:16](https://lobste.rs/s/8tjldu/dos_memory_management) - [DOS Memory Management](https://www.os2museum.com/wp/dos-memory-management/)
* [2026-03-03, 10:00:00](https://hardware.slashdot.org/story/26/03/03/0439237/the-19th-century-silent-film-that-first-captured-a-robot-attack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The 19th Century Silent Film That First Captured a Robot Attack](https://hardware.slashdot.org/story/26/03/03/0439237/the-19th-century-silent-film-that-first-captured-a-robot-attack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-03, 08:58:30](https://news.ycombinator.com/item?id=47229953) - [Privacy-preserving age and identity verification via anonymous credentials](https://blog.cryptographyengineering.com/2026/03/02/anonymous-credentials-an-illustrated-primer/)
* [2026-03-03, 08:31:13](https://lobste.rs/s/ifhrnb/webhaptics_haptic_feedback_for_mobile) - [WebHaptics – Haptic feedback for the mobile web](https://haptics.lochie.me/)
* [2026-03-03, 07:34:47](https://news.ycombinator.com/item?id=47229344) - [Arm&apos;s Cortex X925: Reaching Desktop Performance](https://chipsandcheese.com/p/arms-cortex-x925-reaching-desktop)
* [2026-03-03, 07:06:22](https://news.ycombinator.com/item?id=47229119) - [I built a pint-sized Macintosh](https://www.jeffgeerling.com/blog/2026/pint-sized-macintosh-pico-micro-mac/)
* [2026-03-03, 07:00:00](https://science.slashdot.org/story/26/03/03/048214/superagers-secret-ingredient-may-be-the-growth-of-new-brain-cells?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Superagers&apos; &apos;Secret Ingredient&apos; May Be the Growth of New Brain Cells](https://science.slashdot.org/story/26/03/03/048214/superagers-secret-ingredient-may-be-the-growth-of-new-brain-cells?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-03, 05:51:02](https://news.ycombinator.com/item?id=47228639) - [Buckle Up for Bumpier Skies](https://www.newyorker.com/magazine/2026/03/09/buckle-up-for-bumpier-skies)
* [2026-03-03, 05:43:00](https://soylentnews.org/article.pl?sid=26/03/02/2014218&amp;from=rss) - [Datacenters in Space Are a Terrible, Horrible, No Good Idea.](https://soylentnews.org/article.pl?sid=26/03/02/2014218&amp;from=rss)
* [2026-03-03, 04:49:32](https://lobste.rs/s/0pyshw/i_put_full_jvm_inside_browser_tab) - [I Put a Full JVM Inside a Browser Tab](https://bmarti44.substack.com/p/i-put-a-full-jvm-inside-a-browser)
* [2026-03-03, 03:00:00](https://news.slashdot.org/story/26/03/02/2210232/iowa-county-rolls-out-extensive-zoning-rules-for-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Iowa County Rolls Out Extensive Zoning Rules For Data Centers](https://news.slashdot.org/story/26/03/02/2210232/iowa-county-rolls-out-extensive-zoning-rules-for-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-03, 02:19:54](https://lobste.rs/s/rygpdk/detecting_llm_generated_web_novels_using) - [Detecting LLM-Generated Web Novels Using \&quot;Classical\&quot; Machine Learning (AIGC Text Detection)](https://blog.lyc8503.net/en/post/llm-classifier/)
* [2026-03-03, 01:38:24](https://lobste.rs/s/og7ihk/evolving_typst) - [Evolving Typst](https://laurmaedje.github.io/posts/evolving-typst/)
* [2026-03-03, 01:36:11](https://lobste.rs/s/ele3bb/185_microsecond_type_hint) - [The 185-Microsecond Type Hint](https://blog.sturdystatistics.com/posts/type_hint/)
* [2026-03-03, 01:15:18](https://lobste.rs/s/bkfg6b/pep_827_type_manipulation) - [PEP 827 – Type Manipulation](https://peps.python.org/pep-0827/)
* [2026-03-03, 01:12:30](https://news.ycombinator.com/item?id=47226608) - [Ars Technica fires reporter after AI controversy involving fabricated quotes](https://futurism.com/artificial-intelligence/ars-technica-fires-reporter-ai-quotes)
* [2026-03-03, 01:00:00](https://yro.slashdot.org/story/26/03/02/2151248/british-columbia-to-end-time-changes-adopt-year-round-daylight-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [British Columbia To End Time Changes, Adopt Year-Round Daylight Time](https://yro.slashdot.org/story/26/03/02/2151248/british-columbia-to-end-time-changes-adopt-year-round-daylight-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-03, 00:58:00](https://soylentnews.org/article.pl?sid=26/03/02/1659243&amp;from=rss) - [Cleaner Ship Fuel is Reducing Lightning in Key Shipping Lanes](https://soylentnews.org/article.pl?sid=26/03/02/1659243&amp;from=rss)
* [2026-03-02, 23:22:50](https://news.ycombinator.com/item?id=47225726) - [Physicists developing a quantum computer that’s entirely open source](https://physics.aps.org/articles/v19/24)
* [2026-03-02, 23:00:00](https://apple.slashdot.org/story/26/03/02/2140230/apple-might-use-google-servers-to-store-data-for-its-upgraded-ai-siri?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Might Use Google Servers To Store Data For Its Upgraded AI Siri](https://apple.slashdot.org/story/26/03/02/2140230/apple-might-use-google-servers-to-store-data-for-its-upgraded-ai-siri?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-02, 22:32:35](https://news.ycombinator.com/item?id=47225130) - [Meta’s AI smart glasses and data privacy concerns](https://www.svd.se/a/K8nrV4/metas-ai-smart-glasses-and-data-privacy-concerns-workers-say-we-see-everything)
* [2026-03-02, 22:00:00](https://entertainment.slashdot.org/story/26/03/02/2125201/hbo-max-and-paramount-to-merge-into-one-streaming-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [HBO Max and Paramount+ To Merge Into One Streaming Service](https://entertainment.slashdot.org/story/26/03/02/2125201/hbo-max-and-paramount-to-merge-into-one-streaming-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-02, 21:23:40](https://news.ycombinator.com/item?id=47224295) - [Show HN: I built a sub-500ms latency voice agent from scratch](https://www.ntik.me/posts/voice-agent)
* [2026-03-02, 21:00:00](https://yro.slashdot.org/story/26/03/02/1856252/charter-gets-fcc-permission-to-buy-cox-become-largest-isp-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Charter Gets FCC Permission To Buy Cox, Become Largest ISP In the US](https://yro.slashdot.org/story/26/03/02/1856252/charter-gets-fcc-permission-to-buy-cox-become-largest-isp-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-02, 20:58:48](https://lobste.rs/s/3cq649/two_kinds_error) - [The two kinds of error](https://evanhahn.com/the-two-kinds-of-error/)
* [2026-03-02, 20:35:20](https://lobste.rs/s/5fambh/plasma_bigscreen_10_foot_interface_for) - [Plasma Bigscreen - 10-foot interface for KDE plasma](https://plasma-bigscreen.org/)
* [2026-03-02, 20:30:52](https://news.ycombinator.com/item?id=47223620) - [British Columbia is permanently adopting daylight time](https://www.cbc.ca/news/canada/british-columbia/b-c-adopting-year-round-daylight-time-9.7111657)
* [2026-03-02, 20:26:39](https://lobste.rs/s/1ozzrm/getopt_go_package_for_posix_gnu_style) - [getopt: Go package for POSIX/GNU-style command line parsing](https://pkg.go.dev/gitlab.com/natano/getopt)
* [2026-03-02, 20:12:00](https://soylentnews.org/article.pl?sid=26/03/01/0744215&amp;from=rss) - [Hail Protection Using Solar Panels](https://soylentnews.org/article.pl?sid=26/03/01/0744215&amp;from=rss)
* [2026-03-02, 20:00:00](https://tech.slashdot.org/story/26/03/02/1847201/microsoft-bans-microslop-on-its-discord-then-locks-the-server?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Bans &apos;Microslop&apos; On Its Discord, Then Locks the Server](https://tech.slashdot.org/story/26/03/02/1847201/microsoft-bans-microslop-on-its-discord-then-locks-the-server?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-02, 19:42:02](https://lobste.rs/s/gmhq26/free_ip_geolocation_database) - [Free IP Geolocation Database](https://ip66.dev/)
* [2026-03-02, 19:39:54](https://lobste.rs/s/rkzdmk/you_can_t_always_fix_it) - [You can&apos;t always fix it](https://ntietz.com/blog/you-cant-always-fix-it/)
* [2026-03-02, 19:24:59](https://lobste.rs/s/rfjjwq/i_fuzzed_vibe_fixed_vibed_c_compiler) - [I Fuzzed, and Vibe Fixed, the Vibed C Compiler](https://john.regehr.org/writing/claude_c_compiler.html)
* [2026-03-02, 19:00:00](https://tech.slashdot.org/story/26/03/02/178237/motorola-partners-with-grapheneos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Motorola Partners With GrapheneOS](https://tech.slashdot.org/story/26/03/02/178237/motorola-partners-with-grapheneos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-02, 18:14:02](https://lobste.rs/s/bvkanl/quantifying_swiss_marriage_tax) - [Quantifying the Swiss marriage tax](https://gendx.dev/blog/2026/03/02/swiss-marriage-tax.html)
* [2026-03-02, 18:00:00](https://news.slashdot.org/story/26/03/02/0440220/editor-at-184-year-old-ohio-newspaper-pushes-to-let-ai-draft-news-articles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Editor At 184-Year-Old Ohio Newspaper Pushes To Let AI Draft News Articles](https://news.slashdot.org/story/26/03/02/0440220/editor-at-184-year-old-ohio-newspaper-pushes-to-let-ai-draft-news-articles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-02, 17:15:08](https://lobste.rs/s/umyumz/farewell_felix) - [Farewell, Felix](https://blog.recurity-labs.com/2026-03-02/Farewell_Felix)
* [2026-03-02, 17:00:00](https://apple.slashdot.org/story/26/03/02/1648230/apple-introduces-iphone-17e-with-magsafe-and-a19?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Introduces iPhone 17e With MagSafe and A19](https://apple.slashdot.org/story/26/03/02/1648230/apple-introduces-iphone-17e-with-magsafe-and-a19?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-02, 16:39:21](https://news.ycombinator.com/item?id=47220320) - [Launch HN: OctaPulse (YC W26) – Robotics and computer vision for fish farming](https://news.ycombinator.com/item?id=47220320)
* [2026-03-02, 16:10:55](https://lobste.rs/s/ba6cnk/packaging_gleam_app_into_single) - [Packaging a Gleam app into a single executable](https://www.dhzdhd.dev/blog/gleam-executable)
* [2026-03-02, 16:00:00](https://slashdot.org/story/26/03/02/0424251/south-korean-police-lose-seized-crypto-by-posting-password-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [South Korean Police Lose Seized Crypto By Posting Password Online](https://slashdot.org/story/26/03/02/0424251/south-korean-police-lose-seized-crypto-by-posting-password-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-02, 15:27:13](https://lobste.rs/s/cyavky/vibecoding_challenge_2_five_feathers) - [Vibecoding Challenge 2: The Five Feathers (Spring 2026)](https://gist.github.com/MostAwesomeDude/ebb60b9bec53c4795f54606e944fccd7)
* [2026-03-02, 15:24:03](https://lobste.rs/s/txfaym/gram_1_0_released) - [Gram 1.0 released](https://gram.liten.app/posts/first-release/)
* [2026-03-02, 15:23:00](https://soylentnews.org/article.pl?sid=26/03/01/0737210&amp;from=rss) - [Whoops: US Military Laser Strike Takes Down CBP Drone Near Mexican Border](https://soylentnews.org/article.pl?sid=26/03/01/0737210&amp;from=rss)
* [2026-03-02, 15:15:15](https://lobste.rs/s/eyfjod/2025_state_rust_survey_results) - [2025 State of Rust Survey Results](https://blog.rust-lang.org/2026/03/02/2025-State-Of-Rust-Survey-results/)
* [2026-03-02, 15:00:00](https://hardware.slashdot.org/story/26/03/02/0417223/japan-to-ban-in-flight-use-of-power-banks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japan To Ban In-Flight Use of Power Banks](https://hardware.slashdot.org/story/26/03/02/0417223/japan-to-ban-in-flight-use-of-power-banks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-02, 14:54:58](https://news.ycombinator.com/item?id=47218743) - [First in-utero stem cell therapy for fetal spina bifida repair is safe: study](https://health.ucdavis.edu/news/headlines/first-ever-in-utero-stem-cell-therapy-for-fetal-spina-bifida-repair-is-safe-study-finds/2026/02)
* [2026-03-02, 14:11:23](https://news.ycombinator.com/item?id=47218175) - [New iPad Air, powered by M4](https://www.apple.com/newsroom/2026/03/apple-introduces-the-new-ipad-air-powered-by-m4/)
* [2026-03-02, 14:03:00](https://news.ycombinator.com/item?id=47218084) - [iPhone 17e](https://www.apple.com/newsroom/2026/03/apple-introduces-iphone-17e/)
* [2026-03-02, 14:00:00](https://tech.slashdot.org/story/26/03/02/048218/whats-driving-the-saaspocalypse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What&apos;s Driving the SaaSpocalypse](https://tech.slashdot.org/story/26/03/02/048218/whats-driving-the-saaspocalypse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-02, 12:35:37](https://news.ycombinator.com/item?id=47217224) - [C64: Putting Sprite Multiplexing to Work](https://bumbershootsoft.wordpress.com/2026/02/28/c64-putting-sprite-multiplexing-to-work/)
* [2026-03-02, 11:21:20](https://lobste.rs/s/rlof2z/libxml2_enterprise_edition_agpl_from) - [libxml2 Enterprise Edition (AGPL, from the previous maintainer)](https://codeberg.org/nwellnhof/libxml2-ee)
* [2026-03-02, 10:46:59](https://lobste.rs/s/uqpww1/building_quake_pc) - [Building a Quake PC](https://fabiensanglard.net/quake_pc/)
* [2026-03-02, 10:41:00](https://soylentnews.org/article.pl?sid=26/03/01/0728237&amp;from=rss) - [Trump Bans Anthropic AI From Federal Agencies While OpenAI Eager to Fill the Void](https://soylentnews.org/article.pl?sid=26/03/01/0728237&amp;from=rss)
* [2026-03-02, 08:16:47](https://lobste.rs/s/awwhqz/motorola_s_new_partnership_with) - [Motorola&apos;s new partnership with GrapheneOS](https://motorolanews.com/motorola-three-new-b2b-solutions-at-mwc-2026/)
* [2026-03-02, 08:12:13](https://lobste.rs/s/yyqowj/gram_zed_fork_without_all_ai) - [GRAM: A Zed fork without all the AI](https://gram.liten.app/)
* [2026-03-02, 06:48:07](https://news.ycombinator.com/item?id=47214645) - [Motorola announces a partnership with GrapheneOS](https://motorolanews.com/motorola-three-new-b2b-solutions-at-mwc-2026/)
* [2026-03-02, 05:58:00](https://soylentnews.org/article.pl?sid=26/03/01/071226&amp;from=rss) - [Researchers Discover Massive Wi-Fi Vulnerability Affecting Multiple Access Points](https://soylentnews.org/article.pl?sid=26/03/01/071226&amp;from=rss)
* [2026-03-02, 01:11:00](https://soylentnews.org/article.pl?sid=26/03/01/0653215&amp;from=rss) - [Removable Batteries in Mobile Phones May be Making a Comeback](https://soylentnews.org/article.pl?sid=26/03/01/0653215&amp;from=rss)
* [2026-03-01, 20:22:00](https://soylentnews.org/article.pl?sid=26/02/28/0817218&amp;from=rss) - [Neanderthals Seemed To Have A Thing For Modern Human Women](https://soylentnews.org/article.pl?sid=26/02/28/0817218&amp;from=rss)
* [2026-03-01, 20:06:08](https://news.ycombinator.com/item?id=47210162) - [Guido van Rossum Interviews Thomas Wouters (Python Core Dev)](https://gvanrossum.github.io/interviews/Thomas.html)
* [2026-03-01, 19:22:52](https://lobste.rs/s/pf4r2b/aws_middle_east_central_zone_uae_down) - [AWS Middle East Central Zone (UAE) down, apparently struck in war](https://health.aws.amazon.com/health/status)
* [2026-03-01, 15:37:00](https://soylentnews.org/article.pl?sid=26/02/28/0811223&amp;from=rss) - [US States Are Getting Tougher on Drivers Who Refuse to Move Over](https://soylentnews.org/article.pl?sid=26/02/28/0811223&amp;from=rss)
* [2026-03-01, 10:52:00](https://soylentnews.org/article.pl?sid=26/02/28/0452245&amp;from=rss) - [Human Brain Cells on a Chip Learned to Play Doom in a Week](https://soylentnews.org/article.pl?sid=26/02/28/0452245&amp;from=rss)
* [2026-03-01, 09:47:03](https://news.ycombinator.com/item?id=47205230) - [Computer Says No](https://koenvangilst.nl/lab/computer-says-no)
* [2026-03-01, 08:22:05](https://news.ycombinator.com/item?id=47204784) - [Guilty Displeasures](https://www.hopefulmons.com/p/what-are-your-guilty-displeasures)
* [2026-03-01, 06:10:00](https://soylentnews.org/article.pl?sid=26/02/28/022210&amp;from=rss) - [Block Lays Off 40% Of Workforce As It Goes All-In On AI Tools](https://soylentnews.org/article.pl?sid=26/02/28/022210&amp;from=rss)
* [2026-03-01, 04:50:02](https://news.ycombinator.com/item?id=47203827) - [We Built a Video Rendering Engine by Lying to the Browser About What Time It Is](https://blog.replit.com/browsers-dont-want-to-be-cameras)
* [2026-03-01, 03:55:49](https://news.ycombinator.com/item?id=47203527) - [Plugtest](https://en.wikipedia.org/wiki/Plugtest)
* [2026-03-01, 01:27:00](https://soylentnews.org/article.pl?sid=26/02/28/0158247&amp;from=rss) - [The US Military Just Made History With A C-17 Plane &amp; A Nuclear Reactor](https://soylentnews.org/article.pl?sid=26/02/28/0158247&amp;from=rss)
* [2026-02-28, 22:41:33](https://news.ycombinator.com/item?id=47201132) - [Simple screw counter](https://mitxela.com/projects/screwcounter)
* [2026-02-28, 20:41:00](https://soylentnews.org/article.pl?sid=26/02/28/0151255&amp;from=rss) - [OpenAI Secures Record $110 Billion Funding Round Backed By Amazon, Nvidia, and SoftBank](https://soylentnews.org/article.pl?sid=26/02/28/0151255&amp;from=rss)
* [2026-02-28, 16:00:48](https://news.ycombinator.com/item?id=47196864) - [DOS Memory Management](https://www.os2museum.com/wp/dos-memory-management/)
* [2026-02-28, 15:59:00](https://soylentnews.org/article.pl?sid=26/02/28/0150248&amp;from=rss) - [OsmAnd&apos;s Faster Offline Navigation](https://soylentnews.org/article.pl?sid=26/02/28/0150248&amp;from=rss)
* [2026-02-28, 14:00:16](https://news.ycombinator.com/item?id=47195476) - [How to sew a Hyperbolic Blanket (2021)](https://www.geometrygames.org/HyperbolicBlanket/index.html)
* [2026-02-28, 11:11:00](https://soylentnews.org/article.pl?sid=26/02/27/2232251&amp;from=rss) - [Why LLM-Generated Passwords Are Dangerously Insecure](https://soylentnews.org/article.pl?sid=26/02/27/2232251&amp;from=rss)
* [2026-02-28, 06:30:00](https://soylentnews.org/article.pl?sid=26/02/27/2224202&amp;from=rss) - [A Hacker Used Claude to Breach Mexico&apos;s Government and Steal 150GB of Data](https://soylentnews.org/article.pl?sid=26/02/27/2224202&amp;from=rss)
* [2026-02-28, 01:40:00](https://soylentnews.org/article.pl?sid=26/02/27/2217216&amp;from=rss) - [Hackers Expose the Massive Surveillance Stack Hiding Inside Your “Age Verification” Check](https://soylentnews.org/article.pl?sid=26/02/27/2217216&amp;from=rss)
* [2026-02-27, 20:58:00](https://soylentnews.org/article.pl?sid=26/02/26/0429221&amp;from=rss) - [UK Government Upgrades Drones, Deploys Joystick Tweakers to Catch Illegal Dumpers](https://soylentnews.org/article.pl?sid=26/02/26/0429221&amp;from=rss)
* [2026-02-27, 16:14:00](https://soylentnews.org/politics/article.pl?sid=26/02/26/0417224&amp;from=rss) - [The Political Effects of Xitter’s Feed Algorithm](https://soylentnews.org/politics/article.pl?sid=26/02/26/0417224&amp;from=rss)
* [2026-02-27, 11:30:00](https://soylentnews.org/article.pl?sid=26/02/26/0411234&amp;from=rss) - [AMD&apos;s Next-Gen Ryzen 10000 Desktop CPUs Rumored to Come in Seven Different Configs](https://soylentnews.org/article.pl?sid=26/02/26/0411234&amp;from=rss)
* [2026-02-27, 06:47:00](https://soylentnews.org/article.pl?sid=26/02/26/049239&amp;from=rss) - [NASA Officially Classifies Boeing Starliner Failure as a Maximum-Level Type A Mishap](https://soylentnews.org/article.pl?sid=26/02/26/049239&amp;from=rss)
* [2026-02-27, 01:59:00](https://soylentnews.org/article.pl?sid=26/02/26/042214&amp;from=rss) - [Hungarian Startup Transforming Robot Manufacturing With 3D Tissue Braiding](https://soylentnews.org/article.pl?sid=26/02/26/042214&amp;from=rss)
