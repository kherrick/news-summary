# [News Summary](https://kherrick.github.io/news-summary/)

## Space and Astronomy

* [JWST Finds an Exoplanet Around a Pulsar Whose Atmosphere is All Carbon](https://soylentnews.org/article.pl?sid=25/10/05/0119224&amp;from=rss)

* [Setting Bounds on SETI](https://soylentnews.org/article.pl?sid=25/10/05/012221&amp;from=rss)

* [Far Side of the Moon May be Colder Than the Near Side, Lunar Rocks Suggest](https://soylentnews.org/article.pl?sid=25/10/02/1410217&amp;from=rss)

## Artificial Intelligence Impact and Issues

* [Fake AI-Generated Actress Gets Agent - and a Very Angry Reaction from (Human) Actors Union](https://entertainment.slashdot.org/story/25/10/06/009212/fake-ai-generated-actress-gets-agent---and-a-very-angry-reaction-from-human-actors-union?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [What Happens When AI Directs Tourists to Places That Don't Exist?](https://slashdot.org/story/25/10/06/0434206/what-happens-when-ai-directs-tourists-to-places-that-dont-exist?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [AI Coding is Massively Overhyped, Report Finds](https://soylentnews.org/article.pl?sid=25/10/01/2332257&amp;from=rss)

* [Experts Alarmed That AI is Now Producing Functional Viruses](https://soylentnews.org/article.pl?sid=25/09/30/1249215&amp;from=rss)

## Computing Technology Innovations

* [Modern messaging: Running your own XMPP server](https://www.codedge.de/posts/modern-messaging-running-your-own-xmpp-server)

* [Removing 50 Objects from Orbit Would Cut Danger From Space Junk in Half](https://science.slashdot.org/story/25/10/06/0148246/removing-50-objects-from-orbit-would-cut-danger-from-space-junk-in-half?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [The Temporal Dead Zone, or why the TypeScript codebase is littered with var statements](https://vincentrolfs.dev/blog/ts-var)

## Notable Achievements and Discoveries

* [Historic First: Scientists Turn Light Into Supersolid](https://soylentnews.org/article.pl?sid=25/10/04/1856221&amp;from=rss)

* [First Evidence That Plastic Nanoparticles Can Accumulate in Edible Parts of Vegetables](https://news.slashdot.org/story/25/10/05/2032200/first-evidence-that-plastic-nanoparticles-can-accumulate-in-edible-parts-of-vegetables?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Nobel Prize in Physiology or Medicine 2025 awarded to immune system researchers](https://www.nobelprize.org/prizes/medicine/2025/press-release/)

## Global and Cultural Insights

* [Taiwan Pressured to Move 50% of Chip Production to US or Lose Protection](https://soylentnews.org/politics/article.pl?sid=25/10/04/195256&amp;from=rss)

* [Germany outfitted half a million balconies with solar panels](https://grist.org/buildings/how-germany-outfitted-half-a-million-balconies-with-solar-panels/)

* [Steve Jobs Remembered on 14th Anniversary of His Death](https://apple.slashdot.org/story/25/10/06/0554208/steve-jobs-remembered-on-14th-anniversary-of-his-death?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

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

* [2025-10-06, 12:59:00](https://soylentnews.org/article.pl?sid=25/10/05/0119224&amp;from=rss) - [JWST Finds an Exoplanet Around a Pulsar Whose Atmosphere is All Carbon](https://soylentnews.org/article.pl?sid=25/10/05/0119224&amp;from=rss)
* [2025-10-06, 12:40:47](https://lobste.rs/s/8whlqu/ai_home_cooked_software) - [AI and Home-Cooked Software](https://mrkaran.dev/posts/ai-home-cooked-software/)
* [2025-10-06, 12:33:43](https://lobste.rs/s/xlqurj/my_first_contribution_linux) - [My First Contribution to Linux](https://vkoskiv.com/first-linux-patch/)
* [2025-10-06, 12:23:40](https://news.ycombinator.com/item?id=45490578) - [Show HN: While everyone builds AI apps, my spreadsheet reached 2,300 users](https://write-it-down.com)
* [2025-10-06, 12:17:59](https://news.ycombinator.com/item?id=45490549) - [AMD signs AI chip-supply deal with OpenAI, gives it option to take a 10% stake](https://www.reuters.com/business/amd-signs-ai-chip-supply-deal-with-openai-gives-it-option-take-10-stake-2025-10-06/)
* [2025-10-06, 12:10:55](https://lobste.rs/s/mahsz8/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/mahsz8/what_are_you_doing_this_week)
* [2025-10-06, 12:02:45](https://news.ycombinator.com/item?id=45490439) - [Modern messaging: Running your own XMPP server](https://www.codedge.de/posts/modern-messaging-running-your-own-xmpp-server)
* [2025-10-06, 11:54:26](https://lobste.rs/s/4ftndd/case_for_learning_gpu_programming_with) - [A case for learning GPU programming with a compute-first mindset](https://themaister.net/blog/2025/10/05/a-case-for-learning-gpu-programming-with-a-compute-first-mindset/)
* [2025-10-06, 11:34:00](https://developers.slashdot.org/story/25/10/06/031253/what-if-vibe-coding-creates-more-programming-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What If Vibe Coding Creates More Programming Jobs?](https://developers.slashdot.org/story/25/10/06/031253/what-if-vibe-coding-creates-more-programming-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-06, 10:54:47](https://news.ycombinator.com/item?id=45489978) - [State Terror, American Style – Paul Krugman](https://paulkrugman.substack.com/p/state-terror-american-style)
* [2025-10-06, 10:41:52](https://lobste.rs/s/2ykcqe/why_do_llms_freak_out_over_seahorse_emoji) - [Why do LLMs freak out over the seahorse emoji?](https://vgel.me/posts/seahorse)
* [2025-10-06, 09:49:33](https://news.ycombinator.com/item?id=45489581) - [Build a VPN Tunnel with Wintun on Windows – Part 1](https://0xmm.in/posts/peer-to-peer-windows-part1/)
* [2025-10-06, 09:41:16](https://news.ycombinator.com/item?id=45489533) - [Nobel Prize in Physiology or Medicine 2025 awarded to immune system researchers](https://www.nobelprize.org/prizes/medicine/2025/press-release/)
* [2025-10-06, 09:11:31](https://lobste.rs/s/fogifv/django_one_orm_rule_all_databases) - [Django: one ORM to rule all databases](https://www.paulox.net/2025/10/06/django-orm-comparison/)
* [2025-10-06, 09:08:24](https://lobste.rs/s/lm0p8u/qnx_operating_system) - [The QNX Operating System](https://www.abortretry.fail/p/the-qnx-operating-system)
* [2025-10-06, 08:49:30](https://news.ycombinator.com/item?id=45489174) - [Demodesk (YC W19) Is Hiring a Ruby on Rails Engineer](https://demodesk.com/careers)
* [2025-10-06, 08:13:00](https://soylentnews.org/article.pl?sid=25/10/05/0111221&amp;from=rss) - [How Can We Keep Livestock Safe as Wolves Return?](https://soylentnews.org/article.pl?sid=25/10/05/0111221&amp;from=rss)
* [2025-10-06, 07:47:17](https://news.ycombinator.com/item?id=45488713) - [Battering RAM – Low-Cost Interposer Attacks on Confidential Computing](https://batteringram.eu/)
* [2025-10-06, 07:34:00](https://apple.slashdot.org/story/25/10/06/0554208/steve-jobs-remembered-on-14th-anniversary-of-his-death?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Steve Jobs Remembered on 14th Anniversary of His Death](https://apple.slashdot.org/story/25/10/06/0554208/steve-jobs-remembered-on-14th-anniversary-of-his-death?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-06, 07:07:11](https://news.ycombinator.com/item?id=45488441) - [Flightcontrol: AWS PaaS](https://www.flightcontrol.dev/)
* [2025-10-06, 06:35:36](https://news.ycombinator.com/item?id=45488261) - [Structured Procrastination](https://structuredprocrastination.com)
* [2025-10-06, 06:22:42](https://lobste.rs/s/uihcec/gem_coop) - [gem.coop](https://gem.coop/)
* [2025-10-06, 06:15:28](https://lobste.rs/s/voi3sp/simple_automated_deployments_using_git) - [Simple automated deployments using git push (2024)](https://garrido.io/notes/simple-automated-deployments-git-push/)
* [2025-10-06, 04:39:00](https://slashdot.org/story/25/10/06/0434206/what-happens-when-ai-directs-tourists-to-places-that-dont-exist?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Happens When AI Directs Tourists to Places That Don&apos;t Exist?](https://slashdot.org/story/25/10/06/0434206/what-happens-when-ai-directs-tourists-to-places-that-dont-exist?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-06, 03:48:34](https://news.ycombinator.com/item?id=45487476) - [1 Trillion Web Pages Archived](https://blog.archive.org/trillion/)
* [2025-10-06, 03:42:15](https://news.ycombinator.com/item?id=45487452) - [Find Nearby Automated License Plate Readers (ALPR)](https://deflock.me/)
* [2025-10-06, 03:30:00](https://soylentnews.org/article.pl?sid=25/10/05/012221&amp;from=rss) - [Setting Bounds on SETI](https://soylentnews.org/article.pl?sid=25/10/05/012221&amp;from=rss)
* [2025-10-06, 02:20:05](https://news.ycombinator.com/item?id=45487044) - [Why do LLMs freak out over the seahorse emoji?](https://vgel.me/posts/seahorse/)
* [2025-10-06, 02:12:00](https://science.slashdot.org/story/25/10/06/0148246/removing-50-objects-from-orbit-would-cut-danger-from-space-junk-in-half?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Removing 50 Objects from Orbit Would Cut Danger From Space Junk in Half](https://science.slashdot.org/story/25/10/06/0148246/removing-50-objects-from-orbit-would-cut-danger-from-space-junk-in-half?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-06, 01:12:00](https://developers.slashdot.org/story/25/10/05/2318202/are-software-registries-inherently-insecure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Are Software Registries Inherently Insecure?](https://developers.slashdot.org/story/25/10/05/2318202/are-software-registries-inherently-insecure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-06, 00:42:16](https://lobste.rs/s/zo5arc/nirs_fire_destroys_south_korean) - [NIRS fire destroys [South Korean] government&apos;s cloud storage system, no backups available](https://koreajoongangdaily.joins.com/news/2025-10-01/national/socialAffairs/NIRS-fire-destroys-governments-cloud-storage-system-no-backups-available/2412936)
* [2025-10-06, 00:12:00](https://entertainment.slashdot.org/story/25/10/06/009212/fake-ai-generated-actress-gets-agent---and-a-very-angry-reaction-from-human-actors-union?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fake AI-Generated Actress Gets Agent - and a Very Angry Reaction from (Human) Actors Union](https://entertainment.slashdot.org/story/25/10/06/009212/fake-ai-generated-actress-gets-agent---and-a-very-angry-reaction-from-human-actors-union?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-05, 23:51:47](https://news.ycombinator.com/item?id=45486306) - [Rule-Based Expert Systems: The Mycin Experiments (1984)](https://www.shortliffe.net/Buchanan-Shortliffe-1984/MYCIN%20Book.htm)
* [2025-10-05, 22:55:00](https://it.slashdot.org/story/25/10/05/2225224/mouse-sensors-can-pick-up-speech-from-surface-vibrations-researchers-show?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mouse Sensors Can Pick Up Speech From Surface Vibrations, Researchers Show](https://it.slashdot.org/story/25/10/05/2225224/mouse-sensors-can-pick-up-speech-from-surface-vibrations-researchers-show?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-05, 22:43:00](https://soylentnews.org/article.pl?sid=25/10/04/1856221&amp;from=rss) - [Historic First: Scientists Turn Light Into Supersolid](https://soylentnews.org/article.pl?sid=25/10/04/1856221&amp;from=rss)
* [2025-10-05, 22:18:31](https://news.ycombinator.com/item?id=45485806) - [Germany outfitted half a million balconies with solar panels](https://grist.org/buildings/how-germany-outfitted-half-a-million-balconies-with-solar-panels/)
* [2025-10-05, 22:10:15](https://news.ycombinator.com/item?id=45485736) - [Ken Parker, famed luthier, has died](https://kenparkerarchtops.com)
* [2025-10-05, 21:55:00](https://yro.slashdot.org/story/25/10/05/2149250/californias-uber-and-lyft-drivers-get-union-rights?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California&apos;s Uber and Lyft Drivers Get Union Rights](https://yro.slashdot.org/story/25/10/05/2149250/californias-uber-and-lyft-drivers-get-union-rights?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-05, 21:06:29](https://lobste.rs/s/3p1uht/cargo_subspace_make_rust_analyzer_work) - [cargo-subspace: Make rust-analyzer work better with very large cargo workspaces](https://github.com/ethowitz/cargo-subspace)
* [2025-10-05, 21:01:27](https://lobste.rs/s/unhv2p/packing_world_for_longest_lines_sight) - [Packing The World For Longest Lines Of Sight](https://tombh.co.uk/packing-world-lines-of-sight)
* [2025-10-05, 20:55:00](https://news.slashdot.org/story/25/10/05/2032200/first-evidence-that-plastic-nanoparticles-can-accumulate-in-edible-parts-of-vegetables?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [First Evidence That Plastic Nanoparticles Can Accumulate in Edible Parts of Vegetables](https://news.slashdot.org/story/25/10/05/2032200/first-evidence-that-plastic-nanoparticles-can-accumulate-in-edible-parts-of-vegetables?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-05, 19:55:00](https://news.slashdot.org/story/25/10/05/1953218/cory-doctorow-explains-why-amazon-is-way-past-its-prime?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cory Doctorow Explains Why Amazon is &apos;Way Past Its Prime&apos;](https://news.slashdot.org/story/25/10/05/1953218/cory-doctorow-explains-why-amazon-is-way-past-its-prime?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-05, 19:25:19](https://lobste.rs/s/y3yauw/how_why_easyos_is_different) - [How and why EasyOS is different](https://easyos.org/about/how-and-why-easyos-is-different.html)
* [2025-10-05, 19:09:35](https://news.ycombinator.com/item?id=45484284) - [Toybox: All-in-one Linux command line](https://github.com/landley/toybox)
* [2025-10-05, 18:28:16](https://news.ycombinator.com/item?id=45483924) - [What GPT-OSS leaks about OpenAI&apos;s training data](https://fi-le.net/oss/)
* [2025-10-05, 18:02:00](https://soylentnews.org/politics/article.pl?sid=25/10/04/195256&amp;from=rss) - [Taiwan Pressured to Move 50% of Chip Production to US or Lose Protection](https://soylentnews.org/politics/article.pl?sid=25/10/04/195256&amp;from=rss)
* [2025-10-05, 17:57:23](https://lobste.rs/s/q6c4ur/valuetier_org_some_thoughts_on_llms) - [valuetier.org (and some thoughts on LLMs)](https://ericphanson.com/blog/2025/valuetier.org-and-some-thoughts-on-llms/)
* [2025-10-05, 17:34:00](https://yro.slashdot.org/story/25/10/05/0127200/sam-altman-promises-copyright-holders-more-control-over-soras-character-generation---and-revenue-sharing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sam Altman Promises Copyright Holders More Control Over Sora&apos;s Character Generation - and Revenue Sharing](https://yro.slashdot.org/story/25/10/05/0127200/sam-altman-promises-copyright-holders-more-control-over-soras-character-generation---and-revenue-sharing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-05, 17:20:39](https://news.ycombinator.com/item?id=45483386) - [Fire destroys S. Korean government&apos;s cloud storage system, no backups available](https://koreajoongangdaily.joins.com/news/2025-10-01/national/socialAffairs/NIRS-fire-destroys-governments-cloud-storage-system-no-backups-available/2412936)
* [2025-10-05, 17:11:48](https://lobste.rs/s/dwz05l/temporal_dead_zone_why_typescript) - [The Temporal Dead Zone, or why the TypeScript codebase is littered with var statements](https://vincentrolfs.dev/blog/ts-var)
* [2025-10-05, 17:10:35](https://lobste.rs/s/dckg9i/tesid_textualised_encrypted_sequential) - [TESID: Textualised Encrypted Sequential Identifiers](https://temp.chrismorgan.info/2025-09-17-tesid/)
* [2025-10-05, 16:43:08](https://lobste.rs/s/ycveqa/uuidv47_v4_privacy_v7_performance) - [UUIDv47 = v4 privacy + v7 performance](https://github.com/stateless-me/uuidv47)
* [2025-10-05, 16:34:00](https://slashdot.org/story/25/10/05/026207/opera-wants-you-to-pay-1990-a-month-for-its-new-ai-browser?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Opera Wants You To Pay $19.90 a Month for Its New AI Browser](https://slashdot.org/story/25/10/05/026207/opera-wants-you-to-pay-1990-a-month-for-its-new-ai-browser?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-05, 16:03:00](https://soylentnews.org/meta/article.pl?sid=25/10/05/162227&amp;from=rss) - [The Site is Experiencing 50x Problems](https://soylentnews.org/meta/article.pl?sid=25/10/05/162227&amp;from=rss)
* [2025-10-05, 15:59:24](https://lobste.rs/s/nsrig5/announcing_gobolinux_017_01_passing) - [Announcing GoboLinux 017.01 - Passing the Torch](https://gobolinux.org//news/119.html)
* [2025-10-05, 15:49:58](https://news.ycombinator.com/item?id=45482467) - [NFS at 40 – Remembering the Sun Microsystems Network File System](https://nfs40.online/)
* [2025-10-05, 14:50:47](https://lobste.rs/s/7myscg/exit_feed_best_coders_should_walk_away) - [Exit the Feed: The Best Coders Should Walk Away](https://abner.page/post/exit-the-feed/)
* [2025-10-05, 14:47:13](https://news.ycombinator.com/item?id=45481892) - [The QNX Operating System](https://www.abortretry.fail/p/the-qnx-operating-system)
* [2025-10-05, 14:34:00](https://news.slashdot.org/story/25/10/04/0648215/what-would-happen-if-an-ai-bubble-burst?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Would Happen If an AI Bubble Burst?](https://news.slashdot.org/story/25/10/04/0648215/what-would-happen-if-an-ai-bubble-burst?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-05, 13:33:16](https://lobste.rs/s/tu789k/personal_data_storage_is_idea_whose_time) - [Personal data storage is an idea whose time has come](https://blog.muni.town/personal-data-storage-idea/)
* [2025-10-05, 13:16:00](https://soylentnews.org/article.pl?sid=25/10/04/1858242&amp;from=rss) - [First Wolf-Dog Hybrid Confirmed in Greece](https://soylentnews.org/article.pl?sid=25/10/04/1858242&amp;from=rss)
* [2025-10-05, 13:10:53](https://lobste.rs/s/szoe3m/conventional_commits_considered) - [Conventional Commits considered harmful](https://larr.net/p/cc.html)
* [2025-10-05, 13:07:31](https://lobste.rs/s/nsl5gr/case_for_learned_index_structures) - [The Case for Learned Index Structures](https://dl.acm.org/doi/10.1145/3183713.3196909)
* [2025-10-05, 11:34:00](https://slashdot.org/story/25/10/05/0550246/ais-cheerful-apocalyptics-unconcerned-if-ai-defeats-humanity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI&apos;s &apos;Cheerful Apocalyptics&apos;: Unconcerned If AI Defeats Humanity](https://slashdot.org/story/25/10/05/0550246/ais-cheerful-apocalyptics-unconcerned-if-ai-defeats-humanity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-05, 09:51:26](https://news.ycombinator.com/item?id=45480317) - [Self hosting 10TB in S3 on a framework laptop and disks](https://jamesoclaire.com/2025/10/05/self-hosting-10tb-in-s3-on-a-framework-laptop-disks/)
* [2025-10-05, 08:26:00](https://soylentnews.org/article.pl?sid=25/10/04/0347255&amp;from=rss) - [Meta Advertisment Based on AI Chats](https://soylentnews.org/article.pl?sid=25/10/04/0347255&amp;from=rss)
* [2025-10-05, 07:44:44](https://lobste.rs/s/p6aor9/hashcards_plain_text_spaced_repetition) - [Hashcards: A Plain-Text Spaced Repetition System](https://borretti.me/article/hashcards-plain-text-spaced-repetition)
* [2025-10-05, 07:34:00](https://science.slashdot.org/story/25/10/04/0539239/whats-the-best-way-to-stop-ai-from-designing-hazardous-proteins?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What&apos;s the Best Way to Stop AI From Designing Hazardous Proteins?](https://science.slashdot.org/story/25/10/04/0539239/whats-the-best-way-to-stop-ai-from-designing-hazardous-proteins?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-05, 03:45:00](https://soylentnews.org/article.pl?sid=25/10/04/0342221&amp;from=rss) - [Hosting a WebSite on a Disposable Vape](https://soylentnews.org/article.pl?sid=25/10/04/0342221&amp;from=rss)
* [2025-10-05, 01:33:01](https://lobste.rs/s/zb71vu/why_netnewswire_is_not_web_app) - [Why NetNewsWire Is Not a Web App](https://inessential.com/2025/10/04/why-netnewswire-is-not-web-app.html)
* [2025-10-04, 23:00:00](https://soylentnews.org/article.pl?sid=25/10/04/0327256&amp;from=rss) - [OpenNvidia Could Become the AI Generation&apos;s WinTel](https://soylentnews.org/article.pl?sid=25/10/04/0327256&amp;from=rss)
* [2025-10-04, 18:17:00](https://soylentnews.org/article.pl?sid=25/10/03/1516247&amp;from=rss) - [How Charlie Brown Captured the US Psyche](https://soylentnews.org/article.pl?sid=25/10/03/1516247&amp;from=rss)
* [2025-10-04, 16:43:31](https://lobste.rs/s/bokqwe/breaking_provably_correct_leftpad) - [Breaking “provably correct” Leftpad](https://lukeplant.me.uk/blog/posts/breaking-provably-correct-leftpad/)
* [2025-10-04, 13:33:00](https://soylentnews.org/article.pl?sid=25/10/02/1413244&amp;from=rss) - [Scientists Catch a Shark Threesome on Camera](https://soylentnews.org/article.pl?sid=25/10/02/1413244&amp;from=rss)
* [2025-10-04, 08:07:00](https://soylentnews.org/article.pl?sid=25/10/02/1410217&amp;from=rss) - [Far Side of the Moon May be Colder Than the Near Side, Lunar Rocks Suggest](https://soylentnews.org/article.pl?sid=25/10/02/1410217&amp;from=rss)
* [2025-10-04, 04:01:00](https://soylentnews.org/article.pl?sid=25/10/02/146250&amp;from=rss) - [The Armed Forces of Austria Upgrade to LibreOffice and the OpenDocument Format](https://soylentnews.org/article.pl?sid=25/10/02/146250&amp;from=rss)
* [2025-10-04, 01:24:35](https://news.ycombinator.com/item?id=45469658) - [Retrocide Mono – A monospaced font with no decenders](https://geonot.github.io/retrocide-mono/)
* [2025-10-03, 23:18:00](https://soylentnews.org/article.pl?sid=25/10/02/1231211&amp;from=rss) - [NASA Boss Says US Should Have ‘Village’ on Moon in a Decade](https://soylentnews.org/article.pl?sid=25/10/02/1231211&amp;from=rss)
* [2025-10-03, 18:34:00](https://soylentnews.org/article.pl?sid=25/10/02/1226238&amp;from=rss) - [CISA Warns of Critical Linux Sudo Flaw Exploited in Attacks](https://soylentnews.org/article.pl?sid=25/10/02/1226238&amp;from=rss)
* [2025-10-03, 13:51:00](https://soylentnews.org/article.pl?sid=25/10/02/1054255&amp;from=rss) - [Photodiode Design Using Germanium Solves Key Challenge in on-Chip Light Monitoring](https://soylentnews.org/article.pl?sid=25/10/02/1054255&amp;from=rss)
* [2025-10-03, 09:06:00](https://soylentnews.org/article.pl?sid=25/10/02/1052258&amp;from=rss) - [ICE to Buy Tool that Tracks Locations of Hundreds of Millions of Phones](https://soylentnews.org/article.pl?sid=25/10/02/1052258&amp;from=rss)
* [2025-10-03, 05:52:06](https://news.ycombinator.com/item?id=45459466) - [Delimited Continuations in Lone Lisp](https://www.matheusmoreira.com/articles/delimited-continuations-in-lone-lisp)
* [2025-10-03, 04:21:00](https://soylentnews.org/article.pl?sid=25/10/01/2332257&amp;from=rss) - [AI Coding is Massively Overhyped, Report Finds](https://soylentnews.org/article.pl?sid=25/10/01/2332257&amp;from=rss)
* [2025-10-02, 23:46:40](https://news.ycombinator.com/item?id=45456965) - [Basic Math Textbook: The Napkin Project](https://web.evanchen.cc/napkin.html)
* [2025-10-02, 23:35:00](https://soylentnews.org/article.pl?sid=25/09/30/1336240&amp;from=rss) - [Mix Insect, Plant and Cultivated Proteins for Healthier, Greener, Tastier Food, Say Experts](https://soylentnews.org/article.pl?sid=25/09/30/1336240&amp;from=rss)
* [2025-10-02, 21:14:43](https://news.ycombinator.com/item?id=45455650) - [Creating a database of motivated proofs](https://gowers.wordpress.com/2025/09/22/creating-a-database-of-motivated-proofs/)
* [2025-10-02, 18:54:12](https://news.ycombinator.com/item?id=45453818) - [IRonCub: A Humanoid Robot Designed to Fly Like Iron Man](https://spectrum.ieee.org/ironcub-jet-powered-flying-robot)
* [2025-10-02, 18:46:00](https://soylentnews.org/article.pl?sid=25/09/30/1328225&amp;from=rss) - [Complex Knots Can Actually be Easier to Untie Than Simple Ones](https://soylentnews.org/article.pl?sid=25/09/30/1328225&amp;from=rss)
* [2025-10-02, 14:03:00](https://soylentnews.org/article.pl?sid=25/09/30/1323239&amp;from=rss) - [Huawei’s Ternary Logic Breakthrough: a Game-Changer or Just Hype?](https://soylentnews.org/article.pl?sid=25/09/30/1323239&amp;from=rss)
* [2025-10-02, 12:25:41](https://news.ycombinator.com/item?id=45448747) - [Magic Wormhole: Get things from one computer to another, safely](https://magic-wormhole.readthedocs.io/en/latest/welcome.html)
* [2025-10-02, 11:46:27](https://news.ycombinator.com/item?id=45448416) - [The G in GPU is for Graphics damnit](https://ut21.github.io/blog/triton.html)
* [2025-10-02, 09:16:00](https://soylentnews.org/article.pl?sid=25/09/30/1249215&amp;from=rss) - [Experts Alarmed That AI is Now Producing Functional Viruses](https://soylentnews.org/article.pl?sid=25/09/30/1249215&amp;from=rss)
* [2025-10-02, 07:50:36](https://news.ycombinator.com/item?id=45447226) - [Sonic Robo Blast 2: 25 year old continuously developed DOOM engine-based fangame](https://www.srb2.org/)
* [2025-10-02, 04:31:00](https://soylentnews.org/article.pl?sid=25/09/30/0352206&amp;from=rss) - [Scientists Unlock Secret to Thick, Stable Beer Foams](https://soylentnews.org/article.pl?sid=25/09/30/0352206&amp;from=rss)
