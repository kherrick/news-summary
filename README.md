# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Developments

* [Rio Terminal: A hardware-accelerated GPU terminal emulator](https://rioterm.com/)

* [ParadeDB (YC S23) Is Hiring Database Internals Engineers](https://paradedb.notion.site/?source=copy_link)

* [Genode OS Framework](https://genode.org)

* [Fast UDP I/O for Firefox in Rust](https://max-inden.de/post/fast-udp-io-in-firefox/)

* [Show HN: The Little Notebook for Learning Linear Algebra with Python](https://little-book-of.github.io/linear-algebra/books/en-US/lab.html)

* [Investigating a Forged PDF](https://mjg59.dreamwidth.org/73317.html)

* [Tracing JITs in the real world @ CPython Core Dev Sprint](https://antocuni.eu/2025/09/24/tracing-jits-in-the-real-world--cpython-core-dev-sprint/)

* [Zoomer Tries RSS: In Praise of Yarr](https://tudorr.ro/blog/2024-04-04-zoomer-tries-rss/)

## Scientific and Medical Achievements

* [Huntington&apos;s Disease Successfully Treated for First Time](https://soylentnews.org/article.pl?sid=25/09/26/1047223&amp;from=rss)

* [Bit is all we need: binary normalized neural networks](https://arxiv.org/abs/2509.07025)

* [AI Can Forecast Your Future Health – Just Like the Weather](https://soylentnews.org/article.pl?sid=25/09/21/1419259&amp;from=rss)

## Business and Consumer Tech Initiatives

* [Facebook and Instagram to offer ad-free service in UK for up to £3.99 a month](https://www.theguardian.com/technology/2025/sep/26/facebook-and-instagram-to-offer-paid-ad-free-service-uk)

* [German Remote-Driving Firm Hopes To Make Private Car Ownership Redundant](https://tech.slashdot.org/story/25/09/26/0115250/german-remote-driving-firm-hopes-to-make-private-car-ownership-redundant?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Spotify Announces New AI Safeguards, Says It&apos;s Removed 75 Million &apos;Spammy&apos; Tracks](https://entertainment.slashdot.org/story/25/09/25/2211230/spotify-announces-new-ai-safeguards-says-its-removed-75-million-spammy-tracks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## AI and Automation

* [Writing Memory Safe JIT Compilers](https://medium.com/graalvm/writing-truly-memory-safe-jit-compilers-f79ad44558dd)

* [OpenAI Launches ChatGPT Pulse To Proactively Write You Morning Briefs](https://news.slashdot.org/story/25/09/25/1956213/openai-launches-chatgpt-pulse-to-proactively-write-you-morning-briefs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [How Billions of Hacked Mosquitoes and a Vaccine Could Beat the Deadly Dengue Virus](https://soylentnews.org/article.pl?sid=25/09/23/0616240&amp;from=rss)

## New Technologies in Gaming and Entertainment

* [Nintendo of America Boss Doug Bowser Is Retiring](https://games.slashdot.org/story/25/09/25/226256/nintendo-of-america-boss-doug-bowser-is-retiring?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [History of Prince of Persia&apos;s 1990s Ports](https://www.jordanmechner.com/en/latest-news/#a-platform-jumping-prince)

* [My Deus Ex lipsyncing fix mod](https://www.joewintergreen.com/my-deus-ex-lipsyncing-fix-mod-making-of/)

## Society, Ethics, and Data

* [Facebook Data Reveal the Devastating Real-World Harms Caused by Misinformation](https://soylentnews.org/article.pl?sid=25/09/26/0453242&amp;from=rss)

* [Open Source Turmoil: RubyGems Maintainers Kicked Off GitHub](https://news.slashdot.org/story/25/09/25/1956228/open-source-turmoil-rubygems-maintainers-kicked-off-github?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Electronic Locks Have Backdoors, Too](https://soylentnews.org/article.pl?sid=25/09/21/1430243&amp;from=rss)

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

* [2025-09-26, 13:00:00](https://news.slashdot.org/story/25/09/26/018220/did-the-us-successfully-take-over-tiktok-or-not?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Did the US Successfully Take Over TikTok, Or Not?](https://news.slashdot.org/story/25/09/26/018220/did-the-us-successfully-take-over-tiktok-or-not?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-26, 12:28:38](https://lobste.rs/s/7a4lle/rio_terminal_hardware_accelerated_gpu) - [Rio Terminal: A hardware-accelerated GPU terminal emulator](https://rioterm.com/)
* [2025-09-26, 12:19:31](https://lobste.rs/s/rylcz7/identity_types) - [Identity Types](https://bartoszmilewski.com/2025/09/22/identity-types/)
* [2025-09-26, 12:00:18](https://news.ycombinator.com/item?id=45385477) - [ParadeDB (YC S23) Is Hiring Database Internals Engineers](https://paradedb.notion.site/?source=copy_link)
* [2025-09-26, 11:28:16](https://news.ycombinator.com/item?id=45385252) - [Facebook and Instagram to offer ad-free service in UK for up to £3.99 a month](https://www.theguardian.com/technology/2025/sep/26/facebook-and-instagram-to-offer-paid-ad-free-service-uk)
* [2025-09-26, 10:53:00](https://soylentnews.org/article.pl?sid=25/09/26/1047223&amp;from=rss) - [Huntington&apos;s Disease Successfully Treated for First Time](https://soylentnews.org/article.pl?sid=25/09/26/1047223&amp;from=rss)
* [2025-09-26, 10:22:54](https://lobste.rs/s/hvrtkq/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/hvrtkq/what_are_you_doing_this_weekend)
* [2025-09-26, 10:00:00](https://developers.slashdot.org/story/25/09/26/013211/disastrous-oracle-implementation-at-europes-largest-city-council?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Disastrous Oracle Implementation At Europe&apos;s Largest City Council.](https://developers.slashdot.org/story/25/09/26/013211/disastrous-oracle-implementation-at-europes-largest-city-council?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-26, 09:52:45](https://news.ycombinator.com/item?id=45384653) - [Genode OS Framework](https://genode.org)
* [2025-09-26, 09:46:13](https://news.ycombinator.com/item?id=45384617) - [Show HN: The Little Notebook for Learning Linear Algebra with Python](https://little-book-of.github.io/linear-algebra/books/en-US/lab.html)
* [2025-09-26, 09:20:07](https://news.ycombinator.com/item?id=45384481) - [Pop OS 24.04 LTS Beta](https://system76.com/pop/pop-beta/)
* [2025-09-26, 07:39:53](https://news.ycombinator.com/item?id=45383851) - [Ode to Libraries from a Remote Worker](https://sibervepunk.com/ode-to-libraries/)
* [2025-09-26, 07:23:03](https://lobste.rs/s/rpcu4t/fast_udp_i_o_for_firefox_rust) - [Fast UDP I/O for Firefox in Rust](https://max-inden.de/post/fast-udp-io-in-firefox/)
* [2025-09-26, 07:06:45](https://news.ycombinator.com/item?id=45383637) - [Translating a Fortran F-16 Simulator to Unity3D](https://vazgriz.com/762/f-16-flight-sim-in-unity-3d/)
* [2025-09-26, 07:00:00](https://tech.slashdot.org/story/25/09/26/0115250/german-remote-driving-firm-hopes-to-make-private-car-ownership-redundant?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [German Remote-Driving Firm Hopes To Make Private Car Ownership Redundant](https://tech.slashdot.org/story/25/09/26/0115250/german-remote-driving-firm-hopes-to-make-private-car-ownership-redundant?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-26, 06:11:00](https://soylentnews.org/article.pl?sid=25/09/26/0453242&amp;from=rss) - [Facebook Data Reveal the Devastating Real-World Harms Caused by the Spread of Misinformation](https://soylentnews.org/article.pl?sid=25/09/26/0453242&amp;from=rss)
* [2025-09-26, 04:47:40](https://news.ycombinator.com/item?id=45382755) - [No reachable chess position with more than 218 moves](https://lichess.org/@/Tobs40/blog/there-is-no-reachable-chess-position-with-more-than-218-moves/a5xdxeqs)
* [2025-09-26, 04:43:45](https://lobste.rs/s/bmovqc/workaround_for_using_custom_properties) - [A workaround for using custom properties in media queries](https://piccalil.li/blog/a-workaround-for-using-custom-properties-in-media-queries)
* [2025-09-26, 04:29:41](https://news.ycombinator.com/item?id=45382645) - [A platform-jumping prince – History of Prince of Persia&apos;s 1990s Ports](https://www.jordanmechner.com/en/latest-news/#a-platform-jumping-prince)
* [2025-09-26, 03:45:54](https://news.ycombinator.com/item?id=45382397) - [My Deus Ex lipsyncing fix mod](https://www.joewintergreen.com/my-deus-ex-lipsyncing-fix-mod-making-of/)
* [2025-09-26, 03:30:00](https://tech.slashdot.org/story/25/09/25/2231203/shoplifters-could-soon-be-chased-down-by-drones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Shoplifters Could Soon Be Chased Down By Drones](https://tech.slashdot.org/story/25/09/25/2231203/shoplifters-could-soon-be-chased-down-by-drones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-26, 02:10:31](https://news.ycombinator.com/item?id=45381813) - [Writing Memory Safe JIT Compilers](https://medium.com/graalvm/writing-truly-memory-safe-jit-compilers-f79ad44558dd)
* [2025-09-26, 01:43:57](https://news.ycombinator.com/item?id=45381631) - [Bit is all we need: binary normalized neural networks](https://arxiv.org/abs/2509.07025)
* [2025-09-26, 01:27:00](https://soylentnews.org/article.pl?sid=25/09/25/1231232&amp;from=rss) - [China Starts Producing World-First Non-Binary AI Chips for Aviation, Manufacturing](https://soylentnews.org/article.pl?sid=25/09/25/1231232&amp;from=rss)
* [2025-09-26, 01:25:00](https://news.slashdot.org/story/25/09/25/2225206/european-banks-to-launch-euro-stablecoin-in-bid-to-counter-us-dominance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [European Banks To Launch Euro Stablecoin In Bid To Counter US Dominance](https://news.slashdot.org/story/25/09/25/2225206/european-banks-to-launch-euro-stablecoin-in-bid-to-counter-us-dominance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-26, 00:45:00](https://entertainment.slashdot.org/story/25/09/25/2211230/spotify-announces-new-ai-safeguards-says-its-removed-75-million-spammy-tracks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Spotify Announces New AI Safeguards, Says It&apos;s Removed 75 Million &apos;Spammy&apos; Tracks](https://entertainment.slashdot.org/story/25/09/25/2211230/spotify-announces-new-ai-safeguards-says-its-removed-75-million-spammy-tracks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-26, 00:14:11](https://news.ycombinator.com/item?id=45381010) - [Investigating a Forged PDF](https://mjg59.dreamwidth.org/73317.html)
* [2025-09-26, 00:02:00](https://games.slashdot.org/story/25/09/25/226256/nintendo-of-america-boss-doug-bowser-is-retiring?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nintendo of America Boss Doug Bowser Is Retiring](https://games.slashdot.org/story/25/09/25/226256/nintendo-of-america-boss-doug-bowser-is-retiring?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-25, 23:34:46](https://news.ycombinator.com/item?id=45380699) - [Redis is fast – I&apos;ll cache in Postgres](https://dizzy.zone/2025/09/24/Redis-is-fast-Ill-cache-in-Postgres/)
* [2025-09-25, 23:20:00](https://yro.slashdot.org/story/25/09/25/221215/neon-goes-dark-after-exposing-users-phone-numbers-call-recordings-transcripts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Neon Goes Dark After Exposing Users&apos; Phone Numbers, Call Recordings, Transcripts](https://yro.slashdot.org/story/25/09/25/221215/neon-goes-dark-after-exposing-users-phone-numbers-call-recordings-transcripts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-25, 22:40:00](https://yro.slashdot.org/story/25/09/25/203242/google-asks-us-supreme-court-to-freeze-app-store-injunction-in-epic-games-case?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Asks US Supreme Court To Freeze App Store Injunction In Epic Games Case](https://yro.slashdot.org/story/25/09/25/203242/google-asks-us-supreme-court-to-freeze-app-store-injunction-in-epic-games-case?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-25, 22:00:00](https://news.slashdot.org/story/25/09/25/1956213/openai-launches-chatgpt-pulse-to-proactively-write-you-morning-briefs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Launches ChatGPT Pulse To Proactively Write You Morning Briefs](https://news.slashdot.org/story/25/09/25/1956213/openai-launches-chatgpt-pulse-to-proactively-write-you-morning-briefs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-25, 21:58:15](https://lobste.rs/s/mudqlv/zoomer_tries_rss_praise_yarr) - [Zoomer Tries RSS: In Praise of Yarr](https://tudorr.ro/blog/2024-04-04-zoomer-tries-rss/)
* [2025-09-25, 21:24:00](https://news.slashdot.org/story/25/09/25/1956228/open-source-turmoil-rubygems-maintainers-kicked-off-github?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Open Source Turmoil: RubyGems Maintainers Kicked Off GitHub](https://news.slashdot.org/story/25/09/25/1956228/open-source-turmoil-rubygems-maintainers-kicked-off-github?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-25, 20:45:46](https://lobste.rs/s/2yp6ey/starless_how_we_accidentally_vanished) - [Starless: How we accidentally vanished our most popular GitHub repos](https://www.elastic.co/blog/starless-github-repos)
* [2025-09-25, 20:42:00](https://soylentnews.org/article.pl?sid=25/09/25/1225209&amp;from=rss) - [The Future of Nuclear Reactors is Making its Way to the US](https://soylentnews.org/article.pl?sid=25/09/25/1225209&amp;from=rss)
* [2025-09-25, 20:40:00](https://slashdot.org/story/25/09/25/1948246/experts-urge-caution-about-using-chatgpt-to-pick-stocks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Experts Urge Caution About Using ChatGPT To Pick Stocks](https://slashdot.org/story/25/09/25/1948246/experts-urge-caution-about-using-chatgpt-to-pick-stocks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-25, 20:04:44](https://lobste.rs/s/idcny5/athlon_64_how_amd_turned_tables_on_intel) - [Athlon 64: How AMD turned the tables on Intel](https://dfarq.homeip.net/athlon-64-how-amd-turned-the-tables-on-intel/)
* [2025-09-25, 20:03:00](https://slashdot.org/story/25/09/25/1921208/amazon-blamed-ai-for-layoffs-then-hired-cheap-h1-b-workers-senators-allege?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Blamed AI For Layoffs, Then Hired Cheap H1-B Workers, Senators Allege](https://slashdot.org/story/25/09/25/1921208/amazon-blamed-ai-for-layoffs-then-hired-cheap-h1-b-workers-senators-allege?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-25, 19:28:16](https://news.ycombinator.com/item?id=45377748) - [Can a model trained on satellite data really find brambles on the ground?](https://toao.com/blog/can-we-really-see-brambles-from-space)
* [2025-09-25, 19:22:00](https://it.slashdot.org/story/25/09/25/1916215/microsoft-disables-some-cloud-services-used-by-israels-defense-ministry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Disables Some Cloud Services Used by Israel&apos;s Defense Ministry](https://it.slashdot.org/story/25/09/25/1916215/microsoft-disables-some-cloud-services-used-by-israels-defense-ministry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-25, 19:21:52](https://news.ycombinator.com/item?id=45377641) - [Ollama Web Search](https://ollama.com/blog/web-search)
* [2025-09-25, 19:04:53](https://lobste.rs/s/vxzaqm/investigating_forged_pdf) - [Investigating a Forged PDF](https://mjg59.dreamwidth.org/73317.html)
* [2025-09-25, 18:42:00](https://tech.slashdot.org/story/25/09/25/1842223/cloudflare-to-launch-stablecoin-for-ai-driven-internet-economy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cloudflare To Launch Stablecoin for AI-Driven Internet Economy](https://tech.slashdot.org/story/25/09/25/1842223/cloudflare-to-launch-stablecoin-for-ai-driven-internet-economy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-25, 18:09:47](https://news.ycombinator.com/item?id=45376605) - [Athlon 64: How AMD turned the tables on Intel](https://dfarq.homeip.net/athlon-64-how-amd-turned-the-tables-on-intel/)
* [2025-09-25, 18:03:43](https://lobste.rs/s/c1oexv/tracing_jits_real_world_cpython_core_dev) - [Tracing JITs in the real world @ CPython Core Dev Sprint](https://antocuni.eu/2025/09/24/tracing-jits-in-the-real-world--cpython-core-dev-sprint/)
* [2025-09-25, 17:20:56](https://news.ycombinator.com/item?id=45375845) - [Improved Gemini 2.5 Flash and Flash-Lite](https://developers.googleblog.com/en/continuing-to-bring-you-our-latest-models-with-an-improved-gemini-2-5-flash-and-flash-lite-release/)
* [2025-09-25, 16:59:55](https://news.ycombinator.com/item?id=45375477) - [ChatGPT Pulse](https://openai.com/index/introducing-chatgpt-pulse/)
* [2025-09-25, 15:54:00](https://soylentnews.org/article.pl?sid=25/09/25/1221237&amp;from=rss) - [Different Types of Magic Mushrooms Use Unique Biochemical Paths to Produce the Same Active Compound](https://soylentnews.org/article.pl?sid=25/09/25/1221237&amp;from=rss)
* [2025-09-25, 15:32:36](https://lobste.rs/s/ppm44i/very_early_history_algebraic_data_types) - [A Very Early History of Algebraic Data Types](https://www.hillelwayne.com/post/algdt-history/)
* [2025-09-25, 14:33:50](https://news.ycombinator.com/item?id=45373081) - [Cloudflare Email Service: private beta](https://blog.cloudflare.com/email-service/)
* [2025-09-25, 14:28:24](https://news.ycombinator.com/item?id=45373008) - [Launch HN: Webhound (YC S23) – Research agent that builds datasets from the web](https://news.ycombinator.com/item?id=45373008)
* [2025-09-25, 14:08:51](https://lobste.rs/s/smlfkc/this_month_servo_variable_fonts_network) - [This month in Servo: variable fonts, network tools, SVG](https://servo.org/blog/2025/09/25/this-month-in-servo/)
* [2025-09-25, 13:52:33](https://lobste.rs/s/8ug7iy/postgresql_18_released) - [PostgreSQL 18 Released](https://www.postgresql.org/about/news/postgresql-18-released-3142/)
* [2025-09-25, 13:27:21](https://lobste.rs/s/gi7ac7/what_are_popular_ai_coding_benchmarks) - [What are popular AI coding benchmarks actually measuring?](https://blog.nilenso.com/blog/2025/09/25/swe-benchmarks/)
* [2025-09-25, 13:19:47](https://news.ycombinator.com/item?id=45372335) - [Demand for human radiologists is at an all-time high](https://www.worksinprogress.news/p/why-ai-isnt-replacing-radiologists)
* [2025-09-25, 12:50:24](https://lobste.rs/s/6b0ud8/introducing_emacs_agent_shell_powered_by) - [Introducing Emacs agent-shell (powered by ACP)](https://xenodium.com/introducing-agent-shell)
* [2025-09-25, 12:48:50](https://news.ycombinator.com/item?id=45372113) - [Resurrect the Old Web](https://stevedylandev.bearblog.dev/resurrect-the-old-web/)
* [2025-09-25, 11:43:00](https://soylentnews.org/article.pl?sid=25/09/25/0014257&amp;from=rss) - [The Ganges River is Drying at an Unprecedented Rate](https://soylentnews.org/article.pl?sid=25/09/25/0014257&amp;from=rss)
* [2025-09-25, 10:49:20](https://lobste.rs/s/jqikf7/thoughts_on_cloudflare) - [Thoughts on Cloudflare](https://xn--gckvb8fzb.com/thoughts-on-cloudflare/)
* [2025-09-25, 10:32:24](https://lobste.rs/s/4lva3o/theatre_pull_requests_code_review) - [The Theatre of Pull Requests and Code Review](https://meks.quest/blogs/the-theatre-of-pull-requests-and-code-review)
* [2025-09-25, 09:57:18](https://lobste.rs/s/iw0yyl/wind_pole_dragon) - [The Wind, a Pole, and the Dragon](https://entropicthoughts.com/the-wind-a-pole-and-the-dragon)
* [2025-09-25, 09:34:10](https://lobste.rs/s/qt82iv/some_interesting_stuff_i_found_on_ix_lans) - [Some interesting stuff I found on IX LANs](https://blog.benjojo.co.uk/post/ixp-bad-broadcast-packets-interesting)
* [2025-09-25, 08:08:02](https://lobste.rs/s/ruifje/raspberry_pi_500_launched) - [Raspberry Pi 500+ launched](https://www.raspberrypi.com/news/the-ultimate-all-in-one-pc-raspberry-pi-500-plus-on-sale-now-at-200/)
* [2025-09-25, 07:31:29](https://lobste.rs/s/iztrs8/helium_browser) - [Helium Browser](https://helium.computer)
* [2025-09-25, 07:01:00](https://soylentnews.org/article.pl?sid=25/09/24/122235&amp;from=rss) - [Nvidia&apos;s $100 Billion Investment in OpenAI Raises Big Antitrust Concerns](https://soylentnews.org/article.pl?sid=25/09/24/122235&amp;from=rss)
* [2025-09-25, 06:13:03](https://lobste.rs/s/5yxfew/cheri_efforts_get_linux_running_on_it) - [CHERI and the efforts to get Linux running on it](https://lwn.net/SubscriberLink/1037974/903c6f9a42f7782a/)
* [2025-09-25, 04:48:30](https://lobste.rs/s/p3wmty/step_right_up_lobsters_blog_carnival) - [¡Step right up to the Lobsters! Blog! Carnival](https://lobste.rs/s/p3wmty/step_right_up_lobsters_blog_carnival)
* [2025-09-25, 03:56:20](https://lobste.rs/s/5v3efy/how_many_valid_json_strings_are_there) - [How many valid JSON strings are there?](https://qntm.org/jsoncount)
* [2025-09-25, 03:16:00](https://soylentnews.org/article.pl?sid=25/09/24/1152227&amp;from=rss) - [The End of EU-Imposed Cookie Consent Pop-Ups Could be Nigh](https://soylentnews.org/article.pl?sid=25/09/24/1152227&amp;from=rss)
* [2025-09-24, 22:36:00](https://soylentnews.org/article.pl?sid=25/09/24/1148218&amp;from=rss) - [Cloudflare is Sponsoring Ladybird and Omarchy](https://soylentnews.org/article.pl?sid=25/09/24/1148218&amp;from=rss)
* [2025-09-24, 17:48:00](https://soylentnews.org/article.pl?sid=25/09/23/0616240&amp;from=rss) - [How Billions of Hacked Mosquitoes and a Vaccine Could Beat the Deadly Dengue Virus](https://soylentnews.org/article.pl?sid=25/09/23/0616240&amp;from=rss)
* [2025-09-24, 13:51:00](https://lobste.rs/s/f13wey/don_t_even_consider_starting_with) - [Don&apos;t even consider starting with Microsoft](https://lionelbarrow.substack.com/p/dont-even-consider-starting-with)
* [2025-09-24, 13:02:00](https://soylentnews.org/article.pl?sid=25/09/23/066237&amp;from=rss) - [Why do Some Gamers Invert Their Controls?](https://soylentnews.org/article.pl?sid=25/09/23/066237&amp;from=rss)
* [2025-09-24, 08:16:00](https://soylentnews.org/article.pl?sid=25/09/23/0557257&amp;from=rss) - [&apos;a Black Hole of Energy Use&apos;: Meta&apos;s Massive AI Data Center is Stressing Out a Louisiana Community](https://soylentnews.org/article.pl?sid=25/09/23/0557257&amp;from=rss)
* [2025-09-24, 03:35:00](https://soylentnews.org/article.pl?sid=25/09/23/0552218&amp;from=rss) - [When Cancer Targets the Young](https://soylentnews.org/article.pl?sid=25/09/23/0552218&amp;from=rss)
* [2025-09-23, 23:08:00](https://news.ycombinator.com/item?id=45353986) - [Walking around the compiler](https://bernsteinbear.com/blog/walking-around/)
* [2025-09-23, 22:48:00](https://soylentnews.org/article.pl?sid=25/09/22/2131204&amp;from=rss) - [Porsche EV Roll-Out Delay Deals $6 Billion Hit to Parent Volkswagen](https://soylentnews.org/article.pl?sid=25/09/22/2131204&amp;from=rss)
* [2025-09-23, 20:55:06](https://news.ycombinator.com/item?id=45352633) - [A history of ARM, part 1: Building the first chip (2022)](https://arstechnica.com/gadgets/2022/09/a-history-of-arm-part-1-building-the-first-chip/)
* [2025-09-23, 18:08:57](https://news.ycombinator.com/item?id=45350736) - [A story about hunting zombie tasks in a distributed environment](https://getbruin.com/blog/zombie-tasks/)
* [2025-09-23, 18:06:00](https://soylentnews.org/article.pl?sid=25/09/22/1156248&amp;from=rss) - [Scientists Found 7,000-Year-Old Mummies in the Desert That Don&apos;t Share DNA With Modern Humans](https://soylentnews.org/article.pl?sid=25/09/22/1156248&amp;from=rss)
* [2025-09-23, 13:24:00](https://soylentnews.org/article.pl?sid=25/09/21/2249222&amp;from=rss) - [Deaths From Flesh-Eating Bacteria are on the Rise. Who is at Risk?](https://soylentnews.org/article.pl?sid=25/09/21/2249222&amp;from=rss)
* [2025-09-23, 13:11:32](https://news.ycombinator.com/item?id=45346538) - [Cosmic simulations that once needed supercomputers now run on a laptop](https://www.sciencedaily.com/releases/2025/09/250918225001.htm)
* [2025-09-23, 11:18:24](https://news.ycombinator.com/item?id=45345447) - [Road to ZK Implementation: Nethermind Client&apos;s Path to Proofs](https://www.nethermind.io/blog/road-to-zk-implementation-nethermind-clients-path-to-proofs)
* [2025-09-23, 08:35:00](https://soylentnews.org/article.pl?sid=25/09/21/2243223&amp;from=rss) - [We Risk a Deluge of AI-Written ‘Science’ Pushing Corporate Interests](https://soylentnews.org/article.pl?sid=25/09/21/2243223&amp;from=rss)
* [2025-09-23, 03:52:00](https://soylentnews.org/article.pl?sid=25/09/21/2234254&amp;from=rss) - [Something Extremely Strange is Happening at the Event Horizon of This Supermassive Blackhole](https://soylentnews.org/article.pl?sid=25/09/21/2234254&amp;from=rss)
* [2025-09-22, 23:08:00](https://soylentnews.org/article.pl?sid=25/09/21/2230245&amp;from=rss) - [OpenAI&apos;s Research on AI Models Deliberately Lying is Wild](https://soylentnews.org/article.pl?sid=25/09/21/2230245&amp;from=rss)
* [2025-09-22, 18:23:00](https://soylentnews.org/article.pl?sid=25/09/21/1435205&amp;from=rss) - [Online Book:  The Pattern Language of Software Architecture](https://soylentnews.org/article.pl?sid=25/09/21/1435205&amp;from=rss)
* [2025-09-22, 17:33:20](https://news.ycombinator.com/item?id=45336775) - [Pairing with Claude Code to rebuild my startup&apos;s website](https://blog.nseldeib.com/p/pairing-with-claude-code-to-rebuild)
* [2025-09-22, 14:31:40](https://news.ycombinator.com/item?id=45334001) - [How to Make Sense of Any Mess](https://www.howtomakesenseofanymess.com)
* [2025-09-22, 13:40:00](https://soylentnews.org/article.pl?sid=25/09/21/1430243&amp;from=rss) - [Electronic Locks Have Backdoors, Too](https://soylentnews.org/article.pl?sid=25/09/21/1430243&amp;from=rss)
* [2025-09-22, 08:53:00](https://soylentnews.org/article.pl?sid=25/09/21/1427240&amp;from=rss) - [Rare Apple-1 With Storied Ownership Fetched Over $500,000 at Auction](https://soylentnews.org/article.pl?sid=25/09/21/1427240&amp;from=rss)
* [2025-09-22, 04:07:00](https://soylentnews.org/article.pl?sid=25/09/21/1419259&amp;from=rss) - [AI Can Forecast Your Future Health – Just Like the Weather](https://soylentnews.org/article.pl?sid=25/09/21/1419259&amp;from=rss)
