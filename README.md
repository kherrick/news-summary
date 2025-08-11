# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Business

* [Nvidia and AMD To Pay 15% of China Chip Sale Revenues To US Government](https://yro.slashdot.org/story/25/08/11/2123206/nvidia-and-amd-to-pay-15-of-china-chip-sale-revenues-to-us-government?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A major development in the global semiconductor market, this U.S. policy stipulates that Nvidia and AMD must share revenue from their chip sales in China.

* [Promising Linux Project Dies After Dev Faces Harassment](https://it.slashdot.org/story/25/08/11/1858209/promising-linux-project-dies-after-dev-faces-harassment?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A Linux development project has been halted due to the creator succumbing to sustained online harassment.

* [GitHub is no longer independent at Microsoft after CEO resignation](https://www.theverge.com/news/757461/microsoft-github-thomas-dohmke-resignation-coreai-team-transition) - Microsoft consolidates GitHub after the resignation of its CEO, signaling a shift in the platform's management and direction.

## Environmental and Scientific Advancements

* [Biochar From Human Waste Could Solve Global Fertilizer Shortages, Study Finds](https://news.slashdot.org/story/25/08/11/1939238/biochar-from-human-waste-could-solve-global-fertilizer-shortages-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Researchers propose using biochar from human waste as a sustainable solution to global fertilizer challenges.

* [36B solar mass black hole at centre of the Cosmic Horseshoe gravitational lens](https://academic.oup.com/mnras/article/541/4/2853/8213862?login=false) - Astronomers have identified a massive 36-billion-solar-mass black hole at the center of a well-known gravitational lens.

* [Asian Hornet’s Unique Buzz May Hold Secret to Containing Invasive Species](https://soylentnews.org/article.pl?sid=25/08/10/1036210&from=rss) - Scientists study a unique buzzing signature of Asian hornets that could aid in managing the invasive species.

## Artificial Intelligence and Data

* [I&apos;ve seen 12 people hospitalized after losing touch with reality because of AI](https://twitter.com/KeithSakata/status/1954884361695719474) - This concerning analysis highlights the mental health risks associated with certain uses of AI technologies.

* [Apache Iceberg V3 Spec new features for more efficient and flexible data lakes](https://opensource.googleblog.com/2025/08/whats-new-in-iceberg-v3.html) - The Apache Iceberg V3 specification introduces features for enhancing the performance of data lakes.

## Software and Design

* [Why Metropolis–Hastings Works](https://gregorygundersen.com/blog/2019/11/02/metropolis-hastings/) - A detailed explanation of the Metropolis-Hastings algorithm that demystifies its inner workings for statisticians and developers.

* [Choosing typeface](https://imperavi.com/books/ui-typography/basis/choosing-typeface/) - Insights into font selection for effective UI/UX design.

## Human Stories and Cultural Impact

* [RIP: Dame Stephanie 'Steve' Shirley, Technology Pioneer, Dies Aged 91](https://soylentnews.org/article.pl?sid=25/08/11/145224&from=rss) - Celebrating the life of a pioneering woman in tech who significantly impacted the industry.

* [How 12 &apos;Enola Gay&apos; Crew Members Remember Dropping the Atomic Bomb](https://tech.slashdot.org/story/25/08/11/0518238/how-12-enola-gay-crew-members-remember-dropping-the-atomic-bomb?utm_source=rss1.0mainlinkanon&utm_medium=feed) - An account that revisits the perspectives of those involved in a pivotal historical moment.

## Security and Privacy

* [WinRAR zero-day Exploited to Plant Malware on Archive Extraction](https://soylentnews.org/article.pl?sid=25/08/09/1818247&from=rss) - A vulnerability in WinRAR being exploited to install malware, prompting concerns over file compression tool security.

* [Wikipedia loses challenge against Online Safety Act](https://www.bbc.com/news/articles/cjr11qqvvwlo) - The platform faces a blow in its legal battle against sweeping UK online safety regulations.

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

* [2025-08-11, 21:50:00](https://yro.slashdot.org/story/25/08/11/2123206/nvidia-and-amd-to-pay-15-of-china-chip-sale-revenues-to-us-government?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia and AMD To Pay 15% of China Chip Sale Revenues To US Government](https://yro.slashdot.org/story/25/08/11/2123206/nvidia-and-amd-to-pay-15-of-china-chip-sale-revenues-to-us-government?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-11, 21:10:00](https://hardware.slashdot.org/story/25/08/11/216244/ford-announces-investment-to-bring-affordable-evs-to-market?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ford Announces Investment To Bring Affordable EVs To Market](https://hardware.slashdot.org/story/25/08/11/216244/ford-announces-investment-to-bring-affordable-evs-to-market?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-11, 21:03:28](https://lobste.rs/s/gkpzyh/don_t_forget_flush) - [Don’t Forget To Flush](https://www.youtube.com/watch?v=f30PceqQWko)
* [2025-08-11, 20:50:13](https://news.ycombinator.com/item?id=44869323) - [I&apos;ve seen 12 people hospitalized after losing touch with reality because of AI](https://twitter.com/KeithSakata/status/1954884361695719474)
* [2025-08-11, 20:10:48](https://lobste.rs/s/jrrhfu/missing_css_1_2_0) - [missing.css 1.2.0](https://missing.style/releases/1.2.0/)
* [2025-08-11, 20:10:00](https://news.slashdot.org/story/25/08/11/1939238/biochar-from-human-waste-could-solve-global-fertilizer-shortages-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Biochar From Human Waste Could Solve Global Fertilizer Shortages, Study Finds](https://news.slashdot.org/story/25/08/11/1939238/biochar-from-human-waste-could-solve-global-fertilizer-shortages-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-11, 19:36:43](https://lobste.rs/s/pzp80a/cupid_for_joyful_coding_2022) - [CUPID: for joyful coding (2022)](https://dannorth.net/blog/cupid-for-joyful-coding/)
* [2025-08-11, 19:30:00](https://it.slashdot.org/story/25/08/11/1858209/promising-linux-project-dies-after-dev-faces-harassment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Promising Linux Project Dies After Dev Faces Harassment](https://it.slashdot.org/story/25/08/11/1858209/promising-linux-project-dies-after-dev-faces-harassment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-11, 18:51:00](https://it.slashdot.org/story/25/08/11/1851211/starbucks-asks-customers-in-south-korea-to-stop-bringing-printers-and-desktop-computers-into-stores?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Starbucks Asks Customers in South Korea To Stop Bringing Printers and Desktop Computers Into Stores](https://it.slashdot.org/story/25/08/11/1851211/starbucks-asks-customers-in-south-korea-to-stop-bringing-printers-and-desktop-computers-into-stores?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-11, 18:45:00](https://soylentnews.org/article.pl?sid=25/08/10/1036210&amp;from=rss) - [Asian Hornet’s Unique Buzz May Hold Secret to Containing Invasive Species](https://soylentnews.org/article.pl?sid=25/08/10/1036210&amp;from=rss)
* [2025-08-11, 18:12:00](https://hardware.slashdot.org/story/25/08/11/1814206/americas-clean-hydrogen-dreams-are-fading-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America&apos;s Clean Hydrogen Dreams Are Fading, Again](https://hardware.slashdot.org/story/25/08/11/1814206/americas-clean-hydrogen-dreams-are-fading-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-11, 18:03:57](https://news.ycombinator.com/item?id=44867374) - [Neki – sharded Postgres by the team behind Vitess](https://planetscale.com/blog/announcing-neki)
* [2025-08-11, 17:54:08](https://news.ycombinator.com/item?id=44867238) - [Ollama and gguf](https://github.com/ollama/ollama/issues/11714)
* [2025-08-11, 17:53:46](https://lobste.rs/s/nefxb8/matrix_security_release) - [Matrix Security Release](https://matrix.org/blog/2025/08/security-release/)
* [2025-08-11, 17:30:00](https://tech.slashdot.org/story/25/08/11/1724231/reddit-will-block-the-internet-archive?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Reddit Will Block the Internet Archive](https://tech.slashdot.org/story/25/08/11/1724231/reddit-will-block-the-internet-archive?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-11, 17:28:47](https://lobste.rs/s/jrutdz/commit_mono) - [Commit Mono](https://commitmono.com/)
* [2025-08-11, 17:25:57](https://news.ycombinator.com/item?id=44866894) - [AP to end its weekly book reviews](https://dankennedy.net/2025/08/08/the-associated-press-tells-its-book-critics-that-its-ending-weekly-reviews/)
* [2025-08-11, 17:21:17](https://lobste.rs/s/dborqj/why_metropolis_hastings_works) - [Why Metropolis–Hastings Works](https://gregorygundersen.com/blog/2019/11/02/metropolis-hastings/)
* [2025-08-11, 17:07:34](https://news.ycombinator.com/item?id=44866677) - [Apache Iceberg V3 Spec new features for more efficient and flexible data lakes](https://opensource.googleblog.com/2025/08/whats-new-in-iceberg-v3.html)
* [2025-08-11, 17:03:33](https://news.ycombinator.com/item?id=44866621) - [The demographic future of humanity: facts and consequences [pdf]](https://www.sas.upenn.edu/~jesusfv/Slides_London.pdf)
* [2025-08-11, 17:00:04](https://news.ycombinator.com/item?id=44866587) - [Trellis (YC W24) Is Hiring: Automate Prior Auth in Healthcare](https://www.ycombinator.com/companies/trellis/jobs/Cv3ZwXh-forward-deployed-engineers-all-levels-august-2025)
* [2025-08-11, 16:53:43](https://news.ycombinator.com/item?id=44866500) - [The Value of Institutional Memory](https://timharford.com/2025/05/the-value-of-institutional-memory/)
* [2025-08-11, 16:50:00](https://news.slashdot.org/story/25/08/11/1650253/ex-nsa-chief-paul-nakasone-has-a-warning-for-the-tech-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ex-NSA Chief Paul Nakasone Has a Warning for the Tech World](https://news.slashdot.org/story/25/08/11/1650253/ex-nsa-chief-paul-nakasone-has-a-warning-for-the-tech-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-11, 16:33:26](https://news.ycombinator.com/item?id=44866208) - [Wikipedia loses challenge against Online Safety Act](https://www.bbc.com/news/articles/cjr11qqvvwlo)
* [2025-08-11, 16:22:23](https://lobste.rs/s/9ndggc/this_send_sync_secret_separates) - [This Send/Sync Secret Separates Professional From Amateur Rust Developers](https://blog.cuongle.dev/p/this-sendsync-secret-separates-professional-and-amateur)
* [2025-08-11, 16:16:56](https://news.ycombinator.com/item?id=44865997) - [The Joy of Mixing Custom Elements, Web Components, and Markdown](https://deanebarker.net/tech/blog/custom-elements-markdown/)
* [2025-08-11, 16:11:50](https://news.ycombinator.com/item?id=44865916) - [UI vs. API. vs. UAI](https://www.joshbeckman.org/blog/practicing/ui-vs-api-vs-uai)
* [2025-08-11, 16:10:00](https://news.slashdot.org/story/25/08/11/1610211/goodbye-165000-tech-jobs-student-coders-seek-work-at-chipotle?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Goodbye, $165,000 Tech Jobs. Student Coders Seek Work At Chipotle.&apos;](https://news.slashdot.org/story/25/08/11/1610211/goodbye-165000-tech-jobs-student-coders-seek-work-at-chipotle?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-11, 16:06:04](https://news.ycombinator.com/item?id=44865834) - [Learn, Reflect, Apply, Prepare: The Four Daily Practices That Changed How I Live](https://opuslabs.substack.com/p/learn-reflect-apply-prepare)
* [2025-08-11, 16:05:30](https://lobste.rs/s/l2tn82/choosing_typeface) - [Choosing typeface](https://imperavi.com/books/ui-typography/basis/choosing-typeface/)
* [2025-08-11, 15:48:34](https://lobste.rs/s/hlyyv9/tour_standard_ml_2021) - [A Tour of Standard ML (2021)](https://saityi.github.io/sml-tour/tour/welcome)
* [2025-08-11, 15:47:48](https://news.ycombinator.com/item?id=44865560) - [GitHub is no longer independent at Microsoft after CEO resignation](https://www.theverge.com/news/757461/microsoft-github-thomas-dohmke-resignation-coreai-team-transition)
* [2025-08-11, 15:30:49](https://news.ycombinator.com/item?id=44865290) - [Launch HN: Halluminate (YC S25) – Simulating the internet to train computer use](https://news.ycombinator.com/item?id=44865290)
* [2025-08-11, 15:25:00](https://developers.slashdot.org/story/25/08/11/1525253/github-no-longer-independent-at-microsoft-as-ceo-steps-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GitHub No Longer Independent at Microsoft As CEO Steps Down](https://developers.slashdot.org/story/25/08/11/1525253/github-no-longer-independent-at-microsoft-as-ceo-steps-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-11, 15:12:40](https://lobste.rs/s/kvmnkg/takeaway_work_stealing_task_queue) - [Takeaway: a work-stealing task queue library for Rust](https://bal-e.org/speed/krabby/takeaway/)
* [2025-08-11, 14:42:27](https://news.ycombinator.com/item?id=44864680) - [36B solar mass black hole at centre of the Cosmic Horseshoe gravitational lens](https://academic.oup.com/mnras/article/541/4/2853/8213862?login=false)
* [2025-08-11, 14:42:00](https://hardware.slashdot.org/story/25/08/11/1440231/the-engineering-marvel-that-china-hopes-will-help-wean-it-off-foreign-energy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Engineering Marvel That China Hopes Will Help Wean It Off Foreign Energy](https://hardware.slashdot.org/story/25/08/11/1440231/the-engineering-marvel-that-china-hopes-will-help-wean-it-off-foreign-energy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-11, 14:25:58](https://news.ycombinator.com/item?id=44864467) - [Designing Software in the Large](https://dafoster.net/articles/2025/07/22/designing-software-in-the-large/)
* [2025-08-11, 14:25:05](https://lobste.rs/s/e9fdbs/i_tried_coding_with_ai_i_became_lazy_stupid) - [I tried coding with AI, I became lazy and stupid](https://thomasorus.com/i-tried-coding-with-ai-i-became-lazy-and-stupid)
* [2025-08-11, 14:14:00](https://soylentnews.org/article.pl?sid=25/08/11/145224&amp;from=rss) - [RIP: Dame Stephanie &apos;Steve&apos; Shirley, Technology Pioneer, Dies Aged 91](https://soylentnews.org/article.pl?sid=25/08/11/145224&amp;from=rss)
* [2025-08-11, 14:03:46](https://news.ycombinator.com/item?id=44864185) - [Claude Code is all you need](https://dwyer.co.za/static/claude-code-is-all-you-need.html)
* [2025-08-11, 14:03:35](https://lobste.rs/s/4goopn/algorithmic_underground) - [Algorithmic Underground](https://jmsdnns.com/tech/algo-underground/)
* [2025-08-11, 14:03:00](https://news.slashdot.org/story/25/08/11/144202/wikipedia-operator-loses-court-challenge-to-uk-online-safety-act-regulations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wikipedia Operator Loses Court Challenge To UK Online Safety Act Regulations](https://news.slashdot.org/story/25/08/11/144202/wikipedia-operator-loses-court-challenge-to-uk-online-safety-act-regulations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-11, 14:01:00](https://soylentnews.org/article.pl?sid=25/08/09/1958210&amp;from=rss) - [CalyxOS: The Pause That Wasn&apos;t](https://soylentnews.org/article.pl?sid=25/08/09/1958210&amp;from=rss)
* [2025-08-11, 13:59:02](https://news.ycombinator.com/item?id=44864134) - [I tried every todo app and ended up with a .txt file](https://www.al3rez.com/todo-txt-journey)
* [2025-08-11, 13:12:41](https://lobste.rs/s/y6cpkw/llm_coding_assistant_census) - [LLM Coding Assistant Census](https://aleyan.com/blog/2025-llm-assistant-census/)
* [2025-08-11, 12:27:08](https://news.ycombinator.com/item?id=44863409) - [Pricing Pages – A Curated Gallery of Pricing Page Designs](https://pricingpages.design/)
* [2025-08-11, 12:14:59](https://lobste.rs/s/d1mjpf/openssh_post_quantum_cryptography) - [OpenSSH: Post-Quantum Cryptography](https://www.openssh.com/pq.html)
* [2025-08-11, 12:01:58](https://news.ycombinator.com/item?id=44863242) - [OpenSSH Post-Quantum Cryptography](https://www.openssh.com/pq.html)
* [2025-08-11, 11:34:00](https://yro.slashdot.org/story/25/08/10/1938248/its-steve-wozniaks-75th-birthday-whatever-happened-to-his-youtube-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [It&apos;s Steve Wozniak&apos;s 75th Birthday.  Whatever Happened to His YouTube Lawsuit?](https://yro.slashdot.org/story/25/08/10/1938248/its-steve-wozniaks-75th-birthday-whatever-happened-to-his-youtube-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-11, 11:33:50](https://lobste.rs/s/pdrj5s/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/pdrj5s/what_are_you_doing_this_week)
* [2025-08-11, 11:09:44](https://lobste.rs/s/gezsia/bevy_s_fifth_birthday) - [Bevy&apos;s Fifth Birthday](https://bevy.org/news/bevys-fifth-birthday/)
* [2025-08-11, 10:10:46](https://news.ycombinator.com/item?id=44862583) - [Mistral Integration Improved in Llama.cpp](https://github.com/ggml-org/llama.cpp/pull/14737)
* [2025-08-11, 09:41:13](https://news.ycombinator.com/item?id=44862414) - [Faster substring search with SIMD in Zig](https://aarol.dev/posts/zig-simd-substr/)
* [2025-08-11, 09:38:47](https://lobste.rs/s/te7o9n/faster_substring_search_with_simd_zig) - [Faster substring search with SIMD in Zig](https://aarol.dev/posts/zig-simd-substr/)
* [2025-08-11, 09:11:00](https://soylentnews.org/article.pl?sid=25/08/09/1827235&amp;from=rss) - [Americans, Be Warned: Lessons From Reddit’s Chaotic UK Age Verification Rollout](https://soylentnews.org/article.pl?sid=25/08/09/1827235&amp;from=rss)
* [2025-08-11, 08:27:22](https://lobste.rs/s/ea9juv/how_not_build_torment_nexus) - [How to not build the Torment Nexus](https://buttondown.com/monteiro/archive/how-to-not-build-the-torment-nexus/)
* [2025-08-11, 08:21:00](https://science.slashdot.org/story/25/08/11/068247/as-demand-for-plant-based-meat-weakens-in-the-us-beyond-disappoints-wall-street?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [As Demand for Plant-Based Meat Weakens in the US, Beyond Disappoints Wall Street](https://science.slashdot.org/story/25/08/11/068247/as-demand-for-plant-based-meat-weakens-in-the-us-beyond-disappoints-wall-street?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-11, 05:56:33](https://news.ycombinator.com/item?id=44861106) - [The Chrome VRP Panel has decided to award $250k for this report](https://issues.chromium.org/issues/412578726)
* [2025-08-11, 05:21:00](https://tech.slashdot.org/story/25/08/11/0518238/how-12-enola-gay-crew-members-remember-dropping-the-atomic-bomb?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How 12 &apos;Enola Gay&apos; Crew Members Remember Dropping the Atomic Bomb](https://tech.slashdot.org/story/25/08/11/0518238/how-12-enola-gay-crew-members-remember-dropping-the-atomic-bomb?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-11, 05:14:00](https://soylentnews.org/article.pl?sid=25/08/11/0456211&amp;from=rss) - [RIP: James Lovell Dead at 97](https://soylentnews.org/article.pl?sid=25/08/11/0456211&amp;from=rss)
* [2025-08-11, 04:34:00](https://soylentnews.org/article.pl?sid=25/08/09/1818247&amp;from=rss) - [WinRAR zero-day Exploited to Plant Malware on Archive Extraction](https://soylentnews.org/article.pl?sid=25/08/09/1818247&amp;from=rss)
* [2025-08-11, 01:39:51](https://lobste.rs/s/zzu7bs/setting_up_ci_server_for_forgejo) - [Setting up a CI server for Forgejo](https://robey.lag.net/2025/08/10/forgejo-ci.html)
* [2025-08-11, 01:37:33](https://lobste.rs/s/picrzd/chacha12_blake3_secure_simple_fast) - [ChaCha12-BLAKE3: Secure, Simple and Fast authenticated and committing encryption](https://kerkour.com/chacha12-blake3)
* [2025-08-11, 01:32:31](https://news.ycombinator.com/item?id=44860015) - [Optimizing my sleep around Claude usage limits](https://mattwie.se/no-sleep-till-agi)
* [2025-08-11, 01:16:33](https://lobste.rs/s/7s5obz/creating_longest_possible_ski_jump_games) - [Creating the longest possible Ski Jump in The Games: Winter Challenge](https://mrwint.github.io/winter/writeup/writeup2.html)
* [2025-08-11, 00:31:03](https://lobste.rs/s/xvahem/tcp_client_self_connect_2013) - [TCP Client Self-Connect (2013)](https://sgros.blogspot.com/2013/08/tcp-client-self-connect.html)
* [2025-08-10, 23:45:00](https://soylentnews.org/article.pl?sid=25/08/09/188231&amp;from=rss) - [Is Perrier as Pure as it Claims? The Bottled Water Scandal Gripping France](https://soylentnews.org/article.pl?sid=25/08/09/188231&amp;from=rss)
* [2025-08-10, 22:35:44](https://lobste.rs/s/q1hq70/compiling_lisp_closure_conversion) - [Compiling a Lisp: Closure conversion](https://bernsteinbear.com/blog/compiling-a-lisp-12/)
* [2025-08-10, 19:37:25](https://news.ycombinator.com/item?id=44857643) - [How Boom uses software to accelerate hardware development](https://bscholl.substack.com/p/move-fast-and-dont-break-safety-critical)
* [2025-08-10, 18:57:00](https://soylentnews.org/article.pl?sid=25/08/09/091234&amp;from=rss) - [Man Swaps His Salt for Sodium Bromide—and Suffers Psychosis](https://soylentnews.org/article.pl?sid=25/08/09/091234&amp;from=rss)
* [2025-08-10, 15:31:20](https://lobste.rs/s/nxeqtq/zig_s_lovely_syntax) - [Zig&apos;s Lovely Syntax](https://matklad.github.io/2025/08/09/zigs-lovely-syntax.html)
* [2025-08-10, 13:12:00](https://soylentnews.org/article.pl?sid=25/08/09/0853200&amp;from=rss) - [Oh No, Wavy Dave! Robot Crustacean Waves at Fiddler Crabs for Science, Has a Bad Time](https://soylentnews.org/article.pl?sid=25/08/09/0853200&amp;from=rss)
* [2025-08-10, 08:43:48](https://lobste.rs/s/ray4zn/lobsters_client_for_emacs) - [Lobsters client for Emacs](https://github.com/tanrax/lobsters.el)
* [2025-08-10, 08:28:00](https://soylentnews.org/article.pl?sid=25/08/09/0850232&amp;from=rss) - [Japanese Scientists Develop Artificial Blood](https://soylentnews.org/article.pl?sid=25/08/09/0850232&amp;from=rss)
* [2025-08-10, 03:45:00](https://soylentnews.org/article.pl?sid=25/08/09/0847239&amp;from=rss) - [Denmark Zoo: Donate Unwanted Pets to Feed Predators and Imitate ‘Natural Food Chain’](https://soylentnews.org/article.pl?sid=25/08/09/0847239&amp;from=rss)
* [2025-08-09, 23:01:00](https://soylentnews.org/article.pl?sid=25/08/09/0123224&amp;from=rss) - [Personalized Pricing Has Spread Across Many Industries. Here&apos;s How Consumers Can Avoid It](https://soylentnews.org/article.pl?sid=25/08/09/0123224&amp;from=rss)
* [2025-08-09, 18:15:00](https://soylentnews.org/article.pl?sid=25/08/09/0113237&amp;from=rss) - [YouTube to Gauge US Users’ Ages With AI After UK and Australia Add Age Checks](https://soylentnews.org/article.pl?sid=25/08/09/0113237&amp;from=rss)
* [2025-08-09, 13:48:00](https://soylentnews.org/article.pl?sid=25/08/08/047222&amp;from=rss) - [Hacker Summer Camp: What to Expect From BSides, Black Hat, and DEF CON](https://soylentnews.org/article.pl?sid=25/08/08/047222&amp;from=rss)
* [2025-08-09, 09:02:00](https://soylentnews.org/article.pl?sid=25/08/08/0353246&amp;from=rss) - [An Ohio Couple Welcomes a Baby Boy From a Nearly 31-Year-Old Frozen Embryo](https://soylentnews.org/article.pl?sid=25/08/08/0353246&amp;from=rss)
* [2025-08-09, 04:16:00](https://soylentnews.org/article.pl?sid=25/08/08/0113247&amp;from=rss) - [KubeSphere Kills Open Source Edition](https://soylentnews.org/article.pl?sid=25/08/08/0113247&amp;from=rss)
* [2025-08-08, 23:35:00](https://soylentnews.org/article.pl?sid=25/08/08/0056210&amp;from=rss) - [RFK Jr Cancels $500m in mRNA Vaccine Development in the US](https://soylentnews.org/article.pl?sid=25/08/08/0056210&amp;from=rss)
* [2025-08-08, 20:26:47](https://news.ycombinator.com/item?id=44841354) - [A Guide Dog for the Face-Blind](https://asimov.blog/a-guide-dog-for-the-face-blind/)
* [2025-08-08, 18:50:00](https://soylentnews.org/article.pl?sid=25/08/07/1131203&amp;from=rss) - [More Malware Uploaded to Arch Linux AUR](https://soylentnews.org/article.pl?sid=25/08/07/1131203&amp;from=rss)
* [2025-08-08, 17:25:03](https://news.ycombinator.com/item?id=44839496) - [Byte Buddy is a code generation and manipulation library for Java](https://bytebuddy.net/)
* [2025-08-08, 15:10:54](https://news.ycombinator.com/item?id=44837949) - [Why tail-recursive functions are loops](https://kmicinski.com/functional-programming/2025/08/01/loops/)
* [2025-08-08, 14:05:00](https://soylentnews.org/article.pl?sid=25/08/07/0255247&amp;from=rss) - [Ubuntu Replacing wget With wcurl](https://soylentnews.org/article.pl?sid=25/08/07/0255247&amp;from=rss)
* [2025-08-08, 09:22:00](https://soylentnews.org/article.pl?sid=25/08/07/0248239&amp;from=rss) - [Hiding Secret Codes in Light Can Protect Against Fake Videos](https://soylentnews.org/article.pl?sid=25/08/07/0248239&amp;from=rss)
* [2025-08-08, 07:44:57](https://news.ycombinator.com/item?id=44834570) - [White Mountain Direttissima](https://whitemountainski.co/pages/white-mountain-direttissima)
* [2025-08-08, 04:35:00](https://soylentnews.org/article.pl?sid=25/08/06/235236&amp;from=rss) - [China&apos;s Solar Giants Quietly Shed a Third of Their Workforces Last Year](https://soylentnews.org/article.pl?sid=25/08/06/235236&amp;from=rss)
* [2025-08-07, 23:52:00](https://soylentnews.org/article.pl?sid=25/08/06/1435231&amp;from=rss) - [OpenAI Announces Two “gpt-oss” Open AI Models, and You Can Download Them Today](https://soylentnews.org/article.pl?sid=25/08/06/1435231&amp;from=rss)
* [2025-08-07, 20:14:09](https://news.ycombinator.com/item?id=44829783) - [Porting to OS/2 (1987)](https://gitpi.us/article-archive/porting-to-os2/)
* [2025-08-07, 19:07:00](https://soylentnews.org/article.pl?sid=25/08/06/1129217&amp;from=rss) - [U.S. Semiconductor Design Company Fined $140 Million Over China Dealings](https://soylentnews.org/article.pl?sid=25/08/06/1129217&amp;from=rss)
* [2025-08-07, 14:22:00](https://soylentnews.org/article.pl?sid=25/08/06/1123237&amp;from=rss) - [AWS Deleted a 10-Year Account and All Data Without Warning](https://soylentnews.org/article.pl?sid=25/08/06/1123237&amp;from=rss)
* [2025-08-07, 09:33:00](https://soylentnews.org/article.pl?sid=25/08/05/1550247&amp;from=rss) - [Underwater Robot Draws in Millions of Viewers](https://soylentnews.org/article.pl?sid=25/08/05/1550247&amp;from=rss)
* [2025-08-07, 04:51:00](https://soylentnews.org/article.pl?sid=25/08/05/151223&amp;from=rss) - [Infrared Contact Lens Helps People See in the Dark, Even With Their Eyes Closed](https://soylentnews.org/article.pl?sid=25/08/05/151223&amp;from=rss)
* [2025-08-07, 00:07:00](https://soylentnews.org/article.pl?sid=25/08/05/1452205&amp;from=rss) - [Plague: A Newly Discovered PAM-Based Backdoor for Linux](https://soylentnews.org/article.pl?sid=25/08/05/1452205&amp;from=rss)
