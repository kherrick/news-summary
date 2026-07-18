# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Technology Advancements

* [Australia To Put Environmental Brakes On AI Data Centers](https://slashdot.org/story/26/07/17/2142206/australia-to-put-environmental-brakes-on-ai-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Australia seeks to reduce the environmental impact of AI data centers, adding sustainability measures to tech development.

* [The Isomorphic Labs Drug Design Engine unlocks a new frontier beyond AlphaFold](https://www.isomorphiclabs.com/articles/the-isomorphic-labs-drug-design-engine-unlocks-a-new-frontier) - Researchers present an advanced AI-powered drug design engine that goes beyond protein folding predictions.

* [Meta In Talks To Lease Computing Power To Anthropic In Potential $10 Billion Deal](https://hardware.slashdot.org/story/26/07/17/1732212/meta-in-talks-to-lease-computing-power-to-anthropic-in-potential-10-billion-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Meta considers leasing its computing infrastructure to Anthropic for a multi-billion-dollar collaboration.

* [Astronomers Find an Atmosphere On a Nearby Earth-Like Planet](https://science.slashdot.org/story/26/07/17/0029203/astronomers-find-an-atmosphere-on-a-nearby-earth-like-planet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Scientists discover atmospheric evidence on an exoplanet, offering insights into potential habitability.

## Open-Source Community Updates

* [Moonstone: Modern, cross-platform Lua runtime and package manager written in Zig](https://moonstone.sh/) - A new cross-platform runtime and package manager for Lua, utilizing the Zig programming language.

* [topcoat: A batteries-included framework for building web apps](https://github.com/tokio-rs/topcoat) - Topcoat is introduced as a complete framework for seamless web application development.

* [Fedichat - Comic Chat for the Fediverse](https://lambadalambda.github.io/fedichat/client.html) - A creative chat project bringing comic-style interactions to decentralized platforms like the Fediverse.

## Environmental and Ethical Issues

* [Kaiser nurses say AI, workplace surveillance are making their jobs, care worse](https://localnewsmatters.org/2026/07/15/kaiser-nurses-say-ai-workplace-surveillance-are-making-their-jobs-and-patient-care-worse/) - Nurses raise concerns about workplace surveillance and AI, citing negative effects on patient care.

* [Irish Datacenters Now Guzzle 23% of the Country&apos;s Electricity](https://soylentnews.org/article.pl?sid=26/07/16/0229204&amp;from=rss) - Ireland grapples with the energy demands of its expanding data centers as they devour almost a quarter of national usage.

* [Xi Vows to Make AI for All in Debut at China&apos;s Top Tech Summit](https://slashdot.org/story/26/07/17/1929216/xi-vows-to-make-ai-for-all-in-debut-at-chinas-top-tech-summit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - China's President Xi Jinping announces ambitions to democratize AI at a key technology summit.

## Retro and Historical Technology

* [The Zilog Z80 has turned 50](https://goliath32.com/blog/z80.html) - Celebrating half a century of the Zilog Z80, a processor that played a pivotal role in early computing history.

* [Classic console tech tricks](https://www.youtube.com/playlist?list=PLLM_oC5K01gS9rqn7PotAOE-fb0zrnvdu) - A YouTube playlist showcasing innovative tricks and hacks of classic gaming consoles.

* [The Java Story | The Official Documentary](https://www.youtube.com/watch?v=ZqGSg4b_cZA) - A documentary tracing the rich history of the Java programming language and its impact on the software world.

## Privacy and Security Concerns

* [Microsoft&apos;s Secure Boot Has Been Broken for a Decade and No One Noticed Until Now](https://soylentnews.org/article.pl?sid=26/07/16/0231216&amp;from=rss) - A long-term vulnerability in Microsoft's Secure Boot system raises questions about systemic oversight.

* [TP-Link Kasa cameras leaked home GPS via unauthenticated UDP for 6 years](https://github.com/BadChemical/IoT-Vulnerability-Research-Public/blob/main/TP-Link_Kasa_EC71/Kasa_EC71.md) - A critical flaw in TP-Link Kasa cameras exposed users' GPS data over six years, highlighting IoT vulnerabilities.

* [PACT: Anonymous Credentials for the Web – Mozilla Hacks](https://hacks.mozilla.org/2026/06/pact-anonymous-credentials-for-the-web/) - Mozilla unveils PACT, a framework focusing on anonymous authentication for internet users.

## Creative Tools and Projects

* [Stenchill: 3D Printable Solder Paste Stencil Generator](https://www.stenchill.com/en/) - An innovative tool for creating easy-to-use, 3D-printable solder paste stencils for electronics projects.

* [Open Book Touch: open-source e-reader](https://www.crowdsupply.com/oddly-specific-objects/open-book-touch) - Introducing an open-source e-reader aimed at offering a customizable reading experience for book enthusiasts.

* [Show HN: A zoomable timeline of 4M Wikipedia events](https://app.everything.diena.co/) - A digital timeline visualizing four million historical Wikipedia events for educational exploration.

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

* [2026-07-18, 03:30:00](https://slashdot.org/story/26/07/17/2142206/australia-to-put-environmental-brakes-on-ai-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Australia To Put Environmental Brakes On AI Data Centers](https://slashdot.org/story/26/07/17/2142206/australia-to-put-environmental-brakes-on-ai-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-18, 03:05:00](https://soylentnews.org/article.pl?sid=26/07/17/0436211&amp;from=rss) - [Teardown: A Generic 7-Port USB 3.0 Hub That Wasn&apos;t](https://soylentnews.org/article.pl?sid=26/07/17/0436211&amp;from=rss)
* [2026-07-18, 01:18:15](https://news.ycombinator.com/item?id=48954175) - [Moonstone: Modern, cross-platform Lua runtime and package manager written in Zig](https://moonstone.sh/)
* [2026-07-18, 01:12:13](https://news.ycombinator.com/item?id=48954149) - [I Started a \&quot;Dirt Notebook\&quot;](https://pinewind.bearblog.dev/i-started-a-dirt-notebook/)
* [2026-07-18, 01:01:08](https://news.ycombinator.com/item?id=48954074) - [DrDroid (YC W23) Is Hiring](https://www.ycombinator.com/companies/drdroid/jobs/w45QcNV-product-engineer-assignment-mandatory)
* [2026-07-18, 00:48:37](https://news.ycombinator.com/item?id=48953981) - [Stenchill: 3D Printable Solder Paste Stencil Generator](https://www.stenchill.com/en/)
* [2026-07-18, 00:43:53](https://lobste.rs/s/ycqq4r/road_lisp_which_lisp) - [A Road to Lisp: Which Lisp](https://scotto.me/blog/2026-07-17-which-lisp/)
* [2026-07-18, 00:30:44](https://lobste.rs/s/dhnwz2/scala_on_go) - [Scala on Go](https://github.com/martianoff/gala)
* [2026-07-17, 23:33:21](https://lobste.rs/s/ecuwk1/classic_console_tech_tricks) - [Classic console tech tricks](https://www.youtube.com/playlist?list=PLLM_oC5K01gS9rqn7PotAOE-fb0zrnvdu)
* [2026-07-17, 23:26:35](https://news.ycombinator.com/item?id=48953406) - [The Isomorphic Labs Drug Design Engine unlocks a new frontier beyond AlphaFold](https://www.isomorphiclabs.com/articles/the-isomorphic-labs-drug-design-engine-unlocks-a-new-frontier)
* [2026-07-17, 23:03:22](https://lobste.rs/s/jvg8cy/another_taste_verse) - [Another Taste of Verse](https://www.youtube.com/watch?v=QIiU-QGzcqc&amp;list=PLQtDWkrawhsE&amp;index=2)
* [2026-07-17, 23:00:00](https://hardware.slashdot.org/story/26/07/17/1944211/steve-wozniaks-foundation-partners-with-realbotix-to-build-ai-teacherbot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Steve Wozniak&apos;s Foundation Partners With Realbotix To Build AI Teacherbot](https://hardware.slashdot.org/story/26/07/17/1944211/steve-wozniaks-foundation-partners-with-realbotix-to-build-ai-teacherbot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-17, 22:45:28](https://lobste.rs/s/zmg7ot/topcoat_batteries_included_framework) - [topcoat: A batteries-included framework for building web apps](https://github.com/tokio-rs/topcoat)
* [2026-07-17, 22:26:30](https://news.ycombinator.com/item?id=48952880) - [Kaiser nurses say AI, workplace surveillance are making their jobs, care worse](https://localnewsmatters.org/2026/07/15/kaiser-nurses-say-ai-workplace-surveillance-are-making-their-jobs-and-patient-care-worse/)
* [2026-07-17, 22:18:00](https://soylentnews.org/article.pl?sid=26/07/17/0430256&amp;from=rss) - [Mathematical Explanation for Accelerated Universe Expansion That Doesn&apos;t Require Dark Energy](https://soylentnews.org/article.pl?sid=26/07/17/0430256&amp;from=rss)
* [2026-07-17, 22:00:00](https://slashdot.org/story/26/07/17/1929216/xi-vows-to-make-ai-for-all-in-debut-at-chinas-top-tech-summit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Xi Vows to Make AI for All in Debut at China&apos;s Top Tech Summit](https://slashdot.org/story/26/07/17/1929216/xi-vows-to-make-ai-for-all-in-debut-at-chinas-top-tech-summit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-17, 21:51:07](https://lobste.rs/s/zar7fc/enterprise_haskell_at_h_e_b) - [Enterprise Haskell at H-E-B](https://blog.haskell.org/enterprise-haskell-at-h-e-b/)
* [2026-07-17, 21:42:43](https://news.ycombinator.com/item?id=48952565) - [TP-Link Kasa cameras leaked home GPS via unauthenticated UDP for 6 years](https://github.com/BadChemical/IoT-Vulnerability-Research-Public/blob/main/TP-Link_Kasa_EC71/Kasa_EC71.md)
* [2026-07-17, 21:22:53](https://news.ycombinator.com/item?id=48952439) - [FAA lets Boeing sign off on 737 MAX, 787 airworthiness certificates again](https://www.cnbc.com/2026/07/17/faa-boeing-737-max-787.html)
* [2026-07-17, 21:07:10](https://lobste.rs/s/grutu0/lobsters_interview_with_matheusmoreira) - [Lobsters Interview with matheusmoreira about Lone Lisp](https://alexalejandre.com/interviews/interview-with-matheus-moreira/)
* [2026-07-17, 21:00:00](https://news.slashdot.org/story/26/07/17/1835215/billing-software-error-sends-billion-dollar-aws-estimates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Billing Software Error Sends Billion-Dollar AWS Estimates](https://news.slashdot.org/story/26/07/17/1835215/billing-software-error-sends-billion-dollar-aws-estimates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-17, 20:55:38](https://lobste.rs/s/31bikj/java_story_official_documentary) - [The Java Story | The Official Documentary](https://www.youtube.com/watch?v=ZqGSg4b_cZA)
* [2026-07-17, 20:47:57](https://news.ycombinator.com/item?id=48952135) - [Open Book Touch: open-source e-reader](https://www.crowdsupply.com/oddly-specific-objects/open-book-touch)
* [2026-07-17, 20:41:43](https://news.ycombinator.com/item?id=48952067) - [Topcoat: The full full-stack framework for Rust](https://github.com/tokio-rs/topcoat)
* [2026-07-17, 20:24:55](https://news.ycombinator.com/item?id=48951898) - [Static search trees: 40x faster than binary search (2024)](https://curiouscoding.nl/posts/static-search-tree/)
* [2026-07-17, 20:12:59](https://news.ycombinator.com/item?id=48951780) - [Painting the sides of railroad rails white to reduce derailment](https://www.up.com/news/safety/Tracking-Rail-Heat-260608)
* [2026-07-17, 20:00:00](https://linux.slashdot.org/story/26/07/17/1830258/linus-torvalds-to-critics-of-ai-coding-on-linux-fork-it-or-just-walk-away?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linus Torvalds To Critics of AI Coding On Linux: &apos;Fork It. Or Just Walk Away.&apos;](https://linux.slashdot.org/story/26/07/17/1830258/linus-torvalds-to-critics-of-ai-coding-on-linux-fork-it-or-just-walk-away?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-17, 19:54:44](https://lobste.rs/s/ryksor/learning_few_things_about_running_sqlite) - [Learning a few things about running SQLite](https://jvns.ca/blog/2026/07/17/learning-about-running-sqlite/)
* [2026-07-17, 19:53:06](https://lobste.rs/s/nwp3sm/faulty_towers_vibe_sickness_vibe_bobsled) - [Faulty Towers, vibe sickness, and the vibe bobsled](https://dustycloud.org/blog/faulty-towers-vibe-sickness-and-the-vibe-bobsled/)
* [2026-07-17, 19:41:02](https://news.ycombinator.com/item?id=48951461) - [The Zilog Z80 has turned 50](https://goliath32.com/blog/z80.html)
* [2026-07-17, 19:00:00](https://slashdot.org/story/26/07/17/1820200/china-just-erased-americas-ai-lead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Just Erased America&apos;s AI Lead](https://slashdot.org/story/26/07/17/1820200/china-just-erased-americas-ai-lead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-17, 18:37:33](https://news.ycombinator.com/item?id=48950774) - [Show HN: A zoomable timeline of 4M Wikipedia events](https://app.everything.diena.co/)
* [2026-07-17, 18:21:14](https://news.ycombinator.com/item?id=48950518) - [Lego building instructions through time](https://www.lego.com/en-us/history/articles/d-lego-building-instructions-through-time)
* [2026-07-17, 18:00:00](https://games.slashdot.org/story/26/07/17/1741237/fbi-arrests-man-accused-of-using-steam-games-to-drain-victims-crypto-wallets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FBI Arrests Man Accused of Using Steam Games To Drain Victims&apos; Crypto Wallets](https://games.slashdot.org/story/26/07/17/1741237/fbi-arrests-man-accused-of-using-steam-games-to-drain-victims-crypto-wallets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-17, 17:45:41](https://news.ycombinator.com/item?id=48950122) - [Learning a few things about running SQLite](https://jvns.ca/blog/2026/07/17/learning-about-running-sqlite/)
* [2026-07-17, 17:33:00](https://hardware.slashdot.org/story/26/07/17/1732212/meta-in-talks-to-lease-computing-power-to-anthropic-in-potential-10-billion-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta In Talks To Lease Computing Power To Anthropic In Potential $10 Billion Deal](https://hardware.slashdot.org/story/26/07/17/1732212/meta-in-talks-to-lease-computing-power-to-anthropic-in-potential-10-billion-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-17, 17:33:00](https://soylentnews.org/article.pl?sid=26/07/16/0415252&amp;from=rss) - [Why the Human Body Has So Many Design Flaws](https://soylentnews.org/article.pl?sid=26/07/16/0415252&amp;from=rss)
* [2026-07-17, 16:57:27](https://news.ycombinator.com/item?id=48949551) - [Thanks HN for 15 years of support and helping me find my life&apos;s work](https://news.ycombinator.com/item?id=48949551)
* [2026-07-17, 16:24:13](https://news.ycombinator.com/item?id=48949184) - [Designing emoji for the way we communicate today](https://blog.google/products-and-platforms/platforms/android/world-emoji-day-noto-3d/)
* [2026-07-17, 16:00:00](https://apple.slashdot.org/story/26/07/17/1552258/apple-sends-legal-letters-to-dozens-of-openai-employees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Sends Legal Letters To Dozens of OpenAI Employees](https://apple.slashdot.org/story/26/07/17/1552258/apple-sends-legal-letters-to-dozens-of-openai-employees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-17, 15:00:00](https://news.slashdot.org/story/26/07/17/0046237/kalshi-flags-trumps-teleprompter-operator-for-alleged-insider-trading?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Kalshi Flags Trump&apos;s Teleprompter Operator For Alleged Insider Trading](https://news.slashdot.org/story/26/07/17/0046237/kalshi-flags-trumps-teleprompter-operator-for-alleged-insider-trading?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-17, 14:31:10](https://news.ycombinator.com/item?id=48947825) - [The state of open source AI](https://stateofopensource.ai/)
* [2026-07-17, 14:21:51](https://news.ycombinator.com/item?id=48947717) - [Kimi K3, and what we can still learn from the pelican benchmark](https://simonwillison.net/2026/Jul/16/kimi-k3/)
* [2026-07-17, 14:06:13](https://news.ycombinator.com/item?id=48947560) - [First atmosphere found on Earth-like planet in habitable zone of distant star](https://www.bbc.com/news/articles/cy4kdd1e0ejo)
* [2026-07-17, 14:05:15](https://news.ycombinator.com/item?id=48947548) - [Show HN: Watch bots interact with an SSH honeypot in real time](https://honeypotlive.cc/)
* [2026-07-17, 14:00:04](https://news.ycombinator.com/item?id=48947490) - [Three ways people respond to a problem (other than solving it)](https://improvesomething.today/responses-to-problems/)
* [2026-07-17, 13:32:11](https://news.ycombinator.com/item?id=48947201) - [More Bounce to the Ounce](https://mceglowski.substack.com/p/more-bounce-to-the-ounce)
* [2026-07-17, 13:26:04](https://lobste.rs/s/gxjzgq/fedichat_comic_chat_for_fediverse) - [Fedichat - Comic Chat for the Fediverse](https://lambadalambda.github.io/fedichat/client.html)
* [2026-07-17, 12:51:36](https://lobste.rs/s/u9lvze/we_are_changing_our_developer) - [We are Changing our Developer Productivity Experiment Design](https://metr.org/blog/2026-02-24-uplift-update/)
* [2026-07-17, 12:49:00](https://soylentnews.org/article.pl?sid=26/07/16/0231216&amp;from=rss) - [Microsoft&apos;s Secure Boot Has Been Broken for a Decade and No One Noticed Until Now](https://soylentnews.org/article.pl?sid=26/07/16/0231216&amp;from=rss)
* [2026-07-17, 11:21:45](https://lobste.rs/s/x3xvou/freya_0_4_rust_gui_library) - [Freya 0.4 - Rust GUI library](https://freyaui.dev/posts/0.4)
* [2026-07-17, 11:00:00](https://games.slashdot.org/story/26/07/17/0036224/microsoft-restores-players-25-year-old-account-after-nuking-it-due-to-hacker?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Restores Player&apos;s 25-Year-Old Account After Nuking It Due to Hacker](https://games.slashdot.org/story/26/07/17/0036224/microsoft-restores-players-25-year-old-account-after-nuking-it-due-to-hacker?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-17, 09:42:05](https://news.ycombinator.com/item?id=48945241) - [AWS: Inaccurate Estimated Billing Data – $1.7 billion](https://news.ycombinator.com/item?id=48945241)
* [2026-07-17, 08:31:40](https://lobste.rs/s/1vplvg/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/1vplvg/what_are_you_doing_this_weekend)
* [2026-07-17, 08:07:00](https://soylentnews.org/article.pl?sid=26/07/16/0229204&amp;from=rss) - [Irish Datacenters Now Guzzle 23% of the Country&apos;s Electricity](https://soylentnews.org/article.pl?sid=26/07/16/0229204&amp;from=rss)
* [2026-07-17, 07:00:00](https://science.slashdot.org/story/26/07/17/0029203/astronomers-find-an-atmosphere-on-a-nearby-earth-like-planet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Astronomers Find an Atmosphere On a Nearby Earth-Like Planet](https://science.slashdot.org/story/26/07/17/0029203/astronomers-find-an-atmosphere-on-a-nearby-earth-like-planet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-17, 06:01:54](https://lobste.rs/s/6pdyiy/pact_anonymous_credentials_for_web) - [PACT: Anonymous Credentials for the Web – Mozilla Hacks](https://hacks.mozilla.org/2026/06/pact-anonymous-credentials-for-the-web/)
* [2026-07-17, 03:30:00](https://tech.slashdot.org/story/26/07/17/0022208/truth-social-to-sell-wall-street-firms-the-fastest-access-to-trumps-post?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Truth Social To Sell Wall Street Firms the &apos;Fastest&apos; Access To Trump&apos;s Post](https://tech.slashdot.org/story/26/07/17/0022208/truth-social-to-sell-wall-street-firms-the-fastest-access-to-trumps-post?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-17, 03:23:00](https://soylentnews.org/article.pl?sid=26/07/16/0225242&amp;from=rss) - [Miami-Based City Labs Achieves a First for Commercial Nuclear Power in Space](https://soylentnews.org/article.pl?sid=26/07/16/0225242&amp;from=rss)
* [2026-07-17, 02:23:49](https://lobste.rs/s/fftxis/stop_guard_act_age_verification_laws) - [Stop the GUARD Act and age verification laws worldwide](https://www.fsf.org/blogs/community/stop-the-guard-act)
* [2026-07-17, 00:18:37](https://lobste.rs/s/4dcp6w/here_s_how_i_host_my_own_aim_server) - [Here&apos;s how I host my own AIM server](https://veronicaexplains.net/open-oscar-server/)
* [2026-07-16, 23:00:00](https://hardware.slashdot.org/story/26/07/16/2210245/hp-fined-14-million-for-cartelization-of-ink-cartridges-toner-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [HP Fined $14 Million For &apos;Cartelization&apos; of Ink Cartridges, Toner, PCs](https://hardware.slashdot.org/story/26/07/16/2210245/hp-fined-14-million-for-cartelization-of-ink-cartridges-toner-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-16, 22:36:00](https://soylentnews.org/article.pl?sid=26/07/15/1458200&amp;from=rss) - [New York is the First US State to Ban Smart Glasses in All its Courthouses](https://soylentnews.org/article.pl?sid=26/07/15/1458200&amp;from=rss)
* [2026-07-16, 22:03:22](https://lobste.rs/s/y3qqzv/zilog_z80_has_turned_50) - [The Zilog Z80 has turned 50](https://goliath32.com/blog/z80.html)
* [2026-07-16, 22:00:00](https://news.slashdot.org/story/26/07/16/2158219/tsmc-to-invest-additional-100-billion-in-arizona?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [TSMC To Invest Additional $100 Billion In Arizona](https://news.slashdot.org/story/26/07/16/2158219/tsmc-to-invest-additional-100-billion-in-arizona?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-16, 17:51:00](https://soylentnews.org/article.pl?sid=26/07/15/1451242&amp;from=rss) - [FreeBSD 16 Retires the Last of its GPL Code From its Base System](https://soylentnews.org/article.pl?sid=26/07/15/1451242&amp;from=rss)
* [2026-07-16, 16:43:15](https://lobste.rs/s/qbvfll/microsoft_comic_chat_is_now_open_source) - [Microsoft Comic Chat is now open source](https://opensource.microsoft.com/blog/2026/07/16/microsoft-comic-chat-is-now-open-source/)
* [2026-07-16, 15:39:50](https://lobste.rs/s/1clqwe/we_re_building_postgres_rust_using_llvm) - [We&apos;re building Postgres in Rust. Using the LLVM of databases](https://turso.tech/blog/a-new-modern-version-of-postgres-in-rust)
* [2026-07-16, 13:51:27](https://lobste.rs/s/wveduf/readme_not) - [README, not](https://blog.yossarian.net/2026/07/16/README-not)
* [2026-07-16, 11:31:41](https://lobste.rs/s/axdfjx/how_our_rust_zig_rewrite_is_going) - [How Our Rust-to-Zig Rewrite is Going](https://rtfeldman.com/rust-to-zig)
* [2026-07-16, 11:07:00](https://soylentnews.org/article.pl?sid=26/07/15/0038203&amp;from=rss) - [Meta Data Center Water Discharges Suspended After Contaminating The City&apos;s Reclamation Water Supply ](https://soylentnews.org/article.pl?sid=26/07/15/0038203&amp;from=rss)
* [2026-07-16, 10:01:50](https://lobste.rs/s/giyb8x/forgejo_v16_0_is_available) - [Forgejo v16.0 is available](https://forgejo.org/2026-07-release-v16-0/)
* [2026-07-16, 06:15:00](https://soylentnews.org/article.pl?sid=26/07/15/0036236&amp;from=rss) - [RAMpocalyse Pricing Prompts Maker To Construct His Own Memory Using Ancient Apollo-Era Tech](https://soylentnews.org/article.pl?sid=26/07/15/0036236&amp;from=rss)
* [2026-07-16, 03:19:34](https://lobste.rs/s/pb6d8m/linus_torvalds_on_llm_usage_kernel) - [Linus Torvalds on LLM usage in kernel development](https://lore.kernel.org/linux-media/CAHk-=wi4zC+Ze8e+p3tMv8TtG_80KzsZ1syL9anBtmEh5Z40vg@mail.gmail.com/)
* [2026-07-16, 01:32:00](https://soylentnews.org/article.pl?sid=26/07/15/0034229&amp;from=rss) - [Mapped: Where It Costs the Most to Own a Car in America](https://soylentnews.org/article.pl?sid=26/07/15/0034229&amp;from=rss)
* [2026-07-15, 20:50:00](https://soylentnews.org/article.pl?sid=26/07/15/0032228&amp;from=rss) - [‘STEM Is Not Just About Formulas And Calculations, It Is Also About Creativity’](https://soylentnews.org/article.pl?sid=26/07/15/0032228&amp;from=rss)
* [2026-07-15, 19:34:54](https://lobste.rs/s/2nry82/sqlite_should_have_rust_style_editions) - [SQLite should have (Rust-style) editions](https://mort.coffee/home/sqlite-editions/)
* [2026-07-15, 16:04:00](https://soylentnews.org/article.pl?sid=26/07/14/0547216&amp;from=rss) - [AI Servers Will Consume More Power Than All Conventional Data Centers Combined By 2027](https://soylentnews.org/article.pl?sid=26/07/14/0547216&amp;from=rss)
* [2026-07-15, 11:19:00](https://soylentnews.org/article.pl?sid=26/07/14/0543205&amp;from=rss) - [AI Coding Agents Can be Tricked Into Installing Malware Via &apos;Clean&apos; GitHub Repositories](https://soylentnews.org/article.pl?sid=26/07/14/0543205&amp;from=rss)
* [2026-07-15, 06:29:00](https://soylentnews.org/article.pl?sid=26/07/14/0540206&amp;from=rss) - [MPs Tell NHS to Start Packing Palantir&apos;s Bags Ahead of 2027 Contract Break](https://soylentnews.org/article.pl?sid=26/07/14/0540206&amp;from=rss)
* [2026-07-15, 01:42:00](https://soylentnews.org/article.pl?sid=26/07/14/0538220&amp;from=rss) - [Microsoft Admits Windows 11 Has a GDID Tracker With No Off Switch](https://soylentnews.org/article.pl?sid=26/07/14/0538220&amp;from=rss)
* [2026-07-14, 21:02:00](https://soylentnews.org/article.pl?sid=26/07/12/2153233&amp;from=rss) - [This UK Satellite&apos;s Thermal Camera Raises Major Privacy Concerns](https://soylentnews.org/article.pl?sid=26/07/12/2153233&amp;from=rss)
* [2026-07-14, 17:53:06](https://news.ycombinator.com/item?id=48910579) - [MoonBASIC: A modern BASIC for building 2D and 3D games](https://github.com/CharmingBlaze/moonbasic)
* [2026-07-14, 16:06:00](https://soylentnews.org/article.pl?sid=26/07/12/2149242&amp;from=rss) - [US Weighs Removing Steering Wheel Requirement For Driverless Cars](https://soylentnews.org/article.pl?sid=26/07/12/2149242&amp;from=rss)
* [2026-07-14, 12:59:58](https://news.ycombinator.com/item?id=48906171) - [An Update on Igalia&apos;s Layer Based SVG Engine in WebKit (Reducing Layer Overhead)](https://blogs.igalia.com/nzimmermann/posts/2026-07-14-lbse-conditional-layers/)
* [2026-07-14, 11:22:00](https://soylentnews.org/article.pl?sid=26/07/12/2143209&amp;from=rss) - [Scientist Models Way To Make Sure No One&apos;s Violating The Ban On Nuclear Weapons In Space](https://soylentnews.org/article.pl?sid=26/07/12/2143209&amp;from=rss)
* [2026-07-14, 06:45:00](https://soylentnews.org/article.pl?sid=26/07/12/2137226&amp;from=rss) - [Utility Companies Want To Take Control Of Your Home&apos;s Smart Thermostat](https://soylentnews.org/article.pl?sid=26/07/12/2137226&amp;from=rss)
* [2026-07-14, 02:00:00](https://soylentnews.org/article.pl?sid=26/07/12/2132224&amp;from=rss) - [New Horizons Pluto Probe Just Woke Itself Up After 321 Days Of Hibernation](https://soylentnews.org/article.pl?sid=26/07/12/2132224&amp;from=rss)
