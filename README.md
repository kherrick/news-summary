undefined

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

* [2025-09-07, 06:51:47](https://lobste.rs/s/mwhbyo/bye_intel_hi_amd_i_m_done_after_2_dead_intels) - [Bye Intel, hi AMD! I’m done after 2 dead Intels](https://michael.stapelberg.ch/posts/2025-09-07-bye-intel-hi-amd-9950x3d/)
* [2025-09-07, 05:49:18](https://lobste.rs/s/vmardk/longhorn_kubernetes_native_filesystem) - [Longhorn – a Kubernetes-native filesystem](https://vegard.blog.engen.priv.no/?p=518)
* [2025-09-07, 05:14:44](https://lobste.rs/s/i4bo8y/resources_laziness_continuation) - [Resources, Laziness, and Continuation-Passing Style](https://journal.infinitenegativeutility.com/resources-laziness-and-continuation-passing-style)
* [2025-09-07, 04:27:18](https://news.ycombinator.com/item?id=45155398) - [Unofficial Windows 11 requirements bypass tool allows disabling all AI features](https://www.neowin.net/news/unofficial-windows-11-requirements-bypass-tool-now-allows-you-to-disable-all-ai-features/)
* [2025-09-07, 03:36:22](https://news.ycombinator.com/item?id=45155179) - [RFC 3339 vs. ISO 8601](https://ijmacd.github.io/rfc3339-iso8601/)
* [2025-09-07, 02:46:55](https://news.ycombinator.com/item?id=45154947) - [The world has a running Rational R1000/400 computer again (2019)](https://datamuseum.dk/wiki/Rational/R1000s400/Logbook/2019#2019-10-28)
* [2025-09-07, 02:30:16](https://news.ycombinator.com/item?id=45154857) - [Show HN: Lightweight tool for managing Linux virtual machines](https://github.com/ccheshirecat/flint)
* [2025-09-07, 02:30:07](https://news.ycombinator.com/item?id=45154856) - [Navy SEALs reportedly killed North Korean fishermen to hide a failed mission](https://www.nytimes.com/2025/09/05/us/navy-seal-north-korea-trump-2019.html)
* [2025-09-07, 02:27:00](https://soylentnews.org/article.pl?sid=25/09/06/1510251&amp;from=rss) - [Porsche&apos;s New Cayenne Will Charge Itself Like No Other EV](https://soylentnews.org/article.pl?sid=25/09/06/1510251&amp;from=rss)
* [2025-09-07, 01:44:19](https://news.ycombinator.com/item?id=45154609) - [Show HN: I recreated Windows XP as my portfolio](https://mitchivin.com/)
* [2025-09-07, 01:37:55](https://lobste.rs/s/ms327e/emulating_rust_s_result_jai_with) - [Emulating Rust&apos;s Result and ? in Jai with Metaprogramming](https://jamesoswald.dev/posts/jai-result/)
* [2025-09-07, 01:26:44](https://news.ycombinator.com/item?id=45154501) - [The key to getting MVC correct is understanding what models are](https://stlab.cc/tips/about-mvc.html)
* [2025-09-07, 01:14:47](https://lobste.rs/s/hu3jkb/secret_web) - [A Secret Web](https://blog.clew.se/posts/secret-web/)
* [2025-09-07, 00:50:58](https://lobste.rs/s/dnsdwz/how_can_i_help_volunteer_opportunities) - [How can I help? Volunteer opportunities: Lobste.rs, OSS, programming, Internet related, other?](https://lobste.rs/s/dnsdwz/how_can_i_help_volunteer_opportunities)
* [2025-09-07, 00:45:22](https://news.ycombinator.com/item?id=45154270) - [Blogs used to be different](https://jetgirl.art/blogs-used-to-be-very-different/)
* [2025-09-07, 00:07:05](https://lobste.rs/s/rxmc73/copilot_productivity_paradox) - [The CoPilot productivity paradox](https://www.marginalia.nu/log/a_125_ai_assistants/)
* [2025-09-06, 22:49:49](https://lobste.rs/s/6jbyug/c_26_erroneous_behaviour) - [C++26: erroneous behaviour](https://www.sandordargo.com/blog/2025/02/05/cpp26-erroneous-behaviour)
* [2025-09-06, 22:21:55](https://news.ycombinator.com/item?id=45153428) - [A history of metaphorical brain talk in psychiatry](https://www.nature.com/articles/s41380-025-03053-6)
* [2025-09-06, 21:42:00](https://soylentnews.org/article.pl?sid=25/09/05/0544216&amp;from=rss) - [Bill Gates’ 48-Year-Old Microsoft 6502 BASIC Goes Open Source](https://soylentnews.org/article.pl?sid=25/09/05/0544216&amp;from=rss)
* [2025-09-06, 21:19:30](https://news.ycombinator.com/item?id=45152940) - [Show HN: I&apos;m making an open-source platform for learning Japanese](https://kanadojo.com)
* [2025-09-06, 20:57:27](https://news.ycombinator.com/item?id=45152779) - [A Navajo weaving of an integrated circuit: the 555 timer](https://www.righto.com/2025/09/marilou-schultz-navajo-555-weaving.html)
* [2025-09-06, 20:37:16](https://news.ycombinator.com/item?id=45152648) - [Shipping textures as PNGs is suboptimal](https://gamesbymason.com/blog/2025/stop-shipping-pngs/)
* [2025-09-06, 20:33:06](https://lobste.rs/s/sp4unw/don_t_write_bugs) - [Don&apos;t write bugs](https://www.teamten.com/lawrence/programming/dont-write-bugs.html)
* [2025-09-06, 20:01:35](https://news.ycombinator.com/item?id=45152402) - [Being good isn&apos;t enough](https://joshs.bearblog.dev/being-good-isnt-enough/)
* [2025-09-06, 19:57:59](https://news.ycombinator.com/item?id=45152374) - [Over 80% of sunscreen performed below their labelled efficacy (2020)](https://www.consumer.org.hk/en/press-release/528-sunscreen-test)
* [2025-09-06, 19:14:26](https://news.ycombinator.com/item?id=45152066) - [How the “Kim” dump exposed North Korea&apos;s credential theft playbook](https://dti.domaintools.com/inside-the-kimsuky-leak-how-the-kim-dump-exposed-north-koreas-credential-theft-playbook/)
* [2025-09-06, 18:27:15](https://lobste.rs/s/rpvnxu/debugging_dropped_async_task) - [Debugging a dropped async Task](https://slugcat.systems/post/25-08-27-debugging-a-dropped-async-task/)
* [2025-09-06, 18:20:26](https://news.ycombinator.com/item?id=45151622) - [Stop writing CLI validation. Parse it right the first time](https://hackers.pub/@hongminhee/2025/stop-writing-cli-validation-parse-it-right-the-first-time)
* [2025-09-06, 18:19:51](https://lobste.rs/s/deaem7/stop_writing_cli_validation_parse_it) - [Stop writing CLI validation. Parse it right the first time](https://hackers.pub/@hongminhee/2025/stop-writing-cli-validation-parse-it-right-the-first-time)
* [2025-09-06, 18:17:06](https://news.ycombinator.com/item?id=45151598) - [GigaByte CXL memory expansion card with up to 512GB DRAM](https://www.gigabyte.com/PC-Accessory/AI-TOP-CXL-R5X4)
* [2025-09-06, 17:53:26](https://lobste.rs/s/c1zuvh/local_first_access_control) - [Local-first access control](https://www.inkandswitch.com/keyhive/notebook/)
* [2025-09-06, 16:59:00](https://soylentnews.org/article.pl?sid=25/09/05/0540222&amp;from=rss) - [Jury Orders Google to Pay $425 Million for Unlawfully Tracking Millions of Users](https://soylentnews.org/article.pl?sid=25/09/05/0540222&amp;from=rss)
* [2025-09-06, 16:26:23](https://lobste.rs/s/khzzgy/choose_your_own_adventure) - [Choose Your Own Adventure](https://www.filfre.net/2025/09/choose-your-own-adventure/)
* [2025-09-06, 14:35:48](https://lobste.rs/s/9jwjca/oldest_recorded_transaction) - [Oldest recorded transaction](https://avi.im/blag/2025/oldest-txn/)
* [2025-09-06, 14:34:55](https://news.ycombinator.com/item?id=45149626) - [Oldest recorded transaction](https://avi.im/blag/2025/oldest-txn/)
* [2025-09-06, 14:29:00](https://lobste.rs/s/tfpl4l/odin_does_have_undefined_behavior) - [Odin does have undefined behavior](https://www.youtube.com/watch?v=k8iCkbbBHyg)
* [2025-09-06, 13:59:51](https://lobste.rs/s/my1p2k/formality_on_demand) - [Formality on demand](https://www.inkandswitch.com/ink/notes/formality-on-demand/)
* [2025-09-06, 13:32:18](https://lobste.rs/s/iajqdh/wayland_budgie_desktop_2023) - [Wayland. (Budgie Desktop, 2023)](https://buddiesofbudgie.org/blog/wayland)
* [2025-09-06, 13:29:41](https://lobste.rs/s/o38gzs/996_there_is_cost_your_lifestyle) - [996 – There is cost to your lifestyle](https://lucumr.pocoo.org/2025/9/4/996/)
* [2025-09-06, 13:04:51](https://news.ycombinator.com/item?id=45148944) - [We hacked Burger King: How auth bypass led to drive-thru audio surveillance](https://bobdahacker.com/blog/rbi-hacked-drive-thrus/)
* [2025-09-06, 13:02:47](https://lobste.rs/s/fsczxj/patterns_vs_patterns) - [Patterns vs. \&quot;Patterns\&quot;](https://perl.plover.com/classes/design/samples/slide012a.html)
* [2025-09-06, 12:40:48](https://lobste.rs/s/zml5qc/day_return_became_enter) - [The day Return became Enter](https://aresluna.org/the-day-return-became-enter/)
* [2025-09-06, 12:13:00](https://soylentnews.org/article.pl?sid=25/09/05/0536245&amp;from=rss) - [China Likely to Land on Moon Before US Does Again](https://soylentnews.org/article.pl?sid=25/09/05/0536245&amp;from=rss)
* [2025-09-06, 10:55:33](https://lobste.rs/s/t8fc8a/unexplanations_relational_algebra_is) - [Unexplanations: relational algebra is math (2024)](https://www.scattered-thoughts.net/writing/unexplanations-relational-algebra-is-math/)
* [2025-09-06, 07:41:48](https://news.ycombinator.com/item?id=45147385) - [Why language models hallucinate](https://openai.com/index/why-language-models-hallucinate/)
* [2025-09-06, 07:29:00](https://soylentnews.org/article.pl?sid=25/09/05/0527230&amp;from=rss) - [New Hollow-Core Fiber Outperforms Glass, Pushing Data Closer to Light Speed](https://soylentnews.org/article.pl?sid=25/09/05/0527230&amp;from=rss)
* [2025-09-06, 04:08:52](https://lobste.rs/s/m5f6ww/leptos) - [Leptos](https://leptos.dev/)
* [2025-09-06, 02:45:00](https://soylentnews.org/article.pl?sid=25/09/05/0259211&amp;from=rss) - [The Fight Against Labeling Long-Term Streaming Rentals as “Purchases” You “Buy”](https://soylentnews.org/article.pl?sid=25/09/05/0259211&amp;from=rss)
* [2025-09-06, 01:25:00](https://hardware.slashdot.org/story/25/09/05/2319259/apples-vision-pro-gaining-traction-in-some-niches-of-business?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple&apos;s Vision Pro Gaining Traction in Some Niches of Business](https://hardware.slashdot.org/story/25/09/05/2319259/apples-vision-pro-gaining-traction-in-some-niches-of-business?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-06, 00:45:00](https://hardware.slashdot.org/story/25/09/05/2126200/americas-first-sodium-ion-battery-manufacturer-ceases-operations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America&apos;s First Sodium-Ion Battery Manufacturer Ceases Operations](https://hardware.slashdot.org/story/25/09/05/2126200/americas-first-sodium-ion-battery-manufacturer-ceases-operations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-06, 00:02:00](https://tech.slashdot.org/story/25/09/05/1957250/canada-delaying-plan-to-force-automakers-to-hit-evs-sales-targets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Canada Delaying Plan To Force Automakers To Hit EVs Sales Targets](https://tech.slashdot.org/story/25/09/05/1957250/canada-delaying-plan-to-force-automakers-to-hit-evs-sales-targets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 23:20:00](https://news.slashdot.org/story/25/09/05/1859232/trump-to-impose-tariffs-on-semiconductor-imports-from-firms-not-moving-production-to-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump To Impose Tariffs On Semiconductor Imports From Firms Not Moving Production To US](https://news.slashdot.org/story/25/09/05/1859232/trump-to-impose-tariffs-on-semiconductor-imports-from-firms-not-moving-production-to-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 22:50:55](https://news.ycombinator.com/item?id=45144610) - [The math of shuffling cards almost brought down an online poker empire](https://www.scientificamerican.com/article/how-the-math-of-shuffling-cards-almost-brought-down-an-online-poker-empire/)
* [2025-09-05, 22:40:00](https://news.slashdot.org/story/25/09/05/199223/firefox-ending-32-bit-linux-support-next-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Firefox Ending 32-bit Linux Support Next Year](https://news.slashdot.org/story/25/09/05/199223/firefox-ending-32-bit-linux-support-next-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 22:00:00](https://it.slashdot.org/story/25/09/05/196218/boffins-build-automated-android-bug-hunting-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Boffins Build Automated Android Bug Hunting System](https://it.slashdot.org/story/25/09/05/196218/boffins-build-automated-android-bug-hunting-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 21:57:00](https://soylentnews.org/article.pl?sid=25/09/04/155234&amp;from=rss) - [M365 Copilot Fails to Up Productivity in UK Government Trial](https://soylentnews.org/article.pl?sid=25/09/04/155234&amp;from=rss)
* [2025-09-05, 21:20:00](https://yro.slashdot.org/story/25/09/05/1941245/anthropic-agrees-to-pay-record-15-billion-to-settle-authors-ai-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Agrees To Pay Record $1.5 Billion To Settle Authors&apos; AI Lawsuit](https://yro.slashdot.org/story/25/09/05/1941245/anthropic-agrees-to-pay-record-15-billion-to-settle-authors-ai-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 20:41:00](https://news.slashdot.org/story/25/09/05/160234/scientists-tap-secret-fresh-water-under-the-ocean-raising-hopes-for-a-thirsty-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Tap &apos;Secret&apos; Fresh Water Under the Ocean, Raising Hopes For a Thirsty World](https://news.slashdot.org/story/25/09/05/160234/scientists-tap-secret-fresh-water-under-the-ocean-raising-hopes-for-a-thirsty-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 20:01:00](https://it.slashdot.org/story/25/09/05/1628256/microsoft-365-personal-is-now-free-for-us-college-students-for-a-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft 365 Personal is Now Free For US College Students For a Year](https://it.slashdot.org/story/25/09/05/1628256/microsoft-365-personal-is-now-free-for-us-college-students-for-a-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 19:20:00](https://news.slashdot.org/story/25/09/05/1543244/rising-river-temperatures-threaten-pariss-water-based-building-cooling-network?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rising River Temperatures Threaten Paris&apos;s Water-Based Building Cooling Network](https://news.slashdot.org/story/25/09/05/1543244/rising-river-temperatures-threaten-pariss-water-based-building-cooling-network?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 18:41:00](https://news.slashdot.org/story/25/09/05/1418221/columbia-tries-using-ai-to-cool-off-student-tensions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Columbia Tries Using AI To Cool Off Student Tensions](https://news.slashdot.org/story/25/09/05/1418221/columbia-tries-using-ai-to-cool-off-student-tensions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 18:01:00](https://slashdot.org/story/25/09/05/0535228/anthropic-clamps-down-on-ai-services-for-chinese-owned-firms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Clamps Down on AI Services for Chinese-Owned Firms](https://slashdot.org/story/25/09/05/0535228/anthropic-clamps-down-on-ai-services-for-chinese-owned-firms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 17:20:00](https://news.slashdot.org/story/25/09/05/1436209/public-strongly-backs-aim-of-30-of-land-and-sea-set-aside-for-nature-poll-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Public Strongly Backs Aim of 30% of Land and Sea Set Aside For Nature, Poll Finds](https://news.slashdot.org/story/25/09/05/1436209/public-strongly-backs-aim-of-30-of-land-and-sea-set-aside-for-nature-poll-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 17:14:16](https://news.ycombinator.com/item?id=45140973) - [What to do with an old iPad](http://odb.ar/blog/2025/09/05/hosting-my-blog-on-an-iPad-2.html)
* [2025-09-05, 17:13:00](https://soylentnews.org/article.pl?sid=25/09/04/150221&amp;from=rss) - [Nvidia Blasts Proposed US Bill That Would Force It to Give American Buyers First Option](https://soylentnews.org/article.pl?sid=25/09/04/150221&amp;from=rss)
* [2025-09-05, 16:40:00](https://slashdot.org/story/25/09/05/1428223/geoffrey-hinton-ai-will-make-a-few-people-much-richer-and-most-people-poorer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Geoffrey Hinton: &apos;AI Will Make a Few People Much Richer and Most People Poorer&apos;](https://slashdot.org/story/25/09/05/1428223/geoffrey-hinton-ai-will-make-a-few-people-much-richer-and-most-people-poorer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 16:00:00](https://tech.slashdot.org/story/25/09/05/1527251/google-hit-with-345-billion-eu-antitrust-fine-over-adtech-practices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Hit With $3.45 Billion EU Antitrust Fine Over Adtech Practices](https://tech.slashdot.org/story/25/09/05/1527251/google-hit-with-345-billion-eu-antitrust-fine-over-adtech-practices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 14:57:44](https://lobste.rs/s/o0x7rb/your_mouse_free_setups) - [Your mouse-free setups](https://lobste.rs/s/o0x7rb/your_mouse_free_setups)
* [2025-09-05, 14:15:31](https://lobste.rs/s/ciqk7x/use_singular_nouns_for_database_table) - [Use singular nouns for database table names](https://www.teamten.com/lawrence/programming/use-singular-nouns-for-database-table-names.html)
* [2025-09-05, 12:28:00](https://soylentnews.org/article.pl?sid=25/09/04/0430216&amp;from=rss) - [Stressed Ice Generates Electricity, Researchers Find](https://soylentnews.org/article.pl?sid=25/09/04/0430216&amp;from=rss)
* [2025-09-05, 08:19:28](https://lobste.rs/s/d30ska/nixos_is_endgame_distrohopping) - [NixOS is the endgame of distrohopping](https://joshblais.com/blog/nixos-is-the-endgame-of-distrohopping/)
* [2025-09-05, 07:47:00](https://soylentnews.org/article.pl?sid=25/09/04/0419219&amp;from=rss) - [Google Won&apos;t Have to Sell Chrome, Judge Rules](https://soylentnews.org/article.pl?sid=25/09/04/0419219&amp;from=rss)
* [2025-09-05, 03:03:00](https://soylentnews.org/article.pl?sid=25/09/04/0414246&amp;from=rss) - [U.S. Gov&apos;t Revokes TSMC&apos;s Authorization to Ship Tools to its Fabs in China](https://soylentnews.org/article.pl?sid=25/09/04/0414246&amp;from=rss)
* [2025-09-04, 22:16:00](https://soylentnews.org/article.pl?sid=25/09/04/048238&amp;from=rss) - [Scammers Will Try to Trick You Into Filling Out Google Forms. Don’t Fall for It](https://soylentnews.org/article.pl?sid=25/09/04/048238&amp;from=rss)
* [2025-09-04, 19:15:10](https://news.ycombinator.com/item?id=45131121) - [Hitting Peak File IO Performance with Zig](https://steelcake.com/blog/nvme-zig/)
* [2025-09-04, 19:08:23](https://news.ycombinator.com/item?id=45131040) - [X-COM creator Julian Gollop discusses his most important games](https://www.pcgamer.com/collected-works-julian-gollop/)
* [2025-09-04, 17:29:00](https://soylentnews.org/article.pl?sid=25/09/04/0350224&amp;from=rss) - [Passkeys Are Incompatible With Open-Source Software](https://soylentnews.org/article.pl?sid=25/09/04/0350224&amp;from=rss)
* [2025-09-04, 12:44:00](https://soylentnews.org/article.pl?sid=25/09/03/0226210&amp;from=rss) - [Get Ready for Plastic Blood](https://soylentnews.org/article.pl?sid=25/09/03/0226210&amp;from=rss)
* [2025-09-04, 07:57:00](https://soylentnews.org/article.pl?sid=25/09/03/0223245&amp;from=rss) - [Nearly 40% of Nvidia&apos;s Revenue Tied to Two Mystery Customers, Filing Shows](https://soylentnews.org/article.pl?sid=25/09/03/0223245&amp;from=rss)
* [2025-09-04, 07:52:22](https://news.ycombinator.com/item?id=45124743) - [A robot walks on water thanks to evolution&apos;s solution](https://arstechnica.com/science/2025/09/robotic-bug-literally-walks-on-water/)
* [2025-09-04, 06:22:20](https://news.ycombinator.com/item?id=45124165) - [Kruci: Post-mortem of a UI library](https://pwy.io/posts/kruci-post-mortem/)
* [2025-09-04, 03:14:00](https://soylentnews.org/article.pl?sid=25/09/03/0216228&amp;from=rss) - [People Who Believe in Conspiracy Theories Process Information Differently at the Neural Level](https://soylentnews.org/article.pl?sid=25/09/03/0216228&amp;from=rss)
* [2025-09-04, 00:39:33](https://news.ycombinator.com/item?id=45122069) - [Anonymous recursive functions in Racket](https://github.com/shriram/anonymous-recursive-function)
* [2025-09-03, 22:27:00](https://soylentnews.org/article.pl?sid=25/09/02/192213&amp;from=rss) - [CRLite: Fast, Private, and Comprehensive Certificate Revocation Checking in Firefox](https://soylentnews.org/article.pl?sid=25/09/02/192213&amp;from=rss)
* [2025-09-03, 22:21:38](https://news.ycombinator.com/item?id=45121010) - [Like humans, every tree has its own microbiome, a new study has found](https://www.nytimes.com/2025/08/27/science/biology-trees-microbiomes.html)
* [2025-09-03, 17:44:00](https://soylentnews.org/article.pl?sid=25/09/02/1855227&amp;from=rss) - [Microsoft Can&apos;t Guarantee Data Sovereignty – OVHcloud Says &apos;We Told You So&apos;](https://soylentnews.org/article.pl?sid=25/09/02/1855227&amp;from=rss)
* [2025-09-03, 13:01:00](https://soylentnews.org/article.pl?sid=25/09/02/1851257&amp;from=rss) - [Fascinating New Psychology Research Shows How Music Shapes Imagination](https://soylentnews.org/article.pl?sid=25/09/02/1851257&amp;from=rss)
* [2025-09-03, 10:26:00](https://soylentnews.org/article.pl?sid=25/09/03/0230242&amp;from=rss) - [We Fed People a Milkshake With 130g of Fat to See What It Did to Their Brains](https://soylentnews.org/article.pl?sid=25/09/03/0230242&amp;from=rss)
* [2025-09-03, 08:17:00](https://soylentnews.org/article.pl?sid=25/09/02/1848251&amp;from=rss) - [DUPE - China Turns on Giant Neutrino Detector](https://soylentnews.org/article.pl?sid=25/09/02/1848251&amp;from=rss)
* [2025-09-03, 07:31:11](https://news.ycombinator.com/item?id=45113181) - [Braincraft challenge – 1000 neurons, 100 seconds, 10 runs, 2 choices, no reward](https://github.com/rougier/braincraft)
* [2025-09-03, 03:31:00](https://soylentnews.org/article.pl?sid=25/09/02/0359228&amp;from=rss) - [Artificial Toy Story: Do AI-Powered Toys Take the Life Out of Playtime?](https://soylentnews.org/article.pl?sid=25/09/02/0359228&amp;from=rss)
