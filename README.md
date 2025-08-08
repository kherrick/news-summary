# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Advanced Technology

* [GPT-5 vs. Sonnet: Complex Agentic Coding](https://elite-ai-assisted-coding.dev/p/copilot-agentic-coding-gpt-5-vs-claude-4-sonnet) ([comments](https://news.ycombinator.com/item?id=44838303))

* [AI must RTFM: Why tech writers are becoming context curators](https://passo.uno/from-tech-writers-to-ai-context-curators/) ([comments](https://news.ycombinator.com/item?id=44837875))

* [Introducing Wassette: WebAssembly-based tools for AI agents](https://opensource.microsoft.com/blog/2025/08/06/introducing-wassette-webassembly-based-tools-for-ai-agents/) ([comments](https://lobste.rs/s/uzvf6k/introducing_wassette_webassembly_based))

* [How Attention Sinks Keep Language Models Stable](https://hanlab.mit.edu/blog/streamingllm) ([comments](https://news.ycombinator.com/item?id=44834918))

## Cybersecurity and Digital Privacy

* [UK Secretly Allows Facial Recognition Scans of Passport, Immigration Databases](https://news.slashdot.org/story/25/08/08/1458253/uk-secretly-allows-facial-recognition-scans-of-passport-immigration-databases?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.slashdot.org/story/25/08/08/1458253/uk-secretly-allows-facial-recognition-scans-of-passport-immigration-databases?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Ubuntu Replacing wget With wcurl](https://soylentnews.org/article.pl?sid=25/08/07/0255247&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/08/07/0255247&amp;from=rss))

* [Abusing Ubuntu 24.04 features for root privilege escalation (2024)](https://labs.snyk.io/resources/abusing-ubuntu-root-privilege-escalation/) ([comments](https://lobste.rs/s/q5bgc5/abusing_ubuntu_24_04_features_for_root))

* [Hiding Secret Codes in Light Can Protect Against Fake Videos](https://soylentnews.org/article.pl?sid=25/08/07/0248239&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/08/07/0248239&amp;from=rss))

## Programming and Technology Trends

* [Programming as Extended Cognition](https://ieeexplore.ieee.org/document/11119124) ([comments](https://lobste.rs/s/fswjtl/programming_as_extended_cognition))

* [HTTP is not simple](https://daniel.haxx.se/blog/2025/08/08/http-is-not-simple/) ([comments](https://lobste.rs/s/qllaru/http_is_not_simple))

* [HorizonDB, a geocoding engine in Rust that replaces Elasticsearch](https://radar.com/blog/high-performance-geocoding-in-rust) ([comments](https://news.ycombinator.com/item?id=44836463))

* [Show HN: Synchrotron, a real-time DSP engine in pure Python](https://synchrotron.thatother.dev/) ([comments](https://news.ycombinator.com/item?id=44836433))

## Science and Space

* [Astronomy Photographer of the Year 2025 shortlist](https://www.rmg.co.uk/whats-on/astronomy-photographer-year/galleries/2025-shortlist) ([comments](https://news.ycombinator.com/item?id=44837434))

* [China Solves 'Tunnel Boom' Problem With Maglev Trains](https://tech.slashdot.org/story/25/08/08/0045208/china-solves-tunnel-boom-problem-with-maglev-trains?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://tech.slashdot.org/story/25/08/08/0045208/china-solves-tunnel-boom-problem-with-maglev-trains?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Ultrathin business card runs a fluid simulation](https://github.com/Nicholas-L-Johnson/flip-card) ([comments](https://news.ycombinator.com/item?id=44835879))

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

* [2025-08-08, 15:38:48](https://news.ycombinator.com/item?id=44838303) - [GPT-5 vs. Sonnet: Complex Agentic Coding](https://elite-ai-assisted-coding.dev/p/copilot-agentic-coding-gpt-5-vs-claude-4-sonnet)
* [2025-08-08, 15:21:00](https://news.slashdot.org/story/25/08/08/1458253/uk-secretly-allows-facial-recognition-scans-of-passport-immigration-databases?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Secretly Allows Facial Recognition Scans of Passport, Immigration Databases](https://news.slashdot.org/story/25/08/08/1458253/uk-secretly-allows-facial-recognition-scans-of-passport-immigration-databases?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 15:04:40](https://news.ycombinator.com/item?id=44837875) - [AI must RTFM: Why tech writers are becoming context curators](https://passo.uno/from-tech-writers-to-ai-context-curators/)
* [2025-08-08, 15:00:28](https://lobste.rs/s/fswjtl/programming_as_extended_cognition) - [Programming as Extended Cognition](https://ieeexplore.ieee.org/document/11119124)
* [2025-08-08, 14:57:06](https://news.ycombinator.com/item?id=44837783) - [AI is impressive because we&apos;ve failed at personal computing](https://rakhim.exotext.com/ai-is-impressive-because-we-ve-failed-at-semantic-web-and-personal-computing)
* [2025-08-08, 14:40:00](https://news.slashdot.org/story/25/08/08/0738258/loyalty-programs-are-keeping-americas-airlines-aloft?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Loyalty Programs Are Keeping America&apos;s Airlines Aloft](https://news.slashdot.org/story/25/08/08/0738258/loyalty-programs-are-keeping-americas-airlines-aloft?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 14:29:54](https://news.ycombinator.com/item?id=44837434) - [Astronomy Photographer of the Year 2025 shortlist](https://www.rmg.co.uk/whats-on/astronomy-photographer-year/galleries/2025-shortlist)
* [2025-08-08, 14:05:00](https://soylentnews.org/article.pl?sid=25/08/07/0255247&amp;from=rss) - [Ubuntu Replacing wget With wcurl](https://soylentnews.org/article.pl?sid=25/08/07/0255247&amp;from=rss)
* [2025-08-08, 14:00:00](https://news.slashdot.org/story/25/08/08/0721242/intel-ceo-hits-out-at-misinformation-after-us-president-calls-on-him-to-resign?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel CEO Hits Out at &apos;Misinformation&apos; After US President Calls on Him To Resign](https://news.slashdot.org/story/25/08/08/0721242/intel-ceo-hits-out-at-misinformation-after-us-president-calls-on-him-to-resign?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 13:58:25](https://lobste.rs/s/stxzc8/updated_google_project_zero_disclosure) - [Updated Google Project Zero disclosure policy](https://googleprojectzero.blogspot.com/2025/07/reporting-transparency.html)
* [2025-08-08, 13:52:49](https://news.ycombinator.com/item?id=44836972) - [What Does Consulting Do?](https://www.nber.org/papers/w34072)
* [2025-08-08, 13:45:57](https://news.ycombinator.com/item?id=44836879) - [Getting Good Results from Claude Code](https://www.dzombak.com/blog/2025/08/getting-good-results-from-claude-code/)
* [2025-08-08, 13:36:25](https://lobste.rs/s/gk3luv/how_long_does_it_take_upgrade_ebook) - [How long does it take to upgrade an eBook?](https://shkspr.mobi/blog/2025/08/how-long-does-it-take-to-upgrade-an-ebook/)
* [2025-08-08, 13:26:01](https://news.ycombinator.com/item?id=44836675) - [The Rise of Ritual Features: Why Platforms Are Adding Daily Puzzle Games](https://productpickle.online/2025/07/20/ritual-features-the-quiet-strategy-behind-daily-puzzle-games-on-linkedin-and-beyond/)
* [2025-08-08, 13:00:00](https://science.slashdot.org/story/25/08/08/0055250/mistakenly-sold-nasa-command-trailer-goes-on-sale?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mistakenly Sold NASA Command Trailer Goes On Sale](https://science.slashdot.org/story/25/08/08/0055250/mistakenly-sold-nasa-command-trailer-goes-on-sale?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 12:59:03](https://lobste.rs/s/qllaru/http_is_not_simple) - [HTTP is not simple](https://daniel.haxx.se/blog/2025/08/08/http-is-not-simple/)
* [2025-08-08, 12:57:50](https://news.ycombinator.com/item?id=44836463) - [HorizonDB, a geocoding engine in Rust that replaces Elasticsearch](https://radar.com/blog/high-performance-geocoding-in-rust)
* [2025-08-08, 12:54:23](https://news.ycombinator.com/item?id=44836433) - [Show HN: Synchrotron, a real-time DSP engine in pure Python](https://synchrotron.thatother.dev/)
* [2025-08-08, 12:27:56](https://news.ycombinator.com/item?id=44836219) - [Food, housing, &amp; health care costs are a source of major stress for many people](https://apnorc.org/projects/food-housing-and-health-care-costs-are-a-source-of-major-stress-for-many-people/)
* [2025-08-08, 12:02:21](https://lobste.rs/s/uzvf6k/introducing_wassette_webassembly_based) - [Introducing Wassette: WebAssembly-based tools for AI agents](https://opensource.microsoft.com/blog/2025/08/06/introducing-wassette-webassembly-based-tools-for-ai-agents/)
* [2025-08-08, 11:41:04](https://news.ycombinator.com/item?id=44835879) - [Ultrathin business card runs a fluid simulation](https://github.com/Nicholas-L-Johnson/flip-card)
* [2025-08-08, 10:43:07](https://lobste.rs/s/ziaooy/ios_client_for_proton_authenticator) - [iOS client for Proton Authenticator](https://github.com/protonpass/ios-authenticator)
* [2025-08-08, 10:34:34](https://lobste.rs/s/xqcpmc/understanding_not_just_clojure_s_comp) - [Understanding not just Clojure&apos;s comp function by re-implementing it](https://www.evalapply.org/posts/lessons-from-reimplementing-clojure-comp-function/index.html)
* [2025-08-08, 10:00:00](https://tech.slashdot.org/story/25/08/07/2125251/thinkpad-designer-david-hill-spills-secrets-designs-that-never-made-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ThinkPad Designer David Hill Spills Secrets, Designs That Never Made It](https://tech.slashdot.org/story/25/08/07/2125251/thinkpad-designer-david-hill-spills-secrets-designs-that-never-made-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 09:34:16](https://lobste.rs/s/q5bgc5/abusing_ubuntu_24_04_features_for_root) - [Abusing Ubuntu 24.04 features for root privilege escalation (2024)](https://labs.snyk.io/resources/abusing-ubuntu-root-privilege-escalation/)
* [2025-08-08, 09:22:00](https://soylentnews.org/article.pl?sid=25/08/07/0248239&amp;from=rss) - [Hiding Secret Codes in Light Can Protect Against Fake Videos](https://soylentnews.org/article.pl?sid=25/08/07/0248239&amp;from=rss)
* [2025-08-08, 09:17:19](https://lobste.rs/s/o2zxif/oops_safari_i_think_you_spilled_something) - [Oops Safari, I think You Spilled Something](https://blog.exodusintel.com/2025/08/04/oops-safari-i-think-you-spilled-something/)
* [2025-08-08, 08:53:10](https://news.ycombinator.com/item?id=44834918) - [How Attention Sinks Keep Language Models Stable](https://hanlab.mit.edu/blog/streamingllm)
* [2025-08-08, 08:46:10](https://lobste.rs/s/s7wj5y/how_i_ended_up_writing_gleam_for_living) - [How I ended up writing Gleam for a living](https://www.youtube.com/watch?v=BfPRcanTWXA)
* [2025-08-08, 08:31:14](https://lobste.rs/s/qr1kro/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/qr1kro/what_are_you_doing_this_weekend)
* [2025-08-08, 07:06:22](https://lobste.rs/s/cn7crr/writing_surtoget_no_with_gleam) - [Writing surtoget.no with gleam](https://lindbakk.com/blog/introducing-surtoget_no)
* [2025-08-08, 07:00:00](https://tech.slashdot.org/story/25/08/08/0045208/china-solves-tunnel-boom-problem-with-maglev-trains?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Solves &apos;Tunnel Boom&apos; Problem With Maglev Trains](https://tech.slashdot.org/story/25/08/08/0045208/china-solves-tunnel-boom-problem-with-maglev-trains?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 06:55:32](https://lobste.rs/s/zxppfh/all_cool_kids_are_doing_it) - [All the cool kids are doing it](https://www.scattered-thoughts.net/writing/all-the-cool-kids-are-doing-it/)
* [2025-08-08, 05:48:49](https://lobste.rs/s/4cslil/full_chain_exploit_unfused_qualcomm) - [A Full-Chain Exploit of an Unfused Qualcomm Device](https://hhj4ck.github.io/qualcomm/2025/08/06/secboot-off-qcm2150.html)
* [2025-08-08, 05:45:42](https://news.ycombinator.com/item?id=44833834) - [Linear sent me down a local-first rabbit hole](https://bytemash.net/posts/i-went-down-the-linear-rabbit-hole/)
* [2025-08-08, 05:39:34](https://lobste.rs/s/lzladd/arenas_rust) - [Arenas in Rust](https://russellw.github.io/arenas)
* [2025-08-08, 04:35:00](https://soylentnews.org/article.pl?sid=25/08/06/235236&amp;from=rss) - [China&apos;s Solar Giants Quietly Shed a Third of Their Workforces Last Year](https://soylentnews.org/article.pl?sid=25/08/06/235236&amp;from=rss)
* [2025-08-08, 03:30:00](https://hardware.slashdot.org/story/25/08/08/0031253/first-ever-reviews-of-mario-and-zelda?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [First Ever Reviews of Mario and Zelda](https://hardware.slashdot.org/story/25/08/08/0031253/first-ever-reviews-of-mario-and-zelda?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 00:50:00](https://news.slashdot.org/story/25/08/08/0021259/the-backlash-against-duolingo-going-ai-first-didnt-even-matter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Backlash Against Duolingo Going &apos;AI-First&apos; Didn&apos;t Even Matter](https://news.slashdot.org/story/25/08/08/0021259/the-backlash-against-duolingo-going-ai-first-didnt-even-matter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-07, 23:52:00](https://soylentnews.org/article.pl?sid=25/08/06/1435231&amp;from=rss) - [OpenAI Announces Two “gpt-oss” Open AI Models, and You Can Download Them Today](https://soylentnews.org/article.pl?sid=25/08/06/1435231&amp;from=rss)
* [2025-08-07, 23:30:00](https://mobile.slashdot.org/story/25/08/07/2144256/sony-says-its-xperia-smartphones-are-still-very-important?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sony Says Its Xperia Smartphones Are Still &apos;Very Important&apos;](https://mobile.slashdot.org/story/25/08/07/2144256/sony-says-its-xperia-smartphones-are-still-very-important?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-07, 22:50:00](https://yro.slashdot.org/story/25/08/07/2137222/amazons-cloud-business-giving-federal-agencies-up-to-1-billion-in-discounts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon&apos;s Cloud Business Giving Federal Agencies Up To $1 Billion In Discounts](https://yro.slashdot.org/story/25/08/07/2137222/amazons-cloud-business-giving-federal-agencies-up-to-1-billion-in-discounts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-07, 22:45:53](https://lobste.rs/s/nsk2vc/mac_history_echoes_current_mac_operating) - [Mac history echoes in current Mac operating systems](http://tenfourfox.blogspot.com/2025/08/mac-history-echoes-in-mac-operating.html)
* [2025-08-07, 22:10:00](https://it.slashdot.org/story/25/08/07/217234/encryption-made-for-police-and-military-radios-may-be-easily-cracked?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Encryption Made For Police and Military Radios May Be Easily Cracked](https://it.slashdot.org/story/25/08/07/217234/encryption-made-for-police-and-military-radios-may-be-easily-cracked?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-07, 21:30:00](https://entertainment.slashdot.org/story/25/08/07/2031259/hbo-max-password-sharing-crackdown-will-get-aggressive-next-month?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [HBO Max Password Sharing Crackdown Will Get &apos;Aggressive&apos; Next Month](https://entertainment.slashdot.org/story/25/08/07/2031259/hbo-max-password-sharing-crackdown-will-get-aggressive-next-month?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-07, 21:10:42](https://news.ycombinator.com/item?id=44830408) - [Flipper Zero dark web firmware bypasses rolling code security](https://www.rtl-sdr.com/flipperzero-darkweb-firmware-bypasses-rolling-code-security/)
* [2025-08-07, 20:53:54](https://news.ycombinator.com/item?id=44830221) - [Cursor CLI](https://cursor.com/cli)
* [2025-08-07, 20:50:00](https://linux.slashdot.org/story/25/08/07/2018225/linux-desktop-share-tops-6-in-15-million-system-analysis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux Desktop Share Tops 6% In 15 Million-System Analysis](https://linux.slashdot.org/story/25/08/07/2018225/linux-desktop-share-tops-6-in-15-million-system-analysis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-07, 20:11:00](https://slashdot.org/story/25/08/07/2010210/trump-signs-executive-order-opening-401k-retirement-market-to-crypto-investments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Signs Executive Order Opening 401(k) Retirement Market To Crypto Investments](https://slashdot.org/story/25/08/07/2010210/trump-signs-executive-order-opening-401k-retirement-market-to-crypto-investments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-07, 19:54:17](https://lobste.rs/s/tiiesw/who_s_hiring_q3_2025) - [Who&apos;s Hiring? Q3 2025](https://lobste.rs/s/tiiesw/who_s_hiring_q3_2025)
* [2025-08-07, 19:40:31](https://lobste.rs/s/m9dmt8/komodo_my_first_kde_app) - [KomoDo, my first KDE app](https://akselmo.dev/posts/komodo-my-first-kde-app/)
* [2025-08-07, 19:24:49](https://news.ycombinator.com/item?id=44829185) - [Historical Tech Tree](https://www.historicaltechtree.com/)
* [2025-08-07, 19:07:00](https://soylentnews.org/article.pl?sid=25/08/06/1129217&amp;from=rss) - [U.S. Semiconductor Design Company Fined $140 Million Over China Dealings](https://soylentnews.org/article.pl?sid=25/08/06/1129217&amp;from=rss)
* [2025-08-07, 19:00:00](https://it.slashdot.org/story/25/08/07/190249/microsofts-30-windows-10-security-updates-cover-10-devices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft&apos;s $30 Windows 10 Security Updates Cover 10 Devices](https://it.slashdot.org/story/25/08/07/190249/microsofts-30-windows-10-security-updates-cover-10-devices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-07, 18:59:46](https://news.ycombinator.com/item?id=44828884) - [OpenAI&apos;s new open-source model is basically Phi-5](https://www.seangoedecke.com/gpt-oss-is-phi-5/)
* [2025-08-07, 18:41:34](https://lobste.rs/s/vn29xx/gpt_5_is_here) - [GPT-5 is here](https://openai.com/gpt-5/)
* [2025-08-07, 18:06:50](https://news.ycombinator.com/item?id=44828158) - [Exit Tax: Leave Germany before your business gets big](https://eidel.io/exit-tax-leave-germany-before-your-business-gets-big/)
* [2025-08-07, 17:46:18](https://news.ycombinator.com/item?id=44827794) - [GPT-5: Key characteristics, pricing and system card](https://simonwillison.net/2025/Aug/7/gpt-5/)
* [2025-08-07, 17:06:39](https://news.ycombinator.com/item?id=44827101) - [GPT-5 for Developers](https://openai.com/index/introducing-gpt-5-for-developers)
* [2025-08-07, 17:00:21](https://news.ycombinator.com/item?id=44826997) - [GPT-5](https://openai.com/gpt-5/)
* [2025-08-07, 16:01:12](https://lobste.rs/s/jeg0io/more_shell_tricks_first_class_lists_jq_es) - [More shell tricks: first class lists, jq, and the es shell](https://alurm.github.io/blog/2025-08-07-first-class-lists-in-shells.html)
* [2025-08-07, 14:49:32](https://news.ycombinator.com/item?id=44825221) - [Show HN: Trayce – “Burp Suite for developers”](https://trayce.dev?resubmit=hn)
* [2025-08-07, 14:44:39](https://lobste.rs/s/lofllu/jepsen_capela_dda5892) - [Jepsen: Capela dda5892](https://jepsen.io/analyses/capela-dda5892)
* [2025-08-07, 14:22:00](https://soylentnews.org/article.pl?sid=25/08/06/1123237&amp;from=rss) - [AWS Deleted a 10-Year Account and All Data Without Warning](https://soylentnews.org/article.pl?sid=25/08/06/1123237&amp;from=rss)
* [2025-08-07, 14:20:43](https://lobste.rs/s/2t4kwx/asahi_linux_progress_report_linux_6_16) - [Asahi Linux Progress Report: Linux 6.16](https://asahilinux.org/2025/08/progress-report-6-16/)
* [2025-08-07, 13:22:48](https://lobste.rs/s/hcvcd9/we_replaced_passwords_with_something) - [We replaced passwords with something worse](https://blog.danielh.cc/blog/passwords)
* [2025-08-07, 11:27:31](https://lobste.rs/s/lxvgky/announcing_rust_1_89_0) - [Announcing Rust 1.89.0](https://blog.rust-lang.org/2025/08/07/Rust-1.89.0/)
* [2025-08-07, 09:33:00](https://soylentnews.org/article.pl?sid=25/08/05/1550247&amp;from=rss) - [Underwater Robot Draws in Millions of Viewers](https://soylentnews.org/article.pl?sid=25/08/05/1550247&amp;from=rss)
* [2025-08-07, 04:51:00](https://soylentnews.org/article.pl?sid=25/08/05/151223&amp;from=rss) - [Infrared Contact Lens Helps People See in the Dark, Even With Their Eyes Closed](https://soylentnews.org/article.pl?sid=25/08/05/151223&amp;from=rss)
* [2025-08-07, 00:07:00](https://soylentnews.org/article.pl?sid=25/08/05/1452205&amp;from=rss) - [Plague: A Newly Discovered PAM-Based Backdoor for Linux](https://soylentnews.org/article.pl?sid=25/08/05/1452205&amp;from=rss)
* [2025-08-06, 19:41:50](https://lobste.rs/s/xoyolt/litestar_is_worth_look) - [Litestar is worth a look](https://www.b-list.org/weblog/2025/aug/06/litestar/)
* [2025-08-06, 19:20:00](https://soylentnews.org/article.pl?sid=25/08/05/1446223&amp;from=rss) - [Russian Volcano Erupts for First Time in Centuries](https://soylentnews.org/article.pl?sid=25/08/05/1446223&amp;from=rss)
* [2025-08-06, 14:37:00](https://soylentnews.org/article.pl?sid=25/08/05/1441236&amp;from=rss) - [Inspired by Astronauts, Researchers Use High-Tech Pants to Uncover Heart Issues on MRI](https://soylentnews.org/article.pl?sid=25/08/05/1441236&amp;from=rss)
* [2025-08-06, 09:58:00](https://soylentnews.org/article.pl?sid=25/08/05/1150228&amp;from=rss) - [Space&apos;s Spinning Enigma: A ‘Unicorn’ Object Defies Astrophysics](https://soylentnews.org/article.pl?sid=25/08/05/1150228&amp;from=rss)
* [2025-08-06, 05:08:00](https://soylentnews.org/article.pl?sid=25/08/05/0156215&amp;from=rss) - [AI and the Democratization of Cybercrime](https://soylentnews.org/article.pl?sid=25/08/05/0156215&amp;from=rss)
* [2025-08-06, 00:25:00](https://soylentnews.org/article.pl?sid=25/08/05/0152249&amp;from=rss) - [Christiaan Huygens and the Scientific Secrets of Saturn](https://soylentnews.org/article.pl?sid=25/08/05/0152249&amp;from=rss)
* [2025-08-05, 19:40:00](https://soylentnews.org/article.pl?sid=25/08/04/0644251&amp;from=rss) - [ChatGPT Users Shocked to Learn Their Chats Were in Google Search Results](https://soylentnews.org/article.pl?sid=25/08/04/0644251&amp;from=rss)
* [2025-08-05, 14:54:00](https://soylentnews.org/article.pl?sid=25/08/03/2140229&amp;from=rss) - [China Forms AI Alliances To Cut U.S. Tech Reliance](https://soylentnews.org/article.pl?sid=25/08/03/2140229&amp;from=rss)
* [2025-08-05, 10:03:00](https://soylentnews.org/article.pl?sid=25/08/03/2136209&amp;from=rss) - [Solid-State Batteries Charge in 3 Minutes:  Why Aren&apos;t They in Your Phones and Cars Yet?](https://soylentnews.org/article.pl?sid=25/08/03/2136209&amp;from=rss)
* [2025-08-05, 05:22:00](https://soylentnews.org/article.pl?sid=25/08/03/0242234&amp;from=rss) - [Ousted Vaccine Panel Members Say Rigorous Science is Being Abandoned](https://soylentnews.org/article.pl?sid=25/08/03/0242234&amp;from=rss)
* [2025-08-05, 00:40:00](https://soylentnews.org/article.pl?sid=25/08/03/0225206&amp;from=rss) - [World News: United Nations Report Finds UN Reports Aren’t Widely Read](https://soylentnews.org/article.pl?sid=25/08/03/0225206&amp;from=rss)
* [2025-08-04, 22:14:02](https://news.ycombinator.com/item?id=44791923) - [FLUX.1-Krea and the Rise of Opinionated Models](https://www.dbreunig.com/2025/08/04/the-rise-of-opinionated-models.html)
* [2025-08-04, 20:00:00](https://soylentnews.org/article.pl?sid=25/08/03/0219201&amp;from=rss) - [Brain Scans Reveal Parahippocampal Cortex Thinning in Those with Depression and Neuroticism](https://soylentnews.org/article.pl?sid=25/08/03/0219201&amp;from=rss)
* [2025-08-04, 19:21:25](https://news.ycombinator.com/item?id=44790282) - [Show HN: Aha Domain Search](https://www.ahadomainsearch.com/)
* [2025-08-04, 17:50:36](https://news.ycombinator.com/item?id=44789202) - [Telefon Hírmondó: Listen to news and music electronically, in 1893](https://en.wikipedia.org/wiki/Telefon_H%C3%ADrmond%C3%B3)
* [2025-08-04, 17:31:54](https://news.ycombinator.com/item?id=44788972) - [Apple&apos;s history is hiding in a Mac font](https://www.spacebar.news/apple-history-hiding-in-mac-font/)
* [2025-08-04, 15:15:00](https://soylentnews.org/article.pl?sid=25/08/03/026228&amp;from=rss) - [Clouds, Sub Cables, Report No Impact From Monster Quake](https://soylentnews.org/article.pl?sid=25/08/03/026228&amp;from=rss)
* [2025-08-04, 14:46:28](https://news.ycombinator.com/item?id=44786553) - [Complex Iterators Are Slow](https://caolan.uk/notes/2025-07-31_complex_iterators_are_slow.cm)
* [2025-08-04, 12:55:52](https://news.ycombinator.com/item?id=44785144) - [What Is Popover=Hint?](https://una.im/popover-hint/)
* [2025-08-04, 12:03:24](https://news.ycombinator.com/item?id=44784685) - [Window Activation](https://blog.broulik.de/2025/08/on-window-activation/)
* [2025-08-04, 11:51:00](https://news.ycombinator.com/item?id=44784570) - [Virtual Linux Devices on ARM64](https://underjord.io/500-virtual-linux-devices-on-arm64.html)
* [2025-08-04, 10:33:00](https://soylentnews.org/article.pl?sid=25/08/02/2149227&amp;from=rss) - [Coffee Prices Rise as U.S. Imposes Tariffs on Top Exporter Brazil](https://soylentnews.org/article.pl?sid=25/08/02/2149227&amp;from=rss)
* [2025-08-04, 05:47:00](https://soylentnews.org/article.pl?sid=25/08/02/2145230&amp;from=rss) - [Kali Linux Can Now Run in Apple Containers on macOS Systems](https://soylentnews.org/article.pl?sid=25/08/02/2145230&amp;from=rss)
* [2025-08-04, 01:02:00](https://soylentnews.org/article.pl?sid=25/08/02/1318209&amp;from=rss) - [Subliminal Learning: Language Models Transmit Behavioral Traits Via Hidden Signals in Data](https://soylentnews.org/article.pl?sid=25/08/02/1318209&amp;from=rss)
