# [News Summary](https://kherrick.github.io/news-summary/)

## Advancements in Web, Programming, and Technology

* [Wanix — Wasm-native Unix sandboxing for the web](https://wanix.dev/) offers a cutting-edge solution for creating secure Unix sandboxes directly in WebAssembly.

* [Justif: Knuth-Plass justification and microtypography for the web](https://justif.lyall.co/) introduces advanced formatting techniques to improve textual aesthetics online.

* [Pip 26.2: –only-deps solves 16 years of app deployment hacks](https://jamesoclaire.com/2026/07/23/pip-26-2-only-deps-solves-16-years-of-app-deployment-hacks/) simplifies Python app deployment.

* [dcmake: a new CMake debugger UI](https://nullprogram.com/blog/2026/04/07/) enhances CMake debugging capabilities with a user-friendly interface.

* [Taking OCaml and Eio for a spin](https://mattjhall.co.uk/posts/taking-ocaml-eio-for-a-spin.html) explores innovative features of the OCaml programming model.

## Technology, Space, and AI Updates

* [Private Mission Launches To Extend Life of Out-of-Gas Communication Satellites](https://tech.slashdot.org/story/26/07/23/0534215/private-mission-launches-to-extend-life-of-out-of-gas-communication-satellites?utm_source=rss1.0mainlinkanon&utm_medium=feed) showcases private endeavors in space innovation.

* [The Army Is Burning Through Its AI Tokens](https://tech.slashdot.org/story/26/07/22/179241/the-army-is-burning-through-its-ai-tokens?utm_source=rss1.0mainlinkanon&utm_medium=feed) highlights evolving military AI usage.

* [OpenAI Says Its AI Models Acted On Its Own In An 'Unprecedented' Hack](https://it.slashdot.org/story/26/07/22/0348206/openai-says-its-ai-models-acted-on-its-own-in-an-unprecedented-hack?utm_source=rss1.0mainlinkanon&utm_medium=feed) raises fascinating and concerning questions about autonomous AI behavior.

## Historical Discoveries and Reflections

* [Pan Am Plane Crash That Inspired Modern Safety Briefings Found After 74 Years](https://news.slashdot.org/story/26/07/23/033235/pan-am-plane-crash-that-inspired-modern-safety-briefings-found-after-74-years?utm_source=rss1.0mainlinkanon&utm_medium=feed) uncovers a pivotal aviation tragedy’s crash site.

* [Medici family mystery may be solved after more than 400 years](https://www.cnn.com/2026/07/15/science/medici-family-mystery-dna-malaria) merges science and history to unravel a long-standing enigma.

## Business and Consumer Tech Shifts

* [GM Is Quietly Becoming a Subscriptions Company](https://tech.slashdot.org/story/26/07/22/2010225/gm-is-quietly-becoming-a-subscriptions-company?utm_source=rss1.0mainlinkanon&utm_medium=feed) indicates evolving business models in the automotive sector.

* [Apple Partners With Klarna To Offer iPhones, Macs On a Subscription Basis](https://hardware.slashdot.org/story/26/07/22/1958256/apple-partners-with-klarna-to-offer-iphones-macs-on-a-subscription-basis?utm_source=rss1.0mainlinkanon&utm_medium=feed) reflects changing consumer tech purchasing patterns.

## Cybersecurity and Software Vulnerabilities

* [Frag Gap (CVE-2026-53362, CVE-2026-53366)](https://blog.qwerty.or.kr/en/posts/cdf3008a-c1a4-4eca-a373-aa3a2bcf1489/) uncovers critical exploits with serious ramifications.

* [RefluXFS: A Linux Kernel Local Privilege Escalation to Root in XFS (CVE-2026-64600)](https://blog.qualys.com/vulnerabilities-threat-research/2026/07/22/refluxfs-a-linux-kernel-local-privilege-escalation-to-root-in-xfs-cve-2026-64600) details an alarming vulnerability.

* [Protecting our FLOSS commons from LLMs](https://blog.codeberg.org/protecting-our-floss-commons-from-llms.html) touches on concerns about AI exploiting open-source tools.

## Hardware Engineering and Industrial Insights

* [Zilog Z80 Turns 50 as an Open-Source Replacement Heads to Drop-in DIP40 Silicon](https://soylentnews.org/article.pl?sid=26/07/22/0039239&from=rss) celebrates a milestone in chip design.

* [Samsung Galaxy Z Fold 8 Announced to Compete With Future iPhone Fold](https://mobile.slashdot.org/story/26/07/22/1652232/samsung-galaxy-z-fold-8-announced-to-compete-with-future-iphone-fold?utm_source=rss1.0mainlinkanon&utm_medium=feed) points to trends in smartphone innovation.

* [Great Ape Laughter Reveals a Hidden Origin of Human Speech](https://soylentnews.org/article.pl?sid=26/07/20/0338215&from=rss) presents a blend of biology and linguistics insights.

## Unusual Stories and Interesting Trends

* [How a Gang of Thieves Pulled Off a Multimillion-Dollar Data Center Heist](https://soylentnews.org/article.pl?sid=26/07/21/069235&from=rss) details an audacious tech crime.

* [Finland is Preparing to Hide an Entire City Underground](https://soylentnews.org/article.pl?sid=26/07/19/034232&from=rss) covers unique urban planning in the face of global challenges.

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

* [2026-07-23, 09:31:22](https://lobste.rs/s/urhpbn/wanix_wasm_native_unix_sandboxing_for_web) - [Wanix — Wasm-native Unix sandboxing for the web](https://wanix.dev/)
* [2026-07-23, 09:30:45](https://lobste.rs/s/p1jpv1/justif_knuth_plass_justification) - [Justif: Knuth-Plass justification and microtypography for the web](https://justif.lyall.co/)
* [2026-07-23, 07:00:00](https://tech.slashdot.org/story/26/07/23/0534215/private-mission-launches-to-extend-life-of-out-of-gas-communication-satellites?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Private Mission Launches To Extend Life of Out-of-Gas Communication Satellites](https://tech.slashdot.org/story/26/07/23/0534215/private-mission-launches-to-extend-life-of-out-of-gas-communication-satellites?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-23, 06:38:00](https://soylentnews.org/article.pl?sid=26/07/22/0039239&amp;from=rss) - [Zilog Z80 Turns 50 as an Open-Source Replacement Heads to Drop-in DIP40 Silicon](https://soylentnews.org/article.pl?sid=26/07/22/0039239&amp;from=rss)
* [2026-07-23, 05:50:21](https://lobste.rs/s/wh1vv3/pip_26_2_only_deps_solves_16_years_app) - [Pip 26.2: –only-deps solves 16 years of app deployment hacks](https://jamesoclaire.com/2026/07/23/pip-26-2-only-deps-solves-16-years-of-app-deployment-hacks/)
* [2026-07-23, 05:40:20](https://news.ycombinator.com/item?id=49017344) - [Cruller: Bun&apos;s Zig Runtime, Continued on Zig 0.16](https://ziggit.dev/t/cruller-buns-zig-runtime-continued-on-zig-0-16/16734)
* [2026-07-23, 05:24:17](https://news.ycombinator.com/item?id=49017265) - [Amiga 1000: Ten years ahead of its time](https://dfarq.homeip.net/amiga-1000-ten-years-ahead-of-its-time/)
* [2026-07-23, 04:51:37](https://lobste.rs/s/n0hq44/your_analytics_are_lying_you) - [Your analytics are lying to you](https://ankursethi.com/blog/your-analytics-are-lying-to-you/)
* [2026-07-23, 04:02:57](https://lobste.rs/s/wwelib/what_rose_petals_teach_us_about_induction) - [What Rose Petals Teach Us about Induction](https://www.oranlooney.com/post/rose-petals/)
* [2026-07-23, 03:30:00](https://news.slashdot.org/story/26/07/23/033235/pan-am-plane-crash-that-inspired-modern-safety-briefings-found-after-74-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pan Am Plane Crash That Inspired Modern Safety Briefings Found After 74 Years](https://news.slashdot.org/story/26/07/23/033235/pan-am-plane-crash-that-inspired-modern-safety-briefings-found-after-74-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-23, 02:34:20](https://lobste.rs/s/nohrpm/algebraic_effects_handlers_portable_c99) - [Algebraic effects and handlers in portable C99](https://github.com/koka-lang/libhandler)
* [2026-07-23, 02:28:23](https://news.ycombinator.com/item?id=49016099) - [Restructuring GitHub&apos;s bug bounty program](https://github.blog/security/next-chapter-restructuring-githubs-bug-bounty-program/)
* [2026-07-23, 02:26:09](https://lobste.rs/s/fmyrgy/calm_technologies_excite_me) - [Calm technologies that excite me](https://abhi.now/blog/calm-technologies/)
* [2026-07-23, 02:09:50](https://lobste.rs/s/ap3z0l/john_c_dvorak_has_died) - [John C. Dvorak has died](http://oldvcr.blogspot.com/2026/07/john-c-dvorak-has-died.html)
* [2026-07-23, 01:56:00](https://soylentnews.org/article.pl?sid=26/07/21/2227215&amp;from=rss) - [Open Source Misses the Point and Cannot Save Us](https://soylentnews.org/article.pl?sid=26/07/21/2227215&amp;from=rss)
* [2026-07-23, 01:54:48](https://lobste.rs/s/5nhto6/i_inspected_my_take_home_interview) - [I Inspected My Take-Home Interview Project. It Was a Whole Operation](https://citizendot.github.io/articles/fake-job-interview-git-hook-malware/)
* [2026-07-23, 01:14:53](https://news.ycombinator.com/item?id=49015635) - [Protecting our FLOSS commons from LLMs](https://blog.codeberg.org/protecting-our-floss-commons-from-llms.html)
* [2026-07-23, 01:04:08](https://lobste.rs/s/ax914v/protecting_our_floss_commons_from_llms) - [Protecting our FLOSS commons from LLMs](https://blog.codeberg.org/protecting-our-floss-commons-from-llms.html)
* [2026-07-22, 23:07:39](https://lobste.rs/s/uibzl8/frag_gap_cve_2026_53362_cve_2026_53366) - [Frag Gap (CVE-2026-53362, CVE-2026-53366)](https://blog.qwerty.or.kr/en/posts/cdf3008a-c1a4-4eca-a373-aa3a2bcf1489/)
* [2026-07-22, 23:00:00](https://tech.slashdot.org/story/26/07/22/2010225/gm-is-quietly-becoming-a-subscriptions-company?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GM Is Quietly Becoming a Subscriptions Company](https://tech.slashdot.org/story/26/07/22/2010225/gm-is-quietly-becoming-a-subscriptions-company?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-22, 22:00:00](https://apple.slashdot.org/story/26/07/22/2050240/ios-27-code-suggests-apple-could-restrict-leased-devices-after-missed-payments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [iOS 27 Code Suggests Apple Could Restrict Leased Devices After Missed Payments](https://apple.slashdot.org/story/26/07/22/2050240/ios-27-code-suggests-apple-could-restrict-leased-devices-after-missed-payments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-22, 21:55:34](https://news.ycombinator.com/item?id=49014007) - [Medici family mystery may be solved after more than 400 years](https://www.cnn.com/2026/07/15/science/medici-family-mystery-dna-malaria)
* [2026-07-22, 21:33:17](https://lobste.rs/s/mush3s/taking_ocaml_eio_for_spin) - [Taking OCaml and Eio for a spin](https://mattjhall.co.uk/posts/taking-ocaml-eio-for-a-spin.html)
* [2026-07-22, 21:33:12](https://lobste.rs/s/lv12lc/why_care_about_programming_languages) - [Why care about programming languages](https://ebellani.github.io/blog/2026/why-care-about-programming-languages/)
* [2026-07-22, 21:15:26](https://news.ycombinator.com/item?id=49013538) - [Malleable Computing, Emacs, and You](http://yummymelon.com/devnull/malleable-computing-emacs-and-you.html)
* [2026-07-22, 21:14:00](https://soylentnews.org/article.pl?sid=26/07/21/2225209&amp;from=rss) - [Five Tech Giants are Hiding $1.65tn in AI Debt, Using the Trick that Toppled Enron](https://soylentnews.org/article.pl?sid=26/07/21/2225209&amp;from=rss)
* [2026-07-22, 21:00:00](https://linux.slashdot.org/story/26/07/22/2033256/linux-kernel-team-publishes-432-cves-in-two-days?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux Kernel Team Publishes 432 CVEs In Two Days](https://linux.slashdot.org/story/26/07/22/2033256/linux-kernel-team-publishes-432-cves-in-two-days?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-22, 20:24:10](https://lobste.rs/s/tltlwf/refluxfs_linux_kernel_local_privilege) - [RefluXFS: A Linux Kernel Local Privilege Escalation to Root in XFS (CVE-2026-64600)](https://blog.qualys.com/vulnerabilities-threat-research/2026/07/22/refluxfs-a-linux-kernel-local-privilege-escalation-to-root-in-xfs-cve-2026-64600)
* [2026-07-22, 20:16:01](https://news.ycombinator.com/item?id=49012777) - [Fairphone 6 wide camera experimental Linux support](https://nondescriptpointer.com/articles/fairphone-6-wide-camera-linux/)
* [2026-07-22, 20:00:00](https://hardware.slashdot.org/story/26/07/22/1958256/apple-partners-with-klarna-to-offer-iphones-macs-on-a-subscription-basis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Partners With Klarna To Offer iPhones, Macs On a Subscription Basis](https://hardware.slashdot.org/story/26/07/22/1958256/apple-partners-with-klarna-to-offer-iphones-macs-on-a-subscription-basis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-22, 19:22:19](https://news.ycombinator.com/item?id=49012070) - [John C. Dvorak has died](https://twitter.com/na_announce/status/2079952538040672302)
* [2026-07-22, 19:00:00](https://tech.slashdot.org/story/26/07/22/179241/the-army-is-burning-through-its-ai-tokens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Army Is Burning Through Its AI Tokens](https://tech.slashdot.org/story/26/07/22/179241/the-army-is-burning-through-its-ai-tokens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-22, 18:00:00](https://games.slashdot.org/story/26/07/22/1659215/microsoft-announces-xbox-backward-compatibility-for-pc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Announces Xbox Backward Compatibility For PC](https://games.slashdot.org/story/26/07/22/1659215/microsoft-announces-xbox-backward-compatibility-for-pc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-22, 17:56:29](https://news.ycombinator.com/item?id=49010782) - [Show HN: Cactus Hybrid: We taught Gemma 4 to know when it&apos;s wrong](https://github.com/cactus-compute/cactus-hybrid)
* [2026-07-22, 17:48:18](https://news.ycombinator.com/item?id=49010648) - [Everyone should know SIMD](https://mitchellh.com/writing/everyone-should-know-simd)
* [2026-07-22, 17:35:25](https://lobste.rs/s/l8hiip/announcing_topcoat_framework_for) - [Announcing Topcoat: a framework for building full-stack reactive web apps with Rust](https://tokio.rs/blog/2026-07-22-announcing-topcoat)
* [2026-07-22, 17:30:40](https://news.ycombinator.com/item?id=49010345) - [Terence Tao&apos;s ChatGPT conversation about the Jacobian Conjecture counterexample](https://chatgpt.com/share/6a5fdc7a-d6f8-83e8-bbea-8deb42cfed56)
* [2026-07-22, 17:20:38](https://news.ycombinator.com/item?id=49010167) - [GigaToken: ~1000x faster Language model tokenization](https://github.com/marcelroed/gigatoken/)
* [2026-07-22, 17:17:54](https://news.ycombinator.com/item?id=49010129) - [Are AI labs pelicanmaxxing?](https://dylancastillo.co/posts/pelicanmaxxing.html)
* [2026-07-22, 17:00:00](https://mobile.slashdot.org/story/26/07/22/1652232/samsung-galaxy-z-fold-8-announced-to-compete-with-future-iphone-fold?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Samsung Galaxy Z Fold 8 Announced to Compete With Future iPhone Fold](https://mobile.slashdot.org/story/26/07/22/1652232/samsung-galaxy-z-fold-8-announced-to-compete-with-future-iphone-fold?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-22, 16:23:00](https://soylentnews.org/article.pl?sid=26/07/21/2223243&amp;from=rss) - [German Startup Qurie Bags Funding for Molecular Heat Pump](https://soylentnews.org/article.pl?sid=26/07/21/2223243&amp;from=rss)
* [2026-07-22, 16:00:00](https://entertainment.slashdot.org/story/26/07/22/0426218/lg-to-ban-residential-proxies-from-smart-tv-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LG To Ban Residential Proxies From Smart TV Apps](https://entertainment.slashdot.org/story/26/07/22/0426218/lg-to-ban-residential-proxies-from-smart-tv-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-22, 15:59:07](https://lobste.rs/s/wzncfn/unicode_variation_selector_15_some_my) - [Unicode Variation Selector-15 and some of my tears](https://benjaminwil.info/weblog/variation-selector-15/)
* [2026-07-22, 15:33:48](https://news.ycombinator.com/item?id=49008440) - [Making](https://beej.us/blog/data/ai-making/)
* [2026-07-22, 15:31:00](https://lobste.rs/s/zy7kbn/dcmake_new_cmake_debugger_ui) - [dcmake: a new CMake debugger UI](https://nullprogram.com/blog/2026/04/07/)
* [2026-07-22, 15:19:23](https://news.ycombinator.com/item?id=49008211) - [Show HN: Bento - An entire PowerPoint in one HTML file (edit+view+data+collab)](https://bento.page/slides/)
* [2026-07-22, 15:01:49](https://lobste.rs/s/53g8f7/pypi_releases_now_reject_new_files_after) - [PyPI releases now reject new files after 14 days](https://blog.pypi.org/posts/2026-07-22-releases-now-reject-new-files-after-14-days/)
* [2026-07-22, 15:00:00](https://news.slashdot.org/story/26/07/22/040209/jack-dorsey-takes-on-slack-and-github-with-new-ai-workplace-platform-buzz?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jack Dorsey Takes On Slack and GitHub With New AI Workplace Platform &apos;Buzz&apos;](https://news.slashdot.org/story/26/07/22/040209/jack-dorsey-takes-on-slack-and-github-with-new-ai-workplace-platform-buzz?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-22, 14:43:28](https://news.ycombinator.com/item?id=49007626) - [Ghost Cut – Or why Cut and Paste is broken everywhere](https://ishmael.textualize.io/blog/ghost-cut/)
* [2026-07-22, 14:18:05](https://news.ycombinator.com/item?id=49007247) - [Quality non-fiction books are the antithesis of AI slop](https://resobscura.substack.com/p/quality-non-fiction-books-are-the)
* [2026-07-22, 13:41:00](https://soylentnews.org/article.pl?sid=26/07/21/2222218&amp;from=rss) - [My Hunt for the Original McDonald’s French-Fry Recipe](https://soylentnews.org/article.pl?sid=26/07/21/2222218&amp;from=rss)
* [2026-07-22, 13:08:19](https://news.ycombinator.com/item?id=49006195) - [Back to Kagi](https://blog.melashri.net/micro/back-to-kagi/)
* [2026-07-22, 12:49:45](https://news.ycombinator.com/item?id=49005973) - [Businesses with ugly AI menu redesigns](https://blog.fiddery.com/businesses-with-ugly-ai-menu-redesigns/)
* [2026-07-22, 12:39:57](https://lobste.rs/s/tsp3fq/unranked_systemd_crawls) - [Unranked, systemd, crawls](https://www.marginalia.nu/log/a_138_systemdocker/)
* [2026-07-22, 12:36:08](https://news.ycombinator.com/item?id=49005787) - [The startup&apos;s Postgres survival guide](https://hatchet.run/blog/postgres-survival-guide)
* [2026-07-22, 12:32:48](https://news.ycombinator.com/item?id=49005747) - [So Reddit has decided that plain HTML is unsafe](https://www.cole-k.com/2026/07/21/reddit/)
* [2026-07-22, 11:36:00](https://soylentnews.org/article.pl?sid=26/07/22/0025243&amp;from=rss) - [The 2024 New York City Meteorite Contains Amino Acids](https://soylentnews.org/article.pl?sid=26/07/22/0025243&amp;from=rss)
* [2026-07-22, 11:00:00](https://news.slashdot.org/story/26/07/22/049248/long-presumed-dead-a-thriving-coral-reef-is-discovered-in-west-africa?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Long Presumed Dead, a Thriving Coral Reef Is Discovered in West Africa](https://news.slashdot.org/story/26/07/22/049248/long-presumed-dead-a-thriving-coral-reef-is-discovered-in-west-africa?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-22, 10:00:55](https://lobste.rs/s/gkcjic/simd_for_collision) - [SIMD for Collision](https://box2d.org/posts/2026/07/simd-for-collision/)
* [2026-07-22, 09:11:49](https://lobste.rs/s/pa54mh/log_is_non_monotonic_php_lua) - [log is non-monotonic in PHP and Lua](https://purplesyringa.moe/blog/log-is-non-monotonous-in-php-and-lua/)
* [2026-07-22, 08:48:18](https://lobste.rs/s/gqdvdt/so_reddit_has_decided_plain_html_is_unsafe) - [So Reddit has decided that plain HTML is unsafe](https://www.cole-k.com/2026/07/21/reddit/)
* [2026-07-22, 07:00:00](https://it.slashdot.org/story/26/07/22/0348206/openai-says-its-ai-models-acted-on-its-own-in-an-unprecedented-hack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Says Its AI Models Acted On Its Own In An &apos;Unprecedented&apos; Hack](https://it.slashdot.org/story/26/07/22/0348206/openai-says-its-ai-models-acted-on-its-own-in-an-unprecedented-hack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-22, 06:57:00](https://soylentnews.org/article.pl?sid=26/07/21/069235&amp;from=rss) - [How a Gang of Thieves Pulled Off a Multimillion-Dollar Data Center Heist](https://soylentnews.org/article.pl?sid=26/07/21/069235&amp;from=rss)
* [2026-07-22, 05:56:08](https://lobste.rs/s/ny0yzm/lg_ban_residential_proxies_from_smart_tv) - [LG to Ban Residential Proxies from Smart TV Apps](https://krebsonsecurity.com/2026/07/lg-to-ban-residential-proxies-from-smart-tv-apps/)
* [2026-07-22, 05:49:05](https://lobste.rs/s/x8soyh/prefactoring_clear_way_for_your_new) - [Prefactoring: Clear the Way for Your New Feature](https://testing.googleblog.com/2026/07/prefactoring-clear-way-for-your-new.html)
* [2026-07-22, 05:34:36](https://lobste.rs/s/7a2nvk/slash_pages) - [Slash Pages](https://slashpages.net/)
* [2026-07-22, 03:30:00](https://tech.slashdot.org/story/26/07/21/216206/france-becomes-first-european-country-to-ban-social-media-access-for-under-15s?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [France Becomes First European Country To Ban Social Media Access For Under-15s](https://tech.slashdot.org/story/26/07/21/216206/france-becomes-first-european-country-to-ban-social-media-access-for-under-15s?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-22, 02:12:00](https://soylentnews.org/article.pl?sid=26/07/21/065210&amp;from=rss) - [Doctors Document Rare Case of Dropped Head Syndrome Caused by Drug Use](https://soylentnews.org/article.pl?sid=26/07/21/065210&amp;from=rss)
* [2026-07-21, 23:00:00](https://slashdot.org/story/26/07/21/2050242/airbus-migrating-70-critical-apps-from-aws-to-frances-scaleway?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Airbus Migrating 70 Critical Apps From AWS to France&apos;s Scaleway](https://slashdot.org/story/26/07/21/2050242/airbus-migrating-70-critical-apps-from-aws-to-frances-scaleway?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-21, 21:24:00](https://soylentnews.org/article.pl?sid=26/07/21/0559241&amp;from=rss) - [The Shocking Secrets of Madison Square Garden’s Surveillance Machine](https://soylentnews.org/article.pl?sid=26/07/21/0559241&amp;from=rss)
* [2026-07-21, 16:41:00](https://soylentnews.org/article.pl?sid=26/07/21/0553204&amp;from=rss) - [Airbus Migrating 70 Critical Apps From AWS To France&apos;s Scaleway Amid Digital Sovereignty Push](https://soylentnews.org/article.pl?sid=26/07/21/0553204&amp;from=rss)
* [2026-07-21, 13:13:47](https://news.ycombinator.com/item?id=48991882) - [git&apos;s –end-of-options Flag](https://nesbitt.io/2026/07/21/end-of-options.html)
* [2026-07-21, 11:45:00](https://soylentnews.org/article.pl?sid=26/07/21/0550247&amp;from=rss) - [Deep-Sea Life Has a Secret Food Source Scientists Never Expected](https://soylentnews.org/article.pl?sid=26/07/21/0550247&amp;from=rss)
* [2026-07-21, 10:04:20](https://news.ycombinator.com/item?id=48990219) - [Escape IntelliJ: Scala and Kotlin LSPs on Emacs Eglot](https://jointhefreeworld.org/blog/articles/emacs/emacs-eglot-scala-kotlin/index.html)
* [2026-07-21, 07:59:00](https://soylentnews.org/article.pl?sid=26/07/20/0431234&amp;from=rss) - [Eating Chili Peppers May Raise the Risk of One Deadly Cancer](https://soylentnews.org/article.pl?sid=26/07/20/0431234&amp;from=rss)
* [2026-07-21, 07:01:24](https://news.ycombinator.com/item?id=48989006) - [ANSI escape injection in MCP servers: Hidden from humans, visible to AI](https://brightsec.com/research/detecting-ansi-escape-sequence-injection-in-mcp-servers-with-dast/)
* [2026-07-21, 03:15:00](https://soylentnews.org/article.pl?sid=26/07/20/0413210&amp;from=rss) - [US Sanctions First VPN In Crackdown On Ransomware Criminals](https://soylentnews.org/article.pl?sid=26/07/20/0413210&amp;from=rss)
* [2026-07-20, 22:27:00](https://soylentnews.org/article.pl?sid=26/07/20/040231&amp;from=rss) - [A Moment Of Silence, Please, For The Final Release Of Debian On X86-32](https://soylentnews.org/article.pl?sid=26/07/20/040231&amp;from=rss)
* [2026-07-20, 20:34:52](https://news.ycombinator.com/item?id=48984534) - [ascdraw: Editor for ASCII/UTF-8 diagrams (in 144FPS)](https://github.com/exlee/ascdraw)
* [2026-07-20, 18:42:07](https://news.ycombinator.com/item?id=48983076) - [Making ASCII Art in Vim](https://alexyang.dev/vim-ascii-art/)
* [2026-07-20, 17:43:00](https://soylentnews.org/article.pl?sid=26/07/20/0344230&amp;from=rss) - [Clever Hacker Fits 537,000 Domains in a Tiny $5 ESP32 Ad-Blocking Dongle](https://soylentnews.org/article.pl?sid=26/07/20/0344230&amp;from=rss)
* [2026-07-20, 14:00:29](https://news.ycombinator.com/item?id=48979000) - [Frequently Asked Questions on Expertise](https://jtpeterson.substack.com/p/faq-on-expertise)
* [2026-07-20, 12:55:00](https://soylentnews.org/article.pl?sid=26/07/20/0338215&amp;from=rss) - [Great Ape Laughter Reveals a Hidden Origin of Human Speech](https://soylentnews.org/article.pl?sid=26/07/20/0338215&amp;from=rss)
* [2026-07-20, 11:50:01](https://news.ycombinator.com/item?id=48977463) - [Why malloc always does more than I asked for?](https://ssenthilnathan3.github.io/blog/malloc/)
* [2026-07-20, 08:12:00](https://soylentnews.org/article.pl?sid=26/07/20/0325216&amp;from=rss) - [Fake Go DNS Scanner Spread Malware Through Over 200 GitHub Repos](https://soylentnews.org/article.pl?sid=26/07/20/0325216&amp;from=rss)
* [2026-07-20, 03:24:00](https://soylentnews.org/article.pl?sid=26/07/20/0318228&amp;from=rss) - [The Galaxy&apos;s Coldest “Stars” Might Actually be Alien Megastructures](https://soylentnews.org/article.pl?sid=26/07/20/0318228&amp;from=rss)
* [2026-07-19, 21:53:00](https://soylentnews.org/article.pl?sid=26/07/19/0313244&amp;from=rss) - [Welcome to DebConf26!](https://soylentnews.org/article.pl?sid=26/07/19/0313244&amp;from=rss)
* [2026-07-19, 17:08:00](https://soylentnews.org/article.pl?sid=26/07/19/036256&amp;from=rss) - [AI Mania is Eviscerating Global Decision-Making](https://soylentnews.org/article.pl?sid=26/07/19/036256&amp;from=rss)
* [2026-07-19, 12:23:00](https://soylentnews.org/article.pl?sid=26/07/19/034232&amp;from=rss) - [Finland is Preparing to Hide an Entire City Underground](https://soylentnews.org/article.pl?sid=26/07/19/034232&amp;from=rss)
* [2026-07-19, 07:40:00](https://soylentnews.org/article.pl?sid=26/07/17/1611241&amp;from=rss) - [NTP Server That Traveled Back In Time Caused Massive Aussie Mobile Outage](https://soylentnews.org/article.pl?sid=26/07/17/1611241&amp;from=rss)
* [2026-07-19, 02:53:00](https://soylentnews.org/article.pl?sid=26/07/17/1524222&amp;from=rss) - [Experts May Have Drastically Underestimated the Lifespan of EV Batteries](https://soylentnews.org/article.pl?sid=26/07/17/1524222&amp;from=rss)
