# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Adafruit Successfully Automates Arduino Development Using 'Claude Code' LLM](https://hardware.slashdot.org/story/25/03/10/0054257/adafruit-successfully-automates-arduino-development-using-claude-code-llm?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Adafruit's integration of Claude Code, a language model, marks significant progress in automating Arduino development.

* [Undocumented "backdoor" found in Bluetooth chip used by a billion devices](https://www.bleepingcomputer.com/news/security/undocumented-backdoor-found-in-bluetooth-chip-used-by-a-billion-devices/) - A critical vulnerability in widely used Bluetooth chips is raising concerns about device security.

* [Goravel: A Go framework inspired by Laravel](https://www.goravel.dev) - This new Go framework brings Laravel-inspired architecture to Go developers, blending simplicity and performance.

* [Sorted integers compression with Elias-Fano encoding](https://www.antoniomallia.it/sorted-integers-compression-with-elias-fano-encoding.html) - A technical deep dive into efficient integer compression using Elias-Fano encoding.

* [Asteroid Mining Startup Loses its Spacecraft Somewhere Beyond the Moon](https://soylentnews.org/article.pl?sid=25/03/08/0744250&from=rss) - A setback for a bold attempt at commercial asteroid mining as a spacecraft goes missing.

## Science Discoveries

* [Billions of Years Ago, Mars Featured Beaches Fit for a Vacation, Astronomers Say](https://soylentnews.org/article.pl?sid=25/03/09/0316250&from=rss) - New geological evidence suggests Mars once had beach-like environments, evoking visions of early planetary ecosystems.

* [That Galaxy Next Door? It's Home to a Monster Black Hole](https://science.slashdot.org/story/25/03/09/2316231/that-galaxy-next-door-its-home-to-a-monster-black-hole?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Researchers reveal stunning details of a nearby galaxy harboring a massive black hole.

* [Scientists discover an RNA that repairs DNA damage](https://scitechdaily.com/scientists-just-discovered-an-rna-that-repairs-dna-damage-and-its-a-game-changer/) - A revolutionary RNA that repairs damaged DNA could lead to groundbreaking medical applications.

* [Stem Cell Therapy Trial Reverses 'Irreversible' Damage to Cornea](https://science.slashdot.org/story/25/03/09/1612213/stem-cell-therapy-trial-reverses-irreversible-damage-to-cornea?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Promising results from a stem cell therapy trial highlight potential new treatments for vision restoration.

* [First Petawatt Electron Beam Arrives, Ready to Rip Apart Matter and Space](https://soylentnews.org/article.pl?sid=25/03/05/0314241&from=rss) - The creation of a petawatt electron beam marks a new milestone in high-energy physics.

## Civic and Environmental Updates

* [US added to international watchlist for rapid decline in civic freedoms](https://www.theguardian.com/us-news/2025/mar/09/watchlist-decline-civic-freedoms-civicus) - A stark warning as CIVICUS raises concerns about declining democracy in the US.

* [Apple Refuses to Break Encryption, Seeks Reversal of UK Demand for Backdoor](https://soylentnews.org/article.pl?sid=25/03/07/0427238&from=rss) - Apple challenges government-mandated backdoors, citing risks to user security.

* [‘Slime’ Keeps the Brain Safe ― and Could Guard Against Ageing](https://soylentnews.org/article.pl?sid=25/03/08/082224&from=rss) - A natural brain-protecting slime could also provide insights into aging prevention.

* [El Salvador's crypto experiment ends in failure](https://www.economist.com/finance-and-economics/2025/03/02/el-salvadors-wild-crypto-experiment-ends-in-failure) - The ambitious national cryptocurrency initiative in El Salvador concludes with stark lessons.

## Arts and Culture

* [Vilhelm Hammershøi: the eminence in greys](https://www.richardmorris.org/blog-1-1/vilhelm-hammershi-the-eminence-in-greys) - A deep exploration of the hauntingly beautiful works of Danish painter Vilhelm Hammershøi.

* [Professor Ends Bulwer-Lytton Bad Writing Contest After 43 Years](https://idle.slashdot.org/story/25/03/09/1740239/professor-ends-bulwer-lytton-bad-writing-contest-after-43-years?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A legendary contest showcasing comically bad writing comes to a close.

* [Ignoring Protests, Christie's Holds AI Art Auction, Makes Big Money](https://slashdot.org/story/25/03/09/0132251/ignoring-protests-christies-holds-ai-art-auction-makes-big-money?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Christie's controversial AI art auction highlights tensions at the intersection of art and technology.

## AI and Computing Advancements

* [Hugging Face's Chief Science Officer Worries AI is Becoming 'Yes-Men on Servers'](https://soylentnews.org/article.pl?sid=25/03/08/072239&from=rss) - Concerns are growing over the increasing conformity-conditioned AI interactions.

* [Automated architecture diagrams](https://medium.com/thefork/automated-architecture-diagrams-53f538f615b7) - An innovative solution to generate architecture diagrams automatically.

* [Performance of the Python 3.14 tail-call interpreter](https://blog.nelhage.com/post/cpython-tail-call/) - Insights and performance benchmarks for Python's latest tail-call optimization.

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

* [2025-03-10, 00:59:00](https://hardware.slashdot.org/story/25/03/10/0054257/adafruit-successfully-automates-arduino-development-using-claude-code-llm?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Adafruit Successfully Automates Arduino Development Using 'Claude Code' LLM](https://hardware.slashdot.org/story/25/03/10/0054257/adafruit-successfully-automates-arduino-development-using-claude-code-llm?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-10, 00:45:30](https://news.ycombinator.com/item?id=43315629) - [US added to international watchlist for rapid decline in civic freedoms](https://www.theguardian.com/us-news/2025/mar/09/watchlist-decline-civic-freedoms-civicus)
* [2025-03-10, 00:16:54](https://news.ycombinator.com/item?id=43315406) - [Electronics-free old diesel trucks of the national radio astronomy observatory](https://raoulpop.com/2012/04/15/chasing-rfi-waves-part-seven/)
* [2025-03-10, 00:02:26](https://lobste.rs/s/sereus/investigating_mitigating_argument) - [Investigating and mitigating an argument-dependent lookup bud in WinRT](https://devblogs.microsoft.com/oldnewthing/20250214-00/?p=110868)
* [2025-03-10, 00:01:00](https://soylentnews.org/article.pl?sid=25/03/09/0316250&from=rss) - [Billions of Years Ago, Mars Featured Beaches Fit for a Vacation, Astronomers Say](https://soylentnews.org/article.pl?sid=25/03/09/0316250&from=rss)
* [2025-03-09, 23:19:00](https://science.slashdot.org/story/25/03/09/2316231/that-galaxy-next-door-its-home-to-a-monster-black-hole?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [That Galaxy Next Door?  It's Home to a Monster Black Hole](https://science.slashdot.org/story/25/03/09/2316231/that-galaxy-next-door-its-home-to-a-monster-black-hole?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-09, 23:00:25](https://news.ycombinator.com/item?id=43314851) - [Vilhelm Hammershøi: the eminence in greys](https://www.richardmorris.org/blog-1-1/vilhelm-hammershi-the-eminence-in-greys)
* [2025-03-09, 22:53:19](https://news.ycombinator.com/item?id=43314781) - [Tesla's team to suppress driving range complaints (2023)](https://www.reuters.com/investigates/special-report/tesla-batteries-range/)
* [2025-03-09, 22:49:59](https://lobste.rs/s/9paxz2/performance_python_3_14_tail_call) - [Performance of the Python 3.14 tail-call interpreter](https://blog.nelhage.com/post/cpython-tail-call/)
* [2025-03-09, 22:38:57](https://news.ycombinator.com/item?id=43314657) - [Apple Exclaves](https://randomaugustine.medium.com/on-apple-exclaves-d683a2c37194)
* [2025-03-09, 22:35:50](https://lobste.rs/s/qhjdtx/on_apple_exclaves) - [On Apple Exclaves](https://randomaugustine.medium.com/on-apple-exclaves-d683a2c37194)
* [2025-03-09, 22:18:08](https://lobste.rs/s/8fx2je/idiomatic_go) - [Idiomatic Go](https://dmitri.shuralyov.com/idiomatic-go)
* [2025-03-09, 21:58:27](https://news.ycombinator.com/item?id=43314334) - [El Salvador's crypto experiment ends in failure](https://www.economist.com/finance-and-economics/2025/03/02/el-salvadors-wild-crypto-experiment-ends-in-failure)
* [2025-03-09, 21:48:00](https://tech.slashdot.org/story/25/03/09/2144209/can-ants-teach-us-how-to-program-self-driving-cars?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Can Ants Teach Us How to Program Self-Driving Cars?](https://tech.slashdot.org/story/25/03/09/2144209/can-ants-teach-us-how-to-program-self-driving-cars?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-09, 21:40:03](https://news.ycombinator.com/item?id=43314171) - [Apple rearranged its XNU kernel with exclaves](https://www.theregister.com/2025/03/08/kernel_sanders_apple_rearranges_xnu/)
* [2025-03-09, 21:02:47](https://news.ycombinator.com/item?id=43313781) - [Scientists discover an RNA that repairs DNA damage](https://scitechdaily.com/scientists-just-discovered-an-rna-that-repairs-dna-damage-and-its-a-game-changer/)
* [2025-03-09, 20:55:48](https://news.ycombinator.com/item?id=43313706) - [Wine Releases Framework Mono 6.14 in Taking over the Mono Project](https://www.phoronix.com/news/Wine-Framework-Mono-6.14)
* [2025-03-09, 20:55:34](https://lobste.rs/s/ribonb/text_sizing_protocol) - [The text sizing protocol](https://sw.kovidgoyal.net/kitty/text-sizing-protocol/)
* [2025-03-09, 20:31:31](https://lobste.rs/s/ez8vfj/sorted_integers_compression_with_elias) - [Sorted integers compression with Elias-Fano encoding](https://www.antoniomallia.it/sorted-integers-compression-with-elias-fano-encoding.html)
* [2025-03-09, 19:34:00](https://news.slashdot.org/story/25/03/09/1929235/i-used-to-teach-students-now-i-catch-chatgpt-cheats?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['I Used to Teach Students. Now I Catch ChatGPT Cheats'](https://news.slashdot.org/story/25/03/09/1929235/i-used-to-teach-students-now-i-catch-chatgpt-cheats?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-09, 19:18:41](https://news.ycombinator.com/item?id=43312652) - [With AI you need to think bigger](https://rodyne.com/?p=1828)
* [2025-03-09, 19:18:00](https://soylentnews.org/article.pl?sid=25/03/08/082224&from=rss) - [‘Slime’ Keeps the Brain Safe ― and Could Guard Against Ageing](https://soylentnews.org/article.pl?sid=25/03/08/082224&from=rss)
* [2025-03-09, 19:10:58](https://lobste.rs/s/dz8mdk/automated_architecture_diagrams) - [Automated architecture diagrams](https://medium.com/thefork/automated-architecture-diagrams-53f538f615b7)
* [2025-03-09, 18:34:00](https://idle.slashdot.org/story/25/03/09/1740239/professor-ends-bulwer-lytton-bad-writing-contest-after-43-years?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Professor Ends Bulwer-Lytton Bad Writing Contest After 43 Years](https://idle.slashdot.org/story/25/03/09/1740239/professor-ends-bulwer-lytton-bad-writing-contest-after-43-years?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-09, 18:10:03](https://lobste.rs/s/e6u2ef/post_processing_shaders_as_creative) - [Post-Processing Shaders as a Creative Medium](https://blog.maximeheckel.com/posts/post-processing-as-a-creative-medium/)
* [2025-03-09, 17:56:35](https://lobste.rs/s/fbndgj/functional_vs_data_driven_development) - [Functional vs Data-Driven development: a Case-Study in Clojure & OCaml](https://kirancodes.me/posts/log-data-oriented-programming.html)
* [2025-03-09, 17:49:17](https://news.ycombinator.com/item?id=43311696) - [An investigation into egg prices](https://www.thebignewsletter.com/p/hatching-a-conspiracy-a-big-investigation)
* [2025-03-09, 17:45:27](https://lobste.rs/s/m6bcmf/i_built_my_first_mechanical_keyboard) - [I built my first mechanical keyboard](https://marcin.juszkiewicz.com.pl/2025/03/09/i-built-my-first-mechanical-keyboard/)
* [2025-03-09, 17:43:15](https://news.ycombinator.com/item?id=43311610) - [Nickel superconductor works above -233°C threshold at normal pressure](https://phys.org/news/2025-02-nickel-superconductor-233c-threshold-pressure.html)
* [2025-03-09, 17:40:38](https://news.ycombinator.com/item?id=43311573) - [Ecosia is teaming up with Qwant to build a European search index](https://blog.ecosia.org/eusp/)
* [2025-03-09, 17:34:00](https://science.slashdot.org/story/25/03/09/1612213/stem-cell-therapy-trial-reverses-irreversible-damage-to-cornea?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Stem Cell Therapy Trial Reverses 'Irreversible' Damage to Cornea](https://science.slashdot.org/story/25/03/09/1612213/stem-cell-therapy-trial-reverses-irreversible-damage-to-cornea?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-09, 17:00:35](https://news.ycombinator.com/item?id=43311044) - [Infisical (YC W23) Is Hiring for Full Stack Engineers in San Francisco](https://www.ycombinator.com/companies/infisical/jobs/QqCs5fv-full-stack-engineer-sf)
* [2025-03-09, 16:51:59](https://news.ycombinator.com/item?id=43310963) - [Show HN: Evolving Agents Framework](https://github.com/matiasmolinas/evolving-agents)
* [2025-03-09, 16:34:00](https://science.slashdot.org/story/25/03/08/2133224/mice-give-first-aid?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Mice Give First Aid](https://science.slashdot.org/story/25/03/08/2133224/mice-give-first-aid?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-09, 16:23:27](https://lobste.rs/s/caldlu/ai_uncertain_future_work) - [AI and the Uncertain Future of Work](https://matthewbilyeu.com/blog/2025-03-08/ai)
* [2025-03-09, 15:48:52](https://lobste.rs/s/2cacfc/open_source_hosting_service_for_pijul) - [Open source hosting service for Pijul](https://nest.pijul.com/pmeunier/nest)
* [2025-03-09, 15:34:00](https://slashdot.org/story/25/03/09/070211/will-an-ai-makeover-help-mcdonalds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Will an 'AI Makeover' Help McDonald's?](https://slashdot.org/story/25/03/09/070211/will-an-ai-makeover-help-mcdonalds?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-09, 15:20:53](https://lobste.rs/s/5x51jl/dithering_colour) - [Dithering in Colour](https://obrhubr.org/dithering-in-colour)
* [2025-03-09, 14:37:00](https://soylentnews.org/article.pl?sid=25/03/08/0753249&from=rss) - [Meet Rayhunter: A New Open Source Tool from EFF to Detect Cellular Spying](https://soylentnews.org/article.pl?sid=25/03/08/0753249&from=rss)
* [2025-03-09, 14:34:00](https://science.slashdot.org/story/25/03/09/0513235/how-your-gut-influences-your-brain?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [How Your Gut Influences Your Brain](https://science.slashdot.org/story/25/03/09/0513235/how-your-gut-influences-your-brain?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-09, 13:40:35](https://news.ycombinator.com/item?id=43308994) - [It is as if you were on your phone](https://pippinbarr.com/it-is-as-if-you-were-on-your-phone/info/)
* [2025-03-09, 12:15:58](https://lobste.rs/s/yffppm/why_alleged_esp32_backdoor_couldn_t) - [Why the alleged ESP32 backdoor couldn’t happen on CHERIoT](https://cheriot.org/auditing/backdoor/2025/03/09/no-esp32-style-backdoor.html)
* [2025-03-09, 11:34:00](https://tech.slashdot.org/story/25/03/09/0232250/americas-justice-department-still-wants-google-to-sell-chrome?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [America's Justice Department Still Wants Google to Sell Chrome](https://tech.slashdot.org/story/25/03/09/0232250/americas-justice-department-still-wants-google-to-sell-chrome?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-09, 11:05:33](https://lobste.rs/s/lvsiz8/gleam_v1_9_0_released) - [Gleam v1.9.0 released](https://gleam.run/news/hello-echo-hello-git/)
* [2025-03-09, 10:20:50](https://news.ycombinator.com/item?id=43307809) - [I've been using Claude Code for a couple of days](https://twitter.com/Steve_Yegge/status/1898674257808515242)
* [2025-03-09, 09:53:00](https://soylentnews.org/article.pl?sid=25/03/08/0744250&from=rss) - [Asteroid Mining Startup Loses its Spacecraft Somewhere Beyond the Moon](https://soylentnews.org/article.pl?sid=25/03/08/0744250&from=rss)
* [2025-03-09, 09:07:12](https://lobste.rs/s/tohpnt/lfortran_can_now_compile_prima) - [LFortran can now compile PRIMA](https://lfortran.org/blog/2025/03/lfortran-compiles-prima/)
* [2025-03-09, 09:05:34](https://lobste.rs/s/nm2feq/spacetimedb) - [SpacetimeDB](https://spacetimedb.com/)
* [2025-03-09, 08:34:00](https://news.slashdot.org/story/25/03/09/0359219/is-america-closer-to-ending-daylight-saving-time?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Is America Closer to Ending Daylight Saving Time?](https://news.slashdot.org/story/25/03/09/0359219/is-america-closer-to-ending-daylight-saving-time?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-09, 06:35:06](https://news.ycombinator.com/item?id=43306797) - [Goravel: A Go framework inspired by Laravel](https://www.goravel.dev)
* [2025-03-09, 06:29:34](https://lobste.rs/s/dslris/what_s_cooking_on_sourcehut_q1_2025) - [What's cooking on SourceHut? Q1 2025](https://sourcehut.org/blog/2025-03-07-whats-cooking-q1-25/)
* [2025-03-09, 05:44:24](https://news.ycombinator.com/item?id=43306599) - [Magnesium Self-Experiments](https://gwern.net/nootropic/magnesium)
* [2025-03-09, 05:34:00](https://slashdot.org/story/25/03/09/0132251/ignoring-protests-christies-holds-ai-art-auction-makes-big-money?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Ignoring Protests, Christie's Holds AI Art Auction, Makes Big Money](https://slashdot.org/story/25/03/09/0132251/ignoring-protests-christies-holds-ai-art-auction-makes-big-money?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-09, 05:14:26](https://lobste.rs/s/csr4mw/building_websites_with_lots_little_html) - [Building Websites With Lots of Little HTML Pages](https://blog.jim-nielsen.com/2025/lots-of-little-html-pages/)
* [2025-03-09, 05:07:00](https://soylentnews.org/article.pl?sid=25/03/08/0739224&from=rss) - [Amid a Growing Measles Outbreak, Doctors Worry RFK is Sending the Wrong Message](https://soylentnews.org/article.pl?sid=25/03/08/0739224&from=rss)
* [2025-03-09, 03:27:53](https://lobste.rs/s/zv7gj9/openssl_does_quic_api) - [OpenSSL does a QUIC API](https://daniel.haxx.se/blog/2025/02/16/openssl-does-a-quic-api/)
* [2025-03-09, 03:06:41](https://lobste.rs/s/d96z4t/zinc_systems_programming_language) - [The zinc systems programming language](https://sr.ht/~oconnor0/zinc/)
* [2025-03-09, 01:59:00](https://tech.slashdot.org/story/25/03/08/2252242/reddit-and-digg-cofounders-plan-relaunch-of-human-centered-digg-with-ai-innovations?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Reddit and Digg Cofounders Plan Relaunch of 'Human-Centered' Digg With AI Innovations](https://tech.slashdot.org/story/25/03/08/2252242/reddit-and-digg-cofounders-plan-relaunch-of-human-centered-digg-with-ai-innovations?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-09, 00:39:00](https://news.slashdot.org/story/25/03/08/0613217/free-software-foundation-rides-to-defend-agplv3-against-neo4j-license-add-ons?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Free Software Foundation Rides To Defend AGPLv3 Against Neo4j License Add-ons](https://news.slashdot.org/story/25/03/08/0613217/free-software-foundation-rides-to-defend-agplv3-against-neo4j-license-add-ons?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-09, 00:23:00](https://soylentnews.org/politics/article.pl?sid=25/03/08/0721219&from=rss) - [Some DOGE Staffers Are Drawing Six-Figure Government Salaries](https://soylentnews.org/politics/article.pl?sid=25/03/08/0721219&from=rss)
* [2025-03-08, 23:36:07](https://lobste.rs/s/p0wauf/cutting_edge_web_scraping_techniques) - [Cutting-edge web scraping techniques](https://github.com/simonw/nicar-2025-scraping/blob/main/README.md)
* [2025-03-08, 22:34:00](https://linux.slashdot.org/story/25/03/08/205225/axiom-space-and-red-hat-will-bring-edge-computing-to-the-international-space-station?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Axiom Space and Red Hat Will Bring Edge Computing to the International Space Station](https://linux.slashdot.org/story/25/03/08/205225/axiom-space-and-red-hat-will-bring-edge-computing-to-the-international-space-station?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-08, 22:30:34](https://lobste.rs/s/4cktbm/socially_self_hosting_source_code_with) - [Socially self-hosting source code with Tangled on Bluesky](https://anil.recoil.org/notes/disentangling-git-with-bluesky)
* [2025-03-08, 19:41:00](https://soylentnews.org/article.pl?sid=25/03/08/0713256&from=rss) - [Alphabet's Taara Chip Uses Light Beams To Provide High-Speed Internet](https://soylentnews.org/article.pl?sid=25/03/08/0713256&from=rss)
* [2025-03-08, 18:44:19](https://news.ycombinator.com/item?id=43302394) - [Improving on std:count_if()'s auto-vectorization](https://nicula.xyz/2025/03/08/improving-stdcountif-vectorization.html)
* [2025-03-08, 18:13:35](https://lobste.rs/s/0twsmb/undocumented_backdoor_found_bluetooth) - [Undocumented \"backdoor\" found in Bluetooth chip used by a billion devices](https://www.bleepingcomputer.com/news/security/undocumented-backdoor-found-in-bluetooth-chip-used-by-a-billion-devices/)
* [2025-03-08, 15:37:00](https://soylentnews.org/article.pl?sid=25/03/08/1538213&from=rss) - [Temporary Problem with Stripe](https://soylentnews.org/article.pl?sid=25/03/08/1538213&from=rss)
* [2025-03-08, 14:52:00](https://soylentnews.org/article.pl?sid=25/03/08/072239&from=rss) - [Hugging Face's Chief Science Officer Worries AI is Becoming 'Yes-Men on Servers'](https://soylentnews.org/article.pl?sid=25/03/08/072239&from=rss)
* [2025-03-08, 11:57:42](https://lobste.rs/s/v8izex/list_brave_browser_controversies) - [List of Brave browser controversies](https://old.reddit.com/r/browsers/comments/1j1pq7b/list_of_brave_browser_controversies)
* [2025-03-08, 10:07:00](https://soylentnews.org/article.pl?sid=25/03/07/0436239&from=rss) - [Eerily Realistic AI Voice Demo Sparks Amazement and Discomfort Online](https://soylentnews.org/article.pl?sid=25/03/07/0436239&from=rss)
* [2025-03-08, 05:22:00](https://soylentnews.org/article.pl?sid=25/03/07/0427238&from=rss) - [Apple Refuses to Break Encryption, Seeks Reversal of UK Demand for Backdoor](https://soylentnews.org/article.pl?sid=25/03/07/0427238&from=rss)
* [2025-03-08, 00:37:00](https://soylentnews.org/article.pl?sid=25/03/07/0422219&from=rss) - [The International Space Station Lacks Microbial Diversity. Is It Too Clean?](https://soylentnews.org/article.pl?sid=25/03/07/0422219&from=rss)
* [2025-03-07, 19:55:00](https://soylentnews.org/article.pl?sid=25/03/07/047205&from=rss) - [Massive Supereruptions Might Not Trigger the Apocalypse, Just Decades of Chaos](https://soylentnews.org/article.pl?sid=25/03/07/047205&from=rss)
* [2025-03-07, 19:06:30](https://news.ycombinator.com/item?id=43293192) - [Walt Disney's MultiPlane Camera (Filmed Feb. 13, 1957) [video]](https://www.youtube.com/watch?v=3YIR39KeJMk)
* [2025-03-07, 15:10:00](https://soylentnews.org/article.pl?sid=25/03/07/041244&from=rss) - [Your Kitchen Utensils May be Poisoning You](https://soylentnews.org/article.pl?sid=25/03/07/041244&from=rss)
* [2025-03-07, 13:30:08](https://news.ycombinator.com/item?id=43289990) - [Woman's DNA discovered in 20k year old deer-tooth pendant](https://www.cbc.ca/radio/quirks/pendant-ancient-dna-1.6832580)
* [2025-03-07, 12:55:02](https://news.ycombinator.com/item?id=43289774) - [Mysterious tunnels sketched by Leonardo may have been found](https://www.cnn.com/2025/03/01/science/leonardo-da-vinci-sforza-castle-tunnels/index.html)
* [2025-03-07, 12:16:16](https://news.ycombinator.com/item?id=43289550) - [Bring Back Shortwave](https://www.spectator.co.uk/article/bring-back-shortwave/)
* [2025-03-07, 11:16:57](https://news.ycombinator.com/item?id=43289247) - [Sublogic Flight Simulator](https://www.goto10retro.com/p/sublogic-flight-simulator)
* [2025-03-07, 10:26:00](https://soylentnews.org/article.pl?sid=25/03/05/1610259&from=rss) - [How We Added Interlaced Video to Raspberry Pi 5](https://soylentnews.org/article.pl?sid=25/03/05/1610259&from=rss)
* [2025-03-07, 05:42:00](https://soylentnews.org/article.pl?sid=25/03/05/162236&from=rss) - [BP Shuns Renewables in Return to Oil and Gas](https://soylentnews.org/article.pl?sid=25/03/05/162236&from=rss)
* [2025-03-07, 03:32:47](https://news.ycombinator.com/item?id=43287193) - [The Kernighan-Lin Search Algorithm](https://arxiv.org/abs/2502.00316)
* [2025-03-07, 00:53:00](https://soylentnews.org/politics/article.pl?sid=25/03/05/1555220&from=rss) - [15 Republican AGs Urge The Supreme Court To Make Affordable Broadband For Poor People Illegal](https://soylentnews.org/politics/article.pl?sid=25/03/05/1555220&from=rss)
* [2025-03-06, 20:10:00](https://soylentnews.org/article.pl?sid=25/03/05/1550252&from=rss) - [World's First \"Synthetic Biological Intelligence\" Runs on Living Human Cells](https://soylentnews.org/article.pl?sid=25/03/05/1550252&from=rss)
* [2025-03-06, 20:03:51](https://news.ycombinator.com/item?id=43284541) - [Investigating an argument-dependent lookup issue and working around it](https://devblogs.microsoft.com/oldnewthing/20250214-00/?p=110868)
* [2025-03-06, 15:25:00](https://soylentnews.org/article.pl?sid=25/03/05/1546231&from=rss) - [Google Cofounder Exhorts Employees to Work 60-Hour Weeks to Create AI Designed to Replace Them](https://soylentnews.org/article.pl?sid=25/03/05/1546231&from=rss)
* [2025-03-06, 15:23:42](https://news.ycombinator.com/item?id=43281275) - [Paper Review: Variational Lossy Auto-Encoders](https://theahura.substack.com/p/ilyas-30-papers-to-carmack-vlaes)
* [2025-03-06, 14:23:24](https://news.ycombinator.com/item?id=43280517) - [Exploring Polymorphism in C: Lessons from Linux and FFmpeg's Code Design (2019)](https://leandromoreira.com/2019/08/02/linux-ffmpeg-source-internals-a-good-software-design/)
* [2025-03-06, 10:42:00](https://soylentnews.org/article.pl?sid=25/03/05/0314241&from=rss) - [First Petawatt Electron Beam Arrives, Ready to Rip Apart Matter and Space](https://soylentnews.org/article.pl?sid=25/03/05/0314241&from=rss)
* [2025-03-06, 05:59:00](https://soylentnews.org/article.pl?sid=25/03/05/031211&from=rss) - ['Fire the Intel Board and Rehire Pat Gelsinger,' Argues Former Intel Ceo Craig Barrett](https://soylentnews.org/article.pl?sid=25/03/05/031211&from=rss)
* [2025-03-06, 01:13:00](https://soylentnews.org/article.pl?sid=25/03/05/0257200&from=rss) - [Some of Earth's Meteors Are Probably Coming All the Way From a Neighboring Star System](https://soylentnews.org/article.pl?sid=25/03/05/0257200&from=rss)
