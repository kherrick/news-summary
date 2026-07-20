# [News Summary](https://kherrick.github.io/news-summary/)

## Tech and Innovation

* [Great Ape Laughter Reveals a Hidden Origin of Human Speech](https://soylentnews.org/article.pl?sid=26/07/20/0338215&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/07/20/0338215&amp;from=rss))

* [Minimal Git CI using hooks](https://mccd.space/posts/26-06-29/simple-git-ci) ([comments](https://lobste.rs/s/jr72dt/minimal_git_ci_using_hooks))

* [Exploit brokers pay $500k for WordPress RCEs. I found one with GPT5.6 and $25](https://slcyber.io/research-center/exploit-brokers-pay-500000-for-a-wordpress-rce-i-found-one-with-gpt5-6/) ([comments](https://news.ycombinator.com/item?id=48975665))

* [Rust Will Help Linux Succeed and Makes Coding Fun, Says Greg Kroah-Hartman](https://developers.slashdot.org/story/26/07/20/0417244/rust-will-help-linux-succeed-and-makes-coding-fun-says-greg-kroah-hartman?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://developers.slashdot.org/story/26/07/20/0417244/rust-will-help-linux-succeed-and-makes-coding-fun-says-greg-kroah-hartman?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [I wrote an API client for my water-cooled bed](https://tinkering.xyz/bedctl/) ([comments](https://lobste.rs/s/op1k28/i_wrote_api_client_for_my_water_cooled_bed))

* [Hollywood Sci-fi Studio Lot Now Pitched As Site To Make Real Space-age Weapons](https://entertainment.slashdot.org/story/26/07/20/0331209/hollywood-sci-fi-studio-lot-now-pitched-as-site-to-make-real-space-age-weapons?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://entertainment.slashdot.org/story/26/07/20/0331209/hollywood-sci-fi-studio-lot-now-pitched-as-site-to-make-real-space-age-weapons?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Cybersecurity and Privacy

* [Fake Go DNS Scanner Spread Malware Through Over 200 GitHub Repos](https://soylentnews.org/article.pl?sid=26/07/20/0325216&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/07/20/0325216&amp;from=rss))

* [The EU is about to sell our most sensitive data to the US for visa-free travel](https://edri.org/our-work/the-eu-is-about-to-sell-our-most-sensitive-data-to-the-us-for-visa-free-travel/) ([comments](https://news.ycombinator.com/item?id=48977711))

## Space and Scientific Discoveries

* [The Galaxy's Coldest “Stars” Might Actually be Alien Megastructures](https://soylentnews.org/article.pl?sid=26/07/20/0318228&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/07/20/0318228&amp;from=rss))

* [Xiaomi-Robotics-1](https://robotics.xiaomi.com/xiaomi-robotics-1.html) ([comments](https://news.ycombinator.com/item?id=48974454))

## Artificial Intelligence Trends

* [New Free Speech Concern: When AI Chatbots Won't Criticize Leaders from Repressive Regimes](https://yro.slashdot.org/story/26/07/20/0611253/new-free-speech-concern-when-ai-chatbots-wont-criticize-leaders-from-repressive-regimes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://yro.slashdot.org/story/26/07/20/0611253/new-free-speech-concern-when-ai-chatbots-wont-criticize-leaders-from-repressive-regimes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [As AI Transforms Silicon Valley, Some Tech Workers Face Evaporating Financial Security](https://it.slashdot.org/story/26/07/20/0212244/as-ai-transforms-silicon-valley-some-tech-workers-face-evaporating-financial-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://it.slashdot.org/story/26/07/20/0212244/as-ai-transforms-silicon-valley-some-tech-workers-face-evaporating-financial-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

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

* [2026-07-20, 12:55:00](https://soylentnews.org/article.pl?sid=26/07/20/0338215&amp;from=rss) - [Great Ape Laughter Reveals a Hidden Origin of Human Speech](https://soylentnews.org/article.pl?sid=26/07/20/0338215&amp;from=rss)
* [2026-07-20, 12:14:08](https://news.ycombinator.com/item?id=48977711) - [The EU is about to sell our most sensitive data to the US for visa-free travel](https://edri.org/our-work/the-eu-is-about-to-sell-our-most-sensitive-data-to-the-us-for-visa-free-travel/)
* [2026-07-20, 12:10:14](https://lobste.rs/s/21lrrw/gitolite) - [Gitolite](https://gitolite.com/gitolite/index.html)
* [2026-07-20, 11:34:00](https://entertainment.slashdot.org/story/26/07/20/0331209/hollywood-sci-fi-studio-lot-now-pitched-as-site-to-make-real-space-age-weapons?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hollywood Sci-fi Studio Lot Now Pitched As Site To Make Real Space-age Weapons ](https://entertainment.slashdot.org/story/26/07/20/0331209/hollywood-sci-fi-studio-lot-now-pitched-as-site-to-make-real-space-age-weapons?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-20, 10:30:40](https://news.ycombinator.com/item?id=48976846) - [Airport Simulator](https://airport.apunen.com/)
* [2026-07-20, 10:30:01](https://lobste.rs/s/bz0spb/building_amigaos_development) - [Building an AmigaOS Development Environment in 2026](https://turtleware.eu/posts/Building-an-AmigaOS-Development-Environment-in-2026.html)
* [2026-07-20, 10:12:22](https://news.ycombinator.com/item?id=48976682) - [Airbus Takes Flight from AWS](https://www.theregister.com/columnists/2026/07/20/airbus-takes-flight-from-aws-what-happens-next-is-critical/5274109)
* [2026-07-20, 09:02:49](https://lobste.rs/s/6zlnpk/json5e_json5_for_humans) - [JSON5E - JSON5 for Humans](https://github.com/boris-kolpackov/libpdjson5/blob/master/JSON5E.md)
* [2026-07-20, 08:28:45](https://lobste.rs/s/jr72dt/minimal_git_ci_using_hooks) - [Minimal Git CI using hooks](https://mccd.space/posts/26-06-29/simple-git-ci)
* [2026-07-20, 08:25:33](https://lobste.rs/s/hq0he3/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/hq0he3/what_are_you_doing_this_week)
* [2026-07-20, 08:13:36](https://news.ycombinator.com/item?id=48975665) - [Exploit brokers pay $500k for WordPress RCEs. I found one with GPT5.6 and $25](https://slcyber.io/research-center/exploit-brokers-pay-500000-for-a-wordpress-rce-i-found-one-with-gpt5-6/)
* [2026-07-20, 08:12:00](https://soylentnews.org/article.pl?sid=26/07/20/0325216&amp;from=rss) - [Fake Go DNS Scanner Spread Malware Through Over 200 GitHub Repos](https://soylentnews.org/article.pl?sid=26/07/20/0325216&amp;from=rss)
* [2026-07-20, 07:34:00](https://yro.slashdot.org/story/26/07/20/0611253/new-free-speech-concern-when-ai-chatbots-wont-criticize-leaders-from-repressive-regimes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Free Speech Concern: When AI Chatbots Won&apos;t Criticize Leaders from Repressive Regimes](https://yro.slashdot.org/story/26/07/20/0611253/new-free-speech-concern-when-ai-chatbots-wont-criticize-leaders-from-repressive-regimes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-20, 07:09:19](https://lobste.rs/s/a12cfy/scanline_edge_flag_algorithm_for) - [Scanline edge-flag algorithm for antialiasing](https://mlab.taik.fi/~kkallio/antialiasing/EdgeFlagAA.pdf)
* [2026-07-20, 07:04:16](https://lobste.rs/s/zjnc5o/fuzzing_for_fun_unauthenticated_denial) - [Fuzzing for fun - unauthenticated denial of service in snac2](https://nullenvk.pl/posts/02-snac2-json/)
* [2026-07-20, 07:04:02](https://lobste.rs/s/op1k28/i_wrote_api_client_for_my_water_cooled_bed) - [I wrote an API client for my water-cooled bed](https://tinkering.xyz/bedctl/)
* [2026-07-20, 05:39:53](https://lobste.rs/s/zvoqic/email_encryption) - [email encryption](https://computer.rip/2026-07-19-email-encryption.html)
* [2026-07-20, 04:45:15](https://news.ycombinator.com/item?id=48974454) - [Xiaomi-Robotics-1](https://robotics.xiaomi.com/xiaomi-robotics-1.html)
* [2026-07-20, 04:24:48](https://news.ycombinator.com/item?id=48974325) - [LoRA Speedrun – a public wall-clock leaderboard for fine-tuning techniques](https://github.com/Saivineeth147/lora-speedrun)
* [2026-07-20, 04:20:00](https://developers.slashdot.org/story/26/07/20/0417244/rust-will-help-linux-succeed-and-makes-coding-fun-says-greg-kroah-hartman?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rust Will Help Linux Succeed and Makes Coding Fun, Says Greg Kroah-Hartman](https://developers.slashdot.org/story/26/07/20/0417244/rust-will-help-linux-succeed-and-makes-coding-fun-says-greg-kroah-hartman?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-20, 04:19:22](https://news.ycombinator.com/item?id=48974292) - [When can a power company take your land for data center infrastructure?](https://theconversation.com/when-can-a-power-company-take-your-land-for-data-center-infrastructure-284061)
* [2026-07-20, 03:24:00](https://soylentnews.org/article.pl?sid=26/07/20/0318228&amp;from=rss) - [The Galaxy&apos;s Coldest “Stars” Might Actually be Alien Megastructures](https://soylentnews.org/article.pl?sid=26/07/20/0318228&amp;from=rss)
* [2026-07-20, 02:46:27](https://lobste.rs/s/qyacql/who_s_responsible_for_bug_reports_on_old) - [Who’s responsible for bug reports on old software versions?](https://pointieststick.com/2026/07/19/whos-responsible-for-bug-reports-on-old-software-versions/)
* [2026-07-20, 02:15:00](https://it.slashdot.org/story/26/07/20/0212244/as-ai-transforms-silicon-valley-some-tech-workers-face-evaporating-financial-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [As AI Transforms Silicon Valley, Some Tech Workers Face Evaporating Financial Security](https://it.slashdot.org/story/26/07/20/0212244/as-ai-transforms-silicon-valley-some-tech-workers-face-evaporating-financial-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-20, 01:01:25](https://lobste.rs/s/u93mkb/cagire_forth_based_live_coding_sequencer) - [Cagire - Forth-based live coding sequencer](https://cagire.raphaelforment.fr)
* [2026-07-20, 00:50:00](https://hardware.slashdot.org/story/26/07/20/0046231/zilog-z80-8-bit-cpu-turns-50-open-source-replacement-heads-to-drop-in-dip40-silicon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Zilog Z80 8-Bit CPU Turns 50, Open-source Replacement Heads To Drop-in DIP40 Silicon](https://hardware.slashdot.org/story/26/07/20/0046231/zilog-z80-8-bit-cpu-turns-50-open-source-replacement-heads-to-drop-in-dip40-silicon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-20, 00:16:50](https://news.ycombinator.com/item?id=48972970) - [Moonshine: Lets you stream games from your PC to any device running Moonlight](https://github.com/hgaiser/moonshine)
* [2026-07-19, 23:09:00](https://tech.slashdot.org/story/26/07/19/236218/dozens-of-robotaxi-riders-are-falling-asleep-sparking-frantic-calls-for-emergency-services?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dozens of Robotaxi Riders Are Falling Asleep, Sparking Frantic Calls For Emergency Services](https://tech.slashdot.org/story/26/07/19/236218/dozens-of-robotaxi-riders-are-falling-asleep-sparking-frantic-calls-for-emergency-services?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-19, 21:53:00](https://soylentnews.org/article.pl?sid=26/07/19/0313244&amp;from=rss) - [Welcome to DebConf26!](https://soylentnews.org/article.pl?sid=26/07/19/0313244&amp;from=rss)
* [2026-07-19, 21:04:00](https://news.slashdot.org/story/26/07/19/210221/californias-truth-in-recycling-law-blocked-by-judge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California&apos;s &apos;Truth in Recycling&apos; Law Blocked by Judge](https://news.slashdot.org/story/26/07/19/210221/californias-truth-in-recycling-law-blocked-by-judge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-19, 20:19:38](https://lobste.rs/s/m2shhj/zen_parallel_programming) - [The Zen of Parallel Programming](https://smolnero.com/posts/the-zen-of-parallel-programming)
* [2026-07-19, 19:45:09](https://lobste.rs/s/plztql/dependable_c) - [Dependable C](https://dependablec.org/)
* [2026-07-19, 19:31:26](https://lobste.rs/s/fdmitg/running_microvms_proxmox_ve_easy_way) - [Running microVMs in Proxmox VE, The Easy Way](https://taoofmac.com/space/blog/2026/06/18/1845)
* [2026-07-19, 19:13:29](https://news.ycombinator.com/item?id=48970894) - [Orion Browser by Kagi](https://orionbrowser.com/)
* [2026-07-19, 19:05:00](https://science.slashdot.org/story/26/07/19/191239/james-webb-space-telescope-discovers-how-black-holes-feed-themselves?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [James Webb Space Telescope Discovers How Black Holes Feed Themselves](https://science.slashdot.org/story/26/07/19/191239/james-webb-space-telescope-discovers-how-black-holes-feed-themselves?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-19, 18:57:01](https://news.ycombinator.com/item?id=48970772) - [HomeLab #1: MikroTik as a Home Router](https://justsomebody.dev/blog/mikrotik-home-router)
* [2026-07-19, 17:49:00](https://hardware.slashdot.org/story/26/07/19/1746241/robot-decapitated-in-worlds-first-ever-humanoid-ufc-fight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Robot &apos;Decapitated&apos; in World&apos;s First-Ever Humanoid UFC Fight](https://hardware.slashdot.org/story/26/07/19/1746241/robot-decapitated-in-worlds-first-ever-humanoid-ufc-fight?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-19, 17:25:03](https://news.ycombinator.com/item?id=48969983) - [HMD Touch 4G](https://www.hmd.com/en_int/hmd-touch-4g)
* [2026-07-19, 17:08:00](https://soylentnews.org/article.pl?sid=26/07/19/036256&amp;from=rss) - [AI Mania is Eviscerating Global Decision-Making](https://soylentnews.org/article.pl?sid=26/07/19/036256&amp;from=rss)
* [2026-07-19, 16:34:00](https://tech.slashdot.org/story/26/07/18/2130259/windows-10-still-being-used-often-unpatched-and-insecure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Windows 10 Still Being Used, Often Unpatched and Insecure](https://tech.slashdot.org/story/26/07/18/2130259/windows-10-still-being-used-often-unpatched-and-insecure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-19, 15:34:00](https://tech.slashdot.org/story/26/07/19/0559215/aptera-announces-us-wide-repair-network-for-its-upcoming-solar-electric-car?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Aptera Announces US-Wide Repair Network for Its Upcoming Solar Electric Car](https://tech.slashdot.org/story/26/07/19/0559215/aptera-announces-us-wide-repair-network-for-its-upcoming-solar-electric-car?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-19, 15:20:22](https://news.ycombinator.com/item?id=48968949) - [C64 Basic Dungeon Crawler: Goblin Attack (C64 Basic Part 8)](https://retrogamecoders.com/c64-basic-dungeon-part8/)
* [2026-07-19, 14:41:16](https://news.ycombinator.com/item?id=48968606) - [Show HN: I replaced a $120k bowling center system with $1,600 in ESP32s](https://news.ycombinator.com/item?id=48968606)
* [2026-07-19, 14:34:00](https://news.slashdot.org/story/26/07/19/0631207/former-richard-stallman-colleague-now-argues-for-open-ai-models-too?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Former Richard Stallman Colleague Now Argues for Open AI Models Too](https://news.slashdot.org/story/26/07/19/0631207/former-richard-stallman-colleague-now-argues-for-open-ai-models-too?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-19, 14:32:11](https://lobste.rs/s/ukyvbo/codesizer_why_is_binary_so_big) - [CodeSizer: Why is that binary so big?](https://github.com/Wren6991/CodeSizer)
* [2026-07-19, 14:02:59](https://lobste.rs/s/jdcxr0/git_email_patch_review_addon_for) - [Git email patch review addon for Thunderbird](https://mccd.space/git/thunderbird-patch-review/file/README.html.html)
* [2026-07-19, 13:29:29](https://news.ycombinator.com/item?id=48968063) - [Bananas sprout in Rayleigh Garden UK after 15 years](https://www.bbc.com/news/articles/cvg8edqq5g5o)
* [2026-07-19, 13:21:02](https://lobste.rs/s/fq2z79/shake_blog) - [Shake Blog](https://abhin4v.github.io/shake-blog/)
* [2026-07-19, 13:14:39](https://lobste.rs/s/69mche/what_is_your_favorite_blog_read_recently) - [What is your favorite blog to read recently?](https://lobste.rs/s/69mche/what_is_your_favorite_blog_read_recently)
* [2026-07-19, 12:23:00](https://soylentnews.org/article.pl?sid=26/07/19/034232&amp;from=rss) - [Finland is Preparing to Hide an Entire City Underground](https://soylentnews.org/article.pl?sid=26/07/19/034232&amp;from=rss)
* [2026-07-19, 12:01:53](https://news.ycombinator.com/item?id=48967355) - [I burned all my tokens researching how to save tokens](https://quesma.com/blog/custom-deep-research-pipeline/)
* [2026-07-19, 11:48:18](https://news.ycombinator.com/item?id=48967256) - [Minecraft: Java Edition now uses SDL3](https://www.minecraft.net/en-us/article/minecraft-26-3-snapshot-4)
* [2026-07-19, 11:34:00](https://tech.slashdot.org/story/26/07/19/046258/are-there-cybersecurity-risks-in-over-the-air-tech-used-in-autos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Are There Cybersecurity Risks in Over-the-Air Tech Used in Autos? ](https://tech.slashdot.org/story/26/07/19/046258/are-there-cybersecurity-risks-in-over-the-air-tech-used-in-autos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-19, 11:14:38](https://news.ycombinator.com/item?id=48966984) - [I joined the IndieWeb, here&apos;s what I learned](https://en.andros.dev/blog/0b8e451e/i-joined-the-indieweb-heres-what-i-learned/)
* [2026-07-19, 10:40:29](https://lobste.rs/s/k6ph7c/death_rebirth_my_home_server) - [The death and rebirth of my home server](https://sgt.hootr.club/blog/home-server-rebirth/)
* [2026-07-19, 10:34:58](https://news.ycombinator.com/item?id=48966713) - [What I learned selling 2,500 MIDI recorders: Hardware is not so hard](https://chipweinberger.com/articles/20260719-hardware-is-not-so-hard)
* [2026-07-19, 10:03:23](https://news.ycombinator.com/item?id=48966569) - [Claude Code uses Bun written in Rust now](https://simonwillison.net/2026/Jul/19/claude-code-in-bun-in-rust/)
* [2026-07-19, 08:44:57](https://news.ycombinator.com/item?id=48966120) - [Qwen 3.8](https://twitter.com/Alibaba_Qwen/status/2078759124914098291)
* [2026-07-19, 08:37:50](https://lobste.rs/s/01ypky/more_emulation_goodness_intel_itanium_ia) - [More emulation goodness, an Intel Itanium (IA-64) emulator that boots Windows](https://raymii.org/s/blog/Intel_Itanium_IA-64-Emulator_that_boots_Windows.html)
* [2026-07-19, 07:50:55](https://lobste.rs/s/otiash/mathematicians_still_don_t_know_fastest) - [Mathematicians still don’t know the fastest way to multiply numbers](https://www.scientificamerican.com/article/mathematicians-still-dont-know-the-fastest-way-to-multiply-numbers/)
* [2026-07-19, 07:40:00](https://soylentnews.org/article.pl?sid=26/07/17/1611241&amp;from=rss) - [NTP Server That Traveled Back In Time Caused Massive Aussie Mobile Outage](https://soylentnews.org/article.pl?sid=26/07/17/1611241&amp;from=rss)
* [2026-07-19, 07:34:00](https://science.slashdot.org/story/26/07/18/0327200/new-study-links-teen-boys-adhd-symptoms-to-addictive-social-media-use?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Study Links Teen Boys&apos; ADHD Symptoms To Addictive Social Media Use](https://science.slashdot.org/story/26/07/18/0327200/new-study-links-teen-boys-adhd-symptoms-to-addictive-social-media-use?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-19, 04:32:58](https://lobste.rs/s/0mljfd/computer_at_bottom_canal) - [The computer at the bottom of a canal](https://negroniventurestudios.com/2026/07/18/the-computer-at-the-bottom-of-a-canal/)
* [2026-07-19, 04:07:17](https://lobste.rs/s/l9rap5/hardcore_indieweb_run_your_own_website) - [Hardcore IndieWeb: Run your own website 100% independently for only $0.01/day](https://www.neatnik.net/hardcore-indieweb)
* [2026-07-19, 03:34:00](https://news.slashdot.org/story/26/07/19/034258/grok-build-coding-tool-open-sourced-this-week-promises-to-respect-zero-data-retention?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Grok Build&apos; Coding Tool Open Sourced This Week, Promises to Respect Zero Data Retention](https://news.slashdot.org/story/26/07/19/034258/grok-build-coding-tool-open-sourced-this-week-promises-to-respect-zero-data-retention?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-19, 02:53:00](https://soylentnews.org/article.pl?sid=26/07/17/1524222&amp;from=rss) - [Experts May Have Drastically Underestimated the Lifespan of EV Batteries](https://soylentnews.org/article.pl?sid=26/07/17/1524222&amp;from=rss)
* [2026-07-18, 22:03:00](https://soylentnews.org/article.pl?sid=26/07/17/1520210&amp;from=rss) - [CXMT&apos;s DDR5 RAM Isn&apos;t As Performant Or As Consistent As SK Hynix Dies, Early Testing Shows](https://soylentnews.org/article.pl?sid=26/07/17/1520210&amp;from=rss)
* [2026-07-18, 21:21:41](https://lobste.rs/s/n6hm1q/gleam_has_mirrored_its_source_code_on) - [Gleam has mirrored its source code on tangled (an AT-protocol based forge)](https://tangled.org/gleam.run/gleam)
* [2026-07-18, 17:20:00](https://soylentnews.org/article.pl?sid=26/07/17/1518215&amp;from=rss) - [Archaeologists Found Homer&apos;s Iliad Inside a 1,600-Year-Old Egyptian Mummy](https://soylentnews.org/article.pl?sid=26/07/17/1518215&amp;from=rss)
* [2026-07-18, 16:25:19](https://lobste.rs/s/5kgenk/reviewing_ai_code_is_not_viable_argument) - [Reviewing AI Code Is Not A Viable Argument (2025)](https://softwaremaxims.com/blog/reviewing-ai-code)
* [2026-07-18, 12:36:00](https://soylentnews.org/article.pl?sid=26/07/17/151212&amp;from=rss) - [Linus Torvalds Puts His Foot Down, Tells Anti-AI Programmers To &apos;Fork It&apos; - and Then This Happened](https://soylentnews.org/article.pl?sid=26/07/17/151212&amp;from=rss)
* [2026-07-18, 07:51:00](https://soylentnews.org/article.pl?sid=26/07/17/1454240&amp;from=rss) - [Hundreds Rally at Bethesda HQ to Protest Xbox Layoffs](https://soylentnews.org/article.pl?sid=26/07/17/1454240&amp;from=rss)
* [2026-07-18, 03:05:00](https://soylentnews.org/article.pl?sid=26/07/17/0436211&amp;from=rss) - [Teardown: A Generic 7-Port USB 3.0 Hub That Wasn&apos;t](https://soylentnews.org/article.pl?sid=26/07/17/0436211&amp;from=rss)
* [2026-07-17, 23:06:08](https://news.ycombinator.com/item?id=48953189) - [Sensing warm and cool: how the body detects temperature changes](https://news.uq.edu.au/2026-07-sensing-warm-and-cool-how-body-detects-temperature-changes)
* [2026-07-17, 22:18:00](https://soylentnews.org/article.pl?sid=26/07/17/0430256&amp;from=rss) - [Mathematical Explanation for Accelerated Universe Expansion That Doesn&apos;t Require Dark Energy](https://soylentnews.org/article.pl?sid=26/07/17/0430256&amp;from=rss)
* [2026-07-17, 22:02:18](https://news.ycombinator.com/item?id=48952713) - [What does the Riemann zeta function have to do with the distribution of primes?](https://hidden-phenomena.com/articles/rh)
* [2026-07-17, 17:33:00](https://soylentnews.org/article.pl?sid=26/07/16/0415252&amp;from=rss) - [Why the Human Body Has So Many Design Flaws](https://soylentnews.org/article.pl?sid=26/07/16/0415252&amp;from=rss)
* [2026-07-17, 12:49:00](https://soylentnews.org/article.pl?sid=26/07/16/0231216&amp;from=rss) - [Microsoft&apos;s Secure Boot Has Been Broken for a Decade and No One Noticed Until Now](https://soylentnews.org/article.pl?sid=26/07/16/0231216&amp;from=rss)
* [2026-07-17, 08:07:00](https://soylentnews.org/article.pl?sid=26/07/16/0229204&amp;from=rss) - [Irish Datacenters Now Guzzle 23% of the Country&apos;s Electricity](https://soylentnews.org/article.pl?sid=26/07/16/0229204&amp;from=rss)
* [2026-07-17, 03:23:00](https://soylentnews.org/article.pl?sid=26/07/16/0225242&amp;from=rss) - [Miami-Based City Labs Achieves a First for Commercial Nuclear Power in Space](https://soylentnews.org/article.pl?sid=26/07/16/0225242&amp;from=rss)
* [2026-07-16, 22:36:00](https://soylentnews.org/article.pl?sid=26/07/15/1458200&amp;from=rss) - [New York is the First US State to Ban Smart Glasses in All its Courthouses](https://soylentnews.org/article.pl?sid=26/07/15/1458200&amp;from=rss)
* [2026-07-16, 17:51:00](https://soylentnews.org/article.pl?sid=26/07/15/1451242&amp;from=rss) - [FreeBSD 16 Retires the Last of its GPL Code From its Base System](https://soylentnews.org/article.pl?sid=26/07/15/1451242&amp;from=rss)
* [2026-07-16, 16:50:32](https://news.ycombinator.com/item?id=48936994) - [1-Bit LLM in the Browser](https://huggingface.co/spaces/webml-community/bonsai-webgpu)
* [2026-07-16, 13:05:12](https://news.ycombinator.com/item?id=48933948) - [Moist Towelette Museum](https://moisttowelettemuseum.com/)
* [2026-07-16, 11:07:00](https://soylentnews.org/article.pl?sid=26/07/15/0038203&amp;from=rss) - [Meta Data Center Water Discharges Suspended After Contaminating The City&apos;s Reclamation Water Supply ](https://soylentnews.org/article.pl?sid=26/07/15/0038203&amp;from=rss)
* [2026-07-16, 06:15:00](https://soylentnews.org/article.pl?sid=26/07/15/0036236&amp;from=rss) - [RAMpocalyse Pricing Prompts Maker To Construct His Own Memory Using Ancient Apollo-Era Tech](https://soylentnews.org/article.pl?sid=26/07/15/0036236&amp;from=rss)
* [2026-07-16, 01:32:00](https://soylentnews.org/article.pl?sid=26/07/15/0034229&amp;from=rss) - [Mapped: Where It Costs the Most to Own a Car in America](https://soylentnews.org/article.pl?sid=26/07/15/0034229&amp;from=rss)
