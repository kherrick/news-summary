# [News Summary](https://kherrick.github.io/news-summary/)

## Major Events & Discoveries

* [Railway Blocked by Google Cloud](https://status.railway.com/?date=20260519) ([comments](https://news.ycombinator.com/item?id=48201484)) - Railway, a deployment platform, faced major disruptions due to issues related to Google Cloud services, halting its operations.

* [GitHub is investigating unauthorized access to their internal repositories](https://twitter.com/github/status/2056884788179726685) ([comments](https://news.ycombinator.com/item?id=48201316)) - GitHub is addressing a significant security issue involving external access to its internal repositories.

* [Exposure to Burn Injuries Played Key Role in Shaping Human Evolution](https://soylentnews.org/article.pl?sid=26/05/18/175251&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/05/18/175251&amp;from=rss)) - New research suggests that exposure to burn injuries might have been crucial in the evolution of early human cognitive skills.

## Technology Changes and Innovations

* [Google Changes Its Search Box for the First Time in 25 Years](https://search.slashdot.org/story/26/05/19/1947215/google-changes-its-search-box-for-the-first-time-in-25-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=48197370)) - Google has updated its iconic search box for the first time, bringing a new look and functionality to its core feature.

* [Amazon&apos;s Alexa+ Now Produces AI-Generated Podcasts](https://entertainment.slashdot.org/story/26/05/19/0043247/amazons-alexa-now-produces-ai-generated-podcasts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://entertainment.slashdot.org/story/26/05/19/0043247/amazons-alexa-now-produces-ai-generated-podcasts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)) - Amazon's Alexa gains a new AI-powered feature to produce custom podcasts.

## Artificial Intelligence and AI Ethics

* [OpenAI Adopts Google&apos;s SynthID Watermark for AI Images with Verification Tool](https://openai.com/index/advancing-content-provenance/) ([comments](https://news.ycombinator.com/item?id=48198291)) - OpenAI integrates Google’s SynthID watermarking for its AI-generated images to enhance authenticity tracking.

* [OpenAI Co-Founder Andrej Karpathy Joins Anthropic](https://slashdot.org/story/26/05/19/1743231/openai-co-founder-andrej-karpathy-joins-anthropic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=48194352)) - Andrej Karpathy, co-founder of OpenAI, joins AI safety-focused startup Anthropic.

## Cybersecurity Developments

* [CISA Admin Leaked AWS GovCloud Keys On Github](https://krebsonsecurity.com/2026/05/cisa-admin-leaked-aws-govcloud-keys-on-github/) ([comments](https://news.ycombinator.com/item?id=48196609)) - Disturbing security breach discovered as a CISA administrator unintentionally exposed sensitive AWS keys on GitHub.

* [New Windows &apos;MiniPlasma&apos; Zero-Day Exploit Gives SYSTEM Access, PoC Released](https://it.slashdot.org/story/26/05/18/1946245/new-windows-miniplasma-zero-day-exploit-gives-system-access-poc-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://it.slashdot.org/story/26/05/18/1946245/new-windows-miniplasma-zero-day-exploit-gives-system-access-poc-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)) - Windows grapples with a serious zero-day vulnerability named MiniPlasma, which grants attackers SYSTEM-level access.

## Cultural and Scientific Interest

* [Why is almost everyone right-handed? A new study connects it to bipedalism](https://www.ox.ac.uk/news/2026-05-15-why-is-almost-everyone-right-handed-the-answer-may-lie-in-how-we-learned-to-walk) ([comments](https://news.ycombinator.com/item?id=48194098)) - Researchers explore the link between human right-handedness and evolutionary developments like walking upright.

* [The two oldest printing presses](https://museumplantinmoretus.be/en/worlds-two-oldest-printing-presses) ([comments](https://news.ycombinator.com/item?id=48175748)) - Discover the world's two oldest printing presses, their creation, and their historical significance.

## Open Source and Software Innovations

* [OpenBSD 7.9 released](https://www.openbsd.org/79.html) ([comments](https://lobste.rs/s/wwcjoc/openbsd_7_9_released)) - OpenBSD’s latest release, version 7.9, adds new features, security enhancements, and expanded hardware support.

* [Remove–AI–Watermarks – CLI and library for removing AI watermarks from images](https://github.com/wiltodelta/remove-ai-watermarks) ([comments](https://news.ycombinator.com/item?id=48200569)) - Introducing a new tool for developers to eliminate AI-based watermarks from digital images.

* [Introducing Casuarina Linux: A glibc-Based Chimera Linux Derivative](https://casuarina.org/news/introducing-casuarina-linux/) ([comments](https://lobste.rs/s/5pjoom/introducing_casuarina_linux_glibc_based)) - A new Linux distribution, Casuarina Linux, merges elements of Chimera Linux with glibc integration.

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

* [2026-05-20, 00:23:54](https://news.ycombinator.com/item?id=48201484) - [Railway Blocked by Google Cloud](https://status.railway.com/?date=20260519)
* [2026-05-20, 00:01:18](https://news.ycombinator.com/item?id=48201316) - [GitHub is investigating unauthorized access to their internal repositories](https://twitter.com/github/status/2056884788179726685)
* [2026-05-19, 23:13:22](https://lobste.rs/s/b4vpj6/emacs_after_magit) - [Emacs after Magit](https://sdf.org/~pkal/blog/emacs/sans-magit.html)
* [2026-05-19, 23:05:00](https://soylentnews.org/article.pl?sid=26/05/18/175251&amp;from=rss) - [Exposure to Burn Injuries Played Key Role in Shaping Human Evolution](https://soylentnews.org/article.pl?sid=26/05/18/175251&amp;from=rss)
* [2026-05-19, 23:00:00](https://news.slashdot.org/story/26/05/19/1957248/plex-triples-lifetime-subscription-cost-to-750?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Plex Triples Lifetime Subscription Cost To $750](https://news.slashdot.org/story/26/05/19/1957248/plex-triples-lifetime-subscription-cost-to-750?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-19, 22:57:01](https://lobste.rs/s/9ygtid/tonic_is_joining_grpc_project) - [Tonic is joining the gRPC project](https://luciofranco.com/blog/tonic-joins-grpc/)
* [2026-05-19, 22:30:31](https://news.ycombinator.com/item?id=48200569) - [Remove–AI–Watermarks – CLI and library for removing AI watermarks from images](https://github.com/wiltodelta/remove-ai-watermarks)
* [2026-05-19, 22:00:00](https://search.slashdot.org/story/26/05/19/1947215/google-changes-its-search-box-for-the-first-time-in-25-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Changes Its Search Box for the First Time in 25 Years](https://search.slashdot.org/story/26/05/19/1947215/google-changes-its-search-box-for-the-first-time-in-25-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-19, 21:00:00](https://hardware.slashdot.org/story/26/05/19/1733219/nextera-and-dominions-67-billion-mega-merger-is-all-about-the-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NextEra and Dominion&apos;s $67 Billion Mega-Merger Is All About the Data Centers](https://hardware.slashdot.org/story/26/05/19/1733219/nextera-and-dominions-67-billion-mega-merger-is-all-about-the-data-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-19, 20:55:03](https://lobste.rs/s/ihqekl/chasing_down_why_installing_kernel) - [Chasing down why installing the kernel segfaulted](https://sporks.space/2026/05/19/chasing-down-why-installing-the-kernel-segfaulted/)
* [2026-05-19, 20:06:09](https://lobste.rs/s/2fqahd/i_am_not_software_engineer) - [I am not a Software Engineer](https://huronbikes.mataroa.blog/blog/i-am-not-a-software-engineer/)
* [2026-05-19, 20:00:00](https://slashdot.org/story/26/05/19/1743231/openai-co-founder-andrej-karpathy-joins-anthropic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Co-Founder Andrej Karpathy Joins Anthropic](https://slashdot.org/story/26/05/19/1743231/openai-co-founder-andrej-karpathy-joins-anthropic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-19, 19:34:30](https://news.ycombinator.com/item?id=48198291) - [OpenAI Adopts Google&apos;s SynthID Watermark for AI Images with Verification Tool](https://openai.com/index/advancing-content-provenance/)
* [2026-05-19, 19:24:51](https://lobste.rs/s/z2pm16/pgbackrest_will_continue) - [pgBackRest will continue](https://pgbackrest.org/news.html#will-continue)
* [2026-05-19, 19:22:56](https://news.ycombinator.com/item?id=48198127) - [Dumb ways for an open source project to die](https://nesbitt.io/2026/05/19/dumb-ways-for-an-open-source-project-to-die.html)
* [2026-05-19, 19:14:12](https://news.ycombinator.com/item?id=48197995) - [Mistral AI acquires Emmi AI](https://www.emmi.ai/news/mistral-ai-acquires-emmi-ai)
* [2026-05-19, 19:13:26](https://news.ycombinator.com/item?id=48197980) - [Minnesota becomes first state to ban prediction markets](https://www.npr.org/2026/05/19/nx-s1-5821265/minnesota-ban-prediction-markets)
* [2026-05-19, 19:00:00](https://slashdot.org/story/26/05/19/1640224/stanchart-to-cut-over-7000-jobs-boost-ai-to-replace-lower-value-human-capital?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [StanChart To Cut Over 7,000 Jobs, Boost AI To Replace &apos;Lower-Value Human Capital&apos;](https://slashdot.org/story/26/05/19/1640224/stanchart-to-cut-over-7000-jobs-boost-ai-to-replace-lower-value-human-capital?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-19, 18:56:25](https://news.ycombinator.com/item?id=48197703) - [Disney erased FiveThirtyEight](https://www.natesilver.net/p/disney-erased-fivethirtyeight)
* [2026-05-19, 18:45:35](https://lobste.rs/s/wefsg8/pokemon_gen2_compression_myth) - [Pokemon Gen2 compression myth](https://www.reddit.com/r/TruePokemon/comments/hwluk9/while_it_is_true_that_iwata_did_write_a_new/)
* [2026-05-19, 18:40:19](https://news.ycombinator.com/item?id=48197445) - [The TTY Demystified (2008)](https://www.linusakesson.net/programming/tty/index.php)
* [2026-05-19, 18:34:27](https://news.ycombinator.com/item?id=48197370) - [Google changes its search box](https://blog.google/products-and-platforms/products/search/search-io-2026/)
* [2026-05-19, 18:26:00](https://soylentnews.org/article.pl?sid=26/05/18/174235&amp;from=rss) - [Short Interview with Vint Cerf at El País](https://soylentnews.org/article.pl?sid=26/05/18/174235&amp;from=rss)
* [2026-05-19, 18:03:10](https://news.ycombinator.com/item?id=48196867) - [Gemini CLI will stop working from June 18, 2026](https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli/)
* [2026-05-19, 18:00:00](https://yro.slashdot.org/story/26/05/19/1650229/cisa-admin-leaked-aws-govcloud-keys-on-github?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CISA Admin Leaked AWS GovCloud Keys On Github](https://yro.slashdot.org/story/26/05/19/1650229/cisa-admin-leaked-aws-govcloud-keys-on-github?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-19, 17:46:19](https://news.ycombinator.com/item?id=48196609) - [Gemini Omni](https://deepmind.google/models/gemini-omni/)
* [2026-05-19, 17:43:45](https://news.ycombinator.com/item?id=48196570) - [Gemini 3.5 Flash](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/)
* [2026-05-19, 17:02:39](https://lobste.rs/s/r4xf2n/better_generated_branch_names_with_jj) - [Better generated branch names with jj](https://ddbeck.com/notes/jj-git-push-bookmark-template/)
* [2026-05-19, 17:00:00](https://hardware.slashdot.org/story/26/05/19/1625223/microsoft-launches-surface-pro-12-surface-laptop-8-with-intel-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Launches Surface Pro 12, Surface Laptop 8 With Intel Chips](https://hardware.slashdot.org/story/26/05/19/1625223/microsoft-launches-surface-pro-12-surface-laptop-8-with-intel-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-19, 16:22:32](https://lobste.rs/s/rqhxpk/human_bottlenecks) - [Human Bottlenecks](https://borretti.me/article/human-bottlenecks)
* [2026-05-19, 16:00:00](https://linux.slashdot.org/story/26/05/19/0056247/microsoft-surprises-with-its-first-server-linux-distribution-azure-linux-40?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Surprises With Its First Server Linux Distribution: Azure Linux 4.0](https://linux.slashdot.org/story/26/05/19/0056247/microsoft-surprises-with-its-first-server-linux-distribution-azure-linux-40?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-19, 15:53:38](https://news.ycombinator.com/item?id=48195009) - [I’ve built a virtual museum with nearly every operating system you can think of](https://virtualosmuseum.org/)
* [2026-05-19, 15:43:19](https://lobste.rs/s/maqmo2/how_we_used_quint_find_over_10_bugs_sqlite) - [How we used Quint to find over 10 bugs in SQLite while hardening Turso](https://turso.tech/blog/how-we-used-quint-to-find-over-10-bugs-in-sqlite)
* [2026-05-19, 15:27:53](https://news.ycombinator.com/item?id=48194614) - [Copy Fail, Dirty Frag, and Fragnesia kernel vulnerabilities](https://www.gentoo.org/news/2026/05/19/copy-fail-fragnesia-vulnerabilities.html)
* [2026-05-19, 15:07:45](https://news.ycombinator.com/item?id=48194352) - [I’ve joined Anthropic](https://twitter.com/karpathy/status/2056753169888334312)
* [2026-05-19, 15:00:00](https://meta.slashdot.org/story/26/05/19/0027253/before-mass-layoffs-meta-reassigns-7000-workers-to-focus-on-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Before Mass Layoffs, Meta Reassigns 7,000 Workers To Focus On AI](https://meta.slashdot.org/story/26/05/19/0027253/before-mass-layoffs-meta-reassigns-7000-workers-to-focus-on-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-19, 14:50:42](https://news.ycombinator.com/item?id=48194098) - [Why is almost everyone right-handed? A new study connects it to bipedalism](https://www.ox.ac.uk/news/2026-05-15-why-is-almost-everyone-right-handed-the-answer-may-lie-in-how-we-learned-to-walk)
* [2026-05-19, 14:37:27](https://lobste.rs/s/zotppg/type_out_code) - [Type out the code](https://haskellforall.com/2026/05/type-out-the-code)
* [2026-05-19, 14:29:40](https://lobste.rs/s/wed6lj/what_would_you_want_from_forge) - [What would you want from a forge?](https://lobste.rs/s/wed6lj/what_would_you_want_from_forge)
* [2026-05-19, 14:02:55](https://lobste.rs/s/pliqep/under_hood_building_real_time_chord) - [Under the Hood: Building a Real-Time Chord Recognizer](https://whatchord.earthmanmuons.com/articles/under-the-hood)
* [2026-05-19, 13:50:35](https://lobste.rs/s/pk139i/super_tiny_compiler_ada) - [The Super Tiny Compiler, but in Ada](https://github.com/tomekw/stcc)
* [2026-05-19, 13:41:00](https://soylentnews.org/article.pl?sid=26/05/17/1438201&amp;from=rss) - [Your Doctor is Most Likely Consulting This Free AI Chatbot](https://soylentnews.org/article.pl?sid=26/05/17/1438201&amp;from=rss)
* [2026-05-19, 13:30:09](https://lobste.rs/s/wwcjoc/openbsd_7_9_released) - [OpenBSD 7.9 released](https://www.openbsd.org/79.html)
* [2026-05-19, 12:53:39](https://lobste.rs/s/prer9l/software_s_centaur_era) - [Software&apos;s Centaur Era](https://twitchard.github.io/posts/2026-05-18-softwares-centaur-era.html)
* [2026-05-19, 12:29:28](https://lobste.rs/s/zsjasr/my_domain_got_abused_on_github_pages) - [My domain got abused on Github Pages](https://meertens.dev/blog/github-enables-domain-abuse/)
* [2026-05-19, 12:23:07](https://news.ycombinator.com/item?id=48192383) - [Show HN: Forge – Guardrails take an 8B model from 53% to 99% on agentic tasks](https://github.com/antoinezambelli/forge)
* [2026-05-19, 12:04:18](https://news.ycombinator.com/item?id=48192224) - [Apple unveils new accessibility features](https://www.apple.com/newsroom/2026/05/apple-unveils-new-accessibility-features-and-updates-with-apple-intelligence/)
* [2026-05-19, 11:52:27](https://lobste.rs/s/syambe/unreasonable_effectiveness) - [The Unreasonable Effectiveness of ProseMirror Model in Rich Text Transformation](https://smoores.dev/post/unreasonable_effectiveness_of_prosemirror/)
* [2026-05-19, 11:00:00](https://entertainment.slashdot.org/story/26/05/19/0043247/amazons-alexa-now-produces-ai-generated-podcasts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon&apos;s Alexa+ Now Produces AI-Generated Podcasts](https://entertainment.slashdot.org/story/26/05/19/0043247/amazons-alexa-now-produces-ai-generated-podcasts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-19, 10:38:47](https://news.ycombinator.com/item?id=48191602) - [Show HN: Gaussian Splat of a Strawberry](https://superspl.at/scene/84df8849)
* [2026-05-19, 09:50:49](https://lobste.rs/s/hpoydf/windows_dll_loader_lock_how_rust_thread) - [The Windows DLL loader lock: how a Rust thread can hang your JVM](https://questdb.com/blog/windows-dll-loader-lock-rust-jni-deadlock/)
* [2026-05-19, 08:58:05](https://lobste.rs/s/xd5afy/even_more_tagged_union_subsets_with) - [Even More Tagged Union Subsets with Comptime](https://sinclairtarget.com/blog/2026/05/18/even-more-tagged-union-subsets-with-comptime/)
* [2026-05-19, 08:56:00](https://soylentnews.org/article.pl?sid=26/05/17/1429249&amp;from=rss) - [AI Data Centers Face Increasing Complaints About Inaudible but &apos;Felt&apos; Infrasound](https://soylentnews.org/article.pl?sid=26/05/17/1429249&amp;from=rss)
* [2026-05-19, 07:45:53](https://news.ycombinator.com/item?id=48190454) - [CISA Admin Leaked AWS GovCloud Keys on GitHub](https://krebsonsecurity.com/2026/05/cisa-admin-leaked-aws-govcloud-keys-on-github/)
* [2026-05-19, 07:00:00](https://tech.slashdot.org/story/26/05/19/0035259/europe-tests-laser-links-as-satellite-comms-outgrow-radio?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Europe Tests Laser Links As Satellite Comms Outgrow Radio](https://tech.slashdot.org/story/26/05/19/0035259/europe-tests-laser-links-as-satellite-comms-outgrow-radio?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-19, 04:09:00](https://soylentnews.org/article.pl?sid=26/05/17/1424241&amp;from=rss) - [A Simple Blood Test Could Predict Your Odds of Living Longer With Surprising Accuracy](https://soylentnews.org/article.pl?sid=26/05/17/1424241&amp;from=rss)
* [2026-05-19, 03:30:00](https://games.slashdot.org/story/26/05/19/0021214/playstation-exclusives-arent-coming-to-pc-anymore?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [PlayStation Exclusives Aren&apos;t Coming To PC Anymore](https://games.slashdot.org/story/26/05/19/0021214/playstation-exclusives-arent-coming-to-pc-anymore?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-19, 02:46:09](https://lobste.rs/s/q1m7cr/spork_posix_spawn_you_can_use_as_fork) - [Spork: A posix_spawn you can use as a fork](https://dl.acm.org/doi/pdf/10.1145/3713082.3730396)
* [2026-05-18, 23:22:00](https://soylentnews.org/article.pl?sid=26/05/17/144228&amp;from=rss) - [Huge Landslide Created a 500-Meter-High Tsunami in a Major Tourist Area](https://soylentnews.org/article.pl?sid=26/05/17/144228&amp;from=rss)
* [2026-05-18, 23:04:25](https://lobste.rs/s/5pjoom/introducing_casuarina_linux_glibc_based) - [Introducing Casuarina Linux: A glibc-Based Chimera Linux Derivative](https://casuarina.org/news/introducing-casuarina-linux/)
* [2026-05-18, 23:00:00](https://news.slashdot.org/story/26/05/18/1952255/fbi-wants-to-buy-nationwide-access-to-license-plate-readers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FBI Wants to Buy Nationwide Access to License Plate Readers](https://news.slashdot.org/story/26/05/18/1952255/fbi-wants-to-buy-nationwide-access-to-license-plate-readers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-18, 22:24:09](https://lobste.rs/s/cjwt5c/comprehensive_response_bambu_s_agplv3) - [Comprehensive Response to Bambu&apos;s AGPLv3 Violations](https://sfconservancy.org/news/2026/may/18/bambu-studio-3d-printer-agpl-violation-response/)
* [2026-05-18, 22:00:00](https://it.slashdot.org/story/26/05/18/1946245/new-windows-miniplasma-zero-day-exploit-gives-system-access-poc-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Windows &apos;MiniPlasma&apos; Zero-Day Exploit Gives SYSTEM Access, PoC Released](https://it.slashdot.org/story/26/05/18/1946245/new-windows-miniplasma-zero-day-exploit-gives-system-access-poc-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-18, 21:15:33](https://lobste.rs/s/i2szle/just_say_no_engineer_was_zirp_phenomenon) - [The just-say-no engineer was a ZIRP phenomenon](https://www.seangoedecke.com/the-just-say-no-engineer-was-a-zirp-phenomenon/)
* [2026-05-18, 21:00:00](https://yro.slashdot.org/story/26/05/18/196230/nintendo-tries-to-obtain-touchscreen-specific-patent-on-monster-capturing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nintendo Tries To Obtain Touchscreen-Specific Patent On Monster Capturing](https://yro.slashdot.org/story/26/05/18/196230/nintendo-tries-to-obtain-touchscreen-specific-patent-on-monster-capturing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-18, 18:37:00](https://soylentnews.org/article.pl?sid=26/05/17/1359222&amp;from=rss) - [What Will It Take to Modernize the US Power Grid?](https://soylentnews.org/article.pl?sid=26/05/17/1359222&amp;from=rss)
* [2026-05-18, 18:29:26](https://lobste.rs/s/0wbazw/haiku_os_runs_on_m1_macs_now) - [Haiku OS runs on M1 Macs now](https://www.osnews.com/story/144985/haiku-os-runs-on-m1-macs-now/)
* [2026-05-18, 18:28:13](https://lobste.rs/s/xckxda/quiet_renovation_at_bitwarden) - [The Quiet Renovation at Bitwarden](https://blog.ppb1701.com/the-quiet-renovation-at-bitwarden)
* [2026-05-18, 17:45:02](https://news.ycombinator.com/item?id=48182872) - [Hanoi’s humble beer glass and the memory of a nation](https://sundaylongread.com/2026/05/15/hanois-humble-beer-glass-and-the-memory-of-a-nation/)
* [2026-05-18, 13:51:00](https://soylentnews.org/article.pl?sid=26/05/17/1346233&amp;from=rss) - [China Court Rules Against Job Cut From AI](https://soylentnews.org/article.pl?sid=26/05/17/1346233&amp;from=rss)
* [2026-05-18, 13:00:24](https://news.ycombinator.com/item?id=48179172) - [Unusual uses of OEIS sequences on GitHub](https://www.jeremykun.com/shortform/2026-04-13-0700/)
* [2026-05-18, 11:51:50](https://news.ycombinator.com/item?id=48178390) - [Lisp in Web-Based Applications (2001)](https://sep.turbifycdn.com/ty/cdn/paulgraham/bbnexcerpts.txt)
* [2026-05-18, 09:40:51](https://news.ycombinator.com/item?id=48177300) - [The foundations of a provably secure operating system (PSOS) (1979) [pdf]](http://www.csl.sri.com/users/neumann/psos.pdf)
* [2026-05-18, 09:05:00](https://soylentnews.org/article.pl?sid=26/05/17/1229217&amp;from=rss) - [The Context Window Has Been Shattered: Subquadratic Debuts a 12-Million-Token Window](https://soylentnews.org/article.pl?sid=26/05/17/1229217&amp;from=rss)
* [2026-05-18, 07:12:40](https://news.ycombinator.com/item?id=48176384) - [The Mercury logic programming system](https://github.com/Mercury-Language/mercury)
* [2026-05-18, 05:01:19](https://news.ycombinator.com/item?id=48175748) - [The two oldest printing presses](https://museumplantinmoretus.be/en/worlds-two-oldest-printing-presses)
* [2026-05-18, 04:24:00](https://soylentnews.org/article.pl?sid=26/05/17/0153208&amp;from=rss) - [SteamOS Scared Microsoft Into Making Windows Less Like Windows](https://soylentnews.org/article.pl?sid=26/05/17/0153208&amp;from=rss)
* [2026-05-17, 23:37:00](https://soylentnews.org/article.pl?sid=26/05/17/0150209&amp;from=rss) - [Scientists May Have Discovered How Parkinson’s Disease Spreads Through the Brain](https://soylentnews.org/article.pl?sid=26/05/17/0150209&amp;from=rss)
* [2026-05-17, 19:21:09](https://news.ycombinator.com/item?id=48172320) - [Growing Neural Cellular Automata](https://distill.pub/2020/growing-ca/)
* [2026-05-17, 18:56:00](https://soylentnews.org/article.pl?sid=26/05/17/0147228&amp;from=rss) - [Removing the Modem and GPS From My 2024 RAV4 Hybrid](https://soylentnews.org/article.pl?sid=26/05/17/0147228&amp;from=rss)
* [2026-05-17, 15:52:21](https://news.ycombinator.com/item?id=48170007) - [Intro to TLA+ for the LLM Era: Prompt Your Way to Victory](https://emptysqua.re/blog/intro-to-tla-plus-for-the-llm-era/)
* [2026-05-17, 15:22:10](https://news.ycombinator.com/item?id=48169736) - [Tool mapping 90 companies in the photonics and CPO supply chain](https://leonardo-boquillon.com/photonic-cop-supply-chain)
* [2026-05-17, 14:03:00](https://soylentnews.org/article.pl?sid=26/05/17/0146201&amp;from=rss) - [A Security Researcher Says Microsoft Secretly Built a Backdoor into BitLocker](https://soylentnews.org/article.pl?sid=26/05/17/0146201&amp;from=rss)
* [2026-05-17, 09:23:00](https://soylentnews.org/article.pl?sid=26/05/16/0314220&amp;from=rss) - [EVs Cause Honda’s First Ever Money-Losing Year in the US](https://soylentnews.org/article.pl?sid=26/05/16/0314220&amp;from=rss)
* [2026-05-17, 04:43:00](https://soylentnews.org/article.pl?sid=26/05/16/0015203&amp;from=rss) - [Here&apos;s Why European Cars Can&apos;t Use American Engine Oil](https://soylentnews.org/article.pl?sid=26/05/16/0015203&amp;from=rss)
* [2026-05-16, 23:51:00](https://soylentnews.org/article.pl?sid=26/05/16/0013231&amp;from=rss) - [AISLE Discovers CVE-2026-42511: a 21-Year-Old FreeBSD Remote Command Execution Vulnerability](https://soylentnews.org/article.pl?sid=26/05/16/0013231&amp;from=rss)
* [2026-05-16, 19:17:00](https://soylentnews.org/article.pl?sid=26/05/16/009242&amp;from=rss) - [HP Stuffed a PC Into a Keyboard. We Took it for a Spin](https://soylentnews.org/article.pl?sid=26/05/16/009242&amp;from=rss)
* [2026-05-16, 14:28:00](https://soylentnews.org/article.pl?sid=26/05/16/006216&amp;from=rss) - [1,300-Year-Old Secret: Lost Medieval Manuscript Finally Found Hiding in Plain Sight](https://soylentnews.org/article.pl?sid=26/05/16/006216&amp;from=rss)
* [2026-05-16, 09:40:00](https://soylentnews.org/article.pl?sid=26/05/15/1911234&amp;from=rss) - [Open Source Package With 1 Million Monthly Downloads Stole User Credentials](https://soylentnews.org/article.pl?sid=26/05/15/1911234&amp;from=rss)
* [2026-05-16, 04:58:00](https://soylentnews.org/article.pl?sid=26/05/15/199214&amp;from=rss) - [NASA Pushes Mars Helicopter Rotors Past the Speed of Sound for the First Time Ever](https://soylentnews.org/article.pl?sid=26/05/15/199214&amp;from=rss)
* [2026-05-16, 00:12:00](https://soylentnews.org/article.pl?sid=26/05/15/197229&amp;from=rss) - [Tails Linux 7.7.3 Emergency Release Fixes Dirty Frag Vulnerability](https://soylentnews.org/article.pl?sid=26/05/15/197229&amp;from=rss)
