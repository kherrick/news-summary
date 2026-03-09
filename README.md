# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Technology Developments

* [How AI Assistants Are Moving the Security Goalposts](https://it.slashdot.org/story/26/03/09/1912259/how-ai-assistants-are-moving-the-security-goalposts?utm_source=rss1.0mainlinkanon&utm_medium=feed) - AI-driven assistants are reshaping security models and raising concerns about potential risks.

* [AI Allows Hackers To Identify Anonymous Social Media Accounts, Study Finds](https://tech.slashdot.org/story/26/03/09/0428241/ai-allows-hackers-to-identify-anonymous-social-media-accounts-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Researchers demonstrate how AI can expose ostensibly anonymous accounts.

## Business and Industry Updates

* [Live Nation Avoids Ticketmaster Breakup By 'Open Sourcing' Their Ticketing Model](https://yro.slashdot.org/story/26/03/09/1930204/live-nation-avoids-ticketmaster-breakup-by-open-sourcing-their-ticketing-model?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Live Nation attempts to address concerns by releasing its ticketing model as open source.

* [Bluesky CEO Jay Graber Is Stepping Down](https://tech.slashdot.org/story/26/03/09/1919227/bluesky-ceo-jay-graber-is-stepping-down?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Leadership changes at Bluesky mark a new chapter for the company.

* [Oracle is building yesterday's data centers with tomorrow's debt](https://www.cnbc.com/2026/03/09/oracle-is-building-yesterdays-data-centers-with-tomorrows-debt.html) - Analysis of Oracle's approach to financing their data center projects.

* [Meta’s Renewed Commitment to jemalloc](https://engineering.fb.com/2026/03/02/data-infrastructure/investing-in-infrastructure-metas-renewed-commitment-to-jemalloc/) - An update on Meta's infrastructure strategies.

## Open Source and Developer Tools

* [AWS SDK for Rust: Using S3-Compatible APIs with Other Clouds](https://rup12.net/posts/s3-api-compatibility-is-awesome) - Exploring the potential of Rust for utilizing S3-compatible APIs.

* [Show HN: The Mog Programming Language](https://moglang.org) - A new programming language introduces innovative features.

* [Durdraw – ANSI art editor for Unix-like systems](https://durdraw.org/) - A specialized editor for Unix-based systems.

* [Rust-like Error Handling in TypeScript](https://codeinput.com/blog/typescript-result) - New methods for error handling inspired by Rust for TypeScript developers.

* [JSLinux Now Supports x86_64](https://bellard.org/jslinux/) - Updates to JSLinux bring support for x86_64 architecture.

* [Notes on writing a voxel game in Dyalog APL](https://homewithinnowhere.com/blog/voxel_game/) - Insights into game development using Dyalog APL.

* [Returning To Rails in 2026](https://www.markround.com/blog/2026/03/05/returning-to-rails-in-2026/) - A developer shares their renewed perspective on the Rails framework.

## Science and Space Explorations

* [Scientists Just Doubled Our Catalog of Black Hole and Neutron Star Collisions](https://science.slashdot.org/story/26/03/09/0429200/scientists-just-doubled-our-catalog-of-black-hole-and-neutron-star-collisions?utm_source=rss1.0mainlinkanon&utm_medium=feed) - New discoveries significantly expand our knowledge of cosmic collisions.

* [New SETI Study: Why We Might Have Been Missing Alien Signals](https://science.slashdot.org/story/26/03/09/0654222/new-seti-study-why-we-might-have-been-missing-alien-signals?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A study explores potential reasons for the lack of detected extraterrestrial signals.

* [US Military Tested Device That May Be Tied To Havana Syndrome On Rats, Sheep](https://news.slashdot.org/story/26/03/09/0410214/us-military-tested-device-that-may-be-tied-to-havana-syndrome-on-rats-sheep?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Investigations reveal possible ties between military devices and health incidents.

## Historical and Cultural Insights

* [Thomas Selfridge: The First Airplane Fatality](https://www.amusingplanet.com/2026/03/thomas-selfridge-first-airplane-fatality.html) - The story of the first recorded fatal airplane accident.

* [The Most Beautiful Freezer in the World: Notes on Baking at the South Pole](https://www.newyorker.com/culture/the-weekend-essay/the-most-beautiful-freezer-in-the-world) - A unique view on the art of baking in extreme environments.

* [Rendezvous with Rama](https://blog.engora.com/2026/03/rendezvous-with-rama.html) - A reflection on the classic science fiction novel.

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

* [2026-03-09, 22:00:00](https://yro.slashdot.org/story/26/03/09/1930204/live-nation-avoids-ticketmaster-breakup-by-open-sourcing-their-ticketing-model?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Live Nation Avoids Ticketmaster Breakup By &apos;Open Sourcing&apos; Their Ticketing Model](https://yro.slashdot.org/story/26/03/09/1930204/live-nation-avoids-ticketmaster-breakup-by-open-sourcing-their-ticketing-model?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-09, 21:34:45](https://news.ycombinator.com/item?id=47315869) - [Rendezvous with Rama](https://blog.engora.com/2026/03/rendezvous-with-rama.html)
* [2026-03-09, 21:19:58](https://news.ycombinator.com/item?id=47315701) - [Zuckerberg has \&quot;finished\&quot; with Alexandr Wang, worth US$14B](https://www.idnfinancials.com/news/61918/zuckerberg-has-finished-with-alexandr-wang-worth-us14-billion)
* [2026-03-09, 21:00:00](https://it.slashdot.org/story/26/03/09/1912259/how-ai-assistants-are-moving-the-security-goalposts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How AI Assistants Are Moving the Security Goalposts](https://it.slashdot.org/story/26/03/09/1912259/how-ai-assistants-are-moving-the-security-goalposts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-09, 20:50:59](https://news.ycombinator.com/item?id=47315341) - [So you want to write an \&quot;app\&quot; (2025)](https://arcanenibble.github.io/so-you-want-to-write-an-app.html)
* [2026-03-09, 20:36:43](https://news.ycombinator.com/item?id=47315128) - [Oracle is building yesterday&apos;s data centers with tomorrow&apos;s debt](https://www.cnbc.com/2026/03/09/oracle-is-building-yesterdays-data-centers-with-tomorrows-debt.html)
* [2026-03-09, 20:32:45](https://news.ycombinator.com/item?id=47315079) - [Thomas Selfridge: The First Airplane Fatality](https://www.amusingplanet.com/2026/03/thomas-selfridge-first-airplane-fatality.html)
* [2026-03-09, 20:00:00](https://tech.slashdot.org/story/26/03/09/1919227/bluesky-ceo-jay-graber-is-stepping-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bluesky CEO Jay Graber Is Stepping Down](https://tech.slashdot.org/story/26/03/09/1919227/bluesky-ceo-jay-graber-is-stepping-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-09, 19:24:20](https://news.ycombinator.com/item?id=47314123) - [Things I&apos;ve Done with AI](https://sjer.red/blog/2026/built-with-ai/)
* [2026-03-09, 19:20:00](https://soylentnews.org/article.pl?sid=26/03/08/1456250&amp;from=rss) - [The New European Office Suite is a Private, Open-Source Alternative](https://soylentnews.org/article.pl?sid=26/03/08/1456250&amp;from=rss)
* [2026-03-09, 19:12:14](https://news.ycombinator.com/item?id=47313934) - [The Most Beautiful Freezer in the World: Notes on Baking at the South Pole](https://www.newyorker.com/culture/the-weekend-essay/the-most-beautiful-freezer-in-the-world)
* [2026-03-09, 19:09:03](https://news.ycombinator.com/item?id=47313884) - [Bluesky CEO Jay Graber is stepping down](https://bsky.social/about/blog/03-09-2026-a-new-chapter-for-bluesky)
* [2026-03-09, 19:02:27](https://lobste.rs/s/0r64cv/aws_sdk_for_rust_using_s3_compatible_apis) - [AWS SDK for Rust: Using S3-Compatible APIs with Other Clouds](https://rup12.net/posts/s3-api-compatibility-is-awesome)
* [2026-03-09, 19:00:00](https://hardware.slashdot.org/story/26/03/09/1716250/qualcomms-new-arduino-ventuno-q-is-an-ai-focused-computer-designed-for-robotics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Qualcomm&apos;s New Arduino Ventuno Q Is an AI-Focused Computer Designed For Robotics](https://hardware.slashdot.org/story/26/03/09/1716250/qualcomms-new-arduino-ventuno-q-is-an-ai-focused-computer-designed-for-robotics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-09, 18:59:32](https://news.ycombinator.com/item?id=47313721) - [Durdraw – ANSI art editor for Unix-like systems](https://durdraw.org/)
* [2026-03-09, 18:52:35](https://lobste.rs/s/flbwoi/ghostty_1_3_0) - [Ghostty 1.3.0](https://ghostty.org/docs/install/release-notes/1-3-0)
* [2026-03-09, 18:51:34](https://news.ycombinator.com/item?id=47313613) - [Workers report watching Ray-Ban Meta-shot footage of people using the bathroom](https://arstechnica.com/gadgets/2026/03/workers-report-watching-ray-ban-meta-shot-footage-of-people-using-the-bathroom/)
* [2026-03-09, 18:04:05](https://lobste.rs/s/nkmxnp/price_checking_zerocopy_s_zero_cost) - [Price-Checking Zerocopy&apos;s Zero Cost Abstractions](https://jack.wrenn.fyi/blog/price-check/)
* [2026-03-09, 18:00:00](https://yro.slashdot.org/story/26/03/09/1710252/anthropic-sues-the-pentagon-after-being-labeled-a-threat-to-national-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Sues the Pentagon After Being Labeled a Threat To National Security](https://yro.slashdot.org/story/26/03/09/1710252/anthropic-sues-the-pentagon-after-being-labeled-a-threat-to-national-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-09, 17:57:00](https://news.ycombinator.com/item?id=47312728) - [Show HN: The Mog Programming Language](https://moglang.org)
* [2026-03-09, 17:34:27](https://news.ycombinator.com/item?id=47312329) - [Fixfest is a global gathering of repairers, tinkerers, and activists](https://fixfest.therestartproject.org/)
* [2026-03-09, 17:24:53](https://lobste.rs/s/k6vpjh/meta_s_renewed_commitment_jemalloc) - [Meta’s Renewed Commitment to jemalloc](https://engineering.fb.com/2026/03/02/data-infrastructure/investing-in-infrastructure-metas-renewed-commitment-to-jemalloc/)
* [2026-03-09, 17:20:29](https://news.ycombinator.com/item?id=47312090) - [Florida judge rules red light camera tickets are unconstitutional](https://cbs12.com/news/local/florida-news-judge-rules-red-light-camera-tickets-unconstitutional)
* [2026-03-09, 17:11:41](https://lobste.rs/s/yg9m2q/video_conferencing_with_postgres) - [Video Conferencing with Postgres](https://planetscale.com/blog/video-conferencing-with-postgres)
* [2026-03-09, 17:02:22](https://news.ycombinator.com/item?id=47311815) - [Building a Procedural Hex Map with Wave Function Collapse](https://felixturner.github.io/hex-map-wfc/article/)
* [2026-03-09, 17:01:52](https://lobste.rs/s/sxlo6h/building_procedural_hex_map_with_wave) - [Building a Procedural Hex Map with Wave Function Collapse](https://felixturner.github.io/hex-map-wfc/article/)
* [2026-03-09, 17:00:00](https://mobile.slashdot.org/story/26/03/09/0453203/if-lockheed-martin-made-a-game-boy-would-you-buy-one?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;If Lockheed Martin Made a Game Boy, Would You Buy One?&apos;](https://mobile.slashdot.org/story/26/03/09/0453203/if-lockheed-martin-made-a-game-boy-would-you-buy-one?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-09, 16:54:31](https://news.ycombinator.com/item?id=47311669) - [DARPA&apos;s new X-76](https://www.darpa.mil/news/2026/darpa-new-x-76-speed-of-jet-freedom-of-helicopter)
* [2026-03-09, 16:54:31](https://lobste.rs/s/kl1gd6/seccomp_unsafe_at_any_speed_2022) - [seccomp — Unsafe at any speed (2022)](https://blog.habets.se/2022/03/seccomp-unsafe-at-any-speed.html)
* [2026-03-09, 16:53:52](https://news.ycombinator.com/item?id=47311657) - [Launch HN: Terminal Use (YC W26) – Vercel for filesystem-based agents](https://news.ycombinator.com/item?id=47311657)
* [2026-03-09, 16:47:22](https://lobste.rs/s/dcqmlk/what_i_always_wanted_know_about_second) - [What I Always Wanted to Know about Second Class Values](https://dl.acm.org/doi/epdf/10.1145/3759427.3760373)
* [2026-03-09, 16:43:39](https://news.ycombinator.com/item?id=47311484) - [JSLinux Now Supports x86_64](https://bellard.org/jslinux/)
* [2026-03-09, 16:41:54](https://news.ycombinator.com/item?id=47311456) - [Jolla on track to ship new phone with Sailfish OS, user-replaceable battery](https://liliputing.com/the-new-jolla-phone-with-sailfish-os-is-on-track-to-start-shipping-in-the-first-half-of-2026/)
* [2026-03-09, 16:24:22](https://news.ycombinator.com/item?id=47311179) - [An opinionated take on how to do important research that matters](https://nicholas.carlini.com/writing/2026/how-to-win-a-best-paper-award.html)
* [2026-03-09, 16:00:00](https://tech.slashdot.org/story/26/03/09/0428241/ai-allows-hackers-to-identify-anonymous-social-media-accounts-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Allows Hackers To Identify Anonymous Social Media Accounts, Study Finds](https://tech.slashdot.org/story/26/03/09/0428241/ai-allows-hackers-to-identify-anonymous-social-media-accounts-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-09, 15:28:31](https://lobste.rs/s/hsegku/abusing_arpa_tld_isn_t_supposed_host) - [Abusing .arpa, the TLD that isn’t supposed to host anything](https://www.infoblox.com/blog/threat-intelligence/abusing-arpa-the-tld-that-isnt-supposed-to-host-anything/)
* [2026-03-09, 15:23:08](https://news.ycombinator.com/item?id=47310296) - [Restoring a Sun SPARCstation IPX part 1: PSU and NVRAM (2020)](https://www.rs-online.com/designspark/restoring-a-sun-sparcstation-ipx-part-1-psu-and-nvram)
* [2026-03-09, 15:12:53](https://news.ycombinator.com/item?id=47310160) - [Is legal the same as legitimate: AI reimplementation and the erosion of copyleft](https://writings.hongminhee.org/2026/03/legal-vs-legitimate/)
* [2026-03-09, 15:00:00](https://news.slashdot.org/story/26/03/09/0419215/swiss-vote-places-right-to-use-cash-in-countrys-constitution?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Swiss Vote Places Right To Use Cash In Country&apos;s Constitution](https://news.slashdot.org/story/26/03/09/0419215/swiss-vote-places-right-to-use-cash-in-countrys-constitution?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-09, 14:55:42](https://news.ycombinator.com/item?id=47309953) - [Show HN: DenchClaw – Local CRM on Top of OpenClaw](https://github.com/DenchHQ/DenchClaw)
* [2026-03-09, 14:47:32](https://lobste.rs/s/bv55sb/removing_recursion_via_explicit) - [Removing recursion via explicit callstack simulation](https://jnkr.tech/blog/removing-recursion)
* [2026-03-09, 14:35:00](https://soylentnews.org/article.pl?sid=26/03/08/1446203&amp;from=rss) - [Time Zones vs. Mean Solar Time](https://soylentnews.org/article.pl?sid=26/03/08/1446203&amp;from=rss)
* [2026-03-09, 14:20:29](https://lobste.rs/s/qp4zl6/notes_on_writing_voxel_game_dyalog_apl) - [Notes on writing a voxel game in Dyalog APL](https://homewithinnowhere.com/blog/voxel_game/)
* [2026-03-09, 14:01:44](https://lobste.rs/s/sd1rsy/i_don_t_know_if_my_job_will_still_exist_ten) - [I don&apos;t know if my job will still exist in ten years](https://www.seangoedecke.com/will-my-job-still-exist/)
* [2026-03-09, 14:00:00](https://news.slashdot.org/story/26/03/09/0410214/us-military-tested-device-that-may-be-tied-to-havana-syndrome-on-rats-sheep?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Military Tested Device That May Be Tied To Havana Syndrome On Rats, Sheep](https://news.slashdot.org/story/26/03/09/0410214/us-military-tested-device-that-may-be-tied-to-havana-syndrome-on-rats-sheep?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-09, 13:55:14](https://lobste.rs/s/dnqcvh/your_llm_doesn_t_write_correct_code_it) - [Your LLM Doesn&apos;t Write Correct Code. It Writes Plausible Code](https://blog.katanaquant.com/p/your-llm-doesnt-write-correct-code)
* [2026-03-09, 13:04:26](https://lobste.rs/s/lcvctc/rust_like_error_handling_typescript) - [Rust-like Error Handling in TypeScript](https://codeinput.com/blog/typescript-result)
* [2026-03-09, 12:38:46](https://news.ycombinator.com/item?id=47308278) - [Reverse-engineering the UniFi inform protocol](https://tamarack.cloud/blog/reverse-engineering-unifi-inform-protocol)
* [2026-03-09, 12:15:07](https://news.ycombinator.com/item?id=47308059) - [No leap second will be introduced at the end of June 2026](https://lists.iana.org/hyperkitty/list/tz@iana.org/thread/P6D36VZSZBUSSTSMZKFXKF4T4IXWN23P/)
* [2026-03-09, 11:34:00](https://science.slashdot.org/story/26/03/09/0654222/new-seti-study-why-we-might-have-been-missing-alien-signals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New SETI Study: Why We Might Have Been Missing Alien Signals](https://science.slashdot.org/story/26/03/09/0654222/new-seti-study-why-we-might-have-been-missing-alien-signals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-09, 10:52:19](https://lobste.rs/s/o8vbb7/production_query_plans_without) - [Production query plans without production data](https://boringsql.com/posts/portable-stats/)
* [2026-03-09, 10:33:30](https://lobste.rs/s/jreqtw/returning_rails_2026) - [Returning To Rails in 2026](https://www.markround.com/blog/2026/03/05/returning-to-rails-in-2026/)
* [2026-03-09, 10:14:59](https://news.ycombinator.com/item?id=47307055) - [Ireland shuts last coal plant, becomes 15th coal-free country in Europe (2025)](https://www.pv-magazine.com/2025/06/20/ireland-coal-free-ends-coal-power-generation-moneypoint/)
* [2026-03-09, 09:52:00](https://soylentnews.org/article.pl?sid=26/03/07/1635228&amp;from=rss) - [Claude Code Deletes Developers&apos; Production Setup, Including its Database and Snapshots](https://soylentnews.org/article.pl?sid=26/03/07/1635228&amp;from=rss)
* [2026-03-09, 09:43:51](https://lobste.rs/s/6pvtem/ai_will_fuck_you_up_if_you_re_not_on_board) - [AI will fuck you up if you’re not on board](https://rmoff.net/2026/03/06/ai-will-fuck-you-up-if-youre-not-on-board/)
* [2026-03-09, 09:25:02](https://news.ycombinator.com/item?id=47306655) - [Fontcrafter: Turn Your Handwriting into a Real Font](https://arcade.pirillo.com/fontcrafter.html)
* [2026-03-09, 08:43:08](https://lobste.rs/s/eab8au/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/eab8au/what_are_you_doing_this_week)
* [2026-03-09, 08:09:31](https://lobste.rs/s/av8fcx/linux_internals_how_proc_self_mem_writes) - [Linux Internals: How /proc/self/mem writes to unwritable memory](https://offlinemark.com/an-obscure-quirk-of-proc/)
* [2026-03-09, 07:34:00](https://linux.slashdot.org/story/26/03/09/0544224/eff-ubuntu-and-other-distros-discuss-how-to-respond-to-age-verification-laws?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EFF, Ubuntu and Other Distros Discuss How to Respond to Age-Verification Laws](https://linux.slashdot.org/story/26/03/09/0544224/eff-ubuntu-and-other-distros-discuss-how-to-respond-to-age-verification-laws?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-09, 06:28:02](https://news.ycombinator.com/item?id=47305461) - [US Court of Appeals: TOS may be updated by email, use can imply consent [pdf]](https://cdn.ca9.uscourts.gov/datastore/memoranda/2026/03/03/25-403.pdf)
* [2026-03-09, 05:10:00](https://soylentnews.org/article.pl?sid=26/03/07/1632227&amp;from=rss) - [Open Source Registries Don&apos;t Have Enough Money to Implement Basic Security](https://soylentnews.org/article.pl?sid=26/03/07/1632227&amp;from=rss)
* [2026-03-09, 04:34:00](https://science.slashdot.org/story/26/03/09/0429200/scientists-just-doubled-our-catalog-of-black-hole-and-neutron-star-collisions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Just Doubled Our Catalog of Black Hole and Neutron Star Collisions](https://science.slashdot.org/story/26/03/09/0429200/scientists-just-doubled-our-catalog-of-black-hole-and-neutron-star-collisions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-09, 03:19:28](https://lobste.rs/s/kefmyt/thinnings_sublist_witnesses_de_bruijn) - [Thinnings: Sublist Witnesses and de Bruijn Index Shift Clumping](https://www.philipzucker.com/thin1/)
* [2026-03-09, 01:34:00](https://yro.slashdot.org/story/26/03/09/0121210/judges-find-ai-doesnt-have-human-intelligence-in-two-new-court-cases?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Judges Find AI Doesn&apos;t Have Human Intelligence in Two New Court Cases](https://yro.slashdot.org/story/26/03/09/0121210/judges-find-ai-doesnt-have-human-intelligence-in-two-new-court-cases?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-09, 00:24:00](https://soylentnews.org/article.pl?sid=26/03/07/1629233&amp;from=rss) - [Roundup:  OS-level Age Verification Laws](https://soylentnews.org/article.pl?sid=26/03/07/1629233&amp;from=rss)
* [2026-03-08, 23:58:14](https://lobste.rs/s/wevip9/webpki_you) - [WebPKI and You](https://blog.brycekerley.net/2026/03/08/webpki-and-you.html)
* [2026-03-08, 23:49:00](https://hardware.slashdot.org/story/26/03/08/2344234/could-home-building-robots-help-fix-the-housing-crisis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Could Home-Building Robots Help Fix the Housing Crisis?](https://hardware.slashdot.org/story/26/03/08/2344234/could-home-building-robots-help-fix-the-housing-crisis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-08, 22:39:00](https://it.slashdot.org/story/26/03/08/2237210/a-security-researcher-went-undercover-on-moltbook---and-found-security-risks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Security Researcher Went &apos;Undercover&apos; on Moltbook - and Found Security Risks](https://it.slashdot.org/story/26/03/08/2237210/a-security-researcher-went-undercover-on-moltbook---and-found-security-risks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-08, 19:41:00](https://soylentnews.org/article.pl?sid=26/03/07/1624228&amp;from=rss) - [‘What Matters More To Employers, Education Or Experience?’ Asks AI Expert](https://soylentnews.org/article.pl?sid=26/03/07/1624228&amp;from=rss)
* [2026-03-08, 17:57:58](https://lobste.rs/s/e72lgq/impressions_from_mozilla_1_2b_2002) - [Impressions from Mozilla 1.2b (2002)](https://movq.de/blog/postings/2026-03-08/0/POSTING-en.html)
* [2026-03-08, 16:31:00](https://lobste.rs/s/j17fxk/lightweight_protocol_assert_authorship) - [Lightweight protocol to assert authorship of content and vouch for humanity of others](https://codeberg.org/robida/human.json)
* [2026-03-08, 16:22:24](https://news.ycombinator.com/item?id=47298553) - [Flash media longevity testing – 6 years later](https://old.reddit.com/r/DataHoarder/comments/1q6xnun/flash_media_longevity_testing_6_years_later/)
* [2026-03-08, 15:19:12](https://lobste.rs/s/9thupi/framebook) - [FrameBook](https://fb.edoo.gg)
* [2026-03-08, 14:57:00](https://soylentnews.org/politics/article.pl?sid=26/03/06/1549257&amp;from=rss) - [Tech Industry is in Tariff Hell, Even If Refunds Are Automated](https://soylentnews.org/politics/article.pl?sid=26/03/06/1549257&amp;from=rss)
* [2026-03-08, 11:10:14](https://lobste.rs/s/kgpyat/put_zip_code_first) - [Put the ZIP code first](https://zipcodefirst.com/)
* [2026-03-08, 10:13:00](https://soylentnews.org/article.pl?sid=26/03/06/1545254&amp;from=rss) - [Would Aliens Do Physics, or is Science a Human Invention?](https://soylentnews.org/article.pl?sid=26/03/06/1545254&amp;from=rss)
* [2026-03-08, 05:24:00](https://soylentnews.org/article.pl?sid=26/03/06/1541249&amp;from=rss) - [Lawsuit: Google Gemini Sent Man on Violent Missions, Set Suicide “Countdown”](https://soylentnews.org/article.pl?sid=26/03/06/1541249&amp;from=rss)
* [2026-03-08, 05:03:03](https://news.ycombinator.com/item?id=47294572) - [Rethinking Syntax: Binding by Adjacency](https://github.com/manifold-systems/manifold/blob/master/docs/articles/binding_exprs.md)
* [2026-03-08, 05:02:38](https://news.ycombinator.com/item?id=47294568) - [Velxio, Arduino Emulator](https://velxio.dev/)
* [2026-03-08, 00:39:00](https://soylentnews.org/article.pl?sid=26/03/06/1538243&amp;from=rss) - [Clueless Cops Post Seized Crypto Wallet Password. $5M Quickly Stolen.](https://soylentnews.org/article.pl?sid=26/03/06/1538243&amp;from=rss)
* [2026-03-07, 19:55:00](https://soylentnews.org/article.pl?sid=26/03/06/1533251&amp;from=rss) - [Congress Extends ISS and Tells NASA to Get Moving on Private Space Stations](https://soylentnews.org/article.pl?sid=26/03/06/1533251&amp;from=rss)
* [2026-03-07, 15:07:00](https://soylentnews.org/article.pl?sid=26/03/06/1338239&amp;from=rss) - [Starlink Mobile Teases ‘5G Speeds From Space With 100X the Data Density’](https://soylentnews.org/article.pl?sid=26/03/06/1338239&amp;from=rss)
* [2026-03-07, 10:21:00](https://soylentnews.org/article.pl?sid=26/03/06/1335212&amp;from=rss) - [What Crystals Older Than the Sun Reveal About the Start of the Solar System](https://soylentnews.org/article.pl?sid=26/03/06/1335212&amp;from=rss)
* [2026-03-07, 05:40:00](https://soylentnews.org/article.pl?sid=26/03/06/1321207&amp;from=rss) - [Holy C Batman, He Built an Operating System!](https://soylentnews.org/article.pl?sid=26/03/06/1321207&amp;from=rss)
* [2026-03-07, 00:53:00](https://soylentnews.org/article.pl?sid=26/03/05/2316254&amp;from=rss) - [vscreen: A Real Browser for AI Agents, Streamed Live via WebRTC](https://soylentnews.org/article.pl?sid=26/03/05/2316254&amp;from=rss)
* [2026-03-06, 20:11:00](https://soylentnews.org/article.pl?sid=26/03/05/233230&amp;from=rss) - [Reminder:  VPNs Can&apos;t Make You Anonymous Online](https://soylentnews.org/article.pl?sid=26/03/05/233230&amp;from=rss)
* [2026-03-06, 15:30:00](https://soylentnews.org/article.pl?sid=26/03/05/2246218&amp;from=rss) - [Destroyed Servers and DoS Attacks: What Can Happen When OpenClaw AI Agents Interact](https://soylentnews.org/article.pl?sid=26/03/05/2246218&amp;from=rss)
* [2026-03-06, 10:43:00](https://soylentnews.org/article.pl?sid=26/03/05/1853251&amp;from=rss) - [As Moon Interest Heats Up, Two Companies Unveil Plans for a Lunar \&quot;Harvester\&quot;](https://soylentnews.org/article.pl?sid=26/03/05/1853251&amp;from=rss)
* [2026-03-06, 05:58:00](https://soylentnews.org/article.pl?sid=26/03/05/1850205&amp;from=rss) - [DOS Memory Management](https://soylentnews.org/article.pl?sid=26/03/05/1850205&amp;from=rss)
* [2026-03-06, 01:10:00](https://soylentnews.org/article.pl?sid=26/03/05/1846224&amp;from=rss) - [Micron Sampling First 256GB SOCAMM2 Memory Packages — 2TB of RAM Per CPU for Datacenters](https://soylentnews.org/article.pl?sid=26/03/05/1846224&amp;from=rss)
* [2026-03-05, 20:25:00](https://soylentnews.org/article.pl?sid=26/03/05/0529259&amp;from=rss) - [To Update Blobs or Not to Update Blobs](https://soylentnews.org/article.pl?sid=26/03/05/0529259&amp;from=rss)
* [2026-03-05, 15:42:00](https://soylentnews.org/article.pl?sid=26/03/05/0714212&amp;from=rss) - [AI Art Isn&apos;t Art, or Copyrightable Art Anyway](https://soylentnews.org/article.pl?sid=26/03/05/0714212&amp;from=rss)
* [2026-03-05, 10:52:00](https://soylentnews.org/article.pl?sid=26/03/05/0732251&amp;from=rss) - [Drones Attack Several AWS Middle East Region Data Centers Amid Iran War, Leading to Outages](https://soylentnews.org/article.pl?sid=26/03/05/0732251&amp;from=rss)
* [2026-03-05, 06:11:00](https://soylentnews.org/article.pl?sid=26/03/05/0523208&amp;from=rss) - [No Fooling: NASA Targets April 1 for Artemis II Launch to the Moon](https://soylentnews.org/article.pl?sid=26/03/05/0523208&amp;from=rss)
* [2026-03-05, 00:23:00](https://soylentnews.org/article.pl?sid=26/03/04/1535231&amp;from=rss) - [Anonymous Credentials: an Illustrated Primer](https://soylentnews.org/article.pl?sid=26/03/04/1535231&amp;from=rss)
