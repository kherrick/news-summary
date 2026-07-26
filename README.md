# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Advancements and Innovations

* [Himalaya v2.0.0: CLI to manage emails](https://fosstodon.org/@pimalaya/116983467890532240) - Himalaya gets a significant update with version 2.0.0, providing a CLI-based tool for efficient email management. [Comments](https://lobste.rs/s/sd5em2/himalaya_v2_0_0_cli_manage_emails)

* [GNU Hurd gets 9pfs, OpenNTPD, dynamic /dev/ entries, and more](https://www.osnews.com/story/145603/the-hurd-gets-9pfs-openntpd-dynamic-dev-entries-and-more/) - Updates to GNU Hurd include new filesystem support and enhanced dynamic device management. [Comments](https://news.ycombinator.com/item?id=49053255)

* [Kimi K3 built a Windows XP in browser](https://windows-xp.kimi.site/) - A browser-based recreation of Windows XP brings nostalgia to life for users. [Comments](https://news.ycombinator.com/item?id=49052074)

* [Running a 28.9M parameter LLM on an $8 microcontroller](https://github.com/slvDev/esp32-ai) - Exploration of running a large language model on limited hardware like the ESP32 microcontroller. [Comments](https://news.ycombinator.com/item?id=49050512)

* [SpaceX's Starship Megarocket Hits Key Milestones in 'Lucky 13' Test Flight](https://science.slashdot.org/story/26/07/25/0511222/spacexs-starship-megarocket-hits-key-milestones-in-lucky-13-test-flight?utm_source=rss1.0mainlinkanon&utm_medium=feed) - SpaceX demonstrates successful milestones for its Starship program. [Comments](https://news.ycombinator.com/item?id=49045159)

## AI and Machine Learning Developments

* [What is happening to jobs? Separating AI hype from reality](https://siepr.stanford.edu/publications/policy-brief/what-really-happening-jobs-separating-ai-hype-reality) - A detailed analysis of AI's genuine impact on employment amidst speculative fears. [Comments](https://news.ycombinator.com/item?id=49052570)

* [Cloudflare's new AI traffic options for customers](https://blog.cloudflare.com/content-independence-day-ai-options/) - New features offer customers better control over AI-related traffic. [Comments](https://news.ycombinator.com/item?id=49052564)

* [OpenAI's Rogue Agent Went Unnoticed For a Week](https://yro.slashdot.org/story/26/07/25/0059247/openais-rogue-agent-went-unnoticed-for-a-week?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Concerns raised over AI accountability as OpenAI's rogue agent poses challenges for detection. [Comments](https://news.ycombinator.com/item?id=49045895)

## Environment and Sustainable Technology

* [Drying Lakebeds Are Releasing Massive Amounts of Carbon, Study Finds](https://news.slashdot.org/story/26/07/25/0417232/drying-lakebeds-are-releasing-massive-amounts-of-carbon-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Research highlights the environmental risks posed by carbon emissions from drying lakebeds. [Comments](https://news.ycombinator.com/item?id=49052044)

* [GM Backs Sodium Ion Batteries for U.S. Grid Storage](https://spectrum.ieee.org/sodium-ion-battery-peak-energy) - GM explores alternative battery technologies to enhance grid storage sustainability. [Comments](https://news.ycombinator.com/item?id=49051947)

* [Producing ammonia and fertiliser using wind power in Morris, Minnesota](https://ammoniaenergy.org/articles/flexible-renewable-ammonia-demonstrator-now-operational-in-minnesota/) - A pilot project demonstrates the potential of renewable energy in chemical production. [Comments](https://news.ycombinator.com/item?id=49050735)

## Social and Ethical Implications

* [The growing vigilante movement to knock out Flock surveillance cameras](https://www.theguardian.com/us-news/ng-interactive/2026/jul/25/flock-surveillance-cameras) - The emergence of grassroots resistance to surveillance technologies ignites privacy debates. [Comments](https://news.ycombinator.com/item?id=49050538)

* [Amazon Cracks Down On Use of AI Images By Sellers](https://slashdot.org/story/26/07/25/0545246/amazon-cracks-down-on-use-of-ai-images-by-sellers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Amazon enforces stricter rules on AI-generated images in online listings. [Comments](https://news.ycombinator.com/item?id=49050594)

## Science Innovations

* [China is Creating a Herd of 100 Elite Yak Clones](https://science.slashdot.org/story/26/07/25/1656259/china-is-creating-a-herd-of-100-elite-yak-clones?utm_source=rss1.0mainlinkanon&utm_medium=feed) - China's ambitious cloning efforts spark curiosity and ethical questions. [Comments](https://news.ycombinator.com/item?id=49050629)

* [The 2024 New York City Meteorite Contains Amino Acids](https://soylentnews.org/article.pl?sid=26/07/22/0025243&from=rss) - A fascinating discovery reveals the presence of amino acids in a meteorite. [Comments](https://news.ycombinator.com/item?id=49006894)

## Security and Policy

* [Did Virginia Regulators Downplay Data Center Health Concerns?](https://hardware.slashdot.org/story/26/07/25/1747227/did-virginia-regulators-downplay-data-center-health-concerns?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Investigative insights suggest potential negligence in public health concerns near data centers. [Comments](https://news.ycombinator.com/item?id=49052972)

* [US Blocks SSL Security Certificates for Iran's Fars News Agency](https://soylentnews.org/article.pl?sid=26/07/24/1423206&from=rss) - Political tensions rise with US actions targeting Iran's online presence. [Comments](https://lobste.rs/s/gf5d8z/us_blocks_ssl_security_certificates)

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

* [2026-07-26, 00:45:08](https://lobste.rs/s/sd5em2/himalaya_v2_0_0_cli_manage_emails) - [Himalaya v2.0.0: CLI to manage emails](https://fosstodon.org/@pimalaya/116983467890532240)
* [2026-07-26, 00:19:13](https://news.ycombinator.com/item?id=49053255) - [GNU Hurd gets 9pfs, OpenNTPD, dynamic /dev/ entries, and more](https://www.osnews.com/story/145603/the-hurd-gets-9pfs-openntpd-dynamic-dev-entries-and-more/)
* [2026-07-25, 23:32:50](https://news.ycombinator.com/item?id=49052912) - [DeepSeek pause fundraise after comments on compute gap to US leaked (transcript) [pdf]](https://github.com/demo-zexuan/liang-wenfeng-investor-meeting-2026-7-22/blob/master/%E6%A2%81%E6%96%87%E9%94%8B%E6%8A%95%E8%B5%84%E8%80%85%E4%BA%A4%E6%B5%81%E4%BC%9A-%E6%96%87%E5%AD%97%E7%A8%BF_1_18_translate_20260723201651.pdf)
* [2026-07-25, 23:00:00](https://hardware.slashdot.org/story/26/07/25/1747227/did-virginia-regulators-downplay-data-center-health-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Did Virginia Regulators Downplay Data Center Health Concerns?](https://hardware.slashdot.org/story/26/07/25/1747227/did-virginia-regulators-downplay-data-center-health-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-25, 22:57:17](https://news.ycombinator.com/item?id=49052628) - [Clinical Failure Rates over the Decades: Yikes](https://www.science.org/content/blog-post/clinical-failure-rates-over-decades-yikes)
* [2026-07-25, 22:51:10](https://news.ycombinator.com/item?id=49052570) - [What is happening to jobs? Separating AI hype from reality](https://siepr.stanford.edu/publications/policy-brief/what-really-happening-jobs-separating-ai-hype-reality)
* [2026-07-25, 22:50:49](https://news.ycombinator.com/item?id=49052564) - [Cloudflare&apos;s new AI traffic options for customers](https://blog.cloudflare.com/content-independence-day-ai-options/)
* [2026-07-25, 22:13:07](https://lobste.rs/s/krsvrp/maybe_we_should_revisit_microkernels) - [Maybe we should revisit microkernels](https://notes.hella.cheap/maybe-we-should-revisit-microkernels.html)
* [2026-07-25, 22:03:22](https://news.ycombinator.com/item?id=49052074) - [Kimi K3 built a Windows XP in browser](https://windows-xp.kimi.site/)
* [2026-07-25, 22:00:00](https://news.slashdot.org/story/26/07/25/0417232/drying-lakebeds-are-releasing-massive-amounts-of-carbon-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Drying Lakebeds Are Releasing Massive Amounts of Carbon, Study Finds](https://news.slashdot.org/story/26/07/25/0417232/drying-lakebeds-are-releasing-massive-amounts-of-carbon-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-25, 21:48:22](https://news.ycombinator.com/item?id=49051947) - [GM Backs Sodium Ion Batteries for U.S. Grid Storage](https://spectrum.ieee.org/sodium-ion-battery-peak-energy)
* [2026-07-25, 21:39:39](https://lobste.rs/s/bvjwbk/banner_highway_01) - [Banner Highway 01](https://highway-01.banner-depot-2000.net/)
* [2026-07-25, 21:38:29](https://lobste.rs/s/x7jtkt/memory_safety_absolutists) - [Memory Safety Absolutists](https://itsallaboutthebit.com/memory-safety-absolutists/)
* [2026-07-25, 21:32:58](https://lobste.rs/s/sh9bbn/how_self_host_servers_your_living_room_on) - [How to self-host servers in your living room on static IPs](https://vimuser.org/l2tp.html)
* [2026-07-25, 21:19:42](https://news.ycombinator.com/item?id=49051707) - [Becoming a Research Engineer at a Big LLM Lab](https://www.maxmynter.com/pages/blog/jobhunt)
* [2026-07-25, 21:00:00](https://hardware.slashdot.org/story/26/07/25/0343230/hyundai-claims-humanoid-robot-plan-is-not-part-of-talks-with-striking-workers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hyundai Claims Humanoid Robot Plan Is Not Part of Talks With Striking Workers ](https://hardware.slashdot.org/story/26/07/25/0343230/hyundai-claims-humanoid-robot-plan-is-not-part-of-talks-with-striking-workers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-25, 20:55:12](https://news.ycombinator.com/item?id=49051463) - [Multicast TV Distribution on My Home Network](https://www.apalrd.net/posts/2026/isp_mcast/)
* [2026-07-25, 20:52:49](https://lobste.rs/s/utnhmy/how_i_find_problems_solve_as_staff) - [How I Find Problems to Solve as a Staff Engineer](https://lalitm.com/post/find-problems-staff-engineer/)
* [2026-07-25, 20:42:35](https://news.ycombinator.com/item?id=49051361) - [The new rules of context engineering for Claude 5 generation models](https://claude.com/blog/the-new-rules-of-context-engineering-for-claude-5-generation-models)
* [2026-07-25, 20:18:54](https://news.ycombinator.com/item?id=49051130) - [Show HN: Writemark, a dependency free web component for inline Markdown editing](https://news.ycombinator.com/item?id=49051130)
* [2026-07-25, 20:18:03](https://news.ycombinator.com/item?id=49051120) - [Did They Ghost You?](https://didtheyghostyou.com/)
* [2026-07-25, 20:17:00](https://soylentnews.org/article.pl?sid=26/07/25/2039220&amp;from=rss) - [Ben Thompson is Wrong: US [AI] Frontier Labs are Right to be Panicking](https://soylentnews.org/article.pl?sid=26/07/25/2039220&amp;from=rss)
* [2026-07-25, 20:00:00](https://slashdot.org/story/26/07/25/0545246/amazon-cracks-down-on-use-of-ai-images-by-sellers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Cracks Down On Use of AI Images By Sellers](https://slashdot.org/story/26/07/25/0545246/amazon-cracks-down-on-use-of-ai-images-by-sellers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-25, 19:30:24](https://news.ycombinator.com/item?id=49050735) - [Producing ammonia and fertiliser using wind power in Morris, Minnesota](https://ammoniaenergy.org/articles/flexible-renewable-ammonia-demonstrator-now-operational-in-minnesota/)
* [2026-07-25, 19:02:17](https://news.ycombinator.com/item?id=49050538) - [The growing vigilante movement to knock out Flock surveillance cameras](https://www.theguardian.com/us-news/ng-interactive/2026/jul/25/flock-surveillance-cameras)
* [2026-07-25, 19:00:00](https://news.slashdot.org/story/26/07/25/030246/top-online-sites-debate-cutting-off-googles-crawlers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Top Online Sites Debate Cutting Off Google&apos;s Crawlers](https://news.slashdot.org/story/26/07/25/030246/top-online-sites-debate-cutting-off-googles-crawlers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-25, 18:59:50](https://news.ycombinator.com/item?id=49050512) - [Running a 28.9M parameter LLM on an $8 microcontroller](https://github.com/slvDev/esp32-ai)
* [2026-07-25, 18:19:08](https://lobste.rs/s/wee5yh/your_harddrive_is_probably_full) - [Your harddrive is probably full](https://www.marginalia.nu/log/a_139_hdd/)
* [2026-07-25, 18:00:00](https://science.slashdot.org/story/26/07/25/1656259/china-is-creating-a-herd-of-100-elite-yak-clones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China is Creating a Herd of 100 Elite Yak Clones](https://science.slashdot.org/story/26/07/25/1656259/china-is-creating-a-herd-of-100-elite-yak-clones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-25, 17:34:34](https://news.ycombinator.com/item?id=49049693) - [Show HN: Brolly, a plain-text weather forecast site](https://brolly.sh/forecast/RWFP2qW8)
* [2026-07-25, 17:29:55](https://news.ycombinator.com/item?id=49049638) - [Show HN: SpinWin – A macOS menu bar app to visually rotate or spin any window](https://github.com/alokdhir/spinwin)
* [2026-07-25, 17:00:00](https://tech.slashdot.org/story/26/07/25/064249/facebook-offers-a-verification-system-certifying-to-other-users-that-youre-a-real-human?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Facebook Offers a Verification System Certifying to Other Users That You&apos;re a Real Human](https://tech.slashdot.org/story/26/07/25/064249/facebook-offers-a-verification-system-certifying-to-other-users-that-youre-a-real-human?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-25, 16:10:47](https://lobste.rs/s/ygobr3/general_resolution_llm_usage_debian) - [General Resolution: LLM usage in Debian](https://www.debian.org/vote/2026/vote_002)
* [2026-07-25, 16:08:48](https://lobste.rs/s/usdhrd/verse_new_scripting_language) - [Verse: A New Scripting Language](https://youtube.com/watch?v=ebqKYLKjL6U)
* [2026-07-25, 16:00:00](https://science.slashdot.org/story/26/07/24/2246224/risks-of-parkinsons-disease-may-increase-with-prolonged-exposure-to-road-traffic-noise?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Risks of Parkinson&apos;s Disease May Increase With Prolonged Exposure to Road Traffic Noise](https://science.slashdot.org/story/26/07/24/2246224/risks-of-parkinsons-disease-may-increase-with-prolonged-exposure-to-road-traffic-noise?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-25, 15:55:27](https://news.ycombinator.com/item?id=49048689) - [Bringing PyTorch Monarch to AMD GPUs](https://pytorch.org/blog/bringing-pytorch-monarch-to-amd-gpus-single-controller-distributed-training-on-rocm/)
* [2026-07-25, 15:54:59](https://news.ycombinator.com/item?id=49048681) - [The Dark Night of Mathematics](https://kirwinhampshire.substack.com/p/the-dark-night-of-mathematics)
* [2026-07-25, 15:34:00](https://soylentnews.org/article.pl?sid=26/07/24/1452216&amp;from=rss) - [There Isn&apos;t a Single Consumer Wi-Fi Router That is 100% American-Made](https://soylentnews.org/article.pl?sid=26/07/24/1452216&amp;from=rss)
* [2026-07-25, 15:13:27](https://lobste.rs/s/ljg2qr/languages_as_designed_latent_spaces) - [Languages as designed latent spaces](https://blog.jsbarretto.com/post/languages-as-latent-spaces)
* [2026-07-25, 15:00:00](https://yro.slashdot.org/story/26/07/24/2111219/trump-threatens-new-tariffs-against-eu-over-google-fine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Threatens New Tariffs Against EU Over Google Fine](https://yro.slashdot.org/story/26/07/24/2111219/trump-threatens-new-tariffs-against-eu-over-google-fine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-25, 14:49:49](https://news.ycombinator.com/item?id=49048034) - [Open-weight AI is having its Kubernetes moment](https://tobi.knaup.me/2026-07-25-open-weight-ai-is-having-its-kubernetes-moment/)
* [2026-07-25, 13:18:49](https://news.ycombinator.com/item?id=49047365) - [Bitchat is now on Radicle](https://radicle.network/nodes/rosa.radicle.network/rad%3Az2v9tRJz1oknFAqCSY5W5c76nVvm6)
* [2026-07-25, 12:58:43](https://lobste.rs/s/s75zd9/zig_by_example) - [Zig by Example](https://zigbyexample.neocities.org/)
* [2026-07-25, 11:33:00](https://lobste.rs/s/eidh3u/shell_colon_does_nothing_use_it_anyway) - [A shell colon does nothing. Use it anyway](https://refp.se/articles/your-shell-and-the-magic-colon)
* [2026-07-25, 11:14:51](https://lobste.rs/s/pqkfur/emacs_writing_machine) - [Emacs Writing Machine](https://chainsawriot.com/postmannheim/2026/07/25/writeredeck.html)
* [2026-07-25, 11:04:57](https://news.ycombinator.com/item?id=49046525) - [The Fedora 45 Sausage Factory](https://supakeen.com/weblog/the-fedora-45-sausage-factory/)
* [2026-07-25, 11:00:00](https://tech.slashdot.org/story/26/07/25/014225/wine-1114-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wine 11.14 Released](https://tech.slashdot.org/story/26/07/25/014225/wine-1114-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-25, 10:50:00](https://soylentnews.org/article.pl?sid=26/07/24/1448254&amp;from=rss) - [Alan Turing&apos;s Top Secret DIY Project](https://soylentnews.org/article.pl?sid=26/07/24/1448254&amp;from=rss)
* [2026-07-25, 10:01:03](https://lobste.rs/s/t5os1h/android_may_soon_restrict_on_device_adb) - [Android May Soon Restrict On-Device ADB, Affecting Shizuku, libadb and Developers](https://kitsumed.github.io/blog/posts/android-may-soon-restrict-on-device-adb/)
* [2026-07-25, 09:59:40](https://lobste.rs/s/3ttebv/sending_packets_directly_from_bpf) - [Sending packets directly from BPF](https://lwn.net/Articles/1081696/)
* [2026-07-25, 09:10:12](https://lobste.rs/s/bvgaff/stinkpot_sqlite_backed_shell_history) - [stinkpot: sqlite-backed shell history](https://tangled.org/oppi.li/stinkpot)
* [2026-07-25, 07:00:00](https://science.slashdot.org/story/26/07/25/0511222/spacexs-starship-megarocket-hits-key-milestones-in-lucky-13-test-flight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX&apos;s Starship Megarocket Hits Key Milestones in &apos;Lucky 13&apos; Test Flight](https://science.slashdot.org/story/26/07/25/0511222/spacexs-starship-megarocket-hits-key-milestones-in-lucky-13-test-flight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-25, 06:57:14](https://news.ycombinator.com/item?id=49045159) - [Android May Soon Restrict On-Device ADB](https://kitsumed.github.io/blog/posts/android-may-soon-restrict-on-device-adb/)
* [2026-07-25, 06:07:49](https://lobste.rs/s/ypgw9x/perils_parsing_type_inference) - [the perils of parsing type inference declarations in c](https://sebsite.pw/w/20260725-auto.html)
* [2026-07-25, 06:04:00](https://soylentnews.org/article.pl?sid=26/07/24/1428215&amp;from=rss) - [OpenAI&apos;s Rogue Agents are a Wake-up Call to Risks Posed by Artificial Intelligence](https://soylentnews.org/article.pl?sid=26/07/24/1428215&amp;from=rss)
* [2026-07-25, 05:29:51](https://lobste.rs/s/yajc8q/i_m_running_icfp_programming_contest) - [I&apos;m running the ICFP programming contest](https://eieio.games/blog/im-running-the-icfp-programming-contest/)
* [2026-07-25, 03:30:00](https://yro.slashdot.org/story/26/07/25/0059247/openais-rogue-agent-went-unnoticed-for-a-week?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI&apos;s Rogue Agent Went Unnoticed For a Week](https://yro.slashdot.org/story/26/07/25/0059247/openais-rogue-agent-went-unnoticed-for-a-week?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-25, 03:00:20](https://lobste.rs/s/zfvln5/we_are_not_special_2021) - [We Are Not Special (2021)](https://www.hillelwayne.com/post/we-are-not-special/)
* [2026-07-25, 01:34:26](https://lobste.rs/s/fw69uj/microformats_building_blocks_for_data) - [Microformats – building blocks for data-rich web pages](https://microformats.org/)
* [2026-07-25, 01:21:00](https://soylentnews.org/article.pl?sid=26/07/24/1423206&amp;from=rss) - [US Blocks SSL Security Certificates for Iran&apos;s Fars News Agency](https://soylentnews.org/article.pl?sid=26/07/24/1423206&amp;from=rss)
* [2026-07-25, 01:00:00](https://tech.slashdot.org/story/26/07/24/2212248/instagram-is-now-banning-pickup-artists-pranksters-who-use-meta-glasses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Instagram Is Now Banning Pickup Artists, Pranksters Who Use Meta Glasses](https://tech.slashdot.org/story/26/07/24/2212248/instagram-is-now-banning-pickup-artists-pranksters-who-use-meta-glasses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-24, 23:04:57](https://lobste.rs/s/c76s0r/chrome_registers_global_shortcut_for) - [Chrome registers a global shortcut for Gemini popup window](https://unsung.aresluna.org/chromes-breaking-and-entering/)
* [2026-07-24, 23:00:00](https://yro.slashdot.org/story/26/07/24/2235232/paramount-agrees-to-postpone-warner-bros-merger-until-june-2027?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Paramount Agrees to Postpone Warner Bros. Merger Until June 2027](https://yro.slashdot.org/story/26/07/24/2235232/paramount-agrees-to-postpone-warner-bros-merger-until-june-2027?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-24, 22:11:44](https://lobste.rs/s/yia0pc/systems_delays_2026) - [Systems and Delays (2026)](https://martin.janiczek.cz/2026/07/24/systems-and-delays.html)
* [2026-07-24, 22:00:00](https://yro.slashdot.org/story/26/07/24/215251/us-accuses-american-of-allegedly-wiping-his-phone-using-a-duress-password-during-border-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Accuses American of Allegedly Wiping His Phone Using a &apos;Duress&apos; Password During Border Search](https://yro.slashdot.org/story/26/07/24/215251/us-accuses-american-of-allegedly-wiping-his-phone-using-a-duress-password-during-border-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-24, 20:37:00](https://soylentnews.org/article.pl?sid=26/07/23/229219&amp;from=rss) - [Former Microsoft AI Leaders Are Spending $1M to Prove AI Can Replace CEOs](https://soylentnews.org/article.pl?sid=26/07/23/229219&amp;from=rss)
* [2026-07-24, 20:34:19](https://lobste.rs/s/u60zv9/watching_go_s_new_garbage_collector_move) - [Watching Go&apos;s new garbage collector move through the heap](https://theconsensus.dev/p/2026/07/19/observing-gos-garbage-collector-old-and-new.html)
* [2026-07-24, 20:24:48](https://lobste.rs/s/khaizc/delightful_integration_tests_rust) - [Delightful integration tests in Rust](https://github.com/alexpusch/rust-magic-patterns/blob/master/delightful-integration-tests/Readme.md)
* [2026-07-24, 18:37:06](https://news.ycombinator.com/item?id=49039868) - [Show HN: I made some transistor animations](https://brandonli.net/semisim/animations)
* [2026-07-24, 15:55:00](https://soylentnews.org/article.pl?sid=26/07/23/225237&amp;from=rss) - [Scientists Believed This Near-Earth Object Was an Asteroid for 28 Years. They Were Wrong](https://soylentnews.org/article.pl?sid=26/07/23/225237&amp;from=rss)
* [2026-07-24, 14:24:29](https://lobste.rs/s/td8rne/don_t_take_black_pill) - [Don&apos;t take the black pill](https://www.youtube.com/watch?v=zLZwpH5lCD4)
* [2026-07-24, 11:08:00](https://soylentnews.org/article.pl?sid=26/07/23/221216&amp;from=rss) - [I Wanted a Clock That Never Needed Setting. Things Escalated.](https://soylentnews.org/article.pl?sid=26/07/23/221216&amp;from=rss)
* [2026-07-24, 06:26:00](https://soylentnews.org/article.pl?sid=26/07/23/0249220&amp;from=rss) - [I Could&apos;ve Rickrolled the Entire FIFA World Cup and All I Needed Was My ID](https://soylentnews.org/article.pl?sid=26/07/23/0249220&amp;from=rss)
* [2026-07-24, 01:43:00](https://soylentnews.org/article.pl?sid=26/07/23/0234212&amp;from=rss) - [Former OpenAI CTO Does What Altman Won&apos;t: Releases a Frontier AI Model That&apos;s Actually Open](https://soylentnews.org/article.pl?sid=26/07/23/0234212&amp;from=rss)
* [2026-07-23, 20:55:00](https://soylentnews.org/article.pl?sid=26/07/23/0228206&amp;from=rss) - [NASA&apos;s Artemis III Will Need Three Rockets to Do the Job Apollo Did With One](https://soylentnews.org/article.pl?sid=26/07/23/0228206&amp;from=rss)
* [2026-07-23, 16:08:00](https://soylentnews.org/article.pl?sid=26/07/23/029223&amp;from=rss) - [Could China and Russia Really Destroy Starlink?](https://soylentnews.org/article.pl?sid=26/07/23/029223&amp;from=rss)
* [2026-07-23, 11:20:00](https://soylentnews.org/article.pl?sid=26/07/23/023217&amp;from=rss) - [Sweet! Sugar Found in Raspberries Was Discovered Near the Milky Way&apos;s Center](https://soylentnews.org/article.pl?sid=26/07/23/023217&amp;from=rss)
* [2026-07-23, 06:38:00](https://soylentnews.org/article.pl?sid=26/07/22/0039239&amp;from=rss) - [Zilog Z80 Turns 50 as an Open-Source Replacement Heads to Drop-in DIP40 Silicon](https://soylentnews.org/article.pl?sid=26/07/22/0039239&amp;from=rss)
* [2026-07-23, 01:56:00](https://soylentnews.org/article.pl?sid=26/07/21/2227215&amp;from=rss) - [Open Source Misses the Point and Cannot Save Us](https://soylentnews.org/article.pl?sid=26/07/21/2227215&amp;from=rss)
* [2026-07-22, 21:14:00](https://soylentnews.org/article.pl?sid=26/07/21/2225209&amp;from=rss) - [Five Tech Giants are Hiding $1.65tn in AI Debt, Using the Trick that Toppled Enron](https://soylentnews.org/article.pl?sid=26/07/21/2225209&amp;from=rss)
* [2026-07-22, 21:09:59](https://news.ycombinator.com/item?id=49013464) - [SIMD for Collision](https://box2d.org/posts/2026/07/simd-for-collision/)
* [2026-07-22, 16:23:00](https://soylentnews.org/article.pl?sid=26/07/21/2223243&amp;from=rss) - [German Startup Qurie Bags Funding for Molecular Heat Pump](https://soylentnews.org/article.pl?sid=26/07/21/2223243&amp;from=rss)
* [2026-07-22, 15:33:16](https://news.ycombinator.com/item?id=49008434) - [Show HN: Yorishiro – a macOS terminal where AI agents live](https://github.com/sktkkoo/Yorishiro)
* [2026-07-22, 15:29:44](https://news.ycombinator.com/item?id=49008396) - [Zero roadkill as Amazon canopy bridges secure 15,000 crossings](https://news.mongabay.com/2026/07/zero-roadkill-as-amazon-canopy-bridges-secure-15000-crossings/)
* [2026-07-22, 14:03:21](https://news.ycombinator.com/item?id=49007018) - [Spatial languages: Writing code in 2D](https://shukla.io/blog/2026-07/cccx.html)
* [2026-07-22, 13:41:00](https://soylentnews.org/article.pl?sid=26/07/21/2222218&amp;from=rss) - [My Hunt for the Original McDonald’s French-Fry Recipe](https://soylentnews.org/article.pl?sid=26/07/21/2222218&amp;from=rss)
* [2026-07-22, 13:00:29](https://news.ycombinator.com/item?id=49006096) - [How My Images Are Dithered](https://dead.garden/blog/how-my-images-are-dithered.html)
* [2026-07-22, 11:36:00](https://soylentnews.org/article.pl?sid=26/07/22/0025243&amp;from=rss) - [The 2024 New York City Meteorite Contains Amino Acids](https://soylentnews.org/article.pl?sid=26/07/22/0025243&amp;from=rss)
* [2026-07-22, 06:57:00](https://soylentnews.org/article.pl?sid=26/07/21/069235&amp;from=rss) - [How a Gang of Thieves Pulled Off a Multimillion-Dollar Data Center Heist](https://soylentnews.org/article.pl?sid=26/07/21/069235&amp;from=rss)
* [2026-07-22, 02:12:00](https://soylentnews.org/article.pl?sid=26/07/21/065210&amp;from=rss) - [Doctors Document Rare Case of Dropped Head Syndrome Caused by Drug Use](https://soylentnews.org/article.pl?sid=26/07/21/065210&amp;from=rss)
