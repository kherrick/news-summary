# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Cybersecurity Developments

* [Scientists Invented a Fake Disease. AI Told People It Was Real](https://soylentnews.org/article.pl?sid=26/04/17/0337240&amp;from=rss) - Researchers created a fabricated disease and found that AI systems were able to spread the misinformation as if it were real. [Comments](https://soylentnews.org/article.pl?sid=26/04/17/0337240&amp;from=rss)

* [US Government Now Wants Anthropic's 'Mythos', Preparing for AI Cybersecurity Threats](https://yro.slashdot.org/story/26/04/18/039221/us-government-now-wants-anthropics-mythos-preparing-for-ai-cybersecurity-threats?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The U.S. government shows interest in Anthropic's 'Mythos' in a bid to tackle AI-related cybersecurity challenges. [Comments](https://yro.slashdot.org/story/26/04/18/039221/us-government-now-wants-anthropics-mythos-preparing-for-ai-cybersecurity-threats?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Space and Exploration

* [Meet Orpheus—a Hopper Mission Built to Hunt for Life in Martian Volcanoes](https://soylentnews.org/article.pl?sid=26/04/17/0326235&amp;from=rss) - Exploring new possibilities of life, this mission focuses on volcanic regions of Mars. [Comments](https://soylentnews.org/article.pl?sid=26/04/17/0326235&amp;from=rss)

* [NASA Restarts Work To Support Europe's Uncrewed Trip To Mars After Years of Setbacks](https://science.slashdot.org/story/26/04/18/0051201/nasa-restarts-work-to-support-europes-uncrewed-trip-to-mars-after-years-of-setbacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - NASA resumes efforts to collaborate on Europe’s Mars exploration plans. [Comments](https://science.slashdot.org/story/26/04/18/0051201/nasa-restarts-work-to-support-europes-uncrewed-trip-to-mars-after-years-of-setbacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Unique Innovations and Discoveries

* [Running a Minecraft Server and more on a 1960s UNIVAC Computer](https://farlow.dev/2026/04/17/running-a-minecraft-server-and-more-on-a-1960s-univac-computer) - A creative project demonstrates the unexpected capabilities of a 1960s UNIVAC computer. [Comments](https://lobste.rs/s/zjqc4a/running_minecraft_server_more_on_1960s)

* [The electromechanical angle computer inside the B-52 bomber's star tracker](https://www.righto.com/2026/04/B-52-star-tracker-angle-computer.html) - An intriguing look into a vintage navigation tool in use by the B-52 bomber. [Comments](https://news.ycombinator.com/item?id=47817132)

## Web Security and Privacy

* [30 WordPress Plugins Turned Into Malware After Ownership Change](https://it.slashdot.org/story/26/04/18/0552210/30-wordpress-plugins-turned-into-malware-after-ownership-change?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A cautionary tale of plugins being weaponized post-acquisition. [Comments](https://it.slashdot.org/story/26/04/18/0552210/30-wordpress-plugins-turned-into-malware-after-ownership-change?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Shuttered Startups Are Selling Old Slack Chats, Emails to AI Companies](https://yro.slashdot.org/story/26/04/18/014244/shuttered-startups-are-selling-old-slack-chats-emails-to-ai-companies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Unused company data is reportedly being sold to third parties for AI feeds. [Comments](https://yro.slashdot.org/story/26/04/18/014244/shuttered-startups-are-selling-old-slack-chats-emails-to-ai-companies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Environmental and Technological Shifts

* [The USDA's gardening zones have shifted. (Interactive app and map)](https://apps.npr.org/plant-hardiness-garden-map/) - Observe changes in climate patterns with an updated gardening zone interactive map. [Comments](https://news.ycombinator.com/item?id=47817179)

* [Critical Atlantic Current Significantly More Likely To Collapse Than Thought](https://science.slashdot.org/story/26/04/18/0056244/critical-atlantic-current-significantly-more-likely-to-collapse-than-thought?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Potential risks associated with the collapse of the Atlantic Meridional Overturning Circulation have increased. [Comments](https://science.slashdot.org/story/26/04/18/0056244/critical-atlantic-current-significantly-more-likely-to-collapse-than-thought?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

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

* [2026-04-18, 18:34:00](https://it.slashdot.org/story/26/04/18/0552210/30-wordpress-plugins-turned-into-malware-after-ownership-change?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [30 WordPress Plugins Turned Into Malware After Ownership Change](https://it.slashdot.org/story/26/04/18/0552210/30-wordpress-plugins-turned-into-malware-after-ownership-change?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-18, 17:42:00](https://soylentnews.org/article.pl?sid=26/04/17/0337240&amp;from=rss) - [Scientists Invented a Fake Disease. AI Told People It Was Real](https://soylentnews.org/article.pl?sid=26/04/17/0337240&amp;from=rss)
* [2026-04-18, 17:34:40](https://lobste.rs/s/2htlsp/hello_old_new_projects_directory) - [Hello old new “Projects” directory](https://blog.tenstral.net/2026/04/hello-projects-directory.html)
* [2026-04-18, 17:34:00](https://science.slashdot.org/story/26/04/18/0444250/fructose-isnt-just-sugar-it-acts-more-like-a-hormone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fructose Isn&apos;t Just Sugar. It Acts More Like a Hormone](https://science.slashdot.org/story/26/04/18/0444250/fructose-isnt-just-sugar-it-acts-more-like-a-hormone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-18, 17:12:44](https://news.ycombinator.com/item?id=47817581) - [Graphs That Explain the State of AI in 2026](https://spectrum.ieee.org/state-of-ai-index-2026)
* [2026-04-18, 17:11:42](https://lobste.rs/s/gisyhv/optimizing_ruby_path_methods) - [Optimizing Ruby Path Methods](https://byroot.github.io/ruby/performance/2026/04/18/faster-paths.html)
* [2026-04-18, 17:01:56](https://news.ycombinator.com/item?id=47817473) - [UpCodes (YC S17) Is Hiring SDRs to Help Make Construction More Productive](https://up.codes/careers?utm_source=HN)
* [2026-04-18, 16:34:00](https://yro.slashdot.org/story/26/04/18/156236/20-year-old-enters-prison-for-historic-breach-ransoming-of-massive-student-database?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [20-Year-Old Enters Prison for Historic Breach, Ransoming of Massive Student Database](https://yro.slashdot.org/story/26/04/18/156236/20-year-old-enters-prison-for-historic-breach-ransoming-of-massive-student-database?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-18, 16:31:25](https://news.ycombinator.com/item?id=47817179) - [The USDA&apos;s gardening zones have shifted. (Interactive app and map)](https://apps.npr.org/plant-hardiness-garden-map/)
* [2026-04-18, 16:26:47](https://news.ycombinator.com/item?id=47817132) - [The electromechanical angle computer inside the B-52 bomber&apos;s star tracker](https://www.righto.com/2026/04/B-52-star-tracker-angle-computer.html)
* [2026-04-18, 16:08:31](https://lobste.rs/s/1kgeq0/anthropic_s_claude_mythos_launch_is_built) - [Anthropic&apos;s Claude Mythos Launch Is Built on Misinformation](https://www.artificialintelligencemadesimple.com/p/anthropics-claude-mythos-launch-is)
* [2026-04-18, 16:05:43](https://news.ycombinator.com/item?id=47816960) - [Opus 4.7 to 4.6 Inflation is ~45%](https://tokens.billchambers.me/leaderboard)
* [2026-04-18, 15:46:02](https://lobste.rs/s/hwdd5o/secret_life_circuits) - [The Secret Life of Circuits](https://lcamtuf.coredump.cx/electronics/)
* [2026-04-18, 15:34:00](https://news.slashdot.org/story/26/04/18/0417208/fsf-to-onlyoffice-you-cant-use-the-gnu-agpl-to-take-software-freedom-away?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FSF to OnlyOffice:  You Can&apos;t Use the GNU (A)GPL to Take Software Freedom Away](https://news.slashdot.org/story/26/04/18/0417208/fsf-to-onlyoffice-you-cant-use-the-gnu-agpl-to-take-software-freedom-away?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-18, 15:24:39](https://news.ycombinator.com/item?id=47816629) - [Show HN: MDV – a Markdown superset for docs, dashboards, and slides with data](https://github.com/drasimwagan/mdv)
* [2026-04-18, 15:24:18](https://news.ycombinator.com/item?id=47816625) - [Fuzix OS](https://www.fuzix.org/)
* [2026-04-18, 14:58:19](https://lobste.rs/s/lhcktd/mad_bugs_even_cat_readme_txt_is_not_safe) - [MAD Bugs: Even \&quot;cat readme.txt\&quot; is not safe](https://blog.calif.io/p/mad-bugs-even-cat-readmetxt-is-not)
* [2026-04-18, 14:35:30](https://lobste.rs/s/tttexr/sqlite_prefixes_its_temp_files_with) - [SQLite prefixes its temp files with `etilqs_`](https://avi.im/blag/2026/etilqs/)
* [2026-04-18, 14:34:00](https://yro.slashdot.org/story/26/04/18/039221/us-government-now-wants-anthropics-mythos-preparing-for-ai-cybersecurity-threats?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Government Now Wants Anthropic&apos;s &apos;Mythos&apos;, Preparing for AI Cybersecurity Threats](https://yro.slashdot.org/story/26/04/18/039221/us-government-now-wants-anthropics-mythos-preparing-for-ai-cybersecurity-threats?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-18, 14:01:51](https://lobste.rs/s/tnogqh/native_ipv6_kubernetes_for_true_edge) - [Native IPv6 Kubernetes for true edge routing](https://henrikgerdes.me/blog/2026-04-k8s-native-ipv6-edge/)
* [2026-04-18, 13:53:19](https://lobste.rs/s/hsrqhj/state_kdenlive_2026) - [State of Kdenlive - 2026](https://kdenlive.org/news/2026/state-2026/)
* [2026-04-18, 13:29:04](https://news.ycombinator.com/item?id=47815774) - [Migrating from DigitalOcean to Hetzner](https://isayeter.com/posts/digitalocean-to-hetzner-migration/)
* [2026-04-18, 13:19:17](https://lobste.rs/s/zjqc4a/running_minecraft_server_more_on_1960s) - [Running a Minecraft Server and more on a 1960s UNIVAC Computer](https://farlow.dev/2026/04/17/running-a-minecraft-server-and-more-on-a-1960s-univac-computer)
* [2026-04-18, 12:54:00](https://soylentnews.org/article.pl?sid=26/04/17/0336248&amp;from=rss) - [Online Response to the Attack on Sam Altman&apos;s House Shows a Generational Divide](https://soylentnews.org/article.pl?sid=26/04/17/0336248&amp;from=rss)
* [2026-04-18, 12:30:57](https://lobste.rs/s/jzgjbm/how_why_we_rewrote_our_production_c) - [How (and why) we rewrote our production C++ frontend infrastructure in Rust](https://blog.nearlyfreespeech.net/2026/04/17/how-and-why-we-rewrote-our-production-c-frontend-infrastructure-in-rust/)
* [2026-04-18, 12:29:06](https://news.ycombinator.com/item?id=47815395) - [Why Japan has such good railways](https://worksinprogress.co/issue/why-japan-has-such-good-railways/)
* [2026-04-18, 12:15:03](https://lobste.rs/s/qmk3ph/towards_trust_emacs) - [Towards Trust in Emacs](https://eshelyaron.com/posts/2026-04-15-towards-trust-in-emacs.html)
* [2026-04-18, 11:43:57](https://news.ycombinator.com/item?id=47815127) - [The quiet disappearance of the free-range childhood](https://bigthink.com/mind-behavior/the-quiet-disappearance-of-the-free-range-childhood/)
* [2026-04-18, 11:42:37](https://news.ycombinator.com/item?id=47815118) - [State of Kdenlive](https://kdenlive.org/news/2026/state-2026/)
* [2026-04-18, 11:00:00](https://yro.slashdot.org/story/26/04/18/014244/shuttered-startups-are-selling-old-slack-chats-emails-to-ai-companies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Shuttered Startups Are Selling Old Slack Chats, Emails To AI Companies](https://yro.slashdot.org/story/26/04/18/014244/shuttered-startups-are-selling-old-slack-chats-emails-to-ai-companies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-18, 09:17:46](https://lobste.rs/s/9xgleb/how_github_uses_ebpf_improve_deployment) - [How GitHub uses eBPF to improve deployment safety](https://github.blog/engineering/infrastructure/how-github-uses-ebpf-to-improve-deployment-safety/)
* [2026-04-18, 08:12:00](https://soylentnews.org/article.pl?sid=26/04/17/0326235&amp;from=rss) - [Meet Orpheus—a Hopper Mission Built to Hunt for Life in Martian Volcanoes](https://soylentnews.org/article.pl?sid=26/04/17/0326235&amp;from=rss)
* [2026-04-18, 07:00:00](https://science.slashdot.org/story/26/04/18/0051201/nasa-restarts-work-to-support-europes-uncrewed-trip-to-mars-after-years-of-setbacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Restarts Work To Support Europe&apos;s Uncrewed Trip To Mars After Years of Setbacks](https://science.slashdot.org/story/26/04/18/0051201/nasa-restarts-work-to-support-europes-uncrewed-trip-to-mars-after-years-of-setbacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-18, 06:40:47](https://news.ycombinator.com/item?id=47813668) - [Category Theory Illustrated – Orders](https://abuseofnotation.github.io/category-theory-illustrated/04_order/)
* [2026-04-18, 06:20:04](https://news.ycombinator.com/item?id=47813566) - [Amiga Graphics Archive](https://amiga.lychesis.net/)
* [2026-04-18, 03:30:00](https://science.slashdot.org/story/26/04/18/0056244/critical-atlantic-current-significantly-more-likely-to-collapse-than-thought?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Critical Atlantic Current Significantly More Likely To Collapse Than Thought](https://science.slashdot.org/story/26/04/18/0056244/critical-atlantic-current-significantly-more-likely-to-collapse-than-thought?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-18, 03:30:00](https://soylentnews.org/article.pl?sid=26/04/17/0318245&amp;from=rss) - [IPv6 Adoption Reaches 50% - The Long Journey Toward Internet&apos;s Next Generation](https://soylentnews.org/article.pl?sid=26/04/17/0318245&amp;from=rss)
* [2026-04-18, 02:42:46](https://lobste.rs/s/i0tuyd/lenses_rust_my_solution) - [Lenses in Rust and My Solution](https://lambdalemon.gay/posts/grist-lens)
* [2026-04-18, 01:19:05](https://lobste.rs/s/muofgb/deleteduser_com_15_pii_magnet) - [Deleteduser.com —a $15 PII Magnet](https://mike-sheward.medium.com/deleteduser-com-a-15-pii-magnet-c4396eb21061)
* [2026-04-18, 01:15:43](https://news.ycombinator.com/item?id=47812341) - [Show HN: I made a calculator that works over disjoint sets of intervals](https://victorpoughon.github.io/interval-calculator/)
* [2026-04-17, 23:59:56](https://lobste.rs/s/a6ztsz/it_is_time_ban_sale_precise_geolocation) - [It Is Time to Ban the Sale of Precise Geolocation Data](https://www.lawfaremedia.org/article/it-is-time-to-ban-the-sale-of-precise-geolocation)
* [2026-04-17, 23:00:00](https://news.slashdot.org/story/26/04/17/2138236/online-personalities-and-comedians-overtake-tv-and-newspapers-as-primary-news-sources?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Online Personalities and Comedians Overtake TV and Newspapers as Primary News Sources](https://news.slashdot.org/story/26/04/17/2138236/online-personalities-and-comedians-overtake-tv-and-newspapers-as-primary-news-sources?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-17, 22:50:00](https://soylentnews.org/article.pl?sid=26/04/16/1142203&amp;from=rss) - [Back Button Hijacking to be Penalised in Google Crackdown](https://soylentnews.org/article.pl?sid=26/04/16/1142203&amp;from=rss)
* [2026-04-17, 22:00:00](https://it.slashdot.org/story/26/04/17/2127243/nist-limits-cve-enrichment-after-263-surge-in-vulnerability-submissions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NIST Limits CVE Enrichment After 263% Surge In Vulnerability Submissions](https://it.slashdot.org/story/26/04/17/2127243/nist-limits-cve-enrichment-after-263-surge-in-vulnerability-submissions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-17, 21:33:13](https://lobste.rs/s/tyxxnd/building_ezli_me_link_shortener_rust) - [Building ezli.me, a link shortener in Rust](https://rustunit.com/blog/2026/04-17-ezlime-link-shortener-in-rust/)
* [2026-04-17, 21:00:34](https://lobste.rs/s/m0c78b/why_is_ipv6_so_complicated) - [Why is IPv6 so complicated?](https://github.com/becarpenter/misc/blob/main/why6why.md)
* [2026-04-17, 21:00:00](https://yro.slashdot.org/story/26/04/17/2115258/gazing-into-sam-altmans-orb-could-solve-ticket-scalping?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gazing Into Sam Altman&apos;s Orb Could Solve Ticket Scalping](https://yro.slashdot.org/story/26/04/17/2115258/gazing-into-sam-altmans-orb-could-solve-ticket-scalping?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-17, 20:27:16](https://lobste.rs/s/rp1yrv/simplified_model_fil_c) - [A simplified model of Fil-C](https://www.corsix.org/content/simplified-model-of-fil-c)
* [2026-04-17, 20:00:00](https://tech.slashdot.org/story/26/04/17/1850251/mozilla-thunderbolt-is-an-open-source-ai-client-focused-on-control-and-self-hosting?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mozilla &apos;Thunderbolt&apos; Is an Open-Source AI Client Focused On Control and Self-Hosting](https://tech.slashdot.org/story/26/04/17/1850251/mozilla-thunderbolt-is-an-open-source-ai-client-focused-on-control-and-self-hosting?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-17, 19:00:00](https://entertainment.slashdot.org/story/26/04/17/180203/amazons-new-fire-tv-sticks-no-longer-support-sideloading?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon&apos;s New Fire TV Sticks No Longer Support Sideloading](https://entertainment.slashdot.org/story/26/04/17/180203/amazons-new-fire-tv-sticks-no-longer-support-sideloading?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-17, 18:43:32](https://news.ycombinator.com/item?id=47809190) - [\&quot;cat readme.txt\&quot; is not safe if you use iTerm2](https://blog.calif.io/p/mad-bugs-even-cat-readmetxt-is-not)
* [2026-04-17, 18:17:01](https://news.ycombinator.com/item?id=47808913) - [All 12 moonwalkers had \&quot;lunar hay fever\&quot; from dust smelling like gunpowder (2018)](https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/The_toxic_side_of_the_Moon)
* [2026-04-17, 18:06:00](https://soylentnews.org/article.pl?sid=26/04/16/1137236&amp;from=rss) - [Physicists Think They&apos;ve Resolved the Proton Size Puzzle](https://soylentnews.org/article.pl?sid=26/04/16/1137236&amp;from=rss)
* [2026-04-17, 18:00:00](https://science.slashdot.org/story/26/04/17/1721205/openai-starts-offering-a-biology-tuned-llm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Starts Offering a Biology-Tuned LLM](https://science.slashdot.org/story/26/04/17/1721205/openai-starts-offering-a-biology-tuned-llm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-17, 17:46:45](https://lobste.rs/s/my3lu9/lost_thesis_dennis_ritchie) - [The lost thesis of Dennis Ritchie](https://archive.computerhistory.org/resources/access/text/2020/05/102790971/Ritchie_dissertation.pdf)
* [2026-04-17, 17:18:58](https://news.ycombinator.com/item?id=47808268) - [Show HN: Smol machines – subsecond coldstart, portable virtual machines](https://github.com/smol-machines/smolvm)
* [2026-04-17, 17:00:00](https://hardware.slashdot.org/story/26/04/17/1623236/microsoft-increases-the-fat32-limit-from-32gb-to-2tb?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Increases the FAT32 Limit From 32GB To 2TB](https://hardware.slashdot.org/story/26/04/17/1623236/microsoft-increases-the-fat32-limit-from-32gb-to-2tb?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-17, 16:19:53](https://news.ycombinator.com/item?id=47807583) - [I’m spending months coding the old way](https://miguelconner.substack.com/p/im-coding-by-hand)
* [2026-04-17, 16:06:02](https://lobste.rs/s/9vw47d/practical_antiforgery_software_design) - [Practical Antiforgery in Software Design](https://hudlow.org/2026/practical-antiforgery)
* [2026-04-17, 15:29:36](https://news.ycombinator.com/item?id=47807006) - [Measuring Claude 4.7&apos;s tokenizer costs](https://www.claudecodecamp.com/p/i-measured-claude-4-7-s-new-tokenizer-here-s-what-it-costs-you)
* [2026-04-17, 14:58:04](https://lobste.rs/s/tirqno/healthchecks_io_now_uses_self_hosted) - [Healthchecks.io Now Uses Self-hosted Object Storage](https://blog.healthchecks.io/2026/04/healthchecks-io-now-uses-self-hosted-object-storage/)
* [2026-04-17, 13:49:55](https://lobste.rs/s/d55yj0/we_beat_google_s_zero_knowledge_proof) - [We beat Google’s zero-knowledge proof of quantum cryptanalysis](https://blog.trailofbits.com/2026/04/17/we-beat-googles-zero-knowledge-proof-of-quantum-cryptanalysis/)
* [2026-04-17, 13:20:00](https://soylentnews.org/article.pl?sid=26/04/15/1730255&amp;from=rss) - [Claude Mythos Preview Has Officially Frightened the British](https://soylentnews.org/article.pl?sid=26/04/15/1730255&amp;from=rss)
* [2026-04-17, 13:02:52](https://lobste.rs/s/y8jlwv/tangled_newsletter_01_hello) - [tangled newsletter 01 — hello](https://blog.tangled.org/newsletter-01/)
* [2026-04-17, 11:59:40](https://lobste.rs/s/zxgmfx/http_desync_discord_s_media_proxy_spying) - [HTTP desync in Discord&apos;s media proxy: Spying on a whole platform](https://tmctmt.com/posts/http-desync-in-discord/)
* [2026-04-17, 11:37:05](https://lobste.rs/s/tbvl30/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/tbvl30/what_are_you_doing_this_weekend)
* [2026-04-17, 08:36:00](https://soylentnews.org/article.pl?sid=26/04/15/1727239&amp;from=rss) - [Meta Zuckerberg Becomes the New Clippy](https://soylentnews.org/article.pl?sid=26/04/15/1727239&amp;from=rss)
* [2026-04-17, 03:52:00](https://soylentnews.org/article.pl?sid=26/04/15/1723257&amp;from=rss) - [Ukraine&apos;s Military Robot Surge Aims to Offset Drone Risks to Humans](https://soylentnews.org/article.pl?sid=26/04/15/1723257&amp;from=rss)
* [2026-04-16, 23:07:00](https://soylentnews.org/article.pl?sid=26/04/15/1539246&amp;from=rss) - [The Entity That Has Been Watching Bitcoin for 14 Years](https://soylentnews.org/article.pl?sid=26/04/15/1539246&amp;from=rss)
* [2026-04-16, 18:20:00](https://soylentnews.org/article.pl?sid=26/04/15/1535223&amp;from=rss) - [US Appeals Court Declares 158-Year-Old Home Distilling Ban Unconstitutional](https://soylentnews.org/article.pl?sid=26/04/15/1535223&amp;from=rss)
* [2026-04-16, 13:36:00](https://soylentnews.org/article.pl?sid=26/04/15/0217209&amp;from=rss) - [AI Token Freeloaders Manipulating Customer Support Bots](https://soylentnews.org/article.pl?sid=26/04/15/0217209&amp;from=rss)
* [2026-04-16, 08:52:00](https://soylentnews.org/communityreviews/article.pl?sid=26/04/15/0214204&amp;from=rss) - [OpenAI Says Elon Musk is ‘Injecting Chaos’ With Recent Legal Maneuver](https://soylentnews.org/communityreviews/article.pl?sid=26/04/15/0214204&amp;from=rss)
* [2026-04-16, 04:05:00](https://soylentnews.org/article.pl?sid=26/04/15/028227&amp;from=rss) - [This Memory Chip Survives Temperatures Hotter Than Lava](https://soylentnews.org/article.pl?sid=26/04/15/028227&amp;from=rss)
* [2026-04-16, 03:09:50](https://news.ycombinator.com/item?id=47788207) - [The simple geometry behind any road](https://sandboxspirit.com/blog/simple-geometry-of-roads/)
* [2026-04-15, 23:20:00](https://soylentnews.org/article.pl?sid=26/04/15/021231&amp;from=rss) - [Blaming Kids for Poor Security](https://soylentnews.org/article.pl?sid=26/04/15/021231&amp;from=rss)
* [2026-04-15, 19:56:31](https://news.ycombinator.com/item?id=47784395) - [Sumida Aquarium Posts 2026 Penguin Relationship Chart, with Drama and Breakups](https://www.sumida-aquarium.com/special/sokanzu/en/2026/)
* [2026-04-15, 19:46:16](https://news.ycombinator.com/item?id=47784250) - [Scientists discover \&quot;cleaner ants\&quot; that groom giant ants in Arizona desert](https://www.sciencedaily.com/releases/2026/04/260414075641.htm)
* [2026-04-15, 18:37:00](https://soylentnews.org/article.pl?sid=26/04/15/0158227&amp;from=rss) - [South Korea&apos;s Telecom Giants Surprise 7 Million Users With Unlimited, Universal Internet](https://soylentnews.org/article.pl?sid=26/04/15/0158227&amp;from=rss)
* [2026-04-15, 18:07:46](https://news.ycombinator.com/item?id=47782925) - [Michael Rabin has died](https://en.wikipedia.org/wiki/Michael_O._Rabin)
* [2026-04-15, 13:52:00](https://soylentnews.org/article.pl?sid=26/04/14/0413241&amp;from=rss) - [Electrode Technology Achieves 86% Efficiency for Converting CO₂ Into Plastic Precursors](https://soylentnews.org/article.pl?sid=26/04/14/0413241&amp;from=rss)
* [2026-04-15, 13:49:15](https://news.ycombinator.com/item?id=47778938) - [Towards trust in Emacs](https://eshelyaron.com/posts/2026-04-15-towards-trust-in-emacs.html)
* [2026-04-15, 13:47:58](https://news.ycombinator.com/item?id=47778922) - [Are the costs of AI agents also rising exponentially? (2025)](https://www.tobyord.com/writing/hourly-costs-for-ai-agents)
* [2026-04-15, 09:07:00](https://soylentnews.org/article.pl?sid=26/04/14/049220&amp;from=rss) - [Linux Lays Down the Law on AI-Generated Code](https://soylentnews.org/article.pl?sid=26/04/14/049220&amp;from=rss)
* [2026-04-15, 04:22:00](https://soylentnews.org/article.pl?sid=26/04/14/043205&amp;from=rss) - [The AI Great Leap Forward](https://soylentnews.org/article.pl?sid=26/04/14/043205&amp;from=rss)
* [2026-04-15, 02:29:39](https://news.ycombinator.com/item?id=47773969) - [Understanding the FFT Algorithm (2013)](https://jakevdp.github.io/blog/2013/08/28/understanding-the-fft/)
* [2026-04-14, 23:35:00](https://soylentnews.org/article.pl?sid=26/04/14/0256247&amp;from=rss) - [Missouri Town Fires Half its City Council Over Data Center Deal](https://soylentnews.org/article.pl?sid=26/04/14/0256247&amp;from=rss)
* [2026-04-14, 18:53:00](https://soylentnews.org/article.pl?sid=26/04/14/0235214&amp;from=rss) - [Original Task Manager Was Only 80KB So It Could Run Smoothly on 90s Computers](https://soylentnews.org/article.pl?sid=26/04/14/0235214&amp;from=rss)
* [2026-04-14, 16:00:49](https://news.ycombinator.com/item?id=47767398) - [It&apos;s OK to compare floating-points for equality](https://lisyarus.github.io/blog/posts/its-ok-to-compare-floating-points-for-equality.html)
* [2026-04-14, 16:00:49](https://news.ycombinator.com/item?id=47767397) - [80386 Memory Pipeline](https://nand2mario.github.io/posts/2026/80386_memory_pipeline/)
* [2026-04-14, 14:02:00](https://soylentnews.org/article.pl?sid=26/04/12/173259&amp;from=rss) - [Tea: A Stimulant That Made the Modern World ](https://soylentnews.org/article.pl?sid=26/04/12/173259&amp;from=rss)
* [2026-04-14, 09:12:00](https://soylentnews.org/article.pl?sid=26/04/12/170258&amp;from=rss) - [Linux Kernel Maintainers Are Following Through on Removing Intel 486 Support](https://soylentnews.org/article.pl?sid=26/04/12/170258&amp;from=rss)
* [2026-04-14, 04:29:00](https://soylentnews.org/article.pl?sid=26/04/12/170200&amp;from=rss) - [Startup Secures $30 Million Contract to 3D Print Jet Engines for the USAF](https://soylentnews.org/article.pl?sid=26/04/12/170200&amp;from=rss)
* [2026-04-14, 02:45:27](https://news.ycombinator.com/item?id=47760648) - [A Dumb Introduction to Z3 (2025)](https://ar-ms.me/thoughts/a-gentle-introduction-to-z3/)
