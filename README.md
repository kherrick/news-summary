# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Developments and Challenges

* [Meta Plans Sweeping Layoffs As AI Costs Mount](https://tech.slashdot.org/story/26/03/14/012226/meta-plans-sweeping-layoffs-as-ai-costs-mount?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=47378787)) - Meta plans major layoffs to cope with rising artificial intelligence developments and associated costs.

* [How a Species Evolved Fast Enough to Save Itself from Extinction](https://news.slashdot.org/story/26/03/14/0343209/how-a-species-evolved-fast-enough-to-save-itself-from-extinction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=47379067)) - A fascinating account of how one species managed to evolve traits quickly enough to adapt and avoid extinction.

* [US Set To Receive $10 Billion Fee For Brokering TikTok Deal](https://tech.slashdot.org/story/26/03/14/1733200/us-set-to-receive-10-billion-fee-for-brokering-tiktok-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=47379391)) - Insights into the United States' massive financial gains from facilitating the TikTok deal.

* [Americans Are Quietly Installing DIY Solar to Fight Skyrocketing Energy Bills](https://soylentnews.org/article.pl?sid=26/03/13/0438246&amp;from=rss) ([comments](https://news.ycombinator.com/item?id=47379712)) - A growing movement among Americans turning to DIY solar solutions for relief from high energy costs.

## Innovative and Creative Technological Projects

* [Hostile Volume – A game about adjusting volume with intentionally bad UI](https://hostilevolume.com/) ([comments](https://news.ycombinator.com/item?id=47379712)) - Explore a quirky game centered on managing sound levels through frustratingly bad interface design.

* [Megadev: A Development Kit for the Sega Mega Drive and Mega CD Hardware](https://github.com/drojaazu/megadev) ([comments](https://news.ycombinator.com/item?id=47374745)) - An exciting toolkit for developing software for Sega Mega Drive and Mega CD.

## Notable Security Flaws and Issues

* [14,000 Routers Are Infected by Malware That&apos;s Highly Resistant to Takedowns](https://soylentnews.org/article.pl?sid=26/03/13/0421208&amp;from=rss) ([comments](https://news.ycombinator.com/item?id=47379067)) - A report on a resilient malware affecting thousands of routers over a widespread network.

* [Companies House vulnerability enabled company hijacking](https://taxpolicy.org.uk/2026/03/13/companies-house-security-vulnerability-directors-addresses/) ([comments](https://lobste.rs/s/dvkasd/companies_house_vulnerability_enabled)) - Insights into how a vulnerability at Companies House opened the door to potential corporate theft.

## Arts and Culture

* [In Praise of Stupid Questions](https://mathenchant.wordpress.com/2026/03/12/in-praise-of-stupid-questions/) ([comments](https://news.ycombinator.com/item?id=47378787)) - A blog post making a compelling case for why simple questions can spark profound understanding.

## Controversial Policies and Changes

* [U.S. State Bans on Lab-Grown Meats Challenged in Court](https://science.slashdot.org/story/26/03/14/033215/us-state-bans-on-lab-grown-meats-challenged-in-court?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=47376848)) - Legal challenges arise as states impose bans on lab-grown meats.

* [System76 CEO Sees &apos;Real Possibility&apos; Colorado&apos;s Age-Verification Bill Excludes Open-Source](https://linux.slashdot.org/story/26/03/14/085223/system76-ceo-sees-real-possibility-colorados-age-verification-bill-excludes-open-source?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=47376584)) - Concerns over whether Colorado's age verification laws could unintentionally exclude open-source software users and developers.

## AI and Emerging Trends

* [Thoughts on generative A.I](https://kghose.github.io/generative-ai/) ([comments](https://lobste.rs/s/ypes5v/thoughts_on_generative_i)) - Reflections on the rapidly evolving world of generative Artificial Intelligence.

* [Emacs and Vim in the Age of AI](https://batsov.com/articles/2026/03/09/emacs-and-vim-in-the-age-of-ai/) ([comments](https://lobste.rs/s/dempb5/emacs_vim_age_ai)) - Discussion of text editors' relevance and evolution in an AI-dominated landscape.

## Historical and Cultural Surprises

* [Two Long-Lost Episodes of &apos;Doctor Who&apos; Found](https://entertainment.slashdot.org/story/26/03/14/0048239/two-long-lost-episodes-of-doctor-who-found?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=47379712)) - Rediscovery of missing episodes from the classic TV series Doctor Who.

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

* [2026-03-14, 18:39:10](https://news.ycombinator.com/item?id=47379712) - [Hostile Volume – A game about adjusting volume with intentionally bad UI](https://hostilevolume.com/)
* [2026-03-14, 18:34:00](https://linux.slashdot.org/story/26/03/14/085223/system76-ceo-sees-real-possibility-colorados-age-verification-bill-excludes-open-source?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [System76 CEO Sees &apos;Real Possibility&apos; Colorado&apos;s Age-Verification Bill Excludes Open-Source](https://linux.slashdot.org/story/26/03/14/085223/system76-ceo-sees-real-possibility-colorados-age-verification-bill-excludes-open-source?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-14, 18:22:55](https://lobste.rs/s/jh5ljk/lies_i_was_told_about_collaborative) - [Lies I was Told About Collaborative Editing, Part 2: Why we don&apos;t use Yjs](https://www.moment.dev/blog/lies-i-was-told-pt-2)
* [2026-03-14, 18:21:57](https://lobste.rs/s/l5ompx/jpeg_compression) - [JPEG compression](https://www.sophielwang.com/blog/jpeg)
* [2026-03-14, 18:21:09](https://lobste.rs/s/kyrt0i/sunsetting_jazzband) - [Sunsetting Jazzband](https://jazzband.co/news/2026/03/14/sunsetting-jazzband)
* [2026-03-14, 18:09:45](https://lobste.rs/s/dvkasd/companies_house_vulnerability_enabled) - [Companies House vulnerability enabled company hijacking](https://taxpolicy.org.uk/2026/03/13/companies-house-security-vulnerability-directors-addresses/)
* [2026-03-14, 18:09:38](https://news.ycombinator.com/item?id=47379391) - [Digg.com Closing Due to Spam](https://digg.com?hn)
* [2026-03-14, 18:06:00](https://soylentnews.org/article.pl?sid=26/03/13/0438246&amp;from=rss) - [Americans Are Quietly Installing DIY Solar to Fight Skyrocketing Energy Bills](https://soylentnews.org/article.pl?sid=26/03/13/0438246&amp;from=rss)
* [2026-03-14, 17:56:47](https://lobste.rs/s/gsg6fc/humanities_machine) - [Humanities in the Machine](https://blainsmith.com/essays/humanities-in-the-machine/)
* [2026-03-14, 17:40:23](https://news.ycombinator.com/item?id=47379067) - [Sunsetting Jazzband](https://jazzband.co/news/2026/03/14/sunsetting-jazzband)
* [2026-03-14, 17:34:00](https://tech.slashdot.org/story/26/03/14/1733200/us-set-to-receive-10-billion-fee-for-brokering-tiktok-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Set To Receive $10 Billion Fee For Brokering TikTok Deal](https://tech.slashdot.org/story/26/03/14/1733200/us-set-to-receive-10-billion-fee-for-brokering-tiktok-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-14, 17:25:17](https://lobste.rs/s/ypes5v/thoughts_on_generative_i) - [Thoughts on generative A.I](https://kghose.github.io/generative-ai/)
* [2026-03-14, 17:12:18](https://news.ycombinator.com/item?id=47378787) - [In Praise of Stupid Questions](https://mathenchant.wordpress.com/2026/03/12/in-praise-of-stupid-questions/)
* [2026-03-14, 16:58:40](https://news.ycombinator.com/item?id=47378638) - [What happens when US economic data becomes unreliable](https://mitsloan.mit.edu/ideas-made-to-matter/what-happens-when-us-economic-data-becomes-unreliable)
* [2026-03-14, 16:50:32](https://lobste.rs/s/b4vncq/developing_2fa_desktop_client_go) - [Developing a 2FA Desktop Client in Go](https://www.youtube.com/watch?v=HFu3CUtrOQ8)
* [2026-03-14, 16:34:00](https://news.slashdot.org/story/26/03/14/0343209/how-a-species-evolved-fast-enough-to-save-itself-from-extinction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How a Species Evolved Fast Enough to Save Itself from Extinction](https://news.slashdot.org/story/26/03/14/0343209/how-a-species-evolved-fast-enough-to-save-itself-from-extinction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-14, 16:25:34](https://news.ycombinator.com/item?id=47378268) - [NMAP in the Movies](https://nmap.org/movies/)
* [2026-03-14, 16:24:02](https://news.ycombinator.com/item?id=47378251) - [Show HN: Learn Arabic with spaced repetition and comprehensible input](https://abjadpro.com)
* [2026-03-14, 16:01:23](https://news.ycombinator.com/item?id=47377998) - [An Ode to Bzip](https://purplesyringa.moe/blog/an-ode-to-bzip/)
* [2026-03-14, 15:57:25](https://lobste.rs/s/kzm8tb/why_mathematica_does_not_simplify_sinh) - [Why Mathematica does not simplify Sinh[ArcCosh[x]]](https://www.johndcook.com/blog/2026/03/10/sinh-arccosh/)
* [2026-03-14, 15:53:58](https://news.ycombinator.com/item?id=47377907) - [Online astroturfing: A problem beyond disinformation](https://journals.sagepub.com/doi/10.1177/01914537221108467)
* [2026-03-14, 15:34:00](https://it.slashdot.org/story/26/03/14/0539247/ais-productivity-boost-just-16-minutes-per-week-claims-study?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI&apos;s Productivity Boost?  Just 16 Minutes Per Week, Claims Study](https://it.slashdot.org/story/26/03/14/0539247/ais-productivity-boost-just-16-minutes-per-week-claims-study?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-14, 14:34:00](https://science.slashdot.org/story/26/03/14/033215/us-state-bans-on-lab-grown-meats-challenged-in-court?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [U.S. State Bans on Lab-Grown Meats Challenged in Court](https://science.slashdot.org/story/26/03/14/033215/us-state-bans-on-lab-grown-meats-challenged-in-court?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-14, 14:08:18](https://news.ycombinator.com/item?id=47376848) - [Philosoph Jürgen Habermas Gestorben](https://www.spiegel.de/kultur/philosoph-juergen-habermas-mit-96-jahren-gestorben-a-8be73ac7-e722-4543-8344-4515c4040363)
* [2026-03-14, 13:59:58](https://news.ycombinator.com/item?id=47376767) - [Montana passes Right to Compute act (2025)](https://www.westernmt.news/2025/04/21/montana-leads-the-nation-with-groundbreaking-right-to-compute-act/)
* [2026-03-14, 13:45:04](https://news.ycombinator.com/item?id=47376619) - [9 Mothers Defense (YC P26) Is Hiring in Austin](https://jobs.ashbyhq.com/9-mothers?utm_source=x8pZ4B3P3Q)
* [2026-03-14, 13:41:25](https://news.ycombinator.com/item?id=47376584) - [Show HN: GitAgent – An open standard that turns any Git repo into an AI agent](https://www.gitagent.sh/)
* [2026-03-14, 13:31:43](https://lobste.rs/s/u3cc1e/compose_key_is_magic) - [The Compose key is magic](https://crescentro.se/posts/compose-key/)
* [2026-03-14, 13:19:00](https://soylentnews.org/article.pl?sid=26/03/13/0430253&amp;from=rss) - [Adobe Plunges to 7 Year Low on CEO Resignation, Muted Forecast](https://soylentnews.org/article.pl?sid=26/03/13/0430253&amp;from=rss)
* [2026-03-14, 13:11:34](https://lobste.rs/s/rmemq6/guide_vim_pack_neovim_built_plugin) - [A Guide to vim.pack (Neovim built-in plugin manager)](https://echasnovski.com/blog/2026-03-13-a-guide-to-vim-pack)
* [2026-03-14, 12:00:34](https://lobste.rs/s/vnkkp5/baochip_what_it_is_why_i_m_doing_it_now_how_it) - [Baochip: What It Is, Why I&apos;m Doing It Now, and How It Came About](https://www.crowdsupply.com/baochip/dabao/updates/what-it-is-why-im-doing-it-now-and-how-it-came-about)
* [2026-03-14, 11:59:13](https://news.ycombinator.com/item?id=47375764) - [XML Is a Cheap DSL](https://unplannedobsolescence.com/blog/xml-cheap-dsl/)
* [2026-03-14, 11:20:04](https://lobste.rs/s/k0cm8c/getting_started_with_claude_for_software) - [Getting started with Claude for software development](https://steveklabnik.com/writing/getting-started-with-claude-for-software-development/)
* [2026-03-14, 11:00:00](https://tech.slashdot.org/story/26/03/14/012226/meta-plans-sweeping-layoffs-as-ai-costs-mount?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Plans Sweeping Layoffs As AI Costs Mount](https://tech.slashdot.org/story/26/03/14/012226/meta-plans-sweeping-layoffs-as-ai-costs-mount?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-14, 10:05:58](https://news.ycombinator.com/item?id=47375085) - [RAM kits are now sold with one fake RAM stick alongside a real one](https://www.tomshardware.com/pc-components/ram/fake-ram-bundled-with-real-ram-to-create-a-performance-illusion-for-amd-users-1-1-value-pack-offers-desperate-psychological-relief-as-the-memory-shortage-worsens)
* [2026-03-14, 09:04:39](https://news.ycombinator.com/item?id=47374745) - [Megadev: A Development Kit for the Sega Mega Drive and Mega CD Hardware](https://github.com/drojaazu/megadev)
* [2026-03-14, 08:40:09](https://lobste.rs/s/dempb5/emacs_vim_age_ai) - [Emacs and Vim in the Age of AI](https://batsov.com/articles/2026/03/09/emacs-and-vim-in-the-age-of-ai/)
* [2026-03-14, 08:38:00](https://soylentnews.org/article.pl?sid=26/03/13/0421208&amp;from=rss) - [14,000 Routers Are Infected by Malware That&apos;s Highly Resistant to Takedowns](https://soylentnews.org/article.pl?sid=26/03/13/0421208&amp;from=rss)
* [2026-03-14, 07:00:00](https://entertainment.slashdot.org/story/26/03/14/0048239/two-long-lost-episodes-of-doctor-who-found?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Two Long-Lost Episodes of &apos;Doctor Who&apos; Found](https://entertainment.slashdot.org/story/26/03/14/0048239/two-long-lost-episodes-of-doctor-who-found?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-14, 05:51:57](https://lobste.rs/s/ec6xnf/torturing_rustc_by_emulating_hkts) - [Torturing rustc by Emulating HKTs, Causing an Inductive Cycle and Borking the Compiler](https://www.harudagondi.space/blog/torturing-rustc-by-emulating-hkts/)
* [2026-03-14, 04:15:41](https://lobste.rs/s/vo4mb2/plans_possibly_retire_big_endian_powerpc) - [Plans to possibly retire the big-endian PowerPC/POWER platforms](https://chimera-linux.org/news/2026/03/retiring-powerpc.html)
* [2026-03-14, 03:51:00](https://soylentnews.org/article.pl?sid=26/03/13/0413211&amp;from=rss) - [As Frank Yeary Retires From Intel, the Company Picks an Engineer to Chair its Board](https://soylentnews.org/article.pl?sid=26/03/13/0413211&amp;from=rss)
* [2026-03-14, 03:30:00](https://yro.slashdot.org/story/26/03/13/2111234/chatgpt-other-chatbots-approved-for-official-use-in-the-senate?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ChatGPT, Other Chatbots Approved For Official Use In the Senate](https://yro.slashdot.org/story/26/03/13/2111234/chatgpt-other-chatbots-approved-for-official-use-in-the-senate?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-14, 02:15:23](https://lobste.rs/s/twup3y/libadwaita_1_9) - [Libadwaita 1.9](https://nyaa.place/blog/libadwaita-1-9/)
* [2026-03-14, 00:09:35](https://lobste.rs/s/ub7a5k/ode_bzip) - [An ode to bzip](https://purplesyringa.moe/blog/an-ode-to-bzip/)
* [2026-03-14, 00:06:05](https://lobste.rs/s/rb8pas/i_beg_you_follow_crocker_s_rules_even_if_you) - [I beg you to follow Crocker&apos;s Rules, even if you will be rude to me](https://lr0.org/blog/p/crocker/)
* [2026-03-13, 23:02:00](https://soylentnews.org/article.pl?sid=26/03/12/1111206&amp;from=rss) - [After Outages, Amazon to Make Senior Engineers Sign Off on AI-Assisted Changes](https://soylentnews.org/article.pl?sid=26/03/12/1111206&amp;from=rss)
* [2026-03-13, 23:00:00](https://it.slashdot.org/story/26/03/13/214229/instagram-discontinues-end-to-end-encryption-for-dms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Instagram Discontinues End-To-End Encryption For DMs](https://it.slashdot.org/story/26/03/13/214229/instagram-discontinues-end-to-end-encryption-for-dms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-13, 22:52:05](https://news.ycombinator.com/item?id=47371064) - [I found 39 Algolia admin keys exposed across open source documentation sites](https://benzimmermann.dev/blog/algolia-docsearch-admin-keys)
* [2026-03-13, 22:00:00](https://tech.slashdot.org/story/26/03/13/190216/qatar-helium-shutdown-puts-chip-supply-chain-on-a-two-week-clock?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Qatar Helium Shutdown Puts Chip Supply Chain On a Two-Week Clock](https://tech.slashdot.org/story/26/03/13/190216/qatar-helium-shutdown-puts-chip-supply-chain-on-a-two-week-clock?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-13, 21:00:00](https://news.slashdot.org/story/26/03/13/1926255/dont-get-used-to-cheap-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Don&apos;t Get Used To Cheap AI](https://news.slashdot.org/story/26/03/13/1926255/dont-get-used-to-cheap-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-13, 20:00:00](https://tech.slashdot.org/story/26/03/13/1953248/digg-relaunch-fails?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Digg Relaunch Fails](https://tech.slashdot.org/story/26/03/13/1953248/digg-relaunch-fails?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-13, 19:47:37](https://lobste.rs/s/i2xkrm/xml_is_cheap_dsl) - [XML is a cheap DSL](https://unplannedobsolescence.com/blog/xml-cheap-dsl/)
* [2026-03-13, 19:00:00](https://science.slashdot.org/story/26/03/13/182207/backblaze-hosts-314-trillion-digits-of-pi-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Backblaze Hosts 314 Trillion Digits of Pi Online](https://science.slashdot.org/story/26/03/13/182207/backblaze-hosts-314-trillion-digits-of-pi-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-13, 18:52:17](https://news.ycombinator.com/item?id=47368135) - [Digg is gone again](https://digg.com/)
* [2026-03-13, 18:19:00](https://soylentnews.org/article.pl?sid=26/03/12/1023220&amp;from=rss) - [Online Intelligence Dashboards (Aka, More AI Slop?)](https://soylentnews.org/article.pl?sid=26/03/12/1023220&amp;from=rss)
* [2026-03-13, 18:00:00](https://tech.slashdot.org/story/26/03/13/1756229/meta-delays-rollout-of-new-ai-model-after-performance-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Delays Rollout of New AI Model After Performance Concerns](https://tech.slashdot.org/story/26/03/13/1756229/meta-delays-rollout-of-new-ai-model-after-performance-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-13, 17:39:35](https://news.ycombinator.com/item?id=47367336) - [Cookie jars capture American kitsch (2023)](https://www.eater.com/23651631/cookie-jar-trend-appreciation-collecting-history)
* [2026-03-13, 17:19:01](https://news.ycombinator.com/item?id=47367129) - [1M context is now generally available for Opus 4.6 and Sonnet 4.6](https://claude.com/blog/1m-context-ga)
* [2026-03-13, 17:00:00](https://yro.slashdot.org/story/26/03/13/0524226/live-nation-execs-brag-about-robbing-ticket-buyers-in-slack-dms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Live Nation Execs Brag About &apos;Robbing&apos; Ticket Buyers In Slack DMs](https://yro.slashdot.org/story/26/03/13/0524226/live-nation-execs-brag-about-robbing-ticket-buyers-in-slack-dms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-13, 15:17:52](https://lobste.rs/s/jadk6d/reinventing_python_s_asyncio) - [Reinventing Python&apos;s AsyncIO](https://blog.baro.dev/p/reinventing-pythons-asyncio)
* [2026-03-13, 15:15:03](https://lobste.rs/s/zcmoab/windows_11_after_two_decades_macos_okay) - [Windows 11 after two decades of macOS: okay, but also awful](https://rakhim.exotext.com/windows-11-experience)
* [2026-03-13, 14:08:08](https://lobste.rs/s/hfypk8/how_use_storytelling_fit_inline_assembly) - [How to use storytelling to fit inline assembly into Rust](https://www.ralfj.de/blog/2026/03/13/inline-asm.html)
* [2026-03-13, 13:37:00](https://soylentnews.org/article.pl?sid=26/03/12/1011221&amp;from=rss) - [LEGO&apos;s 0.002mm Specification and It&apos;s Implications for Manufacturing](https://soylentnews.org/article.pl?sid=26/03/12/1011221&amp;from=rss)
* [2026-03-13, 13:34:02](https://lobste.rs/s/czj5p4/computing_freedom_with_gnu_emacs) - [Computing in freedom with GNU Emacs](https://protesilaos.com/codelog/2026-03-13-computing-in-freedom-with-gnu-emacs/)
* [2026-03-13, 12:46:10](https://news.ycombinator.com/item?id=47363754) - [Can I run AI locally?](https://www.canirun.ai/)
* [2026-03-13, 11:41:55](https://lobste.rs/s/ddrcpa/i_traced_2_billion_nonprofit_grants_45) - [I traced $2 billion in nonprofit grants and 45 states of lobbying records to figure out who&apos;s behind the age verification bills](https://www.reddit.com/r/linux/s/WqwsCnFE8E)
* [2026-03-13, 08:52:00](https://soylentnews.org/article.pl?sid=26/03/12/107259&amp;from=rss) - [Infinity Train Got 14.5 MWh Battery That, Ideally, Never Needs Charging](https://soylentnews.org/article.pl?sid=26/03/12/107259&amp;from=rss)
* [2026-03-13, 04:09:00](https://soylentnews.org/article.pl?sid=26/03/11/2010247&amp;from=rss) - [Ig Nobels Ceremony Moves to Europe Over Security Concerns](https://soylentnews.org/article.pl?sid=26/03/11/2010247&amp;from=rss)
* [2026-03-12, 23:23:00](https://soylentnews.org/article.pl?sid=26/03/11/164207&amp;from=rss) - [Is Low Fertility Really an Economic Threat?](https://soylentnews.org/article.pl?sid=26/03/11/164207&amp;from=rss)
* [2026-03-12, 18:39:00](https://soylentnews.org/article.pl?sid=26/03/11/163209&amp;from=rss) - [OpenAI&apos;s Massive Stargate Data Center Canceled as Firm Can&apos;t Reach Terms With Oracle](https://soylentnews.org/article.pl?sid=26/03/11/163209&amp;from=rss)
* [2026-03-12, 16:43:27](https://lobste.rs/s/zyt5uz/this_is_not_computer_for_you) - [This Is Not The Computer For You](https://samhenri.gold/blog/20260312-this-is-not-the-computer-for-you/)
* [2026-03-12, 13:57:00](https://soylentnews.org/article.pl?sid=26/03/11/1558207&amp;from=rss) - [Digital Targeting Creeps Out Customers](https://soylentnews.org/article.pl?sid=26/03/11/1558207&amp;from=rss)
* [2026-03-12, 09:11:00](https://soylentnews.org/article.pl?sid=26/03/11/0450209&amp;from=rss) - [Why the US is Using a Cheap Iranian Drone Against the Country Itself](https://soylentnews.org/article.pl?sid=26/03/11/0450209&amp;from=rss)
* [2026-03-12, 08:22:32](https://news.ycombinator.com/item?id=47347920) - [The Isolation Trap: Erlang](https://causality.blog/essays/the-isolation-trap/)
* [2026-03-12, 04:23:00](https://soylentnews.org/article.pl?sid=26/03/11/0135252&amp;from=rss) - [Are Consumers Doomed to Pay More for Electricity Due to Data Center Buildouts?](https://soylentnews.org/article.pl?sid=26/03/11/0135252&amp;from=rss)
* [2026-03-11, 23:36:00](https://soylentnews.org/article.pl?sid=26/03/11/0138245&amp;from=rss) - [Iranian Drone Strikes Hit Three AWS Data Centers in the UAE and Bahrain](https://soylentnews.org/article.pl?sid=26/03/11/0138245&amp;from=rss)
* [2026-03-11, 19:37:46](https://news.ycombinator.com/item?id=47340203) - [Wired headphone sales are exploding](https://www.bbc.com/future/article/20260310-wired-headphones-are-better-than-bluetooth)
* [2026-03-11, 18:54:00](https://soylentnews.org/article.pl?sid=26/03/11/0441214&amp;from=rss) - [An Unexpected Discovery Just Uncovered Metals Tech Companies Are Desperate for](https://soylentnews.org/article.pl?sid=26/03/11/0441214&amp;from=rss)
* [2026-03-11, 18:35:39](https://news.ycombinator.com/item?id=47339403) - [Atari 2600 BASIC Programming (2015)](https://huguesjohnson.com/programming/atari-2600-basic/)
* [2026-03-11, 18:21:58](https://news.ycombinator.com/item?id=47339219) - [Baochip-1x: What it is, why I&apos;m doing it now and how it came about](https://www.crowdsupply.com/baochip/dabao/updates/what-it-is-why-im-doing-it-now-and-how-it-came-about)
* [2026-03-11, 14:03:00](https://soylentnews.org/article.pl?sid=26/03/09/1454227&amp;from=rss) - [Trump Gets Data Center Companies to Pledge to Pay for Power Generation](https://soylentnews.org/article.pl?sid=26/03/09/1454227&amp;from=rss)
* [2026-03-11, 09:17:00](https://soylentnews.org/article.pl?sid=26/03/09/1451208&amp;from=rss) - [The Cybertruck is More Explosive Than the Ford Pinto](https://soylentnews.org/article.pl?sid=26/03/09/1451208&amp;from=rss)
* [2026-03-11, 08:08:15](https://news.ycombinator.com/item?id=47332847) - [The $2 per hour worker behind the OnlyFans boom](https://www.bbc.com/news/articles/cq571g9gd4lo)
* [2026-03-11, 08:03:37](https://news.ycombinator.com/item?id=47332821) - [Generalizing Knuth&apos;s Pseudocode Architecture to Knowledge](https://zenodo.org/records/18767666)
* [2026-03-11, 04:32:00](https://soylentnews.org/article.pl?sid=26/03/09/096203&amp;from=rss) - [Ancient Clay Hidden Under Japan Caused Rupture That Triggered the 2011 Earthquake and Tsunami](https://soylentnews.org/article.pl?sid=26/03/09/096203&amp;from=rss)
* [2026-03-10, 23:43:00](https://soylentnews.org/article.pl?sid=26/03/09/094202&amp;from=rss) - [Norwegian Gov&apos;t Consumer Watchdog Calls Out ‘Enshittification’ of Video Games, Connected Devices](https://soylentnews.org/article.pl?sid=26/03/09/094202&amp;from=rss)
* [2026-03-10, 19:22:39](https://news.ycombinator.com/item?id=47327703) - [Python: The Optimization Ladder](https://cemrehancavdar.com/2026/03/10/optimization-ladder/)
* [2026-03-10, 18:57:00](https://soylentnews.org/article.pl?sid=26/03/09/0859227&amp;from=rss) - [The Slow Death of the Power User](https://soylentnews.org/article.pl?sid=26/03/09/0859227&amp;from=rss)
* [2026-03-10, 16:54:23](https://news.ycombinator.com/item?id=47325825) - [Everything you never wanted to know about visually-hidden](https://dbushell.com/2026/02/20/visually-hidden/)
* [2026-03-10, 14:10:00](https://soylentnews.org/article.pl?sid=26/03/08/1511250&amp;from=rss) - [Indigenous Peoples in the Amazon and Australia Share Some Ancestry](https://soylentnews.org/article.pl?sid=26/03/08/1511250&amp;from=rss)
* [2026-03-10, 09:29:00](https://soylentnews.org/article.pl?sid=26/03/08/1510201&amp;from=rss) - [In 1985 Maxell Built a Bunch of Life-Size Robots for its Bad Floppy Ad](https://soylentnews.org/article.pl?sid=26/03/08/1510201&amp;from=rss)
* [2026-03-10, 08:27:34](https://news.ycombinator.com/item?id=47320482) - [Nominal Types in WebAssembly](https://wingolog.org/archives/2026/03/10/nominal-types-in-webassembly)
* [2026-03-10, 04:47:00](https://soylentnews.org/article.pl?sid=26/03/08/157253&amp;from=rss) - [Sam Altman Wonders: Should the Government Nationalize AGI?](https://soylentnews.org/article.pl?sid=26/03/08/157253&amp;from=rss)
* [2026-03-10, 00:02:00](https://soylentnews.org/article.pl?sid=26/03/08/154256&amp;from=rss) - [Charter Gets FCC Permission to Buy Cox and Become Largest ISP in the US](https://soylentnews.org/article.pl?sid=26/03/08/154256&amp;from=rss)
