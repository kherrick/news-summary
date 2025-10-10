# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Engineering Innovations

* [Liquid Glass Is Cracked, and Usability Suffers in iOS 26](https://www.nngroup.com/articles/liquid-glass/) ([comments](https://news.ycombinator.com/item?id=45544044))

* [Qualcomm Buys Arduino](https://soylentnews.org/article.pl?sid=25/10/10/1055230&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/10/10/1055230&amp;from=rss))

* [Toyota aims to launch the 'first' all-solid-state EV batteries](https://electrek.co/2025/10/08/toyota-aims-to-launch-worlds-first-all-solid-state-ev-batteries/) ([comments](https://news.ycombinator.com/item?id=45542423))

* [Show HN: Semantic search over the National Gallery of Art](https://nga.demo.mixedbread.com/) ([comments](https://news.ycombinator.com/item?id=45543471))

## Climate and Energy Policies

* [Climate Goals Go Up in Smoke as US Datacenters Turn To Coal](https://news.slashdot.org/story/25/10/10/1514208/climate-goals-go-up-in-smoke-as-us-datacenters-turn-to-coal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.slashdot.org/story/25/10/10/1514208/climate-goals-go-up-in-smoke-as-us-datacenters-turn-to-coal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Australia's Queensland Reverses Policy, Pledges To Keep Using Coal Power At Least Into the 2040s](https://news.slashdot.org/story/25/10/10/1748253/australias-queensland-reverses-policy-pledges-to-keep-using-coal-power-at-least-into-the-2040s?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.slashdot.org/story/25/10/10/1748253/australias-queensland-reverses-policy-pledges-to-keep-using-coal-power-at-least-into-the-2040s?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Artificial Intelligence and Automation

* [It's OpenAI's world, we're just living in it](https://stratechery.com/2025/its-openais-world-were-just-living-in-it/) ([comments](https://news.ycombinator.com/item?id=45541125))

* [AI Push Drives Record Job Cuts at Top India Private Employer TCS](https://slashdot.org/story/25/10/10/1437257/ai-push-drives-record-job-cuts-at-top-india-private-employer-tcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://slashdot.org/story/25/10/10/1437257/ai-push-drives-record-job-cuts-at-top-india-private-employer-tcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Software and Web Development

* [The illegible nature of software development talent](https://surfingcomplexity.blog/2025/10/08/the-illegible-nature-of-software-development-talent/) ([comments](https://news.ycombinator.com/item?id=45541600))

* [Notes on switching to Helix from vim](https://jvns.ca/blog/2025/10/10/notes-on-switching-to-helix-from-vim/) ([comments](https://lobste.rs/s/rahklm/notes_on_switching_helix_from_vim), [comments](https://news.ycombinator.com/item?id=45539609))

## Environmental and Scientific Advances

* [Ocean CO2 Becomes Sustainable Plastic, Thanks to Modified Microbes](https://soylentnews.org/article.pl?sid=25/10/10/003237&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/10/10/003237&amp;from=rss))

* [Are VPNs Under Attack? an Anti-Censorship Group Speaks Out](https://soylentnews.org/article.pl?sid=25/10/07/2334243&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/10/07/2334243&amp;from=rss))

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

* [2025-10-10, 21:35:22](https://news.ycombinator.com/item?id=45544044) - [Liquid Glass Is Cracked, and Usability Suffers in iOS 26](https://www.nngroup.com/articles/liquid-glass/)
* [2025-10-10, 21:22:00](https://it.slashdot.org/story/25/10/10/1754212/the-people-rescuing-forgotten-knowledge-trapped-on-old-floppy-disks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The People Rescuing Forgotten Knowledge Trapped On Old Floppy Disks](https://it.slashdot.org/story/25/10/10/1754212/the-people-rescuing-forgotten-knowledge-trapped-on-old-floppy-disks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-10, 21:14:00](https://soylentnews.org/article.pl?sid=25/10/10/1055230&amp;from=rss) - [Qualcomm Buys Arduino](https://soylentnews.org/article.pl?sid=25/10/10/1055230&amp;from=rss)
* [2025-10-10, 21:09:44](https://news.ycombinator.com/item?id=45543811) - [How to save the world with ZFS and 12 USB sticks: 4th anniversary video (2011)](https://constantin.glez.de/posts/2011-01-24-how-to-save-the-world-with-zfs-and-12-usb-sticks-4th-anniversary-video-re-release-edition/)
* [2025-10-10, 20:41:00](https://news.slashdot.org/story/25/10/10/1748253/australias-queensland-reverses-policy-pledges-to-keep-using-coal-power-at-least-into-the-2040s?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Australia&apos;s Queensland Reverses Policy, Pledges To Keep Using Coal Power At Least Into the 2040s](https://news.slashdot.org/story/25/10/10/1748253/australias-queensland-reverses-policy-pledges-to-keep-using-coal-power-at-least-into-the-2040s?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-10, 20:34:19](https://news.ycombinator.com/item?id=45543475) - [I built physical album cards with NFC tags to teach my son music discovery](https://fulghum.io/album-cards)
* [2025-10-10, 20:33:25](https://news.ycombinator.com/item?id=45543471) - [Show HN: Semantic search over the National Gallery of Art](https://nga.demo.mixedbread.com/)
* [2025-10-10, 20:01:00](https://news.slashdot.org/story/25/10/10/1746232/how-plastic-goods-took-over-the-world-creating-a-throwaway-culture?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Plastic Goods Took Over the World, Creating a Throwaway Culture](https://news.slashdot.org/story/25/10/10/1746232/how-plastic-goods-took-over-the-world-creating-a-throwaway-culture?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-10, 19:20:00](https://tech.slashdot.org/story/25/10/10/1732255/chrome-will-automatically-disable-web-notifications-you-dont-care-about?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chrome Will Automatically Disable Web Notifications You Don&apos;t Care About](https://tech.slashdot.org/story/25/10/10/1732255/chrome-will-automatically-disable-web-notifications-you-dont-care-about?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-10, 18:55:30](https://news.ycombinator.com/item?id=45542444) - [Does our “need for speed” make our wi-fi suck?](https://orb.net/blog/does-speed-make-wifi-suck)
* [2025-10-10, 18:53:22](https://news.ycombinator.com/item?id=45542423) - [Toyota aims to launch the &apos; first&apos; all-solid-state EV batteries](https://electrek.co/2025/10/08/toyota-aims-to-launch-worlds-first-all-solid-state-ev-batteries/)
* [2025-10-10, 18:42:00](https://news.slashdot.org/story/25/10/10/1514208/climate-goals-go-up-in-smoke-as-us-datacenters-turn-to-coal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Climate Goals Go Up in Smoke as US Datacenters Turn To Coal](https://news.slashdot.org/story/25/10/10/1514208/climate-goals-go-up-in-smoke-as-us-datacenters-turn-to-coal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-10, 18:25:08](https://news.ycombinator.com/item?id=45542145) - [Google, Meta and Microsoft to stop showing political ads in the EU](https://www.politico.eu/article/eu-political-ad-rules-google-meta-microsoft-big-tech-kick-in/)
* [2025-10-10, 18:01:00](https://apple.slashdot.org/story/25/10/10/1610213/apple-doubles-its-biggest-bug-bounty-reward-to-2-million?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Doubles Its Biggest Bug Bounty Reward To $2 Million](https://apple.slashdot.org/story/25/10/10/1610213/apple-doubles-its-biggest-bug-bounty-reward-to-2-million?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-10, 17:37:43](https://news.ycombinator.com/item?id=45541600) - [The illegible nature of software development talent](https://surfingcomplexity.blog/2025/10/08/the-illegible-nature-of-software-development-talent/)
* [2025-10-10, 17:25:00](https://yro.slashdot.org/story/25/10/10/1725247/nso-to-be-acquired-by-us-investors-ending-israeli-control-of-pegasus-maker?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NSO To Be Acquired By US Investors, Ending Israeli Control of Pegasus Maker](https://yro.slashdot.org/story/25/10/10/1725247/nso-to-be-acquired-by-us-investors-ending-israeli-control-of-pegasus-maker?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-10, 17:01:04](https://news.ycombinator.com/item?id=45541125) - [It&apos;s OpenAI&apos;s world, we&apos;re just living in it](https://stratechery.com/2025/its-openais-world-were-just-living-in-it/)
* [2025-10-10, 16:41:00](https://it.slashdot.org/story/25/10/10/1510217/poland-says-cyberattacks-on-critical-infrastructure-rising-blames-russia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Poland Says Cyberattacks on Critical Infrastructure Rising, Blames Russia](https://it.slashdot.org/story/25/10/10/1510217/poland-says-cyberattacks-on-critical-infrastructure-rising-blames-russia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-10, 16:31:00](https://soylentnews.org/article.pl?sid=25/10/10/003237&amp;from=rss) - [Ocean CO2 Becomes Sustainable Plastic, Thanks to Modified Microbes](https://soylentnews.org/article.pl?sid=25/10/10/003237&amp;from=rss)
* [2025-10-10, 16:25:35](https://lobste.rs/s/h4itq1/igalia_servo_sovereign_tech_fund) - [Igalia, Servo, and the Sovereign Tech Fund](https://www.igalia.com/2025/10/09/Igalia,-Servo,-and-the-Sovereign-Tech-Fund.html)
* [2025-10-10, 16:01:00](https://slashdot.org/story/25/10/10/1437257/ai-push-drives-record-job-cuts-at-top-india-private-employer-tcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Push Drives Record Job Cuts at Top India Private Employer TCS](https://slashdot.org/story/25/10/10/1437257/ai-push-drives-record-job-cuts-at-top-india-private-employer-tcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-10, 15:37:27](https://news.ycombinator.com/item?id=45540171) - [Show HN: Gitcasso – Syntax Highlighting and Draft Recovery for GitHub Comments](https://github.com/diffplug/gitcasso)
* [2025-10-10, 15:31:42](https://lobste.rs/s/ri7m8b/mesh_shaders_current_year) - [Mesh Shaders In The Current Year](https://www.supergoodcode.com/mesh-shaders-in-the-current-year/)
* [2025-10-10, 15:26:54](https://lobste.rs/s/gxtrdn/major_evolution_apple_security_bounty) - [A major evolution of Apple Security Bounty, with the industry&apos;s top awards for the most advanced research](https://security.apple.com/blog/apple-security-bounty-evolved/)
* [2025-10-10, 15:21:00](https://tech.slashdot.org/story/25/10/10/1431240/meta-tells-workers-building-metaverse-to-use-ai-to-go-5x-faster?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Tells Workers Building Metaverse To Use AI to &apos;Go 5x Faster&apos;](https://tech.slashdot.org/story/25/10/10/1431240/meta-tells-workers-building-metaverse-to-use-ai-to-go-5x-faster?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-10, 15:20:04](https://lobste.rs/s/rahklm/notes_on_switching_helix_from_vim) - [Notes on switching to Helix from vim](https://jvns.ca/blog/2025/10/10/notes-on-switching-to-helix-from-vim/)
* [2025-10-10, 15:11:04](https://news.ycombinator.com/item?id=45539943) - [Ryanair flight landed at Manchester airport with six minutes of fuel left](https://www.theguardian.com/business/2025/oct/10/ryanair-flight-landed-at-manchester-airport-with-six-minutes-of-fuel-left-flight-log-suggests)
* [2025-10-10, 15:05:20](https://lobste.rs/s/0ua1s5/retrospective_survey_2024_2025_open) - [A Retrospective Survey of 2024/2025 Open Source Supply Chain Compromises](https://words.filippo.io/compromise-survey/)
* [2025-10-10, 14:40:00](https://games.slashdot.org/story/25/10/10/1029240/ubisoft-cancelled-a-post-civil-war-assassins-creed-last-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ubisoft Cancelled a Post-Civil War Assassin&apos;s Creed Last Year](https://games.slashdot.org/story/25/10/10/1029240/ubisoft-cancelled-a-post-civil-war-assassins-creed-last-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-10, 14:37:31](https://news.ycombinator.com/item?id=45539609) - [Notes on switching to Helix from Vim](https://jvns.ca/blog/2025/10/10/notes-on-switching-to-helix-from-vim/)
* [2025-10-10, 14:11:15](https://news.ycombinator.com/item?id=45539296) - [All-natural geoengineering with Frank Herbert&apos;s Dune](https://www.governance.fyi/p/all-natural-geoengineering-with-frank)
* [2025-10-10, 14:04:51](https://lobste.rs/s/ifalk6/great_software_quality_collapse_how_we) - [The Great Software Quality Collapse: How We Normalized Catastrophe](https://techtrenches.substack.com/p/the-great-software-quality-collapse)
* [2025-10-10, 14:00:00](https://slashdot.org/story/25/10/10/1021221/amazons-giant-ads-have-ruined-the-echo-show?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon&apos;s Giant Ads Have Ruined the Echo Show](https://slashdot.org/story/25/10/10/1021221/amazons-giant-ads-have-ruined-the-echo-show?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-10, 13:27:43](https://news.ycombinator.com/item?id=45538760) - [Google Safe Browsing incident](https://www.statichost.eu/blog/google-safe-browsing/)
* [2025-10-10, 13:23:09](https://lobste.rs/s/wtmahb/year_gentoo) - [A Year of Gentoo](https://arch.dog/bark/year-of-gentoo)
* [2025-10-10, 12:45:22](https://lobste.rs/s/cireck/how_check_for_overlapping_intervals) - [How to check for overlapping intervals](https://zayenz.se/blog/post/how-to-check-for-overlapping-intervals/)
* [2025-10-10, 12:23:57](https://lobste.rs/s/bo0chl/new_breed_analyzers) - [A new breed of analyzers](https://daniel.haxx.se/blog/2025/10/10/a-new-breed-of-analyzers/)
* [2025-10-10, 12:21:02](https://news.ycombinator.com/item?id=45538137) - [Igalia, Servo, and the Sovereign Tech Fund](https://www.igalia.com/2025/10/09/Igalia,-Servo,-and-the-Sovereign-Tech-Fund.html)
* [2025-10-10, 12:18:34](https://lobste.rs/s/c0w2jq/conversation_between_richard_feldman) - [A Conversation Between Richard Feldman (Roc Creator) and Andrew Kelley (Zig Creator)](https://www.youtube.com/watch?v=w74rC-6caxE)
* [2025-10-10, 12:07:01](https://lobste.rs/s/rzgfoh/automated_lean_proofs_for_every_type) - [Automated Lean Proofs for Every Type](https://www.galois.com/articles/automated-lean-proofs-for-every-type)
* [2025-10-10, 12:01:02](https://news.ycombinator.com/item?id=45537938) - [Weave (YC W25) is hiring a founding AI engineer](https://www.ycombinator.com/companies/weave-3/jobs/SqFnIFE-founding-ai-engineer)
* [2025-10-10, 11:57:58](https://lobste.rs/s/ugohwe/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/ugohwe/what_are_you_doing_this_weekend)
* [2025-10-10, 11:56:05](https://news.ycombinator.com/item?id=45537890) - [OpenGL: Mesh shaders in the current year](https://www.supergoodcode.com/mesh-shaders-in-the-current-year/)
* [2025-10-10, 11:47:00](https://soylentnews.org/article.pl?sid=25/10/10/000255&amp;from=rss) - [The Transistor Was Patented 75 Years Ago Today](https://soylentnews.org/article.pl?sid=25/10/10/000255&amp;from=rss)
* [2025-10-10, 11:11:00](https://soylentnews.org/breakingnews/article.pl?sid=25/10/10/1053212&amp;from=rss) - [Nobel Prizes 2025 - Venezuelan Opposition Leader María Corina Machado Awarded Peace Prize](https://soylentnews.org/breakingnews/article.pl?sid=25/10/10/1053212&amp;from=rss)
* [2025-10-10, 10:00:00](https://slashdot.org/story/25/10/09/2226210/openai-flags-competition-concerns-to-eu-regulators?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Flags Competition Concerns To EU Regulators](https://slashdot.org/story/25/10/09/2226210/openai-flags-competition-concerns-to-eu-regulators?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-10, 09:44:44](https://lobste.rs/s/whbfzn/programming_sun_year_with_daylight) - [Programming in the Sun: A Year with the Daylight Computer](https://wickstrom.tech/2025-10-10-programming-in-the-sun-a-year-with-the-daylight-computer.html)
* [2025-10-10, 09:32:31](https://lobste.rs/s/nx57oo/why_i_switched_from_htmx_datastar) - [Why I switched from HTMX to Datastar](https://everydaysuperpowers.dev/articles/why-i-switched-from-htmx-to-datastar/)
* [2025-10-10, 09:01:54](https://news.ycombinator.com/item?id=45536694) - [Show HN: I invented a new generative model and got accepted to ICLR](https://discrete-distribution-networks.github.io/)
* [2025-10-10, 08:59:05](https://lobste.rs/s/gid0gu/critical_window_shadow_libraries_2024) - [The critical window of shadow libraries (2024)](https://annas-archive.org/blog/critical-window.html)
* [2025-10-10, 08:46:40](https://news.ycombinator.com/item?id=45536618) - [Datastar: Lightweight hypermedia framework for building interactive web apps](https://data-star.dev/)
* [2025-10-10, 08:45:21](https://lobste.rs/s/izvb9b/multi_core_by_default) - [Multi-Core By Default](https://www.rfleury.com/p/multi-core-by-default)
* [2025-10-10, 07:50:54](https://news.ycombinator.com/item?id=45536325) - [A story about bypassing air Canada&apos;s in-flight network restrictions](https://ramsayleung.github.io/en/post/2025/a_story_about_bypassing_air_canadas_in-flight_network_restrictions/)
* [2025-10-10, 07:11:06](https://news.ycombinator.com/item?id=45536124) - [Multi-Core by Default](https://www.rfleury.com/p/multi-core-by-default)
* [2025-10-10, 07:03:00](https://soylentnews.org/article.pl?sid=25/10/09/2356204&amp;from=rss) - [Windows 7 Usage Jumps as Users Refuse to Upgrade to Windows 11 in Wake of Windows 10 End of Support](https://soylentnews.org/article.pl?sid=25/10/09/2356204&amp;from=rss)
* [2025-10-10, 07:00:00](https://games.slashdot.org/story/25/10/09/2216257/rubiks-cube-gets-a-299-update-complete-with-ips-screens-and-its-own-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rubik&apos;s Cube Gets a $299 Update, Complete With IPS Screens and Its Own Apps](https://games.slashdot.org/story/25/10/09/2216257/rubiks-cube-gets-a-299-update-complete-with-ips-screens-and-its-own-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-10, 05:28:08](https://lobste.rs/s/vlreib/is_odin_just_more_boring_c) - [Is Odin Just a More Boring C?](https://dayvster.com/blog/is-odin-just-a-more-boring-c/)
* [2025-10-10, 05:27:58](https://lobste.rs/s/p8hshz/lobsters_interview_with_zdsmith) - [Lobsters Interview with Zdsmith](https://lobste.rs/s/p8hshz/lobsters_interview_with_zdsmith)
* [2025-10-10, 03:45:29](https://news.ycombinator.com/item?id=45535202) - [My approach to building large technical projects (2023)](https://mitchellh.com/writing/building-large-technical-projects)
* [2025-10-10, 03:39:57](https://news.ycombinator.com/item?id=45535183) - [Love C, hate C: Web framework memory problems](https://alew.is/lava.html)
* [2025-10-10, 03:30:00](https://news.slashdot.org/story/25/10/09/2212220/scientists-seek-to-turbocharge-a-natural-process-that-cools-the-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Seek To Turbocharge a Natural Process That Cools the Earth](https://news.slashdot.org/story/25/10/09/2212220/scientists-seek-to-turbocharge-a-natural-process-that-cools-the-earth?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-10, 02:21:00](https://soylentnews.org/article.pl?sid=25/10/07/2334243&amp;from=rss) - [Are VPNs Under Attack? an Anti-Censorship Group Speaks Out](https://soylentnews.org/article.pl?sid=25/10/07/2334243&amp;from=rss)
* [2025-10-09, 23:01:09](https://lobste.rs/s/esvr7z/github_will_prioritize_migrating_azure) - [GitHub Will Prioritize Migrating to Azure Over Feature Development](https://thenewstack.io/github-will-prioritize-migrating-to-azure-over-feature-development/)
* [2025-10-09, 21:43:00](https://soylentnews.org/article.pl?sid=25/10/07/2330231&amp;from=rss) - [Here&apos;s the Real Reason Endurance Sank](https://soylentnews.org/article.pl?sid=25/10/07/2330231&amp;from=rss)
* [2025-10-09, 20:38:52](https://lobste.rs/s/6kfcqo/magnolia_interactive_shell_navigation) - [magnolia: Interactive shell navigation and history](https://codeberg.org/mtmn/magnolia)
* [2025-10-09, 20:08:02](https://lobste.rs/s/yzfo82/making_slint_desktop_ready) - [Making Slint Desktop-Ready](https://slint.dev/blog/making-slint-desktop-ready)
* [2025-10-09, 19:32:27](https://lobste.rs/s/rwvh6g/examples_are_best_documentation) - [Examples are the best documentation](https://rakhim.exotext.com/examples-are-the-best-documentation)
* [2025-10-09, 18:06:53](https://lobste.rs/s/pds2zb/small_number_samples_can_poison_llms_any) - [A small number of samples can poison LLMs of any size](https://www.anthropic.com/research/small-samples-poison)
* [2025-10-09, 16:55:00](https://soylentnews.org/article.pl?sid=25/10/07/2326258&amp;from=rss) - [Forensic Test Recovers Fingerprints From Fired Ammunition Casings Despite Intense Heat](https://soylentnews.org/article.pl?sid=25/10/07/2326258&amp;from=rss)
* [2025-10-09, 14:18:19](https://lobste.rs/s/digojk/intel_s_open_source_strategy_is_changing) - [Intel&apos;s Open-Source Strategy Is Changing At Odds With The Ethos Of Open-Source](https://www.phoronix.com/review/intel-open-source-2025)
* [2025-10-09, 13:53:00](https://lobste.rs/s/dpm6uh/til_python_s_splitlines_does_lot_more_than) - [TIL: Python&apos;s splitlines does a lot more than just newlines](https://yossarian.net/til/post/python-s-splitlines-does-a-lot-more-than-just-newlines/)
* [2025-10-09, 12:13:00](https://soylentnews.org/article.pl?sid=25/10/06/1337206&amp;from=rss) - [UK Submarine Cable Security is All at Sea](https://soylentnews.org/article.pl?sid=25/10/06/1337206&amp;from=rss)
* [2025-10-09, 07:25:00](https://soylentnews.org/article.pl?sid=25/10/06/1331238&amp;from=rss) - [The QNX Operating System: A Deep Dive Into the History of QNX!](https://soylentnews.org/article.pl?sid=25/10/06/1331238&amp;from=rss)
* [2025-10-09, 02:41:00](https://soylentnews.org/article.pl?sid=25/10/06/1325211&amp;from=rss) - [Human Skin Cells Turned Into Fertilisable Eggs for First Time](https://soylentnews.org/article.pl?sid=25/10/06/1325211&amp;from=rss)
* [2025-10-08, 21:58:00](https://soylentnews.org/article.pl?sid=25/10/06/1313245&amp;from=rss) - [Google Clarifies That Owners Will Still Be Able To Sideload Unverified Apps](https://soylentnews.org/article.pl?sid=25/10/06/1313245&amp;from=rss)
* [2025-10-08, 17:14:00](https://soylentnews.org/article.pl?sid=25/10/06/1314255&amp;from=rss) - [Ultra-Thin Sodium Films Offer Low-Cost Alternative to Gold and Silver in Optical Technologies](https://soylentnews.org/article.pl?sid=25/10/06/1314255&amp;from=rss)
* [2025-10-08, 12:31:00](https://soylentnews.org/article.pl?sid=25/10/06/1158252&amp;from=rss) - [Apple Removes ICE Tracking Apps After Pressure by Trump Administration](https://soylentnews.org/article.pl?sid=25/10/06/1158252&amp;from=rss)
* [2025-10-08, 07:44:00](https://soylentnews.org/article.pl?sid=25/10/05/2326245&amp;from=rss) - [First Dark Matter Sub-Halo Found in the Milky Way](https://soylentnews.org/article.pl?sid=25/10/05/2326245&amp;from=rss)
* [2025-10-08, 05:24:51](https://news.ycombinator.com/item?id=45512373) - [NanoMi: Source-available transmission electron microscope](https://nanomi.org/)
* [2025-10-08, 03:03:00](https://soylentnews.org/article.pl?sid=25/10/06/1151211&amp;from=rss) - [Instagram Says It is Not Listening to Users’ Microphones to Serve Ads](https://soylentnews.org/article.pl?sid=25/10/06/1151211&amp;from=rss)
* [2025-10-07, 22:17:00](https://soylentnews.org/article.pl?sid=25/10/05/2328230&amp;from=rss) - [New Test to Track How Medicines &apos;Hitchhike&apos; on Cholesterol](https://soylentnews.org/article.pl?sid=25/10/05/2328230&amp;from=rss)
* [2025-10-07, 17:32:00](https://soylentnews.org/article.pl?sid=25/10/06/1143245&amp;from=rss) - [US-Made Leonidas Microwave Weapon Takes Down 49 Drones With a Single Blast](https://soylentnews.org/article.pl?sid=25/10/06/1143245&amp;from=rss)
* [2025-10-07, 12:49:00](https://soylentnews.org/article.pl?sid=25/10/05/2320242&amp;from=rss) - [Twisted Graphene Reveals Double-Dome Superconductivity Controlled by Electric Field](https://soylentnews.org/article.pl?sid=25/10/05/2320242&amp;from=rss)
* [2025-10-07, 07:58:00](https://soylentnews.org/article.pl?sid=25/10/05/201242&amp;from=rss) - [Harvard Researchers Develop First Ever Continuously Operating Quantum Computer](https://soylentnews.org/article.pl?sid=25/10/05/201242&amp;from=rss)
* [2025-10-07, 03:16:00](https://soylentnews.org/article.pl?sid=25/10/05/1955231&amp;from=rss) - [Venture Capital Valuations of AI Startups Surge and Raise Fears of an AI Bubble Forming](https://soylentnews.org/article.pl?sid=25/10/05/1955231&amp;from=rss)
* [2025-10-06, 22:31:00](https://soylentnews.org/article.pl?sid=25/10/05/1935200&amp;from=rss) - [Earth&apos;s Crust is Tearing Apart Off the Pacific Northwest—and That&apos;s Not Necessarily Bad News](https://soylentnews.org/article.pl?sid=25/10/05/1935200&amp;from=rss)
* [2025-10-06, 17:44:00](https://soylentnews.org/article.pl?sid=25/10/05/1356208&amp;from=rss) - [Flock’s Gunshot Detection Microphones Will Start Listening for Human Voices](https://soylentnews.org/article.pl?sid=25/10/05/1356208&amp;from=rss)
* [2025-10-06, 16:31:27](https://news.ycombinator.com/item?id=45493128) - [Show HN: A Digital Twin of my coffee roaster that runs in the browser](https://autoroaster.com/)
* [2025-10-06, 12:59:00](https://soylentnews.org/article.pl?sid=25/10/05/0119224&amp;from=rss) - [JWST Finds an Exoplanet Around a Pulsar Whose Atmosphere is All Carbon](https://soylentnews.org/article.pl?sid=25/10/05/0119224&amp;from=rss)
* [2025-10-06, 12:42:19](https://news.ycombinator.com/item?id=45490740) - [Ask HN: What&apos;s the best hackable smart TV?](https://news.ycombinator.com/item?id=45490740)
* [2025-10-06, 10:18:20](https://news.ycombinator.com/item?id=45489757) - [Ohno Type School: A (2020)](https://ohnotype.co/blog/ohno-type-school-a)
* [2025-10-06, 08:13:00](https://soylentnews.org/article.pl?sid=25/10/05/0111221&amp;from=rss) - [How Can We Keep Livestock Safe as Wolves Return?](https://soylentnews.org/article.pl?sid=25/10/05/0111221&amp;from=rss)
* [2025-10-06, 03:30:00](https://soylentnews.org/article.pl?sid=25/10/05/012221&amp;from=rss) - [Setting Bounds on SETI](https://soylentnews.org/article.pl?sid=25/10/05/012221&amp;from=rss)
* [2025-10-06, 00:37:50](https://news.ycombinator.com/item?id=45486550) - [Dimensions of everyday objects](https://www.dimensions.com/)
