# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Technology

* [Agentic Proof-Oriented Programming](https://risemsr.github.io/blog/2026-02-04-nik-agentic-pop/) - This article discusses a unique approach to programming that emphasizes proof-oriented methods for agent behavior systems. [Comments](https://lobste.rs/s/axh9zo/agentic_proof_oriented_programming)

* [Anthropic's Claude Opus 4.6 uncovers 500 zero-day flaws in open-source code](https://www.axios.com/2026/02/05/anthropic-claude-opus-46-software-hunting) - Anthropic's new AI tool demonstrates its potential by identifying numerous vulnerabilities. [Comments](https://news.ycombinator.com/item?id=46902909)

* [GPT-5.3-Codex](https://openai.com/index/introducing-gpt-5-3-codex/) - The latest coding assistant from OpenAI boasts advanced capabilities, further streamlining software development. [Comments](https://news.ycombinator.com/item?id=46902638)

* [CIA suddenly stops publishing, removes archives of The World Factbook](https://simonwillison.net/2026/Feb/5/the-world-factbook/) - A sudden and mysterious withdrawal of public data has raised concerns over access and transparency. [Comments](https://news.ycombinator.com/item?id=46899808)

## Open Source and Developer Tools

* [Build Systems and Build Philosophy](https://abseil.io/resources/swe-book/html/ch18.html) - A thoughtful exploration of the complexities and principles behind software build systems. [Comments](https://lobste.rs/s/w2lcci/build_systems_build_philosophy)

* [GitHub Actions Is Slowly Killing Your Engineering Team](https://iankduncan.com/engineering/2026-02-05-github-actions-killing-your-team/) - A critique of GitHub Actions and how its inefficiencies may hinder productivity. [Comments](https://lobste.rs/s/hkqnro/github_actions_is_slowly_killing_your)

## Quantum Leap in AI and Data Security

* [Psychometric Jailbreaks Reveal Internal Conflict in Frontier Models](https://arxiv.org/abs/2512.04124) - A study revealing the latent contradictions in sophisticated AI frontier models. [Comments](https://news.ycombinator.com/item?id=46902855)

* [FBI Couldn't Get Into Reporter's iPhone Because It Had Lockdown Mode Enabled](https://apple.slashdot.org/story/26/02/05/1229222/fbi-couldnt-get-into-reporters-iphone-because-it-had-lockdown-mode-enabled?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Apple Lockdown Mode showcases its robust security capabilities in the face of FBI access attempts.

## Environmental and Technological Innovations

* [Owning a $5M data center](https://blog.comma.ai/datacenter/) - An intriguing anecdote on managing a state-of-the-art data center. [Comments](https://lobste.rs/s/fklihk/owning_5m_data_center)

* [Western Digital Plots a Path To 140 TB Hard Drives Using Vertical Lasers and 14-Platter Designs](https://hardware.slashdot.org/story/26/02/05/175200/western-digital-plots-a-path-to-140-tb-hard-drives-using-vertical-lasers-and-14-platter-designs?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Progress towards developing larger capacity storage using laser technology.

## Science and Health

* [The Brain’s Response To A Heart Attack May Worsen Recovery](https://soylentnews.org/article.pl?sid=26/02/03/0317238&from=rss) - New discoveries suggest the brain's response to trauma could impact healing outcomes. [Comments](https://soylentnews.org/article.pl?sid=26/02/03/0317238&from=rss)

## Cultural and Societal Insights

* [The Future Was Federated](https://news.dyne.org/the-future-was-federated/) - An exploration of federated technologies and their implications for the future of the web. [Comments](https://lobste.rs/s/yiwt27/future_was_federated)

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

* [2026-02-05, 18:46:10](https://lobste.rs/s/axh9zo/agentic_proof_oriented_programming) - [Agentic Proof-Oriented Programming](https://risemsr.github.io/blog/2026-02-04-nik-agentic-pop/)
* [2026-02-05, 18:30:27](https://lobste.rs/s/gwhnrh/search_for_meaning_through) - [The Search for Meaning Through Collaboration and Code](https://clojurecivitas.github.io/civitas/why/village/scene.html)
* [2026-02-05, 18:30:16](https://news.ycombinator.com/item?id=46903001) - [Ardour 9.0 Released](https://ardour.org/whatsnew.html)
* [2026-02-05, 18:29:00](https://soylentnews.org/article.pl?sid=26/02/03/0317238&amp;from=rss) - [The Brain’s Response To A Heart Attack May Worsen Recovery](https://soylentnews.org/article.pl?sid=26/02/03/0317238&amp;from=rss)
* [2026-02-05, 18:25:05](https://news.ycombinator.com/item?id=46902909) - [Anthropic&apos;s Claude Opus 4.6 uncovers 500 zero-day flaws in open-source code](https://www.axios.com/2026/02/05/anthropic-claude-opus-46-software-hunting)
* [2026-02-05, 18:21:53](https://news.ycombinator.com/item?id=46902855) - [Psychometric Jailbreaks Reveal Internal Conflict in Frontier Models](https://arxiv.org/abs/2512.04124)
* [2026-02-05, 18:17:14](https://news.ycombinator.com/item?id=46902789) - [A small, shared skill library by builders, for builders. (human and agent)](https://github.com/PsiACE/skills)
* [2026-02-05, 18:08:08](https://news.ycombinator.com/item?id=46902638) - [GPT-5.3-Codex](https://openai.com/index/introducing-gpt-5-3-codex/)
* [2026-02-05, 18:00:07](https://news.ycombinator.com/item?id=46902512) - [Unsealed Court Documents Show Teen Addiction Was Big Tech&apos;s \&quot;Top Priority\&quot;](https://techoversight.org/2026/01/25/top-report-mdl-jan-25/)
* [2026-02-05, 18:00:00](https://slashdot.org/story/26/02/05/1755209/anthropic-launches-claude-opus-46-as-its-ai-tools-rattle-software-markets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Launches Claude Opus 4.6 as Its AI Tools Rattle Software Markets](https://slashdot.org/story/26/02/05/1755209/anthropic-launches-claude-opus-46-as-its-ai-tools-rattle-software-markets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-05, 17:49:54](https://news.ycombinator.com/item?id=46902368) - [Claude Code Agent Teams](https://code.claude.com/docs/en/agent-teams)
* [2026-02-05, 17:42:47](https://news.ycombinator.com/item?id=46902273) - [Advancing finance with Claude Opus 4.6](https://claude.com/blog/opus-4-6-finance)
* [2026-02-05, 17:38:53](https://news.ycombinator.com/item?id=46902223) - [Claude Opus 4.6](https://www.anthropic.com/news/claude-opus-4-6)
* [2026-02-05, 17:01:44](https://lobste.rs/s/vhvbr8/on_promises_high_assurance_cryptography) - [On the Promises of &apos;High-Assurance&apos; Cryptography](https://symbolic.software/blog/2026-02-05-cryspen/)
* [2026-02-05, 17:00:07](https://news.ycombinator.com/item?id=46901768) - [Maihem (YC W24): hiring sr robotics perception engineer (London, on-site)](https://jobs.ashbyhq.com/maihem/8da3fa8b-5544-45de-a99e-888021519758)
* [2026-02-05, 16:45:00](https://hardware.slashdot.org/story/26/02/05/175200/western-digital-plots-a-path-to-140-tb-hard-drives-using-vertical-lasers-and-14-platter-designs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Western Digital Plots a Path To 140 TB Hard Drives Using Vertical Lasers and 14-Platter Designs](https://hardware.slashdot.org/story/26/02/05/175200/western-digital-plots-a-path-to-140-tb-hard-drives-using-vertical-lasers-and-14-platter-designs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-05, 16:33:56](https://news.ycombinator.com/item?id=46901452) - [European Commission Trials Matrix to Replace Teams](https://www.euractiv.com/news/commission-trials-european-open-source-communications-software/)
* [2026-02-05, 16:01:00](https://entertainment.slashdot.org/story/26/02/05/1519212/amazon-plans-to-use-ai-to-speed-up-tv-and-film-production?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Plans To Use AI To Speed Up TV and Film Production](https://entertainment.slashdot.org/story/26/02/05/1519212/amazon-plans-to-use-ai-to-speed-up-tv-and-film-production?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-05, 15:52:11](https://lobste.rs/s/w2lcci/build_systems_build_philosophy) - [Build Systems and Build Philosophy](https://abseil.io/resources/swe-book/html/ch18.html)
* [2026-02-05, 15:42:35](https://lobste.rs/s/xhtyv7/jujutsu_v0_38_0_released) - [jujutsu v0.38.0 released](https://github.com/jj-vcs/jj/releases/tag/v0.38.0)
* [2026-02-05, 15:23:40](https://lobste.rs/s/hn9ny5/un_portable_defer_c) - [(Un)portable defer in C](https://antonz.org/defer-in-c/)
* [2026-02-05, 15:00:00](https://news.slashdot.org/story/26/02/05/1458204/spotify-plans-to-sell-physical-books?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Spotify Plans To Sell Physical Books ](https://news.slashdot.org/story/26/02/05/1458204/spotify-plans-to-sell-physical-books?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-05, 14:59:41](https://lobste.rs/s/hkqnro/github_actions_is_slowly_killing_your) - [GitHub Actions Is Slowly Killing Your Engineering Team](https://iankduncan.com/engineering/2026-02-05-github-actions-killing-your-team/)
* [2026-02-05, 14:15:38](https://lobste.rs/s/vjvtr8/csrf_protection_phoenix_with_sec_fetch) - [CSRF protection in Phoenix with Sec-Fetch-Site](https://mediremi.com/writing/phoenix-csrf-protection-with-sec-fetch-site/)
* [2026-02-05, 14:13:42](https://lobste.rs/s/mzvnod/trust_signals_are_broken) - [Trust signals are broken](https://ordep.dev/posts/trust-signals-are-broken)
* [2026-02-05, 14:11:13](https://news.ycombinator.com/item?id=46899808) - [CIA suddenly stops publishing, removes archives of The World Factbook](https://simonwillison.net/2026/Feb/5/the-world-factbook/)
* [2026-02-05, 14:05:33](https://lobste.rs/s/fklihk/owning_5m_data_center) - [Owning a $5M data center](https://blog.comma.ai/datacenter/)
* [2026-02-05, 14:00:00](https://apple.slashdot.org/story/26/02/05/1229222/fbi-couldnt-get-into-reporters-iphone-because-it-had-lockdown-mode-enabled?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FBI Couldn&apos;t Get Into Reporter&apos;s iPhone Because It Had Lockdown Mode Enabled](https://apple.slashdot.org/story/26/02/05/1229222/fbi-couldnt-get-into-reporters-iphone-because-it-had-lockdown-mode-enabled?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-05, 13:47:59](https://news.ycombinator.com/item?id=46899591) - [The New Collabora Office for Desktop](https://www.collaboraonline.com/collabora-office/)
* [2026-02-05, 13:43:45](https://lobste.rs/s/yiwt27/future_was_federated) - [The Future Was Federated](https://news.dyne.org/the-future-was-federated/)
* [2026-02-05, 13:43:00](https://soylentnews.org/article.pl?sid=26/02/02/1520246&amp;from=rss) - [Amutable: Systemd Creator Lennart Poettering Launches New Linux Security Venture](https://soylentnews.org/article.pl?sid=26/02/02/1520246&amp;from=rss)
* [2026-02-05, 12:56:28](https://news.ycombinator.com/item?id=46899132) - [Company as Code](https://blog.42futures.com/p/company-as-code)
* [2026-02-05, 12:48:01](https://news.ycombinator.com/item?id=46899066) - [GB Renewables Map](https://renewables-map.robinhawkes.com/)
* [2026-02-05, 12:30:00](https://slashdot.org/story/26/02/05/1019252/kalshi-claims-extortion-then-recants-in-feud-over-user-losses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Kalshi Claims &apos;Extortion,&apos; Then Recants in Feud Over User Losses](https://slashdot.org/story/26/02/05/1019252/kalshi-claims-extortion-then-recants-in-feud-over-user-losses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-05, 12:27:04](https://lobste.rs/s/1xyudo/we_are_qa_engineers_now) - [We are QA Engineers now](https://serce.me/posts/2026-02-05-we-are-qa-engineers-now)
* [2026-02-05, 12:25:44](https://lobste.rs/s/j2mblu/fosdem_26_my_hallway_track_takeaways) - [FOSDEM 26 - My Hallway Track Takeaways](https://sluongng.substack.com/p/fosdem-26-my-hallway-track-takeaways)
* [2026-02-05, 11:46:00](https://soylentnews.org/article.pl?sid=26/02/02/150245&amp;from=rss) - [RIP Didier Spaier](https://soylentnews.org/article.pl?sid=26/02/02/150245&amp;from=rss)
* [2026-02-05, 11:45:03](https://news.ycombinator.com/item?id=46898615) - [Top downloaded skill in ClawHub contains malware](https://1password.com/blog/from-magic-to-malware-how-openclaws-agent-skills-become-an-attack-surface)
* [2026-02-05, 11:11:38](https://lobste.rs/s/rsm7xh/getting_main_thing_right) - [Getting the main thing right](https://www.seangoedecke.com/getting-the-main-thing-right/)
* [2026-02-05, 10:30:00](https://entertainment.slashdot.org/story/26/02/05/0839245/china-has-seized-sonys-television-halo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Has Seized Sony&apos;s Television Halo](https://entertainment.slashdot.org/story/26/02/05/0839245/china-has-seized-sonys-television-halo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-05, 09:39:11](https://news.ycombinator.com/item?id=46897737) - [Nanobot: Ultra-Lightweight Alternative to OpenClaw](https://github.com/HKUDS/nanobot)
* [2026-02-05, 09:02:00](https://soylentnews.org/article.pl?sid=26/02/02/1453203&amp;from=rss) - [Exploring How Gut Bacteria Alter the Flavor of Black Ivory Coffee Beans](https://soylentnews.org/article.pl?sid=26/02/02/1453203&amp;from=rss)
* [2026-02-05, 08:46:13](https://news.ycombinator.com/item?id=46897332) - [Show HN: Micropolis/SimCity Clone in Emacs Lisp](https://github.com/vkazanov/elcity)
* [2026-02-05, 08:45:48](https://lobste.rs/s/hjytin/on_craft_ai) - [On craft and AI](https://slightknack.dev/daily/2026-02-04/)
* [2026-02-05, 08:00:00](https://it.slashdot.org/story/26/02/05/0445243/munich-makes-digital-sovereignty-measurable-with-its-own-score?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Munich Makes Digital Sovereignty Measurable With Its Own Score](https://it.slashdot.org/story/26/02/05/0445243/munich-makes-digital-sovereignty-measurable-with-its-own-score?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-05, 06:34:35](https://lobste.rs/s/0om9ct/slint_1_15_released) - [Slint 1.15 Released](https://slint.dev/blog/slint-1.15-released)
* [2026-02-05, 06:16:57](https://lobste.rs/s/9vtidf/customizable_nice_select) - [Customizable Nice &lt;select&gt;](https://nerdy.dev/nice-select)
* [2026-02-05, 05:50:01](https://news.ycombinator.com/item?id=46896146) - [Don&apos;t rent the cloud, own instead](https://blog.comma.ai/datacenter/)
* [2026-02-05, 05:22:36](https://news.ycombinator.com/item?id=46895972) - [When internal hostnames are leaked to the clown](https://rachelbythebay.com/w/2026/02/03/badnas/)
* [2026-02-05, 05:00:00](https://it.slashdot.org/story/26/02/05/0030225/valves-steam-machine-has-been-delayed-and-the-ram-crisis-will-impact-pricing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Valve&apos;s Steam Machine Has Been Delayed, and the RAM Crisis Will Impact Pricing](https://it.slashdot.org/story/26/02/05/0030225/valves-steam-machine-has-been-delayed-and-the-ram-crisis-will-impact-pricing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-05, 04:15:00](https://soylentnews.org/article.pl?sid=26/02/02/1450223&amp;from=rss) - [Autonomous Cars Vulnerable to Prompt Injection](https://soylentnews.org/article.pl?sid=26/02/02/1450223&amp;from=rss)
* [2026-02-05, 03:38:26](https://news.ycombinator.com/item?id=46895381) - [Wirth&apos;s Revenge](https://jmoiron.net/blog/wirths-revenge/)
* [2026-02-05, 02:00:00](https://tech.slashdot.org/story/26/02/05/0036222/bmw-commits-to-subscriptions-even-after-heated-seat-debacle?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [BMW Commits To Subscriptions Even After Heated Seat Debacle](https://tech.slashdot.org/story/26/02/05/0036222/bmw-commits-to-subscriptions-even-after-heated-seat-debacle?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-05, 00:25:00](https://tech.slashdot.org/story/26/02/05/0023249/microsoft-adds-sysmon-to-windows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Adds Sysmon To Windows](https://tech.slashdot.org/story/26/02/05/0023249/microsoft-adds-sysmon-to-windows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-04, 23:31:00](https://soylentnews.org/article.pl?sid=26/02/02/1443223&amp;from=rss) - [The UK Government Gets It Spectacularly Wrong On AI](https://soylentnews.org/article.pl?sid=26/02/02/1443223&amp;from=rss)
* [2026-02-04, 20:46:00](https://science.slashdot.org/story/26/02/04/2046202/russian-spy-satellites-have-intercepted-eu-communications-satellites?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russian Spy Satellites Have Intercepted EU Communications Satellites](https://science.slashdot.org/story/26/02/04/2046202/russian-spy-satellites-have-intercepted-eu-communications-satellites?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-04, 19:20:32](https://lobste.rs/s/iyu0f8/recreating_epstein_pdfs_from_raw_encoded) - [Recreating Epstein PDFs from raw encoded attachments](https://neosmart.net/blog/recreating-epstein-pdfs-from-raw-encoded-attachments/)
* [2026-02-04, 19:00:00](https://entertainment.slashdot.org/story/26/02/04/1826249/everyone-is-stealing-tv?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Everyone is Stealing TV&apos;](https://entertainment.slashdot.org/story/26/02/04/1826249/everyone-is-stealing-tv?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-04, 18:47:00](https://soylentnews.org/article.pl?sid=26/02/02/1438258&amp;from=rss) - [Cooler Bedroom Temperatures Help the Heart Recover During Sleep](https://soylentnews.org/article.pl?sid=26/02/02/1438258&amp;from=rss)
* [2026-02-04, 18:30:29](https://lobste.rs/s/tegjjy/few_cpu_hardware_bugs) - [A few CPU hardware bugs](https://www.taricorp.net/2026/a-few-cpu-bugs/)
* [2026-02-04, 18:09:00](https://slashdot.org/story/26/02/04/1810206/as-software-stocks-slump-investors-debate-ais-existential-threat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [As Software Stocks Slump, Investors Debate AI&apos;s Existential Threat](https://slashdot.org/story/26/02/04/1810206/as-software-stocks-slump-investors-debate-ais-existential-threat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-04, 16:00:00](https://slashdot.org/story/26/02/04/1327223/anthropic-pledges-to-keep-claude-ad-free-calls-ai-conversations-a-space-to-think?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Pledges To Keep Claude Ad-free, Calls AI Conversations a &apos;Space To Think&apos;](https://slashdot.org/story/26/02/04/1327223/anthropic-pledges-to-keep-claude-ad-free-calls-ai-conversations-a-space-to-think?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-04, 14:05:14](https://lobste.rs/s/jjoj8t/sukr_minimal_static_site_compiler_rust) - [Sukr: A minimal static site compiler in Rust with zero-JS output](https://sukr.io)
* [2026-02-04, 14:00:00](https://soylentnews.org/communityreviews/article.pl?sid=26/02/01/0325230&amp;from=rss) - [Review of iwStack.com](https://soylentnews.org/communityreviews/article.pl?sid=26/02/01/0325230&amp;from=rss)
* [2026-02-04, 09:50:49](https://lobste.rs/s/najof9/writing_rss_reader_80_lines_bash) - [writing an RSS reader in 80 lines of bash](https://yobibyte.github.io/yr.html)
* [2026-02-04, 09:16:00](https://soylentnews.org/article.pl?sid=26/02/02/1228214&amp;from=rss) - [When 20-Year-Old Bill Gates Fought the &apos;Thieves&apos; Who Stole His First Code](https://soylentnews.org/article.pl?sid=26/02/02/1228214&amp;from=rss)
* [2026-02-04, 08:35:56](https://lobste.rs/s/hfuiti/i_miss_thinking_hard) - [I miss thinking hard](https://www.jernesto.com/articles/thinking_hard)
* [2026-02-04, 07:54:14](https://lobste.rs/s/y04ll5/microsoft_has_killed_widgets_six_times) - [Microsoft Has Killed Widgets Six Times. Here&apos;s Why They Keep Coming Back](https://xakpc.dev/windows-widgets/history/)
* [2026-02-04, 07:21:50](https://lobste.rs/s/2svv99/competence_as_tragedy) - [Competence as Tragedy](https://crowprose.com/blog/competence-as-tragedy)
* [2026-02-04, 06:55:26](https://lobste.rs/s/bg1mw2/mobile_carriers_can_get_your_gps_location) - [Mobile carriers can get your GPS location](https://an.dywa.ng/carrier-gnss.html)
* [2026-02-04, 04:34:00](https://soylentnews.org/article.pl?sid=26/02/02/0110236&amp;from=rss) - [Research Team Reports Breakthrough in Pancreatic Cancer Treatment](https://soylentnews.org/article.pl?sid=26/02/02/0110236&amp;from=rss)
* [2026-02-03, 23:47:00](https://soylentnews.org/article.pl?sid=26/02/02/0050216&amp;from=rss) - [ChatGPT Wrote “Goodnight Moon” Suicide Lullaby for Man Who Later Killed Himself](https://soylentnews.org/article.pl?sid=26/02/02/0050216&amp;from=rss)
* [2026-02-03, 19:04:00](https://soylentnews.org/article.pl?sid=26/02/02/0036232&amp;from=rss) - [NASA Assembling a Formal Anomaly Review Board for Maven](https://soylentnews.org/article.pl?sid=26/02/02/0036232&amp;from=rss)
* [2026-02-03, 14:17:00](https://soylentnews.org/article.pl?sid=26/02/02/0029236&amp;from=rss) - [France Moves Government Departments Off Zoom and MS Teams Onto Homegrown Visio](https://soylentnews.org/article.pl?sid=26/02/02/0029236&amp;from=rss)
* [2026-02-03, 09:29:00](https://soylentnews.org/article.pl?sid=26/02/01/1928214&amp;from=rss) - [$100 Billion Mega Deal Between OpenAI and Nvidia is on Ice](https://soylentnews.org/article.pl?sid=26/02/01/1928214&amp;from=rss)
* [2026-02-03, 04:43:00](https://soylentnews.org/article.pl?sid=26/02/01/1912232&amp;from=rss) - [How to Stop Microsoft From Letting the Government See Everything on Your Computer](https://soylentnews.org/article.pl?sid=26/02/01/1912232&amp;from=rss)
* [2026-02-02, 23:58:00](https://soylentnews.org/article.pl?sid=26/02/01/199225&amp;from=rss) - [Tim Berners-Lee  Wants to Save the Web](https://soylentnews.org/article.pl?sid=26/02/01/199225&amp;from=rss)
* [2026-02-02, 19:12:00](https://soylentnews.org/article.pl?sid=26/02/01/196206&amp;from=rss) - [ReactOS Turns 30](https://soylentnews.org/article.pl?sid=26/02/01/196206&amp;from=rss)
* [2026-02-02, 14:28:00](https://soylentnews.org/article.pl?sid=26/02/01/194207&amp;from=rss) - [Discovery Challenges Assumptions About the Structure of Language](https://soylentnews.org/article.pl?sid=26/02/01/194207&amp;from=rss)
* [2026-02-02, 12:07:46](https://news.ycombinator.com/item?id=46855057) - [Making Ferrite Core Inductors at Home](https://danielmangum.com/posts/making-ferrite-core-inductors-home/)
* [2026-02-02, 09:42:00](https://soylentnews.org/article.pl?sid=26/02/01/191257&amp;from=rss) - [The EU Tells Google to Give External AI Assistants the Same Access to Android as Gemini Has](https://soylentnews.org/article.pl?sid=26/02/01/191257&amp;from=rss)
* [2026-02-02, 04:57:00](https://soylentnews.org/article.pl?sid=26/01/31/0217249&amp;from=rss) - [Scientists Baffled at Mysterious Ancient Creature That Doesn&apos;t Fit on the Tree of Life as We Know It](https://soylentnews.org/article.pl?sid=26/01/31/0217249&amp;from=rss)
* [2026-02-02, 00:11:00](https://soylentnews.org/article.pl?sid=26/01/31/024237&amp;from=rss) - [Processor Arm Race Heats Up as Nvidia Could Soon Challenge Intel, Amd and Apple With its N1X Laptop](https://soylentnews.org/article.pl?sid=26/01/31/024237&amp;from=rss)
* [2026-02-01, 19:30:00](https://soylentnews.org/article.pl?sid=26/01/31/0151243&amp;from=rss) - [Motor Trend - Car Dealer Confidential](https://soylentnews.org/article.pl?sid=26/01/31/0151243&amp;from=rss)
* [2026-02-01, 18:17:41](https://news.ycombinator.com/item?id=46848077) - [Triton Bespoke Layouts](https://www.lei.chat/posts/triton-bespoke-layouts/)
* [2026-02-01, 15:43:15](https://news.ycombinator.com/item?id=46846940) - [Programming Patterns: The Story of the Jacquard Loom](https://www.scienceandindustrymuseum.org.uk/objects-and-stories/jacquard-loom)
* [2026-02-01, 14:45:00](https://soylentnews.org/article.pl?sid=26/01/31/0148226&amp;from=rss) - [Voyager 2&apos;s Close Encounter With Uranus Wasn&apos;t in the Official Plan](https://soylentnews.org/article.pl?sid=26/01/31/0148226&amp;from=rss)
* [2026-02-01, 12:43:41](https://news.ycombinator.com/item?id=46845845) - [Claude Code: connect to a local model when your quota runs out](https://boxc.net/blog/2026/claude-code-connecting-to-local-models-when-your-quota-runs-out/)
* [2026-02-01, 12:35:30](https://news.ycombinator.com/item?id=46845790) - [Simply Scheme: Introducing Computer Science (1999)](https://people.eecs.berkeley.edu/~bh/ss-toc2.html)
* [2026-02-01, 09:59:00](https://soylentnews.org/article.pl?sid=26/01/31/014212&amp;from=rss) - [How Often Do AI Chatbots Lead Users Down a Harmful Path?](https://soylentnews.org/article.pl?sid=26/01/31/014212&amp;from=rss)
* [2026-02-01, 08:25:30](https://news.ycombinator.com/item?id=46844511) - [CG/SQL – SQL dialect compiler to C for sqlite3 mimicking stored procedures](https://ricomariani.github.io/CG-SQL-author/)
* [2026-02-01, 07:58:06](https://news.ycombinator.com/item?id=46844393) - [A Broken Heart](https://allenpike.com/2026/a-broken-heart/)
* [2026-02-01, 07:36:54](https://news.ycombinator.com/item?id=46844301) - [Fela Kuti First African to Get Grammys Lifetime Achievement Award](https://www.aljazeera.com/news/2026/2/1/fela-kuti-becomes-first-african-to-get-grammys-lifetime-achievement-award)
* [2026-02-01, 05:15:00](https://soylentnews.org/article.pl?sid=26/01/31/0058200&amp;from=rss) - [The Path to a Sovereign Tech Stack is Via a Commodified Tech Stack](https://soylentnews.org/article.pl?sid=26/01/31/0058200&amp;from=rss)
* [2026-02-01, 00:24:00](https://soylentnews.org/article.pl?sid=26/01/31/0054256&amp;from=rss) - [Researchers Use D&amp;D to Test AI&apos;s Long-Term Decision-Making Abilities](https://soylentnews.org/article.pl?sid=26/01/31/0054256&amp;from=rss)
