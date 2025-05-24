# [News Summary](https://kherrick.github.io/news-summary/)

## Human and AI Interfaces

* [Google's New AI Video Tool Floods Internet With Real-Looking Clips](https://tech.slashdot.org/story/25/05/23/2240214/googles-new-ai-video-tool-floods-internet-with-real-looking-clips?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=44079901))

* [Microsoft Says Its Aurora AI Can Accurately Predict Air Quality, Typhoons](https://news.slashdot.org/story/25/05/23/2023207/microsoft-says-its-aurora-ai-can-accurately-predict-air-quality-typhoons?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=44077850))

* [Kraken Launches Digital Tokens To Offer 24/7 Trading of US Equities](https://news.slashdot.org/story/25/05/23/2135201/kraken-launches-digital-tokens-to-offer-247-trading-of-us-equities?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=44078024))

## Innovations in Technology

* [The GCC compiler backend can now fully bootstrap the Rust compiler](https://old.reddit.com/r/rust/comments/1ktph3c/media_the_gcc_compiler_backend_can_now_fully) ([comments](https://news.ycombinator.com/item?id=44076449))

* [A 10x Faster TypeScript](https://www.youtube.com/watch?v=UJfF3-13aFo) ([comments](https://news.ycombinator.com/item?id=44073867))

* [Announcing TypeScript Native Previews](https://devblogs.microsoft.com/typescript/announcing-typescript-native-previews/) ([comments](https://news.ycombinator.com/item?id=44079303))

## Science and Space

* [Landmark' Evolution Study Shows How Rice Inherits Tolerance To Cold Without DNA Changes](https://science.slashdot.org/story/25/05/23/1313239/landmark-evolution-study-shows-how-rice-inherits-tolerance-to-cold-without-dna-changes?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=44078813))

* [America's Leading Alien Hunters Depend on AI to Speed Their Search](https://science.slashdot.org/story/25/05/23/1310218/americas-leading-alien-hunters-depend-on-ai-to-speed-their-search?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=44076449))

## Societal and Cultural Impact

* [A boy who came back: the near-death, and changed life, of my son Max](https://www.theguardian.com/lifeandstyle/2025/may/24/the-boy-who-came-back-the-near-death-and-changed-life-of-my-son-max) ([comments](https://news.ycombinator.com/item?id=44076449))

* [How to Make a Living as a Writer](https://thewalrus.ca/how-to-make-a-living-as-a-writer/) ([comments](https://news.ycombinator.com/item?id=44078813))

* [TSMC's US Factory Shows the Limits of Reshoring and Tariffs](https://soylentnews.org/article.pl?sid=25/05/23/128247&from=rss) ([comments](https://news.ycombinator.com/item?id=44078024))

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

* [2025-05-24, 09:31:33](https://news.ycombinator.com/item?id=44079901) - [My Epic, 40-Year Dungeons and Dragons Odyssey](https://timharford.com/2024/11/my-epic-40-year-dungeons-dragons-odyssey/)
* [2025-05-24, 08:20:00](https://soylentnews.org/article.pl?sid=25/05/23/1211234&amp;from=rss) - [In Lawsuit Over Teen&apos;s Death, Judge Rejects Arguments That AI Chatbots Have Free Speech Rights](https://soylentnews.org/article.pl?sid=25/05/23/1211234&amp;from=rss)
* [2025-05-24, 07:52:45](https://lobste.rs/s/2v5n2d/kaleidoscopico) - [Kaleidoscopico](https://www.linusakesson.net/scene/kaleidoscopico/index.php)
* [2025-05-24, 07:12:48](https://news.ycombinator.com/item?id=44079331) - [A boy who came back: the near-death, and changed life, of my son Max](https://www.theguardian.com/lifeandstyle/2025/may/24/the-boy-who-came-back-the-near-death-and-changed-life-of-my-son-max)
* [2025-05-24, 07:05:46](https://news.ycombinator.com/item?id=44079303) - [Ask HN: Go deep into AI/LLMs or just use them as tools?](https://news.ycombinator.com/item?id=44079303)
* [2025-05-24, 07:04:22](https://lobste.rs/s/r1co0s/why_i_no_longer_have_old_school_cert_on_my) - [Why I no longer have an old-school cert on my https site](https://rachelbythebay.com/w/2025/05/22/ssl/)
* [2025-05-24, 07:00:00](https://tech.slashdot.org/story/25/05/23/2240214/googles-new-ai-video-tool-floods-internet-with-real-looking-clips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s New AI Video Tool Floods Internet With Real-Looking Clips](https://tech.slashdot.org/story/25/05/23/2240214/googles-new-ai-video-tool-floods-internet-with-real-looking-clips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-24, 06:40:35](https://lobste.rs/s/tvi48r/rqlite_turns_10_observations_from_decade) - [rqlite turns 10: Observations from a decade building Distributed Systems](https://philipotoole.com/rqlite-turns-10-lessons-from-a-decade-of-building-distributed-systems/)
* [2025-05-24, 04:36:31](https://news.ycombinator.com/item?id=44078813) - [How to Make a Living as a Writer](https://thewalrus.ca/how-to-make-a-living-as-a-writer/)
* [2025-05-24, 03:41:29](https://lobste.rs/s/rwxqnr/de_abstraction_conditional_escape) - [De-Abstraction and Conditional Escape Analysis](https://github.com/dotnet/runtime/blob/main/docs/design/coreclr/jit/DeabstractionAndConditionalEscapeAnalysis.md#de-abstraction-and-conditional-escape-analysis)
* [2025-05-24, 03:36:00](https://soylentnews.org/article.pl?sid=25/05/23/128247&amp;from=rss) - [TSMC&apos;s US Factory Shows the Limits of Reshoring and Tariffs](https://soylentnews.org/article.pl?sid=25/05/23/128247&amp;from=rss)
* [2025-05-24, 03:30:00](https://news.slashdot.org/story/25/05/23/2023207/microsoft-says-its-aurora-ai-can-accurately-predict-air-quality-typhoons?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Says Its Aurora AI Can Accurately Predict Air Quality, Typhoons](https://news.slashdot.org/story/25/05/23/2023207/microsoft-says-its-aurora-ai-can-accurately-predict-air-quality-typhoons?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-24, 03:00:53](https://news.ycombinator.com/item?id=44078434) - [Why Algebraic Effects?](https://antelang.org/blog/why_effects/)
* [2025-05-24, 02:30:08](https://news.ycombinator.com/item?id=44078314) - [Show HN: SweepIQ – A simple AI tool to help you learn more, faster](https://www.sweepiq.com)
* [2025-05-24, 01:26:23](https://news.ycombinator.com/item?id=44078100) - [Show HN: Web Apps for Python Devs with Auto-Generated UI](https://davia.ai/)
* [2025-05-24, 01:07:08](https://news.ycombinator.com/item?id=44078024) - [Show HN: HNRelevant – Add a \&quot;related\&quot; section to Hacker News](https://github.com/imdj/HNRelevant)
* [2025-05-24, 00:45:00](https://hardware.slashdot.org/story/25/05/23/2156217/us-solar-keeps-surging-generating-more-power-than-hydro-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Solar Keeps Surging, Generating More Power Than Hydro In 2025](https://hardware.slashdot.org/story/25/05/23/2156217/us-solar-keeps-surging-generating-more-power-than-hydro-in-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-24, 00:29:28](https://news.ycombinator.com/item?id=44077850) - [Modification of acetaminophen to reduce liver toxicity and enhance drug efficacy](https://www.societyforscience.org/regeneron-sts/2025-student-finalists/chloe-lee/)
* [2025-05-24, 00:13:36](https://lobste.rs/s/lzbbkl/reverse_engineering_ios_shortcuts) - [Reverse Engineering iOS Shortcuts Deeplinks](https://blog.alexbeals.com/posts/reverse-engineering-ios-deeplinking-for-shortcuts)
* [2025-05-24, 00:02:00](https://news.slashdot.org/story/25/05/23/2135201/kraken-launches-digital-tokens-to-offer-247-trading-of-us-equities?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Kraken Launches Digital Tokens To Offer 24/7 Trading of US Equities](https://news.slashdot.org/story/25/05/23/2135201/kraken-launches-digital-tokens-to-offer-247-trading-of-us-equities?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-23, 23:28:11](https://news.ycombinator.com/item?id=44077533) - [Root for your friends](https://josephthacker.com/personal/2025/05/13/root-for-your-friends.html)
* [2025-05-23, 23:20:00](https://hardware.slashdot.org/story/25/05/23/2110200/trump-launches-reform-of-nuclear-industry-slashes-regulation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Launches Reform of Nuclear Industry, Slashes Regulation](https://hardware.slashdot.org/story/25/05/23/2110200/trump-launches-reform-of-nuclear-industry-slashes-regulation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-23, 22:58:20](https://lobste.rs/s/4gksax/forgotten_apl_influences_2016) - [Forgotten APL Influences (2016)](https://pok.acm.org/meetings/foils/McGrew18paper.pdf)
* [2025-05-23, 22:49:00](https://soylentnews.org/article.pl?sid=25/05/23/1158226&amp;from=rss) - [High Priority Exploits Fixed in Firefox and Chrome](https://soylentnews.org/article.pl?sid=25/05/23/1158226&amp;from=rss)
* [2025-05-23, 22:40:00](https://mobile.slashdot.org/story/25/05/23/2028229/lidar-can-permanently-damage-your-phones-camera?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lidar Can Permanently Damage Your Phone&apos;s Camera](https://mobile.slashdot.org/story/25/05/23/2028229/lidar-can-permanently-damage-your-phones-camera?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-23, 22:00:00](https://developers.slashdot.org/story/25/05/23/2018217/java-turns-30?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Java Turns 30](https://developers.slashdot.org/story/25/05/23/2018217/java-turns-30?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-23, 21:54:50](https://lobste.rs/s/eo8eww/gcc_compiler_backend_can_now_fully) - [The GCC compiler backend can now fully bootstrap the Rust compiler](https://old.reddit.com/r/rust/comments/1ktph3c/media_the_gcc_compiler_backend_can_now_fully)
* [2025-05-23, 21:20:00](https://tech.slashdot.org/story/25/05/23/209232/googles-ai-mode-is-the-definition-of-theft-publishers-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s AI Mode Is &apos;the Definition of Theft,&apos; Publishers Say](https://tech.slashdot.org/story/25/05/23/209232/googles-ai-mode-is-the-definition-of-theft-publishers-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-23, 20:51:29](https://news.ycombinator.com/item?id=44076501) - [The world of Japan&apos;s PC-98 computer](https://strangecomforts.com/the-strange-world-of-japans-pc-98-computer/)
* [2025-05-23, 20:46:04](https://news.ycombinator.com/item?id=44076449) - [Show HN: I built a more productive way to manage AI chats](https://contextch.at)
* [2025-05-23, 20:40:00](https://news.slashdot.org/story/25/05/23/201256/college-board-keeps-apologizing-for-screwing-up-digital-sat-and-ap-tests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [College Board Keeps Apologizing For Screwing Up Digital SAT and AP Tests](https://news.slashdot.org/story/25/05/23/201256/college-board-keeps-apologizing-for-screwing-up-digital-sat-and-ap-tests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-23, 20:22:09](https://news.ycombinator.com/item?id=44076300) - [UndoDB – The interactive time travel debugger for Linux C/C++ for debugging](https://undo.io/)
* [2025-05-23, 20:14:00](https://lobste.rs/s/l7hobk/indexing_hackage_glean_vs_hiedb) - [Indexing Hackage: Glean vs. hiedb](https://simonmar.github.io/posts/2025-05-22-Glean-Haskell.html)
* [2025-05-23, 20:09:01](https://news.ycombinator.com/item?id=44076170) - [A Formal Proof of Complexity Bounds on Diophantine Equations](https://arxiv.org/abs/2505.16963)
* [2025-05-23, 20:01:00](https://hardware.slashdot.org/story/25/05/23/1955245/spanish-grid-operator-faults-big-power-plants-in-blackout-blame-game?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Spanish Grid Operator Faults Big Power Plants in Blackout Blame Game](https://hardware.slashdot.org/story/25/05/23/1955245/spanish-grid-operator-faults-big-power-plants-in-blackout-blame-game?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-23, 19:47:49](https://lobste.rs/s/unlqyd/nixos_25_05_released) - [NixOS 25.05 released](https://nixos.org/blog/announcements/2025/nixos-2505/)
* [2025-05-23, 19:40:03](https://news.ycombinator.com/item?id=44075911) - [Show HN: Genetic Boids Web Simulation](https://attentionmech.github.io/genetic-boids/)
* [2025-05-23, 19:20:00](https://news.slashdot.org/story/25/05/23/1912252/only-one-country-in-the-world-produces-all-the-food-it-needs-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Only One Country in the World Produces All the Food It Needs, Study Finds](https://news.slashdot.org/story/25/05/23/1912252/only-one-country-in-the-world-produces-all-the-food-it-needs-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-23, 19:13:55](https://lobste.rs/s/esdjob/10x_faster_typescript) - [A 10x Faster TypeScript](https://www.youtube.com/watch?v=UJfF3-13aFo)
* [2025-05-23, 19:04:33](https://lobste.rs/s/fgvbsc/why_algebraic_effects) - [Why Algebraic Effects?](https://antelang.org/blog/why_effects/)
* [2025-05-23, 18:55:28](https://news.ycombinator.com/item?id=44075451) - [Show HN: DoubleMemory – more efficient local-first read-it-later app](https://doublememory.com)
* [2025-05-23, 18:45:54](https://lobste.rs/s/zvmf7v/emacs_dired_mode_as_file_manager) - [Emacs dired-mode as a file manager](https://lynn.sh/guix-emacs-file-manager.html)
* [2025-05-23, 18:42:00](https://news.slashdot.org/story/25/05/23/1829251/authors-are-accidentally-leaving-ai-prompts-in-their-novels?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Authors Are Accidentally Leaving AI Prompts In their Novels](https://news.slashdot.org/story/25/05/23/1829251/authors-are-accidentally-leaving-ai-prompts-in-their-novels?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-23, 18:14:57](https://lobste.rs/s/b56ikw/configuring_jujutsu) - [Configuring Jujutsu](https://oppi.li/posts/configuring_jujutsu/)
* [2025-05-23, 18:00:00](https://science.slashdot.org/story/25/05/23/1313239/landmark-evolution-study-shows-how-rice-inherits-tolerance-to-cold-without-dna-changes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Landmark&apos; Evolution Study Shows How Rice Inherits Tolerance To Cold Without DNA Changes](https://science.slashdot.org/story/25/05/23/1313239/landmark-evolution-study-shows-how-rice-inherits-tolerance-to-cold-without-dna-changes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-23, 18:00:00](https://soylentnews.org/article.pl?sid=25/05/22/2134201&amp;from=rss) - [A Nasa Mars Rover Looked Up At A Moody Sky. What It Saw Wasn&apos;t A Star. ](https://soylentnews.org/article.pl?sid=25/05/22/2134201&amp;from=rss)
* [2025-05-23, 17:20:40](https://news.ycombinator.com/item?id=44074668) - [Positional preferences, order effects, prompt sensitivity undermine AI judgments](https://www.cip.org/blog/llm-judges-are-unreliable)
* [2025-05-23, 17:20:00](https://science.slashdot.org/story/25/05/23/1310218/americas-leading-alien-hunters-depend-on-ai-to-speed-their-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America&apos;s Leading Alien Hunters Depend on AI to Speed Their Search](https://science.slashdot.org/story/25/05/23/1310218/americas-leading-alien-hunters-depend-on-ai-to-speed-their-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-23, 16:40:55](https://news.ycombinator.com/item?id=44074340) - [How to live on $432 a month in America](https://shagbark.substack.com/p/how-to-live-on-432-a-month-in-america)
* [2025-05-23, 16:40:00](https://developers.slashdot.org/story/25/05/23/134214/glitch-is-basically-shutting-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Glitch is Basically Shutting Down](https://developers.slashdot.org/story/25/05/23/134214/glitch-is-basically-shutting-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-23, 16:02:02](https://news.ycombinator.com/item?id=44074017) - [Find Your People](https://foundersatwork.posthaven.com/find-your-people)
* [2025-05-23, 15:43:16](https://news.ycombinator.com/item?id=44073867) - [The metre originated in the French Revolution](https://www.abc.net.au/news/science/2025-05-20/metre-treaty-anniversary-metric-system-measurement-metrology/105302024)
* [2025-05-23, 15:12:44](https://news.ycombinator.com/item?id=44073588) - [Postgres IDE in VS Code](https://techcommunity.microsoft.com/blog/adforpostgresql/announcing-a-new-ide-for-postgresql-in-vs-code-from-microsoft/4414648)
* [2025-05-23, 14:30:58](https://lobste.rs/s/y94ihs/making_postgres_distributed_with) - [Making Postgres distributed with FoundationDB](https://fabianlindfors.se/blog/making-postgres-distributed/)
* [2025-05-23, 14:30:21](https://lobste.rs/s/faowua/spaced_repetition_systems_have_gotten) - [Spaced Repetition Systems Have Gotten Way Better](https://domenic.me/fsrs/)
* [2025-05-23, 14:29:16](https://lobste.rs/s/jzntk8/shell_its_problems_handling_whitespace) - [The shell and its problems in handling of whitespace (2023)](https://blog.plover.com/Unix/whitespace.html)
* [2025-05-23, 14:22:53](https://news.ycombinator.com/item?id=44073185) - [Caesar&apos;s Last Breath](https://charliesabino.com/caesars-last-breath/)
* [2025-05-23, 14:22:48](https://news.ycombinator.com/item?id=44073181) - [A Bead Too Far: Rethinking Global Connections Before Columbus](https://peterfrankopan.substack.com/p/a-bead-too-far-rethinking-global)
* [2025-05-23, 14:04:03](https://lobste.rs/s/gdmtsf/collaborative_text_editing_without) - [Collaborative Text Editing without CRDTs or OT](https://mattweidner.com/2025/05/21/text-without-crdts.html)
* [2025-05-23, 13:55:13](https://lobste.rs/s/njfzwx/future_flatpak) - [The future of Flatpak](https://lwn.net/Articles/1020571/)
* [2025-05-23, 13:50:04](https://lobste.rs/s/yejbvc/those_stealthy_botnets) - [Those Stealthy Botnets](https://jan.wildeboer.net/2025/02/Blocking-Stealthy-Botnets/)
* [2025-05-23, 13:39:51](https://lobste.rs/s/6ajfsx/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/6ajfsx/what_are_you_doing_this_weekend)
* [2025-05-23, 13:17:00](https://soylentnews.org/article.pl?sid=25/05/22/1844251&amp;from=rss) - [The US Has a New Most-Powerful Laser](https://soylentnews.org/article.pl?sid=25/05/22/1844251&amp;from=rss)
* [2025-05-23, 11:31:18](https://lobste.rs/s/stplv5/announcing_typescript_native_previews) - [Announcing TypeScript Native Previews](https://devblogs.microsoft.com/typescript/announcing-typescript-native-previews/)
* [2025-05-23, 11:19:22](https://lobste.rs/s/k7rtlf/copilot_delusion) - [The Copilot Delusion](https://deplet.ing/the-copilot-delusion/)
* [2025-05-23, 10:56:12](https://news.ycombinator.com/item?id=44071690) - [Why I no longer have an old-school cert on my HTTPS site](https://rachelbythebay.com/w/2025/05/22/ssl/)
* [2025-05-23, 10:32:09](https://lobste.rs/s/gnc6gv/freebsd_status_report_2025q1) - [FreeBSD Status Report 2025Q1](https://www.freebsd.org/status/report-2025-01-2025-03/)
* [2025-05-23, 08:32:00](https://soylentnews.org/article.pl?sid=25/05/22/1217221&amp;from=rss) - [Police Secretly Monitored New Orleans With Facial Recognition Cameras](https://soylentnews.org/article.pl?sid=25/05/22/1217221&amp;from=rss)
* [2025-05-23, 03:45:00](https://soylentnews.org/article.pl?sid=25/05/21/2216220&amp;from=rss) - [UK Farmers Pray For Rain Amid Driest Spring Since 1852](https://soylentnews.org/article.pl?sid=25/05/21/2216220&amp;from=rss)
* [2025-05-22, 23:06:00](https://soylentnews.org/article.pl?sid=25/05/22/012214&amp;from=rss) - [A Look at OpenAI From 2019](https://soylentnews.org/article.pl?sid=25/05/22/012214&amp;from=rss)
* [2025-05-22, 18:20:00](https://soylentnews.org/article.pl?sid=25/05/22/0059205&amp;from=rss) - [Bill Tries to End Supersonic Speed Limits in the US Skies](https://soylentnews.org/article.pl?sid=25/05/22/0059205&amp;from=rss)
* [2025-05-22, 13:42:11](https://lobste.rs/s/4xjsp2/future_customer_support_is_lies_i_guess) - [The Future of Customer Support is Lies, I Guess](https://aphyr.com/posts/387-the-future-of-customer-support-is-lies-i-guess)
* [2025-05-22, 13:35:00](https://soylentnews.org/article.pl?sid=25/05/21/1543207&amp;from=rss) - [Chicago Sun-Times Prints Summer Reading List Full of Fake Books](https://soylentnews.org/article.pl?sid=25/05/21/1543207&amp;from=rss)
* [2025-05-22, 11:56:47](https://lobste.rs/s/j3mzif/making_rav1d_video_decoder_1_faster) - [Making the rav1d Video Decoder 1% Faster](https://ohadravid.github.io/posts/2025-05-rav1d-faster/)
* [2025-05-22, 08:42:00](https://soylentnews.org/article.pl?sid=25/05/21/1214206&amp;from=rss) - [Italy Fines Thousands as Crackdown on Pirate IPTV Targets Viewers](https://soylentnews.org/article.pl?sid=25/05/21/1214206&amp;from=rss)
* [2025-05-22, 03:59:00](https://soylentnews.org/article.pl?sid=25/05/21/1210228&amp;from=rss) - [Laser-Powered Fusion Experiment More Than Doubles its Power Output](https://soylentnews.org/article.pl?sid=25/05/21/1210228&amp;from=rss)
* [2025-05-21, 23:11:00](https://soylentnews.org/article.pl?sid=25/05/21/127244&amp;from=rss) - [Opinion: Unending Ransomware Attacks Are a Symptom, Not the Illness](https://soylentnews.org/article.pl?sid=25/05/21/127244&amp;from=rss)
* [2025-05-21, 18:29:00](https://soylentnews.org/article.pl?sid=25/05/21/1154206&amp;from=rss) - [\&quot;Big Surprise\&quot;: Astronomers Find Planet in Perpendicular Orbit Around Pair of Stars](https://soylentnews.org/article.pl?sid=25/05/21/1154206&amp;from=rss)
* [2025-05-21, 14:06:11](https://news.ycombinator.com/item?id=44051602) - [Faulty 120W charger analysis (Anker GAN Prime) [video]](https://www.youtube.com/watch?v=-JV5VGO55-I)
* [2025-05-21, 13:42:00](https://soylentnews.org/article.pl?sid=25/05/20/1143239&amp;from=rss) - [Annual Tech Waste Footprint Per Person is 11.2 Kg](https://soylentnews.org/article.pl?sid=25/05/20/1143239&amp;from=rss)
* [2025-05-21, 10:29:36](https://news.ycombinator.com/item?id=44050009) - [Ask HN: Selling software to company I work for as an employee](https://news.ycombinator.com/item?id=44050009)
* [2025-05-21, 09:26:40](https://news.ycombinator.com/item?id=44049713) - [Jupiter was formerly twice its current size, had a much stronger magnetic field](https://phys.org/news/2025-05-jupiter-current-size-stronger-magnetic.html)
* [2025-05-21, 09:06:46](https://news.ycombinator.com/item?id=44049619) - [Mermaid: Generation of diagrams like flowcharts or sequence diagrams from text](https://github.com/mermaid-js/mermaid)
* [2025-05-21, 08:58:00](https://soylentnews.org/article.pl?sid=25/05/20/1138240&amp;from=rss) - [Apple is Developing Tech So Users Can Control Devices With Only Their Thoughts](https://soylentnews.org/article.pl?sid=25/05/20/1138240&amp;from=rss)
* [2025-05-21, 04:14:00](https://soylentnews.org/article.pl?sid=25/05/20/1136209&amp;from=rss) - [AWS Claims That Britain Needs More Nuclear Power for AI Datacenters](https://soylentnews.org/article.pl?sid=25/05/20/1136209&amp;from=rss)
* [2025-05-20, 23:27:00](https://soylentnews.org/article.pl?sid=25/05/20/1131213&amp;from=rss) - [New Intel CPU Flaws Leak Sensitive Data From Privileged Memory](https://soylentnews.org/article.pl?sid=25/05/20/1131213&amp;from=rss)
* [2025-05-20, 20:30:00](https://soylentnews.org/article.pl?sid=25/05/20/1630257&amp;from=rss) - [UK-To-US English Converter Produced Amazing Mistakes](https://soylentnews.org/article.pl?sid=25/05/20/1630257&amp;from=rss)
* [2025-05-20, 18:45:00](https://soylentnews.org/article.pl?sid=25/05/20/0737207&amp;from=rss) - [Unlocking Voices: AR For Nonverbal Autism](https://soylentnews.org/article.pl?sid=25/05/20/0737207&amp;from=rss)
* [2025-05-20, 15:15:14](https://news.ycombinator.com/item?id=44042557) - [A Comedian Saves a Model Railroad with Purchase of a New Jersey Home](https://www.wsj.com/lifestyle/model-railroad-james-murray-ac709a96)
* [2025-05-20, 14:00:00](https://soylentnews.org/article.pl?sid=25/05/19/1851246&amp;from=rss) - [Regeneron to Buy 23andMe Out of Bankruptcy for $256 Million](https://soylentnews.org/article.pl?sid=25/05/19/1851246&amp;from=rss)
* [2025-05-20, 09:34:15](https://news.ycombinator.com/item?id=44039604) - [Visual Studio Code: Text Buffer Reimplementation (2018)](https://code.visualstudio.com/blogs/2018/03/23/text-buffer-reimplementation)
* [2025-05-20, 09:16:00](https://soylentnews.org/article.pl?sid=25/05/19/0847257&amp;from=rss) - [Space Computing Satellite Constellation Launched into Orbit](https://soylentnews.org/article.pl?sid=25/05/19/0847257&amp;from=rss)
* [2025-05-20, 04:35:00](https://soylentnews.org/article.pl?sid=25/05/19/0231252&amp;from=rss) - [Meta Is Making Users Who Opted Out of AI Training Opt Out Again](https://soylentnews.org/article.pl?sid=25/05/19/0231252&amp;from=rss)
