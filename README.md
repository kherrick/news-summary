# [News Summary](https://kherrick.github.io/news-summary/)

## Tech and Software Innovations

* [Valve Releases Proton 11 With Huge Linux Gaming Improvements](https://games.slashdot.org/story/26/07/08/0713204/valve-releases-proton-11-with-huge-linux-gaming-improvements?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Comments](https://games.slashdot.org/story/26/07/08/0713204/valve-releases-proton-11-with-huge-linux-gaming-improvements?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Eve Online's Carbon engine is now open source: Fenris Creations explains why](https://www.gamesindustry.biz/eve-onlines-carbon-engine-is-now-open-source-fenris-creations-explains-why) - [Comments](https://lobste.rs/s/nritf1/eve_online_s_carbon_engine_is_now_open)

* [Kastor – Terraform-style specs for AI agents](https://github.com/weirdGuy/kastor) - [Comments](https://news.ycombinator.com/item?id=48833183)

* [Mistral's Robostral Navigate: a state of the art robotics navigation model](https://mistral.ai/news/robostral-navigate/) - [Comments](https://news.ycombinator.com/item?id=48832212)

* [GitLost: How We Tricked GitHub’s AI Agent into Leaking Private Repos](https://noma.security/blog/gitlost-how-we-tricked-githubs-ai-agent-into-leaking-private-repos/) - [Comments](https://lobste.rs/s/rcg4bo/gitlost_how_we_tricked_github_s_ai_agent)

* [OpenBSD has a use-after-free allowing local privilege escalation to root](https://nvd.nist.gov/vuln/detail/cve-2026-57589) - [Comments](https://news.ycombinator.com/item?id=48831658)

## Open Source and Funding Challenges

* [Chatto is now Open Source](https://www.hmans.dev/blog/chatto-is-open-source) - [Comments](https://news.ycombinator.com/item?id=48833116)

* [Funding Open-Source Software Without Compromising It](https://yorickpeterse.com/articles/funding-open-source-software-without-compromising-it/) - [Comments](https://lobste.rs/s/qmzekw/funding_open_source_software_without)

## Space and Science Discoveries

* [Mysterious Spheres Found in Australia Are Likely Space Debris](https://science.slashdot.org/story/26/07/08/078258/mysterious-spheres-found-in-australia-are-likely-space-debris?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Comments](https://science.slashdot.org/story/26/07/08/078258/mysterious-spheres-found-in-australia-are-likely-space-debris?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Superconducting Thruster Harnesses Earth's Magnetic Field in First Orbital Test](https://science.slashdot.org/story/26/07/07/2327219/superconducting-thruster-harnesses-earths-magnetic-field-in-first-orbital-test?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Comments](https://science.slashdot.org/story/26/07/07/2327219/superconducting-thruster-harnesses-earths-magnetic-field-in-first-orbital-test?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Japan Releases Snowman-Like Asteroid Image After Flyby](https://science.slashdot.org/story/26/07/07/2245233/japan-releases-snowman-like-asteroid-image-after-flyby?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Comments](https://science.slashdot.org/story/26/07/07/2245233/japan-releases-snowman-like-asteroid-image-after-flyby?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Cybersecurity Developments and Issues

* [Tenda firmware (multiple versions) contains hidden authentication backdoor](https://kb.cert.org/vuls/id/213560) - [Comments](https://news.ycombinator.com/item?id=48825749)

* [New Attack Provides One More Reason Why AI Browsers Are A Bad Idea](https://soylentnews.org/article.pl?sid=26/07/05/2151242&from=rss) - [Comments](https://soylentnews.org/article.pl?sid=26/07/05/2151242&from=rss)

## Quirky and Niche Innovations

* [A bug which only affected left-handed users](https://shkspr.mobi/blog/2026/07/a-bug-which-only-affected-left-handed-users/) - [Comments](https://lobste.rs/s/oj9lal/bug_which_only_affected_left_handed_users)

* [Jim's TrueType QR Code Font](https://qr.jim.sh/) - [Comments](https://lobste.rs/s/y0tvll/jim_s_truetype_qr_code_font)

## Market and Industrial Shifts

* [Apple to increase spend with Broadcom to produce billions more U.S. chips](https://www.apple.com/newsroom/2026/07/apple-to-increase-spend-with-broadcom-to-produce-billions-more-us-chips/) - [Comments](https://news.ycombinator.com/item?id=48830565)

* [South Korea to Spend $1T on More Memory Chip Production and Humanoid Robots](https://soylentnews.org/article.pl?sid=26/07/06/1957237&from=rss) - [Comments](https://soylentnews.org/article.pl?sid=26/07/06/1957237&from=rss)

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

* [2026-07-08, 16:14:15](https://lobste.rs/s/qqojdp/abject_0_8_2_released) - [Abject 0.8.2 released](https://github.com/mempko/abject)
* [2026-07-08, 16:00:00](https://games.slashdot.org/story/26/07/08/0713204/valve-releases-proton-11-with-huge-linux-gaming-improvements?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Valve Releases Proton 11 With Huge Linux Gaming Improvements](https://games.slashdot.org/story/26/07/08/0713204/valve-releases-proton-11-with-huge-linux-gaming-improvements?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-08, 15:47:51](https://lobste.rs/s/nritf1/eve_online_s_carbon_engine_is_now_open) - [Eve Online&apos;s Carbon engine is now open source: Fenris Creations explains why](https://www.gamesindustry.biz/eve-onlines-carbon-engine-is-now-open-source-fenris-creations-explains-why)
* [2026-07-08, 15:35:59](https://lobste.rs/s/tbs5t3/botkit_standalone_activitypub_bots) - [BotKit: Standalone ActivityPub bots in TypeScript](https://botkit.fedify.dev/)
* [2026-07-08, 15:25:09](https://news.ycombinator.com/item?id=48833183) - [Show HN: Kastor – Terraform-style specs for AI agents](https://github.com/weirdGuy/kastor)
* [2026-07-08, 15:19:50](https://news.ycombinator.com/item?id=48833116) - [Chatto is now Open Source](https://www.hmans.dev/blog/chatto-is-open-source)
* [2026-07-08, 15:00:00](https://science.slashdot.org/story/26/07/08/078258/mysterious-spheres-found-in-australia-are-likely-space-debris?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mysterious Spheres Found In Australia Are Likely Space Debris](https://science.slashdot.org/story/26/07/08/078258/mysterious-spheres-found-in-australia-are-likely-space-debris?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-08, 14:29:42](https://lobste.rs/s/mp42ys/obfuscated_bash_script_by_akamai_being) - [Obfuscated bash script by Akamai being supplied to consumers via retail stores](https://tris.sherliker.net/blog/obfuscated-self-evaluating-bash-script-by-cdn-akamai-being-supplied-to-consumers-via-retail-stores/)
* [2026-07-08, 14:09:17](https://news.ycombinator.com/item?id=48832212) - [Mistral&apos;s Robostral Navigate: a state of the art robotics navigation model](https://mistral.ai/news/robostral-navigate/)
* [2026-07-08, 14:04:11](https://lobste.rs/s/rcg4bo/gitlost_how_we_tricked_github_s_ai_agent) - [GitLost: How We Tricked GitHub’s AI Agent into Leaking Private Repos](https://noma.security/blog/gitlost-how-we-tricked-githubs-ai-agent-into-leaking-private-repos/)
* [2026-07-08, 14:02:44](https://lobste.rs/s/qmzekw/funding_open_source_software_without) - [Funding open-source software without compromising it](https://yorickpeterse.com/articles/funding-open-source-software-without-compromising-it/)
* [2026-07-08, 13:59:35](https://lobste.rs/s/zcyy2u/zine_0_12_0) - [Zine 0.12.0](https://zine-ssg.io/log/?v0.12.0#v0.12.0)
* [2026-07-08, 13:46:22](https://lobste.rs/s/zrvoqb/unicode_s_transliteration_rules_are) - [Unicode&apos;s Transliteration Rules Are Turing-Complete](https://seriot.ch/computation/uts35/)
* [2026-07-08, 13:24:52](https://news.ycombinator.com/item?id=48831658) - [OpenBSD has a use-after-free allowing local privilege escalation to root](https://nvd.nist.gov/vuln/detail/cve-2026-57589)
* [2026-07-08, 13:18:03](https://news.ycombinator.com/item?id=48831565) - [Cloudflare Meerkat - Globally distributed consensus](https://blog.cloudflare.com/meerkat-introduction/)
* [2026-07-08, 13:01:25](https://lobste.rs/s/oj9lal/bug_which_only_affected_left_handed_users) - [A bug which only affected left-handed users](https://shkspr.mobi/blog/2026/07/a-bug-which-only-affected-left-handed-users/)
* [2026-07-08, 12:53:00](https://soylentnews.org/article.pl?sid=26/07/06/204247&amp;from=rss) - [Paper Mill Cancer Studies Get Double the Number of Citations as Genuine Papers](https://soylentnews.org/article.pl?sid=26/07/06/204247&amp;from=rss)
* [2026-07-08, 12:29:10](https://lobste.rs/s/wkmhrv/democratizing_abandonware) - [Democratizing Abandonware](https://geopjr.dev/blog/democratizing-abandonware)
* [2026-07-08, 12:08:37](https://news.ycombinator.com/item?id=48830868) - [It seems that the age of reading might be a short anomaly in human history](https://www.theatlantic.com/magazine/2026/08/reading-crisis-postliterate-age/687618/)
* [2026-07-08, 11:43:45](https://lobste.rs/s/tvvosc/noiselang_where_n_5_is_dirac_delta) - [NoiseLang: Where N = 5 is a Dirac delta](https://manualmeida.dev/articles/noiselang/)
* [2026-07-08, 11:30:56](https://news.ycombinator.com/item?id=48830565) - [Apple to increase spend with Broadcom to produce billions more U.S. chips](https://www.apple.com/newsroom/2026/07/apple-to-increase-spend-with-broadcom-to-produce-billions-more-us-chips/)
* [2026-07-08, 11:00:00](https://science.slashdot.org/story/26/07/07/2327219/superconducting-thruster-harnesses-earths-magnetic-field-in-first-orbital-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Superconducting Thruster Harnesses Earth&apos;s Magnetic Field In First Orbital Test](https://science.slashdot.org/story/26/07/07/2327219/superconducting-thruster-harnesses-earths-magnetic-field-in-first-orbital-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-08, 08:58:35](https://lobste.rs/s/8dadel/accessibility_gnome) - [Accessibility in GNOME](https://blogs.gnome.org/sophieh/2026/07/07/accessibility-in-gnome/)
* [2026-07-08, 08:46:06](https://news.ycombinator.com/item?id=48829312) - [Decoding the obfuscated bash script on a Uniqlo t-shirt](https://tris.sherliker.net/blog/obfuscated-self-evaluating-bash-script-by-cdn-akamai-being-supplied-to-consumers-via-retail-stores/)
* [2026-07-08, 08:37:26](https://news.ycombinator.com/item?id=48829242) - [Geosql: A Claude/Codex skill for geospatial data](https://github.com/dekart-xyz/geosql)
* [2026-07-08, 08:05:00](https://soylentnews.org/article.pl?sid=26/07/06/1957237&amp;from=rss) - [South Korea to Spend $1T on More Memory Chip Production and Humanoid Robots](https://soylentnews.org/article.pl?sid=26/07/06/1957237&amp;from=rss)
* [2026-07-08, 07:00:00](https://science.slashdot.org/story/26/07/07/2245233/japan-releases-snowman-like-asteroid-image-after-flyby?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japan Releases Snowman-Like Asteroid Image After Flyby](https://science.slashdot.org/story/26/07/07/2245233/japan-releases-snowman-like-asteroid-image-after-flyby?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-08, 05:25:35](https://news.ycombinator.com/item?id=48827858) - [GitLost: We Tricked GitHub&apos;s AI Agent into Leaking Private Repos](https://noma.security/blog/gitlost-how-we-tricked-githubs-ai-agent-into-leaking-private-repos/)
* [2026-07-08, 03:59:35](https://news.ycombinator.com/item?id=48827325) - [How to Build a Minimal ZFS NAS Without Synology, QNAP, TrueNAS (2024)](https://neil.computer/notes/how-to-setup-minimal-zfs-nas-without-truenas/)
* [2026-07-08, 03:58:54](https://lobste.rs/s/y0tvll/jim_s_truetype_qr_code_font) - [Jim&apos;s TrueType QR Code Font](https://qr.jim.sh/)
* [2026-07-08, 03:30:00](https://tech.slashdot.org/story/26/07/07/2239255/meta-now-lets-anyone-use-your-instagram-photos-in-ai-images?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Now Lets Anyone Use Your Instagram Photos In AI Images](https://tech.slashdot.org/story/26/07/07/2239255/meta-now-lets-anyone-use-your-instagram-photos-in-ai-images?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-08, 03:22:31](https://news.ycombinator.com/item?id=48827092) - [Copy That Floppy – Cambridge guide for preserving data from fragile floppy disks](https://www.digipres.org/the-floppy-guide/)
* [2026-07-08, 03:21:00](https://soylentnews.org/article.pl?sid=26/07/05/222222&amp;from=rss) - [Google Loses Final Appeal Over $4.7 Billion EU Android Antitrust Fine](https://soylentnews.org/article.pl?sid=26/07/05/222222&amp;from=rss)
* [2026-07-08, 01:49:39](https://lobste.rs/s/8kxouk/software_engineering_interview) - [a software engineering interview question I like: computing the median](https://krisshamloo.com/blog/007)
* [2026-07-08, 01:27:39](https://news.ycombinator.com/item?id=48826329) - [LineageOS Statistics](https://stats.lineageos.org)
* [2026-07-08, 01:02:05](https://lobste.rs/s/7hmu0w/openbsd_through_7_9_has_use_after_free) - [OpenBSD through 7.9 has a use-after-free allowing local privilege escalation to root (CVE-2026-57589)](https://nvd.nist.gov/vuln/detail/cve-2026-57589)
* [2026-07-08, 00:42:40](https://lobste.rs/s/swqkt0/notes_on_software_quality) - [Notes on software quality](https://anthonyhobday.com/blog/20260410)
* [2026-07-08, 00:08:51](https://news.ycombinator.com/item?id=48825749) - [Tenda firmware (multiple versions) contains hidden authentication backdoor](https://kb.cert.org/vuls/id/213560)
* [2026-07-07, 23:57:29](https://news.ycombinator.com/item?id=48825664) - [Structure and Interpretation of Computer Programs Video Lectures (1986)](https://ocw.mit.edu/courses/6-001-structure-and-interpretation-of-computer-programs-spring-2005/video_galleries/video-lectures/)
* [2026-07-07, 23:00:00](https://games.slashdot.org/story/26/07/07/1938210/doom-developer-id-software-is-reportedly-losing-half-its-staff?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Doom Developer id Software Is Reportedly Losing Half Its Staff](https://games.slashdot.org/story/26/07/07/1938210/doom-developer-id-software-is-reportedly-losing-half-its-staff?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-07, 22:44:00](https://soylentnews.org/article.pl?sid=26/07/05/2151242&amp;from=rss) - [New Attack Provides One More Reason Why AI Browsers Are A Bad Idea](https://soylentnews.org/article.pl?sid=26/07/05/2151242&amp;from=rss)
* [2026-07-07, 22:23:58](https://news.ycombinator.com/item?id=48824826) - [GAO: DOE Is Prematurely Excluding Less Expensive Options for Nuclear Cleanup](https://www.gao.gov/products/gao-26-108193)
* [2026-07-07, 22:13:52](https://lobste.rs/s/xclcel/final_return_for_openbsd_anti_return) - [A Final Return for OpenBSD Anti-Return-Oriented Programming Mitigations](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6869668)
* [2026-07-07, 22:00:00](https://tech.slashdot.org/story/26/07/07/1933209/microsoft-flips-windows-backup-on-by-default-outside-the-eu?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Flips Windows Backup On By Default Outside the EU](https://tech.slashdot.org/story/26/07/07/1933209/microsoft-flips-windows-backup-on-by-default-outside-the-eu?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-07, 21:00:00](https://hardware.slashdot.org/story/26/07/07/1927217/samsung-passes-nvidia-to-become-most-profitable-company-in-the-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Samsung Passes Nvidia To Become Most Profitable Company In the World](https://hardware.slashdot.org/story/26/07/07/1927217/samsung-passes-nvidia-to-become-most-profitable-company-in-the-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-07, 20:00:00](https://yro.slashdot.org/story/26/07/07/1918257/fcc-to-end-biden-era-rule-that-forces-isps-to-list-all-their-fees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FCC To End Biden-Era Rule That Forces ISPs To List All Their Fees](https://yro.slashdot.org/story/26/07/07/1918257/fcc-to-end-biden-era-rule-that-forces-isps-to-list-all-their-fees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-07, 19:00:00](https://hardware.slashdot.org/story/26/07/07/1740259/chinas-deepseek-developing-its-own-ai-chip?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s DeepSeek Developing Its Own AI Chip](https://hardware.slashdot.org/story/26/07/07/1740259/chinas-deepseek-developing-its-own-ai-chip?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-07, 18:24:10](https://news.ycombinator.com/item?id=48821576) - [Local, CPU-Friendly, High-Quality TTS (Text-to-Speech) with Kokoro](https://ariya.io/2026/03/local-cpu-friendly-high-quality-tts-text-to-speech-with-kokoro/)
* [2026-07-07, 18:00:00](https://news.slashdot.org/story/26/07/07/1726247/major-banks-in-talks-to-exploit-debit-card-loophole?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Major Banks In Talks To Exploit Debit Card Loophole](https://news.slashdot.org/story/26/07/07/1726247/major-banks-in-talks-to-exploit-debit-card-loophole?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-07, 18:00:00](https://soylentnews.org/article.pl?sid=26/07/05/2125258&amp;from=rss) - [Florida Bans Local Governments From Pursuing Net-Zero Emissions Goals](https://soylentnews.org/article.pl?sid=26/07/05/2125258&amp;from=rss)
* [2026-07-07, 17:51:14](https://lobste.rs/s/srmkur/your_rust_service_isn_t_leaking_it_could_be) - [Your Rust Service Isn&apos;t Leaking — It Could Be the Allocator](https://pranitha.dev/posts/rust-and-memory-allocators/)
* [2026-07-07, 17:00:00](https://yro.slashdot.org/story/26/07/07/1650237/microsoft-can-track-users-via-a-windows-device-id?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Can Track Users Via a Windows Device ID](https://yro.slashdot.org/story/26/07/07/1650237/microsoft-can-track-users-via-a-windows-device-id?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-07, 16:00:00](https://tech.slashdot.org/story/26/07/07/0715252/amazon-will-stop-accepting-new-customers-for-mechanical-turk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Will Stop Accepting New Customers For Mechanical Turk](https://tech.slashdot.org/story/26/07/07/0715252/amazon-will-stop-accepting-new-customers-for-mechanical-turk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-07, 15:00:00](https://science.slashdot.org/story/26/07/07/076229/learning-another-language-appears-to-slow-brain-aging-by-up-to-13-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Learning Another Language Appears To Slow Brain Aging By Up To 13 Years](https://science.slashdot.org/story/26/07/07/076229/learning-another-language-appears-to-slow-brain-aging-by-up-to-13-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-07, 14:23:15](https://news.ycombinator.com/item?id=48818311) - [Chat Control 1.0 and 2.0 Explained](https://fightchatcontrol.eu/chat-control-overview)
* [2026-07-07, 13:41:01](https://lobste.rs/s/n3iqxi/i_was_wrong_about_game_development) - [I was wrong about game development](https://mijndertstuij.nl/posts/i-was-wrong-about-game-development/)
* [2026-07-07, 13:35:34](https://lobste.rs/s/zffug6/mechanized_type_inference_for_record) - [Mechanized type inference for record concatenation](https://haskellforall.com/2026/07/mechanized-type-inference-for-record-concatenation)
* [2026-07-07, 13:13:47](https://lobste.rs/s/8d9pgd/you_shouldn_t_trust_trusted_publishing) - [You shouldn&apos;t trust Trusted Publishing](https://blog.yossarian.net/2026/07/07/You-shouldnt-trust-trusted-publishing)
* [2026-07-07, 13:13:00](https://soylentnews.org/article.pl?sid=26/07/05/2113231&amp;from=rss) - [NetNut Cracked As Google And FBI Target 2 Million-Device Botnet](https://soylentnews.org/article.pl?sid=26/07/05/2113231&amp;from=rss)
* [2026-07-07, 11:00:00](https://yro.slashdot.org/story/26/07/07/0036203/us-cyber-agency-is-using-anthropics-mythos-to-audit-government-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Cyber Agency Is Using Anthropic&apos;s Mythos To Audit Government Code](https://yro.slashdot.org/story/26/07/07/0036203/us-cyber-agency-is-using-anthropics-mythos-to-audit-government-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-07, 09:35:02](https://lobste.rs/s/709awc/together_for_healthier_clippy) - [Together for a healthier Clippy](https://blog.rust-lang.org/inside-rust/2026/07/06/unite-for-clippy/)
* [2026-07-07, 08:34:00](https://soylentnews.org/article.pl?sid=26/07/05/1926209&amp;from=rss) - [Amazon is Ready to Deploy the LEO Satellite Broadband Service](https://soylentnews.org/article.pl?sid=26/07/05/1926209&amp;from=rss)
* [2026-07-07, 08:22:58](https://lobste.rs/s/no3kkj/why_false_sharing_alignment_should_be_128) - [Why false sharing alignment should be 128 bytes on x64](https://monoid.github.io/posts/false-sharing-alignment/)
* [2026-07-07, 07:33:16](https://lobste.rs/s/v8hk8q/google_s_exponential_path_climate) - [Google’s exponential path to climate-wrecking digital bloat](https://ketanjoshi.co/2026/07/01/googles-exponential-path-to-climate-wrecking-digital-bloat/)
* [2026-07-07, 06:20:55](https://lobste.rs/s/5rvgim/odin_1_0_announcement) - [Odin 1.0 Announcement](https://www.youtube.com/watch?v=dLPAqXi9In0)
* [2026-07-07, 03:52:00](https://soylentnews.org/article.pl?sid=26/07/05/1924207&amp;from=rss) - [For The First Time, A Cell Built From Scratch Grows And Divides](https://soylentnews.org/article.pl?sid=26/07/05/1924207&amp;from=rss)
* [2026-07-06, 23:04:00](https://soylentnews.org/article.pl?sid=26/07/05/1921216&amp;from=rss) - [David Rosenthal on the LLM Negative Feedback Loop](https://soylentnews.org/article.pl?sid=26/07/05/1921216&amp;from=rss)
* [2026-07-06, 18:23:00](https://soylentnews.org/article.pl?sid=26/07/05/1917212&amp;from=rss) - [Travel like it&apos;s 0 AD. ](https://soylentnews.org/article.pl?sid=26/07/05/1917212&amp;from=rss)
* [2026-07-06, 13:42:00](https://soylentnews.org/article.pl?sid=26/07/05/1911206&amp;from=rss) - [Modern Life May be Outpacing the Human Mind](https://soylentnews.org/article.pl?sid=26/07/05/1911206&amp;from=rss)
* [2026-07-06, 12:40:24](https://news.ycombinator.com/item?id=48803791) - [NoiseLang: Where N = 5 is a Dirac delta](https://manualmeida.dev/articles/noiselang/)
* [2026-07-06, 09:00:00](https://soylentnews.org/article.pl?sid=26/07/05/092233&amp;from=rss) - [New Law Could Let Tesla Ship Cars With No Brake Pedals Installed](https://soylentnews.org/article.pl?sid=26/07/05/092233&amp;from=rss)
* [2026-07-06, 04:16:00](https://soylentnews.org/article.pl?sid=26/07/05/0859246&amp;from=rss) - [The Weirdness of Neutrinos Could Completely Rewrite Particle Physics](https://soylentnews.org/article.pl?sid=26/07/05/0859246&amp;from=rss)
* [2026-07-05, 23:35:00](https://soylentnews.org/article.pl?sid=26/07/04/0717219&amp;from=rss) - [What the US Was Like in the 1920s](https://soylentnews.org/article.pl?sid=26/07/04/0717219&amp;from=rss)
* [2026-07-05, 18:52:00](https://soylentnews.org/article.pl?sid=26/07/04/0714213&amp;from=rss) - [Raspberry Pi OS Gets a New Kernel but Apparently Not a New Version Number](https://soylentnews.org/article.pl?sid=26/07/04/0714213&amp;from=rss)
* [2026-07-05, 18:14:42](https://news.ycombinator.com/item?id=48796473) - [Every postcard tells a story](https://observer.co.uk/style/features/article/every-postcard-tells-a-story)
* [2026-07-05, 14:02:00](https://soylentnews.org/article.pl?sid=26/07/04/074205&amp;from=rss) - [61% of US Adults Use AI for Health Information Now - Up From 2% in 2024](https://soylentnews.org/article.pl?sid=26/07/04/074205&amp;from=rss)
* [2026-07-05, 13:35:32](https://news.ycombinator.com/item?id=48794227) - [Catastrophe theory; geniuses and maniacs (2011)](http://glassbottomblog.blogspot.com/2011/01/catastrophe-theory-geniuses-and-maniacs.html)
* [2026-07-05, 12:39:08](https://news.ycombinator.com/item?id=48793805) - [Home made GPU escalated quickly [video]](https://www.youtube.com/watch?v=qMR3IXF2sWw)
* [2026-07-05, 10:33:45](https://news.ycombinator.com/item?id=48792980) - [Japan&apos;s Hayabusa2 probe to conduct flyby of Torifune asteroid](https://www3.nhk.or.jp/nhkworld/en/news/20260705_01/)
* [2026-07-05, 09:21:00](https://soylentnews.org/article.pl?sid=26/07/04/0653237&amp;from=rss) - [It&apos;s Looking Like a Hot, Messy Summer for Security Teams as AI Finds Hidden Vulnerabilities](https://soylentnews.org/article.pl?sid=26/07/04/0653237&amp;from=rss)
* [2026-07-05, 05:34:00](https://soylentnews.org/article.pl?sid=26/07/04/0645204&amp;from=rss) - [10 Medieval Inventions That Shaped the Modern World](https://soylentnews.org/article.pl?sid=26/07/04/0645204&amp;from=rss)
* [2026-07-05, 00:48:00](https://soylentnews.org/article.pl?sid=26/07/04/0643229&amp;from=rss) - [Large Hadron Collider Goes Offline to Make Room for its Enhanced Successor](https://soylentnews.org/article.pl?sid=26/07/04/0643229&amp;from=rss)
* [2026-07-04, 22:24:11](https://news.ycombinator.com/item?id=48789625) - [Automate Excel with Python: From manual grind to one-click workflow](https://nostarch.com/automate-excel-with-python)
* [2026-07-04, 20:05:00](https://soylentnews.org/article.pl?sid=26/07/02/1531208&amp;from=rss) - [NASA Unsure Boeing Starliner Will Ever Be Certified For Human Flight](https://soylentnews.org/article.pl?sid=26/07/02/1531208&amp;from=rss)
* [2026-07-04, 16:46:24](https://news.ycombinator.com/item?id=48786789) - [Canada&apos;s only watchmaking school still ticking after 80 years](https://www.cbc.ca/news/canada/montreal/canada-s-only-watchmaking-school-9.7254211)
* [2026-07-04, 16:11:06](https://news.ycombinator.com/item?id=48786455) - [Show HN: Follow London Trains in 3D](https://ride.nexttrain.london/)
* [2026-07-04, 15:24:00](https://soylentnews.org/article.pl?sid=26/07/02/1526221&amp;from=rss) - [Oomwoo is a New Open-Source Robot Vacuum You Can 3D Print Yourself](https://soylentnews.org/article.pl?sid=26/07/02/1526221&amp;from=rss)
* [2026-07-04, 10:42:00](https://soylentnews.org/article.pl?sid=26/07/02/1523206&amp;from=rss) - [Sony Announces End of PlayStation Discs, Parts of Digital Store in the Same Day](https://soylentnews.org/article.pl?sid=26/07/02/1523206&amp;from=rss)
* [2026-07-04, 05:54:00](https://soylentnews.org/article.pl?sid=26/07/02/1516223&amp;from=rss) - [Engineer Open-Sources DIY Radar System That&apos;s 95% Cheaper Than $250,000 Commercial Offerings, Has 20](https://soylentnews.org/article.pl?sid=26/07/02/1516223&amp;from=rss)
* [2026-07-04, 04:16:00](https://soylentnews.org/article.pl?sid=26/07/02/1521222&amp;from=rss) - [Americans!  Enjoy Your 4th July Celebrations](https://soylentnews.org/article.pl?sid=26/07/02/1521222&amp;from=rss)
* [2026-07-04, 01:13:00](https://soylentnews.org/article.pl?sid=26/07/02/1510239&amp;from=rss) - [It&apos;s Time to Step Up and Have Your Say for Science](https://soylentnews.org/article.pl?sid=26/07/02/1510239&amp;from=rss)
