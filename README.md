# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Intel could return to Apple computers in 2027](https://www.theverge.com/news/832366/intel-apple-m-chip-low-end-processor) (comments [here](https://news.ycombinator.com/item?id=46111284))

* [Pebble, the E-Ink Smartwatch That Refuses to Die, Just Went Fully Open Source](https://soylentnews.org/article.pl?sid=25/11/30/0244232&amp;from=rss) (comments [here](https://soylentnews.org/article.pl?sid=25/11/30/0244232&amp;from=rss))

* [Google unkills JPEG XL?](https://tonisagrista.com/blog/2025/google-unkills-jpegxl/) (comments [here](https://news.ycombinator.com/item?id=46108563))

* [MADstack: rust web stack with some AI bits](https://github.com/pgray/MADstack) (comments [here](https://lobste.rs/s/7mplxm/madstack_rust_web_stack_with_some_ai_bits))

* [Particle Accelerator Waste Could Help Produce Cancer-Fighting Materials](https://soylentnews.org/article.pl?sid=25/11/30/0224246&amp;from=rss) (comments [here](https://soylentnews.org/article.pl?sid=25/11/30/0224246&amp;from=rss))

* [Linux Kernel 6.18 Officially Released](https://linux.slashdot.org/story/25/12/01/0218201/linux-kernel-618-officially-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) (comments [here](https://linux.slashdot.org/story/25/12/01/0218201/linux-kernel-618-officially-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## AI and Computing

* [LLMs are a failure. A new AI winter is coming](https://taranis.ie/llms-are-a-failure-a-new-ai-winter-is-coming/) (comments [here](https://lobste.rs/s/gvldct/llms_are_failure_new_ai_winter_is_coming))

* [DeepSeek-v3.2: Pushing the frontier of open large language models [pdf]](https://huggingface.co/deepseek-ai/DeepSeek-V3.2/resolve/main/assets/paper.pdf) (comments [here](https://news.ycombinator.com/item?id=46108780))

* [Roblox to Use AI for User Age Identification but Aus Government Wants More](https://soylentnews.org/article.pl?sid=25/11/30/0229203&amp;from=rss) (comments [here](https://soylentnews.org/article.pl?sid=25/11/30/0229203&amp;from=rss))

* [Can AI Transform Space Propulsion?](https://science.slashdot.org/story/25/11/30/2247202/can-ai-transform-space-propulsion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) (comments [here](https://science.slashdot.org/story/25/11/30/2247202/can-ai-transform-space-propulsion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Economic and Society

* [High-income job losses are cooling housing demand](https://jbrec.com/insights/job-growth-housing-demand-metro-analysis-2026/) (comments [here](https://news.ycombinator.com/item?id=46110908))

* [Netflix Kills Casting From Phones](https://entertainment.slashdot.org/story/25/12/01/1649216/netflix-kills-casting-from-phones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) (comments [here](https://entertainment.slashdot.org/story/25/12/01/1649216/netflix-kills-casting-from-phones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Amazon and Google Announce Resilient 'Multicloud' Networking Service Plus an Open API for Interoperability](https://tech.slashdot.org/story/25/12/01/0612218/amazon-and-google-announce-resilient-multicloud-networking-service-plus-an-open-api-for-interoperability?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) (comments [here](https://tech.slashdot.org/story/25/12/01/0612218/amazon-and-google-announce-resilient-multicloud-networking-service-plus-an-open-api-for-interoperability?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [India orders smartphone makers to preload state-owned cyber safety app](https://www.reuters.com/sustainability/boards-policy-regulation/india-orders-mobile-phones-preloaded-with-government-app-ensure-cyber-safety-2025-12-01/) (comments [here](https://news.ycombinator.com/item?id=46104193))

## Historical and Cultural Insights

* [Cartographers Have Been Hiding Covert Illustrations Inside of Switzerland's Maps](https://eyeondesign.aiga.org/for-decades-cartographers-have-been-hiding-covert-illustrations-inside-of-switzerlands-official-maps/) (comments [here](https://news.ycombinator.com/item?id=46107282))

* [The Penicillin Myth](https://www.asimov.press/p/penicillin-myth) (comments [here](https://news.ycombinator.com/item?id=46107658))

* [Myths About Rapid Spread of the Black Death Influenced by Single 'Literary Tale'](https://soylentnews.org/article.pl?sid=25/11/25/1514218&amp;from=rss) (comments [here](https://soylentnews.org/article.pl?sid=25/11/25/1514218&amp;from=rss))

* [A Rare GM EV1 Saved From The Crusher is Going to be Driveable Again](https://soylentnews.org/article.pl?sid=25/11/25/1512241&amp;from=rss) (comments [here](https://soylentnews.org/article.pl?sid=25/11/25/1512241&amp;from=rss))

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

* [2025-12-01, 18:46:17](https://news.ycombinator.com/item?id=46111284) - [Intel could return to Apple computers in 2027](https://www.theverge.com/news/832366/intel-apple-m-chip-low-end-processor)
* [2025-12-01, 18:41:00](https://entertainment.slashdot.org/story/25/12/01/1649216/netflix-kills-casting-from-phones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Netflix Kills Casting From Phones](https://entertainment.slashdot.org/story/25/12/01/1649216/netflix-kills-casting-from-phones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-01, 18:35:01](https://news.ycombinator.com/item?id=46111120) - [Durin is a library for reading and writing the Dwarf debugging format](https://github.com/tmcgilchrist/durin)
* [2025-12-01, 18:21:19](https://news.ycombinator.com/item?id=46110908) - [High-income job losses are cooling housing demand](https://jbrec.com/insights/job-growth-housing-demand-metro-analysis-2026/)
* [2025-12-01, 18:20:56](https://lobste.rs/s/gvldct/llms_are_failure_new_ai_winter_is_coming) - [LLMs are a failure. A new AI winter is coming](https://taranis.ie/llms-are-a-failure-a-new-ai-winter-is-coming/)
* [2025-12-01, 18:16:09](https://news.ycombinator.com/item?id=46110836) - [Response to Ruby Is Not a Serious Programming Language](https://robbyonrails.com/articles/2025/12/01/why-so-serious/)
* [2025-12-01, 18:01:00](https://news.slashdot.org/story/25/12/01/1644253/colleges-are-preparing-to-self-lobotomize?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Colleges Are Preparing To Self-Lobotomize](https://news.slashdot.org/story/25/12/01/1644253/colleges-are-preparing-to-self-lobotomize?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-01, 17:20:00](https://tech.slashdot.org/story/25/12/01/1241232/top-consultancies-freeze-starting-salaries-as-ai-threatens-pyramid-model?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Top Consultancies Freeze Starting Salaries as AI Threatens &apos;Pyramid&apos; Model](https://tech.slashdot.org/story/25/12/01/1241232/top-consultancies-freeze-starting-salaries-as-ai-threatens-pyramid-model?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-01, 17:01:18](https://news.ycombinator.com/item?id=46109802) - [Better Auth (YC X25) Is Hiring](https://www.ycombinator.com/companies/better-auth/jobs/eKk5nLt-developer-relation-engineer)
* [2025-12-01, 16:41:00](https://news.slashdot.org/story/25/12/01/1420213/uk-not-in-favor-of-dimming-the-sun?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK &apos;Not in Favor&apos; of Dimming the Sun](https://news.slashdot.org/story/25/12/01/1420213/uk-not-in-favor-of-dimming-the-sun?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-01, 16:40:00](https://soylentnews.org/article.pl?sid=25/11/30/0244232&amp;from=rss) - [Pebble, the E-Ink Smartwatch That Refuses to Die, Just Went Fully Open Source](https://soylentnews.org/article.pl?sid=25/11/30/0244232&amp;from=rss)
* [2025-12-01, 16:34:28](https://lobste.rs/s/7mplxm/madstack_rust_web_stack_with_some_ai_bits) - [MADstack: rust web stack with some AI bits](https://github.com/pgray/MADstack)
* [2025-12-01, 16:11:15](https://news.ycombinator.com/item?id=46109080) - [ImAnim: Modern animation capabilities to ImGui applications](https://github.com/soufianekhiat/ImAnim)
* [2025-12-01, 16:08:51](https://lobste.rs/s/yp2ez1/compressing_callstacks_bitpacked_dag) - [Compressing callstacks: a bitpacked DAG powered by a keyless hashmap](https://superluminal.eu/compressing-callstacks/)
* [2025-12-01, 16:01:26](https://news.ycombinator.com/item?id=46108941) - [Ask HN: Who is hiring? (December 2025)](https://news.ycombinator.com/item?id=46108941)
* [2025-12-01, 16:01:26](https://news.ycombinator.com/item?id=46108940) - [Ask HN: Who wants to be hired? (December 2025)](https://news.ycombinator.com/item?id=46108940)
* [2025-12-01, 16:00:00](https://tech.slashdot.org/story/25/12/01/0633231/india-orders-mobile-phones-preloaded-with-government-app-to-ensure-cyber-safety?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [India Orders Mobile Phones Preloaded With Government App To Ensure Cyber Safety](https://tech.slashdot.org/story/25/12/01/0633231/india-orders-mobile-phones-preloaded-with-government-app-to-ensure-cyber-safety?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-01, 15:48:03](https://news.ycombinator.com/item?id=46108780) - [DeepSeek-v3.2: Pushing the frontier of open large language models [pdf]](https://huggingface.co/deepseek-ai/DeepSeek-V3.2/resolve/main/assets/paper.pdf)
* [2025-12-01, 15:28:49](https://news.ycombinator.com/item?id=46108563) - [Google unkills JPEG XL?](https://tonisagrista.com/blog/2025/google-unkills-jpegxl/)
* [2025-12-01, 15:20:00](https://news.slashdot.org/story/25/12/01/1512213/airbus-says-most-of-its-recalled-6000-a320-jets-now-modified?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Airbus Says Most of Its Recalled 6,000 A320 Jets Now Modified](https://news.slashdot.org/story/25/12/01/1512213/airbus-says-most-of-its-recalled-6000-a320-jets-now-modified?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-01, 15:18:42](https://news.ycombinator.com/item?id=46108437) - [Google, Nvidia, and OpenAI](https://stratechery.com/2025/google-nvidia-and-openai/)
* [2025-12-01, 15:00:45](https://news.ycombinator.com/item?id=46108243) - [WordPress plugin quirk resulted in UK Gov OBR Budget leak [pdf]](https://obr.uk/docs/dlm_uploads/01122025-Investigation-into-November-2025-EFO-publication-error.pdf)
* [2025-12-01, 14:40:00](https://slashdot.org/story/25/12/01/0757232/chinas-central-bank-flags-money-laundering-and-fraud-concerns-with-stablecoins?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s Central Bank Flags Money Laundering and Fraud Concerns With Stablecoins](https://slashdot.org/story/25/12/01/0757232/chinas-central-bank-flags-money-laundering-and-fraud-concerns-with-stablecoins?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-01, 14:13:06](https://news.ycombinator.com/item?id=46107658) - [The Penicillin Myth](https://www.asimov.press/p/penicillin-myth)
* [2025-12-01, 14:06:50](https://lobste.rs/s/i40dxk/off_grid_boat_communications_with) - [Off-grid Boat Communications with Meshtastic](https://blog.noforeignland.com/off-grid-boat-communications-with-meshtastic/)
* [2025-12-01, 14:00:00](https://slashdot.org/story/25/12/01/1334224/former-ceo-blasts-intels-decay-we-dont-know-how-to-engineer-anymore?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Former CEO Blasts Intel&apos;s &apos;Decay&apos;: &apos;We Don&apos;t Know How To Engineer Anymore&apos;](https://slashdot.org/story/25/12/01/1334224/former-ceo-blasts-intels-decay-we-dont-know-how-to-engineer-anymore?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-01, 13:41:15](https://news.ycombinator.com/item?id=46107282) - [Cartographers Have Been Hiding Covert Illustrations Inside of Switzerland&apos;s Maps](https://eyeondesign.aiga.org/for-decades-cartographers-have-been-hiding-covert-illustrations-inside-of-switzerlands-official-maps/)
* [2025-12-01, 13:31:58](https://news.ycombinator.com/item?id=46107177) - [A vector graphics workstation from the 70s](https://justanotherelectronicsblog.com/?p=1429)
* [2025-12-01, 13:15:27](https://lobste.rs/s/tdwlso/constructing_word_s_first_jpeg_xl_md5_hash) - [Constructing The Word&apos;s First JPEG XL MD5 Hash Quine](https://stackchk.fail/blog/jxl_hashquine_writeup)
* [2025-12-01, 13:14:23](https://lobste.rs/s/q6bhuq/medley_interlisp_for_newcomer) - [Medley Interlisp for the Newcomer](https://primer.interlisp.org)
* [2025-12-01, 12:34:00](https://news.slashdot.org/story/25/12/01/0418205/two-former-us-congressmen-announce-fundraising-for-candidates-supporting-ai-regulation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Two Former US Congressmen Announce Fundraising for Candidates Supporting AI Regulation](https://news.slashdot.org/story/25/12/01/0418205/two-former-us-congressmen-announce-fundraising-for-candidates-supporting-ai-regulation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-01, 12:22:35](https://news.ycombinator.com/item?id=46106556) - [Why xor eax, eax?](https://xania.org/202512/01-xor-eax-eax)
* [2025-12-01, 11:51:00](https://soylentnews.org/article.pl?sid=25/11/30/0234208&amp;from=rss) - [ClamAV Signature Retirement Announcement](https://soylentnews.org/article.pl?sid=25/11/30/0234208&amp;from=rss)
* [2025-12-01, 11:26:39](https://news.ycombinator.com/item?id=46106132) - [Self-hosting a Matrix server for 5 years](https://yaky.dev/2025-11-30-self-hosting-matrix/)
* [2025-12-01, 11:16:40](https://lobste.rs/s/nduylx/online_documentation_for_qt_6_kde) - [Online Documentation for Qt 6, KDE Frameworks, etc. for C &amp; Zig](https://gist.github.com/rcalixte/63757948a7bf4190b469ff09c5ad7a67)
* [2025-12-01, 10:49:48](https://lobste.rs/s/8eawgd/building_perfect_linux_pc_with_linus) - [Building the perfect Linux PC with Linus Torvalds](https://youtu.be/mfv0V1SxbNA)
* [2025-12-01, 10:36:22](https://lobste.rs/s/6joasa/punycode_my_new_favorite_algorithm) - [Punycode: My New Favorite Algorithm](https://www.iankduncan.com/engineering/2025-12-01-punycode)
* [2025-12-01, 10:24:25](https://lobste.rs/s/kfnqsw/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/kfnqsw/what_are_you_doing_this_week)
* [2025-12-01, 10:14:59](https://lobste.rs/s/jxubs2/internet_handle) - [Internet Handle](https://internethandle.org/)
* [2025-12-01, 08:34:00](https://tech.slashdot.org/story/25/12/01/0612218/amazon-and-google-announce-resilient-multicloud-networking-service-plus-an-open-api-for-interoperability?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon and Google Announce Resilient &apos;Multicloud&apos; Networking Service Plus an Open API for Interoperability](https://tech.slashdot.org/story/25/12/01/0612218/amazon-and-google-announce-resilient-multicloud-networking-service-plus-an-open-api-for-interoperability?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-01, 07:07:00](https://soylentnews.org/article.pl?sid=25/11/30/0229203&amp;from=rss) - [Roblox to Use AI for User Age Identification but Aus Government Wants More](https://soylentnews.org/article.pl?sid=25/11/30/0229203&amp;from=rss)
* [2025-12-01, 07:05:57](https://news.ycombinator.com/item?id=46104396) - [Games using anti-cheats and their compatibility with GNU/Linux or Wine/Proton](https://areweanticheatyet.com/)
* [2025-12-01, 06:45:22](https://lobste.rs/s/wsv9xn/size_matters) - [Size Matters](https://matklad.github.io/2025/11/28/size-matters.html)
* [2025-12-01, 06:30:14](https://news.ycombinator.com/item?id=46104193) - [India orders smartphone makers to preload state-owned cyber safety app](https://www.reuters.com/sustainability/boards-policy-regulation/india-orders-mobile-phones-preloaded-with-government-app-ensure-cyber-safety-2025-12-01/)
* [2025-12-01, 06:12:33](https://lobste.rs/s/swvr1p/one_jobserver_rule_them_all) - [One jobserver to rule them all](https://blogs.gentoo.org/mgorny/2025/11/30/one-jobserver-to-rule-them-all/)
* [2025-12-01, 05:36:48](https://news.ycombinator.com/item?id=46103858) - [It’s been a very hard year](https://bell.bz/its-been-a-very-hard-year/)
* [2025-12-01, 05:36:00](https://science.slashdot.org/story/25/12/01/0327208/russia-left-without-access-to-iss-following-structure-collapse-during-thursdays-launch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russia Left Without Access to ISS Following Structure Collapse During Thursday&apos;s Launch](https://science.slashdot.org/story/25/12/01/0327208/russia-left-without-access-to-iss-following-structure-collapse-during-thursdays-launch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-01, 04:36:00](https://linux.slashdot.org/story/25/12/01/0218201/linux-kernel-618-officially-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux Kernel 6.18 Officially Released](https://linux.slashdot.org/story/25/12/01/0218201/linux-kernel-618-officially-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-01, 04:06:06](https://news.ycombinator.com/item?id=46103376) - [Search tool that only returns content created before ChatGPT&apos;s public release](https://tegabrain.com/Slop-Evader)
* [2025-12-01, 03:59:53](https://lobste.rs/s/ujdmkl/boing) - [Boing](https://boing.greg.technology/)
* [2025-12-01, 02:20:00](https://soylentnews.org/article.pl?sid=25/11/30/0224246&amp;from=rss) - [Particle Accelerator Waste Could Help Produce Cancer-Fighting Materials](https://soylentnews.org/article.pl?sid=25/11/30/0224246&amp;from=rss)
* [2025-12-01, 01:40:00](https://slashdot.org/story/25/12/01/0137225/how-openai-reacted-when-some-chatgpt-users-lost-touch-with-reality?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How OpenAI Reacted When Some ChatGPT Users Lost Touch with Reality](https://slashdot.org/story/25/12/01/0137225/how-openai-reacted-when-some-chatgpt-users-lost-touch-with-reality?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-01, 00:19:00](https://yro.slashdot.org/story/25/11/30/2357209/crime-rings-enlist-hackers-to-hijack-trucks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Crime Rings Enlist Hackers To Hijack Trucks&apos;](https://yro.slashdot.org/story/25/11/30/2357209/crime-rings-enlist-hackers-to-hijack-trucks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-30, 23:51:45](https://lobste.rs/s/nfkyxc/love_letter_freebsd) - [A Love Letter to FreeBSD](https://www.tara.sh/posts/2025/2025-11-25_freebsd_letter/)
* [2025-11-30, 23:38:39](https://lobste.rs/s/e0s8iu/ty_python_type_checker) - [ty - Python type checker](https://docs.astral.sh/ty/)
* [2025-11-30, 22:50:00](https://science.slashdot.org/story/25/11/30/2247202/can-ai-transform-space-propulsion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Can AI Transform Space Propulsion?](https://science.slashdot.org/story/25/11/30/2247202/can-ai-transform-space-propulsion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-30, 21:38:06](https://lobste.rs/s/bvuwhl/nixos_25_11_released) - [NixOS 25.11 released](https://nixos.org/blog/announcements/2025/nixos-2511/)
* [2025-11-30, 21:34:00](https://soylentnews.org/article.pl?sid=25/11/30/0218206&amp;from=rss) - [AI-Induced Psychosis: The Danger of Humans and Machines Hallucinating Together](https://soylentnews.org/article.pl?sid=25/11/30/0218206&amp;from=rss)
* [2025-11-30, 21:12:21](https://lobste.rs/s/5qd7be/trillions_spent_big_software_projects) - [Trillions Spent and Big Software Projects Are Still Failing](https://spectrum.ieee.org/it-management-software-failures)
* [2025-11-30, 20:13:25](https://lobste.rs/s/h6bmm2/hacking_on_remarkable_2) - [Hacking on the reMarkable 2](https://sgt.hootr.club/blog/hacking-on-the-remarkable-2/)
* [2025-11-30, 16:52:13](https://lobste.rs/s/9fjia8/windows_drive_letters_are_not_limited_z) - [Windows drive letters are not limited to A-Z](https://www.ryanliptak.com/blog/windows-drive-letters-are-not-limited-to-a-z/)
* [2025-11-30, 16:51:00](https://soylentnews.org/article.pl?sid=25/11/26/1555213&amp;from=rss) - [Rust for Linux Kernel Co-Maintainer Formally Steps Down](https://soylentnews.org/article.pl?sid=25/11/26/1555213&amp;from=rss)
* [2025-11-30, 16:10:40](https://lobste.rs/s/cni8ze/github_codeberg_my_experience) - [GitHub to Codeberg: my experience](https://eldred.fr/blog/forge-migration/)
* [2025-11-30, 15:57:34](https://news.ycombinator.com/item?id=46097671) - [Langjam Gamejam: Build a programming language then make a game with it](https://langjamgamejam.com/)
* [2025-11-30, 14:59:23](https://lobste.rs/s/gtzhvt/advent_code_2025) - [Advent of Code 2025](https://adventofcode.com/2025)
* [2025-11-30, 14:22:16](https://lobste.rs/s/qxxu6s/http_query_method) - [The HTTP Query Method](https://datatracker.ietf.org/doc/draft-ietf-httpbis-safe-method-w-body/)
* [2025-11-30, 14:17:00](https://soylentnews.org/article.pl?sid=25/11/26/1550227&amp;from=rss) - [Tor Switches to New Counter Galois Onion Relay Encryption Algorithm](https://soylentnews.org/article.pl?sid=25/11/26/1550227&amp;from=rss)
* [2025-11-30, 14:09:19](https://lobste.rs/s/mgwwtl/migrating_dillo_from_github) - [Migrating Dillo from GitHub](https://dillo-browser.org/news/migration-from-github/)
* [2025-11-30, 13:07:15](https://news.ycombinator.com/item?id=46096337) - [Advent of Code 2025](https://adventofcode.com/2025/about)
* [2025-11-30, 11:43:00](https://soylentnews.org/article.pl?sid=25/11/26/149224&amp;from=rss) - [Beijing Unveils Supercritical CO2 Turbine That Could Upend Power Tech](https://soylentnews.org/article.pl?sid=25/11/26/149224&amp;from=rss)
* [2025-11-30, 09:12:00](https://soylentnews.org/article.pl?sid=25/11/26/1415217&amp;from=rss) - [The Unpowered SSDs in Your Drawer Are Slowly Losing Your Data](https://soylentnews.org/article.pl?sid=25/11/26/1415217&amp;from=rss)
* [2025-11-30, 06:53:00](https://soylentnews.org/article.pl?sid=25/11/25/1521238&amp;from=rss) - [Horse Virus EHV-1 Outbreak Spreads to Eight Texas Counties: Two Horses Have Died](https://soylentnews.org/article.pl?sid=25/11/25/1521238&amp;from=rss)
* [2025-11-30, 04:38:00](https://soylentnews.org/article.pl?sid=25/11/25/1517228&amp;from=rss) - [Scientists Unveil Breakthrough Low-Temperature Fuel Cell That Could Revolutionize Hydrogen Power](https://soylentnews.org/article.pl?sid=25/11/25/1517228&amp;from=rss)
* [2025-11-30, 02:31:37](https://lobste.rs/s/a34m1x/datacenters_space_are_terrible_horrible) - [Datacenters in space are a terrible, horrible, no good idea](https://taranis.ie/datacenters-in-space-are-a-terrible-horrible-no-good-idea/)
* [2025-11-30, 02:23:00](https://soylentnews.org/article.pl?sid=25/11/25/1514218&amp;from=rss) - [Myths About Rapid Spread of the Black Death Influenced by Single “Literary Tale”](https://soylentnews.org/article.pl?sid=25/11/25/1514218&amp;from=rss)
* [2025-11-30, 00:05:00](https://soylentnews.org/article.pl?sid=25/11/25/1512241&amp;from=rss) - [A Rare GM EV1 Saved From The Crusher is Going to be Driveable Again](https://soylentnews.org/article.pl?sid=25/11/25/1512241&amp;from=rss)
* [2025-11-29, 21:56:00](https://soylentnews.org/article.pl?sid=25/11/29/2035258&amp;from=rss) - [Valve Announces the Steam Frame: &apos;A New Way to Play Your Entire Steam Library&apos;](https://soylentnews.org/article.pl?sid=25/11/29/2035258&amp;from=rss)
* [2025-11-29, 21:16:00](https://soylentnews.org/article.pl?sid=25/11/25/157251&amp;from=rss) - [Bitcoin Mining Needs Regulatory Legislation](https://soylentnews.org/article.pl?sid=25/11/25/157251&amp;from=rss)
* [2025-11-29, 20:53:00](https://soylentnews.org/article.pl?sid=25/11/29/2053221&amp;from=rss) - [Re-releasing Stories in Queue](https://soylentnews.org/article.pl?sid=25/11/29/2053221&amp;from=rss)
* [2025-11-29, 12:26:00](https://soylentnews.org/article.pl?sid=25/11/26/2246256&amp;from=rss) - [This Linux OS Has Got a Million Downloads Since Windows 10 Support Ended](https://soylentnews.org/article.pl?sid=25/11/26/2246256&amp;from=rss)
* [2025-11-29, 07:43:00](https://soylentnews.org/article.pl?sid=25/11/26/2245225&amp;from=rss) - [Americans With Four-Year Degrees Now Comprise a Record 25% of Unemployed Workers](https://soylentnews.org/article.pl?sid=25/11/26/2245225&amp;from=rss)
* [2025-11-29, 02:58:00](https://soylentnews.org/article.pl?sid=25/11/26/2239240&amp;from=rss) - [China Launches Shenzhou-22 Early for Stranded Space Station Crew](https://soylentnews.org/article.pl?sid=25/11/26/2239240&amp;from=rss)
* [2025-11-28, 22:06:00](https://soylentnews.org/article.pl?sid=25/11/26/2238205&amp;from=rss) - [Cryptology Firm Cancels Elections After Losing Encryption Key](https://soylentnews.org/article.pl?sid=25/11/26/2238205&amp;from=rss)
