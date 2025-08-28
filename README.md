# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Innovations and Tools

* [The Koka programming language](https://lwn.net/Articles/1033050/) - Koka is an exciting addition for developers interested in clean, functional programming with an emphasis on effect-tracking. [Comments](https://lobste.rs/s/wh0edi/koka_programming_language)

* [Optimising for maintainability - Gleam in production at Strand](https://gleam.run/case-studies/strand/) - Explore how Strand leverages Gleam to build maintainable and efficient systems. [Comments](https://lobste.rs/s/1b8ize/optimising_for_maintainability_gleam)

* [Mosh (Mobile Shell)](https://mosh.org) - A look at Mosh, a mobile-optimized remote terminal application. [Comments](https://news.ycombinator.com/item?id=45053040)

* [superfly: A compiler for a functional low-level language, targeting tiny computers](https://codeberg.org/Bunny351/superfly) - A compiler designed for functional programming on small devices. [Comments](https://lobste.rs/s/aupout/superfly_compiler_for_functional_low)

* [GPUPrefixSums – state of the art GPU prefix sum algorithms](https://github.com/b0nes164/GPUPrefixSums) - Advanced computational algorithms for GPUs using prefix sums. [Comments](https://news.ycombinator.com/item?id=45051542)

* [How to Install TrueNAS on a Raspberry Pi](https://www.jeffgeerling.com/blog/2025/how-install-truenas-on-raspberry-pi) - A step-by-step guide to installing TrueNAS on small-scale hardware. [Comments](https://news.ycombinator.com/item?id=45052429)

* [Printing labels via SSH with Raspberry Pi Zero and Nix](https://nmattia.com/posts/2025-08-28-label-printer-rpi-nix/) - Useful tutorial for leveraging SSH and Raspberry Pi for label printing. [Comments](https://lobste.rs/s/vb9bex/printing_labels_via_ssh_with_raspberry_pi)

## Environmental and Scientific Developments

* [How the Cavefish Lost its Eyes— Again and Again](https://soylentnews.org/article.pl?sid=25/08/27/1449220&amp;from=rss) - A fascinating study of evolutionary adaptability and recurring traits. [Comments](https://soylentnews.org/article.pl?sid=25/08/27/1449220&amp;from=rss)

* [World's First 1-Step Method Turns Plastic Into Fuel At 95% Efficiency](https://science.slashdot.org/story/25/08/27/2258214/worlds-first-1-step-method-turns-plastic-into-fuel-at-95-efficiency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A groundbreaking process for converting plastic waste into fuel. [Comments](https://science.slashdot.org/story/25/08/27/2258214/worlds-first-1-step-method-turns-plastic-into-fuel-at-95-efficiency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Corporate Impacts and Policies

* [Apple Warns UK Against Introducing Tougher Tech Regulation](https://apple.slashdot.org/story/25/08/28/1149224/apple-warns-uk-against-introducing-tougher-tech-regulation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Apple takes a stand against stricter policies proposed in the UK. [Comments](https://apple.slashdot.org/story/25/08/28/1149224/apple-warns-uk-against-introducing-tougher-tech-regulation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [German Banks Halted 10 Billion Euros in PayPal Payments on Fraud Concerns, Says Newspaper](https://it.slashdot.org/story/25/08/28/0331245/german-banks-halted-10-billion-euros-in-paypal-payments-on-fraud-concerns-says-newspaper?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Massive financial impact due to potential transaction fraud risks. [Comments](https://it.slashdot.org/story/25/08/28/0331245/german-banks-halted-10-billion-euros-in-paypal-payments-on-fraud-concerns-says-newspaper?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Anthropic’s auto-clicking AI Chrome extension raises browser-hijacking concerns](https://arstechnica.com/information-technology/2025/08/new-ai-browser-agents-create-risks-if-sites-hijack-them-with-hidden-instructions/) - Privacy and security implications of AI-enabled browser extensions. [Comments](https://lobste.rs/s/i0lfhx/anthropic_s_auto_clicking_ai_chrome)

## Unusual Mathematical Phenomena

* [Rupert’s property: cut a hole in a polyhedron big enough for an identical copy to slide through](https://johncarlosbaez.wordpress.com/2025/08/28/a-polyhedron-without-ruperts-property/) - Intriguing geometric properties of polyhedrons. [Comments](https://lobste.rs/s/miidtt/rupert_s_property_cut_hole_polyhedron_big)

## Unique Social and Behavioral Studies

* [Reading For Fun Is Plummeting In the US, and Experts Are Concerned](https://news.slashdot.org/story/25/08/27/233214/reading-for-fun-is-plummeting-in-the-us-and-experts-are-concerned?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Trends highlighting the decline in recreational reading. [Comments](https://news.slashdot.org/story/25/08/27/233214/reading-for-fun-is-plummeting-in-the-us-and-experts-are-concerned?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [An Empty Strip and Fewer Tips: is Las Vegas in Trouble?](https://soylentnews.org/article.pl?sid=25/08/27/2323243&amp;from=rss) - Exploring economic and cultural shifts in Las Vegas. [Comments](https://soylentnews.org/article.pl?sid=25/08/27/2323243&amp;from=rss)

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

* [2025-08-28, 15:35:03](https://lobste.rs/s/wh0edi/koka_programming_language) - [The Koka programming language](https://lwn.net/Articles/1033050/)
* [2025-08-28, 15:30:29](https://lobste.rs/s/1b8ize/optimising_for_maintainability_gleam) - [Optimising for maintainability - Gleam in production at Strand](https://gleam.run/case-studies/strand/)
* [2025-08-28, 15:20:00](https://apple.slashdot.org/story/25/08/28/1149224/apple-warns-uk-against-introducing-tougher-tech-regulation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Warns UK Against Introducing Tougher Tech Regulation](https://apple.slashdot.org/story/25/08/28/1149224/apple-warns-uk-against-introducing-tougher-tech-regulation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-28, 14:59:14](https://news.ycombinator.com/item?id=45053040) - [Mosh (Mobile Shell)](https://mosh.org)
* [2025-08-28, 14:50:09](https://lobste.rs/s/lppsch/simple_smalltalk_testing_with_patterns) - [Simple Smalltalk Testing: With Patterns (1994)](https://web.archive.org/web/20150315073817/http://www.xprogramming.com/testfram.htm)
* [2025-08-28, 14:40:00](https://politics.slashdot.org/story/25/08/28/1135244/a-dark-money-group-is-secretly-funding-high-profile-democratic-influencers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Dark Money Group Is Secretly Funding High-Profile Democratic Influencers](https://politics.slashdot.org/story/25/08/28/1135244/a-dark-money-group-is-secretly-funding-high-profile-democratic-influencers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-28, 14:22:00](https://soylentnews.org/article.pl?sid=25/08/27/1449220&amp;from=rss) - [How the Cavefish Lost its Eyes— Again and Again](https://soylentnews.org/article.pl?sid=25/08/27/1449220&amp;from=rss)
* [2025-08-28, 14:15:26](https://lobste.rs/s/aupout/superfly_compiler_for_functional_low) - [superfly: A compiler for a functional low-level language, targeting tiny computers](https://codeberg.org/Bunny351/superfly)
* [2025-08-28, 14:14:17](https://news.ycombinator.com/item?id=45052429) - [How to Install TrueNAS on a Raspberry Pi](https://www.jeffgeerling.com/blog/2025/how-install-truenas-on-raspberry-pi)
* [2025-08-28, 14:12:47](https://lobste.rs/s/ib1oea/i_ll_only_buy_devices_with_grapheneos) - [I&apos;ll only buy devices with GrapheneOS](https://www.jonashietala.se/blog/2025/08/28/ill_only_buy_devices_with_grapheneos/)
* [2025-08-28, 14:00:00](https://apple.slashdot.org/story/25/08/28/1125221/apple-pulls-iphone-torrent-app-from-altstore-pal-in-europe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Pulls iPhone Torrent App From AltStore PAL in Europe](https://apple.slashdot.org/story/25/08/28/1125221/apple-pulls-iphone-torrent-app-from-altstore-pal-in-europe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-28, 13:37:12](https://lobste.rs/s/ib7eky/sometimes_cpu_cores_are_odd) - [Sometimes CPU cores are odd](https://anubis.techaro.lol/blog/2025/cpu-core-odd)
* [2025-08-28, 13:24:18](https://lobste.rs/s/i0lfhx/anthropic_s_auto_clicking_ai_chrome) - [Anthropic’s auto-clicking AI Chrome extension raises browser-hijacking concerns](https://arstechnica.com/information-technology/2025/08/new-ai-browser-agents-create-risks-if-sites-hijack-them-with-hidden-instructions/)
* [2025-08-28, 13:00:00](https://news.slashdot.org/story/25/08/27/233214/reading-for-fun-is-plummeting-in-the-us-and-experts-are-concerned?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Reading For Fun Is Plummeting In the US, and Experts Are Concerned](https://news.slashdot.org/story/25/08/27/233214/reading-for-fun-is-plummeting-in-the-us-and-experts-are-concerned?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-28, 12:49:10](https://news.ycombinator.com/item?id=45051542) - [GPUPrefixSums – state of the art GPU prefix sum algorithms](https://github.com/b0nes164/GPUPrefixSums)
* [2025-08-28, 12:37:01](https://lobste.rs/s/miidtt/rupert_s_property_cut_hole_polyhedron_big) - [Rupert’s property: cut a hole in a polyhedron big enough for an identical copy to slide through](https://johncarlosbaez.wordpress.com/2025/08/28/a-polyhedron-without-ruperts-property/)
* [2025-08-28, 12:32:36](https://lobste.rs/s/wrxf8l/group_borrowing_zero_cost_memory_safety) - [Group Borrowing: Zero-Cost Memory Safety with Fewer Restrictions](https://verdagon.dev/blog/group-borrowing)
* [2025-08-28, 12:19:10](https://lobste.rs/s/luvy7m/guessing_game_haskell_style) - [Guessing game: Haskell style](https://entropicthoughts.com/guessing-game-haskell-style)
* [2025-08-28, 12:13:29](https://lobste.rs/s/hfp00w/gmp_damages_amd_zen_5_cpus) - [GMP damages AMD Zen 5 CPUs](https://gmplib.org/gmp-zen5)
* [2025-08-28, 12:10:14](https://news.ycombinator.com/item?id=45051188) - [Rendering a Game in Real-Time with AI](https://blog.jeffschomay.com/rendering-a-game-in-real-time-with-ai)
* [2025-08-28, 12:00:48](https://news.ycombinator.com/item?id=45051096) - [Prosper AI (YC S23) Is Hiring Founding Account Executives (NYC)](https://jobs.ashbyhq.com/prosper-ai/29684590-4cec-4af2-bb69-eb5c6d595fb8)
* [2025-08-28, 12:00:00](https://it.slashdot.org/story/25/08/28/0331245/german-banks-halted-10-billion-euros-in-paypal-payments-on-fraud-concerns-says-newspaper?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [German Banks Halted 10 Billion Euros in PayPal Payments on Fraud Concerns, Says Newspaper](https://it.slashdot.org/story/25/08/28/0331245/german-banks-halted-10-billion-euros-in-paypal-payments-on-fraud-concerns-says-newspaper?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-28, 11:51:30](https://news.ycombinator.com/item?id=45051034) - [The startup bubble that no one is talking about](https://tj401.com/blog/formd/index.html)
* [2025-08-28, 11:42:35](https://news.ycombinator.com/item?id=45050958) - [GAN Math (2020)](https://jaketae.github.io/study/gan-math/)
* [2025-08-28, 11:38:56](https://lobste.rs/s/ggtdgo/what_interns_have_wrought_2025_edition) - [What the interns have wrought, 2025 edition](https://blog.janestreet.com/wrought-2025/)
* [2025-08-28, 11:38:44](https://news.ycombinator.com/item?id=45050931) - [Important machine learning equations](https://chizkidd.github.io//2025/05/30/machine-learning-key-math-eqns/)
* [2025-08-28, 11:29:42](https://news.ycombinator.com/item?id=45050873) - [Microbial metabolite repairs liver injury by restoring hepatic lipid metabolism](https://journals.asm.org/doi/10.1128/mbio.01718-25)
* [2025-08-28, 11:12:18](https://lobste.rs/s/rd5gpm/are_people_s_bosses_really_making_them_use) - [Are people’s bosses really making them use AI tools?](https://piccalil.li/blog/are-peoples-bosses-really-making-them-use-ai/)
* [2025-08-28, 10:39:08](https://news.ycombinator.com/item?id=45050538) - [Fossjobs: A job board for Free and Open Source jobs](https://www.fossjobs.net/)
* [2025-08-28, 10:15:22](https://news.ycombinator.com/item?id=45050415) - [Are OpenAI and Anthropic Losing Money on Inference?](https://martinalderson.com/posts/are-openai-and-anthropic-really-losing-money-on-inference/)
* [2025-08-28, 10:00:00](https://science.slashdot.org/story/25/08/27/2258214/worlds-first-1-step-method-turns-plastic-into-fuel-at-95-efficiency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [World&apos;s First 1-Step Method Turns Plastic Into Fuel At 95% Efficiency](https://science.slashdot.org/story/25/08/27/2258214/worlds-first-1-step-method-turns-plastic-into-fuel-at-95-efficiency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-28, 09:34:00](https://soylentnews.org/article.pl?sid=25/08/27/2323243&amp;from=rss) - [An Empty Strip and Fewer Tips: is Las Vegas in Trouble?](https://soylentnews.org/article.pl?sid=25/08/27/2323243&amp;from=rss)
* [2025-08-28, 09:31:13](https://news.ycombinator.com/item?id=45050192) - [Windows 11 Update KB5063878 Causing SSD Failures](https://old.reddit.com/r/msp/comments/1n1sgxx/windows_11_update_kb5063878_causing_ssd_failures/)
* [2025-08-28, 09:16:17](https://news.ycombinator.com/item?id=45050090) - [Claude Code Checkpoints](https://claude-checkpoints.com/)
* [2025-08-28, 08:32:01](https://lobste.rs/s/i1jlzk/desktop_metaphor_must_be_restored_it_s) - [The desktop metaphor must be restored. It’s under attack! (2020)](https://medium.com/@probonopd/the-desktop-metaphor-must-be-restored-its-under-attack-6fcd8fa45cc)
* [2025-08-28, 08:25:11](https://lobste.rs/s/vb9bex/printing_labels_via_ssh_with_raspberry_pi) - [Printing labels via SSH with Raspberry Pi Zero and Nix](https://nmattia.com/posts/2025-08-28-label-printer-rpi-nix/)
* [2025-08-28, 07:51:44](https://lobste.rs/s/pejee5/basics_anchor_positioning) - [The Basics of Anchor Positioning](https://ishadeed.com/article/anchor-positioning/)
* [2025-08-28, 07:00:00](https://hardware.slashdot.org/story/25/08/27/2241254/japan-launches-its-first-homegrown-quantum-computer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japan Launches its First Homegrown Quantum Computer](https://hardware.slashdot.org/story/25/08/27/2241254/japan-launches-its-first-homegrown-quantum-computer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-28, 06:09:54](https://lobste.rs/s/dgpbar/open_source_is_one_person) - [Open Source is one person](https://opensourcesecurity.io/2025/08-oss-one-person/)
* [2025-08-28, 05:39:22](https://lobste.rs/s/hzyrkt/update_about_hidden_performa_550) - [An update about the hidden Performa 550 recovery partition](https://www.downtowndougbrown.com/2025/08/an-update-about-the-hidden-performa-550-recovery-partition/)
* [2025-08-28, 05:30:23](https://news.ycombinator.com/item?id=45048736) - [Lesser known mobile adtech domains where data is sent](https://jamesoclaire.com/2025/08/28/uncovering-lesser-known-mobile-adtech-domains/)
* [2025-08-28, 04:52:00](https://soylentnews.org/article.pl?sid=25/08/27/1232257&amp;from=rss) - [Science Marches on](https://soylentnews.org/article.pl?sid=25/08/27/1232257&amp;from=rss)
* [2025-08-28, 04:37:12](https://news.ycombinator.com/item?id=45048419) - [The Deletion of Docker.io/Bitnami](https://community.broadcom.com/tanzu/blogs/beltran-rueda-borrego/2025/08/18/how-to-prepare-for-the-bitnami-changes-coming-soon)
* [2025-08-28, 03:30:00](https://science.slashdot.org/story/25/08/27/2153208/with-starship-flight-10-spacex-prioritized-resilience-over-perfection?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [With Starship Flight 10, SpaceX Prioritized Resilience Over Perfection](https://science.slashdot.org/story/25/08/27/2153208/with-starship-flight-10-spacex-prioritized-resilience-over-perfection?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-28, 03:05:42](https://news.ycombinator.com/item?id=45047897) - [Certificates for Onion Services](https://onionservices.torproject.org/research/proposals/usability/certificates/)
* [2025-08-28, 03:01:30](https://lobste.rs/s/9ir5gz/rust_for_everyone) - [Rust for Everyone](https://www.youtube.com/watch?v=R0dP-QR5wQo)
* [2025-08-28, 02:12:23](https://news.ycombinator.com/item?id=45047572) - [Bookmarks.txt is a concept of keeping URLs in plain text files](https://github.com/soulim/bookmarks.txt)
* [2025-08-28, 01:54:59](https://news.ycombinator.com/item?id=45047460) - [Open Source is one person](https://opensourcesecurity.io/2025/08-oss-one-person/)
* [2025-08-28, 00:22:24](https://news.ycombinator.com/item?id=45046916) - [Altered states of consciousness induced by breathwork accompanied by music](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0329411)
* [2025-08-28, 00:04:00](https://soylentnews.org/article.pl?sid=25/08/27/1225221&amp;from=rss) - [Xz Format Inadequate for General Use](https://soylentnews.org/article.pl?sid=25/08/27/1225221&amp;from=rss)
* [2025-08-28, 00:02:00](https://tech.slashdot.org/story/25/08/27/2131210/developer-unlocks-newly-enshittified-echelon-exercise-bikes-but-cant-legally-release-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Developer Unlocks Newly Enshittified Echelon Exercise Bikes But Can&apos;t Legally Release Software](https://tech.slashdot.org/story/25/08/27/2131210/developer-unlocks-newly-enshittified-echelon-exercise-bikes-but-cant-legally-release-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-27, 23:20:00](https://it.slashdot.org/story/25/08/27/2143210/silver-state-goes-dark-as-cyberattack-knocks-nevada-websites-offline?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Silver State Goes Dark as Cyberattack Knocks Nevada Websites Offline](https://it.slashdot.org/story/25/08/27/2143210/silver-state-goes-dark-as-cyberattack-knocks-nevada-websites-offline?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-27, 22:40:00](https://tech.slashdot.org/story/25/08/27/2026245/defense-department-reportedly-relies-on-utility-written-by-russian-dev?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Defense Department Reportedly Relies On Utility Written by Russian Dev](https://tech.slashdot.org/story/25/08/27/2026245/defense-department-reportedly-relies-on-utility-written-by-russian-dev?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-27, 22:00:00](https://yro.slashdot.org/story/25/08/27/205230/4chan-and-kiwi-farms-sue-the-uk-over-its-age-verification-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [4chan and Kiwi Farms Sue the UK Over Its Age Verification Law](https://yro.slashdot.org/story/25/08/27/205230/4chan-and-kiwi-farms-sue-the-uk-over-its-age-verification-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-27, 21:20:00](https://slashdot.org/story/25/08/27/1955256/word-documents-will-now-be-saved-to-the-cloud-automatically-on-windows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Word Documents Will Now Be Saved To the Cloud Automatically On Windows](https://slashdot.org/story/25/08/27/1955256/word-documents-will-now-be-saved-to-the-cloud-automatically-on-windows?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-27, 21:08:49](https://news.ycombinator.com/item?id=45045307) - [Yamanot.es: A music box of train station melodies from the JR Yamanote Line](https://yamanot.es/)
* [2025-08-27, 20:42:00](https://tech.slashdot.org/story/25/08/27/1955230/google-has-eliminated-35-of-managers-overseeing-small-teams-in-past-year-exec-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Has Eliminated 35% of Managers Overseeing Small Teams in Past Year, Exec Says](https://tech.slashdot.org/story/25/08/27/1955230/google-has-eliminated-35-of-managers-overseeing-small-teams-in-past-year-exec-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-27, 20:20:19](https://lobste.rs/s/ulhomf/vulnerability_might_be_proof_concept) - [The vulnerability might be in the proof-of-concept](https://sethmlarson.dev/the-vulnerability-is-in-the-proof-of-concept)
* [2025-08-27, 20:02:00](https://politics.slashdot.org/story/25/08/27/1938243/a-proposal-to-ban-ghost-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Proposal to Ban Ghost Jobs](https://politics.slashdot.org/story/25/08/27/1938243/a-proposal-to-ban-ghost-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-27, 19:22:00](https://soylentnews.org/article.pl?sid=25/08/27/1222255&amp;from=rss) - [Google Will Require Developer Verification to Install Android Apps, Including Sideloading](https://soylentnews.org/article.pl?sid=25/08/27/1222255&amp;from=rss)
* [2025-08-27, 17:14:58](https://lobste.rs/s/fz3mgu/unexpected_productivity_boost_rust) - [The unexpected productivity boost of Rust](https://lubeno.dev/blog/rusts-productivity-curve)
* [2025-08-27, 15:50:54](https://news.ycombinator.com/item?id=45041315) - [VIM Master](https://github.com/renzorlive/vimmaster)
* [2025-08-27, 15:48:07](https://news.ycombinator.com/item?id=45041286) - [Unexpected productivity boost of Rust](https://lubeno.dev/blog/rusts-productivity-curve)
* [2025-08-27, 15:39:33](https://news.ycombinator.com/item?id=45041185) - [Launch HN: Bitrig (YC S25) – Build Swift apps on your iPhone](https://news.ycombinator.com/item?id=45041185)
* [2025-08-27, 14:57:54](https://lobste.rs/s/e22pos/inside_zig_s_new_writer) - [Inside Zig&apos;s New Writer](https://joegm.github.io/blog/inside-zigs-new-writer-interface/)
* [2025-08-27, 14:34:00](https://soylentnews.org/article.pl?sid=25/08/26/1126243&amp;from=rss) - [Postal Services Around the World Suspend Deliveries to US: How Will It Affect You?](https://soylentnews.org/article.pl?sid=25/08/26/1126243&amp;from=rss)
* [2025-08-27, 13:23:58](https://lobste.rs/s/imehlk/malicious_versions_nx_some_supporting) - [Malicious versions of Nx and some supporting plugins were published](https://github.com/nrwl/nx/security/advisories/GHSA-cxm3-wv7p-598c)
* [2025-08-27, 09:48:00](https://soylentnews.org/article.pl?sid=25/08/26/1117241&amp;from=rss) - [Scientists Pioneer Sustainable Carbon Capture From Shrimp Waste](https://soylentnews.org/article.pl?sid=25/08/26/1117241&amp;from=rss)
* [2025-08-27, 05:03:00](https://soylentnews.org/politics/article.pl?sid=25/08/26/1113220&amp;from=rss) - [Trump Threatens Taxes, Bans, for Nations That Tax Big Tech](https://soylentnews.org/politics/article.pl?sid=25/08/26/1113220&amp;from=rss)
* [2025-08-27, 02:47:19](https://lobste.rs/s/31d67l/dissecting_apple_m1_gpu_end) - [Dissecting the Apple M1 GPU, the end](https://rosenzweig.io/blog/asahi-gpu-part-n.html)
* [2025-08-27, 01:38:48](https://news.ycombinator.com/item?id=45034496) - [Malicious versions of Nx and some supporting plugins were published](https://github.com/nrwl/nx/security/advisories/GHSA-cxm3-wv7p-598c)
* [2025-08-27, 00:16:00](https://soylentnews.org/article.pl?sid=25/08/26/0059245&amp;from=rss) - [Twenty Years After Katrina: How Levee Failures Changed America](https://soylentnews.org/article.pl?sid=25/08/26/0059245&amp;from=rss)
* [2025-08-26, 23:38:16](https://lobste.rs/s/na4vsd/so_many_conferences_are_mid_why_was_bsc) - [So many conferences are mid. Why was BSC 2025 so good?](https://bgthompson.codeberg.page/blog/thoughts-on-BSC-2025/)
* [2025-08-26, 19:33:00](https://soylentnews.org/article.pl?sid=25/08/26/0056205&amp;from=rss) - [Kelp Forests in Marine Protected Areas are More Resilient to Marine Heatwaves](https://soylentnews.org/article.pl?sid=25/08/26/0056205&amp;from=rss)
* [2025-08-26, 14:49:00](https://soylentnews.org/article.pl?sid=25/08/26/0050212&amp;from=rss) - [Canadian EV Sales Collapse by 35% as Gas Car Purchases Surge](https://soylentnews.org/article.pl?sid=25/08/26/0050212&amp;from=rss)
* [2025-08-26, 10:02:00](https://soylentnews.org/article.pl?sid=25/08/25/197208&amp;from=rss) - [Does 3I/ATLAS Generate its Own Light?](https://soylentnews.org/article.pl?sid=25/08/25/197208&amp;from=rss)
* [2025-08-26, 05:16:00](https://soylentnews.org/article.pl?sid=25/08/25/1248228&amp;from=rss) - [Revolutionary AI Tech Breathes Life Into Virtual Companion Animals](https://soylentnews.org/article.pl?sid=25/08/25/1248228&amp;from=rss)
* [2025-08-26, 00:31:00](https://soylentnews.org/article.pl?sid=25/08/25/1234216&amp;from=rss) - [Oops! Earendel, Most Distant Star Ever Discovered, May Not Actually be a Star](https://soylentnews.org/article.pl?sid=25/08/25/1234216&amp;from=rss)
* [2025-08-25, 20:54:42](https://news.ycombinator.com/item?id=45018869) - [Like Intel before it, AMD blames motherboard makers for burnt-out CPUs](https://arstechnica.com/gadgets/2025/08/like-intel-before-it-amd-blames-motherboard-makers-for-burnt-out-cpus/)
* [2025-08-25, 19:45:00](https://soylentnews.org/article.pl?sid=25/08/25/0225208&amp;from=rss) - [The 8,000-Year History of Great Salt Lake and its Watershed is Recorded in Sediments](https://soylentnews.org/article.pl?sid=25/08/25/0225208&amp;from=rss)
* [2025-08-25, 15:48:08](https://news.ycombinator.com/item?id=45015156) - [Birth of 86-DOS – By Nemanja Trifunovic](https://nemanjatrifunovic.substack.com/p/birth-of-86-dos)
* [2025-08-25, 14:59:00](https://soylentnews.org/article.pl?sid=25/08/24/2253216&amp;from=rss) - [What Happens When AI Comes for Our Fonts?](https://soylentnews.org/article.pl?sid=25/08/24/2253216&amp;from=rss)
* [2025-08-25, 10:35:24](https://news.ycombinator.com/item?id=45012376) - [iOS Elegantbouncer: When You Can&apos;t Get Samples but Still Need to Catch Threats](https://www.msuiche.com/posts/elegantbouncer-when-you-cant-get-the-samples-but-still-need-to-catch-the-threat/)
* [2025-08-25, 10:15:00](https://soylentnews.org/article.pl?sid=25/08/24/136245&amp;from=rss) - [NASA Challenge Winners Cook Up New Industry Developments](https://soylentnews.org/article.pl?sid=25/08/24/136245&amp;from=rss)
* [2025-08-25, 05:30:00](https://soylentnews.org/article.pl?sid=25/08/24/1253242&amp;from=rss) - [Radio Waves Can Strengthen Sense of Smell](https://soylentnews.org/article.pl?sid=25/08/24/1253242&amp;from=rss)
* [2025-08-25, 05:08:22](https://news.ycombinator.com/item?id=45010406) - [A Fast Bytecode VM for Arithmetic: The Compiler](https://abhinavsarkar.net/posts/arithmetic-bytecode-vm-compiler/)
* [2025-08-25, 00:50:00](https://soylentnews.org/article.pl?sid=25/08/23/2218218&amp;from=rss) - [Creative Commons Becomes an Official UNESCO NGO Partner](https://soylentnews.org/article.pl?sid=25/08/23/2218218&amp;from=rss)
* [2025-08-24, 22:35:23](https://news.ycombinator.com/item?id=45008434) - [Nvidia DGX Spark](https://www.nvidia.com/en-us/products/workstations/dgx-spark/)
* [2025-08-24, 20:03:00](https://soylentnews.org/article.pl?sid=25/08/23/2216200&amp;from=rss) - [U.S. Government Now Holds 10% Stake in Intel](https://soylentnews.org/article.pl?sid=25/08/23/2216200&amp;from=rss)
* [2025-08-24, 15:18:00](https://soylentnews.org/article.pl?sid=25/08/23/1053236&amp;from=rss) - [‘Quiet Cracking’ is Spreading in Offices: Half of Workers are at Breaking Point](https://soylentnews.org/article.pl?sid=25/08/23/1053236&amp;from=rss)
* [2025-08-24, 10:36:00](https://soylentnews.org/article.pl?sid=25/08/22/079224&amp;from=rss) - [Turning the Lights Back on](https://soylentnews.org/article.pl?sid=25/08/22/079224&amp;from=rss)
* [2025-08-24, 05:52:00](https://soylentnews.org/article.pl?sid=25/08/22/073206&amp;from=rss) - [Scientists Develop Interface That ‘Reads’ Thoughts From Speech-Impaired Patients](https://soylentnews.org/article.pl?sid=25/08/22/073206&amp;from=rss)
* [2025-08-24, 01:12:00](https://soylentnews.org/article.pl?sid=25/08/22/0656227&amp;from=rss) - [AWS CEO Says Using AI to Replace Junior Staff is &apos;Dumbest Thing I&apos;ve Ever Heard&apos;](https://soylentnews.org/article.pl?sid=25/08/22/0656227&amp;from=rss)
