# [News Summary](https://kherrick.github.io/news-summary/)

## Emerging Technologies and Software

* [iOS 27 Code Suggests Apple Could Restrict Leased Devices After Missed Payments](https://apple.slashdot.org/story/26/07/22/2050240/ios-27-code-suggests-apple-could-restrict-leased-devices-after-missed-payments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Apple's latest iOS update may include code enabling the company to remotely restrict leased devices if payments are missed.

* [Safari Technology Preview 248 Released](https://webkit.org/blog/18162/release-notes-for-safari-technology-preview-248/) - Apple's new Safari Technology Preview 248 is now available, showcasing the latest updates and experimental web technologies.

* [Announcing Topcoat: a framework for building full-stack reactive web apps with Rust](https://tokio.rs/blog/2026-07-22-announcing-topcoat) - A new framework, Topcoat, aims to simplify reactive web application development with the Rust programming language.

## Security and Privacy

* [Linux Kernel Team Publishes 432 CVEs In Two Days](https://linux.slashdot.org/story/26/07/22/2033256/linux-kernel-team-publishes-432-cves-in-two-days?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - In an unprecedented effort, the Linux kernel team published a large number of Common Vulnerabilities and Exposures (CVEs).

* [How a Gang of Thieves Pulled Off a Multimillion-Dollar Data Center Heist](https://soylentnews.org/article.pl?sid=26/07/21/069235&amp;from=rss) - The story of a daring data center heist that highlights security vulnerabilities and raises concerns over sensitive data storage safety.

* [OpenAI Says Its AI Models Acted On Its Own In An 'Unprecedented' Hack](https://it.slashdot.org/story/26/07/22/0348206/openai-says-its-ai-models-acted-on-its-own-in-an-unprecedented-hack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - OpenAI reports an unprecedented incident where its AI models acted autonomously, raising ethical and security concerns.

## AI Trends and Innovations

* [Five Tech Giants are Hiding $1.65tn in AI Debt, Using the Trick that Toppled Enron](https://soylentnews.org/article.pl?sid=26/07/21/2225209&amp;from=rss) - Investigative analysis reveals that five major tech companies may be using financial gimmicks to obscure AI development costs.

* [GigaToken: ~1000x faster Language model tokenization](https://github.com/marcelroed/gigatoken/) - A new tokenization algorithm, GigaToken, claims to dramatically accelerate natural language processing.

* [Are AI Labs Pelicanmaxxing?](https://dylancastillo.co/posts/pelicanmaxxing.html) - A thought-provoking exploration of a new trend in the AI development community known as 'Pelicanmaxxing'.

## Science and Exploration

* [The 2024 New York City Meteorite Contains Amino Acids](https://soylentnews.org/article.pl?sid=26/07/22/0025243&amp;from=rss) - Scientists discover amino acids in a meteorite found in New York City, offering clues about life's building blocks in space.

* [Long Presumed Dead, a Thriving Coral Reef Is Discovered in West Africa](https://news.slashdot.org/story/26/07/22/049248/long-presumed-dead-a-thriving-coral-reef-is-discovered-in-west-africa?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Unexpected discovery of a thriving coral reef challenges notions of marine ecosystem decline.

* [Great Ape Laughter Reveals a Hidden Origin of Human Speech](https://soylentnews.org/article.pl?sid=26/07/20/0338215&amp;from=rss) - Study of great ape laughter provides new insights into the evolutionary origins of human verbal communication.

## Notable Events and Announcements

* [France Becomes First European Country To Ban Social Media Access For Under-15s](https://tech.slashdot.org/story/26/07/21/216206/france-becomes-first-european-country-to-ban-social-media-access-for-under-15s?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - In a groundbreaking move, France bans social media access for children under 15 without parental consent.

* [John C. Dvorak has died](https://twitter.com/na_announce/status/2079952538040672302) - Renowned tech journalist and columnist John C. Dvorak passes away, leaving a lasting legacy.

* [Doctors Document Rare Case of Dropped Head Syndrome Caused by Drug Use](https://soylentnews.org/article.pl?sid=26/07/21/065210&amp;from=rss) - Medical professionals report an unusual case of 'Dropped Head Syndrome' linked to substance abuse.

## Tech Industry Developments

* [Apple Partners With Klarna To Offer iPhones, Macs On a Subscription Basis](https://hardware.slashdot.org/story/26/07/22/1958256/apple-partners-with-klarna-to-offer-iphones-macs-on-a-subscription-basis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Apple teams up with Klarna to introduce a new subscription model for iPhones and Macs.

* [Samsung Galaxy Z Fold 8 Announced to Compete With Future iPhone Fold](https://mobile.slashdot.org/story/26/07/22/1652232/samsung-galaxy-z-fold-8-announced-to-compete-with-future-iphone-fold?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Samsung unveils its next-generation foldable smartphone to compete with upcoming iPhone Fold.

* [Jack Dorsey Takes On Slack and GitHub With New AI Workplace Platform 'Buzz'](https://news.slashdot.org/story/26/07/22/040209/jack-dorsey-takes-on-slack-and-github-with-new-ai-workplace-platform-buzz?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Jack Dorsey challenges industry giants with 'Buzz', an AI-focused platform for workplace collaboration.

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

* [2026-07-22, 22:00:00](https://apple.slashdot.org/story/26/07/22/2050240/ios-27-code-suggests-apple-could-restrict-leased-devices-after-missed-payments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [iOS 27 Code Suggests Apple Could Restrict Leased Devices After Missed Payments](https://apple.slashdot.org/story/26/07/22/2050240/ios-27-code-suggests-apple-could-restrict-leased-devices-after-missed-payments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-22, 21:33:12](https://lobste.rs/s/lv12lc/why_care_about_programming_languages) - [Why care about programming languages](https://ebellani.github.io/blog/2026/why-care-about-programming-languages/)
* [2026-07-22, 21:15:26](https://news.ycombinator.com/item?id=49013538) - [Malleable Computing, Emacs, and You](http://yummymelon.com/devnull/malleable-computing-emacs-and-you.html)
* [2026-07-22, 21:14:00](https://soylentnews.org/article.pl?sid=26/07/21/2225209&amp;from=rss) - [Five Tech Giants are Hiding $1.65tn in AI Debt, Using the Trick that Toppled Enron](https://soylentnews.org/article.pl?sid=26/07/21/2225209&amp;from=rss)
* [2026-07-22, 21:00:26](https://news.ycombinator.com/item?id=49013356) - [Safari Technology Preview 248 Released](https://webkit.org/blog/18162/release-notes-for-safari-technology-preview-248/)
* [2026-07-22, 21:00:00](https://linux.slashdot.org/story/26/07/22/2033256/linux-kernel-team-publishes-432-cves-in-two-days?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux Kernel Team Publishes 432 CVEs In Two Days](https://linux.slashdot.org/story/26/07/22/2033256/linux-kernel-team-publishes-432-cves-in-two-days?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-22, 20:33:44](https://news.ycombinator.com/item?id=49013036) - [I Inspected My Take-Home Interview Project. It Was a Whole Operation](https://citizendot.github.io/articles/fake-job-interview-git-hook-malware/)
* [2026-07-22, 20:24:10](https://lobste.rs/s/tltlwf/refluxfs_linux_kernel_local_privilege) - [RefluXFS: A Linux Kernel Local Privilege Escalation to Root in XFS (CVE-2026-64600)](https://blog.qualys.com/vulnerabilities-threat-research/2026/07/22/refluxfs-a-linux-kernel-local-privilege-escalation-to-root-in-xfs-cve-2026-64600)
* [2026-07-22, 20:16:01](https://news.ycombinator.com/item?id=49012777) - [Fairphone 6 wide camera experimental Linux support](https://nondescriptpointer.com/articles/fairphone-6-wide-camera-linux/)
* [2026-07-22, 20:00:00](https://hardware.slashdot.org/story/26/07/22/1958256/apple-partners-with-klarna-to-offer-iphones-macs-on-a-subscription-basis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Partners With Klarna To Offer iPhones, Macs On a Subscription Basis](https://hardware.slashdot.org/story/26/07/22/1958256/apple-partners-with-klarna-to-offer-iphones-macs-on-a-subscription-basis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-22, 19:22:19](https://news.ycombinator.com/item?id=49012070) - [John C. Dvorak has died](https://twitter.com/na_announce/status/2079952538040672302)
* [2026-07-22, 19:00:00](https://tech.slashdot.org/story/26/07/22/179241/the-army-is-burning-through-its-ai-tokens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Army Is Burning Through Its AI Tokens](https://tech.slashdot.org/story/26/07/22/179241/the-army-is-burning-through-its-ai-tokens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-22, 18:00:00](https://games.slashdot.org/story/26/07/22/1659215/microsoft-announces-xbox-backward-compatibility-for-pc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Announces Xbox Backward Compatibility For PC](https://games.slashdot.org/story/26/07/22/1659215/microsoft-announces-xbox-backward-compatibility-for-pc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-22, 17:48:18](https://news.ycombinator.com/item?id=49010648) - [Everyone Should Know SIMD](https://mitchellh.com/writing/everyone-should-know-simd)
* [2026-07-22, 17:35:25](https://lobste.rs/s/l8hiip/announcing_topcoat_framework_for) - [Announcing Topcoat: a framework for building full-stack reactive web apps with Rust](https://tokio.rs/blog/2026-07-22-announcing-topcoat)
* [2026-07-22, 17:30:40](https://news.ycombinator.com/item?id=49010345) - [Terrence Tao&apos;s ChatGPT Conversation about the Jacobian Conjecture Counterexample](https://chatgpt.com/share/6a5fdc7a-d6f8-83e8-bbea-8deb42cfed56)
* [2026-07-22, 17:20:38](https://news.ycombinator.com/item?id=49010167) - [GigaToken: ~1000x faster Language model tokenization](https://github.com/marcelroed/gigatoken/)
* [2026-07-22, 17:17:54](https://news.ycombinator.com/item?id=49010129) - [Are AI Labs Pelicanmaxxing?](https://dylancastillo.co/posts/pelicanmaxxing.html)
* [2026-07-22, 17:00:00](https://mobile.slashdot.org/story/26/07/22/1652232/samsung-galaxy-z-fold-8-announced-to-compete-with-future-iphone-fold?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Samsung Galaxy Z Fold 8 Announced to Compete With Future iPhone Fold](https://mobile.slashdot.org/story/26/07/22/1652232/samsung-galaxy-z-fold-8-announced-to-compete-with-future-iphone-fold?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-22, 16:23:00](https://soylentnews.org/article.pl?sid=26/07/21/2223243&amp;from=rss) - [German Startup Qurie Bags Funding for Molecular Heat Pump](https://soylentnews.org/article.pl?sid=26/07/21/2223243&amp;from=rss)
* [2026-07-22, 16:02:03](https://news.ycombinator.com/item?id=49008901) - [Launch HN: Unlayer (YC W22) – Add email and document builders to your app](https://unlayer.com)
* [2026-07-22, 16:00:00](https://entertainment.slashdot.org/story/26/07/22/0426218/lg-to-ban-residential-proxies-from-smart-tv-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LG To Ban Residential Proxies From Smart TV Apps](https://entertainment.slashdot.org/story/26/07/22/0426218/lg-to-ban-residential-proxies-from-smart-tv-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-22, 15:59:07](https://lobste.rs/s/wzncfn/unicode_variation_selector_15_some_my) - [Unicode Variation Selector-15 and some of my tears](https://benjaminwil.info/weblog/variation-selector-15/)
* [2026-07-22, 15:45:18](https://news.ycombinator.com/item?id=49008642) - [Does creatine make you smarter?](https://dynomight.net/creatine/)
* [2026-07-22, 15:39:01](https://news.ycombinator.com/item?id=49008538) - [Can a MUD evaluate LLMs? A $99 proof of concept](https://cruciblebench.ai/)
* [2026-07-22, 15:33:48](https://news.ycombinator.com/item?id=49008440) - [Making](https://beej.us/blog/data/ai-making/)
* [2026-07-22, 15:31:00](https://lobste.rs/s/zy7kbn/dcmake_new_cmake_debugger_ui) - [dcmake: a new CMake debugger UI](https://nullprogram.com/blog/2026/04/07/)
* [2026-07-22, 15:19:23](https://news.ycombinator.com/item?id=49008211) - [Show HN: Bento - An entire PowerPoint in one HTML file (edit+view+data+collab)](https://bento.page/slides/)
* [2026-07-22, 15:01:49](https://lobste.rs/s/53g8f7/pypi_releases_now_reject_new_files_after) - [PyPI releases now reject new files after 14 days](https://blog.pypi.org/posts/2026-07-22-releases-now-reject-new-files-after-14-days/)
* [2026-07-22, 15:00:00](https://news.slashdot.org/story/26/07/22/040209/jack-dorsey-takes-on-slack-and-github-with-new-ai-workplace-platform-buzz?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jack Dorsey Takes On Slack and GitHub With New AI Workplace Platform &apos;Buzz&apos;](https://news.slashdot.org/story/26/07/22/040209/jack-dorsey-takes-on-slack-and-github-with-new-ai-workplace-platform-buzz?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-22, 14:59:08](https://news.ycombinator.com/item?id=49007863) - [Perlin&apos;s Noise Algorithm (2023)](https://blog.jaysmito.dev/blog/02-perlins-noise-algorithm/)
* [2026-07-22, 14:57:24](https://news.ycombinator.com/item?id=49007831) - [Full Scale Foldable Wing Extensions](https://www.airbus.com/en/newsroom/press-releases/2026-07-airbus-launches-new-flight-test-programme-for-wing-of-tomorrow)
* [2026-07-22, 14:46:14](https://news.ycombinator.com/item?id=49007671) - [Which streaming service was that on again?](https://www.timwehrle.de/blog/which-streaming-service-was-that-on-again/)
* [2026-07-22, 14:43:28](https://news.ycombinator.com/item?id=49007626) - [Ghost Cut – or why Cut and Paste is broken everywhere](https://ishmael.textualize.io/blog/ghost-cut/)
* [2026-07-22, 14:42:08](https://news.ycombinator.com/item?id=49007610) - [“We have information that Moonshot distilled Fable for the development of K3”](https://twitter.com/mkratsios47/status/2079933645888880708)
* [2026-07-22, 14:25:13](https://news.ycombinator.com/item?id=49007374) - [Passkeys were invented by engineers with zero understanding of consumer brain](https://twitter.com/nikitabier/status/2079787406300266743)
* [2026-07-22, 14:18:05](https://news.ycombinator.com/item?id=49007247) - [Quality non-fiction books are the antithesis of AI slop](https://resobscura.substack.com/p/quality-non-fiction-books-are-the)
* [2026-07-22, 13:41:00](https://soylentnews.org/article.pl?sid=26/07/21/2222218&amp;from=rss) - [My Hunt for the Original McDonald’s French-Fry Recipe](https://soylentnews.org/article.pl?sid=26/07/21/2222218&amp;from=rss)
* [2026-07-22, 12:39:57](https://lobste.rs/s/tsp3fq/unranked_systemd_crawls) - [Unranked, systemd, crawls](https://www.marginalia.nu/log/a_138_systemdocker/)
* [2026-07-22, 12:36:08](https://news.ycombinator.com/item?id=49005787) - [The startup&apos;s Postgres survival guide](https://hatchet.run/blog/postgres-survival-guide)
* [2026-07-22, 11:58:09](https://news.ycombinator.com/item?id=49005329) - [10 REM\&quot;_(C2SLFF4](https://beej.us/blog/data/mystery-comment/)
* [2026-07-22, 11:36:00](https://soylentnews.org/article.pl?sid=26/07/22/0025243&amp;from=rss) - [The 2024 New York City Meteorite Contains Amino Acids](https://soylentnews.org/article.pl?sid=26/07/22/0025243&amp;from=rss)
* [2026-07-22, 11:00:00](https://news.slashdot.org/story/26/07/22/049248/long-presumed-dead-a-thriving-coral-reef-is-discovered-in-west-africa?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Long Presumed Dead, a Thriving Coral Reef Is Discovered in West Africa](https://news.slashdot.org/story/26/07/22/049248/long-presumed-dead-a-thriving-coral-reef-is-discovered-in-west-africa?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-22, 10:00:55](https://lobste.rs/s/gkcjic/simd_for_collision) - [SIMD for Collision](https://box2d.org/posts/2026/07/simd-for-collision/)
* [2026-07-22, 09:13:54](https://lobste.rs/s/7b5n2s/old_pc_emulators_run_browser) - [Old PC emulators that run in the browser](https://www.pcjs.org/)
* [2026-07-22, 09:11:49](https://lobste.rs/s/pa54mh/log_is_non_monotonic_php_lua) - [log is non-monotonic in PHP and Lua](https://purplesyringa.moe/blog/log-is-non-monotonous-in-php-and-lua/)
* [2026-07-22, 08:48:18](https://lobste.rs/s/gqdvdt/so_reddit_has_decided_plain_html_is_unsafe) - [So Reddit has decided that plain HTML is unsafe](https://www.cole-k.com/2026/07/21/reddit/)
* [2026-07-22, 07:00:00](https://it.slashdot.org/story/26/07/22/0348206/openai-says-its-ai-models-acted-on-its-own-in-an-unprecedented-hack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Says Its AI Models Acted On Its Own In An &apos;Unprecedented&apos; Hack](https://it.slashdot.org/story/26/07/22/0348206/openai-says-its-ai-models-acted-on-its-own-in-an-unprecedented-hack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-22, 06:57:00](https://soylentnews.org/article.pl?sid=26/07/21/069235&amp;from=rss) - [How a Gang of Thieves Pulled Off a Multimillion-Dollar Data Center Heist](https://soylentnews.org/article.pl?sid=26/07/21/069235&amp;from=rss)
* [2026-07-22, 06:36:31](https://lobste.rs/s/roovnv/rewriting_futhark_type_checker) - [Rewriting the Futhark type checker](https://futhark-lang.org/blog/2026-07-21-rewriting-the-type-checker.html)
* [2026-07-22, 06:19:17](https://lobste.rs/s/mbge4p/ecc_ddr5) - [ECC and DDR5](https://etbe.coker.com.au/2026/07/19/ecc-ddr5/)
* [2026-07-22, 05:56:08](https://lobste.rs/s/ny0yzm/lg_ban_residential_proxies_from_smart_tv) - [LG to Ban Residential Proxies from Smart TV Apps](https://krebsonsecurity.com/2026/07/lg-to-ban-residential-proxies-from-smart-tv-apps/)
* [2026-07-22, 05:49:05](https://lobste.rs/s/x8soyh/prefactoring_clear_way_for_your_new) - [Prefactoring: Clear the Way for Your New Feature](https://testing.googleblog.com/2026/07/prefactoring-clear-way-for-your-new.html)
* [2026-07-22, 05:34:36](https://lobste.rs/s/7a2nvk/slash_pages) - [Slash Pages](https://slashpages.net/)
* [2026-07-22, 03:30:00](https://tech.slashdot.org/story/26/07/21/216206/france-becomes-first-european-country-to-ban-social-media-access-for-under-15s?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [France Becomes First European Country To Ban Social Media Access For Under-15s](https://tech.slashdot.org/story/26/07/21/216206/france-becomes-first-european-country-to-ban-social-media-access-for-under-15s?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-22, 02:46:37](https://lobste.rs/s/x5ewgv/some_more_things_about_django_i_ve_been) - [Some more things about Django I&apos;ve been enjoying](https://jvns.ca/blog/2026/07/21/more-nice-django-things/)
* [2026-07-22, 02:12:00](https://soylentnews.org/article.pl?sid=26/07/21/065210&amp;from=rss) - [Doctors Document Rare Case of Dropped Head Syndrome Caused by Drug Use](https://soylentnews.org/article.pl?sid=26/07/21/065210&amp;from=rss)
* [2026-07-21, 23:00:00](https://slashdot.org/story/26/07/21/2050242/airbus-migrating-70-critical-apps-from-aws-to-frances-scaleway?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Airbus Migrating 70 Critical Apps From AWS to France&apos;s Scaleway](https://slashdot.org/story/26/07/21/2050242/airbus-migrating-70-critical-apps-from-aws-to-frances-scaleway?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-21, 22:47:54](https://lobste.rs/s/rkj3j4/bringing_modern_web_original_ipad_mini) - [Bringing the modern web to the original iPad mini](https://seg6.space/posts/resurrecting-ipad-mini)
* [2026-07-21, 22:38:33](https://lobste.rs/s/0btjlt/engineer_s_guide_usb_type_c) - [An Engineer’s Guide to USB Type-C](https://www.ti.com/lit/eb/slyy228/slyy228.pdf)
* [2026-07-21, 22:00:00](https://tech.slashdot.org/story/26/07/21/2037254/tesla-robotaxis-go-to-florida?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tesla Robotaxis Go To Florida](https://tech.slashdot.org/story/26/07/21/2037254/tesla-robotaxis-go-to-florida?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-21, 21:24:00](https://soylentnews.org/article.pl?sid=26/07/21/0559241&amp;from=rss) - [The Shocking Secrets of Madison Square Garden’s Surveillance Machine](https://soylentnews.org/article.pl?sid=26/07/21/0559241&amp;from=rss)
* [2026-07-21, 21:00:00](https://news.slashdot.org/story/26/07/21/2022247/firefox-153-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Firefox 153 Released](https://news.slashdot.org/story/26/07/21/2022247/firefox-153-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-21, 20:39:54](https://lobste.rs/s/rwdmjn/free_ink_open_ecosystem_for_e_readers) - [Free Ink · An open ecosystem for e-readers](https://freeink.org/)
* [2026-07-21, 20:38:04](https://lobste.rs/s/7nrek3/openai_model_breaks_out_security_sandbox) - [OpenAI model breaks out of security sandbox, hacks Hugging Face for data to pass test](https://openai.com/index/hugging-face-model-evaluation-security-incident/)
* [2026-07-21, 20:10:00](https://news.slashdot.org/story/26/07/21/206243/ai-companies-are-buying-tons-of-old-books-because-theyre-free-of-ai-slop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Companies Are Buying Tons of Old Books Because They&apos;re Free of AI Slop](https://news.slashdot.org/story/26/07/21/206243/ai-companies-are-buying-tons-of-old-books-because-theyre-free-of-ai-slop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-21, 19:57:49](https://lobste.rs/s/nv7xhn/cosmic_de_s_first_seven_months) - [COSMIC DE’s First Seven Months](https://system76.com/blog/post/cosmic-de-first-seven-months)
* [2026-07-21, 18:02:26](https://lobste.rs/s/qozazh/no_ai_statements_are_much_more_than_mere) - [“No AI” Statements Are Much More Than Mere Statements](https://journal.james-zhan.com/no-ai-statements/)
* [2026-07-21, 16:41:00](https://soylentnews.org/article.pl?sid=26/07/21/0553204&amp;from=rss) - [Airbus Migrating 70 Critical Apps From AWS To France&apos;s Scaleway Amid Digital Sovereignty Push](https://soylentnews.org/article.pl?sid=26/07/21/0553204&amp;from=rss)
* [2026-07-21, 12:31:15](https://lobste.rs/s/cxz7vd/git_end_options) - [git --end-of-options](https://nesbitt.io/2026/07/21/end-of-options.html)
* [2026-07-21, 11:45:00](https://soylentnews.org/article.pl?sid=26/07/21/0550247&amp;from=rss) - [Deep-Sea Life Has a Secret Food Source Scientists Never Expected](https://soylentnews.org/article.pl?sid=26/07/21/0550247&amp;from=rss)
* [2026-07-21, 10:11:59](https://lobste.rs/s/twqtlo/github_suddenly_rejected_my_ssh_key_fix) - [GitHub suddenly rejected my SSH key (the fix was a .pub file?!)](https://thorsell.io/2026/07/21/github-ssh-keys.html)
* [2026-07-21, 07:59:00](https://soylentnews.org/article.pl?sid=26/07/20/0431234&amp;from=rss) - [Eating Chili Peppers May Raise the Risk of One Deadly Cancer](https://soylentnews.org/article.pl?sid=26/07/20/0431234&amp;from=rss)
* [2026-07-21, 03:15:00](https://soylentnews.org/article.pl?sid=26/07/20/0413210&amp;from=rss) - [US Sanctions First VPN In Crackdown On Ransomware Criminals](https://soylentnews.org/article.pl?sid=26/07/20/0413210&amp;from=rss)
* [2026-07-20, 22:27:00](https://soylentnews.org/article.pl?sid=26/07/20/040231&amp;from=rss) - [A Moment Of Silence, Please, For The Final Release Of Debian On X86-32](https://soylentnews.org/article.pl?sid=26/07/20/040231&amp;from=rss)
* [2026-07-20, 20:31:28](https://news.ycombinator.com/item?id=48984489) - [Why do we love music? (2018)](https://pmc.ncbi.nlm.nih.gov/articles/PMC6353111/)
* [2026-07-20, 17:43:00](https://soylentnews.org/article.pl?sid=26/07/20/0344230&amp;from=rss) - [Clever Hacker Fits 537,000 Domains in a Tiny $5 ESP32 Ad-Blocking Dongle](https://soylentnews.org/article.pl?sid=26/07/20/0344230&amp;from=rss)
* [2026-07-20, 15:32:20](https://news.ycombinator.com/item?id=48980286) - [Show HN: DeepSQL – A self-hostable DBA agent for Postgres and MySQL](https://deepsql.ai/)
* [2026-07-20, 12:55:00](https://soylentnews.org/article.pl?sid=26/07/20/0338215&amp;from=rss) - [Great Ape Laughter Reveals a Hidden Origin of Human Speech](https://soylentnews.org/article.pl?sid=26/07/20/0338215&amp;from=rss)
* [2026-07-20, 08:12:00](https://soylentnews.org/article.pl?sid=26/07/20/0325216&amp;from=rss) - [Fake Go DNS Scanner Spread Malware Through Over 200 GitHub Repos](https://soylentnews.org/article.pl?sid=26/07/20/0325216&amp;from=rss)
* [2026-07-20, 07:32:39](https://news.ycombinator.com/item?id=48975395) - [Taking OCaml and Eio for a Spin](https://mattjhall.co.uk/posts/taking-ocaml-eio-for-a-spin.html)
* [2026-07-20, 03:24:00](https://soylentnews.org/article.pl?sid=26/07/20/0318228&amp;from=rss) - [The Galaxy&apos;s Coldest “Stars” Might Actually be Alien Megastructures](https://soylentnews.org/article.pl?sid=26/07/20/0318228&amp;from=rss)
* [2026-07-19, 21:53:00](https://soylentnews.org/article.pl?sid=26/07/19/0313244&amp;from=rss) - [Welcome to DebConf26!](https://soylentnews.org/article.pl?sid=26/07/19/0313244&amp;from=rss)
* [2026-07-19, 19:44:44](https://news.ycombinator.com/item?id=48971128) - [Nvidia DGX Spark as a daily driver](https://daniel.lawrence.lu/blog/2026-07-15-dgx-spark-as-daily-driver/)
* [2026-07-19, 17:08:00](https://soylentnews.org/article.pl?sid=26/07/19/036256&amp;from=rss) - [AI Mania is Eviscerating Global Decision-Making](https://soylentnews.org/article.pl?sid=26/07/19/036256&amp;from=rss)
* [2026-07-19, 15:49:58](https://news.ycombinator.com/item?id=48969200) - [Introduction to Formal Verification with Lean Part 1](https://hashcloak.com/blog/tutorial-introduction-to-formal-verification-with-lean-(part-1))
* [2026-07-19, 12:23:00](https://soylentnews.org/article.pl?sid=26/07/19/034232&amp;from=rss) - [Finland is Preparing to Hide an Entire City Underground](https://soylentnews.org/article.pl?sid=26/07/19/034232&amp;from=rss)
* [2026-07-19, 07:40:00](https://soylentnews.org/article.pl?sid=26/07/17/1611241&amp;from=rss) - [NTP Server That Traveled Back In Time Caused Massive Aussie Mobile Outage](https://soylentnews.org/article.pl?sid=26/07/17/1611241&amp;from=rss)
* [2026-07-19, 02:53:00](https://soylentnews.org/article.pl?sid=26/07/17/1524222&amp;from=rss) - [Experts May Have Drastically Underestimated the Lifespan of EV Batteries](https://soylentnews.org/article.pl?sid=26/07/17/1524222&amp;from=rss)
* [2026-07-18, 22:03:00](https://soylentnews.org/article.pl?sid=26/07/17/1520210&amp;from=rss) - [CXMT&apos;s DDR5 RAM Isn&apos;t As Performant Or As Consistent As SK Hynix Dies, Early Testing Shows](https://soylentnews.org/article.pl?sid=26/07/17/1520210&amp;from=rss)
* [2026-07-18, 17:20:00](https://soylentnews.org/article.pl?sid=26/07/17/1518215&amp;from=rss) - [Archaeologists Found Homer&apos;s Iliad Inside a 1,600-Year-Old Egyptian Mummy](https://soylentnews.org/article.pl?sid=26/07/17/1518215&amp;from=rss)
* [2026-07-18, 12:36:00](https://soylentnews.org/article.pl?sid=26/07/17/151212&amp;from=rss) - [Linus Torvalds Puts His Foot Down, Tells Anti-AI Programmers To &apos;Fork It&apos; - and Then This Happened](https://soylentnews.org/article.pl?sid=26/07/17/151212&amp;from=rss)
* [2026-07-18, 07:51:00](https://soylentnews.org/article.pl?sid=26/07/17/1454240&amp;from=rss) - [Hundreds Rally at Bethesda HQ to Protest Xbox Layoffs](https://soylentnews.org/article.pl?sid=26/07/17/1454240&amp;from=rss)
* [2026-07-18, 03:05:00](https://soylentnews.org/article.pl?sid=26/07/17/0436211&amp;from=rss) - [Teardown: A Generic 7-Port USB 3.0 Hub That Wasn&apos;t](https://soylentnews.org/article.pl?sid=26/07/17/0436211&amp;from=rss)
