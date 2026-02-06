# [News Summary](https://kherrick.github.io/news-summary/)

## Technological Developments in AI and Software

* [Blinc: A declarative, reactive UI system with first-class state machines, spring physics animations, and GPU-accelerated rendering](https://github.com/project-blinc/Blinc) ([comments](https://lobste.rs/s/j4tnwj/blinc_declarative_reactive_ui_system))

* [TikTok's 'Addictive Design' Found to Be Illegal in Europe](https://www.nytimes.com/2026/02/06/business/tiktok-addictive-design-europe.html) ([comments](https://news.ycombinator.com/item?id=46911869))

* [Show HN: Agent Arena – Test How Manipulation-Proof Your AI Agent Is](https://wiz.jock.pl/experiments/agent-arena/) ([comments](https://news.ycombinator.com/item?id=46911873))

* [Invention of DNA "Page Numbers" Opens Up Possibilities for the Bioeconomy](https://www.caltech.edu/about/news/invention-dna-page-numbers-synthesis-kaihang-wang) ([comments](https://news.ycombinator.com/item?id=46911170))

* [monty: A minimal, secure Python interpreter written in Rust for use by AI](https://github.com/pydantic/monty) ([comments](https://lobste.rs/s/8rnhnq/monty_minimal_secure_python_interpreter))

## Digital Privacy and Technology Risks

* [A new bill in New York would require disclaimers on AI-generated news content](https://www.niemanlab.org/2026/02/a-new-bill-in-new-york-would-require-disclaimers-on-ai-generated-news-content/) ([comments](https://news.ycombinator.com/item?id=46910963))

* [Google Confirms AirDrop Sharing is Coming To Android Phones Beyond Pixels](https://it.slashdot.org/story/26/02/05/1935209/google-confirms-airdrop-sharing-is-coming-to-android-phones-beyond-pixels?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=46908491))

* [The RCE that AMD won't fix](https://mrbruh.com/amd/) ([comments](https://news.ycombinator.com/item?id=46906947))

* [CIA Has Killed Off The World Factbook After Six Decades](https://news.slashdot.org/story/26/02/05/187252/cia-has-killed-off-the-world-factbook-after-six-decades?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://soylentnews.org/article.pl?sid=26/02/03/0322237&amp;from=rss))

## Scientific and Engineering Innovations

* [How to Bypass a Parallel Port Dongle](https://soylentnews.org/article.pl?sid=26/02/03/0322237&amp;from=rss) ([comments](https://news.ycombinator.com/item?id=46903558))

* [elfconv: AOT binary translator of Linux/ELF -> WebAssembly](https://github.com/yomaytk/elfconv) ([comments](https://lobste.rs/s/vzzqes/elfconv_aot_binary_translator_linux_elf))

* [Western Digital Plots a Path To 140 TB Hard Drives Using Vertical Lasers and 14-Platter Designs](https://hardware.slashdot.org/story/26/02/05/175200/western-digital-plots-a-path-to-140-tb-hard-drives-using-vertical-lasers-and-14-platter-designs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://soylentnews.org/article.pl?sid=26/02/03/0322237&amp;from=rss))

## Emerging Trends in Open Source and Cloud

* [Automattic and the Internet Archive Team Up To Fight Link Rot](https://tech.slashdot.org/story/26/02/05/1729259/automattic-and-the-internet-archive-team-up-to-fight-link-rot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=46904361))

* [Recreating Epstein PDFs from raw encoded attachments](https://neosmart.net/blog/recreating-epstein-pdfs-from-raw-encoded-attachments/) ([comments](https://news.ycombinator.com/item?id=46890335))

* [Show HN: Artifact Keeper – Open-Source Artifactory/Nexus Alternative in Rust](https://github.com/artifact-keeper) ([comments](https://news.ycombinator.com/item?id=46909037))

## Global Shifts in Policy and Business

* [Canada Unveils Auto Industry Plan in Latest Pivot Away From US](https://news.slashdot.org/story/26/02/06/0722232/canada-unveils-auto-industry-plan-in-latest-pivot-away-from-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://lobste.rs/s/rsmqux/rce_amd_won_t_fix))

* [Court Rules That Ripping YouTube Clips Can Violate the DMCA](https://news.slashdot.org/story/26/02/05/1924252/court-rules-that-ripping-youtube-clips-can-violate-the-dmca?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://slashdot.org/story/26/02/05/1019252/kalshi-claims-extortion-then-recants-in-feud-over-user-losses))

* [NASA Will Finally Let Its Astronauts Bring iPhones To the Moon](https://science.slashdot.org/story/26/02/05/1918226/nasa-will-finally-let-its-astronauts-bring-iphones-to-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://soylentnews.org/article.pl?sid=26/02/02/1443223&amp;from=rss))

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

* [2026-02-06, 13:11:13](https://lobste.rs/s/axcylc/text_classification_with_python_3_14_s) - [Text classification with Python 3.14&apos;s zstd module](https://maxhalford.github.io/blog/text-classification-zstd/)
* [2026-02-06, 12:54:53](https://lobste.rs/s/j4tnwj/blinc_declarative_reactive_ui_system) - [Blinc: A declarative, reactive UI system with first-class state machines, spring physics animations, and GPU-accelerated rendering](https://github.com/project-blinc/Blinc)
* [2026-02-06, 12:36:01](https://lobste.rs/s/xq1ta4/tactical_tornado_is_new_default) - [Tactical tornado is the new default](https://olano.dev/blog/tactical-tornado)
* [2026-02-06, 12:30:00](https://news.slashdot.org/story/26/02/06/0722232/canada-unveils-auto-industry-plan-in-latest-pivot-away-from-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Canada Unveils Auto Industry Plan in Latest Pivot Away From US](https://news.slashdot.org/story/26/02/06/0722232/canada-unveils-auto-industry-plan-in-latest-pivot-away-from-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-06, 12:16:43](https://news.ycombinator.com/item?id=46911901) - [I Now Assume That All Ads on Apple News Are Scams](https://kirkville.com/i-now-assume-that-all-ads-on-apple-news-are-scams/)
* [2026-02-06, 12:12:18](https://news.ycombinator.com/item?id=46911873) - [Show HN: Agent Arena – Test How Manipulation-Proof Your AI Agent Is](https://wiz.jock.pl/experiments/agent-arena/)
* [2026-02-06, 12:11:48](https://news.ycombinator.com/item?id=46911869) - [TikTok&apos;s &apos;Addictive Design&apos; Found to Be Illegal in Europe](https://www.nytimes.com/2026/02/06/business/tiktok-addictive-design-europe.html)
* [2026-02-06, 10:30:00](https://slashdot.org/story/26/02/05/208205/why-this-is-the-worst-crypto-winter-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why This Is the Worst Crypto Winter Ever](https://slashdot.org/story/26/02/05/208205/why-this-is-the-worst-crypto-winter-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-06, 10:26:16](https://news.ycombinator.com/item?id=46911170) - [Invention of DNA \&quot;Page Numbers\&quot; Opens Up Possibilities for the Bioeconomy](https://www.caltech.edu/about/news/invention-dna-page-numbers-synthesis-kaihang-wang)
* [2026-02-06, 10:25:12](https://lobste.rs/s/eytevq/nix_run_run_nix_derivations_without_nix3) - [nix-run: run nix derivations without nix3 or flakes](https://tangled.org/weethet.bsky.social/nix-run)
* [2026-02-06, 09:56:55](https://news.ycombinator.com/item?id=46910963) - [A new bill in New York would require disclaimers on AI-generated news content](https://www.niemanlab.org/2026/02/a-new-bill-in-new-york-would-require-disclaimers-on-ai-generated-news-content/)
* [2026-02-06, 09:41:11](https://lobste.rs/s/5mzzfq/no_really_bash_is_not_enough_why_large) - [No, Really, Bash Is Not Enough: Why Large-Scale CI Needs an Orchestrator](https://iankduncan.com/engineering/2026-02-06-bash-is-not-enough/)
* [2026-02-06, 08:21:00](https://soylentnews.org/article.pl?sid=26/02/03/0322237&amp;from=rss) - [How to Bypass a Parallel Port Dongle](https://soylentnews.org/article.pl?sid=26/02/03/0322237&amp;from=rss)
* [2026-02-06, 08:01:00](https://news.slashdot.org/story/26/02/05/187252/cia-has-killed-off-the-world-factbook-after-six-decades?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CIA Has Killed Off The World Factbook After Six Decades](https://news.slashdot.org/story/26/02/05/187252/cia-has-killed-off-the-world-factbook-after-six-decades?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-06, 07:44:20](https://lobste.rs/s/0efygh/voxtral_c_pure_c_inference_mistral) - [voxtral.c: Pure C inference of Mistral Voxtral Realtime 4B speech to text model](https://github.com/antirez/voxtral.c)
* [2026-02-06, 07:00:55](https://lobste.rs/s/8rnhnq/monty_minimal_secure_python_interpreter) - [monty: A minimal, secure Python interpreter written in Rust for use by AI](https://github.com/pydantic/monty)
* [2026-02-06, 06:04:26](https://lobste.rs/s/vzzqes/elfconv_aot_binary_translator_linux_elf) - [elfconv: AOT binary translator of Linux/ELF -&gt; WebAssembly](https://github.com/yomaytk/elfconv)
* [2026-02-06, 05:29:55](https://news.ycombinator.com/item?id=46909468) - [Things Unix can do atomically (2010)](https://rcrowley.org/2010/01/06/things-unix-can-do-atomically.html)
* [2026-02-06, 05:24:36](https://news.ycombinator.com/item?id=46909439) - [Systems Thinking](http://theprogrammersparadox.blogspot.com/2026/02/systems-thinking.html)
* [2026-02-06, 05:01:00](https://it.slashdot.org/story/26/02/05/1935209/google-confirms-airdrop-sharing-is-coming-to-android-phones-beyond-pixels?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Confirms AirDrop Sharing is Coming To Android Phones Beyond Pixels](https://it.slashdot.org/story/26/02/05/1935209/google-confirms-airdrop-sharing-is-coming-to-android-phones-beyond-pixels?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-06, 04:12:59](https://news.ycombinator.com/item?id=46909037) - [Show HN: Artifact Keeper – Open-Source Artifactory/Nexus Alternative in Rust](https://github.com/artifact-keeper)
* [2026-02-06, 03:59:00](https://soylentnews.org/article.pl?sid=26/02/03/0321201&amp;from=rss) - [Notepad++ update feature hijacked by Chinese state hackers for months](https://soylentnews.org/article.pl?sid=26/02/03/0321201&amp;from=rss)
* [2026-02-06, 03:25:51](https://news.ycombinator.com/item?id=46908700) - [Waiting for Postgres 19: Better planner hints with path generation strategies [video]](https://www.youtube.com/watch?v=QLb3nhIy2Lc)
* [2026-02-06, 03:22:40](https://lobste.rs/s/rsmqux/rce_amd_won_t_fix) - [The RCE that AMD won&apos;t fix](https://mrbruh.com/amd/)
* [2026-02-06, 03:22:29](https://news.ycombinator.com/item?id=46908671) - [I reversed Tower of Fantasy&apos;s anti-cheat driver: a BYOVD toolkit never loaded](https://vespalec.com/blog/tower-of-flaws/)
* [2026-02-06, 02:58:31](https://news.ycombinator.com/item?id=46908491) - [GitHub Actions is slowly killing engineering teams](https://www.iankduncan.com/engineering/2026-02-05-github-actions-killing-your-team/)
* [2026-02-06, 02:00:00](https://slashdot.org/story/26/02/05/1930255/the-european-commission-is-testing-an-open-source-alternative-to-microsoft-teams?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The European Commission Is Testing an Open Source Alternative To Microsoft Teams](https://slashdot.org/story/26/02/05/1930255/the-european-commission-is-testing-an-open-source-alternative-to-microsoft-teams?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-06, 01:49:13](https://lobste.rs/s/5k4et9/how_program_computers_kos_2015) - [How to program computers (kOS) (2015)](https://fall.tr/kos)
* [2026-02-05, 23:30:00](https://news.slashdot.org/story/26/02/05/1924252/court-rules-that-ripping-youtube-clips-can-violate-the-dmca?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Court Rules That Ripping YouTube Clips Can Violate the DMCA](https://news.slashdot.org/story/26/02/05/1924252/court-rules-that-ripping-youtube-clips-can-violate-the-dmca?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-05, 23:29:18](https://news.ycombinator.com/item?id=46906947) - [The RCE that AMD won&apos;t fix](https://mrbruh.com/amd/)
* [2026-02-05, 23:17:00](https://soylentnews.org/article.pl?sid=26/02/03/0318252&amp;from=rss) - [Overly Involved Parents May Hold Their Kids Back Professionally](https://soylentnews.org/article.pl?sid=26/02/03/0318252&amp;from=rss)
* [2026-02-05, 21:30:00](https://science.slashdot.org/story/26/02/05/1918226/nasa-will-finally-let-its-astronauts-bring-iphones-to-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Will Finally Let Its Astronauts Bring iPhones To the Moon](https://science.slashdot.org/story/26/02/05/1918226/nasa-will-finally-let-its-astronauts-bring-iphones-to-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-05, 20:27:15](https://lobste.rs/s/vwsdqu/vibe_coding_kills_open_source) - [Vibe Coding Kills Open Source](https://arxiv.org/pdf/2601.15494)
* [2026-02-05, 20:15:48](https://news.ycombinator.com/item?id=46904569) - [Claude Opus 4.6 extra usage promo](https://support.claude.com/en/articles/13613973-claude-opus-4-6-extra-usage-promo)
* [2026-02-05, 20:00:39](https://news.ycombinator.com/item?id=46904361) - [LinkedIn checks for 2953 browser extensions](https://github.com/mdp/linkedin-extension-fingerprinting)
* [2026-02-05, 20:00:00](https://science.slashdot.org/story/26/02/05/1949245/musk-predicts-spacex-will-launch-more-ai-compute-per-year-than-the-cumulative-total-on-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Musk Predicts SpaceX Will Launch More AI Compute Per Year Than the Cumulative Total on Earth](https://science.slashdot.org/story/26/02/05/1949245/musk-predicts-spacex-will-launch-more-ai-compute-per-year-than-the-cumulative-total-on-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-05, 19:58:49](https://lobste.rs/s/87rudf/my_ai_adoption_journey) - [My AI Adoption Journey](https://mitchellh.com/writing/my-ai-adoption-journey)
* [2026-02-05, 19:29:41](https://news.ycombinator.com/item?id=46903929) - [The time I didn&apos;t meet Jeffrey Epstein](https://scottaaronson.blog/?p=9534)
* [2026-02-05, 19:27:11](https://lobste.rs/s/6nahuh/building_c_compiler_with_team_parallel) - [Building a C compiler with a team of parallel Claudes](https://www.anthropic.com/engineering/building-c-compiler)
* [2026-02-05, 19:07:51](https://news.ycombinator.com/item?id=46903616) - [We tasked Opus 4.6 using agent teams to build a C Compiler](https://www.anthropic.com/engineering/building-c-compiler)
* [2026-02-05, 19:04:40](https://news.ycombinator.com/item?id=46903558) - [My AI Adoption Journey](https://mitchellh.com/writing/my-ai-adoption-journey)
* [2026-02-05, 19:00:00](https://tech.slashdot.org/story/26/02/05/1729259/automattic-and-the-internet-archive-team-up-to-fight-link-rot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Automattic and the Internet Archive Team Up To Fight Link Rot](https://tech.slashdot.org/story/26/02/05/1729259/automattic-and-the-internet-archive-team-up-to-fight-link-rot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-05, 18:29:00](https://soylentnews.org/article.pl?sid=26/02/03/0317238&amp;from=rss) - [The Brain’s Response To A Heart Attack May Worsen Recovery](https://soylentnews.org/article.pl?sid=26/02/03/0317238&amp;from=rss)
* [2026-02-05, 18:08:08](https://news.ycombinator.com/item?id=46902638) - [GPT-5.3-Codex](https://openai.com/index/introducing-gpt-5-3-codex/)
* [2026-02-05, 18:00:00](https://slashdot.org/story/26/02/05/1755209/anthropic-launches-claude-opus-46-as-its-ai-tools-rattle-software-markets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Launches Claude Opus 4.6 as Its AI Tools Rattle Software Markets](https://slashdot.org/story/26/02/05/1755209/anthropic-launches-claude-opus-46-as-its-ai-tools-rattle-software-markets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-05, 17:38:53](https://news.ycombinator.com/item?id=46902223) - [Claude Opus 4.6](https://www.anthropic.com/news/claude-opus-4-6)
* [2026-02-05, 17:01:44](https://lobste.rs/s/vhvbr8/on_promises_high_assurance_cryptography) - [On the Promises of &apos;High-Assurance&apos; Cryptography](https://symbolic.software/blog/2026-02-05-cryspen/)
* [2026-02-05, 16:55:38](https://news.ycombinator.com/item?id=46901716) - [Hypernetworks: Neural Networks for Hierarchical Data](https://blog.sturdystatistics.com/posts/hnet_part_I/)
* [2026-02-05, 16:45:00](https://hardware.slashdot.org/story/26/02/05/175200/western-digital-plots-a-path-to-140-tb-hard-drives-using-vertical-lasers-and-14-platter-designs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Western Digital Plots a Path To 140 TB Hard Drives Using Vertical Lasers and 14-Platter Designs](https://hardware.slashdot.org/story/26/02/05/175200/western-digital-plots-a-path-to-140-tb-hard-drives-using-vertical-lasers-and-14-platter-designs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-05, 16:01:00](https://entertainment.slashdot.org/story/26/02/05/1519212/amazon-plans-to-use-ai-to-speed-up-tv-and-film-production?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Plans To Use AI To Speed Up TV and Film Production](https://entertainment.slashdot.org/story/26/02/05/1519212/amazon-plans-to-use-ai-to-speed-up-tv-and-film-production?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-05, 15:52:11](https://lobste.rs/s/w2lcci/build_systems_build_philosophy_2020) - [Build Systems and Build Philosophy (2020)](https://abseil.io/resources/swe-book/html/ch18.html)
* [2026-02-05, 15:42:35](https://lobste.rs/s/xhtyv7/jujutsu_v0_38_0_released) - [jujutsu v0.38.0 released](https://github.com/jj-vcs/jj/releases/tag/v0.38.0)
* [2026-02-05, 15:23:40](https://lobste.rs/s/hn9ny5/un_portable_defer_c) - [(Un)portable defer in C](https://antonz.org/defer-in-c/)
* [2026-02-05, 15:00:00](https://news.slashdot.org/story/26/02/05/1458204/spotify-plans-to-sell-physical-books?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Spotify Plans To Sell Physical Books ](https://news.slashdot.org/story/26/02/05/1458204/spotify-plans-to-sell-physical-books?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-05, 14:59:41](https://lobste.rs/s/hkqnro/github_actions_is_slowly_killing_your) - [GitHub Actions Is Slowly Killing Your Engineering Team](https://iankduncan.com/engineering/2026-02-05-github-actions-killing-your-team/)
* [2026-02-05, 14:13:42](https://lobste.rs/s/mzvnod/trust_signals_are_broken) - [Trust signals are broken](https://ordep.dev/posts/trust-signals-are-broken)
* [2026-02-05, 14:05:33](https://lobste.rs/s/fklihk/owning_5m_data_center) - [Owning a $5M data center](https://blog.comma.ai/datacenter/)
* [2026-02-05, 14:00:00](https://apple.slashdot.org/story/26/02/05/1229222/fbi-couldnt-get-into-reporters-iphone-because-it-had-lockdown-mode-enabled?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FBI Couldn&apos;t Get Into Reporter&apos;s iPhone Because It Had Lockdown Mode Enabled](https://apple.slashdot.org/story/26/02/05/1229222/fbi-couldnt-get-into-reporters-iphone-because-it-had-lockdown-mode-enabled?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-05, 13:43:45](https://lobste.rs/s/yiwt27/future_was_federated) - [The Future Was Federated](https://news.dyne.org/the-future-was-federated/)
* [2026-02-05, 13:43:00](https://soylentnews.org/article.pl?sid=26/02/02/1520246&amp;from=rss) - [Amutable: Systemd Creator Lennart Poettering Launches New Linux Security Venture](https://soylentnews.org/article.pl?sid=26/02/02/1520246&amp;from=rss)
* [2026-02-05, 12:30:00](https://slashdot.org/story/26/02/05/1019252/kalshi-claims-extortion-then-recants-in-feud-over-user-losses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Kalshi Claims &apos;Extortion,&apos; Then Recants in Feud Over User Losses](https://slashdot.org/story/26/02/05/1019252/kalshi-claims-extortion-then-recants-in-feud-over-user-losses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-05, 12:27:04](https://lobste.rs/s/1xyudo/we_are_qa_engineers_now) - [We are QA Engineers now](https://serce.me/posts/2026-02-05-we-are-qa-engineers-now)
* [2026-02-05, 12:25:44](https://lobste.rs/s/j2mblu/fosdem_26_my_hallway_track_takeaways) - [FOSDEM 26 - My Hallway Track Takeaways](https://sluongng.substack.com/p/fosdem-26-my-hallway-track-takeaways)
* [2026-02-05, 11:46:00](https://soylentnews.org/article.pl?sid=26/02/02/150245&amp;from=rss) - [RIP Didier Spaier](https://soylentnews.org/article.pl?sid=26/02/02/150245&amp;from=rss)
* [2026-02-05, 09:02:00](https://soylentnews.org/article.pl?sid=26/02/02/1453203&amp;from=rss) - [Exploring How Gut Bacteria Alter the Flavor of Black Ivory Coffee Beans](https://soylentnews.org/article.pl?sid=26/02/02/1453203&amp;from=rss)
* [2026-02-05, 08:45:48](https://lobste.rs/s/hjytin/on_craft_ai) - [On craft and AI](https://slightknack.dev/daily/2026-02-04/)
* [2026-02-05, 04:15:00](https://soylentnews.org/article.pl?sid=26/02/02/1450223&amp;from=rss) - [Autonomous Cars Vulnerable to Prompt Injection](https://soylentnews.org/article.pl?sid=26/02/02/1450223&amp;from=rss)
* [2026-02-04, 23:31:00](https://soylentnews.org/article.pl?sid=26/02/02/1443223&amp;from=rss) - [The UK Government Gets It Spectacularly Wrong On AI](https://soylentnews.org/article.pl?sid=26/02/02/1443223&amp;from=rss)
* [2026-02-04, 19:20:32](https://lobste.rs/s/iyu0f8/recreating_epstein_pdfs_from_raw_encoded) - [Recreating Epstein PDFs from raw encoded attachments](https://neosmart.net/blog/recreating-epstein-pdfs-from-raw-encoded-attachments/)
* [2026-02-04, 19:19:07](https://news.ycombinator.com/item?id=46890335) - [Recreating Epstein PDFs from raw encoded attachments](https://neosmart.net/blog/recreating-epstein-pdfs-from-raw-encoded-attachments/)
* [2026-02-04, 18:47:00](https://soylentnews.org/article.pl?sid=26/02/02/1438258&amp;from=rss) - [Cooler Bedroom Temperatures Help the Heart Recover During Sleep](https://soylentnews.org/article.pl?sid=26/02/02/1438258&amp;from=rss)
* [2026-02-04, 14:00:00](https://soylentnews.org/communityreviews/article.pl?sid=26/02/01/0325230&amp;from=rss) - [Review of iwStack.com](https://soylentnews.org/communityreviews/article.pl?sid=26/02/01/0325230&amp;from=rss)
* [2026-02-04, 09:16:00](https://soylentnews.org/article.pl?sid=26/02/02/1228214&amp;from=rss) - [When 20-Year-Old Bill Gates Fought the &apos;Thieves&apos; Who Stole His First Code](https://soylentnews.org/article.pl?sid=26/02/02/1228214&amp;from=rss)
* [2026-02-04, 04:34:00](https://soylentnews.org/article.pl?sid=26/02/02/0110236&amp;from=rss) - [Research Team Reports Breakthrough in Pancreatic Cancer Treatment](https://soylentnews.org/article.pl?sid=26/02/02/0110236&amp;from=rss)
* [2026-02-03, 23:47:00](https://soylentnews.org/article.pl?sid=26/02/02/0050216&amp;from=rss) - [ChatGPT Wrote “Goodnight Moon” Suicide Lullaby for Man Who Later Killed Himself](https://soylentnews.org/article.pl?sid=26/02/02/0050216&amp;from=rss)
* [2026-02-03, 19:04:00](https://soylentnews.org/article.pl?sid=26/02/02/0036232&amp;from=rss) - [NASA Assembling a Formal Anomaly Review Board for Maven](https://soylentnews.org/article.pl?sid=26/02/02/0036232&amp;from=rss)
* [2026-02-03, 14:17:00](https://soylentnews.org/article.pl?sid=26/02/02/0029236&amp;from=rss) - [France Moves Government Departments Off Zoom and MS Teams Onto Homegrown Visio](https://soylentnews.org/article.pl?sid=26/02/02/0029236&amp;from=rss)
* [2026-02-03, 10:11:35](https://news.ycombinator.com/item?id=46869024) - [Sealos – AI Native Cloud Cloud Operating System](https://github.com/labring/sealos)
* [2026-02-03, 09:43:36](https://news.ycombinator.com/item?id=46868803) - [DNS Explained – How Domain Names Get Resolved](https://www.bhusalmanish.com.np/blog/posts/dns-explained.html)
* [2026-02-03, 09:29:00](https://soylentnews.org/article.pl?sid=26/02/01/1928214&amp;from=rss) - [$100 Billion Mega Deal Between OpenAI and Nvidia is on Ice](https://soylentnews.org/article.pl?sid=26/02/01/1928214&amp;from=rss)
* [2026-02-03, 08:41:19](https://news.ycombinator.com/item?id=46868275) - [Coding Agents and Use Cases](https://justsitandgrin.im/posts/coding-agents-use-cases/)
* [2026-02-03, 07:03:34](https://news.ycombinator.com/item?id=46867526) - [MenuetOS – a GUI OS that boots from a single floppy disk](https://www.menuetos.net/)
* [2026-02-03, 06:53:23](https://news.ycombinator.com/item?id=46867446) - [Stay Away from My Trash](https://tldraw.dev/blog/stay-away-from-my-trash)
* [2026-02-03, 06:26:01](https://news.ycombinator.com/item?id=46867271) - [Plasma Effect](https://www.4rknova.com/blog/2016/11/01/plasma)
* [2026-02-03, 04:43:00](https://soylentnews.org/article.pl?sid=26/02/01/1912232&amp;from=rss) - [How to Stop Microsoft From Letting the Government See Everything on Your Computer](https://soylentnews.org/article.pl?sid=26/02/01/1912232&amp;from=rss)
* [2026-02-02, 23:58:00](https://soylentnews.org/article.pl?sid=26/02/01/199225&amp;from=rss) - [Tim Berners-Lee  Wants to Save the Web](https://soylentnews.org/article.pl?sid=26/02/01/199225&amp;from=rss)
* [2026-02-02, 22:38:47](https://news.ycombinator.com/item?id=46863021) - [The Color of Safety](https://protocolized.summerofprotocols.com/p/the-color-of-safety)
* [2026-02-02, 19:12:00](https://soylentnews.org/article.pl?sid=26/02/01/196206&amp;from=rss) - [ReactOS Turns 30](https://soylentnews.org/article.pl?sid=26/02/01/196206&amp;from=rss)
* [2026-02-02, 14:28:00](https://soylentnews.org/article.pl?sid=26/02/01/194207&amp;from=rss) - [Discovery Challenges Assumptions About the Structure of Language](https://soylentnews.org/article.pl?sid=26/02/01/194207&amp;from=rss)
* [2026-02-02, 13:18:05](https://news.ycombinator.com/item?id=46855697) - [Animated Knots](https://www.animatedknots.com/)
* [2026-02-02, 09:42:00](https://soylentnews.org/article.pl?sid=26/02/01/191257&amp;from=rss) - [The EU Tells Google to Give External AI Assistants the Same Access to Android as Gemini Has](https://soylentnews.org/article.pl?sid=26/02/01/191257&amp;from=rss)
* [2026-02-02, 07:05:56](https://news.ycombinator.com/item?id=46853261) - [Unlocking high-performance PostgreSQL with key memory optimizations](https://stormatics.tech/blogs/unlocking-high-performance-postgresql-key-memory-optimizations)
* [2026-02-02, 04:57:00](https://soylentnews.org/article.pl?sid=26/01/31/0217249&amp;from=rss) - [Scientists Baffled at Mysterious Ancient Creature That Doesn&apos;t Fit on the Tree of Life as We Know It](https://soylentnews.org/article.pl?sid=26/01/31/0217249&amp;from=rss)
* [2026-02-02, 00:11:00](https://soylentnews.org/article.pl?sid=26/01/31/024237&amp;from=rss) - [Processor Arm Race Heats Up as Nvidia Could Soon Challenge Intel, Amd and Apple With its N1X Laptop](https://soylentnews.org/article.pl?sid=26/01/31/024237&amp;from=rss)
