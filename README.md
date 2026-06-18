# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [The design of littlefs](https://github.com/littlefs-project/littlefs/blob/master/DESIGN.md) - Insights into the architecture of Littlefs, a versatile lightweight filesystem designed for resource-constrained storage.

* [I Found 10k GitHub Repositories Distributing Trojan Malware](https://orchidfiles.com/github-repositories-distributing-malware/) - An alarming revelation about malware hidden within thousands of GitHub repositories.

* [CLI Authentication, the Right Way](https://www.abgeo.dev/blog/cli-authentication-the-right-way/) - A guide to implementing safer authentication methods for command-line interfaces.

* [Emacs 31 Around the Corner: Changes I'm Daily Driving](https://rahuljuliato.com/posts/emacs-31-around-the-corner) - A look at upcoming developments and features in Emacs 31.

* [Audacity 4.0 Beta Lets You Test Its New (Nicer) Qt Interface](https://www.omgubuntu.co.uk/2026/06/audacity-4-0-beta) - A hands-on opportunity to explore the latest version of the popular open-source audio editing software.

## Economic Policy and Impact

* [California 'Billionaire Tax' Makes Ballot Despite Opposition From Tech Moguls](https://news.slashdot.org/story/26/06/18/2035253/california-billionaire-tax-makes-ballot-despite-opposition-from-tech-moguls?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - California is moving forward with a controversial wealth tax targeting billionaires, despite pushback from tech industry leaders.

* [Bernie Sanders Unveils $7 Trillion Plan To Give Americans Control of AI Industry](https://yro.slashdot.org/story/26/06/18/1914206/bernie-sanders-unveils-7-trillion-plan-to-give-americans-control-of-ai-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Proposal to establish public ownership and governance of AI technologies, aiming for equitable advancements.

* [Apple Announces Major App Store Changes on iOS in Brazil](https://apple.slashdot.org/story/26/06/18/1811250/apple-announces-major-app-store-changes-on-ios-in-brazil?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Apple reveals significant updates in their App Store policies specifically targeting the Brazilian market.

* [China's EV Price War Was Built On Cars Sold At a Loss](https://tech.slashdot.org/story/26/06/18/0033211/chinas-ev-price-war-was-built-on-cars-sold-at-a-loss?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Examination of how competitive pricing in China's electric vehicle market is driven by selling at losses.

## Science and Health

* [Heart Protection From COVID Shots Remains Amid Updates, Study Finds](https://soylentnews.org/article.pl?sid=26/06/17/1517231&amp;from=rss) - Research indicates that COVID-19 vaccinations continue to provide protection for heart health, even with updated variants.

* [Midjourney Pivots From AI Image Generation To Body Scanning Medical Spa](https://science.slashdot.org/story/26/06/18/1939203/midjourney-pivots-from-ai-image-generation-to-body-scanning-medical-spa?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The innovative company shifts focus to healthcare applications using its technology for body scanning in medical spas.

* [Scientists Gave an Octopus a Mirror. Here's What Happened Next](https://soylentnews.org/article.pl?sid=26/06/13/1530216&amp;from=rss) - A fascinating experiment studying self-awareness and perception in octopuses.

## Privacy and Policy

* [Google Workspace Threatening to Block Firefox Access](https://tales.fromprod.com/2026/169/google-workspace-threatening-to-block-firefox.html) - Concerns rise over Google's decision regarding browser compatibility and accessibility.

* [I Told Them Forced Consent Was Unlawful. 5 Years Later It Cost Elkjop €1.8M](https://www.thatprivacyguy.com/blog/elkjop-forced-consent-fine/) - A landmark case highlights the financial penalties of violating consent laws.

* [France's Digital Sovereignty Push is Struggling to Escape the Microsoft Gravity Well](https://soylentnews.org/article.pl?sid=26/06/17/1140258&amp;from=rss) - Challenges faced by France in promoting tech independence from major U.S. firms.

## Culture and History

* [Zork Name Origin Got an Update on Wikipedia](https://www.dpolakovic.space/blogs/zork-part2#update) - New insights have been revealed about the origins of the name of the iconic game Zork.

* [Brian Johnson, Special Effects Artist Behind 'Space: 1999,' Dies At 86](https://entertainment.slashdot.org/story/26/06/18/0048244/brian-johnson-special-effects-artist-behind-space-1999-dies-at-86?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Remembering the life and contributions of the legendary special effects artist.

## Intriguing Finds and Innovations

* [Everything Is BOM: Bill of Materials Encyclopedia](https://bomwiki.com/) - A comprehensive online resource dedicated to understanding bills of materials across industries.

* [Gerrymandle: Daily Puzzle Game Where You Redraw Electoral Districts](https://gerrymandle.cc/) - A new game challenges players to reimagine political boundaries in a fun and educational way.

* [Hospitals and Universities Repurposing Drugs at Lower Cost](https://www.kcl.ac.uk/news/hospitals-and-universities-repurposing-drugs-at-90-lower-cost) - Creative approaches to repurposing drugs may lead to immense cost savings in the healthcare sector.

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

* [2026-06-18, 22:00:00](https://news.slashdot.org/story/26/06/18/2035253/california-billionaire-tax-makes-ballot-despite-opposition-from-tech-moguls?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California &apos;Billionaire Tax&apos; Makes Ballot Despite Opposition From Tech Moguls](https://news.slashdot.org/story/26/06/18/2035253/california-billionaire-tax-makes-ballot-despite-opposition-from-tech-moguls?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-18, 21:54:10](https://news.ycombinator.com/item?id=48592163) - [Zero-Touch OAuth for MCP](https://blog.modelcontextprotocol.io/posts/enterprise-managed-auth/)
* [2026-06-18, 21:12:40](https://lobste.rs/s/akc6h4/updating_stacked_pull_requests_with_git) - [Updating Stacked Pull Requests with git rebase --onto](https://bd103.dev/blog/2026-06-18-git-rebase-onto/)
* [2026-06-18, 21:03:31](https://news.ycombinator.com/item?id=48591562) - [Everything Is BOM: Bill of Materials Encyclopedia](https://bomwiki.com/)
* [2026-06-18, 21:00:00](https://science.slashdot.org/story/26/06/18/1939203/midjourney-pivots-from-ai-image-generation-to-body-scanning-medical-spa?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Midjourney Pivots From AI Image Generation To Body Scanning Medical Spa](https://science.slashdot.org/story/26/06/18/1939203/midjourney-pivots-from-ai-image-generation-to-body-scanning-medical-spa?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-18, 20:49:03](https://news.ycombinator.com/item?id=48591348) - [Show HN: Are You in the Weights?](https://www.intheweights.com/)
* [2026-06-18, 20:27:28](https://news.ycombinator.com/item?id=48591066) - [Zork name origin got an update on Wikipedia](https://www.dpolakovic.space/blogs/zork-part2#update)
* [2026-06-18, 20:00:00](https://yro.slashdot.org/story/26/06/18/1914206/bernie-sanders-unveils-7-trillion-plan-to-give-americans-control-of-ai-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bernie Sanders Unveils $7 Trillion Plan To Give Americans Control of AI Industry](https://yro.slashdot.org/story/26/06/18/1914206/bernie-sanders-unveils-7-trillion-plan-to-give-americans-control-of-ai-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-18, 19:00:00](https://apple.slashdot.org/story/26/06/18/1811250/apple-announces-major-app-store-changes-on-ios-in-brazil?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Announces Major App Store Changes on iOS in Brazil](https://apple.slashdot.org/story/26/06/18/1811250/apple-announces-major-app-store-changes-on-ios-in-brazil?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-18, 18:43:00](https://soylentnews.org/article.pl?sid=26/06/17/1519239&amp;from=rss) - [Finland Charges Russian Captain And Crew Member Of Ship Suspected Of Damaging Undersea Cables](https://soylentnews.org/article.pl?sid=26/06/17/1519239&amp;from=rss)
* [2026-06-18, 18:31:23](https://news.ycombinator.com/item?id=48589501) - [I told them forced consent was unlawful. 5 years later it cost Elkjop €1.8M](https://www.thatprivacyguy.com/blog/elkjop-forced-consent-fine/)
* [2026-06-18, 18:13:35](https://lobste.rs/s/mhymex/design_littlefs) - [The design of littlefs](https://github.com/littlefs-project/littlefs/blob/master/DESIGN.md)
* [2026-06-18, 18:00:00](https://mobile.slashdot.org/story/26/06/18/1733258/android-17-drops-for-pixel-phones-and-watch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Android 17 Drops For Pixel Phones and Watch](https://mobile.slashdot.org/story/26/06/18/1733258/android-17-drops-for-pixel-phones-and-watch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-18, 17:37:00](https://news.ycombinator.com/item?id=48588755) - [The Token Compression Illusion: Why I&apos;m Skeptical of RTK](https://mroczek.dev/articles/the-token-compression-illusion-why-im-skeptical-of-rtk/)
* [2026-06-18, 17:27:01](https://lobste.rs/s/sl8ibi/what_was_nice_about_ui_windows_2000) - [What was nice about the UI of Windows 2000](https://movq.de/blog/postings/2026-06-16/0/POSTING-en.html)
* [2026-06-18, 17:09:53](https://news.ycombinator.com/item?id=48588413) - [Migrating from GNU Stow to Chezmoi](https://rednafi.com/misc/chezmoi/)
* [2026-06-18, 17:04:00](https://lobste.rs/s/crl4fj/what_are_your_favorite_lobste_rs_comments) - [What are your Favorite Lobste.rs Comments?](https://lobste.rs/s/crl4fj/what_are_your_favorite_lobste_rs_comments)
* [2026-06-18, 17:00:00](https://it.slashdot.org/story/26/06/18/1656252/google-told-researcher-nice-catch-then-denied-bug-bounty-for-flaw-it-still-hasnt-fixed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Told Researcher &apos;Nice Catch!&apos; Then Denied Bug Bounty For Flaw It Still Hasn&apos;t Fixed](https://it.slashdot.org/story/26/06/18/1656252/google-told-researcher-nice-catch-then-denied-bug-bounty-for-flaw-it-still-hasnt-fixed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-18, 16:55:25](https://news.ycombinator.com/item?id=48588216) - [The founder of Craigslist has given away half a billion dollars](https://www.independent.co.uk/us/money/craigslist-multimillionaire-craig-newmark-b2980681.html)
* [2026-06-18, 16:53:58](https://lobste.rs/s/4hcq97/is_it_time_for_new_embedded_linux_build) - [Is It Time for a New Embedded Linux Build System?](https://yoebuild.org/blog/time-for-a-new-build-system/)
* [2026-06-18, 16:25:48](https://lobste.rs/s/5majlp/future_con_is_already_here_it_s_just_not) - [The Future of the Con Is Already Here, It&apos;s Just Not Evenly Distributed](http://manishearth.github.io/blog/2026/06/17/the-future-of-the-con-is-already-here/)
* [2026-06-18, 16:00:00](https://news.slashdot.org/story/26/06/18/0054201/tim-cook-says-apple-price-increases-are-unavoidable-due-to-memory-costs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tim Cook Says Apple Price Increases Are &apos;Unavoidable&apos; Due To Memory Costs](https://news.slashdot.org/story/26/06/18/0054201/tim-cook-says-apple-price-increases-are-unavoidable-due-to-memory-costs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-18, 15:12:43](https://news.ycombinator.com/item?id=48586631) - [A website that lists websites to submit your website to](https://www.submission.directory/)
* [2026-06-18, 15:08:04](https://lobste.rs/s/mnycr3/google_workspace_threatening_block) - [Google workspace threatening to block firefox access](https://tales.fromprod.com/2026/169/google-workspace-threatening-to-block-firefox.html)
* [2026-06-18, 15:00:00](https://news.slashdot.org/story/26/06/18/0040249/you-can-no-longer-fly-or-purchase-a-drone-in-beijing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [You Can No Longer Fly Or Purchase a Drone In Beijing](https://news.slashdot.org/story/26/06/18/0040249/you-can-no-longer-fly-or-purchase-a-drone-in-beijing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-18, 14:56:17](https://lobste.rs/s/yas7ik/offset_slices) - [offset_of! slices](https://bal-e.org/blog/2026/offset-of-slices/)
* [2026-06-18, 14:49:44](https://news.ycombinator.com/item?id=48586299) - [Launch HN: TesterArmy (YC P26) – Agents that test web and mobile apps](https://tester.army)
* [2026-06-18, 14:24:30](https://news.ycombinator.com/item?id=48585866) - [Ubiquiti: Enterprise NAS, Built on ZFS](https://blog.ui.com/article/introducing-enterprise-nas)
* [2026-06-18, 14:17:07](https://news.ycombinator.com/item?id=48585746) - [Swiss parliament lifts ban on new nuclear power plants](https://www.bluewin.ch/en/news/switzerland/parliament-lifts-ban-on-new-nuclear-power-plants-3257535.html)
* [2026-06-18, 14:16:25](https://news.ycombinator.com/item?id=48585739) - [Show HN: Gerrymandle - Daily puzzle game where you redraw electoral districts](https://gerrymandle.cc/)
* [2026-06-18, 14:02:05](https://lobste.rs/s/4ttntg/open_source_vs_invisible_hand) - [Open Source vs the Invisible Hand](https://nesbitt.io/2026/06/18/open-source-vs-the-invisible-hand.html)
* [2026-06-18, 14:01:40](https://lobste.rs/s/ept8fv/hidden_elegance_gradient_noise) - [The Hidden Elegance of Gradient Noise](https://yogthos.net/posts/2026-06-17-perlin-flow.html)
* [2026-06-18, 13:53:00](https://soylentnews.org/article.pl?sid=26/06/17/1517231&amp;from=rss) - [Heart Protection From COVID Shots Remains Amid Updates, Study Finds](https://soylentnews.org/article.pl?sid=26/06/17/1517231&amp;from=rss)
* [2026-06-18, 13:21:26](https://lobste.rs/s/medvuo/nix_for_haskell_static_builds) - [Nix for Haskell: Static Builds](https://abhinavsarkar.net/posts/nix-for-haskell-static-builds/)
* [2026-06-18, 13:05:58](https://news.ycombinator.com/item?id=48584709) - [How Alberta Eradicated Rats](https://worksinprogress.co/issue/albertas-war-on-rats/)
* [2026-06-18, 12:46:04](https://news.ycombinator.com/item?id=48584497) - [W Social, public institutions and the theater of European digital sovereignty](https://blog.elenarossini.com/w-social-public-institutions-and-the-theater-of-european-digital-sovereignty/)
* [2026-06-18, 12:44:09](https://news.ycombinator.com/item?id=48584484) - [The Korean telecom giant at the center of Anthropic&apos;s Mythos controversy](https://www.wired.com/story/sk-telecom-anthropic-mythos-export-controls/)
* [2026-06-18, 12:19:05](https://news.ycombinator.com/item?id=48584207) - [Microsoft new Outlook takes 10 seconds to do what Outlook Classic does instantly](https://www.windowslatest.com/2026/06/15/microsofts-new-outlook-takes-10-seconds-to-do-what-outlook-classic-does-instantly-on-windows/)
* [2026-06-18, 12:10:53](https://news.ycombinator.com/item?id=48584135) - [Emacs 31 is around the corner: The changes I&apos;m daily driving](https://www.rahuljuliato.com/posts/emacs-31-around-the-corner)
* [2026-06-18, 11:45:43](https://news.ycombinator.com/item?id=48583928) - [I found 10k GitHub repositories distributing Trojan malware](https://orchidfiles.com/github-repositories-distributing-malware/)
* [2026-06-18, 11:41:21](https://news.ycombinator.com/item?id=48583897) - [Modos Color Monitor Pushes E-Paper Displays Further](https://spectrum.ieee.org/modos-e-paper-monitor)
* [2026-06-18, 11:04:31](https://news.ycombinator.com/item?id=48583606) - [CS 6120: Advanced Compilers: The Self-Guided Online Course (2020)](https://www.cs.cornell.edu/courses/cs6120/2025fa/self-guided/)
* [2026-06-18, 11:00:00](https://entertainment.slashdot.org/story/26/06/18/0048244/brian-johnson-special-effects-artist-behind-space-1999-dies-at-86?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Brian Johnson, Special Effects Artist Behind &apos;Space: 1999,&apos; Dies At 86](https://entertainment.slashdot.org/story/26/06/18/0048244/brian-johnson-special-effects-artist-behind-space-1999-dies-at-86?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-18, 10:33:22](https://news.ycombinator.com/item?id=48583386) - [Hospitals and universities repurposing drugs at lower cost](https://www.kcl.ac.uk/news/hospitals-and-universities-repurposing-drugs-at-90-lower-cost)
* [2026-06-18, 10:29:20](https://news.ycombinator.com/item?id=48583356) - [.gitignore Isn&apos;t the only way to ignore files in Git](https://nelson.cloud/.gitignore-isnt-the-only-way-to-ignore-files-in-git/)
* [2026-06-18, 10:17:58](https://lobste.rs/s/0mlwcf/mastodon_4_6) - [Mastodon 4.6](https://blog.joinmastodon.org/2026/06/mastodon-4.6/)
* [2026-06-18, 09:37:59](https://lobste.rs/s/e325gb/yay_v13_aurpocalypse) - [yay v13 and the AURpocalypse](https://jguer.space/blog/2026-06-15-yay-v13)
* [2026-06-18, 09:08:00](https://soylentnews.org/article.pl?sid=26/06/17/1140258&amp;from=rss) - [France&apos;s Digital Sovereignty Push is Struggling to Escape the Microsoft Gravity Well](https://soylentnews.org/article.pl?sid=26/06/17/1140258&amp;from=rss)
* [2026-06-18, 08:52:45](https://news.ycombinator.com/item?id=48582679) - [Ask HN: Is anyone using the A2A protocol?](https://news.ycombinator.com/item?id=48582679)
* [2026-06-18, 08:15:10](https://lobste.rs/s/y9zfbv/rfc_10008_http_query_method) - [RFC 10008: The HTTP QUERY Method](https://blainsmith.com/articles/rfc-10008-http-query-method/)
* [2026-06-18, 07:24:43](https://lobste.rs/s/7wymja/magic_buffers_io_uring_registered) - [Magic Buffers and io_uring Registered Buffers](https://www.mindfruit.co.uk/posts/2025/10/magic-buffers-and-io-uring-write-fixed/)
* [2026-06-18, 07:09:26](https://lobste.rs/s/up3pfu/sigma_45mm_f_2_8_lens_repair_analysis) - [Sigma 45mm f/2.8 Lens Repair &amp; Analysis](https://salvagedcircuitry.com/sigma-45mm.html)
* [2026-06-18, 07:00:00](https://tech.slashdot.org/story/26/06/18/0033211/chinas-ev-price-war-was-built-on-cars-sold-at-a-loss?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s EV Price War Was Built On Cars Sold At a Loss](https://tech.slashdot.org/story/26/06/18/0033211/chinas-ev-price-war-was-built-on-cars-sold-at-a-loss?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-18, 06:36:39](https://lobste.rs/s/nqv7yo/cli_authentication_right_way) - [CLI Authentication, the Right Way](https://www.abgeo.dev/blog/cli-authentication-the-right-way/)
* [2026-06-18, 06:04:20](https://lobste.rs/s/lieueg/announcing_stack_overflow_for_agents) - [Announcing Stack Overflow for Agents](https://stackoverflow.blog/2026/06/10/announcing-stack-overflow-for-agents/)
* [2026-06-18, 05:14:20](https://lobste.rs/s/azy6y2/i_hate_compilers) - [I hate compilers](https://xeiaso.net/notes/2026/anubis-wasm-vendor-binary/)
* [2026-06-18, 05:10:01](https://lobste.rs/s/b0mp2e/changes_emacs_31_i_m_already_daily_driving) - [Changes in Emacs 31 I&apos;m Already Daily Driving](https://rahuljuliato.com/posts/emacs-31-around-the-corner)
* [2026-06-18, 04:24:00](https://soylentnews.org/article.pl?sid=26/06/17/0045227&amp;from=rss) - [Why Not yserver? It’s Xserver, But Rust-y.](https://soylentnews.org/article.pl?sid=26/06/17/0045227&amp;from=rss)
* [2026-06-18, 03:30:00](https://yro.slashdot.org/story/26/06/17/2357242/tesco-moving-40000-server-workloads-off-vmware-amid-broadcoms-abusive-conduct?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tesco Moving 40,000 Server Workloads Off VMware Amid Broadcom&apos;s &apos;Abusive Conduct&apos;](https://yro.slashdot.org/story/26/06/17/2357242/tesco-moving-40000-server-workloads-off-vmware-amid-broadcoms-abusive-conduct?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-18, 03:08:13](https://lobste.rs/s/kfkgl2/audacity_4_0_beta_lets_you_test_its_new) - [Audacity 4.0 beta lets you test its new (nicer) Qt interface](https://www.omgubuntu.co.uk/2026/06/audacity-4-0-beta)
* [2026-06-18, 00:26:06](https://news.ycombinator.com/item?id=48578913) - [Noam Shazeer Joins OpenAI](https://twitter.com/NoamShazeer/status/2067400851438932297)
* [2026-06-17, 23:35:00](https://soylentnews.org/article.pl?sid=26/06/16/122242&amp;from=rss) - [Threads of Underground Fungal Networks Are Long Enough to Reach Beyond the Solar System](https://soylentnews.org/article.pl?sid=26/06/16/122242&amp;from=rss)
* [2026-06-17, 23:00:00](https://it.slashdot.org/story/26/06/17/2030228/microsoft-working-to-patch-rogueplanet-zero-day?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Working To Patch &apos;RoguePlanet&apos; Zero-Day](https://it.slashdot.org/story/26/06/17/2030228/microsoft-working-to-patch-rogueplanet-zero-day?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-17, 22:00:00](https://mobile.slashdot.org/story/26/06/17/2022201/smartphone-market-to-shrink-15-this-year-due-to-memory-crisis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Smartphone Market To Shrink 15% This Year Due To Memory Crisis](https://mobile.slashdot.org/story/26/06/17/2022201/smartphone-market-to-shrink-15-this-year-due-to-memory-crisis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-17, 21:00:00](https://tech.slashdot.org/story/26/06/17/2015221/carvana-is-turning-dealerships-into-playgrounds-test-drive-centers-with-sales-all-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Carvana Is Turning Dealerships Into &apos;Playgrounds,&apos; Test-Drive Centers With Sales All Online](https://tech.slashdot.org/story/26/06/17/2015221/carvana-is-turning-dealerships-into-playgrounds-test-drive-centers-with-sales-all-online?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-17, 20:03:00](https://linux.slashdot.org/story/26/06/17/201217/google-microsoft-and-openai-back-linux-foundations-appia-ai-standards-initiative?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google, Microsoft, and OpenAI Back Linux Foundation&apos;s Appia AI Standards Initiative](https://linux.slashdot.org/story/26/06/17/201217/google-microsoft-and-openai-back-linux-foundations-appia-ai-standards-initiative?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-17, 18:52:00](https://soylentnews.org/article.pl?sid=26/06/16/1144213&amp;from=rss) - [U.S. Gov&apos;t Orders Anthropic to Disable its Newest AI Models and Restrict Foreigner Use](https://soylentnews.org/article.pl?sid=26/06/16/1144213&amp;from=rss)
* [2026-06-17, 17:03:17](https://news.ycombinator.com/item?id=48573268) - [Agentic Resource Discovery Specification](https://agenticresourcediscovery.org/introduction/)
* [2026-06-17, 15:16:40](https://lobste.rs/s/r9fmgk/epic_games_announces_lore_version) - [Epic Games announces Lore version control system](https://lore.org/)
* [2026-06-17, 14:45:43](https://lobste.rs/s/myczjs/leaving_mozilla) - [Leaving Mozilla](https://blog.unitedheroes.net/5751)
* [2026-06-17, 14:08:00](https://soylentnews.org/article.pl?sid=26/06/16/1139240&amp;from=rss) - [Brick Your Phone Temporarily to Aid Fiction-Maxxing](https://soylentnews.org/article.pl?sid=26/06/16/1139240&amp;from=rss)
* [2026-06-17, 13:23:44](https://lobste.rs/s/aqk7vl/pull_requests_are_free_puppies) - [Pull Requests are Free Puppies](https://www.youtube.com/watch?v=x8_ZZhRL3YU&amp;t=1733s)
* [2026-06-17, 09:25:00](https://soylentnews.org/article.pl?sid=26/06/16/0055252&amp;from=rss) - [EU Auto Giants Call For &apos;Made In Europe&apos; Incentives Amid Rising Chinese Competition](https://soylentnews.org/article.pl?sid=26/06/16/0055252&amp;from=rss)
* [2026-06-17, 08:31:43](https://lobste.rs/s/z5wfi9/i_could_ve_rickrolled_entire_fifa_world) - [I Could&apos;ve Rickrolled the Entire FIFA World Cup. All I Needed Was My ID](https://bobdahacker.com/blog/fifa-hack)
* [2026-06-17, 04:33:00](https://soylentnews.org/article.pl?sid=26/06/16/0054257&amp;from=rss) - [Man Jailed for a Month Despite Flock Showing He Was 5 Miles From Crime Scene](https://soylentnews.org/article.pl?sid=26/06/16/0054257&amp;from=rss)
* [2026-06-16, 23:50:00](https://soylentnews.org/article.pl?sid=26/06/16/0051200&amp;from=rss) - [Rivian Is Reusing Its Own Car Batteries In A Very Resourceful Way](https://soylentnews.org/article.pl?sid=26/06/16/0051200&amp;from=rss)
* [2026-06-16, 19:08:00](https://soylentnews.org/politics/article.pl?sid=26/06/15/0344248&amp;from=rss) - [US Solar and Storage Defy Political Hostility to Dominate Q1 Power Installations](https://soylentnews.org/politics/article.pl?sid=26/06/15/0344248&amp;from=rss)
* [2026-06-16, 14:22:00](https://soylentnews.org/article.pl?sid=26/06/15/0335259&amp;from=rss) - [AI Agents Favored $1,500 Sponsored Flights Over $500 Alternatives](https://soylentnews.org/article.pl?sid=26/06/15/0335259&amp;from=rss)
* [2026-06-16, 09:37:00](https://soylentnews.org/article.pl?sid=26/06/15/0328205&amp;from=rss) - [Intel Reportedly Preparing Surprise Return to DDR4 Systems With &apos;Raptor Lake Next&apos;](https://soylentnews.org/article.pl?sid=26/06/15/0328205&amp;from=rss)
* [2026-06-16, 04:51:00](https://soylentnews.org/article.pl?sid=26/06/15/0017250&amp;from=rss) - [What &apos;Emotional Labor&apos; Actually Means — and How Starbucks is Testing its Limits](https://soylentnews.org/article.pl?sid=26/06/15/0017250&amp;from=rss)
* [2026-06-16, 00:05:00](https://soylentnews.org/article.pl?sid=26/06/15/0022216&amp;from=rss) - [Anthropic Warns Claude AI Is Building Itself Faster Than Expected](https://soylentnews.org/article.pl?sid=26/06/15/0022216&amp;from=rss)
* [2026-06-15, 22:36:33](https://news.ycombinator.com/item?id=48547969) - [American Express: Cell-Based Architecture for Resilient Payment Systems](https://americanexpress.io/cell-based-architecture-for-resilient-payment-systems/)
* [2026-06-15, 19:24:00](https://soylentnews.org/article.pl?sid=26/06/15/0016203&amp;from=rss) - [How did Atari Apply Side Art to Arcade Cabinets?](https://soylentnews.org/article.pl?sid=26/06/15/0016203&amp;from=rss)
* [2026-06-15, 17:26:52](https://news.ycombinator.com/item?id=48544429) - [If your product is Great, it doesn&apos;t need to be Good (2010)](http://paulbuchheit.blogspot.com/2010/02/if-your-product-is-great-it-doesnt-need.html)
* [2026-06-15, 16:44:54](https://news.ycombinator.com/item?id=48543872) - [Dutch Railways offers unlimited off-peak train travel nationwide for €49/month](https://www.ns.nl/en/season-tickets/dal-vrij)
* [2026-06-15, 15:32:07](https://news.ycombinator.com/item?id=48542784) - [Emacs, how it all started for me](https://xvw.lol/en/articles/emacs-start.html)
* [2026-06-15, 14:31:00](https://soylentnews.org/article.pl?sid=26/06/15/0013216&amp;from=rss) - [Influential Study Touting ChatGPT in Education Retracted Over Red Flags](https://soylentnews.org/article.pl?sid=26/06/15/0013216&amp;from=rss)
* [2026-06-15, 09:53:00](https://soylentnews.org/article.pl?sid=26/06/14/1921229&amp;from=rss) - [In First, California City Overwhelmingly Votes to Permanently Ban Datacenters](https://soylentnews.org/article.pl?sid=26/06/14/1921229&amp;from=rss)
* [2026-06-15, 05:08:00](https://soylentnews.org/article.pl?sid=26/06/14/1916201&amp;from=rss) - [The Adder at the Heart of Intel&apos;s 8087 Floating-Point Chip](https://soylentnews.org/article.pl?sid=26/06/14/1916201&amp;from=rss)
* [2026-06-15, 00:23:00](https://soylentnews.org/article.pl?sid=26/06/14/1914203&amp;from=rss) - [Physicists Refute Famous 2025 Study Claiming Daylight Saving Time Poses Severe Health Risks](https://soylentnews.org/article.pl?sid=26/06/14/1914203&amp;from=rss)
* [2026-06-14, 19:35:00](https://soylentnews.org/article.pl?sid=26/06/13/1539217&amp;from=rss) - [How Can Technical Solutions Expose Mass Surveillance?](https://soylentnews.org/article.pl?sid=26/06/13/1539217&amp;from=rss)
* [2026-06-14, 14:47:00](https://soylentnews.org/article.pl?sid=26/06/13/1530216&amp;from=rss) - [Scientists Gave an Octopus a Mirror. Here’s What Happened Next ](https://soylentnews.org/article.pl?sid=26/06/13/1530216&amp;from=rss)
* [2026-06-14, 10:03:00](https://soylentnews.org/article.pl?sid=26/06/13/1438234&amp;from=rss) - [Tests Suggest Russian Satellites Can Jam GPS on a Continental Scale](https://soylentnews.org/article.pl?sid=26/06/13/1438234&amp;from=rss)
* [2026-06-14, 05:20:00](https://soylentnews.org/article.pl?sid=26/06/13/1424211&amp;from=rss) - [“Atomic Arch”: Nearly 900 AUR Packages Backdoored with an Infostealer and eBPF Rootkit](https://soylentnews.org/article.pl?sid=26/06/13/1424211&amp;from=rss)
* [2026-06-14, 00:37:00](https://soylentnews.org/article.pl?sid=26/06/12/178256&amp;from=rss) - [ASML Becomes Europe&apos;s Most Valuable Company Ever As Analysts Bet On Higher EUV Output](https://soylentnews.org/article.pl?sid=26/06/12/178256&amp;from=rss)
