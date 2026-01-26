# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Innovations and Challenges

* [Porting DOOM to my WebAssembly VM](https://irreducible.io/blog/porting-doom-to-wasm/) highlights a technical adventure in adapting the classic video game DOOM to function within a custom WebAssembly virtual machine. [Comments](https://lobste.rs/s/7t4i0i/porting_doom_my_webassembly_vm).

* [OracleGPT: Thought Experiment on an AI Powered Executive](https://senteguard.com/blog/#post-7fYcaQrAcfsldmSb7zVM) explores the concept of leveraging AI as an executive decision-maker. [Comments](https://news.ycombinator.com/item?id=46766507).

* [Transfering Files with gRPC](https://kreya.app/blog/transfering-files-with-grpc/) delves into using gRPC technology for efficient file transfers. [Comments](https://news.ycombinator.com/item?id=46765273).

* [zerobrew is a Rust-based, 5-20x faster drop-in Homebrew alternative](https://github.com/lucasgelfond/zerobrew) showcases a performance-enhanced Homebrew replacement written in Rust. [Comments](https://lobste.rs/s/ue0bau/zerobrew_is_rust_based_5_20x_faster_drop).

* [Apple, What Have You Done?](https://onlinegoddess.net/2026/01/apple-what-have-you-done/) critiques significant changes Apple implemented in their ecosystem. [Comments](https://lobste.rs/s/cyx4ba/apple_what_have_you_done).

## Impact of AI and Advanced Computing

* [The Intent Envelope: Proofs for Completeness, Not Just Soundness](https://midspiral.com/blog/intent-envelope-proofs-for-completeness-not-just-soundness/) describes a system enhancing AI and soundness with a focus on completeness. [Comments](https://lobste.rs/s/cycn1o/intent_envelope_proofs_for_completeness).

* [Exactitude in Science – Borges (1946) [pdf]](https://kwarc.info/teaching/TDM/Borges.pdf) reflects on the application of precision in research and artificial intelligence. [Comments](https://news.ycombinator.com/item?id=46766229).

* [AI is Hitting UK Harder Than Other Big Economies, Study Finds](https://news.slashdot.org/story/26/01/26/1428221/ai-is-hitting-uk-harder-than-other-big-economies-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) discusses an economic study on AI’s impact on the UK economy. [Comments](https://news.ycombinator.com/item?id=46766229).

## Economic, Environmental, and Political Developments

* [Saudi Arabia To Scale Back Neom Megaproject](https://news.slashdot.org/story/26/01/26/1528240/saudi-arabia-to-scale-back-neom-megaproject?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) reveals the Kingdom’s decision to downsize its ambitious futuristic city project. [Comments](https://news.slashdot.org/story/26/01/26/1528240/saudi-arabia-to-scale-back-neom-megaproject?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [Washington State May Mandate 'Firearm Blueprint Detection Algorithms' For 3D Printers](https://hardware.slashdot.org/story/26/01/26/0035209/washington-state-may-mandate-firearm-blueprint-detection-algorithms-for-3d-printers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) explores potential firearm blueprint recognition mandates for 3D printing technology. [Comments](https://hardware.slashdot.org/story/26/01/26/0035209/washington-state-may-mandate-firearm-blueprint-detection-algorithms-for-3d-printers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

## Gaming and Entertainment

* [Angry Gamers Are Forcing Studios To Scrap or Rethink New Releases](https://games.slashdot.org/story/26/01/26/1359241/angry-gamers-are-forcing-studios-to-scrap-or-rethink-new-releases?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) discusses how vocal gamer feedback is reshaping video game development. [Comments](https://games.slashdot.org/story/26/01/26/1359241/angry-gamers-are-forcing-studios-to-scrap-or-rethink-new-releases?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed).

* [Apple introduces new AirTag with longer range and improved findability](https://www.apple.com/newsroom/2026/01/apple-introduces-new-airtag-with-expanded-range-and-improved-findability/) details advancements in Apple’s AirTag product. [Comments](https://news.ycombinator.com/item?id=46765819).

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

* [2026-01-26, 15:48:51](https://lobste.rs/s/7t4i0i/porting_doom_my_webassembly_vm) - [Porting DOOM to my WebAssembly VM](https://irreducible.io/blog/porting-doom-to-wasm/)
* [2026-01-26, 15:38:37](https://lobste.rs/s/cycn1o/intent_envelope_proofs_for_completeness) - [The Intent Envelope: Proofs for Completeness, Not Just Soundness](https://midspiral.com/blog/intent-envelope-proofs-for-completeness-not-just-soundness/)
* [2026-01-26, 15:28:00](https://news.slashdot.org/story/26/01/26/1528240/saudi-arabia-to-scale-back-neom-megaproject?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Saudi Arabia To Scale Back Neom Megaproject](https://news.slashdot.org/story/26/01/26/1528240/saudi-arabia-to-scale-back-neom-megaproject?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-26, 15:23:00](https://news.ycombinator.com/item?id=46766741) - [Qwen3-Max-Thinking](https://qwen.ai/blog?id=qwen3-max-thinking)
* [2026-01-26, 15:07:37](https://news.ycombinator.com/item?id=46766526) - [Windows 11&apos;s Patch Tuesday nightmare gets worse](https://www.windowscentral.com/microsoft/windows-11/windows-11s-botched-patch-tuesday-update-nightmare-continues-as-microsoft-confirms-some-pcs-might-fail-to-boot)
* [2026-01-26, 15:06:09](https://news.ycombinator.com/item?id=46766507) - [OracleGPT: Thought Experiment on an AI Powered Executive](https://senteguard.com/blog/#post-7fYcaQrAcfsldmSb7zVM)
* [2026-01-26, 15:05:04](https://news.ycombinator.com/item?id=46766493) - [AI will not replace software engineers (hopefully)](https://medium.com/@sig.segv/ai-will-not-replace-software-engineers-hopefully-84c4f8fc94c0)
* [2026-01-26, 15:01:03](https://news.ycombinator.com/item?id=46766432) - [OSS ChatGPT WebUI – 530 Models, MCP, Tools, Gemini RAG, Image/Audio Gen](https://llmspy.org/docs/v3)
* [2026-01-26, 14:44:51](https://news.ycombinator.com/item?id=46766229) - [Exactitude in Science – Borges (1946) [pdf]](https://kwarc.info/teaching/TDM/Borges.pdf)
* [2026-01-26, 14:40:00](https://news.slashdot.org/story/26/01/26/1428221/ai-is-hitting-uk-harder-than-other-big-economies-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI is Hitting UK Harder Than Other Big Economies, Study Finds](https://news.slashdot.org/story/26/01/26/1428221/ai-is-hitting-uk-harder-than-other-big-economies-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-26, 14:27:00](https://news.ycombinator.com/item?id=46766031) - [Google AI Overviews cite YouTube more than any medical site for health queries](https://www.theguardian.com/technology/2026/jan/24/google-ai-overviews-youtube-medical-citations-study)
* [2026-01-26, 14:10:25](https://news.ycombinator.com/item?id=46765819) - [Apple introduces new AirTag with longer range and improved findability](https://www.apple.com/newsroom/2026/01/apple-introduces-new-airtag-with-expanded-range-and-improved-findability/)
* [2026-01-26, 14:00:00](https://games.slashdot.org/story/26/01/26/1359241/angry-gamers-are-forcing-studios-to-scrap-or-rethink-new-releases?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Angry Gamers Are Forcing Studios To Scrap or Rethink New Releases](https://games.slashdot.org/story/26/01/26/1359241/angry-gamers-are-forcing-studios-to-scrap-or-rethink-new-releases?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-26, 13:58:27](https://news.ycombinator.com/item?id=46765694) - [Porting 100k lines from TypeScript to Rust using Claude Code in a month](https://blog.vjeux.com/2026/analysis/porting-100k-lines-from-typescript-to-rust-using-claude-code-in-a-month.html)
* [2026-01-26, 13:36:22](https://news.ycombinator.com/item?id=46765460) - [After two years of vibecoding, I&apos;m back to writing by hand](https://atmoio.substack.com/p/after-two-years-of-vibecoding-im)
* [2026-01-26, 13:17:19](https://news.ycombinator.com/item?id=46765273) - [Transfering Files with gRPC](https://kreya.app/blog/transfering-files-with-grpc/)
* [2026-01-26, 13:01:00](https://news.ycombinator.com/item?id=46765120) - [Vibe coding kills open source](https://arxiv.org/abs/2601.15494)
* [2026-01-26, 12:44:59](https://lobste.rs/s/nktckk/mcclim_7guis_part_1_counter) - [McCLIM and 7GUIs - Part 1: The Counter](https://turtleware.eu/posts/McCLIM-and-7GUIs---Part-1-The-Counter.html)
* [2026-01-26, 12:34:00](https://news.slashdot.org/story/26/01/25/1952231/richard-stallman-was-asked-is-software-piracy-wrong?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Richard Stallman Was Asked: Is Software Piracy Wrong?](https://news.slashdot.org/story/26/01/25/1952231/richard-stallman-was-asked-is-software-piracy-wrong?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-26, 11:55:00](https://soylentnews.org/article.pl?sid=26/01/25/0439223&amp;from=rss) - [Starlink Now Uses Customers&apos; Personal Data for AI Training](https://soylentnews.org/article.pl?sid=26/01/25/0439223&amp;from=rss)
* [2026-01-26, 11:46:03](https://lobste.rs/s/rjfmon/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/rjfmon/what_are_you_doing_this_week)
* [2026-01-26, 11:42:25](https://lobste.rs/s/vyrmdi/implementing_transcendental_functions) - [Implementing the transcendental functions in Ivy](https://commandcenter.blogspot.com/2026/01/implementing-transcendental-functions.html)
* [2026-01-26, 11:07:26](https://news.ycombinator.com/item?id=46764223) - [TSMC Risk](https://stratechery.com/2026/tsmc-risk/)
* [2026-01-26, 11:00:44](https://news.ycombinator.com/item?id=46764170) - [Show HN: Only 1 LLM can fly a drone](https://github.com/kxzk/snapbench)
* [2026-01-26, 10:19:51](https://news.ycombinator.com/item?id=46763864) - [MapLibre Tile: a modern and efficient vector tile format](https://maplibre.org/news/2026-01-23-mlt-release/)
* [2026-01-26, 10:19:18](https://lobste.rs/s/izn3wf/long_branches_compilers_assemblers) - [Long branches in compilers, assemblers, and linkers](https://maskray.me/blog/2026-01-25-long-branches-in-compilers-assemblers-and-linkers)
* [2026-01-26, 10:18:32](https://lobste.rs/s/qqfg0q/announcing_maplibre_tile_modern) - [Announcing MapLibre Tile: a modern and efficient vector tile format](https://maplibre.org/news/2026-01-23-mlt-release/)
* [2026-01-26, 09:41:37](https://lobste.rs/s/cyx4ba/apple_what_have_you_done) - [Apple, What Have You Done?](https://onlinegoddess.net/2026/01/apple-what-have-you-done/)
* [2026-01-26, 08:43:25](https://lobste.rs/s/sztkjg/end_curl_bug_bounty) - [The end of the curl bug-bounty](https://daniel.haxx.se/blog/2026/01/26/the-end-of-the-curl-bug-bounty/)
* [2026-01-26, 08:34:00](https://news.slashdot.org/story/26/01/26/008257/is-google-prioritizing-youtube-and-x-over-news-publishers-on-discover?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is Google Prioritizing YouTube and X Over News Publishers on Discover?](https://news.slashdot.org/story/26/01/26/008257/is-google-prioritizing-youtube-and-x-over-news-publishers-on-discover?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-26, 07:49:09](https://lobste.rs/s/u7bjzq/why_there_s_no_european_google) - [Why there’s no European Google?](https://ploum.net/2026-01-22-why-no-european-google.html)
* [2026-01-26, 07:41:52](https://news.ycombinator.com/item?id=46762882) - [The Holy Grail of Linux Binary Compatibility: Musl and Dlopen](https://github.com/quaadgras/graphics.gd/discussions/242)
* [2026-01-26, 07:11:00](https://soylentnews.org/article.pl?sid=26/01/25/0432221&amp;from=rss) - [Attackers Find a New Way to Share Malicious Snap Packages](https://soylentnews.org/article.pl?sid=26/01/25/0432221&amp;from=rss)
* [2026-01-26, 05:44:00](https://hardware.slashdot.org/story/26/01/26/0317225/startup-uses-spacex-tech-to-cool-data-centers-with-less-power-and-no-water?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Startup Uses SpaceX Tech to Cool Data Centers With Less Power and No Water](https://hardware.slashdot.org/story/26/01/26/0317225/startup-uses-spacex-tech-to-cool-data-centers-with-less-power-and-no-water?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-26, 05:23:01](https://news.ycombinator.com/item?id=46762150) - [The browser is the sandbox](https://simonwillison.net/2026/Jan/25/the-browser-is-the-sandbox/)
* [2026-01-26, 05:11:02](https://lobste.rs/s/ve0986/exploring_linux_on_loongarch_mini_pc) - [Exploring Linux on a LoongArch Mini PC](https://www.wezm.net/v2/posts/2026/loongarch-mini-pc-m700s/)
* [2026-01-26, 05:09:38](https://lobste.rs/s/kvvxkl/enclosure_feedback_loop_how_llms) - [The Enclosure feedback loop, or how LLMs sabotage existing programming practices by privatizing a public good](https://michiel.buddingh.eu/enclosure-feedback-loop)
* [2026-01-26, 04:24:00](https://news.slashdot.org/story/26/01/25/2226239/new-linuxandroid-2-in-1-tablet-open-slate-announced-by-brax-technologies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Linux/Android 2-in-1 Tablet &apos;Open Slate&apos; Announced by Brax Technologies](https://news.slashdot.org/story/26/01/25/2226239/new-linuxandroid-2-in-1-tablet-open-slate-announced-by-brax-technologies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-26, 04:05:38](https://news.ycombinator.com/item?id=46761761) - [Running the Stupid Cricut Software on Linux](https://arthur.pizza/2025/12/running-stupid-cricut-software-under-linux/)
* [2026-01-26, 03:26:00](https://soylentnews.org/article.pl?sid=26/01/25/0429246&amp;from=rss) - [UK MPs Call for AI Stress Testing in Financial Services](https://soylentnews.org/article.pl?sid=26/01/25/0429246&amp;from=rss)
* [2026-01-26, 02:04:00](https://bsd.slashdot.org/story/26/01/26/0135254/kdes-plasma-login-manager-stops-supporting-freebsd---because-systemd?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [KDE&apos;s &apos;Plasma Login Manager&apos; Stops Supporting FreeBSD - Because Systemd](https://bsd.slashdot.org/story/26/01/26/0135254/kdes-plasma-login-manager-stops-supporting-freebsd---because-systemd?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-26, 01:43:12](https://lobste.rs/s/ue0bau/zerobrew_is_rust_based_5_20x_faster_drop) - [zerobrew is a Rust-based, 5-20x faster drop-in Homebrew alternative](https://github.com/lucasgelfond/zerobrew)
* [2026-01-26, 01:23:10](https://lobste.rs/s/d4y8rq/sysp_systems_lisp_compiling_c_with) - [sysp: Systems Lisp compiling to C with homoiconic macros, refcounted memory, Hindley-Milner type inference](https://github.com/karans4/sysp)
* [2026-01-26, 01:04:00](https://hardware.slashdot.org/story/26/01/26/0035209/washington-state-may-mandate-firearm-blueprint-detection-algorithms-for-3d-printers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Washington State May Mandate &apos;Firearm Blueprint Detection Algorithms&apos; For 3D Printers](https://hardware.slashdot.org/story/26/01/26/0035209/washington-state-may-mandate-firearm-blueprint-detection-algorithms-for-3d-printers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-26, 00:10:42](https://news.ycombinator.com/item?id=46760099) - [Scientists identify brain waves that define the limits of &apos;you&apos;](https://www.sciencealert.com/scientists-identify-brain-waves-that-define-the-limits-of-you)
* [2026-01-26, 00:04:00](https://news.slashdot.org/story/26/01/26/001230/google-discover-replaces-news-headlines-with-sometimes-inaccurate-ai-generated-alternatives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Discover Replaces News Headlines With Sometimes Inaccurate AI-Generated Alternatives](https://news.slashdot.org/story/26/01/26/001230/google-discover-replaces-news-headlines-with-sometimes-inaccurate-ai-generated-alternatives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-25, 23:03:05](https://lobste.rs/s/uqfh4p/screeps_how_game_about_programming) - [Screeps: How a game about programming exposed thousands of players to remote code execution](https://outsidetheasylum.blog/screeps/)
* [2026-01-25, 22:36:00](https://soylentnews.org/article.pl?sid=26/01/24/0116243&amp;from=rss) - [Microsoft Gave FBI a Set of BitLocker Encryption Keys to Unlock Suspects’ Laptops](https://soylentnews.org/article.pl?sid=26/01/24/0116243&amp;from=rss)
* [2026-01-25, 22:18:38](https://news.ycombinator.com/item?id=46759063) - [The future of software engineering is SRE](https://swizec.com/blog/the-future-of-software-engineering-is-sre/)
* [2026-01-25, 21:56:00](https://hardware.slashdot.org/story/26/01/25/2153246/gasoline-out-of-thin-air-its-a-reality?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gasoline Out of Thin Air? It&apos;s a Reality!](https://hardware.slashdot.org/story/26/01/25/2153246/gasoline-out-of-thin-air-its-a-reality?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-25, 21:44:10](https://news.ycombinator.com/item?id=46758644) - [LED lighting undermines visual performance unless supplemented by wider spectra](https://www.nature.com/articles/s41598-026-35389-6)
* [2026-01-25, 21:39:24](https://lobste.rs/s/sbtjef/spreadsheets_vi_json) - [spreadsheets + vi + json](https://awalgarg.me/untitled_project)
* [2026-01-25, 19:51:45](https://lobste.rs/s/xmwgtx/how_think_about_gas_town) - [How to think about Gas Town](https://steveklabnik.com/writing/how-to-think-about-gas-town/)
* [2026-01-25, 19:36:00](https://news.slashdot.org/story/26/01/25/1930244/richard-stallman-critiques-ai-connected-cars-smartphones-and-drm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Richard Stallman Critiques AI, Connected Cars, Smartphones, and DRM](https://news.slashdot.org/story/26/01/25/1930244/richard-stallman-critiques-ai-connected-cars-smartphones-and-drm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-25, 19:29:25](https://lobste.rs/s/5qylwg/i_was_right_about_atproto_key_management) - [I Was Right About ATProto Key Management](https://notes.nora.codes/atproto-again/)
* [2026-01-25, 19:03:40](https://news.ycombinator.com/item?id=46757067) - [First, make me care](https://gwern.net/blog/2026/make-me-care)
* [2026-01-25, 17:53:00](https://soylentnews.org/article.pl?sid=26/01/24/0114253&amp;from=rss) - [This May Be The Grossest Eye Pic Ever—but the Cause is What’s Truly Horrifying](https://soylentnews.org/article.pl?sid=26/01/24/0114253&amp;from=rss)
* [2026-01-25, 17:48:30](https://lobste.rs/s/pnhbjw/allowlist_for_gitignore) - [Allowlist for .gitignore](https://blog.izissise.net/posts/gitignoreallowlist/)
* [2026-01-25, 17:34:00](https://tech.slashdot.org/story/26/01/24/1845236/us-congress-fails-to-repeal-kill-switch-for-cars-mandate?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Congress Fails to Repeal &apos;Kill Switch&apos; for Cars Mandate](https://tech.slashdot.org/story/26/01/24/1845236/us-congress-fails-to-repeal-kill-switch-for-cars-mandate?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-25, 16:34:00](https://mobile.slashdot.org/story/26/01/25/060240/the-android-nexphone-linux-on-demand-dual-boots-into-windows-11---and-transforms-into-a-workstation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Android &apos;NexPhone&apos;: Linux on Demand, Dual-Boots Into Windows 11 - and Transforms Into a Workstation](https://mobile.slashdot.org/story/26/01/25/060240/the-android-nexphone-linux-on-demand-dual-boots-into-windows-11---and-transforms-into-a-workstation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-25, 16:22:07](https://lobste.rs/s/4jiqup/software_patches_nixos_for_fun) - [Software patches in NixOS for fun and productivity](https://log.pfad.fr/2026/software-patching-in-nixos/)
* [2026-01-25, 15:34:51](https://news.ycombinator.com/item?id=46754944) - [A macOS app that blurs your screen when you slouch](https://github.com/tldev/posturr)
* [2026-01-25, 15:34:00](https://hardware.slashdot.org/story/26/01/24/0452209/the-case-against-small-modular-nuclear-reactors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Case Against Small Modular Nuclear Reactors](https://hardware.slashdot.org/story/26/01/24/0452209/the-case-against-small-modular-nuclear-reactors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-25, 14:20:01](https://lobste.rs/s/vzatmm/welcome_email_expiration_date) - [Welcome to the \&quot;Email Expiration Date\&quot; initiative](https://www.zerocarbon.email/)
* [2026-01-25, 13:55:53](https://lobste.rs/s/yryapx/indieweb_small_web) - [The IndieWeb and Small web](https://christiano.dev/post/indieweb_smallweb/)
* [2026-01-25, 13:02:00](https://soylentnews.org/article.pl?sid=26/01/24/0112225&amp;from=rss) - [OpenAI Rolls Out Ads in ChatGPT as Expenses Skyrocket](https://soylentnews.org/article.pl?sid=26/01/24/0112225&amp;from=rss)
* [2026-01-25, 11:38:53](https://lobste.rs/s/ylgyhu/lament_for_aperture_app_we_ll_never_get) - [A Lament For Aperture, The App We&apos;ll Never Get Over Losing](https://ikennd.ac/blog/2026/01/old-man-yells-at-modern-software-design/)
* [2026-01-25, 08:30:00](https://soylentnews.org/article.pl?sid=26/01/24/0110242&amp;from=rss) - [Major River Deltas Are Sinking Faster Than Sea-Level Rise](https://soylentnews.org/article.pl?sid=26/01/24/0110242&amp;from=rss)
* [2026-01-25, 06:11:57](https://lobste.rs/s/7hxrjv/home_router_recommendations) - [Home router recommendations](https://lobste.rs/s/7hxrjv/home_router_recommendations)
* [2026-01-25, 03:38:00](https://soylentnews.org/article.pl?sid=26/01/24/019242&amp;from=rss) - [How Greenwashing Creates &apos;False Stability&apos; for Companies](https://soylentnews.org/article.pl?sid=26/01/24/019242&amp;from=rss)
* [2026-01-24, 22:54:00](https://soylentnews.org/article.pl?sid=26/01/23/1016236&amp;from=rss) - [Ancient “Mosaic” Fossils Found in Morocco Challenge the Timeline of Human Evolution](https://soylentnews.org/article.pl?sid=26/01/23/1016236&amp;from=rss)
* [2026-01-24, 21:31:36](https://lobste.rs/s/cw6f2s/ai_tribalism) - [AI tribalism](https://nolanlawson.com/2026/01/24/ai-tribalism/)
* [2026-01-24, 18:11:00](https://soylentnews.org/article.pl?sid=26/01/23/1010250&amp;from=rss) - [Micron Acquires PSMC Fab Site in Taiwan for $1.8 Billion](https://soylentnews.org/article.pl?sid=26/01/23/1010250&amp;from=rss)
* [2026-01-24, 13:25:00](https://soylentnews.org/article.pl?sid=26/01/23/1012244&amp;from=rss) - [Hygienic Conditions in Pompeii&apos;s Early Baths Were Poor](https://soylentnews.org/article.pl?sid=26/01/23/1012244&amp;from=rss)
* [2026-01-24, 08:42:00](https://soylentnews.org/article.pl?sid=26/01/22/124243&amp;from=rss) - [A Billiard Ball as a Universal Computation Machine](https://soylentnews.org/article.pl?sid=26/01/22/124243&amp;from=rss)
* [2026-01-24, 04:01:00](https://soylentnews.org/article.pl?sid=26/01/22/121252&amp;from=rss) - [When Order Matters: How A Single DNS Change Broke The Internet For Millions](https://soylentnews.org/article.pl?sid=26/01/22/121252&amp;from=rss)
* [2026-01-23, 23:16:00](https://soylentnews.org/article.pl?sid=26/01/22/1148259&amp;from=rss) - [Caltech-Led Team Finds New Superconducting State](https://soylentnews.org/article.pl?sid=26/01/22/1148259&amp;from=rss)
* [2026-01-23, 18:32:00](https://soylentnews.org/article.pl?sid=26/01/22/1144249&amp;from=rss) - [Starlink in Iran: How the Regime Jams the Service and What Helps Against It](https://soylentnews.org/article.pl?sid=26/01/22/1144249&amp;from=rss)
* [2026-01-23, 13:45:00](https://soylentnews.org/article.pl?sid=26/01/22/1141230&amp;from=rss) - [Physics of Foam Strangely Resembles AI Training](https://soylentnews.org/article.pl?sid=26/01/22/1141230&amp;from=rss)
* [2026-01-23, 08:59:00](https://soylentnews.org/article.pl?sid=26/01/22/0422248&amp;from=rss) - [Wikipedia Volunteers Spent Years Cataloging AI Tells. Now There&apos;s a Plugin to Avoid Them.](https://soylentnews.org/article.pl?sid=26/01/22/0422248&amp;from=rss)
* [2026-01-23, 04:12:00](https://soylentnews.org/article.pl?sid=26/01/22/043242&amp;from=rss) - [Nvidia Wanted Pirated Book Stash Access](https://soylentnews.org/article.pl?sid=26/01/22/043242&amp;from=rss)
* [2026-01-22, 23:28:00](https://soylentnews.org/article.pl?sid=26/01/22/0355223&amp;from=rss) - [Textbooks Were Wrong: Human Hair Doesn&apos;t Grow the Way Scientists Thought](https://soylentnews.org/article.pl?sid=26/01/22/0355223&amp;from=rss)
* [2026-01-22, 18:40:00](https://soylentnews.org/article.pl?sid=26/01/21/0150257&amp;from=rss) - [Cows Use Tools](https://soylentnews.org/article.pl?sid=26/01/21/0150257&amp;from=rss)
* [2026-01-22, 13:46:00](https://soylentnews.org/article.pl?sid=26/01/21/0147238&amp;from=rss) - [AI Bathroom Monitors? Welcome To America’s New Surveillance High Schools](https://soylentnews.org/article.pl?sid=26/01/21/0147238&amp;from=rss)
* [2026-01-22, 09:07:00](https://soylentnews.org/article.pl?sid=26/01/21/0141201&amp;from=rss) - [France Records More Deaths Than Births for First Time Since End of Second World War](https://soylentnews.org/article.pl?sid=26/01/21/0141201&amp;from=rss)
* [2026-01-22, 04:16:00](https://soylentnews.org/article.pl?sid=26/01/21/0136237&amp;from=rss) - [Professors Issue Warning Over Surge in College Students Unable to Read](https://soylentnews.org/article.pl?sid=26/01/21/0136237&amp;from=rss)
