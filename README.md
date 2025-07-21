# [News Summary](https://kherrick.github.io/news-summary/)

## Emerging Technologies and Scientific Discoveries

* [Mysterious Antimatter Physics Discovered at the Large Hadron Collider](https://science.slashdot.org/story/25/07/21/0430256/mysterious-antimatter-physics-discovered-at-the-large-hadron-collider?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - New findings from the Large Hadron Collider provide insights into antimatter properties, potentially reshaping our understanding of particle physics.

* [Healthy Babies Born in Britain After Scientists Used DNA From Three People to Avoid Genetic Disease](https://science.slashdot.org/story/25/07/20/0328203/healthy-babies-born-in-britain-after-scientists-used-dna-from-three-people-to-avoid-genetic-disease?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A groundbreaking medical technique successfully used DNA from three people to prevent genetic diseases in newborns.

* [Super-resolution microscopes reveal new details of cells and disease](https://knowablemagazine.org/content/article/technology/2025/super-resolution-microscopes-reveal-new-details-cells) - Super-resolution microscopy uncovers cellular intricacies, enhancing our ability to study diseases and cellular mechanisms.

* [Holographic Ribbon Aims To Oust Magnetic Tape With 50-Year Life Span And 200Tb Per Cartridge](https://soylentnews.org/article.pl?sid=25/07/16/182208&amp;from=rss) - Holographic storage technology promises high-density data storage with extended lifespans, posing a challenge to traditional storage mediums.

## Programming and Software Development

* [Gren 25S: Easier interop, concurrent tasks and zero-install packages](https://gren-lang.org/news/250721_gren_25s/) - Gren creates new tools for concurrency and interop in software systems, boosting efficiency and usability.

* [Why Lexing and Parsing Should Be Separate](https://github.com/oils-for-unix/oils/wiki/Why-Lexing-and-Parsing-Should-Be-Separate) - An exploration into the significance of maintaining separation between lexing and parsing phases during programming.

* [Coding with LLMs in the summer of 2025 (an update)](https://antirez.com/news/154) - A reflective look at programmer interactions with large language models and evolving coding ecosystems.

## Artificial Intelligence and Machine Learning

* [Jack Dorsey Pumps $10M Into a Nonprofit Focused on Open Source Social Media](https://news.slashdot.org/story/25/07/20/058235/jack-dorsey-pumps-10m-into-a-nonprofit-focused-on-open-source-social-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Jack Dorsey champions open-source networks, funding initiatives to decentralize and democratize social media.

* [Responsible AI in Enterprise Applications: A Practitioner’s View](https://www.jjude.com/responsible-ai-in-enterprise-apps/) - A professional exposition on integrating responsible AI practices into enterprise applications.

## Sustainability and Environmental Innovation

* [Staying cool without refrigerants: Next-generation Peltier cooling](https://news.samsung.com/global/interview-staying-cool-without-refrigerants-how-samsung-is-pioneering-next-generation-peltier-cooling) - Samsung explores alternatives to refrigerant-dependence by using eco-friendly Peltier cooling technologies.

* [Industrial Waste is Turning Into Rock in Just Decades, Study Suggests](https://soylentnews.org/article.pl?sid=25/07/16/1725249&amp;from=rss) - Research reveals industrial waste can transform into stable rock formations quickly, presenting environmental benefits.

## Cybersecurity and Tech Regulations

* [Remote Access Trojan (RAT) Found in the AUR (Arch Linux User Repository)](https://soylentnews.org/article.pl?sid=25/07/20/1854256&amp;from=rss) - A concerning discovery of RAT malware affects Arch Linux repository, prompting security alerts for users.

* [NIH limits scientists to six applications per year](https://www.science.org/content/article/fearful-ai-generated-grant-proposals-nih-limits-scientists-six-applications-year) - The NIH introduces measures to curb AI-generated grant overload, restricting submissions by researchers.

## Historical Insights and Legacy Technologies

* [The Sumerian Game: Early Computer Game](https://spillhistorie.no/2025/07/10/the-sumerian-game-the-ancestor-of-modern-city-builders/) - An exploration into one of the first computer games, revealing its impact on modern city-building game design.

* [Open, Free, and Completely Ignored: The Strange Afterlife of Symbian](https://soylentnews.org/article.pl?sid=25/07/19/1538201&amp;from=rss) - A retrospective look at the legacy and missed potential of the open Symbian operating system.

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

* [2025-07-21, 13:20:45](https://lobste.rs/s/uzzuto/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/uzzuto/what_are_you_doing_this_week)
* [2025-07-21, 12:34:37](https://lobste.rs/s/qykvpg/deeper_theories_program_design) - [Deeper theories of program design](https://typesanitizer.com/blog/deeper-theories.html)
* [2025-07-21, 12:20:36](https://news.ycombinator.com/item?id=44634293) - [Ryanair may increase commission to staff identifying oversized cabin bags](https://www.rte.ie/news/ireland/2025/0721/1524508-ryanair-baggage/)
* [2025-07-21, 12:16:42](https://news.ycombinator.com/item?id=44634266) - [What Happens When Housing Prices Go Down?](https://clmarohn.substack.com/p/what-happens-when-housing-prices)
* [2025-07-21, 12:13:19](https://lobste.rs/s/adii2s/dissertation_typesetting) - [Dissertation Typesetting Considerations](https://tony-zorman.com/posts/phd-typesetting.html)
* [2025-07-21, 12:03:27](https://lobste.rs/s/pr5jaq/transformer_explainer_llm_transformer) - [Transformer Explainer: LLM Transformer Model Visually Explained](https://poloclub.github.io/transformer-explainer/)
* [2025-07-21, 12:00:06](https://news.ycombinator.com/item?id=44634166) - [Extend (YC W23) is hiring engineers to build SOTA document processing](https://jobs.ashbyhq.com/extend)
* [2025-07-21, 11:44:00](https://linux.slashdot.org/story/25/07/21/0633232/debian-130-to-begin-supporting-risc-v-as-an-official-cpu-architecture?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Debian 13.0 To Begin Supporting RISC-V as an Official CPU Architecture](https://linux.slashdot.org/story/25/07/21/0633232/debian-130-to-begin-supporting-risc-v-as-an-official-cpu-architecture?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-21, 11:11:27](https://lobste.rs/s/xeqwij/gren_25s_easier_interop_concurrent_tasks) - [Gren 25S: Easier interop, concurrent tasks and zero-install packages](https://gren-lang.org/news/250721_gren_25s/)
* [2025-07-21, 10:23:40](https://news.ycombinator.com/item?id=44633562) - [NIH limits scientists to six applications per year](https://www.science.org/content/article/fearful-ai-generated-grant-proposals-nih-limits-scientists-six-applications-year)
* [2025-07-21, 10:03:07](https://lobste.rs/s/hxgrd2/safe_cell_field_projection_rust_2020) - [Safe Cell field projection in Rust (2020)](https://www.abubalay.com/blog/2020/01/05/cell-field-projection)
* [2025-07-21, 09:48:05](https://news.ycombinator.com/item?id=44633384) - [XSLT: A Precision Tool for the Future of Structured Transformation](https://www.xml.com/articles/2025/07/19/xslt-precision-tool-future-structured-transformation/)
* [2025-07-21, 08:14:44](https://lobste.rs/s/dvzkbd/how_do_you_bundle_application_data) - [How do you bundle application data in different languages?](https://lobste.rs/s/dvzkbd/how_do_you_bundle_application_data)
* [2025-07-21, 08:04:00](https://news.slashdot.org/story/25/07/21/0557216/should-californias-grid-join-a-larger-regional-electricity-market?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Should California&apos;s Grid Join a Larger Regional Electricity Market?](https://news.slashdot.org/story/25/07/21/0557216/should-californias-grid-join-a-larger-regional-electricity-market?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-21, 06:15:05](https://news.ycombinator.com/item?id=44632240) - [How to handle people dismissing io_uring as insecure? (2024)](https://github.com/axboe/liburing/discussions/1047)
* [2025-07-21, 06:09:00](https://soylentnews.org/article.pl?sid=25/07/20/0228244&amp;from=rss) - [For Algorithms, a Little Memory Outweighs a Lot of Time](https://soylentnews.org/article.pl?sid=25/07/20/0228244&amp;from=rss)
* [2025-07-21, 04:34:00](https://science.slashdot.org/story/25/07/21/0430256/mysterious-antimatter-physics-discovered-at-the-large-hadron-collider?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mysterious Antimatter Physics Discovered at the Large Hadron Collider](https://science.slashdot.org/story/25/07/21/0430256/mysterious-antimatter-physics-discovered-at-the-large-hadron-collider?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-21, 03:41:23](https://news.ycombinator.com/item?id=44631594) - [ESP32-Faikin: ESP32 based module to control Daikin aircon units](https://github.com/revk/ESP32-Faikin)
* [2025-07-21, 03:38:31](https://lobste.rs/s/zqttvz/esp32_faikin_esp32_based_module_control) - [ESP32-Faikin: ESP32 based module to control Daikin aircon units](https://github.com/revk/ESP32-Faikin)
* [2025-07-21, 01:44:00](https://science.slashdot.org/story/25/07/21/0120233/fossil-discovered-beyond-pluto-implies-something-dramatic-happened-400m-years-ago?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Fossil&apos; Discovered Beyond Pluto Implies &apos;Something Dramatic&apos; Happened 400M Years Ago](https://science.slashdot.org/story/25/07/21/0120233/fossil-discovered-beyond-pluto-implies-something-dramatic-happened-400m-years-ago?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-21, 01:40:05](https://lobste.rs/s/25zyzd/tools_trade) - [Tools of the Trade](https://www.youtube.com/watch?v=YNtoDGS4uak)
* [2025-07-21, 01:22:00](https://soylentnews.org/article.pl?sid=25/07/19/1538201&amp;from=rss) - [Open, Free, and Completely Ignored: The Strange Afterlife of Symbian](https://soylentnews.org/article.pl?sid=25/07/19/1538201&amp;from=rss)
* [2025-07-21, 01:15:55](https://news.ycombinator.com/item?id=44630927) - [Log by time, not by count](https://johnscolaro.xyz/blog/log-by-time-not-by-count)
* [2025-07-21, 00:40:43](https://news.ycombinator.com/item?id=44630760) - [Man wearing metallic necklace dies after being sucked into MRI machine](https://www.bbc.com/news/articles/cx2n39dvp0po)
* [2025-07-21, 00:33:04](https://news.ycombinator.com/item?id=44630724) - [Agents built from alloys](https://xbow.com/blog/alloy-agents/)
* [2025-07-21, 00:16:25](https://news.ycombinator.com/item?id=44630648) - [Show HN: X11 desktop widget that shows location of your network peers on a map](https://github.com/h2337/connmap)
* [2025-07-20, 23:44:00](https://it.slashdot.org/story/25/07/20/2340220/tens-of-thousands-of-sharepoint-servers-at-risk-microsoft-issues-no-patch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Tens of Thousands&apos; of SharePoint Servers at Risk. Microsoft Issues No Patch](https://it.slashdot.org/story/25/07/20/2340220/tens-of-thousands-of-sharepoint-servers-at-risk-microsoft-issues-no-patch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 23:37:07](https://lobste.rs/s/upfxm3/bad_apple_cd_g_on_karaoke_machine) - [Bad Apple!! CD+G on a karaoke machine](https://gashlin.net/blog/pages/2025-07-19-bad-apple-cdg.html)
* [2025-07-20, 23:32:43](https://lobste.rs/s/tpmdss/why_lexing_parsing_should_be_separate) - [Why Lexing and Parsing Should Be Separate](https://github.com/oils-for-unix/oils/wiki/Why-Lexing-and-Parsing-Should-Be-Separate)
* [2025-07-20, 23:15:11](https://lobste.rs/s/yhhecn/type_level_programming_for_safer) - [Type-level programming for safer resource management](https://frasertweedale.github.io/blog-fp/posts/2025-07-19-type-nats-and-constraints.html)
* [2025-07-20, 22:03:00](https://entertainment.slashdot.org/story/25/07/20/220200/after-superman-scores-400m-globally-how-will-marvel-respond?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [After &apos;Superman&apos; Scores $400M Globally, How Will Marvel Respond?](https://entertainment.slashdot.org/story/25/07/20/220200/after-superman-scores-400m-globally-how-will-marvel-respond?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 21:54:25](https://lobste.rs/s/dbbau4/how_i_found_myself_game_industry) - [How I Found Myself In the Game Industry](https://nothings.org/gamedev/how_i_found_myself_in_the_game_industry.html)
* [2025-07-20, 20:44:00](https://slashdot.org/story/25/07/20/2041256/how-did-amazon-spin-this-years-prime-day-sales?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Did Amazon Spin This Year&apos;s Prime Day Sales?](https://slashdot.org/story/25/07/20/2041256/how-did-amazon-spin-this-years-prime-day-sales?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 20:35:00](https://soylentnews.org/article.pl?sid=25/07/19/1342209&amp;from=rss) - [Iran Seeks Three Cloud Providers To Power Its Government](https://soylentnews.org/article.pl?sid=25/07/19/1342209&amp;from=rss)
* [2025-07-20, 20:18:54](https://news.ycombinator.com/item?id=44628930) - [Staying cool without refrigerants: Next-generation Peltier cooling](https://news.samsung.com/global/interview-staying-cool-without-refrigerants-how-samsung-is-pioneering-next-generation-peltier-cooling)
* [2025-07-20, 19:34:00](https://tech.slashdot.org/story/25/07/20/1714257/kill-russian-soldiers-win-points-is-ukraines-new-drone-scheme-gamifying-war?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Kill Russian Soldiers, Win Points: Is Ukraine&apos;s New Drone Scheme Gamifying War?](https://tech.slashdot.org/story/25/07/20/1714257/kill-russian-soldiers-win-points-is-ukraines-new-drone-scheme-gamifying-war?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 19:27:01](https://lobste.rs/s/04g8ge/foo_archive) - [The Foo Archive](https://soda.privatevoid.net/foo/)
* [2025-07-20, 19:14:55](https://lobste.rs/s/tfc3cb/stdio_3_change_file_is_now_opaque) - [stdio(3) change: FILE is now opaque](https://undeadly.org/cgi?action=article;sid=20250717103345)
* [2025-07-20, 19:12:00](https://soylentnews.org/article.pl?sid=25/07/20/1854256&amp;from=rss) - [Remote Access Trojan (RAT) Found in the AUR (Arch Linux User Repository)](https://soylentnews.org/article.pl?sid=25/07/20/1854256&amp;from=rss)
* [2025-07-20, 18:34:00](https://yro.slashdot.org/story/25/07/20/1559242/how-gmail-server-evidence-led-to-a-jury-verdict-of-232-million-for-wrongful-death?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Gmail Server Evidence Led to a Jury Verdict of $23.2 Million For Wrongful Death](https://yro.slashdot.org/story/25/07/20/1559242/how-gmail-server-evidence-led-to-a-jury-verdict-of-232-million-for-wrongful-death?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 18:18:40](https://news.ycombinator.com/item?id=44627793) - [Stdio(3) change: FILE is now opaque](https://undeadly.org/cgi?action=article;sid=20250717103345)
* [2025-07-20, 17:34:00](https://tech.slashdot.org/story/25/07/20/1421220/deltas-boeing-767-makes-emergency-landing-as-engine-catches-fire-moments-after-takeoff?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Delta&apos;s Boeing 767 Makes Emergency Landing as Engine Catches Fire Moments After Takeoff](https://tech.slashdot.org/story/25/07/20/1421220/deltas-boeing-767-makes-emergency-landing-as-engine-catches-fire-moments-after-takeoff?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 17:00:46](https://lobste.rs/s/ihmxdn/they_re_putting_blue_food_coloring) - [They&apos;re putting blue food coloring in everything](https://blog.foxtrotluna.social/theyre-putting-blue-food-coloring-in-everything/)
* [2025-07-20, 16:34:00](https://science.slashdot.org/story/25/07/19/0457201/inside-the-silicon-valley-push-to-breed-super-babies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Inside the Silicon Valley Push to Breed Super-Babies&apos;](https://science.slashdot.org/story/25/07/19/0457201/inside-the-silicon-valley-push-to-breed-super-babies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 16:15:17](https://lobste.rs/s/9pp08h/i_m_tired_talking_about_ai) - [I’m Tired of Talking About AI](https://paddy.carvers.com/posts/2025/07/ai/)
* [2025-07-20, 15:51:44](https://news.ycombinator.com/item?id=44626363) - [Speeding up my ZSH shell](https://scottspence.com/posts/speeding-up-my-zsh-shell)
* [2025-07-20, 15:49:00](https://soylentnews.org/article.pl?sid=25/07/19/123202&amp;from=rss) - [Intel Has Discontinued Clear Linux, Effective Immediately](https://soylentnews.org/article.pl?sid=25/07/19/123202&amp;from=rss)
* [2025-07-20, 15:18:26](https://lobste.rs/s/bj5yad/tour_microsoft_s_macbu_lab_2006) - [A tour of Microsoft&apos;s MacBU lab (2006)](https://davidweiss.blogspot.com/2006/04/tour-of-microsofts-mac-lab.html)
* [2025-07-20, 14:34:07](https://lobste.rs/s/hikcqp/rust_clippy_performance_status_update) - [Rust Clippy performance status update](https://blog.goose.love/posts/clippy-performance-status-update/)
* [2025-07-20, 14:33:56](https://lobste.rs/s/xx0k66/responsible_ai_enterprise_applications) - [Responsible AI in Enterprise Applications: A Practitioner&apos;s View](https://www.jjude.com/responsible-ai-in-enterprise-apps/)
* [2025-07-20, 14:17:00](https://slashdot.org/story/25/07/20/0557204/why-ibms-amazing-sliding-keyboard-thinkpad-701-never-survived-past-1995?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why IBM&apos;s Amazing &apos;Sliding Keyboard&apos; ThinkPad 701 Never Survived Past 1995](https://slashdot.org/story/25/07/20/0557204/why-ibms-amazing-sliding-keyboard-thinkpad-701-never-survived-past-1995?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 14:04:12](https://lobste.rs/s/7ykaux/introducing_xmlui) - [Introducing XMLUI](https://blog.jonudell.net/2025/07/18/introducing-xmlui/)
* [2025-07-20, 14:03:39](https://news.ycombinator.com/item?id=44625292) - [XMLUI](https://blog.jonudell.net/2025/07/18/introducing-xmlui/)
* [2025-07-20, 12:22:09](https://lobste.rs/s/6ifojq/coding_with_llms_summer_2025_update) - [Coding with LLMs in the summer of 2025 (an update)](https://antirez.com/news/154)
* [2025-07-20, 11:34:00](https://tech.slashdot.org/story/25/07/20/0119236/kde-plasma-finally-gets-rounded-bottom-window-corners?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [KDE Plasma Finally Gets Rounded Bottom Window Corners ](https://tech.slashdot.org/story/25/07/20/0119236/kde-plasma-finally-gets-rounded-bottom-window-corners?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 11:04:02](https://news.ycombinator.com/item?id=44623953) - [Coding with LLMs in the summer of 2025 – an update](https://antirez.com/news/154)
* [2025-07-20, 11:04:00](https://soylentnews.org/article.pl?sid=25/07/19/0033258&amp;from=rss) - [The Latest Windows PCs Remember Everything](https://soylentnews.org/article.pl?sid=25/07/19/0033258&amp;from=rss)
* [2025-07-20, 09:40:45](https://lobste.rs/s/szcq9k/async_i_o_on_linux_durability) - [Async I/O on Linux and durability](https://blog.canoozie.net/async-i-o-on-linux-and-durability/)
* [2025-07-20, 09:33:48](https://news.ycombinator.com/item?id=44623361) - [AI is killing the web – can anything save it?](https://www.economist.com/business/2025/07/14/ai-is-killing-the-web-can-anything-save-it)
* [2025-07-20, 08:02:00](https://news.slashdot.org/story/25/07/20/058235/jack-dorsey-pumps-10m-into-a-nonprofit-focused-on-open-source-social-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jack Dorsey Pumps $10M Into a Nonprofit Focused on Open Source Social Media](https://news.slashdot.org/story/25/07/20/058235/jack-dorsey-pumps-10m-into-a-nonprofit-focused-on-open-source-social-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 06:18:00](https://soylentnews.org/article.pl?sid=25/07/19/0023239&amp;from=rss) - [Infographic: Every Microsoft Acquisition Since 1986](https://soylentnews.org/article.pl?sid=25/07/19/0023239&amp;from=rss)
* [2025-07-20, 04:02:00](https://science.slashdot.org/story/25/07/20/0328203/healthy-babies-born-in-britain-after-scientists-used-dna-from-three-people-to-avoid-genetic-disease?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Healthy Babies Born in Britain After Scientists Used DNA From Three People to Avoid Genetic Disease](https://science.slashdot.org/story/25/07/20/0328203/healthy-babies-born-in-britain-after-scientists-used-dna-from-three-people-to-avoid-genetic-disease?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-20, 01:33:00](https://soylentnews.org/article.pl?sid=25/07/18/2350226&amp;from=rss) - [Is Tor Trustworthy and Safe?](https://soylentnews.org/article.pl?sid=25/07/18/2350226&amp;from=rss)
* [2025-07-19, 22:50:40](https://lobste.rs/s/z2ehwo/borrowchecker_is_what_i_like_least_about) - [The borrowchecker is what I like the least about Rust](https://viralinstruction.com/posts/borrowchecker/)
* [2025-07-19, 22:11:12](https://lobste.rs/s/pv4vxu/why_you_should_choose_htmx_for_your_next) - [Why you should choose HTMX for your next web-based side project - and ditch the crufty MPA and complex SPA](https://hamy.xyz/blog/2024-02_htmx-for-side-projects)
* [2025-07-19, 21:44:30](https://news.ycombinator.com/item?id=44619709) - [Perl Versioning Scheme and Gentoo](https://wiki.gentoo.org/wiki/Project:Perl/Version-Scheme)
* [2025-07-19, 20:33:00](https://soylentnews.org/article.pl?sid=25/07/18/0948223&amp;from=rss) - [The Fascinating Science of Pain – and Why Everyone Feels it Differently](https://soylentnews.org/article.pl?sid=25/07/18/0948223&amp;from=rss)
* [2025-07-19, 15:50:00](https://soylentnews.org/article.pl?sid=25/07/18/0939219&amp;from=rss) - [FuguIta: OpenBSD Live CD - Desktop Environment Demo Version with XFCE v.4.20.0](https://soylentnews.org/article.pl?sid=25/07/18/0939219&amp;from=rss)
* [2025-07-19, 11:08:00](https://soylentnews.org/article.pl?sid=25/07/18/0920228&amp;from=rss) - [Most Warming This Century May Be Due To Air Pollution Cuts](https://soylentnews.org/article.pl?sid=25/07/18/0920228&amp;from=rss)
* [2025-07-19, 10:52:43](https://news.ycombinator.com/item?id=44614372) - [The sumerian game early computer game](https://spillhistorie.no/2025/07/10/the-sumerian-game-the-ancestor-of-modern-city-builders/)
* [2025-07-19, 06:20:00](https://soylentnews.org/article.pl?sid=25/07/18/0136203&amp;from=rss) - [Two Guys Hated Using Comcast, So They Built Their Own Fiber ISP](https://soylentnews.org/article.pl?sid=25/07/18/0136203&amp;from=rss)
* [2025-07-19, 01:37:00](https://soylentnews.org/article.pl?sid=25/07/18/0124213&amp;from=rss) - [Radio Hobbyists, Rejoice! Good News for LoRa &amp; Mesh](https://soylentnews.org/article.pl?sid=25/07/18/0124213&amp;from=rss)
* [2025-07-18, 21:13:34](https://news.ycombinator.com/item?id=44609893) - [Super-resolution microscopes reveal new details of cells and disease](https://knowablemagazine.org/content/article/technology/2025/super-resolution-microscopes-reveal-new-details-cells)
* [2025-07-18, 20:55:00](https://soylentnews.org/article.pl?sid=25/07/18/0111248&amp;from=rss) - [Drones, AI and Robot Pickers: Meet the Fully Autonomous Farm](https://soylentnews.org/article.pl?sid=25/07/18/0111248&amp;from=rss)
* [2025-07-18, 16:10:00](https://soylentnews.org/article.pl?sid=25/07/18/011202&amp;from=rss) - [DOGE Staffer With Access to Americans&apos; Personal Data Leaked Private xAI API Key](https://soylentnews.org/article.pl?sid=25/07/18/011202&amp;from=rss)
* [2025-07-18, 14:08:12](https://news.ycombinator.com/item?id=44604808) - [Hexanitrogen Energies](https://www.science.org/content/blog-post/hexanitrogen-energies)
* [2025-07-18, 13:13:33](https://news.ycombinator.com/item?id=44604311) - [Using the Matrix Cores of AMD RDNA 4 architecture GPUs](https://gpuopen.com/learn/using_matrix_core_amd_rdna4/)
* [2025-07-18, 12:48:49](https://news.ycombinator.com/item?id=44604127) - [Structuring Arrays with Algebraic Shapes [video]](https://www.youtube.com/watch?v=3Lbs0pJ_OHI)
* [2025-07-18, 11:26:00](https://soylentnews.org/article.pl?sid=25/07/17/127255&amp;from=rss) - [Intel Axes Thousands of Technicians and Engineers in Sweeping U.S. Layoffs](https://soylentnews.org/article.pl?sid=25/07/17/127255&amp;from=rss)
* [2025-07-18, 11:09:07](https://news.ycombinator.com/item?id=44603349) - [“Dynamic programming” is not referring to “computer programming”](https://www.vidarholen.net/contents/blog/?p=1172)
* [2025-07-18, 06:49:00](https://soylentnews.org/article.pl?sid=25/07/17/124242&amp;from=rss) - [Engineering the Origin of the Wheel](https://soylentnews.org/article.pl?sid=25/07/17/124242&amp;from=rss)
* [2025-07-18, 02:05:00](https://soylentnews.org/article.pl?sid=25/07/17/1148204&amp;from=rss) - [Nvidia Chips Become the First GPUs to Fall to Rowhammer Bit-Flip Attacks](https://soylentnews.org/article.pl?sid=25/07/17/1148204&amp;from=rss)
* [2025-07-18, 00:59:21](https://news.ycombinator.com/item?id=44600070) - [Quadratic Forms Beyond Arithmetic](https://www.ams.org/journals/notices/202507/noti3192/noti3192.html)
* [2025-07-17, 21:14:00](https://soylentnews.org/article.pl?sid=25/07/16/188244&amp;from=rss) - [Belkin Shows Tech Firms Getting Too Comfortable With Bricking Customers’ Stuff](https://soylentnews.org/article.pl?sid=25/07/16/188244&amp;from=rss)
* [2025-07-17, 20:54:02](https://news.ycombinator.com/item?id=44598090) - [The Daily Life of a Medieval King](https://www.medievalists.net/2025/07/medieval-king-daily-life/)
* [2025-07-17, 16:32:00](https://soylentnews.org/article.pl?sid=25/07/16/182208&amp;from=rss) - [Holographic Ribbon Aims To Oust Magnetic Tape With 50-Year Life Span And 200Tb Per Cartridge](https://soylentnews.org/article.pl?sid=25/07/16/182208&amp;from=rss)
* [2025-07-17, 16:01:17](https://news.ycombinator.com/item?id=44594808) - [New colors without shooting lasers into your eyes](https://dynomight.net/colors/)
* [2025-07-17, 15:43:04](https://news.ycombinator.com/item?id=44594584) - [Show HN: Conductor, a Mac app that lets you run a bunch of Claude Codes at once](https://conductor.build/)
* [2025-07-17, 12:51:28](https://news.ycombinator.com/item?id=44592797) - [Debugging Bash Like a Sire (2023)](https://blog.brujordet.no/post/bash/debugging_bash_like_a_sire/)
* [2025-07-17, 11:47:00](https://soylentnews.org/article.pl?sid=25/07/16/1758241&amp;from=rss) - [AI Slows Down Some Experienced Software Developers](https://soylentnews.org/article.pl?sid=25/07/16/1758241&amp;from=rss)
* [2025-07-17, 09:12:26](https://news.ycombinator.com/item?id=44591305) - [Simulating hand-drawn motion with SVG filters](https://camillovisini.com/coding/simulating-hand-drawn-motion-with-svg-filters)
* [2025-07-17, 07:07:00](https://soylentnews.org/article.pl?sid=25/07/16/1725249&amp;from=rss) - [Industrial Waste is Turning Into Rock in Just Decades, Study Suggests](https://soylentnews.org/article.pl?sid=25/07/16/1725249&amp;from=rss)
* [2025-07-17, 02:22:00](https://soylentnews.org/article.pl?sid=25/07/15/1735235&amp;from=rss) - [Merger of Two Massive Black Holes is One for the Record Books](https://soylentnews.org/article.pl?sid=25/07/15/1735235&amp;from=rss)
