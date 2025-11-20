# [News Summary](https://kherrick.github.io/news-summary/)

## Technological Innovations and Insights

* [The strikingly titled 'Agentic Pelican on a Bicycle' explores the Gemini 3 Pro device with unique insights.](https://www.robert-glaser.de/agentic-pelican-on-a-bicycle-gemini-3-pro/) [Comments](https://lobste.rs/s/towtni/agentic_pelican_on_bicycle_gemini_3_pro)

* [Procedurally Generating Infinite Marble Runs showcases fascinating advancements in procedural content generation.](https://www.youtube.com/watch?v=ULpNiZU2tpg) [Comments](https://lobste.rs/s/it0mbb/procedurally_generating_infinite)

* [The exploration of dual booting postmarketOS and Android provides technical steps and insights.](https://wiki.postmarketos.org/wiki/Dual_Booting/WiP) [Comments](https://lobste.rs/s/axcma8/dual_booting_postmarketos_android)

## AI and Quantum Breakthroughs

* [Quantum Teleportation Between Photons From Two Distant Light Sources has been achieved, marking a landmark in quantum computing.](https://science.slashdot.org/story/25/11/20/0021228/quantum-teleportation-between-photons-from-two-distant-light-sources-achieved?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) [Comments](https://science.slashdot.org/comments.pl?sid=22757072&cid=1104900)

* [Nano Banana Pro explores the intersections of AI and everyday utility with Google's announcement.](https://blog.google/technology/ai/nano-banana-pro/) [Comments](https://news.ycombinator.com/item?id=45993296)

* [Adversarial Poetry as a Universal Single-Turn Jailbreak Mechanism in LLMs exemplifies a novel approach to language model vulnerabilities.](https://arxiv.org/abs/2511.15304) [Comments](https://news.ycombinator.com/item?id=45991738)

## Historical Reflections and Anniversaries

* [Celebrating the 50th anniversary of BITBLT, this piece reflects on the transformable primitive in graphics history.](https://mastodon.sdf.org/@fvzappa/115574872559813280) [Comments](https://lobste.rs/s/roel5a/50th_anniversary_bitblt)

* [A nostalgic tribute to Calvin and Hobbes, marking its 40th celebration.](https://www.npr.org/2025/11/18/nx-s1-5564064/calvin-and-hobbes-bill-watterson-40-years-comic-strip-lee-salem) [Comments](https://news.ycombinator.com/item?id=45991787)

## Governance, Regulation, and Legal Decisions

* [Tokyo Court Finds Cloudflare Liable For Manga Piracy, a landmark ruling in intellectual property cases.](https://yro.slashdot.org/story/25/11/19/2247224/tokyo-court-finds-cloudflare-liable-for-manga-piracy-in-long-running-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) [Comments](https://yro.slashdot.org/comments.pl?sid=22753056&cid=1104747)

* [White House Prepares Executive Order To Block State AI Laws, paving the way for potential AI regulation uniformity in the U.S.](https://yro.slashdot.org/story/25/11/20/0034235/white-house-prepares-executive-order-to-block-state-ai-laws?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) [Comments](https://yro.slashdot.org/comments.pl?sid=22758063&cid=1105016)

## Cultural and Creative Developments

* [Red Alert 2 is now playable in browsers, merging nostalgia with modern technological advances.](https://chronodivide.com/) [Comments](https://news.ycombinator.com/item?id=45991853)

* [A battery-included hacker's file manager is introduced with VIM-inspired keybinds.](https://github.com/houqp/kiorg) [Comments](https://lobste.rs/s/esyfcl/battery_included_hacker_s_file_manager)

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

* [2025-11-20, 15:42:52](https://lobste.rs/s/g0trax/i_ve_been_thinking_about_agents_mcp_all) - [I’ve been thinking about Agents and MCP all wrong](https://rmoff.net/2025/11/20/ive-been-thinking-about-agents-and-mcp-all-wrong/)
* [2025-11-20, 15:35:18](https://lobste.rs/s/axcma8/dual_booting_postmarketos_android) - [Dual booting postmarketOS and Android](https://wiki.postmarketos.org/wiki/Dual_Booting/WiP)
* [2025-11-20, 15:20:00](https://slashdot.org/story/25/11/20/1445202/verizon-cutting-more-than-13000-jobs-as-it-restructures?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Verizon Cutting More Than 13,000 Jobs As It Restructures](https://slashdot.org/story/25/11/20/1445202/verizon-cutting-more-than-13000-jobs-as-it-restructures?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-20, 15:06:03](https://lobste.rs/s/empan7/signal_polls_yes_no_maybe_yes) - [Signal Polls: Yes, no, maybe (yes!)](https://signal.org/blog/polls/)
* [2025-11-20, 15:05:53](https://lobste.rs/s/cr4ihl/what_s_cooking_on_sourcehut_q4_2025) - [What&apos;s cooking on SourceHut? Q4 2025](https://sourcehut.org/blog/2025-11-20-whats-cooking-q4-2025/)
* [2025-11-20, 15:04:23](https://news.ycombinator.com/item?id=45993296) - [Nano Banana Pro](https://blog.google/technology/ai/nano-banana-pro/)
* [2025-11-20, 14:45:20](https://news.ycombinator.com/item?id=45993073) - [210 IQ Is Not Enough](https://taylor.town/iq-not-enough)
* [2025-11-20, 14:40:00](https://slashdot.org/story/25/11/20/1441200/microsoft-exec-asks-why-arent-more-people-impressed-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Exec Asks: Why Aren&apos;t More People Impressed With AI?](https://slashdot.org/story/25/11/20/1441200/microsoft-exec-asks-why-arent-more-people-impressed-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-20, 14:37:00](https://soylentnews.org/article.pl?sid=25/11/18/1212257&amp;from=rss) - [Many Hard Leetcode Problems Are Easy Constraint Problems](https://soylentnews.org/article.pl?sid=25/11/18/1212257&amp;from=rss)
* [2025-11-20, 14:20:49](https://news.ycombinator.com/item?id=45992829) - [Firefox 147 Will Support the XDG Base Directory Specification](https://www.phoronix.com/news/Firefox-147-XDG-Base-Directory)
* [2025-11-20, 14:01:00](https://slashdot.org/story/25/11/20/0733244/who-is-openais-auditor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Who is OpenAI&apos;s Auditor?](https://slashdot.org/story/25/11/20/0733244/who-is-openais-auditor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-20, 13:56:04](https://lobste.rs/s/kmdqnf/freer_monads_more_extensible_effects) - [Freer Monads, More Extensible Effects](https://okmij.org/ftp/Haskell/extensible/more.pdf)
* [2025-11-20, 13:37:13](https://news.ycombinator.com/item?id=45992403) - [Judgement on Dr Matthew Garrett (@mjg59) vs. Dr Roy Schestowitz (Techrights.org)](https://caselaw.nationalarchives.gov.uk/ewhc/kb/2025/3063)
* [2025-11-20, 13:00:00](https://yro.slashdot.org/story/25/11/20/0034235/white-house-prepares-executive-order-to-block-state-ai-laws?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [White House Prepares Executive Order To Block State AI Laws](https://yro.slashdot.org/story/25/11/20/0034235/white-house-prepares-executive-order-to-block-state-ai-laws?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-20, 12:21:15](https://news.ycombinator.com/item?id=45991853) - [Red Alert 2 in web browser](https://chronodivide.com/)
* [2025-11-20, 12:08:56](https://news.ycombinator.com/item?id=45991787) - [40 years ago, Calvin and Hobbes&apos; burst onto the page](https://www.npr.org/2025/11/18/nx-s1-5564064/calvin-and-hobbes-bill-watterson-40-years-comic-strip-lee-salem)
* [2025-11-20, 12:01:26](https://news.ycombinator.com/item?id=45991738) - [Adversarial Poetry as a Universal Single-Turn Jailbreak Mechanism in LLMs](https://arxiv.org/abs/2511.15304)
* [2025-11-20, 11:20:02](https://lobste.rs/s/j5qgj6/memory_is_slow_disk_is_fast) - [Memory is slow, Disk is fast](https://www.bitflux.ai/blog/memory-is-slow-part2)
* [2025-11-20, 10:34:45](https://lobste.rs/s/towtni/agentic_pelican_on_bicycle_gemini_3_pro) - [Agentic Pelican on a Bicycle: Gemini 3 Pro](https://www.robert-glaser.de/agentic-pelican-on-a-bicycle-gemini-3-pro/)
* [2025-11-20, 10:00:00](https://yro.slashdot.org/story/25/11/20/0029245/proctorio-settles-curious-lawsuit-with-librarian-who-shared-public-youtube-videos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Proctorio Settles Curious Lawsuit With Librarian Who Shared Public YouTube Videos](https://yro.slashdot.org/story/25/11/20/0029245/proctorio-settles-curious-lawsuit-with-librarian-who-shared-public-youtube-videos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-20, 09:52:11](https://news.ycombinator.com/item?id=45990934) - [Interactive World History Atlas Since 3000 BC](http://geacron.com/home-en/)
* [2025-11-20, 09:52:00](https://soylentnews.org/article.pl?sid=25/11/18/1210237&amp;from=rss) - [Floating Solar Panels Show Promise, but Environmental Impacts Vary by Location](https://soylentnews.org/article.pl?sid=25/11/18/1210237&amp;from=rss)
* [2025-11-20, 09:04:30](https://news.ycombinator.com/item?id=45990575) - [DOS Days – Laptop Displays](https://www.dosdays.co.uk/topics/laptop_displays.php)
* [2025-11-20, 08:55:43](https://lobste.rs/s/q287dr/numbers_vs_features_protocol_versioning) - [Numbers vs features in protocol versioning (2024)](https://meejah.ca/blog/protocol-versioning)
* [2025-11-20, 07:00:00](https://science.slashdot.org/story/25/11/20/0021228/quantum-teleportation-between-photons-from-two-distant-light-sources-achieved?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Quantum Teleportation Between Photons From Two Distant Light Sources Achieved](https://science.slashdot.org/story/25/11/20/0021228/quantum-teleportation-between-photons-from-two-distant-light-sources-achieved?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-20, 06:37:50](https://lobste.rs/s/esyfcl/battery_included_hacker_s_file_manager) - [A battery included hacker&apos;s file manager with VIM inspired keybind in a single binary](https://github.com/houqp/kiorg)
* [2025-11-20, 06:34:46](https://lobste.rs/s/it0mbb/procedurally_generating_infinite) - [Procedurally Generating Infinite Marble Runs](https://www.youtube.com/watch?v=ULpNiZU2tpg)
* [2025-11-20, 05:41:06](https://news.ycombinator.com/item?id=45989329) - [Basalt Woven Textile](https://materialdistrict.com/material/basalt-woven-textile/)
* [2025-11-20, 05:07:53](https://news.ycombinator.com/item?id=45989186) - [Details about the shebang/hash-bang mechanism on various Unix flavours (2001)](https://www.in-ulm.de/%7Emascheck/various/shebang/)
* [2025-11-20, 05:04:00](https://soylentnews.org/article.pl?sid=25/11/18/125234&amp;from=rss) - [The Intel 4004 Was the First Microprocessor, Right? ](https://soylentnews.org/article.pl?sid=25/11/18/125234&amp;from=rss)
* [2025-11-20, 04:01:47](https://lobste.rs/s/ua1kvs/rfc_hub) - [RFC Hub](https://rfchub.app/)
* [2025-11-20, 03:30:00](https://slashdot.org/story/25/11/19/2313246/in-the-ai-race-chinese-talent-still-drives-american-research?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [In the AI Race, Chinese Talent Still Drives American Research](https://slashdot.org/story/25/11/19/2313246/in-the-ai-race-chinese-talent-still-drives-american-research?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-20, 02:44:35](https://lobste.rs/s/roel5a/50th_anniversary_bitblt) - [50th anniversary of BITBLT](https://mastodon.sdf.org/@fvzappa/115574872559813280)
* [2025-11-20, 01:25:00](https://tech.slashdot.org/story/25/11/19/2256247/chinas-diesel-trucks-are-shifting-to-electric?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s Diesel Trucks Are Shifting To Electric](https://tech.slashdot.org/story/25/11/19/2256247/chinas-diesel-trucks-are-shifting-to-electric?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-20, 01:20:59](https://lobste.rs/s/jzflsc/precise_geolocation_via_wi_fi) - [Precise geolocation via Wi-Fi Positioning System](https://www.amoses.dev/blog/wifi-location/)
* [2025-11-20, 01:09:53](https://lobste.rs/s/dtzplf/lions_operating_system) - [The Lions Operating System](https://lionsos.org/)
* [2025-11-20, 00:45:00](https://yro.slashdot.org/story/25/11/19/2247224/tokyo-court-finds-cloudflare-liable-for-manga-piracy-in-long-running-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tokyo Court Finds Cloudflare Liable For Manga Piracy in Long-Running Lawsuit](https://yro.slashdot.org/story/25/11/19/2247224/tokyo-court-finds-cloudflare-liable-for-manga-piracy-in-long-running-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-20, 00:22:03](https://news.ycombinator.com/item?id=45987179) - [Verifying your Matrix devices is becoming mandatory](https://element.io/blog/verifying-your-devices-is-becoming-mandatory-2/)
* [2025-11-20, 00:18:00](https://soylentnews.org/article.pl?sid=25/11/18/120241&amp;from=rss) - [Full Metal Modine](https://soylentnews.org/article.pl?sid=25/11/18/120241&amp;from=rss)
* [2025-11-20, 00:02:00](https://slashdot.org/story/25/11/19/2238242/adobe-bolsters-ai-marketing-tools-with-19-billion-semrush-buy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Adobe Bolsters AI Marketing Tools With $1.9 Billion Semrush Buy](https://slashdot.org/story/25/11/19/2238242/adobe-bolsters-ai-marketing-tools-with-19-billion-semrush-buy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 23:23:00](https://hardware.slashdot.org/story/25/11/19/2228257/apple-n1-wi-fi-chip-improves-on-older-broadcom-chips-in-every-way?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple N1 Wi-Fi Chip Improves On Older Broadcom Chips In Every Way](https://hardware.slashdot.org/story/25/11/19/2228257/apple-n1-wi-fi-chip-improves-on-older-broadcom-chips-in-every-way?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 23:21:45](https://lobste.rs/s/uoekej/we_re_now_moving_from_openbsd_freebsd_for) - [We&apos;re (now) moving from OpenBSD to FreeBSD for firewalls](https://utcc.utoronto.ca/~cks/space/blog/sysadmin/OpenBSDToFreeBSDMove)
* [2025-11-19, 22:45:00](https://entertainment.slashdot.org/story/25/11/19/2216207/saudi-makes-big-bet-on-ai-films-as-hollywood-moves-from-studios-to-datacenters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Saudi Makes Big Bet On AI Films As Hollywood Moves From Studios To Datacenters](https://entertainment.slashdot.org/story/25/11/19/2216207/saudi-makes-big-bet-on-ai-films-as-hollywood-moves-from-studios-to-datacenters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 22:24:00](https://slashdot.org/story/25/11/19/2223211/nvidia-beats-earnings-expectations-even-as-bubble-concerns-mount?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia Beats Earnings Expectations, Even As Bubble Concerns Mount](https://slashdot.org/story/25/11/19/2223211/nvidia-beats-earnings-expectations-even-as-bubble-concerns-mount?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 22:16:41](https://lobste.rs/s/amboaj/disallow_code_usage_with_custom_clippy) - [Disallow code usage with a custom `clippy.toml`](https://www.schneems.com/2025/11/19/find-accidental-code-usage-with-a-custom-clippytoml/)
* [2025-11-19, 22:07:00](https://slashdot.org/story/25/11/19/225253/dutch-hand-back-control-of-chinese-owned-chipmaker-nexperia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dutch Hand Back Control of Chinese-Owned Chipmaker Nexperia](https://slashdot.org/story/25/11/19/225253/dutch-hand-back-control-of-chinese-owned-chipmaker-nexperia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 21:58:47](https://news.ycombinator.com/item?id=45985867) - [Precise geolocation via Wi-Fi Positioning System](https://www.amoses.dev/blog/wifi-location/)
* [2025-11-19, 21:22:00](https://tech.slashdot.org/story/25/11/19/186230/can-chinese-made-buses-be-hacked-norway-drove-one-down-a-mine-to-find-out?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Can Chinese-Made Buses Be Hacked? Norway Drove One Down a Mine To Find Out](https://tech.slashdot.org/story/25/11/19/186230/can-chinese-made-buses-be-hacked-norway-drove-one-down-a-mine-to-find-out?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 21:07:05](https://news.ycombinator.com/item?id=45985196) - [How Slide Rules Work](https://amenzwa.github.io/stem/ComputingHistory/HowSlideRulesWork/)
* [2025-11-19, 20:55:30](https://news.ycombinator.com/item?id=45985036) - [Researchers discover security vulnerability in WhatsApp](https://www.univie.ac.at/en/news/detail/forscherinnen-entdecken-grosse-sicherheitsluecke-in-whatsapp)
* [2025-11-19, 20:26:43](https://news.ycombinator.com/item?id=45984659) - [Loose wire leads to blackout, contact with Francis Scott Key bridge](https://www.ntsb.gov:443/news/press-releases/Pages/NR20251118.aspx)
* [2025-11-19, 20:09:16](https://lobste.rs/s/qauaqt/llms_are_bullshitters_doesn_t_mean_they_re) - [LLMs are bullshitters. But that doesn&apos;t mean they&apos;re not useful](https://blog.kagi.com/llms)
* [2025-11-19, 19:44:07](https://news.ycombinator.com/item?id=45984133) - [The lost cause of the Lisp machines](https://www.tfeb.org/fragments/2025/11/18/the-lost-cause-of-the-lisp-machines/)
* [2025-11-19, 19:36:00](https://soylentnews.org/article.pl?sid=25/11/18/113239&amp;from=rss) - [Big Tech Wants Direct Access to Our Brains](https://soylentnews.org/article.pl?sid=25/11/18/113239&amp;from=rss)
* [2025-11-19, 18:42:54](https://lobste.rs/s/0m6yln/what_killed_perl) - [What Killed Perl?](https://entropicthoughts.com/what-killed-perl)
* [2025-11-19, 18:21:40](https://lobste.rs/s/idtphq/twenty_years_django_releases) - [Twenty years of Django releases](https://www.djangoproject.com/weblog/2025/nov/19/twenty-years-of-django-releases/)
* [2025-11-19, 18:01:59](https://news.ycombinator.com/item?id=45982649) - [Building more with GPT-5.1-Codex-Max](https://openai.com/index/gpt-5-1-codex-max/)
* [2025-11-19, 17:14:51](https://news.ycombinator.com/item?id=45982073) - [Meta Segment Anything Model 3](https://ai.meta.com/sam3/)
* [2025-11-19, 16:30:58](https://lobste.rs/s/gdwxd5/why_bsds) - [Why BSDs?](https://blog.thechases.com/posts/why-bsds/)
* [2025-11-19, 15:28:04](https://news.ycombinator.com/item?id=45980760) - [Launch HN: Mosaic (YC W25) – Agentic Video Editing](https://mosaic.so)
* [2025-11-19, 14:49:00](https://soylentnews.org/article.pl?sid=25/11/18/0121255&amp;from=rss) - [FPGA Based IBM-PC-XT](https://soylentnews.org/article.pl?sid=25/11/18/0121255&amp;from=rss)
* [2025-11-19, 14:41:30](https://news.ycombinator.com/item?id=45980117) - [Europe is scaling back GDPR and relaxing AI laws](https://www.theverge.com/news/823750/european-union-ai-act-gdpr-changes)
* [2025-11-19, 14:03:35](https://lobste.rs/s/jlf6y8/what_makes_intro_crafting_interpreters) - [What Makes the Intro to Crafting Interpreters so Good?](https://refactoringenglish.com/blog/crafting-interpreters-intro/)
* [2025-11-19, 12:17:50](https://lobste.rs/s/rifpe8/lost_cause_lisp_machines) - [The lost cause of the Lisp machines](https://www.tfeb.org/fragments/2025/11/18/the-lost-cause-of-the-lisp-machines/)
* [2025-11-19, 10:01:00](https://soylentnews.org/article.pl?sid=25/11/18/0113223&amp;from=rss) - [Canonical Extends Ubuntu Support to 15 Years](https://soylentnews.org/article.pl?sid=25/11/18/0113223&amp;from=rss)
* [2025-11-19, 09:10:07](https://lobste.rs/s/gj8uup/static_web_hosting_on_intel_n150_freebsd) - [Static Web Hosting on the Intel N150: FreeBSD, SmartOS, NetBSD, OpenBSD and Linux Compared](https://it-notes.dragas.net/2025/11/19/static-web-hosting-intel-n150-freebsd-smartos-netbsd-openbsd-linux/)
* [2025-11-19, 05:16:00](https://soylentnews.org/article.pl?sid=25/11/18/018202&amp;from=rss) - [Mozilla Unveils Plans for New &apos;AI Window&apos; Browsing Mode in Firefox, Opens Signups](https://soylentnews.org/article.pl?sid=25/11/18/018202&amp;from=rss)
* [2025-11-19, 02:54:20](https://lobste.rs/s/nac5wa/cloudflare_outage_on_november_18_2025) - [Cloudflare outage on November 18, 2025](https://blog.cloudflare.com/18-november-2025-outage/)
* [2025-11-19, 00:31:00](https://soylentnews.org/article.pl?sid=25/11/18/014241&amp;from=rss) - [Raccoons Are Showing Early Signs of Domestication](https://soylentnews.org/article.pl?sid=25/11/18/014241&amp;from=rss)
* [2025-11-18, 22:34:33](https://lobste.rs/s/pmsbte/self_hosting_dns_for_no_fun_little_profit) - [Self-hosting DNS for no fun, but a little profit](https://linderud.dev/blog/self-hosting-dns-for-no-fun-but-a-little-profit/)
* [2025-11-18, 19:47:00](https://soylentnews.org/article.pl?sid=25/11/17/119215&amp;from=rss) - [DHS Offers “Disturbing New Excuses” to Seize Kids’ Biometric Data, Expert Says](https://soylentnews.org/article.pl?sid=25/11/17/119215&amp;from=rss)
* [2025-11-18, 19:32:27](https://news.ycombinator.com/item?id=45970885) - [A surprise with how &apos;#!&apos; handles its program argument in practice](https://utcc.utoronto.ca/~cks/space/blog/unix/ShebangRelativePathSurprise)
* [2025-11-18, 15:04:00](https://soylentnews.org/article.pl?sid=25/11/17/0246249&amp;from=rss) - [The Data Center Resistance Has Arrived](https://soylentnews.org/article.pl?sid=25/11/17/0246249&amp;from=rss)
* [2025-11-18, 10:23:00](https://soylentnews.org/article.pl?sid=25/11/17/0243214&amp;from=rss) - [Google Settlement With Epic Caps Play Store Fees, Boosts Other Android App Stores](https://soylentnews.org/article.pl?sid=25/11/17/0243214&amp;from=rss)
* [2025-11-18, 05:37:00](https://soylentnews.org/article.pl?sid=25/11/17/0240210&amp;from=rss) - [Nvidia’s Jensen Huang: China will Surpass U.S. in AI Race Through ENERGY](https://soylentnews.org/article.pl?sid=25/11/17/0240210&amp;from=rss)
* [2025-11-18, 00:53:00](https://soylentnews.org/article.pl?sid=25/11/16/1340211&amp;from=rss) - [Starshield Satellite Constellation Emitting Unusual Radio Signals](https://soylentnews.org/article.pl?sid=25/11/16/1340211&amp;from=rss)
* [2025-11-17, 20:14:00](https://soylentnews.org/article.pl?sid=25/11/16/1329214&amp;from=rss) - [Microsoft: the Company Doesn&apos;t Have Enough Electricity to Install All the AI GPUs in its Inventory](https://soylentnews.org/article.pl?sid=25/11/16/1329214&amp;from=rss)
* [2025-11-17, 18:32:16](https://news.ycombinator.com/item?id=45956438) - [Towards Interplanetary QUIC Traffic](https://ochagavia.nl/blog/towards-interplanetary-quic-traffic/)
* [2025-11-17, 15:33:00](https://soylentnews.org/article.pl?sid=25/11/16/1317229&amp;from=rss) - [Lawmakers Want to Ban VPNs—And They Have No Idea What They&apos;re Doing](https://soylentnews.org/article.pl?sid=25/11/16/1317229&amp;from=rss)
* [2025-11-17, 10:44:00](https://soylentnews.org/article.pl?sid=25/11/16/1316249&amp;from=rss) - [NVIDIA 580.105.08 Linux Graphics Driver Released With a New Environment Variable](https://soylentnews.org/article.pl?sid=25/11/16/1316249&amp;from=rss)
* [2025-11-17, 06:28:16](https://news.ycombinator.com/item?id=45951275) - [Android/Linux Dual Boot](https://wiki.postmarketos.org/wiki/Dual_Booting/WiP)
* [2025-11-17, 06:01:00](https://soylentnews.org/article.pl?sid=25/11/16/1311207&amp;from=rss) - [A Spine-Tingling Discovery: This Dinosaur Had Spiked Body Armor](https://soylentnews.org/article.pl?sid=25/11/16/1311207&amp;from=rss)
* [2025-11-17, 01:14:00](https://soylentnews.org/article.pl?sid=25/11/15/0741250&amp;from=rss) - [Devuan Version 6.0 \&quot;Excalibur\&quot; is Available Now](https://soylentnews.org/article.pl?sid=25/11/15/0741250&amp;from=rss)
* [2025-11-16, 20:28:00](https://soylentnews.org/article.pl?sid=25/11/15/0726208&amp;from=rss) - [Youtube Ads - Legal Advice Required](https://soylentnews.org/article.pl?sid=25/11/15/0726208&amp;from=rss)
* [2025-11-16, 18:56:56](https://news.ycombinator.com/item?id=45947437) - [CUDA Ontology](https://jamesakl.com/posts/cuda-ontology/)
* [2025-11-16, 15:45:00](https://soylentnews.org/article.pl?sid=25/11/15/0419235&amp;from=rss) - [This Rare ‘Mad Honey’ is Only Found in Two Places in the World](https://soylentnews.org/article.pl?sid=25/11/15/0419235&amp;from=rss)
* [2025-11-16, 10:58:00](https://soylentnews.org/article.pl?sid=25/11/15/045217&amp;from=rss) - [AI Resistance: Who Says No to AI and Why?](https://soylentnews.org/article.pl?sid=25/11/15/045217&amp;from=rss)
* [2025-11-16, 06:17:00](https://soylentnews.org/article.pl?sid=25/11/15/0349259&amp;from=rss) - [Australians to Get Three Hours of Free Electricity Every Day Under Solar Scheme](https://soylentnews.org/article.pl?sid=25/11/15/0349259&amp;from=rss)
* [2025-11-16, 01:36:00](https://soylentnews.org/article.pl?sid=25/11/15/0341210&amp;from=rss) - [FreeBSD: Reproducible Rootless Builds and Moving From Windows to This Linux Chaos Alternative](https://soylentnews.org/article.pl?sid=25/11/15/0341210&amp;from=rss)
