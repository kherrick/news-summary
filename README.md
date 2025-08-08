# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Technology Advances

* [GPT-5 is here](https://openai.com/gpt-5/) - The latest iteration of OpenAI's language model makes its debut with advanced features, promising transformative applications across industries. [Comments](https://lobste.rs/s/vn29xx/gpt_5_is_here)

* [Introducing Wassette: WebAssembly-based tools for AI agents](https://opensource.microsoft.com/blog/2025/08/06/introducing-wassette-webassembly-based-tools-for-ai-agents/) - Microsoft's new WebAssembly-based platform offers lightweight and efficient AI tools. [Comments](https://lobste.rs/s/uzvf6k/introducing_wassette_webassembly_based)

* [I want everything local – Building my offline AI workspace](https://instavm.io/blog/building-my-offline-ai-workspace) - A personal journey into creating a fully offline environment for AI development to enhance privacy and control. [Comments](https://news.ycombinator.com/item?id=44840013)

* [The surprise deprecation of GPT-4o for ChatGPT consumers](https://simonwillison.net/2025/Aug/8/surprise-deprecation-of-gpt-4o/) - OpenAI's unexpected move sparks industry discussions on the sustainability of AI service versions. [Comments](https://news.ycombinator.com/item?id=44839842)

* [Google Tests AI-Powered Google Finance](https://tech.slashdot.org/story/25/08/08/1527232/google-tests-ai-powered-google-finance?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Google explores integrating artificial intelligence for financial insights on its Finance platform. [Comments](https://news.ycombinator.com/item?id=44838378)

## Space Exploration & Engineering

* [Texas politicians warn Smithsonian it must not lobby to retain its space shuttle](https://arstechnica.com/space/2025/08/texas-politicians-warn-smithsonian-it-must-not-lobby-to-retain-its-space-shuttle/) - Texas lawmakers challenge the Smithsonian's efforts to maintain possession of an iconic space shuttle. [Comments](https://news.ycombinator.com/item?id=44841853)

* [Jim Lovell, Apollo 13 commander, has died](https://www.nasa.gov/news-release/acting-nasa-administrator-reflects-on-legacy-of-astronaut-jim-lovell/) - Reflecting on the remarkable legacy of astronaut Jim Lovell, a hero of Apollo 13 and space exploration. [Comments](https://news.ycombinator.com/item?id=44840582)

* [China Solves 'Tunnel Boom' Problem With Maglev Trains](https://tech.slashdot.org/story/25/08/08/0045208/china-solves-tunnel-boom-problem-with-maglev-trains?utm_source=rss1.0mainlinkanon&utm_medium=feed) - China's innovative use of magnetic levitation technology addresses noise issues in urban planning. [Comments](https://lobste.rs/s/s7wj5y/how_i_ended_up_writing_gleam_for_living)

## Cybersecurity and Data Privacy

* [More Malware Uploaded to Arch Linux AUR](https://soylentnews.org/article.pl?sid=25/08/07/1131203&from=rss) - The Arch Linux repository faces another malware incident, raising concerns over software trust. [Comments](https://news.ycombinator.com/item?id=44841308)

* [UK Secretly Allows Facial Recognition Scans of Passport, Immigration Databases](https://news.slashdot.org/story/25/08/08/1458253/uk-secretly-allows-facial-recognition-scans-of-passport-immigration-databases?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Privacy advocates take issue with secretive biometric scanning initiated by the UK government. [Comments](https://lobste.rs/s/qllaru/http_is_not_simple)

* [Abusing Ubuntu 24.04 features for root privilege escalation (2024)](https://labs.snyk.io/resources/abusing-ubuntu-root-privilege-escalation/) - A deep dive into Ubuntu vulnerabilities demonstrates risks associated with system privileges. [Comments](https://lobste.rs/s/xqcpmc/abusing_ubuntu_24_04_features_for_root)

## Health & Wellbeing Studies

* [Frequent Nightmares Predict Early Death More Strongly Than Smoking or Obesity, Study Finds](https://science.slashdot.org/story/25/08/08/1711205/frequent-nightmares-predict-early-death-more-strongly-than-smoking-or-obesity-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - New research links frequent nightmares to health impacts exceeding those of major lifestyle risks. [Comments](https://news.ycombinator.com/item?id=44841853)

* [Study finds flavor bans cut youth vaping but slow decline in cigarette smoking](https://medicalxpress.com/news/2025-07-flavor-youth-vaping-decline-cigarette.html) - A complex picture emerges from research on tobacco and vaping policy impacts. [Comments](https://lobste.rs/s/hct5qg/breaking_sorting_barrier_for_directed)

## Software Development and Tools

* [How we replaced Elasticsearch and MongoDB with Rust and RocksDB](https://radar.com/blog/high-performance-geocoding-in-rust) - A case study in leveraging Rust for high-efficiency geocoding systems. [Comments](https://news.ycombinator.com/item?id=44836463)

* [HRT's Python fork: Leveraging PEP 690 for faster imports](https://www.hudsonrivertrading.com/hrtbeat/inside-hrts-python-fork/) - Python optimizations using PEP 690 enhance import speeds for enterprise coding. [Comments](https://lobste.rs/s/fswjtl/programming_as_extended_cognition)

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

* [2025-08-08, 21:35:30](https://lobste.rs/s/bc53lh/lobsters_interview_with_hwayne) - [Lobsters Interview with Hwayne](https://lobste.rs/s/bc53lh/lobsters_interview_with_hwayne)
* [2025-08-08, 21:26:16](https://news.ycombinator.com/item?id=44841853) - [Texas politicians warn Smithsonian it must not lobby to retain its space shuttle](https://arstechnica.com/space/2025/08/texas-politicians-warn-smithsonian-it-must-not-lobby-to-retain-its-space-shuttle/)
* [2025-08-08, 21:22:00](https://tech.slashdot.org/story/25/08/08/1840243/south-korea-postpones-decision-to-let-google-maps-work-properly---again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [South Korea Postpones Decision To Let Google Maps Work Properly - Again](https://tech.slashdot.org/story/25/08/08/1840243/south-korea-postpones-decision-to-let-google-maps-work-properly---again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 21:20:21](https://lobste.rs/s/qtm9uv/puzzling_python_program) - [A puzzling Python program](https://jo3-l.dev/posts/python-countdown/)
* [2025-08-08, 20:41:00](https://news.slashdot.org/story/25/08/08/1828209/the-fcc-will-review-emergency-alert-systems-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The FCC Will Review Emergency Alert Systems in the US](https://news.slashdot.org/story/25/08/08/1828209/the-fcc-will-review-emergency-alert-systems-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 20:22:56](https://news.ycombinator.com/item?id=44841308) - [Study finds flavor bans cut youth vaping but slow decline in cigarette smoking](https://medicalxpress.com/news/2025-07-flavor-youth-vaping-decline-cigarette.html)
* [2025-08-08, 20:01:00](https://news.slashdot.org/story/25/08/08/1817200/china-tells-brokers-to-stop-touting-stablecoins-to-cool-frenzy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Tells Brokers To Stop Touting Stablecoins To Cool Frenzy](https://news.slashdot.org/story/25/08/08/1817200/china-tells-brokers-to-stop-touting-stablecoins-to-cool-frenzy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 19:52:07](https://news.ycombinator.com/item?id=44840982) - [Disney 1985 film The Black Cauldron was an experiment that failed](https://www.bbc.com/culture/article/20250807-the-radical-film-that-became-a-disaster-for-disney)
* [2025-08-08, 19:34:03](https://lobste.rs/s/w6xvpd/overview_jepsen_at_bugbash_2025) - [Overview of Jepsen at BugBash 2025](https://antithesis.com/blog/2025/bugbash_2025/kyle_kingsbury/)
* [2025-08-08, 19:29:10](https://news.ycombinator.com/item?id=44840746) - [GPU-rich labs have won: What&apos;s left for the rest of us is distillation](https://inference.net/blog/what-s-left-is-distillation)
* [2025-08-08, 19:27:28](https://news.ycombinator.com/item?id=44840728) - [Ask HN: How can ChatGPT serve 700M users when I can&apos;t run one GPT-4 locally?](https://news.ycombinator.com/item?id=44840728)
* [2025-08-08, 19:24:07](https://news.ycombinator.com/item?id=44840693) - [Build durable workflows with Postgres](https://www.dbos.dev/blog/why-postgres-durable-execution)
* [2025-08-08, 19:21:00](https://slashdot.org/story/25/08/08/1751220/how-intels-ceo-helped-create-chinas-chip-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Intel&apos;s CEO Helped Create China&apos;s Chip Industry](https://slashdot.org/story/25/08/08/1751220/how-intels-ceo-helped-create-chinas-chip-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 19:20:51](https://news.ycombinator.com/item?id=44840654) - [Efrit: A native elisp coding agent running in Emacs](https://github.com/steveyegge/efrit)
* [2025-08-08, 19:12:18](https://news.ycombinator.com/item?id=44840582) - [Jim Lovell, Apollo 13 commander, has died](https://www.nasa.gov/news-release/acting-nasa-administrator-reflects-on-legacy-of-astronaut-jim-lovell/)
* [2025-08-08, 19:10:23](https://lobste.rs/s/hct5qg/breaking_sorting_barrier_for_directed) - [Breaking the Sorting Barrier for Directed Single-Source Shortest Paths](https://arxiv.org/abs/2504.17033)
* [2025-08-08, 18:50:00](https://soylentnews.org/article.pl?sid=25/08/07/1131203&amp;from=rss) - [More Malware Uploaded to Arch Linux AUR](https://soylentnews.org/article.pl?sid=25/08/07/1131203&amp;from=rss)
* [2025-08-08, 18:46:11](https://news.ycombinator.com/item?id=44840307) - [Json2dir: a JSON-to-directory converter, a fast alternative to home-manager](https://github.com/alurm/json2dir)
* [2025-08-08, 18:40:00](https://tech.slashdot.org/story/25/08/08/1719205/google-ending-steam-for-chromebook-support-in-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Ending Steam for Chromebook Support in 2026](https://tech.slashdot.org/story/25/08/08/1719205/google-ending-steam-for-chromebook-support-in-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 18:19:05](https://news.ycombinator.com/item?id=44840013) - [I want everything local – Building my offline AI workspace](https://instavm.io/blog/building-my-offline-ai-workspace)
* [2025-08-08, 18:04:26](https://news.ycombinator.com/item?id=44839842) - [The surprise deprecation of GPT-4o for ChatGPT consumers](https://simonwillison.net/2025/Aug/8/surprise-deprecation-of-gpt-4o/)
* [2025-08-08, 18:00:00](https://science.slashdot.org/story/25/08/08/1711205/frequent-nightmares-predict-early-death-more-strongly-than-smoking-or-obesity-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Frequent Nightmares Predict Early Death More Strongly Than Smoking or Obesity, Study Finds](https://science.slashdot.org/story/25/08/08/1711205/frequent-nightmares-predict-early-death-more-strongly-than-smoking-or-obesity-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 17:48:29](https://news.ycombinator.com/item?id=44839705) - [A message from Intel CEO Lip-Bu Tan to all company employees](https://newsroom.intel.com/corporate/my-commitment-to-you-and-our-company)
* [2025-08-08, 17:45:26](https://news.ycombinator.com/item?id=44839681) - [Someone keeps stealing, flying, fixing and returning this man&apos;s 1958 Cessna](https://www.latimes.com/california/story/2025-08-08/mystery-plane-thief)
* [2025-08-08, 17:43:40](https://lobste.rs/s/qq2x8t/lvfs_sustainability_plan) - [LVFS Sustainability Plan](https://blogs.gnome.org/hughsie/2025/08/08/lvfs-sustainability-plan/)
* [2025-08-08, 17:20:00](https://news.slashdot.org/story/25/08/08/1655253/the-troubling-decline-in-conscientiousness?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Troubling Decline in Conscientiousness](https://news.slashdot.org/story/25/08/08/1655253/the-troubling-decline-in-conscientiousness?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 16:40:00](https://tech.slashdot.org/story/25/08/08/1527232/google-tests-ai-powered-google-finance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Tests AI-Powered Google Finance](https://tech.slashdot.org/story/25/08/08/1527232/google-tests-ai-powered-google-finance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 16:16:20](https://news.ycombinator.com/item?id=44838733) - [Open SWE: An open-source asynchronous coding agent](https://blog.langchain.com/introducing-open-swe-an-open-source-asynchronous-coding-agent/)
* [2025-08-08, 16:12:03](https://news.ycombinator.com/item?id=44838687) - [HRT&apos;s Python fork: Leveraging PEP 690 for faster imports](https://www.hudsonrivertrading.com/hrtbeat/inside-hrts-python-fork/)
* [2025-08-08, 16:01:00](https://science.slashdot.org/story/25/08/08/1550231/new-method-is-the-fastest-way-to-find-the-best-routes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Method Is the Fastest Way To Find the Best Routes](https://science.slashdot.org/story/25/08/08/1550231/new-method-is-the-fastest-way-to-find-the-best-routes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 15:45:27](https://news.ycombinator.com/item?id=44838378) - [Tor: How a military project became a lifeline for privacy](https://thereader.mitpress.mit.edu/the-secret-history-of-tor-how-a-military-project-became-a-lifeline-for-privacy/)
* [2025-08-08, 15:30:03](https://lobste.rs/s/zrbpds/hypothesis_is_now_thread_safe) - [Hypothesis is now thread-safe](https://hypothesis.works/articles/thread-safe/)
* [2025-08-08, 15:21:00](https://news.slashdot.org/story/25/08/08/1458253/uk-secretly-allows-facial-recognition-scans-of-passport-immigration-databases?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Secretly Allows Facial Recognition Scans of Passport, Immigration Databases](https://news.slashdot.org/story/25/08/08/1458253/uk-secretly-allows-facial-recognition-scans-of-passport-immigration-databases?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 15:00:28](https://lobste.rs/s/fswjtl/programming_as_extended_cognition) - [Programming as Extended Cognition](https://ieeexplore.ieee.org/document/11119124)
* [2025-08-08, 14:40:00](https://news.slashdot.org/story/25/08/08/0738258/loyalty-programs-are-keeping-americas-airlines-aloft?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Loyalty Programs Are Keeping America&apos;s Airlines Aloft](https://news.slashdot.org/story/25/08/08/0738258/loyalty-programs-are-keeping-americas-airlines-aloft?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 14:29:54](https://news.ycombinator.com/item?id=44837434) - [Astronomy Photographer of the Year 2025 shortlist](https://www.rmg.co.uk/whats-on/astronomy-photographer-year/galleries/2025-shortlist)
* [2025-08-08, 14:05:00](https://soylentnews.org/article.pl?sid=25/08/07/0255247&amp;from=rss) - [Ubuntu Replacing wget With wcurl](https://soylentnews.org/article.pl?sid=25/08/07/0255247&amp;from=rss)
* [2025-08-08, 14:00:00](https://news.slashdot.org/story/25/08/08/0721242/intel-ceo-hits-out-at-misinformation-after-us-president-calls-on-him-to-resign?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel CEO Hits Out at &apos;Misinformation&apos; After US President Calls on Him To Resign](https://news.slashdot.org/story/25/08/08/0721242/intel-ceo-hits-out-at-misinformation-after-us-president-calls-on-him-to-resign?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 13:58:25](https://lobste.rs/s/stxzc8/updated_google_project_zero_disclosure) - [Updated Google Project Zero disclosure policy](https://googleprojectzero.blogspot.com/2025/07/reporting-transparency.html)
* [2025-08-08, 13:45:57](https://news.ycombinator.com/item?id=44836879) - [Getting good results from Claude code](https://www.dzombak.com/blog/2025/08/getting-good-results-from-claude-code/)
* [2025-08-08, 13:36:25](https://lobste.rs/s/gk3luv/how_long_does_it_take_upgrade_ebook) - [How long does it take to upgrade an eBook?](https://shkspr.mobi/blog/2025/08/how-long-does-it-take-to-upgrade-an-ebook/)
* [2025-08-08, 13:00:00](https://science.slashdot.org/story/25/08/08/0055250/mistakenly-sold-nasa-command-trailer-goes-on-sale?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mistakenly Sold NASA Command Trailer Goes On Sale](https://science.slashdot.org/story/25/08/08/0055250/mistakenly-sold-nasa-command-trailer-goes-on-sale?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 12:59:03](https://lobste.rs/s/qllaru/http_is_not_simple) - [HTTP is not simple](https://daniel.haxx.se/blog/2025/08/08/http-is-not-simple/)
* [2025-08-08, 12:57:50](https://news.ycombinator.com/item?id=44836463) - [How we replaced Elasticsearch and MongoDB with Rust and RocksDB](https://radar.com/blog/high-performance-geocoding-in-rust)
* [2025-08-08, 12:02:21](https://lobste.rs/s/uzvf6k/introducing_wassette_webassembly_based) - [Introducing Wassette: WebAssembly-based tools for AI agents](https://opensource.microsoft.com/blog/2025/08/06/introducing-wassette-webassembly-based-tools-for-ai-agents/)
* [2025-08-08, 11:41:04](https://news.ycombinator.com/item?id=44835879) - [Ultrathin business card runs a fluid simulation](https://github.com/Nicholas-L-Johnson/flip-card)
* [2025-08-08, 10:34:34](https://lobste.rs/s/xqcpmc/understanding_not_just_clojure_s_comp) - [Understanding not just Clojure&apos;s comp function by re-implementing it](https://www.evalapply.org/posts/lessons-from-reimplementing-clojure-comp-function/index.html)
* [2025-08-08, 10:00:00](https://tech.slashdot.org/story/25/08/07/2125251/thinkpad-designer-david-hill-spills-secrets-designs-that-never-made-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ThinkPad Designer David Hill Spills Secrets, Designs That Never Made It](https://tech.slashdot.org/story/25/08/07/2125251/thinkpad-designer-david-hill-spills-secrets-designs-that-never-made-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 09:34:16](https://lobste.rs/s/q5bgc5/abusing_ubuntu_24_04_features_for_root) - [Abusing Ubuntu 24.04 features for root privilege escalation (2024)](https://labs.snyk.io/resources/abusing-ubuntu-root-privilege-escalation/)
* [2025-08-08, 09:22:00](https://soylentnews.org/article.pl?sid=25/08/07/0248239&amp;from=rss) - [Hiding Secret Codes in Light Can Protect Against Fake Videos](https://soylentnews.org/article.pl?sid=25/08/07/0248239&amp;from=rss)
* [2025-08-08, 08:46:10](https://lobste.rs/s/s7wj5y/how_i_ended_up_writing_gleam_for_living) - [How I ended up writing Gleam for a living](https://www.youtube.com/watch?v=BfPRcanTWXA)
* [2025-08-08, 08:31:14](https://lobste.rs/s/qr1kro/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/qr1kro/what_are_you_doing_this_weekend)
* [2025-08-08, 07:06:22](https://lobste.rs/s/cn7crr/writing_surtoget_no_with_gleam) - [Writing surtoget.no with gleam](https://lindbakk.com/blog/introducing-surtoget_no)
* [2025-08-08, 07:00:00](https://tech.slashdot.org/story/25/08/08/0045208/china-solves-tunnel-boom-problem-with-maglev-trains?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Solves &apos;Tunnel Boom&apos; Problem With Maglev Trains](https://tech.slashdot.org/story/25/08/08/0045208/china-solves-tunnel-boom-problem-with-maglev-trains?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 06:55:32](https://lobste.rs/s/zxppfh/all_cool_kids_are_doing_it) - [All the cool kids are doing it](https://www.scattered-thoughts.net/writing/all-the-cool-kids-are-doing-it/)
* [2025-08-08, 05:45:42](https://news.ycombinator.com/item?id=44833834) - [Linear sent me down a local-first rabbit hole](https://bytemash.net/posts/i-went-down-the-linear-rabbit-hole/)
* [2025-08-08, 05:39:34](https://lobste.rs/s/lzladd/arenas_rust) - [Arenas in Rust](https://russellw.github.io/arenas)
* [2025-08-08, 04:35:00](https://soylentnews.org/article.pl?sid=25/08/06/235236&amp;from=rss) - [China&apos;s Solar Giants Quietly Shed a Third of Their Workforces Last Year](https://soylentnews.org/article.pl?sid=25/08/06/235236&amp;from=rss)
* [2025-08-07, 23:52:00](https://soylentnews.org/article.pl?sid=25/08/06/1435231&amp;from=rss) - [OpenAI Announces Two “gpt-oss” Open AI Models, and You Can Download Them Today](https://soylentnews.org/article.pl?sid=25/08/06/1435231&amp;from=rss)
* [2025-08-07, 22:45:53](https://lobste.rs/s/nsk2vc/mac_history_echoes_current_mac_operating) - [Mac history echoes in current Mac operating systems](http://tenfourfox.blogspot.com/2025/08/mac-history-echoes-in-mac-operating.html)
* [2025-08-07, 19:54:17](https://lobste.rs/s/tiiesw/who_s_hiring_q3_2025) - [Who&apos;s Hiring? Q3 2025](https://lobste.rs/s/tiiesw/who_s_hiring_q3_2025)
* [2025-08-07, 19:40:31](https://lobste.rs/s/m9dmt8/komodo_my_first_kde_app) - [KomoDo, my first KDE app](https://akselmo.dev/posts/komodo-my-first-kde-app/)
* [2025-08-07, 19:07:00](https://soylentnews.org/article.pl?sid=25/08/06/1129217&amp;from=rss) - [U.S. Semiconductor Design Company Fined $140 Million Over China Dealings](https://soylentnews.org/article.pl?sid=25/08/06/1129217&amp;from=rss)
* [2025-08-07, 18:41:34](https://lobste.rs/s/vn29xx/gpt_5_is_here) - [GPT-5 is here](https://openai.com/gpt-5/)
* [2025-08-07, 14:44:39](https://lobste.rs/s/lofllu/jepsen_capela_dda5892) - [Jepsen: Capela dda5892](https://jepsen.io/analyses/capela-dda5892)
* [2025-08-07, 14:22:00](https://soylentnews.org/article.pl?sid=25/08/06/1123237&amp;from=rss) - [AWS Deleted a 10-Year Account and All Data Without Warning](https://soylentnews.org/article.pl?sid=25/08/06/1123237&amp;from=rss)
* [2025-08-07, 13:22:48](https://lobste.rs/s/hcvcd9/we_replaced_passwords_with_something) - [We replaced passwords with something worse](https://blog.danielh.cc/blog/passwords)
* [2025-08-07, 11:27:31](https://lobste.rs/s/lxvgky/announcing_rust_1_89_0) - [Announcing Rust 1.89.0](https://blog.rust-lang.org/2025/08/07/Rust-1.89.0/)
* [2025-08-07, 09:33:00](https://soylentnews.org/article.pl?sid=25/08/05/1550247&amp;from=rss) - [Underwater Robot Draws in Millions of Viewers](https://soylentnews.org/article.pl?sid=25/08/05/1550247&amp;from=rss)
* [2025-08-07, 04:51:00](https://soylentnews.org/article.pl?sid=25/08/05/151223&amp;from=rss) - [Infrared Contact Lens Helps People See in the Dark, Even With Their Eyes Closed](https://soylentnews.org/article.pl?sid=25/08/05/151223&amp;from=rss)
* [2025-08-07, 00:07:00](https://soylentnews.org/article.pl?sid=25/08/05/1452205&amp;from=rss) - [Plague: A Newly Discovered PAM-Based Backdoor for Linux](https://soylentnews.org/article.pl?sid=25/08/05/1452205&amp;from=rss)
* [2025-08-06, 19:20:00](https://soylentnews.org/article.pl?sid=25/08/05/1446223&amp;from=rss) - [Russian Volcano Erupts for First Time in Centuries](https://soylentnews.org/article.pl?sid=25/08/05/1446223&amp;from=rss)
* [2025-08-06, 14:37:00](https://soylentnews.org/article.pl?sid=25/08/05/1441236&amp;from=rss) - [Inspired by Astronauts, Researchers Use High-Tech Pants to Uncover Heart Issues on MRI](https://soylentnews.org/article.pl?sid=25/08/05/1441236&amp;from=rss)
* [2025-08-06, 09:58:00](https://soylentnews.org/article.pl?sid=25/08/05/1150228&amp;from=rss) - [Space&apos;s Spinning Enigma: A ‘Unicorn’ Object Defies Astrophysics](https://soylentnews.org/article.pl?sid=25/08/05/1150228&amp;from=rss)
* [2025-08-06, 06:29:21](https://news.ycombinator.com/item?id=44808423) - [Fire hazard of WHY2025 badge due to 18650 Li-Ion cells](https://wiki.why2025.org/Badge/Fire_hazard)
* [2025-08-06, 05:08:00](https://soylentnews.org/article.pl?sid=25/08/05/0156215&amp;from=rss) - [AI and the Democratization of Cybercrime](https://soylentnews.org/article.pl?sid=25/08/05/0156215&amp;from=rss)
* [2025-08-06, 00:25:00](https://soylentnews.org/article.pl?sid=25/08/05/0152249&amp;from=rss) - [Christiaan Huygens and the Scientific Secrets of Saturn](https://soylentnews.org/article.pl?sid=25/08/05/0152249&amp;from=rss)
* [2025-08-05, 19:40:00](https://soylentnews.org/article.pl?sid=25/08/04/0644251&amp;from=rss) - [ChatGPT Users Shocked to Learn Their Chats Were in Google Search Results](https://soylentnews.org/article.pl?sid=25/08/04/0644251&amp;from=rss)
* [2025-08-05, 16:09:02](https://news.ycombinator.com/item?id=44799886) - [Poltergeist: File watcher with auto-rebuild for any language or build system](https://github.com/steipete/poltergeist)
* [2025-08-05, 14:54:00](https://soylentnews.org/article.pl?sid=25/08/03/2140229&amp;from=rss) - [China Forms AI Alliances To Cut U.S. Tech Reliance](https://soylentnews.org/article.pl?sid=25/08/03/2140229&amp;from=rss)
* [2025-08-05, 10:03:00](https://soylentnews.org/article.pl?sid=25/08/03/2136209&amp;from=rss) - [Solid-State Batteries Charge in 3 Minutes:  Why Aren&apos;t They in Your Phones and Cars Yet?](https://soylentnews.org/article.pl?sid=25/08/03/2136209&amp;from=rss)
* [2025-08-05, 06:10:43](https://news.ycombinator.com/item?id=44794811) - [Imaging reveals 2k-year-old ice mummy&apos;s &apos;incredibly impressive&apos; tattoos](https://www.cbc.ca/radio/asithappens/ice-mummy-tattooos-1.7601132)
* [2025-08-05, 05:22:00](https://soylentnews.org/article.pl?sid=25/08/03/0242234&amp;from=rss) - [Ousted Vaccine Panel Members Say Rigorous Science is Being Abandoned](https://soylentnews.org/article.pl?sid=25/08/03/0242234&amp;from=rss)
* [2025-08-05, 00:40:00](https://soylentnews.org/article.pl?sid=25/08/03/0225206&amp;from=rss) - [World News: United Nations Report Finds UN Reports Aren’t Widely Read](https://soylentnews.org/article.pl?sid=25/08/03/0225206&amp;from=rss)
* [2025-08-04, 23:14:15](https://news.ycombinator.com/item?id=44792419) - [Overengineering my homelab so I don&apos;t pay cloud providers](https://ergaster.org/posts/2025/08/04-overegineering-homelab/)
* [2025-08-04, 21:14:55](https://news.ycombinator.com/item?id=44791444) - [Voice Controlled Swarms](https://jasonfantl.com/posts/Voice-Controlled-Swarms/)
* [2025-08-04, 20:00:00](https://soylentnews.org/article.pl?sid=25/08/03/0219201&amp;from=rss) - [Brain Scans Reveal Parahippocampal Cortex Thinning in Those with Depression and Neuroticism](https://soylentnews.org/article.pl?sid=25/08/03/0219201&amp;from=rss)
* [2025-08-04, 19:36:09](https://news.ycombinator.com/item?id=44790472) - [A robust, open-source framework for Spiking Neural Networks on low-end FPGAs](https://arxiv.org/abs/2507.07284)
* [2025-08-04, 17:50:36](https://news.ycombinator.com/item?id=44789202) - [Telefon Hírmondó](https://en.wikipedia.org/wiki/Telefon_H%C3%ADrmond%C3%B3)
* [2025-08-04, 17:31:54](https://news.ycombinator.com/item?id=44788972) - [Apple&apos;s history is hiding in a Mac font](https://www.spacebar.news/apple-history-hiding-in-mac-font/)
* [2025-08-04, 15:15:00](https://soylentnews.org/article.pl?sid=25/08/03/026228&amp;from=rss) - [Clouds, Sub Cables, Report No Impact From Monster Quake](https://soylentnews.org/article.pl?sid=25/08/03/026228&amp;from=rss)
* [2025-08-04, 12:03:24](https://news.ycombinator.com/item?id=44784685) - [Window Activation](https://blog.broulik.de/2025/08/on-window-activation/)
* [2025-08-04, 10:33:00](https://soylentnews.org/article.pl?sid=25/08/02/2149227&amp;from=rss) - [Coffee Prices Rise as U.S. Imposes Tariffs on Top Exporter Brazil](https://soylentnews.org/article.pl?sid=25/08/02/2149227&amp;from=rss)
* [2025-08-04, 05:47:00](https://soylentnews.org/article.pl?sid=25/08/02/2145230&amp;from=rss) - [Kali Linux Can Now Run in Apple Containers on macOS Systems](https://soylentnews.org/article.pl?sid=25/08/02/2145230&amp;from=rss)
* [2025-08-04, 01:02:00](https://soylentnews.org/article.pl?sid=25/08/02/1318209&amp;from=rss) - [Subliminal Learning: Language Models Transmit Behavioral Traits Via Hidden Signals in Data](https://soylentnews.org/article.pl?sid=25/08/02/1318209&amp;from=rss)
