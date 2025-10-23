# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Advancements and Challenges

* [Gboard's Latest Update Removes the Period and Comma Keys on Android - Discusses the controversial design change in popular keyboard software](https://it.slashdot.org/story/25/10/23/1432213/gboards-latest-update-removes-the-period-and-comma-keys-on-android?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Fujitsu's New Laptop in Japan Includes Optical Drive Abandoned Elsewhere - Highlights regional design preferences in hardware development](https://it.slashdot.org/story/25/10/23/1429225/fujitsus-new-laptop-in-japan-includes-optical-drive-abandoned-elsewhere?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Microsoft puts Office Online Server on the chopping block - Covers Microsoft's decision to phase out its server-side office solution](https://www.theregister.com/2025/10/22/microsoft_office_online_server/)

* [Apple Readies New Framework To Let iPhone Users Migrate App Data To Android - A significant move targeting cross-platform user flexibility](https://apple.slashdot.org/story/25/10/23/0318241/apple-readies-new-framework-to-let-iphone-users-migrate-app-data-to-android?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Environmental and Global Economic Issues

* [US hits $38T in debt. Fastest accumulation of $1T outside pandemic - Highlights worrying economic trends](https://apnews.com/article/trump-treasury-debt-ceiling-bessent-09575f13ca95c2f1beb38234b2cbe85b)

* [American E-waste is Causing a 'Hidden Tsunami' in Southeast Asia, Report Says - Examines the environmental burden on developing nations](https://news.slashdot.org/story/25/10/23/1415234/american-e-waste-is-causing-a-hidden-tsunami-in-southeast-asia-report-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Europe's Plan to Ditch US Tech Giants is Built on Open Source - and It's Gaining Steam - A look into Europe's strategic pivot for technological sovereignty](https://soylentnews.org/article.pl?sid=25/10/22/126221&amp;from=rss)

## Security and Integrity in Tech Systems

* [US axes website for reporting human rights abuses by US-armed foreign forces - Focus on silenced platforms addressing human rights](https://www.bbc.com/news/articles/cqx30vnwd4do)

* [Hackers Exploit Cisco SNMP Flaw to Deploy Rootkit on Switches - Details on the vulnerabilities exploited in networking hardware](https://soylentnews.org/article.pl?sid=25/10/22/032220&amp;from=rss)

* [SpaceX Disables 2,500 Starlink Terminals Allegedly Used By Asian Scam Centers - Addresses misuse of high-tech connectivity solutions](https://arstechnica.com/tech-policy/2025/10/starlink-blocks-2500-dishes-allegedly-used-by-myanmars-notorious-scam-centers/)

* [A SiriusXM Update Sent Some Audi Screens Into a Forced-Reboot Loop For Months - Highlights implications of software failures in consumer appliances](https://tech.slashdot.org/story/25/10/23/003245/a-siriusxm-update-sent-some-audi-screens-into-a-forced-reboot-loop-for-months?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Innovative Research and Technology

* [Willow quantum chip demonstrates verifiable quantum advantage on hardware - Offers insight into progress in quantum computing](https://blog.google/technology/research/quantum-echoes-willow-verifiable-quantum-advantage/)

* [Radios, how do they work? (2024) - Explains the mechanics behind communication technology](https://lcamtuf.substack.com/p/radios-how-do-they-work)

* [Debian Technical Committee overrides systemd change - Discusses critical decisions in open-source development](https://lwn.net/Articles/1041316/)

* [I spent a year of my life making an ASN.1 compiler in D - Highlights commitment to specialized software creation](https://bradley.chatha.dev/blog/dlang-propaganda/asn1-compiler-in-d/)

## Artificial Intelligence Developments

* [OpenAI Launches Atlas Browser - A new entrant showcasing advanced AI-integrated browser features](https://soylentnews.org/article.pl?sid=25/10/22/0317230&amp;from=rss)

* [AI Assistants Misrepresent News Content 45% of the Time - Analyzing trust and reliability in AI news assistants](https://news.slashdot.org/story/25/10/22/2011239/ai-assistants-misrepresent-news-content-45-of-the-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

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

* [2025-10-23, 16:01:00](https://it.slashdot.org/story/25/10/23/1432213/gboards-latest-update-removes-the-period-and-comma-keys-on-android?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gboard&apos;s Latest Update Removes the Period and Comma Keys on Android](https://it.slashdot.org/story/25/10/23/1432213/gboards-latest-update-removes-the-period-and-comma-keys-on-android?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-23, 15:21:00](https://it.slashdot.org/story/25/10/23/1429225/fujitsus-new-laptop-in-japan-includes-optical-drive-abandoned-elsewhere?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fujitsu&apos;s New Laptop in Japan Includes Optical Drive Abandoned Elsewhere](https://it.slashdot.org/story/25/10/23/1429225/fujitsus-new-laptop-in-japan-includes-optical-drive-abandoned-elsewhere?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-23, 15:03:05](https://news.ycombinator.com/item?id=45682671) - [US hits $38T in debt. Fastest accumulation of $1T outside pandemic](https://apnews.com/article/trump-treasury-debt-ceiling-bessent-09575f13ca95c2f1beb38234b2cbe85b)
* [2025-10-23, 14:44:25](https://lobste.rs/s/3bs8cf/bitmasks_ruby_threads_interrupts_oh_my) - [Bitmasks, Ruby Threads and Interrupts, oh my](https://jpcamara.com/2025/10/22/bitmasks-threads-and-interrupts-concurrent.html)
* [2025-10-23, 14:40:00](https://news.slashdot.org/story/25/10/23/1415234/american-e-waste-is-causing-a-hidden-tsunami-in-southeast-asia-report-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [American E-waste is Causing a &apos;Hidden Tsunami&apos; in Southeast Asia, Report Says](https://news.slashdot.org/story/25/10/23/1415234/american-e-waste-is-causing-a-hidden-tsunami-in-southeast-asia-report-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-23, 14:37:17](https://lobste.rs/s/snbmmt/luau_s_performance) - [Luau’s Performance](https://luau.org/performance)
* [2025-10-23, 14:25:22](https://news.ycombinator.com/item?id=45682169) - [US axes website for reporting human rights abuses by US-armed foreign forces](https://www.bbc.com/news/articles/cqx30vnwd4do)
* [2025-10-23, 14:15:22](https://news.ycombinator.com/item?id=45682067) - [Microsoft puts Office Online Server on the chopping block](https://www.theregister.com/2025/10/22/microsoft_office_online_server/)
* [2025-10-23, 14:10:05](https://lobste.rs/s/oyvqp1/is_it_time_regulate_react) - [Is it Time to Regulate React?](https://dbushell.com/2025/10/23/react-regulation/)
* [2025-10-23, 14:01:07](https://lobste.rs/s/jt4wzq/tuckr_stow_alternative_with_symlink) - [Tuckr - Stow alternative with symlink checking](https://github.com/RaphGL/Tuckr)
* [2025-10-23, 14:00:00](https://games.slashdot.org/story/25/10/23/122257/microsoft-demands-30-profit-margins-from-struggling-xbox-division?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Demands 30% Profit Margins from Struggling Xbox Division](https://games.slashdot.org/story/25/10/23/122257/microsoft-demands-30-profit-margins-from-struggling-xbox-division?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-23, 13:57:16](https://lobste.rs/s/2uidwz/svg_gtk) - [SVG in GTK](https://blogs.gnome.org/gtk/2025/10/23/svg-in-gtk/)
* [2025-10-23, 13:54:36](https://news.ycombinator.com/item?id=45681850) - [We need to start doing web blocking for non-technical reasons](https://utcc.utoronto.ca/~cks/space/blog/web/WeShouldBlockForSocialReasons?showcomments)
* [2025-10-23, 13:27:02](https://lobste.rs/s/utkvsl/intel_nova_lake_could_arrive_without) - [Intel \&quot;Nova Lake\&quot; Could Arrive Without AVX10, APX, and AMX Support](https://www.techpowerup.com/342147/intel-nova-lake-could-arrive-without-avx10-apx-and-amx-support)
* [2025-10-23, 13:22:33](https://lobste.rs/s/hnwmii/4_unconventional_ways_cast_typescript) - [4 Unconventional Ways to Cast in Typescript](https://wolfgirl.dev/blog/2025-10-22-4-unconventional-ways-to-cast-in-typescript/)
* [2025-10-23, 13:19:00](https://soylentnews.org/article.pl?sid=25/10/22/126221&amp;from=rss) - [Europe&apos;s Plan to Ditch US Tech Giants is Built on Open Source - and It&apos;s Gaining Steam](https://soylentnews.org/article.pl?sid=25/10/22/126221&amp;from=rss)
* [2025-10-23, 13:04:05](https://lobste.rs/s/dufqpx/i_spent_year_my_life_making_asn_1_compiler_d) - [I spent a year of my life making an ASN.1 compiler in D](https://bradley.chatha.dev/blog/dlang-propaganda/asn1-compiler-in-d/)
* [2025-10-23, 12:47:41](https://news.ycombinator.com/item?id=45681200) - [I spent a year of my life making an ASN.1 compiler in D](https://bradley.chatha.dev/blog/dlang-propaganda/asn1-compiler-in-d/)
* [2025-10-23, 12:11:27](https://news.ycombinator.com/item?id=45680937) - [Show HN: Deta Surf – An open source and local-first AI notebook](https://github.com/deta/surf)
* [2025-10-23, 12:00:11](https://news.ycombinator.com/item?id=45680847) - [Nango (YC W23) is hiring Staff Back end Engs (remote)](https://www.nango.dev/careers)
* [2025-10-23, 11:41:34](https://lobste.rs/s/9o5pjv/length_extension_attacks_are_still_thing) - [Length-extension attacks are still a thing](https://00f.net/2025/10/23/length-extension-attacks/)
* [2025-10-23, 11:38:49](https://news.ycombinator.com/item?id=45680695) - [The Game Theory of How Algorithms Can Drive Up Prices](https://www.quantamagazine.org/the-game-theory-of-how-algorithms-can-drive-up-prices-20251022/)
* [2025-10-23, 11:15:44](https://news.ycombinator.com/item?id=45680547) - [SpaceX disables 2,500 Starlink terminals allegedly used by Asian scam centers](https://arstechnica.com/tech-policy/2025/10/starlink-blocks-2500-dishes-allegedly-used-by-myanmars-notorious-scam-centers/)
* [2025-10-23, 11:02:26](https://lobste.rs/s/zlvvd2/changes_advent_code_starting_this) - [Changes to Advent of Code starting this December](https://www.reddit.com/r/adventofcode/comments/1ocwh04/changes_to_advent_of_code_starting_this_december/)
* [2025-10-23, 10:15:12](https://news.ycombinator.com/item?id=45680237) - [PyTorch Monarch](https://pytorch.org/blog/introducing-pytorch-monarch/)
* [2025-10-23, 10:00:00](https://apple.slashdot.org/story/25/10/23/0318241/apple-readies-new-framework-to-let-iphone-users-migrate-app-data-to-android?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Readies New Framework To Let iPhone Users Migrate App Data To Android](https://apple.slashdot.org/story/25/10/23/0318241/apple-readies-new-framework-to-let-iphone-users-migrate-app-data-to-android?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-23, 08:41:21](https://news.ycombinator.com/item?id=45679638) - [C64 Blood Money](https://lemmings.info/c64-blood-money/)
* [2025-10-23, 08:36:00](https://soylentnews.org/article.pl?sid=25/10/22/0317230&amp;from=rss) - [OpenAI Launches Atlas Browser](https://soylentnews.org/article.pl?sid=25/10/22/0317230&amp;from=rss)
* [2025-10-23, 07:58:56](https://lobste.rs/s/d8rtdp/programming_with_less_than_nothing) - [Programming With Less Than Nothing](https://joshmoody.org/blog/programming-with-less-than-nothing/)
* [2025-10-23, 07:00:00](https://tech.slashdot.org/story/25/10/23/0311231/spacex-disables-2500-starlink-terminals-allegedly-used-by-asian-scam-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX Disables 2,500 Starlink Terminals Allegedly Used By Asian Scam Centers](https://tech.slashdot.org/story/25/10/23/0311231/spacex-disables-2500-starlink-terminals-allegedly-used-by-asian-scam-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-23, 05:56:23](https://news.ycombinator.com/item?id=45678603) - [Radios, how do they work? (2024)](https://lcamtuf.substack.com/p/radios-how-do-they-work)
* [2025-10-23, 05:48:02](https://news.ycombinator.com/item?id=45678549) - [VST3 audio plugin format is now MIT](https://forums.steinberg.net/t/vst-3-8-0-sdk-released/1011988)
* [2025-10-23, 05:42:31](https://news.ycombinator.com/item?id=45678511) - [Programming with Less Than Nothing](https://joshmoody.org/blog/programming-with-less-than-nothing/)
* [2025-10-23, 05:18:21](https://lobste.rs/s/yu0vd7/debian_technical_committee_overrides) - [Debian Technical Committee overrides systemd change](https://lwn.net/Articles/1041316/)
* [2025-10-23, 03:54:00](https://soylentnews.org/article.pl?sid=25/10/22/0311232&amp;from=rss) - [Apple Pioneer Bill Atkinson Was a Secret Evangelist of the ‘God Molecule’](https://soylentnews.org/article.pl?sid=25/10/22/0311232&amp;from=rss)
* [2025-10-23, 03:51:15](https://lobste.rs/s/fyrfe0/async_django_solution_search_problem) - [Async Django: a solution in search of a problem?](https://www.loopwerk.io/articles/2025/async-django-why/)
* [2025-10-23, 03:30:00](https://tech.slashdot.org/story/25/10/23/003245/a-siriusxm-update-sent-some-audi-screens-into-a-forced-reboot-loop-for-months?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A SiriusXM Update Sent Some Audi Screens Into a Forced-Reboot Loop For Months](https://tech.slashdot.org/story/25/10/23/003245/a-siriusxm-update-sent-some-audi-screens-into-a-forced-reboot-loop-for-months?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-23, 03:09:09](https://lobste.rs/s/mw0pus/summary_amazon_dynamodb_service) - [Summary of the Amazon DynamoDB Service Disruption in Northern Virginia (US-EAST-1) Region](https://aws.amazon.com/message/101925/)
* [2025-10-23, 02:13:52](https://lobste.rs/s/ghtqi3/explicit_capture_clauses) - [Explicit capture clauses](https://smallcultfollowing.com/babysteps/blog/2025/10/22/explicit-capture-clauses/)
* [2025-10-23, 01:30:24](https://lobste.rs/s/d3pdfi/my_2_month_beef_with_my_own_linux) - [My 2 month beef with my own Linux environment. (Developer cautionary tale)](https://www.reddit.com/r/linux/comments/1odq7ti/fixing_my_broken_system_while_breaking_my_fixed/)
* [2025-10-23, 01:25:00](https://tech.slashdot.org/story/25/10/22/2351229/meta-lays-off-600-from-bloated-ai-unit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Lays Off 600 From &apos;Bloated&apos; AI Unit](https://tech.slashdot.org/story/25/10/22/2351229/meta-lays-off-600-from-bloated-ai-unit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-23, 00:45:00](https://tech.slashdot.org/story/25/10/22/2030236/pitchfork-is-beta-testing-user-reviews-and-comments-as-it-approaches-30?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pitchfork Is Beta Testing User Reviews and Comments As It Approaches 30](https://tech.slashdot.org/story/25/10/22/2030236/pitchfork-is-beta-testing-user-reviews-and-comments-as-it-approaches-30?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-23, 00:07:30](https://lobste.rs/s/upi3xa/boa_release_v0_21_new_release_boa) - [Boa release v0.21 - a new release of Boa, a JavaScript engine written in Rust](https://boajs.dev/blog/2025/10/22/boa-release-21)
* [2025-10-23, 00:02:00](https://hardware.slashdot.org/story/25/10/22/2022215/google-porting-all-internal-workloads-to-arm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Porting All Internal Workloads To Arm](https://hardware.slashdot.org/story/25/10/22/2022215/google-porting-all-internal-workloads-to-arm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 23:34:51](https://lobste.rs/s/ew0tqv/redistributing_git_with_nostr) - [Redistributing Git with Nostr](https://fiatjaf.com/18ff5416.html)
* [2025-10-22, 23:20:00](https://news.slashdot.org/story/25/10/22/2011239/ai-assistants-misrepresent-news-content-45-of-the-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Assistants Misrepresent News Content 45% of the Time](https://news.slashdot.org/story/25/10/22/2011239/ai-assistants-misrepresent-news-content-45-of-the-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 23:09:00](https://soylentnews.org/article.pl?sid=25/10/22/032220&amp;from=rss) - [Hackers Exploit Cisco SNMP Flaw to Deploy Rootkit on Switches](https://soylentnews.org/article.pl?sid=25/10/22/032220&amp;from=rss)
* [2025-10-22, 22:40:00](https://bsd.slashdot.org/story/25/10/22/205215/openbsd-78-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenBSD 7.8 Released](https://bsd.slashdot.org/story/25/10/22/205215/openbsd-78-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 22:00:00](https://hardware.slashdot.org/story/25/10/22/1959251/samsung-galaxy-xr-is-the-first-android-xr-headset?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Samsung Galaxy XR Is the First Android XR Headset](https://hardware.slashdot.org/story/25/10/22/1959251/samsung-galaxy-xr-is-the-first-android-xr-headset?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 21:53:14](https://lobste.rs/s/fcka9i/chatgpt_s_atlas_browser_s_anti_web) - [ChatGPT&apos;s Atlas: The Browser That&apos;s Anti-Web](https://www.anildash.com/2025/10/22/atlas-anti-web-browser/)
* [2025-10-22, 21:20:00](https://news.slashdot.org/story/25/10/22/1952245/jaguar-land-rover-hack-cost-uk-economy-an-estimated-25-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jaguar Land Rover Hack Cost UK Economy an Estimated $2.5 Billion](https://news.slashdot.org/story/25/10/22/1952245/jaguar-land-rover-hack-cost-uk-economy-an-estimated-25-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 20:53:49](https://news.ycombinator.com/item?id=45675015) - [Google flags Immich sites as dangerous](https://immich.app/blog/google-flags-immich-as-dangerous)
* [2025-10-22, 20:44:00](https://news.slashdot.org/story/25/10/22/1936249/global-use-of-coal-hit-record-high-in-2024?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Global Use of Coal Hit Record High in 2024](https://news.slashdot.org/story/25/10/22/1936249/global-use-of-coal-hit-record-high-in-2024?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 20:13:31](https://news.ycombinator.com/item?id=45674568) - [Why SSA Compilers?](https://mcyoung.xyz/2025/10/21/ssa-1/)
* [2025-10-22, 19:42:36](https://news.ycombinator.com/item?id=45674166) - [Ovi: Twin backbone cross-modal fusion for audio-video generation](https://github.com/character-ai/Ovi)
* [2025-10-22, 18:27:00](https://soylentnews.org/article.pl?sid=25/10/21/1918224&amp;from=rss) - [Eavesdropping on Internal Networks via Unencrypted Satellites](https://soylentnews.org/article.pl?sid=25/10/21/1918224&amp;from=rss)
* [2025-10-22, 18:21:54](https://news.ycombinator.com/item?id=45673130) - [Accessing Max Verstappen&apos;s passport and PII through FIA bugs](https://ian.sh/fia)
* [2025-10-22, 17:26:06](https://news.ycombinator.com/item?id=45672336) - [JMAP for Calendars, Contacts and Files Now in Stalwart](https://stalw.art/blog/jmap-collaboration/)
* [2025-10-22, 17:22:21](https://lobste.rs/s/ghdv6w/i_see_future_jj) - [I see a future in jj](https://steveklabnik.com/writing/i-see-a-future-in-jj/)
* [2025-10-22, 17:07:28](https://lobste.rs/s/7uzm1p/scripts_i_wrote_i_use_all_time) - [Scripts I wrote that I use all the time](https://evanhahn.com/scripts-i-wrote-that-i-use-all-the-time/)
* [2025-10-22, 15:16:19](https://news.ycombinator.com/item?id=45670443) - [Willow quantum chip demonstrates verifiable quantum advantage on hardware](https://blog.google/technology/research/quantum-echoes-willow-verifiable-quantum-advantage/)
* [2025-10-22, 14:53:54](https://news.ycombinator.com/item?id=45670052) - [Scripts I wrote that I use all the time](https://evanhahn.com/scripts-i-wrote-that-i-use-all-the-time/)
* [2025-10-22, 13:44:29](https://lobste.rs/s/iuvukw/word_on_omarchy) - [A Word on Omarchy](https://マリウス.com/a-word-on-omarchy/)
* [2025-10-22, 13:42:00](https://soylentnews.org/article.pl?sid=25/10/21/198229&amp;from=rss) - [He Co-founded Wikipedia, Now He Says the Site Needs a Radical Change](https://soylentnews.org/article.pl?sid=25/10/21/198229&amp;from=rss)
* [2025-10-22, 12:50:55](https://lobste.rs/s/cdrvo7/how_run_1_1s_as_engineering_manager) - [How to Run 1:1s as an Engineering Manager](https://justoffbyone.com/posts/how-to-run-11s/)
* [2025-10-22, 11:40:14](https://lobste.rs/s/pwsnpd/powerletters_for_rust) - [Powerletters for Rust](https://brson.github.io/2025/10/07/powerletters-for-rust)
* [2025-10-22, 09:03:40](https://news.ycombinator.com/item?id=45666497) - [Element: setHTML() method](https://developer.mozilla.org/en-US/docs/Web/API/Element/setHTML)
* [2025-10-22, 09:02:41](https://lobste.rs/s/jgwhwy/element_sethtml_method_on_mdn) - [Element: setHTML() method on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/setHTML)
* [2025-10-22, 08:58:00](https://soylentnews.org/article.pl?sid=25/10/21/1229253&amp;from=rss) - [A New Attack Lets Hackers Steal 2-Factor Authentication Codes From Android Phones](https://soylentnews.org/article.pl?sid=25/10/21/1229253&amp;from=rss)
* [2025-10-22, 04:11:00](https://soylentnews.org/article.pl?sid=25/10/21/1223202&amp;from=rss) - [Bitcoin Mining is Making People Sick](https://soylentnews.org/article.pl?sid=25/10/21/1223202&amp;from=rss)
* [2025-10-21, 23:26:00](https://soylentnews.org/article.pl?sid=25/10/21/1218221&amp;from=rss) - [Amazon Error Creates Massive Internet Outage](https://soylentnews.org/article.pl?sid=25/10/21/1218221&amp;from=rss)
* [2025-10-21, 18:41:00](https://soylentnews.org/article.pl?sid=25/10/20/2129245&amp;from=rss) - [Are We Living in a Golden Age of Stupidity?](https://soylentnews.org/article.pl?sid=25/10/20/2129245&amp;from=rss)
* [2025-10-21, 17:43:16](https://news.ycombinator.com/item?id=45658928) - [Karpathy on DeepSeek-OCR paper: Are pixels better inputs to LLMs than text?](https://twitter.com/karpathy/status/1980397031542989305)
* [2025-10-21, 13:57:00](https://soylentnews.org/article.pl?sid=25/10/20/1245230&amp;from=rss) - [Drone Tech Company DroneShield to Build 13m Facility in Australia](https://soylentnews.org/article.pl?sid=25/10/20/1245230&amp;from=rss)
* [2025-10-21, 09:15:00](https://soylentnews.org/article.pl?sid=25/10/20/1236216&amp;from=rss) - [Lifespan of AI Chips: The $300 Billion Question](https://soylentnews.org/article.pl?sid=25/10/20/1236216&amp;from=rss)
* [2025-10-21, 04:27:00](https://soylentnews.org/article.pl?sid=25/10/20/1229240&amp;from=rss) - [GNOME Has a New Security Threat Scanner Powered by VirusTotal](https://soylentnews.org/article.pl?sid=25/10/20/1229240&amp;from=rss)
* [2025-10-20, 23:40:00](https://soylentnews.org/article.pl?sid=25/10/20/0111228&amp;from=rss) - [Russia, AI and the Future of Disinformation Warfare](https://soylentnews.org/article.pl?sid=25/10/20/0111228&amp;from=rss)
* [2025-10-20, 18:58:00](https://soylentnews.org/article.pl?sid=25/10/18/1822203&amp;from=rss) - [Oops! It&apos;s a Kernel Stack Use-After-Free: Exploiting NVIDIA&apos;s GPU Linux Drivers](https://soylentnews.org/article.pl?sid=25/10/18/1822203&amp;from=rss)
* [2025-10-20, 17:39:00](https://soylentnews.org/meta/article.pl?sid=25/10/20/098210&amp;from=rss) - [Soylent Update](https://soylentnews.org/meta/article.pl?sid=25/10/20/098210&amp;from=rss)
* [2025-10-20, 14:08:00](https://soylentnews.org/article.pl?sid=25/10/18/180239&amp;from=rss) - [Quantum Crystals Offer a Blueprint for the Future of Computing and Chemistry](https://soylentnews.org/article.pl?sid=25/10/18/180239&amp;from=rss)
* [2025-10-20, 09:26:00](https://soylentnews.org/article.pl?sid=25/10/18/1749235&amp;from=rss) - [JPMorgan Requires Staff to Hand Over Biometric Data to Access New Headquarters](https://soylentnews.org/article.pl?sid=25/10/18/1749235&amp;from=rss)
* [2025-10-20, 04:41:00](https://soylentnews.org/article.pl?sid=25/10/16/1551203&amp;from=rss) - [Tech Billionaires Seem to be Doom Prepping. Should We All be Worried?](https://soylentnews.org/article.pl?sid=25/10/16/1551203&amp;from=rss)
* [2025-10-19, 23:52:00](https://soylentnews.org/article.pl?sid=25/10/18/004205&amp;from=rss) - [Poverty in Australia Increases to 1 in 7 People, According to Report](https://soylentnews.org/article.pl?sid=25/10/18/004205&amp;from=rss)
* [2025-10-19, 19:06:00](https://soylentnews.org/article.pl?sid=25/10/18/002218&amp;from=rss) - [Windows 11 Update Breaks Localhost, Prompting Mass Uninstall Workaround](https://soylentnews.org/article.pl?sid=25/10/18/002218&amp;from=rss)
* [2025-10-19, 14:22:00](https://soylentnews.org/article.pl?sid=25/10/18/000230&amp;from=rss) - [Is AI Running Out of Training Data?](https://soylentnews.org/article.pl?sid=25/10/18/000230&amp;from=rss)
* [2025-10-19, 09:36:00](https://soylentnews.org/article.pl?sid=25/10/17/2341221&amp;from=rss) - [New Psychology Research Looks at Why We Help Our Friends When They Need It](https://soylentnews.org/article.pl?sid=25/10/17/2341221&amp;from=rss)
* [2025-10-19, 04:48:00](https://soylentnews.org/article.pl?sid=25/10/17/1219257&amp;from=rss) - [Understanding Volcanoes Better: Scientists Find Exact Locations of Magma Movement](https://soylentnews.org/article.pl?sid=25/10/17/1219257&amp;from=rss)
* [2025-10-19, 00:01:00](https://soylentnews.org/article.pl?sid=25/10/18/1745254&amp;from=rss) - [Comet Lemmon (Not Lemon) Nearing Peak](https://soylentnews.org/article.pl?sid=25/10/18/1745254&amp;from=rss)
