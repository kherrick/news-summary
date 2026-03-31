# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Development

* [Show HN: My open-world voxel game with a magic system, playable in the browser](https://kouh.me/wildmagic) - An exciting new browser game featuring a voxel-based open world and a magic system that lets players explore endless creative possibilities. [Comments](https://news.ycombinator.com/item?id=47591630)

* [Pipevals: Evaluation pipelines for every LLM application](https://www.pipevals.com) - Introducing a tool to streamline evaluation workflows for various language learning models (LLMs). [Comments](https://lobste.rs/s/iexiw9/pipevals_evaluation_pipelines_for_every)

* [Cohere Transcribe: Speech Recognition](https://cohere.com/blog/transcribe) - A new speech recognition initiative by Cohere, focusing on innovation in transcription technology. [Comments](https://news.ycombinator.com/item?id=47589818)

* [Scotty: A beautiful SSH task runner](https://freek.dev/3064-scotty-a-beautiful-ssh-task-runner) - A powerful yet user-friendly task automation tool for securely managing processes over SSH. [Comments](https://news.ycombinator.com/item?id=47589567)

* [Open source CAD in the browser (Solvespace)](https://solvespace.com/webver.pl) - Solvespace launches an open-source CAD system accessible directly from web browsers. [Comments](https://news.ycombinator.com/item?id=47586614)

* [JSSE: A JavaScript Engine Built by an Agent](https://p.ocmatos.com/blog/jsse-a-javascript-engine-built-by-an-agent.html) - A novel JavaScript engine generated autonomously by an artificial agent. [Comments](https://lobste.rs/s/czr1hj/jsse_javascript_engine_built_by_agent)

## Security and Privacy

* [OkCupid gave 3M dating-app photos to facial recognition firm, FTC says](https://arstechnica.com/tech-policy/2026/03/okcupid-match-pay-no-fine-for-sharing-user-photos-with-facial-recognition-firm/) - A troubling claim surfaces around OkCupid sharing user photos without proper consent. [Comments](https://news.ycombinator.com/item?id=47591104)

* [Claude Code&apos;s Source Code Leaks Via npm Source Maps](https://developers.slashdot.org/story/26/03/31/172257/claude-codes-source-code-leaks-via-npm-source-maps?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Major security breach reveals sensitive source code through npm. [Comments](https://news.ycombinator.com/item?id=47584540)

* [Supply Chain Attack on Axios](https://socket.dev/blog/axios-npm-package-compromised) - The Axios NPM package compromised with a trojan attack aimed at dropping remote access pests. [Comments](https://lobste.rs/s/l57wuc/supply_chain_attack_on_axios)

## Artificial Intelligence

* [Number of AI Chatbots Ignoring Human Instructions is Increasing](https://soylentnews.org/article.pl?sid=26/03/30/1454213&from=rss) - Growing concerns around AI chatbots not adhering to human instructions. [Comments](https://soylentnews.org/comments.pl?sid=26/03/30/1454213&cid=63772)

* [Google Unveils TurboQuant, a New AI Memory Compression Algorithm](https://soylentnews.org/article.pl?sid=26/03/28/0349246&from=rss) - Revolutionizing AI memory systems with TurboQuant for enhanced efficiency. [Comments](https://soylentnews.org/comments.pl?sid=26/03/28/0349246&cid=6370)

## Scientific Breakthroughs

* [Quadratic Gravity Theory Reshapes Quantum View of Big Bang](https://science.slashdot.org/story/26/03/31/0454242/quadratic-gravity-theory-reshapes-quantum-view-of-big-bang?utm_source=rss1.0mainlinkanon&utm_medium=feed) - New approaches to gravity reshape understanding of early universe quantum physics. [Comments](https://science.slashdot.org/comments.pl?sid=256/03/31/045)

## Legal and Regulatory Developments

* [Global Ban On Digital Duties Expires After Stalled Talks At WTO Meeting](https://news.slashdot.org/story/26/03/31/1837244/global-ban-on-digital-duties-expires-after-stalled-talks-at-wto-meeting?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A key regulatory milestone as a global agreement on digital duties collapses post-WTO stalemate. [Comments](https://news.slashdot.org/comments.pl?sid=275)

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

* [2026-03-31, 19:00:00](https://news.slashdot.org/story/26/03/31/1837244/global-ban-on-digital-duties-expires-after-stalled-talks-at-wto-meeting?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Global Ban On Digital Duties Expires After Stalled Talks At WTO Meeting](https://news.slashdot.org/story/26/03/31/1837244/global-ban-on-digital-duties-expires-after-stalled-talks-at-wto-meeting?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-31, 18:38:29](https://news.ycombinator.com/item?id=47591630) - [Show HN: My open-world voxel game with a magic system, playable in the browser](https://kouh.me/wildmagic)
* [2026-03-31, 18:33:46](https://lobste.rs/s/iexiw9/pipevals_evaluation_pipelines_for_every) - [Pipevals: Evaluation pipelines for every LLM application](https://www.pipevals.com)
* [2026-03-31, 18:27:16](https://lobste.rs/s/s5z94j/historical_github_uptime_charts) - [Historical GitHub Uptime Charts](https://damrnelson.github.io/github-historical-uptime/)
* [2026-03-31, 18:13:00](https://soylentnews.org/article.pl?sid=26/03/30/1454213&amp;from=rss) - [Number of AI Chatbots Ignoring Human Instructions is Increasing  ](https://soylentnews.org/article.pl?sid=26/03/30/1454213&amp;from=rss)
* [2026-03-31, 18:00:00](https://yro.slashdot.org/story/26/03/31/1717242/australia-readies-social-media-court-action-citing-teen-ban-breaches?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Australia Readies Social Media Court Action Citing Teen Ban Breaches](https://yro.slashdot.org/story/26/03/31/1717242/australia-readies-social-media-court-action-citing-teen-ban-breaches?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-31, 17:55:04](https://news.ycombinator.com/item?id=47591104) - [OkCupid gave 3M dating-app photos to facial recognition firm, FTC says](https://arstechnica.com/tech-policy/2026/03/okcupid-match-pay-no-fine-for-sharing-user-photos-with-facial-recognition-firm/)
* [2026-03-31, 17:05:00](https://developers.slashdot.org/story/26/03/31/172257/claude-codes-source-code-leaks-via-npm-source-maps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Claude Code&apos;s Source Code Leaks Via npm Source Maps](https://developers.slashdot.org/story/26/03/31/172257/claude-codes-source-code-leaks-via-npm-source-maps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-31, 16:42:48](https://lobste.rs/s/9frrpm/runtime_type_checking_is_great_2023) - [Runtime type checking is great (2023)](https://blog.jez.io/runtime-type-checking/)
* [2026-03-31, 16:27:02](https://news.ycombinator.com/item?id=47589818) - [Cohere Transcribe: Speech Recognition](https://cohere.com/blog/transcribe)
* [2026-03-31, 16:25:43](https://news.ycombinator.com/item?id=47589797) - [Show HN: PhAIL – Real-robot benchmark for AI models](https://phail.ai)
* [2026-03-31, 16:12:29](https://news.ycombinator.com/item?id=47589567) - [Scotty: A beautiful SSH task runner](https://freek.dev/3064-scotty-a-beautiful-ssh-task-runner)
* [2026-03-31, 16:00:29](https://news.ycombinator.com/item?id=47589370) - [Securing Elliptic Curve Cryptocurrencies Against Quantum Vulnerabilities [pdf]](https://quantumai.google/static/site-assets/downloads/cryptocurrency-whitepaper.pdf)
* [2026-03-31, 16:00:00](https://slashdot.org/story/26/03/31/0438235/euro-office-wants-to-replace-google-docs-and-microsoft-office?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Euro-Office Wants To Replace Google Docs and Microsoft Office](https://slashdot.org/story/26/03/31/0438235/euro-office-wants-to-replace-google-docs-and-microsoft-office?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-31, 15:44:03](https://lobste.rs/s/g2v6oe/software_you_can_love_2026_tickets_are_on) - [Software You Can Love 2026 tickets are on sale](https://mattnite.net/blog/sycl-2026-tickets-are-here/)
* [2026-03-31, 15:20:11](https://news.ycombinator.com/item?id=47588658) - [Tell HN: Chrome says \&quot;suspicious download\&quot; when trying to download yt-dlp](https://news.ycombinator.com/item?id=47588658)
* [2026-03-31, 15:17:40](https://lobste.rs/s/kp6eap/subprime_technical_debt_crisis) - [The Subprime Technical Debt Crisis](https://blog.happyfellow.dev/the-subprime-technical-debt-crisis/)
* [2026-03-31, 15:01:35](https://news.ycombinator.com/item?id=47588349) - [GitHub Monaspace Case Study](https://lettermatic.com/custom/monaspace-case-study)
* [2026-03-31, 15:00:00](https://yro.slashdot.org/story/26/03/31/0413258/us-paves-way-for-private-assets-to-be-included-in-401k-retirement-plans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Paves Way For Private Assets To Be Included In 401(k) Retirement Plans](https://yro.slashdot.org/story/26/03/31/0413258/us-paves-way-for-private-assets-to-be-included-in-401k-retirement-plans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-31, 14:48:34](https://lobste.rs/s/po4bfv/objections_systemd_age_attestation) - [Objections to systemd age-attestation changes go overboard](https://lwn.net/SubscriberLink/1064706/ba8e449d224f5067/)
* [2026-03-31, 14:32:26](https://news.ycombinator.com/item?id=47587953) - [Good code will still win](https://www.greptile.com/blog/ai-slopware-future)
* [2026-03-31, 14:30:48](https://news.ycombinator.com/item?id=47587935) - [Oracle slashes 30k jobs](https://rollingout.com/2026/03/31/oracle-slashes-30000-jobs-with-a-cold-6/)
* [2026-03-31, 14:25:37](https://news.ycombinator.com/item?id=47587866) - [Microsoft: Copilot is for entertainment purposes only](https://www.microsoft.com/en-us/microsoft-copilot/for-individuals/termsofuse)
* [2026-03-31, 14:08:37](https://news.ycombinator.com/item?id=47587631) - [RubyGems Fracture Incident Report](https://rubycentral.org/news/rubygems-fracture-incident-report/)
* [2026-03-31, 14:08:03](https://lobste.rs/s/jaibqs/rubygems_fracture_incident_report) - [RubyGems Fracture Incident Report](https://rubycentral.org/news/rubygems-fracture-incident-report/)
* [2026-03-31, 13:05:57](https://lobste.rs/s/fbxzte/february_servo_faster_layout_pause) - [February in Servo: faster layout, pause and resume scripts, and more](https://servo.org/blog/2026/03/31/february-in-servo/)
* [2026-03-31, 13:04:30](https://news.ycombinator.com/item?id=47586778) - [The Claude Code Source Leak: fake tools, frustration regexes, undercover mode](https://alex000kim.com/posts/2026-03-31-claude-code-source-leak/)
* [2026-03-31, 12:53:06](https://lobste.rs/s/wlgi4a/data_indexing_golang) - [Data Indexing in Golang](https://hister.org/posts/data-indexing-in-golang)
* [2026-03-31, 12:50:23](https://news.ycombinator.com/item?id=47586614) - [Open source CAD in the browser (Solvespace)](https://solvespace.com/webver.pl)
* [2026-03-31, 12:11:29](https://news.ycombinator.com/item?id=47586176) - [Claude Code users hitting usage limits &apos;way faster than expected&apos;](https://www.theregister.com/2026/03/31/anthropic_claude_code_limits/)
* [2026-03-31, 11:49:03](https://news.ycombinator.com/item?id=47585974) - [Combinators](https://tinyapl.rubenverg.com/docs/info/combinators)
* [2026-03-31, 11:29:40](https://lobste.rs/s/uf8z1b/autoscaling_ci_for_gitea_rust) - [Autoscaling CI for Gitea in Rust](https://rustunit.com/blog/2026/03-30-gitea-ci-autoscaler/)
* [2026-03-31, 11:25:00](https://soylentnews.org/article.pl?sid=26/03/30/0239206&amp;from=rss) - [Court Temporarily Blocks US Government From Labeling Anthropic as a &apos;Supply Chain Risk&apos;](https://soylentnews.org/article.pl?sid=26/03/30/0239206&amp;from=rss)
* [2026-03-31, 11:00:00](https://science.slashdot.org/story/26/03/31/0454242/quadratic-gravity-theory-reshapes-quantum-view-of-big-bang?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Quadratic Gravity Theory Reshapes Quantum View of Big Bang](https://science.slashdot.org/story/26/03/31/0454242/quadratic-gravity-theory-reshapes-quantum-view-of-big-bang?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-31, 10:04:00](https://lobste.rs/s/faygn8/trivially_breaking_confidential_vms) - [Trivially breaking confidential VMs](https://katexochen.aro.bz/posts/badaml/)
* [2026-03-31, 09:00:40](https://news.ycombinator.com/item?id=47584540) - [Claude Code&apos;s source code has been leaked via a map file in their NPM registry](https://twitter.com/Fried_rice/status/2038894956459290963)
* [2026-03-31, 08:21:25](https://lobste.rs/s/czr1hj/jsse_javascript_engine_built_by_agent) - [JSSE: A JavaScript Engine Built by an Agent](https://p.ocmatos.com/blog/jsse-a-javascript-engine-built-by-an-agent.html)
* [2026-03-31, 07:43:21](https://lobste.rs/s/2b2kes/why_your_engineering_team_is_slow_it_s) - [Why Your Engineering Team Is Slow (It&apos;s the Codebase, Not the People)](https://piechowski.io/post/codebase-drag-audit/)
* [2026-03-31, 07:40:18](https://news.ycombinator.com/item?id=47583959) - [Accidentally created my first fork bomb with Claude Code](https://www.droppedasbaby.com/posts/2602-01/)
* [2026-03-31, 07:28:23](https://lobste.rs/s/l57wuc/supply_chain_attack_on_axios) - [Supply Chain Attack on Axios](https://socket.dev/blog/axios-npm-package-compromised)
* [2026-03-31, 07:02:06](https://lobste.rs/s/qmb53b/let_commits_tell_story) - [Let the commits tell the story](https://chrismaiorana.com/git-commits-tell-the-story/)
* [2026-03-31, 07:01:15](https://news.ycombinator.com/item?id=47583712) - [RamAIn (YC W26) Is Hiring](https://www.ycombinator.com/companies/ramain/jobs/jezgwo5-ai-ml-research-engineer)
* [2026-03-31, 07:00:00](https://science.slashdot.org/story/26/03/31/0421252/scientists-shocked-to-find-lab-gloves-may-be-skewing-microplastics-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Shocked To Find Lab Gloves May Be Skewing Microplastics Data](https://science.slashdot.org/story/26/03/31/0421252/scientists-shocked-to-find-lab-gloves-may-be-skewing-microplastics-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-31, 06:58:40](https://lobste.rs/s/ybrnlc/tree_functions_called_during_boot_linux) - [Tree of functions, called during boot of Linux kernel v7.0-rc1](https://zerobin.net/?e19cf19c9589d7f4#x4dHmryKSRUAVekqQC+1bTOA82A5HQid55jyiKXikIA=)
* [2026-03-31, 06:42:00](https://soylentnews.org/article.pl?sid=26/03/30/0233201&amp;from=rss) - [Touchscreens, Long Nails, and an Experimental Polish](https://soylentnews.org/article.pl?sid=26/03/30/0233201&amp;from=rss)
* [2026-03-31, 06:11:10](https://lobste.rs/s/us9noo/cocoa_way_native_macos_wayland) - [cocoa-way: Native macOS Wayland Compositor written in Rust using Smithay](https://github.com/J-x-Z/cocoa-way)
* [2026-03-31, 04:12:15](https://lobste.rs/s/nz2wdr/why_have_supply_chain_attacks_become_near) - [Why have supply chain attacks become a near daily occurrence ?](https://lobste.rs/s/nz2wdr/why_have_supply_chain_attacks_become_near)
* [2026-03-31, 03:40:45](https://news.ycombinator.com/item?id=47582482) - [Ollama is now powered by MLX on Apple Silicon in preview](https://ollama.com/blog/mlx)
* [2026-03-31, 03:30:00](https://developers.slashdot.org/story/26/03/30/2337240/ai-data-centers-can-warm-surrounding-areas-by-up-to-91c?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Data Centers Can Warm Surrounding Areas By Up To 9.1C](https://developers.slashdot.org/story/26/03/30/2337240/ai-data-centers-can-warm-surrounding-areas-by-up-to-91c?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-31, 03:26:52](https://lobste.rs/s/pbx5yu/claude_finds_rce_vim_emacs) - [Claude finds RCE in Vim and Emacs](https://blog.calif.io/p/mad-bugs-vim-vs-emacs-vs-claude)
* [2026-03-31, 02:54:17](https://news.ycombinator.com/item?id=47582220) - [Axios compromised on NPM – Malicious versions drop remote access trojan](https://www.stepsecurity.io/blog/axios-compromised-on-npm-malicious-versions-drop-remote-access-trojan)
* [2026-03-31, 01:56:00](https://soylentnews.org/article.pl?sid=26/03/29/1343212&amp;from=rss) - [Are US-Based VPN Users at Risk of Being Treated as Foreign Surveillance Targets?](https://soylentnews.org/article.pl?sid=26/03/29/1343212&amp;from=rss)
* [2026-03-31, 01:23:34](https://news.ycombinator.com/item?id=47581701) - [Universal Claude.md – cut Claude output tokens](https://github.com/drona23/claude-token-efficient)
* [2026-03-30, 23:00:00](https://tech.slashdot.org/story/26/03/30/2245259/microsoft-plans-to-build-100-native-apps-for-windows-11?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Plans To Build 100% Native Apps For Windows 11](https://tech.slashdot.org/story/26/03/30/2245259/microsoft-plans-to-build-100-native-apps-for-windows-11?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-30, 22:03:01](https://news.ycombinator.com/item?id=47580271) - [South Polar Times](https://www.laphamsquarterly.org/roundtable/south-polar-times)
* [2026-03-30, 22:00:00](https://tech.slashdot.org/story/26/03/30/1950214/after-16-years-and-8-billion-the-militarys-new-gps-software-still-doesnt-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [After 16 Years and $8 Billion, the Military&apos;s New GPS Software Still Doesn&apos;t Work](https://tech.slashdot.org/story/26/03/30/1950214/after-16-years-and-8-billion-the-militarys-new-gps-software-still-doesnt-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-30, 21:12:00](https://soylentnews.org/article.pl?sid=26/03/29/1333211&amp;from=rss) - [Over Half of UK Businesses Have No Idea How Fast They Could Stop AI in a Crisis](https://soylentnews.org/article.pl?sid=26/03/29/1333211&amp;from=rss)
* [2026-03-30, 21:00:00](https://mobile.slashdot.org/story/26/03/30/1940252/samsung-is-bringing-airdrop-style-sharing-to-older-galaxy-devices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Samsung Is Bringing AirDrop-Style Sharing to Older Galaxy Devices](https://mobile.slashdot.org/story/26/03/30/1940252/samsung-is-bringing-airdrop-style-sharing-to-older-galaxy-devices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-30, 20:58:23](https://lobste.rs/s/ahbt4t/rust_s_next_generation_trait_solver) - [Rust&apos;s next-generation trait solver](https://lwn.net/SubscriberLink/1063124/81483612b1c8a493/)
* [2026-03-30, 20:00:00](https://yro.slashdot.org/story/26/03/30/1924246/okcupid-settles-ftc-case-on-alleged-misuse-of-its-users-personal-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OkCupid Settles FTC Case On Alleged Misuse of Its Users&apos; Personal Data](https://yro.slashdot.org/story/26/03/30/1924246/okcupid-settles-ftc-case-on-alleged-misuse-of-its-users-personal-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-30, 19:00:00](https://it.slashdot.org/story/26/03/30/1824254/life-with-ai-causing-human-brain-fry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Life With AI Causing Human Brain &apos;Fry&apos;](https://it.slashdot.org/story/26/03/30/1824254/life-with-ai-causing-human-brain-fry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-30, 18:00:00](https://yro.slashdot.org/story/26/03/30/1815258/judge-allows-bittorrent-seeding-claims-against-meta-despite-lawyers-lame-excuses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Judge Allows BitTorrent Seeding Claims Against Meta, Despite Lawyers &apos;Lame Excuses&apos;](https://yro.slashdot.org/story/26/03/30/1815258/judge-allows-bittorrent-seeding-claims-against-meta-despite-lawyers-lame-excuses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-30, 17:13:50](https://lobste.rs/s/zudaci/joins_are_not_expensive) - [Joins are NOT Expensive](https://www.database-doctor.com/posts/joins-are-not-expensive)
* [2026-03-30, 17:00:00](https://slashdot.org/story/26/03/30/1649230/microsoft-copilot-is-now-injecting-ads-into-pull-requests-on-github?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Copilot Is Now Injecting Ads Into Pull Requests On GitHub](https://slashdot.org/story/26/03/30/1649230/microsoft-copilot-is-now-injecting-ads-into-pull-requests-on-github?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-30, 16:25:00](https://soylentnews.org/article.pl?sid=26/03/29/1329244&amp;from=rss) - [Water Has a Newfound ‘Critical Point’ That May Help Explain its Quirks](https://soylentnews.org/article.pl?sid=26/03/29/1329244&amp;from=rss)
* [2026-03-30, 15:55:11](https://lobste.rs/s/fug4fz/your_job_isn_t_programming) - [Your job isn&apos;t programming](https://codeandcake.dev/posts/2025-12-12-your-job-isnt-programming)
* [2026-03-30, 14:42:27](https://lobste.rs/s/vxqecz/working_software_runs_locally) - [Working software runs locally](https://nickmonad.blog/2026/working-software-runs-locally/)
* [2026-03-30, 13:18:43](https://lobste.rs/s/0o60nu/copilot_edited_ad_into_my_pr) - [copilot edited an ad into my pr](https://notes.zachmanson.com/copilot-edited-an-ad-into-my-pr/)
* [2026-03-30, 11:40:00](https://soylentnews.org/article.pl?sid=26/03/29/1321221&amp;from=rss) - [I Decompiled the White House&apos;s New App](https://soylentnews.org/article.pl?sid=26/03/29/1321221&amp;from=rss)
* [2026-03-30, 07:14:21](https://lobste.rs/s/kqnoi9/okapi_what_if_ripgrep_could_edit) - [Okapi, or “What if ripgrep Could Edit?”](https://kocharhook.com/post/6/)
* [2026-03-30, 06:50:00](https://soylentnews.org/article.pl?sid=26/03/28/0354240&amp;from=rss) - [The Drone Swarm is Coming, and NATO Air Defenses Are Too Expensive to Cope](https://soylentnews.org/article.pl?sid=26/03/28/0354240&amp;from=rss)
* [2026-03-30, 02:07:00](https://soylentnews.org/article.pl?sid=26/03/28/0349246&amp;from=rss) - [Google Unveils TurboQuant, a New AI Memory Compression Algorithm](https://soylentnews.org/article.pl?sid=26/03/28/0349246&amp;from=rss)
* [2026-03-29, 21:26:00](https://soylentnews.org/article.pl?sid=26/03/28/0347204&amp;from=rss) - [A 32-Year-Old Bug Walks Into a Telnet Server](https://soylentnews.org/article.pl?sid=26/03/28/0347204&amp;from=rss)
* [2026-03-29, 16:32:00](https://soylentnews.org/article.pl?sid=26/03/28/0345249&amp;from=rss) - [Google is Now Changing News Headlines – Without Permission](https://soylentnews.org/article.pl?sid=26/03/28/0345249&amp;from=rss)
* [2026-03-29, 11:52:00](https://soylentnews.org/article.pl?sid=26/03/27/0334236&amp;from=rss) - [Pilot Didn&apos;t Mind NASA&apos;s Experimental Plane Doesnt Have a Front Window](https://soylentnews.org/article.pl?sid=26/03/27/0334236&amp;from=rss)
* [2026-03-29, 07:03:00](https://soylentnews.org/article.pl?sid=26/03/27/0325254&amp;from=rss) - [Someone Forked systemd to Strip Out Its Age Verification Support](https://soylentnews.org/article.pl?sid=26/03/27/0325254&amp;from=rss)
* [2026-03-29, 02:18:00](https://soylentnews.org/article.pl?sid=26/03/27/0319208&amp;from=rss) - [Nvidia CEO Jensen Huang Says ‘I Think We&apos;ve Achieved AGI’](https://soylentnews.org/article.pl?sid=26/03/27/0319208&amp;from=rss)
* [2026-03-28, 22:42:23](https://news.ycombinator.com/item?id=47558733) - [From 300KB to 69KB per Token: How LLM Architectures Solve the KV Cache Problem](https://news.future-shock.ai/the-weight-of-remembering/)
* [2026-03-28, 21:34:00](https://soylentnews.org/article.pl?sid=26/03/27/0310204&amp;from=rss) - [Age Checks Creep Into Linux, systemd Locks It in, Developer Defends Himself](https://soylentnews.org/article.pl?sid=26/03/27/0310204&amp;from=rss)
* [2026-03-28, 16:51:00](https://soylentnews.org/article.pl?sid=26/03/26/0657232&amp;from=rss) - [CERN Scientists Burn AI Into Silicon to Stem Data Deluge](https://soylentnews.org/article.pl?sid=26/03/26/0657232&amp;from=rss)
* [2026-03-28, 16:29:28](https://news.ycombinator.com/item?id=47556076) - [What major works of literature were written after age of 85? 75? 65?](https://statmodeling.stat.columbia.edu/2026/03/25/what-major-works-of-literature-were-written-after-age-of-85-75-65/)
* [2026-03-28, 15:08:22](https://news.ycombinator.com/item?id=47555273) - [Audio tapes reveal mass rule-breaking in Milgram&apos;s obedience experiments](https://www.psypost.org/audio-tapes-reveal-mass-rule-breaking-in-milgram-s-obedience-experiments-2026-03-26/)
* [2026-03-28, 14:41:57](https://news.ycombinator.com/item?id=47555035) - [Show HN: Loreline, narrative language transpiled via Haxe: C++/C#/JS/Java/Py/Lua](https://loreline.app/en/docs/technical-overview/)
* [2026-03-28, 12:09:00](https://soylentnews.org/article.pl?sid=26/03/26/0650221&amp;from=rss) - [Elon Musk Wants to Build 50 Times More Chips Than the World Currently Produces, Using &apos;New Physics&apos;](https://soylentnews.org/article.pl?sid=26/03/26/0650221&amp;from=rss)
* [2026-03-28, 07:24:00](https://soylentnews.org/article.pl?sid=26/03/26/0645257&amp;from=rss) - [Australia to Datacenter Operators: BYO Energy, Pay Your Way, Build Green, or Stay Home](https://soylentnews.org/article.pl?sid=26/03/26/0645257&amp;from=rss)
* [2026-03-28, 02:36:00](https://soylentnews.org/article.pl?sid=26/03/26/0644236&amp;from=rss) - [An Uncontrolled Experiment in Atmospheric Chemistry](https://soylentnews.org/article.pl?sid=26/03/26/0644236&amp;from=rss)
* [2026-03-27, 21:50:00](https://soylentnews.org/article.pl?sid=26/03/26/0634229&amp;from=rss) - [Concerns Raised Over Shahed Kamikaze Drone Listings on Alibaba](https://soylentnews.org/article.pl?sid=26/03/26/0634229&amp;from=rss)
* [2026-03-27, 16:03:00](https://soylentnews.org/article.pl?sid=26/03/26/0225217&amp;from=rss) - [Palantir Trial Plugs Into UK Financial Watchdog&apos;s Data Trove](https://soylentnews.org/article.pl?sid=26/03/26/0225217&amp;from=rss)
* [2026-03-27, 12:12:20](https://news.ycombinator.com/item?id=47541746) - [Show HN: Forkrun – NUMA-aware shell parallelizer (50×–400× faster than parallel)](https://github.com/jkool702/forkrun)
* [2026-03-27, 11:20:00](https://soylentnews.org/article.pl?sid=26/03/26/0220234&amp;from=rss) - [Amid Fuel Crunch, Cuban Mechanic Converts Car to Run on Charcoal](https://soylentnews.org/article.pl?sid=26/03/26/0220234&amp;from=rss)
* [2026-03-27, 06:38:00](https://soylentnews.org/article.pl?sid=26/03/26/0219214&amp;from=rss) - [The US Bans All New Foreign-Made Network Routers](https://soylentnews.org/article.pl?sid=26/03/26/0219214&amp;from=rss)
* [2026-03-27, 01:55:00](https://soylentnews.org/article.pl?sid=26/03/26/0217248&amp;from=rss) - [TCL&apos;s German QLED Ban Puts Pressure on TV Brands to be More Honest About QDs](https://soylentnews.org/article.pl?sid=26/03/26/0217248&amp;from=rss)
* [2026-03-27, 01:00:49](https://news.ycombinator.com/item?id=47537875) - [A Primer on Long-Duration Life Support](https://mceglowski.substack.com/p/a-primer-on-long-duration-life-support)
