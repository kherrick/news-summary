# [News Summary](https://kherrick.github.io/news-summary/)

## Programming and Technology Innovations

* [GulfOfMexico: perfect programming language](https://github.com/TodePond/GulfOfMexico) - A new programming language emphasizing simplicity and innovative design.

* [Taichi: High-performance Parallel Programming in Python](https://www.taichi-lang.org/) - A Python framework designed for high-performance parallel computing.

* [Jill – a functional programming language for the Nand2Tetris platform](https://github.com/mpatajac/jillc) - A programming language tailored for educational purposes on the Nand2Tetris platform.

* [My Life in Weeks](https://weeks.ginatrapani.org/) - A unique visualization tool to track your life week by week.

* [fixi.js - minimal general hypermedia controls](https://github.com/bigskysoftware/fixi) - A lightweight JavaScript tool for implementing hypermedia controls.

## Cybersecurity and Hacking Insights

* [China's 'Salt Typhoon' Hackers Continue to Breach Telecoms Despite US Sanctions](https://it.slashdot.org/story/25/02/15/2244220/chinas-salt-typhoon-hackers-continue-to-breach-telecoms-despite-us-sanctions?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A look into ongoing cyberattacks by Chinese hacker groups.

* [Multiple Russian Threat Actors Targeting Microsoft Device Code Authentication](https://www.volexity.com/blog/2025/02/13/multiple-russian-threat-actors-targeting-microsoft-device-code-authentication/) - Analysis of cyber threats targeting Microsoft's authentication systems.

* [Post-Mortem - Network Outage Affecting OpenStreetMap.org - 15 December 2024](https://operations.osmfoundation.org/2025/02/15/post-mortem.html) - A post-mortem of an outage that disrupted OpenStreetMap services.

* [Cracking an old ZIP file to help open source the ANC's "Operation Vula" secret crypto code](https://blog.jgc.org/2024/09/cracking-old-zip-file-to-help-open.html) - Efforts to crack encryption for historic open-source initiatives.

* [Leaking the email of any YouTube user for $10,000](https://brutecat.com/articles/leaking-youtube-emails) - Insights into YouTube's security vulnerabilities.

## Artificial Intelligence Developments

* [Perplexity Deep Research](https://www.perplexity.ai/hub/blog/introducing-perplexity-deep-research) - Advancements in AI-powered deep research methodologies.

* [AI Used To Design a Multi-Step Enzyme That Can Digest Some Plastics](https://science.slashdot.org/story/25/02/15/0549201/ai-used-to-design-a-multi-step-enzyme-that-can-digest-some-plastics?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A groundbreaking AI-created enzyme to combat plastic waste.

* [How to Backdoor Large Language Models](https://blog.sshh.io/p/how-to-backdoor-large-language-models) - Navigating potential vulnerabilities in large language model systems.

## Health and Science Advances

* [Alzheimer's biomarkers now visible up to a decade ahead of symptoms](https://newatlas.com/brain/alzheimers-dementia/alzheimers-biomarkers-visible-decade-before-symptoms/) - Emerging technology to detect Alzheimer's earlier than ever.

* [Eating From Plastic Takeout Containers Can Increase Heart Failure Risk, Study Finds](https://science.slashdot.org/story/25/02/15/0555235/eating-from-plastic-takeout-containers-can-increase-heart-failure-risk-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A study linking plastic container use to increased heart risks.

* [ISS Astronauts Give Space-to-Earth Interview Weeks Before Finally Returning to Earth](https://science.slashdot.org/story/25/02/15/033223/iss-astronauts-give-space-to-earth-interview-weeks-before-finally-returning-to-earth?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Insights from astronauts reflecting on their time in space.

## Societal and Economic Trends

* [Reddit's Stock Fell 14% Despite Plans for AI-Powered Search](https://tech.slashdot.org/story/25/02/16/007234/despite-plans-for-ai-powered-search-reddits-stock-fell-14-this-week?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Factors behind Reddit’s financial struggles.

* [America's Office-Occupancy Rates Drop by Double Digits - and More in San Francisco](https://it.slashdot.org/story/25/02/15/1716204/americas-office-occupancy-rates-drop-by-double-digits---and-more-in-san-francisco?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Declining office space usage across the U.S.

* [Apple Invites Its Users Into Major Years-Long Health Study](https://apple.slashdot.org/story/25/02/15/0610248/apple-invites-its-users-into-major-years-long-health-study?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Apple's call for participation in a longitudinal health study.

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

* [2025-02-16, 01:19:11](https://lobste.rs/s/7pzdgj/gulfofmexico_perfect_programming) - [GulfOfMexico: perfect programming language](https://github.com/TodePond/GulfOfMexico)
* [2025-02-16, 00:22:01](https://news.ycombinator.com/item?id=43063970) - [Show HN: Blunderchess.net – blunder for your opponent every five moves](https://blunderchess.net)
* [2025-02-16, 00:09:00](https://tech.slashdot.org/story/25/02/16/007234/despite-plans-for-ai-powered-search-reddits-stock-fell-14-this-week?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Despite Plans for AI-Powered Search, Reddit's Stock Fell 14% This Week](https://tech.slashdot.org/story/25/02/16/007234/despite-plans-for-ai-powered-search-reddits-stock-fell-14-this-week?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-15, 22:48:56](https://news.ycombinator.com/item?id=43063239) - [Create a QubesOS Gaming HVM with GPU PCI passthrough (2023)](https://forum.qubes-os.org/t/create-a-gaming-hvm/19000)
* [2025-02-15, 22:47:00](https://it.slashdot.org/story/25/02/15/2244220/chinas-salt-typhoon-hackers-continue-to-breach-telecoms-despite-us-sanctions?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [China's 'Salt Typhoon' Hackers Continue to Breach Telecoms Despite US Sanctions](https://it.slashdot.org/story/25/02/15/2244220/chinas-salt-typhoon-hackers-continue-to-breach-telecoms-despite-us-sanctions?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-15, 22:39:19](https://news.ycombinator.com/item?id=43063167) - [Jellyfin: The Free Software Media System](https://jellyfin.org/)
* [2025-02-15, 21:37:58](https://lobste.rs/s/cxpiaj/taichi_high_performance_parallel) - [Taichi: High-performance Parallel Programming in Python](https://www.taichi-lang.org/)
* [2025-02-15, 21:34:00](https://hardware.slashdot.org/story/25/02/15/1949206/the-worlds-most-printed-3d-model-3dbenchy-is-now-public-domain?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [The World's Most Printed 3D Model, 3DBenchy, Is Now Public Domain](https://hardware.slashdot.org/story/25/02/15/1949206/the-worlds-most-printed-3d-model-3dbenchy-is-now-public-domain?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-15, 21:32:13](https://news.ycombinator.com/item?id=43062546) - [Watt The Fox?](https://h.43z.one/blog/2025-02-12/)
* [2025-02-15, 21:09:00](https://soylentnews.org/politics/article.pl?sid=25/02/14/1936219&from=rss) - [Let’s Buy California from Trump – Denmark’s Next Big Adventure ](https://soylentnews.org/politics/article.pl?sid=25/02/14/1936219&from=rss)
* [2025-02-15, 20:54:02](https://lobste.rs/s/undbaa/nasa_has_list_10_rules_for_software) - [NASA has a list of 10 rules for software development](https://www.cs.otago.ac.nz/cosc345/resources/nasa-10-rules.htm)
* [2025-02-15, 20:36:51](https://lobste.rs/s/oxtari/fixi_js_minimal_general_hypermedia) - [fixi.js - minimal general hypermedia controls](https://github.com/bigskysoftware/fixi)
* [2025-02-15, 20:34:00](https://it.slashdot.org/story/25/02/15/1716204/americas-office-occupancy-rates-drop-by-double-digits---and-more-in-san-francisco?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [America's Office-Occupancy Rates Drop by Double Digits - and More in San Francisco](https://it.slashdot.org/story/25/02/15/1716204/americas-office-occupancy-rates-drop-by-double-digits---and-more-in-san-francisco?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-15, 20:24:13](https://news.ycombinator.com/item?id=43061977) - [NASA has a list of 10 rules for software development](https://www.cs.otago.ac.nz/cosc345/resources/nasa-10-rules.htm)
* [2025-02-15, 20:07:39](https://news.ycombinator.com/item?id=43061827) - [Perplexity Deep Research](https://www.perplexity.ai/hub/blog/introducing-perplexity-deep-research)
* [2025-02-15, 19:34:29](https://news.ycombinator.com/item?id=43061498) - [My Life in Weeks](https://weeks.ginatrapani.org/)
* [2025-02-15, 19:34:00](https://apple.slashdot.org/story/25/02/15/0610248/apple-invites-its-users-into-major-years-long-health-study?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Invites Its Users Into Major Years-Long Health Study](https://apple.slashdot.org/story/25/02/15/0610248/apple-invites-its-users-into-major-years-long-health-study?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-15, 19:32:16](https://news.ycombinator.com/item?id=43061482) - [New SF public health chief was part of McKinsey opioid-marketing operation](https://sfstandard.com/2025/02/14/san-francisco-department-public-health-daniel-tsai-opioids-mckinsey/)
* [2025-02-15, 19:26:26](https://news.ycombinator.com/item?id=43061423) - [OmniParser V2 – A simple screen parsing tool towards pure vision based GUI agent](https://github.com/microsoft/OmniParser)
* [2025-02-15, 19:19:12](https://lobste.rs/s/1reyhf/run_llms_on_macos_using_llm_mlx_apple_s_mlx) - [Run LLMs on macOS using llm-mlx and Apple’s MLX framework](https://simonwillison.net/2025/Feb/15/llm-mlx/)
* [2025-02-15, 19:00:38](https://news.ycombinator.com/item?id=43061183) - [Schemesh: Fusion between Unix shell and Lisp REPL](https://github.com/cosmos72/schemesh)
* [2025-02-15, 18:59:39](https://news.ycombinator.com/item?id=43061173) - [Multiple Russian Threat Actors Targeting Microsoft Device Code Authentication](https://www.volexity.com/blog/2025/02/13/multiple-russian-threat-actors-targeting-microsoft-device-code-authentication/)
* [2025-02-15, 18:56:42](https://lobste.rs/s/ki3k2r/post_mortem_network_outage_affecting) - [Post-Mortem - Network Outage Affecting OpenStreetMap.org - 15 December 2024](https://operations.osmfoundation.org/2025/02/15/post-mortem.html)
* [2025-02-15, 18:51:17](https://lobste.rs/s/mt3tso/cracking_old_zip_file_help_open_source_anc) - [Cracking an old ZIP file to help open source the ANC's \"Operation Vula\" secret crypto code](https://blog.jgc.org/2024/09/cracking-old-zip-file-to-help-open.html)
* [2025-02-15, 18:34:00](https://games.slashdot.org/story/25/02/15/053254/bored-with-chess-magnus-carlsen-wants-to-remake-the-game?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Bored With Chess? Magnus Carlsen Wants to Remake the Game](https://games.slashdot.org/story/25/02/15/053254/bored-with-chess-magnus-carlsen-wants-to-remake-the-game?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-15, 18:29:35](https://lobste.rs/s/2gatrq/jepsen_test_on_patroni_postgresql_high) - [Jepsen Test on Patroni: A PostgreSQL High Availability Solution (2024)](https://www.binwang.me/2024-12-02-PostgreSQL-High-Availability-Solutions-Part-1.html)
* [2025-02-15, 18:26:49](https://news.ycombinator.com/item?id=43060818) - [PAROL6: 3D-printed desktop robotic arm](https://source-robotics.github.io/PAROL-docs/)
* [2025-02-15, 18:21:10](https://news.ycombinator.com/item?id=43060769) - [Basketball has evolved into a game of calculated decision-making](https://nabraj.com/blog/basketball-solved-sport/)
* [2025-02-15, 18:08:04](https://news.ycombinator.com/item?id=43060636) - [The Big TDD Misunderstanding (2022)](https://linkedrecords.com/the-big-tdd-misunderstanding-8e22c2f1fc21)
* [2025-02-15, 18:04:12](https://news.ycombinator.com/item?id=43060603) - [Jill – a functional programming language for the Nand2Tetris platform](https://github.com/mpatajac/jillc)
* [2025-02-15, 18:02:17](https://news.ycombinator.com/item?id=43060587) - [Alzheimer's biomarkers now visible up to a decade ahead of symptoms](https://newatlas.com/brain/alzheimers-dementia/alzheimers-biomarkers-visible-decade-before-symptoms/)
* [2025-02-15, 17:35:08](https://lobste.rs/s/cvxhqu/devenv_telemetry_warning) - [Devenv telemetry warning](https://chaos.social/@hexa/114009069746212598)
* [2025-02-15, 17:34:00](https://slashdot.org/story/25/02/15/0351257/mass-theft-thousands-of-artists-call-for-ai-art-auction-to-be-cancelled?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['Mass Theft': Thousands of Artists Call for AI Art Auction to be Cancelled](https://slashdot.org/story/25/02/15/0351257/mass-theft-thousands-of-artists-call-for-ai-art-auction-to-be-cancelled?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-15, 17:09:48](https://lobste.rs/s/oqfmhj/roomy_deep_dive_atproto_automerge) - [Roomy Deep Dive: ATProto + Automerge](https://blog.muni.town/roomy-deep-dive/)
* [2025-02-15, 16:36:50](https://lobste.rs/s/9kehva/transient_feed_aggregator_built_with) - [A transient feed aggregator built with Gleam](https://github.com/facundoolano/news.olano.dev)
* [2025-02-15, 16:34:00](https://science.slashdot.org/story/25/02/15/033223/iss-astronauts-give-space-to-earth-interview-weeks-before-finally-returning-to-earth?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [ISS Astronauts Give Space-to-Earth Interview Weeks Before Finally Returning to Earth](https://science.slashdot.org/story/25/02/15/033223/iss-astronauts-give-space-to-earth-interview-weeks-before-finally-returning-to-earth?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-15, 16:24:00](https://soylentnews.org/article.pl?sid=25/02/14/1932219&from=rss) - [Flies Play Too, Carousel Study Suggests](https://soylentnews.org/article.pl?sid=25/02/14/1932219&from=rss)
* [2025-02-15, 16:18:34](https://lobste.rs/s/pgwyrc/announcing_interop_2025) - [Announcing Interop 2025](https://webkit.org/blog/16458/announcing-interop-2025/)
* [2025-02-15, 15:47:52](https://lobste.rs/s/gnjfai/how_diablo_hackers_uncovered_speedrun) - [How Diablo hackers uncovered a speedrun scandal](https://arstechnica.com/gaming/2025/02/the-diablo-hackers-that-debunked-a-record-speedrun/)
* [2025-02-15, 15:34:00](https://tech.slashdot.org/story/25/02/15/0149202/jeep-claims-software-glitch-disabled-opting-out-of-in-vehicle-pop-up-ads-in-a-few-cases?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Jeep Claims 'Software Glitch' Disabled Opting-Out of In-Vehicle Pop-Up Ads in 'a Few' Cases](https://tech.slashdot.org/story/25/02/15/0149202/jeep-claims-software-glitch-disabled-opting-out-of-in-vehicle-pop-up-ads-in-a-few-cases?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-15, 15:25:32](https://lobste.rs/s/2az6nf/parallel_random_numbers_as_easy_as_1_2_3) - [Parallel Random Numbers: As Easy as 1, 2, 3](https://www.thesalmons.org/john/random123/papers/random123sc11.pdf)
* [2025-02-15, 15:06:30](https://news.ycombinator.com/item?id=43058997) - [Carbon capture more costly than switching to renewables, researchers find](https://techxplore.com/news/2025-02-carbon-capture-renewables.html)
* [2025-02-15, 15:06:15](https://news.ycombinator.com/item?id=43058993) - [Dust from car brakes more harmful than exhaust, study finds](https://e360.yale.edu/digest/brake-pads-lung-damage-study)
* [2025-02-15, 14:39:58](https://lobste.rs/s/upgnyr/gemini_protocol) - [Gemini (protocol)](https://en.wikipedia.org/wiki/Gemini_(protocol))
* [2025-02-15, 14:00:00](https://news.ycombinator.com/item?id=43058522) - [Diablo hackers uncovered a speedrun scandal](https://arstechnica.com/gaming/2025/02/the-diablo-hackers-that-debunked-a-record-speedrun/)
* [2025-02-15, 13:00:00](https://tech.slashdot.org/story/25/02/15/0540249/the-irs-is-buying-an-ai-supercomputer-from-nvidia?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [The IRS Is Buying an AI Supercomputer From Nvidia](https://tech.slashdot.org/story/25/02/15/0540249/the-irs-is-buying-an-ai-supercomputer-from-nvidia?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-15, 12:39:37](https://lobste.rs/s/gfjbhp/how_backdoor_large_language_models) - [How to Backdoor Large Language Models](https://blog.sshh.io/p/how-to-backdoor-large-language-models)
* [2025-02-15, 11:38:00](https://soylentnews.org/article.pl?sid=25/02/14/1925233&from=rss) - [Anyone Can Push Updates to the DOGE.gov Website](https://soylentnews.org/article.pl?sid=25/02/14/1925233&from=rss)
* [2025-02-15, 10:59:54](https://lobste.rs/s/lw5dea/8088_mph_final_old_vs_new_cga_other_gory) - [8088 MPH Final: Old vs. New CGA (and Other Gory Details) (2015)](https://int10h.org/blog/2015/08/8088-mph-final-old-vs-new-cga-gory-details/)
* [2025-02-15, 10:42:14](https://lobste.rs/s/wmtpwf/agit_flow_git_repo) - [Agit-Flow and git-repo](https://git-repo.info/en/2020/03/agit-flow-and-git-repo/)
* [2025-02-15, 10:07:23](https://news.ycombinator.com/item?id=43057375) - [Show HN: Kreuzberg – Modern async Python library for document text extraction](https://github.com/Goldziher/kreuzberg)
* [2025-02-15, 10:00:00](https://science.slashdot.org/story/25/02/15/0555235/eating-from-plastic-takeout-containers-can-increase-heart-failure-risk-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Eating From Plastic Takeout Containers Can Increase Heart Failure Risk, Study Finds](https://science.slashdot.org/story/25/02/15/0555235/eating-from-plastic-takeout-containers-can-increase-heart-failure-risk-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-15, 09:59:20](https://news.ycombinator.com/item?id=43057344) - [Jane Street's Figgie card game](https://www.figgie.com/)
* [2025-02-15, 09:36:53](https://lobste.rs/s/tx5ro4/ai_is_stifling_tech_adoption) - [AI is Stifling Tech Adoption](https://vale.rocks/posts/ai-is-stifling-tech-adoption)
* [2025-02-15, 07:00:00](https://science.slashdot.org/story/25/02/15/0549201/ai-used-to-design-a-multi-step-enzyme-that-can-digest-some-plastics?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [AI Used To Design a Multi-Step Enzyme That Can Digest Some Plastics](https://science.slashdot.org/story/25/02/15/0549201/ai-used-to-design-a-multi-step-enzyme-that-can-digest-some-plastics?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-15, 06:52:00](https://soylentnews.org/article.pl?sid=25/02/14/1254214&from=rss) - [RTX5090 Cable Overheats to 150 C Where Uneven Current Distribution Likely the Culprit](https://soylentnews.org/article.pl?sid=25/02/14/1254214&from=rss)
* [2025-02-15, 05:48:50](https://lobste.rs/s/qj5sba/leaking_email_any_youtube_user_for_10_000) - [Leaking the email of any YouTube user for $10,000](https://brutecat.com/articles/leaking-youtube-emails)
* [2025-02-15, 03:31:56](https://news.ycombinator.com/item?id=43055671) - [The 20 year old PSP can now connect to WPA2 WiFi Networks](https://wololo.net/2025/02/14/the-20-year-old-psp-can-now-connect-to-wpa2-wifi-networks/)
* [2025-02-15, 03:30:00](https://tech.slashdot.org/story/25/02/15/0016236/brake-pad-dust-can-be-more-toxic-than-exhaust-emissions-study-says?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Brake Pad Dust Can Be More Toxic Than Exhaust Emissions, Study Says](https://tech.slashdot.org/story/25/02/15/0016236/brake-pad-dust-can-be-more-toxic-than-exhaust-emissions-study-says?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-15, 02:08:00](https://soylentnews.org/article.pl?sid=25/02/14/1249234&from=rss) - [EU Will Put Over $200 Billion Toward AI Development](https://soylentnews.org/article.pl?sid=25/02/14/1249234&from=rss)
* [2025-02-15, 02:02:00](https://slashdot.org/story/25/02/15/006253/please-stop-inviting-ai-notetakers-to-meetings?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['Please Stop Inviting AI Notetakers To Meetings'](https://slashdot.org/story/25/02/15/006253/please-stop-inviting-ai-notetakers-to-meetings?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-15, 01:25:00](https://hardware.slashdot.org/story/25/02/14/2336232/nyc-is-giving-free-e-bikes-to-delivery-workers-using-unsafe-models?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [NYC Is Giving Free E-Bikes To Delivery Workers Using Unsafe Models](https://hardware.slashdot.org/story/25/02/14/2336232/nyc-is-giving-free-e-bikes-to-delivery-workers-using-unsafe-models?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-15, 00:02:05](https://lobste.rs/s/abkeck/hardest_working_font_manhattan) - [The hardest working font in Manhattan](https://aresluna.org/the-hardest-working-font-in-manhattan/)
* [2025-02-14, 23:10:36](https://news.ycombinator.com/item?id=43054069) - [A decade later, a decade lost (2024)](https://meyerweb.com/eric/thoughts/2024/06/07/a-decade-later-a-decade-lost/)
* [2025-02-14, 21:25:00](https://soylentnews.org/article.pl?sid=25/02/13/1833234&from=rss) - [8 Million Requests Later, We Made The SolarWinds Supply Chain Attack Look Amateur](https://soylentnews.org/article.pl?sid=25/02/13/1833234&from=rss)
* [2025-02-14, 21:21:03](https://lobste.rs/s/rsuopk/tex_typst_layout_models) - [TeX and Typst: Layout Models](https://laurmaedje.github.io/posts/layout-models/)
* [2025-02-14, 20:09:48](https://lobste.rs/s/hl00vs/type_safe_variadic_printf_without_macros) - [Type safe variadic printf, without macros](https://www.stranger.systems/posts/by-slug/type-safe-variadic-printf.html)
* [2025-02-14, 18:01:04](https://news.ycombinator.com/item?id=43051123) - [Edgware 1924: The Making of a Suburb](https://www.modernism-in-metroland.co.uk/blog/edgware-1924-the-making-of-a-suburb)
* [2025-02-14, 16:17:00](https://soylentnews.org/politics/article.pl?sid=25/02/13/1828257&from=rss) - [Judge Agrees Trump's Removal Of Health Websites Threatens The Public](https://soylentnews.org/politics/article.pl?sid=25/02/13/1828257&from=rss)
* [2025-02-14, 15:41:50](https://lobste.rs/s/t1enph/siren_call_sqlite_on_server) - [Siren Call of SQLite on the Server](https://pid1.dev/posts/siren-call-of-sqlite-on-the-server/)
* [2025-02-14, 11:53:38](https://lobste.rs/s/ei9qpl/switching_on_strings_zig) - [Switching on Strings in Zig](https://www.openmymind.net/Switching-On-Strings-In-Zig/)
* [2025-02-14, 11:34:00](https://soylentnews.org/article.pl?sid=25/02/13/1825211&from=rss) - [Earth's Inner Core is Less Solid Than Previously Thought: Study Reveals Structural Transformation](https://soylentnews.org/article.pl?sid=25/02/13/1825211&from=rss)
* [2025-02-14, 06:50:00](https://soylentnews.org/article.pl?sid=25/02/13/0155211&from=rss) - [Hackers Leak Cop Manuals for Departments Nationwide After Breaching Major Provider](https://soylentnews.org/article.pl?sid=25/02/13/0155211&from=rss)
* [2025-02-14, 02:04:00](https://soylentnews.org/article.pl?sid=25/02/13/0145233&from=rss) - [The Science of Why There's Less Passing in the Daytona 500](https://soylentnews.org/article.pl?sid=25/02/13/0145233&from=rss)
* [2025-02-13, 21:15:00](https://soylentnews.org/article.pl?sid=25/02/13/0126236&from=rss) - [Money May Have Originated Through Long Distance Trade, New Theory Suggests](https://soylentnews.org/article.pl?sid=25/02/13/0126236&from=rss)
* [2025-02-13, 17:40:29](https://news.ycombinator.com/item?id=43038794) - [Product Development Processes You Might Not Have Heard of (2022)](https://www.departmentofproduct.com/blog/product-development-processes-you-might-not-have-heard-of/)
* [2025-02-13, 16:29:00](https://soylentnews.org/article.pl?sid=25/02/12/1247251&from=rss) - [Developer Creates Endless Wikipedia Feed to Fight Algorithm Addiction](https://soylentnews.org/article.pl?sid=25/02/12/1247251&from=rss)
* [2025-02-13, 13:47:25](https://news.ycombinator.com/item?id=43035760) - [Sri Lanka scrambles to restore power after monkey causes islandwide outage](https://www.reuters.com/world/asia-pacific/sri-lanka-scrambles-restore-power-after-monkey-causes-islandwide-outage-2025-02-13/)
* [2025-02-13, 11:43:00](https://soylentnews.org/article.pl?sid=25/02/12/1237237&from=rss) - [Is the EF5 Tornado Rating Effectively Obsolete?](https://soylentnews.org/article.pl?sid=25/02/12/1237237&from=rss)
* [2025-02-13, 06:57:00](https://soylentnews.org/article.pl?sid=25/02/12/1234248&from=rss) - [A Pinch of Salt Boosts Aluminum Batteries](https://soylentnews.org/article.pl?sid=25/02/12/1234248&from=rss)
* [2025-02-13, 02:12:00](https://soylentnews.org/article.pl?sid=25/02/12/095248&from=rss) - [AI Increases Unemployment Rates in US IT Sector](https://soylentnews.org/article.pl?sid=25/02/12/095248&from=rss)
* [2025-02-12, 21:28:00](https://soylentnews.org/article.pl?sid=25/02/11/1313219&from=rss) - [Want the News Summarized Accurately?  Don't Ask an \"AI\".](https://soylentnews.org/article.pl?sid=25/02/11/1313219&from=rss)
* [2025-02-12, 16:43:00](https://soylentnews.org/article.pl?sid=25/02/11/1216252&from=rss) - [MP Materials Starts Producing Neodymium Magnets in the US](https://soylentnews.org/article.pl?sid=25/02/11/1216252&from=rss)
* [2025-02-12, 11:59:00](https://soylentnews.org/article.pl?sid=25/02/11/1210226&from=rss) - [Undergraduate Upends a 40-Year-Old Data Science Conjecture](https://soylentnews.org/article.pl?sid=25/02/11/1210226&from=rss)
* [2025-02-12, 09:54:14](https://news.ycombinator.com/item?id=43023698) - [Show HN: Letting LLMs Run a Debugger](https://github.com/mohsen1/llm-debugger-vscode-extension)
* [2025-02-12, 09:28:08](https://news.ycombinator.com/item?id=43023527) - [It's a knowledge problem Or is it?](https://josvisser.substack.com/p/its-a-knowledge-problem-or-is-it)
* [2025-02-12, 07:12:00](https://soylentnews.org/article.pl?sid=25/02/11/127212&from=rss) - [Handful of Users Claim New Nvidia GPUs Are Melting Power Cables Again](https://soylentnews.org/article.pl?sid=25/02/11/127212&from=rss)
* [2025-02-12, 02:15:17](https://news.ycombinator.com/item?id=43021044) - [TL;DW: Too Long; Didn't Watch Distill YouTube Videos to the Relevant Information](https://tldw.tube/)
* [2025-02-12, 01:29:00](https://soylentnews.org/article.pl?sid=25/02/11/122248&from=rss) - [Boeing Has Informed its Employees of Uncertainty in Future SLS Contracts](https://soylentnews.org/article.pl?sid=25/02/11/122248&from=rss)
* [2025-02-12, 00:00:28](https://news.ycombinator.com/item?id=43019975) - [Surprise Magma Chamber Growing Under Mediterranean Volcano (2023)](https://news.agu.org/press-release/surprise-magma-chamber-growing-under-mediterranean-volcano/)
