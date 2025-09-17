# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Advancements and Tools

* [Scientists Find That Ice Generates Electricity When Bent](https://science.slashdot.org/story/25/09/16/236209/scientists-find-that-ice-generates-electricity-when-bent?utm_source=rss1.0mainlinkanon&utm_medium=feed) offers an intriguing discovery in material science.

* [Tabby – A Terminal for the Modern Age](https://github.com/Eugeny/tabby) highlights a modern terminal with advanced features.

* [Murex – An intuitive and content aware shell for a modern command line](https://murex.rocks/) demonstrates innovation in command-line interfaces.

* [How Container Filesystem Works: Building a Docker-Like Container from Scratch](https://labs.iximiuz.com/tutorials/container-filesystem-from-scratch) provides a deep dive into container technology.

* [A Dumb Introduction to z3](https://asibahi.github.io/thoughts/a-gentle-introduction-to-z3/) simplifies understanding of SMT solver z3 for non-experts.

* [Denmark close to wiping out cancer-causing HPV strains after vaccine roll-out](https://www.gavi.org/vaccineswork/denmark-close-wiping-out-leading-cancer-causing-hpv-strains-after-vaccine-roll-out) showcases strides in public health through vaccination.

* [Real-Time Observation of Magnet Switching in a Single Atom](https://soylentnews.org/article.pl?sid=25/09/15/1937219&amp;from=rss) demonstrates advancements in atomic-level observation.

* [Scientists Urge EU Governments to Reject Chat Control Rules](https://soylentnews.org/article.pl?sid=25/09/11/0325209&amp;from=rss) rallies against proposed surveillance rules threatening privacy.

* [ASML Invests €1.3bn in AI Company Mistral](https://soylentnews.org/article.pl?sid=25/09/11/0310226&amp;from=rss) signifies a major investment in AI by a prominent tech firm.

## Global Policies and Impact

* [China Tells Its Tech Companies To Stop Buying All of Nvidia's AI Chips](https://tech.slashdot.org/story/25/09/17/0843228/china-tells-its-tech-companies-to-stop-buying-all-of-nvidias-ai-chips?utm_source=rss1.0mainlinkanon&utm_medium=feed) marks a significant move in the geopolitical tech landscape.

* [Microsoft Announces $30 Billion Investment In AI Infrastructure, Operations In UK](https://news.slashdot.org/story/25/09/16/2032219/microsoft-announces-30-billion-investment-in-ai-infrastructure-operations-in-uk?utm_source=rss1.0mainlinkanon&utm_medium=feed) reflects Microsoft's major commitment to AI development.

* [Top UN legal investigators conclude Israel is guilty of genocide in Gaza](https://www.middleeasteye.net/news/un-concludes-israel-guilty-genocide-gaza) delivers pressing international legal findings.

* [When It Comes to US AI Rules, There's Too Many Cooks](https://soylentnews.org/article.pl?sid=25/09/16/0314240&amp;from=rss) underscores regulatory disarray in AI policymaking in the US.

## Cybersecurity and Software

* [PyPI Token Exfiltration Campaign via GitHub Actions Workflows](https://blog.pypi.org/posts/2025-09-16-github-actions-token-exfiltration/) examines a novel supply chain attack.

* [ctrl/tinycolor and 40+ NPM Packages Compromised](https://www.stepsecurity.io/blog/ctrl-tinycolor-and-40-npm-packages-compromised) investigates recently exposed vulnerabilities in popular libraries.

* [Renewable Energy has a Cybersecurity Problem](https://soylentnews.org/article.pl?sid=25/09/14/0037204&amp;from=rss) addresses emerging risks to green energy initiatives.

* [About the security content of iOS 15.8.5 and iPadOS 15.8.5](https://support.apple.com/en-us/125142) unfolds detailed updates on Apple OS security.

## Space and Science Explorations

* [New Nuclear Rocket Concept Could Slash Mars Travel Time in Half](https://soylentnews.org/article.pl?sid=25/09/15/1213242&amp;from=rss) offers a paradigm shift in interplanetary travel.

* [A New Report Finds China's Space Program Will Soon Equal That of the US](https://news.slashdot.org/story/25/09/16/2050253/a-new-report-finds-chinas-space-program-will-soon-equal-that-of-the-us?utm_source=rss1.0mainlinkanon&utm_medium=feed) foretells fierce space competition.

* [CubeSats are fascinating learning tools for space](https://www.jeffgeerling.com/blog/2025/cubesats-are-fascinating-learning-tools-space) emphasizes their potential as small, powerful space tools.

* [Solar Pacifiers: Influence of the Planets May Subdue Solar Activity](https://soylentnews.org/article.pl?sid=25/09/15/1921210&amp;from=rss) discusses potential planetary impacts on solar activity.

## Cultural and Social Reflections

* [In Praise of Idleness (1932)](https://harpers.org/archive/1932/10/in-praise-of-idleness/) revisits a classic essay on societal labor norms.

* [Wanted to spy on my dog, ended up spying on TP-Link](https://kennedn.com/blog/posts/tapo/) humorously outlines unexpected discoveries in personal tech use.

* [Tuberculosis shaped Victorian fashion (2016)](https://www.smithsonianmag.com/science-nature/how-tuberculosis-shaped-victorian-fashion-180959029/) explores historical intersections between health and fashion.

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

* [2025-09-17, 09:59:00](https://soylentnews.org/article.pl?sid=25/09/16/1159239&amp;from=rss) - [The Varnish Cache Project Will Soon be Called the Vinyl Cache Project](https://soylentnews.org/article.pl?sid=25/09/16/1159239&amp;from=rss)
* [2025-09-17, 09:56:53](https://lobste.rs/s/wm8awb/introducing_obelisk_0_24_1) - [Introducing Obelisk 0.24.1](https://obeli.sk/blog/introducing-obelisk-0-24-1/)
* [2025-09-17, 08:51:45](https://lobste.rs/s/zdjtvp/what_go_proxy_has_been_doing) - [what the go proxy has been doing](https://flak.tedunangst.com/post/what-the-go-proxy-has-been-doing)
* [2025-09-17, 08:43:00](https://tech.slashdot.org/story/25/09/17/0843228/china-tells-its-tech-companies-to-stop-buying-all-of-nvidias-ai-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Tells Its Tech Companies To Stop Buying All of Nvidia&apos;s AI Chips](https://tech.slashdot.org/story/25/09/17/0843228/china-tells-its-tech-companies-to-stop-buying-all-of-nvidias-ai-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-17, 08:38:17](https://news.ycombinator.com/item?id=45273352) - [Why We&apos;re Building Stategraph: Terraform State as a Distributed Systems Problem](https://stategraph.dev/blog/why-stategraph/)
* [2025-09-17, 07:38:42](https://lobste.rs/s/240z81/our_ai_policy_vs_code_conduct_vs_reality) - [Our AI policy vs code of conduct and vs reality](https://discourse.llvm.org/t/our-ai-policy-vs-code-of-conduct-and-vs-reality/88300)
* [2025-09-17, 07:00:09](https://news.ycombinator.com/item?id=45272692) - [Tabby – A Terminal for the Modern Age](https://github.com/Eugeny/tabby)
* [2025-09-17, 07:00:00](https://science.slashdot.org/story/25/09/16/236209/scientists-find-that-ice-generates-electricity-when-bent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Find That Ice Generates Electricity When Bent](https://science.slashdot.org/story/25/09/16/236209/scientists-find-that-ice-generates-electricity-when-bent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-17, 06:32:17](https://news.ycombinator.com/item?id=45272480) - [Murex – An intuitive and content aware shell for a modern command line](https://murex.rocks/)
* [2025-09-17, 06:04:06](https://news.ycombinator.com/item?id=45272296) - [In Praise of Idleness (1932)](https://harpers.org/archive/1932/10/in-praise-of-idleness/)
* [2025-09-17, 05:31:47](https://lobste.rs/s/jpxmcj/ubuntu_25_10_s_rust_coreutils_transition) - [Ubuntu 25.10&apos;s Rust Coreutils Transition Has Uncovered Performance Shortcomings](https://www.phoronix.com/news/Ubuntu-Rust-Coreutils-Perf)
* [2025-09-17, 05:21:17](https://lobste.rs/s/u1jrl6/solving_wooden_puzzle_using_haskell) - [Solving a Wooden Puzzle Using Haskell](https://glocq.github.io/en/blog/20250428/)
* [2025-09-17, 05:15:00](https://soylentnews.org/article.pl?sid=25/09/16/1158208&amp;from=rss) - [Boeing Faces $3.1M Fine for Door Plug Blowout, Hundreds of Safety Violations](https://soylentnews.org/article.pl?sid=25/09/16/1158208&amp;from=rss)
* [2025-09-17, 05:11:50](https://news.ycombinator.com/item?id=45271942) - [Notion API importer, with Databases to Bases conversion bounty](https://github.com/obsidianmd/obsidian-importer/issues/421)
* [2025-09-17, 04:52:26](https://lobste.rs/s/ywbyko/asus_gaming_laptop_acpi_firmware_bug_deep) - [The ASUS Gaming Laptop ACPI Firmware Bug: A Deep Technical Investigation](https://github.com/Zephkek/Asus-ROG-Aml-Deep-Dive)
* [2025-09-17, 04:26:02](https://news.ycombinator.com/item?id=45271664) - [I just want an 80×25 console, but that&apos;s no longer possible](https://changelog.complete.org/archives/10881-i-just-want-an-80x25-console-but-thats-no-longer-possible)
* [2025-09-17, 03:54:36](https://news.ycombinator.com/item?id=45271484) - [The Asus Gaming Laptop ACPI Firmware Bug: A Deep Technical Investigation](https://github.com/Zephkek/Asus-ROG-Aml-Deep-Dive)
* [2025-09-17, 03:54:06](https://news.ycombinator.com/item?id=45271481) - [GNU Midnight Commander](https://midnight-commander.org/)
* [2025-09-17, 03:30:00](https://news.slashdot.org/story/25/09/16/2050253/a-new-report-finds-chinas-space-program-will-soon-equal-that-of-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A New Report Finds China&apos;s Space Program Will Soon Equal That of the US](https://news.slashdot.org/story/25/09/16/2050253/a-new-report-finds-chinas-space-program-will-soon-equal-that-of-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-17, 02:07:24](https://lobste.rs/s/ksefec/pypi_token_exfiltration_campaign_via) - [PyPI Token Exfiltration Campaign via GitHub Actions Workflows](https://blog.pypi.org/posts/2025-09-16-github-actions-token-exfiltration/)
* [2025-09-17, 01:53:47](https://news.ycombinator.com/item?id=45270649) - [I got the highest score on ARC-AGI again swapping Python for English](https://jeremyberman.substack.com/p/how-i-got-the-highest-score-on-arc-agi-again)
* [2025-09-17, 00:34:02](https://news.ycombinator.com/item?id=45270108) - [About the security content of iOS 15.8.5 and iPadOS 15.8.5](https://support.apple.com/en-us/125142)
* [2025-09-17, 00:31:04](https://news.ycombinator.com/item?id=45270087) - [AMD Open Source Driver for Vulkan project is discontinued](https://github.com/GPUOpen-Drivers/AMDVLK/discussions/416)
* [2025-09-17, 00:02:00](https://yro.slashdot.org/story/25/09/16/2045241/chatgpt-will-guess-your-age-and-might-require-id-for-age-verification?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ChatGPT Will Guess Your Age and Might Require ID For Age Verification](https://yro.slashdot.org/story/25/09/16/2045241/chatgpt-will-guess-your-age-and-might-require-id-for-age-verification?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-17, 00:00:29](https://lobste.rs/s/g0yhjl/dumb_introduction_z3) - [A Dumb Introduction to z3](https://asibahi.github.io/thoughts/a-gentle-introduction-to-z3/)
* [2025-09-16, 23:36:00](https://soylentnews.org/article.pl?sid=25/09/16/0314240&amp;from=rss) - [When It Comes to US AI Rules, There&apos;s Too Many Cooks](https://soylentnews.org/article.pl?sid=25/09/16/0314240&amp;from=rss)
* [2025-09-16, 23:33:02](https://lobste.rs/s/limhxl/claude_can_sometimes_prove_it) - [Claude Can (Sometimes) Prove It](https://www.galois.com/articles/claude-can-sometimes-prove-it)
* [2025-09-16, 23:20:00](https://news.slashdot.org/story/25/09/16/2032219/microsoft-announces-30-billion-investment-in-ai-infrastructure-operations-in-uk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Announces $30 Billion Investment In AI Infrastructure, Operations In UK](https://news.slashdot.org/story/25/09/16/2032219/microsoft-announces-30-billion-investment-in-ai-infrastructure-operations-in-uk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-16, 22:40:00](https://tech.slashdot.org/story/25/09/16/2021253/fedora-linux-43-beta-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fedora Linux 43 Beta Released](https://tech.slashdot.org/story/25/09/16/2021253/fedora-linux-43-beta-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-16, 22:00:00](https://mobile.slashdot.org/story/25/09/16/2012254/taliban-leader-bans-wi-fi-in-an-afghan-province-to-prevent-immorality?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Taliban Leader Bans Wi-Fi In an Afghan Province To &apos;Prevent Immorality&apos;](https://mobile.slashdot.org/story/25/09/16/2012254/taliban-leader-bans-wi-fi-in-an-afghan-province-to-prevent-immorality?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-16, 21:24:23](https://news.ycombinator.com/item?id=45268269) - [Doom crash after 2.5 years of real-world runtime confirmed on real hardware](https://lenowo.org/viewtopic.php?t=31)
* [2025-09-16, 21:20:00](https://tech.slashdot.org/story/25/09/16/206245/consumer-reports-asks-microsoft-to-keep-supporting-windows-10?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Consumer Reports Asks Microsoft To Keep Supporting Windows 10](https://tech.slashdot.org/story/25/09/16/206245/consumer-reports-asks-microsoft-to-keep-supporting-windows-10?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-16, 20:51:11](https://lobste.rs/s/uwa9dw/rupert_s_snub_cube_other_math_holes) - [Rupert&apos;s Snub Cube and other Math Holes](http://tom7.org/ruperts/)
* [2025-09-16, 20:40:00](https://slashdot.org/story/25/09/16/1959230/another-lawsuit-blames-an-ai-company-of-complicity-in-a-teenagers-suicide?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Another Lawsuit Blames an AI Company of Complicity In a Teenager&apos;s Suicide](https://slashdot.org/story/25/09/16/1959230/another-lawsuit-blames-an-ai-company-of-complicity-in-a-teenagers-suicide?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-16, 20:02:00](https://tech.slashdot.org/story/25/09/16/1950246/verizon-to-offer-20-broadband-in-california-to-obtain-merger-approval?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Verizon To Offer $20 Broadband In California To Obtain Merger Approval](https://tech.slashdot.org/story/25/09/16/1950246/verizon-to-offer-20-broadband-in-california-to-obtain-merger-approval?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-16, 19:45:30](https://lobste.rs/s/sosca5/i_have_divided_partly_uninformed_views_on) - [I have divided (and partly uninformed) views on OpenTelemetry](https://utcc.utoronto.ca/~cks/space/blog/sysadmin/OpenTelemetryDividedViews)
* [2025-09-16, 19:40:34](https://news.ycombinator.com/item?id=45266947) - [In Defense of C++](https://dayvster.com/blog/in-defense-of-cpp/)
* [2025-09-16, 19:33:35](https://news.ycombinator.com/item?id=45266854) - [Should we drain the Everglades?](https://rabbitcavern.substack.com/p/should-we-drain-the-everglades)
* [2025-09-16, 19:27:40](https://news.ycombinator.com/item?id=45266771) - [DataTables CDN Outage – post incident review](https://datatables.net/blog/2025/july-29-outage)
* [2025-09-16, 19:22:00](https://tech.slashdot.org/story/25/09/16/1856253/waymo-gets-green-light-for-airport-service-in-san-francisco?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Waymo Gets Green Light For Airport Service in San Francisco](https://tech.slashdot.org/story/25/09/16/1856253/waymo-gets-green-light-for-airport-service-in-san-francisco?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-16, 18:52:00](https://soylentnews.org/article.pl?sid=25/09/16/035221&amp;from=rss) - [Google Cut Managers by 35%: Inside Pichai’s Layoffs Overhaul](https://soylentnews.org/article.pl?sid=25/09/16/035221&amp;from=rss)
* [2025-09-16, 18:48:48](https://lobste.rs/s/ttwdgn/defense_c) - [In Defense of C++](https://dayvster.com/blog/in-defense-of-cpp/)
* [2025-09-16, 18:47:04](https://news.ycombinator.com/item?id=45266215) - [Meta RayBan AR glasses shows Lumus waveguide structures in leaked video](https://kguttag.com/2025/09/16/meta-rayban-ar-glasses-shows-lumus-waveguide-structures-in-leaked-video/)
* [2025-09-16, 18:41:00](https://tech.slashdot.org/story/25/09/16/1832209/nature-editorial-calls-for-rail-renaissance-as-networks-mark-200-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nature Editorial Calls for Rail Renaissance as Networks Mark 200 Years](https://tech.slashdot.org/story/25/09/16/1832209/nature-editorial-calls-for-rail-renaissance-as-networks-mark-200-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-16, 18:33:21](https://news.ycombinator.com/item?id=45266039) - [How to make the Framework Desktop run even quieter](https://noctua.at/en/how-to-make-the-framework-desktop-run-even-quieter)
* [2025-09-16, 18:12:29](https://news.ycombinator.com/item?id=45265745) - [Denmark close to wiping out cancer-causing HPV strains after vaccine roll-out](https://www.gavi.org/vaccineswork/denmark-close-wiping-out-leading-cancer-causing-hpv-strains-after-vaccine-roll-out)
* [2025-09-16, 18:02:00](https://games.slashdot.org/story/25/09/16/1735225/gearbox-ceo-randy-pitchford-tells-borderlands-4-critics-to-code-your-own-engine-calls-it-a-game-for-premium-gamers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gearbox CEO Randy Pitchford Tells Borderlands 4 Critics To &apos;Code Your Own Engine,&apos; Calls It a Game For &apos;Premium Gamers&apos;](https://games.slashdot.org/story/25/09/16/1735225/gearbox-ceo-randy-pitchford-tells-borderlands-4-critics-to-code-your-own-engine-calls-it-a-game-for-premium-gamers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-16, 17:23:00](https://news.slashdot.org/story/25/09/16/1722223/perceived-importance-of-college-hits-new-low?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Perceived Importance of College Hits New Low](https://news.slashdot.org/story/25/09/16/1722223/perceived-importance-of-college-hits-new-low?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-16, 16:40:00](https://slashdot.org/story/25/09/16/1519202/apollo-explores-sale-of-internet-pioneer-aol?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apollo Explores Sale of Internet Pioneer AOL](https://slashdot.org/story/25/09/16/1519202/apollo-explores-sale-of-internet-pioneer-aol?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-16, 16:38:08](https://news.ycombinator.com/item?id=45264562) - [Waymo has received our pilot permit allowing for commercial operations at SFO](https://waymo.com/blog/#short-all-systems-go-at-sfo-waymo-has-received-our-pilot-permit)
* [2025-09-16, 16:22:40](https://news.ycombinator.com/item?id=45264340) - [Bertrand Russell to Oswald Mosley (1962)](https://lettersofnote.com/2016/02/02/every-ounce-of-my-energy/)
* [2025-09-16, 15:20:00](https://soylentnews.org/breakingnews/article.pl?sid=25/09/16/1516209&amp;from=rss) - [RIP Robert Redford (89)](https://soylentnews.org/breakingnews/article.pl?sid=25/09/16/1516209&amp;from=rss)
* [2025-09-16, 15:17:16](https://lobste.rs/s/cnh1si/java_25) - [Java 25](https://openjdk.org/projects/jdk/25/)
* [2025-09-16, 14:56:04](https://lobste.rs/s/4tlumh/how_implement_outbox_pattern_go_postgres) - [How to implement the Outbox pattern in Go and Postgres](https://medium.com/@pliutau/how-to-implement-the-outbox-pattern-in-go-and-postgres-e9bc2699cbe2)
* [2025-09-16, 14:35:19](https://news.ycombinator.com/item?id=45262835) - [Things you can do with a Software Defined Radio (2024)](https://blinry.org/50-things-with-sdr/)
* [2025-09-16, 14:10:00](https://soylentnews.org/article.pl?sid=25/09/15/1937219&amp;from=rss) - [Real-Time Observation of Magnet Switching in a Single Atom](https://soylentnews.org/article.pl?sid=25/09/15/1937219&amp;from=rss)
* [2025-09-16, 12:42:36](https://lobste.rs/s/etufe3/detailed_review_macos_26_tahoe) - [A detailed review of macOS 26 Tahoe](https://arstechnica.com/gadgets/2025/09/macos-26-tahoe-the-ars-technica-review/)
* [2025-09-16, 12:30:02](https://lobste.rs/s/tbmypi/ctrl_tinycolor_40_npm_packages) - [ctrl/tinycolor and 40+ NPM Packages Compromised](https://www.stepsecurity.io/blog/ctrl-tinycolor-and-40-npm-packages-compromised)
* [2025-09-16, 11:41:32](https://lobste.rs/s/khhbv8/you_want_technology_with_warts) - [You Want Technology With Warts](https://entropicthoughts.com/you-want-technology-with-warts)
* [2025-09-16, 11:22:03](https://news.ycombinator.com/item?id=45260741) - [Shai-Hulud malware attack: Tinycolor and over 40 NPM packages compromised](https://socket.dev/blog/ongoing-supply-chain-attack-targets-crowdstrike-npm-packages)
* [2025-09-16, 10:55:53](https://lobste.rs/s/70n6tf/how_i_use_ai) - [How I Use AI](https://timkellogg.me/blog/2025/09/15/ai-tools)
* [2025-09-16, 10:42:38](https://lobste.rs/s/3pyir2/task_v3_45_released) - [Task v3.45 released](https://github.com/go-task/task/releases/tag/v3.45.3)
* [2025-09-16, 09:37:12](https://lobste.rs/s/otiuw4/swift_6_2_released) - [Swift 6.2 Released](https://www.swift.org/blog/swift-6.2-released/)
* [2025-09-16, 09:24:00](https://soylentnews.org/article.pl?sid=25/09/15/1928240&amp;from=rss) - [Pentagon Begins Deploying New Satellite Network to Link Sensors With Shooters](https://soylentnews.org/article.pl?sid=25/09/15/1928240&amp;from=rss)
* [2025-09-16, 08:24:22](https://news.ycombinator.com/item?id=45259553) - [Top UN legal investigators conclude Israel is guilty of genocide in Gaza](https://www.middleeasteye.net/news/un-concludes-israel-guilty-genocide-gaza)
* [2025-09-16, 06:35:53](https://lobste.rs/s/t5kbvv/dolphin_progress_report_release_2509) - [Dolphin Progress Report: Release 2509](https://dolphin-emu.org/blog/2025/09/16/dolphin-progress-report-release-2509/)
* [2025-09-16, 06:15:22](https://lobste.rs/s/6z2p0h/wanted_spy_on_my_dog_ended_up_spying_on_tp) - [Wanted to spy on my dog, ended up spying on TP-Link](https://kennedn.com/blog/posts/tapo/)
* [2025-09-16, 04:38:00](https://soylentnews.org/article.pl?sid=25/09/15/1921210&amp;from=rss) - [Solar Pacifiers: Influence of the Planets May Subdue Solar Activity](https://soylentnews.org/article.pl?sid=25/09/15/1921210&amp;from=rss)
* [2025-09-16, 00:30:13](https://lobste.rs/s/uaz1d9/godot_4_5_release) - [Godot 4.5 release](https://godotengine.org/releases/4.5/)
* [2025-09-15, 23:54:00](https://soylentnews.org/article.pl?sid=25/09/15/1215255&amp;from=rss) - [New Apple-Funded Program Teaches Manufacturing to US Firms](https://soylentnews.org/article.pl?sid=25/09/15/1215255&amp;from=rss)
* [2025-09-15, 19:12:00](https://soylentnews.org/article.pl?sid=25/09/15/1213242&amp;from=rss) - [New Nuclear Rocket Concept Could Slash Mars Travel Time in Half](https://soylentnews.org/article.pl?sid=25/09/15/1213242&amp;from=rss)
* [2025-09-15, 19:00:09](https://lobste.rs/s/hdoo8z/why_is_name_microsoft_wireless_notebook) - [Why is the name of the Microsoft Wireless Notebook Presenter Mouse 8000 hard-coded into the Bluetooth drivers?](https://devblogs.microsoft.com/oldnewthing/20250915-00/?p=111599)
* [2025-09-15, 18:38:47](https://lobste.rs/s/eb404t/ghostty_1_2_0_release_notes) - [Ghostty 1.2.0 - Release Notes](https://ghostty.org/docs/install/release-notes/1-2-0)
* [2025-09-15, 14:29:00](https://soylentnews.org/article.pl?sid=25/09/14/131209&amp;from=rss) - [Nano11 Compresses Windows 11 Install Footprint to as Little as 2.8GB](https://soylentnews.org/article.pl?sid=25/09/14/131209&amp;from=rss)
* [2025-09-15, 11:46:45](https://news.ycombinator.com/item?id=45248558) - [A dumb introduction to z3](https://asibahi.github.io/thoughts/a-gentle-introduction-to-z3/)
* [2025-09-15, 09:46:00](https://soylentnews.org/article.pl?sid=25/09/14/1247231&amp;from=rss) - [Google is Telling People DOGE Never Existed](https://soylentnews.org/article.pl?sid=25/09/14/1247231&amp;from=rss)
* [2025-09-15, 08:32:15](https://news.ycombinator.com/item?id=45247424) - [Tuberculosis shaped Victorian fashion (2016)](https://www.smithsonianmag.com/science-nature/how-tuberculosis-shaped-victorian-fashion-180959029/)
* [2025-09-15, 08:03:18](https://news.ycombinator.com/item?id=45247259) - [Samsung 870 QVO 4TB SATA SSD-s: how are they doing after 4 years of use?](https://ounapuu.ee/posts/2025/09/15/samsung-870-qvo/)
* [2025-09-15, 05:05:00](https://soylentnews.org/article.pl?sid=25/09/14/0037204&amp;from=rss) - [Renewable Energy has a Cybersecurity Problem](https://soylentnews.org/article.pl?sid=25/09/14/0037204&amp;from=rss)
* [2025-09-15, 01:12:11](https://news.ycombinator.com/item?id=45245050) - [I built my own phone because innovation is sad rn [video]](https://www.youtube.com/watch?v=qy_9w_c2ub0)
* [2025-09-15, 00:19:00](https://soylentnews.org/article.pl?sid=25/09/14/0032249&amp;from=rss) - [Newly Released Video at House UFO Hearing Appears to Show U.S. Missile Striking and Bouncing Off Orb](https://soylentnews.org/article.pl?sid=25/09/14/0032249&amp;from=rss)
* [2025-09-14, 19:39:00](https://soylentnews.org/article.pl?sid=25/09/14/0024209&amp;from=rss) - [Scientists Stunned as Tiny Algae Keep Moving Inside Arctic Ice](https://soylentnews.org/article.pl?sid=25/09/14/0024209&amp;from=rss)
* [2025-09-14, 14:49:00](https://soylentnews.org/article.pl?sid=25/09/13/1842215&amp;from=rss) - [Bronze Age Britons Threw Massive Ragers With Food and Friends From Far Away](https://soylentnews.org/article.pl?sid=25/09/13/1842215&amp;from=rss)
* [2025-09-14, 10:00:00](https://soylentnews.org/article.pl?sid=25/09/13/1342246&amp;from=rss) - [Big Clouds Scramble Over EU Data Act and Data Transfers](https://soylentnews.org/article.pl?sid=25/09/13/1342246&amp;from=rss)
* [2025-09-14, 05:14:00](https://soylentnews.org/article.pl?sid=25/09/13/1330226&amp;from=rss) - [Fingerspitzengefühl](https://soylentnews.org/article.pl?sid=25/09/13/1330226&amp;from=rss)
* [2025-09-14, 00:26:00](https://soylentnews.org/article.pl?sid=25/09/13/135241&amp;from=rss) - [Senator Blasts Microsoft for Making Default Windows Vulnerable to “Kerberoasting”](https://soylentnews.org/article.pl?sid=25/09/13/135241&amp;from=rss)
* [2025-09-13, 21:41:15](https://news.ycombinator.com/item?id=45235566) - [Normal-order syntax-rules and proving the fix-point of call/cc](https://okmij.org/ftp/Scheme/callcc-calc-page.html)
* [2025-09-13, 19:40:00](https://soylentnews.org/article.pl?sid=25/09/13/0018206&amp;from=rss) - [Physicists Made a Time Crystal We Can Actually See](https://soylentnews.org/article.pl?sid=25/09/13/0018206&amp;from=rss)
* [2025-09-13, 15:37:45](https://news.ycombinator.com/item?id=45232940) - [CubeSats are fascinating learning tools for space](https://www.jeffgeerling.com/blog/2025/cubesats-are-fascinating-learning-tools-space)
* [2025-09-13, 14:51:00](https://soylentnews.org/article.pl?sid=25/09/13/003254&amp;from=rss) - [$142 Upgrade Kit and Spare Modules Turn Nvidia RTX 4090 24GB to 48GB AI Card](https://soylentnews.org/article.pl?sid=25/09/13/003254&amp;from=rss)
* [2025-09-13, 14:37:52](https://news.ycombinator.com/item?id=45232426) - [How Container Filesystem Works: Building a Docker-Like Container from Scratch](https://labs.iximiuz.com/tutorials/container-filesystem-from-scratch)
* [2025-09-13, 10:10:00](https://soylentnews.org/article.pl?sid=25/09/11/0338253&amp;from=rss) - [AI&apos;s Free Web Scraping Days May be Over, Thanks to This New Licensing Protocol](https://soylentnews.org/article.pl?sid=25/09/11/0338253&amp;from=rss)
* [2025-09-13, 05:24:00](https://soylentnews.org/article.pl?sid=25/09/11/0325209&amp;from=rss) - [Scientists Urge EU Governments to Reject Chat Control Rules](https://soylentnews.org/article.pl?sid=25/09/11/0325209&amp;from=rss)
* [2025-09-13, 00:42:00](https://soylentnews.org/article.pl?sid=25/09/11/0310226&amp;from=rss) - [ASML Invests €1.3bn in AI Company Mistral](https://soylentnews.org/article.pl?sid=25/09/11/0310226&amp;from=rss)
