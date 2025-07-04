# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence Trends and Challenges

* [ChatGPT creates phisher's paradise by serving the wrong URLs for major companies](https://www.theregister.com/2025/07/03/ai_phishing_websites/) ([comments](https://news.ycombinator.com/item?id=44466826))

* [LLMs caused drastic vocabulary shift in biomedical publications](https://www.science.org/doi/10.1126/sciadv.adt3813) ([comments](https://news.ycombinator.com/item?id=44466751))

* [Simple Text Additions Can Fool Advanced AI Reasoning Models, Researchers Find](https://tech.slashdot.org/story/25/07/04/1521245/simple-text-additions-can-fool-advanced-ai-reasoning-models-researchers-find?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.slashdot.org/story/25/07/04/1521245))

* [Can Large Language Models Play Text Games Well?](https://arxiv.org/abs/2304.02868) ([comments](https://news.ycombinator.com/item?id=44463536))

* [When AI Codes, What’s Left for me?](https://corecursive.com/coding-agents/) ([comments](https://lobste.rs/s/yx4f4i/when_ai_codes_what_s_left_for_me))

## Software and Development

* [Git experts should try Jujutsu](https://pksunkara.com/thoughts/git-experts-should-try-jujutsu/) ([comments](https://lobste.rs/s/dknqur/git_experts_should_try_jujutsu))

* [Getting extensions to work with free-threaded Python](https://lwn.net/Articles/1025893/) ([comments](https://lobste.rs/s/765brx/getting_extensions_work_with_free))

* [A Rust-TypeScript integration](https://github.com/beeeeep54/rust-typescript) ([comments](https://news.ycombinator.com/item?id=44463654))

* [awesome-standards: A curated list of technical standards](https://github.com/donBarbos/awesome-standards) ([comments](https://lobste.rs/s/ljpllk/awesome_standards_curated_list))

## Environmental and Climate Issues

* [A Majority of Companies Are Already Feeling the Climate Heat](https://news.slashdot.org/story/25/07/04/1548253/a-majority-of-companies-are-already-feeling-the-climate-heat?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.slashdot.org/story/25/07/04/1548253))

* [Websites Hosting Major US Climate Reports Taken Down](https://tech.slashdot.org/story/25/07/04/0019202/websites-hosting-major-us-climate-reports-taken-down?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://tech.slashdot.org/story/25/07/04/0019202))

## Space and Technology

* [SpaceX Launches UK Satellite To Create Semiconductors In Low Earth Orbit](https://soylentnews.org/article.pl?sid=25/07/02/1652201&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/07/02/1652201&from=rss))

* [You Can Now Rent a Flesh Computer Grown In a British Lab](https://hardware.slashdot.org/story/25/07/04/002225/you-can-now-rent-a-flesh-computer-grown-in-a-british-lab?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://hardware.slashdot.org/story/25/07/04/002225))

* [Norwegian Northern Lights Operational](https://soylentnews.org/article.pl?sid=25/07/02/1645202&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/07/02/1645202&from=rss))

## Gaming and Entertainment

* [The Last of Us Co-Creator Neil Druckmann Exits HBO Show](https://entertainment.slashdot.org/story/25/07/04/008215/the-last-of-us-co-creator-neil-druckmann-exits-hbo-show?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://entertainment.slashdot.org/story/25/07/04/008215))

* [Valve Conquered PC Gaming. What Comes Next?](https://games.slashdot.org/story/25/07/04/0820223/valve-conquered-pc-gaming-what-comes-next?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://games.slashdot.org/story/25/07/04/0820223))

* [One Billion Cells, Another Multiplayer Demo with Clojure](https://cells.andersmurphy.com/) ([comments](https://lobste.rs/s/s3lg4g/one_billion_cells_another_multiplayer))

## Innovative Projects and Concepts

* [Show HN: I AI-coded a tower defense game and documented the whole process](https://github.com/maciej-trebacz/tower-of-time-game) ([comments](https://news.ycombinator.com/item?id=44463967))

* [Sterilized Flies To Be Released In Order To Stop Flesh-Eating Maggot Infestation](https://science.slashdot.org/story/25/07/03/2356217/sterilized-flies-to-be-released-in-order-to-stop-flesh-eating-maggot-infestation?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://science.slashdot.org/story/25/07/03/2356217))

* [Kepler.gl](https://kepler.gl/) ([comments](https://news.ycombinator.com/item?id=44464641))

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

* [2025-07-04, 18:31:54](https://news.ycombinator.com/item?id=44466826) - [ChatGPT creates phisher&apos;s paradise by serving the wrong URLs for major companies](https://www.theregister.com/2025/07/03/ai_phishing_websites/)
* [2025-07-04, 18:18:46](https://news.ycombinator.com/item?id=44466751) - [LLMs caused drastic vocabulary shift in biomedical publications](https://www.science.org/doi/10.1126/sciadv.adt3813)
* [2025-07-04, 18:13:53](https://lobste.rs/s/tk9rkb/eternal_mainframe) - [The Eternal Mainframe](https://www.winestockwebdesign.com/Essays/Eternal_Mainframe.html)
* [2025-07-04, 18:12:25](https://news.ycombinator.com/item?id=44466697) - [How to Incapacitate Google Tag Manager and Why You Should (2022)](https://backlit.neocities.org/incapacitate-google-tag-manager)
* [2025-07-04, 18:00:00](https://news.slashdot.org/story/25/07/04/1548253/a-majority-of-companies-are-already-feeling-the-climate-heat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Majority of Companies Are Already Feeling the Climate Heat](https://news.slashdot.org/story/25/07/04/1548253/a-majority-of-companies-are-already-feeling-the-climate-heat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-04, 17:54:39](https://lobste.rs/s/ljpllk/awesome_standards_curated_list) - [awesome-standards: A curated list of technical standards](https://github.com/donBarbos/awesome-standards)
* [2025-07-04, 17:28:00](https://lobste.rs/s/dknqur/git_experts_should_try_jujutsu) - [Git experts should try Jujutsu](https://pksunkara.com/thoughts/git-experts-should-try-jujutsu/)
* [2025-07-04, 17:09:51](https://lobste.rs/s/zhiv3y/supposedly_worthwhile_contract_i_ll) - [A supposedly worthwhile contract I&apos;ll never do again](https://ahelwer.ca/post/2025-07-04-tla-contracts/)
* [2025-07-04, 17:00:18](https://news.ycombinator.com/item?id=44466121) - [UpCodes (YC S17) is hiring a Head of Ops to automate construction compliance](https://up.codes/careers?utm_source=HN)
* [2025-07-04, 17:00:00](https://tech.slashdot.org/story/25/07/04/1521245/simple-text-additions-can-fool-advanced-ai-reasoning-models-researchers-find?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Simple Text Additions Can Fool Advanced AI Reasoning Models, Researchers Find](https://tech.slashdot.org/story/25/07/04/1521245/simple-text-additions-can-fool-advanced-ai-reasoning-models-researchers-find?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-04, 16:42:57](https://news.ycombinator.com/item?id=44465980) - [Gremllm](https://github.com/awwaiid/gremllm)
* [2025-07-04, 16:41:00](https://soylentnews.org/article.pl?sid=25/07/02/1652201&amp;from=rss) - [SpaceX Launches UK Satellite To Create Semiconductors In Low Earth Orbit](https://soylentnews.org/article.pl?sid=25/07/02/1652201&amp;from=rss)
* [2025-07-04, 16:10:13](https://news.ycombinator.com/item?id=44465731) - [EverQuest](https://www.filfre.net/2025/07/everquest/)
* [2025-07-04, 16:00:00](https://slashdot.org/story/25/07/04/0839201/microsoft-shuts-down-operations-in-pakistan-after-25-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Shuts Down Operations in Pakistan After 25 Years](https://slashdot.org/story/25/07/04/0839201/microsoft-shuts-down-operations-in-pakistan-after-25-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-04, 15:21:51](https://news.ycombinator.com/item?id=44465319) - [Mini NASes marry NVMe to Intel&apos;s efficient chip](https://www.jeffgeerling.com/blog/2025/mini-nases-marry-nvme-intels-efficient-chip)
* [2025-07-04, 15:07:33](https://news.ycombinator.com/item?id=44465206) - [Compression Dictionary Transport](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Compression_dictionary_transport)
* [2025-07-04, 15:05:00](https://lobste.rs/s/f7dyjt/compression_dictionary_transport) - [Compression Dictionary Transport](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Compression_dictionary_transport)
* [2025-07-04, 15:02:48](https://lobste.rs/s/s3lg4g/one_billion_cells_another_multiplayer) - [One Billion Cells, Another Multiplayer Demo with Clojure](https://cells.andersmurphy.com/)
* [2025-07-04, 15:00:00](https://games.slashdot.org/story/25/07/04/0820223/valve-conquered-pc-gaming-what-comes-next?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Valve Conquered PC Gaming. What Comes Next?](https://games.slashdot.org/story/25/07/04/0820223/valve-conquered-pc-gaming-what-comes-next?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-04, 14:00:00](https://news.slashdot.org/story/25/07/04/0750244/the-us-dollar-is-on-track-for-its-worst-year-in-modern-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The US Dollar is On Track For Its Worst Year in Modern History](https://news.slashdot.org/story/25/07/04/0750244/the-us-dollar-is-on-track-for-its-worst-year-in-modern-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-04, 13:58:03](https://news.ycombinator.com/item?id=44464641) - [Kepler.gl](https://kepler.gl/)
* [2025-07-04, 13:57:38](https://lobste.rs/s/1enkhd/i_want_leave_tech_what_do_i_do) - [I want to leave tech: what do I do?](https://write.as/conjure-utopia/lets-say-youre-working-in-tech-and-you-have-a-technical-role-youre-a)
* [2025-07-04, 13:38:51](https://lobste.rs/s/765brx/getting_extensions_work_with_free) - [Getting extensions to work with free-threaded Python](https://lwn.net/Articles/1025893/)
* [2025-07-04, 13:32:10](https://news.ycombinator.com/item?id=44464396) - [Bcachefs may be headed out of the kernel](https://lwn.net/Articles/1027289/)
* [2025-07-04, 13:16:09](https://news.ycombinator.com/item?id=44464272) - [Serving 200M requests per day with a CGI-bin](https://jacob.gold/posts/serving-200-million-requests-with-cgi-bin/)
* [2025-07-04, 13:00:00](https://tech.slashdot.org/story/25/07/04/0019202/websites-hosting-major-us-climate-reports-taken-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Websites Hosting Major US Climate Reports Taken Down](https://tech.slashdot.org/story/25/07/04/0019202/websites-hosting-major-us-climate-reports-taken-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-04, 12:50:04](https://news.ycombinator.com/item?id=44464068) - [Why I left my tech job to work on chronic pain](https://sailhealth.substack.com/p/why-i-left-my-tech-job-to-work-on)
* [2025-07-04, 12:34:49](https://news.ycombinator.com/item?id=44463967) - [Show HN: I AI-coded a tower defense game and documented the whole process](https://github.com/maciej-trebacz/tower-of-time-game)
* [2025-07-04, 12:24:50](https://news.ycombinator.com/item?id=44463916) - [Rust and WASM for Form Validation](https://sebastian.lauwe.rs/blog/rust-wasm-form-validation/)
* [2025-07-04, 12:08:24](https://news.ycombinator.com/item?id=44463813) - [Is an Intel N100 or N150 a better value than a Raspberry Pi?](https://www.jeffgeerling.com/blog/2025/intel-n100-better-value-raspberry-pi)
* [2025-07-04, 11:57:00](https://soylentnews.org/article.pl?sid=25/07/02/1648236&amp;from=rss) - [Two Years Later, Meta is Making DMs on Threads Official](https://soylentnews.org/article.pl?sid=25/07/02/1648236&amp;from=rss)
* [2025-07-04, 11:55:57](https://news.ycombinator.com/item?id=44463747) - [Show HN: BunkerWeb – the open-source and cloud-native WAF](https://docs.bunkerweb.io/latest/)
* [2025-07-04, 11:48:12](https://news.ycombinator.com/item?id=44463698) - [Show HN: Fast Thermodynamic Calculations in Python](https://dlr-institute-of-future-fuels.github.io/gaspype/)
* [2025-07-04, 11:42:35](https://news.ycombinator.com/item?id=44463654) - [A Rust-TypeScript integration](https://github.com/beeeeep54/rust-typescript)
* [2025-07-04, 11:24:42](https://news.ycombinator.com/item?id=44463536) - [Can Large Language Models Play Text Games Well?](https://arxiv.org/abs/2304.02868)
* [2025-07-04, 10:38:54](https://lobste.rs/s/zixaut/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/zixaut/what_are_you_doing_this_weekend)
* [2025-07-04, 10:00:00](https://entertainment.slashdot.org/story/25/07/04/008215/the-last-of-us-co-creator-neil-druckmann-exits-hbo-show?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Last of Us Co-Creator Neil Druckmann Exits HBO Show](https://entertainment.slashdot.org/story/25/07/04/008215/the-last-of-us-co-creator-neil-druckmann-exits-hbo-show?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-04, 09:43:04](https://news.ycombinator.com/item?id=44462947) - [Larry (cat)](https://en.wikipedia.org/wiki/Larry_(cat))
* [2025-07-04, 09:34:56](https://news.ycombinator.com/item?id=44462896) - [Writing a Game Boy Emulator in OCaml](https://linoscope.github.io/writing-a-game-boy-emulator-in-ocaml/)
* [2025-07-04, 08:44:16](https://lobste.rs/s/chcyrx/nonce_csp_bypass_using_disk_cache) - [Nonce CSP bypass using Disk Cache](https://jorianwoltjer.com/blog/p/research/nonce-csp-bypass-using-disk-cache)
* [2025-07-04, 08:27:02](https://lobste.rs/s/wphcsj/rise_whatever) - [The rise of Whatever](https://eev.ee/blog/2025/07/03/the-rise-of-whatever/)
* [2025-07-04, 07:59:02](https://lobste.rs/s/0szaso/zig_roadmap_2026) - [Zig Roadmap 2026](https://www.youtube.com/watch?v=x3hOiOcbgeA)
* [2025-07-04, 07:47:15](https://news.ycombinator.com/item?id=44462174) - [DRM Panic QR code generator](https://rust-for-linux.com/drm-panic-qr-code-generator)
* [2025-07-04, 07:11:00](https://soylentnews.org/article.pl?sid=25/07/02/1645202&amp;from=rss) - [Norwegian Northern Lights Operational ](https://soylentnews.org/article.pl?sid=25/07/02/1645202&amp;from=rss)
* [2025-07-04, 07:00:00](https://hardware.slashdot.org/story/25/07/04/002225/you-can-now-rent-a-flesh-computer-grown-in-a-british-lab?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [You Can Now Rent a Flesh Computer Grown In a British Lab](https://hardware.slashdot.org/story/25/07/04/002225/you-can-now-rent-a-flesh-computer-grown-in-a-british-lab?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-04, 06:31:33](https://lobste.rs/s/gzzo0m/catamorphic_lambda_calculus) - [A catamorphic lambda-calculus interpreter](https://www.michaelpj.com/blog/2018/04/08/catamorphic-lc-interpreter.html)
* [2025-07-04, 05:35:00](https://soylentnews.org/meta/article.pl?sid=25/07/04/0527252&amp;from=rss) - [Happy Independence Day !!!](https://soylentnews.org/meta/article.pl?sid=25/07/04/0527252&amp;from=rss)
* [2025-07-04, 04:11:19](https://news.ycombinator.com/item?id=44461067) - [Zig breaking change – initial Writergate](https://github.com/ziglang/zig/pull/24329)
* [2025-07-04, 03:30:00](https://science.slashdot.org/story/25/07/03/2356217/sterilized-flies-to-be-released-in-order-to-stop-flesh-eating-maggot-infestation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sterilized Flies To Be Released In Order To Stop Flesh-Eating Maggot Infestation](https://science.slashdot.org/story/25/07/03/2356217/sterilized-flies-to-be-released-in-order-to-stop-flesh-eating-maggot-infestation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-04, 02:46:34](https://lobste.rs/s/cdrqny/tools_code_is_all_you_need) - [Tools: Code Is All You Need](https://lucumr.pocoo.org/2025/7/3/tools/)
* [2025-07-04, 02:27:00](https://soylentnews.org/article.pl?sid=25/07/02/1640204&amp;from=rss) - [China Could Be The World&apos;s Top Semiconductor Foundry Hub By 2030](https://soylentnews.org/article.pl?sid=25/07/02/1640204&amp;from=rss)
* [2025-07-04, 02:10:00](https://news.slashdot.org/story/25/07/03/2349257/wells-fargo-scandal-pushed-customers-toward-fintech-says-uc-davis-study?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wells Fargo Scandal Pushed Customers Toward Fintech, Says UC Davis Study](https://news.slashdot.org/story/25/07/03/2349257/wells-fargo-scandal-pushed-customers-toward-fintech-says-uc-davis-study?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-04, 01:30:00](https://tech.slashdot.org/story/25/07/03/2341234/norway-reached-969-market-share-for-evs-in-june?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Norway Reached 96.9% Market Share For EVs In June](https://tech.slashdot.org/story/25/07/03/2341234/norway-reached-969-market-share-for-evs-in-june?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-04, 00:50:00](https://news.slashdot.org/story/25/07/03/2335200/ripple-applies-for-us-banking-license?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ripple Applies For US Banking License](https://news.slashdot.org/story/25/07/03/2335200/ripple-applies-for-us-banking-license?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-04, 00:10:00](https://hardware.slashdot.org/story/25/07/03/2034239/samsung-delays-44-billion-texas-chip-fab-because-there-are-no-customers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Samsung Delays $44 Billion Texas Chip Fab Because &apos;There Are No Customers&apos;](https://hardware.slashdot.org/story/25/07/03/2034239/samsung-delays-44-billion-texas-chip-fab-because-there-are-no-customers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-03, 23:59:49](https://lobste.rs/s/apuviy/tiny_great_languages_mouse) - [Tiny Great Languages: MOUSE](https://zserge.com/posts/langs-mouse/)
* [2025-07-03, 23:30:00](https://slashdot.org/story/25/07/03/2028252/microsoft-copilot-joins-chatgpt-at-the-feet-of-the-mighty-atari-2600-video-chess?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Copilot Joins ChatGPT At the Feet of the Mighty Atari 2600 Video Chess](https://slashdot.org/story/25/07/03/2028252/microsoft-copilot-joins-chatgpt-at-the-feet-of-the-mighty-atari-2600-video-chess?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-03, 22:50:00](https://games.slashdot.org/story/25/07/03/2022217/stop-killing-games-consumer-movement-hits-major-milestones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Stop Killing Games&apos; Consumer Movement Hits Major Milestones](https://games.slashdot.org/story/25/07/03/2022217/stop-killing-games-consumer-movement-hits-major-milestones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-03, 22:05:56](https://lobste.rs/s/seqz3x/writing_little_gosh) - [writing a little gosh](https://flak.tedunangst.com/post/writing-a-gosh)
* [2025-07-03, 21:43:00](https://soylentnews.org/article.pl?sid=25/07/02/1636207&amp;from=rss) - [Earthquake-Induced Electricity Offers Answer to Mystery of Gold Nugget Formation](https://soylentnews.org/article.pl?sid=25/07/02/1636207&amp;from=rss)
* [2025-07-03, 20:28:57](https://news.ycombinator.com/item?id=44458890) - [Wind Knitting Factory](https://www.merelkarhof.nl/work/wind-knitting-factory)
* [2025-07-03, 20:23:30](https://lobste.rs/s/yx4f4i/when_ai_codes_what_s_left_for_me) - [When AI Codes, What’s Left for me?](https://corecursive.com/coding-agents/)
* [2025-07-03, 19:52:39](https://lobste.rs/s/8s8chj/our_fullstack_architecture_eta_htmx_lit) - [Our Fullstack Architecture: Eta, HTMX, and Lit](https://www.lorenstew.art/blog/eta-htmx-lit-stack)
* [2025-07-03, 17:11:33](https://lobste.rs/s/yncgug/introducing_tmux_rs) - [Introducing tmux-rs](https://richardscollin.github.io/tmux-rs/)
* [2025-07-03, 16:56:00](https://soylentnews.org/article.pl?sid=25/07/02/1214228&amp;from=rss) - [Why the Sun is So Good at Evaporating Water](https://soylentnews.org/article.pl?sid=25/07/02/1214228&amp;from=rss)
* [2025-07-03, 14:16:06](https://lobste.rs/s/8we4dn/lucky_13_lobsters) - [Lucky 13 Lobsters](https://lobste.rs/s/8we4dn/lucky_13_lobsters)
* [2025-07-03, 13:07:52](https://lobste.rs/s/msjy28/10_features_d_i_love) - [10 features of D that I love](https://bradley.chatha.dev/blog/dlang-propaganda/features-of-d-that-i-love/)
* [2025-07-03, 12:46:13](https://lobste.rs/s/irjbzn/most_mysterious_bug_i_solved_at_work) - [The most mysterious bug I solved at work](https://cadence.moe/blog/2025-07-02-the-most-mysterious-bug-i-solved-at-work)
* [2025-07-03, 12:22:38](https://lobste.rs/s/zslatp/goharddrive_leaked_personal_data_for) - [goHardDrive Leaked Personal Data for Thousands of Customers](https://mtlynch.io/goharddrive-leak/)
* [2025-07-03, 12:11:00](https://soylentnews.org/article.pl?sid=25/07/02/1153235&amp;from=rss) - [Deutsche Bahn Train Hits 405 km/h Without Falling to Bits](https://soylentnews.org/article.pl?sid=25/07/02/1153235&amp;from=rss)
* [2025-07-03, 09:05:41](https://lobste.rs/s/wiu8md/writing_code_was_never_bottleneck) - [Writing Code Was Never The Bottleneck](https://ordep.dev/posts/writing-code-was-never-the-bottleneck)
* [2025-07-03, 08:16:00](https://soylentnews.org/article.pl?sid=25/07/02/1148257&amp;from=rss) - [Arm-Based Servers to Grow 70% This Year](https://soylentnews.org/article.pl?sid=25/07/02/1148257&amp;from=rss)
* [2025-07-03, 07:59:55](https://lobste.rs/s/rxdnnq/introducing_first_alpha_turso_next) - [Introducing the first alpha of Turso: The next evolution of SQLite](https://turso.tech/blog/turso-the-next-evolution-of-sqlite?ref=console.dev)
* [2025-07-03, 03:33:00](https://soylentnews.org/article.pl?sid=25/07/02/1144216&amp;from=rss) - [Bruce Schneier on How Cybersecurity Fears Affect Confidence in Voting Systems](https://soylentnews.org/article.pl?sid=25/07/02/1144216&amp;from=rss)
* [2025-07-02, 22:50:00](https://soylentnews.org/article.pl?sid=25/07/02/1141208&amp;from=rss) - [Fedora: Proposal for the Removal of i686 Withdrawn](https://soylentnews.org/article.pl?sid=25/07/02/1141208&amp;from=rss)
* [2025-07-02, 18:05:00](https://soylentnews.org/article.pl?sid=25/07/02/0734207&amp;from=rss) - [Are Brother&apos;s Insecure Printers Illegal in the UK?](https://soylentnews.org/article.pl?sid=25/07/02/0734207&amp;from=rss)
* [2025-07-02, 13:17:00](https://soylentnews.org/article.pl?sid=25/07/02/0110229&amp;from=rss) - [Mexican Drug Cartel Hacker Spied on FBI Official&apos;s Phone to Track and Kill Informants](https://soylentnews.org/article.pl?sid=25/07/02/0110229&amp;from=rss)
* [2025-07-02, 08:30:00](https://soylentnews.org/article.pl?sid=25/07/01/0415211&amp;from=rss) - [Genetic Study Reveals Humanity&apos;s Longest Migration](https://soylentnews.org/article.pl?sid=25/07/01/0415211&amp;from=rss)
* [2025-07-02, 04:59:00](https://soylentnews.org/meta/article.pl?sid=25/07/02/0418216&amp;from=rss) - [Stripe Donations Back Online](https://soylentnews.org/meta/article.pl?sid=25/07/02/0418216&amp;from=rss)
* [2025-07-02, 03:45:00](https://soylentnews.org/article.pl?sid=25/07/01/028205&amp;from=rss) - [New Theory Proposes Time Has Three Dimensions, With Space as a Secondary Effect](https://soylentnews.org/article.pl?sid=25/07/01/028205&amp;from=rss)
* [2025-07-01, 22:53:00](https://soylentnews.org/article.pl?sid=25/06/30/1817206&amp;from=rss) - [Ex-Nato Hacker: In Cyber, There’s No Such Thing As A Ceasefire](https://soylentnews.org/article.pl?sid=25/06/30/1817206&amp;from=rss)
* [2025-07-01, 18:12:00](https://soylentnews.org/article.pl?sid=25/06/30/1738246&amp;from=rss) - [As AI Kills Search Traffic, Google Launches Offerwall to Boost Publisher Revenue](https://soylentnews.org/article.pl?sid=25/06/30/1738246&amp;from=rss)
* [2025-07-01, 13:28:00](https://soylentnews.org/article.pl?sid=25/06/30/1737227&amp;from=rss) - [Facebook is Starting to Feed its AI With Private, Unpublished Photos](https://soylentnews.org/article.pl?sid=25/06/30/1737227&amp;from=rss)
* [2025-07-01, 12:12:56](https://news.ycombinator.com/item?id=44433094) - [In a milestone for Manhattan, a pair of coyotes has made Central Park their home](https://www.smithsonianmag.com/science-nature/in-a-milestone-for-manhattan-a-pair-of-coyotes-has-made-central-park-their-home-180986892/)
* [2025-07-01, 12:08:46](https://news.ycombinator.com/item?id=44433062) - [Lens: Lenses, Folds and Traversals](https://hackage.haskell.org/package/lens)
* [2025-07-01, 08:42:00](https://soylentnews.org/article.pl?sid=25/06/30/1153228&amp;from=rss) - [Bluetooth Flaws Could Let Hackers Spy Through Your Microphone](https://soylentnews.org/article.pl?sid=25/06/30/1153228&amp;from=rss)
* [2025-07-01, 08:28:16](https://news.ycombinator.com/item?id=44431805) - [``Free as Air, Free as Water, Free as Knowledge&apos;&apos; (1992)](http://bactra.org/Sterling/Free_as_the_Air_Free_as_Water_Free_as_Knowledge.html)
* [2025-07-01, 07:11:01](https://news.ycombinator.com/item?id=44431372) - [Show HN: A cross-platform terminal emulator written in Java](https://github.com/sebkur/forceterm)
* [2025-07-01, 06:40:08](https://news.ycombinator.com/item?id=44431226) - [Logging Shell Commands in BusyBox? Yes, You Can Now](http://carminatialessandro.blogspot.com/2025/06/logging-shell-commands-in-busybox-yes.html)
* [2025-07-01, 03:57:00](https://soylentnews.org/article.pl?sid=25/06/30/1149231&amp;from=rss) - [CISA, NSA Repeat Call for Memory Safe Programming Languages](https://soylentnews.org/article.pl?sid=25/06/30/1149231&amp;from=rss)
* [2025-06-30, 23:26:06](https://news.ycombinator.com/item?id=44428997) - [Killer whales groom each other with pieces of kelp](https://www.science.org/content/article/killer-whales-groom-each-other-pieces-kelp)
* [2025-06-30, 23:13:00](https://soylentnews.org/article.pl?sid=25/06/30/0625204&amp;from=rss) - [Group of Investors Represented by Youtuber Perifractic Buys Commodore](https://soylentnews.org/article.pl?sid=25/06/30/0625204&amp;from=rss)
* [2025-06-30, 18:30:00](https://soylentnews.org/article.pl?sid=25/06/30/0230251&amp;from=rss) - [Scientists Unlock the Light-Bending Secrets of Squid Skin](https://soylentnews.org/article.pl?sid=25/06/30/0230251&amp;from=rss)
* [2025-06-30, 13:45:00](https://soylentnews.org/article.pl?sid=25/06/30/020252&amp;from=rss) - [You Sound Like ChatGPT](https://soylentnews.org/article.pl?sid=25/06/30/020252&amp;from=rss)
* [2025-06-30, 09:03:00](https://soylentnews.org/article.pl?sid=25/06/29/1626204&amp;from=rss) - [Why Are the Physical Constants of the Universe So Perfect for Life?](https://soylentnews.org/article.pl?sid=25/06/29/1626204&amp;from=rss)
* [2025-06-30, 04:18:00](https://soylentnews.org/article.pl?sid=25/06/29/1610258&amp;from=rss) - [At Last, We Are Discovering What Quantum Computers Will be Useful for](https://soylentnews.org/article.pl?sid=25/06/29/1610258&amp;from=rss)
