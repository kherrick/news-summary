# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Data Licensing Innovations

* [RSS Co-Creator Launches New Protocol For AI Data Licensing](https://tech.slashdot.org/story/25/09/10/2320207/rss-co-creator-launches-new-protocol-for-ai-data-licensing?utm_source=rss1.0mainlinkanon&utm_medium=feed) - This new protocol aims to establish licensing guidelines for AI data usage, potentially transforming the data marketplace for AI models.

* [Pay-per-output? AI firms blindsided by beefed up robots.txt instructions](https://arstechnica.com/tech-policy/2025/09/pay-per-output-ai-firms-blindsided-by-beefed-up-robots-txt-instructions/) - A surprise development in web scraping rules intensifies challenges for AI companies relying on web data.

## Innovations in Software and Technology

* [Rust compiler performance survey 2025 results](https://blog.rust-lang.org/2025/09/10/rust-compiler-performance-survey-2025-results/) - Highlights the progress and challenges in Rust compiler efficiency over the last year.

* [From Unit Tests to Whole Universe Tests (with Will Wilson)](https://youtu.be/_xJ4maWhSNU) - A fascinating exploration into ambitious new testing paradigms for software development.

## Transportation and Infrastructure Developments

* [Amazon's Zoox Launches Robotaxi Service In Las Vegas](https://tech.slashdot.org/story/25/09/10/228250/amazons-zoox-launches-robotaxi-service-in-las-vegas?utm_source=rss1.0mainlinkanon&utm_medium=feed) - This cutting-edge service utilizes autonomous vehicles, signaling advancements in urban transportation.

* [Pontevedra, Spain declares its entire urban area a "reduced traffic zone"](https://www.greeneuropeanjournal.eu/made-for-people-not-cars-reclaiming-european-cities/) - A bold initiative in urban planning prioritizing people over cars.

## Legal and Policy Updates

* [Court rejects Verizon claim that selling location data without consent is legal](https://arstechnica.com/tech-policy/2025/09/court-rejects-verizon-claim-that-selling-location-data-without-consent-is-legal/) - A significant ruling addressing privacy concerns over consumer data usage.

* [Seoul says US must fix its visa system if it wants Korea's investments](https://english.hani.co.kr/arti/english_edition/e_international/1218025.html) - South Korea's concerns about U.S. visa policies and their impact on foreign investments.

## Environmental and Space Innovations

* [Scientists Turned Plastic Trash Into a Material That Eats Carbon](https://soylentnews.org/article.pl?sid=25/09/10/0113202&from=rss) - Researchers develop technology to utilize plastic waste for carbon capture.

* [NASA Says Mars Rover Discovered Potential Biosignature Last Year](https://science.slashdot.org/story/25/09/10/1651255/nasa-says-mars-rover-discovered-potential-biosignature-last-year?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Possible evidence of past life on Mars poses thrilling new questions about the planet.

## Emerging Threats and Security Concerns

* [US Warns Hidden Radios May Be Embedded In Solar-Powered Highway Infrastructure](https://tech.slashdot.org/story/25/09/10/222243/us-warns-hidden-radios-may-be-embedded-in-solar-powered-highway-infrastructure?utm_source=rss1.0mainlinkanon&utm_medium=feed) - An alarming warning about potential spying risks within infrastructure.

* [Wyden Says Microsoft Flaws Led to Hack of US Hospital System](https://news.slashdot.org/story/25/09/10/1951230/wyden-says-microsoft-flaws-led-to-hack-of-us-hospital-system?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Microsoft vulnerabilities blamed for a hack affecting critical healthcare systems.

## Historical Reflections and Milestones

* [48 Years Ago, Voyager 1 Left Earth](https://soylentnews.org/article.pl?sid=25/09/10/0431231&from=rss) - A look back at one of humanity’s most significant space exploration achievements.

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

* [2025-09-11, 03:06:08](https://lobste.rs/s/eaewzd/rust_compiler_performance_survey_2025) - [Rust compiler performance survey 2025 results](https://blog.rust-lang.org/2025/09/10/rust-compiler-performance-survey-2025-results/)
* [2025-09-11, 02:21:30](https://lobste.rs/s/9rg06t/pay_per_output_ai_firms_blindsided_by) - [Pay-per-output? AI firms blindsided by beefed up robots.txt instructions](https://arstechnica.com/tech-policy/2025/09/pay-per-output-ai-firms-blindsided-by-beefed-up-robots-txt-instructions/)
* [2025-09-11, 02:02:00](https://tech.slashdot.org/story/25/09/10/2320207/rss-co-creator-launches-new-protocol-for-ai-data-licensing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [RSS Co-Creator Launches New Protocol For AI Data Licensing](https://tech.slashdot.org/story/25/09/10/2320207/rss-co-creator-launches-new-protocol-for-ai-data-licensing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-11, 01:58:51](https://news.ycombinator.com/item?id=45206805) - [Seoul says US must fix its visa system if it wants Korea&apos;s investments](https://english.hani.co.kr/arti/english_edition/e_international/1218025.html)
* [2025-09-11, 01:43:31](https://lobste.rs/s/jn04wk/from_unit_tests_whole_universe_tests_with) - [From Unit Tests to Whole Universe Tests (with Will Wilson)](https://youtu.be/_xJ4maWhSNU)
* [2025-09-11, 01:27:31](https://news.ycombinator.com/item?id=45206567) - [Court rejects Verizon claim that selling location data without consent is legal](https://arstechnica.com/tech-policy/2025/09/court-rejects-verizon-claim-that-selling-location-data-without-consent-is-legal/)
* [2025-09-11, 01:25:00](https://tech.slashdot.org/story/25/09/10/228250/amazons-zoox-launches-robotaxi-service-in-las-vegas?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon&apos;s Zoox Launches Robotaxi Service In Las Vegas](https://tech.slashdot.org/story/25/09/10/228250/amazons-zoox-launches-robotaxi-service-in-las-vegas?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-11, 01:19:00](https://soylentnews.org/article.pl?sid=25/09/10/0431231&amp;from=rss) - [48 Years Ago, Voyager 1 Left Earth](https://soylentnews.org/article.pl?sid=25/09/10/0431231&amp;from=rss)
* [2025-09-11, 00:52:32](https://news.ycombinator.com/item?id=45206311) - [Where did the Smurfs get their hats](https://www.pipelinecomics.com/beginning-bd-smurfs-hats-origin/)
* [2025-09-11, 00:50:00](https://tech.slashdot.org/story/25/09/10/222243/us-warns-hidden-radios-may-be-embedded-in-solar-powered-highway-infrastructure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Warns Hidden Radios May Be Embedded In Solar-Powered Highway Infrastructure](https://tech.slashdot.org/story/25/09/10/222243/us-warns-hidden-radios-may-be-embedded-in-solar-powered-highway-infrastructure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-11, 00:10:00](https://tech.slashdot.org/story/25/09/10/210257/bmw-says-europes-gas-engine-ban-can-kill-an-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [BMW Says Europe&apos;s Gas Engine Ban &apos;Can Kill an Industry&apos;](https://tech.slashdot.org/story/25/09/10/210257/bmw-says-europes-gas-engine-ban-can-kill-an-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-10, 23:30:00](https://science.slashdot.org/story/25/09/10/2053200/white-house-asks-fda-to-review-pharma-advertising-on-tv?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [White House Asks FDA To Review Pharma Advertising On TV](https://science.slashdot.org/story/25/09/10/2053200/white-house-asks-fda-to-review-pharma-advertising-on-tv?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-10, 22:56:55](https://news.ycombinator.com/item?id=45205232) - [DOOMscrolling: The Game](https://ironicsans.ghost.io/doomscrolling-the-game/)
* [2025-09-10, 22:50:00](https://developers.slashdot.org/story/25/09/10/2047235/oracles-best-day-since-1992-puts-ellison-on-top-of-the-worlds-richest-list?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Oracle&apos;s Best Day Since 1992 Puts Ellison on Top of the World&apos;s Richest List](https://developers.slashdot.org/story/25/09/10/2047235/oracles-best-day-since-1992-puts-ellison-on-top-of-the-worlds-richest-list?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-10, 22:45:50](https://news.ycombinator.com/item?id=45205135) - [XNEdit – fast and classic X11 text editor](https://www.unixwork.de/xnedit/)
* [2025-09-10, 22:21:35](https://news.ycombinator.com/item?id=45204838) - [Intel&apos;s E2200 \&quot;Mount Morgan\&quot; IPU at Hot Chips 2025](https://chipsandcheese.com/p/intels-e2200-mount-morgan-ipu-at)
* [2025-09-10, 22:10:00](https://developers.slashdot.org/story/25/09/10/2039218/developers-joke-about-coding-like-cavemen-as-ai-service-suffers-major-outage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Developers Joke About &apos;Coding Like Cavemen&apos; As AI Service Suffers Major Outage](https://developers.slashdot.org/story/25/09/10/2039218/developers-joke-about-coding-like-cavemen-as-ai-service-suffers-major-outage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-10, 21:49:36](https://news.ycombinator.com/item?id=45204393) - [KDE launches its own distribution](https://lwn.net/SubscriberLink/1037166/caa6979c16a99c9e/)
* [2025-09-10, 21:43:26](https://lobste.rs/s/tq985k/kde_launches_its_own_distribution_again) - [KDE launches its own distribution (again)](https://lwn.net/SubscriberLink/1037166/caa6979c16a99c9e/)
* [2025-09-10, 21:30:00](https://news.slashdot.org/story/25/09/10/206212/atm-fees-are-at-a-record-high-a-new-survey-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ATM Fees Are at a Record High, a New Survey Finds](https://news.slashdot.org/story/25/09/10/206212/atm-fees-are-at-a-record-high-a-new-survey-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-10, 21:21:36](https://news.ycombinator.com/item?id=45203935) - [Fraudulent Publishing in the Mathematical Sciences](https://arxiv.org/abs/2509.07257)
* [2025-09-10, 21:01:01](https://news.ycombinator.com/item?id=45203643) - [Mux (YC W16) Is Hiring Engineering ICs and Managers](https://mux.com/jobs)
* [2025-09-10, 20:52:00](https://news.slashdot.org/story/25/09/10/1951230/wyden-says-microsoft-flaws-led-to-hack-of-us-hospital-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wyden Says Microsoft Flaws Led to Hack of US Hospital System](https://news.slashdot.org/story/25/09/10/1951230/wyden-says-microsoft-flaws-led-to-hack-of-us-hospital-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-10, 20:29:00](https://soylentnews.org/article.pl?sid=25/09/10/0113202&amp;from=rss) - [Scientists Turned Plastic Trash Into a Material That Eats Carbon](https://soylentnews.org/article.pl?sid=25/09/10/0113202&amp;from=rss)
* [2025-09-10, 20:10:00](https://mobile.slashdot.org/story/25/09/10/1935204/iphone-17-air-drops-physical-sim-slot-globally-pushing-esim-only-future?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [iPhone 17 Air Drops Physical SIM Slot Globally, Pushing eSIM-Only Future](https://mobile.slashdot.org/story/25/09/10/1935204/iphone-17-air-drops-physical-sim-slot-globally-pushing-esim-only-future?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-10, 19:48:33](https://lobste.rs/s/pzruab/twisted_dramatic_history_twisted_pair) - [TWISTED: The dramatic history of twisted-pair Ethernet](https://www.youtube.com/watch?v=f8PP5IHsL8Y)
* [2025-09-10, 19:45:40](https://lobste.rs/s/mbeeut/on_weird_economics_semiconductors_genai) - [On the weird economics of semiconductors and GenAI](https://gauthierroussilhe.com/en/articles/how-to-use-computing-power-faster)
* [2025-09-10, 19:30:00](https://news.slashdot.org/story/25/09/10/1915206/faa-warns-airlines-about-lithium-battery-dangers-after-50-incidents-this-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FAA Warns Airlines About Lithium Battery Dangers After 50 Incidents This Year](https://news.slashdot.org/story/25/09/10/1915206/faa-warns-airlines-about-lithium-battery-dangers-after-50-incidents-this-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-10, 19:08:05](https://news.ycombinator.com/item?id=45202252) - [Dotter: Dotfile manager and templater written in Rust](https://github.com/SuperCuber/dotter)
* [2025-09-10, 18:55:20](https://lobste.rs/s/8zubqs/arm_is_great_arm_is_terrible_so_is_risc_v) - [ARM is great, ARM is terrible (and so is RISC-V)](https://changelog.complete.org/archives/10858-arm-is-great-arm-is-terrible-and-so-is-risc-v)
* [2025-09-10, 18:53:00](https://news.slashdot.org/story/25/09/10/1853252/bending-spoons-buys-video-platform-vimeo-for-138-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bending Spoons Buys Video Platform Vimeo for $1.38 Billion](https://news.slashdot.org/story/25/09/10/1853252/bending-spoons-buys-video-platform-vimeo-for-138-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-10, 18:39:13](https://lobste.rs/s/jhrpwk/raku) - [Raku](https://raku.org/)
* [2025-09-10, 18:21:12](https://news.ycombinator.com/item?id=45201703) - [Show HN: Haystack – Review pull requests like you wrote them yourself](https://haystackeditor.com)
* [2025-09-10, 18:12:00](https://apple.slashdot.org/story/25/09/10/1812206/iphones-17-and-the-sugar-water-trap?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [iPhones 17 and the Sugar Water Trap](https://apple.slashdot.org/story/25/09/10/1812206/iphones-17-and-the-sugar-water-trap?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-10, 17:26:08](https://news.ycombinator.com/item?id=45200925) - [Defeating Nondeterminism in LLM Inference](https://thinkingmachines.ai/blog/defeating-nondeterminism-in-llm-inference/)
* [2025-09-10, 17:25:00](https://news.slashdot.org/story/25/09/10/1725211/narrative-podcasts-are-disappearing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Narrative Podcasts Are Disappearing](https://news.slashdot.org/story/25/09/10/1725211/narrative-podcasts-are-disappearing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-10, 16:51:00](https://science.slashdot.org/story/25/09/10/1651255/nasa-says-mars-rover-discovered-potential-biosignature-last-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Says Mars Rover Discovered Potential Biosignature Last Year](https://science.slashdot.org/story/25/09/10/1651255/nasa-says-mars-rover-discovered-potential-biosignature-last-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-10, 16:50:10](https://lobste.rs/s/4nqzhv/unicode_17_0_release_announcement) - [Unicode 17.0 Release Announcement](http://blog.unicode.org/2025/09/unicode-170-release-announcement.html)
* [2025-09-10, 16:35:27](https://lobste.rs/s/wiwfvy/flox_nix_foundation_nvidia_partner_for) - [Flox, the Nix Foundation, and NVIDIA Partner for CUDA](https://flox.dev/blog/flox-the-nix-foundation-and-nvidia-partner-for-cuda/)
* [2025-09-10, 16:26:07](https://news.ycombinator.com/item?id=45200024) - [“No Tax on Tips” Includes Digital Creators, Too](https://www.hollywoodreporter.com/business/business-news/no-tax-on-tips-guidance-creators-trump-treasury-1236366513/)
* [2025-09-10, 16:20:55](https://news.ycombinator.com/item?id=45199931) - [I didn&apos;t bring my son to a museum to look at screens](https://sethpurcell.com/writing/screens-in-museums/)
* [2025-09-10, 16:04:49](https://news.ycombinator.com/item?id=45199713) - [ChatGPT Developer Mode: Full MCP client access](https://platform.openai.com/docs/guides/developer-mode)
* [2025-09-10, 16:00:06](https://news.ycombinator.com/item?id=45199648) - [Launch HN: Recall.ai (YC W20) – API for meeting recordings and transcripts](https://news.ycombinator.com/item?id=45199648)
* [2025-09-10, 15:44:00](https://soylentnews.org/article.pl?sid=25/09/10/0055209&amp;from=rss) - [Ubuntu Software Repositories Unavailable or Slow for Multiple Days Due to Outage](https://soylentnews.org/article.pl?sid=25/09/10/0055209&amp;from=rss)
* [2025-09-10, 15:43:25](https://lobste.rs/s/h6peie/origin_story_merge_queues) - [The Origin Story of Merge Queues](https://mergify.com/blog/the-origin-story-of-merge-queues)
* [2025-09-10, 15:31:36](https://lobste.rs/s/qnesth/what_s_new_kotlin_2_2_20) - [What&apos;s new in Kotlin 2.2.20](https://kotlinlang.org/docs/whatsnew2220.html)
* [2025-09-10, 14:46:21](https://lobste.rs/s/8ubfdd/many_hard_leetcode_problems_are_easy) - [Many Hard Leetcode Problems are Easy Constraint Problems](https://buttondown.com/hillelwayne/archive/many-hard-leetcode-problems-are-easy-constraint/)
* [2025-09-10, 14:42:15](https://news.ycombinator.com/item?id=45198481) - [Jiratui – A Textual UI for interacting with Atlassian Jira from your shell](https://jiratui.sh/)
* [2025-09-10, 14:25:39](https://lobste.rs/s/99cxl3/fenwick_layout_for_interval_trees) - [Fenwick layout for interval trees](https://purplesyringa.moe/blog/fenwick-layout-for-interval-trees/)
* [2025-09-10, 13:31:55](https://lobste.rs/s/duh6vr/jep_401_value_classes_objects_preview) - [JEP 401: Value Classes and Objects (Preview)](https://openjdk.org/jeps/401)
* [2025-09-10, 13:14:01](https://lobste.rs/s/55khpr/kerberoasting) - [Kerberoasting](https://blog.cryptographyengineering.com/2025/09/10/kerberoasting/)
* [2025-09-10, 12:01:30](https://news.ycombinator.com/item?id=45196437) - [Kerberoasting](https://blog.cryptographyengineering.com/2025/09/10/kerberoasting/)
* [2025-09-10, 11:56:23](https://lobste.rs/s/whp654/effects_as_capabilities_scala) - [Effects as Capabilities in Scala](https://nrinaudo.github.io/articles/capabilities.html)
* [2025-09-10, 11:34:41](https://lobste.rs/s/fnyipj/scaling_asyncio_on_free_threaded_python) - [Scaling asyncio on Free-Threaded Python](https://labs.quansight.org/blog/scaling-asyncio-on-free-threaded-python)
* [2025-09-10, 11:31:55](https://news.ycombinator.com/item?id=45196173) - [OrioleDB Patent: now freely available to the Postgres community](https://supabase.com/blog/orioledb-patent-free)
* [2025-09-10, 10:57:00](https://soylentnews.org/article.pl?sid=25/09/10/0052200&amp;from=rss) - [Amazon&apos;s Project Kuiper Signs Up JetBlue as its First Airline Customer to Use its Satellite Internet](https://soylentnews.org/article.pl?sid=25/09/10/0052200&amp;from=rss)
* [2025-09-10, 10:08:14](https://news.ycombinator.com/item?id=45195520) - [Pontevedra, Spain declares its entire urban area a \&quot;reduced traffic zone\&quot;](https://www.greeneuropeanjournal.eu/made-for-people-not-cars-reclaiming-european-cities/)
* [2025-09-10, 09:32:19](https://lobste.rs/s/gjqkbw/love_letter_csv_format_2024) - [A love letter to the CSV format (2024)](https://medialab.sciencespo.fr/en/news/a-love-letter-to-the-csv-format/)
* [2025-09-10, 06:13:00](https://soylentnews.org/article.pl?sid=25/09/09/1559244&amp;from=rss) - [Congress and Trump May Compromise on the SLS Rocket by Axing its Costly Upper Stage](https://soylentnews.org/article.pl?sid=25/09/09/1559244&amp;from=rss)
* [2025-09-10, 01:28:00](https://soylentnews.org/article.pl?sid=25/09/09/1229205&amp;from=rss) - [Your Red is My Red, at Least to Our Brains](https://soylentnews.org/article.pl?sid=25/09/09/1229205&amp;from=rss)
* [2025-09-09, 20:43:00](https://soylentnews.org/article.pl?sid=25/09/08/1814241&amp;from=rss) - [Microsoft Software Reselling Dispute Heads Back to UK Court](https://soylentnews.org/article.pl?sid=25/09/08/1814241&amp;from=rss)
* [2025-09-09, 20:17:32](https://lobste.rs/s/zmwje4/bloat_edge_case_first_libraries) - [The bloat of edge-case first libraries](https://43081j.com/2025/09/bloat-of-edge-case-libraries)
* [2025-09-09, 16:27:25](https://lobste.rs/s/h4j1vk/formatting_code_should_be_unnecessary) - [Formatting code should be unnecessary](https://maxleiter.com/blog/formatting)
* [2025-09-09, 16:11:39](https://lobste.rs/s/ukpdhb/new_experimental_go_api_for_json) - [A new experimental Go API for JSON](https://go.dev/blog/jsonv2-exp)
* [2025-09-09, 15:59:00](https://soylentnews.org/article.pl?sid=25/09/08/1810222&amp;from=rss) - [Multiple Undersea Cable Cuts in the Red Sea, Hampering Internet Performance](https://soylentnews.org/article.pl?sid=25/09/08/1810222&amp;from=rss)
* [2025-09-09, 15:37:56](https://lobste.rs/s/xcbjqt/rich_already_answered) - [Rich Already Answered That](https://gist.github.com/reborg/dc8b0c96c397a56668905e2767fd697f)
* [2025-09-09, 15:16:35](https://lobste.rs/s/vclmlx/apple_event_for_september_9th_2025) - [Apple Event for September 9th, 2025](https://www.apple.com/apple-events/)
* [2025-09-09, 13:20:30](https://lobste.rs/s/9m1tto/term_everything_run_any_gui_app_terminal) - [term.everything: Run any GUI app in the terminal](https://github.com/mmulet/term.everything)
* [2025-09-09, 13:16:30](https://news.ycombinator.com/item?id=45181535) - [Show HN: Term.everything – Run any GUI app in the terminal](https://github.com/mmulet/term.everything)
* [2025-09-09, 11:14:00](https://soylentnews.org/article.pl?sid=25/09/08/1210241&amp;from=rss) - [Recreating &apos;The Magnificient Ambersons&apos; With AI](https://soylentnews.org/article.pl?sid=25/09/08/1210241&amp;from=rss)
* [2025-09-09, 06:27:00](https://soylentnews.org/article.pl?sid=25/09/08/128200&amp;from=rss) - [The World&apos;s Largest Iceberg is Rapidly Breaking Apart and Melting Away](https://soylentnews.org/article.pl?sid=25/09/08/128200&amp;from=rss)
* [2025-09-09, 01:39:00](https://soylentnews.org/article.pl?sid=25/09/08/0254218&amp;from=rss) - [Mazda Patents Six-Stroke Gas Engine](https://soylentnews.org/article.pl?sid=25/09/08/0254218&amp;from=rss)
* [2025-09-08, 20:53:00](https://soylentnews.org/article.pl?sid=25/09/07/1713251&amp;from=rss) - [Chagas Disease, Which Can be Deadly, is Now Considered Endemic in the U.S.](https://soylentnews.org/article.pl?sid=25/09/07/1713251&amp;from=rss)
* [2025-09-08, 18:36:46](https://news.ycombinator.com/item?id=45172058) - [The HackberryPi CM5 handheld computer](https://github.com/ZitaoTech/HackberryPiCM5)
* [2025-09-08, 16:10:00](https://soylentnews.org/article.pl?sid=25/09/07/141204&amp;from=rss) - [SpaceX Dragon Reboosts the International Space Station](https://soylentnews.org/article.pl?sid=25/09/07/141204&amp;from=rss)
* [2025-09-08, 13:04:47](https://news.ycombinator.com/item?id=45167757) - [Picat: A Logic-based Multi-paradigm Language (2014) [pdf]](https://logicprogramming.org/wp-content/uploads/2014/07/alp14.pdf)
* [2025-09-08, 12:07:14](https://news.ycombinator.com/item?id=45167295) - [A desktop environment without graphics (tmux-like)](https://github.com/Julien-cpsn/desktop-tui)
* [2025-09-08, 12:02:56](https://news.ycombinator.com/item?id=45167260) - [Hot Chips 2025: Session 1 – CPUs – By George Cozma](https://chipsandcheese.com/p/hot-chips-2025-session-1-cpus)
* [2025-09-08, 11:25:00](https://soylentnews.org/article.pl?sid=25/09/07/1358242&amp;from=rss) - [New China-Aligned Crew Poisons Windows Servers for SEO Fraud](https://soylentnews.org/article.pl?sid=25/09/07/1358242&amp;from=rss)
* [2025-09-08, 07:20:52](https://news.ycombinator.com/item?id=45165464) - [Deliberate Abstraction](https://entropicthoughts.com/deliberate-abstraction)
* [2025-09-08, 06:43:00](https://soylentnews.org/article.pl?sid=25/09/07/1352214&amp;from=rss) - [Trump Family&apos;s Crypto Token Just Made Them $5 Billion Richer](https://soylentnews.org/article.pl?sid=25/09/07/1352214&amp;from=rss)
* [2025-09-08, 02:00:00](https://soylentnews.org/article.pl?sid=25/09/07/0222253&amp;from=rss) - [Microsoft Shows Off its Latest Analog Optical Computer](https://soylentnews.org/article.pl?sid=25/09/07/0222253&amp;from=rss)
* [2025-09-07, 21:26:00](https://soylentnews.org/article.pl?sid=25/09/07/005257&amp;from=rss) - [This Unlikely Chemical Could be a Powerful Weapon Against Climate Change](https://soylentnews.org/article.pl?sid=25/09/07/005257&amp;from=rss)
* [2025-09-07, 19:31:50](https://news.ycombinator.com/item?id=45161410) - [Clojure&apos;s Solutions to the Expression Problem](https://www.infoq.com/presentations/Clojure-Expression-Problem/)
* [2025-09-07, 16:47:00](https://soylentnews.org/article.pl?sid=25/09/07/001206&amp;from=rss) - [What the Hell is Going on Right Now?](https://soylentnews.org/article.pl?sid=25/09/07/001206&amp;from=rss)
* [2025-09-07, 11:56:00](https://soylentnews.org/article.pl?sid=25/09/06/1527240&amp;from=rss) - [France Fines Google, SHEIN for Undercooked Cookie Policies](https://soylentnews.org/article.pl?sid=25/09/06/1527240&amp;from=rss)
* [2025-09-07, 08:22:54](https://news.ycombinator.com/item?id=45156414) - [Things you can do with a debugger but not with print debugging](https://mahesh-hegde.github.io/posts/what_debugger_can/)
* [2025-09-07, 07:11:00](https://soylentnews.org/article.pl?sid=25/09/06/1514247&amp;from=rss) - [Nvidia&apos;s Next-Gen AI Chip Could Be Double  the Price of H20 If China Export is Approved](https://soylentnews.org/article.pl?sid=25/09/06/1514247&amp;from=rss)
* [2025-09-07, 06:49:20](https://news.ycombinator.com/item?id=45155963) - [A polyglot&apos;s guide to multiple-dispatch (2016)](https://eli.thegreenplace.net/2016/a-polyglots-guide-to-multiple-dispatch/)
* [2025-09-07, 05:49:29](https://news.ycombinator.com/item?id=45155731) - [Longhorn – A Kubernetes-Native Filesystem](https://vegard.blog.engen.priv.no/?p=518)
* [2025-09-07, 02:27:00](https://soylentnews.org/article.pl?sid=25/09/06/1510251&amp;from=rss) - [Porsche&apos;s New Cayenne Will Charge Itself Like No Other EV](https://soylentnews.org/article.pl?sid=25/09/06/1510251&amp;from=rss)
