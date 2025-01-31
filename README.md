# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Developments

* [OpenAI Launches Operator, an AI Agent That Can Operate Your Computer](https://soylentnews.org/article.pl?sid=25/01/30/1358218&from=rss) ([comments](https://news.ycombinator.com/item?id=42884556))

* [Rubywm: An X11 window manager in pure Ruby](https://github.com/vidarh/rubywm) ([comments](https://news.ycombinator.com/item?id=42884556))

* [sixos: A nix OS without systemd [video]](https://media.ccc.de/v/38c3-sixos-a-nix-os-without-systemd) ([comments](https://news.ycombinator.com/item?id=42884727))

* [Mini-R1: Reproduce DeepSeek R1 'Aha Moment'](https://www.philschmid.de/mini-deepseek-r1) ([comments](https://news.ycombinator.com/item?id=42884834))

* [TopoNets: High performing vision and language models with brain-like topography](https://arxiv.org/abs/2501.16396) ([comments](https://news.ycombinator.com/item?id=42884338))

* [Mathesar – an intuitive spreadsheet-like interface to Postgres data](https://github.com/mathesar-foundation/mathesar) ([comments](https://news.ycombinator.com/item?id=42873312))

## Notable Business and Legal Developments

* [Italy Blocks DeepSeek Over Data Privacy Concerns](https://yro.slashdot.org/story/25/01/30/2249212/italy-blocks-deepseek-over-data-privacy-concerns?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=42884133))

* [Lawsuit Accuses Amazon of Secretly Tracking Consumers Through Cellphones](https://yro.slashdot.org/story/25/01/30/220209/lawsuit-accuses-amazon-of-secretly-tracking-consumers-through-cellphones?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=42883363))

* [SoftBank in Talks To Invest Up To $25 Billion in OpenAI](https://slashdot.org/story/25/01/30/1114205/softbank-in-talks-to-invest-up-to-25-billion-in-openai?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=42882121))

## Digital and Historical Archiving

* [Archivists Work To Identify and Save the Thousands of Datasets Disappearing From Data.gov](https://hardware.slashdot.org/story/25/01/30/2215252/archivists-work-to-identify-and-save-the-thousands-of-datasets-disappearing-from-datagov?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=42883161))

* [VGHF Opens Free Online Access To 1,500 Classic Game Mags, 30K Historic Files](https://games.slashdot.org/story/25/01/30/2259236/vghf-opens-free-online-access-to-1500-classic-game-mags-30k-historic-files?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=42884473))

## Science and Nature Discoveries

* [NASA Spacewalkers to Swab the ISS for Microbial Life](https://soylentnews.org/article.pl?sid=25/01/29/1222207&from=rss) ([comments](https://news.ycombinator.com/item?id=42884338))

* [Mice with Two Dads have been Created Using CRISPR](https://soylentnews.org/article.pl?sid=25/01/29/0040232&from=rss) ([comments](https://news.ycombinator.com/item?id=42880704))

* [Mysterious Blobs Found Inside Cells Are Rewriting the Story of How Life Works](https://soylentnews.org/article.pl?sid=25/01/26/0444214&from=rss) ([comments](https://news.ycombinator.com/item?id=42838432))

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

* [2025-01-31, 05:03:14](https://news.ycombinator.com/item?id=42884834) - [Mini-R1: Reproduce DeepSeek R1 \"Aha Moment\"](https://www.philschmid.de/mini-deepseek-r1)
* [2025-01-31, 05:00:00](https://tech.slashdot.org/story/25/01/31/0349214/everything-i-say-leaks-zuckerberg-says-in-leaked-meeting-audio?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['Everything I Say Leaks,' Zuckerberg Says in Leaked Meeting Audio](https://tech.slashdot.org/story/25/01/31/0349214/everything-i-say-leaks-zuckerberg-says-in-leaked-meeting-audio?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-31, 04:52:49](https://news.ycombinator.com/item?id=42884803) - [Google Pixel 4a update to \"improve stability\" of the battery cuts life in half](https://liliputing.com/google-pixel-4a-update-to-improve-stability-of-the-battery-cuts-battery-life-in-half-for-some-users/)
* [2025-01-31, 04:35:57](https://news.ycombinator.com/item?id=42884727) - [sixos: A nix OS without systemd [video]](https://media.ccc.de/v/38c3-sixos-a-nix-os-without-systemd)
* [2025-01-31, 03:55:00](https://soylentnews.org/article.pl?sid=25/01/30/1358218&from=rss) - [OpenAI Launches Operator, an AI Agent That Can Operate Your Computer](https://soylentnews.org/article.pl?sid=25/01/30/1358218&from=rss)
* [2025-01-31, 03:51:44](https://news.ycombinator.com/item?id=42884556) - [Rubywm: An X11 window manager in pure Ruby](https://github.com/vidarh/rubywm)
* [2025-01-31, 03:30:00](https://games.slashdot.org/story/25/01/30/2259236/vghf-opens-free-online-access-to-1500-classic-game-mags-30k-historic-files?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [VGHF Opens Free Online Access To 1,500 Classic Game Mags, 30K Historic Files](https://games.slashdot.org/story/25/01/30/2259236/vghf-opens-free-online-access-to-1500-classic-game-mags-30k-historic-files?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-31, 03:28:57](https://news.ycombinator.com/item?id=42884473) - [Copyright Office suggests AI copyright debate was settled in 1965](https://arstechnica.com/tech-policy/2025/01/copyright-office-suggests-ai-copyright-debate-was-settled-in-1965/)
* [2025-01-31, 02:58:28](https://news.ycombinator.com/item?id=42884338) - [TopoNets: High performing vision and language models with brain-like topography](https://arxiv.org/abs/2501.16396)
* [2025-01-31, 02:09:50](https://news.ycombinator.com/item?id=42884133) - [Xerox Alto Source Code (2014)](https://computerhistory.org/blog/xerox-alto-source-code/)
* [2025-01-31, 02:08:10](https://lobste.rs/s/umnpte/xerox_alto_source_code_2014) - [Xerox Alto Source Code (2014)](https://computerhistory.org/blog/xerox-alto-source-code/)
* [2025-01-31, 01:54:09](https://lobste.rs/s/2an1ay/how_jane_street_accidentally_built) - [How Jane Street accidentally built a better build system for OCaml](https://blog.janestreet.com/how-we-accidentally-built-a-better-build-system-for-ocaml-index/)
* [2025-01-31, 01:00:00](https://yro.slashdot.org/story/25/01/30/2249212/italy-blocks-deepseek-over-data-privacy-concerns?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Italy Blocks DeepSeek Over Data Privacy Concerns](https://yro.slashdot.org/story/25/01/30/2249212/italy-blocks-deepseek-over-data-privacy-concerns?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-31, 00:20:00](https://apple.slashdot.org/story/25/01/30/2224253/apple-reports-quarterly-record-revenue-of-124-billion?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Reports Quarterly Record Revenue of $124 Billion](https://apple.slashdot.org/story/25/01/30/2224253/apple-reports-quarterly-record-revenue-of-124-billion?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-30, 23:45:00](https://hardware.slashdot.org/story/25/01/30/2215252/archivists-work-to-identify-and-save-the-thousands-of-datasets-disappearing-from-datagov?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Archivists Work To Identify and Save the Thousands of Datasets Disappearing From Data.gov](https://hardware.slashdot.org/story/25/01/30/2215252/archivists-work-to-identify-and-save-the-thousands-of-datasets-disappearing-from-datagov?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-30, 23:39:29](https://news.ycombinator.com/item?id=42883363) - [Show HN: Ahey – A simple pub-sub service built on top of web push](https://ahey.io)
* [2025-01-30, 23:11:00](https://soylentnews.org/article.pl?sid=25/01/29/1222207&from=rss) - [NASA Spacewalkers to Swab the ISS for Microbial Life](https://soylentnews.org/article.pl?sid=25/01/29/1222207&from=rss)
* [2025-01-30, 23:02:00](https://yro.slashdot.org/story/25/01/30/220209/lawsuit-accuses-amazon-of-secretly-tracking-consumers-through-cellphones?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Lawsuit Accuses Amazon of Secretly Tracking Consumers Through Cellphones](https://yro.slashdot.org/story/25/01/30/220209/lawsuit-accuses-amazon-of-secretly-tracking-consumers-through-cellphones?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-30, 22:41:00](https://yro.slashdot.org/story/25/01/30/2237250/us-doj-sues-to-block-hewlett-packard-enterprises-14-billion-juniper-deal?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [US DOJ Sues To Block Hewlett Packard Enterprise's $14 Billion Juniper Deal](https://yro.slashdot.org/story/25/01/30/2237250/us-doj-sues-to-block-hewlett-packard-enterprises-14-billion-juniper-deal?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-30, 22:25:00](https://hardware.slashdot.org/story/25/01/30/2152242/googles-10-year-chromebook-lifeline-leaves-old-laptops-headed-for-silicon-cemetery?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google's 10-Year Chromebook Lifeline Leaves Old Laptops Headed For Silicon Cemetery](https://hardware.slashdot.org/story/25/01/30/2152242/googles-10-year-chromebook-lifeline-leaves-old-laptops-headed-for-silicon-cemetery?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-30, 21:45:00](https://yro.slashdot.org/story/25/01/30/2142256/openai-teases-new-era-of-ai-in-us-deepens-ties-with-government?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [OpenAI Teases 'New Era' of AI In US, Deepens Ties With Government](https://yro.slashdot.org/story/25/01/30/2142256/openai-teases-new-era-of-ai-in-us-deepens-ties-with-government?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-30, 21:33:48](https://lobste.rs/s/mdtfnm/forest_desert) - [Forest & Desert](https://tidyfirst.substack.com/p/forest-and-desert)
* [2025-01-30, 21:16:53](https://lobste.rs/s/mwfd4n/contracts_for_c_explained_5_minutes) - [Contracts for C++ explained in 5 minutes](https://timur.audio/contracts_explained_in_5_mins)
* [2025-01-30, 21:00:10](https://news.ycombinator.com/item?id=42882121) - [Svix (YC W21) Is Hiring a Developer Marketer (US Remote)](https://www.svix.com/careers/)
* [2025-01-30, 20:39:47](https://lobste.rs/s/qyypzo/deepseek_database_leak) - [DeepSeek database leak](https://www.wiz.io/blog/wiz-research-uncovers-exposed-deepseek-database-leak)
* [2025-01-30, 20:35:12](https://news.ycombinator.com/item?id=42881913) - [Why Children's Books?](https://www.lrb.co.uk/the-paper/v47/n02/katherine-rundell/why-children-s-books)
* [2025-01-30, 20:34:24](https://lobste.rs/s/gvhivz/surprising_way_save_memory_with_bytesio) - [The surprising way to save memory with BytesIO](https://pythonspeed.com/articles/bytesio-reduce-memory-usage/)
* [2025-01-30, 20:30:09](https://news.ycombinator.com/item?id=42881858) - [Signs Of Life In A Desert](https://www.noemamag.com/signs-of-life-in-a-desert-of-death/)
* [2025-01-30, 20:14:47](https://news.ycombinator.com/item?id=42881724) - [How Jane Street accidentally built a better build system for OCaml](https://blog.janestreet.com/how-we-accidentally-built-a-better-build-system-for-ocaml-index/)
* [2025-01-30, 19:50:00](https://news.slashdot.org/story/25/01/30/1914238/amazon-sues-wa-state-over-washington-post-request-for-kuiper-records?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Amazon Sues WA State Over Washington Post Request for Kuiper Records](https://news.slashdot.org/story/25/01/30/1914238/amazon-sues-wa-state-over-washington-post-request-for-kuiper-records?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-30, 19:44:02](https://news.ycombinator.com/item?id=42881408) - [Optical Frequency Combs](https://www.nist.gov/topics/physics/optical-frequency-combs)
* [2025-01-30, 19:37:42](https://news.ycombinator.com/item?id=42881342) - [Stats – macOS system monitor in your menu bar](https://github.com/exelban/stats)
* [2025-01-30, 19:09:00](https://tech.slashdot.org/story/25/01/30/199236/google-offering-voluntary-exit-for-employees-working-on-pixel-android?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google Offering 'Voluntary Exit' For Employees Working on Pixel, Android](https://tech.slashdot.org/story/25/01/30/199236/google-offering-voluntary-exit-for-employees-working-on-pixel-android?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-30, 18:48:30](https://news.ycombinator.com/item?id=42880807) - [California law enforcement misused state databases more than 7k times in 2023](https://www.eff.org/deeplinks/2025/01/california-police-misused-state-databases-more-7000-times-2023)
* [2025-01-30, 18:45:32](https://lobste.rs/s/kh4fqk/practical_pigment_mixing_for_digital) - [Practical Pigment Mixing for Digital Painting (2021)](https://scrtwpns.com/mixbox.pdf)
* [2025-01-30, 18:41:26](https://lobste.rs/s/3harxm/introducing_sealed_types) - [Introducing sealed types](https://cheriot.org/sealing/compiler/2025/01/30/introducing-sealed-types.html)
* [2025-01-30, 18:38:12](https://news.ycombinator.com/item?id=42880704) - [Many of the Pokemon playtest cards were likely printed in 2024](https://www.elitefourum.com/t/many-of-the-pokemon-playtest-cards-were-likely-printed-in-2024/52421)
* [2025-01-30, 18:22:00](https://soylentnews.org/article.pl?sid=25/01/29/1217252&from=rss) - [Google Agrees to Crack Down on Fake Reviews for UK Businesses](https://soylentnews.org/article.pl?sid=25/01/29/1217252&from=rss)
* [2025-01-30, 17:47:33](https://lobste.rs/s/fbhuou/ranking_programming_languages_by_energy) - [Ranking Programming Languages by Energy Efficiency](https://haslab.github.io/SAFER/scp21.pdf)
* [2025-01-30, 16:59:38](https://news.ycombinator.com/item?id=42879661) - [Launch HN: Karsa (YC W25) – Buy and save stablecoins internationally](https://news.ycombinator.com/item?id=42879661)
* [2025-01-30, 16:41:00](https://developers.slashdot.org/story/25/01/30/1617210/oracle-faces-java-customer-revolt-after-predatory-pricing-changes?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Oracle Faces Java Customer Revolt After 'Predatory' Pricing Changes](https://developers.slashdot.org/story/25/01/30/1617210/oracle-faces-java-customer-revolt-after-predatory-pricing-changes?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-30, 16:15:25](https://lobste.rs/s/cglras/slow_death_ocsp) - [The Slow Death of OCSP](https://www.feistyduck.com/newsletter/issue_121_the_slow_death_of_ocsp)
* [2025-01-30, 16:00:00](https://news.slashdot.org/story/25/01/30/1124208/books-written-by-humans-are-getting-their-own-certification?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Books Written By Humans Are Getting Their Own Certification](https://news.slashdot.org/story/25/01/30/1124208/books-written-by-humans-are-getting-their-own-certification?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-30, 15:57:22](https://lobste.rs/s/qbgec0/pypi_now_supports_project_archival) - [PyPI Now Supports Project Archival](https://blog.pypi.org/posts/2025-01-30-archival/)
* [2025-01-30, 15:20:00](https://slashdot.org/story/25/01/30/1114205/softbank-in-talks-to-invest-up-to-25-billion-in-openai?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [SoftBank in Talks To Invest Up To $25 Billion in OpenAI](https://slashdot.org/story/25/01/30/1114205/softbank-in-talks-to-invest-up-to-25-billion-in-openai?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-30, 14:40:00](https://slashdot.org/story/25/01/30/117225/has-europes-great-hope-for-ai-missed-its-moment?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Has Europe's Great Hope For AI Missed Its Moment?](https://slashdot.org/story/25/01/30/117225/has-europes-great-hope-for-ai-missed-its-moment?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-30, 14:01:27](https://news.ycombinator.com/item?id=42877709) - [Antiqua et Nova: Note on the relationship between AI and human intelligence](https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_ddf_doc_20250128_antiqua-et-nova_en.html)
* [2025-01-30, 13:37:14](https://lobste.rs/s/lozl1i/equinix_sunset_future_gitlab) - [Equinix Sunset, future of gitlab.freedesktop.org](https://gitlab.freedesktop.org/freedesktop/freedesktop/-/issues/2011)
* [2025-01-30, 13:34:00](https://soylentnews.org/article.pl?sid=25/01/29/124257&from=rss) - [Baltic Undersea Cable Likely Damaged by External Force, Latvia Says](https://soylentnews.org/article.pl?sid=25/01/29/124257&from=rss)
* [2025-01-30, 13:21:58](https://lobste.rs/s/yubalv/pointers_are_complicated_ii_we_need) - [Pointers Are Complicated II, or: We need better language specs (2020)](https://www.ralfj.de/blog/2020/12/14/provenance.html)
* [2025-01-30, 13:18:49](https://news.ycombinator.com/item?id=42877430) - [A history of APL in the USSR (1991)](https://dl.acm.org/doi/10.1145/130647.130656)
* [2025-01-30, 13:17:19](https://lobste.rs/s/tn5w79/history_apl_ussr) - [History of APL in the USSR](https://dl.acm.org/doi/10.1145/130647.130656)
* [2025-01-30, 13:12:37](https://lobste.rs/s/pvhpvi/execution_kingdom_nouns_2006) - [Execution in the Kingdom of Nouns (2006)](https://steve-yegge.blogspot.com/2006/03/execution-in-kingdom-of-nouns.html)
* [2025-01-30, 13:12:34](https://news.ycombinator.com/item?id=42877399) - [Show HN: Audiocube – A 3D DAW for Spatial Audio](https://www.audiocube.app)
* [2025-01-30, 11:28:31](https://news.ycombinator.com/item?id=42876840) - [JavaScript Temporal is coming](https://developer.mozilla.org/en-US/blog/javascript-temporal-is-coming/)
* [2025-01-30, 11:17:28](https://lobste.rs/s/u9dron/death_email_forwarding) - [The Death of Email Forwarding](https://www.mythic-beasts.com/blog/2025/01/29/the-death-of-email-forwarding/)
* [2025-01-30, 11:03:27](https://lobste.rs/s/gquymr/ux_login_codes) - [The UX of login codes](https://bradfrost.com/blog/post/the-ux-of-login-codes/)
* [2025-01-30, 10:23:18](https://lobste.rs/s/bark5a/preview_crates) - [Preview crates](https://smallcultfollowing.com/babysteps/blog/2025/01/29/preview-crates/)
* [2025-01-30, 10:14:32](https://lobste.rs/s/i2edlt/how_i_use_ai) - [How I Use \"AI\"](https://nicholas.carlini.com/writing/2024/how-i-use-ai.html)
* [2025-01-30, 08:29:00](https://soylentnews.org/article.pl?sid=25/01/29/0040232&from=rss) - [Mice with Two Dads have been Created Using CRISPR](https://soylentnews.org/article.pl?sid=25/01/29/0040232&from=rss)
* [2025-01-30, 04:34:25](https://lobste.rs/s/mwxbm4/reversing_pixel_4a_battery_update) - [Reversing the Pixel 4a battery update](https://social.treehouse.systems/@marcan/113914172433692339)
* [2025-01-30, 04:33:25](https://news.ycombinator.com/item?id=42874885) - [PCBs, copper pours, ground planes, and you](https://lcamtuf.substack.com/p/pcbs-ground-planes-and-you)
* [2025-01-30, 04:23:28](https://lobste.rs/s/dybrex/ending_support_for_expiration) - [Ending Support for Expiration Notification Emails](https://letsencrypt.org/2025/01/22/ending-expiration-emails/)
* [2025-01-30, 03:45:00](https://soylentnews.org/article.pl?sid=25/01/28/2222211&from=rss) - [Complexity Physics Finds Crucial Tipping Points in Chess Games](https://soylentnews.org/article.pl?sid=25/01/28/2222211&from=rss)
* [2025-01-30, 01:41:10](https://lobste.rs/s/w17cjs/will_i_ever_use_this_real_world) - [\"Will I ever use this in the real world?\"](https://blog.waleedkhan.name/will-i-ever-use-this/)
* [2025-01-30, 01:19:37](https://lobste.rs/s/h9ednl/hey_deepseek_can_you_reduce_junk_my_inbox) - [Hey DeepSeek, can you reduce junk in my inbox?](https://loshadki.app/blog/2025-01-29-protect-inbox-with-deepseek/)
* [2025-01-30, 00:31:53](https://news.ycombinator.com/item?id=42873312) - [Mathesar – an intutive spreadsheet-like interface to Postgres data](https://github.com/mathesar-foundation/mathesar)
* [2025-01-29, 23:33:46](https://lobste.rs/s/sn8buz/tv_setup) - [TV Setup](https://push.cx/tv-setup)
* [2025-01-29, 23:02:00](https://soylentnews.org/article.pl?sid=25/01/28/0319228&from=rss) - [Millions of Subarus Could be Remotely Unlocked, Tracked Due to Security Flaws](https://soylentnews.org/article.pl?sid=25/01/28/0319228&from=rss)
* [2025-01-29, 20:27:45](https://lobste.rs/s/0t3yqw/building_t1d_smartwatch_from_scratch) - [Building a (T1D) smartwatch from scratch](https://andrewchilds.com/posts/building-a-t1d-smartwatch-from-scratch)
* [2025-01-29, 18:17:00](https://soylentnews.org/article.pl?sid=25/01/28/0248223&from=rss) - [Linux is the Name That Shall Not be Spoken at Facebook](https://soylentnews.org/article.pl?sid=25/01/28/0248223&from=rss)
* [2025-01-29, 17:50:11](https://news.ycombinator.com/item?id=42868475) - [RCA and the Roaring Twenties](https://globalfinancialdata.com/rca-and-the-roaring-twenties)
* [2025-01-29, 16:21:55](https://news.ycombinator.com/item?id=42866951) - [Show HN: Distr – open-source distribution platform for on-prem deployments](https://github.com/glasskube/distr)
* [2025-01-29, 13:33:00](https://soylentnews.org/article.pl?sid=25/01/28/0238221&from=rss) - [Backdoor Infecting VPNs Used “Magic Packets” for Stealth and Security](https://soylentnews.org/article.pl?sid=25/01/28/0238221&from=rss)
* [2025-01-29, 08:49:00](https://soylentnews.org/article.pl?sid=25/01/27/177259&from=rss) - [How Good is Tesla Full Self Driving, by a Motor Trend Road Tester](https://soylentnews.org/article.pl?sid=25/01/27/177259&from=rss)
* [2025-01-29, 04:03:00](https://soylentnews.org/article.pl?sid=25/01/27/172217&from=rss) - [5 Super Creepy New Technologies That Should Chill All Of Us To The Core](https://soylentnews.org/article.pl?sid=25/01/27/172217&from=rss)
* [2025-01-28, 23:17:00](https://soylentnews.org/article.pl?sid=25/01/27/1659214&from=rss) - [Your Hollywood Career: How to Tell When the End Is Nigh](https://soylentnews.org/article.pl?sid=25/01/27/1659214&from=rss)
* [2025-01-28, 18:31:00](https://soylentnews.org/article.pl?sid=25/01/27/1515223&from=rss) - [The Invalid 68030 Instruction That Accidentally Allowed the Mac Classic II to Successfully Boot Up](https://soylentnews.org/article.pl?sid=25/01/27/1515223&from=rss)
* [2025-01-28, 13:45:00](https://soylentnews.org/article.pl?sid=25/01/27/0435244&from=rss) - [China's Second-Largest Foundry Hires Former Intel Executive to Lead Advanced Node Development](https://soylentnews.org/article.pl?sid=25/01/27/0435244&from=rss)
* [2025-01-28, 09:01:00](https://soylentnews.org/article.pl?sid=25/01/27/0432230&from=rss) - [First-Ever Data Center On The Moon Set To Launch Next Month](https://soylentnews.org/article.pl?sid=25/01/27/0432230&from=rss)
* [2025-01-28, 04:14:00](https://soylentnews.org/article.pl?sid=25/01/27/0425254&from=rss) - [The Drunken Plagiarists: Working with Co-pilots](https://soylentnews.org/article.pl?sid=25/01/27/0425254&from=rss)
* [2025-01-27, 23:30:00](https://soylentnews.org/article.pl?sid=25/01/27/0421239&from=rss) - [Data Breach Hitting PowerSchool Looks Very, Very Bad](https://soylentnews.org/article.pl?sid=25/01/27/0421239&from=rss)
* [2025-01-27, 20:15:01](https://news.ycombinator.com/item?id=42845129) - [My Cat Mii](https://www.theparisreview.org/blog/2025/01/20/my-cat-mii/)
* [2025-01-27, 18:44:00](https://soylentnews.org/article.pl?sid=25/01/27/049209&from=rss) - [Sleeping Pills Stop the Brain’s System for Cleaning Out Waste](https://soylentnews.org/article.pl?sid=25/01/27/049209&from=rss)
* [2025-01-27, 16:25:00](https://soylentnews.org/article.pl?sid=25/01/27/0416218&from=rss) - [Linux Kernel 6.13 Announced](https://soylentnews.org/article.pl?sid=25/01/27/0416218&from=rss)
* [2025-01-27, 13:55:00](https://soylentnews.org/article.pl?sid=25/01/27/033246&from=rss) - [Think It Takes 21 Days to Form a Habit? Science Says Think Again](https://soylentnews.org/article.pl?sid=25/01/27/033246&from=rss)
* [2025-01-27, 09:10:00](https://soylentnews.org/article.pl?sid=25/01/26/0453205&from=rss) - [Medical Device Company Suddenly Stops Hospitals From Fixing Machines Themselves](https://soylentnews.org/article.pl?sid=25/01/26/0453205&from=rss)
* [2025-01-27, 07:37:39](https://news.ycombinator.com/item?id=42838392) - [Capablanca: Minimum Vertex Cover Solver](https://pypi.org/project/capablanca)
* [2025-01-27, 04:22:00](https://soylentnews.org/article.pl?sid=25/01/26/0444214&from=rss) - [Mysterious Blobs Found Inside Cells Are Rewriting the Story of How Life Works](https://soylentnews.org/article.pl?sid=25/01/26/0444214&from=rss)
* [2025-01-27, 01:24:10](https://news.ycombinator.com/item?id=42836306) - [Scalable OLTP in the Cloud: What's the Big Deal?](http://muratbuffalo.blogspot.com/2024/01/scalable-oltp-in-cloud-whats-big-deal.html)
