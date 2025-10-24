# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Computing

* [Intel Has Cut 35,500 Jobs in Less Than Two Years](https://slashdot.org/story/25/10/24/185247/intel-has-cut-35500-jobs-in-less-than-two-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Browser Promising Privacy Protection Contains Malware-Like Features, Routes Traffic Through China](https://tech.slashdot.org/story/25/10/24/1727228/browser-promising-privacy-protection-contains-malware-like-features-routes-traffic-through-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [RON LSP - Type validation for .ron files (in or out of the ide)](https://github.com/jasonjmcghee/ron-lsp)

* [Asahi Linux Progress Report: Linux 6.17](https://asahilinux.org/2025/10/progress-report-6-17/)

* [Microsoft Outlook is Getting an AI Overhaul Under New Leaders](https://it.slashdot.org/story/25/10/24/1652239/microsoft-outlook-is-getting-an-ai-overhaul-under-new-leaders?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [How to Avoid Fighting Rust Borrow Checker](https://qouteall.fun/qouteall-blog/2025/How%20to%20Avoid%20Fighting%20Rust%20Borrow%20Checker#contagious-borrow-issue)

* [OpenBSD C/C++ Toolchain in the Browser](https://openbsd.llvm.moe/)

* [A sharded DuckDB on 63 nodes runs 1T row aggregation challenge in 5 sec](https://gizmodata.com/blog/gizmoedge-one-trillion-row-challenge)

* [ChunkLLM: A Lightweight Pluggable Framework for Accelerating LLMs Inference](https://arxiv.org/abs/2510.02361)

* [Twake Drive – An open-source alternative to Google Drive](https://github.com/linagora/twake-drive)

* [Debian Technical Committee overrides systemd change](https://lwn.net/Articles/1041316)

* [Mesh2Motion – Open-source web application to animate 3D models](https://mesh2motion.org/)

## Artificial Intelligence and Research

* [Leading OpenAI Researcher Announced a GPT-5 Math Breakthrough That Never Happened](https://soylentnews.org/article.pl?sid=25/10/23/0958229&amp;from=rss)

* [Attention is all you need' coauthor says he's 'sick' of transformers](https://venturebeat.com/ai/sakana-ais-cto-says-hes-absolutely-sick-of-transformers-the-tech-that-powers)

* [Fedora Approves AI-Assisted Contributions](https://developers.slashdot.org/story/25/10/23/2138252/fedora-approves-ai-assisted-contributions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [WordPress Maker Files Counterclaims Against WP Engine Over Trademark Use](https://yro.slashdot.org/story/25/10/24/1552249/wordpress-maker-files-counterclaims-against-wp-engine-over-trademark-use?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Linux and Open Source

* [Asahi Linux Still Working on Apple M3 Support, M1n1 Bootloader Going Rust](https://www.phoronix.com/news/Asahi-Linux-M3-m1n1-Update)

* [Pixi: Modern package management for Robotics](https://prefix.dev/blog/reproducible-package-management-for-robotics)

* [OpenBSD 7.8 Released](https://soylentnews.org/article.pl?sid=25/10/23/0934206&amp;from=rss)

* [Date bug affects Ubuntu 25.10 automatic updates](https://lwn.net/Articles/1043103)

## Environmental and Scientific Advances

* [India Trials Delhi Cloud Seeding To Clean Air in World's Most Polluted City](https://news.slashdot.org/story/25/10/24/1415248/india-trials-delhi-cloud-seeding-to-clean-air-in-worlds-most-polluted-city?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Interstellar Mission to a Black Hole](https://www.centauri-dreams.org/2025/10/23/interstellar-mission-to-a-black-hole/)

* [New Evidence for Oceans of Water Deep in the Earth](https://soylentnews.org/article.pl?sid=25/10/23/0943213&amp;from=rss)

## Economic and Social Impacts

* [Counter-Strike's Player Economy Is In a Multi-Billion Dollar Freefall](https://games.slashdot.org/story/25/10/24/1352255/counter-strikes-player-economy-is-in-a-multi-billion-dollar-freefall?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Intel's Tick-Tock Isn't Coming Back](https://slashdot.org/story/25/10/24/1527235/intels-tick-tock-isn-t-coming-back?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Miscellaneous News Highlights

* [Programmer Gets Doom Running On a Space Satellite](https://games.slashdot.org/story/25/10/23/2128244/programmer-gets-doom-running-on-a-space-satellite?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Why Did NASA’s Chief Just Shake Up the Agency’s Plans to Land on the Moon?](https://soylentnews.org/article.pl?sid=25/10/23/0020211&amp;from=rss)

* [Are We Living in a Golden Age of Stupidity?](https://soylentnews.org/article.pl?sid=25/10/20/2129245&amp;from=rss)

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

* [2025-10-24, 18:40:00](https://slashdot.org/story/25/10/24/185247/intel-has-cut-35500-jobs-in-less-than-two-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel Has Cut 35,500 Jobs in Less Than Two Years](https://slashdot.org/story/25/10/24/185247/intel-has-cut-35500-jobs-in-less-than-two-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-24, 18:31:26](https://lobste.rs/s/ynil95/reminiscing_about_turbo_pascal) - [Reminiscing about Turbo Pascal](https://ilearnt.com/blog/turbopascalvideo/)
* [2025-10-24, 18:00:00](https://news.slashdot.org/story/25/10/24/1753249/wikipedia-drama-goes-mainstream?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wikipedia Drama Goes Mainstream](https://news.slashdot.org/story/25/10/24/1753249/wikipedia-drama-goes-mainstream?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-24, 17:46:00](https://soylentnews.org/article.pl?sid=25/10/23/0958229&amp;from=rss) - [Leading OpenAI Researcher Announced a GPT-5 Math Breakthrough That Never Happened](https://soylentnews.org/article.pl?sid=25/10/23/0958229&amp;from=rss)
* [2025-10-24, 17:30:00](https://tech.slashdot.org/story/25/10/24/1727228/browser-promising-privacy-protection-contains-malware-like-features-routes-traffic-through-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Browser Promising Privacy Protection Contains Malware-Like Features, Routes Traffic Through China](https://tech.slashdot.org/story/25/10/24/1727228/browser-promising-privacy-protection-contains-malware-like-features-routes-traffic-through-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-24, 16:58:20](https://lobste.rs/s/bcalw3/ron_lsp_type_validation_for_ron_files_out) - [RON LSP - Type validation for .ron files (in or out of the ide)](https://github.com/jasonjmcghee/ron-lsp)
* [2025-10-24, 16:54:48](https://lobste.rs/s/r1tvik/asahi_linux_progress_report_linux_6_17) - [Asahi Linux Progress Report: Linux 6.17](https://asahilinux.org/2025/10/progress-report-6-17/)
* [2025-10-24, 16:52:00](https://it.slashdot.org/story/25/10/24/1652239/microsoft-outlook-is-getting-an-ai-overhaul-under-new-leaders?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Outlook is Getting an AI Overhaul Under New Leaders](https://it.slashdot.org/story/25/10/24/1652239/microsoft-outlook-is-getting-an-ai-overhaul-under-new-leaders?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-24, 16:38:33](https://lobste.rs/s/cnhjj2/how_avoid_fighting_rust_borrow_checker) - [How to Avoid Fighting Rust Borrow Checker](https://qouteall.fun/qouteall-blog/2025/How%20to%20Avoid%20Fighting%20Rust%20Borrow%20Checker#contagious-borrow-issue)
* [2025-10-24, 16:04:00](https://yro.slashdot.org/story/25/10/24/1552249/wordpress-maker-files-counterclaims-against-wp-engine-over-trademark-use?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [WordPress Maker Files Counterclaims Against WP Engine Over Trademark Use](https://yro.slashdot.org/story/25/10/24/1552249/wordpress-maker-files-counterclaims-against-wp-engine-over-trademark-use?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-24, 16:01:23](https://news.ycombinator.com/item?id=45695956) - [The Mainframe Six (2022)](https://arcanesciences.com/os2200/app1.html)
* [2025-10-24, 15:51:29](https://lobste.rs/s/4exekd/learning_by_starting_at_end_writing_proof) - [Learning by starting at the end: Writing a Proof in Lean](https://interjectedfuture.com/the-best-way-to-learn-might-be-starting-at-the-end/)
* [2025-10-24, 15:47:19](https://lobste.rs/s/bl8pns/code_like_surgeon) - [Code like a surgeon](https://www.geoffreylitt.com/2025/10/24/code-like-a-surgeon)
* [2025-10-24, 15:35:42](https://lobste.rs/s/tqsapi/pixi_modern_package_management_for) - [Pixi: Modern package management for Robotics](https://prefix.dev/blog/reproducible-package-management-for-robotics)
* [2025-10-24, 15:27:00](https://slashdot.org/story/25/10/24/1527235/intels-tick-tock-isnt-coming-back?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel&apos;s Tick-Tock Isn&apos;t Coming Back](https://slashdot.org/story/25/10/24/1527235/intels-tick-tock-isnt-coming-back?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-24, 14:40:00](https://news.slashdot.org/story/25/10/24/1415248/india-trials-delhi-cloud-seeding-to-clean-air-in-worlds-most-polluted-city?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [India Trials Delhi Cloud Seeding To Clean Air in World&apos;s Most Polluted City](https://news.slashdot.org/story/25/10/24/1415248/india-trials-delhi-cloud-seeding-to-clean-air-in-worlds-most-polluted-city?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-24, 14:03:22](https://news.ycombinator.com/item?id=45694767) - [Asahi Linux Still Working on Apple M3 Support, M1n1 Bootloader Going Rust](https://www.phoronix.com/news/Asahi-Linux-M3-m1n1-Update)
* [2025-10-24, 14:00:00](https://games.slashdot.org/story/25/10/24/1352255/counter-strikes-player-economy-is-in-a-multi-billion-dollar-freefall?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Counter-Strike&apos;s Player Economy Is In a Multi-Billion Dollar Freefall](https://games.slashdot.org/story/25/10/24/1352255/counter-strikes-player-economy-is-in-a-multi-billion-dollar-freefall?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-24, 13:36:14](https://lobste.rs/s/mirlh5/nixifying_kubernetes_with_nix_csi) - [Nixifying Kubernetes with nix-csi, easykubenix and dinix](https://discourse.nixos.org/t/nixifying-kubernetes-with-nix-csi-easykubenix-and-dinix/70899)
* [2025-10-24, 13:34:37](https://lobste.rs/s/magetk/typst_as_language) - [Typst as a Language](https://justinpombrio.net/2024/11/30/typst.html)
* [2025-10-24, 13:32:00](https://lobste.rs/s/pbsq49/building_like_it_s_1984_scrollbars_web) - [Building like it&apos;s 1984: Scrollbars in web applications](https://web.archive.org/web/20250110081649/https://height.app/blog/scrollbars-in-web-applications)
* [2025-10-24, 13:03:00](https://soylentnews.org/article.pl?sid=25/10/23/0954231&amp;from=rss) - [AWS Outage Exposes Achilles Heel: Central Control Plane](https://soylentnews.org/article.pl?sid=25/10/23/0954231&amp;from=rss)
* [2025-10-24, 13:00:00](https://developers.slashdot.org/story/25/10/23/2138252/fedora-approves-ai-assisted-contributions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fedora Approves AI-Assisted Contributions](https://developers.slashdot.org/story/25/10/23/2138252/fedora-approves-ai-assisted-contributions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-24, 12:54:47](https://news.ycombinator.com/item?id=45694122) - [A sharded DuckDB on 63 nodes runs 1T row aggregation challenge in 5 sec](https://gizmodata.com/blog/gizmoedge-one-trillion-row-challenge)
* [2025-10-24, 12:51:32](https://lobste.rs/s/ea6dik/typst_0_14_now_accessible) - [Typst 0.14: Now accessible](https://typst.app/blog/2025/typst-0.14/)
* [2025-10-24, 12:33:10](https://news.ycombinator.com/item?id=45693978) - [Typst 0.14](https://typst.app/blog/2025/typst-0.14/)
* [2025-10-24, 12:15:15](https://lobste.rs/s/upo1ev/openbsd_c_c_toolchain_browser) - [OpenBSD C/C++ Toolchain in the Browser](https://openbsd.llvm.moe/)
* [2025-10-24, 12:01:08](https://news.ycombinator.com/item?id=45693743) - [Padlet (YC W13) Is Hiring in San Francisco and Singapore](https://padlet.jobs)
* [2025-10-24, 11:42:09](https://lobste.rs/s/itk2l2/carbon_values_variables_pointers) - [Carbon values, variables, and pointers](https://github.com/carbon-language/carbon-lang/blob/trunk/docs/design/values.md)
* [2025-10-24, 11:41:26](https://news.ycombinator.com/item?id=45693591) - [ChunkLLM: A Lightweight Pluggable Framework for Accelerating LLMs Inference](https://arxiv.org/abs/2510.02361)
* [2025-10-24, 11:27:17](https://lobste.rs/s/bd3leb/date_bug_affects_ubuntu_25_10_automatic) - [Date bug affects Ubuntu 25.10 automatic updates](https://lwn.net/Articles/1043103/)
* [2025-10-24, 11:01:23](https://news.ycombinator.com/item?id=45693325) - [Mesh2Motion – Open-source web application to animate 3D models](https://mesh2motion.org/)
* [2025-10-24, 10:50:47](https://lobste.rs/s/fmazqz/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/fmazqz/what_are_you_doing_this_weekend)
* [2025-10-24, 10:16:25](https://news.ycombinator.com/item?id=45692984) - [Twake Drive – An open-source alternative to Google Drive](https://github.com/linagora/twake-drive)
* [2025-10-24, 10:07:34](https://news.ycombinator.com/item?id=45692915) - [Debian Technical Committee overrides systemd change](https://lwn.net/Articles/1041316/)
* [2025-10-24, 10:00:00](https://science.slashdot.org/story/25/10/23/228232/europes-big-three-aerospace-manufacturers-combine-their-space-divisions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Europe&apos;s Big Three Aerospace Manufacturers Combine Their Space Divisions](https://science.slashdot.org/story/25/10/23/228232/europes-big-three-aerospace-manufacturers-combine-their-space-divisions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-24, 09:55:19](https://lobste.rs/s/rpgncc/html_is_tree) - [html-is-a-tree](https://glfmn.io/posts/html-is-a-tree/)
* [2025-10-24, 09:31:32](https://lobste.rs/s/i33fks/modern_perfect_hashing) - [Modern perfect hashing](https://blog.sesse.net/blog/tech/2025-10-23-21-23_modern_perfect_hashing.html)
* [2025-10-24, 09:17:24](https://news.ycombinator.com/item?id=45692585) - [Interstellar Mission to a Black Hole](https://www.centauri-dreams.org/2025/10/23/interstellar-mission-to-a-black-hole/)
* [2025-10-24, 08:15:00](https://soylentnews.org/article.pl?sid=25/10/23/0943213&amp;from=rss) - [New Evidence for Oceans of Water Deep in the Earth](https://soylentnews.org/article.pl?sid=25/10/23/0943213&amp;from=rss)
* [2025-10-24, 07:00:00](https://games.slashdot.org/story/25/10/23/2128244/programmer-gets-doom-running-on-a-space-satellite?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Programmer Gets Doom Running On a Space Satellite](https://games.slashdot.org/story/25/10/23/2128244/programmer-gets-doom-running-on-a-space-satellite?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-24, 05:32:04](https://news.ycombinator.com/item?id=45691127) - [Alaska Airlines&apos; statement on IT outage](https://news.alaskaair.com/on-the-record/alaska-statement-on-it-outage/)
* [2025-10-24, 04:40:31](https://news.ycombinator.com/item?id=45690840) - [&apos;Attention is all you need&apos; coauthor says he&apos;s &apos;sick&apos; of transformers](https://venturebeat.com/ai/sakana-ais-cto-says-hes-absolutely-sick-of-transformers-the-tech-that-powers)
* [2025-10-24, 04:24:25](https://lobste.rs/s/raqwxt/llms_can_get_brain_rot_after_consuming_too) - [LLMs Can Get Brain Rot (after consuming too much social media content)](https://llm-brain-rot.github.io/)
* [2025-10-24, 03:32:00](https://soylentnews.org/article.pl?sid=25/10/23/0934206&amp;from=rss) - [OpenBSD 7.8 Released](https://soylentnews.org/article.pl?sid=25/10/23/0934206&amp;from=rss)
* [2025-10-24, 03:30:00](https://news.slashdot.org/story/25/10/23/2116228/dinosaurs-were-thriving-until-asteroid-struck-research-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dinosaurs Were Thriving Until Asteroid Struck, Research Suggests](https://news.slashdot.org/story/25/10/23/2116228/dinosaurs-were-thriving-until-asteroid-struck-research-suggests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-24, 02:54:29](https://news.ycombinator.com/item?id=45690251) - [Roc Camera](https://roc.camera/)
* [2025-10-24, 01:25:00](https://tech.slashdot.org/story/25/10/23/212230/analog-bags-are-in-doomscrolling-is-out?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Analog Bags&apos; Are In. Doomscrolling Is Out.](https://tech.slashdot.org/story/25/10/23/212230/analog-bags-are-in-doomscrolling-is-out?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-24, 00:45:00](https://tech.slashdot.org/story/25/10/23/218215/openai-buys-ai-startup-that-built-interface-for-apple-computers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Buys AI Startup That Built Interface For Apple Computers](https://tech.slashdot.org/story/25/10/23/218215/openai-buys-ai-startup-that-built-interface-for-apple-computers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-24, 00:24:11](https://news.ycombinator.com/item?id=45689241) - [Counter-Strike&apos;s player economy is in a multi-billion dollar freefall](https://www.polygon.com/counter-strike-cs-player-economy-multi-billion-dollar-freefall/)
* [2025-10-24, 00:02:00](https://tech.slashdot.org/story/25/10/23/2054219/anthropics-google-cloud-deal-includes-1-million-tpus-1-gw-of-capacity-in-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic&apos;s Google Cloud Deal Includes 1 Million TPUs, 1 GW of Capacity In 2026](https://tech.slashdot.org/story/25/10/23/2054219/anthropics-google-cloud-deal-includes-1-million-tpus-1-gw-of-capacity-in-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-23, 22:45:00](https://soylentnews.org/article.pl?sid=25/10/23/0020211&amp;from=rss) - [Why Did NASA’s Chief Just Shake Up the Agency’s Plans to Land on the Moon?](https://soylentnews.org/article.pl?sid=25/10/23/0020211&amp;from=rss)
* [2025-10-23, 21:28:02](https://news.ycombinator.com/item?id=45687458) - [/dev/null is an ACID compliant database](https://jyu.dev/blog/why-dev-null-is-an-acid-compliant-database/)
* [2025-10-23, 21:26:57](https://news.ycombinator.com/item?id=45687441) - [When is it better to think without words?](https://www.henrikkarlsson.xyz/p/wordless-thought)
* [2025-10-23, 20:30:54](https://lobste.rs/s/xsrifu/zram_performance_analysis) - [Zram Performance Analysis](https://notes.xeome.dev/notes/Zram)
* [2025-10-23, 18:00:00](https://soylentnews.org/article.pl?sid=25/10/23/0012248&amp;from=rss) - [Apple Ups the Reward for Finding Major Exploits to $2 Million](https://soylentnews.org/article.pl?sid=25/10/23/0012248&amp;from=rss)
* [2025-10-23, 14:37:17](https://lobste.rs/s/snbmmt/luau_s_performance) - [Luau’s Performance](https://luau.org/performance)
* [2025-10-23, 14:01:07](https://lobste.rs/s/jt4wzq/tuckr_stow_alternative_with_symlink) - [Tuckr - Stow alternative with symlink checking](https://github.com/RaphGL/Tuckr)
* [2025-10-23, 13:22:33](https://lobste.rs/s/hnwmii/4_unconventional_ways_cast_typescript) - [4 Unconventional Ways to Cast in Typescript](https://wolfgirl.dev/blog/2025-10-22-4-unconventional-ways-to-cast-in-typescript/)
* [2025-10-23, 13:19:00](https://soylentnews.org/article.pl?sid=25/10/22/126221&amp;from=rss) - [Europe&apos;s Plan to Ditch US Tech Giants is Built on Open Source - and It&apos;s Gaining Steam](https://soylentnews.org/article.pl?sid=25/10/22/126221&amp;from=rss)
* [2025-10-23, 11:02:26](https://lobste.rs/s/zlvvd2/changes_advent_code_starting_this) - [Changes to Advent of Code starting this December](https://www.reddit.com/r/adventofcode/comments/1ocwh04/changes_to_advent_of_code_starting_this_december/)
* [2025-10-23, 08:36:00](https://soylentnews.org/article.pl?sid=25/10/22/0317230&amp;from=rss) - [OpenAI Launches Atlas Browser](https://soylentnews.org/article.pl?sid=25/10/22/0317230&amp;from=rss)
* [2025-10-23, 07:58:56](https://lobste.rs/s/d8rtdp/programming_with_less_than_nothing) - [Programming With Less Than Nothing](https://joshmoody.org/blog/programming-with-less-than-nothing/)
* [2025-10-23, 03:54:00](https://soylentnews.org/article.pl?sid=25/10/22/0311232&amp;from=rss) - [Apple Pioneer Bill Atkinson Was a Secret Evangelist of the ‘God Molecule’](https://soylentnews.org/article.pl?sid=25/10/22/0311232&amp;from=rss)
* [2025-10-23, 03:51:40](https://news.ycombinator.com/item?id=45678001) - [Clojure Zippers (2021)](https://grishaev.me/en/clojure-zippers/)
* [2025-10-23, 00:26:24](https://news.ycombinator.com/item?id=45676841) - [A “knot dominated era” may have existed in the early universe: study](https://phys.org/news/2025-10-key-universe-1800s-idea-science.html)
* [2025-10-22, 23:09:00](https://soylentnews.org/article.pl?sid=25/10/22/032220&amp;from=rss) - [Hackers Exploit Cisco SNMP Flaw to Deploy Rootkit on Switches](https://soylentnews.org/article.pl?sid=25/10/22/032220&amp;from=rss)
* [2025-10-22, 19:29:59](https://news.ycombinator.com/item?id=45674002) - [Public Montessori programs strengthen learning outcomes at lower costs: study](https://phys.org/news/2025-10-national-montessori-early-outcomes-sharply.html)
* [2025-10-22, 18:27:00](https://soylentnews.org/article.pl?sid=25/10/21/1918224&amp;from=rss) - [Eavesdropping on Internal Networks via Unencrypted Satellites](https://soylentnews.org/article.pl?sid=25/10/21/1918224&amp;from=rss)
* [2025-10-22, 17:22:21](https://lobste.rs/s/ghdv6w/i_see_future_jj) - [I see a future in jj](https://steveklabnik.com/writing/i-see-a-future-in-jj/)
* [2025-10-22, 13:42:00](https://soylentnews.org/article.pl?sid=25/10/21/198229&amp;from=rss) - [He Co-founded Wikipedia, Now He Says the Site Needs a Radical Change](https://soylentnews.org/article.pl?sid=25/10/21/198229&amp;from=rss)
* [2025-10-22, 08:58:00](https://soylentnews.org/article.pl?sid=25/10/21/1229253&amp;from=rss) - [A New Attack Lets Hackers Steal 2-Factor Authentication Codes From Android Phones](https://soylentnews.org/article.pl?sid=25/10/21/1229253&amp;from=rss)
* [2025-10-22, 04:11:00](https://soylentnews.org/article.pl?sid=25/10/21/1223202&amp;from=rss) - [Bitcoin Mining is Making People Sick](https://soylentnews.org/article.pl?sid=25/10/21/1223202&amp;from=rss)
* [2025-10-21, 23:26:00](https://soylentnews.org/article.pl?sid=25/10/21/1218221&amp;from=rss) - [Amazon Error Creates Massive Internet Outage](https://soylentnews.org/article.pl?sid=25/10/21/1218221&amp;from=rss)
* [2025-10-21, 20:39:52](https://news.ycombinator.com/item?id=45661399) - [Mosquitoes discovered in Iceland for the first time](https://www.cnn.com/2025/10/21/climate/iceland-mosquito-discovery)
* [2025-10-21, 19:47:12](https://news.ycombinator.com/item?id=45660753) - [Why can&apos;t transformers learn multiplication?](https://arxiv.org/abs/2510.00184)
* [2025-10-21, 18:41:00](https://soylentnews.org/article.pl?sid=25/10/20/2129245&amp;from=rss) - [Are We Living in a Golden Age of Stupidity?](https://soylentnews.org/article.pl?sid=25/10/20/2129245&amp;from=rss)
* [2025-10-21, 16:09:43](https://news.ycombinator.com/item?id=45657531) - [LightlyStudio – an open-source multimodal data curation and labeling tool](https://github.com/lightly-ai/lightly-studio)
* [2025-10-21, 13:57:00](https://soylentnews.org/article.pl?sid=25/10/20/1245230&amp;from=rss) - [Drone Tech Company DroneShield to Build 13m Facility in Australia](https://soylentnews.org/article.pl?sid=25/10/20/1245230&amp;from=rss)
* [2025-10-21, 13:17:59](https://news.ycombinator.com/item?id=45655393) - [SierraDB: A distributed event store built in Rust](https://tqwewe.com/blog/building-sierradb/)
* [2025-10-21, 09:15:00](https://soylentnews.org/article.pl?sid=25/10/20/1236216&amp;from=rss) - [Lifespan of AI Chips: The $300 Billion Question](https://soylentnews.org/article.pl?sid=25/10/20/1236216&amp;from=rss)
* [2025-10-21, 06:15:18](https://news.ycombinator.com/item?id=45652968) - [Linux disk I/O diagram (2024)](https://zenodo.org/records/15234151)
* [2025-10-21, 04:27:00](https://soylentnews.org/article.pl?sid=25/10/20/1229240&amp;from=rss) - [GNOME Has a New Security Threat Scanner Powered by VirusTotal](https://soylentnews.org/article.pl?sid=25/10/20/1229240&amp;from=rss)
* [2025-10-20, 23:40:00](https://soylentnews.org/article.pl?sid=25/10/20/0111228&amp;from=rss) - [Russia, AI and the Future of Disinformation Warfare](https://soylentnews.org/article.pl?sid=25/10/20/0111228&amp;from=rss)
* [2025-10-20, 18:58:00](https://soylentnews.org/article.pl?sid=25/10/18/1822203&amp;from=rss) - [Oops! It&apos;s a Kernel Stack Use-After-Free: Exploiting NVIDIA&apos;s GPU Linux Drivers](https://soylentnews.org/article.pl?sid=25/10/18/1822203&amp;from=rss)
* [2025-10-20, 17:39:00](https://soylentnews.org/meta/article.pl?sid=25/10/20/098210&amp;from=rss) - [Soylent Update](https://soylentnews.org/meta/article.pl?sid=25/10/20/098210&amp;from=rss)
* [2025-10-20, 14:08:00](https://soylentnews.org/article.pl?sid=25/10/18/180239&amp;from=rss) - [Quantum Crystals Offer a Blueprint for the Future of Computing and Chemistry](https://soylentnews.org/article.pl?sid=25/10/18/180239&amp;from=rss)
* [2025-10-20, 09:26:00](https://soylentnews.org/article.pl?sid=25/10/18/1749235&amp;from=rss) - [JPMorgan Requires Staff to Hand Over Biometric Data to Access New Headquarters](https://soylentnews.org/article.pl?sid=25/10/18/1749235&amp;from=rss)
* [2025-10-20, 04:41:00](https://soylentnews.org/article.pl?sid=25/10/16/1551203&amp;from=rss) - [Tech Billionaires Seem to be Doom Prepping. Should We All be Worried?](https://soylentnews.org/article.pl?sid=25/10/16/1551203&amp;from=rss)
