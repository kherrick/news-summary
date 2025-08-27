# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Cybersecurity

* [Nx compromised: malware uses Claude code CLI to explore the filesystem](https://semgrep.dev/blog/2025/security-alert-nx-compromised-to-steal-wallets-and-credentials) - A major security incident involving the Nx ecosystem, where malware is utilizing Claude code CLI for navigating filesystems, poses risks to user credentials and digital wallets. [Comments](https://news.ycombinator.com/item?id=45038653).

* [QEMU 10.1.0](https://wiki.qemu.org/ChangeLog/10.1) - The latest release of QEMU brings new features and updates to this essential open-source machine emulator and virtualization tool. [Comments](https://news.ycombinator.com/item?id=45037947).

* [Dissecting the Apple M1 GPU, the End](https://rosenzweig.io/blog/asahi-gpu-part-n.html) - In-depth exploration of Apple’s M1 GPU architecture is completed with insights into performance optimizations. [Comments](https://news.ycombinator.com/item?id=45034537).

* [WebLibre: The Privacy-Focused Browser](https://docs.weblibre.eu/) - A new browser tailored for users focused on digital privacy and minimizing their data footprint. [Comments](https://news.ycombinator.com/item?id=45036939).

## Scientific and Environmental Developments

* [Scientists Pioneer Sustainable Carbon Capture From Shrimp Waste](https://soylentnews.org/article.pl?sid=25/08/26/1117241&amp;from=rss) - Researchers develop an innovative technique for sustainable carbon capture using previously overlooked marine byproducts.

* [Pig Lung Transplanted Into a Human in Major Scientific First](https://science.slashdot.org/story/25/08/26/2257216/pig-lung-transplanted-into-a-human-in-major-scientific-first?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Surgeons achieve a groundbreaking milestone in organ transplantation with a successful pig-to-human lung transfer.

## AI Advancements and Legal Cases

* [Parents of teenager who took his own life sue OpenAI](https://www.bbc.com/news/articles/cgerwp7rdlvo) - Parents file a lawsuit against OpenAI, alleging its model played a role in their son’s distress and subsequent suicide. [Comments](https://news.ycombinator.com/item?id=45036294).

* [Anthropic Settles Major AI Copyright Suit Brought by Authors](https://yro.slashdot.org/story/25/08/26/1848219/anthropic-settles-major-ai-copyright-suit-brought-by-authors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Settlement reached in a pivotal AI copyright case that could redefine intellectual property laws in AI training.

## Business and Policy Shifts

* [Korean Air Inks Record $50 Billion US Aviation Deal](https://tech.slashdot.org/story/25/08/26/2321251/korean-air-inks-record-50-billion-us-aviation-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - One of the largest aviation industry deals highlights Korea’s commitment to global aerospace leadership.

* [Trump Threatens Taxes, Bans, for Nations That Tax Big Tech](https://soylentnews.org/politics/article.pl?sid=25/08/26/1113220&amp;from=rss) - Former U.S. President Trump pushes back against international digital taxation moves targeting major tech corporations.

## Cultural and Human Insights

* [I Spent over $31,900 on Whiteout Survival – Here's Why I Regret It](https://old.reddit.com/r/whiteoutsurvival/comments/1hki2e9/i_spent_over_31900_on_whiteout_survivalheres_why/) - A candid reflection on microtransactions and addictive spending in a popular survival game. [Comments](https://news.ycombinator.com/item?id=45038783).

* [Workplace Jargon Hurts Employee Morale and Collaboration, Study Finds](https://slashdot.org/story/25/08/26/2318239/workplace-jargon-hurts-employee-morale-and-collaboration-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A deep dive into how overuse of jargon negatively impacts team communication and effectiveness within organizations.

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

* [2025-08-27, 13:00:00](https://slashdot.org/story/25/08/26/2338207/citi-executive-warns-stablecoin-yields-could-drain-bank-deposits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Citi Executive Warns Stablecoin Yields Could Drain Bank Deposits](https://slashdot.org/story/25/08/26/2338207/citi-executive-warns-stablecoin-yields-could-drain-bank-deposits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-27, 12:34:20](https://news.ycombinator.com/item?id=45038783) - [I Spent over $31,900 on Whiteout Survival – Here&apos;s Why I Regret It](https://old.reddit.com/r/whiteoutsurvival/comments/1hki2e9/i_spent_over_31900_on_whiteout_survivalheres_why/)
* [2025-08-27, 12:34:19](https://lobste.rs/s/fnem4d/nx_compromised_malware_uses_claude_code) - [Nx compromised: malware uses Claude code CLI to explore the filesystem](https://semgrep.dev/blog/2025/security-alert-nx-compromised-to-steal-wallets-and-credentials/)
* [2025-08-27, 12:34:04](https://lobste.rs/s/huk4su/parents_teenager_who_took_his_own_life_sue) - [Parents of teenager who took his own life sue OpenAI](https://www.bbc.com/news/articles/cgerwp7rdlvo)
* [2025-08-27, 12:18:47](https://news.ycombinator.com/item?id=45038653) - [Nx compromised: malware uses Claude code CLI to explore the filesystem](https://semgrep.dev/blog/2025/security-alert-nx-compromised-to-steal-wallets-and-credentials/)
* [2025-08-27, 12:00:18](https://news.ycombinator.com/item?id=45038463) - [Ember (YC F24) Is Hiring Full Stack Engineer](https://www.ycombinator.com/companies/ember/jobs/OTB0qby-full-stack-engineering-intern-summer-2026)
* [2025-08-27, 11:50:38](https://lobste.rs/s/r7csfh/bi_directional_accountability) - [Bi-Directional Accountability: The Leadership Shift Most Organizations Avoid](https://www.alnewkirk.com/bidirectional-accountability/)
* [2025-08-27, 11:38:35](https://news.ycombinator.com/item?id=45038260) - [How to Slow Down a Program? and Why It Can Be Useful](https://stefan-marr.de/2025/08/how-to-slow-down-a-program/)
* [2025-08-27, 11:36:21](https://lobste.rs/s/6yb7yl/how_slow_down_program_why_it_can_be_useful) - [How to Slow Down a Program? And Why it Can Be Useful](https://stefan-marr.de/2025/08/how-to-slow-down-a-program/)
* [2025-08-27, 11:33:26](https://lobste.rs/s/nfin3n/llms_for_software_developers_notes_from) - [LLMs for Software Developers (notes from my talk at NWRUG)](https://theartandscienceofruby.com/llms-for-software-developers-notes-from-my-talk-at-nwrug/)
* [2025-08-27, 11:15:54](https://lobste.rs/s/7iiuxu/state_art_for_reducing_executable_size) - [State of the art for reducing executable size with heavily optimized program](https://discourse.llvm.org/t/state-of-the-art-for-reducing-executable-size-with-heavily-optimized-program/87952)
* [2025-08-27, 11:02:33](https://news.ycombinator.com/item?id=45037947) - [QEMU 10.1.0](https://wiki.qemu.org/ChangeLog/10.1)
* [2025-08-27, 10:54:41](https://news.ycombinator.com/item?id=45037904) - [Monodraw](https://monodraw.helftone.com/)
* [2025-08-27, 10:19:14](https://news.ycombinator.com/item?id=45037621) - [Word documents will be saved to the cloud automatically on Windows going forward](https://www.ghacks.net/2025/08/27/your-word-documents-will-be-saved-to-the-cloud-automatically-on-windows-going-forward/)
* [2025-08-27, 10:00:00](https://tech.slashdot.org/story/25/08/26/2321251/korean-air-inks-record-50-billion-us-aviation-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Korean Air Inks Record $50 Billion US Aviation Deal](https://tech.slashdot.org/story/25/08/26/2321251/korean-air-inks-record-50-billion-us-aviation-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-27, 09:48:00](https://soylentnews.org/article.pl?sid=25/08/26/1117241&amp;from=rss) - [Scientists Pioneer Sustainable Carbon Capture From Shrimp Waste](https://soylentnews.org/article.pl?sid=25/08/26/1117241&amp;from=rss)
* [2025-08-27, 08:53:49](https://lobste.rs/s/ef2w3b/lessons_from_building_game_engine_from) - [Lessons from Building a Game Engine from Scratch in Gleam](https://www.youtube.com/watch?v=uExwRo_qM-k)
* [2025-08-27, 08:38:58](https://news.ycombinator.com/item?id=45036939) - [WebLibre: The Privacy-Focused Browser](https://docs.weblibre.eu/)
* [2025-08-27, 07:00:00](https://slashdot.org/story/25/08/26/2318239/workplace-jargon-hurts-employee-morale-and-collaboration-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Workplace Jargon Hurts Employee Morale and Collaboration, Study Finds](https://slashdot.org/story/25/08/26/2318239/workplace-jargon-hurts-employee-morale-and-collaboration-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-27, 06:57:56](https://news.ycombinator.com/item?id=45036294) - [The Therac-25 Incident (2021)](https://thedailywtf.com/articles/the-therac-25-incident)
* [2025-08-27, 06:49:23](https://news.ycombinator.com/item?id=45036231) - [Scientist exposes anti-wind groups as oil-funded. Now they want to silence him](https://electrek.co/2025/08/25/scientist-exposes-anti-wind-groups-as-oil-funded-now-they-want-to-silence-him/)
* [2025-08-27, 05:11:18](https://news.ycombinator.com/item?id=45035685) - [The man with a Home Computer (1967) [video]](https://www.youtube.com/watch?v=w6Ka42eyudA)
* [2025-08-27, 05:03:00](https://soylentnews.org/politics/article.pl?sid=25/08/26/1113220&amp;from=rss) - [Trump Threatens Taxes, Bans, for Nations That Tax Big Tech](https://soylentnews.org/politics/article.pl?sid=25/08/26/1113220&amp;from=rss)
* [2025-08-27, 03:30:00](https://science.slashdot.org/story/25/08/26/2257216/pig-lung-transplanted-into-a-human-in-major-scientific-first?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pig Lung Transplanted Into a Human In Major Scientific First](https://science.slashdot.org/story/25/08/26/2257216/pig-lung-transplanted-into-a-human-in-major-scientific-first?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-27, 02:54:28](https://lobste.rs/s/ibyhse/uncertain_t) - [Uncertain&lt;T&gt;](https://nshipster.com/uncertainty/)
* [2025-08-27, 02:47:19](https://lobste.rs/s/31d67l/dissecting_apple_m1_gpu_end) - [Dissecting the Apple M1 GPU, the end](https://rosenzweig.io/blog/asahi-gpu-part-n.html)
* [2025-08-27, 01:44:16](https://news.ycombinator.com/item?id=45034537) - [Dissecting the Apple M1 GPU, the end](https://rosenzweig.io/blog/asahi-gpu-part-n.html)
* [2025-08-27, 01:18:19](https://lobste.rs/s/gljsa0/shared_ptr_t_not_always_atomic_reference) - [shared_ptr&lt;T&gt;: the (not always) atomic reference counted smart pointer (2019)](https://snf.github.io/2019/02/13/shared-ptr-optimization/)
* [2025-08-27, 00:23:39](https://lobste.rs/s/awqyhq/outlandish_recursive_query_examples) - [Outlandish Recursive Query Examples](https://sqlite.org/lang_with.html#outlandish_recursive_query_examples)
* [2025-08-27, 00:16:00](https://soylentnews.org/article.pl?sid=25/08/26/0059245&amp;from=rss) - [Twenty Years After Katrina: How Levee Failures Changed America](https://soylentnews.org/article.pl?sid=25/08/26/0059245&amp;from=rss)
* [2025-08-27, 00:02:00](https://news.slashdot.org/story/25/08/26/2250204/canadas-tech-job-market-has-gone-from-boom-to-bust-in-last-five-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Canada&apos;s Tech Job Market Has Gone From Boom To Bust In Last Five Years](https://news.slashdot.org/story/25/08/26/2250204/canadas-tech-job-market-has-gone-from-boom-to-bust-in-last-five-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-26, 23:38:16](https://lobste.rs/s/na4vsd/so_many_conferences_are_mid_why_was_bsc) - [So many conferences are mid. Why was BSC 2025 so good?](https://bgthompson.codeberg.page/blog/thoughts-on-BSC-2025/)
* [2025-08-26, 23:20:00](https://slashdot.org/story/25/08/26/215246/google-improves-gemini-ai-image-editing-with-nano-banana-model?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Improves Gemini AI Image Editing With &apos;Nano Banana&apos; Model](https://slashdot.org/story/25/08/26/215246/google-improves-gemini-ai-image-editing-with-nano-banana-model?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-26, 22:46:19](https://lobste.rs/s/9z2yuj/gnu_artanis_web_app_framework_for_scheme) - [GNU Artanis - Web app framework for Scheme](https://artanis.dev/)
* [2025-08-26, 22:40:00](https://mobile.slashdot.org/story/25/08/26/2052237/dish-gives-up-on-becoming-the-fourth-major-wireless-carrier?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dish Gives Up On Becoming the Fourth Major Wireless Carrier](https://mobile.slashdot.org/story/25/08/26/2052237/dish-gives-up-on-becoming-the-fourth-major-wireless-carrier?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-26, 22:00:00](https://yro.slashdot.org/story/25/08/26/2046239/cupertino-must-stop-calling-apple-watches-carbon-neutral-german-court-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cupertino Must Stop Calling Apple Watches &apos;Carbon Neutral,&apos; German Court Rules](https://yro.slashdot.org/story/25/08/26/2046239/cupertino-must-stop-calling-apple-watches-carbon-neutral-german-court-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-26, 21:57:26](https://lobste.rs/s/adttgy/chez_scheme_vs_sbcl_comparison_2019) - [Chez Scheme vs. SBCL: a comparison (2019)](https://elmord.org/blog/?entry=20191114-sbcl-chez)
* [2025-08-26, 21:20:00](https://slashdot.org/story/25/08/26/2013227/hostingcom-acquires-rocketnet-to-expand-global-wordpress-hosting-business?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hosting.com Acquires Rocket.net To Expand Global WordPress Hosting Business](https://slashdot.org/story/25/08/26/2013227/hostingcom-acquires-rocketnet-to-expand-global-wordpress-hosting-business?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-26, 21:00:50](https://lobste.rs/s/ffkdyr/das_problem_mit_german_strings) - [Das Problem mit German Strings](https://www.polarsignals.com/blog/posts/2025/08/26/das-problem-mit-german-strings)
* [2025-08-26, 20:40:00](https://apple.slashdot.org/story/25/08/26/206247/apple-discussed-buying-mistral-ai-and-perplexity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Discussed Buying Mistral AI and Perplexity](https://apple.slashdot.org/story/25/08/26/206247/apple-discussed-buying-mistral-ai-and-perplexity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-26, 20:06:29](https://news.ycombinator.com/item?id=45031673) - [GNU Artanis – A fast web application framework for Scheme](https://artanis.dev/index.html)
* [2025-08-26, 20:02:00](https://yro.slashdot.org/story/25/08/26/1958256/parents-sue-openai-over-chatgpts-role-in-sons-suicide?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Parents Sue OpenAI Over ChatGPT&apos;s Role In Son&apos;s Suicide](https://yro.slashdot.org/story/25/08/26/1958256/parents-sue-openai-over-chatgpts-role-in-sons-suicide?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-26, 19:33:00](https://soylentnews.org/article.pl?sid=25/08/26/0056205&amp;from=rss) - [Kelp Forests in Marine Protected Areas are More Resilient to Marine Heatwaves](https://soylentnews.org/article.pl?sid=25/08/26/0056205&amp;from=rss)
* [2025-08-26, 19:25:00](https://yro.slashdot.org/story/25/08/26/1848219/anthropic-settles-major-ai-copyright-suit-brought-by-authors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Settles Major AI Copyright Suit Brought by Authors](https://yro.slashdot.org/story/25/08/26/1848219/anthropic-settles-major-ai-copyright-suit-brought-by-authors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-26, 19:01:56](https://news.ycombinator.com/item?id=45030760) - [Claude for Chrome](https://www.anthropic.com/news/claude-for-chrome)
* [2025-08-26, 18:48:45](https://lobste.rs/s/ddjlh2/how_special_register_groups_invaded) - [How \&quot;special register groups\&quot; invaded computer dictionaries for decades (2019)](https://www.righto.com/2019/10/how-special-register-groups-invaded.html)
* [2025-08-26, 18:45:00](https://yro.slashdot.org/story/25/08/26/1828256/michigan-supreme-court-rules-unrestricted-phone-searches-violate-fourth-amendment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Michigan Supreme Court Rules Unrestricted Phone Searches Violate Fourth Amendment](https://yro.slashdot.org/story/25/08/26/1828256/michigan-supreme-court-rules-unrestricted-phone-searches-violate-fourth-amendment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-26, 18:08:48](https://lobste.rs/s/vk0nvp/i_know_when_you_re_vibe_coding) - [I Know When You&apos;re Vibe Coding](https://alexkondov.com/i-know-when-youre-vibe-coding/)
* [2025-08-26, 18:02:00](https://science.slashdot.org/story/25/08/26/1750253/air-pollution-from-oil-and-gas-causes-90000-premature-us-deaths-each-year-says-new-study?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Air Pollution From Oil and Gas Causes 90,000 Premature US Deaths Each Year, Says New Study](https://science.slashdot.org/story/25/08/26/1750253/air-pollution-from-oil-and-gas-causes-90000-premature-us-deaths-each-year-says-new-study?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-26, 17:28:00](https://science.slashdot.org/story/25/08/26/1728256/scientists-unlock-secret-to-thick-stable-beer-foams?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Unlock Secret To Thick, Stable Beer Foams](https://science.slashdot.org/story/25/08/26/1728256/scientists-unlock-secret-to-thick-stable-beer-foams?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-26, 14:57:37](https://lobste.rs/s/gus44s/give_your_spouse_gift_couple_s_email) - [Give Your Spouse the Gift of a Couple&apos;s Email Domain](https://mtlynch.io/couples-email-domain/)
* [2025-08-26, 14:49:00](https://soylentnews.org/article.pl?sid=25/08/26/0050212&amp;from=rss) - [Canadian EV Sales Collapse by 35% as Gas Car Purchases Surge](https://soylentnews.org/article.pl?sid=25/08/26/0050212&amp;from=rss)
* [2025-08-26, 14:38:27](https://lobste.rs/s/4tou3b/put_ring_on_it_lock_free_mpmc_ring_buffer) - [Put a ring on it: a lock-free MPMC ring buffer](https://h4x0r.org/ring/)
* [2025-08-26, 14:22:13](https://lobste.rs/s/z4oxhm/compositional_datalog_on_sql_relational) - [Compositional Datalog on SQL: Relational Algebra of the Environment](https://www.philipzucker.com/compose_datalog/)
* [2025-08-26, 14:15:54](https://news.ycombinator.com/item?id=45026886) - [A teen was suicidal. ChatGPT was the friend he confided in](https://www.nytimes.com/2025/08/26/technology/chatgpt-openai-suicide.html)
* [2025-08-26, 14:07:42](https://news.ycombinator.com/item?id=45026792) - [One universal antiviral to rule them all?](https://www.cuimc.columbia.edu/news/one-universal-antiviral-rule-them-all)
* [2025-08-26, 14:01:46](https://news.ycombinator.com/item?id=45026719) - [Gemini 2.5 Flash Image](https://developers.googleblog.com/en/introducing-gemini-2-5-flash-image/)
* [2025-08-26, 13:10:11](https://lobste.rs/s/eb7isb/developing_alt_text_button_for_images_on) - [Developing an alt text button for images on my website](https://jamesg.blog/2025/08/17/alt-text-button)
* [2025-08-26, 13:09:01](https://lobste.rs/s/b0jqgq/we_should_rethink_how_we_teach_people_code) - [We should rethink how we teach people to code](https://deadsimpletech.com/blog/notes_teaching_coding)
* [2025-08-26, 10:47:46](https://news.ycombinator.com/item?id=45024786) - [US Intel](https://stratechery.com/2025/u-s-intel/)
* [2025-08-26, 10:02:00](https://soylentnews.org/article.pl?sid=25/08/25/197208&amp;from=rss) - [Does 3I/ATLAS Generate its Own Light?](https://soylentnews.org/article.pl?sid=25/08/25/197208&amp;from=rss)
* [2025-08-26, 08:15:49](https://news.ycombinator.com/item?id=45023730) - [Rv, a new kind of Ruby management tool](https://andre.arko.net/2025/08/25/rv-a-new-kind-of-ruby-management-tool/)
* [2025-08-26, 08:15:04](https://lobste.rs/s/mnhgwm/rv_new_kind_ruby_management_tool) - [rv, a new kind of Ruby management tool](https://andre.arko.net/2025/08/25/rv-a-new-kind-of-ruby-management-tool/)
* [2025-08-26, 05:16:00](https://soylentnews.org/article.pl?sid=25/08/25/1248228&amp;from=rss) - [Revolutionary AI Tech Breathes Life Into Virtual Companion Animals](https://soylentnews.org/article.pl?sid=25/08/25/1248228&amp;from=rss)
* [2025-08-26, 03:31:41](https://lobste.rs/s/hsxtpo/xz_format_inadequate_for_general_use) - [Xz format inadequate for general use](https://www.nongnu.org/lzip/xz_inadequate.html)
* [2025-08-26, 00:31:00](https://soylentnews.org/article.pl?sid=25/08/25/1234216&amp;from=rss) - [Oops! Earendel, Most Distant Star Ever Discovered, May Not Actually be a Star](https://soylentnews.org/article.pl?sid=25/08/25/1234216&amp;from=rss)
* [2025-08-25, 20:31:25](https://lobste.rs/s/xetwz2/google_wants_make_sideloading_android) - [Google wants to make sideloading Android apps safer by verifying developers’ identities](https://www.androidauthority.com/android-developer-verification-requirements-3590911/)
* [2025-08-25, 19:45:00](https://soylentnews.org/article.pl?sid=25/08/25/0225208&amp;from=rss) - [The 8,000-Year History of Great Salt Lake and its Watershed is Recorded in Sediments](https://soylentnews.org/article.pl?sid=25/08/25/0225208&amp;from=rss)
* [2025-08-25, 14:59:00](https://soylentnews.org/article.pl?sid=25/08/24/2253216&amp;from=rss) - [What Happens When AI Comes for Our Fonts?](https://soylentnews.org/article.pl?sid=25/08/24/2253216&amp;from=rss)
* [2025-08-25, 10:15:00](https://soylentnews.org/article.pl?sid=25/08/24/136245&amp;from=rss) - [NASA Challenge Winners Cook Up New Industry Developments](https://soylentnews.org/article.pl?sid=25/08/24/136245&amp;from=rss)
* [2025-08-25, 05:30:00](https://soylentnews.org/article.pl?sid=25/08/24/1253242&amp;from=rss) - [Radio Waves Can Strengthen Sense of Smell](https://soylentnews.org/article.pl?sid=25/08/24/1253242&amp;from=rss)
* [2025-08-25, 02:53:35](https://news.ycombinator.com/item?id=45009760) - [Japan has opened its first osmotic power plant](https://www.theguardian.com/world/2025/aug/25/japan-osmotic-power-plant-fukuoka)
* [2025-08-25, 00:50:00](https://soylentnews.org/article.pl?sid=25/08/23/2218218&amp;from=rss) - [Creative Commons Becomes an Official UNESCO NGO Partner](https://soylentnews.org/article.pl?sid=25/08/23/2218218&amp;from=rss)
* [2025-08-24, 20:34:49](https://news.ycombinator.com/item?id=45007525) - [Reverse Engineered Raspberry Pi Compute Module 5](https://github.com/schlae/cm5-reveng)
* [2025-08-24, 20:03:00](https://soylentnews.org/article.pl?sid=25/08/23/2216200&amp;from=rss) - [U.S. Government Now Holds 10% Stake in Intel](https://soylentnews.org/article.pl?sid=25/08/23/2216200&amp;from=rss)
* [2025-08-24, 19:20:46](https://news.ycombinator.com/item?id=45006882) - [Internet Access Providers Aren&apos;t Bound by DMCA Unmasking Subpoenas–In Re Cox](https://blog.ericgoldman.org/archives/2025/08/internet-access-providers-arent-bound-by-dmca-unmasking-subpoenas-in-re-cox.htm)
* [2025-08-24, 18:55:01](https://news.ycombinator.com/item?id=45006686) - [Show HN: FilterQL – A tiny query language for filtering structured data](https://github.com/adamhl8/filterql)
* [2025-08-24, 17:54:47](https://news.ycombinator.com/item?id=45006229) - [Chinese astronauts make rocket fuel and oxygen in space](https://www.livescience.com/space/space-exploration/chinese-astronauts-make-rocket-fuel-and-oxygen-in-space-using-1st-of-its-kind-artificial-photosynthesis)
* [2025-08-24, 15:53:58](https://news.ycombinator.com/item?id=45005209) - [Molluscs of the Multiverse: molluscan diversity in Magic: The Gathering](https://jgeekstudies.org/2025/08/24/molluscs-of-the-multiverse-molluscan-diversity-in-magic-the-gathering/)
* [2025-08-24, 15:18:00](https://soylentnews.org/article.pl?sid=25/08/23/1053236&amp;from=rss) - [‘Quiet Cracking’ is Spreading in Offices: Half of Workers are at Breaking Point](https://soylentnews.org/article.pl?sid=25/08/23/1053236&amp;from=rss)
* [2025-08-24, 10:36:00](https://soylentnews.org/article.pl?sid=25/08/22/079224&amp;from=rss) - [Turning the Lights Back on](https://soylentnews.org/article.pl?sid=25/08/22/079224&amp;from=rss)
* [2025-08-24, 09:12:14](https://news.ycombinator.com/item?id=45002688) - [Neuralink &apos;Participant 1&apos; says his life has changed](https://fortune.com/2025/08/23/neuralink-participant-1-noland-arbaugh-18-months-post-surgery-life-changed-elon-musk/)
* [2025-08-24, 05:52:00](https://soylentnews.org/article.pl?sid=25/08/22/073206&amp;from=rss) - [Scientists Develop Interface That ‘Reads’ Thoughts From Speech-Impaired Patients](https://soylentnews.org/article.pl?sid=25/08/22/073206&amp;from=rss)
* [2025-08-24, 01:12:00](https://soylentnews.org/article.pl?sid=25/08/22/0656227&amp;from=rss) - [AWS CEO Says Using AI to Replace Junior Staff is &apos;Dumbest Thing I&apos;ve Ever Heard&apos;](https://soylentnews.org/article.pl?sid=25/08/22/0656227&amp;from=rss)
* [2025-08-23, 20:25:00](https://soylentnews.org/article.pl?sid=25/08/22/0551243&amp;from=rss) - [Webb Discovers a New Moon Orbiting Uranus](https://soylentnews.org/article.pl?sid=25/08/22/0551243&amp;from=rss)
* [2025-08-23, 19:05:31](https://news.ycombinator.com/item?id=44998276) - [Bypass PostgreSQL catalog overhead with direct partition hash calculations](https://www.shayon.dev/post/2025/221/bypass-postgresql-catalog-overhead-with-direct-partition-hash-calculations/)
* [2025-08-23, 15:35:00](https://soylentnews.org/article.pl?sid=25/08/22/0547201&amp;from=rss) - [Congressman Proposes Bringing Back Letters of Marque for Cyber Privateers](https://soylentnews.org/article.pl?sid=25/08/22/0547201&amp;from=rss)
* [2025-08-23, 14:54:03](https://news.ycombinator.com/item?id=44996432) - [Delphi in the Age of AI](https://learndelphi.org/delphi-ai-ultimate-guide/)
* [2025-08-23, 13:32:36](https://news.ycombinator.com/item?id=44995865) - [Light pollution prolongs avian activity](https://gizmodo.com/birds-across-the-world-are-singing-all-day-for-a-disturbing-reason-2000646257)
* [2025-08-23, 11:00:00](https://soylentnews.org/article.pl?sid=25/08/22/0544206&amp;from=rss) - [Heat-Styling Hair Care Products Release Billions of Nanoparticles That Can Accumulate in Lungs](https://soylentnews.org/article.pl?sid=25/08/22/0544206&amp;from=rss)
* [2025-08-23, 09:07:38](https://news.ycombinator.com/item?id=44994535) - [SpaCy: Industrial-Strength Natural Language Processing (NLP) in Python](https://github.com/explosion/spaCy)
* [2025-08-23, 06:10:00](https://soylentnews.org/article.pl?sid=25/08/22/019206&amp;from=rss) - [New Research Ferments the Perfect Recipe for Fine Chocolate Flavour](https://soylentnews.org/article.pl?sid=25/08/22/019206&amp;from=rss)
* [2025-08-23, 01:25:00](https://soylentnews.org/article.pl?sid=25/08/22/010203&amp;from=rss) - [T-Mobile Claimed Selling Location Data Without Consent is Legal—Judges Disagree](https://soylentnews.org/article.pl?sid=25/08/22/010203&amp;from=rss)
