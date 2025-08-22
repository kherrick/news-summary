# [News Summary](https://kherrick.github.io/news-summary/)

## Climate and Renewable Energy

* [Record Solar Growth Keeps China's CO2 Falling in First Half of 2025](https://news.slashdot.org/story/25/08/22/2036256/record-solar-growth-keeps-chinas-co2-falling-in-first-half-of-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A report highlights China's impressive expansion in solar energy, which has led to a reduction in CO2 emissions during 2025.

* [Tree Species Face Unprecedented Climate Shifts Across Their Ranges](https://soylentnews.org/article.pl?sid=25/08/21/1213229&amp;from=rss) - A detailed analysis examines how climate change is reshaping the habitat ranges of various tree species globally.

## Technology and Innovation

* [Ejabberd 25.08 / ProcessOne – Erlang Jabber/XMPP/Matrix Server – Communication](https://www.process-one.net/blog/ejabberd-25-08/) - A major release of Ejabberd introduces updates to its robust communication server supporting Jabber, XMPP, and Matrix protocols.

* [A string formatting library in 65 lines of C++](https://riki.house/fmt) - This concise C++ library simplifies string formatting with minimal code implementation, marking an innovation in lightweight libraries.

* [Waymo granted permit to begin testing in New York City](https://www.cnbc.com/2025/08/22/waymo-permit-new-york-city-nyc-rides.html) - Autonomous vehicle company Waymo takes a big step forward with approval to test its rides in the bustling streets of NYC.

## Corporate and Policy Developments

* [U.S. government takes 10% stake in Intel](https://www.cnbc.com/2025/08/22/intel-goverment-equity-stake.html) - A landmark deal establishes the U.S. government as a shareholder in Intel, signaling significant federal involvement in tech.

* [4chan Refuses To Pay UK Online Safety Act Fines](https://news.slashdot.org/story/25/08/22/2029253/4chan-refuses-to-pay-uk-online-safety-act-fines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Controversy brews as 4chan openly defies penalties related to the UK's sweeping Online Safety Act.

## Programming and Development

* [Nitro: A tiny but flexible init system and process supervisor](https://git.vuxu.org/nitro/about/) - This lightweight and adaptable init system enhances supervision for processes, drawing interest from developers.

* [Introducing Forth poems](https://youtu.be/YZ4nYqQSyMo) - A creative approach to combining programming and poetry is explored using the Forth language in this unique project.

## Digital Safety and Privacy

* [Adult Sites Are Stashing Exploit Code Inside Racy .svg Files](https://soylentnews.org/article.pl?sid=25/08/21/123255&amp;from=rss) - A report uncovers cyberattack methods embedding malicious scripts into SVG files hosted by adult websites.

* [LabPlot: Free, open source and cross-platform Data Visualization and Analysis](https://labplot.org/) - A highlight of LabPlot offers users tools for creating scientific visualizations without proprietary constraints.

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

* [2025-08-22, 21:40:00](https://news.slashdot.org/story/25/08/22/2036256/record-solar-growth-keeps-chinas-co2-falling-in-first-half-of-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Record Solar Growth Keeps China&apos;s CO2 Falling in First Half of 2025](https://news.slashdot.org/story/25/08/22/2036256/record-solar-growth-keeps-chinas-co2-falling-in-first-half-of-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 21:01:52](https://news.ycombinator.com/item?id=44989773) - [U.S. government takes 10% stake in Intel](https://www.cnbc.com/2025/08/22/intel-goverment-equity-stake.html)
* [2025-08-22, 21:00:00](https://news.slashdot.org/story/25/08/22/2029253/4chan-refuses-to-pay-uk-online-safety-act-fines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [4chan Refuses To Pay UK Online Safety Act Fines](https://news.slashdot.org/story/25/08/22/2029253/4chan-refuses-to-pay-uk-online-safety-act-fines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 20:39:00](https://soylentnews.org/article.pl?sid=25/08/21/1213229&amp;from=rss) - [Tree Species Face Unprecedented Climate Shifts Across Their Ranges](https://soylentnews.org/article.pl?sid=25/08/21/1213229&amp;from=rss)
* [2025-08-22, 20:23:35](https://news.ycombinator.com/item?id=44989373) - [Ejabberd 25.08 / ProcessOne – Erlang Jabber/XMPP/Matrix Server – Communication](https://www.process-one.net/blog/ejabberd-25-08/)
* [2025-08-22, 20:20:00](https://news.slashdot.org/story/25/08/22/2020223/workers-need-better-protections-from-the-heat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Workers Need Better Protections From the Heat](https://news.slashdot.org/story/25/08/22/2020223/workers-need-better-protections-from-the-heat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 20:03:05](https://lobste.rs/s/ysmsfu/no_google_did_not_unilaterally_decide) - [No, Google Did Not Unilaterally Decide to Kill XSLT](https://meyerweb.com/eric/thoughts/2025/08/22/no-google-did-not-unilaterally-decide-to-kill-xslt/)
* [2025-08-22, 19:52:41](https://lobste.rs/s/0ktx6s/string_formatting_library_65_lines_c) - [A string formatting library in 65 lines of C++](https://riki.house/fmt)
* [2025-08-22, 19:30:58](https://lobste.rs/s/pc87c0/why_was_apache_kafka_created) - [Why Was Apache Kafka Created?](https://bigdatastream.substack.com/p/why-was-apache-kafka-created)
* [2025-08-22, 19:30:00](https://slashdot.org/story/25/08/22/1925255/europe-is-losing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Europe Is Losing](https://slashdot.org/story/25/08/22/1925255/europe-is-losing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 19:06:29](https://news.ycombinator.com/item?id=44988530) - [Nitro: A tiny but flexible init system and process supervisor](https://git.vuxu.org/nitro/about/)
* [2025-08-22, 19:04:51](https://lobste.rs/s/xltjpn/nitro_tiny_flexible_init_system_process) - [nitro: a tiny but flexible init system and process supervisor](https://git.vuxu.org/nitro/about/)
* [2025-08-22, 18:51:57](https://lobste.rs/s/kl2nwa/first_moq_cdn_cloudflare) - [The First MoQ CDN: Cloudflare](https://moq.dev/blog/first-cdn/)
* [2025-08-22, 18:50:00](https://news.slashdot.org/story/25/08/22/1849210/intel-has-agreed-to-a-deal-for-us-to-take-10-equity-stake-trump-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel Has Agreed To a Deal For US To Take 10% Equity Stake, Trump Says](https://news.slashdot.org/story/25/08/22/1849210/intel-has-agreed-to-a-deal-for-us-to-take-10-equity-stake-trump-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 18:24:16](https://news.ycombinator.com/item?id=44987924) - [The First Media over QUIC CDN: Cloudflare](https://moq.dev/blog/first-cdn/)
* [2025-08-22, 18:14:00](https://it.slashdot.org/story/25/08/22/1814219/default-microsoft-365-domains-face-100-email-daily-limit-starting-october?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Default Microsoft 365 Domains Face 100-Email Daily Limit Starting October](https://it.slashdot.org/story/25/08/22/1814219/default-microsoft-365-domains-face-100-email-daily-limit-starting-october?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 17:56:12](https://news.ycombinator.com/item?id=44987552) - [Should the web platform adopt XSLT 3.0?](https://github.com/whatwg/html/issues/11578)
* [2025-08-22, 17:45:27](https://news.ycombinator.com/item?id=44987422) - [Sprinkling self-doubt on ChatGPT](https://justin.searls.co/posts/sprinkling-self-doubt-on-chatgpt/)
* [2025-08-22, 17:41:48](https://news.ycombinator.com/item?id=44987380) - [Leaving Gmail for Mailbox.org](https://giuliomagnifico.blog/post/2025-08-18-leaving-gmail/)
* [2025-08-22, 17:33:00](https://apple.slashdot.org/story/25/08/22/1733230/apple-explores-using-google-gemini-ai-to-power-revamped-siri?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Explores Using Google Gemini AI To Power Revamped Siri](https://apple.slashdot.org/story/25/08/22/1733230/apple-explores-using-google-gemini-ai-to-power-revamped-siri?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 17:26:27](https://lobste.rs/s/lsxzfy/optimizing_our_way_through_metroid) - [Optimizing our way through Metroid](https://antithesis.com/blog/2025/metroid/)
* [2025-08-22, 17:16:03](https://lobste.rs/s/snhdea/w65c832_w65c832_32_bit_6502_fpga) - [w65c832: W65C832 (32 bit 6502) in an FPGA](https://github.com/mikeakohn/w65c832)
* [2025-08-22, 17:02:48](https://news.ycombinator.com/item?id=44986949) - [Waymo granted permit to begin testing in New York City](https://www.cnbc.com/2025/08/22/waymo-permit-new-york-city-nyc-rides.html)
* [2025-08-22, 17:02:20](https://lobste.rs/s/rmga0q/bubbletea_rs_rust_implementation) - [bubbletea-rs: A rust implementation of Bubbletea](https://github.com/whit3rabbit/bubbletea-rs)
* [2025-08-22, 16:53:30](https://news.ycombinator.com/item?id=44986809) - [Launch HN: BlankBio (YC S25) - Making RNA Programmable](https://news.ycombinator.com/item?id=44986809)
* [2025-08-22, 16:50:00](https://tech.slashdot.org/story/25/08/22/1624208/google-tv-and-android-tv-apps-must-support-64-bit-starting-august-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google TV and Android TV Apps Must Support 64-bit Starting August 2026](https://tech.slashdot.org/story/25/08/22/1624208/google-tv-and-android-tv-apps-must-support-64-bit-starting-august-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 16:12:00](https://news.slashdot.org/story/25/08/22/1612250/us-strips-ocean-and-air-pollution-monitoring-from-next-gen-weather-satellites?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Strips Ocean and Air Pollution Monitoring From Next-Gen Weather Satellites](https://news.slashdot.org/story/25/08/22/1612250/us-strips-ocean-and-air-pollution-monitoring-from-next-gen-weather-satellites?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 16:08:59](https://news.ycombinator.com/item?id=44986291) - [DeepSeek v3.1 is not having a moment](https://thezvi.wordpress.com/2025/08/22/deepseek-v3-1-is-not-having-a-moment/)
* [2025-08-22, 16:07:24](https://lobste.rs/s/u9v6jj/closing_nix_gap_from_environments) - [Closing the Nix Gap: From Environments to Packaged Applications for Rust](https://devenv.sh/blog/2025/08/22/closing-the-nix-gap-from-environments-to-packaged-applications-for-rust/)
* [2025-08-22, 16:06:15](https://news.ycombinator.com/item?id=44986251) - [Closing the Nix gap: From environments to packaged applications for rust](https://devenv.sh/blog/2025/08/22/closing-the-nix-gap-from-environments-to-packaged-applications-for-rust/)
* [2025-08-22, 16:03:26](https://news.ycombinator.com/item?id=44986205) - [Show HN: Clyp – Clipboard Manager for Linux](https://github.com/murat-cileli/clyp)
* [2025-08-22, 15:56:00](https://soylentnews.org/article.pl?sid=25/08/21/123255&amp;from=rss) - [Adult Sites Are Stashing Exploit Code Inside Racy .svg Files](https://soylentnews.org/article.pl?sid=25/08/21/123255&amp;from=rss)
* [2025-08-22, 15:22:42](https://news.ycombinator.com/item?id=44985730) - [FFmpeg 8.0](https://ffmpeg.org/index.html#pr8.0)
* [2025-08-22, 15:22:00](https://slashdot.org/story/25/08/22/1515238/coinbase-reverses-remote-first-policy-after-north-korean-infiltration-attempts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Coinbase Reverses Remote-First Policy After North Korean Infiltration Attempts](https://slashdot.org/story/25/08/22/1515238/coinbase-reverses-remote-first-policy-after-north-korean-infiltration-attempts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 14:48:27](https://lobste.rs/s/othw2q/go_is_still_not_good) - [Go is still not good](https://blog.habets.se/2025/07/Go-is-still-not-good.html)
* [2025-08-22, 14:47:05](https://news.ycombinator.com/item?id=44985323) - [Does MHz Still Matter?](https://www.ubicloud.com/blog/does-mhz-still-matter)
* [2025-08-22, 14:43:31](https://news.ycombinator.com/item?id=44985278) - [Making LLMs Cheaper and Better via Performance-Efficiency Optimized Routing](https://arxiv.org/abs/2508.12631)
* [2025-08-22, 14:42:00](https://tech.slashdot.org/story/25/08/22/1442208/openai-is-challenging-google---while-using-its-search-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Is Challenging Google - While Using Its Search Data](https://tech.slashdot.org/story/25/08/22/1442208/openai-is-challenging-google---while-using-its-search-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 14:38:21](https://lobste.rs/s/cw265v/have_smart_glasses_finally_hit) - [Have smart glasses finally hit an inflection point?](https://torment-nexus.mathewingram.com/have-smart-glasses-finally-hit-an-inflection-point/)
* [2025-08-22, 14:14:26](https://news.ycombinator.com/item?id=44984958) - [Build Log: Macintosh Classic](https://www.jeffgeerling.com/blog/2025/build-log-macintosh-classic)
* [2025-08-22, 14:08:37](https://lobste.rs/s/nhrlya/be_better_programmer_write_little_proofs) - [To be a better programmer, write little proofs in your head](https://the-nerve-blog.ghost.io/to-be-a-better-programmer-write-little-proofs-in-your-head/)
* [2025-08-22, 14:00:00](https://slashdot.org/story/25/08/22/1110257/kpmg-wrote-100-page-prompt-to-build-agentic-taxbot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [KPMG Wrote 100-Page Prompt To Build Agentic TaxBot](https://slashdot.org/story/25/08/22/1110257/kpmg-wrote-100-page-prompt-to-build-agentic-taxbot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 13:55:12](https://lobste.rs/s/ntruuu/lobsters_interview_with_matklad) - [Lobsters Interview with Matklad](https://lobste.rs/s/ntruuu/lobsters_interview_with_matklad)
* [2025-08-22, 13:00:00](https://news.slashdot.org/story/25/08/22/0031247/denmark-to-abolish-vat-on-books-to-get-more-people-reading?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Denmark To Abolish VAT On Books To Get More People Reading](https://news.slashdot.org/story/25/08/22/0031247/denmark-to-abolish-vat-on-books-to-get-more-people-reading?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 12:59:07](https://news.ycombinator.com/item?id=44984096) - [Launch HN: Inconvo (YC S23) – AI agents for customer-facing analytics](https://news.ycombinator.com/item?id=44984096)
* [2025-08-22, 12:24:03](https://lobste.rs/s/62si4z/i_m_too_dumb_for_zig_s_new_io_interface) - [I&apos;m too dumb for Zig&apos;s new IO interface](https://www.openmymind.net/Im-Too-Dumb-For-Zigs-New-IO-Interface/)
* [2025-08-22, 11:49:52](https://lobste.rs/s/5tcy8c/what_about_using_rel_share_url_expose) - [What about using rel=\&quot;share-url\&quot; to expose sharing intents?](https://shkspr.mobi/blog/2025/08/what-about-using-relshare-url-to-expose-sharing-intents/)
* [2025-08-22, 11:49:08](https://news.ycombinator.com/item?id=44983364) - [What about using rel=\&quot;share-url\&quot; to expose sharing intents?](https://shkspr.mobi/blog/2025/08/what-about-using-relshare-url-to-expose-sharing-intents/)
* [2025-08-22, 11:11:00](https://soylentnews.org/article.pl?sid=25/08/21/1154233&amp;from=rss) - [Teenagers Are Choosing to Study STEM Subjects. It&apos;s a Sign of the Times](https://soylentnews.org/article.pl?sid=25/08/21/1154233&amp;from=rss)
* [2025-08-22, 10:00:00](https://yro.slashdot.org/story/25/08/22/0039200/dev-gets-4-years-for-creating-kill-switch-on-ex-employers-systems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dev Gets 4 Years For Creating Kill Switch On Ex-Employer&apos;s Systems](https://yro.slashdot.org/story/25/08/22/0039200/dev-gets-4-years-for-creating-kill-switch-on-ex-employers-systems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 09:11:26](https://news.ycombinator.com/item?id=44982409) - [LabPlot: Free, open source and cross-platform Data Visualization and Analysis](https://labplot.org/)
* [2025-08-22, 08:23:26](https://lobste.rs/s/ug4ch4/arch_linux_news_recent_service_outages) - [Arch Linux - News: Recent service outages](https://archlinux.org/news/recent-services-outages/)
* [2025-08-22, 07:18:48](https://news.ycombinator.com/item?id=44981802) - [The Minecraft Code (2024) [video]](https://www.youtube.com/watch?v=nz2LeXwJOyI)
* [2025-08-22, 07:00:00](https://science.slashdot.org/story/25/08/21/2356259/astronomers-discover-hidden-moon-orbiting-uranus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Astronomers Discover Hidden Moon Orbiting Uranus](https://science.slashdot.org/story/25/08/21/2356259/astronomers-discover-hidden-moon-orbiting-uranus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 06:22:44](https://lobste.rs/s/tkydi6/baby_paradox_haskell) - [The Baby Paradox in Haskell](https://blog.jle.im/entry/the-baby-paradox-in-haskell.html)
* [2025-08-22, 06:22:00](https://soylentnews.org/article.pl?sid=25/08/20/2255245&amp;from=rss) - [VW Introduces Monthly Subscription to Increase Car Power](https://soylentnews.org/article.pl?sid=25/08/20/2255245&amp;from=rss)
* [2025-08-22, 06:18:56](https://news.ycombinator.com/item?id=44981525) - [It’s not wrong that \&quot;\\u{1F926}\\u{1F3FC}\\u200D\\u2642\\uFE0F\&quot;.length == 7 (2019)](https://hsivonen.fi/string-length/)
* [2025-08-22, 05:22:50](https://lobste.rs/s/cfuzzv/introducing_forth_poems) - [Introducing Forth poems](https://youtu.be/YZ4nYqQSyMo)
* [2025-08-22, 05:20:26](https://lobste.rs/s/hnwcq6/what_hell_is_going_on_right_now) - [What the hell is going on right now?](https://catskull.net/what-the-hell-is-going-on-right-now.html)
* [2025-08-22, 03:51:44](https://news.ycombinator.com/item?id=44980865) - [Io_uring, kTLS and Rust for zero syscall HTTPS server](https://blog.habets.se/2025/04/io-uring-ktls-and-rust-for-zero-syscall-https-server.html)
* [2025-08-22, 02:05:53](https://news.ycombinator.com/item?id=44980339) - [Everything is correlated (2014–23)](https://gwern.net/everything)
* [2025-08-22, 01:35:00](https://soylentnews.org/article.pl?sid=25/08/20/2242220&amp;from=rss) - [We Need to Become Unoptomizable](https://soylentnews.org/article.pl?sid=25/08/20/2242220&amp;from=rss)
* [2025-08-22, 01:09:33](https://news.ycombinator.com/item?id=44980064) - [The issue of anti-cheat on Linux](https://tulach.cc/the-issue-of-anti-cheat-on-linux/)
* [2025-08-22, 00:59:04](https://news.ycombinator.com/item?id=44980004) - [Control shopping cart wheels with your phone (2021)](https://www.begaydocrime.com/)
* [2025-08-22, 00:39:07](https://lobste.rs/s/goaf6y/issue_anti_cheat_on_linux) - [The issue of anti-cheat on Linux](https://tulach.cc/the-issue-of-anti-cheat-on-linux/)
* [2025-08-21, 20:49:00](https://soylentnews.org/article.pl?sid=25/08/20/1759228&amp;from=rss) - [Uncovering the Fraudsters and Their Schemes Responsible for Polluting the Scientific Literature](https://soylentnews.org/article.pl?sid=25/08/20/1759228&amp;from=rss)
* [2025-08-21, 20:26:44](https://news.ycombinator.com/item?id=44977645) - [Code formatting comes to uv experimentally](https://pydevtools.com/blog/uv-format-code-formatting-comes-to-uv-experimentally/)
* [2025-08-21, 20:03:14](https://lobste.rs/s/ej6pen/grug_design) - [grug.design](https://www.grug.design/know)
* [2025-08-21, 20:01:00](https://lobste.rs/s/hty9zp/why_do_software_developers_love) - [Why do software developers love complexity?](https://kyrylo.org/software/2025/08/21/why-do-software-developers-love-complexity.html)
* [2025-08-21, 17:15:13](https://lobste.rs/s/xoa1sx/core_rust) - [the core of rust](https://jyn.dev/the-core-of-rust/)
* [2025-08-21, 16:09:00](https://soylentnews.org/article.pl?sid=25/08/20/1743213&amp;from=rss) - [Physics of Badminton’s New Killer Spin Serve](https://soylentnews.org/article.pl?sid=25/08/20/1743213&amp;from=rss)
* [2025-08-21, 15:25:46](https://lobste.rs/s/wthfwo/ledger_2023) - [Ledger (2023)](https://lock.cmpxchg8b.com/ledger.html)
* [2025-08-21, 14:47:43](https://lobste.rs/s/s4jdny/my_other_email_client_is_daemon) - [My other email client is a daemon](https://feyor.sh/blog/my-other-email-client-is-a-mail-daemon/)
* [2025-08-21, 12:20:53](https://news.ycombinator.com/item?id=44971845) - [Weaponizing image scaling against production AI systems](https://blog.trailofbits.com/2025/08/21/weaponizing-image-scaling-against-production-ai-systems/)
* [2025-08-21, 11:24:00](https://soylentnews.org/article.pl?sid=25/08/20/1736217&amp;from=rss) - [Mozilla Warns Germany Could Declare Ad Blockers Illegal](https://soylentnews.org/article.pl?sid=25/08/20/1736217&amp;from=rss)
* [2025-08-21, 06:38:00](https://soylentnews.org/article.pl?sid=25/08/20/033241&amp;from=rss) - [If AI Takes Most of Our Jobs, Money as We Know It Will be Over. What Then?](https://soylentnews.org/article.pl?sid=25/08/20/033241&amp;from=rss)
* [2025-08-21, 01:52:00](https://soylentnews.org/article.pl?sid=25/08/20/0153218&amp;from=rss) - [A Treatise on AI Chatbots Undermining the Enlightenment](https://soylentnews.org/article.pl?sid=25/08/20/0153218&amp;from=rss)
* [2025-08-20, 21:08:00](https://soylentnews.org/article.pl?sid=25/08/20/0149227&amp;from=rss) - [Whoops, They Did It Again](https://soylentnews.org/article.pl?sid=25/08/20/0149227&amp;from=rss)
* [2025-08-20, 16:22:00](https://soylentnews.org/article.pl?sid=25/08/20/0132257&amp;from=rss) - [The Big Slow Church Move](https://soylentnews.org/article.pl?sid=25/08/20/0132257&amp;from=rss)
* [2025-08-20, 12:10:58](https://news.ycombinator.com/item?id=44961153) - [Show HN: Pinch – macOS voice translation for real-time conversations](https://www.startpinch.com/)
* [2025-08-20, 11:35:00](https://soylentnews.org/article.pl?sid=25/08/20/0125237&amp;from=rss) - [How Chefs and Scientists Are Using Kombucha and Kimchi to Study Microbiology](https://soylentnews.org/article.pl?sid=25/08/20/0125237&amp;from=rss)
* [2025-08-20, 06:48:00](https://soylentnews.org/article.pl?sid=25/08/19/1550241&amp;from=rss) - [Scientists Say Tool Can Sniff 5G Traffic, Launch &apos;Attacks&apos; Without Using Rogue Base Stations](https://soylentnews.org/article.pl?sid=25/08/19/1550241&amp;from=rss)
* [2025-08-20, 02:06:00](https://soylentnews.org/article.pl?sid=25/08/19/1547232&amp;from=rss) - [Can’t Pay, Won’t Pay: Impoverished Streaming Services are Driving Viewers Back to Piracy](https://soylentnews.org/article.pl?sid=25/08/19/1547232&amp;from=rss)
* [2025-08-19, 21:21:00](https://soylentnews.org/article.pl?sid=25/08/19/0050215&amp;from=rss) - [Attorneys General, HCA Settle Over Nurse Training Repayment Provisions](https://soylentnews.org/article.pl?sid=25/08/19/0050215&amp;from=rss)
* [2025-08-19, 19:23:00](https://soylentnews.org/article.pl?sid=25/08/19/195256&amp;from=rss) - [Only 3 Stories in the Submissions Queue](https://soylentnews.org/article.pl?sid=25/08/19/195256&amp;from=rss)
* [2025-08-19, 16:35:00](https://soylentnews.org/article.pl?sid=25/08/19/0044229&amp;from=rss) - [Federal Court Filing System Hit in Sweeping Hack](https://soylentnews.org/article.pl?sid=25/08/19/0044229&amp;from=rss)
* [2025-08-19, 11:53:00](https://soylentnews.org/article.pl?sid=25/08/19/0039216&amp;from=rss) - [Charged Drops Don&apos;t Splash](https://soylentnews.org/article.pl?sid=25/08/19/0039216&amp;from=rss)
* [2025-08-19, 07:05:00](https://soylentnews.org/article.pl?sid=25/08/18/126258&amp;from=rss) - [Scientists 3D Print Inside a Living Cell](https://soylentnews.org/article.pl?sid=25/08/18/126258&amp;from=rss)
* [2025-08-19, 02:20:00](https://soylentnews.org/article.pl?sid=25/08/18/122222&amp;from=rss) - [Wikipedia Loses Challenge Against Online Safety Act, but the Door is Open for a Challenge](https://soylentnews.org/article.pl?sid=25/08/18/122222&amp;from=rss)
* [2025-08-18, 21:33:00](https://soylentnews.org/article.pl?sid=25/08/18/1144234&amp;from=rss) - [A Tale of Two Distros: One Outgoing and One Incoming](https://soylentnews.org/article.pl?sid=25/08/18/1144234&amp;from=rss)
* [2025-08-18, 16:48:00](https://soylentnews.org/article.pl?sid=25/08/18/1141215&amp;from=rss) - [Radioactive Water From UK Nuclear Bomb Base Leaked Into Sea, Files Show](https://soylentnews.org/article.pl?sid=25/08/18/1141215&amp;from=rss)
* [2025-08-18, 15:19:05](https://news.ycombinator.com/item?id=44941605) - [An interactive guide to SVG paths](https://www.joshwcomeau.com/svg/interactive-guide-to-paths/)
* [2025-08-18, 14:30:28](https://news.ycombinator.com/item?id=44941056) - [VHS-C: When a lazy idea stumbles towards perfection [video]](https://www.youtube.com/watch?v=HFYWHeBhYbM)
* [2025-08-18, 12:05:00](https://soylentnews.org/article.pl?sid=25/08/17/1234239&amp;from=rss) - [Toothpaste Made From Hair Provides Natural Root to Repair Teeth](https://soylentnews.org/article.pl?sid=25/08/17/1234239&amp;from=rss)
* [2025-08-18, 07:21:00](https://soylentnews.org/article.pl?sid=25/08/17/1246229&amp;from=rss) - [Firefox’s New “AI” Features Cause CPU Spikes and Battery Drain](https://soylentnews.org/article.pl?sid=25/08/17/1246229&amp;from=rss)
* [2025-08-18, 02:36:00](https://soylentnews.org/article.pl?sid=25/08/17/1237215&amp;from=rss) - [Blackhole Bounce - New Universes](https://soylentnews.org/article.pl?sid=25/08/17/1237215&amp;from=rss)
