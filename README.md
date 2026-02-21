# [News Summary](https://kherrick.github.io/news-summary/)

## Emerging AI Technologies and Issues

* [Palo Alto CEO Says AI Isn't Great for Business, Yet](https://soylentnews.org/article.pl?sid=26/02/21/0121213&amp;from=rss) - Insights into the practical limitations of AI in business contexts.

* [Cord: Coordinating Trees of AI Agents](https://www.june.kim/cord) - A new approach for managing multi-agent AI systems.

* [AI uBlock Blacklist](https://github.com/alvi-se/ai-ublock-blacklist) - A cutting-edge AI-powered blacklist for uBlock.

* [OpenAI's First ChatGPT Gadget Could Be a Smart Speaker With a Camera](https://hardware.slashdot.org/story/26/02/21/0049226/openais-first-chatgpt-gadget-could-be-a-smart-speaker-with-a-camera?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - OpenAI teases its upcoming smart device with integrated ChatGPT functionality.

## Developments in Technology and Security

* [Hackers Expose Age-Verification Software Powering Surveillance Web](https://soylentnews.org/article.pl?sid=26/02/21/0126215&amp;from=rss) - Controversial technology behind age-verification raises privacy concerns.

* [Coccinelle: The Linux kernel's source-to-source transformation tool](https://github.com/coccinelle/coccinelle) - Powerful transformation tool for Linux kernel code.

* [ajail: a basic jail for programs you don't completely trust](https://github.com/jtolio/ajail) - A minimal sandboxing tool for running untrusted software.

## Space Exploration

* [NASA Eyes March 6 To Launch 4 Astronauts To the Moon On Artemis II Mission](https://science.slashdot.org/story/26/02/20/238201/nasa-eyes-march-6-to-launch-4-astronauts-to-the-moon-on-artemis-ii-mission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Upcoming lunar mission brings humanity closer to returning to the Moon.

## Environmental Innovations

* [US Particle Accelerators Turn Nuclear Waste Into Electricity, Cut Radioactive Life By 99.7%](https://hardware.slashdot.org/story/26/02/21/0043212/us-particle-accelerators-turn-nuclear-waste-into-electricity-cut-radioactive-life-by-997?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Innovative use of particle accelerators reduces nuclear waste hazards.

* [Data Centres Consider Backing Uranium Projects, NexGen CEO Says](https://soylentnews.org/article.pl?sid=26/02/19/1617210&amp;from=rss) - Data centers explore sustainable energy solutions with uranium.

## Privacy and Online Policies

* [Wikipedia blacklists Archive.today, starts removing 695,000 archive links](https://arstechnica.com/tech-policy/2026/02/wikipedia-bans-archive-today-after-site-executed-ddos-and-altered-web-captures/) - Controversial decision by Wikipedia sparks debate.

* [I Verified My LinkedIn Identity. Here's What I Handed Over](https://thelocalstack.eu/posts/linkedin-identity-verification-privacy/) - Personal experience revealing LinkedIn's identity verification practices.

## Miscellaneous Innovations and Trends

* [The Fastest Way to Board an Airplane](https://navendu.me/posts/airlines-hate-this-trick/) - A surprising experiment on optimizing airline boarding.

* [Whale Fall](https://nesbitt.io/2026/02/21/whale-fall.html) - Atmospheric storytelling focused on the ocean's natural wonders.

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

* [2026-02-21, 15:37:09](https://lobste.rs/s/7jojhi/cereggii_thread_synchronization) - [cereggii: Thread synchronization utilities for Python](https://github.com/dpdani/cereggii)
* [2026-02-21, 15:34:00](https://developers.slashdot.org/story/26/02/21/064205/how-pythons-security-response-team-keeps-python-users-safe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Python&apos;s Security Response Team Keeps Python Users Safe](https://developers.slashdot.org/story/26/02/21/064205/how-pythons-security-response-team-keeps-python-users-safe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-21, 15:07:03](https://lobste.rs/s/wplgka/whale_fall) - [Whale Fall](https://nesbitt.io/2026/02/21/whale-fall.html)
* [2026-02-21, 14:34:45](https://news.ycombinator.com/item?id=47101200) - [macOS&apos;s Little-Known Command-Line Sandboxing Tool](https://igorstechnoclub.com/sandbox-exec/)
* [2026-02-21, 14:32:16](https://news.ycombinator.com/item?id=47101171) - [CXMT has been offering DDR4 chips at about half the prevailing market rate](https://www.koreaherald.com/article/10679206)
* [2026-02-21, 13:28:39](https://news.ycombinator.com/item?id=47100641) - [DJB&apos;s Cryptographic Odyssey: From Code Hero to Standards Gadfly](https://cryptography.watch/articles/djb-cryptographic-odyssey/)
* [2026-02-21, 13:00:00](https://science.slashdot.org/story/26/02/21/0056213/hazardous-substances-found-in-all-headphones-tested-by-toxfree-project?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hazardous Substances Found In All Headphones Tested By ToxFREE Project](https://science.slashdot.org/story/26/02/21/0056213/hazardous-substances-found-in-all-headphones-tested-by-toxfree-project?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-21, 12:55:54](https://lobste.rs/s/l0gv3h/fastest_way_board_airplane) - [The Fastest Way to Board an Airplane](https://navendu.me/posts/airlines-hate-this-trick/)
* [2026-02-21, 12:55:00](https://soylentnews.org/article.pl?sid=26/02/21/0126215&amp;from=rss) - [Hackers Expose Age-Verification Software Powering Surveillance Web](https://soylentnews.org/article.pl?sid=26/02/21/0126215&amp;from=rss)
* [2026-02-21, 12:27:23](https://lobste.rs/s/lbcdt3/c_iceberg) - [The C Iceberg](https://www.youtube.com/watch?v=63zGtiv89bA)
* [2026-02-21, 12:02:14](https://news.ycombinator.com/item?id=47099982) - [Padlet (YC W13) Is Hiring in San Francisco and Singapore](https://padlet.jobs)
* [2026-02-21, 11:18:57](https://lobste.rs/s/haqwn0/wikipedia_blacklists_archive_today) - [Wikipedia blacklists Archive.today, starts removing 695,000 archive links](https://arstechnica.com/tech-policy/2026/02/wikipedia-bans-archive-today-after-site-executed-ddos-and-altered-web-captures/)
* [2026-02-21, 10:00:00](https://hardware.slashdot.org/story/26/02/21/0049226/openais-first-chatgpt-gadget-could-be-a-smart-speaker-with-a-camera?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI&apos;s First ChatGPT Gadget Could Be a Smart Speaker With a Camera](https://hardware.slashdot.org/story/26/02/21/0049226/openais-first-chatgpt-gadget-could-be-a-smart-speaker-with-a-camera?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-21, 09:53:15](https://news.ycombinator.com/item?id=47099160) - [Andrej Karpathy talks about \&quot;Claws\&quot;](https://simonwillison.net/2026/Feb/21/claws/)
* [2026-02-21, 08:26:36](https://news.ycombinator.com/item?id=47098669) - [Coccinelle: The Linux kernel&apos;s source-to-source transformation tool](https://github.com/coccinelle/coccinelle)
* [2026-02-21, 08:12:00](https://soylentnews.org/article.pl?sid=26/02/21/0123209&amp;from=rss) - [Visualizing the Internet in 2026](https://soylentnews.org/article.pl?sid=26/02/21/0123209&amp;from=rss)
* [2026-02-21, 08:10:49](https://news.ycombinator.com/item?id=47098582) - [AI uBlock Blacklist](https://github.com/alvi-se/ai-ublock-blacklist)
* [2026-02-21, 07:18:09](https://news.ycombinator.com/item?id=47098324) - [When etcd crashes, check your disks first](https://nubificus.co.uk/blog/etcd/)
* [2026-02-21, 07:06:18](https://news.ycombinator.com/item?id=47098245) - [I Verified My LinkedIn Identity. Here&apos;s What I Handed Over](https://thelocalstack.eu/posts/linkedin-identity-verification-privacy/)
* [2026-02-21, 07:00:00](https://hardware.slashdot.org/story/26/02/21/0043212/us-particle-accelerators-turn-nuclear-waste-into-electricity-cut-radioactive-life-by-997?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Particle Accelerators Turn Nuclear Waste Into Electricity, Cut Radioactive Life By 99.7%](https://hardware.slashdot.org/story/26/02/21/0043212/us-particle-accelerators-turn-nuclear-waste-into-electricity-cut-radioactive-life-by-997?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-21, 06:26:12](https://lobste.rs/s/rcewff/ajail_basic_jail_for_programs_you_don_t) - [ajail: a basic jail for programs you don&apos;t completely trust](https://github.com/jtolio/ajail)
* [2026-02-21, 03:43:01](https://lobste.rs/s/bfzbim/process_isolation_on_netbsd_with_chroot) - [Process Isolation on NetBSD with chroot](https://overeducated-redneck.net/blurgh/netbsd-chroot-isolation.html)
* [2026-02-21, 03:30:00](https://science.slashdot.org/story/26/02/20/238201/nasa-eyes-march-6-to-launch-4-astronauts-to-the-moon-on-artemis-ii-mission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Eyes March 6 To Launch 4 Astronauts To the Moon On Artemis II Mission](https://science.slashdot.org/story/26/02/20/238201/nasa-eyes-march-6-to-launch-4-astronauts-to-the-moon-on-artemis-ii-mission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-21, 03:20:00](https://soylentnews.org/article.pl?sid=26/02/21/0121213&amp;from=rss) - [Palo Alto CEO Says AI Isn&apos;t Great for Business, Yet](https://soylentnews.org/article.pl?sid=26/02/21/0121213&amp;from=rss)
* [2026-02-21, 02:02:00](https://tech.slashdot.org/story/26/02/20/232201/fury-over-discords-age-checks-explodes-after-shady-persona-test-in-uk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fury Over Discord&apos;s Age Checks Explodes After Shady Persona Test In UK](https://tech.slashdot.org/story/26/02/20/232201/fury-over-discords-age-checks-explodes-after-shady-persona-test-in-uk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-21, 01:33:40](https://news.ycombinator.com/item?id=47096520) - [What Is OAuth?](https://leaflet.pub/p/did:plc:3vdrgzr2zybocs45yfhcr6ur/3mfd2oxx5v22b)
* [2026-02-21, 01:31:01](https://lobste.rs/s/ax5slr/rise_fall_scala_love_letter_language) - [The Rise and Fall of Scala: A Love Letter to the Language That Broke My Heart](https://medium.com/@naveensky/the-language-that-made-me-feel-like-a-genius-until-it-didnt-my-breakup-with-scala-075a2ccfb24e)
* [2026-02-21, 01:27:35](https://news.ycombinator.com/item?id=47096466) - [Cord: Coordinating Trees of AI Agents](https://www.june.kim/cord)
* [2026-02-21, 01:25:00](https://tech.slashdot.org/story/26/02/20/2243230/pinterest-is-drowning-in-a-sea-of-ai-slop-and-auto-moderation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pinterest Is Drowning in a Sea of AI Slop and Auto-Moderation](https://tech.slashdot.org/story/26/02/20/2243230/pinterest-is-drowning-in-a-sea-of-ai-slop-and-auto-moderation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-21, 00:45:00](https://tech.slashdot.org/story/26/02/20/2235224/metas-metaverse-leaves-virtual-reality?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta&apos;s Metaverse Leaves Virtual Reality](https://tech.slashdot.org/story/26/02/20/2235224/metas-metaverse-leaves-virtual-reality?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-21, 00:35:31](https://lobste.rs/s/slfm4t/joinirc_at_link_your_irc_server_on_any) - [joinirc.at: Link to your IRC server on any client to onboard new users](https://joinirc.at)
* [2026-02-21, 00:02:00](https://it.slashdot.org/story/26/02/20/2143205/cyber-stocks-slide-as-anthropic-unveils-claude-code-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cyber Stocks Slide As Anthropic Unveils &apos;Claude Code Security&apos;](https://it.slashdot.org/story/26/02/20/2143205/cyber-stocks-slide-as-anthropic-unveils-claude-code-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-20, 23:20:00](https://news.slashdot.org/story/26/02/20/2134238/goldman-sachs-launches-ai-free-index?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Goldman Sachs Launches AI-Free Index](https://news.slashdot.org/story/26/02/20/2134238/goldman-sachs-launches-ai-free-index?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-20, 23:19:12](https://news.ycombinator.com/item?id=47095429) - [CERN rebuilt the original browser from 1989 (2019)](https://worldwideweb.cern.ch)
* [2026-02-20, 22:40:00](https://news.slashdot.org/story/26/02/20/2112228/wikipedia-blacklists-archivetoday-starts-removing-695000-archive-links?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wikipedia Blacklists Archive.today, Starts Removing 695,000 Archive Links](https://news.slashdot.org/story/26/02/20/2112228/wikipedia-blacklists-archivetoday-starts-removing-695000-archive-links?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-20, 22:40:00](https://soylentnews.org/article.pl?sid=26/02/19/1712216&amp;from=rss) - [Bacteria Frozen Inside 5,000-Year-Old Ice Cave is Crazy Resistant to Antibiotics ](https://soylentnews.org/article.pl?sid=26/02/19/1712216&amp;from=rss)
* [2026-02-20, 22:00:00](https://games.slashdot.org/story/26/02/20/2125252/phil-spencer-retiring-after-38-years-at-microsoft?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Phil Spencer Retiring After 38 Years At Microsoft](https://games.slashdot.org/story/26/02/20/2125252/phil-spencer-retiring-after-38-years-at-microsoft?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-20, 21:25:41](https://news.ycombinator.com/item?id=47094192) - [Turn Dependabot off](https://words.filippo.io/dependabot/)
* [2026-02-20, 21:22:27](https://news.ycombinator.com/item?id=47094149) - [Show HN: Mines.fyi – all the mines in the US in a leaflet visualization](https://mines.fyi/)
* [2026-02-20, 21:20:00](https://it.slashdot.org/story/26/02/20/1918241/microsoft-deletes-blog-telling-users-to-train-ai-on-pirated-harry-potter-books?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Deletes Blog Telling Users To Train AI on Pirated Harry Potter Books](https://it.slashdot.org/story/26/02/20/1918241/microsoft-deletes-blog-telling-users-to-train-ai-on-pirated-harry-potter-books?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-20, 20:47:48](https://news.ycombinator.com/item?id=47093724) - [OpenScan](https://openscan.eu/pages/scan-gallery)
* [2026-02-20, 20:44:00](https://slashdot.org/story/26/02/20/1849221/openai-has-no-moat-no-tech-edge-no-lock-in-and-no-real-plan-analyst-warns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Has No Moat, No Tech Edge, No Lock-in and No Real Plan, Analyst Warns](https://slashdot.org/story/26/02/20/1849221/openai-has-no-moat-no-tech-edge-no-lock-in-and-no-real-plan-analyst-warns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-20, 20:40:14](https://lobste.rs/s/vpxzhe/i_found_vulnerability_they_found_lawyer) - [I found a Vulnerability. They found a Lawyer](https://dixken.de/blog/i-found-a-vulnerability-they-found-a-lawyer)
* [2026-02-20, 20:31:39](https://lobste.rs/s/gscaw3/turn_dependabot_off) - [Turn Dependabot Off](https://words.filippo.io/dependabot/)
* [2026-02-20, 20:05:00](https://tech.slashdot.org/story/26/02/20/1815253/several-meta-employees-have-started-calling-themselves-ai-builders?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Several Meta Employees Have Started Calling Themselves &apos;AI Builders&apos;](https://tech.slashdot.org/story/26/02/20/1815253/several-meta-employees-have-started-calling-themselves-ai-builders?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-20, 19:44:29](https://lobste.rs/s/t760l8/beginner_s_guide_split_keyboards) - [A Beginner’s Guide to Split Keyboards](https://justinmklam.com/posts/2026/02/beginners-guide-split-keyboards/)
* [2026-02-20, 19:34:26](https://lobste.rs/s/zkby7e/lil_fun_langs) - [Lil&apos; Fun Langs](https://taylor.town/scrapscript-000)
* [2026-02-20, 19:19:58](https://news.ycombinator.com/item?id=47092578) - [I found a Vulnerability. They found a Lawyer](https://dixken.de/blog/i-found-a-vulnerability-they-found-a-lawyer)
* [2026-02-20, 19:18:35](https://lobste.rs/s/w1bsle/lobsters_interview_with_steveklabnik) - [Lobsters Interview with steveklabnik](https://alexalejandre.com/programming/steve-klabnik-interview/)
* [2026-02-20, 18:55:15](https://news.ycombinator.com/item?id=47092203) - [Every company building your AI assistant is now an ad company](https://juno-labs.com/blogs/every-company-building-your-ai-assistant-is-an-ad-company)
* [2026-02-20, 18:42:21](https://news.ycombinator.com/item?id=47092006) - [Wikipedia deprecates Archive.today, starts removing archive links](https://arstechnica.com/tech-policy/2026/02/wikipedia-bans-archive-today-after-site-executed-ddos-and-altered-web-captures/)
* [2026-02-20, 18:25:07](https://news.ycombinator.com/item?id=47091748) - [Facebook is cooked](https://pilk.website/3/facebook-is-absolutely-cooked)
* [2026-02-20, 18:14:13](https://news.ycombinator.com/item?id=47091606) - [Blue light filters don&apos;t work – controlling total luminance is a better bet](https://www.neuroai.science/p/blue-light-filters-dont-work)
* [2026-02-20, 17:58:51](https://news.ycombinator.com/item?id=47091419) - [Keep Android Open](https://f-droid.org/2026/02/20/twif.html)
* [2026-02-20, 17:56:00](https://soylentnews.org/article.pl?sid=26/02/19/178226&amp;from=rss) - [OpenClaw Security Fears Lead Meta, Other AI Firms to Restrict its Use](https://soylentnews.org/article.pl?sid=26/02/19/178226&amp;from=rss)
* [2026-02-20, 17:20:06](https://lobste.rs/s/i4u55k/finding_credentials_msi_files_with) - [finding credentials in .msi files with msiexec](https://ljb.fyi/your-msi-isnt-an-executable/)
* [2026-02-20, 16:58:16](https://lobste.rs/s/bi9wsi/death_scroll_fade) - [Death to Scroll Fade](https://dbushell.com/2026/01/09/death-to-scroll-fade/)
* [2026-02-20, 16:57:52](https://lobste.rs/s/wul2hi/brat_parallel_tap_testing_harness_for) - [Brat, a parallel TAP testing harness for the POSIX shell](https://codeberg.org/sstephenson/brat)
* [2026-02-20, 15:52:15](https://lobste.rs/s/rxsphs/ipv6_adoption_2026) - [IPv6 Adoption in 2026](https://www.netmeister.org/blog/ipv6-adoption.html)
* [2026-02-20, 14:03:18](https://lobste.rs/s/6yjefp/ebpf_on_hard_mode) - [eBPF on Hard Mode](https://feyor.sh/blog/ebpf-on-hard-mode/)
* [2026-02-20, 14:01:24](https://lobste.rs/s/5iucri/made_eu_it_was_harder_than_i_thought) - [\&quot;Made in EU\&quot; - it was harder than I thought](https://www.coinerella.com/made-in-eu-it-was-harder-than-i-thought/)
* [2026-02-20, 13:51:04](https://news.ycombinator.com/item?id=47088037) - [Ggml.ai joins Hugging Face to ensure the long-term progress of Local AI](https://github.com/ggml-org/llama.cpp/discussions/19759)
* [2026-02-20, 13:13:00](https://soylentnews.org/article.pl?sid=26/02/19/1613238&amp;from=rss) - [Texas Sues Wi-Fi Router Maker Over Alleged China Links](https://soylentnews.org/article.pl?sid=26/02/19/1613238&amp;from=rss)
* [2026-02-20, 12:09:18](https://lobste.rs/s/xe7vkq/django_orm_standalone_querying_existing) - [Django ORM Standalone⁽¹⁾: Querying an existing database](https://www.paulox.net/2026/02/20/django-orm-standalone-database-inspectdb-query/)
* [2026-02-20, 11:19:38](https://lobste.rs/s/ihsrgj/web_revival_internet_didn_t_die_you_re_just) - [A Web Revival: the Internet didn&apos;t die, you&apos;re just not on it](https://youtu.be/tkUgOT22F5s)
* [2026-02-20, 10:32:52](https://news.ycombinator.com/item?id=47086181) - [The path to ubiquitous AI (17k tokens/sec)](https://taalas.com/the-path-to-ubiquitous-ai/)
* [2026-02-20, 09:23:49](https://lobste.rs/s/wejtbl/keep_android_open) - [Keep Android Open](https://keepandroidopen.org/)
* [2026-02-20, 08:25:00](https://soylentnews.org/article.pl?sid=26/02/19/1617210&amp;from=rss) - [Data Centres Consider Backing Uranium Projects, NexGen CEO Says](https://soylentnews.org/article.pl?sid=26/02/19/1617210&amp;from=rss)
* [2026-02-20, 03:49:00](https://soylentnews.org/article.pl?sid=26/02/19/1610250&amp;from=rss) - [Password Managers Less Secure Than Promised](https://soylentnews.org/article.pl?sid=26/02/19/1610250&amp;from=rss)
* [2026-02-20, 00:05:09](https://lobste.rs/s/zzlxaa/lindenmayer_systems) - [Lindenmayer Systems](https://justinpombrio.net/2026/02/16/l-systems.html)
* [2026-02-19, 22:56:00](https://soylentnews.org/article.pl?sid=26/02/18/0737205&amp;from=rss) - [Streaming Service Crunchyroll Raises Prices Weeks After Killing its Free Tier](https://soylentnews.org/article.pl?sid=26/02/18/0737205&amp;from=rss)
* [2026-02-19, 18:10:00](https://soylentnews.org/article.pl?sid=26/02/18/0735220&amp;from=rss) - [Ring Cancels Flock Deal After Dystopian Super Bowl Ad Prompts Mass Outrage](https://soylentnews.org/article.pl?sid=26/02/18/0735220&amp;from=rss)
* [2026-02-19, 17:15:20](https://lobste.rs/s/q4ykw7/missing_semester_your_cs_education) - [The Missing Semester of Your CS Education](https://missing.csail.mit.edu/)
* [2026-02-19, 13:24:00](https://soylentnews.org/article.pl?sid=26/02/18/0145204&amp;from=rss) - [What in the World Is Going on in Our Public Schools?](https://soylentnews.org/article.pl?sid=26/02/18/0145204&amp;from=rss)
* [2026-02-19, 08:32:00](https://soylentnews.org/article.pl?sid=26/02/18/0143232&amp;from=rss) - [Western Digital Has No More HDD Capacity Left, as CEO Reveals Massive AI Deals](https://soylentnews.org/article.pl?sid=26/02/18/0143232&amp;from=rss)
* [2026-02-19, 03:55:00](https://soylentnews.org/article.pl?sid=26/02/18/0140215&amp;from=rss) - [Incredible Chinese Humanoid Robot Show on CCTV Chinese New Year TV Gala this Week](https://soylentnews.org/article.pl?sid=26/02/18/0140215&amp;from=rss)
* [2026-02-18, 23:08:00](https://soylentnews.org/article.pl?sid=26/02/17/1849228&amp;from=rss) - [How to Incentivize Problem Solving in Groups](https://soylentnews.org/article.pl?sid=26/02/17/1849228&amp;from=rss)
* [2026-02-18, 18:21:00](https://soylentnews.org/article.pl?sid=26/02/17/1842234&amp;from=rss) - [This Bonobo Just Did Something Scientists Thought Only Humans Could Do](https://soylentnews.org/article.pl?sid=26/02/17/1842234&amp;from=rss)
* [2026-02-18, 13:39:00](https://soylentnews.org/article.pl?sid=26/02/17/1321256&amp;from=rss) - [A Fluid Can Store Solar Energy and Then Release It as Heat Months Later](https://soylentnews.org/article.pl?sid=26/02/17/1321256&amp;from=rss)
* [2026-02-18, 08:57:00](https://soylentnews.org/article.pl?sid=26/02/17/1319222&amp;from=rss) - [New ClickFix Attack Abuses Nslookup to Retrieve PowerShell Payload Via DNS](https://soylentnews.org/article.pl?sid=26/02/17/1319222&amp;from=rss)
* [2026-02-18, 08:20:17](https://news.ycombinator.com/item?id=47058584) - [Index, Count, Offset, Size](https://tigerbeetle.com/blog/2026-02-16-index-count-offset-size/)
* [2026-02-18, 04:09:00](https://soylentnews.org/article.pl?sid=26/02/16/2249254&amp;from=rss) - [Instruction Decoding in the Intel 8087 Floating-Point Chip](https://soylentnews.org/article.pl?sid=26/02/16/2249254&amp;from=rss)
* [2026-02-17, 23:27:00](https://soylentnews.org/article.pl?sid=26/02/16/2248253&amp;from=rss) - [How the GNU C Compiler Became the Clippy of Cryptography](https://soylentnews.org/article.pl?sid=26/02/16/2248253&amp;from=rss)
* [2026-02-17, 21:11:28](https://news.ycombinator.com/item?id=47053410) - [Approaches to writing two-sentence journal entries](https://alexanderbjoy.com/two-sentence-journal-approaches/)
* [2026-02-17, 18:46:00](https://soylentnews.org/article.pl?sid=26/02/16/2246259&amp;from=rss) - [Why We Sleep Poorly in New Environments: A Brain Circuit That Keeps Animals Awake](https://soylentnews.org/article.pl?sid=26/02/16/2246259&amp;from=rss)
* [2026-02-17, 17:35:23](https://news.ycombinator.com/item?id=47050308) - [The bare minimum for syncing Git repos](https://alexwlchan.net/2026/bare-git/)
* [2026-02-17, 16:43:39](https://news.ycombinator.com/item?id=47049499) - [Understanding Std:Shared_mutex from C++17](https://www.cppstories.com/2026/shared_mutex/)
* [2026-02-17, 13:57:00](https://soylentnews.org/article.pl?sid=26/02/15/2340202&amp;from=rss) - [AI Could Wipe Out Most White-Collar Jobs Within 12 Months, Microsoft AI Chief Warns](https://soylentnews.org/article.pl?sid=26/02/15/2340202&amp;from=rss)
* [2026-02-17, 12:58:37](https://news.ycombinator.com/item?id=47047027) - [Lean 4: How the theorem prover works and why it&apos;s the new competitive edge in AI](https://venturebeat.com/ai/lean4-how-the-theorem-prover-works-and-why-its-the-new-competitive-edge-in)
* [2026-02-17, 09:11:00](https://soylentnews.org/article.pl?sid=26/02/15/2333213&amp;from=rss) - [\&quot;ICE Out of Our Faces Act\&quot; Would Ban ICE and CBP Use of Facial Recognition](https://soylentnews.org/article.pl?sid=26/02/15/2333213&amp;from=rss)
* [2026-02-17, 08:51:41](https://news.ycombinator.com/item?id=47045175) - [Gitas – A tool for Git account switching](https://github.com/letmutex/gitas)
* [2026-02-17, 06:43:42](https://news.ycombinator.com/item?id=47044413) - [JWasm: Masm Compatible Assembler](https://github.com/Baron-von-Riedesel/JWasm)
* [2026-02-17, 04:28:00](https://soylentnews.org/article.pl?sid=26/02/15/2326234&amp;from=rss) - [Self-Driving Cars, Drones Hijacked by Custom Road Signs](https://soylentnews.org/article.pl?sid=26/02/15/2326234&amp;from=rss)
