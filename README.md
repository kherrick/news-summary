# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Launches and Updates

* [Apple Launches iPhone 17 Lineup Featuring Ultra-Thin 5.6mm iPhone Air](https://mobile.slashdot.org/story/25/09/09/1844201/apple-launches-iphone-17-lineup-featuring-ultra-thin-56mm-iphone-air?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Apple announces their ultra-thin flagship model focusing on a sleek design in their iPhone 17 lineup.

* [Tomorrow's Emoji, Today: Unicode 17.0](https://jenniferdaniel.substack.com/p/tomorrows-emoji-today-unicode-170) - The introduction of new emoji options for enhanced communication in the latest Unicode update.

* [Gemini App Finally Expands To Audio Files](https://tech.slashdot.org/story/25/09/09/0030209/gemini-app-finally-expands-to-audio-files?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Gemini broadens its file support to include audio, making strides in functionality.

* [Claude can now create and edit files](https://www.anthropic.com/news/create-files) - Claude AI expands its creative and functional capabilities by integrating file creation and editing tools.

## Security and Surveillance

* [ICE Is Using Fake Cell Towers to Spy on People's Phones](https://www.forbes.com/sites/the-wiretap/2025/09/09/how-ice-is-using-fake-cell-towers-to-spy-on-peoples-phones/) - Revelations about invasive surveillance tactics through fake cellular towers.

* [Pakistan Spying On Millions Through Phone-Tapping And Firewall, Amnesty Says](https://tech.slashdot.org/story/25/09/09/113252/pakistan-spying-on-millions-through-phone-tapping-and-firewall-amnesty-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Accusations surface around Pakistan's mass surveillance efforts, raising global concerns.

* [An attacker's blunder gave us a look into their operations](https://www.huntress.com/blog/rare-look-inside-attacker-operation) - A unique glimpse into cyberattack methods due to an operational slip by a hacker.

* [Plex Suffers Security Incident Exposing User Data and Urging Password Resets](https://yro.slashdot.org/story/25/09/08/229201/plex-suffers-security-incident-exposing-user-data-and-urging-password-resets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A recent breach prompts Plex users to enhance their account security.

## Environmental and Health Concerns

* [The World's Largest Iceberg is Rapidly Breaking Apart and Melting Away](https://soylentnews.org/article.pl?sid=25/09/08/128200&amp;from=rss) - Alarm raised over environmental changes as a colossal iceberg disintegrates.

* [Warming Seas Threaten Key Phytoplankton Species That Fuels the Food Web](https://news.slashdot.org/story/25/09/08/2214205/warming-seas-threaten-key-phytoplankton-species-that-fuels-the-food-web?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Ecological risks highlighted amidst rising ocean temperatures impacting marine life.

* [Chagas Disease, Which Can be Deadly, is Now Considered Endemic in the U.S.](https://soylentnews.org/article.pl?sid=25/09/07/1713251&amp;from=rss) - Health alert as a once-rare disease becomes pervasive in the United States.

* [Disposable Face Masks Used During Covid Have Left Chemical Timebomb](https://science.slashdot.org/story/25/09/08/2157248/disposable-face-masks-used-during-covid-have-left-chemical-timebomb?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Analysis dives into the environmental impact of improperly discarded PPE.

## Innovative Research and Projects

* [Building a DOOM-like multiplayer shooter in pure SQL](https://cedardb.com/blog/doomql/) - An exploration of innovative use of SQL for game development.

* [Disrupting the DRAM roadmap with capacitor-less IGZO-DRAM technology](https://www.imec-int.com/en/articles/disrupting-dram-roadmap-capacitor-less-igzo-dram-technology) - Revolutionary advancements in DRAM technology could reshape the memory industry.

* [Compiling a functional language to LLVM](https://danieljharvey.github.io/posts/2023-02-08-llvm-compiler-part-1.html) - Deep dive into integrating functional language for efficient compilation via LLVM.

* [A clickable visual guide to the Rust type system](https://rustcurious.com/elements/) - Simplifying understanding Rust types through an interactive framework.

## Economic and Policy Shifts

* [US Created 911,000 Fewer Jobs Than Previously Thought in the 12 Months Through March](https://news.slashdot.org/story/25/09/09/1513203/us-created-911000-fewer-jobs-than-previously-thought-in-the-12-months-through-march?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Statistical revisions reveal a stark economic shortfall in job numbers.

* [Judge: Anthropic's $1.5B settlement is being shoved "down the throat of authors"](https://arstechnica.com/tech-policy/2025/09/judge-anthropics-1-5b-settlement-is-being-shoved-down-the-throat-of-authors/) - Controversy stirs around an AI-related legal settlement impacting writers.

* [New Mexico is first state in US to offer universal child care](https://www.governor.state.nm.us/2025/09/08/new-mexico-is-first-state-in-nation-to-offer-universal-child-care/) - A groundbreaking policy to enhance access to childcare sets a national precedent.

* [No Alpha Left in Public Markets](https://slashdot.org/story/25/09/09/1126247/no-alpha-left-in-public-markets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A thoughtful critique examining diminishing market arbitrage opportunities.

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

* [2025-09-09, 18:43:00](https://mobile.slashdot.org/story/25/09/09/1844201/apple-launches-iphone-17-lineup-featuring-ultra-thin-56mm-iphone-air?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Launches iPhone 17 Lineup Featuring Ultra-Thin 5.6mm iPhone Air](https://mobile.slashdot.org/story/25/09/09/1844201/apple-launches-iphone-17-lineup-featuring-ultra-thin-56mm-iphone-air?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-09, 18:29:51](https://lobste.rs/s/wlyzqn/memory_integrity_enforcement_complete) - [Memory Integrity Enforcement: A complete vision for memory safety in Apple devices](https://security.apple.com/blog/memory-integrity-enforcement/)
* [2025-09-09, 18:26:25](https://news.ycombinator.com/item?id=45186294) - [Compare the New iPhone Models](https://www.apple.com/iphone/compare/)
* [2025-09-09, 18:25:03](https://news.ycombinator.com/item?id=45186265) - [Memory Integrity Enforcement](https://security.apple.com/blog/memory-integrity-enforcement/)
* [2025-09-09, 18:19:39](https://news.ycombinator.com/item?id=45186152) - [Judge: Anthropic&apos;s $1.5B settlement is being shoved \&quot;down the throat of authors\&quot;](https://arstechnica.com/tech-policy/2025/09/judge-anthropics-1-5b-settlement-is-being-shoved-down-the-throat-of-authors/)
* [2025-09-09, 18:12:28](https://news.ycombinator.com/item?id=45186011) - [Dropbox Paper mobile App Discontinuation](https://help.dropbox.com/installs/paper-mobile-discontinuation)
* [2025-09-09, 18:11:00](https://news.slashdot.org/story/25/09/09/1811238/reuters-withdraws-xi-putin-longevity-video-after-china-state-tv-pulls-legal-permission-to-use-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Reuters Withdraws Xi, Putin Longevity Video After China State TV Pulls Legal Permission To Use It](https://news.slashdot.org/story/25/09/09/1811238/reuters-withdraws-xi-putin-longevity-video-after-china-state-tv-pulls-legal-permission-to-use-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-09, 18:04:49](https://news.ycombinator.com/item?id=45185875) - [Tomorrow&apos;s Emoji, Today: Unicode 17.0](https://jenniferdaniel.substack.com/p/tomorrows-emoji-today-unicode-170)
* [2025-09-09, 17:42:09](https://lobste.rs/s/nut4i6/testing_compiler_optimizations_your) - [Testing the compiler optimizations your code relies on](https://pythonspeed.com/articles/testing-compiler-optimizations/)
* [2025-09-09, 17:32:41](https://news.ycombinator.com/item?id=45185400) - [What happens when private equity buys homes in your neighborhood](https://www.npr.org/sections/planet-money/2025/09/09/g-s1-87699/private-equity-corporate-landlords)
* [2025-09-09, 17:21:00](https://it.slashdot.org/story/25/09/09/177221/microsoft-forces-workers-back-to-the-office?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Forces Workers Back To the Office](https://it.slashdot.org/story/25/09/09/177221/microsoft-forces-workers-back-to-the-office?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-09, 17:01:12](https://news.ycombinator.com/item?id=45184921) - [Weave (YC W25) is hiring a founding AI engineer](https://www.ycombinator.com/companies/weave-3/jobs/SqFnIFE-founding-ai-engineer)
* [2025-09-09, 16:40:00](https://news.slashdot.org/story/25/09/09/1535229/the-renewed-bid-to-end-quarterly-earnings-reports?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Renewed Bid To End Quarterly Earnings Reports](https://news.slashdot.org/story/25/09/09/1535229/the-renewed-bid-to-end-quarterly-earnings-reports?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-09, 16:27:41](https://news.ycombinator.com/item?id=45184368) - [ICE Is Using Fake Cell Towers to Spy on People&apos;s Phones](https://www.forbes.com/sites/the-wiretap/2025/09/09/how-ice-is-using-fake-cell-towers-to-spy-on-peoples-phones/)
* [2025-09-09, 16:27:25](https://lobste.rs/s/h4j1vk/formatting_code_should_be_unnecessary) - [Formatting code should be unnecessary](https://maxleiter.com/blog/formatting)
* [2025-09-09, 16:24:12](https://news.ycombinator.com/item?id=45184315) - [U.S. Added 911,000 Fewer Jobs in the Year Ended in March](https://www.wsj.com/economy/jobs/us-job-growth-revision-a9777d98)
* [2025-09-09, 16:11:39](https://lobste.rs/s/ukpdhb/new_experimental_go_api_for_json) - [A new experimental Go API for JSON](https://go.dev/blog/jsonv2-exp)
* [2025-09-09, 16:01:00](https://news.slashdot.org/story/25/09/09/1513203/us-created-911000-fewer-jobs-than-previously-thought-in-the-12-months-through-march?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Created 911,000 Fewer Jobs Than Previously Thought in the 12 Months Through March](https://news.slashdot.org/story/25/09/09/1513203/us-created-911000-fewer-jobs-than-previously-thought-in-the-12-months-through-march?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-09, 15:59:00](https://soylentnews.org/article.pl?sid=25/09/08/1810222&amp;from=rss) - [Multiple Undersea Cable Cuts in the Red Sea, Hampering Internet Performance](https://soylentnews.org/article.pl?sid=25/09/08/1810222&amp;from=rss)
* [2025-09-09, 15:42:32](https://news.ycombinator.com/item?id=45183589) - [An attacker’s blunder gave us a look into their operations](https://www.huntress.com/blog/rare-look-inside-attacker-operation)
* [2025-09-09, 15:37:56](https://lobste.rs/s/xcbjqt/rich_already_answered) - [Rich Already Answered That](https://gist.github.com/reborg/dc8b0c96c397a56668905e2767fd697f)
* [2025-09-09, 15:34:48](https://lobste.rs/s/qkborx/building_doom_like_multiplayer_shooter) - [Building a DOOM-like multiplayer shooter in pure SQL](https://cedardb.com/blog/doomql/)
* [2025-09-09, 15:34:30](https://lobste.rs/s/n7i9vb/how_i_made_ruby_faster_than_ruby) - [How I Made Ruby Faster than Ruby](https://noteflakes.com/articles/2025-08-18-how-to-make-ruby-faster)
* [2025-09-09, 15:31:40](https://lobste.rs/s/mcngb7/analyzing_memory_ordering_models_apple) - [Analyzing the memory ordering models of the Apple M1 (2023)](https://www.sciencedirect.com/science/article/pii/S1383762124000390)
* [2025-09-09, 15:20:00](https://slashdot.org/story/25/09/09/1126247/no-alpha-left-in-public-markets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [No Alpha Left in Public Markets](https://slashdot.org/story/25/09/09/1126247/no-alpha-left-in-public-markets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-09, 15:16:35](https://lobste.rs/s/vclmlx/apple_event_for_september_9th_2025) - [Apple Event for September 9th, 2025](https://www.apple.com/apple-events/)
* [2025-09-09, 15:12:18](https://news.ycombinator.com/item?id=45183050) - [Building a DOOM-like multiplayer shooter in pure SQL](https://cedardb.com/blog/doomql/)
* [2025-09-09, 15:11:57](https://news.ycombinator.com/item?id=45183039) - [X open sourced their latest algorithm](https://github.com/twitter/the-algorithm)
* [2025-09-09, 15:11:26](https://news.ycombinator.com/item?id=45183029) - [We all dodged a bullet](https://xeiaso.net/notes/2025/we-dodged-a-bullet/)
* [2025-09-09, 15:04:54](https://lobste.rs/s/h7xdec/unauthorized_windows_386) - [Unauthorized Windows/386](https://virtuallyfun.com/2025/09/06/unauthorized-windows-386/)
* [2025-09-09, 14:54:32](https://news.ycombinator.com/item?id=45182770) - [A new experimental Go API for JSON](https://go.dev/blog/jsonv2-exp)
* [2025-09-09, 14:40:00](https://news.slashdot.org/story/25/09/09/1124247/us-tech-companies-enabled-the-surveillance-and-detention-of-hundreds-of-thousands-in-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Tech Companies Enabled the Surveillance and Detention of Hundreds of Thousands in China](https://news.slashdot.org/story/25/09/09/1124247/us-tech-companies-enabled-the-surveillance-and-detention-of-hundreds-of-thousands-in-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-09, 14:28:33](https://news.ycombinator.com/item?id=45182418) - [Disrupting the DRAM roadmap with capacitor-less IGZO-DRAM technology](https://www.imec-int.com/en/articles/disrupting-dram-roadmap-capacitor-less-igzo-dram-technology)
* [2025-09-09, 14:25:55](https://news.ycombinator.com/item?id=45182381) - [Claude can now create and edit files](https://www.anthropic.com/news/create-files)
* [2025-09-09, 14:25:16](https://news.ycombinator.com/item?id=45182372) - [New Mexico is first state in US to offer universal child care](https://www.governor.state.nm.us/2025/09/08/new-mexico-is-first-state-in-nation-to-offer-universal-child-care/)
* [2025-09-09, 14:01:00](https://tech.slashdot.org/story/25/09/09/113252/pakistan-spying-on-millions-through-phone-tapping-and-firewall-amnesty-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pakistan Spying On Millions Through Phone-Tapping And Firewall, Amnesty Says](https://tech.slashdot.org/story/25/09/09/113252/pakistan-spying-on-millions-through-phone-tapping-and-firewall-amnesty-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-09, 13:54:56](https://lobste.rs/s/s19nri/writing_book_age_open_source) - [Writing a book in the age of open source](https://blog.incrementalforgetting.tech/p/sculpting-a-book-the-chisel)
* [2025-09-09, 13:26:17](https://news.ycombinator.com/item?id=45181626) - [Google to Obey South Korean Order to Blur Satellite Images on Maps](https://www.barrons.com/news/google-to-obey-south-korean-order-to-blur-satellite-images-on-maps-653e934e)
* [2025-09-09, 13:24:56](https://lobste.rs/s/aleuv7/how_build_python_code_with_bazel_why) - [How to Build Python Code with Bazel (and Why)](https://ohadravid.github.io/posts/2025-09-hello-bazel/)
* [2025-09-09, 13:23:15](https://lobste.rs/s/mn6ce3/replacing_sgx_with_github_actions_how) - [Replacing SGX with GitHub Actions: Or how to turn GitHub Actions into a trusted computing oracle](https://www.ethanheilman.com/x/35/index.html)
* [2025-09-09, 13:20:30](https://lobste.rs/s/9m1tto/term_everything_run_any_gui_app_terminal) - [term.everything: Run any GUI app in the terminal](https://github.com/mmulet/term.everything)
* [2025-09-09, 13:00:00](https://tech.slashdot.org/story/25/09/09/0048216/sam-altman-says-bots-are-making-social-media-feel-fake?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sam Altman Says Bots Are Making Social Media Feel &apos;Fake&apos;](https://tech.slashdot.org/story/25/09/09/0048216/sam-altman-says-bots-are-making-social-media-feel-fake?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-09, 11:14:00](https://soylentnews.org/article.pl?sid=25/09/08/1210241&amp;from=rss) - [Recreating &apos;The Magnificient Ambersons&apos; With AI](https://soylentnews.org/article.pl?sid=25/09/08/1210241&amp;from=rss)
* [2025-09-09, 10:57:58](https://news.ycombinator.com/item?id=45180315) - [Hallucination Risk Calculator](https://github.com/leochlon/hallbayes)
* [2025-09-09, 10:55:04](https://lobste.rs/s/fumoq5/batched_critical_sections) - [Batched Critical Sections](http://kprotty.me/2025/09/08/batched-critical-sections.html)
* [2025-09-09, 10:02:23](https://news.ycombinator.com/item?id=45179889) - [You too can run malware from NPM (I mean without consequences)](https://github.com/naugtur/running-qix-malware)
* [2025-09-09, 10:00:00](https://linux.slashdot.org/story/25/09/09/0039236/red-hat-back-office-team-moving-to-ibm-from-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Red Hat Back-Office Team Moving To IBM From 2026](https://linux.slashdot.org/story/25/09/09/0039236/red-hat-back-office-team-moving-to-ibm-from-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-09, 07:00:00](https://tech.slashdot.org/story/25/09/09/0030209/gemini-app-finally-expands-to-audio-files?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gemini App Finally Expands To Audio Files](https://tech.slashdot.org/story/25/09/09/0030209/gemini-app-finally-expands-to-audio-files?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-09, 06:27:00](https://soylentnews.org/article.pl?sid=25/09/08/128200&amp;from=rss) - [The World&apos;s Largest Iceberg is Rapidly Breaking Apart and Melting Away](https://soylentnews.org/article.pl?sid=25/09/08/128200&amp;from=rss)
* [2025-09-09, 06:19:44](https://lobste.rs/s/py9ag0/compiling_functional_language_llvm) - [Compiling a functional language to LLVM](https://danieljharvey.github.io/posts/2023-02-08-llvm-compiler-part-1.html)
* [2025-09-09, 06:10:15](https://news.ycombinator.com/item?id=45178041) - [Mistral AI raises 1.7B€, enters strategic partnership with ASML](https://mistral.ai/news/mistral-ai-raises-1-7-b-to-accelerate-technological-progress-with-ai)
* [2025-09-09, 05:06:49](https://lobste.rs/s/unb7up/gsoc_2025_byte_type_supporting_raw_data) - [GSoC 2025 - Byte Type: Supporting Raw Data Copies in the LLVM IR](https://blog.llvm.org/posts/2025-08-29-gsoc-byte-type/)
* [2025-09-09, 04:46:17](https://news.ycombinator.com/item?id=45177518) - [Strong Eventual Consistency – The Big Idea Behind CRDTs](https://lewiscampbell.tech/blog/250908.html)
* [2025-09-09, 03:30:00](https://news.slashdot.org/story/25/09/08/2214205/warming-seas-threaten-key-phytoplankton-species-that-fuels-the-food-web?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Warming Seas Threaten Key Phytoplankton Species That Fuels the Food Web](https://news.slashdot.org/story/25/09/08/2214205/warming-seas-threaten-key-phytoplankton-species-that-fuels-the-food-web?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-09, 03:08:00](https://lobste.rs/s/9oneuy/liquid_glass_browser_refraction_with_css) - [Liquid Glass in the Browser: Refraction with CSS and SVG](https://kube.io/blog/liquid-glass-css-svg/)
* [2025-09-09, 01:39:00](https://soylentnews.org/article.pl?sid=25/09/08/0254218&amp;from=rss) - [Mazda Patents Six-Stroke Gas Engine](https://soylentnews.org/article.pl?sid=25/09/08/0254218&amp;from=rss)
* [2025-09-09, 00:30:00](https://science.slashdot.org/story/25/09/08/2157248/disposable-face-masks-used-during-covid-have-left-chemical-timebomb?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Disposable Face Masks Used During Covid Have Left Chemical Timebomb](https://science.slashdot.org/story/25/09/08/2157248/disposable-face-masks-used-during-covid-have-left-chemical-timebomb?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-08, 23:50:00](https://news.slashdot.org/story/25/09/08/226203/william-shatner-says-he-didnt-earn-a-penny-from-star-trek-re-runs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [William Shatner Says He &apos;Didn&apos;t Earn a Penny&apos; From Star Trek Re-Runs](https://news.slashdot.org/story/25/09/08/226203/william-shatner-says-he-didnt-earn-a-penny-from-star-trek-re-runs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-08, 23:10:00](https://yro.slashdot.org/story/25/09/08/229201/plex-suffers-security-incident-exposing-user-data-and-urging-password-resets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Plex Suffers Security Incident Exposing User Data and Urging Password Resets](https://yro.slashdot.org/story/25/09/08/229201/plex-suffers-security-incident-exposing-user-data-and-urging-password-resets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-08, 22:47:55](https://lobste.rs/s/vjuviw/first_ziglang_org_outage) - [The First ziglang.org Outage](https://ziglang.org/news/first-outage/)
* [2025-09-08, 20:53:00](https://soylentnews.org/article.pl?sid=25/09/07/1713251&amp;from=rss) - [Chagas Disease, Which Can be Deadly, is Now Considered Endemic in the U.S.](https://soylentnews.org/article.pl?sid=25/09/07/1713251&amp;from=rss)
* [2025-09-08, 19:55:15](https://lobste.rs/s/tiutfj/wikimedia_sunsets_separate_mobile) - [Wikimedia sunsets separate mobile domains](https://www.mediawiki.org/wiki/Requests_for_comment/Mobile_domain_sunsetting/2025_Announcement)
* [2025-09-08, 16:56:26](https://lobste.rs/s/w9nx3l/introducing_signal_secure_backups) - [Introducing Signal Secure Backups](https://signal.org/blog/introducing-secure-backups/)
* [2025-09-08, 16:10:00](https://soylentnews.org/article.pl?sid=25/09/07/141204&amp;from=rss) - [SpaceX Dragon Reboosts the International Space Station](https://soylentnews.org/article.pl?sid=25/09/07/141204&amp;from=rss)
* [2025-09-08, 16:07:27](https://lobste.rs/s/rojvul/fixing_my_gripes_with_github_using_gleam) - [Fixing my gripes with GitHub using Gleam and a Raspberry Pi](https://giacomocavalieri.me/posts/fixing-my-gripes-with-github-using-gleam-and-a-raspberry-pi)
* [2025-09-08, 14:43:44](https://lobste.rs/s/hnd00z/we_will_not_accept_changes_created_with) - [We will not accept changes created with the aid of \&quot;AI\&quot;](https://codeberg.org/superseriousbusiness/gotosocial/src/commit/9b7db51436/CODE_OF_CONDUCT.md)
* [2025-09-08, 12:55:13](https://lobste.rs/s/zvdtdn/package_managers_are_evil) - [Package Managers are Evil](https://www.gingerbill.org/article/2025/09/08/package-managers-are-evil/)
* [2025-09-08, 12:26:15](https://news.ycombinator.com/item?id=45167436) - [Go for Bash Programmers – Part II: CLI Tools](https://github.com/go-monk/from-bash-to-go-part-ii)
* [2025-09-08, 11:25:00](https://soylentnews.org/article.pl?sid=25/09/07/1358242&amp;from=rss) - [New China-Aligned Crew Poisons Windows Servers for SEO Fraud](https://soylentnews.org/article.pl?sid=25/09/07/1358242&amp;from=rss)
* [2025-09-08, 09:29:36](https://news.ycombinator.com/item?id=45166245) - [Anscombe&apos;s Quartet](https://en.wikipedia.org/wiki/Anscombe%27s_quartet)
* [2025-09-08, 08:01:17](https://lobste.rs/s/4cnnuw/hashed_sorting_is_typically_faster_than) - [Hashed sorting is typically faster than hash tables](https://reiner.org/hashed-sorting)
* [2025-09-08, 06:43:00](https://soylentnews.org/article.pl?sid=25/09/07/1352214&amp;from=rss) - [Trump Family&apos;s Crypto Token Just Made Them $5 Billion Richer](https://soylentnews.org/article.pl?sid=25/09/07/1352214&amp;from=rss)
* [2025-09-08, 05:28:34](https://news.ycombinator.com/item?id=45164892) - [I solved a distributed queue problem after 15 years](https://www.dbos.dev/blog/durable-queues)
* [2025-09-08, 02:00:00](https://soylentnews.org/article.pl?sid=25/09/07/0222253&amp;from=rss) - [Microsoft Shows Off its Latest Analog Optical Computer](https://soylentnews.org/article.pl?sid=25/09/07/0222253&amp;from=rss)
* [2025-09-07, 21:26:00](https://soylentnews.org/article.pl?sid=25/09/07/005257&amp;from=rss) - [This Unlikely Chemical Could be a Powerful Weapon Against Climate Change](https://soylentnews.org/article.pl?sid=25/09/07/005257&amp;from=rss)
* [2025-09-07, 16:47:00](https://soylentnews.org/article.pl?sid=25/09/07/001206&amp;from=rss) - [What the Hell is Going on Right Now?](https://soylentnews.org/article.pl?sid=25/09/07/001206&amp;from=rss)
* [2025-09-07, 11:56:00](https://soylentnews.org/article.pl?sid=25/09/06/1527240&amp;from=rss) - [France Fines Google, SHEIN for Undercooked Cookie Policies](https://soylentnews.org/article.pl?sid=25/09/06/1527240&amp;from=rss)
* [2025-09-07, 07:11:00](https://soylentnews.org/article.pl?sid=25/09/06/1514247&amp;from=rss) - [Nvidia&apos;s Next-Gen AI Chip Could Be Double  the Price of H20 If China Export is Approved](https://soylentnews.org/article.pl?sid=25/09/06/1514247&amp;from=rss)
* [2025-09-07, 06:39:25](https://news.ycombinator.com/item?id=45155916) - [Synthesizing Object-Oriented and Functional Design to Promote Re-Use](https://cs.brown.edu/~sk/Publications/Papers/Published/kff-synth-fp-oo/)
* [2025-09-07, 02:27:00](https://soylentnews.org/article.pl?sid=25/09/06/1510251&amp;from=rss) - [Porsche&apos;s New Cayenne Will Charge Itself Like No Other EV](https://soylentnews.org/article.pl?sid=25/09/06/1510251&amp;from=rss)
* [2025-09-06, 21:42:00](https://soylentnews.org/article.pl?sid=25/09/05/0544216&amp;from=rss) - [Bill Gates’ 48-Year-Old Microsoft 6502 BASIC Goes Open Source](https://soylentnews.org/article.pl?sid=25/09/05/0544216&amp;from=rss)
* [2025-09-06, 18:22:35](https://news.ycombinator.com/item?id=45151641) - [How can England possibly be running out of water?](https://www.theguardian.com/news/ng-interactive/2025/aug/17/how-can-england-possibly-be-running-out-of-water)
* [2025-09-06, 16:59:00](https://soylentnews.org/article.pl?sid=25/09/05/0540222&amp;from=rss) - [Jury Orders Google to Pay $425 Million for Unlawfully Tracking Millions of Users](https://soylentnews.org/article.pl?sid=25/09/05/0540222&amp;from=rss)
* [2025-09-06, 12:13:00](https://soylentnews.org/article.pl?sid=25/09/05/0536245&amp;from=rss) - [China Likely to Land on Moon Before US Does Again](https://soylentnews.org/article.pl?sid=25/09/05/0536245&amp;from=rss)
* [2025-09-06, 07:29:00](https://soylentnews.org/article.pl?sid=25/09/05/0527230&amp;from=rss) - [New Hollow-Core Fiber Outperforms Glass, Pushing Data Closer to Light Speed](https://soylentnews.org/article.pl?sid=25/09/05/0527230&amp;from=rss)
* [2025-09-06, 02:45:00](https://soylentnews.org/article.pl?sid=25/09/05/0259211&amp;from=rss) - [The Fight Against Labeling Long-Term Streaming Rentals as “Purchases” You “Buy”](https://soylentnews.org/article.pl?sid=25/09/05/0259211&amp;from=rss)
* [2025-09-06, 00:06:31](https://news.ycombinator.com/item?id=45145176) - [Yet Another TypeSafe and Generic Programming Candidate for C](https://github.com/brightprogrammer/MisraStdC)
* [2025-09-05, 21:57:00](https://soylentnews.org/article.pl?sid=25/09/04/155234&amp;from=rss) - [M365 Copilot Fails to Up Productivity in UK Government Trial](https://soylentnews.org/article.pl?sid=25/09/04/155234&amp;from=rss)
* [2025-09-05, 20:07:13](https://news.ycombinator.com/item?id=45143019) - [William James at CERN (1995)](http://bactra.org/wm-james-at-cern/)
* [2025-09-05, 17:13:00](https://soylentnews.org/article.pl?sid=25/09/04/150221&amp;from=rss) - [Nvidia Blasts Proposed US Bill That Would Force It to Give American Buyers First Option](https://soylentnews.org/article.pl?sid=25/09/04/150221&amp;from=rss)
* [2025-09-05, 16:39:40](https://news.ycombinator.com/item?id=45140572) - [A clickable visual guide to the Rust type system](https://rustcurious.com/elements/)
* [2025-09-05, 12:28:00](https://soylentnews.org/article.pl?sid=25/09/04/0430216&amp;from=rss) - [Stressed Ice Generates Electricity, Researchers Find](https://soylentnews.org/article.pl?sid=25/09/04/0430216&amp;from=rss)
* [2025-09-05, 07:47:00](https://soylentnews.org/article.pl?sid=25/09/04/0419219&amp;from=rss) - [Google Won&apos;t Have to Sell Chrome, Judge Rules](https://soylentnews.org/article.pl?sid=25/09/04/0419219&amp;from=rss)
* [2025-09-05, 03:03:00](https://soylentnews.org/article.pl?sid=25/09/04/0414246&amp;from=rss) - [U.S. Gov&apos;t Revokes TSMC&apos;s Authorization to Ship Tools to its Fabs in China](https://soylentnews.org/article.pl?sid=25/09/04/0414246&amp;from=rss)
