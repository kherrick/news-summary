# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Robotics

* [GM Installs Robots At Flagship EV Factory After Laying Off 1,300 Workers](https://hardware.slashdot.org/story/26/06/23/0059203/gm-installs-robots-at-flagship-ev-factory-after-laying-off-1300-workers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=48640196))

* [Microsoft Accidentally Breaks Replying to an Email on Outlook](https://it.slashdot.org/story/26/06/22/2048235/microsoft-accidentally-breaks-replying-to-an-email-on-outlook?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=48638886))

* [Valve Will Finally Let You Build Your Own Steam Machine With SteamOS For Desktop](https://games.slashdot.org/story/26/06/22/1922207/valve-will-finally-let-you-build-your-own-steam-machine-with-steamos-for-desktop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=48636125))

## Artificial Intelligence Developments

* [Google Invests $75 Million In A24 To Develop AI-Powered Filmmaking Tools](https://entertainment.slashdot.org/story/26/06/22/196207/google-invests-75-million-in-a24-to-develop-ai-powered-filmmaking-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=48634803))

* [AI Law Firm Wins UK Court Case For First Time](https://yro.slashdot.org/story/26/06/22/1657204/ai-law-firm-wins-uk-court-case-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=48632884))

* [Several US States Bet That AI Can Solve Their Prison Recidivism Crisis](https://news.slashdot.org/story/26/06/21/2340231/several-us-states-bet-that-ai-can-solve-their-prison-recidivism-crisis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://lobste.rs/s/xhpauz/p99_0ms_autocomplete_for_240_million))

## Cybersecurity and Technology Challenges

* [Critical Copilot Vulnerability Allowed Hackers to Steal 2FA Code From Users](https://soylentnews.org/article.pl?sid=26/06/19/1228210&amp;from=rss) ([comments](https://news.ycombinator.com/item?id=48605561))

* [Flock-Powered Police Chiefs Stalking Women Shows Why Warrants Are Needed](https://ipvm.com/reports/police-chiefs-track) ([comments](https://news.ycombinator.com/item?id=48634694))

* [The FBI Built its Own Replica Small Town to Simulate Real-World Cyberattacks](https://soylentnews.org/article.pl?sid=26/06/19/1212211&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/06/19/120238&amp;from=rss))

* [TikTok Shows 3x More AI Slop Than YouTube, Report Finds](https://tech.slashdot.org/story/26/06/22/028235/tiktok-shows-3x-more-ai-slop-than-youtube-report-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://lobste.rs/s/dh6o8k/chesterton_s_middle_finger))

## Fascinating Innovations

* [Canyon HUD helmet for road riding](https://media-centre.canyon.com/en-INT/266866-new-canyon-heads-up-display-helmet-could-be-a-safety-gamechanger-for-road-riding/) ([comments](https://news.ycombinator.com/item?id=48609129))

* [2,000 Retired Google Pixel Phones Get a Second Life As a Private Cloud](https://hardware.slashdot.org/story/26/06/22/0348249/2000-retired-google-pixel-phones-get-a-second-life-as-a-private-cloud?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://lobste.rs/s/12jy9c/what_are_you_doing_this_week))

* [PostmarketOS v26.06 (Alpen Avocado) released](https://postmarketos.org/blog/2026/06/21/v26.06-release/) ([comments](https://lobste.rs/s/kn7fi8/postmarketos_v26_06_alpen_avocado))

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

* [2026-06-23, 04:15:04](https://news.ycombinator.com/item?id=48640196) - [Will It Mythos?](https://swelljoe.com/post/will-it-mythos/)
* [2026-06-23, 03:30:00](https://hardware.slashdot.org/story/26/06/23/0059203/gm-installs-robots-at-flagship-ev-factory-after-laying-off-1300-workers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GM Installs Robots At Flagship EV Factory After Laying Off 1,300 Workers](https://hardware.slashdot.org/story/26/06/23/0059203/gm-installs-robots-at-flagship-ev-factory-after-laying-off-1300-workers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-23, 02:22:00](https://soylentnews.org/article.pl?sid=26/06/22/029235&amp;from=rss) - [Ozempic Literally Came From a Monster – And It&apos;s Not Alone](https://soylentnews.org/article.pl?sid=26/06/22/029235&amp;from=rss)
* [2026-06-23, 02:03:34](https://lobste.rs/s/umm2jh/tale_two_path_separators_2021) - [A tale of two path separators (2021)](https://alexwlchan.net/2021/slashes/)
* [2026-06-23, 02:01:25](https://news.ycombinator.com/item?id=48639240) - [VibeThinker: 3B param model that beats Opus 4.5 on reasoning with novel SFT+GRPO](https://arxiv.org/abs/2606.16140)
* [2026-06-23, 01:54:38](https://news.ycombinator.com/item?id=48639184) - [1,700 free online courses from top universities](https://www.openculture.com/freeonlinecourses)
* [2026-06-23, 01:52:20](https://news.ycombinator.com/item?id=48639165) - [An Introduction to YOLO26](https://blog.roboflow.com/yolo26/)
* [2026-06-23, 01:15:05](https://news.ycombinator.com/item?id=48638886) - [In praise of memcached](https://jchri.st/blog/in-praise-of-memcached/)
* [2026-06-22, 23:00:00](https://it.slashdot.org/story/26/06/22/2048235/microsoft-accidentally-breaks-replying-to-an-email-on-outlook?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Accidentally Breaks Replying To an Email On Outlook](https://it.slashdot.org/story/26/06/22/2048235/microsoft-accidentally-breaks-replying-to-an-email-on-outlook?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-22, 22:25:06](https://lobste.rs/s/luosjw/fully_local_voice_assistant_setup) - [A fully local voice assistant setup](https://blog.platypush.tech/article/Local-voice-assistant)
* [2026-06-22, 22:00:00](https://it.slashdot.org/story/26/06/22/2039221/following-user-outcry-amd-reinstates-memory-encryption-in-consumer-cpus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Following User Outcry, AMD Reinstates Memory Encryption In Consumer CPUs](https://it.slashdot.org/story/26/06/22/2039221/following-user-outcry-amd-reinstates-memory-encryption-in-consumer-cpus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-22, 21:37:00](https://soylentnews.org/article.pl?sid=26/06/21/2032230&amp;from=rss) - [Non-x86 Servers Now Nearly Half the Market](https://soylentnews.org/article.pl?sid=26/06/21/2032230&amp;from=rss)
* [2026-06-22, 21:21:08](https://news.ycombinator.com/item?id=48636380) - [ytr: YouTube Radio for Emacs](https://xenodium.com/ytr-youtube-radio-for-emacs)
* [2026-06-22, 21:21:01](https://news.ycombinator.com/item?id=48636377) - [GLM-5.2 – How to Run Locally](https://unsloth.ai/docs/models/glm-5.2)
* [2026-06-22, 21:02:54](https://lobste.rs/s/zszeab/curious_history_invention_cmd_k_quick) - [The curious history the invention of the CMD+K quick switcher](https://ux.stackexchange.com/questions/153299/how-did-cmd-k-come-to-be-the-standard-shortcut-for-both-adding-a-hyperlink-and-o)
* [2026-06-22, 21:00:51](https://news.ycombinator.com/item?id=48636125) - [Kyber (YC W23) Is Hiring a Head of Engineering](https://www.ycombinator.com/companies/kyber/jobs/FGmI8mx-head-of-engineering)
* [2026-06-22, 21:00:00](https://games.slashdot.org/story/26/06/22/1922207/valve-will-finally-let-you-build-your-own-steam-machine-with-steamos-for-desktop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Valve Will Finally Let You Build Your Own Steam Machine With SteamOS For Desktop](https://games.slashdot.org/story/26/06/22/1922207/valve-will-finally-let-you-build-your-own-steam-machine-with-steamos-for-desktop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-22, 20:55:17](https://news.ycombinator.com/item?id=48636062) - [Job application asked for my SAT scores](https://mrmarket.lol/job-application-asked-for-my-sat-scores/)
* [2026-06-22, 20:23:42](https://lobste.rs/s/wnlece/memory_man_who_put_red_green_squiggles) - [In memory of the man who put red and green squiggles under words](https://devblogs.microsoft.com/oldnewthing/20260622-00/?p=112451)
* [2026-06-22, 20:07:06](https://lobste.rs/s/onfndb/reclassifying_dmarc_arc_as_historic) - [Reclassifying DMARC ARC as historic](https://datatracker.ietf.org/doc/draft-ietf-dmarc-arc-to-historic/)
* [2026-06-22, 20:00:00](https://entertainment.slashdot.org/story/26/06/22/196207/google-invests-75-million-in-a24-to-develop-ai-powered-filmmaking-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Invests $75 Million In A24 To Develop AI-Powered Filmmaking Tools](https://entertainment.slashdot.org/story/26/06/22/196207/google-invests-75-million-in-a24-to-develop-ai-powered-filmmaking-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-22, 19:22:37](https://news.ycombinator.com/item?id=48634803) - [Japanese symbols that speak without words](https://arun.is/blog/japan-symbols/)
* [2026-06-22, 19:21:00](https://news.ycombinator.com/item?id=48634787) - [British Columbia, Time Zones, and Postgres](https://www.crunchydata.com/blog/british-columbia-and-time-zone-changes)
* [2026-06-22, 19:19:55](https://news.ycombinator.com/item?id=48634778) - [Optocam Zero: a Pi Zero based digital camera made using off the shelf components](https://github.com/dorukkumkumoglu/optocamzero)
* [2026-06-22, 19:13:46](https://news.ycombinator.com/item?id=48634694) - [Flock-Powered Police Chiefs Stalking Women Shows Why Warrants Are Needed](https://ipvm.com/reports/police-chiefs-track)
* [2026-06-22, 19:06:48](https://news.ycombinator.com/item?id=48634585) - [Canada plans &apos;nuclear renaissance&apos; with up to 10 reactors built by 2040](https://www.cbc.ca/news/politics/federal-nuclear-strategy-9.7244509)
* [2026-06-22, 19:00:00](https://tech.slashdot.org/story/26/06/22/1749209/some-electricians-think-building-data-centers-is-for-sellouts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Some Electricians Think Building Data Centers Is For Sellouts](https://tech.slashdot.org/story/26/06/22/1749209/some-electricians-think-building-data-centers-is-for-sellouts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-22, 18:00:00](https://games.slashdot.org/story/26/06/22/1716254/valve-prices-the-steam-machine-at-1049?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Valve Prices the Steam Machine At $1,049](https://games.slashdot.org/story/26/06/22/1716254/valve-prices-the-steam-machine-at-1049?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-22, 17:54:04](https://lobste.rs/s/bkwkz5/rhombus_v1_0_racket_flavored_language) - [Rhombus v1.0: A Racket flavored language with syntax](https://blog.racket-lang.org/2026/06/rhombus-v1.0.html)
* [2026-06-22, 17:51:21](https://lobste.rs/s/rm5pca/network_shares_still_talking_about_them) - [Network shares: still talking about them in 2026](https://pointieststick.com/2026/06/22/network-shares-still-talking-about-them-in-2026/)
* [2026-06-22, 17:19:50](https://lobste.rs/s/lz3dbc/pledging_another_400_000_zig_software) - [Pledging Another $400,000 to the Zig Software Foundation](https://mitchellh.com/writing/zig-donation-2026)
* [2026-06-22, 17:09:51](https://news.ycombinator.com/item?id=48632884) - [Steam Machine launches today](https://store.steampowered.com/news/group/45479024/view/685257114654870245)
* [2026-06-22, 17:00:00](https://yro.slashdot.org/story/26/06/22/1657204/ai-law-firm-wins-uk-court-case-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Law Firm Wins UK Court Case For First Time](https://yro.slashdot.org/story/26/06/22/1657204/ai-law-firm-wins-uk-court-case-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-22, 16:54:00](https://soylentnews.org/article.pl?sid=26/06/21/2026240&amp;from=rss) - [A Bold Satellite Rescue Mission Came Together in Record Time, but Will It Work?](https://soylentnews.org/article.pl?sid=26/06/21/2026240&amp;from=rss)
* [2026-06-22, 16:06:49](https://lobste.rs/s/ut8idd/xfwl4_s_first_preview_release) - [Xfwl4&apos;s First Preview Release](https://www.spurint.org/journal/2026/06/xfwl4s-first-preview-release)
* [2026-06-22, 16:00:00](https://hardware.slashdot.org/story/26/06/22/0348249/2000-retired-google-pixel-phones-get-a-second-life-as-a-private-cloud?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [2,000 Retired Google Pixel Phones Get a Second Life As a Private Cloud](https://hardware.slashdot.org/story/26/06/22/0348249/2000-retired-google-pixel-phones-get-a-second-life-as-a-private-cloud?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-22, 15:37:48](https://news.ycombinator.com/item?id=48631726) - [Show HN: Oak – Git alternative designed for agents](https://oak.space/oak/oak)
* [2026-06-22, 15:00:00](https://games.slashdot.org/story/26/06/22/0337213/ubisoft-co-founder-claude-guillemot-dies-in-plane-crash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ubisoft Co-Founder Claude Guillemot Dies In Plane Crash](https://games.slashdot.org/story/26/06/22/0337213/ubisoft-co-founder-claude-guillemot-dies-in-plane-crash?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-22, 14:02:16](https://lobste.rs/s/pifl3k/one_year_with_codeberg) - [One year with Codeberg](https://guix.gnu.org/en/blog/2026/one-year-with-codeberg/)
* [2026-06-22, 13:53:02](https://news.ycombinator.com/item?id=48630171) - [Moebius: 0.2B image inpainting model with 10B-level performance](https://hustvl.github.io/Moebius/)
* [2026-06-22, 13:43:38](https://news.ycombinator.com/item?id=48630029) - [Chevron signs 20-year power agreement with Microsoft for West Texas data center](https://www.chevron.com/newsroom/2026/q2/chevron-signs-20-year-power-agreement-with-microsoft-for-west-texas-data-center)
* [2026-06-22, 13:29:29](https://lobste.rs/s/kocnfd/web_browsers_on_pdas) - [Web Browsers on PDAs](https://vale.rocks/posts/pda-browsers)
* [2026-06-22, 13:27:03](https://lobste.rs/s/rq2t8j/why_drawing_tablet_brands_won_t) - [Why Drawing Tablet Brands Won&apos;t Collaborate on Linux FLOSS Drivers](https://www.davidrevoy.com/article1154/why-drawing-tablet-brands-wont-collaborate-on-linux-floss-drivers)
* [2026-06-22, 13:11:56](https://lobste.rs/s/12jy9c/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/12jy9c/what_are_you_doing_this_week)
* [2026-06-22, 12:37:47](https://lobste.rs/s/hpx7an/linux_secure_boot_certificate) - [Linux and Secure Boot certificate expiration (2025)](https://lwn.net/Articles/1029767/)
* [2026-06-22, 12:23:46](https://news.ycombinator.com/item?id=48629213) - [Show HN: Got sick of ads, so I made my own logic puzzle site](https://puzzlelair.com/)
* [2026-06-22, 12:13:00](https://soylentnews.org/article.pl?sid=26/06/21/2015236&amp;from=rss) - [16-Year-Old SATA II SSD Survives 1 Petabyte of Writes](https://soylentnews.org/article.pl?sid=26/06/21/2015236&amp;from=rss)
* [2026-06-22, 11:54:07](https://lobste.rs/s/pa1atu/nix_needs_relocatable_binaries) - [Nix needs relocatable binaries](https://fzakaria.com/2026/06/21/nix-needs-relocatable-binaries)
* [2026-06-22, 11:34:00](https://news.slashdot.org/story/26/06/21/2340231/several-us-states-bet-that-ai-can-solve-their-prison-recidivism-crisis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Several US States Bet That AI Can Solve Their Prison Recidivism Crisis](https://news.slashdot.org/story/26/06/21/2340231/several-us-states-bet-that-ai-can-solve-their-prison-recidivism-crisis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-22, 11:31:29](https://lobste.rs/s/xhpauz/p99_0ms_autocomplete_for_240_million) - [p99 0ms* autocomplete for 240 million domain names](https://ruurtjan.com/articles/p99-0ms-autocomplete-for-240-million-domain-names)
* [2026-06-22, 11:18:16](https://lobste.rs/s/r1l3en/british_columbia_time_zones_postgres) - [British Columbia, Time Zones, and Postgres](https://www.crunchydata.com/blog/british-columbia-and-time-zone-changes)
* [2026-06-22, 09:51:10](https://lobste.rs/s/2nljgf/how_computer_should_work) - [How a Computer Should Work](https://pkgdemon.github.io/how-a-computer-should-work.html)
* [2026-06-22, 09:39:52](https://lobste.rs/s/k057yw/computing_camera_rays) - [Computing Camera Rays](https://momentsingraphics.de/CameraRays.html)
* [2026-06-22, 09:27:54](https://lobste.rs/s/uz2qia/openmw_0_51_0_released) - [OpenMW 0.51.0 Released](https://openmw.org/2026/openmw-0-51-0-released/)
* [2026-06-22, 09:02:51](https://lobste.rs/s/dh6o8k/chesterton_s_middle_finger) - [Chesterton&apos;s middle finger](https://www.arp242.net/chestersons-finger.html)
* [2026-06-22, 08:19:26](https://lobste.rs/s/0noyze/deno_desktop_apps) - [Deno Desktop apps](https://docs.deno.com/runtime/desktop/)
* [2026-06-22, 07:34:00](https://news.slashdot.org/story/26/06/22/0255256/tutor-who-took-online-tests-for-124-students-jailed-for-three-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Tutor&apos; Who Took Online Tests for 124 Students Jailed for Three Years](https://news.slashdot.org/story/26/06/22/0255256/tutor-who-took-online-tests-for-124-students-jailed-for-three-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-22, 07:30:00](https://soylentnews.org/article.pl?sid=26/06/21/205254&amp;from=rss) - [Python Dev Saved From Disaster by Intuition...and AI](https://soylentnews.org/article.pl?sid=26/06/21/205254&amp;from=rss)
* [2026-06-22, 06:07:05](https://lobste.rs/s/uuyjxb/help_i_accidentally_wigglegram) - [help i accidentally a wigglegram](https://lmao.center/blog/wiggle-accidents/)
* [2026-06-22, 05:38:40](https://news.ycombinator.com/item?id=48626137) - [Deno Desktop](https://docs.deno.com/runtime/desktop/)
* [2026-06-22, 03:48:00](https://tech.slashdot.org/story/26/06/22/028235/tiktok-shows-3x-more-ai-slop-than-youtube-report-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [TikTok Shows 3x More AI Slop Than YouTube, Report Finds](https://tech.slashdot.org/story/26/06/22/028235/tiktok-shows-3x-more-ai-slop-than-youtube-report-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-22, 02:47:00](https://soylentnews.org/article.pl?sid=26/06/20/0542204&amp;from=rss) - [‘Popa’ Botnet Linked to Publicly-Traded Israeli Firm](https://soylentnews.org/article.pl?sid=26/06/20/0542204&amp;from=rss)
* [2026-06-22, 01:48:00](https://linux.slashdot.org/story/26/06/22/0144240/someone-forked-systemd-over-its-new-birth-date-field?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Someone Forked systemd Over Its New Birth Date Field](https://linux.slashdot.org/story/26/06/22/0144240/someone-forked-systemd-over-its-new-birth-date-field?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-21, 23:27:00](https://hardware.slashdot.org/story/26/06/21/2324220/the-secret-revolution-in-battery-technology-3-d-printing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Secret Revolution in Battery Technology: 3-D Printing](https://hardware.slashdot.org/story/26/06/21/2324220/the-secret-revolution-in-battery-technology-3-d-printing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-21, 22:02:00](https://soylentnews.org/article.pl?sid=26/06/20/0543245&amp;from=rss) - [Chinese Fab SMIC&apos;s 7nm Metal Pitch Beats Intel 18A but Lags 38% on Density, Teardown Finds](https://soylentnews.org/article.pl?sid=26/06/20/0543245&amp;from=rss)
* [2026-06-21, 19:57:17](https://lobste.rs/s/lbjdlo/what_s_advice_for_llm_poisoning_artwork) - [What&apos;s the advice for LLM poisoning of artwork these days?](https://lobste.rs/s/lbjdlo/what_s_advice_for_llm_poisoning_artwork)
* [2026-06-21, 17:17:00](https://soylentnews.org/article.pl?sid=26/06/20/0538252&amp;from=rss) - [Bruce Scheier&apos;s Thoughts on Banning AI Models](https://soylentnews.org/article.pl?sid=26/06/20/0538252&amp;from=rss)
* [2026-06-21, 15:08:44](https://lobste.rs/s/kn7fi8/postmarketos_v26_06_alpen_avocado) - [postmarketOS v26.06 (Alpen Avocado) released](https://postmarketos.org/blog/2026/06/21/v26.06-release/)
* [2026-06-21, 12:29:00](https://soylentnews.org/article.pl?sid=26/06/20/0534212&amp;from=rss) - [NHS Palantir Claims Face Scrutiny After Data Suggests Uneven Results](https://soylentnews.org/article.pl?sid=26/06/20/0534212&amp;from=rss)
* [2026-06-21, 07:42:00](https://soylentnews.org/article.pl?sid=26/06/20/0145259&amp;from=rss) - [Cyberattack Sees Crops Kept In The Ground](https://soylentnews.org/article.pl?sid=26/06/20/0145259&amp;from=rss)
* [2026-06-21, 02:56:00](https://soylentnews.org/article.pl?sid=26/06/20/0140256&amp;from=rss) - [Red Hat Gives Ubuntu A Bootc Up The Backside At Canonical Shindig](https://soylentnews.org/article.pl?sid=26/06/20/0140256&amp;from=rss)
* [2026-06-21, 01:12:21](https://news.ycombinator.com/item?id=48614715) - [Polymarket has flooded social media with deceptive videos by paid creators](https://www.wsj.com/business/media/polymarket-social-media-bets-prediction-market-441cdeb5?st=HhTZY2)
* [2026-06-20, 23:33:19](https://news.ycombinator.com/item?id=48614097) - [Giant Banana Pulled Over: Driver Says Cops Have Stopped Him 100s of Times](https://cowboystatedaily.com/2026/06/18/giant-banana-pulled-over-in-montana-driver-says-cops-have-stopped-him-100s-of-times/)
* [2026-06-20, 22:14:00](https://soylentnews.org/article.pl?sid=26/06/20/0135207&amp;from=rss) - [Where to Find the Colors Your Screen Can’t Show You](https://soylentnews.org/article.pl?sid=26/06/20/0135207&amp;from=rss)
* [2026-06-20, 17:30:00](https://soylentnews.org/article.pl?sid=26/06/19/1232209&amp;from=rss) - [NASA Said Nyet to Roscosmos Plan to Cut Into Leaky ISS Segment](https://soylentnews.org/article.pl?sid=26/06/19/1232209&amp;from=rss)
* [2026-06-20, 13:33:37](https://news.ycombinator.com/item?id=48609129) - [Canyon HUD helmet for road riding](https://media-centre.canyon.com/en-INT/266866-new-canyon-heads-up-display-helmet-could-be-a-safety-gamechanger-for-road-riding/)
* [2026-06-20, 12:45:00](https://soylentnews.org/article.pl?sid=26/06/19/1228210&amp;from=rss) - [Critical Copilot Vulnerability Allowed Hackers to Steal 2FA Code From Users](https://soylentnews.org/article.pl?sid=26/06/19/1228210&amp;from=rss)
* [2026-06-20, 07:57:00](https://soylentnews.org/article.pl?sid=26/06/19/1219225&amp;from=rss) - [The Challenges of Typesetting Arabic Script](https://soylentnews.org/article.pl?sid=26/06/19/1219225&amp;from=rss)
* [2026-06-20, 02:29:21](https://news.ycombinator.com/item?id=48605776) - [Cyberdecks, going analog, and convivial technology](https://blog.hydroponictrash.solar/cyberdecks-going-analog-and-convivial-technology/)
* [2026-06-20, 02:14:00](https://soylentnews.org/article.pl?sid=26/06/19/1216220&amp;from=rss) - [NASA Management Wants a Word and Won&apos;t Say Why](https://soylentnews.org/article.pl?sid=26/06/19/1216220&amp;from=rss)
* [2026-06-20, 01:55:16](https://news.ycombinator.com/item?id=48605561) - [Help I accidentally a wigglegram](https://lmao.center/blog/wiggle-accidents/)
* [2026-06-19, 21:31:00](https://soylentnews.org/article.pl?sid=26/06/19/1212211&amp;from=rss) - [The FBI Built its Own Replica Small Town to Simulate Real-World Cyberattacks](https://soylentnews.org/article.pl?sid=26/06/19/1212211&amp;from=rss)
* [2026-06-19, 16:46:00](https://soylentnews.org/article.pl?sid=26/06/19/1210211&amp;from=rss) - [Cockroaches Scurry Around With Thousands of Pieces of Bacterial Genomes](https://soylentnews.org/article.pl?sid=26/06/19/1210211&amp;from=rss)
* [2026-06-19, 13:51:49](https://news.ycombinator.com/item?id=48598591) - [Windows NT for GameCube/Wii](https://github.com/Wack0/entii-for-workcubes)
* [2026-06-19, 12:00:00](https://soylentnews.org/article.pl?sid=26/06/19/120238&amp;from=rss) - [A Chinese Rocket Breaks Apart Dangerously Close to the Starlink Constellation](https://soylentnews.org/article.pl?sid=26/06/19/120238&amp;from=rss)
* [2026-06-19, 11:06:04](https://news.ycombinator.com/item?id=48597221) - [My Mathematical Regression](https://blog.dahl.dev/posts/my-mathematical-regression/)
