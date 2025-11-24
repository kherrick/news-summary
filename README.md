# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Innovations

* [Debian Libre Live Images Released for Software Freedom Lovers](https://soylentnews.org/article.pl?sid=25/11/23/0241222&amp;from=rss) - A new release of Debian Libre live images emphasizes open-source software for freedom enthusiasts.

* [RuBee](https://computer.rip/2025-11-22-RuBee.html) - Dive into RuBee, an exciting technology with applications in secure, low-frequency identification.

* [An Economy of AI Agents](https://arxiv.org/abs/2509.01063) - A publication exploring a new approach to using AI agents in economic modeling.

* [Mozilla Announces 'TABS API' For Developers Building AI Agents](https://tech.slashdot.org/story/25/11/23/206245/mozilla-announces-tabs-api-for-developers-building-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Mozilla introduces a new developer API to integrate AI agents seamlessly with tabs.

* [Amazon's AI-Powered IDE Kiro Helps Vibe Coders with 'Spec Mode'](https://developers.slashdot.org/story/25/11/23/0450211/amazons-ai-powered-ide-kiro-helps-vibe-coders-with-spec-mode?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Amazon's new AI-powered developer IDE focuses on efficiency with "spec mode".

* [Calculus for Mathematicians, Computer Scientists, and Physicists [pdf]](https://mathcs.holycross.edu/~ahwang/print/calc.pdf) - A comprehensive guide that bridges calculus for varied disciplines.

## Science and Environmental Insights

* [Was the Moon-Forming Protoplanet 'Theia' a Neighbor of Earth?](https://science.slashdot.org/story/25/11/23/2327252/was-the-moon-forming-protoplanet-theia-a-neighbor-of-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Analysis suggesting Theia may have been Earth's planetary neighbor.

* [How Deep is Challenger Deep?](https://storymaps.arcgis.com/stories/0d389600f3464e3185a84c199f04e859) - A deep dive into the world's most profound underwater locations.

* [Mercury Pollution in Marine Mammals is Increasing, New Study Finds](https://soylentnews.org/article.pl?sid=25/11/21/1957207&amp;from=rss) - A recent study shows rising mercury levels in marine wildlife.

* [Floating Solar Panels Show Promise, but Environmental Impacts Vary by Location](https://soylentnews.org/article.pl?sid=25/11/18/1210237&amp;from=rss) - Research reveals the varying effects of floating solar technology based on locality.

## Societal Developments and Discussions

* [Napster Said It Raised $3 Billion From a Mystery Investor.  But Now the 'Investor' and 'Money' Are Gone](https://entertainment.slashdot.org/story/25/11/24/022212/napster-said-it-raised-3-billion-from-a-mystery-investor-but-now-the-investor-and-money-are-gone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A mysterious case involving Napster and an enormous vanished investment.

* [US Gives Local Police a Face-Scanning App Similar to One Used by ICE Agents](https://soylentnews.org/article.pl?sid=25/11/23/0237208&amp;from=rss) - Controversy surrounds the rollout of facial recognition tech to police.

* [Microsoft Warns Its Windows AI Feature Brings Data Theft and Malware Risks, and 'Occasionally May Hallucinate'](https://tech.slashdot.org/story/25/11/23/060221/microsoft-warns-its-windows-ai-feature-brings-data-theft-and-malware-risks-and-occasionally-may-hallucinate?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Concerns rise over AI's susceptibility to security threats.

* [Could High-Speed Trains Shorten US Travel Times While Reducing Emissions?](https://news.slashdot.org/story/25/11/22/201221/could-high-speed-trains-shorten-us-travel-times-while-reducing-emissions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The potential role of high-speed rail in reducing travel time and emissions.

## Cryptographic and Cybersecurity Highlights

* [Passing the Torch – My Last Root DNSSEC KSK Ceremony as Crypto Officer 4](https://technotes.seastrom.com/2025/11/23/passing-the-torch.html) - Reflections from the outgoing Crypto Officer on DNSSEC.

* [Cryptologist DJB Criticizes Push to Finalize Non-Hybrid Security for Post-Quantum Cryptography](https://it.slashdot.org/story/25/11/23/226258/cryptologist-djb-criticizes-push-to-finalize-non-hybrid-security-for-post-quantum-cryptography?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Critique on post-quantum cryptography hybrid-standardization.

* [Native Secure Enclave backed SSH keys on macOS](https://gist.github.com/arianvp/5f59f1783e3eaf1a2d4cd8e952bb4acf) - How macOS leverages the secure enclave for SSH keys.

* [Google Chrome Bug Exploited as an 0-Day - Patch Now or Risk Full System Compromise](https://soylentnews.org/article.pl?sid=25/11/21/1348200&amp;from=rss) - A critical 0-day exploit affecting Chrome users.

## Open Source and Development Tools

* [We stopped roadmap work for a week and fixed 189 bugs](https://lalitm.com/fixits-are-good-for-the-soul/) - A tech team's accomplishments in addressing substantial bugs.

* [libfive: a software library and set of tools for solid modeling](https://libfive.com/) - A robust solid modeling toolkit for developers.

* [µcad: New open source programming language that can generate 2D sketches and 3D objects](https://microcad.xyz/) - Introduction to µcad, a flexible design language for 2D/3D creators.

* [Show HN: I wrote a minimal memory allocator in C](https://github.com/t9nzin/memory) - A coder's foray into creating a rudimentary but effective memory allocator.

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

* [2025-11-24, 04:09:00](https://soylentnews.org/article.pl?sid=25/11/23/0241222&amp;from=rss) - [Debian Libre Live Images Released for Software Freedom Lovers](https://soylentnews.org/article.pl?sid=25/11/23/0241222&amp;from=rss)
* [2025-11-24, 03:08:10](https://news.ycombinator.com/item?id=46029932) - [RuBee](https://computer.rip/2025-11-22-RuBee.html)
* [2025-11-24, 02:36:54](https://news.ycombinator.com/item?id=46029772) - [We stopped roadmap work for a week and fixed 189 bugs](https://lalitm.com/fixits-are-good-for-the-soul/)
* [2025-11-24, 02:35:17](https://news.ycombinator.com/item?id=46029765) - [B-Trees: Why Every Database Uses Them](https://mehmetgoekce.substack.com/p/b-trees-why-every-database-uses-them)
* [2025-11-24, 02:35:00](https://entertainment.slashdot.org/story/25/11/24/022212/napster-said-it-raised-3-billion-from-a-mystery-investor-but-now-the-investor-and-money-are-gone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Napster Said It Raised $3 Billion From a Mystery Investor.  But Now the &apos;Investor&apos; and &apos;Money&apos; Are Gone](https://entertainment.slashdot.org/story/25/11/24/022212/napster-said-it-raised-3-billion-from-a-mystery-investor-but-now-the-investor-and-money-are-gone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-24, 02:25:39](https://news.ycombinator.com/item?id=46029699) - [Ask HN: Hearing aid wearers, what&apos;s hot?](https://news.ycombinator.com/item?id=46029699)
* [2025-11-24, 02:16:42](https://news.ycombinator.com/item?id=46029649) - [Passing the Torch – My Last Root DNSSEC KSK Ceremony as Crypto Officer 4](https://technotes.seastrom.com/2025/11/23/passing-the-torch.html)
* [2025-11-24, 02:05:01](https://news.ycombinator.com/item?id=46029561) - [My Life Is a Lie: How a Broken Benchmark Broke America](https://www.yesigiveafig.com/p/part-1-my-life-is-a-lie)
* [2025-11-24, 01:57:44](https://lobste.rs/s/gw5yp3/open_source_photo_editor_digital) - [An open-source photo editor &amp; digital compositor for the web](https://mint.photo/)
* [2025-11-24, 01:30:51](https://news.ycombinator.com/item?id=46029312) - [A ncurses-based command line torrent client for high performance](https://github.com/rakshasa/rtorrent)
* [2025-11-24, 00:30:00](https://tech.slashdot.org/story/25/11/24/0016243/new-research-finds-americas-top-social-media-sites-youtube-84-facebook-71-instagram-50?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Research Finds America&apos;s Top Social Media Sites: YouTube (84%) Facebook (71%), Instagram (50%)](https://tech.slashdot.org/story/25/11/24/0016243/new-research-finds-americas-top-social-media-sites-youtube-84-facebook-71-instagram-50?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-23, 23:30:00](https://science.slashdot.org/story/25/11/23/2327252/was-the-moon-forming-protoplanet-theia-a-neighbor-of-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Was the Moon-Forming Protoplanet &apos;Theia&apos; a Neighbor of Earth?](https://science.slashdot.org/story/25/11/23/2327252/was-the-moon-forming-protoplanet-theia-a-neighbor-of-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-23, 23:26:00](https://soylentnews.org/article.pl?sid=25/11/23/0237208&amp;from=rss) - [US Gives Local Police a Face-Scanning App Similar to One Used by ICE Agents](https://soylentnews.org/article.pl?sid=25/11/23/0237208&amp;from=rss)
* [2025-11-23, 22:46:29](https://lobste.rs/s/ro8wgi/libfive_software_library_set_tools_for) - [libfive: a software library and set of tools for solid modeling](https://libfive.com/)
* [2025-11-23, 22:39:14](https://lobste.rs/s/ldu1tt/negentropy_set_reconciliation_protocol) - [the negentropy set-reconciliation protocol](https://github.com/hoytech/negentropy)
* [2025-11-23, 22:36:07](https://news.ycombinator.com/item?id=46028046) - [Liva AI (YC S25) Is Hiring](https://www.ycombinator.com/companies/liva-ai/jobs/fYP8QP8-growth-intern)
* [2025-11-23, 22:33:34](https://news.ycombinator.com/item?id=46028033) - [Sunsetting Supermaven](https://supermaven.com/blog/sunsetting-supermaven)
* [2025-11-23, 22:25:36](https://news.ycombinator.com/item?id=46027962) - [Show HN: I wrote a minimal memory allocator in C](https://github.com/t9nzin/memory)
* [2025-11-23, 22:24:23](https://news.ycombinator.com/item?id=46027947) - [A desktop app for isolated, parallel agentic development](https://github.com/coder/mux)
* [2025-11-23, 22:09:00](https://it.slashdot.org/story/25/11/23/226258/cryptologist-djb-criticizes-push-to-finalize-non-hybrid-security-for-post-quantum-cryptography?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cryptologist DJB Criticizes Push to Finalize Non-Hybrid Security for Post-Quantum Cryptography](https://it.slashdot.org/story/25/11/23/226258/cryptologist-djb-criticizes-push-to-finalize-non-hybrid-security-for-post-quantum-cryptography?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-23, 22:06:44](https://news.ycombinator.com/item?id=46027833) - [Iowa City made its buses free. Traffic cleared, and so did the air](https://www.nytimes.com/2025/11/18/climate/iowa-city-free-buses.html)
* [2025-11-23, 21:54:32](https://news.ycombinator.com/item?id=46027722) - [Particle Life – Sandbox Science](https://sandbox-science.com/particle-life)
* [2025-11-23, 21:35:23](https://lobste.rs/s/ymlwox/caching_is_better_than_mocking) - [Caching is better than mocking](https://federicopereiro.com/caching-ftw/)
* [2025-11-23, 21:09:00](https://tech.slashdot.org/story/25/11/23/2026246/google-revisits-jpeg-xl-in-chromium-after-earlier-removal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Revisits JPEG XL in Chromium After Earlier Removal](https://tech.slashdot.org/story/25/11/23/2026246/google-revisits-jpeg-xl-in-chromium-after-earlier-removal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-23, 20:51:22](https://news.ycombinator.com/item?id=46027216) - [µcad: New open source programming language that can generate 2D sketches and 3D](https://microcad.xyz/)
* [2025-11-23, 20:49:16](https://lobste.rs/s/aqefyy/cad_new_open_source_programming_language) - [µcad: New open source programming language that can generate 2D sketches and 3D objects](https://microcad.xyz)
* [2025-11-23, 20:46:07](https://lobste.rs/s/xxq1kw/ntoh_hton_is_bad_api) - [ntoh*/hton* is a bad API](https://purplesyringa.moe/blog/ntoh-hton-is-a-bad-api/)
* [2025-11-23, 20:26:22](https://lobste.rs/s/a8fm0p/why_zig_qt_feels_like_doing_impossible) - [Why Zig + Qt Feels Like Doing the Impossible Right](https://dayvster.com/blog/why-zig-+-qt-feels-like-doing-the-impossible-right/)
* [2025-11-23, 20:13:13](https://lobste.rs/s/jbwovn/nonpareil_high_fidelity_hp_calculator) - [Nonpareil:  High-Fidelity HP Calculator Simulator](https://nonpareil.brouhaha.com/)
* [2025-11-23, 20:09:00](https://tech.slashdot.org/story/25/11/23/206245/mozilla-announces-tabs-api-for-developers-building-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mozilla Announces &apos;TABS API&apos; For Developers Building AI Agents](https://tech.slashdot.org/story/25/11/23/206245/mozilla-announces-tabs-api-for-developers-building-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-23, 19:20:58](https://lobste.rs/s/8wztsi/event_sourcing_go_from_zero_production) - [Event Sourcing in Go: From Zero to Production](https://skoredin.pro/blog/golang/event-sourcing-go.html)
* [2025-11-23, 18:52:00](https://hardware.slashdot.org/story/25/11/23/1850236/one-companys-plan-to-sink-nuclear-reactors-deep-underground?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [One Company&apos;s Plan to Sink Nuclear Reactors Deep Underground](https://hardware.slashdot.org/story/25/11/23/1850236/one-companys-plan-to-sink-nuclear-reactors-deep-underground?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-23, 18:36:00](https://soylentnews.org/article.pl?sid=25/11/23/0229254&amp;from=rss) - [U.S. Spy Agency Releases Amelia Earhart Records](https://soylentnews.org/article.pl?sid=25/11/23/0229254&amp;from=rss)
* [2025-11-23, 18:20:27](https://news.ycombinator.com/item?id=46025942) - [Fran Sans – font inspired by San Francisco light rail displays](https://emilysneddon.com/fran-sans-essay)
* [2025-11-23, 17:55:11](https://news.ycombinator.com/item?id=46025721) - [Native Secure Enclave backed SSH keys on macOS](https://gist.github.com/arianvp/5f59f1783e3eaf1a2d4cd8e952bb4acf)
* [2025-11-23, 17:34:00](https://news.slashdot.org/story/25/11/22/201221/could-high-speed-trains-shorten-us-travel-times-while-reducing-emissions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Could High-Speed Trains Shorten US Travel Times While Reducing Emissions?](https://news.slashdot.org/story/25/11/22/201221/could-high-speed-trains-shorten-us-travel-times-while-reducing-emissions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-23, 17:33:36](https://lobste.rs/s/gae4dh/we_stopped_roadmap_work_for_week_fixed_189) - [We stopped roadmap work for a week and fixed 189 bugs](https://lalitm.com/fixits-are-good-for-the-soul/)
* [2025-11-23, 16:34:00](https://developers.slashdot.org/story/25/11/23/0116256/microsoft-and-github-preview-new-tool-that-identifies-prioritizes-and-fixes-vulnerabilities-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft and GitHub Preview New Tool That Identifies, Prioritizes, and Fixes Vulnerabilities With AI](https://developers.slashdot.org/story/25/11/23/0116256/microsoft-and-github-preview-new-tool-that-identifies-prioritizes-and-fixes-vulnerabilities-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-23, 16:31:50](https://news.ycombinator.com/item?id=46024773) - [Calculus for Mathematicians, Computer Scientists, and Physicists [pdf]](https://mathcs.holycross.edu/~ahwang/print/calc.pdf)
* [2025-11-23, 16:12:06](https://news.ycombinator.com/item?id=46024584) - [Mount Proton Drive on Linux using rclone and systemd](https://github.com/dadtronics/protondrive-linux)
* [2025-11-23, 15:34:00](https://hardware.slashdot.org/story/25/11/22/0547231/engineers-are-building-the-hottest-geothermal-power-plant-on-earth---next-to-a-us-volcano?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Engineers are Building the Hottest Geothermal Power Plant on Earth - Next to a US Volcano](https://hardware.slashdot.org/story/25/11/22/0547231/engineers-are-building-the-hottest-geothermal-power-plant-on-earth---next-to-a-us-volcano?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-23, 14:59:38](https://news.ycombinator.com/item?id=46024032) - [Editing Code in Emacs](https://redpenguin101.github.io/html/posts/2025_11_23_emacs_for_code_editing.html)
* [2025-11-23, 14:03:36](https://lobste.rs/s/scikpb/liballocs_meta_level_run_time_services) - [liballocs: Meta-level run-time services for Unix processes... a.k.a. dragging Unix into the 1980s](https://github.com/stephenrkell/liballocs)
* [2025-11-23, 13:52:00](https://soylentnews.org/article.pl?sid=25/11/21/203250&amp;from=rss) - [Maybe That&apos;s Not Liquid Water on Mars After All](https://soylentnews.org/article.pl?sid=25/11/21/203250&amp;from=rss)
* [2025-11-23, 13:35:27](https://news.ycombinator.com/item?id=46023460) - [Racket v9.0](https://blog.racket-lang.org/2025/11/racket-v9-0.html)
* [2025-11-23, 13:32:45](https://lobste.rs/s/1nop48/google_revisits_jpeg_xl_chromium_after) - [Google Revisits JPEG XL in Chromium After Earlier Removal](https://windowsreport.com/google-revisits-jpeg-xl-in-chromium-after-earlier-removal/)
* [2025-11-23, 12:34:00](https://it.slashdot.org/story/25/11/23/0812238/how-the-internet-rewired-work---and-what-that-tells-us-about-ais-likely-impact?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How the Internet Rewired Work - and What That Tells Us About AI&apos;s Likely Impact](https://it.slashdot.org/story/25/11/23/0812238/how-the-internet-rewired-work---and-what-that-tells-us-about-ais-likely-impact?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-23, 12:26:30](https://news.ycombinator.com/item?id=46023013) - [Shaders: How to draw high fidelity graphics with just x and y coordinates](https://www.makingsoftware.com/chapters/shaders)
* [2025-11-23, 12:19:52](https://lobste.rs/s/mzuktr/what_does_agpl_require) - [What does the AGPL require?](https://runxiyu.org/blog/agpl/)
* [2025-11-23, 12:06:25](https://lobste.rs/s/lfujpz/how_deep_is_challenger_deep) - [How Deep is Challenger Deep?](https://storymaps.arcgis.com/stories/0d389600f3464e3185a84c199f04e859)
* [2025-11-23, 11:25:03](https://lobste.rs/s/wtxmgv/what_are_you_reading_plan_read_next) - [What are you reading and plan to read next?](https://lobste.rs/s/wtxmgv/what_are_you_reading_plan_read_next)
* [2025-11-23, 09:38:03](https://lobste.rs/s/drfh9p/parallel_threads_racket_v9_0) - [Parallel Threads in Racket v9.0](https://blog.racket-lang.org/2025/11/parallel-threads.html)
* [2025-11-23, 09:10:58](https://lobste.rs/s/mzpgdh/svalboard_datahand_forever) - [Svalboard - Datahand forever](https://svalboard.com/)
* [2025-11-23, 09:10:00](https://soylentnews.org/article.pl?sid=25/11/21/201212&amp;from=rss) - [Ancient Egyptians Likely Used Opiates Regularly](https://soylentnews.org/article.pl?sid=25/11/21/201212&amp;from=rss)
* [2025-11-23, 08:40:41](https://news.ycombinator.com/item?id=46021825) - [After my dad died, we found the love letters](https://www.jenn.site/after-my-dad-died-we-found-the-love-letters/)
* [2025-11-23, 08:34:00](https://tech.slashdot.org/story/25/11/23/060221/microsoft-warns-its-windows-ai-feature-brings-data-theft-and-malware-risks-and-occasionally-may-hallucinate?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Warns Its Windows AI Feature Brings Data Theft and Malware Risks, and &apos;Occasionally May Hallucinate&apos; ](https://tech.slashdot.org/story/25/11/23/060221/microsoft-warns-its-windows-ai-feature-brings-data-theft-and-malware-risks-and-occasionally-may-hallucinate?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-23, 08:23:56](https://lobste.rs/s/scusuj/qsp_simple_s_expression_parser_for_rust) - [qsp: A simple S-Expression parser for Rust TokenStreams](https://github.com/KnorrFG/qsp)
* [2025-11-23, 05:34:00](https://developers.slashdot.org/story/25/11/23/0450211/amazons-ai-powered-ide-kiro-helps-vibe-coders-with-spec-mode?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon&apos;s AI-Powered IDE Kiro Helps Vibe Coders with &apos;Spec Mode&apos;](https://developers.slashdot.org/story/25/11/23/0450211/amazons-ai-powered-ide-kiro-helps-vibe-coders-with-spec-mode?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-23, 05:28:58](https://lobste.rs/s/4lidxn/trifold_is_tool_quickly_cheaply_host) - [trifold is a tool to quickly &amp; cheaply host static websites using a CDN](https://jpt.sh/projects/trifold/)
* [2025-11-23, 04:24:00](https://soylentnews.org/article.pl?sid=25/11/21/1957207&amp;from=rss) - [Mercury Pollution in Marine Mammals is Increasing, New Study Finds](https://soylentnews.org/article.pl?sid=25/11/21/1957207&amp;from=rss)
* [2025-11-23, 03:27:04](https://news.ycombinator.com/item?id=46020502) - [MCP Apps: Extending servers with interactive user interfaces](http://blog.modelcontextprotocol.io/posts/2025-11-21-mcp-apps/)
* [2025-11-23, 03:15:12](https://lobste.rs/s/risea0/satisfies_is_my_favorite_typescript) - [`satisfies` is my favorite TypeScript keyword](https://sjer.red/blog/2024-12-21/)
* [2025-11-23, 02:54:26](https://lobste.rs/s/pzcjsl/enough_with_all_raft) - [Enough With All The Raft](https://transactional.blog/talk/enough-with-all-the-raft)
* [2025-11-23, 02:49:17](https://lobste.rs/s/cpiydc/flux_keyboard) - [Flux Keyboard](https://fluxkeyboard.com/)
* [2025-11-23, 02:35:00](https://news.slashdot.org/story/25/11/23/0144214/did-bitcoin-play-a-role-in-thursdays-stock-sell-off?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Did Bitcoin Play a Role in Thursday&apos;s Stock Sell-Off?](https://news.slashdot.org/story/25/11/23/0144214/did-bitcoin-play-a-role-in-thursdays-stock-sell-off?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-23, 02:08:00](https://news.ycombinator.com/item?id=46020096) - [An Economy of AI Agents](https://arxiv.org/abs/2509.01063)
* [2025-11-23, 01:35:00](https://developers.slashdot.org/story/25/11/23/0021216/php-85-brings-long-awaited-pipe-operator-adds-new-uri-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [PHP 8.5 Brings Long-Awaited Pipe Operator, Adds New URI Tools](https://developers.slashdot.org/story/25/11/23/0021216/php-85-brings-long-awaited-pipe-operator-adds-new-uri-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-23, 01:22:25](https://lobste.rs/s/s5kub7/dingo_meta_language_for_go) - [dingo: A meta-language for Go](https://github.com/MadAppGang/dingo)
* [2025-11-22, 23:41:00](https://soylentnews.org/article.pl?sid=25/11/21/1952206&amp;from=rss) - [Icelandic is in Danger of Dying Out Because of AI and English-Language Media, Says Former PM](https://soylentnews.org/article.pl?sid=25/11/21/1952206&amp;from=rss)
* [2025-11-22, 20:27:41](https://news.ycombinator.com/item?id=46017972) - [Terence Tao: At the Erdos problem website, AI assistance now becoming routine](https://mathstodon.xyz/@tao/115591487350860999)
* [2025-11-22, 18:58:00](https://soylentnews.org/article.pl?sid=25/11/21/1949232&amp;from=rss) - [First Large-Scale VR Use in the Classroom Extends the Boundaries of Education](https://soylentnews.org/article.pl?sid=25/11/21/1949232&amp;from=rss)
* [2025-11-22, 18:42:53](https://lobste.rs/s/fid6eb/host_website_from_old_phone_using) - [Host a website from an old phone using postmarketOS](https://far.computer/how-to/)
* [2025-11-22, 16:53:12](https://lobste.rs/s/ddjhhu/worst_programming_language_all_time) - [The worst programming language of all time](https://www.youtube.com/watch?v=7fGB-hjc2Gc)
* [2025-11-22, 14:09:00](https://soylentnews.org/article.pl?sid=25/11/21/1211233&amp;from=rss) - [Microsoft Warns its New “AI” Agents in Windows Can Install Malware](https://soylentnews.org/article.pl?sid=25/11/21/1211233&amp;from=rss)
* [2025-11-22, 09:24:00](https://soylentnews.org/article.pl?sid=25/11/21/1346236&amp;from=rss) - [\&quot;Walk My AI Walk\&quot;, a #1 AI Country Song](https://soylentnews.org/article.pl?sid=25/11/21/1346236&amp;from=rss)
* [2025-11-22, 04:42:00](https://soylentnews.org/article.pl?sid=25/11/21/1342241&amp;from=rss) - [Join the the Newest Social Network and Party Like its 1987](https://soylentnews.org/article.pl?sid=25/11/21/1342241&amp;from=rss)
* [2025-11-21, 23:54:00](https://soylentnews.org/article.pl?sid=25/11/21/1340237&amp;from=rss) - [Kaspersky Antivirus is Now Available for Linux. Will You Use It?](https://soylentnews.org/article.pl?sid=25/11/21/1340237&amp;from=rss)
* [2025-11-21, 22:48:39](https://news.ycombinator.com/item?id=46009962) - [A time-travelling door bug in Half Life 2](https://mastodon.gamedev.place/@TomF/115589875974658415)
* [2025-11-21, 19:10:00](https://soylentnews.org/article.pl?sid=25/11/21/1348200&amp;from=rss) - [Google Chrome Bug Exploited as an 0-Day - Patch Now or Risk Full System Compromise](https://soylentnews.org/article.pl?sid=25/11/21/1348200&amp;from=rss)
* [2025-11-21, 14:23:00](https://soylentnews.org/article.pl?sid=25/11/20/1344214&amp;from=rss) - [China Cuts Open New Robot on Stage to Prove Authenticity](https://soylentnews.org/article.pl?sid=25/11/20/1344214&amp;from=rss)
* [2025-11-21, 09:34:00](https://soylentnews.org/article.pl?sid=25/11/19/0144249&amp;from=rss) - [Needy Software](https://soylentnews.org/article.pl?sid=25/11/19/0144249&amp;from=rss)
* [2025-11-21, 04:45:00](https://soylentnews.org/article.pl?sid=25/11/19/0140243&amp;from=rss) - [Software Developers Show Less Constructive Scepticism When Using AI Assistants](https://soylentnews.org/article.pl?sid=25/11/19/0140243&amp;from=rss)
* [2025-11-21, 00:07:00](https://soylentnews.org/article.pl?sid=25/11/19/0138242&amp;from=rss) - [Is Perplexity the First AI Unicorn to Fail?](https://soylentnews.org/article.pl?sid=25/11/19/0138242&amp;from=rss)
* [2025-11-20, 19:15:00](https://soylentnews.org/article.pl?sid=25/11/18/1216240&amp;from=rss) - [Turris Releases Their New Omnia NG Router](https://soylentnews.org/article.pl?sid=25/11/18/1216240&amp;from=rss)
* [2025-11-20, 14:37:00](https://soylentnews.org/article.pl?sid=25/11/18/1212257&amp;from=rss) - [Many Hard Leetcode Problems Are Easy Constraint Problems](https://soylentnews.org/article.pl?sid=25/11/18/1212257&amp;from=rss)
* [2025-11-20, 09:52:00](https://soylentnews.org/article.pl?sid=25/11/18/1210237&amp;from=rss) - [Floating Solar Panels Show Promise, but Environmental Impacts Vary by Location](https://soylentnews.org/article.pl?sid=25/11/18/1210237&amp;from=rss)
* [2025-11-20, 05:04:00](https://soylentnews.org/article.pl?sid=25/11/18/125234&amp;from=rss) - [The Intel 4004 Was the First Microprocessor, Right? ](https://soylentnews.org/article.pl?sid=25/11/18/125234&amp;from=rss)
* [2025-11-20, 00:18:00](https://soylentnews.org/article.pl?sid=25/11/18/120241&amp;from=rss) - [Full Metal Modine](https://soylentnews.org/article.pl?sid=25/11/18/120241&amp;from=rss)
