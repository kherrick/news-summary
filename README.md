# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and AI Innovations

* [New Kindle Feature Uses AI To Answer Questions About Books - And Authors Can't Opt Out](https://news.slashdot.org/story/25/12/12/2046226/new-kindle-feature-uses-ai-to-answer-questions-about-books---and-authors-cant-opt-out?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Amazon Prime Video Pulls AI-Powered Recaps After Fallout Flub](https://entertainment.slashdot.org/story/25/12/12/2036218/amazon-prime-video-pulls-ai-powered-recaps-after-fallout-flub?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Google releases its new Google Sans Flex font as open source](https://www.omgubuntu.co.uk/2025/11/google-sans-flex-font-ubuntu)

* [Secondary school maths showing that AI systems don't think](https://www.raspberrypi.org/blog/secondary-school-maths-showing-that-ai-systems-dont-think/)

* [Building Trustworthy AI Agents](https://www.schneier.com/blog/archives/2025/12/building-trustworthy-ai-agents.html)

* [AI Favors Texts Written by Other AIs, Even When They're Worse Than Human Ones](https://soylentnews.org/article.pl?sid=25/12/10/1242208&from=rss)

## Tech Infrastructure and Security

* [Home Depot GitHub token exposed for a year, granted access to internal systems](https://techcrunch.com/2025/12/12/home-depot-exposed-access-to-internal-systems-for-a-year-says-researcher/)

* [Security issues with electronic invoices](https://invoice.secvuln.info/)

* [Framework Raises DDR5 Memory Prices by 50% for DIY Laptops](https://www.phoronix.com/news/Framework-50p-DDR5-Memory)

## Cultural and Political Impacts

* [Arkansas Becoming 1st State To Sever Ties With PBS, Effective July 1](https://entertainment.slashdot.org/story/25/12/12/2040247/arkansas-becoming-1st-state-to-sever-ties-with-pbs-effective-july-1?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [ICEBlock App Sues Trump Administration for Censorship and 'Unlawful Threats'](https://soylentnews.org/article.pl?sid=25/12/11/0157235&from=rss)

* [Washington Post's AI-Generated Podcasts Rife With Errors, Fictional Quotes](https://news.slashdot.org/story/25/12/12/1526213/washington-posts-ai-generated-podcasts-rife-with-errors-fictional-quotes?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Hollywood Director Found Guilty of Blowing $11 Million Netflix Budget on Crypto and Ferraris](https://yro.slashdot.org/story/25/12/12/1428243/hollywood-director-found-guilty-of-blowing-11-million-netflix-budget-on-crypto-and-ferraris?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Science and Research

* [String theory inspires a brilliant, baffling new math proof](https://www.quantamagazine.org/string-theory-inspires-a-brilliant-baffling-new-math-proof-20251212/)

* [Cadmium Zinc Telluride: The Wonder Material Powering a Medical 'Revolution'](https://science.slashdot.org/story/25/12/12/0346227/cadmium-zinc-telluride-the-wonder-material-powering-a-medical-revolution?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Funerary figurines found in royal tomb identifies Pharaoh](https://www.sciencealert.com/trove-of-225-exceptional-egyptian-figurines-solves-long-standing-mystery)

## Space and Exploration

* [Planned Satellite Constellations May Swamp Future Orbiting Telescopes](https://soylentnews.org/article.pl?sid=25/12/10/023246&from=rss)

* [97% of Buildings On Earth 3D-Mapped](https://news.slashdot.org/story/25/12/11/2333243/97-of-buildings-on-earth-3d-mapped?utm_source=rss1.0mainlinkanon&utm_medium=feed)

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

* [2025-12-12, 21:40:00](https://news.slashdot.org/story/25/12/12/2046226/new-kindle-feature-uses-ai-to-answer-questions-about-books---and-authors-cant-opt-out?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Kindle Feature Uses AI To Answer Questions About Books - And Authors Can&apos;t Opt Out](https://news.slashdot.org/story/25/12/12/2046226/new-kindle-feature-uses-ai-to-answer-questions-about-books---and-authors-cant-opt-out?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-12, 21:00:54](https://news.ycombinator.com/item?id=46248892) - [Motion (YC W20) Is Hiring Senior Staff Front End Engineers](https://jobs.ashbyhq.com/motion/715d9646-27d4-44f6-9229-61eb0380ae39)
* [2025-12-12, 21:00:00](https://entertainment.slashdot.org/story/25/12/12/2040247/arkansas-becoming-1st-state-to-sever-ties-with-pbs-effective-july-1?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Arkansas Becoming 1st State To Sever Ties With PBS, Effective July 1](https://entertainment.slashdot.org/story/25/12/12/2040247/arkansas-becoming-1st-state-to-sever-ties-with-pbs-effective-july-1?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-12, 20:57:34](https://news.ycombinator.com/item?id=46248859) - [GNU Unifont](https://unifoundry.com/unifont/index.html)
* [2025-12-12, 20:41:38](https://news.ycombinator.com/item?id=46248644) - [macOS 26.2 enables fast AI clusters with RDMA over Thunderbolt](https://developer.apple.com/documentation/macos-release-notes/macos-26_2-release-notes#RDMA-over-Thunderbolt)
* [2025-12-12, 20:41:16](https://lobste.rs/s/fkbmwj/pure_vs_impure_iterators_go) - [Pure vs. impure iterators in Go](https://jub0bs.com/posts/2025-05-29-pure-vs-impure-iterators-in-go/)
* [2025-12-12, 20:36:00](https://entertainment.slashdot.org/story/25/12/12/2036218/amazon-prime-video-pulls-ai-powered-recaps-after-fallout-flub?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Prime Video Pulls AI-Powered Recaps After Fallout Flub](https://entertainment.slashdot.org/story/25/12/12/2036218/amazon-prime-video-pulls-ai-powered-recaps-after-fallout-flub?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-12, 20:28:41](https://news.ycombinator.com/item?id=46248470) - [Security issues with electronic invoices](https://invoice.secvuln.info/)
* [2025-12-12, 20:26:57](https://lobste.rs/s/lwmaa9/security_issues_with_electronic) - [Security Issues with Electronic Invoices](https://invoice.secvuln.info/)
* [2025-12-12, 20:24:04](https://news.ycombinator.com/item?id=46248417) - [New Kindle feature uses AI to answer questions about books](https://reactormag.com/new-kindle-feature-ai-answer-questions-books-authors/)
* [2025-12-12, 20:15:58](https://news.ycombinator.com/item?id=46248323) - [Rats Play Doom](https://ratsplaydoom.com/)
* [2025-12-12, 19:41:46](https://news.ycombinator.com/item?id=46247919) - [The Average Founder Ages 6 Months Each Year](https://tomtunguz.com/founder-age-median-trend/)
* [2025-12-12, 19:36:00](https://soylentnews.org/article.pl?sid=25/12/11/0157235&amp;from=rss) - [ICEBlock App Sues Trump Administration for Censorship and &apos;Unlawful Threats&apos;](https://soylentnews.org/article.pl?sid=25/12/11/0157235&amp;from=rss)
* [2025-12-12, 19:13:35](https://news.ycombinator.com/item?id=46247605) - [The true story of the Windows 3.1 &apos;Hot Dog Stand&apos; color scheme](https://www.pcgamer.com/software/windows/windows-3-1-included-a-red-and-yellow-hot-dog-stand-color-scheme-so-garish-it-was-long-assumed-to-be-a-joke-so-i-tracked-down-the-original-designer-to-get-the-true-story/)
* [2025-12-12, 18:32:39](https://lobste.rs/s/oo7ovk/my_python_setup_december_2025) - [My Python setup, December 2025](https://chrisamico.com/blog/2025-12-07/uv-new-python-setup/)
* [2025-12-12, 18:30:00](https://yro.slashdot.org/story/25/12/12/1830239/berlin-approves-new-expansion-of-police-surveillance-powers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Berlin Approves New Expansion of Police Surveillance Powers](https://yro.slashdot.org/story/25/12/12/1830239/berlin-approves-new-expansion-of-police-surveillance-powers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-12, 18:23:21](https://news.ycombinator.com/item?id=46247000) - [Home Depot GitHub token exposed for a year, granted access to internal systems](https://techcrunch.com/2025/12/12/home-depot-exposed-access-to-internal-systems-for-a-year-says-researcher/)
* [2025-12-12, 18:21:22](https://lobste.rs/s/23lzm2/50_years_proof_assistants) - [50 years of proof assistants](https://lawrencecpaulson.github.io//2025/12/05/History_of_Proof_Assistants.html)
* [2025-12-12, 18:12:05](https://lobste.rs/s/aeu3bf/yocaml_framework_used_describe_static) - [YOCaml a framework used to describe static site generator](https://yocaml.github.io/tutorial/index.html)
* [2025-12-12, 18:07:57](https://news.ycombinator.com/item?id=46246802) - [Google releases its new Google Sans Flex font as open source](https://www.omgubuntu.co.uk/2025/11/google-sans-flex-font-ubuntu)
* [2025-12-12, 17:32:48](https://news.ycombinator.com/item?id=46246395) - [Nuclear energy key to decarbonising Europe, says EESC](https://www.eesc.europa.eu/en/news-media/news/nuclear-energy-key-decarbonising-europe-says-eesc)
* [2025-12-12, 17:25:00](https://news.slashdot.org/story/25/12/12/1655239/apple-tax-is-dead-in-the-usa?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Apple Tax is Dead in the USA&apos;](https://news.slashdot.org/story/25/12/12/1655239/apple-tax-is-dead-in-the-usa?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-12, 17:18:19](https://lobste.rs/s/s9uxqa/django_what_s_new_6_0) - [Django: what’s new in 6.0](https://adamj.eu/tech/2025/12/03/django-whats-new-6.0/)
* [2025-12-12, 16:59:04](https://news.ycombinator.com/item?id=46246006) - [Japan law opening phone app stores to go into effect](https://www3.nhk.or.jp/nhkworld/en/news/20251210_B1/)
* [2025-12-12, 16:52:41](https://news.ycombinator.com/item?id=46245923) - [Async DNS](https://flak.tedunangst.com/post/async-dns)
* [2025-12-12, 16:44:00](https://slashdot.org/story/25/12/12/1643211/china-leads-research-in-90-of-crucial-technologies---a-dramatic-shift-this-century?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Leads Research in 90% of Crucial Technologies - a Dramatic Shift this Century](https://slashdot.org/story/25/12/12/1643211/china-leads-research-in-90-of-crucial-technologies---a-dramatic-shift-this-century?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-12, 16:32:43](https://news.ycombinator.com/item?id=46245731) - [Secondary school maths showing that AI systems don&apos;t think](https://www.raspberrypi.org/blog/secondary-school-maths-showing-that-ai-systems-dont-think/)
* [2025-12-12, 16:25:49](https://lobste.rs/s/2dh57o/async_dns) - [async dns](https://flak.tedunangst.com/post/async-dns)
* [2025-12-12, 16:23:10](https://news.ycombinator.com/item?id=46245622) - [String theory inspires a brilliant, baffling new math proof](https://www.quantamagazine.org/string-theory-inspires-a-brilliant-baffling-new-math-proof-20251212/)
* [2025-12-12, 16:05:00](https://news.slashdot.org/story/25/12/12/1537259/the-immediate-post-college-transition-and-its-role-in-socioeconomic-earnings-gaps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Immediate Post-College Transition and its Role in Socioeconomic Earnings Gaps](https://news.slashdot.org/story/25/12/12/1537259/the-immediate-post-college-transition-and-its-role-in-socioeconomic-earnings-gaps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-12, 16:04:16](https://news.ycombinator.com/item?id=46245398) - [Epic celebrates \&quot;the end of the Apple Tax\&quot; after court win in iOS payments case](https://arstechnica.com/tech-policy/2025/12/epic-celebrates-the-end-of-the-apple-tax-after-appeals-court-win-in-ios-payments-case/)
* [2025-12-12, 16:00:36](https://lobste.rs/s/fafy2d/code_centric_journey_into_gleam_language) - [A Code Centric Journey Into the Gleam Language](https://www.youtube.com/watch?v=LMrKEaAi4RI)
* [2025-12-12, 15:58:10](https://news.ycombinator.com/item?id=46245331) - [Framework Raises DDR5 Memory Prices by 50% for DIY Laptops](https://www.phoronix.com/news/Framework-50p-DDR5-Memory)
* [2025-12-12, 15:44:31](https://lobste.rs/s/ouph7k/i_couldn_t_find_logging_library_worked_for) - [I couldn&apos;t find a logging library that worked for my library, so I made one](https://hackers.pub/@hongminhee/2025/logtape-fedify-case-study)
* [2025-12-12, 15:26:00](https://news.slashdot.org/story/25/12/12/1526213/washington-posts-ai-generated-podcasts-rife-with-errors-fictional-quotes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Washington Post&apos;s AI-Generated Podcasts Rife With Errors, Fictional Quotes](https://news.slashdot.org/story/25/12/12/1526213/washington-posts-ai-generated-podcasts-rife-with-errors-fictional-quotes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-12, 15:19:19](https://news.ycombinator.com/item?id=46244922) - [CM0 – A new Raspberry Pi you can&apos;t buy](https://www.jeffgeerling.com/blog/2025/cm0-new-raspberry-pi-you-cant-buy)
* [2025-12-12, 15:08:46](https://lobste.rs/s/wqoq6t/building_trustworthy_ai_agents) - [Building Trustworthy AI Agents](https://www.schneier.com/blog/archives/2025/12/building-trustworthy-ai-agents.html)
* [2025-12-12, 14:54:00](https://soylentnews.org/article.pl?sid=25/12/11/0150219&amp;from=rss) - [Ubuntu to Offer AMD ROCm Packages for AI Processing](https://soylentnews.org/article.pl?sid=25/12/11/0150219&amp;from=rss)
* [2025-12-12, 14:40:00](https://yro.slashdot.org/story/25/12/12/1428243/hollywood-director-found-guilty-of-blowing-11-million-netflix-budget-on-crypto-and-ferraris?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hollywood Director Found Guilty of Blowing $11 Million Netflix Budget on Crypto and Ferraris](https://yro.slashdot.org/story/25/12/12/1428243/hollywood-director-found-guilty-of-blowing-11-million-netflix-budget-on-crypto-and-ferraris?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-12, 14:20:20](https://news.ycombinator.com/item?id=46244378) - [BpfJailer: eBPF Mandatory Access Control [pdf]](https://lpc.events/event/19/contributions/2159/attachments/1833/3929/BpfJailer%20LPC%202025.pdf)
* [2025-12-12, 14:01:00](https://tech.slashdot.org/story/25/12/12/141238/major-automakers-say-china-poses-clear-and-present-threat-to-us-auto-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Major Automakers Say China Poses &apos;Clear and Present Threat&apos; To US Auto Industry](https://tech.slashdot.org/story/25/12/12/141238/major-automakers-say-china-poses-clear-and-present-threat-to-us-auto-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-12, 13:37:05](https://lobste.rs/s/ytelgx/rethinking_sudo_with_object) - [Rethinking sudo with object capabilities](https://ariadne.space/2025/12/12/rethinking-sudo-with-object-capabilities.html)
* [2025-12-12, 13:25:19](https://news.ycombinator.com/item?id=46243904) - [SQLite JSON at full index speed using generated columns](https://www.dbpro.app/blog/sqlite-json-virtual-columns-indexing)
* [2025-12-12, 13:23:31](https://news.ycombinator.com/item?id=46243883) - [Fedora: Open-source repository for long-term digital preservation](https://fedorarepository.org/)
* [2025-12-12, 13:00:00](https://yro.slashdot.org/story/25/12/12/041226/reddit-launches-high-court-challenge-to-australias-under-16s-social-media-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Reddit Launches High Court Challenge To Australia&apos;s Under-16s Social Media Ban](https://yro.slashdot.org/story/25/12/12/041226/reddit-launches-high-court-challenge-to-australias-under-16s-social-media-ban?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-12, 10:46:40](https://lobste.rs/s/zi1xf6/building_smaller_docker_images_faster) - [Building smaller Docker images faster](https://sgt.hootr.club/blog/docker-protips/)
* [2025-12-12, 10:07:00](https://soylentnews.org/article.pl?sid=25/12/10/2258243&amp;from=rss) - [Porsche Panic in Russia as Pricey Status Symbols Forget How to Car](https://soylentnews.org/article.pl?sid=25/12/10/2258243&amp;from=rss)
* [2025-12-12, 10:00:00](https://yro.slashdot.org/story/25/12/12/0354219/sec-gives-dtcc-ok-to-tokenize-stocks-in-move-to-blockchain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SEC Gives DTCC OK to Tokenize Stocks In Move To Blockchain](https://yro.slashdot.org/story/25/12/12/0354219/sec-gives-dtcc-ok-to-tokenize-stocks-in-move-to-blockchain?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-12, 09:53:15](https://lobste.rs/s/192yxw/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/192yxw/what_are_you_doing_this_weekend)
* [2025-12-12, 07:35:49](https://news.ycombinator.com/item?id=46241763) - [The tiniest yet real telescope I&apos;ve built](https://lucassifoni.info/blog/miniscope-tiny-telescope/)
* [2025-12-12, 07:00:00](https://science.slashdot.org/story/25/12/12/0346227/cadmium-zinc-telluride-the-wonder-material-powering-a-medical-revolution?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cadmium Zinc Telluride: The Wonder Material Powering a Medical &apos;Revolution&apos;](https://science.slashdot.org/story/25/12/12/0346227/cadmium-zinc-telluride-the-wonder-material-powering-a-medical-revolution?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-12, 06:15:48](https://lobste.rs/s/cxhdjd/freeing_xiaomi_humidifier_from_cloud) - [Freeing a Xiaomi Humidifier from the Cloud](https://0l.de/blog/2025/11/xiaomi-humidifier/)
* [2025-12-12, 05:56:21](https://lobste.rs/s/g1o2t8/guarding_my_git_forge_against_ai_scrapers) - [Guarding My Git Forge Against AI Scrapers](https://vulpinecitrus.info/blog/guarding-git-forge-ai-scrapers/)
* [2025-12-12, 05:22:00](https://soylentnews.org/article.pl?sid=25/12/10/2256226&amp;from=rss) - [Pebble Index 01 Arrives as a Private Open Source Voice Capture Ring](https://soylentnews.org/article.pl?sid=25/12/10/2256226&amp;from=rss)
* [2025-12-12, 03:35:25](https://lobste.rs/s/lzmklx/being_sysadmin_is_hard) - [Being a SysAdmin is hard](https://about.tree.ht/blog/treehut-outages-december-2025)
* [2025-12-12, 03:30:00](https://yro.slashdot.org/story/25/12/11/2239200/terrausd-creator-do-kwon-sentenced-to-15-years-over-40-billion-crypto-collapse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [TerraUSD Creator Do Kwon Sentenced To 15 Years Over $40 Billion Crypto Collapse](https://yro.slashdot.org/story/25/12/11/2239200/terrausd-creator-do-kwon-sentenced-to-15-years-over-40-billion-crypto-collapse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-12, 02:02:00](https://news.slashdot.org/story/25/12/11/2333243/97-of-buildings-on-earth-3d-mapped?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [97% of Buildings On Earth 3D-Mapped](https://news.slashdot.org/story/25/12/11/2333243/97-of-buildings-on-earth-3d-mapped?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-12, 01:41:22](https://lobste.rs/s/zyvhp9/pop_goes_population_count) - [Pop goes the...population count?](https://xania.org/202512/11-pop-goes-the-weasel-er-count)
* [2025-12-12, 00:39:00](https://soylentnews.org/article.pl?sid=25/12/10/2252241&amp;from=rss) - [Russia Says It Might Build its Own Linux Community After Removal of Several Kernel Maintainers](https://soylentnews.org/article.pl?sid=25/12/10/2252241&amp;from=rss)
* [2025-12-11, 22:23:20](https://lobste.rs/s/lchmal/oils_0_37_0_alpine_linux_ysh_mycpp) - [Oils 0.37.0 - Alpine Linux, YSH, and mycpp](https://oils.pub/blog/2025/12/release-0.37.0.html)
* [2025-12-11, 20:48:49](https://lobste.rs/s/v5umfb/bidicalc_bidirectional_calculator) - [bidicalc: a bidirectional calculator](https://victorpoughon.github.io/bidicalc/)
* [2025-12-11, 19:56:00](https://soylentnews.org/article.pl?sid=25/12/10/2248258&amp;from=rss) - [ER Doctors Are Sounding the Alarm on a Fast-Growing Cannabis Illness](https://soylentnews.org/article.pl?sid=25/12/10/2248258&amp;from=rss)
* [2025-12-11, 19:48:06](https://lobste.rs/s/u7yz80/installing_every_nixos_package) - [Installing Every NixOS Package](https://unnamed.website/posts/installing-every-nixos-package/)
* [2025-12-11, 19:37:35](https://lobste.rs/s/jyl2j6/pop_os_24_04_lts_released_letter_from_our) - [Pop!_OS 24.04 LTS Released: A Letter From Our Founder](https://blog.system76.com/post/pop-os-letter-from-our-founder)
* [2025-12-11, 17:59:30](https://lobste.rs/s/p20st3/litestream_vfs) - [Litestream VFS](https://fly.io/blog/litestream-vfs/)
* [2025-12-11, 17:28:05](https://lobste.rs/s/ueglwk/cosmic_desktop_is_fantastic_first_draft) - [Cosmic Desktop is a fantastic first draft](https://www.youtube.com/watch?v=ob-Y77kuVwM)
* [2025-12-11, 16:33:14](https://lobste.rs/s/3ejc1u/announcing_rust_1_92_0) - [Announcing Rust 1.92.0](https://blog.rust-lang.org/2025/12/11/Rust-1.92.0)
* [2025-12-11, 15:07:00](https://soylentnews.org/article.pl?sid=25/12/10/1242208&amp;from=rss) - [AI Favors Texts Written by Other AIs, Even When They&apos;re Worse Than Human Ones](https://soylentnews.org/article.pl?sid=25/12/10/1242208&amp;from=rss)
* [2025-12-11, 14:45:49](https://news.ycombinator.com/item?id=46232003) - [From text to token: How tokenization pipelines work](https://www.paradedb.com/blog/when-tokenization-becomes-token)
* [2025-12-11, 12:48:49](https://lobste.rs/s/x49jb2/let_s_embed_go_program_into_linux_kernel) - [Let&apos;s Embed a Go Program into the Linux Kernel](https://sigma-star.at/blog/2023/07/embedded-go-prog/)
* [2025-12-11, 10:25:00](https://soylentnews.org/article.pl?sid=25/12/10/0213247&amp;from=rss) - [Proton Launches Encrypted Sheets as a Privacy-First Alternative to Google, Microsoft Excel](https://soylentnews.org/article.pl?sid=25/12/10/0213247&amp;from=rss)
* [2025-12-11, 05:48:00](https://soylentnews.org/article.pl?sid=25/12/10/0211215&amp;from=rss) - [This German State Decides to Save €15 Million Each Year By Kicking Out Microsoft for Open Source](https://soylentnews.org/article.pl?sid=25/12/10/0211215&amp;from=rss)
* [2025-12-11, 00:52:00](https://soylentnews.org/article.pl?sid=25/12/10/027248&amp;from=rss) - [Chattanooga&apos;s Municipal Fiber Network Has Delivered $5.3 Billion in Community Benefits](https://soylentnews.org/article.pl?sid=25/12/10/027248&amp;from=rss)
* [2025-12-10, 20:11:00](https://soylentnews.org/article.pl?sid=25/12/10/023246&amp;from=rss) - [Planned Satellite Constellations May Swamp Future Orbiting Telescopes](https://soylentnews.org/article.pl?sid=25/12/10/023246&amp;from=rss)
* [2025-12-10, 17:14:39](https://news.ycombinator.com/item?id=46220411) - [Pg_ClickHouse: A Postgres extension for querying ClickHouse](https://clickhouse.com/blog/introducing-pg_clickhouse)
* [2025-12-10, 15:25:00](https://soylentnews.org/article.pl?sid=25/12/08/1621249&amp;from=rss) - [Germany Bets Billions on Nuclear Fusion for Energy Future](https://soylentnews.org/article.pl?sid=25/12/08/1621249&amp;from=rss)
* [2025-12-10, 10:43:00](https://soylentnews.org/article.pl?sid=25/12/08/1614203&amp;from=rss) - [A Therapeutic HPV Vaccine Shrank Cervical Tumors in Mice](https://soylentnews.org/article.pl?sid=25/12/08/1614203&amp;from=rss)
* [2025-12-10, 05:52:00](https://soylentnews.org/article.pl?sid=25/12/08/1611257&amp;from=rss) - [Zig Quits GitHub, Says Microsoft&apos;s AI Obsession Has Ruined the Service](https://soylentnews.org/article.pl?sid=25/12/08/1611257&amp;from=rss)
* [2025-12-10, 01:09:00](https://soylentnews.org/article.pl?sid=25/12/08/0456233&amp;from=rss) - [This Cellular Trick Helps Cancer Spread, but Could Also Stop It](https://soylentnews.org/article.pl?sid=25/12/08/0456233&amp;from=rss)
* [2025-12-09, 20:23:00](https://soylentnews.org/article.pl?sid=25/12/08/0455213&amp;from=rss) - [Samsung&apos;s First Tri-Fold Phone is Here: Everything You Need to Know](https://soylentnews.org/article.pl?sid=25/12/08/0455213&amp;from=rss)
* [2025-12-09, 15:39:00](https://soylentnews.org/article.pl?sid=25/12/08/0152232&amp;from=rss) - [Complex Life Started Nearly a Billion Years Earlier Than We Thought](https://soylentnews.org/article.pl?sid=25/12/08/0152232&amp;from=rss)
* [2025-12-09, 10:51:00](https://soylentnews.org/article.pl?sid=25/12/08/0146206&amp;from=rss) - [US Wants Laws to Force App Store Age Checks, Despite Apple&apos;s Existing Protections](https://soylentnews.org/article.pl?sid=25/12/08/0146206&amp;from=rss)
* [2025-12-09, 06:03:00](https://soylentnews.org/article.pl?sid=25/12/08/0143259&amp;from=rss) - [Common Desktop Environment \&quot;CDE\&quot; 2.5.3 Released After Two Years](https://soylentnews.org/article.pl?sid=25/12/08/0143259&amp;from=rss)
* [2025-12-09, 02:25:28](https://news.ycombinator.com/item?id=46200562) - [Open sourcing the Remix Store](https://remix.run/blog/oss-remix-store)
* [2025-12-09, 01:21:00](https://soylentnews.org/article.pl?sid=25/12/07/1532244&amp;from=rss) - [Improved Truncated Wigner Approximation Makes Quantum Calcs on Classical Computers More Accessible](https://soylentnews.org/article.pl?sid=25/12/07/1532244&amp;from=rss)
* [2025-12-08, 20:34:00](https://soylentnews.org/article.pl?sid=25/12/07/1527246&amp;from=rss) - [San Francisco Sues Nation&apos;s Top Food Manufacturers Over Ultraprocessed Foods](https://soylentnews.org/article.pl?sid=25/12/07/1527246&amp;from=rss)
* [2025-12-08, 15:45:00](https://soylentnews.org/article.pl?sid=25/12/07/1521257&amp;from=rss) - [Soaring DDR5 Prices Lead to Falling Motherboard Sales and Calls for Gamers to Boycott RAM](https://soylentnews.org/article.pl?sid=25/12/07/1521257&amp;from=rss)
* [2025-12-08, 13:20:19](https://news.ycombinator.com/item?id=46191890) - [Bit flips: How cosmic rays grounded a fleet of aircraft](https://www.bbc.com/future/article/20251201-how-cosmic-rays-grounded-thousands-of-aircraft)
* [2025-12-08, 11:37:09](https://news.ycombinator.com/item?id=46191122) - [Good conversations have lots of doorknobs (2022)](https://www.experimental-history.com/p/good-conversations-have-lots-of-doorknobs)
* [2025-12-08, 11:04:00](https://soylentnews.org/article.pl?sid=25/12/07/1514234&amp;from=rss) - [Debian&apos;s APT Will Require a Rust Compiler](https://soylentnews.org/article.pl?sid=25/12/07/1514234&amp;from=rss)
* [2025-12-08, 07:24:49](https://news.ycombinator.com/item?id=46189395) - [Microservices should form a polytree](https://bytesauna.com/post/microservices)
* [2025-12-08, 06:24:00](https://soylentnews.org/article.pl?sid=25/12/07/1510243&amp;from=rss) - [New Jolla Phone Now Available for Pre-Order as an Independent Linux Phone](https://soylentnews.org/article.pl?sid=25/12/07/1510243&amp;from=rss)
* [2025-12-08, 05:43:27](https://news.ycombinator.com/item?id=46188800) - [Funerary figurines found in royal tomb identifies Pharoah](https://www.sciencealert.com/trove-of-225-exceptional-egyptian-figurines-solves-long-standing-mystery)
* [2025-12-08, 02:06:00](https://soylentnews.org/article.pl?sid=25/12/08/0147224&amp;from=rss) - [Recreating the Lost SDK for a 42-Year-Old Operating System: VisiCorp Visi on](https://soylentnews.org/article.pl?sid=25/12/08/0147224&amp;from=rss)
* [2025-12-08, 01:38:00](https://soylentnews.org/article.pl?sid=25/12/06/1419220&amp;from=rss) - [Waymo Drives Straight Into Active Police Scene, Ignores Chaos](https://soylentnews.org/article.pl?sid=25/12/06/1419220&amp;from=rss)
