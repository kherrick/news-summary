# [News Summary](https://kherrick.github.io/news-summary/)

## Healthcare and Science Innovations

* [CT Scans Projected to Result in 100,000 New Cancers in The US](https://science.slashdot.org/story/25/04/14/2333207/ct-scans-projected-to-result-in-100000-new-cancers-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Predictions show alarming potential health consequences due to widespread use of CT scans.

* [Ethically Sourced “Spare” Human Bodies Could Revolutionize Medicine](https://soylentnews.org/article.pl?sid=25/04/14/0612230&amp;from=rss) - Novel approaches to using ethically sourced human bodies for medical research could transform healthcare.

* [Galaxies in the Deep Universe Rotate in the Same Direction](https://soylentnews.org/article.pl?sid=25/04/13/0339214&amp;from=rss) - Astrophysics discovery highlights mysterious uniformity in the rotation of galaxies.

## Technology Advancements and Challenges

* [Google’s New Ironwood Chip is 24x More Powerful Than the World’s Fastest Supercomputer](https://soylentnews.org/article.pl?sid=25/04/14/067223&amp;from=rss) - Google unveils a breakthrough processor with unprecedented computational capabilities.

* [OpenAI Unveils Coding-Focused GPT-4.1 While Phasing Out GPT-4.5](https://slashdot.org/story/25/04/14/1726250/openai-unveils-coding-focused-gpt-41-while-phasing-out-gpt-45?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - OpenAI introduces a new AI model targeted at coding, as the focus shifts away from its predecessor.

## Technology and Ethical Concerns

* [Chinese Robotaxis Have Government Black Boxes, Approach US Quality](https://tech.slashdot.org/story/25/04/14/2327229/chinese-robotaxis-have-government-black-boxes-approach-us-quality?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Controversial monitoring systems in Chinese Robotaxis deepen concerns over privacy.

* [Apple To Analyze User Data on Devices To Bolster AI Technology](https://apple.slashdot.org/story/25/04/15/0050203/apple-to-analyze-user-data-on-devices-to-bolster-ai-technology?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Apple’s latest AI improvements come with heightened scrutiny over user data processing.

## Cybersecurity and Software

* [Show HN: MCP-Shield – Detect security issues in MCP servers](https://github.com/riseandignite/mcp-shield) - A new tool to identify potential vulnerabilities in Minecraft Protocol (MCP) servers is released.

* [Hacking a Smart Home Device (2024)](https://jmswrnr.com/blog/hacking-a-smart-home-device) - A hands-on exploration of vulnerabilities in smart home technologies.

## Artificial Intelligence in Action

* [Meta Starts Using Data From EU Users To Train Its AI Models](https://meta.slashdot.org/story/25/04/14/1926259/meta-starts-using-data-from-eu-users-to-train-its-ai-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Meta faces fresh challenges in leveraging European user data for artificial intelligence advancements.

* [AI Marketing to Bypass Spam Filters](https://soylentnews.org/article.pl?sid=25/04/13/0316216&amp;from=rss) - AI capabilities are being developed to sidestep email filtering algorithms, promising a murky future for spam tactics.

## Environmental and Climate Updates

* [Climate Crisis Has Tripled Length of Deadly Ocean Heatwaves, Study Finds](https://news.slashdot.org/story/25/04/15/0148201/climate-crisis-has-tripled-length-of-deadly-ocean-heatwaves-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A detailed study reports the stark effects of climate change on ocean ecosystems.

* [‘Doom Loops’ Are Accelerating Climate Change—but We Can Break Them](https://soylentnews.org/article.pl?sid=25/04/11/1149226&amp;from=rss) - Insights into the repetitive feedback cycles worsening climate change and solutions to halt them.

## Cultural and Historical Insights

* [Aztecs Versus Mayans - Unwrapping History Clue by Clue](https://soylentnews.org/article.pl?sid=25/04/14/0550254&amp;from=rss) - A comparative study investigating the Aztecs and Mayans using modern archeological techniques.

* [Mapping the Half-Billion Connections That Allow Mice to See](https://soylentnews.org/article.pl?sid=25/04/11/1250234&amp;from=rss) - Research uncovers the intricate connectivity of neural networks responsible for rodent vision.

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

* [2025-04-15, 07:00:00](https://science.slashdot.org/story/25/04/14/2333207/ct-scans-projected-to-result-in-100000-new-cancers-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CT Scans Projected to Result in 100,000 New Cancers in The US](https://science.slashdot.org/story/25/04/14/2333207/ct-scans-projected-to-result-in-100000-new-cancers-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-15, 05:52:00](https://soylentnews.org/article.pl?sid=25/04/14/0612230&amp;from=rss) - [Ethically Sourced “Spare” Human Bodies Could Revolutionize Medicine](https://soylentnews.org/article.pl?sid=25/04/14/0612230&amp;from=rss)
* [2025-04-15, 05:15:01](https://news.ycombinator.com/item?id=43689178) - [Show HN: MCP-Shield – Detect security issues in MCP servers](https://github.com/riseandignite/mcp-shield)
* [2025-04-15, 05:00:00](https://it.slashdot.org/story/25/04/15/0259250/indian-it-faces-its-kodak-moment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Indian IT Faces Its Kodak Moment](https://it.slashdot.org/story/25/04/15/0259250/indian-it-faces-its-kodak-moment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-15, 04:29:44](https://lobste.rs/s/lsmlvf/behind_6_digit_code_building_hotp_totp) - [Behind the 6-digit code: Building HOTP and TOTP from scratch](https://blog.dogac.dev/how-do-one-time-passwords-work/)
* [2025-04-15, 04:24:26](https://news.ycombinator.com/item?id=43688962) - [The Industrialization of IT](https://benn.substack.com/p/the-industrialization-of-it)
* [2025-04-15, 04:03:23](https://lobste.rs/s/ofacpc/what_hell_is_target_triple) - [What the Hell Is a Target Triple?](https://mcyoung.xyz/2025/04/14/target-triples/)
* [2025-04-15, 03:30:00](https://tech.slashdot.org/story/25/04/14/2327229/chinese-robotaxis-have-government-black-boxes-approach-us-quality?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chinese Robotaxis Have Government Black Boxes, Approach US Quality](https://tech.slashdot.org/story/25/04/14/2327229/chinese-robotaxis-have-government-black-boxes-approach-us-quality?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-15, 03:12:55](https://news.ycombinator.com/item?id=43688658) - [Hacking a Smart Home Device (2024)](https://jmswrnr.com/blog/hacking-a-smart-home-device)
* [2025-04-15, 01:50:00](https://news.slashdot.org/story/25/04/15/0148201/climate-crisis-has-tripled-length-of-deadly-ocean-heatwaves-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Climate Crisis Has Tripled Length of Deadly Ocean Heatwaves, Study Finds](https://news.slashdot.org/story/25/04/15/0148201/climate-crisis-has-tripled-length-of-deadly-ocean-heatwaves-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-15, 01:16:28](https://lobste.rs/s/vn6j5k/async_from_scratch_2_wake_me_maybe) - [Async from scratch 2: Wake me maybe](https://natkr.com/2025-04-15-async-from-scratch-2/)
* [2025-04-15, 01:12:00](https://soylentnews.org/article.pl?sid=25/04/14/067223&amp;from=rss) - [Google’s New Ironwood Chip is 24x More Powerful Than the World’s Fastest Supercomputer](https://soylentnews.org/article.pl?sid=25/04/14/067223&amp;from=rss)
* [2025-04-15, 00:50:00](https://apple.slashdot.org/story/25/04/15/0050203/apple-to-analyze-user-data-on-devices-to-bolster-ai-technology?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple To Analyze User Data on Devices To Bolster AI Technology](https://apple.slashdot.org/story/25/04/15/0050203/apple-to-analyze-user-data-on-devices-to-bolster-ai-technology?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-15, 00:27:31](https://lobste.rs/s/snvzsl/problem_with_vibe_coding) - [The Problem with “Vibe Coding”](https://dylanbeattie.net/2025/04/11/the-problem-with-vibe-coding.html)
* [2025-04-15, 00:10:29](https://lobste.rs/s/8ghfuu/bug_bash_2025_conference_experience) - [Bug Bash 2025 Conference Experience](https://concerningquality.com/bug-bash-2025/)
* [2025-04-14, 23:43:56](https://news.ycombinator.com/item?id=43687495) - [Temu pulls its U.S. Google Shopping ads](https://searchengineland.com/temu-pulls-us-google-shopping-ads-454260)
* [2025-04-14, 23:40:00](https://mobile.slashdot.org/story/25/04/14/236246/samsung-pauses-one-ui-7-rollout-worldwide?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Samsung Pauses One UI 7 Rollout Worldwide](https://mobile.slashdot.org/story/25/04/14/236246/samsung-pauses-one-ui-7-rollout-worldwide?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-14, 23:05:01](https://lobste.rs/s/pj7iwf/stevens_hackable_ai_assistant_using) - [Stevens: a hackable AI assistant using a single SQLite table and a handful of cron jobs](https://www.geoffreylitt.com/2025/04/12/how-i-made-a-useful-ai-assistant-with-one-sqlite-table-and-a-handful-of-cron-jobs.html)
* [2025-04-14, 23:00:00](https://games.slashdot.org/story/25/04/14/2259206/risks-to-children-playing-roblox-deeply-disturbing-say-researchers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Risks To Children Playing Roblox &apos;Deeply Disturbing,&apos; Say Researchers](https://games.slashdot.org/story/25/04/14/2259206/risks-to-children-playing-roblox-deeply-disturbing-say-researchers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-14, 22:58:37](https://lobste.rs/s/ti3l0n/tidbyt_without_company) - [Tidbyt without the company](https://macwright.com/2025/04/12/tidbyt-second-life)
* [2025-04-14, 22:22:52](https://news.ycombinator.com/item?id=43686936) - [Tomb Engine](https://tombengine.com/)
* [2025-04-14, 22:10:00](https://slashdot.org/story/25/04/14/1943245/intel-to-sell-majority-stake-in-altera-for-446-billion-to-fund-revival-effort?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel To Sell Majority Stake In Altera For $4.46 Billion To Fund Revival Effort](https://slashdot.org/story/25/04/14/1943245/intel-to-sell-majority-stake-in-altera-for-446-billion-to-fund-revival-effort?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-14, 21:59:13](https://news.ycombinator.com/item?id=43686773) - [Intel sells 51% stake in Altera to private equity firm on a $8.75B valuation](https://newsroom.intel.com/corporate/intel-partner-deal-news-april2025)
* [2025-04-14, 21:30:00](https://news.slashdot.org/story/25/04/14/1937244/uk-laws-are-not-fit-for-social-media-age?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Laws Are Not &apos;Fit For Social Media Age&apos;](https://news.slashdot.org/story/25/04/14/1937244/uk-laws-are-not-fit-for-social-media-age?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-14, 21:22:48](https://lobste.rs/s/s05ols/deploying_typescript_recent_advances) - [Deploying TypeScript: recent advances and possible future directions](https://2ality.com/2025/04/deploying-typescript-present-future.html)
* [2025-04-14, 20:50:00](https://it.slashdot.org/story/25/04/14/1932207/hacked-crosswalks-in-bay-area-play-deepfake-style-messages-from-tech-billionaires?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hacked Crosswalks In Bay Area Play Deepfake-Style Messages From Tech Billionaires](https://it.slashdot.org/story/25/04/14/1932207/hacked-crosswalks-in-bay-area-play-deepfake-style-messages-from-tech-billionaires?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-14, 20:39:16](https://lobste.rs/s/ae3r4j/2025_survey_rust_gui_libraries) - [A 2025 Survey of Rust GUI Libraries](https://www.boringcactus.com/2025/04/13/2025-survey-of-rust-gui-libraries.html)
* [2025-04-14, 20:23:00](https://soylentnews.org/article.pl?sid=25/04/14/0550254&amp;from=rss) - [Aztecs Versus Mayans - Unwrapping History Clue by Clue](https://soylentnews.org/article.pl?sid=25/04/14/0550254&amp;from=rss)
* [2025-04-14, 20:10:00](https://meta.slashdot.org/story/25/04/14/1926259/meta-starts-using-data-from-eu-users-to-train-its-ai-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Starts Using Data From EU Users To Train Its AI Models](https://meta.slashdot.org/story/25/04/14/1926259/meta-starts-using-data-from-eu-users-to-train-its-ai-models?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-14, 19:30:00](https://tech.slashdot.org/story/25/04/14/1917246/nato-inks-deal-with-palantir-for-maven-ai-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NATO Inks Deal With Palantir For Maven AI System](https://tech.slashdot.org/story/25/04/14/1917246/nato-inks-deal-with-palantir-for-maven-ai-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-14, 19:29:36](https://lobste.rs/s/niz7ed/macpad_how_i_created_hybrid_mac_ipad) - [MacPad: How I Created the Hybrid Mac-iPad Laptop and Tablet That Apple Won’t Make (2024)](https://www.macstories.net/stories/macpad-how-i-created-the-hybrid-mac-ipad-laptop-and-tablet-that-apple-wont-make/)
* [2025-04-14, 18:51:00](https://it.slashdot.org/story/25/04/14/1851214/vmware-revives-its-free-esxi-hypervisor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [VMware Revives Its Free ESXi Hypervisor](https://it.slashdot.org/story/25/04/14/1851214/vmware-revives-its-free-esxi-hypervisor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-14, 18:32:08](https://news.ycombinator.com/item?id=43684560) - [What Is Entropy?](https://jasonfantl.com/posts/What-is-Entropy/)
* [2025-04-14, 18:28:50](https://news.ycombinator.com/item?id=43684536) - [Harvard&apos;s response to federal government letter demanding changes](https://www.harvard.edu/president/news/2025/the-promise-of-american-higher-education/)
* [2025-04-14, 18:14:00](https://yro.slashdot.org/story/25/04/14/1814239/eu-issues-us-bound-staff-with-burner-phones-over-spying-fears?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EU Issues US-bound Staff With Burner Phones Over Spying Fears](https://yro.slashdot.org/story/25/04/14/1814239/eu-issues-us-bound-staff-with-burner-phones-over-spying-fears?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-14, 18:04:07](https://news.ycombinator.com/item?id=43684286) - [Ask HN: Why is there no P2P streaming protocol like BitTorrent?](https://news.ycombinator.com/item?id=43684286)
* [2025-04-14, 17:59:11](https://news.ycombinator.com/item?id=43684225) - [KaiPod Learning (YC S21) Is Hiring a PM](https://www.ycombinator.com/companies/kaipod-learning/jobs/TgR2OZg-senior-product-manager)
* [2025-04-14, 17:43:32](https://news.ycombinator.com/item?id=43684009) - [Simple Web Server](https://simplewebserver.org/)
* [2025-04-14, 17:35:11](https://news.ycombinator.com/item?id=43683907) - [AudioX: Diffusion Transformer for Anything-to-Audio Generation](https://zeyuet.github.io/AudioX/)
* [2025-04-14, 17:26:00](https://slashdot.org/story/25/04/14/1726250/openai-unveils-coding-focused-gpt-41-while-phasing-out-gpt-45?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Unveils Coding-Focused GPT-4.1 While Phasing Out GPT-4.5](https://slashdot.org/story/25/04/14/1726250/openai-unveils-coding-focused-gpt-41-while-phasing-out-gpt-45?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-14, 17:16:51](https://news.ycombinator.com/item?id=43683641) - [Podman Quadlets with Podman Desktop](https://podman-desktop.io/blog/podman-quadlet)
* [2025-04-14, 17:05:39](https://lobste.rs/s/vih1t5/ssd1306_display_drivers_font_rendering) - [SSD1306 display drivers and font rendering](https://subalpinecircuits.com/ssd1306-and-font-rendering/)
* [2025-04-14, 17:01:45](https://news.ycombinator.com/item?id=43683410) - [GPT-4.1 in the API](https://openai.com/index/gpt-4-1/)
* [2025-04-14, 16:10:32](https://lobste.rs/s/koauiz/algebraic_semantics_for_machine) - [Algebraic Semantics for Machine Knitting](https://uwplse.org/2025/03/31/Algebraic-Knitting.html)
* [2025-04-14, 15:59:15](https://lobste.rs/s/tanhwa/flat_origami_is_turing_complete) - [Flat origami is Turing complete](https://arxiv.org/abs/2309.07932)
* [2025-04-14, 15:46:37](https://lobste.rs/s/9djblo/post_developer_era) - [The Post-Developer Era](https://www.joshwcomeau.com/blog/the-post-developer-era/)
* [2025-04-14, 15:41:03](https://news.ycombinator.com/item?id=43682547) - [Show HN: Zero-codegen, no-compile TypeScript type inference from Protobufs](https://github.com/nathanhleung/protobuf-ts-types)
* [2025-04-14, 15:39:00](https://soylentnews.org/article.pl?sid=25/04/14/0540259&amp;from=rss) - [A Tricky Commodore PET Repair: Tracking Down 6 1/2 Bad Chips](https://soylentnews.org/article.pl?sid=25/04/14/0540259&amp;from=rss)
* [2025-04-14, 15:37:32](https://lobste.rs/s/wesv0k/git_remote_http_is_linked_against) - [git-remote-http is linked against incompatibly licensed OpenSSL](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=1094969)
* [2025-04-14, 15:26:13](https://lobste.rs/s/jc1igy/c_20_idioms_for_parameter_packs) - [C++20 idioms for parameter packs](https://www.scs.stanford.edu/~dm/blog/param-pack.html)
* [2025-04-14, 15:03:10](https://news.ycombinator.com/item?id=43682088) - [The path to open-sourcing the DeepSeek inference engine](https://github.com/deepseek-ai/open-infra-index/tree/main/OpenSourcing_DeepSeek_Inference_Engine)
* [2025-04-14, 14:58:32](https://lobste.rs/s/m5hycn/python_is_interpreted_language_with) - [Python is an interpreted language with a compiler](https://ntietz.com/blog/python-is-an-interpreted-language-with-a-compiler/)
* [2025-04-14, 14:55:57](https://news.ycombinator.com/item?id=43682006) - [SQLite File Format Viewer](https://sqlite-internal.pages.dev)
* [2025-04-14, 14:49:49](https://lobste.rs/s/tefwoi/we_don_t_need_no_virtualization) - [We don’t need no virtualization](https://blog.snork.dev/posts/we-don-t-need-no-virtualization.html)
* [2025-04-14, 14:49:42](https://news.ycombinator.com/item?id=43681936) - [How to bike across the country](https://www.brooks.team/posts/how-to-bike-across-the-country/)
* [2025-04-14, 13:52:58](https://news.ycombinator.com/item?id=43681287) - [A hackable AI assistant using a single SQLite table and a handful of cron jobs](https://www.geoffreylitt.com/2025/04/12/how-i-made-a-useful-ai-assistant-with-one-sqlite-table-and-a-handful-of-cron-jobs)
* [2025-04-14, 13:49:11](https://lobste.rs/s/2roosx/gleam_v1_10_0_released) - [Gleam v1.10.0 released](https://gleam.run/news/global-rename-and-find-references/)
* [2025-04-14, 13:37:45](https://lobste.rs/s/lrftwb/fun_with_fsanitize_undefined_picolibc) - [Fun with -fsanitize=undefined and Picolibc](https://keithp.com/blogs/sanitizer-fun/)
* [2025-04-14, 13:18:19](https://news.ycombinator.com/item?id=43680957) - [Meta antitrust trial kicks off in federal court](https://www.axios.com/pro/tech-policy/2025/04/14/ftc-meta-antitrust-trial-kicks-off-in-federal-court)
* [2025-04-14, 13:12:00](https://news.ycombinator.com/item?id=43680899) - [DolphinGemma: How Google AI is helping decode dolphin communication](https://blog.google/technology/ai/dolphingemma/)
* [2025-04-14, 11:42:13](https://news.ycombinator.com/item?id=43680232) - [Omnom: Self-hosted bookmarking with searchable, wysiwyg snapshots](https://omnom.zone/?src=hn)
* [2025-04-14, 10:52:00](https://soylentnews.org/article.pl?sid=25/04/13/0349258&amp;from=rss) - [More Microsoft Job Cuts Could Hit Non-Coding Staff And Middle Managers](https://soylentnews.org/article.pl?sid=25/04/13/0349258&amp;from=rss)
* [2025-04-14, 10:05:40](https://lobste.rs/s/ft0sbk/zig_s_new_linkedlist_api_it_s_time_learn) - [Zig&apos;s new LinkedList API (it&apos;s time to learn @fieldParentPtr)](https://www.openmymind.net/Zigs-New-LinkedList-API/)
* [2025-04-14, 09:41:26](https://lobste.rs/s/t788y0/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/t788y0/what_are_you_doing_this_week)
* [2025-04-14, 06:27:48](https://news.ycombinator.com/item?id=43678590) - [JSLinux](https://www.bellard.org/jslinux/)
* [2025-04-14, 06:10:00](https://soylentnews.org/article.pl?sid=25/04/13/0339214&amp;from=rss) - [Galaxies in the Deep Universe Rotate in the Same Direction](https://soylentnews.org/article.pl?sid=25/04/13/0339214&amp;from=rss)
* [2025-04-14, 02:58:45](https://lobste.rs/s/ebab2d/ditch_diy_drama_why_use_fedify_instead) - [Ditch the DIY Drama: Why Use Fedify Instead of Building ActivityPub from Scratch?](https://hackers.pub/@hongminhee/2025/why-use-fedify)
* [2025-04-14, 01:20:00](https://soylentnews.org/article.pl?sid=25/04/13/0327231&amp;from=rss) - [Ukraine&apos;s Autonomous Killer Drones Defeat Electronic Warfare](https://soylentnews.org/article.pl?sid=25/04/13/0327231&amp;from=rss)
* [2025-04-14, 01:09:41](https://lobste.rs/s/epsuly/i_bought_mac) - [I bought a Mac](https://loganius.org/2025/04/i-bought-a-mac/)
* [2025-04-13, 21:16:43](https://lobste.rs/s/ns3ugs/ship_software_does_nothing) - [Ship Software That Does Nothing](https://kerrick.blog/articles/2025/ship-software-that-does-nothing/)
* [2025-04-13, 20:35:00](https://soylentnews.org/article.pl?sid=25/04/13/0316216&amp;from=rss) - [AI Marketing to Bypass Spam Filters](https://soylentnews.org/article.pl?sid=25/04/13/0316216&amp;from=rss)
* [2025-04-13, 15:50:00](https://soylentnews.org/article.pl?sid=25/04/13/0312208&amp;from=rss) - [Ubisoft Argues Players Don&apos;t Own Their Games in Wake of The Crew Lawsuit](https://soylentnews.org/article.pl?sid=25/04/13/0312208&amp;from=rss)
* [2025-04-13, 11:06:00](https://soylentnews.org/article.pl?sid=25/04/13/037236&amp;from=rss) - [The U.S. is Building a Fuel Depot in Space](https://soylentnews.org/article.pl?sid=25/04/13/037236&amp;from=rss)
* [2025-04-13, 06:22:00](https://soylentnews.org/article.pl?sid=25/04/13/033235&amp;from=rss) - [Germany, Ukraine Start Ramping Up Use of European Starlink Alternative](https://soylentnews.org/article.pl?sid=25/04/13/033235&amp;from=rss)
* [2025-04-13, 01:40:00](https://soylentnews.org/article.pl?sid=25/04/11/132246&amp;from=rss) - [Brainpower Boosted by Tapping Out a Specific Rhythm, Study Finds](https://soylentnews.org/article.pl?sid=25/04/11/132246&amp;from=rss)
* [2025-04-13, 00:16:34](https://news.ycombinator.com/item?id=43668986) - [Laser Launch into Orbit](http://toughsf.blogspot.com/2017/03/laser-launch-into-orbit.html)
* [2025-04-12, 20:56:00](https://soylentnews.org/article.pl?sid=25/04/11/1259205&amp;from=rss) - [How The Pentagon Is Adapting To China&apos;s Technological Rise](https://soylentnews.org/article.pl?sid=25/04/11/1259205&amp;from=rss)
* [2025-04-12, 16:11:00](https://soylentnews.org/article.pl?sid=25/04/11/1254254&amp;from=rss) - [Rare Crystal Shape Found to Increase the Strength of 3D-Printed Metal](https://soylentnews.org/article.pl?sid=25/04/11/1254254&amp;from=rss)
* [2025-04-12, 11:28:00](https://soylentnews.org/article.pl?sid=25/04/11/1250234&amp;from=rss) - [Mapping the Half-Billion Connections That Allow Mice to See](https://soylentnews.org/article.pl?sid=25/04/11/1250234&amp;from=rss)
* [2025-04-12, 06:43:00](https://soylentnews.org/article.pl?sid=25/04/11/1245213&amp;from=rss) - [Commission Targets in-Game Currency in Children&apos;s Video Games](https://soylentnews.org/article.pl?sid=25/04/11/1245213&amp;from=rss)
* [2025-04-12, 06:12:09](https://news.ycombinator.com/item?id=43661801) - [ASCII Lookup Utility in Ada](https://coniferproductions.com/ada/ohyes/ascii-lookup-utility/)
* [2025-04-12, 01:57:00](https://soylentnews.org/article.pl?sid=25/04/11/1149226&amp;from=rss) - [&apos;Doom Loops&apos; Are Accelerating Climate Change—but We Can Break Them](https://soylentnews.org/article.pl?sid=25/04/11/1149226&amp;from=rss)
* [2025-04-11, 21:13:00](https://soylentnews.org/article.pl?sid=25/04/11/1143202&amp;from=rss) - [AI Fueled Minority Report](https://soylentnews.org/article.pl?sid=25/04/11/1143202&amp;from=rss)
* [2025-04-11, 20:52:32](https://news.ycombinator.com/item?id=43658417) - [W65C832 in an FPGA](https://www.mikekohn.net/micro/w65c832_fpga.php)
* [2025-04-11, 17:38:00](https://soylentnews.org/article.pl?sid=25/04/11/1330214&amp;from=rss) - [Soylent News Could Use a stripe.js Module](https://soylentnews.org/article.pl?sid=25/04/11/1330214&amp;from=rss)
* [2025-04-11, 17:26:49](https://news.ycombinator.com/item?id=43656267) - [The Wisconsin cartographer who mapped Tolkien&apos;s fantasy world](https://www.wpr.org/news/wisconsin-cartographer-karen-wynn-fonstad-mapped-tolkien-fantasy-world-oshkosh)
* [2025-04-11, 16:30:00](https://soylentnews.org/article.pl?sid=25/04/10/035221&amp;from=rss) - [GlobalFoundries Mulls UMC Takeover in Effort Dubbed &apos;Project Ultron&apos;](https://soylentnews.org/article.pl?sid=25/04/10/035221&amp;from=rss)
* [2025-04-11, 13:06:17](https://news.ycombinator.com/item?id=43653322) - [Behind the 6-digit code: Building HOTP and TOTP from scratch](https://blog.dogac.dev/how-do-one-time-passwords-work/)
* [2025-04-11, 11:45:00](https://soylentnews.org/article.pl?sid=25/04/10/0256252&amp;from=rss) - [Physicists Have Confirmed a New Mismatch Between Matter and Antimatter](https://soylentnews.org/article.pl?sid=25/04/10/0256252&amp;from=rss)
* [2025-04-11, 06:56:00](https://soylentnews.org/article.pl?sid=25/04/10/0249201&amp;from=rss) - [Aptera Solar Assisted Car - 20 Year Update](https://soylentnews.org/article.pl?sid=25/04/10/0249201&amp;from=rss)
* [2025-04-11, 03:50:33](https://news.ycombinator.com/item?id=43650344) - [How to speed up US passenger rail, without bullet trains](https://www.bloomberg.com/news/articles/2025-04-10/how-to-speed-up-us-passenger-rail-without-bullet-trains)
* [2025-04-11, 02:09:00](https://soylentnews.org/article.pl?sid=25/04/09/1511216&amp;from=rss) - [Framework Halts Sales of Select Laptops in the US Amid Tariff Changes](https://soylentnews.org/article.pl?sid=25/04/09/1511216&amp;from=rss)
