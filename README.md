# [News Summary](https://kherrick.github.io/news-summary/)

## Emerging Technologies and Prototyping

* [Websites Hosting Major US Climate Reports Taken Down](https://tech.slashdot.org/story/25/07/04/0019202/websites-hosting-major-us-climate-reports-taken-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Major US climate report hosting websites have been unexpectedly taken down, raising concerns over access to essential environmental data.

* [You Can Now Rent a Flesh Computer Grown In a British Lab](https://hardware.slashdot.org/story/25/07/04/002225/you-can-now-rent-a-flesh-computer-grown-in-a-british-lab?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Explore a bizarre new innovation: flesh-based computers available for rent from a British lab.

* [Introducing the first alpha of Turso: The next evolution of SQLite](https://turso.tech/blog/turso-the-next-evolution-of-sqlite?ref=console.dev) - Turso introduces a new SQLite evolution tailored for scaling and advanced use cases.

* [A catamorphic lambda-calculus interpreter](https://www.michaelpj.com/blog/2018/04/08/catamorphic-lc-interpreter.html) - A deep dive into an innovative lambda-calculus interpreter to understand functional programming better.

## Gaming and Creative Coding

* [Show HN: I vibe coded a tower defense game and documented the whole process](https://github.com/maciej-trebacz/tower-of-time-game) - A creator showcases their journey through designing a tower defense game, complete with a coding log.

* [Writing a Game Boy Emulator in OCaml](https://linoscope.github.io/writing-a-game-boy-emulator-in-ocaml/) - Learn how to build a nostalgic Game Boy emulator using the OCaml programming language.

* [DRM Panic QR code generator](https://rust-for-linux.com/drm-panic-qr-code-generator) - A quirky tool for generating DRM panic QR codes using Rust, catering to developers exploring hardware.

* [Microsoft Copilot Joins ChatGPT At the Feet of the Mighty Atari 2600 Video Chess](https://slashdot.org/story/25/07/03/2028252/microsoft-copilot-joins-chatgpt-at-the-feet-of-the-mighty-atari-2600-video-chess?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Microsoft’s AI tools revisit retro gaming innovation roots.

## AI, Ethics, and Future Audiences

* [Is there a no-AI audience?](https://thatshubham.com/blog/ai) - Can industries identify and cater to an AI-free audience amidst rising artificial intelligence?

* [Researchers Caught Hiding AI Prompts in Research Papers To Get Favorable Reviews](https://science.slashdot.org/story/25/07/03/1859237/researchers-caught-hiding-ai-prompts-in-research-papers-to-get-favorable-reviews?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A revelation of unethical AI prompt masking techniques in academia.

* [37 Things I Learned About Information Retrieval in Two Years at a Vector Database Company](https://www.leoniemonigatti.com/blog/what_i_learned.html) - Industry insights into vector databases and information retrieval intricacies.

* [Flounder Mode – Kevin Kelly on a different way to do great work](https://joincolossus.com/article/flounder-mode/) - Kevin Kelly introduces a reflective take on productivity and AI's impact on creativity.

## Science Breakthroughs and Environmental Impact

* [Sterilized Flies To Be Released In Order To Stop Flesh-Eating Maggot Infestation](https://science.slashdot.org/story/25/07/03/2356217/sterilized-flies-to-be-released-in-order-to-stop-flesh-eating-maggot-infestation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Scientific battle against maggot infestations using sterilized flies as a clean intervention.

* [Earthquake-Induced Electricity Offers Answer to Mystery of Gold Nugget Formation](https://soylentnews.org/article.pl?sid=25/07/02/1636207&amp;from=rss) - Investigating earthquake phenomena to solve the puzzle of natural nugget formation.

* [Norway Reached 96.9% Market Share For EVs In June](https://tech.slashdot.org/story/25/07/03/2341234/norway-reached-969-market-share-for-evs-in-june?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Norway continues its electric vehicle leadership with near-total market dominance.

* [Why Are the Physical Constants of the Universe So Perfect for Life?](https://soylentnews.org/article.pl?sid=25/06/29/1626204&amp;from=rss) - A probing analysis of the universe’s extraordinary suitability for life.

## Cybersecurity Challenges & Tech Ethics

* [Nonce CSP bypass using Disk Cache](https://jorianwoltjer.com/blog/p/research/nonce-csp-bypass-using-disk-cache) - A study exposing flaws in content security policies risking security bypasses.

* [Taking over 60k spyware user accounts with SQL injection](https://ericdaigle.ca/posts/taking-over-60k-spyware-user-accounts/) - A real-world case study of mass spyware account exploitation.

* [Mexican Drug Cartel Hacker Spied on FBI Official's Phone to Track and Kill Informants](https://soylentnews.org/article.pl?sid=25/07/02/0110229&amp;from=rss) - Chilling cyber-espionage insights into cartel activities and consequences.

* [Bluetooth Flaws Could Let Hackers Spy Through Your Microphone](https://soylentnews.org/article.pl?sid=25/06/30/1153228&amp;from=rss) - Serious revelations about potential Bluetooth vulnerabilities and privacy breaches.

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

* [2025-07-04, 13:00:00](https://tech.slashdot.org/story/25/07/04/0019202/websites-hosting-major-us-climate-reports-taken-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Websites Hosting Major US Climate Reports Taken Down](https://tech.slashdot.org/story/25/07/04/0019202/websites-hosting-major-us-climate-reports-taken-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-04, 12:34:49](https://news.ycombinator.com/item?id=44463967) - [Show HN: I vibe coded a tower defense game and documented the whole process](https://github.com/maciej-trebacz/tower-of-time-game)
* [2025-07-04, 12:33:07](https://news.ycombinator.com/item?id=44463959) - [Is there a no-AI audience?](https://thatshubham.com/blog/ai)
* [2025-07-04, 12:08:24](https://news.ycombinator.com/item?id=44463813) - [Is an Intel N100 or N150 a better value than a Raspberry Pi?](https://www.jeffgeerling.com/blog/2025/intel-n100-better-value-raspberry-pi)
* [2025-07-04, 12:00:53](https://news.ycombinator.com/item?id=44463773) - [Enhanced Radar (YC W25) is hiring a founding engineer](https://news.ycombinator.com/item?id=44463773)
* [2025-07-04, 11:57:00](https://soylentnews.org/article.pl?sid=25/07/02/1648236&amp;from=rss) - [Two Years Later, Meta is Making DMs on Threads Official](https://soylentnews.org/article.pl?sid=25/07/02/1648236&amp;from=rss)
* [2025-07-04, 11:55:57](https://news.ycombinator.com/item?id=44463747) - [Show HN: BunkerWeb – the open-source and cloud-native WAF](https://docs.bunkerweb.io/latest/)
* [2025-07-04, 11:48:12](https://news.ycombinator.com/item?id=44463698) - [Show HN: Fast Thermodynamic Calculations in Python](https://dlr-institute-of-future-fuels.github.io/gaspype/)
* [2025-07-04, 11:42:35](https://news.ycombinator.com/item?id=44463654) - [A Rust-TypeScript integration](https://github.com/beeeeep54/rust-typescript)
* [2025-07-04, 11:39:00](https://news.ycombinator.com/item?id=44463631) - [How to render a mesh gradient using RBF interpolation](https://www.notion.so/Smooth-Mesh-Gradients-with-RBF-Interpolation-1ba8eeb5a3e68046b34cf997fe67d3c1?source=copy_link)
* [2025-07-04, 10:38:54](https://lobste.rs/s/zixaut/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/zixaut/what_are_you_doing_this_weekend)
* [2025-07-04, 10:00:00](https://entertainment.slashdot.org/story/25/07/04/008215/the-last-of-us-co-creator-neil-druckmann-exits-hbo-show?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Last of Us Co-Creator Neil Druckmann Exits HBO Show](https://entertainment.slashdot.org/story/25/07/04/008215/the-last-of-us-co-creator-neil-druckmann-exits-hbo-show?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-04, 09:43:04](https://news.ycombinator.com/item?id=44462947) - [Larry (Cat)](https://en.wikipedia.org/wiki/Larry_(cat))
* [2025-07-04, 09:34:56](https://news.ycombinator.com/item?id=44462896) - [Writing a Game Boy Emulator in OCaml](https://linoscope.github.io/writing-a-game-boy-emulator-in-ocaml/)
* [2025-07-04, 08:44:16](https://lobste.rs/s/chcyrx/nonce_csp_bypass_using_disk_cache) - [Nonce CSP bypass using Disk Cache](https://jorianwoltjer.com/blog/p/research/nonce-csp-bypass-using-disk-cache)
* [2025-07-04, 08:27:02](https://lobste.rs/s/wphcsj/rise_whatever) - [The rise of Whatever](https://eev.ee/blog/2025/07/03/the-rise-of-whatever/)
* [2025-07-04, 07:59:02](https://lobste.rs/s/0szaso/zig_roadmap_2026) - [Zig Roadmap 2026](https://www.youtube.com/watch?v=x3hOiOcbgeA)
* [2025-07-04, 07:58:51](https://lobste.rs/s/yb1elm/37_things_i_learned_about_information) - [37 Things I Learned About Information Retrieval in Two Years at a Vector Database Company](https://www.leoniemonigatti.com/blog/what_i_learned.html)
* [2025-07-04, 07:47:15](https://news.ycombinator.com/item?id=44462174) - [DRM Panic QR code generator](https://rust-for-linux.com/drm-panic-qr-code-generator)
* [2025-07-04, 07:11:00](https://soylentnews.org/article.pl?sid=25/07/02/1645202&amp;from=rss) - [Norwegian Northern Lights Operational ](https://soylentnews.org/article.pl?sid=25/07/02/1645202&amp;from=rss)
* [2025-07-04, 07:00:00](https://hardware.slashdot.org/story/25/07/04/002225/you-can-now-rent-a-flesh-computer-grown-in-a-british-lab?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [You Can Now Rent a Flesh Computer Grown In a British Lab](https://hardware.slashdot.org/story/25/07/04/002225/you-can-now-rent-a-flesh-computer-grown-in-a-british-lab?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-04, 06:31:33](https://lobste.rs/s/gzzo0m/catamorphic_lambda_calculus) - [A catamorphic lambda-calculus interpreter](https://www.michaelpj.com/blog/2018/04/08/catamorphic-lc-interpreter.html)
* [2025-07-04, 05:54:08](https://news.ycombinator.com/item?id=44461523) - [One Billion Cells – Another Multiplayer Demo with Clojure](https://cells.andersmurphy.com/)
* [2025-07-04, 05:35:00](https://soylentnews.org/meta/article.pl?sid=25/07/04/0527252&amp;from=rss) - [Happy Independence Day !!!](https://soylentnews.org/meta/article.pl?sid=25/07/04/0527252&amp;from=rss)
* [2025-07-04, 04:48:32](https://news.ycombinator.com/item?id=44461208) - [The Rise of Whatever](https://eev.ee/blog/2025/07/03/the-rise-of-whatever/)
* [2025-07-04, 03:30:00](https://science.slashdot.org/story/25/07/03/2356217/sterilized-flies-to-be-released-in-order-to-stop-flesh-eating-maggot-infestation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sterilized Flies To Be Released In Order To Stop Flesh-Eating Maggot Infestation](https://science.slashdot.org/story/25/07/03/2356217/sterilized-flies-to-be-released-in-order-to-stop-flesh-eating-maggot-infestation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-04, 02:46:34](https://lobste.rs/s/cdrqny/tools_code_is_all_you_need) - [Tools: Code Is All You Need](https://lucumr.pocoo.org/2025/7/3/tools/)
* [2025-07-04, 02:27:00](https://soylentnews.org/article.pl?sid=25/07/02/1640204&amp;from=rss) - [China Could Be The World&apos;s Top Semiconductor Foundry Hub By 2030](https://soylentnews.org/article.pl?sid=25/07/02/1640204&amp;from=rss)
* [2025-07-04, 02:10:00](https://news.slashdot.org/story/25/07/03/2349257/wells-fargo-scandal-pushed-customers-toward-fintech-says-uc-davis-study?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wells Fargo Scandal Pushed Customers Toward Fintech, Says UC Davis Study](https://news.slashdot.org/story/25/07/03/2349257/wells-fargo-scandal-pushed-customers-toward-fintech-says-uc-davis-study?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-04, 02:04:55](https://news.ycombinator.com/item?id=44460552) - [My open source project was relicensed by a YC company [license updated]](https://twitter.com/soham_btw/status/1940952786491027886)
* [2025-07-04, 01:30:00](https://tech.slashdot.org/story/25/07/03/2341234/norway-reached-969-market-share-for-evs-in-june?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Norway Reached 96.9% Market Share For EVs In June](https://tech.slashdot.org/story/25/07/03/2341234/norway-reached-969-market-share-for-evs-in-june?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-04, 00:50:00](https://news.slashdot.org/story/25/07/03/2335200/ripple-applies-for-us-banking-license?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ripple Applies For US Banking License](https://news.slashdot.org/story/25/07/03/2335200/ripple-applies-for-us-banking-license?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-04, 00:10:00](https://hardware.slashdot.org/story/25/07/03/2034239/samsung-delays-44-billion-texas-chip-fab-because-there-are-no-customers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Samsung Delays $44 Billion Texas Chip Fab Because &apos;There Are No Customers&apos;](https://hardware.slashdot.org/story/25/07/03/2034239/samsung-delays-44-billion-texas-chip-fab-because-there-are-no-customers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-03, 23:59:49](https://lobste.rs/s/apuviy/tiny_great_languages_mouse) - [Tiny Great Languages: MOUSE](https://zserge.com/posts/langs-mouse/)
* [2025-07-03, 23:30:00](https://slashdot.org/story/25/07/03/2028252/microsoft-copilot-joins-chatgpt-at-the-feet-of-the-mighty-atari-2600-video-chess?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Copilot Joins ChatGPT At the Feet of the Mighty Atari 2600 Video Chess](https://slashdot.org/story/25/07/03/2028252/microsoft-copilot-joins-chatgpt-at-the-feet-of-the-mighty-atari-2600-video-chess?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-03, 22:50:00](https://games.slashdot.org/story/25/07/03/2022217/stop-killing-games-consumer-movement-hits-major-milestones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Stop Killing Games&apos; Consumer Movement Hits Major Milestones](https://games.slashdot.org/story/25/07/03/2022217/stop-killing-games-consumer-movement-hits-major-milestones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-03, 22:21:12](https://lobste.rs/s/l4p4sc/coding_advent) - [Coding in Advent](https://panadestein.github.io/blog/posts/aoc24.html)
* [2025-07-03, 22:10:00](https://news.slashdot.org/story/25/07/03/2018215/nearly-1000-britons-will-keep-four-day-work-week-after-trial?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nearly 1,000 Britons Will Keep Four-Day Work Week After Trial](https://news.slashdot.org/story/25/07/03/2018215/nearly-1000-britons-will-keep-four-day-work-week-after-trial?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-03, 22:05:56](https://lobste.rs/s/seqz3x/writing_little_gosh) - [writing a little gosh](https://flak.tedunangst.com/post/writing-a-gosh)
* [2025-07-03, 21:43:00](https://soylentnews.org/article.pl?sid=25/07/02/1636207&amp;from=rss) - [Earthquake-Induced Electricity Offers Answer to Mystery of Gold Nugget Formation](https://soylentnews.org/article.pl?sid=25/07/02/1636207&amp;from=rss)
* [2025-07-03, 21:30:00](https://tech.slashdot.org/story/25/07/03/1918222/google-ends-recipe-pilot-that-left-creators-fearing-web-traffic-hit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Ends Recipe Pilot That Left Creators Fearing Web-Traffic Hit](https://tech.slashdot.org/story/25/07/03/1918222/google-ends-recipe-pilot-that-left-creators-fearing-web-traffic-hit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-03, 20:50:00](https://it.slashdot.org/story/25/07/03/1912216/chatgpt-creates-phishers-paradise-by-recommending-the-wrong-urls-for-major-companies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ChatGPT Creates Phisher&apos;s Paradise By Recommending the Wrong URLs for Major Companies](https://it.slashdot.org/story/25/07/03/1912216/chatgpt-creates-phishers-paradise-by-recommending-the-wrong-urls-for-major-companies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-03, 20:28:57](https://news.ycombinator.com/item?id=44458890) - [Wind Knitting Factory](https://www.merelkarhof.nl/work/wind-knitting-factory)
* [2025-07-03, 20:23:30](https://lobste.rs/s/yx4f4i/when_ai_codes_what_s_left_for_me) - [When AI Codes, What’s Left for me?](https://corecursive.com/coding-agents/)
* [2025-07-03, 20:10:00](https://science.slashdot.org/story/25/07/03/1859237/researchers-caught-hiding-ai-prompts-in-research-papers-to-get-favorable-reviews?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Researchers Caught Hiding AI Prompts in Research Papers To Get Favorable Reviews](https://science.slashdot.org/story/25/07/03/1859237/researchers-caught-hiding-ai-prompts-in-research-papers-to-get-favorable-reviews?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-03, 19:52:39](https://lobste.rs/s/8s8chj/our_fullstack_architecture_eta_htmx_lit) - [Our Fullstack Architecture: Eta, HTMX, and Lit](https://www.lorenstew.art/blog/eta-htmx-lit-stack)
* [2025-07-03, 19:49:02](https://lobste.rs/s/52gism/scary_surprisingly_deep_rabbit_hole_rust) - [The scary and surprisingly deep rabbit hole of Rust&apos;s temporaries](https://taping-memory.dev/temporaries-rabbit-hole/)
* [2025-07-03, 19:30:00](https://it.slashdot.org/story/25/07/03/1833218/a-lot-of-product-makers-snub-right-to-repair-laws?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Lot of Product Makers Snub Right To Repair Laws](https://it.slashdot.org/story/25/07/03/1833218/a-lot-of-product-makers-snub-right-to-repair-laws?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-03, 17:46:44](https://lobste.rs/s/xdfydi/taming_agentic_engineering_prompts_are) - [Taming agentic engineering - Prompts are code, .json/.md files are state](https://mariozechner.at/posts/2025-06-02-prompts-are-code/)
* [2025-07-03, 17:11:33](https://lobste.rs/s/yncgug/introducing_tmux_rs) - [Introducing tmux-rs](https://richardscollin.github.io/tmux-rs/)
* [2025-07-03, 16:56:00](https://soylentnews.org/article.pl?sid=25/07/02/1214228&amp;from=rss) - [Why the Sun is So Good at Evaporating Water](https://soylentnews.org/article.pl?sid=25/07/02/1214228&amp;from=rss)
* [2025-07-03, 16:44:18](https://news.ycombinator.com/item?id=44456904) - [Launch HN: K-Scale Labs (YC W24) – Open-Source Humanoid Robots](https://news.ycombinator.com/item?id=44456904)
* [2025-07-03, 16:34:51](https://news.ycombinator.com/item?id=44456779) - [AV1@Scale: Film Grain Synthesis, The Awakening](https://netflixtechblog.com/av1-scale-film-grain-synthesis-the-awakening-ee09cfdff40b)
* [2025-07-03, 15:35:34](https://news.ycombinator.com/item?id=44456135) - [Poor Man&apos;s Back End-as-a-Service (BaaS), Similar to Firebase/Supabase/Pocketbase](https://github.com/zserge/pennybase)
* [2025-07-03, 15:18:01](https://news.ycombinator.com/item?id=44455933) - [Flounder Mode – Kevin Kelly on a different way to do great work](https://joincolossus.com/article/flounder-mode/)
* [2025-07-03, 15:03:14](https://news.ycombinator.com/item?id=44455787) - [Introducing tmux-rs](https://richardscollin.github.io/tmux-rs/)
* [2025-07-03, 14:56:29](https://lobste.rs/s/vz1z3u/taking_over_60k_spyware_user_accounts) - [Taking over 60k spyware user accounts with SQL injection](https://ericdaigle.ca/posts/taking-over-60k-spyware-user-accounts/)
* [2025-07-03, 14:16:06](https://lobste.rs/s/8we4dn/lucky_13_lobsters) - [Lucky 13 Lobsters](https://lobste.rs/s/8we4dn/lucky_13_lobsters)
* [2025-07-03, 14:05:05](https://news.ycombinator.com/item?id=44455222) - [Peasant Railgun](https://knightsdigest.com/what-exactly-is-the-peasant-railgun-in-dd-5e/)
* [2025-07-03, 13:07:52](https://lobste.rs/s/msjy28/10_features_d_i_love) - [10 features of D that I love](https://bradley.chatha.dev/blog/dlang-propaganda/features-of-d-that-i-love/)
* [2025-07-03, 12:46:13](https://lobste.rs/s/irjbzn/most_mysterious_bug_i_solved_at_work) - [The most mysterious bug I solved at work](https://cadence.moe/blog/2025-07-02-the-most-mysterious-bug-i-solved-at-work)
* [2025-07-03, 12:22:38](https://lobste.rs/s/zslatp/goharddrive_leaked_personal_data_for) - [goHardDrive Leaked Personal Data for Thousands of Customers](https://mtlynch.io/goharddrive-leak/)
* [2025-07-03, 12:11:00](https://soylentnews.org/article.pl?sid=25/07/02/1153235&amp;from=rss) - [Deutsche Bahn Train Hits 405 km/h Without Falling to Bits](https://soylentnews.org/article.pl?sid=25/07/02/1153235&amp;from=rss)
* [2025-07-03, 09:05:41](https://lobste.rs/s/wiu8md/writing_code_was_never_bottleneck) - [Writing Code Was Never The Bottleneck](https://ordep.dev/posts/writing-code-was-never-the-bottleneck)
* [2025-07-03, 08:47:38](https://lobste.rs/s/rpb1g7/rfc_9799_acme_extensions_for_onion) - [RFC 9799: ACME Extensions for \&quot;.onion\&quot;](https://datatracker.ietf.org/doc/rfc9799/)
* [2025-07-03, 08:16:00](https://soylentnews.org/article.pl?sid=25/07/02/1148257&amp;from=rss) - [Arm-Based Servers to Grow 70% This Year](https://soylentnews.org/article.pl?sid=25/07/02/1148257&amp;from=rss)
* [2025-07-03, 07:59:55](https://lobste.rs/s/rxdnnq/introducing_first_alpha_turso_next) - [Introducing the first alpha of Turso: The next evolution of SQLite](https://turso.tech/blog/turso-the-next-evolution-of-sqlite?ref=console.dev)
* [2025-07-03, 03:33:00](https://soylentnews.org/article.pl?sid=25/07/02/1144216&amp;from=rss) - [Bruce Schneier on How Cybersecurity Fears Affect Confidence in Voting Systems](https://soylentnews.org/article.pl?sid=25/07/02/1144216&amp;from=rss)
* [2025-07-03, 01:40:11](https://lobste.rs/s/pdl32t/copyleft_next) - [copyleft-next](https://next.copyleft.org/)
* [2025-07-02, 22:50:00](https://soylentnews.org/article.pl?sid=25/07/02/1141208&amp;from=rss) - [Fedora: Proposal for the Removal of i686 Withdrawn](https://soylentnews.org/article.pl?sid=25/07/02/1141208&amp;from=rss)
* [2025-07-02, 18:05:00](https://soylentnews.org/article.pl?sid=25/07/02/0734207&amp;from=rss) - [Are Brother&apos;s Insecure Printers Illegal in the UK?](https://soylentnews.org/article.pl?sid=25/07/02/0734207&amp;from=rss)
* [2025-07-02, 17:20:38](https://lobste.rs/s/tht66b/higgs_bugson_linux_kernel) - [A Higgs-bugson in the Linux Kernel](https://blog.janestreet.com/a-higgs-bugson-in-the-linux-kernel/)
* [2025-07-02, 13:17:00](https://soylentnews.org/article.pl?sid=25/07/02/0110229&amp;from=rss) - [Mexican Drug Cartel Hacker Spied on FBI Official&apos;s Phone to Track and Kill Informants](https://soylentnews.org/article.pl?sid=25/07/02/0110229&amp;from=rss)
* [2025-07-02, 08:30:00](https://soylentnews.org/article.pl?sid=25/07/01/0415211&amp;from=rss) - [Genetic Study Reveals Humanity&apos;s Longest Migration](https://soylentnews.org/article.pl?sid=25/07/01/0415211&amp;from=rss)
* [2025-07-02, 04:59:00](https://soylentnews.org/meta/article.pl?sid=25/07/02/0418216&amp;from=rss) - [Stripe Donations Back Online](https://soylentnews.org/meta/article.pl?sid=25/07/02/0418216&amp;from=rss)
* [2025-07-02, 03:45:00](https://soylentnews.org/article.pl?sid=25/07/01/028205&amp;from=rss) - [New Theory Proposes Time Has Three Dimensions, With Space as a Secondary Effect](https://soylentnews.org/article.pl?sid=25/07/01/028205&amp;from=rss)
* [2025-07-01, 22:53:00](https://soylentnews.org/article.pl?sid=25/06/30/1817206&amp;from=rss) - [Ex-Nato Hacker: In Cyber, There’s No Such Thing As A Ceasefire](https://soylentnews.org/article.pl?sid=25/06/30/1817206&amp;from=rss)
* [2025-07-01, 20:49:53](https://news.ycombinator.com/item?id=44437885) - [Batteries and Buildings](https://mtende.blog/batteries-vs-no-batteries)
* [2025-07-01, 18:12:00](https://soylentnews.org/article.pl?sid=25/06/30/1738246&amp;from=rss) - [As AI Kills Search Traffic, Google Launches Offerwall to Boost Publisher Revenue](https://soylentnews.org/article.pl?sid=25/06/30/1738246&amp;from=rss)
* [2025-07-01, 13:28:00](https://soylentnews.org/article.pl?sid=25/06/30/1737227&amp;from=rss) - [Facebook is Starting to Feed its AI With Private, Unpublished Photos](https://soylentnews.org/article.pl?sid=25/06/30/1737227&amp;from=rss)
* [2025-07-01, 12:10:42](https://news.ycombinator.com/item?id=44433078) - [Raphael discovery emerges from Vatican museum restoration](https://news.artnet.com/art-world/raphael-rooms-restoration-discovery-2662624)
* [2025-07-01, 12:08:46](https://news.ycombinator.com/item?id=44433062) - [Lens: Lenses, Folds and Traversals](https://hackage.haskell.org/package/lens)
* [2025-07-01, 10:56:20](https://news.ycombinator.com/item?id=44432596) - [Context Engineering for Agents](https://rlancemartin.github.io/2025/06/23/context_engineering/)
* [2025-07-01, 08:42:00](https://soylentnews.org/article.pl?sid=25/06/30/1153228&amp;from=rss) - [Bluetooth Flaws Could Let Hackers Spy Through Your Microphone](https://soylentnews.org/article.pl?sid=25/06/30/1153228&amp;from=rss)
* [2025-07-01, 07:48:56](https://news.ycombinator.com/item?id=44431601) - [Alternative Blanket Implementations for a Single Rust Trait](https://www.greyblake.com/blog/alternative-blanket-implementations-for-single-rust-trait/)
* [2025-07-01, 03:57:00](https://soylentnews.org/article.pl?sid=25/06/30/1149231&amp;from=rss) - [CISA, NSA Repeat Call for Memory Safe Programming Languages](https://soylentnews.org/article.pl?sid=25/06/30/1149231&amp;from=rss)
* [2025-06-30, 23:26:06](https://news.ycombinator.com/item?id=44428997) - [Killer whales groom each other with pieces of kelp](https://www.science.org/content/article/killer-whales-groom-each-other-pieces-kelp)
* [2025-06-30, 23:13:00](https://soylentnews.org/article.pl?sid=25/06/30/0625204&amp;from=rss) - [Group of Investors Represented by Youtuber Perifractic Buys Commodore](https://soylentnews.org/article.pl?sid=25/06/30/0625204&amp;from=rss)
* [2025-06-30, 20:47:28](https://news.ycombinator.com/item?id=44427688) - [Developing with GitHub Copilot Agent Mode and MCP](https://austen.info/blog/github-copilot-agent-mcp/)
* [2025-06-30, 18:30:00](https://soylentnews.org/article.pl?sid=25/06/30/0230251&amp;from=rss) - [Scientists Unlock the Light-Bending Secrets of Squid Skin](https://soylentnews.org/article.pl?sid=25/06/30/0230251&amp;from=rss)
* [2025-06-30, 15:19:27](https://news.ycombinator.com/item?id=44424405) - [How often is the query plan optimal?](https://vondra.me/posts/how-often-is-the-query-plan-optimal/)
* [2025-06-30, 13:45:00](https://soylentnews.org/article.pl?sid=25/06/30/020252&amp;from=rss) - [You Sound Like ChatGPT](https://soylentnews.org/article.pl?sid=25/06/30/020252&amp;from=rss)
* [2025-06-30, 12:53:11](https://news.ycombinator.com/item?id=44422662) - [How AI on Microcontrollers Works: Operators and Kernels](https://danielmangum.com/posts/ai-microcontrollers-operators-kernels/)
* [2025-06-30, 09:03:00](https://soylentnews.org/article.pl?sid=25/06/29/1626204&amp;from=rss) - [Why Are the Physical Constants of the Universe So Perfect for Life?](https://soylentnews.org/article.pl?sid=25/06/29/1626204&amp;from=rss)
* [2025-06-30, 04:18:00](https://soylentnews.org/article.pl?sid=25/06/29/1610258&amp;from=rss) - [At Last, We Are Discovering What Quantum Computers Will be Useful for](https://soylentnews.org/article.pl?sid=25/06/29/1610258&amp;from=rss)
