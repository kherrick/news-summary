# [News Summary](https://kherrick.github.io/news-summary/)

## Technological Advancements and Challenges

* [China Pits Humanoid Robots Against Humans In Half-Marathon](https://hardware.slashdot.org/story/25/04/19/0659220/china-pits-humanoid-robots-against-humans-in-half-marathon?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A half-marathon in China involves competition between humanoid robots and human runners.

* [China Develops Flash Memory 10,000x Faster With 400-Picosecond Speed](https://hardware.slashdot.org/story/25/04/18/2255249/china-develops-flash-memory-10000x-faster-with-400-picosecond-speed?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A breakthrough flash memory achieves unprecedented speed, potentially reshaping data storage.

* [Open Source DMR Modem Implementation in SDR with GNU Radio and Codec2](https://qradiolink.org/open-source-DMR-transceiver-implementation.html) - A new open-source digital radio modem promises innovation in software-defined radio technology.

* [OpenAI Puzzled as New Models Show Rising Hallucination Rates](https://slashdot.org/story/25/04/18/2323216/openai-puzzled-as-new-models-show-rising-hallucination-rates?utm_source=rss1.0mainlinkanon&utm_medium=feed) - OpenAI faces increasing hallucination rates in their latest artificial intelligence models.

* [Show HN: New world record – verified Goldbach Conjecture up to 4*10^18+7*10^13](https://medium.com/@jay_gridbach/grid-computing-shatters-world-record-for-goldbach-conjecture-verification-1ef3dc58a38d) - A verified calculation of the Goldbach Conjecture breaks computational records.

## Scientific Discoveries and Research

* [Scientists claim to have found colour no one has seen before](https://www.theguardian.com/science/2025/apr/18/scientists-claim-to-have-found-colour-no-one-has-seen-before) - A team of scientists claims the identification of a previously unseen color.

* [A star appears to have collapsed straight into a black hole without supernova (2017)](https://science.nasa.gov/missions/hubble/collapsing-star-gives-birth-to-a-black-hole/) - Astronomers document an unusual stellar death bypassing a supernova.

* [Oxygen Discovered in Most Distant Known Galaxy](https://soylentnews.org/article.pl?sid=25/04/16/1849251&from=rss) - Scientists identify oxygen in the most distant galaxy yet studied.

* [AI-Designed Antivenoms: New Proteins to Block Deadly Snake Toxins](https://plentyofroom.beehiiv.com/p/antivenoms-with-ai-designed-proteins) - AI technologies aid in creating antivenoms to neutralize snake toxins.

* [Restoring the Galaxian3 Theatre 6, 1992 six player arcade machine](https://philwip.com/2025/04/14/galaxian-3-project-revival/) - A restoration project breathes life into a 1990s multiplayer arcade machine.

## Environmental and Societal Impacts

* [About 15% of World's Cropland Polluted With Toxic Metals, Say Researchers](https://news.slashdot.org/story/25/04/18/2345235/about-15-of-worlds-cropland-polluted-with-toxic-metals-say-researchers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Significant croplands globally contaminated by toxic metals raise alarm.

* [Rooftop Solar PV Could Supply Two-Thirds of World's Energy Needs, and Lower Global Temperatures](https://soylentnews.org/article.pl?sid=25/04/16/1143246&from=rss) - Expanding rooftop solar panel use emerges as a potential solution to energy and climate crises.

* [NFT Technology Used for Social Causes–A New Mode of Charity](https://lobste.rs/s/clfomn/system_design_cellular_apl_computer) - Charities adopt blockchain technologies for fundraising and outreach.

* [Dolphins Are Dying From Toxic Chemicals Banned Since the 1980s](https://soylentnews.org/article.pl?sid=25/04/16/1151239&from=rss) - Persistent environmental pollutants continuously endanger marine life.

* [States Are Banning Forever Chemicals. Industry is Fighting Back](https://soylentnews.org/article.pl?sid=25/04/17/1348247&from=rss) - Affordable and sustainable options sought amidst controversial chemical bans.

## Cultural Insights and Innovations

* [Demo "The Mind" by Haujobb and Sweet16](https://www.lexaloffle.com/bbs/?pid=145596) - A creative demo combines music and visuals using retro-style programming.

* [A Map of British Dialects (2023)](https://starkeycomics.com/2023/11/07/map-of-british-english-dialects/) - A release of visualized linguistic diversity in British English dialects.

* [Netflix CEO Counters Cameron's AI Cost-Cutting Vision: 'Make Movies 10% Better'](https://slashdot.org/story/25/04/18/1212204/netflix-ceo-counters-camerons-ai-cost-cutting-vision-make-movies-10-better?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Netflix's leadership pursues diverse strategies for cinema enhancement.

* [Cyberpunk 1958: The Early Days of the Polish IT Industry](https://culture.pl/en/article/cyberpunk-1958-the-early-days-of-the-polish-it-industry) - The history of the fledgling IT sector from a Polish perspective.

* [‘End of an Era’: The Last RadioShack in Maryland is Closing its Doors](https://soylentnews.org/article.pl?sid=25/04/16/1857229&from=rss) - Iconic electronics store closes its chapter in Maryland, reminiscing past significance.

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

* [2025-04-19, 13:00:00](https://hardware.slashdot.org/story/25/04/19/0659220/china-pits-humanoid-robots-against-humans-in-half-marathon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Pits Humanoid Robots Against Humans In Half-Marathon](https://hardware.slashdot.org/story/25/04/19/0659220/china-pits-humanoid-robots-against-humans-in-half-marathon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-19, 12:36:26](https://news.ycombinator.com/item?id=43736005) - [Scientists claim to have found colour no one has seen before](https://www.theguardian.com/science/2025/apr/18/scientists-claim-to-have-found-colour-no-one-has-seen-before)
* [2025-04-19, 12:23:50](https://news.ycombinator.com/item?id=43735945) - [Open Source DMR Modem Implementation in SDR with GNU Radio and Codec2](https://qradiolink.org/open-source-DMR-transceiver-implementation.html)
* [2025-04-19, 12:19:00](https://soylentnews.org/article.pl?sid=25/04/18/040226&amp;from=rss) - [Inside arXiv—the Most Transformative Platform in All of Science](https://soylentnews.org/article.pl?sid=25/04/18/040226&amp;from=rss)
* [2025-04-19, 12:14:13](https://news.ycombinator.com/item?id=43735902) - [Android phones will soon reboot themselves after sitting unused for three days](https://arstechnica.com/gadgets/2025/04/android-phones-will-soon-reboot-themselves-after-sitting-unused-for-3-days/)
* [2025-04-19, 11:50:51](https://news.ycombinator.com/item?id=43735798) - [FramePack – Enabling Fast Video Generation on Consumer GPUs](https://framepack.co/)
* [2025-04-19, 11:30:43](https://lobste.rs/s/bejeov/frankenstein_s_init) - [Frankenstein’s `__init__`](https://ohadravid.github.io/posts/2025-04-19-frank/)
* [2025-04-19, 11:24:41](https://news.ycombinator.com/item?id=43735693) - [Neurite](https://github.com/satellitecomponent/Neurite)
* [2025-04-19, 11:00:30](https://news.ycombinator.com/item?id=43735592) - [Demo \&quot;The Mind\&quot; by Haujobb and Sweet16](https://www.lexaloffle.com/bbs/?pid=145596)
* [2025-04-19, 10:19:49](https://news.ycombinator.com/item?id=43735443) - [Achieveing lower latencies with S3 object storage](https://spiraldb.com/post/so-you-want-to-use-object-storage)
* [2025-04-19, 10:00:00](https://news.slashdot.org/story/25/04/18/2345235/about-15-of-worlds-cropland-polluted-with-toxic-metals-say-researchers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [About 15% of World&apos;s Cropland Polluted With Toxic Metals, Say Researchers](https://news.slashdot.org/story/25/04/18/2345235/about-15-of-worlds-cropland-polluted-with-toxic-metals-say-researchers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-19, 09:22:17](https://news.ycombinator.com/item?id=43735239) - [Restoring the Galaxian3 Theatre 6, 1992 six player arcade machine](https://philwip.com/2025/04/14/galaxian-3-project-revival/)
* [2025-04-19, 09:02:46](https://news.ycombinator.com/item?id=43735170) - [A star appears to have collapsed straight into a black hole without supernova (2017)](https://science.nasa.gov/missions/hubble/collapsing-star-gives-birth-to-a-black-hole/)
* [2025-04-19, 08:37:00](https://soylentnews.org/article.pl?sid=25/04/18/0334256&amp;from=rss) - [Vibe Coding _ !@#$% Kids! ](https://soylentnews.org/article.pl?sid=25/04/18/0334256&amp;from=rss)
* [2025-04-19, 08:30:00](https://science.slashdot.org/story/25/04/19/0654204/scientists-claim-to-have-found-color-no-one-has-seen-before?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Claim To Have Found Color No One Has Seen Before](https://science.slashdot.org/story/25/04/19/0654204/scientists-claim-to-have-found-color-no-one-has-seen-before?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-19, 08:13:54](https://lobste.rs/s/hgltzs/easters_adventofcode_like_challenge_for) - [Easters - an adventofcode-like challenge for easter](https://easters.dev/)
* [2025-04-19, 08:02:07](https://news.ycombinator.com/item?id=43734953) - [A Map of British Dialects (2023)](https://starkeycomics.com/2023/11/07/map-of-british-english-dialects/)
* [2025-04-19, 07:50:36](https://news.ycombinator.com/item?id=43734910) - [Show HN: Undercutf1 – F1 Live Timing TUI with Driver Tracker, Variable Delay](https://github.com/JustAman62/undercut-f1)
* [2025-04-19, 07:00:00](https://hardware.slashdot.org/story/25/04/18/2255249/china-develops-flash-memory-10000x-faster-with-400-picosecond-speed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Develops Flash Memory 10,000x Faster With 400-Picosecond Speed](https://hardware.slashdot.org/story/25/04/18/2255249/china-develops-flash-memory-10000x-faster-with-400-picosecond-speed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-19, 06:11:37](https://news.ycombinator.com/item?id=43734583) - [Show HN: New world record – verified Goldbach Conjecture up to 4*10^18+7*10^13](https://medium.com/@jay_gridbach/grid-computing-shatters-world-record-for-goldbach-conjecture-verification-1ef3dc58a38d)
* [2025-04-19, 06:11:07](https://lobste.rs/s/2ydd6d/deus_lex_machina_releasing_new) - [Deus Lex Machina: releasing a new compacting Zig tokenizer](https://validark.dev/posts/deus-lex-machina/)
* [2025-04-19, 05:45:22](https://lobste.rs/s/xsojm5/efficient_e_matching_for_super) - [Efficient E-Matching for Super Optimizers](https://blog.vortan.dev/ematching/)
* [2025-04-19, 04:53:00](https://soylentnews.org/article.pl?sid=25/04/18/0255244&amp;from=rss) - [UK Founders Grow Frustrated Over Dearth of Funding: &apos;the Problem is Getting Worse&apos;](https://soylentnews.org/article.pl?sid=25/04/18/0255244&amp;from=rss)
* [2025-04-19, 04:32:09](https://lobste.rs/s/dzpaij/buried_toggles_begging_be_brought_light) - [Buried Toggles Begging to be Brought to Light](https://venam.net/blog/unix/2025/04/18/mechanism_policy.html)
* [2025-04-19, 03:38:18](https://lobste.rs/s/2yj0un/open_core_net_foundation_time_for_some) - [Open Core and .NET Foundation: Time for Some Introspection?](https://lobste.rs/s/2yj0un/open_core_net_foundation_time_for_some)
* [2025-04-19, 03:30:00](https://entertainment.slashdot.org/story/25/04/18/2128209/a-musicians-brain-matter-is-still-making-music-three-years-after-his-death?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Musician&apos;s Brain Matter Is Still Making Music Three Years After His Death](https://entertainment.slashdot.org/story/25/04/18/2128209/a-musicians-brain-matter-is-still-making-music-three-years-after-his-death?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-19, 02:10:52](https://news.ycombinator.com/item?id=43733636) - [JavaScript Views, the Hard Way – A Pattern for Writing UI](https://github.com/matthewp/views-the-hard-way)
* [2025-04-19, 01:52:55](https://news.ycombinator.com/item?id=43733553) - [Hands-On Large Language Models](https://github.com/HandsOnLLM/Hands-On-Large-Language-Models)
* [2025-04-19, 01:40:00](https://slashdot.org/story/25/04/18/2323216/openai-puzzled-as-new-models-show-rising-hallucination-rates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Puzzled as New Models Show Rising Hallucination Rates](https://slashdot.org/story/25/04/18/2323216/openai-puzzled-as-new-models-show-rising-hallucination-rates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-19, 01:33:05](https://lobste.rs/s/clfomn/system_design_cellular_apl_computer) - [System Design of a Cellular APL Computer](https://ieeexplore.ieee.org/document/1671509)
* [2025-04-19, 01:02:03](https://lobste.rs/s/cdxosy/pahole_analysing_memory_layout_complex) - [pahole: Analysing Memory Layout of Complex Data Structures With Ease](https://pramodkumbhar.com/2023/11/pahole-to-analyz-data-structure-memory-layouts-with-ease/)
* [2025-04-19, 00:45:00](https://apple.slashdot.org/story/25/04/18/2248231/fresh-tools-that-keep-vintage-macs-online-and-weirdly-alive?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fresh Tools That Keep Vintage Macs Online and Weirdly Alive](https://apple.slashdot.org/story/25/04/18/2248231/fresh-tools-that-keep-vintage-macs-online-and-weirdly-alive?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-19, 00:21:13](https://news.ycombinator.com/item?id=43733097) - [Cozy video games can quell stress and anxiety](https://www.reuters.com/business/retail-consumer/cozy-video-games-can-quell-stress-anxiety-2025-01-27/)
* [2025-04-19, 00:14:53](https://lobste.rs/s/kfgduz/are_your_channels_visible_enough) - [Are your channels visible enough?](https://libera.chat/news/visibility)
* [2025-04-19, 00:05:00](https://soylentnews.org/article.pl?sid=25/04/17/1356201&amp;from=rss) - [Dirty Tricks 6502 Programmers Use](https://soylentnews.org/article.pl?sid=25/04/17/1356201&amp;from=rss)
* [2025-04-19, 00:02:00](https://tech.slashdot.org/story/25/04/18/2231252/users-react-to-blueskys-upcoming-blue-check-mark-verification-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Users React To Bluesky&apos;s Upcoming Blue Check Mark Verification System](https://tech.slashdot.org/story/25/04/18/2231252/users-react-to-blueskys-upcoming-blue-check-mark-verification-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-18, 23:29:04](https://news.ycombinator.com/item?id=43732805) - [Hypertext TV](https://hypertext.tv/)
* [2025-04-18, 23:20:00](https://entertainment.slashdot.org/story/25/04/18/2118236/netflix-revenue-rises-to-105-billion-following-price-hike?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Netflix Revenue Rises To $10.5 Billion Following Price Hike](https://entertainment.slashdot.org/story/25/04/18/2118236/netflix-revenue-rises-to-105-billion-following-price-hike?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-18, 22:40:00](https://it.slashdot.org/story/25/04/18/209230/study-finds-50-of-workers-use-unapproved-ai-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Study Finds 50% of Workers Use Unapproved AI Tools](https://it.slashdot.org/story/25/04/18/209230/study-finds-50-of-workers-use-unapproved-ai-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-18, 22:00:00](https://slashdot.org/story/25/04/18/202223/actors-who-sold-ai-avatars-stuck-in-black-mirror-esque-dystopia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Actors Who Sold AI Avatars Stuck In Black Mirror-Esque Dystopia](https://slashdot.org/story/25/04/18/202223/actors-who-sold-ai-avatars-stuck-in-black-mirror-esque-dystopia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-18, 21:20:00](https://it.slashdot.org/story/25/04/18/1949253/ibm-orders-us-sales-to-locate-near-customers-or-offices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [IBM Orders US Sales To Locate Near Customers or Offices](https://it.slashdot.org/story/25/04/18/1949253/ibm-orders-us-sales-to-locate-near-customers-or-offices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-18, 20:40:00](https://yro.slashdot.org/story/25/04/18/1941239/judge-rules-blanket-search-of-cell-tower-data-unconstitutional?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Judge Rules Blanket Search of Cell Tower Data Unconstitutional](https://yro.slashdot.org/story/25/04/18/1941239/judge-rules-blanket-search-of-cell-tower-data-unconstitutional?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-18, 20:24:09](https://news.ycombinator.com/item?id=43731552) - [Full Text Search of US Court records](https://www.judyrecords.com/)
* [2025-04-18, 20:00:00](https://slashdot.org/story/25/04/18/1212204/netflix-ceo-counters-camerons-ai-cost-cutting-vision-make-movies-10-better?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Netflix CEO Counters Cameron&apos;s AI Cost-Cutting Vision: &apos;Make Movies 10% Better&apos;](https://slashdot.org/story/25/04/18/1212204/netflix-ceo-counters-camerons-ai-cost-cutting-vision-make-movies-10-better?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-18, 19:28:44](https://news.ycombinator.com/item?id=43731165) - [15,000 lines of verified cryptography now in Python](https://jonathan.protzenko.fr/2025/04/18/python.html)
* [2025-04-18, 19:27:18](https://lobste.rs/s/8an4my/15_000_lines_verified_cryptography_now) - [15,000 lines of verified cryptography now in Python](http://jonathan.protzenko.fr/2025/04/18/python.html)
* [2025-04-18, 19:20:00](https://hardware.slashdot.org/story/25/04/18/127212/hard-drives-have-less-environmental-impact-than-ssds-seagate-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hard Drives Have Less Environmental Impact Than SSDs, Seagate Says](https://hardware.slashdot.org/story/25/04/18/127212/hard-drives-have-less-environmental-impact-than-ssds-seagate-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-18, 19:20:00](https://soylentnews.org/article.pl?sid=25/04/17/1348247&amp;from=rss) - [States are Banning Forever Chemicals. Industry is Fighting Back](https://soylentnews.org/article.pl?sid=25/04/17/1348247&amp;from=rss)
* [2025-04-18, 17:57:27](https://lobste.rs/s/ltwmnw/revisiting_early_critique_formal) - [Revisiting an early critique of formal verification](https://lawrencecpaulson.github.io/2025/03/14/revisiting_demillo.html)
* [2025-04-18, 16:46:29](https://lobste.rs/s/bcbcpw/marching_events_what_does_icalendar_have) - [Marching Events: What does iCalendar have to do with ray marching?](https://pwy.io/posts/marching-events/)
* [2025-04-18, 16:40:25](https://news.ycombinator.com/item?id=43729683) - [Show HN: I made a Doom-like game fit inside a QR code](https://github.com/Kuberwastaken/backdooms)
* [2025-04-18, 16:18:45](https://lobste.rs/s/6san1l/neovim_users_what_ai_tools_are_you_using) - [Neovim users: what AI tools are you using?](https://lobste.rs/s/6san1l/neovim_users_what_ai_tools_are_you_using)
* [2025-04-18, 15:39:38](https://lobste.rs/s/qof7at/antithesis_driven_testing) - [Antithesis driven testing](https://sqlsync.dev/posts/antithesis-driven-testing/)
* [2025-04-18, 14:34:00](https://soylentnews.org/article.pl?sid=25/04/17/1336207&amp;from=rss) - [The Friendship Recession: The Lost Art of Connecting](https://soylentnews.org/article.pl?sid=25/04/17/1336207&amp;from=rss)
* [2025-04-18, 13:59:06](https://lobste.rs/s/20nle9/common_shell_script_mistakes) - [Common shell script mistakes](https://www.pixelbeat.org/programming/shell_script_mistakes.html)
* [2025-04-18, 13:55:45](https://lobste.rs/s/s4nfxt/easter_hack_terraform_provider_openwrt) - [Easter hack: terraform-provider-openwrt](https://linderud.dev/blog/easter-hack-terraform-provider-openwrt/)
* [2025-04-18, 13:49:55](https://lobste.rs/s/kigaip/image_segmentation_using_gemini_2_5) - [Image segmentation using Gemini 2.5](https://simonwillison.net/2025/Apr/18/gemini-image-segmentation/)
* [2025-04-18, 12:06:38](https://lobste.rs/s/ipvyhu/four_years_jai) - [Four Years of Jai](https://smarimccarthy.is/posts/2024-12-02-four-years-of-jai/)
* [2025-04-18, 10:30:01](https://lobste.rs/s/zsadu0/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/zsadu0/what_are_you_doing_this_weekend)
* [2025-04-18, 09:52:00](https://soylentnews.org/article.pl?sid=25/04/16/1857229&amp;from=rss) - [‘End of an Era’: The Last RadioShack in Maryland is Closing its Doors](https://soylentnews.org/article.pl?sid=25/04/16/1857229&amp;from=rss)
* [2025-04-18, 08:49:23](https://lobste.rs/s/lwkzan/ratatui_are_we_embedded_yet) - [Ratatui - Are We Embedded Yet?](https://jslazak.com/are-we-embedded-yet-0/)
* [2025-04-18, 06:03:34](https://lobste.rs/s/1f1xfj/why_i_cannot_be_technical) - [Why I Cannot Be Technical](https://www.fightforthehuman.com/why-i-cannot-be-technical/)
* [2025-04-18, 05:07:00](https://soylentnews.org/article.pl?sid=25/04/16/1849251&amp;from=rss) - [Oxygen Discovered in Most Distant Known Galaxy](https://soylentnews.org/article.pl?sid=25/04/16/1849251&amp;from=rss)
* [2025-04-18, 04:17:21](https://lobste.rs/s/jua1yc/using_ssh_authorized_keys_decide_what) - [Using ~/.ssh/authorized keys to decide what the incoming connection can do](https://dan.langille.org/2025/04/17/using-ssh-authorized-keys-to-decide-what-the-incoming-connection-can-do/)
* [2025-04-18, 00:21:00](https://soylentnews.org/article.pl?sid=25/04/16/1843228&amp;from=rss) - [Phase Two of Military AI Has Arrived](https://soylentnews.org/article.pl?sid=25/04/16/1843228&amp;from=rss)
* [2025-04-18, 00:17:30](https://lobste.rs/s/lfdslx/stop_writing_init_methods) - [Stop Writing `__init__` Methods](https://blog.glyph.im/2025/04/stop-writing-init-methods.html)
* [2025-04-17, 23:17:25](https://lobste.rs/s/1ykhfa/reflections_on_unikernels) - [Reflections on Unikernels](https://dave.recoil.org/unikernels/)
* [2025-04-17, 19:42:00](https://soylentnews.org/article.pl?sid=25/04/16/1838216&amp;from=rss) - [Disasters Spur Investment in Flood and Fire Risk Technology](https://soylentnews.org/article.pl?sid=25/04/16/1838216&amp;from=rss)
* [2025-04-17, 17:31:37](https://news.ycombinator.com/item?id=43719872) - [Micro Wheeled legged Robot](https://github.com/MuShibo/Micro-Wheeled_leg-Robot)
* [2025-04-17, 14:54:00](https://soylentnews.org/article.pl?sid=25/04/16/1816228&amp;from=rss) - [AMD Set to Produce its CPU Chip at TSMC Plant in Arizona](https://soylentnews.org/article.pl?sid=25/04/16/1816228&amp;from=rss)
* [2025-04-17, 10:08:00](https://soylentnews.org/article.pl?sid=25/04/16/1155209&amp;from=rss) - [OpenWrt 24.10.1 is Now Available](https://soylentnews.org/article.pl?sid=25/04/16/1155209&amp;from=rss)
* [2025-04-17, 09:23:08](https://lobste.rs/s/mwvwsp/bring_back_rss_feeds_browsers) - [Bring Back RSS Feeds to Browsers](https://jetgirl.art/bring-back-rss-feeds-to-browsers/)
* [2025-04-17, 05:23:00](https://soylentnews.org/article.pl?sid=25/04/16/1153241&amp;from=rss) - [An Ars Technica History of the Internet, Part 1](https://soylentnews.org/article.pl?sid=25/04/16/1153241&amp;from=rss)
* [2025-04-17, 04:36:34](https://news.ycombinator.com/item?id=43713159) - [Center Pieces and Lunch Sets in Crochet Work (1915)](https://www.gutenberg.org/cache/epub/75880/pg75880-images.html)
* [2025-04-17, 02:31:34](https://news.ycombinator.com/item?id=43712536) - [Peru&apos;s ancient irrigation systems turned deserts into farms because of culture](https://theconversation.com/perus-ancient-irrigation-systems-succeeded-in-turning-deserts-into-farms-because-of-the-culture-without-it-the-systems-failed-251199)
* [2025-04-17, 00:39:00](https://soylentnews.org/article.pl?sid=25/04/16/1151239&amp;from=rss) - [Dolphins Are Dying From Toxic Chemicals Banned Since the 1980s](https://soylentnews.org/article.pl?sid=25/04/16/1151239&amp;from=rss)
* [2025-04-16, 19:56:00](https://soylentnews.org/article.pl?sid=25/04/16/1146247&amp;from=rss) - [MITRE Announced Funding for Common Vulnerabilities and Exposures (CVE) Program Ends 16-April-2025](https://soylentnews.org/article.pl?sid=25/04/16/1146247&amp;from=rss)
* [2025-04-16, 18:36:29](https://news.ycombinator.com/item?id=43708841) - [AI-Designed Antivenoms: New Proteins to Block Deadly Snake Toxins](https://plentyofroom.beehiiv.com/p/antivenoms-with-ai-designed-proteins)
* [2025-04-16, 15:13:00](https://soylentnews.org/article.pl?sid=25/04/16/1143246&amp;from=rss) - [Rooftop Solar PV Could Supply Two-Thirds of World&apos;s Energy Needs, and Lower Global Temperatures](https://soylentnews.org/article.pl?sid=25/04/16/1143246&amp;from=rss)
* [2025-04-16, 13:22:14](https://news.ycombinator.com/item?id=43705190) - [High time to tackle drug-resistant fungal infections](https://www.nature.com/articles/d41586-025-01177-x)
* [2025-04-16, 11:26:27](https://news.ycombinator.com/item?id=43703998) - [Hydrogen vs. Battery Buses: A European Transit Reality Check](https://cleantechnica.com/2025/04/14/hydrogen-vs-battery-buses-a-european-transit-reality-check/)
* [2025-04-16, 10:26:00](https://soylentnews.org/article.pl?sid=25/04/15/1018214&amp;from=rss) - [Meeting Apple on Apple&apos;s Terms](https://soylentnews.org/article.pl?sid=25/04/15/1018214&amp;from=rss)
* [2025-04-16, 05:38:00](https://soylentnews.org/article.pl?sid=25/04/15/0119244&amp;from=rss) - [Copilot Recall: Microsoft Rolls Out AI Screenshot Tool](https://soylentnews.org/article.pl?sid=25/04/15/0119244&amp;from=rss)
* [2025-04-16, 00:49:00](https://soylentnews.org/article.pl?sid=25/04/15/0115256&amp;from=rss) - [Cooling Chips With Lasers: Innovative Cooling Method Removes Heat Precisely From Hot Spots](https://soylentnews.org/article.pl?sid=25/04/15/0115256&amp;from=rss)
* [2025-04-15, 22:41:54](https://news.ycombinator.com/item?id=43699301) - [USB Floppy Disk Striped RAID Under OS X (2004)](http://web.archive.org/web/20040202110812/http://ohlssonvox.8k.com/fdd_raid.htm)
* [2025-04-15, 21:19:33](https://news.ycombinator.com/item?id=43698522) - [How a yacht works: sailboat physics and design](https://www.onemetre.net/Design/Design.htm)
* [2025-04-15, 21:01:02](https://news.ycombinator.com/item?id=43698327) - [Cyberpunk 1958: The Early Days of the Polish IT Industry](https://culture.pl/en/article/cyberpunk-1958-the-early-days-of-the-polish-it-industry)
* [2025-04-15, 20:04:00](https://soylentnews.org/article.pl?sid=25/04/14/0628227&amp;from=rss) - [Microsoft is Digging its Own Grave With Windows 11, and It Has to Stop](https://soylentnews.org/article.pl?sid=25/04/14/0628227&amp;from=rss)
* [2025-04-15, 15:18:00](https://soylentnews.org/article.pl?sid=25/04/14/0619222&amp;from=rss) - [NIST Finalizes Guidelines for Evaluating ‘Differential Privacy’ Guarantees to De-Identify Data](https://soylentnews.org/article.pl?sid=25/04/14/0619222&amp;from=rss)
* [2025-04-15, 14:05:42](https://news.ycombinator.com/item?id=43692878) - [Ocean Iron Fertilization](https://www.whoi.edu/know-your-ocean/ocean-topics/climate-weather/ocean-based-climate-solutions/iron-fertilization/)
* [2025-04-15, 10:33:02](https://news.ycombinator.com/item?id=43691020) - [Understanding the Origins and the Evolution of Vi and Vim](https://pikuma.com/blog/origins-of-vim-text-editor)
* [2025-04-15, 10:33:00](https://soylentnews.org/article.pl?sid=25/04/14/0616220&amp;from=rss) - [ChatGPT Now Lets Users Create Fake Images of Politicians--Tool Suggested Own Workarounds](https://soylentnews.org/article.pl?sid=25/04/14/0616220&amp;from=rss)
* [2025-04-15, 05:52:00](https://soylentnews.org/article.pl?sid=25/04/14/0612230&amp;from=rss) - [Ethically Sourced “Spare” Human Bodies Could Revolutionize Medicine](https://soylentnews.org/article.pl?sid=25/04/14/0612230&amp;from=rss)
* [2025-04-15, 01:12:00](https://soylentnews.org/article.pl?sid=25/04/14/067223&amp;from=rss) - [Google’s New Ironwood Chip is 24x More Powerful Than the World’s Fastest Supercomputer](https://soylentnews.org/article.pl?sid=25/04/14/067223&amp;from=rss)
