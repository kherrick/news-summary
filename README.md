# [News Summary](https://kherrick.github.io/news-summary/)

## Advancements in AI and Quantum Technologies

* [We beat Google’s zero-knowledge proof of quantum cryptanalysis](https://blog.trailofbits.com/2026/04/17/we-beat-googles-zero-knowledge-proof-of-quantum-cryptanalysis/) ([comments](https://lobste.rs/s/d55yj0/we_beat_google_s_zero_knowledge_proof))

* [OpenAI's Big Codex Update Is a Direct Shot At Claude Code](https://developers.slashdot.org/story/26/04/16/2040206/openais-big-codex-update-is-a-direct-shot-at-claude-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://developers.slashdot.org/story/26/04/16/2040206/openais-big-codex-update-is-a-direct-shot-at-claude-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Google, Pentagon Discuss Classified AI Deal](https://yro.slashdot.org/story/26/04/16/184240/google-pentagon-discuss-classified-ai-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://yro.slashdot.org/story/26/04/16/184240/google-pentagon-discuss-classified-ai-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Notable Innovations in Software and Hardware

* [zmx - run local code agents on remote machines](https://bower.sh/zmx-ai-portal) ([comments](https://lobste.rs/s/oozbdu/zmx_run_local_code_agents_on_remote))

* [A time travel debugger for WebAssembly](https://github.com/friendlymatthew/gabagool/tree/main/gabagool-debug-adapter#gabagool-debug-adapter) ([comments](https://lobste.rs/s/ouzdjl/time_travel_debugger_for_webassembly))

* [500 Lines or Less: A Python Interpreter Written in Python](https://aosabook.org/en/500L/a-python-interpreter-written-in-python.html) ([comments](https://lobste.rs/s/eec2qq/500_lines_less_python_interpreter))

## Environmental and Policy Issues

* [How Big Tech wrote secrecy into EU law to hide data centres' environmental toll](https://www.investigate-europe.eu/posts/big-tech-data-centres-secrecy-eu-law-environment-footprint) ([comments](https://news.ycombinator.com/item?id=47803745))

* [EU Age Verification App Announced To Protect Children Online](https://yro.slashdot.org/story/26/04/16/0717208/eu-age-verification-app-announced-to-protect-children-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://yro.slashdot.org/story/26/04/16/0717208/eu-age-verification-app-announced-to-protect-children-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [US Bill Mandates On-Device Age Verification](https://reclaimthenet.org/us-bill-mandates-on-device-age-verification) ([comments](https://news.ycombinator.com/item?id=47801991))

## Cutting-Edge Technology and Cultural Milestones

* [Sperm Whales' Communication Closely Parallels Human Language, Study Finds](https://science.slashdot.org/story/26/04/17/0143228/sperm-whales-communication-closely-parallels-human-language-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://science.slashdot.org/story/26/04/17/0143228/sperm-whales-communication-closely-parallels-human-language-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Reed Hastings Is Leaving Netflix After 29 Years](https://news.slashdot.org/story/26/04/17/0325238/reed-hastings-is-leaving-netflix-after-29-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.slashdot.org/story/26/04/17/0325238/reed-hastings-is-leaving-netflix-after-29-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Meta Zuckerberg Becomes the New Clippy](https://soylentnews.org/article.pl?sid=26/04/15/1727239&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/04/15/1727239&amp;from=rss))

## Cybersecurity Concerns and Research

* [HTTP desync in Discord's media proxy: Spying on a whole platform](https://tmctmt.com/posts/http-desync-in-discord/) ([comments](https://lobste.rs/s/zxgmfx/http_desync_discord_s_media_proxy_spying))

* [PROBoter – Open-source platform for automated PCB analysis](https://www.schutzwerk.com/en/blog/proboter-01/) ([comments](https://news.ycombinator.com/item?id=47802971))

* [TotalRecall Reloaded' Tool Finds a Side Entrance To Windows 11 Recall Database](https://yro.slashdot.org/story/26/04/16/2052224/totalrecall-reloaded-tool-finds-a-side-entrance-to-windows-11-recall-database?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://yro.slashdot.org/story/26/04/16/2052224/totalrecall-reloaded-tool-finds-a-side-entrance-to-windows-11-recall-database?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

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

* [2026-04-17, 13:49:55](https://lobste.rs/s/d55yj0/we_beat_google_s_zero_knowledge_proof) - [We beat Google’s zero-knowledge proof of quantum cryptanalysis](https://blog.trailofbits.com/2026/04/17/we-beat-googles-zero-knowledge-proof-of-quantum-cryptanalysis/)
* [2026-04-17, 13:20:00](https://soylentnews.org/article.pl?sid=26/04/15/1730255&amp;from=rss) - [Claude Mythos Preview Has Officially Frightened the British](https://soylentnews.org/article.pl?sid=26/04/15/1730255&amp;from=rss)
* [2026-04-17, 13:02:52](https://lobste.rs/s/y8jlwv/tangled_newsletter_01_hello) - [tangled newsletter 01 — hello](https://blog.tangled.org/newsletter-01/)
* [2026-04-17, 12:22:14](https://lobste.rs/s/oozbdu/zmx_run_local_code_agents_on_remote) - [zmx - run local code agents on remote machines](https://bower.sh/zmx-ai-portal)
* [2026-04-17, 12:01:19](https://news.ycombinator.com/item?id=47804965) - [Isaac Asimov: The Last Question](https://hex.ooo/library/last_question.html)
* [2026-04-17, 11:59:40](https://lobste.rs/s/zxgmfx/http_desync_discord_s_media_proxy_spying) - [HTTP desync in Discord&apos;s media proxy: Spying on a whole platform](https://tmctmt.com/posts/http-desync-in-discord/)
* [2026-04-17, 11:37:05](https://lobste.rs/s/tbvl30/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/tbvl30/what_are_you_doing_this_weekend)
* [2026-04-17, 11:00:00](https://news.slashdot.org/story/26/04/17/0325238/reed-hastings-is-leaving-netflix-after-29-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Reed Hastings Is Leaving Netflix After 29 Years](https://news.slashdot.org/story/26/04/17/0325238/reed-hastings-is-leaving-netflix-after-29-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-17, 09:09:48](https://lobste.rs/s/fsryww/collaborative_autoresearch_on_peer_peer) - [Collaborative Autoresearch on a Peer-to-Peer Network](https://community.computer)
* [2026-04-17, 08:51:38](https://news.ycombinator.com/item?id=47803844) - [Ada, Its Design, and the Language That Built the Languages](https://www.iqiipi.com/the-quiet-colossus.html)
* [2026-04-17, 08:47:07](https://lobste.rs/s/eec2qq/500_lines_less_python_interpreter) - [500 Lines or Less: A Python Interpreter Written in Python](https://aosabook.org/en/500L/a-python-interpreter-written-in-python.html)
* [2026-04-17, 08:36:00](https://soylentnews.org/article.pl?sid=26/04/15/1727239&amp;from=rss) - [Meta Zuckerberg Becomes the New Clippy](https://soylentnews.org/article.pl?sid=26/04/15/1727239&amp;from=rss)
* [2026-04-17, 08:32:54](https://news.ycombinator.com/item?id=47803745) - [How Big Tech wrote secrecy into EU law to hide data centres&apos; environmental toll](https://www.investigate-europe.eu/posts/big-tech-data-centres-secrecy-eu-law-environment-footprint)
* [2026-04-17, 07:54:45](https://lobste.rs/s/vbid4k/early_look_at_tailscale_rs_tsnet_library) - [An early look at tailscale-rs, a tsnet library in Rust](https://tailscale.com/blog/tailscale-rs-rust-tsnet-library-preview)
* [2026-04-17, 07:20:46](https://news.ycombinator.com/item?id=47803323) - [FIM – Linux framebuffer image viewer](https://www.nongnu.org/fbi-improved/)
* [2026-04-17, 07:15:22](https://lobste.rs/s/lcjbr0/demystifying_assemblers) - [Demystifying assemblers](https://briancallahan.net/blog/20210408.html)
* [2026-04-17, 07:00:00](https://apple.slashdot.org/story/26/04/17/0336256/intels-new-core-series-3-is-its-answer-to-the-macbook-neo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel&apos;s New Core Series 3 Is Its Answer To the MacBook Neo](https://apple.slashdot.org/story/26/04/17/0336256/intels-new-core-series-3-is-its-answer-to-the-macbook-neo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-17, 06:53:27](https://lobste.rs/s/ql5jpq/history_teapots_unix) - [A history of teapots and UNIX](https://discuss.systems/@thalia/116417242648384997)
* [2026-04-17, 06:19:45](https://news.ycombinator.com/item?id=47802971) - [PROBoter – Open-source platform for automated PCB analysis](https://www.schutzwerk.com/en/blog/proboter-01/)
* [2026-04-17, 05:43:07](https://lobste.rs/s/yr2mcf/folk_computer) - [Folk Computer](https://folk.computer/start)
* [2026-04-17, 04:11:13](https://lobste.rs/s/ygjm5d/git_kv_key_value_store_attached_git) - [git-kv: Key-value store attached to git commits using Git notes](https://github.com/sebastien/git-kv)
* [2026-04-17, 03:55:54](https://news.ycombinator.com/item?id=47802312) - [Human Accelerated Region 1](https://en.wikipedia.org/wiki/Human_accelerated_region_1)
* [2026-04-17, 03:52:00](https://soylentnews.org/article.pl?sid=26/04/15/1723257&amp;from=rss) - [Ukraine&apos;s Military Robot Surge Aims to Offset Drone Risks to Humans](https://soylentnews.org/article.pl?sid=26/04/15/1723257&amp;from=rss)
* [2026-04-17, 03:30:00](https://science.slashdot.org/story/26/04/17/0143228/sperm-whales-communication-closely-parallels-human-language-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sperm Whales&apos; Communication Closely Parallels Human Language, Study Finds](https://science.slashdot.org/story/26/04/17/0143228/sperm-whales-communication-closely-parallels-human-language-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-17, 02:53:16](https://news.ycombinator.com/item?id=47802016) - [Substrate AI Is Hiring Harness Engineers](https://www.ycombinator.com/companies/substrate/jobs/QJU9023-harness-engineer)
* [2026-04-17, 02:50:02](https://news.ycombinator.com/item?id=47801991) - [US Bill Mandates On-Device Age Verification](https://reclaimthenet.org/us-bill-mandates-on-device-age-verification)
* [2026-04-17, 00:37:47](https://news.ycombinator.com/item?id=47801255) - [Show HN: SPICE simulation → oscilloscope → verification with Claude Code](https://lucasgerads.com/blog/lecroy-mcp-spice-demo/)
* [2026-04-16, 23:07:00](https://soylentnews.org/article.pl?sid=26/04/15/1539246&amp;from=rss) - [The Entity That Has Been Watching Bitcoin for 14 Years](https://soylentnews.org/article.pl?sid=26/04/15/1539246&amp;from=rss)
* [2026-04-16, 23:00:00](https://yro.slashdot.org/story/26/04/16/2052224/totalrecall-reloaded-tool-finds-a-side-entrance-to-windows-11-recall-database?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;TotalRecall Reloaded&apos; Tool Finds a Side Entrance To Windows 11 Recall Database](https://yro.slashdot.org/story/26/04/16/2052224/totalrecall-reloaded-tool-finds-a-side-entrance-to-windows-11-recall-database?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
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
* [2026-04-16, 18:39:59](https://news.ycombinator.com/item?id=47797665) - [Android CLI: Build Android apps 3x faster using any agent](https://android-developers.googleblog.com/2026/04/build-android-apps-3x-faster-using-any-agent.html)
* [2026-04-16, 18:20:00](https://soylentnews.org/article.pl?sid=26/04/15/1535223&amp;from=rss) - [US Appeals Court Declares 158-Year-Old Home Distilling Ban Unconstitutional](https://soylentnews.org/article.pl?sid=26/04/15/1535223&amp;from=rss)
* [2026-04-16, 18:00:00](https://tech.slashdot.org/story/26/04/16/1718230/ipv6-usage-reaches-historic-50-across-google-services?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [IPv6 Usage Reaches Historic 50% Across Google Services](https://tech.slashdot.org/story/26/04/16/1718230/ipv6-usage-reaches-historic-50-across-google-services?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-16, 17:36:29](https://news.ycombinator.com/item?id=47796818) - [Show HN: Stage – Putting humans back in control of code review](https://stagereview.app/)
* [2026-04-16, 17:34:44](https://lobste.rs/s/myzsbg/stop_using_jwts_2019) - [Stop using JWTs (2019)](https://gist.github.com/samsch/0d1f3d3b4745d778f78b230cf6061452)
* [2026-04-16, 17:12:19](https://news.ycombinator.com/item?id=47796469) - [Codex for almost everything](https://openai.com/index/codex-for-almost-everything/)
* [2026-04-16, 17:00:00](https://slashdot.org/story/26/04/16/1658237/anthropic-rolls-out-claude-opus-47-an-ai-model-that-is-less-risky-than-mythos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Rolls Out Claude Opus 4.7, an AI Model That Is Less Risky Than Mythos](https://slashdot.org/story/26/04/16/1658237/anthropic-rolls-out-claude-opus-47-an-ai-model-that-is-less-risky-than-mythos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-16, 16:00:00](https://yro.slashdot.org/story/26/04/16/0717208/eu-age-verification-app-announced-to-protect-children-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EU Age Verification App Announced To Protect Children Online](https://yro.slashdot.org/story/26/04/16/0717208/eu-age-verification-app-announced-to-protect-children-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-16, 15:14:10](https://lobste.rs/s/pmxhem/announcing_rust_1_95_0) - [Announcing Rust 1.95.0](https://blog.rust-lang.org/2026/04/16/Rust-1.95.0/)
* [2026-04-16, 15:00:00](https://tech.slashdot.org/story/26/04/16/079216/researchers-induce-smells-with-ultrasound-no-chemical-cartridges-required?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Researchers Induce Smells With Ultrasound, No Chemical Cartridges Required](https://tech.slashdot.org/story/26/04/16/079216/researchers-induce-smells-with-ultrasound-no-chemical-cartridges-required?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-16, 14:23:50](https://news.ycombinator.com/item?id=47793411) - [Claude Opus 4.7](https://www.anthropic.com/news/claude-opus-4-7)
* [2026-04-16, 14:10:16](https://lobste.rs/s/ouzdjl/time_travel_debugger_for_webassembly) - [A time travel debugger for WebAssembly](https://github.com/friendlymatthew/gabagool/tree/main/gabagool-debug-adapter#gabagool-debug-adapter)
* [2026-04-16, 14:01:20](https://lobste.rs/s/yhbjpt/future_everything_is_lies_i_guess_where_do) - [The Future of Everything is Lies, I Guess: Where Do We Go From Here?](https://aphyr.com/posts/420-the-future-of-everything-is-lies-i-guess-where-do-we-go-from-here)
* [2026-04-16, 13:36:27](https://news.ycombinator.com/item?id=47792764) - [Qwen3.6-35B-A3B: Agentic coding power, now open to all](https://qwen.ai/blog?id=qwen3.6-35b-a3b)
* [2026-04-16, 13:36:00](https://soylentnews.org/article.pl?sid=26/04/15/0217209&amp;from=rss) - [AI Token Freeloaders Manipulating Customer Support Bots](https://soylentnews.org/article.pl?sid=26/04/15/0217209&amp;from=rss)
* [2026-04-16, 13:32:13](https://news.ycombinator.com/item?id=47792718) - [The future of everything is lies, I guess: Where do we go from here?](https://aphyr.com/posts/420-the-future-of-everything-is-lies-i-guess-where-do-we-go-from-here)
* [2026-04-16, 13:17:37](https://news.ycombinator.com/item?id=47792538) - [Cloudflare&apos;s AI Platform: an inference layer designed for agents](https://blog.cloudflare.com/ai-platform/)
* [2026-04-16, 13:05:54](https://lobste.rs/s/wa4xvo/compiling_java_as_target_language) - [Compiling to Java as a target language](https://matt.might.net/articles/compiling-to-java/)
* [2026-04-16, 11:38:21](https://lobste.rs/s/2byom8/too_much_discussion_xor_swap_trick) - [Too much Discussion of the XOR swap trick](https://heather.cafe/posts/too_much_xor_swap_trick/)
* [2026-04-16, 11:00:00](https://mobile.slashdot.org/story/26/04/16/071239/bullet-train-upgrade-brings-5g-windows-noise-cancelling-cabins-to-japan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bullet Train Upgrade Brings 5G Windows, Noise-Cancelling Cabins To Japan](https://mobile.slashdot.org/story/26/04/16/071239/bullet-train-upgrade-brings-5g-windows-noise-cancelling-cabins-to-japan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-16, 10:19:26](https://lobste.rs/s/sbtemt/age_snarky_ui) - [The age of snarky UI](https://thoughtbot.com/blog/the-age-of-snarky-ui)
* [2026-04-16, 09:57:55](https://lobste.rs/s/0qggzn/mastodon_don_t_use_mastodon_mstdn_domain) - [Mastodon: Don&apos;t use \&quot;mastodon\&quot; or \&quot;mstdn\&quot; in domain names](https://github.com/mastodon/mastodon/commit/d6f8ac97e808821180e9ae0c66879b7a2d64e690)
* [2026-04-16, 08:52:00](https://soylentnews.org/communityreviews/article.pl?sid=26/04/15/0214204&amp;from=rss) - [OpenAI Says Elon Musk is ‘Injecting Chaos’ With Recent Legal Maneuver](https://soylentnews.org/communityreviews/article.pl?sid=26/04/15/0214204&amp;from=rss)
* [2026-04-16, 08:47:04](https://lobste.rs/s/xijpr1/ipv6_traffic_crosses_50_mark) - [IPv6 traffic crosses the 50% mark](https://www.google.com/intl/en/ipv6/statistics.html?yzh=28197)
* [2026-04-16, 07:00:00](https://hardware.slashdot.org/story/26/04/16/0030206/uk-households-to-be-urged-to-use-more-power-this-summer-as-renewables-soar?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Households To Be Urged To Use More Power This Summer As Renewables Soar](https://hardware.slashdot.org/story/26/04/16/0030206/uk-households-to-be-urged-to-use-more-power-this-summer-as-renewables-soar?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-16, 04:05:00](https://soylentnews.org/article.pl?sid=26/04/15/028227&amp;from=rss) - [This Memory Chip Survives Temperatures Hotter Than Lava](https://soylentnews.org/article.pl?sid=26/04/15/028227&amp;from=rss)
* [2026-04-16, 03:30:00](https://news.slashdot.org/story/26/04/16/007258/nature-is-still-molding-human-genes-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nature Is Still Molding Human Genes, Study Finds](https://news.slashdot.org/story/26/04/16/007258/nature-is-still-molding-human-genes-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-15, 23:20:00](https://soylentnews.org/article.pl?sid=26/04/15/021231&amp;from=rss) - [Blaming Kids for Poor Security](https://soylentnews.org/article.pl?sid=26/04/15/021231&amp;from=rss)
* [2026-04-15, 19:59:39](https://lobste.rs/s/nihbc8/you_cannot_use_gnu_gpl_take_software) - [You cannot use the GNU (A)GPL to take software freedom away](https://www.fsf.org/blogs/licensing/agpl-is-not-a-tool-for-taking-freedom-away)
* [2026-04-15, 18:37:00](https://soylentnews.org/article.pl?sid=26/04/15/0158227&amp;from=rss) - [South Korea&apos;s Telecom Giants Surprise 7 Million Users With Unlimited, Universal Internet](https://soylentnews.org/article.pl?sid=26/04/15/0158227&amp;from=rss)
* [2026-04-15, 13:52:00](https://soylentnews.org/article.pl?sid=26/04/14/0413241&amp;from=rss) - [Electrode Technology Achieves 86% Efficiency for Converting CO₂ Into Plastic Precursors](https://soylentnews.org/article.pl?sid=26/04/14/0413241&amp;from=rss)
* [2026-04-15, 09:07:00](https://soylentnews.org/article.pl?sid=26/04/14/049220&amp;from=rss) - [Linux Lays Down the Law on AI-Generated Code](https://soylentnews.org/article.pl?sid=26/04/14/049220&amp;from=rss)
* [2026-04-15, 04:22:00](https://soylentnews.org/article.pl?sid=26/04/14/043205&amp;from=rss) - [The AI Great Leap Forward](https://soylentnews.org/article.pl?sid=26/04/14/043205&amp;from=rss)
* [2026-04-14, 23:35:00](https://soylentnews.org/article.pl?sid=26/04/14/0256247&amp;from=rss) - [Missouri Town Fires Half its City Council Over Data Center Deal](https://soylentnews.org/article.pl?sid=26/04/14/0256247&amp;from=rss)
* [2026-04-14, 23:20:39](https://news.ycombinator.com/item?id=47772725) - [CadQuery is an open-source Python library for building 3D CAD models](https://cadquery.github.io/)
* [2026-04-14, 18:53:00](https://soylentnews.org/article.pl?sid=26/04/14/0235214&amp;from=rss) - [Original Task Manager Was Only 80KB So It Could Run Smoothly on 90s Computers](https://soylentnews.org/article.pl?sid=26/04/14/0235214&amp;from=rss)
* [2026-04-14, 14:02:00](https://soylentnews.org/article.pl?sid=26/04/12/173259&amp;from=rss) - [Tea: A Stimulant That Made the Modern World ](https://soylentnews.org/article.pl?sid=26/04/12/173259&amp;from=rss)
* [2026-04-14, 11:35:25](https://news.ycombinator.com/item?id=47764240) - [The missing catalogue: why finding books in translation is still so hard](https://blogs.lse.ac.uk/impactofsocialsciences/2026/04/13/the-missing-catalogue-why-finding-books-in-translation-is-still-so-hard/)
* [2026-04-14, 09:12:00](https://soylentnews.org/article.pl?sid=26/04/12/170258&amp;from=rss) - [Linux Kernel Maintainers Are Following Through on Removing Intel 486 Support](https://soylentnews.org/article.pl?sid=26/04/12/170258&amp;from=rss)
* [2026-04-14, 04:29:00](https://soylentnews.org/article.pl?sid=26/04/12/170200&amp;from=rss) - [Startup Secures $30 Million Contract to 3D Print Jet Engines for the USAF](https://soylentnews.org/article.pl?sid=26/04/12/170200&amp;from=rss)
* [2026-04-13, 23:45:58](https://news.ycombinator.com/item?id=47759436) - [30 Years of HPC: many hardware advances, little adoption of new languages](https://chapel-lang.org/blog/posts/30years/)
* [2026-04-13, 23:44:00](https://soylentnews.org/article.pl?sid=26/04/12/1524251&amp;from=rss) - [Human Echolocation Works Step by Step](https://soylentnews.org/article.pl?sid=26/04/12/1524251&amp;from=rss)
* [2026-04-13, 18:54:00](https://soylentnews.org/article.pl?sid=26/04/12/1522257&amp;from=rss) - [OpenAI Backs Bill That Would Limit Liability for AI-Enabled Mass Deaths or Financial Disasters](https://soylentnews.org/article.pl?sid=26/04/12/1522257&amp;from=rss)
* [2026-04-13, 17:25:50](https://news.ycombinator.com/item?id=47755261) - [A Python Interpreter Written in Python](https://aosabook.org/en/500L/a-python-interpreter-written-in-python.html)
* [2026-04-13, 14:11:00](https://soylentnews.org/article.pl?sid=26/04/12/1154237&amp;from=rss) - [Intel Introduces its Own Neural Compression Technology With a Fallback Mode That Works on All GPUs](https://soylentnews.org/article.pl?sid=26/04/12/1154237&amp;from=rss)
* [2026-04-13, 12:28:35](https://news.ycombinator.com/item?id=47751011) - [中文 Literacy Speedrun II: Character Cyclotron](https://blog.kevinzwu.com/character-cyclotron/)
* [2026-04-13, 11:39:12](https://news.ycombinator.com/item?id=47750600) - [ReBot-DevArm: open-source Robotic Arm](https://github.com/Seeed-Projects/reBot-DevArm)
* [2026-04-13, 11:09:09](https://news.ycombinator.com/item?id=47750364) - [Century-bandwidth antenna reinvented,patented after 18 yrs with decade bandwidth (2006)](https://ieeexplore.ieee.org/document/1715264)
* [2026-04-13, 09:24:00](https://soylentnews.org/article.pl?sid=26/04/12/1147250&amp;from=rss) - [Cloudflare and GoDaddy Team Up to Curb AI Bot Brigades](https://soylentnews.org/article.pl?sid=26/04/12/1147250&amp;from=rss)
* [2026-04-13, 07:12:45](https://news.ycombinator.com/item?id=47748733) - [A Git helper tool that breaks large merges into parallelizable tasks](https://github.com/mwallner/mergetopus)
* [2026-04-13, 05:32:33](https://news.ycombinator.com/item?id=47747986) - [Taking a Look at Compression Algorithms – Moncef Abboud](https://cefboud.com/posts/compression/)
* [2026-04-13, 04:35:00](https://soylentnews.org/article.pl?sid=26/04/11/0355254&amp;from=rss) - [Little Snitch for Linux Released!](https://soylentnews.org/article.pl?sid=26/04/11/0355254&amp;from=rss)
