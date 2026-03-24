# [News Summary](https://kherrick.github.io/news-summary/)

## Cybersecurity and Technology Concerns

* [LiteLLM Python package compromised by supply-chain attack](https://github.com/BerriAI/litellm/issues/24512) ([comments](https://news.ycombinator.com/item?id=47501729))

* [Trivy under attack again: Widespread GitHub Actions tag compromise secrets](https://socket.dev/blog/trivy-under-attack-again-github-actions-compromise) ([comments](https://news.ycombinator.com/item?id=47475888))

* [Invisible Malicious Code Attacks 151 GitHub Repos And VS Code — Glassworm Attack Uses Blockchain](https://soylentnews.org/article.pl?sid=26/03/19/1636248&amp;from=rss)

* [Cyberattack on a Car Breathalyzer Firm Leaves Drivers Stuck](https://it.slashdot.org/story/26/03/23/2323217/cyberattack-on-a-car-breathalyzer-firm-leaves-drivers-stuck?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Innovative Technology Developments

* [Opera: Rewind The Web to 1996 (Opera at 30)](https://www.web-rewind.com) ([comments](https://news.ycombinator.com/item?id=47499721))

* [Can it Resolve DOOM? Game Engine in 2,000 DNS Records](https://blog.rice.is/post/doom-over-dns/) ([comments](https://lobste.rs/s/aewrgf/can_it_resolve_doom_game_engine_2_000_dns))

* [NanoClaw Adopts OneCLI Agent Vault](https://nanoclaw.dev/blog/nanoclaw-agent-vault/) ([comments](https://news.ycombinator.com/item?id=47501840))

* [Ironies of Automation (1983)](http://www.complexcognition.co.uk/2021/06/ironies-of-automation.html) ([comments](https://lobste.rs/s/6fpjhn/ironies_automation_1983))

## Advancements in AI and Machine Learning

* [Missile Defense Is NP-Complete](https://smu160.github.io/posts/missile-defense-is-np-complete/) ([comments](https://news.ycombinator.com/item?id=47501950))

* [Mark Zuckerberg Is Building an AI Agent To Help Him Be CEO](https://tech.slashdot.org/story/26/03/23/1759212/mark-zuckerberg-is-building-an-ai-agent-to-help-him-be-ceo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [iPhone 17 Pro Demonstrated Running a 400B LLM](https://twitter.com/anemll/status/2035901335984611412) ([comments](https://news.ycombinator.com/item?id=47490070))

* [TLA+ mental models](http://muratbuffalo.blogspot.com/2026/03/tla-mental-models.html) ([comments](https://lobste.rs/s/joe31h/tla_mental_models))

## Programming and Software Insights

* [curl > dev/sda](https://astrid.tech/2026/03/24/0/curl-to-dev-sda/) ([comments](https://lobste.rs/s/brcq3a/curl_dev_sda))

* [Rewriting a 20-year-old Python library](https://www.b-list.org/weblog/2026/mar/23/20-year-library/) ([comments](https://lobste.rs/s/jbyzxt/rewriting_20_year_old_python_library))

* [The Mouse Programming Language on CP/M](https://techtinkering.com/articles/the-mouse-programming-language-on-cpm/) ([comments](https://lobste.rs/s/g53l7b/mouse_programming_language_on_cp_m))

* [Debunking zswap and zram myths](https://chrisdown.name/2026/03/24/zswap-vs-zram-when-to-use-what.html) ([comments](https://lobste.rs/s/flmhja/debunking_zswap_zram_myths))

## Historic and Societal Perspectives

* [Ironies of Automation (1983)](http://www.complexcognition.co.uk/2021/06/ironies-of-automation.html) ([comments](https://lobste.rs/s/6fpjhn/ironies_automation_1983))

* [Never Mind Band-Aids, Neanderthals Had Antiseptic Birch Tar](https://soylentnews.org/article.pl?sid=26/03/23/0028246&amp;from=rss)

* [How Should We Define Mathematical Beauty in the AI Age?](https://soylentnews.org/article.pl?sid=26/03/19/1638217&amp;from=rss)

## Surprising and Unusual Stories

* [Tech Hobbyist Makes Shoulder-Mounted Guided Missile Prototype With $96 In Parts And A 3D Printer](https://soylentnews.org/article.pl?sid=26/03/19/208240&amp;from=rss)

* [Ripgrep is faster than grep, ag, git grep, ucg, pt, sift (2016)](https://burntsushi.net/ripgrep/) ([comments](https://news.ycombinator.com/item?id=47499245))

* [BIO – The Bao I/O Co-Processor](https://www.crowdsupply.com/baochip/dabao/updates/bio-the-bao-i-o-co-processor) ([comments](https://news.ycombinator.com/item?id=47469744))

* [Tundra Tongue: The Science Behind a Very Cold Mistake](https://soylentnews.org/article.pl?sid=26/03/19/201233&amp;from=rss)

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

* [2026-03-24, 13:32:17](https://lobste.rs/s/c8k9tt/slopification_its_discontents) - [Slopification and its Discontents](https://charlesleifer.com/blog/slopification-and-its-discontents/)
* [2026-03-24, 13:00:38](https://news.ycombinator.com/item?id=47501950) - [Missile Defense Is NP-Complete](https://smu160.github.io/posts/missile-defense-is-np-complete/)
* [2026-03-24, 12:48:04](https://news.ycombinator.com/item?id=47501840) - [NanoClaw Adopts OneCLI Agent Vault](https://nanoclaw.dev/blog/nanoclaw-agent-vault/)
* [2026-03-24, 12:36:20](https://news.ycombinator.com/item?id=47501729) - [LiteLLM Python package compromised by supply-chain attack](https://github.com/BerriAI/litellm/issues/24512)
* [2026-03-24, 12:14:56](https://news.ycombinator.com/item?id=47501511) - [Secure Domain Name System (DNS) Deployment 2026 Guide [pdf]](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-81r3.pdf)
* [2026-03-24, 12:10:00](https://soylentnews.org/article.pl?sid=26/03/23/013259&amp;from=rss) - [Musk&apos;s Tactic of Blaming Users for Grok Sex Images May be Foiled by EU Law](https://soylentnews.org/article.pl?sid=26/03/23/013259&amp;from=rss)
* [2026-03-24, 12:00:56](https://lobste.rs/s/brcq3a/curl_dev_sda) - [curl &gt; dev/sda](https://astrid.tech/2026/03/24/0/curl-to-dev-sda/)
* [2026-03-24, 11:00:00](https://news.slashdot.org/story/26/03/23/2340216/canonical-joins-rust-foundation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Canonical Joins Rust Foundation](https://news.slashdot.org/story/26/03/23/2340216/canonical-joins-rust-foundation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 10:54:53](https://lobste.rs/s/flmhja/debunking_zswap_zram_myths) - [Debunking zswap and zram myths](https://chrisdown.name/2026/03/24/zswap-vs-zram-when-to-use-what.html)
* [2026-03-24, 10:39:21](https://news.ycombinator.com/item?id=47500746) - [Debunking Zswap and Zram Myths](https://chrisdown.name/2026/03/24/zswap-vs-zram-when-to-use-what.html)
* [2026-03-24, 10:06:02](https://news.ycombinator.com/item?id=47500522) - [curl &gt; /dev/sda: How I made a Linux distro that runs wget | dd](https://astrid.tech/2026/03/24/0/curl-to-dev-sda/)
* [2026-03-24, 09:36:29](https://news.ycombinator.com/item?id=47500335) - [Microsoft&apos;s \&quot;Fix\&quot; for Windows 11: Flowers After the Beating](https://www.sambent.com/microsofts-plan-to-fix-windows-11-is-gaslighting/)
* [2026-03-24, 09:36:16](https://lobste.rs/s/hb04np/announcing_typescript_6_0) - [Announcing TypeScript 6.0](https://devblogs.microsoft.com/typescript/announcing-typescript-6-0/)
* [2026-03-24, 08:44:54](https://lobste.rs/s/6fpjhn/ironies_automation_1983) - [Ironies of Automation (1983)](http://www.complexcognition.co.uk/2021/06/ironies-of-automation.html)
* [2026-03-24, 07:54:02](https://news.ycombinator.com/item?id=47499721) - [Opera: Rewind The Web to 1996 (Opera at 30)](https://www.web-rewind.com)
* [2026-03-24, 07:21:00](https://soylentnews.org/article.pl?sid=26/03/23/0055212&amp;from=rss) - [Nvidia is Trying to Make a Computer for Orbital AI Data Centers](https://soylentnews.org/article.pl?sid=26/03/23/0055212&amp;from=rss)
* [2026-03-24, 07:00:00](https://it.slashdot.org/story/26/03/23/2323217/cyberattack-on-a-car-breathalyzer-firm-leaves-drivers-stuck?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cyberattack on a Car Breathalyzer Firm Leaves Drivers Stuck](https://it.slashdot.org/story/26/03/23/2323217/cyberattack-on-a-car-breathalyzer-firm-leaves-drivers-stuck?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 06:31:39](https://news.ycombinator.com/item?id=47499245) - [Ripgrep is faster than grep, ag, git grep, ucg, pt, sift (2016)](https://burntsushi.net/ripgrep/)
* [2026-03-24, 05:32:53](https://news.ycombinator.com/item?id=47498924) - [Log File Viewer for the Terminal](https://lnav.org/)
* [2026-03-24, 05:24:40](https://lobste.rs/s/aewrgf/can_it_resolve_doom_game_engine_2_000_dns) - [Can it Resolve DOOM? Game Engine in 2,000 DNS Records](https://blog.rice.is/post/doom-over-dns/)
* [2026-03-24, 03:30:00](https://news.slashdot.org/story/26/03/23/2221232/trump-administration-to-pay-french-company-1-billion-to-stop-offshore-wind-farms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Administration To Pay French Company $1 Billion To Stop Offshore Wind Farms](https://news.slashdot.org/story/26/03/23/2221232/trump-administration-to-pay-french-company-1-billion-to-stop-offshore-wind-farms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-24, 02:34:00](https://soylentnews.org/article.pl?sid=26/03/23/0028246&amp;from=rss) - [Never Mind Band-Aids, Neanderthals Had Antiseptic Birch Tar](https://soylentnews.org/article.pl?sid=26/03/23/0028246&amp;from=rss)
* [2026-03-24, 01:41:33](https://lobste.rs/s/g53l7b/mouse_programming_language_on_cp_m) - [The Mouse Programming Language on CP/M](https://techtinkering.com/articles/the-mouse-programming-language-on-cpm/)
* [2026-03-24, 01:38:17](https://lobste.rs/s/9qmuj9/building_ats2_from_source_2026) - [Building ATS2 from Source in 2026](https://bluishcoder.co.nz/2026/03/23/building-ats2-from-source-in-2026/)
* [2026-03-23, 23:00:00](https://tech.slashdot.org/story/26/03/23/2214245/nvidia-ceo-says-hes-empathetic-to-dlss-5-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia CEO Says He&apos;s &apos;Empathetic&apos; To DLSS 5 Concerns](https://tech.slashdot.org/story/26/03/23/2214245/nvidia-ceo-says-hes-empathetic-to-dlss-5-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 22:58:41](https://lobste.rs/s/up2chu/rocksdb_development_finds_cpu_bug) - [RocksDB development finds a CPU bug](http://rocksdb.org/blog/2026/02/17/cpu-bug.html)
* [2026-03-23, 22:37:15](https://news.ycombinator.com/item?id=47496089) - [IRIX 3dfx Voodoo driver and glide2x IRIX port](https://sdz-mods.com/index.php/2026/03/23/irix-3dfx-voodoo-driver-glide2x-irix-port/)
* [2026-03-23, 22:20:31](https://lobste.rs/s/pem3or/playbit_runtime) - [Playbit runtime](https://playbit.app/)
* [2026-03-23, 22:01:15](https://news.ycombinator.com/item?id=47495719) - [The Resolv hack: How one compromised key printed $23M](https://www.chainalysis.com/blog/lessons-from-the-resolv-hack/)
* [2026-03-23, 22:00:00](https://yro.slashdot.org/story/26/03/23/2015241/bipartisan-bill-seeks-to-ban-sports-betting-on-prediction-market-platforms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bipartisan Bill Seeks To Ban Sports Betting On Prediction Market Platforms](https://yro.slashdot.org/story/26/03/23/2015241/bipartisan-bill-seeks-to-ban-sports-betting-on-prediction-market-platforms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 21:47:00](https://soylentnews.org/article.pl?sid=26/03/22/1834242&amp;from=rss) - [Big Tech’s Security Problem Just Hit Gaming](https://soylentnews.org/article.pl?sid=26/03/22/1834242&amp;from=rss)
* [2026-03-23, 21:44:20](https://news.ycombinator.com/item?id=47495527) - [Claude Code Cheat Sheet](https://cc.storyfox.cz)
* [2026-03-23, 21:32:59](https://lobste.rs/s/nhnfob/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/nhnfob/what_are_you_doing_this_week)
* [2026-03-23, 21:28:02](https://news.ycombinator.com/item?id=47495344) - [FCC updates covered list to include foreign-made consumer routers](https://www.fcc.gov/document/fcc-updates-covered-list-include-foreign-made-consumer-routers)
* [2026-03-23, 21:00:00](https://tech.slashdot.org/story/26/03/23/208238/wing-expands-its-drone-delivery-service-to-the-bay-area?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wing Expands Its Drone Delivery Service To the Bay Area](https://tech.slashdot.org/story/26/03/23/208238/wing-expands-its-drone-delivery-service-to-the-bay-area?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 20:46:56](https://lobste.rs/s/r6ul1w/pony_gets_template_engine) - [Pony Gets a Template Engine](https://www.ponylang.io/blog/2026/03/pony-gets-a-template-engine/)
* [2026-03-23, 20:38:43](https://lobste.rs/s/836yvd/basicbox_486_class_pc_emulator_written) - [BasicBox: A 486-class PC emulator written entirely in Visual Basic 6](https://github.com/mikechambers84/BasicBox)
* [2026-03-23, 20:09:54](https://lobste.rs/s/msgigh/guideline_rust_style) - [Guideline: Rust Style](https://epage.github.io/dev/rust-style/)
* [2026-03-23, 20:00:00](https://search.slashdot.org/story/26/03/23/1839224/apple-prepares-to-add-search-ads-to-apple-maps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Prepares To Add Search Ads To Apple Maps](https://search.slashdot.org/story/26/03/23/1839224/apple-prepares-to-add-search-ads-to-apple-maps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 19:11:08](https://lobste.rs/s/joe31h/tla_mental_models) - [TLA+ mental models](http://muratbuffalo.blogspot.com/2026/03/tla-mental-models.html)
* [2026-03-23, 19:00:00](https://tech.slashdot.org/story/26/03/23/1829217/us-car-buyers-envy-what-they-cannot-have-affordable-chinese-evs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Car Buyers Envy What They Cannot Have: Affordable Chinese EVs](https://tech.slashdot.org/story/26/03/23/1829217/us-car-buyers-envy-what-they-cannot-have-affordable-chinese-evs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 18:43:27](https://lobste.rs/s/jbyzxt/rewriting_20_year_old_python_library) - [Rewriting a 20-year-old Python library](https://www.b-list.org/weblog/2026/mar/23/20-year-library/)
* [2026-03-23, 18:40:58](https://news.ycombinator.com/item?id=47493460) - [Autoresearch on an old research idea](https://ykumar.me/blog/eclip-autoresearch/)
* [2026-03-23, 18:00:00](https://tech.slashdot.org/story/26/03/23/1759212/mark-zuckerberg-is-building-an-ai-agent-to-help-him-be-ceo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mark Zuckerberg Is Building an AI Agent To Help Him Be CEO](https://tech.slashdot.org/story/26/03/23/1759212/mark-zuckerberg-is-building-an-ai-agent-to-help-him-be-ceo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 17:02:00](https://soylentnews.org/article.pl?sid=26/03/22/1833208&amp;from=rss) - [Workers Who Love ‘Synergizing Paradigms’ Might be Bad at Their Jobs](https://soylentnews.org/article.pl?sid=26/03/22/1833208&amp;from=rss)
* [2026-03-23, 17:00:00](https://tech.slashdot.org/story/26/03/23/1537238/walmart-chatgpt-checkout-converted-3x-worse-than-website?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Walmart: ChatGPT Checkout Converted 3x Worse Than Website](https://tech.slashdot.org/story/26/03/23/1537238/walmart-chatgpt-checkout-converted-3x-worse-than-website?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 16:59:04](https://lobste.rs/s/jmfor8/from_error_handling_structured) - [From error-handling to structured concurrency](https://blog.nelhage.com/post/concurrent-error-handling/)
* [2026-03-23, 16:30:00](https://tech.slashdot.org/story/26/03/23/1624236/onlyfans-owner-dies-at-43?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OnlyFans Owner Dies At 43](https://tech.slashdot.org/story/26/03/23/1624236/onlyfans-owner-dies-at-43?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 16:11:03](https://news.ycombinator.com/item?id=47491466) - [Show HN: Cq – Stack Overflow for AI coding agents](https://blog.mozilla.ai/cq-stack-overflow-for-agents/)
* [2026-03-23, 16:00:00](https://tech.slashdot.org/story/26/03/23/0425234/ubers-deal-blitz-to-stop-a-robotaxi-monopoly?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Uber&apos;s Deal Blitz To Stop a Robotaxi Monopoly](https://tech.slashdot.org/story/26/03/23/0425234/ubers-deal-blitz-to-stop-a-robotaxi-monopoly?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 15:04:47](https://lobste.rs/s/7dzkuh/generators_lone_lisp) - [Generators in lone lisp](https://www.matheusmoreira.com/articles/generators-in-lone-lisp)
* [2026-03-23, 14:34:00](https://tech.slashdot.org/story/26/03/23/041250/reddit-is-weighing-identity-verification-methods-to-combat-its-bot-problem?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Reddit Is Weighing Identity Verification Methods To Combat Its Bot Problem](https://tech.slashdot.org/story/26/03/23/041250/reddit-is-weighing-identity-verification-methods-to-combat-its-bot-problem?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 14:30:45](https://lobste.rs/s/tuyk3l/semi_retirement_really_changing_my) - [Semi-retirement, or, really, changing my relationship with the BSDs](https://briancallahan.net/blog/20260322.html)
* [2026-03-23, 14:30:10](https://news.ycombinator.com/item?id=47490070) - [iPhone 17 Pro Demonstrated Running a 400B LLM](https://twitter.com/anemll/status/2035901335984611412)
* [2026-03-23, 14:14:41](https://lobste.rs/s/cxpn2j/markdown_ate_world) - [Markdown Ate the World](https://matduggan.com/markdown-ate-the-world/)
* [2026-03-23, 14:06:01](https://lobste.rs/s/i0cskl/incoherent_rust) - [An Incoherent Rust](https://www.boxyuwu.blog/posts/an-incoherent-rust/)
* [2026-03-23, 12:42:00](https://news.ycombinator.com/item?id=47488686) - [Box of Secrets: Discreetly modding an apartment intercom to work with Apple Home](https://www.jackhogan.me/blog/box-of-secrets/)
* [2026-03-23, 12:17:00](https://soylentnews.org/article.pl?sid=26/03/22/1822230&amp;from=rss) - [Concerns Due to TrueNAS Moving its Build Repository to Private Servers](https://soylentnews.org/article.pl?sid=26/03/22/1822230&amp;from=rss)
* [2026-03-23, 12:12:53](https://lobste.rs/s/he8mhk/death_character_game_console_interfaces) - [The Death of Character in Game Console Interfaces](https://vale.rocks/posts/game-console-interfaces)
* [2026-03-23, 11:54:39](https://lobste.rs/s/cwdzd6/gram_1_1_0_released) - [Gram 1.1.0 released](https://gram.liten.app/posts/release-1-1-0/)
* [2026-03-23, 10:34:00](https://developers.slashdot.org/story/26/03/23/0222218/will-ai-force-source-code-to-evolve---or-make-it-extinct?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Will AI Force Source Code to Evolve - Or Make it Extinct?](https://developers.slashdot.org/story/26/03/23/0222218/will-ai-force-source-code-to-evolve---or-make-it-extinct?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 09:39:39](https://lobste.rs/s/sz4bzf/native_instant_space_switching_on_macos) - [Native Instant Space Switching on MacOS](https://arhan.sh/blog/native-instant-space-switching-on-macos/)
* [2026-03-23, 08:10:20](https://lobste.rs/s/sndfxf/way_ctrl_c_postgres_cli_cancels_queries_is) - [The way CTRL-C in Postgres CLI cancels queries is incredibly hack-y](https://neon.com/blog/ctrl-c-in-psql-gives-me-the-heebie-jeebies)
* [2026-03-23, 07:34:00](https://tech.slashdot.org/story/26/03/23/0116256/grapheneos-refuses-to-comply-with-age-verification-laws?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GrapheneOS Refuses to Comply with Age-Verification Laws](https://tech.slashdot.org/story/26/03/23/0116256/grapheneos-refuses-to-comply-with-age-verification-laws?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-23, 07:32:00](https://soylentnews.org/article.pl?sid=26/03/21/1413247&amp;from=rss) - [Moltbook Was Peak AI Theater](https://soylentnews.org/article.pl?sid=26/03/21/1413247&amp;from=rss)
* [2026-03-23, 02:42:00](https://soylentnews.org/article.pl?sid=26/03/21/145246&amp;from=rss) - [Commission Says EU Inc Will be in Place by End of 2026](https://soylentnews.org/article.pl?sid=26/03/21/145246&amp;from=rss)
* [2026-03-22, 21:54:00](https://soylentnews.org/article.pl?sid=26/03/21/1345242&amp;from=rss) - [Proton Mail Helped FBI Unmask Anonymous ‘Stop Cop City’ Protester](https://soylentnews.org/article.pl?sid=26/03/21/1345242&amp;from=rss)
* [2026-03-22, 17:09:00](https://soylentnews.org/article.pl?sid=26/03/21/1339251&amp;from=rss) - [Wayland Set the Linux Desktop Back by 10 Years](https://soylentnews.org/article.pl?sid=26/03/21/1339251&amp;from=rss)
* [2026-03-22, 12:22:00](https://soylentnews.org/article.pl?sid=26/03/21/1337239&amp;from=rss) - [Analysis From West Point Warns That Strait of Hormuz Blockade Will Strangle US Defense Industry](https://soylentnews.org/article.pl?sid=26/03/21/1337239&amp;from=rss)
* [2026-03-22, 09:45:14](https://news.ycombinator.com/item?id=47475888) - [Trivy under attack again: Widespread GitHub Actions tag compromise secrets](https://socket.dev/blog/trivy-under-attack-again-github-actions-compromise)
* [2026-03-22, 08:06:18](https://news.ycombinator.com/item?id=47475417) - [Dune3d: A parametric 3D CAD application](https://github.com/dune3d/dune3d)
* [2026-03-22, 07:37:00](https://soylentnews.org/article.pl?sid=26/03/21/1319201&amp;from=rss) - [This Fungus Can Make Water Freeze](https://soylentnews.org/article.pl?sid=26/03/21/1319201&amp;from=rss)
* [2026-03-22, 02:52:00](https://soylentnews.org/article.pl?sid=26/03/19/208240&amp;from=rss) - [Tech Hobbyist Makes Shoulder-Mounted Guided Missile Prototype With $96 In Parts And A 3D Printer](https://soylentnews.org/article.pl?sid=26/03/19/208240&amp;from=rss)
* [2026-03-21, 22:07:00](https://soylentnews.org/article.pl?sid=26/03/19/205228&amp;from=rss) - [Nearly Half of UK Adults Happy to Use ChatGPT as a Counsellor](https://soylentnews.org/article.pl?sid=26/03/19/205228&amp;from=rss)
* [2026-03-21, 18:21:01](https://news.ycombinator.com/item?id=47469744) - [BIO – The Bao I/O Co-Processor](https://www.crowdsupply.com/baochip/dabao/updates/bio-the-bao-i-o-co-processor)
* [2026-03-21, 17:22:00](https://soylentnews.org/article.pl?sid=26/03/19/203221&amp;from=rss) - [Nvidia Resumes Manufacturing of H200 Chips for China, CEO Says](https://soylentnews.org/article.pl?sid=26/03/19/203221&amp;from=rss)
* [2026-03-21, 14:47:58](https://news.ycombinator.com/item?id=47467543) - [MSA: Memory Sparse Attention](https://github.com/EverMind-AI/MSA)
* [2026-03-21, 12:40:00](https://soylentnews.org/article.pl?sid=26/03/19/201233&amp;from=rss) - [Tundra Tongue: The Science Behind a Very Cold Mistake](https://soylentnews.org/article.pl?sid=26/03/19/201233&amp;from=rss)
* [2026-03-21, 07:55:00](https://soylentnews.org/article.pl?sid=26/03/19/1958201&amp;from=rss) - [Afroman Wins &apos;Lemon Pound Cake&apos; Lawsuit Over Raid-Turned-Music-Video](https://soylentnews.org/article.pl?sid=26/03/19/1958201&amp;from=rss)
* [2026-03-21, 03:07:00](https://soylentnews.org/article.pl?sid=26/03/19/1638217&amp;from=rss) - [How Should We Define Mathematical Beauty in the AI Age?](https://soylentnews.org/article.pl?sid=26/03/19/1638217&amp;from=rss)
* [2026-03-20, 22:15:00](https://soylentnews.org/article.pl?sid=26/03/19/1636248&amp;from=rss) - [Invisible Malicious Code Attacks 151 GitHub Repos And VS Code — Glassworm Attack Uses Blockchain](https://soylentnews.org/article.pl?sid=26/03/19/1636248&amp;from=rss)
* [2026-03-20, 17:53:00](https://soylentnews.org/article.pl?sid=26/03/19/1635218&amp;from=rss) - [Researchers Played Music to Cells – Aggressiveness of Laryngeal Cancer Decreased](https://soylentnews.org/article.pl?sid=26/03/19/1635218&amp;from=rss)
* [2026-03-20, 16:34:24](https://news.ycombinator.com/item?id=47456997) - [A 6502 disassembler with a TUI: A modern take on Regenerator](https://github.com/ricardoquesada/regenerator2000)
* [2026-03-20, 15:26:24](https://news.ycombinator.com/item?id=47455961) - [Microservices and the First Law of Distributed Objects (2014)](https://martinfowler.com/articles/distributed-objects-microservices.html)
* [2026-03-20, 12:46:00](https://soylentnews.org/article.pl?sid=26/03/19/0318230&amp;from=rss) - [Elon Musk Says His Chipmaking &apos;Terafab Project&apos; Venture Will Launch in Seven Days](https://soylentnews.org/article.pl?sid=26/03/19/0318230&amp;from=rss)
* [2026-03-20, 12:42:37](https://news.ycombinator.com/item?id=47453737) - [Overcoming the Friendship Recession](https://joeprevite.com/friendship-recession/)
* [2026-03-20, 12:02:00](https://news.ycombinator.com/item?id=47453398) - [Pompeii&apos;s battle scars linked to an ancient &apos;machine gun&apos;](https://phys.org/news/2026-03-pompeii-scars-linked-ancient-machine.html)
* [2026-03-20, 07:57:00](https://soylentnews.org/article.pl?sid=26/03/19/0310236&amp;from=rss) - [Massive Interpol Operation Takes Down 45,000 Ip Addresses and Leads to 94 Arrests](https://soylentnews.org/article.pl?sid=26/03/19/0310236&amp;from=rss)
* [2026-03-20, 03:11:00](https://soylentnews.org/article.pl?sid=26/03/19/035202&amp;from=rss) - [The Ongoing Strait of Hormuz Blockage Will Impact the Semiconductor and AI Industries](https://soylentnews.org/article.pl?sid=26/03/19/035202&amp;from=rss)
