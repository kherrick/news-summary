# [News Summary](https://kherrick.github.io/news-summary/)

## Technical Advancements and Announcements

* [Magika 1.0 Goes Stable As Google Rebuilds Its File Detection Tool In Rust](https://developers.slashdot.org/story/25/11/07/005225/magika-10-goes-stable-as-google-rebuilds-its-file-detection-tool-in-rust?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Announcing Magika 1.0: now faster, smarter, and rebuilt in Rust](https://opensource.googleblog.com/2025/11/announcing-magika-10-now-faster-smarter.html)

* [Kimi K2 Thinking, a SOTA open-source trillion-parameter reasoning model](https://moonshotai.github.io/Kimi-K2/thinking.html)

* [Building blobd: single-machine object store with sub-millisecond reads and 15 GB/s uploads](https://blog.wilsonl.in/blobd/)

* [Ikea's Big Smart Home Push Arrives With 21 New Matter Devices](https://mobile.slashdot.org/story/25/11/07/0112202/ikeas-big-smart-home-push-arrives-with-21-new-matter-devices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## AI and Machine Learning Insights

* [Microsoft Forms Superintelligence Team Under AI Chief Suleyman 'To Serve Humanity'](https://slashdot.org/story/25/11/06/2326229/microsoft-forms-superintelligence-team-under-ai-chief-suleyman-to-serve-humanity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Sweep (YC S23) is hiring to build autocomplete for JetBrains](https://www.ycombinator.com/companies/sweep/jobs/8dUn406-founding-engineer-intern)

* [Amazon is Testing an AI Tool That Automatically Translates Books Into Other Languages](https://news.slashdot.org/story/25/11/06/1931204/amazon-is-testing-an-ai-tool-that-automatically-translates-books-into-other-languages?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Gaming and Entertainment

* [Grand Theft Auto 6 Delayed Again Until November 2026](https://games.slashdot.org/story/25/11/07/147245/grand-theft-auto-6-delayed-again-until-november-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [I'm Making a Small RPG and I Need Feeback Regarding Performance](https://jslegenddev.substack.com/p/im-making-a-small-rpg-and-i-need)

* [OpenMW 0.50.0 Released – open-source Morrowind reimplementation](https://openmw.org/2025/openmw-0-50-0-released/)

* [Why Does So Much New Technology Feel Inspired by Dystopian Sci-Fi Movies?](https://entertainment.slashdot.org/story/25/11/07/0057237/why-does-so-much-new-technology-feel-inspired-by-dystopian-sci-fi-movies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Cybersecurity and Privacy

* [US Congressional Budget Office Hit By Suspected Foreign Cyberattack](https://it.slashdot.org/story/25/11/07/0115221/us-congressional-budget-office-hit-by-suspected-foreign-cyberattack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Cloudflare Tells US Govt That Foreign Site Blocking Efforts Are Digital Trade Barriers](https://yro.slashdot.org/story/25/11/06/2244238/cloudflare-tells-us-govt-that-foreign-site-blocking-efforts-are-digital-trade-barriers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Two billion email addresses were exposed](https://www.troyhunt.com/2-billion-email-addresses-were-exposed-and-we-indexed-them-all-in-have-i-been-pwned/)

## Environmental Developments

* [Ford Considers Scrapping F-150 EV Truck](https://tech.slashdot.org/story/25/11/06/2358231/ford-considers-scrapping-f-150-ev-truck?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [How the US Cut Climate-Changing Emissions While Its Economy More Than Doubled](https://hardware.slashdot.org/story/25/11/07/0029244/how-the-us-cut-climate-changing-emissions-while-its-economy-more-than-doubled?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Australian Law To Require EV Cars To Be Noisy For Blind People](https://soylentnews.org/article.pl?sid=25/11/05/1549218&amp;from=rss)

## Open Source and Tech Development

* [Debian Introduces Rust Toolchain Dependencies to Apt](https://soylentnews.org/article.pl?sid=25/11/04/0220218&amp;from=rss)

* [Mastodon 4.5](https://blog.joinmastodon.org/2025/11/mastodon-4.5/)

* [GNOME Mutter Now "Completely Drops the Whole X11 Backend"](https://soylentnews.org/article.pl?sid=25/11/06/0331241&amp;from=rss)

## Science and Space Exploration

* [Tiny Electric Motor is as Powerful as Four Tesla Motors Put Together](https://soylentnews.org/article.pl?sid=25/11/05/1530214&amp;from=rss)

* [We're About to Find Many More Interstellar Interlopers—Here's How to Visit One](https://soylentnews.org/article.pl?sid=25/11/04/0214241&amp;from=rss)

* [World's Largest Wind-Powered Cargo Ship Takes to the Seas](https://soylentnews.org/article.pl?sid=25/11/04/0243254&amp;from=rss)

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

* [2025-11-07, 15:21:00](https://tech.slashdot.org/story/25/11/07/1414219/polymarket-volume-inflated-by-artificial-activity-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Polymarket Volume Inflated by &apos;Artificial&apos; Activity, Study Finds](https://tech.slashdot.org/story/25/11/07/1414219/polymarket-volume-inflated-by-artificial-activity-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-07, 14:41:00](https://games.slashdot.org/story/25/11/07/147245/grand-theft-auto-6-delayed-again-until-november-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Grand Theft Auto 6 Delayed Again Until November 2026](https://games.slashdot.org/story/25/11/07/147245/grand-theft-auto-6-delayed-again-until-november-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-07, 14:31:07](https://news.ycombinator.com/item?id=45846769) - [Claude Is Down](https://status.claude.com/incidents/tgtw1sqs9ths)
* [2025-11-07, 14:28:21](https://lobste.rs/s/08srpl/announcing_magika_1_0_now_faster_smarter) - [Announcing Magika 1.0: now faster, smarter, and rebuilt in Rust](https://opensource.googleblog.com/2025/11/announcing-magika-10-now-faster-smarter.html)
* [2025-11-07, 14:09:00](https://soylentnews.org/article.pl?sid=25/11/06/0257203&amp;from=rss) - [Ubuntu Certification Now Available Through Canonical Academy](https://soylentnews.org/article.pl?sid=25/11/06/0257203&amp;from=rss)
* [2025-11-07, 14:05:49](https://news.ycombinator.com/item?id=45846517) - [I Love OCaml](https://mccd.space/posts/ocaml-the-worlds-best/)
* [2025-11-07, 14:05:14](https://lobste.rs/s/aow9dx/slow_software_for_burning_world) - [Slow Software for a Burning World](https://bonfirenetworks.org/posts/slow-software-for-a-burning-world/)
* [2025-11-07, 14:00:00](https://slashdot.org/story/25/11/07/1227231/dutch-ready-to-drop-nexperia-control-if-chip-supply-resumes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dutch Ready To Drop Nexperia Control If Chip Supply Resumes](https://slashdot.org/story/25/11/07/1227231/dutch-ready-to-drop-nexperia-control-if-chip-supply-resumes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-07, 13:52:39](https://news.ycombinator.com/item?id=45846360) - [I&apos;m Making a Small RPG and I Need Feeback Regarding Performance](https://jslegenddev.substack.com/p/im-making-a-small-rpg-and-i-need)
* [2025-11-07, 13:25:27](https://news.ycombinator.com/item?id=45846090) - [OpenMW 0.50.0 Released – open-source Morrowind reimplementation](https://openmw.org/2025/openmw-0-50-0-released/)
* [2025-11-07, 13:10:49](https://news.ycombinator.com/item?id=45845958) - [We chose OCaml to write Stategraph](https://stategraph.dev/blog/why-we-chose-ocaml)
* [2025-11-07, 13:09:07](https://news.ycombinator.com/item?id=45845948) - [Is Software the UFOlogy of Engineering Disciplines?](https://codemanship.wordpress.com/2025/11/07/is-software-the-ufology-of-engineering-disciplines/)
* [2025-11-07, 13:00:00](https://it.slashdot.org/story/25/11/07/0115221/us-congressional-budget-office-hit-by-suspected-foreign-cyberattack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Congressional Budget Office Hit By Suspected Foreign Cyberattack](https://it.slashdot.org/story/25/11/07/0115221/us-congressional-budget-office-hit-by-suspected-foreign-cyberattack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-07, 12:43:49](https://news.ycombinator.com/item?id=45845800) - [From Memorization to Reasoning in the Spectrum of Loss Curvature](https://arxiv.org/abs/2510.24256)
* [2025-11-07, 12:39:54](https://news.ycombinator.com/item?id=45845772) - [Meta projected 10% of 2024 revenue came from scams](https://sherwood.news/tech/meta-projected-10-of-2024-revenue-came-from-scams-and-banned-goods-reuters/)
* [2025-11-07, 12:26:05](https://lobste.rs/s/swncgw/why_i_don_t_test_different_designs_at_same) - [Why I don’t test different designs at the same time](https://adamsilver.io/blog/why-i-dont-test-different-designs-at-the-same-time/)
* [2025-11-07, 12:06:14](https://lobste.rs/s/5lrv8d/kroxylicious) - [Kroxylicious](https://kroxylicious.io/overview/)
* [2025-11-07, 12:00:40](https://news.ycombinator.com/item?id=45845568) - [Sweep (YC S23) is hiring to build autocomplete for JetBrains](https://www.ycombinator.com/companies/sweep/jobs/8dUn406-founding-engineer-intern)
* [2025-11-07, 11:20:14](https://lobste.rs/s/fikz3p/typst_unlit_write_literate_haskell) - [Typst-Unlit: Write literate Haskell programs in Typst](https://cdn.oppi.li/typst-unlit.pdf)
* [2025-11-07, 10:59:03](https://lobste.rs/s/mkquz5/error_codes_for_control_flow) - [Error Codes for Control Flow](https://matklad.github.io/2025/11/06/error-codes-for-control-flow.html)
* [2025-11-07, 10:21:32](https://lobste.rs/s/ycn6zq/how_this_site_is_build) - [How This Site Is Build](https://ryan.freumh.org/how-this-site-is-built.html)
* [2025-11-07, 10:00:00](https://mobile.slashdot.org/story/25/11/07/0112202/ikeas-big-smart-home-push-arrives-with-21-new-matter-devices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ikea&apos;s Big Smart Home Push Arrives With 21 New Matter Devices](https://mobile.slashdot.org/story/25/11/07/0112202/ikeas-big-smart-home-push-arrives-with-21-new-matter-devices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-07, 09:57:04](https://lobste.rs/s/eghbhu/linking_shrinking_rust_static_libraries) - [Linking and shrinking Rust static libraries: a tale of fire](https://centricular.com/devlog/2025-11/dragonfire/)
* [2025-11-07, 09:28:00](https://soylentnews.org/article.pl?sid=25/11/05/1549218&amp;from=rss) - [Australian Law To Require EV Cars To Be Noisy For Blind People](https://soylentnews.org/article.pl?sid=25/11/05/1549218&amp;from=rss)
* [2025-11-07, 09:19:01](https://lobste.rs/s/i0rf97/introduction_incusos) - [Introduction to IncusOS](https://linuxcontainers.org/incus-os/)
* [2025-11-07, 09:02:03](https://lobste.rs/s/jrg7nx/ai_s_70_problem) - [AI&apos;s 70% Problem](https://zed.dev/blog/ai-70-problem-addy-osmani)
* [2025-11-07, 07:09:30](https://news.ycombinator.com/item?id=45844197) - [Lessons from Growing a Piracy Streaming Site](https://prison.josh.mn/lessons)
* [2025-11-07, 07:00:00](https://entertainment.slashdot.org/story/25/11/07/0057237/why-does-so-much-new-technology-feel-inspired-by-dystopian-sci-fi-movies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Does So Much New Technology Feel Inspired by Dystopian Sci-Fi Movies?](https://entertainment.slashdot.org/story/25/11/07/0057237/why-does-so-much-new-technology-feel-inspired-by-dystopian-sci-fi-movies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-07, 06:14:50](https://news.ycombinator.com/item?id=45843948) - [Leaving Meta and PyTorch](https://soumith.ch/blog/2025-11-06-leaving-meta-and-pytorch.md.html)
* [2025-11-07, 04:46:00](https://soylentnews.org/article.pl?sid=25/11/05/1540235&amp;from=rss) - [7 Basic Science Discoveries That Changed the World](https://soylentnews.org/article.pl?sid=25/11/05/1540235&amp;from=rss)
* [2025-11-07, 04:38:40](https://news.ycombinator.com/item?id=45843603) - [JermCAD: Browser-Based CAD Software](https://github.com/jeremyaboyd/jerm-cad)
* [2025-11-07, 03:30:00](https://tech.slashdot.org/story/25/11/07/0044201/mark-zuckerberg-opened-an-illegal-school-at-his-palo-alto-compound-his-neighbor-revolted?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mark Zuckerberg Opened an Illegal School At His Palo Alto Compound. His Neighbor Revolted](https://tech.slashdot.org/story/25/11/07/0044201/mark-zuckerberg-opened-an-illegal-school-at-his-palo-alto-compound-his-neighbor-revolted?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-07, 03:01:32](https://news.ycombinator.com/item?id=45843146) - [A Fond Farewell](https://www.farmersalmanac.com/fond-farewell-from-farmers-almanac)
* [2025-11-07, 01:25:00](https://hardware.slashdot.org/story/25/11/07/0029244/how-the-us-cut-climate-changing-emissions-while-its-economy-more-than-doubled?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How the US Cut Climate-Changing Emissions While Its Economy More Than Doubled](https://hardware.slashdot.org/story/25/11/07/0029244/how-the-us-cut-climate-changing-emissions-while-its-economy-more-than-doubled?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-07, 00:45:00](https://tech.slashdot.org/story/25/11/06/2358231/ford-considers-scrapping-f-150-ev-truck?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ford Considers Scrapping F-150 EV Truck](https://tech.slashdot.org/story/25/11/06/2358231/ford-considers-scrapping-f-150-ev-truck?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-07, 00:23:00](https://developers.slashdot.org/story/25/11/07/005225/magika-10-goes-stable-as-google-rebuilds-its-file-detection-tool-in-rust?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Magika 1.0 Goes Stable As Google Rebuilds Its File Detection Tool In Rust](https://developers.slashdot.org/story/25/11/07/005225/magika-10-goes-stable-as-google-rebuilds-its-file-detection-tool-in-rust?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-07, 00:02:00](https://yro.slashdot.org/story/25/11/06/2344248/why-sam-altman-was-booted-from-openai-according-to-new-testimony?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Sam Altman Was Booted From OpenAI, According To New Testimony](https://yro.slashdot.org/story/25/11/06/2344248/why-sam-altman-was-booted-from-openai-according-to-new-testimony?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-07, 00:01:00](https://soylentnews.org/article.pl?sid=25/11/06/0331241&amp;from=rss) - [GNOME Mutter Now \&quot;Completely Drops the Whole X11 Backend\&quot;](https://soylentnews.org/article.pl?sid=25/11/06/0331241&amp;from=rss)
* [2025-11-06, 23:45:00](https://slashdot.org/story/25/11/06/2326229/microsoft-forms-superintelligence-team-under-ai-chief-suleyman-to-serve-humanity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Forms Superintelligence Team Under AI Chief Suleyman &apos;To Serve Humanity&apos;](https://slashdot.org/story/25/11/06/2326229/microsoft-forms-superintelligence-team-under-ai-chief-suleyman-to-serve-humanity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-06, 23:25:00](https://slashdot.org/story/25/11/06/2250226/ios-262-to-allow-third-party-app-stores-in-japan-ahead-of-regulatory-deadline?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [iOS 26.2 to Allow Third-Party App Stores in Japan Ahead of Regulatory Deadline](https://slashdot.org/story/25/11/06/2250226/ios-262-to-allow-third-party-app-stores-in-japan-ahead-of-regulatory-deadline?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-06, 23:16:09](https://lobste.rs/s/k9a16c/what_hell_have_you_built) - [What the hell have you built](https://wthhyb.sacha.house/)
* [2025-11-06, 22:47:52](https://lobste.rs/s/l5nsnw/unix_v4_tape_found_at_university_utah) - [Unix V4 tape found at The University of Utah](https://discuss.systems/@ricci/115504720054699983)
* [2025-11-06, 22:45:00](https://yro.slashdot.org/story/25/11/06/2244238/cloudflare-tells-us-govt-that-foreign-site-blocking-efforts-are-digital-trade-barriers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cloudflare Tells US Govt That Foreign Site Blocking Efforts Are Digital Trade Barriers](https://yro.slashdot.org/story/25/11/06/2244238/cloudflare-tells-us-govt-that-foreign-site-blocking-efforts-are-digital-trade-barriers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-06, 22:39:40](https://lobste.rs/s/kudguy/i_use_typst_now) - [I use Typst now](https://www.christopherbiscardi.com/i-use-typst-now)
* [2025-11-06, 22:24:23](https://news.ycombinator.com/item?id=45841262) - [Game design is simple](https://www.raphkoster.com/2025/11/03/game-design-is-simple-actually/)
* [2025-11-06, 21:30:00](https://news.slashdot.org/story/25/11/06/1931204/amazon-is-testing-an-ai-tool-that-automatically-translates-books-into-other-languages?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon is Testing an AI Tool That Automatically Translates Books Into Other Languages](https://news.slashdot.org/story/25/11/06/1931204/amazon-is-testing-an-ai-tool-that-automatically-translates-books-into-other-languages?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-06, 20:45:39](https://news.ycombinator.com/item?id=45840200) - [Analysis indicates that the universe’s expansion is not accelerating](https://ras.ac.uk/news-and-press/research-highlights/universes-expansion-now-slowing-not-speeding)
* [2025-11-06, 20:37:06](https://news.ycombinator.com/item?id=45840088) - [You should write an agent](https://fly.io/blog/everyone-write-an-agent/)
* [2025-11-06, 20:25:16](https://lobste.rs/s/v3oxx8/you_should_write_agent) - [You Should Write An Agent](https://fly.io/blog/everyone-write-an-agent/)
* [2025-11-06, 20:20:23](https://news.ycombinator.com/item?id=45839901) - [Two billion email addresses were exposed](https://www.troyhunt.com/2-billion-email-addresses-were-exposed-and-we-indexed-them-all-in-have-i-been-pwned/)
* [2025-11-06, 19:45:49](https://lobste.rs/s/jzj4mw/when_your_hash_becomes_string_hunting) - [When Your Hash Becomes a String: Hunting a Ruby Million-to-One Memory Bug](https://mensfeld.pl/2025/11/ruby-ffi-gc-bug-hash-becomes-string/)
* [2025-11-06, 19:23:24](https://lobste.rs/s/zvyspo/mastodon_4_5) - [Mastodon 4.5](https://blog.joinmastodon.org/2025/11/mastodon-4.5/)
* [2025-11-06, 19:17:00](https://soylentnews.org/article.pl?sid=25/11/05/1530214&amp;from=rss) - [Tiny Electric Motor is as Powerful as Four Tesla Motors Put Together](https://soylentnews.org/article.pl?sid=25/11/05/1530214&amp;from=rss)
* [2025-11-06, 18:38:40](https://lobste.rs/s/i67ufs/code_research_projects_with_async_coding) - [Code research projects with async coding agents like Claude Code and Codex](https://simonwillison.net/2025/Nov/6/async-code-research/)
* [2025-11-06, 16:49:03](https://lobste.rs/s/ct8jav/file_format_uncracked_for_20_years) - [A File Format Uncracked for 20 Years](https://landaire.net/a-file-format-uncracked-for-20-years/)
* [2025-11-06, 15:51:24](https://lobste.rs/s/gntidf/firefox_forcing_llm_features) - [Firefox Forcing LLM Features](https://equk.co.uk/2025/10/28/firefox-forcing-llm-features/)
* [2025-11-06, 15:06:06](https://news.ycombinator.com/item?id=45836070) - [Kimi K2 Thinking, a SOTA open-source trillion-parameter reasoning model](https://moonshotai.github.io/Kimi-K2/thinking.html)
* [2025-11-06, 14:49:40](https://lobste.rs/s/7quq6b/upgrade_puma_7_unlock_power_fair) - [Upgrade to Puma 7 and Unlock the Power of Fair Scheduled Keep-alive](https://www.heroku.com/blog/upgrade-to-puma-7-and-unlock-the-power-of-fair-scheduled-keep-alive/)
* [2025-11-06, 14:31:00](https://soylentnews.org/article.pl?sid=25/11/05/1242201&amp;from=rss) - [Canada Says Hacktivists Breached Water and Energy Facilities](https://soylentnews.org/article.pl?sid=25/11/05/1242201&amp;from=rss)
* [2025-11-06, 14:15:11](https://lobste.rs/s/yr6l6l/building_blobd_single_machine_object) - [Building blobd: single-machine object store with sub-millisecond reads and 15 GB/s uploads](https://blog.wilsonl.in/blobd/)
* [2025-11-06, 13:04:34](https://lobste.rs/s/khcpvl/jujutsu_v0_35_0_released) - [jujutsu v0.35.0 released](https://github.com/jj-vcs/jj/releases/tag/v0.35.0)
* [2025-11-06, 12:03:39](https://lobste.rs/s/7xyd7l/how_i_fell_love_with_calendar_txt) - [How I fell in love with calendar.txt](https://ploum.net/2025-09-03-calendar-txt.html)
* [2025-11-06, 11:24:16](https://lobste.rs/s/ywvatn/note_on_fil_c) - [A note on Fil-C](https://graydon2.dreamwidth.org/320265.html)
* [2025-11-06, 09:42:00](https://soylentnews.org/article.pl?sid=25/11/05/1236251&amp;from=rss) - [What Happened to Running What You Wanted on Your Own Machine?](https://soylentnews.org/article.pl?sid=25/11/05/1236251&amp;from=rss)
* [2025-11-06, 05:00:00](https://soylentnews.org/article.pl?sid=25/11/04/0243254&amp;from=rss) - [World&apos;s Largest Wind-Powered Cargo Ship Takes to the Seas](https://soylentnews.org/article.pl?sid=25/11/04/0243254&amp;from=rss)
* [2025-11-06, 00:14:00](https://soylentnews.org/article.pl?sid=25/11/04/0228209&amp;from=rss) - [Powered by Mushrooms, Living Computers Are on the Rise](https://soylentnews.org/article.pl?sid=25/11/04/0228209&amp;from=rss)
* [2025-11-05, 19:28:00](https://soylentnews.org/article.pl?sid=25/11/04/0220218&amp;from=rss) - [Debian Introduces Rust Toolchain Dependencies to Apt](https://soylentnews.org/article.pl?sid=25/11/04/0220218&amp;from=rss)
* [2025-11-05, 17:50:45](https://news.ycombinator.com/item?id=45825733) - [Show HN: I scraped 3B Goodreads reviews to train a better recommendation model](https://book.sv)
* [2025-11-05, 17:14:21](https://lobste.rs/s/7w2aj3/myna_monospace_typeface_designed_for) - [Myna: monospace typeface designed for symbol-heavy programming languages](https://github.com/sayyadirfanali/Myna)
* [2025-11-05, 14:41:00](https://soylentnews.org/article.pl?sid=25/11/04/0214241&amp;from=rss) - [We&apos;re About to Find Many More Interstellar Interlopers—Here&apos;s How to Visit One](https://soylentnews.org/article.pl?sid=25/11/04/0214241&amp;from=rss)
* [2025-11-05, 09:55:00](https://soylentnews.org/article.pl?sid=25/11/04/025235&amp;from=rss) - [Bats Eat the Birds They Pluck From the Sky While on the Wing](https://soylentnews.org/article.pl?sid=25/11/04/025235&amp;from=rss)
* [2025-11-05, 05:06:00](https://soylentnews.org/article.pl?sid=25/11/04/0147220&amp;from=rss) - [SUSE to Include Agentic AI in SLE 16](https://soylentnews.org/article.pl?sid=25/11/04/0147220&amp;from=rss)
* [2025-11-05, 00:22:00](https://soylentnews.org/article.pl?sid=25/11/03/0150212&amp;from=rss) - [Company Remote Kills Robo Vacuum](https://soylentnews.org/article.pl?sid=25/11/03/0150212&amp;from=rss)
* [2025-11-04, 19:36:00](https://soylentnews.org/article.pl?sid=25/11/03/0140258&amp;from=rss) - [Matrix Collapses: Mathematics Proves the Universe Cannot be a Computer Simulation](https://soylentnews.org/article.pl?sid=25/11/03/0140258&amp;from=rss)
* [2025-11-04, 14:52:00](https://soylentnews.org/article.pl?sid=25/11/03/0135217&amp;from=rss) - [Las Vegas Police Debut the World&apos;s First Tesla Cybertruck Patrol Fleet](https://soylentnews.org/article.pl?sid=25/11/03/0135217&amp;from=rss)
* [2025-11-04, 11:42:10](https://news.ycombinator.com/item?id=45809835) - [OpenTelemetry: Escape Hatch from the Observability Cartel](https://oneuptime.com/blog/post/2025-11-03-opentelemetry-escape-from-observability-cartel/view)
* [2025-11-04, 10:08:00](https://soylentnews.org/article.pl?sid=25/11/02/2015201&amp;from=rss) - [Tesla&apos;s ‘Robotaxis&apos; Keep Crashing-Even With Human ‘Safety Monitors&apos; Onboard](https://soylentnews.org/article.pl?sid=25/11/02/2015201&amp;from=rss)
* [2025-11-04, 09:02:49](https://news.ycombinator.com/item?id=45808863) - [From web developer to database developer in 10 years](https://notes.eatonphil.com/2025-02-15-from-web-developer-to-database-developer-in-10-years.html)
* [2025-11-04, 05:23:00](https://soylentnews.org/article.pl?sid=25/11/02/2011253&amp;from=rss) - [Once Again, Chat Control Flails After Strong Public Pressure](https://soylentnews.org/article.pl?sid=25/11/02/2011253&amp;from=rss)
* [2025-11-04, 00:39:00](https://soylentnews.org/article.pl?sid=25/11/01/2010247&amp;from=rss) - [Cyber Exec with Lavish Lifestyle Charged with Selling Secrets to Russia](https://soylentnews.org/article.pl?sid=25/11/01/2010247&amp;from=rss)
* [2025-11-03, 19:53:00](https://soylentnews.org/article.pl?sid=25/11/02/0832213&amp;from=rss) - [October&apos;s Research Roundup: 6 Cool Science Stories We Almost Missed](https://soylentnews.org/article.pl?sid=25/11/02/0832213&amp;from=rss)
* [2025-11-03, 15:10:00](https://soylentnews.org/article.pl?sid=25/11/01/2018214&amp;from=rss) - [Qilin Ransomware Abuses WSL to Run Linux Encryptors in Windows](https://soylentnews.org/article.pl?sid=25/11/01/2018214&amp;from=rss)
* [2025-11-03, 14:12:06](https://news.ycombinator.com/item?id=45799109) - [Cryptography 101 with Alfred Menezes](https://cryptography101.ca)
* [2025-11-03, 10:25:00](https://soylentnews.org/article.pl?sid=25/11/02/0835217&amp;from=rss) - [Nvidia Hits Record $5 Trillion Mark as CEO Dismisses AI Bubble Concerns](https://soylentnews.org/article.pl?sid=25/11/02/0835217&amp;from=rss)
* [2025-11-03, 05:40:00](https://soylentnews.org/article.pl?sid=25/11/01/1951249&amp;from=rss) - [Massive Surge of NFC Relay Malware Steals Europeans’ Credit Cards](https://soylentnews.org/article.pl?sid=25/11/01/1951249&amp;from=rss)
* [2025-11-03, 01:00:00](https://soylentnews.org/article.pl?sid=25/11/01/1944249&amp;from=rss) - [AI Review Paper Slop Changing Moderation Policy at arXiv CS](https://soylentnews.org/article.pl?sid=25/11/01/1944249&amp;from=rss)
* [2025-11-03, 00:50:41](https://news.ycombinator.com/item?id=45794824) - [We built a cloud GPU notebook that boots in seconds](https://modal.com/blog/notebooks-internals)
