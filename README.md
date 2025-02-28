# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Artificial Intelligence

* [Harold Cohen and Aaron – A 40-Year Collaboration (2016)](https://computerhistory.org/blog/harold-cohen-and-aaron-a-40-year-collaboration/) - A look at the groundbreaking fusion of art and artificial intelligence through the lens of Harold Cohen's collaboration with the AARON program over several decades.

* [Towards an AI Co-Scientist](https://arxiv.org/abs/2502.18864) - Researchers discuss utilizing AI as collaborative scientists, outlining emerging models to automate and support scientific discovery processes.

* [DeepMind CEO Says AGI Definition Has Been 'Watered Down'](https://slashdot.org/story/25/02/28/1739242/deepmind-ceo-says-agi-definition-has-been-watered-down?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The CEO of DeepMind critiques the evolving definition of Artificial General Intelligence (AGI), claiming the term has lost clarity in its meaning.

* [OpenAI Sam Altman Says the Company Is 'Out of GPUs'](https://tech.slashdot.org/story/25/02/27/2147257/openai-sam-altman-says-the-company-is-out-of-gpus?utm_source=rss1.0mainlinkanon&utm_medium=feed) - OpenAI faces significant hardware shortages, revealing challenges in scaling advanced AI models.

* [Viral Video Shows AIs Conversing In Their Own Language](https://tech.slashdot.org/story/25/02/28/0058237/viral-video-shows-ais-conversing-in-their-own-language?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A viral video prompts debate on the autonomy and self-organization of AI communication models.

## Cybersecurity and Privacy

* [Apple's Find My Network Exploit Lets Hackers Silently Track Any Bluetooth Device](https://yro.slashdot.org/story/25/02/28/013227/apples-find-my-network-exploit-lets-hackers-silently-track-any-bluetooth-device?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A vulnerability in Apple's "Find My" network allows hackers to track Bluetooth-enabled devices without user consent.

* [Github scam investigation: Thousands of 'mods' and 'cracks' stealing data](https://timsh.org/github-scam-investigation-thousands-of-mods-and-cracks-stealing-your-data/) - An investigative report uncovers a widespread GitHub scam exploiting "mods" and "cracks" to steal user data.

* [Mozilla's Updated ToS: We Own All Info You Put Into Firefox](https://news.slashdot.org/story/25/02/28/1147239/mozillas-updated-tos-we-own-all-info-you-put-into-firefox?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Mozilla's newly updated Terms of Service raise concerns by asserting ownership over information inputted into Firefox.

## Healthcare and Medical Advancements

* [Medical treatments devised for war can quickly be implemented in US hospitals](https://theconversation.com/how-medical-treatments-devised-for-war-can-quickly-be-implemented-in-us-hospitals-to-save-lives-247752) - The rapid adaptation of battlefield medical techniques to civilian healthcare is explored in a new report.

* [Violence alters human genes for generations, researchers discover](https://news.ufl.edu/2025/02/syrian-violence-epigenetics/) - A groundbreaking study finds that exposure to violence can trigger multigenerational epigenetic changes in humans.

* [Surgery aims to restore sight by implanting a telescopic lens in a tooth](https://www.cbc.ca/radio/asithappens/tooth-in-eye-surgery-canada-1.7470626) - An innovative surgical procedure using teeth to implant a telescopic lens offers new hope for blindness treatment.

## Major Corporate and Policy Developments

* [US Investigates Whether Deepseek Obtained NVidia Chips Through Singapore to Bypass Restrictions](https://soylentnews.org/article.pl?sid=25/02/28/0643220&from=rss) - Authorities investigate allegations that Deepseek routed Nvidia chips through Singapore to evade U.S. trade restrictions.

* [President Trump: UK Encryption Policy 'Something You Hear About With China'](https://news.slashdot.org/story/25/02/28/1620208/president-trump-uk-encryption-policy-something-you-hear-about-with-china?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Former President Trump critiques the UK's encryption stance as overly restrictive, drawing comparisons to Chinese policies.

## Scientific Innovation and Discoveries

* [Piezoelectric Catalyst Destroys Forever Chemicals](https://soylentnews.org/article.pl?sid=25/02/27/1633200&from=rss) - Scientists develop a novel catalyst using piezoelectric materials to break down persistent environmental contaminants.

## Cultural and Historical Tributes

* [Boris Spassky: 1937–2025](https://en.chessbase.com/post/boris-spassky-1937-2025) - The life and legacy of Boris Spassky, former chess world champion, remembered after his passing.

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

* [2025-02-28, 18:50:00](https://tech.slashdot.org/story/25/02/28/1845202/googles-sergey-brin-urges-workers-to-the-office-at-least-every-weekday?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google's Sergey Brin Urges Workers To the Office at Least Every Weekday](https://tech.slashdot.org/story/25/02/28/1845202/googles-sergey-brin-urges-workers-to-the-office-at-least-every-weekday?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-28, 18:17:00](https://tech.slashdot.org/story/25/02/28/1817248/us-workers-see-ai-induced-productivity-growth-fed-survey-shows?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [US Workers See AI-Induced Productivity Growth, Fed Survey Shows](https://tech.slashdot.org/story/25/02/28/1817248/us-workers-see-ai-induced-productivity-growth-fed-survey-shows?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-28, 18:02:42](https://news.ycombinator.com/item?id=43208524) - [Harold Cohen and Aaron – A 40-Year Collaboration (2016)](https://computerhistory.org/blog/harold-cohen-and-aaron-a-40-year-collaboration/)
* [2025-02-28, 17:53:11](https://lobste.rs/s/xhssly/thoughts_about_rustdoc) - [Thoughts about rustdoc](https://lobste.rs/s/xhssly/thoughts_about_rustdoc)
* [2025-02-28, 17:40:06](https://lobste.rs/s/h38zur/structured_data_extraction_from) - [Structured data extraction from unstructured content using LLM schemas](https://simonwillison.net/2025/Feb/28/llm-schemas/)
* [2025-02-28, 17:33:00](https://slashdot.org/story/25/02/28/1739242/deepmind-ceo-says-agi-definition-has-been-watered-down?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [DeepMind CEO Says AGI Definition Has Been 'Watered Down'](https://slashdot.org/story/25/02/28/1739242/deepmind-ceo-says-agi-definition-has-been-watered-down?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-28, 17:17:00](https://soylentnews.org/article.pl?sid=25/02/28/0643220&from=rss) - [US Investigates Whether Deepseek Obtained NVidia Chips Through Singapore to Bypass Restrictions](https://soylentnews.org/article.pl?sid=25/02/28/0643220&from=rss)
* [2025-02-28, 17:12:26](https://news.ycombinator.com/item?id=43207942) - [Show HN: Globstar – Open-source static analysis toolkit](https://news.ycombinator.com/item?id=43207942)
* [2025-02-28, 17:01:43](https://news.ycombinator.com/item?id=43207831) - [3,200% CPU Utilization](https://josephmate.github.io/2025-02-26-3200p-cpu-util/)
* [2025-02-28, 16:40:00](https://news.slashdot.org/story/25/02/28/1620208/president-trump-uk-encryption-policy-something-you-hear-about-with-china?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [President Trump: UK Encryption Policy 'Something You Hear About With China'](https://news.slashdot.org/story/25/02/28/1620208/president-trump-uk-encryption-policy-something-you-hear-about-with-china?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-28, 16:18:34](https://news.ycombinator.com/item?id=43207331) - [Medical treatments devised for war can quickly be implemented in US hospitals](https://theconversation.com/how-medical-treatments-devised-for-war-can-quickly-be-implemented-in-us-hospitals-to-save-lives-247752)
* [2025-02-28, 16:00:00](https://news.slashdot.org/story/25/02/28/1147239/mozillas-updated-tos-we-own-all-info-you-put-into-firefox?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Mozilla's Updated ToS: We Own All Info You Put Into Firefox](https://news.slashdot.org/story/25/02/28/1147239/mozillas-updated-tos-we-own-all-info-you-put-into-firefox?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-28, 15:33:39](https://news.ycombinator.com/item?id=43206722) - [Violence alters human genes for generations, researchers discover](https://news.ufl.edu/2025/02/syrian-violence-epigenetics/)
* [2025-02-28, 15:20:00](https://tech.slashdot.org/story/25/02/28/141222/google-tweak-creates-crisis-for-product-review-sites?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google Tweak Creates Crisis for Product-Review Sites](https://tech.slashdot.org/story/25/02/28/141222/google-tweak-creates-crisis-for-product-review-sites?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-28, 15:08:41](https://lobste.rs/s/eah1pb/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/eah1pb/what_are_you_doing_this_weekend)
* [2025-02-28, 14:45:36](https://news.ycombinator.com/item?id=43206174) - [Write to Escape Your Default Setting](https://kupajo.com/write-to-escape-your-default-setting/)
* [2025-02-28, 14:40:31](https://lobste.rs/s/ywwqvr/netboot_windows_11_with_iscsi_ipxe) - [Netboot Windows 11 with iSCSI and iPXE](https://terinstock.com/post/2025/02/Netboot-Windows-11-with-iSCSI-and-iPXE/)
* [2025-02-28, 14:40:00](https://slashdot.org/story/25/02/28/1426223/microsoft-to-shut-down-skype-in-may-shift-users-to-teams?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft To Shut Down Skype in May, Shift Users To Teams](https://slashdot.org/story/25/02/28/1426223/microsoft-to-shut-down-skype-in-may-shift-users-to-teams?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-28, 14:35:12](https://lobste.rs/s/ccazb3/let_s_hold_hands) - [Let's Hold Hands](https://untested.sonnet.io/notes/lets-hold-hands/)
* [2025-02-28, 14:09:19](https://news.ycombinator.com/item?id=43205755) - [Towards an AI Co-Scientist](https://arxiv.org/abs/2502.18864)
* [2025-02-28, 14:00:00](https://news.slashdot.org/story/25/02/28/136217/citigroup-erroneously-credited-client-account-with-81-trillion-in-near-miss?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Citigroup Erroneously Credited Client Account With $81 Trillion in 'Near Miss'](https://news.slashdot.org/story/25/02/28/136217/citigroup-erroneously-credited-client-account-with-81-trillion-in-near-miss?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-28, 13:46:55](https://lobste.rs/s/2sxwzh/how_couchdb_prevents_data_corruption) - [How CouchDB Prevents Data Corruption: fsync](https://neighbourhood.ie/blog/2025/02/26/how-couchdb-prevents-data-corruption-fsync)
* [2025-02-28, 13:37:45](https://lobste.rs/s/983aqv/leader_election_with_s3_if_match) - [Leader election with S3 and If-Match](https://quanttype.net/posts/2025-02-25-leader-election-with-s3-and-if-match.html)
* [2025-02-28, 12:58:26](https://lobste.rs/s/ptr2k3/garnix_modules) - [garnix modules](https://garnix.io/blog/garnix-modules)
* [2025-02-28, 12:34:58](https://lobste.rs/s/xwaqpt/ea_open_sourced_command_conquer_red_alert) - [EA open sourced Command & Conquer, Red Alert, Renegade and Generals](https://store.steampowered.com/news/app/2229890/view/502818210084553731)
* [2025-02-28, 12:32:00](https://soylentnews.org/article.pl?sid=25/02/28/0640209&from=rss) - [PSA: Amazon Kills “Download & Transfer Via USB” Option for Kindles This Week](https://soylentnews.org/article.pl?sid=25/02/28/0640209&from=rss)
* [2025-02-28, 12:00:16](https://news.ycombinator.com/item?id=43204682) - [Openlayer (YC S21) is hiring a senior back end engineer](https://www.ycombinator.com/companies/openlayer/jobs/yIE9WI3-senior-backend-engineer)
* [2025-02-28, 11:47:52](https://news.ycombinator.com/item?id=43204604) - [Netboot Windows 11 with iSCSI and iPXE](https://terinstock.com/post/2025/02/Netboot-Windows-11-with-iSCSI-and-iPXE/)
* [2025-02-28, 11:21:04](https://news.ycombinator.com/item?id=43204406) - [WebShield – A new wide-spectrum content blocker for Safari](https://github.com/arjpar/WebShield)
* [2025-02-28, 10:29:31](https://lobste.rs/s/nzz7an/mouseless_tale_trying_for_keyboard) - [A mouseless tale: trying for a keyboard-driven desktop](https://lwn.net/Articles/1005332/)
* [2025-02-28, 09:29:41](https://lobste.rs/s/xb3ou0/simon_peyton_jones_on_notes_source_code) - [Simon Peyton Jones on Notes in source code (2021)](https://www.youtube.com/watch?v=4RuLzL_q0zs&t=2640s)
* [2025-02-28, 08:27:36](https://news.ycombinator.com/item?id=43203158) - [Github scam investigation: Thousands of “mods” and “cracks” stealing data](https://timsh.org/github-scam-investigation-thousands-of-mods-and-cracks-stealing-your-data/)
* [2025-02-28, 08:02:33](https://news.ycombinator.com/item?id=43202982) - [Boris Spassky: 1937–2025](https://en.chessbase.com/post/boris-spassky-1937-2025)
* [2025-02-28, 07:47:00](https://soylentnews.org/article.pl?sid=25/02/27/1641235&from=rss) - [NASA's James Webb Space Telescope Faces Potential 20% Budget Cut Just 4 Years Into its Mission](https://soylentnews.org/article.pl?sid=25/02/27/1641235&from=rss)
* [2025-02-28, 07:32:26](https://lobste.rs/s/4jw0rr/wasm_wayland_web_www) - [WASM Wayland Web (WWW)](https://joeyh.name/blog/entry/WASM_Wayland_Web_WWW/)
* [2025-02-28, 07:00:00](https://news.slashdot.org/story/25/02/27/2138217/more-random-rich-people-are-going-to-space?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [More Random Rich People Are Going To Space](https://news.slashdot.org/story/25/02/27/2138217/more-random-rich-people-are-going-to-space?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-28, 05:31:49](https://news.ycombinator.com/item?id=43202052) - [Microsoft is reportedly killing Skype after 14 years of neglect](https://www.windowscentral.com/microsoft/microsoft-is-reportedly-killing-skype-after-14-years-of-neglect)
* [2025-02-28, 05:20:13](https://news.ycombinator.com/item?id=43201974) - [Microsoft begins turning off uBlock Origin and other extensions in Edge](https://www.neowin.net/news/microsoft-begins-turning-off-ublock-origin-and-other-extensions-in-edge/)
* [2025-02-28, 04:57:17](https://lobste.rs/s/xjnx95/distributed_systems_programming_has) - [Distributed Systems Programming Has Stalled](https://www.shadaj.me/writing/distributed-programming-stalled)
* [2025-02-28, 04:26:52](https://news.ycombinator.com/item?id=43201682) - [Surgery aims to restore sight by implanting a telescopic lens in a tooth](https://www.cbc.ca/radio/asithappens/tooth-in-eye-surgery-canada-1.7470626)
* [2025-02-28, 03:30:00](https://tech.slashdot.org/story/25/02/28/0058237/viral-video-shows-ais-conversing-in-their-own-language?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Viral Video Shows AIs Conversing In Their Own Language](https://tech.slashdot.org/story/25/02/28/0058237/viral-video-shows-ais-conversing-in-their-own-language?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-28, 03:17:19](https://lobste.rs/s/d9ivn2/make_cross_views) - [Make Cross Views](https://moultano.wordpress.com/2025/02/24/you-should-make-cross-views/)
* [2025-02-28, 03:05:00](https://soylentnews.org/article.pl?sid=25/02/27/1633200&from=rss) - [Piezoelectric Catalyst Destroys Forever Chemicals](https://soylentnews.org/article.pl?sid=25/02/27/1633200&from=rss)
* [2025-02-28, 02:20:11](https://lobste.rs/s/ioztzf/there_isn_t_much_point_http_2_past_load) - [There Isn’t Much Point to HTTP/2 Past The Load Balancer](https://byroot.github.io/ruby/performance/2025/02/24/http2-past-the-load-balancer.html)
* [2025-02-28, 02:02:00](https://yro.slashdot.org/story/25/02/28/013227/apples-find-my-network-exploit-lets-hackers-silently-track-any-bluetooth-device?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple's Find My Network Exploit Lets Hackers Silently Track Any Bluetooth Device](https://yro.slashdot.org/story/25/02/28/013227/apples-find-my-network-exploit-lets-hackers-silently-track-any-bluetooth-device?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-28, 01:34:00](https://soylentnews.org/meta/article.pl?sid=25/02/21/1425224&from=rss) - [Adoption of Site Documentation - THIS IS THE VOTE - RESTORED](https://soylentnews.org/meta/article.pl?sid=25/02/21/1425224&from=rss)
* [2025-02-28, 01:29:49](https://news.ycombinator.com/item?id=43200604) - [Welcome to Ladybird, a truly independent web browser](https://github.com/LadybirdBrowser/ladybird)
* [2025-02-28, 01:26:26](https://news.ycombinator.com/item?id=43200572) - [Fire-Flyer File System from DeepSeek](https://github.com/deepseek-ai/3FS)
* [2025-02-28, 01:25:00](https://tech.slashdot.org/story/25/02/28/0046233/apple-launches-age-assurance-tech-as-us-states-mull-social-media-laws?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Launches 'Age Assurance' Tech As US States Mull Social Media Laws](https://tech.slashdot.org/story/25/02/28/0046233/apple-launches-age-assurance-tech-as-us-states-mull-social-media-laws?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-28, 00:45:00](https://apple.slashdot.org/story/25/02/27/2152210/microsoft-releases-a-copilot-app-for-mac?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Releases a Copilot App For Mac](https://apple.slashdot.org/story/25/02/27/2152210/microsoft-releases-a-copilot-app-for-mac?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-28, 00:02:00](https://tech.slashdot.org/story/25/02/27/2147257/openai-sam-altman-says-the-company-is-out-of-gpus?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [OpenAI Sam Altman Says the Company Is 'Out of GPUs'](https://tech.slashdot.org/story/25/02/27/2147257/openai-sam-altman-says-the-company-is-out-of-gpus?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-27, 23:20:00](https://games.slashdot.org/story/25/02/27/2144203/ea-releases-source-code-for-old-command-and-conquer-games?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [EA Releases Source Code For Old Command and Conquer Games](https://games.slashdot.org/story/25/02/27/2144203/ea-releases-source-code-for-old-command-and-conquer-games?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-27, 22:24:22](https://news.ycombinator.com/item?id=43199210) - [World-first experimental cancer treatment paves way for clinical trial](https://www.wehi.edu.au/news/world-first-experimental-cancer-treatment-paves-way-for-clinical-trial/)
* [2025-02-27, 22:19:00](https://soylentnews.org/article.pl?sid=25/02/26/190229&from=rss) - [Right to Repair Laws Have Now Been Introduced in All 50 US States](https://soylentnews.org/article.pl?sid=25/02/26/190229&from=rss)
* [2025-02-27, 21:11:38](https://lobste.rs/s/5i3syb/visual_programming_is_stuck_on_form) - [Visual programming is stuck on the form](https://interjectedfuture.com/visual-programming-is-stuck-on-the-form/)
* [2025-02-27, 20:09:36](https://lobste.rs/s/h5zfdf/branded_types) - [Branded Types](https://www.learningtypescript.com/articles/branded-types)
* [2025-02-27, 20:01:16](https://news.ycombinator.com/item?id=43197872) - [GPT-4.5](https://openai.com/index/introducing-gpt-4-5/)
* [2025-02-27, 19:11:13](https://lobste.rs/s/sdm7pb/tips_debug_hanging_go_programs) - [Tips to debug hanging Go programs](https://michael.stapelberg.ch/posts/2025-02-27-debug-hanging-go-programs/)
* [2025-02-27, 18:54:19](https://lobste.rs/s/d8ydvt/command_conquer_red_alert_source_code) - [Command and Conquer: Red Alert source code](https://github.com/electronicarts/CnC_Red_Alert)
* [2025-02-27, 18:42:01](https://news.ycombinator.com/item?id=43197131) - [EA Open Sources Command and Conquer: Red Alert, along with other games](https://github.com/electronicarts/CnC_Red_Alert)
* [2025-02-27, 18:42:01](https://lobste.rs/s/fpidir/accessing_region_locked_ios_features) - [Accessing region-locked iOS features, such as EU app stores](https://downrightnifty.me/blog/2025/02/27/eu-features-outside.html)
* [2025-02-27, 17:35:00](https://soylentnews.org/article.pl?sid=25/02/26/1856235&from=rss) - [Robot With 1,000 Muscles Twitches Like Human While Dangling From Ceiling](https://soylentnews.org/article.pl?sid=25/02/26/1856235&from=rss)
* [2025-02-27, 17:24:20](https://lobste.rs/s/1naw96/goodbye_k_9_mail) - [Goodbye K-9 Mail](https://cketti.de/2025/02/26/goodbye-k9mail/)
* [2025-02-27, 14:16:38](https://lobste.rs/s/ww96mh/why_are_jujutsu_s_id_prefixes_so_short) - [Why are Jujutsu's ID Prefixes So Short?](https://jonathan-frere.com/posts/jujutsu-shortest-ids/)
* [2025-02-27, 13:32:38](https://lobste.rs/s/ym7xhm/release_fish_shell_4_0_0_now_ported_rust) - [Release fish shell 4.0.0, now ported to Rust](https://github.com/fish-shell/fish-shell/releases/tag/4.0.0)
* [2025-02-27, 12:51:00](https://soylentnews.org/article.pl?sid=25/02/26/1852225&from=rss) - [Physx Feature Unlocked For RTX 5090 With RTX 3050 'Helper' To Enable Full Performance](https://soylentnews.org/article.pl?sid=25/02/26/1852225&from=rss)
* [2025-02-27, 12:10:10](https://lobste.rs/s/jivgtn/why_we_designed_tigerbeetle_s_docs_from) - [Why We Designed TigerBeetle's Docs from Scratch](https://tigerbeetle.com/blog/2025-02-27-why-we-designed-tigerbeetles-docs-from-scratch/)
* [2025-02-27, 08:08:00](https://soylentnews.org/article.pl?sid=25/02/26/1850240&from=rss) - [Bubbles That Break Rules: A Fluid Discovery That Defies Logic](https://soylentnews.org/article.pl?sid=25/02/26/1850240&from=rss)
* [2025-02-27, 02:27:00](https://soylentnews.org/article.pl?sid=25/02/26/0210231&from=rss) - [As the Kernel Turns: Rust in Linux Saga Reaches the “Linus in All-Caps” Phase](https://soylentnews.org/article.pl?sid=25/02/26/0210231&from=rss)
* [2025-02-27, 01:58:25](https://lobste.rs/s/de2ab1/firefox_adds_terms_use) - [Firefox adds terms of use](https://blog.mozilla.org/en/products/firefox/firefox-news/firefox-terms-of-use/)
* [2025-02-26, 21:42:00](https://soylentnews.org/article.pl?sid=25/02/25/0655200&from=rss) - [Software Engineering Job Openings Hit 5-Year Low Amid Industry Shift](https://soylentnews.org/article.pl?sid=25/02/25/0655200&from=rss)
* [2025-02-26, 16:53:00](https://soylentnews.org/article.pl?sid=25/02/25/0646226&from=rss) - [Chinese Hackers Compromised Organizations in 70 Nations, Warn US Federal Agencies](https://soylentnews.org/article.pl?sid=25/02/25/0646226&from=rss)
* [2025-02-26, 12:05:00](https://soylentnews.org/article.pl?sid=25/02/25/0640214&from=rss) - [Seagate's Fraudulent HDD Scandal Expands: Ironwolf Pro Hard Drives Reportedly Also Affected](https://soylentnews.org/article.pl?sid=25/02/25/0640214&from=rss)
* [2025-02-26, 07:20:00](https://soylentnews.org/article.pl?sid=25/02/25/0633257&from=rss) - [The Secretive X-37B Space Plane Snapped This Picture of Earth From Orbit](https://soylentnews.org/article.pl?sid=25/02/25/0633257&from=rss)
* [2025-02-26, 02:33:00](https://soylentnews.org/article.pl?sid=25/02/24/1625242&from=rss) - [US Treasury Beneficial Ownership Information Reporting is Back On (Again)](https://soylentnews.org/article.pl?sid=25/02/24/1625242&from=rss)
* [2025-02-25, 21:50:00](https://soylentnews.org/article.pl?sid=25/02/24/1621220&from=rss) - [Polish Treasure Hunters Unearth Seriously Badass Two-Handed Medieval Sword](https://soylentnews.org/article.pl?sid=25/02/24/1621220&from=rss)
* [2025-02-25, 17:06:00](https://soylentnews.org/article.pl?sid=25/02/24/1617229&from=rss) - [21st Century C++](https://soylentnews.org/article.pl?sid=25/02/24/1617229&from=rss)
* [2025-02-25, 12:35:56](https://news.ycombinator.com/item?id=43171079) - [Deconstructing the \"Whimsical Animations\" landing page](https://www.joshwcomeau.com/blog/whimsical-animations/)
* [2025-02-25, 12:23:00](https://soylentnews.org/politics/article.pl?sid=25/02/24/1615209&from=rss) - [Trump Threatens Tariffs On Any Nation That Taxes Big Tech](https://soylentnews.org/politics/article.pl?sid=25/02/24/1615209&from=rss)
* [2025-02-25, 11:01:39](https://news.ycombinator.com/item?id=43170408) - [Narrative and the Structure of Art (2023)](https://medium.com/luminasticity/narrative-and-the-structure-of-art-1ffbdfe2aece)
* [2025-02-25, 09:07:41](https://news.ycombinator.com/item?id=43169715) - [Ask HN: Any recommend resources that helped your game dev journey?](https://news.ycombinator.com/item?id=43169715)
* [2025-02-25, 07:54:00](https://news.ycombinator.com/item?id=43169323) - [Gleam, Coming from Erlang](https://olano.dev/blog/gleam-coming-from-erlang/)
* [2025-02-25, 07:37:00](https://soylentnews.org/article.pl?sid=25/02/24/0728229&from=rss) - [Building a Chipmaking Fab in the US Costs Twice as Much, Takes Twice as Long as in Taiwan](https://soylentnews.org/article.pl?sid=25/02/24/0728229&from=rss)
* [2025-02-25, 07:02:58](https://news.ycombinator.com/item?id=43169054) - [Stone Soup AI (2024)](https://simons.berkeley.edu/news/stone-soup-ai)
* [2025-02-25, 06:45:09](https://news.ycombinator.com/item?id=43168950) - [The Middle Ages in Computer Games](https://www.medievalists.net/2025/02/new-medieval-books-the-middle-ages-in-computer-games/)
* [2025-02-25, 02:51:00](https://soylentnews.org/article.pl?sid=25/02/24/0723218&from=rss) - [Astronomers Uncover The Topsy-Turvy Atmosphere Of A Distant Planet](https://soylentnews.org/article.pl?sid=25/02/24/0723218&from=rss)
* [2025-02-24, 22:04:00](https://soylentnews.org/article.pl?sid=25/02/24/0715224&from=rss) - [How to Backdoor Large Language Models](https://soylentnews.org/article.pl?sid=25/02/24/0715224&from=rss)
* [2025-02-24, 17:20:00](https://soylentnews.org/article.pl?sid=25/02/24/0713223&from=rss) - [Bird Flu Endemic in America Cows. Found in Rats](https://soylentnews.org/article.pl?sid=25/02/24/0713223&from=rss)
* [2025-02-24, 15:24:19](https://news.ycombinator.com/item?id=43160582) - [Type 1 diabetes reversed by new cell transplantation technique](https://newatlas.com/diabetes/islet-transplantation-type-1-diabetes/)
* [2025-02-24, 14:51:53](https://news.ycombinator.com/item?id=43160226) - [Calendar.txt](https://terokarvinen.com/2021/calendar-txt/)
* [2025-02-24, 14:06:16](https://news.ycombinator.com/item?id=43159692) - [Electric Propulsion Magnets Ready for Space Tests](https://spectrum.ieee.org/electric-propulsion-thruster)
* [2025-02-24, 12:32:00](https://soylentnews.org/article.pl?sid=25/02/24/078229&from=rss) - [AMD Could Block the Sale of Intel Due to a Cross-Licensing Agreement](https://soylentnews.org/article.pl?sid=25/02/24/078229&from=rss)
* [2025-02-24, 09:53:00](https://news.ycombinator.com/item?id=43157672) - [Why and How I use “Org Mode” for my writing and more (2022)](https://www.evalapply.org/posts/why-and-how-i-use-org-mode/index.html)
* [2025-02-24, 07:47:00](https://soylentnews.org/article.pl?sid=25/02/24/074241&from=rss) - [Apple Pulls End-to-End Encryption From UK Rather Than Provide Government a Backdoor](https://soylentnews.org/article.pl?sid=25/02/24/074241&from=rss)
* [2025-02-24, 03:03:00](https://soylentnews.org/article.pl?sid=25/02/23/1133234&from=rss) - [After 20 Years, Math Couple Solves Major Group Theory Problem](https://soylentnews.org/article.pl?sid=25/02/23/1133234&from=rss)
