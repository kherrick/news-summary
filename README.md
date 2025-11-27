# [News Summary](https://kherrick.github.io/news-summary/)

## Space and Research Innovations

* [NASA Reduces Flights on Boeing's Starliner After Botched Astronaut Mission](https://science.slashdot.org/story/25/11/27/0856219/nasa-reduces-flights-on-boeings-starliner-after-botched-astronaut-mission?utm_source=rss1.0mainlinkanon&utm_medium=feed) - NASA adjusts its collaborations with Boeing after complications arise in astronaut transportation.

* [China's Giant Underground Neutrino Observatory Releases Its First Results](https://science.slashdot.org/story/25/11/26/2337257/chinas-giant-underground-neutrino-observatory-releases-its-first-results?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A significant advancement in neutrino research with first outputs from Chinese research.

## AI and Machine Learning

* [AI Can Technically Perform 12% of US Labor Market's Wage Value, MIT Simulation Finds](https://news.slashdot.org/story/25/11/27/0752210/ai-can-technically-perform-12-of-us-labor-markets-wage-value-mit-simulation-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - MIT explores the financial potential of AI's contribution to U.S. labor tasks.

* [We're Losing Our Voice to LLMs](https://tonyalicea.dev/blog/were-losing-our-voice-to-llms/) - A perspective on how large language models could overshadow personal expression.

* [TPUs vs. GPUs and why Google is positioned to win AI race in the long term](https://www.uncoveralpha.com/p/the-chip-made-for-the-ai-inference) - Google's TPU innovation challenges GPU-centric AI development.

* [The State of GPL Propagation to AI Models](https://shujisado.org/2025/11/27/gpl-propagates-to-ai-models-trained-on-gpl-code/) - Examining the implications of GPL licensing on AI models.

## Open Source and Software Development

* [Lowtype: Elegant types in Ruby](https://codeberg.org/Iow/type) - Introducing Lowtype, enhancing Ruby development with sophisticated type systems.

* [Migrating the main Zig repository from GitHub to Codeberg](https://ziglang.org/news/migrating-from-github-to-codeberg/) - Zig development shifts platforms, aligning with open-source principles.

* [Bringing Emacs Support to OCaml's LSP Server with ocaml-eglot](https://tarides.com/blog/2025-11-27-bringing-emacs-support-to-ocaml-s-lsp-server-with-ocaml-eglot/) - Enriching OCaml's compatibility with editor Emacs through new tooling.

* [Linux Kernel Explorer](https://reverser.dev/linux-kernel-explorer) - A new tool unveiled to simplify Linux kernel explorations.

## Legislation and Ethical Technology

* [UK Police To Trial AI 'Agents' Responding To Non-Emergency Calls](https://news.slashdot.org/story/25/11/26/2344228/uk-police-to-trial-ai-agents-responding-to-non-emergency-calls?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The UK begins its first implementation of AI in handling public communications.

* [Amazon Faces FAA Probe After Delivery Drone Snaps Internet Cable In Texas](https://tech.slashdot.org/story/25/11/26/2326203/amazon-faces-faa-probe-after-delivery-drone-snaps-internet-cable-in-texas?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Regulatory concerns for Amazon's drone operations after a technical mishap.

* [Apple Asks Indian Court to Block Antitrust Law Allowing $38 Billion Fine](https://yro.slashdot.org/story/25/11/26/2352256/apple-asks-indian-court-to-block-antitrust-law-allowing-38-billion-fine?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Apple challenges a major potential fine stemming from new policies.

* [Bitcoin Mining Needs Regulatory Legislation](https://soylentnews.org/article.pl?sid=25/11/25/157251&from=rss) - Insights into regulating the rapidly-growing and energy-intensive crypto mining.

## Fascinating Discoveries and Highlights

* [Arthur Conan Doyle explored men’s mental health through Sherlock Holmes](https://scienceclock.com/arthur-conan-doyle-delved-into-mens-mental-health-through-his-sherlock-holmes-stories/) - A literary exploration into mental health topics within Doyle's iconic works.

* [Voyager 1 is about to reach one light-day from Earth](https://scienceclock.com/voyager-1-is-about-to-reach-one-light-day-from-earth/) - A historic milestone for humanity's distant space probe.

* [DIY NAS: 2026 Edition](https://blog.briancmoses.com/2025/11/diy-nas-2026-edition.html) - Practical advice on building modern personal network storage systems.

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

* [2025-11-27, 15:01:00](https://science.slashdot.org/story/25/11/27/0856219/nasa-reduces-flights-on-boeings-starliner-after-botched-astronaut-mission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Reduces Flights on Boeing&apos;s Starliner After Botched Astronaut Mission](https://science.slashdot.org/story/25/11/27/0856219/nasa-reduces-flights-on-boeings-starliner-after-botched-astronaut-mission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-27, 14:53:22](https://lobste.rs/s/iro8m3/lowtype_elegant_types_ruby) - [Lowtype: Elegant types in Ruby](https://codeberg.org/Iow/type)
* [2025-11-27, 14:51:01](https://news.ycombinator.com/item?id=46069771) - [We&apos;re Losing Our Voice to LLMs](https://tonyalicea.dev/blog/were-losing-our-voice-to-llms/)
* [2025-11-27, 14:26:35](https://news.ycombinator.com/item?id=46069556) - [Show HN: Runprompt – run .prompt files from the command line](https://github.com/chr15m/runprompt)
* [2025-11-27, 14:00:00](https://news.slashdot.org/story/25/11/27/0752210/ai-can-technically-perform-12-of-us-labor-markets-wage-value-mit-simulation-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Can Technically Perform 12% of US Labor Market&apos;s Wage Value, MIT Simulation Finds](https://news.slashdot.org/story/25/11/27/0752210/ai-can-technically-perform-12-of-us-labor-markets-wage-value-mit-simulation-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-27, 13:40:20](https://lobste.rs/s/ju12fl/bringing_emacs_support_ocaml_s_lsp_server) - [Bringing Emacs Support to OCaml&apos;s LSP Server with ocaml-eglot](https://tarides.com/blog/2025-11-27-bringing-emacs-support-to-ocaml-s-lsp-server-with-ocaml-eglot/)
* [2025-11-27, 13:29:28](https://lobste.rs/s/cbcksu/unbrickable_pledge) - [The Unbrickable Pledge](https://usetrmnl.com/blog/the-unbrickable-pledge)
* [2025-11-27, 13:28:34](https://news.ycombinator.com/item?id=46069048) - [TPUs vs. GPUs and why Google is positioned to win AI race in the long term](https://www.uncoveralpha.com/p/the-chip-made-for-the-ai-inference)
* [2025-11-27, 13:00:17](https://news.ycombinator.com/item?id=46068847) - [Show HN: MkSlides – Markdown to slides with a similar workflow to MkDocs](https://github.com/MartenBE/mkslides)
* [2025-11-27, 13:00:00](https://news.slashdot.org/story/25/11/26/2344228/uk-police-to-trial-ai-agents-responding-to-non-emergency-calls?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Police To Trial AI &apos;Agents&apos; Responding To Non-Emergency Calls](https://news.slashdot.org/story/25/11/26/2344228/uk-police-to-trial-ai-agents-responding-to-non-emergency-calls?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-27, 12:48:12](https://news.ycombinator.com/item?id=46068777) - [The State of GPL Propagation to AI Models](https://shujisado.org/2025/11/27/gpl-propagates-to-ai-models-trained-on-gpl-code/)
* [2025-11-27, 12:41:22](https://lobste.rs/s/bfgdyg/on_idempotency_keys) - [On Idempotency Keys](https://www.morling.dev/blog/on-idempotency-keys/)
* [2025-11-27, 10:58:39](https://lobste.rs/s/vyqtkq/it_s_hard_build_oscillator) - [It&apos;s hard to build an oscillator](https://lcamtuf.substack.com/p/its-hard-to-build-an-oscillator)
* [2025-11-27, 10:54:02](https://news.ycombinator.com/item?id=46068015) - [Arthur Conan Doyle explored men’s mental health through Sherlock Holmes](https://scienceclock.com/arthur-conan-doyle-delved-into-mens-mental-health-through-his-sherlock-holmes-stories/)
* [2025-11-27, 10:00:00](https://yro.slashdot.org/story/25/11/26/2352256/apple-asks-indian-court-to-block-antitrust-law-allowing-38-billion-fine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Asks Indian Court to Block Antitrust Law Allowing $38 Billion Fine](https://yro.slashdot.org/story/25/11/26/2352256/apple-asks-indian-court-to-block-antitrust-law-allowing-38-billion-fine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-27, 09:39:17](https://lobste.rs/s/qbu8jl/lazy_linearity_for_core_functional) - [Lazy Linearity for a Core Functional Language](https://alt-romes.github.io/posts/2025-11-26-lazy-linearity-popl26.html)
* [2025-11-27, 07:31:24](https://news.ycombinator.com/item?id=46066695) - [Ray Marching Soft Shadows in 2D (2020)](https://www.rykap.com/2020/09/23/distance-fields/)
* [2025-11-27, 07:02:40](https://news.ycombinator.com/item?id=46066522) - [Mixpanel Security Breach](https://mixpanel.com/blog/sms-security-incident/)
* [2025-11-27, 07:00:00](https://science.slashdot.org/story/25/11/26/2337257/chinas-giant-underground-neutrino-observatory-releases-its-first-results?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s Giant Underground Neutrino Observatory Releases Its First Results](https://science.slashdot.org/story/25/11/26/2337257/chinas-giant-underground-neutrino-observatory-releases-its-first-results?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-27, 06:17:37](https://news.ycombinator.com/item?id=46066280) - [Linux Kernel Explorer](https://reverser.dev/linux-kernel-explorer)
* [2025-11-27, 06:14:21](https://news.ycombinator.com/item?id=46066255) - [Last Issue of \&quot;ECMAScript News\&quot;](https://ecmascript.news/archive/es-next-news-2025-11-26.html)
* [2025-11-27, 04:55:57](https://news.ycombinator.com/item?id=46065817) - [Music eases surgery and speeds recovery, study finds](https://www.bbc.com/news/articles/c231dv9zpz3o)
* [2025-11-27, 04:34:56](https://news.ycombinator.com/item?id=46065698) - [Coq: The World&apos;s Best Macro Assembler? (2013) [pdf]](https://nickbenton.name/coqasm.pdf)
* [2025-11-27, 04:19:36](https://lobste.rs/s/zn9jeu/generalized_worley_noise) - [Generalized Worley Noise](https://ianthehenry.com/posts/generalized-worley-noise/)
* [2025-11-27, 03:35:31](https://lobste.rs/s/xyffww/optimizing_ray_tracing_haskell_2020) - [Optimizing Ray Tracing in Haskell (2020)](https://medium.com/@s.nawaz/optimizing-ray-tracing-in-haskell-3dc412fff20a)
* [2025-11-27, 03:30:00](https://hardware.slashdot.org/story/25/11/26/2330218/mexico-unveils-plans-to-build-most-powerful-supercomputer-in-latin-america?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mexico Unveils Plans To Build Most Powerful Supercomputer In Latin America](https://hardware.slashdot.org/story/25/11/26/2330218/mexico-unveils-plans-to-build-most-powerful-supercomputer-in-latin-america?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-27, 03:26:00](https://soylentnews.org/article.pl?sid=25/11/25/157251&amp;from=rss) - [Bitcoin Mining Needs Regulatory Legislation](https://soylentnews.org/article.pl?sid=25/11/25/157251&amp;from=rss)
* [2025-11-27, 02:54:23](https://news.ycombinator.com/item?id=46065034) - [DIY NAS: 2026 Edition](https://blog.briancmoses.com/2025/11/diy-nas-2026-edition.html)
* [2025-11-27, 02:20:53](https://lobste.rs/s/miymem/running_unsupported_ios_on_deprecated) - [Running unsupported iOS on deprecated devices](https://nyansatan.github.io/run-unsupported-ios/)
* [2025-11-27, 02:14:36](https://news.ycombinator.com/item?id=46064757) - [Penpot: The Open-Source Figma](https://github.com/penpot/penpot)
* [2025-11-27, 02:04:57](https://news.ycombinator.com/item?id=46064680) - [Functional Data Structures and Algorithms: a Proof Assistant Approach](https://fdsa-book.net/)
* [2025-11-27, 02:02:00](https://tech.slashdot.org/story/25/11/26/2326203/amazon-faces-faa-probe-after-delivery-drone-snaps-internet-cable-in-texas?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Faces FAA Probe After Delivery Drone Snaps Internet Cable In Texas](https://tech.slashdot.org/story/25/11/26/2326203/amazon-faces-faa-probe-after-delivery-drone-snaps-internet-cable-in-texas?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-27, 01:49:00](https://news.ycombinator.com/item?id=46064571) - [Migrating the main Zig repository from GitHub to Codeberg](https://ziglang.org/news/migrating-from-github-to-codeberg/)
* [2025-11-27, 01:47:36](https://lobste.rs/s/tvkddz/migrating_zig_organization_from_github) - [Migrating The Zig Organization from GitHub to Codeberg](https://ziglang.org/news/migrating-from-github-to-codeberg/)
* [2025-11-27, 01:34:43](https://lobste.rs/s/ukbacd/graph_algorithms_rayon) - [Graph Algorithms in Rayon](https://davidlattimore.github.io/posts/2025/11/27/graph-algorithms-in-rayon.html)
* [2025-11-27, 01:25:00](https://yro.slashdot.org/story/25/11/26/227244/greek-cybercrime-unit-shuts-down-iptv-pirates-68-end-users-face-fines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Greek Cybercrime Unit Shuts Down IPTV Pirates, 68 End Users Face Fines](https://yro.slashdot.org/story/25/11/26/227244/greek-cybercrime-unit-shuts-down-iptv-pirates-68-end-users-face-fines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-27, 00:45:00](https://apple.slashdot.org/story/25/11/26/2155234/googles-airdrop-support-for-pixel-10-likely-exists-because-of-eus-apple-ruling?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s AirDrop Support For Pixel 10 Likely Exists Because of EU&apos;s Apple Ruling](https://apple.slashdot.org/story/25/11/26/2155234/googles-airdrop-support-for-pixel-10-likely-exists-because-of-eus-apple-ruling?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-27, 00:02:00](https://yro.slashdot.org/story/25/11/26/2012215/openai-says-dead-teen-violated-tos-when-he-used-chatgpt-to-plan-suicide?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Says Dead Teen Violated TOS When He Used ChatGPT To Plan Suicide](https://yro.slashdot.org/story/25/11/26/2012215/openai-says-dead-teen-violated-tos-when-he-used-chatgpt-to-plan-suicide?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-26, 23:20:00](https://news.slashdot.org/story/25/11/26/1958216/newegg-sparks-debate-with-new-paypal-integrated-ai-shopping-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Newegg Sparks Debate With New PayPal-Integrated AI Shopping Push](https://news.slashdot.org/story/25/11/26/1958216/newegg-sparks-debate-with-new-paypal-integrated-ai-shopping-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-26, 22:57:56](https://news.ycombinator.com/item?id=46063272) - [Running Unsupported iOS on Deprecated Devices](https://nyansatan.github.io/run-unsupported-ios/)
* [2025-11-26, 22:43:00](https://soylentnews.org/article.pl?sid=25/11/24/234230&amp;from=rss) - [The Escape Room Challenge: How One Person&apos;s Narcissism Can Undermine a Whole Team](https://soylentnews.org/article.pl?sid=25/11/24/234230&amp;from=rss)
* [2025-11-26, 22:41:00](https://science.slashdot.org/story/25/11/26/1949202/chinese-pharma-is-on-the-cusp-of-going-global?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chinese Pharma is On the Cusp of Going Global](https://science.slashdot.org/story/25/11/26/1949202/chinese-pharma-is-on-the-cusp-of-going-global?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-26, 22:01:00](https://entertainment.slashdot.org/story/25/11/26/1942237/how-stranger-things-defined-the-era-of-the-algorithm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How &apos;Stranger Things&apos; Defined the Era of the Algorithm](https://entertainment.slashdot.org/story/25/11/26/1942237/how-stranger-things-defined-the-era-of-the-algorithm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-26, 21:53:27](https://lobste.rs/s/ovfhqr/chat_control_eu_lawmakers_finally_agree) - [Chat Control: EU lawmakers finally agree on the voluntary scanning of your private chats](https://www.techradar.com/vpn/vpn-privacy-security/chat-control-eu-lawmakers-finally-agree-on-the-voluntary-scanning-of-your-private-chats)
* [2025-11-26, 21:25:00](https://tech.slashdot.org/story/25/11/26/1945257/european-lawmakers-seek-eu-wide-minimum-age-to-access-ai-chatbots-social-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [European Lawmakers Seek EU-Wide Minimum Age To Access AI Chatbots, Social Media](https://tech.slashdot.org/story/25/11/26/1945257/european-lawmakers-seek-eu-wide-minimum-age-to-access-ai-chatbots-social-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-26, 20:45:00](https://news.slashdot.org/story/25/11/26/1937217/more-than-half-of-new-articles-on-the-internet-are-being-written-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [More Than Half of New Articles On the Internet Are Being Written By AI](https://news.slashdot.org/story/25/11/26/1937217/more-than-half-of-new-articles-on-the-internet-are-being-written-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-26, 19:58:27](https://news.ycombinator.com/item?id=46061682) - [S&amp;box is now an open source game engine](https://sbox.game/news/update-25-11-26)
* [2025-11-26, 19:44:20](https://lobste.rs/s/nfkli6/liber_indigo_affordances_magic) - [Liber Indigo: The Affordances of Magic](https://www.youtube.com/watch?v=pGpBQgZ5IsI&amp;list=PLsfH1Ahi4SzE-QmrsrtyZubGmi66iP45V)
* [2025-11-26, 19:13:07](https://lobste.rs/s/p5k6aa/fail2ban_rce) - [fail2ban RCE](https://www.cve.org/CVERecord?id=CVE-2025-45311)
* [2025-11-26, 19:10:24](https://news.ycombinator.com/item?id=46061208) - [Fara-7B: An efficient agentic model for computer use](https://github.com/microsoft/fara)
* [2025-11-26, 18:41:40](https://lobste.rs/s/evzudd/very_fast_64_bit_date_algorithm_30_40) - [A Very Fast 64–Bit Date Algorithm: 30-40% faster](https://www.benjoffe.com/fast-date-64)
* [2025-11-26, 18:34:41](https://lobste.rs/s/7fsqgl/ulid_only_identifier_you_should_use) - [ULID - the ONLY identifier you should use?](https://www.youtube.com/watch?v=otW7nLd8P04)
* [2025-11-26, 18:08:02](https://news.ycombinator.com/item?id=46060508) - [Gemini CLI Tips and Tricks for Agentic Coding](https://github.com/addyosmani/gemini-cli-tips)
* [2025-11-26, 17:55:00](https://soylentnews.org/article.pl?sid=25/11/24/232236&amp;from=rss) - [Mozilla Resolves 21-Year-Old Bug, Adds Full XDG Directory Support](https://soylentnews.org/article.pl?sid=25/11/24/232236&amp;from=rss)
* [2025-11-26, 15:59:00](https://lobste.rs/s/vf6xi8/llmfuse_self_compressing_filesystem) - [llmfuse: a self-compressing filesystem backed by an LLM](https://grohan.co/2025/11/25/llmfuse/)
* [2025-11-26, 14:16:17](https://lobste.rs/s/iwzqi3/kde_going_all_on_wayland_future) - [KDE going all-in on a Wayland future](https://blogs.kde.org/2025/11/26/going-all-in-on-a-wayland-future/)
* [2025-11-26, 14:02:46](https://news.ycombinator.com/item?id=46057488) - [Voyager 1 is about to reach one light-day from Earth](https://scienceclock.com/voyager-1-is-about-to-reach-one-light-day-from-earth/)
* [2025-11-26, 13:51:07](https://lobste.rs/s/ilnv7s/building_64_bit_os_from_scratch_with) - [Building a 64-bit OS from Scratch with Claude Code](https://isene.org/2025/11/SimplicityOS.html)
* [2025-11-26, 13:26:13](https://lobste.rs/s/ru1n6p/why_strong_consistency) - [Why Strong Consistency?](https://brooker.co.za/blog/2025/11/18/consistency.html)
* [2025-11-26, 13:11:00](https://soylentnews.org/article.pl?sid=25/11/24/230252&amp;from=rss) - [The Reshoring Initiative - Real Reasons to Bring Jobs Back to USA From Asia](https://soylentnews.org/article.pl?sid=25/11/24/230252&amp;from=rss)
* [2025-11-26, 12:49:37](https://lobste.rs/s/yycuct/go_proposal_goroutine_metrics) - [Go proposal: Goroutine metrics](https://antonz.org/accepted/goroutine-metrics/)
* [2025-11-26, 12:03:20](https://lobste.rs/s/3kp1vt/url_c_puzzle) - [URL in C Puzzle](https://susam.net/url-in-c.html)
* [2025-11-26, 09:24:06](https://lobste.rs/s/jucg4w/i_don_t_care_how_well_your_ai_works) - [I don&apos;t care how well your \&quot;AI\&quot; works](https://fokus.cool/2025/11/25/i-dont-care-how-well-your-ai-works.html)
* [2025-11-26, 08:24:00](https://soylentnews.org/article.pl?sid=25/11/24/2255253&amp;from=rss) - [Zork I, II, and III go Open Source](https://soylentnews.org/article.pl?sid=25/11/24/2255253&amp;from=rss)
* [2025-11-26, 03:41:00](https://soylentnews.org/article.pl?sid=25/11/24/2253234&amp;from=rss) - [HP and Dell Disable HEVC Support Built Into Their Laptops’ CPUs](https://soylentnews.org/article.pl?sid=25/11/24/2253234&amp;from=rss)
* [2025-11-25, 22:57:00](https://soylentnews.org/article.pl?sid=25/11/24/2248217&amp;from=rss) - [Is Matrix Multiplication Ugly?](https://soylentnews.org/article.pl?sid=25/11/24/2248217&amp;from=rss)
* [2025-11-25, 22:30:24](https://lobste.rs/s/tt7izg/stop_hacklore_open_letter) - [Stop Hacklore - An Open Letter](https://www.hacklore.org/letter)
* [2025-11-25, 19:26:40](https://lobste.rs/s/ykoj5k/announcing_unison_1_0) - [Announcing Unison 1.0](https://www.unison-lang.org/unison-1-0/)
* [2025-11-25, 18:12:00](https://soylentnews.org/article.pl?sid=25/11/23/2227204&amp;from=rss) - [In 1982, a Physics Joke Gone Wrong Sparked the Invention of the Emoticon](https://soylentnews.org/article.pl?sid=25/11/23/2227204&amp;from=rss)
* [2025-11-25, 13:28:00](https://soylentnews.org/article.pl?sid=25/11/23/2222225&amp;from=rss) - [Scientists Now Know That Bees Can Process Time, a First in Insects](https://soylentnews.org/article.pl?sid=25/11/23/2222225&amp;from=rss)
* [2025-11-25, 08:41:00](https://soylentnews.org/article.pl?sid=25/11/23/2216237&amp;from=rss) - [I Set a Trap to Catch My Students Cheating With AI and the Results Were Shocking](https://soylentnews.org/article.pl?sid=25/11/23/2216237&amp;from=rss)
* [2025-11-25, 04:00:00](https://soylentnews.org/article.pl?sid=25/11/23/2211220&amp;from=rss) - [Researchers Find Simple Way to Destroy PFAS on Activated Carbon](https://soylentnews.org/article.pl?sid=25/11/23/2211220&amp;from=rss)
* [2025-11-24, 23:16:00](https://soylentnews.org/article.pl?sid=25/11/23/1458223&amp;from=rss) - [Ring&apos;s New Feature Turns Your Doorbell Into a Biometric Spy](https://soylentnews.org/article.pl?sid=25/11/23/1458223&amp;from=rss)
* [2025-11-24, 21:12:25](https://news.ycombinator.com/item?id=46039387) - [Willis Whitfield: Creator of clean room technology still in use today (2024)](https://www.sandia.gov/labnews/2024/04/04/willis-whitfield-a-simple-man-with-a-simple-solution-that-changed-the-world/)
* [2025-11-24, 20:48:18](https://news.ycombinator.com/item?id=46039106) - [Interactive λ-Reduction](https://deltanets.org/)
* [2025-11-24, 18:27:00](https://soylentnews.org/article.pl?sid=25/11/23/1349258&amp;from=rss) - [Thieves Want Your iPhone, Not Your Android](https://soylentnews.org/article.pl?sid=25/11/23/1349258&amp;from=rss)
* [2025-11-24, 13:42:00](https://soylentnews.org/article.pl?sid=25/11/23/0254204&amp;from=rss) - [Magician Forgets Password to His Own Hand After RFID Chip Implant](https://soylentnews.org/article.pl?sid=25/11/23/0254204&amp;from=rss)
* [2025-11-24, 12:39:10](https://news.ycombinator.com/item?id=46033472) - [Technical Deflation](https://benanderson.work/blog/technical-deflation/)
* [2025-11-24, 11:46:05](https://news.ycombinator.com/item?id=46033046) - [Essence and accident in language model-assisted coding](https://www.sicpers.info/2025/11/essence-and-accident-in-language-model-assisted-coding/)
* [2025-11-24, 08:53:00](https://soylentnews.org/article.pl?sid=25/11/23/0244245&amp;from=rss) - [First-Ever Full Earth System Simulation Provides New Tool to Understand Climate Change](https://soylentnews.org/article.pl?sid=25/11/23/0244245&amp;from=rss)
* [2025-11-24, 04:09:00](https://soylentnews.org/article.pl?sid=25/11/23/0241222&amp;from=rss) - [Debian Libre Live Images Released for Software Freedom Lovers](https://soylentnews.org/article.pl?sid=25/11/23/0241222&amp;from=rss)
* [2025-11-23, 23:26:00](https://soylentnews.org/article.pl?sid=25/11/23/0237208&amp;from=rss) - [US Gives Local Police a Face-Scanning App Similar to One Used by ICE Agents](https://soylentnews.org/article.pl?sid=25/11/23/0237208&amp;from=rss)
* [2025-11-23, 18:36:00](https://soylentnews.org/article.pl?sid=25/11/23/0229254&amp;from=rss) - [U.S. Spy Agency Releases Amelia Earhart Records](https://soylentnews.org/article.pl?sid=25/11/23/0229254&amp;from=rss)
* [2025-11-23, 18:16:58](https://news.ycombinator.com/item?id=46025911) - [G0-G3 corners, visualised: learn what \&quot;Apple corners\&quot; are](https://www.printables.com/model/1490911-g0-g3-corners-visualised-learn-what-apple-corners)
* [2025-11-23, 13:52:00](https://soylentnews.org/article.pl?sid=25/11/21/203250&amp;from=rss) - [Maybe That&apos;s Not Liquid Water on Mars After All](https://soylentnews.org/article.pl?sid=25/11/21/203250&amp;from=rss)
* [2025-11-23, 09:10:00](https://soylentnews.org/article.pl?sid=25/11/21/201212&amp;from=rss) - [Ancient Egyptians Likely Used Opiates Regularly](https://soylentnews.org/article.pl?sid=25/11/21/201212&amp;from=rss)
* [2025-11-23, 04:24:00](https://soylentnews.org/article.pl?sid=25/11/21/1957207&amp;from=rss) - [Mercury Pollution in Marine Mammals is Increasing, New Study Finds](https://soylentnews.org/article.pl?sid=25/11/21/1957207&amp;from=rss)
* [2025-11-23, 02:27:16](https://news.ycombinator.com/item?id=46020193) - [A Fast 64-Bit Date Algorithm (30–40% faster by counting dates backwards)](https://www.benjoffe.com/fast-date-64)
