# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Programming Highlights

* [Building the SCION 25 Gbit/s Workstation](https://github.com/scionassociation/blog-25gbit-workstation) - A detailed look at constructing high-speed workstations for advanced networking applications.

* [TimeCapsuleLLM: LLM trained only on data from 1800-1875](https://github.com/haykgrigo3/TimeCapsuleLLM) - Explore a unique language model trained solely on historical data.

* [Lightpanda migrate DOM implementation to Zig](https://lightpanda.io/blog/posts/migrating-our-dom-to-zig) - A technical dive into migrating a DOM implementation to the Zig programming language.

* [Zen-C: Write like a high-level language, run like C](https://github.com/z-libs/Zen-C) - Introduction to a new language that combines high-level syntax with low-level performance.

* [The coolest feature in Python 3.14](https://savannah.dev/posts/the-coolest-feature-in-314/) - Discover an exciting, cutting-edge feature in the latest Python release.

## Cultural and Entertainment Insights

* [Batman TV Series Premiered 60 Years Ago Today](https://entertainment.slashdot.org/story/26/01/12/1819211/batman-tv-series-premiered-60-years-ago-today?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Celebrating the 60th anniversary of the iconic Batman television series.

* [Floppy disks turn out to be the greatest TV remote for kids](https://blog.smartere.dk/2026/01/floppy-disks-the-best-tv-remote-for-kids/) - An unconventional tech solution brings nostalgia and practicality to TV controls.

* [Streamer Spend To Top $100B For First Time In 2026](https://entertainment.slashdot.org/story/26/01/12/143244/streamer-spend-to-top-100b-for-first-time-in-2026?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A look into the exponential growth of streaming services spending.

## Healthcare and Science Innovations

* [Revolutionary Eye Injection Saved My Sight, Says First-Ever Patient](https://science.slashdot.org/story/26/01/12/185236/revolutionary-eye-injection-saved-my-sight-says-first-ever-patient?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A groundbreaking medical procedure offers hope for vision loss patients.

* [Exercise is as Effective as Medication in Treating Depression, Study Finds](https://science.slashdot.org/story/26/01/12/1635241/exercise-is-as-effective-as-medication-in-treating-depression-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - New research highlights the benefits of exercise in combating depression.

* [Very Tough Microbes May Help Us Cement Our Future on Mars](https://soylentnews.org/article.pl?sid=26/01/10/2218252&from=rss) - Scientists explore how resilient microbes could aid in space exploration and colonization.

* [Scientists Discover Ancient Bees Built Nests Inside Animal Bones](https://soylentnews.org/article.pl?sid=26/01/10/227243&from=rss) - A fascinating discovery about ancient bees' unique nesting habits.

* [How Many Years Left Until the Hubble Space Telescope Reenters Earth's Atmosphere?](https://science.slashdot.org/story/26/01/11/2023211/how-many-years-left-until-the-hubble-space-telescope-reenters-earths-atmosphere?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Insights into the future of one of NASA's most iconic telescopes.

## Global Events and Society

* [Iran has now been offline for 96 hours](https://twitter.com/netblocks/status/2010750871274160361) - A prolonged internet shutdown in Iran persists amidst unrest.

* [US President Calls for 10% Credit Card Interest Cap, Banks Push Back](https://news.slashdot.org/story/26/01/12/152240/us-president-calls-for-10-credit-card-interest-cap-banks-push-back?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Political discourse intensifies over proposed limits on credit card interest rates.

* [Ubisoft Closes Game Studio Where Workers Voted to Unionize Two Weeks Ago](https://it.slashdot.org/story/26/01/12/0542237/ubisoft-closes-game-studio-where-workers-voted-to-unionize-two-weeks-ago?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Controversy surrounds the closure of a unionized game development studio.

* [Scientists Found a Way to Help the Brain Bounce Back From Alzheimer's](https://soylentnews.org/article.pl?sid=26/01/08/0325201&from=rss) - A significant breakthrough in Alzheimer's disease treatment.

* [While the World Cools on EVs, Norway Pushes to 96% Electric Sales](https://soylentnews.org/article.pl?sid=26/01/07/1228222&from=rss) - Norway leads the world in adopting electric vehicles with record sales.

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

* [2026-01-12, 18:57:41](https://lobste.rs/s/8qcrxm/building_scion_25_gbit_s_workstation) - [Building the SCION 25 Gbit/s Workstation](https://github.com/scionassociation/blog-25gbit-workstation)
* [2026-01-12, 18:45:00](https://entertainment.slashdot.org/story/26/01/12/1819211/batman-tv-series-premiered-60-years-ago-today?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Batman TV Series Premiered 60 Years Ago Today](https://entertainment.slashdot.org/story/26/01/12/1819211/batman-tv-series-premiered-60-years-ago-today?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-12, 18:41:47](https://news.ycombinator.com/item?id=46592461) - [Clearspace (YC W23) Is Hiring an Applied Researcher (ML)](https://www.ycombinator.com/companies/clearspace/jobs/GOWiDwp-research-engineer-at-clearspace)
* [2026-01-12, 18:06:00](https://science.slashdot.org/story/26/01/12/185236/revolutionary-eye-injection-saved-my-sight-says-first-ever-patient?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Revolutionary Eye Injection Saved My Sight, Says First-Ever Patient](https://science.slashdot.org/story/26/01/12/185236/revolutionary-eye-injection-saved-my-sight-says-first-ever-patient?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-12, 18:03:12](https://news.ycombinator.com/item?id=46591974) - [Iran has now been offline for 96 hours](https://twitter.com/netblocks/status/2010750871274160361)
* [2026-01-12, 17:41:52](https://lobste.rs/s/atz78i/text_based_web_browsers) - [Text-based web browsers](https://cssence.com/2026/text-based-web-browsers/)
* [2026-01-12, 17:41:50](https://news.ycombinator.com/item?id=46591708) - [Postal Arbitrage](https://walzr.com/postal-arbitrage)
* [2026-01-12, 17:22:00](https://apple.slashdot.org/story/26/01/12/176259/why-it-is-difficult-to-resize-windows-on-macos-26?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why It Is Difficult To Resize Windows on MacOS 26](https://apple.slashdot.org/story/26/01/12/176259/why-it-is-difficult-to-resize-windows-on-macos-26?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-12, 17:17:35](https://lobste.rs/s/ygqmfr/bad_dye_job) - [Bad Dye Job](https://daringfireball.net/2025/12/bad_dye_job)
* [2026-01-12, 17:17:09](https://news.ycombinator.com/item?id=46591402) - [Message Queues: A Simple Guide with Analogies](https://www.cloudamqp.com/blog/message-queues-exaplined-with-analogies.html)
* [2026-01-12, 16:56:17](https://news.ycombinator.com/item?id=46591100) - [Show HN: AI in SolidWorks](https://www.trylad.com)
* [2026-01-12, 16:41:00](https://science.slashdot.org/story/26/01/12/1635241/exercise-is-as-effective-as-medication-in-treating-depression-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Exercise is as Effective as Medication in Treating Depression, Study Finds](https://science.slashdot.org/story/26/01/12/1635241/exercise-is-as-effective-as-medication-in-treating-depression-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-12, 16:38:00](https://soylentnews.org/article.pl?sid=26/01/10/2218252&amp;from=rss) - [Very Tough Microbes May Help Us Cement Our Future on Mars](https://soylentnews.org/article.pl?sid=26/01/10/2218252&amp;from=rss)
* [2026-01-12, 16:20:16](https://news.ycombinator.com/item?id=46590541) - [Building a 25 Gbit/s workstation for the SCION Association](https://github.com/scionassociation/blog-25gbit-workstation)
* [2026-01-12, 16:05:00](https://apple.slashdot.org/story/26/01/12/166200/apple-partners-with-google-on-siri-upgrade-declares-gemini-most-capable-foundation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Partners With Google on Siri Upgrade, Declares Gemini &apos;Most Capable Foundation&apos;](https://apple.slashdot.org/story/26/01/12/166200/apple-partners-with-google-on-siri-upgrade-declares-gemini-most-capable-foundation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-12, 16:04:27](https://news.ycombinator.com/item?id=46590280) - [TimeCapsuleLLM: LLM trained only on data from 1800-1875](https://github.com/haykgrigo3/TimeCapsuleLLM)
* [2026-01-12, 15:22:21](https://news.ycombinator.com/item?id=46589675) - [Apple picks Google&apos;s Gemini to power Siri](https://www.cnbc.com/2026/01/12/apple-google-ai-siri-gemini.html)
* [2026-01-12, 15:22:00](https://news.slashdot.org/story/26/01/12/152240/us-president-calls-for-10-credit-card-interest-cap-banks-push-back?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US President Calls for 10% Credit Card Interest Cap, Banks Push Back](https://news.slashdot.org/story/26/01/12/152240/us-president-calls-for-10-credit-card-interest-cap-banks-push-back?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-12, 15:20:36](https://news.ycombinator.com/item?id=46589658) - [Date is out, Temporal is in](https://piccalil.li/blog/date-is-out-and-temporal-is-in/)
* [2026-01-12, 15:13:31](https://news.ycombinator.com/item?id=46589576) - [Computational complexity of schema-guided document extraction](https://www.runpulse.com/blog/computational-complexity-of-schema)
* [2026-01-12, 15:09:32](https://news.ycombinator.com/item?id=46589543) - [Computers that used to be human](https://digitalseams.com/blog/computers-that-used-to-be-human)
* [2026-01-12, 15:05:51](https://news.ycombinator.com/item?id=46589489) - [Statement from Federal Reserve Chair](https://www.federalreserve.gov/newsevents/speech/powell20260111a.htm?mod=ANLink)
* [2026-01-12, 14:42:00](https://tech.slashdot.org/story/26/01/12/1423251/cloudflare-threatens-italy-exit-after-163m-fine-for-refusing-piracy-blocks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cloudflare Threatens Italy Exit After $16.3M Fine For Refusing Piracy Blocks](https://tech.slashdot.org/story/26/01/12/1423251/cloudflare-threatens-italy-exit-after-163m-fine-for-refusing-piracy-blocks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-12, 14:19:22](https://lobste.rs/s/tyyi9z/j_incunabulum) - [The J Incunabulum](https://tony-zorman.com/posts/j-incunabulum.html)
* [2026-01-12, 14:18:13](https://news.ycombinator.com/item?id=46588837) - [LLVM: The bad parts](https://www.npopov.com/2026/01/11/LLVM-The-bad-parts.html)
* [2026-01-12, 14:04:57](https://lobste.rs/s/70isfv/how_make_damn_website) - [How to Make a Damn Website](https://lmnt.me/blog/how-to-make-a-damn-website.html)
* [2026-01-12, 14:03:00](https://entertainment.slashdot.org/story/26/01/12/143244/streamer-spend-to-top-100b-for-first-time-in-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Streamer Spend To Top $100B For First Time In 2026](https://entertainment.slashdot.org/story/26/01/12/143244/streamer-spend-to-top-100b-for-first-time-in-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-12, 13:57:32](https://news.ycombinator.com/item?id=46588572) - [Reproducing DeepSeek&apos;s MHC: When Residual Connections Explode](https://taylorkolasinski.com/notes/mhc-reproduction/)
* [2026-01-12, 13:19:17](https://lobste.rs/s/j9xv8v/we_rolled_our_own_documentation_site) - [we rolled our own documentation site](https://blog.tangled.org/docs)
* [2026-01-12, 13:07:49](https://news.ycombinator.com/item?id=46587934) - [Floppy disks turn out to be the greatest TV remote for kids](https://blog.smartere.dk/2026/01/floppy-disks-the-best-tv-remote-for-kids/)
* [2026-01-12, 12:57:44](https://news.ycombinator.com/item?id=46587804) - [Zen-C: Write like a high-level language, run like C](https://github.com/z-libs/Zen-C)
* [2026-01-12, 12:41:07](https://lobste.rs/s/r4wccr/rise_future_fall_discord_2024) - [The rise (and future fall) of Discord (2024)](https://slugcat.systems/post/24-12-12-the-rise-and-future-fall-of-discord/)
* [2026-01-12, 12:34:00](https://linux.slashdot.org/story/26/01/12/0411249/linux-hit-a-new-all-time-high-for-steam-market-share-in-december?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux Hit a New All-Time High for Steam Market Share in December](https://linux.slashdot.org/story/26/01/12/0411249/linux-hit-a-new-all-time-high-for-steam-market-share-in-december?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-12, 12:31:35](https://lobste.rs/s/hxzs2d/examining_iran_s_internet_status_amid) - [Examining Iran’s Internet Status Amid Escalating Protests](https://filter.watch/english/2026/01/09/network-monitoring-january-2026-internet-repression-in-times-of-protest/)
* [2026-01-12, 12:25:27](https://news.ycombinator.com/item?id=46587498) - [Launch a Debugging Terminal into GitHub Actions](https://blog.gripdev.xyz/2026/01/10/actions-terminal-on-failure-for-debugging/)
* [2026-01-12, 12:00:00](https://soylentnews.org/article.pl?sid=26/01/10/2213252&amp;from=rss) - [Oceans Are Struggling To Absorb Carbon As Microplastics Flood Their Waters](https://soylentnews.org/article.pl?sid=26/01/10/2213252&amp;from=rss)
* [2026-01-12, 11:04:44](https://lobste.rs/s/mhgog9/anthropic_blocks_third_party_tools_using) - [Anthropic blocks third-party tools using Claude Code OAuth tokens](https://archaeologist.dev/artifacts/anthropic)
* [2026-01-12, 10:57:29](https://news.ycombinator.com/item?id=46586766) - [Anthropic made a mistake in cutting off third-party clients](https://archaeologist.dev/artifacts/anthropic)
* [2026-01-12, 10:17:39](https://lobste.rs/s/b5dqak/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/b5dqak/what_are_you_doing_this_week)
* [2026-01-12, 09:42:49](https://news.ycombinator.com/item?id=46586179) - [Lightpanda migrate DOM implementation to Zig](https://lightpanda.io/blog/posts/migrating-our-dom-to-zig)
* [2026-01-12, 09:10:45](https://news.ycombinator.com/item?id=46585947) - [Ai, Japanese chimpanzee who counted and painted dies at 49](https://www.bbc.com/news/articles/cj9r3zl2ywyo)
* [2026-01-12, 08:44:00](https://it.slashdot.org/story/26/01/12/0542237/ubisoft-closes-game-studio-where-workers-voted-to-unionize-two-weeks-ago?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ubisoft Closes Game Studio Where Workers Voted to Unionize Two Weeks Ago](https://it.slashdot.org/story/26/01/12/0542237/ubisoft-closes-game-studio-where-workers-voted-to-unionize-two-weeks-ago?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-12, 07:19:33](https://lobste.rs/s/hhtuqh/three_inverse_laws_robotics) - [Three Inverse Laws of Robotics](https://susam.net/inverse-laws-of-robotics.html)
* [2026-01-12, 07:11:00](https://soylentnews.org/article.pl?sid=26/01/10/227243&amp;from=rss) - [Scientists Discover Ancient Bees Built Nests Inside Animal Bones](https://soylentnews.org/article.pl?sid=26/01/10/227243&amp;from=rss)
* [2026-01-12, 05:44:00](https://it.slashdot.org/story/26/01/12/0443201/how-long-does-it-take-to-fix-linux-kernel-bugs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Long Does It Take to Fix Linux Kernel Bugs?](https://it.slashdot.org/story/26/01/12/0443201/how-long-does-it-take-to-fix-linux-kernel-bugs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-12, 04:18:46](https://lobste.rs/s/jmbwp2/coolest_feature_python_3_14) - [The coolest feature in Python 3.14](https://savannah.dev/posts/the-coolest-feature-in-314/)
* [2026-01-12, 04:06:23](https://lobste.rs/s/ypq8u0/typical_pdf) - [A Typical PDF](https://hackerfactor.com/blog/index.php?/archives/1085-A-Typical-PDF.html)
* [2026-01-12, 03:09:00](https://slashdot.org/story/26/01/12/036215/amazons-ai-tool-listed-products-from-small-businesses-without-their-knowledge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon&apos;s AI Tool Listed Products from Small Businesses Without Their Knowledge](https://slashdot.org/story/26/01/12/036215/amazons-ai-tool-listed-products-from-small-businesses-without-their-knowledge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-12, 02:33:00](https://soylentnews.org/article.pl?sid=26/01/10/2158258&amp;from=rss) - [Bose Open-Sources its SoundTouch Home Theater Smart Speakers Ahead of End-of-Life](https://soylentnews.org/article.pl?sid=26/01/10/2158258&amp;from=rss)
* [2026-01-12, 01:56:34](https://lobste.rs/s/prsi0f/rethinking_helix) - [Rethinking Helix](https://asta.boserup.eu/forest/rethinking-helix/)
* [2026-01-11, 23:47:34](https://lobste.rs/s/yvgfh8/struggle_resizing_windows_on_macos_tahoe) - [The struggle of resizing windows on macOS Tahoe](https://noheger.at/blog/2026/01/11/the-struggle-of-resizing-windows-on-macos-tahoe/)
* [2026-01-11, 23:29:00](https://tech.slashdot.org/story/26/01/11/214203/finnish-startup-ixi-plans-new-autofocusing-eyeglasses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Finnish Startup IXI Plans New Autofocusing Eyeglasses](https://tech.slashdot.org/story/26/01/11/214203/finnish-startup-ixi-plans-new-autofocusing-eyeglasses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-11, 23:13:30](https://lobste.rs/s/ehtrmf/turntiles_nyt_style_word_game_i_made_for_my) - [Turntiles, an NYT style word game I made for my parents](https://github.com/wheybags/turntiles)
* [2026-01-11, 22:33:32](https://news.ycombinator.com/item?id=46581095) - [Unauthenticated remote code execution in OpenCode](https://cy.md/opencode-rce/)
* [2026-01-11, 22:29:00](https://slashdot.org/story/26/01/11/2041249/nvidia-ceo-jensen-huang-says-ai-doomerism-has-done-a-lot-of-damage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ Nvidia CEO Jensen Huang Says AI Doomerism Has &apos;Done a Lot of Damage&apos;](https://slashdot.org/story/26/01/11/2041249/nvidia-ceo-jensen-huang-says-ai-doomerism-has-done-a-lot-of-damage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-11, 22:14:35](https://news.ycombinator.com/item?id=46580864) - [This game is a single 13 KiB file that runs on Windows, Linux and in the Browser](https://iczelia.net/posts/snake-polyglot/)
* [2026-01-11, 21:52:00](https://soylentnews.org/article.pl?sid=26/01/10/0115240&amp;from=rss) - [Dell Reveals People Don&apos;t Care About AI in PCs – and a New Truly Embarrassing Windows 11 Fail ](https://soylentnews.org/article.pl?sid=26/01/10/0115240&amp;from=rss)
* [2026-01-11, 21:29:57](https://news.ycombinator.com/item?id=46580326) - [CLI agents make self-hosting on a home server easier and fun](https://fulghum.io/self-hosting)
* [2026-01-11, 21:29:18](https://lobste.rs/s/wcsrvd/mitigating_billion_dollar_mistake) - [Mitigating the Billion Dollar Mistake](https://www.gingerbill.org/article/2026/01/11/mitigating-the-billion-dollar-mistake/)
* [2026-01-11, 21:29:00](https://science.slashdot.org/story/26/01/11/2023211/how-many-years-left-until-the-hubble-space-telescope-reenters-earths-atmosphere?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Many Years Left Until the Hubble Space Telescope Reenters Earth&apos;s Atmosphere?](https://science.slashdot.org/story/26/01/11/2023211/how-many-years-left-until-the-hubble-space-telescope-reenters-earths-atmosphere?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-11, 20:47:55](https://news.ycombinator.com/item?id=46579864) - [The struggle of resizing windows on macOS Tahoe](https://noheger.at/blog/2026/01/11/the-struggle-of-resizing-windows-on-macos-tahoe/)
* [2026-01-11, 20:38:37](https://lobste.rs/s/hcpnrj/who_are_people_currently_using_as_hosting) - [Who are people currently using as hosting providers?](https://lobste.rs/s/hcpnrj/who_are_people_currently_using_as_hosting)
* [2026-01-11, 20:17:08](https://lobste.rs/s/kiryys/whatsapp_is_untrustable) - [WhatsApp is untrustable](https://toki.la/posts/whatsapp)
* [2026-01-11, 19:33:42](https://lobste.rs/s/aevhq8/keeping_20_000_gpus_healthy) - [Keeping 20,000 GPUs healthy](https://modal.com/blog/gpu-health)
* [2026-01-11, 19:23:58](https://news.ycombinator.com/item?id=46578921) - [iCloud Photos Downloader](https://github.com/icloud-photos-downloader/icloud_photos_downloader)
* [2026-01-11, 19:23:35](https://lobste.rs/s/8nwjov/llvm_bad_parts) - [LLVM: The bad parts](https://www.npopov.com/2026/01/11/LLVM-The-bad-parts.html)
* [2026-01-11, 17:13:00](https://soylentnews.org/article.pl?sid=26/01/10/0111244&amp;from=rss) - [Your Daily Cup of Tea Could Help Fight Heart Disease, Cancer, Aging, and More](https://soylentnews.org/article.pl?sid=26/01/10/0111244&amp;from=rss)
* [2026-01-11, 15:05:25](https://lobste.rs/s/jbrnz8/asahi_linux_porting_linux_apple_silicon) - [Asahi Linux - Porting Linux to Apple Silicon](https://media.ccc.de/v/39c3-asahi-linux-porting-linux-to-apple-silicon)
* [2026-01-11, 12:26:00](https://soylentnews.org/article.pl?sid=26/01/10/019216&amp;from=rss) - [Finding Runaway Stars to Help Map Dark Matter in the Milky Way](https://soylentnews.org/article.pl?sid=26/01/10/019216&amp;from=rss)
* [2026-01-11, 10:23:20](https://lobste.rs/s/cmsfbu/don_t_fall_into_anti_ai_hype) - [Don&apos;t fall into the anti-AI hype](https://antirez.com/news/158)
* [2026-01-11, 10:03:30](https://lobste.rs/s/weiyij/i_replaced_redis_with_postgresql_it_s) - [I Replaced Redis with PostgreSQL (And It&apos;s Faster)](https://dev.to/polliog/i-replaced-redis-with-postgresql-and-its-faster-4942)
* [2026-01-11, 07:59:28](https://lobste.rs/s/kc88fv/unique_performance_optimization_for_3d) - [A Unique Performance Optimization for a 3D Geometry Language](https://cprimozic.net/notes/posts/persistent-expr-memo-optimization-for-geoscript/)
* [2026-01-11, 07:24:00](https://soylentnews.org/article.pl?sid=26/01/10/015202&amp;from=rss) - [Virginia&apos;s Datacenter Tax Breaks Cost State $1.6B in 2025](https://soylentnews.org/article.pl?sid=26/01/10/015202&amp;from=rss)
* [2026-01-11, 02:54:00](https://soylentnews.org/article.pl?sid=26/01/09/1830221&amp;from=rss) - [Some People Get Drunk Without Drinking and Scientists Finally Know Why](https://soylentnews.org/article.pl?sid=26/01/09/1830221&amp;from=rss)
* [2026-01-10, 22:10:00](https://soylentnews.org/article.pl?sid=26/01/09/1828213&amp;from=rss) - [Busting the 5 Biggest Myths About Renewable Energy](https://soylentnews.org/article.pl?sid=26/01/09/1828213&amp;from=rss)
* [2026-01-10, 17:27:00](https://soylentnews.org/article.pl?sid=26/01/09/1824225&amp;from=rss) - [Bali Wants Three Months of Bank Account Statements to Visit ](https://soylentnews.org/article.pl?sid=26/01/09/1824225&amp;from=rss)
* [2026-01-10, 12:42:00](https://soylentnews.org/article.pl?sid=26/01/09/1822241&amp;from=rss) - [Microsoft Silently Kills Windows and Office Phone Activation and Forces Online Activation](https://soylentnews.org/article.pl?sid=26/01/09/1822241&amp;from=rss)
* [2026-01-10, 07:53:00](https://soylentnews.org/article.pl?sid=26/01/09/1820256&amp;from=rss) - [Renowned Mathematician Joel David Hamkins Declares AI Models Useless for Solving Math](https://soylentnews.org/article.pl?sid=26/01/09/1820256&amp;from=rss)
* [2026-01-10, 03:09:00](https://soylentnews.org/article.pl?sid=26/01/08/0331227&amp;from=rss) - [The Nation&apos;s Strictest Privacy Law Just Took Effect, to Data Brokers’ Chagrin](https://soylentnews.org/article.pl?sid=26/01/08/0331227&amp;from=rss)
* [2026-01-09, 22:20:00](https://soylentnews.org/article.pl?sid=26/01/08/0325201&amp;from=rss) - [Scientists Found a Way to Help the Brain Bounce Back From Alzheimer&apos;s](https://soylentnews.org/article.pl?sid=26/01/08/0325201&amp;from=rss)
* [2026-01-09, 17:36:00](https://soylentnews.org/article.pl?sid=26/01/08/0319211&amp;from=rss) - [Palo Alto Networks Security-Intel Boss Calls AI Agents 2026&apos;S Biggest Insider Threat](https://soylentnews.org/article.pl?sid=26/01/08/0319211&amp;from=rss)
* [2026-01-09, 12:53:00](https://soylentnews.org/article.pl?sid=26/01/07/1246247&amp;from=rss) - [OpenAI Bets Big on Audio as Silicon Valley Declares War on Screens](https://soylentnews.org/article.pl?sid=26/01/07/1246247&amp;from=rss)
* [2026-01-09, 12:23:52](https://news.ycombinator.com/item?id=46553137) - [39c3: In-house electronics manufacturing from scratch: How hard can it be? [video]](https://media.ccc.de/v/39c3-in-house-electronics-manufacturing-from-scratch-how-hard-can-it-be)
* [2026-01-09, 08:07:00](https://soylentnews.org/article.pl?sid=26/01/07/1228222&amp;from=rss) - [While the World Cools on EVs, Norway Pushes to 96% Electric Sales](https://soylentnews.org/article.pl?sid=26/01/07/1228222&amp;from=rss)
* [2026-01-09, 03:24:00](https://soylentnews.org/article.pl?sid=26/01/06/1126220&amp;from=rss) - [Scientists Create a “Periodic Table” for Artificial Intelligence](https://soylentnews.org/article.pl?sid=26/01/06/1126220&amp;from=rss)
* [2026-01-08, 22:38:00](https://soylentnews.org/article.pl?sid=26/01/06/1123219&amp;from=rss) - [Ford Wants to Turn Your Sun Visor Into a Head-Up Display](https://soylentnews.org/article.pl?sid=26/01/06/1123219&amp;from=rss)
* [2026-01-08, 17:53:00](https://soylentnews.org/article.pl?sid=26/01/06/1120251&amp;from=rss) - [The French University Where Spies Go for Training](https://soylentnews.org/article.pl?sid=26/01/06/1120251&amp;from=rss)
* [2026-01-08, 13:08:00](https://soylentnews.org/article.pl?sid=26/01/06/1049201&amp;from=rss) - [A Post-American, Enshittification-Resistant Internet](https://soylentnews.org/article.pl?sid=26/01/06/1049201&amp;from=rss)
* [2026-01-08, 08:19:00](https://soylentnews.org/article.pl?sid=26/01/06/1042201&amp;from=rss) - [The Search for Gravitons: Modifying Gravity Waves With Light](https://soylentnews.org/article.pl?sid=26/01/06/1042201&amp;from=rss)
* [2026-01-08, 03:36:00](https://soylentnews.org/article.pl?sid=26/01/06/0751234&amp;from=rss) - [How Do I Make Clear Ice at Home? a Food Scientist Shares Easy Tips](https://soylentnews.org/article.pl?sid=26/01/06/0751234&amp;from=rss)
