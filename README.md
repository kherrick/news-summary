# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Technology

* [AI and the Ship of Theseus](https://lucumr.pocoo.org/2026/3/5/theseus/) - An intriguing look into the philosophical questions about AI's evolution and identity. [Comments](https://lobste.rs/s/3dtgmr/ai_ship_theseus)

* [AI Art Isn't Art, or Copyrightable Art Anyway](https://soylentnews.org/article.pl?sid=26/03/05/0714212&amp;from=rss) - A debate on whether AI-generated art qualifies as 'art' in terms of originality and copyright. [Comments](https://soylentnews.org/article.pl?sid=26/03/05/0714212&amp;from=rss)

* [Relicensing with AI-Assisted Rewrite](https://tuananh.net/2026/03/05/relicensing-with-ai-assisted-rewrite/) - Insights into how AI tools streamline relicensing workflows. [Comments](https://news.ycombinator.com/item?id=47257803)

## Security and Privacy

* [Google Safe Browsing Missed 84% of Phishing Sites We Found in February](https://www.norn-labs.com/blog/huginn-report-feb-2026) - Highlighting shortcomings in the Google Safe Browsing feature. [Comments](https://news.ycombinator.com/item?id=47262347)

* [Anonymous Credentials: an Illustrated Primer](https://soylentnews.org/article.pl?sid=26/03/04/1535231&amp;from=rss) - A detailed explanation of anonymous credential systems. [Comments](https://soylentnews.org/article.pl?sid=26/03/04/1535231&amp;from=rss)

* [LLMs Can Unmask Pseudonymous Users at Scale With Surprising Accuracy](https://soylentnews.org/article.pl?sid=26/03/04/1318201&amp;from=rss) - A study on how large language models can compromise user anonymity. [Comments](https://soylentnews.org/article.pl?sid=26/03/04/1318201&amp;from=rss)

## Environmental Concerns

* [Rising Carbon Dioxide Levels Now Detected in Human Blood](https://phys.org/news/2026-02-carbon-dioxide-human-blood.html) - A finding on the impact of rising CO2 levels on human health. [Comments](https://news.ycombinator.com/item?id=47261968)

* [Solar In Poor Countries Is Creating a Huge Lead Hazard](https://hardware.slashdot.org/story/26/03/04/2238206/solar-in-poor-countries-is-creating-a-huge-lead-hazard?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Investigation into how solar initiatives contribute to lead pollution. [Comments](https://hardware.slashdot.org/story/26/03/04/2238206/solar-in-poor-countries-is-creating-a-huge-lead-hazard?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Satellites Found a 'Brown Ribbon' Near Africa – Now Scientists Are Sounding Alarms](https://soylentnews.org/article.pl?sid=26/03/02/2018219&amp;from=rss) - Alarm bells over a mysterious environmental phenomenon. [Comments](https://soylentnews.org/article.pl?sid=26/03/02/2018219&amp;from=rss)

## Corporate Developments

* [US Tech Firms Pledge At White House To Bear Costs of Energy For Datacenters](https://yro.slashdot.org/story/26/03/05/0537244/us-tech-firms-pledge-at-white-house-to-bear-costs-of-energy-for-datacenters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Tech giants commit to covering renewable energy costs for data centers. [Comments](https://yro.slashdot.org/story/26/03/05/0537244/us-tech-firms-pledge-at-white-house-to-bear-costs-of-energy-for-datacenters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Google Ends Its 30% App Store Fee, Welcomes Third-Party App Stores](https://developers.slashdot.org/story/26/03/04/2218226/google-ends-its-30-app-store-fee-welcomes-third-party-app-stores?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Google significantly changes its app store policies. [Comments](https://developers.slashdot.org/story/26/03/04/2218226/google-ends-its-30-app-store-fee-welcomes-third-party-app-stores?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Nvidia PersonaPlex 7B on Apple Silicon: Full-Duplex Speech-to-Speech in Swift](https://blog.ivan.digital/nvidia-personaplex-7b-on-apple-silicon-full-duplex-speech-to-speech-in-native-swift-with-mlx-0aa5276f2e23) - Nvidia's AI-powered project on Apple hardware. [Comments](https://news.ycombinator.com/item?id=47258801)

## Space Exploration and Advancements

* [No Fooling: NASA Targets April 1 for Artemis II Launch to the Moon](https://soylentnews.org/article.pl?sid=26/03/05/0523208&amp;from=rss) - Upcoming lunar mission scheduled by NASA. [Comments](https://soylentnews.org/article.pl?sid=26/03/05/0523208&amp;from=rss)

* [World-first Gigabit Laser Link Between Aircraft and Geostationary Satellite](https://www.esa.int/Applications/Connectivity_and_Secure_Communications/World-first_gigabit-per-second_laser_link_between_aircraft_and_geostationary_satellite) - Innovative satellite communication milestone. [Comments](https://news.ycombinator.com/item?id=47208341)

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

* [2026-03-05, 16:00:00](https://tech.slashdot.org/story/26/03/05/0548253/amazons-bahrain-data-center-targeted-by-iran-for-us-military-support?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon&apos;s Bahrain Data Center Targeted By Iran For US Military Support](https://tech.slashdot.org/story/26/03/05/0548253/amazons-bahrain-data-center-targeted-by-iran-for-us-military-support?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-05, 15:50:53](https://lobste.rs/s/3dtgmr/ai_ship_theseus) - [AI And The Ship of Theseus](https://lucumr.pocoo.org/2026/3/5/theseus/)
* [2026-03-05, 15:48:52](https://news.ycombinator.com/item?id=47263036) - [Show HN: Jido 2.0, Elixir Agent Framework](https://jido.run/blog/jido-2-0-is-here)
* [2026-03-05, 15:42:00](https://soylentnews.org/article.pl?sid=26/03/05/0714212&amp;from=rss) - [AI Art Isn&apos;t Art, or Copyrightable Art Anyway.](https://soylentnews.org/article.pl?sid=26/03/05/0714212&amp;from=rss)
* [2026-03-05, 15:20:39](https://news.ycombinator.com/item?id=47262600) - [BBC says &apos;irreversible&apos; trends mean it will not survive without major overhaul](https://www.theguardian.com/media/2026/mar/05/bbc-charter-renewal-tv-licence-major-overhaul)
* [2026-03-05, 15:16:23](https://news.ycombinator.com/item?id=47262523) - [Palantir and other tech companies are stocking offices with tobacco products](https://fortune.com/2026/03/04/palantir-tech-companies-offices-vending-machines-tobacco-worker-productivity/)
* [2026-03-05, 15:07:20](https://news.ycombinator.com/item?id=47262402) - [The IRIX 6.5.7M (sgi) source code](https://github.com/calmsacibis995/irix-657m-src)
* [2026-03-05, 15:03:22](https://news.ycombinator.com/item?id=47262347) - [Google Safe Browsing missed 84% of phishing sites we found in February](https://www.norn-labs.com/blog/huginn-report-feb-2026)
* [2026-03-05, 15:00:00](https://yro.slashdot.org/story/26/03/05/0537244/us-tech-firms-pledge-at-white-house-to-bear-costs-of-energy-for-datacenters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Tech Firms Pledge At White House To Bear Costs of Energy For Datacenters](https://yro.slashdot.org/story/26/03/05/0537244/us-tech-firms-pledge-at-white-house-to-bear-costs-of-energy-for-datacenters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-05, 14:38:04](https://lobste.rs/s/uqzytb/compound_engineering_make_every_unit) - [Compound Engineering: Make Every Unit of Work Compound Into the Next](https://every.to/guides/compound-engineering)
* [2026-03-05, 14:34:45](https://news.ycombinator.com/item?id=47261968) - [Rising carbon dioxide levels now detected in human blood](https://phys.org/news/2026-02-carbon-dioxide-human-blood.html)
* [2026-03-05, 14:11:22](https://news.ycombinator.com/item?id=47261734) - [Fast-Servers](https://geocar.sdf1.org/fast-servers.html)
* [2026-03-05, 14:05:46](https://news.ycombinator.com/item?id=47261688) - [Judge Orders Government to Begin Refunding More Than $130B in Tariffs](https://www.wsj.com/politics/policy/judge-orders-government-to-begin-refunding-more-than-130-billion-in-tariffs-fdc1e62c)
* [2026-03-05, 14:00:00](https://slashdot.org/story/26/03/05/0531212/jensen-huang-says-nvidia-is-pulling-back-from-openai-and-anthropic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jensen Huang Says Nvidia Is Pulling Back From OpenAI and Anthropic](https://slashdot.org/story/26/03/05/0531212/jensen-huang-says-nvidia-is-pulling-back-from-openai-and-anthropic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-05, 13:53:57](https://lobste.rs/s/9pcxko/espflash_go_cli_library_for_flashing) - [espflash: Go CLI and library for flashing firmware to Espressif ESP8266 and ESP32-family microcontrollers](https://github.com/tinygo-org/espflash)
* [2026-03-05, 13:52:43](https://news.ycombinator.com/item?id=47261561) - [Good software knows when to stop](https://ogirardot.writizzy.com/p/good-software-knows-when-to-stop)
* [2026-03-05, 13:25:12](https://lobste.rs/s/ncsx3a/gpl_upgrades_via_section_14_proxy) - [GPL upgrades via section 14 proxy delegation](https://runxiyu.org/comp/gplproxy/)
* [2026-03-05, 13:00:00](https://hardware.slashdot.org/story/26/03/04/2238206/solar-in-poor-countries-is-creating-a-huge-lead-hazard?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Solar In Poor Countries Is Creating a Huge Lead Hazard](https://hardware.slashdot.org/story/26/03/04/2238206/solar-in-poor-countries-is-creating-a-huge-lead-hazard?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-05, 11:50:24](https://lobste.rs/s/0fuvw8/illustrated_tls_1_2_connection) - [The Illustrated TLS 1.2 Connection](https://tls12.xargs.org/)
* [2026-03-05, 11:44:01](https://lobste.rs/s/qepjb9/microslop_microsoft_s_ai_slop_manifesto) - [MICROSLOP — Microsoft&apos;s AI Slop Manifesto](https://microslop.com/)
* [2026-03-05, 10:52:00](https://soylentnews.org/article.pl?sid=26/03/05/0732251&amp;from=rss) - [Drones Attack Several AWS Middle East Region Data Centers Amid Iran War, Leading to Outages](https://soylentnews.org/article.pl?sid=26/03/05/0732251&amp;from=rss)
* [2026-03-05, 10:00:00](https://games.slashdot.org/story/26/03/04/2245259/humble-games-former-bosses-buy-the-studios-back-catalog?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Humble Games&apos; Former Bosses Buy the Studio&apos;s Back Catalog](https://games.slashdot.org/story/26/03/04/2245259/humble-games-former-bosses-buy-the-studios-back-catalog?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-05, 09:36:20](https://lobste.rs/s/xew97m/openbsd_on_sgi_rollercoaster_story) - [OpenBSD on SGI: a rollercoaster story](http://miod.online.fr/software/openbsd/stories/sgiall.html)
* [2026-03-05, 08:37:51](https://news.ycombinator.com/item?id=47259177) - [No right to relicense this project](https://github.com/chardet/chardet/issues/327)
* [2026-03-05, 07:57:25](https://news.ycombinator.com/item?id=47258885) - [Smalltalk&apos;s Browser: Unbeatable, yet Not Enough](https://blog.lorenzano.eu/smalltalks-browser-unbeatable-yet-not-enough/)
* [2026-03-05, 07:44:33](https://news.ycombinator.com/item?id=47258809) - [Poor Man&apos;s Polaroid](https://boxart.lt/blog/poor_mans_polaroid)
* [2026-03-05, 07:43:41](https://news.ycombinator.com/item?id=47258801) - [Nvidia PersonaPlex 7B on Apple Silicon: Full-Duplex Speech-to-Speech in Swift](https://blog.ivan.digital/nvidia-personaplex-7b-on-apple-silicon-full-duplex-speech-to-speech-in-native-swift-with-mlx-0aa5276f2e23)
* [2026-03-05, 07:23:40](https://news.ycombinator.com/item?id=47258641) - [Jails for NetBSD – Kernel Enforced Isolation and Native Resource Control](https://netbsd-jails.petermann-digital.de/)
* [2026-03-05, 07:22:17](https://lobste.rs/s/u2elyz/styx_document_language) - [Styx document language](https://styx.bearcove.eu/)
* [2026-03-05, 07:00:00](https://it.slashdot.org/story/26/03/04/2314224/us-cybersecurity-adds-exploited-vmware-aria-operations-to-kev-catalog?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Cybersecurity Adds Exploited VMware Aria Operations To KEV Catalog](https://it.slashdot.org/story/26/03/04/2314224/us-cybersecurity-adds-exploited-vmware-aria-operations-to-kev-catalog?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-05, 06:16:36](https://news.ycombinator.com/item?id=47258169) - [OpenBSD on SGI: A Rollercoaster Story](http://miod.online.fr/software/openbsd/stories/sgiall.html)
* [2026-03-05, 06:11:00](https://soylentnews.org/article.pl?sid=26/03/05/0523208&amp;from=rss) - [No Fooling: NASA Targets April 1 for Artemis II Launch to the Moon](https://soylentnews.org/article.pl?sid=26/03/05/0523208&amp;from=rss)
* [2026-03-05, 05:07:33](https://news.ycombinator.com/item?id=47257803) - [Relicensing with AI-Assisted Rewrite](https://tuananh.net/2026/03/05/relicensing-with-ai-assisted-rewrite/)
* [2026-03-05, 05:07:03](https://lobste.rs/s/jr3zym/relicensing_with_ai_assisted_rewrite) - [Relicensing with AI-assisted rewrite](https://tuananh.net/2026/03/05/relicensing-with-ai-assisted-rewrite/)
* [2026-03-05, 04:24:28](https://lobste.rs/s/ma7lsz/your_ai_slop_bores_me) - [your ai slop bores me](https://www.youraislopbores.me/)
* [2026-03-05, 04:02:32](https://news.ycombinator.com/item?id=47257394) - [The L in \&quot;LLM\&quot; Stands for Lying](https://acko.net/blog/the-l-in-llm-stands-for-lying/)
* [2026-03-05, 03:00:00](https://hardware.slashdot.org/story/26/03/04/2324220/a-nuclear-reactor-backed-by-bill-gates-gets-federal-approval-to-start-building?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Nuclear Reactor Backed By Bill Gates Gets Federal Approval To Start Building](https://hardware.slashdot.org/story/26/03/04/2324220/a-nuclear-reactor-backed-by-bill-gates-gets-federal-approval-to-start-building?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-05, 02:00:07](https://news.ycombinator.com/item?id=47256545) - [US tech firms pledge at White House to bear costs of energy for datacenters](https://www.theguardian.com/us-news/2026/mar/04/us-tech-companies-energy-cost-pledge-white-house)
* [2026-03-05, 01:57:21](https://lobste.rs/s/kjb4gb/just_use_postgres) - [Just Use Postgres](http://amattn.com/p/just_use_postgres.html)
* [2026-03-05, 01:00:31](https://lobste.rs/s/xhoyg7/grand_vision_for_rust) - [A grand vision for Rust](https://blog.yoshuawuyts.com/a-grand-vision-for-rust/)
* [2026-03-05, 01:00:00](https://yro.slashdot.org/story/26/03/04/1937236/father-sues-google-claiming-gemini-chatbot-drove-son-into-fatal-delusion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Father Sues Google, Claiming Gemini Chatbot Drove Son Into Fatal Delusion](https://yro.slashdot.org/story/26/03/04/1937236/father-sues-google-claiming-gemini-chatbot-drove-son-into-fatal-delusion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-05, 00:23:00](https://soylentnews.org/article.pl?sid=26/03/04/1535231&amp;from=rss) - [Anonymous Credentials: an Illustrated Primer](https://soylentnews.org/article.pl?sid=26/03/04/1535231&amp;from=rss)
* [2026-03-05, 00:22:09](https://news.ycombinator.com/item?id=47255881) - [Google Workspace CLI](https://github.com/googleworkspace/cli)
* [2026-03-04, 23:28:48](https://lobste.rs/s/1rh6f3/introducing_wgsl_rs) - [Introducing wgsl-rs](https://renderling.xyz/articles/introducing-wgsl-rs.html)
* [2026-03-04, 23:10:13](https://lobste.rs/s/dghhq8/you_bought_zuck_s_ray_bans_now_someone) - [You Bought Zuck’s Ray-Bans. Now Someone in Nairobi Is Watching You Poop](https://blog.adafruit.com/2026/03/04/you-bought-zucks-ray-bans-now-someone-in-nairobi-is-watching-you-poop/)
* [2026-03-04, 23:00:00](https://developers.slashdot.org/story/26/03/04/2218226/google-ends-its-30-app-store-fee-welcomes-third-party-app-stores?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Ends Its 30% App Store Fee, Welcomes Third-Party App Stores](https://developers.slashdot.org/story/26/03/04/2218226/google-ends-its-30-app-store-fee-welcomes-third-party-app-stores?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-04, 22:00:00](https://games.slashdot.org/story/26/03/04/1929211/sony-pulls-back-from-playstation-games-on-pc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sony Pulls Back From PlayStation Games on PC](https://games.slashdot.org/story/26/03/04/1929211/sony-pulls-back-from-playstation-games-on-pc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-04, 21:11:15](https://news.ycombinator.com/item?id=47253892) - [BMW Group to deploy humanoid robots in production in Germany for the first time](https://www.press.bmwgroup.com/global/article/detail/T0455864EN/bmw-group-to-deploy-humanoid-robots-in-production-in-germany-for-the-first-time?language=en)
* [2026-03-04, 21:00:00](https://tech.slashdot.org/story/26/03/04/197220/computer-scientists-caution-against-internet-age-verification-mandates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Computer Scientists Caution Against Internet Age-Verification Mandates](https://tech.slashdot.org/story/26/03/04/197220/computer-scientists-caution-against-internet-age-verification-mandates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-04, 20:16:03](https://news.ycombinator.com/item?id=47253177) - [Building a new Flash](https://bill.newgrounds.com/news/post/1607118)
* [2026-03-04, 20:00:00](https://tech.slashdot.org/story/26/03/04/1856240/vehicle-tire-pressure-sensors-enable-silent-tracking?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Vehicle Tire Pressure Sensors Enable Silent Tracking](https://tech.slashdot.org/story/26/03/04/1856240/vehicle-tire-pressure-sensors-enable-silent-tracking?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-04, 19:50:44](https://lobste.rs/s/qh6y97/who_writes_bugs_deeper_look_at_125_000) - [Who Writes the Bugs? A Deeper Look at 125,000 Kernel Vulnerabilities](https://pebblebed.com/blog/kernel-bugs-part2)
* [2026-03-04, 19:49:16](https://lobste.rs/s/dmdttx/jj_v0_39_0_released) - [jj v0.39.0 released](https://github.com/jj-vcs/jj/releases/tag/v0.39.0)
* [2026-03-04, 19:48:05](https://lobste.rs/s/bxbytk/accepting_user_supplied_code_is_mostly) - [Accepting user-supplied code is mostly fine](https://dimden.dev/blog/?id=15-webtiles-its-fine-to-accept-user-supplied-code-actually)
* [2026-03-04, 19:39:00](https://soylentnews.org/article.pl?sid=26/03/04/1320238&amp;from=rss) - [Small Web, IndieWeb, Gemini… a Guide to the Retro-Web](https://soylentnews.org/article.pl?sid=26/03/04/1320238&amp;from=rss)
* [2026-03-04, 19:00:00](https://tech.slashdot.org/story/26/03/04/1844224/emails-to-outlookcom-rejected-by-faulty-or-overzealous-blocking-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Emails To Outlook.com Rejected By Faulty Or Overzealous Blocking Rules](https://tech.slashdot.org/story/26/03/04/1844224/emails-to-outlookcom-rejected-by-faulty-or-overzealous-blocking-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-04, 18:57:07](https://lobste.rs/s/ii2iaw/singlefile_web_extension_for_saving) - [SingleFile: Web Extension for saving a faithful copy of a complete web page in a single HTML file](https://github.com/gildas-lormeau/SingleFile)
* [2026-03-04, 18:26:47](https://lobste.rs/s/lw8rsa/pocket_id_easy_passkey_authentication) - [Pocket ID: Easy Passkey Authentication](https://runtimeterror.dev/pocket-id-easy-passkey-authentication/)
* [2026-03-04, 18:00:00](https://tech.slashdot.org/story/26/03/04/1638248/tiktok-says-end-to-end-encryption-makes-users-less-safe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [TikTok Says End-To-End Encryption Makes Users Less Safe](https://tech.slashdot.org/story/26/03/04/1638248/tiktok-says-end-to-end-encryption-makes-users-less-safe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-04, 17:00:00](https://hardware.slashdot.org/story/26/03/04/1624211/apple-announces-low-cost-macbook-neo-with-a18-pro-chip?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Announces Low-Cost &apos;MacBook Neo&apos; With A18 Pro Chip](https://hardware.slashdot.org/story/26/03/04/1624211/apple-announces-low-cost-macbook-neo-with-a18-pro-chip?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-04, 16:48:36](https://lobste.rs/s/nbsppn/au_revoir_eleventy) - [Au revoir, Eleventy](https://hamatti.org/posts/au-revoir-eleventy/)
* [2026-03-04, 16:34:33](https://lobste.rs/s/3df9bm/smalltalk_s_browser_unbeatable_yet_not) - [Smalltalk’s Browser: Unbeatable, Yet Not Enough](https://blog.lorenzano.eu/smalltalks-browser-unbeatable-yet-not-enough/)
* [2026-03-04, 16:08:39](https://lobste.rs/s/brkdxd/what_alternatives_exist_for_anonymous) - [What alternatives exist for Anonymous Github?](https://lobste.rs/s/brkdxd/what_alternatives_exist_for_anonymous)
* [2026-03-04, 15:55:34](https://news.ycombinator.com/item?id=47249343) - [Something is afoot in the land of Qwen](https://simonwillison.net/2026/Mar/4/qwen/)
* [2026-03-04, 14:53:00](https://soylentnews.org/article.pl?sid=26/03/04/1318201&amp;from=rss) - [LLMs Can Unmask Pseudonymous Users at Scale With Surprising Accuracy](https://soylentnews.org/article.pl?sid=26/03/04/1318201&amp;from=rss)
* [2026-03-04, 14:25:15](https://lobste.rs/s/46iep3/re_how_we_built_world_s_fastest_regex) - [RE#: how we built the world&apos;s fastest regex engine in F#](https://iev.ee/blog/resharp-how-we-built-the-fastest-regex-in-fsharp/)
* [2026-03-04, 14:16:41](https://news.ycombinator.com/item?id=47247645) - [MacBook Neo](https://www.apple.com/newsroom/2026/03/say-hello-to-macbook-neo/)
* [2026-03-04, 11:11:02](https://lobste.rs/s/dc3ysd/package_managers_need_cool_down) - [Package Managers Need to Cool Down](https://nesbitt.io/2026/03/04/package-managers-need-to-cool-down.html)
* [2026-03-04, 10:07:00](https://soylentnews.org/article.pl?sid=26/03/04/077205&amp;from=rss) - [Medical Journal the Lancet Blasts RFK Jr.’s Health Work as a Failure](https://soylentnews.org/article.pl?sid=26/03/04/077205&amp;from=rss)
* [2026-03-04, 05:22:00](https://soylentnews.org/article.pl?sid=26/03/03/029259&amp;from=rss) - [&apos;Cancel ChatGPT&apos;: AI Boycott Surges After OpenAI-Pentagon Military Deal](https://soylentnews.org/article.pl?sid=26/03/03/029259&amp;from=rss)
* [2026-03-04, 00:30:00](https://soylentnews.org/article.pl?sid=26/03/03/021249&amp;from=rss) - [Entry-Level PC Market To ‘Disappear’ By 2028 — Rising Memory Prices Pile More Strain On Consumer PC ](https://soylentnews.org/article.pl?sid=26/03/03/021249&amp;from=rss)
* [2026-03-03, 23:09:21](https://news.ycombinator.com/item?id=47240424) - [The Man Who Broke into Jail](https://www.newyorker.com/magazine/2026/03/09/alexander-friedmann-profile-prison-reform)
* [2026-03-03, 23:07:02](https://news.ycombinator.com/item?id=47240393) - [Earth Garden: Field Recordings Around the World](https://earth-garden.alen.ro/)
* [2026-03-03, 19:54:00](https://soylentnews.org/article.pl?sid=26/03/02/2022221&amp;from=rss) - [Across Cultures, People Combine Reference Frames to Orient Themselves](https://soylentnews.org/article.pl?sid=26/03/02/2022221&amp;from=rss)
* [2026-03-03, 19:33:30](https://lobste.rs/s/tznewb/nobody_gets_promoted_for_simplicity) - [Nobody Gets Promoted for Simplicity](https://terriblesoftware.org/2026/03/03/nobody-gets-promoted-for-simplicity/)
* [2026-03-03, 15:13:00](https://soylentnews.org/article.pl?sid=26/03/02/2020204&amp;from=rss) - [Pathways to a Fair Technological Future](https://soylentnews.org/article.pl?sid=26/03/02/2020204&amp;from=rss)
* [2026-03-03, 10:28:00](https://soylentnews.org/article.pl?sid=26/03/02/2018219&amp;from=rss) - [Satellites Found a &apos;Brown Ribbon&apos; Near Africa – Now Scientists Are Sounding Alarms](https://soylentnews.org/article.pl?sid=26/03/02/2018219&amp;from=rss)
* [2026-03-03, 05:43:00](https://soylentnews.org/article.pl?sid=26/03/02/2014218&amp;from=rss) - [Datacenters in Space Are a Terrible, Horrible, No Good Idea.](https://soylentnews.org/article.pl?sid=26/03/02/2014218&amp;from=rss)
* [2026-03-03, 02:49:22](https://news.ycombinator.com/item?id=47227340) - [Arabic document from 17th-cent. rubbish heap confirms semi-legendary Nubian king](https://phys.org/news/2026-02-arabic-document-17th-century-rubbish.html)
* [2026-03-03, 00:58:00](https://soylentnews.org/article.pl?sid=26/03/02/1659243&amp;from=rss) - [Cleaner Ship Fuel is Reducing Lightning in Key Shipping Lanes](https://soylentnews.org/article.pl?sid=26/03/02/1659243&amp;from=rss)
* [2026-03-02, 20:12:00](https://soylentnews.org/article.pl?sid=26/03/01/0744215&amp;from=rss) - [Hail Protection Using Solar Panels](https://soylentnews.org/article.pl?sid=26/03/01/0744215&amp;from=rss)
* [2026-03-02, 15:23:00](https://soylentnews.org/article.pl?sid=26/03/01/0737210&amp;from=rss) - [Whoops: US Military Laser Strike Takes Down CBP Drone Near Mexican Border](https://soylentnews.org/article.pl?sid=26/03/01/0737210&amp;from=rss)
* [2026-03-02, 11:51:57](https://news.ycombinator.com/item?id=47216825) - [AMD will bring its “Ryzen AI” processors to standard desktop PCs for first time](https://arstechnica.com/gadgets/2026/03/amd-ryzen-ai-400-cpus-will-bring-upgraded-graphics-to-socket-am5-desktops/)
* [2026-03-02, 10:41:00](https://soylentnews.org/article.pl?sid=26/03/01/0728237&amp;from=rss) - [Trump Bans Anthropic AI From Federal Agencies While OpenAI Eager to Fill the Void](https://soylentnews.org/article.pl?sid=26/03/01/0728237&amp;from=rss)
* [2026-03-02, 05:58:00](https://soylentnews.org/article.pl?sid=26/03/01/071226&amp;from=rss) - [Researchers Discover Massive Wi-Fi Vulnerability Affecting Multiple Access Points](https://soylentnews.org/article.pl?sid=26/03/01/071226&amp;from=rss)
* [2026-03-02, 01:11:00](https://soylentnews.org/article.pl?sid=26/03/01/0653215&amp;from=rss) - [Removable Batteries in Mobile Phones May be Making a Comeback](https://soylentnews.org/article.pl?sid=26/03/01/0653215&amp;from=rss)
* [2026-03-01, 20:22:00](https://soylentnews.org/article.pl?sid=26/02/28/0817218&amp;from=rss) - [Neanderthals Seemed To Have A Thing For Modern Human Women](https://soylentnews.org/article.pl?sid=26/02/28/0817218&amp;from=rss)
* [2026-03-01, 16:49:46](https://news.ycombinator.com/item?id=47208341) - [World-first gigabit laser link between aircraft and geostationary satellite](https://www.esa.int/Applications/Connectivity_and_Secure_Communications/World-first_gigabit-per-second_laser_link_between_aircraft_and_geostationary_satellite)
* [2026-03-01, 15:37:00](https://soylentnews.org/article.pl?sid=26/02/28/0811223&amp;from=rss) - [US States Are Getting Tougher on Drivers Who Refuse to Move Over](https://soylentnews.org/article.pl?sid=26/02/28/0811223&amp;from=rss)
* [2026-03-01, 10:52:00](https://soylentnews.org/article.pl?sid=26/02/28/0452245&amp;from=rss) - [Human Brain Cells on a Chip Learned to Play Doom in a Week](https://soylentnews.org/article.pl?sid=26/02/28/0452245&amp;from=rss)
* [2026-03-01, 09:04:19](https://news.ycombinator.com/item?id=47205009) - [Intelligence is a commodity. Context is the real AI Moat](https://adlrocha.substack.com/p/adlrocha-intelligence-is-a-commodity)
* [2026-03-01, 08:24:31](https://news.ycombinator.com/item?id=47204799) - [Billy bookshelves as a retro motherboard \&quot;rack\&quot;](https://rubenerd.com/billy-bookcase-as-a-retro-motherboard-rack/)
* [2026-03-01, 06:10:00](https://soylentnews.org/article.pl?sid=26/02/28/022210&amp;from=rss) - [Block Lays Off 40% Of Workforce As It Goes All-In On AI Tools](https://soylentnews.org/article.pl?sid=26/02/28/022210&amp;from=rss)
* [2026-03-01, 01:27:00](https://soylentnews.org/article.pl?sid=26/02/28/0158247&amp;from=rss) - [The US Military Just Made History With A C-17 Plane &amp; A Nuclear Reactor](https://soylentnews.org/article.pl?sid=26/02/28/0158247&amp;from=rss)
