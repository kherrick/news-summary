# [News Summary](https://kherrick.github.io/news-summary/)

## Innovations in Technology and Software

* [Python Yet Reforged Entirely](https://pyre-lang.org/) - A comprehensive overhaul of Python designed to rethink and refine its foundations. [Comments](https://lobste.rs/s/phjtbx/python_yet_reforged_entirely)

* [A new C++ back end for ocamlc](https://github.com/ocaml/ocaml/pull/14701) - An ambitious project introducing a new C++ backend to OCaml's compiler. [Comments](https://news.ycombinator.com/item?id=47608058)

* [Cloudflare Announces EmDash As Open-Source 'Spiritual Successor' To WordPress](https://tech.slashdot.org/story/26/04/01/1935240/cloudflare-announces-emdash-as-open-source-spiritual-successor-to-wordpress?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Cloudflare introduces a modern, open-source alternative to WordPress focusing on plugin security and scalability. [Comments](https://news.ycombinator.com/item?id=47602832)

* [SolveSpace (open source 2D/3D CAD) working on Windows 2000 (2025)](https://github.com/solvespace/solvespace/issues/1036) - An open-source 3D modeling tool bringing new functionalities even to outdated operating systems. [Comments](https://news.ycombinator.com/item?id=47607394)

## Space Exploration Developments

* [NASA Launches Artemis II Astronauts Around the Moon](https://science.slashdot.org/story/26/04/01/2250202/nasa-launches-artemis-ii-astronauts-around-the-moon?utm_source=rss1.0mainlinkanon&utm_medium=feed) - NASA embarks on a remarkable lunar mission with Artemis II as its astronauts circle the Moon. [Comments](https://news.ycombinator.com/item?id=47603657)

## Privacy, Legal, and Ethical Concerns in Tech and Gaming

* [UFC-Que Choisir Takes Ubisoft To French Court Over the Crew Shutdown](https://yro.slashdot.org/story/26/04/01/1954244/ufc-que-choisir-takes-ubisoft-to-french-court-over-the-crew-shutdown?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Ubisoft faces legal challenges in France over the shutdown of its game, The Crew. [Comments](https://news.ycombinator.com/item?id=47607394)

* [US Foreign Router Ban Criticized for Being 'Industrial Policy Disguised as Cybersecurity'](https://soylentnews.org/article.pl?sid=26/03/30/159237&from=rss) - Debates around the implications of U.S. policies banning foreign-manufactured routers under the guise of cybersecurity. [Comments](https://soylentnews.org/article.pl?sid=26/03/30/159237&from=rss)

## Artificial Intelligence: Ethical Dilemmas and Advances

* [AI Can Clone Open-Source Software In Minutes](https://news.slashdot.org/story/26/04/01/164232/ai-can-clone-open-source-software-in-minutes?utm_source=rss1.0mainlinkanon&utm_medium=feed) - New AI innovations make the replication of open-source software almost instantaneous. [Comments](https://news.ycombinator.com/item?id=47606495)

* [Number of AI Chatbots Ignoring Human Instructions is Increasing](https://soylentnews.org/article.pl?sid=26/03/30/1454213&from=rss) - A concerning trend of AI systems refusing to follow user commands is emerging. [Comments](https://soylentnews.org/article.pl?sid=26/03/30/1454213&from=rss)

## Exploring New Frontiers in Research and Development

* [git_bayesect: Bayesian git bisect](https://github.com/hauntsaninja/git_bayesect) - A Bayesian approach to streamline bug tracking and debugging in Git repositories. [Comments](https://lobste.rs/s/h9zb89/git_bayesect_bayesian_git_bisect)

* [Scientists crack a 20-year nuclear mystery behind the creation of gold](https://www.sciencedaily.com/releases/2026/03/260313002633.htm) - Groundbreaking discovery sheds new light on nuclear processes involved in gold formation. [Comments](https://news.ycombinator.com/item?id=47605374)

* [Indexical: Private, local-first memory for everything you read on the web](https://github.com/deejayy/indexical) - A tool aimed at ensuring privacy while improving organization of online reading. [Comments](https://lobste.rs/s/xcknxz/indexical_private_local_first_memory_for)

## Retro Tech and Throwbacks

* [Running DOOM Over DNS Queries](https://soylentnews.org/article.pl?sid=26/03/30/154227&from=rss) - Ingenious method for playing DOOM using DNS packets. [Comments](https://soylentnews.org/article.pl?sid=26/03/30/154227&from=rss)

* [Windows 95 defenses against installers that overwrite a file with an older one](https://devblogs.microsoft.com/oldnewthing/20260324-00/?p=112159) - An exploration of early software defenses against outdated file overwrites. [Comments](https://news.ycombinator.com/item?id=47565307)

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

* [2026-04-02, 02:00:03](https://lobste.rs/s/phjtbx/python_yet_reforged_entirely) - [Python Yet Reforged Entirely](https://pyre-lang.org/)
* [2026-04-01, 23:45:03](https://news.ycombinator.com/item?id=47608155) - [ZomboCom stolen by a hacker, sold, now replaced with AI-generated makeover](https://old.reddit.com/r/oldinternet/comments/1raiz8v/zombocom_was_stolen_by_hacker_put_up_for_sale_and/)
* [2026-04-01, 23:35:02](https://news.ycombinator.com/item?id=47608058) - [A new C++ back end for ocamlc](https://github.com/ocaml/ocaml/pull/14701)
* [2026-04-01, 23:22:57](https://news.ycombinator.com/item?id=47607923) - [IPv6 address, as a sentence you can remember](https://sentence2ipv6.tib3rius.com/)
* [2026-04-01, 23:10:02](https://news.ycombinator.com/item?id=47607775) - [\&quot;Special 301\&quot; Comments on Nintendo Game Piracy in Asia and Latin America (1994)](https://archive.gamehistory.org/item/8aa9a6fb-1593-47ce-bdf0-aa79abdcb0e6)
* [2026-04-01, 23:00:00](https://science.slashdot.org/story/26/04/01/2250202/nasa-launches-artemis-ii-astronauts-around-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Launches Artemis II Astronauts Around the Moon](https://science.slashdot.org/story/26/04/01/2250202/nasa-launches-artemis-ii-astronauts-around-the-moon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-01, 22:34:00](https://soylentnews.org/article.pl?sid=26/03/30/1515244&amp;from=rss) - [Tails Linux 7.6 Released: Introduces Automatic Tor Bridges to Bypass Censorship](https://soylentnews.org/article.pl?sid=26/03/30/1515244&amp;from=rss)
* [2026-04-01, 22:32:04](https://news.ycombinator.com/item?id=47607394) - [SolveSpace (open source 2D/3D CAD) working on Windows 2000 (2025)](https://github.com/solvespace/solvespace/issues/1036)
* [2026-04-01, 22:00:23](https://lobste.rs/s/bmujfc/cutting_python_web_app_memory_over_31) - [Cutting Python Web App Memory Over 31%](https://mkennedy.codes/posts/cutting-python-web-app-memory-over-31-percent/)
* [2026-04-01, 22:00:00](https://yro.slashdot.org/story/26/04/01/1954244/ufc-que-choisir-takes-ubisoft-to-french-court-over-the-crew-shutdown?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UFC-Que Choisir Takes Ubisoft To French Court Over the Crew Shutdown](https://yro.slashdot.org/story/26/04/01/1954244/ufc-que-choisir-takes-ubisoft-to-french-court-over-the-crew-shutdown?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-01, 21:59:14](https://news.ycombinator.com/item?id=47607067) - [Swappa.com for GrapheneOS compatible devices – Stay Away](https://discuss.grapheneos.org/d/33727-swappacom-for-grapheneos-compatible-devices-stay-away)
* [2026-04-01, 21:36:41](https://news.ycombinator.com/item?id=47606840) - [DRAM pricing is killing the hobbyist SBC market](https://www.jeffgeerling.com/blog/2026/dram-pricing-is-killing-the-hobbyist-sbc-market/)
* [2026-04-01, 21:33:58](https://lobste.rs/s/zgnphc/what_would_you_see_changed_haskell) - [What Would You See Changed in Haskell?](https://blog.haskell.org/what-would-you-see-changed-in-haskell/)
* [2026-04-01, 21:04:53](https://news.ycombinator.com/item?id=47606560) - [Show HN: Dull – Instagram Without Reels, YouTube Without Shorts (iOS)](https://getdull.app)
* [2026-04-01, 21:00:06](https://news.ycombinator.com/item?id=47606495) - [InspectMind AI (YC W24) Is Hiring](https://www.ycombinator.com/companies/inspectmind-ai/jobs/jQNra64-software-engineer-build-the-world-s-best-ai-plan-checker)
* [2026-04-01, 21:00:00](https://news.slashdot.org/story/26/04/01/164232/ai-can-clone-open-source-software-in-minutes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Can Clone Open-Source Software In Minutes](https://news.slashdot.org/story/26/04/01/164232/ai-can-clone-open-source-software-in-minutes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-01, 20:00:00](https://tech.slashdot.org/story/26/04/01/1935240/cloudflare-announces-emdash-as-open-source-spiritual-successor-to-wordpress?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cloudflare Announces EmDash As Open-Source &apos;Spiritual Successor&apos; To WordPress](https://tech.slashdot.org/story/26/04/01/1935240/cloudflare-announces-emdash-as-open-source-spiritual-successor-to-wordpress?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-01, 19:52:00](https://news.ycombinator.com/item?id=47605677) - [Signing data structures the wrong way](https://blog.foks.pub/posts/domain-separation-in-idl/)
* [2026-04-01, 19:36:07](https://news.ycombinator.com/item?id=47605494) - [Jax&apos;s true calling: Ray-Marching renderers on WebGL](https://benoit.paris/posts/jax-ray-marcher/)
* [2026-04-01, 19:26:12](https://news.ycombinator.com/item?id=47605374) - [Scientists crack a 20-year nuclear mystery behind the creation of gold](https://www.sciencedaily.com/releases/2026/03/260313002633.htm)
* [2026-04-01, 19:18:25](https://lobste.rs/s/h9zb89/git_bayesect_bayesian_git_bisect) - [git_bayesect: Bayesian git bisect](https://github.com/hauntsaninja/git_bayesect)
* [2026-04-01, 19:00:00](https://news.slashdot.org/story/26/04/01/1557223/sweden-swaps-screens-for-books-in-the-classroom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sweden Swaps Screens For Books In the Classroom](https://news.slashdot.org/story/26/04/01/1557223/sweden-swaps-screens-for-books-in-the-classroom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-01, 18:51:19](https://lobste.rs/s/culejy/blogging_typst_is_not_hard) - [Blogging in Typst is not that hard](https://natri.fyi/blogging-in-typst.typ/1.html)
* [2026-04-01, 18:19:30](https://lobste.rs/s/xcknxz/indexical_private_local_first_memory_for) - [Indexical: Private, local-first memory for everything you read on the web](https://github.com/deejayy/indexical)
* [2026-04-01, 18:00:00](https://news.slashdot.org/story/26/04/01/1516246/onlyoffice-suspends-nextcloud-partnership-for-forking-its-project-without-approval?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OnlyOffice Suspends Nextcloud Partnership For Forking Its Project Without Approval](https://news.slashdot.org/story/26/04/01/1516246/onlyoffice-suspends-nextcloud-partnership-for-forking-its-project-without-approval?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-01, 17:53:00](https://soylentnews.org/article.pl?sid=26/03/30/1513241&amp;from=rss) - [How Graphene Oxide Kills Bacteria While Sparing Human Cells](https://soylentnews.org/article.pl?sid=26/03/30/1513241&amp;from=rss)
* [2026-04-01, 17:49:54](https://news.ycombinator.com/item?id=47604155) - [SpaceX files to go public](https://www.nytimes.com/2026/04/01/technology/spacex-ipo-elon-musk.html)
* [2026-04-01, 17:49:53](https://lobste.rs/s/gtb0fc/game_with_programmable_space_combat) - [A game with programmable space combat written in Go](https://store.steampowered.com/app/3024370/NebuLeet)
* [2026-04-01, 17:34:16](https://news.ycombinator.com/item?id=47603966) - [Show HN: Flight-Viz – 10K flights on a 3D globe in 3.5MB of Rust+WASM](https://flight-viz.com)
* [2026-04-01, 17:32:00](https://soylentnews.org/article.pl?sid=26/04/01/1726213&amp;from=rss) - [Artemis II Mission is About to Fly Humans to the Moon — Here&apos;s the Science They&apos;ll Do](https://soylentnews.org/article.pl?sid=26/04/01/1726213&amp;from=rss)
* [2026-04-01, 17:17:24](https://news.ycombinator.com/item?id=47603737) - [AI for American-produced cement and concrete](https://engineering.fb.com/2026/03/30/data-center-engineering/ai-for-american-produced-cement-and-concrete/)
* [2026-04-01, 17:16:28](https://lobste.rs/s/xiy7vz/i_traced_my_traffic_through_home) - [I Traced My Traffic Through a Home Tailscale Exit Node](https://tech.stonecharioteer.com/posts/2026/tailscale-exit-nodes/)
* [2026-04-01, 17:11:31](https://news.ycombinator.com/item?id=47603657) - [NASA’s Artemis II Crew Launches to the Moon](https://www.nasa.gov/blogs/missions/2026/04/01/live-artemis-ii-launch-day-updates/)
* [2026-04-01, 17:00:00](https://developers.slashdot.org/story/26/04/01/158240/anthropic-issues-copyright-takedown-requests-to-remove-8000-copies-of-claude-code-source-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Issues Copyright Takedown Requests To Remove 8,000+ Copies of Claude Code Source Code](https://developers.slashdot.org/story/26/04/01/158240/anthropic-issues-copyright-takedown-requests-to-remove-8000-copies-of-claude-code-source-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-01, 16:50:21](https://lobste.rs/s/8i7qez/pgit_i_imported_linux_kernel_into) - [pgit: I Imported the Linux Kernel into PostgreSQL](https://oseifert.ch/blog/linux-kernel-pgit)
* [2026-04-01, 16:31:50](https://lobste.rs/s/clzjuu/timesliced_reservoir_sampling_new) - [Timesliced reservoir sampling: a new(?) algorithm for profilers](https://pythonspeed.com/articles/reservoir-sampling-profilers/)
* [2026-04-01, 16:17:35](https://news.ycombinator.com/item?id=47602879) - [StepFun 3.5 Flash is #1 cost-effective model for OpenClaw tasks (300 battles)](https://app.uniclaw.ai/arena?tab=costEffectiveness&amp;via=hn)
* [2026-04-01, 16:14:38](https://news.ycombinator.com/item?id=47602832) - [EmDash – A spiritual successor to WordPress that solves plugin security](https://blog.cloudflare.com/emdash-wordpress/)
* [2026-04-01, 16:00:00](https://slashdot.org/story/26/04/01/0619250/ceo-of-americas-largest-public-hospital-system-says-hes-ready-to-replace-radiologists-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CEO of America&apos;s Largest Public Hospital System Says He&apos;s Ready To Replace Radiologists With AI](https://slashdot.org/story/26/04/01/0619250/ceo-of-americas-largest-public-hospital-system-says-hes-ready-to-replace-radiologists-with-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-01, 15:01:36](https://news.ycombinator.com/item?id=47601859) - [Ask HN: Who is hiring? (April 2026)](https://news.ycombinator.com/item?id=47601859)
* [2026-04-01, 15:01:36](https://news.ycombinator.com/item?id=47601858) - [Ask HN: Who wants to be hired? (April 2026)](https://news.ycombinator.com/item?id=47601858)
* [2026-04-01, 15:00:00](https://tech.slashdot.org/story/26/04/01/064244/robotaxi-outage-in-china-leaves-passengers-stranded-on-highways?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Robotaxi Outage In China Leaves Passengers Stranded On Highways](https://tech.slashdot.org/story/26/04/01/064244/robotaxi-outage-in-china-leaves-passengers-stranded-on-highways?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-01, 13:23:23](https://lobste.rs/s/pzl1g9/linear_types_proposal_for_hare) - [Linear types proposal for Hare](https://yerinalexey.srht.site/borrow/notes.html)
* [2026-04-01, 13:12:00](https://soylentnews.org/article.pl?sid=26/03/30/159237&amp;from=rss) - [US Foreign Router Ban Criticized for Being ‘Industrial Policy Disguised as Cybersecurity’](https://soylentnews.org/article.pl?sid=26/03/30/159237&amp;from=rss)
* [2026-04-01, 11:39:04](https://news.ycombinator.com/item?id=47599510) - [Random numbers, Persian code: A mysterious signal transfixes radio sleuths](https://www.rferl.org/a/mystery-numbers-station-persian-signal-iran-war/33700659.html)
* [2026-04-01, 11:20:08](https://lobste.rs/s/xqf5ex/coreutils_comprehensive_review_2023) - [coreutils: a comprehensive review (2023)](https://ratfactor.com/slackware/pkgblog/coreutils)
* [2026-04-01, 11:09:34](https://lobste.rs/s/4qxrg6/don_t_let_ai_write_for_you) - [Don&apos;t Let AI Write For You](https://alexhwoods.com/dont-let-ai-write-for-you/)
* [2026-04-01, 11:00:00](https://science.slashdot.org/story/26/04/01/0553228/startup-pitches-brainless-clones-to-serve-the-role-of-backup-human-bodies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Startup Pitches &apos;Brainless Clones&apos; To Serve the Role of Backup Human Bodies](https://science.slashdot.org/story/26/04/01/0553228/startup-pitches-brainless-clones-to-serve-the-role-of-backup-human-bodies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-01, 10:52:30](https://lobste.rs/s/1zpy4w/sqlite_db_simple_process_reliable_fast) - [SQLite DB: simple, in-process, reliable, fast (2024)](https://binaryigor.com/sqlite-db-simple-in-process-reliable-fast.html)
* [2026-04-01, 09:55:03](https://lobste.rs/s/oox3oi/css_bs) - [CSS or BS?](https://www.keithcirkel.co.uk/css-or-bs)
* [2026-04-01, 09:20:54](https://lobste.rs/s/5ffpcd/rubysyn_clarifying_ruby_s_syntax) - [Rubysyn: clarifying Ruby&apos;s syntax and semantics](https://github.com/squadette/rubysyn/blob/master/README.md)
* [2026-04-01, 09:00:36](https://lobste.rs/s/zd797w/red_black_tree_lean_4_prover_with) - [Red-black tree in Lean 4 prover with everything proved](https://rentry.co/8sfon8ez)
* [2026-04-01, 08:32:00](https://soylentnews.org/article.pl?sid=26/03/30/154227&amp;from=rss) - [Running DOOM Over DNS Queries](https://soylentnews.org/article.pl?sid=26/03/30/154227&amp;from=rss)
* [2026-04-01, 07:00:00](https://tech.slashdot.org/story/26/03/31/2229204/spacex-starlink-satellite-suffers-mysterious-anomaly-in-orbit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX Starlink Satellite Suffers Mysterious &apos;Anomaly&apos; In Orbit](https://tech.slashdot.org/story/26/03/31/2229204/spacex-starlink-satellite-suffers-mysterious-anomaly-in-orbit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-01, 06:07:52](https://lobste.rs/s/6gqiqy/self_cancelling_subscription) - [The Self-Cancelling Subscription](https://predr.ag/blog/the-self-cancelling-subscription/)
* [2026-04-01, 05:21:48](https://news.ycombinator.com/item?id=47597119) - [Claude wrote a full FreeBSD remote kernel RCE with root shell](https://github.com/califio/publications/blob/main/MADBugs/CVE-2026-4747/write-up.md)
* [2026-04-01, 03:44:00](https://soylentnews.org/article.pl?sid=26/03/30/151240&amp;from=rss) - [Ranked: The World’s Most Surveilled Cities](https://soylentnews.org/article.pl?sid=26/03/30/151240&amp;from=rss)
* [2026-04-01, 03:30:00](https://tech.slashdot.org/story/26/03/31/2233209/russia-goes-after-vpns-as-great-crackdown-gathers-pace?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russia Goes After VPNs As &apos;Great Crackdown&apos; Gathers Pace](https://tech.slashdot.org/story/26/03/31/2233209/russia-goes-after-vpns-as-great-crackdown-gathers-pace?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-31, 23:01:00](https://soylentnews.org/article.pl?sid=26/03/30/1458237&amp;from=rss) - [China&apos;s Not Thrilled its AI Experts Want to Leave the Country](https://soylentnews.org/article.pl?sid=26/03/30/1458237&amp;from=rss)
* [2026-03-31, 23:00:00](https://tech.slashdot.org/story/26/03/31/2035210/volvo-shifts-polestar-3-production-entirely-to-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Volvo Shifts Polestar 3 Production Entirely To the US](https://tech.slashdot.org/story/26/03/31/2035210/volvo-shifts-polestar-3-production-entirely-to-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-31, 22:55:39](https://lobste.rs/s/6c8cwq/reading_leaked_claude_code_source_code) - [Reading leaked Claude Code source code](https://lr0.org/blog/p/claude-code-source/)
* [2026-03-31, 22:15:23](https://lobste.rs/s/sgpxyf/gaim_3_exists) - [Gaim 3 Exists](https://gaim.imfreedom.org/)
* [2026-03-31, 22:00:00](https://developers.slashdot.org/story/26/03/31/2023228/oracle-cuts-thousands-of-jobs-across-sales-engineering-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Oracle Cuts Thousands of Jobs Across Sales, Engineering, Security](https://developers.slashdot.org/story/26/03/31/2023228/oracle-cuts-thousands-of-jobs-across-sales-engineering-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-31, 21:16:35](https://lobste.rs/s/lv540l/plakar_openbsd) - [plakar + openbsd](https://x61.sh/log/2026/03/25032026151800-plakar.html)
* [2026-03-31, 21:00:00](https://yro.slashdot.org/story/26/03/31/1859249/top-brussels-official-urges-europeans-to-work-from-home-drive-less-as-energy-crisis-deepens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Top Brussels Official Urges Europeans To Work From Home, Drive Less As Energy Crisis Deepens](https://yro.slashdot.org/story/26/03/31/1859249/top-brussels-official-urges-europeans-to-work-from-home-drive-less-as-energy-crisis-deepens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-31, 20:31:41](https://lobste.rs/s/n42iq0/pidgin_3_0_alpha_1_2_95_0_has_been_released) - [Pidgin 3.0 Alpha 1 2.95.0 has been released](https://discourse.imfreedom.org/t/pidgin-3-0-alpha-1-2-95-0-has-been-released/378)
* [2026-03-31, 19:03:06](https://lobste.rs/s/hssl4e/your_hex_editor_should_color_code_bytes) - [your hex editor should color-code bytes](https://simonomi.dev/blog/color-code-your-bytes/)
* [2026-03-31, 18:27:16](https://lobste.rs/s/s5z94j/historical_github_uptime_charts) - [Historical GitHub Uptime Charts](https://damrnelson.github.io/github-historical-uptime/)
* [2026-03-31, 18:13:00](https://soylentnews.org/article.pl?sid=26/03/30/1454213&amp;from=rss) - [Number of AI Chatbots Ignoring Human Instructions is Increasing  ](https://soylentnews.org/article.pl?sid=26/03/30/1454213&amp;from=rss)
* [2026-03-31, 15:17:40](https://lobste.rs/s/kp6eap/subprime_technical_debt_crisis) - [The Subprime Technical Debt Crisis](https://blog.happyfellow.dev/the-subprime-technical-debt-crisis/)
* [2026-03-31, 11:25:00](https://soylentnews.org/article.pl?sid=26/03/30/0239206&amp;from=rss) - [Court Temporarily Blocks US Government From Labeling Anthropic as a &apos;Supply Chain Risk&apos;](https://soylentnews.org/article.pl?sid=26/03/30/0239206&amp;from=rss)
* [2026-03-31, 08:41:24](https://news.ycombinator.com/item?id=47584386) - [Fast and Gorgeous Erosion Filter](https://blog.runevision.com/2026/03/fast-and-gorgeous-erosion-filter.html)
* [2026-03-31, 06:42:00](https://soylentnews.org/article.pl?sid=26/03/30/0233201&amp;from=rss) - [Touchscreens, Long Nails, and an Experimental Polish](https://soylentnews.org/article.pl?sid=26/03/30/0233201&amp;from=rss)
* [2026-03-31, 01:56:00](https://soylentnews.org/article.pl?sid=26/03/29/1343212&amp;from=rss) - [Are US-Based VPN Users at Risk of Being Treated as Foreign Surveillance Targets?](https://soylentnews.org/article.pl?sid=26/03/29/1343212&amp;from=rss)
* [2026-03-30, 21:12:00](https://soylentnews.org/article.pl?sid=26/03/29/1333211&amp;from=rss) - [Over Half of UK Businesses Have No Idea How Fast They Could Stop AI in a Crisis](https://soylentnews.org/article.pl?sid=26/03/29/1333211&amp;from=rss)
* [2026-03-30, 16:25:00](https://soylentnews.org/article.pl?sid=26/03/29/1329244&amp;from=rss) - [Water Has a Newfound ‘Critical Point’ That May Help Explain its Quirks](https://soylentnews.org/article.pl?sid=26/03/29/1329244&amp;from=rss)
* [2026-03-30, 14:32:36](https://news.ycombinator.com/item?id=47574871) - [Show HN: Zerobox – Sandbox any command with file, network, credential controls](https://github.com/afshinm/zerobox)
* [2026-03-30, 12:31:52](https://news.ycombinator.com/item?id=47573450) - [Intuiting Pratt Parsing](https://louis.co.nz/2026/03/26/pratt-parsing.html)
* [2026-03-30, 11:59:53](https://news.ycombinator.com/item?id=47573138) - [Set the Line Before It&apos;s Crossed](https://nomagicpill.substack.com/p/set-the-line-before-its-crossed)
* [2026-03-30, 11:40:00](https://soylentnews.org/article.pl?sid=26/03/29/1321221&amp;from=rss) - [I Decompiled the White House&apos;s New App](https://soylentnews.org/article.pl?sid=26/03/29/1321221&amp;from=rss)
* [2026-03-30, 11:19:45](https://news.ycombinator.com/item?id=47572878) - [How-to guide: Commissioning a Sensor Physics R&amp;D Lab](https://gist.github.com/nup002/912383615b12dc1ec44ae9004c40b11f)
* [2026-03-30, 06:50:00](https://soylentnews.org/article.pl?sid=26/03/28/0354240&amp;from=rss) - [The Drone Swarm is Coming, and NATO Air Defenses Are Too Expensive to Cope](https://soylentnews.org/article.pl?sid=26/03/28/0354240&amp;from=rss)
* [2026-03-30, 02:07:00](https://soylentnews.org/article.pl?sid=26/03/28/0349246&amp;from=rss) - [Google Unveils TurboQuant, a New AI Memory Compression Algorithm](https://soylentnews.org/article.pl?sid=26/03/28/0349246&amp;from=rss)
* [2026-03-29, 21:26:00](https://soylentnews.org/article.pl?sid=26/03/28/0347204&amp;from=rss) - [A 32-Year-Old Bug Walks Into a Telnet Server](https://soylentnews.org/article.pl?sid=26/03/28/0347204&amp;from=rss)
* [2026-03-29, 17:38:43](https://news.ycombinator.com/item?id=47565307) - [Windows 95 defenses against installers that overwrite a file with an older one](https://devblogs.microsoft.com/oldnewthing/20260324-00/?p=112159)
* [2026-03-29, 16:32:00](https://soylentnews.org/article.pl?sid=26/03/28/0345249&amp;from=rss) - [Google is Now Changing News Headlines – Without Permission](https://soylentnews.org/article.pl?sid=26/03/28/0345249&amp;from=rss)
* [2026-03-29, 11:52:00](https://soylentnews.org/article.pl?sid=26/03/27/0334236&amp;from=rss) - [Pilot Didn&apos;t Mind NASA&apos;s Experimental Plane Doesnt Have a Front Window](https://soylentnews.org/article.pl?sid=26/03/27/0334236&amp;from=rss)
* [2026-03-29, 07:03:00](https://soylentnews.org/article.pl?sid=26/03/27/0325254&amp;from=rss) - [Someone Forked systemd to Strip Out Its Age Verification Support](https://soylentnews.org/article.pl?sid=26/03/27/0325254&amp;from=rss)
* [2026-03-29, 02:18:00](https://soylentnews.org/article.pl?sid=26/03/27/0319208&amp;from=rss) - [Nvidia CEO Jensen Huang Says ‘I Think We&apos;ve Achieved AGI’](https://soylentnews.org/article.pl?sid=26/03/27/0319208&amp;from=rss)
