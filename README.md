# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Scientists Say Tool Can Sniff 5G Traffic, Launch 'Attacks' Without Using Rogue Base Stations](https://soylentnews.org/article.pl?sid=25/08/19/1550241&amp;from=rss) - Researchers highlight a novel threat to 5G networks that bypasses rogue base stations, showing the evolving risks in telecommunications.

* [Databricks is raising a Series K Investment at >$100B valuation](https://www.databricks.com/company/newsroom/press-releases/databricks-raising-series-k-investment-100-billion-valuation) - The data and AI company achieves a massive valuation, emphasizing its growth and industry impact.

* [Vibe Coding Is the Worst Idea of 2025 [video]](https://www.youtube.com/watch?v=1A6uPztchXk) - A humorous take exposing coding trends that may not be suitable for efficient software development.

* [Can’t Pay, Won’t Pay: Impoverished Streaming Services are Driving Viewers Back to Piracy](https://soylentnews.org/article.pl?sid=25/08/19/1547232&amp;from=rss) - Streaming platforms' financial struggles spur viewers to resort to piracy again.

## Cybersecurity and Privacy

* [Ask HN: Why does the US Visa application website do a port-scan of my network?](https://news.ycombinator.com/item?id=44959073) - Users discuss unusual network behavior on the US Visa application portal.

* [Copilot broke audit logs, but Microsoft won’t tell customers](https://pistachioapp.com/blog/copilot-broke-your-audit-log) - Developers criticize Microsoft over transparency issues in log security after Copilot's malfunction.

* [How we exploited CodeRabbit: From simple PR to RCE and write access on 1M repos](https://research.kudelskisecurity.com/2025/08/19/how-we-exploited-coderabbit-from-a-simple-pr-to-rce-and-write-access-on-1m-repositories/) - Detailed report on a severe vulnerability exploited for repository access.

* [CRLite: Fast, private, and comprehensive certificate revocation checking in Firefox](https://hacks.mozilla.org/2025/08/crlite-fast-private-and-comprehensive-certificate-revocation-checking-in-firefox/) - Mozilla’s innovative certificate checking mechanisms aim to enhance user security.

## Global Internet and Digital Policies

* [Analysis of the GFW's Unconditional Port 443 Block on August 20, 2025](https://gfw.report/blog/gfw_unconditional_rst_20250820/en/) - Analysis of China's Great Firewall blocking HTTPS traffic, indicating heightened restrictions.

* [Pakistan's Internet Connectivity Abruptly Plummets To 20%](https://tech.slashdot.org/story/25/08/19/233241/pakistans-internet-connectivity-abruptly-plummets-to-20?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Connectivity issues raise questions about the state of the internet within Pakistan.

* [Wyoming Launches First State-Backed Stablecoin on Seven Blockchains](https://news.slashdot.org/story/25/08/19/1844245/wyoming-launches-first-state-backed-stablecoin-on-seven-blockchains?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Wyoming's innovative approach to cryptocurrency regulation marks a milestone in blockchain adoption.

## AI and Its Implications

* [Google's AI Overviews Led Users Astray, Reports Say Some Phone Numbers Are Scams](https://it.slashdot.org/story/25/08/19/1849240/googles-ai-overviews-led-users-astray-reports-say-some-phone-numbers-are-scams?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Issues of misinformation caused by AI highlight problems in automated synthesis of information.

* [Mark Zuckerberg Plans To Shake Up Meta's AI Efforts, Again](https://tech.slashdot.org/story/25/08/19/1748256/mark-zuckerberg-plans-to-shake-up-metas-ai-efforts-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Facebook’s AI division undergoes major strategic shifts under Zuckerberg’s vision.

* [Gates Funds $1 Million AI Alzheimer’s Prize](https://science.slashdot.org/story/25/08/19/150204/gates-funds-1-million-ai-alzheimers-prize?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Major philanthropic initiatives aim to combat chronic diseases using AI advancements.

## Scientific Discoveries and Advancements

* [Scientists 3D Print Inside a Living Cell](https://soylentnews.org/article.pl?sid=25/08/18/126258&amp;from=rss) - A groundbreaking advance in bioprinting enables intricate structures to be made directly within cells.

* [Tiny microbe challenges the definition of cellular life](https://nautil.us/a-rogue-new-life-form-1232095/) - Discovery of novel microorganisms may redefine concepts in biology.

* [Charged Drops Don't Splash](https://soylentnews.org/article.pl?sid=25/08/19/0039216&amp;from=rss) - Scientists unveil why certain charge dynamics prevent liquid splashing.

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

* [2025-08-20, 06:48:00](https://soylentnews.org/article.pl?sid=25/08/19/1550241&amp;from=rss) - [Scientists Say Tool Can Sniff 5G Traffic, Launch &apos;Attacks&apos; Without Using Rogue Base Stations](https://soylentnews.org/article.pl?sid=25/08/19/1550241&amp;from=rss)
* [2025-08-20, 06:06:15](https://news.ycombinator.com/item?id=44959092) - [Databricks is raising a Series K Investment at &gt;$100B valuation](https://www.databricks.com/company/newsroom/press-releases/databricks-raising-series-k-investment-100-billion-valuation)
* [2025-08-20, 06:03:03](https://news.ycombinator.com/item?id=44959073) - [Ask HN: Why does the US Visa application website do a port-scan of my network?](https://news.ycombinator.com/item?id=44959073)
* [2025-08-20, 06:02:29](https://news.ycombinator.com/item?id=44959069) - [Vibe Coding Is the Worst Idea of 2025 [video]](https://www.youtube.com/watch?v=1A6uPztchXk)
* [2025-08-20, 05:07:19](https://lobste.rs/s/i0ismi/some_tricks_for_list_manipulation) - [Some Tricks for List Manipulation](https://doisinkidney.com/posts/2019-05-08-list-manipulation-tricks.html)
* [2025-08-20, 05:00:00](https://news.slashdot.org/story/25/08/19/2356238/indias-got-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [India&apos;s Got Time](https://news.slashdot.org/story/25/08/19/2356238/indias-got-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-20, 04:59:27](https://news.ycombinator.com/item?id=44958752) - [Type-machine](https://arthi-chaud.github.io/posts/type-machine/)
* [2025-08-20, 04:57:55](https://lobste.rs/s/pktybh/type_machine) - [Type-machine](https://arthi-chaud.github.io/posts/type-machine/)
* [2025-08-20, 04:27:29](https://news.ycombinator.com/item?id=44958621) - [Analysis of the GFW&apos;s Unconditional Port 443 Block on August 20, 2025](https://gfw.report/blog/gfw_unconditional_rst_20250820/en/)
* [2025-08-20, 04:04:20](https://news.ycombinator.com/item?id=44958543) - [Show HN: Hanaco Weather – A poetic weather SNS from the OS Yamato project](https://github.com/osyamato/os-yamato)
* [2025-08-20, 03:35:20](https://news.ycombinator.com/item?id=44958421) - [Monoid-Augmented FIFOs, Deamortised](https://pvk.ca/Blog/2025/08/19/monoid-augmented-fifos/)
* [2025-08-20, 03:33:44](https://lobste.rs/s/uwwr6r/monoid_augmented_fifos_deamortised) - [Monoid-augmented FIFOs, deamortised](https://pvk.ca/Blog/2025/08/19/monoid-augmented-fifos/)
* [2025-08-20, 02:32:00](https://apple.slashdot.org/story/25/08/19/2351234/apple-is-reportedly-making-more-of-its-new-iphones-in-india-instead-of-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple is Reportedly Making More of Its New iPhones in India Instead of China](https://apple.slashdot.org/story/25/08/19/2351234/apple-is-reportedly-making-more-of-its-new-iphones-in-india-instead-of-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-20, 02:25:53](https://news.ycombinator.com/item?id=44958145) - [We’re Not So Special: A new book challenges human exceptionalism](https://democracyjournal.org/magazine/78/were-not-so-special/)
* [2025-08-20, 02:12:51](https://lobste.rs/s/xecakg/long_season_langdev) - [The long season of langdev](https://blog.fogus.me/langdev/long-season.html)
* [2025-08-20, 02:06:00](https://soylentnews.org/article.pl?sid=25/08/19/1547232&amp;from=rss) - [Can’t Pay, Won’t Pay: Impoverished Streaming Services are Driving Viewers Back to Piracy](https://soylentnews.org/article.pl?sid=25/08/19/1547232&amp;from=rss)
* [2025-08-20, 02:00:11](https://news.ycombinator.com/item?id=44958020) - [The Value of Hitting the HN Front Page](https://www.mooreds.com/wordpress/archives/3530)
* [2025-08-20, 01:19:43](https://news.ycombinator.com/item?id=44957818) - [Calling Their Bluff](https://anguscheng.com/post/2025-08-13-calling-their-bluff/)
* [2025-08-20, 00:38:56](https://lobste.rs/s/oqhuo2/git_rfc_introduce_jj_inspired_git_history) - [Git RFC: Introduce jj-inspired git-history(1) command for easy history editing](https://lore.kernel.org/git/20250819-b4-pks-history-builtin-v1-0-9b77c32688fe@pks.im/)
* [2025-08-20, 00:30:00](https://hardware.slashdot.org/story/25/08/19/2347235/electricity-prices-are-climbing-more-than-twice-as-fast-as-inflation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Electricity Prices Are Climbing More Than Twice as Fast as Inflation](https://hardware.slashdot.org/story/25/08/19/2347235/electricity-prices-are-climbing-more-than-twice-as-fast-as-inflation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-20, 00:18:00](https://news.ycombinator.com/item?id=44957454) - [Copilot broke audit logs, but Microsoft won&apos;t tell customers](https://pistachioapp.com/blog/copilot-broke-your-audit-log)
* [2025-08-20, 00:15:03](https://news.ycombinator.com/item?id=44957443) - [AGENTS.md – Open format for guiding coding agents](https://agents.md/)
* [2025-08-19, 23:18:48](https://news.ycombinator.com/item?id=44957157) - [Tiny microbe challenges the definition of cellular life](https://nautil.us/a-rogue-new-life-form-1232095/)
* [2025-08-19, 23:04:00](https://tech.slashdot.org/story/25/08/19/233241/pakistans-internet-connectivity-abruptly-plummets-to-20?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pakistan&apos;s Internet Connectivity Abruptly Plummets To 20%](https://tech.slashdot.org/story/25/08/19/233241/pakistans-internet-connectivity-abruptly-plummets-to-20?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-19, 23:03:34](https://lobste.rs/s/3uhlzd/change_custom_directory_alias_with) - [Change to Custom Directory Alias With Completions in Zsh (2021)](https://hacdias.com/2021/05/30/cd-alias-completions-zsh/)
* [2025-08-19, 22:41:16](https://news.ycombinator.com/item?id=44956915) - [How to Draw a Space Invader](https://muffinman.io/blog/invaders/)
* [2025-08-19, 22:02:00](https://it.slashdot.org/story/25/08/19/1849240/googles-ai-overviews-led-users-astray-reports-say-some-phone-numbers-are-scams?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s AI Overviews Led Users Astray, Reports Say Some Phone Numbers Are Scams](https://it.slashdot.org/story/25/08/19/1849240/googles-ai-overviews-led-users-astray-reports-say-some-phone-numbers-are-scams?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-19, 21:48:30](https://news.ycombinator.com/item?id=44956581) - [Drunken Bishop (2023)](https://re.factorcode.org/2023/08/drunken-bishop.html)
* [2025-08-19, 21:46:41](https://lobste.rs/s/rykbqu/drunken_bishop_2023) - [Drunken Bishop (2023)](https://re.factorcode.org/2023/08/drunken-bishop.html)
* [2025-08-19, 21:21:00](https://soylentnews.org/article.pl?sid=25/08/19/0050215&amp;from=rss) - [Attorneys General, HCA Settle Over Nurse Training Repayment Provisions](https://soylentnews.org/article.pl?sid=25/08/19/0050215&amp;from=rss)
* [2025-08-19, 21:02:00](https://news.slashdot.org/story/25/08/19/1844245/wyoming-launches-first-state-backed-stablecoin-on-seven-blockchains?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wyoming Launches First State-Backed Stablecoin on Seven Blockchains](https://news.slashdot.org/story/25/08/19/1844245/wyoming-launches-first-state-backed-stablecoin-on-seven-blockchains?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-19, 20:01:00](https://tech.slashdot.org/story/25/08/19/1840255/san-francisco-car-rental-startup-kyte-once-seen-as-hertz-rival-shuts-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [San Francisco Car Rental Startup Kyte, Once Seen as Hertz Rival, Shuts Down](https://tech.slashdot.org/story/25/08/19/1840255/san-francisco-car-rental-startup-kyte-once-seen-as-hertz-rival-shuts-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-19, 19:48:38](https://news.ycombinator.com/item?id=44955576) - [Show HN: OpenAI/reflect – Physical AI Assistant that illuminates your life](https://github.com/openai/openai-reflect)
* [2025-08-19, 19:38:45](https://news.ycombinator.com/item?id=44955459) - [CRDT: Text Buffer](https://madebyevan.com/algos/crdt-text-buffer/)
* [2025-08-19, 19:23:00](https://soylentnews.org/article.pl?sid=25/08/19/195256&amp;from=rss) - [Only 3 Stories in the Submissions Queue](https://soylentnews.org/article.pl?sid=25/08/19/195256&amp;from=rss)
* [2025-08-19, 19:01:00](https://slashdot.org/story/25/08/19/1838224/amazon-cloud-chief-says-replacing-junior-staff-with-ai-is-dumbest-idea?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Cloud Chief Says Replacing Junior Staff With AI is &apos;Dumbest&apos; Idea](https://slashdot.org/story/25/08/19/1838224/amazon-cloud-chief-says-replacing-junior-staff-with-ai-is-dumbest-idea?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-19, 18:42:25](https://news.ycombinator.com/item?id=44954823) - [AnduinOS](https://www.anduinos.com/)
* [2025-08-19, 18:14:41](https://news.ycombinator.com/item?id=44954524) - [D2 (text to diagram tool) now supports ASCII renders](https://d2lang.com/blog/ascii/)
* [2025-08-19, 18:01:00](https://tech.slashdot.org/story/25/08/19/1748256/mark-zuckerberg-plans-to-shake-up-metas-ai-efforts-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mark Zuckerberg Plans To Shake Up Meta&apos;s AI Efforts, Again](https://tech.slashdot.org/story/25/08/19/1748256/mark-zuckerberg-plans-to-shake-up-metas-ai-efforts-again?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-19, 17:53:27](https://lobste.rs/s/8amms6/crlite_fast_private_comprehensive) - [CRLite: Fast, private, and comprehensive certificate revocation checking in Firefox](https://hacks.mozilla.org/2025/08/crlite-fast-private-and-comprehensive-certificate-revocation-checking-in-firefox/)
* [2025-08-19, 17:20:00](https://it.slashdot.org/story/25/08/19/1719236/windows-power-users-frustrated-as-microsoft-forces-automatic-app-updates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Windows Power Users Frustrated as Microsoft Forces Automatic App Updates](https://it.slashdot.org/story/25/08/19/1719236/windows-power-users-frustrated-as-microsoft-forces-automatic-app-updates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-19, 16:49:15](https://news.ycombinator.com/item?id=44953575) - [Why Semantic Layers Matter (and how to build one with DuckDB)](https://motherduck.com/blog/semantic-layer-duckdb-tutorial/)
* [2025-08-19, 16:35:00](https://soylentnews.org/article.pl?sid=25/08/19/0044229&amp;from=rss) - [Federal Court Filing System Hit in Sweeping Hack](https://soylentnews.org/article.pl?sid=25/08/19/0044229&amp;from=rss)
* [2025-08-19, 16:23:00](https://lobste.rs/s/c417pn/emacs_as_your_video_trimming_tool) - [Emacs as your video-trimming tool](https://xenodium.com/emacs-as-your-video-trimming-tool)
* [2025-08-19, 16:22:01](https://news.ycombinator.com/item?id=44953316) - [Emacs as your video-trimming tool](https://xenodium.com/emacs-as-your-video-trimming-tool)
* [2025-08-19, 16:04:00](https://lobste.rs/s/7mjacp/smalljs) - [SmallJS](https://small-js.org/Home/Home.html)
* [2025-08-19, 16:03:00](https://news.slashdot.org/story/25/08/19/162258/three-quarters-of-countries-face-below-replacement-fertility-by-2050?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Three-Quarters of Countries Face Below-Replacement Fertility by 2050](https://news.slashdot.org/story/25/08/19/162258/three-quarters-of-countries-face-below-replacement-fertility-by-2050?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-19, 15:55:15](https://news.ycombinator.com/item?id=44953032) - [How we exploited CodeRabbit: From simple PR to RCE and write access on 1M repos](https://research.kudelskisecurity.com/2025/08/19/how-we-exploited-coderabbit-from-a-simple-pr-to-rce-and-write-access-on-1m-repositories/)
* [2025-08-19, 15:43:23](https://lobste.rs/s/hcbilp/jepsen_18_serializable_mom_by_kyle) - [Jepsen 18: Serializable Mom by Kyle Kingsbury](https://youtu.be/dpTxWePmW5Y)
* [2025-08-19, 15:02:00](https://science.slashdot.org/story/25/08/19/150204/gates-funds-1-million-ai-alzheimers-prize?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gates Funds $1 Million AI Alzheimer&apos;s Prize](https://science.slashdot.org/story/25/08/19/150204/gates-funds-1-million-ai-alzheimers-prize?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-19, 14:35:30](https://lobste.rs/s/fqhfqc/language_models_as_thespians) - [Language Models as Thespians](https://jstrieb.github.io/posts/llm-thespians/)
* [2025-08-19, 14:13:05](https://lobste.rs/s/owhphj/lawnmower_irc_server) - [The Lawnmower IRC Server](https://jotunheimr.idlerpg.net/users/jotun/lawnmower/)
* [2025-08-19, 14:05:00](https://slashdot.org/story/25/08/19/146205/mit-report-95-of-generative-ai-pilots-at-companies-are-failing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [MIT Report: 95% of Generative AI Pilots at Companies Are Failing](https://slashdot.org/story/25/08/19/146205/mit-report-95-of-generative-ai-pilots-at-companies-are-failing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-19, 13:54:47](https://lobste.rs/s/va2mvi/without_futex_it_s_futile) - [Without the futex, it&apos;s futile](https://h4x0r.org/futex/)
* [2025-08-19, 13:53:42](https://news.ycombinator.com/item?id=44951563) - [Without the futex, it&apos;s futile](https://h4x0r.org/futex/)
* [2025-08-19, 11:53:00](https://soylentnews.org/article.pl?sid=25/08/19/0039216&amp;from=rss) - [Charged Drops Don&apos;t Splash](https://soylentnews.org/article.pl?sid=25/08/19/0039216&amp;from=rss)
* [2025-08-19, 11:30:00](https://news.slashdot.org/story/25/08/19/1123215/uk-is-lagging-behind-rest-of-world-in-tackling-big-tech-says-fortnite-chief?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK is Lagging Behind Rest of World in Tackling Big Tech, Says Fortnite Chief](https://news.slashdot.org/story/25/08/19/1123215/uk-is-lagging-behind-rest-of-world-in-tackling-big-tech-says-fortnite-chief?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-19, 11:14:32](https://lobste.rs/s/7wwm4h/reserve_first) - [Reserve First](https://matklad.github.io/2025/08/16/reserve-first.html)
* [2025-08-19, 09:46:27](https://news.ycombinator.com/item?id=44949895) - [Custom telescope mount using harmonic drives and ESP32](https://www.svendewaerhert.com/blog/telescope-mount/)
* [2025-08-19, 07:32:02](https://lobste.rs/s/dcw2ea/prime_number_grid) - [Prime Number Grid](https://susam.net/primegrid.html)
* [2025-08-19, 07:30:00](https://news.slashdot.org/story/25/08/19/0716252/us-ftc-sues-ticket-reseller-for-evading-taylor-swifts-eras-tour-ticket-limits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US FTC Sues Ticket Reseller For Evading Taylor Swift&apos;s Eras Tour Ticket Limits](https://news.slashdot.org/story/25/08/19/0716252/us-ftc-sues-ticket-reseller-for-evading-taylor-swifts-eras-tour-ticket-limits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-19, 07:05:00](https://soylentnews.org/article.pl?sid=25/08/18/126258&amp;from=rss) - [Scientists 3D Print Inside a Living Cell](https://soylentnews.org/article.pl?sid=25/08/18/126258&amp;from=rss)
* [2025-08-19, 06:46:57](https://lobste.rs/s/b30klp/sinking_itanic_free_ebook) - [The Sinking of the Itanic: free ebook](http://bitmason.blogspot.com/2024/02/the-sinking-of-itanic-free-ebook.html)
* [2025-08-19, 04:30:31](https://lobste.rs/s/ik0pjv/left_right_programming) - [Left to Right Programming](https://graic.net/p/left-to-right-programming)
* [2025-08-19, 04:16:47](https://lobste.rs/s/kf5gi2/memory_filesystems_rust) - [In-memory Filesystems in Rust](https://andre.arko.net/2025/08/18/in-memory-filesystems-in-rust/)
* [2025-08-19, 04:08:59](https://lobste.rs/s/bibyfi/why_developers_question_everything) - [Why developers question everything](https://timharek.no/blog/why-developers-question-everything/)
* [2025-08-19, 02:20:00](https://soylentnews.org/article.pl?sid=25/08/18/122222&amp;from=rss) - [Wikipedia Loses Challenge Against Online Safety Act, but the Door is Open for a Challenge](https://soylentnews.org/article.pl?sid=25/08/18/122222&amp;from=rss)
* [2025-08-18, 23:44:47](https://lobste.rs/s/t5ygt3/peculiar_case_japanese_web_design_2022) - [The peculiar case of Japanese web design (2022)](https://sabrinas.space)
* [2025-08-18, 22:52:37](https://lobste.rs/s/6cls8e/intel_outside_hacking_every_intel) - [Intel Outside: Hacking every Intel employee and various internal websites](https://eaton-works.com/2025/08/18/intel-outside-hack/)
* [2025-08-18, 21:43:58](https://lobste.rs/s/8lti4g/google_is_killing_open_web) - [Google is killing the open web](https://wok.oblomov.eu/tecnologia/google-killing-open-web/)
* [2025-08-18, 21:37:54](https://lobste.rs/s/iyl4vu/phrack_72) - [Phrack 72](https://phrack.org/issues/72/1)
* [2025-08-18, 21:33:00](https://soylentnews.org/article.pl?sid=25/08/18/1144234&amp;from=rss) - [A Tale of Two Distros: One Outgoing and One Incoming](https://soylentnews.org/article.pl?sid=25/08/18/1144234&amp;from=rss)
* [2025-08-18, 18:18:36](https://news.ycombinator.com/item?id=44943666) - [How to Think About GPUs](https://jax-ml.github.io/scaling-book/gpus/)
* [2025-08-18, 16:48:00](https://soylentnews.org/article.pl?sid=25/08/18/1141215&amp;from=rss) - [Radioactive Water From UK Nuclear Bomb Base Leaked Into Sea, Files Show](https://soylentnews.org/article.pl?sid=25/08/18/1141215&amp;from=rss)
* [2025-08-18, 12:31:18](https://news.ycombinator.com/item?id=44939849) - [Intel Foundry Demonstrates First Arm-Based Chip on 18A Node](https://hothardware.com/news/intel-foundry-demos-deer-creek-falls-reference-soc)
* [2025-08-18, 12:05:00](https://soylentnews.org/article.pl?sid=25/08/17/1234239&amp;from=rss) - [Toothpaste Made From Hair Provides Natural Root to Repair Teeth](https://soylentnews.org/article.pl?sid=25/08/17/1234239&amp;from=rss)
* [2025-08-18, 11:22:22](https://news.ycombinator.com/item?id=44939423) - [How I Made Ruby Faster Than Ruby](https://noteflakes.com/articles/2025-08-18-how-to-make-ruby-faster)
* [2025-08-18, 11:02:04](https://lobste.rs/s/l5qpv2/this_website_is_served_from_nine_neovim) - [This Website is Served from Nine Neovim Buffers on My Old ThinkPad](https://vim.gabornyeki.com/)
* [2025-08-18, 09:00:53](https://news.ycombinator.com/item?id=44938667) - [Rails Charts Using ECharts from Apache](https://github.com/railsjazz/rails_charts)
* [2025-08-18, 07:21:00](https://soylentnews.org/article.pl?sid=25/08/17/1246229&amp;from=rss) - [Firefox’s New “AI” Features Cause CPU Spikes and Battery Drain](https://soylentnews.org/article.pl?sid=25/08/17/1246229&amp;from=rss)
* [2025-08-18, 02:36:00](https://soylentnews.org/article.pl?sid=25/08/17/1237215&amp;from=rss) - [Blackhole Bounce - New Universes](https://soylentnews.org/article.pl?sid=25/08/17/1237215&amp;from=rss)
* [2025-08-17, 21:53:00](https://soylentnews.org/article.pl?sid=25/08/17/1310222&amp;from=rss) - [What’s a Smut Peddler to Do These Days?](https://soylentnews.org/article.pl?sid=25/08/17/1310222&amp;from=rss)
* [2025-08-17, 17:08:00](https://soylentnews.org/article.pl?sid=25/08/17/0238238&amp;from=rss) - [Air Pollution Filters Help Scientists Produce First UK Wildlife Survey Using eDNA](https://soylentnews.org/article.pl?sid=25/08/17/0238238&amp;from=rss)
* [2025-08-17, 12:21:00](https://soylentnews.org/article.pl?sid=25/08/17/0227231&amp;from=rss) - [Massive Magnets Are on the Move: Repurposing Electromagnets for Research](https://soylentnews.org/article.pl?sid=25/08/17/0227231&amp;from=rss)
* [2025-08-17, 07:34:00](https://soylentnews.org/article.pl?sid=25/08/16/1255244&amp;from=rss) - [People Reoccupied Pompeii After Vesuvius Eruption, Archaeologists Find](https://soylentnews.org/article.pl?sid=25/08/16/1255244&amp;from=rss)
* [2025-08-17, 02:47:00](https://soylentnews.org/article.pl?sid=25/08/16/0019213&amp;from=rss) - [Bill Gates Declares the End of the Smartphone Era and Unveils Its Surprising Replacement](https://soylentnews.org/article.pl?sid=25/08/16/0019213&amp;from=rss)
* [2025-08-16, 22:07:00](https://soylentnews.org/article.pl?sid=25/08/16/008232&amp;from=rss) - [Americans Who ‘Learned To Code’ At Obama’s Behest Can’t Find Jobs Now](https://soylentnews.org/article.pl?sid=25/08/16/008232&amp;from=rss)
* [2025-08-16, 17:23:00](https://soylentnews.org/article.pl?sid=25/08/15/2243238&amp;from=rss) - [On its Fifth Try, SpaceX Manages Launch of Competitor Amazon&apos;s Satellites](https://soylentnews.org/article.pl?sid=25/08/15/2243238&amp;from=rss)
* [2025-08-16, 12:34:00](https://soylentnews.org/politics/article.pl?sid=25/08/15/1324240&amp;from=rss) - [Trump Administration Considering US Government Purchase of Stake in Intel](https://soylentnews.org/politics/article.pl?sid=25/08/15/1324240&amp;from=rss)
* [2025-08-16, 11:41:02](https://news.ycombinator.com/item?id=44922362) - [How Figma’s multiplayer technology works (2019)](https://www.figma.com/blog/how-figmas-multiplayer-technology-works/)
* [2025-08-16, 07:49:51](https://news.ycombinator.com/item?id=44921195) - [Candle Flame Oscillations as a Clock](https://cpldcpu.com/2025/08/13/candle-flame-oscillations-as-a-clock/)
* [2025-08-16, 07:48:00](https://soylentnews.org/article.pl?sid=25/08/15/1320204&amp;from=rss) - [In Trial, People Lost Twice as Much Weight by Ditching Ultraprocessed Food](https://soylentnews.org/article.pl?sid=25/08/15/1320204&amp;from=rss)
* [2025-08-16, 03:07:00](https://soylentnews.org/article.pl?sid=25/08/15/1316257&amp;from=rss) - [Many Countries Banned From Using PayPal for Steam Games in Latest Payment Processor Drama](https://soylentnews.org/article.pl?sid=25/08/15/1316257&amp;from=rss)
