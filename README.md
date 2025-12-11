# [News Summary](https://kherrick.github.io/news-summary/)

## Advancements in Artificial Intelligence

* [GPT-5.2 Arrives as OpenAI Scrambles To Respond To Gemini 3's Gains](https://slashdot.org/story/25/12/11/1844246/gpt-52-arrives-as-openai-scrambles-to-respond-to-gemini-3s-gains?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - OpenAI releases GPT-5.2 as competition from Gemini 3 heats up.

* [Disney Puts $1 Billion Into OpenAI, Licenses 200+ Characters for AI-Generated Videos and Images](https://slashdot.org/story/25/12/11/1522244/disney-puts-1-billion-into-openai-licenses-200-characters-for-ai-generated-videos-and-images?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Disney's billion-dollar investment focuses on AI video and image generation featuring licensed characters.

* [AI Hackers Are Coming Dangerously Close to Beating Humans](https://it.slashdot.org/story/25/12/11/1613223/ai-hackers-are-coming-dangerously-close-to-beating-humans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - AI tools demonstrate impressive capabilities in cybersecurity competitions.

* [New OpenAI Models Likely Pose 'High' Cybersecurity Risk, Company Says](https://it.slashdot.org/story/25/12/11/0040221/new-openai-models-likely-pose-high-cybersecurity-risk-company-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - OpenAI identifies cybersecurity risks in its latest models.

## Technology and Development Innovations

* [Let’s Embed a Go Program into the Linux Kernel](https://sigma-star.at/blog/2023/07/embedded-go-prog/) - Exploring the integration of Go programming language within the Linux kernel.

* [Announcing Rust 1.92.0](https://blog.rust-lang.org/2025/12/11/Rust-1.92.0) - A new version of Rust with notable features and enhancements is released.

* [Litestream VFS](https://fly.io/blog/litestream-vfs/) - A deep dive on Litestream VFS, a new way to manage SQLite replication.

* [Deprecate Like You Mean It](https://entropicthoughts.com/deprecate-like-you-mean-it) - Strategies for effectively deprecating outdated software features.

* [Show HN: SIM – Apache-2.0 n8n alternative](https://github.com/simstudioai/sim) - An open-source alternative to workflows and automation tools.

## Entertainment and Media Trends

* [HELLDIVERS 2 - 85% reduction in install size with minimal performance impact](https://store.steampowered.com/news/app/553850/view/491583942944621371) - A significant optimization of the popular game HELLDIVERS 2.

* [The Game Awards Are Losing Their Luster](https://games.slashdot.org/story/25/12/11/1737204/the-game-awards-are-losing-their-luster?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Discussion on the declining relevance of The Game Awards.

* [Opera Wants You To Pay $20 a Month For Its AI Browser](https://tech.slashdot.org/story/25/12/11/1430237/opera-wants-you-to-pay-20-a-month-for-its-ai-browser?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Opera introduces a subscription model for its AI-enhanced browser.

* [ChatGPT Is Apple's Most Downloaded App of 2025](https://apple.slashdot.org/story/25/12/10/2250214/chatgpt-is-apples-most-downloaded-app-of-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The AI app dominates download charts for Apple users.

## Cybersecurity and Data Privacy

* [Over 10,000 Docker Hub images found leaking credentials, auth keys](https://www.bleepingcomputer.com/news/security/over-10-000-docker-hub-images-found-leaking-credentials-auth-keys/) - Widespread security flaws uncovered in Docker Hub images.

* [College Campuses Have Become a Front Line in America's Sports-Betting Boom](https://news.slashdot.org/story/25/12/11/187218/college-campuses-have-become-a-front-line-in-americas-sports-betting-boom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Analysis of college campuses as hotspots for sports betting controversies.

* [Days since last GitHub incident](https://github-incidents.pages.dev/) - Public tracker for GitHub outages highlights reliability concerns.

* [Launch HN: BrowserBook (YC F24) – IDE for deterministic browser automation](https://news.ycombinator.com/item?id=46232434) - A deterministic approach to secure browser automation.

* [AI Favors Texts Written by Other AIs, Even When They’re Worse Than Human Ones](https://soylentnews.org/article.pl?sid=25/12/10/1242208&amp;from=rss) - AI content preferences could distort online information trends.

## Science, Space, and Environmental Concerns

* [NASA Loses Contact With MAVEN Mars Orbiter](https://science.slashdot.org/story/25/12/11/0026246/nasa-loses-contact-with-maven-mars-orbiter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Contact lost with the MAVEN orbiter, a critical scientific mission.

* [Why Switzerland Is Weighing a 10 Million Population Limit](https://news.slashdot.org/story/25/12/11/1639230/why-switzerland-is-weighing-a-10-million-population-limit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Switzerland debates a population cap to address sustainability.

* [An Orbital House of Cards: Frequent Megaconstellation Close Conjunctions](https://arxiv.org/abs/2512.09643) - Potential risks posed by dense satellite networks are evaluated.

* [Proton Launches Encrypted Sheets as a Privacy-First Alternative to Google, Microsoft Excel](https://soylentnews.org/article.pl?sid=25/12/10/0213247&amp;from=rss) - A privacy-focused alternative to mainstream office software.

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

* [2025-12-11, 18:45:00](https://slashdot.org/story/25/12/11/1844246/gpt-52-arrives-as-openai-scrambles-to-respond-to-gemini-3s-gains?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GPT-5.2 Arrives as OpenAI Scrambles To Respond To Gemini 3&apos;s Gains](https://slashdot.org/story/25/12/11/1844246/gpt-52-arrives-as-openai-scrambles-to-respond-to-gemini-3s-gains?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-11, 18:34:59](https://lobste.rs/s/djfvzj/helldivers_2_85_reduction_install_size) - [HELLDIVERS 2 - 85% reduction in install size with minimal performance impact](https://store.steampowered.com/news/app/553850/view/491583942944621371)
* [2025-12-11, 18:18:44](https://lobste.rs/s/ozj9kp/over_10_000_docker_hub_images_found) - [Over 10,000 Docker Hub images found leaking credentials, auth keys](https://www.bleepingcomputer.com/news/security/over-10-000-docker-hub-images-found-leaking-credentials-auth-keys/)
* [2025-12-11, 18:17:19](https://news.ycombinator.com/item?id=46234920) - [Rivian Unveils Custom Silicon, R2 Lidar Roadmap, and Universal Hands Free](https://riviantrackr.com/news/rivian-unveils-custom-silicon-r2-lidar-roadmap-universal-hands-free-and-its-next-gen-autonomy-platform/)
* [2025-12-11, 18:12:43](https://news.ycombinator.com/item?id=46234874) - [GPT-5.2](https://openai.com/index/introducing-gpt-5-2/)
* [2025-12-11, 18:10:00](https://news.slashdot.org/story/25/12/11/187218/college-campuses-have-become-a-front-line-in-americas-sports-betting-boom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [College Campuses Have Become a Front Line in America&apos;s Sports-Betting Boom](https://news.slashdot.org/story/25/12/11/187218/college-campuses-have-become-a-front-line-in-americas-sports-betting-boom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-11, 18:06:42](https://news.ycombinator.com/item?id=46234806) - [Programmers and software developers lost the plot on naming their tools](https://larr.net/p/namings.html)
* [2025-12-11, 18:05:55](https://lobste.rs/s/qhairc/programmers_software_developers_lost) - [Programmers and software developers lost the plot on naming their tools](https://larr.net/p/namings.html)
* [2025-12-11, 18:04:47](https://news.ycombinator.com/item?id=46234788) - [GPT-5.2](https://platform.openai.com/docs/guides/latest-model)
* [2025-12-11, 17:59:30](https://lobste.rs/s/p20st3/litestream_vfs) - [Litestream VFS](https://fly.io/blog/litestream-vfs/)
* [2025-12-11, 17:59:10](https://news.ycombinator.com/item?id=46234710) - [Litestream VFS](https://fly.io/blog/litestream-vfs/)
* [2025-12-11, 17:36:00](https://games.slashdot.org/story/25/12/11/1737204/the-game-awards-are-losing-their-luster?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Game Awards Are Losing Their Luster](https://games.slashdot.org/story/25/12/11/1737204/the-game-awards-are-losing-their-luster?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-11, 17:28:05](https://lobste.rs/s/ueglwk/cosmic_desktop_is_fantastic_first_draft) - [Cosmic Desktop is a fantastic first draft](https://www.youtube.com/watch?v=ob-Y77kuVwM)
* [2025-12-11, 17:20:11](https://news.ycombinator.com/item?id=46234186) - [Show HN: SIM – Apache-2.0 n8n alternative](https://github.com/simstudioai/sim)
* [2025-12-11, 16:52:37](https://news.ycombinator.com/item?id=46233798) - [Days since last GitHub incident](https://github-incidents.pages.dev/)
* [2025-12-11, 16:44:00](https://news.slashdot.org/story/25/12/11/1639230/why-switzerland-is-weighing-a-10-million-population-limit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Switzerland Is Weighing a 10 Million Population Limit](https://news.slashdot.org/story/25/12/11/1639230/why-switzerland-is-weighing-a-10-million-population-limit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-11, 16:35:48](https://news.ycombinator.com/item?id=46233570) - [Things I want to say to my boss](https://www.ithoughtaboutthatalot.com/2025/the-things-i-want-to-say-to-my-boss)
* [2025-12-11, 16:33:14](https://lobste.rs/s/3ejc1u/announcing_rust_1_92_0) - [Announcing Rust 1.92.0](https://blog.rust-lang.org/2025/12/11/Rust-1.92.0)
* [2025-12-11, 16:13:00](https://it.slashdot.org/story/25/12/11/1613223/ai-hackers-are-coming-dangerously-close-to-beating-humans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Hackers Are Coming Dangerously Close to Beating Humans](https://it.slashdot.org/story/25/12/11/1613223/ai-hackers-are-coming-dangerously-close-to-beating-humans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-11, 15:59:33](https://news.ycombinator.com/item?id=46233009) - [Show HN: GPULlama3.java Llama Compilied to PTX/OpenCL Now Integrated in Quarkus](https://news.ycombinator.com/item?id=46233009)
* [2025-12-11, 15:50:42](https://lobste.rs/s/suc61a/deprecate_like_you_mean_it) - [Deprecate Like You Mean It](https://entropicthoughts.com/deprecate-like-you-mean-it)
* [2025-12-11, 15:36:32](https://lobste.rs/s/0eg7uy/application_logging_python_recipes_for) - [Application Logging in Python: Recipes for Observability](https://www.dash0.com/guides/logging-in-python)
* [2025-12-11, 15:31:09](https://lobste.rs/s/jecsli/google_s_code_review_pracitices) - [Google’s code review pracitices](https://google.github.io/eng-practices/)
* [2025-12-11, 15:22:00](https://slashdot.org/story/25/12/11/1522244/disney-puts-1-billion-into-openai-licenses-200-characters-for-ai-generated-videos-and-images?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Disney Puts $1 Billion Into OpenAI, Licenses 200+ Characters for AI-Generated Videos and Images](https://slashdot.org/story/25/12/11/1522244/disney-puts-1-billion-into-openai-licenses-200-characters-for-ai-generated-videos-and-images?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-11, 15:18:51](https://news.ycombinator.com/item?id=46232434) - [Launch HN: BrowserBook (YC F24) – IDE for deterministic browser automation](https://news.ycombinator.com/item?id=46232434)
* [2025-12-11, 15:07:00](https://soylentnews.org/article.pl?sid=25/12/10/1242208&amp;from=rss) - [AI Favors Texts Written by Other AIs, Even When They&apos;re Worse Than Human Ones](https://soylentnews.org/article.pl?sid=25/12/10/1242208&amp;from=rss)
* [2025-12-11, 15:01:44](https://news.ycombinator.com/item?id=46232220) - [An Orbital House of Cards: Frequent Megaconstellation Close Conjunctions](https://arxiv.org/abs/2512.09643)
* [2025-12-11, 14:45:00](https://tech.slashdot.org/story/25/12/11/1430237/opera-wants-you-to-pay-20-a-month-for-its-ai-browser?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Opera Wants You To Pay $20 a Month For Its AI Browser](https://tech.slashdot.org/story/25/12/11/1430237/opera-wants-you-to-pay-20-a-month-for-its-ai-browser?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-11, 14:30:49](https://lobste.rs/s/7zwc3z/pragmatic_guide_modern_css_colours_part) - [A pragmatic guide to modern CSS colours - part two](https://piccalil.li/blog/a-pragmatic-guide-to-modern-css-colours-part-two/)
* [2025-12-11, 14:30:28](https://news.ycombinator.com/item?id=46231829) - [Pop Goes the Population Count?](https://xania.org/202512/11-pop-goes-the-weasel-er-count)
* [2025-12-11, 14:12:14](https://news.ycombinator.com/item?id=46231585) - [Disney making $1B investment in OpenAI, will allow characters on Sora AI](https://www.cnbc.com/2025/12/11/disney-openai-sora-characters-video.html)
* [2025-12-11, 14:05:00](https://news.slashdot.org/story/25/12/11/145213/us-could-ask-foreign-tourists-for-five-year-social-media-history-before-entry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Could Ask Foreign Tourists For Five-Year Social Media History Before Entry](https://news.slashdot.org/story/25/12/11/145213/us-could-ask-foreign-tourists-for-five-year-social-media-history-before-entry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-11, 13:45:08](https://news.ycombinator.com/item?id=46231274) - [Craft software that makes people feel something](https://rapha.land/craft-software-that-makes-people-feel-something/)
* [2025-12-11, 13:00:00](https://it.slashdot.org/story/25/12/11/0040221/new-openai-models-likely-pose-high-cybersecurity-risk-company-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New OpenAI Models Likely Pose &apos;High&apos; Cybersecurity Risk, Company Says](https://it.slashdot.org/story/25/12/11/0040221/new-openai-models-likely-pose-high-cybersecurity-risk-company-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-11, 12:48:49](https://lobste.rs/s/x49jb2/let_s_embed_go_program_into_linux_kernel) - [Let&apos;s Embed a Go Program into the Linux Kernel](https://sigma-star.at/blog/2023/07/embedded-go-prog/)
* [2025-12-11, 10:25:00](https://soylentnews.org/article.pl?sid=25/12/10/0213247&amp;from=rss) - [Proton Launches Encrypted Sheets as a Privacy-First Alternative to Google, Microsoft Excel](https://soylentnews.org/article.pl?sid=25/12/10/0213247&amp;from=rss)
* [2025-12-11, 10:00:00](https://science.slashdot.org/story/25/12/11/0034259/sperm-donor-with-cancer-causing-gene-fathered-nearly-200-children-across-europe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sperm Donor With Cancer-Causing Gene Fathered Nearly 200 Children Across Europe](https://science.slashdot.org/story/25/12/11/0034259/sperm-donor-with-cancer-causing-gene-fathered-nearly-200-children-across-europe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-11, 09:54:54](https://lobste.rs/s/kirs9q/mmap_go_considered_harmful) - [mmap in Go considered harmful](https://valyala.medium.com/mmap-in-go-considered-harmful-d92a25cb161d)
* [2025-12-11, 09:51:47](https://news.ycombinator.com/item?id=46229467) - [A “frozen” dictionary for Python](https://lwn.net/SubscriberLink/1047238/25c270b077849dc0/)
* [2025-12-11, 08:35:31](https://lobste.rs/s/wcw4si/cost_closure_c) - [The Cost Of a Closure in C](https://thephd.dev/the-cost-of-a-closure-in-c-c2y)
* [2025-12-11, 07:21:33](https://news.ycombinator.com/item?id=46228597) - [The Cost of a Closure in C](https://thephd.dev/the-cost-of-a-closure-in-c-c2y)
* [2025-12-11, 07:00:00](https://science.slashdot.org/story/25/12/11/0026246/nasa-loses-contact-with-maven-mars-orbiter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Loses Contact With MAVEN Mars Orbiter](https://science.slashdot.org/story/25/12/11/0026246/nasa-loses-contact-with-maven-mars-orbiter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-11, 05:48:00](https://soylentnews.org/article.pl?sid=25/12/10/0211215&amp;from=rss) - [This German State Decides to Save €15 Million Each Year By Kicking Out Microsoft for Open Source](https://soylentnews.org/article.pl?sid=25/12/10/0211215&amp;from=rss)
* [2025-12-11, 05:11:03](https://lobste.rs/s/liwan7/fish_alpinism) - [Fish Alpinism](https://triapul.cz/_/1765291397)
* [2025-12-11, 03:30:00](https://apple.slashdot.org/story/25/12/10/2250214/chatgpt-is-apples-most-downloaded-app-of-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ChatGPT Is Apple&apos;s Most Downloaded App of 2025](https://apple.slashdot.org/story/25/12/10/2250214/chatgpt-is-apples-most-downloaded-app-of-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-11, 01:18:55](https://news.ycombinator.com/item?id=46226483) - [Patterns.dev](https://www.patterns.dev/)
* [2025-12-11, 00:52:00](https://soylentnews.org/article.pl?sid=25/12/10/027248&amp;from=rss) - [Chattanooga&apos;s Municipal Fiber Network Has Delivered $5.3 Billion in Community Benefits](https://soylentnews.org/article.pl?sid=25/12/10/027248&amp;from=rss)
* [2025-12-11, 00:50:00](https://tech.slashdot.org/story/25/12/10/2245217/operation-bluebird-wants-to-relaunch-twitter-for-a-new-social-network?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Operation Bluebird Wants To Relaunch &apos;Twitter&apos; For a New Social Network](https://tech.slashdot.org/story/25/12/10/2245217/operation-bluebird-wants-to-relaunch-twitter-for-a-new-social-network?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-11, 00:10:00](https://news.slashdot.org/story/25/12/10/2238215/google-faces-fines-over-google-play-if-it-doesnt-make-more-concessions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Faces Fines Over Google Play If It Doesn&apos;t Make More Concessions](https://news.slashdot.org/story/25/12/10/2238215/google-faces-fines-over-google-play-if-it-doesnt-make-more-concessions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-10, 23:52:09](https://lobste.rs/s/ppjpwn/nature_s_many_attempts_evolve_nostr) - [Nature&apos;s many attempts to evolve a Nostr](https://newsletter.squishy.computer/p/natures-many-attempts-to-evolve-a)
* [2025-12-10, 23:30:00](https://tech.slashdot.org/story/25/12/10/2148259/india-proposes-charging-openai-google-for-training-ai-on-copyrighted-content?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [India Proposes Charging OpenAI, Google For Training AI On Copyrighted Content](https://tech.slashdot.org/story/25/12/10/2148259/india-proposes-charging-openai-google-for-training-ai-on-copyrighted-content?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-10, 23:10:02](https://lobste.rs/s/sibl0p/using_edge_detection_preserve) - [Using edge detection to preserve significant features while downsampling](http://yogthos.net/pixel-mosaic.html)
* [2025-12-10, 21:09:09](https://lobste.rs/s/ufudxi/useful_patterns_for_building_html_tools) - [Useful patterns for building HTML tools](https://simonwillison.net/2025/Dec/10/html-tools/)
* [2025-12-10, 20:29:12](https://news.ycombinator.com/item?id=46223311) - [Getting a Gemini API key is an exercise in frustration](https://ankursethi.com/blog/gemini-api-key-frustration/)
* [2025-12-10, 20:11:00](https://soylentnews.org/article.pl?sid=25/12/10/023246&amp;from=rss) - [Planned Satellite Constellations May Swamp Future Orbiting Telescopes](https://soylentnews.org/article.pl?sid=25/12/10/023246&amp;from=rss)
* [2025-12-10, 19:42:08](https://lobste.rs/s/a9wxqv/glic_turn_any_npm_library_into_command) - [glic: Turn any (npm) library into a command-line utility](https://github.com/vagos/glic)
* [2025-12-10, 19:36:04](https://lobste.rs/s/pbthr7/maybe_we_don_t_need_server) - [Maybe we don&apos;t need a server](https://lecaro.me/20251203-maybe-we-do-not-need-a-server.html)
* [2025-12-10, 19:26:06](https://lobste.rs/s/v5wieg/cdktf_has_been_deprecated) - [CDKTF has been deprecated](https://github.com/hashicorp/terraform-cdk/commit/a0c56138e2b4c7b6c128bd7ba08a8e317df852af)
* [2025-12-10, 18:22:34](https://lobste.rs/s/fzfas8/compressing_embedded_files_go) - [Compressing embedded files in Go](https://vincent.bernat.ch/en/blog/2025-go-embed-compressed)
* [2025-12-10, 17:23:53](https://news.ycombinator.com/item?id=46220540) - [Auto-grading decade-old Hacker News discussions with hindsight](https://karpathy.bearblog.dev/auto-grade-hn/)
* [2025-12-10, 16:03:47](https://lobste.rs/s/foxvd3/size_life) - [Size of Life](https://neal.fun/size-of-life/)
* [2025-12-10, 16:02:57](https://news.ycombinator.com/item?id=46219346) - [Size of Life](https://neal.fun/size-of-life/)
* [2025-12-10, 15:25:00](https://soylentnews.org/article.pl?sid=25/12/08/1621249&amp;from=rss) - [Germany Bets Billions on Nuclear Fusion for Energy Future](https://soylentnews.org/article.pl?sid=25/12/08/1621249&amp;from=rss)
* [2025-12-10, 10:43:00](https://soylentnews.org/article.pl?sid=25/12/08/1614203&amp;from=rss) - [A Therapeutic HPV Vaccine Shrank Cervical Tumors in Mice](https://soylentnews.org/article.pl?sid=25/12/08/1614203&amp;from=rss)
* [2025-12-10, 07:04:32](https://lobste.rs/s/h7a3xy/stop_breaking_tls) - [Stop Breaking TLS](https://www.markround.com/blog/2025/12/09/stop-breaking-tls/)
* [2025-12-10, 06:09:43](https://lobste.rs/s/bcz0ro/how_google_maps_quietly_allocates) - [How Google Maps quietly allocates survival across London’s restaurants - and how I built a dashboard to see through it](https://laurenleek.substack.com/p/how-google-maps-quietly-allocates)
* [2025-12-10, 05:52:00](https://soylentnews.org/article.pl?sid=25/12/08/1611257&amp;from=rss) - [Zig Quits GitHub, Says Microsoft&apos;s AI Obsession Has Ruined the Service](https://soylentnews.org/article.pl?sid=25/12/08/1611257&amp;from=rss)
* [2025-12-10, 04:25:28](https://lobste.rs/s/otc3ak/rust_kernel_is_no_longer_experimental) - [Rust in the kernel is no longer experimental](https://lwn.net/Articles/1049831/)
* [2025-12-10, 01:09:00](https://soylentnews.org/article.pl?sid=25/12/08/0456233&amp;from=rss) - [This Cellular Trick Helps Cancer Spread, but Could Also Stop It](https://soylentnews.org/article.pl?sid=25/12/08/0456233&amp;from=rss)
* [2025-12-09, 20:23:00](https://soylentnews.org/article.pl?sid=25/12/08/0455213&amp;from=rss) - [Samsung&apos;s First Tri-Fold Phone is Here: Everything You Need to Know](https://soylentnews.org/article.pl?sid=25/12/08/0455213&amp;from=rss)
* [2025-12-09, 16:10:37](https://news.ycombinator.com/item?id=46206591) - [Show HN: Local Privacy Firewall-blocks PII and secrets before ChatGPT sees them](https://github.com/privacyshield-ai/privacy-firewall)
* [2025-12-09, 15:39:00](https://soylentnews.org/article.pl?sid=25/12/08/0152232&amp;from=rss) - [Complex Life Started Nearly a Billion Years Earlier Than We Thought](https://soylentnews.org/article.pl?sid=25/12/08/0152232&amp;from=rss)
* [2025-12-09, 10:51:00](https://soylentnews.org/article.pl?sid=25/12/08/0146206&amp;from=rss) - [US Wants Laws to Force App Store Age Checks, Despite Apple&apos;s Existing Protections](https://soylentnews.org/article.pl?sid=25/12/08/0146206&amp;from=rss)
* [2025-12-09, 10:20:02](https://news.ycombinator.com/item?id=46203343) - [How Google Maps allocates survival across London&apos;s restaurants](https://laurenleek.substack.com/p/how-google-maps-quietly-allocates)
* [2025-12-09, 06:03:00](https://soylentnews.org/article.pl?sid=25/12/08/0143259&amp;from=rss) - [Common Desktop Environment \&quot;CDE\&quot; 2.5.3 Released After Two Years](https://soylentnews.org/article.pl?sid=25/12/08/0143259&amp;from=rss)
* [2025-12-09, 01:21:00](https://soylentnews.org/article.pl?sid=25/12/07/1532244&amp;from=rss) - [Improved Truncated Wigner Approximation Makes Quantum Calcs on Classical Computers More Accessible](https://soylentnews.org/article.pl?sid=25/12/07/1532244&amp;from=rss)
* [2025-12-08, 21:33:09](https://news.ycombinator.com/item?id=46197930) - [Show HN: I&apos;ve asked Claude to improve codebase quality 200 times](https://gricha.dev/blog/the-highest-quality-codebase)
* [2025-12-08, 20:34:00](https://soylentnews.org/article.pl?sid=25/12/07/1527246&amp;from=rss) - [San Francisco Sues Nation&apos;s Top Food Manufacturers Over Ultraprocessed Foods](https://soylentnews.org/article.pl?sid=25/12/07/1527246&amp;from=rss)
* [2025-12-08, 15:45:00](https://soylentnews.org/article.pl?sid=25/12/07/1521257&amp;from=rss) - [Soaring DDR5 Prices Lead to Falling Motherboard Sales and Calls for Gamers to Boycott RAM](https://soylentnews.org/article.pl?sid=25/12/07/1521257&amp;from=rss)
* [2025-12-08, 12:46:50](https://news.ycombinator.com/item?id=46191597) - [How the Brain Parses Language](https://www.quantamagazine.org/the-polyglot-neuroscientist-resolving-how-the-brain-parses-language-20251205/)
* [2025-12-08, 11:04:00](https://soylentnews.org/article.pl?sid=25/12/07/1514234&amp;from=rss) - [Debian&apos;s APT Will Require a Rust Compiler](https://soylentnews.org/article.pl?sid=25/12/07/1514234&amp;from=rss)
* [2025-12-08, 06:24:00](https://soylentnews.org/article.pl?sid=25/12/07/1510243&amp;from=rss) - [New Jolla Phone Now Available for Pre-Order as an Independent Linux Phone](https://soylentnews.org/article.pl?sid=25/12/07/1510243&amp;from=rss)
* [2025-12-08, 02:06:00](https://soylentnews.org/article.pl?sid=25/12/08/0147224&amp;from=rss) - [Recreating the Lost SDK for a 42-Year-Old Operating System: VisiCorp Visi on](https://soylentnews.org/article.pl?sid=25/12/08/0147224&amp;from=rss)
* [2025-12-08, 01:38:00](https://soylentnews.org/article.pl?sid=25/12/06/1419220&amp;from=rss) - [Waymo Drives Straight Into Active Police Scene, Ignores Chaos](https://soylentnews.org/article.pl?sid=25/12/06/1419220&amp;from=rss)
* [2025-12-07, 20:50:00](https://soylentnews.org/article.pl?sid=25/12/06/1415242&amp;from=rss) - [Syntax Hacking: Researchers Discover Sentence Structure Can Bypass AI Safety Rules](https://soylentnews.org/article.pl?sid=25/12/06/1415242&amp;from=rss)
* [2025-12-07, 16:07:00](https://soylentnews.org/article.pl?sid=25/12/06/140210&amp;from=rss) - [Why People Keep Flocking to Linux in 2025 (and It&apos;s Not Just to Escape Windows)](https://soylentnews.org/article.pl?sid=25/12/06/140210&amp;from=rss)
* [2025-12-07, 11:26:00](https://soylentnews.org/article.pl?sid=25/12/05/0735244&amp;from=rss) - [UW Nobel Winner&apos;s Lab Releases Most Powerful Protein Design Tool Yet](https://soylentnews.org/article.pl?sid=25/12/05/0735244&amp;from=rss)
* [2025-12-07, 06:42:00](https://soylentnews.org/article.pl?sid=25/12/05/0733258&amp;from=rss) - [FreeBSD 15.0 Released With Pkgbase - and With It Come Several Major Changes](https://soylentnews.org/article.pl?sid=25/12/05/0733258&amp;from=rss)
* [2025-12-07, 01:59:00](https://soylentnews.org/article.pl?sid=25/12/05/0730234&amp;from=rss) - [IBM CEO Warns That Ongoing Trillion-Dollar AI Data Center Buildout is Unsustainable](https://soylentnews.org/article.pl?sid=25/12/05/0730234&amp;from=rss)
