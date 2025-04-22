# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence

* [Anthropic Warns Fully AI Employees Are a Year Away](https://slashdot.org/story/25/04/22/1854208/anthropic-warns-fully-ai-employees-are-a-year-away?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Anthropic predicts that businesses might see fully AI-driven employees as early as next year, raising discussions on automation, labor, and AI ethics.

* [AI Floods Amazon With Strange Political Books Before Canadian Election](https://news.slashdot.org/story/25/04/22/1544249/ai-floods-amazon-with-strange-political-books-before-canadian-election?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A peculiar surge of AI-generated political literature has disrupted the Amazon marketplace ahead of Canada’s election.

* [Can a single AI model advance any field of science?](https://www.lanl.gov/media/publications/1663/1269-earl-lawrence-ai) - Researchers explore the potential of universal AI models in domain-agnostic scientific advancements.

* [Phase Two of Military AI Has Arrived](https://soylentnews.org/article.pl?sid=25/04/16/1843228&amp;from=rss) - Military researchers reveal augmented AI capabilities in defense and warfare, entering a new era of technology-aided conflict.

## Technology Innovations

* [ClickHouse gets lazier (and faster): Introducing lazy materialization](https://clickhouse.com/blog/clickhouse-gets-lazier-and-faster-introducing-lazy-materialization) - New updates to ClickHouse bring significant performance improvements through lazy materialization, optimizing data processing speeds.

* [Sapphire: Rust based package manager for macOS (Homebrew replacement)](https://github.com/alexykn/sapphire) - A new Rust-based package manager, Sapphire, is positioning itself as a promising alternative to Homebrew for macOS users.

## Aerospace and Astronomy

* [Oldest Serving US Astronaut Returns to Earth on 70th Birthday](https://soylentnews.org/article.pl?sid=25/04/21/2227242&amp;from=rss) - A historic moment as NASA's oldest astronaut marks their 70th birthday with a celebrated return to Earth.

* [Oxygen Discovered in Most Distant Known Galaxy](https://soylentnews.org/article.pl?sid=25/04/16/1849251&amp;from=rss) - Scientists uncover the presence of oxygen in a galaxy at the farthest reaches of the universe, offering clues to early cosmic conditions.

* [Astronomers Say They’ve Recorded the Strongest Sign Yet of Life Beyond Earth](https://soylentnews.org/article.pl?sid=25/04/19/183229&amp;from=rss) - A compelling new signal points to potential extraterrestrial life, sparking debates on the search for intergalactic neighbors.

## Lifestyle and Human Interest

* [Man Buys Racetrack, Ends Up Launching the Netflix of Grassroots Motorsports](https://entertainment.slashdot.org/story/25/04/22/1844233/man-buys-racetrack-ends-up-launching-the-netflix-of-grassroots-motorsports?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - An entrepreneur transforms a racetrack into a successful streaming platform for motorsports enthusiasts.

* [Movies Made With AI Can Win Oscars, Academy Says](https://entertainment.slashdot.org/story/25/04/22/1438236/movies-made-with-ai-can-win-oscars-academy-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The Oscars embrace technological innovation, opening doors for AI-assisted films to compete for top honors.

## Research and Discoveries

* [Scientists Can Tell Healthy And Cancerous Cells Apart By How They Move](https://soylentnews.org/article.pl?sid=25/04/21/2224243&amp;from=rss) - Groundbreaking findings highlight differences in cell movement between healthy and cancerous conditions, offering diagnostic possibilities.

* [The complex origin story of domestic cats](https://phys.org/news/2025-04-complex-story-domestic-cats-tunisia.html) - A fascinating dive into the evolutionary journey of domestic cats tied to human settlement patterns.

* [Some Tropical Trees Act as Lightning Rods to Fend Off Rivals](https://soylentnews.org/article.pl?sid=25/04/19/181213&amp;from=rss) - Tropical ecosystems reveal unique survival strategies where some trees channel lightning strikes to dominate competitors.

## Noteworthy Initiatives

* [Tesla Accused of Speeding Up Odometers So Their Warranties Expire Faster](https://soylentnews.org/article.pl?sid=25/04/22/0023201&amp;from=rss) - Allegations surface against Tesla for accelerating odometers, potentially reducing warranty durations unfairly.

* [Ping, You’ve Got Whale: AI detection system alerts ships of whales in their path](https://www.biographic.com/ping-youve-got-whale/) - An AI system aids in protecting marine life by warning ships of whales in navigation paths.

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

* [2025-04-22, 21:20:00](https://slashdot.org/story/25/04/22/1854208/anthropic-warns-fully-ai-employees-are-a-year-away?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Warns Fully AI Employees Are a Year Away](https://slashdot.org/story/25/04/22/1854208/anthropic-warns-fully-ai-employees-are-a-year-away?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 21:16:41](https://lobste.rs/s/aassef/clickhouse_gets_lazier_faster) - [ClickHouse gets lazier (and faster): Introducing lazy materialization](https://clickhouse.com/blog/clickhouse-gets-lazier-and-faster-introducing-lazy-materialization)
* [2025-04-22, 21:00:48](https://news.ycombinator.com/item?id=43766255) - [Onyx (YC W24) Is Hiring for ML Engineer](https://www.ycombinator.com/companies/onyx/jobs/3Se5ptG-machine-learning-engineer)
* [2025-04-22, 20:57:00](https://soylentnews.org/article.pl?sid=25/04/22/0038216&amp;from=rss) - [CA/Browser Forum Votes to Reduce the Maximum Validity Term of SSL/TLS Certs to 47 Days by 2029](https://soylentnews.org/article.pl?sid=25/04/22/0038216&amp;from=rss)
* [2025-04-22, 20:54:52](https://news.ycombinator.com/item?id=43766200) - [Atuin Desktop: Runbooks That Run](https://blog.atuin.sh/atuin-desktop-runbooks-that-run/)
* [2025-04-22, 20:48:51](https://lobste.rs/s/iqiglx/where_flakes_fall_off_eval_cache_tale) - [Where Flakes Fall Off: an Eval Cache Tale](https://santi.net.br/blog/where-flakes-fall-off-an-eval-cache-tale/)
* [2025-04-22, 20:47:37](https://lobste.rs/s/q5vfvv/nine_reasons_use_osh) - [Nine Reasons to Use OSH](https://oils.pub/osh.html)
* [2025-04-22, 20:40:00](https://entertainment.slashdot.org/story/25/04/22/1844233/man-buys-racetrack-ends-up-launching-the-netflix-of-grassroots-motorsports?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Man Buys Racetrack, Ends Up Launching the Netflix of Grassroots Motorsports](https://entertainment.slashdot.org/story/25/04/22/1844233/man-buys-racetrack-ends-up-launching-the-netflix-of-grassroots-motorsports?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 20:34:06](https://lobste.rs/s/id6bpe/no_really_you_can_t_branch_datomic_from) - [No, really, you can’t branch Datomic from the past](https://blog.danieljanus.pl/2025/04/22/datomic-forking-the-past/)
* [2025-04-22, 20:23:38](https://news.ycombinator.com/item?id=43765908) - [Windows File Manager (WinFile) repository archived on March 1, 2025](https://github.com/microsoft/winfile)
* [2025-04-22, 20:16:04](https://news.ycombinator.com/item?id=43765832) - [Classic Computer Replicas](https://obsolescence.dev/index.html)
* [2025-04-22, 20:13:30](https://news.ycombinator.com/item?id=43765815) - [The Dauug House - Dauug|36 minicomputer documentation](https://dauug.cs.wright.edu/)
* [2025-04-22, 20:06:39](https://news.ycombinator.com/item?id=43765748) - [Show HN: Dosidicus – A digital pet with a simple neural network](https://github.com/ViciousSquid/Dosidicus)
* [2025-04-22, 20:00:00](https://slashdot.org/story/25/04/22/1746233/walmart-is-ditching-zip-codes-in-favor-of-honeycomb-style-maps-as-it-looks-to-speed-up-deliveries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Walmart is Ditching ZIP Codes in Favor of Honeycomb-Style Maps As It Looks To Speed Up Deliveries](https://slashdot.org/story/25/04/22/1746233/walmart-is-ditching-zip-codes-in-favor-of-honeycomb-style-maps-as-it-looks-to-speed-up-deliveries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 19:21:05](https://news.ycombinator.com/item?id=43765371) - [A study of lightning fatalities inside buildings while using smartphones [pdf] (2024)](https://electricalsafetyworkshop.org/wp-content/uploads/sites/255/ESW2024-19.pdf)
* [2025-04-22, 19:20:13](https://lobste.rs/s/p7rb36/a5_pentagonal_spatial_index) - [A5 - Pentagonal Spatial Index](https://a5geo.org/)
* [2025-04-22, 19:20:00](https://tech.slashdot.org/story/25/04/22/1711254/at-trial-instagram-co-founder-says-zuckerberg-withheld-resources-over-threat-fears?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [At Trial, Instagram Co-founder Says Zuckerberg Withheld Resources Over &apos;Threat&apos; Fears](https://tech.slashdot.org/story/25/04/22/1711254/at-trial-instagram-co-founder-says-zuckerberg-withheld-resources-over-threat-fears?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 19:02:04](https://news.ycombinator.com/item?id=43765207) - [Can a single AI model advance any field of science?](https://www.lanl.gov/media/publications/1663/1269-earl-lawrence-ai)
* [2025-04-22, 18:47:05](https://news.ycombinator.com/item?id=43765084) - [It Does Not Take 21 Days to Form a Habit](https://thelogicaloptimist.com/index.php/2015/10/25/the-21-day-myth-create-new-habit/)
* [2025-04-22, 18:40:00](https://slashdot.org/story/25/04/22/1542204/companies-ditch-fluorescent-lights-in-battle-for-office-return?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Companies Ditch Fluorescent Lights in Battle for Office Return](https://slashdot.org/story/25/04/22/1542204/companies-ditch-fluorescent-lights-in-battle-for-office-return?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 18:39:20](https://news.ycombinator.com/item?id=43765011) - [Sapphire: Rust based package manager for macOS (Homebrew replacement)](https://github.com/alexykn/sapphire)
* [2025-04-22, 18:28:20](https://news.ycombinator.com/item?id=43764915) - [Ping, You&apos;ve Got Whale: AI detection system alerts ships of whales in their path](https://www.biographic.com/ping-youve-got-whale/)
* [2025-04-22, 18:08:42](https://news.ycombinator.com/item?id=43764783) - [The Truth about Atlantis (2019)](https://talesoftimesforgotten.com/2019/03/26/the-truth-about-atlantis/)
* [2025-04-22, 18:07:32](https://news.ycombinator.com/item?id=43764771) - [The complex origin story of domestic cats](https://phys.org/news/2025-04-complex-story-domestic-cats-tunisia.html)
* [2025-04-22, 18:00:00](https://news.slashdot.org/story/25/04/22/1544249/ai-floods-amazon-with-strange-political-books-before-canadian-election?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Floods Amazon With Strange Political Books Before Canadian Election](https://news.slashdot.org/story/25/04/22/1544249/ai-floods-amazon-with-strange-political-books-before-canadian-election?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 17:52:47](https://lobste.rs/s/abrezi/parcom_cl_parser_combinators) - [parcom: CL Parser Combinators](https://github.com/fosskers/parcom)
* [2025-04-22, 17:29:31](https://news.ycombinator.com/item?id=43764439) - [π0.5: A VLA with open-world generalization](https://pi.website/blog/pi05)
* [2025-04-22, 17:20:00](https://tech.slashdot.org/story/25/04/22/172221/google-chrome-to-continue-to-use-third-party-cookies-in-major-reversal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Chrome To Continue To Use Third-Party Cookies in Major Reversal](https://tech.slashdot.org/story/25/04/22/172221/google-chrome-to-continue-to-use-third-party-cookies-in-major-reversal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 16:49:55](https://news.ycombinator.com/item?id=43764101) - [Are polynomial features the root of all evil? (2024)](https://alexshtf.github.io/2024/01/21/Bernstein.html)
* [2025-04-22, 16:46:19](https://news.ycombinator.com/item?id=43764076) - [I should have loved biology too](https://nehalslearnings.substack.com/p/i-should-have-loved-biology-too)
* [2025-04-22, 16:40:00](https://tech.slashdot.org/story/25/04/22/1521238/the-effect-of-deactivating-facebook-and-instagram-on-users-emotional-state?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Effect of Deactivating Facebook and Instagram on Users&apos; Emotional State](https://tech.slashdot.org/story/25/04/22/1521238/the-effect-of-deactivating-facebook-and-instagram-on-users-emotional-state?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 16:33:21](https://news.ycombinator.com/item?id=43763967) - [Show HN: Rowboat – Open-source IDE for multi-agent systems](https://github.com/rowboatlabs/rowboat)
* [2025-04-22, 16:18:41](https://news.ycombinator.com/item?id=43763814) - [Show HN: Morphik – Open-source RAG that understands PDF images, runs locally](https://github.com/morphik-org/morphik-core)
* [2025-04-22, 16:10:00](https://soylentnews.org/article.pl?sid=25/04/22/0023201&amp;from=rss) - [Tesla Accused of Speeding Up Odometers So Their Warranties Expire Faster](https://soylentnews.org/article.pl?sid=25/04/22/0023201&amp;from=rss)
* [2025-04-22, 16:03:32](https://news.ycombinator.com/item?id=43763688) - [ClickHouse gets lazier and faster: Introducing lazy materialization](https://clickhouse.com/blog/clickhouse-gets-lazier-and-faster-introducing-lazy-materialization)
* [2025-04-22, 16:00:00](https://apple.slashdot.org/story/25/04/22/159236/apple-removes-available-now-claim-from-intelligence-page-following-nad-review?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Removes &apos;Available Now&apos; Claim from Intelligence Page Following NAD Review](https://apple.slashdot.org/story/25/04/22/159236/apple-removes-available-now-claim-from-intelligence-page-following-nad-review?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 15:55:12](https://news.ycombinator.com/item?id=43763614) - [Algebraic Semantics for Machine Knitting](https://uwplse.org/2025/03/31/Algebraic-Knitting.html)
* [2025-04-22, 15:24:53](https://news.ycombinator.com/item?id=43763291) - [Surprises in Logic (2016)](https://math.ucr.edu/home/baez/surprises.html)
* [2025-04-22, 15:20:00](https://entertainment.slashdot.org/story/25/04/22/1438236/movies-made-with-ai-can-win-oscars-academy-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Movies Made With AI Can Win Oscars, Academy Says](https://entertainment.slashdot.org/story/25/04/22/1438236/movies-made-with-ai-can-win-oscars-academy-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 15:17:23](https://news.ycombinator.com/item?id=43763225) - [Supabase raises $200M Series D at $2B valuation](https://finance.yahoo.com/news/exclusive-supabase-raises-200-million-112154867.html)
* [2025-04-22, 15:17:21](https://news.ycombinator.com/item?id=43763223) - [David Tong Lectures on Theoretical Physics](https://www.damtp.cam.ac.uk/user/tong/books.html)
* [2025-04-22, 15:11:15](https://lobste.rs/s/84ysx5/start_with_clean_slate_integration) - [Start with a clean slate: Integration testing with PostgreSQL](https://blog.dogac.dev/pg-test-table-track/)
* [2025-04-22, 14:59:53](https://news.ycombinator.com/item?id=43763026) - [Launch HN: Infra.new (YC W23) – DevOps copilot with guardrails built in](https://news.ycombinator.com/item?id=43763026)
* [2025-04-22, 14:40:00](https://news.slashdot.org/story/25/04/22/1429255/us-scientists-flee-abroad-as-research-funding-cuts-deepen-nature?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Scientists Flee Abroad as Research Funding Cuts Deepen: Nature](https://news.slashdot.org/story/25/04/22/1429255/us-scientists-flee-abroad-as-research-funding-cuts-deepen-nature?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 14:00:00](https://tech.slashdot.org/story/25/04/22/0953209/google-pays-samsung-enormous-sums-for-gemini-ai-app-installs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Pays Samsung &apos;Enormous Sums&apos; for Gemini AI App Installs](https://tech.slashdot.org/story/25/04/22/0953209/google-pays-samsung-enormous-sums-for-gemini-ai-app-installs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 13:36:13](https://lobste.rs/s/aafqoa/detecting_if_expression_is_constant_c) - [Detecting if an expression is constant in C](https://nrk.neocities.org/articles/c-constexpr-macro)
* [2025-04-22, 13:35:47](https://news.ycombinator.com/item?id=43761998) - [Abusing DuckDB-WASM by making SQL draw 3D graphics (Sort Of)](https://www.hey.earth/posts/duckdb-doom)
* [2025-04-22, 13:06:30](https://news.ycombinator.com/item?id=43761633) - [The raccoons who made computer magazine ads great](https://technologizer.com/home/2025/04/22/pc-connection-ads-raccoons/)
* [2025-04-22, 13:00:00](https://it.slashdot.org/story/25/04/22/0214252/logitech-quietly-raises-prices-by-up-to-25?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Logitech Quietly Raises Prices By Up To 25%](https://it.slashdot.org/story/25/04/22/0214252/logitech-quietly-raises-prices-by-up-to-25?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 12:53:45](https://lobste.rs/s/yjypaz/event_hidden_architectures) - [Event-Hidden Architectures](https://skiplabs.io/blog/event-hidden-arch)
* [2025-04-22, 11:27:00](https://soylentnews.org/article.pl?sid=25/04/21/2227242&amp;from=rss) - [Oldest Serving US Astronaut Returns to Earth on 70th Birthday](https://soylentnews.org/article.pl?sid=25/04/21/2227242&amp;from=rss)
* [2025-04-22, 10:00:45](https://lobste.rs/s/wnuoeu/evertop_e_ink_ibm_xt_clone_with_solar_power) - [Evertop: E-ink IBM XT clone with solar power, ultra low power consumption, and ultra long battery life](https://github.com/ericjenott/Evertop)
* [2025-04-22, 10:00:00](https://tech.slashdot.org/story/25/04/22/0137218/google-says-doj-breakup-would-harm-us-in-global-race-with-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Says DOJ Breakup Would Harm US In &apos;Global Race With China&apos;](https://tech.slashdot.org/story/25/04/22/0137218/google-says-doj-breakup-would-harm-us-in-global-race-with-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 09:27:20](https://news.ycombinator.com/item?id=43760357) - [Detecting if an expression is constant in C](https://nrk.neocities.org/articles/c-constexpr-macro)
* [2025-04-22, 08:56:10](https://lobste.rs/s/tlbyzv/make_your_own_internet_presence_with) - [Make Your Own Internet Presence with NetBSD and a 1 euro VPS – Part 1: Your Blog](https://it-notes.dragas.net/2025/04/22/make-your-own-internet-presence-with-netbsd-and-a-1-euro-vps-part-1-your-blog/)
* [2025-04-22, 07:00:00](https://science.slashdot.org/story/25/04/22/026253/nasas-oldest-astronaut-celebrates-70th-birthday-with-return-to-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA&apos;s Oldest Astronaut Celebrates 70th Birthday With Return To Earth](https://science.slashdot.org/story/25/04/22/026253/nasas-oldest-astronaut-celebrates-70th-birthday-with-return-to-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-22, 06:44:00](https://soylentnews.org/article.pl?sid=25/04/21/2224243&amp;from=rss) - [Scientists Can Tell Healthy And Cancerous Cells Apart By How They Move](https://soylentnews.org/article.pl?sid=25/04/21/2224243&amp;from=rss)
* [2025-04-22, 06:31:29](https://lobste.rs/s/ydxus1/pipelining_might_be_my_favorite) - [Pipelining might be my favorite programming language feature](https://herecomesthemoon.net/2025/04/pipelining/)
* [2025-04-22, 06:28:00](https://soylentnews.org/meta/article.pl?sid=25/04/22/0619254&amp;from=rss) - [ \&quot;Only 2 submissions in the queue.\&quot;](https://soylentnews.org/meta/article.pl?sid=25/04/22/0619254&amp;from=rss)
* [2025-04-22, 04:27:02](https://lobste.rs/s/18ycoz/attacking_my_landlord_s_boiler) - [Attacking My Landlord&apos;s Boiler](https://blog.videah.net/attacking-my-landlords-boiler/)
* [2025-04-22, 04:01:59](https://lobste.rs/s/naazom/cheating_reaper_go) - [Cheating the Reaper in Go](https://mcyoung.xyz/2025/04/21/go-arenas/)
* [2025-04-22, 02:01:00](https://soylentnews.org/article.pl?sid=25/04/20/1820252&amp;from=rss) - [Jim Zemlin on Taking a &apos;Portfolio Approach&apos; to Linux Foundation Projects](https://soylentnews.org/article.pl?sid=25/04/20/1820252&amp;from=rss)
* [2025-04-22, 01:19:50](https://lobste.rs/s/klqcce/decentralizing_schemes) - [Decentralizing Schemes](https://www.tbray.org/ongoing/When/202x/2025/04/16/Decentralized-Schemes)
* [2025-04-21, 23:06:49](https://lobste.rs/s/gt4wye/record_tuple_ecmascript_proposal_has) - [The Record/Tuple ECMAScript Proposal has been withdrawn](https://github.com/tc39/proposal-record-tuple)
* [2025-04-21, 22:15:40](https://lobste.rs/s/z2jpjn/building_website_fit_for_1999) - [Building a Website Fit for 1999](https://www.wezm.net/v2/posts/2025/website-fit-for-1999/)
* [2025-04-21, 21:13:00](https://soylentnews.org/article.pl?sid=25/04/20/0513237&amp;from=rss) - [Deepseek Open Source model Promotes Fast Innovation and Extensive Application in China](https://soylentnews.org/article.pl?sid=25/04/20/0513237&amp;from=rss)
* [2025-04-21, 19:31:00](https://lobste.rs/s/eqqops/this_blog_is_hosted_on_nintendo_wii) - [This blog is hosted on a Nintendo Wii](https://blog.infected.systems/posts/2025-04-21-this-blog-is-hosted-on-a-nintendo-wii/)
* [2025-04-21, 18:33:02](https://lobste.rs/s/awsduo/new_form_verification_on_bluesky) - [A New Form of Verification on Bluesky](https://bsky.social/about/blog/04-21-2025-verification)
* [2025-04-21, 16:28:00](https://soylentnews.org/article.pl?sid=25/04/20/059216&amp;from=rss) - [The Universe Isn&apos;t Just Expanding—It May be Spinning](https://soylentnews.org/article.pl?sid=25/04/20/059216&amp;from=rss)
* [2025-04-21, 15:25:47](https://lobste.rs/s/qnvvne/pgdog_horizontal_scaling_for_postgresql) - [pgdog: Horizontal scaling for PostgreSQL with automatic sharding](https://github.com/pgdogdev/pgdog)
* [2025-04-21, 12:52:27](https://lobste.rs/s/3s9y3i/nerdlog_fast_multi_host_tui_log_viewer) - [Nerdlog: Fast, multi-host TUI log viewer with timeline histogram](https://dmitryfrank.com/projects/nerdlog/article)
* [2025-04-21, 11:41:00](https://soylentnews.org/article.pl?sid=25/04/20/051250&amp;from=rss) - [Google Introduces Firebase Studio, an End-to-End Platform That Builds Custom Apps in-Browser](https://soylentnews.org/article.pl?sid=25/04/20/051250&amp;from=rss)
* [2025-04-21, 11:18:31](https://lobste.rs/s/vioyel/projects_for_old_os_x) - [Projects For Old OS X](https://jonathanalland.com/old-osx-projects.html)
* [2025-04-21, 10:03:03](https://lobste.rs/s/66gzvi/reverse_engineering_obfuscated_tiktok) - [Reverse engineering the obfuscated TikTok VM](https://github.com/LukasOgunfeitimi/TikTok-ReverseEngineering)
* [2025-04-21, 09:52:00](https://soylentnews.org/breakingnews/article.pl?sid=25/04/21/0944225&amp;from=rss) - [Pope Francis Has Died on Easter Monday Aged 88](https://soylentnews.org/breakingnews/article.pl?sid=25/04/21/0944225&amp;from=rss)
* [2025-04-21, 06:53:00](https://soylentnews.org/article.pl?sid=25/04/20/0455204&amp;from=rss) - [Intel Agrees to Sell Controlling Stake in Altera Chip Business](https://soylentnews.org/article.pl?sid=25/04/20/0455204&amp;from=rss)
* [2025-04-21, 02:16:15](https://lobste.rs/s/p5g7rn/python_s_new_t_strings) - [Python&apos;s new t-strings](https://davepeck.org/2025/04/11/pythons-new-t-strings/)
* [2025-04-21, 02:08:00](https://soylentnews.org/article.pl?sid=25/04/20/0452238&amp;from=rss) - [Google Has Illegal Advertising Monopoly, Judge Rules](https://soylentnews.org/article.pl?sid=25/04/20/0452238&amp;from=rss)
* [2025-04-20, 21:22:00](https://soylentnews.org/article.pl?sid=25/04/19/183229&amp;from=rss) - [Astronomers Say They’ve Recorded the Strongest Sign Yet of Life Beyond Earth](https://soylentnews.org/article.pl?sid=25/04/19/183229&amp;from=rss)
* [2025-04-20, 20:47:42](https://lobste.rs/s/7od3uk/how_i_use_kate_editor) - [How I use Kate Editor](https://akselmo.dev/posts/how-i-use-kate-editor/)
* [2025-04-20, 16:39:00](https://soylentnews.org/article.pl?sid=25/04/19/181213&amp;from=rss) - [Some Tropical Trees Act as Lightning Rods to Fend Off Rivals](https://soylentnews.org/article.pl?sid=25/04/19/181213&amp;from=rss)
* [2025-04-20, 11:55:00](https://soylentnews.org/politics/article.pl?sid=25/04/19/1231231&amp;from=rss) - [Spyware Maker NSO Group is Paving a Path Back Into Trump’s America](https://soylentnews.org/politics/article.pl?sid=25/04/19/1231231&amp;from=rss)
* [2025-04-20, 07:13:00](https://soylentnews.org/article.pl?sid=25/04/19/1214259&amp;from=rss) - [Here&apos;s How a Satellite Ended Up as a Ghostly Apparition on Google Earth](https://soylentnews.org/article.pl?sid=25/04/19/1214259&amp;from=rss)
* [2025-04-20, 02:28:00](https://soylentnews.org/article.pl?sid=25/04/19/1211220&amp;from=rss) - [Everyone in AI is Talking About Manus. We Put It to the Test.](https://soylentnews.org/article.pl?sid=25/04/19/1211220&amp;from=rss)
* [2025-04-19, 21:47:00](https://soylentnews.org/article.pl?sid=25/04/19/1159218&amp;from=rss) - [Medical Cannabis Shows Potential to Fight Cancer, Largest-Ever Study Finds](https://soylentnews.org/article.pl?sid=25/04/19/1159218&amp;from=rss)
* [2025-04-19, 17:02:00](https://soylentnews.org/article.pl?sid=25/04/18/043228&amp;from=rss) - [How a 1980s Toy Robot Arm Inspired Modern Robotics](https://soylentnews.org/article.pl?sid=25/04/18/043228&amp;from=rss)
* [2025-04-19, 12:19:00](https://soylentnews.org/article.pl?sid=25/04/18/040226&amp;from=rss) - [Inside arXiv—the Most Transformative Platform in All of Science](https://soylentnews.org/article.pl?sid=25/04/18/040226&amp;from=rss)
* [2025-04-19, 09:57:10](https://news.ycombinator.com/item?id=43735378) - [Making a smart bike dumb so it works again](https://francisco.io/blog/making-a-smart-bike-dumb-work-again/)
* [2025-04-19, 08:37:00](https://soylentnews.org/article.pl?sid=25/04/18/0334256&amp;from=rss) - [Vibe Coding _ !@#$% Kids! ](https://soylentnews.org/article.pl?sid=25/04/18/0334256&amp;from=rss)
* [2025-04-19, 04:53:00](https://soylentnews.org/article.pl?sid=25/04/18/0255244&amp;from=rss) - [UK Founders Grow Frustrated Over Dearth of Funding: &apos;the Problem is Getting Worse&apos;](https://soylentnews.org/article.pl?sid=25/04/18/0255244&amp;from=rss)
* [2025-04-19, 00:05:00](https://soylentnews.org/article.pl?sid=25/04/17/1356201&amp;from=rss) - [Dirty Tricks 6502 Programmers Use](https://soylentnews.org/article.pl?sid=25/04/17/1356201&amp;from=rss)
* [2025-04-18, 23:22:46](https://news.ycombinator.com/item?id=43732767) - [Native American names extend earthquake history of northeastern North America](https://phys.org/news/2025-04-native-american-earthquake-history-northeastern.html)
* [2025-04-18, 22:31:40](https://news.ycombinator.com/item?id=43732416) - [More details for London&apos;s new Roman Basilica museum revealed](https://www.ianvisits.co.uk/articles/more-details-for-londons-new-roman-basilica-museum-revealed-80470/)
* [2025-04-18, 19:20:00](https://soylentnews.org/article.pl?sid=25/04/17/1348247&amp;from=rss) - [States are Banning Forever Chemicals. Industry is Fighting Back](https://soylentnews.org/article.pl?sid=25/04/17/1348247&amp;from=rss)
* [2025-04-18, 14:34:00](https://soylentnews.org/article.pl?sid=25/04/17/1336207&amp;from=rss) - [The Friendship Recession: The Lost Art of Connecting](https://soylentnews.org/article.pl?sid=25/04/17/1336207&amp;from=rss)
* [2025-04-18, 09:52:00](https://soylentnews.org/article.pl?sid=25/04/16/1857229&amp;from=rss) - [‘End of an Era’: The Last RadioShack in Maryland is Closing its Doors](https://soylentnews.org/article.pl?sid=25/04/16/1857229&amp;from=rss)
* [2025-04-18, 05:07:00](https://soylentnews.org/article.pl?sid=25/04/16/1849251&amp;from=rss) - [Oxygen Discovered in Most Distant Known Galaxy](https://soylentnews.org/article.pl?sid=25/04/16/1849251&amp;from=rss)
* [2025-04-18, 00:21:00](https://soylentnews.org/article.pl?sid=25/04/16/1843228&amp;from=rss) - [Phase Two of Military AI Has Arrived](https://soylentnews.org/article.pl?sid=25/04/16/1843228&amp;from=rss)
