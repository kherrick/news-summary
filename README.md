# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software

* [Build Your Own Link Blog](https://xuanwo.io/links/2025/01/link-blog/) - A guide to constructing a personalized link blog, inspired by Simon Willison, for efficient sharing and organization. [Comments](https://news.ycombinator.com/item?id=42933383)

* [No-Panic Rust: A Nice Technique for Systems Programming](https://blog.reverberate.org/2025/02/03/no-panic-rust.html) - An innovative approach in Rust to handle system-level programming without panic-inducing errors. [Comments](https://lobste.rs/s/wucizv/no_panic_rust_nice_technique_for_systems)

* [Decorator JITs - Python as a DSL](https://eli.thegreenplace.net/2025/decorator-jits-python-as-a-dsl/) - Exploring the use of JIT decorators to turn Python into a Domain-Specific Language. [Comments](https://lobste.rs/s/rgydie/decorator_jits_python_as_dsl)

* [WebAssembly from the Ground Up](https://wasmgroundup.com) - A foundational dive into WebAssembly and its potential in modern development. [Comments](https://lobste.rs/s/yyx0tt/webassembly_from_ground_up)

* [Radiant Foam: Real-Time Differentiable Ray Tracing](https://radfoam.github.io) - A revolutionary project aimed at real-time rendering with differentiable ray tracing. [Comments](https://news.ycombinator.com/item?id=42931109)

## Scientific Discoveries and Insights

* [The Lost Story of Alan Turing's "Delilah" Project](https://spectrum.ieee.org/alan-turings-delilah) - Unveiling the history of Alan Turing's overlooked cryptographic invention, Project Delilah. [Comments](https://news.ycombinator.com/item?id=42933049)

* [Dolní Vĕstonice Portrait Head: The oldest known human portrait in the world](https://www.livescience.com/archaeology/dolni-vestonice-portrait-head-the-oldest-known-human-portrait-in-the-world) - Examining the world's earliest known human portrait dated over 29,000 years ago. [Comments](https://news.ycombinator.com/item?id=42926423)

## AI and Policy

* [AI Systems With 'Unacceptable Risk' Are Now Banned In the EU](https://slashdot.org/story/25/02/04/0124248/ai-systems-with-unacceptable-risk-are-now-banned-in-the-eu?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The European Union implements stringent bans on AI systems deemed to pose unacceptable risks. [Comments](https://news.ycombinator.com/item?id=42916849)

* [CERN's Mark Thomson: AI To Revolutionize Fundamental Physics](https://science.slashdot.org/story/25/02/04/0015227/cerns-mark-thomson-ai-to-revolutionize-fundamental-physics?utm_source=rss1.0mainlinkanon&utm_medium=feed) - CERN highlights how AI could lead transformative advances in physics research. [Comments](https://science.slashdot.org/story/25/02/04/0015227/cerns-mark-thomson-ai-to-revolutionize-fundamental-physics?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Cultural and Historical Topics

* [Bonobos Can Tell When They Know Something You Don't](https://science.slashdot.org/story/25/02/04/002204/bonobos-can-tell-when-they-know-something-you-dont?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Research into bonobo cognition uncovering advanced social awareness and perspective-taking. [Comments](https://science.slashdot.org/story/25/02/04/002204/bonobos-can-tell-when-they-know-something-you-dont?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Tech Industry and Staffing

* [Salesforce Cutting 1,000 Roles While Hiring Salespeople for AI](https://slashdot.org/story/25/02/04/041235/salesforce-cutting-1000-roles-while-hiring-salespeople-for-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Salesforce restructures its workforce priorities, emphasizing AI-related sales roles. [Comments](https://slashdot.org/story/25/02/04/041235/salesforce-cutting-1000-roles-while-hiring-salespeople-for-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [America desperately needs more air traffic controllers](https://www.cnn.com/2025/02/04/business/air-traffic-controller-shortage/index.html) - Exploring the shortage of U.S. air traffic controllers amidst increasing aviation demand. [Comments](https://news.ycombinator.com/item?id=42933840)

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

* [2025-02-04, 15:52:01](https://lobste.rs/s/ou6ky6/big_packages_many_dependencies) - [Big Packages or Many Dependencies ](https://v5.chriskrycho.com/notes/big-packages-or-many-dependencies/)
* [2025-02-04, 15:44:21](https://news.ycombinator.com/item?id=42933840) - [America desperately needs more air traffic controllers](https://www.cnn.com/2025/02/04/business/air-traffic-controller-shortage/index.html)
* [2025-02-04, 15:25:27](https://news.ycombinator.com/item?id=42933507) - [100 Or so Books that shaped a Century of Science](https://web.mnstate.edu/schwartz/centurylist2.html)
* [2025-02-04, 15:20:37](https://news.ycombinator.com/item?id=42933418) - [Spotify Paid $10B to the Music Industry in 2024, $1B More Than Last Year](https://variety.com/2025/digital/news/spotify-paid-out-10-billion-to-music-industry-2024-1236287781/)
* [2025-02-04, 15:17:48](https://news.ycombinator.com/item?id=42933383) - [Build a link blog like Simon Willison](https://xuanwo.io/links/2025/01/link-blog/)
* [2025-02-04, 15:12:03](https://news.ycombinator.com/item?id=42933295) - [NASA Told to to Scrub Mentions of Indigenous People, Women from Its Websites](https://www.404media.co/nasa-dei-drop-everything-executive-order/)
* [2025-02-04, 15:11:07](https://news.ycombinator.com/item?id=42933283) - [Vanguard's Average Fee Is Now Just 0.07% After Biggest-Ever Cut](https://www.bloomberg.com/news/articles/2025-02-03/vanguard-s-average-fee-is-now-just-0-07-after-biggest-ever-cut)
* [2025-02-04, 15:00:00](https://news.slashdot.org/story/25/02/04/1446222/chris-anderson-is-giving-ted-away-to-whoever-has-the-best-idea-for-its-future?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Chris Anderson Is Giving TED Away To Whoever Has the Best Idea for Its Future](https://news.slashdot.org/story/25/02/04/1446222/chris-anderson-is-giving-ted-away-to-whoever-has-the-best-idea-for-its-future?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-04, 14:50:00](https://news.ycombinator.com/item?id=42933049) - [The Lost Story of Alan Turing's \"Delilah\" Project](https://spectrum.ieee.org/alan-turings-delilah)
* [2025-02-04, 14:48:52](https://news.ycombinator.com/item?id=42933031) - [Programmers are modern-day computers](https://jtlicardo.com/writing/modern-day-computers/)
* [2025-02-04, 14:41:00](https://it.slashdot.org/story/25/02/04/133247/microsoft-veteran-ponders-world-where-toothbrushes-need-reboots?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Veteran Ponders World Where Toothbrushes Need Reboots](https://it.slashdot.org/story/25/02/04/133247/microsoft-veteran-ponders-world-where-toothbrushes-need-reboots?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-04, 14:27:26](https://lobste.rs/s/rgydie/decorator_jits_python_as_dsl) - [Decorator JITs - Python as a DSL](https://eli.thegreenplace.net/2025/decorator-jits-python-as-a-dsl/)
* [2025-02-04, 14:00:00](https://tech.slashdot.org/story/25/02/04/1250212/china-launches-antitrust-investigation-into-google?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [China Launches Antitrust Investigation Into Google](https://tech.slashdot.org/story/25/02/04/1250212/china-launches-antitrust-investigation-into-google?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-04, 13:42:50](https://lobste.rs/s/wucizv/no_panic_rust_nice_technique_for_systems) - [No-Panic Rust: A Nice Technique for Systems Programming](https://blog.reverberate.org/2025/02/03/no-panic-rust.html)
* [2025-02-04, 13:37:57](https://news.ycombinator.com/item?id=42932137) - [Bouncing Beholder, my winning JS1K entry (2012)](https://marijnhaverbeke.nl/js1k/)
* [2025-02-04, 13:32:33](https://lobste.rs/s/uivcxm/how_configure_multiple_tor_relays_on_same) - [How to configure multiple Tor relays on the same interface with different IPs](https://osservatorionessuno.org/blog/2025/02/how-to-configure-multiple-tor-relays-on-the-same-interface-with-different-ips/)
* [2025-02-04, 13:00:00](https://linux.slashdot.org/story/25/02/04/0044210/popular-linux-orgs-freedesktop-alpine-linux-are-scrambling-for-new-web-hosting?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Popular Linux Orgs Freedesktop, Alpine Linux Are Scrambling For New Web Hosting](https://linux.slashdot.org/story/25/02/04/0044210/popular-linux-orgs-freedesktop-alpine-linux-are-scrambling-for-new-web-hosting?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-04, 12:23:00](https://soylentnews.org/article.pl?sid=25/02/02/1444250&from=rss) - [Fediverse Explosive Growth - 100m Posts in January](https://soylentnews.org/article.pl?sid=25/02/02/1444250&from=rss)
* [2025-02-04, 12:01:03](https://news.ycombinator.com/item?id=42931269) - [Nango (Product Integrations Platform) Is Hiring a Senior Full-Stack Engineer](https://www.nango.dev/jobs)
* [2025-02-04, 11:39:56](https://news.ycombinator.com/item?id=42931109) - [Radiant Foam: Real-Time Differentiable Ray Tracing](https://radfoam.github.io)
* [2025-02-04, 11:19:03](https://news.ycombinator.com/item?id=42930974) - [Popular Linux orgs Freedesktop and Alpine Linux are scrambling for new webhost](https://arstechnica.com/gadgets/2025/02/popular-linux-orgs-freedesktop-and-alpine-linux-are-scrambling-for-new-web-hosting/)
* [2025-02-04, 10:02:46](https://lobste.rs/s/vefy9j/how_languages_influence_each_other) - [How languages influence each other and evolve](https://thetechenabler.substack.com/p/how-languages-influence-each-other)
* [2025-02-04, 09:48:01](https://lobste.rs/s/ezimxi/notes_on_type_layouts_abis_rust_2018) - [Notes on Type Layouts and ABIs in Rust (2018)](https://faultlore.com/blah/rust-layouts-and-abis/)
* [2025-02-04, 09:26:15](https://lobste.rs/s/yyx0tt/webassembly_from_ground_up) - [WebAssembly from the Ground Up](https://wasmgroundup.com)
* [2025-02-04, 09:00:00](https://slashdot.org/story/25/02/04/0124248/ai-systems-with-unacceptable-risk-are-now-banned-in-the-eu?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [AI Systems With 'Unacceptable Risk' Are Now Banned In the EU](https://slashdot.org/story/25/02/04/0124248/ai-systems-with-unacceptable-risk-are-now-banned-in-the-eu?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-04, 07:41:00](https://soylentnews.org/article.pl?sid=25/02/02/1338233&from=rss) - [US to Deploy Molten Salt Reactors to Turn Wastewater Into Freshwater](https://soylentnews.org/article.pl?sid=25/02/02/1338233&from=rss)
* [2025-02-04, 07:38:03](https://lobste.rs/s/gjdafu/seeking_support_after_equinix_metal) - [Seeking Support After Equinix Metal Sunsets](https://alpinelinux.org/posts/Seeking-Support-After-Equinix-Metal-Sunsets.html)
* [2025-02-04, 07:15:18](https://lobste.rs/s/vr0l4g/best_simple_system_for_now) - [Best Simple System for Now](https://dannorth.net/best-simple-system-for-now/)
* [2025-02-04, 04:02:00](https://slashdot.org/story/25/02/04/041235/salesforce-cutting-1000-roles-while-hiring-salespeople-for-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Salesforce Cutting 1,000 Roles While Hiring Salespeople for AI](https://slashdot.org/story/25/02/04/041235/salesforce-cutting-1000-roles-while-hiring-salespeople-for-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-04, 03:30:00](https://science.slashdot.org/story/25/02/04/0015227/cerns-mark-thomson-ai-to-revolutionize-fundamental-physics?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [CERN's Mark Thomson: AI To Revolutionize Fundamental Physics](https://science.slashdot.org/story/25/02/04/0015227/cerns-mark-thomson-ai-to-revolutionize-fundamental-physics?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-04, 02:56:00](https://soylentnews.org/article.pl?sid=25/02/02/141218&from=rss) - [How Does DeepSeek R1 Really Fare Against OpenAI's Best Reasoning Models?](https://soylentnews.org/article.pl?sid=25/02/02/141218&from=rss)
* [2025-02-04, 01:46:33](https://news.ycombinator.com/item?id=42926423) - [Dolní Vĕstonice Portrait Head: The oldest known human portrait in the world](https://www.livescience.com/archaeology/dolni-vestonice-portrait-head-the-oldest-known-human-portrait-in-the-world)
* [2025-02-04, 01:30:00](https://science.slashdot.org/story/25/02/04/002204/bonobos-can-tell-when-they-know-something-you-dont?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Bonobos Can Tell When They Know Something You Don't](https://science.slashdot.org/story/25/02/04/002204/bonobos-can-tell-when-they-know-something-you-dont?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-04, 01:15:28](https://news.ycombinator.com/item?id=42926076) - [The Video Game History Foundation library opens in early access](https://gamehistory.org/vghf-library-launch/)
* [2025-02-04, 00:50:00](https://yro.slashdot.org/story/25/02/04/0037221/senator-hawley-proposes-jail-time-for-people-who-download-deepseek?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Senator Hawley Proposes Jail Time For People Who Download DeepSeek](https://yro.slashdot.org/story/25/02/04/0037221/senator-hawley-proposes-jail-time-for-people-who-download-deepseek?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-04, 00:10:00](https://yro.slashdot.org/story/25/02/03/2353253/tsas-airport-facial-recognition-tech-faces-audit-probe?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [TSA's Airport Facial-Recognition Tech Faces Audit Probe](https://yro.slashdot.org/story/25/02/03/2353253/tsas-airport-facial-recognition-tech-faces-audit-probe?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-03, 23:32:00](https://yro.slashdot.org/story/25/02/03/2330236/judge-denies-apples-attempt-to-intervene-in-google-search-antitrust-trial?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Judge Denies Apple's Attempt To Intervene In Google Search Antitrust Trial](https://yro.slashdot.org/story/25/02/03/2330236/judge-denies-apples-attempt-to-intervene-in-google-search-antitrust-trial?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-03, 22:40:00](https://slashdot.org/story/25/02/03/2042230/anthropic-asks-job-applicants-not-to-use-ai-in-job-applications?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Anthropic Asks Job Applicants Not To Use AI In Job Applications](https://slashdot.org/story/25/02/03/2042230/anthropic-asks-job-applicants-not-to-use-ai-in-job-applications?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-03, 22:13:00](https://soylentnews.org/article.pl?sid=25/02/02/1354257&from=rss) - [Bug That Kills PC's Audio is Seriously Widespread Affecting Multiple Windows Versions](https://soylentnews.org/article.pl?sid=25/02/02/1354257&from=rss)
* [2025-02-03, 22:01:38](https://news.ycombinator.com/item?id=42923870) - [\"A computer can never be held accountable\"](https://simonwillison.net/2025/Feb/3/a-computer-can-never-be-held-accountable/)
* [2025-02-03, 21:55:39](https://lobste.rs/s/ejmyaj/goto_considered_harmful_considered) - [\"GOTO Considered Harmful” Considered Harmful (1987)](http://web.archive.org/web/20090320002214/http://www.ecn.purdue.edu/ParaMount/papers/rubin87goto.pdf)
* [2025-02-03, 21:43:44](https://lobste.rs/s/wfc7gs/build_your_own_sqlite_rust_part_4_reading) - [Build your own SQLite in Rust, Part 4: reading tables metadata](https://blog.sylver.dev/build-your-own-sqlite-part-4-reading-tables-metadata)
* [2025-02-03, 21:43:39](https://lobste.rs/s/9sitsj/clr_checker_for_lifetimes_other) - [clr: Checker for Lifetimes and other Refinement types](https://github.com/ityonemo/clr)
* [2025-02-03, 21:40:00](https://tech.slashdot.org/story/25/02/03/2037228/microsoft-paint-gets-a-copilot-button-for-gen-ai-features?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Paint Gets a Copilot Button For Gen AI Features](https://tech.slashdot.org/story/25/02/03/2037228/microsoft-paint-gets-a-copilot-button-for-gen-ai-features?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-03, 21:00:00](https://yro.slashdot.org/story/25/02/03/2028246/netchoice-sues-to-block-marylands-kids-code-saying-it-violates-the-first-amendment?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [NetChoice Sues To Block Maryland's Kids Code, Saying It Violates the First Amendment](https://yro.slashdot.org/story/25/02/03/2028246/netchoice-sues-to-block-marylands-kids-code-saying-it-violates-the-first-amendment?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-03, 20:59:58](https://lobste.rs/s/sognld/gang_none_design_patterns_elixir) - [Gang of None? Design Patterns in Elixir](https://www.youtube.com/watch?v=agkXUp0hCW8)
* [2025-02-03, 20:20:00](https://tech.slashdot.org/story/25/02/03/2018259/air-force-documents-on-gen-ai-test-are-just-whole-pages-of-redactions?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Air Force Documents On Gen AI Test Are Just Whole Pages of Redactions](https://tech.slashdot.org/story/25/02/03/2018259/air-force-documents-on-gen-ai-test-are-just-whole-pages-of-redactions?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-03, 19:08:06](https://lobste.rs/s/ggpzzz/so_you_want_remove_gvl) - [So You Want To Remove The GVL?](https://byroot.github.io/ruby/performance/2025/01/29/so-you-want-to-remove-the-gvl.html)
* [2025-02-03, 18:23:46](https://lobste.rs/s/z2ch3o/follow_up_on_emails_with_mu4e_org_capture) - [Follow up on emails with mu4e and org capture](https://breatheoutbreathe.in/2025-02-03-follow-up-emails-mu4e-org-capture.html)
* [2025-02-03, 17:59:13](https://news.ycombinator.com/item?id=42920921) - [AMD: Microcode Signature Verification Vulnerability](https://github.com/google/security-research/security/advisories/GHSA-4xq7-4mgh-gp6w)
* [2025-02-03, 17:52:14](https://lobste.rs/s/dx533x/pangui_cross_platform_ui_library_with) - [PanGui - A cross-platform UI library with a razor sharp focus on performance, simplicity and expressive power](https://pangui.io/)
* [2025-02-03, 17:48:06](https://lobste.rs/s/drf83t/retaking_web_browser_one_small_step_at) - [Retaking The Web Browser, One Small Step At A Time](https://andregarzia.com/2025/02/retaking-the-web-browser-one-small-step-at-a-time.html)
* [2025-02-03, 17:25:00](https://soylentnews.org/article.pl?sid=25/02/02/1347234&from=rss) - [The Growing Antibiotic Resistance Problem Requires Better Policy](https://soylentnews.org/article.pl?sid=25/02/02/1347234&from=rss)
* [2025-02-03, 16:57:46](https://lobste.rs/s/itlgqb/developer_philosophy) - [Developer philosophy](https://qntm.org/devphilo)
* [2025-02-03, 16:28:45](https://news.ycombinator.com/item?id=42919909) - [Httptap: View HTTP/HTTPS requests made by any Linux program](https://github.com/monasticacademy/httptap)
* [2025-02-03, 16:00:43](https://news.ycombinator.com/item?id=42919502) - [Ask HN: Who is hiring? (February 2025)](https://news.ycombinator.com/item?id=42919502)
* [2025-02-03, 16:00:42](https://news.ycombinator.com/item?id=42919500) - [Ask HN: Who wants to be hired? (February 2025)](https://news.ycombinator.com/item?id=42919500)
* [2025-02-03, 15:09:55](https://news.ycombinator.com/item?id=42918902) - [Show HN: I convert videos to printed flipbooks for living](https://www.videotoflip.com/)
* [2025-02-03, 15:08:59](https://lobste.rs/s/4vgdml/pinning_down_future_is_not_send_errors) - [Pinning Down \"Future Is Not Send\" Errors](https://emschwartz.me/pinning-down-future-is-not-send-errors/)
* [2025-02-03, 14:42:51](https://news.ycombinator.com/item?id=42918644) - [He went to jail for stealing someone's identity, but it was his all along](https://www.nytimes.com/2025/02/03/us/iowa-identity-theft-sentencing.html)
* [2025-02-03, 14:30:11](https://news.ycombinator.com/item?id=42918524) - [I Wrote a WebAssembly VM in C](https://irreducible.io/blog/my-wasm-interpreter/)
* [2025-02-03, 13:37:00](https://lobste.rs/s/u7sehz/optimizing_with_novel_calendrical) - [Optimizing with Novel Calendrical Algorithms](https://jhpratt.dev/blog/optimizing-with-novel-calendrical-algorithms/)
* [2025-02-03, 12:50:19](https://lobste.rs/s/tn67at/five_coding_hats) - [Five coding hats](https://dubroy.com/blog/five-coding-hats/)
* [2025-02-03, 12:40:00](https://soylentnews.org/article.pl?sid=25/02/02/1340243&from=rss) - [About Zusie (Relay Based Computer)](https://soylentnews.org/article.pl?sid=25/02/02/1340243&from=rss)
* [2025-02-03, 11:32:50](https://lobste.rs/s/5snozq/perfect_is_enemy_good) - [Perfect is the enemy of good](https://medv.io/blog/perfect-is-the-enemy-of-good)
* [2025-02-03, 10:31:13](https://news.ycombinator.com/item?id=42916849) - [AI systems with 'unacceptable risk' are now banned in the EU](https://techcrunch.com/2025/02/02/ai-systems-with-unacceptable-risk-are-now-banned-in-the-eu/)
* [2025-02-03, 10:24:05](https://lobste.rs/s/kc63sr/rustsec_2025_0004_openssl_ssl_select_next) - [RUSTSEC-2025-0004: openssl: ssl::select_next_proto use after free](https://rustsec.org/advisories/RUSTSEC-2025-0004)
* [2025-02-03, 07:51:00](https://soylentnews.org/article.pl?sid=25/02/02/1442226&from=rss) - [The Network State Coup is Happening Right Now](https://soylentnews.org/article.pl?sid=25/02/02/1442226&from=rss)
* [2025-02-03, 06:27:11](https://news.ycombinator.com/item?id=42915527) - [The U.S. needs a shipbuilding revolution](https://www.usni.org/magazines/proceedings/2025/february/nation-needs-shipbuilding-revolution)
* [2025-02-03, 04:16:57](https://lobste.rs/s/mvtj4c/python_free_threading_guide) - [Python free-threading guide](https://py-free-threading.github.io/)
* [2025-02-03, 03:07:00](https://soylentnews.org/article.pl?sid=25/02/01/1542257&from=rss) - [How One YouTuber is Trying to Poison the AI Bots Stealing Her Content](https://soylentnews.org/article.pl?sid=25/02/01/1542257&from=rss)
* [2025-02-02, 22:23:00](https://soylentnews.org/article.pl?sid=25/02/01/1439213&from=rss) - [Infosec Was Trump's Lowest Priority, But He'll Change Bigly](https://soylentnews.org/article.pl?sid=25/02/01/1439213&from=rss)
* [2025-02-02, 17:38:00](https://soylentnews.org/article.pl?sid=25/02/01/1419208&from=rss) - [Maker Resurrects Toshiba T1000 With a Raspberry Pi 4 and a Slew of Upgrades](https://soylentnews.org/article.pl?sid=25/02/01/1419208&from=rss)
* [2025-02-02, 15:19:56](https://lobste.rs/s/btjtkr/what_software_do_you_dream_about_do_not) - [What software do you dream about, but do not have time to code yourself?](https://lobste.rs/s/btjtkr/what_software_do_you_dream_about_do_not)
* [2025-02-02, 12:55:00](https://soylentnews.org/article.pl?sid=25/02/01/1416224&from=rss) - [Trump Says Microsoft is in Contention to Buy TikTok](https://soylentnews.org/article.pl?sid=25/02/01/1416224&from=rss)
* [2025-02-02, 08:08:00](https://soylentnews.org/article.pl?sid=25/02/01/1414214&from=rss) - [DeepDive into DeepSeek](https://soylentnews.org/article.pl?sid=25/02/01/1414214&from=rss)
* [2025-02-02, 03:24:00](https://soylentnews.org/article.pl?sid=25/02/01/145202&from=rss) - [Fake Google Ads Trick Mac Users To Install Homebrew Malware](https://soylentnews.org/article.pl?sid=25/02/01/145202&from=rss)
* [2025-02-01, 22:42:00](https://soylentnews.org/article.pl?sid=25/02/01/1359255&from=rss) - [Phone Metadata Suddenly Not So ‘Harmless’ When It's the FBI's Data Being Harvested](https://soylentnews.org/article.pl?sid=25/02/01/1359255&from=rss)
* [2025-02-01, 17:57:00](https://soylentnews.org/article.pl?sid=25/02/01/1349238&from=rss) - [A Story About USB Floppy Drives](https://soylentnews.org/article.pl?sid=25/02/01/1349238&from=rss)
* [2025-02-01, 15:54:19](https://news.ycombinator.com/item?id=42899304) - [AMD adds RF-sampling data converters to Versal adaptive SoCs (2024)](https://www.electronicsweekly.com/news/business/amd-adds-rf-sampling-data-converters-to-versal-adaptive-socs-2024-12/)
* [2025-02-01, 15:39:59](https://news.ycombinator.com/item?id=42899168) - [Mitochondria as you've never seen them](https://www.nature.com/immersive/d41586-025-00269-y/)
* [2025-02-01, 13:13:00](https://soylentnews.org/article.pl?sid=25/02/01/1314204&from=rss) - [Hubble's Largest Panorama Ever Showcases 200 Million Stars In The Andromeda Galaxy](https://soylentnews.org/article.pl?sid=25/02/01/1314204&from=rss)
* [2025-02-01, 08:22:00](https://soylentnews.org/article.pl?sid=25/01/31/1358254&from=rss) - [FCC Chair Nixes Plan to Boost Broadband Competition in Apartment Buildings](https://soylentnews.org/article.pl?sid=25/01/31/1358254&from=rss)
* [2025-02-01, 03:37:00](https://soylentnews.org/article.pl?sid=25/01/30/227223&from=rss) - [Revival of the Pebble Smartwatch](https://soylentnews.org/article.pl?sid=25/01/30/227223&from=rss)
* [2025-02-01, 00:24:42](https://news.ycombinator.com/item?id=42894216) - [Byte Queue Limits: the unauthorized biography](https://medium.com/@tom_84912/byte-queue-limits-the-unauthorized-biography-61adc5730b83)
* [2025-01-31, 22:57:00](https://soylentnews.org/article.pl?sid=25/01/30/2221238&from=rss) - [Chevron Joins The Race To Generate Power For AI](https://soylentnews.org/article.pl?sid=25/01/30/2221238&from=rss)
* [2025-01-31, 20:44:28](https://news.ycombinator.com/item?id=42891754) - [The Forbidden Garden of Leningrad: Science and Sacrifice in a City Under Siege](https://www.lrb.co.uk/the-paper/v47/n02/jessie-childs/resident-bean-expert)
* [2025-01-31, 18:12:00](https://soylentnews.org/article.pl?sid=25/01/30/2217217&from=rss) - [AI Haters Build Tarpits to Trap and Trick AI Scrapers That Ignore Robots.Txt](https://soylentnews.org/article.pl?sid=25/01/30/2217217&from=rss)
* [2025-01-31, 15:20:31](https://news.ycombinator.com/item?id=42888538) - [Motion Sickness Accessibility in Video Games](https://madelinemiller.dev/blog/motion-sickness-accessibility/)
* [2025-01-31, 13:31:00](https://soylentnews.org/article.pl?sid=25/01/31/0918230&from=rss) - [Tails Linux 6.11 Released: Critical Security Fixes](https://soylentnews.org/article.pl?sid=25/01/31/0918230&from=rss)
* [2025-01-31, 08:42:00](https://soylentnews.org/article.pl?sid=25/01/30/166219&from=rss) - [Humanity’s Last Exam, a Groundbreaking New Benchmark](https://soylentnews.org/article.pl?sid=25/01/30/166219&from=rss)
* [2025-01-31, 03:55:00](https://soylentnews.org/article.pl?sid=25/01/30/1358218&from=rss) - [OpenAI Launches Operator, an AI Agent That Can Operate Your Computer](https://soylentnews.org/article.pl?sid=25/01/30/1358218&from=rss)
* [2025-01-31, 01:34:37](https://news.ycombinator.com/item?id=42883976) - [Spotted hyena found in Egypt for the first time in 5k years](https://phys.org/news/2025-01-hyena-egypt-years.html)
