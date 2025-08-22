# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Denmark To Abolish VAT On Books To Get More People Reading](https://news.slashdot.org/story/25/08/22/0031247/denmark-to-abolish-vat-on-books-to-get-more-people-reading?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Denmark aims to boost literacy and cultural engagement with the removal of VAT on books.

* [Emacs is violent passion](https://mihaiolteanu.me/emacs-is-violent-passion) - An introspective examination of the powerful emotions tied to Emacs usage.

* [LabPlot: Free, open source and cross-platform Data Visualization and Analysis](https://labplot.org/) - A detailed look at the features offered by LabPlot, an open-source visualization tool.

* [Astronomers Discover Hidden Moon Orbiting Uranus](https://science.slashdot.org/story/25/08/21/2356259/astronomers-discover-hidden-moon-orbiting-uranus?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Cutting-edge astronomy uncovers an unseen moon orbiting Uranus.

* [Russia Orders State-Backed WhatsApp Rival Pre-Installed On Phones and Tablets](https://tech.slashdot.org/story/25/08/21/2015241/russia-orders-state-backed-whatsapp-rival-pre-installed-on-phones-and-tablets?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Russia's pivot to a domestic messaging system underlines its mixed approach to digital sovereignty.

* [The issue of anti-cheat on Linux](https://tulach.cc/the-issue-of-anti-cheat-on-linux/) - Addressing the challenges of implementing robust anti-cheat mechanisms for Linux platforms.

## AI Developments and Challenges

* [Being confidently wrong is holding AI back](https://promptql.io/blog/being-confidently-wrong-is-holding-ai-back) - Analysis of how AI's overconfidence hampers its progress.

* [Io_uring, kTLS and Rust for zero syscall HTTPS server](https://blog.habets.se/2025/04/io-uring-ktls-and-rust-for-zero-syscall-https-server.html) - Exploring innovations in HTTPS server design using io_uring, kTLS, and Rust.

* [From GPT-4 to GPT-5: Measuring progress through MedHELM [pdf]](https://www.fertrevino.com/docs/gpt5_medhelm.pdf) - Evaluating advancements in GPT capabilities with a focus on medical AI.

* [Building AI products in the probabilistic era](https://giansegato.com/essays/probabilistic-era) - Insights into creating AI products that thrive under uncertainty.

* [Weaponizing image scaling against production AI systems](https://blog.trailofbits.com/2025/08/21/weaponizing-image-scaling-against-production-ai-systems/) - How maliciously exploited image scaling attacks can degrade the performance of AI systems.

## Groundbreaking Science

* [Peer Reviewers More Likely To Approve Articles That Cite Their Own Work](https://science.slashdot.org/story/25/08/21/2015236/peer-reviewers-more-likely-to-approve-articles-that-cite-their-own-work?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Examining bias in academic publishing and peer review practices.

* [Scientists Say Tool Can Sniff 5G Traffic, Launch 'Attacks' Without Using Rogue Base Stations](https://soylentnews.org/article.pl?sid=25/08/19/1550241&from=rss) - New discovery unveils vulnerabilities in 5G networks.

* [Astronomers Discover Hidden Moon Orbiting Uranus](https://science.slashdot.org/story/25/08/21/2356259/astronomers-discover-hidden-moon-orbiting-uranus?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Adding to our knowledge of the mysteries beyond Earth.

* [Blackhole Bounce - New Universes](https://soylentnews.org/article.pl?sid=25/08/17/1237215&from=rss) - Revisiting the science of blackhole singularities and theories of alternate realities.

## Cultural and Societal Topics

* [Florida lawmaker floats ban on HOAs amid growing backlash](https://www.tampabay28.com/news/state/florida-lawmaker-floats-ban-on-hoas-amid-growing-backlash) - Regulatory debates continue as frustrations rise with homeowners associations.

* [Apple Fitness Chief Accused of Toxic Workplace Culture and Harassment](https://apple.slashdot.org/story/25/08/21/202225/apple-fitness-chief-accused-of-toxic-workplace-culture-and-harassment?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Investigations intensify into allegations of harassment within corporate culture.

* [VW Introduces Monthly Subscription to Increase Car Power](https://soylentnews.org/article.pl?sid=25/08/20/2255245&from=rss) - Volkswagen's new subscription services for better vehicle performance raise conversations around consumer ownership.

* [Denmark Ending Letter Deliveries Is a Sign of the Digital Times](https://tech.slashdot.org/story/25/08/21/1928230/denmark-ending-letter-deliveries-is-a-sign-of-the-digital-times?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The end of letter deliveries: Digital transformation era begins in Denmark.

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

* [2025-08-22, 13:00:00](https://news.slashdot.org/story/25/08/22/0031247/denmark-to-abolish-vat-on-books-to-get-more-people-reading?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Denmark To Abolish VAT On Books To Get More People Reading](https://news.slashdot.org/story/25/08/22/0031247/denmark-to-abolish-vat-on-books-to-get-more-people-reading?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 12:24:03](https://lobste.rs/s/62si4z/i_m_too_dumb_for_zig_s_new_io_interface) - [I&apos;m too dumb for Zig&apos;s new IO interface](https://www.openmymind.net/Im-Too-Dumb-For-Zigs-New-IO-Interface/)
* [2025-08-22, 12:20:27](https://news.ycombinator.com/item?id=44983620) - [Florida lawmaker floats ban on HOAs amid growing backlash](https://www.tampabay28.com/news/state/florida-lawmaker-floats-ban-on-hoas-amid-growing-backlash)
* [2025-08-22, 12:14:35](https://news.ycombinator.com/item?id=44983570) - [Being confidently wrong is holding AI back](https://promptql.io/blog/being-confidently-wrong-is-holding-ai-back)
* [2025-08-22, 11:49:52](https://lobste.rs/s/5tcy8c/what_about_using_rel_share_url_expose) - [What about using rel=\&quot;share-url\&quot; to expose sharing intents?](https://shkspr.mobi/blog/2025/08/what-about-using-relshare-url-to-expose-sharing-intents/)
* [2025-08-22, 11:49:08](https://news.ycombinator.com/item?id=44983364) - [What about using rel=\&quot;share-url\&quot; to expose sharing intents?](https://shkspr.mobi/blog/2025/08/what-about-using-relshare-url-to-expose-sharing-intents/)
* [2025-08-22, 11:11:00](https://soylentnews.org/article.pl?sid=25/08/21/1154233&amp;from=rss) - [Teenagers Are Choosing to Study STEM Subjects. It&apos;s a Sign of the Times](https://soylentnews.org/article.pl?sid=25/08/21/1154233&amp;from=rss)
* [2025-08-22, 10:58:28](https://lobste.rs/s/sufmir/emacs_is_violent_passion) - [Emacs is violent passion](https://mihaiolteanu.me/emacs-is-violent-passion)
* [2025-08-22, 10:00:00](https://yro.slashdot.org/story/25/08/22/0039200/dev-gets-4-years-for-creating-kill-switch-on-ex-employers-systems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dev Gets 4 Years For Creating Kill Switch On Ex-Employer&apos;s Systems](https://yro.slashdot.org/story/25/08/22/0039200/dev-gets-4-years-for-creating-kill-switch-on-ex-employers-systems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 09:11:26](https://news.ycombinator.com/item?id=44982409) - [LabPlot: Free, open source and cross-platform Data Visualization and Analysis](https://labplot.org/)
* [2025-08-22, 08:23:26](https://lobste.rs/s/ug4ch4/arch_linux_news_recent_service_outages) - [Arch Linux - News: Recent service outages](https://archlinux.org/news/recent-services-outages/)
* [2025-08-22, 07:18:48](https://news.ycombinator.com/item?id=44981802) - [The Minecraft code no one has solved (2024) [video]](https://www.youtube.com/watch?v=nz2LeXwJOyI)
* [2025-08-22, 07:08:01](https://news.ycombinator.com/item?id=44981747) - [What the Hell Is Going On?](https://catskull.net/what-the-hell-is-going-on-right-now.html)
* [2025-08-22, 07:00:00](https://science.slashdot.org/story/25/08/21/2356259/astronomers-discover-hidden-moon-orbiting-uranus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Astronomers Discover Hidden Moon Orbiting Uranus](https://science.slashdot.org/story/25/08/21/2356259/astronomers-discover-hidden-moon-orbiting-uranus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 06:22:44](https://lobste.rs/s/tkydi6/baby_paradox_haskell) - [The Baby Paradox in Haskell](https://blog.jle.im/entry/the-baby-paradox-in-haskell.html)
* [2025-08-22, 06:22:00](https://soylentnews.org/article.pl?sid=25/08/20/2255245&amp;from=rss) - [VW Introduces Monthly Subscription to Increase Car Power](https://soylentnews.org/article.pl?sid=25/08/20/2255245&amp;from=rss)
* [2025-08-22, 05:22:50](https://lobste.rs/s/cfuzzv/introducing_forth_poems) - [Introducing Forth poems](https://youtu.be/YZ4nYqQSyMo)
* [2025-08-22, 05:20:26](https://lobste.rs/s/hnwcq6/what_hell_is_going_on_right_now) - [What the hell is going on right now?](https://catskull.net/what-the-hell-is-going-on-right-now.html)
* [2025-08-22, 03:51:44](https://news.ycombinator.com/item?id=44980865) - [Io_uring, kTLS and Rust for zero syscall HTTPS server](https://blog.habets.se/2025/04/io-uring-ktls-and-rust-for-zero-syscall-https-server.html)
* [2025-08-22, 03:30:00](https://tech.slashdot.org/story/25/08/22/0020202/americans-junk-filled-garages-are-hurting-ev-adoption-study-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Americans&apos; Junk-Filled Garages Are Hurting EV Adoption, Study Says](https://tech.slashdot.org/story/25/08/22/0020202/americans-junk-filled-garages-are-hurting-ev-adoption-study-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 02:05:53](https://news.ycombinator.com/item?id=44980339) - [Everything Is Correlated](https://gwern.net/everything)
* [2025-08-22, 01:40:00](https://science.slashdot.org/story/25/08/22/009241/rosetta-stone-of-code-shrinks-quantum-computer-hardware-needs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Rosetta Stone&apos; of Code Shrinks Quantum Computer Hardware Needs](https://science.slashdot.org/story/25/08/22/009241/rosetta-stone-of-code-shrinks-quantum-computer-hardware-needs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 01:35:00](https://soylentnews.org/article.pl?sid=25/08/20/2242220&amp;from=rss) - [We Need to Become Unoptomizable](https://soylentnews.org/article.pl?sid=25/08/20/2242220&amp;from=rss)
* [2025-08-22, 01:00:00](https://tech.slashdot.org/story/25/08/21/2045209/why-linkedin-rewards-mediocrity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why LinkedIn Rewards Mediocrity](https://tech.slashdot.org/story/25/08/21/2045209/why-linkedin-rewards-mediocrity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 00:59:04](https://news.ycombinator.com/item?id=44980004) - [Control shopping cart wheels with your phone (2021)](https://www.begaydocrime.com/)
* [2025-08-22, 00:39:07](https://lobste.rs/s/goaf6y/issue_anti_cheat_on_linux) - [The issue of anti-cheat on Linux](https://tulach.cc/the-issue-of-anti-cheat-on-linux/)
* [2025-08-22, 00:20:00](https://tech.slashdot.org/story/25/08/21/2015241/russia-orders-state-backed-whatsapp-rival-pre-installed-on-phones-and-tablets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russia Orders State-Backed WhatsApp Rival Pre-Installed On Phones and Tablets](https://tech.slashdot.org/story/25/08/21/2015241/russia-orders-state-backed-whatsapp-rival-pre-installed-on-phones-and-tablets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-22, 00:16:30](https://lobste.rs/s/ai2zgo/understanding_go_error_types_pointer_vs) - [Understanding Go Error Types: Pointer vs. Value](https://blog.fillmore-labs.com/posts/errors-1/)
* [2025-08-21, 23:20:00](https://science.slashdot.org/story/25/08/21/2015236/peer-reviewers-more-likely-to-approve-articles-that-cite-their-own-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Peer Reviewers More Likely To Approve Articles That Cite Their Own Work](https://science.slashdot.org/story/25/08/21/2015236/peer-reviewers-more-likely-to-approve-articles-that-cite-their-own-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-21, 23:00:00](https://tech.slashdot.org/story/25/08/21/209213/googles-next-big-android-update-can-force-dark-mode-and-icon-themes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s Next Big Android Update Can Force Dark Mode and Icon Themes](https://tech.slashdot.org/story/25/08/21/209213/googles-next-big-android-update-can-force-dark-mode-and-icon-themes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-21, 22:52:14](https://news.ycombinator.com/item?id=44979107) - [From GPT-4 to GPT-5: Measuring progress through MedHELM [pdf]](https://www.fertrevino.com/docs/gpt5_medhelm.pdf)
* [2025-08-21, 22:22:56](https://news.ycombinator.com/item?id=44978815) - [Scientists No Longer Find X Professionally Useful, and Have Switched to Bluesky](https://academic.oup.com/icb/advance-article-abstract/doi/10.1093/icb/icaf127/8196180?redirectedFrom=fulltext&amp;login=false)
* [2025-08-21, 22:20:00](https://apple.slashdot.org/story/25/08/21/202225/apple-fitness-chief-accused-of-toxic-workplace-culture-and-harassment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Fitness Chief Accused of Toxic Workplace Culture and Harassment](https://apple.slashdot.org/story/25/08/21/202225/apple-fitness-chief-accused-of-toxic-workplace-culture-and-harassment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-21, 21:40:00](https://tech.slashdot.org/story/25/08/21/1952214/google-ai-mode-is-expanding-to-180-countries-adding-an-agentic-restaurant-finder?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google AI Mode Is Expanding To 180 Countries, Adding an Agentic Restaurant Finder](https://tech.slashdot.org/story/25/08/21/1952214/google-ai-mode-is-expanding-to-180-countries-adding-an-agentic-restaurant-finder?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-21, 21:14:16](https://lobste.rs/s/my8sdy/agent_inference_user_agent_browser_quiz) - [Agent Inference - A user-agent / browser quiz](https://ai.174070135.xyz/)
* [2025-08-21, 21:00:00](https://science.slashdot.org/story/25/08/21/1949240/artificial-light-has-essentially-lengthened-birds-day?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Artificial Light Has Essentially Lengthened Birds&apos; Day](https://science.slashdot.org/story/25/08/21/1949240/artificial-light-has-essentially-lengthened-birds-day?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-21, 20:49:00](https://soylentnews.org/article.pl?sid=25/08/20/1759228&amp;from=rss) - [Uncovering the Fraudsters and Their Schemes Responsible for Polluting the Scientific Literature](https://soylentnews.org/article.pl?sid=25/08/20/1759228&amp;from=rss)
* [2025-08-21, 20:26:44](https://news.ycombinator.com/item?id=44977645) - [Code formatting comes to uv experimentally](https://pydevtools.com/blog/uv-format-code-formatting-comes-to-uv-experimentally/)
* [2025-08-21, 20:20:00](https://tech.slashdot.org/story/25/08/21/1928230/denmark-ending-letter-deliveries-is-a-sign-of-the-digital-times?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Denmark Ending Letter Deliveries Is a Sign of the Digital Times](https://tech.slashdot.org/story/25/08/21/1928230/denmark-ending-letter-deliveries-is-a-sign-of-the-digital-times?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-21, 20:03:14](https://lobste.rs/s/ej6pen/grug_design) - [grug.design](https://www.grug.design/know)
* [2025-08-21, 20:01:00](https://lobste.rs/s/hty9zp/why_do_software_developers_love) - [Why do software developers love complexity?](https://kyrylo.org/software/2025/08/21/why-do-software-developers-love-complexity.html)
* [2025-08-21, 19:47:02](https://news.ycombinator.com/item?id=44977189) - [Crimes with Python&apos;s Pattern Matching (2022)](https://www.hillelwayne.com/post/python-abc/)
* [2025-08-21, 19:40:00](https://slashdot.org/story/25/08/21/1919258/bank-forced-to-rehire-workers-after-lying-about-chatbot-productivity-union-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bank Forced To Rehire Workers After Lying About Chatbot Productivity, Union Says](https://slashdot.org/story/25/08/21/1919258/bank-forced-to-rehire-workers-after-lying-about-chatbot-productivity-union-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-21, 19:33:33](https://lobste.rs/s/e5sio6/using_common_lisp_from_inside_browser) - [Using Common Lisp from inside the Browser](https://turtleware.eu/posts/Using-Common-Lisp-from-inside-the-Browser.html)
* [2025-08-21, 19:06:09](https://news.ycombinator.com/item?id=44976764) - [DeepSeek-v3.1](https://api-docs.deepseek.com/news/news250821)
* [2025-08-21, 18:58:00](https://slashdot.org/story/25/08/21/1858221/cisco-announces-mass-layoffs-just-after-soaring-revenue-report?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cisco Announces Mass Layoffs Just After Soaring Revenue Report](https://slashdot.org/story/25/08/21/1858221/cisco-announces-mass-layoffs-just-after-soaring-revenue-report?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-21, 18:49:57](https://news.ycombinator.com/item?id=44976568) - [AI tooling must be disclosed for contributions](https://github.com/ghostty-org/ghostty/pull/8289)
* [2025-08-21, 18:42:10](https://news.ycombinator.com/item?id=44976468) - [Building AI products in the probabilistic era](https://giansegato.com/essays/probabilistic-era)
* [2025-08-21, 17:15:13](https://lobste.rs/s/xoa1sx/core_rust) - [the core of rust](https://jyn.dev/the-core-of-rust/)
* [2025-08-21, 16:09:00](https://soylentnews.org/article.pl?sid=25/08/20/1743213&amp;from=rss) - [Physics of Badminton’s New Killer Spin Serve](https://soylentnews.org/article.pl?sid=25/08/20/1743213&amp;from=rss)
* [2025-08-21, 15:51:48](https://lobste.rs/s/nhmsd8/adding_my_home_electricity_uptime_status) - [adding my home electricity uptime to status.href.cat](https://aggressivelyparaphrasing.me/2025/08/21/adding-my-home-electricity-uptime-to-status-href-cat/)
* [2025-08-21, 15:25:46](https://lobste.rs/s/wthfwo/ledger_2023) - [Ledger (2023)](https://lock.cmpxchg8b.com/ledger.html)
* [2025-08-21, 15:12:53](https://lobste.rs/s/gayfir/aur_chaos_malware_analysis) - [AUR Chaos malware: an analysis](https://www.mh4ckt3mh4ckt1c4s.xyz/blog/aur-chaos-malware-analysis/)
* [2025-08-21, 14:47:43](https://lobste.rs/s/s4jdny/my_other_email_client_is_daemon) - [My other email client is a daemon](https://feyor.sh/blog/my-other-email-client-is-a-mail-daemon/)
* [2025-08-21, 14:45:10](https://lobste.rs/s/5lp2et/hyperclay_single_file_html_apps) - [Hyperclay | Single File HTML APPS](https://hyperclay.com/)
* [2025-08-21, 14:39:45](https://news.ycombinator.com/item?id=44973375) - [Beyond sensor data: Foundation models of behavioral data from wearables](https://arxiv.org/abs/2507.00191)
* [2025-08-21, 14:35:13](https://lobste.rs/s/pnyraf/new_rust_packaging_model) - [A New Rust Packaging Model](https://guix.gnu.org/en/blog/2025/a-new-rust-packaging-model/)
* [2025-08-21, 12:58:17](https://news.ycombinator.com/item?id=44972213) - [How well does the money laundering control system work?](https://www.journals.uchicago.edu/doi/10.1086/735665)
* [2025-08-21, 12:53:16](https://news.ycombinator.com/item?id=44972151) - [AWS CEO says using AI to replace junior staff is &apos;Dumbest thing I&apos;ve ever heard&apos;](https://www.theregister.com/2025/08/21/aws_ceo_entry_level_jobs_opinion/)
* [2025-08-21, 12:31:46](https://news.ycombinator.com/item?id=44971954) - [Privately-Owned Rail Cars](https://www.amtrak.com/privately-owned-rail-cars)
* [2025-08-21, 12:24:07](https://lobste.rs/s/cr9eqw/month_ai_bugs_2025) - [The Month of AI Bugs 2025](https://monthofaibugs.com/)
* [2025-08-21, 12:21:38](https://news.ycombinator.com/item?id=44971850) - [How does the US use water?](https://www.construction-physics.com/p/how-does-the-us-use-water)
* [2025-08-21, 12:20:53](https://news.ycombinator.com/item?id=44971845) - [Weaponizing image scaling against production AI systems](https://blog.trailofbits.com/2025/08/21/weaponizing-image-scaling-against-production-ai-systems/)
* [2025-08-21, 11:52:29](https://news.ycombinator.com/item?id=44971607) - [1981 Sony Trinitron KV-3000R: The Most Luxurious Trinitron [video]](https://www.youtube.com/watch?v=jHG_I-9a7FY)
* [2025-08-21, 11:24:00](https://soylentnews.org/article.pl?sid=25/08/20/1736217&amp;from=rss) - [Mozilla Warns Germany Could Declare Ad Blockers Illegal](https://soylentnews.org/article.pl?sid=25/08/20/1736217&amp;from=rss)
* [2025-08-21, 10:54:13](https://news.ycombinator.com/item?id=44971212) - [Using Podman, Compose and BuildKit](https://emersion.fr/blog/2025/using-podman-compose-and-buildkit/)
* [2025-08-21, 08:54:06](https://news.ycombinator.com/item?id=44970563) - [My other email client is a daemon](https://feyor.sh/blog/my-other-email-client-is-a-mail-daemon/)
* [2025-08-21, 06:38:00](https://soylentnews.org/article.pl?sid=25/08/20/033241&amp;from=rss) - [If AI Takes Most of Our Jobs, Money as We Know It Will be Over. What Then?](https://soylentnews.org/article.pl?sid=25/08/20/033241&amp;from=rss)
* [2025-08-21, 03:08:51](https://lobste.rs/s/dlobhb/optique_type_safe_combinatorial_cli) - [Optique: Type-safe combinatorial CLI parser for TypeScript](https://optique.dev/)
* [2025-08-21, 01:52:00](https://soylentnews.org/article.pl?sid=25/08/20/0153218&amp;from=rss) - [A Treatise on AI Chatbots Undermining the Enlightenment](https://soylentnews.org/article.pl?sid=25/08/20/0153218&amp;from=rss)
* [2025-08-20, 21:08:00](https://soylentnews.org/article.pl?sid=25/08/20/0149227&amp;from=rss) - [Whoops, They Did It Again](https://soylentnews.org/article.pl?sid=25/08/20/0149227&amp;from=rss)
* [2025-08-20, 20:30:48](https://lobste.rs/s/qw5iyf/why_are_anime_catgirls_blocking_my_access) - [Why are anime catgirls blocking my access to the Linux kernel?](https://lock.cmpxchg8b.com/anubis.html)
* [2025-08-20, 18:45:16](https://lobste.rs/s/seffg9/zig_0_15_1_release_notes) - [Zig 0.15.1 Release Notes](https://ziglang.org/download/0.15.1/release-notes.html)
* [2025-08-20, 16:22:00](https://soylentnews.org/article.pl?sid=25/08/20/0132257&amp;from=rss) - [The Big Slow Church Move](https://soylentnews.org/article.pl?sid=25/08/20/0132257&amp;from=rss)
* [2025-08-20, 11:35:00](https://soylentnews.org/article.pl?sid=25/08/20/0125237&amp;from=rss) - [How Chefs and Scientists Are Using Kombucha and Kimchi to Study Microbiology](https://soylentnews.org/article.pl?sid=25/08/20/0125237&amp;from=rss)
* [2025-08-20, 11:03:02](https://lobste.rs/s/zxglnn/code_review_can_be_better) - [Code Review Can Be Better](https://tigerbeetle.com/blog/2025-08-04-code-review-can-be-better/)
* [2025-08-20, 06:48:00](https://soylentnews.org/article.pl?sid=25/08/19/1550241&amp;from=rss) - [Scientists Say Tool Can Sniff 5G Traffic, Launch &apos;Attacks&apos; Without Using Rogue Base Stations](https://soylentnews.org/article.pl?sid=25/08/19/1550241&amp;from=rss)
* [2025-08-20, 02:06:00](https://soylentnews.org/article.pl?sid=25/08/19/1547232&amp;from=rss) - [Can’t Pay, Won’t Pay: Impoverished Streaming Services are Driving Viewers Back to Piracy](https://soylentnews.org/article.pl?sid=25/08/19/1547232&amp;from=rss)
* [2025-08-19, 21:21:00](https://soylentnews.org/article.pl?sid=25/08/19/0050215&amp;from=rss) - [Attorneys General, HCA Settle Over Nurse Training Repayment Provisions](https://soylentnews.org/article.pl?sid=25/08/19/0050215&amp;from=rss)
* [2025-08-19, 19:23:00](https://soylentnews.org/article.pl?sid=25/08/19/195256&amp;from=rss) - [Only 3 Stories in the Submissions Queue](https://soylentnews.org/article.pl?sid=25/08/19/195256&amp;from=rss)
* [2025-08-19, 16:35:00](https://soylentnews.org/article.pl?sid=25/08/19/0044229&amp;from=rss) - [Federal Court Filing System Hit in Sweeping Hack](https://soylentnews.org/article.pl?sid=25/08/19/0044229&amp;from=rss)
* [2025-08-19, 11:53:00](https://soylentnews.org/article.pl?sid=25/08/19/0039216&amp;from=rss) - [Charged Drops Don&apos;t Splash](https://soylentnews.org/article.pl?sid=25/08/19/0039216&amp;from=rss)
* [2025-08-19, 07:05:00](https://soylentnews.org/article.pl?sid=25/08/18/126258&amp;from=rss) - [Scientists 3D Print Inside a Living Cell](https://soylentnews.org/article.pl?sid=25/08/18/126258&amp;from=rss)
* [2025-08-19, 02:20:00](https://soylentnews.org/article.pl?sid=25/08/18/122222&amp;from=rss) - [Wikipedia Loses Challenge Against Online Safety Act, but the Door is Open for a Challenge](https://soylentnews.org/article.pl?sid=25/08/18/122222&amp;from=rss)
* [2025-08-18, 21:33:00](https://soylentnews.org/article.pl?sid=25/08/18/1144234&amp;from=rss) - [A Tale of Two Distros: One Outgoing and One Incoming](https://soylentnews.org/article.pl?sid=25/08/18/1144234&amp;from=rss)
* [2025-08-18, 16:48:00](https://soylentnews.org/article.pl?sid=25/08/18/1141215&amp;from=rss) - [Radioactive Water From UK Nuclear Bomb Base Leaked Into Sea, Files Show](https://soylentnews.org/article.pl?sid=25/08/18/1141215&amp;from=rss)
* [2025-08-18, 16:36:10](https://news.ycombinator.com/item?id=44942547) - [Elegant mathematics bending the future of design](https://actu.epfl.ch/news/elegant-mathematics-bending-the-future-of-design/)
* [2025-08-18, 16:01:44](https://news.ycombinator.com/item?id=44942099) - [Show HN: OS X Mavericks Forever](https://mavericksforever.com/)
* [2025-08-18, 15:19:05](https://news.ycombinator.com/item?id=44941605) - [An interactive guide to SVG paths](https://www.joshwcomeau.com/svg/interactive-guide-to-paths/)
* [2025-08-18, 15:13:39](https://news.ycombinator.com/item?id=44941546) - [Benchmarks for Golang SQLite Drivers](https://github.com/cvilsmeier/go-sqlite-bench)
* [2025-08-18, 14:30:28](https://news.ycombinator.com/item?id=44941056) - [VHS-C: when a lazy idea stumbles towards perfection [video]](https://www.youtube.com/watch?v=HFYWHeBhYbM)
* [2025-08-18, 12:05:00](https://soylentnews.org/article.pl?sid=25/08/17/1234239&amp;from=rss) - [Toothpaste Made From Hair Provides Natural Root to Repair Teeth](https://soylentnews.org/article.pl?sid=25/08/17/1234239&amp;from=rss)
* [2025-08-18, 07:21:00](https://soylentnews.org/article.pl?sid=25/08/17/1246229&amp;from=rss) - [Firefox’s New “AI” Features Cause CPU Spikes and Battery Drain](https://soylentnews.org/article.pl?sid=25/08/17/1246229&amp;from=rss)
* [2025-08-18, 02:36:00](https://soylentnews.org/article.pl?sid=25/08/17/1237215&amp;from=rss) - [Blackhole Bounce - New Universes](https://soylentnews.org/article.pl?sid=25/08/17/1237215&amp;from=rss)
