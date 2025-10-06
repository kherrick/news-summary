# [News Summary](https://kherrick.github.io/news-summary/)

## Cybersecurity and Cloud Vulnerabilities

* [Covert Eavesdropping Through Computer Mice](https://sites.google.com/view/mic-e-mouse) - Researchers demonstrate how computer mouse sensors can be exploited for eavesdropping through surface vibrations. ([Comments](https://news.ycombinator.com/item?id=45486825))

* [NIRS fire destroys [South Korean] government&apos;s cloud storage system, no backups available](https://koreajoongangdaily.joins.com/news/2025-10-01/national/socialAffairs/NIRS-fire-destroys-governments-cloud-storage-system-no-backups-available/2412936) - A catastrophic fire destroys the primary cloud storage of South Korea’s government with no backups in place, highlighting critical risks in data security. ([Comments](https://lobste.rs/s/zo5arc/nirs_fire_destroys_south_korean))

## Ethics and AI

* [Fake AI-Generated Actress Gets Agent - and a Very Angry Reaction from (Human) Actors Union](https://entertainment.slashdot.org/story/25/10/06/009212/fake-ai-generated-actress-gets-agent---and-a-very-angry-reaction-from-human-actors-union?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - An AI-generated actress signing with a talent agent sparks backlash from human actors and their union. ([Comments](https://entertainment.slashdot.org/story/25/10/06/009212/fake-ai-generated-actress-gets-agent---and-a-very-angry-reaction-from-human-actors-union?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Sustainability and Renewable Energy

* [Germany outfitted half a million balconies with solar panels](https://grist.org/buildings/how-germany-outfitted-half-a-million-balconies-with-solar-panels/) - Germany achieves a major milestone by equipping half a million apartment balconies with solar panels to accelerate renewable energy adoption. ([Comments](https://news.ycombinator.com/item?id=45485806))

## Technological Advancements

* [Generative AI&apos;s Energy Needs Are Reshaping Our World](https://spectrum.ieee.org/ai-energy-use) - The high energy demands of generative AI applications are impacting global infrastructures and energy policies. ([Comments](https://news.ycombinator.com/item?id=45486031))

* [First Evidence That Plastic Nanoparticles Can Accumulate in Edible Parts of Vegetables](https://news.slashdot.org/story/25/10/05/2032200/first-evidence-that-plastic-nanoparticles-can-accumulate-in-edible-parts-of-vegetables?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Alarming research finds detectable levels of plastic nanoparticles in the edible parts of vegetables, raising food safety concerns. ([Comments](https://news.slashdot.org/story/25/10/05/2032200/first-evidence-that-plastic-nanoparticles-can-accumulate-in-edible-parts-of-vegetables?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Historic First: Scientists Turn Light Into Supersolid](https://soylentnews.org/article.pl?sid=25/10/04/1856221&amp;from=rss) - Scientists achieve a groundbreaking experimental milestone by transforming light into a supersolid state. ([Comments](https://soylentnews.org/article.pl?sid=25/10/04/1856221&amp;from=rss))

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

* [2025-10-06, 01:34:31](https://news.ycombinator.com/item?id=45486825) - [Covert Eavesdropping Through Computer Mice](https://sites.google.com/view/mic-e-mouse)
* [2025-10-06, 01:12:00](https://developers.slashdot.org/story/25/10/05/2318202/are-software-registries-inherently-insecure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Are Software Registries Inherently Insecure?](https://developers.slashdot.org/story/25/10/05/2318202/are-software-registries-inherently-insecure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-06, 00:42:16](https://lobste.rs/s/zo5arc/nirs_fire_destroys_south_korean) - [NIRS fire destroys [South Korean] government&apos;s cloud storage system, no backups available](https://koreajoongangdaily.joins.com/news/2025-10-01/national/socialAffairs/NIRS-fire-destroys-governments-cloud-storage-system-no-backups-available/2412936)
* [2025-10-06, 00:12:00](https://entertainment.slashdot.org/story/25/10/06/009212/fake-ai-generated-actress-gets-agent---and-a-very-angry-reaction-from-human-actors-union?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fake AI-Generated Actress Gets Agent - and a Very Angry Reaction from (Human) Actors Union](https://entertainment.slashdot.org/story/25/10/06/009212/fake-ai-generated-actress-gets-agent---and-a-very-angry-reaction-from-human-actors-union?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-05, 23:51:47](https://news.ycombinator.com/item?id=45486306) - [Rule-Based Expert Systems: The Mycin Experiments (1984)](https://www.shortliffe.net/Buchanan-Shortliffe-1984/MYCIN%20Book.htm)
* [2025-10-05, 23:00:23](https://news.ycombinator.com/item?id=45486031) - [Generative AI&apos;s Energy Needs Are Reshaping Our World](https://spectrum.ieee.org/ai-energy-use)
* [2025-10-05, 22:55:00](https://it.slashdot.org/story/25/10/05/2225224/mouse-sensors-can-pick-up-speech-from-surface-vibrations-researchers-show?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mouse Sensors Can Pick Up Speech From Surface Vibrations, Researchers Show](https://it.slashdot.org/story/25/10/05/2225224/mouse-sensors-can-pick-up-speech-from-surface-vibrations-researchers-show?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-05, 22:44:11](https://lobste.rs/s/jx047q/premature_generalization) - [Premature Generalization](https://youtu.be/P5lNzRA8rYI)
* [2025-10-05, 22:43:00](https://soylentnews.org/article.pl?sid=25/10/04/1856221&amp;from=rss) - [Historic First: Scientists Turn Light Into Supersolid](https://soylentnews.org/article.pl?sid=25/10/04/1856221&amp;from=rss)
* [2025-10-05, 22:18:31](https://news.ycombinator.com/item?id=45485806) - [Germany outfitted half a million balconies with solar panels](https://grist.org/buildings/how-germany-outfitted-half-a-million-balconies-with-solar-panels/)
* [2025-10-05, 22:10:15](https://news.ycombinator.com/item?id=45485736) - [Ken Parker, famed luthier, has died](https://kenparkerarchtops.com)
* [2025-10-05, 21:55:00](https://yro.slashdot.org/story/25/10/05/2149250/californias-uber-and-lyft-drivers-get-union-rights?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California&apos;s Uber and Lyft Drivers Get Union Rights](https://yro.slashdot.org/story/25/10/05/2149250/californias-uber-and-lyft-drivers-get-union-rights?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-05, 21:06:29](https://lobste.rs/s/3p1uht/cargo_subspace_make_rust_analyzer_work) - [cargo-subspace: Make rust-analyzer work better with very large cargo workspaces](https://github.com/ethowitz/cargo-subspace)
* [2025-10-05, 21:01:27](https://lobste.rs/s/unhv2p/packing_world_for_longest_lines_sight) - [Packing The World For Longest Lines Of Sight](https://tombh.co.uk/packing-world-lines-of-sight)
* [2025-10-05, 20:55:26](https://news.ycombinator.com/item?id=45485175) - [The death of industrial design and the era of dull electronics](https://hackaday.com/2025/07/23/the-death-of-industrial-design-and-the-era-of-dull-electronics/)
* [2025-10-05, 20:55:00](https://news.slashdot.org/story/25/10/05/2032200/first-evidence-that-plastic-nanoparticles-can-accumulate-in-edible-parts-of-vegetables?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [First Evidence That Plastic Nanoparticles Can Accumulate in Edible Parts of Vegetables](https://news.slashdot.org/story/25/10/05/2032200/first-evidence-that-plastic-nanoparticles-can-accumulate-in-edible-parts-of-vegetables?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-05, 19:55:00](https://news.slashdot.org/story/25/10/05/1953218/cory-doctorow-explains-why-amazon-is-way-past-its-prime?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cory Doctorow Explains Why Amazon is &apos;Way Past Its Prime&apos;](https://news.slashdot.org/story/25/10/05/1953218/cory-doctorow-explains-why-amazon-is-way-past-its-prime?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-05, 19:25:19](https://lobste.rs/s/y3yauw/how_why_easyos_is_different) - [How and why EasyOS is different](https://easyos.org/about/how-and-why-easyos-is-different.html)
* [2025-10-05, 19:09:35](https://news.ycombinator.com/item?id=45484284) - [Toybox: All-in-one Linux command line](https://github.com/landley/toybox)
* [2025-10-05, 18:28:16](https://news.ycombinator.com/item?id=45483924) - [What GPT-OSS leaks about OpenAI&apos;s training data](https://fi-le.net/oss/)
* [2025-10-05, 18:02:00](https://soylentnews.org/politics/article.pl?sid=25/10/04/195256&amp;from=rss) - [Taiwan Pressured to Move 50% of Chip Production to US or Lose Protection](https://soylentnews.org/politics/article.pl?sid=25/10/04/195256&amp;from=rss)
* [2025-10-05, 17:57:23](https://lobste.rs/s/q6c4ur/valuetier_org_some_thoughts_on_llms) - [valuetier.org (and some thoughts on LLMs)](https://ericphanson.com/blog/2025/valuetier.org-and-some-thoughts-on-llms/)
* [2025-10-05, 17:50:17](https://news.ycombinator.com/item?id=45483651) - [Callbacks in C++ using template functors (1994)](http://www.tutok.sk/fastgl/callback.html)
* [2025-10-05, 17:36:20](https://news.ycombinator.com/item?id=45483531) - [Show HN: ut – Rust based CLI utilities for devs and IT](https://github.com/ksdme/ut)
* [2025-10-05, 17:34:00](https://yro.slashdot.org/story/25/10/05/0127200/sam-altman-promises-copyright-holders-more-control-over-soras-character-generation---and-revenue-sharing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sam Altman Promises Copyright Holders More Control Over Sora&apos;s Character Generation - and Revenue Sharing](https://yro.slashdot.org/story/25/10/05/0127200/sam-altman-promises-copyright-holders-more-control-over-soras-character-generation---and-revenue-sharing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-05, 17:20:39](https://news.ycombinator.com/item?id=45483386) - [Fire destroys S. Korean government&apos;s cloud storage system, no backups available](https://koreajoongangdaily.joins.com/news/2025-10-01/national/socialAffairs/NIRS-fire-destroys-governments-cloud-storage-system-no-backups-available/2412936)
* [2025-10-05, 17:11:48](https://lobste.rs/s/dwz05l/temporal_dead_zone_why_typescript) - [The Temporal Dead Zone, or why the TypeScript codebase is littered with var statements](https://vincentrolfs.dev/blog/ts-var)
* [2025-10-05, 17:10:35](https://lobste.rs/s/dckg9i/tesid_textualised_encrypted_sequential) - [TESID: Textualised Encrypted Sequential Identifiers](https://temp.chrismorgan.info/2025-09-17-tesid/)
* [2025-10-05, 17:01:19](https://news.ycombinator.com/item?id=45483205) - [Implicit Actor Critic Coupling via a Supervised Learning Framework for RLVR](https://arxiv.org/abs/2509.02522)
* [2025-10-05, 16:43:08](https://lobste.rs/s/ycveqa/uuidv47_v4_privacy_v7_performance) - [UUIDv47 = v4 privacy + v7 performance](https://github.com/stateless-me/uuidv47)
* [2025-10-05, 16:34:00](https://slashdot.org/story/25/10/05/026207/opera-wants-you-to-pay-1990-a-month-for-its-new-ai-browser?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Opera Wants You To Pay $19.90 a Month for Its New AI Browser](https://slashdot.org/story/25/10/05/026207/opera-wants-you-to-pay-1990-a-month-for-its-new-ai-browser?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-05, 16:03:00](https://soylentnews.org/meta/article.pl?sid=25/10/05/162227&amp;from=rss) - [The Site is Experiencing 50x Problems](https://soylentnews.org/meta/article.pl?sid=25/10/05/162227&amp;from=rss)
* [2025-10-05, 15:59:24](https://lobste.rs/s/nsrig5/announcing_gobolinux_017_01_passing) - [Announcing GoboLinux 017.01 - Passing the Torch](https://gobolinux.org//news/119.html)
* [2025-10-05, 15:54:01](https://news.ycombinator.com/item?id=45482516) - [BYD builds fastest car](https://www.autotrader.co.uk/content/news/byd-builds-world-s-fastest-car)
* [2025-10-05, 15:49:58](https://news.ycombinator.com/item?id=45482467) - [NFS at 40 – Remembering the Sun Microsystems Network File System](https://nfs40.online/)
* [2025-10-05, 15:36:21](https://news.ycombinator.com/item?id=45482333) - [Show HN: ASCII Drawing Board](https://www.delopsu.com/draw.html)
* [2025-10-05, 14:50:47](https://lobste.rs/s/7myscg/exit_feed_best_coders_should_walk_away) - [Exit the Feed: The Best Coders Should Walk Away](https://abner.page/post/exit-the-feed/)
* [2025-10-05, 14:47:13](https://news.ycombinator.com/item?id=45481892) - [The QNX Operating System](https://www.abortretry.fail/p/the-qnx-operating-system)
* [2025-10-05, 14:34:00](https://news.slashdot.org/story/25/10/04/0648215/what-would-happen-if-an-ai-bubble-burst?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Would Happen If an AI Bubble Burst?](https://news.slashdot.org/story/25/10/04/0648215/what-would-happen-if-an-ai-bubble-burst?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-05, 13:33:16](https://lobste.rs/s/tu789k/personal_data_storage_is_idea_whose_time) - [Personal data storage is an idea whose time has come](https://blog.muni.town/personal-data-storage-idea/)
* [2025-10-05, 13:16:00](https://soylentnews.org/article.pl?sid=25/10/04/1858242&amp;from=rss) - [First Wolf-Dog Hybrid Confirmed in Greece](https://soylentnews.org/article.pl?sid=25/10/04/1858242&amp;from=rss)
* [2025-10-05, 13:10:53](https://lobste.rs/s/szoe3m/conventional_commits_considered) - [Conventional Commits considered harmful](https://larr.net/p/cc.html)
* [2025-10-05, 13:07:31](https://lobste.rs/s/nsl5gr/case_for_learned_index_structures) - [The Case for Learned Index Structures](https://dl.acm.org/doi/10.1145/3183713.3196909)
* [2025-10-05, 12:31:26](https://lobste.rs/s/azrzic/86_gb_s_bitpacking_with_arm_simd_single) - [86 GB/s bitpacking with ARM SIMD (single thread)](https://github.com/ashtonsix/perf-portfolio/tree/main/bytepack)
* [2025-10-05, 12:27:11](https://news.ycombinator.com/item?id=45481008) - [86 GB/s bitpacking with ARM SIMD (single thread)](https://github.com/ashtonsix/perf-portfolio/tree/main/bytepack)
* [2025-10-05, 11:34:00](https://slashdot.org/story/25/10/05/0550246/ais-cheerful-apocalyptics-unconcerned-if-ai-defeats-humanity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI&apos;s &apos;Cheerful Apocalyptics&apos;: Unconcerned If AI Defeats Humanity](https://slashdot.org/story/25/10/05/0550246/ais-cheerful-apocalyptics-unconcerned-if-ai-defeats-humanity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-05, 10:21:37](https://lobste.rs/s/rgxngu/wherever_you_get_your_podcasts) - [Wherever you get your Podcasts](https://knotbin.leaflet.pub/3lx3uqveyj22f)
* [2025-10-05, 10:12:21](https://lobste.rs/s/x6vgkj/hobby_hilbert_simplex) - [Hobby Hilbert Simplex](https://nedbatchelder.com/blog/202509/hobby_hilbert_simplex.html)
* [2025-10-05, 09:51:26](https://news.ycombinator.com/item?id=45480317) - [Self hosting 10TB in S3 on a framework laptop and disks](https://jamesoclaire.com/2025/10/05/self-hosting-10tb-in-s3-on-a-framework-laptop-disks/)
* [2025-10-05, 08:26:00](https://soylentnews.org/article.pl?sid=25/10/04/0347255&amp;from=rss) - [Meta Advertisment Based on AI Chats](https://soylentnews.org/article.pl?sid=25/10/04/0347255&amp;from=rss)
* [2025-10-05, 07:44:44](https://lobste.rs/s/p6aor9/hashcards_plain_text_spaced_repetition) - [Hashcards: A Plain-Text Spaced Repetition System](https://borretti.me/article/hashcards-plain-text-spaced-repetition)
* [2025-10-05, 07:34:00](https://science.slashdot.org/story/25/10/04/0539239/whats-the-best-way-to-stop-ai-from-designing-hazardous-proteins?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What&apos;s the Best Way to Stop AI From Designing Hazardous Proteins?](https://science.slashdot.org/story/25/10/04/0539239/whats-the-best-way-to-stop-ai-from-designing-hazardous-proteins?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-05, 06:07:41](https://lobste.rs/s/rb8atf/what_net_10_gc_changes_mean_for_developers) - [What .NET 10 GC Changes Mean for Developers](https://roxeem.com/2025/09/30/what-net-10-gc-changes-mean-for-developers/)
* [2025-10-05, 06:01:24](https://news.ycombinator.com/item?id=45479165) - [Social Cooling (2017)](https://www.socialcooling.com/)
* [2025-10-05, 05:20:08](https://news.ycombinator.com/item?id=45479006) - [Managing context on the Claude Developer Platform](https://www.anthropic.com/news/context-management)
* [2025-10-05, 04:34:00](https://entertainment.slashdot.org/story/25/10/05/0418224/amazons-prime-video-rolls-back-controversial-stylized-james-bond-thumbnails-without-guns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon&apos;s Prime Video Rolls Back Controversial &apos;Stylized&apos; James Bond Thumbnails Without Guns](https://entertainment.slashdot.org/story/25/10/05/0418224/amazons-prime-video-rolls-back-controversial-stylized-james-bond-thumbnails-without-guns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-05, 04:11:55](https://news.ycombinator.com/item?id=45478780) - [Ambigr.am](https://ambigr.am/hall-of-fame)
* [2025-10-05, 03:45:00](https://soylentnews.org/article.pl?sid=25/10/04/0342221&amp;from=rss) - [Hosting a WebSite on a Disposable Vape](https://soylentnews.org/article.pl?sid=25/10/04/0342221&amp;from=rss)
* [2025-10-05, 01:34:00](https://yro.slashdot.org/story/25/10/05/0122231/soras-controls-dont-block-all-deepfakes-or-copyright-infringements?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sora&apos;s Controls Don&apos;t Block All Deepfakes or Copyright Infringements](https://yro.slashdot.org/story/25/10/05/0122231/soras-controls-dont-block-all-deepfakes-or-copyright-infringements?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-05, 01:33:01](https://lobste.rs/s/zb71vu/why_netnewswire_is_not_web_app) - [Why NetNewsWire Is Not a Web App](https://inessential.com/2025/10/04/why-netnewswire-is-not-web-app.html)
* [2025-10-04, 23:18:33](https://lobste.rs/s/bkmwe4/achieving_period_correct_graphics) - [Achieving period-correct graphics in personal computer emulators - Part 1: The Amiga](https://blog.johnnovak.net/2022/04/15/achieving-period-correct-graphics-in-personal-computer-emulators-part-1-the-amiga/)
* [2025-10-04, 23:00:00](https://soylentnews.org/article.pl?sid=25/10/04/0327256&amp;from=rss) - [OpenNvidia Could Become the AI Generation&apos;s WinTel](https://soylentnews.org/article.pl?sid=25/10/04/0327256&amp;from=rss)
* [2025-10-04, 22:49:00](https://tech.slashdot.org/story/25/10/04/2210244/toyotas-ev-sales-plunged-in-september-after-recall-but-plans-improved-lineup?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Toyota&apos;s EV Sales Plunged in September After Recall, But Plans Improved Lineup](https://tech.slashdot.org/story/25/10/04/2210244/toyotas-ev-sales-plunged-in-september-after-recall-but-plans-improved-lineup?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-04, 21:49:00](https://hardware.slashdot.org/story/25/10/04/2142243/microsofts-cto-hopes-to-swap-most-amd-and-nvidia-gpus-for-in-house-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft&apos;s CTO Hopes to Swap Most AMD and NVIDIA GPUs for In-House Chips](https://hardware.slashdot.org/story/25/10/04/2142243/microsofts-cto-hopes-to-swap-most-amd-and-nvidia-gpus-for-in-house-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-04, 19:14:36](https://lobste.rs/s/rlencm/self_hosting_email_like_it_s_1984) - [Self-Hosting Email Like It’s 1984](https://maxadamski.com/blog/2025/10/email.html)
* [2025-10-04, 18:41:04](https://lobste.rs/s/rhl369/retiring_test_ipv6_com) - [Retiring test-ipv6.com](https://retire.test-ipv6.com/)
* [2025-10-04, 18:23:12](https://lobste.rs/s/6fhm1u/mac_like_experience_on_linux) - [A Mac-like experience on Linux](https://pointieststick.com/2025/10/04/a-mac-like-experience-on-linux/)
* [2025-10-04, 18:17:00](https://soylentnews.org/article.pl?sid=25/10/03/1516247&amp;from=rss) - [How Charlie Brown Captured the US Psyche](https://soylentnews.org/article.pl?sid=25/10/03/1516247&amp;from=rss)
* [2025-10-04, 16:43:31](https://lobste.rs/s/bokqwe/breaking_provably_correct_leftpad) - [Breaking “provably correct” Leftpad](https://lukeplant.me.uk/blog/posts/breaking-provably-correct-leftpad/)
* [2025-10-04, 14:22:04](https://news.ycombinator.com/item?id=45473516) - [Explainer: Inodes and Inode Numbers](https://eclecticlight.co/2025/10/04/explainer-inodes-and-inode-numbers/)
* [2025-10-04, 13:33:00](https://soylentnews.org/article.pl?sid=25/10/02/1413244&amp;from=rss) - [Scientists Catch a Shark Threesome on Camera](https://soylentnews.org/article.pl?sid=25/10/02/1413244&amp;from=rss)
* [2025-10-04, 08:07:00](https://soylentnews.org/article.pl?sid=25/10/02/1410217&amp;from=rss) - [Far Side of the Moon May be Colder Than the Near Side, Lunar Rocks Suggest](https://soylentnews.org/article.pl?sid=25/10/02/1410217&amp;from=rss)
* [2025-10-04, 04:01:00](https://soylentnews.org/article.pl?sid=25/10/02/146250&amp;from=rss) - [The Armed Forces of Austria Upgrade to LibreOffice and the OpenDocument Format](https://soylentnews.org/article.pl?sid=25/10/02/146250&amp;from=rss)
* [2025-10-03, 23:18:00](https://soylentnews.org/article.pl?sid=25/10/02/1231211&amp;from=rss) - [NASA Boss Says US Should Have ‘Village’ on Moon in a Decade](https://soylentnews.org/article.pl?sid=25/10/02/1231211&amp;from=rss)
* [2025-10-03, 18:34:00](https://soylentnews.org/article.pl?sid=25/10/02/1226238&amp;from=rss) - [CISA Warns of Critical Linux Sudo Flaw Exploited in Attacks](https://soylentnews.org/article.pl?sid=25/10/02/1226238&amp;from=rss)
* [2025-10-03, 13:51:00](https://soylentnews.org/article.pl?sid=25/10/02/1054255&amp;from=rss) - [Photodiode Design Using Germanium Solves Key Challenge in on-Chip Light Monitoring](https://soylentnews.org/article.pl?sid=25/10/02/1054255&amp;from=rss)
* [2025-10-03, 09:06:00](https://soylentnews.org/article.pl?sid=25/10/02/1052258&amp;from=rss) - [ICE to Buy Tool that Tracks Locations of Hundreds of Millions of Phones](https://soylentnews.org/article.pl?sid=25/10/02/1052258&amp;from=rss)
* [2025-10-03, 04:21:00](https://soylentnews.org/article.pl?sid=25/10/01/2332257&amp;from=rss) - [AI Coding is Massively Overhyped, Report Finds](https://soylentnews.org/article.pl?sid=25/10/01/2332257&amp;from=rss)
* [2025-10-03, 02:59:18](https://news.ycombinator.com/item?id=45458455) - [Which table format do LLMs understand best?](https://www.improvingagents.com/blog/best-input-data-format-for-llms)
* [2025-10-02, 23:35:00](https://soylentnews.org/article.pl?sid=25/09/30/1336240&amp;from=rss) - [Mix Insect, Plant and Cultivated Proteins for Healthier, Greener, Tastier Food, Say Experts](https://soylentnews.org/article.pl?sid=25/09/30/1336240&amp;from=rss)
* [2025-10-02, 18:46:00](https://soylentnews.org/article.pl?sid=25/09/30/1328225&amp;from=rss) - [Complex Knots Can Actually be Easier to Untie Than Simple Ones](https://soylentnews.org/article.pl?sid=25/09/30/1328225&amp;from=rss)
* [2025-10-02, 17:12:57](https://news.ycombinator.com/item?id=45452480) - [Comparing a RISC and a CISC with similar hardware organization (1991)](https://dl.acm.org/doi/pdf/10.1145/106972.107003)
* [2025-10-02, 14:49:12](https://news.ycombinator.com/item?id=45450392) - [Intro to BirdNET-Pi: Eavesdropping on my feathered friends](https://hannahilea.com/blog/birdnet-intro/)
* [2025-10-02, 14:03:00](https://soylentnews.org/article.pl?sid=25/09/30/1323239&amp;from=rss) - [Huawei’s Ternary Logic Breakthrough: a Game-Changer or Just Hype?](https://soylentnews.org/article.pl?sid=25/09/30/1323239&amp;from=rss)
* [2025-10-02, 11:46:27](https://news.ycombinator.com/item?id=45448416) - [The G in GPU is for Graphics damnit](https://ut21.github.io/blog/triton.html)
* [2025-10-02, 11:07:16](https://news.ycombinator.com/item?id=45448204) - [AMD&apos;s EPYC 9355P: Inside a 32 Core Zen 5 Server Chip](https://chipsandcheese.com/p/amds-epyc-9355p-inside-a-32-core)
* [2025-10-02, 09:16:00](https://soylentnews.org/article.pl?sid=25/09/30/1249215&amp;from=rss) - [Experts Alarmed That AI is Now Producing Functional Viruses](https://soylentnews.org/article.pl?sid=25/09/30/1249215&amp;from=rss)
* [2025-10-02, 07:50:36](https://news.ycombinator.com/item?id=45447226) - [Sonic Robo Blast 2: 25 year old continuously developed DOOM engine-based fangame](https://www.srb2.org/)
* [2025-10-02, 04:31:00](https://soylentnews.org/article.pl?sid=25/09/30/0352206&amp;from=rss) - [Scientists Unlock Secret to Thick, Stable Beer Foams](https://soylentnews.org/article.pl?sid=25/09/30/0352206&amp;from=rss)
