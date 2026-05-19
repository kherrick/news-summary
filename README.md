# [News Summary](https://kherrick.github.io/news-summary/)

## Economic Disruptions and Organizational Changes

* [StanChart To Cut Over 7,000 Jobs, Boost AI To Replace 'Lower-Value Human Capital'](https://slashdot.org/story/26/05/19/1640224/stanchart-to-cut-over-7000-jobs-boost-ai-to-replace-lower-value-human-capital?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The banking giant plans to heavily lean on artificial intelligence to increase efficiency, leading to significant job cuts.

* [Before Mass Layoffs, Meta Reassigns 7,000 Workers To Focus On AI](https://meta.slashdot.org/story/26/05/19/0027253/before-mass-layoffs-meta-reassigns-7000-workers-to-focus-on-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Meta sees a major organizational shift as it reallocates thousands of employees to work on AI projects.

* [Meta Layoffs Stress Harsh AI Reality Inside Zuckerberg's Company](https://tech.slashdot.org/story/26/05/18/179232/meta-layoffs-stress-harsh-ai-reality-inside-zuckerbergs-company?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Meta's job cuts highlight challenges and shifts in focus towards artificial intelligence within the company.

## Advances and Controversies in AI

* [A new era for AI Search](https://blog.google/products-and-platforms/products/search/search-io-2026/) - Google unveils developments that promise to reshape the landscape of AI-powered search engines.

* [Gemini Omni](https://deepmind.google/models/gemini-omni/) - DeepMind introduces a comprehensive AI model showcasing improvements in multi-domain intelligence.

* [Apple unveils new accessibility features](https://www.apple.com/newsroom/2026/05/apple-unveils-new-accessibility-features-and-updates-with-apple-intelligence/) - Apple's new accessibility improvements leverage AI to offer more inclusive design solutions.

## Ethics and Security in the Tech Sector

* [CISA Admin Leaked AWS GovCloud Keys On Github](https://yro.slashdot.org/story/26/05/19/1650229/cisa-admin-leaked-aws-govcloud-keys-on-github?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A significant security breach exposes sensitive AWS GovCloud keys on GitHub.

* [Comprehensive Response to Bambu's AGPLv3 Violations](https://sfconservancy.org/news/2026/may/18/bambu-studio-3d-printer-agpl-violation-response/) - The Software Freedom Conservancy addresses alleged violations of AGPLv3 licensing by Bambu in their 3D printing products.

* [Open Source Package With 1 Million Monthly Downloads Stole User Credentials](https://soylentnews.org/article.pl?sid=26/05/15/1911234&amp;from=rss) - A widely-used open-source package is found to have compromised users' credentials.

## Innovations in Technology

* [Microsoft Launches Surface Pro 12, Surface Laptop 8 With Intel Chips](https://hardware.slashdot.org/story/26/05/19/1625223/microsoft-launches-surface-pro-12-surface-laptop-8-with-intel-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Microsoft debuts new powerful devices featuring Intel chips, aiming at high-performance tech users.

* [Microsoft Surprises With Its First Server Linux Distribution: Azure Linux 4.0](https://linux.slashdot.org/story/26/05/19/0056247/microsoft-surprises-with-its-first-server-linux-distribution-azure-linux-40?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Microsoft steps into Linux with a server distribution, signaling a significant shift in its software approach.

## Unique Science and Engineering Discoveries

* [Deciphering the Hashihara Castle Town Map](https://www.obayashi.co.jp/en/kikan_obayashi/detail/kikan_64_project.html) - A deep dive into the history and cartographic artistry of the Hashihara Castle Town Map.

* [NASA Pushes Mars Helicopter Rotors Past the Speed of Sound for the First Time Ever](https://soylentnews.org/article.pl?sid=26/05/15/199214&amp;from=rss) - NASA achieves a groundbreaking milestone with the Mars helicopter program, testing at supersonic speeds.

* [Scientists Solve 100-Year-Old Schrödinger Mystery About Color Perception](https://soylentnews.org/article.pl?sid=26/05/14/0239217&amp;from=rss) - A long-standing question on color perception, rooted in Schrödinger's theories, finds a solution.

## Historical and Cultural Insights

* [Huge Landslide Created a 500-Meter-High Tsunami in a Major Tourist Area](https://soylentnews.org/article.pl?sid=26/05/17/144228&amp;from=rss) - A catastrophic event uncovered the powerful natural forces shaping our landscapes.

* [Hanoi’s humble beer glass and the memory of a nation](https://sundaylongread.com/2026/05/15/hanois-humble-beer-glass-and-the-memory-of-a-nation/) - How a humble object became an emblem of Vietnamese cultural identity and historical resilience.

## Creative and Niche Tech Projects

* [I’ve built a virtual museum with nearly every operating system you can think of](https://virtualosmuseum.org/) - Explore an impressive virtual museum preserving the history of operating systems.

* [The Super Tiny Compiler, but in Ada](https://github.com/tomekw/stcc) - A minimalist yet powerful compiler rewritten in the Ada programming language.

* [Show HN: I made a 3D pose maker for artists](https://setpose.com/) - An artist-friendly innovation to create and manipulate 3D poses.

## Environmental and Societal Challenges

* [AI Data Centers Face Increasing Complaints About Inaudible but 'Felt' Infrasound](https://soylentnews.org/article.pl?sid=26/05/17/1429249&amp;from=rss) - Concerns arise over the impact of low-frequency sounds produced by data centers used in AI processing.

* [EVs Cause Honda’s First Ever Money-Losing Year in the US](https://soylentnews.org/article.pl?sid=26/05/16/0314220&amp;from=rss) - Electrification challenges contribute to Honda’s financial losses in the American market.

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

* [2026-05-19, 19:00:00](https://slashdot.org/story/26/05/19/1640224/stanchart-to-cut-over-7000-jobs-boost-ai-to-replace-lower-value-human-capital?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [StanChart To Cut Over 7,000 Jobs, Boost AI To Replace &apos;Lower-Value Human Capital&apos;](https://slashdot.org/story/26/05/19/1640224/stanchart-to-cut-over-7000-jobs-boost-ai-to-replace-lower-value-human-capital?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-19, 18:56:25](https://news.ycombinator.com/item?id=48197703) - [Disney Erased FiveThirtyEight](https://www.natesilver.net/p/disney-erased-fivethirtyeight)
* [2026-05-19, 18:45:35](https://lobste.rs/s/wefsg8/pokemon_compression_myth) - [Pokemon compression myth](https://www.reddit.com/r/TruePokemon/comments/hwluk9/while_it_is_true_that_iwata_did_write_a_new/)
* [2026-05-19, 18:34:27](https://news.ycombinator.com/item?id=48197370) - [A new era for AI Search](https://blog.google/products-and-platforms/products/search/search-io-2026/)
* [2026-05-19, 18:26:00](https://soylentnews.org/article.pl?sid=26/05/18/174235&amp;from=rss) - [Short Interview with Vint Cerf at El País](https://soylentnews.org/article.pl?sid=26/05/18/174235&amp;from=rss)
* [2026-05-19, 18:04:58](https://news.ycombinator.com/item?id=48196897) - [Deciphering the Hashihara Castle Town Map](https://www.obayashi.co.jp/en/kikan_obayashi/detail/kikan_64_project.html)
* [2026-05-19, 18:00:00](https://yro.slashdot.org/story/26/05/19/1650229/cisa-admin-leaked-aws-govcloud-keys-on-github?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CISA Admin Leaked AWS GovCloud Keys On Github](https://yro.slashdot.org/story/26/05/19/1650229/cisa-admin-leaked-aws-govcloud-keys-on-github?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-19, 17:46:19](https://news.ycombinator.com/item?id=48196609) - [Gemini Omni](https://deepmind.google/models/gemini-omni/)
* [2026-05-19, 17:43:45](https://news.ycombinator.com/item?id=48196570) - [Gemini 3.5 Flash](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/)
* [2026-05-19, 17:02:39](https://lobste.rs/s/r4xf2n/better_generated_branch_names_with_jj) - [Better generated branch names with jj](https://ddbeck.com/notes/jj-git-push-bookmark-template/)
* [2026-05-19, 17:01:25](https://news.ycombinator.com/item?id=48196020) - [Google I/O](https://io.google/2026/)
* [2026-05-19, 17:00:00](https://hardware.slashdot.org/story/26/05/19/1625223/microsoft-launches-surface-pro-12-surface-laptop-8-with-intel-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Launches Surface Pro 12, Surface Laptop 8 With Intel Chips](https://hardware.slashdot.org/story/26/05/19/1625223/microsoft-launches-surface-pro-12-surface-laptop-8-with-intel-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-19, 16:40:27](https://news.ycombinator.com/item?id=48195706) - [KV Sharing, MHC, and Compressed Attention](https://magazine.sebastianraschka.com/p/recent-developments-in-llm-architectures)
* [2026-05-19, 16:22:32](https://lobste.rs/s/rqhxpk/human_bottlenecks) - [Human Bottlenecks](https://borretti.me/article/human-bottlenecks)
* [2026-05-19, 16:00:00](https://linux.slashdot.org/story/26/05/19/0056247/microsoft-surprises-with-its-first-server-linux-distribution-azure-linux-40?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Surprises With Its First Server Linux Distribution: Azure Linux 4.0](https://linux.slashdot.org/story/26/05/19/0056247/microsoft-surprises-with-its-first-server-linux-distribution-azure-linux-40?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-19, 15:54:06](https://news.ycombinator.com/item?id=48195021) - [Show HN: Superlog (YC P26) – Observability that installs itself and fixes bugs](https://superlog.sh/)
* [2026-05-19, 15:53:38](https://news.ycombinator.com/item?id=48195009) - [I’ve built a virtual museum with nearly every operating system you can think of](https://virtualosmuseum.org/)
* [2026-05-19, 15:43:19](https://lobste.rs/s/maqmo2/how_we_used_quint_find_over_10_bugs_sqlite) - [How we used Quint to find over 10 bugs in SQLite while hardening Turso](https://turso.tech/blog/how-we-used-quint-to-find-over-10-bugs-in-sqlite)
* [2026-05-19, 15:27:53](https://news.ycombinator.com/item?id=48194614) - [Gentoo News: Copy Fail, Dirty Frag, and Fragnesia Kernel Vulnerabilities](https://www.gentoo.org/news/2026/05/19/copy-fail-fragnesia-vulnerabilities.html)
* [2026-05-19, 15:07:45](https://news.ycombinator.com/item?id=48194352) - [I’ve joined Anthropic](https://twitter.com/karpathy/status/2056753169888334312)
* [2026-05-19, 15:00:00](https://meta.slashdot.org/story/26/05/19/0027253/before-mass-layoffs-meta-reassigns-7000-workers-to-focus-on-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Before Mass Layoffs, Meta Reassigns 7,000 Workers To Focus On AI](https://meta.slashdot.org/story/26/05/19/0027253/before-mass-layoffs-meta-reassigns-7000-workers-to-focus-on-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-19, 14:37:27](https://lobste.rs/s/zotppg/type_out_code) - [Type out the code](https://haskellforall.com/2026/05/type-out-the-code)
* [2026-05-19, 14:29:40](https://lobste.rs/s/wed6lj/what_would_you_want_from_forge) - [What would you want from a forge?](https://lobste.rs/s/wed6lj/what_would_you_want_from_forge)
* [2026-05-19, 14:04:19](https://news.ycombinator.com/item?id=48193474) - [Show HN: I made a 3D pose maker for artists](https://setpose.com/)
* [2026-05-19, 14:02:55](https://lobste.rs/s/pliqep/under_hood_building_real_time_chord) - [Under the Hood: Building a Real-Time Chord Recognizer](https://whatchord.earthmanmuons.com/articles/under-the-hood)
* [2026-05-19, 13:50:35](https://lobste.rs/s/pk139i/super_tiny_compiler_ada) - [The Super Tiny Compiler, but in Ada](https://github.com/tomekw/stcc)
* [2026-05-19, 13:41:00](https://soylentnews.org/article.pl?sid=26/05/17/1438201&amp;from=rss) - [Your Doctor is Most Likely Consulting This Free AI Chatbot](https://soylentnews.org/article.pl?sid=26/05/17/1438201&amp;from=rss)
* [2026-05-19, 13:30:09](https://lobste.rs/s/wwcjoc/openbsd_7_9_released) - [OpenBSD 7.9 released](https://www.openbsd.org/79.html)
* [2026-05-19, 13:11:51](https://news.ycombinator.com/item?id=48192882) - [OpenBSD 7.9](https://www.openbsd.org/79.html)
* [2026-05-19, 12:53:39](https://lobste.rs/s/prer9l/software_s_centaur_era) - [Software&apos;s Centaur Era](https://twitchard.github.io/posts/2026-05-18-softwares-centaur-era.html)
* [2026-05-19, 12:29:28](https://lobste.rs/s/zsjasr/my_domain_got_abused_on_github_pages) - [My domain got abused on Github Pages](https://meertens.dev/blog/github-enables-domain-abuse/)
* [2026-05-19, 12:04:18](https://news.ycombinator.com/item?id=48192224) - [Apple unveils new accessibility features](https://www.apple.com/newsroom/2026/05/apple-unveils-new-accessibility-features-and-updates-with-apple-intelligence/)
* [2026-05-19, 11:52:27](https://lobste.rs/s/syambe/unreasonable_effectiveness) - [The Unreasonable Effectiveness of ProseMirror Model in Rich Text Transformation](https://smoores.dev/post/unreasonable_effectiveness_of_prosemirror/)
* [2026-05-19, 11:00:00](https://entertainment.slashdot.org/story/26/05/19/0043247/amazons-alexa-now-produces-ai-generated-podcasts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon&apos;s Alexa+ Now Produces AI-Generated Podcasts](https://entertainment.slashdot.org/story/26/05/19/0043247/amazons-alexa-now-produces-ai-generated-podcasts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-19, 10:38:47](https://news.ycombinator.com/item?id=48191602) - [Gaussian Splat of a Strawberry](https://superspl.at/scene/84df8849)
* [2026-05-19, 09:50:49](https://lobste.rs/s/hpoydf/windows_dll_loader_lock_how_rust_thread) - [The Windows DLL loader lock: how a Rust thread can hang your JVM](https://questdb.com/blog/windows-dll-loader-lock-rust-jni-deadlock/)
* [2026-05-19, 09:39:09](https://lobste.rs/s/w89v6a/how_write_ssds) - [How to Write to SSDs](https://www.vldb.org/pvldb/vol19/p1469-lee.pdf)
* [2026-05-19, 08:58:05](https://lobste.rs/s/xd5afy/even_more_tagged_union_subsets_with) - [Even More Tagged Union Subsets with Comptime](https://sinclairtarget.com/blog/2026/05/18/even-more-tagged-union-subsets-with-comptime/)
* [2026-05-19, 08:56:00](https://soylentnews.org/article.pl?sid=26/05/17/1429249&amp;from=rss) - [AI Data Centers Face Increasing Complaints About Inaudible but &apos;Felt&apos; Infrasound](https://soylentnews.org/article.pl?sid=26/05/17/1429249&amp;from=rss)
* [2026-05-19, 07:45:53](https://news.ycombinator.com/item?id=48190454) - [CISA Admin Leaked AWS GovCloud Keys on GitHub](https://krebsonsecurity.com/2026/05/cisa-admin-leaked-aws-govcloud-keys-on-github/)
* [2026-05-19, 07:00:00](https://tech.slashdot.org/story/26/05/19/0035259/europe-tests-laser-links-as-satellite-comms-outgrow-radio?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Europe Tests Laser Links As Satellite Comms Outgrow Radio](https://tech.slashdot.org/story/26/05/19/0035259/europe-tests-laser-links-as-satellite-comms-outgrow-radio?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-19, 05:04:49](https://news.ycombinator.com/item?id=48189368) - [Mini Shai-Hulud Strikes Again: 314 npm Packages Compromised](https://safedep.io/mini-shai-hulud-strikes-again-314-npm-packages-compromised/)
* [2026-05-19, 04:09:00](https://soylentnews.org/article.pl?sid=26/05/17/1424241&amp;from=rss) - [A Simple Blood Test Could Predict Your Odds of Living Longer With Surprising Accuracy](https://soylentnews.org/article.pl?sid=26/05/17/1424241&amp;from=rss)
* [2026-05-19, 03:30:00](https://games.slashdot.org/story/26/05/19/0021214/playstation-exclusives-arent-coming-to-pc-anymore?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [PlayStation Exclusives Aren&apos;t Coming To PC Anymore](https://games.slashdot.org/story/26/05/19/0021214/playstation-exclusives-arent-coming-to-pc-anymore?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-19, 03:17:45](https://news.ycombinator.com/item?id=48188787) - [Peter Neumann has died](https://www.tuhs.org/pipermail/tuhs/2026-May/033748.html)
* [2026-05-19, 02:46:09](https://lobste.rs/s/q1m7cr/spork_posix_spawn_you_can_use_as_fork) - [Spork: A posix_spawn you can use as a fork](https://dl.acm.org/doi/pdf/10.1145/3713082.3730396)
* [2026-05-19, 01:30:42](https://news.ycombinator.com/item?id=48188183) - [The last six months in LLMs in five minutes](https://simonwillison.net/2026/May/19/5-minute-llms/)
* [2026-05-19, 00:25:50](https://news.ycombinator.com/item?id=48187752) - [An Apple (II) for Teacher](https://technicshistory.com/2026/05/19/an-apple-ii-for-teacher/)
* [2026-05-18, 23:22:00](https://soylentnews.org/article.pl?sid=26/05/17/144228&amp;from=rss) - [Huge Landslide Created a 500-Meter-High Tsunami in a Major Tourist Area](https://soylentnews.org/article.pl?sid=26/05/17/144228&amp;from=rss)
* [2026-05-18, 23:04:25](https://lobste.rs/s/5pjoom/introducing_casuarina_linux_glibc_based) - [Introducing Casuarina Linux: A glibc-Based Chimera Linux Derivative](https://casuarina.org/news/introducing-casuarina-linux/)
* [2026-05-18, 23:03:02](https://news.ycombinator.com/item?id=48187054) - [Click (2016)](https://clickclickclick.click/)
* [2026-05-18, 23:00:00](https://news.slashdot.org/story/26/05/18/1952255/fbi-wants-to-buy-nationwide-access-to-license-plate-readers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FBI Wants to Buy Nationwide Access to License Plate Readers](https://news.slashdot.org/story/26/05/18/1952255/fbi-wants-to-buy-nationwide-access-to-license-plate-readers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-18, 22:24:09](https://lobste.rs/s/cjwt5c/comprehensive_response_bambu_s_agplv3) - [Comprehensive Response to Bambu&apos;s AGPLv3 Violations](https://sfconservancy.org/news/2026/may/18/bambu-studio-3d-printer-agpl-violation-response/)
* [2026-05-18, 22:20:51](https://lobste.rs/s/vypafm/cisa_admin_leaked_aws_govcloud_keys_on) - [CISA Admin Leaked AWS GovCloud Keys on Github](https://krebsonsecurity.com/2026/05/cisa-admin-leaked-aws-govcloud-keys-on-github/)
* [2026-05-18, 22:00:00](https://it.slashdot.org/story/26/05/18/1946245/new-windows-miniplasma-zero-day-exploit-gives-system-access-poc-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Windows &apos;MiniPlasma&apos; Zero-Day Exploit Gives SYSTEM Access, PoC Released](https://it.slashdot.org/story/26/05/18/1946245/new-windows-miniplasma-zero-day-exploit-gives-system-access-poc-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-18, 21:42:46](https://lobste.rs/s/ac0akx/programming_as_theory_building_1985) - [Programming as Theory Building (1985)](https://gwern.net/doc/cs/algorithm/1985-naur.pdf)
* [2026-05-18, 21:15:33](https://lobste.rs/s/i2szle/just_say_no_engineer_was_zirp_phenomenon) - [The just-say-no engineer was a ZIRP phenomenon](https://www.seangoedecke.com/the-just-say-no-engineer-was-a-zirp-phenomenon/)
* [2026-05-18, 21:07:08](https://lobste.rs/s/5mnt43/fil_c_optimized_calling_convention) - [The Fil-C Optimized Calling Convention](https://fil-c.org/calling_convention)
* [2026-05-18, 21:00:00](https://yro.slashdot.org/story/26/05/18/196230/nintendo-tries-to-obtain-touchscreen-specific-patent-on-monster-capturing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nintendo Tries To Obtain Touchscreen-Specific Patent On Monster Capturing](https://yro.slashdot.org/story/26/05/18/196230/nintendo-tries-to-obtain-touchscreen-specific-patent-on-monster-capturing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-18, 20:00:00](https://tech.slashdot.org/story/26/05/18/179232/meta-layoffs-stress-harsh-ai-reality-inside-zuckerbergs-company?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Layoffs Stress Harsh AI Reality Inside Zuckerberg&apos;s Company](https://tech.slashdot.org/story/26/05/18/179232/meta-layoffs-stress-harsh-ai-reality-inside-zuckerbergs-company?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-18, 19:00:00](https://yro.slashdot.org/story/26/05/18/1845222/elon-musk-loses-lawsuit-against-openai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Elon Musk Loses Lawsuit Against OpenAI](https://yro.slashdot.org/story/26/05/18/1845222/elon-musk-loses-lawsuit-against-openai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-18, 18:37:00](https://soylentnews.org/article.pl?sid=26/05/17/1359222&amp;from=rss) - [What Will It Take to Modernize the US Power Grid?](https://soylentnews.org/article.pl?sid=26/05/17/1359222&amp;from=rss)
* [2026-05-18, 18:29:26](https://lobste.rs/s/0wbazw/haiku_os_runs_on_m1_macs_now) - [Haiku OS runs on M1 Macs now](https://www.osnews.com/story/144985/haiku-os-runs-on-m1-macs-now/)
* [2026-05-18, 18:28:13](https://lobste.rs/s/xckxda/quiet_renovation_at_bitwarden) - [The Quiet Renovation at Bitwarden](https://blog.ppb1701.com/the-quiet-renovation-at-bitwarden)
* [2026-05-18, 18:00:00](https://news.slashdot.org/story/26/05/18/1656217/a-masters-degree-isnt-the-job-guarantee-it-used-to-be?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Master&apos;s Degree Isn&apos;t the Job Guarantee It Used To Be](https://news.slashdot.org/story/26/05/18/1656217/a-masters-degree-isnt-the-job-guarantee-it-used-to-be?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-18, 17:45:02](https://news.ycombinator.com/item?id=48182872) - [Hanoi’s humble beer glass and the memory of a nation](https://sundaylongread.com/2026/05/15/hanois-humble-beer-glass-and-the-memory-of-a-nation/)
* [2026-05-18, 17:44:12](https://news.ycombinator.com/item?id=48182856) - [Show HN: Haystack – Review the PRs that need human attention](https://haystackeditor.com/)
* [2026-05-18, 17:20:43](https://news.ycombinator.com/item?id=48182516) - [Cursor Introduces Composer 2.5](https://cursor.com/blog/composer-2-5)
* [2026-05-18, 17:00:00](https://tech.slashdot.org/story/26/05/18/1644248/microsoft-testing-adjustable-taskbar-start-menu-in-windows-11?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Testing Adjustable Taskbar, Start Menu In Windows 11](https://tech.slashdot.org/story/26/05/18/1644248/microsoft-testing-adjustable-taskbar-start-menu-in-windows-11?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-18, 13:55:20](https://lobste.rs/s/lynqdm/de_bloating_javascript) - [De‐bloating Javascript](https://github.com/naver/lispe/wiki/6.23-De%E2%80%90bloating-Javascript)
* [2026-05-18, 13:51:00](https://soylentnews.org/article.pl?sid=26/05/17/1346233&amp;from=rss) - [China Court Rules Against Job Cut From AI](https://soylentnews.org/article.pl?sid=26/05/17/1346233&amp;from=rss)
* [2026-05-18, 11:00:15](https://news.ycombinator.com/item?id=48177891) - [The Silver Swan Automaton (1773)](https://thebowesmuseum.org.uk/collections/the-silver-swan/)
* [2026-05-18, 09:05:00](https://soylentnews.org/article.pl?sid=26/05/17/1229217&amp;from=rss) - [The Context Window Has Been Shattered: Subquadratic Debuts a 12-Million-Token Window](https://soylentnews.org/article.pl?sid=26/05/17/1229217&amp;from=rss)
* [2026-05-18, 04:24:00](https://soylentnews.org/article.pl?sid=26/05/17/0153208&amp;from=rss) - [SteamOS Scared Microsoft Into Making Windows Less Like Windows](https://soylentnews.org/article.pl?sid=26/05/17/0153208&amp;from=rss)
* [2026-05-17, 23:37:00](https://soylentnews.org/article.pl?sid=26/05/17/0150209&amp;from=rss) - [Scientists May Have Discovered How Parkinson’s Disease Spreads Through the Brain](https://soylentnews.org/article.pl?sid=26/05/17/0150209&amp;from=rss)
* [2026-05-17, 18:56:00](https://soylentnews.org/article.pl?sid=26/05/17/0147228&amp;from=rss) - [Removing the Modem and GPS From My 2024 RAV4 Hybrid](https://soylentnews.org/article.pl?sid=26/05/17/0147228&amp;from=rss)
* [2026-05-17, 15:52:21](https://news.ycombinator.com/item?id=48170007) - [Intro to TLA+ for the LLM Era: Prompt Your Way to Victory](https://emptysqua.re/blog/intro-to-tla-plus-for-the-llm-era/)
* [2026-05-17, 14:57:39](https://news.ycombinator.com/item?id=48169508) - [KV Cache Is Becoming the Memory Hierarchy of Inference](https://touchdown-labs.com/blog/kv-cache-memory-hierarchy-inference.html)
* [2026-05-17, 14:03:00](https://soylentnews.org/article.pl?sid=26/05/17/0146201&amp;from=rss) - [A Security Researcher Says Microsoft Secretly Built a Backdoor into BitLocker](https://soylentnews.org/article.pl?sid=26/05/17/0146201&amp;from=rss)
* [2026-05-17, 09:23:00](https://soylentnews.org/article.pl?sid=26/05/16/0314220&amp;from=rss) - [EVs Cause Honda’s First Ever Money-Losing Year in the US](https://soylentnews.org/article.pl?sid=26/05/16/0314220&amp;from=rss)
* [2026-05-17, 07:20:14](https://news.ycombinator.com/item?id=48166744) - [Polypad](https://polypad.amplify.com/)
* [2026-05-17, 04:43:00](https://soylentnews.org/article.pl?sid=26/05/16/0015203&amp;from=rss) - [Here&apos;s Why European Cars Can&apos;t Use American Engine Oil](https://soylentnews.org/article.pl?sid=26/05/16/0015203&amp;from=rss)
* [2026-05-17, 03:25:23](https://news.ycombinator.com/item?id=48165797) - [I Found Ultra-Pure Quantum Crystals in an Abandoned Mine in the Atacama Desert](https://medium.com/@breid.at/ultra-pure-quantum-crystals-from-an-abandoned-mine-in-a-mysterious-desert-93cc87d12314)
* [2026-05-16, 23:51:00](https://soylentnews.org/article.pl?sid=26/05/16/0013231&amp;from=rss) - [AISLE Discovers CVE-2026-42511: a 21-Year-Old FreeBSD Remote Command Execution Vulnerability](https://soylentnews.org/article.pl?sid=26/05/16/0013231&amp;from=rss)
* [2026-05-16, 19:17:00](https://soylentnews.org/article.pl?sid=26/05/16/009242&amp;from=rss) - [HP Stuffed a PC Into a Keyboard. We Took it for a Spin](https://soylentnews.org/article.pl?sid=26/05/16/009242&amp;from=rss)
* [2026-05-16, 16:49:15](https://news.ycombinator.com/item?id=48161772) - [Kv4p HT – A homebrew 1W radio (VHF or UHF) that plugs into an Android phone](https://www.kv4p.com/)
* [2026-05-16, 14:28:00](https://soylentnews.org/article.pl?sid=26/05/16/006216&amp;from=rss) - [1,300-Year-Old Secret: Lost Medieval Manuscript Finally Found Hiding in Plain Sight](https://soylentnews.org/article.pl?sid=26/05/16/006216&amp;from=rss)
* [2026-05-16, 09:40:00](https://soylentnews.org/article.pl?sid=26/05/15/1911234&amp;from=rss) - [Open Source Package With 1 Million Monthly Downloads Stole User Credentials](https://soylentnews.org/article.pl?sid=26/05/15/1911234&amp;from=rss)
* [2026-05-16, 04:58:00](https://soylentnews.org/article.pl?sid=26/05/15/199214&amp;from=rss) - [NASA Pushes Mars Helicopter Rotors Past the Speed of Sound for the First Time Ever](https://soylentnews.org/article.pl?sid=26/05/15/199214&amp;from=rss)
* [2026-05-16, 00:12:00](https://soylentnews.org/article.pl?sid=26/05/15/197229&amp;from=rss) - [Tails Linux 7.7.3 Emergency Release Fixes Dirty Frag Vulnerability](https://soylentnews.org/article.pl?sid=26/05/15/197229&amp;from=rss)
* [2026-05-15, 19:24:00](https://soylentnews.org/article.pl?sid=26/05/15/194258&amp;from=rss) - [A Wikipedia Clone Built on AI Hallucinations is Here to Hasten Along the Death of the Internet](https://soylentnews.org/article.pl?sid=26/05/15/194258&amp;from=rss)
* [2026-05-15, 14:45:00](https://soylentnews.org/article.pl?sid=26/05/14/0327203&amp;from=rss) - [Linux Kernel Maintainers Pitch Emergency Killswitch After CopyFail and Dirty Frag Chaos](https://soylentnews.org/article.pl?sid=26/05/14/0327203&amp;from=rss)
* [2026-05-15, 09:59:00](https://soylentnews.org/article.pl?sid=26/05/14/0321244&amp;from=rss) - [The Great Zombification: AI in the Ivory Tower](https://soylentnews.org/article.pl?sid=26/05/14/0321244&amp;from=rss)
* [2026-05-15, 05:16:00](https://soylentnews.org/article.pl?sid=26/05/14/0316205&amp;from=rss) - [The New Wild West of AI Kids’ Toys](https://soylentnews.org/article.pl?sid=26/05/14/0316205&amp;from=rss)
* [2026-05-15, 00:25:00](https://soylentnews.org/article.pl?sid=26/05/14/0239217&amp;from=rss) - [Scientists Solve 100-Year-Old Schrödinger Mystery About Color Perception](https://soylentnews.org/article.pl?sid=26/05/14/0239217&amp;from=rss)
