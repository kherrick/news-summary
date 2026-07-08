# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Developments

* [Accessibility in GNOME](https://blogs.gnome.org/sophieh/2026/07/07/accessibility-in-gnome/) - An overview of accessibility advancements in the GNOME desktop environment, highlighting efforts to make technology more inclusive. [Comments](https://lobste.rs/s/8dadel/accessibility_gnome)

* [Extreme Haskell: Typed Expression EDSLs (Part 1)](https://blog.jle.im/entry/extreme-haskell-typed-expression-edsls-1.html) - Diving into Typed Expression EDSLs in the Haskell programming language, the first part of a technical series. [Comments](https://lobste.rs/s/0byhfy/extreme_haskell_typed_expression_edsls)

* [fastSwan: Nvidia ConnectX-7 by numbers](https://www.fastswan.org/Nvidia-ConnectX-7-Benchmark/) - A detailed benchmarking analysis of Nvidia ConnectX-7, showcasing performance insights into high-speed networking. [Comments](https://lobste.rs/s/0lgkpq/fastswan_nvidia_connectx_7_by_numbers)

* [Licensing can be joyful (and legally dubious) (2024)](https://ntietz.com/blog/licensing-joy-gal/) - Insightful reflections on legal and ethical dilemmas posed by licensing in software development. [Comments](https://lobste.rs/s/9czcrx/licensing_can_be_joyful_legally_dubious)

* [Notes on software quality](https://anthonyhobday.com/blog/20260410) - A reflective article exploring the tenets of high-quality software building practices. [Comments](https://lobste.rs/s/swqkt0/notes_on_software_quality)

## Security and Privacy Issues

* [GitLost: We Tricked GitHub's AI Agent into Leaking Private Repos](https://noma.security/blog/gitlost-how-we-tricked-githubs-ai-agent-into-leaking-private-repos/) - Researchers reveal security vulnerabilities in GitHub's AI agent that led to the leakage of private repositories. [Comments](https://news.ycombinator.com/item?id=48827858)

* [OpenBSD through 7.9 has a use-after-free allowing local privilege escalation to root (CVE-2026-57589)](https://nvd.nist.gov/vuln/detail/cve-2026-57589) - Details on a security vulnerability in OpenBSD that enables local privilege escalation to root. [Comments](https://lobste.rs/s/7hmu0w/openbsd_through_7_9_has_use_after_free)

* [Tenda firmware (multiple versions) contains hidden authentication backdoor](https://kb.cert.org/vuls/id/213560) - Analysis and exposure of hidden authentication backdoors within Tenda firmware. [Comments](https://news.ycombinator.com/item?id=48825749)

* [Google Loses Final Appeal Over $4.7 Billion EU Android Antitrust Fine](https://soylentnews.org/article.pl?sid=26/07/05/222222&amp;from=rss) - Google faces defeat in its legal battle over a substantial EU antitrust fine related to Android. [Comments](https://news.ycombinator.com/item?id=48827092)

## Scientific Discoveries and Space Exploration

* [Japan Releases Snowman-Like Asteroid Image After Flyby](https://science.slashdot.org/story/26/07/07/2245233/japan-releases-snowman-like-asteroid-image-after-flyby?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A stunning asteroid image resembling a snowman captured by Japan's space exploration agency. [Comments](https://news.ycombinator.com/item?id=48828648)

* [For The First Time, A Cell Built From Scratch Grows And Divides](https://soylentnews.org/article.pl?sid=26/07/05/1924207&amp;from=rss) - Landmark scientific achievement as a synthetic cell grows and divides successfully for the first time. [Comments](https://news.ycombinator.com/item?id=48793805)

## AI Developments and Ethical Implications

* [Meta Now Lets Anyone Use Your Instagram Photos In AI Images](https://tech.slashdot.org/story/26/07/07/2239255/meta-now-lets-anyone-use-your-instagram-photos-in-ai-images?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Discussion on ethical concerns arising from Meta's policy to allow AI use of Instagram photos. [Comments](https://news.ycombinator.com/item?id=48820119)

* [New Attack Provides One More Reason Why AI Browsers Are A Bad Idea](https://soylentnews.org/article.pl?sid=26/07/05/2151242&amp;from=rss) - Concepts and evidence supporting skepticism about AI-powered web browsers. [Comments](https://news.ycombinator.com/item?id=48827858)

## Hardware and Engineering

* [Building a Clang Backend and Porting Doom to my Custom Bytecode VM](https://pointersgonewild.com/2026-07-07-building-a-clang-backend-and-porting-doom-to-my-custom-bytecode-vm/) - Chronicles of developing a custom bytecode VM and porting the classic game Doom to the platform. [Comments](https://lobste.rs/s/qjjoza/building_clang_backend_porting_doom_my)

* [Odin 1.0 Announcement](https://www.youtube.com/watch?v=dLPAqXi9In0) - A major announcement for the Odin programming language reaching version 1.0, elaborating on its features and use cases. [Comments](https://lobste.rs/s/5rvgim/odin_1_0_announcement)

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

* [2026-07-08, 08:58:35](https://lobste.rs/s/8dadel/accessibility_gnome) - [Accessibility in GNOME](https://blogs.gnome.org/sophieh/2026/07/07/accessibility-in-gnome/)
* [2026-07-08, 08:57:45](https://lobste.rs/s/0byhfy/extreme_haskell_typed_expression_edsls) - [Extreme Haskell: Typed Expression EDSLs (Part 1)](https://blog.jle.im/entry/extreme-haskell-typed-expression-edsls-1.html)
* [2026-07-08, 08:46:06](https://news.ycombinator.com/item?id=48829312) - [Decoding the obfuscated bash script on a Uniqlo t-shirt](https://tris.sherliker.net/blog/obfuscated-self-evaluating-bash-script-by-cdn-akamai-being-supplied-to-consumers-via-retail-stores/)
* [2026-07-08, 08:05:00](https://soylentnews.org/article.pl?sid=26/07/06/1957237&amp;from=rss) - [South Korea to Spend $1T on More Memory Chip Production and Humanoid Robots](https://soylentnews.org/article.pl?sid=26/07/06/1957237&amp;from=rss)
* [2026-07-08, 07:24:24](https://lobste.rs/s/qjjoza/building_clang_backend_porting_doom_my) - [Building a Clang Backend and Porting Doom to my Custom Bytecode VM](https://pointersgonewild.com/2026-07-07-building-a-clang-backend-and-porting-doom-to-my-custom-bytecode-vm/)
* [2026-07-08, 07:18:26](https://news.ycombinator.com/item?id=48828648) - [The space bit of SpaceX is worth $8 a share, says Morgan Stanley](https://www.ft.com/content/09a62ed4-16af-433c-adb7-c877d1975388)
* [2026-07-08, 07:00:00](https://science.slashdot.org/story/26/07/07/2245233/japan-releases-snowman-like-asteroid-image-after-flyby?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japan Releases Snowman-Like Asteroid Image After Flyby](https://science.slashdot.org/story/26/07/07/2245233/japan-releases-snowman-like-asteroid-image-after-flyby?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-08, 06:10:00](https://lobste.rs/s/0lgkpq/fastswan_nvidia_connectx_7_by_numbers) - [fastSwan: Nvidia ConnectX-7 by numbers](https://www.fastswan.org/Nvidia-ConnectX-7-Benchmark/)
* [2026-07-08, 05:25:35](https://news.ycombinator.com/item?id=48827858) - [GitLost: We Tricked GitHub&apos;s AI Agent into Leaking Private Repos](https://noma.security/blog/gitlost-how-we-tricked-githubs-ai-agent-into-leaking-private-repos/)
* [2026-07-08, 04:30:17](https://lobste.rs/s/9czcrx/licensing_can_be_joyful_legally_dubious) - [Licensing can be joyful (and legally dubious) (2024)](https://ntietz.com/blog/licensing-joy-gal/)
* [2026-07-08, 03:59:35](https://news.ycombinator.com/item?id=48827325) - [How to Build a Minimal ZFS NAS Without Synology, QNAP, TrueNAS (2024)](https://neil.computer/notes/how-to-setup-minimal-zfs-nas-without-truenas/)
* [2026-07-08, 03:58:54](https://lobste.rs/s/y0tvll/jim_s_truetype_qr_code_font) - [Jim&apos;s TrueType QR Code Font](https://qr.jim.sh/)
* [2026-07-08, 03:30:00](https://tech.slashdot.org/story/26/07/07/2239255/meta-now-lets-anyone-use-your-instagram-photos-in-ai-images?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Now Lets Anyone Use Your Instagram Photos In AI Images](https://tech.slashdot.org/story/26/07/07/2239255/meta-now-lets-anyone-use-your-instagram-photos-in-ai-images?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-08, 03:22:31](https://news.ycombinator.com/item?id=48827092) - [Copy That Floppy – Cambridge guide for preserving data from fragile floppy disks](https://www.digipres.org/the-floppy-guide/)
* [2026-07-08, 03:21:00](https://soylentnews.org/article.pl?sid=26/07/05/222222&amp;from=rss) - [Google Loses Final Appeal Over $4.7 Billion EU Android Antitrust Fine](https://soylentnews.org/article.pl?sid=26/07/05/222222&amp;from=rss)
* [2026-07-08, 01:49:39](https://lobste.rs/s/8kxouk/software_engineering_interview) - [a software engineering interview question I like: computing the median](https://krisshamloo.com/blog/007)
* [2026-07-08, 01:27:39](https://news.ycombinator.com/item?id=48826329) - [LineageOS Statistics](https://stats.lineageos.org)
* [2026-07-08, 01:02:05](https://lobste.rs/s/7hmu0w/openbsd_through_7_9_has_use_after_free) - [OpenBSD through 7.9 has a use-after-free allowing local privilege escalation to root (CVE-2026-57589)](https://nvd.nist.gov/vuln/detail/cve-2026-57589)
* [2026-07-08, 00:55:19](https://news.ycombinator.com/item?id=48826094) - [Show HN: Chiptune Radio](https://chiptune-radio.alephvoid.com/)
* [2026-07-08, 00:42:40](https://lobste.rs/s/swqkt0/notes_on_software_quality) - [Notes on software quality](https://anthonyhobday.com/blog/20260410)
* [2026-07-08, 00:08:51](https://news.ycombinator.com/item?id=48825749) - [Tenda firmware (multiple versions) contains hidden authentication backdoor](https://kb.cert.org/vuls/id/213560)
* [2026-07-07, 23:57:29](https://news.ycombinator.com/item?id=48825664) - [Structure and Interpretation of Computer Programs Video Lectures (1986)](https://ocw.mit.edu/courses/6-001-structure-and-interpretation-of-computer-programs-spring-2005/video_galleries/video-lectures/)
* [2026-07-07, 23:00:00](https://games.slashdot.org/story/26/07/07/1938210/doom-developer-id-software-is-reportedly-losing-half-its-staff?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Doom Developer id Software Is Reportedly Losing Half Its Staff](https://games.slashdot.org/story/26/07/07/1938210/doom-developer-id-software-is-reportedly-losing-half-its-staff?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-07, 22:44:00](https://soylentnews.org/article.pl?sid=26/07/05/2151242&amp;from=rss) - [New Attack Provides One More Reason Why AI Browsers Are A Bad Idea](https://soylentnews.org/article.pl?sid=26/07/05/2151242&amp;from=rss)
* [2026-07-07, 22:23:58](https://news.ycombinator.com/item?id=48824826) - [GAO: DOE Is Prematurely Excluding Less Expensive Options for Nuclear Cleanup](https://www.gao.gov/products/gao-26-108193)
* [2026-07-07, 22:13:52](https://lobste.rs/s/xclcel/final_return_for_openbsd_anti_return) - [A Final Return for OpenBSD Anti-Return-Oriented Programming Mitigations](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6869668)
* [2026-07-07, 22:02:16](https://lobste.rs/s/sglhvg/measurement_study_on_adoption_pledges) - [A Measurement Study on the Adoption of Pledges and Unveils in the OpenBSD Operating System](https://arxiv.org/pdf/2607.03056)
* [2026-07-07, 22:00:00](https://tech.slashdot.org/story/26/07/07/1933209/microsoft-flips-windows-backup-on-by-default-outside-the-eu?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Flips Windows Backup On By Default Outside the EU](https://tech.slashdot.org/story/26/07/07/1933209/microsoft-flips-windows-backup-on-by-default-outside-the-eu?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-07, 21:00:00](https://hardware.slashdot.org/story/26/07/07/1927217/samsung-passes-nvidia-to-become-most-profitable-company-in-the-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Samsung Passes Nvidia To Become Most Profitable Company In the World](https://hardware.slashdot.org/story/26/07/07/1927217/samsung-passes-nvidia-to-become-most-profitable-company-in-the-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-07, 20:50:46](https://news.ycombinator.com/item?id=48823557) - [Every new car sold in the European Union must include a driver monitoring camera](https://allaboutcookies.org/eu-mandatory-distracted-driver-system)
* [2026-07-07, 20:00:00](https://yro.slashdot.org/story/26/07/07/1918257/fcc-to-end-biden-era-rule-that-forces-isps-to-list-all-their-fees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FCC To End Biden-Era Rule That Forces ISPs To List All Their Fees](https://yro.slashdot.org/story/26/07/07/1918257/fcc-to-end-biden-era-rule-that-forces-isps-to-list-all-their-fees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-07, 19:00:00](https://hardware.slashdot.org/story/26/07/07/1740259/chinas-deepseek-developing-its-own-ai-chip?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s DeepSeek Developing Its Own AI Chip](https://hardware.slashdot.org/story/26/07/07/1740259/chinas-deepseek-developing-its-own-ai-chip?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-07, 18:44:29](https://news.ycombinator.com/item?id=48821848) - [Show HN: Davit, a Apple Containers UI](https://davit.app)
* [2026-07-07, 18:24:10](https://news.ycombinator.com/item?id=48821576) - [Local, CPU-Friendly, High-Quality TTS (Text-to-Speech) with Kokoro](https://ariya.io/2026/03/local-cpu-friendly-high-quality-tts-text-to-speech-with-kokoro/)
* [2026-07-07, 18:14:50](https://news.ycombinator.com/item?id=48821441) - [Notes on Software Quality](https://anthonyhobday.com/blog/20260410)
* [2026-07-07, 18:08:29](https://news.ycombinator.com/item?id=48821378) - [l: A new runtime for k and q](https://lv1.sh/)
* [2026-07-07, 18:00:00](https://news.slashdot.org/story/26/07/07/1726247/major-banks-in-talks-to-exploit-debit-card-loophole?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Major Banks In Talks To Exploit Debit Card Loophole](https://news.slashdot.org/story/26/07/07/1726247/major-banks-in-talks-to-exploit-debit-card-loophole?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-07, 18:00:00](https://soylentnews.org/article.pl?sid=26/07/05/2125258&amp;from=rss) - [Florida Bans Local Governments From Pursuing Net-Zero Emissions Goals](https://soylentnews.org/article.pl?sid=26/07/05/2125258&amp;from=rss)
* [2026-07-07, 17:51:14](https://lobste.rs/s/srmkur/your_rust_service_isn_t_leaking_it_could_be) - [Your Rust Service Isn&apos;t Leaking — It Could Be the Allocator](https://pranitha.dev/posts/rust-and-memory-allocators/)
* [2026-07-07, 17:44:50](https://news.ycombinator.com/item?id=48821102) - [We&apos;re extending access to Fable 5 on all paid plans through July 12](https://twitter.com/claudeai/status/2074548242386178258)
* [2026-07-07, 17:00:00](https://yro.slashdot.org/story/26/07/07/1650237/microsoft-can-track-users-via-a-windows-device-id?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Can Track Users Via a Windows Device ID](https://yro.slashdot.org/story/26/07/07/1650237/microsoft-can-track-users-via-a-windows-device-id?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-07, 16:30:42](https://news.ycombinator.com/item?id=48820119) - [Jim&apos;s TrueType QR Code Font](https://github.com/jimparis/qr-font)
* [2026-07-07, 16:10:44](https://news.ycombinator.com/item?id=48819808) - [Show HN: Rowboat – Open-source, local-first alternative to Claude Desktop](https://github.com/rowboatlabs/rowboat)
* [2026-07-07, 16:03:16](https://lobste.rs/s/tk8spu/friction_is_feature) - [Friction is a Feature](https://philip.mallegolhansen.com/blog/2026-07-04-friction-is-a-feature.html)
* [2026-07-07, 16:00:00](https://tech.slashdot.org/story/26/07/07/0715252/amazon-will-stop-accepting-new-customers-for-mechanical-turk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Will Stop Accepting New Customers For Mechanical Turk](https://tech.slashdot.org/story/26/07/07/0715252/amazon-will-stop-accepting-new-customers-for-mechanical-turk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-07, 15:58:13](https://news.ycombinator.com/item?id=48819608) - [30papers.com – Ilya&apos;s 30 essential ML papers, in a beginner friendly format](https://30papers.com/)
* [2026-07-07, 15:36:49](https://news.ycombinator.com/item?id=48819308) - [Why we built yet another Postgres connection pooler](https://pgdog.dev/blog/why-yet-another-connection-pooler)
* [2026-07-07, 15:00:00](https://science.slashdot.org/story/26/07/07/076229/learning-another-language-appears-to-slow-brain-aging-by-up-to-13-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Learning Another Language Appears To Slow Brain Aging By Up To 13 Years](https://science.slashdot.org/story/26/07/07/076229/learning-another-language-appears-to-slow-brain-aging-by-up-to-13-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-07, 14:23:15](https://news.ycombinator.com/item?id=48818311) - [Chat Control 1.0 and 2.0 Explained](https://fightchatcontrol.eu/chat-control-overview)
* [2026-07-07, 13:41:01](https://lobste.rs/s/n3iqxi/i_was_wrong_about_game_development) - [I was wrong about game development](https://mijndertstuij.nl/posts/i-was-wrong-about-game-development/)
* [2026-07-07, 13:35:34](https://lobste.rs/s/zffug6/mechanized_type_inference_for_record) - [Mechanized type inference for record concatenation](https://haskellforall.com/2026/07/mechanized-type-inference-for-record-concatenation)
* [2026-07-07, 13:13:47](https://lobste.rs/s/8d9pgd/you_shouldn_t_trust_trusted_publishing) - [You shouldn&apos;t trust Trusted Publishing](https://blog.yossarian.net/2026/07/07/You-shouldnt-trust-trusted-publishing)
* [2026-07-07, 13:13:00](https://soylentnews.org/article.pl?sid=26/07/05/2113231&amp;from=rss) - [NetNut Cracked As Google And FBI Target 2 Million-Device Botnet](https://soylentnews.org/article.pl?sid=26/07/05/2113231&amp;from=rss)
* [2026-07-07, 12:49:03](https://lobste.rs/s/hq8i1h/popup_says_quiet_part_out_loud) - [The Popup That Says the Quiet Part Out Loud](https://blog.ppb1701.com/the-popup-that-says-the-quiet-part-out-loud)
* [2026-07-07, 12:38:35](https://news.ycombinator.com/item?id=48816883) - [StreetComplete: Fixing OpenStreetMap, one tiny quest at a time](https://streetcomplete.app/)
* [2026-07-07, 11:00:34](https://lobste.rs/s/asnoqy/signed_integers_by_default) - [Signed Integers By Default](https://www.gingerbill.org/article/2026/05/03/signed-by-default/)
* [2026-07-07, 11:00:00](https://yro.slashdot.org/story/26/07/07/0036203/us-cyber-agency-is-using-anthropics-mythos-to-audit-government-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Cyber Agency Is Using Anthropic&apos;s Mythos To Audit Government Code](https://yro.slashdot.org/story/26/07/07/0036203/us-cyber-agency-is-using-anthropics-mythos-to-audit-government-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-07, 09:46:01](https://lobste.rs/s/hfiihu/waterfall_cad_playground_haskell) - [Waterfall CAD Playground - A Haskell powered programmable-CAD environment, in the browser with WASM](https://doscienceto.it/waterpark)
* [2026-07-07, 09:35:02](https://lobste.rs/s/709awc/together_for_healthier_clippy) - [Together for a healthier Clippy](https://blog.rust-lang.org/inside-rust/2026/07/06/unite-for-clippy/)
* [2026-07-07, 08:34:00](https://soylentnews.org/article.pl?sid=26/07/05/1926209&amp;from=rss) - [Amazon is Ready to Deploy the LEO Satellite Broadband Service](https://soylentnews.org/article.pl?sid=26/07/05/1926209&amp;from=rss)
* [2026-07-07, 08:22:58](https://lobste.rs/s/no3kkj/why_false_sharing_alignment_should_be_128) - [Why false sharing alignment should be 128 bytes on x64](https://monoid.github.io/posts/false-sharing-alignment/)
* [2026-07-07, 07:33:16](https://lobste.rs/s/v8hk8q/google_s_exponential_path_climate) - [Google’s exponential path to climate-wrecking digital bloat](https://ketanjoshi.co/2026/07/01/googles-exponential-path-to-climate-wrecking-digital-bloat/)
* [2026-07-07, 07:00:00](https://hardware.slashdot.org/story/26/07/07/0027252/github-thumbs-nose-at-sonys-controversial-end-to-physical-media-with-its-introduction-of-repo-cds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GitHub Thumbs Nose At Sony&apos;s Controversial End to Physical Media With Its Introduction of Repo CDs](https://hardware.slashdot.org/story/26/07/07/0027252/github-thumbs-nose-at-sonys-controversial-end-to-physical-media-with-its-introduction-of-repo-cds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-07, 06:20:55](https://lobste.rs/s/5rvgim/odin_1_0_announcement) - [Odin 1.0 Announcement](https://www.youtube.com/watch?v=dLPAqXi9In0)
* [2026-07-07, 03:52:00](https://soylentnews.org/article.pl?sid=26/07/05/1924207&amp;from=rss) - [For The First Time, A Cell Built From Scratch Grows And Divides](https://soylentnews.org/article.pl?sid=26/07/05/1924207&amp;from=rss)
* [2026-07-07, 03:30:00](https://news.slashdot.org/story/26/07/06/228207/research-universities-are-admitting-fewer-phds-a-bad-sign-for-science?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Research Universities Are Admitting Fewer PhDs, a Bad Sign For Science](https://news.slashdot.org/story/26/07/06/228207/research-universities-are-admitting-fewer-phds-a-bad-sign-for-science?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-07, 01:52:36](https://lobste.rs/s/z4apqw/radicle_p2p_git_replication_with_git) - [Radicle: P2P Git Replication with Git Native Issues and Patches](https://radicle.dev/)
* [2026-07-06, 23:04:00](https://soylentnews.org/article.pl?sid=26/07/05/1921216&amp;from=rss) - [David Rosenthal on the LLM Negative Feedback Loop](https://soylentnews.org/article.pl?sid=26/07/05/1921216&amp;from=rss)
* [2026-07-06, 23:00:00](https://slashdot.org/story/26/07/06/221233/small-ai-models-gain-traction-around-the-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Small AI Models Gain Traction Around the World](https://slashdot.org/story/26/07/06/221233/small-ai-models-gain-traction-around-the-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-06, 19:47:11](https://lobste.rs/s/eyojtx/reactos_open_source_windows_project_now) - [ReactOS \&quot;Open-Source Windows\&quot; Project Now Capable Of Running Half-Life 2](https://www.phoronix.com/news/Half-Life-2-ReactOS)
* [2026-07-06, 18:23:00](https://soylentnews.org/article.pl?sid=26/07/05/1917212&amp;from=rss) - [Travel like it&apos;s 0 AD. ](https://soylentnews.org/article.pl?sid=26/07/05/1917212&amp;from=rss)
* [2026-07-06, 13:42:00](https://soylentnews.org/article.pl?sid=26/07/05/1911206&amp;from=rss) - [Modern Life May be Outpacing the Human Mind](https://soylentnews.org/article.pl?sid=26/07/05/1911206&amp;from=rss)
* [2026-07-06, 09:00:00](https://soylentnews.org/article.pl?sid=26/07/05/092233&amp;from=rss) - [New Law Could Let Tesla Ship Cars With No Brake Pedals Installed](https://soylentnews.org/article.pl?sid=26/07/05/092233&amp;from=rss)
* [2026-07-06, 04:16:00](https://soylentnews.org/article.pl?sid=26/07/05/0859246&amp;from=rss) - [The Weirdness of Neutrinos Could Completely Rewrite Particle Physics](https://soylentnews.org/article.pl?sid=26/07/05/0859246&amp;from=rss)
* [2026-07-05, 23:35:00](https://soylentnews.org/article.pl?sid=26/07/04/0717219&amp;from=rss) - [What the US Was Like in the 1920s](https://soylentnews.org/article.pl?sid=26/07/04/0717219&amp;from=rss)
* [2026-07-05, 18:52:00](https://soylentnews.org/article.pl?sid=26/07/04/0714213&amp;from=rss) - [Raspberry Pi OS Gets a New Kernel but Apparently Not a New Version Number](https://soylentnews.org/article.pl?sid=26/07/04/0714213&amp;from=rss)
* [2026-07-05, 14:02:00](https://soylentnews.org/article.pl?sid=26/07/04/074205&amp;from=rss) - [61% of US Adults Use AI for Health Information Now - Up From 2% in 2024](https://soylentnews.org/article.pl?sid=26/07/04/074205&amp;from=rss)
* [2026-07-05, 13:12:19](https://news.ycombinator.com/item?id=48794049) - [Scheme Is a Hoot](https://gracefulliberty.com/notes/scheme-is-a-hoot/)
* [2026-07-05, 12:39:08](https://news.ycombinator.com/item?id=48793805) - [Home made GPU escalated quickly [video]](https://www.youtube.com/watch?v=qMR3IXF2sWw)
* [2026-07-05, 09:21:00](https://soylentnews.org/article.pl?sid=26/07/04/0653237&amp;from=rss) - [It&apos;s Looking Like a Hot, Messy Summer for Security Teams as AI Finds Hidden Vulnerabilities](https://soylentnews.org/article.pl?sid=26/07/04/0653237&amp;from=rss)
* [2026-07-05, 05:34:00](https://soylentnews.org/article.pl?sid=26/07/04/0645204&amp;from=rss) - [10 Medieval Inventions That Shaped the Modern World](https://soylentnews.org/article.pl?sid=26/07/04/0645204&amp;from=rss)
* [2026-07-05, 00:48:00](https://soylentnews.org/article.pl?sid=26/07/04/0643229&amp;from=rss) - [Large Hadron Collider Goes Offline to Make Room for its Enhanced Successor](https://soylentnews.org/article.pl?sid=26/07/04/0643229&amp;from=rss)
* [2026-07-04, 22:24:11](https://news.ycombinator.com/item?id=48789625) - [Automate Excel with Python: From manual grind to one-click workflow](https://nostarch.com/automate-excel-with-python)
* [2026-07-04, 20:05:00](https://soylentnews.org/article.pl?sid=26/07/02/1531208&amp;from=rss) - [NASA Unsure Boeing Starliner Will Ever Be Certified For Human Flight](https://soylentnews.org/article.pl?sid=26/07/02/1531208&amp;from=rss)
* [2026-07-04, 16:46:24](https://news.ycombinator.com/item?id=48786789) - [Canada&apos;s only watchmaking school still ticking after 80 years](https://www.cbc.ca/news/canada/montreal/canada-s-only-watchmaking-school-9.7254211)
* [2026-07-04, 15:24:00](https://soylentnews.org/article.pl?sid=26/07/02/1526221&amp;from=rss) - [Oomwoo is a New Open-Source Robot Vacuum You Can 3D Print Yourself](https://soylentnews.org/article.pl?sid=26/07/02/1526221&amp;from=rss)
* [2026-07-04, 10:42:00](https://soylentnews.org/article.pl?sid=26/07/02/1523206&amp;from=rss) - [Sony Announces End of PlayStation Discs, Parts of Digital Store in the Same Day](https://soylentnews.org/article.pl?sid=26/07/02/1523206&amp;from=rss)
* [2026-07-04, 05:54:00](https://soylentnews.org/article.pl?sid=26/07/02/1516223&amp;from=rss) - [Engineer Open-Sources DIY Radar System That&apos;s 95% Cheaper Than $250,000 Commercial Offerings, Has 20](https://soylentnews.org/article.pl?sid=26/07/02/1516223&amp;from=rss)
* [2026-07-04, 04:16:00](https://soylentnews.org/article.pl?sid=26/07/02/1521222&amp;from=rss) - [Americans!  Enjoy Your 4th July Celebrations](https://soylentnews.org/article.pl?sid=26/07/02/1521222&amp;from=rss)
* [2026-07-04, 01:13:00](https://soylentnews.org/article.pl?sid=26/07/02/1510239&amp;from=rss) - [It&apos;s Time to Step Up and Have Your Say for Science](https://soylentnews.org/article.pl?sid=26/07/02/1510239&amp;from=rss)
