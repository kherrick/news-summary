# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Machine Learning

* [OpenAI Expands ChatGPT Memory To Draw on Full Conversation History](https://slashdot.org/story/25/04/10/1727255/openai-expands-chatgpt-memory-to-draw-on-full-conversation-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43646601))

* [Controlling Language and Diffusion Models by Transporting Activations](https://machinelearning.apple.com/research/transporting-activations) ([comments](https://news.ycombinator.com/item?id=43646466))

* [Meta Says Llama 4 Targets Left-Leaning Bias](https://tech.slashdot.org/story/25/04/10/1628209/meta-says-llama-4-targets-left-leaning-bias?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43646219))

* [BTrees, Inverted Indices, and a Model for Full Text Search](https://ohadravid.github.io/posts/2025-04-08-btrees-and-mental-models/) ([comments](https://lobste.rs/s/cmrgzh/btrees_inverted_indices_model_for_full))

## Programming and Tools

* [The YAML Exponent Problem causing chaos in your config files](https://www.brautaset.org/posts/yaml-exponent-problem.html) ([comments](https://lobste.rs/s/m2oe0k/yaml_exponent_problem_causing_chaos_your))

* [ELD: A new open-source embedded linker tool for embedded systems](https://www.qualcomm.com/developer/blog/2025/04/eld-new-open-source-embedded-linker-tool-for-embedded-systems) ([comments](https://news.ycombinator.com/item?id=43644966))

* [Lisp Programs Don't Have Parentheses](https://funcall.blogspot.com/2025/04/lisp-programs-dont-have-parentheses.html) ([comments](https://lobste.rs/s/itljbj/lisp_programs_don_t_have_parentheses))

* [Rust RFC 3446 - Introduce the Store API for great good](https://github.com/matthieu-m/rfcs/blob/store/text/3446-store.md) ([comments](https://lobste.rs/s/xkhyef/rust_rfc_3446_introduce_store_api_for))

## Technology and Science

* [Starving Dolphins In Florida Traced To Algae Bloom Fueled By Human Waste](https://soylentnews.org/article.pl?sid=25/04/09/154256&amp;from=rss) ([comments](https://news.ycombinator.com/item?id=43645331))

* [Scientists Bring Dire Wolf Back From Extinction... Almost](https://soylentnews.org/article.pl?sid=25/04/09/0034238&amp;from=rss) ([comments](https://lobste.rs/s/qot3es/having_fun_with_scamming_crypto_job))

* [Earth May Have Had a Ring System 466 Million Years Ago](https://soylentnews.org/article.pl?sid=25/04/07/0055209&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/04/09/152222&amp;from=rss))

* [A New Antifungal Drug Works in a Surprising Way](https://soylentnews.org/article.pl?sid=25/04/05/123257&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/04/05/0034237))

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

* [2025-04-10, 18:21:45](https://news.ycombinator.com/item?id=43646698) - [Demystifying the (Shebang): Kernel Adventures](https://crocidb.com/post/kernel-adventures/demystifying-the-shebang/)
* [2025-04-10, 18:11:34](https://news.ycombinator.com/item?id=43646601) - [Suffering-Oriented Programming (2012)](http://nathanmarz.com/blog/suffering-oriented-programming.html)
* [2025-04-10, 18:00:00](https://slashdot.org/story/25/04/10/1727255/openai-expands-chatgpt-memory-to-draw-on-full-conversation-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Expands ChatGPT Memory To Draw on Full Conversation History](https://slashdot.org/story/25/04/10/1727255/openai-expands-chatgpt-memory-to-draw-on-full-conversation-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-10, 17:58:02](https://news.ycombinator.com/item?id=43646466) - [Controlling Language and Diffusion Models by Transporting Activations](https://machinelearning.apple.com/research/transporting-activations)
* [2025-04-10, 17:39:49](https://lobste.rs/s/m2oe0k/yaml_exponent_problem_causing_chaos_your) - [The YAML Exponent Problem causing chaos in your config files](https://www.brautaset.org/posts/yaml-exponent-problem.html)
* [2025-04-10, 17:34:19](https://news.ycombinator.com/item?id=43646219) - [Big Book of R](https://www.bigbookofr.com/)
* [2025-04-10, 17:21:03](https://news.ycombinator.com/item?id=43646095) - [Garfield Minus Garfield](https://garfieldminusgarfield.net)
* [2025-04-10, 17:01:11](https://news.ycombinator.com/item?id=43645901) - [Legion Health (YC S21) is hiring engineers to rebuild psychiatry with AI](https://www.ycombinator.com/companies/legion-health/jobs/mqDWIWN-founding-engineer-build-ai-native-ops-for-mental-health-yc-s21-1m-arr)
* [2025-04-10, 17:00:00](https://tech.slashdot.org/story/25/04/10/1628209/meta-says-llama-4-targets-left-leaning-bias?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Says Llama 4 Targets Left-Leaning Bias](https://tech.slashdot.org/story/25/04/10/1628209/meta-says-llama-4-targets-left-leaning-bias?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-10, 16:38:00](https://soylentnews.org/article.pl?sid=25/04/09/154256&amp;from=rss) - [Starving Dolphins In Florida Traced To Algae Bloom Fueled By Human Waste](https://soylentnews.org/article.pl?sid=25/04/09/154256&amp;from=rss)
* [2025-04-10, 16:09:12](https://news.ycombinator.com/item?id=43645331) - [Blue Shield Data Breach (Google Ads)](https://news.blueshieldca.com/notice-of-data-breach)
* [2025-04-10, 16:00:00](https://entertainment.slashdot.org/story/25/04/10/1551222/china-to-restrict-us-film-releases?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China To Restrict US Film Releases](https://entertainment.slashdot.org/story/25/04/10/1551222/china-to-restrict-us-film-releases?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-10, 15:54:50](https://news.ycombinator.com/item?id=43645183) - [SDL2 for macOS 9 \&quot;rough draft\&quot;](https://macintoshgarden.org/apps/sdl2-macos-9-rough-draft)
* [2025-04-10, 15:51:35](https://lobste.rs/s/bnntrp/6_usability_improvements_gcc_15) - [6 usability improvements in GCC 15](https://developers.redhat.com/articles/2025/04/10/6-usability-improvements-gcc-15)
* [2025-04-10, 15:35:04](https://news.ycombinator.com/item?id=43644970) - [Why Tap a Wheel of Cheese?](https://www.cheeseprofessor.com/blog/cheese-wheel-tapping)
* [2025-04-10, 15:34:45](https://news.ycombinator.com/item?id=43644966) - [ELD: A new open-source embedded linker tool for embedded systems](https://www.qualcomm.com/developer/blog/2025/04/eld-new-open-source-embedded-linker-tool-for-embedded-systems)
* [2025-04-10, 15:00:00](https://tech.slashdot.org/story/25/04/10/1431235/metas-new-tech-wants-you-using-phones-in-theaters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta&apos;s New Tech Wants You Using Phones in Theaters](https://tech.slashdot.org/story/25/04/10/1431235/metas-new-tech-wants-you-using-phones-in-theaters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-10, 14:56:44](https://lobste.rs/s/wvefir/s_mcp_stands_for_security) - [The “S” in MCP Stands for Security](https://elenacross7.medium.com/%EF%B8%8F-the-s-in-mcp-stands-for-security-91407b33ed6b)
* [2025-04-10, 14:48:20](https://news.ycombinator.com/item?id=43644351) - [Show HN: Koreo – The platform engineering toolkit for Kubernetes](https://koreo.dev/)
* [2025-04-10, 14:30:54](https://news.ycombinator.com/item?id=43644179) - [Isaac Asimov describes how AI will liberate humans and their creativity (1992)](https://www.openculture.com/2025/04/isaac-asimov-describes-how-ai-will-liberate-humans-their-creativity.html)
* [2025-04-10, 14:16:36](https://lobste.rs/s/j10cbv/localhost_domains) - [.localhost domains](https://inclouds.space/localhost-domains)
* [2025-04-10, 14:12:44](https://news.ycombinator.com/item?id=43643968) - [Arroyo (YC W23) has been acquired by Cloudflare](https://www.arroyo.dev/blog/arroyo-is-joining-cloudflare)
* [2025-04-10, 14:05:00](https://news.slashdot.org/story/25/04/10/145225/gas-boiler-fittings-outnumbered-heat-pumps-by-15-to-one-in-uk-last-year---report?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gas Boiler Fittings Outnumbered Heat Pumps By 15 To One in UK Last Year - Report](https://news.slashdot.org/story/25/04/10/145225/gas-boiler-fittings-outnumbered-heat-pumps-by-15-to-one-in-uk-last-year---report?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-10, 14:03:54](https://news.ycombinator.com/item?id=43643886) - [Usability Improvements in GCC 15](https://developers.redhat.com/articles/2025/04/10/6-usability-improvements-gcc-15)
* [2025-04-10, 13:23:58](https://news.ycombinator.com/item?id=43643534) - [Busy Bar](https://busy.bar)
* [2025-04-10, 13:13:34](https://news.ycombinator.com/item?id=43643441) - [TVMC: Time-Varying Mesh Compression](https://github.com/SINRG-Lab/TVMC)
* [2025-04-10, 13:07:08](https://news.ycombinator.com/item?id=43643390) - [Sleep is essential – researchers are trying to work out why](https://www.nature.com/articles/d41586-025-00964-w)
* [2025-04-10, 12:59:54](https://news.ycombinator.com/item?id=43643343) - [Owning my own data, part 1: Integrating a self-hosted calendar solution](https://emilygorcenski.com/post/owning-my-own-data-part-1-integrating-a-self-hosted-calendar-solution/)
* [2025-04-10, 12:53:56](https://news.ycombinator.com/item?id=43643292) - [Elliptical Python Programming](https://susam.net/elliptical-python-programming.html)
* [2025-04-10, 12:39:34](https://news.ycombinator.com/item?id=43643197) - [The Curious Case of Jupiter Ace](https://nemanjatrifunovic.substack.com/p/the-curious-case-of-jupiter-ace)
* [2025-04-10, 12:11:25](https://lobste.rs/s/cmrgzh/btrees_inverted_indices_model_for_full) - [BTrees, Inverted Indices, and a Model for Full Text Search](https://ohadravid.github.io/posts/2025-04-08-btrees-and-mental-models/)
* [2025-04-10, 11:52:00](https://soylentnews.org/article.pl?sid=25/04/09/152222&amp;from=rss) - [How Do Bird Nests Stay Together? Researchers Unravel Entanglement Between Stiff, Straight Rods](https://soylentnews.org/article.pl?sid=25/04/09/152222&amp;from=rss)
* [2025-04-10, 11:45:00](https://slashdot.org/story/25/04/10/1141224/amazon-ceo-urges-startup-mentality-in-shareholder-letter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon CEO Urges &apos;Startup&apos; Mentality in Shareholder Letter](https://slashdot.org/story/25/04/10/1141224/amazon-ceo-urges-startup-mentality-in-shareholder-letter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-10, 10:47:37](https://lobste.rs/s/itljbj/lisp_programs_don_t_have_parentheses) - [Lisp Programs Don&apos;t Have Parentheses](https://funcall.blogspot.com/2025/04/lisp-programs-dont-have-parentheses.html)
* [2025-04-10, 09:09:03](https://news.ycombinator.com/item?id=43642123) - [Hacker News Hug of Deaf](https://susam.net/hn-bell.html)
* [2025-04-10, 09:00:00](https://apple.slashdot.org/story/25/04/10/0834223/trump-apple-building-in-china-is-unsustainable-could-exempt-some-companies-from-tariffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump: Apple Building in China is &apos;Unsustainable,&apos; Could Exempt Some Companies From Tariffs](https://apple.slashdot.org/story/25/04/10/0834223/trump-apple-building-in-china-is-unsustainable-could-exempt-some-companies-from-tariffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-10, 08:30:30](https://lobste.rs/s/qot3es/having_fun_with_scamming_crypto_job) - [Having Fun With a Scamming Crypto Job](https://nguyenhuythanh.com/posts/having-fun-with-a-scamming-crypto-job/)
* [2025-04-10, 08:07:47](https://lobste.rs/s/33ksrz/happy_18th_birthday_cuda) - [Happy 18th Birthday CUDA](https://thechipletter.substack.com/p/happy-18th-birthday-cuda)
* [2025-04-10, 07:33:54](https://news.ycombinator.com/item?id=43641576) - [Show HN: Pledge – A Lightweight Reactive Framework for Swift (No Rx Overhead)](https://github.com/gokulnair2001/Pledge)
* [2025-04-10, 07:11:37](https://news.ycombinator.com/item?id=43641469) - [Hunt for Red October 1990 (2016)](http://www.modelshipsinthecinema.com/2016/12/hunt-for-red-october-1990.html)
* [2025-04-10, 07:05:00](https://soylentnews.org/article.pl?sid=25/04/09/1157227&amp;from=rss) - [Another RTX 5090 Connector Melts Down, Reportedly Taking a PSU With It](https://soylentnews.org/article.pl?sid=25/04/09/1157227&amp;from=rss)
* [2025-04-10, 06:55:00](https://slashdot.org/story/25/04/10/0652258/bank-of-england-says-ai-software-could-create-market-crisis-for-profit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bank of England Says AI Software Could Create Market Crisis For Profit](https://slashdot.org/story/25/04/10/0652258/bank-of-england-says-ai-software-could-create-market-crisis-for-profit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-10, 06:23:46](https://lobste.rs/s/ifihs5/myst_graph_new_perspective_on_myst) - [The Myst Graph: A New Perspective on Myst](https://glthr.com/myst-graph-1)
* [2025-04-10, 06:23:27](https://lobste.rs/s/mc7ta1/y_combinator_explained_python) - [The Y Combinator Explained in Python](https://lptk.github.io/programming/2019/10/15/simple-essence-y-combinator.html)
* [2025-04-10, 05:43:05](https://lobste.rs/s/wmyspq/django_what_s_new_5_2) - [Django: what’s new in 5.2](https://adamj.eu/tech/2025/04/07/django-whats-new-5.2/)
* [2025-04-10, 03:00:00](https://tech.slashdot.org/story/25/04/10/0256257/lawmakers-are-skeptical-of-zuckerbergs-commitment-to-free-speech?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lawmakers Are Skeptical of Zuckerberg&apos;s Commitment To Free Speech](https://tech.slashdot.org/story/25/04/10/0256257/lawmakers-are-skeptical-of-zuckerbergs-commitment-to-free-speech?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-10, 02:50:46](https://lobste.rs/s/xkhyef/rust_rfc_3446_introduce_store_api_for) - [Rust RFC 3446 - Introduce the Store API for great good](https://github.com/matthieu-m/rfcs/blob/store/text/3446-store.md)
* [2025-04-10, 02:50:40](https://lobste.rs/s/8ckxrj/elliptical_python_programming) - [Elliptical Python Programming](https://susam.net/elliptical-python-programming.html)
* [2025-04-10, 02:18:00](https://soylentnews.org/article.pl?sid=25/04/09/0034238&amp;from=rss) - [Scientists Bring Dire Wolf Back From Extinction... Almost](https://soylentnews.org/article.pl?sid=25/04/09/0034238&amp;from=rss)
* [2025-04-10, 01:05:30](https://news.ycombinator.com/item?id=43639642) - [Colossus for Rapid Storage](https://cloud.google.com/blog/products/storage-data-transfer/how-the-colossus-stateful-protocol-benefits-rapid-storage)
* [2025-04-10, 00:11:00](https://entertainment.slashdot.org/story/25/04/10/0011250/microsoft-windows-95-reboot-chime-and-minecraft-soundtrack-inducted-into-national-recording-registry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Windows 95 Reboot Chime and Minecraft Soundtrack Inducted Into National Recording Registry](https://entertainment.slashdot.org/story/25/04/10/0011250/microsoft-windows-95-reboot-chime-and-minecraft-soundtrack-inducted-into-national-recording-registry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-09, 23:56:50](https://lobste.rs/s/ufkytf/purely_functional_sliding_window) - [Purely Functional Sliding Window Aggregation Algorithm](https://byorgey.github.io/blog/posts/2024/11/27/stacks-queues.html)
* [2025-04-09, 23:25:30](https://lobste.rs/s/zqqvms/async_from_scratch_1_what_s_future_anyway) - [Async from scratch 1: What&apos;s in a Future, anyway?](https://natkr.com/2025-04-10-async-from-scratch-1/)
* [2025-04-09, 22:29:28](https://lobste.rs/s/9s6mep/why_is_snapshot_isolation_not_enough) - [Why is Snapshot Isolation not enough?](http://concurrencyfreaks.blogspot.com/2023/12/why-is-snapshot-isolation-not-enough.html)
* [2025-04-09, 22:21:06](https://lobste.rs/s/0trtbx/git_withme_peer_peer_encrypted_ephemeral) - [git-withme - Peer-to-peer, encrypted, ephemeral Git collaboration (git daemon with encryption)](https://git.sr.ht/~meejah/git-withme)
* [2025-04-09, 21:37:32](https://lobste.rs/s/aoy99y/it_s_not_bad_they_told_me_coreboot) - [“It’s not that bad” they told me - Coreboot](https://lilysthings.org/blog/coreboot/)
* [2025-04-09, 21:36:46](https://lobste.rs/s/2ar8hu/visualizing_million_time_series_with) - [Visualizing a Million Time Series with the Density Line Chart](https://arxiv.org/pdf/1808.06019)
* [2025-04-09, 21:33:00](https://soylentnews.org/article.pl?sid=25/04/09/0031249&amp;from=rss) - [FreeDOS 1.4 Brings New Fixes and Features to Modern and Vintage DOS-Based PCs](https://soylentnews.org/article.pl?sid=25/04/09/0031249&amp;from=rss)
* [2025-04-09, 21:00:00](https://tech.slashdot.org/story/25/04/09/2034234/us-army-says-it-could-acquire-targets-faster-with-advanced-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Army Says It Could Acquire Targets Faster With &apos;Advanced AI&apos;](https://tech.slashdot.org/story/25/04/09/2034234/us-army-says-it-could-acquire-targets-faster-with-advanced-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-09, 20:46:24](https://lobste.rs/s/0zrxau/how_prime_video_cut_ui_latency_7_6x_by) - [How Prime Video Cut UI Latency 7.6x by Switching to Rust](https://analyticsindiamag.com/global-tech/how-prime-video-cut-ui-latency-7-6x-by-switching-to-rust/)
* [2025-04-09, 20:04:00](https://slashdot.org/story/25/04/09/203231/anthropic-launches-its-own-200-monthly-plan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Launches Its Own $200 Monthly Plan](https://slashdot.org/story/25/04/09/203231/anthropic-launches-its-own-200-monthly-plan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-09, 19:00:00](https://it.slashdot.org/story/25/04/09/1834225/wordpress-launches-ai-site-builder-amid-company-restructuring?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [WordPress Launches AI Site Builder Amid Company Restructuring](https://it.slashdot.org/story/25/04/09/1834225/wordpress-launches-ai-site-builder-amid-company-restructuring?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-09, 18:00:00](https://tech.slashdot.org/story/25/04/09/1717210/google-deepmind-has-a-weapon-in-the-ai-talent-wars-aggressive-noncompete-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google DeepMind Has a Weapon in the AI Talent Wars: Aggressive Noncompete Rules](https://tech.slashdot.org/story/25/04/09/1717210/google-deepmind-has-a-weapon-in-the-ai-talent-wars-aggressive-noncompete-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-09, 17:00:00](https://tech.slashdot.org/story/25/04/09/1512236/google-maps-is-launching-tools-to-help-cities-analyze-infrastructure-and-traffic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Maps is Launching Tools To Help Cities Analyze Infrastructure and Traffic](https://tech.slashdot.org/story/25/04/09/1512236/google-maps-is-launching-tools-to-help-cities-analyze-infrastructure-and-traffic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-09, 16:48:00](https://soylentnews.org/article.pl?sid=25/04/09/0030205&amp;from=rss) - [Blade Runners of LinkedIn Are Hunting for Replicants – One Em Dash at a Time](https://soylentnews.org/article.pl?sid=25/04/09/0030205&amp;from=rss)
* [2025-04-09, 14:34:46](https://lobste.rs/s/qpdvuh/barrelfish) - [barrelfish](https://github.com/BarrelfishOS/barrelfish)
* [2025-04-09, 13:47:22](https://lobste.rs/s/fwohal/man_pages_are_great_man_readers_are) - [Man pages are great, man readers are the problem](https://whynothugo.nl/journal/2025/04/09/man-pages-are-great-man-readers-are-the-problem/)
* [2025-04-09, 12:11:00](https://soylentnews.org/article.pl?sid=25/04/08/121246&amp;from=rss) - [April 7 — Reflections on Twenty Years of Git](https://soylentnews.org/article.pl?sid=25/04/08/121246&amp;from=rss)
* [2025-04-09, 11:53:55](https://lobste.rs/s/hnnrdn/facet_rust_reflection_serialization) - [facet: Rust reflection, serialization, deserialization — know the shape of your types](https://github.com/facet-rs/facet)
* [2025-04-09, 09:16:48](https://lobste.rs/s/tppp5b/openssh_10_0_released) - [OpenSSH 10.0 released](https://www.openwall.com/lists/oss-security/2025/04/09/1)
* [2025-04-09, 07:28:00](https://soylentnews.org/article.pl?sid=25/04/08/1159249&amp;from=rss) - [Facial Recognition Tech, Developed With a Clear Purpose in Mind](https://soylentnews.org/article.pl?sid=25/04/08/1159249&amp;from=rss)
* [2025-04-09, 07:23:04](https://lobste.rs/s/w3jjb2/surprising_enum_size_optimization_rust) - [A surprising enum size optimization in the Rust compiler](https://jpfennell.com/posts/enum-type-size/)
* [2025-04-09, 02:42:00](https://soylentnews.org/article.pl?sid=25/04/07/1513227&amp;from=rss) - [Scientists Use Sound to Generate and Shape Water Waves](https://soylentnews.org/article.pl?sid=25/04/07/1513227&amp;from=rss)
* [2025-04-08, 21:55:00](https://soylentnews.org/article.pl?sid=25/04/07/1511216&amp;from=rss) - [No One Knows What the Hell an AI Agent is](https://soylentnews.org/article.pl?sid=25/04/07/1511216&amp;from=rss)
* [2025-04-08, 17:12:00](https://soylentnews.org/article.pl?sid=25/04/07/157225&amp;from=rss) - [Is Homo Sapiens an Invasive Species?](https://soylentnews.org/article.pl?sid=25/04/07/157225&amp;from=rss)
* [2025-04-08, 12:23:00](https://soylentnews.org/article.pl?sid=25/04/07/154254&amp;from=rss) - [NASA&apos;s Webb Exposes Complex Atmosphere of Starless Super-Jupiter](https://soylentnews.org/article.pl?sid=25/04/07/154254&amp;from=rss)
* [2025-04-08, 09:43:11](https://news.ycombinator.com/item?id=43619884) - [smartfunc: Turn Docstrings into LLM-Functions](https://github.com/koaning/smartfunc)
* [2025-04-08, 08:10:06](https://news.ycombinator.com/item?id=43619437) - [Native frame transposition coming to Emacs 31](https://p.bauherren.ovh/blog/tech/new_window_cmds)
* [2025-04-08, 07:42:00](https://soylentnews.org/article.pl?sid=25/04/07/151226&amp;from=rss) - [AMD Sets New Supercomputer Record, Runs CFD Simulation Over 25x Faster On Instinct Mi250X GPUs ](https://soylentnews.org/article.pl?sid=25/04/07/151226&amp;from=rss)
* [2025-04-08, 04:12:07](https://news.ycombinator.com/item?id=43618286) - [\&quot;The Form of a Demon and the Heart of a Person\&quot;](https://publicdomainreview.org/collection/yamauba-and-kintaro/)
* [2025-04-08, 02:56:00](https://soylentnews.org/article.pl?sid=25/04/07/0055209&amp;from=rss) - [Earth May Have Had a Ring System 466 Million Years Ago](https://soylentnews.org/article.pl?sid=25/04/07/0055209&amp;from=rss)
* [2025-04-07, 22:30:45](https://news.ycombinator.com/item?id=43616649) - [A surprising enum size optimization in the Rust compiler](https://jpfennell.com/posts/enum-type-size/)
* [2025-04-07, 22:11:00](https://soylentnews.org/article.pl?sid=25/04/06/198244&amp;from=rss) - [Operating System for Quantum Networks is a First](https://soylentnews.org/article.pl?sid=25/04/06/198244&amp;from=rss)
* [2025-04-07, 17:26:00](https://soylentnews.org/article.pl?sid=25/04/06/193210&amp;from=rss) - [Microsoft Analyzing Open-Source Bootloaders: Finding Vulnerabilities Faster With AI??](https://soylentnews.org/article.pl?sid=25/04/06/193210&amp;from=rss)
* [2025-04-07, 12:41:00](https://soylentnews.org/article.pl?sid=25/04/06/136221&amp;from=rss) - [UK Threatens £100K-A-Day Fines Under New Cyber Bill](https://soylentnews.org/article.pl?sid=25/04/06/136221&amp;from=rss)
* [2025-04-07, 12:35:03](https://news.ycombinator.com/item?id=43610566) - [We Designed TigerBeetle&apos;s Docs from Scratch](https://tigerbeetle.com/blog/2025-02-27-why-we-designed-tigerbeetles-docs-from-scratch/)
* [2025-04-07, 07:56:00](https://soylentnews.org/article.pl?sid=25/04/06/130257&amp;from=rss) - [Cell Phone OPSEC for Border Crossings](https://soylentnews.org/article.pl?sid=25/04/06/130257&amp;from=rss)
* [2025-04-07, 06:27:03](https://news.ycombinator.com/item?id=43608422) - [The Difference Between Municipal Fire Trucks and Airport Fire Trucks](https://www.piercemfg.com/pierce/blog/difference-between-municipal-and-airport-fire-trucks)
* [2025-04-07, 03:10:00](https://soylentnews.org/article.pl?sid=25/04/06/1238211&amp;from=rss) - [New Zealand Start-Up Aims to Take Space Transport to New Heights](https://soylentnews.org/article.pl?sid=25/04/06/1238211&amp;from=rss)
* [2025-04-06, 22:22:00](https://soylentnews.org/article.pl?sid=25/04/05/1917232&amp;from=rss) - [Brain-Computer Interfaces Face a Critical Test](https://soylentnews.org/article.pl?sid=25/04/05/1917232&amp;from=rss)
* [2025-04-06, 17:34:00](https://soylentnews.org/article.pl?sid=25/04/05/1857225&amp;from=rss) - [Rapidus to Begin Trial Production of its 2nm Process This Month](https://soylentnews.org/article.pl?sid=25/04/05/1857225&amp;from=rss)
* [2025-04-06, 12:47:00](https://soylentnews.org/article.pl?sid=25/04/05/1319211&amp;from=rss) - [CISPE Pumps €1 Million Of Microsoft&apos;s Money Into Fulcrum](https://soylentnews.org/article.pl?sid=25/04/05/1319211&amp;from=rss)
* [2025-04-06, 08:02:00](https://soylentnews.org/article.pl?sid=25/04/05/1234244&amp;from=rss) - [Open-Source Tool Designed To Throttle PC And Server Performance Based On Electricity Pricing](https://soylentnews.org/article.pl?sid=25/04/05/1234244&amp;from=rss)
* [2025-04-06, 03:16:00](https://soylentnews.org/article.pl?sid=25/04/05/123257&amp;from=rss) - [A New Antifungal Drug Works in a Surprising Way](https://soylentnews.org/article.pl?sid=25/04/05/123257&amp;from=rss)
