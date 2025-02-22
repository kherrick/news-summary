# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Advanced Technologies

* [Strategic Wealth Accumulation Under Transformative AI Expectations](https://arxiv.org/abs/2502.11264) ([comments](https://news.ycombinator.com/item?id=43136428))

* [OpenAI Bans Chinese Accounts Using ChatGPT To Edit Code For Social Media Surveillance](https://tech.slashdot.org/story/25/02/21/2356205/openai-bans-chinese-accounts-using-chatgpt-to-edit-code-for-social-media-surveillance?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43132964))

* [Large Language Diffusion Models](https://arxiv.org/abs/2502.09992) ([comments](https://lobste.rs/s/ibx3dt/large_language_diffusion_models))

* [DeepSeek To Share Some AI Model Code](https://news.slashdot.org/story/25/02/21/1842227/deepseek-to-share-some-ai-model-code?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://github.com/abeisgoat/slime_os))

* [AI Study: AI Can Clone Itself Under the Right Conditions](https://soylentnews.org/article.pl?sid=25/02/18/043200&from=rss) ([comments](https://news.ycombinator.com/item?id=43085665))

## Innovation and Business

* [California Nominates Steve Jobs for Its American Innovation $1 Coin](https://www.gov.ca.gov/2025/02/19/california-nominates-steve-jobs-for-its-american-innovation-coin-1-coin-to-be-produced-by-u-s-mint/) ([comments](https://news.ycombinator.com/item?id=43135909))

* [How Swift's server support powers Things Cloud](https://swift.org/blog/how-swifts-server-support-powers-things-cloud/) ([comments](https://lobste.rs/s/ncy6sm/how_swift_s_server_support_powers_things))

* [Massdriver (YC W22): Self-serve cloud infra without the red tape](https://news.ycombinator.com/item?id=43129301) ([comments](https://news.ycombinator.com/item?id=43129944))

## Science and Space

* [India's 'Human Calculator Kid' Shatters 6 World Records In a Single Day](https://science.slashdot.org/story/25/02/21/2125209/indias-human-calculator-kid-shatters-6-world-records-in-a-single-day?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43130546))

* [Nyx Space and Rust Power Firefly's Blue Ghost Lunar Landing](https://nyxspace.com/blog/2025/02/21/nyx-space-and-rust-power-fireflys-blue-ghost-lunar-landing/) ([comments](https://lobste.rs/s/9a3noh/nyx_space_rust_power_firefly_s_blue_ghost))

* [Scientists Use Crystals to Cram Terabytes of Data Into Millimeter-Sized Memory](https://soylentnews.org/article.pl?sid=25/02/20/1249208&from=rss) ([comments](https://news.ycombinator.com/item?id=43085665))

## Technology and Software

* [SVDQuant+NVFP4: 4× Smaller, 3× Faster FLUX with 16-bit Quality on Blackwell GPUs](https://hanlab.mit.edu/blog/svdquant-nvfp4) ([comments](https://news.ycombinator.com/item?id=43134907))

* [Sparse Voxels Rasterization: Real-Time High-Fidelity Radiance Field Rendering](https://svraster.github.io/) ([comments](https://news.ycombinator.com/item?id=43132964))

* [Start a computer club in the place that you live](https://startacomputer.club/) ([comments](https://news.ycombinator.com/item?id=43135176))

* [Chromium Ozone/Wayland: The Last Mile Stretch](https://nickdiego.dev/blog/chromium-ozone-wayland-the-last-mile-stretch/) ([comments](https://news.ycombinator.com/item?id=43085665))

## Health and Society

* [Paxlovid: You'd have expected more](https://www.science.org/content/blog-post/paxlovid-you-d-have-expected-more) ([comments](https://news.ycombinator.com/item?id=43135027))

* [Noise-Cancelling Headphones Possible Source of Hearing Problems](https://soylentnews.org/article.pl?sid=25/02/20/1244255&from=rss) ([comments](https://news.ycombinator.com/item?id=43127944))

* [Burning in Woman's Legs Turned Out to be Slug Parasites Migrating to Her Brain](https://soylentnews.org/article.pl?sid=25/02/20/131244&from=rss) ([comments](https://news.ycombinator.com/item?id=43085665))

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

* [2025-02-22, 05:48:10](https://news.ycombinator.com/item?id=43136428) - [Strategic Wealth Accumulation Under Transformative AI Expectations](https://arxiv.org/abs/2502.11264)
* [2025-02-22, 03:48:05](https://news.ycombinator.com/item?id=43135909) - [California Nominates Steve Jobs for Its American Innovation $1 Coin](https://www.gov.ca.gov/2025/02/19/california-nominates-steve-jobs-for-its-american-innovation-coin-1-coin-to-be-produced-by-u-s-mint/)
* [2025-02-22, 03:48:00](https://soylentnews.org/article.pl?sid=25/02/21/0429228&from=rss) - [DRAM and NAND Prices Are Expected to Rise in the Second Half of 2025](https://soylentnews.org/article.pl?sid=25/02/21/0429228&from=rss)
* [2025-02-22, 03:30:00](https://tech.slashdot.org/story/25/02/22/0048209/mark-zuckerbergs-makeover-didnt-make-people-like-him-study-shows?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Mark Zuckerberg's Makeover Didn't Make People Like Him, Study Shows](https://tech.slashdot.org/story/25/02/22/0048209/mark-zuckerbergs-makeover-didnt-make-people-like-him-study-shows?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-22, 02:33:00](https://science.slashdot.org/story/25/02/22/0232239/scientists-question-microsofts-quantum-computing-claims?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Scientists Question Microsoft's Quantum Computing Claims](https://science.slashdot.org/story/25/02/22/0232239/scientists-question-microsofts-quantum-computing-claims?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-22, 02:08:11](https://news.ycombinator.com/item?id=43135382) - [Who needs a sneaker bot when AI can hallucinate a win for you?](https://www.eql.com/media/sneaker-bot-ai-error)
* [2025-02-22, 02:04:53](https://lobste.rs/s/ncy6sm/how_swift_s_server_support_powers_things) - [How Swift's server support powers Things Cloud](https://swift.org/blog/how-swifts-server-support-powers-things-cloud/)
* [2025-02-22, 01:30:18](https://news.ycombinator.com/item?id=43135176) - [Start a computer club in the place that you live (2023)](https://startacomputer.club/)
* [2025-02-22, 01:30:00](https://slashdot.org/story/25/02/22/006233/data-is-very-valuable-just-dont-ask-us-to-measure-it-leaders-say?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Data Is Very Valuable, Just Don't Ask Us To Measure It, Leaders Say](https://slashdot.org/story/25/02/22/006233/data-is-very-valuable-just-dont-ask-us-to-measure-it-leaders-say?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-22, 01:27:08](https://lobste.rs/s/02778a/nyx_space_rust_power_firefly_s_blue_ghost) - [Nyx Space and Rust Power Firefly's Blue Ghost Lunar Landing](https://nyxspace.com/blog/2025/02/21/nyx-space-and-rust-power-fireflys-blue-ghost-lunar-landing/)
* [2025-02-22, 01:05:53](https://news.ycombinator.com/item?id=43135027) - [Paxlovid: You'd have expected more](https://www.science.org/content/blog-post/paxlovid-you-d-have-expected-more)
* [2025-02-22, 00:50:00](https://hardware.slashdot.org/story/25/02/22/002225/asus-continues-fragrant-device-trend-with-an-aromatic-mouse?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Asus Continues Fragrant Device Trend With an Aromatic Mouse](https://hardware.slashdot.org/story/25/02/22/002225/asus-continues-fragrant-device-trend-with-an-aromatic-mouse?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-22, 00:46:18](https://news.ycombinator.com/item?id=43134907) - [SVDQuant+NVFP4: 4× Smaller, 3× Faster FLUX with 16-bit Quality on Blackwell GPUs](https://hanlab.mit.edu/blog/svdquant-nvfp4)
* [2025-02-22, 00:15:30](https://lobste.rs/s/ypu9f8/start_computer_club) - [START A COMPUTER CLUB](https://startacomputer.club/)
* [2025-02-22, 00:10:00](https://tech.slashdot.org/story/25/02/21/2356205/openai-bans-chinese-accounts-using-chatgpt-to-edit-code-for-social-media-surveillance?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [OpenAI Bans Chinese Accounts Using ChatGPT To Edit Code For Social Media Surveillance](https://tech.slashdot.org/story/25/02/21/2356205/openai-bans-chinese-accounts-using-chatgpt-to-edit-code-for-social-media-surveillance?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-21, 23:30:00](https://slashdot.org/story/25/02/21/2157258/the-protesters-who-want-to-ban-agi-before-it-even-exists?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [The Protesters Who Want To Ban AGI Before It Even Exists](https://slashdot.org/story/25/02/21/2157258/the-protesters-who-want-to-ban-agi-before-it-even-exists?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-21, 23:01:00](https://soylentnews.org/article.pl?sid=25/02/20/181218&from=rss) - [12VHPWR Adapters Sporting Heatsinks and Thermal Pads Show How Problematic the Connector Is](https://soylentnews.org/article.pl?sid=25/02/20/181218&from=rss)
* [2025-02-21, 22:50:00](https://hardware.slashdot.org/story/25/02/21/2143227/the-gsa-is-shutting-down-its-ev-chargers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [The GSA Is Shutting Down Its EV Chargers](https://hardware.slashdot.org/story/25/02/21/2143227/the-gsa-is-shutting-down-its-ev-chargers?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-21, 22:49:37](https://lobste.rs/s/9a3noh/nixos_power_vm_tests) - [NixOS: the power of VM tests](https://bmcgee.ie/posts/2025/02/nixos-the-power-of-vm-tests/)
* [2025-02-21, 22:10:00](https://slashdot.org/story/25/02/21/2131244/openai-plans-to-shift-compute-needs-from-microsoft-to-softbank?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [OpenAI Plans To Shift Compute Needs From Microsoft To SoftBank](https://slashdot.org/story/25/02/21/2131244/openai-plans-to-shift-compute-needs-from-microsoft-to-softbank?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-21, 21:26:00](https://science.slashdot.org/story/25/02/21/2125209/indias-human-calculator-kid-shatters-6-world-records-in-a-single-day?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [India's 'Human Calculator Kid' Shatters 6 World Records In a Single Day](https://science.slashdot.org/story/25/02/21/2125209/indias-human-calculator-kid-shatters-6-world-records-in-a-single-day?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-21, 21:22:55](https://news.ycombinator.com/item?id=43133174) - [20 years working on the same software product](https://successfulsoftware.net/2025/02/21/20-years-working-on-the-same-software-product/)
* [2025-02-21, 21:06:05](https://news.ycombinator.com/item?id=43132964) - [Sparse Voxels Rasterization: Real-Time High-Fidelity Radiance Field Rendering](https://svraster.github.io/)
* [2025-02-21, 20:22:57](https://news.ycombinator.com/item?id=43132482) - [Show HN: Slime OS – An open-source app launcher for RP2040 based devices](https://github.com/abeisgoat/slime_os)
* [2025-02-21, 20:09:32](https://news.ycombinator.com/item?id=43132336) - [The Ren'Py Visual Novel Engine](https://www.renpy.org/)
* [2025-02-21, 19:45:18](https://lobste.rs/s/oxkl4d/open_letter_browser_os_makers) - [Open letter to browser and OS makers](https://medium.com/@boblord/open-letter-to-browser-and-os-makers-12d65aa314f7)
* [2025-02-21, 19:34:37](https://news.ycombinator.com/item?id=43131902) - [Yocto, RockPi and SBOMs: Building modern embedded Linux images](https://vpetersson.com/2025/02/21/yocto-rockpi-and-sboms.html)
* [2025-02-21, 19:30:14](https://lobste.rs/s/ibx3dt/large_language_diffusion_models) - [Large Language Diffusion Models](https://arxiv.org/abs/2502.09992)
* [2025-02-21, 19:10:01](https://lobste.rs/s/6zezmb/depth_is_all_you_need_how_antithesis) - [Depth is all you need: how Antithesis crushes Gradius](https://antithesis.com/blog/2025/gradius/)
* [2025-02-21, 18:46:58](https://lobste.rs/s/w668mg/gdscript_notes) - [GDScript Notes](https://wiki.alopex.li/GDScriptNotes)
* [2025-02-21, 18:41:00](https://news.slashdot.org/story/25/02/21/1842227/deepseek-to-share-some-ai-model-code?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [DeepSeek To Share Some AI Model Code](https://news.slashdot.org/story/25/02/21/1842227/deepseek-to-share-some-ai-model-code?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-21, 18:27:00](https://news.ycombinator.com/item?id=43131059) - [Suckless.org: software that sucks less](https://suckless.org/)
* [2025-02-21, 18:22:59](https://news.ycombinator.com/item?id=43131017) - [Richard Feynman's blackboard at the time of his death (1988)](https://digital.archives.caltech.edu/collections/Images/1.10-29/)
* [2025-02-21, 18:17:00](https://soylentnews.org/article.pl?sid=25/02/20/169239&from=rss) - [Intel's Head of Datacenter and AI Unit Leaves to Lead Nokia](https://soylentnews.org/article.pl?sid=25/02/20/169239&from=rss)
* [2025-02-21, 17:46:15](https://news.ycombinator.com/item?id=43130546) - [Why Ruby on Rails still matters](https://www.contraption.co/rails-versus-nextjs/)
* [2025-02-21, 17:44:13](https://lobste.rs/s/mazfvy/neut_programming_language) - [Neut Programming Language](https://vekatze.github.io/neut/overview.html)
* [2025-02-21, 17:40:00](https://it.slashdot.org/story/25/02/21/1740213/hp-ends-forced-15-minute-wait-times-for-customer-support?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [HP Ends Forced 15-Minute Wait Times for Customer Support](https://it.slashdot.org/story/25/02/21/1740213/hp-ends-forced-15-minute-wait-times-for-customer-support?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-21, 17:15:03](https://news.ycombinator.com/item?id=43130143) - [Bybit loses $1.5B in hack but can cover loss, CEO confirms](https://www.tradingview.com/news/coindesk:cda1c390e094b:0-bybit-ceo-confirms-exchange-was-hacked-for-1-46b-says-his-firm-can-cover-the-loss/)
* [2025-02-21, 17:00:17](https://news.ycombinator.com/item?id=43129944) - [Posh (YC W22) Is Hiring](https://www.ycombinator.com/companies/posh/jobs/XeXjwIu-energy-analysis-modeling-engineer)
* [2025-02-21, 16:57:13](https://news.ycombinator.com/item?id=43129887) - [DeepDive in everything of Llama3: revealing detailed insights and implementation](https://github.com/therealoliver/Deepdive-llama3-from-scratch)
* [2025-02-21, 16:45:00](https://it.slashdot.org/story/25/02/21/1630207/bybit-ceo-confirms-exchange-was-hacked-for-146b-says-his-firm-can-cover-the-loss?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Bybit CEO Confirms Exchange Was Hacked for $1.46B, Says His Firm Can Cover The Loss](https://it.slashdot.org/story/25/02/21/1630207/bybit-ceo-confirms-exchange-was-hacked-for-146b-says-his-firm-can-cover-the-loss?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-21, 16:27:54](https://news.ycombinator.com/item?id=43129439) - [I found a backdoor into my bed](https://trufflesecurity.com/blog/removing-jeff-bezos-from-my-bed)
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
* [2025-02-21, 13:32:00](https://soylentnews.org/article.pl?sid=25/02/20/165216&from=rss) - [What Would Happen If a (Small) Black Hole Passed Through Your Body ?](https://soylentnews.org/article.pl?sid=25/02/20/165216&from=rss)
* [2025-02-21, 13:02:49](https://lobste.rs/s/2p6tfp/smallest_go_binary_5kb) - [The Smallest Go Binary (5KB)](https://totallygamerjet.hashnode.dev/the-smallest-go-binary-5kb)
* [2025-02-21, 12:41:22](https://lobste.rs/s/nodkpe/chatting_with_designer_monolisa) - [Chatting with the Designer of MonoLisa](https://joshleeb.com/posts/monolisa-chat.html)
* [2025-02-21, 12:31:10](https://lobste.rs/s/zcsxzn/first_wasm_ocaml_release_is_out) - [The First Wasm_of_ocaml Release is Out](https://tarides.com/blog/2025-02-19-the-first-wasm-of-ocaml-release-is-out/)
* [2025-02-21, 10:46:09](https://lobste.rs/s/wntsxu/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/wntsxu/what_are_you_doing_this_weekend)
* [2025-02-21, 09:55:24](https://lobste.rs/s/rhydqn/unix_v2_beta_resurrected) - [UNIX V2 \"Beta\" Resurrected](https://www.tuhs.org/pipermail/tuhs/2025-February/031420.html)
* [2025-02-21, 08:56:32](https://lobste.rs/s/u4eidn/running_ml_models_elixir_using_pythonx) - [Running ML models in Elixir using Pythonx](https://samrat.me/running-ml-models-in-elixir-using-pythonx/)
* [2025-02-21, 08:52:57](https://lobste.rs/s/wooe50/databases_are_endgame_for_data_oriented) - [Databases are the endgame for data-oriented design](https://spacetimedb.com/blog/databases-and-data-oriented-design)
* [2025-02-21, 07:44:00](https://soylentnews.org/article.pl?sid=25/02/20/137208&from=rss) - [A Single Protein May Have Helped Shape the Emergence of Spoken Language](https://soylentnews.org/article.pl?sid=25/02/20/137208&from=rss)
* [2025-02-21, 07:40:41](https://lobste.rs/s/s3re6r/docker_limits_unauthenticated_pulls_10) - [Docker limits unauthenticated pulls to 10/hr/ip from Docker Hub, from March 1](https://docs.docker.com/docker-hub/usage/)
* [2025-02-21, 06:04:09](https://lobste.rs/s/qromax/chromium_ozone_wayland_last_mile_stretch) - [Chromium Ozone/Wayland: The Last Mile Stretch](https://nickdiego.dev/blog/chromium-ozone-wayland-the-last-mile-stretch/)
* [2025-02-21, 02:59:00](https://soylentnews.org/article.pl?sid=25/02/20/131244&from=rss) - [Burning in Woman's Legs Turned Out to be Slug Parasites Migrating to Her Brain](https://soylentnews.org/article.pl?sid=25/02/20/131244&from=rss)
* [2025-02-21, 00:32:19](https://lobste.rs/s/ymrfir/crustacean_for_lobste_rs) - [Crustacean for Lobste.rs](https://crustacean.optionalstudio.work)
* [2025-02-20, 22:12:00](https://soylentnews.org/article.pl?sid=25/02/20/1255237&from=rss) - [10 Years on After 'Data and Goliath' Warned of Data Collection](https://soylentnews.org/article.pl?sid=25/02/20/1255237&from=rss)
* [2025-02-20, 20:41:33](https://lobste.rs/s/qiagr8/bash_bash_with_classes) - [Bash++: Bash with Classes](https://bpp.sh/)
* [2025-02-20, 17:37:12](https://lobste.rs/s/zsngat/announcing_rust_1_85_0_rust_2024) - [Announcing Rust 1.85.0 and Rust 2024](https://blog.rust-lang.org/2025/02/20/Rust-1.85.0.html)
* [2025-02-20, 17:27:00](https://soylentnews.org/article.pl?sid=25/02/20/1249208&from=rss) - [Scientists Use Crystals to Cram Terabytes of Data Into Millimeter-Sized Memory](https://soylentnews.org/article.pl?sid=25/02/20/1249208&from=rss)
* [2025-02-20, 13:27:56](https://lobste.rs/s/7cbgyr/ai_vs_extra_minute_shower) - [AI vs. an extra minute in the shower](https://kmaasrud.com/blog/ai-vs-shower.html)
* [2025-02-20, 12:45:00](https://soylentnews.org/article.pl?sid=25/02/20/1244255&from=rss) - [Noise-Cancelling Headphones Possible Source of Hearing Problems](https://soylentnews.org/article.pl?sid=25/02/20/1244255&from=rss)
* [2025-02-20, 07:53:00](https://soylentnews.org/article.pl?sid=25/02/17/1613236&from=rss) - [Scientists Just Discovered ‘Quipu,’ the New Largest Structure in Our Cosmos](https://soylentnews.org/article.pl?sid=25/02/17/1613236&from=rss)
* [2025-02-20, 03:10:00](https://soylentnews.org/article.pl?sid=25/02/19/033237&from=rss) - [Arm Poaching Talent to Produce Their Own Chips](https://soylentnews.org/article.pl?sid=25/02/19/033237&from=rss)
* [2025-02-19, 22:23:00](https://soylentnews.org/article.pl?sid=25/02/18/224256&from=rss) - [Scented Products Cause Indoor Air Pollution on Par With Car Exhaust](https://soylentnews.org/article.pl?sid=25/02/18/224256&from=rss)
* [2025-02-19, 18:54:00](https://soylentnews.org/meta/article.pl?sid=25/02/19/1852221&from=rss) - [SITE PROBLEMS](https://soylentnews.org/meta/article.pl?sid=25/02/19/1852221&from=rss)
* [2025-02-19, 17:41:00](https://soylentnews.org/article.pl?sid=25/02/18/220237&from=rss) - [Record-Breaking Neutrino is Most Energetic Ever Detected](https://soylentnews.org/article.pl?sid=25/02/18/220237&from=rss)
* [2025-02-19, 12:55:00](https://soylentnews.org/article.pl?sid=25/02/18/0412247&from=rss) - [Open Source Maintainers Are Feeling The Squeeze](https://soylentnews.org/article.pl?sid=25/02/18/0412247&from=rss)
* [2025-02-19, 08:10:00](https://soylentnews.org/article.pl?sid=25/02/18/043200&from=rss) - [AI Study: AI Can Clone Itself Under the Right Conditions](https://soylentnews.org/article.pl?sid=25/02/18/043200&from=rss)
* [2025-02-19, 03:24:00](https://soylentnews.org/article.pl?sid=25/02/19/0312225&from=rss) - [New OpenSSH Flaws Enable Man-in-the-Middle and DoS Attacks](https://soylentnews.org/article.pl?sid=25/02/19/0312225&from=rss)
* [2025-02-18, 21:42:00](https://soylentnews.org/article.pl?sid=25/02/17/166228&from=rss) - [Chinese GPUs Surpass Nvidia Chips by Nearly Tenfold in Supercomputer Simulation](https://soylentnews.org/article.pl?sid=25/02/17/166228&from=rss)
* [2025-02-18, 20:47:51](https://news.ycombinator.com/item?id=43094895) - [A vending machine, on the internet](https://threekindwords.com/blog/vending-machine-on-the-internet/)
* [2025-02-18, 18:34:23](https://news.ycombinator.com/item?id=43093360) - [Can you lose your native tongue? (2024)](https://www.nytimes.com/2024/05/14/magazine/native-language-loss.html)
* [2025-02-18, 16:52:00](https://soylentnews.org/article.pl?sid=25/02/17/164215&from=rss) - [New Book-Sorting Algorithm Almost Reaches Perfection](https://soylentnews.org/article.pl?sid=25/02/17/164215&from=rss)
* [2025-02-18, 14:47:10](https://news.ycombinator.com/item?id=43090077) - [Math Academy, part 1: My eigenvector embarassment](https://frankhecker.com/2025/02/08/math-academy-part-1/)
* [2025-02-18, 14:09:52](https://news.ycombinator.com/item?id=43089646) - [Cot: The Rust web framework for lazy developers](https://cot.rs/)
* [2025-02-18, 13:16:38](https://news.ycombinator.com/item?id=43089093) - [Google Titans Model Explained: The Future of Memory-Driven AI Architectures](https://medium.com/@sahin.samia/google-titans-model-explained-the-future-of-memory-driven-ai-architectures-109ed6b4a7d8)
* [2025-02-18, 12:58:30](https://news.ycombinator.com/item?id=43088964) - [The marketing genius of Bryan Johnson](https://www.petecodes.io/marketing-genius-of-bryan-johnson/)
* [2025-02-18, 12:28:18](https://news.ycombinator.com/item?id=43088735) - [Augurs demo](https://demo.augu.rs/)
* [2025-02-18, 12:04:00](https://soylentnews.org/article.pl?sid=25/02/17/1349249&from=rss) - [EU Bans Bisphenol A From Contact With Food](https://soylentnews.org/article.pl?sid=25/02/17/1349249&from=rss)
* [2025-02-18, 09:36:30](https://news.ycombinator.com/item?id=43087779) - [Reality has a surprising amount of detail (2017)](http://johnsalvatier.org/blog/2017/reality-has-a-surprising-amount-of-detail)
* [2025-02-18, 07:19:00](https://soylentnews.org/article.pl?sid=25/02/17/1343225&from=rss) - [Targeting Amino Acids to Search for Life on Mars](https://soylentnews.org/article.pl?sid=25/02/17/1343225&from=rss)
* [2025-02-18, 03:04:19](https://news.ycombinator.com/item?id=43085665) - [Surface-Stable Fractal Dither on Playdate](https://aras-p.info/blog/2025/02/09/Surface-Stable-Fractal-Dither-on-Playdate/)
* [2025-02-18, 02:29:00](https://soylentnews.org/politics/article.pl?sid=25/02/16/203240&from=rss) - [DOGE as a National Cyberattack](https://soylentnews.org/politics/article.pl?sid=25/02/16/203240&from=rss)
