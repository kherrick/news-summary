# [News Summary](https://kherrick.github.io/news-summary/)

## Technological Innovations and Advancements

* [The Manchester Garbage Collector and purple-garden's runtime](https://xnacly.me/posts/2026/manchester-garbage-collector/) - Discover the Manchester Garbage Collector and its interaction with purple-garden's runtime.

* [Project Patchouli: Open-source electromagnetic drawing tablet hardware](https://patchouli.readthedocs.io/en/latest/) - Explore Project Patchouli, a new open-source electromagnetic drawing tablet hardware project.

* [embassy: Modern embedded framework, using Rust and async](https://github.com/embassy-rs/embassy) - A modern embedded system framework leveraging Rust and asynchronous programming.

* [Musashi: Motorola 680x0 emulator written in C](https://github.com/kstenerud/Musashi) - Detailed overview of an emulator for the Motorola 680x0 CPU architecture written in C.

## AI and Machine Learning Impact

* [AI misses nearly one-third of breast cancers, study finds](https://www.emjreviews.com/radiology/news/ai-misses-nearly-one-third-of-breast-cancers-study-finds/) - Study reveals AI's limitations in detecting breast cancer.

* [Tailwind Labs loses 80% of revenue and 75% of engineering due to AI](https://adams-morning-walk.transistor.fm/episodes/we-had-six-months-left) - Examining the heavy impact of AI on Tailwind Labs’ business model.

* [OpenAI Launches ChatGPT Health, Encouraging Users To Connect Their Medical Records](https://science.slashdot.org/story/26/01/07/2151205/openai-launches-chatgpt-health-encouraging-users-to-connect-their-medical-records?utm_source=rss1.0mainlinkanon&utm_medium=feed) - OpenAI unveils ChatGPT Health and its role in medical record integration.

## Environmental Challenges and Solutions

* [How Aviation Emissions Could Be Halved Without Cutting Journeys](https://news.slashdot.org/story/26/01/07/1728220/how-aviation-emissions-could-be-halved-without-cutting-journeys?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Insights into reducing aviation emissions while maintaining travel capacity.

* [Strengthening Asphalt Roads With a Unique Green Ingredient: Algae](https://soylentnews.org/article.pl?sid=26/01/03/0139235&from=rss) - Discover how algae can strengthen asphalt roads and improve sustainability.

## Cybersecurity and Data Insights

* [A closer look at a BGP anomaly in Venezuela](https://blog.cloudflare.com/bgp-route-leak-venezuela/) - Analysis of a significant Border Gateway Protocol anomaly in Venezuela.

* [Practical Collision Attack Against Long Key IDs in PGP](https://soatok.blog/2026/01/07/practical-collision-attack-against-long-key-ids-in-pgp/) - Examination of a security flaw in PGP key IDs.

* [NPM to implement staged publishing after turbulent shift off classic tokens](https://socket.dev/blog/npm-to-implement-staged-publishing) - How NPM addressed security issues by embracing staged publishing.

## Scientific Discoveries and Developments

* [Venus Cloud Research Highlights Value of Combining Light and Polarization Measurements](https://soylentnews.org/article.pl?sid=26/01/03/0137246&from=rss) - Fascinating breakthrough in Venus cloud research.

* [The Search for Gravitons: Modifying Gravity Waves With Light](https://soylentnews.org/article.pl?sid=26/01/06/1042201&from=rss) - Investigating the existence and characteristics of gravitons.

## Tech Industry Updates

* [ACM is Now Fully Open Access](https://www.acm.org/articles/bulletins/2026/january/acm-open-access) - ACM announces full open access to its resources.

* [JPMorgan Chase Reaches a Deal To Take Over the Apple Credit Card](https://news.slashdot.org/story/26/01/07/2135246/jpmorgan-chase-reaches-a-deal-to-take-over-the-apple-credit-card?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Structural changes to Apple's credit card management.

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

* [2026-01-08, 08:33:09](https://lobste.rs/s/igdatc/manchester_garbage_collector_purple) - [The Manchester Garbage Collector and purple-garden&apos;s runtime](https://xnacly.me/posts/2026/manchester-garbage-collector/)
* [2026-01-08, 08:19:00](https://soylentnews.org/article.pl?sid=26/01/06/1042201&amp;from=rss) - [The Search for Gravitons: Modifying Gravity Waves With Light](https://soylentnews.org/article.pl?sid=26/01/06/1042201&amp;from=rss)
* [2026-01-08, 08:00:22](https://lobste.rs/s/ge1lq7/freebsd_home_nas_part_8_backing_up_nfs) - [FreeBSD Home NAS, part 8: Backing up NFS and Samba data with restic](https://rtfm.co.ua/en/freebsd-home-nas-part-8-nfs-and-samba-data-backups-using-restic/)
* [2026-01-08, 07:00:00](https://tech.slashdot.org/story/26/01/07/2339221/how-bright-headlights-escaped-regulation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Bright Headlights Escaped Regulation](https://tech.slashdot.org/story/26/01/07/2339221/how-bright-headlights-escaped-regulation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-08, 06:46:26](https://news.ycombinator.com/item?id=46538001) - [A closer look at a BGP anomaly in Venezuela](https://blog.cloudflare.com/bgp-route-leak-venezuela/)
* [2026-01-08, 06:43:07](https://news.ycombinator.com/item?id=46537983) - [AI misses nearly one-third of breast cancers, study finds](https://www.emjreviews.com/radiology/news/ai-misses-nearly-one-third-of-breast-cancers-study-finds/)
* [2026-01-08, 06:41:44](https://lobste.rs/s/dzcugr/tailwind_labs_loses_80_revenue_75) - [Tailwind Labs loses 80% of revenue and 75% of engineering due to AI](https://adams-morning-walk.transistor.fm/episodes/we-had-six-months-left)
* [2026-01-08, 05:38:11](https://lobste.rs/s/zjbdx9/per_query_energy_consumption_llms) - [Per-query energy consumption of LLMs](https://muxup.com/2026q1/per-query-energy-consumption-of-llms)
* [2026-01-08, 05:20:05](https://news.ycombinator.com/item?id=46537489) - [Project Patchouli: Open-source electromagnetic drawing tablet hardware](https://patchouli.readthedocs.io/en/latest/)
* [2026-01-08, 04:10:34](https://news.ycombinator.com/item?id=46537095) - [Go.sum is not a lockfile](https://words.filippo.io/gosum/)
* [2026-01-08, 04:10:34](https://lobste.rs/s/rnxxln/what_would_make_ocaml_serverless_ready) - [What would make OCaml serverless ready?](https://www.chrisarmstrong.dev/posts/what-would-make-ocaml-serverless-ready)
* [2026-01-08, 04:05:27](https://lobste.rs/s/zqly8y/fun_with_algebraic_effects_from_toy) - [Fun with Algebraic Effects - from Toy Examples to Hardcaml Simulations](https://blog.janestreet.com/fun-with-algebraic-effects-hardcaml/)
* [2026-01-08, 03:36:00](https://soylentnews.org/article.pl?sid=26/01/06/0751234&amp;from=rss) - [How Do I Make Clear Ice at Home? a Food Scientist Shares Easy Tips](https://soylentnews.org/article.pl?sid=26/01/06/0751234&amp;from=rss)
* [2026-01-08, 03:31:12](https://news.ycombinator.com/item?id=46536866) - [Open Infrastructure Map](https://openinframap.org)
* [2026-01-08, 03:30:00](https://slashdot.org/story/26/01/07/2257232/japans-nuclear-watchdog-halts-plants-reactor-safety-screening-over-falsified-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japan&apos;s Nuclear Watchdog Halts Plant&apos;s Reactor Safety Screening Over Falsified Data](https://slashdot.org/story/26/01/07/2257232/japans-nuclear-watchdog-halts-plants-reactor-safety-screening-over-falsified-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-08, 02:18:09](https://news.ycombinator.com/item?id=46536340) - [Kernel bugs hide for 2 years on average. Some hide for 20](https://pebblebed.com/blog/kernel-bugs)
* [2026-01-08, 01:25:00](https://news.slashdot.org/story/26/01/07/2250243/ai-chip-frenzy-to-wallop-dram-prices-with-70-hike?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Chip Frenzy To Wallop DRAM Prices With 70% Hike](https://news.slashdot.org/story/26/01/07/2250243/ai-chip-frenzy-to-wallop-dram-prices-with-70-hike?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-08, 00:58:52](https://lobste.rs/s/hbnfwk/worst_breed_software) - [Worst of Breed Software](https://worstofbreed.net/)
* [2026-01-08, 00:51:20](https://news.ycombinator.com/item?id=46535540) - [Musashi: Motorola 680x0 emulator written in C](https://github.com/kstenerud/Musashi)
* [2026-01-08, 00:48:17](https://news.ycombinator.com/item?id=46535515) - [The virtual AmigaOS runtime (a.k.a. Wine for Amiga:)](https://github.com/cnvogelg/amitools/blob/main/docs/vamos.md)
* [2026-01-08, 00:45:00](https://yro.slashdot.org/story/26/01/07/2211252/google-and-characterai-agree-to-settle-lawsuits-over-teen-suicides?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google and Character.AI Agree To Settle Lawsuits Over Teen Suicides](https://yro.slashdot.org/story/26/01/07/2211252/google-and-characterai-agree-to-settle-lawsuits-over-teen-suicides?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-08, 00:02:00](https://science.slashdot.org/story/26/01/07/2151205/openai-launches-chatgpt-health-encouraging-users-to-connect-their-medical-records?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Launches ChatGPT Health, Encouraging Users To Connect Their Medical Records](https://science.slashdot.org/story/26/01/07/2151205/openai-launches-chatgpt-health-encouraging-users-to-connect-their-medical-records?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-07, 23:31:55](https://lobste.rs/s/lyh36g/embassy_modern_embedded_framework_using) - [embassy: Modern embedded framework, using Rust and async](https://github.com/embassy-rs/embassy)
* [2026-01-07, 23:31:05](https://news.ycombinator.com/item?id=46534777) - [Play Aardwolf MUD](https://www.aardwolf.com/)
* [2026-01-07, 23:20:00](https://yro.slashdot.org/story/26/01/07/2145251/california-lawmaker-proposes-a-four-year-ban-on-ai-chatbots-in-kids-toys?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California Lawmaker Proposes a Four-Year Ban On AI Chatbots In Kids&apos; Toys](https://yro.slashdot.org/story/26/01/07/2145251/california-lawmaker-proposes-a-four-year-ban-on-ai-chatbots-in-kids-toys?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-07, 22:47:00](https://soylentnews.org/article.pl?sid=26/01/06/0744236&amp;from=rss) - [Scientists Say Ozempic Could Change How You Feel After Drinking Alcohol](https://soylentnews.org/article.pl?sid=26/01/06/0744236&amp;from=rss)
* [2026-01-07, 22:40:00](https://news.slashdot.org/story/26/01/07/2135246/jpmorgan-chase-reaches-a-deal-to-take-over-the-apple-credit-card?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [JPMorgan Chase Reaches a Deal To Take Over the Apple Credit Card](https://news.slashdot.org/story/26/01/07/2135246/jpmorgan-chase-reaches-a-deal-to-take-over-the-apple-credit-card?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-07, 22:02:00](https://news.slashdot.org/story/26/01/07/2126224/bose-open-sources-its-soundtouch-home-theater-smart-speakers-ahead-of-end-of-life?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bose Open-Sources Its SoundTouch Home Theater Smart Speakers Ahead of End-of-Life](https://news.slashdot.org/story/26/01/07/2126224/bose-open-sources-its-soundtouch-home-theater-smart-speakers-ahead-of-end-of-life?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-07, 21:29:01](https://lobste.rs/s/3bccy3/acm_is_now_fully_open_access) - [ACM is Now Fully Open Access](https://www.acm.org/articles/bulletins/2026/january/acm-open-access)
* [2026-01-07, 21:25:00](https://news.slashdot.org/story/26/01/07/2121252/warner-bros-rejects-revised-paramount-bid-sticks-with-netflix?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Warner Bros Rejects Revised Paramount Bid, Sticks With Netflix](https://news.slashdot.org/story/26/01/07/2121252/warner-bros-rejects-revised-paramount-bid-sticks-with-netflix?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-07, 20:45:00](https://hardware.slashdot.org/story/26/01/07/1913253/power-bank-feature-creep-is-out-of-control?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Power Bank Feature Creep is Out of Control ](https://hardware.slashdot.org/story/26/01/07/1913253/power-bank-feature-creep-is-out-of-control?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-07, 20:40:20](https://lobste.rs/s/9uesig/practical_collision_attack_against_long) - [Practical Collision Attack Against Long Key IDs in PGP](https://soatok.blog/2026/01/07/practical-collision-attack-against-long-key-ids-in-pgp/)
* [2026-01-07, 20:25:51](https://news.ycombinator.com/item?id=46532075) - [Claude Code CLI was broken](https://github.com/anthropics/claude-code/issues/16673)
* [2026-01-07, 20:19:34](https://lobste.rs/s/6gsmoh/relax_for_same_result) - [Relax for the same result](https://sive.rs/relax)
* [2026-01-07, 20:16:50](https://news.ycombinator.com/item?id=46531925) - [Tailscale state file encryption no longer enabled by default](https://tailscale.com/changelog)
* [2026-01-07, 20:01:00](https://news.slashdot.org/story/26/01/07/1848240/new-dietary-guidelines-abandon-longstanding-advice-on-alcohol?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Dietary Guidelines Abandon Longstanding Advice on Alcohol](https://news.slashdot.org/story/26/01/07/1848240/new-dietary-guidelines-abandon-longstanding-advice-on-alcohol?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-07, 19:59:22](https://lobste.rs/s/ifnvlk/haskell_debugger_for_ghc_9_14) - [The Haskell Debugger for GHC 9.14](https://discourse.haskell.org/t/the-haskell-debugger-for-ghc-9-14/13499)
* [2026-01-07, 19:49:54](https://news.ycombinator.com/item?id=46531565) - [Notion AI: Unpatched data exfiltration](https://www.promptarmor.com/resources/notion-ai-unpatched-data-exfiltration)
* [2026-01-07, 19:29:39](https://news.ycombinator.com/item?id=46531280) - [ChatGPT Health](https://openai.com/index/introducing-chatgpt-health/)
* [2026-01-07, 19:21:00](https://hardware.slashdot.org/story/26/01/07/1749257/samsungs-rolling-ballie-robot-indefinitely-shelved-after-delays?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Samsung&apos;s Rolling Ballie Robot Indefinitely Shelved After Delays](https://hardware.slashdot.org/story/26/01/07/1749257/samsungs-rolling-ballie-robot-indefinitely-shelved-after-delays?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-07, 19:16:00](https://lobste.rs/s/trwil3/myths_about_logitech_developer_id) - [Myths about Logitech Developer ID certificate expiration](https://lapcatsoftware.com/articles/2026/1/2.html)
* [2026-01-07, 19:13:19](https://news.ycombinator.com/item?id=46531068) - [US will ban Wall Street investors from buying single-family homes](https://www.reuters.com/world/us/us-will-ban-large-institutional-investors-buying-single-family-homes-trump-says-2026-01-07/)
* [2026-01-07, 18:39:00](https://entertainment.slashdot.org/story/26/01/07/1743200/the-inevitable-rise-of-the-art-tv?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Inevitable Rise of the Art TV](https://entertainment.slashdot.org/story/26/01/07/1743200/the-inevitable-rise-of-the-art-tv?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-07, 18:31:19](https://news.ycombinator.com/item?id=46530448) - [NPM to implement staged publishing after turbulent shift off classic tokens](https://socket.dev/blog/npm-to-implement-staged-publishing)
* [2026-01-07, 18:24:22](https://lobste.rs/s/jbsyhe/software_craftsmanship_is_dead) - [Software craftsmanship is dead](https://www.pcloadletter.dev/blog/craftsmanship-is-dead/)
* [2026-01-07, 18:01:00](https://news.slashdot.org/story/26/01/07/1728220/how-aviation-emissions-could-be-halved-without-cutting-journeys?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Aviation Emissions Could Be Halved Without Cutting Journeys](https://news.slashdot.org/story/26/01/07/1728220/how-aviation-emissions-could-be-halved-without-cutting-journeys?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-07, 18:00:00](https://soylentnews.org/article.pl?sid=26/01/06/0740234&amp;from=rss) - [China Leads Research in 90% of Crucial Technologies](https://soylentnews.org/article.pl?sid=26/01/06/0740234&amp;from=rss)
* [2026-01-07, 17:22:09](https://news.ycombinator.com/item?id=46529237) - [Eat Real Food](https://realfood.gov)
* [2026-01-07, 17:21:00](https://it.slashdot.org/story/26/01/07/1659220/microsoft-cancels-plans-to-rate-limit-exchange-online-bulk-emails?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Cancels Plans To Rate Limit Exchange Online Bulk Emails](https://it.slashdot.org/story/26/01/07/1659220/microsoft-cancels-plans-to-rate-limit-exchange-online-bulk-emails?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-07, 16:29:41](https://news.ycombinator.com/item?id=46528389) - [How Google got its groove back and edged ahead of OpenAI](https://www.wsj.com/tech/ai/google-ai-openai-gemini-chatgpt-b766e160)
* [2026-01-07, 16:28:14](https://news.ycombinator.com/item?id=46528353) - [Health care data breach affects over 600k patients, Illinois agency says](https://www.nprillinois.org/illinois/2026-01-06/health-care-data-breach-affects-600-000-patients-illinois-agency-says)
* [2026-01-07, 16:02:19](https://news.ycombinator.com/item?id=46527950) - [Creators of Tailwind laid off 75% of their engineering team](https://github.com/tailwindlabs/tailwindcss.com/pull/2388)
* [2026-01-07, 15:53:21](https://lobste.rs/s/krxqsa/nes_top_gun_landing_hotfix) - [NES Top Gun: landing hotfix](https://relaxing.run/blag/posts/top-gun-sim)
* [2026-01-07, 15:03:41](https://news.ycombinator.com/item?id=46527161) - [Shipmap.org](https://www.shipmap.org/)
* [2026-01-07, 15:00:05](https://lobste.rs/s/zpwlya/effortless_animations_with_css_view) - [Effortless animations with CSS view transitions](https://giacomocavalieri.me/writing/effortless-animations-with-css-view-transitions)
* [2026-01-07, 14:58:59](https://lobste.rs/s/wzlpbz/hermes_studio_demo_my_react_native) - [Hermes Studio demo (my React Native decompiler and disassembler)](https://www.youtube.com/watch?v=9wi8wMzmg-U)
* [2026-01-07, 14:46:31](https://news.ycombinator.com/item?id=46526933) - [LaTeX Coffee Stains (2021) [pdf]](https://ctan.math.illinois.edu/graphics/pgf/contrib/coffeestains/coffeestains-en.pdf)
* [2026-01-07, 13:40:57](https://lobste.rs/s/vgbfpl/open_source_mapping_for_news_reuters) - [Open Source Mapping for News: Reuters](https://scottreinhardmaps.com/blogs/custom-mapping-projects/custom-reuters-open-source-mapping)
* [2026-01-07, 13:23:02](https://lobste.rs/s/jcmtaa/a4_paper_stories) - [A4 Paper Stories](https://susam.net/a4-paper-stories.html)
* [2026-01-07, 13:17:00](https://soylentnews.org/article.pl?sid=26/01/06/0727248&amp;from=rss) - [Stingless Bees from the Amazon Granted Legal Rights in World First](https://soylentnews.org/article.pl?sid=26/01/06/0727248&amp;from=rss)
* [2026-01-07, 12:54:43](https://news.ycombinator.com/item?id=46525888) - [A4 Paper Stories](https://susam.net/a4-paper-stories.html)
* [2026-01-07, 12:29:11](https://news.ycombinator.com/item?id=46525640) - [“Stop Designing Languages. Write Libraries Instead” (2016)](https://lbstanza.org/purpose_of_programming_languages.html)
* [2026-01-07, 11:24:34](https://lobste.rs/s/0mdcpr/most_popular_go_dependency_is) - [The most popular Go dependency is…](https://blog.thibaut-rousseau.com/blog/the-most-popular-go-dependency-is/)
* [2026-01-07, 10:29:46](https://lobste.rs/s/jx4zeh/gothub_ssh_signup) - [GoTHub SSH Signup](https://gothub.org/signup.html)
* [2026-01-07, 08:34:12](https://lobste.rs/s/2vbnuj/postgresql_18_returning_enhancements) - [PostgreSQL 18 RETURNING Enhancements: A Game Changer for Modern Applications](https://www.pgedge.com/blog/postgresql-18-returning-enhancements-a-game-changer-for-modern-applications)
* [2026-01-07, 08:31:00](https://soylentnews.org/article.pl?sid=26/01/06/0722246&amp;from=rss) - [Lisuan&apos;s G100 Series Has Reportedly Begun Shipping Out to Customers in First Batch of Deliveries](https://soylentnews.org/article.pl?sid=26/01/06/0722246&amp;from=rss)
* [2026-01-07, 08:18:09](https://news.ycombinator.com/item?id=46523887) - [The Q, K, V Matrices](https://arpitbhayani.me/blogs/qkv-matrices/)
* [2026-01-07, 06:23:33](https://lobste.rs/s/7bdvsi/xmpp_metadata) - [XMPP and metadata](https://blog.mathieui.net/xmpp-and-metadata.html)
* [2026-01-07, 03:47:00](https://soylentnews.org/article.pl?sid=26/01/05/1230257&amp;from=rss) - [China Mandates 50% Domestic Equipment Rule for Chipmakers](https://soylentnews.org/article.pl?sid=26/01/05/1230257&amp;from=rss)
* [2026-01-07, 00:20:18](https://lobste.rs/s/1uubbb/why_trans_flag_emoji_is_5_codepoint) - [why the trans flag emoji is the 5-codepoint sequence it is](https://hecate.pink/blog/2026/trans-flag-emoji/)
* [2026-01-06, 23:06:07](https://lobste.rs/s/bffnsm/where_are_all_low_level_jits) - [Where are all the low-level JITs?](https://lobste.rs/s/bffnsm/where_are_all_low_level_jits)
* [2026-01-06, 23:01:00](https://soylentnews.org/article.pl?sid=26/01/05/1222243&amp;from=rss) - [Blu-Ray Hits 20 Years Old, and It Isn&apos;t Dead Yet](https://soylentnews.org/article.pl?sid=26/01/05/1222243&amp;from=rss)
* [2026-01-06, 18:19:00](https://soylentnews.org/article.pl?sid=26/01/03/0139235&amp;from=rss) - [Strengthening Asphalt Roads With a Unique Green Ingredient: Algae](https://soylentnews.org/article.pl?sid=26/01/03/0139235&amp;from=rss)
* [2026-01-06, 13:37:00](https://soylentnews.org/article.pl?sid=26/01/03/0137246&amp;from=rss) - [Venus Cloud Research Highlights Value of Combining Light and Polarization Measurements](https://soylentnews.org/article.pl?sid=26/01/03/0137246&amp;from=rss)
* [2026-01-06, 08:44:00](https://soylentnews.org/article.pl?sid=26/01/03/0135207&amp;from=rss) - [How Talking Slows Eye Movements Behind the Wheel](https://soylentnews.org/article.pl?sid=26/01/03/0135207&amp;from=rss)
* [2026-01-06, 04:01:00](https://soylentnews.org/article.pl?sid=26/01/03/0133238&amp;from=rss) - [Mystery Solved: Scientists Discover Why Colorectal Cancer Defies Immune System Rules](https://soylentnews.org/article.pl?sid=26/01/03/0133238&amp;from=rss)
* [2026-01-05, 23:19:00](https://soylentnews.org/article.pl?sid=26/01/02/1627244&amp;from=rss) - [The Worst CPUs Ever Made](https://soylentnews.org/article.pl?sid=26/01/02/1627244&amp;from=rss)
* [2026-01-05, 20:50:44](https://news.ycombinator.com/item?id=46504761) - [Reading Without Limits or Expectations](https://www.carolinecrampton.com/reading-without-limits-or-expectations/)
* [2026-01-05, 18:37:00](https://soylentnews.org/article.pl?sid=26/01/02/1618258&amp;from=rss) - [Parkinson&apos;s is the Canary in the Coal Mine Warning Us That Our Environment is Sick](https://soylentnews.org/article.pl?sid=26/01/02/1618258&amp;from=rss)
* [2026-01-05, 13:53:00](https://soylentnews.org/politics/article.pl?sid=26/01/02/1617210&amp;from=rss) - [U.S. Allows TSMC to Import Chipmaking Equipment to its China Fabs](https://soylentnews.org/politics/article.pl?sid=26/01/02/1617210&amp;from=rss)
* [2026-01-05, 09:03:00](https://soylentnews.org/article.pl?sid=26/01/02/1614239&amp;from=rss) - [How Do We Hold Companies Accountable for \&quot;Do as I Say, Not as I Do\&quot; Security Practices?](https://soylentnews.org/article.pl?sid=26/01/02/1614239&amp;from=rss)
* [2026-01-05, 04:19:00](https://soylentnews.org/article.pl?sid=26/01/02/1613215&amp;from=rss) - [In 1962, a Geologist Went Into a Cave. 2 Months Later, He&apos;d Accidentally Invented a New Field](https://soylentnews.org/article.pl?sid=26/01/02/1613215&amp;from=rss)
* [2026-01-05, 00:07:44](https://news.ycombinator.com/item?id=46493785) - [The Napoleon Technique: Postponing Things to Increase Productivity](https://effectiviology.com/napoleon/)
* [2026-01-04, 23:36:00](https://soylentnews.org/article.pl?sid=26/01/02/0549225&amp;from=rss) - [He Made Beer That&apos;s Also a Vaccine. Now Controversy is Brewing](https://soylentnews.org/article.pl?sid=26/01/02/0549225&amp;from=rss)
* [2026-01-04, 19:22:23](https://news.ycombinator.com/item?id=46491219) - [GLSL Web CRT Shader](https://blog.gingerbeardman.com/2026/01/04/glsl-web-crt-shader/)
* [2026-01-04, 18:52:00](https://soylentnews.org/article.pl?sid=26/01/02/0544211&amp;from=rss) - [HP-UX Hits End-of-Life](https://soylentnews.org/article.pl?sid=26/01/02/0544211&amp;from=rss)
* [2026-01-04, 14:06:00](https://soylentnews.org/article.pl?sid=26/01/02/018201&amp;from=rss) - [Americans Lost $333 Million to Bitcoin ATM Fraud in 2025](https://soylentnews.org/article.pl?sid=26/01/02/018201&amp;from=rss)
* [2026-01-04, 09:22:00](https://soylentnews.org/article.pl?sid=26/01/02/016205&amp;from=rss) - [Large Hadron Collider Upgrade](https://soylentnews.org/article.pl?sid=26/01/02/016205&amp;from=rss)
* [2026-01-04, 04:34:00](https://soylentnews.org/article.pl?sid=26/01/02/010257&amp;from=rss) - [Ozempic is Changing the Foods Americans Buy](https://soylentnews.org/article.pl?sid=26/01/02/010257&amp;from=rss)
