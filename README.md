# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Sparse Voxels Rasterization: Real-Time High-Fidelity Radiance Field Rendering](https://svraster.github.io/) - A deep dive into a revolutionary approach to rendering radiance fields with sparse voxels for real-time applications. [Comments](https://news.ycombinator.com/item?id=43132964)

* [Lithium-sulfur battery retains 80% charge capacity after 25,000 cycles](https://techxplore.com/news/2025-01-lithium-sulfur-battery-retains-capacity.html) - Breakthrough in battery technology offers significant advancements in energy storage durability. [Comments](https://news.ycombinator.com/item?id=43130923)

* [The First Wasm_of_ocaml Release is Out](https://tarides.com/blog/2025-02-19-the-first-wasm-of-ocaml-release-is-out/) - A milestone for OCaml developers with the launch of its first WebAssembly-focused release. [Comments](https://lobste.rs/s/zcsxzn/first_wasm_ocaml_release_is_out)

* [Train Your Own O1 Preview Model Within $450](https://sky.cs.berkeley.edu/project/sky-t1/) - Accessible AI model training opens new avenues for independent experimentation. [Comments](https://news.ycombinator.com/item?id=43125430)

## AI and Machine Learning

* [DeepSeek To Share Some AI Model Code](https://news.slashdot.org/story/25/02/21/1842227/deepseek-to-share-some-ai-model-code?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The AI community gains significant open models from DeepSeek, fostering collaboration. [Comments](https://news.slashdot.org/story/25/02/21/1842227/deepseek-to-share-some-ai-model-code?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [AI Cracks Superbug Problem In Two Days That Took Scientists Years](https://science.slashdot.org/story/25/02/21/0244216/ai-cracks-superbug-problem-in-two-days-that-took-scientists-years?utm_source=rss1.0mainlinkanon&utm_medium=feed) - AI outpaces traditional methods by solving a biological challenge in record time. [Comments](https://science.slashdot.org/story/25/02/21/0244216/ai-cracks-superbug-problem-in-two-days-that-took-scientists-years?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [General Reasoning: Free, open resource for building large reasoning models](https://gr.inc/) - An open-resource initiative to expand capabilities in creating large reasoning AI models. [Comments](https://news.ycombinator.com/item?id=43131502)

## Software Development

* [20 years working on the same software product](https://successfulsoftware.net/2025/02/21/20-years-working-on-the-same-software-product/) - Insider reflection filled with lessons for developers on decades of product maintenance. [Comments](https://news.ycombinator.com/item?id=43133174)

* [GDScript Notes](https://wiki.alopex.li/GDScriptNotes) - A valuable resource for developers interested in mastering Godot Engine's custom scripting language. [Comments](https://lobste.rs/s/w668mg/gdscript_notes)

* [Johnny.Decimal – A system to organise your life](https://johnnydecimal.com) - A unique method to effectively declutter digital workflows using structured organization principles. [Comments](https://news.ycombinator.com/item?id=43128093)

## Privacy and Security

* [Apple pulls encryption feature from UK over government spying demands](https://www.theverge.com/news/617273/apple-removes-encryption-advanced-data-protection-adp-uk-spying-backdoor) - Concerns over privacy mount as Apple removes services in response to UK government pressure. [Comments](https://lobste.rs/s/ux76xy/apple_pulls_encryption_feature_from_uk)

* [Meta Claims Torrenting Pirated Books Isn't Illegal Without Proof of Seeding](https://yro.slashdot.org/story/25/02/21/0051232/meta-claims-torrenting-pirated-books-isnt-illegal-without-proof-of-seeding?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A bold legal statement from Meta on the multifaceted issue of digital copyright laws. [Comments](https://yro.slashdot.org/story/25/02/21/0051232/meta-claims-torrenting-pirated-books-isnt-illegal-without-proof-of-seeding?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Space Exploration

* [NASA's James Webb Space Telescope faces potential 20% budget cut](https://www.space.com/space-exploration/james-webb-space-telescope/nasa-james-webb-space-telescope-faces-20-percent-budget-cuts) - Challenges loom over ongoing space exploration efforts due to proposed financial reductions. [Comments](https://news.ycombinator.com/item?id=43131045)

## Miscellaneous

* [India's 'Human Calculator Kid' Shatters 6 World Records In a Single Day](https://science.slashdot.org/story/25/02/21/2125209/indias-human-calculator-kid-shatters-6-world-records-in-a-single-day?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Celebrating an astonishing mental math feat by a young prodigy. [Comments](https://science.slashdot.org/story/25/02/21/2125209/indias-human-calculator-kid-shatters-6-world-records-in-a-single-day?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Burning in Woman's Legs Turned Out to be Slug Parasites Migrating to Her Brain](https://soylentnews.org/article.pl?sid=25/02/20/131244&from=rss) - A bizarre and troubling medical case highlights unexpected parasitic behavior. [Comments](https://soylentnews.org/article.pl?sid=25/02/20/131244&from=rss)

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

* [2025-02-21, 22:05:33](https://lobste.rs/s/entsoh/technologies_didn_t_clns) - [Technologies that Didn’t: CLNS](https://rule11.tech/tech-clns/)
* [2025-02-21, 21:26:00](https://science.slashdot.org/story/25/02/21/2125209/indias-human-calculator-kid-shatters-6-world-records-in-a-single-day?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [India's 'Human Calculator Kid' Shatters 6 World Records In a Single Day](https://science.slashdot.org/story/25/02/21/2125209/indias-human-calculator-kid-shatters-6-world-records-in-a-single-day?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-21, 21:22:55](https://news.ycombinator.com/item?id=43133174) - [20 years working on the same software product](https://successfulsoftware.net/2025/02/21/20-years-working-on-the-same-software-product/)
* [2025-02-21, 21:06:05](https://news.ycombinator.com/item?id=43132964) - [Sparse Voxels Rasterization: Real-Time High-Fidelity Radiance Field Rendering](https://svraster.github.io/)
* [2025-02-21, 20:22:57](https://news.ycombinator.com/item?id=43132482) - [Slime OS – An open-source app launcher for RP2040 based devices](https://github.com/abeisgoat/slime_os)
* [2025-02-21, 20:09:32](https://news.ycombinator.com/item?id=43132336) - [The Ren'Py Visual Novel Engine](https://www.renpy.org/)
* [2025-02-21, 20:02:34](https://news.ycombinator.com/item?id=43132260) - [Neo Gamma (Home Humanoid)](https://www.1x.tech/neo)
* [2025-02-21, 19:45:18](https://lobste.rs/s/oxkl4d/open_letter_browser_os_makers) - [Open letter to browser and OS makers](https://medium.com/@boblord/open-letter-to-browser-and-os-makers-12d65aa314f7)
* [2025-02-21, 19:34:37](https://news.ycombinator.com/item?id=43131902) - [Yocto, RockPi and SBOMs: Building modern embedded Linux images](https://vpetersson.com/2025/02/21/yocto-rockpi-and-sboms.html)
* [2025-02-21, 19:10:01](https://lobste.rs/s/6zezmb/depth_is_all_you_need_how_antithesis) - [Depth is all you need: how Antithesis crushes Gradius](https://antithesis.com/blog/2025/gradius/)
* [2025-02-21, 19:01:59](https://news.ycombinator.com/item?id=43131502) - [General Reasoning: Free, open resource for building large reasoning models](https://gr.inc/)
* [2025-02-21, 18:46:58](https://lobste.rs/s/w668mg/gdscript_notes) - [GDScript Notes](https://wiki.alopex.li/GDScriptNotes)
* [2025-02-21, 18:41:00](https://news.slashdot.org/story/25/02/21/1842227/deepseek-to-share-some-ai-model-code?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [DeepSeek To Share Some AI Model Code](https://news.slashdot.org/story/25/02/21/1842227/deepseek-to-share-some-ai-model-code?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-21, 18:27:00](https://news.ycombinator.com/item?id=43131059) - [Suckless.org: software that sucks less](https://suckless.org/)
* [2025-02-21, 18:25:16](https://news.ycombinator.com/item?id=43131045) - [NASA's James Webb Space Telescope faces potential 20% budget cut](https://www.space.com/space-exploration/james-webb-space-telescope/nasa-james-webb-space-telescope-faces-20-percent-budget-cuts)
* [2025-02-21, 18:22:59](https://news.ycombinator.com/item?id=43131017) - [Richard Feynman's blackboard at the time of his death (1988)](https://digital.archives.caltech.edu/collections/Images/1.10-29/)
* [2025-02-21, 18:17:00](https://soylentnews.org/article.pl?sid=25/02/20/169239&from=rss) - [Intel's Head of Datacenter and AI Unit Leaves to Lead Nokia](https://soylentnews.org/article.pl?sid=25/02/20/169239&from=rss)
* [2025-02-21, 18:15:38](https://news.ycombinator.com/item?id=43130923) - [Lithium-sulfur battery retains 80% charge capacity after 25,000 cycles](https://techxplore.com/news/2025-01-lithium-sulfur-battery-retains-capacity.html)
* [2025-02-21, 17:59:48](https://news.ycombinator.com/item?id=43130732) - [Some critical issues with the SWE-bench dataset](https://arxiv.org/abs/2410.06992)
* [2025-02-21, 17:46:15](https://news.ycombinator.com/item?id=43130546) - [Why Ruby on Rails still matters](https://www.contraption.co/rails-versus-nextjs/)
* [2025-02-21, 17:44:13](https://lobste.rs/s/mazfvy/neut_programming_language) - [Neut Programming Language](https://vekatze.github.io/neut/overview.html)
* [2025-02-21, 17:41:04](https://news.ycombinator.com/item?id=43130480) - [The Profitable Startup](https://linear.app/blog/the-profitable-startup)
* [2025-02-21, 17:40:00](https://it.slashdot.org/story/25/02/21/1740213/hp-ends-forced-15-minute-wait-times-for-customer-support?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [HP Ends Forced 15-Minute Wait Times for Customer Support](https://it.slashdot.org/story/25/02/21/1740213/hp-ends-forced-15-minute-wait-times-for-customer-support?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-21, 17:16:16](https://news.ycombinator.com/item?id=43130155) - [The CRPG Renaissance, Part 3: TSR Is Dead](https://www.filfre.net/2025/02/the-crpg-renaissance-part-3-tsr-is-dead/)
* [2025-02-21, 17:00:17](https://news.ycombinator.com/item?id=43129944) - [Posh (YC W22) Is Hiring](https://www.ycombinator.com/companies/posh/jobs/XeXjwIu-energy-analysis-modeling-engineer)
* [2025-02-21, 16:57:13](https://news.ycombinator.com/item?id=43129887) - [DeepDive in everything of Llama3: revealing detailed insights and implementation](https://github.com/therealoliver/Deepdive-llama3-from-scratch)
* [2025-02-21, 16:45:00](https://it.slashdot.org/story/25/02/21/1630207/bybit-ceo-confirms-exchange-was-hacked-for-146b-says-his-firm-can-cover-the-loss?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Bybit CEO Confirms Exchange Was Hacked for $1.46B, Says His Firm Can Cover The Loss](https://it.slashdot.org/story/25/02/21/1630207/bybit-ceo-confirms-exchange-was-hacked-for-146b-says-his-firm-can-cover-the-loss?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-21, 16:40:44](https://news.ycombinator.com/item?id=43129633) - [Show HN: Txeo – A Modern C++ Wrapper for TensorFlow](https://github.com/rdabra/txeo)
* [2025-02-21, 16:27:54](https://news.ycombinator.com/item?id=43129439) - [Removing Jeff Bezos from my bed](https://trufflesecurity.com/blog/removing-jeff-bezos-from-my-bed)
* [2025-02-21, 16:24:17](https://lobste.rs/s/t5bzi6/quint_deserves_rust) - [Quint Deserves Rust](https://informal.systems/blog/quint-deserves-rust)
* [2025-02-21, 16:19:52](https://lobste.rs/s/ux76xy/apple_pulls_encryption_feature_from_uk) - [Apple pulls encryption feature from UK over government spying demands](https://www.theverge.com/news/617273/apple-removes-encryption-advanced-data-protection-adp-uk-spying-backdoor)
* [2025-02-21, 16:19:12](https://news.ycombinator.com/item?id=43129301) - [Launch HN: Massdriver (YC W22) – Self-serve cloud infra without the red tape](https://news.ycombinator.com/item?id=43129301)
* [2025-02-21, 16:16:00](https://yro.slashdot.org/story/25/02/21/1616245/new-winrar-version-strips-windows-metadata-in-privacy-push?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [New WinRAR Version Strips Windows Metadata In Privacy Push](https://yro.slashdot.org/story/25/02/21/1616245/new-winrar-version-strips-windows-metadata-in-privacy-push?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-21, 15:36:27](https://lobste.rs/s/jnchj9/we_issued_our_first_six_day_cert) - [We Issued Our First Six Day Cert](https://letsencrypt.org/2025/02/20/first-short-lived-cert-issued/)
* [2025-02-21, 15:29:00](https://apple.slashdot.org/story/25/02/21/1529255/apple-removes-cloud-encryption-feature-from-uk-after-backdoor-order?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Removes Cloud Encryption Feature From UK After Backdoor Order](https://apple.slashdot.org/story/25/02/21/1529255/apple-removes-cloud-encryption-feature-from-uk-after-backdoor-order?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-21, 15:05:24](https://news.ycombinator.com/item?id=43128253) - [Apple pulls data protection tool after UK government security row](https://www.bbc.com/news/articles/cgj54eq4vejo)
* [2025-02-21, 14:52:14](https://news.ycombinator.com/item?id=43128093) - [Johnny.Decimal – A system to organise your life](https://johnnydecimal.com)
* [2025-02-21, 14:40:00](https://developers.slashdot.org/story/25/02/21/1113219/ai-is-prompting-an-evolution-not-extinction-for-coders?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [AI Is Prompting an Evolution, Not Extinction, for Coders](https://developers.slashdot.org/story/25/02/21/1113219/ai-is-prompting-an-evolution-not-extinction-for-coders?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-21, 14:30:00](https://soylentnews.org/meta/article.pl?sid=25/02/21/1425224&from=rss) - [Adoption of Site Documentation - THIS IS THE VOTE - RESTORED](https://soylentnews.org/meta/article.pl?sid=25/02/21/1425224&from=rss)
* [2025-02-21, 14:20:00](https://soylentnews.org/meta/article.pl?sid=25/02/21/1414222&from=rss) - [Soylent Update - Adoption of Proposed Documents - How the Vote Will be Managed](https://soylentnews.org/meta/article.pl?sid=25/02/21/1414222&from=rss)
* [2025-02-21, 14:00:00](https://tech.slashdot.org/story/25/02/21/111216/software-engineering-job-openings-hit-five-year-low?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Software Engineering Job Openings Hit Five-Year Low](https://tech.slashdot.org/story/25/02/21/111216/software-engineering-job-openings-hit-five-year-low?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-21, 13:32:00](https://soylentnews.org/article.pl?sid=25/02/20/165216&from=rss) - [What Would Happen If a (Small) Black Hole Passed Through Your Body ?](https://soylentnews.org/article.pl?sid=25/02/20/165216&from=rss)
* [2025-02-21, 13:02:49](https://lobste.rs/s/2p6tfp/smallest_go_binary_5kb) - [The Smallest Go Binary (5KB)](https://totallygamerjet.hashnode.dev/the-smallest-go-binary-5kb)
* [2025-02-21, 12:41:22](https://lobste.rs/s/nodkpe/chatting_with_designer_monolisa) - [Chatting with the Designer of MonoLisa](https://joshleeb.com/posts/monolisa-chat.html)
* [2025-02-21, 12:31:10](https://lobste.rs/s/zcsxzn/first_wasm_ocaml_release_is_out) - [The First Wasm_of_ocaml Release is Out](https://tarides.com/blog/2025-02-19-the-first-wasm-of-ocaml-release-is-out/)
* [2025-02-21, 10:46:09](https://lobste.rs/s/wntsxu/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/wntsxu/what_are_you_doing_this_weekend)
* [2025-02-21, 10:00:00](https://science.slashdot.org/story/25/02/21/0244216/ai-cracks-superbug-problem-in-two-days-that-took-scientists-years?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [AI Cracks Superbug Problem In Two Days That Took Scientists Years](https://science.slashdot.org/story/25/02/21/0244216/ai-cracks-superbug-problem-in-two-days-that-took-scientists-years?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-21, 09:59:23](https://news.ycombinator.com/item?id=43125829) - [Every .gov Domain](https://flatgithub.com/cisagov/dotgov-data/blob/main/?filename=current-full.csv&sha=7dc7d24fba91f571692112d92b6a8fbe7aecbba2)
* [2025-02-21, 09:55:24](https://lobste.rs/s/rhydqn/unix_v2_beta_resurrected) - [UNIX V2 \"Beta\" Resurrected](https://www.tuhs.org/pipermail/tuhs/2025-February/031420.html)
* [2025-02-21, 08:56:32](https://lobste.rs/s/u4eidn/running_ml_models_elixir_using_pythonx) - [Running ML models in Elixir using Pythonx](https://samrat.me/running-ml-models-in-elixir-using-pythonx/)
* [2025-02-21, 08:52:57](https://lobste.rs/s/wooe50/databases_are_endgame_for_data_oriented) - [Databases are the endgame for data-oriented design](https://spacetimedb.com/blog/databases-and-data-oriented-design)
* [2025-02-21, 08:42:38](https://news.ycombinator.com/item?id=43125430) - [Train Your Own O1 Preview Model Within $450](https://sky.cs.berkeley.edu/project/sky-t1/)
* [2025-02-21, 07:44:00](https://soylentnews.org/article.pl?sid=25/02/20/137208&from=rss) - [A Single Protein May Have Helped Shape the Emergence of Spoken Language](https://soylentnews.org/article.pl?sid=25/02/20/137208&from=rss)
* [2025-02-21, 07:42:45](https://news.ycombinator.com/item?id=43125089) - [Docker limits unauthenticated pulls to 10/HR/IP from Docker Hub, from March 1](https://docs.docker.com/docker-hub/usage/)
* [2025-02-21, 07:40:41](https://lobste.rs/s/s3re6r/docker_limits_unauthenticated_pulls_10) - [Docker limits unauthenticated pulls to 10/hr/ip from Docker Hub, from March 1](https://docs.docker.com/docker-hub/usage/)
* [2025-02-21, 07:00:00](https://yro.slashdot.org/story/25/02/21/0234244/california-takes-steps-toward-officially-recognizing-bigfoot?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [California Takes Steps Toward Officially Recognizing Bigfoot](https://yro.slashdot.org/story/25/02/21/0234244/california-takes-steps-toward-officially-recognizing-bigfoot?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-21, 06:04:09](https://lobste.rs/s/qromax/chromium_ozone_wayland_last_mile_stretch) - [Chromium Ozone/Wayland: The Last Mile Stretch](https://nickdiego.dev/blog/chromium-ozone-wayland-the-last-mile-stretch/)
* [2025-02-21, 03:30:00](https://yro.slashdot.org/story/25/02/21/0051232/meta-claims-torrenting-pirated-books-isnt-illegal-without-proof-of-seeding?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Meta Claims Torrenting Pirated Books Isn't Illegal Without Proof of Seeding](https://yro.slashdot.org/story/25/02/21/0051232/meta-claims-torrenting-pirated-books-isnt-illegal-without-proof-of-seeding?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-21, 02:59:00](https://soylentnews.org/article.pl?sid=25/02/20/131244&from=rss) - [Burning in Woman's Legs Turned Out to be Slug Parasites Migrating to Her Brain](https://soylentnews.org/article.pl?sid=25/02/20/131244&from=rss)
* [2025-02-21, 02:11:00](https://tech.slashdot.org/story/25/02/21/029217/rivian-reports-first-quarter-of-positive-gross-profit?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Rivian Reports First Quarter of 'Positive Gross Profit'](https://tech.slashdot.org/story/25/02/21/029217/rivian-reports-first-quarter-of-positive-gross-profit?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-21, 01:25:00](https://it.slashdot.org/story/25/02/21/0032236/ghost-ransomware-continues-to-infect-critical-infrastructure-feds-warn?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Ghost Ransomware Continues To Infect Critical Infrastructure, Feds Warn](https://it.slashdot.org/story/25/02/21/0032236/ghost-ransomware-continues-to-infect-critical-infrastructure-feds-warn?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-21, 00:45:00](https://news.slashdot.org/story/25/02/21/0023214/youtube-plans-lower-priced-ad-free-version-of-paid-video-tier?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [YouTube Plans Lower-Priced, Ad-Free Version of Paid Video Tier](https://news.slashdot.org/story/25/02/21/0023214/youtube-plans-lower-priced-ad-free-version-of-paid-video-tier?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-21, 00:32:19](https://lobste.rs/s/ymrfir/crustacean_for_lobste_rs) - [Crustacean for Lobste.rs](https://crustacean.optionalstudio.work)
* [2025-02-21, 00:02:00](https://entertainment.slashdot.org/story/25/02/20/2220246/netflix-to-invest-1-billion-in-mexico-over-next-4-years?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Netflix To Invest $1 Billion In Mexico Over Next 4 Years](https://entertainment.slashdot.org/story/25/02/20/2220246/netflix-to-invest-1-billion-in-mexico-over-next-4-years?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-20, 23:59:05](https://lobste.rs/s/nsq3tq/your_company_needs_junior_devs) - [Your company needs Junior devs](https://softwaredoug.com/blog/2024/09/07/your-team-needs-juniors)
* [2025-02-20, 22:12:00](https://soylentnews.org/article.pl?sid=25/02/20/1255237&from=rss) - [10 Years on After 'Data and Goliath' Warned of Data Collection](https://soylentnews.org/article.pl?sid=25/02/20/1255237&from=rss)
* [2025-02-20, 20:42:06](https://lobste.rs/s/rcddil/running_pong_240_browser_tabs) - [Running Pong in 240 Browser Tabs](https://eieio.games/blog/running-pong-in-240-browser-tabs/)
* [2025-02-20, 20:41:33](https://lobste.rs/s/qiagr8/bash_bash_with_classes) - [Bash++: Bash with Classes](https://bpp.sh/)
* [2025-02-20, 20:40:01](https://lobste.rs/s/adk7dp/what_is_wrong_with_architecture_internet) - [What is wrong with the architecture of the Internet?](https://ouroboros.rocks/blog/2022/02/12/what-is-wrong-with-the-architecture-of-the-internet/)
* [2025-02-20, 17:49:41](https://news.ycombinator.com/item?id=43117861) - [Ancient switch to soft food gave us overbite–the ability to pronounce 'f's,'v'](https://www.science.org/content/article/ancient-switch-soft-food-gave-us-overbite-and-ability-pronounce-f-s-and-v-s)
* [2025-02-20, 17:37:12](https://lobste.rs/s/zsngat/announcing_rust_1_85_0_rust_2024) - [Announcing Rust 1.85.0 and Rust 2024](https://blog.rust-lang.org/2025/02/20/Rust-1.85.0.html)
* [2025-02-20, 17:27:00](https://soylentnews.org/article.pl?sid=25/02/20/1249208&from=rss) - [Scientists Use Crystals to Cram Terabytes of Data Into Millimeter-Sized Memory](https://soylentnews.org/article.pl?sid=25/02/20/1249208&from=rss)
* [2025-02-20, 13:27:56](https://lobste.rs/s/7cbgyr/ai_vs_extra_minute_shower) - [AI vs. an extra minute in the shower](https://kmaasrud.com/blog/ai-vs-shower.html)
* [2025-02-20, 12:45:00](https://soylentnews.org/article.pl?sid=25/02/20/1244255&from=rss) - [Noise-Cancelling Headphones Possible Source of Hearing Problems](https://soylentnews.org/article.pl?sid=25/02/20/1244255&from=rss)
* [2025-02-20, 11:18:36](https://lobste.rs/s/sm7pk7/ipv6_transition) - [The IPv6 transition](https://blog.apnic.net/2024/10/22/the-ipv6-transition/)
* [2025-02-20, 07:53:00](https://soylentnews.org/article.pl?sid=25/02/17/1613236&from=rss) - [Scientists Just Discovered ‘Quipu,’ the New Largest Structure in Our Cosmos](https://soylentnews.org/article.pl?sid=25/02/17/1613236&from=rss)
* [2025-02-20, 03:10:00](https://soylentnews.org/article.pl?sid=25/02/19/033237&from=rss) - [Arm Poaching Talent to Produce Their Own Chips](https://soylentnews.org/article.pl?sid=25/02/19/033237&from=rss)
* [2025-02-19, 22:23:00](https://soylentnews.org/article.pl?sid=25/02/18/224256&from=rss) - [Scented Products Cause Indoor Air Pollution on Par With Car Exhaust](https://soylentnews.org/article.pl?sid=25/02/18/224256&from=rss)
* [2025-02-19, 18:54:00](https://soylentnews.org/meta/article.pl?sid=25/02/19/1852221&from=rss) - [SITE PROBLEMS](https://soylentnews.org/meta/article.pl?sid=25/02/19/1852221&from=rss)
* [2025-02-19, 17:41:00](https://soylentnews.org/article.pl?sid=25/02/18/220237&from=rss) - [Record-Breaking Neutrino is Most Energetic Ever Detected](https://soylentnews.org/article.pl?sid=25/02/18/220237&from=rss)
* [2025-02-19, 12:55:00](https://soylentnews.org/article.pl?sid=25/02/18/0412247&from=rss) - [Open Source Maintainers Are Feeling The Squeeze](https://soylentnews.org/article.pl?sid=25/02/18/0412247&from=rss)
* [2025-02-19, 08:10:00](https://soylentnews.org/article.pl?sid=25/02/18/043200&from=rss) - [AI Study: AI Can Clone Itself Under the Right Conditions](https://soylentnews.org/article.pl?sid=25/02/18/043200&from=rss)
* [2025-02-19, 03:24:00](https://soylentnews.org/article.pl?sid=25/02/19/0312225&from=rss) - [New OpenSSH Flaws Enable Man-in-the-Middle and DoS Attacks](https://soylentnews.org/article.pl?sid=25/02/19/0312225&from=rss)
* [2025-02-18, 21:42:00](https://soylentnews.org/article.pl?sid=25/02/17/166228&from=rss) - [Chinese GPUs Surpass Nvidia Chips by Nearly Tenfold in Supercomputer Simulation](https://soylentnews.org/article.pl?sid=25/02/17/166228&from=rss)
* [2025-02-18, 18:34:23](https://news.ycombinator.com/item?id=43093360) - [Can You Lose Your Native Tongue? (2024)](https://www.nytimes.com/2024/05/14/magazine/native-language-loss.html)
* [2025-02-18, 16:52:00](https://soylentnews.org/article.pl?sid=25/02/17/164215&from=rss) - [New Book-Sorting Algorithm Almost Reaches Perfection](https://soylentnews.org/article.pl?sid=25/02/17/164215&from=rss)
* [2025-02-18, 14:09:52](https://news.ycombinator.com/item?id=43089646) - [Cot: The Rust web framework for lazy developers](https://cot.rs/)
* [2025-02-18, 12:04:00](https://soylentnews.org/article.pl?sid=25/02/17/1349249&from=rss) - [EU Bans Bisphenol A From Contact With Food](https://soylentnews.org/article.pl?sid=25/02/17/1349249&from=rss)
* [2025-02-18, 09:36:30](https://news.ycombinator.com/item?id=43087779) - [Reality has a surprising amount of detail (2017)](http://johnsalvatier.org/blog/2017/reality-has-a-surprising-amount-of-detail)
* [2025-02-18, 07:19:00](https://soylentnews.org/article.pl?sid=25/02/17/1343225&from=rss) - [Targeting Amino Acids to Search for Life on Mars](https://soylentnews.org/article.pl?sid=25/02/17/1343225&from=rss)
* [2025-02-18, 02:29:00](https://soylentnews.org/politics/article.pl?sid=25/02/16/203240&from=rss) - [DOGE as a National Cyberattack](https://soylentnews.org/politics/article.pl?sid=25/02/16/203240&from=rss)
* [2025-02-18, 01:05:37](https://news.ycombinator.com/item?id=43084938) - [All Is Unfinished: Henri Bergson's philosophy for our times](https://www.thenation.com/article/culture/henri-bergson-biography/)
* [2025-02-17, 20:44:00](https://soylentnews.org/article.pl?sid=25/02/16/1956214&from=rss) - [Octet Of ESP32s Lets You See WiFi Like Never Before](https://soylentnews.org/article.pl?sid=25/02/16/1956214&from=rss)
* [2025-02-17, 16:02:00](https://soylentnews.org/article.pl?sid=25/02/16/1951215&from=rss) - [Women Speak Some 3000ish Words More Per Day Than Men](https://soylentnews.org/article.pl?sid=25/02/16/1951215&from=rss)
* [2025-02-17, 11:15:00](https://soylentnews.org/article.pl?sid=25/02/16/1816252&from=rss) - [Wiggling Ears May Have Once Helped Us Hear](https://soylentnews.org/article.pl?sid=25/02/16/1816252&from=rss)
* [2025-02-17, 06:23:00](https://soylentnews.org/article.pl?sid=25/02/16/1348230&from=rss) - [AUKUS Blasts Holes In Lockbit's Bulletproof Hosting Provider](https://soylentnews.org/article.pl?sid=25/02/16/1348230&from=rss)
* [2025-02-17, 01:38:00](https://soylentnews.org/article.pl?sid=25/02/16/1342231&from=rss) - [Ignorance Bliss When You’Re Drowning In Information](https://soylentnews.org/article.pl?sid=25/02/16/1342231&from=rss)
