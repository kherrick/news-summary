# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Technology Innovations

* [Minions: Stripe's one-shot, end-to-end coding agents – Stripe Dot Dev Blog](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents)

* [Has the AI Disruption Arrived - and Will It Just Make Software Cheaper and More Accessible?](https://developers.slashdot.org/story/26/02/22/0620244/has-the-ai-disruption-arrived---and-will-it-just-make-software-cheaper-and-more-accessible?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [How and Why Local LLMs Perform On Framework 13 AMD Strix Point](https://msf.github.io/blogpost/local-llm-performance-framework13.html)

* [Show HN: Llama 3.1 70B on a single RTX 3090 via NVMe-to-GPU bypassing the CPU](https://github.com/xaskasdf/ntransformer)

* [America's Peace Corps Announces 'Tech Corps' Volunteers to Help Bring AI to Foreign Countries](https://yro.slashdot.org/story/26/02/21/2140216/americas-peace-corps-announces-tech-corps-volunteers-to-help-bring-ai-to-foreign-countries?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Code.org President Steps Down Citing 'Upending' of CS By AI](https://news.slashdot.org/story/26/02/21/1932253/codeorg-president-steps-down-citing-upending-of-cs-by-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Cybersecurity Concerns

* [Hackers Expose Age-Verification Software Powering Surveillance Web](https://soylentnews.org/article.pl?sid=26/02/21/0126215&from=rss)

* [Proposal: add "AI generated" as a flag reason](https://lobste.rs/s/rkjpob/proposal_add_ai_generated_as_flag_reason)

* [Wikipedia blacklists Archive.today, starts removing 695,000 archive links](https://arstechnica.com/tech-policy/2026/02/wikipedia-bans-archive-today-after-site-executed-ddos-and-altered-web-captures/)

* [Instruction Decoding in the Intel 8087 Floating-Point Chip](https://soylentnews.org/article.pl?sid=26/02/16/2249254&from=rss)

## Science and Research Developments

* [Researchers Discover Ancient Bacteria Strain That Resists 10 Modern Antibiotics](https://science.slashdot.org/story/26/02/21/0614256/researchers-discover-ancient-bacteria-strain-that-resists-10-modern-antibiotics?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Did We Just See a Black Hole Explode?](https://soylentnews.org/article.pl?sid=26/02/21/137227&from=rss)

* [Evidence of the bouba-kiki effect in naïve baby chicks](https://www.science.org/doi/10.1126/science.adq7188)

* [This Bonobo Just Did Something Scientists Thought Only Humans Could Do](https://soylentnews.org/article.pl?sid=26/02/17/1842234&from=rss)

## Programming and Software Development

* [HTTP/3 on FreeBSD: Getting QUIC Working with nginx in a Bastille Jail](https://blog.hofstede.it/http3-on-freebsd-getting-quic-working-with-nginx-in-a-bastille-jail/)

* [lobste.rs migrates from MariaDB to SQLite](https://lobste.rs/s/oz7ebk/lobste_rs_migrates_from_mariadb_sqlite)

* [Parse, Don't Validate and Type-Driven Design in Rust](https://www.harudagondi.space/blog/parse-dont-validate-and-type-driven-design-in-rust)

* [Back to FreeBSD: Part 1](https://hypha.pub/back-to-freebsd-part-1)

* [How We Fixed YAML Comment Preservation in Ruby (And Why We Sponsored It)](https://blog.discourse.org/2026/02/how-we-fixed-yaml-comment-preservation-in-ruby-and-why-we-sponsored-it)

## Unique and Fascinating Articles

* [Japanese Woodblock Print Search](https://ukiyo-e.org/)

* [Cosmologically Unique IDs](https://jasonfantl.com/posts/Universal-Unique-IDs/)

* [A Botnet Accidentally Destroyed I2P](https://www.sambent.com/a-botnet-accidentally-destroyed-i2p-the-full-story/)

* [Microsoft's New Windows 11 Speed Test is Just a Link to Ookla's Speedtest Via Bing](https://soylentnews.org/article.pl?sid=26/02/21/1334230&from=rss)

* [The Human Root of Trust – public domain framework for agent accountability](https://humanrootoftrust.org/)

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

* [2026-02-22, 12:41:00](https://soylentnews.org/article.pl?sid=26/02/21/1334230&amp;from=rss) - [Microsoft&apos;s New Windows 11 Speed Test is Just a Link to Ookla&apos;s Speedtest Via Bing](https://soylentnews.org/article.pl?sid=26/02/21/1334230&amp;from=rss)
* [2026-02-22, 12:34:00](https://news.ycombinator.com/item?id=47110495) - [Minions: Stripe&apos;s one-shot, end-to-end coding agents – Stripe Dot Dev Blog](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents)
* [2026-02-22, 11:54:21](https://lobste.rs/s/sacz3z/running_risc_v_vm_test_my_snaps) - [Running RISC-V in a VM to test my snaps](https://blog.popey.com/2026/02/running-risc-v-in-a-vm-to-test-my-snaps/)
* [2026-02-22, 11:34:00](https://developers.slashdot.org/story/26/02/22/0620244/has-the-ai-disruption-arrived---and-will-it-just-make-software-cheaper-and-more-accessible?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Has the AI Disruption Arrived - and Will It Just Make Software Cheaper and More Accessible?](https://developers.slashdot.org/story/26/02/22/0620244/has-the-ai-disruption-arrived---and-will-it-just-make-software-cheaper-and-more-accessible?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-22, 10:13:42](https://lobste.rs/s/errsl1/how_taalas_prints_llm_onto_chip) - [How Taalas \&quot;prints\&quot; LLM onto a chip?](https://www.anuragk.com/blog/posts/Taalas.html)
* [2026-02-22, 09:23:54](https://lobste.rs/s/vdueen/you_are_not_left_behind) - [You are not left behind](https://www.ufried.com/blog/not_left_behind/)
* [2026-02-22, 09:16:02](https://lobste.rs/s/phgo6d/uts_39_unicode_security_mechanisms) - [UTS #39: Unicode Security Mechanisms](https://www.unicode.org/reports/tr39/)
* [2026-02-22, 08:34:00](https://news.slashdot.org/story/26/02/21/0735210/after-16-years-interim-cto-finally-eradicating-fujitsu-and-horizon-from-the-uks-post-office?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [After 16 Years, &apos;Interim&apos; CTO Finally Eradicating Fujitsu and Horizon From the UK&apos;s Post Office](https://news.slashdot.org/story/26/02/21/0735210/after-16-years-interim-cto-finally-eradicating-fujitsu-and-horizon-from-the-uks-post-office?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-22, 08:23:04](https://lobste.rs/s/4ypj10/cosmologically_unique_ids) - [Cosmologically Unique IDs](https://jasonfantl.com/posts/Universal-Unique-IDs/)
* [2026-02-22, 07:59:00](https://soylentnews.org/article.pl?sid=26/02/21/1326214&amp;from=rss) - [It&apos;s Time to Get Rid of Networked Cameras](https://soylentnews.org/article.pl?sid=26/02/21/1326214&amp;from=rss)
* [2026-02-22, 07:16:27](https://news.ycombinator.com/item?id=47108989) - [Back to FreeBSD: Part 1](https://hypha.pub/back-to-freebsd-part-1)
* [2026-02-22, 07:14:22](https://news.ycombinator.com/item?id=47108977) - [What&apos;s the best way to learn a new language?](https://www.bbc.com/future/article/20260220-whats-the-best-way-to-learn-a-new-language)
* [2026-02-22, 05:54:28](https://lobste.rs/s/rkjpob/proposal_add_ai_generated_as_flag_reason) - [Proposal: add \&quot;AI generated\&quot; as a flag reason](https://lobste.rs/s/rkjpob/proposal_add_ai_generated_as_flag_reason)
* [2026-02-22, 05:34:00](https://ask.slashdot.org/story/26/02/22/0111249/ask-slashdot-whats-your-boot-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ask Slashdot:  What&apos;s Your Boot Time?](https://ask.slashdot.org/story/26/02/22/0111249/ask-slashdot-whats-your-boot-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-22, 05:19:51](https://lobste.rs/s/kgatai/http_3_on_freebsd_getting_quic_working) - [HTTP/3 on FreeBSD: Getting QUIC Working with nginx in a Bastille Jail](https://blog.hofstede.it/http3-on-freebsd-getting-quic-working-with-nginx-in-a-bastille-jail/)
* [2026-02-22, 03:18:36](https://news.ycombinator.com/item?id=47107781) - [Japanese Woodblock Print Search](https://ukiyo-e.org/)
* [2026-02-22, 03:14:00](https://soylentnews.org/article.pl?sid=26/02/21/1322208&amp;from=rss) - [Mechanochemical Breakthrough Unlocks Cheap, Safe, Powdered Hydrogen](https://soylentnews.org/article.pl?sid=26/02/21/1322208&amp;from=rss)
* [2026-02-22, 02:53:48](https://lobste.rs/s/pvfqcr/cl_kawa_turducken_programming_languages) - [cl-kawa: A Turducken of Programming Languages](https://atgreen.github.io/repl-yell/posts/cl-kawa/)
* [2026-02-22, 02:48:35](https://lobste.rs/s/rzbstd/how_we_fixed_yaml_comment_preservation) - [How We Fixed YAML Comment Preservation in Ruby (And Why We Sponsored It)](https://blog.discourse.org/2026/02/how-we-fixed-yaml-comment-preservation-in-ruby-and-why-we-sponsored-it/)
* [2026-02-22, 02:34:00](https://yro.slashdot.org/story/26/02/22/004205/dna-technology-convicts-a-64-year-old-for-murdering-a-teenager-in-1982?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DNA Technology Convicts a 64-Year-Old for Murdering a Teenager in 1982](https://yro.slashdot.org/story/26/02/22/004205/dna-technology-convicts-a-64-year-old-for-murdering-a-teenager-in-1982?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-22, 02:32:21](https://lobste.rs/s/s3en46/fix_your_tools) - [Fix your tools](https://ochagavia.nl/blog/fix-your-tools/)
* [2026-02-22, 01:08:17](https://news.ycombinator.com/item?id=47106985) - [A Botnet Accidentally Destroyed I2P](https://www.sambent.com/a-botnet-accidentally-destroyed-i2p-the-full-story/)
* [2026-02-22, 00:37:47](https://lobste.rs/s/awr4cx/how_why_local_llms_perform_on_framework_13) - [How and Why Local LLMs Perform On Framework 13 AMD Strix Point](https://msf.github.io/blogpost/local-llm-performance-framework13.html)
* [2026-02-22, 00:29:05](https://news.ycombinator.com/item?id=47106686) - [How I use Claude Code: Separation of planning and execution](https://boristane.com/blog/how-i-use-claude-code/)
* [2026-02-21, 23:43:00](https://yro.slashdot.org/story/26/02/21/2316255/pro-gamer-consumer-movement-stop-killing-games-will-launch-ngos-in-america-and-the-eu?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pro-Gamer Consumer Movement &apos;Stop Killing Games&apos; Will Launch NGOs in America and the EU](https://yro.slashdot.org/story/26/02/21/2316255/pro-gamer-consumer-movement-stop-killing-games-will-launch-ngos-in-america-and-the-eu?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-21, 22:43:00](https://developers.slashdot.org/story/26/02/21/2220205/hit-piece-writing-ai-deleted-but-is-this-a-warning-about-ai-generated-harassment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hit Piece-Writing AI Deleted. But Is This a Warning About AI-Generated Harassment?](https://developers.slashdot.org/story/26/02/21/2220205/hit-piece-writing-ai-deleted-but-is-this-a-warning-about-ai-generated-harassment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-21, 22:32:00](https://soylentnews.org/article.pl?sid=26/02/21/137227&amp;from=rss) - [Did We Just See a Black Hole Explode?](https://soylentnews.org/article.pl?sid=26/02/21/137227&amp;from=rss)
* [2026-02-21, 22:00:24](https://lobste.rs/s/0blzao/loon_lisp_flies) - [Loon — A LISP that flies](https://loonlang.com)
* [2026-02-21, 21:53:26](https://lobste.rs/s/i3sveh/thunderkittens_2_0_even_faster_kernels) - [ThunderKittens 2.0: Even Faster Kernels for Your GPUs](https://hazyresearch.stanford.edu/blog/2026-02-19-tk-2)
* [2026-02-21, 21:51:58](https://news.ycombinator.com/item?id=47105198) - [Evidence of the bouba-kiki effect in naïve baby chicks](https://www.science.org/doi/10.1126/science.adq7188)
* [2026-02-21, 21:43:00](https://yro.slashdot.org/story/26/02/21/2140216/americas-peace-corps-announces-tech-corps-volunteers-to-help-bring-ai-to-foreign-countries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America&apos;s Peace Corps Announces &apos;Tech Corps&apos; Volunteers to Help Bring AI to Foreign Countries](https://yro.slashdot.org/story/26/02/21/2140216/americas-peace-corps-announces-tech-corps-volunteers-to-help-bring-ai-to-foreign-countries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-21, 21:30:11](https://lobste.rs/s/oz7ebk/lobste_rs_migrates_from_mariadb_sqlite) - [lobste.rs migrates from MariaDB to SQLite](https://lobste.rs/s/oz7ebk/lobste_rs_migrates_from_mariadb_sqlite)
* [2026-02-21, 21:03:28](https://lobste.rs/s/xgd19m/prefer_if_statements_polymorphism) - [Prefer If Statements To Polymorphism](https://htmx.org/essays/prefer-if-statements/)
* [2026-02-21, 20:57:30](https://news.ycombinator.com/item?id=47104667) - [Show HN: Llama 3.1 70B on a single RTX 3090 via NVMe-to-GPU bypassing the CPU](https://github.com/xaskasdf/ntransformer)
* [2026-02-21, 20:35:00](https://news.slashdot.org/story/26/02/21/1932253/codeorg-president-steps-down-citing-upending-of-cs-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Code.org President Steps Down Citing &apos;Upending&apos; of CS By AI](https://news.slashdot.org/story/26/02/21/1932253/codeorg-president-steps-down-citing-upending-of-cs-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-21, 20:12:54](https://lobste.rs/s/o1i3rf/meshtnc_is_tool_for_turning_consumer) - [MeshTNC is a tool for turning consumer grade LoRa radios into KISS TNC compatible packet radio modems](https://github.com/datapartyjs/MeshTNC)
* [2026-02-21, 19:40:06](https://news.ycombinator.com/item?id=47103931) - [Parse, Don&apos;t Validate and Type-Driven Design in Rust](https://www.harudagondi.space/blog/parse-dont-validate-and-type-driven-design-in-rust/)
* [2026-02-21, 19:37:47](https://lobste.rs/s/ssfatg/parse_don_t_validate_type_driven_design) - [Parse, don&apos;t Validate and Type-Driven Design in Rust](https://www.harudagondi.space/blog/parse-dont-validate-and-type-driven-design-in-rust/)
* [2026-02-21, 19:35:00](https://linux.slashdot.org/story/26/02/21/0752214/t2-linux-restores-xaa-in-xorg-making-2d-graphics-fast-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [T2 Linux Restores XAA In Xorg, Making 2D Graphics Fast Again](https://linux.slashdot.org/story/26/02/21/0752214/t2-linux-restores-xaa-in-xorg-making-2d-graphics-fast-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-21, 19:07:20](https://news.ycombinator.com/item?id=47103661) - [How Taalas “prints” LLM onto a chip?](https://www.anuragk.com/blog/posts/Taalas.html)
* [2026-02-21, 18:50:19](https://news.ycombinator.com/item?id=47103506) - [Canvas_ity: A tiny, single-header &lt;canvas&gt;-like 2D rasterizer for C++](https://github.com/a-e-k/canvas_ity)
* [2026-02-21, 18:34:00](https://games.slashdot.org/story/26/02/21/0632214/the-salvation-army-opens-a-digital-thrift-store-on-roblox?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Salvation Army Opens a Digital Thrift Store On Roblox](https://games.slashdot.org/story/26/02/21/0632214/the-salvation-army-opens-a-digital-thrift-store-on-roblox?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-21, 18:09:24](https://news.ycombinator.com/item?id=47103136) - [Toyota’s hydrogen-powered Mirai has experienced rapid depreciation](https://carbuzz.com/toyota-mirai-massive-depreciation-one-year/)
* [2026-02-21, 17:49:00](https://soylentnews.org/article.pl?sid=26/02/21/0130244&amp;from=rss) - [AIRD -  a New Term for Workers Freaking Out Over Being Replaced by AI](https://soylentnews.org/article.pl?sid=26/02/21/0130244&amp;from=rss)
* [2026-02-21, 17:34:00](https://science.slashdot.org/story/26/02/21/0614256/researchers-discover-ancient-bacteria-strain-that-resists-10-modern-antibiotics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Researchers Discover Ancient Bacteria Strain That Resists 10 Modern Antibiotics](https://science.slashdot.org/story/26/02/21/0614256/researchers-discover-ancient-bacteria-strain-that-resists-10-modern-antibiotics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-21, 16:45:03](https://lobste.rs/s/reslsr/ipv6_address_assignment) - [IPv6 address assignment](https://lpar.ATH0.com/posts/2026/02/ipv6-address-assignment/)
* [2026-02-21, 16:34:00](https://tech.slashdot.org/story/26/02/21/0530202/is-brain-rot-real-how-too-much-time-online-can-affect-your-mind?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is &apos;Brain Rot&apos; Real? How Too Much Time Online Can Affect Your Mind.](https://tech.slashdot.org/story/26/02/21/0530202/is-brain-rot-real-how-too-much-time-online-can-affect-your-mind?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-21, 15:34:00](https://developers.slashdot.org/story/26/02/21/064205/how-pythons-security-response-team-keeps-python-users-safe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Python&apos;s Security Response Team Keeps Python Users Safe](https://developers.slashdot.org/story/26/02/21/064205/how-pythons-security-response-team-keeps-python-users-safe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-21, 14:32:16](https://news.ycombinator.com/item?id=47101171) - [CXMT has been offering DDR4 chips at about half the prevailing market rate](https://www.koreaherald.com/article/10679206)
* [2026-02-21, 14:01:45](https://news.ycombinator.com/item?id=47100935) - [The Human Root of Trust – public domain framework for agent accountability](https://humanrootoftrust.org/)
* [2026-02-21, 13:00:00](https://science.slashdot.org/story/26/02/21/0056213/hazardous-substances-found-in-all-headphones-tested-by-toxfree-project?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hazardous Substances Found In All Headphones Tested By ToxFREE Project](https://science.slashdot.org/story/26/02/21/0056213/hazardous-substances-found-in-all-headphones-tested-by-toxfree-project?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-21, 12:55:54](https://lobste.rs/s/l0gv3h/fastest_way_board_airplane) - [The Fastest Way to Board an Airplane](https://navendu.me/posts/airlines-hate-this-trick/)
* [2026-02-21, 12:55:00](https://soylentnews.org/article.pl?sid=26/02/21/0126215&amp;from=rss) - [Hackers Expose Age-Verification Software Powering Surveillance Web](https://soylentnews.org/article.pl?sid=26/02/21/0126215&amp;from=rss)
* [2026-02-21, 12:49:24](https://news.ycombinator.com/item?id=47100328) - [Show HN: Elecxzy – A lightweight, Lisp-free Emacs-like editor in Electron](https://github.com/kurouna/elecxzy)
* [2026-02-21, 12:37:52](https://news.ycombinator.com/item?id=47100232) - [zclaw: personal AI assistant in under 888 KB, running on an ESP32](https://github.com/tnm/zclaw)
* [2026-02-21, 11:18:57](https://lobste.rs/s/haqwn0/wikipedia_blacklists_archive_today) - [Wikipedia blacklists Archive.today, starts removing 695,000 archive links](https://arstechnica.com/tech-policy/2026/02/wikipedia-bans-archive-today-after-site-executed-ddos-and-altered-web-captures/)
* [2026-02-21, 10:00:00](https://hardware.slashdot.org/story/26/02/21/0049226/openais-first-chatgpt-gadget-could-be-a-smart-speaker-with-a-camera?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI&apos;s First ChatGPT Gadget Could Be a Smart Speaker With a Camera](https://hardware.slashdot.org/story/26/02/21/0049226/openais-first-chatgpt-gadget-could-be-a-smart-speaker-with-a-camera?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-21, 08:26:36](https://news.ycombinator.com/item?id=47098669) - [Coccinelle: Source-to-source transformation tool](https://github.com/coccinelle/coccinelle)
* [2026-02-21, 08:12:00](https://soylentnews.org/article.pl?sid=26/02/21/0123209&amp;from=rss) - [Visualizing the Internet in 2026](https://soylentnews.org/article.pl?sid=26/02/21/0123209&amp;from=rss)
* [2026-02-21, 07:06:18](https://news.ycombinator.com/item?id=47098245) - [I verified my LinkedIn identity. Here&apos;s what I handed over](https://thelocalstack.eu/posts/linkedin-identity-verification-privacy/)
* [2026-02-21, 06:26:12](https://lobste.rs/s/rcewff/ajail_basic_jail_for_programs_you_don_t) - [ajail: a basic jail for programs you don&apos;t completely trust](https://github.com/jtolio/ajail)
* [2026-02-21, 03:20:00](https://soylentnews.org/article.pl?sid=26/02/21/0121213&amp;from=rss) - [Palo Alto CEO Says AI Isn&apos;t Great for Business, Yet](https://soylentnews.org/article.pl?sid=26/02/21/0121213&amp;from=rss)
* [2026-02-21, 00:56:29](https://news.ycombinator.com/item?id=47096253) - [Claws are now a new layer on top of LLM agents](https://twitter.com/karpathy/status/2024987174077432126)
* [2026-02-21, 00:44:28](https://news.ycombinator.com/item?id=47096167) - [Gamedate – A site to revive dead multiplayer games](https://gamedate.org/)
* [2026-02-21, 00:35:31](https://lobste.rs/s/slfm4t/joinirc_at_link_your_irc_server_on_any) - [joinirc.at: Link to your IRC server on any client to onboard new users](https://joinirc.at)
* [2026-02-20, 22:47:58](https://news.ycombinator.com/item?id=47095105) - [A16z partner says that the theory that we’ll vibe code everything is wrong](https://www.aol.com/articles/a16z-partner-says-theory-well-050150534.html)
* [2026-02-20, 22:40:00](https://soylentnews.org/article.pl?sid=26/02/19/1712216&amp;from=rss) - [Bacteria Frozen Inside 5,000-Year-Old Ice Cave is Crazy Resistant to Antibiotics ](https://soylentnews.org/article.pl?sid=26/02/19/1712216&amp;from=rss)
* [2026-02-20, 20:40:14](https://lobste.rs/s/vpxzhe/i_found_vulnerability_they_found_lawyer) - [I found a Vulnerability. They found a Lawyer](https://dixken.de/blog/i-found-a-vulnerability-they-found-a-lawyer)
* [2026-02-20, 20:31:39](https://lobste.rs/s/gscaw3/turn_dependabot_off) - [Turn Dependabot Off](https://words.filippo.io/dependabot/)
* [2026-02-20, 19:18:35](https://lobste.rs/s/w1bsle/lobsters_interview_with_steveklabnik) - [Lobsters Interview with steveklabnik](https://alexalejandre.com/programming/steve-klabnik-interview/)
* [2026-02-20, 17:58:51](https://news.ycombinator.com/item?id=47091419) - [Keep Android Open](https://f-droid.org/2026/02/20/twif.html)
* [2026-02-20, 17:56:00](https://soylentnews.org/article.pl?sid=26/02/19/178226&amp;from=rss) - [OpenClaw Security Fears Lead Meta, Other AI Firms to Restrict its Use](https://soylentnews.org/article.pl?sid=26/02/19/178226&amp;from=rss)
* [2026-02-20, 13:13:00](https://soylentnews.org/article.pl?sid=26/02/19/1613238&amp;from=rss) - [Texas Sues Wi-Fi Router Maker Over Alleged China Links](https://soylentnews.org/article.pl?sid=26/02/19/1613238&amp;from=rss)
* [2026-02-20, 08:25:00](https://soylentnews.org/article.pl?sid=26/02/19/1617210&amp;from=rss) - [Data Centres Consider Backing Uranium Projects, NexGen CEO Says](https://soylentnews.org/article.pl?sid=26/02/19/1617210&amp;from=rss)
* [2026-02-20, 03:49:00](https://soylentnews.org/article.pl?sid=26/02/19/1610250&amp;from=rss) - [Password Managers Less Secure Than Promised](https://soylentnews.org/article.pl?sid=26/02/19/1610250&amp;from=rss)
* [2026-02-19, 22:56:00](https://soylentnews.org/article.pl?sid=26/02/18/0737205&amp;from=rss) - [Streaming Service Crunchyroll Raises Prices Weeks After Killing its Free Tier](https://soylentnews.org/article.pl?sid=26/02/18/0737205&amp;from=rss)
* [2026-02-19, 18:10:00](https://soylentnews.org/article.pl?sid=26/02/18/0735220&amp;from=rss) - [Ring Cancels Flock Deal After Dystopian Super Bowl Ad Prompts Mass Outrage](https://soylentnews.org/article.pl?sid=26/02/18/0735220&amp;from=rss)
* [2026-02-19, 15:14:18](https://news.ycombinator.com/item?id=47074671) - [How I launched 3 consoles and found true love at Babbage&apos;s store no. 9 (2013)](https://arstechnica.com/gadgets/2013/01/how-i-launched-3-consoles-and-found-true-love-at-babbages-store-no-9/)
* [2026-02-19, 13:24:00](https://soylentnews.org/article.pl?sid=26/02/18/0145204&amp;from=rss) - [What in the World Is Going on in Our Public Schools?](https://soylentnews.org/article.pl?sid=26/02/18/0145204&amp;from=rss)
* [2026-02-19, 08:32:00](https://soylentnews.org/article.pl?sid=26/02/18/0143232&amp;from=rss) - [Western Digital Has No More HDD Capacity Left, as CEO Reveals Massive AI Deals](https://soylentnews.org/article.pl?sid=26/02/18/0143232&amp;from=rss)
* [2026-02-19, 04:27:23](https://news.ycombinator.com/item?id=47069918) - [ReferenceFinder: Find coordinates on a piece of paper with only folds](https://mutsuntsai.github.io/reference-finder/)
* [2026-02-19, 03:55:00](https://soylentnews.org/article.pl?sid=26/02/18/0140215&amp;from=rss) - [Incredible Chinese Humanoid Robot Show on CCTV Chinese New Year TV Gala this Week](https://soylentnews.org/article.pl?sid=26/02/18/0140215&amp;from=rss)
* [2026-02-19, 03:50:09](https://news.ycombinator.com/item?id=47069682) - [The Biophysical World Inside a Jam-Packed Cell](https://www.quantamagazine.org/the-biophysical-world-inside-a-jam-packed-cell-20260218/)
* [2026-02-18, 23:08:00](https://soylentnews.org/article.pl?sid=26/02/17/1849228&amp;from=rss) - [How to Incentivize Problem Solving in Groups](https://soylentnews.org/article.pl?sid=26/02/17/1849228&amp;from=rss)
* [2026-02-18, 18:21:00](https://soylentnews.org/article.pl?sid=26/02/17/1842234&amp;from=rss) - [This Bonobo Just Did Something Scientists Thought Only Humans Could Do](https://soylentnews.org/article.pl?sid=26/02/17/1842234&amp;from=rss)
* [2026-02-18, 14:56:58](https://news.ycombinator.com/item?id=47061614) - [How far back in time can you understand English?](https://www.deadlanguagesociety.com/p/how-far-back-in-time-understand-english)
* [2026-02-18, 13:39:00](https://soylentnews.org/article.pl?sid=26/02/17/1321256&amp;from=rss) - [A Fluid Can Store Solar Energy and Then Release It as Heat Months Later](https://soylentnews.org/article.pl?sid=26/02/17/1321256&amp;from=rss)
* [2026-02-18, 12:34:52](https://news.ycombinator.com/item?id=47060334) - [Carelessness versus craftsmanship in cryptography](https://blog.trailofbits.com/2026/02/18/carelessness-versus-craftsmanship-in-cryptography/)
* [2026-02-18, 08:57:00](https://soylentnews.org/article.pl?sid=26/02/17/1319222&amp;from=rss) - [New ClickFix Attack Abuses Nslookup to Retrieve PowerShell Payload Via DNS](https://soylentnews.org/article.pl?sid=26/02/17/1319222&amp;from=rss)
* [2026-02-18, 04:09:00](https://soylentnews.org/article.pl?sid=26/02/16/2249254&amp;from=rss) - [Instruction Decoding in the Intel 8087 Floating-Point Chip](https://soylentnews.org/article.pl?sid=26/02/16/2249254&amp;from=rss)
