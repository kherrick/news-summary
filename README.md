# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Developments

* [Migrating The Zig Organization from GitHub to Codeberg](https://ziglang.org/news/migrating-from-github-to-codeberg/) - An exploration into moving a major software project off GitHub to an alternative platform.

* [DIY NAS: 2026 Edition](https://blog.briancmoses.com/2025/11/diy-nas-2026-edition.html) - Comprehensive guide to building a DIY NAS for the coming year.

* [Lowtype: Elegant types in Ruby](https://codeberg.org/Iow/type) - An introduction to 'Lowtype,' promoting efficient types within Ruby programming.

* [Unbrickable Pledge](https://usetrmnl.com/blog/the-unbrickable-pledge) - Advocating software and hardware development that avoids bricking user devices.

* [MkSlides – Markdown to slides with a similar workflow to MkDocs](https://github.com/MartenBE/mkslides) - A handy tool for generating slides from markdown.

* [Bringing Emacs Support to OCaml's LSP Server with ocaml-eglot](https://tarides.com/blog/2025-11-27-bringing-emacs-support-to-ocaml-s-lsp-server-with-ocaml-eglot/) - Enhancing Emacs compatibility for OCaml developers.

* [Facebook CEO urges replacing your boss](https://replaceyourboss.ai/) - An AI-driven pitch for automating workplace leadership.

* [Graph Algorithms in Rayon](https://davidlattimore.github.io/posts/2025/11/27/graph-algorithms-in-rayon.html) - Insight on leveraging parallelism in graph algorithms through Rayon.

* [llmfuse: a self-compressing filesystem backed by an LLM](https://grohan.co/2025/11/25/llmfuse/) - A discussion about how large language models can back a unique filesystem design.

## Science and Research Insights

* [Face Transplants Promised Hope. Patients Were Put Through the Unthinkable](https://science.slashdot.org/story/25/11/27/202228/face-transplants-promised-hope-patients-were-put-through-the-unthinkable?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Details the dire challenges faced by recipients of face transplants.

* [The VanDersarl Blériot: a 1911 airplane homebuilt by teenage brothers](https://www.historynet.com/vandersarl-bleriot/) - A fascinating historical piece on aviation by young enthusiasts.

* [AI Can Technically Perform 12% of US Labor Market's Wage Value, MIT Simulation Finds](https://news.slashdot.org/story/25/11/27/0752210/ai-can-technically-perform-12-of-us-labor-markets-wage-value-mit-simulation-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - New MIT findings reveal economic impacts of AI on US labor markets.

* [China's Giant Underground Neutrino Observatory Releases Its First Results](https://science.slashdot.org/story/25/11/26/2337257/chinas-giant-underground-neutrino-observatory-releases-its-first-results?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Promising outcomes from an ambitious scientific experiment.

## Society, Policy, and Impacts

* [UK To Tax Electric Cars by the Mile Starting 2028](https://news.slashdot.org/story/25/11/27/1332209/uk-to-tax-electric-cars-by-the-mile-starting-2028?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A controversial new policy aimed at electric vehicle users.

* [Defense Contractors Lobby To Kill Military Right-to-Repair, Push Pay-Per-Use Data Model](https://tech.slashdot.org/story/25/11/27/095202/defense-contractors-lobby-to-kill-military-right-to-repair-push-pay-per-use-data-model?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The battle over military repair rights intensifies.

* [OpenAI Says Dead Teen Violated TOS When He Used ChatGPT To Plan Suicide](https://yro.slashdot.org/story/25/11/26/2012215/openai-says-dead-teen-violated-tos-when-he-used-chatgpt-to-plan-suicide?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Tragic crossroads of AI usage and social accountability.

* [Apple Asks Indian Court to Block Antitrust Law Allowing $38 Billion Fine](https://yro.slashdot.org/story/25/11/26/2352256/apple-asks-indian-court-to-block-antitrust-law-allowing-38-billion-fine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Apple's legal response to major fines and regulations abroad.

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

* [2025-11-27, 21:00:00](https://slashdot.org/story/25/11/27/2013252/australia-spent-62-million-to-update-its-weather-web-site-and-made-it-worse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Australia Spent $62 Million To Update Its Weather Web Site and Made It Worse](https://slashdot.org/story/25/11/27/2013252/australia-spent-62-million-to-update-its-weather-web-site-and-made-it-worse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-27, 20:57:47](https://lobste.rs/s/24vb6t/setting_secrets_env_vars) - [Setting secrets in env vars](https://hugovk.dev/blog/2025/secrets-in-env-vars/)
* [2025-11-27, 20:37:51](https://news.ycombinator.com/item?id=46073033) - [Underrated reasons to be thankful V](https://dynomight.net/thanks-5/)
* [2025-11-27, 20:30:43](https://lobste.rs/s/uiueai/bending_emacs_episode_6_overlays) - [Bending Emacs - Episode 6: Overlays](https://xenodium.com/bending-emacs-episode-6-overlays)
* [2025-11-27, 20:30:21](https://news.ycombinator.com/item?id=46072988) - [LinkedIn is loud, and corporate is hell](https://ramones.dev/posts/linkedin-is-loud/)
* [2025-11-27, 20:03:25](https://news.ycombinator.com/item?id=46072786) - [DeepSeekMath-V2: Towards Self-Verifiable Mathematical Reasoning [pdf]](https://github.com/deepseek-ai/DeepSeek-Math-V2/blob/main/DeepSeekMath_V2.pdf)
* [2025-11-27, 20:00:00](https://science.slashdot.org/story/25/11/27/202228/face-transplants-promised-hope-patients-were-put-through-the-unthinkable?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Face Transplants Promised Hope. Patients Were Put Through the Unthinkable](https://science.slashdot.org/story/25/11/27/202228/face-transplants-promised-hope-patients-were-put-through-the-unthinkable?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-27, 18:37:41](https://news.ycombinator.com/item?id=46072002) - [AI CEO – Replace your boss before they replace you](https://replaceyourboss.ai/)
* [2025-11-27, 18:36:20](https://lobste.rs/s/7ketee/same_day_upstream_linux_support_for) - [Same-day upstream Linux support for Snapdragon 8 Elite Gen 5 mobile platform](https://www.qualcomm.com/developer/blog/2025/10/same-day-snapdragon-8-elite-gen-5-upstream-linux-support)
* [2025-11-27, 18:02:00](https://news.slashdot.org/story/25/11/27/1332209/uk-to-tax-electric-cars-by-the-mile-starting-2028?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK To Tax Electric Cars by the Mile Starting 2028](https://news.slashdot.org/story/25/11/27/1332209/uk-to-tax-electric-cars-by-the-mile-starting-2028?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-27, 17:44:55](https://lobste.rs/s/ipk4lg/pointer_pop_quiz) - [Pointer pop quiz](https://dave.cheney.net/2025/11/27/pointer-pop-quiz)
* [2025-11-27, 17:41:20](https://lobste.rs/s/zzy9fy/electron_vs_tauri) - [Electron vs. Tauri](https://www.dolthub.com/blog/2025-11-13-electron-vs-tauri/)
* [2025-11-27, 17:30:27](https://lobste.rs/s/1j7cwz/comparing_obelisk_with_dbos) - [Comparing Obelisk with DBOS](https://obeli.sk/blog/comparing-dbos-part-1/)
* [2025-11-27, 17:13:00](https://lobste.rs/s/e0tujy/input_stack_on_linux_end_end_architecture) - [The Input Stack on Linux An End-To-End Architecture Overview](https://venam.net/blog/unix/2025/11/27/input_devices_linux.html)
* [2025-11-27, 17:01:00](https://mobile.slashdot.org/story/25/11/27/1255245/androids-new-dual-band-hotspot-mode-pairs-6-ghz-speed-with-24-ghz-compatibility?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Android&apos;s New Dual-Band Hotspot Mode Pairs 6 GHz Speed With 2.4 GHz Compatibility](https://mobile.slashdot.org/story/25/11/27/1255245/androids-new-dual-band-hotspot-mode-pairs-6-ghz-speed-with-24-ghz-compatibility?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-27, 16:55:30](https://news.ycombinator.com/item?id=46071030) - [The input stack on Linux: An end-to-end architecture overview](https://venam.net/blog/unix/2025/11/27/input_devices_linux.html)
* [2025-11-27, 16:42:40](https://news.ycombinator.com/item?id=46070915) - [Pakistan says rooftop solar output to exceed grid demand in some hubs next year](https://www.reuters.com/sustainability/boards-policy-regulation/pakistan-says-rooftop-solar-output-exceed-grid-demand-some-hubs-next-year-2025-11-22/)
* [2025-11-27, 16:38:35](https://news.ycombinator.com/item?id=46070868) - [The VanDersarl Blériot: a 1911 airplane homebuilt by teenage brothers](https://www.historynet.com/vandersarl-bleriot/)
* [2025-11-27, 16:19:03](https://news.ycombinator.com/item?id=46070668) - [Same-day upstream Linux support for Snapdragon 8 Elite Gen 5](https://www.qualcomm.com/developer/blog/2025/10/same-day-snapdragon-8-elite-gen-5-upstream-linux-support)
* [2025-11-27, 16:01:00](https://tech.slashdot.org/story/25/11/27/095202/defense-contractors-lobby-to-kill-military-right-to-repair-push-pay-per-use-data-model?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Defense Contractors Lobby To Kill Military Right-to-Repair, Push Pay-Per-Use Data Model](https://tech.slashdot.org/story/25/11/27/095202/defense-contractors-lobby-to-kill-military-right-to-repair-push-pay-per-use-data-model?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-27, 15:01:00](https://science.slashdot.org/story/25/11/27/0856219/nasa-reduces-flights-on-boeings-starliner-after-botched-astronaut-mission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Reduces Flights on Boeing&apos;s Starliner After Botched Astronaut Mission](https://science.slashdot.org/story/25/11/27/0856219/nasa-reduces-flights-on-boeings-starliner-after-botched-astronaut-mission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-27, 14:53:22](https://lobste.rs/s/iro8m3/lowtype_elegant_types_ruby) - [Lowtype: Elegant types in Ruby](https://codeberg.org/Iow/type)
* [2025-11-27, 14:26:35](https://news.ycombinator.com/item?id=46069556) - [Show HN: Runprompt – run .prompt files from the command line](https://github.com/chr15m/runprompt)
* [2025-11-27, 14:00:00](https://news.slashdot.org/story/25/11/27/0752210/ai-can-technically-perform-12-of-us-labor-markets-wage-value-mit-simulation-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Can Technically Perform 12% of US Labor Market&apos;s Wage Value, MIT Simulation Finds](https://news.slashdot.org/story/25/11/27/0752210/ai-can-technically-perform-12-of-us-labor-markets-wage-value-mit-simulation-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-27, 13:40:20](https://lobste.rs/s/ju12fl/bringing_emacs_support_ocaml_s_lsp_server) - [Bringing Emacs Support to OCaml&apos;s LSP Server with ocaml-eglot](https://tarides.com/blog/2025-11-27-bringing-emacs-support-to-ocaml-s-lsp-server-with-ocaml-eglot/)
* [2025-11-27, 13:29:28](https://lobste.rs/s/cbcksu/unbrickable_pledge) - [The Unbrickable Pledge](https://usetrmnl.com/blog/the-unbrickable-pledge)
* [2025-11-27, 13:28:34](https://news.ycombinator.com/item?id=46069048) - [TPUs vs. GPUs and why Google is positioned to win AI race in the long term](https://www.uncoveralpha.com/p/the-chip-made-for-the-ai-inference)
* [2025-11-27, 13:00:17](https://news.ycombinator.com/item?id=46068847) - [Show HN: MkSlides – Markdown to slides with a similar workflow to MkDocs](https://github.com/MartenBE/mkslides)
* [2025-11-27, 13:00:00](https://news.slashdot.org/story/25/11/26/2344228/uk-police-to-trial-ai-agents-responding-to-non-emergency-calls?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Police To Trial AI &apos;Agents&apos; Responding To Non-Emergency Calls](https://news.slashdot.org/story/25/11/26/2344228/uk-police-to-trial-ai-agents-responding-to-non-emergency-calls?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-27, 12:48:12](https://news.ycombinator.com/item?id=46068777) - [The current state of the theory that GPL propagates to AI models](https://shujisado.org/2025/11/27/gpl-propagates-to-ai-models-trained-on-gpl-code/)
* [2025-11-27, 12:41:22](https://lobste.rs/s/bfgdyg/on_idempotency_keys) - [On Idempotency Keys](https://www.morling.dev/blog/on-idempotency-keys/)
* [2025-11-27, 10:58:39](https://lobste.rs/s/vyqtkq/it_s_hard_build_oscillator) - [It&apos;s hard to build an oscillator](https://lcamtuf.substack.com/p/its-hard-to-build-an-oscillator)
* [2025-11-27, 10:00:00](https://yro.slashdot.org/story/25/11/26/2352256/apple-asks-indian-court-to-block-antitrust-law-allowing-38-billion-fine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Asks Indian Court to Block Antitrust Law Allowing $38 Billion Fine](https://yro.slashdot.org/story/25/11/26/2352256/apple-asks-indian-court-to-block-antitrust-law-allowing-38-billion-fine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-27, 09:39:17](https://lobste.rs/s/qbu8jl/lazy_linearity_for_core_functional) - [Lazy Linearity for a Core Functional Language](https://alt-romes.github.io/posts/2025-11-26-lazy-linearity-popl26.html)
* [2025-11-27, 07:31:24](https://news.ycombinator.com/item?id=46066695) - [Ray Marching Soft Shadows in 2D (2020)](https://www.rykap.com/2020/09/23/distance-fields/)
* [2025-11-27, 07:02:40](https://news.ycombinator.com/item?id=46066522) - [Mixpanel Security Breach](https://mixpanel.com/blog/sms-security-incident/)
* [2025-11-27, 07:00:00](https://science.slashdot.org/story/25/11/26/2337257/chinas-giant-underground-neutrino-observatory-releases-its-first-results?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s Giant Underground Neutrino Observatory Releases Its First Results](https://science.slashdot.org/story/25/11/26/2337257/chinas-giant-underground-neutrino-observatory-releases-its-first-results?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-27, 06:17:37](https://news.ycombinator.com/item?id=46066280) - [Linux Kernel Explorer](https://reverser.dev/linux-kernel-explorer)
* [2025-11-27, 05:21:16](https://news.ycombinator.com/item?id=46065955) - [Tell HN: Happy Thanksgiving](https://news.ycombinator.com/item?id=46065955)
* [2025-11-27, 04:55:57](https://news.ycombinator.com/item?id=46065817) - [Music eases surgery and speeds recovery, study finds](https://www.bbc.com/news/articles/c231dv9zpz3o)
* [2025-11-27, 04:34:56](https://news.ycombinator.com/item?id=46065698) - [Coq: The World&apos;s Best Macro Assembler? (2013) [pdf]](https://nickbenton.name/coqasm.pdf)
* [2025-11-27, 04:19:36](https://lobste.rs/s/zn9jeu/generalized_worley_noise) - [Generalized Worley Noise](https://ianthehenry.com/posts/generalized-worley-noise/)
* [2025-11-27, 03:35:31](https://lobste.rs/s/xyffww/optimizing_ray_tracing_haskell_2020) - [Optimizing Ray Tracing in Haskell (2020)](https://medium.com/@s.nawaz/optimizing-ray-tracing-in-haskell-3dc412fff20a)
* [2025-11-27, 03:30:00](https://hardware.slashdot.org/story/25/11/26/2330218/mexico-unveils-plans-to-build-most-powerful-supercomputer-in-latin-america?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mexico Unveils Plans To Build Most Powerful Supercomputer In Latin America](https://hardware.slashdot.org/story/25/11/26/2330218/mexico-unveils-plans-to-build-most-powerful-supercomputer-in-latin-america?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-27, 03:26:00](https://soylentnews.org/article.pl?sid=25/11/25/157251&amp;from=rss) - [Bitcoin Mining Needs Regulatory Legislation](https://soylentnews.org/article.pl?sid=25/11/25/157251&amp;from=rss)
* [2025-11-27, 02:54:23](https://news.ycombinator.com/item?id=46065034) - [DIY NAS: 2026 Edition](https://blog.briancmoses.com/2025/11/diy-nas-2026-edition.html)
* [2025-11-27, 02:14:36](https://news.ycombinator.com/item?id=46064757) - [Penpot: The Open-Source Figma](https://github.com/penpot/penpot)
* [2025-11-27, 02:02:00](https://tech.slashdot.org/story/25/11/26/2326203/amazon-faces-faa-probe-after-delivery-drone-snaps-internet-cable-in-texas?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Faces FAA Probe After Delivery Drone Snaps Internet Cable In Texas](https://tech.slashdot.org/story/25/11/26/2326203/amazon-faces-faa-probe-after-delivery-drone-snaps-internet-cable-in-texas?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-27, 01:47:36](https://lobste.rs/s/tvkddz/migrating_zig_organization_from_github) - [Migrating The Zig Organization from GitHub to Codeberg](https://ziglang.org/news/migrating-from-github-to-codeberg/)
* [2025-11-27, 01:34:43](https://lobste.rs/s/ukbacd/graph_algorithms_rayon) - [Graph Algorithms in Rayon](https://davidlattimore.github.io/posts/2025/11/27/graph-algorithms-in-rayon.html)
* [2025-11-27, 01:25:00](https://yro.slashdot.org/story/25/11/26/227244/greek-cybercrime-unit-shuts-down-iptv-pirates-68-end-users-face-fines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Greek Cybercrime Unit Shuts Down IPTV Pirates, 68 End Users Face Fines](https://yro.slashdot.org/story/25/11/26/227244/greek-cybercrime-unit-shuts-down-iptv-pirates-68-end-users-face-fines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-27, 00:45:00](https://apple.slashdot.org/story/25/11/26/2155234/googles-airdrop-support-for-pixel-10-likely-exists-because-of-eus-apple-ruling?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s AirDrop Support For Pixel 10 Likely Exists Because of EU&apos;s Apple Ruling](https://apple.slashdot.org/story/25/11/26/2155234/googles-airdrop-support-for-pixel-10-likely-exists-because-of-eus-apple-ruling?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-27, 00:02:00](https://yro.slashdot.org/story/25/11/26/2012215/openai-says-dead-teen-violated-tos-when-he-used-chatgpt-to-plan-suicide?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Says Dead Teen Violated TOS When He Used ChatGPT To Plan Suicide](https://yro.slashdot.org/story/25/11/26/2012215/openai-says-dead-teen-violated-tos-when-he-used-chatgpt-to-plan-suicide?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-26, 22:43:00](https://soylentnews.org/article.pl?sid=25/11/24/234230&amp;from=rss) - [The Escape Room Challenge: How One Person&apos;s Narcissism Can Undermine a Whole Team](https://soylentnews.org/article.pl?sid=25/11/24/234230&amp;from=rss)
* [2025-11-26, 22:00:48](https://news.ycombinator.com/item?id=46062855) - [Why Strong Consistency?](https://brooker.co.za/blog/2025/11/18/consistency.html)
* [2025-11-26, 21:53:27](https://lobste.rs/s/ovfhqr/chat_control_eu_lawmakers_finally_agree) - [Chat Control: EU lawmakers finally agree on the voluntary scanning of your private chats](https://www.techradar.com/vpn/vpn-privacy-security/chat-control-eu-lawmakers-finally-agree-on-the-voluntary-scanning-of-your-private-chats)
* [2025-11-26, 20:17:44](https://news.ycombinator.com/item?id=46061871) - [Inspired by Spider-Man, scientists recreate web-slinging technology](https://scienceclock.com/inspired-by-spider-man-scientists-recreate-web-slinging-technology/)
* [2025-11-26, 18:41:40](https://lobste.rs/s/evzudd/very_fast_64_bit_date_algorithm_30_40) - [A Very Fast 64–Bit Date Algorithm: 30-40% faster](https://www.benjoffe.com/fast-date-64)
* [2025-11-26, 18:34:41](https://lobste.rs/s/7fsqgl/ulid_only_identifier_you_should_use) - [ULID - the ONLY identifier you should use?](https://www.youtube.com/watch?v=otW7nLd8P04)
* [2025-11-26, 17:55:00](https://soylentnews.org/article.pl?sid=25/11/24/232236&amp;from=rss) - [Mozilla Resolves 21-Year-Old Bug, Adds Full XDG Directory Support](https://soylentnews.org/article.pl?sid=25/11/24/232236&amp;from=rss)
* [2025-11-26, 15:59:00](https://lobste.rs/s/vf6xi8/llmfuse_self_compressing_filesystem) - [llmfuse: a self-compressing filesystem backed by an LLM](https://grohan.co/2025/11/25/llmfuse/)
* [2025-11-26, 15:40:14](https://news.ycombinator.com/item?id=46058471) - [Feedback doesn&apos;t scale](https://another.rodeo/feedback/)
* [2025-11-26, 14:16:17](https://lobste.rs/s/iwzqi3/kde_going_all_on_wayland_future) - [KDE going all-in on a Wayland future](https://blogs.kde.org/2025/11/26/going-all-in-on-a-wayland-future/)
* [2025-11-26, 13:51:07](https://lobste.rs/s/ilnv7s/building_64_bit_os_from_scratch_with) - [Building a 64-bit OS from Scratch with Claude Code](https://isene.org/2025/11/SimplicityOS.html)
* [2025-11-26, 13:36:19](https://news.ycombinator.com/item?id=46057266) - [Memories of .us](https://computer.rip/2025-11-11-dot-us.html)
* [2025-11-26, 13:11:00](https://soylentnews.org/article.pl?sid=25/11/24/230252&amp;from=rss) - [The Reshoring Initiative - Real Reasons to Bring Jobs Back to USA From Asia](https://soylentnews.org/article.pl?sid=25/11/24/230252&amp;from=rss)
* [2025-11-26, 09:24:06](https://lobste.rs/s/jucg4w/i_don_t_care_how_well_your_ai_works) - [I don&apos;t care how well your \&quot;AI\&quot; works](https://fokus.cool/2025/11/25/i-dont-care-how-well-your-ai-works.html)
* [2025-11-26, 08:24:00](https://soylentnews.org/article.pl?sid=25/11/24/2255253&amp;from=rss) - [Zork I, II, and III go Open Source](https://soylentnews.org/article.pl?sid=25/11/24/2255253&amp;from=rss)
* [2025-11-26, 03:41:00](https://soylentnews.org/article.pl?sid=25/11/24/2253234&amp;from=rss) - [HP and Dell Disable HEVC Support Built Into Their Laptops’ CPUs](https://soylentnews.org/article.pl?sid=25/11/24/2253234&amp;from=rss)
* [2025-11-25, 22:57:00](https://soylentnews.org/article.pl?sid=25/11/24/2248217&amp;from=rss) - [Is Matrix Multiplication Ugly?](https://soylentnews.org/article.pl?sid=25/11/24/2248217&amp;from=rss)
* [2025-11-25, 19:26:40](https://lobste.rs/s/ykoj5k/announcing_unison_1_0) - [Announcing Unison 1.0](https://www.unison-lang.org/unison-1-0/)
* [2025-11-25, 18:12:00](https://soylentnews.org/article.pl?sid=25/11/23/2227204&amp;from=rss) - [In 1982, a Physics Joke Gone Wrong Sparked the Invention of the Emoticon](https://soylentnews.org/article.pl?sid=25/11/23/2227204&amp;from=rss)
* [2025-11-25, 13:28:00](https://soylentnews.org/article.pl?sid=25/11/23/2222225&amp;from=rss) - [Scientists Now Know That Bees Can Process Time, a First in Insects](https://soylentnews.org/article.pl?sid=25/11/23/2222225&amp;from=rss)
* [2025-11-25, 08:41:00](https://soylentnews.org/article.pl?sid=25/11/23/2216237&amp;from=rss) - [I Set a Trap to Catch My Students Cheating With AI and the Results Were Shocking](https://soylentnews.org/article.pl?sid=25/11/23/2216237&amp;from=rss)
* [2025-11-25, 04:00:00](https://soylentnews.org/article.pl?sid=25/11/23/2211220&amp;from=rss) - [Researchers Find Simple Way to Destroy PFAS on Activated Carbon](https://soylentnews.org/article.pl?sid=25/11/23/2211220&amp;from=rss)
* [2025-11-24, 23:16:00](https://soylentnews.org/article.pl?sid=25/11/23/1458223&amp;from=rss) - [Ring&apos;s New Feature Turns Your Doorbell Into a Biometric Spy](https://soylentnews.org/article.pl?sid=25/11/23/1458223&amp;from=rss)
* [2025-11-24, 20:48:18](https://news.ycombinator.com/item?id=46039106) - [Interactive λ-Reduction](https://deltanets.org/)
* [2025-11-24, 18:27:00](https://soylentnews.org/article.pl?sid=25/11/23/1349258&amp;from=rss) - [Thieves Want Your iPhone, Not Your Android](https://soylentnews.org/article.pl?sid=25/11/23/1349258&amp;from=rss)
* [2025-11-24, 13:42:00](https://soylentnews.org/article.pl?sid=25/11/23/0254204&amp;from=rss) - [Magician Forgets Password to His Own Hand After RFID Chip Implant](https://soylentnews.org/article.pl?sid=25/11/23/0254204&amp;from=rss)
* [2025-11-24, 12:39:10](https://news.ycombinator.com/item?id=46033472) - [Technical Deflation](https://benanderson.work/blog/technical-deflation/)
* [2025-11-24, 08:53:00](https://soylentnews.org/article.pl?sid=25/11/23/0244245&amp;from=rss) - [First-Ever Full Earth System Simulation Provides New Tool to Understand Climate Change](https://soylentnews.org/article.pl?sid=25/11/23/0244245&amp;from=rss)
* [2025-11-24, 08:10:11](https://news.ycombinator.com/item?id=46031552) - [Quake Engine Indicators](https://fabiensanglard.net/quake_indicators/index.html)
* [2025-11-24, 04:09:00](https://soylentnews.org/article.pl?sid=25/11/23/0241222&amp;from=rss) - [Debian Libre Live Images Released for Software Freedom Lovers](https://soylentnews.org/article.pl?sid=25/11/23/0241222&amp;from=rss)
* [2025-11-23, 23:26:00](https://soylentnews.org/article.pl?sid=25/11/23/0237208&amp;from=rss) - [US Gives Local Police a Face-Scanning App Similar to One Used by ICE Agents](https://soylentnews.org/article.pl?sid=25/11/23/0237208&amp;from=rss)
* [2025-11-23, 18:36:00](https://soylentnews.org/article.pl?sid=25/11/23/0229254&amp;from=rss) - [U.S. Spy Agency Releases Amelia Earhart Records](https://soylentnews.org/article.pl?sid=25/11/23/0229254&amp;from=rss)
* [2025-11-23, 18:16:58](https://news.ycombinator.com/item?id=46025911) - [G0-G3 corners, visualised: learn what \&quot;Apple corners\&quot; are](https://www.printables.com/model/1490911-g0-g3-corners-visualised-learn-what-apple-corners)
* [2025-11-23, 13:52:00](https://soylentnews.org/article.pl?sid=25/11/21/203250&amp;from=rss) - [Maybe That&apos;s Not Liquid Water on Mars After All](https://soylentnews.org/article.pl?sid=25/11/21/203250&amp;from=rss)
* [2025-11-23, 09:10:00](https://soylentnews.org/article.pl?sid=25/11/21/201212&amp;from=rss) - [Ancient Egyptians Likely Used Opiates Regularly](https://soylentnews.org/article.pl?sid=25/11/21/201212&amp;from=rss)
* [2025-11-23, 04:24:00](https://soylentnews.org/article.pl?sid=25/11/21/1957207&amp;from=rss) - [Mercury Pollution in Marine Mammals is Increasing, New Study Finds](https://soylentnews.org/article.pl?sid=25/11/21/1957207&amp;from=rss)
