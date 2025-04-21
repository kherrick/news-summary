# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Machine Learning

* [Cursor AI's Own Support Bot Hallucinated Its Usage Policy](https://tech.slashdot.org/story/25/04/21/2031245/cursor-ais-own-support-bot-hallucinated-its-usage-policy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Cursor AI's support bot provided incorrect usage information, highlighting challenges in AI reliability. [Comments](https://tech.slashdot.org/story/25/04/21/2031245/cursor-ais-own-support-bot-hallucinated-its-usage-policy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [Values in the wild: Discovering and analyzing values in real-world language model interactions](https://www.anthropic.com/research/values-wild) - An exploration of how language models convey and interpret values in real-world scenarios. [Comments](https://lobste.rs/s/9zmd46/values_wild_discovering_analyzing).

## Open Source and Technology Advancements

* [Teen Coder Shuts Down Open Source Mac App Whisky, Citing Harm To Paid Apps](https://news.slashdot.org/story/25/04/21/2014234/teen-coder-shuts-down-open-source-mac-app-whisky-citing-harm-to-paid-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Ethical and economic challenges in open-source software lead a young developer to shut down a burgeoning project. [Comments](https://news.slashdot.org/story/25/04/21/2014234/teen-coder-shuts-down-open-source-mac-app-whisky-citing-harm-to-paid-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [This blog is hosted on a Nintendo Wii](https://blog.infected.systems/posts/2025-04-21-this-blog-is-hosted-on-a-nintendo-wii/) - A creative demonstration of hosting a blog on unconventional hardware. [Comments](https://lobste.rs/s/eqqops/this_blog_is_hosted_on_nintendo_wii).

## Scientific Discoveries and Space Exploration

* [Astronomers confirm the existence of a lone black hole](https://phys.org/news/2025-04-astronomers-lone-black-hole.html) - Groundbreaking evidence reveals the solitary nature of specific black holes. [Comments](https://news.ycombinator.com/item?id=43755017).

* [The Universe Isn't Just Expanding—It May be Spinning](https://soylentnews.org/article.pl?sid=25/04/20/059216&amp;from=rss) - Research suggests a new dimension to the universe's movement—the possibility of cosmic spin. [Comments](https://soylentnews.org/article.pl?sid=25/04/20/059216&amp;from=rss).

## Policy and Regulation

* [FTC Sues Uber Over Deceptive Subscription Billing Practices](https://news.slashdot.org/story/25/04/21/1748214/ftc-sues-uber-over-deceptive-subscription-billing-practices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Legal action targets Uber's questionable billing methods. [Comments](https://www.ftc.gov/news-events/news/press-releases/2025/04/ftc-takes-action-against-uber-deceptive-billing-cancellation-practices).

* [EU Says It Will Enforce Digital Rules Irrespective of CEO and Location](https://slashdot.org/story/25/04/21/1910242/eu-says-it-will-enforce-digital-rules-irrespective-of-ceo-and-location?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The EU reaffirms its commitment to enforcing tech regulations on a global scale. [Comments](https://slashdot.org/story/25/04/21/1910242/eu-says-it-will-enforce-digital-rules-irrespective-of-ceo-and-location?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

## Noteworthy Obituaries

* [Pope Francis Has Died](https://soylentnews.org/breakingnews/article.pl?sid=25/04/21/0944225&amp;from=rss) - The deeply revered leader passed at the age of 88; his legacy as a transformative force in the Catholic Church remembered. [Comments](https://soylentnews.org/breakingnews/article.pl?sid=25/04/21/0944225&amp;from=rss).

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

* [2025-04-21, 21:40:00](https://tech.slashdot.org/story/25/04/21/2031245/cursor-ais-own-support-bot-hallucinated-its-usage-policy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cursor AI&apos;s Own Support Bot Hallucinated Its Usage Policy](https://tech.slashdot.org/story/25/04/21/2031245/cursor-ais-own-support-bot-hallucinated-its-usage-policy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-21, 21:33:03](https://lobste.rs/s/1cbbeq/thoughts_on_bluesky_verification) - [Thoughts on Bluesky Verification](https://steveklabnik.com/writing/thoughts-on-bluesky-verification/)
* [2025-04-21, 21:28:46](https://lobste.rs/s/9zmd46/values_wild_discovering_analyzing) - [Values in the wild: Discovering and analyzing values in real-world language model interactions](https://www.anthropic.com/research/values-wild)
* [2025-04-21, 21:13:47](https://lobste.rs/s/ld1kzl/separating_work_personal_config) - [Separating work and personal config](https://www.emoses.org/posts/keeping-work-separate/)
* [2025-04-21, 21:13:00](https://soylentnews.org/article.pl?sid=25/04/20/0513237&amp;from=rss) - [Deepseek Open Source model Promotes Fast Innovation and Extensive Application in China](https://soylentnews.org/article.pl?sid=25/04/20/0513237&amp;from=rss)
* [2025-04-21, 21:00:53](https://news.ycombinator.com/item?id=43756417) - [Cekura (Formerly Vocera) (YC F24) Is Hiring](https://www.ycombinator.com/companies/cekura-2/jobs/xaoCPco-founding-engineer)
* [2025-04-21, 20:57:00](https://tech.slashdot.org/story/25/04/21/2027253/wine-106-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wine 10.6 Released](https://tech.slashdot.org/story/25/04/21/2027253/wine-106-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-21, 20:49:20](https://news.ycombinator.com/item?id=43756309) - [Visiting – Epic](https://www.epic.com/visiting/)
* [2025-04-21, 20:15:00](https://news.slashdot.org/story/25/04/21/2014234/teen-coder-shuts-down-open-source-mac-app-whisky-citing-harm-to-paid-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Teen Coder Shuts Down Open Source Mac App Whisky, Citing Harm To Paid Apps](https://news.slashdot.org/story/25/04/21/2014234/teen-coder-shuts-down-open-source-mac-app-whisky-citing-harm-to-paid-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-21, 19:52:25](https://news.ycombinator.com/item?id=43755753) - [Thieves took their iPhones. Apple won&apos;t give their digital lives back](https://www.washingtonpost.com/technology/2025/04/20/apple-stolen-iphone-lawsuit-theft/)
* [2025-04-21, 19:44:58](https://news.ycombinator.com/item?id=43755682) - [The Value of Differences: Jennifer Lindsay on Noticing Translation](https://sydneyreviewofbooks.com/essays/the-value-of-differences)
* [2025-04-21, 19:31:00](https://lobste.rs/s/eqqops/this_blog_is_hosted_on_nintendo_wii) - [This blog is hosted on a Nintendo Wii](https://blog.infected.systems/posts/2025-04-21-this-blog-is-hosted-on-a-nintendo-wii/)
* [2025-04-21, 19:25:19](https://news.ycombinator.com/item?id=43755506) - [Is 1 Prime, and Does It Matter?](https://mathenchant.wordpress.com/2025/04/21/is-1-prime-and-does-it-matter/)
* [2025-04-21, 19:10:00](https://slashdot.org/story/25/04/21/1910242/eu-says-it-will-enforce-digital-rules-irrespective-of-ceo-and-location?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EU Says It Will Enforce Digital Rules Irrespective of CEO and Location](https://slashdot.org/story/25/04/21/1910242/eu-says-it-will-enforce-digital-rules-irrespective-of-ceo-and-location?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-21, 19:05:23](https://news.ycombinator.com/item?id=43755321) - [An update to our pricing](https://windsurf.com/blog/pricing-v2)
* [2025-04-21, 19:01:55](https://news.ycombinator.com/item?id=43755286) - [A M.2 HDMI capture card](https://interfacinglinux.com/2025/04/18/magewell-eco-m-2-hdmi-capture-card/)
* [2025-04-21, 18:46:31](https://news.ycombinator.com/item?id=43755128) - [Propositional Parlor Puzzle](https://buttondown.com/jaffray/archive/propositional-parlor-puzzle/)
* [2025-04-21, 18:36:23](https://news.ycombinator.com/item?id=43755017) - [Astronomers confirm the existence of a lone black hole](https://phys.org/news/2025-04-astronomers-lone-black-hole.html)
* [2025-04-21, 18:33:02](https://lobste.rs/s/awsduo/new_form_verification_on_bluesky) - [A New Form of Verification on Bluesky](https://bsky.social/about/blog/04-21-2025-verification)
* [2025-04-21, 18:29:04](https://news.ycombinator.com/item?id=43754953) - [Blog hosted on a Nintendo Wii](https://blog.infected.systems/posts/2025-04-21-this-blog-is-hosted-on-a-nintendo-wii/)
* [2025-04-21, 18:15:00](https://news.slashdot.org/story/25/04/21/1748214/ftc-sues-uber-over-deceptive-subscription-billing-practices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FTC Sues Uber Over Deceptive Subscription Billing Practices](https://news.slashdot.org/story/25/04/21/1748214/ftc-sues-uber-over-deceptive-subscription-billing-practices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-21, 17:57:03](https://news.ycombinator.com/item?id=43754620) - [Show HN: Open Codex – OpenAI Codex CLI with open-source LLMs](https://github.com/codingmoh/open-codex)
* [2025-04-21, 17:36:00](https://tech.slashdot.org/story/25/04/21/1736226/google-faces-off-with-us-government-in-attempt-to-break-up-company-in-search-monopoly-case?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Faces Off With US Government in Attempt To Break Up Company in Search Monopoly Case](https://tech.slashdot.org/story/25/04/21/1736226/google-faces-off-with-us-government-in-attempt-to-break-up-company-in-search-monopoly-case?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-21, 17:22:55](https://news.ycombinator.com/item?id=43754274) - [FTC takes action against Uber for deceptive billing and cancellation practices](https://www.ftc.gov/news-events/news/press-releases/2025/04/ftc-takes-action-against-uber-deceptive-billing-cancellation-practices)
* [2025-04-21, 17:07:07](https://news.ycombinator.com/item?id=43754124) - [Show HN: Dia, an open-weights TTS model for generating realistic dialogue](https://github.com/nari-labs/dia)
* [2025-04-21, 16:55:36](https://news.ycombinator.com/item?id=43754004) - [Adding keyword parameters to Tcl procs](https://world-playground-deceit.net/blog/2025/04/adding-keyword-parameters-to-tcl-procs.html)
* [2025-04-21, 16:50:00](https://yro.slashdot.org/story/25/04/21/1650237/verizon-consumer-ceo-says-net-neutrality-went-literally-nowhere?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Verizon Consumer CEO Says Net Neutrality &apos;Went Literally Nowhere&apos;](https://yro.slashdot.org/story/25/04/21/1650237/verizon-consumer-ceo-says-net-neutrality-went-literally-nowhere?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-21, 16:42:52](https://news.ycombinator.com/item?id=43753890) - [Local LLM inference – impressive but too hard to work with](https://medium.com/@aazo11/local-llm-inference-897a06cc17a2)
* [2025-04-21, 16:37:51](https://lobste.rs/s/ymcuvb/retracing_google_s_steps_recreating) - [Retracing Google’s steps: recreating the Webtable in Rust](https://fjall-rs.github.io/post/recreating-webtable/)
* [2025-04-21, 16:28:00](https://soylentnews.org/article.pl?sid=25/04/20/059216&amp;from=rss) - [The Universe Isn&apos;t Just Expanding—It May be Spinning](https://soylentnews.org/article.pl?sid=25/04/20/059216&amp;from=rss)
* [2025-04-21, 16:16:51](https://news.ycombinator.com/item?id=43753651) - [A new form of verification on Bluesky](https://bsky.social/about/blog/04-21-2025-verification)
* [2025-04-21, 16:05:00](https://science.slashdot.org/story/25/04/21/1557216/invasion-of-the-journal-snatchers-the-firms-that-buy-science-publications-and-turn-them-rogue?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Invasion of the &apos;Journal Snatchers&apos;: the Firms That Buy Science Publications and Turn Them Rogue](https://science.slashdot.org/story/25/04/21/1557216/invasion-of-the-journal-snatchers-the-firms-that-buy-science-publications-and-turn-them-rogue?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-21, 15:28:00](https://news.slashdot.org/story/25/04/21/1528216/the-fbi-cant-find-missing-records-of-its-hacking-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The FBI Can&apos;t Find &apos;Missing&apos; Records of Its Hacking Tools](https://news.slashdot.org/story/25/04/21/1528216/the-fbi-cant-find-missing-records-of-its-hacking-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-21, 15:25:47](https://lobste.rs/s/qnvvne/pgdog_horizontal_scaling_for_postgresql) - [pgdog: Horizontal scaling for PostgreSQL with automatic sharding](https://github.com/pgdogdev/pgdog)
* [2025-04-21, 14:43:00](https://tech.slashdot.org/story/25/04/21/1443240/over-100-public-software-companies-getting-squeezed-by-ai-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Over 100 Public Software Companies Getting &apos;Squeezed&apos; by AI, Study Finds](https://tech.slashdot.org/story/25/04/21/1443240/over-100-public-software-companies-getting-squeezed-by-ai-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-21, 14:39:48](https://news.ycombinator.com/item?id=43752532) - [Out of the Fog](https://www.theverge.com/cs/features/651701/vietnam-operation-babylift-adoption-transnational)
* [2025-04-21, 14:15:17](https://news.ycombinator.com/item?id=43752262) - [AI assisted search-based research works now](https://simonwillison.net/2025/Apr/21/ai-assisted-search/)
* [2025-04-21, 14:07:03](https://news.ycombinator.com/item?id=43752176) - [Launch HN: Magic Patterns (YC W23) – AI Design and Prototyping for Product Teams](https://news.ycombinator.com/item?id=43752176)
* [2025-04-21, 14:00:00](https://slashdot.org/story/25/04/21/0728213/we-may-have-already-hit-peak-booze?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [We May Have Already Hit Peak Booze](https://slashdot.org/story/25/04/21/0728213/we-may-have-already-hit-peak-booze?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-21, 12:52:27](https://lobste.rs/s/3s9y3i/nerdlog_fast_multi_host_tui_log_viewer) - [Nerdlog: Fast, multi-host TUI log viewer with timeline histogram](https://dmitryfrank.com/projects/nerdlog/article)
* [2025-04-21, 12:37:19](https://lobste.rs/s/mdshkf/getting_forked_by_microsoft) - [Getting Forked by Microsoft](https://philiplaine.com/posts/getting-forked-by-microsoft/)
* [2025-04-21, 12:26:16](https://news.ycombinator.com/item?id=43751168) - [Tabular Programming: A New Paradigm for Expressive Computing](https://sam.elborai.me/articles/tabular-programming/)
* [2025-04-21, 12:16:16](https://news.ycombinator.com/item?id=43751076) - [Pipelining might be my favorite programming language feature](https://herecomesthemoon.net/2025/04/pipelining/)
* [2025-04-21, 11:41:00](https://soylentnews.org/article.pl?sid=25/04/20/051250&amp;from=rss) - [Google Introduces Firebase Studio, an End-to-End Platform That Builds Custom Apps in-Browser](https://soylentnews.org/article.pl?sid=25/04/20/051250&amp;from=rss)
* [2025-04-21, 11:34:00](https://news.slashdot.org/story/25/04/21/031252/should-the-government-have-regulated-the-early-internet---or-our-future-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Should the Government Have Regulated the Early Internet - or Our Future AI?](https://news.slashdot.org/story/25/04/21/031252/should-the-government-have-regulated-the-early-internet---or-our-future-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-21, 11:18:31](https://lobste.rs/s/vioyel/projects_for_old_os_x) - [Projects For Old OS X](https://jonathanalland.com/old-osx-projects.html)
* [2025-04-21, 11:17:06](https://news.ycombinator.com/item?id=43750617) - [Fossil fuels fall below 50% of US electricity for the first month on record](https://ember-energy.org/latest-updates/fossil-fuels-fall-below-50-of-us-electricity-for-the-first-month-on-record/)
* [2025-04-21, 11:05:44](https://news.ycombinator.com/item?id=43750535) - [Getting forked by Microsoft](https://philiplaine.com/posts/getting-forked-by-microsoft/)
* [2025-04-21, 10:53:59](https://news.ycombinator.com/item?id=43750439) - [Decentralizing Schemes](https://www.tbray.org/ongoing/When/202x/2025/04/16/Decentralized-Schemes)
* [2025-04-21, 10:03:03](https://lobste.rs/s/66gzvi/reverse_engineering_obfuscated_tiktok) - [Reverse engineering the obfuscated TikTok VM](https://github.com/LukasOgunfeitimi/TikTok-ReverseEngineering)
* [2025-04-21, 09:52:00](https://soylentnews.org/breakingnews/article.pl?sid=25/04/21/0944225&amp;from=rss) - [Pope Francis Has Died on Easter Monday Aged 88](https://soylentnews.org/breakingnews/article.pl?sid=25/04/21/0944225&amp;from=rss)
* [2025-04-21, 09:46:38](https://lobste.rs/s/wup76i/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/wup76i/what_are_you_doing_this_week)
* [2025-04-21, 08:22:00](https://science.slashdot.org/story/25/04/21/066243/space-investor-sees-opportunities-in-defense-related-startups-and-ai-driven-systems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Space Investor Sees Opportunities in Defense-Related Startups and AI-Driven Systems](https://science.slashdot.org/story/25/04/21/066243/space-investor-sees-opportunities-in-defense-related-startups-and-ai-driven-systems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-21, 08:02:00](https://news.slashdot.org/story/25/04/21/082240/pope-francis-has-died?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pope Francis Has Died](https://news.slashdot.org/story/25/04/21/082240/pope-francis-has-died?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-21, 07:34:07](https://news.ycombinator.com/item?id=43749271) - [Reworking 30 lines of Linux code could cut power use by up to 30 percent](https://spectrum.ieee.org/data-center-energy-consumption)
* [2025-04-21, 06:59:45](https://lobste.rs/s/ehky9x/option_hide_karma) - [Option to hide karma?](https://lobste.rs/s/ehky9x/option_hide_karma)
* [2025-04-21, 06:53:00](https://soylentnews.org/article.pl?sid=25/04/20/0455204&amp;from=rss) - [Intel Agrees to Sell Controlling Stake in Altera Chip Business](https://soylentnews.org/article.pl?sid=25/04/20/0455204&amp;from=rss)
* [2025-04-21, 05:15:00](https://it.slashdot.org/story/25/04/21/0512241/return-to-office-policies-are-impacting-neurodivergent-workers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Return-to-Office Policies Are Impacting Neurodivergent Workers](https://it.slashdot.org/story/25/04/21/0512241/return-to-office-policies-are-impacting-neurodivergent-workers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-21, 04:31:35](https://news.ycombinator.com/item?id=43748512) - [Python’s new t-strings](https://davepeck.org/2025/04/11/pythons-new-t-strings/)
* [2025-04-21, 04:17:24](https://lobste.rs/s/p1a2mz/regex_affordances) - [Regex affordances](https://nedbatchelder.com/blog/202504/regex_affordances.html)
* [2025-04-21, 03:46:59](https://lobste.rs/s/ghq0lb/why_are_big_tech_companies_so_slow) - [Why are big tech companies so slow?](https://www.seangoedecke.com/difficulty-in-big-tech/)
* [2025-04-21, 03:38:42](https://lobste.rs/s/2b1xg9/turing_drawings) - [Turing-Drawings](https://github.com/maximecb/Turing-Drawings)
* [2025-04-21, 02:16:15](https://lobste.rs/s/p5g7rn/python_s_new_t_strings) - [Python&apos;s new t-strings](https://davepeck.org/2025/04/11/pythons-new-t-strings/)
* [2025-04-21, 02:08:00](https://soylentnews.org/article.pl?sid=25/04/20/0452238&amp;from=rss) - [Google Has Illegal Advertising Monopoly, Judge Rules](https://soylentnews.org/article.pl?sid=25/04/20/0452238&amp;from=rss)
* [2025-04-20, 23:45:25](https://lobste.rs/s/pncgon/what_i_d_do_as_college_freshman_2025) - [What I&apos;d do as a College Freshman in 2025](http://muratbuffalo.blogspot.com/2025/04/what-id-do-as-college-freshman.html)
* [2025-04-20, 21:22:00](https://soylentnews.org/article.pl?sid=25/04/19/183229&amp;from=rss) - [Astronomers Say They’ve Recorded the Strongest Sign Yet of Life Beyond Earth](https://soylentnews.org/article.pl?sid=25/04/19/183229&amp;from=rss)
* [2025-04-20, 20:53:06](https://lobste.rs/s/ucrv1t/better_error_handling) - [Better error handling](https://meowbark.dev/Better-error-handling)
* [2025-04-20, 20:50:07](https://news.ycombinator.com/item?id=43746433) - [How I use Kate editor](https://akselmo.dev/posts/how-i-use-kate-editor/)
* [2025-04-20, 20:47:42](https://lobste.rs/s/7od3uk/how_i_use_kate_editor) - [How I use Kate Editor](https://akselmo.dev/posts/how-i-use-kate-editor/)
* [2025-04-20, 16:39:00](https://soylentnews.org/article.pl?sid=25/04/19/181213&amp;from=rss) - [Some Tropical Trees Act as Lightning Rods to Fend Off Rivals](https://soylentnews.org/article.pl?sid=25/04/19/181213&amp;from=rss)
* [2025-04-20, 15:53:04](https://lobste.rs/s/sbbifz/llms_reduce_development_friction_is_good) - [LLMs Reduce Development Friction. Is That a Good Thing?](https://blog.ollien.com/posts/llm-friction/)
* [2025-04-20, 15:32:50](https://lobste.rs/s/ljttuz/firefly_iii_free_open_source_personal) - [Firefly III - A free and open source personal finance manager](https://firefly-iii.org/)
* [2025-04-20, 14:50:50](https://lobste.rs/s/ymn744/transactions_are_protocol) - [Transactions are a protocol](https://notes.eatonphil.com/2025-04-20-transactions-are-a-protocol.html)
* [2025-04-20, 11:55:00](https://soylentnews.org/politics/article.pl?sid=25/04/19/1231231&amp;from=rss) - [Spyware Maker NSO Group is Paving a Path Back Into Trump’s America](https://soylentnews.org/politics/article.pl?sid=25/04/19/1231231&amp;from=rss)
* [2025-04-20, 07:17:37](https://lobste.rs/s/uxnxin/beej_s_guide_git) - [Beej&apos;s Guide to Git](https://beej.us/guide/bggit/html/split/)
* [2025-04-20, 07:13:00](https://soylentnews.org/article.pl?sid=25/04/19/1214259&amp;from=rss) - [Here&apos;s How a Satellite Ended Up as a Ghostly Apparition on Google Earth](https://soylentnews.org/article.pl?sid=25/04/19/1214259&amp;from=rss)
* [2025-04-20, 03:21:53](https://lobste.rs/s/yhtpk0/things_zig_comptime_won_t_do) - [Things Zig comptime Won&apos;t Do](https://matklad.github.io/2025/04/19/things-zig-comptime-wont-do.html)
* [2025-04-20, 02:28:00](https://soylentnews.org/article.pl?sid=25/04/19/1211220&amp;from=rss) - [Everyone in AI is Talking About Manus. We Put It to the Test.](https://soylentnews.org/article.pl?sid=25/04/19/1211220&amp;from=rss)
* [2025-04-19, 21:47:00](https://soylentnews.org/article.pl?sid=25/04/19/1159218&amp;from=rss) - [Medical Cannabis Shows Potential to Fight Cancer, Largest-Ever Study Finds](https://soylentnews.org/article.pl?sid=25/04/19/1159218&amp;from=rss)
* [2025-04-19, 17:02:00](https://soylentnews.org/article.pl?sid=25/04/18/043228&amp;from=rss) - [How a 1980s Toy Robot Arm Inspired Modern Robotics](https://soylentnews.org/article.pl?sid=25/04/18/043228&amp;from=rss)
* [2025-04-19, 13:12:26](https://news.ycombinator.com/item?id=43736172) - [Dumb statistical models, always making people look bad](https://statmodeling.stat.columbia.edu/2025/04/18/dumb-statistical-models-always-making-people-look-bad/)
* [2025-04-19, 12:20:33](https://news.ycombinator.com/item?id=43735933) - [Lichens can survive almost anything, and some might survive Mars](https://arstechnica.com/science/2025/04/lichens-can-survive-almost-anything-and-some-might-survive-mars/)
* [2025-04-19, 12:19:00](https://soylentnews.org/article.pl?sid=25/04/18/040226&amp;from=rss) - [Inside arXiv—the Most Transformative Platform in All of Science](https://soylentnews.org/article.pl?sid=25/04/18/040226&amp;from=rss)
* [2025-04-19, 08:37:00](https://soylentnews.org/article.pl?sid=25/04/18/0334256&amp;from=rss) - [Vibe Coding _ !@#$% Kids! ](https://soylentnews.org/article.pl?sid=25/04/18/0334256&amp;from=rss)
* [2025-04-19, 04:53:00](https://soylentnews.org/article.pl?sid=25/04/18/0255244&amp;from=rss) - [UK Founders Grow Frustrated Over Dearth of Funding: &apos;the Problem is Getting Worse&apos;](https://soylentnews.org/article.pl?sid=25/04/18/0255244&amp;from=rss)
* [2025-04-19, 00:05:00](https://soylentnews.org/article.pl?sid=25/04/17/1356201&amp;from=rss) - [Dirty Tricks 6502 Programmers Use](https://soylentnews.org/article.pl?sid=25/04/17/1356201&amp;from=rss)
* [2025-04-18, 19:53:32](https://news.ycombinator.com/item?id=43731334) - [Optimizing Heap Allocations in Go: A Case Study](https://www.dolthub.com/blog/2025-04-18-optimizing-heap-allocations/)
* [2025-04-18, 19:20:00](https://soylentnews.org/article.pl?sid=25/04/17/1348247&amp;from=rss) - [States are Banning Forever Chemicals. Industry is Fighting Back](https://soylentnews.org/article.pl?sid=25/04/17/1348247&amp;from=rss)
* [2025-04-18, 14:34:00](https://soylentnews.org/article.pl?sid=25/04/17/1336207&amp;from=rss) - [The Friendship Recession: The Lost Art of Connecting](https://soylentnews.org/article.pl?sid=25/04/17/1336207&amp;from=rss)
* [2025-04-18, 09:52:00](https://soylentnews.org/article.pl?sid=25/04/16/1857229&amp;from=rss) - [‘End of an Era’: The Last RadioShack in Maryland is Closing its Doors](https://soylentnews.org/article.pl?sid=25/04/16/1857229&amp;from=rss)
* [2025-04-18, 05:07:00](https://soylentnews.org/article.pl?sid=25/04/16/1849251&amp;from=rss) - [Oxygen Discovered in Most Distant Known Galaxy](https://soylentnews.org/article.pl?sid=25/04/16/1849251&amp;from=rss)
* [2025-04-18, 00:21:00](https://soylentnews.org/article.pl?sid=25/04/16/1843228&amp;from=rss) - [Phase Two of Military AI Has Arrived](https://soylentnews.org/article.pl?sid=25/04/16/1843228&amp;from=rss)
* [2025-04-17, 19:42:00](https://soylentnews.org/article.pl?sid=25/04/16/1838216&amp;from=rss) - [Disasters Spur Investment in Flood and Fire Risk Technology](https://soylentnews.org/article.pl?sid=25/04/16/1838216&amp;from=rss)
* [2025-04-17, 14:54:00](https://soylentnews.org/article.pl?sid=25/04/16/1816228&amp;from=rss) - [AMD Set to Produce its CPU Chip at TSMC Plant in Arizona](https://soylentnews.org/article.pl?sid=25/04/16/1816228&amp;from=rss)
* [2025-04-17, 10:08:00](https://soylentnews.org/article.pl?sid=25/04/16/1155209&amp;from=rss) - [OpenWrt 24.10.1 is Now Available](https://soylentnews.org/article.pl?sid=25/04/16/1155209&amp;from=rss)
* [2025-04-17, 05:23:00](https://soylentnews.org/article.pl?sid=25/04/16/1153241&amp;from=rss) - [An Ars Technica History of the Internet, Part 1](https://soylentnews.org/article.pl?sid=25/04/16/1153241&amp;from=rss)
* [2025-04-17, 00:39:00](https://soylentnews.org/article.pl?sid=25/04/16/1151239&amp;from=rss) - [Dolphins Are Dying From Toxic Chemicals Banned Since the 1980s](https://soylentnews.org/article.pl?sid=25/04/16/1151239&amp;from=rss)
