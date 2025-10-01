# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Edge264 – Minimalist, high-performance software decoder for H.264/AVC video](https://github.com/tvlabs/edge264) ([comments](https://news.ycombinator.com/item?id=45443462))

* [Pushing the Boundaries of C64 Graphics with Nuflix](https://cobbpg.github.io/articles/nuflix.html) ([comments](https://news.ycombinator.com/item?id=45441364))

* [Why TigerBeetle is the most interesting database in the world](https://www.amplifypartners.com/blog-posts/why-tigerbeetle-is-the-most-interesting-database-in-the-world) ([comments](https://lobste.rs/s/6bid4y/why_tigerbeetle_is_most_interesting))

* [Serving a half billion requests per day with Rust + CGI](https://jacob.gold/posts/serving-half-billion-requests-with-rust-cgi/) ([comments](https://lobste.rs/s/va0frj/serving_half_billion_requests_per_day))

* [Register allocation in the Go compiler [2024]](https://vnmakarov.github.io/2024/09/24/register-allocation-in-the-go-compiler.html) ([comments](https://lobste.rs/s/cetldx/register_allocation_go_compiler_2024))

* [Fossabot: AI code review for Dependabot/Renovate on breaking changes and impacts](https://fossa.com/blog/fossabot-dependency-upgrade-ai-agent/) ([comments](https://news.ycombinator.com/item?id=45439721))

* [Bevy 0.17](https://bevy.org/news/bevy-0-17/) ([comments](https://lobste.rs/s/gxdnb7/bevy_0_17))

## AI and Society

* [Nadella Appoints New CEO To Run Microsoft&apos;s Biggest Businesses](https://tech.slashdot.org/story/25/10/01/1534253/nadella-appoints-new-ceo-to-run-microsofts-biggest-businesses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=45438501))

* [Claude&apos;s New AI File Creation Feature Ships With Deep Security Risks Built in](https://soylentnews.org/article.pl?sid=25/09/30/0336248&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/09/29/0124238&amp;from=rss))

* [Lufthansa To Cut 4,000 Jobs As Airline Turns To AI To Boost Efficiency](https://slashdot.org/story/25/10/01/0320206/lufthansa-to-cut-4000-jobs-as-airline-turns-to-ai-to-boost-efficiency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://slashdot.org/story/25/10/01/1422204/a-godfather-of-ai-remains-concerned-as-ever-about-human-extinction))

* [A &apos;Godfather of AI&apos; Remains Concerned as Ever About Human Extinction](https://slashdot.org/story/25/10/01/1422204/a-godfather-of-ai-remains-concerned-as-ever-about-human-extinction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://lobste.rs/s/cetldx/register_allocation_go_compiler_2024))

## Environmental Progress and Challenges

* [Solar leads EU electricity generation as renewables hit 54%](https://electrek.co/2025/09/30/solar-leads-eu-electricity-generation-as-renewables-hit-54-percent/) ([comments](https://news.ycombinator.com/item?id=45440387))

* [New World Screwworm Parasite Detected in Northern Mexico Near US Border](https://soylentnews.org/article.pl?sid=25/09/28/0016247&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/09/27/1340248&amp;from=rss))

* [8,000 years of Human Activities Have Caused Wild Animals to Shrink and Domestic Animals to Grow](https://soylentnews.org/article.pl?sid=25/09/28/0015236&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/09/27/1352245&amp;from=rss))

## Remembering Jane Goodall

* [Jane Goodall, Famed Primatologist and Conservationist, Dies At 91](https://science.slashdot.org/story/25/10/01/218204/jane-goodall-famed-primatologist-and-conservationist-dies-at-91?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=45441069))

## Space and Physics Discoveries

* [This Black Hole Flipped its Magnetic Field](https://soylentnews.org/article.pl?sid=25/09/30/0346236&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/09/29/0111207&amp;from=rss))

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

* [2025-10-01, 21:40:54](https://news.ycombinator.com/item?id=45443881) - [US gov shutdown leaves IT projects hanging, security defenders a skeleton crew](https://www.theregister.com/2025/10/01/us_government_shutdown_it_seccurity/)
* [2025-10-01, 21:20:00](https://science.slashdot.org/story/25/10/01/218204/jane-goodall-famed-primatologist-and-conservationist-dies-at-91?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jane Goodall, Famed Primatologist and Conservationist, Dies At 91](https://science.slashdot.org/story/25/10/01/218204/jane-goodall-famed-primatologist-and-conservationist-dies-at-91?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-01, 21:00:18](https://news.ycombinator.com/item?id=45443462) - [Edge264 – Minimalist, high-performance software decoder for H.264/AVC video](https://github.com/tvlabs/edge264)
* [2025-10-01, 20:53:17](https://news.ycombinator.com/item?id=45443368) - [DARPA project for automated translation from C to Rust (2024)](https://www.darpa.mil/news/2024/memory-safety-vulnerabilities)
* [2025-10-01, 20:48:23](https://news.ycombinator.com/item?id=45443304) - [Microsoft declares bring your Copilot to work day, usurping IT authority](https://www.theregister.com/2025/10/01/microsoft_consumer_copilot_corporate/)
* [2025-10-01, 20:42:00](https://news.slashdot.org/story/25/10/01/1755259/filipinos-are-addicted-to-online-gambling-so-is-their-government?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Filipinos Are Addicted to Online Gambling. So Is Their Government](https://news.slashdot.org/story/25/10/01/1755259/filipinos-are-addicted-to-online-gambling-so-is-their-government?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-01, 20:40:19](https://news.ycombinator.com/item?id=45443200) - [Implementing /Usr Merge in Alpine](https://alpinelinux.org/posts/2025-10-01-usr-merge.html)
* [2025-10-01, 20:25:59](https://news.ycombinator.com/item?id=45443004) - [Unbound Academy hasn’t replaced teachers with AI](https://danmeyer.substack.com/p/the-truth-about-2-hour-learning-and)
* [2025-10-01, 20:07:44](https://news.ycombinator.com/item?id=45442743) - [AI has had zero effect on jobs so far, says Yale study](https://www.theregister.com/2025/10/01/ai_isnt_taking_people_jobs/)
* [2025-10-01, 20:01:00](https://apple.slashdot.org/story/25/10/01/1740257/samsung-confirms-plan-to-make-foldable-displays-for-major-american-company?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Samsung Confirms Plan To Make Foldable Displays for Major American Company](https://apple.slashdot.org/story/25/10/01/1740257/samsung-confirms-plan-to-make-foldable-displays-for-major-american-company?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-01, 19:36:00](https://lobste.rs/s/vawrag/ip_over_lasers) - [IP Over Lasers](https://www.mikekohn.net/micro/ip_over_lasers.php)
* [2025-10-01, 19:21:00](https://apple.slashdot.org/story/25/10/01/1719219/uk-once-again-demands-backdoor-to-apples-encrypted-cloud-storage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Once Again Demands Backdoor To Apple&apos;s Encrypted Cloud Storage](https://apple.slashdot.org/story/25/10/01/1719219/uk-once-again-demands-backdoor-to-apples-encrypted-cloud-storage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-01, 19:11:17](https://lobste.rs/s/va0frj/serving_half_billion_requests_per_day) - [Serving a half billion requests per day with Rust + CGI](https://jacob.gold/posts/serving-half-billion-requests-with-rust-cgi/)
* [2025-10-01, 19:02:00](https://soylentnews.org/article.pl?sid=25/09/30/0346236&amp;from=rss) - [This Black Hole Flipped its Magnetic Field](https://soylentnews.org/article.pl?sid=25/09/30/0346236&amp;from=rss)
* [2025-10-01, 18:42:19](https://lobste.rs/s/liw1e8/we_tried_go_s_experimental_green_tea) - [We tried Go&apos;s experimental Green Tea garbage collector and it didn&apos;t help performance](https://www.dolthub.com/blog/2025-09-26-greentea-gc-with-dolt/)
* [2025-10-01, 18:41:00](https://entertainment.slashdot.org/story/25/10/01/1530239/indian-court-tells-doctors-to-fix-their-handwriting?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Indian Court Tells Doctors To Fix Their Handwriting](https://entertainment.slashdot.org/story/25/10/01/1530239/indian-court-tells-doctors-to-fix-their-handwriting?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-01, 18:30:36](https://news.ycombinator.com/item?id=45441364) - [Pushing the Boundaries of C64 Graphics with Nuflix](https://cobbpg.github.io/articles/nuflix.html)
* [2025-10-01, 18:20:49](https://news.ycombinator.com/item?id=45441222) - [Increasing your practice surface area](https://www.indiehackers.com/post/lifestyle/increasing-your-practice-surface-area-agxYGi9bL0gd1WYYQZAu)
* [2025-10-01, 18:10:39](https://news.ycombinator.com/item?id=45441069) - [Jane Goodall has died](https://www.latimes.com/obituaries/story/2025-10-01/jane-goodall-chimpanzees-dead)
* [2025-10-01, 18:01:00](https://slashdot.org/story/25/10/01/1422204/a-godfather-of-ai-remains-concerned-as-ever-about-human-extinction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A &apos;Godfather of AI&apos; Remains Concerned as Ever About Human Extinction](https://slashdot.org/story/25/10/01/1422204/a-godfather-of-ai-remains-concerned-as-ever-about-human-extinction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-01, 17:37:05](https://lobste.rs/s/w8xado/is_tech_inevitable) - [is tech inevitable](https://deviantabstraction.com/2025/09/29/against-the-tech-inevitability/)
* [2025-10-01, 17:36:43](https://news.ycombinator.com/item?id=45440571) - [What good workplace politics looks like in practice](https://terriblesoftware.org/2025/10/01/stop-avoiding-politics/)
* [2025-10-01, 17:25:33](https://news.ycombinator.com/item?id=45440431) - [OpenTSLM: Language models that understand time series](https://www.opentslm.com/)
* [2025-10-01, 17:22:43](https://news.ycombinator.com/item?id=45440387) - [Solar leads EU electricity generation as renewables hit 54%](https://electrek.co/2025/09/30/solar-leads-eu-electricity-generation-as-renewables-hit-54-percent/)
* [2025-10-01, 17:21:00](https://news.slashdot.org/story/25/10/01/175234/britain-is-slowly-going-bust?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Britain is Slowly Going Bust](https://news.slashdot.org/story/25/10/01/175234/britain-is-slowly-going-bust?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-01, 16:41:00](https://games.slashdot.org/story/25/10/01/1515205/microsoft-raises-xbox-game-pass-top-subscription-50-to-30-monthly?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Raises Xbox Game Pass Top Subscription 50% To $30 Monthly](https://games.slashdot.org/story/25/10/01/1515205/microsoft-raises-xbox-game-pass-top-subscription-50-to-30-monthly?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-01, 16:30:16](https://news.ycombinator.com/item?id=45439721) - [Fossabot: AI code review for Dependabot/Renovate on breaking changes and impacts](https://fossa.com/blog/fossabot-dependency-upgrade-ai-agent/)
* [2025-10-01, 16:01:00](https://tech.slashdot.org/story/25/10/01/1534253/nadella-appoints-new-ceo-to-run-microsofts-biggest-businesses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nadella Appoints New CEO To Run Microsoft&apos;s Biggest Businesses](https://tech.slashdot.org/story/25/10/01/1534253/nadella-appoints-new-ceo-to-run-microsofts-biggest-businesses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-01, 15:57:47](https://lobste.rs/s/a3wcu0/who_s_hiring_q4_2025) - [Who&apos;s Hiring? Q4 2025](https://lobste.rs/s/a3wcu0/who_s_hiring_q4_2025)
* [2025-10-01, 15:40:23](https://lobste.rs/s/8nyk1p/stop_trusting_nix_caches) - [Stop Trusting Nix Caches](https://garnix.io/blog/stop-trusting-nix-caches)
* [2025-10-01, 15:21:00](https://slashdot.org/story/25/10/01/139248/chinas-k-visa-plans-spark-worries-of-a-talent-flood?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s K-visa Plans Spark Worries of a Talent Flood](https://slashdot.org/story/25/10/01/139248/chinas-k-visa-plans-spark-worries-of-a-talent-flood?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-01, 15:14:55](https://lobste.rs/s/mncj0j/kubernetes_features_stage_changes) - [Kubernetes features stage changes in a visual way](https://kaniuse.gerome.dev/)
* [2025-10-01, 15:01:06](https://news.ycombinator.com/item?id=45438503) - [Ask HN: Who is hiring? (October 2025)](https://news.ycombinator.com/item?id=45438503)
* [2025-10-01, 15:01:06](https://news.ycombinator.com/item?id=45438501) - [Ask HN: Who wants to be hired? (October 2025)](https://news.ycombinator.com/item?id=45438501)
* [2025-10-01, 15:00:41](https://news.ycombinator.com/item?id=45438496) - [Building the heap: racking 30 petabytes of hard drives for pretraining](https://si.inc/posts/the-heap/)
* [2025-10-01, 14:48:31](https://news.ycombinator.com/item?id=45438346) - [Show HN: Autism Simulator](https://autism-simulator.vercel.app/)
* [2025-10-01, 14:46:43](https://lobste.rs/s/85yaxi/as_gopher_i_m_excited_about_gleam_maybe_you) - [As a Gopher I&apos;m excited about Gleam, maybe you&apos;ll be too](https://www.youtube.com/watch?v=ctiRV4rRYYc)
* [2025-10-01, 14:40:00](https://yro.slashdot.org/story/25/10/01/134215/spooked-by-ai-bollywood-stars-drag-google-into-fight-for-personality-rights?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Spooked By AI, Bollywood Stars Drag Google Into Fight For &apos;Personality Rights&apos;](https://yro.slashdot.org/story/25/10/01/134215/spooked-by-ai-bollywood-stars-drag-google-into-fight-for-personality-rights?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-01, 14:32:17](https://lobste.rs/s/ih9wnq/gernot_s_list_systems_benchmarking) - [Gernot&apos;s List of Systems Benchmarking Crimes](https://gernot-heiser.org/benchmarking-crimes.html)
* [2025-10-01, 14:15:00](https://soylentnews.org/article.pl?sid=25/09/30/0336248&amp;from=rss) - [Claude&apos;s New AI File Creation Feature Ships With Deep Security Risks Built in](https://soylentnews.org/article.pl?sid=25/09/30/0336248&amp;from=rss)
* [2025-10-01, 14:05:45](https://news.ycombinator.com/item?id=45437893) - [Unix philosophy and filesystem access makes Claude Code amazing](https://www.alephic.com/writing/the-magic-of-claude-code)
* [2025-10-01, 14:01:00](https://slashdot.org/story/25/10/01/0434257/ai-is-not-killing-jobs-finds-new-us-study?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI is Not Killing Jobs, Finds New US Study](https://slashdot.org/story/25/10/01/0434257/ai-is-not-killing-jobs-finds-new-us-study?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-01, 13:59:32](https://lobste.rs/s/jai4yu/nix_steering_committee_vote_no) - [Nix Steering Committee vote of no confidence](https://www.haskellforall.com/2025/10/nix-steering-committee-vote-of-no.html)
* [2025-10-01, 13:53:03](https://lobste.rs/s/fygftm/f3_open_source_data_file_format_for_future) - [F3: The Open-Source Data File Format for the Future](https://db.cs.cmu.edu/papers/2025/zeng-sigmod2025.pdf)
* [2025-10-01, 13:38:36](https://news.ycombinator.com/item?id=45437594) - [Show HN: ChartDB Agent – Cursor for DB schema design](https://app.chartdb.io/ai)
* [2025-10-01, 13:00:00](https://slashdot.org/story/25/10/01/0320206/lufthansa-to-cut-4000-jobs-as-airline-turns-to-ai-to-boost-efficiency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lufthansa To Cut 4,000 Jobs As Airline Turns To AI To Boost Efficiency](https://slashdot.org/story/25/10/01/0320206/lufthansa-to-cut-4000-jobs-as-airline-turns-to-ai-to-boost-efficiency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-01, 11:31:10](https://lobste.rs/s/6bid4y/why_tigerbeetle_is_most_interesting) - [Why TigerBeetle is the most interesting database in the world](https://www.amplifypartners.com/blog-posts/why-tigerbeetle-is-the-most-interesting-database-in-the-world)
* [2025-10-01, 10:00:00](https://science.slashdot.org/story/25/10/01/0322228/curiosity-drives-viewers-to-ignore-trigger-warnings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Curiosity Drives Viewers To Ignore Trigger Warnings](https://science.slashdot.org/story/25/10/01/0322228/curiosity-drives-viewers-to-ignore-trigger-warnings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-01, 09:32:00](https://soylentnews.org/article.pl?sid=25/09/29/0143218&amp;from=rss) - [Shopify Engages in Hostile Takeover of RubyGems and Bundler](https://soylentnews.org/article.pl?sid=25/09/29/0143218&amp;from=rss)
* [2025-10-01, 09:22:10](https://news.ycombinator.com/item?id=45435825) - [Our efforts, in part, define us](https://weakty.com/posts/efforts/)
* [2025-10-01, 09:20:46](https://lobste.rs/s/nisytd/our_efforts_part_define_us) - [Our efforts, in part, define us](https://weakty.com/posts/efforts/)
* [2025-10-01, 08:06:50](https://news.ycombinator.com/item?id=45435463) - [I only use Google Sheets](https://mayberay.bearblog.dev/why-i-only-use-google-sheets/)
* [2025-10-01, 08:04:08](https://lobste.rs/s/cetldx/register_allocation_go_compiler_2024) - [Register allocation in the Go compiler [2024]](https://vnmakarov.github.io/2024/09/24/register-allocation-in-the-go-compiler.html)
* [2025-10-01, 08:00:30](https://news.ycombinator.com/item?id=45435422) - [Category Theory Illustrated – Natural Transformations](https://abuseofnotation.github.io/category-theory-illustrated/11_natural_transformations/)
* [2025-10-01, 08:00:11](https://lobste.rs/s/ufpajh/category_theory_illustrated_natural) - [Category Theory Illustrated - Natural transformations](https://abuseofnotation.github.io/category-theory-illustrated/11_natural_transformations/)
* [2025-10-01, 07:00:21](https://news.ycombinator.com/item?id=45435100) - [Type Theory and Functional Programming (1999) [pdf]](https://www.cs.cornell.edu/courses/cs6110/2015sp/textbook/Simon%20Thompson%20textbook.pdf)
* [2025-10-01, 07:00:00](https://news.slashdot.org/story/25/10/01/0326222/independent-uk-bookshops-to-begin-selling-ebooks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Independent UK Bookshops To Begin Selling eBooks](https://news.slashdot.org/story/25/10/01/0326222/independent-uk-bookshops-to-begin-selling-ebooks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-01, 06:19:11](https://lobste.rs/s/rthlbj/what_was_longest_time_you_ever_took_return) - [What was the longest time you ever took to return to a software project?](https://lobste.rs/s/rthlbj/what_was_longest_time_you_ever_took_return)
* [2025-10-01, 05:30:47](https://lobste.rs/s/ka3uqb/generate_html_conveniently_efficiently) - [Generate HTML conveniently and efficiently with Python generators](https://github.com/pcarbonn/fast_html)
* [2025-10-01, 04:49:00](https://soylentnews.org/article.pl?sid=25/09/29/0130236&amp;from=rss) - [Workslop - the Result of Too Much Clueless AI](https://soylentnews.org/article.pl?sid=25/09/29/0130236&amp;from=rss)
* [2025-10-01, 00:05:00](https://soylentnews.org/article.pl?sid=25/09/29/0126248&amp;from=rss) - [Inequality in Agri-Food Chains: Global South Produces the Food, the Global North Keeps the Wealth](https://soylentnews.org/article.pl?sid=25/09/29/0126248&amp;from=rss)
* [2025-09-30, 21:08:02](https://lobste.rs/s/gxdnb7/bevy_0_17) - [Bevy 0.17](https://bevy.org/news/bevy-0-17/)
* [2025-09-30, 20:29:18](https://lobste.rs/s/vgcxcw/systems_programming_with_zig) - [Systems Programming with Zig](https://www.manning.com/books/systems-programming-with-zig)
* [2025-09-30, 20:03:19](https://lobste.rs/s/fcimmd/organize_your_slack_channels_by_how_often) - [Organize your Slack channels by “How Often”, not “What”](https://aggressivelyparaphrasing.me/2025/09/30/organize-your-slack-channels-by-how-often-not-what/)
* [2025-09-30, 19:55:31](https://lobste.rs/s/lm3isi/glide_extensible_keyboard_focused_web) - [Glide, an extensible, keyboard-focused web browser](https://blog.craigie.dev/introducing-glide/)
* [2025-09-30, 19:43:08](https://news.ycombinator.com/item?id=45430294) - [Show HN: Glide, an extensible, keyboard-focused web browser](https://blog.craigie.dev/introducing-glide/)
* [2025-09-30, 19:24:00](https://soylentnews.org/article.pl?sid=25/09/29/0124238&amp;from=rss) - [Details Beginning to Emerge About Australia&apos;s Social Media Ban](https://soylentnews.org/article.pl?sid=25/09/29/0124238&amp;from=rss)
* [2025-09-30, 18:32:59](https://lobste.rs/s/hk8yw5/steel_bank_common_lisp_2_5_9) - [Steel Bank Common Lisp 2.5.9](https://www.sbcl.org/news.html#2.5.9)
* [2025-09-30, 14:39:00](https://soylentnews.org/article.pl?sid=25/09/29/0111207&amp;from=rss) - [Forty Years of Commitment to Software Freedom](https://soylentnews.org/article.pl?sid=25/09/29/0111207&amp;from=rss)
* [2025-09-30, 14:01:39](https://lobste.rs/s/rouky6/software_essays_shaped_me) - [The Software Essays that Shaped Me](https://refactoringenglish.com/blog/software-essays-that-shaped-me/)
* [2025-09-30, 12:08:50](https://lobste.rs/s/r6elsg/open_printer_is_open_source_inkjet) - [Open Printer is an open source inkjet printer with DRM-free ink and roll paper support](https://www.notebookcheck.net/Open-Printer-is-an-open-source-inkjet-printer-with-DRM-free-ink-and-roll-paper-support.1126929.0.html)
* [2025-09-30, 09:57:00](https://soylentnews.org/article.pl?sid=25/09/29/018254&amp;from=rss) - [OpenAI and Nvidia’s $100B AI Plan Will Require Power Equal to 10 Nuclear Reactors](https://soylentnews.org/article.pl?sid=25/09/29/018254&amp;from=rss)
* [2025-09-30, 07:30:38](https://lobste.rs/s/bt97wm/bcachefs_removed_from_mainline_kernel) - [Bcachefs removed from the mainline kernel](https://lwn.net/Articles/1040120/)
* [2025-09-30, 05:15:00](https://soylentnews.org/article.pl?sid=25/09/29/0055259&amp;from=rss) - [Think Twice Before Abandoning X11. Wayland Breaks Everything!](https://soylentnews.org/article.pl?sid=25/09/29/0055259&amp;from=rss)
* [2025-09-30, 00:32:00](https://soylentnews.org/article.pl?sid=25/09/29/0053249&amp;from=rss) - [EA is Reportedly About to be Sold in a Record-Setting $50 Billion Buyout](https://soylentnews.org/article.pl?sid=25/09/29/0053249&amp;from=rss)
* [2025-09-29, 19:46:00](https://soylentnews.org/article.pl?sid=25/09/28/0016247&amp;from=rss) - [New World Screwworm Parasite Detected in Northern Mexico Near US Border](https://soylentnews.org/article.pl?sid=25/09/28/0016247&amp;from=rss)
* [2025-09-29, 15:02:00](https://soylentnews.org/article.pl?sid=25/09/28/0015236&amp;from=rss) - [8,000 years of Human Activities Aave Caused Wild Animals to Shrink and Domestic Animals to Grow](https://soylentnews.org/article.pl?sid=25/09/28/0015236&amp;from=rss)
* [2025-09-29, 13:11:46](https://news.ycombinator.com/item?id=45413294) - [Tactility: An ESP32 OS](https://tactility.one)
* [2025-09-29, 10:17:00](https://soylentnews.org/article.pl?sid=25/09/28/008233&amp;from=rss) - [Physicists Nearly Double Speed of Superconducting Qubit Readout in Quantum Computers](https://soylentnews.org/article.pl?sid=25/09/28/008233&amp;from=rss)
* [2025-09-29, 05:35:00](https://soylentnews.org/article.pl?sid=25/09/28/006252&amp;from=rss) - [The Cyber Vulnerabilities Lurking in CRM Systems](https://soylentnews.org/article.pl?sid=25/09/28/006252&amp;from=rss)
* [2025-09-29, 00:49:00](https://soylentnews.org/article.pl?sid=25/09/27/141202&amp;from=rss) - [This Experimental Computer Chip Reuses Energy](https://soylentnews.org/article.pl?sid=25/09/27/141202&amp;from=rss)
* [2025-09-28, 22:00:47](https://news.ycombinator.com/item?id=45408473) - [\&quot;DSEG\&quot;: Original 7-segment and 14-segment fonts (2014)](https://www.keshikan.net/fonts-e.html)
* [2025-09-28, 20:01:00](https://soylentnews.org/article.pl?sid=25/09/27/1352245&amp;from=rss) - [US Uncovers 100,000 SIM Cards That Could Have “Shut Down” NYC Cell Network](https://soylentnews.org/article.pl?sid=25/09/27/1352245&amp;from=rss)
* [2025-09-28, 15:15:00](https://soylentnews.org/article.pl?sid=25/09/27/1348254&amp;from=rss) - [Physics-Informed AI Learns Local Rules Behind Flocking and Collective Motion Behaviors](https://soylentnews.org/article.pl?sid=25/09/27/1348254&amp;from=rss)
* [2025-09-28, 14:52:54](https://news.ycombinator.com/item?id=45404760) - [Ask HN: What is nowadays (opensource) way of converting HTML to PDF?](https://news.ycombinator.com/item?id=45404760)
* [2025-09-28, 14:00:57](https://news.ycombinator.com/item?id=45404378) - [A replica of Citizen Quartz watch based on Harel&apos;s paper introducing statecharts](https://andyjakubowski.github.io/statechart-watch/)
* [2025-09-28, 10:29:00](https://soylentnews.org/article.pl?sid=25/09/27/1340248&amp;from=rss) - [US Intel Officials “Concerned” China Will Soon Master Reusable Launch](https://soylentnews.org/article.pl?sid=25/09/27/1340248&amp;from=rss)
* [2025-09-28, 05:44:00](https://soylentnews.org/article.pl?sid=25/09/27/1329235&amp;from=rss) - [Consumer Reports Slams Microsoft for Windows 10 Mess, Urges Extension of Free Updates](https://soylentnews.org/article.pl?sid=25/09/27/1329235&amp;from=rss)
* [2025-09-28, 00:56:00](https://soylentnews.org/article.pl?sid=25/09/27/1318227&amp;from=rss) - [Airlines Seen as Vulnerable After Confirmed Ransomware Cyberattack, Suspect Arrested](https://soylentnews.org/article.pl?sid=25/09/27/1318227&amp;from=rss)
* [2025-09-27, 23:07:26](https://news.ycombinator.com/item?id=45400114) - [Measuring My DIY Air Purifier](https://chillphysicsenjoyer.substack.com/p/measuring-my-diy-air-purifier)
* [2025-09-27, 20:13:00](https://soylentnews.org/article.pl?sid=25/09/27/1254248&amp;from=rss) - [How AI is Subsidized by Your Utility Bills and Drives Copper Prices](https://soylentnews.org/article.pl?sid=25/09/27/1254248&amp;from=rss)
* [2025-09-27, 15:27:00](https://soylentnews.org/article.pl?sid=25/09/26/2326219&amp;from=rss) - [Cloudflare DDoSed Itself With React UseEffect Hook Blunder](https://soylentnews.org/article.pl?sid=25/09/26/2326219&amp;from=rss)
* [2025-09-27, 10:41:00](https://soylentnews.org/article.pl?sid=25/09/26/2314203&amp;from=rss) - [Magma Displacement Triggered Tens of Thousands of Earthquakes, Santorini Swarm Study Finds](https://soylentnews.org/article.pl?sid=25/09/26/2314203&amp;from=rss)
* [2025-09-27, 05:56:00](https://soylentnews.org/article.pl?sid=25/09/26/239227&amp;from=rss) - [China&apos;s Latest GPU Arrives With Claims of CUDA Compatibility and RT Support](https://soylentnews.org/article.pl?sid=25/09/26/239227&amp;from=rss)
* [2025-09-27, 01:06:00](https://soylentnews.org/article.pl?sid=25/09/26/1437222&amp;from=rss) - [How India&apos;s Unplanned Hydropower Dams and Tunnels Are Disrupting Himalayan Landscapes](https://soylentnews.org/article.pl?sid=25/09/26/1437222&amp;from=rss)
