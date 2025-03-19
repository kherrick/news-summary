# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and AI Developments

* [Researchers Engineer Bacteria To Produce Plastics](https://science.slashdot.org/story/25/03/18/2243230/researchers-engineer-bacteria-to-produce-plastics?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Scientists have developed bacteria capable of sustainably producing plastics, offering a potential breakthrough in eco-friendly materials.

* [Italian Newspaper Says It Has Published World's First AI-Generated Edition](https://news.slashdot.org/story/25/03/18/2231255/italian-newspaper-says-it-has-published-worlds-first-ai-generated-edition?utm_source=rss1.0mainlinkanon&utm_medium=feed) - An Italian newspaper claims the distinction of releasing the first entirely AI-generated edition, signaling rapid advancements in journalism automation.

* [FTC Removes Posts Critical of Amazon, Microsoft, and AI Companies](https://news.slashdot.org/story/25/03/18/2040214/ftc-removes-posts-critical-of-amazon-microsoft-and-ai-companies?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The FTC faces scrutiny after allegedly censoring content critical of major tech firms and AI initiatives.

## Privacy and Security Concerns

* [Everything You Say to Your Echo Will be Sent to Amazon Starting on March 28](https://soylentnews.org/article.pl?sid=25/03/18/0159258&from=rss) - Amazon announces changes to Echo devices, raising privacy alarms as all user interactions will now be cloud-processed.

* [Microsoft Isn't Fixing 8-Year-Old Shortcut Exploit Abused For Spying](https://it.slashdot.org/story/25/03/18/2226205/microsoft-isnt-fixing-8-year-old-shortcut-exploit-abused-for-spying?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Critics criticize Microsoft for neglecting a known security exploit, leaving systems vulnerable to surveillance threats.

## Public Policy and Global Reactions

* [Dutch Parliament Calls For End To Dependence On US Software Companies](https://yro.slashdot.org/story/25/03/18/209246/dutch-parliament-calls-for-end-to-dependence-on-us-software-companies?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The Netherlands' government pushes to reduce reliance on U.S. tech giants, signaling potential shifts in tech sovereignty.

* [Turkish university annuls Erdogan rival's degree, preventing run for president](https://www.reuters.com/world/asia-pacific/istanbul-university-annuls-istanbul-mayor-imamoglus-diploma-over-irregularities-2025-03-18/) - Concerns arise over political bias as a key Erdogan rival is barred from an upcoming presidential election.

## Scientific and Space Advancements

* [Starliner Astronauts Return To Earth After More Than 9 Months In Space](https://science.slashdot.org/story/25/03/18/2258246/starliner-astronauts-return-to-earth-after-more-than-9-months-in-space?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Astronauts aboard Boeing's Starliner return safely after an extended mission, underscoring space mission longevity.

* [Chaos in Gravity - the Quantum Based Magnetic Monopole of Mass?](https://soylentnews.org/article.pl?sid=25/03/17/123238&from=rss) - Researchers explore quantum phenomena that could reshape our understanding of gravity and fundamental physics.

## Cultural and Historical Insights

* [Unearthed Notebooks Shed Light on Victorian Genius Who Inspired Einstein](https://soylentnews.org/article.pl?sid=25/03/18/0150258&from=rss) - Newly discovered manuscripts reveal the underappreciated contributions of a Victorian thinker to modern theoretical physics.

* [US Music Streaming Tops 100 Million Subscribers; Vinyl Outsells CDs For Third Year](https://entertainment.slashdot.org/story/25/03/18/2052244/us-music-streaming-tops-100-million-subscribers-vinyl-outsells-cds-for-third-year?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The rise in music streaming subscriptions is contrasted by the enduring popularity of vinyl records.

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

* [2025-03-19, 03:30:00](https://science.slashdot.org/story/25/03/18/2243230/researchers-engineer-bacteria-to-produce-plastics?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Researchers Engineer Bacteria To Produce Plastics](https://science.slashdot.org/story/25/03/18/2243230/researchers-engineer-bacteria-to-produce-plastics?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-19, 03:18:00](https://soylentnews.org/article.pl?sid=25/03/18/0159258&from=rss) - [Everything You Say to Your Echo Will be Sent to Amazon Starting on March 28](https://soylentnews.org/article.pl?sid=25/03/18/0159258&from=rss)
* [2025-03-19, 02:22:05](https://lobste.rs/s/jlm5ug/copyright_demoscene) - [Copyright and the demoscene](https://www.datagubbe.se/scenecop/)
* [2025-03-19, 02:06:09](https://lobste.rs/s/7tldrt/on_aesthetics_syntax_declarations_2018) - [On the Aesthetics of the Syntax of Declarations (2018)](https://www.gingerbill.org/article/2018/03/12/on-the-aesthetics-of-the-syntax-of-declarations/)
* [2025-03-19, 02:02:00](https://news.slashdot.org/story/25/03/18/2231255/italian-newspaper-says-it-has-published-worlds-first-ai-generated-edition?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Italian Newspaper Says It Has Published World's First AI-Generated Edition](https://news.slashdot.org/story/25/03/18/2231255/italian-newspaper-says-it-has-published-worlds-first-ai-generated-edition?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-19, 01:25:00](https://it.slashdot.org/story/25/03/18/2226205/microsoft-isnt-fixing-8-year-old-shortcut-exploit-abused-for-spying?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Isn't Fixing 8-Year-Old Shortcut Exploit Abused For Spying](https://it.slashdot.org/story/25/03/18/2226205/microsoft-isnt-fixing-8-year-old-shortcut-exploit-abused-for-spying?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-19, 00:45:00](https://mobile.slashdot.org/story/25/03/18/2220249/gavin-newsom-is-reportedly-sending-burner-phones-to-tech-ceos?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Gavin Newsom Is Reportedly Sending Burner Phones To Tech CEOs](https://mobile.slashdot.org/story/25/03/18/2220249/gavin-newsom-is-reportedly-sending-burner-phones-to-tech-ceos?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-19, 00:21:42](https://lobste.rs/s/xgdq8e/why_i_love_set) - [Why I Love SET](https://franklantz.substack.com/p/why-i-love-set)
* [2025-03-19, 00:12:13](https://lobste.rs/s/ud9f7q/greptimedb_leads_cold_run_performance_on) - [GreptimeDB Leads in Cold Run Performance on ClickHouse’s billion JSON doc benchmark](https://greptime.com/blogs/2025-03-18-jsonbench-greptimedb-performance)
* [2025-03-19, 00:01:00](https://entertainment.slashdot.org/story/25/03/18/2052244/us-music-streaming-tops-100-million-subscribers-vinyl-outsells-cds-for-third-year?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [US Music Streaming Tops 100 Million Subscribers; Vinyl Outsells CDs For Third Year](https://entertainment.slashdot.org/story/25/03/18/2052244/us-music-streaming-tops-100-million-subscribers-vinyl-outsells-cds-for-third-year?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-18, 23:55:17](https://news.ycombinator.com/item?id=43406710) - [Make Ubuntu packages 90% faster by rebuilding them](https://gist.github.com/jwbee/7e8b27e298de8bbbf8abfa4c232db097)
* [2025-03-18, 23:20:00](https://science.slashdot.org/story/25/03/18/2258246/starliner-astronauts-return-to-earth-after-more-than-9-months-in-space?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Starliner Astronauts Return To Earth After More Than 9 Months In Space](https://science.slashdot.org/story/25/03/18/2258246/starliner-astronauts-return-to-earth-after-more-than-9-months-in-space?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-18, 22:40:00](https://news.slashdot.org/story/25/03/18/2040214/ftc-removes-posts-critical-of-amazon-microsoft-and-ai-companies?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [FTC Removes Posts Critical of Amazon, Microsoft, and AI Companies](https://news.slashdot.org/story/25/03/18/2040214/ftc-removes-posts-critical-of-amazon-microsoft-and-ai-companies?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-18, 22:33:00](https://soylentnews.org/article.pl?sid=25/03/18/0153234&from=rss) - [People are Using Google's New AI Model to Remove Watermarks From Images](https://soylentnews.org/article.pl?sid=25/03/18/0153234&from=rss)
* [2025-03-18, 22:05:26](https://lobste.rs/s/vuvvku/announcing_fedora_linux_42_beta) - [Announcing Fedora Linux 42 Beta](https://fedoramagazine.org/announcing-fedora-linux-42-beta/)
* [2025-03-18, 22:00:00](https://tech.slashdot.org/story/25/03/18/2015234/vws-cheapest-ev-is-first-to-use-rivian-software?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [VW's Cheapest EV Is First To Use Rivian Software](https://tech.slashdot.org/story/25/03/18/2015234/vws-cheapest-ev-is-first-to-use-rivian-software?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-18, 21:31:09](https://lobste.rs/s/h22rcm/why_snes_hardware_is_running_faster_than) - [Why SNES hardware is running faster than expected—and why it’s a problem](https://arstechnica.com/gaming/2025/03/this-small-snes-timing-issue-is-causing-big-speedrun-problems/)
* [2025-03-18, 21:20:00](https://yro.slashdot.org/story/25/03/18/209246/dutch-parliament-calls-for-end-to-dependence-on-us-software-companies?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Dutch Parliament Calls For End To Dependence On US Software Companies](https://yro.slashdot.org/story/25/03/18/209246/dutch-parliament-calls-for-end-to-dependence-on-us-software-companies?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-18, 20:44:14](https://news.ycombinator.com/item?id=43404858) - [Nvidia Dynamo: A Datacenter Scale Distributed Inference Serving Framework](https://github.com/ai-dynamo/dynamo)
* [2025-03-18, 20:40:00](https://tech.slashdot.org/story/25/03/18/200223/gm-taps-nvidia-to-boost-its-self-driving-projects?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [GM Taps Nvidia To Boost Its Self-Driving Projects](https://tech.slashdot.org/story/25/03/18/200223/gm-taps-nvidia-to-boost-its-self-driving-projects?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-18, 20:31:22](https://news.ycombinator.com/item?id=43404679) - [Turkish university annuls Erdogan rival's degree, preventing run for president](https://www.reuters.com/world/asia-pacific/istanbul-university-annuls-istanbul-mayor-imamoglus-diploma-over-irregularities-2025-03-18/)
* [2025-03-18, 20:25:27](https://news.ycombinator.com/item?id=43404617) - [A Tale of Four Kernels [pdf] (2008)](https://users.csc.calpoly.edu/~djanzen/courses/509S09/papers/FourKernels.pdf)
* [2025-03-18, 20:20:09](https://news.ycombinator.com/item?id=43404548) - [Show HN: \"Git who\" – A new CLI tool for industrial-scale Git blaming](https://github.com/sinclairtarget/git-who)
* [2025-03-18, 20:08:05](https://lobste.rs/s/dhfjyu/introducing_two_new_pebbleos_watches) - [Introducing two new PebbleOS watches](https://ericmigi.com/blog/introducing-two-new-pebbleos-watches)
* [2025-03-18, 20:01:00](https://tech.slashdot.org/story/25/03/18/201213/nvidia-reveals-next-gen-ai-chips-roadmap-through-2028?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Nvidia Reveals Next-Gen AI Chips, Roadmap Through 2028](https://tech.slashdot.org/story/25/03/18/201213/nvidia-reveals-next-gen-ai-chips-roadmap-through-2028?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-18, 19:43:39](https://lobste.rs/s/jngfmq/bisecting_regressions_fedora) - [Bisecting Regressions in Fedora Silverblue [2024]](https://enblog.eischmann.cz/2024/02/15/bisecting-regressions-in-fedora-silverblue/)
* [2025-03-18, 19:20:00](https://yro.slashdot.org/story/25/03/18/1918240/us-appeals-court-rejects-copyrights-for-ai-generated-art?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [US Appeals Court Rejects Copyrights For AI-Generated Art](https://yro.slashdot.org/story/25/03/18/1918240/us-appeals-court-rejects-copyrights-for-ai-generated-art?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-18, 19:03:22](https://lobste.rs/s/ueg9lr/patterns_for_modeling_data_with) - [Patterns for modeling data with absolutely no NULLs?](https://lobste.rs/s/ueg9lr/patterns_for_modeling_data_with)
* [2025-03-18, 18:56:53](https://news.ycombinator.com/item?id=43403377) - [PeerTube v7.1 Is Out](https://joinpeertube.org/news/release-7.1)
* [2025-03-18, 18:17:33](https://news.ycombinator.com/item?id=43402790) - [US appeals court rules AI generated art cannot be copyrighted](https://www.reuters.com/world/us/us-appeals-court-rejects-copyrights-ai-generated-art-lacking-human-creator-2025-03-18/)
* [2025-03-18, 18:10:00](https://news.slashdot.org/story/25/03/18/1734252/vance-slams-globalization-for-hampering-american-innovation?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Vance Slams Globalization For Hampering American Innovation](https://news.slashdot.org/story/25/03/18/1734252/vance-slams-globalization-for-hampering-american-innovation?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-18, 17:49:00](https://soylentnews.org/article.pl?sid=25/03/18/0150258&from=rss) - [Unearthed Notebooks Shed Light on Victorian Genius Who Inspired Einstein](https://soylentnews.org/article.pl?sid=25/03/18/0150258&from=rss)
* [2025-03-18, 17:42:21](https://news.ycombinator.com/item?id=43402315) - [Ask HN: How Do I Escape Homelessness After Rebuilding My Mental Health?](https://news.ycombinator.com/item?id=43402315)
* [2025-03-18, 17:30:13](https://news.ycombinator.com/item?id=43402149) - [HTTrack Website Copier](https://www.httrack.com/)
* [2025-03-18, 17:30:00](https://tech.slashdot.org/story/25/03/18/1621244/the-first-new-pebble-smartwatches-are-coming-later-this-year?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [The First New Pebble Smartwatches Are Coming Later This Year](https://tech.slashdot.org/story/25/03/18/1621244/the-first-new-pebble-smartwatches-are-coming-later-this-year?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-18, 17:27:46](https://news.ycombinator.com/item?id=43402115) - [Amazon to kill off local Alexa processing, all voice requests shipped to cloud](https://www.theregister.com/2025/03/17/amazon_kills_on_device_alexa/)
* [2025-03-18, 17:26:51](https://news.ycombinator.com/item?id=43402102) - [Verification-First Development](https://buttondown.com/hillelwayne/archive/verification-first-development/)
* [2025-03-18, 17:07:39](https://news.ycombinator.com/item?id=43401855) - [Show HN: I made a tool to port tweets to Bluesky mantaining their original date](https://bluemigrate.com)
* [2025-03-18, 17:01:16](https://news.ycombinator.com/item?id=43401772) - [Spaceium Inc (YC S24) Is Hiring a Software Engineer](https://www.ycombinator.com/companies/spaceium-inc/jobs/XGMVnH3-software-engineer)
* [2025-03-18, 16:40:00](https://entertainment.slashdot.org/story/25/03/18/1634231/why-are-the-most-expensive-netflix-movies-also-the-worst?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Why Are the Most Expensive Netflix Movies Also the Worst?](https://entertainment.slashdot.org/story/25/03/18/1634231/why-are-the-most-expensive-netflix-movies-also-the-worst?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-18, 16:36:20](https://news.ycombinator.com/item?id=43401421) - [Preview: Amazon S3 Tables and Lakehouse in DuckDB](https://duckdb.org/2025/03/14/preview-amazon-s3-tables.html)
* [2025-03-18, 16:23:21](https://news.ycombinator.com/item?id=43401245) - [Apple restricts Pebble from being awesome with iPhones](https://ericmigi.com/blog/apple-restricts-pebble-from-being-awesome-with-iphones/)
* [2025-03-18, 16:18:08](https://news.ycombinator.com/item?id=43401179) - [Designing Electronics That Work](https://www.hscott.net/designing-electronics-that-work/)
* [2025-03-18, 16:08:49](https://lobste.rs/s/a2gqkn/real_failure_rate_ebs) - [The Real Failure Rate of EBS](https://planetscale.com/blog/the-real-fail-rate-of-ebs)
* [2025-03-18, 15:59:27](https://news.ycombinator.com/item?id=43400989) - [Two new PebbleOS watches](https://ericmigi.com/blog/introducing-two-new-pebbleos-watches/)
* [2025-03-18, 15:43:41](https://lobste.rs/s/fnx5fv/recyling_oneplus_6t_into_kubernetes_node) - [Recyling a OnePlus 6T into a Kubernetes Node](https://gabrielsimmer.com/blog/kubernetes-plus-oneplus)
* [2025-03-18, 13:22:42](https://lobste.rs/s/qvnjtz/hexagons_beyond_flexible_responsive) - [Hexagons and Beyond: Flexible, Responsive Grid Patterns, Sans Media Queries (2021)](https://css-tricks.com/hexagons-and-beyond-flexible-responsive-grid-patterns-sans-media-queries/)
* [2025-03-18, 13:07:00](https://soylentnews.org/article.pl?sid=25/03/17/128219&from=rss) - [On the Road to Idiocracy](https://soylentnews.org/article.pl?sid=25/03/17/128219&from=rss)
* [2025-03-18, 12:18:29](https://news.ycombinator.com/item?id=43398518) - [Google to buy Wiz for $32B](https://www.reuters.com/technology/cybersecurity/google-agrees-buy-cybersecurity-startup-wiz-32-bln-ft-reports-2025-03-18/)
* [2025-03-18, 11:18:33](https://lobste.rs/s/ogaalf/i_don_t_think_error_handling_is_solved) - [I don't think error handling is a solved problem in language design](https://utcc.utoronto.ca/~cks/space/blog/programming/ErrorHandlingNotSolvedProblem)
* [2025-03-18, 11:17:44](https://news.ycombinator.com/item?id=43398081) - [Show HN: I made a live multiplayer Minesweeper game](https://www.minesweeperpro.com/)
* [2025-03-18, 10:26:48](https://lobste.rs/s/otthd0/society_lost_focus) - [A Society That Lost Focus](https://ploum.net/2024-03-18-lost-focus.html)
* [2025-03-18, 10:07:21](https://lobste.rs/s/0sf074/why_i_m_no_longer_talking_architects_about) - [Why I'm No Longer Talking to Architects About Microservices](https://blog.container-solutions.com/why-im-no-longer-talking-to-architects-about-microservices)
* [2025-03-18, 08:24:00](https://soylentnews.org/article.pl?sid=25/03/17/126247&from=rss) - [Forget Windows 11, SteamOS for Desktops May be Released Soon](https://soylentnews.org/article.pl?sid=25/03/17/126247&from=rss)
* [2025-03-18, 07:59:50](https://news.ycombinator.com/item?id=43396735) - [Block YouTube ads on AppleTV by decrypting and stripping ads from Profobuf (2022)](https://ericdraken.com/pfsense-decrypt-ad-traffic/)
* [2025-03-18, 07:55:58](https://lobste.rs/s/1o6zda/slack_art_being_busy_without_getting) - [Slack: The Art of Being Busy Without Getting Anything Done](https://matduggan.com/slack-the-art-of-being-busy-without-getting-anything-done/)
* [2025-03-18, 07:37:04](https://lobste.rs/s/0pwhse/nginx_rejects_dark_mode_support_for_error) - [Nginx Rejects Dark Mode Support For Error Pages](https://www.phoronix.com/news/Nginx-Dark-Mode-Errors-Rejected)
* [2025-03-18, 07:13:34](https://lobste.rs/s/sgyyww/stop_using_recommending_react) - [Stop Using and Recommending React](https://blog.lusito.info/stop-using-and-recommending-react.html)
* [2025-03-18, 06:15:22](https://lobste.rs/s/1htmqf/extracting_content_from_lcp_protected) - [Extracting content from an LCP \"protected\" ePub](https://shkspr.mobi/blog/2025/03/towards-extracting-content-from-an-lcp-protected-epub/)
* [2025-03-18, 03:38:00](https://soylentnews.org/article.pl?sid=25/03/17/123238&from=rss) - [Chaos in Gravity - the Quantum Based Magnetic Monopole of Mass?](https://soylentnews.org/article.pl?sid=25/03/17/123238&from=rss)
* [2025-03-18, 02:42:16](https://lobste.rs/s/gqyrxk/can_we_consider_self_promo_discussion_off) - [Can we consider self-promo discussion off-topic?](https://lobste.rs/s/gqyrxk/can_we_consider_self_promo_discussion_off)
* [2025-03-18, 01:52:18](https://news.ycombinator.com/item?id=43394951) - [20 Years of YC / HN](https://vickiboykis.com/2025/03/17/20-years-of-yc/)
* [2025-03-17, 23:35:11](https://lobste.rs/s/jtk4tx/gimp_3_0_released) - [GIMP 3.0 Released](https://www.gimp.org/news/2025/03/16/gimp-3-0-released/)
* [2025-03-17, 22:53:00](https://soylentnews.org/article.pl?sid=25/03/15/1626204&from=rss) - [OpenAI Wants All The Data And For US Law To Apply Everywhere](https://soylentnews.org/article.pl?sid=25/03/15/1626204&from=rss)
* [2025-03-17, 19:23:08](https://lobste.rs/s/hqxvb6/atrocious_state_binary_compatibility_on) - [The Atrocious State Of Binary Compatibility on Linux and How To Address It](https://jangafx.com/insights/linux-binary-compatibility)
* [2025-03-17, 18:11:00](https://soylentnews.org/article.pl?sid=25/03/15/1622220&from=rss) - [Six Weeks of CloudFlare Stalling; Still Blocking Niche Browsers](https://soylentnews.org/article.pl?sid=25/03/15/1622220&from=rss)
* [2025-03-17, 17:36:20](https://lobste.rs/s/s5p1ng/announcing_snix) - [Announcing Snix](https://snix.dev/blog/announcing-snix/)
* [2025-03-17, 17:07:43](https://lobste.rs/s/7iel5b/rhombus_programming_language) - [The Rhombus Programming Language](https://rhombus-lang.org)
* [2025-03-17, 13:23:00](https://soylentnews.org/article.pl?sid=25/03/15/1619204&from=rss) - [NIST Selects HQC as Fifth Algorithm for Post-Quantum Encryption](https://soylentnews.org/article.pl?sid=25/03/15/1619204&from=rss)
* [2025-03-17, 11:10:11](https://lobste.rs/s/dmuad3/mitigating_sourcehut_s_partial_outage) - [Mitigating SourceHut's partial outage caused by aggressive crawlers](https://status.sr.ht/issues/2025-03-17-git.sr.ht-llms/)
* [2025-03-17, 08:36:00](https://soylentnews.org/article.pl?sid=25/03/15/1617256&from=rss) - [World's Smallest Microcontroller](https://soylentnews.org/article.pl?sid=25/03/15/1617256&from=rss)
* [2025-03-17, 03:50:00](https://soylentnews.org/article.pl?sid=25/03/15/1220208&from=rss) - [ESA Cuts the Ribbon at 34,000-Core HPC Center](https://soylentnews.org/article.pl?sid=25/03/15/1220208&from=rss)
* [2025-03-16, 23:07:00](https://soylentnews.org/article.pl?sid=25/03/15/1540201&from=rss) - [A New Age for Geothermal](https://soylentnews.org/article.pl?sid=25/03/15/1540201&from=rss)
* [2025-03-16, 18:20:00](https://soylentnews.org/article.pl?sid=25/03/15/141211&from=rss) - [Apple Encrypted Data Row Case Begins in Secret](https://soylentnews.org/article.pl?sid=25/03/15/141211&from=rss)
* [2025-03-16, 13:34:00](https://soylentnews.org/article.pl?sid=25/03/15/1357206&from=rss) - [5 Years After Covid-19 Became a Pandemic, Are We Ready for What's Next?](https://soylentnews.org/article.pl?sid=25/03/15/1357206&from=rss)
* [2025-03-16, 12:42:02](https://news.ycombinator.com/item?id=43378571) - [Rust on the RP2350 (2024)](https://thejpster.org.uk/blog/blog-2024-08-08/)
* [2025-03-16, 12:19:29](https://news.ycombinator.com/item?id=43378436) - [Visualising data structures and algorithms through animation](https://visualgo.net/en)
* [2025-03-16, 11:36:23](https://news.ycombinator.com/item?id=43378226) - [Artificial Intelligence: Foundations of Computational Agents](https://artint.info/index.html)
* [2025-03-16, 10:32:02](https://news.ycombinator.com/item?id=43377998) - [SheepShaver is an open source PowerPC Apple Macintosh emulator](https://www.emaculation.com/doku.php/sheepshaver)
* [2025-03-16, 08:46:00](https://soylentnews.org/article.pl?sid=25/03/15/1228252&from=rss) - [Sidewinder Advanced Persistent Threat (APT) Shifts to Targeting of Nuclear, Maritime Orgs](https://soylentnews.org/article.pl?sid=25/03/15/1228252&from=rss)
* [2025-03-16, 04:01:00](https://soylentnews.org/article.pl?sid=25/03/15/1558246&from=rss) - [SpaceX Launches Astronauts for Long-Awaited International Space Station Crew Swap](https://soylentnews.org/article.pl?sid=25/03/15/1558246&from=rss)
* [2025-03-15, 23:40:27](https://news.ycombinator.com/item?id=43375918) - [Shopkeeper](https://www.robinsloan.com/newsletters/shopkeeper/)
* [2025-03-15, 23:17:00](https://soylentnews.org/article.pl?sid=25/03/14/1938229&from=rss) - [No Project is an Island: Why You Need SBOMs and Dependency Management](https://soylentnews.org/article.pl?sid=25/03/14/1938229&from=rss)
* [2025-03-15, 18:33:00](https://soylentnews.org/article.pl?sid=25/03/14/1933241&from=rss) - [How a Rapidly Growing Population of Crocs Has Been Impacting Northern Territories Ecosystem](https://soylentnews.org/article.pl?sid=25/03/14/1933241&from=rss)
* [2025-03-15, 16:26:51](https://news.ycombinator.com/item?id=43373504) - [This is no world for an axolotl](https://english.elpais.com/eps/2025-03-15/this-is-no-world-for-an-axolotl.html)
* [2025-03-15, 13:48:00](https://soylentnews.org/politics/article.pl?sid=25/03/14/1930253&from=rss) - [Judge Calls Doge Firings A \"Sham\", Orders Thousands Of Workers To Be Reinstated Immediately](https://soylentnews.org/politics/article.pl?sid=25/03/14/1930253&from=rss)
* [2025-03-15, 12:55:10](https://news.ycombinator.com/item?id=43372227) - [Karatsuba Matrix Multiplication and Its Efficient Hardware Implementations](https://arxiv.org/abs/2501.08889)
* [2025-03-15, 11:20:48](https://news.ycombinator.com/item?id=43371781) - [Gnome / mutter triple buffering patch merged](https://gitlab.gnome.org/GNOME/mutter/-/merge_requests/1441)
* [2025-03-15, 09:07:00](https://soylentnews.org/article.pl?sid=25/03/14/1113259&from=rss) - [Bad News for Low Orbit Satellites: Earth's Thermosphere is Shrinking](https://soylentnews.org/article.pl?sid=25/03/14/1113259&from=rss)
* [2025-03-15, 04:22:00](https://soylentnews.org/article.pl?sid=25/03/14/115251&from=rss) - [AMD's Zen 6-Based Desktop Processors May Feature Up to 24 Cores](https://soylentnews.org/article.pl?sid=25/03/14/115251&from=rss)
* [2025-03-15, 00:42:22](https://news.ycombinator.com/item?id=43368863) - [SheepIt Render Farm server code goes open source](https://gitlab.com/sheepitrenderfarm)
