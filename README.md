# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [The VPN panic is only getting started](https://www.theverge.com/tech/827435/uk-vpn-restrictions-ban-online-safety-act) ([comments](https://news.ycombinator.com/item?id=46075178))

* [US Patent Office Issues New Guidelines For AI-Assisted Inventions](https://yro.slashdot.org/story/25/11/28/0037205/us-patent-office-issues-new-guidelines-for-ai-assisted-inventions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://yro.slashdot.org/story/25/11/28/0037205/us-patent-office-issues-new-guidelines-for-ai-assisted-inventions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Social Media Giants Liable For Financial Scams Under New EU Law](https://tech.slashdot.org/story/25/11/28/0028207/social-media-giants-liable-for-financial-scams-under-new-eu-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://tech.slashdot.org/story/25/11/28/0028207/social-media-giants-liable-for-financial-scams-under-new-eu-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Vsora Jotunn-8 5nm European inference chip](https://vsora.com/products/jotunn-8/) ([comments](https://news.ycombinator.com/item?id=46074111))

* [250MWh 'Sand Battery' to start construction in Finland](https://www.energy-storage.news/250mwh-sand-battery-to-start-construction-in-finland-for-both-heating-and-ancillary-services/) ([comments](https://news.ycombinator.com/item?id=46073855))

## Science and Health

* [Bird flu viruses are resistant to fever, making them a major threat to humans](https://medicalxpress.com/news/2025-11-bird-flu-viruses-resistant-fever.html) ([comments](https://news.ycombinator.com/item?id=46074286))

* [Music eases surgery and speeds recovery, study finds](https://www.bbc.com/news/articles/c231dv9zpz3o) ([comments](https://news.ycombinator.com/item?id=46065817))

* [China's Giant Underground Neutrino Observatory Releases Its First Results](https://science.slashdot.org/story/25/11/26/2337257/chinas-giant-underground-neutrino-observatory-releases-its-first-results?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://science.slashdot.org/story/25/11/26/2337257/chinas-giant-underground-neutrino-observatory-releases-its-first-results?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Scientists Now Know That Bees Can Process Time, a First in Insects](https://soylentnews.org/article.pl?sid=25/11/23/2222225&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/11/23/2222225&amp;from=rss))

* [First-Ever Full Earth System Simulation Provides New Tool to Understand Climate Change](https://soylentnews.org/article.pl?sid=25/11/23/0244245&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/11/23/0244245&amp;from=rss))

## AI and Machine Learning

* [AI Can Technically Perform 12% of US Labor Market's Wage Value, MIT Simulation Finds](https://news.slashdot.org/story/25/11/27/0752210/ai-can-technically-perform-12-of-us-labor-markets-wage-value-mit-simulation-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.slashdot.org/story/25/11/27/0752210/ai-can-technically-perform-12-of-us-labor-markets-wage-value-mit-simulation-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [DeepSeekMath-V2: Towards Self-Verifiable Mathematical Reasoning [pdf]](https://github.com/deepseek-ai/DeepSeek-Math-V2/blob/main/DeepSeekMath_V2.pdf) ([comments](https://news.ycombinator.com/item?id=46072786))

* [TPUs vs. GPUs and why Google is positioned to win AI race in the long term](https://www.uncoveralpha.com/p/the-chip-made-for-the-ai-inference) ([comments](https://news.ycombinator.com/item?id=46069048))

* [The current state of the theory that GPL propagates to AI models](https://shujisado.org/2025/11/27/gpl-propagates-to-ai-models-trained-on-gpl-code/) ([comments](https://news.ycombinator.com/item?id=46068777))

## History and Culture

* [How Charles M Schulz created Charlie Brown and Snoopy (2024)](https://www.bbc.com/culture/article/20241205-how-charles-m-schulz-created-charlie-brown-and-snoopy) ([comments](https://news.ycombinator.com/item?id=46074362))

* [In 1982, a Physics Joke Gone Wrong Sparked the Invention of the Emoticon](https://soylentnews.org/article.pl?sid=25/11/23/2227204&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/11/23/2227204&amp;from=rss))

* [Magician Forgets Password to His Own Hand After RFID Chip Implant](https://soylentnews.org/article.pl?sid=25/11/23/0254204&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/11/23/0254204&amp;from=rss))

* [Zork I, II, and III go Open Source](https://soylentnews.org/article.pl?sid=25/11/24/2255253&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/11/24/2255253&amp;from=rss))

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

* [2025-11-28, 03:08:27](https://news.ycombinator.com/item?id=46075178) - [The VPN panic is only getting started](https://www.theverge.com/tech/827435/uk-vpn-restrictions-ban-online-safety-act)
* [2025-11-28, 02:52:32](https://lobste.rs/s/skdenp/what_s_button) - [What&apos;s in a Button?](https://belkadan.com/blog/2025/11/Whats-in-a-Button/)
* [2025-11-28, 02:30:00](https://yro.slashdot.org/story/25/11/28/0037205/us-patent-office-issues-new-guidelines-for-ai-assisted-inventions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Patent Office Issues New Guidelines For AI-Assisted Inventions](https://yro.slashdot.org/story/25/11/28/0037205/us-patent-office-issues-new-guidelines-for-ai-assisted-inventions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 01:10:00](https://games.slashdot.org/story/25/11/28/0033246/epics-sweeney-says-platforms-should-stop-tagging-games-made-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Epic&apos;s Sweeney Says Platforms Should Stop Tagging Games Made With AI](https://games.slashdot.org/story/25/11/28/0033246/epics-sweeney-says-platforms-should-stop-tagging-games-made-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 00:28:00](https://tech.slashdot.org/story/25/11/28/0028207/social-media-giants-liable-for-financial-scams-under-new-eu-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Social Media Giants Liable For Financial Scams Under New EU Law](https://tech.slashdot.org/story/25/11/28/0028207/social-media-giants-liable-for-financial-scams-under-new-eu-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-28, 00:10:38](https://news.ycombinator.com/item?id=46074362) - [How Charles M Schulz created Charlie Brown and Snoopy (2024)](https://www.bbc.com/culture/article/20241205-how-charles-m-schulz-created-charlie-brown-and-snoopy)
* [2025-11-27, 23:57:57](https://news.ycombinator.com/item?id=46074286) - [Bird flu viruses are resistant to fever, making them a major threat to humans](https://medicalxpress.com/news/2025-11-bird-flu-viruses-resistant-fever.html)
* [2025-11-27, 23:30:11](https://news.ycombinator.com/item?id=46074111) - [Vsora Jotunn-8 5nm European inference chip](https://vsora.com/products/jotunn-8/)
* [2025-11-27, 22:48:44](https://news.ycombinator.com/item?id=46073855) - [250MWh &apos;Sand Battery&apos; to start construction in Finland](https://www.energy-storage.news/250mwh-sand-battery-to-start-construction-in-finland-for-both-heating-and-ancillary-services/)
* [2025-11-27, 22:41:06](https://news.ycombinator.com/item?id=46073817) - [A programmer-friendly I/O abstraction over io_uring and kqueue (2022)](https://tigerbeetle.com/blog/2022-11-23-a-friendly-abstraction-over-iouring-and-kqueue/)
* [2025-11-27, 22:01:03](https://lobste.rs/s/fynjhj/bauble) - [Bauble](https://bauble.studio/)
* [2025-11-27, 21:00:00](https://slashdot.org/story/25/11/27/2013252/australia-spent-62-million-to-update-its-weather-web-site-and-made-it-worse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Australia Spent $62 Million To Update Its Weather Web Site and Made It Worse](https://slashdot.org/story/25/11/27/2013252/australia-spent-62-million-to-update-its-weather-web-site-and-made-it-worse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-27, 20:57:47](https://lobste.rs/s/24vb6t/setting_secrets_env_vars) - [Setting secrets in env vars](https://hugovk.dev/blog/2025/secrets-in-env-vars/)
* [2025-11-27, 20:37:51](https://news.ycombinator.com/item?id=46073033) - [Underrated reasons to be thankful V](https://dynomight.net/thanks-5/)
* [2025-11-27, 20:30:43](https://lobste.rs/s/uiueai/bending_emacs_episode_6_overlays) - [Bending Emacs - Episode 6: Overlays](https://xenodium.com/bending-emacs-episode-6-overlays)
* [2025-11-27, 20:03:25](https://news.ycombinator.com/item?id=46072786) - [DeepSeekMath-V2: Towards Self-Verifiable Mathematical Reasoning [pdf]](https://github.com/deepseek-ai/DeepSeek-Math-V2/blob/main/DeepSeekMath_V2.pdf)
* [2025-11-27, 20:00:00](https://science.slashdot.org/story/25/11/27/202228/face-transplants-promised-hope-patients-were-put-through-the-unthinkable?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Face Transplants Promised Hope. Patients Were Put Through the Unthinkable](https://science.slashdot.org/story/25/11/27/202228/face-transplants-promised-hope-patients-were-put-through-the-unthinkable?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-27, 18:36:20](https://lobste.rs/s/7ketee/same_day_upstream_linux_support_for) - [Same-day upstream Linux support for Snapdragon 8 Elite Gen 5 mobile platform](https://www.qualcomm.com/developer/blog/2025/10/same-day-snapdragon-8-elite-gen-5-upstream-linux-support)
* [2025-11-27, 18:02:00](https://news.slashdot.org/story/25/11/27/1332209/uk-to-tax-electric-cars-by-the-mile-starting-2028?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK To Tax Electric Cars by the Mile Starting 2028](https://news.slashdot.org/story/25/11/27/1332209/uk-to-tax-electric-cars-by-the-mile-starting-2028?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-27, 17:44:55](https://lobste.rs/s/ipk4lg/pointer_pop_quiz) - [Pointer pop quiz](https://dave.cheney.net/2025/11/27/pointer-pop-quiz)
* [2025-11-27, 17:41:20](https://lobste.rs/s/zzy9fy/electron_vs_tauri) - [Electron vs. Tauri](https://www.dolthub.com/blog/2025-11-13-electron-vs-tauri/)
* [2025-11-27, 17:30:27](https://lobste.rs/s/1j7cwz/comparing_obelisk_with_dbos) - [Comparing Obelisk with DBOS](https://obeli.sk/blog/comparing-dbos-part-1/)
* [2025-11-27, 17:13:00](https://lobste.rs/s/e0tujy/input_stack_on_linux_end_end_architecture) - [The Input Stack on Linux An End-To-End Architecture Overview](https://venam.net/blog/unix/2025/11/27/input_devices_linux.html)
* [2025-11-27, 17:01:00](https://mobile.slashdot.org/story/25/11/27/1255245/androids-new-dual-band-hotspot-mode-pairs-6-ghz-speed-with-24-ghz-compatibility?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Android&apos;s New Dual-Band Hotspot Mode Pairs 6 GHz Speed With 2.4 GHz Compatibility](https://mobile.slashdot.org/story/25/11/27/1255245/androids-new-dual-band-hotspot-mode-pairs-6-ghz-speed-with-24-ghz-compatibility?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-27, 16:19:03](https://news.ycombinator.com/item?id=46070668) - [Same-day upstream Linux support for Snapdragon 8 Elite Gen 5](https://www.qualcomm.com/developer/blog/2025/10/same-day-snapdragon-8-elite-gen-5-upstream-linux-support)
* [2025-11-27, 16:01:00](https://tech.slashdot.org/story/25/11/27/095202/defense-contractors-lobby-to-kill-military-right-to-repair-push-pay-per-use-data-model?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Defense Contractors Lobby To Kill Military Right-to-Repair, Push Pay-Per-Use Data Model](https://tech.slashdot.org/story/25/11/27/095202/defense-contractors-lobby-to-kill-military-right-to-repair-push-pay-per-use-data-model?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-27, 15:36:56](https://news.ycombinator.com/item?id=46070203) - [GitLab discovers widespread NPM supply chain attack](https://about.gitlab.com/blog/gitlab-discovers-widespread-npm-supply-chain-attack/)
* [2025-11-27, 15:01:00](https://science.slashdot.org/story/25/11/27/0856219/nasa-reduces-flights-on-boeings-starliner-after-botched-astronaut-mission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Reduces Flights on Boeing&apos;s Starliner After Botched Astronaut Mission](https://science.slashdot.org/story/25/11/27/0856219/nasa-reduces-flights-on-boeings-starliner-after-botched-astronaut-mission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-27, 14:53:22](https://lobste.rs/s/iro8m3/lowtype_elegant_types_ruby) - [Lowtype: Elegant types in Ruby](https://codeberg.org/Iow/type)
* [2025-11-27, 14:00:00](https://news.slashdot.org/story/25/11/27/0752210/ai-can-technically-perform-12-of-us-labor-markets-wage-value-mit-simulation-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Can Technically Perform 12% of US Labor Market&apos;s Wage Value, MIT Simulation Finds](https://news.slashdot.org/story/25/11/27/0752210/ai-can-technically-perform-12-of-us-labor-markets-wage-value-mit-simulation-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-27, 13:40:20](https://lobste.rs/s/ju12fl/bringing_emacs_support_ocaml_s_lsp_server) - [Bringing Emacs Support to OCaml&apos;s LSP Server with ocaml-eglot](https://tarides.com/blog/2025-11-27-bringing-emacs-support-to-ocaml-s-lsp-server-with-ocaml-eglot/)
* [2025-11-27, 13:29:28](https://lobste.rs/s/cbcksu/unbrickable_pledge) - [The Unbrickable Pledge](https://usetrmnl.com/blog/the-unbrickable-pledge)
* [2025-11-27, 13:28:34](https://news.ycombinator.com/item?id=46069048) - [TPUs vs. GPUs and why Google is positioned to win AI race in the long term](https://www.uncoveralpha.com/p/the-chip-made-for-the-ai-inference)
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
* [2025-11-26, 22:43:00](https://soylentnews.org/article.pl?sid=25/11/24/234230&amp;from=rss) - [The Escape Room Challenge: How One Person&apos;s Narcissism Can Undermine a Whole Team](https://soylentnews.org/article.pl?sid=25/11/24/234230&amp;from=rss)
* [2025-11-26, 21:53:27](https://lobste.rs/s/ovfhqr/chat_control_eu_lawmakers_finally_agree) - [Chat Control: EU lawmakers finally agree on the voluntary scanning of your private chats](https://www.techradar.com/vpn/vpn-privacy-security/chat-control-eu-lawmakers-finally-agree-on-the-voluntary-scanning-of-your-private-chats)
* [2025-11-26, 20:17:44](https://news.ycombinator.com/item?id=46061871) - [Inspired by Spider-Man, scientists recreate web-slinging technology](https://scienceclock.com/inspired-by-spider-man-scientists-recreate-web-slinging-technology/)
* [2025-11-26, 18:41:40](https://lobste.rs/s/evzudd/very_fast_64_bit_date_algorithm_30_40) - [A Very Fast 64–Bit Date Algorithm: 30-40% faster](https://www.benjoffe.com/fast-date-64)
* [2025-11-26, 18:34:41](https://lobste.rs/s/7fsqgl/ulid_only_identifier_you_should_use) - [ULID - the ONLY identifier you should use?](https://www.youtube.com/watch?v=otW7nLd8P04)
* [2025-11-26, 17:55:00](https://soylentnews.org/article.pl?sid=25/11/24/232236&amp;from=rss) - [Mozilla Resolves 21-Year-Old Bug, Adds Full XDG Directory Support](https://soylentnews.org/article.pl?sid=25/11/24/232236&amp;from=rss)
* [2025-11-26, 15:40:14](https://news.ycombinator.com/item?id=46058471) - [Feedback doesn&apos;t scale](https://another.rodeo/feedback/)
* [2025-11-26, 14:16:17](https://lobste.rs/s/iwzqi3/kde_going_all_on_wayland_future) - [KDE going all-in on a Wayland future](https://blogs.kde.org/2025/11/26/going-all-in-on-a-wayland-future/)
* [2025-11-26, 13:51:07](https://lobste.rs/s/ilnv7s/building_64_bit_os_from_scratch_with) - [Building a 64-bit OS from Scratch with Claude Code](https://isene.org/2025/11/SimplicityOS.html)
* [2025-11-26, 13:36:19](https://news.ycombinator.com/item?id=46057266) - [Memories of .us](https://computer.rip/2025-11-11-dot-us.html)
* [2025-11-26, 13:11:00](https://soylentnews.org/article.pl?sid=25/11/24/230252&amp;from=rss) - [The Reshoring Initiative - Real Reasons to Bring Jobs Back to USA From Asia](https://soylentnews.org/article.pl?sid=25/11/24/230252&amp;from=rss)
* [2025-11-26, 09:24:06](https://lobste.rs/s/jucg4w/i_don_t_care_how_well_your_ai_works) - [I don&apos;t care how well your \&quot;AI\&quot; works](https://fokus.cool/2025/11/25/i-dont-care-how-well-your-ai-works.html)
* [2025-11-26, 08:24:00](https://soylentnews.org/article.pl?sid=25/11/24/2255253&amp;from=rss) - [Zork I, II, and III go Open Source](https://soylentnews.org/article.pl?sid=25/11/24/2255253&amp;from=rss)
* [2025-11-26, 03:41:00](https://soylentnews.org/article.pl?sid=25/11/24/2253234&amp;from=rss) - [HP and Dell Disable HEVC Support Built Into Their Laptops’ CPUs](https://soylentnews.org/article.pl?sid=25/11/24/2253234&amp;from=rss)
* [2025-11-25, 22:57:00](https://soylentnews.org/article.pl?sid=25/11/24/2248217&amp;from=rss) - [Is Matrix Multiplication Ugly?](https://soylentnews.org/article.pl?sid=25/11/24/2248217&amp;from=rss)
* [2025-11-25, 18:12:00](https://soylentnews.org/article.pl?sid=25/11/23/2227204&amp;from=rss) - [In 1982, a Physics Joke Gone Wrong Sparked the Invention of the Emoticon](https://soylentnews.org/article.pl?sid=25/11/23/2227204&amp;from=rss)
* [2025-11-25, 13:28:00](https://soylentnews.org/article.pl?sid=25/11/23/2222225&amp;from=rss) - [Scientists Now Know That Bees Can Process Time, a First in Insects](https://soylentnews.org/article.pl?sid=25/11/23/2222225&amp;from=rss)
* [2025-11-25, 08:41:00](https://soylentnews.org/article.pl?sid=25/11/23/2216237&amp;from=rss) - [I Set a Trap to Catch My Students Cheating With AI and the Results Were Shocking](https://soylentnews.org/article.pl?sid=25/11/23/2216237&amp;from=rss)
* [2025-11-25, 04:00:00](https://soylentnews.org/article.pl?sid=25/11/23/2211220&amp;from=rss) - [Researchers Find Simple Way to Destroy PFAS on Activated Carbon](https://soylentnews.org/article.pl?sid=25/11/23/2211220&amp;from=rss)
* [2025-11-24, 23:16:00](https://soylentnews.org/article.pl?sid=25/11/23/1458223&amp;from=rss) - [Ring&apos;s New Feature Turns Your Doorbell Into a Biometric Spy](https://soylentnews.org/article.pl?sid=25/11/23/1458223&amp;from=rss)
* [2025-11-24, 20:48:18](https://news.ycombinator.com/item?id=46039106) - [Interactive λ-Reduction](https://deltanets.org/)
* [2025-11-24, 18:27:00](https://soylentnews.org/article.pl?sid=25/11/23/1349258&amp;from=rss) - [Thieves Want Your iPhone, Not Your Android](https://soylentnews.org/article.pl?sid=25/11/23/1349258&amp;from=rss)
* [2025-11-24, 16:26:22](https://news.ycombinator.com/item?id=46035819) - [Maxduino Review: Tape Cassette Emulator for Multiple Retro Computers](https://retrogamecoders.com/maxduino-review/)
* [2025-11-24, 13:42:00](https://soylentnews.org/article.pl?sid=25/11/23/0254204&amp;from=rss) - [Magician Forgets Password to His Own Hand After RFID Chip Implant](https://soylentnews.org/article.pl?sid=25/11/23/0254204&amp;from=rss)
* [2025-11-24, 08:53:00](https://soylentnews.org/article.pl?sid=25/11/23/0244245&amp;from=rss) - [First-Ever Full Earth System Simulation Provides New Tool to Understand Climate Change](https://soylentnews.org/article.pl?sid=25/11/23/0244245&amp;from=rss)
* [2025-11-24, 08:10:11](https://news.ycombinator.com/item?id=46031552) - [Quake Engine Indicators](https://fabiensanglard.net/quake_indicators/index.html)
* [2025-11-24, 04:09:00](https://soylentnews.org/article.pl?sid=25/11/23/0241222&amp;from=rss) - [Debian Libre Live Images Released for Software Freedom Lovers](https://soylentnews.org/article.pl?sid=25/11/23/0241222&amp;from=rss)
