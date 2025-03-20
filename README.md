# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and OpenAI

* [Dad demands OpenAI delete ChatGPT's false claim that he murdered his kids](https://arstechnica.com/tech-policy/2025/03/chatgpt-falsely-claimed-a-dad-murdered-his-own-kids-complaint-says/) ([Comments](https://news.ycombinator.com/item?id=43424776))

* [OpenAI's o1-pro is the Company's Most Expensive AI Model Yet](https://slashdot.org/story/25/03/20/0227246/openais-o1-pro-is-the-companys-most-expensive-ai-model-yet?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=43420477))

* [FOSS infrastructure is under attack by AI companies](https://thelibre.news/foss-infrastructure-is-under-attack-by-ai-companies/) ([Comments](https://news.ycombinator.com/item?id=43422413))

* [Sieve (YC W22) Is Hiring Engineers to Build the Future of Video AI](https://www.sievedata.com/) ([Comments](https://news.ycombinator.com/item?id=43421979))

## Space and Astronomy

* [Is Dark Energy Getting Weaker? New Evidence Strengthens the Case.](https://science.slashdot.org/story/25/03/20/1431243/is-dark-energy-getting-weaker-new-evidence-strengthens-the-case?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=43424340))

* [Oxygen discovered in most distant known galaxy](https://www.eso.org/public/news/eso2507/) ([Comments](https://news.ycombinator.com/item?id=43422909))

* ['More than a hint' that dark energy isn't what astronomers thought](https://www.nytimes.com/2025/03/19/science/space/astronomer-desi-dark-energy.html) ([Comments](https://news.ycombinator.com/item?id=43419996))

* [Government Releases Thousands of Declassified Pages Related To JFK Assassination](https://news.slashdot.org/story/25/03/20/086201/government-releases-thousands-of-declassified-pages-related-to-jfk-assassination?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=43420683))

## Programming and Development

* [The future of AI is Ruby on Rails](https://www.seangoedecke.com/ai-and-ruby/) ([Comments](https://lobste.rs/s/ejzabh/future_ai_is_ruby_on_rails))

* [Rustdoc merged doctests (solved) issue on stable](https://blog.guillaume-gomez.fr/articles/2025-03-20+Rustdoc+merged+doctests+%28solved%29+issue+on+stable) ([Comments](https://lobste.rs/s/5zkao3/rustdoc_merged_doctests_solved_issue_on))

* [Particle Based Physics Engine in Golang](https://github.com/rudransh61/Physix-go) ([Comments](https://news.ycombinator.com/item?id=43423238))

* [Non-Obvious Haskell Idiom: Guard-Sequence](https://entropicthoughts.com/non-obvious-haskell-idiom-guard-sequence) ([Comments](https://lobste.rs/s/z9dtvj/non_obvious_haskell_idiom_guard_sequence))

## Cybersecurity and Technology Innovations

* [Introducing GREASE: An Open-Source Tool for Uncovering Hidden Vulnerabilities in Binary Code](https://www.galois.com/articles/introducing-grease) ([Comments](https://news.ycombinator.com/item?id=43423523))

* [HealthyIG: Instagram without all the toxic features like reels, home page, explore page](https://github.com/AlessandroBonomo28/HealthyIG) ([Comments](https://lobste.rs/s/wrsr3j/healthyig_instagram_without_all_toxic))

* [CVE-2024-9956 - PassKey Account Takeover in All Mobile Browsers](https://mastersplinter.work/research/passkey/) ([Comments](https://lobste.rs/s/nukfa9/cve_2024_9956_passkey_account_takeover))

* [How NixOS and reproducible builds could have detected the xz backdoorfor the benefit of all](https://luj.fr/blog/how-nixos-could-have-detected-xz.html) ([Comments](https://lobste.rs/s/84qcvn/how_nixos_reproducible_builds_could_have))

## Tech Industry and Market Movements

* [SoftBank Group to Acquire Ampere Computing for 6.5B](https://group.softbank/en/news/press/20250320) ([Comments](https://news.ycombinator.com/item?id=43419240))

* [Pebble Founder Warns of Limited iPhone Compatibility for Revived Smartwatch](https://apple.slashdot.org/story/25/03/20/142227/pebble-founder-warns-of-limited-iphone-compatibility-for-revived-smartwatch?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=43422932))

* [Microsoft Developing Windows 11 Feature To Explain Hardware Performance Issues](https://tech.slashdot.org/story/25/03/20/112211/microsoft-developing-windows-11-feature-to-explain-hardware-performance-issues?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=43421934))

* [LG Ceases XR Product Efforts](https://tech.slashdot.org/story/25/03/20/006216/lg-ceases-xr-product-efforts?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=43420678))

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

* [2025-03-20, 15:38:28](https://news.ycombinator.com/item?id=43424776) - [Dad demands OpenAI delete ChatGPT's false claim that he murdered his kids](https://arstechnica.com/tech-policy/2025/03/chatgpt-falsely-claimed-a-dad-murdered-his-own-kids-complaint-says/)
* [2025-03-20, 15:03:37](https://lobste.rs/s/ejzabh/future_ai_is_ruby_on_rails) - [The future of AI is Ruby on Rails](https://www.seangoedecke.com/ai-and-ruby/)
* [2025-03-20, 15:00:00](https://science.slashdot.org/story/25/03/20/1431243/is-dark-energy-getting-weaker-new-evidence-strengthens-the-case?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Is Dark Energy Getting Weaker? New Evidence Strengthens the Case.](https://science.slashdot.org/story/25/03/20/1431243/is-dark-energy-getting-weaker-new-evidence-strengthens-the-case?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-20, 14:58:23](https://news.ycombinator.com/item?id=43424340) - [I Fear for the Unauthenticated Web](https://sethmlarson.dev/i-fear-for-the-unauthenticated-web)
* [2025-03-20, 14:56:03](https://lobste.rs/s/5zkao3/rustdoc_merged_doctests_solved_issue_on) - [Rustdoc merged doctests (solved) issue on stable](https://blog.guillaume-gomez.fr/articles/2025-03-20+Rustdoc+merged+doctests+%28solved%29+issue+on+stable)
* [2025-03-20, 14:53:32](https://lobste.rs/s/f6ciaz/national_security_case_for_email_plus) - [The National Security Case for Email Plus Addressing](https://sagi.io//the-national-security-case-for-email-plus-addressing/)
* [2025-03-20, 14:33:28](https://news.ycombinator.com/item?id=43424065) - [ACARS Drama](https://acarsdrama.com/)
* [2025-03-20, 14:29:45](https://lobste.rs/s/qykkq8/introducing_grease_open_source_tool_for) - [Introducing GREASE: An Open-Source Tool for Uncovering Hidden Vulnerabilities in Binary Code](https://www.galois.com/articles/introducing-grease)
* [2025-03-20, 14:02:16](https://lobste.rs/s/84qcvn/how_nixos_reproducible_builds_could_have) - [How NixOS and reproducible builds could have detected the xz backdoorfor the benefit of all](https://luj.fr/blog/how-nixos-could-have-detected-xz.html)
* [2025-03-20, 14:02:00](https://apple.slashdot.org/story/25/03/20/142227/pebble-founder-warns-of-limited-iphone-compatibility-for-revived-smartwatch?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Pebble Founder Warns of Limited iPhone Compatibility for Revived Smartwatch](https://apple.slashdot.org/story/25/03/20/142227/pebble-founder-warns-of-limited-iphone-compatibility-for-revived-smartwatch?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-20, 13:57:30](https://news.ycombinator.com/item?id=43423523) - [Grease: An Open-Source Tool for Uncovering Hidden Vulnerabilities in Binary Code](https://www.galois.com/articles/introducing-grease)
* [2025-03-20, 13:41:35](https://news.ycombinator.com/item?id=43423238) - [Particle Based Physics Engine in Golang](https://github.com/rudransh61/Physix-go)
* [2025-03-20, 13:28:44](https://news.ycombinator.com/item?id=43423032) - [The Last Drops of Mexico City](https://mexicocitywater.longlead.com)
* [2025-03-20, 13:21:34](https://news.ycombinator.com/item?id=43422909) - [Oxygen discovered in most distant known galaxy](https://www.eso.org/public/news/eso2507/)
* [2025-03-20, 13:05:00](https://news.slashdot.org/story/25/03/20/135242/there-are-two-kinds-of-credit-cards?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['There Are Two Kinds of Credit Cards'](https://news.slashdot.org/story/25/03/20/135242/there-are-two-kinds-of-credit-cards?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-20, 12:50:49](https://news.ycombinator.com/item?id=43422413) - [FOSS infrastructure is under attack by AI companies](https://thelibre.news/foss-infrastructure-is-under-attack-by-ai-companies/)
* [2025-03-20, 12:25:31](https://news.ycombinator.com/item?id=43422162) - [The Frontend Treadmill](https://polotek.net/posts/the-frontend-treadmill/)
* [2025-03-20, 12:25:00](https://soylentnews.org/article.pl?sid=25/03/19/120255&from=rss) - [Apple Loses 2025 Antitrust Appeal in Germany](https://soylentnews.org/article.pl?sid=25/03/19/120255&from=rss)
* [2025-03-20, 12:09:32](https://news.ycombinator.com/item?id=43422033) - [Understanding Solar Energy](https://www.construction-physics.com/p/understanding-solar-energy)
* [2025-03-20, 12:01:05](https://news.ycombinator.com/item?id=43421979) - [Sieve (YC W22) Is Hiring Engineers to Build the Future of Video AI](https://www.sievedata.com/)
* [2025-03-20, 11:55:13](https://news.ycombinator.com/item?id=43421934) - [Powers of 2 with all even digits](https://oeis.org/A068994)
* [2025-03-20, 11:52:56](https://lobste.rs/s/hsmn5t/building_second_worst_zx_spectrum) - [Building the Second-Worst ZX Spectrum Emulator in the World with Perl](https://fuzzix.org/building-the-secondworst-zx-spectrum-emulator-in-the-world-with-perl)
* [2025-03-20, 11:15:39](https://lobste.rs/s/2rojlh/another_round_rust_compiler) - [Another round of Rust compiler improvements merged for GCC 15.1](https://www.phoronix.com/news/More-Rust-Merged-GCC-15.1)
* [2025-03-20, 11:02:00](https://tech.slashdot.org/story/25/03/20/112211/microsoft-developing-windows-11-feature-to-explain-hardware-performance-issues?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Developing Windows 11 Feature To Explain Hardware Performance Issues](https://tech.slashdot.org/story/25/03/20/112211/microsoft-developing-windows-11-feature-to-explain-hardware-performance-issues?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-20, 10:18:45](https://lobste.rs/s/wrsr3j/healthyig_instagram_without_all_toxic) - [HealthyIG: Instagram without all the toxic features like reels, home page, explore page](https://github.com/AlessandroBonomo28/HealthyIG)
* [2025-03-20, 10:13:40](https://lobste.rs/s/z4halj/half_constructed_objects_are) - [Half Constructed Objects Are Unnecessary](https://jerf.org/iri/post/2025/fp_lessons_half_constructed_objects/)
* [2025-03-20, 09:40:50](https://lobste.rs/s/nukfa9/cve_2024_9956_passkey_account_takeover) - [CVE-2024-9956 - PassKey Account Takeover in All Mobile Browsers](https://mastersplinter.work/research/passkey/)
* [2025-03-20, 08:42:04](https://lobste.rs/s/oqe93s/one_billion_row_challenge_racket) - [One Billion Row Challenge in Racket](https://defn.io/2024/01/10/one-billion-row-challenge-in-racket)
* [2025-03-20, 08:37:35](https://news.ycombinator.com/item?id=43420892) - [Stelvio: Serverless AWS for Python Devs](https://github.com/michal-stlv/stelvio)
* [2025-03-20, 08:34:24](https://lobste.rs/s/z9dtvj/non_obvious_haskell_idiom_guard_sequence) - [Non-Obvious Haskell Idiom: Guard-Sequence](https://entropicthoughts.com/non-obvious-haskell-idiom-guard-sequence)
* [2025-03-20, 08:05:00](https://news.slashdot.org/story/25/03/20/086201/government-releases-thousands-of-declassified-pages-related-to-jfk-assassination?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Government Releases Thousands of Declassified Pages Related To JFK Assassination](https://news.slashdot.org/story/25/03/20/086201/government-releases-thousands-of-declassified-pages-related-to-jfk-assassination?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-20, 08:00:54](https://news.ycombinator.com/item?id=43420683) - [Minding the gaps: A new way to draw separators in CSS](https://blogs.windows.com/msedgedev/2025/03/19/minding-the-gaps-a-new-way-to-draw-separators-in-css/)
* [2025-03-20, 07:58:57](https://news.ycombinator.com/item?id=43420678) - [Show HN: I built a MCP server so Claude can play Minesweeper](https://github.com/tonypan2/minesweeper-mcp-server)
* [2025-03-20, 07:41:00](https://soylentnews.org/article.pl?sid=25/03/19/1152214&from=rss) - [Firefly Bids Farewell to its Lunar Lander After 14 Days on the Moon](https://soylentnews.org/article.pl?sid=25/03/19/1152214&from=rss)
* [2025-03-20, 07:19:25](https://news.ycombinator.com/item?id=43420477) - [C++26: Deprecating or removing library features](https://www.sandordargo.com/blog/2025/03/19/cpp26-deprecate-remove-library-features)
* [2025-03-20, 05:42:21](https://news.ycombinator.com/item?id=43420152) - [How I accepted myself into Canada's largest AI hackathon](https://fastcall.dev/posts/genai-genesis-firebase/)
* [2025-03-20, 05:30:00](https://slashdot.org/story/25/03/20/0354205/nvidia-not-approached-for-intel-stake-ceo-says?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Nvidia Not Approached for Intel Stake, CEO Says](https://slashdot.org/story/25/03/20/0354205/nvidia-not-approached-for-intel-stake-ceo-says?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-20, 04:57:12](https://news.ycombinator.com/item?id=43419996) - ['More than a hint' that dark energy isn't what astronomers thought](https://www.nytimes.com/2025/03/19/science/space/astronomer-desi-dark-energy.html)
* [2025-03-20, 04:37:09](https://news.ycombinator.com/item?id=43419928) - [Austral: A Systems Language with Linear Types and Capabilities (2022)](https://borretti.me/article/introducing-austral)
* [2025-03-20, 03:37:31](https://news.ycombinator.com/item?id=43419701) - [The Pain That Is GitHub Actions](https://www.feldera.com/blog/the-pain-that-is-github-actions)
* [2025-03-20, 03:30:00](https://tech.slashdot.org/story/25/03/20/0324212/gnome-48-released?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [GNOME 48 Released](https://tech.slashdot.org/story/25/03/20/0324212/gnome-48-released?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-20, 02:57:00](https://soylentnews.org/article.pl?sid=25/03/19/1145216&from=rss) - [UK's Internet Watchdog Puts Storage and File-Sharing Services on Watch Over CSAM](https://soylentnews.org/article.pl?sid=25/03/19/1145216&from=rss)
* [2025-03-20, 02:48:35](https://lobste.rs/s/mcohum/sources_accidental_complexity_2014) - [Sources of Accidental Complexity (2014)](https://aidancully.blogspot.com/2014/07/sources-of-accidental-complexity.html)
* [2025-03-20, 02:46:28](https://lobste.rs/s/pnkjrm/introducing_webcat_web_based_code) - [Introducing WEBCAT: Web-based Code Assurance and Transparency](https://securedrop.org/news/introducing-webcat-web-based-code-assurance-and-transparency/)
* [2025-03-20, 02:28:00](https://slashdot.org/story/25/03/20/0227246/openais-o1-pro-is-the-companys-most-expensive-ai-model-yet?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [OpenAI's o1-pro is the Company's Most Expensive AI Model Yet](https://slashdot.org/story/25/03/20/0227246/openais-o1-pro-is-the-companys-most-expensive-ai-model-yet?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-20, 01:58:47](https://news.ycombinator.com/item?id=43419240) - [SoftBank Group to Acquire Ampere Computing for 6.5B](https://group.softbank/en/news/press/20250320)
* [2025-03-20, 01:58:29](https://news.ycombinator.com/item?id=43419237) - [Hunyuan3D-2-Turbo: fast high-quality shape generation in ~1s on a 4090](https://github.com/Tencent/Hunyuan3D-2/commit/baab8ba18e46052246f85a2d0f48736586b84a33)
* [2025-03-20, 00:06:00](https://tech.slashdot.org/story/25/03/20/006216/lg-ceases-xr-product-efforts?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [LG Ceases XR Product Efforts](https://tech.slashdot.org/story/25/03/20/006216/lg-ceases-xr-product-efforts?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-19, 23:51:23](https://lobste.rs/s/xg2chc/passive_voice_considered_harmful) - [Passive Voice Considered Harmful](https://refactoringenglish.com/chapters/passive-voice-considered-harmful/)
* [2025-03-19, 22:30:56](https://news.ycombinator.com/item?id=43417932) - [Bolt3D: Generating 3D Scenes in Seconds](https://szymanowiczs.github.io/bolt3d)
* [2025-03-19, 22:14:00](https://soylentnews.org/article.pl?sid=25/03/18/1622242&from=rss) - [Tobacco's Hidden Friendly Side: How the Controversial Plant Could be Used for Good](https://soylentnews.org/article.pl?sid=25/03/18/1622242&from=rss)
* [2025-03-19, 21:29:13](https://news.ycombinator.com/item?id=43417511) - [LLM Agents Are Simply Graph – Tutorial for Dummies](https://zacharyhuang.substack.com/p/llm-agent-internal-as-a-graph-tutorial)
* [2025-03-19, 21:00:00](https://tech.slashdot.org/story/25/03/19/201211/pci-express-70s-blazing-speeds-are-nearly-here-but-pcie-6-is-still-vapor?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [PCI Express 7.0's Blazing Speeds Are Nearly Here, But PCIe 6 is Still Vapor](https://tech.slashdot.org/story/25/03/19/201211/pci-express-70s-blazing-speeds-are-nearly-here-but-pcie-6-is-still-vapor?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-19, 20:00:00](https://entertainment.slashdot.org/story/25/03/19/1928245/plex-raises-premium-subscription-prices-for-first-time-in-decade?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Plex Raises Premium Subscription Prices for First Time in Decade](https://entertainment.slashdot.org/story/25/03/19/1928245/plex-raises-premium-subscription-prices-for-first-time-in-decade?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-19, 19:11:32](https://lobste.rs/s/gm6ggq/note_c_standards_committee_members_on) - [Note to the C++ standards committee members on profiles and safety](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2025/p3651r0.pdf)
* [2025-03-19, 18:58:00](https://apple.slashdot.org/story/25/03/19/1857241/eu-orders-apple-to-open-ecosystem-to-rivals?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [EU Orders Apple To Open Ecosystem To Rivals](https://apple.slashdot.org/story/25/03/19/1857241/eu-orders-apple-to-open-ecosystem-to-rivals?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-19, 18:32:21](https://lobste.rs/s/1pyypm/gnome_48_released) - [GNOME 48 released](https://release.gnome.org/48/)
* [2025-03-19, 18:27:26](https://lobste.rs/s/tohxky/future_fauna) - [The Future of Fauna](https://fauna.com/blog/the-future-of-fauna)
* [2025-03-19, 17:29:00](https://soylentnews.org/article.pl?sid=25/03/18/1610234&from=rss) - [U.S. Atari Parts Store Still Open After 41 Years, Has Spent $100K+ Designing New Parts](https://soylentnews.org/article.pl?sid=25/03/18/1610234&from=rss)
* [2025-03-19, 17:25:00](https://slashdot.org/story/25/03/19/1027251/ai-crawlers-havent-learned-to-play-nice-with-websites?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [AI Crawlers Haven't Learned To Play Nice With Websites](https://slashdot.org/story/25/03/19/1027251/ai-crawlers-havent-learned-to-play-nice-with-websites?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-19, 17:20:03](https://lobste.rs/s/ezweb7/intel_9_285k_on_asus_z890_not_stable) - [Intel 9 285K on ASUS Z890: not stable](https://michael.stapelberg.ch/posts/2025-03-19-intel-core-ultra-9-285k-on-asus-z890-not-stable/)
* [2025-03-19, 17:00:00](https://news.slashdot.org/story/25/03/19/1022245/more-than-150-unprecedented-climate-disasters-struck-world-in-2024-says-un?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [More Than 150 'Unprecedented' Climate Disasters Struck World in 2024, Says UN](https://news.slashdot.org/story/25/03/19/1022245/more-than-150-unprecedented-climate-disasters-struck-world-in-2024-says-un?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-19, 16:48:32](https://news.ycombinator.com/item?id=43414393) - [AI Blindspots – Blindspots in LLMs I've noticed while AI coding](https://ezyang.github.io/ai-blindspots/)
* [2025-03-19, 16:13:20](https://news.ycombinator.com/item?id=43413935) - [How fast the days are getting longer (2023)](https://joe-antognini.github.io/astronomy/daylight)
* [2025-03-19, 16:00:00](https://yro.slashdot.org/story/25/03/19/0927253/fedex-data-scraping-and-telecom-insider-bribes-powered-nationwide-iphone-theft-operation?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [FedEx Data Scraping and Telecom Insider Bribes Powered Nationwide iPhone Theft Operation](https://yro.slashdot.org/story/25/03/19/0927253/fedex-data-scraping-and-telecom-insider-bribes-powered-nationwide-iphone-theft-operation?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-19, 15:59:12](https://lobste.rs/s/mg1khc/does_unsafe_undermine_rust_s_guarantees) - [Does unsafe undermine Rust's guarantees?](https://steveklabnik.com/writing/does-unsafe-undermine-rusts-guarantees/)
* [2025-03-19, 15:02:36](https://lobste.rs/s/fcepiv/macos_blog_post_ft_hackintosh) - [The macOS Blog Post (ft. Hackintosh)](https://lilysthings.org/blog/the-macos-blog-post/)
* [2025-03-19, 14:10:40](https://lobste.rs/s/1hexlm/no_longer_my_favorite_git_commit) - [No Longer My Favorite Git Commit](https://mtlynch.io/no-longer-my-favorite-git-commit/)
* [2025-03-19, 12:56:46](https://lobste.rs/s/ptsvae/how_speed_up_rust_compiler_march_2025) - [How to speed up the Rust compiler in March 2025](https://nnethercote.github.io/2025/03/19/how-to-speed-up-the-rust-compiler-in-march-2025.html)
* [2025-03-19, 12:46:00](https://soylentnews.org/article.pl?sid=25/03/18/168222&from=rss) - [Discord Launches SDK to Help Developers Enhance Social Experiences in Their Games](https://soylentnews.org/article.pl?sid=25/03/18/168222&from=rss)
* [2025-03-19, 12:24:55](https://lobste.rs/s/j61hod/search_next_great_programming_language) - [In Search of the Next Great Programming Language](https://git.sr.ht/~robheghan/glogg/tree/main/item/docs/motivation.md)
* [2025-03-19, 08:02:00](https://soylentnews.org/article.pl?sid=25/03/18/165235&from=rss) - [Iguanas Floated One-Fifth of the Way Around the World to Colonize Fiji, Genetic Analysis Indicates](https://soylentnews.org/article.pl?sid=25/03/18/165235&from=rss)
* [2025-03-19, 07:20:06](https://lobste.rs/s/dnsezi/asahi_lina_pausing_work_on_apple_gpu_linux) - [Asahi Lina Pausing Work On Apple GPU Linux Driver Development](https://www.phoronix.com/news/Asahi-Lina-Steps-Down-Linux-GPU)
* [2025-03-19, 03:18:00](https://soylentnews.org/article.pl?sid=25/03/18/0159258&from=rss) - [Everything You Say to Your Echo Will be Sent to Amazon Starting on March 28](https://soylentnews.org/article.pl?sid=25/03/18/0159258&from=rss)
* [2025-03-18, 22:33:00](https://soylentnews.org/article.pl?sid=25/03/18/0153234&from=rss) - [People are Using Google's New AI Model to Remove Watermarks From Images](https://soylentnews.org/article.pl?sid=25/03/18/0153234&from=rss)
* [2025-03-18, 17:49:00](https://soylentnews.org/article.pl?sid=25/03/18/0150258&from=rss) - [Unearthed Notebooks Shed Light on Victorian Genius Who Inspired Einstein](https://soylentnews.org/article.pl?sid=25/03/18/0150258&from=rss)
* [2025-03-18, 13:07:00](https://soylentnews.org/article.pl?sid=25/03/17/128219&from=rss) - [On the Road to Idiocracy](https://soylentnews.org/article.pl?sid=25/03/17/128219&from=rss)
* [2025-03-18, 12:09:51](https://news.ycombinator.com/item?id=43398434) - [Diagrams AI can, and cannot, generate](https://www.ilograph.com/blog/posts/diagrams-ai-can-and-cannot-generate/)
* [2025-03-18, 08:24:00](https://soylentnews.org/article.pl?sid=25/03/17/126247&from=rss) - [Forget Windows 11, SteamOS for Desktops May be Released Soon](https://soylentnews.org/article.pl?sid=25/03/17/126247&from=rss)
* [2025-03-18, 03:38:00](https://soylentnews.org/article.pl?sid=25/03/17/123238&from=rss) - [Chaos in Gravity - the Quantum Based Magnetic Monopole of Mass?](https://soylentnews.org/article.pl?sid=25/03/17/123238&from=rss)
* [2025-03-17, 22:53:00](https://soylentnews.org/article.pl?sid=25/03/15/1626204&from=rss) - [OpenAI Wants All The Data And For US Law To Apply Everywhere](https://soylentnews.org/article.pl?sid=25/03/15/1626204&from=rss)
* [2025-03-17, 21:25:37](https://news.ycombinator.com/item?id=43392875) - [Show HN: We made a photo search engine for homes for sale](https://news.ycombinator.com/item?id=43392875)
* [2025-03-17, 18:11:00](https://soylentnews.org/article.pl?sid=25/03/15/1622220&from=rss) - [Six Weeks of CloudFlare Stalling; Still Blocking Niche Browsers](https://soylentnews.org/article.pl?sid=25/03/15/1622220&from=rss)
* [2025-03-17, 13:23:00](https://soylentnews.org/article.pl?sid=25/03/15/1619204&from=rss) - [NIST Selects HQC as Fifth Algorithm for Post-Quantum Encryption](https://soylentnews.org/article.pl?sid=25/03/15/1619204&from=rss)
* [2025-03-17, 10:40:05](https://news.ycombinator.com/item?id=43386973) - ['Dark oxygen': a deep-sea discovery that has split scientists](https://phys.org/news/2025-03-dark-oxygen-deep-sea-discovery.html)
* [2025-03-17, 08:36:00](https://soylentnews.org/article.pl?sid=25/03/15/1617256&from=rss) - [World's Smallest Microcontroller](https://soylentnews.org/article.pl?sid=25/03/15/1617256&from=rss)
* [2025-03-17, 03:50:00](https://soylentnews.org/article.pl?sid=25/03/15/1220208&from=rss) - [ESA Cuts the Ribbon at 34,000-Core HPC Center](https://soylentnews.org/article.pl?sid=25/03/15/1220208&from=rss)
* [2025-03-16, 23:07:00](https://soylentnews.org/article.pl?sid=25/03/15/1540201&from=rss) - [A New Age for Geothermal](https://soylentnews.org/article.pl?sid=25/03/15/1540201&from=rss)
* [2025-03-16, 18:20:00](https://soylentnews.org/article.pl?sid=25/03/15/141211&from=rss) - [Apple Encrypted Data Row Case Begins in Secret](https://soylentnews.org/article.pl?sid=25/03/15/141211&from=rss)
* [2025-03-16, 13:34:00](https://soylentnews.org/article.pl?sid=25/03/15/1357206&from=rss) - [5 Years After Covid-19 Became a Pandemic, Are We Ready for What's Next?](https://soylentnews.org/article.pl?sid=25/03/15/1357206&from=rss)
* [2025-03-16, 12:05:53](https://news.ycombinator.com/item?id=43378358) - [Muons used to test the condition of a road bridge in Estonia](https://news.err.ee/1609634600/muons-used-to-test-the-condition-of-a-road-bridge-in-estonia)
* [2025-03-16, 08:46:00](https://soylentnews.org/article.pl?sid=25/03/15/1228252&from=rss) - [Sidewinder Advanced Persistent Threat (APT) Shifts to Targeting of Nuclear, Maritime Orgs](https://soylentnews.org/article.pl?sid=25/03/15/1228252&from=rss)
* [2025-03-16, 04:01:00](https://soylentnews.org/article.pl?sid=25/03/15/1558246&from=rss) - [SpaceX Launches Astronauts for Long-Awaited International Space Station Crew Swap](https://soylentnews.org/article.pl?sid=25/03/15/1558246&from=rss)
