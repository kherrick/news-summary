# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Vibe Coding Terminal Editor](https://matklad.github.io/2025/08/31/vibe-coding-terminal-editor.html) - A new approach to coding terminals aimed at enhancing developer productivity with unique features. [Comments](https://lobste.rs/s/yv6nee/vibe_coding_terminal_editor)

* [Minimum Viable CD](https://minimumcd.org/) - An exploration of the smallest unit of continuous delivery practical for software projects. [Comments](https://lobste.rs/s/tj6xfb/minimum_viable_cd)

* [Run a legal LTE network at home for $100](https://lantian.pub/en/article/modify-computer/legal-lte-network-at-home-for-100-bucks.lantian/) - A hands-on guide to setting up a personal LTE network legally with minimal expense. [Comments](https://lobste.rs/s/rdhzeo/run_legal_lte_network_at_home_for_100)

* [How a VPN kill-switch caused sudo to hang](https://anagogistis.com/posts/vpn-sudo-hang/) - A technical deep dive into a rare VPN-related issue affecting Linux systems. [Comments](https://lobste.rs/s/5j9puq/how_vpn_kill_switch_caused_sudo_hang)

* [NetSurf on reMarkable 2](https://akselmo.dev/posts/netsurf-on-remarkable-2/) - Exploration of running an alternate web browser on the reMarkable 2 device. [Comments](https://lobste.rs/s/c6hxxl/netsurf_on_remarkable_2)

## Space and Science

* [Scientists Produce Quantum Entanglement-like Results Without Entangled Particles](https://soylentnews.org/article.pl?sid=25/08/29/2346225&amp;from=rss) - Researchers break new ground in showing quantum-like behaviors without traditional entanglement. [Comments](https://soylentnews.org/article.pl?sid=25/08/29/2346225&amp;from=rss)

* [Lunar soil machine developed to build bricks using sunlight](https://www.moondaily.com/reports/Lunar_soil_machine_developed_to_build_bricks_using_sunlight_999.html) - A novel method developed for moon colonization. [Comments](https://news.ycombinator.com/item?id=45086238)

* [Rare Snail Has a 1-in-40,000 Chance of Finding a Mate. New Zealand Begins the Search](https://news.slashdot.org/story/25/08/30/054244/rare-snail-has-a-1-in-40000-chance-of-finding-a-mate-new-zealand-begins-the-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Conservation efforts to save an extremely rare species. [Comments](https://news.slashdot.org/story/25/08/30/054244/rare-snail-has-a-1-in-40000-chance-of-finding-a-mate-new-zealand-begins-the-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Cultural and Historical Insights

* [Plastic Before Plastic: How gutta-percha shaped the 19th century](https://worldhistory.substack.com/p/plastic-before-plastic) - A retrospective look at an alternative to plastic used in historical technologies. [Comments](https://news.ycombinator.com/item?id=45084193)

* [Growing Up on Alcatraz](https://sf.gazetteer.co/growing-up-on-alcatraz) - An intriguing personal history of childhood life on the famous island prison. [Comments](https://news.ycombinator.com/item?id=45070798)

* [The Last Vestal Virgin and the Fall of Rome](https://debramaymacleod.com/blog/the-last-vestal-virgin-and-the-fall-of-rome) - Historical account on the interplay of religion and empire succession. [Comments](https://news.ycombinator.com/item?id=45053704)

## Health and Human Interest

* [Beta Blockers for Heart Attack Survivors: May Have No Benefit for Most, Could Actually Harm Women](https://science.slashdot.org/story/25/08/31/1854245/beta-blockers-for-heart-attack-survivors-may-have-no-benefit-for-most-could-actually-harm-women?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Study warns about over-prescription and gender-specific effects. [Comments](https://science.slashdot.org/story/25/08/31/1854245/beta-blockers-for-heart-attack-survivors-may-have-no-benefit-for-most-could-actually-harm-women?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Smelling This One Specific Scent Can Boost the Brain's Gray Matter](https://science.slashdot.org/story/25/08/31/0621235/smelling-this-one-specific-scent-can-boost-the-brains-gray-matter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - New research reveals how olfactory stimulation enhances cognition. [Comments](https://science.slashdot.org/story/25/08/31/0621235/smelling-this-one-specific-scent-can-boost-the-brains-gray-matter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Notes on Managing ADHD](https://borretti.me/article/notes-on-managing-adhd) - Practical, real-world insights on coping with ADHD. [Comments](https://news.ycombinator.com/item?id=45083134)

## AI and Ethical Questions

* [Are AI Web Crawlers 'Destroying Websites' In Their Hunt for Training Data?](https://tech.slashdot.org/story/25/08/31/1820249/are-ai-web-crawlers-destroying-websites-in-their-hunt-for-training-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Concerns about the unintended side-effects of AI scraping. [Comments](https://tech.slashdot.org/story/25/08/31/1820249/are-ai-web-crawlers-destroying-websites-in-their-hunt-for-training-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Survey: a third of senior developers say over half their code is AI-generated](https://www.fastly.com/blog/senior-developers-ship-more-ai-code) - The increasing reliance on AI within software development workflows. [Comments](https://news.ycombinator.com/item?id=45083635)

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

* [2025-08-31, 21:42:29](https://news.ycombinator.com/item?id=45087365) - [Polish CEO&apos;s company review bombed after stealing hat from child at tennis game](https://www.dexerto.com/entertainment/polish-ceos-company-review-bombed-after-stealing-hat-from-a-child-at-tennis-game-3244263/)
* [2025-08-31, 21:11:00](https://news.slashdot.org/story/25/08/31/219220/former-us-government-site-climategov-attempts-relaunch-as-non-profit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Former US Government Site Climate.Gov Attempts Relaunch as Non-Profit](https://news.slashdot.org/story/25/08/31/219220/former-us-government-site-climategov-attempts-relaunch-as-non-profit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-31, 20:47:04](https://lobste.rs/s/yv6nee/vibe_coding_terminal_editor) - [Vibe Coding Terminal Editor](https://matklad.github.io/2025/08/31/vibe-coding-terminal-editor.html)
* [2025-08-31, 19:56:52](https://lobste.rs/s/b1swcr/1_problem_16_programming_languages) - [1 Problem, 16 Programming Languages](https://www.youtube.com/watch?v=UVUjnzpQKUo)
* [2025-08-31, 19:49:47](https://lobste.rs/s/en1p2u/we_need_seriously_think_about_what_do_with) - [We need to seriously think about what to do with C++ modules](https://nibblestew.blogspot.com/2025/08/we-need-to-seriously-think-about-what.html)
* [2025-08-31, 19:37:08](https://news.ycombinator.com/item?id=45086346) - [Installing UEFI Firmware on ARM SBCs](https://interfacinglinux.com/2025/08/25/edk2-uefi-for-the-rock-5-itx/)
* [2025-08-31, 19:29:23](https://news.ycombinator.com/item?id=45086276) - [New Ruby Curl bindings with Fiber native support](https://github.com/taf2/curb/blob/master/ChangeLog.md)
* [2025-08-31, 19:27:00](https://science.slashdot.org/story/25/08/31/1854245/beta-blockers-for-heart-attack-survivors-may-have-no-benefit-for-most-could-actually-harm-women?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Beta Blockers for Heart Attack Survivors: May Have No Benefit for Most, Could Actually Harm Women](https://science.slashdot.org/story/25/08/31/1854245/beta-blockers-for-heart-attack-survivors-may-have-no-benefit-for-most-could-actually-harm-women?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-31, 19:24:49](https://news.ycombinator.com/item?id=45086238) - [Lunar soil machine developed to build bricks using sunlight](https://www.moondaily.com/reports/Lunar_soil_machine_developed_to_build_bricks_using_sunlight_999.html)
* [2025-08-31, 19:22:01](https://news.ycombinator.com/item?id=45086210) - [We need to seriously think about what to do with C++ modules](https://nibblestew.blogspot.com/2025/08/we-need-to-seriously-think-about-what.html)
* [2025-08-31, 19:12:00](https://lobste.rs/s/5j9puq/how_vpn_kill_switch_caused_sudo_hang) - [How a VPN kill-switch caused sudo to hang](https://anagogistis.com/posts/vpn-sudo-hang/)
* [2025-08-31, 19:04:03](https://news.ycombinator.com/item?id=45086020) - [Eternal Struggle](https://yoavg.github.io/eternal/)
* [2025-08-31, 18:27:00](https://tech.slashdot.org/story/25/08/31/1820249/are-ai-web-crawlers-destroying-websites-in-their-hunt-for-training-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Are AI Web Crawlers &apos;Destroying Websites&apos; In Their Hunt for Training Data?](https://tech.slashdot.org/story/25/08/31/1820249/are-ai-web-crawlers-destroying-websites-in-their-hunt-for-training-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-31, 18:25:00](https://soylentnews.org/article.pl?sid=25/08/30/1427217&amp;from=rss) - [US Military&apos;s X-37B Spaceplane Stays Relevant With Launch of Another Mission](https://soylentnews.org/article.pl?sid=25/08/30/1427217&amp;from=rss)
* [2025-08-31, 18:22:06](https://lobste.rs/s/tj6xfb/minimum_viable_cd) - [Minimum Viable CD](https://minimumcd.org/)
* [2025-08-31, 17:58:07](https://news.ycombinator.com/item?id=45085318) - [Code Is Debt](https://tornikeo.com/code-is-debt/)
* [2025-08-31, 17:42:43](https://news.ycombinator.com/item?id=45085156) - [How is Ultrassembler so fast?](https://jghuff.com/articles/ultrassembler-so-fast/)
* [2025-08-31, 17:29:07](https://news.ycombinator.com/item?id=45085029) - [Use One Big Server (2022)](https://specbranch.com/posts/one-big-server/)
* [2025-08-31, 17:27:00](https://developers.slashdot.org/story/25/08/30/044226/what-happened-when-unix-co-creator-brian-kernighan-tried-rust?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Happened When Unix Co-Creator Brian Kernighan Tried Rust?](https://developers.slashdot.org/story/25/08/30/044226/what-happened-when-unix-co-creator-brian-kernighan-tried-rust?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-31, 17:15:19](https://news.ycombinator.com/item?id=45084913) - [When the sun will literally set on what&apos;s left of the British Empire](https://oikofuge.com/sun-sets-on-british-empire/)
* [2025-08-31, 17:00:19](https://news.ycombinator.com/item?id=45084759) - [Launch HN: VibeFlow (YC S25) – Web app generator with visual, editable workflows](https://news.ycombinator.com/item?id=45084759)
* [2025-08-31, 17:00:06](https://news.ycombinator.com/item?id=45084757) - [Infisical (YC W23) Is Hiring Solutions Engineers to Scale the OSS Security Stack](https://www.ycombinator.com/companies/infisical/jobs/yaEvock-solutions-engineer)
* [2025-08-31, 16:50:45](https://news.ycombinator.com/item?id=45084673) - [I Don&apos;t Have Spotify](https://idonthavespotify.sjdonado.com/)
* [2025-08-31, 16:06:52](https://lobste.rs/s/opwycf/baby_s_first_type_checker) - [Baby&apos;s first type checker](https://austinhenley.com/blog/babytypechecker.html)
* [2025-08-31, 16:03:30](https://news.ycombinator.com/item?id=45084193) - [Plastic Before Plastic: How gutta-percha shaped the 19th century](https://worldhistory.substack.com/p/plastic-before-plastic)
* [2025-08-31, 15:34:00](https://science.slashdot.org/story/25/08/31/0621235/smelling-this-one-specific-scent-can-boost-the-brains-gray-matter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Smelling This One Specific Scent Can Boost the Brain&apos;s Gray Matter](https://science.slashdot.org/story/25/08/31/0621235/smelling-this-one-specific-scent-can-boost-the-brains-gray-matter?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-31, 15:31:04](https://news.ycombinator.com/item?id=45083952) - [Jujutsu for Everyone](https://jj-for-everyone.github.io/)
* [2025-08-31, 15:29:08](https://lobste.rs/s/s4fffm/jujutsu_for_everyone) - [Jujutsu for everyone](https://jj-for-everyone.github.io/)
* [2025-08-31, 15:05:37](https://lobste.rs/s/umoeqy/vibe_coding_as_coding_veteran) - [Vibe Coding as a Coding Veteran](https://levelup.gitconnected.com/vibe-coding-as-a-coding-veteran-cd370fe2be50)
* [2025-08-31, 14:55:56](https://news.ycombinator.com/item?id=45083635) - [Survey: a third of senior developers say over half their code is AI-generated](https://www.fastly.com/blog/senior-developers-ship-more-ai-code)
* [2025-08-31, 14:43:35](https://lobste.rs/s/2zmszq/replacing_cache_service_with_database) - [Replacing a cache service with a database](https://avi.im/blag/2025/db-cache/)
* [2025-08-31, 14:41:15](https://news.ycombinator.com/item?id=45083495) - [Replacing a cache service with a database](https://avi.im/blag/2025/db-cache/)
* [2025-08-31, 14:34:00](https://news.slashdot.org/story/25/08/30/054244/rare-snail-has-a-1-in-40000-chance-of-finding-a-mate-new-zealand-begins-the-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rare Snail Has a 1-in-40,000 Chance of Finding a Mate. New Zealand Begins the Search](https://news.slashdot.org/story/25/08/30/054244/rare-snail-has-a-1-in-40000-chance-of-finding-a-mate-new-zealand-begins-the-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-31, 14:00:23](https://lobste.rs/s/lvfpzx/is_it_possible_allow_sideloading_keep) - [Is it possible to allow sideloading *and* keep users safe?](https://shkspr.mobi/blog/2025/08/is-it-possible-to-allow-sideloading-and-keep-users-safe/)
* [2025-08-31, 13:49:11](https://news.ycombinator.com/item?id=45083135) - [Spacing Over Cards](https://smagin.fyi/posts/padding-over-cards/)
* [2025-08-31, 13:49:01](https://news.ycombinator.com/item?id=45083134) - [Notes on Managing ADHD](https://borretti.me/article/notes-on-managing-adhd)
* [2025-08-31, 13:38:00](https://soylentnews.org/article.pl?sid=25/08/30/1419247&amp;from=rss) - [A New Security Flaw in TheTruthSpy Phone Spyware is Putting Victims at Risk](https://soylentnews.org/article.pl?sid=25/08/30/1419247&amp;from=rss)
* [2025-08-31, 12:40:47](https://lobste.rs/s/09czfs/this_telegram_must_be_closely) - [\&quot;This telegram must be closely paraphrased before being communicated to anyone.\&quot; Why?](https://history.stackexchange.com/questions/79371/this-telegram-must-be-closely-paraphrased-before-being-communicated-to-anyone)
* [2025-08-31, 12:39:47](https://news.ycombinator.com/item?id=45082731) - [\&quot;This telegram must be closely paraphrased before being communicated\&quot; Why?](https://history.stackexchange.com/questions/79371/this-telegram-must-be-closely-paraphrased-before-being-communicated-to-anyone)
* [2025-08-31, 12:26:17](https://lobste.rs/s/riahcg/some_minor_bugs_proton_s_new) - [Some minor bugs in Proton&apos;s new Authenticator app](https://shkspr.mobi/blog/2025/08/some-minor-bugs-in-protons-new-authenticator-app/)
* [2025-08-31, 12:16:00](https://news.ycombinator.com/item?id=45082595) - [F-Droid site certificate expired](https://gitlab.com/fdroid/fdroid-website/-/issues/883)
* [2025-08-31, 12:14:26](https://news.ycombinator.com/item?id=45082587) - [Why haven&apos;t quantum computers factored 21 yet?](https://algassert.com/post/2500)
* [2025-08-31, 11:34:00](https://science.slashdot.org/story/25/08/31/0430224/study-young-children-diagnosed-with-adhd-often-prescribed-medication-too-quickly?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Study: Young Children Diagnosed with ADHD Often Prescribed Medication Too Quickly](https://science.slashdot.org/story/25/08/31/0430224/study-young-children-diagnosed-with-adhd-often-prescribed-medication-too-quickly?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-31, 10:57:02](https://lobste.rs/s/swvxzh/sometimes_software_is_done_why_hugo_why) - [Sometimes Software is Done, or Why Hugo Why](https://commaok.xyz/post/on_hugo/)
* [2025-08-31, 10:44:59](https://lobste.rs/s/rdhzeo/run_legal_lte_network_at_home_for_100) - [Run a legal LTE network at home for $100](https://lantian.pub/en/article/modify-computer/legal-lte-network-at-home-for-100-bucks.lantian/)
* [2025-08-31, 10:03:32](https://lobste.rs/s/ql4odp/three_years_building_no_code_software_for) - [Three years of building no-code software for grassroots political organizations](https://write.as/conjure-utopia/three-years-of-building-no-code-software-for-political-organizations)
* [2025-08-31, 09:34:34](https://lobste.rs/s/fuahm1/freebsd_status_report_second_quarter) - [FreeBSD Status Report Second Quarter 2025](https://www.freebsd.org/status/report-2025-04-2025-06/)
* [2025-08-31, 08:47:00](https://soylentnews.org/article.pl?sid=25/08/29/2355251&amp;from=rss) - [Transport for London (TfL) Asks Mobile Users to Wear Headphones](https://soylentnews.org/article.pl?sid=25/08/29/2355251&amp;from=rss)
* [2025-08-31, 07:34:00](https://yro.slashdot.org/story/25/08/31/0520222/swatting-hits-a-dozen-us-universities-the-fbi-is-investigating?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Swatting&apos; Hits a Dozen US Universities. The FBI is Investigating](https://yro.slashdot.org/story/25/08/31/0520222/swatting-hits-a-dozen-us-universities-the-fbi-is-investigating?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-31, 07:28:20](https://lobste.rs/s/l1srln/dyslexic_people_working_tech_industry) - [Dyslexic people working in the tech industry](https://www.reddit.com/r/Dyslexia/comments/1n3wi4r/im_looking_for_dyslexic_people_working_in_the/)
* [2025-08-31, 06:14:57](https://lobste.rs/s/nxtj9t/my_foray_into_vlang) - [My foray into Vlang](https://kristun.dev/posts/my-foray-into-vlang/)
* [2025-08-31, 04:34:00](https://entertainment.slashdot.org/story/25/08/31/045201/rick-beato-vs-umg-fighting-copyright-claims-over-music-clips-on-youtube?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rick Beato vs UMG: Fighting Copyright Claims Over Music Clips on YouTube](https://entertainment.slashdot.org/story/25/08/31/045201/rick-beato-vs-umg-fighting-copyright-claims-over-music-clips-on-youtube?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-31, 03:59:00](https://soylentnews.org/article.pl?sid=25/08/29/2346225&amp;from=rss) - [Scientists Produce Quantum Entanglement-like Results Without Entangled Particles](https://soylentnews.org/article.pl?sid=25/08/29/2346225&amp;from=rss)
* [2025-08-31, 02:58:32](https://news.ycombinator.com/item?id=45079962) - [My phone is an ereader now](https://www.davepagurek.com/blog/minimal-phone/)
* [2025-08-31, 01:34:00](https://tech.slashdot.org/story/25/08/31/015202/what-made-meta-suddenly-ban-tens-of-thousands-of-accounts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Made Meta Suddenly Ban Tens of Thousands of Accounts?](https://tech.slashdot.org/story/25/08/31/015202/what-made-meta-suddenly-ban-tens-of-thousands-of-accounts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-31, 00:56:30](https://lobste.rs/s/q5cjww/quake_s_pvs_hidden_gem_rendering) - [Quake&apos;s PVS: A hidden gem of rendering optimization](https://www.youtube.com/watch?v=IfCRHSIg6zo)
* [2025-08-31, 00:04:23](https://lobste.rs/s/vn42xa/quirks_common_lisp_types) - [Quirks of Common Lisp Types](https://www.fosskers.ca/en/blog/cl-type-quirks)
* [2025-08-30, 23:14:00](https://soylentnews.org/article.pl?sid=25/08/29/2330255&amp;from=rss) - [Rare Quadruple Star System May Solve the Mystery of Brown Dwarfs](https://soylentnews.org/article.pl?sid=25/08/29/2330255&amp;from=rss)
* [2025-08-30, 23:09:00](https://entertainment.slashdot.org/story/25/08/30/1850237/five-indie-bands-quit-spotify-after-founders-ai-weapons-tech-investment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Five Indie Bands Quit Spotify After Founder&apos;s AI Weapons Tech Investment](https://entertainment.slashdot.org/story/25/08/30/1850237/five-indie-bands-quit-spotify-after-founders-ai-weapons-tech-investment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-30, 22:09:00](https://hardware.slashdot.org/story/25/08/30/2144210/intel-get-57-billion-early-whats-the-governments-strategy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel Get $5.7 Billion Early. What&apos;s the Government&apos;s Strategy?](https://hardware.slashdot.org/story/25/08/30/2144210/intel-get-57-billion-early-whats-the-governments-strategy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-30, 22:08:46](https://lobste.rs/s/c6hxxl/netsurf_on_remarkable_2) - [NetSurf on reMarkable 2](https://akselmo.dev/posts/netsurf-on-remarkable-2/)
* [2025-08-30, 21:09:00](https://news.slashdot.org/story/25/08/30/215236/did-will-smith-upload-an-ai-enhanced-video---and-is-this-just-the-beginning?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Did Will Smith Upload an AI-Enhanced Video - and Is This Just the Beginning?](https://news.slashdot.org/story/25/08/30/215236/did-will-smith-upload-an-ai-enhanced-video---and-is-this-just-the-beginning?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-30, 19:57:00](https://hardware.slashdot.org/story/25/08/30/1954220/wave-energy-projects-have-come-a-long-way-after-10-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wave Energy Projects Have Come a Long Way After 10 Years](https://hardware.slashdot.org/story/25/08/30/1954220/wave-energy-projects-have-come-a-long-way-after-10-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-30, 19:39:17](https://lobste.rs/s/k0tzud/why_i_use_debian) - [Why I use Debian](https://blog.liw.fi/posts/2025/why-debian/)
* [2025-08-30, 19:24:17](https://lobste.rs/s/vfvbqz/are_we_decentralized_yet) - [Are We Decentralized Yet?](https://arewedecentralizedyet.online/)
* [2025-08-30, 18:34:00](https://hardware.slashdot.org/story/25/08/30/1751217/fusion-power-company-cfs-raises-863m-more-from-google-nvidia-and-many-others?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fusion Power Company CFS Raises $863M More From Google, Nvidia, and Many Others](https://hardware.slashdot.org/story/25/08/30/1751217/fusion-power-company-cfs-raises-863m-more-from-google-nvidia-and-many-others?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-30, 18:34:00](https://soylentnews.org/article.pl?sid=25/08/29/1422213&amp;from=rss) - [4chan and Kiwi Farms Sue UK Regulator Ofcom Over Online Censorship Law](https://soylentnews.org/article.pl?sid=25/08/29/1422213&amp;from=rss)
* [2025-08-30, 17:54:42](https://lobste.rs/s/zoirhl/appealing_ban_user_friendlysock) - [Appealing the ban of user friendlysock](https://lobste.rs/s/zoirhl/appealing_ban_user_friendlysock)
* [2025-08-30, 15:19:34](https://lobste.rs/s/nx9ysg/niri_v25_08) - [Niri v25.08](https://github.com/YaLTeR/niri/releases/tag/v25.08)
* [2025-08-30, 13:51:00](https://soylentnews.org/article.pl?sid=25/08/29/0536231&amp;from=rss) - [US Attorneys General Tell AI Companies They &apos;Will be Held Accountable&apos; for Child Safety Failures](https://soylentnews.org/article.pl?sid=25/08/29/0536231&amp;from=rss)
* [2025-08-30, 09:04:00](https://soylentnews.org/article.pl?sid=25/08/29/0527204&amp;from=rss) - [ADAS (Driver Assist) Gen 2 From BMW](https://soylentnews.org/article.pl?sid=25/08/29/0527204&amp;from=rss)
* [2025-08-30, 04:21:00](https://soylentnews.org/article.pl?sid=25/08/29/0523215&amp;from=rss) - [A Gentle Introduction to CP/M](https://soylentnews.org/article.pl?sid=25/08/29/0523215&amp;from=rss)
* [2025-08-30, 00:10:27](https://news.ycombinator.com/item?id=45070798) - [Growing Up on Alcatraz](https://sf.gazetteer.co/growing-up-on-alcatraz)
* [2025-08-29, 23:35:00](https://soylentnews.org/article.pl?sid=25/08/27/1236219&amp;from=rss) - [Punycode - an Overview by a Soylentil](https://soylentnews.org/article.pl?sid=25/08/27/1236219&amp;from=rss)
* [2025-08-29, 18:51:00](https://soylentnews.org/article.pl?sid=25/08/28/1853258&amp;from=rss) - [Linux Foundation Says Yes to NoSQL Via DocumentDB](https://soylentnews.org/article.pl?sid=25/08/28/1853258&amp;from=rss)
* [2025-08-29, 14:07:00](https://soylentnews.org/article.pl?sid=25/08/28/1849238&amp;from=rss) - [Large Reasoning Models Hitting Limits, Say Apple Researchers](https://soylentnews.org/article.pl?sid=25/08/28/1849238&amp;from=rss)
* [2025-08-29, 09:22:00](https://soylentnews.org/article.pl?sid=25/08/28/1843236&amp;from=rss) - [Breathwork Can Induce Altered States of Consciousness](https://soylentnews.org/article.pl?sid=25/08/28/1843236&amp;from=rss)
* [2025-08-29, 04:43:00](https://soylentnews.org/article.pl?sid=25/08/28/1214205&amp;from=rss) - [Mercedes Demonstrates Five Minute BEV Charging While Setting Speed Records](https://soylentnews.org/article.pl?sid=25/08/28/1214205&amp;from=rss)
* [2025-08-28, 23:59:00](https://soylentnews.org/article.pl?sid=25/08/28/1211212&amp;from=rss) - [Microsoft&apos;s Windows 95 Release Was 30 Years Ago, the First Time Software Was a Pop Culture Smash](https://soylentnews.org/article.pl?sid=25/08/28/1211212&amp;from=rss)
* [2025-08-28, 19:10:00](https://soylentnews.org/article.pl?sid=25/08/27/1455216&amp;from=rss) - [SpaceX’s Latest Dragon Mission Will Breathe More Fire at the Space Station](https://soylentnews.org/article.pl?sid=25/08/27/1455216&amp;from=rss)
* [2025-08-28, 17:58:50](https://news.ycombinator.com/item?id=45055065) - [Cricket, Fandom, and the Unspoken Price of Fantasy Gaming](https://uselessmbaguy.substack.com/p/cricket-fandom-and-the-unspoken-price)
* [2025-08-28, 15:55:15](https://news.ycombinator.com/item?id=45053764) - [Vibe coding as a coding veteran: from 8-bit assembly to English-as-code](https://levelup.gitconnected.com/vibe-coding-as-a-coding-veteran-cd370fe2be50)
* [2025-08-28, 15:50:09](https://news.ycombinator.com/item?id=45053704) - [The Last Vestal Virgin and the Fall of Rome](https://debramaymacleod.com/blog/the-last-vestal-virgin-and-the-fall-of-rome)
* [2025-08-28, 14:22:00](https://soylentnews.org/article.pl?sid=25/08/27/1449220&amp;from=rss) - [How the Cavefish Lost its Eyes— Again and Again](https://soylentnews.org/article.pl?sid=25/08/27/1449220&amp;from=rss)
* [2025-08-28, 09:34:00](https://soylentnews.org/article.pl?sid=25/08/27/2323243&amp;from=rss) - [An Empty Strip and Fewer Tips: is Las Vegas in Trouble?](https://soylentnews.org/article.pl?sid=25/08/27/2323243&amp;from=rss)
* [2025-08-28, 04:52:00](https://soylentnews.org/article.pl?sid=25/08/27/1232257&amp;from=rss) - [Science Marches on](https://soylentnews.org/article.pl?sid=25/08/27/1232257&amp;from=rss)
* [2025-08-28, 00:04:00](https://soylentnews.org/article.pl?sid=25/08/27/1225221&amp;from=rss) - [Xz Format Inadequate for General Use](https://soylentnews.org/article.pl?sid=25/08/27/1225221&amp;from=rss)
* [2025-08-27, 22:21:18](https://news.ycombinator.com/item?id=45046066) - [Lord of the Io_uring (2020)](https://unixism.net/loti/)
* [2025-08-27, 19:22:00](https://soylentnews.org/article.pl?sid=25/08/27/1222255&amp;from=rss) - [Google Will Require Developer Verification to Install Android Apps, Including Sideloading](https://soylentnews.org/article.pl?sid=25/08/27/1222255&amp;from=rss)
* [2025-08-27, 18:21:39](https://news.ycombinator.com/item?id=45043126) - [How to run latest Vegas Pro 22 in Windows 7 x64](https://trackerninja.codeberg.page/post/how-to-run-latest-vegas-pro-22-in-windows-7-no-matter-what/)
* [2025-08-27, 18:08:43](https://news.ycombinator.com/item?id=45042985) - [A 20-Year-Old Algorithm Can Help Us Understand Transformer Embeddings](http://ai.stanford.edu/blog/db-ksvd/)
* [2025-08-27, 14:34:00](https://soylentnews.org/article.pl?sid=25/08/26/1126243&amp;from=rss) - [Postal Services Around the World Suspend Deliveries to US: How Will It Affect You?](https://soylentnews.org/article.pl?sid=25/08/26/1126243&amp;from=rss)
* [2025-08-27, 09:48:00](https://soylentnews.org/article.pl?sid=25/08/26/1117241&amp;from=rss) - [Scientists Pioneer Sustainable Carbon Capture From Shrimp Waste](https://soylentnews.org/article.pl?sid=25/08/26/1117241&amp;from=rss)
* [2025-08-27, 05:03:00](https://soylentnews.org/politics/article.pl?sid=25/08/26/1113220&amp;from=rss) - [Trump Threatens Taxes, Bans, for Nations That Tax Big Tech](https://soylentnews.org/politics/article.pl?sid=25/08/26/1113220&amp;from=rss)
* [2025-08-27, 00:16:00](https://soylentnews.org/article.pl?sid=25/08/26/0059245&amp;from=rss) - [Twenty Years After Katrina: How Levee Failures Changed America](https://soylentnews.org/article.pl?sid=25/08/26/0059245&amp;from=rss)
