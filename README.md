# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Technology Advances

* [CUDA Proves Nvidia Is a Software Company](https://hardware.slashdot.org/story/26/05/11/2030223/cuda-proves-nvidia-is-a-software-company?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - An exploration of how Nvidia's CUDA platform has positioned the company as a leader in software innovation.

* [Google Says Hackers Used AI To Create Zero Day Security Flaw For the First Time](https://tech.slashdot.org/story/26/05/11/1640239/google-says-hackers-used-ai-to-create-zero-day-security-flaw-for-the-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Google reveals how AI has been utilized by hackers to create a novel zero-day vulnerability.

* [Show HN: OpenGravity – A zero-install, BYOK vanilla JS clone of Antigravity](https://github.com/ab-613/opengravity) - Introducing OpenGravity, an innovative JavaScript-based solution for creating Antigravity clones without installation.

* [Show HN: E2a – Open-source email gateway for AI agents](https://github.com/Mnexa-AI/e2a) - A new open-source project aims to revolutionize email communication for AI agents through E2a.

* [CUDA-oxide: Nvidia's official Rust to CUDA compiler](https://nvlabs.github.io/cuda-oxide/index.html) - Nvidia introduces CUDA-oxide, a groundbreaking Rust-to-CUDA compiler broadening its software ecosystem.

## Corporate News and Controversies

* [GitLab Announces Workforce Reduction and End of Their CREDIT Values](https://about.gitlab.com/blog/gitlab-act-2/) - GitLab announces a new restructuring plan and terminates its CREDIT values as part of the company's next act.

* [Google Chrome Downloading 4GB AI Model to Your Device Without Asking Re-Downloads When You Delete It](https://soylentnews.org/article.pl?sid=26/05/10/0243229&amp;from=rss) - Reports emerge that Google Chrome silently downloads a 4GB AI model to devices and restores it even after it has been deleted.

* [GM Cutting Hundreds of Salaried IT Workers As It Trims Costs, Evaluates Needs](https://it.slashdot.org/story/26/05/11/1839238/gm-cutting-hundreds-of-salaried-it-workers-as-it-trims-costs-evaluates-needs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - General Motors announces significant IT staff reductions as part of cost-cutting measures.

* [Apple Now Requires Verification For Education Store](https://apple.slashdot.org/story/26/05/11/0443252/apple-now-requires-verification-for-education-store?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Apple tightens access to its Education Store by mandating verification for users.

* [Open Source Project Shuts Down Over Legal Threats from 3D Printer Company Bambu Lab](https://news.slashdot.org/story/26/05/11/0235215/open-source-project-shuts-down-over-legal-threats-from-3d-printer-company-bambu-lab?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Legal risks from Bambu Lab lead to the closure of a popular open-source project.

## Science and Medicine

* [UCLA discovers first stroke rehabilitation drug to repair brain damage (2025)](https://stemcell.ucla.edu/news/ucla-discovers-first-stroke-rehabilitation-drug-repair-brain-damage) - Breakthrough research from UCLA identifies a drug capable of repairing brain damage caused by strokes.

* [After 100 Years, Scientists Uncover Hidden Rule Governing Cosmic Rays](https://soylentnews.org/article.pl?sid=26/05/10/0245229&amp;from=rss) - A century-long scientific mystery about the behavior of cosmic rays has finally been solved.

## Engineering and Innovations

* [How Factorio Syncs A Million Objects over the network](https://www.youtube.com/watch?v=0FHSZ1hani0) - A fascinating dive into how the popular game Factorio manages seamless multiplayer synchronization across networks.

* [Fighting Hyrum's Law in LLVM](https://maskray.me/blog/2026-05-10-fighting-hyrums-law-in-llvm) - Innovations in LLVM to address the challenges brought by Hyrum's Law, emphasizing precision in operational predictions.

* [Fully Preserving Fisher-Price Pixter](https://dmitry.gr/?r=05.Projects&amp;proj=37.%20Pixter) - A creative approach to completely preserving and reviving the functionality of the Fisher-Price Pixter.

## Society and Cultural Discussions

* [Students Boo Commencement Speaker After She Calls AI the 'Next Industrial Revolution'](https://slashdot.org/story/26/05/11/172237/students-boo-commencement-speaker-after-she-calls-ai-the-next-industrial-revolution?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A controversial commencement speech sparks backlash after labeling AI as the 'Next Industrial Revolution.'

* [Software engineering may no longer be a lifetime career](https://www.seangoedecke.com/software-engineering-may-no-longer-be-a-lifetime-career/) - A thought-provoking analysis on the evolving career paths in the software engineering field.

* [Venom and hot peppers offer a key to killing resistant bacteria](https://www.wired.com/story/mexican-science-transforms-scorpion-venom-and-habanero-chile-into-antibiotics-against-resistant-bacteria/) - Mexican researchers explore the potential of scorpion venom and habanero chili in combating antibiotic-resistant bacteria.

* [The anti-minimalist backlash is the bigger story behind Oxygen’s revival](https://filipfila.wordpress.com/2026/05/10/the-anti-minimalist-backlash-is-the-bigger-story-behind-oxygens-revival/) - Analyzing the cultural reaction against the minimalist design movement in the tech industry.

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

* [2026-05-11, 22:00:00](https://hardware.slashdot.org/story/26/05/11/2030223/cuda-proves-nvidia-is-a-software-company?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CUDA Proves Nvidia Is a Software Company](https://hardware.slashdot.org/story/26/05/11/2030223/cuda-proves-nvidia-is-a-software-company?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-11, 21:35:38](https://news.ycombinator.com/item?id=48100970) - [Griffin PowerMate driver for modern macOS](https://github.com/jameslockman/Griffin-PowerMate-Driver)
* [2026-05-11, 21:08:25](https://news.ycombinator.com/item?id=48100706) - [TanStack NPM Packages Compromised](https://github.com/TanStack/router/issues/7383)
* [2026-05-11, 21:00:00](https://it.slashdot.org/story/26/05/11/199232/anthropics-bug-hunting-mythos-was-greatest-marketing-stunt-ever-says-curl-creator?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic&apos;s Bug-Hunting Mythos Was Greatest Marketing Stunt Ever, Says cURL Creator](https://it.slashdot.org/story/26/05/11/199232/anthropics-bug-hunting-mythos-was-greatest-marketing-stunt-ever-says-curl-creator?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-11, 20:53:37](https://news.ycombinator.com/item?id=48100524) - [Interaction Models](https://thinkingmachines.ai/blog/interaction-models/)
* [2026-05-11, 20:51:57](https://news.ycombinator.com/item?id=48100500) - [GitLab Announces Workforce Reduction and End of Their CREDIT Values](https://about.gitlab.com/blog/gitlab-act-2/)
* [2026-05-11, 20:26:17](https://news.ycombinator.com/item?id=48100227) - [Show HN: E2a – Open-source email gateway for AI agents](https://github.com/Mnexa-AI/e2a)
* [2026-05-11, 20:23:25](https://news.ycombinator.com/item?id=48100192) - [Show HN: OpenGravity – A zero-install, BYOK vanilla JS clone of Antigravity](https://github.com/ab-613/opengravity)
* [2026-05-11, 20:00:00](https://it.slashdot.org/story/26/05/11/1839238/gm-cutting-hundreds-of-salaried-it-workers-as-it-trims-costs-evaluates-needs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GM Cutting Hundreds of Salaried IT Workers As It Trims Costs, Evaluates Needs](https://it.slashdot.org/story/26/05/11/1839238/gm-cutting-hundreds-of-salaried-it-workers-as-it-trims-costs-evaluates-needs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-11, 19:49:39](https://news.ycombinator.com/item?id=48099790) - [Linux Terminal Memory Usage](https://gilesorr.com/blog/linux-terminal-memory-usage.html)
* [2026-05-11, 19:33:31](https://news.ycombinator.com/item?id=48099616) - [Library for fast mapping of Java records to native memory](https://github.com/mamba-studio/TypedMemory)
* [2026-05-11, 19:29:34](https://lobste.rs/s/5jdbwv/gram_2_0_0_released) - [Gram 2.0.0 released](https://gram-editor.com/posts/release-2.0-0/)
* [2026-05-11, 19:14:58](https://lobste.rs/s/cnydxv/unusually_practical_update_for_eyg) - [An unusually practical update for EYG](https://eyg.run/news/editions/8)
* [2026-05-11, 19:01:06](https://lobste.rs/s/a87c2i/iwp9_2026) - [iwp9 2026](http://n-gate.com/_iwp9/2026)
* [2026-05-11, 19:00:00](https://it.slashdot.org/story/26/05/11/1834209/iphone-android-rcs-conversations-are-end-to-end-encrypted-in-ios-265?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [iPhone-Android RCS Conversations Are End-To-End Encrypted In iOS 26.5](https://it.slashdot.org/story/26/05/11/1834209/iphone-android-rcs-conversations-are-end-to-end-encrypted-in-ios-265?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-11, 18:30:09](https://lobste.rs/s/wugfx4/fighting_hyrum_s_law_llvm) - [Fighting Hyrum&apos;s Law in LLVM](https://maskray.me/blog/2026-05-10-fighting-hyrums-law-in-llvm)
* [2026-05-11, 18:12:38](https://news.ycombinator.com/item?id=48098537) - [Can someone please explain whether Cloudflare blackmailed Canonical?](https://www.flyingpenguin.com/can-someone-please-explain-whether-cloudflare-blackmailed-canonical/)
* [2026-05-11, 18:00:00](https://slashdot.org/story/26/05/11/172237/students-boo-commencement-speaker-after-she-calls-ai-the-next-industrial-revolution?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Students Boo Commencement Speaker After She Calls AI the &apos;Next Industrial Revolution&apos;](https://slashdot.org/story/26/05/11/172237/students-boo-commencement-speaker-after-she-calls-ai-the-next-industrial-revolution?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-11, 17:53:08](https://news.ycombinator.com/item?id=48098261) - [UCLA discovers first stroke rehabilitation drug to repair brain damage (2025)](https://stemcell.ucla.edu/news/ucla-discovers-first-stroke-rehabilitation-drug-repair-brain-damage)
* [2026-05-11, 17:43:12](https://news.ycombinator.com/item?id=48098122) - [Bild AI (YC W25) Is Hiring Founding Product Engineers](https://bild.ai/jobs)
* [2026-05-11, 17:39:00](https://soylentnews.org/article.pl?sid=26/05/11/0344219&amp;from=rss) - [Lenovo and Dell Are Now Funding the Service That Ships Firmware to Millions of Linux Devices](https://soylentnews.org/article.pl?sid=26/05/11/0344219&amp;from=rss)
* [2026-05-11, 17:00:00](https://tech.slashdot.org/story/26/05/11/1640239/google-says-hackers-used-ai-to-create-zero-day-security-flaw-for-the-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Says Hackers Used AI To Create Zero Day Security Flaw For the First Time](https://tech.slashdot.org/story/26/05/11/1640239/google-says-hackers-used-ai-to-create-zero-day-security-flaw-for-the-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-11, 16:33:14](https://lobste.rs/s/fwutce/respectful_yaml_patching_rust) - [\&quot;Respectful\&quot; YAML patching in Rust](https://verrchu.github.io/blog/2-respectful-yaml-patching-in-rust/)
* [2026-05-11, 16:22:31](https://news.ycombinator.com/item?id=48097078) - [Interfaze: A new model architecture built for high accuracy at scale](https://interfaze.ai/blog/interfaze-a-new-model-architecture-built-for-high-accuracy-at-scale)
* [2026-05-11, 16:00:00](https://apple.slashdot.org/story/26/05/11/0443252/apple-now-requires-verification-for-education-store?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Now Requires Verification For Education Store](https://apple.slashdot.org/story/26/05/11/0443252/apple-now-requires-verification-for-education-store?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-11, 15:55:07](https://news.ycombinator.com/item?id=48096692) - [CUDA-oxide: Nvidia&apos;s official Rust to CUDA compiler](https://nvlabs.github.io/cuda-oxide/index.html)
* [2026-05-11, 15:35:21](https://lobste.rs/s/bojb9a/moving_from_lsp_mode_gnu_emacs_eglot) - [Moving from lsp-mode in GNU Emacs to Eglot](https://utcc.utoronto.ca/~cks/space/blog/programming/EmacsLspModeToEglot)
* [2026-05-11, 15:00:00](https://slashdot.org/story/26/05/11/0437206/anthropic-says-evil-portrayals-of-ai-were-responsible-for-claudes-blackmail-attempts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Says &apos;Evil&apos; Portrayals of AI Were Responsible For Claude&apos;s Blackmail Attempts](https://slashdot.org/story/26/05/11/0437206/anthropic-says-evil-portrayals-of-ai-were-responsible-for-claudes-blackmail-attempts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-11, 14:50:11](https://lobste.rs/s/4guexz/anti_minimalist_backlash_is_bigger_story) - [The anti-minimalist backlash is the bigger story behind Oxygen’s revival](https://filipfila.wordpress.com/2026/05/10/the-anti-minimalist-backlash-is-the-bigger-story-behind-oxygens-revival/)
* [2026-05-11, 14:34:08](https://news.ycombinator.com/item?id=48095550) - [Software engineering may no longer be a lifetime career](https://www.seangoedecke.com/software-engineering-may-no-longer-be-a-lifetime-career/)
* [2026-05-11, 14:12:47](https://lobste.rs/s/g3i12k/running_my_agents_vps) - [Running my agents in a VPS](https://crowdhailer.me/2026-05-11/running-my-agents-in-a-vps/)
* [2026-05-11, 13:31:04](https://lobste.rs/s/wubhf9/what_is_random_generation) - [What is random generation?](https://alperenkeles.com/posts/what-is-random-generation/)
* [2026-05-11, 13:20:14](https://news.ycombinator.com/item?id=48094641) - [Google says criminal hackers used AI to find a major software flaw](https://www.nytimes.com/2026/05/11/us/politics/google-hackers-attack-ai.html)
* [2026-05-11, 12:55:00](https://soylentnews.org/article.pl?sid=26/05/10/0248240&amp;from=rss) - [Survey Shows That 47% Oppose the Construction of New AI Data Centers in Their Neighborhood](https://soylentnews.org/article.pl?sid=26/05/10/0248240&amp;from=rss)
* [2026-05-11, 11:34:59](https://lobste.rs/s/spxvp4/web_feeds_2026_survey) - [Web Feeds in 2026: A Survey](https://mnot.net/blog/2026/feed-survey)
* [2026-05-11, 11:34:00](https://linux.slashdot.org/story/26/05/11/0315223/linux-kernel-starts-retiring-support-for-amds-30-year-old-k5-cpus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux Kernel Starts Retiring Support for AMD&apos;s 30-Year-Old K5 CPUs](https://linux.slashdot.org/story/26/05/11/0315223/linux-kernel-starts-retiring-support-for-amds-30-year-old-k5-cpus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-11, 10:57:56](https://lobste.rs/s/vxf6cq/programmable_whitelist_based_configs) - [Programmable Whitelist-based Configs: Embedding Rye in Go](https://ryelang.org/blog/posts/whitelist-config-with-rye/)
* [2026-05-11, 10:13:04](https://news.ycombinator.com/item?id=48093100) - [Ratty – A terminal emulator with inline 3D graphics](https://ratty-term.org/)
* [2026-05-11, 10:10:49](https://lobste.rs/s/ij94sb/ratty_terminal_emulator_with_inline_3d) - [Ratty: A terminal emulator with inline 3D graphics](https://ratty-term.org/)
* [2026-05-11, 09:13:58](https://lobste.rs/s/bxvyvx/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/bxvyvx/what_are_you_doing_this_week)
* [2026-05-11, 09:09:52](https://lobste.rs/s/jchezk/local_ai_needs_be_norm) - [Local AI Needs to be the Norm](https://unix.foo/posts/local-ai-needs-to-be-norm/)
* [2026-05-11, 09:07:38](https://lobste.rs/s/vokark/im_going_back_writing_code_by_hand) - [Im going back to writing code by hand](https://blog.k10s.dev/im-going-back-to-writing-code-by-hand/)
* [2026-05-11, 08:04:00](https://soylentnews.org/article.pl?sid=26/05/10/0245229&amp;from=rss) - [After 100 Years, Scientists Uncover Hidden Rule Governing Cosmic Rays](https://soylentnews.org/article.pl?sid=26/05/10/0245229&amp;from=rss)
* [2026-05-11, 07:34:00](https://tech.slashdot.org/story/26/05/10/237205/fords-electrified-vehicle-sales-dropped-31-in-april-from-one-year-ago?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ford&apos;s Electrified Vehicle Sales Dropped 31% in April From One Year Ago](https://tech.slashdot.org/story/26/05/10/237205/fords-electrified-vehicle-sales-dropped-31-in-april-from-one-year-ago?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-11, 07:26:54](https://news.ycombinator.com/item?id=48092028) - [Gmail registration now requires scanning a QR code and sending a text message](https://discuss.privacyguides.net/t/google-account-registration-now-requires-sending-an-sms-via-phone-instead-of-receiving-an-sms/36082)
* [2026-05-11, 07:24:32](https://lobste.rs/s/am7evd/mythos_finds_curl_vulnerability) - [Mythos finds a curl vulnerability](https://daniel.haxx.se/blog/2026/05/11/mythos-finds-a-curl-vulnerability/)
* [2026-05-11, 06:54:03](https://lobste.rs/s/jqr0fm/fully_preserving_fisher_price_pixter) - [Fully Preserving Fisher-Price Pixter](https://dmitry.gr/?r=05.Projects&amp;proj=37.%20Pixter)
* [2026-05-11, 05:38:44](https://lobste.rs/s/2r03i7/how_factorio_syncs_million_objects_over) - [How Factorio Syncs A Million Objects over the network](https://www.youtube.com/watch?v=0FHSZ1hani0)
* [2026-05-11, 03:34:00](https://news.slashdot.org/story/26/05/11/0235215/open-source-project-shuts-down-over-legal-threats-from-3d-printer-company-bambu-lab?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Open Source Project Shuts Down Over Legal Threats from 3D Printer Company Bambu Lab](https://news.slashdot.org/story/26/05/11/0235215/open-source-project-shuts-down-over-legal-threats-from-3d-printer-company-bambu-lab?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-11, 03:21:00](https://soylentnews.org/article.pl?sid=26/05/10/0243229&amp;from=rss) - [Google Chrome Downloading 4GB AI Model to Your Device Without Asking Re-Downloads When You Delete It](https://soylentnews.org/article.pl?sid=26/05/10/0243229&amp;from=rss)
* [2026-05-11, 02:43:34](https://news.ycombinator.com/item?id=48090521) - [The greatest shot in television: James Burke had one chance to nail this scene (2024)](https://www.openculture.com/2024/10/the-greatest-shot-in-television.html)
* [2026-05-11, 02:19:28](https://lobste.rs/s/fy4spr/you_need_ai_reduces_maintenance_costs) - [You Need AI That Reduces Maintenance Costs](https://www.jamesshore.com/v2/blog/2026/you-need-ai-that-reduces-your-maintenance-costs)
* [2026-05-11, 01:34:00](https://science.slashdot.org/story/26/05/11/0055243/most-polymarket-users-lose-money-while-top-1-claim-765-of-gains-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Most Polymarket Users Lose Money, While Top 1% Claim 76.5% of Gains, Study Finds](https://science.slashdot.org/story/26/05/11/0055243/most-polymarket-users-lose-money-while-top-1-claim-765-of-gains-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-11, 00:16:00](https://games.slashdot.org/story/26/05/11/0012211/playstation3-emulator-devs-politely-ask-contributors-to-stop-submitting-ai-slop-pull-requests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [PlayStation3 Emulator Devs Politely Ask Contributors to Stop Submitting &apos;AI Slop&apos; Pull Requests ](https://games.slashdot.org/story/26/05/11/0012211/playstation3-emulator-devs-politely-ask-contributors-to-stop-submitting-ai-slop-pull-requests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-10, 23:17:43](https://lobste.rs/s/wnylwv/my_pastebin_clone_vivipara_language) - [My pastebin clone Vivipara and language musings](https://akselmo.dev/posts/vivipara-and-languages/)
* [2026-05-10, 22:39:00](https://tech.slashdot.org/story/26/05/10/224222/honda-patents-a-fake-clutch-for-electric-motorcycles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Honda Patents a Fake Clutch for Electric Motorcycles](https://tech.slashdot.org/story/26/05/10/224222/honda-patents-a-fake-clutch-for-electric-motorcycles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-10, 22:37:00](https://soylentnews.org/article.pl?sid=26/05/09/118251&amp;from=rss) - [Researcher Shows Edge Browser Stores Saved Passwords in Plaintext](https://soylentnews.org/article.pl?sid=26/05/09/118251&amp;from=rss)
* [2026-05-10, 21:39:00](https://tech.slashdot.org/story/26/05/10/2136216/big-tech-is-moving-data-through-the-gulf-using-fiber-optic-cables-alongside-iraqs-oil-pipelines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Big Tech is Moving Data Through the Gulf Using Fiber-Optic Cables Alongside Iraq&apos;s Oil Pipelines](https://tech.slashdot.org/story/26/05/10/2136216/big-tech-is-moving-data-through-the-gulf-using-fiber-optic-cables-alongside-iraqs-oil-pipelines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-10, 21:07:33](https://lobste.rs/s/ni8b3e/childhood_computing) - [Childhood Computing](https://lilysthings.org/blog/childhood-computing/)
* [2026-05-10, 20:07:57](https://lobste.rs/s/njobov/let_go_almost_clojure_written_go) - [let-go: Almost Clojure written in Go](https://github.com/nooga/let-go)
* [2026-05-10, 18:06:47](https://lobste.rs/s/qxkdgl/90_day_disclosure_policy_is_dead) - [the 90 day disclosure policy is dead](https://blog.himanshuanand.com/2026/05/the-90-day-disclosure-policy-is-dead/)
* [2026-05-10, 17:54:02](https://news.ycombinator.com/item?id=48086190) - [Hardware Attestation as Monopoly Enabler](https://grapheneos.social/@GrapheneOS/116550899908879585)
* [2026-05-10, 17:52:00](https://soylentnews.org/article.pl?sid=26/05/09/116230&amp;from=rss) - [Huawei Braces for $12 Billion in AI Chip Revenue Driven by Homegrown AI Model Demand](https://soylentnews.org/article.pl?sid=26/05/09/116230&amp;from=rss)
* [2026-05-10, 17:05:05](https://news.ycombinator.com/item?id=48085685) - [Training an LLM in Swift, Part 1: Taking matrix mult from Gflop/s to Tflop/s](https://www.cocoawithlove.com/blog/matrix-multiplications-swift.html)
* [2026-05-10, 13:12:55](https://lobste.rs/s/q0bvq9/debian_must_ship_reproducible_packages) - [Debian must ship reproducible packages](https://lists.debian.org/debian-devel-announce/2026/05/msg00001.html)
* [2026-05-10, 13:05:00](https://soylentnews.org/article.pl?sid=26/05/09/114230&amp;from=rss) - [The French Administrative Supreme Court Rules Against HADOPI in Favor of La Quadrature Du Net](https://soylentnews.org/article.pl?sid=26/05/09/114230&amp;from=rss)
* [2026-05-10, 11:42:30](https://lobste.rs/s/xb2edj/replacing_3_gb_sqlite_database_with_10_mb) - [Replacing a 3 GB SQLite database with a 10 MB FST (finite state transducer) binary](https://til.andrew-quinn.me/posts/replacing-a-3-gb-sqlite-database-with-a-7-mb-fst-finite-state-trandsucer-binary/)
* [2026-05-10, 08:21:00](https://soylentnews.org/article.pl?sid=26/05/09/1056215&amp;from=rss) - [Apple Agrees to Pay iPhone Owners $250 Million for Not Delivering AI Siri](https://soylentnews.org/article.pl?sid=26/05/09/1056215&amp;from=rss)
* [2026-05-10, 03:33:00](https://soylentnews.org/article.pl?sid=26/05/09/1054212&amp;from=rss) - [Chocolate Factory Strikes Again (and Again, and Again, and ...)](https://soylentnews.org/article.pl?sid=26/05/09/1054212&amp;from=rss)
* [2026-05-10, 02:06:19](https://news.ycombinator.com/item?id=48080316) - [Silverback Imfura took a chance, and ended up alone](https://gorillafund.org/mountain-gorillas/silverback-imfura-took-a-chance-and-ended-up-alone/)
* [2026-05-09, 22:51:00](https://soylentnews.org/article.pl?sid=26/05/09/1052226&amp;from=rss) - [Meta Is Dying](https://soylentnews.org/article.pl?sid=26/05/09/1052226&amp;from=rss)
* [2026-05-09, 18:03:00](https://soylentnews.org/article.pl?sid=26/05/09/0813214&amp;from=rss) - [Russia&apos;s Censor Body, Roskomnadzor, Wants to Block 92% of VPN Apps by 2030](https://soylentnews.org/article.pl?sid=26/05/09/0813214&amp;from=rss)
* [2026-05-09, 13:19:00](https://soylentnews.org/article.pl?sid=26/05/08/1125252&amp;from=rss) - [This New “Sound Laser” Could Measure Gravity With Stunning Precision](https://soylentnews.org/article.pl?sid=26/05/08/1125252&amp;from=rss)
* [2026-05-09, 08:34:00](https://soylentnews.org/article.pl?sid=26/05/08/1121205&amp;from=rss) - [Trump Administration Considers Mandatory Pre-Release Vetting of AI Models](https://soylentnews.org/article.pl?sid=26/05/08/1121205&amp;from=rss)
* [2026-05-09, 08:26:57](https://news.ycombinator.com/item?id=48073121) - [Counting Fast in Erlang with:counters and:atomics](https://andrealeopardi.com/posts/erlang-counters-and-atomics/)
* [2026-05-09, 03:48:00](https://soylentnews.org/article.pl?sid=26/05/08/1111240&amp;from=rss) - [Widely Used Daemon Tools Disk App Backdoored in Monthlong Supply-Chain Attack](https://soylentnews.org/article.pl?sid=26/05/08/1111240&amp;from=rss)
* [2026-05-09, 00:42:22](https://news.ycombinator.com/item?id=48070571) - [Venom and hot peppers offer a key to killing resistant bacteria](https://www.wired.com/story/mexican-science-transforms-scorpion-venom-and-habanero-chile-into-antibiotics-against-resistant-bacteria/)
* [2026-05-08, 23:03:00](https://soylentnews.org/article.pl?sid=26/05/08/113258&amp;from=rss) - [Mozilla Says 271 Vulnerabilities Found by Mythos Have “Almost No False Positives”](https://soylentnews.org/article.pl?sid=26/05/08/113258&amp;from=rss)
* [2026-05-08, 22:47:06](https://news.ycombinator.com/item?id=48069685) - [The Boston library where you still can borrow a giant puppet](https://binj.news/2026/05/06/the-boston-library-where-you-still-can-borrow-a-giant-puppet/)
* [2026-05-08, 18:14:00](https://soylentnews.org/article.pl?sid=26/05/07/0154202&amp;from=rss) - [Starbucks CEO Defends $9 Coffee: ‘A Really Affordable Premium Experience’](https://soylentnews.org/article.pl?sid=26/05/07/0154202&amp;from=rss)
* [2026-05-08, 16:34:45](https://news.ycombinator.com/item?id=48065429) - [AMÁLIA and the future of European Portuguese LLMs](https://duarteocarmo.com/blog/amalia-and-the-future-of-european-portuguese-llms)
* [2026-05-08, 13:39:26](https://news.ycombinator.com/item?id=48062977) - [Building a web server in aarch64 assembly to give my life (a lack of) meaning](https://imtomt.github.io/ymawky/)
* [2026-05-08, 13:35:00](https://soylentnews.org/article.pl?sid=26/05/07/0152233&amp;from=rss) - [Astronomers Pin Down the Origins of a Planetary Odd Couple](https://soylentnews.org/article.pl?sid=26/05/07/0152233&amp;from=rss)
* [2026-05-08, 08:49:00](https://soylentnews.org/article.pl?sid=26/05/07/0149246&amp;from=rss) - [Nissan Redirects Mississippi Jobs To Trucks, SUVs Now](https://soylentnews.org/article.pl?sid=26/05/07/0149246&amp;from=rss)
* [2026-05-08, 08:00:44](https://news.ycombinator.com/item?id=48060077) - [Nullsoft, 1997-2004 (2004)](https://slate.com/technology/2004/11/the-death-of-the-last-maverick-tech-company.html)
* [2026-05-08, 07:26:37](https://news.ycombinator.com/item?id=48059831) - [I hate soldering existentially](https://user8.bearblog.dev/rant/)
* [2026-05-08, 03:57:00](https://soylentnews.org/article.pl?sid=26/05/07/0148227&amp;from=rss) - [ Making Wooden Skis by Hand](https://soylentnews.org/article.pl?sid=26/05/07/0148227&amp;from=rss)
* [2026-05-07, 23:14:00](https://soylentnews.org/article.pl?sid=26/05/06/1722250&amp;from=rss) - [Taiwan Cops Say Student&apos;s Radio Kit Brought Bullet Trains to a Standstill](https://soylentnews.org/article.pl?sid=26/05/06/1722250&amp;from=rss)
* [2026-05-07, 18:29:00](https://soylentnews.org/article.pl?sid=26/05/06/1720223&amp;from=rss) - [The RAM Crisis Isn&apos;t Going Anywhere: Micron CEO Warns AI Will Need More Memory](https://soylentnews.org/article.pl?sid=26/05/06/1720223&amp;from=rss)
* [2026-05-07, 16:43:11](https://news.ycombinator.com/item?id=48051555) - [The rise and fall of snake oil](https://www.historytoday.com/archive/history-matters/rise-and-fall-snake-oil)
* [2026-05-07, 13:43:00](https://soylentnews.org/article.pl?sid=26/05/06/1719213&amp;from=rss) - [The US Just Found Enough Lithium To Rival China - Now Comes The Hard Part](https://soylentnews.org/article.pl?sid=26/05/06/1719213&amp;from=rss)
* [2026-05-07, 13:42:15](https://news.ycombinator.com/item?id=48049343) - [From Buffon&apos;s Needle to Buffon&apos;s Noodle](https://mbmccoy.dev/posts/buffons-noodle/)
* [2026-05-07, 09:00:00](https://soylentnews.org/article.pl?sid=26/05/06/045204&amp;from=rss) - [Employees Are Now More Dangerous to Their Company Than External Hackers](https://soylentnews.org/article.pl?sid=26/05/06/045204&amp;from=rss)
* [2026-05-07, 04:13:00](https://soylentnews.org/article.pl?sid=26/05/06/0356228&amp;from=rss) - [Utah Will Ban VPN Use to Circumvent Age Verification](https://soylentnews.org/article.pl?sid=26/05/06/0356228&amp;from=rss)
