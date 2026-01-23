# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Industry

* [Scaling PostgreSQL to power 800 million ChatGPT users](https://openai.com/index/scaling-postgresql/) - An exploration of how advanced PostgreSQL scaling supports a massive number of ChatGPT users, providing insights into the database's performance capabilities.

* [Apple Accuses European Commission of 'Political Delay Tactics' To Justify Fines](https://apple.slashdot.org/story/26/01/23/0941249/apple-accuses-european-commission-of-political-delay-tactics-to-justify-fines?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Apple confronts the European Commission over alleged political maneuvering behind imposed fines.

* [TikTok Finalizes Deal To Form New American Entity](https://tech.slashdot.org/story/26/01/23/0817218/tiktok-finalizes-deal-to-form-new-american-entity?utm_source=rss1.0mainlinkanon&utm_medium=feed) - TikTok secures a deal to form a new US-based entity amid ongoing scrutiny over data privacy.

* [AI Bathroom Monitors? Welcome To America’s New Surveillance High Schools](https://soylentnews.org/article.pl?sid=26/01/21/0147238&from=rss) - A critique of the growing implementation of AI surveillance in educational environments.

* [Waymo Launches Robotaxi Service In Miami, Extending US Lead](https://tech.slashdot.org/story/26/01/22/2141245/waymo-launches-robotaxi-service-in-miami-extending-us-lead?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Waymo expands its autonomous vehicle services to Miami, reinforcing its position in the US market.

## Artificial Intelligence

* [AI Boosts Research Careers But Flattens Scientific Discovery](https://science.slashdot.org/story/26/01/23/0148249/ai-boosts-research-careers-but-flattens-scientific-discovery?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Research poses questions about the impact of AI on innovation and scientific exploration.

* [Proton Spam and the AI Consent Problem](https://dbushell.com/2026/01/22/proton-spam/) - Opinions on AI’s role in digital spam and consent issues, tackling a modern tech phenomenon.

* [GPTZero finds 100 new hallucinations in NeurIPS 2025 accepted papers](https://gptzero.me/news/neurips/) - Discovery of inaccuracies in AI academic papers as highlighted by the GPTZero tool presents challenges.

* [Replacing Protobuf with Rust to go 5 times faster](https://pgdog.dev/blog/replace-protobuf-with-rust) - How transitioning to Rust offers performance benefits over traditional Protobuf structures.

## Ethics and Philosophy

* [The Moral Character of Cryptographic Work (2015)](https://www.cs.ucdavis.edu/~rogaway/papers/moral-fn.pdf) - A thought-provoking paper delving into ethical considerations within cryptography and its broader societal impact.

* [Presence in Death](https://rubinmuseum.org/presence-in-death/) - An art exhibit examining the intersection of mortality, digital presence, and human creativity.

* [Douglas Adams on the English–American cultural divide over 'heroes'](https://shreevatsa.net/post/douglas-adams-cultural-divide/) - Reflections from writer Douglas Adams on cultural perceptions of heroism.

* [Why medieval city-builder video games are historically inaccurate (2020)](https://www.leidenmedievalistsblog.nl/articles/why-medieval-city-builder-video-games-are-historically-inaccurate) - A critique of historical inaccuracies in popular video game genres.

## Advancements in Science

* [Physics of Foam Strangely Resembles AI Training](https://soylentnews.org/article.pl?sid=26/01/22/1141230&from=rss) - Analogies between the physical behavior of foam and artificial intelligence reveal surprising parallels.

* [Wikipedia Volunteers Spent Years Cataloging AI Tells. Now There's a Plugin to Avoid Them.](https://soylentnews.org/article.pl?sid=26/01/22/0422248&from=rss) - Efforts to combat AI-generated content artifacts lead to a new plugin innovation.

* [Textbooks Were Wrong: Human Hair Doesn’t Grow the Way Scientists Thought](https://soylentnews.org/article.pl?sid=26/01/22/0355223&from=rss) - A recent study upends existing notions about human hair growth patterns.

## Programming and Development

* [Explainer: Tree-sitter vs. LSP](https://lambdaland.org/posts/2026-01-21_tree-sitter_vs_lsp/) - Detailed comparison of Tree-sitter and Language Server Protocol (LSP) in the software development landscape.

* [What has Docker become?](https://tuananh.net/2026/01/20/what-has-docker-become/) - An in-depth critique of Docker's shifts and its impact on containerization technology.

* [Selectively Disabling HTTP/1.0 and HTTP/1.1](https://markmcb.com/web/selectively_disabling_http_1/) - A technical guide to selectively disabling older HTTP protocols for modern applications.

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

* [2026-01-23, 15:21:00](https://apple.slashdot.org/story/26/01/23/0941249/apple-accuses-european-commission-of-political-delay-tactics-to-justify-fines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Accuses European Commission of &apos;Political Delay Tactics&apos; To Justify Fines](https://apple.slashdot.org/story/26/01/23/0941249/apple-accuses-european-commission-of-political-delay-tactics-to-justify-fines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-23, 15:15:46](https://lobste.rs/s/wwmwed/moral_character_cryptographic_work_2015) - [The Moral Character of Cryptographic Work (2015)](https://www.cs.ucdavis.edu/~rogaway/papers/moral-fn.pdf)
* [2026-01-23, 14:45:54](https://lobste.rs/s/uluua1/scaling_postgresql_power_800_million) - [Scaling PostgreSQL to power 800 million ChatGPT users](https://openai.com/index/scaling-postgresql/)
* [2026-01-23, 14:40:21](https://news.ycombinator.com/item?id=46733025) - [Is liberal democracy in terminal decline?](https://www.ft.com/content/b4d2c7a3-587d-440f-a7a9-7e5e85b93a88)
* [2026-01-23, 14:40:00](https://slashdot.org/story/26/01/23/0757223/almost-everyone-laid-off-at-vimeo-following-bending-spoons-buyout?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Almost Everyone&apos; Laid Off at Vimeo Following Bending Spoons Buyout](https://slashdot.org/story/26/01/23/0757223/almost-everyone-laid-off-at-vimeo-following-bending-spoons-buyout?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-23, 14:38:14](https://news.ycombinator.com/item?id=46733009) - [Tesla fined for repeatedly failing to help UK police over driving offences](https://www.bbc.co.uk/news/articles/c0r44zpprg7o)
* [2026-01-23, 14:04:59](https://lobste.rs/s/wn2gyb/firefox_linux_2025) - [Firefox &amp; Linux in 2025](https://mastransky.wordpress.com/2026/01/23/firefox-linux-in-2025/)
* [2026-01-23, 14:00:00](https://science.slashdot.org/story/26/01/23/1226253/us-formally-withdraws-from-who?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Formally Withdraws From WHO](https://science.slashdot.org/story/26/01/23/1226253/us-formally-withdraws-from-who?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-23, 13:56:22](https://lobste.rs/s/b95hk4/interfaces_traits_c) - [Interfaces and traits in C](https://antonz.org/interfaces-in-c/)
* [2026-01-23, 13:45:00](https://soylentnews.org/article.pl?sid=26/01/22/1141230&amp;from=rss) - [Physics of Foam Strangely Resembles AI Training](https://soylentnews.org/article.pl?sid=26/01/22/1141230&amp;from=rss)
* [2026-01-23, 13:31:49](https://lobste.rs/s/5ogdk7/what_has_docker_become) - [What has Docker become?](https://tuananh.net/2026/01/20/what-has-docker-become/)
* [2026-01-23, 13:26:09](https://lobste.rs/s/x0qrlm/agents_md_as_dark_signal) - [AGENTS.md as a dark signal](https://joshmock.com/post/2026-agents-md-as-a-dark-signal/)
* [2026-01-23, 13:25:42](https://news.ycombinator.com/item?id=46732213) - [Radicle: The Sovereign Forge](https://radicle.xyz)
* [2026-01-23, 13:07:11](https://lobste.rs/s/zhsi80/gnu_guix_1_5_0_released) - [GNU Guix 1.5.0 released](https://guix.gnu.org/en/blog/2026/gnu-guix-1.5.0-released/)
* [2026-01-23, 13:04:09](https://news.ycombinator.com/item?id=46731996) - [Microsoft mishandling example.com](https://tinyapps.org/blog/microsoft-mishandling-example-com.html)
* [2026-01-23, 13:01:51](https://news.ycombinator.com/item?id=46731976) - [European Alternatives](https://european-alternatives.eu)
* [2026-01-23, 13:00:00](https://tech.slashdot.org/story/26/01/23/0817218/tiktok-finalizes-deal-to-form-new-american-entity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [TikTok Finalizes Deal To Form New American Entity](https://tech.slashdot.org/story/26/01/23/0817218/tiktok-finalizes-deal-to-form-new-american-entity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-23, 12:36:17](https://news.ycombinator.com/item?id=46731748) - [What has Docker become?](https://tuananh.net/2026/01/20/what-has-docker-become/)
* [2026-01-23, 12:16:54](https://news.ycombinator.com/item?id=46731612) - [Presence in Death](https://rubinmuseum.org/presence-in-death/)
* [2026-01-23, 11:54:53](https://news.ycombinator.com/item?id=46731432) - [Show HN: Whosthere: A LAN discovery tool with a modern TUI, written in Go](https://github.com/ramonvermeulen/whosthere)
* [2026-01-23, 10:49:50](https://lobste.rs/s/tov1qj/post_agentic_code_forges) - [Post-Agentic Code Forges](https://sluongng.substack.com/p/post-agentic-code-forges)
* [2026-01-23, 10:39:09](https://news.ycombinator.com/item?id=46730885) - [Booting from a vinyl record (2020)](https://boginjr.com/it/sw/dev/vinyl-boot/)
* [2026-01-23, 10:00:33](https://lobste.rs/s/qhickw/explainer_tree_sitter_vs_lsp) - [Explainer: Tree-sitter vs. LSP](https://lambdaland.org/posts/2026-01-21_tree-sitter_vs_lsp/)
* [2026-01-23, 10:00:00](https://science.slashdot.org/story/26/01/23/089256/active-sitting-is-better-for-brain-health?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Active&apos; Sitting Is Better For Brain Health](https://science.slashdot.org/story/26/01/23/089256/active-sitting-is-better-for-brain-health?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-23, 09:50:26](https://news.ycombinator.com/item?id=46730504) - [AI Usage Policy](https://github.com/ghostty-org/ghostty/blob/main/AI_POLICY.md)
* [2026-01-23, 09:38:02](https://news.ycombinator.com/item?id=46730436) - [Updates to our web search products and  Programmable Search Engine capabilities](https://programmablesearchengine.googleblog.com/2026/01/updates-to-our-web-search-products.html)
* [2026-01-23, 09:24:27](https://news.ycombinator.com/item?id=46730346) - [The state of modern AI text to speech systems for screen reader users](https://stuff.interfree.ca/2026/01/05/ai-tts-for-screenreaders.html)
* [2026-01-23, 09:05:39](https://lobste.rs/s/ncfrbj/gptzero_finds_100_new_hallucinations) - [GPTZero finds 100 new hallucinations in NeurIPS 2025 accepted papers](https://gptzero.me/news/neurips/)
* [2026-01-23, 09:03:31](https://news.ycombinator.com/item?id=46730214) - [Replacing Protobuf with Rust to go 5 times faster](https://pgdog.dev/blog/replace-protobuf-with-rust)
* [2026-01-23, 08:59:00](https://soylentnews.org/article.pl?sid=26/01/22/0422248&amp;from=rss) - [Wikipedia Volunteers Spent Years Cataloging AI Tells. Now There&apos;s a Plugin to Avoid Them.](https://soylentnews.org/article.pl?sid=26/01/22/0422248&amp;from=rss)
* [2026-01-23, 08:16:31](https://lobste.rs/s/uujlga/webracket_language_is_subset_racket) - [The WebRacket language is a subset of Racket that compiles to WebAssembly](https://github.com/soegaard/webracket)
* [2026-01-23, 07:40:07](https://lobste.rs/s/uskrd1/maintaining_shadow_branches_for_github) - [Maintaining shadow branches for GitHub PRs](https://maskray.me/blog/2026-01-22-maintaining-shadow-branches-for-github-prs)
* [2026-01-23, 07:01:29](https://news.ycombinator.com/item?id=46729368) - [Proton Spam and the AI Consent Problem](https://dbushell.com/2026/01/22/proton-spam/)
* [2026-01-23, 07:00:00](https://science.slashdot.org/story/26/01/23/0148249/ai-boosts-research-careers-but-flattens-scientific-discovery?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Boosts Research Careers But Flattens Scientific Discovery](https://science.slashdot.org/story/26/01/23/0148249/ai-boosts-research-careers-but-flattens-scientific-discovery?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-23, 06:34:12](https://lobste.rs/s/iyowrd/selectively_disabling_http_1_0_http_1_1) - [Selectively Disabling HTTP/1.0 and HTTP/1.1](https://markmcb.com/web/selectively_disabling_http_1/)
* [2026-01-23, 05:34:35](https://news.ycombinator.com/item?id=46728808) - [I built a light that reacts to radio waves [video]](https://www.youtube.com/watch?v=moBCOEiqiPs)
* [2026-01-23, 04:12:00](https://soylentnews.org/article.pl?sid=26/01/22/043242&amp;from=rss) - [Nvidia Wanted Pirated Book Stash Access](https://soylentnews.org/article.pl?sid=26/01/22/043242&amp;from=rss)
* [2026-01-23, 03:30:00](https://yro.slashdot.org/story/26/01/22/2339207/south-korea-launches-landmark-laws-to-regulate-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [South Korea Launches Landmark Laws To Regulate AI](https://yro.slashdot.org/story/26/01/22/2339207/south-korea-launches-landmark-laws-to-regulate-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-23, 02:39:31](https://lobste.rs/s/go7npe/why_does_ssh_send_100_packets_per) - [Why does SSH send 100 packets per keystroke?](https://eieio.games/blog/ssh-sends-100-packets-per-keystroke/)
* [2026-01-23, 02:02:00](https://slashdot.org/story/26/01/22/2317238/intel-struggles-to-meet-ai-data-center-demand?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel Struggles To Meet AI Data Center Demand](https://slashdot.org/story/26/01/22/2317238/intel-struggles-to-meet-ai-data-center-demand?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-23, 01:34:45](https://lobste.rs/s/seutjn/compiling_scheme_webassembly) - [Compiling Scheme to WebAssembly](https://eli.thegreenplace.net/2026/compiling-scheme-to-webassembly/)
* [2026-01-23, 01:25:00](https://yro.slashdot.org/story/26/01/22/235220/epic-and-google-have-a-secret-800-million-unreal-engine-and-services-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Epic and Google Have a Secret $800 Million Unreal Engine and Services Deal](https://yro.slashdot.org/story/26/01/22/235220/epic-and-google-have-a-secret-800-million-unreal-engine-and-services-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-23, 00:45:00](https://slashdot.org/story/26/01/22/2253207/eu-parliament-calls-for-detachment-from-us-tech-giants?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EU Parliament Calls For Detachment From US Tech Giants](https://slashdot.org/story/26/01/22/2253207/eu-parliament-calls-for-detachment-from-us-tech-giants?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-23, 00:39:28](https://lobste.rs/s/zgrqdi/exploit_cursor_agents_create_persistent) - [Exploit Cursor Agents to create persistent, distributed threats](https://ike.io/open-a-folder-all-your-agents-are-mine/)
* [2026-01-23, 00:22:58](https://news.ycombinator.com/item?id=46726857) - [Why medieval city-builder video games are historically inaccurate (2020)](https://www.leidenmedievalistsblog.nl/articles/why-medieval-city-builder-video-games-are-historically-inaccurate)
* [2026-01-23, 00:12:09](https://lobste.rs/s/ijyacx/overrun_with_ai_slop_curl_scraps_bug) - [Overrun with AI slop, cURL scraps bug bounties to ensure \&quot;intact mental health\&quot;](https://arstechnica.com/security/2026/01/overrun-with-ai-slop-curl-scraps-bug-bounties-to-ensure-intact-mental-health/)
* [2026-01-23, 00:02:00](https://tech.slashdot.org/story/26/01/22/221222/new-jersey-law-requires-e-bike-drivers-to-have-license-insurance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Jersey Law Requires E-Bike Drivers To Have License, Insurance](https://tech.slashdot.org/story/26/01/22/221222/new-jersey-law-requires-e-bike-drivers-to-have-license-insurance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-22, 23:28:00](https://soylentnews.org/article.pl?sid=26/01/22/0355223&amp;from=rss) - [Textbooks Were Wrong: Human Hair Doesn&apos;t Grow the Way Scientists Thought](https://soylentnews.org/article.pl?sid=26/01/22/0355223&amp;from=rss)
* [2026-01-22, 23:23:54](https://lobste.rs/s/jumnjp/we_built_museum_exhibit_about_1990s_game) - [We built a museum exhibit about a 1990s game hint line, with a physical binder](https://yarnspinner.dev/blog/hint-line-93/)
* [2026-01-22, 23:20:00](https://slashdot.org/story/26/01/22/2152231/the-microsoft-openai-files?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Microsoft-OpenAI Files](https://slashdot.org/story/26/01/22/2152231/the-microsoft-openai-files?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-22, 22:40:00](https://tech.slashdot.org/story/26/01/22/2141245/waymo-launches-robotaxi-service-in-miami-extending-us-lead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Waymo Launches Robotaxi Service In Miami, Extending US Lead](https://tech.slashdot.org/story/26/01/22/2141245/waymo-launches-robotaxi-service-in-miami-extending-us-lead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-22, 22:02:00](https://news.slashdot.org/story/26/01/22/2131206/google-begins-offering-free-sat-practice-tests-powered-by-gemini?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Begins Offering Free SAT Practice Tests Powered By Gemini](https://news.slashdot.org/story/26/01/22/2131206/google-begins-offering-free-sat-practice-tests-powered-by-gemini?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-22, 21:23:12](https://news.ycombinator.com/item?id=46725288) - [Capital One to acquire Brex for $5.15B](https://www.reuters.com/legal/transactional/capital-one-buy-fintech-firm-brex-515-billion-deal-2026-01-22/)
* [2026-01-22, 21:22:00](https://science.slashdot.org/story/26/01/22/185234/nasa-eyes-popular-pc-hardware-performance-tool-for-its-flight-simulators?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Eyes Popular PC Hardware Performance Tool for Its Flight Simulators](https://science.slashdot.org/story/26/01/22/185234/nasa-eyes-popular-pc-hardware-performance-tool-for-its-flight-simulators?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-22, 21:18:12](https://lobste.rs/s/spemfa/remotely_unlocking_encrypted_hard_disk) - [remotely unlocking an encrypted hard disk with systemd initrd on Arch](https://jyn.dev/remotely-unlocking-an-encrypted-hard-disk/)
* [2026-01-22, 20:05:45](https://lobste.rs/s/7oqiqi/ssh_has_no_host_header) - [SSH has no Host header](https://blog.exe.dev/ssh-host-header)
* [2026-01-22, 19:27:32](https://news.ycombinator.com/item?id=46723990) - [Why does SSH send 100 packets per keystroke?](https://eieio.games/blog/ssh-sends-100-packets-per-keystroke/)
* [2026-01-22, 19:00:37](https://lobste.rs/s/t9kzm7/cta_hierarchy_wild) - [CTA Hierarchy in the Wild](https://blog.jim-nielsen.com/2026/cta-hierarchy/)
* [2026-01-22, 18:40:00](https://soylentnews.org/article.pl?sid=26/01/21/0150257&amp;from=rss) - [Cows Use Tools](https://soylentnews.org/article.pl?sid=26/01/21/0150257&amp;from=rss)
* [2026-01-22, 18:38:27](https://news.ycombinator.com/item?id=46723384) - [I was banned from Claude for scaffolding a Claude.md file?](https://hugodaniel.com/posts/claude-code-banned-me/)
* [2026-01-22, 16:52:35](https://news.ycombinator.com/item?id=46721802) - [Show HN: isometric.nyc – giant isometric pixel art map of NYC](https://cannoneyed.com/isometric-nyc/)
* [2026-01-22, 15:20:48](https://news.ycombinator.com/item?id=46720395) - [GPTZero finds 100 new hallucinations in NeurIPS 2025 accepted papers](https://gptzero.me/news/neurips/)
* [2026-01-22, 15:12:14](https://lobste.rs/s/skjato/ghost_wi_fi) - [Ghost in the Wi-Fi](https://josephmate.github.io/2026-01-20-ghost-in-the-wifi/)
* [2026-01-22, 14:11:32](https://lobste.rs/s/l61c2k/announcing_rust_1_93_0) - [Announcing Rust 1.93.0](https://blog.rust-lang.org/2026/01/22/Rust-1.93.0/)
* [2026-01-22, 13:51:25](https://news.ycombinator.com/item?id=46719229) - [Qwen3-TTS family is now open sourced: Voice design, clone, and generation](https://qwen.ai/blog?id=qwen3tts-0115)
* [2026-01-22, 13:50:48](https://news.ycombinator.com/item?id=46719222) - [Douglas Adams on the English–American cultural divide over \&quot;heroes\&quot;](https://shreevatsa.net/post/douglas-adams-cultural-divide/)
* [2026-01-22, 13:46:00](https://soylentnews.org/article.pl?sid=26/01/21/0147238&amp;from=rss) - [AI Bathroom Monitors? Welcome To America’s New Surveillance High Schools](https://soylentnews.org/article.pl?sid=26/01/21/0147238&amp;from=rss)
* [2026-01-22, 10:32:08](https://lobste.rs/s/bndnsg/adversarial_coding_test) - [An adversarial coding test](https://runjak.codes/posts/2026-01-21-adversarial-coding-test/)
* [2026-01-22, 10:29:10](https://lobste.rs/s/m0twb1/your_app_subscription_is_now_my_weekend) - [Your App Subscription Is Now My Weekend Project](https://rselbach.com/your-sub-is-now-my-weekend-project/)
* [2026-01-22, 09:07:00](https://soylentnews.org/article.pl?sid=26/01/21/0141201&amp;from=rss) - [France Records More Deaths Than Births for First Time Since End of Second World War](https://soylentnews.org/article.pl?sid=26/01/21/0141201&amp;from=rss)
* [2026-01-22, 04:16:00](https://soylentnews.org/article.pl?sid=26/01/21/0136237&amp;from=rss) - [Professors Issue Warning Over Surge in College Students Unable to Read](https://soylentnews.org/article.pl?sid=26/01/21/0136237&amp;from=rss)
* [2026-01-21, 23:34:00](https://soylentnews.org/article.pl?sid=26/01/19/1628204&amp;from=rss) - [The Science That Casts Doubt on Claims About Microplastics](https://soylentnews.org/article.pl?sid=26/01/19/1628204&amp;from=rss)
* [2026-01-21, 18:49:00](https://soylentnews.org/article.pl?sid=26/01/19/1619249&amp;from=rss) - [Hobbies Don&apos;t Just Improve Personal Lives, They Can Boost Workplace Creativity Too](https://soylentnews.org/article.pl?sid=26/01/19/1619249&amp;from=rss)
* [2026-01-21, 16:40:02](https://news.ycombinator.com/item?id=46708055) - [Show HN: S2-lite, an open source Stream Store](https://github.com/s2-streamstore/s2)
* [2026-01-21, 14:06:00](https://soylentnews.org/article.pl?sid=26/01/19/1618219&amp;from=rss) - [IT Spending Set to Hit $1.4 Trillion in 2026 - but What Exactly Are We Spending It On?](https://soylentnews.org/article.pl?sid=26/01/19/1618219&amp;from=rss)
* [2026-01-21, 09:20:00](https://soylentnews.org/article.pl?sid=26/01/19/1615238&amp;from=rss) - [The Places We Make Memories Help Us Inscribe Them](https://soylentnews.org/article.pl?sid=26/01/19/1615238&amp;from=rss)
* [2026-01-21, 04:34:00](https://soylentnews.org/article.pl?sid=26/01/19/1613240&amp;from=rss) - [Proton VPN Kills Off Legacy OpenVPN Configs in Push for Better Security](https://soylentnews.org/article.pl?sid=26/01/19/1613240&amp;from=rss)
* [2026-01-20, 23:51:00](https://soylentnews.org/article.pl?sid=26/01/19/166239&amp;from=rss) - [Building the World&apos;s First Graviton Detector](https://soylentnews.org/article.pl?sid=26/01/19/166239&amp;from=rss)
* [2026-01-20, 19:06:00](https://soylentnews.org/article.pl?sid=26/01/19/0533234&amp;from=rss) - [China&apos;s Wind Farms Are Doing a Lot More Than Generating Electricity](https://soylentnews.org/article.pl?sid=26/01/19/0533234&amp;from=rss)
* [2026-01-20, 14:22:00](https://soylentnews.org/article.pl?sid=26/01/19/046252&amp;from=rss) - [Mosquitoes&apos; Thirst for Human Blood Has Increased as Biodiversity Loss Worsens](https://soylentnews.org/article.pl?sid=26/01/19/046252&amp;from=rss)
* [2026-01-20, 09:34:00](https://soylentnews.org/article.pl?sid=26/01/19/0357224&amp;from=rss) - [New Studies Can Explain Why Comet 3I/Atlas Isn&apos;t an Alien (Probably)](https://soylentnews.org/article.pl?sid=26/01/19/0357224&amp;from=rss)
* [2026-01-20, 04:44:00](https://soylentnews.org/article.pl?sid=26/01/18/0044243&amp;from=rss) - [Stellantis Drops Jeep, Chrysler Plug-in Hybrids Amid EV Sales Slowdown](https://soylentnews.org/article.pl?sid=26/01/18/0044243&amp;from=rss)
* [2026-01-20, 03:28:01](https://news.ycombinator.com/item?id=46687603) - [Flying with Photons: Rendering Novel Views of Propagating Light](https://anaghmalik.com/FlyingWithPhotons/)
* [2026-01-20, 00:20:54](https://news.ycombinator.com/item?id=46686402) - [AI is a horse (2024)](https://kconner.com/2024/08/02/ai-is-a-horse.html)
* [2026-01-20, 00:02:00](https://soylentnews.org/article.pl?sid=26/01/18/0043231&amp;from=rss) - [Anthropologists Offer New Evidence of Bipedalism in Long-Debated Fossil Discovery](https://soylentnews.org/article.pl?sid=26/01/18/0043231&amp;from=rss)
* [2026-01-19, 19:11:00](https://soylentnews.org/article.pl?sid=26/01/18/0042202&amp;from=rss) - [Linux Mint 22.3 “Zena” is Now Available for Download, Here&apos;s What&apos;s New](https://soylentnews.org/article.pl?sid=26/01/18/0042202&amp;from=rss)
* [2026-01-19, 14:38:00](https://soylentnews.org/article.pl?sid=26/01/18/0040215&amp;from=rss) - [Anything-Goes “Anyons” May be at the Root of Surprising Quantum Experiments](https://soylentnews.org/article.pl?sid=26/01/18/0040215&amp;from=rss)
* [2026-01-19, 09:45:00](https://soylentnews.org/article.pl?sid=26/01/18/0037250&amp;from=rss) - [AI and the Corporate Capture of Knowledge](https://soylentnews.org/article.pl?sid=26/01/18/0037250&amp;from=rss)
* [2026-01-19, 09:09:40](https://news.ycombinator.com/item?id=46676629) - [Variation on Iota](https://www.toolofthought.com/posts/variation-on-iota)
* [2026-01-19, 05:03:00](https://soylentnews.org/article.pl?sid=26/01/17/2355208&amp;from=rss) - [AWS Flips Switch on Euro Cloud as Customers Fret About Digital Sovereignty](https://soylentnews.org/article.pl?sid=26/01/17/2355208&amp;from=rss)
* [2026-01-19, 00:22:00](https://soylentnews.org/article.pl?sid=26/01/18/003211&amp;from=rss) - [Are You Dead?](https://soylentnews.org/article.pl?sid=26/01/18/003211&amp;from=rss)
