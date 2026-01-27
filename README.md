# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Privacy

* [Ice Drives Unmarked Cars. This Public Database Tracks Their License Plates](https://theintercept.com/2026/01/02/ice-license-plates-database/) ([comments](https://news.ycombinator.com/item?id=46784611))

* [Microsoft obeys court orders to provide Windows BitLocker recovery keys](https://www.windowscentral.com/microsoft/windows-11/microsoft-bitlocker-encryption-keys-give-fbi-legal-order-privacy-nightmare) ([comments](https://lobste.rs/s/ifyc4b/microsoft_obeys_court_orders_provide))

* [Lawsuit Alleges That WhatsApp Has No End-to-End Encryption](https://it.slashdot.org/story/26/01/27/0550249/lawsuit-alleges-that-whatsapp-has-no-end-to-end-encryption?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://it.slashdot.org/story/26/01/27/0550249/lawsuit-alleges-that-whatsapp-has-no-end-to-end-encryption?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Historic and Archaeological Discoveries

* [430k-year-old well-preserved wooden tools are the oldest ever found](https://www.nytimes.com/2026/01/26/science/archaeology-neanderthals-tools.html) ([comments](https://news.ycombinator.com/item?id=46781530))

* [Ancient “Mosaic” Fossils Found in Morocco Challenge the Timeline of Human Evolution](https://soylentnews.org/article.pl?sid=26/01/23/1016236&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/01/23/1016236&amp;from=rss))

* [Hygienic Conditions in Pompeii's Early Baths Were Poor](https://soylentnews.org/article.pl?sid=26/01/23/1012244&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/01/23/1012244&amp;from=rss))

## AI and Advanced Computing

* [Reflections of a Developer on LLMs in January 2026](https://rmoff.net/2026/01/27/reflections-of-a-developer-on-llms-in-january-2026/) ([comments](https://lobste.rs/s/7orzxp/reflections_developer_on_llms_january))

* [How Anthropic Built Claude: Buy Books, Slice Spines, Scan Pages, Recycle the Remains](https://news.slashdot.org/story/26/01/27/146242/how-anthropic-built-claude-buy-books-slice-spines-scan-pages-recycle-the-remains?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.slashdot.org/story/26/01/27/146242/how-anthropic-built-claude-buy-books-slice-spines-scan-pages-recycle-the-remains?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Management as AI superpower: Thriving in a world of agentic AI](https://www.oneusefulthing.org/p/management-as-ai-superpower) ([comments](https://news.ycombinator.com/item?id=46782811))

## Corporate and Market Movements

* [Pinterest Cuts Up To 15% Jobs To Redirect Resources To AI](https://slashdot.org/story/26/01/27/1457232/pinterest-cuts-up-to-15-jobs-to-redirect-resources-to-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://slashdot.org/story/26/01/27/1457232/pinterest-cuts-up-to-15-jobs-to-redirect-resources-to-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Amazon To Shut Down All Amazon Go and Amazon Fresh Stores](https://www.cnn.com/2026/01/27/food/amazon-fresh-go-closures) ([comments](https://slashdot.org/story/26/01/27/1625211/amazon-to-shut-down-all-amazon-go-and-amazon-fresh-stores?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Microsoft Was Routing Example-Domain Traffic To a Japanese Cable Company for Five Years](https://it.slashdot.org/story/26/01/27/1724230/microsoft-was-routing-example-domain-traffic-to-a-japanese-cable-company-for-five-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=46784263))

## Security and Breaches

* [SoundCloud Data Breach Now on HaveIBeenPwned](https://haveibeenpwned.com/Breach/SoundCloud) ([comments](https://news.ycombinator.com/item?id=46782930))

* [OpenSSL: Stack buffer overflow in CMS AuthEnvelopedData parsing](https://openssl-library.org/news/vulnerabilities/#CVE-2025-15467) ([comments](https://news.ycombinator.com/item?id=46782662))

* [Attackers Find a New Way to Share Malicious Snap Packages](https://soylentnews.org/article.pl?sid=26/01/25/0432221&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/01/25/0432221&amp;from=rss))

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

* [2026-01-27, 18:59:59](https://news.ycombinator.com/item?id=46784611) - [Ice Drives Unmarked Cars. This Public Database Tracks Their License Plates](https://theintercept.com/2026/01/02/ice-license-plates-database/)
* [2026-01-27, 18:57:15](https://news.ycombinator.com/item?id=46784572) - [Lennart Poettering, Christian Brauner founded a new company](https://amutable.com/about)
* [2026-01-27, 18:50:50](https://news.ycombinator.com/item?id=46784491) - [Hypercubic (YC F25) Is Hiring a Founding SWE and COBOL Engineer](https://www.ycombinator.com/companies/hypercubic/jobs)
* [2026-01-27, 18:45:00](https://tech.slashdot.org/story/26/01/27/1737239/france-to-ditch-us-platforms-microsoft-teams-zoom-for-sovereign-platform-amid-security-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [France To Ditch US Platforms Microsoft Teams, Zoom For &apos;Sovereign Platform&apos; Amid Security Concerns](https://tech.slashdot.org/story/26/01/27/1737239/france-to-ditch-us-platforms-microsoft-teams-zoom-for-sovereign-platform-amid-security-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-27, 18:42:15](https://news.ycombinator.com/item?id=46784367) - [ICE watchers in Maine say they were threatened by federal agents](https://www.pressherald.com/2026/01/23/ice-watchers-in-maine-say-they-were-threatened-by-federal-agents/)
* [2026-01-27, 18:35:33](https://news.ycombinator.com/item?id=46784263) - [U.S. government has lost more than 10k STEM PhDs since Trump took office](https://www.science.org/content/article/u-s-government-has-lost-more-10-000-stem-ph-d-s-trump-took-office)
* [2026-01-27, 18:08:48](https://lobste.rs/s/kaftkn/i_started_identifying_corporate_devices) - [I Started Identifying Corporate Devices in My Software](https://lgug2z.com/articles/i-started-identifying-corporate-devices-in-my-software/)
* [2026-01-27, 18:03:10](https://news.ycombinator.com/item?id=46783752) - [Prism](https://openai.com/index/introducing-prism)
* [2026-01-27, 18:01:00](https://it.slashdot.org/story/26/01/27/1724230/microsoft-was-routing-example-domain-traffic-to-a-japanese-cable-company-for-five-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Was Routing Example-Domain Traffic To a Japanese Cable Company for Five Years](https://it.slashdot.org/story/26/01/27/1724230/microsoft-was-routing-example-domain-traffic-to-a-japanese-cable-company-for-five-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-27, 17:55:27](https://lobste.rs/s/7orzxp/reflections_developer_on_llms_january) - [Reflections of a Developer on LLMs in January 2026](https://rmoff.net/2026/01/27/reflections-of-a-developer-on-llms-in-january-2026/)
* [2026-01-27, 17:55:15](https://news.ycombinator.com/item?id=46783600) - [Show HN: LemonSlice – Upgrade your voice agents to real-time video](https://news.ycombinator.com/item?id=46783600)
* [2026-01-27, 17:21:00](https://science.slashdot.org/story/26/01/27/175237/doomsday-clock-ticks-to-85-seconds-before-midnight-its-closest-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Doomsday Clock Ticks To 85 Seconds Before Midnight, Its Closest Ever](https://science.slashdot.org/story/26/01/27/175237/doomsday-clock-ticks-to-85-seconds-before-midnight-its-closest-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-27, 17:18:20](https://news.ycombinator.com/item?id=46783024) - [One Human and One Agent = One Browser from Scratch](https://simonwillison.net/2026/Jan/27/one-human-one-agent-one-browser/)
* [2026-01-27, 17:11:39](https://news.ycombinator.com/item?id=46782930) - [SoundCloud Data Breach Now on HaveIBeenPwned](https://haveibeenpwned.com/Breach/SoundCloud)
* [2026-01-27, 17:04:22](https://news.ycombinator.com/item?id=46782811) - [Management as AI superpower: Thriving in a world of agentic AI](https://www.oneusefulthing.org/p/management-as-ai-superpower)
* [2026-01-27, 16:56:23](https://news.ycombinator.com/item?id=46782662) - [OpenSSL: Stack buffer overflow in CMS AuthEnvelopedData parsing](https://openssl-library.org/news/vulnerabilities/#CVE-2025-15467)
* [2026-01-27, 16:40:00](https://slashdot.org/story/26/01/27/1625211/amazon-to-shut-down-all-amazon-go-and-amazon-fresh-stores?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon To Shut Down All Amazon Go and Amazon Fresh Stores](https://slashdot.org/story/26/01/27/1625211/amazon-to-shut-down-all-amazon-go-and-amazon-fresh-stores?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-27, 16:23:40](https://news.ycombinator.com/item?id=46782091) - [A first look at Aperture by Tailscale (private alpha)](https://tailscale.com/blog/aperture-private-alpha)
* [2026-01-27, 16:22:52](https://lobste.rs/s/csxfc6/cloudflare_claimed_they_implemented) - [Cloudflare claimed they implemented Matrix on Cloudflare workers. They didn&apos;t](https://tech.lgbt/@JadedBlueEyes/115967791152135761)
* [2026-01-27, 16:19:23](https://lobste.rs/s/hzysrf/gilfoyle_sre_agent_finds_truth_while_you) - [Gilfoyle. An SRE Agent that finds truth while you&apos;re still guessing](https://gilfoyle.sh)
* [2026-01-27, 16:19:00](https://soylentnews.org/article.pl?sid=26/01/26/1850245&amp;from=rss) - [80386 Multiplication and Division](https://soylentnews.org/article.pl?sid=26/01/26/1850245&amp;from=rss)
* [2026-01-27, 16:02:00](https://science.slashdot.org/story/26/01/27/1514246/openais-science-chief-says-llms-arent-ready-for-novel-discoveries-and-thats-fine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI&apos;s Science Chief Says LLMs Aren&apos;t Ready For Novel Discoveries and That&apos;s Fine](https://science.slashdot.org/story/26/01/27/1514246/openais-science-chief-says-llms-arent-ready-for-novel-discoveries-and-thats-fine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-27, 15:58:05](https://news.ycombinator.com/item?id=46781707) - [Amazon to shut down Go and Fresh stores](https://www.cnn.com/2026/01/27/food/amazon-fresh-go-closures)
* [2026-01-27, 15:46:29](https://news.ycombinator.com/item?id=46781530) - [430k-year-old well-preserved wooden tools are the oldest ever found](https://www.nytimes.com/2026/01/26/science/archaeology-neanderthals-tools.html)
* [2026-01-27, 15:45:45](https://news.ycombinator.com/item?id=46781516) - [Cloudflare claimed they implemented Matrix on Cloudflare workers. They didn&apos;t](https://tech.lgbt/@JadedBlueEyes/115967791152135761)
* [2026-01-27, 15:38:24](https://lobste.rs/s/dpwkfc/you_can_t_handle_buddhabrot_2024) - [You can&apos;t handle the Buddhabrot! (2024)](https://lcamtuf.substack.com/p/you-cant-handle-the-buddhabrot)
* [2026-01-27, 15:22:00](https://slashdot.org/story/26/01/27/1457232/pinterest-cuts-up-to-15-jobs-to-redirect-resources-to-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pinterest Cuts Up To 15% Jobs To Redirect Resources To AI](https://slashdot.org/story/26/01/27/1457232/pinterest-cuts-up-to-15-jobs-to-redirect-resources-to-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-27, 14:48:07](https://lobste.rs/s/xcwljr/xfwl4_roadmap_for_xfce_wayland) - [Xfwl4: The roadmap for a Xfce Wayland Compositor](https://alexxcons.github.io/blogpost_15.html)
* [2026-01-27, 14:45:00](https://mobile.slashdot.org/story/26/01/27/1446201/samsung-galaxy-z-trifold-will-cost-2900-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Samsung Galaxy Z Trifold Will Cost $2,900 in the US](https://mobile.slashdot.org/story/26/01/27/1446201/samsung-galaxy-z-trifold-will-cost-2900-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-27, 14:40:22](https://lobste.rs/s/dskpn4/after_two_years_vibecoding_i_m_back) - [After two years of vibecoding, I&apos;m back to writing by hand](https://atmoio.substack.com/p/after-two-years-of-vibecoding-im)
* [2026-01-27, 14:38:32](https://lobste.rs/s/rjw7zn/t_concise_language_for_manipulating_text) - [t: a concise language for manipulating text, replacing common usage patterns of Unix utilities like grep, sed, cut, awk, sort, and uniq](https://github.com/alecthomas/t)
* [2026-01-27, 14:35:55](https://lobste.rs/s/nkyp8j/ruby_users_forum_is_now_live) - [The Ruby Users Forum Is Now Live](https://www.rubyforum.org/)
* [2026-01-27, 14:13:44](https://lobste.rs/s/fdbsyl/c_shaped_hole_package_management) - [The C-Shaped Hole in Package Management](https://nesbitt.io/2026/01/27/the-c-shaped-hole-in-package-management.html)
* [2026-01-27, 14:06:00](https://news.slashdot.org/story/26/01/27/146242/how-anthropic-built-claude-buy-books-slice-spines-scan-pages-recycle-the-remains?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Anthropic Built Claude: Buy Books, Slice Spines, Scan Pages, Recycle the Remains](https://news.slashdot.org/story/26/01/27/146242/how-anthropic-built-claude-buy-books-slice-spines-scan-pages-recycle-the-remains?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-27, 14:05:48](https://news.ycombinator.com/item?id=46780065) - [The age of Pump and Dump software](https://tautvilas.medium.com/software-pump-and-dump-c8a9a73d313b)
* [2026-01-27, 13:44:24](https://news.ycombinator.com/item?id=46779809) - [TikTok users can&apos;t upload anti-ICE videos. The company blames tech issues](https://www.cnn.com/2026/01/26/tech/tiktok-ice-censorship-glitch-cec)
* [2026-01-27, 13:33:47](https://lobste.rs/s/xhqliz/bugs_apple_loves) - [Bugs Apple Loves](https://www.bugsappleloves.com/)
* [2026-01-27, 13:25:53](https://news.ycombinator.com/item?id=46779645) - [Xfwl4 – The Roadmap for a Xfce Wayland Compositor](https://alexxcons.github.io/blogpost_15.html)
* [2026-01-27, 13:00:00](https://games.slashdot.org/story/26/01/27/0556242/microsoft-is-refreshing-the-xbox-cloud-gaming-web-experience?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Is Refreshing the Xbox Cloud Gaming Web Experience](https://games.slashdot.org/story/26/01/27/0556242/microsoft-is-refreshing-the-xbox-cloud-gaming-web-experience?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-27, 11:53:37](https://lobste.rs/s/xzz2mg/i_made_my_own_git) - [I made my own git](https://tonystr.net/blog/git_immitation)
* [2026-01-27, 11:39:00](https://soylentnews.org/article.pl?sid=26/01/25/1435251&amp;from=rss) - [Microsoft CEO Says AI Needs to Have Wider Impact or Risk Quickly Losing \&quot;Social Permission\&quot;](https://soylentnews.org/article.pl?sid=26/01/25/1435251&amp;from=rss)
* [2026-01-27, 10:55:37](https://news.ycombinator.com/item?id=46778341) - [I made my own Git](https://tonystr.net/blog/git_immitation)
* [2026-01-27, 10:46:17](https://lobste.rs/s/0v7mxy/places_telnet) - [Places to Telnet](https://telnet.org/htm/places.htm)
* [2026-01-27, 10:06:36](https://lobste.rs/s/seknf5/how_get_european_cloud) - [But how to get to that European cloud?](https://berthub.eu/articles/posts/now-how-to-get-that-european-cloud/)
* [2026-01-27, 10:03:30](https://lobste.rs/s/oktde4/rise_fall_scala_2016) - [The rise and fall of Scala (2016)](https://www.beyondjava.net/newsflash-the-rise-and-fall-of-scala)
* [2026-01-27, 10:00:00](https://news.slashdot.org/story/26/01/27/0053233/reactos-celebrates-30-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ReactOS Celebrates 30 Years](https://news.slashdot.org/story/26/01/27/0053233/reactos-celebrates-30-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-27, 09:26:04](https://lobste.rs/s/lna6pe/postmarketos_2026_01_monthly_blog_post) - [postmarketOS in 2026-01: monthly blog post reboot](https://postmarketos.org/blog/2026/01/25/pmOS-update-2026-01/)
* [2026-01-27, 09:21:47](https://lobste.rs/s/hf6q1n/why_ai_coding_advice_contradicts_itself) - [Why AI Coding Advice Contradicts Itself](https://www.anup.io/why-ai-coding-advice-contradicts-itself/)
* [2026-01-27, 09:01:05](https://news.ycombinator.com/item?id=46777329) - [Bassoontracker, Tracking in the Browser](https://www.stef.be/bassoontracker/)
* [2026-01-27, 08:58:00](https://lobste.rs/s/ppf0pm/spinning_around_please_don_t) - [Spinning around: Please don&apos;t](https://www.siliceum.com/en/blog/post/spinning-around/)
* [2026-01-27, 08:34:50](https://lobste.rs/s/neudsm/for_love_troff_2020) - [For the love of Troff (2020)](http://www.schemamania.org/troff/for-the-love-of-troff.pdf)
* [2026-01-27, 07:29:31](https://lobste.rs/s/cozesw/nixtamal_fulfilling_pure_input_pinning) - [Nixtamal: Fulfilling, Pure Input Pinning for Nix](https://nixtamal.toast.al)
* [2026-01-27, 07:00:00](https://it.slashdot.org/story/26/01/27/0550249/lawsuit-alleges-that-whatsapp-has-no-end-to-end-encryption?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lawsuit Alleges That WhatsApp Has No End-to-End Encryption](https://it.slashdot.org/story/26/01/27/0550249/lawsuit-alleges-that-whatsapp-has-no-end-to-end-encryption?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-27, 06:54:00](https://soylentnews.org/article.pl?sid=26/01/25/1419203&amp;from=rss) - [The Hidden Complexity Crisis: When Simple Radio Buttons Require 200+ Lines of Code](https://soylentnews.org/article.pl?sid=26/01/25/1419203&amp;from=rss)
* [2026-01-27, 06:17:46](https://news.ycombinator.com/item?id=46776155) - [Doing the thing is doing the thing](https://www.softwaredesign.ing/blog/doing-the-thing-is-doing-the-thing)
* [2026-01-27, 04:10:29](https://lobste.rs/s/tfhspy/arcan_explained_browser_for_different) - [Arcan Explained – A browser for different webs](https://arcan-fe.com/2026/01/26/arcan-explained-a-browser-for-different-webs/)
* [2026-01-27, 03:30:00](https://news.slashdot.org/story/26/01/27/0138225/china-hacked-downing-street-phones-for-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Hacked Downing Street Phones For Years](https://news.slashdot.org/story/26/01/27/0138225/china-hacked-downing-street-phones-for-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-27, 03:24:13](https://news.ycombinator.com/item?id=46775135) - [A list of fun destinations for telnet](https://telnet.org/htm/places.htm)
* [2026-01-27, 02:08:00](https://soylentnews.org/article.pl?sid=26/01/25/1410231&amp;from=rss) - [Elon Musk Restarts Dojo3 &apos;Space&apos; Supercomputer Project As AI5 Chip Design Gets In &apos;Good Shape&apos;](https://soylentnews.org/article.pl?sid=26/01/25/1410231&amp;from=rss)
* [2026-01-27, 01:50:00](https://tech.slashdot.org/story/26/01/27/0147238/reddit-lawyers-force-founder-to-redact-wallstreetbets-from-miami-event?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Reddit Lawyers Force Founder to Redact &apos;WallStreetBets&apos; From Miami Event](https://tech.slashdot.org/story/26/01/27/0147238/reddit-lawyers-force-founder-to-redact-wallstreetbets-from-miami-event?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-27, 01:20:00](https://apple.slashdot.org/story/26/01/27/0047225/apple-launches-airtag-2-with-improved-range-louder-speaker?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Launches AirTag 2 With Improved Range, Louder Speaker](https://apple.slashdot.org/story/26/01/27/0047225/apple-launches-airtag-2-with-improved-range-louder-speaker?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-27, 01:00:00](https://tech.slashdot.org/story/26/01/27/0036229/tiktok-alternative-skylight-soars-to-380k-users-after-tiktok-us-deal-finalized?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [TikTok Alternative &apos;Skylight&apos; Soars To 380K+ Users After TikTok US Deal Finalized](https://tech.slashdot.org/story/26/01/27/0036229/tiktok-alternative-skylight-soars-to-380k-users-after-tiktok-us-deal-finalized?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-26, 23:55:42](https://lobste.rs/s/ifyc4b/microsoft_obeys_court_orders_provide) - [Microsoft obeys court orders to provide Windows BitLocker recovery keys](https://www.windowscentral.com/microsoft/windows-11/microsoft-bitlocker-encryption-keys-give-fbi-legal-order-privacy-nightmare)
* [2026-01-26, 21:19:00](https://soylentnews.org/article.pl?sid=26/01/25/145215&amp;from=rss) - [Apple&apos;s Enshittification Moment: How the App Store is Quietly Abandoning User Trust](https://soylentnews.org/article.pl?sid=26/01/25/145215&amp;from=rss)
* [2026-01-26, 21:09:19](https://news.ycombinator.com/item?id=46771564) - [A few random notes from Claude coding quite a bit last few weeks](https://twitter.com/karpathy/status/2015883857489522876)
* [2026-01-26, 20:12:34](https://news.ycombinator.com/item?id=46770855) - [Two Twisty Shapes Resolve a Centuries-Old Topology Puzzle](https://www.quantamagazine.org/two-twisty-shapes-resolve-a-centuries-old-topology-puzzle-20260120/)
* [2026-01-26, 17:15:27](https://lobste.rs/s/bpqtph/state_linux_music_players_2026) - [The state of Linux music players in 2026](https://crescentro.se/posts/linux-music-players-2026/)
* [2026-01-26, 17:14:33](https://lobste.rs/s/cm3wkh/fedora_asahi_remix_is_now_working_on_apple) - [Fedora Asahi Remix is now working on Apple M3](https://bsky.app/profile/did:plc:okydh7e54e2nok65kjxdklvd/post/3mdd55paffk2o)
* [2026-01-26, 16:38:00](https://soylentnews.org/article.pl?sid=26/01/25/1312202&amp;from=rss) - [Snover.exit()](https://soylentnews.org/article.pl?sid=26/01/25/1312202&amp;from=rss)
* [2026-01-26, 11:55:00](https://soylentnews.org/article.pl?sid=26/01/25/0439223&amp;from=rss) - [Starlink Now Uses Customers&apos; Personal Data for AI Training](https://soylentnews.org/article.pl?sid=26/01/25/0439223&amp;from=rss)
* [2026-01-26, 07:49:09](https://lobste.rs/s/u7bjzq/why_there_s_no_european_google) - [Why there’s no European Google?](https://ploum.net/2026-01-22-why-no-european-google.html)
* [2026-01-26, 07:11:00](https://soylentnews.org/article.pl?sid=26/01/25/0432221&amp;from=rss) - [Attackers Find a New Way to Share Malicious Snap Packages](https://soylentnews.org/article.pl?sid=26/01/25/0432221&amp;from=rss)
* [2026-01-26, 03:26:00](https://soylentnews.org/article.pl?sid=26/01/25/0429246&amp;from=rss) - [UK MPs Call for AI Stress Testing in Financial Services](https://soylentnews.org/article.pl?sid=26/01/25/0429246&amp;from=rss)
* [2026-01-25, 22:36:00](https://soylentnews.org/article.pl?sid=26/01/24/0116243&amp;from=rss) - [Microsoft Gave FBI a Set of BitLocker Encryption Keys to Unlock Suspects’ Laptops](https://soylentnews.org/article.pl?sid=26/01/24/0116243&amp;from=rss)
* [2026-01-25, 17:53:00](https://soylentnews.org/article.pl?sid=26/01/24/0114253&amp;from=rss) - [This May Be The Grossest Eye Pic Ever—but the Cause is What’s Truly Horrifying](https://soylentnews.org/article.pl?sid=26/01/24/0114253&amp;from=rss)
* [2026-01-25, 13:02:00](https://soylentnews.org/article.pl?sid=26/01/24/0112225&amp;from=rss) - [OpenAI Rolls Out Ads in ChatGPT as Expenses Skyrocket](https://soylentnews.org/article.pl?sid=26/01/24/0112225&amp;from=rss)
* [2026-01-25, 08:30:00](https://soylentnews.org/article.pl?sid=26/01/24/0110242&amp;from=rss) - [Major River Deltas Are Sinking Faster Than Sea-Level Rise](https://soylentnews.org/article.pl?sid=26/01/24/0110242&amp;from=rss)
* [2026-01-25, 03:38:00](https://soylentnews.org/article.pl?sid=26/01/24/019242&amp;from=rss) - [How Greenwashing Creates &apos;False Stability&apos; for Companies](https://soylentnews.org/article.pl?sid=26/01/24/019242&amp;from=rss)
* [2026-01-24, 22:54:00](https://soylentnews.org/article.pl?sid=26/01/23/1016236&amp;from=rss) - [Ancient “Mosaic” Fossils Found in Morocco Challenge the Timeline of Human Evolution](https://soylentnews.org/article.pl?sid=26/01/23/1016236&amp;from=rss)
* [2026-01-24, 18:11:00](https://soylentnews.org/article.pl?sid=26/01/23/1010250&amp;from=rss) - [Micron Acquires PSMC Fab Site in Taiwan for $1.8 Billion](https://soylentnews.org/article.pl?sid=26/01/23/1010250&amp;from=rss)
* [2026-01-24, 13:25:00](https://soylentnews.org/article.pl?sid=26/01/23/1012244&amp;from=rss) - [Hygienic Conditions in Pompeii&apos;s Early Baths Were Poor](https://soylentnews.org/article.pl?sid=26/01/23/1012244&amp;from=rss)
* [2026-01-24, 08:42:00](https://soylentnews.org/article.pl?sid=26/01/22/124243&amp;from=rss) - [A Billiard Ball as a Universal Computation Machine](https://soylentnews.org/article.pl?sid=26/01/22/124243&amp;from=rss)
* [2026-01-24, 04:01:00](https://soylentnews.org/article.pl?sid=26/01/22/121252&amp;from=rss) - [When Order Matters: How A Single DNS Change Broke The Internet For Millions](https://soylentnews.org/article.pl?sid=26/01/22/121252&amp;from=rss)
* [2026-01-23, 23:16:00](https://soylentnews.org/article.pl?sid=26/01/22/1148259&amp;from=rss) - [Caltech-Led Team Finds New Superconducting State](https://soylentnews.org/article.pl?sid=26/01/22/1148259&amp;from=rss)
* [2026-01-23, 19:38:33](https://news.ycombinator.com/item?id=46736815) - [Heathrow scraps liquid container limit](https://www.bbc.com/news/articles/c1evvx89559o)
* [2026-01-23, 18:32:00](https://soylentnews.org/article.pl?sid=26/01/22/1144249&amp;from=rss) - [Starlink in Iran: How the Regime Jams the Service and What Helps Against It](https://soylentnews.org/article.pl?sid=26/01/22/1144249&amp;from=rss)
* [2026-01-23, 13:45:00](https://soylentnews.org/article.pl?sid=26/01/22/1141230&amp;from=rss) - [Physics of Foam Strangely Resembles AI Training](https://soylentnews.org/article.pl?sid=26/01/22/1141230&amp;from=rss)
* [2026-01-23, 08:59:00](https://soylentnews.org/article.pl?sid=26/01/22/0422248&amp;from=rss) - [Wikipedia Volunteers Spent Years Cataloging AI Tells. Now There&apos;s a Plugin to Avoid Them.](https://soylentnews.org/article.pl?sid=26/01/22/0422248&amp;from=rss)
* [2026-01-23, 04:12:00](https://soylentnews.org/article.pl?sid=26/01/22/043242&amp;from=rss) - [Nvidia Wanted Pirated Book Stash Access](https://soylentnews.org/article.pl?sid=26/01/22/043242&amp;from=rss)
