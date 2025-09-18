# [News Summary](https://kherrick.github.io/news-summary/)

## Innovations and Technology

* [TernFS: an exabyte scale, multi-region distributed filesystem](https://www.xtxmarkets.com/tech/2025-ternfs/) ([comments](https://lobste.rs/s/yn7jdd/ternfs_exabyte_scale_multi_region))

* [Luau – fast, small, safe, gradually typed scripting language derived from Lua](https://luau.org/) ([comments](https://news.ycombinator.com/item?id=45289558))

* [Launch HN: Cactus (YC S25) – AI inference on smartphones](https://github.com/cactus-compute/cactus) ([comments](https://news.ycombinator.com/item?id=45291024))

* [Automatic Differentiation Can Be Incorrect](https://www.stochasticlifestyle.com/the-numerical-analysis-of-differentiable-simulation-automatic-differentiation-can-be-incorrect/) ([comments](https://news.ycombinator.com/item?id=45289829))

* [Color-Changing Organogel Stretches 46 Times Its Size and Self-Heals](https://science.slashdot.org/story/25/09/17/2129246/color-changing-organogel-stretches-46-times-its-size-and-self-heals?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://science.slashdot.org/story/25/09/17/2129246/color-changing-organogel-stretches-46-times-its-size-and-self-heals?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Artificial Intelligence and its Role in Society

* [How Americans View AI and Its Impact on People and Society](https://news.slashdot.org/story/25/09/18/0452250/how-americans-view-ai-and-its-impact-on-people-and-society?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.slashdot.org/story/25/09/18/0452250/how-americans-view-ai-and-its-impact-on-people-and-society?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [The quality of AI-assisted software depends on unit of work management](https://blog.nilenso.com/blog/2025/09/15/ai-unit-of-work/) ([comments](https://news.ycombinator.com/item?id=45289168))

* [You Had No Taste Before AI](https://matthewsanabria.dev/posts/you-had-no-taste-before-ai/) ([comments](https://news.ycombinator.com/item?id=45288551))

## Perspectives on Programming and Development

* [A better future for JavaScript that won't happen](https://drewdevault.com/2025/09/17/2025-09-17-An-impossible-future-for-JS.html) ([comments](https://news.ycombinator.com/item?id=45290748))

* [Elasticsearch: Search Index, Not System of Record](https://www.paradedb.com/blog/elasticsearch-was-never-a-database) ([comments](https://lobste.rs/s/5bkb3b/elasticsearch_search_index_not_system))

* [Access logging in 2025](https://neugierig.org/software/blog/2025/09/access-log.html) ([comments](https://lobste.rs/s/oo15ry/access_logging_2025))

* [Making Printed Circuit Boards with Wild Clay](https://feministhackerspaces.cargo.site/Clay-PCB-Tutorial) ([comments](https://lobste.rs/s/twm4fg/making_printed_circuit_boards_with_wild))

## Significant Business and Economic Developments

* [Nvidia To Invest $5 Billion in Intel](https://slashdot.org/story/25/09/18/1226210/nvidia-to-invest-5-billion-in-intel?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://slashdot.org/story/25/09/18/1226210/nvidia-to-invest-5-billion-in-intel?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Gen Z Leads Biggest Drop In FICO Scores Since Financial Crisis](https://news.slashdot.org/story/25/09/17/2142221/gen-z-leads-biggest-drop-in-fico-scores-since-financial-crisis?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.slashdot.org/story/25/09/17/2142221/gen-z-leads-biggest-drop-in-fico-scores-since-financial-crisis?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Slack has raised our charges by $195k per year](https://skyfall.dev/posts/slack) ([comments](https://news.ycombinator.com/item?id=45283887))

## Environment and Culture

* [American Prairie unlocks another 70k acres in Montana](https://earthhope.substack.com/p/victory-for-public-access-american) ([comments](https://news.ycombinator.com/item?id=45291132))

* [KDE is now my favorite desktop](https://kokada.dev/blog/kde-is-now-my-favorite-desktop/) ([comments](https://news.ycombinator.com/item?id=45288690))

* [An Afternoon at the Recursive Café: Two Threads Interleaving](https://ipfs.io/ipfs/bafkreieiwashxhlv5epydts2apocoepdvjudzhpnrswqxcd3zm3i5gipyu) ([comments](https://news.ycombinator.com/item?id=45240681))

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

* [2025-09-18, 15:47:40](https://news.ycombinator.com/item?id=45291132) - [American Prairie unlocks another 70k acres in Montana](https://earthhope.substack.com/p/victory-for-public-access-american)
* [2025-09-18, 15:40:29](https://news.ycombinator.com/item?id=45291024) - [Launch HN: Cactus (YC S25) – AI inference on smartphones](https://github.com/cactus-compute/cactus)
* [2025-09-18, 15:18:28](https://news.ycombinator.com/item?id=45290748) - [A better future for JavaScript that won&apos;t happen](https://drewdevault.com/2025/09/17/2025-09-17-An-impossible-future-for-JS.html)
* [2025-09-18, 15:01:00](https://news.slashdot.org/story/25/09/18/0452250/how-americans-view-ai-and-its-impact-on-people-and-society?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Americans View AI and Its Impact on People and Society](https://news.slashdot.org/story/25/09/18/0452250/how-americans-view-ai-and-its-impact-on-people-and-society?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 14:59:24](https://lobste.rs/s/5bkb3b/elasticsearch_search_index_not_system) - [Elasticsearch: Search Index, Not System of Record](https://www.paradedb.com/blog/elasticsearch-was-never-a-database)
* [2025-09-18, 14:46:02](https://lobste.rs/s/yn7jdd/ternfs_exabyte_scale_multi_region) - [TernFS: an exabyte scale, multi-region distributed filesystem](https://www.xtxmarkets.com/tech/2025-ternfs/)
* [2025-09-18, 14:36:44](https://news.ycombinator.com/item?id=45290245) - [TernFS – An exabyte scale, multi-region distributed filesystem](https://www.xtxmarkets.com/tech/2025-ternfs/)
* [2025-09-18, 14:27:00](https://soylentnews.org/article.pl?sid=25/09/17/1720215&amp;from=rss) - [Modular Nuclear Reactors Sound Great, but Won&apos;t be Ready Any Time Soon](https://soylentnews.org/article.pl?sid=25/09/17/1720215&amp;from=rss)
* [2025-09-18, 14:17:40](https://news.ycombinator.com/item?id=45290021) - [Fuck, You&apos;re Still Sad?](https://bessstillman.substack.com/p/oh-fuck-youre-still-sad)
* [2025-09-18, 14:01:45](https://news.ycombinator.com/item?id=45289834) - [Geizhals Preisvergleich Donates USD 10k to the Perl and Raku Foundation](https://www.perl.com/article/geizhals-donates-to-tprf/)
* [2025-09-18, 14:01:35](https://news.ycombinator.com/item?id=45289829) - [Automatic Differentiation Can Be Incorrect](https://www.stochasticlifestyle.com/the-numerical-analysis-of-differentiable-simulation-automatic-differentiation-can-be-incorrect/)
* [2025-09-18, 13:54:46](https://lobste.rs/s/cobbr5/announcing_rust_1_90_0) - [Announcing Rust 1.90.0](https://blog.rust-lang.org/2025/09/18/Rust-1.90.0/)
* [2025-09-18, 13:52:50](https://lobste.rs/s/rwgado/how_can_we_sandbox_our_development) - [How can we sandbox our development machines?](https://lobste.rs/s/rwgado/how_can_we_sandbox_our_development)
* [2025-09-18, 13:38:49](https://news.ycombinator.com/item?id=45289558) - [Luau – fast, small, safe, gradually typed scripting language derived from Lua](https://luau.org/)
* [2025-09-18, 13:28:59](https://news.ycombinator.com/item?id=45289453) - [Flipper Zero Geiger Counter](https://kasiin.top/blog/2025-08-04-flipper_zero_geiger_counter_module/)
* [2025-09-18, 13:11:35](https://lobste.rs/s/tptp64/quality_ai_assisted_software_depends_on) - [The quality of AI-assisted software depends on unit of work management](https://blog.nilenso.com/blog/2025/09/15/ai-unit-of-work/)
* [2025-09-18, 13:06:03](https://news.ycombinator.com/item?id=45289168) - [The quality of AI-assisted software depends on unit of work management](https://blog.nilenso.com/blog/2025/09/15/ai-unit-of-work/)
* [2025-09-18, 13:00:00](https://news.slashdot.org/story/25/09/17/2142221/gen-z-leads-biggest-drop-in-fico-scores-since-financial-crisis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gen Z Leads Biggest Drop In FICO Scores Since Financial Crisis](https://news.slashdot.org/story/25/09/17/2142221/gen-z-leads-biggest-drop-in-fico-scores-since-financial-crisis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 12:26:00](https://slashdot.org/story/25/09/18/1226210/nvidia-to-invest-5-billion-in-intel?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia To Invest $5 Billion in Intel](https://slashdot.org/story/25/09/18/1226210/nvidia-to-invest-5-billion-in-intel?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 12:17:51](https://news.ycombinator.com/item?id=45288690) - [KDE is now my favorite desktop](https://kokada.dev/blog/kde-is-now-my-favorite-desktop/)
* [2025-09-18, 12:16:35](https://lobste.rs/s/gpxh3k/kde_is_now_my_favorite_desktop) - [KDE is now my favorite desktop](https://kokada.dev/blog/kde-is-now-my-favorite-desktop/)
* [2025-09-18, 12:02:45](https://lobste.rs/s/twm4fg/making_printed_circuit_boards_with_wild) - [Making Printed Circuit Boards with Wild Clay](https://feministhackerspaces.cargo.site/Clay-PCB-Tutorial)
* [2025-09-18, 12:00:44](https://news.ycombinator.com/item?id=45288551) - [You Had No Taste Before AI](https://matthewsanabria.dev/posts/you-had-no-taste-before-ai/)
* [2025-09-18, 11:16:29](https://news.ycombinator.com/item?id=45288222) - [Mirror Life Worries](https://www.science.org/content/blog-post/mirror-life-worries)
* [2025-09-18, 11:04:48](https://news.ycombinator.com/item?id=45288161) - [Nvidia buys $5B in Intel stock in seismic deal](https://www.tomshardware.com/pc-components/cpus/nvidia-and-intel-announce-jointly-developed-intel-x86-rtx-socs-for-pcs-with-nvidia-graphics-also-custom-nvidia-data-center-x86-processors-nvidia-buys-usd5-billion-in-intel-stock-in-seismic-deal)
* [2025-09-18, 10:08:08](https://lobste.rs/s/ezjbvq/controlling_program_flow_with) - [Controlling program flow with capabilities in Scala](https://nrinaudo.github.io/articles/capabilities_flow.html)
* [2025-09-18, 10:00:00](https://slashdot.org/story/25/09/17/2151212/limewire-acquires-fyre-festival-brand?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LimeWire Acquires Fyre Festival Brand](https://slashdot.org/story/25/09/17/2151212/limewire-acquires-fyre-festival-brand?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 09:43:00](https://soylentnews.org/article.pl?sid=25/09/17/1714242&amp;from=rss) - [&apos;Beyond EUV&apos; Chipmaking Tech Pushes Soft X-Ray Lithography Closer to Challenging Hyper-NA EUV](https://soylentnews.org/article.pl?sid=25/09/17/1714242&amp;from=rss)
* [2025-09-18, 09:33:07](https://news.ycombinator.com/item?id=45287551) - [CircuitHub (YC W12) Is Hiring Operations Research Engineers (UK/Remote)](https://www.ycombinator.com/companies/circuithub/jobs/UM1QSjZ-operations-research-engineer)
* [2025-09-18, 09:28:40](https://news.ycombinator.com/item?id=45287513) - [Fast Fourier Transforms Part 1: Cooley-Tukey](https://connorboyle.io/2025/09/11/fft-cooley-tukey.html)
* [2025-09-18, 09:26:20](https://lobste.rs/s/bpk3l6/ton_roosendaal_step_down_as_blender) - [Ton Roosendaal to step down as Blender chairman and CEO](https://www.cgchannel.com/2025/09/ton-roosendaal-to-step-down-as-blender-chairman-and-ceo/)
* [2025-09-18, 08:56:37](https://lobste.rs/s/oo15ry/access_logging_2025) - [Access logging in 2025](https://neugierig.org/software/blog/2025/09/access-log.html)
* [2025-09-18, 08:41:32](https://news.ycombinator.com/item?id=45287155) - [This Website Has No Class](https://aaadaaam.com/notes/no-class/)
* [2025-09-18, 08:19:24](https://lobste.rs/s/d4edzo/go_channels_solve_interface_impedance) - [Go channels to solve interface impedance mismatch](https://dolthub.com/blog/2025-09-12-go-channels-for-period-mismatch/)
* [2025-09-18, 07:54:51](https://lobste.rs/s/r7tnyq/sunsetting_rustwasm_github_org) - [Sunsetting the rustwasm GitHub org](https://blog.rust-lang.org/inside-rust/2025/07/21/sunsetting-the-rustwasm-github-org/)
* [2025-09-18, 07:12:56](https://news.ycombinator.com/item?id=45286526) - [Pnpm has a new setting to stave off supply chain attacks](https://pnpm.io/blog/releases/10.16)
* [2025-09-18, 07:00:00](https://science.slashdot.org/story/25/09/17/2129246/color-changing-organogel-stretches-46-times-its-size-and-self-heals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Color-Changing Organogel Stretches 46 Times Its Size and Self-Heals](https://science.slashdot.org/story/25/09/17/2129246/color-changing-organogel-stretches-46-times-its-size-and-self-heals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 06:53:08](https://news.ycombinator.com/item?id=45286369) - [CERN Animal Shelter for Computer Mice](https://computer-animal-shelter.web.cern.ch/index.shtml)
* [2025-09-18, 04:59:00](https://soylentnews.org/article.pl?sid=25/09/17/0421208&amp;from=rss) - [Northrop Grumman&apos;s New Spacecraft is a Real Chonker](https://soylentnews.org/article.pl?sid=25/09/17/0421208&amp;from=rss)
* [2025-09-18, 04:55:55](https://lobste.rs/s/whxl2y/nick_wellnhofer_steps_down_as_libxml2) - [Nick Wellnhofer steps down as libxml2 maintainer](https://discourse.gnome.org/t/stepping-down-as-libxml2-maintainer/31398)
* [2025-09-18, 04:41:17](https://lobste.rs/s/hydvux/we_have_outgrown_process_model) - [We have outgrown the Process model](https://sidhion.com/blog/process_model_outgrown/)
* [2025-09-18, 04:37:00](https://lobste.rs/s/3tmeh0/monoids_public) - [Monoids in Public](https://blog.veritates.love/monoids_in_public.html)
* [2025-09-18, 03:30:00](https://tech.slashdot.org/story/25/09/17/2112233/china-is-sending-its-world-beating-auto-industry-into-a-tailspin?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Is Sending Its World-Beating Auto Industry Into a Tailspin](https://tech.slashdot.org/story/25/09/17/2112233/china-is-sending-its-world-beating-auto-industry-into-a-tailspin?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 02:18:45](https://news.ycombinator.com/item?id=45284311) - [Show HN: The text disappears when you screenshot it](https://unscreenshottable.vercel.app/?text=Hello)
* [2025-09-18, 01:37:11](https://news.ycombinator.com/item?id=45283887) - [Slack has raised our charges by $195k per year](https://skyfall.dev/posts/slack)
* [2025-09-18, 01:25:00](https://slashdot.org/story/25/09/17/2123211/deepseek-writes-less-secure-code-for-groups-china-disfavors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DeepSeek Writes Less-Secure Code For Groups China Disfavors](https://slashdot.org/story/25/09/17/2123211/deepseek-writes-less-secure-code-for-groups-china-disfavors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 01:16:02](https://lobste.rs/s/xm1lqy/introducing_gnome_49_brescia) - [Introducing GNOME 49, “Brescia”](https://release.gnome.org/49/)
* [2025-09-18, 00:45:00](https://yro.slashdot.org/story/25/09/17/213257/after-childs-trauma-chatbot-maker-allegedly-forced-mom-to-arbitration-for-100-payout?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [After Child&apos;s Trauma, Chatbot Maker Allegedly Forced Mom To Arbitration For $100 Payout](https://yro.slashdot.org/story/25/09/17/213257/after-childs-trauma-chatbot-maker-allegedly-forced-mom-to-arbitration-for-100-payout?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-18, 00:30:44](https://news.ycombinator.com/item?id=45283306) - [Meta Ray-Ban Display](https://www.meta.com/blog/meta-ray-ban-display-ai-glasses-connect-2025/)
* [2025-09-18, 00:11:00](https://soylentnews.org/article.pl?sid=25/09/17/0413255&amp;from=rss) - [Chinese AI Chip Market: Nvidia Violates Antitrust and Tencent Produces Locally](https://soylentnews.org/article.pl?sid=25/09/17/0413255&amp;from=rss)
* [2025-09-18, 00:02:00](https://tech.slashdot.org/story/25/09/17/2041203/gnome-49-brescia-desktop-environment-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GNOME 49 &apos;Brescia&apos; Desktop Environment Released](https://tech.slashdot.org/story/25/09/17/2041203/gnome-49-brescia-desktop-environment-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-17, 23:21:00](https://slashdot.org/story/25/09/17/1948210/chimps-drinking-a-lager-a-day-in-ripe-fruit-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chimps Drinking a Lager a Day in Ripe Fruit, Study Finds](https://slashdot.org/story/25/09/17/1948210/chimps-drinking-a-lager-a-day-in-ripe-fruit-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-17, 23:03:21](https://news.ycombinator.com/item?id=45282497) - [One Token to rule them all – Obtaining Global Admin in every Entra ID tenant](https://dirkjanm.io/obtaining-global-admin-in-every-entra-id-tenant-with-actor-tokens/)
* [2025-09-17, 22:41:00](https://games.slashdot.org/story/25/09/17/1937258/sony-quietly-downgrades-ps5-digital-edition-storage-to-825gb-at-same-price?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sony Quietly Downgrades PS5 Digital Edition Storage To 825GB at Same Price](https://games.slashdot.org/story/25/09/17/1937258/sony-quietly-downgrades-ps5-digital-edition-storage-to-825gb-at-same-price?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-17, 22:33:26](https://lobste.rs/s/ozicir/shai_hulud_novel_self_replicating_worm) - [Shai-Hulud: The novel self-replicating worm infecting hundreds of NPM packages](https://www.sysdig.com/blog/shai-hulud-the-novel-self-replicating-worm-infecting-hundreds-of-npm-packages)
* [2025-09-17, 22:00:00](https://yro.slashdot.org/story/25/09/17/1941240/congress-asks-valve-discord-and-twitch-to-testify-on-radicalization?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Congress Asks Valve, Discord, and Twitch To Testify On &apos;Radicalization&apos;](https://yro.slashdot.org/story/25/09/17/1941240/congress-asks-valve-discord-and-twitch-to-testify-on-radicalization?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-17, 21:20:00](https://tech.slashdot.org/story/25/09/17/1937221/flying-cars-crash-into-each-other-at-air-show-in-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Flying Cars Crash Into Each Other At Air Show In China](https://tech.slashdot.org/story/25/09/17/1937221/flying-cars-crash-into-each-other-at-air-show-in-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-17, 20:40:00](https://developers.slashdot.org/story/25/09/17/1927233/microsoft-favors-anthropic-over-openai-for-visual-studio-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Favors Anthropic Over OpenAI For Visual Studio Code](https://developers.slashdot.org/story/25/09/17/1927233/microsoft-favors-anthropic-over-openai-for-visual-studio-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-17, 20:16:15](https://lobste.rs/s/pqt0mb/steering_committee_retrospective) - [Steering Committee Retrospective](https://www.haskellforall.com/2025/09/steering-committee-retrospective.html)
* [2025-09-17, 20:02:00](https://slashdot.org/story/25/09/17/1923220/gemini-ai-solves-coding-problem-that-stumped-139-human-teams-at-icpc-world-finals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gemini AI Solves Coding Problem That Stumped 139 Human Teams At ICPC World Finals](https://slashdot.org/story/25/09/17/1923220/gemini-ai-solves-coding-problem-that-stumped-139-human-teams-at-icpc-world-finals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-17, 19:28:00](https://soylentnews.org/article.pl?sid=25/09/17/040212&amp;from=rss) - [Hacker Breaks Into on-Campus Smart Washing Machines](https://soylentnews.org/article.pl?sid=25/09/17/040212&amp;from=rss)
* [2025-09-17, 18:16:53](https://news.ycombinator.com/item?id=45279384) - [WASM 3.0 Completed](https://webassembly.org/news/2025-09-17-wasm-3.0/)
* [2025-09-17, 18:05:31](https://lobste.rs/s/cg7zbe/django_tasks_exists) - [django.tasks exists](https://theorangeone.net/posts/django-dot-tasks-exists/)
* [2025-09-17, 17:56:57](https://lobste.rs/s/bqiqjm/wasm_3_0_completed) - [Wasm 3.0 Completed](https://webassembly.org/news/2025-09-17-wasm-3.0/)
* [2025-09-17, 14:40:00](https://soylentnews.org/article.pl?sid=25/09/17/0355211&amp;from=rss) - [Stealth Radio Hides Signal in Background Noise to Protect Drone Pilots](https://soylentnews.org/article.pl?sid=25/09/17/0355211&amp;from=rss)
* [2025-09-17, 14:29:15](https://lobste.rs/s/w6hc8m/arrival_radar_air_traffic_control_game) - [Arrival Radar Air Traffic Control Game](https://xkqr.org/arrival-radar/)
* [2025-09-17, 12:03:16](https://lobste.rs/s/hrq54n/determination_fifth_busy_beaver_value) - [Determination of the fifth Busy Beaver value](https://arxiv.org/abs/2509.12337)
* [2025-09-17, 09:59:00](https://soylentnews.org/article.pl?sid=25/09/16/1159239&amp;from=rss) - [The Varnish Cache Project Will Soon be Called the Vinyl Cache Project](https://soylentnews.org/article.pl?sid=25/09/16/1159239&amp;from=rss)
* [2025-09-17, 08:51:45](https://lobste.rs/s/zdjtvp/what_go_proxy_has_been_doing) - [what the go proxy has been doing](https://flak.tedunangst.com/post/what-the-go-proxy-has-been-doing)
* [2025-09-17, 07:38:42](https://lobste.rs/s/240z81/our_ai_policy_vs_code_conduct_vs_reality) - [Our AI policy vs code of conduct and vs reality](https://discourse.llvm.org/t/our-ai-policy-vs-code-of-conduct-and-vs-reality/88300)
* [2025-09-17, 05:31:47](https://lobste.rs/s/jpxmcj/ubuntu_25_10_s_rust_coreutils_transition) - [Ubuntu 25.10&apos;s Rust Coreutils Transition Has Uncovered Performance Shortcomings](https://www.phoronix.com/news/Ubuntu-Rust-Coreutils-Perf)
* [2025-09-17, 05:15:00](https://soylentnews.org/article.pl?sid=25/09/16/1158208&amp;from=rss) - [Boeing Faces $3.1M Fine for Door Plug Blowout, Hundreds of Safety Violations](https://soylentnews.org/article.pl?sid=25/09/16/1158208&amp;from=rss)
* [2025-09-16, 23:36:00](https://soylentnews.org/article.pl?sid=25/09/16/0314240&amp;from=rss) - [When It Comes to US AI Rules, There&apos;s Too Many Cooks](https://soylentnews.org/article.pl?sid=25/09/16/0314240&amp;from=rss)
* [2025-09-16, 18:52:00](https://soylentnews.org/article.pl?sid=25/09/16/035221&amp;from=rss) - [Google Cut Managers by 35%: Inside Pichai’s Layoffs Overhaul](https://soylentnews.org/article.pl?sid=25/09/16/035221&amp;from=rss)
* [2025-09-16, 17:52:17](https://news.ycombinator.com/item?id=45265487) - [Midcentury North American Restaurant Placemats](https://casualarchivist.substack.com/p/order-up)
* [2025-09-16, 15:20:00](https://soylentnews.org/breakingnews/article.pl?sid=25/09/16/1516209&amp;from=rss) - [RIP Robert Redford (89)](https://soylentnews.org/breakingnews/article.pl?sid=25/09/16/1516209&amp;from=rss)
* [2025-09-16, 14:10:00](https://soylentnews.org/article.pl?sid=25/09/15/1937219&amp;from=rss) - [Real-Time Observation of Magnet Switching in a Single Atom](https://soylentnews.org/article.pl?sid=25/09/15/1937219&amp;from=rss)
* [2025-09-16, 09:24:00](https://soylentnews.org/article.pl?sid=25/09/15/1928240&amp;from=rss) - [Pentagon Begins Deploying New Satellite Network to Link Sensors With Shooters](https://soylentnews.org/article.pl?sid=25/09/15/1928240&amp;from=rss)
* [2025-09-16, 04:38:00](https://soylentnews.org/article.pl?sid=25/09/15/1921210&amp;from=rss) - [Solar Pacifiers: Influence of the Planets May Subdue Solar Activity](https://soylentnews.org/article.pl?sid=25/09/15/1921210&amp;from=rss)
* [2025-09-15, 23:54:00](https://soylentnews.org/article.pl?sid=25/09/15/1215255&amp;from=rss) - [New Apple-Funded Program Teaches Manufacturing to US Firms](https://soylentnews.org/article.pl?sid=25/09/15/1215255&amp;from=rss)
* [2025-09-15, 23:19:17](https://news.ycombinator.com/item?id=45256145) - [Keeping SSH sessions alive with systemd-inhibit](https://kd8bny.com/posts/session_inhibit/)
* [2025-09-15, 20:51:27](https://news.ycombinator.com/item?id=45254763) - [Boring is good](https://jenson.org/boring/)
* [2025-09-15, 19:12:00](https://soylentnews.org/article.pl?sid=25/09/15/1213242&amp;from=rss) - [New Nuclear Rocket Concept Could Slash Mars Travel Time in Half](https://soylentnews.org/article.pl?sid=25/09/15/1213242&amp;from=rss)
* [2025-09-15, 15:46:02](https://news.ycombinator.com/item?id=45251111) - [Orange Pi RV2 $40 RISC-V SBC: Friendly Gateway to IoT and AI Projects](https://riscv.org/ecosystem-news/2025/09/orange-pi-rv2-40-risc-v-sbc-friendly-gateway-to-iot-and-ai-projects/)
* [2025-09-15, 14:29:00](https://soylentnews.org/article.pl?sid=25/09/14/131209&amp;from=rss) - [Nano11 Compresses Windows 11 Install Footprint to as Little as 2.8GB](https://soylentnews.org/article.pl?sid=25/09/14/131209&amp;from=rss)
* [2025-09-15, 09:46:00](https://soylentnews.org/article.pl?sid=25/09/14/1247231&amp;from=rss) - [Google is Telling People DOGE Never Existed](https://soylentnews.org/article.pl?sid=25/09/14/1247231&amp;from=rss)
* [2025-09-15, 05:05:00](https://soylentnews.org/article.pl?sid=25/09/14/0037204&amp;from=rss) - [Renewable Energy has a Cybersecurity Problem](https://soylentnews.org/article.pl?sid=25/09/14/0037204&amp;from=rss)
* [2025-09-15, 00:19:00](https://soylentnews.org/article.pl?sid=25/09/14/0032249&amp;from=rss) - [Newly Released Video at House UFO Hearing Appears to Show U.S. Missile Striking and Bouncing Off Orb](https://soylentnews.org/article.pl?sid=25/09/14/0032249&amp;from=rss)
* [2025-09-14, 19:39:00](https://soylentnews.org/article.pl?sid=25/09/14/0024209&amp;from=rss) - [Scientists Stunned as Tiny Algae Keep Moving Inside Arctic Ice](https://soylentnews.org/article.pl?sid=25/09/14/0024209&amp;from=rss)
* [2025-09-14, 18:08:55](https://news.ycombinator.com/item?id=45241961) - [Rereading](https://maxgirkins.com/writings/on-rereading)
* [2025-09-14, 15:44:39](https://news.ycombinator.com/item?id=45240681) - [An Afternoon at the Recursive Café: Two Threads Interleaving](https://ipfs.io/ipfs/bafkreieiwashxhlv5epydts2apocoepdvjudzhpnrswqxcd3zm3i5gipyu)
* [2025-09-14, 14:49:00](https://soylentnews.org/article.pl?sid=25/09/13/1842215&amp;from=rss) - [Bronze Age Britons Threw Massive Ragers With Food and Friends From Far Away](https://soylentnews.org/article.pl?sid=25/09/13/1842215&amp;from=rss)
* [2025-09-14, 10:00:00](https://soylentnews.org/article.pl?sid=25/09/13/1342246&amp;from=rss) - [Big Clouds Scramble Over EU Data Act and Data Transfers](https://soylentnews.org/article.pl?sid=25/09/13/1342246&amp;from=rss)
* [2025-09-14, 05:14:00](https://soylentnews.org/article.pl?sid=25/09/13/1330226&amp;from=rss) - [Fingerspitzengefühl](https://soylentnews.org/article.pl?sid=25/09/13/1330226&amp;from=rss)
* [2025-09-14, 00:26:00](https://soylentnews.org/article.pl?sid=25/09/13/135241&amp;from=rss) - [Senator Blasts Microsoft for Making Default Windows Vulnerable to “Kerberoasting”](https://soylentnews.org/article.pl?sid=25/09/13/135241&amp;from=rss)
