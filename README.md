# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [The Importance of Sandboxing](https://www.garden-lang.org/blog/sandbox.html) - Insights into the critical role of sandboxing in software development, explaining its significance for security and testing. [Comments](https://lobste.rs/s/kf1uns/importance_sandboxing).

* [ACM is Now Fully Open Access](https://www.acm.org/articles/bulletins/2026/january/acm-open-access) - The Association for Computing Machinery makes all publications open access, advancing knowledge sharing. [Comments](https://lobste.rs/s/3bccy3/acm_is_now_fully_open_access).

* [Unit testing your code’s performance, part 1: Big-O scaling](https://pythonspeed.com/articles/big-o-tests/) - A guide to using unit tests for examining performance and scalability. [Comments](https://lobste.rs/s/cepyv8/unit_testing_your_code_s_performance_part).

* [Show HN: I visualized the entire history of Citi Bike in the browser](https://bikemap.nyc/) - An innovative browser tool showcasing Citi Bike’s historical data with interactive visualizations. [Comments](https://news.ycombinator.com/item?id=46530832).

* [NPM to implement staged publishing after turbulent shift off classic tokens](https://socket.dev/blog/npm-to-implement-staged-publishing) - NPM announces changes to enhance publishing processes following security challenges. [Comments](https://news.ycombinator.com/item?id=46530448).

* [PostgreSQL 18 RETURNING Enhancements: A Game Changer for Modern Applications](https://www.pgedge.com/blog/postgresql-18-returning-enhancements-a-game-changer-for-modern-applications) - A feature boost enabling greater database integration for modern applications. [Comments](https://lobste.rs/s/2vbnuj/postgresql_18_returning_enhancements).

## Artificial Intelligence and Machine Learning

* [Show HN: An LLM response cache that's aware of dynamic data](https://blog.butter.dev/on-automatic-template-induction-for-response-caching) - Advancement in optimizing large language model performance through dynamic response caching. [Comments](https://news.ycombinator.com/item?id=46532755).

* [Claude Code Emergent Behavior: When Skills Combine](https://vibeandscribe.xyz/posts/2025-01-07-emergent-behavior.html) - Analysis of emergent behavior in AI models, focusing on their ability to integrate multiple skills. [Comments](https://news.ycombinator.com/item?id=46531794).

* [LMArena is a cancer on AI](https://surgehq.ai/blog/lmarena-is-a-plague-on-ai) - A critical perspective on LMArena’s impact on AI development. [Comments](https://news.ycombinator.com/item?id=46522632).

## Security

* [Practical Collision Attack Against Long Key IDs in PGP](https://soatok.blog/2026/01/07/practical-collision-attack-against-long-key-ids-in-pgp/) - Discovering a vulnerability in PGP long key IDs through a practical collision attack. [Comments](https://lobste.rs/s/9uesig/practical_collision_attack_against_long).

* [Notion AI: Unpatched data exfiltration](https://www.promptarmor.com/resources/notion-ai-unpatched-data-exfiltration) - Reports of a potential data security vulnerability in Notion AI. [Comments](https://news.ycombinator.com/item?id=46531565).

* [Health care data breach affects over 600k patients, Illinois agency says](https://www.nprillinois.org/illinois/2026-01-06/health-care-data-breach-affects-600-000-patients-illinois-agency-says) - A security breach impacts a significant number of healthcare records. [Comments](https://news.ycombinator.com/item?id=46528353).

## Science and Environment

* [How Aviation Emissions Could Be Halved Without Cutting Journeys](https://news.slashdot.org/story/26/01/07/1728220/how-aviation-emissions-could-be-halved-without-cutting-journeys?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Strategies for reducing environmental impact in aviation while maintaining travel. [Comments](https://news.slashdot.org/story/26/01/07/1728220/how-aviation-emissions-could-be-halved-without-cutting-journeys?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [Strengthening Asphalt Roads With a Unique Green Ingredient: Algae](https://soylentnews.org/article.pl?sid=26/01/03/0139235&amp;from=rss) - The use of algae as a sustainable additive to asphalt. [Comments](https://soylentnews.org/article.pl?sid=26/01/03/0139235&amp;from=rss).

* [Scientists Outline How to Control Light at the Atomic Scale Using Polaritons](https://soylentnews.org/article.pl?sid=26/01/02/0059210&amp;from=rss) - A breakthrough in manipulating light for nanoscale technologies. [Comments](https://soylentnews.org/article.pl?sid=26/01/02/0059210&amp;from=rss).

## Cultural Insights

* [Software craftsmanship is dead](https://www.pcloadletter.dev/blog/craftsmanship-is-dead/) - A reflective critique on the state and value of software craftsmanship in modern development. [Comments](https://lobste.rs/s/jbsyhe/software_craftsmanship_is_dead).

* [Relax for the same result](https://sive.rs/relax) - Promoting mindfulness in achieving results without unnecessary stress. [Comments](https://lobste.rs/s/6gsmoh/relax_for_same_result).

* [A4 Paper Stories](https://susam.net/a4-paper-stories.html) - A creative exploration of the versatility and simplicity of A4 paper in daily life. [Comments](https://lobste.rs/s/jcmtaa/a4_paper_stories).

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

* [2026-01-07, 21:51:19](https://lobste.rs/s/kf1uns/importance_sandboxing) - [The Importance of Sandboxing](https://www.garden-lang.org/blog/sandbox.html)
* [2026-01-07, 21:40:41](https://news.ycombinator.com/item?id=46533343) - [2026 Predictions Scorecard](https://rodneybrooks.com/predictions-scorecard-2026-january-01/)
* [2026-01-07, 21:38:56](https://news.ycombinator.com/item?id=46533315) - [My first paper: A practical implementation of Rubiks cube based passkeys](https://ieeexplore.ieee.org/document/11280260)
* [2026-01-07, 21:29:01](https://lobste.rs/s/3bccy3/acm_is_now_fully_open_access) - [ACM is Now Fully Open Access](https://www.acm.org/articles/bulletins/2026/january/acm-open-access)
* [2026-01-07, 21:25:00](https://news.slashdot.org/story/26/01/07/2121252/warner-bros-rejects-revised-paramount-bid-sticks-with-netflix?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Warner Bros Rejects Revised Paramount Bid, Sticks With Netflix](https://news.slashdot.org/story/26/01/07/2121252/warner-bros-rejects-revised-paramount-bid-sticks-with-netflix?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-07, 21:16:47](https://news.ycombinator.com/item?id=46532961) - [So you wanna de-bog yourself (2024)](https://www.experimental-history.com/p/so-you-wanna-de-bog-yourself)
* [2026-01-07, 21:04:58](https://news.ycombinator.com/item?id=46532755) - [Show HN: An LLM response cache that&apos;s aware of dynamic data](https://blog.butter.dev/on-automatic-template-induction-for-response-caching)
* [2026-01-07, 20:45:00](https://hardware.slashdot.org/story/26/01/07/1913253/power-bank-feature-creep-is-out-of-control?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Power Bank Feature Creep is Out of Control ](https://hardware.slashdot.org/story/26/01/07/1913253/power-bank-feature-creep-is-out-of-control?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-07, 20:40:20](https://lobste.rs/s/9uesig/practical_collision_attack_against_long) - [Practical Collision Attack Against Long Key IDs in PGP](https://soatok.blog/2026/01/07/practical-collision-attack-against-long-key-ids-in-pgp/)
* [2026-01-07, 20:25:51](https://news.ycombinator.com/item?id=46532075) - [Claude Code CLI Broken](https://github.com/anthropics/claude-code/issues/16673)
* [2026-01-07, 20:19:34](https://lobste.rs/s/6gsmoh/relax_for_same_result) - [Relax for the same result](https://sive.rs/relax)
* [2026-01-07, 20:16:50](https://news.ycombinator.com/item?id=46531925) - [Tailscale state file encryption no longer enabled by default](https://tailscale.com/changelog)
* [2026-01-07, 20:13:46](https://lobste.rs/s/cepyv8/unit_testing_your_code_s_performance_part) - [Unit testing your code’s performance, part 1: Big-O scaling](https://pythonspeed.com/articles/big-o-tests/)
* [2026-01-07, 20:06:53](https://news.ycombinator.com/item?id=46531794) - [Claude Code Emergent Behavior: When Skills Combine](https://vibeandscribe.xyz/posts/2025-01-07-emergent-behavior.html)
* [2026-01-07, 20:01:00](https://news.slashdot.org/story/26/01/07/1848240/new-dietary-guidelines-abandon-longstanding-advice-on-alcohol?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Dietary Guidelines Abandon Longstanding Advice on Alcohol](https://news.slashdot.org/story/26/01/07/1848240/new-dietary-guidelines-abandon-longstanding-advice-on-alcohol?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-07, 19:59:22](https://lobste.rs/s/ifnvlk/haskell_debugger_for_ghc_9_14) - [The Haskell Debugger for GHC 9.14](https://discourse.haskell.org/t/the-haskell-debugger-for-ghc-9-14/13499)
* [2026-01-07, 19:49:54](https://news.ycombinator.com/item?id=46531565) - [Notion AI: Unpatched data exfiltration](https://www.promptarmor.com/resources/notion-ai-unpatched-data-exfiltration)
* [2026-01-07, 19:29:39](https://news.ycombinator.com/item?id=46531280) - [ChatGPT Health](https://openai.com/index/introducing-chatgpt-health/)
* [2026-01-07, 19:21:00](https://hardware.slashdot.org/story/26/01/07/1749257/samsungs-rolling-ballie-robot-indefinitely-shelved-after-delays?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Samsung&apos;s Rolling Ballie Robot Indefinitely Shelved After Delays](https://hardware.slashdot.org/story/26/01/07/1749257/samsungs-rolling-ballie-robot-indefinitely-shelved-after-delays?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-07, 19:16:00](https://lobste.rs/s/trwil3/myths_about_logitech_developer_id) - [Myths about Logitech Developer ID certificate expiration](https://lapcatsoftware.com/articles/2026/1/2.html)
* [2026-01-07, 19:13:19](https://news.ycombinator.com/item?id=46531068) - [US will ban Wall Street investors from buying single-family homes](https://www.reuters.com/world/us/us-will-ban-large-institutional-investors-buying-single-family-homes-trump-says-2026-01-07/)
* [2026-01-07, 18:57:18](https://news.ycombinator.com/item?id=46530832) - [Show HN: I visualized the entire history of Citi Bike in the browser](https://bikemap.nyc/)
* [2026-01-07, 18:39:00](https://entertainment.slashdot.org/story/26/01/07/1743200/the-inevitable-rise-of-the-art-tv?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Inevitable Rise of the Art TV](https://entertainment.slashdot.org/story/26/01/07/1743200/the-inevitable-rise-of-the-art-tv?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-07, 18:31:19](https://news.ycombinator.com/item?id=46530448) - [NPM to implement staged publishing after turbulent shift off classic tokens](https://socket.dev/blog/npm-to-implement-staged-publishing)
* [2026-01-07, 18:24:22](https://lobste.rs/s/jbsyhe/software_craftsmanship_is_dead) - [Software craftsmanship is dead](https://www.pcloadletter.dev/blog/craftsmanship-is-dead/)
* [2026-01-07, 18:01:00](https://news.slashdot.org/story/26/01/07/1728220/how-aviation-emissions-could-be-halved-without-cutting-journeys?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Aviation Emissions Could Be Halved Without Cutting Journeys](https://news.slashdot.org/story/26/01/07/1728220/how-aviation-emissions-could-be-halved-without-cutting-journeys?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-07, 18:00:00](https://soylentnews.org/article.pl?sid=26/01/06/0740234&amp;from=rss) - [China Leads Research in 90% of Crucial Technologies](https://soylentnews.org/article.pl?sid=26/01/06/0740234&amp;from=rss)
* [2026-01-07, 17:22:09](https://news.ycombinator.com/item?id=46529237) - [Eat Real Food](https://realfood.gov)
* [2026-01-07, 17:21:00](https://it.slashdot.org/story/26/01/07/1659220/microsoft-cancels-plans-to-rate-limit-exchange-online-bulk-emails?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Cancels Plans To Rate Limit Exchange Online Bulk Emails](https://it.slashdot.org/story/26/01/07/1659220/microsoft-cancels-plans-to-rate-limit-exchange-online-bulk-emails?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-07, 16:41:00](https://it.slashdot.org/story/26/01/07/1636213/logitech-caused-its-mice-to-freak-out-by-not-renewing-a-certificate?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Logitech Caused Its Mice To Freak Out By Not Renewing a Certificate](https://it.slashdot.org/story/26/01/07/1636213/logitech-caused-its-mice-to-freak-out-by-not-renewing-a-certificate?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-07, 16:28:14](https://news.ycombinator.com/item?id=46528353) - [Health care data breach affects over 600k patients, Illinois agency says](https://www.nprillinois.org/illinois/2026-01-06/health-care-data-breach-affects-600-000-patients-illinois-agency-says)
* [2026-01-07, 16:08:36](https://news.ycombinator.com/item?id=46528045) - [Building voice agents with Nvidia open models](https://www.daily.co/blog/building-voice-agents-with-nvidia-open-models/)
* [2026-01-07, 16:07:11](https://lobste.rs/s/mekflf/voxtype_voice_text_with_push_talk_for) - [voxtype: Voice-to-text with push-to-talk for Wayland compositors](https://github.com/peteonrails/voxtype)
* [2026-01-07, 16:02:19](https://news.ycombinator.com/item?id=46527950) - [Creators of Tailwind laid off 75% of their engineering team](https://github.com/tailwindlabs/tailwindcss.com/pull/2388)
* [2026-01-07, 16:00:00](https://tech.slashdot.org/story/26/01/07/1556212/dell-walks-back-ai-first-messaging-after-learning-consumers-dont-care?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dell Walks Back AI-First Messaging After Learning Consumers Don&apos;t Care](https://tech.slashdot.org/story/26/01/07/1556212/dell-walks-back-ai-first-messaging-after-learning-consumers-dont-care?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-07, 15:53:21](https://lobste.rs/s/krxqsa/nes_top_gun_landing_hotfix) - [NES Top Gun: landing hotfix](https://relaxing.run/blag/posts/top-gun-sim)
* [2026-01-07, 15:50:50](https://news.ycombinator.com/item?id=46527775) - [Many hells of WebDAV](https://candid.dev/blog/many-hells-of-webdav)
* [2026-01-07, 15:41:01](https://news.ycombinator.com/item?id=46527645) - [The Target forensics lab (2024)](https://thehorizonsun.com/features/2024/04/11/the-target-forensics-lab/)
* [2026-01-07, 15:20:00](https://it.slashdot.org/story/26/01/07/152242/everyone-hates-onedrive-microsofts-cloud-app-that-steals-then-deletes-all-your-files?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Everyone Hates OneDrive, Microsoft&apos;s Cloud App That Steals Then Deletes All Your Files&apos;](https://it.slashdot.org/story/26/01/07/152242/everyone-hates-onedrive-microsofts-cloud-app-that-steals-then-deletes-all-your-files?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-07, 15:03:41](https://news.ycombinator.com/item?id=46527161) - [Shipmap.org](https://www.shipmap.org/)
* [2026-01-07, 15:03:34](https://news.ycombinator.com/item?id=46527157) - [Meditation as Wakeful Relaxation: Unclenching Smooth Muscle](https://psychotechnology.substack.com/p/meditation-as-wakeful-relaxation)
* [2026-01-07, 15:00:05](https://lobste.rs/s/zpwlya/effortless_animations_with_css_view) - [Effortless animations with CSS view transitions](https://giacomocavalieri.me/writing/effortless-animations-with-css-view-transitions)
* [2026-01-07, 14:58:59](https://lobste.rs/s/wzlpbz/hermes_studio_demo_my_react_native) - [Hermes Studio demo (my React Native decompiler and disassembler)](https://www.youtube.com/watch?v=9wi8wMzmg-U)
* [2026-01-07, 14:46:31](https://news.ycombinator.com/item?id=46526933) - [LaTeX Coffee Stains (2021) [pdf]](https://ctan.math.illinois.edu/graphics/pgf/contrib/coffeestains/coffeestains-en.pdf)
* [2026-01-07, 14:40:00](https://news.slashdot.org/story/26/01/07/1438220/polymarket-refuses-to-pay-bets-that-us-would-invade-venezuela?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Polymarket Refuses To Pay Bets That US Would &apos;Invade&apos; Venezuela](https://news.slashdot.org/story/26/01/07/1438220/polymarket-refuses-to-pay-bets-that-us-would-invade-venezuela?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-07, 14:29:25](https://news.ycombinator.com/item?id=46526740) - [Sugar industry influenced researchers and blamed fat for CVD (2016)](https://www.ucsf.edu/news/2016/09/404081/sugar-papers-reveal-industry-role-shifting-national-heart-disease-focus)
* [2026-01-07, 14:00:00](https://entertainment.slashdot.org/story/26/01/07/094206/south-koreas-president-identifies-a-new-enemy-baldness?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [South Korea&apos;s President Identifies a New Enemy: Baldness](https://entertainment.slashdot.org/story/26/01/07/094206/south-koreas-president-identifies-a-new-enemy-baldness?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-07, 13:40:57](https://lobste.rs/s/vgbfpl/open_source_mapping_for_news_reuters) - [Open Source Mapping for News: Reuters](https://scottreinhardmaps.com/blogs/custom-mapping-projects/custom-reuters-open-source-mapping)
* [2026-01-07, 13:23:02](https://lobste.rs/s/jcmtaa/a4_paper_stories) - [A4 Paper Stories](https://susam.net/a4-paper-stories.html)
* [2026-01-07, 13:17:00](https://soylentnews.org/article.pl?sid=26/01/06/0727248&amp;from=rss) - [Stingless Bees from the Amazon Granted Legal Rights in World First](https://soylentnews.org/article.pl?sid=26/01/06/0727248&amp;from=rss)
* [2026-01-07, 13:00:00](https://yro.slashdot.org/story/26/01/07/0033238/founder-of-spyware-maker-pctattletale-pleads-guilty-to-hacking-advertising-surveillance-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Founder of Spyware Maker PcTattletale Pleads Guilty To Hacking, Advertising Surveillance Software](https://yro.slashdot.org/story/26/01/07/0033238/founder-of-spyware-maker-pctattletale-pleads-guilty-to-hacking-advertising-surveillance-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-07, 12:54:43](https://news.ycombinator.com/item?id=46525888) - [A4 Paper Stories](https://susam.net/a4-paper-stories.html)
* [2026-01-07, 12:00:20](https://news.ycombinator.com/item?id=46525394) - [Optery (YC W22) Hiring a CISO and Web Scraping Engineers (Node) (US and Latam)](https://www.optery.com/careers/)
* [2026-01-07, 11:24:34](https://lobste.rs/s/0mdcpr/most_popular_go_dependency_is) - [The most popular Go dependency is…](https://blog.thibaut-rousseau.com/blog/the-most-popular-go-dependency-is/)
* [2026-01-07, 11:05:02](https://lobste.rs/s/43g9u2/c_from_scratch_learn_build_safety) - [c-from-scratch: Learn to build safety-critical systems in C](https://github.com/williamofai/c-from-scratch)
* [2026-01-07, 10:29:46](https://lobste.rs/s/jx4zeh/gothub_ssh_signup) - [GoTHub SSH Signup](https://gothub.org/signup.html)
* [2026-01-07, 10:00:00](https://yro.slashdot.org/story/26/01/07/0026210/congressman-introduces-legislation-to-criminalize-insider-trading-on-prediction-markets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Congressman Introduces Legislation To Criminalize Insider Trading On Prediction Markets](https://yro.slashdot.org/story/26/01/07/0026210/congressman-introduces-legislation-to-criminalize-insider-trading-on-prediction-markets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-07, 08:34:12](https://lobste.rs/s/2vbnuj/postgresql_18_returning_enhancements) - [PostgreSQL 18 RETURNING Enhancements: A Game Changer for Modern Applications](https://www.pgedge.com/blog/postgresql-18-returning-enhancements-a-game-changer-for-modern-applications)
* [2026-01-07, 08:31:00](https://soylentnews.org/article.pl?sid=26/01/06/0722246&amp;from=rss) - [Lisuan&apos;s G100 Series Has Reportedly Begun Shipping Out to Customers in First Batch of Deliveries](https://soylentnews.org/article.pl?sid=26/01/06/0722246&amp;from=rss)
* [2026-01-07, 07:00:00](https://yro.slashdot.org/story/26/01/07/0014200/an-ai-generated-nws-map-invented-fake-towns-in-idaho?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [An AI-Generated NWS Map Invented Fake Towns In Idaho](https://yro.slashdot.org/story/26/01/07/0014200/an-ai-generated-nws-map-invented-fake-towns-in-idaho?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-07, 06:23:33](https://lobste.rs/s/7bdvsi/xmpp_metadata) - [XMPP and metadata](https://blog.mathieui.net/xmpp-and-metadata.html)
* [2026-01-07, 04:48:50](https://news.ycombinator.com/item?id=46522686) - [A glimpse into V8 development for RISC-V](https://riseproject.dev/2025/12/09/a-glimpse-into-v8-development-for-risc-v/)
* [2026-01-07, 04:40:48](https://news.ycombinator.com/item?id=46522632) - [LMArena is a cancer on AI](https://surgehq.ai/blog/lmarena-is-a-plague-on-ai)
* [2026-01-07, 03:47:00](https://soylentnews.org/article.pl?sid=26/01/05/1230257&amp;from=rss) - [China Mandates 50% Domestic Equipment Rule for Chipmakers](https://soylentnews.org/article.pl?sid=26/01/05/1230257&amp;from=rss)
* [2026-01-07, 02:25:08](https://news.ycombinator.com/item?id=46521773) - [Polymarket refuses to pay bets that US would &apos;invade&apos; Venezuela](https://www.ft.com/content/985ae542-1ab4-491e-8e6e-b30f6a3ab666)
* [2026-01-07, 00:20:18](https://lobste.rs/s/1uubbb/why_trans_flag_emoji_is_5_codepoint) - [why the trans flag emoji is the 5-codepoint sequence it is](https://hecate.pink/blog/2026/trans-flag-emoji/)
* [2026-01-06, 23:45:42](https://lobste.rs/s/xtfpdr/this_month_redox_december_2025) - [This Month in Redox - December 2025](https://www.redox-os.org/news/this-month-251231/)
* [2026-01-06, 23:06:07](https://lobste.rs/s/bffnsm/where_are_all_low_level_jits) - [Where are all the low-level JITs?](https://lobste.rs/s/bffnsm/where_are_all_low_level_jits)
* [2026-01-06, 23:01:00](https://soylentnews.org/article.pl?sid=26/01/05/1222243&amp;from=rss) - [Blu-Ray Hits 20 Years Old, and It Isn&apos;t Dead Yet](https://soylentnews.org/article.pl?sid=26/01/05/1222243&amp;from=rss)
* [2026-01-06, 18:19:00](https://soylentnews.org/article.pl?sid=26/01/03/0139235&amp;from=rss) - [Strengthening Asphalt Roads With a Unique Green Ingredient: Algae](https://soylentnews.org/article.pl?sid=26/01/03/0139235&amp;from=rss)
* [2026-01-06, 17:00:30](https://lobste.rs/s/uqsbvk/zero_heap_allocation_http_server_using) - [Zero heap allocation HTTP server using OxCaml](https://github.com/avsm/httpz)
* [2026-01-06, 14:38:19](https://lobste.rs/s/gszn6p/there_were_bgp_anomalies_during) - [There Were BGP Anomalies During The Venezuela Blackout](https://loworbitsecurity.com/radar/radar16/)
* [2026-01-06, 13:37:00](https://soylentnews.org/article.pl?sid=26/01/03/0137246&amp;from=rss) - [Venus Cloud Research Highlights Value of Combining Light and Polarization Measurements](https://soylentnews.org/article.pl?sid=26/01/03/0137246&amp;from=rss)
* [2026-01-06, 13:01:06](https://lobste.rs/s/rvgvgj/best_line_length) - [The Best Line Length](https://blog.glyph.im/2025/08/the-best-line-length.html)
* [2026-01-06, 08:44:00](https://soylentnews.org/article.pl?sid=26/01/03/0135207&amp;from=rss) - [How Talking Slows Eye Movements Behind the Wheel](https://soylentnews.org/article.pl?sid=26/01/03/0135207&amp;from=rss)
* [2026-01-06, 04:01:00](https://soylentnews.org/article.pl?sid=26/01/03/0133238&amp;from=rss) - [Mystery Solved: Scientists Discover Why Colorectal Cancer Defies Immune System Rules](https://soylentnews.org/article.pl?sid=26/01/03/0133238&amp;from=rss)
* [2026-01-05, 23:19:00](https://soylentnews.org/article.pl?sid=26/01/02/1627244&amp;from=rss) - [The Worst CPUs Ever Made](https://soylentnews.org/article.pl?sid=26/01/02/1627244&amp;from=rss)
* [2026-01-05, 18:37:00](https://soylentnews.org/article.pl?sid=26/01/02/1618258&amp;from=rss) - [Parkinson&apos;s is the Canary in the Coal Mine Warning Us That Our Environment is Sick](https://soylentnews.org/article.pl?sid=26/01/02/1618258&amp;from=rss)
* [2026-01-05, 13:53:00](https://soylentnews.org/politics/article.pl?sid=26/01/02/1617210&amp;from=rss) - [U.S. Allows TSMC to Import Chipmaking Equipment to its China Fabs](https://soylentnews.org/politics/article.pl?sid=26/01/02/1617210&amp;from=rss)
* [2026-01-05, 09:03:00](https://soylentnews.org/article.pl?sid=26/01/02/1614239&amp;from=rss) - [How Do We Hold Companies Accountable for \&quot;Do as I Say, Not as I Do\&quot; Security Practices?](https://soylentnews.org/article.pl?sid=26/01/02/1614239&amp;from=rss)
* [2026-01-05, 04:19:00](https://soylentnews.org/article.pl?sid=26/01/02/1613215&amp;from=rss) - [In 1962, a Geologist Went Into a Cave. 2 Months Later, He&apos;d Accidentally Invented a New Field](https://soylentnews.org/article.pl?sid=26/01/02/1613215&amp;from=rss)
* [2026-01-04, 23:36:00](https://soylentnews.org/article.pl?sid=26/01/02/0549225&amp;from=rss) - [He Made Beer That&apos;s Also a Vaccine. Now Controversy is Brewing](https://soylentnews.org/article.pl?sid=26/01/02/0549225&amp;from=rss)
* [2026-01-04, 18:52:00](https://soylentnews.org/article.pl?sid=26/01/02/0544211&amp;from=rss) - [HP-UX Hits End-of-Life](https://soylentnews.org/article.pl?sid=26/01/02/0544211&amp;from=rss)
* [2026-01-04, 14:06:00](https://soylentnews.org/article.pl?sid=26/01/02/018201&amp;from=rss) - [Americans Lost $333 Million to Bitcoin ATM Fraud in 2025](https://soylentnews.org/article.pl?sid=26/01/02/018201&amp;from=rss)
* [2026-01-04, 09:22:00](https://soylentnews.org/article.pl?sid=26/01/02/016205&amp;from=rss) - [Large Hadron Collider Upgrade](https://soylentnews.org/article.pl?sid=26/01/02/016205&amp;from=rss)
* [2026-01-04, 04:34:00](https://soylentnews.org/article.pl?sid=26/01/02/010257&amp;from=rss) - [Ozempic is Changing the Foods Americans Buy](https://soylentnews.org/article.pl?sid=26/01/02/010257&amp;from=rss)
* [2026-01-03, 23:48:00](https://soylentnews.org/article.pl?sid=26/01/02/0059210&amp;from=rss) - [Scientists Outline How to Control Light at the Atomic Scale Using Polaritons](https://soylentnews.org/article.pl?sid=26/01/02/0059210&amp;from=rss)
* [2026-01-03, 19:04:00](https://soylentnews.org/article.pl?sid=26/01/02/0056200&amp;from=rss) - [UK Company Shoots a 1,000-Degree Furnace Into Space to Study Off-World Chip Manufacturing](https://soylentnews.org/article.pl?sid=26/01/02/0056200&amp;from=rss)
* [2026-01-03, 14:19:00](https://soylentnews.org/article.pl?sid=26/01/02/0051241&amp;from=rss) - [Start-Up Proposes Scaled Up AI Data Center &apos;Active Radio Cable&apos; Connectivity](https://soylentnews.org/article.pl?sid=26/01/02/0051241&amp;from=rss)
* [2026-01-03, 09:30:00](https://soylentnews.org/article.pl?sid=26/01/02/0043212&amp;from=rss) - [Thousands of Servers Exposed as MongoBleed Vulnerability Exploited](https://soylentnews.org/article.pl?sid=26/01/02/0043212&amp;from=rss)
* [2026-01-03, 07:46:02](https://news.ycombinator.com/item?id=46473726) - [Native Amiga Filesystems on macOS / Linux / Windows with FUSE](https://github.com/reinauer/amifuse)
* [2026-01-03, 04:45:00](https://soylentnews.org/article.pl?sid=26/01/02/0038241&amp;from=rss) - [QNX Releases New Desktop-Focused Image: QNX 8.0 With Xfce on Wayland](https://soylentnews.org/article.pl?sid=26/01/02/0038241&amp;from=rss)
* [2026-01-03, 00:04:00](https://soylentnews.org/article.pl?sid=25/12/31/194236&amp;from=rss) - [For Computational Devices, Talk Isn&apos;t Cheap](https://soylentnews.org/article.pl?sid=25/12/31/194236&amp;from=rss)
