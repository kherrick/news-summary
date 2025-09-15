# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Developments

* [Linking to text fragments with a bookmarklet](https://alexwlchan.net/2025/text-fragments-bookmarklet) ([comments](https://lobste.rs/s/jkc7xi/linking_text_fragments_with_bookmarklet)) - A guide to linking specific text fragments on web pages using a bookmarklet for improved navigation.

* [Celestia – real-time 3D visualization of space](https://celestiaproject.space/) ([comments](https://news.ycombinator.com/item?id=45246403)) - Explore space in real-time with the Celestia project, offering an educational and interactive 3D visualization of the universe.

* [DriftDB: An experimental append-only database with built-in time travel](https://github.com/DavidLiedle/DriftDB) ([comments](https://lobste.rs/s/svxzek/driftdb_experimental_append_only)) - A deep dive into the experimental append-only database DriftDB, which features time-travel capabilities.

* [Dagger.js – A buildless, runtime-only JavaScript micro-framework](https://daggerjs.org) ([comments](https://news.ycombinator.com/item?id=45245138)) - Introducing a lightweight framework for runtime operations without complex build systems.

## Innovations in Science and Space Exploration

* [A New Nuclear Rocket Concept Could Slash Mars Travel Time in Half](https://science.slashdot.org/story/25/09/15/0322251/a-new-nuclear-rocket-concept-could-slash-mars-travel-time-in-half?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://science.slashdot.org/story/25/09/15/0322251/a-new-nuclear-rocket-concept-could-slash-mars-travel-time-in-half?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)) - A breakthrough nuclear rocket concept could significantly cut travel times for missions to Mars.

* [Scientists Discover ‘Clearest Sign’ Yet of Life on Mars](https://soylentnews.org/article.pl?sid=25/09/10/2228216&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/09/10/2228216&amp;from=rss)) - Exciting new discovery suggests compelling evidence of life markers on the red planet.

* [Can Lab-Grown Coral Restore Reefs Damaged By Climate Change?](https://news.slashdot.org/story/25/09/13/2025209/can-lab-grown-coral-restore-reefs-damaged-by-climate-change?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.slashdot.org/story/25/09/13/2025209/can-lab-grown-coral-restore-reefs-damaged-by-climate-change?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)) - Investigating how lab-created corals could rejuvenate marine ecosystems affected by climate change.

## Cybersecurity and Privacy

* [Renewable Energy has a Cybersecurity Problem](https://soylentnews.org/article.pl?sid=25/09/14/0037204&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/09/14/0037204&amp;from=rss)) - Highlights the critical vulnerabilities in renewable energy systems and their exposure to cyber threats.

* [UK's Data Watchdog Warns Students Are Breaching Their Schools' IT Systems](https://news.slashdot.org/story/25/09/15/0150246/uks-data-watchdog-warns-students-are-breaching-their-schools-it-systems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.slashdot.org/story/25/09/15/0150246/uks-data-watchdog-warns-students-are-breaching-their-schools-it-systems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)) - A rising issue of students breaching IT infrastructures at educational institutions.

* [Tiny11 Builder Update Lets Users Strip Copilot and Other Bloat From Windows 11](https://soylentnews.org/article.pl?sid=25/09/10/0436239&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/09/10/0436239&amp;from=rss)) - A lightweight builder tool for reducing unnecessary features in Windows 11.

## Unique and Odd Stories

* [Hosting a WebSite on a Disposable Vape](https://bogdanthegeek.github.io/blog/projects/vapeserver/) ([comments](https://lobste.rs/s/3ihcwv/hosting_website_on_disposable_vape)) - An unconventional project that creates a website hosted on a disposable vape device.

* [Bronze Age Britons Threw Massive Ragers With Food and Friends From Far Away](https://soylentnews.org/article.pl?sid=25/09/13/1842215&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/09/13/1842215&amp;from=rss)) - Archaeologists uncover evidence of large celebrations filled with imported delicacies in ancient Britain.

* [Physicists Made a Time Crystal We Can Actually See](https://soylentnews.org/article.pl?sid=25/09/13/0018206&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/09/13/0018206&amp;from=rss)) - Insights into how physicists have visualized a time crystal, a state of matter that defies usual thermodynamic rules.

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

* [2025-09-15, 06:49:01](https://lobste.rs/s/jkc7xi/linking_text_fragments_with_bookmarklet) - [Linking to text fragments with a bookmarklet](https://alexwlchan.net/2025/text-fragments-bookmarklet)
* [2025-09-15, 05:30:19](https://news.ycombinator.com/item?id=45246403) - [Celestia – real-time 3D visualization of space](https://celestiaproject.space/)
* [2025-09-15, 05:22:42](https://lobste.rs/s/d7s0di/idea_usr_sbin_has_failed_practice) - [The idea of /usr/sbin has failed in practice](https://utcc.utoronto.ca/~cks/space/blog/unix/UsrSbinFailedInPractice)
* [2025-09-15, 05:13:33](https://news.ycombinator.com/item?id=45246325) - [Omarchy on CachyOS](https://github.com/mroboff/omarchy-on-cachyos)
* [2025-09-15, 05:05:00](https://soylentnews.org/article.pl?sid=25/09/14/0037204&amp;from=rss) - [Renewable Energy has a Cybersecurity Problem](https://soylentnews.org/article.pl?sid=25/09/14/0037204&amp;from=rss)
* [2025-09-15, 04:56:24](https://news.ycombinator.com/item?id=45246247) - [Americans Crushed by Auto Loans as Defaults and Repossessions Surge](https://www.carscoops.com/2025/09/auto-loan-delinquencies-are-off-the-dial-and-even-prime-borrowers-are-struggling/)
* [2025-09-15, 04:51:29](https://news.ycombinator.com/item?id=45246229) - [Starlink is currently experiencing a service outage](https://www.starlink.com/)
* [2025-09-15, 04:34:00](https://science.slashdot.org/story/25/09/15/0322251/a-new-nuclear-rocket-concept-could-slash-mars-travel-time-in-half?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A New Nuclear Rocket Concept Could Slash Mars Travel Time in Half](https://science.slashdot.org/story/25/09/15/0322251/a-new-nuclear-rocket-concept-could-slash-mars-travel-time-in-half?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 04:05:11](https://lobste.rs/s/vioikp/moonbit_developers_are_lying_you) - [Moonbit developers are lying to you](https://bitemyapp.com/blog/moonbit-developers-are-lying-to-you/)
* [2025-09-15, 03:59:39](https://lobste.rs/s/465hcl/smalltalk_lambda_calculus) - [Smalltalk and Lambda Calculus](https://blog.ielliott.io/smalltalk-and-lambda-calculus)
* [2025-09-15, 03:58:23](https://news.ycombinator.com/item?id=45245962) - [A qualitative analysis of pig-butchering scams](https://arxiv.org/abs/2503.20821)
* [2025-09-15, 03:54:20](https://news.ycombinator.com/item?id=45245948) - [Language Models Pack Billions of Concepts into 12,000 Dimensions](https://nickyoder.com/johnson-lindenstrauss/)
* [2025-09-15, 03:27:34](https://news.ycombinator.com/item?id=45245802) - [Decentralized YouTube alternative adds livestream scheduling in new release](https://news.itsfoss.com/peertube-7-3/)
* [2025-09-15, 03:03:18](https://news.ycombinator.com/item?id=45245678) - [Which NPM package has the largest version number?](https://adamhl.dev/blog/largest-number-in-npm-package/)
* [2025-09-15, 02:48:08](https://lobste.rs/s/qgfaa1/riffq_is_postgres_wire_protocol) - [riffq is a Postgres wire protocol compatibility layer for Python](https://riffq.com/)
* [2025-09-15, 02:34:00](https://news.slashdot.org/story/25/09/15/0150246/uks-data-watchdog-warns-students-are-breaching-their-schools-it-systems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK&apos;s Data Watchdog Warns Students Are Breaching Their Schools&apos; IT Systems](https://news.slashdot.org/story/25/09/15/0150246/uks-data-watchdog-warns-students-are-breaching-their-schools-it-systems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 02:17:19](https://lobste.rs/s/3ihcwv/hosting_website_on_disposable_vape) - [Hosting a WebSite on a Disposable Vape](https://bogdanthegeek.github.io/blog/projects/vapeserver/)
* [2025-09-15, 02:02:39](https://news.ycombinator.com/item?id=45245313) - [For Good First Issue – A repository of social impact and open source projects](https://forgoodfirstissue.github.com/)
* [2025-09-15, 01:28:52](https://news.ycombinator.com/item?id=45245138) - [Show HN: Dagger.js – A buildless, runtime-only JavaScript micro-framework](https://daggerjs.org)
* [2025-09-15, 00:40:00](https://hardware.slashdot.org/story/25/09/15/0035239/the-worlds-ev-owners-discover-unheated-batteries-lose-distance-in-freezing-weather?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The World&apos;s EV Owners Discover Unheated Batteries Lose Distance in Freezing Weather](https://hardware.slashdot.org/story/25/09/15/0035239/the-worlds-ev-owners-discover-unheated-batteries-lose-distance-in-freezing-weather?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-15, 00:19:00](https://soylentnews.org/article.pl?sid=25/09/14/0032249&amp;from=rss) - [Newly Released Video at House UFO Hearing Appears to Show U.S. Missile Striking and Bouncing Off Orb](https://soylentnews.org/article.pl?sid=25/09/14/0032249&amp;from=rss)
* [2025-09-14, 23:37:00](https://tech.slashdot.org/story/25/09/14/2334214/tens-of-thousands-of-us-emergency-workers-trained-on-how-to-handle-a-robotaxi?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tens of Thousands of US Emergency Workers Trained on How to Handle a Robotaxi](https://tech.slashdot.org/story/25/09/14/2334214/tens-of-thousands-of-us-emergency-workers-trained-on-how-to-handle-a-robotaxi?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-14, 23:20:01](https://news.ycombinator.com/item?id=45244295) - [Gentoo AI Policy](https://wiki.gentoo.org/wiki/Project:Council/AI_policy)
* [2025-09-14, 22:29:49](https://news.ycombinator.com/item?id=45243925) - [Titania Programming Language](https://github.com/gingerBill/titania)
* [2025-09-14, 22:20:58](https://lobste.rs/s/7jiz4y/ocsp_service_has_reached_end_life) - [OCSP Service Has Reached End of Life](https://letsencrypt.org/2025/08/06/ocsp-service-has-reached-end-of-life)
* [2025-09-14, 22:15:33](https://news.ycombinator.com/item?id=45243803) - [Grapevine canes can be converted into plastic-like material that will decompose](https://www.sdstate.edu/news/2025/08/can-grapevines-help-slow-plastic-waste-problem)
* [2025-09-14, 22:10:00](https://apple.slashdot.org/story/25/09/14/228211/apple-claims-most-significant-upgrade-to-memory-safety-in-os-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Claims &apos;Most Significant Upgrade to Memory Safety&apos; in OS History](https://apple.slashdot.org/story/25/09/14/228211/apple-claims-most-significant-upgrade-to-memory-safety-in-os-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-14, 22:08:13](https://news.ycombinator.com/item?id=45243740) - [Trigger Crossbar](https://serd.es/2025/09/14/Trigger-crossbar.html)
* [2025-09-14, 21:54:07](https://news.ycombinator.com/item?id=45243635) - [Betty Crocker broke recipes by shrinking boxes](https://www.cubbyathome.com/boxed-cake-mix-sizes-have-shrunk-80045058)
* [2025-09-14, 21:49:56](https://lobste.rs/s/7qw4xw/rating_26_years_java_changes) - [Rating 26 years of Java changes](https://neilmadden.blog/2025/09/12/rating-26-years-of-java-changes/)
* [2025-09-14, 21:43:24](https://lobste.rs/s/unnfbb/tsink_embedded_time_series_database_for) - [tsink: Embedded time-series database for Rust](https://github.com/h2337/tsink)
* [2025-09-14, 21:35:42](https://news.ycombinator.com/item?id=45243439) - [AMD Turin PSP binaries analysis from open-source firmware perspective](https://blog.3mdeb.com/2025/2025-09-11-gigabyte-mz33-ar1-blob-analysis/)
* [2025-09-14, 21:28:23](https://lobste.rs/s/tztq7i/networking_for_system_administrators) - [Networking for System Administrators (2nd Edition)](https://www.kickstarter.com/projects/mwlucas/networking-for-system-administrators-2nd-edition/)
* [2025-09-14, 20:35:21](https://lobste.rs/s/svxzek/driftdb_experimental_append_only) - [DriftDB: An experimental append-only database with built-in time travel](https://github.com/DavidLiedle/DriftDB)
* [2025-09-14, 20:34:00](https://science.slashdot.org/story/25/09/14/2023209/japan-sets-record-nearly-100000-people-aged-over-100?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japan Sets Record:  Nearly 100,000 People Aged Over 100](https://science.slashdot.org/story/25/09/14/2023209/japan-sets-record-nearly-100000-people-aged-over-100?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-14, 19:39:00](https://soylentnews.org/article.pl?sid=25/09/14/0024209&amp;from=rss) - [Scientists Stunned as Tiny Algae Keep Moving Inside Arctic Ice](https://soylentnews.org/article.pl?sid=25/09/14/0024209&amp;from=rss)
* [2025-09-14, 19:34:48](https://news.ycombinator.com/item?id=45242591) - [OCSP Service Has Reached End of Life](https://letsencrypt.org/2025/08/06/ocsp-service-has-reached-end-of-life)
* [2025-09-14, 18:34:00](https://yro.slashdot.org/story/25/09/14/1656244/african-island-demanding-government-action-punished-with-year-long-internet-outage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [African Island Demanding Government Action Punished with Year-Long Internet Outage](https://yro.slashdot.org/story/25/09/14/1656244/african-island-demanding-government-action-punished-with-year-long-internet-outage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-14, 17:34:00](https://yro.slashdot.org/story/25/09/14/1638247/americas-ftc-opens-new-probe-into-amazon-and-google-advertising-practices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America&apos;s FTC Opens New Probe into Amazon and Google Advertising Practices](https://yro.slashdot.org/story/25/09/14/1638247/americas-ftc-opens-new-probe-into-amazon-and-google-advertising-practices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-14, 17:28:38](https://lobste.rs/s/yrtjug/unreasonable_effectiveness_modern_sort) - [The unreasonable effectiveness of modern sort algorithms](https://github.com/Voultapher/sort-research-rs/blob/main/writeup/unreasonable/text.md)
* [2025-09-14, 17:25:20](https://lobste.rs/s/4v5sqd/tag2upload_first_month_debian_forky) - [tag2upload in the first month of Debian forky](https://diziet.dreamwidth.org/20143.html)
* [2025-09-14, 16:40:09](https://lobste.rs/s/6sig0s/on_security_ssh_client_signatures) - [On the Security of SSH Client Signatures](https://arxiv.org/abs/2509.09331)
* [2025-09-14, 16:34:00](https://news.slashdot.org/story/25/09/13/2025209/can-lab-grown-coral-restore-reefs-damaged-by-climate-change?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Can Lab-Grown Coral Restore Reefs Damaged By Climate Change?](https://news.slashdot.org/story/25/09/13/2025209/can-lab-grown-coral-restore-reefs-damaged-by-climate-change?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-14, 16:21:14](https://lobste.rs/s/bvg2mx/gleam_is_my_new_obsession) - [Gleam is my new obsession](https://ericcodes.io/blog/gleam-my-new-obsession.html)
* [2025-09-14, 15:44:44](https://news.ycombinator.com/item?id=45240682) - [Writing an operating system kernel from scratch](https://popovicu.com/posts/writing-an-operating-system-kernel-from-scratch/)
* [2025-09-14, 15:42:02](https://lobste.rs/s/aokjpu/writing_operating_system_kernel_from) - [Writing an operating system kernel from scratch](https://popovicu.com/posts/writing-an-operating-system-kernel-from-scratch/)
* [2025-09-14, 15:34:00](https://slashdot.org/story/25/09/14/0433205/microsoft-escapes-eu-competition-probe-by-unbundling-teams-for-seven-years-opening-api?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Escapes EU Competition Probe by Unbundling Teams for Seven Years, Opening API](https://slashdot.org/story/25/09/14/0433205/microsoft-escapes-eu-competition-probe-by-unbundling-teams-for-seven-years-opening-api?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-14, 15:13:42](https://news.ycombinator.com/item?id=45240391) - [Nicu&apos;s test website made with SVG (2007)](https://svg.nicubunu.ro/)
* [2025-09-14, 14:49:00](https://soylentnews.org/article.pl?sid=25/09/13/1842215&amp;from=rss) - [Bronze Age Britons Threw Massive Ragers With Food and Friends From Far Away](https://soylentnews.org/article.pl?sid=25/09/13/1842215&amp;from=rss)
* [2025-09-14, 14:46:58](https://news.ycombinator.com/item?id=45240146) - [Why We Spiral](https://behavioralscientist.org/why-we-spiral/)
* [2025-09-14, 14:34:00](https://science.slashdot.org/story/25/09/13/0553219/most-earth-like-planet-yet-may-have-been-found-just-40-light-years-away?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Most Earth-Like Planet Yet May Have Been Found Just 40 Light Years Away](https://science.slashdot.org/story/25/09/13/0553219/most-earth-like-planet-yet-may-have-been-found-just-40-light-years-away?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-14, 13:23:12](https://news.ycombinator.com/item?id=45239601) - [Read to forget](https://mo42.bearblog.dev/read-to-forget/)
* [2025-09-14, 13:17:34](https://lobste.rs/s/dyezn4/motorola_intel_ibm_make_mainframe_pc_pc_xt) - [Motorola, Intel, IBM Make A Mainframe in a PC - The PC XT/370](https://thechipletter.substack.com/p/motorola-intel-ibm-make-a-mainframe)
* [2025-09-14, 11:37:33](https://news.ycombinator.com/item?id=45239085) - [Repetitive negative thinking associated with cognitive decline in older adults](https://bmcpsychiatry.biomedcentral.com/articles/10.1186/s12888-025-06815-2)
* [2025-09-14, 11:34:00](https://tech.slashdot.org/story/25/09/14/031203/facebook-begins-sending-settlement-payments-from-cambridge-analytica-scandal-soon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Facebook Begins Sending Settlement Payments from Cambridge Analytica Scandal Soon](https://tech.slashdot.org/story/25/09/14/031203/facebook-begins-sending-settlement-payments-from-cambridge-analytica-scandal-soon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-14, 10:00:00](https://soylentnews.org/article.pl?sid=25/09/13/1342246&amp;from=rss) - [Big Clouds Scramble Over EU Data Act and Data Transfers](https://soylentnews.org/article.pl?sid=25/09/13/1342246&amp;from=rss)
* [2025-09-14, 07:34:00](https://it.slashdot.org/story/25/09/14/0357239/thieves-busted-after-stealing-a-cellphone-from-a-security-experts-wife?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Thieves Busted After Stealing a Cellphone from a Security Expert&apos;s Wife](https://it.slashdot.org/story/25/09/14/0357239/thieves-busted-after-stealing-a-cellphone-from-a-security-experts-wife?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-14, 07:15:21](https://lobste.rs/s/3gfgfs/many_broken_feeds) - [The Many Broken Feeds](https://notes.abhinavsarkar.net/2025/broken-feeds)
* [2025-09-14, 05:40:30](https://lobste.rs/s/0nmyzm/refurb_weekend_silicon_graphics_indigo) - [Refurb weekend: Silicon Graphics Indigo² IMPACT 10000](http://oldvcr.blogspot.com/2025/09/refurb-weekend-silicon-graphics-indigo.html)
* [2025-09-14, 05:14:00](https://soylentnews.org/article.pl?sid=25/09/13/1330226&amp;from=rss) - [Fingerspitzengefühl](https://soylentnews.org/article.pl?sid=25/09/13/1330226&amp;from=rss)
* [2025-09-14, 03:34:59](https://lobste.rs/s/kkqhue/few_notes_on_ratelimiting) - [a few notes on ratelimiting](https://dotat.at/@/2025-09-14-ratelimit.html)
* [2025-09-14, 03:34:00](https://developers.slashdot.org/story/25/09/14/0134239/is-perl-the-worlds-10th-most-popular-programming-language?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is Perl the World&apos;s 10th Most Popular Programming Language?](https://developers.slashdot.org/story/25/09/14/0134239/is-perl-the-worlds-10th-most-popular-programming-language?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-14, 01:34:00](https://science.slashdot.org/story/25/09/14/0026256/dragonfly-mission-to-saturns-moon-titan-behind-schedule-overbudget-says-nasa-inspector-general?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Dragonfly&apos; Mission to Saturn&apos;s Moon Titan: Behind Schedule, Overbudget, Says NASA Inspector General](https://science.slashdot.org/story/25/09/14/0026256/dragonfly-mission-to-saturns-moon-titan-behind-schedule-overbudget-says-nasa-inspector-general?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-14, 01:01:03](https://lobste.rs/s/xtb30i/redox_development_priorities_for_2025_26) - [Redox Development Priorities for 2025/26](https://www.redox-os.org/news/development-priorities-2025-09/)
* [2025-09-14, 00:29:29](https://lobste.rs/s/okz9ir/debian_12_installer_promotes_us_time) - [Debian 12 installer promotes US/* time zones](https://rachelbythebay.com/w/2025/09/12/tz/)
* [2025-09-14, 00:26:00](https://soylentnews.org/article.pl?sid=25/09/13/135241&amp;from=rss) - [Senator Blasts Microsoft for Making Default Windows Vulnerable to “Kerberoasting”](https://soylentnews.org/article.pl?sid=25/09/13/135241&amp;from=rss)
* [2025-09-13, 23:13:06](https://lobste.rs/s/lmdyti/pass_unix_password_manager) - [Pass: Unix Password Manager](https://www.passwordstore.org/)
* [2025-09-13, 19:40:00](https://soylentnews.org/article.pl?sid=25/09/13/0018206&amp;from=rss) - [Physicists Made a Time Crystal We Can Actually See](https://soylentnews.org/article.pl?sid=25/09/13/0018206&amp;from=rss)
* [2025-09-13, 19:03:48](https://lobste.rs/s/vjgucr/rip_pthread_cancel) - [RIP pthread_cancel](https://eissing.org/icing/posts/rip_pthread_cancel/)
* [2025-09-13, 14:51:00](https://soylentnews.org/article.pl?sid=25/09/13/003254&amp;from=rss) - [$142 Upgrade Kit and Spare Modules Turn Nvidia RTX 4090 24GB to 48GB AI Card](https://soylentnews.org/article.pl?sid=25/09/13/003254&amp;from=rss)
* [2025-09-13, 14:22:32](https://lobste.rs/s/i4mslh/my_first_cve) - [My first CVE](https://natkr.com/2025-09-13-my-first-cve/)
* [2025-09-13, 12:02:11](https://news.ycombinator.com/item?id=45231378) - [Show HN: A store that generates products from anything you type in search](https://anycrap.shop/)
* [2025-09-13, 10:10:00](https://soylentnews.org/article.pl?sid=25/09/11/0338253&amp;from=rss) - [AI&apos;s Free Web Scraping Days May be Over, Thanks to This New Licensing Protocol](https://soylentnews.org/article.pl?sid=25/09/11/0338253&amp;from=rss)
* [2025-09-13, 05:24:00](https://soylentnews.org/article.pl?sid=25/09/11/0325209&amp;from=rss) - [Scientists Urge EU Governments to Reject Chat Control Rules](https://soylentnews.org/article.pl?sid=25/09/11/0325209&amp;from=rss)
* [2025-09-13, 00:42:00](https://soylentnews.org/article.pl?sid=25/09/11/0310226&amp;from=rss) - [ASML Invests €1.3bn in AI Company Mistral](https://soylentnews.org/article.pl?sid=25/09/11/0310226&amp;from=rss)
* [2025-09-12, 19:58:00](https://soylentnews.org/article.pl?sid=25/09/11/036213&amp;from=rss) - [LIGO&apos;s Sharpest Detection Yet Confirms Famous Stephen Hawking Theory](https://soylentnews.org/article.pl?sid=25/09/11/036213&amp;from=rss)
* [2025-09-12, 19:43:26](https://news.ycombinator.com/item?id=45225903) - [Which colours dominate movie posters and why?](https://stephenfollows.com/p/which-colours-dominate-movie-posters-and-why)
* [2025-09-12, 15:13:00](https://soylentnews.org/article.pl?sid=25/09/11/0256255&amp;from=rss) - [Dead Internet Theory Lives: One Out of Three of You is a Bot](https://soylentnews.org/article.pl?sid=25/09/11/0256255&amp;from=rss)
* [2025-09-12, 11:46:57](https://news.ycombinator.com/item?id=45221112) - [Death to Type Classes](https://jappie.me/death-to-type-classes.html)
* [2025-09-12, 10:33:00](https://soylentnews.org/article.pl?sid=25/09/10/2236210&amp;from=rss) - [This is the First Time Scientists Have Seen Decision Making in a Brain](https://soylentnews.org/article.pl?sid=25/09/10/2236210&amp;from=rss)
* [2025-09-12, 05:46:00](https://soylentnews.org/article.pl?sid=25/09/10/2228216&amp;from=rss) - [Scientists Discover ‘Clearest Sign’ Yet of Life on Mars](https://soylentnews.org/article.pl?sid=25/09/10/2228216&amp;from=rss)
* [2025-09-12, 01:01:00](https://soylentnews.org/article.pl?sid=25/09/10/2225205&amp;from=rss) - [Unicode version 17.0.0 Released ](https://soylentnews.org/article.pl?sid=25/09/10/2225205&amp;from=rss)
* [2025-09-11, 21:33:46](https://news.ycombinator.com/item?id=45216327) - [Analyzing the memory ordering models of the Apple M1](https://www.sciencedirect.com/science/article/pii/S1383762124000390)
* [2025-09-11, 20:16:00](https://soylentnews.org/article.pl?sid=25/09/10/0627237&amp;from=rss) - [Scientists Create Solar Cells That Generate Energy From Indoor Light at Record Efficiency](https://soylentnews.org/article.pl?sid=25/09/10/0627237&amp;from=rss)
* [2025-09-11, 15:34:00](https://soylentnews.org/article.pl?sid=25/09/10/0624239&amp;from=rss) - [Meta Reportedly Suppressed Research About How Dangerous its VR Headsets Are for Kids](https://soylentnews.org/article.pl?sid=25/09/10/0624239&amp;from=rss)
* [2025-09-11, 12:21:27](https://news.ycombinator.com/item?id=45210705) - [Learning Lens Blur Fields](https://blur-fields.github.io/)
* [2025-09-11, 10:51:00](https://soylentnews.org/article.pl?sid=25/09/10/0619236&amp;from=rss) - [Cannabis Might be Messing With Female Fertility](https://soylentnews.org/article.pl?sid=25/09/10/0619236&amp;from=rss)
* [2025-09-11, 06:05:00](https://soylentnews.org/article.pl?sid=25/09/10/0436239&amp;from=rss) - [Tiny11 Builder Update Lets Users Strip Copilot and Other Bloat From Windows 11](https://soylentnews.org/article.pl?sid=25/09/10/0436239&amp;from=rss)
* [2025-09-11, 05:26:19](https://news.ycombinator.com/item?id=45208102) - [Page Object (2013)](https://martinfowler.com/bliki/PageObject.html)
* [2025-09-11, 01:19:00](https://soylentnews.org/article.pl?sid=25/09/10/0431231&amp;from=rss) - [48 Years Ago, Voyager 1 Left Earth](https://soylentnews.org/article.pl?sid=25/09/10/0431231&amp;from=rss)
