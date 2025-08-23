# [News Summary](https://kherrick.github.io/news-summary/)

## Cybersecurity and Privacy

* [Congressman Proposes Bringing Back Letters of Marque for Cyber Privateers](https://soylentnews.org/article.pl?sid=25/08/22/0547201&amp;from=rss)

* [Amid Service Disruption, Colt Telecom Confirms 'Criminal Group' Accessed Their Data, As Ransomware Gang Threatens to Sell It](https://it.slashdot.org/story/25/08/23/0910226/amid-service-disruption-colt-telecom-confirms-criminal-group-accessed-their-data-as-ransomware-gang-threatens-to-sell-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [T-Mobile Claimed Selling Location Data Without Consent is Legal—Judges Disagree](https://soylentnews.org/article.pl?sid=25/08/22/010203&amp;from=rss)

* [Websites and web developers mostly don't care about client-side problems](https://utcc.utoronto.ca/~cks/space/blog/web/WebsitesDontCareAboutClients)

## Artificial Intelligence and Technology Advancements

* [Making Cash Off 'AI Slop': the Surreal Video Business Taking Over the Web](https://tech.slashdot.org/story/25/08/23/022223/making-cash-off-ai-slop-the-surreal-video-business-taking-over-the-web?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Google Says It Dropped the Energy Cost of AI Queries By 33x In One Year](https://tech.slashdot.org/story/25/08/22/2118234/google-says-it-dropped-the-energy-cost-of-ai-queries-by-33x-in-one-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [AI Chatbots Undermining the Enlightenment](https://maggieappleton.com/ai-enlightenment)

## Programming and Software Development

* [Waitgroups: What they are, how to use them and what changed with Go 1.25](https://mfbmina.dev/en/posts/waitgroups/)

* [Writing Speed-of-Light Flash Attention for 5090 in CUDA C++](https://gau-nernst.github.io/fa-5090/)

* [Retry Loop Retry](https://matklad.github.io/2025/08/23/retry-loop-retry.html)

* [The 9 Go test assertions I use (and why)](https://www.alexedwards.net/blog/the-9-go-test-assertions-i-use)

## Environmental Issues and Scientific Discoveries

* [Tree Species Face Unprecedented Climate Shifts Across Their Ranges](https://soylentnews.org/article.pl?sid=25/08/21/1213229&amp;from=rss)

* [Scientists 3D Print Inside a Living Cell](https://soylentnews.org/article.pl?sid=25/08/18/126258&amp;from=rss)

* [Charged Drops Don't Splash](https://soylentnews.org/article.pl?sid=25/08/19/0039216&amp;from=rss)

## Cultural and Societal Shifts

* [Hollywood's Newest Formula For Success: Rereleasing Old Movies](https://entertainment.slashdot.org/story/25/08/23/0134245/hollywoods-newest-formula-for-success-rereleasing-old-movies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [If AI Takes Most of Our Jobs, Money as We Know It Will be Over. What Then?](https://soylentnews.org/article.pl?sid=25/08/20/033241&amp;from=rss)

* [Wikipedia Loses Challenge Against Online Safety Act, but the Door is Open for a Challenge](https://soylentnews.org/article.pl?sid=25/08/18/122222&amp;from=rss)

## Miscellaneous

* [I Made a Floppy Disk from Scratch](https://kottke.org/25/08/i-made-a-floppy-disk-from-scratch)

* [Manim: Animation engine for explanatory math videos](https://github.com/3b1b/manim)

* [Librebox: An open source, Roblox-compatible game engine](https://github.com/librebox-devs/librebox-demo)

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

* [2025-08-23, 15:35:00](https://soylentnews.org/article.pl?sid=25/08/22/0547201&amp;from=rss) - [Congressman Proposes Bringing Back Letters of Marque for Cyber Privateers](https://soylentnews.org/article.pl?sid=25/08/22/0547201&amp;from=rss)
* [2025-08-23, 15:34:00](https://tech.slashdot.org/story/25/08/23/022223/making-cash-off-ai-slop-the-surreal-video-business-taking-over-the-web?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Making Cash Off &apos;AI Slop&apos;: the Surreal Video Business Taking Over the Web](https://tech.slashdot.org/story/25/08/23/022223/making-cash-off-ai-slop-the-surreal-video-business-taking-over-the-web?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-23, 15:21:51](https://news.ycombinator.com/item?id=44996623) - [Waitgroups: What they are, how to use them and what changed with Go 1.25](https://mfbmina.dev/en/posts/waitgroups/)
* [2025-08-23, 15:15:38](https://news.ycombinator.com/item?id=44996583) - [Using game theory to explain how institutions arise to manage limited resources](https://phys.org/news/2025-08-game-theory-naturally-limited-resources.html)
* [2025-08-23, 14:34:00](https://it.slashdot.org/story/25/08/23/0910226/amid-service-disruption-colt-telecom-confirms-criminal-group-accessed-their-data-as-ransomware-gang-threatens-to-sell-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amid Service Disruption, Colt Telecom Confirms &apos;Criminal Group&apos; Accessed Their Data, As Ransomware Gang Threatens to Sell It](https://it.slashdot.org/story/25/08/23/0910226/amid-service-disruption-colt-telecom-confirms-criminal-group-accessed-their-data-as-ransomware-gang-threatens-to-sell-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-23, 14:23:14](https://lobste.rs/s/krs8sm/sxo_optimized_server_side_jsx_build) - [SXO :: Optimized Server-Side JSX. Build Simple. Build Fast](https://github.com/gc-victor/sxo)
* [2025-08-23, 14:22:12](https://lobste.rs/s/7yj16h/big_o) - [Big O](https://samwho.dev/big-o/)
* [2025-08-23, 14:01:53](https://news.ycombinator.com/item?id=44996058) - [Show HN: I Made the Hardest Focus App](https://apps.apple.com/us/app/pocket-the-hardest-focus-app/id6746587044)
* [2025-08-23, 13:59:40](https://lobste.rs/s/gtooez/retry_loop_retry) - [Retry Loop Retry](https://matklad.github.io/2025/08/23/retry-loop-retry.html)
* [2025-08-23, 13:08:38](https://lobste.rs/s/57w3yx/ai_chatbots_undermining_enlightenment) - [AI Chatbots Undermining the Enlightenment](https://maggieappleton.com/ai-enlightenment)
* [2025-08-23, 13:07:33](https://lobste.rs/s/grwfgz/rue_programming_language_is_minimal) - [rue: A programming language that is a minimal subset of Rust](https://github.com/steveklabnik/rue)
* [2025-08-23, 13:00:00](https://entertainment.slashdot.org/story/25/08/23/0134245/hollywoods-newest-formula-for-success-rereleasing-old-movies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hollywood&apos;s Newest Formula For Success: Rereleasing Old Movies](https://entertainment.slashdot.org/story/25/08/23/0134245/hollywoods-newest-formula-for-success-rereleasing-old-movies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-23, 12:54:01](https://news.ycombinator.com/item?id=44995640) - [RFC 9839 and Bad Unicode](https://www.tbray.org/ongoing/When/202x/2025/08/14/RFC9839)
* [2025-08-23, 12:53:15](https://lobste.rs/s/qrs9w8/rfc_9839_bad_unicode) - [RFC 9839 and Bad Unicode](https://www.tbray.org/ongoing/When/202x/2025/08/14/RFC9839)
* [2025-08-23, 12:29:02](https://news.ycombinator.com/item?id=44995508) - [Writing Speed-of-Light Flash Attention for 5090 in CUDA C++](https://gau-nernst.github.io/fa-5090/)
* [2025-08-23, 11:39:15](https://news.ycombinator.com/item?id=44995234) - [Rethinking the Linux cloud stack for confidential VMs](https://lwn.net/Articles/1030818/)
* [2025-08-23, 11:38:46](https://lobste.rs/s/fs6bkk/rethinking_linux_cloud_stack_for) - [Rethinking the Linux cloud stack for confidential VMs](https://lwn.net/Articles/1030818/)
* [2025-08-23, 11:22:15](https://news.ycombinator.com/item?id=44995147) - [Librebox: An open source, Roblox-compatible game engine](https://github.com/librebox-devs/librebox-demo)
* [2025-08-23, 11:00:00](https://soylentnews.org/article.pl?sid=25/08/22/0544206&amp;from=rss) - [Heat-Styling Hair Care Products Release Billions of Nanoparticles That Can Accumulate in Lungs](https://soylentnews.org/article.pl?sid=25/08/22/0544206&amp;from=rss)
* [2025-08-23, 10:32:43](https://news.ycombinator.com/item?id=44994918) - [I Made a Floppy Disk from Scratch](https://kottke.org/25/08/i-made-a-floppy-disk-from-scratch)
* [2025-08-23, 10:00:00](https://tech.slashdot.org/story/25/08/23/0124202/libreoffice-258-slams-the-door-on-windows-7-and-8x?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LibreOffice 25.8 Slams the Door On Windows 7 and 8.x](https://tech.slashdot.org/story/25/08/23/0124202/libreoffice-258-slams-the-door-on-windows-7-and-8x?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-23, 09:20:26](https://news.ycombinator.com/item?id=44994590) - [Developer&apos;s block](https://underlap.org/developers-block/)
* [2025-08-23, 09:17:30](https://lobste.rs/s/fqw11d/developer_s_block) - [Developer&apos;s block](https://underlap.org/developers-block/)
* [2025-08-23, 07:40:44](https://news.ycombinator.com/item?id=44994090) - [World Wide Lightning Location Network](https://wwlln.net/)
* [2025-08-23, 07:35:49](https://news.ycombinator.com/item?id=44994071) - [Manim: Animation engine for explanatory math videos](https://github.com/3b1b/manim)
* [2025-08-23, 07:26:40](https://lobste.rs/s/aqw2si/understanding_jujutsu_bookmarks) - [Understanding Jujutsu bookmarks](https://neugierig.org/software/blog/2025/08/jj-bookmarks.html)
* [2025-08-23, 07:00:00](https://news.slashdot.org/story/25/08/23/0120237/us-is-throwing-away-the-critical-minerals-it-needs-analysis-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Is Throwing Away the Critical Minerals It Needs, Analysis Shows](https://news.slashdot.org/story/25/08/23/0120237/us-is-throwing-away-the-critical-minerals-it-needs-analysis-shows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-23, 06:10:00](https://soylentnews.org/article.pl?sid=25/08/22/019206&amp;from=rss) - [New Research Ferments the Perfect Recipe for Fine Chocolate Flavour](https://soylentnews.org/article.pl?sid=25/08/22/019206&amp;from=rss)
* [2025-08-23, 05:09:11](https://news.ycombinator.com/item?id=44993353) - [Websites and web developers mostly don&apos;t care about client-side problems](https://utcc.utoronto.ca/~cks/space/blog/web/WebsitesDontCareAboutClients)
* [2025-08-23, 03:30:00](https://tech.slashdot.org/story/25/08/22/2118234/google-says-it-dropped-the-energy-cost-of-ai-queries-by-33x-in-one-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Says It Dropped the Energy Cost of AI Queries By 33x In One Year](https://tech.slashdot.org/story/25/08/22/2118234/google-says-it-dropped-the-energy-cost-of-ai-queries-by-33x-in-one-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-23, 03:08:06](https://lobste.rs/s/tbo1nr/materialized_views_are_obviously_useful) - [Materialized views are obviously useful](https://sophiebits.com/2025/08/22/materialized-views-are-obviously-useful)
* [2025-08-23, 01:25:00](https://soylentnews.org/article.pl?sid=25/08/22/010203&amp;from=rss) - [T-Mobile Claimed Selling Location Data Without Consent is Legal—Judges Disagree](https://soylentnews.org/article.pl?sid=25/08/22/010203&amp;from=rss)
* [2025-08-23, 01:14:05](https://lobste.rs/s/sxk1le/9_go_test_assertions_i_use_why) - [The 9 Go test assertions I use (and why)](https://www.alexedwards.net/blog/the-9-go-test-assertions-i-use)
* [2025-08-23, 00:59:02](https://news.ycombinator.com/item?id=44991884) - [My tips for using LLM agents to create software](https://efitz-thoughts.blogspot.com/2025/08/my-experience-creating-software-with_22.html)
* [2025-08-23, 00:20:00](https://tech.slashdot.org/story/25/08/22/2327213/bluesky-blocks-service-in-mississippi-over-age-assurance-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bluesky Blocks Service In Mississippi Over Age Assurance Law](https://tech.slashdot.org/story/25/08/22/2327213/bluesky-blocks-service-in-mississippi-over-age-assurance-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 23:40:00](https://hardware.slashdot.org/story/25/08/22/217232/meta-set-to-unveil-first-consumer-ready-smart-glasses-with-a-display-wristband?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Set To Unveil First Consumer-Ready Smart Glasses With a Display, Wristband](https://hardware.slashdot.org/story/25/08/22/217232/meta-set-to-unveil-first-consumer-ready-smart-glasses-with-a-display-wristband?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 23:00:00](https://it.slashdot.org/story/25/08/22/2059255/microsoft-reportedly-cuts-chinas-early-access-to-bug-disclosures-poc-exploit-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Reportedly Cuts China&apos;s Early Access to Bug Disclosures, PoC Exploit Code](https://it.slashdot.org/story/25/08/22/2059255/microsoft-reportedly-cuts-chinas-early-access-to-bug-disclosures-poc-exploit-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 22:59:56](https://lobste.rs/s/8bnfjy/on_use_llm_assistants_for_kernel) - [On the use of LLM assistants for kernel development](https://lwn.net/Articles/1032612/)
* [2025-08-22, 22:20:00](https://tech.slashdot.org/story/25/08/22/2036239/waymo-granted-first-permit-to-being-testing-autonomous-vehicles-in-nyc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Waymo Granted First Permit To Being Testing Autonomous Vehicles In NYC](https://tech.slashdot.org/story/25/08/22/2036239/waymo-granted-first-permit-to-being-testing-autonomous-vehicles-in-nyc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 22:00:00](https://meta.slashdot.org/story/25/08/22/2043255/meta-signs-10-billion-cloud-deal-with-google?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Signs $10 Billion Cloud Deal With Google](https://meta.slashdot.org/story/25/08/22/2043255/meta-signs-10-billion-cloud-deal-with-google?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 21:40:00](https://news.slashdot.org/story/25/08/22/2036256/record-solar-growth-keeps-chinas-co2-falling-in-first-half-of-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Record Solar Growth Keeps China&apos;s CO2 Falling in First Half of 2025](https://news.slashdot.org/story/25/08/22/2036256/record-solar-growth-keeps-chinas-co2-falling-in-first-half-of-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 21:00:00](https://news.slashdot.org/story/25/08/22/2029253/4chan-refuses-to-pay-uk-online-safety-act-fines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [4chan Refuses To Pay UK Online Safety Act Fines](https://news.slashdot.org/story/25/08/22/2029253/4chan-refuses-to-pay-uk-online-safety-act-fines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 20:39:00](https://soylentnews.org/article.pl?sid=25/08/21/1213229&amp;from=rss) - [Tree Species Face Unprecedented Climate Shifts Across Their Ranges](https://soylentnews.org/article.pl?sid=25/08/21/1213229&amp;from=rss)
* [2025-08-22, 20:20:00](https://news.slashdot.org/story/25/08/22/2020223/workers-need-better-protections-from-the-heat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Workers Need Better Protections From the Heat](https://news.slashdot.org/story/25/08/22/2020223/workers-need-better-protections-from-the-heat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 20:03:05](https://lobste.rs/s/ysmsfu/no_google_did_not_unilaterally_decide) - [No, Google Did Not Unilaterally Decide to Kill XSLT](https://meyerweb.com/eric/thoughts/2025/08/22/no-google-did-not-unilaterally-decide-to-kill-xslt/)
* [2025-08-22, 19:52:41](https://lobste.rs/s/0ktx6s/string_formatting_library_65_lines_c) - [A string formatting library in 65 lines of C++](https://riki.house/fmt)
* [2025-08-22, 19:30:58](https://lobste.rs/s/pc87c0/why_was_apache_kafka_created) - [Why Was Apache Kafka Created?](https://bigdatastream.substack.com/p/why-was-apache-kafka-created)
* [2025-08-22, 19:30:00](https://slashdot.org/story/25/08/22/1925255/europe-is-losing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Europe Is Losing](https://slashdot.org/story/25/08/22/1925255/europe-is-losing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 19:06:29](https://news.ycombinator.com/item?id=44988530) - [Nitro: A tiny but flexible init system and process supervisor](https://git.vuxu.org/nitro/about/)
* [2025-08-22, 19:04:51](https://lobste.rs/s/xltjpn/nitro_tiny_flexible_init_system_process) - [nitro: a tiny but flexible init system and process supervisor](https://git.vuxu.org/nitro/about/)
* [2025-08-22, 18:51:57](https://lobste.rs/s/kl2nwa/first_moq_cdn_cloudflare) - [The First MoQ CDN: Cloudflare](https://moq.dev/blog/first-cdn/)
* [2025-08-22, 18:47:30](https://news.ycombinator.com/item?id=44988271) - [Show HN: JavaScript-free (X)HTML Includes](https://github.com/Evidlo/xsl-website)
* [2025-08-22, 18:24:16](https://news.ycombinator.com/item?id=44987924) - [The first Media over QUIC CDN: Cloudflare](https://moq.dev/blog/first-cdn/)
* [2025-08-22, 17:26:27](https://lobste.rs/s/lsxzfy/optimizing_our_way_through_metroid) - [Optimizing our way through Metroid](https://antithesis.com/blog/2025/metroid/)
* [2025-08-22, 17:02:20](https://lobste.rs/s/rmga0q/bubbletea_rs_rust_implementation) - [bubbletea-rs: A rust implementation of Bubbletea](https://github.com/whit3rabbit/bubbletea-rs)
* [2025-08-22, 16:07:24](https://lobste.rs/s/u9v6jj/closing_nix_gap_from_environments) - [Closing the Nix Gap: From Environments to Packaged Applications for Rust](https://devenv.sh/blog/2025/08/22/closing-the-nix-gap-from-environments-to-packaged-applications-for-rust/)
* [2025-08-22, 15:56:00](https://soylentnews.org/article.pl?sid=25/08/21/123255&amp;from=rss) - [Adult Sites Are Stashing Exploit Code Inside Racy .svg Files](https://soylentnews.org/article.pl?sid=25/08/21/123255&amp;from=rss)
* [2025-08-22, 15:22:42](https://news.ycombinator.com/item?id=44985730) - [FFmpeg 8.0](https://ffmpeg.org/index.html#pr8.0)
* [2025-08-22, 14:48:27](https://lobste.rs/s/othw2q/go_is_still_not_good) - [Go is still not good](https://blog.habets.se/2025/07/Go-is-still-not-good.html)
* [2025-08-22, 14:08:37](https://lobste.rs/s/nhrlya/be_better_programmer_write_little_proofs) - [To be a better programmer, write little proofs in your head](https://the-nerve-blog.ghost.io/to-be-a-better-programmer-write-little-proofs-in-your-head/)
* [2025-08-22, 13:55:12](https://lobste.rs/s/ntruuu/lobsters_interview_with_matklad) - [Lobsters Interview with Matklad](https://lobste.rs/s/ntruuu/lobsters_interview_with_matklad)
* [2025-08-22, 12:24:03](https://lobste.rs/s/62si4z/i_m_too_dumb_for_zig_s_new_io_interface) - [I&apos;m too dumb for Zig&apos;s new IO interface](https://www.openmymind.net/Im-Too-Dumb-For-Zigs-New-IO-Interface/)
* [2025-08-22, 11:11:00](https://soylentnews.org/article.pl?sid=25/08/21/1154233&amp;from=rss) - [Teenagers Are Choosing to Study STEM Subjects. It&apos;s a Sign of the Times](https://soylentnews.org/article.pl?sid=25/08/21/1154233&amp;from=rss)
* [2025-08-22, 06:22:00](https://soylentnews.org/article.pl?sid=25/08/20/2255245&amp;from=rss) - [VW Introduces Monthly Subscription to Increase Car Power](https://soylentnews.org/article.pl?sid=25/08/20/2255245&amp;from=rss)
* [2025-08-22, 04:48:29](https://news.ycombinator.com/item?id=44981088) - [Top Secret: Automatically filter sensitive information](https://thoughtbot.com/blog/top-secret)
* [2025-08-22, 01:35:00](https://soylentnews.org/article.pl?sid=25/08/20/2242220&amp;from=rss) - [We Need to Become Unoptomizable](https://soylentnews.org/article.pl?sid=25/08/20/2242220&amp;from=rss)
* [2025-08-22, 00:39:07](https://lobste.rs/s/goaf6y/issue_anti_cheat_on_linux) - [The issue of anti-cheat on Linux](https://tulach.cc/the-issue-of-anti-cheat-on-linux/)
* [2025-08-21, 20:49:00](https://soylentnews.org/article.pl?sid=25/08/20/1759228&amp;from=rss) - [Uncovering the Fraudsters and Their Schemes Responsible for Polluting the Scientific Literature](https://soylentnews.org/article.pl?sid=25/08/20/1759228&amp;from=rss)
* [2025-08-21, 16:09:00](https://soylentnews.org/article.pl?sid=25/08/20/1743213&amp;from=rss) - [Physics of Badminton’s New Killer Spin Serve](https://soylentnews.org/article.pl?sid=25/08/20/1743213&amp;from=rss)
* [2025-08-21, 11:24:00](https://soylentnews.org/article.pl?sid=25/08/20/1736217&amp;from=rss) - [Mozilla Warns Germany Could Declare Ad Blockers Illegal](https://soylentnews.org/article.pl?sid=25/08/20/1736217&amp;from=rss)
* [2025-08-21, 06:38:00](https://soylentnews.org/article.pl?sid=25/08/20/033241&amp;from=rss) - [If AI Takes Most of Our Jobs, Money as We Know It Will be Over. What Then?](https://soylentnews.org/article.pl?sid=25/08/20/033241&amp;from=rss)
* [2025-08-21, 01:52:00](https://soylentnews.org/article.pl?sid=25/08/20/0153218&amp;from=rss) - [A Treatise on AI Chatbots Undermining the Enlightenment](https://soylentnews.org/article.pl?sid=25/08/20/0153218&amp;from=rss)
* [2025-08-20, 21:08:00](https://soylentnews.org/article.pl?sid=25/08/20/0149227&amp;from=rss) - [Whoops, They Did It Again](https://soylentnews.org/article.pl?sid=25/08/20/0149227&amp;from=rss)
* [2025-08-20, 17:52:00](https://news.ycombinator.com/item?id=44964294) - [The theory and practice of selling the Aga cooker (1935) [pdf]](https://comeadwithus.wordpress.com/wp-content/uploads/2012/08/the-theory-and-practice-of-selling-the-aga-cooker.pdf)
* [2025-08-20, 16:22:00](https://soylentnews.org/article.pl?sid=25/08/20/0132257&amp;from=rss) - [The Big Slow Church Move](https://soylentnews.org/article.pl?sid=25/08/20/0132257&amp;from=rss)
* [2025-08-20, 13:38:00](https://news.ycombinator.com/item?id=44961853) - [You can&apos;t grow cool-climate plants in hot climates](https://www.crimepaysbutbotanydoesnt.com/blog/why-you-cant-grow-cool-climate-plants-in-hot-climates)
* [2025-08-20, 11:35:00](https://soylentnews.org/article.pl?sid=25/08/20/0125237&amp;from=rss) - [How Chefs and Scientists Are Using Kombucha and Kimchi to Study Microbiology](https://soylentnews.org/article.pl?sid=25/08/20/0125237&amp;from=rss)
* [2025-08-20, 11:08:15](https://news.ycombinator.com/item?id=44960750) - [Shader Academy: Learn computer graphics by solving challenges](https://shaderacademy.com/)
* [2025-08-20, 06:48:00](https://soylentnews.org/article.pl?sid=25/08/19/1550241&amp;from=rss) - [Scientists Say Tool Can Sniff 5G Traffic, Launch &apos;Attacks&apos; Without Using Rogue Base Stations](https://soylentnews.org/article.pl?sid=25/08/19/1550241&amp;from=rss)
* [2025-08-20, 03:52:39](https://news.ycombinator.com/item?id=44958492) - [The Fancy Rug Dilemma](https://epan.land/essays/2025-8_FancyRugDilemma)
* [2025-08-20, 02:06:00](https://soylentnews.org/article.pl?sid=25/08/19/1547232&amp;from=rss) - [Can’t Pay, Won’t Pay: Impoverished Streaming Services are Driving Viewers Back to Piracy](https://soylentnews.org/article.pl?sid=25/08/19/1547232&amp;from=rss)
* [2025-08-19, 21:21:00](https://soylentnews.org/article.pl?sid=25/08/19/0050215&amp;from=rss) - [Attorneys General, HCA Settle Over Nurse Training Repayment Provisions](https://soylentnews.org/article.pl?sid=25/08/19/0050215&amp;from=rss)
* [2025-08-19, 20:25:06](https://news.ycombinator.com/item?id=44955923) - [From M1 MacBook to Arch Linux: A month-long experiment that became permanenent](https://www.ssp.sh/blog/macbook-to-arch-linux-omarchy/)
* [2025-08-19, 19:23:00](https://soylentnews.org/article.pl?sid=25/08/19/195256&amp;from=rss) - [Only 3 Stories in the Submissions Queue](https://soylentnews.org/article.pl?sid=25/08/19/195256&amp;from=rss)
* [2025-08-19, 19:12:50](https://news.ycombinator.com/item?id=44955159) - [ArduinoOS (2017)](https://github.com/DrBubble/ArduinoOS)
* [2025-08-19, 16:35:00](https://soylentnews.org/article.pl?sid=25/08/19/0044229&amp;from=rss) - [Federal Court Filing System Hit in Sweeping Hack](https://soylentnews.org/article.pl?sid=25/08/19/0044229&amp;from=rss)
* [2025-08-19, 15:43:37](https://news.ycombinator.com/item?id=44952895) - [450× Faster Joins with Index Condition Pushdown](https://readyset.io/blog/optimizing-straddled-joins-in-readyset-from-hash-joins-to-index-condition-pushdown)
* [2025-08-19, 15:39:15](https://news.ycombinator.com/item?id=44952836) - [Converting an online game to work without any JavaScript](https://bejofo.com/blog/no-js-game-case-study)
* [2025-08-19, 15:27:33](https://news.ycombinator.com/item?id=44952696) - [David Klein&apos;s TWA Posters (2018)](https://flashbak.com/david-kleins-magnificent-twa-posters-404428/)
* [2025-08-19, 14:36:10](https://news.ycombinator.com/item?id=44952018) - [WebR – R in the Browser](https://docs.r-wasm.org/webr/latest/)
* [2025-08-19, 11:53:00](https://soylentnews.org/article.pl?sid=25/08/19/0039216&amp;from=rss) - [Charged Drops Don&apos;t Splash](https://soylentnews.org/article.pl?sid=25/08/19/0039216&amp;from=rss)
* [2025-08-19, 11:39:47](https://news.ycombinator.com/item?id=44950482) - [I run a full Linux desktop in Docker just because I can](https://www.howtogeek.com/i-run-a-full-linux-desktop-in-docker-just-because-i-can/)
* [2025-08-19, 07:35:49](https://news.ycombinator.com/item?id=44949172) - [Lightning declines over shipping lanes following regulation of sulfur emissions](https://theconversation.com/the-world-regulated-sulfur-in-ship-fuels-and-the-lightning-stopped-249445)
* [2025-08-19, 07:05:00](https://soylentnews.org/article.pl?sid=25/08/18/126258&amp;from=rss) - [Scientists 3D Print Inside a Living Cell](https://soylentnews.org/article.pl?sid=25/08/18/126258&amp;from=rss)
* [2025-08-19, 02:20:00](https://soylentnews.org/article.pl?sid=25/08/18/122222&amp;from=rss) - [Wikipedia Loses Challenge Against Online Safety Act, but the Door is Open for a Challenge](https://soylentnews.org/article.pl?sid=25/08/18/122222&amp;from=rss)
