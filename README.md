# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Wayland compositor implemented as a mod in Minecraft](https://modrinth.com/project/9yAfrPwH) ([comments](https://lobste.rs/s/yvkqco/wayland_compositor_implemented_as_mod)): A creative project integrates the graphical server protocol Wayland into Minecraft as a mod, showcasing the versatility of the game engine.

* [SPy: an interpreter and a compiler for a statically typed variant of Python](https://github.com/spylang/spy) ([comments](https://lobste.rs/s/z9lnpe/spy_interpreter_compiler_for_statically)): A new programming language, SPy, introduces a statically typed variant of Python with tools for interpretation and compilation.

* [mvm - a fast virtual machine for Go](https://mvm.sh/) ([comments](https://lobste.rs/s/fms0x0/mvm_fast_virtual_machine_for_go)): An introduction to mvm, a high-performance virtual machine designed to optimize the execution of Go applications.

## Scientific Discoveries and Phenomena

* [80386 Microcode Disassembled](https://www.reenigne.org/blog/80386-microcode-disassembled/) ([comments](https://news.ycombinator.com/item?id=48247004)): A deep dive into the disassembly and exploration of the 80386 microcode, offering insights into one of Intel’s historic chips.

* [What Do Gödel's Incompleteness Theorems Truly Mean?](https://soylentnews.org/article.pl?sid=26/05/22/0314250&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/05/22/0314250&amp;from=rss)): A thought-provoking discussion regarding the implications of Gödel's incompleteness theorems and their meaning in mathematics and beyond.

## AI and Data Technology

* [AI Data Centers Trigger Massive 'Irreversible' 76% Electricity Price Spike in Largest US Region](https://soylentnews.org/article.pl?sid=26/05/22/0247218&amp;from=rss) ([comments](https://news.ycombinator.com/item?id=48245862)): A detailed exploration of how AI data centers have led to a dramatic energy cost increase of 76% in a major region of the U.S.

* [This Cannes Film Cost $500,000 to Make. $400,000 Was AI Compute Costs.](https://entertainment.slashdot.org/story/26/05/22/1723236/this-cannes-film-cost-500000-to-make-400000-was-ai-compute-costs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=48239413)): A Cannes film project reveals how AI played a major role in its creation, accounting for 80% of the production costs for compute power.

## History and Reflections

* [I Miss Terry Pratchett](https://www.mahl.me/blog/the-spell-that-wouldnt-leave/) ([comments](https://news.ycombinator.com/item?id=48247127)): A reflective blog post honoring the legacy of the famed author Terry Pratchett and his enduring influence on readers.

## Space and Discovery

* [SpaceX's Upgraded Starship V3 Launches For First Time](https://science.slashdot.org/story/26/05/23/0026223/spacexs-upgraded-starship-v3-launches-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://entertainment.slashdot.org/story/26/05/23/0039205/pentagon-releases-second-batch-of-ufo-videos-first-hand-testimony?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)): A breakthrough for SpaceX with the launch of Starship V3, emphasizing its potential for future explorations.

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

* [2026-05-23, 14:07:31](https://lobste.rs/s/yvkqco/wayland_compositor_implemented_as_mod) - [Wayland compositor implemented as a mod in Minecraft](https://modrinth.com/project/9yAfrPwH)
* [2026-05-23, 12:52:23](https://lobste.rs/s/yq1t6f/baby_s_first_dds_signal_generator) - [Baby&apos;s First DDS Signal Generator](https://tomscii.sig7.se/2026/05/Babys-First-DDS-Signal-Generator)
* [2026-05-23, 12:35:28](https://news.ycombinator.com/item?id=48247127) - [I Miss Terry Pratchett](https://www.mahl.me/blog/the-spell-that-wouldnt-leave/)
* [2026-05-23, 12:35:00](https://soylentnews.org/article.pl?sid=26/05/22/0314250&amp;from=rss) - [What Do Gödel&apos;s Incompleteness Theorems Truly Mean?](https://soylentnews.org/article.pl?sid=26/05/22/0314250&amp;from=rss)
* [2026-05-23, 12:11:43](https://news.ycombinator.com/item?id=48247004) - [80386 Microcode Disassembled](https://www.reenigne.org/blog/80386-microcode-disassembled/)
* [2026-05-23, 11:57:36](https://lobste.rs/s/whdhza/highest_random_weight_elixir) - [Highest Random Weight in Elixir](https://jola.dev/posts/highest-random-weight-in-elixir)
* [2026-05-23, 11:50:22](https://news.ycombinator.com/item?id=48246889) - [Making Deep Learning Go Brrrr from First Principles](https://horace.io/brrr_intro.html)
* [2026-05-23, 11:18:23](https://news.ycombinator.com/item?id=48246735) - [DHS Quits Granting Green Cards–Almost](https://www.cato.org/blog/dhs-quits-granting-green-cards-almost-entirely)
* [2026-05-23, 11:11:03](https://lobste.rs/s/ip7rdd/hp_bought_hyperspace_once_offered_3) - [HP bought Hyperspace, &amp; once offered 3 different pre-boot or in-boot OSs, including Quickweb](https://gekk.info/articles/hp-quickweb.htm)
* [2026-05-23, 10:57:14](https://news.ycombinator.com/item?id=48246614) - [US tech firms share Dutch regulator officials&apos; names with Senate](https://www.dutchnews.nl/2026/05/us-tech-firms-share-dutch-regulator-officials-names-with-senate/)
* [2026-05-23, 10:39:09](https://lobste.rs/s/fms0x0/mvm_fast_virtual_machine_for_go) - [mvm - a fast virtual machine for Go](https://mvm.sh/)
* [2026-05-23, 09:57:28](https://lobste.rs/s/arfalj/one_time_i_used_go_panics_for_flow_control) - [That one time I used Go panics for flow control](https://noncrab.net/posts/panic-as-flow-control/)
* [2026-05-23, 08:24:57](https://news.ycombinator.com/item?id=48245862) - [BambuStudio has been violating PrusaSlicer AGPL license since their fork](https://xcancel.com/josefprusa/status/2054602354851254330)
* [2026-05-23, 07:53:07](https://lobste.rs/s/luyrv4/new_suite_modern_tools_coming_for_editing) - [A new suite of modern tools coming for editing and publishing RFCs](https://www.ietf.org/blog/new-tools-coming-for-editing-and-publishing-rfcs/)
* [2026-05-23, 07:46:00](https://soylentnews.org/article.pl?sid=26/05/22/032239&amp;from=rss) - [Amazon is Shutting Down Support for Older Kindles Soon. Here&apos;s How You Can Save Yours](https://soylentnews.org/article.pl?sid=26/05/22/032239&amp;from=rss)
* [2026-05-23, 07:44:27](https://lobste.rs/s/ztam3w/don_t_roll_your_own) - [Don&apos;t Roll Your Own …](https://susam.net/do-not-roll-your-own.html)
* [2026-05-23, 07:34:33](https://news.ycombinator.com/item?id=48245571) - [Experience: We found a baby on the subway – now he&apos;s our 26-year-old son](https://www.theguardian.com/lifeandstyle/2026/may/22/experience-found-baby-subway-now-26-year-old-son)
* [2026-05-23, 07:00:00](https://science.slashdot.org/story/26/05/23/038238/caltech-could-lose-control-of-jpl-for-first-time-in-decades?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Caltech Could Lose Control of JPL For First Time In Decades](https://science.slashdot.org/story/26/05/23/038238/caltech-could-lose-control-of-jpl-for-first-time-in-decades?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-23, 06:32:00](https://news.ycombinator.com/item?id=48245262) - [Rubish: A Unix shell written in pure Ruby](https://github.com/amatsuda/rubish)
* [2026-05-23, 06:04:52](https://lobste.rs/s/z17p7a/price_humans) - [The price of humans](https://blog.umangsurana.com/blog/price_of_humans/)
* [2026-05-23, 05:51:38](https://lobste.rs/s/z9lnpe/spy_interpreter_compiler_for_statically) - [SPy: an interpreter and a compiler for a statically typed variant of Python](https://github.com/spylang/spy)
* [2026-05-23, 05:31:13](https://lobste.rs/s/cvwsxk/sp_h_is_standard_library_c_deserves) - [sp.h is the standard library that C deserves](https://spader.zone/sp/)
* [2026-05-23, 05:19:26](https://lobste.rs/s/vda4gq/adjusting_mac_s_system_volume_on_command) - [Adjusting a Mac&apos;s System Volume on the Command Line](https://excessivelyadequate.com/posts/vol.html)
* [2026-05-23, 03:30:00](https://entertainment.slashdot.org/story/26/05/23/0039205/pentagon-releases-second-batch-of-ufo-videos-first-hand-testimony?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pentagon Releases Second Batch of UFO Videos, First-Hand Testimony](https://entertainment.slashdot.org/story/26/05/23/0039205/pentagon-releases-second-batch-of-ufo-videos-first-hand-testimony?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-23, 03:04:00](https://soylentnews.org/article.pl?sid=26/05/22/0247218&amp;from=rss) - [AI Data Centers Trigger Massive &apos;Irreversible&apos; 76% Electricity Price Spike in Largest US Region](https://soylentnews.org/article.pl?sid=26/05/22/0247218&amp;from=rss)
* [2026-05-23, 02:57:49](https://lobste.rs/s/m2kldy/comparing_lz4_decompressor_on_four) - [Comparing an LZ4 Decompressor on four legacy CPUs](https://bumbershootsoft.wordpress.com/2026/05/09/comparing-an-lz4-decompressor-on-four-legacy-cpus/)
* [2026-05-23, 02:20:30](https://lobste.rs/s/bo9ecf/planescape_torment_part_1_from_tabletop) - [Planescape: Torment, Part 1: From the Tabletop](https://www.filfre.net/2026/05/planescape-torment-part-1-from-the-tabletop/)
* [2026-05-23, 00:30:00](https://science.slashdot.org/story/26/05/23/0026223/spacexs-upgraded-starship-v3-launches-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX&apos;s Upgraded Starship V3 Launches For First Time](https://science.slashdot.org/story/26/05/23/0026223/spacexs-upgraded-starship-v3-launches-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-22, 23:00:00](https://tech.slashdot.org/story/26/05/22/1827258/google-api-keys-remain-active-after-deletion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google API Keys Remain Active After Deletion](https://tech.slashdot.org/story/26/05/22/1827258/google-api-keys-remain-active-after-deletion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-22, 22:15:00](https://soylentnews.org/article.pl?sid=26/05/22/0239256&amp;from=rss) - [Pompeii Victim ID&apos;d as a Likely Doctor](https://soylentnews.org/article.pl?sid=26/05/22/0239256&amp;from=rss)
* [2026-05-22, 22:14:59](https://lobste.rs/s/rlpzut/cve_2026_46529_10_year_old_rce_linux_pdf) - [CVE-2026-46529: 10-year-old RCE in Linux PDF Viewer (XReader/Evince/Atril)](https://medeiros.zip/posts/CVE-2026-46529-evince)
* [2026-05-22, 22:05:39](https://news.ycombinator.com/item?id=48242278) - [Sleep research led to a new sleep apnea drug](https://temertymedicine.utoronto.ca/news/how-decades-sleep-research-led-new-sleep-apnea-drug)
* [2026-05-22, 22:00:00](https://news.slashdot.org/story/26/05/22/1817201/major-streamers-must-pay-15-of-revenues-to-canadian-content-crtc-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Major Streamers Must Pay 15% of Revenues To Canadian Content, CRTC Says](https://news.slashdot.org/story/26/05/22/1817201/major-streamers-must-pay-15-of-revenues-to-canadian-content-crtc-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-22, 21:36:55](https://news.ycombinator.com/item?id=48241997) - [Shipping a laptop to a refugee camp in Uganda](https://notesbylex.com/shipping-a-laptop-to-a-refugee-camp-in-uganda)
* [2026-05-22, 21:00:00](https://news.slashdot.org/story/26/05/22/1758232/ntsb-wants-pdf-removed-after-it-exposed-final-cockpit-audio-from-ups-crash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NTSB Wants PDF Removed After It Exposed Final Cockpit Audio From UPS Crash](https://news.slashdot.org/story/26/05/22/1758232/ntsb-wants-pdf-removed-after-it-exposed-final-cockpit-audio-from-ups-crash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-22, 20:54:35](https://lobste.rs/s/tbizqg/mysterious_xf86audioplay_issue) - [The mysterious XF86AudioPlay issue](https://michael-prokop.at/blog/2026/05/20/the-mysterious-xf86audioplay-issue/)
* [2026-05-22, 20:19:50](https://lobste.rs/s/fkrpjw/only_17_all_64_bit_integers_are_products) - [Only 17% of all 64-bit Integers are products of two 32-bit integers](https://lemire.me/blog/2026/05/22/only-17-of-all-64-bit-integers-are-products-of-two-32-bit-integers/)
* [2026-05-22, 20:00:00](https://yro.slashdot.org/story/26/05/22/1747216/trump-mobile-exposed-customers-personal-data-including-phone-numbers-and-home-addresses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Mobile Exposed Customers&apos; Personal Data, Including Phone Numbers and Home Addresses](https://yro.slashdot.org/story/26/05/22/1747216/trump-mobile-exposed-customers-personal-data-including-phone-numbers-and-home-addresses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-22, 19:40:05](https://lobste.rs/s/7crjja/blueprint_for_formal_verification_apple) - [A blueprint for formal verification of Apple corecrypto](https://security.apple.com/blog/formal-verification-corecrypto/)
* [2026-05-22, 19:31:45](https://news.ycombinator.com/item?id=48240419) - [Project Glasswing: An Initial Update](https://www.anthropic.com/research/glasswing-initial-update)
* [2026-05-22, 19:00:00](https://entertainment.slashdot.org/story/26/05/22/1737220/spotify-umg-to-let-fans-make-their-own-music-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Spotify, UMG To Let Fans Make Their Own Music With AI](https://entertainment.slashdot.org/story/26/05/22/1737220/spotify-umg-to-let-fans-make-their-own-music-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-22, 18:17:57](https://news.ycombinator.com/item?id=48239413) - [Open source Kanban desktop app that runs parallel agents on every card](https://www.kanbots.dev/)
* [2026-05-22, 18:00:00](https://entertainment.slashdot.org/story/26/05/22/1723236/this-cannes-film-cost-500000-to-make-400000-was-ai-compute-costs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [This Cannes Film Cost $500,000 to Make. $400,000 Was AI Compute Costs.](https://entertainment.slashdot.org/story/26/05/22/1723236/this-cannes-film-cost-500000-to-make-400000-was-ai-compute-costs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-22, 17:32:04](https://news.ycombinator.com/item?id=48238896) - [Microsoft starts canceling Claude Code licenses](https://www.theverge.com/tech/930447/microsoft-claude-code-discontinued-notepad)
* [2026-05-22, 17:27:00](https://soylentnews.org/article.pl?sid=26/05/22/0231209&amp;from=rss) - [Space Factories Edge Closer After Experimental Capsule Survives Hypersonic Landing](https://soylentnews.org/article.pl?sid=26/05/22/0231209&amp;from=rss)
* [2026-05-22, 17:00:00](https://yro.slashdot.org/story/26/05/22/1657237/venmo-redesign-makes-new-users-posts-friends-only-by-default?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Venmo Redesign Makes New Users&apos; Posts Friends-Only by Default](https://yro.slashdot.org/story/26/05/22/1657237/venmo-redesign-makes-new-users-posts-friends-only-by-default?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-22, 16:54:31](https://news.ycombinator.com/item?id=48238429) - [CISA tries to contain data leak](https://krebsonsecurity.com/2026/05/lawmakers-demand-answers-as-cisa-tries-to-contain-data-leak/)
* [2026-05-22, 16:00:00](https://news.slashdot.org/story/26/05/22/060223/samsung-chip-workers-to-get-340000-average-bonus-in-ai-boom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Samsung Chip Workers To Get $340,000 Average Bonus In AI Boom](https://news.slashdot.org/story/26/05/22/060223/samsung-chip-workers-to-get-340000-average-bonus-in-ai-boom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-22, 15:22:04](https://news.ycombinator.com/item?id=48237163) - [Why Japanese companies do so many different things](https://davidoks.blog/p/why-japanese-companies-do-so-many)
* [2026-05-22, 15:00:50](https://news.ycombinator.com/item?id=48236887) - [A Forth-inspired language for writing websites](https://robida.net/entries/2026/05/21/a-forth-inspired-language-for-writing-websites)
* [2026-05-22, 15:00:00](https://yro.slashdot.org/story/26/05/22/0553205/a-bipartisan-amendment-would-end-police-license-plate-tracking-nationwide?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Bipartisan Amendment Would End Police License Plate Tracking Nationwide](https://yro.slashdot.org/story/26/05/22/0553205/a-bipartisan-amendment-would-end-police-license-plate-tracking-nationwide?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-22, 14:36:27](https://news.ycombinator.com/item?id=48236501) - [I’m writing again](https://www.cringely.com/2026/05/21/im-writing-again/)
* [2026-05-22, 12:43:00](https://soylentnews.org/article.pl?sid=26/05/22/0225208&amp;from=rss) - [Intel Tells PC Makers to Adopt 18A CPUs or Lose Their Supply](https://soylentnews.org/article.pl?sid=26/05/22/0225208&amp;from=rss)
* [2026-05-22, 12:16:10](https://lobste.rs/s/gfjzwa/maintainer_s_dilemma) - [The Maintainer&apos;s Dilemma](https://spf13.com/p/the-maintainers-dilemma/)
* [2026-05-22, 11:47:46](https://lobste.rs/s/1acyon/forth_inspired_language_for_writing) - [A Forth-inspired language for writing websites](https://robida.net/entries/2026/05/21/a-forth-inspired-language-for-writing-websites)
* [2026-05-22, 11:23:30](https://news.ycombinator.com/item?id=48234380) - [Deno 2.8](https://deno.com/blog/v2.8)
* [2026-05-22, 11:00:00](https://news.slashdot.org/story/26/05/22/0530218/steve-wozniak-tells-graduates-they-all-have-ai-actual-intelligence?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Steve Wozniak Tells Graduates They All Have &apos;AI&apos;: Actual Intelligence](https://news.slashdot.org/story/26/05/22/0530218/steve-wozniak-tells-graduates-they-all-have-ai-actual-intelligence?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-22, 10:38:26](https://news.ycombinator.com/item?id=48234090) - [Antigravity 2.0 Tops the OpenSCAD Architectural 3D LLM Benchmark](https://modelrift.com/blog/openscad-llm-benchmark/)
* [2026-05-22, 08:38:40](https://lobste.rs/s/flehm8/designing_firefox_for_future) - [Designing Firefox for the future](https://blog.mozilla.org/en/firefox/new-firefox-design/)
* [2026-05-22, 08:01:00](https://soylentnews.org/article.pl?sid=26/05/21/042230&amp;from=rss) - [Jury Dismisses All Claims in Elon Musk&apos;s Lawsuit Against OpenAI CEO Sam Altman](https://soylentnews.org/article.pl?sid=26/05/21/042230&amp;from=rss)
* [2026-05-22, 07:00:00](https://science.slashdot.org/story/26/05/22/0522204/at-least-80-responsibility-for-ill-health-in-old-age-down-to-individual-study-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [At Least 80% Responsibility For Ill Health In Old Age Down to Individual, Study Says](https://science.slashdot.org/story/26/05/22/0522204/at-least-80-responsibility-for-ill-health-in-old-age-down-to-individual-study-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-22, 06:49:30](https://lobste.rs/s/4vhivn/c_programming_language_quiz) - [C Programming Language Quiz](https://stefansf.de/c-quiz/)
* [2026-05-22, 03:30:00](https://yro.slashdot.org/story/26/05/22/0129209/att-sues-california-in-bid-to-stop-offering-traditional-phone-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AT&amp;amp;T Sues California In Bid To Stop Offering Traditional Phone Service](https://yro.slashdot.org/story/26/05/22/0129209/att-sues-california-in-bid-to-stop-offering-traditional-phone-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-22, 03:19:00](https://soylentnews.org/article.pl?sid=26/05/19/1855242&amp;from=rss) - [Microsoft Surprises With its First Server Linux Distribution: Azure Linux 4.0](https://soylentnews.org/article.pl?sid=26/05/19/1855242&amp;from=rss)
* [2026-05-22, 02:37:06](https://lobste.rs/s/ptvaan/gnutella_protocol_outliving_world) - [Gnutella: A Protocol Outliving the World That Created It](https://rickcarlino.com/notes/p2p/gnutella-explanation.html)
* [2026-05-21, 22:34:00](https://soylentnews.org/article.pl?sid=26/05/19/1728216&amp;from=rss) - [Iran Demands Big Tech Pay Fees For Undersea Internet Cables In Strait Of Hormuz](https://soylentnews.org/article.pl?sid=26/05/19/1728216&amp;from=rss)
* [2026-05-21, 20:02:05](https://lobste.rs/s/tbxmm1/announcing_web_serial_support_firefox) - [Announcing Web Serial Support in Firefox](https://hacks.mozilla.org/2026/05/web-serial-support-in-firefox/)
* [2026-05-21, 17:51:00](https://soylentnews.org/article.pl?sid=26/05/19/1726205&amp;from=rss) - [Physicists at Odds Over Greatest Physics Mysteries](https://soylentnews.org/article.pl?sid=26/05/19/1726205&amp;from=rss)
* [2026-05-21, 17:37:58](https://lobste.rs/s/fxqjqu/flipper_one_we_need_your_help) - [Flipper One — we need your help](https://blog.flipper.net/flipper-one-we-need-your-help/)
* [2026-05-21, 16:54:48](https://news.ycombinator.com/item?id=48225782) - [Improving C# Memory Safety](https://devblogs.microsoft.com/dotnet/improving-csharp-memory-safety/)
* [2026-05-21, 13:03:00](https://soylentnews.org/article.pl?sid=26/05/19/1720228&amp;from=rss) - [Barnes &amp; Noble CEO Backs Selling AI-Written Books in Stores](https://soylentnews.org/article.pl?sid=26/05/19/1720228&amp;from=rss)
* [2026-05-21, 08:17:00](https://soylentnews.org/article.pl?sid=26/05/19/1718231&amp;from=rss) - [PlayStation Plus to Raise Monthly Subscription Fee](https://soylentnews.org/article.pl?sid=26/05/19/1718231&amp;from=rss)
* [2026-05-21, 03:36:00](https://soylentnews.org/article.pl?sid=26/05/19/1128257&amp;from=rss) - [Casimir Force Co-Opted to Generate Free Energy, Midichlorians Not Included](https://soylentnews.org/article.pl?sid=26/05/19/1128257&amp;from=rss)
* [2026-05-20, 22:51:00](https://soylentnews.org/article.pl?sid=26/05/19/0444246&amp;from=rss) - [Software Developers Say AI Is Rotting Their Brains](https://soylentnews.org/article.pl?sid=26/05/19/0444246&amp;from=rss)
* [2026-05-20, 20:56:30](https://news.ycombinator.com/item?id=48214025) - [What is the history of the ERROR_ARENA_TRASHED error code?](https://devblogs.microsoft.com/oldnewthing/20260519-00/?p=112339)
* [2026-05-20, 20:19:46](https://news.ycombinator.com/item?id=48213529) - [A Wayland Compositor in Minecraft](https://modrinth.com/mod/waylandcraft)
* [2026-05-20, 18:06:00](https://soylentnews.org/article.pl?sid=26/05/19/0438213&amp;from=rss) - [Ollama Out-of-Bounds Read Vulnerability Allows Remote Process Memory Leak](https://soylentnews.org/article.pl?sid=26/05/19/0438213&amp;from=rss)
* [2026-05-20, 16:11:15](https://news.ycombinator.com/item?id=48210041) - [ArcBrush – Node-based 2D image editor](https://arcbrush.com/)
* [2026-05-20, 13:19:00](https://soylentnews.org/article.pl?sid=26/05/18/1730215&amp;from=rss) - [NASA&apos;s Psyche Spacecraft Just Got An Assist From Mars On The Way To Its Asteroid Namesake](https://soylentnews.org/article.pl?sid=26/05/18/1730215&amp;from=rss)
* [2026-05-20, 12:49:20](https://news.ycombinator.com/item?id=48206828) - [Yeunjoo Choi from Igalia on Chromium](https://theconsensus.dev/p/2026/05/20/yeunjoo-choi-from-igalia-on-chromium.html)
* [2026-05-20, 12:42:46](https://news.ycombinator.com/item?id=48206763) - [Neutron scattering explains why gluten-free pasta falls apart (2025)](https://phys.org/news/2025-09-science-spaghetti-neutron-gluten-free.html)
* [2026-05-20, 12:06:56](https://news.ycombinator.com/item?id=48206387) - [The quadratic sandwich](https://fedemagnani.github.io/math/2026/04/08/the-quadratic-sandwich.html)
* [2026-05-20, 11:58:24](https://news.ycombinator.com/item?id=48206313) - [Comparing an LZ4 Decompressor on Four Legacy CPUs](https://bumbershootsoft.wordpress.com/2026/05/09/comparing-an-lz4-decompressor-on-four-legacy-cpus/)
* [2026-05-20, 09:03:44](https://news.ycombinator.com/item?id=48204985) - [Blood Pumping Mechanism of the Hoof (2020)](https://horses.extension.org/blood-pumping-mechanism-of-the-hoof/)
* [2026-05-20, 08:34:00](https://soylentnews.org/article.pl?sid=26/05/18/1728202&amp;from=rss) - [Texas County Passes Data Center Ban for Rural Areas for a Year](https://soylentnews.org/article.pl?sid=26/05/18/1728202&amp;from=rss)
* [2026-05-20, 03:55:58](https://news.ycombinator.com/item?id=48202909) - [Fast Factorial Algorithms](http://www.luschny.de/math/factorial/FastFactorialFunctions.htm)
* [2026-05-20, 03:51:00](https://soylentnews.org/article.pl?sid=26/05/18/1714233&amp;from=rss) - [Cell Phone Users Can&apos;t Stop Incriminating Themselves](https://soylentnews.org/article.pl?sid=26/05/18/1714233&amp;from=rss)
* [2026-05-19, 23:05:00](https://soylentnews.org/article.pl?sid=26/05/18/175251&amp;from=rss) - [Exposure to Burn Injuries Played Key Role in Shaping Human Evolution](https://soylentnews.org/article.pl?sid=26/05/18/175251&amp;from=rss)
* [2026-05-19, 18:26:00](https://soylentnews.org/article.pl?sid=26/05/18/174235&amp;from=rss) - [Short Interview with Vint Cerf at El País](https://soylentnews.org/article.pl?sid=26/05/18/174235&amp;from=rss)
* [2026-05-19, 16:55:17](https://news.ycombinator.com/item?id=48195941) - [A 1955 Los Alamos computer experiment changed our understanding of chaos](https://www.lanl.gov/media/publications/1663/science-of-unpredictability)
* [2026-05-19, 13:41:00](https://soylentnews.org/article.pl?sid=26/05/17/1438201&amp;from=rss) - [Your Doctor is Most Likely Consulting This Free AI Chatbot](https://soylentnews.org/article.pl?sid=26/05/17/1438201&amp;from=rss)
* [2026-05-19, 08:56:00](https://soylentnews.org/article.pl?sid=26/05/17/1429249&amp;from=rss) - [AI Data Centers Face Increasing Complaints About Inaudible but &apos;Felt&apos; Infrasound](https://soylentnews.org/article.pl?sid=26/05/17/1429249&amp;from=rss)
* [2026-05-19, 04:09:00](https://soylentnews.org/article.pl?sid=26/05/17/1424241&amp;from=rss) - [A Simple Blood Test Could Predict Your Odds of Living Longer With Surprising Accuracy](https://soylentnews.org/article.pl?sid=26/05/17/1424241&amp;from=rss)
