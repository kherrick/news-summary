# [News Summary](https://kherrick.github.io/news-summary/)

## Advancements in Technology and Innovation

* [China Advances Abandoned US Nuclear Technology](https://news.slashdot.org/story/25/05/01/1818259/china-advances-abandoned-us-nuclear-technology?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Researchers in China are advancing nuclear technologies previously abandoned by the US, showcasing a growing focus on energy innovation. [Comments](https://news.slashdot.org/story/25/05/01/1818259/china-advances-abandoned-us-nuclear-technology?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Fusion Reactor Called ‘Norm’ Could Outperform Everything We’ve Built So Far](https://soylentnews.org/article.pl?sid=25/04/30/154230&amp;from=rss) - A new fusion reactor design reportedly has the potential to surpass all existing technologies. [Comments](https://soylentnews.org/article.pl?sid=25/04/30/154230&amp;from=rss)

* [Satellite Launches On Mission To 'Weigh' World's 1.5 Trillion Trees](https://tech.slashdot.org/story/25/04/30/231235/satellite-launches-on-mission-to-weigh-worlds-15-trillion-trees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A satellite mission aims to measure the biomass of the world's trees, providing valuable environmental insights. [Comments](https://tech.slashdot.org/story/25/04/30/231235/satellite-launches-on-mission-to-weigh-worlds-15-trillion-trees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Artificial Intelligence and Digital Innovations

* [Google is Putting AI Mode Right in Search](https://tech.slashdot.org/story/25/05/01/1723229/google-is-putting-ai-mode-right-in-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Google introduces an AI-enhanced search mode for more efficient and accurate user queries. [Comments](https://tech.slashdot.org/story/25/05/01/1723229/google-is-putting-ai-mode-right-in-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Fivetran to acquire Census](https://www.fivetran.com/blog/why-fivetran-and-census-are-joining-forces) - Fivetran announces its acquisition of Census, boosting data pipeline capabilities for integration platforms. [Comments](https://news.ycombinator.com/item?id=43860108)

* [Meta Now Forces AI Data Collection Through Ray-Ban Smart Glasses](https://tech.slashdot.org/story/25/05/01/1445212/meta-now-forces-ai-data-collection-through-ray-ban-smart-glasses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Meta integrates AI-based data gathering into their Ray-Ban smart glasses, sparking privacy debates. [Comments](https://tech.slashdot.org/story/25/05/01/1445212/meta-now-forces-ai-data-collection-through-ray-ban-smart-glasses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Scientific Discoveries and Health Insights

* [Dopamine signals when a fear can be forgotten](https://picower.mit.edu/news/dopamine-signals-when-fear-can-be-forgotten) - MIT researchers explore how dopamine signaling influences the brain's ability to overcome fear. [Comments](https://news.ycombinator.com/item?id=43860726)

* [Doom GPU Flame Graphs](https://www.brendangregg.com/blog/2025-05-01/doom-gpu-flame-graphs.html) - A novel visualization approach leverages GPU flame graphs using the Doom engine. [Comments](https://lobste.rs/s/egqrcs/doom_gpu_flame_graphs)

* [The term "vegetative electron microscopy" keeps showing up in scientific papers](https://www.sciencealert.com/a-strange-phrase-keeps-turning-up-in-scientific-papers-but-why) - The phrase 'vegetative electron microscopy' appears unexpectedly in numerous papers, raising concerns about error propagation in academia. [Comments](https://news.ycombinator.com/item?id=43858655)

## Socioeconomic Developments and Policy Changes

* [Starting July 1, Academic Publishers Can't Paywall NIH-Funded Research](https://science.slashdot.org/story/25/05/01/0535250/starting-july-1-academic-publishers-cant-paywall-nih-funded-research?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - NIH announces a significant policy shift ensuring all funded research is publicly accessible. [Comments](https://news.ycombinator.com/item?id=43858568)

* [Amazon's Starlink Rival Sees the First 27 Satellites Successfully Reach Low-Earth Orbit](https://soylentnews.org/article.pl?sid=25/04/30/022200&amp;from=rss) - Amazon's ambitious internet satellite project achieves a successful launch, aiming to compete with Starlink. [Comments](https://soylentnews.org/article.pl?sid=25/04/30/022200&amp;from=rss)

* [Republicans In Congress Want a Flat $200 Annual EV Tax](https://tech.slashdot.org/story/25/04/30/2227225/republicans-in-congress-want-a-flat-200-annual-ev-tax?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A proposed tax targets electric vehicle owners with an annual fee to fund infrastructure. [Comments](https://tech.slashdot.org/story/25/04/30/2227225/republicans-in-congress-want-a-flat-200-annual-ev-tax?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

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

* [2025-05-01, 18:18:00](https://news.slashdot.org/story/25/05/01/1818259/china-advances-abandoned-us-nuclear-technology?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Advances Abandoned US Nuclear Technology](https://news.slashdot.org/story/25/05/01/1818259/china-advances-abandoned-us-nuclear-technology?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-01, 17:36:01](https://lobste.rs/s/rlwp2g/roons_mechanical_computer_kit) - [Roons: A Mechanical Computer Kit](https://whomtech.com/show-hn/)
* [2025-05-01, 17:29:16](https://news.ycombinator.com/item?id=43860726) - [Dopamine signals when a fear can be forgotten](https://picower.mit.edu/news/dopamine-signals-when-fear-can-be-forgotten)
* [2025-05-01, 17:27:07](https://news.ycombinator.com/item?id=43860696) - [The Gang Has a Mid-Life Crisis](https://chris-martin.org/2025/the-gang-has-a-mid-life-crisis)
* [2025-05-01, 17:23:00](https://tech.slashdot.org/story/25/05/01/1723229/google-is-putting-ai-mode-right-in-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google is Putting AI Mode Right in Search](https://tech.slashdot.org/story/25/05/01/1723229/google-is-putting-ai-mode-right-in-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-01, 17:04:58](https://news.ycombinator.com/item?id=43860431) - [Git Changesets](https://github.com/changesets/changesets)
* [2025-05-01, 17:04:47](https://news.ycombinator.com/item?id=43860428) - [Millihertz 5 Mechanical Computer](https://www.srimech.com/MHZ5.html)
* [2025-05-01, 17:00:45](https://news.ycombinator.com/item?id=43860368) - [Waypoint Transit (YC W25) Is Hiring a Founding Engineer](https://www.workatastartup.com/jobs/75517)
* [2025-05-01, 16:48:26](https://news.ycombinator.com/item?id=43860207) - [Arizona laptop farmer pleads guilty for funneling $17M to Kim Jong Un](https://www.theregister.com/2025/02/12/arizona_woman_laptop_farm_guilty/)
* [2025-05-01, 16:43:37](https://news.ycombinator.com/item?id=43860137) - [Llasa: Llama-Based Speech Synthesis](https://llasatts.github.io/llasatts/)
* [2025-05-01, 16:41:49](https://news.ycombinator.com/item?id=43860108) - [Fivetran to acquire Census](https://www.fivetran.com/blog/why-fivetran-and-census-are-joining-forces)
* [2025-05-01, 16:40:00](https://news.slashdot.org/story/25/05/01/1633235/video-game-website-polygon-sold-to-valnet-and-hit-with-mass-layoffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Video Game Website Polygon Sold To Valnet And Hit With Mass Layoffs](https://news.slashdot.org/story/25/05/01/1633235/video-game-website-polygon-sold-to-valnet-and-hit-with-mass-layoffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-01, 16:16:10](https://lobste.rs/s/1cpl6v/redis_is_open_source_again) - [Redis is open source again](https://antirez.com/news/151)
* [2025-05-01, 16:05:00](https://news.slashdot.org/story/25/05/01/1552209/amazon-ceo-jassy-warns-of-ais-unprecedented-adoption-speed-education-shortfalls?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon CEO Jassy Warns of AI&apos;s Unprecedented Adoption Speed, Education Shortfalls](https://news.slashdot.org/story/25/05/01/1552209/amazon-ceo-jassy-warns-of-ais-unprecedented-adoption-speed-education-shortfalls?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-01, 16:02:14](https://news.ycombinator.com/item?id=43859536) - [Claude Integrations](https://www.anthropic.com/news/integrations)
* [2025-05-01, 15:57:43](https://news.ycombinator.com/item?id=43859464) - [Show HN: Mechanical Computer Kit (Roons)](https://whomtech.com/show-hn/)
* [2025-05-01, 15:56:35](https://news.ycombinator.com/item?id=43859446) - [Redis is open source again](https://antirez.com/news/151)
* [2025-05-01, 15:38:53](https://news.ycombinator.com/item?id=43859165) - [Show HN: Robot Unlock – an open-ended programming game/zachlike](https://store.steampowered.com/app/3318050/Robot_Unlock/)
* [2025-05-01, 15:20:16](https://lobste.rs/s/ifutfd/journelly_like_tweeting_for_your_eyes) - [Journelly: like tweeting but for your eyes only (in plain text)](https://xenodium.com/journelly-like-tweeting-but-for-your-eyes-only)
* [2025-05-01, 15:20:00](https://slashdot.org/story/25/05/01/1520202/nvidia-and-anthropic-publicly-clash-over-ai-chip-export-controls?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nvidia and Anthropic Publicly Clash Over AI Chip Export Controls](https://slashdot.org/story/25/05/01/1520202/nvidia-and-anthropic-publicly-clash-over-ai-chip-export-controls?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-01, 15:06:23](https://news.ycombinator.com/item?id=43858655) - [The term \&quot;vegetative electron microscopy\&quot; keeps showing up in scientific papers](https://www.sciencealert.com/a-strange-phrase-keeps-turning-up-in-scientific-papers-but-why)
* [2025-05-01, 15:01:44](https://news.ycombinator.com/item?id=43858568) - [Starting July 1, Academic Publishers Can&apos;t Paywall NIH-Funded Research](https://www.nih.gov/about-nih/who-we-are/nih-director/statements/accelerating-access-research-results-new-implementation-date-2024-nih-public-access-policy)
* [2025-05-01, 14:57:06](https://lobste.rs/s/p3kit4/digital_dams_don_t_hold_why_internet) - [Digital Dams That Don&apos;t Hold: Why Internet Censorship Fails as Technical Policy](https://maych.in/blog/why-internet-censorship-fails-as-technical-policy/)
* [2025-05-01, 14:53:45](https://lobste.rs/s/cswpbf/minidisc_zero_config_service_discovery) - [minidisc: Zero-config service discovery for Tailscale networks](https://github.com/mscheidegger/minidisc)
* [2025-05-01, 14:53:34](https://news.ycombinator.com/item?id=43858462) - [We identified a North Korean hacker who tried to get a job at Kraken](https://blog.kraken.com/news/how-we-identified-a-north-korean-hacker)
* [2025-05-01, 14:45:00](https://tech.slashdot.org/story/25/05/01/1445212/meta-now-forces-ai-data-collection-through-ray-ban-smart-glasses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Now Forces AI Data Collection Through Ray-Ban Smart Glasses](https://tech.slashdot.org/story/25/05/01/1445212/meta-now-forces-ai-data-collection-through-ray-ban-smart-glasses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-01, 14:27:42](https://lobste.rs/s/7xqcrq/quick_demo_core_async_flow) - [A quick demo of core.async.flow](https://youtu.be/lXFwf3O4BVY)
* [2025-05-01, 14:23:03](https://lobste.rs/s/ctenw6/e_book_reader_for_e_ink_devices) - [E-book reader for e-ink devices](https://github.com/koreader/koreader)
* [2025-05-01, 14:22:33](https://lobste.rs/s/eqyon1/easier_layout_with_margin_trim) - [Easier layout with margin-trim](https://webkit.org/blog/16854/margin-trim/)
* [2025-05-01, 14:17:09](https://lobste.rs/s/nvkc4l/i386_hobby_sperating_system_with) - [An i386 Hobby sperating system with graphics, multitasking, networking and an i386 C compiler](https://github.com/joexbayer/RetrOS-32)
* [2025-05-01, 14:12:06](https://lobste.rs/s/hyuadu/faster_way_copy_sqlite_databases_between) - [A faster way to copy SQLite databases between computers](https://alexwlchan.net/2025/copying-sqlite-databases/)
* [2025-05-01, 14:10:53](https://lobste.rs/s/lrko4e/git_sqlite_custom_diff_merge_driver_for) - [git-sqlite: A custom diff and merge driver for sqlite](https://github.com/cannadayr/git-sqlite)
* [2025-05-01, 14:06:55](https://news.ycombinator.com/item?id=43857856) - [Show HN: Hyperparam: OSS Tools for Exploring Datasets Locally in the Browser](https://hyperparam.app/about/opensource)
* [2025-05-01, 14:03:00](https://games.slashdot.org/story/25/05/01/143211/microsoft-hikes-xbox-console-prices-by-up-to-100-games-to-hit-80?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Hikes Xbox Console Prices By Up To $100, Games To Hit $80](https://games.slashdot.org/story/25/05/01/143211/microsoft-hikes-xbox-console-prices-by-up-to-100-games-to-hit-80?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-01, 14:03:00](https://soylentnews.org/article.pl?sid=25/04/30/154230&amp;from=rss) - [Fusion Reactor Called ‘Norm’ Could Outperform Everything We’ve Built So Far](https://soylentnews.org/article.pl?sid=25/04/30/154230&amp;from=rss)
* [2025-05-01, 13:50:38](https://news.ycombinator.com/item?id=43857643) - [AI code review: Should the author be the reviewer?](https://www.greptile.com/blog/ai-code-reviews-conflict)
* [2025-05-01, 13:36:45](https://lobste.rs/s/1jb4l7/making_pypi_s_test_suite_81_faster) - [Making PyPI&apos;s test suite 81% faster](https://blog.trailofbits.com/2025/05/01/making-pypis-test-suite-81-faster/)
* [2025-05-01, 13:16:39](https://lobste.rs/s/hetkdt/elm_test_distributions) - [Elm test distributions](https://martin.janiczek.cz/2025/05/01/elm-test-distributions.html)
* [2025-05-01, 13:00:00](https://slashdot.org/story/25/05/01/0525208/study-accuses-lm-arena-of-helping-top-ai-labs-game-its-benchmark?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Study Accuses LM Arena of Helping Top AI Labs Game Its Benchmark](https://slashdot.org/story/25/05/01/0525208/study-accuses-lm-arena-of-helping-top-ai-labs-game-its-benchmark?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-01, 12:28:47](https://news.ycombinator.com/item?id=43856803) - [International Workers&apos; Day](https://en.wikipedia.org/wiki/International_Workers%27_Day)
* [2025-05-01, 12:28:21](https://news.ycombinator.com/item?id=43856801) - [Linkwarden: FOSS self-hostable bookmarking with AI-tagging and page archival](https://linkwarden.app/)
* [2025-05-01, 12:28:13](https://news.ycombinator.com/item?id=43856798) - [The Brief Origins of May Day](https://archive.iww.org/history/library/misc/origins_of_mayday/)
* [2025-05-01, 12:27:51](https://news.ycombinator.com/item?id=43856795) - [Judge Rules Apple Executive Lied Under Oath, Makes Criminal Contempt Referral](https://www.thebignewsletter.com/p/judge-rules-apple-executive-lied)
* [2025-05-01, 12:14:25](https://news.ycombinator.com/item?id=43856656) - [Trust Me, I&apos;m Local: Chrome Extensions, MCP, and the Sandbox Escape](https://blog.extensiontotal.com/trust-me-im-local-chrome-extensions-mcp-and-the-sandbox-escape-1875a0ee4823)
* [2025-05-01, 12:00:00](https://science.slashdot.org/story/25/05/01/0535250/starting-july-1-academic-publishers-cant-paywall-nih-funded-research?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Starting July 1, Academic Publishers Can&apos;t Paywall NIH-Funded Research](https://science.slashdot.org/story/25/05/01/0535250/starting-july-1-academic-publishers-cant-paywall-nih-funded-research?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-01, 11:54:04](https://news.ycombinator.com/item?id=43856489) - [How to vibe code for free: Running Qwen3 on your Mac, using MLX](https://localforge.dev/blog/running-qwen3-macbook-mlx)
* [2025-05-01, 11:15:08](https://news.ycombinator.com/item?id=43856186) - [A faster way to copy SQLite databases between computers](https://alexwlchan.net/2025/copying-sqlite-databases/)
* [2025-05-01, 10:00:00](https://slashdot.org/story/25/04/30/238254/duolingo-doubles-its-language-courses-thanks-to-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Duolingo Doubles Its Language Courses Thanks To AI](https://slashdot.org/story/25/04/30/238254/duolingo-doubles-its-language-courses-thanks-to-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-01, 09:21:00](https://soylentnews.org/article.pl?sid=25/04/30/0213229&amp;from=rss) - [Here’s How We Might Generate Electricity From Rain](https://soylentnews.org/article.pl?sid=25/04/30/0213229&amp;from=rss)
* [2025-05-01, 07:00:00](https://tech.slashdot.org/story/25/04/30/231235/satellite-launches-on-mission-to-weigh-worlds-15-trillion-trees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Satellite Launches On Mission To &apos;Weigh&apos; World&apos;s 1.5 Trillion Trees](https://tech.slashdot.org/story/25/04/30/231235/satellite-launches-on-mission-to-weigh-worlds-15-trillion-trees?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-01, 06:47:02](https://lobste.rs/s/aa8fks/curing_case_git_ux_2022) - [Curing A Case Of Git-UX (2022)](https://oppi.li/posts/curing_a_case_of_git-UX/)
* [2025-05-01, 05:05:00](https://apple.slashdot.org/story/25/05/01/055227/apple-must-halt-non-app-store-sales-commissions-judge-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Must Halt Non-App Store Sales Commissions, Judge Says](https://apple.slashdot.org/story/25/05/01/055227/apple-must-halt-non-app-store-sales-commissions-judge-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-01, 04:34:00](https://soylentnews.org/article.pl?sid=25/04/30/025225&amp;from=rss) - [Wired on Protecting Your Phone — and Your Privacy — at the US Border](https://soylentnews.org/article.pl?sid=25/04/30/025225&amp;from=rss)
* [2025-05-01, 03:30:00](https://tech.slashdot.org/story/25/04/30/2242219/why-windows-7-took-forever-to-load-if-you-had-a-solid-background?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Windows 7 Took Forever To Load If You Had a Solid Background](https://tech.slashdot.org/story/25/04/30/2242219/why-windows-7-took-forever-to-load-if-you-had-a-solid-background?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-01, 03:21:55](https://news.ycombinator.com/item?id=43853382) - [The one interview question that will protect you from North Korean fake workers](https://www.theregister.com/2025/04/29/north_korea_worker_interview_questions/)
* [2025-05-01, 03:09:03](https://lobste.rs/s/egqrcs/doom_gpu_flame_graphs) - [Doom GPU Flame Graphs](https://www.brendangregg.com/blog/2025-05-01/doom-gpu-flame-graphs.html)
* [2025-05-01, 01:00:00](https://yro.slashdot.org/story/25/04/30/2234218/alleged-scattered-spider-member-extradited-to-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Alleged &apos;Scattered Spider&apos; Member Extradited to US](https://yro.slashdot.org/story/25/04/30/2234218/alleged-scattered-spider-member-extradited-to-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-01, 00:41:26](https://lobste.rs/s/z6xapj/understanding_recent_criticism_chatbot) - [Understanding the recent criticism of the Chatbot Arena](https://simonwillison.net/2025/Apr/30/criticism-of-the-chatbot-arena/)
* [2025-05-01, 00:22:01](https://news.ycombinator.com/item?id=43852266) - [108B Pixel Scan of Johannes Vermeer&apos;s Girl with a Pearl Earring](https://www.hirox-europe.com/gigapixel/girl-with-a-pearl-earring/)
* [2025-05-01, 00:20:00](https://tech.slashdot.org/story/25/04/30/2227225/republicans-in-congress-want-a-flat-200-annual-ev-tax?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Republicans In Congress Want a Flat $200 Annual EV Tax](https://tech.slashdot.org/story/25/04/30/2227225/republicans-in-congress-want-a-flat-200-annual-ev-tax?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-01, 00:06:00](https://news.ycombinator.com/item?id=43852162) - [Office is too slow, so Microsoft is making it load at Windows startup](https://www.pcworld.com/article/2651749/office-is-too-slow-so-microsoft-is-making-it-load-at-windows-startup.html)
* [2025-04-30, 23:59:09](https://news.ycombinator.com/item?id=43852096) - [Pwning the Ladybird Browser](https://jessie.cafe/posts/pwning-ladybirds-libjs/)
* [2025-04-30, 23:56:23](https://lobste.rs/s/6o4x71/pwning_ladybird_browser) - [Pwning the Ladybird browser](https://jessie.cafe/posts/pwning-ladybirds-libjs/)
* [2025-04-30, 23:51:11](https://lobste.rs/s/rnoykc/windows_rdp_lets_you_log_using_revoked) - [Windows RDP lets you log-in using revoked passwords. Microsoft is ok with that](https://arstechnica.com/security/2025/04/windows-rdp-lets-you-log-in-using-revoked-passwords-microsoft-is-ok-with-that/)
* [2025-04-30, 23:48:00](https://soylentnews.org/article.pl?sid=25/04/30/022200&amp;from=rss) - [Amazon&apos;s Starlink Rival Sees the First 27 Satellites Successfully Reach Low-Earth Orbit](https://soylentnews.org/article.pl?sid=25/04/30/022200&amp;from=rss)
* [2025-04-30, 22:04:30](https://lobste.rs/s/n9fe0w/rise_fall_erlang_at_ericsson_ab_2023) - [The Rise &amp; Fall of Erlang at Ericsson AB (2023)](https://iknek.github.io/blog/the-erlang-story/)
* [2025-04-30, 21:51:10](https://news.ycombinator.com/item?id=43851099) - [Mercury: Commercial-scale diffusion language model](https://www.inceptionlabs.ai/introducing-mercury)
* [2025-04-30, 20:22:12](https://lobste.rs/s/9wyvlg/co_dfns_versus_bqn_s_implementation) - [Co-dfns versus BQN&apos;s implementation](https://mlochbaum.github.io/BQN/implementation/codfns.html)
* [2025-04-30, 19:06:00](https://soylentnews.org/article.pl?sid=25/04/30/0157233&amp;from=rss) - [Trinity Desktop Environment 14.1.4 Released](https://soylentnews.org/article.pl?sid=25/04/30/0157233&amp;from=rss)
* [2025-04-30, 18:59:01](https://lobste.rs/s/lkngrz/new_tag_vibecoding) - [New tag: vibecoding](https://lobste.rs/s/lkngrz/new_tag_vibecoding)
* [2025-04-30, 18:44:17](https://news.ycombinator.com/item?id=43849197) - [The cat that wouldn&apos;t die](https://aeon.co/essays/no-schrodingers-cat-is-not-alive-and-dead-at-the-same-time)
* [2025-04-30, 14:23:00](https://soylentnews.org/article.pl?sid=25/04/30/0155235&amp;from=rss) - [Volcanic Eruption Warnings Are Now Possible With Fiber-Optic Cables](https://soylentnews.org/article.pl?sid=25/04/30/0155235&amp;from=rss)
* [2025-04-30, 10:55:11](https://lobste.rs/s/xuaafo/swarm_testing_data_structures) - [Swarm Testing Data Structures](https://tigerbeetle.com/blog/2025-04-23-swarm-testing-data-structures/)
* [2025-04-30, 09:38:00](https://soylentnews.org/article.pl?sid=25/04/30/0150205&amp;from=rss) - [Congress Passes TAKE IT DOWN Act](https://soylentnews.org/article.pl?sid=25/04/30/0150205&amp;from=rss)
* [2025-04-30, 06:15:29](https://lobste.rs/s/fystnj/elixir_is_not_owned_by_big_tech) - [Elixir is not owned by Big Tech](https://underjord.io/elixir-is-not-owned-by-big-tech.html)
* [2025-04-30, 04:54:00](https://soylentnews.org/article.pl?sid=25/04/30/0137239&amp;from=rss) - [Europe Stays Tough on Tech Regulation](https://soylentnews.org/article.pl?sid=25/04/30/0137239&amp;from=rss)
* [2025-04-30, 00:36:26](https://lobste.rs/s/afvexw/against_horizontal_scroll) - [Against Horizontal Scroll](https://matklad.github.io/2025/04/22/horizontal-scroll.html)
* [2025-04-30, 00:12:50](https://lobste.rs/s/lffktu/i_use_zip_bombs_protect_my_server) - [I use Zip Bombs to Protect my Server](https://idiallo.com/blog/zipbomb-protection)
* [2025-04-30, 00:10:00](https://soylentnews.org/article.pl?sid=25/04/29/0840259&amp;from=rss) - [The Agonizing Task of Turning Iberia&apos;s Power Back On](https://soylentnews.org/article.pl?sid=25/04/29/0840259&amp;from=rss)
* [2025-04-29, 19:26:00](https://soylentnews.org/article.pl?sid=25/04/29/0827244&amp;from=rss) - [A New Kali Linux Archive Signing Key](https://soylentnews.org/article.pl?sid=25/04/29/0827244&amp;from=rss)
* [2025-04-29, 14:41:00](https://soylentnews.org/article.pl?sid=25/04/29/0824210&amp;from=rss) - [AI-Powered, Non-Intrusive Terminal Assistant ](https://soylentnews.org/article.pl?sid=25/04/29/0824210&amp;from=rss)
* [2025-04-29, 10:01:00](https://soylentnews.org/article.pl?sid=25/04/29/0655255&amp;from=rss) - [New Framework Suggests Stars Dissolve Into Neutrons to Forge Heavy Elements](https://soylentnews.org/article.pl?sid=25/04/29/0655255&amp;from=rss)
* [2025-04-29, 05:15:00](https://soylentnews.org/article.pl?sid=25/04/28/0428200&amp;from=rss) - [Differential Equations and Urine](https://soylentnews.org/article.pl?sid=25/04/28/0428200&amp;from=rss)
* [2025-04-29, 00:28:00](https://soylentnews.org/article.pl?sid=25/04/28/0420232&amp;from=rss) - [Ice Age Pyrotechnology: This is How Humans Made Fire Tens of Thousands of Years Ago](https://soylentnews.org/article.pl?sid=25/04/28/0420232&amp;from=rss)
* [2025-04-28, 19:41:00](https://soylentnews.org/article.pl?sid=25/04/28/044252&amp;from=rss) - [$8 Billion of US Climate Tech Projects Have Been Canceled So Far in 2025](https://soylentnews.org/article.pl?sid=25/04/28/044252&amp;from=rss)
* [2025-04-28, 14:54:00](https://soylentnews.org/article.pl?sid=25/04/28/0358222&amp;from=rss) - [Everyone Should Stop Working on AI Now](https://soylentnews.org/article.pl?sid=25/04/28/0358222&amp;from=rss)
* [2025-04-28, 10:09:00](https://soylentnews.org/article.pl?sid=25/04/26/1734201&amp;from=rss) - [Multi-Microbiome-Mashup](https://soylentnews.org/article.pl?sid=25/04/26/1734201&amp;from=rss)
* [2025-04-28, 05:23:00](https://soylentnews.org/article.pl?sid=25/04/26/1715246&amp;from=rss) - [Windows 11’s Voice Typing Will Soon Let You Turn Off the ****ing Profanity Filter](https://soylentnews.org/article.pl?sid=25/04/26/1715246&amp;from=rss)
* [2025-04-28, 00:42:00](https://soylentnews.org/article.pl?sid=25/04/26/1713213&amp;from=rss) - [Fedora Considers Dropping GNOME X11 Session From Repositories](https://soylentnews.org/article.pl?sid=25/04/26/1713213&amp;from=rss)
* [2025-04-27, 19:56:00](https://soylentnews.org/article.pl?sid=25/04/26/179216&amp;from=rss) - [9-Mile-Thick Layer of Solid Diamonds May Lurk Beneath Mercury&apos;s Surface, Study Hints](https://soylentnews.org/article.pl?sid=25/04/26/179216&amp;from=rss)
* [2025-04-27, 17:21:00](https://soylentnews.org/politics/article.pl?sid=25/04/26/174238&amp;from=rss) - [XKCD Cartoon Protest](https://soylentnews.org/politics/article.pl?sid=25/04/26/174238&amp;from=rss)
* [2025-04-27, 15:12:00](https://soylentnews.org/article.pl?sid=25/04/26/171205&amp;from=rss) - [The EU is Implementing Energy Labels and Minimum Requirements for Phones and Tablets](https://soylentnews.org/article.pl?sid=25/04/26/171205&amp;from=rss)
* [2025-04-27, 10:30:00](https://soylentnews.org/article.pl?sid=25/04/26/1332253&amp;from=rss) - [NASA’s Lucy Spacecraft Images Asteroid Donaldjohanson](https://soylentnews.org/article.pl?sid=25/04/26/1332253&amp;from=rss)
* [2025-04-27, 05:43:00](https://soylentnews.org/article.pl?sid=25/04/26/1324227&amp;from=rss) - [Post-Quantum Crypto: McEliece Standardization](https://soylentnews.org/article.pl?sid=25/04/26/1324227&amp;from=rss)
* [2025-04-27, 01:00:00](https://soylentnews.org/article.pl?sid=25/04/26/1322229&amp;from=rss) - [Kennedy Promises Studies Using Private Health Data to Identify Factors That May Cause Autism](https://soylentnews.org/article.pl?sid=25/04/26/1322229&amp;from=rss)
