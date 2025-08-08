# [News Summary](https://kherrick.github.io/news-summary/)

## Cybersecurity and Exploit Developments

* [Abusing Ubuntu 24.04 features for root privilege escalation](https://labs.snyk.io/resources/abusing-ubuntu-root-privilege-escalation/) - Highlights a vulnerability in Ubuntu 24.04 that allows root privilege escalation, raising concerns about Linux security. [Comments](https://lobste.rs/s/q5bgc5/abusing_ubuntu_24_04_features_for_root)

* [A Full-Chain Exploit of an Unfused Qualcomm Device](https://hhj4ck.github.io/qualcomm/2025/08/06/secboot-off-qcm2150.html) - Details a comprehensive exploit of Qualcomm devices that bypasses security measures. [Comments](https://lobste.rs/s/4cslil/full_chain_exploit_unfused_qualcomm)

* [Plague: A Newly Discovered PAM-Based Backdoor for Linux](https://soylentnews.org/article.pl?sid=25/08/05/1452205&amp;from=rss) - Discusses the discovery of a backdoor targeting Linux, emphasizing the risks of misused PAM configurations. [Comments](https://soylentnews.org/article.pl?sid=25/08/05/1452205&amp;from=rss)

* [Encryption Made For Police and Military Radios May Be Easily Cracked](https://www.wired.com/story/encryption-made-for-police-and-military-radios-may-be-easily-cracked-researchers-find/) - Reveals vulnerabilities in encryption systems designed for law enforcement and military communication. [Comments](https://news.ycombinator.com/item?id=44828504)

## Artificial Intelligence Updates and Insights

* [Benchmarking GPT-5 on 400 real-world code reviews](https://www.qodo.ai/blog/benchmarking-gpt-5-on-real-world-code-reviews-with-the-pr-benchmark/) - Examines GPT-5’s performance on complex code review tasks, exploring its potential for software development. [Comments](https://news.ycombinator.com/item?id=44833929)

* [GPT-5 leaked system prompt](https://gist.github.com/maoxiaoke/f6d5b28f9104cd856a2622a084f46fd7) - An intriguing look into the leaked system prompt of GPT-5, offering insights into its internal workings. [Comments](https://lobste.rs/s/lv2ijd/gpt_5_leaked_system_prompt)

* [OpenAI's new open-source model is basically Phi-5](https://www.seangoedecke.com/gpt-oss-is-phi-5/) - Comments on OpenAI's latest move towards openness with its new Phi-5-derived model. [Comments](https://news.ycombinator.com/item?id=44828884)

* [Claude Code IDE integration for Emacs](https://github.com/manzaltu/claude-code-ide.el) - Introduction of Claude Code IDE's support in Emacs, combining AI capabilities with a powerful text editor. [Comments](https://news.ycombinator.com/item?id=44811567)

## Programming and Development

* [How I ended up writing Gleam for a living](https://www.youtube.com/watch?v=BfPRcanTWXA) - A developer shares their journey into building and working full-time with the Gleam language. [Comments](https://lobste.rs/s/s7wj5y/how_i_ended_up_writing_gleam_for_living)

* [Arenas in Rust](https://russellw.github.io/arenas) - Deep dive into memory management in Rust using arena allocation techniques. [Comments](https://lobste.rs/s/lzladd/arenas_rust)

* [Announcing Rust 1.89.0](https://blog.rust-lang.org/2025/08/07/Rust-1.89.0/) - Announcement of the latest updates and enhancements in the Rust programming language. [Comments](https://lobste.rs/s/lxvgky/announcing_rust_1_89_0)

* [More shell tricks: first class lists, jq, and the es shell](https://alurm.github.io/blog/2025-08-07-first-class-lists-in-shells.html) - Explores advanced shell scripting techniques for developers. [Comments](https://lobste.rs/s/jeg0io/more_shell_tricks_first_class_lists_jq_es)

## Technology and Industry Trends

* [Hiding Secret Codes in Light Can Protect Against Fake Videos](https://soylentnews.org/article.pl?sid=25/08/07/0248239&amp;from=rss) - Discusses the use of secret codes embedded in light to counteract deepfake videos. [Comments](https://soylentnews.org/article.pl?sid=25/08/07/0248239&amp;from=rss)

* [China Solves 'Tunnel Boom' Problem With Maglev Trains](https://tech.slashdot.org/story/25/08/08/0045208/china-solves-tunnel-boom-problem-with-maglev-trains?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - China's innovative solution to noise pollution issues in tunnels created by high-speed trains. [Comments](https://tech.slashdot.org/story/25/08/08/0045208/china-solves-tunnel-boom-problem-with-maglev-trains?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Digital Foundry, the Most Trusted Name in Game Console Analysis, is Going Independent](https://games.slashdot.org/story/25/08/07/1530229/digital-foundry-the-most-trusted-name-in-game-console-analysis-is-going-independent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Analysis of a prominent gaming outlet's transition to independence. [Comments](https://games.slashdot.org/story/25/08/07/1530229/digital-foundry-the-most-trusted-name-in-game-console-analysis-is-going-independent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [AWS Deleted a 10-Year Account and All Data Without Warning](https://soylentnews.org/article.pl?sid=25/08/06/1123237&amp;from=rss) - Shocking report of AWS obliterating long-standing client data with minimal notification. [Comments](https://soylentnews.org/article.pl?sid=25/08/06/1123237&amp;from=rss)

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

* [2025-08-08, 09:34:16](https://lobste.rs/s/q5bgc5/abusing_ubuntu_24_04_features_for_root) - [Abusing Ubuntu 24.04 features for root privilege escalation](https://labs.snyk.io/resources/abusing-ubuntu-root-privilege-escalation/)
* [2025-08-08, 09:22:00](https://soylentnews.org/article.pl?sid=25/08/07/0248239&amp;from=rss) - [Hiding Secret Codes in Light Can Protect Against Fake Videos](https://soylentnews.org/article.pl?sid=25/08/07/0248239&amp;from=rss)
* [2025-08-08, 09:17:19](https://lobste.rs/s/o2zxif/oops_safari_i_think_you_spilled_something) - [Oops Safari, I think You Spilled Something](https://blog.exodusintel.com/2025/08/04/oops-safari-i-think-you-spilled-something/)
* [2025-08-08, 08:46:10](https://lobste.rs/s/s7wj5y/how_i_ended_up_writing_gleam_for_living) - [How I ended up writing Gleam for a living](https://www.youtube.com/watch?v=BfPRcanTWXA)
* [2025-08-08, 07:06:22](https://lobste.rs/s/cn7crr/writing_surtoget_no_with_gleam) - [Writing surtoget.no with gleam](https://lindbakk.com/blog/introducing-surtoget_no)
* [2025-08-08, 07:00:00](https://tech.slashdot.org/story/25/08/08/0045208/china-solves-tunnel-boom-problem-with-maglev-trains?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Solves &apos;Tunnel Boom&apos; Problem With Maglev Trains](https://tech.slashdot.org/story/25/08/08/0045208/china-solves-tunnel-boom-problem-with-maglev-trains?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 06:55:32](https://lobste.rs/s/zxppfh/all_cool_kids_are_doing_it) - [All the cool kids are doing it](https://www.scattered-thoughts.net/writing/all-the-cool-kids-are-doing-it/)
* [2025-08-08, 06:01:30](https://news.ycombinator.com/item?id=44833932) - [A love letter to my future employer (2020)](https://catzkorn.dev/blog/love-letter/)
* [2025-08-08, 06:00:22](https://news.ycombinator.com/item?id=44833929) - [Benchmarking GPT-5 on 400 real-world code reviews](https://www.qodo.ai/blog/benchmarking-gpt-5-on-real-world-code-reviews-with-the-pr-benchmark/)
* [2025-08-08, 05:48:49](https://lobste.rs/s/4cslil/full_chain_exploit_unfused_qualcomm) - [A Full-Chain Exploit of an Unfused Qualcomm Device](https://hhj4ck.github.io/qualcomm/2025/08/06/secboot-off-qcm2150.html)
* [2025-08-08, 05:45:42](https://news.ycombinator.com/item?id=44833834) - [Linear sent me down a local-first rabbit hole](https://bytemash.net/posts/i-went-down-the-linear-rabbit-hole/)
* [2025-08-08, 05:40:34](https://lobste.rs/s/lv2ijd/gpt_5_leaked_system_prompt) - [GPT-5 leaked system prompt](https://gist.github.com/maoxiaoke/f6d5b28f9104cd856a2622a084f46fd7)
* [2025-08-08, 05:39:34](https://lobste.rs/s/lzladd/arenas_rust) - [Arenas in Rust](https://russellw.github.io/arenas)
* [2025-08-08, 04:35:00](https://soylentnews.org/article.pl?sid=25/08/06/235236&amp;from=rss) - [China&apos;s Solar Giants Quietly Shed a Third of Their Workforces Last Year](https://soylentnews.org/article.pl?sid=25/08/06/235236&amp;from=rss)
* [2025-08-08, 03:30:00](https://hardware.slashdot.org/story/25/08/08/0031253/first-ever-reviews-of-mario-and-zelda?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [First Ever Reviews of Mario and Zelda](https://hardware.slashdot.org/story/25/08/08/0031253/first-ever-reviews-of-mario-and-zelda?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-08, 02:55:28](https://news.ycombinator.com/item?id=44832927) - [The Paranoid Style in American Politics (1964)](https://harpers.org/archive/1964/11/the-paranoid-style-in-american-politics/)
* [2025-08-08, 00:50:00](https://news.slashdot.org/story/25/08/08/0021259/the-backlash-against-duolingo-going-ai-first-didnt-even-matter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Backlash Against Duolingo Going &apos;AI-First&apos; Didn&apos;t Even Matter](https://news.slashdot.org/story/25/08/08/0021259/the-backlash-against-duolingo-going-ai-first-didnt-even-matter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-07, 23:52:00](https://soylentnews.org/article.pl?sid=25/08/06/1435231&amp;from=rss) - [OpenAI Announces Two “gpt-oss” Open AI Models, and You Can Download Them Today](https://soylentnews.org/article.pl?sid=25/08/06/1435231&amp;from=rss)
* [2025-08-07, 23:34:52](https://news.ycombinator.com/item?id=44831704) - [Cursed Knowledge](https://immich.app/cursed-knowledge/)
* [2025-08-07, 23:30:00](https://mobile.slashdot.org/story/25/08/07/2144256/sony-says-its-xperia-smartphones-are-still-very-important?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sony Says Its Xperia Smartphones Are Still &apos;Very Important&apos;](https://mobile.slashdot.org/story/25/08/07/2144256/sony-says-its-xperia-smartphones-are-still-very-important?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-07, 22:50:00](https://yro.slashdot.org/story/25/08/07/2137222/amazons-cloud-business-giving-federal-agencies-up-to-1-billion-in-discounts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon&apos;s Cloud Business Giving Federal Agencies Up To $1 Billion In Discounts](https://yro.slashdot.org/story/25/08/07/2137222/amazons-cloud-business-giving-federal-agencies-up-to-1-billion-in-discounts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-07, 22:45:53](https://lobste.rs/s/nsk2vc/mac_history_echoes_current_mac_operating) - [Mac history echoes in current Mac operating systems](http://tenfourfox.blogspot.com/2025/08/mac-history-echoes-in-mac-operating.html)
* [2025-08-07, 22:10:00](https://it.slashdot.org/story/25/08/07/217234/encryption-made-for-police-and-military-radios-may-be-easily-cracked?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Encryption Made For Police and Military Radios May Be Easily Cracked](https://it.slashdot.org/story/25/08/07/217234/encryption-made-for-police-and-military-radios-may-be-easily-cracked?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-07, 21:36:45](https://news.ycombinator.com/item?id=44830684) - [Vibechart](https://www.vibechart.net/)
* [2025-08-07, 21:30:00](https://entertainment.slashdot.org/story/25/08/07/2031259/hbo-max-password-sharing-crackdown-will-get-aggressive-next-month?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [HBO Max Password Sharing Crackdown Will Get &apos;Aggressive&apos; Next Month](https://entertainment.slashdot.org/story/25/08/07/2031259/hbo-max-password-sharing-crackdown-will-get-aggressive-next-month?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-07, 21:26:24](https://lobste.rs/s/lgkhhv/disposable_code_is_here_stay_durable_code) - [Disposable Code Is Here to Stay, but Durable Code Is What Runs the World](https://www.honeycomb.io/blog/disposable-code-is-here-to-stay)
* [2025-08-07, 21:11:20](https://news.ycombinator.com/item?id=44830418) - [Achieving 10,000x training data reduction with high-fidelity labels](https://research.google/blog/achieving-10000x-training-data-reduction-with-high-fidelity-labels/)
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
* [2025-08-07, 18:30:04](https://news.ycombinator.com/item?id=44828504) - [Encryption made for police and military radios may be easily cracked](https://www.wired.com/story/encryption-made-for-police-and-military-radios-may-be-easily-cracked-researchers-find/)
* [2025-08-07, 18:22:00](https://tech.slashdot.org/story/25/08/07/1822223/google-tvs-uncertain-future?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google TV&apos;s Uncertain Future](https://tech.slashdot.org/story/25/08/07/1822223/google-tvs-uncertain-future?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-07, 18:06:50](https://news.ycombinator.com/item?id=44828158) - [Exit Tax: Leave Germany before your business gets big](https://eidel.io/exit-tax-leave-germany-before-your-business-gets-big/)
* [2025-08-07, 17:49:49](https://news.ycombinator.com/item?id=44827862) - [Benchmark Framework Desktop Mainboard and 4-node cluster](https://github.com/geerlingguy/ollama-benchmark/issues/21)
* [2025-08-07, 17:46:18](https://news.ycombinator.com/item?id=44827794) - [GPT-5: Key characteristics, pricing and system card](https://simonwillison.net/2025/Aug/7/gpt-5/)
* [2025-08-07, 17:30:00](https://slashdot.org/story/25/08/07/1719223/openai-releases-gpt-5?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Releases GPT-5](https://slashdot.org/story/25/08/07/1719223/openai-releases-gpt-5?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-07, 17:06:39](https://news.ycombinator.com/item?id=44827101) - [GPT-5 for Developers](https://openai.com/index/introducing-gpt-5-for-developers)
* [2025-08-07, 17:00:21](https://news.ycombinator.com/item?id=44826997) - [GPT-5](https://openai.com/gpt-5/)
* [2025-08-07, 16:50:00](https://news.slashdot.org/story/25/08/07/1637255/openai-pays-bonuses-ranging-up-to-millions-of-dollars-to-1000-researchers-engineers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Pays Bonuses Ranging Up To Millions of Dollars To 1,000 Researchers, Engineers](https://news.slashdot.org/story/25/08/07/1637255/openai-pays-bonuses-ranging-up-to-millions-of-dollars-to-1000-researchers-engineers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-07, 16:44:43](https://lobste.rs/s/77oshx/nixpkgs_module_system_config_modules) - [Nixpkgs module system config modules graph](https://discourse.nixos.org/t/nixpkgs-module-system-config-modules-graph/67722)
* [2025-08-07, 16:10:00](https://slashdot.org/story/25/08/07/1610201/chinas-solar-giants-quietly-shed-a-third-of-their-workforces-last-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s Solar Giants Quietly Shed a Third of Their Workforces Last Year](https://slashdot.org/story/25/08/07/1610201/chinas-solar-giants-quietly-shed-a-third-of-their-workforces-last-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-07, 16:01:12](https://lobste.rs/s/jeg0io/more_shell_tricks_first_class_lists_jq_es) - [More shell tricks: first class lists, jq, and the es shell](https://alurm.github.io/blog/2025-08-07-first-class-lists-in-shells.html)
* [2025-08-07, 15:56:01](https://news.ycombinator.com/item?id=44826164) - [Building Bluesky comments for my blog](https://natalie.sh/posts/bluesky-comments/)
* [2025-08-07, 15:30:00](https://games.slashdot.org/story/25/08/07/1530229/digital-foundry-the-most-trusted-name-in-game-console-analysis-is-going-independent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Digital Foundry, the Most Trusted Name in Game Console Analysis, is Going Independent](https://games.slashdot.org/story/25/08/07/1530229/digital-foundry-the-most-trusted-name-in-game-console-analysis-is-going-independent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-07, 15:09:02](https://news.ycombinator.com/item?id=44825491) - [How to sell if your user is not the buyer](https://writings.founderlabs.io/p/how-to-sell-if-your-user-is-not-the)
* [2025-08-07, 14:44:39](https://lobste.rs/s/lofllu/jepsen_capela_dda5892) - [Jepsen: Capela dda5892](https://jepsen.io/analyses/capela-dda5892)
* [2025-08-07, 14:22:00](https://soylentnews.org/article.pl?sid=25/08/06/1123237&amp;from=rss) - [AWS Deleted a 10-Year Account and All Data Without Warning](https://soylentnews.org/article.pl?sid=25/08/06/1123237&amp;from=rss)
* [2025-08-07, 14:20:43](https://lobste.rs/s/2t4kwx/asahi_linux_progress_report_linux_6_16) - [Asahi Linux Progress Report: Linux 6.16](https://asahilinux.org/2025/08/progress-report-6-16/)
* [2025-08-07, 13:58:25](https://news.ycombinator.com/item?id=44824539) - [Windows XP Professional](https://win32.run/)
* [2025-08-07, 13:22:48](https://lobste.rs/s/hcvcd9/we_replaced_passwords_with_something) - [We replaced passwords with something worse](https://blog.danielh.cc/blog/passwords)
* [2025-08-07, 13:12:42](https://news.ycombinator.com/item?id=44824056) - [Infinite Pixels](https://meyerweb.com/eric/thoughts/2025/08/07/infinite-pixels/)
* [2025-08-07, 12:41:27](https://lobste.rs/s/1jkaez/you_don_t_really_need_monads) - [You don&apos;t really need monads](https://muratkasimov.art/Ya/Articles/You-don&apos;t-really-need-monads)
* [2025-08-07, 11:27:31](https://lobste.rs/s/lxvgky/announcing_rust_1_89_0) - [Announcing Rust 1.89.0](https://blog.rust-lang.org/2025/08/07/Rust-1.89.0/)
* [2025-08-07, 11:08:18](https://lobste.rs/s/tpifk2/live_coding_sucks) - [Live coding sucks](https://hadid.dev/posts/living-coding/)
* [2025-08-07, 10:12:54](https://news.ycombinator.com/item?id=44822665) - [How AI conquered the US economy: A visual FAQ](https://www.derekthompson.org/p/how-ai-conquered-the-us-economy-a)
* [2025-08-07, 09:33:00](https://soylentnews.org/article.pl?sid=25/08/05/1550247&amp;from=rss) - [Underwater Robot Draws in Millions of Viewers](https://soylentnews.org/article.pl?sid=25/08/05/1550247&amp;from=rss)
* [2025-08-07, 08:25:26](https://lobste.rs/s/foh4ch/jujutsu_support_reviewboard) - [Jujutsu support in Reviewboard](https://reviews.reviewboard.org/r/14336/)
* [2025-08-07, 04:51:00](https://soylentnews.org/article.pl?sid=25/08/05/151223&amp;from=rss) - [Infrared Contact Lens Helps People See in the Dark, Even With Their Eyes Closed](https://soylentnews.org/article.pl?sid=25/08/05/151223&amp;from=rss)
* [2025-08-07, 00:07:00](https://soylentnews.org/article.pl?sid=25/08/05/1452205&amp;from=rss) - [Plague: A Newly Discovered PAM-Based Backdoor for Linux](https://soylentnews.org/article.pl?sid=25/08/05/1452205&amp;from=rss)
* [2025-08-06, 19:41:50](https://lobste.rs/s/xoyolt/litestar_is_worth_look) - [Litestar is worth a look](https://www.b-list.org/weblog/2025/aug/06/litestar/)
* [2025-08-06, 19:20:00](https://soylentnews.org/article.pl?sid=25/08/05/1446223&amp;from=rss) - [Russian Volcano Erupts for First Time in Centuries](https://soylentnews.org/article.pl?sid=25/08/05/1446223&amp;from=rss)
* [2025-08-06, 17:26:18](https://lobste.rs/s/wzj0h7/we_shouldn_t_have_needed_lockfiles) - [We shouldn’t have needed lockfiles](https://tonsky.me/blog/lockfiles/)
* [2025-08-06, 14:37:00](https://soylentnews.org/article.pl?sid=25/08/05/1441236&amp;from=rss) - [Inspired by Astronauts, Researchers Use High-Tech Pants to Uncover Heart Issues on MRI](https://soylentnews.org/article.pl?sid=25/08/05/1441236&amp;from=rss)
* [2025-08-06, 13:17:38](https://news.ycombinator.com/item?id=44811567) - [Claude Code IDE integration for Emacs](https://github.com/manzaltu/claude-code-ide.el)
* [2025-08-06, 11:50:33](https://lobste.rs/s/44ltdp/how_why_github_codeberg) - [The how and why of GitHub to Codeberg](https://www.arscyni.cc/file/codeberg.html)
* [2025-08-06, 09:58:00](https://soylentnews.org/article.pl?sid=25/08/05/1150228&amp;from=rss) - [Space&apos;s Spinning Enigma: A ‘Unicorn’ Object Defies Astrophysics](https://soylentnews.org/article.pl?sid=25/08/05/1150228&amp;from=rss)
* [2025-08-06, 05:08:00](https://soylentnews.org/article.pl?sid=25/08/05/0156215&amp;from=rss) - [AI and the Democratization of Cybercrime](https://soylentnews.org/article.pl?sid=25/08/05/0156215&amp;from=rss)
* [2025-08-06, 00:25:00](https://soylentnews.org/article.pl?sid=25/08/05/0152249&amp;from=rss) - [Christiaan Huygens and the Scientific Secrets of Saturn](https://soylentnews.org/article.pl?sid=25/08/05/0152249&amp;from=rss)
* [2025-08-05, 19:40:00](https://soylentnews.org/article.pl?sid=25/08/04/0644251&amp;from=rss) - [ChatGPT Users Shocked to Learn Their Chats Were in Google Search Results](https://soylentnews.org/article.pl?sid=25/08/04/0644251&amp;from=rss)
* [2025-08-05, 14:54:00](https://soylentnews.org/article.pl?sid=25/08/03/2140229&amp;from=rss) - [China Forms AI Alliances To Cut U.S. Tech Reliance](https://soylentnews.org/article.pl?sid=25/08/03/2140229&amp;from=rss)
* [2025-08-05, 10:03:00](https://soylentnews.org/article.pl?sid=25/08/03/2136209&amp;from=rss) - [Solid-State Batteries Charge in 3 Minutes:  Why Aren&apos;t They in Your Phones and Cars Yet?](https://soylentnews.org/article.pl?sid=25/08/03/2136209&amp;from=rss)
* [2025-08-05, 05:22:00](https://soylentnews.org/article.pl?sid=25/08/03/0242234&amp;from=rss) - [Ousted Vaccine Panel Members Say Rigorous Science is Being Abandoned](https://soylentnews.org/article.pl?sid=25/08/03/0242234&amp;from=rss)
* [2025-08-05, 00:40:00](https://soylentnews.org/article.pl?sid=25/08/03/0225206&amp;from=rss) - [World News: United Nations Report Finds UN Reports Aren’t Widely Read](https://soylentnews.org/article.pl?sid=25/08/03/0225206&amp;from=rss)
* [2025-08-04, 23:14:15](https://news.ycombinator.com/item?id=44792419) - [Over engineering my homelab so I don&apos;t pay cloud providers](https://ergaster.org/posts/2025/08/04-overegineering-homelab/)
* [2025-08-04, 22:14:02](https://news.ycombinator.com/item?id=44791923) - [FLUX.1-Krea and the Rise of Opinionated Models](https://www.dbreunig.com/2025/08/04/the-rise-of-opinionated-models.html)
* [2025-08-04, 20:00:00](https://soylentnews.org/article.pl?sid=25/08/03/0219201&amp;from=rss) - [Brain Scans Reveal Parahippocampal Cortex Thinning in Those with Depression and Neuroticism](https://soylentnews.org/article.pl?sid=25/08/03/0219201&amp;from=rss)
* [2025-08-04, 15:15:00](https://soylentnews.org/article.pl?sid=25/08/03/026228&amp;from=rss) - [Clouds, Sub Cables, Report No Impact From Monster Quake](https://soylentnews.org/article.pl?sid=25/08/03/026228&amp;from=rss)
* [2025-08-04, 12:55:52](https://news.ycombinator.com/item?id=44785144) - [What Is Popover=Hint?](https://una.im/popover-hint/)
* [2025-08-04, 11:56:30](https://news.ycombinator.com/item?id=44784619) - [Ask HN: Has any of the Pivotal Tracker replacement attempts succeeded?](https://news.ycombinator.com/item?id=44784619)
* [2025-08-04, 11:51:00](https://news.ycombinator.com/item?id=44784570) - [Virtual Linux Devices on ARM64](https://underjord.io/500-virtual-linux-devices-on-arm64.html)
* [2025-08-04, 10:46:02](https://news.ycombinator.com/item?id=44784090) - [Open music foundation models for full-song generation](https://map-yue.github.io/)
* [2025-08-04, 10:33:00](https://soylentnews.org/article.pl?sid=25/08/02/2149227&amp;from=rss) - [Coffee Prices Rise as U.S. Imposes Tariffs on Top Exporter Brazil](https://soylentnews.org/article.pl?sid=25/08/02/2149227&amp;from=rss)
* [2025-08-04, 08:53:15](https://news.ycombinator.com/item?id=44783368) - [Writing a storage engine for Postgres: An in-memory table access method (2023)](https://notes.eatonphil.com/2023-11-01-postgres-table-access-methods.html)
* [2025-08-04, 05:47:00](https://soylentnews.org/article.pl?sid=25/08/02/2145230&amp;from=rss) - [Kali Linux Can Now Run in Apple Containers on macOS Systems](https://soylentnews.org/article.pl?sid=25/08/02/2145230&amp;from=rss)
* [2025-08-04, 01:02:00](https://soylentnews.org/article.pl?sid=25/08/02/1318209&amp;from=rss) - [Subliminal Learning: Language Models Transmit Behavioral Traits Via Hidden Signals in Data](https://soylentnews.org/article.pl?sid=25/08/02/1318209&amp;from=rss)
