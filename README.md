# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Innovations and Updates

* [GIMP 3.0 Released](https://tech.slashdot.org/story/25/03/17/1948219/gimp-30-released?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The popular image editing software GIMP has rolled out its long-awaited 3.0 version, offering users significant new features and enhancements.

* [After 47 years, OpenVMS gets a package manager (VSP)](https://raymii.org/s/blog/After_47_years_OpenVMS_gets_a_package_manager_VSP.html) - OpenVMS introduces its first-ever package manager, a landmark update for the 47-year-old operating system.

* [Zero-Knowledge Proofs](https://youtu.be/Otvcbw6k4eo) - Explore an in-depth explanation of zero-knowledge proofs through an accessible video overview.

* [The Rhombus Programming Language](https://rhombus-lang.org) - A new programming language concept aiming to redefine interoperability and developer experience.

* [Harvard Says Tuition Will Be Free For Families Making $200K or Less](https://news.slashdot.org/story/25/03/17/1740242/harvard-says-tuition-will-be-free-for-families-making-200k-or-less?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Harvard takes a major step towards inclusive education with its new tuition policy.

* [Alphabet Spins Off Laser-Based Internet Project Taara From 'Moonshot' Unit](https://tech.slashdot.org/story/25/03/17/0723230/alphabet-spins-off-laser-based-internet-project-taara-from-moonshot-unit?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Alphabet's innovative laser-based internet project moves forward as an independent initiative.

## AI and Machine Learning Developments

* [Google's AI 'Co-Scientist' Solved a 10-Year Superbug Problem in Two Days](https://science.slashdot.org/story/25/03/17/039241/googles-ai-co-scientist-solved-a-10-year-superbug-problem-in-two-days?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A look at how Google's AI revolutionized medical research by solving a decades-long problem.

* [People Are Using Google's New AI Model To Remove Watermarks From Images](https://tech.slashdot.org/story/25/03/17/1939254/people-are-using-googles-new-ai-model-to-remove-watermarks-from-images?utm_source=rss1.0mainlinkanon&utm_medium=feed) - New capabilities of Google's AI tool raise ethical and legal concerns.

## Cybersecurity and Privacy Issues

* [The Atrocious State Of Binary Compatibility on Linux and How To Address It](https://jangafx.com/insights/linux-binary-compatibility) - Insights into challenges with binary compatibility on Linux and proposed solutions.

* [Password reuse is rampant: nearly half of observed user logins are compromised](https://blog.cloudflare.com/password-reuse-rampant-half-user-logins-compromised/) - A Cloudflare study highlights alarming password reusage trends and their implications.

## Programming and Software Development

* [Undergraduate Disproves 40-Year-Old Conjecture, Invents New Kind of Hash Table](https://www.wired.com/story/undergraduate-upends-a-40-year-old-data-science-conjecture/) - A groundbreaking data structure innovation by a student reshapes computer science.

* [Localscope–Limit scope of Python functions for reproducible execution](https://localscope.readthedocs.io/en/latest/) - Introducing a tool focused on controlled Python function executions.

* [Tiny Pointers](https://arxiv.org/abs/2111.12800) - Insights into memory optimization using minimal pointer sizes in system design.

## Societal and Geopolitical Trends

* [Huawei To Pivot To Linux, HarmonyOS as Microsoft Windows License Expires](https://tech.slashdot.org/story/25/03/17/183209/huawei-to-pivot-to-linux-harmonyos-as-microsoft-windows-license-expires?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Examining Huawei's pivot from Windows amidst licensing challenges.

* [Chaos in the Cloudflare Lisbon Office](https://blog.cloudflare.com/chaos-in-cloudflare-lisbon-office-securing-the-internet-with-wave-motion/) - A deep look into a controversial situation impacting Cloudflare's Lisbon operations office.

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

* [2025-03-17, 21:20:00](https://tech.slashdot.org/story/25/03/17/1948219/gimp-30-released?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [GIMP 3.0 Released](https://tech.slashdot.org/story/25/03/17/1948219/gimp-30-released?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-17, 21:00:28](https://news.ycombinator.com/item?id=43392696) - [Luthor (YC F24) Is Hiring Ruby on Rails Engineers in San Francisco](https://www.ycombinator.com/companies/luthor/jobs/HKrdhp0-staff-senior-software-engineer-backend-fullstack)
* [2025-03-17, 20:43:35](https://news.ycombinator.com/item?id=43392549) - [The High Heel Problem](https://simonschreibt.de/gat/the-high-heel-problem/)
* [2025-03-17, 20:42:00](https://developers.slashdot.org/story/25/03/17/1946256/sobering-revenue-stats-of-70k-mobile-apps-show-why-devs-beg-for-subscriptions?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Sobering Revenue Stats of 70K Mobile Apps Show Why Devs Beg For Subscriptions](https://developers.slashdot.org/story/25/03/17/1946256/sobering-revenue-stats-of-70k-mobile-apps-show-why-devs-beg-for-subscriptions?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-17, 20:40:52](https://news.ycombinator.com/item?id=43392521) - [Show HN: OpenTimes – Free travel times between U.S. Census geographies](https://opentimes.org)
* [2025-03-17, 20:20:33](https://lobste.rs/s/uvi7es/wherein_i_explain_why_emacs_is_best_tool) - [Wherein I Explain Why Emacs Is The Best Tool For WordPress](https://lars.ingebrigtsen.no/2025/03/16/wherein-i-explain-why-emacs-is-the-best-tool-for-wordpress/)
* [2025-03-17, 20:12:40](https://news.ycombinator.com/item?id=43392303) - [Occupry your next lease to negotiate a better deal](https://occupry.com)
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
* [2025-03-17, 17:33:14](https://news.ycombinator.com/item?id=43390823) - [Show HN: Localscope–Limit scope of Python functions for reproducible execution](https://localscope.readthedocs.io/en/latest/)
* [2025-03-17, 17:25:35](https://news.ycombinator.com/item?id=43390747) - [LAPD surveilled Gaza protests using this social media tool](https://theintercept.com/2025/03/17/lapd-surveillance-gaza-palestine-protests-dataminr/)
* [2025-03-17, 17:20:00](https://tech.slashdot.org/story/25/03/17/0723230/alphabet-spins-off-laser-based-internet-project-taara-from-moonshot-unit?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Alphabet Spins Off Laser-Based Internet Project Taara From 'Moonshot' Unit](https://tech.slashdot.org/story/25/03/17/0723230/alphabet-spins-off-laser-based-internet-project-taara-from-moonshot-unit?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-17, 17:07:43](https://lobste.rs/s/7iel5b/rhombus_programming_language) - [The Rhombus Programming Language](https://rhombus-lang.org)
* [2025-03-17, 16:57:25](https://lobste.rs/s/pw3uzf/zero_knowledge_proofs) - [Zero-Knowledge Proofs](https://youtu.be/Otvcbw6k4eo)
* [2025-03-17, 16:55:17](https://news.ycombinator.com/item?id=43390467) - [Alphabet spins out Taara – Internet over lasers](https://x.company/blog/posts/taara-graduation/)
* [2025-03-17, 16:47:02](https://news.ycombinator.com/item?id=43390400) - [Deep Learning Is Not So Mysterious or Different](https://arxiv.org/abs/2503.02113)
* [2025-03-17, 16:40:00](https://slashdot.org/story/25/03/17/0628241/european-tech-firms-push-eu-for-buy-european-tech-mandate?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [European Tech Firms Push EU for 'Buy European' Tech Mandate](https://slashdot.org/story/25/03/17/0628241/european-tech-firms-push-eu-for-buy-european-tech-mandate?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-17, 16:00:00](https://science.slashdot.org/story/25/03/17/0954252/have-humans-passed-peak-brain-power?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Have Humans Passed Peak Brain Power?](https://science.slashdot.org/story/25/03/17/0954252/have-humans-passed-peak-brain-power?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-17, 15:25:49](https://lobste.rs/s/zmreeg/introducing_intel_advanced_performance) - [Introducing Intel® Advanced Performance Extensions (Intel® APX)](https://www.intel.com/content/www/us/en/developer/articles/technical/advanced-performance-extensions-apx.html)
* [2025-03-17, 15:20:00](https://news.slashdot.org/story/25/03/17/0749239/should-friday-be-the-new-saturday?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Should Friday be the New Saturday? ](https://news.slashdot.org/story/25/03/17/0749239/should-friday-be-the-new-saturday?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-17, 15:10:25](https://lobste.rs/s/r8mdl9/http_3_is_everywhere_nowhere) - [HTTP/3 is everywhere but nowhere](https://httptoolkit.com/blog/http3-quic-open-source-support-nowhere/)
* [2025-03-17, 15:02:04](https://lobste.rs/s/d69ogy/installing_sassc_ruby_gem_on_mac) - [Installing the sassc Ruby gem on a Mac. A debugging story](https://www.schneems.com/2025/03/17/installing-the-sassc-ruby-gem-on-a-mac-a-debugging-story/)
* [2025-03-17, 14:40:00](https://news.slashdot.org/story/25/03/17/1435237/heat-can-age-you-as-much-as-smoking-a-new-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Heat Can Age You As Much As Smoking, a New Study Finds](https://news.slashdot.org/story/25/03/17/1435237/heat-can-age-you-as-much-as-smoking-a-new-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-17, 14:38:18](https://news.ycombinator.com/item?id=43389064) - [Chaos in the Cloudflare Lisbon Office](https://blog.cloudflare.com/chaos-in-cloudflare-lisbon-office-securing-the-internet-with-wave-motion/)
* [2025-03-17, 14:06:00](https://yro.slashdot.org/story/25/03/17/146214/hr-tech-firm-rippling-sues-rival-deel-for-corporate-espionage?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [HR Tech Firm Rippling Sues Rival Deel for Corporate Espionage](https://yro.slashdot.org/story/25/03/17/146214/hr-tech-firm-rippling-sues-rival-deel-for-corporate-espionage?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-17, 13:32:32](https://lobste.rs/s/tb9lr7/optimal_bounds_for_open_addressing) - [Optimal Bounds for Open Addressing Without Reordering](https://arxiv.org/abs/2501.02305)
* [2025-03-17, 13:23:00](https://soylentnews.org/article.pl?sid=25/03/15/1619204&from=rss) - [NIST Selects HQC as Fifth Algorithm for Post-Quantum Encryption](https://soylentnews.org/article.pl?sid=25/03/15/1619204&from=rss)
* [2025-03-17, 13:21:24](https://lobste.rs/s/w05k9f/i_built_myself_watch) - [I built myself a watch](https://www.thewkblog.com/2025/03/16/i-built-myself-a-watch/)
* [2025-03-17, 13:19:37](https://news.ycombinator.com/item?id=43388296) - [Undergraduate Disproves 40-Year-Old Conjecture, Invents New Kind of Hash Table](https://www.wired.com/story/undergraduate-upends-a-40-year-old-data-science-conjecture/)
* [2025-03-17, 12:35:16](https://news.ycombinator.com/item?id=43387834) - [Show HN: A bi-directional, persisted KV store that is faster than Redis](https://hpkv.io)
* [2025-03-17, 11:34:00](https://news.slashdot.org/story/25/03/17/0012207/fsfs-memorabilia-silent-auction-begins-today?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [FSF's Memorabilia Silent Auction Begins Today](https://news.slashdot.org/story/25/03/17/0012207/fsfs-memorabilia-silent-auction-begins-today?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-17, 11:29:04](https://news.ycombinator.com/item?id=43387334) - [Stupid Smart Pointers in C](http://blog.kevinalbs.com/stupid_smart_pointers)
* [2025-03-17, 11:10:11](https://lobste.rs/s/dmuad3/mitigating_sourcehut_s_partial_outage) - [Mitigating SourceHut's partial outage caused by aggressive crawlers](https://status.sr.ht/issues/2025-03-17-git.sr.ht-llms/)
* [2025-03-17, 10:59:43](https://lobste.rs/s/0zz0ek/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/0zz0ek/what_are_you_doing_this_week)
* [2025-03-17, 09:29:33](https://news.ycombinator.com/item?id=43386578) - [Underware 2.0 – Open Source Infinite Cable Management](https://makerworld.com/en/models/783010-underware-2-0-infinite-cable-management)
* [2025-03-17, 08:36:00](https://soylentnews.org/article.pl?sid=25/03/15/1617256&from=rss) - [World's Smallest Microcontroller](https://soylentnews.org/article.pl?sid=25/03/15/1617256&from=rss)
* [2025-03-17, 07:34:00](https://tech.slashdot.org/story/25/03/17/0434237/bluesky-proposes-new-standard-for-when-scraping-data-for-ai-training?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [BlueSky Proposes 'New Standard' for When Scraping Data for AI Training](https://tech.slashdot.org/story/25/03/17/0434237/bluesky-proposes-new-standard-for-when-scraping-data-for-ai-training?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-17, 07:30:26](https://news.ycombinator.com/item?id=43386004) - [The exceptional Jordan algebra (2020)](https://cp4space.hatsya.com/2020/10/28/the-exceptional-jordan-algebra/)
* [2025-03-17, 05:18:36](https://lobste.rs/s/uz9tln/v6_shell) - [V6 Shell](https://v6sh.org/)
* [2025-03-17, 04:41:49](https://news.ycombinator.com/item?id=43385268) - [The Alexa feature \"do not send voice recordings\" you enabled no longer available](https://discuss.systems/@dev/114161826926246661)
* [2025-03-17, 03:50:00](https://soylentnews.org/article.pl?sid=25/03/15/1220208&from=rss) - [ESA Cuts the Ribbon at 34,000-Core HPC Center](https://soylentnews.org/article.pl?sid=25/03/15/1220208&from=rss)
* [2025-03-17, 03:44:00](https://science.slashdot.org/story/25/03/17/039241/googles-ai-co-scientist-solved-a-10-year-superbug-problem-in-two-days?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google's AI 'Co-Scientist' Solved a 10-Year Superbug Problem in Two Days](https://science.slashdot.org/story/25/03/17/039241/googles-ai-co-scientist-solved-a-10-year-superbug-problem-in-two-days?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-17, 03:25:26](https://news.ycombinator.com/item?id=43384894) - [Conducting forensics of mobile devices to find signs of a potential compromise](https://github.com/mvt-project/mvt)
* [2025-03-17, 03:15:40](https://lobste.rs/s/1kxvjz/from_languages_language_sets) - [From Languages to Language Sets](https://gist.github.com/xixixao/8e363dbd3663b6729cd5b6d74dbbf9d4)
* [2025-03-17, 03:09:28](https://news.ycombinator.com/item?id=43384826) - [Genomic study: our capacity for language emerged at least 135k years ago](https://phys.org/news/2025-03-genomic-capacity-language-emerged-years.html)
* [2025-03-17, 01:43:38](https://lobste.rs/s/abizxl/dioxus_fullstack_crossplatform_app) - [Dioxus | Fullstack crossplatform app framework for Rust](https://dioxuslabs.com/)
* [2025-03-17, 00:48:48](https://news.ycombinator.com/item?id=43384069) - [Launching RDAP; sunsetting WHOIS](https://www.icann.org/en/announcements/details/icann-update-launching-rdap-sunsetting-whois-27-01-2025-en)
* [2025-03-17, 00:45:12](https://lobste.rs/s/grpayi/zest_programming_language_for_malleable) - [Zest: a programming language for malleable and legible systems](https://github.com/jamii/zest)
* [2025-03-16, 23:56:37](https://lobste.rs/s/2a8x3n/why_we_ditched_next_js_never_looked_back) - [Why we ditched Next.js and never looked back](https://northflank.com/blog/why-we-ditched-next-js-and-never-looked-back)
* [2025-03-16, 23:07:00](https://soylentnews.org/article.pl?sid=25/03/15/1540201&from=rss) - [A New Age for Geothermal](https://soylentnews.org/article.pl?sid=25/03/15/1540201&from=rss)
* [2025-03-16, 18:20:00](https://soylentnews.org/article.pl?sid=25/03/15/141211&from=rss) - [Apple Encrypted Data Row Case Begins in Secret](https://soylentnews.org/article.pl?sid=25/03/15/141211&from=rss)
* [2025-03-16, 17:02:34](https://news.ycombinator.com/item?id=43380453) - [When the Dotcom Bubble Burst](https://dfarq.homeip.net/when-the-dotcom-bubble-burst/)
* [2025-03-16, 16:18:21](https://lobste.rs/s/m1iuiq/docs_open_source_collaborative_notes) - [Docs: Open-source collaborative notes, wiki, and documentation platform by the French government](https://docs.numerique.gouv.fr/)
* [2025-03-16, 15:03:12](https://lobste.rs/s/kj6fts/our_interfaces_have_lost_their_senses) - [Our interfaces have lost their senses](https://wattenberger.com/thoughts/our-interfaces-have-lost-their-senses)
* [2025-03-16, 13:34:00](https://soylentnews.org/article.pl?sid=25/03/15/1357206&from=rss) - [5 Years After Covid-19 Became a Pandemic, Are We Ready for What's Next?](https://soylentnews.org/article.pl?sid=25/03/15/1357206&from=rss)
* [2025-03-16, 12:50:56](https://news.ycombinator.com/item?id=43378627) - [Extracting content from an LCP \"protected\" ePub](https://shkspr.mobi/blog/2025/03/towards-extracting-content-from-an-lcp-protected-epub/)
* [2025-03-16, 08:46:00](https://soylentnews.org/article.pl?sid=25/03/15/1228252&from=rss) - [Sidewinder Advanced Persistent Threat (APT) Shifts to Targeting of Nuclear, Maritime Orgs](https://soylentnews.org/article.pl?sid=25/03/15/1228252&from=rss)
* [2025-03-16, 07:37:20](https://news.ycombinator.com/item?id=43377463) - [Compression of Spectral Images Using Spectral JPEG XL](https://jcgt.org/published/0014/01/04/)
* [2025-03-16, 06:31:07](https://lobste.rs/s/miyoai/review_helix_after_1_5_years) - [A Review of Helix after 1.5 Years](https://felix-knorr.net/posts/2025-03-16-helix-review.html)
* [2025-03-16, 04:42:52](https://lobste.rs/s/1ula6k/defer_technical_specification_it_is_time) - [The Defer Technical Specification: It Is Time](https://thephd.dev/c2y-the-defer-technical-specification-its-time-go-go-go)
* [2025-03-16, 04:01:00](https://soylentnews.org/article.pl?sid=25/03/15/1558246&from=rss) - [SpaceX Launches Astronauts for Long-Awaited International Space Station Crew Swap](https://soylentnews.org/article.pl?sid=25/03/15/1558246&from=rss)
* [2025-03-15, 23:17:00](https://soylentnews.org/article.pl?sid=25/03/14/1938229&from=rss) - [No Project is an Island: Why You Need SBOMs and Dependency Management](https://soylentnews.org/article.pl?sid=25/03/14/1938229&from=rss)
* [2025-03-15, 18:33:00](https://soylentnews.org/article.pl?sid=25/03/14/1933241&from=rss) - [How a Rapidly Growing Population of Crocs Has Been Impacting Northern Territories Ecosystem](https://soylentnews.org/article.pl?sid=25/03/14/1933241&from=rss)
* [2025-03-15, 13:48:00](https://soylentnews.org/politics/article.pl?sid=25/03/14/1930253&from=rss) - [Judge Calls Doge Firings A \"Sham\", Orders Thousands Of Workers To Be Reinstated Immediately](https://soylentnews.org/politics/article.pl?sid=25/03/14/1930253&from=rss)
* [2025-03-15, 09:07:00](https://soylentnews.org/article.pl?sid=25/03/14/1113259&from=rss) - [Bad News for Low Orbit Satellites: Earth's Thermosphere is Shrinking](https://soylentnews.org/article.pl?sid=25/03/14/1113259&from=rss)
* [2025-03-15, 04:22:00](https://soylentnews.org/article.pl?sid=25/03/14/115251&from=rss) - [AMD's Zen 6-Based Desktop Processors May Feature Up to 24 Cores](https://soylentnews.org/article.pl?sid=25/03/14/115251&from=rss)
* [2025-03-15, 03:28:39](https://news.ycombinator.com/item?id=43369739) - [Ogres Are Cool](https://www.lrb.co.uk/the-paper/v47/n05/colin-burrow/ogres-are-cool)
* [2025-03-14, 23:34:00](https://soylentnews.org/article.pl?sid=25/03/14/0056219&from=rss) - [The Cheapest Way to Supercharge America's Power Grid](https://soylentnews.org/article.pl?sid=25/03/14/0056219&from=rss)
* [2025-03-14, 20:05:53](https://news.ycombinator.com/item?id=43366671) - [Recommendations for designing magic numbers of binary file formats](https://hackers.town/@zwol/114155595855705796)
* [2025-03-14, 18:47:00](https://soylentnews.org/article.pl?sid=25/03/13/1729224&from=rss) - [Humans Have a Third Set of Teeth: Scientists Discover Medicine to Grow Them](https://soylentnews.org/article.pl?sid=25/03/13/1729224&from=rss)
* [2025-03-14, 14:01:00](https://soylentnews.org/article.pl?sid=25/03/13/150217&from=rss) - [Why Attention Limitations Let Idea Thieves Thrive in Workplaces](https://soylentnews.org/article.pl?sid=25/03/13/150217&from=rss)
* [2025-03-14, 09:14:00](https://soylentnews.org/article.pl?sid=25/03/13/1011234&from=rss) - [General Fusion Fires Up its Newest Steampunk Fusion Reactor](https://soylentnews.org/article.pl?sid=25/03/13/1011234&from=rss)
* [2025-03-14, 08:34:18](https://news.ycombinator.com/item?id=43360633) - [Coq-of-rust: Formal verification tool for Rust](https://github.com/formal-land/coq-of-rust)
* [2025-03-14, 07:02:39](https://news.ycombinator.com/item?id=43360251) - [HTTP/3 is everywhere but nowhere](https://httptoolkit.com/blog/http3-quic-open-source-support-nowhere/)
* [2025-03-14, 06:38:53](https://news.ycombinator.com/item?id=43360150) - [Copyright and the Demo Scene](https://www.datagubbe.se/scenecop/)
* [2025-03-14, 04:29:00](https://soylentnews.org/article.pl?sid=25/03/12/190247&from=rss) - [This ‘Dune’ Isn't Fiction. It's the Longest Conveyer Belt in the US and Moving Sand in Texas](https://soylentnews.org/article.pl?sid=25/03/12/190247&from=rss)
* [2025-03-14, 03:13:26](https://news.ycombinator.com/item?id=43359264) - [Hidden Messages in Emojis and Hacking the US Treasury](https://slamdunksoftware.substack.com/p/hidden-messages-in-emojis-and-hacking)
* [2025-03-13, 23:42:00](https://soylentnews.org/article.pl?sid=25/03/12/196239&from=rss) - [ASML To Open Beijing Facility Despite US Sanctions On China](https://soylentnews.org/article.pl?sid=25/03/12/196239&from=rss)
* [2025-03-13, 23:26:56](https://news.ycombinator.com/item?id=43358264) - [Show HN: Psychedelic animation generator; (p)art of your next trip](https://collidingscopes.github.io/liquid-shape-distortions/)
* [2025-03-13, 18:57:00](https://soylentnews.org/article.pl?sid=25/03/12/193232&from=rss) - [Psychological 'Booster Shots' Can Strengthen Resistance to Misinformation Over Time](https://soylentnews.org/article.pl?sid=25/03/12/193232&from=rss)
* [2025-03-13, 14:10:00](https://soylentnews.org/breakingnews/article.pl?sid=25/03/13/102242&from=rss) - [Mozilla Warns Users to Update Firefox Before Certificate Expires](https://soylentnews.org/breakingnews/article.pl?sid=25/03/13/102242&from=rss)
* [2025-03-13, 13:38:26](https://news.ycombinator.com/item?id=43353223) - [Going down the rabbit hole of Git's new bundle-URI](https://blog.gitbutler.com/going-down-the-rabbit-hole-of-gits-new-bundle-uri/)
* [2025-03-13, 09:21:00](https://soylentnews.org/article.pl?sid=25/03/12/1855238&from=rss) - [Woolly Mice Are Cute and Impressive – but They Won't Bring Back Mammoths](https://soylentnews.org/article.pl?sid=25/03/12/1855238&from=rss)
* [2025-03-13, 04:37:00](https://soylentnews.org/article.pl?sid=25/03/12/1139205&from=rss) - [Rust Drivers Expected to Become More Common in Linux Kernel](https://soylentnews.org/article.pl?sid=25/03/12/1139205&from=rss)
