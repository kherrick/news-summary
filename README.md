# [News Summary](https://kherrick.github.io/news-summary/)

## Software and Development Tools

* [The order of files in /etc/ssh/sshd_config.d/ matters (and may surprise you)](https://utcc.utoronto.ca/~cks/space/blog/sysadmin/OpenSSHConfigOrderMatters) ([comments](https://lobste.rs/s/litpqn/order_files_etc_ssh_sshd_config_d_matters))

* [rauthy: OpenID Connect Single Sign-On Identity & Access Management](https://github.com/sebadob/rauthy) ([comments](https://lobste.rs/s/p814ia/rauthy_openid_connect_single_sign_on))

* [SeedLM: Compressing LLM Weights into Seeds of Pseudo-Random Generators](https://machinelearning.apple.com/research/seedlm-compressing) ([comments](https://news.ycombinator.com/item?id=43599967))

* [MacLynx beta 6: back to the Power Mac](http://oldvcr.blogspot.com/2025/04/maclynx-beta-6-back-to-power-mac.html) ([comments](https://lobste.rs/s/vwrai2/maclynx_beta_6_back_power_mac))

* [nodo: Call Node.js from Ruby](https://github.com/mtgrosser/nodo) ([comments](https://lobste.rs/s/51w8do/nodo_call_node_js_from_ruby))

* [My Browser WASM't Prepared for This. Using DuckDB, Apache Arrow and Web Workers](https://motifanalytics.medium.com/my-browser-wasmt-prepared-for-this-using-duckdb-apache-arrow-and-web-workers-in-real-life-e3dd4695623d) ([comments](https://news.ycombinator.com/item?id=43599613))

## AI, Machine Learning, and Generative Technologies

* [Microsoft's New AI-Generated Version of 'Quake 2' Now Playable Online](https://games.slashdot.org/story/25/04/05/2329252/microsofts-new-ai-generated-version-of-quake-2-now-playable-online?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43599613))

* [Open Source Coalition Announces 'Model-Signing' to Strengthen ML Supply Chain](https://pypi.org/project/model-signing/) ([comments](https://news.ycombinator.com/item?id=43596543))

* [The machines are rising — but developers still hold the keys](https://www.thoughtworks.com/insights/blog/generative-ai/machines-rising-developers-hold-keys) ([comments](https://lobste.rs/s/ncokd5/machines_are_rising_developers_still))

* [The Impact of Generative AI on Critical Thinking: Self-Reported Reductions in Cognitive Effort & Confidence Effects From a Survey of Knowledge Workers](https://www.microsoft.com/en-us/research/wp-content/uploads/2025/01/lee_2025_ai_critical_thinking_survey.pdf) ([comments](https://lobste.rs/s/3trizw/impact_generative_ai_on_critical))

## Space and Exploration

* [Starliner's Space Station Flight Was 'Wilder' Than We Thought](https://science.slashdot.org/story/25/04/06/0136232/starliners-space-station-flight-was-wilder-than-we-thought?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://science.slashdot.org/story/25/04/06/0136232/starliners-space-station-flight-was-wilder-than-we-thought?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [NASA Seeks Proposals for Two More Private Astronaut Space Station Visits](https://science.slashdot.org/story/25/04/05/1930232/nasa-seeks-proposals-for-two-more-private-astronaut-space-station-visits?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://science.slashdot.org/story/25/04/05/1930232/nasa-seeks-proposals-for-two-more-private-astronaut-space-station-visits?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Open Source Tech and Hardware Innovations

* [8-pin Linux](https://dmitry.gr/?r=05.Projects&proj=36.%208pinLinux) ([comments](https://lobste.rs/s/bl9vjr/8_pin_linux))

* [ashos: The immutable/mutable meta-distribution (universal bootstrapper)](https://github.com/ashos/ashos) ([comments](https://lobste.rs/s/5qf3bi/ashos_immutable_mutable_meta))

* [Clawtype - a custom wearable chorded keyboard & mouse](https://github.com/akavel/clawtype) ([comments](https://lobste.rs/s/o0xmgd/clawtype_custom_wearable_chorded))

## Environmental and Societal Issues

* [Were Still More UK Postmasters Also Wrongly Prosecuted Over Accounting Bug?](https://news.slashdot.org/story/25/04/06/0221239/were-still-more-uk-postmasters-also-wrongly-prosecuted-over-accounting-bug?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.slashdot.org/story/25/04/06/0221239/were-still-more-uk-postmasters-also-wrongly-prosecuted-over-accounting-bug?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [What if we made advertising illegal?](https://simone.org/advertising/) ([comments](https://news.ycombinator.com/item?id=43595269))

* [Waste Fires Are on the Rise Largely Thanks to the Lithium-Ion Batteries in Vape Pens](https://soylentnews.org/article.pl?sid=25/04/04/0739222&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/04/04/0739222&from=rss))

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

* [2025-04-06, 09:11:20](https://lobste.rs/s/litpqn/order_files_etc_ssh_sshd_config_d_matters) - [The order of files in /etc/ssh/sshd_config.d/ matters (and may surprise you)](https://utcc.utoronto.ca/~cks/space/blog/sysadmin/OpenSSHConfigOrderMatters)
* [2025-04-06, 08:53:41](https://news.ycombinator.com/item?id=43599967) - [SeedLM: Compressing LLM Weights into Seeds of Pseudo-Random Generators](https://machinelearning.apple.com/research/seedlm-compressing)
* [2025-04-06, 08:37:16](https://lobste.rs/s/p814ia/rauthy_openid_connect_single_sign_on) - [rauthy: OpenID Connect Single Sign-On Identity &amp; Access Management](https://github.com/sebadob/rauthy)
* [2025-04-06, 08:02:00](https://soylentnews.org/article.pl?sid=25/04/05/1234244&amp;from=rss) - [Open-Source Tool Designed To Throttle PC And Server Performance Based On Electricity Pricing](https://soylentnews.org/article.pl?sid=25/04/05/1234244&amp;from=rss)
* [2025-04-06, 07:38:49](https://news.ycombinator.com/item?id=43599649) - [Why does JSON have commas?](https://simonsafar.com/2025/json_with_no_commas/)
* [2025-04-06, 07:36:12](https://news.ycombinator.com/item?id=43599637) - [Standard Ebooks: liberated ebooks, carefully produced for the true book lover](https://standardebooks.org)
* [2025-04-06, 07:34:00](https://news.slashdot.org/story/25/04/06/0221239/were-still-more-uk-postmasters-also-wrongly-prosecuted-over-accounting-bug?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Were Still More UK Postmasters Also Wrongly Prosecuted Over Accounting Bug?](https://news.slashdot.org/story/25/04/06/0221239/were-still-more-uk-postmasters-also-wrongly-prosecuted-over-accounting-bug?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-06, 07:31:27](https://news.ycombinator.com/item?id=43599613) - [My Browser WASM&apos;t Prepared for This. Using DuckDB, Apache Arrow and Web Workers](https://motifanalytics.medium.com/my-browser-wasmt-prepared-for-this-using-duckdb-apache-arrow-and-web-workers-in-real-life-e3dd4695623d)
* [2025-04-06, 07:07:44](https://lobste.rs/s/wyjtwq/done_with_github_actions_supply_chain) - [Done with GitHub Actions Supply Chain Attacks](https://huijzer.xyz/posts/jas/)
* [2025-04-06, 06:55:55](https://news.ycombinator.com/item?id=43599470) - [Show HN: I Built ImgFiber-Better Image Optimizer. Free No Limits](https://www.imgfiber.com/)
* [2025-04-06, 04:55:30](https://lobste.rs/s/vwrai2/maclynx_beta_6_back_power_mac) - [MacLynx beta 6: back to the Power Mac](http://oldvcr.blogspot.com/2025/04/maclynx-beta-6-back-to-power-mac.html)
* [2025-04-06, 04:34:00](https://science.slashdot.org/story/25/04/06/0136232/starliners-space-station-flight-was-wilder-than-we-thought?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Starliner&apos;s Space Station Flight Was &apos;Wilder&apos; Than We Thought](https://science.slashdot.org/story/25/04/06/0136232/starliners-space-station-flight-was-wilder-than-we-thought?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-06, 03:35:27](https://lobste.rs/s/51w8do/nodo_call_node_js_from_ruby) - [nodo: Call Node.js from Ruby](https://github.com/mtgrosser/nodo)
* [2025-04-06, 03:24:23](https://lobste.rs/s/ncokd5/machines_are_rising_developers_still) - [The machines are rising — but developers still hold the keys](https://www.thoughtworks.com/insights/blog/generative-ai/machines-rising-developers-hold-keys)
* [2025-04-06, 03:16:00](https://soylentnews.org/article.pl?sid=25/04/05/123257&amp;from=rss) - [A New Antifungal Drug Works in a Surprising Way](https://soylentnews.org/article.pl?sid=25/04/05/123257&amp;from=rss)
* [2025-04-06, 02:56:16](https://news.ycombinator.com/item?id=43598600) - [Serving Vector Tiles, Fast](https://spatialists.ch/posts/2025/04-05-serving-vector-tiles-fast/)
* [2025-04-06, 01:47:23](https://lobste.rs/s/o2tsdx/when_should_compiler_expand_garbage) - [When should a compiler expand garbage collection barriers?](https://robcasloz.github.io/blog/2024/02/14/when-should-a-compiler-expand-garbage-collection-barriers.html)
* [2025-04-06, 01:34:00](https://games.slashdot.org/story/25/04/05/2329252/microsofts-new-ai-generated-version-of-quake-2-now-playable-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft&apos;s New AI-Generated Version of &apos;Quake 2&apos; Now Playable Online](https://games.slashdot.org/story/25/04/05/2329252/microsofts-new-ai-generated-version-of-quake-2-now-playable-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-05, 23:46:19](https://news.ycombinator.com/item?id=43597778) - [Apple’s Darwin OS and XNU Kernel Deep Dive](https://tansanrao.com/blog/2025/04/xnu-kernel-and-darwin-evolution-and-architecture/)
* [2025-04-05, 22:45:03](https://news.ycombinator.com/item?id=43597425) - [The ADHD body double: A unique tool for getting things done](https://add.org/the-body-double/)
* [2025-04-05, 22:34:00](https://yro.slashdot.org/story/25/04/05/2124202/makers-of-rent-setting-software-sue-california-city-over-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Makers of Rent-Setting Software Sue California City Over Ban](https://yro.slashdot.org/story/25/04/05/2124202/makers-of-rent-setting-software-sue-california-city-over-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-05, 22:28:02](https://lobste.rs/s/6sgicg/on_brightness_calibrating_your_displays) - [On brightness, and calibrating your displays](https://zamundaaa.github.io/colormanagement/2025/03/31/about-brightness.html)
* [2025-04-05, 22:28:00](https://soylentnews.org/politics/article.pl?sid=25/04/04/0831206&amp;from=rss) - [US To Squeeze Firms For Investment To Get Chips Act Cash](https://soylentnews.org/politics/article.pl?sid=25/04/04/0831206&amp;from=rss)
* [2025-04-05, 22:19:18](https://lobste.rs/s/gzuzyp/email_over_nncp_via_exim) - [Email over NNCP (via exim)](https://salsa.debian.org/jgoerzen/docker-nncpnet-mailnode/-/wikis/home)
* [2025-04-05, 22:05:45](https://lobste.rs/s/i4h5o3/llama_4_herd) - [The Llama 4 herd](https://ai.meta.com/blog/llama-4-multimodal-intelligence/)
* [2025-04-05, 21:34:00](https://linux.slashdot.org/story/25/04/05/217212/landrun-lightweight-linux-sandboxing-with-landlock-no-root-required?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Landrun&apos;: Lightweight Linux Sandboxing With Landlock, No Root Required](https://linux.slashdot.org/story/25/04/05/217212/landrun-lightweight-linux-sandboxing-with-landlock-no-root-required?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-05, 21:15:00](https://news.ycombinator.com/item?id=43596864) - [Rules for Negotiating a Job Offer (2016)](https://haseebq.com/my-ten-rules-for-negotiating-a-job-offer/)
* [2025-04-05, 20:34:00](https://news.slashdot.org/story/25/04/05/2026218/ian-fleming-published-the-james-bond-novel-moonraker-70-years-ago-today?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ian Fleming Published the James Bond Novel &apos;Moonraker&apos; 70 Years Ago Today](https://news.slashdot.org/story/25/04/05/2026218/ian-fleming-published-the-james-bond-novel-moonraker-70-years-ago-today?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-05, 20:26:36](https://news.ycombinator.com/item?id=43596570) - [We are still using 88x31 buttons](https://ultrasciencelabs.com/lab-notes/why-we-are-still-using-88x31-buttons)
* [2025-04-05, 20:24:09](https://news.ycombinator.com/item?id=43596546) - [North America Is Dripping from Below, Geoscientists Discover](https://www.jsg.utexas.edu/news/2025/04/north-america-is-dripping-from-below-geoscientists-discover/)
* [2025-04-05, 20:24:03](https://news.ycombinator.com/item?id=43596543) - [Open Source Coalition Announces &apos;Model-Signing&apos; to Strengthen ML Supply Chain](https://pypi.org/project/model-signing/)
* [2025-04-05, 20:17:04](https://lobste.rs/s/bl9vjr/8_pin_linux) - [8-pin Linux](https://dmitry.gr/?r=05.Projects&amp;proj=36.%208pinLinux)
* [2025-04-05, 19:34:00](https://science.slashdot.org/story/25/04/05/1930232/nasa-seeks-proposals-for-two-more-private-astronaut-space-station-visits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Seeks Proposals for Two More Private Astronaut Space Station Visits](https://science.slashdot.org/story/25/04/05/1930232/nasa-seeks-proposals-for-two-more-private-astronaut-space-station-visits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-05, 18:34:00](https://news.slashdot.org/story/25/04/05/0250250/microsoft-uses-ai-to-find-flaws-in-grub2-u-boot-barebox-bootloaders?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Uses AI To Find Flaws In GRUB2, U-Boot, Barebox Bootloaders](https://news.slashdot.org/story/25/04/05/0250250/microsoft-uses-ai-to-find-flaws-in-grub2-u-boot-barebox-bootloaders?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-05, 18:33:56](https://news.ycombinator.com/item?id=43595585) - [The Llama 4 herd](https://ai.meta.com/blog/llama-4-multimodal-intelligence/)
* [2025-04-05, 18:06:53](https://lobste.rs/s/5qf3bi/ashos_immutable_mutable_meta) - [ashos: The immutable/mutable meta-distribution (universal bootstrapper)](https://github.com/ashos/ashos)
* [2025-04-05, 17:59:55](https://news.ycombinator.com/item?id=43595283) - [Faster interpreters in Go: Catching up with C++](https://planetscale.com/blog/faster-interpreters-in-go-catching-up-with-cpp)
* [2025-04-05, 17:57:46](https://news.ycombinator.com/item?id=43595269) - [What if we made advertising illegal?](https://simone.org/advertising/)
* [2025-04-05, 17:51:49](https://news.ycombinator.com/item?id=43595223) - [Dynamic Register Allocation on AMD&apos;s RDNA 4 GPU Architecture](https://chipsandcheese.com/p/dynamic-register-allocation-on-amds)
* [2025-04-05, 17:46:00](https://soylentnews.org/article.pl?sid=25/04/04/0827202&amp;from=rss) - [Web 3.0 Requires Data Integrity](https://soylentnews.org/article.pl?sid=25/04/04/0827202&amp;from=rss)
* [2025-04-05, 17:34:00](https://it.slashdot.org/story/25/04/05/0621201/open-source-coalition-announces-model-signing-with-sigstore-to-strengthen-the-ml-supply-chain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Open Source Coalition Announces &apos;Model-Signing&apos; with Sigstore to Strengthen the ML Supply Chain](https://it.slashdot.org/story/25/04/05/0621201/open-source-coalition-announces-model-signing-with-sigstore-to-strengthen-the-ml-supply-chain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-05, 17:29:01](https://lobste.rs/s/3trizw/impact_generative_ai_on_critical) - [The Impact of Generative AI on Critical Thinking: Self-Reported Reductions in Cognitive Effort &amp; Confidence Effects From a Survey of Knowledge Workers](https://www.microsoft.com/en-us/research/wp-content/uploads/2025/01/lee_2025_ai_critical_thinking_survey.pdf)
* [2025-04-05, 16:34:00](https://developers.slashdot.org/story/25/04/05/0515241/pythons-pypi-finally-gets-closer-to-adding-organization-accounts-and-sboms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Python&apos;s PyPI Finally Gets Closer to Adding &apos;Organization Accounts&apos; and SBOMs](https://developers.slashdot.org/story/25/04/05/0515241/pythons-pypi-finally-gets-closer-to-adding-organization-accounts-and-sboms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-05, 15:54:01](https://news.ycombinator.com/item?id=43594396) - [Exeter&apos;s unassuming co-op worker leads double life as &apos;Lord of the Logos&apos;](https://www.devonlive.com/whats-on/whats-on-news/exeters-unassuming-co-op-worker-10039941)
* [2025-04-05, 15:34:00](https://tech.slashdot.org/story/25/04/05/029230/eric-raymond-john-carmack-mourn-death-of-bufferbloat-fighter-dave-taht?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Eric Raymond, John Carmack Mourn Death of &apos;Bufferbloat&apos; Fighter Dave Taht](https://tech.slashdot.org/story/25/04/05/029230/eric-raymond-john-carmack-mourn-death-of-bufferbloat-fighter-dave-taht?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-05, 15:28:58](https://lobste.rs/s/ri3gqs/jit_calculators_finale) - [JIT calculators finale](https://ochagavia.nl/blog/jit-calculators-finale/)
* [2025-04-05, 15:03:00](https://soylentnews.org/article.pl?sid=25/04/04/0824242&amp;from=rss) - [Two Guys From Andromeda Ship SpaceVenture After 13 Years](https://soylentnews.org/article.pl?sid=25/04/04/0824242&amp;from=rss)
* [2025-04-05, 14:34:00](https://news.slashdot.org/story/25/04/05/0323213/openais-motion-to-dismiss-copyright-claims-rejected-by-judge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI&apos;s Motion to Dismiss Copyright Claims Rejected by Judge](https://news.slashdot.org/story/25/04/05/0323213/openais-motion-to-dismiss-copyright-claims-rejected-by-judge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-05, 14:26:02](https://news.ycombinator.com/item?id=43593789) - [Show HN: I built a word game. My mom thinks it&apos;s great. What do you think?](https://www.whatsit.today/)
* [2025-04-05, 13:58:18](https://news.ycombinator.com/item?id=43593596) - [A Vision for WebAssembly Support in Swift](https://forums.swift.org/t/pitch-a-vision-for-webassembly-support-in-swift/79060)
* [2025-04-05, 13:00:00](https://news.slashdot.org/story/25/04/05/0027217/a-busy-hurricane-season-is-expected-heres-how-it-will-be-different-from-the-last?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Busy Hurricane Season is Expected. Here&apos;s How It Will Be Different From the Last](https://news.slashdot.org/story/25/04/05/0027217/a-busy-hurricane-season-is-expected-heres-how-it-will-be-different-from-the-last?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-05, 12:54:00](https://soylentnews.org/article.pl?sid=25/04/04/081240&amp;from=rss) - [Tracing the Thoughts of a Large Language Model](https://soylentnews.org/article.pl?sid=25/04/04/081240&amp;from=rss)
* [2025-04-05, 12:52:32](https://lobste.rs/s/sbuuzu/compilers_incrementally_extensibly) - [Compilers: Incrementally and Extensibly](https://okmij.org/ftp/tagless-final/Compiler/index.html)
* [2025-04-05, 10:57:00](https://news.ycombinator.com/item?id=43592409) - [Emulating an iPhone in QEMU](https://eshard.com/posts/emulating-ios-14-with-qemu)
* [2025-04-05, 10:00:00](https://science.slashdot.org/story/25/04/05/007242/bonobos-may-combine-words-in-ways-previously-thought-unique-to-humans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bonobos May Combine Words In Ways Previously Thought Unique To Humans](https://science.slashdot.org/story/25/04/05/007242/bonobos-may-combine-words-in-ways-previously-thought-unique-to-humans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-05, 09:27:00](https://soylentnews.org/meta/article.pl?sid=25/04/05/0926221&amp;from=rss) - [Problem with the Poll](https://soylentnews.org/meta/article.pl?sid=25/04/05/0926221&amp;from=rss)
* [2025-04-05, 08:15:20](https://lobste.rs/s/9m8ala/bpf_from_scratch_rust) - [BPF From Scratch In Rust](https://yeet.cx/blog/bpf-from-scratch-in-rust/)
* [2025-04-05, 08:12:00](https://soylentnews.org/article.pl?sid=25/04/04/0748212&amp;from=rss) - [Intel and TSMC Join Forces for Groundbreaking Chipmaking Venture](https://soylentnews.org/article.pl?sid=25/04/04/0748212&amp;from=rss)
* [2025-04-05, 07:00:00](https://science.slashdot.org/story/25/04/04/2344217/fram2-crew-returns-to-earth-after-polar-orbit-mission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fram2 Crew Returns To Earth After Polar Orbit Mission](https://science.slashdot.org/story/25/04/04/2344217/fram2-crew-returns-to-earth-after-polar-orbit-mission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-05, 05:04:30](https://lobste.rs/s/ofklws/simple_reply) - [A Simple Reply](https://github.com/SeaOfNodes/Simple/blob/main/ASimpleReply.md)
* [2025-04-05, 03:27:00](https://soylentnews.org/article.pl?sid=25/04/04/0739222&amp;from=rss) - [Waste Fires Are on the Rise Largely Thanks to the Lithium-Ion Batteries in Vape Pens](https://soylentnews.org/article.pl?sid=25/04/04/0739222&amp;from=rss)
* [2025-04-05, 02:29:58](https://lobste.rs/s/t24ppw/html_nix_2021) - [html.nix (2021)](https://code.tvl.fyi/tree/users/sterni/nix/html/README.md)
* [2025-04-05, 02:10:27](https://lobste.rs/s/e4q0ub/minecraft_server_freebsd_jails) - [Minecraft Server in FreeBSD Jails Container](https://vermaden.wordpress.com/2025/04/05/minecraft-server-freebsd-jails-container/)
* [2025-04-05, 00:41:10](https://lobste.rs/s/unnozu/how_we_hacked_software_supply_chain_for) - [How We Hacked a Software Supply Chain for $50K](https://www.landh.tech/blog/20250211-hack-supply-chain-for-50k/)
* [2025-04-05, 00:10:26](https://lobste.rs/s/m2fjzg/annotated_unix_magic_poster) - [Annotated Unix Magic Poster](https://unixmagic.net)
* [2025-04-04, 22:41:00](https://soylentnews.org/article.pl?sid=25/04/03/1326237&amp;from=rss) - [How Perceptions Are Influenced by Expectations: Songbird Study Draws Parallels With Human Speech](https://soylentnews.org/article.pl?sid=25/04/03/1326237&amp;from=rss)
* [2025-04-04, 22:05:25](https://lobste.rs/s/wn2ley/rough_survey_compilation_recompilation) - [A rough survey of compilation, recompilation, and compile-time evaluation](https://www.scattered-thoughts.net/writing/a-rough-survey-of-compilation-recompilation-and-compile-time-evaluation/)
* [2025-04-04, 17:53:00](https://soylentnews.org/article.pl?sid=25/04/03/1319224&amp;from=rss) - [Executive Order Aims to Make Mining the Primary Use of Public Lands at ‘As Many Sites As Possible’](https://soylentnews.org/article.pl?sid=25/04/03/1319224&amp;from=rss)
* [2025-04-04, 16:13:42](https://lobste.rs/s/o0xmgd/clawtype_custom_wearable_chorded) - [Clawtype - a custom wearable chorded keyboard &amp; mouse](https://github.com/akavel/clawtype)
* [2025-04-04, 15:55:37](https://lobste.rs/s/dlrmfi/on_javascript_s_weirdness) - [On JavaScript&apos;s Weirdness](https://stack-auth.com/blog/on-javascripts-weirdness)
* [2025-04-04, 15:31:55](https://lobste.rs/s/ndlwoh/wizard_his_shell) - [The Wizard and His Shell](https://terminal.click/posts/2025/04/the-wizard-and-his-shell/)
* [2025-04-04, 14:41:48](https://news.ycombinator.com/item?id=43583134) - [Understanding Hydration Errors by Building a SSR React Project](https://www.propelauth.com/post/understanding-hydration-errors)
* [2025-04-04, 13:10:00](https://soylentnews.org/article.pl?sid=25/04/03/0151238&amp;from=rss) - [Notes on the Pentium&apos;s Microcode Circuitry](https://soylentnews.org/article.pl?sid=25/04/03/0151238&amp;from=rss)
* [2025-04-04, 08:54:05](https://news.ycombinator.com/item?id=43579777) - [What is an Ethernet cable? Here&apos;s how to connect to the internet without Wi-Fi](https://www.businessinsider.com/guides/tech/what-is-an-ethernet-cable)
* [2025-04-04, 08:28:00](https://soylentnews.org/article.pl?sid=25/04/03/0149258&amp;from=rss) - [What Drives Our Cravings for Food and Drink? Neurons in the Amygdala May Play a Key Role](https://soylentnews.org/article.pl?sid=25/04/03/0149258&amp;from=rss)
* [2025-04-04, 06:55:11](https://news.ycombinator.com/item?id=43579104) - [Lessons from open source in the Mexican government](https://lwn.net/Articles/1013776/)
* [2025-04-04, 04:32:52](https://news.ycombinator.com/item?id=43578348) - [What&apos;s in that bright red fire retardant? No one will say, so we had it tested](https://laist.com/news/climate-environment/how-much-toxic-heavy-metal-is-in-that-bright-red-fire-retardant-we-had-it-tested-to-find-out)
* [2025-04-04, 03:43:00](https://soylentnews.org/article.pl?sid=25/04/03/0144235&amp;from=rss) - [AI Bots Strain Wikimedia as Bandwidth Surges 50%](https://soylentnews.org/article.pl?sid=25/04/03/0144235&amp;from=rss)
* [2025-04-03, 23:04:00](https://soylentnews.org/article.pl?sid=25/04/03/0137241&amp;from=rss) - [Does Listening Really Change Minds? New Study Challenges Common Assumptions](https://soylentnews.org/article.pl?sid=25/04/03/0137241&amp;from=rss)
* [2025-04-03, 18:25:48](https://news.ycombinator.com/item?id=43573507) - [The order of files in /etc/ssh/sshd_config.d/ matters](https://utcc.utoronto.ca/~cks/space/blog/sysadmin/OpenSSHConfigOrderMatters)
* [2025-04-03, 18:17:00](https://soylentnews.org/article.pl?sid=25/04/02/038211&amp;from=rss) - [The April Fools Joke That Might Have Got Me Fired](https://soylentnews.org/article.pl?sid=25/04/02/038211&amp;from=rss)
* [2025-04-03, 13:35:00](https://soylentnews.org/article.pl?sid=25/04/02/036222&amp;from=rss) - [News Outlets Fighting Back Against Distrust With \&quot;Ethics Boxes\&quot;??](https://soylentnews.org/article.pl?sid=25/04/02/036222&amp;from=rss)
* [2025-04-03, 08:52:00](https://soylentnews.org/article.pl?sid=25/04/02/034207&amp;from=rss) - [First Orbital Rocket Launched From Mainland Europe Crashes After Takeoff](https://soylentnews.org/article.pl?sid=25/04/02/034207&amp;from=rss)
* [2025-04-03, 04:06:00](https://soylentnews.org/article.pl?sid=25/04/01/1135252&amp;from=rss) - [Honeybee Deaths Surge in U.S.: &apos;Something Real Bad is Going on&apos;](https://soylentnews.org/article.pl?sid=25/04/01/1135252&amp;from=rss)
* [2025-04-03, 04:00:27](https://news.ycombinator.com/item?id=43564591) - [Photons, neutrinos, and gravitational-wave astronomy](https://www.as.arizona.edu/~mrenzo/courses/notes-lecture-GWprog.html)
* [2025-04-02, 23:22:00](https://soylentnews.org/article.pl?sid=25/03/31/0416212&amp;from=rss) - [FuguIta: OpenBSD Live CD - Celebrates Their 20th Anniversary!](https://soylentnews.org/article.pl?sid=25/03/31/0416212&amp;from=rss)
* [2025-04-02, 16:24:00](https://soylentnews.org/article.pl?sid=25/03/31/1729253&amp;from=rss) - [AI Search Engines Cite Incorrect News Sources at an Alarming 60% Rate, Study Says](https://soylentnews.org/article.pl?sid=25/03/31/1729253&amp;from=rss)
* [2025-04-02, 11:38:00](https://soylentnews.org/article.pl?sid=25/03/31/1720218&amp;from=rss) - [Study Reveals Tool Use in Tropical Fish Species](https://soylentnews.org/article.pl?sid=25/03/31/1720218&amp;from=rss)
* [2025-04-02, 10:40:33](https://news.ycombinator.com/item?id=43555365) - [Diagnosing bugs preventing sleep on Windows](https://peteronprogramming.wordpress.com/2025/04/02/diagnosing-bugs-preventing-sleep-on-windows/)
* [2025-04-02, 10:00:04](https://news.ycombinator.com/item?id=43555154) - [A New Proof Smooths Out the Math of Melting](https://www.quantamagazine.org/a-new-proof-smooths-out-the-math-of-melting-20250331/)
* [2025-04-02, 06:53:00](https://soylentnews.org/article.pl?sid=25/03/31/1714219&amp;from=rss) - [75% of US Scientists Who Answered Nature Poll Consider Leaving](https://soylentnews.org/article.pl?sid=25/03/31/1714219&amp;from=rss)
* [2025-04-02, 02:07:00](https://soylentnews.org/article.pl?sid=25/03/31/1248211&amp;from=rss) - [Microsoft&apos;s Killing Script Used to Avoid Microsoft Account in Windows 11](https://soylentnews.org/article.pl?sid=25/03/31/1248211&amp;from=rss)
