# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software

* [From Zero to QED: An informal introduction to formality in Lean 4](https://sdiehl.github.io/zero-to-qed/01_introduction.html) - Explore the journey into the mathematical proof assistant Lean 4 and its impact on formal reasoning.

* [Proposed Rust kernel extensions in place of eBPF](https://www.phoronix.com/news/Linux-Kernel-Rust-Rex) - Rust kernel extensions are proposed as a modern replacement for eBPF, focusing on safety and performance.

* [NASA's Webb Telescope detects an exoplanet with a potential helium and carbon atmosphere](https://science.nasa.gov/missions/webb/nasas-webb-observes-exoplanet-whose-composition-defies-explanation/) - Webb's groundbreaking observations spark curiosity about an exotic exoplanet with unique atmospheric composition.

* [Top programming languages for music](https://timthompson.com/plum/cgi/showlist.cgi?sort=name&concise=yes) - A dive into programming languages used for creating and interfacing with music applications.

## Privacy and Surveillance

* [AI Bathroom Monitors? Welcome to America’s New Surveillance High Schools](https://www.forbes.com/sites/thomasbrewster/2025/12/16/ai-bathroom-monitors-welcome-to-americas-new-surveillance-high-schools/) - Investigate the implications of AI’s role in monitoring school behavior and privacy concerns.

* [Your Supabase Is Public](https://skilldeliver.com/your-supabase-is-public) - A warning about improper Supabase configurations potentially leaking private data.

* [Spotify Says 'Anti-Copyright Extremists' Scraped Its Library](https://entertainment.slashdot.org/story/25/12/22/1128259/spotify-says-anti-copyright-extremists-scraped-its-library) - Controversy ensues regarding copyright infringement and scraped music libraries.

## Artificial Intelligence

* [Visa Says AI Will Start Shopping and Paying For You In 2026](https://slashdot.org/story/25/12/22/1210214/visa-says-ai-will-start-shopping-and-paying-for-you-in-2026) - Visa claims artificial intelligence will revolutionize consumer spending habits.

* [Instacart Kills AI Pricing Tests That Charged Some Customers More Than Others](https://slashdot.org/story/25/12/22/1756217/instacart-kills-ai-pricing-tests-that-charged-some-customers-more-than-others) - A failed experiment in AI-driven pricing sparks debates over fairness and transparency.

* [Scaling LLMs to Larger Codebases](https://blog.kierangill.xyz/oversight-and-guidance) - Insights into challenges and strategies for scaling large language models (LLMs) to accommodate extensive codebases.

## Innovations in Design and Engineering

* [The biggest CRT ever made: Sony's PVM-4300](https://dfarq.homeip.net/the-biggest-crt-ever-made-sonys-pvm-4300/) - Reflecting on the marvel of Sony's PVM-4300, the largest CRT screen ever produced.

* [Building your own RSS digest using GitHub Actions/Pages](https://github.com/piqoni/go-digest) - A quick guide to constructing a custom RSS feed aggregator with GitHub's tools.

* [typed-arrow: First-class compile‑time Arrow schemas for Rust](https://github.com/tonbo-io/typed-arrow) - Explore Rust's advanced compile-time abilities with typed schemas for Arrow.

## Cultural and Historical Reflections

* [The ancient monuments saluting the winter solstice](https://www.bbc.com/culture/article/20251219-the-ancient-monuments-saluting-the-winter-solstice) - A fascinating look at historical landmarks designed to celebrate the winter solstice.

* [Public Domain Day 2026](https://soylentnews.org/article.pl?sid=25/12/20/0114215) - Discussing the expansions of creative works entering the public domain this year.

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

* [2025-12-22, 18:43:37](https://lobste.rs/s/2rtmv9/from_zero_qed_informal_introduction) - [From Zero to QED: An informal introduction to formality in Lean 4](https://sdiehl.github.io/zero-to-qed/01_introduction.html)
* [2025-12-22, 18:41:00](https://linux.slashdot.org/story/25/12/22/1840258/what-the-linux-desktop-really-needs-to-challenge-windows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What the Linux Desktop Really Needs To Challenge Windows](https://linux.slashdot.org/story/25/12/22/1840258/what-the-linux-desktop-really-needs-to-challenge-windows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-22, 18:39:30](https://news.ycombinator.com/item?id=46357194) - [I know you didn&apos;t write this](https://ammil.industries/i-know-you-didnt-write-this/)
* [2025-12-22, 18:27:57](https://lobste.rs/s/p6gjfj/uncomfortable_necessary_discussion) - [An uncomfortable but necessary discussion about the Debian bug tracker](https://nibblestew.blogspot.com/2025/12/an-uncomfortable-but-necessary.html)
* [2025-12-22, 18:14:00](https://lobste.rs/s/4qm8zs/towards_secure_peer_peer_app_platform_for) - [Towards a secure peer-to-peer app platform for Clan](https://clan.lol/blog/towards-app-platform-vmtech/)
* [2025-12-22, 18:02:00](https://slashdot.org/story/25/12/22/1756217/instacart-kills-ai-pricing-tests-that-charged-some-customers-more-than-others?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Instacart Kills AI Pricing Tests That Charged Some Customers More Than Others](https://slashdot.org/story/25/12/22/1756217/instacart-kills-ai-pricing-tests-that-charged-some-customers-more-than-others?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-22, 17:53:46](https://news.ycombinator.com/item?id=46356603) - [AI Bathroom Monitors? Welcome to America&apos;s New Surveillance High Schools](https://www.forbes.com/sites/thomasbrewster/2025/12/16/ai-bathroom-monitors-welcome-to-americas-new-surveillance-high-schools/)
* [2025-12-22, 17:32:18](https://news.ycombinator.com/item?id=46356320) - [Henge Finder](https://hengefinder.rcdis.co/#learn)
* [2025-12-22, 17:21:00](https://slashdot.org/story/25/12/22/1210214/visa-says-ai-will-start-shopping-and-paying-for-you-in-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Visa Says AI Will Start Shopping and Paying For You In 2026](https://slashdot.org/story/25/12/22/1210214/visa-says-ai-will-start-shopping-and-paying-for-you-in-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-22, 17:19:44](https://news.ycombinator.com/item?id=46356182) - [Benn Jordan – This Flock Camera Leak Is Like Netflix for Stalkers [video]](https://www.youtube.com/watch?v=vU1-uiUlHTo)
* [2025-12-22, 17:17:00](https://soylentnews.org/article.pl?sid=25/12/21/0855202&amp;from=rss) - [Where Do Microplastics Go Once They Sink Into the Ocean?](https://soylentnews.org/article.pl?sid=25/12/21/0855202&amp;from=rss)
* [2025-12-22, 17:02:41](https://lobste.rs/s/3w65ir/email_simplicity_vs_decentralized_chat) - [Email Simplicity vs Decentralized Chat](https://lobste.rs/s/3w65ir/email_simplicity_vs_decentralized_chat)
* [2025-12-22, 17:01:28](https://news.ycombinator.com/item?id=46355949) - [NIST was 5 μs off UTC after last week&apos;s power cut](https://www.jeffgeerling.com/blog/2025/nist-was-5-μs-utc-after-last-weeks-power-cut)
* [2025-12-22, 17:00:34](https://news.ycombinator.com/item?id=46355932) - [Uplane (YC F25) Is Hiring Founding Engineers (Full-Stack and AI)](https://www.useparallel.com/uplane1/careers)
* [2025-12-22, 16:56:35](https://news.ycombinator.com/item?id=46355888) - [Jimmy Lai Is a Martyr for Freedom](https://reason.com/2025/12/19/jimmy-lai-is-a-martyr-for-freedom/)
* [2025-12-22, 16:41:00](https://games.slashdot.org/story/25/12/22/126233/state-of-play-who-holds-the-power-in-the-video-games-industry-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [State of Play: Who Holds the Power in the Video Games Industry in 2025?](https://games.slashdot.org/story/25/12/22/126233/state-of-play-who-holds-the-power-in-the-video-games-industry-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-22, 16:31:40](https://news.ycombinator.com/item?id=46355548) - [Flock Exposed Its AI-Powered Cameras to the Internet. We Tracked Ourselves](https://www.404media.co/flock-exposed-its-ai-powered-cameras-to-the-internet-we-tracked-ourselves/)
* [2025-12-22, 16:14:43](https://news.ycombinator.com/item?id=46355345) - [Your Supabase Is Public](https://skilldeliver.com/your-supabase-is-public)
* [2025-12-22, 16:00:00](https://slashdot.org/story/25/12/22/120248/samsung-is-putting-google-gemini-ai-into-your-refrigerator-whether-you-need-it-or-not?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Samsung Is Putting Google Gemini AI Into Your Refrigerator, Whether You Need It or Not](https://slashdot.org/story/25/12/22/120248/samsung-is-putting-google-gemini-ai-into-your-refrigerator-whether-you-need-it-or-not?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-22, 15:59:01](https://news.ycombinator.com/item?id=46355165) - [Claude Code gets native LSP support](https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md)
* [2025-12-22, 15:43:27](https://lobste.rs/s/supzy7/nature_programming_language) - [Nature Programming Language](https://nature-lang.org/)
* [2025-12-22, 15:38:37](https://news.ycombinator.com/item?id=46354970) - [Scaling LLMs to Larger Codebases](https://blog.kierangill.xyz/oversight-and-guidance)
* [2025-12-22, 15:25:57](https://lobste.rs/s/rdotp2/proposed_rust_kernel_extensions_place) - [Proposed Rust kernel extensions in place of eBPF](https://www.phoronix.com/news/Linux-Kernel-Rust-Rex)
* [2025-12-22, 15:21:00](https://news.slashdot.org/story/25/12/22/1154232/welcome-to-americas-new-surveillance-high-schools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Welcome To America&apos;s New Surveillance High Schools](https://news.slashdot.org/story/25/12/22/1154232/welcome-to-americas-new-surveillance-high-schools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-22, 15:16:18](https://news.ycombinator.com/item?id=46354773) - [On the Existence, Impact, and Origin of Hallucination-Associated Neurons in LLMs](https://arxiv.org/abs/2512.01797)
* [2025-12-22, 14:44:42](https://lobste.rs/s/sv8c9s/privacy_preserving_vaccination_checks) - [Privacy-Preserving Vaccination Checks: A Proof of Concept MPC Deployment with the Frankfurt Health Department](https://sine.foundation/library/mpc-vaccination-check)
* [2025-12-22, 14:40:00](https://slashdot.org/story/25/12/22/1147243/irobot-founder-says-ftc-treated-blocked-deals-like-trophies-as-bankruptcy-follows-failed-amazon-acquisition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [iRobot Founder Says FTC Treated Blocked Deals &apos;Like Trophies&apos; as Bankruptcy Follows Failed Amazon Acquisition](https://slashdot.org/story/25/12/22/1147243/irobot-founder-says-ftc-treated-blocked-deals-like-trophies-as-bankruptcy-follows-failed-amazon-acquisition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-22, 14:00:00](https://entertainment.slashdot.org/story/25/12/22/1128259/spotify-says-anti-copyright-extremists-scraped-its-library?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Spotify Says &apos;Anti-Copyright Extremists&apos; Scraped Its Library](https://entertainment.slashdot.org/story/25/12/22/1128259/spotify-says-anti-copyright-extremists-scraped-its-library?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-22, 13:51:47](https://lobste.rs/s/lbpxep/simplistic_comptime_column_safety) - [Simplistic Comptime Column Safety in SQLite Queries](https://kristoff.it/blog/simplistic-comptime-sqlite/)
* [2025-12-22, 12:54:29](https://news.ycombinator.com/item?id=46353777) - [The biggest CRT ever made: Sony&apos;s PVM-4300](https://dfarq.homeip.net/the-biggest-crt-ever-made-sonys-pvm-4300/)
* [2025-12-22, 12:34:00](https://games.slashdot.org/story/25/12/22/0721241/is-xbox-betting-on-cross-platform-gaming?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is Xbox Betting on Cross-Platform Gaming?](https://games.slashdot.org/story/25/12/22/0721241/is-xbox-betting-on-cross-platform-gaming?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-22, 12:32:00](https://soylentnews.org/article.pl?sid=25/12/20/1453248&amp;from=rss) - [North Korean Infiltrator Caught Working in Amazon IT Department Thanks to Keystroke Lag](https://soylentnews.org/article.pl?sid=25/12/20/1453248&amp;from=rss)
* [2025-12-22, 11:12:29](https://lobste.rs/s/zzvn7y/i_m_former_cto_here_is_15_sec_coding_test_i) - [I’m a former CTO. Here is the 15 sec coding test I used to instantly filter out 50% of unqualified applicants](https://josezarazua.com/im-a-former-cto-here-is-the-15-sec-coding-test-i-used-to-instantly-filter-out-50-of-unqualified-applicants/)
* [2025-12-22, 11:05:29](https://lobste.rs/s/fy1dlq/build_your_own_rss_daily_digest_using) - [Build your own RSS daily digest using GitHub Actions/Pages in 5 minutes](https://github.com/piqoni/go-digest)
* [2025-12-22, 10:34:00](https://apple.slashdot.org/story/25/12/22/0741256/apple-developers-account-restored-after-compromised-gift-card-incident?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Developer&apos;s Account Restored After Compromised Gift Card Incident](https://apple.slashdot.org/story/25/12/22/0741256/apple-developers-account-restored-after-compromised-gift-card-incident?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-22, 10:27:52](https://news.ycombinator.com/item?id=46352930) - [If you don&apos;t design your career, someone else will (2014)](https://gregmckeown.com/if-you-dont-design-your-career-someone-else-will/)
* [2025-12-22, 10:19:57](https://news.ycombinator.com/item?id=46352875) - [A year of vibes](https://lucumr.pocoo.org/2025/12/22/a-year-of-vibes/)
* [2025-12-22, 09:30:58](https://news.ycombinator.com/item?id=46352565) - [The ancient monuments saluting the winter solstice](https://www.bbc.com/culture/article/20251219-the-ancient-monuments-saluting-the-winter-solstice)
* [2025-12-22, 08:42:31](https://news.ycombinator.com/item?id=46352310) - [Show HN: Backlog – a public repository of real work problems](https://www.worldsbacklog.com/)
* [2025-12-22, 08:42:23](https://lobste.rs/s/k9rvab/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/k9rvab/what_are_you_doing_this_week)
* [2025-12-22, 08:40:47](https://lobste.rs/s/h6pqyr/installing_void_linux_on_zfs_with) - [Installing Void Linux on ZFS with Hibernation Support](https://it-notes.dragas.net/2025/12/22/void-linux-zfs-hibernation-guide/)
* [2025-12-22, 08:35:59](https://lobste.rs/s/j3kwxj/when_simd_fails_floating_point) - [When SIMD Fails: Floating Point Associativity](https://xania.org/202512/21-vectorising-floats)
* [2025-12-22, 08:24:32](https://news.ycombinator.com/item?id=46352231) - [Debian&apos;s Git Transition](https://diziet.dreamwidth.org/20436.html)
* [2025-12-22, 07:47:00](https://soylentnews.org/article.pl?sid=25/12/20/1449230&amp;from=rss) - [Google is Shutting Down its Dark Web Report Feature in January](https://soylentnews.org/article.pl?sid=25/12/20/1449230&amp;from=rss)
* [2025-12-22, 06:34:00](https://yro.slashdot.org/story/25/12/22/0524233/in-2025-scammers-have-stolen-835m-from-americans-using-fake-customer-service-numbers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [In 2025 Scammers Have Stolen $835M from Americans Using Fake Customer Service Numbers](https://yro.slashdot.org/story/25/12/22/0524233/in-2025-scammers-have-stolen-835m-from-americans-using-fake-customer-service-numbers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-22, 05:19:40](https://lobste.rs/s/dodxvz/typed_arrow_first_class_compile_time) - [typed-arrow: First-class compile‑time Arrow schemas for Rust](https://github.com/tonbo-io/typed-arrow)
* [2025-12-22, 04:05:00](https://news.slashdot.org/story/25/12/22/042225/the-us-could-ban-chinese-made-drones-used-by-police-departments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The U.S. Could Ban Chinese-Made Drones Used By Police Departments](https://news.slashdot.org/story/25/12/22/042225/the-us-could-ban-chinese-made-drones-used-by-police-departments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-22, 03:04:00](https://soylentnews.org/article.pl?sid=25/12/20/1446230&amp;from=rss) - [Senators Count the Shady Ways Data Centers Pass Energy Costs on to Americans](https://soylentnews.org/article.pl?sid=25/12/20/1446230&amp;from=rss)
* [2025-12-22, 01:34:00](https://hardware.slashdot.org/story/25/12/21/2337215/google-launches-co2-battery-plants-for-long-duration-storage-of-renewable-energy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Launches CO2 Battery Plants for Long-Duration Storage of Renewable Energy](https://hardware.slashdot.org/story/25/12/21/2337215/google-launches-co2-battery-plants-for-long-duration-storage-of-renewable-energy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-22, 00:08:40](https://lobste.rs/s/svqpuu/debian_s_git_transition) - [Debian’s git transition](https://diziet.dreamwidth.org/20436.html)
* [2025-12-21, 22:34:00](https://entertainment.slashdot.org/story/25/12/21/2134227/are-geek-gifts-becoming-their-own-demographic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Are &apos;Geek Gifts&apos; Becoming Their Own Demographic?](https://entertainment.slashdot.org/story/25/12/21/2134227/are-geek-gifts-becoming-their-own-demographic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-21, 22:19:48](https://lobste.rs/s/rbobxh/logging_sucks_your_logs_are_lying_you) - [Logging Sucks - Your Logs Are Lying To You](https://loggingsucks.com/)
* [2025-12-21, 22:18:00](https://soylentnews.org/article.pl?sid=25/12/20/1439207&amp;from=rss) - [Google&apos;s New &apos;Disco&apos; Browser Turns Tabs Into Custom Web Apps](https://soylentnews.org/article.pl?sid=25/12/20/1439207&amp;from=rss)
* [2025-12-21, 22:06:10](https://lobste.rs/s/pbxwjt/i_program_on_subway) - [I Program on the Subway](https://www.scd31.com/posts/programming-on-the-subway)
* [2025-12-21, 21:46:20](https://news.ycombinator.com/item?id=46348847) - [Disney Imagineering Debuts Next-Generation Robotic Character, Olaf](https://disneyparksblog.com/disney-experiences/robotic-olaf-marks-new-era-of-disney-innovation/)
* [2025-12-21, 21:34:00](https://tech.slashdot.org/story/25/12/21/2048257/confused-waymos-stopped-in-intersections-during-san-francisco-power-outage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Confused&apos; Waymos Stopped in Intersections During San Francisco Power Outage](https://tech.slashdot.org/story/25/12/21/2048257/confused-waymos-stopped-in-intersections-during-san-francisco-power-outage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-21, 20:05:09](https://lobste.rs/s/obiiim/thirteen_years_rust_birth_rue) - [Thirteen years of Rust and the birth of Rue](https://steveklabnik.com/writing/thirteen-years-of-rust-and-the-birth-of-rue/)
* [2025-12-21, 18:36:20](https://lobste.rs/s/lyykk0/dumbphone_journey_eight_month_update) - [dumbphone journey -- eight month update](https://blog.frog.equipment/dumbphone-journey-eight-month-update)
* [2025-12-21, 18:26:36](https://lobste.rs/s/fvvnl4/what_s_new_python_3_15) - [What’s new in Python 3.15](https://docs.python.org/3.15/whatsnew/3.15.html)
* [2025-12-21, 17:36:00](https://soylentnews.org/article.pl?sid=25/12/20/1428203&amp;from=rss) - [The Secret Life of Moles: What They&apos;re Really Up to Underground](https://soylentnews.org/article.pl?sid=25/12/20/1428203&amp;from=rss)
* [2025-12-21, 17:29:25](https://lobste.rs/s/qoqfwz/inverse_parentheses) - [Inverse parentheses](https://kellett.im/a/inverse-parentheses)
* [2025-12-21, 15:32:48](https://lobste.rs/s/vvsnhj/exploring_speculative_jit_compilation) - [Exploring Speculative JIT Compilation for Emacs Lisp with Java](https://kyo.iroiro.party/en/posts/juicemacs-exploring-jit-for-elisp/)
* [2025-12-21, 14:59:24](https://lobste.rs/s/rqub7y/you_can_t_opt_out_accessibility) - [You Can&apos;t Opt-Out of Accessibility](https://vale.rocks/posts/accessibility-importance)
* [2025-12-21, 14:46:53](https://news.ycombinator.com/item?id=46345205) - [How I protect my Forgejo instance from AI web crawlers](https://her.esy.fun/posts/0031-how-i-protect-my-forgejo-instance-from-ai-web-crawlers/index.html)
* [2025-12-21, 14:45:15](https://lobste.rs/s/r5hdwa/how_i_protect_my_forgejo_instance_from_ai) - [How I protect my forgejo instance from AI Web Crawlers](https://her.esy.fun/posts/0031-how-i-protect-my-forgejo-instance-from-ai-web-crawlers/index.html)
* [2025-12-21, 14:06:02](https://lobste.rs/s/rgpalc/atomic_time_scale_at_nist_boulder_has) - [The atomic time scale at NIST Boulder has failed](https://journa.host/@w7voa/115754351058263109)
* [2025-12-21, 12:49:00](https://soylentnews.org/article.pl?sid=25/12/20/0114215&amp;from=rss) - [Public Domain Day 2026](https://soylentnews.org/article.pl?sid=25/12/20/0114215&amp;from=rss)
* [2025-12-21, 08:08:00](https://soylentnews.org/article.pl?sid=25/12/20/0110218&amp;from=rss) - [Home Depot Exposed Access to Internal Systems for a Year](https://soylentnews.org/article.pl?sid=25/12/20/0110218&amp;from=rss)
* [2025-12-21, 04:40:00](https://soylentnews.org/article.pl?sid=25/12/20/016256&amp;from=rss) - [Ventoy 1.1.09 Released With Experimental Btrfs Support](https://soylentnews.org/article.pl?sid=25/12/20/016256&amp;from=rss)
* [2025-12-21, 03:17:00](https://soylentnews.org/article.pl?sid=25/12/20/018216&amp;from=rss) - [Indoor Tanning Makes Youthful Skin Much Older on a Genetic Level](https://soylentnews.org/article.pl?sid=25/12/20/018216&amp;from=rss)
* [2025-12-20, 22:34:00](https://soylentnews.org/article.pl?sid=25/12/19/0538241&amp;from=rss) - [Fake Leonardo DiCaprio Movie Torrent Drops Agent Tesla Through Layered PowerShell Chain](https://soylentnews.org/article.pl?sid=25/12/19/0538241&amp;from=rss)
* [2025-12-20, 18:40:45](https://news.ycombinator.com/item?id=46338437) - [Programming languages used for music](https://timthompson.com/plum/cgi/showlist.cgi?sort=name&amp;concise=yes)
* [2025-12-20, 17:44:00](https://soylentnews.org/article.pl?sid=25/12/19/0524257&amp;from=rss) - [Nissan Adds Hearing Test and Custom Equilization to Car Audio](https://soylentnews.org/article.pl?sid=25/12/19/0524257&amp;from=rss)
* [2025-12-20, 12:57:00](https://soylentnews.org/article.pl?sid=25/12/19/0522251&amp;from=rss) - [iRobot Swept Into Bankruptcy](https://soylentnews.org/article.pl?sid=25/12/19/0522251&amp;from=rss)
* [2025-12-20, 08:17:00](https://soylentnews.org/article.pl?sid=25/12/19/0429209&amp;from=rss) - [Google Releases its New Google Sans Flex Font as Open Source](https://soylentnews.org/article.pl?sid=25/12/19/0429209&amp;from=rss)
* [2025-12-20, 03:27:00](https://soylentnews.org/article.pl?sid=25/12/18/139231&amp;from=rss) - [This Star is Being Eaten Alive—and its Explosive Death Will be Visible in Broad Daylight](https://soylentnews.org/article.pl?sid=25/12/18/139231&amp;from=rss)
* [2025-12-19, 22:43:00](https://soylentnews.org/article.pl?sid=25/12/18/133249&amp;from=rss) - [Mozilla&apos;s New CEO: Firefox Will Become an “AI Browser”](https://soylentnews.org/article.pl?sid=25/12/18/133249&amp;from=rss)
* [2025-12-19, 21:50:52](https://news.ycombinator.com/item?id=46331364) - [Show HN: Netrinos – A keep it simple Mesh VPN for small teams](https://netrinos.com)
* [2025-12-19, 17:55:00](https://soylentnews.org/article.pl?sid=25/12/18/046237&amp;from=rss) - [Resolving to Spend Less Time on Your Smartphone? Understanding Your Travel Habits Can Help](https://soylentnews.org/article.pl?sid=25/12/18/046237&amp;from=rss)
* [2025-12-19, 13:21:00](https://soylentnews.org/article.pl?sid=25/12/18/044218&amp;from=rss) - [UK to “Encourage” Apple and Google to Put Nudity-Blocking Systems on Phones](https://soylentnews.org/article.pl?sid=25/12/18/044218&amp;from=rss)
* [2025-12-19, 13:16:57](https://news.ycombinator.com/item?id=46325475) - [Webb observes exoplanet that may have an exotic helium and carbon atmosphere](https://science.nasa.gov/missions/webb/nasas-webb-observes-exoplanet-whose-composition-defies-explanation/)
* [2025-12-19, 08:14:00](https://soylentnews.org/article.pl?sid=25/12/18/0358200&amp;from=rss) - [Google Translate expands live translation to all earbuds on Android](https://soylentnews.org/article.pl?sid=25/12/18/0358200&amp;from=rss)
* [2025-12-19, 08:11:00](https://soylentnews.org/article.pl?sid=25/12/18/0353210&amp;from=rss) - [British Billboards Are Watching You](https://soylentnews.org/article.pl?sid=25/12/18/0353210&amp;from=rss)
* [2025-12-19, 03:37:00](https://soylentnews.org/article.pl?sid=25/12/17/0218212&amp;from=rss) - [UK Strengthens Subsea Cables Against Russian Interference](https://soylentnews.org/article.pl?sid=25/12/17/0218212&amp;from=rss)
* [2025-12-18, 22:51:00](https://soylentnews.org/article.pl?sid=25/12/17/027253&amp;from=rss) - [Forget Flowers: These Ancient Plants Attract Pollinators by Getting Hot](https://soylentnews.org/article.pl?sid=25/12/17/027253&amp;from=rss)
* [2025-12-18, 18:04:00](https://soylentnews.org/article.pl?sid=25/12/17/0155253&amp;from=rss) - [Foxconn is Building a Massive Factory in KY, but Probably Not for Apple](https://soylentnews.org/article.pl?sid=25/12/17/0155253&amp;from=rss)
* [2025-12-18, 17:49:10](https://news.ycombinator.com/item?id=46316050) - [Deliberate Internet Shutdowns](https://www.schneier.com/blog/archives/2025/12/deliberate-internet-shutdowns.html)
* [2025-12-18, 17:14:44](https://news.ycombinator.com/item?id=46315581) - [There&apos;s no such thing as a fake feather [video]](https://www.youtube.com/watch?v=N5yV1Q9O6r4)
* [2025-12-18, 13:15:00](https://soylentnews.org/article.pl?sid=25/12/17/0154226&amp;from=rss) - [The Tor Project is Making a Switch to Rust, Ditches C](https://soylentnews.org/article.pl?sid=25/12/17/0154226&amp;from=rss)
* [2025-12-18, 08:38:00](https://soylentnews.org/article.pl?sid=25/12/17/0149259&amp;from=rss) - [Ford Cancels Electric F-150](https://soylentnews.org/article.pl?sid=25/12/17/0149259&amp;from=rss)
* [2025-12-18, 03:46:00](https://soylentnews.org/article.pl?sid=25/12/17/0147256&amp;from=rss) - [After 50 Years, MIT Chemists Finally Synthesize Elusive Anti-Cancer Compound](https://soylentnews.org/article.pl?sid=25/12/17/0147256&amp;from=rss)
