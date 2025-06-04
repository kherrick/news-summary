# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Technology Developments

* [James Webb Space Telescope Discovers the Earliest Galaxy Ever Seen](https://science.slashdot.org/story/25/06/04/0231211/james-webb-space-telescope-discovers-the-earliest-galaxy-ever-seen?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Breakthrough discovery of the earliest galaxy observed thanks to the James Webb Space Telescope.

* [ChatGPT Adds Enterprise Cloud Integrations For Dropbox, Box, OneDrive, Google Drive, Meeting Transcription](https://slashdot.org/story/25/06/04/1543234/chatgpt-adds-enterprise-cloud-integrations-for-dropbox-box-onedrive-google-drive-meeting-transcription?utm_source=rss1.0mainlinkanon&utm_medium=feed) - OpenAI's ChatGPT extends its functionalities with direct integrations into popular cloud services for enterprises.

* [Morgan Stanley Says Its AI Tool Processed 9 Million Lines of Legacy Code This Year And Saved 280,000 Developer Hours](https://developers.slashdot.org/story/25/06/04/1233253/morgan-stanley-says-its-ai-tool-processed-9-million-lines-of-legacy-code-this-year-and-saved-280000-developer-hours?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Highlights significant advancements in AI tools to streamline software development.

* [Code.org Changes Mission To 'Make CS and AI a Core Part of K-12 Education'](https://news.slashdot.org/story/25/06/04/1323220/codeorg-changes-mission-to-make-cs-and-ai-a-core-part-of-k-12-education?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Focus shifts to embedding computer science and AI into foundational education curriculums.

* [Why I Wrote the BEAM Book](https://happihacking.com/blog/posts/2025/why_I_wrote_theBEAMBook/) - Insights into the creation of a resource about BEAM, the virtual machine underpinning the Erlang and Elixir programming languages.

## Policy and Social Impacts

* [The Right to Repair Is Law in Washington State](https://www.eff.org/deeplinks/2025/06/right-repair-law-washington-state) - Landmark legislation empowering consumers' rights to repair their devices.

* [The IRS Tax Filing Software TurboTax Is Trying To Kill Just Got Open Sourced](https://news.slashdot.org/story/25/06/04/1447205/the-irs-tax-filing-software-turbotax-is-trying-to-kill-just-got-open-sourced?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Announcement of a new open-sourced IRS tax filing software leading to public interest.

* [The Gutting of America's Medical Research](https://www.nytimes.com/interactive/2025/06/04/health/trump-cuts-nih-grants-research.html) - Investigative piece on reduced funding for medical research in the US.

## Scientific Discoveries and Innovations

* [Cockatoos have learned to operate drinking fountains in Australia](https://www.science.org/content/article/cockatoos-have-learned-operate-drinking-fountains-australia) - A fascinating peek into animal intelligence and behavior in the wild.

* [Making Magnesium From Sea Water](https://soylentnews.org/article.pl?sid=25/06/03/0447247&from=rss) - Innovative method of extracting magnesium, presenting potential for sustainable resource gathering.

* [23andMe Founder Aims To Restart Auction With Major Corporate Backing](https://science.slashdot.org/story/25/06/04/0243240/23andme-founder-aims-to-restart-auction-with-major-corporate-backing?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Strategic corporate moves within genetic research and consumer genomics.

## Cybersecurity and Online Developments

* [The strange tale of ischhfd83: When cybercriminals eat their own](https://news.sophos.com/en-us/2025/06/04/the-strange-tale-of-ischhfd83-when-cybercriminals-eat-their-own/) - Tale highlighting counterproductive feuding among cybercriminal factions.

* ['Deliberate Attack' Deletes Shopping App's AWS and GitHub Resources](https://it.slashdot.org/story/25/06/04/0442240/deliberate-attack-deletes-shopping-apps-aws-and-github-resources?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Alarming case of malicious intent targeting cloud infrastructure.

* [Mapping latitude and longitude to country, state, or city](https://austinhenley.com/blog/coord2state.html) - Addressing complexities of geographical data mapping for precise applications.

## Unique and Quirky Topics

* [Machine Code Isn't Scary](https://jimmyhmiller.com/machine-code-isnt-scary) - Simplifying machine code concepts for beginner programmers.

* [Binary Wordle](https://wordle.chengeric.com/) - A playful twist on the word puzzle game, integrating binary logic.

* [215 Department Store Catalogs 1908-2019](https://archive.org/details/departmentstorecatalogs) - A nostalgic archive providing a glimpse into consumer culture transformation over the decades.

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

* [2025-06-04, 15:57:58](https://lobste.rs/s/tlvaia/how_reladiff_works_journey_through) - [How Reladiff Works - A Journey Through the Challenges and Techniques of Data Engineering with SQL](https://eshsoft.com/blog/how-reladiff-works)
* [2025-06-04, 15:43:00](https://slashdot.org/story/25/06/04/1543234/chatgpt-adds-enterprise-cloud-integrations-for-dropbox-box-onedrive-google-drive-meeting-transcription?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ChatGPT Adds Enterprise Cloud Integrations For Dropbox, Box, OneDrive, Google Drive, Meeting Transcription](https://slashdot.org/story/25/06/04/1543234/chatgpt-adds-enterprise-cloud-integrations-for-dropbox-box-onedrive-google-drive-meeting-transcription?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-04, 15:22:00](https://entertainment.slashdot.org/story/25/06/04/1519210/hollywood-already-uses-generative-ai-and-is-hiding-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hollywood Already Uses Generative AI (And Is Hiding It)](https://entertainment.slashdot.org/story/25/06/04/1519210/hollywood-already-uses-generative-ai-and-is-hiding-it?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-04, 15:19:06](https://lobste.rs/s/wxypiq/strange_tale_ischhfd83_when) - [The strange tale of ischhfd83: When cybercriminals eat their own](https://news.sophos.com/en-us/2025/06/04/the-strange-tale-of-ischhfd83-when-cybercriminals-eat-their-own/)
* [2025-06-04, 15:10:37](https://lobste.rs/s/1gedzj/formalizing_proof_lean_using_github) - [Formalizing a proof in lean using GitHub Copilot and canonical](https://youtu.be/cyyR7j2ChCI)
* [2025-06-04, 15:09:23](https://news.ycombinator.com/item?id=44181522) - [215 Department Store Catalogs 1908-2019](https://archive.org/details/departmentstorecatalogs)
* [2025-06-04, 15:00:29](https://news.ycombinator.com/item?id=44181421) - [The Right to Repair Is Law in Washington State](https://www.eff.org/deeplinks/2025/06/right-repair-law-washington-state)
* [2025-06-04, 14:50:12](https://news.ycombinator.com/item?id=44181305) - [From Steam to Silicon: Patterns of Technological Revolutions](https://ianreppel.org/from-steam-to-silicon/)
* [2025-06-04, 14:46:00](https://news.slashdot.org/story/25/06/04/1447205/the-irs-tax-filing-software-turbotax-is-trying-to-kill-just-got-open-sourced?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The IRS Tax Filing Software TurboTax Is Trying To Kill Just Got Open Sourced](https://news.slashdot.org/story/25/06/04/1447205/the-irs-tax-filing-software-turbotax-is-trying-to-kill-just-got-open-sourced?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-04, 14:38:22](https://news.ycombinator.com/item?id=44181172) - [\&quot;AI Will Replace All the Jobs \&quot; Is Just Tech Execs Doing Marketing](https://sparktoro.com/blog/ai-will-replace-all-the-jobs-is-just-tech-execs-doing-marketing/)
* [2025-06-04, 14:21:33](https://lobste.rs/s/vmdggh/jujutsu_v0_30_0_released) - [jujutsu v0.30.0 released](https://github.com/jj-vcs/jj/releases/tag/v0.30.0)
* [2025-06-04, 14:10:47](https://news.ycombinator.com/item?id=44180921) - [The Gutting of America&apos;s Medical Research](https://www.nytimes.com/interactive/2025/06/04/health/trump-cuts-nih-grants-research.html)
* [2025-06-04, 14:04:39](https://lobste.rs/s/6wvdsr/no_more_shading_languages_compiling_c) - [No More Shading Languages: Compiling C++ to Vulkan Shaders](https://xol.io/random/vcc-paper.pdf)
* [2025-06-04, 14:04:00](https://soylentnews.org/article.pl?sid=25/06/03/1113216&amp;from=rss) - [Model Context Protocol (MCP): What It is and Why It Matters](https://soylentnews.org/article.pl?sid=25/06/03/1113216&amp;from=rss)
* [2025-06-04, 14:00:00](https://news.slashdot.org/story/25/06/04/1323220/codeorg-changes-mission-to-make-cs-and-ai-a-core-part-of-k-12-education?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Code.org Changes Mission To &apos;Make CS and AI a Core Part of K-12 Education&apos;](https://news.slashdot.org/story/25/06/04/1323220/codeorg-changes-mission-to-make-cs-and-ai-a-core-part-of-k-12-education?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-04, 13:54:49](https://lobste.rs/s/qegkfj/days_since_last_rust_minecraft_server) - [Days since last Rust Minecraft server](https://dayssincelastrustmcserver.com/)
* [2025-06-04, 13:00:00](https://developers.slashdot.org/story/25/06/04/1233253/morgan-stanley-says-its-ai-tool-processed-9-million-lines-of-legacy-code-this-year-and-saved-280000-developer-hours?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Morgan Stanley Says Its AI Tool Processed 9 Million Lines of Legacy Code This Year And Saved 280,000 Developer Hours](https://developers.slashdot.org/story/25/06/04/1233253/morgan-stanley-says-its-ai-tool-processed-9-million-lines-of-legacy-code-this-year-and-saved-280000-developer-hours?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-04, 12:55:16](https://news.ycombinator.com/item?id=44180239) - [Designing better file organization around tags, not hierarchies (2017)](https://www.nayuki.io/page/designing-better-file-organization-around-tags-not-hierarchies)
* [2025-06-04, 12:32:32](https://lobste.rs/s/honikk/yet_another_llm) - [yet another LLM](https://www.yetanotherllm.com/)
* [2025-06-04, 12:00:00](https://developers.slashdot.org/story/25/06/04/0820246/ai-startups-revolutionize-coding-industry-leading-to-sky-high-valuations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Startups Revolutionize Coding Industry, Leading To Sky-High Valuations](https://developers.slashdot.org/story/25/06/04/0820246/ai-startups-revolutionize-coding-industry-leading-to-sky-high-valuations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-04, 11:50:59](https://news.ycombinator.com/item?id=44179691) - [The Sky&apos;s the limit: AI automation on Mac](https://taoofmac.com/space/blog/2025/06/03/2155)
* [2025-06-04, 11:31:38](https://lobste.rs/s/mokfrm/experimenting_with_no_build_web) - [Experimenting with no-build Web Applications](https://andregarzia.com/2025/06/experimenting-with-no-build-web-applications.html)
* [2025-06-04, 11:27:06](https://lobste.rs/s/uqds7a/distance_based_isa_for_efficient) - [Distance-Based ISA for Efficient Register Management](https://www.sigarch.org/distance-based-isa-for-efficient-register-management/)
* [2025-06-04, 10:51:58](https://news.ycombinator.com/item?id=44179329) - [Just how bad are we at treating age-related diseases?](https://www.ladanuzhna.xyz/writing/just-how-bad-are-we-at-treating-age-related-diseases)
* [2025-06-04, 10:36:49](https://news.ycombinator.com/item?id=44179257) - [Why I Wrote the BEAM Book](https://happihacking.com/blog/posts/2025/why_I_wrote_theBEAMBook/)
* [2025-06-04, 10:00:00](https://science.slashdot.org/story/25/06/04/0243240/23andme-founder-aims-to-restart-auction-with-major-corporate-backing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [23andMe Founder Aims To Restart Auction With Major Corporate Backing](https://science.slashdot.org/story/25/06/04/0243240/23andme-founder-aims-to-restart-auction-with-major-corporate-backing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-04, 09:42:29](https://news.ycombinator.com/item?id=44178902) - [Cockatoos have learned to operate drinking fountains in Australia](https://www.science.org/content/article/cockatoos-have-learned-operate-drinking-fountains-australia)
* [2025-06-04, 09:23:00](https://soylentnews.org/article.pl?sid=25/06/03/0455214&amp;from=rss) - [Fire Safety Concerns Spark New Battery Rules on Flights](https://soylentnews.org/article.pl?sid=25/06/03/0455214&amp;from=rss)
* [2025-06-04, 09:11:04](https://lobste.rs/s/n2lvmy/ai_changes_everything) - [AI Changes Everything](https://lucumr.pocoo.org/2025/6/4/changes/)
* [2025-06-04, 08:38:32](https://lobste.rs/s/uwp2hd/what_s_your_go_message_queue_2025) - [What&apos;s your go-to message queue in 2025?](https://lobste.rs/s/uwp2hd/what_s_your_go_message_queue_2025)
* [2025-06-04, 08:28:46](https://news.ycombinator.com/item?id=44178468) - [Cloud Run GPUs, now GA, makes running AI workloads easier for everyone](https://cloud.google.com/blog/products/serverless/cloud-run-gpus-are-now-generally-available)
* [2025-06-04, 08:24:08](https://news.ycombinator.com/item?id=44178445) - [Click-V: A RISC-V emulator built with ClickHouse SQL](https://github.com/SpencerTorres/Click-V)
* [2025-06-04, 07:20:35](https://news.ycombinator.com/item?id=44178024) - [What if you could do it all over? (2020)](https://www.newyorker.com/magazine/2020/12/21/what-if-you-could-do-it-all-over)
* [2025-06-04, 07:00:54](https://news.ycombinator.com/item?id=44177901) - [Depot (YC W23) is hiring an enterprise support engineer (UK/EU)](https://www.ycombinator.com/companies/depot/jobs/NdCr76D-enterprise-support-engineer)
* [2025-06-04, 07:00:00](https://science.slashdot.org/story/25/06/04/0231211/james-webb-space-telescope-discovers-the-earliest-galaxy-ever-seen?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [James Webb Space Telescope Discovers the Earliest Galaxy Ever Seen](https://science.slashdot.org/story/25/06/04/0231211/james-webb-space-telescope-discovers-the-earliest-galaxy-ever-seen?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-04, 05:19:10](https://news.ycombinator.com/item?id=44177446) - [Machine Code Isn&apos;t Scary](https://jimmyhmiller.com/machine-code-isnt-scary)
* [2025-06-04, 05:04:36](https://lobste.rs/s/ph75m1/physicality_new_age_ui) - [Physicality: the new age of UI](https://www.lux.camera/physicality-the-new-age-of-ui/)
* [2025-06-04, 04:45:00](https://it.slashdot.org/story/25/06/04/0442240/deliberate-attack-deletes-shopping-apps-aws-and-github-resources?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Deliberate Attack&apos; Deletes Shopping App&apos;s AWS and GitHub Resources](https://it.slashdot.org/story/25/06/04/0442240/deliberate-attack-deletes-shopping-apps-aws-and-github-resources?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-04, 04:36:00](https://soylentnews.org/article.pl?sid=25/06/03/0447247&amp;from=rss) - [Making Magnesium From Sea Water](https://soylentnews.org/article.pl?sid=25/06/03/0447247&amp;from=rss)
* [2025-06-04, 03:30:00](https://science.slashdot.org/story/25/06/03/2155239/world-first-biocomputing-platform-hits-the-market?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [World-First Biocomputing Platform Hits the Market](https://science.slashdot.org/story/25/06/03/2155239/world-first-biocomputing-platform-hits-the-market?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-04, 03:19:45](https://news.ycombinator.com/item?id=44176919) - [A critical look at NetBSD’s installer](https://eerielinux.wordpress.com/2025/05/31/installing-bsd-in-2025-part-3-a-critical-look-at-netbsds-installer/)
* [2025-06-04, 02:58:40](https://news.ycombinator.com/item?id=44176829) - [Merlin Bird ID](https://merlin.allaboutbirds.org/)
* [2025-06-04, 02:57:11](https://news.ycombinator.com/item?id=44176825) - [Binary Wordle](https://wordle.chengeric.com/)
* [2025-06-04, 02:38:46](https://news.ycombinator.com/item?id=44176737) - [DiffX – Next-Generation Extensible Diff Format](https://diffx.org/)
* [2025-06-04, 01:47:26](https://news.ycombinator.com/item?id=44176514) - [Ask HN: Has anybody built search on top of Anna&apos;s Archive?](https://news.ycombinator.com/item?id=44176514)
* [2025-06-04, 01:46:49](https://news.ycombinator.com/item?id=44176510) - [Ask HN: Startup getting spammed with PayPal disputes, what should we do?](https://news.ycombinator.com/item?id=44176510)
* [2025-06-04, 01:00:00](https://hardware.slashdot.org/story/25/06/03/226213/polish-engineer-creates-postage-stamp-sized-1980s-atari-computer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Polish Engineer Creates Postage Stamp-Sized 1980s Atari Computer](https://hardware.slashdot.org/story/25/06/03/226213/polish-engineer-creates-postage-stamp-sized-1980s-atari-computer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-04, 00:51:43](https://lobste.rs/s/j9yk3n/diffx_next_generation_extensible_diff) - [DiffX - Next-Generation Extensible Diff Format](https://diffx.org/)
* [2025-06-04, 00:20:00](https://tech.slashdot.org/story/25/06/03/2212256/the-last-5-speed-manual-in-the-us-is-gone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Last 5-Speed Manual In the US Is Gone](https://tech.slashdot.org/story/25/06/03/2212256/the-last-5-speed-manual-in-the-us-is-gone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-03, 23:47:00](https://soylentnews.org/article.pl?sid=25/06/03/0136212&amp;from=rss) - [Texas Right To Repair Bill Passes, Heads To The Governor’s Desk](https://soylentnews.org/article.pl?sid=25/06/03/0136212&amp;from=rss)
* [2025-06-03, 23:40:00](https://entertainment.slashdot.org/story/25/06/03/2228212/the-openai-board-drama-is-turning-into-a-movie?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The OpenAI Board Drama Is Turning Into a Movie](https://entertainment.slashdot.org/story/25/06/03/2228212/the-openai-board-drama-is-turning-into-a-movie?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-03, 23:15:06](https://lobste.rs/s/ocu642/how_compiler_explorer_works_2025) - [How Compiler Explorer Works in 2025](https://xania.org/202506/how-compiler-explorer-works)
* [2025-06-03, 23:11:25](https://news.ycombinator.com/item?id=44175773) - [Precious Plastic is in trouble](https://www.preciousplastic.com//news/problems-in-precious-plastic)
* [2025-06-03, 23:07:25](https://lobste.rs/s/vjnzzj/deep_learning_gets_glory_deep_fact) - [Deep learning gets the glory, deep fact checking gets ignored](https://rachel.fast.ai/posts/2025-06-04-enzyme-ml-fails/index.html)
* [2025-06-03, 23:02:31](https://lobste.rs/s/lxebr5/mapping_latitude_longitude_country) - [Mapping latitude and longitude to country, state, or city](https://austinhenley.com/blog/coord2state.html)
* [2025-06-03, 23:00:00](https://slashdot.org/story/25/06/03/2149233/ai-pioneer-announces-non-profit-to-develop-honest-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Pioneer Announces Non-Profit To Develop &apos;Honest&apos; AI](https://slashdot.org/story/25/06/03/2149233/ai-pioneer-announces-non-profit-to-develop-honest-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-03, 22:45:11](https://news.ycombinator.com/item?id=44175579) - [New study casts doubt on the likelihood of Milky Way collision with Andromeda](https://www.durham.ac.uk/departments/academic/physics/news/new-study-casts-doubt-on-the-likelihood-of-milky-way-collision-with-andromeda/)
* [2025-06-03, 22:41:33](https://news.ycombinator.com/item?id=44175557) - [Show HN: Ephe – A minimalist open-source Markdown paper for today](https://github.com/unvalley/ephe)
* [2025-06-03, 22:20:00](https://slashdot.org/story/25/06/03/2024222/aws-forms-eu-based-cloud-unit-as-customers-fret?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AWS Forms EU-Based Cloud Unit As Customers Fret](https://slashdot.org/story/25/06/03/2024222/aws-forms-eu-based-cloud-unit-as-customers-fret?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-03, 22:13:01](https://news.ycombinator.com/item?id=44175356) - [Mapping latitude and longitude to country, state, or city](https://austinhenley.com/blog/coord2state.html)
* [2025-06-03, 21:31:56](https://news.ycombinator.com/item?id=44174965) - [Deep learning gets the glory, deep fact checking gets ignored](https://rachel.fast.ai/posts/2025-06-04-enzyme-ml-fails/index.html)
* [2025-06-03, 21:19:32](https://news.ycombinator.com/item?id=44174856) - [A deep dive into self-improving AI and the Darwin-Gödel Machine](https://richardcsuwandi.github.io/blog/2025/dgm/)
* [2025-06-03, 20:33:36](https://lobste.rs/s/joubld/jujutsu_on_tangled) - [jujutsu on tangled](https://blog.tangled.sh/stacking)
* [2025-06-03, 19:04:37](https://lobste.rs/s/qsksxp/zero_cost_tagless_final_rust_with_gadt) - [Zero-Cost &apos;Tagless Final&apos; in Rust with GADT-style Enums](https://www.inferara.com/en/blog/rust-tagless-final-gadt/)
* [2025-06-03, 19:02:00](https://soylentnews.org/article.pl?sid=25/06/02/1755220&amp;from=rss) - [The Workers Who Lost Their Jobs To AI](https://soylentnews.org/article.pl?sid=25/06/02/1755220&amp;from=rss)
* [2025-06-03, 17:19:07](https://lobste.rs/s/gjz28s/building_industrial_strength_software) - [Building Industrial Strength Software without Unit Tests](https://chrispenner.ca/posts/transcript-tests)
* [2025-06-03, 16:45:21](https://lobste.rs/s/xyhnvt/on_no_syntactic_support_for_error) - [[ On | No ] syntactic support for error handling](https://go.dev/blog/error-syntax)
* [2025-06-03, 16:39:47](https://lobste.rs/s/vymkqm/don_t_mcblock_me) - [Don&apos;t McBlock me](https://www.schneems.com/2025/06/03/dont-mcblock-me/)
* [2025-06-03, 16:05:50](https://lobste.rs/s/l8y8gg/where_did_random_go_wrong) - [Where did &lt;random&gt; go wrong?](https://codingnest.com/files/What%20Went%20Wrong%20With%20_random__.pdf)
* [2025-06-03, 15:36:24](https://lobste.rs/s/lgeepy/what_happens_if_we_inline_everything) - [What Happens If We Inline Everything?](https://sbaziotis.com/compilers/what-happens-if-we-inline-everything.html)
* [2025-06-03, 15:17:30](https://lobste.rs/s/pn7sq3/interfacing_mcp_with_combinatorial) - [Interfacing MCP with Combinatorial, Convex, and SMT Solvers](https://www.stephendiehl.com/posts/smt_and_mcp_solvers/)
* [2025-06-03, 14:17:00](https://soylentnews.org/article.pl?sid=25/06/02/1319210&amp;from=rss) - [China To Ease Rare Earth Export Restrictions To Benefit Domestic And European Semiconductor Firms](https://soylentnews.org/article.pl?sid=25/06/02/1319210&amp;from=rss)
* [2025-06-03, 13:57:00](https://soylentnews.org/breakingnews/article.pl?sid=25/06/03/1339246&amp;from=rss) - [Mount Etna Erupts as Large Plumes Rise From Italian Volcano](https://soylentnews.org/breakingnews/article.pl?sid=25/06/03/1339246&amp;from=rss)
* [2025-06-03, 13:41:56](https://lobste.rs/s/fgt681/vibe_coding_case_study_scubaduck) - [Vibe coding case study: ScubaDuck](https://blog.ezyang.com/2025/06/vibe-coding-case-study-scubaduck/)
* [2025-06-03, 09:30:00](https://soylentnews.org/article.pl?sid=25/06/01/1835204&amp;from=rss) - [Mysterious Leaker Outs Conti Ransomware Kingpins](https://soylentnews.org/article.pl?sid=25/06/01/1835204&amp;from=rss)
* [2025-06-03, 04:42:00](https://soylentnews.org/article.pl?sid=25/06/01/1533234&amp;from=rss) - [Leprosy Was in the Americas Long Before the Arrival of Europeans](https://soylentnews.org/article.pl?sid=25/06/01/1533234&amp;from=rss)
* [2025-06-02, 23:54:00](https://soylentnews.org/article.pl?sid=25/06/01/1527223&amp;from=rss) - [Intel Wins Crucial Verdict in Legal Fight Against Patent Troll VLSI](https://soylentnews.org/article.pl?sid=25/06/01/1527223&amp;from=rss)
* [2025-06-02, 19:10:00](https://soylentnews.org/article.pl?sid=25/06/01/1523222&amp;from=rss) - [120 Court Cases Have Been Caught With AI Hallucinations, According to New Database](https://soylentnews.org/article.pl?sid=25/06/01/1523222&amp;from=rss)
* [2025-06-02, 17:25:55](https://news.ycombinator.com/item?id=44161102) - [Twain Dreams](https://harpers.org/archive/2025/06/twain-dreams-samuel-clemens-john-jeremiah-sullivan/)
* [2025-06-02, 14:24:00](https://soylentnews.org/article.pl?sid=25/06/01/1517235&amp;from=rss) - [OpenAI Model Modifies Own Shutdown Script, Say Researchers](https://soylentnews.org/article.pl?sid=25/06/01/1517235&amp;from=rss)
* [2025-06-02, 09:48:00](https://soylentnews.org/article.pl?sid=25/06/01/159251&amp;from=rss) - [Clock Still Keeping Village on Time After 500 Years](https://soylentnews.org/article.pl?sid=25/06/01/159251&amp;from=rss)
* [2025-06-02, 05:00:00](https://soylentnews.org/article.pl?sid=25/06/01/151242&amp;from=rss) - [Malware Reverse Engineering - Unraveling the Secrets of Encryption in Malware](https://soylentnews.org/article.pl?sid=25/06/01/151242&amp;from=rss)
* [2025-06-02, 00:16:00](https://soylentnews.org/article.pl?sid=25/06/01/1439246&amp;from=rss) - [New JWST Observations of &apos;Trans-Neptunian Objects&apos; Could Help Reveal Our Solar System&apos;s Past](https://soylentnews.org/article.pl?sid=25/06/01/1439246&amp;from=rss)
* [2025-06-01, 21:00:00](https://soylentnews.org/breakingnews/article.pl?sid=25/06/01/2038209&amp;from=rss) - [NOAA Issues a &apos;Severe&apos; Solar Storm Alert, Auroras Expected at Lower Latitudes](https://soylentnews.org/breakingnews/article.pl?sid=25/06/01/2038209&amp;from=rss)
* [2025-06-01, 19:34:00](https://soylentnews.org/article.pl?sid=25/05/31/1945211&amp;from=rss) - [Using HDMI EMI for Fast Wireless Data Transfer](https://soylentnews.org/article.pl?sid=25/05/31/1945211&amp;from=rss)
* [2025-06-01, 14:48:00](https://soylentnews.org/article.pl?sid=25/05/30/198205&amp;from=rss) - [Victoria&apos;s Secret Website Laid Bare For Three Days After &apos;Security Incident&apos;](https://soylentnews.org/article.pl?sid=25/05/30/198205&amp;from=rss)
* [2025-06-01, 10:03:00](https://soylentnews.org/article.pl?sid=25/05/31/1552206&amp;from=rss) - [Trump Proposes Huge Reduction in National Science Foundation Funding](https://soylentnews.org/article.pl?sid=25/05/31/1552206&amp;from=rss)
* [2025-06-01, 05:18:00](https://soylentnews.org/article.pl?sid=25/05/30/1851210&amp;from=rss) - [Gallery Showcases The Dustiest, Grimiest PCs In Germany - 400 Images Of Fascinating Horror](https://soylentnews.org/article.pl?sid=25/05/30/1851210&amp;from=rss)
* [2025-06-01, 00:33:00](https://soylentnews.org/article.pl?sid=25/05/30/1846202&amp;from=rss) - [China Hygon And Sugon Merge To Form Vertically Integrated Supercomputing Giant Against US Sanctions](https://soylentnews.org/article.pl?sid=25/05/30/1846202&amp;from=rss)
* [2025-05-31, 19:47:00](https://soylentnews.org/article.pl?sid=25/05/30/190238&amp;from=rss) - [Overlooked Cells Might Explain The Human Brain’s Huge Storage Capacity](https://soylentnews.org/article.pl?sid=25/05/30/190238&amp;from=rss)
* [2025-05-31, 15:03:00](https://soylentnews.org/article.pl?sid=25/05/30/1544203&amp;from=rss) - [German Court Jails Volkswagen Execs Over Dieselgate Scandal](https://soylentnews.org/article.pl?sid=25/05/30/1544203&amp;from=rss)
* [2025-05-31, 13:54:31](https://news.ycombinator.com/item?id=44144299) - [Writing a postmortem: an interview exercise I like (2017)](https://www.danielputtick.com/writing/mapbox-postmortem-interview.html)
* [2025-05-31, 10:19:00](https://soylentnews.org/article.pl?sid=25/05/30/0621214&amp;from=rss) - [Microsoft Dumps AI Into Notepad as &apos;Copilot All the Things&apos; Mania Takes Hold](https://soylentnews.org/article.pl?sid=25/05/30/0621214&amp;from=rss)
* [2025-05-31, 10:06:16](https://news.ycombinator.com/item?id=44143199) - [Consider Knitting](https://journal.stuffwithstuff.com/2025/05/30/consider-knitting/)
* [2025-05-31, 05:37:00](https://soylentnews.org/article.pl?sid=25/05/30/041203&amp;from=rss) - [Verizon Asks Trump Admin to Destroy All Popular Phone Unlocking Requirements](https://soylentnews.org/article.pl?sid=25/05/30/041203&amp;from=rss)
* [2025-05-31, 00:49:00](https://soylentnews.org/article.pl?sid=25/05/30/0618221&amp;from=rss) - [Stack Overflow&apos;s Plan to Survive the Age of AI](https://soylentnews.org/article.pl?sid=25/05/30/0618221&amp;from=rss)
