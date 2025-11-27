# [News Summary](https://kherrick.github.io/news-summary/)

## Innovations and Discoveries in Technology and Science

* [Lazy Linearity for a Core Functional Language (POPL 2026)](https://alt-romes.github.io/posts/2025-11-26-lazy-linearity-popl26.html) - Research on lazy linearity in programming, aimed at improving core functional languages.

* [GameShell: a game to learn (or teach) how to use standard commands in a Unix shell](https://github.com/phyver/GameShell) - An innovative game for mastering Unix command-line fundamentals.

* [China's Giant Underground Neutrino Observatory Releases Its First Results](https://science.slashdot.org/story/25/11/26/2337257/chinas-giant-underground-neutrino-observatory-releases-its-first-results?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Significant findings from a groundbreaking neutrino observatory.

* [DIY NAS: 2026 Edition](https://blog.briancmoses.com/2025/11/diy-nas-2026-edition.html) - An updated guide to building your own network-attached storage.

* [Fara-7B: An efficient agentic model for computer use](https://github.com/microsoft/fara) - Microsoft's release of Fara-7B, an advanced computational model.

* [Voyager 1 is about to reach one light-day from Earth](https://scienceclock.com/voyager-1-is-about-to-reach-one-light-day-from-earth/) - Voyager 1's incredible milestone on its deep-space journey.

## Open Source and Programming Insights

* [Penpot: The Open-Source Figma](https://github.com/penpot/penpot) - Penpot offers an open-source alternative to Figma for collaborative design.

* [Migrating the main Zig repository from GitHub to Codeberg](https://ziglang.org/news/migrating-from-github-to-codeberg/) - The Zig programming language's strategic move away from GitHub.

* [Linux Kernel Explorer](https://reverser.dev/linux-kernel-explorer) - A tool designed to elucidate Linux kernel internals for developers.

* [Bonsai_term: A library for building dynamic terminal apps by Jane Street](https://github.com/janestreet/bonsai_term) - A new library enhancing Terminal UI building capabilities by Jane Street.

* [llmfuse: a self-compressing filesystem backed by an LLM](https://grohan.co/2025/11/25/llmfuse/) - Exploration of a novel, LLM-backed self-compressing filesystem.

* [Stop Telling Us XMPP Should Use JSON](https://www.process-one.net/blog/stop-telling-us-xmpp-should-use-json/) - A commentary on why traditional XMPP design decisions remain relevant.

## Privacy, Security, and Ethical Concerns

* [Chat Control: EU lawmakers finally agree on the voluntary scanning of your private chats](https://www.techradar.com/vpn/vpn-privacy-security/chat-control-eu-lawmakers-finally-agree-on-the-voluntary-scanning-of-your-private-chats) - EU debates over privacy boundaries intensify.

* [OpenAI Says Dead Teen Violated TOS When He Used ChatGPT To Plan Suicide](https://yro.slashdot.org/story/25/11/26/2012215/openai-says-dead-teen-violated-tos-when-he-used-chatgpt-to-plan-suicide?utm_source=rss1.0mainlinkanon&utm_medium=feed) - OpenAI faces moral and legal scrutiny under tragic circumstances.

* [Debian Libre Live Images Released for Software Freedom Lovers](https://soylentnews.org/article.pl?sid=25/11/23/0241222&utm_medium=feed) - Debian offers new tools for advocates of software freedom.

* [Newegg Sparks Debate With New PayPal-Integrated AI Shopping Push](https://news.slashdot.org/story/25/11/26/1958216/newegg-sparks-debate-with-new-paypal-integrated-ai-shopping-push?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Controversial AI shopping features are being scrutinized for consumer rights.

## Historical and Cultural Developments

* [Willis Whitfield: A simple man with a simple solution that changed the world](https://www.sandia.gov/labnews/2024/04/04/willis-whitfield-a-simple-man-with-a-simple-solution-that-changed-the-world/) - Highlights the transformative inventions of Willis Whitfield.

* [In 1982, a Physics Joke Gone Wrong Sparked the Invention of the Emoticon](https://soylentnews.org/article.pl?sid=25/11/23/2227204&) - Analysis of the unexpected origins of the first emoticon.

* [US Gives Local Police a Face-Scanning App Similar to One Used by ICE Agents](https://soylentnews.org/article.pl?sid=25/11/23/0237208&) - Law enforcement technology faces ethical debates.

* [Ancient Egyptians Likely Used Opiates Regularly](https://soylentnews.org/article.pl?sid=25/11/21/201212&) - A dive into historical insights regarding Ancient Egyptian medical practices.

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

* [2025-11-27, 09:39:17](https://lobste.rs/s/qbu8jl/lazy_linearity_for_core_functional) - [Lazy Linearity for a Core Functional Language (POPL 2026)](https://alt-romes.github.io/posts/2025-11-26-lazy-linearity-popl26.html)
* [2025-11-27, 09:16:06](https://news.ycombinator.com/item?id=46067363) - [New research highlights a shortage of male mentors for boys and young men](https://www.psypost.org/new-research-highlights-a-shortage-of-male-mentors-for-boys-and-young-men/)
* [2025-11-27, 07:38:28](https://news.ycombinator.com/item?id=46066736) - [DNS Firewalling with MISP and Technitium DNS Server](https://zaferbalkan.com/technitium-misp/)
* [2025-11-27, 07:31:24](https://news.ycombinator.com/item?id=46066695) - [Ray Marching Soft Shadows in 2D](https://www.rykap.com/2020/09/23/distance-fields/)
* [2025-11-27, 07:00:00](https://science.slashdot.org/story/25/11/26/2337257/chinas-giant-underground-neutrino-observatory-releases-its-first-results?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s Giant Underground Neutrino Observatory Releases Its First Results](https://science.slashdot.org/story/25/11/26/2337257/chinas-giant-underground-neutrino-observatory-releases-its-first-results?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-27, 06:57:17](https://lobste.rs/s/42f5af/gameshell_game_learn_teach_how_use) - [GameShell: a game to learn (or teach) how to use standard commands in a Unix shell](https://github.com/phyver/GameShell)
* [2025-11-27, 06:53:17](https://news.ycombinator.com/item?id=46066482) - [The Nerd Reich – Silicon Valley Fascism and the War on Democracy](https://www.simonandschuster.com/books/The-Nerd-Reich/Gil-Duran/9781668221402)
* [2025-11-27, 06:17:37](https://news.ycombinator.com/item?id=46066280) - [Linux Kernel Explorer](https://reverser.dev/linux-kernel-explorer)
* [2025-11-27, 06:14:21](https://news.ycombinator.com/item?id=46066255) - [Last Issue of \&quot;ECMAScript News\&quot;](https://ecmascript.news/archive/es-next-news-2025-11-26.html)
* [2025-11-27, 05:51:21](https://news.ycombinator.com/item?id=46066126) - [Principles of Vasocomputation](https://opentheory.net/2023/07/principles-of-vasocomputation-a-unification-of-buddhist-phenomenology-active-inference-and-physical-reflex-part-i/)
* [2025-11-27, 05:28:50](https://news.ycombinator.com/item?id=46065997) - [Show HN: Era – Open-source local sandbox for AI agents](https://github.com/BinSquare/ERA)
* [2025-11-27, 04:55:57](https://news.ycombinator.com/item?id=46065817) - [Music eases surgery and speeds recovery, study finds](https://www.bbc.com/news/articles/c231dv9zpz3o)
* [2025-11-27, 04:34:56](https://news.ycombinator.com/item?id=46065698) - [Coq: The World&apos;s Best Macro Assembler? [pdf] [2013]](https://nickbenton.name/coqasm.pdf)
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
* [2025-11-27, 01:20:33](https://news.ycombinator.com/item?id=46064367) - [Bonsai_term: A library for building dynamic terminal apps by Jane Street](https://github.com/janestreet/bonsai_term)
* [2025-11-27, 00:45:00](https://apple.slashdot.org/story/25/11/26/2155234/googles-airdrop-support-for-pixel-10-likely-exists-because-of-eus-apple-ruling?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s AirDrop Support For Pixel 10 Likely Exists Because of EU&apos;s Apple Ruling](https://apple.slashdot.org/story/25/11/26/2155234/googles-airdrop-support-for-pixel-10-likely-exists-because-of-eus-apple-ruling?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-27, 00:02:00](https://yro.slashdot.org/story/25/11/26/2012215/openai-says-dead-teen-violated-tos-when-he-used-chatgpt-to-plan-suicide?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Says Dead Teen Violated TOS When He Used ChatGPT To Plan Suicide](https://yro.slashdot.org/story/25/11/26/2012215/openai-says-dead-teen-violated-tos-when-he-used-chatgpt-to-plan-suicide?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-26, 23:22:24](https://news.ycombinator.com/item?id=46063450) - [C100 Developer Terminal](https://caligra.com/)
* [2025-11-26, 23:20:00](https://news.slashdot.org/story/25/11/26/1958216/newegg-sparks-debate-with-new-paypal-integrated-ai-shopping-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Newegg Sparks Debate With New PayPal-Integrated AI Shopping Push](https://news.slashdot.org/story/25/11/26/1958216/newegg-sparks-debate-with-new-paypal-integrated-ai-shopping-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-26, 22:57:56](https://news.ycombinator.com/item?id=46063272) - [Running Unsupported iOS on Deprecated Devices](https://nyansatan.github.io/run-unsupported-ios/)
* [2025-11-26, 22:43:00](https://soylentnews.org/article.pl?sid=25/11/24/234230&amp;from=rss) - [The Escape Room Challenge: How One Person&apos;s Narcissism Can Undermine a Whole Team](https://soylentnews.org/article.pl?sid=25/11/24/234230&amp;from=rss)
* [2025-11-26, 22:41:00](https://science.slashdot.org/story/25/11/26/1949202/chinese-pharma-is-on-the-cusp-of-going-global?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chinese Pharma is On the Cusp of Going Global](https://science.slashdot.org/story/25/11/26/1949202/chinese-pharma-is-on-the-cusp-of-going-global?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-26, 22:26:36](https://news.ycombinator.com/item?id=46063072) - [Bring bathroom doors back to hotels](https://bringbackdoors.com/)
* [2025-11-26, 22:01:00](https://entertainment.slashdot.org/story/25/11/26/1942237/how-stranger-things-defined-the-era-of-the-algorithm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How &apos;Stranger Things&apos; Defined the Era of the Algorithm](https://entertainment.slashdot.org/story/25/11/26/1942237/how-stranger-things-defined-the-era-of-the-algorithm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-26, 21:53:27](https://lobste.rs/s/ovfhqr/chat_control_eu_lawmakers_finally_agree) - [Chat Control: EU lawmakers finally agree on the voluntary scanning of your private chats](https://www.techradar.com/vpn/vpn-privacy-security/chat-control-eu-lawmakers-finally-agree-on-the-voluntary-scanning-of-your-private-chats)
* [2025-11-26, 21:25:36](https://news.ycombinator.com/item?id=46062504) - [The EU made Apple adopt new Wi-Fi standards, and now Android can support AirDrop](https://arstechnica.com/gadgets/2025/11/the-eu-made-apple-adopt-new-wi-fi-standards-and-now-android-can-support-airdrop/)
* [2025-11-26, 21:25:00](https://tech.slashdot.org/story/25/11/26/1945257/european-lawmakers-seek-eu-wide-minimum-age-to-access-ai-chatbots-social-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [European Lawmakers Seek EU-Wide Minimum Age To Access AI Chatbots, Social Media](https://tech.slashdot.org/story/25/11/26/1945257/european-lawmakers-seek-eu-wide-minimum-age-to-access-ai-chatbots-social-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-26, 20:45:00](https://news.slashdot.org/story/25/11/26/1937217/more-than-half-of-new-articles-on-the-internet-are-being-written-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [More Than Half of New Articles On the Internet Are Being Written By AI](https://news.slashdot.org/story/25/11/26/1937217/more-than-half-of-new-articles-on-the-internet-are-being-written-by-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-26, 20:05:00](https://slashdot.org/story/25/11/26/1930205/sec-must-not-let-crypto-companies-bypass-rules-stock-exchanges-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SEC Must Not Let Crypto Companies &apos;Bypass&apos; Rules, Stock Exchanges Say](https://slashdot.org/story/25/11/26/1930205/sec-must-not-let-crypto-companies-bypass-rules-stock-exchanges-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-26, 19:58:27](https://news.ycombinator.com/item?id=46061682) - [S&amp;box is now an open source game engine](https://sbox.game/news/update-25-11-26)
* [2025-11-26, 19:44:20](https://lobste.rs/s/nfkli6/liber_indigo_affordances_magic) - [Liber Indigo: The Affordances of Magic](https://www.youtube.com/watch?v=pGpBQgZ5IsI&amp;list=PLsfH1Ahi4SzE-QmrsrtyZubGmi66iP45V)
* [2025-11-26, 19:26:00](https://tech.slashdot.org/story/25/11/26/1926201/pentagon-cited-alibaba-on-china-military-aid-in-oct-7-letter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pentagon Cited Alibaba on China Military Aid in Oct. 7 Letter](https://tech.slashdot.org/story/25/11/26/1926201/pentagon-cited-alibaba-on-china-military-aid-in-oct-7-letter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-26, 19:13:07](https://lobste.rs/s/p5k6aa/fail2ban_rce) - [fail2ban RCE](https://www.cve.org/CVERecord?id=CVE-2025-45311)
* [2025-11-26, 19:10:24](https://news.ycombinator.com/item?id=46061208) - [Fara-7B: An efficient agentic model for computer use](https://github.com/microsoft/fara)
* [2025-11-26, 18:45:00](https://news.slashdot.org/story/25/11/26/1842249/openai-needs-at-least-207-billion-by-2030-just-to-keep-losing-money-hsbc-estimates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Needs At Least $207 Billion By 2030 Just To Keep Losing Money, HSBC Estimates](https://news.slashdot.org/story/25/11/26/1842249/openai-needs-at-least-207-billion-by-2030-just-to-keep-losing-money-hsbc-estimates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-26, 18:41:40](https://lobste.rs/s/evzudd/very_fast_64_bit_date_algorithm_30_40) - [A Very Fast 64–Bit Date Algorithm: 30-40% faster](https://www.benjoffe.com/fast-date-64)
* [2025-11-26, 18:34:41](https://lobste.rs/s/7fsqgl/ulid_only_identifier_you_should_use) - [ULID - the ONLY identifier you should use?](https://www.youtube.com/watch?v=otW7nLd8P04)
* [2025-11-26, 18:11:00](https://slashdot.org/story/25/11/26/1811238/chinas-dual-squeeze-on-european-industry-intensifies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s Dual Squeeze on European Industry Intensifies](https://slashdot.org/story/25/11/26/1811238/chinas-dual-squeeze-on-european-industry-intensifies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
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
* [2025-11-26, 10:06:41](https://news.ycombinator.com/item?id=46055935) - [A cell so minimal that it challenges definitions of life](https://www.quantamagazine.org/a-cell-so-minimal-that-it-challenges-definitions-of-life-20251124/)
* [2025-11-26, 09:24:06](https://lobste.rs/s/jucg4w/i_don_t_care_how_well_your_ai_works) - [I don&apos;t care how well your \&quot;AI\&quot; works](https://fokus.cool/2025/11/25/i-dont-care-how-well-your-ai-works.html)
* [2025-11-26, 08:24:00](https://soylentnews.org/article.pl?sid=25/11/24/2255253&amp;from=rss) - [Zork I, II, and III go Open Source](https://soylentnews.org/article.pl?sid=25/11/24/2255253&amp;from=rss)
* [2025-11-26, 03:41:00](https://soylentnews.org/article.pl?sid=25/11/24/2253234&amp;from=rss) - [HP and Dell Disable HEVC Support Built Into Their Laptops’ CPUs](https://soylentnews.org/article.pl?sid=25/11/24/2253234&amp;from=rss)
* [2025-11-26, 00:27:49](https://lobste.rs/s/vvy1o7/what_they_don_t_tell_you_about_maintaining) - [What They Don&apos;t Tell You About Maintaining an Open Source Project](https://andrej.sh/blog/maintaining-open-source-project/)
* [2025-11-25, 22:57:00](https://soylentnews.org/article.pl?sid=25/11/24/2248217&amp;from=rss) - [Is Matrix Multiplication Ugly?](https://soylentnews.org/article.pl?sid=25/11/24/2248217&amp;from=rss)
* [2025-11-25, 22:30:24](https://lobste.rs/s/tt7izg/stop_hacklore_open_letter) - [Stop Hacklore - An Open Letter](https://www.hacklore.org/letter)
* [2025-11-25, 19:26:40](https://lobste.rs/s/ykoj5k/announcing_unison_1_0) - [Announcing Unison 1.0](https://www.unison-lang.org/unison-1-0/)
* [2025-11-25, 18:12:00](https://soylentnews.org/article.pl?sid=25/11/23/2227204&amp;from=rss) - [In 1982, a Physics Joke Gone Wrong Sparked the Invention of the Emoticon](https://soylentnews.org/article.pl?sid=25/11/23/2227204&amp;from=rss)
* [2025-11-25, 17:05:43](https://lobste.rs/s/iq1zrm/unifying_wikipedia_mobile_desktop) - [Unifying Wikipedia mobile and desktop domains](https://techblog.wikimedia.org/2025/11/21/unifying-mobile-and-desktop-domains/)
* [2025-11-25, 16:39:23](https://lobste.rs/s/igvnnq/stop_telling_us_xmpp_should_use_json) - [Stop Telling Us XMPP Should Use JSON](https://www.process-one.net/blog/stop-telling-us-xmpp-should-use-json/)
* [2025-11-25, 14:03:08](https://lobste.rs/s/occlzx/constant_time_support_lands_llvm) - [Constant-time support lands in LLVM: Protecting cryptographic code at the compiler level](https://blog.trailofbits.com/2025/11/25/constant-time-support-lands-in-llvm-protecting-cryptographic-code-at-the-compiler-level/)
* [2025-11-25, 13:28:00](https://soylentnews.org/article.pl?sid=25/11/23/2222225&amp;from=rss) - [Scientists Now Know That Bees Can Process Time, a First in Insects](https://soylentnews.org/article.pl?sid=25/11/23/2222225&amp;from=rss)
* [2025-11-25, 08:41:00](https://soylentnews.org/article.pl?sid=25/11/23/2216237&amp;from=rss) - [I Set a Trap to Catch My Students Cheating With AI and the Results Were Shocking](https://soylentnews.org/article.pl?sid=25/11/23/2216237&amp;from=rss)
* [2025-11-25, 04:00:00](https://soylentnews.org/article.pl?sid=25/11/23/2211220&amp;from=rss) - [Researchers Find Simple Way to Destroy PFAS on Activated Carbon](https://soylentnews.org/article.pl?sid=25/11/23/2211220&amp;from=rss)
* [2025-11-24, 23:16:00](https://soylentnews.org/article.pl?sid=25/11/23/1458223&amp;from=rss) - [Ring&apos;s New Feature Turns Your Doorbell Into a Biometric Spy](https://soylentnews.org/article.pl?sid=25/11/23/1458223&amp;from=rss)
* [2025-11-24, 21:12:25](https://news.ycombinator.com/item?id=46039387) - [Willis Whitfield: A simple man with a simple solution that changed the world](https://www.sandia.gov/labnews/2024/04/04/willis-whitfield-a-simple-man-with-a-simple-solution-that-changed-the-world/)
* [2025-11-24, 20:48:18](https://news.ycombinator.com/item?id=46039106) - [Interactive λ-Reduction](https://deltanets.org/)
* [2025-11-24, 18:27:00](https://soylentnews.org/article.pl?sid=25/11/23/1349258&amp;from=rss) - [Thieves Want Your iPhone, Not Your Android](https://soylentnews.org/article.pl?sid=25/11/23/1349258&amp;from=rss)
* [2025-11-24, 13:42:00](https://soylentnews.org/article.pl?sid=25/11/23/0254204&amp;from=rss) - [Magician Forgets Password to His Own Hand After RFID Chip Implant](https://soylentnews.org/article.pl?sid=25/11/23/0254204&amp;from=rss)
* [2025-11-24, 08:53:00](https://soylentnews.org/article.pl?sid=25/11/23/0244245&amp;from=rss) - [First-Ever Full Earth System Simulation Provides New Tool to Understand Climate Change](https://soylentnews.org/article.pl?sid=25/11/23/0244245&amp;from=rss)
* [2025-11-24, 04:09:00](https://soylentnews.org/article.pl?sid=25/11/23/0241222&amp;from=rss) - [Debian Libre Live Images Released for Software Freedom Lovers](https://soylentnews.org/article.pl?sid=25/11/23/0241222&amp;from=rss)
* [2025-11-23, 23:26:00](https://soylentnews.org/article.pl?sid=25/11/23/0237208&amp;from=rss) - [US Gives Local Police a Face-Scanning App Similar to One Used by ICE Agents](https://soylentnews.org/article.pl?sid=25/11/23/0237208&amp;from=rss)
* [2025-11-23, 18:36:00](https://soylentnews.org/article.pl?sid=25/11/23/0229254&amp;from=rss) - [U.S. Spy Agency Releases Amelia Earhart Records](https://soylentnews.org/article.pl?sid=25/11/23/0229254&amp;from=rss)
* [2025-11-23, 18:16:58](https://news.ycombinator.com/item?id=46025911) - [G0-G3 corners, visualised: learn what \&quot;Apple corners\&quot; are](https://www.printables.com/model/1490911-g0-g3-corners-visualised-learn-what-apple-corners)
* [2025-11-23, 13:52:00](https://soylentnews.org/article.pl?sid=25/11/21/203250&amp;from=rss) - [Maybe That&apos;s Not Liquid Water on Mars After All](https://soylentnews.org/article.pl?sid=25/11/21/203250&amp;from=rss)
* [2025-11-23, 09:10:00](https://soylentnews.org/article.pl?sid=25/11/21/201212&amp;from=rss) - [Ancient Egyptians Likely Used Opiates Regularly](https://soylentnews.org/article.pl?sid=25/11/21/201212&amp;from=rss)
* [2025-11-23, 04:24:00](https://soylentnews.org/article.pl?sid=25/11/21/1957207&amp;from=rss) - [Mercury Pollution in Marine Mammals is Increasing, New Study Finds](https://soylentnews.org/article.pl?sid=25/11/21/1957207&amp;from=rss)
* [2025-11-23, 02:27:16](https://news.ycombinator.com/item?id=46020193) - [A Fast 64-Bit Date Algorithm (30–40% faster by counting dates backwards)](https://www.benjoffe.com/fast-date-64)
