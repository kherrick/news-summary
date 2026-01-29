# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Apple's Second-Biggest Acquisition Ever Is a Startup That Interprets Silent Speech](https://apple.slashdot.org/story/26/01/29/180230/apples-second-biggest-acquisition-ever-is-a-startup-that-interprets-silent-speech?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Apple makes a groundbreaking move by acquiring a startup specializing in interpreting silent speech, marking its second-largest acquisition to date.

* [Europe’s next-generation weather satellite sends back first images](https://www.esa.int/Applications/Observing_the_Earth/Meteorological_missions/meteosat_third_generation/Europe_s_next-generation_weather_satellite_sends_back_first_images) - A newly launched European weather satellite shares its first images, showing the advancements in meteorological observation and space technology.

* [Waymo robotaxi hits a child near an elementary school in Santa Monica](https://techcrunch.com/2026/01/29/waymo-robotaxi-hits-a-child-near-an-elementary-school-in-santa-monica/) - A concerning incident highlights the potential dangers of autonomous vehicles after a Waymo robotaxi strikes a child near a school in Santa Monica.

* [Project Genie: Experimenting with infinite, interactive worlds](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/project-genie/) - Google DeepMind unveils 'Project Genie,' an experimental framework for creating infinite and interactive digital environments.

* [A simple HTTP tunnel ngrok alternative (2024)](https://github.com/peter-leonov/webhooks-proxy-tunnel) - Developers can now explore this lightweight and straightforward alternative to ngrok for HTTP tunneling.

## Privacy and Cybersecurity

* [Massive AI Chat App Leaked Millions of Users Private Conversations](https://yro.slashdot.org/story/26/01/29/1745249/massive-ai-chat-app-leaked-millions-of-users-private-conversations?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A widespread data leak from a popular AI chatbot has exposed millions of private user conversations.

* [US cybersecurity chief leaked sensitive government files to ChatGPT: Report](https://www.dexerto.com/entertainment/us-cybersecurity-chief-leaked-sensitive-government-files-to-chatgpt-report-3311462/) - A report alleges that a US cybersecurity head inadvertently leaked classified files while using ChatGPT, alarming experts on data privacy risks.

* [FBI Seizes RAMP Cybercrime Forum Used By Ransomware Gangs](https://yro.slashdot.org/story/26/01/29/0533228/fbi-seizes-ramp-cybercrime-forum-used-by-ransomware-gangs?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The FBI takes down a cybercrime forum instrumental in enabling ransomware gangs, disrupting illicit activities.

## Health and Science

* [Vitamin D and Omega-3 have a larger effect on depression than antidepressants](https://blog.ncase.me/on-depression/) - A new study reveals that supplements like Vitamin D and Omega-3 may significantly reduce symptoms of depression, surpassing traditional antidepressants.

* [Drug trio found to block tumour resistance in pancreatic cancer](https://www.drugtargetreview.com/news/192714/drug-trio-found-to-block-tumour-resistance-in-pancreatic-cancer/) - Researchers discover a drug trio that effectively combats tumor resistance in pancreatic cancer, offering new hope for treatments.

## Artificial Intelligence and Software

* [OpenAI's In-House Data Agent](https://openai.com/index/inside-our-in-house-data-agent) - OpenAI sheds light on the functionality and inner workings of its proprietary in-house data agent.

* [OTelBench: AI struggles with simple SRE tasks (Opus 4.5 scores only 29%)](https://quesma.com/blog/introducing-otel-bench/) - Testing reveals AI faces difficulties in handling even basic system reliability tasks, raising questions about dependence on machine intelligence.

* [AI is Already Writing Almost One-Third of New Software Code](https://soylentnews.org/article.pl?sid=26/01/27/0352207&from=rss) - A new report highlights how AI is playing an increasingly significant role in software development, now responsible for nearly a third of new code.

* [Mermaid ASCII: Render Mermaid diagrams in your terminal](https://mermaid-ascii.art/) - A creative new tool lets developers generate Mermaid diagrams in plain ASCII format directly in terminal environments.

## Finance and Market Trends

* [Why Private Equity Is Suddenly Awash With Zombie Firms](https://news.slashdot.org/story/26/01/29/1843217/why-private-equity-is-suddenly-awash-with-zombie-firms?utm_source=rss1.0mainlinkanon&utm_medium=feed) - An in-depth look at the challenges facing private equity firms as they grapple with an influx of zombie companies.

* [Tesla is committing automotive suicide](https://electrek.co/2026/01/29/tesla-committing-automotive-suicide/) - Tesla faces criticism over recent decisions seen as potentially disastrous for its long-term survival.

## Entertainment and Culture

* [Brandon Sanderson's Literary Fantasy Universe 'Cosmere' Picked Up by Apple TV](https://entertainment.slashdot.org/story/26/01/29/0544212/brandon-sandersons-literary-fantasy-universe-cosmere-picked-up-by-apple-tv?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Renowned author Brandon Sanderson's fantasy world, 'Cosmere,' is being adapted for Apple TV, promising to bring the epic story to screen audiences.

* [Extremophile Molds Are Invading Art Museums](https://science.slashdot.org/story/26/01/28/2332202/extremophile-molds-are-invading-art-museums?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Art preservationists are now tackling the unique challenge posed by extremophile molds invading museums.

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

* [2026-01-29, 18:50:00](https://news.slashdot.org/story/26/01/29/1843217/why-private-equity-is-suddenly-awash-with-zombie-firms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Private Equity Is Suddenly Awash With Zombie Firms](https://news.slashdot.org/story/26/01/29/1843217/why-private-equity-is-suddenly-awash-with-zombie-firms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 18:45:27](https://news.ycombinator.com/item?id=46814569) - [My Mom and Dr. DeepSeek (2025)](https://restofworld.org/2025/ai-chatbot-china-sick/)
* [2026-01-29, 18:17:54](https://news.ycombinator.com/item?id=46814115) - [OpenAI&apos;s In-House Data Agent](https://openai.com/index/inside-our-in-house-data-agent)
* [2026-01-29, 18:16:45](https://news.ycombinator.com/item?id=46814089) - [Tesla is committing automotive suicide](https://electrek.co/2026/01/29/tesla-committing-automotive-suicide/)
* [2026-01-29, 18:10:00](https://apple.slashdot.org/story/26/01/29/180230/apples-second-biggest-acquisition-ever-is-a-startup-that-interprets-silent-speech?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple&apos;s Second-Biggest Acquisition Ever Is a Startup That Interprets Silent Speech](https://apple.slashdot.org/story/26/01/29/180230/apples-second-biggest-acquisition-ever-is-a-startup-that-interprets-silent-speech?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 18:00:10](https://news.ycombinator.com/item?id=46813834) - [AI&apos;s Impact on Engineering Jobs May Be Different Than Expected](https://semiengineering.com/ais-impact-on-engineering-jobs-may-be-different-than-initial-projections/)
* [2026-01-29, 17:45:00](https://yro.slashdot.org/story/26/01/29/1745249/massive-ai-chat-app-leaked-millions-of-users-private-conversations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Massive AI Chat App Leaked Millions of Users Private Conversations](https://yro.slashdot.org/story/26/01/29/1745249/massive-ai-chat-app-leaked-millions-of-users-private-conversations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 17:02:39](https://news.ycombinator.com/item?id=46812933) - [Project Genie: Experimenting with infinite, interactive worlds](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/project-genie/)
* [2026-01-29, 17:00:42](https://news.ycombinator.com/item?id=46812892) - [Reflex (YC W23) Senior Software Engineer Infra](https://www.ycombinator.com/companies/reflex/jobs/Jcwrz7A-lead-software-engineer-infra)
* [2026-01-29, 16:47:00](https://games.slashdot.org/story/26/01/29/1647211/xbox-hardware-revenue-craters-32?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Xbox Hardware Revenue Craters 32%](https://games.slashdot.org/story/26/01/29/1647211/xbox-hardware-revenue-craters-32?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 16:42:33](https://news.ycombinator.com/item?id=46812608) - [Launch HN: AgentMail (YC S25) – An API that gives agents their own email inboxes](https://news.ycombinator.com/item?id=46812608)
* [2026-01-29, 16:41:09](https://lobste.rs/s/gc7ase/pagelove_building_better_web_for_humans) - [Pagelove: Building a better web — for humans and machines](https://page.love/blog/04-the-shape-of-pagelove.html)
* [2026-01-29, 16:38:49](https://lobste.rs/s/0aw9fv/category_theory_inclusivity) - [Category Theory and Inclusivity](https://youtu.be/HVMxSbJPr4g)
* [2026-01-29, 16:12:19](https://news.ycombinator.com/item?id=46812173) - [US cybersecurity chief leaked sensitive government files to ChatGPT: Report](https://www.dexerto.com/entertainment/us-cybersecurity-chief-leaked-sensitive-government-files-to-chatgpt-report-3311462/)
* [2026-01-29, 16:12:00](https://tech.slashdot.org/story/26/01/29/1611252/windows-11-has-reached-1-billion-users-faster-than-windows-10?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Windows 11 Has Reached 1 Billion Users Faster Than Windows 10](https://tech.slashdot.org/story/26/01/29/1611252/windows-11-has-reached-1-billion-users-faster-than-windows-10?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 16:11:04](https://news.ycombinator.com/item?id=46812159) - [Drug trio found to block tumour resistance in pancreatic cancer](https://www.drugtargetreview.com/news/192714/drug-trio-found-to-block-tumour-resistance-in-pancreatic-cancer/)
* [2026-01-29, 16:08:20](https://lobste.rs/s/zcfnh9/micropythonos_ultimate_micropython) - [MicroPythonOS - The Ultimate MicroPython Operating System](https://micropythonos.com/)
* [2026-01-29, 16:07:35](https://lobste.rs/s/b7lh3o/beta_testing_webusbunpinner_tool) - [Beta testing of WebUSBUnpinner - a tool to investigate platform worker&apos;s privacy and rights violations](https://reversing.works/posts/2026/01/help-reversing.works-empower-workers-by-testing-our-tool/)
* [2026-01-29, 15:49:04](https://news.ycombinator.com/item?id=46811762) - [Heating homes with the largest particle accelerator](https://home.cern/news/news/cern/heating-homes-worlds-largest-particle-accelerator)
* [2026-01-29, 15:42:57](https://news.ycombinator.com/item?id=46811664) - [Is the RAM shortage killing small VPS hosts?](https://www.fourplex.net/2026/01/29/is-the-ram-shortage-killing-small-vps-hosts/)
* [2026-01-29, 15:40:00](https://soylentnews.org/article.pl?sid=26/01/27/0515229&amp;from=rss) - [Microsoft Admits Windows 11 Update Is Nuking System Drives, but There&apos;s A &apos;Limited Number Of Reports](https://soylentnews.org/article.pl?sid=26/01/27/0515229&amp;from=rss)
* [2026-01-29, 15:37:21](https://news.ycombinator.com/item?id=46811588) - [OTelBench: AI struggles with simple SRE tasks (Opus 4.5 scores only 29%)](https://quesma.com/blog/introducing-otel-bench/)
* [2026-01-29, 15:22:00](https://tech.slashdot.org/story/26/01/29/151223/waymo-robotaxi-hits-a-child-near-an-elementary-school-in-santa-monica?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Waymo Robotaxi Hits a Child Near an Elementary School in Santa Monica](https://tech.slashdot.org/story/26/01/29/151223/waymo-robotaxi-hits-a-child-near-an-elementary-school-in-santa-monica?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 15:20:12](https://lobste.rs/s/g0te8h/how_choose_colors_for_your_cli) - [How to Choose Colors for Your CLI Applications](https://blog.xoria.org/terminal-colors/)
* [2026-01-29, 15:05:55](https://lobste.rs/s/x2pwi5/introducing_fluux_messenger_modern_xmpp) - [Introducing Fluux Messenger: A Modern XMPP Client Born from a Holiday Coding Session](https://www.process-one.net/blog/introducing-fluux-messenger-a-modern-xmpp-client-born-from-a-holiday-coding-session/)
* [2026-01-29, 15:02:24](https://lobste.rs/s/c0xw18/atomvm_2025_year_review) - [AtomVM 2025 Year in Review](https://substack.com/home/post/p-186191026)
* [2026-01-29, 14:49:08](https://news.ycombinator.com/item?id=46810904) - [How to Choose Colors for Your CLI Applications (2023)](https://blog.xoria.org/terminal-colors/)
* [2026-01-29, 14:43:07](https://news.ycombinator.com/item?id=46810828) - [Run Clawdbot/Moltbot on Cloudflare with Moltworker](https://blog.cloudflare.com/moltworker-self-hosted-ai-agent/)
* [2026-01-29, 14:40:00](https://mobile.slashdot.org/story/26/01/29/1431237/seven-of-the-worlds-ten-best-selling-smartphones-in-2025-were-iphones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Seven of the World&apos;s Ten Best-Selling Smartphones in 2025 Were iPhones](https://mobile.slashdot.org/story/26/01/29/1431237/seven-of-the-worlds-ten-best-selling-smartphones-in-2025-were-iphones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 14:20:21](https://news.ycombinator.com/item?id=46810536) - [Break Me If You Can: Exploiting PKO and Relay Attacks in 3DES/AES NFC](https://www.breakmeifyoucan.com/)
* [2026-01-29, 14:17:24](https://lobste.rs/s/icj2ce/narwhal_extensible_pub_sub_messaging) - [Narwhal: an extensible pub/sub messaging server for edge applications](https://github.com/narwhal-io/narwhal)
* [2026-01-29, 14:08:56](https://news.ycombinator.com/item?id=46810401) - [Waymo robotaxi hits a child near an elementary school in Santa Monica](https://techcrunch.com/2026/01/29/waymo-robotaxi-hits-a-child-near-an-elementary-school-in-santa-monica/)
* [2026-01-29, 14:08:34](https://lobste.rs/s/9hjydz/history_greenfield_browser_wayland) - [History of Greenfield (in-browser Wayland compositor)](https://wayouttheresoftware.blogspot.com/2023/07/some-history-about-greenfield.html)
* [2026-01-29, 14:03:12](https://news.ycombinator.com/item?id=46810337) - [Playing Board Games with Deep Convolutional Neural Network on 8bit Motorola 6809](https://ipsj.ixsq.nii.ac.jp/records/229345)
* [2026-01-29, 14:00:00](https://mobile.slashdot.org/story/26/01/29/1338204/nothing-ceo-says-company-wont-launch-new-flagship-smartphone-every-year-for-the-sake-of-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nothing CEO Says Company Won&apos;t Launch New Flagship Smartphone Every Year &apos;For the Sake of It&apos;](https://mobile.slashdot.org/story/26/01/29/1338204/nothing-ceo-says-company-wont-launch-new-flagship-smartphone-every-year-for-the-sake-of-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 13:59:07](https://news.ycombinator.com/item?id=46810282) - [Claude Code Daily Benchmarks for Degradation Tracking](https://marginlab.ai/trackers/claude-code/)
* [2026-01-29, 13:00:00](https://tech.slashdot.org/story/26/01/29/0559255/hundreds-of-gatik-robot-delivery-trucks-headed-for-us-roads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Hundreds&apos; of Gatik Robot Delivery Trucks Headed For US Roads](https://tech.slashdot.org/story/26/01/29/0559255/hundreds-of-gatik-robot-delivery-trucks-headed-for-us-roads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 12:45:52](https://lobste.rs/s/ruibzy/looi_minimal_customizable_new_tab_page) - [Looi — A Minimal, Customizable New Tab Page for Firefox, Chrome(with Widgets &amp; GitHub Sync)](https://github.com/prinzpiuz/looi)
* [2026-01-29, 12:42:58](https://news.ycombinator.com/item?id=46809420) - [The Sovereign Tech Fund Invests in Scala](https://www.scala-lang.org/blog/2026/01/27/sta-invests-in-scala.html)
* [2026-01-29, 12:05:49](https://lobste.rs/s/xnjpyv/announcing_winapp_windows_app) - [Announcing winapp, the Windows App Development CLI](https://blogs.windows.com/windowsdeveloper/2026/01/22/announcing-winapp-the-windows-app-development-cli/)
* [2026-01-29, 10:59:00](https://soylentnews.org/article.pl?sid=26/01/27/0441241&amp;from=rss) - [Breakthrough Wireless Transceiver Transmits Data 24 Times Faster Than 5G Connections](https://soylentnews.org/article.pl?sid=26/01/27/0441241&amp;from=rss)
* [2026-01-29, 10:35:00](https://news.ycombinator.com/item?id=46808251) - [Vitamin D and Omega-3 have a larger effect on depression than antidepressants](https://blog.ncase.me/on-depression/)
* [2026-01-29, 10:00:00](https://yro.slashdot.org/story/26/01/29/0533228/fbi-seizes-ramp-cybercrime-forum-used-by-ransomware-gangs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FBI Seizes RAMP Cybercrime Forum Used By Ransomware Gangs](https://yro.slashdot.org/story/26/01/29/0533228/fbi-seizes-ramp-cybercrime-forum-used-by-ransomware-gangs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 09:34:06](https://lobste.rs/s/97wsdw/phantom_obligation) - [Phantom Obligation](https://terrygodier.com/phantom-obligation)
* [2026-01-29, 09:22:36](https://lobste.rs/s/a3qcah/9front_gefs_service_pack_1_released) - [9front \&quot;GEFS SERVICE PACK 1\&quot; released](https://9front.org/releases/2026/01/24/0/)
* [2026-01-29, 09:20:16](https://lobste.rs/s/g0ep2s/30_years_reactos) - [30 years of ReactOS](https://reactos.org/blogs/30yrs-of-ros/)
* [2026-01-29, 08:28:41](https://lobste.rs/s/pimcz4/simple_http_tunnel_ngrok_alternative) - [A simple HTTP tunnel ngrok alternative (2024)](https://github.com/peter-leonov/webhooks-proxy-tunnel)
* [2026-01-29, 07:07:17](https://news.ycombinator.com/item?id=46806773) - [Europe’s next-generation weather satellite sends back first images](https://www.esa.int/Applications/Observing_the_Earth/Meteorological_missions/meteosat_third_generation/Europe_s_next-generation_weather_satellite_sends_back_first_images)
* [2026-01-29, 07:00:00](https://entertainment.slashdot.org/story/26/01/29/0544212/brandon-sandersons-literary-fantasy-universe-cosmere-picked-up-by-apple-tv?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Brandon Sanderson&apos;s Literary Fantasy Universe &apos;Cosmere&apos; Picked Up by Apple TV](https://entertainment.slashdot.org/story/26/01/29/0544212/brandon-sandersons-literary-fantasy-universe-cosmere-picked-up-by-apple-tv?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 06:11:00](https://soylentnews.org/article.pl?sid=26/01/27/0433200&amp;from=rss) - [Red Dwarfs are Too Dim to Generate Complex Life](https://soylentnews.org/article.pl?sid=26/01/27/0433200&amp;from=rss)
* [2026-01-29, 05:31:07](https://lobste.rs/s/651hoq/bf_tree_modern_concurrent_larger_than) - [Bf-Tree A Modern Concurrent Larger-Than-Memory Range Index](https://github.com/microsoft/bf-tree/)
* [2026-01-29, 04:39:10](https://lobste.rs/s/hcw4pb/some_notes_on_starting_use_django) - [Some notes on starting to use Django](https://jvns.ca/blog/2026/01/27/some-notes-on-starting-to-use-django/)
* [2026-01-29, 03:58:33](https://news.ycombinator.com/item?id=46805665) - [We can’t send mail farther than 500 miles (2002)](https://web.mit.edu/jemorris/humor/500-miles)
* [2026-01-29, 03:30:00](https://science.slashdot.org/story/26/01/28/2332202/extremophile-molds-are-invading-art-museums?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Extremophile Molds Are Invading Art Museums](https://science.slashdot.org/story/26/01/28/2332202/extremophile-molds-are-invading-art-museums?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 02:08:40](https://news.ycombinator.com/item?id=46804828) - [Mermaid ASCII: Render Mermaid diagrams in your terminal](https://mermaid-ascii.art/)
* [2026-01-29, 02:02:00](https://tech.slashdot.org/story/26/01/28/2239249/fully-electric-vehicle-sales-in-eu-overtake-petrol-for-first-time-in-december?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fully Electric Vehicle Sales In EU Overtake Petrol For First Time In December](https://tech.slashdot.org/story/26/01/28/2239249/fully-electric-vehicle-sales-in-eu-overtake-petrol-for-first-time-in-december?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 01:30:42](https://lobste.rs/s/0f7x2a/i_still_don_t_understand_this_syn_attack) - [I still don&apos;t understand this SYN attack, but now I can block it easily](https://boston.conman.org/2026/01/28.2)
* [2026-01-29, 01:30:00](https://soylentnews.org/article.pl?sid=26/01/27/0352207&amp;from=rss) - [AI is Already Writing Almost One-Third of New Software Code](https://soylentnews.org/article.pl?sid=26/01/27/0352207&amp;from=rss)
* [2026-01-29, 01:25:00](https://linux.slashdot.org/story/26/01/28/2253239/kernel-community-drafts-a-plan-for-replacing-linus-torvalds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Kernel Community Drafts a Plan For Replacing Linus Torvalds](https://linux.slashdot.org/story/26/01/28/2253239/kernel-community-drafts-a-plan-for-replacing-linus-torvalds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 00:45:00](https://mobile.slashdot.org/story/26/01/28/2233210/french-lawmakers-vote-to-ban-social-media-use-by-under-15s?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [French Lawmakers Vote To Ban Social Media Use By Under-15s](https://mobile.slashdot.org/story/26/01/28/2233210/french-lawmakers-vote-to-ban-social-media-use-by-under-15s?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-28, 20:59:30](https://news.ycombinator.com/item?id=46801419) - [Apple to soon take up to 30% cut from all Patreon creators in iOS app](https://www.macrumors.com/2026/01/28/patreon-apple-tax/)
* [2026-01-28, 20:39:00](https://soylentnews.org/article.pl?sid=26/01/26/1911209&amp;from=rss) - [The Return of Digg, and the Proliferation of Cancel Culture](https://soylentnews.org/article.pl?sid=26/01/26/1911209&amp;from=rss)
* [2026-01-28, 19:56:09](https://lobste.rs/s/avdx9j/bootstrap_chain_for_nixos_which_builds) - [\&quot;a bootstrap chain for NixOS which builds the whole system from a small hand-auditable binary seed\&quot;](https://chaos.social/@nzbr/115973847897716839)
* [2026-01-28, 16:34:54](https://lobste.rs/s/pnrw6j/ariel_os_is_library_operating_system_for) - [Ariel OS is a library operating system for secure, memory-safe, low-power Internet of Things, written in Rust](https://github.com/ariel-os/ariel-os)
* [2026-01-28, 15:55:00](https://soylentnews.org/article.pl?sid=26/01/26/197234&amp;from=rss) - [Socializing Alone: The Downside of Communication Technology](https://soylentnews.org/article.pl?sid=26/01/26/197234&amp;from=rss)
* [2026-01-28, 13:44:48](https://lobste.rs/s/rcffs8/make_ts) - [make.ts](https://matklad.github.io/2026/01/27/make-ts.html)
* [2026-01-28, 11:59:30](https://lobste.rs/s/1omm6b/uefigame_win_boot_lose_shutdown) - [UEFIGame: \&quot;Win -&gt; Boot, Lose -&gt; Shutdown\&quot;](https://github.com/mycroftsnm/UEFIGame)
* [2026-01-28, 11:13:00](https://soylentnews.org/article.pl?sid=26/01/26/195201&amp;from=rss) - [TSMC Says AI Demand is “Endless” After Record Q4 Earnings](https://soylentnews.org/article.pl?sid=26/01/26/195201&amp;from=rss)
* [2026-01-28, 07:42:25](https://lobste.rs/s/pjuesf/rise_sanityware) - [The Rise of Sanityware](https://thatshubham.com/blog/2026.html)
* [2026-01-28, 06:27:00](https://soylentnews.org/article.pl?sid=26/01/26/192227&amp;from=rss) - [Design Your Next Building Out of Bamboo](https://soylentnews.org/article.pl?sid=26/01/26/192227&amp;from=rss)
* [2026-01-28, 01:42:00](https://soylentnews.org/article.pl?sid=26/01/26/191227&amp;from=rss) - [North Sea Winds Of Change](https://soylentnews.org/article.pl?sid=26/01/26/191227&amp;from=rss)
* [2026-01-27, 21:02:00](https://soylentnews.org/article.pl?sid=26/01/26/1857242&amp;from=rss) - [Proton VPN Reveals Major Linux Makeover](https://soylentnews.org/article.pl?sid=26/01/26/1857242&amp;from=rss)
* [2026-01-27, 18:08:48](https://lobste.rs/s/kaftkn/i_started_identifying_corporate_devices) - [I Started Identifying Corporate Devices in My Software](https://lgug2z.com/articles/i-started-identifying-corporate-devices-in-my-software/)
* [2026-01-27, 16:22:52](https://lobste.rs/s/csxfc6/cloudflare_claimed_they_implemented) - [Cloudflare claimed they implemented Matrix on Cloudflare workers. They didn&apos;t](https://tech.lgbt/@JadedBlueEyes/115967791152135761)
* [2026-01-27, 16:19:00](https://soylentnews.org/article.pl?sid=26/01/26/1850245&amp;from=rss) - [80386 Multiplication and Division](https://soylentnews.org/article.pl?sid=26/01/26/1850245&amp;from=rss)
* [2026-01-27, 13:54:09](https://news.ycombinator.com/item?id=46779922) - [Show HN: ShapedQL – A SQL engine for multi-stage ranking and RAG](https://playground.shaped.ai)
* [2026-01-27, 11:39:00](https://soylentnews.org/article.pl?sid=26/01/25/1435251&amp;from=rss) - [Microsoft CEO Says AI Needs to Have Wider Impact or Risk Quickly Losing \&quot;Social Permission\&quot;](https://soylentnews.org/article.pl?sid=26/01/25/1435251&amp;from=rss)
* [2026-01-27, 06:54:00](https://soylentnews.org/article.pl?sid=26/01/25/1419203&amp;from=rss) - [The Hidden Complexity Crisis: When Simple Radio Buttons Require 200+ Lines of Code](https://soylentnews.org/article.pl?sid=26/01/25/1419203&amp;from=rss)
* [2026-01-27, 02:08:00](https://soylentnews.org/article.pl?sid=26/01/25/1410231&amp;from=rss) - [Elon Musk Restarts Dojo3 &apos;Space&apos; Supercomputer Project As AI5 Chip Design Gets In &apos;Good Shape&apos;](https://soylentnews.org/article.pl?sid=26/01/25/1410231&amp;from=rss)
* [2026-01-26, 21:56:05](https://news.ycombinator.com/item?id=46772132) - [Making niche solutions is the point](https://ntietz.com/blog/making-niche-solutions-is-the-point/)
* [2026-01-26, 21:19:00](https://soylentnews.org/article.pl?sid=26/01/25/145215&amp;from=rss) - [Apple&apos;s Enshittification Moment: How the App Store is Quietly Abandoning User Trust](https://soylentnews.org/article.pl?sid=26/01/25/145215&amp;from=rss)
* [2026-01-26, 16:38:00](https://soylentnews.org/article.pl?sid=26/01/25/1312202&amp;from=rss) - [Snover.exit()](https://soylentnews.org/article.pl?sid=26/01/25/1312202&amp;from=rss)
* [2026-01-26, 11:55:00](https://soylentnews.org/article.pl?sid=26/01/25/0439223&amp;from=rss) - [Starlink Now Uses Customers&apos; Personal Data for AI Training](https://soylentnews.org/article.pl?sid=26/01/25/0439223&amp;from=rss)
* [2026-01-26, 07:11:00](https://soylentnews.org/article.pl?sid=26/01/25/0432221&amp;from=rss) - [Attackers Find a New Way to Share Malicious Snap Packages](https://soylentnews.org/article.pl?sid=26/01/25/0432221&amp;from=rss)
* [2026-01-26, 03:26:00](https://soylentnews.org/article.pl?sid=26/01/25/0429246&amp;from=rss) - [UK MPs Call for AI Stress Testing in Financial Services](https://soylentnews.org/article.pl?sid=26/01/25/0429246&amp;from=rss)
* [2026-01-26, 01:09:14](https://news.ycombinator.com/item?id=46760546) - [Usenet personality](https://en.wikipedia.org/wiki/Usenet_personality)
* [2026-01-25, 22:36:00](https://soylentnews.org/article.pl?sid=26/01/24/0116243&amp;from=rss) - [Microsoft Gave FBI a Set of BitLocker Encryption Keys to Unlock Suspects’ Laptops](https://soylentnews.org/article.pl?sid=26/01/24/0116243&amp;from=rss)
* [2026-01-25, 17:53:00](https://soylentnews.org/article.pl?sid=26/01/24/0114253&amp;from=rss) - [This May Be The Grossest Eye Pic Ever—but the Cause is What’s Truly Horrifying](https://soylentnews.org/article.pl?sid=26/01/24/0114253&amp;from=rss)
* [2026-01-25, 13:54:57](https://news.ycombinator.com/item?id=46754097) - [Computing Sharding with Einsum](https://blog.ezyang.com/2026/01/computing-sharding-with-einsum/)
* [2026-01-25, 13:02:00](https://soylentnews.org/article.pl?sid=26/01/24/0112225&amp;from=rss) - [OpenAI Rolls Out Ads in ChatGPT as Expenses Skyrocket](https://soylentnews.org/article.pl?sid=26/01/24/0112225&amp;from=rss)
* [2026-01-25, 08:30:00](https://soylentnews.org/article.pl?sid=26/01/24/0110242&amp;from=rss) - [Major River Deltas Are Sinking Faster Than Sea-Level Rise](https://soylentnews.org/article.pl?sid=26/01/24/0110242&amp;from=rss)
* [2026-01-25, 03:38:00](https://soylentnews.org/article.pl?sid=26/01/24/019242&amp;from=rss) - [How Greenwashing Creates &apos;False Stability&apos; for Companies](https://soylentnews.org/article.pl?sid=26/01/24/019242&amp;from=rss)
