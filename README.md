# [News Summary](https://kherrick.github.io/news-summary/)

## Tech Industry Updates

* [Lets Encrypt Stopping Issuance for Potential Incident](https://letsencrypt.status.io/pages/incident/55957a99e800baa4470002da/69fe2d6698ca07050eb4b1b3) ([comments](https://news.ycombinator.com/item?id=48067790))

* [Apple, Intel Have Reached Preliminary Chip-Making Agreement](https://hardware.slashdot.org/story/26/05/08/174203/apple-intel-have-reached-preliminary-chip-making-agreement?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=48066169))

* [Chrome Silently Installs a 4GB AI Model On Your Device Without Consent](https://tech.slashdot.org/story/26/05/08/0635229/chrome-silently-installs-a-4gb-ai-model-on-your-device-without-consent?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=48065360))

* [Mojo 1.0 Beta](https://mojolang.org/) ([comments](https://news.ycombinator.com/item?id=48057901))

* [Google Broke reCAPTCHA for De-Googled Android Users](https://reclaimthenet.org/google-broke-recaptcha-for-de-googled-android-users) ([comments](https://news.ycombinator.com/item?id=48067119))

* [AI Is Breaking Two Vulnerability Cultures](https://www.jefftk.com/p/ai-is-breaking-two-vulnerability-cultures) ([comments](https://news.ycombinator.com/item?id=48066524))

## Science and Space Developments

* [Pentagon Begins Releasing New Files On UFOs](https://entertainment.slashdot.org/story/26/05/08/167218/pentagon-begins-releasing-new-files-on-ufos?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=48061938))

* [Astronomers Pin Down the Origins of a Planetary Odd Couple](https://soylentnews.org/article.pl?sid=26/05/07/0152233&from=rss) ([comments](https://news.ycombinator.com/item?id=48062745))

* [Scientists Stunned by New Organic Molecules Found on Mars](https://soylentnews.org/article.pl?sid=26/05/06/0347215&from=rss) ([comments](https://news.ycombinator.com/item?id=48037336))

## AI and Data

* [IMF Warns New AI Models Risk 'Systemic' Shock To Finance](https://news.slashdot.org/story/26/05/07/200212/imf-warns-new-ai-models-risk-systemic-shock-to-finance?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=48056227))

* [The Ram Crisis Isn't Going Anywhere: Micron CEO Warns AI Will Need More Memory](https://soylentnews.org/article.pl?sid=26/05/06/1720223&from=rss) ([comments](https://lobste.rs/s/5swwi0/surprisingly_complex_journey_text))

* [Cloudflare To Cut About 20% Workforce As AI Adoption Reshapes Operations](https://slashdot.org/story/26/05/08/040251/cloudflare-to-cut-about-20-workforce-as-ai-adoption-reshapes-operations?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=48054423))

## Cybersecurity and Vulnerabilities

* [Stop MITM on the First SSH Connection, on Any VPS or Cloud Provider](https://www.joachimschipper.nl/Stop%20MITM%20on%20the%20first%20SSH%20connection,%20on%20any%20VPS%20or%20cloud%20provider.html) ([comments](https://lobste.rs/s/q5bds7/stop_mitm_on_first_ssh_connection_on_any))

* [The Canvas Hack Is a New Kind of Ransomware Debacle](https://it.slashdot.org/story/26/05/08/0622227/the-canvas-hack-is-a-new-kind-of-ransomware-debacle?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=48060054))

* [UUID v4 Collision](https://news.ycombinator.com/item?id=48060054) ([comments](https://news.ycombinator.com/item?id=48060054))

## Innovations and Retro Computing

* [Serving a Website on a Raspberry Pi Zero Running Entirely in RAM](https://btxx.org/posts/memory/) ([comments](https://news.ycombinator.com/item?id=48064312))

* [cartoon Network Flash E-Games Exhibition](https://www.webdesignmuseum.org/flash-game-exhibitions/cartoon-network-flash-games) ([comments](https://news.ycombinator.com/item?id=48063199))

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

* [2026-05-08, 19:45:28](https://news.ycombinator.com/item?id=48067790) - [Lets Encrypt Stopping Issuance for Potential Incident](https://letsencrypt.status.io/pages/incident/55957a99e800baa4470002da/69fe2d6698ca07050eb4b1b3)
* [2026-05-08, 19:35:36](https://news.ycombinator.com/item?id=48067686) - [My first in-prod corrupted hard drive problem](https://blog.pavementlink.ch/2026/05/07/my-first-corrupted-hard-drive-problem/)
* [2026-05-08, 19:00:00](https://entertainment.slashdot.org/story/26/05/08/167218/pentagon-begins-releasing-new-files-on-ufos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pentagon Begins Releasing New Files On UFOs](https://entertainment.slashdot.org/story/26/05/08/167218/pentagon-begins-releasing-new-files-on-ufos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-08, 18:53:08](https://news.ycombinator.com/item?id=48067197) - [What we lost the last time code got cheap](https://www.poppastring.com/blog/what-we-lost-the-last-time-code-got-cheap)
* [2026-05-08, 18:45:58](https://news.ycombinator.com/item?id=48067119) - [Google Broke reCAPTCHA for De-Googled Android Users](https://reclaimthenet.org/google-broke-recaptcha-for-de-googled-android-users)
* [2026-05-08, 18:39:49](https://lobste.rs/s/jfe19u/rooting_vmc2040_security_camera) - [Rooting a VMC2040 security camera](https://www.marcusfolkesson.se/blog/arlo-vmc2040-part1/)
* [2026-05-08, 18:14:00](https://soylentnews.org/article.pl?sid=26/05/07/0154202&amp;from=rss) - [Starbucks CEO Defends $9 Coffee: ‘A Really Affordable Premium Experience’](https://soylentnews.org/article.pl?sid=26/05/07/0154202&amp;from=rss)
* [2026-05-08, 18:00:00](https://hardware.slashdot.org/story/26/05/08/174203/apple-intel-have-reached-preliminary-chip-making-agreement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple, Intel Have Reached Preliminary Chip-Making Agreement](https://hardware.slashdot.org/story/26/05/08/174203/apple-intel-have-reached-preliminary-chip-making-agreement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-08, 17:55:08](https://news.ycombinator.com/item?id=48066524) - [AI Is Breaking Two Vulnerability Cultures](https://www.jefftk.com/p/ai-is-breaking-two-vulnerability-cultures)
* [2026-05-08, 17:25:21](https://news.ycombinator.com/item?id=48066169) - [Apple, Intel have reached preliminary chip-making deal](https://www.reuters.com/business/apple-intel-have-reached-preliminary-chip-making-deal-wsj-reports-2026-05-08/)
* [2026-05-08, 17:06:59](https://news.ycombinator.com/item?id=48065916) - [Bjarne Stroustrup: How do I deal with memory leaks? (2022)](https://www.stroustrup.com/bs_faq2.html#memory-leaks)
* [2026-05-08, 17:00:00](https://hardware.slashdot.org/story/26/05/08/1619212/ai-hard-drive-shortage-makes-archiving-the-internet-harder?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Hard Drive Shortage Makes Archiving the Internet Harder](https://hardware.slashdot.org/story/26/05/08/1619212/ai-hard-drive-shortage-makes-archiving-the-internet-harder?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-08, 16:55:25](https://lobste.rs/s/eabrz3/what_we_lost_last_time_code_got_cheap) - [What We Lost the Last Time Code Got Cheap](https://www.poppastring.com/blog/what-we-lost-the-last-time-code-got-cheap)
* [2026-05-08, 16:29:52](https://news.ycombinator.com/item?id=48065360) - [Cartoon Network Flash Games](https://www.webdesignmuseum.org/flash-game-exhibitions/cartoon-network-flash-games)
* [2026-05-08, 16:17:37](https://news.ycombinator.com/item?id=48065203) - [Show HN: GETadb.com – every GET request creates a DB](https://www.getadb.com/)
* [2026-05-08, 16:00:00](https://tech.slashdot.org/story/26/05/08/0635229/chrome-silently-installs-a-4gb-ai-model-on-your-device-without-consent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chrome Silently Installs a 4GB AI Model On Your Device Without Consent](https://tech.slashdot.org/story/26/05/08/0635229/chrome-silently-installs-a-4gb-ai-model-on-your-device-without-consent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-08, 15:12:55](https://lobste.rs/s/c8cv7a/sync_bound_nobody_asked_for) - [The `Sync` bound nobody asked for](https://verrchu.github.io/blog/1-the-sync-bound-nobody-asked-for/)
* [2026-05-08, 15:10:35](https://news.ycombinator.com/item?id=48064312) - [Serving a website on a Raspberry Pi Zero running in RAM](https://btxx.org/posts/memory/)
* [2026-05-08, 15:00:00](https://slashdot.org/story/26/05/08/040251/cloudflare-to-cut-about-20-workforce-as-ai-adoption-reshapes-operations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cloudflare To Cut About 20% Workforce As AI Adoption Reshapes Operations](https://slashdot.org/story/26/05/08/040251/cloudflare-to-cut-about-20-workforce-as-ai-adoption-reshapes-operations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-08, 14:15:36](https://news.ycombinator.com/item?id=48063548) - [Show HN: Git for AI Agents](https://github.com/regent-vcs/re_gent)
* [2026-05-08, 14:14:31](https://news.ycombinator.com/item?id=48063521) - [PC Engine CPU](https://jsgroth.dev/blog/posts/pc-engine-cpu/)
* [2026-05-08, 13:56:10](https://news.ycombinator.com/item?id=48063199) - [Google Cloud Fraud Defence is just WEI repackaged](https://privatecaptcha.com/blog/google-cloud-fraud-defence-wei/)
* [2026-05-08, 13:55:31](https://lobste.rs/s/fsueos/serving_website_on_raspberry_pi_zero) - [Serving a Website on a Raspberry Pi Zero Running Entirely in RAM](https://btxx.org/posts/memory/)
* [2026-05-08, 13:35:00](https://soylentnews.org/article.pl?sid=26/05/07/0152233&amp;from=rss) - [Astronomers Pin Down the Origins of a Planetary Odd Couple](https://soylentnews.org/article.pl?sid=26/05/07/0152233&amp;from=rss)
* [2026-05-08, 13:31:11](https://lobste.rs/s/5swwi0/surprisingly_complex_journey_text) - [The surprisingly complex journey to text-selectable client-side generated PDFs](https://sdocs.dev/blogs/journey-to-pdf-generation)
* [2026-05-08, 13:22:33](https://news.ycombinator.com/item?id=48062745) - [Podman rootless containers and the Copy Fail exploit](https://garrido.io/notes/podman-rootless-containers-copy-fail/)
* [2026-05-08, 12:58:28](https://lobste.rs/s/znlkib/just_fucking_use_go) - [Just Fucking Use Go](https://blainsmith.com/articles/just-fucking-use-go/)
* [2026-05-08, 12:37:05](https://news.ycombinator.com/item?id=48062178) - [A web page that shows you everything the browser told it without asking](https://sinceyouarrived.world/taken)
* [2026-05-08, 12:30:05](https://news.ycombinator.com/item?id=48062117) - [Poland is now among the 20 largest economies](https://apnews.com/article/poland-economy-growth-g20-gdp-26fe06e120398410f8d773ba5661e7aa)
* [2026-05-08, 12:10:25](https://news.ycombinator.com/item?id=48061938) - [US Government releases first batch of UAP documents and videos](https://www.war.gov/UFO/)
* [2026-05-08, 12:03:26](https://news.ycombinator.com/item?id=48061884) - [David Attenborough&apos;s 100th Birthday](https://www.bbc.com/news/articles/cp3pww9g0p5o)
* [2026-05-08, 12:01:18](https://lobste.rs/s/3kjqec/wii_ip6_webserver) - [Wii IP6 webserver](http://wii.sjmulder.nl)
* [2026-05-08, 12:00:44](https://lobste.rs/s/m77efo/getting_peak_tops_on_ryzen_ai_7_350_npu) - [Getting peak TOPS on a Ryzen AI 7 350 NPU](https://destevez.net/2026/05/getting-peak-tops-on-a-ryzen-ai-7-350-npu/)
* [2026-05-08, 11:26:11](https://lobste.rs/s/q5bds7/stop_mitm_on_first_ssh_connection_on_any) - [Stop MITM on the first SSH connection, on any VPS or cloud provider](https://www.joachimschipper.nl/Stop%20MITM%20on%20the%20first%20SSH%20connection,%20on%20any%20VPS%20or%20cloud%20provider.html)
* [2026-05-08, 11:22:11](https://news.ycombinator.com/item?id=48061566) - [An Introduction to Meshtastic](https://meshtastic.org/docs/introduction/)
* [2026-05-08, 11:00:00](https://news.slashdot.org/story/26/05/07/1933256/first-segment-of-the-fehmarnbelt-tunnel-is-in-place?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [First Segment of the Fehmarnbelt Tunnel Is In Place](https://news.slashdot.org/story/26/05/07/1933256/first-segment-of-the-fehmarnbelt-tunnel-is-in-place?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-08, 10:01:15](https://lobste.rs/s/wfqsc4/building_web_server_aarch64_assembly) - [building a web server in aarch64 assembly to give my life (a lack of) meaning](https://imtomt.github.io/ymawky/)
* [2026-05-08, 09:55:37](https://news.ycombinator.com/item?id=48060918) - [GeoJSON](https://geojson.org/)
* [2026-05-08, 09:43:25](https://lobste.rs/s/mhzcfc/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/mhzcfc/what_are_you_doing_this_weekend)
* [2026-05-08, 08:49:00](https://soylentnews.org/article.pl?sid=26/05/07/0149246&amp;from=rss) - [Nissan Redirects Mississippi Jobs To Trucks, SUVs Now](https://soylentnews.org/article.pl?sid=26/05/07/0149246&amp;from=rss)
* [2026-05-08, 08:45:13](https://lobste.rs/s/fap65c/hpke_ng_faster_smaller_harder_hpke_for) - [hpke-ng: Faster, Smaller, Harder HPKE for Rust](https://symbolic.software/blog/2026-05-08-hpke-ng/)
* [2026-05-08, 07:57:14](https://news.ycombinator.com/item?id=48060054) - [Ask HN: We just had an actual UUID v4 collision...](https://news.ycombinator.com/item?id=48060054)
* [2026-05-08, 07:04:24](https://news.ycombinator.com/item?id=48059662) - [ClojureScript Gets Async/Await](https://clojurescript.org/news/2026-05-07-release)
* [2026-05-08, 07:00:00](https://it.slashdot.org/story/26/05/08/0622227/the-canvas-hack-is-a-new-kind-of-ransomware-debacle?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Canvas Hack Is a New Kind of Ransomware Debacle](https://it.slashdot.org/story/26/05/08/0622227/the-canvas-hack-is-a-new-kind-of-ransomware-debacle?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-08, 06:54:42](https://lobste.rs/s/ot6g23/blaise_modern_self_hosting_object_pascal) - [blaise: A modern, self-hosting Object Pascal compiler built for the 2020s. Zero legacy, full ARC, and unified UTF-8](https://github.com/graemeg/blaise)
* [2026-05-08, 05:41:13](https://lobste.rs/s/gxogzo/from_supabase_clerk_better_auth) - [From Supabase to Clerk to Better Auth](https://blog.val.town/better-auth)
* [2026-05-08, 03:57:00](https://soylentnews.org/article.pl?sid=26/05/07/0148227&amp;from=rss) - [ Making Wooden Skis by Hand](https://soylentnews.org/article.pl?sid=26/05/07/0148227&amp;from=rss)
* [2026-05-08, 03:50:00](https://yro.slashdot.org/story/26/05/08/0339239/sam-altman-had-a-bad-day-in-court?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sam Altman Had a Bad Day In Court](https://yro.slashdot.org/story/26/05/08/0339239/sam-altman-had-a-bad-day-in-court?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-08, 02:49:01](https://news.ycombinator.com/item?id=48057901) - [Mojo 1.0 Beta](https://mojolang.org/)
* [2026-05-08, 01:44:18](https://lobste.rs/s/h7nu14/cuda_oxide_book) - [The cuda-oxide Book](https://nvlabs.github.io/cuda-oxide/)
* [2026-05-08, 01:41:53](https://lobste.rs/s/rwjmjm/cuda_oxide_cuda_oxide_is_experimental) - [cuda-oxide: cuda-oxide is an experimental Rust-to-CUDA compiler](https://github.com/NVlabs/cuda-oxide)
* [2026-05-08, 00:26:45](https://lobste.rs/s/n4fmkx/copy_fail_2_electric_boogaloo) - [Copy Fail 2: Electric Boogaloo](https://github.com/0xdeadbeefnetwork/Copy_Fail2-Electric_Boogaloo)
* [2026-05-07, 23:14:00](https://soylentnews.org/article.pl?sid=26/05/06/1722250&amp;from=rss) - [Taiwan Cops Say Student&apos;s Radio Kit Brought Bullet Trains to a Standstill](https://soylentnews.org/article.pl?sid=26/05/06/1722250&amp;from=rss)
* [2026-05-07, 23:02:11](https://news.ycombinator.com/item?id=48056227) - [Maybe you shouldn&apos;t install new software for a bit](https://xeiaso.net/blog/2026/abstain-from-install/)
* [2026-05-07, 23:00:00](https://news.slashdot.org/story/26/05/07/200212/imf-warns-new-ai-models-risk-systemic-shock-to-finance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [IMF Warns New AI Models Risk &apos;Systemic&apos; Shock To Finance](https://news.slashdot.org/story/26/05/07/200212/imf-warns-new-ai-models-risk-systemic-shock-to-finance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-07, 22:22:21](https://news.ycombinator.com/item?id=48055913) - [Canvas online again as ShinyHunters threatens to leak schools’ data](https://www.theverge.com/tech/926458/canvas-shinyhunters-breach)
* [2026-05-07, 22:13:16](https://lobste.rs/s/lecxsm/why_don_t_lowercase_letters_come_right) - [Why Don’t Lowercase Letters Come Right After Uppercase Letters in ASCII?](https://tylerhillery.com/blog/why-dont-lowercase-chars-come-after-upper/)
* [2026-05-07, 22:00:00](https://yro.slashdot.org/story/26/05/07/1952206/60-of-md5-password-hashes-are-crackable-in-under-an-hour?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [60% of MD5 Password Hashes Are Crackable In Under an Hour](https://yro.slashdot.org/story/26/05/07/1952206/60-of-md5-password-hashes-are-crackable-in-under-an-hour?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-07, 21:00:00](https://news.slashdot.org/story/26/05/07/1943229/ceos-want-tariff-refunds-as-earnings-take-a-hit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CEOs Want Tariff Refunds As Earnings Take a Hit](https://news.slashdot.org/story/26/05/07/1943229/ceos-want-tariff-refunds-as-earnings-take-a-hit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-07, 20:23:37](https://news.ycombinator.com/item?id=48054423) - [Cloudflare to cut about 20% of its workforce](https://www.reuters.com/business/world-at-work/cloudflare-cut-over-1100-jobs-2026-05-07/)
* [2026-05-07, 20:00:00](https://it.slashdot.org/story/26/05/07/1925210/microsoft-issues-warning-about-linux-copy-fail-vulnerability?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Issues Warning About Linux &apos;Copy Fail&apos; Vulnerability](https://it.slashdot.org/story/26/05/07/1925210/microsoft-issues-warning-about-linux-copy-fail-vulnerability?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-07, 19:21:32](https://news.ycombinator.com/item?id=48053623) - [Dirtyfrag: Universal Linux LPE](https://www.openwall.com/lists/oss-security/2026/05/07/8)
* [2026-05-07, 19:06:55](https://lobste.rs/s/lu4efg/dirty_frag_universal_linux_lpe) - [Dirty Frag: Universal Linux LPE](https://www.openwall.com/lists/oss-security/2026/05/07/8)
* [2026-05-07, 19:00:00](https://tech.slashdot.org/story/26/05/07/1715225/google-unveils-screenless-fitbit-air-google-health-app-to-replace-fitbit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Unveils Screenless Fitbit Air, Google Health App To Replace Fitbit](https://tech.slashdot.org/story/26/05/07/1715225/google-unveils-screenless-fitbit-air-google-health-app-to-replace-fitbit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-07, 18:29:00](https://soylentnews.org/article.pl?sid=26/05/06/1720223&amp;from=rss) - [The RAM Crisis Isn&apos;t Going Anywhere: Micron CEO Warns AI Will Need More Memory](https://soylentnews.org/article.pl?sid=26/05/06/1720223&amp;from=rss)
* [2026-05-07, 18:00:00](https://tech.slashdot.org/story/26/05/07/174208/linkedin-profile-visitor-lists-belong-to-the-people-says-noyb?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LinkedIn Profile Visitor Lists Belong to the People, Says Noyb](https://tech.slashdot.org/story/26/05/07/174208/linkedin-profile-visitor-lists-belong-to-the-people-says-noyb?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-07, 17:53:35](https://lobste.rs/s/pv9i7j/formatting_entire_25_million_line) - [Formatting an entire 25 million line codebase overnight: the rubyfmt story](https://stripe.dev/blog/formatting-an-entire-25-million-line-codebase-overnight-the-rubyfmt-story)
* [2026-05-07, 17:24:01](https://lobste.rs/s/kkzpdd/ploopy_bean_external_trackpoint) - [Ploopy Bean - external trackpoint](https://ploopy.co/bean/)
* [2026-05-07, 17:00:00](https://hardware.slashdot.org/story/26/05/07/1651222/motherboard-sales-collapse-by-more-than-25?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Motherboard Sales &apos;Collapse&apos; By More Than 25%](https://hardware.slashdot.org/story/26/05/07/1651222/motherboard-sales-collapse-by-more-than-25?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-07, 16:35:57](https://lobste.rs/s/h1srjn/jj_v0_41_0_is_out) - [jj v0.41.0 is out](https://github.com/jj-vcs/jj/releases/tag/v0.41.0)
* [2026-05-07, 16:09:44](https://lobste.rs/s/7zppv1/behind_scenes_hardening_firefox_with) - [Behind the Scenes Hardening Firefox with Claude Mythos Preview](https://hacks.mozilla.org/2026/05/behind-the-scenes-hardening-firefox/)
* [2026-05-07, 13:43:00](https://soylentnews.org/article.pl?sid=26/05/06/1719213&amp;from=rss) - [The US Just Found Enough Lithium To Rival China - Now Comes The Hard Part](https://soylentnews.org/article.pl?sid=26/05/06/1719213&amp;from=rss)
* [2026-05-07, 10:56:47](https://lobste.rs/s/azajfp/php_license_change_is_imminent) - [A PHP license change is imminent](https://lwn.net/Articles/1063993/)
* [2026-05-07, 09:45:18](https://lobste.rs/s/szi49u/ai_slop_is_killing_online_communities) - [AI Slop is Killing Online Communities](https://rmoff.net/2026/05/06/ai-slop-is-killing-online-communities/)
* [2026-05-07, 09:00:00](https://soylentnews.org/article.pl?sid=26/05/06/045204&amp;from=rss) - [Employees Are Now More Dangerous to Their Company Than External Hackers](https://soylentnews.org/article.pl?sid=26/05/06/045204&amp;from=rss)
* [2026-05-07, 05:37:10](https://news.ycombinator.com/item?id=48045778) - [The surprisingly complex journey to text-selectable client-side generated PDFs](https://sdocs.dev/blogs/journey-to-pdf-generation)
* [2026-05-07, 04:42:15](https://news.ycombinator.com/item?id=48045462) - [pg_flight_recorder: Continuously sample PostgreSQL system state via pg_cron](https://github.com/dventimisupabase/pg_flight_recorder)
* [2026-05-07, 04:13:00](https://soylentnews.org/article.pl?sid=26/05/06/0356228&amp;from=rss) - [Utah Will Ban VPN Use to Circumvent Age Verification](https://soylentnews.org/article.pl?sid=26/05/06/0356228&amp;from=rss)
* [2026-05-06, 23:30:00](https://soylentnews.org/article.pl?sid=26/05/06/0351248&amp;from=rss) - [OpenAI Explains the \&quot;codex-goblins\&quot; Problem](https://soylentnews.org/article.pl?sid=26/05/06/0351248&amp;from=rss)
* [2026-05-06, 18:45:00](https://soylentnews.org/article.pl?sid=26/05/06/0347215&amp;from=rss) - [Scientists Stunned by New Organic Molecules Found on Mars](https://soylentnews.org/article.pl?sid=26/05/06/0347215&amp;from=rss)
* [2026-05-06, 15:24:51](https://news.ycombinator.com/item?id=48037336) - [Rumors of my death are slightly exaggerated](https://news.ycombinator.com/item?id=48037336)
* [2026-05-06, 13:58:00](https://soylentnews.org/article.pl?sid=26/05/05/1130201&amp;from=rss) - [Samsung &amp; Intel Considered as Alternatives to TSMC for Apple Silicon Production](https://soylentnews.org/article.pl?sid=26/05/05/1130201&amp;from=rss)
* [2026-05-06, 09:15:00](https://soylentnews.org/article.pl?sid=26/05/05/1125244&amp;from=rss) - [Chinese EVs Can Now Project Movies From Their Headlights](https://soylentnews.org/article.pl?sid=26/05/05/1125244&amp;from=rss)
* [2026-05-06, 04:31:00](https://soylentnews.org/article.pl?sid=26/05/05/1123232&amp;from=rss) - [Toyota Built a $10 Billion Private Utopia—What&apos;s Going on in There?](https://soylentnews.org/article.pl?sid=26/05/05/1123232&amp;from=rss)
* [2026-05-05, 23:42:00](https://soylentnews.org/article.pl?sid=26/05/04/1443241&amp;from=rss) - [Someone Turned a PS5 Into a Linux Gaming PC, and It Actually Works](https://soylentnews.org/article.pl?sid=26/05/04/1443241&amp;from=rss)
* [2026-05-05, 18:50:00](https://soylentnews.org/article.pl?sid=26/05/04/1440249&amp;from=rss) - [AI Makes Granular Pricing Easier, but Consumer Psychology May Make It Less Profitable](https://soylentnews.org/article.pl?sid=26/05/04/1440249&amp;from=rss)
* [2026-05-05, 14:08:00](https://soylentnews.org/article.pl?sid=26/05/04/1439238&amp;from=rss) - [Round Up of Latest OS and Software Releases](https://soylentnews.org/article.pl?sid=26/05/04/1439238&amp;from=rss)
* [2026-05-05, 09:25:00](https://soylentnews.org/article.pl?sid=26/05/04/1436227&amp;from=rss) - [New Report Highlights Fructose as a Key Driver of Metabolic Disease](https://soylentnews.org/article.pl?sid=26/05/04/1436227&amp;from=rss)
* [2026-05-05, 04:41:00](https://soylentnews.org/article.pl?sid=26/05/04/1434244&amp;from=rss) - [Canonical’s Ubuntu Servers Go Down as Hackers Demand Direct Talks](https://soylentnews.org/article.pl?sid=26/05/04/1434244&amp;from=rss)
* [2026-05-04, 23:56:00](https://soylentnews.org/article.pl?sid=26/05/04/1427214&amp;from=rss) - [Anthropic Secretly Installs Spyware When You Install Claude Desktop](https://soylentnews.org/article.pl?sid=26/05/04/1427214&amp;from=rss)
* [2026-05-04, 19:07:00](https://soylentnews.org/article.pl?sid=26/05/03/0258243&amp;from=rss) - [NHS Goes to War Against Open Source](https://soylentnews.org/article.pl?sid=26/05/03/0258243&amp;from=rss)
* [2026-05-04, 14:20:00](https://soylentnews.org/article.pl?sid=26/05/03/0252239&amp;from=rss) - [Zambia Cancels Global Digital Freedoms Conference Days Before Start](https://soylentnews.org/article.pl?sid=26/05/03/0252239&amp;from=rss)
* [2026-05-04, 09:39:00](https://soylentnews.org/article.pl?sid=26/05/03/0232241&amp;from=rss) - [An Amateur Just Solved a 60-Year-Old Math Problem—by Asking AI](https://soylentnews.org/article.pl?sid=26/05/03/0232241&amp;from=rss)
* [2026-05-04, 04:52:00](https://soylentnews.org/article.pl?sid=26/05/03/0223205&amp;from=rss) - [The Mushroom Making People Hallucinate Dozens of Tiny Humans](https://soylentnews.org/article.pl?sid=26/05/03/0223205&amp;from=rss)
* [2026-05-04, 00:09:00](https://soylentnews.org/article.pl?sid=26/05/03/020241&amp;from=rss) - [Ask.com Closes](https://soylentnews.org/article.pl?sid=26/05/03/020241&amp;from=rss)
