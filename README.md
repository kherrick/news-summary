# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Developments

* [NASA Picks Eric Schmidt's Rocket Company For Mars Mission](https://science.slashdot.org/story/26/06/18/2349246/nasa-picks-eric-schmidts-rocket-company-for-mars-mission?utm_source=rss1.0mainlinkanon&utm_medium=feed) - NASA collaborates with Eric Schmidt's innovative rocket company for a Mars-bound project, highlighting private sector involvement in space exploration. [Comments](https://science.slashdot.org/comments.pl?sid=26/06/18/2349246)

* [Godot 4.7: Lights, Camera, Action](https://godotengine.org/releases/4.7/) - The latest update to the Godot game engine brings new features for developers including enhanced lighting and filming capabilities. [Comments](https://lobste.rs/s/heb0am/godot_4_7_lights_camera_action)

* [Datasette Apps: Host custom HTML applications inside Datasette](https://simonwillison.net/2026/Jun/18/datasette-apps/) - Use Datasette’s feature to deploy custom HTML applications for better data visualization and interaction. [Comments](https://news.ycombinator.com/item?id=48593731)

## Design, Modularity, and Development Tools

* [Rethinking modularity in Ruby applications](https://noteflakes.com/articles/2026-06-18-syntropy-modules) - A discussion on evolving modularity in Ruby to improve application's adaptability and maintainability. [Comments](https://lobste.rs/s/jtscci/rethinking_modularity_ruby)

* [Updating Stacked Pull Requests with git rebase --onto](https://bd103.dev/blog/2026-06-18-git-rebase-onto/) - This guide highlights advanced Git use cases to streamline developer workflows. [Comments](https://lobste.rs/s/akc6h4/updating_stacked_pull_requests_with_git)

* [Nix for Haskell: Static Builds](https://abhinavsarkar.net/posts/nix-for-haskell-static-builds/) - Explore how to build static projects using Nix and Haskell for enhanced performance and reduced dependencies. [Comments](https://lobste.rs/s/medvuo/nix_for_haskell_static_builds)

* [The design of littlefs](https://github.com/littlefs-project/littlefs/blob/master/DESIGN.md) - Insights into the design of LittleFS, a filesystem tailored for embedded systems with constrained resources. [Comments](https://lobste.rs/s/mhymex/design_littlefs)

## Space and Aerospace

* [A Chinese Rocket Breaks Apart Dangerously Close to the Starlink Constellation](https://soylentnews.org/article.pl?sid=26/06/19/120238&amp;from=rss) - Concerns over space debris intensify as a Chinese rocket disintegrates near SpaceX's Starlink satellites. [Comments](https://soylentnews.org/comments.pl?sid=26/06/19/120238)

* [Rolls-Royce Secures Deal To Build Small Nuclear Reactors For Sweden](https://hardware.slashdot.org/story/26/06/18/2335235/rolls-royce-secures-deal-to-build-small-nuclear-reactors-for-sweden?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Rolls-Royce's ambitious step to create small modular nuclear reactors could set a new frontier for clean energy. [Comments](https://hardware.slashdot.org/comments.pl?sid=26/06/18/2335235)

## Privacy and Social Media

* [From Australia to Europe, countries move to curb children's social media access](https://www.reuters.com/legal/government/australia-europe-countries-move-curb-childrens-social-media-access-2026-06-18/) - Nations intensify restrictions on social media to protect children from harmful online influences. [Comments](https://news.ycombinator.com/item?id=48597668)

* [Google workspace threatening to block firefox access](https://tales.fromprod.com/2026/169/google-workspace-threatening-to-block-firefox.html) - A looming threat to Firefox users sparks debate over the future of browser compatibility. [Comments](https://lobste.rs/s/mnycr3/google_workspace_threatening_block)

## Ecological and Public Policy News

* [Bernie Sanders Unveils $7 Trillion Plan To Give Americans Control of AI Industry](https://yro.slashdot.org/story/26/06/18/1914206/bernie-sanders-unveils-7-trillion-plan-to-give-americans-control-of-ai-industry?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A bold policy proposal to centralize AI development under public control facing vigorous political and industry debates. [Comments](https://yro.slashdot.org/comments.pl?sid=26/06/18/1914206)

* [France's Digital Sovereignty Push is Struggling to Escape the Microsoft Gravity Well](https://soylentnews.org/article.pl?sid=26/06/17/1140258&amp;from=rss) - Challenges faced by France as it aims for technological independence amid monopolistic pressures. [Comments](https://soylentnews.org/comments.pl?sid=26/06/17/1140258)

## Notable Discoveries and Cultural Insights

* [I discovered a large-scale malware distribution on GitHub](https://orchidfiles.com/github-repositories-distributing-malware/) - A detailed account of uncovering thousands of malware-infected repositories on the popular code-sharing platform. [Comments](https://lobste.rs/s/pc7tnx/i_discovered_large_scale_malware)

* [Vim Creator Bram Moolenaar's Forgotten Programming Language, Zimbu (2023)](https://thenewstack.io/vim-creator-bram-moolenaars-forgotten-programming-language-zimbu/) - Delve into the history of Vim creator's lesser-known programming language that tried to challenge coding conventions. [Comments](https://lobste.rs/s/h21el3/vim_creator_bram_moolenaar_s_forgotten)

* [The room the economy can't see](https://wilsoniumite.com/2026/06/19/the-room-the-economy-cant-see/) - An introspective piece shedding light on overlooked aspects of modern economic systems. [Comments](https://news.ycombinator.com/item?id=48596911)

* [How Japan's railways stayed one while splitting apart](https://arun.is/blog/jr-logo/) - Examining the cohesive branding that binds Japan's fragmented railway systems. [Comments](https://news.ycombinator.com/item?id=48570730)

* [Sigma 45mm f/2.8 Lens Repair & Analysis](https://salvagedcircuitry.com/sigma-45mm.html) - Tech enthusiasts delve into the repairs and inner workings of the Sigma lens. [Comments](https://lobste.rs/s/up3pfu/sigma_45mm_f_2_8_lens_repair_analysis)

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

* [2026-06-19, 13:27:13](https://lobste.rs/s/dsy6r3/clownmaxxing_experimental_prompts_joey) - [Clownmaxxing, experimental prompts and Joey&apos;s cadillac todo list](https://charlesleifer.com/blog/clownmaxxing-experimental-prompts-and-joey-s-cadillac-todo-list/)
* [2026-06-19, 12:25:06](https://news.ycombinator.com/item?id=48597783) - [Google is turning Android into a &apos;sloperating&apos; system. Your thoughts?](https://android-developers.googleblog.com/2026/06/Android-17.html)
* [2026-06-19, 12:10:54](https://news.ycombinator.com/item?id=48597668) - [From Australia to Europe, countries move to curb children&apos;s social media access](https://www.reuters.com/legal/government/australia-europe-countries-move-curb-childrens-social-media-access-2026-06-18/)
* [2026-06-19, 12:00:00](https://soylentnews.org/article.pl?sid=26/06/19/120238&amp;from=rss) - [A Chinese Rocket Breaks Apart Dangerously Close to the Starlink Constellation](https://soylentnews.org/article.pl?sid=26/06/19/120238&amp;from=rss)
* [2026-06-19, 11:28:45](https://lobste.rs/s/ggp2ov/shutting_down_fornjot) - [Shutting Down Fornjot](https://fornjot.app/blog/shutting-down-fornjot/)
* [2026-06-19, 11:00:00](https://science.slashdot.org/story/26/06/18/2349246/nasa-picks-eric-schmidts-rocket-company-for-mars-mission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Picks Eric Schmidt&apos;s Rocket Company For Mars Mission](https://science.slashdot.org/story/26/06/18/2349246/nasa-picks-eric-schmidts-rocket-company-for-mars-mission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-19, 10:36:25](https://lobste.rs/s/u0nv8q/diffshub) - [DiffsHub](https://diffshub.com/)
* [2026-06-19, 10:16:20](https://news.ycombinator.com/item?id=48596911) - [The room the economy can&apos;t see](https://wilsoniumite.com/2026/06/19/the-room-the-economy-cant-see/)
* [2026-06-19, 10:16:10](https://news.ycombinator.com/item?id=48596910) - [Norway greenlights first full-scale ship tunnel](https://eandt.theiet.org/2026/06/18/norway-greenlights-world-s-first-full-scale-ship-tunnel)
* [2026-06-19, 09:20:18](https://lobste.rs/s/jtscci/rethinking_modularity_ruby) - [Rethinking modularity in Ruby applications](https://noteflakes.com/articles/2026-06-18-syntropy-modules)
* [2026-06-19, 08:26:25](https://lobste.rs/s/heb0am/godot_4_7_lights_camera_action) - [Godot 4.7: Lights, Camera, Action](https://godotengine.org/releases/4.7/)
* [2026-06-19, 07:00:00](https://hardware.slashdot.org/story/26/06/18/2335235/rolls-royce-secures-deal-to-build-small-nuclear-reactors-for-sweden?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rolls-Royce Secures Deal To Build Small Nuclear Reactors For Sweden](https://hardware.slashdot.org/story/26/06/18/2335235/rolls-royce-secures-deal-to-build-small-nuclear-reactors-for-sweden?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-19, 06:35:57](https://news.ycombinator.com/item?id=48595511) - [Project Valhalla, Explained: How a Decade of Work Arrives in JDK 28](https://www.jvm-weekly.com/p/project-valhalla-explained-how-a)
* [2026-06-19, 06:05:01](https://news.ycombinator.com/item?id=48595331) - [So You Want to Define a Well-Known URI](https://mnot.net/blog/2026/well_known_uris)
* [2026-06-19, 04:27:44](https://lobste.rs/s/ukxhyz/show_your_hands_honor_for_strange_power) - [Show your hands honor for the strange power they bring you](https://aresluna.org/show-your-hands-honor/)
* [2026-06-19, 03:30:00](https://news.slashdot.org/story/26/06/18/2052239/trump-admin-backs-off-plans-to-kill-ocean-monitoring?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Admin Backs Off Plans To Kill Ocean Monitoring](https://news.slashdot.org/story/26/06/18/2052239/trump-admin-backs-off-plans-to-kill-ocean-monitoring?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-19, 02:49:21](https://lobste.rs/s/h21el3/vim_creator_bram_moolenaar_s_forgotten) - [Vim Creator Bram Moolenaar&apos;s Forgotten Programming Language, Zimbu (2023)](https://thenewstack.io/vim-creator-bram-moolenaars-forgotten-programming-language-zimbu/)
* [2026-06-19, 01:06:27](https://news.ycombinator.com/item?id=48593731) - [Datasette Apps: Host custom HTML applications inside Datasette](https://simonwillison.net/2026/Jun/18/datasette-apps/)
* [2026-06-19, 01:01:13](https://news.ycombinator.com/item?id=48593694) - [Flexport (YC W14) Is Hiring in Indonesia, India, and Thailand](https://www.flexport.com/company/careers/)
* [2026-06-18, 23:24:00](https://soylentnews.org/article.pl?sid=26/06/17/1523237&amp;from=rss) - [Linux Kernel 7.1 Sends Intel 486 Support To Silicon Heaven](https://soylentnews.org/article.pl?sid=26/06/17/1523237&amp;from=rss)
* [2026-06-18, 23:08:35](https://news.ycombinator.com/item?id=48592832) - [The AirPods Effect](https://www.theescapenewsletter.com/p/the-airpods-effect)
* [2026-06-18, 23:00:00](https://tech.slashdot.org/story/26/06/18/2044250/adobe-adds-its-ai-assistant-to-premiere-illustrator-and-indesign?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Adobe Adds Its AI Assistant To Premiere, Illustrator and InDesign](https://tech.slashdot.org/story/26/06/18/2044250/adobe-adds-its-ai-assistant-to-premiere-illustrator-and-indesign?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-18, 22:00:00](https://news.slashdot.org/story/26/06/18/2035253/california-billionaire-tax-makes-ballot-despite-opposition-from-tech-moguls?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California &apos;Billionaire Tax&apos; Makes Ballot Despite Opposition From Tech Moguls](https://news.slashdot.org/story/26/06/18/2035253/california-billionaire-tax-makes-ballot-despite-opposition-from-tech-moguls?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-18, 21:54:10](https://news.ycombinator.com/item?id=48592163) - [Zero-Touch OAuth for MCP](https://blog.modelcontextprotocol.io/posts/enterprise-managed-auth/)
* [2026-06-18, 21:41:39](https://lobste.rs/s/pc7tnx/i_discovered_large_scale_malware) - [I discovered a large-scale malware distribution on GitHub](https://orchidfiles.com/github-repositories-distributing-malware/)
* [2026-06-18, 21:12:40](https://lobste.rs/s/akc6h4/updating_stacked_pull_requests_with_git) - [Updating Stacked Pull Requests with git rebase --onto](https://bd103.dev/blog/2026-06-18-git-rebase-onto/)
* [2026-06-18, 21:00:00](https://science.slashdot.org/story/26/06/18/1939203/midjourney-pivots-from-ai-image-generation-to-body-scanning-medical-spa?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Midjourney Pivots From AI Image Generation To Body Scanning Medical Spa](https://science.slashdot.org/story/26/06/18/1939203/midjourney-pivots-from-ai-image-generation-to-body-scanning-medical-spa?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-18, 20:00:00](https://yro.slashdot.org/story/26/06/18/1914206/bernie-sanders-unveils-7-trillion-plan-to-give-americans-control-of-ai-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bernie Sanders Unveils $7 Trillion Plan To Give Americans Control of AI Industry](https://yro.slashdot.org/story/26/06/18/1914206/bernie-sanders-unveils-7-trillion-plan-to-give-americans-control-of-ai-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-18, 19:00:00](https://apple.slashdot.org/story/26/06/18/1811250/apple-announces-major-app-store-changes-on-ios-in-brazil?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Announces Major App Store Changes on iOS in Brazil](https://apple.slashdot.org/story/26/06/18/1811250/apple-announces-major-app-store-changes-on-ios-in-brazil?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-18, 18:43:00](https://soylentnews.org/article.pl?sid=26/06/17/1519239&amp;from=rss) - [Finland Charges Russian Captain And Crew Member Of Ship Suspected Of Damaging Undersea Cables](https://soylentnews.org/article.pl?sid=26/06/17/1519239&amp;from=rss)
* [2026-06-18, 18:13:35](https://lobste.rs/s/mhymex/design_littlefs) - [The design of littlefs](https://github.com/littlefs-project/littlefs/blob/master/DESIGN.md)
* [2026-06-18, 18:00:00](https://mobile.slashdot.org/story/26/06/18/1733258/android-17-drops-for-pixel-phones-and-watch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Android 17 Drops For Pixel Phones and Watch](https://mobile.slashdot.org/story/26/06/18/1733258/android-17-drops-for-pixel-phones-and-watch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-18, 17:27:01](https://lobste.rs/s/sl8ibi/what_was_nice_about_ui_windows_2000) - [What was nice about the UI of Windows 2000](https://movq.de/blog/postings/2026-06-16/0/POSTING-en.html)
* [2026-06-18, 17:04:00](https://lobste.rs/s/crl4fj/what_are_your_favorite_lobste_rs_comments) - [What are your Favorite Lobste.rs Comments?](https://lobste.rs/s/crl4fj/what_are_your_favorite_lobste_rs_comments)
* [2026-06-18, 17:00:00](https://it.slashdot.org/story/26/06/18/1656252/google-told-researcher-nice-catch-then-denied-bug-bounty-for-flaw-it-still-hasnt-fixed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Told Researcher &apos;Nice Catch!&apos; Then Denied Bug Bounty For Flaw It Still Hasn&apos;t Fixed](https://it.slashdot.org/story/26/06/18/1656252/google-told-researcher-nice-catch-then-denied-bug-bounty-for-flaw-it-still-hasnt-fixed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-18, 16:53:58](https://lobste.rs/s/4hcq97/is_it_time_for_new_embedded_linux_build) - [Is It Time for a New Embedded Linux Build System?](https://yoebuild.org/blog/time-for-a-new-build-system/)
* [2026-06-18, 16:25:48](https://lobste.rs/s/5majlp/future_con_is_already_here_it_s_just_not) - [The Future of the Con Is Already Here, It&apos;s Just Not Evenly Distributed](http://manishearth.github.io/blog/2026/06/17/the-future-of-the-con-is-already-here/)
* [2026-06-18, 16:00:00](https://news.slashdot.org/story/26/06/18/0054201/tim-cook-says-apple-price-increases-are-unavoidable-due-to-memory-costs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tim Cook Says Apple Price Increases Are &apos;Unavoidable&apos; Due To Memory Costs](https://news.slashdot.org/story/26/06/18/0054201/tim-cook-says-apple-price-increases-are-unavoidable-due-to-memory-costs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-18, 15:08:04](https://lobste.rs/s/mnycr3/google_workspace_threatening_block) - [Google workspace threatening to block firefox access](https://tales.fromprod.com/2026/169/google-workspace-threatening-to-block-firefox.html)
* [2026-06-18, 15:00:00](https://news.slashdot.org/story/26/06/18/0040249/you-can-no-longer-fly-or-purchase-a-drone-in-beijing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [You Can No Longer Fly Or Purchase a Drone In Beijing](https://news.slashdot.org/story/26/06/18/0040249/you-can-no-longer-fly-or-purchase-a-drone-in-beijing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-18, 14:56:17](https://lobste.rs/s/yas7ik/offset_slices) - [offset_of! slices](https://bal-e.org/blog/2026/offset-of-slices/)
* [2026-06-18, 14:51:53](https://news.ycombinator.com/item?id=48586329) - [Building a robotics research setup that lives next to my desk](https://dfdxlabs.com/research/2026/robotics-setup/)
* [2026-06-18, 14:24:30](https://news.ycombinator.com/item?id=48585866) - [Ubiquiti: Enterprise NAS, Built on ZFS](https://blog.ui.com/article/introducing-enterprise-nas)
* [2026-06-18, 14:01:40](https://lobste.rs/s/ept8fv/hidden_elegance_gradient_noise) - [The Hidden Elegance of Gradient Noise](https://yogthos.net/posts/2026-06-17-perlin-flow.html)
* [2026-06-18, 13:53:00](https://soylentnews.org/article.pl?sid=26/06/17/1517231&amp;from=rss) - [Heart Protection From COVID Shots Remains Amid Updates, Study Finds](https://soylentnews.org/article.pl?sid=26/06/17/1517231&amp;from=rss)
* [2026-06-18, 13:21:26](https://lobste.rs/s/medvuo/nix_for_haskell_static_builds) - [Nix for Haskell: Static Builds](https://abhinavsarkar.net/posts/nix-for-haskell-static-builds/)
* [2026-06-18, 13:10:44](https://news.ycombinator.com/item?id=48584761) - [Show HN: Talos – Open-source WASM interpreter for Lean](https://github.com/cajal-technologies/talos)
* [2026-06-18, 12:46:04](https://news.ycombinator.com/item?id=48584497) - [W Social, public institutions and the theater of European digital sovereignty](https://blog.elenarossini.com/w-social-public-institutions-and-the-theater-of-european-digital-sovereignty/)
* [2026-06-18, 11:45:43](https://news.ycombinator.com/item?id=48583928) - [I found 10k GitHub repositories distributing Trojan malware](https://orchidfiles.com/github-repositories-distributing-malware/)
* [2026-06-18, 11:41:21](https://news.ycombinator.com/item?id=48583897) - [Modos Color Monitor Pushes E-Paper Displays Further](https://spectrum.ieee.org/modos-e-paper-monitor)
* [2026-06-18, 11:04:31](https://news.ycombinator.com/item?id=48583606) - [CS 6120: Advanced Compilers: The Self-Guided Online Course (2020)](https://www.cs.cornell.edu/courses/cs6120/2025fa/self-guided/)
* [2026-06-18, 11:00:00](https://entertainment.slashdot.org/story/26/06/18/0048244/brian-johnson-special-effects-artist-behind-space-1999-dies-at-86?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Brian Johnson, Special Effects Artist Behind &apos;Space: 1999,&apos; Dies At 86](https://entertainment.slashdot.org/story/26/06/18/0048244/brian-johnson-special-effects-artist-behind-space-1999-dies-at-86?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-18, 10:33:22](https://news.ycombinator.com/item?id=48583386) - [Hospitals and universities repurposing drugs at lower cost](https://www.kcl.ac.uk/news/hospitals-and-universities-repurposing-drugs-at-90-lower-cost)
* [2026-06-18, 10:29:20](https://news.ycombinator.com/item?id=48583356) - [.gitignore Isn&apos;t the only way to ignore files in Git](https://nelson.cloud/.gitignore-isnt-the-only-way-to-ignore-files-in-git/)
* [2026-06-18, 10:17:58](https://lobste.rs/s/0mlwcf/mastodon_4_6) - [Mastodon 4.6](https://blog.joinmastodon.org/2026/06/mastodon-4.6/)
* [2026-06-18, 09:08:00](https://soylentnews.org/article.pl?sid=26/06/17/1140258&amp;from=rss) - [France&apos;s Digital Sovereignty Push is Struggling to Escape the Microsoft Gravity Well](https://soylentnews.org/article.pl?sid=26/06/17/1140258&amp;from=rss)
* [2026-06-18, 08:15:10](https://lobste.rs/s/y9zfbv/rfc_10008_http_query_method) - [RFC 10008: The HTTP QUERY Method](https://blainsmith.com/articles/rfc-10008-http-query-method/)
* [2026-06-18, 07:09:26](https://lobste.rs/s/up3pfu/sigma_45mm_f_2_8_lens_repair_analysis) - [Sigma 45mm f/2.8 Lens Repair &amp; Analysis](https://salvagedcircuitry.com/sigma-45mm.html)
* [2026-06-18, 07:00:00](https://tech.slashdot.org/story/26/06/18/0033211/chinas-ev-price-war-was-built-on-cars-sold-at-a-loss?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s EV Price War Was Built On Cars Sold At a Loss](https://tech.slashdot.org/story/26/06/18/0033211/chinas-ev-price-war-was-built-on-cars-sold-at-a-loss?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-18, 06:36:39](https://lobste.rs/s/nqv7yo/cli_authentication_right_way) - [CLI Authentication, the Right Way](https://www.abgeo.dev/blog/cli-authentication-the-right-way/)
* [2026-06-18, 05:14:20](https://lobste.rs/s/azy6y2/i_hate_compilers) - [I hate compilers](https://xeiaso.net/notes/2026/anubis-wasm-vendor-binary/)
* [2026-06-18, 05:10:01](https://lobste.rs/s/b0mp2e/changes_emacs_31_i_m_already_daily_driving) - [Changes in Emacs 31 I&apos;m Already Daily Driving](https://rahuljuliato.com/posts/emacs-31-around-the-corner)
* [2026-06-18, 04:24:00](https://soylentnews.org/article.pl?sid=26/06/17/0045227&amp;from=rss) - [Why Not yserver? It’s Xserver, But Rust-y.](https://soylentnews.org/article.pl?sid=26/06/17/0045227&amp;from=rss)
* [2026-06-18, 03:30:00](https://yro.slashdot.org/story/26/06/17/2357242/tesco-moving-40000-server-workloads-off-vmware-amid-broadcoms-abusive-conduct?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tesco Moving 40,000 Server Workloads Off VMware Amid Broadcom&apos;s &apos;Abusive Conduct&apos;](https://yro.slashdot.org/story/26/06/17/2357242/tesco-moving-40000-server-workloads-off-vmware-amid-broadcoms-abusive-conduct?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-18, 03:08:13](https://lobste.rs/s/kfkgl2/audacity_4_0_beta_lets_you_test_its_new) - [Audacity 4.0 beta lets you test its new (nicer) Qt interface](https://www.omgubuntu.co.uk/2026/06/audacity-4-0-beta)
* [2026-06-17, 23:35:00](https://soylentnews.org/article.pl?sid=26/06/16/122242&amp;from=rss) - [Threads of Underground Fungal Networks Are Long Enough to Reach Beyond the Solar System](https://soylentnews.org/article.pl?sid=26/06/16/122242&amp;from=rss)
* [2026-06-17, 18:52:00](https://soylentnews.org/article.pl?sid=26/06/16/1144213&amp;from=rss) - [U.S. Gov&apos;t Orders Anthropic to Disable its Newest AI Models and Restrict Foreigner Use](https://soylentnews.org/article.pl?sid=26/06/16/1144213&amp;from=rss)
* [2026-06-17, 14:08:00](https://soylentnews.org/article.pl?sid=26/06/16/1139240&amp;from=rss) - [Brick Your Phone Temporarily to Aid Fiction-Maxxing](https://soylentnews.org/article.pl?sid=26/06/16/1139240&amp;from=rss)
* [2026-06-17, 14:03:58](https://news.ycombinator.com/item?id=48570730) - [How Japan&apos;s railways stayed one while splitting apart](https://arun.is/blog/jr-logo/)
* [2026-06-17, 09:25:00](https://soylentnews.org/article.pl?sid=26/06/16/0055252&amp;from=rss) - [EU Auto Giants Call For &apos;Made In Europe&apos; Incentives Amid Rising Chinese Competition](https://soylentnews.org/article.pl?sid=26/06/16/0055252&amp;from=rss)
* [2026-06-17, 04:33:00](https://soylentnews.org/article.pl?sid=26/06/16/0054257&amp;from=rss) - [Man Jailed for a Month Despite Flock Showing He Was 5 Miles From Crime Scene](https://soylentnews.org/article.pl?sid=26/06/16/0054257&amp;from=rss)
* [2026-06-16, 23:50:00](https://soylentnews.org/article.pl?sid=26/06/16/0051200&amp;from=rss) - [Rivian Is Reusing Its Own Car Batteries In A Very Resourceful Way](https://soylentnews.org/article.pl?sid=26/06/16/0051200&amp;from=rss)
* [2026-06-16, 19:08:00](https://soylentnews.org/politics/article.pl?sid=26/06/15/0344248&amp;from=rss) - [US Solar and Storage Defy Political Hostility to Dominate Q1 Power Installations](https://soylentnews.org/politics/article.pl?sid=26/06/15/0344248&amp;from=rss)
* [2026-06-16, 14:22:00](https://soylentnews.org/article.pl?sid=26/06/15/0335259&amp;from=rss) - [AI Agents Favored $1,500 Sponsored Flights Over $500 Alternatives](https://soylentnews.org/article.pl?sid=26/06/15/0335259&amp;from=rss)
* [2026-06-16, 11:07:08](https://news.ycombinator.com/item?id=48553388) - [DuckDB Internals: Why Is DuckDB Fast? (Part 1)](https://www.greybeam.ai/blog/duckdb-internals-part-1)
* [2026-06-16, 09:37:00](https://soylentnews.org/article.pl?sid=26/06/15/0328205&amp;from=rss) - [Intel Reportedly Preparing Surprise Return to DDR4 Systems With &apos;Raptor Lake Next&apos;](https://soylentnews.org/article.pl?sid=26/06/15/0328205&amp;from=rss)
* [2026-06-16, 04:51:00](https://soylentnews.org/article.pl?sid=26/06/15/0017250&amp;from=rss) - [What &apos;Emotional Labor&apos; Actually Means — and How Starbucks is Testing its Limits](https://soylentnews.org/article.pl?sid=26/06/15/0017250&amp;from=rss)
* [2026-06-16, 00:45:50](https://news.ycombinator.com/item?id=48549118) - [Zen and the Art of Machine Learning Research](https://blog.jxmo.io/p/zen-and-the-art-of-machine-learning)
* [2026-06-16, 00:05:00](https://soylentnews.org/article.pl?sid=26/06/15/0022216&amp;from=rss) - [Anthropic Warns Claude AI Is Building Itself Faster Than Expected](https://soylentnews.org/article.pl?sid=26/06/15/0022216&amp;from=rss)
* [2026-06-15, 22:36:33](https://news.ycombinator.com/item?id=48547969) - [Cell-based architecture for resilient payment systems](https://americanexpress.io/cell-based-architecture-for-resilient-payment-systems/)
* [2026-06-15, 22:06:12](https://news.ycombinator.com/item?id=48547658) - [SMTP Relay with Web Dashboard](https://github.com/toinbox/simplerelay)
* [2026-06-15, 20:51:54](https://news.ycombinator.com/item?id=48546890) - [Ten years of ClickHouse in open source](https://clickhouse.com/blog/open-source-10)
* [2026-06-15, 19:24:00](https://soylentnews.org/article.pl?sid=26/06/15/0016203&amp;from=rss) - [How did Atari Apply Side Art to Arcade Cabinets?](https://soylentnews.org/article.pl?sid=26/06/15/0016203&amp;from=rss)
* [2026-06-15, 16:51:34](https://news.ycombinator.com/item?id=48543968) - [Show HN: Modeloop – From visual algorithms to microcontroller C code](https://www.modeloop.app/)
* [2026-06-15, 16:13:24](https://news.ycombinator.com/item?id=48543430) - [UCCL-EP: DeepEP-style expert parallelism on any NIC, no GPU-initiated comms](https://fergusfinn.com/blog/uccl-ep-without-owning-the-nic/)
* [2026-06-15, 16:06:22](https://news.ycombinator.com/item?id=48543311) - [To study how chips work, MIT researchers built their own operating system](https://news.mit.edu/2026/to-study-how-chips-really-work-mit-researchers-built-their-own-operating-system-0610)
* [2026-06-15, 14:31:00](https://soylentnews.org/article.pl?sid=26/06/15/0013216&amp;from=rss) - [Influential Study Touting ChatGPT in Education Retracted Over Red Flags](https://soylentnews.org/article.pl?sid=26/06/15/0013216&amp;from=rss)
* [2026-06-15, 13:35:23](https://news.ycombinator.com/item?id=48541062) - [Gribouille 0.3.0: A Grammar of Graphics for Typst](https://mickael.canouil.fr/posts/2026-06-15-gribouille-0-3/)
* [2026-06-15, 13:13:38](https://news.ycombinator.com/item?id=48540779) - [Akse3D – open-source 3D modelling anyone can master](https://akse3d-en.skaperiet.no)
* [2026-06-15, 09:53:00](https://soylentnews.org/article.pl?sid=26/06/14/1921229&amp;from=rss) - [In First, California City Overwhelmingly Votes to Permanently Ban Datacenters](https://soylentnews.org/article.pl?sid=26/06/14/1921229&amp;from=rss)
* [2026-06-15, 05:08:00](https://soylentnews.org/article.pl?sid=26/06/14/1916201&amp;from=rss) - [The Adder at the Heart of Intel&apos;s 8087 Floating-Point Chip](https://soylentnews.org/article.pl?sid=26/06/14/1916201&amp;from=rss)
* [2026-06-15, 00:23:00](https://soylentnews.org/article.pl?sid=26/06/14/1914203&amp;from=rss) - [Physicists Refute Famous 2025 Study Claiming Daylight Saving Time Poses Severe Health Risks](https://soylentnews.org/article.pl?sid=26/06/14/1914203&amp;from=rss)
