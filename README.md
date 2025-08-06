# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Technology Impact

* [Meta Eavesdropped On Period-Tracker App's Users, Jury Rules](https://yro.slashdot.org/story/25/08/06/021226/meta-eavesdropped-on-period-tracker-apps-users-jury-rules?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Meta faces scrutiny as a jury rules on its monitoring of sensitive personal data.

* [I gave the AI arms and legs then it rejected me](https://grell.dev/blog/ai_rejection) - A dive into an experiment with AI embodiment and unexpected outcomes.

* [Teacher AI Use Is Already Out of Control and It's Not Ok](https://simonwillison.net/2025/Aug/5/greyduet-on-rteachers/) - A reflection on the unchecked integration of AI in educational environments.

* [Jim Acosta Interviews AI Version of Teenager Killed in Parkland Shooting](https://slashdot.org/story/25/08/05/2235206/jim-acosta-interviews-ai-version-of-teenager-killed-in-parkland-shooting?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A controversial use of AI to simulate an emotional conversation with a deceased individual.

* [OpenAI Offers 20 Million User Chats In ChatGPT Lawsuit. NYT Wants 120 Million.](https://yro.slashdot.org/story/25/08/05/2130255/openai-offers-20-million-user-chats-in-chatgpt-lawsuit-nyt-wants-120-million?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The clash between OpenAI and the NYT over data usage and legal settlements.

* [AI is propping up the US economy](https://www.bloodinthemachine.com/p/the-ai-bubble-is-so-big-its-propping) - An analysis of AI's effect on economic engines in the U.S.

* [Microsoft Research Tries to Predict Jobs Most Impacted (i.e., Lost) by AI](https://soylentnews.org/article.pl?sid=25/08/01/0118232&from=rss) - Research into sectors facing workforce changes due to AI-driven automation.

## Science and Innovation

* [Ozempic shows anti-aging effects in trial](https://trial.medpath.com/news/5c43f09ebb6d0f8e/ozempic-shows-anti-aging-effects-in-first-clinical-trial-reversing-biological-age-by-3-1-years) - A clinical trial reveals promising anti-aging benefits from a diabetes drug.

* [Solid-State Batteries Charge in 3 Minutes: Why Aren't They in Your Phones and Cars Yet?](https://soylentnews.org/article.pl?sid=25/08/03/2136209&from=rss) - An exploration of breakthrough battery technology and its adoption barriers.

* [Peacock Feathers Can Emit Laser Beams](https://soylentnews.org/article.pl?sid=25/08/01/0126209&from=rss) - Scientists discover the optical properties of peacock feathers capable of laser-like effects.

## Cybersecurity and Privacy

* [Perplexity Says Cloudflare's Accusations of 'Stealth' AI Scraping Are Based On Embarrassing Errors](https://tech.slashdot.org/story/25/08/05/2153232/perplexity-says-cloudflares-accusations-of-stealth-ai-scraping-are-based-on-embarrassing-errors?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Tensions rise between Cloudflare and Perplexity over website crawling activities.

* [Hacker Plants Three Strains Of Malware In A Steam Early Access Game Called Chemia](https://soylentnews.org/article.pl?sid=25/08/02/1252242&from=rss) - A warning to gamers over hidden cyber threats in popular platforms.

* [ChatGPT Users Shocked to Learn Their Chats Were in Google Search Results](https://soylentnews.org/article.pl?sid=25/08/04/0644251&from=rss) - Users express privacy concerns when ChatGPT data appears in public search indexes.

## Space and Environment

* [NASA Satellites That Scientists and Farmers Rely On May Be Destroyed On Purpose](https://tech.slashdot.org/story/25/08/06/050230/nasa-satellites-that-scientists-and-farmers-rely-on-may-be-destroyed-on-purpose?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A concerning decision to decommission essential scientific satellites.

## Historical and Cultural Perspectives

* [RIP To the Macintosh HD Hard Drive Icon, 2000-2025](https://hardware.slashdot.org/story/25/08/05/2221223/rip-to-the-macintosh-hd-hard-drive-icon-2000-2025?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The end of an era for a classic design aesthetic in the tech world.

* [Modern Tattooers Meet Their Ancient Match with the Ice Mummies of Siberia](https://soylentnews.org/article.pl?sid=25/08/01/1517221&from=rss) - Exploring the timeless art and history of tattooing with archaeological finds.

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

* [2025-08-06, 10:00:00](https://yro.slashdot.org/story/25/08/06/021226/meta-eavesdropped-on-period-tracker-apps-users-jury-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Eavesdropped On Period-Tracker App&apos;s Users, Jury Rules](https://yro.slashdot.org/story/25/08/06/021226/meta-eavesdropped-on-period-tracker-apps-users-jury-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-06, 08:14:27](https://lobste.rs/s/usdqtq/why_are_windows_semiannual_updates_named) - [Why are Windows semiannual updates named H1 and H2?](https://devblogs.microsoft.com/oldnewthing/20250805-00/?p=111435)
* [2025-08-06, 07:25:43](https://news.ycombinator.com/item?id=44808794) - [I gave the AI arms and legs then it rejected me](https://grell.dev/blog/ai_rejection)
* [2025-08-06, 07:12:08](https://news.ycombinator.com/item?id=44808693) - [Some thoughts on journals, refereeing, and the P vs. NP problem](https://blog.computationalcomplexity.org/2025/08/some-thoughts-on-journals-refereeing.html)
* [2025-08-06, 07:00:13](https://lobste.rs/s/dstkgd/rethinking_devtools_escaping_cloud_saas) - [Rethinking devtools: Escaping the Cloud and SaaS trap](https://lobste.rs/s/dstkgd/rethinking_devtools_escaping_cloud_saas)
* [2025-08-06, 07:00:00](https://tech.slashdot.org/story/25/08/06/050230/nasa-satellites-that-scientists-and-farmers-rely-on-may-be-destroyed-on-purpose?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Satellites That Scientists and Farmers Rely On May Be Destroyed On Purpose](https://tech.slashdot.org/story/25/08/06/050230/nasa-satellites-that-scientists-and-farmers-rely-on-may-be-destroyed-on-purpose?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-06, 06:29:21](https://news.ycombinator.com/item?id=44808423) - [Fire hazard of WHY2025 badge due to 18650 Li-Ion cells](https://wiki.why2025.org/Badge/Fire_hazard)
* [2025-08-06, 06:25:27](https://lobste.rs/s/umsj7d/wall_confronting_large_language_models) - [The wall confronting large language models](https://arxiv.org/abs/2507.19703)
* [2025-08-06, 05:44:29](https://news.ycombinator.com/item?id=44808122) - [Teacher AI Use Is Already Out of Control and It&apos;s Not Ok](https://simonwillison.net/2025/Aug/5/greyduet-on-rteachers/)
* [2025-08-06, 05:08:00](https://soylentnews.org/article.pl?sid=25/08/05/0156215&amp;from=rss) - [AI and the Democratization of Cybercrime](https://soylentnews.org/article.pl?sid=25/08/05/0156215&amp;from=rss)
* [2025-08-06, 05:04:36](https://news.ycombinator.com/item?id=44807868) - [Show HN: Kitten TTS – 25MB CPU-Only, Open-Source TTS Model](https://github.com/KittenML/KittenTTS)
* [2025-08-06, 03:55:07](https://lobste.rs/s/o5bqwn/proper_x86_assembler_haskell_using) - [A Proper X86 Assembler in Haskell Using the Escardó-Oliva Functional](http://blog.vmchale.com/article/escardo-oliva-functional)
* [2025-08-06, 03:49:02](https://news.ycombinator.com/item?id=44807410) - [The Amaranth hardware description language](https://amaranth-lang.org/docs/amaranth/latest/intro.html#the-amaranth-language)
* [2025-08-06, 03:37:32](https://lobste.rs/s/gtwfjj/omarchy_is_on_move) - [Omarchy is on the move](https://world.hey.com/dhh/omarchy-is-on-the-move-8f848fa4?__readwiseLocation=)
* [2025-08-06, 03:30:00](https://hardware.slashdot.org/story/25/08/05/2221223/rip-to-the-macintosh-hd-hard-drive-icon-2000-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [RIP To the Macintosh HD Hard Drive Icon, 2000-2025](https://hardware.slashdot.org/story/25/08/05/2221223/rip-to-the-macintosh-hd-hard-drive-icon-2000-2025?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-06, 03:14:22](https://news.ycombinator.com/item?id=44807210) - [I&apos;m Archiving Picocrypt](https://github.com/Picocrypt/Picocrypt/issues/134)
* [2025-08-06, 02:35:19](https://news.ycombinator.com/item?id=44807002) - [Software Rot](https://permacomputing.net/software_rot/)
* [2025-08-06, 02:02:00](https://slashdot.org/story/25/08/05/2235206/jim-acosta-interviews-ai-version-of-teenager-killed-in-parkland-shooting?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jim Acosta Interviews AI Version of Teenager Killed in Parkland Shooting](https://slashdot.org/story/25/08/05/2235206/jim-acosta-interviews-ai-version-of-teenager-killed-in-parkland-shooting?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-06, 01:25:00](https://tech.slashdot.org/story/25/08/05/2153232/perplexity-says-cloudflares-accusations-of-stealth-ai-scraping-are-based-on-embarrassing-errors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Perplexity Says Cloudflare&apos;s Accusations of &apos;Stealth&apos; AI Scraping Are Based On Embarrassing Errors](https://tech.slashdot.org/story/25/08/05/2153232/perplexity-says-cloudflares-accusations-of-stealth-ai-scraping-are-based-on-embarrassing-errors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-06, 01:06:05](https://lobste.rs/s/lixhpb/cosmopolitan_build_once_run_anywhere_c) - [cosmopolitan: build-once run-anywhere c library](https://github.com/jart/cosmopolitan)
* [2025-08-06, 00:45:00](https://yro.slashdot.org/story/25/08/05/2144208/swedish-pm-under-fire-for-using-ai-in-role?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Swedish PM Under Fire For Using AI In Role](https://yro.slashdot.org/story/25/08/05/2144208/swedish-pm-under-fire-for-using-ai-in-role?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-06, 00:25:00](https://soylentnews.org/article.pl?sid=25/08/05/0152249&amp;from=rss) - [Christiaan Huygens and the Scientific Secrets of Saturn](https://soylentnews.org/article.pl?sid=25/08/05/0152249&amp;from=rss)
* [2025-08-06, 00:11:52](https://lobste.rs/s/5blqas/be_careful_with_go_struct_embedding) - [Be Careful with Go Struct Embedding](https://mattjhall.co.uk/posts/be-careful-with-go-struct-embedding.html)
* [2025-08-06, 00:02:00](https://yro.slashdot.org/story/25/08/05/2130255/openai-offers-20-million-user-chats-in-chatgpt-lawsuit-nyt-wants-120-million?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Offers 20 Million User Chats In ChatGPT Lawsuit. NYT Wants 120 Million.](https://yro.slashdot.org/story/25/08/05/2130255/openai-offers-20-million-user-chats-in-chatgpt-lawsuit-nyt-wants-120-million?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-05, 23:20:00](https://entertainment.slashdot.org/story/25/08/05/2118233/roku-launches-cheap-ad-free-streaming-service-howdy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Roku Launches Cheap, Ad-Free Streaming Service &apos;Howdy&apos;](https://entertainment.slashdot.org/story/25/08/05/2118233/roku-launches-cheap-ad-free-streaming-service-howdy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-05, 22:40:00](https://hardware.slashdot.org/story/25/08/05/2110203/intel-struggles-with-key-manufacturing-process-for-next-pc-chip?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel Struggles With Key Manufacturing Process For Next PC Chip](https://hardware.slashdot.org/story/25/08/05/2110203/intel-struggles-with-key-manufacturing-process-for-next-pc-chip?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-05, 22:00:00](https://tech.slashdot.org/story/25/08/05/211240/googles-new-genie-3-ai-model-creates-video-game-worlds-in-real-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s New Genie 3 AI Model Creates Video Game Worlds In Real Time](https://tech.slashdot.org/story/25/08/05/211240/googles-new-genie-3-ai-model-creates-video-game-worlds-in-real-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-05, 21:22:00](https://hardware.slashdot.org/story/25/08/05/1935219/dram-prices-soar-as-china-eyes-self-reliance-for-high-end-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DRAM Prices Soar as China Eyes Self-Reliance For High-End Chips](https://hardware.slashdot.org/story/25/08/05/1935219/dram-prices-soar-as-china-eyes-self-reliance-for-high-end-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-05, 21:14:49](https://news.ycombinator.com/item?id=44804411) - [Create personal illustrated storybooks in the Gemini app](https://blog.google/products/gemini/storybooks/)
* [2025-08-05, 21:02:21](https://news.ycombinator.com/item?id=44804230) - [Kyber (YC W23) is hiring enterprise account executives](https://www.ycombinator.com/companies/kyber/jobs/6RvaAVR-enterprise-account-executive-ae)
* [2025-08-05, 20:44:00](https://tech.slashdot.org/story/25/08/05/1922258/us-proposes-new-drone-rules-that-could-lead-to-starbucks-amazon-deliveries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Proposes New Drone Rules That Could Lead To Starbucks, Amazon Deliveries](https://tech.slashdot.org/story/25/08/05/1922258/us-proposes-new-drone-rules-that-could-lead-to-starbucks-amazon-deliveries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-05, 20:04:00](https://science.slashdot.org/story/25/08/05/190228/retraction-prone-editors-identified-at-megajournal-plos-one?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Retraction-Prone Editors Identified at Megajournal PLoS ONE](https://science.slashdot.org/story/25/08/05/190228/retraction-prone-editors-identified-at-megajournal-plos-one?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-05, 19:40:00](https://soylentnews.org/article.pl?sid=25/08/04/0644251&amp;from=rss) - [ChatGPT Users Shocked to Learn Their Chats Were in Google Search Results](https://soylentnews.org/article.pl?sid=25/08/04/0644251&amp;from=rss)
* [2025-08-05, 19:38:11](https://lobste.rs/s/uvvpzo/have_you_ever_regretted_open_sourcing) - [Have you ever regretted open-sourcing something?](https://lobste.rs/s/uvvpzo/have_you_ever_regretted_open_sourcing)
* [2025-08-05, 19:36:01](https://lobste.rs/s/k2qbam/gate_level_emulation_intel_4004_4004) - [Gate-level emulation of an Intel 4004 in 4004 bytes of C](https://nicholas.carlini.com/writing/2025/ioccc-intel-4004-in-4004-bytes-c.html)
* [2025-08-05, 19:25:00](https://slashdot.org/story/25/08/05/1848236/openai-releases-first-open-weight-models-since-gpt-2?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Releases First Open-Weight Models Since GPT-2](https://slashdot.org/story/25/08/05/1848236/openai-releases-first-open-weight-models-since-gpt-2?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-05, 19:19:25](https://news.ycombinator.com/item?id=44802916) - [AI is propping up the US economy](https://www.bloodinthemachine.com/p/the-ai-bubble-is-so-big-its-propping)
* [2025-08-05, 19:17:38](https://news.ycombinator.com/item?id=44802886) - [Spotting base64 encoded JSON, certificates, and private keys](https://ergaster.org/til/base64-encoded-json/)
* [2025-08-05, 19:17:28](https://lobste.rs/s/nh8vhk/til_you_can_spot_base64_encoded_json) - [TIL that You can spot base64 encoded JSON, certificates, and private keys](https://ergaster.org/til/base64-encoded-json/)
* [2025-08-05, 19:09:11](https://lobste.rs/s/tpb5a8/digital_hygiene_emails) - [Digital hygiene: Emails](https://herman.bearblog.dev/digital-hygiene-emails/)
* [2025-08-05, 18:46:18](https://news.ycombinator.com/item?id=44802414) - [Ollama Turbo](https://ollama.com/turbo)
* [2025-08-05, 18:44:00](https://news.slashdot.org/story/25/08/05/188236/three-us-agencies-get-failing-grades-for-not-following-it-best-practices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Three US Agencies Get Failing Grades For Not Following IT Best Practices](https://news.slashdot.org/story/25/08/05/188236/three-us-agencies-get-failing-grades-for-not-following-it-best-practices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-05, 18:07:27](https://lobste.rs/s/fbbuql/gleam_v1_12_0_released) - [Gleam v1.12.0 released](https://gleam.run/news/no-more-dependency-management-headaches/)
* [2025-08-05, 17:39:26](https://news.ycombinator.com/item?id=44801399) - [Show HN: Whittle – A shrinking word game](https://playwhittle.com/)
* [2025-08-05, 17:18:37](https://news.ycombinator.com/item?id=44801027) - [Consider using Zstandard and/or LZ4 instead of Deflate](https://github.com/w3c/png/issues/39)
* [2025-08-05, 17:12:33](https://lobste.rs/s/fcm3tf/rod_burstall_memoriam) - [Rod Burstall: In Memoriam](https://arxiv.org/html/2505.06456v1)
* [2025-08-05, 17:05:32](https://lobste.rs/s/4vcb3e/open_models_by_openai) - [Open models by OpenAI](https://openai.com/open-models/)
* [2025-08-05, 17:02:02](https://news.ycombinator.com/item?id=44800746) - [Open models by OpenAI](https://openai.com/open-models/)
* [2025-08-05, 16:28:05](https://news.ycombinator.com/item?id=44800185) - [Claude Opus 4.1](https://www.anthropic.com/news/claude-opus-4-1)
* [2025-08-05, 16:17:47](https://lobste.rs/s/12odh4/quickshell_building_blocks_for_your) - [Quickshell, building blocks for your desktop](https://quickshell.org/)
* [2025-08-05, 15:59:09](https://lobste.rs/s/rutoil/no_ai_is_not_making_engineers_10x_as) - [No, AI is not Making Engineers 10x as Productive](https://colton.dev/blog/curing-your-ai-10x-engineer-imposter-syndrome/)
* [2025-08-05, 14:54:00](https://soylentnews.org/article.pl?sid=25/08/03/2140229&amp;from=rss) - [China Forms AI Alliances To Cut U.S. Tech Reliance](https://soylentnews.org/article.pl?sid=25/08/03/2140229&amp;from=rss)
* [2025-08-05, 14:38:36](https://news.ycombinator.com/item?id=44798553) - [Show HN: Stagewise (YC S25) – Front end coding agent for existing codebases](https://github.com/stagewise-io/stagewise)
* [2025-08-05, 14:38:14](https://lobste.rs/s/6isvtq/proxmox_virtual_environment_9_0_with) - [Proxmox Virtual Environment 9.0 with Debian 13 released](https://www.proxmox.com/en/about/company-details/press-releases/proxmox-virtual-environment-9-0)
* [2025-08-05, 14:28:39](https://news.ycombinator.com/item?id=44798410) - [Ozempic shows anti-aging effects in trial](https://trial.medpath.com/news/5c43f09ebb6d0f8e/ozempic-shows-anti-aging-effects-in-first-clinical-trial-reversing-biological-age-by-3-1-years)
* [2025-08-05, 14:10:42](https://news.ycombinator.com/item?id=44798189) - [Things that helped me get out of the AI 10x engineer imposter syndrome](https://colton.dev/blog/curing-your-ai-10x-engineer-imposter-syndrome/)
* [2025-08-05, 14:08:52](https://news.ycombinator.com/item?id=44798166) - [Genie 3: A new frontier for world models](https://deepmind.google/discover/blog/genie-3-a-new-frontier-for-world-models/)
* [2025-08-05, 12:34:47](https://lobste.rs/s/99dxb4/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/99dxb4/what_are_you_doing_this_week)
* [2025-08-05, 12:10:08](https://lobste.rs/s/j6brbd/psf_has_paused_our_grants_program) - [The PSF has paused our Grants Program](https://pyfound.blogspot.com/2025/08/the-psf-has-paused-our-grants-program.html)
* [2025-08-05, 11:55:20](https://news.ycombinator.com/item?id=44796953) - [Build Your Own Lisp](https://www.buildyourownlisp.com/)
* [2025-08-05, 10:56:07](https://news.ycombinator.com/item?id=44796526) - [Scientific fraud has become an &apos;industry,&apos; analysis finds](https://www.science.org/content/article/scientific-fraud-has-become-industry-alarming-analysis-finds)
* [2025-08-05, 10:03:00](https://soylentnews.org/article.pl?sid=25/08/03/2136209&amp;from=rss) - [Solid-State Batteries Charge in 3 Minutes:  Why Aren&apos;t They in Your Phones and Cars Yet?](https://soylentnews.org/article.pl?sid=25/08/03/2136209&amp;from=rss)
* [2025-08-05, 09:01:54](https://news.ycombinator.com/item?id=44795825) - [uBlock Origin Lite now available for Safari](https://apps.apple.com/app/ublock-origin-lite/id6745342698)
* [2025-08-05, 07:09:02](https://lobste.rs/s/0wmqnt/getting_started_with_randomised_testing) - [Getting Started with Randomised Testing](https://lewiscampbell.tech/blog/250805.html)
* [2025-08-05, 06:50:48](https://lobste.rs/s/xbxuo6/lisp_interpreter_with_gc_662_lines_odin) - [Lisp interpreter with GC in 662 lines of Odin (and &lt;500 lines of C)](https://github.com/krig/LISP)
* [2025-08-05, 05:22:00](https://soylentnews.org/article.pl?sid=25/08/03/0242234&amp;from=rss) - [Ousted Vaccine Panel Members Say Rigorous Science is Being Abandoned](https://soylentnews.org/article.pl?sid=25/08/03/0242234&amp;from=rss)
* [2025-08-05, 04:45:20](https://lobste.rs/s/a1njck/what_trick_trade_took_you_too_long_learn) - [What trick of the trade took you too long to learn?](https://lobste.rs/s/a1njck/what_trick_trade_took_you_too_long_learn)
* [2025-08-05, 01:43:40](https://news.ycombinator.com/item?id=44793446) - [Tell HN: Anthropic expires paid credits after a year](https://news.ycombinator.com/item?id=44793446)
* [2025-08-05, 00:40:00](https://soylentnews.org/article.pl?sid=25/08/03/0225206&amp;from=rss) - [World News: United Nations Report Finds UN Reports Aren’t Widely Read](https://soylentnews.org/article.pl?sid=25/08/03/0225206&amp;from=rss)
* [2025-08-04, 23:13:37](https://lobste.rs/s/z3zgvi/every_reason_why_i_hate_ai) - [Every reason why I hate AI](https://malwaretech.com/2025/08/every-reason-why-i-hate-ai.html)
* [2025-08-04, 22:16:41](https://lobste.rs/s/s69lnq/markdown_monster) - [Markdown Monster](https://git.sr.ht/~xigoi/markdown-monster/blob/master/monster.md)
* [2025-08-04, 20:00:00](https://soylentnews.org/article.pl?sid=25/08/03/0219201&amp;from=rss) - [Brain Scans Reveal Parahippocampal Cortex Thinning in Those with Depression and Neuroticism](https://soylentnews.org/article.pl?sid=25/08/03/0219201&amp;from=rss)
* [2025-08-04, 19:13:35](https://news.ycombinator.com/item?id=44790191) - [Show HN: FFlags – Feature flags as code, served from the edge](https://fflags.com)
* [2025-08-04, 15:15:00](https://soylentnews.org/article.pl?sid=25/08/03/026228&amp;from=rss) - [Clouds, Sub Cables, Report No Impact From Monster Quake](https://soylentnews.org/article.pl?sid=25/08/03/026228&amp;from=rss)
* [2025-08-04, 13:59:08](https://lobste.rs/s/i81fly/how_perplexity_is_evading_anti_crawling) - [How Perplexity is Evading Anti-crawling Measures](https://blog.cloudflare.com/perplexity-is-using-stealth-undeclared-crawlers-to-evade-website-no-crawl-directives/)
* [2025-08-04, 10:33:00](https://soylentnews.org/article.pl?sid=25/08/02/2149227&amp;from=rss) - [Coffee Prices Rise as U.S. Imposes Tariffs on Top Exporter Brazil](https://soylentnews.org/article.pl?sid=25/08/02/2149227&amp;from=rss)
* [2025-08-04, 06:35:17](https://news.ycombinator.com/item?id=44782690) - [Kart – Distributed version-control for geospatial and tabular data](https://kartproject.org/)
* [2025-08-04, 05:47:00](https://soylentnews.org/article.pl?sid=25/08/02/2145230&amp;from=rss) - [Kali Linux Can Now Run in Apple Containers on macOS Systems](https://soylentnews.org/article.pl?sid=25/08/02/2145230&amp;from=rss)
* [2025-08-04, 01:02:00](https://soylentnews.org/article.pl?sid=25/08/02/1318209&amp;from=rss) - [Subliminal Learning: Language Models Transmit Behavioral Traits Via Hidden Signals in Data](https://soylentnews.org/article.pl?sid=25/08/02/1318209&amp;from=rss)
* [2025-08-03, 20:21:00](https://soylentnews.org/article.pl?sid=25/08/02/1252242&amp;from=rss) - [Hacker Plants Three Strains Of Malware In A Steam Early Access Game Called Chemia](https://soylentnews.org/article.pl?sid=25/08/02/1252242&amp;from=rss)
* [2025-08-03, 15:35:00](https://soylentnews.org/article.pl?sid=25/08/02/1248204&amp;from=rss) - [Hackers on Planet Earth (HOPE) In Person and Virtual Tickets Being Sold!](https://soylentnews.org/article.pl?sid=25/08/02/1248204&amp;from=rss)
* [2025-08-03, 10:50:00](https://soylentnews.org/article.pl?sid=25/08/02/1242221&amp;from=rss) - [Linux Kernel 6.16 Lands With 38 Million Lines of Code](https://soylentnews.org/article.pl?sid=25/08/02/1242221&amp;from=rss)
* [2025-08-03, 06:05:00](https://soylentnews.org/article.pl?sid=25/08/02/0446236&amp;from=rss) - [Domino&apos;s Deploys Boston Dynamics&apos; Robot Dog To Deliver Pizza And Fend Off Seagulls On Beaches](https://soylentnews.org/article.pl?sid=25/08/02/0446236&amp;from=rss)
* [2025-08-03, 01:22:00](https://soylentnews.org/article.pl?sid=25/08/01/2222237&amp;from=rss) - [Hackers Steal Driver&apos;s Licenses, Private Data of Women Who Signed up for App that Lets Them Rate Men](https://soylentnews.org/article.pl?sid=25/08/01/2222237&amp;from=rss)
* [2025-08-02, 20:35:00](https://soylentnews.org/article.pl?sid=25/08/01/1517221&amp;from=rss) - [Modern Tattooers Meet Their Ancient Match with the Ice Mummies of Siberia](https://soylentnews.org/article.pl?sid=25/08/01/1517221&amp;from=rss)
* [2025-08-02, 15:53:00](https://soylentnews.org/article.pl?sid=25/08/01/1511227&amp;from=rss) - [Microsoft Bans LibreOffice Developer&apos;s Account Without Warning, Rejects Appeal](https://soylentnews.org/article.pl?sid=25/08/01/1511227&amp;from=rss)
* [2025-08-02, 11:37:00](https://news.ycombinator.com/item?id=44766771) - [Ask HN: Have you ever regretted open-sourcing something?](https://news.ycombinator.com/item?id=44766771)
* [2025-08-02, 11:08:00](https://soylentnews.org/article.pl?sid=25/08/01/1139259&amp;from=rss) - [Radioactive Wasp Nest Found at Site Where US Once Made Nuclear Bombs](https://soylentnews.org/article.pl?sid=25/08/01/1139259&amp;from=rss)
* [2025-08-02, 09:20:42](https://news.ycombinator.com/item?id=44765981) - [The first widespread cure for HIV could be in children](https://www.wired.com/story/the-first-widespread-cure-for-hiv-could-be-in-children/)
* [2025-08-02, 08:29:23](https://news.ycombinator.com/item?id=44765748) - [C++26 Reflections adventures and compile time UML](https://www.reachablecode.com/2025/07/31/c26-reflections-adventures-compile-time-uml/)
* [2025-08-02, 06:20:00](https://soylentnews.org/article.pl?sid=25/08/01/0126209&amp;from=rss) - [Peacock Feathers Can Emit Laser Beams](https://soylentnews.org/article.pl?sid=25/08/01/0126209&amp;from=rss)
* [2025-08-02, 01:37:00](https://soylentnews.org/article.pl?sid=25/08/01/0118232&amp;from=rss) - [Microsoft Research Tries to Predict Jobs Most Impacted (i.e., Lost) by AI](https://soylentnews.org/article.pl?sid=25/08/01/0118232&amp;from=rss)
