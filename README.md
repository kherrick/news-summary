# [News Summary](https://kherrick.github.io/news-summary/)

## Legal and Corporate Developments

* [Substack Says It'll Legally Defend Writers 'Targeted By the Government'](https://news.slashdot.org/story/25/04/01/2239250/substack-says-itll-legally-defend-writers-targeted-by-the-government?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Substack has announced plans to legally support writers who face government targeting, positioning itself as a platform advocating for press freedom.

* [Stablecoin Issuer Circle Files For IPO](https://slashdot.org/story/25/04/01/2233251/stablecoin-issuer-circle-files-for-ipo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Circle, the stablecoin issuer behind USDC, has filed for an initial public offering, signaling further institutionalization of cryptocurrency.

## Technology and Software Innovations

* [The good, the bad, and the ugly of managing Sphinx projects with Bazel](https://technicalwriting.dev/sphinx/bazel/context.html) - An in-depth discussion on using Bazel for managing Sphinx projects, exploring its advantages and complexities.

* [Simulated Economy Tutorial](https://jasonfantl.com/posts/Simulated-Economy-(1)/) - A guide on creating simulated economies that can be applied in diverse fields like gaming, economics, and academic research.

* [jj-fzf: Text UI for Jujutsu based on fzf](https://github.com/tim-janik/jj-fzf) - A new text-based user interface for Jujutsu, leveraging fzf for improved efficiency and usability.

* [Testing DVD-R and CD-R 25 years later: optical disks from Japan](https://goughlui.com/2025/03/23/optical-discs-from-japan-part-6-tdk-uv-guard-fuji-lg-sony-maxell-cmc/) - A fascinating exploration of optical disk durability and performance 25 years after their creation.

* [Show HN: Nue – Apps lighter than a React button](https://nuejs.org/blog/large-scale-apps/) - A new JavaScript framework proposing ultra-light applications for large-scale systems.

## Artificial Intelligence and Data Privacy

* [DeepMind is Holding Back Release of AI Research To Give Google an Edge](https://tech.slashdot.org/story/25/04/01/1648250/deepmind-is-holding-back-release-of-ai-research-to-give-google-an-edge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Reports indicate DeepMind is withholding AI research to provide competitive advantage to Google's operations.

* [FTC Says 23andMe Purchaser Must Uphold Existing Privacy Policy For Data Handling](https://yro.slashdot.org/story/25/04/01/2023246/ftc-says-23andme-purchaser-must-uphold-existing-privacy-policy-for-data-handling?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Regulatory directives stress the importance of maintaining data privacy policies for consumers post-acquisition.

## Human Impact and Ethical Implications

* [Larry Fink Says Bitcoin Could Replace the Dollar as the World's Reserve Currency Because of National Debt](https://slashdot.org/story/25/04/01/1840253/larry-fink-says-bitcoin-could-replace-the-dollar-as-the-worlds-reserve-currency-because-of-national-debt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Larry Fink's comments suggest Bitcoin's potential to surpass traditional reserve currencies amidst growing national debts.

* [Ending Remote Work Has Major Consequences for Women](https://soylentnews.org/article.pl?sid=25/03/31/0411203&amp;from=rss) - A study details how rolling back remote work disproportionately impacts career advancement and work-life balance for women.

## Historic and Unique Innovations

* [Roguetype: The first ever roguelike written in the OCaml type system](https://github.com/Octachron/roguetype) - A groundbreaking application of OCaml's type system to create a fully functional roguelike game.

* [Shared DNA in Music](https://pudding.cool/2025/04/music-dna/) - A creative exploration of musical similarities across genres and artists, emphasizing the 'shared DNA' in compositions.

* [Rockbox 4.0 released](https://www.rockbox.org/mail/archive//rockbox-archive-2025-04/0000.shtml) - The latest update to the open-source jukebox firmware Rockbox, featuring new capabilities for audio playback devices.

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

* [2025-04-02, 00:50:00](https://news.slashdot.org/story/25/04/01/2239250/substack-says-itll-legally-defend-writers-targeted-by-the-government?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Substack Says It&apos;ll Legally Defend Writers &apos;Targeted By the Government&apos;](https://news.slashdot.org/story/25/04/01/2239250/substack-says-itll-legally-defend-writers-targeted-by-the-government?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-02, 00:10:00](https://slashdot.org/story/25/04/01/2233251/stablecoin-issuer-circle-files-for-ipo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stablecoin Issuer Circle Files For IPO](https://slashdot.org/story/25/04/01/2233251/stablecoin-issuer-circle-files-for-ipo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-02, 00:08:29](https://lobste.rs/s/yyb8je/good_bad_ugly_managing_sphinx_projects) - [The good, the bad, and the ugly of managing Sphinx projects with Bazel](https://technicalwriting.dev/sphinx/bazel/context.html)
* [2025-04-02, 00:05:47](https://news.ycombinator.com/item?id=43552530) - [Simulated Economy Tutorial](https://jasonfantl.com/posts/Simulated-Economy-(1)/)
* [2025-04-01, 23:37:17](https://lobste.rs/s/abunxs/roguetype_first_ever_roguelike_written) - [Roguetype: The first ever roguelike written in the OCaml type system](https://github.com/Octachron/roguetype)
* [2025-04-01, 23:31:11](https://news.ycombinator.com/item?id=43552385) - [AR Computers to Terminate Eyestrain and Myopia](https://eyewiki.org/AR_Computers_To_Terminate_Eyestrain_And_Myopia)
* [2025-04-01, 23:30:00](https://news.slashdot.org/story/25/04/01/2040242/youtube-could-be-worth-550-billion-as-analyst-crowns-platform-new-king-of-all-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [YouTube Could Be Worth $550 Billion as Analyst Crowns Platform &apos;New King of All Media&apos;](https://news.slashdot.org/story/25/04/01/2040242/youtube-could-be-worth-550-billion-as-analyst-crowns-platform-new-king-of-all-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-01, 22:50:00](https://tech.slashdot.org/story/25/04/01/2046253/mozilla-to-launch-thunderbird-pro-paid-services?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mozilla To Launch &apos;Thunderbird Pro&apos; Paid Services](https://tech.slashdot.org/story/25/04/01/2046253/mozilla-to-launch-thunderbird-pro-paid-services?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-01, 22:27:42](https://lobste.rs/s/utxfxu/jj_fzf_text_ui_for_jujutsu_based_on_fzf) - [jj-fzf: Text UI for Jujutsu based on fzf](https://github.com/tim-janik/jj-fzf)
* [2025-04-01, 22:22:46](https://news.ycombinator.com/item?id=43551934) - [The atrocious state of binary compatibility on Linux and how to address it](https://jangafx.com/insights/linux-binary-compatibility)
* [2025-04-01, 22:19:35](https://news.ycombinator.com/item?id=43551915) - [Show HN: Textcase: A Python Library for Text Case Conversion](https://github.com/zobweyt/textcase)
* [2025-04-01, 22:10:00](https://yro.slashdot.org/story/25/04/01/2038234/donkey-kong-champion-wins-defamation-case-against-australian-youtuber-karl-jobst?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Donkey Kong Champion Wins Defamation Case Against Australian YouTuber Karl Jobst](https://yro.slashdot.org/story/25/04/01/2038234/donkey-kong-champion-wins-defamation-case-against-australian-youtuber-karl-jobst?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-01, 21:58:32](https://news.ycombinator.com/item?id=43551767) - [Show HN: Offline SOS signaling+recovery app for disasters/wars](https://github.com/nizarmah/igatha)
* [2025-04-01, 21:46:31](https://news.ycombinator.com/item?id=43551663) - [Testing DVD-R and CD-R 25 years later: optical disks from Japan](https://goughlui.com/2025/03/23/optical-discs-from-japan-part-6-tdk-uv-guard-fuji-lg-sony-maxell-cmc/)
* [2025-04-01, 21:30:00](https://yro.slashdot.org/story/25/04/01/2023246/ftc-says-23andme-purchaser-must-uphold-existing-privacy-policy-for-data-handling?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FTC Says 23andMe Purchaser Must Uphold Existing Privacy Policy For Data Handling](https://yro.slashdot.org/story/25/04/01/2023246/ftc-says-23andme-purchaser-must-uphold-existing-privacy-policy-for-data-handling?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-01, 21:24:00](https://soylentnews.org/article.pl?sid=25/03/31/1243220&amp;from=rss) - [The Internet Oracle Has Pondered Your Question Deeply - Revisiting an Old Friend](https://soylentnews.org/article.pl?sid=25/03/31/1243220&amp;from=rss)
* [2025-04-01, 21:11:43](https://news.ycombinator.com/item?id=43551397) - [DEDA – Tracking Dots Extraction, Decoding and Anonymisation Toolkit](https://github.com/dfd-tud/deda)
* [2025-04-01, 21:08:16](https://news.ycombinator.com/item?id=43551361) - [A look back: WordPerfect on DOS (2023)](https://technicallywewrite.com/2023/07/30/wordperfect)
* [2025-04-01, 21:07:23](https://news.ycombinator.com/item?id=43551352) - [Shared DNA in Music](https://pudding.cool/2025/04/music-dna/)
* [2025-04-01, 21:00:08](https://news.ycombinator.com/item?id=43551276) - [Hightouch (YC S19) Is Hiring Front End Engineers](https://job-boards.greenhouse.io/hightouch/jobs/5437380004)
* [2025-04-01, 20:50:00](https://tech.slashdot.org/story/25/04/01/2016219/arkansas-social-media-age-verification-law-blocked-by-federal-judge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Arkansas Social Media Age Verification Law Blocked By Federal Judge](https://tech.slashdot.org/story/25/04/01/2016219/arkansas-social-media-age-verification-law-blocked-by-federal-judge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-01, 20:10:00](https://slashdot.org/story/25/04/01/208221/mcp-the-new-usb-c-for-ai-thats-bringing-fierce-rivals-together?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [MCP: the New &apos;USB-C For AI&apos; That&apos;s Bringing Fierce Rivals Together](https://slashdot.org/story/25/04/01/208221/mcp-the-new-usb-c-for-ai-thats-bringing-fierce-rivals-together?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-01, 19:37:20](https://lobste.rs/s/vwjlyl/most_amusing_security_flaws_i_ve) - [The Most Amusing Security Flaws I&apos;ve Discovered](https://predr.ag/blog/xorry-not-sorry-most-amusing-security-flaws-ive-discovered/)
* [2025-04-01, 18:40:47](https://news.ycombinator.com/item?id=43550098) - [Dave Täht has died](https://libreqos.io/2025/04/01/in-loving-memory-of-dave/)
* [2025-04-01, 18:40:00](https://slashdot.org/story/25/04/01/1840253/larry-fink-says-bitcoin-could-replace-the-dollar-as-the-worlds-reserve-currency-because-of-national-debt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Larry Fink Says Bitcoin Could Replace the Dollar as the World&apos;s Reserve Currency Because of National Debt ](https://slashdot.org/story/25/04/01/1840253/larry-fink-says-bitcoin-could-replace-the-dollar-as-the-worlds-reserve-currency-because-of-national-debt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-01, 18:28:31](https://news.ycombinator.com/item?id=43549983) - [Show HN: Make SVGs interactive in React with 1 line](https://svggles.vercel.app/)
* [2025-04-01, 17:48:45](https://news.ycombinator.com/item?id=43549618) - [Show HN: Zig Topological Sort Library for Parallel Processing](https://github.com/williamw520/toposort)
* [2025-04-01, 17:19:48](https://news.ycombinator.com/item?id=43549293) - [The Myst Graph: A New Perspective on Myst](https://glthr.com/myst-graph-1)
* [2025-04-01, 17:00:49](https://news.ycombinator.com/item?id=43549072) - [Show HN: Qwen-2.5-32B is now the best open source OCR model](https://github.com/getomni-ai/benchmark/blob/main/README.md)
* [2025-04-01, 16:59:01](https://lobste.rs/s/8dtj3n/new_state_art_turing_test_drawing_rubik_s) - [new state of the art turing test: drawing a rubik&apos;s cube](https://gist.github.com/izabera/3fb2f510f9e29811b57d3702002fc2a2)
* [2025-04-01, 16:48:00](https://tech.slashdot.org/story/25/04/01/1648250/deepmind-is-holding-back-release-of-ai-research-to-give-google-an-edge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DeepMind is Holding Back Release of AI Research To Give Google an Edge](https://tech.slashdot.org/story/25/04/01/1648250/deepmind-is-holding-back-release-of-ai-research-to-give-google-an-edge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-01, 16:38:00](https://soylentnews.org/article.pl?sid=25/03/31/1218257&amp;from=rss) - [Back to Cash: Life Without Money in Your Pocket is Not the Utopia Sweden Hoped](https://soylentnews.org/article.pl?sid=25/03/31/1218257&amp;from=rss)
* [2025-04-01, 16:19:28](https://news.ycombinator.com/item?id=43548589) - [Tell HN: Camelgate NPM Outage (Cloudflare)](https://news.ycombinator.com/item?id=43548589)
* [2025-04-01, 16:15:46](https://lobste.rs/s/qrb3ve/streaming_changes_from_postgres) - [Streaming changes from Postgres: the architecture behind Sequin](https://blog.sequinstream.com/streaming-changes-from-postgres-the-architecture-behind-sequin/)
* [2025-04-01, 16:05:00](https://news.slashdot.org/story/25/04/01/1542236/study-reveals-why-credit-card-interest-rates-remain-stubbornly-high?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Study Reveals Why Credit Card Interest Rates Remain Stubbornly High](https://news.slashdot.org/story/25/04/01/1542236/study-reveals-why-credit-card-interest-rates-remain-stubbornly-high?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-01, 15:49:01](https://news.ycombinator.com/item?id=43548217) - [Glubux&apos;s Powerwall (2016)](https://secondlifestorage.com/index.php?threads/glubuxs-powerwall.126/)
* [2025-04-01, 15:39:58](https://news.ycombinator.com/item?id=43548108) - [RubyUI (Former PhlexUI): Ruby Gem for RubyUI Components](https://github.com/ruby-ui/ruby_ui)
* [2025-04-01, 15:30:00](https://news.slashdot.org/story/25/04/01/1531202/london-mayor-axes-cyber-crime-victim-support-line?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [London Mayor Axes Cyber Crime Victim Support Line](https://news.slashdot.org/story/25/04/01/1531202/london-mayor-axes-cyber-crime-victim-support-line?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-01, 15:06:11](https://news.ycombinator.com/item?id=43547677) - [Launch HN: ASim (YC S21) – Mobile app that generates mobile apps](https://news.ycombinator.com/item?id=43547677)
* [2025-04-01, 14:59:42](https://news.ycombinator.com/item?id=43547593) - [Systems Correctness Practices at AWS: Leveraging Formal and Semi-Formal Methods](https://queue.acm.org/detail.cfm?id=3712057)
* [2025-04-01, 14:40:00](https://it.slashdot.org/story/25/04/01/1440224/gmail-is-making-it-easier-for-businesses-to-send-encrypted-emails-to-anyone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gmail is Making It Easier For Businesses To Send Encrypted Emails To Anyone](https://it.slashdot.org/story/25/04/01/1440224/gmail-is-making-it-easier-for-businesses-to-send-encrypted-emails-to-anyone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-01, 14:37:12](https://lobste.rs/s/t51nab/anubis_weighs_soul_incoming_http) - [anubis: Weighs the soul of incoming HTTP requests using proof-of-work to stop AI crawlers](https://github.com/TecharoHQ/anubis)
* [2025-04-01, 14:22:25](https://lobste.rs/s/fu9osm/goodbye_offpunk_welcome_xkcdpunk) - [Goodbye Offpunk, Welcome XKCDpunk](https://ploum.net/2025-04-01-xkcdpunk.html)
* [2025-04-01, 14:01:58](https://lobste.rs/s/xtrx71/intuiting_tls) - [Intuiting TLS](https://kprotty.me/2025/04/01/intuiting-tls.html)
* [2025-04-01, 14:00:00](https://news.slashdot.org/story/25/04/01/135253/average-person-will-be-40-poorer-if-world-warms-by-4c-new-research-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Average Person Will Be 40% Poorer If World Warms By 4C, New Research Shows](https://news.slashdot.org/story/25/04/01/135253/average-person-will-be-40-poorer-if-world-warms-by-4c-new-research-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-01, 13:00:00](https://tech.slashdot.org/story/25/04/01/1129255/xiaomi-ev-involved-in-first-fatal-autopilot-crash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Xiaomi EV Involved in First Fatal Autopilot Crash](https://tech.slashdot.org/story/25/04/01/1129255/xiaomi-ev-involved-in-first-fatal-autopilot-crash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-01, 12:55:28](https://news.ycombinator.com/item?id=43546236) - [Bletchley code breaker Betty Webb dies aged 101](https://www.bbc.com/news/articles/c78jd30ywv8o)
* [2025-04-01, 12:50:59](https://lobste.rs/s/hvjeov/css_system_colors) - [CSS System colors](https://anto.pt/articles/css-system-colors)
* [2025-04-01, 12:46:03](https://lobste.rs/s/8lxlev/rockbox_4_0_released) - [Rockbox 4.0 released](https://www.rockbox.org/mail/archive//rockbox-archive-2025-04/0000.shtml)
* [2025-04-01, 12:33:08](https://lobste.rs/s/kubso9/why_f) - [Why F#?](https://batsov.com/articles/2025/03/30/why-fsharp/)
* [2025-04-01, 12:25:12](https://news.ycombinator.com/item?id=43545917) - [Electron band structure in germanium, my ass (2001)](https://pages.cs.wisc.edu/~kovar/hall.html)
* [2025-04-01, 11:55:00](https://soylentnews.org/article.pl?sid=25/04/01/0749220&amp;from=rss) - [After Trump&apos;s Decree: Fight for US Funding for Tor, F-Droid and Let&apos;s Encrypt](https://soylentnews.org/article.pl?sid=25/04/01/0749220&amp;from=rss)
* [2025-04-01, 11:12:19](https://lobste.rs/s/uw8d9a/python_polars_definitive_guide) - [Python Polars: The Definitive Guide](https://polarsguide.com)
* [2025-04-01, 11:12:19](https://lobste.rs/s/m8zt7j/think_i_implemented_unique_feature_my) - [Think I implemented a unique feature in my feed reader](https://andregarzia.com/2025/04/think-i-implemented-a-unique-feature-in-my-feed-reader.html)
* [2025-04-01, 09:25:21](https://lobste.rs/s/euye4l/april_fools_joke_might_have_got_me_fired) - [The April Fools joke that might have got me fired](http://oldvcr.blogspot.com/2025/04/the-april-fools-joke-that-might-have.html)
* [2025-04-01, 08:58:30](https://lobste.rs/s/ffsuxb/my_new_emacs_ruby_based_static_site) - [My new Emacs (and Ruby) based Static Site Generator](https://michal.sapka.pl/2025/msite/)
* [2025-04-01, 07:24:19](https://lobste.rs/s/a2wi1j/love_letter_csv_format) - [A love letter to the CSV format](https://github.com/medialab/xan/blob/master/docs/LOVE_LETTER.md)
* [2025-04-01, 07:11:30](https://news.ycombinator.com/item?id=43543743) - [The April Fools joke that might have got me fired](http://oldvcr.blogspot.com/2025/04/the-april-fools-joke-that-might-have.html)
* [2025-04-01, 07:09:00](https://soylentnews.org/article.pl?sid=25/03/31/0411203&amp;from=rss) - [Ending Remote Work Has Major Consequences for Women](https://soylentnews.org/article.pl?sid=25/03/31/0411203&amp;from=rss)
* [2025-04-01, 06:51:22](https://lobste.rs/s/954llr/who_s_hiring_q2_2025) - [Who&apos;s Hiring? Q2 2025](https://lobste.rs/s/954llr/who_s_hiring_q2_2025)
* [2025-04-01, 06:34:27](https://lobste.rs/s/8gycxf/fskit) - [FSKit](https://developer.apple.com/documentation/fskit)
* [2025-04-01, 05:47:41](https://news.ycombinator.com/item?id=43543241) - [Show HN: Nue – Apps lighter than a React button](https://nuejs.org/blog/large-scale-apps/)
* [2025-04-01, 05:46:34](https://news.ycombinator.com/item?id=43543235) - [Show HN: Duolingo-style exercises but with real-world content like the news](https://app.fluentsubs.com/exercises/daily)
* [2025-04-01, 04:50:27](https://lobste.rs/s/ktngc0/9front_front_end_tomorrow_released) - [9front “THE FRONT END OF TOMORROW” released](https://9front.org/releases/2025/04/01/0/)
* [2025-04-01, 04:24:24](https://lobste.rs/s/7h1c2a/pidgin_3_0_experimental_2_2_91_0_has_been) - [Pidgin 3.0 Experimental 2 (2.91.0) has been released](https://discourse.imfreedom.org/t/pidgin-3-0-experimental-2-2-91-0-has-been-released/262)
* [2025-04-01, 02:23:00](https://soylentnews.org/article.pl?sid=25/03/31/045231&amp;from=rss) - [Word of the Day: Zwitterionic](https://soylentnews.org/article.pl?sid=25/03/31/045231&amp;from=rss)
* [2025-04-01, 02:15:47](https://lobste.rs/s/sjnbsz/3110_coq_tactics_cheatsheet) - [3110 Coq Tactics Cheatsheet](https://www.cs.cornell.edu/courses/cs3110/2018sp/a5/coq-tactics-cheatsheet.html)
* [2025-03-31, 21:37:00](https://soylentnews.org/article.pl?sid=25/03/31/042242&amp;from=rss) - [NASA Early Galaxy Discovery Shines Light on &apos;Cosmic Dark Ages&apos;](https://soylentnews.org/article.pl?sid=25/03/31/042242&amp;from=rss)
* [2025-03-31, 21:32:01](https://lobste.rs/s/qttqfq/how_i_spent_saturday_recovering_passkey) - [How I Spent Saturday Recovering A Passkey Or Why Open-Source Software Matters](https://taggr.link/post/1425921)
* [2025-03-31, 17:07:44](https://news.ycombinator.com/item?id=43537272) - [Stop Syncing Everything](https://sqlsync.dev/posts/stop-syncing-everything/)
* [2025-03-31, 16:55:00](https://soylentnews.org/article.pl?sid=25/03/31/0349222&amp;from=rss) - [The Practical Limitations of End-to-End Encryption](https://soylentnews.org/article.pl?sid=25/03/31/0349222&amp;from=rss)
* [2025-03-31, 14:21:15](https://news.ycombinator.com/item?id=43535376) - [AI image recognition detects bubble-like structures in the universe](https://phys.org/news/2025-03-ai-image-recognition-universe.html)
* [2025-03-31, 13:08:47](https://lobste.rs/s/ybbhxp/giving_up_dylib_dream) - [Giving up the dylib dream](https://octet-stream.net/b/scb/2025-03-31-giving-up-the-dylib-dream.html)
* [2025-03-31, 12:09:00](https://soylentnews.org/article.pl?sid=25/03/31/0347227&amp;from=rss) - [Elon Musk’s X Has a New Owner](https://soylentnews.org/article.pl?sid=25/03/31/0347227&amp;from=rss)
* [2025-03-31, 10:11:39](https://lobste.rs/s/tvx2b5/dipping_my_toes_openbsd_amsterdam) - [Dipping my toes in OpenBSD, in Amsterdam](https://ewintr.nl/posts/2025/dipping-my-toes-in-openbsd-in-amsterdam/)
* [2025-03-31, 09:56:02](https://news.ycombinator.com/item?id=43533104) - [The March of the Vegetables Parade](http://www.marchofthevegetables.org)
* [2025-03-31, 07:24:00](https://soylentnews.org/article.pl?sid=25/03/31/0341226&amp;from=rss) - [Apple and Google Face Billions in Liability From Trump&apos;s Tiktok Ban Delay](https://soylentnews.org/article.pl?sid=25/03/31/0341226&amp;from=rss)
* [2025-03-31, 06:00:00](https://soylentnews.org/article.pl?sid=25/03/28/1139202&amp;from=rss) - [Soylent News Entering a New Phase](https://soylentnews.org/article.pl?sid=25/03/28/1139202&amp;from=rss)
* [2025-03-31, 02:39:00](https://soylentnews.org/article.pl?sid=25/03/28/1410255&amp;from=rss) - [23andMe Customers Struggle to Delete Their Data](https://soylentnews.org/article.pl?sid=25/03/28/1410255&amp;from=rss)
* [2025-03-30, 21:53:00](https://soylentnews.org/article.pl?sid=25/03/28/1431238&amp;from=rss) - [New Utah Law Makes App Stores Responsible for Age Verification](https://soylentnews.org/article.pl?sid=25/03/28/1431238&amp;from=rss)
* [2025-03-30, 17:14:00](https://soylentnews.org/article.pl?sid=25/03/28/1425255&amp;from=rss) - [DragonOS is a Lubuntu-Based Desktop Distro Which is Focused on Software Defined Radio (SDR)](https://soylentnews.org/article.pl?sid=25/03/28/1425255&amp;from=rss)
* [2025-03-30, 12:28:00](https://soylentnews.org/article.pl?sid=25/03/30/0940218&amp;from=rss) - [I&apos;m an American Software Developer and the \&quot;Broligarchs\&quot; Don&apos;t Speak for Me (or Anyone I Know.)](https://soylentnews.org/article.pl?sid=25/03/30/0940218&amp;from=rss)
* [2025-03-30, 07:42:00](https://soylentnews.org/article.pl?sid=25/03/28/146215&amp;from=rss) - [A Tardigrade Protein Helped Reduce Radiation Damage In Mice](https://soylentnews.org/article.pl?sid=25/03/28/146215&amp;from=rss)
* [2025-03-30, 03:03:00](https://soylentnews.org/article.pl?sid=25/03/28/1353243&amp;from=rss) - [Tor Network Status - A Pretty Yet Detailed Current List of Nodes and Type](https://soylentnews.org/article.pl?sid=25/03/28/1353243&amp;from=rss)
* [2025-03-29, 22:04:00](https://soylentnews.org/article.pl?sid=25/03/28/140245&amp;from=rss) - [Certified Genuine Randomness](https://soylentnews.org/article.pl?sid=25/03/28/140245&amp;from=rss)
* [2025-03-29, 20:44:41](https://news.ycombinator.com/item?id=43518570) - [Generate autounattend.xml files for Windows 10/11](https://schneegans.de/windows/unattend-generator/)
* [2025-03-29, 17:17:00](https://soylentnews.org/article.pl?sid=25/03/28/1347215&amp;from=rss) - [Nitisinone Makes Human Blood Lethal to Mosquitoes and Outlasts Ivermectin, Study Shows](https://soylentnews.org/article.pl?sid=25/03/28/1347215&amp;from=rss)
* [2025-03-29, 12:33:00](https://soylentnews.org/article.pl?sid=25/03/28/1215217&amp;from=rss) - [Record-Breaking Explosion by Black Hole Spotted](https://soylentnews.org/article.pl?sid=25/03/28/1215217&amp;from=rss)
* [2025-03-29, 07:49:00](https://soylentnews.org/article.pl?sid=25/03/28/1210259&amp;from=rss) - [Open Source Devs Are Fighting AI Crawlers With Cleverness and Vengeance](https://soylentnews.org/article.pl?sid=25/03/28/1210259&amp;from=rss)
* [2025-03-29, 03:00:00](https://soylentnews.org/article.pl?sid=25/03/28/122201&amp;from=rss) - [Security Vulnerability Fixed in Firefox 136.0.4, Firefox ESR 128.8.1, Firefox ESR 115.21.1](https://soylentnews.org/article.pl?sid=25/03/28/122201&amp;from=rss)
