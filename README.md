# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [NASA Opens SpaceX's Moon Lander Contract To Rivals Over Starship Delays](https://science.slashdot.org/story/25/10/22/0358206/nasa-opens-spacexs-moon-lander-contract-to-rivals-over-starship-delays?utm_source=rss1.0mainlinkanon&utm_medium=feed) - NASA takes steps to diversify lunar exploration efforts amidst delays.

* [Google's Quantum Computer Makes a Big Technical Leap](https://science.slashdot.org/story/25/10/22/163228/googles-quantum-computer-makes-a-big-technical-leap?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Google achieves new milestones in quantum computing capabilities.

* [Introducing Galaxy XR, the first Android XR headset](https://blog.google/products/android/samsung-galaxy-xr/) - Samsung and Google unveil breakthrough in extended reality technology.

## Artificial Intelligence and Ethical Concerns

* [Reddit Sues Perplexity For Scraping Data To Train AI System](https://yro.slashdot.org/story/25/10/22/1743250/reddit-sues-perplexity-for-scraping-data-to-train-ai-system?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Legal action arises over AI training data rights.

* [More Than 1,100 Public Figures Call for Ban on AI Superintelligence](https://slashdot.org/story/25/10/22/1448213/more-than-1100-public-figures-call-for-ban-on-ai-superintelligence?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Global call to action on regulating advanced AI.

* [Meta Allows Deepfake of Irish Presidential Candidate To Spread for 12 Hours Before Removal](https://tech.slashdot.org/story/25/10/22/1724212/meta-allows-deepfake-of-irish-presidential-candidate-to-spread-for-12-hours-before-removal?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Concerns over tech responsibility in moderating content.

## Environmental and Energy Developments

* [Uber Will Pay Drivers $4,000 To Switch To EVs](https://tech.slashdot.org/story/25/10/22/1639229/uber-will-pay-drivers-4000-to-switch-to-evs?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Ride-sharing company incentivizes adoption of electric vehicles.

* [42,600 ton ship to break the world record for the deepest drill at 7 miles](https://blog.bostonorganics.com/chinas-42600-ton-meng-xiang-aims-drill-7-miles-deep-breaking-records/) - Ambitious project poised to redefine deep drilling capabilities.

* [GM To End Production of Electric Chevy Brightdrop Vans](https://tech.slashdot.org/story/25/10/22/0413239/gm-to-end-production-of-electric-chevy-brightdrop-vans?utm_source=rss1.0mainlinkanon&utm_medium=feed) - GM shifts EV production priorities, changing industry dynamics.

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

* [2025-10-22, 18:44:00](https://news.slashdot.org/story/25/10/22/181246/apple-and-google-face-enforced-changes-over-uk-smartphone-dominance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple and Google Face Enforced Changes Over UK Smartphone Dominance](https://news.slashdot.org/story/25/10/22/181246/apple-and-google-face-enforced-changes-over-uk-smartphone-dominance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 18:27:00](https://soylentnews.org/article.pl?sid=25/10/21/1918224&amp;from=rss) - [Eavesdropping on Internal Networks via Unencrypted Satellites](https://soylentnews.org/article.pl?sid=25/10/21/1918224&amp;from=rss)
* [2025-10-22, 18:05:00](https://yro.slashdot.org/story/25/10/22/1743250/reddit-sues-perplexity-for-scraping-data-to-train-ai-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Reddit Sues Perplexity For Scraping Data To Train AI System](https://yro.slashdot.org/story/25/10/22/1743250/reddit-sues-perplexity-for-scraping-data-to-train-ai-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 18:00:20](https://news.ycombinator.com/item?id=45672844) - [Rivian&apos;s Also E-bike is like nothing you&apos;ve ever seen](https://www.theverge.com/news/804157/rivian-tm-b-electric-bike-price-specs-helmet-quad)
* [2025-10-22, 17:56:54](https://news.ycombinator.com/item?id=45672788) - [42,600 ton ship to break the world record for the deepest drill at 7 miles](https://blog.bostonorganics.com/chinas-42600-ton-meng-xiang-aims-drill-7-miles-deep-breaking-records/)
* [2025-10-22, 17:30:43](https://news.ycombinator.com/item?id=45672405) - [How do LLM&apos;s trade off lives between different categories?](https://arctotherium.substack.com/p/llm-exchange-rates-updated)
* [2025-10-22, 17:26:06](https://news.ycombinator.com/item?id=45672336) - [JMAP for Calendars, Contacts and Files Now in Stalwart](https://stalw.art/blog/jmap-collaboration/)
* [2025-10-22, 17:24:00](https://tech.slashdot.org/story/25/10/22/1724212/meta-allows-deepfake-of-irish-presidential-candidate-to-spread-for-12-hours-before-removal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Allows Deepfake of Irish Presidential Candidate To Spread for 12 Hours Before Removal](https://tech.slashdot.org/story/25/10/22/1724212/meta-allows-deepfake-of-irish-presidential-candidate-to-spread-for-12-hours-before-removal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 17:22:21](https://lobste.rs/s/ghdv6w/i_see_future_jj) - [I see a future in jj](https://steveklabnik.com/writing/i-see-a-future-in-jj/)
* [2025-10-22, 17:21:54](https://news.ycombinator.com/item?id=45672280) - [I See a Future in Jj](https://steveklabnik.com/writing/i-see-a-future-in-jj/)
* [2025-10-22, 17:18:33](https://news.ycombinator.com/item?id=45672235) - [HP SitePrint](https://www.hp.com/us-en/printers/site-print/layout-robot.html)
* [2025-10-22, 17:15:38](https://news.ycombinator.com/item?id=45672199) - [Look, Another AI Browser](https://manuelmoreale.com/thoughts/look-another-ai-browser)
* [2025-10-22, 17:02:10](https://news.ycombinator.com/item?id=45672035) - [Bild AI (YC W25) Is Hiring a Founding AI Engineer](https://www.ycombinator.com/companies/bild-ai/jobs/m2ilR5L-founding-engineer-applied-ai)
* [2025-10-22, 16:50:28](https://news.ycombinator.com/item?id=45671871) - [Introducing Galaxy XR, the first Android XR headset](https://blog.google/products/android/samsung-galaxy-xr/)
* [2025-10-22, 16:45:00](https://tech.slashdot.org/story/25/10/22/1639229/uber-will-pay-drivers-4000-to-switch-to-evs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Uber Will Pay Drivers $4,000 To Switch To EVs](https://tech.slashdot.org/story/25/10/22/1639229/uber-will-pay-drivers-4000-to-switch-to-evs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 16:44:43](https://news.ycombinator.com/item?id=45671778) - [Meta is axing 600 roles across its AI division](https://www.theverge.com/news/804253/meta-ai-research-layoffs-fair-superintelligence)
* [2025-10-22, 16:04:00](https://science.slashdot.org/story/25/10/22/163228/googles-quantum-computer-makes-a-big-technical-leap?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s Quantum Computer Makes a Big Technical Leap](https://science.slashdot.org/story/25/10/22/163228/googles-quantum-computer-makes-a-big-technical-leap?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 15:24:00](https://science.slashdot.org/story/25/10/22/1524248/resistant-bacteria-are-advancing-faster-than-antibiotics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Resistant Bacteria Are Advancing Faster Than Antibiotics](https://science.slashdot.org/story/25/10/22/1524248/resistant-bacteria-are-advancing-faster-than-antibiotics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 15:20:59](https://news.ycombinator.com/item?id=45670516) - [The Logarithmic Time Perception Hypothesis](http://www.kafalas.com/Logtime.html)
* [2025-10-22, 15:16:19](https://news.ycombinator.com/item?id=45670443) - [Willow quantum chip demonstrates verifiable quantum advantage on hardware](https://blog.google/technology/research/quantum-echoes-willow-verifiable-quantum-advantage/)
* [2025-10-22, 15:03:58](https://lobste.rs/s/ikcvvv/slint_1_14_released) - [Slint 1.14 Released](https://slint.dev/blog/slint-1.14-released)
* [2025-10-22, 14:53:54](https://news.ycombinator.com/item?id=45670052) - [Scripts I wrote that I use all the time](https://evanhahn.com/scripts-i-wrote-that-i-use-all-the-time/)
* [2025-10-22, 14:48:00](https://slashdot.org/story/25/10/22/1448213/more-than-1100-public-figures-call-for-ban-on-ai-superintelligence?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [More Than 1,100 Public Figures Call for Ban on AI Superintelligence](https://slashdot.org/story/25/10/22/1448213/more-than-1100-public-figures-call-for-ban-on-ai-superintelligence?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 14:45:03](https://news.ycombinator.com/item?id=45669906) - [Show HN: Create interactive diagrams with pop-up content](https://vexlio.com/features/interactive-diagrams-with-popups/)
* [2025-10-22, 14:22:41](https://news.ycombinator.com/item?id=45669593) - [Cryptographic Issues in Cloudflare&apos;s Circl FourQ Implementation (CVE-2025-8556)](https://www.botanica.software/blog/cryptographic-issues-in-cloudflares-circl-fourq-implementation)
* [2025-10-22, 14:00:00](https://tech.slashdot.org/story/25/10/22/1347211/smart-beds-malfunctioned-during-aws-outage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Smart Beds Malfunctioned During AWS Outage](https://tech.slashdot.org/story/25/10/22/1347211/smart-beds-malfunctioned-during-aws-outage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 13:50:20](https://news.ycombinator.com/item?id=45669142) - [Linux Capabilities Revisited](https://dfir.ch/posts/linux_capabilities/)
* [2025-10-22, 13:44:29](https://lobste.rs/s/iuvukw/word_on_omarchy) - [A Word on Omarchy](https://マリウス.com/a-word-on-omarchy/)
* [2025-10-22, 13:42:00](https://soylentnews.org/article.pl?sid=25/10/21/198229&amp;from=rss) - [He Co-founded Wikipedia, Now He Says the Site Needs a Radical Change](https://soylentnews.org/article.pl?sid=25/10/21/198229&amp;from=rss)
* [2025-10-22, 13:39:26](https://news.ycombinator.com/item?id=45668990) - [AI assistants misrepresent news content 45% of the time](https://www.bbc.co.uk/mediacentre/2025/new-ebu-research-ai-assistants-news-content)
* [2025-10-22, 13:24:47](https://lobste.rs/s/2q5tn0/awesome_tiny_crates_bunch_small_crates) - [awesome-tiny-crates: A bunch of small crates that make writing Rust more fun](https://github.com/nik-rev/awesome-tiny-crates)
* [2025-10-22, 13:00:00](https://it.slashdot.org/story/25/10/22/047219/rubbish-it-systems-cost-the-us-at-least-40-billion-during-covid?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rubbish IT Systems Cost the US At Least $40 Billion During Covid](https://it.slashdot.org/story/25/10/22/047219/rubbish-it-systems-cost-the-us-at-least-40-billion-during-covid?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 12:50:55](https://lobste.rs/s/cdrvo7/how_run_1_1s_as_engineering_manager) - [How to Run 1:1s as an Engineering Manager](https://justoffbyone.com/posts/how-to-run-11s/)
* [2025-10-22, 12:48:01](https://news.ycombinator.com/item?id=45668264) - [The security paradox of local LLMs](https://quesma.com/blog/local-llms-security-paradox/)
* [2025-10-22, 12:39:37](https://news.ycombinator.com/item?id=45668160) - [SourceFS: A 2h+ Android build becomes a 15m task with a virtual filesystem](https://www.source.dev/journal/sourcefs)
* [2025-10-22, 12:12:28](https://news.ycombinator.com/item?id=45667866) - [Internet&apos;s biggest annoyance: Cookie laws should target browsers, not websites](https://nednex.com/en/the-internets-biggest-annoyance-why-cookie-laws-should-target-browsers-not-websites/)
* [2025-10-22, 11:40:14](https://lobste.rs/s/pwsnpd/powerletters_for_rust) - [Powerletters for Rust](https://brson.github.io/2025/10/07/powerletters-for-rust)
* [2025-10-22, 10:15:51](https://lobste.rs/s/h49oxc/async_dns_resolution) - [Async DNS Resolution](https://ziglang.org/devlog/2025/#2025-10-15)
* [2025-10-22, 10:00:00](https://tech.slashdot.org/story/25/10/22/0413239/gm-to-end-production-of-electric-chevy-brightdrop-vans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GM To End Production of Electric Chevy Brightdrop Vans](https://tech.slashdot.org/story/25/10/22/0413239/gm-to-end-production-of-electric-chevy-brightdrop-vans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 09:59:23](https://lobste.rs/s/nlbxqr/advanced_self_aware_ed_1) - [Advanced Self-Aware ed(1)](https://aartaka.me/advanc-ed.html)
* [2025-10-22, 09:50:48](https://lobste.rs/s/hlfr6u/simple_minimal_sql_database_migrations) - [Simple, minimal SQL database migrations written in Go with generics. Std lib database/sql and SQLX supported OOTB](https://github.com/padurean/gosmig)
* [2025-10-22, 09:40:38](https://lobste.rs/s/mhmcp4/15_go_subtleties_you_may_not_already_know) - [15 Go Subtleties You May Not Already Know](https://harrisoncramer.me/15-go-sublteties-you-may-not-already-know/)
* [2025-10-22, 09:02:41](https://lobste.rs/s/jgwhwy/element_sethtml_method_on_mdn) - [Element: setHTML() method on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/setHTML)
* [2025-10-22, 08:58:00](https://soylentnews.org/article.pl?sid=25/10/21/1229253&amp;from=rss) - [A New Attack Lets Hackers Steal 2-Factor Authentication Codes From Android Phones](https://soylentnews.org/article.pl?sid=25/10/21/1229253&amp;from=rss)
* [2025-10-22, 07:28:47](https://lobste.rs/s/ikcg1l/organizing_your_nix_configuration) - [Organizing your Nix configuration without flakes](https://somas.is/note-organizing-nix-configuration-without-flakes.html)
* [2025-10-22, 07:21:36](https://lobste.rs/s/g7uuii/modshim_override_customize_python) - [modshim: Override and customize Python packages without touching their code](https://github.com/joouha/modshim)
* [2025-10-22, 07:00:00](https://science.slashdot.org/story/25/10/22/0358206/nasa-opens-spacexs-moon-lander-contract-to-rivals-over-starship-delays?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Opens SpaceX&apos;s Moon Lander Contract To Rivals Over Starship Delays](https://science.slashdot.org/story/25/10/22/0358206/nasa-opens-spacexs-moon-lander-contract-to-rivals-over-starship-delays?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 06:17:18](https://news.ycombinator.com/item?id=45665452) - [MinIO stops distributing free Docker images](https://github.com/minio/minio/issues/21647#issuecomment-3418675115)
* [2025-10-22, 05:49:58](https://news.ycombinator.com/item?id=45665311) - [French ex-president Sarkozy begins jail sentence](https://www.bbc.com/news/articles/cvgkm2j0xelo)
* [2025-10-22, 05:13:40](https://lobste.rs/s/sljyoc/move_destruct_forget_rust) - [Move, Destruct, Forget, and Rust](https://smallcultfollowing.com/babysteps/blog/2025/10/21/move-destruct-leak/)
* [2025-10-22, 04:20:09](https://news.ycombinator.com/item?id=45664848) - [Evaluating the Infinity Cache in AMD Strix Halo](https://chipsandcheese.com/p/evaluating-the-infinity-cache-in)
* [2025-10-22, 04:11:00](https://soylentnews.org/article.pl?sid=25/10/21/1223202&amp;from=rss) - [Bitcoin Mining is Making People Sick](https://soylentnews.org/article.pl?sid=25/10/21/1223202&amp;from=rss)
* [2025-10-22, 03:30:00](https://tech.slashdot.org/story/25/10/21/2334237/automattic-ceo-calls-tumblr-his-biggest-failure-so-far?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Automattic CEO Calls Tumblr His &apos;Biggest Failure&apos; So Far](https://tech.slashdot.org/story/25/10/21/2334237/automattic-ceo-calls-tumblr-his-biggest-failure-so-far?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 02:00:00](https://hardware.slashdot.org/story/25/10/21/237254/british-columbia-to-permanently-ban-new-crypto-mining-projects-from-grid?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [British Columbia to Permanently Ban New Crypto Mining Projects From Grid](https://hardware.slashdot.org/story/25/10/21/237254/british-columbia-to-permanently-ban-new-crypto-mining-projects-from-grid?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 01:30:00](https://tech.slashdot.org/story/25/10/21/2324239/internet-archive-celebrates-1-trillion-web-pages-archived?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Internet Archive Celebrates 1 Trillion Web Pages Archived](https://tech.slashdot.org/story/25/10/21/2324239/internet-archive-celebrates-1-trillion-web-pages-archived?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 01:00:00](https://it.slashdot.org/story/25/10/21/2256241/fake-homebrew-google-ads-push-malware-onto-macos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fake Homebrew Google Ads Push Malware Onto macOS](https://it.slashdot.org/story/25/10/21/2256241/fake-homebrew-google-ads-push-malware-onto-macos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-21, 23:26:00](https://soylentnews.org/article.pl?sid=25/10/21/1218221&amp;from=rss) - [Amazon Error Creates Massive Internet Outage](https://soylentnews.org/article.pl?sid=25/10/21/1218221&amp;from=rss)
* [2025-10-21, 23:18:27](https://lobste.rs/s/lo8r1s/greatness_text_adventures) - [The Greatness of Text Adventures](https://entropicthoughts.com/the-greatness-of-text-adventures)
* [2025-10-21, 23:13:29](https://lobste.rs/s/ymcbwl/what_s_problem_with_pipe_curl_into_sh) - [What’s the problem with pipe-curl-into-sh?](https://lobste.rs/s/ymcbwl/what_s_problem_with_pipe_curl_into_sh)
* [2025-10-21, 22:10:18](https://news.ycombinator.com/item?id=45662368) - [Designing software for things that rot](https://drobinin.com/posts/designing-software-for-things-that-rot/)
* [2025-10-21, 18:51:58](https://lobste.rs/s/9u7xpi/why_ssa) - [Why SSA?](https://mcyoung.xyz/2025/10/21/ssa-1/)
* [2025-10-21, 18:41:00](https://soylentnews.org/article.pl?sid=25/10/20/2129245&amp;from=rss) - [Are We Living in a Golden Age of Stupidity?](https://soylentnews.org/article.pl?sid=25/10/20/2129245&amp;from=rss)
* [2025-10-21, 18:36:10](https://lobste.rs/s/rhmh7d/magit_is_amazing) - [Magit is Amazing](https://heiwiper.com/posts/magit-is-awesome/)
* [2025-10-21, 17:44:22](https://lobste.rs/s/ac4ab5/modal_editing_is_weird_historical) - [Modal editing is a weird historical contingency we have through sheer happenstance](https://buttondown.com/hillelwayne/archive/modal-editing-is-a-weird-historical-contingency/)
* [2025-10-21, 17:00:29](https://lobste.rs/s/wmcl4k/yet_another_year_with_decker_v1_44_v1_60) - [Yet Another Year With Decker (v1.44 - v1.60)](http://beyondloom.com/blog/unionstate3.html)
* [2025-10-21, 15:17:38](https://lobste.rs/s/pstg9w/plasma_6_5) - [Plasma 6.5](https://kde.org/announcements/plasma/6/6.5.0/)
* [2025-10-21, 13:57:00](https://soylentnews.org/article.pl?sid=25/10/20/1245230&amp;from=rss) - [Drone Tech Company DroneShield to Build 13m Facility in Australia](https://soylentnews.org/article.pl?sid=25/10/20/1245230&amp;from=rss)
* [2025-10-21, 13:11:24](https://lobste.rs/s/6hfg9a/tracking_time_without_clock) - [Tracking Time Without Clock](https://tigerbeetle.com/blog/2025-10-21-clockless-time/)
* [2025-10-21, 13:09:45](https://lobste.rs/s/kltrqx/just_use_curl) - [Just use cURL](https://justuse.org/curl/)
* [2025-10-21, 12:30:27](https://lobste.rs/s/bsckho/6_months_tangled) - [6 months of Tangled](https://blog.tangled.org/6-months)
* [2025-10-21, 11:12:03](https://lobste.rs/s/0zqebs/my_most_popular_application) - [My most popular application](https://blog.6nok.org/my-most-popular-application/)
* [2025-10-21, 09:15:00](https://soylentnews.org/article.pl?sid=25/10/20/1236216&amp;from=rss) - [Lifespan of AI Chips: The $300 Billion Question](https://soylentnews.org/article.pl?sid=25/10/20/1236216&amp;from=rss)
* [2025-10-21, 04:27:00](https://soylentnews.org/article.pl?sid=25/10/20/1229240&amp;from=rss) - [GNOME Has a New Security Threat Scanner Powered by VirusTotal](https://soylentnews.org/article.pl?sid=25/10/20/1229240&amp;from=rss)
* [2025-10-20, 23:40:00](https://soylentnews.org/article.pl?sid=25/10/20/0111228&amp;from=rss) - [Russia, AI and the Future of Disinformation Warfare](https://soylentnews.org/article.pl?sid=25/10/20/0111228&amp;from=rss)
* [2025-10-20, 18:58:00](https://soylentnews.org/article.pl?sid=25/10/18/1822203&amp;from=rss) - [Oops! It&apos;s a Kernel Stack Use-After-Free: Exploiting NVIDIA&apos;s GPU Linux Drivers](https://soylentnews.org/article.pl?sid=25/10/18/1822203&amp;from=rss)
* [2025-10-20, 17:39:00](https://soylentnews.org/meta/article.pl?sid=25/10/20/098210&amp;from=rss) - [Soylent Update](https://soylentnews.org/meta/article.pl?sid=25/10/20/098210&amp;from=rss)
* [2025-10-20, 14:08:00](https://soylentnews.org/article.pl?sid=25/10/18/180239&amp;from=rss) - [Quantum Crystals Offer a Blueprint for the Future of Computing and Chemistry](https://soylentnews.org/article.pl?sid=25/10/18/180239&amp;from=rss)
* [2025-10-20, 09:26:00](https://soylentnews.org/article.pl?sid=25/10/18/1749235&amp;from=rss) - [JPMorgan Requires Staff to Hand Over Biometric Data to Access New Headquarters](https://soylentnews.org/article.pl?sid=25/10/18/1749235&amp;from=rss)
* [2025-10-20, 04:41:00](https://soylentnews.org/article.pl?sid=25/10/16/1551203&amp;from=rss) - [Tech Billionaires Seem to be Doom Prepping. Should We All be Worried?](https://soylentnews.org/article.pl?sid=25/10/16/1551203&amp;from=rss)
* [2025-10-19, 23:52:00](https://soylentnews.org/article.pl?sid=25/10/18/004205&amp;from=rss) - [Poverty in Australia Increases to 1 in 7 People, According to Report](https://soylentnews.org/article.pl?sid=25/10/18/004205&amp;from=rss)
* [2025-10-19, 19:06:00](https://soylentnews.org/article.pl?sid=25/10/18/002218&amp;from=rss) - [Windows 11 Update Breaks Localhost, Prompting Mass Uninstall Workaround](https://soylentnews.org/article.pl?sid=25/10/18/002218&amp;from=rss)
* [2025-10-19, 14:22:00](https://soylentnews.org/article.pl?sid=25/10/18/000230&amp;from=rss) - [Is AI Running Out of Training Data?](https://soylentnews.org/article.pl?sid=25/10/18/000230&amp;from=rss)
* [2025-10-19, 13:16:25](https://news.ycombinator.com/item?id=45633900) - [Cyborgs vs. rooms, two visions for the future of computing](https://interconnected.org/home/2025/10/13/dichotomy)
* [2025-10-19, 09:36:00](https://soylentnews.org/article.pl?sid=25/10/17/2341221&amp;from=rss) - [New Psychology Research Looks at Why We Help Our Friends When They Need It](https://soylentnews.org/article.pl?sid=25/10/17/2341221&amp;from=rss)
* [2025-10-19, 04:48:00](https://soylentnews.org/article.pl?sid=25/10/17/1219257&amp;from=rss) - [Understanding Volcanoes Better: Scientists Find Exact Locations of Magma Movement](https://soylentnews.org/article.pl?sid=25/10/17/1219257&amp;from=rss)
* [2025-10-19, 00:01:00](https://soylentnews.org/article.pl?sid=25/10/18/1745254&amp;from=rss) - [Comet Lemmon (Not Lemon) Nearing Peak](https://soylentnews.org/article.pl?sid=25/10/18/1745254&amp;from=rss)
* [2025-10-18, 19:16:00](https://soylentnews.org/article.pl?sid=25/10/16/1547215&amp;from=rss) - [GM to Take $1.6 Billion Hit as It Scales Back Electric Vehicle Operations](https://soylentnews.org/article.pl?sid=25/10/16/1547215&amp;from=rss)
* [2025-10-18, 14:27:00](https://soylentnews.org/article.pl?sid=25/10/16/1545234&amp;from=rss) - [Thousands of Customers Imperiled After Nation-State Ransacks F5’s Network](https://soylentnews.org/article.pl?sid=25/10/16/1545234&amp;from=rss)
* [2025-10-18, 09:43:00](https://soylentnews.org/article.pl?sid=25/10/16/1543247&amp;from=rss) - [Lasers and Gold Nanoparticles Enable on-Demand Crystal Growth for New Materials](https://soylentnews.org/article.pl?sid=25/10/16/1543247&amp;from=rss)
* [2025-10-18, 04:57:00](https://soylentnews.org/article.pl?sid=25/10/16/1538252&amp;from=rss) - [Why Signal&apos;s Post-Quantum Makeover is an Amazing Engineering Achievement](https://soylentnews.org/article.pl?sid=25/10/16/1538252&amp;from=rss)
* [2025-10-18, 00:18:00](https://soylentnews.org/article.pl?sid=25/10/16/1534249&amp;from=rss) - [FSF Librephone](https://soylentnews.org/article.pl?sid=25/10/16/1534249&amp;from=rss)
