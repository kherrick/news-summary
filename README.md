# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* Intel's new Core Series 3 challenges the MacBook Neo. [Read more](https://apple.slashdot.org/story/26/04/17/0336256/intels-new-core-series-3-is-its-answer-to-the-macbook-neo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) and [comments](https://apple.slashdot.org/story/26/04/17/0336256/intels-new-core-series-3-is-its-answer-to-the-macbook-neo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* Playdate's handheld innovation changes how Duke University approaches game design. [Details here](https://news.play.date/news/duke-playdate-education/) and join the [discussion](https://news.ycombinator.com/item?id=47798176).

* Substrate AI seeks developers for harness engineering roles. [Learn more](https://www.ycombinator.com/companies/substrate/jobs/QJU9023-harness-engineer) and [discuss](https://news.ycombinator.com/item?id=47802016).

* Boston Dynamics' robot dog enhances utility with new analytical features like reading gauges and spotting spills. Learn how [here](https://hardware.slashdot.org/story/26/04/15/2143237/boston-dynamics-robot-dog-can-now-read-gauges-spot-spills-and-reason?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) and join the conversation [here](https://hardware.slashdot.org/story/26/04/15/2143237/boston-dynamics-robot-dog-can-now-read-gauges-spot-spills-and-reason?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

## Artificial Intelligence and Automation

* OpenAI launches a significant Codex update to challenge Claude Code. [Explore the update](https://developers.slashdot.org/story/26/04/16/2040206/openais-big-codex-update-is-a-direct-shot-at-claude-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) and [comments](https://developers.slashdot.org/story/26/04/16/2040206/openais-big-codex-update-is-a-direct-shot-at-claude-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* Ukraine's military embraces a robot surge to mitigate drone risks. [Read more](https://soylentnews.org/article.pl?sid=26/04/15/1723257&amp;from=rss) and [comments](https://soylentnews.org/article.pl?sid=26/04/15/1723257&amp;from=rss).

* Discover the Qwen3.6-35B-A3B AI coding model. [Learn more](https://qwen.ai/blog?id=qwen3.6-35b-a3b) and join the [discussion](https://news.ycombinator.com/item?id=47792764).

* Anthropic unveils Claude Opus 4.7, a safer AI alternative to Mythos. [Details here](https://slashdot.org/story/26/04/16/1658237/anthropic-rolls-out-claude-opus-47-an-ai-model-that-is-less-risky-than-mythos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) and [comments](https://slashdot.org/story/26/04/16/1658237/anthropic-rolls-out-claude-opus-47-an-ai-model-that-is-less-risky-than-mythos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

## Legal and Regulatory Developments

* A US bill mandates on-device age verification to improve online safety. [Details here](https://reclaimthenet.org/us-bill-mandates-on-device-age-verification) and read the [discussion](https://news.ycombinator.com/item?id=47801991).

* US Appeals Court overturns a 158-year-old ban on home distilling, declaring it unconstitutional. [Read more here](https://soylentnews.org/article.pl?sid=26/04/15/1535223&amp;from=rss) and [comments](https://soylentnews.org/article.pl?sid=26/04/15/1535223&amp;from=rss).

* California AG accuses Amazon of price-fixing tactics following release of unsealed records. [More info](https://www.theguardian.com/us-news/ng-interactive/2026/apr/16/amazon-price-fixing-california-lawsuit) and join [discussion](https://news.ycombinator.com/item?id=47800166).

## Science and Environment

* Sperm whales' communication patterns show similarities to human language. [Read about the study](https://science.slashdot.org/story/26/04/17/0143228/sperm-whales-communication-closely-parallels-human-language-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) and join the [discussion](https://science.slashdot.org/story/26/04/17/0143228/sperm-whales-communication-closely-parallels-human-language-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* Efforts by researchers reveal electrode technology achieving 86% CO₂-to-plastic efficiency. [Learn more here](https://soylentnews.org/article.pl?sid=26/04/14/0413241&amp;from=rss) and explore the [discussion](https://soylentnews.org/article.pl?sid=26/04/14/0413241&amp;from=rss).

* Nature is still actively molding human genes, as shown in a recent study. [Read more](https://news.slashdot.org/story/26/04/16/007258/nature-is-still-molding-human-genes-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) and see related [comments](https://news.slashdot.org/story/26/04/16/007258/nature-is-still-molding-human-genes-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

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

* [2026-04-17, 07:20:46](https://news.ycombinator.com/item?id=47803323) - [FIM – Linux framebuffer image viewer](https://www.nongnu.org/fbi-improved/)
* [2026-04-17, 07:00:00](https://apple.slashdot.org/story/26/04/17/0336256/intels-new-core-series-3-is-its-answer-to-the-macbook-neo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel&apos;s New Core Series 3 Is Its Answer To the MacBook Neo](https://apple.slashdot.org/story/26/04/17/0336256/intels-new-core-series-3-is-its-answer-to-the-macbook-neo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-17, 06:19:45](https://news.ycombinator.com/item?id=47802971) - [PROBoter – Open-source platform for automated PCB analysis](https://www.schutzwerk.com/en/blog/proboter-01/)
* [2026-04-17, 05:43:07](https://lobste.rs/s/yr2mcf/folk_computer) - [Folk Computer](https://folk.computer/start)
* [2026-04-17, 04:11:13](https://lobste.rs/s/ygjm5d/git_kv_key_value_store_attached_git) - [git-kv: Key-value store attached to git commits using Git notes](https://github.com/sebastien/git-kv)
* [2026-04-17, 03:59:22](https://news.ycombinator.com/item?id=47802330) - [Bluesky has been dealing with a DDoS attack for nearly a full day](https://www.theverge.com/tech/913638/bluesky-has-been-dealing-with-a-ddos-attack-for-nearly-a-full-day)
* [2026-04-17, 03:55:54](https://news.ycombinator.com/item?id=47802312) - [Human Accelerated Region 1](https://en.wikipedia.org/wiki/Human_accelerated_region_1)
* [2026-04-17, 03:52:00](https://soylentnews.org/article.pl?sid=26/04/15/1723257&amp;from=rss) - [Ukraine&apos;s Military Robot Surge Aims to Offset Drone Risks to Humans](https://soylentnews.org/article.pl?sid=26/04/15/1723257&amp;from=rss)
* [2026-04-17, 03:36:26](https://news.ycombinator.com/item?id=47802233) - [Discourse Is Not Going Closed Source](https://blog.discourse.org/2026/04/discourse-is-not-going-closed-source/)
* [2026-04-17, 03:30:00](https://science.slashdot.org/story/26/04/17/0143228/sperm-whales-communication-closely-parallels-human-language-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sperm Whales&apos; Communication Closely Parallels Human Language, Study Finds](https://science.slashdot.org/story/26/04/17/0143228/sperm-whales-communication-closely-parallels-human-language-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-17, 02:53:16](https://news.ycombinator.com/item?id=47802016) - [Substrate AI Is Hiring Harness Engineers](https://www.ycombinator.com/companies/substrate/jobs/QJU9023-harness-engineer)
* [2026-04-17, 02:50:02](https://news.ycombinator.com/item?id=47801991) - [US Bill Mandates On-Device Age Verification](https://reclaimthenet.org/us-bill-mandates-on-device-age-verification)
* [2026-04-17, 00:37:47](https://news.ycombinator.com/item?id=47801255) - [Show HN: SPICE simulation → oscilloscope → verification with Claude Code](https://lucasgerads.com/blog/lecroy-mcp-spice-demo/)
* [2026-04-16, 23:15:33](https://news.ycombinator.com/item?id=47800738) - [Everything we like is a psyop?](https://techcrunch.com/2026/04/16/everything-we-like-is-a-psyop/)
* [2026-04-16, 23:07:00](https://soylentnews.org/article.pl?sid=26/04/15/1539246&amp;from=rss) - [The Entity That Has Been Watching Bitcoin for 14 Years](https://soylentnews.org/article.pl?sid=26/04/15/1539246&amp;from=rss)
* [2026-04-16, 23:00:00](https://yro.slashdot.org/story/26/04/16/2052224/totalrecall-reloaded-tool-finds-a-side-entrance-to-windows-11-recall-database?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;TotalRecall Reloaded&apos; Tool Finds a Side Entrance To Windows 11 Recall Database](https://yro.slashdot.org/story/26/04/16/2052224/totalrecall-reloaded-tool-finds-a-side-entrance-to-windows-11-recall-database?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-16, 22:08:53](https://news.ycombinator.com/item?id=47800166) - [New unsealed records reveal Amazon&apos;s price-fixing tactics, California AG claims](https://www.theguardian.com/us-news/ng-interactive/2026/apr/16/amazon-price-fixing-california-lawsuit)
* [2026-04-16, 22:00:00](https://developers.slashdot.org/story/26/04/16/2040206/openais-big-codex-update-is-a-direct-shot-at-claude-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI&apos;s Big Codex Update Is a Direct Shot At Claude Code](https://developers.slashdot.org/story/26/04/16/2040206/openais-big-codex-update-is-a-direct-shot-at-claude-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-16, 21:56:37](https://news.ycombinator.com/item?id=47800033) - [Guy builds AI driven hardware hacker arm from duct tape, old cam and CNC machine](https://github.com/gainsec/autoprober)
* [2026-04-16, 21:14:02](https://news.ycombinator.com/item?id=47799573) - [A Better R Programming Experience Thanks to Tree-sitter](https://ropensci.org/blog/2026/04/02/tree-sitter-overview/)
* [2026-04-16, 21:00:00](https://linux.slashdot.org/story/26/04/16/2029253/is-linux-mint-in-trouble?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is Linux Mint In Trouble?](https://linux.slashdot.org/story/26/04/16/2029253/is-linux-mint-in-trouble?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-16, 20:49:35](https://news.ycombinator.com/item?id=47799322) - [The beginning of scarcity in AI](https://tomtunguz.com/ai-compute-crisis-2026/)
* [2026-04-16, 20:32:27](https://lobste.rs/s/dlxlvj/okay_what_actually_uses_rust) - [Okay, what actually uses Rust](https://blog.goose.love/posts/what-actually-uses-rust/)
* [2026-04-16, 20:00:00](https://hardware.slashdot.org/story/26/04/16/1916239/europe-has-maybe-6-weeks-of-jet-fuel-left?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Europe Has &apos;Maybe 6 Weeks of Jet Fuel Left&apos;](https://hardware.slashdot.org/story/26/04/16/1916239/europe-has-maybe-6-weeks-of-jet-fuel-left?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-16, 19:32:18](https://news.ycombinator.com/item?id=47798345) - [Official Clojure Documentary page with Video, Shownotes, and Links](https://clojure.org/about/documentary)
* [2026-04-16, 19:18:31](https://news.ycombinator.com/item?id=47798176) - [Playdate’s handheld changed how Duke University teaches game design](https://news.play.date/news/duke-playdate-education/)
* [2026-04-16, 19:16:00](https://lobste.rs/s/xaicu8/claude_coding_vibes_are_getting_worse) - [The Claude Coding Vibes Are Getting Worse](https://blog.matthewbrunelle.com/the-claude-coding-vibes-are-getting-worse/)
* [2026-04-16, 19:12:07](https://lobste.rs/s/nvzsa5/clojure_documentary) - [Clojure: The Documentary](https://www.youtube.com/watch?v=Y24vK_QDLFg)
* [2026-04-16, 19:00:00](https://yro.slashdot.org/story/26/04/16/184240/google-pentagon-discuss-classified-ai-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google, Pentagon Discuss Classified AI Deal](https://yro.slashdot.org/story/26/04/16/184240/google-pentagon-discuss-classified-ai-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-16, 18:44:27](https://lobste.rs/s/rswccw/tech_note_sidenotes) - [Tech Note: Sidenotes](https://unbreaking.org/blog/tech-note-sidenotes/)
* [2026-04-16, 18:39:59](https://news.ycombinator.com/item?id=47797665) - [Android CLI: Build Android apps 3x faster using any agent](https://android-developers.googleblog.com/2026/04/build-android-apps-3x-faster-using-any-agent.html)
* [2026-04-16, 18:20:00](https://soylentnews.org/article.pl?sid=26/04/15/1535223&amp;from=rss) - [US Appeals Court Declares 158-Year-Old Home Distilling Ban Unconstitutional](https://soylentnews.org/article.pl?sid=26/04/15/1535223&amp;from=rss)
* [2026-04-16, 18:00:00](https://tech.slashdot.org/story/26/04/16/1718230/ipv6-usage-reaches-historic-50-across-google-services?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [IPv6 Usage Reaches Historic 50% Across Google Services](https://tech.slashdot.org/story/26/04/16/1718230/ipv6-usage-reaches-historic-50-across-google-services?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-16, 17:37:20](https://news.ycombinator.com/item?id=47796830) - [Qwen3.6-35B-A3B on my laptop drew me a better pelican than Claude Opus 4.7](https://simonwillison.net/2026/Apr/16/qwen-beats-opus/)
* [2026-04-16, 17:34:44](https://lobste.rs/s/myzsbg/stop_using_jwts_2019) - [Stop using JWTs (2019)](https://gist.github.com/samsch/0d1f3d3b4745d778f78b230cf6061452)
* [2026-04-16, 17:12:19](https://news.ycombinator.com/item?id=47796469) - [Codex for almost everything](https://openai.com/index/codex-for-almost-everything/)
* [2026-04-16, 17:00:00](https://slashdot.org/story/26/04/16/1658237/anthropic-rolls-out-claude-opus-47-an-ai-model-that-is-less-risky-than-mythos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Rolls Out Claude Opus 4.7, an AI Model That Is Less Risky Than Mythos](https://slashdot.org/story/26/04/16/1658237/anthropic-rolls-out-claude-opus-47-an-ai-model-that-is-less-risky-than-mythos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-16, 16:00:00](https://yro.slashdot.org/story/26/04/16/0717208/eu-age-verification-app-announced-to-protect-children-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EU Age Verification App Announced To Protect Children Online](https://yro.slashdot.org/story/26/04/16/0717208/eu-age-verification-app-announced-to-protect-children-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-16, 15:32:52](https://lobste.rs/s/kvf7u1/from_five_optional_fields_discriminated) - [From five optional fields to a discriminated union: CLI parsing with Optique 1.0](https://hackers.pub/@hongminhee/2026/optique-10-discriminated-unions-for-cli)
* [2026-04-16, 15:19:54](https://news.ycombinator.com/item?id=47794514) - [Launch HN: Kampala (YC W26) – Reverse-Engineer Apps into APIs](https://www.zatanna.ai/kampala)
* [2026-04-16, 15:14:10](https://lobste.rs/s/pmxhem/announcing_rust_1_95_0) - [Announcing Rust 1.95.0](https://blog.rust-lang.org/2026/04/16/Rust-1.95.0/)
* [2026-04-16, 15:00:00](https://tech.slashdot.org/story/26/04/16/079216/researchers-induce-smells-with-ultrasound-no-chemical-cartridges-required?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Researchers Induce Smells With Ultrasound, No Chemical Cartridges Required](https://tech.slashdot.org/story/26/04/16/079216/researchers-induce-smells-with-ultrasound-no-chemical-cartridges-required?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-16, 14:42:07](https://lobste.rs/s/ebltpu/detecting_dosbox_from_within_box) - [Detecting DOSBox from within the Box](http://datagirl.xyz/posts/dos_inside_the_box.html)
* [2026-04-16, 14:23:50](https://news.ycombinator.com/item?id=47793411) - [Claude Opus 4.7](https://www.anthropic.com/news/claude-opus-4-7)
* [2026-04-16, 14:10:16](https://lobste.rs/s/ouzdjl/time_travel_debugger_for_webassembly) - [A time travel debugger for WebAssembly](https://github.com/friendlymatthew/gabagool/tree/main/gabagool-debug-adapter#gabagool-debug-adapter)
* [2026-04-16, 14:01:20](https://lobste.rs/s/yhbjpt/future_everything_is_lies_i_guess_where_do) - [The Future of Everything is Lies, I Guess: Where Do We Go From Here?](https://aphyr.com/posts/420-the-future-of-everything-is-lies-i-guess-where-do-we-go-from-here)
* [2026-04-16, 13:56:48](https://lobste.rs/s/fzwy8c/esonatlangs_bring_complexity_natural) - [EsoNatLangs Bring the Complexity of Natural Language into Code](https://esoteric.codes/blog/five-esonatlangs)
* [2026-04-16, 13:36:27](https://news.ycombinator.com/item?id=47792764) - [Qwen3.6-35B-A3B: Agentic coding power, now open to all](https://qwen.ai/blog?id=qwen3.6-35b-a3b)
* [2026-04-16, 13:36:00](https://soylentnews.org/article.pl?sid=26/04/15/0217209&amp;from=rss) - [AI Token Freeloaders Manipulating Customer Support Bots](https://soylentnews.org/article.pl?sid=26/04/15/0217209&amp;from=rss)
* [2026-04-16, 13:32:13](https://news.ycombinator.com/item?id=47792718) - [The future of everything is lies, I guess: Where do we go from here?](https://aphyr.com/posts/420-the-future-of-everything-is-lies-i-guess-where-do-we-go-from-here)
* [2026-04-16, 13:17:37](https://news.ycombinator.com/item?id=47792538) - [Cloudflare&apos;s AI Platform: an inference layer designed for agents](https://blog.cloudflare.com/ai-platform/)
* [2026-04-16, 13:05:54](https://lobste.rs/s/wa4xvo/compiling_java_as_target_language) - [Compiling to Java as a target language](https://matt.might.net/articles/compiling-to-java/)
* [2026-04-16, 12:48:35](https://lobste.rs/s/y8shi7/many_step_sequences_go) - [Many-Step Sequences in Go](https://lesiw.dev/go/step/)
* [2026-04-16, 11:38:21](https://lobste.rs/s/2byom8/too_much_discussion_xor_swap_trick) - [Too much Discussion of the XOR swap trick](https://heather.cafe/posts/too_much_xor_swap_trick/)
* [2026-04-16, 11:00:00](https://mobile.slashdot.org/story/26/04/16/071239/bullet-train-upgrade-brings-5g-windows-noise-cancelling-cabins-to-japan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bullet Train Upgrade Brings 5G Windows, Noise-Cancelling Cabins To Japan](https://mobile.slashdot.org/story/26/04/16/071239/bullet-train-upgrade-brings-5g-windows-noise-cancelling-cabins-to-japan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-16, 10:44:04](https://lobste.rs/s/t8xjpi/kde_gear_26_04) - [KDE Gear 26.04](https://kde.org/announcements/gear/26.04.0/)
* [2026-04-16, 10:19:26](https://lobste.rs/s/sbtemt/age_snarky_ui) - [The age of snarky UI](https://thoughtbot.com/blog/the-age-of-snarky-ui)
* [2026-04-16, 09:57:55](https://lobste.rs/s/0qggzn/mastodon_don_t_use_mastodon_mstdn_domain) - [Mastodon: Don&apos;t use \&quot;mastodon\&quot; or \&quot;mstdn\&quot; in domain names](https://github.com/mastodon/mastodon/commit/d6f8ac97e808821180e9ae0c66879b7a2d64e690)
* [2026-04-16, 08:52:00](https://soylentnews.org/communityreviews/article.pl?sid=26/04/15/0214204&amp;from=rss) - [OpenAI Says Elon Musk is ‘Injecting Chaos’ With Recent Legal Maneuver](https://soylentnews.org/communityreviews/article.pl?sid=26/04/15/0214204&amp;from=rss)
* [2026-04-16, 08:47:04](https://lobste.rs/s/xijpr1/ipv6_traffic_crosses_50_mark) - [IPv6 traffic crosses the 50% mark](https://www.google.com/intl/en/ipv6/statistics.html?yzh=28197)
* [2026-04-16, 08:07:15](https://lobste.rs/s/cazzpf/cltrace_dtrace_inspired_tracing) - [CLTRACE: DTrace inspired tracing and observability framework for Common Lisp applications](https://github.com/MarceColl/CLTRACE)
* [2026-04-16, 07:00:00](https://hardware.slashdot.org/story/26/04/16/0030206/uk-households-to-be-urged-to-use-more-power-this-summer-as-renewables-soar?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Households To Be Urged To Use More Power This Summer As Renewables Soar](https://hardware.slashdot.org/story/26/04/16/0030206/uk-households-to-be-urged-to-use-more-power-this-summer-as-renewables-soar?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-16, 04:05:00](https://soylentnews.org/article.pl?sid=26/04/15/028227&amp;from=rss) - [This Memory Chip Survives Temperatures Hotter Than Lava](https://soylentnews.org/article.pl?sid=26/04/15/028227&amp;from=rss)
* [2026-04-16, 03:30:00](https://news.slashdot.org/story/26/04/16/007258/nature-is-still-molding-human-genes-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nature Is Still Molding Human Genes, Study Finds](https://news.slashdot.org/story/26/04/16/007258/nature-is-still-molding-human-genes-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-15, 23:20:00](https://soylentnews.org/article.pl?sid=26/04/15/021231&amp;from=rss) - [Blaming Kids for Poor Security](https://soylentnews.org/article.pl?sid=26/04/15/021231&amp;from=rss)
* [2026-04-15, 23:00:00](https://hardware.slashdot.org/story/26/04/15/2143237/boston-dynamics-robot-dog-can-now-read-gauges-spot-spills-and-reason?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Boston Dynamics&apos; Robot Dog Can Now Read Gauges, Spot Spills, and Reason](https://hardware.slashdot.org/story/26/04/15/2143237/boston-dynamics-robot-dog-can-now-read-gauges-spot-spills-and-reason?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-15, 19:59:39](https://lobste.rs/s/nihbc8/you_cannot_use_gnu_gpl_take_software) - [You cannot use the GNU (A)GPL to take software freedom away](https://www.fsf.org/blogs/licensing/agpl-is-not-a-tool-for-taking-freedom-away)
* [2026-04-15, 18:37:00](https://soylentnews.org/article.pl?sid=26/04/15/0158227&amp;from=rss) - [South Korea&apos;s Telecom Giants Surprise 7 Million Users With Unlimited, Universal Internet](https://soylentnews.org/article.pl?sid=26/04/15/0158227&amp;from=rss)
* [2026-04-15, 18:12:33](https://lobste.rs/s/r4dspa/ai_assistance_reduces_persistence_hurts) - [AI Assistance Reduces Persistence and Hurts Independent Performance](https://arxiv.org/pdf/2604.04721)
* [2026-04-15, 13:52:00](https://soylentnews.org/article.pl?sid=26/04/14/0413241&amp;from=rss) - [Electrode Technology Achieves 86% Efficiency for Converting CO₂ Into Plastic Precursors](https://soylentnews.org/article.pl?sid=26/04/14/0413241&amp;from=rss)
* [2026-04-15, 12:57:28](https://lobste.rs/s/otzxqs/things_you_didn_t_know_about_indexes) - [Things you didn&apos;t know about indexes](https://jon.chrt.dev/2026/04/15/things-you-didnt-know-about-indexes.html)
* [2026-04-15, 11:57:24](https://lobste.rs/s/q6j2fu/retrofitting_jit_compilers_into_c) - [Retrofitting JIT Compilers into C Interpreters](https://tratt.net/laurie/blog/2026/retrofitting_jit_compilers_into_c_interpreters.html)
* [2026-04-15, 09:07:00](https://soylentnews.org/article.pl?sid=26/04/14/049220&amp;from=rss) - [Linux Lays Down the Law on AI-Generated Code](https://soylentnews.org/article.pl?sid=26/04/14/049220&amp;from=rss)
* [2026-04-15, 04:22:00](https://soylentnews.org/article.pl?sid=26/04/14/043205&amp;from=rss) - [The AI Great Leap Forward](https://soylentnews.org/article.pl?sid=26/04/14/043205&amp;from=rss)
* [2026-04-14, 23:35:00](https://soylentnews.org/article.pl?sid=26/04/14/0256247&amp;from=rss) - [Missouri Town Fires Half its City Council Over Data Center Deal](https://soylentnews.org/article.pl?sid=26/04/14/0256247&amp;from=rss)
* [2026-04-14, 23:20:39](https://news.ycombinator.com/item?id=47772725) - [CadQuery is an open-source Python library for building 3D CAD models](https://cadquery.github.io/)
* [2026-04-14, 18:53:00](https://soylentnews.org/article.pl?sid=26/04/14/0235214&amp;from=rss) - [Original Task Manager Was Only 80KB So It Could Run Smoothly on 90s Computers](https://soylentnews.org/article.pl?sid=26/04/14/0235214&amp;from=rss)
* [2026-04-14, 14:02:00](https://soylentnews.org/article.pl?sid=26/04/12/173259&amp;from=rss) - [Tea: A Stimulant That Made the Modern World ](https://soylentnews.org/article.pl?sid=26/04/12/173259&amp;from=rss)
* [2026-04-14, 09:12:00](https://soylentnews.org/article.pl?sid=26/04/12/170258&amp;from=rss) - [Linux Kernel Maintainers Are Following Through on Removing Intel 486 Support](https://soylentnews.org/article.pl?sid=26/04/12/170258&amp;from=rss)
* [2026-04-14, 04:29:00](https://soylentnews.org/article.pl?sid=26/04/12/170200&amp;from=rss) - [Startup Secures $30 Million Contract to 3D Print Jet Engines for the USAF](https://soylentnews.org/article.pl?sid=26/04/12/170200&amp;from=rss)
* [2026-04-13, 23:45:58](https://news.ycombinator.com/item?id=47759436) - [30 Years of HPC: many hardware advances, little adoption of new languages](https://chapel-lang.org/blog/posts/30years/)
* [2026-04-13, 23:44:00](https://soylentnews.org/article.pl?sid=26/04/12/1524251&amp;from=rss) - [Human Echolocation Works Step by Step](https://soylentnews.org/article.pl?sid=26/04/12/1524251&amp;from=rss)
* [2026-04-13, 18:54:00](https://soylentnews.org/article.pl?sid=26/04/12/1522257&amp;from=rss) - [OpenAI Backs Bill That Would Limit Liability for AI-Enabled Mass Deaths or Financial Disasters](https://soylentnews.org/article.pl?sid=26/04/12/1522257&amp;from=rss)
* [2026-04-13, 18:42:29](https://news.ycombinator.com/item?id=47756239) - [Building a Web Page That Edits Itself](https://www.patrickweaver.net/blog/one-pager-self-editing-html/)
* [2026-04-13, 17:25:50](https://news.ycombinator.com/item?id=47755261) - [A Python Interpreter Written in Python](https://aosabook.org/en/500L/a-python-interpreter-written-in-python.html)
* [2026-04-13, 14:11:00](https://soylentnews.org/article.pl?sid=26/04/12/1154237&amp;from=rss) - [Intel Introduces its Own Neural Compression Technology With a Fallback Mode That Works on All GPUs](https://soylentnews.org/article.pl?sid=26/04/12/1154237&amp;from=rss)
* [2026-04-13, 11:39:12](https://news.ycombinator.com/item?id=47750600) - [ReBot-DevArm: open-source Robotic Arm](https://github.com/Seeed-Projects/reBot-DevArm)
* [2026-04-13, 11:09:09](https://news.ycombinator.com/item?id=47750364) - [Century-bandwidth antenna reinvented,patented after 18 yrs with decade bandwidth](https://ieeexplore.ieee.org/document/1715264)
* [2026-04-13, 09:24:00](https://soylentnews.org/article.pl?sid=26/04/12/1147250&amp;from=rss) - [Cloudflare and GoDaddy Team Up to Curb AI Bot Brigades](https://soylentnews.org/article.pl?sid=26/04/12/1147250&amp;from=rss)
* [2026-04-13, 07:12:45](https://news.ycombinator.com/item?id=47748733) - [A Git helper tool that breaks large merges into parallelizable tasks](https://github.com/mwallner/mergetopus)
* [2026-04-13, 04:35:00](https://soylentnews.org/article.pl?sid=26/04/11/0355254&amp;from=rss) - [Little Snitch for Linux Released!](https://soylentnews.org/article.pl?sid=26/04/11/0355254&amp;from=rss)
