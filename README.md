# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Innovations

* [My (very) fast zero-allocation webserver using OxCaml](https://anil.recoil.org/notes/oxcaml-httpz) - A deep dive into the development and performance capabilities of a high-speed, zero-allocation webserver built with OxCaml. [Comments](https://lobste.rs/s/uveyjh/my_very_fast_zero_allocation_webserver)

* [Scientists Create Programmable, Autonomous Robots Smaller Than a Grain of Salt](https://hardware.slashdot.org/story/26/02/01/0616236/scientists-create-programmable-autonomous-robots-smaller-than-a-grain-of-salt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Groundbreaking research on the creation of tiny programmable robots, opening new frontiers in nanotechnology. [Comments](https://hardware.slashdot.org/story/26/02/01/0616236/scientists-create-programmable-autonomous-robots-smaller-than-a-grain-of-salt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [CG/SQL - SQL dialect compiler to C for sqlite3 mimicking stored procedures](https://ricomariani.github.io/CG-SQL-author/) - An innovative tool for compiling SQL dialect to C to simplify SQLite integration and usage in applications. [Comments](https://lobste.rs/s/vwwnjc/cg_sql_sql_dialect_compiler_c_for_sqlite3)

## Energy and Environment Developments

* [Walmart Begins Building Out Nationwide EV Charging Network Across America](https://tech.slashdot.org/story/26/02/01/1959234/walmart-begins-building-out-nationwide-ev-charging-network-across-america?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Walmart's plans for a comprehensive electric vehicle charging network in a step towards sustainable transportation. [Comments](https://tech.slashdot.org/story/26/02/01/1959234/walmart-begins-building-out-nationwide-ev-charging-network-across-america?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [99% of New US Energy Capacity Will Be Green in 2026](https://hardware.slashdot.org/story/26/02/01/080244/99-of-new-us-energy-capacity-will-be-green-in-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Insight into the shift towards renewable energy in the United States and implications for energy policy. [Comments](https://hardware.slashdot.org/story/26/02/01/080244/99-of-new-us-energy-capacity-will-be-green-in-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Cryptocurrency and Finance

* [Bitcoin Drops 40% in Four Months. Bloomberg Blames Absence of Buyers and Belief](https://slashdot.org/story/26/02/01/2146224/bitcoin-drops-40-in-four-months-bloomberg-blames-absence-of-buyers-and-belief?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Analysis of the stark decline in Bitcoin's value and its potential causes. [Comments](https://slashdot.org/story/26/02/01/2146224/bitcoin-drops-40-in-four-months-bloomberg-blames-absence-of-buyers-and-belief?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Apple's Q4 2025 margin on Services was 76.5%](https://asymco.com/2026/02/01/margin-call-3/) - Examination of Apple's high profit margins in the services sector as the company shifts focus from hardware to services. [Comments](https://news.ycombinator.com/item?id=46849588)

## Cybersecurity and Privacy

* [1-Click RCE to steal your Moltbot data and keys](https://depthfirst.com/post/1-click-rce-to-steal-your-moltbot-data-and-keys) - A newly discovered vulnerability that puts Moltbot users at risk, showcasing challenges in modern cybersecurity. [Comments](https://news.ycombinator.com/item?id=46848769)

* [US Government Also Received a Whistleblower Complaint That WhatsApp Chats Aren't Private](https://yro.slashdot.org/story/26/02/01/037202/us-government-also-received-a-whistleblower-complaint-that-whatsapp-chats-arent-private?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Allegations about privacy concerns surrounding WhatsApp's supposed end-to-end encrypted chats. [Comments](https://yro.slashdot.org/story/26/02/01/037202/us-government-also-received-a-whistleblower-complaint-that-whatsapp-chats-arent-private?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Artificial Intelligence

* [When 20-Year-Old Bill Gates Fought the World's First Software Pirates](https://news.slashdot.org/story/26/02/01/1915221/when-20-year-old-bill-gates-fought-the-worlds-first-software-pirates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A throwback to Bill Gates' early battles against software piracy. [Comments](https://news.slashdot.org/story/26/02/01/1915221/when-20-year-old-bill-gates-fought-the-worlds-first-software-pirates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Researchers Use D&D to Test AI's Long-Term Decision-Making Abilities](https://soylentnews.org/article.pl?sid=26/01/31/0054256&amp;from=rss) - Creative approaches are taken to evaluate AI's decisions through simulated role-playing frameworks. [Comments](https://soylentnews.org/article.pl?sid=26/01/31/0054256&amp;from=rss)

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

* [2026-02-01, 21:57:17](https://lobste.rs/s/uveyjh/my_very_fast_zero_allocation_webserver) - [My (very) fast zero-allocation webserver using OxCaml](https://anil.recoil.org/notes/oxcaml-httpz)
* [2026-02-01, 21:53:49](https://lobste.rs/s/skbved/audio_on_hp300) - [Audio on hp300](http://miod.online.fr/software/openbsd/stories/arcofi.html)
* [2026-02-01, 21:49:00](https://slashdot.org/story/26/02/01/2146224/bitcoin-drops-40-in-four-months-bloomberg-blames-absence-of-buyers-and-belief?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bitcoin Drops 40% in Four Months.  Bloomberg Blames Absence of Buyers and Belief](https://slashdot.org/story/26/02/01/2146224/bitcoin-drops-40-in-four-months-bloomberg-blames-absence-of-buyers-and-belief?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-01, 21:47:38](https://news.ycombinator.com/item?id=46849715) - [Iran summons families of exiled journalists to halt their activities](https://www.iranintl.com/en/202602017863)
* [2026-02-01, 21:33:02](https://news.ycombinator.com/item?id=46849588) - [Apple&apos;s Q4 2025 margin on Services was 76.5%](https://asymco.com/2026/02/01/margin-call-3/)
* [2026-02-01, 20:33:27](https://lobste.rs/s/z0mdor/archive_today_is_directing_ddos_attack) - [archive.today is directing a DDOS attack against my blog](https://gyrovague.com/2026/02/01/archive-today-is-directing-a-ddos-attack-against-my-blog/)
* [2026-02-01, 20:22:00](https://tech.slashdot.org/story/26/02/01/1959234/walmart-begins-building-out-nationwide-ev-charging-network-across-america?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Walmart Begins Building Out Nationwide EV Charging Network Across America](https://tech.slashdot.org/story/26/02/01/1959234/walmart-begins-building-out-nationwide-ev-charging-network-across-america?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-01, 19:47:47](https://news.ycombinator.com/item?id=46848769) - [1-Click RCE to steal your Moltbot data and keys](https://depthfirst.com/post/1-click-rce-to-steal-your-moltbot-data-and-keys)
* [2026-02-01, 19:39:19](https://lobste.rs/s/vldzbz/this_year_i_will_write_gui_for_my_emacs) - [This year, I will write a GUI for my Emacs clone](https://kyo.iroiro.party/en/posts/this-year-a-shitty-gui/)
* [2026-02-01, 19:38:45](https://news.ycombinator.com/item?id=46848699) - [TIL: Apple Broke Time Machine Again on Tahoe](https://taoofmac.com/space/til/2026/02/01/1630)
* [2026-02-01, 19:30:00](https://soylentnews.org/article.pl?sid=26/01/31/0151243&amp;from=rss) - [Motor Trend - Car Dealer Confidential](https://soylentnews.org/article.pl?sid=26/01/31/0151243&amp;from=rss)
* [2026-02-01, 19:22:00](https://news.slashdot.org/story/26/02/01/1915221/when-20-year-old-bill-gates-fought-the-worlds-first-software-pirates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [When 20-Year-Old Bill Gates Fought the World&apos;s First Software Pirates](https://news.slashdot.org/story/26/02/01/1915221/when-20-year-old-bill-gates-fought-the-worlds-first-software-pirates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-01, 19:11:46](https://lobste.rs/s/p8kpy0/remarkable_pro_colors) - [Remarkable Pro Colors](https://www.thregr.org/wavexx/rnd/20260201-remarkable_pro_colors/)
* [2026-02-01, 19:09:24](https://lobste.rs/s/fprlzs/building_blocks_for_peer_peer) - [Building blocks for peer-to-peer applications](https://p2panda.org/)
* [2026-02-01, 19:00:46](https://news.ycombinator.com/item?id=46848415) - [I taught my neighbor to keep the volume down](https://idiallo.com/blog/teaching-my-neighbor-to-keep-the-volume-down)
* [2026-02-01, 18:51:56](https://news.ycombinator.com/item?id=46848343) - [Light exposure and aspects of cognitive function in everyday life](https://www.nature.com/articles/s44271-025-00373-9)
* [2026-02-01, 18:41:54](https://news.ycombinator.com/item?id=46848260) - [Clearspace (YC W23) Is Hiring an Applied Researcher (ML)](https://www.ycombinator.com/companies/clearspace/jobs/GOWiDwp-research-engineer-at-clearspace)
* [2026-02-01, 18:05:11](https://lobste.rs/s/rzptdh/forget_technical_debt) - [Forget technical debt](https://www.ufried.com/blog/forget_technical_debt/)
* [2026-02-01, 18:00:30](https://news.ycombinator.com/item?id=46847958) - [Towards a science of scaling agent systems: When and why agent systems work](https://research.google/blog/towards-a-science-of-scaling-agent-systems-when-and-why-agent-systems-work/)
* [2026-02-01, 17:54:55](https://news.ycombinator.com/item?id=46847924) - [A Crisis comes to Wordle: Reusing old words](https://forkingmad.blog/wordle-crisis/)
* [2026-02-01, 17:36:57](https://news.ycombinator.com/item?id=46847780) - [Apple I Advertisement (1976)](http://apple1.chez.com/Apple1project/Gallery/Gallery.htm)
* [2026-02-01, 17:34:00](https://hardware.slashdot.org/story/26/02/01/0821212/fourth-us-wind-farm-project-blocked-by-trump-allowed-to-resume-construction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fourth US Wind Farm Project Blocked By Trump Allowed to Resume Construction](https://hardware.slashdot.org/story/26/02/01/0821212/fourth-us-wind-farm-project-blocked-by-trump-allowed-to-resume-construction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-01, 17:33:04](https://news.ycombinator.com/item?id=46847746) - [Aging muscle stem cells shift from rapid repair to long-term survival](https://phys.org/news/2026-01-sprint-marathon-aging-muscle-stem.html)
* [2026-02-01, 16:34:00](https://hardware.slashdot.org/story/26/02/01/0616236/scientists-create-programmable-autonomous-robots-smaller-than-a-grain-of-salt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Create Programmable, Autonomous Robots Smaller Than a Grain of Salt](https://hardware.slashdot.org/story/26/02/01/0616236/scientists-create-programmable-autonomous-robots-smaller-than-a-grain-of-salt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-01, 15:58:23](https://news.ycombinator.com/item?id=46847039) - [English professors double down on requiring printed copies of readings](https://yaledailynews.com/articles/english-professors-double-down-on-requiring-printed-copies-of-readings)
* [2026-02-01, 15:44:59](https://lobste.rs/s/sazoao/converting_floats_strings_quickly) - [Converting floats to strings quickly](https://lemire.me/blog/2026/02/01/converting-floats-to-strings-quickly/)
* [2026-02-01, 15:34:00](https://science.slashdot.org/story/26/02/01/0710229/microbes-in-space-mutated-and-developed-a-remarkable-ability?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microbes In Space Mutated and Developed a Remarkable Ability](https://science.slashdot.org/story/26/02/01/0710229/microbes-in-space-mutated-and-developed-a-remarkable-ability?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-01, 14:45:00](https://soylentnews.org/article.pl?sid=26/01/31/0148226&amp;from=rss) - [Voyager 2&apos;s Close Encounter With Uranus Wasn&apos;t in the Official Plan](https://soylentnews.org/article.pl?sid=26/01/31/0148226&amp;from=rss)
* [2026-02-01, 13:56:56](https://news.ycombinator.com/item?id=46846252) - [Adventure Game Studio: OSS software for creating adventure games](https://www.adventuregamestudio.co.uk/)
* [2026-02-01, 13:52:55](https://lobste.rs/s/eumqts/ashby_taught_us_we_have_fight_fire_with) - [Ashby taught us we have to fight fire with fire](https://surfingcomplexity.blog/2026/01/31/ashby-taught-us-we-have-to-fight-fire-with-fire/)
* [2026-02-01, 13:38:13](https://lobste.rs/s/lgnaoi/api_tooling_crisis_why_developers_are) - [The API Tooling Crisis: Why developers are abandoning Postman and its clones?](https://efpasia.github.io/blog/2025/12/24/api-tooling-crisis/)
* [2026-02-01, 13:25:18](https://lobste.rs/s/vkvr2e/code_signing_windows_apps_with_azure) - [Code signing Windows apps with Azure Artifact service](https://devclass.com/2026/01/14/code-signing-windows-apps-may-be-easier-and-more-secure-with-new-azure-artifact-service/)
* [2026-02-01, 12:34:00](https://hardware.slashdot.org/story/26/02/01/080244/99-of-new-us-energy-capacity-will-be-green-in-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [99% of New US Energy Capacity Will Be Green in 2026](https://hardware.slashdot.org/story/26/02/01/080244/99-of-new-us-energy-capacity-will-be-green-in-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-01, 10:57:20](https://news.ycombinator.com/item?id=46845244) - [Amiga Unix (Amix)](https://www.amigaunix.com/doku.php/home)
* [2026-02-01, 10:30:41](https://news.ycombinator.com/item?id=46845103) - [FOSDEM 2026 – Open-Source Conference in Brussels – Day#1 Recap](https://gyptazy.com/blog/fosdem-2026-opensource-conference-brussels/)
* [2026-02-01, 09:59:00](https://soylentnews.org/article.pl?sid=26/01/31/014212&amp;from=rss) - [How Often Do AI Chatbots Lead Users Down a Harmful Path?](https://soylentnews.org/article.pl?sid=26/01/31/014212&amp;from=rss)
* [2026-02-01, 09:53:57](https://lobste.rs/s/8o4mel/ship_your_toolchain_not_just) - [Ship Your Toolchain, Not Just Infrastructure](https://www.maxdaten.io/2026-01-31-ship-your-toolchain-not-just-infrastructure)
* [2026-02-01, 09:51:39](https://lobste.rs/s/h6atjk/way_run_ansible_2_19_on_old_operating) - [A way to run Ansible 2.19 on old operating systems like Ubuntu 18.04 with working Apt](https://raymii.org/s/blog/Ansible_2.19_on_old_ubuntu_18.04_with_working_apt.html)
* [2026-02-01, 09:44:01](https://news.ycombinator.com/item?id=46844870) - [Netbird – Open Source Zero Trust Networking](https://netbird.io/)
* [2026-02-01, 09:33:46](https://news.ycombinator.com/item?id=46844822) - [What I learned building an opinionated and minimal coding agent](https://mariozechner.at/posts/2025-11-30-pi-coding-agent/)
* [2026-02-01, 08:34:00](https://yro.slashdot.org/story/26/02/01/0540213/china-executes-11-members-of-myanmar-scam-mafia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Executes 11 Members of Myanmar Scam Mafia](https://yro.slashdot.org/story/26/02/01/0540213/china-executes-11-members-of-myanmar-scam-mafia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-01, 08:25:03](https://lobste.rs/s/vwwnjc/cg_sql_sql_dialect_compiler_c_for_sqlite3) - [CG/SQL - SQL dialect compiler to C for sqlite3 mimicking stored procedures](https://ricomariani.github.io/CG-SQL-author/)
* [2026-02-01, 08:13:04](https://lobste.rs/s/eug4ie/contracts_nix) - [Contracts in Nix](https://sraka.xyz/posts/contracts.html)
* [2026-02-01, 08:02:25](https://lobste.rs/s/zhhlod/coding_agent_vms_on_nixos_with_microvm_nix) - [Coding Agent VMs on NixOS with microvm.nix](https://michael.stapelberg.ch/posts/2026-02-01-coding-agent-microvm-nix/)
* [2026-02-01, 07:50:51](https://news.ycombinator.com/item?id=46844350) - [The Book of PF, 4th edition](https://nostarch.com/book-of-pf-4th-edition)
* [2026-02-01, 06:20:02](https://lobste.rs/s/rc9mvx/solving_package_management_via) - [Solving Package Management via Hypergraph Dependency Resolution](https://arxiv.org/pdf/2506.10803)
* [2026-02-01, 05:34:00](https://it.slashdot.org/story/26/02/01/059206/five-french-ubisoft-unions-call-for-massive-international-strike-over-cost-cutting-and-ending-of-remote-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Five French Ubisoft Unions Call For Massive International Strike Over &apos;Cost-Cutting&apos; and Ending of Remote Work](https://it.slashdot.org/story/26/02/01/059206/five-french-ubisoft-unions-call-for-massive-international-strike-over-cost-cutting-and-ending-of-remote-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-01, 05:15:00](https://soylentnews.org/article.pl?sid=26/01/31/0058200&amp;from=rss) - [The Path to a Sovereign Tech Stack is Via a Commodified Tech Stack](https://soylentnews.org/article.pl?sid=26/01/31/0058200&amp;from=rss)
* [2026-02-01, 04:00:22](https://lobste.rs/s/zr3igq/git_cola_highly_caffeinated_git_gui) - [git-cola: The highly caffeinated Git GUI](https://github.com/git-cola/git-cola)
* [2026-02-01, 03:30:40](https://lobste.rs/s/g9mizf/how_apple_hooks_fifty_thousand_methods) - [How Apple Hooks Fifty Thousand Methods](https://www.youtube.com/watch?v=SuQGQ1vh9k0)
* [2026-02-01, 03:11:00](https://yro.slashdot.org/story/26/02/01/037202/us-government-also-received-a-whistleblower-complaint-that-whatsapp-chats-arent-private?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Government Also Received a Whistleblower Complaint That WhatsApp Chats Aren&apos;t Private](https://yro.slashdot.org/story/26/02/01/037202/us-government-also-received-a-whistleblower-complaint-that-whatsapp-chats-arent-private?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-01, 01:03:23](https://news.ycombinator.com/item?id=46842603) - [List animals until failure](https://rose.systems/animalist/)
* [2026-02-01, 00:28:52](https://lobste.rs/s/jnttzy/praise_dry_run) - [In Praise of –dry-run](https://henrikwarne.com/2026/01/31/in-praise-of-dry-run/)
* [2026-02-01, 00:24:00](https://soylentnews.org/article.pl?sid=26/01/31/0054256&amp;from=rss) - [Researchers Use D&amp;D to Test AI&apos;s Long-Term Decision-Making Abilities](https://soylentnews.org/article.pl?sid=26/01/31/0054256&amp;from=rss)
* [2026-01-31, 23:46:00](https://slashdot.org/story/26/01/31/2344202/ai-use-at-work-has-increased-gallup-poll-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Use at Work Has Increased, Gallup Poll Finds](https://slashdot.org/story/26/01/31/2344202/ai-use-at-work-has-increased-gallup-poll-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-31, 22:34:00](https://tech.slashdot.org/story/26/01/31/2224232/electric-flying-cars-now-for-sale-by-california-company-pivotal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Electric Flying Cars Now for Sale by California Company Pivotal ](https://tech.slashdot.org/story/26/01/31/2224232/electric-flying-cars-now-for-sale-by-california-company-pivotal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-31, 21:42:30](https://lobste.rs/s/fiuesm/this_year_llvm_2025) - [This year in LLVM (2025)](https://www.npopov.com/2026/01/31/This-year-in-LLVM-2025.html)
* [2026-01-31, 21:34:00](https://apple.slashdot.org/story/26/01/31/2038231/apple-switches-to-build-to-order-systems-on-its-web-site?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Switches to Build-to-Order Systems on Its Web Site](https://apple.slashdot.org/story/26/01/31/2038231/apple-switches-to-build-to-order-systems-on-its-web-site?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-31, 21:04:40](https://lobste.rs/s/uxigje/outsourcing_thinking) - [Outsourcing thinking](https://erikjohannes.no/posts/20260130-outsourcing-thinking/index.html)
* [2026-01-31, 20:34:00](https://hardware.slashdot.org/story/26/01/31/205245/nvidia-ceo-denies-openais-100b-investment-from-nvidia-is-stalled?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia CEO Denies OpenAI&apos;s $100B Investment from Nvidia is &apos;Stalled&apos;](https://hardware.slashdot.org/story/26/01/31/205245/nvidia-ceo-denies-openais-100b-investment-from-nvidia-is-stalled?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-31, 19:43:00](https://soylentnews.org/article.pl?sid=26/01/30/1620239&amp;from=rss) - [Linux after Linus?](https://soylentnews.org/article.pl?sid=26/01/30/1620239&amp;from=rss)
* [2026-01-31, 19:34:00](https://science.slashdot.org/story/26/01/31/0736248/blue-origin-announces-two-year-pause-in-space-tourism---to-focus-on-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Blue Origin Announces Two-Year Pause in Space Tourism - to Focus on the Moon](https://science.slashdot.org/story/26/01/31/0736248/blue-origin-announces-two-year-pause-in-space-tourism---to-focus-on-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-31, 18:48:17](https://lobste.rs/s/bpe2ma/pi_minimal_agent_within_openclaw) - [Pi: The Minimal Agent Within OpenClaw](https://lucumr.pocoo.org/2026/1/31/pi/)
* [2026-01-31, 18:07:41](https://lobste.rs/s/cnrtxl/surprising_attention_on_sprites_exe_dev) - [The surprising attention on sprites, exe.dev, and shellbox](https://lalitm.com/trying-sprites-exedev-shellbox/)
* [2026-01-31, 15:00:00](https://soylentnews.org/article.pl?sid=26/01/30/0637214&amp;from=rss) - [ Notes on the Intel 8086 Processor&apos;s Arithmetic-logic Unit ](https://soylentnews.org/article.pl?sid=26/01/30/0637214&amp;from=rss)
* [2026-01-31, 11:19:32](https://lobste.rs/s/koagyg/guix_system_first_impressions_as_nix_user) - [Guix System First Impressions as a Nix User](https://nemin.hu/guix.html)
* [2026-01-31, 10:19:00](https://soylentnews.org/article.pl?sid=26/01/30/0627240&amp;from=rss) - [Signal President Warns AI Agents Are Making Encryption Irrelevant](https://soylentnews.org/article.pl?sid=26/01/30/0627240&amp;from=rss)
* [2026-01-31, 05:42:00](https://soylentnews.org/article.pl?sid=26/01/30/0623217&amp;from=rss) - [Remembering the YF-23 Stealth Fighter](https://soylentnews.org/article.pl?sid=26/01/30/0623217&amp;from=rss)
* [2026-01-31, 01:01:00](https://soylentnews.org/article.pl?sid=26/01/30/068202&amp;from=rss) - [County Pays $600,000 to Pentesters It Arrested for Assessing Courthouse Security](https://soylentnews.org/article.pl?sid=26/01/30/068202&amp;from=rss)
* [2026-01-30, 20:22:00](https://soylentnews.org/article.pl?sid=26/01/28/2253239&amp;from=rss) - [A Look at Potential Problems with Future AI](https://soylentnews.org/article.pl?sid=26/01/28/2253239&amp;from=rss)
* [2026-01-30, 19:41:13](https://news.ycombinator.com/item?id=46828907) - [Jack Kerouac&apos;s 37 metre-long, first draft scroll of On the Road to be auctioned](https://www.theguardian.com/books/2026/jan/30/jack-kerouac-on-the-road-first-draft-scroll-to-be-auctioned)
* [2026-01-30, 16:02:53](https://news.ycombinator.com/item?id=46826011) - [Efficient String Compression for Modern Database Systems](https://cedardb.com/blog/string_compression/)
* [2026-01-30, 15:38:00](https://soylentnews.org/article.pl?sid=26/01/28/2248256&amp;from=rss) - [Salty Facts: Takeaways Have More Salt Than Labels Claim](https://soylentnews.org/article.pl?sid=26/01/28/2248256&amp;from=rss)
* [2026-01-30, 10:46:00](https://soylentnews.org/article.pl?sid=26/01/28/2247217&amp;from=rss) - [Executives Keep Overestimating AI Benefits](https://soylentnews.org/article.pl?sid=26/01/28/2247217&amp;from=rss)
* [2026-01-30, 06:10:00](https://soylentnews.org/article.pl?sid=26/01/28/2241225&amp;from=rss) - [Musk&apos;s X Releases Source Code for Platform&apos;s Algorithm](https://soylentnews.org/article.pl?sid=26/01/28/2241225&amp;from=rss)
* [2026-01-30, 05:31:29](https://news.ycombinator.com/item?id=46820874) - [Typechecking is undecidable when &apos;type&apos; is a type (1989) [pdf]](https://dspace.mit.edu/bitstream/handle/1721.1/149366/MIT-LCS-TR-458.pdf?sequence=6)
* [2026-01-30, 04:59:37](https://news.ycombinator.com/item?id=46820691) - [Show HN: ÆTHRA – Writing Music as Code](https://news.ycombinator.com/item?id=46820691)
* [2026-01-30, 01:15:00](https://soylentnews.org/article.pl?sid=26/01/28/2237224&amp;from=rss) - [For the Price of Netflix, Crooks Can Rent AI Crime Ops](https://soylentnews.org/article.pl?sid=26/01/28/2237224&amp;from=rss)
* [2026-01-29, 20:30:00](https://soylentnews.org/article.pl?sid=26/01/27/0538204&amp;from=rss) - [Four Arrested Following $1.6 Million NFT Heist in the Netherlands](https://soylentnews.org/article.pl?sid=26/01/27/0538204&amp;from=rss)
* [2026-01-29, 16:54:39](https://news.ycombinator.com/item?id=46812795) - [MicroPythonOS graphical operating system delivers Android-like user experience](https://www.cnx-software.com/2026/01/29/micropythonos-graphical-operating-system-delivers-android-like-user-experience-on-microcontrollers/)
* [2026-01-29, 15:40:00](https://soylentnews.org/article.pl?sid=26/01/27/0515229&amp;from=rss) - [Microsoft Admits Windows 11 Update Is Nuking System Drives but There&apos;s &apos;A Limited Number Of Reports&apos;](https://soylentnews.org/article.pl?sid=26/01/27/0515229&amp;from=rss)
* [2026-01-29, 10:59:00](https://soylentnews.org/article.pl?sid=26/01/27/0441241&amp;from=rss) - [Breakthrough Wireless Transceiver Transmits Data 24 Times Faster Than 5G Connections](https://soylentnews.org/article.pl?sid=26/01/27/0441241&amp;from=rss)
* [2026-01-29, 06:11:00](https://soylentnews.org/article.pl?sid=26/01/27/0433200&amp;from=rss) - [Red Dwarfs are Too Dim to Generate Complex Life](https://soylentnews.org/article.pl?sid=26/01/27/0433200&amp;from=rss)
* [2026-01-29, 02:00:40](https://news.ycombinator.com/item?id=46804754) - [A web server on a single floppy disk](http://floppy.ddns.net/)
* [2026-01-29, 01:30:00](https://soylentnews.org/article.pl?sid=26/01/27/0352207&amp;from=rss) - [AI is Already Writing Almost One-Third of New Software Code](https://soylentnews.org/article.pl?sid=26/01/27/0352207&amp;from=rss)
* [2026-01-28, 20:39:00](https://soylentnews.org/article.pl?sid=26/01/26/1911209&amp;from=rss) - [The Return of Digg, and the Proliferation of Cancel Culture](https://soylentnews.org/article.pl?sid=26/01/26/1911209&amp;from=rss)
* [2026-01-28, 18:20:35](https://news.ycombinator.com/item?id=46799435) - [VisualJJ – Jujutsu in Visual Studio Code](https://www.visualjj.com/)
* [2026-01-28, 15:55:00](https://soylentnews.org/article.pl?sid=26/01/26/197234&amp;from=rss) - [Socializing Alone: The Downside of Communication Technology](https://soylentnews.org/article.pl?sid=26/01/26/197234&amp;from=rss)
* [2026-01-28, 11:13:00](https://soylentnews.org/article.pl?sid=26/01/26/195201&amp;from=rss) - [TSMC Says AI Demand is “Endless” After Record Q4 Earnings](https://soylentnews.org/article.pl?sid=26/01/26/195201&amp;from=rss)
* [2026-01-28, 06:27:00](https://soylentnews.org/article.pl?sid=26/01/26/192227&amp;from=rss) - [Design Your Next Building Out of Bamboo](https://soylentnews.org/article.pl?sid=26/01/26/192227&amp;from=rss)
* [2026-01-28, 01:42:00](https://soylentnews.org/article.pl?sid=26/01/26/191227&amp;from=rss) - [North Sea Winds Of Change](https://soylentnews.org/article.pl?sid=26/01/26/191227&amp;from=rss)
