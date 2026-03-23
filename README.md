# [News Summary](https://kherrick.github.io/news-summary/)

## Advancements in Technology and AI

* [US Car Buyers Envy What They Cannot Have: Affordable Chinese EVs](https://tech.slashdot.org/story/26/03/23/1829217/us-car-buyers-envy-what-they-cannot-have-affordable-chinese-evs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Mark Zuckerberg Is Building an AI Agent To Help Him Be CEO](https://tech.slashdot.org/story/26/03/23/1759212/mark-zuckerberg-is-building-an-ai-agent-to-help-him-be-ceo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Will AI Force Source Code to Evolve - Or Make it Extinct?](https://developers.slashdot.org/story/26/03/23/0222218/will-ai-force-source-code-to-evolve---or-make-it-extinct?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [I built an AI receptionist for a mechanic shop](https://www.itsthatlady.dev/blog/building-an-ai-receptionist-for-my-brother/)

## Programming and Software Development

* [Rewriting a 20-year-old Python library](https://www.b-list.org/weblog/2026/mar/23/20-year-library/)

* [From error-handling to structured concurrency](https://blog.nelhage.com/post/concurrent-error-handling/)

* [Arturo programming language](https://arturo-lang.io/)

* [Threadprocs: executables sharing one address space (0-copy pointers)](https://github.com/jer-irl/threadprocs)

* [So Many New Systems Programming Languages II (2023)](https://colinsblog.net/2023-03-22-systems-languages-details/)

## Tech and Business Developments

* [Uber's Deal Blitz To Stop a Robotaxi Monopoly](https://tech.slashdot.org/story/26/03/23/0425234/ubers-deal-blitz-to-stop-a-robotaxi-monopoly?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [GrapheneOS Refuses to Comply with Age-Verification Laws](https://tech.slashdot.org/story/26/03/23/0116256/grapheneos-refuses-to-comply-with-age-verification-laws?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Some Microsoft Insiders Fight to Drop Windows 11's Microsoft Account Requirements](https://tech.slashdot.org/story/26/03/23/0030225/some-microsoft-insiders-fight-to-drop-windows-11s-microsoft-account-requirements?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Walmart Announces Digital Price Labels for Every Store in the U.S. By the End of 2026](https://slashdot.org/story/26/03/22/2346224/walmart-announces-digital-price-labels-for-every-store-in-the-us-by-the-end-of-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Cybersecurity and Industry Challenges

* [Cyberattack on vehicle breathalyzer company leaves drivers stranded in the US](https://techcrunch.com/2026/03/20/cyberattack-on-vehicle-breathalyzer-company-leaves-drivers-stranded-across-the-us/)

* [Invisible Malicious Code Attacks 151 GitHub Repos And VS Code — Glassworm Attack Uses Blockchain](https://soylentnews.org/article.pl?sid=26/03/19/1636248&amp;from=rss)

* [Cyber.mil serving file downloads using TLS certificate which expired 3 days ago](https://www.cyber.mil/stigs/downloads)

* [Trivy under attack again: Widespread GitHub Actions tag compromise secrets](https://socket.dev/blog/trivy-under-attack-again-github-actions-compromise)

## Society and Ethics

* [Reddit Is Weighing Identity Verification Methods To Combat Its Bot Problem](https://tech.slashdot.org/story/26/03/23/041250/reddit-is-weighing-identity-verification-methods-to-combat-its-bot-problem?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Proton Mail Helped FBI Unmask Anonymous ‘Stop Cop City’ Protester](https://soylentnews.org/article.pl?sid=26/03/21/1345242&amp;from=rss)

* [OnlyFans Owner Dies At 43](https://tech.slashdot.org/story/26/03/23/1624236/onlyfans-owner-dies-at-43?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [The Death of Character in Game Console Interfaces](https://vale.rocks/posts/game-console-interfaces)

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

* [2026-03-23, 19:00:00](https://tech.slashdot.org/story/26/03/23/1829217/us-car-buyers-envy-what-they-cannot-have-affordable-chinese-evs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Car Buyers Envy What They Cannot Have: Affordable Chinese EVs](https://tech.slashdot.org/story/26/03/23/1829217/us-car-buyers-envy-what-they-cannot-have-affordable-chinese-evs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 18:57:08](https://news.ycombinator.com/item?id=47493657) - [Local Stack Archived their GitHub repo and requires an account to run](https://github.com/localstack/localstack)
* [2026-03-23, 18:43:27](https://lobste.rs/s/jbyzxt/rewriting_20_year_old_python_library) - [Rewriting a 20-year-old Python library](https://www.b-list.org/weblog/2026/mar/23/20-year-library/)
* [2026-03-23, 18:40:58](https://news.ycombinator.com/item?id=47493460) - [I tried Karpathy&apos;s Autoresearch on an old research project](https://ykumar.me/blog/eclip-autoresearch/)
* [2026-03-23, 18:27:06](https://lobste.rs/s/rm0dux/history_uw_central_computing_cyber_era) - [A History of UW Central Computing: The Cyber Era](https://www.uwyo.edu/infotech/aboutit/history/cyber-era.asp)
* [2026-03-23, 18:00:00](https://tech.slashdot.org/story/26/03/23/1759212/mark-zuckerberg-is-building-an-ai-agent-to-help-him-be-ceo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mark Zuckerberg Is Building an AI Agent To Help Him Be CEO](https://tech.slashdot.org/story/26/03/23/1759212/mark-zuckerberg-is-building-an-ai-agent-to-help-him-be-ceo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 17:35:38](https://news.ycombinator.com/item?id=47492599) - [US govt pays TotalEnergies nearly $1B to stop US offshore wind projects](https://www.lemonde.fr/en/international/article/2026/03/23/us-and-totalenergies-reach-nearly-1-billion-deal-to-end-offshore-wind-projects_6751739_4.html)
* [2026-03-23, 17:02:00](https://soylentnews.org/article.pl?sid=26/03/22/1833208&amp;from=rss) - [Workers Who Love ‘Synergizing Paradigms’ Might be Bad at Their Jobs](https://soylentnews.org/article.pl?sid=26/03/22/1833208&amp;from=rss)
* [2026-03-23, 17:00:00](https://tech.slashdot.org/story/26/03/23/1537238/walmart-chatgpt-checkout-converted-3x-worse-than-website?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Walmart: ChatGPT Checkout Converted 3x Worse Than Website](https://tech.slashdot.org/story/26/03/23/1537238/walmart-chatgpt-checkout-converted-3x-worse-than-website?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 16:59:04](https://lobste.rs/s/jmfor8/from_error_handling_structured) - [From error-handling to structured concurrency](https://blog.nelhage.com/post/concurrent-error-handling/)
* [2026-03-23, 16:32:05](https://lobste.rs/s/e42ezg/arturo_programming_language) - [Arturo programming language](https://arturo-lang.io/)
* [2026-03-23, 16:30:00](https://tech.slashdot.org/story/26/03/23/1624236/onlyfans-owner-dies-at-43?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OnlyFans Owner Dies At 43](https://tech.slashdot.org/story/26/03/23/1624236/onlyfans-owner-dies-at-43?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 16:13:40](https://news.ycombinator.com/item?id=47491496) - [Is it a pint?](https://isitapint.com/)
* [2026-03-23, 16:08:01](https://news.ycombinator.com/item?id=47491414) - [Show HN: Threadprocs – executables sharing one address space (0-copy pointers)](https://github.com/jer-irl/threadprocs)
* [2026-03-23, 16:00:00](https://tech.slashdot.org/story/26/03/23/0425234/ubers-deal-blitz-to-stop-a-robotaxi-monopoly?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Uber&apos;s Deal Blitz To Stop a Robotaxi Monopoly](https://tech.slashdot.org/story/26/03/23/0425234/ubers-deal-blitz-to-stop-a-robotaxi-monopoly?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 15:25:04](https://news.ycombinator.com/item?id=47490816) - [Cyber.mil serving file downloads using TLS certificate which expired 3 days ago](https://www.cyber.mil/stigs/downloads)
* [2026-03-23, 15:04:47](https://lobste.rs/s/7dzkuh/generators_lone_lisp) - [Generators in lone lisp](https://www.matheusmoreira.com/articles/generators-in-lone-lisp)
* [2026-03-23, 14:52:52](https://news.ycombinator.com/item?id=47490365) - [If DSPy is so great, why isn&apos;t anyone using it?](https://skylarbpayne.com/posts/dspy-engineering-patterns/)
* [2026-03-23, 14:34:00](https://tech.slashdot.org/story/26/03/23/041250/reddit-is-weighing-identity-verification-methods-to-combat-its-bot-problem?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Reddit Is Weighing Identity Verification Methods To Combat Its Bot Problem](https://tech.slashdot.org/story/26/03/23/041250/reddit-is-weighing-identity-verification-methods-to-combat-its-bot-problem?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 14:30:45](https://lobste.rs/s/tuyk3l/semi_retirement_really_changing_my) - [Semi-retirement, or, really, changing my relationship with the BSDs](https://briancallahan.net/blog/20260322.html)
* [2026-03-23, 14:30:10](https://news.ycombinator.com/item?id=47490070) - [iPhone 17 Pro Demonstrated Running a 400B LLM](https://twitter.com/anemll/status/2035901335984611412)
* [2026-03-23, 14:14:41](https://lobste.rs/s/cxpn2j/markdown_ate_world) - [Markdown Ate the World](https://matduggan.com/markdown-ate-the-world/)
* [2026-03-23, 14:06:01](https://lobste.rs/s/i0cskl/incoherent_rust) - [An Incoherent Rust](https://www.boxyuwu.blog/posts/an-incoherent-rust/)
* [2026-03-23, 13:13:30](https://news.ycombinator.com/item?id=47489058) - [Cyberattack on vehicle breathalyzer company leaves drivers stranded in the US](https://techcrunch.com/2026/03/20/cyberattack-on-vehicle-breathalyzer-company-leaves-drivers-stranded-across-the-us/)
* [2026-03-23, 12:18:32](https://lobste.rs/s/1umutj/designing_spatula_haskell) - [Designing a Spatula (in Haskell)](https://www.youtube.com/watch?v=R_uQ7Y31e50)
* [2026-03-23, 12:17:00](https://soylentnews.org/article.pl?sid=26/03/22/1822230&amp;from=rss) - [Concerns Due to TrueNAS Moving its Build Repository to Private Servers](https://soylentnews.org/article.pl?sid=26/03/22/1822230&amp;from=rss)
* [2026-03-23, 12:12:53](https://lobste.rs/s/he8mhk/death_character_game_console_interfaces) - [The Death of Character in Game Console Interfaces](https://vale.rocks/posts/game-console-interfaces)
* [2026-03-23, 12:08:54](https://lobste.rs/s/tsxpzy/my_google_recruitment_journey_part_1) - [My Google Recruitment Journey (Part 1): Brute-Forcing My Algorithmic Ignorance](http://blog.dominikrudnik.pl/my-google-recruitment-journey-part-1)
* [2026-03-23, 11:54:39](https://lobste.rs/s/cwdzd6/gram_1_1_0_released) - [Gram 1.1.0 released](https://gram.liten.app/posts/release-1-1-0/)
* [2026-03-23, 11:15:11](https://lobste.rs/s/xsrgdn/gren_26_03_parser_improvements) - [Gren 26.03: Parser improvements](https://gren-lang.org/news/260323_gren_26_03)
* [2026-03-23, 10:39:39](https://news.ycombinator.com/item?id=47487584) - [GitHub appears to be struggling with measly three nines availability](https://www.theregister.com/2026/02/10/github_outages/)
* [2026-03-23, 10:34:00](https://developers.slashdot.org/story/26/03/23/0222218/will-ai-force-source-code-to-evolve---or-make-it-extinct?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Will AI Force Source Code to Evolve - Or Make it Extinct?](https://developers.slashdot.org/story/26/03/23/0222218/will-ai-force-source-code-to-evolve---or-make-it-extinct?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 10:32:33](https://news.ycombinator.com/item?id=47487536) - [I built an AI receptionist for a mechanic shop](https://www.itsthatlady.dev/blog/building-an-ai-receptionist-for-my-brother/)
* [2026-03-23, 10:17:32](https://news.ycombinator.com/item?id=47487436) - [Migrating to the EU](https://rz01.org/eu-migration/)
* [2026-03-23, 09:39:39](https://lobste.rs/s/sz4bzf/native_instant_space_switching_on_macos) - [Native Instant Space Switching on MacOS](https://arhan.sh/blog/native-instant-space-switching-on-macos/)
* [2026-03-23, 09:02:05](https://news.ycombinator.com/item?id=47486916) - [Digs: Offline-first iOS app to browse your Discogs vinyl collection](https://lustin.fr/blog/building-digs/)
* [2026-03-23, 08:21:57](https://news.ycombinator.com/item?id=47486680) - [Show HN: The King Wen Permutation: [52, 10, 2]](https://gzw1987-bit.github.io/iching-math/)
* [2026-03-23, 08:10:20](https://lobste.rs/s/sndfxf/way_ctrl_c_postgres_cli_cancels_queries_is) - [The way CTRL-C in Postgres CLI cancels queries is incredibly hack-y](https://neon.com/blog/ctrl-c-in-psql-gives-me-the-heebie-jeebies)
* [2026-03-23, 07:34:00](https://tech.slashdot.org/story/26/03/23/0116256/grapheneos-refuses-to-comply-with-age-verification-laws?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GrapheneOS Refuses to Comply with Age-Verification Laws](https://tech.slashdot.org/story/26/03/23/0116256/grapheneos-refuses-to-comply-with-age-verification-laws?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 07:32:00](https://soylentnews.org/article.pl?sid=26/03/21/1413247&amp;from=rss) - [Moltbook Was Peak AI Theater](https://soylentnews.org/article.pl?sid=26/03/21/1413247&amp;from=rss)
* [2026-03-23, 07:24:19](https://news.ycombinator.com/item?id=47486386) - [Two pilots dead after plane and ground vehicle collide at LaGuardia](https://www.bbc.com/news/articles/cy01g522ww4o)
* [2026-03-23, 05:01:30](https://lobste.rs/s/yc3olx/so_many_new_systems_programming) - [So Many New Systems Programming Languages II (2023)](https://colinsblog.net/2023-03-22-systems-languages-details/)
* [2026-03-23, 04:34:00](https://tech.slashdot.org/story/26/03/23/0030225/some-microsoft-insiders-fight-to-drop-windows-11s-microsoft-account-requirements?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Some Microsoft Insiders Fight to Drop Windows 11&apos;s Microsoft Account Requirements](https://tech.slashdot.org/story/26/03/23/0030225/some-microsoft-insiders-fight-to-drop-windows-11s-microsoft-account-requirements?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 02:42:00](https://soylentnews.org/article.pl?sid=26/03/21/145246&amp;from=rss) - [Commission Says EU Inc Will be in Place by End of 2026](https://soylentnews.org/article.pl?sid=26/03/21/145246&amp;from=rss)
* [2026-03-23, 01:43:45](https://news.ycombinator.com/item?id=47484519) - [“Collaboration” is bullshit](https://www.joanwestenberg.com/collaboration-is-bullshit/)
* [2026-03-23, 01:41:45](https://lobste.rs/s/xrwc0y/blessed_rs_recommended_crate_directory) - [blessed.rs - Recommended Crate Directory](https://blessed.rs/)
* [2026-03-23, 01:39:33](https://lobste.rs/s/1dufuw/whistler_live_ebpf_programming_from) - [Whistler: Live eBPF Programming from the Common Lisp REPL](https://atgreen.github.io/repl-yell/posts/whistler/)
* [2026-03-23, 01:34:00](https://slashdot.org/story/26/03/22/2346224/walmart-announces-digital-price-labels-for-every-store-in-the-us-by-the-end-of-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Walmart Announces Digital Price Labels for Every Store in the U.S. By the End of 2026](https://slashdot.org/story/26/03/22/2346224/walmart-announces-digital-price-labels-for-every-store-in-the-us-by-the-end-of-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-22, 22:55:00](https://tech.slashdot.org/story/26/03/22/2246209/trapped-inside-a-self-driving-car-during-an-anti-robot-attack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trapped! Inside a Self-Driving Car During an Anti-Robot Attack](https://tech.slashdot.org/story/26/03/22/2246209/trapped-inside-a-self-driving-car-during-an-anti-robot-attack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-22, 22:32:15](https://lobste.rs/s/n1h2tl/is_local_future_ai) - [Is Local the Future of AI?](https://tombedor.dev/open-source-models/)
* [2026-03-22, 21:55:33](https://lobste.rs/s/g4sj0m/diminished_art_coding) - [The diminished art of coding](https://nolanlawson.com/2026/03/22/the-diminished-art-of-coding/)
* [2026-03-22, 21:55:00](https://hardware.slashdot.org/story/26/03/22/2151236/elon-musk-announces-20b-terafab-chip-plant-in-texas-to-supply-his-companies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Elon Musk Announces $20B &apos;Terafab&apos; Chip Plant in Texas To Supply His Companies](https://hardware.slashdot.org/story/26/03/22/2151236/elon-musk-announces-20b-terafab-chip-plant-in-texas-to-supply-his-companies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-22, 21:54:00](https://soylentnews.org/article.pl?sid=26/03/21/1345242&amp;from=rss) - [Proton Mail Helped FBI Unmask Anonymous ‘Stop Cop City’ Protester](https://soylentnews.org/article.pl?sid=26/03/21/1345242&amp;from=rss)
* [2026-03-22, 20:34:00](https://yro.slashdot.org/story/26/03/22/2025249/tech-leaders-support-california-bill-to-stop-dominant-platforms-from-blocking-competition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tech Leaders Support California Bill to Stop &apos;Dominant Platforms&apos; From Blocking Competition](https://yro.slashdot.org/story/26/03/22/2025249/tech-leaders-support-california-bill-to-stop-dominant-platforms-from-blocking-competition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-22, 19:19:00](https://apple.slashdot.org/story/26/03/22/1917223/why-apple-temporarily-blocked-popular-vibe-coding-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Apple Temporarily Blocked Popular Vibe Coding Apps](https://apple.slashdot.org/story/26/03/22/1917223/why-apple-temporarily-blocked-popular-vibe-coding-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-22, 19:02:43](https://news.ycombinator.com/item?id=47480886) - [The gold standard of optimization: A look under the hood of RollerCoaster Tycoon](https://larstofus.com/2026/03/22/the-gold-standard-of-optimization-a-look-under-the-hood-of-rollercoaster-tycoon/)
* [2026-03-22, 18:23:40](https://news.ycombinator.com/item?id=47480507) - [PC Gamer recommends RSS readers in a 37mb article that just keeps downloading](https://stuartbreckenridge.net/2026-03-19-pc-gamer-recommends-rss-readers-in-a-37mb-article/)
* [2026-03-22, 17:55:00](https://entertainment.slashdot.org/story/26/03/22/1752237/william-shatner-celebrates-95th-birthday-smokes-cigar-revisits-rocket-man-and-tests-x-money?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [William Shatner Celebrates 95th Birthday, Smokes Cigar, Revisits &apos;Rocket Man&apos; and Tests X Money](https://entertainment.slashdot.org/story/26/03/22/1752237/william-shatner-celebrates-95th-birthday-smokes-cigar-revisits-rocket-man-and-tests-x-money?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-22, 17:09:00](https://soylentnews.org/article.pl?sid=26/03/21/1339251&amp;from=rss) - [Wayland Set the Linux Desktop Back by 10 Years](https://soylentnews.org/article.pl?sid=26/03/21/1339251&amp;from=rss)
* [2026-03-22, 16:38:38](https://lobste.rs/s/702zix/let_s_see_paul_allen_s_simd_csv_parser) - [Let&apos;s see Paul Allen&apos;s SIMD CSV parser](https://chunkofcoal.com/posts/simd-csv/)
* [2026-03-22, 16:18:42](https://lobste.rs/s/qhtpe5/slow_collapse_mkdocs) - [The Slow Collapse of MkDocs](https://fpgmaas.com/blog/collapse-of-mkdocs/)
* [2026-03-22, 15:29:02](https://lobste.rs/s/w2x9dq/case_against_currying) - [A Case Against Currying](https://emi-h.com/articles/a-case-against-currying.html)
* [2026-03-22, 15:16:28](https://news.ycombinator.com/item?id=47478401) - [The future of version control](https://bramcohen.com/p/manyana)
* [2026-03-22, 15:15:46](https://lobste.rs/s/1vcuqm/manyana_coherent_vision_for_future) - [Manyana: A Coherent Vision For The Future Of Version Control](https://bramcohen.com/p/manyana)
* [2026-03-22, 13:30:45](https://lobste.rs/s/xpek6g/windows_native_app_development_is_mess) - [Windows Native App Development Is a Mess](https://domenic.me/windows-native-dev/)
* [2026-03-22, 12:22:00](https://soylentnews.org/article.pl?sid=26/03/21/1337239&amp;from=rss) - [Analysis From West Point Warns That Strait of Hormuz Blockade Will Strangle US Defense Industry](https://soylentnews.org/article.pl?sid=26/03/21/1337239&amp;from=rss)
* [2026-03-22, 11:09:34](https://news.ycombinator.com/item?id=47476315) - [Reports of code&apos;s death are greatly exaggerated](https://stevekrouse.com/precision)
* [2026-03-22, 09:45:14](https://news.ycombinator.com/item?id=47475888) - [Trivy under attack again: Widespread GitHub Actions tag compromise secrets](https://socket.dev/blog/trivy-under-attack-again-github-actions-compromise)
* [2026-03-22, 07:37:00](https://soylentnews.org/article.pl?sid=26/03/21/1319201&amp;from=rss) - [This Fungus Can Make Water Freeze](https://soylentnews.org/article.pl?sid=26/03/21/1319201&amp;from=rss)
* [2026-03-22, 02:52:00](https://soylentnews.org/article.pl?sid=26/03/19/208240&amp;from=rss) - [Tech Hobbyist Makes Shoulder-Mounted Guided Missile Prototype With $96 In Parts And A 3D Printer](https://soylentnews.org/article.pl?sid=26/03/19/208240&amp;from=rss)
* [2026-03-21, 22:07:00](https://soylentnews.org/article.pl?sid=26/03/19/205228&amp;from=rss) - [Nearly Half of UK Adults Happy to Use ChatGPT as a Counsellor](https://soylentnews.org/article.pl?sid=26/03/19/205228&amp;from=rss)
* [2026-03-21, 17:22:00](https://soylentnews.org/article.pl?sid=26/03/19/203221&amp;from=rss) - [Nvidia Resumes Manufacturing of H200 Chips for China, CEO Says](https://soylentnews.org/article.pl?sid=26/03/19/203221&amp;from=rss)
* [2026-03-21, 12:40:00](https://soylentnews.org/article.pl?sid=26/03/19/201233&amp;from=rss) - [Tundra Tongue: The Science Behind a Very Cold Mistake](https://soylentnews.org/article.pl?sid=26/03/19/201233&amp;from=rss)
* [2026-03-21, 07:55:00](https://soylentnews.org/article.pl?sid=26/03/19/1958201&amp;from=rss) - [Afroman Wins &apos;Lemon Pound Cake&apos; Lawsuit Over Raid-Turned-Music-Video](https://soylentnews.org/article.pl?sid=26/03/19/1958201&amp;from=rss)
* [2026-03-21, 03:07:00](https://soylentnews.org/article.pl?sid=26/03/19/1638217&amp;from=rss) - [How Should We Define Mathematical Beauty in the AI Age?](https://soylentnews.org/article.pl?sid=26/03/19/1638217&amp;from=rss)
* [2026-03-20, 22:15:00](https://soylentnews.org/article.pl?sid=26/03/19/1636248&amp;from=rss) - [Invisible Malicious Code Attacks 151 GitHub Repos And VS Code — Glassworm Attack Uses Blockchain](https://soylentnews.org/article.pl?sid=26/03/19/1636248&amp;from=rss)
* [2026-03-20, 19:20:49](https://news.ycombinator.com/item?id=47459363) - [BIO: The Bao I/O Coprocessor](https://www.bunniestudios.com/blog/2026/bio-the-bao-i-o-coprocessor/)
* [2026-03-20, 17:59:35](https://news.ycombinator.com/item?id=47458248) - [General Motors is assisting with the restoration of a rare EV1](https://evinfo.net/2026/03/general-motors-is-assisting-with-the-restoration-of-an-1996-ev1/)
* [2026-03-20, 17:53:00](https://soylentnews.org/article.pl?sid=26/03/19/1635218&amp;from=rss) - [Researchers Played Music to Cells – Aggressiveness of Laryngeal Cancer Decreased](https://soylentnews.org/article.pl?sid=26/03/19/1635218&amp;from=rss)
* [2026-03-20, 14:02:14](https://news.ycombinator.com/item?id=47454647) - [Tin Can, a &apos;landline&apos; for kids](https://www.businessinsider.com/tin-can-landline-kids-cellphone-cell-alternative-how-2025-9)
* [2026-03-20, 12:46:00](https://soylentnews.org/article.pl?sid=26/03/19/0318230&amp;from=rss) - [Elon Musk Says His Chipmaking &apos;Terafab Project&apos; Venture Will Launch in Seven Days](https://soylentnews.org/article.pl?sid=26/03/19/0318230&amp;from=rss)
* [2026-03-20, 12:11:35](https://news.ycombinator.com/item?id=47453462) - [Can you get root with only a cigarette lighter? (2024)](https://www.da.vidbuchanan.co.uk/blog/dram-emfi.html)
* [2026-03-20, 07:57:00](https://soylentnews.org/article.pl?sid=26/03/19/0310236&amp;from=rss) - [Massive Interpol Operation Takes Down 45,000 Ip Addresses and Leads to 94 Arrests](https://soylentnews.org/article.pl?sid=26/03/19/0310236&amp;from=rss)
* [2026-03-20, 03:11:00](https://soylentnews.org/article.pl?sid=26/03/19/035202&amp;from=rss) - [The Ongoing Strait of Hormuz Blockage Will Impact the Semiconductor and AI Industries](https://soylentnews.org/article.pl?sid=26/03/19/035202&amp;from=rss)
* [2026-03-19, 22:23:00](https://soylentnews.org/article.pl?sid=26/03/19/0258237&amp;from=rss) - [Over Fifteen Years Later, Microsoft Morged My Diagram](https://soylentnews.org/article.pl?sid=26/03/19/0258237&amp;from=rss)
* [2026-03-19, 19:42:35](https://news.ycombinator.com/item?id=47444812) - [Walmart: ChatGPT checkout converted 3x worse than website](https://searchengineland.com/walmart-chatgpt-checkout-converted-worse-472071)
* [2026-03-19, 18:40:02](https://news.ycombinator.com/item?id=47443903) - [The quadratic problem nobody fixed](https://iev.ee/blog/the-quadratic-problem-nobody-fixed/)
* [2026-03-19, 17:38:00](https://soylentnews.org/article.pl?sid=26/03/18/1530220&amp;from=rss) - [Predicted by Einstein 100 Years Ago, This Cosmic Phenomenon Has Finally Been Observed](https://soylentnews.org/article.pl?sid=26/03/18/1530220&amp;from=rss)
* [2026-03-19, 12:53:00](https://soylentnews.org/article.pl?sid=26/03/18/1524211&amp;from=rss) - [100 Years Later, Where is Robert Goddard&apos;s First Liquid-Fuel Rocket?](https://soylentnews.org/article.pl?sid=26/03/18/1524211&amp;from=rss)
* [2026-03-19, 10:00:42](https://news.ycombinator.com/item?id=47437005) - [An unsolicited guide to being a researcher [pdf]](https://emerge-lab.github.io/papers/an-unsolicited-guide-to-good-research.pdf)
* [2026-03-19, 08:53:36](https://news.ycombinator.com/item?id=47436592) - [Bombadil: Property-based testing for web UIs](https://github.com/antithesishq/bombadil)
* [2026-03-19, 08:08:00](https://soylentnews.org/article.pl?sid=26/03/18/1522208&amp;from=rss) - [The Science of How Fireflies Stay in Sync](https://soylentnews.org/article.pl?sid=26/03/18/1522208&amp;from=rss)
* [2026-03-19, 03:23:00](https://soylentnews.org/article.pl?sid=26/03/17/0844255&amp;from=rss) - [Humanities in the Machine](https://soylentnews.org/article.pl?sid=26/03/17/0844255&amp;from=rss)
