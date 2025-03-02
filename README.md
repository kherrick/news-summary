# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Mozilla is trying to backtrack on Firefox's controversial data privacy update.](https://www.pcgamer.com/gaming-industry/mozilla-is-already-trying-to-backtrack-on-firefoxs-controversial-data-privacy-update-but-it-might-be-too-little-too-late/) ([Comments](https://news.ycombinator.com/item?id=43233505))

* [New battery-free technology can power devices using ambient RF signals.](https://news.nus.edu.sg/nus-researchers-develop-new-battery-free-technology/) ([Comments](https://news.ycombinator.com/item?id=43232724))

* [Fast New 3D Printing Technique Shines Holograms into Resin.](https://hardware.slashdot.org/story/25/03/02/0216225/fast-new-3d-printing-technique-shines-holograms-into-resin?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://hardware.slashdot.org/story/25/03/02/0216225/fast-new-3d-printing-technique-shines-holograms-into-resin?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [27-Year-Old EXE Became Python In Minutes. Is AI-Assisted Reverse Engineering Next?](https://developers.slashdot.org/story/25/03/01/2211210/27-year-old-exe-became-python-in-minutes-is-ai-assisted-reverse-engineering-next?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://developers.slashdot.org/story/25/03/01/2211210/27-year-old-exe-became-python-in-minutes-is-ai-assisted-reverse-engineering-next?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Google does not want rights to things you do using Chrome (2008).](https://www.mattcutts.com/blog/google-chrome-license-agreement/) ([Comments](https://news.ycombinator.com/item?id=43217309))

## Artificial Intelligence and Machine Learning

* [What Happened When Conspiracy Theorists Talked to OpenAI's GPT-4 Turbo?](https://slashdot.org/story/25/03/02/183210/what-happened-when-conspiracy-theorists-talked-to-openais-gpt-4-turbo?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://slashdot.org/story/25/03/02/183210/what-happened-when-conspiracy-theorists-talked-to-openais-gpt-4-turbo?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [GPT-4.5: 'Not a frontier model'?](https://www.interconnects.ai/p/gpt-45-not-a-frontier-model) ([Comments](https://news.ycombinator.com/item?id=43230965))

## Space Exploration

* [Ask Slashdot: Would You Accept a Free Ride Into Space?](https://science.slashdot.org/story/25/03/02/0123200/ask-slashdot-would-you-accept-a-free-ride-into-space?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://science.slashdot.org/story/25/03/02/0123200/ask-slashdot-would-you-accept-a-free-ride-into-space?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Watch 'Blue Ghost' Attempt Its Landing on the Moon.](https://science.slashdot.org/story/25/03/02/0425256/watch-blue-ghost-attempt-its-landing-on-the-moon?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://science.slashdot.org/story/25/03/02/0425256/watch-blue-ghost-attempt-its-landing-on-the-moon?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Cybersecurity

* [Avast Antivirus Customers Can be Compensated for Harvesting of Their Personal Info.](https://soylentnews.org/article.pl?sid=25/03/01/1531250&from=rss) ([Comments](https://soylentnews.org/article.pl?sid=25/03/01/1531250&from=rss))

* [Malicious PyPI Package Exploited Deezer's API, Orchestrates a Distributed Piracy Operation.](https://yro.slashdot.org/story/25/03/02/064255/malicious-pypi-package-exploited-deezers-api-orchestrates-a-distributed-piracy-operation?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://yro.slashdot.org/story/25/03/02/064255/malicious-pypi-package-exploited-deezers-api-orchestrates-a-distributed-piracy-operation?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Programming and Software

* [Begrudgingly choosing CBOR over MessagePack.](https://taylor.town/flat-scraps-001) ([Comments](https://lobste.rs/s/woeyij/begrudgingly_choosing_cbor_over))

* [I struggled with Git, so I'm making a game to spare others the pain.](https://initialcommit.com/blog/im-making-a-git-game) ([Comments](https://lobste.rs/s/h7jrfg/i_struggled_with_git_so_i_m_making_game))

* [Knowing CSS is mastery to Front-end Development.](https://helloanselm.com/writings/knowing-css-is-mastery-to-frontend-development) ([Comments](https://news.ycombinator.com/item?id=43227303))

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

* [2025-03-02, 18:38:42](https://news.ycombinator.com/item?id=43233505) - [Mozilla is trying to backtrack on Firefox's controversial data privacy update](https://www.pcgamer.com/gaming-industry/mozilla-is-already-trying-to-backtrack-on-firefoxs-controversial-data-privacy-update-but-it-might-be-too-little-too-late/)
* [2025-03-02, 18:34:00](https://slashdot.org/story/25/03/02/183210/what-happened-when-conspiracy-theorists-talked-to-openais-gpt-4-turbo?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [What Happened When Conspiracy Theorists Talked to OpenAI's GPT-4 Turbo?](https://slashdot.org/story/25/03/02/183210/what-happened-when-conspiracy-theorists-talked-to-openais-gpt-4-turbo?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-02, 18:21:04](https://news.ycombinator.com/item?id=43233305) - [olduse.net](https://olduse.net/)
* [2025-03-02, 18:17:48](https://news.ycombinator.com/item?id=43233273) - ['Your showerhead is lying to you'](https://www.washingtonpost.com/opinions/2025/02/26/shower-pressure-save-water/)
* [2025-03-02, 18:06:56](https://lobste.rs/s/iqkbym/towards_test_suite_for_totp_codes) - [Towards a test-suite for TOTP codes](https://shkspr.mobi/blog/2025/03/towards-a-test-suite-for-totp-codes/)
* [2025-03-02, 17:52:48](https://news.ycombinator.com/item?id=43232999) - [The Era of Solopreneurs Is Here](https://manidoraisamy.com/developer-forever/post/the-era-of-solopreneurs-is-here.anc-52867368-2029-4dc5-a7da-ece853a648b5.html)
* [2025-03-02, 17:40:36](https://news.ycombinator.com/item?id=43232880) - [Speedrunners are vulnerability researchers, they just don't know it yet](https://zetier.com/speedrunners-are-vulnerability-researchers/)
* [2025-03-02, 17:36:20](https://news.ycombinator.com/item?id=43232841) - [Falsehoods programmers believe about languages (localization)](https://www.lexiconista.com/falsehoods-about-languages/)
* [2025-03-02, 17:34:00](https://science.slashdot.org/story/25/03/02/0123200/ask-slashdot-would-you-accept-a-free-ride-into-space?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Ask Slashdot:  Would You Accept a Free Ride Into Space?](https://science.slashdot.org/story/25/03/02/0123200/ask-slashdot-would-you-accept-a-free-ride-into-space?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-02, 17:26:44](https://news.ycombinator.com/item?id=43232730) - [Distro (YC S24) Is Hiring a Marketing Lead in Palo Alto](https://www.ycombinator.com/companies/distro/jobs/splSeS5-marketing-lead)
* [2025-03-02, 17:25:49](https://news.ycombinator.com/item?id=43232724) - [New battery-free technology can power devices using ambient RF signals](https://news.nus.edu.sg/nus-researchers-develop-new-battery-free-technology/)
* [2025-03-02, 17:23:12](https://news.ycombinator.com/item?id=43232690) - [An Ode to TypeScript Enums](https://blog.disintegrator.dev/posts/ode-to-typescript-enums/)
* [2025-03-02, 17:00:30](https://news.ycombinator.com/item?id=43232410) - [DeepSeek Drops Distributed DuckDB](https://www.definite.app/blog/smallpond)
* [2025-03-02, 16:48:00](https://soylentnews.org/article.pl?sid=25/03/01/1531250&from=rss) - [Avast Antivirus Customers Can be Compensated for Harvesting of Their Personal Info](https://soylentnews.org/article.pl?sid=25/03/01/1531250&from=rss)
* [2025-03-02, 16:47:30](https://news.ycombinator.com/item?id=43232255) - [Lifestyle of out of touch execs who are pushing return to office](https://twitter.com/EthanEvansVP/status/1895845734177452369)
* [2025-03-02, 16:35:11](https://lobste.rs/s/iiifbu/london_micro_grants) - [london micro grants](https://londonmicrogrants.org/)
* [2025-03-02, 16:34:00](https://hardware.slashdot.org/story/25/03/02/0216225/fast-new-3d-printing-technique-shines-holograms-into-resin?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Fast New 3D Printing Technique Shines Holograms into Resin](https://hardware.slashdot.org/story/25/03/02/0216225/fast-new-3d-printing-technique-shines-holograms-into-resin?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-02, 15:32:46](https://news.ycombinator.com/item?id=43231411) - [Why do we have both CSRF protection and CORS?](https://smagin.fyi/posts/cross-site-requests/)
* [2025-03-02, 15:09:07](https://lobste.rs/s/hrfun0/nix_pragmatism_nix_ld_envfs) - [Nix pragmatism: nix-ld and envfs](https://fzakaria.com/2025/02/27/nix-pragmatism-nix-ld-and-envfs)
* [2025-03-02, 15:04:00](https://science.slashdot.org/story/25/03/01/1943243/first-petawatt-electron-beam-arrives-ready-to-rip-apart-matter-and-space?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [First Petawatt Electron Beam Arrives, Ready To Rip Apart Matter and Space](https://science.slashdot.org/story/25/03/01/1943243/first-petawatt-electron-beam-arrives-ready-to-rip-apart-matter-and-space?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-02, 14:53:20](https://lobste.rs/s/hrpsm4/emacs_tree_sitter_custom_highlighting) - [Emacs Tree-sitter custom highlighting, part 1](https://amitp.blogspot.com/2025/02/emacs-tree-sitter-custom-highlighting.html)
* [2025-03-02, 14:50:20](https://news.ycombinator.com/item?id=43230994) - [Show HN: I built a modern Goodreads alternative](https://kaguya.io/)
* [2025-03-02, 14:47:56](https://news.ycombinator.com/item?id=43230965) - [GPT-4.5: \"Not a frontier model\"?](https://www.interconnects.ai/p/gpt-45-not-a-frontier-model)
* [2025-03-02, 14:41:59](https://news.ycombinator.com/item?id=43230922) - [Towards a test-suite for TOTP codes](https://shkspr.mobi/blog/2025/03/towards-a-test-suite-for-totp-codes/)
* [2025-03-02, 14:41:46](https://news.ycombinator.com/item?id=43230920) - [This Month in Ladybird February 2025](https://ladybird.org/newsletter/2025-02-28/)
* [2025-03-02, 14:36:52](https://lobste.rs/s/t0uh3q/yoke_is_really_cool) - [Yoke is really cool](https://xeiaso.net/blog/2025/yoke-k8s/)
* [2025-03-02, 14:29:13](https://news.ycombinator.com/item?id=43230821) - [Raspberry Pi Pico audio player](http://lucstechblog.blogspot.com/2025/02/raspberry-pi-pico-audio-player.html)
* [2025-03-02, 14:28:07](https://lobste.rs/s/uzr5jt/rackmounting_which_should_not_be) - [Rackmounting that which should not be rackmounted](https://calbryant.uk/blog/rackmounting-that-which-should-not-be-rackmounted/)
* [2025-03-02, 14:25:21](https://news.ycombinator.com/item?id=43230790) - [Show HN: Recommendarr – AI Driven Recommendations Based on Sonarr/Radarr Media](https://github.com/fingerthief/recommendarr)
* [2025-03-02, 14:20:44](https://lobste.rs/s/h7jrfg/i_struggled_with_git_so_i_m_making_game) - [I struggled with Git, so I'm making a game to spare others the pain](https://initialcommit.com/blog/im-making-a-git-game)
* [2025-03-02, 14:18:34](https://lobste.rs/s/lvqhzn/how_clay_s_ui_layout_algorithm_works) - [How Clay's UI Layout Algorithm Works](https://www.youtube.com/watch?v=by9lQvpvMIc)
* [2025-03-02, 14:03:11](https://lobste.rs/s/woeyij/begrudgingly_choosing_cbor_over) - [Begrudgingly choosing CBOR over MessagePack](https://taylor.town/flat-scraps-001)
* [2025-03-02, 12:02:00](https://soylentnews.org/article.pl?sid=25/03/01/1515217&from=rss) - [Journalist Completely Misrepresents Quantum Teleportation](https://soylentnews.org/article.pl?sid=25/03/01/1515217&from=rss)
* [2025-03-02, 12:00:27](https://news.ycombinator.com/item?id=43229569) - [Show HN: SafeHaven – A Minimal VPN Implementation in Go](https://github.com/kwakubiney/safehaven)
* [2025-03-02, 11:20:00](https://yro.slashdot.org/story/25/03/02/064255/malicious-pypi-package-exploited-deezers-api-orchestrates-a-distributed-piracy-operation?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Malicious PyPI Package Exploited Deezer's API, Orchestrates a Distributed Piracy Operation](https://yro.slashdot.org/story/25/03/02/064255/malicious-pypi-package-exploited-deezers-api-orchestrates-a-distributed-piracy-operation?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-02, 09:50:45](https://lobste.rs/s/vjy7m1/abusing_c_implement_json_parsing_with) - [Abusing C to implement JSON Parsing with Struct Methods](https://xnacly.me/posts/2025/json-parser-in-c-with-methods/)
* [2025-03-02, 08:59:57](https://lobste.rs/s/jfypxx/gguser_simple_cli_manage_multiple_git) - [gguser – A Simple CLI to Manage Multiple Git Profiles](https://www.npmjs.com/package/gguser)
* [2025-03-02, 07:20:00](https://science.slashdot.org/story/25/03/02/0425256/watch-blue-ghost-attempt-its-landing-on-the-moon?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Watch 'Blue Ghost' Attempt Its Landing on the Moon](https://science.slashdot.org/story/25/03/02/0425256/watch-blue-ghost-attempt-its-landing-on-the-moon?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-02, 07:14:00](https://soylentnews.org/article.pl?sid=25/03/01/155219&from=rss) - [Chinese Chipmaker Claims New Loongson 3B6600 CPU Could Hit 13Th-Gen Intel Performance](https://soylentnews.org/article.pl?sid=25/03/01/155219&from=rss)
* [2025-03-02, 04:34:00](https://developers.slashdot.org/story/25/03/01/2211210/27-year-old-exe-became-python-in-minutes-is-ai-assisted-reverse-engineering-next?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [27-Year-Old EXE Became Python In Minutes.  Is AI-Assisted Reverse Engineering Next?](https://developers.slashdot.org/story/25/03/01/2211210/27-year-old-exe-became-python-in-minutes-is-ai-assisted-reverse-engineering-next?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-02, 04:32:06](https://news.ycombinator.com/item?id=43227303) - [Knowing CSS is mastery to Front end Development](https://helloanselm.com/writings/knowing-css-is-mastery-to-frontend-development)
* [2025-03-02, 03:09:31](https://lobste.rs/s/zjj9p1/nebu_spreadsheet_editor_for_varvara) - [Nebu: a spreadsheet editor for Varvara](https://wiki.xxiivv.com/site/nebu)
* [2025-03-02, 02:34:00](https://yro.slashdot.org/story/25/03/01/2316220/utah-could-become-americas-first-state-to-ban-fluoride-in-public-water?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Utah Could Become America's First State To Ban Fluoride In Public Water](https://yro.slashdot.org/story/25/03/01/2316220/utah-could-become-americas-first-state-to-ban-fluoride-in-public-water?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-02, 02:31:00](https://soylentnews.org/article.pl?sid=25/03/01/152214&from=rss) - [Engineers Create Lightweight Multi-Color Fresnel Lens for Telescopes](https://soylentnews.org/article.pl?sid=25/03/01/152214&from=rss)
* [2025-03-02, 00:18:21](https://news.ycombinator.com/item?id=43225686) - [The early days of Linux (2023)](https://lwn.net/Articles/928581/)
* [2025-03-02, 00:05:30](https://news.ycombinator.com/item?id=43225560) - [How Flash games shaped the video game industry (2020)](https://www.flashgamehistory.com/)
* [2025-03-01, 23:51:00](https://slashdot.org/story/25/03/01/2348212/microsoft-outage-leaves-tens-of-thousands-unable-to-access-email-and-other-apps?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Outage Leaves Tens of Thousands Unable to Access Email and Other Apps](https://slashdot.org/story/25/03/01/2348212/microsoft-outage-leaves-tens-of-thousands-unable-to-access-email-and-other-apps?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-01, 23:09:57](https://lobste.rs/s/osinlb/infrastructural_problems) - [Infrastructural problems and instabilities caused by cloud services](https://mental-reverb.com/blog.php?id=15)
* [2025-03-01, 22:34:00](https://slashdot.org/story/25/03/01/209255/amd-reveals-rdna-4-gpu-architecture-powering-next-gen-radeon-rx-9070-cards?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [AMD Reveals RDNA 4 GPU Architecture Powering Next Gen Radeon RX 9070 Cards](https://slashdot.org/story/25/03/01/209255/amd-reveals-rdna-4-gpu-architecture-powering-next-gen-radeon-rx-9070-cards?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-01, 21:49:00](https://soylentnews.org/article.pl?sid=25/03/01/0115227&from=rss) - [SpaceX: Actually, Dying Starlink Satellites Don't Always Fully Burn Up](https://soylentnews.org/article.pl?sid=25/03/01/0115227&from=rss)
* [2025-03-01, 21:34:00](https://news.slashdot.org/story/25/03/01/2111254/mozilla-revises-firefoxs-terms-of-use-clarifies-that-they-dont-own-your-data?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Mozilla Revises Firefox's Terms of Use, Clarifies That They Don't Own Your Data](https://news.slashdot.org/story/25/03/01/2111254/mozilla-revises-firefoxs-terms-of-use-clarifies-that-they-dont-own-your-data?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-01, 21:11:26](https://news.ycombinator.com/item?id=43223718) - [Show HN: Berlin Swapfest – Electronics flea market](https://www.swapfest.berlin/)
* [2025-03-01, 20:58:18](https://lobste.rs/s/nvoykv/making_o1_o3_sonnet_3_7_hallucinate_for) - [Making o1, o3, and Sonnet 3.7 Hallucinate for Everyone](https://bengarcia.dev/making-o1-o3-and-sonnet-3-7-hallucinate-for-everyone)
* [2025-03-01, 20:34:00](https://science.slashdot.org/story/25/03/01/0719208/new-research-suggests-ancient-ocean-on-mars?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [New Research Suggests Ancient Ocean on Mars](https://science.slashdot.org/story/25/03/01/0719208/new-research-suggests-ancient-ocean-on-mars?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-01, 19:55:43](https://lobste.rs/s/nzjtop/user_defined_order_sql_2018) - [User-defined Order in SQL (2018)](https://begriffs.com/posts/2018-03-20-user-defined-order.html)
* [2025-03-01, 19:34:00](https://developers.slashdot.org/story/25/03/01/0548217/perls-cpan-security-group-is-now-a-cna-can-assign-cves?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Perl's CPAN Security Group is Now a CNA, Can Assign CVEs](https://developers.slashdot.org/story/25/03/01/0548217/perls-cpan-security-group-is-now-a-cna-can-assign-cves?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-01, 19:07:21](https://lobste.rs/s/pul56b/nginx_explorer_upload) - [Nginx Explorer - Upload](https://blog.izissise.net/posts/ngxp-upload/)
* [2025-03-01, 18:34:00](https://science.slashdot.org/story/25/03/01/0424235/anti-aging-pill-for-dogs-clears-key-fda-hurdle?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Anti-Aging Pill for Dogs Clears Key FDA Hurdle](https://science.slashdot.org/story/25/03/01/0424235/anti-aging-pill-for-dogs-clears-key-fda-hurdle?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-01, 18:20:43](https://lobste.rs/s/g9uepw/lisp_your_language) - [Lisp in Your Language](https://danthedev.com/lisp-in-your-language)
* [2025-03-01, 17:54:55](https://news.ycombinator.com/item?id=43221697) - [The most unhinged video wall, made out of Chromebooks](https://varun.ch/posts/videowall/)
* [2025-03-01, 17:34:00](https://games.slashdot.org/story/25/03/01/051200/magnus-carlsen-auctions-jeans-admits-he-cant-beat-chess-engines?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Magnus Carlsen Auctions Jeans, Admits He Can't Beat Chess Engines](https://games.slashdot.org/story/25/03/01/051200/magnus-carlsen-auctions-jeans-admits-he-cant-beat-chess-engines?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-01, 17:01:00](https://soylentnews.org/article.pl?sid=25/03/01/0055211&from=rss) - [Pandas \"Tricked\" Into Becoming the World's Biggest Bamboo Fans](https://soylentnews.org/article.pl?sid=25/03/01/0055211&from=rss)
* [2025-03-01, 16:49:44](https://lobste.rs/s/ifczmp/pinning_nixos_with_npins_how_kill) - [Pinning NixOS with npins, or how to kill channels forever without flakes](https://jade.fyi/blog/pinning-nixos-with-npins/)
* [2025-03-01, 16:02:58](https://lobste.rs/s/m0mwil/hardware_discovery_acpi_device_tree) - [Hardware discovery: ACPI & Device Tree](https://blogsystem5.substack.com/p/hardware-autoconfiguration)
* [2025-03-01, 14:56:03](https://lobste.rs/s/xmlv0z/your_next_two_zeroes) - [Your Next Two Zeroes](https://taylor.town/next-two-zeroes)
* [2025-03-01, 12:17:00](https://soylentnews.org/article.pl?sid=25/03/01/0049207&from=rss) - [Skype is Shutting Down After Two Decades](https://soylentnews.org/article.pl?sid=25/03/01/0049207&from=rss)
* [2025-03-01, 10:18:31](https://lobste.rs/s/d8amk0/is_rust_good_fit_for_business_apps) - [Is Rust a good fit for business apps?](https://www.bartoszsypytkowski.com/is-rust-a-good-fit-for-business-apps/)
* [2025-03-01, 09:21:21](https://lobste.rs/s/vgbpbc/4_mains_nothing_at_all) - [4 mains or nothing at all](https://andrews.substack.com/p/4-mains-or-nothing-at-all)
* [2025-03-01, 08:59:25](https://news.ycombinator.com/item?id=43217451) - [Effective Rust](https://www.lurklurk.org/effective-rust/title-page.html)
* [2025-03-01, 08:38:12](https://news.ycombinator.com/item?id=43217309) - [Google does not want rights to things you do using Chrome (2008)](https://www.mattcutts.com/blog/google-chrome-license-agreement/)
* [2025-03-01, 07:36:00](https://soylentnews.org/article.pl?sid=25/02/28/0659242&from=rss) - [Five Days of Ultra-Processed Food: Study Finds That's Enough to Alter the Brain](https://soylentnews.org/article.pl?sid=25/02/28/0659242&from=rss)
* [2025-03-01, 04:12:12](https://lobste.rs/s/suy0fp/deno_shows_us_there_s_better_way) - [Deno shows us there's a better way](https://www.macchaffee.com/blog/2025/deno/)
* [2025-03-01, 02:53:00](https://soylentnews.org/article.pl?sid=25/02/28/0654225&from=rss) - [Internet Society Wants to Improve Terrestrial Fibre Maps](https://soylentnews.org/article.pl?sid=25/02/28/0654225&from=rss)
* [2025-02-28, 23:33:50](https://lobste.rs/s/mpkdpt/it_is_no_longer_safe_move_our_governments) - [It is no longer safe to move our governments and societies to US clouds](https://berthub.eu/articles/posts/you-can-no-longer-base-your-government-and-society-on-us-clouds/)
* [2025-02-28, 22:05:00](https://soylentnews.org/article.pl?sid=25/02/28/0647213&from=rss) - [Water Chlorination Might Be Raising Our Risk Of Certain Cancers](https://soylentnews.org/article.pl?sid=25/02/28/0647213&from=rss)
* [2025-02-28, 21:32:35](https://lobste.rs/s/zian90/how_gain_code_execution_on_millions) - [how to gain code execution on millions of people and hundreds of popular apps](https://kibty.town/blog/todesktop/)
* [2025-02-28, 17:17:00](https://soylentnews.org/article.pl?sid=25/02/28/0643220&from=rss) - [US Investigates Whether Deepseek Obtained NVidia Chips Through Singapore to Bypass Restrictions](https://soylentnews.org/article.pl?sid=25/02/28/0643220&from=rss)
* [2025-02-28, 12:32:00](https://soylentnews.org/article.pl?sid=25/02/28/0640209&from=rss) - [PSA: Amazon Kills “Download & Transfer Via USB” Option for Kindles This Week](https://soylentnews.org/article.pl?sid=25/02/28/0640209&from=rss)
* [2025-02-28, 08:31:27](https://news.ycombinator.com/item?id=43203180) - [‘Slime’ keeps the brain safe ― and could guard against ageing](https://www.nature.com/articles/d41586-025-00554-w)
* [2025-02-28, 07:47:00](https://soylentnews.org/article.pl?sid=25/02/27/1641235&from=rss) - [NASA's James Webb Space Telescope Faces Potential 20% Budget Cut Just 4 Years Into its Mission](https://soylentnews.org/article.pl?sid=25/02/27/1641235&from=rss)
* [2025-02-28, 03:05:00](https://soylentnews.org/article.pl?sid=25/02/27/1633200&from=rss) - [Piezoelectric Catalyst Destroys Forever Chemicals](https://soylentnews.org/article.pl?sid=25/02/27/1633200&from=rss)
* [2025-02-28, 02:59:24](https://news.ycombinator.com/item?id=43201251) - [A few words about indie app business](https://blog.charliemonroe.net/a-few-words-about-indie-app-business/)
* [2025-02-27, 22:19:00](https://soylentnews.org/article.pl?sid=25/02/26/190229&from=rss) - [Right to Repair Laws Have Now Been Introduced in All 50 US States](https://soylentnews.org/article.pl?sid=25/02/26/190229&from=rss)
* [2025-02-27, 17:35:00](https://soylentnews.org/article.pl?sid=25/02/26/1856235&from=rss) - [Robot With 1,000 Muscles Twitches Like Human While Dangling From Ceiling](https://soylentnews.org/article.pl?sid=25/02/26/1856235&from=rss)
* [2025-02-27, 16:53:56](https://news.ycombinator.com/item?id=43196110) - [The three-dimensional Kakeya conjecture, after Wang and Zahl](https://terrytao.wordpress.com/2025/02/25/the-three-dimensional-kakeya-conjecture-after-wang-and-zahl/)
* [2025-02-27, 12:51:00](https://soylentnews.org/article.pl?sid=25/02/26/1852225&from=rss) - [Physx Feature Unlocked For RTX 5090 With RTX 3050 'Helper' To Enable Full Performance](https://soylentnews.org/article.pl?sid=25/02/26/1852225&from=rss)
* [2025-02-27, 08:08:00](https://soylentnews.org/article.pl?sid=25/02/26/1850240&from=rss) - [Bubbles That Break Rules: A Fluid Discovery That Defies Logic](https://soylentnews.org/article.pl?sid=25/02/26/1850240&from=rss)
* [2025-02-27, 02:27:00](https://soylentnews.org/article.pl?sid=25/02/26/0210231&from=rss) - [As the Kernel Turns: Rust in Linux Saga Reaches the “Linus in All-Caps” Phase](https://soylentnews.org/article.pl?sid=25/02/26/0210231&from=rss)
* [2025-02-26, 21:42:00](https://soylentnews.org/article.pl?sid=25/02/25/0655200&from=rss) - [Software Engineering Job Openings Hit 5-Year Low Amid Industry Shift](https://soylentnews.org/article.pl?sid=25/02/25/0655200&from=rss)
* [2025-02-26, 18:44:50](https://news.ycombinator.com/item?id=43186717) - [When This Professor Got Cancer, He Didn't Quit. He Taught a Class About It](https://www.nytimes.com/2025/02/26/us/stanford-professor-cancer-bryant-lin.html)
* [2025-02-26, 16:53:00](https://soylentnews.org/article.pl?sid=25/02/25/0646226&from=rss) - [Chinese Hackers Compromised Organizations in 70 Nations, Warn US Federal Agencies](https://soylentnews.org/article.pl?sid=25/02/25/0646226&from=rss)
* [2025-02-26, 12:05:00](https://soylentnews.org/article.pl?sid=25/02/25/0640214&from=rss) - [Seagate's Fraudulent HDD Scandal Expands: Ironwolf Pro Hard Drives Reportedly Also Affected](https://soylentnews.org/article.pl?sid=25/02/25/0640214&from=rss)
* [2025-02-26, 07:20:00](https://soylentnews.org/article.pl?sid=25/02/25/0633257&from=rss) - [The Secretive X-37B Space Plane Snapped This Picture of Earth From Orbit](https://soylentnews.org/article.pl?sid=25/02/25/0633257&from=rss)
* [2025-02-26, 02:33:00](https://soylentnews.org/article.pl?sid=25/02/24/1625242&from=rss) - [US Treasury Beneficial Ownership Information Reporting is Back On (Again)](https://soylentnews.org/article.pl?sid=25/02/24/1625242&from=rss)
