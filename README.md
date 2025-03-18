# [News Summary](https://kherrick.github.io/news-summary/)

## Medical Innovations

* [New Form of Parkinson's Treatment Uses Real-Time Deep-Brain Stimulation](https://science.slashdot.org/story/25/03/18/0443229/new-form-of-parkinsons-treatment-uses-real-time-deep-brain-stimulation?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Technological Breakthroughs

* [BYD Unveils New Super-Charging EV Tech With Peak Speeds of 1,000 kW](https://hardware.slashdot.org/story/25/03/17/2350228/byd-unveils-new-super-charging-ev-tech-with-peak-speeds-of-1000-kw?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [People Are Using Google's New AI Model To Remove Watermarks From Images](https://tech.slashdot.org/story/25/03/17/1939254/people-are-using-googles-new-ai-model-to-remove-watermarks-from-images?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [After 47 years, OpenVMS gets a package manager (VSP)](https://raymii.org/s/blog/After_47_years_OpenVMS_gets_a_package_manager_VSP.html)

## Science Exploration

* [Chaos in Gravity - the Quantum Based Magnetic Monopole of Mass?](https://soylentnews.org/article.pl?sid=25/03/17/123238&from=rss)

* [Quantum Speedup Found for Class of Hard Problems](https://www.quantamagazine.org/quantum-speedup-found-for-huge-class-of-hard-problems-20250317/)

* [World's Smallest Microcontroller](https://soylentnews.org/article.pl?sid=25/03/15/1617256&from=rss)

## Unconventional and Noteworthy

* [When Oregon blew up a whale with 20 cases of dynamite](https://katu.com/news/local/exploding-whale-day-54-years-since-whale-infamously-blown-up-on-oregon-beach)

* [Hidden Messages in Emojis and Hacking the US Treasury](https://slamdunksoftware.substack.com/p/hidden-messages-in-emojis-and-hacking)

## Open Source and Development

* [GIMP 3.0 Released](https://www.gimp.org/news/2025/03/16/gimp-3-0-released/)

* [I built myself a watch](https://www.thewkblog.com/2025/03/16/i-built-myself-a-watch/)

* [Docs: Open-source collaborative notes, wiki, and documentation platform by the French government](https://docs.numerique.gouv.fr/)

## Historical Reflections

* [5 Years After Covid-19 Became a Pandemic, Are We Ready for What's Next?](https://soylentnews.org/article.pl?sid=25/03/15/1357206&from=rss)

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

* [2025-03-18, 07:00:00](https://science.slashdot.org/story/25/03/18/0443229/new-form-of-parkinsons-treatment-uses-real-time-deep-brain-stimulation?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [New Form of Parkinson's Treatment Uses Real-Time Deep-Brain Stimulation](https://science.slashdot.org/story/25/03/18/0443229/new-form-of-parkinsons-treatment-uses-real-time-deep-brain-stimulation?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-18, 06:52:05](https://lobste.rs/s/bbdx4m/how_track_document_known_issues) - [How to Track and Document Known Issues Effectively in Software Projects](https://l.idaszak.com/l-known-issues)
* [2025-03-18, 06:15:22](https://lobste.rs/s/1htmqf/extracting_content_from_lcp_protected) - [Extracting content from an LCP \"protected\" ePub](https://shkspr.mobi/blog/2025/03/towards-extracting-content-from-an-lcp-protected-epub/)
* [2025-03-18, 05:27:45](https://lobste.rs/s/geiygp/building_search_engine_from_scratch) - [Building a search engine from scratch](https://jdrouet.github.io/posts/202503161800-search-engine-intro/)
* [2025-03-18, 04:05:45](https://news.ycombinator.com/item?id=43395658) - [When Oregon blew up a whale with 20 cases of dynamite](https://katu.com/news/local/exploding-whale-day-54-years-since-whale-infamously-blown-up-on-oregon-beach)
* [2025-03-18, 03:38:00](https://soylentnews.org/article.pl?sid=25/03/17/123238&from=rss) - [Chaos in Gravity - the Quantum Based Magnetic Monopole of Mass?](https://soylentnews.org/article.pl?sid=25/03/17/123238&from=rss)
* [2025-03-18, 03:31:36](https://news.ycombinator.com/item?id=43395496) - [The Calculated Typer](https://bahr.io/pubs/entries/calctyper.html)
* [2025-03-18, 03:30:00](https://tech.slashdot.org/story/25/03/18/000234/hollywood-urges-trump-to-not-let-ai-companies-exploit-copyrighted-works?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Hollywood Urges Trump To Not Let AI Companies 'Exploit' Copyrighted Works](https://tech.slashdot.org/story/25/03/18/000234/hollywood-urges-trump-to-not-let-ai-companies-exploit-copyrighted-works?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-18, 02:42:16](https://lobste.rs/s/gqyrxk/can_we_consider_self_promo_discussion_off) - [Can we consider self-promo discussion off-topic?](https://lobste.rs/s/gqyrxk/can_we_consider_self_promo_discussion_off)
* [2025-03-18, 02:05:41](https://lobste.rs/s/uti1z4/parser_combinators_under_hood) - [Parser combinators under the hood](https://youtu.be/hFO9G0Va__0)
* [2025-03-18, 01:37:19](https://news.ycombinator.com/item?id=43394881) - [Rhombus Language](https://rhombus-lang.org)
* [2025-03-18, 01:25:00](https://hardware.slashdot.org/story/25/03/17/2350228/byd-unveils-new-super-charging-ev-tech-with-peak-speeds-of-1000-kw?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [BYD Unveils New Super-Charging EV Tech With Peak Speeds of 1,000 kW](https://hardware.slashdot.org/story/25/03/17/2350228/byd-unveils-new-super-charging-ev-tech-with-peak-speeds-of-1000-kw?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-18, 01:00:34](https://news.ycombinator.com/item?id=43394621) - [Doctor Droid (YC W23) Is Hiring](https://www.ycombinator.com/companies/doctor-droid/jobs/2v9x6QW-ai-lead)
* [2025-03-18, 00:45:00](https://hardware.slashdot.org/story/25/03/17/2129257/google-is-switching-legacy-g-suite-users-to-pooled-workspace-storage?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google Is Switching Legacy G Suite Users To Pooled Workspace Storage](https://hardware.slashdot.org/story/25/03/17/2129257/google-is-switching-legacy-g-suite-users-to-pooled-workspace-storage?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-18, 00:10:46](https://lobste.rs/s/rm7jdg/offline_pki_using_3_yubikeys_arm_single) - [Offline PKI using 3 YubiKeys and an ARM single board computer](https://vincent.bernat.ch/en/blog/2025-offline-pki-yubikeys)
* [2025-03-18, 00:02:00](https://slashdot.org/story/25/03/17/2122232/roku-tests-autoplaying-ads-loading-before-the-home-screen?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Roku Tests Autoplaying Ads Loading Before the Home Screen](https://slashdot.org/story/25/03/17/2122232/roku-tests-autoplaying-ads-loading-before-the-home-screen?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-17, 23:52:34](https://news.ycombinator.com/item?id=43394087) - [But how to get to that European cloud?](https://berthub.eu/articles/posts/now-how-to-get-that-european-cloud/)
* [2025-03-17, 23:35:11](https://lobste.rs/s/jtk4tx/gimp_3_0_released) - [GIMP 3.0 Released](https://www.gimp.org/news/2025/03/16/gimp-3-0-released/)
* [2025-03-17, 23:35:02](https://news.ycombinator.com/item?id=43393924) - [Past and Present Futures of User Interface Design](https://www.datagubbe.se/futui/)
* [2025-03-17, 23:25:53](https://news.ycombinator.com/item?id=43393822) - [GIMP 3.0](https://testing.gimp.org/news/2025/03/16/gimp-3-0-released/)
* [2025-03-17, 23:20:00](https://tech.slashdot.org/story/25/03/17/2117212/top-broadband-official-exits-commerce-department-with-warning-about-starlink?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Top Broadband Official Exits Commerce Department With Warning About Starlink](https://tech.slashdot.org/story/25/03/17/2117212/top-broadband-official-exits-commerce-department-with-warning-about-starlink?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-17, 22:53:00](https://soylentnews.org/article.pl?sid=25/03/15/1626204&from=rss) - [OpenAI Wants All The Data And For US Law To Apply Everywhere](https://soylentnews.org/article.pl?sid=25/03/15/1626204&from=rss)
* [2025-03-17, 22:40:00](https://tech.slashdot.org/story/25/03/17/215231/alphabet-back-in-talks-to-buy-wiz-for-30-billion?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Alphabet Back In Talks To Buy Wiz For $30 Billion](https://tech.slashdot.org/story/25/03/17/215231/alphabet-back-in-talks-to-buy-wiz-for-30-billion?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-17, 22:05:04](https://news.ycombinator.com/item?id=43393198) - [Show HN: I Built an iOS app to locate stray animals](https://apps.apple.com/us/app/straysync/id6742747753)
* [2025-03-17, 22:00:00](https://apple.slashdot.org/story/25/03/17/206213/apple-to-launch-thinner-iphone-17-air-as-step-toward-port-free-design?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple To Launch Thinner iPhone 17 'Air' as Step Toward Port-Free Design](https://apple.slashdot.org/story/25/03/17/206213/apple-to-launch-thinner-iphone-17-air-as-step-toward-port-free-design?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-17, 21:34:53](https://news.ycombinator.com/item?id=43392950) - [Quantum Speedup Found for Class of Hard Problems](https://www.quantamagazine.org/quantum-speedup-found-for-huge-class-of-hard-problems-20250317/)
* [2025-03-17, 21:20:00](https://tech.slashdot.org/story/25/03/17/1948219/gimp-30-released?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [GIMP 3.0 Released](https://tech.slashdot.org/story/25/03/17/1948219/gimp-30-released?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-17, 20:43:35](https://news.ycombinator.com/item?id=43392549) - [The High Heel Problem](https://simonschreibt.de/gat/the-high-heel-problem/)
* [2025-03-17, 20:42:00](https://developers.slashdot.org/story/25/03/17/1946256/sobering-revenue-stats-of-70k-mobile-apps-show-why-devs-beg-for-subscriptions?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Sobering Revenue Stats of 70K Mobile Apps Show Why Devs Beg For Subscriptions](https://developers.slashdot.org/story/25/03/17/1946256/sobering-revenue-stats-of-70k-mobile-apps-show-why-devs-beg-for-subscriptions?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-17, 20:40:52](https://news.ycombinator.com/item?id=43392521) - [Show HN: OpenTimes – Free travel times between U.S. Census geographies](https://opentimes.org)
* [2025-03-17, 20:20:33](https://lobste.rs/s/uvi7es/wherein_i_explain_why_emacs_is_best_tool) - [Wherein I Explain Why Emacs Is The Best Tool For WordPress](https://lars.ingebrigtsen.no/2025/03/16/wherein-i-explain-why-emacs-is-the-best-tool-for-wordpress/)
* [2025-03-17, 20:11:09](https://news.ycombinator.com/item?id=43392295) - [After 47 years, OpenVMS gets a package manager (VSP)](https://raymii.org/s/blog/After_47_years_OpenVMS_gets_a_package_manager_VSP.html)
* [2025-03-17, 20:10:57](https://lobste.rs/s/4guing/after_47_years_openvms_gets_package) - [After 47 years, OpenVMS gets a package manager (VSP)](https://raymii.org/s/blog/After_47_years_OpenVMS_gets_a_package_manager_VSP.html)
* [2025-03-17, 20:02:00](https://tech.slashdot.org/story/25/03/17/1939254/people-are-using-googles-new-ai-model-to-remove-watermarks-from-images?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [People Are Using Google's New AI Model To Remove Watermarks From Images](https://tech.slashdot.org/story/25/03/17/1939254/people-are-using-googles-new-ai-model-to-remove-watermarks-from-images?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-17, 19:23:08](https://lobste.rs/s/hqxvb6/atrocious_state_binary_compatibility_on) - [The Atrocious State Of Binary Compatibility on Linux and How To Address It](https://jangafx.com/insights/linux-binary-compatibility)
* [2025-03-17, 19:22:00](https://tech.slashdot.org/story/25/03/17/183209/huawei-to-pivot-to-linux-harmonyos-as-microsoft-windows-license-expires?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Huawei To Pivot To Linux, HarmonyOS as Microsoft Windows License Expires](https://tech.slashdot.org/story/25/03/17/183209/huawei-to-pivot-to-linux-harmonyos-as-microsoft-windows-license-expires?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-17, 19:11:13](https://lobste.rs/s/speged/verifiability_is_limit) - [Verifiability is the Limit](https://alperenkeles.com/posts/verifiability-is-the-limit/)
* [2025-03-17, 18:42:00](https://games.slashdot.org/story/25/03/17/1747227/xbox-360-consoles-can-now-be-hacked-with-just-a-usb-key?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Xbox 360 Consoles Can Now Be Hacked With Just a USB Key](https://games.slashdot.org/story/25/03/17/1747227/xbox-360-consoles-can-now-be-hacked-with-just-a-usb-key?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-17, 18:36:21](https://news.ycombinator.com/item?id=43391459) - [Archival Storage](https://blog.dshr.org/2025/03/archival-storage.html)
* [2025-03-17, 18:24:49](https://lobste.rs/s/tzjxrc/password_reuse_is_rampant_nearly_half) - [Password reuse is rampant: nearly half of observed user logins are compromised](https://blog.cloudflare.com/password-reuse-rampant-half-user-logins-compromised/)
* [2025-03-17, 18:11:00](https://soylentnews.org/article.pl?sid=25/03/15/1622220&from=rss) - [Six Weeks of CloudFlare Stalling; Still Blocking Niche Browsers](https://soylentnews.org/article.pl?sid=25/03/15/1622220&from=rss)
* [2025-03-17, 18:00:00](https://news.slashdot.org/story/25/03/17/1740242/harvard-says-tuition-will-be-free-for-families-making-200k-or-less?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Harvard Says Tuition Will Be Free For Families Making $200K or Less](https://news.slashdot.org/story/25/03/17/1740242/harvard-says-tuition-will-be-free-for-families-making-200k-or-less?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-17, 17:38:06](https://lobste.rs/s/yhxoqu/tiny_pointers) - [Tiny Pointers](https://arxiv.org/abs/2111.12800)
* [2025-03-17, 17:36:20](https://lobste.rs/s/s5p1ng/announcing_snix) - [Announcing Snix](https://snix.dev/blog/announcing-snix/)
* [2025-03-17, 17:25:35](https://news.ycombinator.com/item?id=43390747) - [Dataminr tracked Gaza-related protests](https://theintercept.com/2025/03/17/lapd-surveillance-gaza-palestine-protests-dataminr/)
* [2025-03-17, 17:20:00](https://tech.slashdot.org/story/25/03/17/0723230/alphabet-spins-off-laser-based-internet-project-taara-from-moonshot-unit?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Alphabet Spins Off Laser-Based Internet Project Taara From 'Moonshot' Unit](https://tech.slashdot.org/story/25/03/17/0723230/alphabet-spins-off-laser-based-internet-project-taara-from-moonshot-unit?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-17, 17:10:59](https://news.ycombinator.com/item?id=43390595) - [Wall Street’s ‘Private Rooms’](https://www.bloomberg.com/news/features/2025-03-16/wall-street-s-dark-pools-grow-murkier-with-private-rooms)
* [2025-03-17, 17:07:43](https://lobste.rs/s/7iel5b/rhombus_programming_language) - [The Rhombus Programming Language](https://rhombus-lang.org)
* [2025-03-17, 16:55:17](https://news.ycombinator.com/item?id=43390467) - [Alphabet spins out Taara – Internet over lasers](https://x.company/blog/posts/taara-graduation/)
* [2025-03-17, 16:47:02](https://news.ycombinator.com/item?id=43390400) - [Deep Learning Is Not So Mysterious or Different](https://arxiv.org/abs/2503.02113)
* [2025-03-17, 15:25:49](https://lobste.rs/s/zmreeg/introducing_intel_advanced_performance) - [Introducing Intel® Advanced Performance Extensions (Intel® APX)](https://www.intel.com/content/www/us/en/developer/articles/technical/advanced-performance-extensions-apx.html)
* [2025-03-17, 15:10:25](https://lobste.rs/s/r8mdl9/http_3_is_everywhere_nowhere) - [HTTP/3 is everywhere but nowhere](https://httptoolkit.com/blog/http3-quic-open-source-support-nowhere/)
* [2025-03-17, 15:02:04](https://lobste.rs/s/d69ogy/installing_sassc_ruby_gem_on_mac) - [Installing the sassc Ruby gem on a Mac. A debugging story](https://www.schneems.com/2025/03/17/installing-the-sassc-ruby-gem-on-a-mac-a-debugging-story/)
* [2025-03-17, 13:32:32](https://lobste.rs/s/tb9lr7/optimal_bounds_for_open_addressing) - [Optimal Bounds for Open Addressing Without Reordering](https://arxiv.org/abs/2501.02305)
* [2025-03-17, 13:23:00](https://soylentnews.org/article.pl?sid=25/03/15/1619204&from=rss) - [NIST Selects HQC as Fifth Algorithm for Post-Quantum Encryption](https://soylentnews.org/article.pl?sid=25/03/15/1619204&from=rss)
* [2025-03-17, 13:21:24](https://lobste.rs/s/w05k9f/i_built_myself_watch) - [I built myself a watch](https://www.thewkblog.com/2025/03/16/i-built-myself-a-watch/)
* [2025-03-17, 11:29:04](https://news.ycombinator.com/item?id=43387334) - [Stupid Smart Pointers in C](http://blog.kevinalbs.com/stupid_smart_pointers)
* [2025-03-17, 11:10:11](https://lobste.rs/s/dmuad3/mitigating_sourcehut_s_partial_outage) - [Mitigating SourceHut's partial outage caused by aggressive crawlers](https://status.sr.ht/issues/2025-03-17-git.sr.ht-llms/)
* [2025-03-17, 10:59:43](https://lobste.rs/s/0zz0ek/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/0zz0ek/what_are_you_doing_this_week)
* [2025-03-17, 08:36:00](https://soylentnews.org/article.pl?sid=25/03/15/1617256&from=rss) - [World's Smallest Microcontroller](https://soylentnews.org/article.pl?sid=25/03/15/1617256&from=rss)
* [2025-03-17, 03:50:00](https://soylentnews.org/article.pl?sid=25/03/15/1220208&from=rss) - [ESA Cuts the Ribbon at 34,000-Core HPC Center](https://soylentnews.org/article.pl?sid=25/03/15/1220208&from=rss)
* [2025-03-16, 23:56:37](https://lobste.rs/s/2a8x3n/why_we_ditched_next_js_never_looked_back) - [Why we ditched Next.js and never looked back](https://northflank.com/blog/why-we-ditched-next-js-and-never-looked-back)
* [2025-03-16, 23:07:00](https://soylentnews.org/article.pl?sid=25/03/15/1540201&from=rss) - [A New Age for Geothermal](https://soylentnews.org/article.pl?sid=25/03/15/1540201&from=rss)
* [2025-03-16, 18:20:00](https://soylentnews.org/article.pl?sid=25/03/15/141211&from=rss) - [Apple Encrypted Data Row Case Begins in Secret](https://soylentnews.org/article.pl?sid=25/03/15/141211&from=rss)
* [2025-03-16, 16:18:21](https://lobste.rs/s/m1iuiq/docs_open_source_collaborative_notes) - [Docs: Open-source collaborative notes, wiki, and documentation platform by the French government](https://docs.numerique.gouv.fr/)
* [2025-03-16, 13:34:00](https://soylentnews.org/article.pl?sid=25/03/15/1357206&from=rss) - [5 Years After Covid-19 Became a Pandemic, Are We Ready for What's Next?](https://soylentnews.org/article.pl?sid=25/03/15/1357206&from=rss)
* [2025-03-16, 12:57:49](https://news.ycombinator.com/item?id=43378671) - [Breaking Up with On-Call](https://reflector.dev/articles/breaking-up-with-on-call/)
* [2025-03-16, 12:50:56](https://news.ycombinator.com/item?id=43378627) - [Extracting content from an LCP “protected” ePub](https://shkspr.mobi/blog/2025/03/towards-extracting-content-from-an-lcp-protected-epub/)
* [2025-03-16, 11:05:58](https://news.ycombinator.com/item?id=43378114) - [PrintedLabs – 3D printable optical experiment equipment](https://printedlabs.uni-bayreuth.de/en)
* [2025-03-16, 10:33:32](https://news.ycombinator.com/item?id=43378001) - [Mlx-community/OLMo-2-0325-32B-Instruct-4bit](https://simonwillison.net/2025/Mar/16/olmo2/)
* [2025-03-16, 10:02:21](https://news.ycombinator.com/item?id=43377897) - [Show HN: Cascii – A portable ASCII diagram builder written in vanilla JavaScript](https://github.com/casparwylie/cascii-core)
* [2025-03-16, 08:46:00](https://soylentnews.org/article.pl?sid=25/03/15/1228252&from=rss) - [Sidewinder Advanced Persistent Threat (APT) Shifts to Targeting of Nuclear, Maritime Orgs](https://soylentnews.org/article.pl?sid=25/03/15/1228252&from=rss)
* [2025-03-16, 06:31:07](https://lobste.rs/s/miyoai/review_helix_after_1_5_years) - [A Review of Helix after 1.5 Years](https://felix-knorr.net/posts/2025-03-16-helix-review.html)
* [2025-03-16, 04:01:00](https://soylentnews.org/article.pl?sid=25/03/15/1558246&from=rss) - [SpaceX Launches Astronauts for Long-Awaited International Space Station Crew Swap](https://soylentnews.org/article.pl?sid=25/03/15/1558246&from=rss)
* [2025-03-15, 23:17:00](https://soylentnews.org/article.pl?sid=25/03/14/1938229&from=rss) - [No Project is an Island: Why You Need SBOMs and Dependency Management](https://soylentnews.org/article.pl?sid=25/03/14/1938229&from=rss)
* [2025-03-15, 19:45:04](https://news.ycombinator.com/item?id=43374753) - [Don't Try to Reform Science](https://maxwellforbes.com/posts/dont-try-to-reform-science/)
* [2025-03-15, 18:38:19](https://news.ycombinator.com/item?id=43374369) - [Extracting DNA from the air – DNA evidence of human occupancy in indoor premises](https://www.nature.com/articles/s41598-023-46151-7)
* [2025-03-15, 18:33:00](https://soylentnews.org/article.pl?sid=25/03/14/1933241&from=rss) - [How a Rapidly Growing Population of Crocs Has Been Impacting Northern Territories Ecosystem](https://soylentnews.org/article.pl?sid=25/03/14/1933241&from=rss)
* [2025-03-15, 13:48:00](https://soylentnews.org/politics/article.pl?sid=25/03/14/1930253&from=rss) - [Judge Calls Doge Firings A \"Sham\", Orders Thousands Of Workers To Be Reinstated Immediately](https://soylentnews.org/politics/article.pl?sid=25/03/14/1930253&from=rss)
* [2025-03-15, 09:07:00](https://soylentnews.org/article.pl?sid=25/03/14/1113259&from=rss) - [Bad News for Low Orbit Satellites: Earth's Thermosphere is Shrinking](https://soylentnews.org/article.pl?sid=25/03/14/1113259&from=rss)
* [2025-03-15, 04:22:00](https://soylentnews.org/article.pl?sid=25/03/14/115251&from=rss) - [AMD's Zen 6-Based Desktop Processors May Feature Up to 24 Cores](https://soylentnews.org/article.pl?sid=25/03/14/115251&from=rss)
* [2025-03-14, 23:34:00](https://soylentnews.org/article.pl?sid=25/03/14/0056219&from=rss) - [The Cheapest Way to Supercharge America's Power Grid](https://soylentnews.org/article.pl?sid=25/03/14/0056219&from=rss)
* [2025-03-14, 18:47:00](https://soylentnews.org/article.pl?sid=25/03/13/1729224&from=rss) - [Humans Have a Third Set of Teeth: Scientists Discover Medicine to Grow Them](https://soylentnews.org/article.pl?sid=25/03/13/1729224&from=rss)
* [2025-03-14, 16:41:26](https://news.ycombinator.com/item?id=43364368) - [Six mistakes I made in my dioramas-and-felt Steam game and one I didn't](https://novalis.org/blog/2025-03-13-six-mistakes-i-made-and-one-i-avoided.html)
* [2025-03-14, 14:01:00](https://soylentnews.org/article.pl?sid=25/03/13/150217&from=rss) - [Why Attention Limitations Let Idea Thieves Thrive in Workplaces](https://soylentnews.org/article.pl?sid=25/03/13/150217&from=rss)
* [2025-03-14, 11:00:41](https://news.ycombinator.com/item?id=43361389) - [Theory crafting a system for 1000 simultaneous micro SD card ingests](https://forum.level1techs.com/t/theory-crafting-a-system-for-maximum-simultaneous-micro-sd-card-ingest/227159)
* [2025-03-14, 09:14:00](https://soylentnews.org/article.pl?sid=25/03/13/1011234&from=rss) - [General Fusion Fires Up its Newest Steampunk Fusion Reactor](https://soylentnews.org/article.pl?sid=25/03/13/1011234&from=rss)
* [2025-03-14, 07:02:39](https://news.ycombinator.com/item?id=43360251) - [HTTP/3 is everywhere but nowhere](https://httptoolkit.com/blog/http3-quic-open-source-support-nowhere/)
* [2025-03-14, 04:29:00](https://soylentnews.org/article.pl?sid=25/03/12/190247&from=rss) - [This ‘Dune’ Isn't Fiction. It's the Longest Conveyer Belt in the US and Moving Sand in Texas](https://soylentnews.org/article.pl?sid=25/03/12/190247&from=rss)
* [2025-03-14, 03:13:26](https://news.ycombinator.com/item?id=43359264) - [Hidden Messages in Emojis and Hacking the US Treasury](https://slamdunksoftware.substack.com/p/hidden-messages-in-emojis-and-hacking)
