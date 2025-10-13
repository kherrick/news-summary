# [News Summary](https://kherrick.github.io/news-summary/)

## Advancements in Technology

* [TP-Link Makes History With First Successful Wi-Fi 8 Connection](https://mobile.slashdot.org/story/25/10/13/1813236/tp-link-makes-history-with-first-successful-wi-fi-8-connection?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=45571718))

* [OpenAI, Broadcom Forge Multibillion-Dollar Chip-Development Deal](https://slashdot.org/story/25/10/13/1334226/openai-broadcom-forge-multibillion-dollar-chip-development-deal?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=45568955))

* [Critical GitHub Copilot Vulnerability Leaks Private Source Code](https://www.legitsecurity.com/blog/camoleak-critical-github-copilot-vulnerability-leaks-private-source-code) ([comments](https://lobste.rs/s/jr6zfo/critical_github_copilot_vulnerability))

## AI and Machine Learning

* [China Is Shipping More Open AI Models Than US Rivals as Tech Competition Shifts](https://slashdot.org/story/25/10/13/1719227/china-is-shipping-more-open-ai-models-than-us-rivals-as-tech-competition-shifts?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=45569451))

* [NanoChat – The best ChatGPT that $100 can buy](https://github.com/karpathy/nanochat) ([comments](https://news.ycombinator.com/item?id=45569350))

* [The Pope Urges Vigilance About Who Controls AI](https://slashdot.org/story/25/10/13/1316200/the-pope-urges-vigilance-about-who-controls-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=45568767))

## Science and Environment

* [Earth's Climate Has Passed Its First Irreversible Tipping Point and Entered a 'New Reality'](https://news.slashdot.org/story/25/10/13/1340224/earths-climate-has-passed-its-first-irreversible-tipping-point-and-entered-a-new-reality?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=45569371))

* [Some graphene firms have reaped its potential but others are struggling](https://www.theguardian.com/business/2025/oct/13/lab-to-fab-are-promises-of-a-graphene-revolution-finally-coming-true) ([comments](https://news.ycombinator.com/item?id=45566253))

* [Why GPS Fails In Cities. And What Researchers Think Could Fix It](https://science.slashdot.org/story/25/10/13/029238/why-gps-fails-in-cities-and-what-researchers-think-could-fix-it?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=45561376))

## Cultural Impacts

* [Does the Internet Have a Philly Accent? Why Too Much Time Online Can Make You 'Culturally Philadelphian.'](https://tech.slashdot.org/story/25/10/13/1421258/does-the-internet-have-a-philly-accent-why-too-much-time-online-can-make-you-culturally-philadelphian?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=45570611))

* [People Are People, or Why I Don't Want to Be a Landlord](https://oddevan.com/2025/10/13/people-are-people-or-why.html) ([comments](https://news.ycombinator.com/item?id=45571718))

* [AI and the Future of American Politics](https://www.schneier.com/blog/archives/2025/10/ai-and-the-future-of-american-politics.html) ([comments](https://news.ycombinator.com/item?id=45568955))

## Software and Development

* [Modern iOS Security Features -- A Deep Dive into SPTM, TXM, and Exclaves](https://arxiv.org/pdf/2510.09272) ([comments](https://lobste.rs/s/wn5mcf/modern_ios_security_features_deep_dive))

* [Environment variables are a legacy mess: Let's dive deep into them](https://allvpv.org/haotic-journey-through-envvars/) ([comments](https://news.ycombinator.com/item?id=45570537))

* [smolBSD — build your own minimal BSD system](https://smolbsd.org) ([comments](https://lobste.rs/s/do4tt3/smolbsd_build_your_own_minimal_bsd_system))

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

* [2025-10-13, 18:26:55](https://news.ycombinator.com/item?id=45571718) - [People Are People, or Why I Don&apos;t Want to Be a Landlord](https://oddevan.com/2025/10/13/people-are-people-or-why.html)
* [2025-10-13, 18:13:00](https://mobile.slashdot.org/story/25/10/13/1813236/tp-link-makes-history-with-first-successful-wi-fi-8-connection?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [TP-Link Makes History With First Successful Wi-Fi 8 Connection](https://mobile.slashdot.org/story/25/10/13/1813236/tp-link-makes-history-with-first-successful-wi-fi-8-connection?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-13, 17:22:00](https://slashdot.org/story/25/10/13/1719227/china-is-shipping-more-open-ai-models-than-us-rivals-as-tech-competition-shifts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Is Shipping More Open AI Models Than US Rivals as Tech Competition Shifts](https://slashdot.org/story/25/10/13/1719227/china-is-shipping-more-open-ai-models-than-us-rivals-as-tech-competition-shifts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-13, 17:04:23](https://lobste.rs/s/wn5mcf/modern_ios_security_features_deep_dive) - [Modern iOS Security Features -- A Deep Dive into SPTM, TXM, and Exclaves](https://arxiv.org/pdf/2510.09272)
* [2025-10-13, 17:03:11](https://news.ycombinator.com/item?id=45570720) - [Optery (YC W22) – Hiring Tech Lead with Node.js Experience (U.S. &amp; Latin America)](https://www.optery.com/careers/)
* [2025-10-13, 16:49:15](https://news.ycombinator.com/item?id=45570537) - [Environment variables are a legacy mess: Let&apos;s dive deep into them](https://allvpv.org/haotic-journey-through-envvars/)
* [2025-10-13, 16:40:00](https://news.slashdot.org/story/25/10/13/1617250/three-new-california-laws-target-tech-companies-interactions-with-children?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Three New California Laws Target Tech Companies&apos; Interactions with Children](https://news.slashdot.org/story/25/10/13/1617250/three-new-california-laws-target-tech-companies-interactions-with-children?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-13, 16:08:32](https://news.ycombinator.com/item?id=45569966) - [Jeep software update bricks vehicles, leaves owners stranded](https://www.thestack.technology/jeep-software-update-bricks-vehicles-leaves-owners-stranded/)
* [2025-10-13, 16:01:00](https://tech.slashdot.org/story/25/10/13/1421258/does-the-internet-have-a-philly-accent-why-too-much-time-online-can-make-you-culturally-philadelphian?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Does the Internet Have a Philly Accent? Why Too Much Time Online Can Make You &apos;Culturally Philadelphian.&apos;](https://tech.slashdot.org/story/25/10/13/1421258/does-the-internet-have-a-philly-accent-why-too-much-time-online-can-make-you-culturally-philadelphian?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-13, 15:58:00](https://soylentnews.org/article.pl?sid=25/10/12/1437218&amp;from=rss) - [Nuclear Bombs on Drones: The Next Arms Race That Has Experts &apos;Very Concerned&apos;](https://soylentnews.org/article.pl?sid=25/10/12/1437218&amp;from=rss)
* [2025-10-13, 15:24:08](https://news.ycombinator.com/item?id=45569371) - [Android&apos;s sideloading limits are its most anti-consumer move yet](https://www.makeuseof.com/androids-sideloading-limits-are-anti-consumer-move-yet/)
* [2025-10-13, 15:22:47](https://news.ycombinator.com/item?id=45569350) - [NanoChat – The best ChatGPT that $100 can buy](https://github.com/karpathy/nanochat)
* [2025-10-13, 15:22:00](https://news.slashdot.org/story/25/10/13/1340224/earths-climate-has-passed-its-first-irreversible-tipping-point-and-entered-a-new-reality?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Earth&apos;s Climate Has Passed Its First Irreversible Tipping Point and Entered a &apos;New Reality&apos;](https://news.slashdot.org/story/25/10/13/1340224/earths-climate-has-passed-its-first-irreversible-tipping-point-and-entered-a-new-reality?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-13, 15:07:52](https://lobste.rs/s/hfdtjm/what_dynamic_typing_is_for) - [What Dynamic Typing Is For](https://unplannedobsolescence.com/blog/what-dynamic-typing-is-for/)
* [2025-10-13, 14:51:51](https://news.ycombinator.com/item?id=45568955) - [AI and the Future of American Politics](https://www.schneier.com/blog/archives/2025/10/ai-and-the-future-of-american-politics.html)
* [2025-10-13, 14:48:37](https://lobste.rs/s/auldc4/litex_first_formal_language_learnable_2) - [Litex: The First Formal Language Learnable in 2 Hours](https://litexlang.com/)
* [2025-10-13, 14:42:19](https://news.ycombinator.com/item?id=45568842) - [A16Z-backed data firms Fivetran, dbt Labs to merge in all-stock deal](https://www.reuters.com/business/a16z-backed-data-firms-fivetran-dbt-labs-merge-all-stock-deal-2025-10-13/)
* [2025-10-13, 14:41:00](https://slashdot.org/story/25/10/13/1316200/the-pope-urges-vigilance-about-who-controls-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Pope Urges Vigilance About Who Controls AI](https://slashdot.org/story/25/10/13/1316200/the-pope-urges-vigilance-about-who-controls-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-13, 14:34:40](https://news.ycombinator.com/item?id=45568767) - [Ofcom fines 4chan £20K and counting for violating UK&apos;s Online Safety Act](https://www.theregister.com/2025/10/13/4chan_ofcom_fine/)
* [2025-10-13, 14:29:06](https://news.ycombinator.com/item?id=45568708) - [Roger Dean – His legendary artwork in gaming history (Psygnosis)](https://spillhistorie.no/2025/10/03/legends-of-the-games-industry-roger-dean/)
* [2025-10-13, 14:20:33](https://news.ycombinator.com/item?id=45568613) - [Smartphones and being present](https://herman.bearblog.dev/being-present/)
* [2025-10-13, 14:00:00](https://slashdot.org/story/25/10/13/1334226/openai-broadcom-forge-multibillion-dollar-chip-development-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI, Broadcom Forge Multibillion-Dollar Chip-Development Deal](https://slashdot.org/story/25/10/13/1334226/openai-broadcom-forge-multibillion-dollar-chip-development-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-13, 13:25:44](https://lobste.rs/s/1clwpi/peach_meme_on_crts_pixels_signal_quality) - [The Peach meme: On CRTs, pixels and signal quality (again)](https://www.datagubbe.se/crt2/)
* [2025-10-13, 12:47:01](https://lobste.rs/s/wqhj5b/octothorpes) - [Octothorpes](https://octothorp.es)
* [2025-10-13, 12:46:52](https://news.ycombinator.com/item?id=45567770) - [Show HN: SQLite Online – 11 years of solo development, 11K daily users](https://sqliteonline.com/)
* [2025-10-13, 12:09:59](https://lobste.rs/s/7fz2mo/we_need_at_least_ergonomic_explicit) - [We need (at least) ergonomic, explicit handles](https://smallcultfollowing.com/babysteps/blog/2025/10/13/ergonomic-explicit-handles/)
* [2025-10-13, 11:45:00](https://lobste.rs/s/bf7uhe/free_software_hasn_t_won) - [Free Software hasn&apos;t won](https://dorotac.eu/posts/fosswon/)
* [2025-10-13, 11:36:36](https://lobste.rs/s/4zj64w/why_did_containers_happen_view_from_ten) - [Why did containers happen? A view from ten years in the trenches by Docker&apos;s former CTO Justin Cormack](https://buttondown.com/justincormack/archive/ignore-previous-directions-8-devopsdays/)
* [2025-10-13, 11:34:00](https://entertainment.slashdot.org/story/25/10/13/0456233/hollywood-demands-copyright-guardrails-from-sora-2---while-users-complain-thats-less-fun?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hollywood Demands Copyright Guardrails from Sora 2 - While Users Complain That&apos;s Less Fun](https://entertainment.slashdot.org/story/25/10/13/0456233/hollywood-demands-copyright-guardrails-from-sora-2---while-users-complain-thats-less-fun?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-13, 11:23:20](https://news.ycombinator.com/item?id=45567153) - [The Sveriges Riksbank Prize in Economic Sciences in Memory of Alfred Nobel 2025](https://www.nobelprize.org/prizes/economic-sciences/2025/summary/)
* [2025-10-13, 11:12:00](https://soylentnews.org/article.pl?sid=25/10/12/1414249&amp;from=rss) - [Here&apos;s How to See Two Newly Discovered Comets This Month](https://soylentnews.org/article.pl?sid=25/10/12/1414249&amp;from=rss)
* [2025-10-13, 10:36:15](https://lobste.rs/s/an26tn/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/an26tn/what_are_you_doing_this_week)
* [2025-10-13, 10:28:47](https://lobste.rs/s/tgfo9p/thoughts_on_remix_3) - [Thoughts on Remix 3](https://frantic.im/remix-3/)
* [2025-10-13, 10:23:08](https://news.ycombinator.com/item?id=45566766) - [Matrices can be your Friends](https://www.sjbaker.org/steve/omniv/matrices_can_be_your_friends.html)
* [2025-10-13, 10:22:50](https://lobste.rs/s/b6x3lb/it_is_war_out_there_take_control_your) - [It Is A War Out There - Take Control of Your Supply Lines with HtDTY](https://sheep.horse/2025/10/it_is_a_war_out_there_-_take_control_of_your_suppl.html)
* [2025-10-13, 10:20:43](https://lobste.rs/s/1lmxut/revisiting_sailfishos) - [Revisiting SailfishOS](https://geekyschmidt.com/post/sailfishos-sept25/)
* [2025-10-13, 10:05:50](https://news.ycombinator.com/item?id=45566660) - [Two Paths to Memory Safety: CHERI and OMA](https://ednutting.com/2025/10/05/cheri-vs-oma.html)
* [2025-10-13, 10:02:40](https://news.ycombinator.com/item?id=45566638) - [American solar farms](https://tech.marksblogg.com/american-solar-farms.html)
* [2025-10-13, 09:25:45](https://news.ycombinator.com/item?id=45566441) - [MPTCP for Linux](https://www.mptcp.dev/)
* [2025-10-13, 09:25:26](https://lobste.rs/s/do4tt3/smolbsd_build_your_own_minimal_bsd_system) - [smolBSD — build your own minimal BSD system](https://smolbsd.org)
* [2025-10-13, 09:11:47](https://lobste.rs/s/0iwpkr/little_random_could) - [The little Random that could](https://blog.julik.nl/2025/10/the-little-random-that-could)
* [2025-10-13, 08:53:17](https://news.ycombinator.com/item?id=45566253) - [Some graphene firms have reaped its potential but others are struggling](https://www.theguardian.com/business/2025/oct/13/lab-to-fab-are-promises-of-a-graphene-revolution-finally-coming-true)
* [2025-10-13, 08:36:33](https://news.ycombinator.com/item?id=45566139) - [Spotlight on pdfly, the Swiss Army knife for PDF files](https://chezsoi.org/lucas/blog/spotlight-on-pdfly.html)
* [2025-10-13, 08:33:34](https://news.ycombinator.com/item?id=45566123) - [LaTeXpOsEd: A Systematic Analysis of Information Leakage in Preprint Archives](https://arxiv.org/abs/2510.03761)
* [2025-10-13, 08:17:29](https://lobste.rs/s/4y8nzp/strudel_repl_music_live_coding) - [Strudel REPL - a music live coding environment living in the browser](https://strudel.cc)
* [2025-10-13, 07:34:00](https://news.slashdot.org/story/25/10/13/067256/flatpak-doesnt-work-in-ubuntu-2510-but-a-fix-is-coming?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Flatpak Doesn&apos;t Work in Ubuntu 25.10, But a Fix is Coming](https://news.slashdot.org/story/25/10/13/067256/flatpak-doesnt-work-in-ubuntu-2510-but-a-fix-is-coming?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-13, 06:37:00](https://lobste.rs/s/ia6vhh/git_developers_talk_about_potentially) - [Git Developers Talk About Potentially Releasing Git 3.0 By The End Of Next Year](https://www.phoronix.com/news/Git-3.0-Release-Talk-2026)
* [2025-10-13, 06:32:41](https://lobste.rs/s/jr6zfo/critical_github_copilot_vulnerability) - [Critical GitHub Copilot Vulnerability Leaks Private Source Code](https://www.legitsecurity.com/blog/camoleak-critical-github-copilot-vulnerability-leaks-private-source-code)
* [2025-10-13, 06:24:00](https://soylentnews.org/article.pl?sid=25/10/12/1411214&amp;from=rss) - [Companies Are Making the Same Mistake With AI That Tesla Made With Robots](https://soylentnews.org/article.pl?sid=25/10/12/1411214&amp;from=rss)
* [2025-10-13, 05:51:08](https://lobste.rs/s/7q2c0r/jit_so_you_want_be_faster_than_interpreter) - [JIT: so you want to be faster than an interpreter on modern CPUs…](https://www.pinaraf.info/2025/10/jit-so-you-want-to-be-faster-than-an-interpreter-on-modern-cpus/)
* [2025-10-13, 05:28:58](https://lobste.rs/s/zoapek/find_where_specific_object_was_allocated) - [Find where a specific object was allocated in JavaScript with DevTools](http://heikkila.dev/blog/find-where-a-specific-object-was-allocated-in-javascript/)
* [2025-10-13, 04:34:00](https://hardware.slashdot.org/story/25/10/13/032224/california-will-stop-using-coal-as-a-power-source-next-month?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California Will Stop Using Coal as a Power Source Next Month](https://hardware.slashdot.org/story/25/10/13/032224/california-will-stop-using-coal-as-a-power-source-next-month?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-13, 04:06:29](https://lobste.rs/s/8dsiow/wireguard_fpga) - [Wireguard FPGA](https://github.com/chili-chips-ba/wireguard-fpga)
* [2025-10-13, 02:40:00](https://science.slashdot.org/story/25/10/13/029238/why-gps-fails-in-cities-and-what-researchers-think-could-fix-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why GPS Fails In Cities. And What Researchers Think Could Fix It](https://science.slashdot.org/story/25/10/13/029238/why-gps-fails-in-cities-and-what-researchers-think-could-fix-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-13, 01:40:00](https://tech.slashdot.org/story/25/10/13/0138207/russia-accused-of-severing-ukrainian-nuclear-power-plants-link-as-energy-remains-a-key-battleground?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russia Accused of Severing Ukrainian Nuclear Power Plant&apos;s Link, as Energy Remains a &apos;Key Battleground&apos;](https://tech.slashdot.org/story/25/10/13/0138207/russia-accused-of-severing-ukrainian-nuclear-power-plants-link-as-energy-remains-a-key-battleground?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-13, 01:39:00](https://soylentnews.org/article.pl?sid=25/10/12/141230&amp;from=rss) - [Using a Litter Box to Determine a Cat&apos;s Health](https://soylentnews.org/article.pl?sid=25/10/12/141230&amp;from=rss)
* [2025-10-13, 00:07:56](https://lobste.rs/s/ngjqsm/nsa_ietf_can_attacker_simply_purchase) - [NSA and IETF: Can an attacker simply purchase standardization of weakened cryptography?](https://blog.cr.yp.to/20251004-weakened.html)
* [2025-10-12, 23:43:00](https://slashdot.org/story/25/10/12/2340230/amd-amps-up-chip-war---but-nvidias-still-leading?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AMD Amps Up Chip War - But Nvidia&apos;s Still Leading](https://slashdot.org/story/25/10/12/2340230/amd-amps-up-chip-war---but-nvidias-still-leading?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-12, 21:44:00](https://it.slashdot.org/story/25/10/12/2016234/toxic-workplaces-are-worsening-80-of-us-workers-say-their-job-hurts-mental-health?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Toxic Workplaces Are Worsening: 80% of U.S. Workers Say Their Job Hurts Mental Health](https://it.slashdot.org/story/25/10/12/2016234/toxic-workplaces-are-worsening-80-of-us-workers-say-their-job-hurts-mental-health?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-12, 20:50:00](https://soylentnews.org/article.pl?sid=25/10/12/0052201&amp;from=rss) - [The FCC Will Allow ABC, CBS, FOX, &amp; NBC TV Stations Decide When Switch to ATSC 3.0](https://soylentnews.org/article.pl?sid=25/10/12/0052201&amp;from=rss)
* [2025-10-12, 20:44:00](https://slashdot.org/story/25/10/12/206215/theres-no-ai-bubble-says-yahoo-finance-executive-editor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [There&apos;s No &apos;AI Bubble&apos;, Says Yahoo Finance Executive Editor](https://slashdot.org/story/25/10/12/206215/theres-no-ai-bubble-says-yahoo-finance-executive-editor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-12, 20:11:37](https://lobste.rs/s/kz6gvo/abstraction_not_syntax) - [Abstraction, not syntax](https://ruudvanasseldonk.com/2025/abstraction-not-syntax)
* [2025-10-12, 20:09:14](https://news.ycombinator.com/item?id=45561428) - [Ask HN: What are you working on? (October 2025)](https://news.ycombinator.com/item?id=45561428)
* [2025-10-12, 16:59:46](https://lobste.rs/s/l6yqm8/country_broke_kotlin) - [The Country That Broke Kotlin](https://sam-cooper.medium.com/the-country-that-broke-kotlin-84bdd0afb237)
* [2025-10-12, 16:05:00](https://soylentnews.org/article.pl?sid=25/10/11/148201&amp;from=rss) - [“Like Putting on Glasses for the First Time”—How AI Improves Earthquake Detection](https://soylentnews.org/article.pl?sid=25/10/11/148201&amp;from=rss)
* [2025-10-12, 14:43:09](https://lobste.rs/s/alkdsb/fzf_0_66_0_introduces_raw_mode) - [fzf 0.66.0 introduces “--raw mode”](https://github.com/junegunn/fzf/releases/tag/v0.66.0)
* [2025-10-12, 11:20:00](https://soylentnews.org/article.pl?sid=25/10/11/143225&amp;from=rss) - [Starlink Burns Up One to Two Satellites a Day](https://soylentnews.org/article.pl?sid=25/10/11/143225&amp;from=rss)
* [2025-10-12, 08:33:21](https://lobste.rs/s/gocddb/switch_jujutsu_already_tutorial) - [Switch to Jujutsu already: a tutorial](https://www.stavros.io/posts/switch-to-jujutsu-already-a-tutorial/)
* [2025-10-12, 06:37:00](https://soylentnews.org/article.pl?sid=25/10/11/1348219&amp;from=rss) - [Discord Customer Service Data Breached; Government-ID Images, and User Details Stolen](https://soylentnews.org/article.pl?sid=25/10/11/1348219&amp;from=rss)
* [2025-10-12, 01:47:00](https://soylentnews.org/article.pl?sid=25/10/11/1340244&amp;from=rss) - [Covert Eavesdropping Through Computer Mice - the \&quot;Mic-E-Mouse\&quot;](https://soylentnews.org/article.pl?sid=25/10/11/1340244&amp;from=rss)
* [2025-10-11, 20:58:00](https://soylentnews.org/article.pl?sid=25/10/10/2354242&amp;from=rss) - [The Real (Economic) AI Apocalypse is Nigh](https://soylentnews.org/article.pl?sid=25/10/10/2354242&amp;from=rss)
* [2025-10-11, 16:13:00](https://soylentnews.org/article.pl?sid=25/10/10/2347235&amp;from=rss) - [MIT Rejects Trump&apos;s “Compact for Academic Excellence in Higher Education\&quot;](https://soylentnews.org/article.pl?sid=25/10/10/2347235&amp;from=rss)
* [2025-10-11, 11:28:00](https://soylentnews.org/article.pl?sid=25/10/10/1114256&amp;from=rss) - [Baseload Power is Functionally Extinct](https://soylentnews.org/article.pl?sid=25/10/10/1114256&amp;from=rss)
* [2025-10-11, 06:42:00](https://soylentnews.org/article.pl?sid=25/10/10/113245&amp;from=rss) - [2024 Computer History Museum Interview With Ken Thompson](https://soylentnews.org/article.pl?sid=25/10/10/113245&amp;from=rss)
* [2025-10-11, 02:01:00](https://soylentnews.org/article.pl?sid=25/10/10/110237&amp;from=rss) - [The Great Software Quality Collapse: How We Normalized Catastrophe](https://soylentnews.org/article.pl?sid=25/10/10/110237&amp;from=rss)
* [2025-10-10, 21:14:00](https://soylentnews.org/article.pl?sid=25/10/10/1055230&amp;from=rss) - [Qualcomm Buys Arduino](https://soylentnews.org/article.pl?sid=25/10/10/1055230&amp;from=rss)
* [2025-10-10, 16:31:00](https://soylentnews.org/article.pl?sid=25/10/10/003237&amp;from=rss) - [Ocean CO2 Becomes Sustainable Plastic, Thanks to Modified Microbes](https://soylentnews.org/article.pl?sid=25/10/10/003237&amp;from=rss)
* [2025-10-10, 11:47:00](https://soylentnews.org/article.pl?sid=25/10/10/000255&amp;from=rss) - [The Transistor Was Patented 75 Years Ago Today](https://soylentnews.org/article.pl?sid=25/10/10/000255&amp;from=rss)
* [2025-10-10, 11:11:00](https://soylentnews.org/breakingnews/article.pl?sid=25/10/10/1053212&amp;from=rss) - [Nobel Prizes 2025 - Venezuelan Opposition Leader María Corina Machado Awarded Peace Prize](https://soylentnews.org/breakingnews/article.pl?sid=25/10/10/1053212&amp;from=rss)
* [2025-10-10, 07:03:00](https://soylentnews.org/article.pl?sid=25/10/09/2356204&amp;from=rss) - [Windows 7 Usage Jumps as Users Refuse to Upgrade to Windows 11 in Wake of Windows 10 End of Support](https://soylentnews.org/article.pl?sid=25/10/09/2356204&amp;from=rss)
* [2025-10-10, 02:21:00](https://soylentnews.org/article.pl?sid=25/10/07/2334243&amp;from=rss) - [Are VPNs Under Attack? an Anti-Censorship Group Speaks Out](https://soylentnews.org/article.pl?sid=25/10/07/2334243&amp;from=rss)
* [2025-10-09, 21:43:00](https://soylentnews.org/article.pl?sid=25/10/07/2330231&amp;from=rss) - [Here&apos;s the Real Reason Endurance Sank](https://soylentnews.org/article.pl?sid=25/10/07/2330231&amp;from=rss)
* [2025-10-09, 16:55:00](https://soylentnews.org/article.pl?sid=25/10/07/2326258&amp;from=rss) - [Forensic Test Recovers Fingerprints From Fired Ammunition Casings Despite Intense Heat](https://soylentnews.org/article.pl?sid=25/10/07/2326258&amp;from=rss)
* [2025-10-09, 14:01:27](https://news.ycombinator.com/item?id=45527840) - [CRDT and SQLite: Local-First Value Synchronization](https://marcobambini.substack.com/p/the-secret-life-of-a-local-first)
* [2025-10-09, 12:13:00](https://soylentnews.org/article.pl?sid=25/10/06/1337206&amp;from=rss) - [UK Submarine Cable Security is All at Sea](https://soylentnews.org/article.pl?sid=25/10/06/1337206&amp;from=rss)
* [2025-10-09, 07:25:00](https://soylentnews.org/article.pl?sid=25/10/06/1331238&amp;from=rss) - [The QNX Operating System: A Deep Dive Into the History of QNX!](https://soylentnews.org/article.pl?sid=25/10/06/1331238&amp;from=rss)
* [2025-10-09, 02:41:00](https://soylentnews.org/article.pl?sid=25/10/06/1325211&amp;from=rss) - [Human Skin Cells Turned Into Fertilisable Eggs for First Time](https://soylentnews.org/article.pl?sid=25/10/06/1325211&amp;from=rss)
