# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Development

* [Why your next mobile app is probably headless](https://tuananh.net/2026/03/18/why-your-next-mobile-app-is-probably-headless/) - Examines the growing trend of headless architecture in mobile app development, which decouples the frontend from the backend to enable more flexibility and customization ([comments](https://lobste.rs/s/ia6pyu/why_your_next_mobile_app_is_probably)).

* [Video Encoding and Decoding with Vulkan Compute Shaders in FFmpeg](https://www.khronos.org/blog/video-encoding-and-decoding-with-vulkan-compute-shaders-in-ffmpeg) - Explores integrating Vulkan compute shaders into FFmpeg to enhance video encoding and decoding performance ([comments](https://news.ycombinator.com/item?id=47407293)).

* [Building a Reader for the Smallest Hard Drive](https://www.willwhang.dev/Reading-MK4001MTD/) - Chronicles the creation of a reader for a tiny hard drive, showcasing innovation and craftsmanship in hardware tinkering ([comments](https://news.ycombinator.com/item?id=47396593)).

* [Getting Ziggy With It – Re: Factor](https://re.factorcode.org/2026/03/getting-ziggy-with-it.html) - Delves into refactoring code principles using Zig, a programming language popular for its simplicity and performance ([comments](https://lobste.rs/s/3qhmza/getting_ziggy_with_it_re_factor)).

## Cybersecurity and Incidents

* [Full Disclosure: A Third (and Fourth) Azure Sign-In Log Bypass Found](https://trustedsec.com/blog/full-disclosure-a-third-and-fourth-azure-sign-in-log-bypass-found) - Highlights two new vulnerabilities allowing sign-in log bypass in Azure, raising concerns over cloud security ([comments](https://news.ycombinator.com/item?id=47448994)).

* [Supply-chain attack using invisible code hits GitHub and other repositories](https://arstechnica.com/security/2026/03/supply-chain-attack-using-invisible-code-hits-github-and-other-repositories/) - Details a sophisticated supply-chain attack that managed to infect multiple code repositories using invisible Unicode characters ([comments](https://lobste.rs/s/fqwk8a/supply_chain_attack_using_invisible_code)).

* [Massive Interpol Operation Takes Down 45,000 IP Addresses and Leads to 94 Arrests](https://soylentnews.org/article.pl?sid=26/03/19/0310236&amp;from=rss) - Reports on a global crackdown against cybercrime, marking a significant victory for law enforcement ([comments](https://soylentnews.org/article.pl?sid=26/03/19/0310236&amp;from=rss)).

## Scientific and Medical Discoveries

* [Schizophrenia study finds new biomarker, drug candidate in mice](https://news.northwestern.edu/stories/2026/03/schizophrenia-study-finds-new-biomarker-drug-candidate-to-treat-cognitive-symptoms) - Unveils promising breakthroughs in understanding and treating cognitive symptoms of schizophrenia ([comments](https://news.ycombinator.com/item?id=47454091)).

* [Research Shows How Lost Memories Can be Reactivated](https://soylentnews.org/article.pl?sid=26/03/17/0828240&amp;from=rss) - Researchers find ways to activate dormant memories, providing hope for Alzheimer's therapies ([comments](https://soylentnews.org/article.pl?sid=26/03/17/0828240&amp;from=rss)).

* [Magnetars Drag Spacetime to Power Superluminous Supernovae](https://soylentnews.org/article.pl?sid=26/03/15/1351230&amp;from=rss) - Explores how extreme magnetic fields of magnetars warp spacetime and drive unusual supernovae ([comments](https://soylentnews.org/article.pl?sid=26/03/15/1351230&amp;from=rss)).

## Cultural and Social Insights

* [Chuck Norris has died](https://variety.com/2026/film/news/chuck-norris-dead-walker-texas-ranger-dies-1236694953/) - Reflects on the legacy of Chuck Norris's career and iconic status after his passing ([comments](https://news.ycombinator.com/item?id=47454782)).

* [The Soul of a Pedicab Driver](https://www.sheldonbrown.com/pedicab.html) - A touching narrative capturing the life and challenges of a pedicab driver ([comments](https://news.ycombinator.com/item?id=47452399)).

* [Chimps’ Love for Crystals Could Help Us Understand Our Own Ancestors’ Fascination With Gems](https://soylentnews.org/article.pl?sid=26/03/17/0839217&amp;from=rss) - Discusses the behavioral connection between primates and humans concerning fascination with precious objects ([comments](https://soylentnews.org/article.pl?sid=26/03/17/0839217&amp;from=rss)).

## Corporate and Industry Highlights

* [Super Micro Shares Plunge 25% After Co-Founder Charged in $2.5B Smuggling Plot](https://www.forbes.com/sites/tylerroush/2026/03/20/super-micro-shares-plunge-25-after-co-founder-charged-in-25-billion-ai-chip-smuggling-plot/) - Reports the significant loss in Super Micro's market value following its co-founder's legal troubles ([comments](https://news.ycombinator.com/item?id=47455365)).

* [Google Fiber Will be Sold to Private Equity Firm and Merge With Cable Company](https://soylentnews.org/article.pl?sid=26/03/15/1328200&amp;from=rss) - Analyzes the implications of Google Fiber's transition to private equity ownership ([comments](https://soylentnews.org/article.pl?sid=26/03/15/1328200&amp;from=rss)).

* [Musk Fails To Block California Data Disclosure Law He Fears Will Ruin XAI](https://soylentnews.org/article.pl?sid=26/03/15/1339231&amp;from=rss) - Examines Elon Musk's concerns over data privacy laws potentially impacting AI development ([comments](https://soylentnews.org/article.pl?sid=26/03/15/1339231&amp;from=rss)).

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

* [2026-03-20, 15:47:10](https://lobste.rs/s/ia6pyu/why_your_next_mobile_app_is_probably) - [Why your next mobile app is probably headless](https://tuananh.net/2026/03/18/why-your-next-mobile-app-is-probably-headless/)
* [2026-03-20, 15:00:00](https://slashdot.org/story/26/03/19/2231252/as-openclaw-enthusiasm-grips-china-kids-and-retirees-alike-raise-lobsters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [As OpenClaw Enthusiasm Grips China, Kids and Retirees Alike Raise &apos;Lobsters&apos;](https://slashdot.org/story/26/03/19/2231252/as-openclaw-enthusiasm-grips-china-kids-and-retirees-alike-raise-lobsters?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-20, 14:48:09](https://news.ycombinator.com/item?id=47455365) - [Super Micro Shares Plunge 25% After Co-Founder Charged in $2.5B Smuggling Plot](https://www.forbes.com/sites/tylerroush/2026/03/20/super-micro-shares-plunge-25-after-co-founder-charged-in-25-billion-ai-chip-smuggling-plot/)
* [2026-03-20, 14:42:37](https://lobste.rs/s/gq80mb/life_tv_video_with_2_bits_spare) - [Life TV: Video with 2 bits to spare](https://maurycyz.com/projects/lifetv/)
* [2026-03-20, 14:24:28](https://lobste.rs/s/htjtfq/thunderbird_introducing_our_public) - [Thunderbird: Introducing our Public Roadmaps](https://blog.thunderbird.net/2026/03/introducing-our-public-roadmaps/)
* [2026-03-20, 14:09:58](https://news.ycombinator.com/item?id=47454782) - [Chuck Norris has died](https://variety.com/2026/film/news/chuck-norris-dead-walker-texas-ranger-dies-1236694953/)
* [2026-03-20, 14:04:39](https://news.ycombinator.com/item?id=47454694) - [Germany Mandates ODF for Public Administration](https://linuxiac.com/germany-mandates-odf-for-public-administration/)
* [2026-03-20, 13:53:48](https://lobste.rs/s/ghtnpx/i_m_ok_being_left_behind_thanks) - [I&apos;m OK being left behind, thanks](https://shkspr.mobi/blog/2026/03/im-ok-being-left-behind-thanks/)
* [2026-03-20, 13:47:35](https://lobste.rs/s/fg34ds/good_bad_leaky_jemalloc_bumpalo_mimalloc) - [The Good, the Bad, and the Leaky: jemalloc, bumpalo, and mimalloc in meilisearch](https://blog.kerollmops.com/the-good-the-bad-and-the-leaky-jemalloc-bumpalo-and-mimalloc-in-meilisearch)
* [2026-03-20, 13:43:23](https://news.ycombinator.com/item?id=47454384) - [Java is fast, code might not be](https://jvogel.me/posts/2026/java-is-fast-your-code-might-not-be/)
* [2026-03-20, 13:38:56](https://news.ycombinator.com/item?id=47454341) - [I&apos;m OK being left behind, thanks](https://shkspr.mobi/blog/2026/03/im-ok-being-left-behind-thanks/)
* [2026-03-20, 13:23:56](https://news.ycombinator.com/item?id=47454164) - [HP realizes that mandatory 15-minute support call wait times isn&apos;t good support](https://arstechnica.com/gadgets/2025/02/misguided-hp-customer-support-approach-included-forced-15-minute-call-wait-times/)
* [2026-03-20, 13:18:36](https://news.ycombinator.com/item?id=47454091) - [Schizophrenia study finds new biomarker, drug candidate in mice](https://news.northwestern.edu/stories/2026/03/schizophrenia-study-finds-new-biomarker-drug-candidate-to-treat-cognitive-symptoms)
* [2026-03-20, 13:02:19](https://news.ycombinator.com/item?id=47453947) - [The Social Smolnet](https://ploum.net/2026-03-20-social-smolnet.html)
* [2026-03-20, 12:59:03](https://news.ycombinator.com/item?id=47453911) - [Exploring 8 Shaft Weaving](https://slab.org/2026/03/11/exploring-8-shaft-weaving/)
* [2026-03-20, 12:51:15](https://lobste.rs/s/cz3ux0/beat_paxos) - [Beat Paxos](http://muratbuffalo.blogspot.com/2026/03/break-paxos.html)
* [2026-03-20, 12:46:00](https://soylentnews.org/article.pl?sid=26/03/19/0318230&amp;from=rss) - [Elon Musk Says His Chipmaking &apos;Terafab Project&apos; Venture Will Launch in Seven Days](https://soylentnews.org/article.pl?sid=26/03/19/0318230&amp;from=rss)
* [2026-03-20, 12:30:38](https://lobste.rs/s/lzg26o/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/lzg26o/what_are_you_doing_this_weekend)
* [2026-03-20, 12:16:15](https://lobste.rs/s/5pkjai/wayland_set_linux_desktop_back_by_10_years) - [Wayland set the Linux Desktop back by 10 years](https://omar.yt/posts/wayland-set-the-linux-desktop-back-by-10-years)
* [2026-03-20, 11:59:40](https://lobste.rs/s/ozandm/social_smolnet) - [The Social Smolnet](https://ploum.net/2026-03-20-social-smolnet.html)
* [2026-03-20, 11:16:14](https://lobste.rs/s/wictlh/unified_modules_for_your_nixfiles) - [Unified Modules For Your Nixfiles](https://jadarma.github.io/blog/posts/2026/03/unified-modules-for-your-nixfiles/)
* [2026-03-20, 11:03:27](https://news.ycombinator.com/item?id=47452955) - [Entso-E final report on Iberian 2025 blackout](https://www.entsoe.eu/publications/blackout/28-april-2025-iberian-blackout/)
* [2026-03-20, 11:00:00](https://linux.slashdot.org/story/26/03/19/2224251/opera-gx-web-browser-comes-to-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Opera GX Web Browser Comes To Linux](https://linux.slashdot.org/story/26/03/19/2224251/opera-gx-web-browser-comes-to-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-20, 10:43:55](https://lobste.rs/s/oh23lt/fedora_asahi_remix_43_is_now_available) - [Fedora Asahi Remix 43 is now available](https://fedoramagazine.org/fedora-asahi-remix-43-is-now-available/)
* [2026-03-20, 10:21:12](https://lobste.rs/s/cvt7fd/enshittifaication) - [EnshittifAIcation](https://it-notes.dragas.net/2026/03/20/enshittifaication/)
* [2026-03-20, 09:59:56](https://news.ycombinator.com/item?id=47452515) - [Show HN: Sonar – A tiny CLI to see and kill whatever&apos;s running on localhost](https://github.com/RasKrebs/sonar)
* [2026-03-20, 09:40:56](https://news.ycombinator.com/item?id=47452399) - [The Soul of a Pedicab Driver](https://www.sheldonbrown.com/pedicab.html)
* [2026-03-20, 08:12:32](https://lobste.rs/s/4zl7y3/atuin_v18_13_better_search_pty_proxy_ai_for) - [Atuin v18.13 – better search, a PTY proxy, and AI for your shell](https://blog.atuin.sh/atuin-v18-13/)
* [2026-03-20, 07:57:00](https://soylentnews.org/article.pl?sid=26/03/19/0310236&amp;from=rss) - [Massive Interpol Operation Takes Down 45,000 Ip Addresses and Leads to 94 Arrests](https://soylentnews.org/article.pl?sid=26/03/19/0310236&amp;from=rss)
* [2026-03-20, 07:05:38](https://lobste.rs/s/1qcwfl/video_conferencing_with_durable_streams) - [Video Conferencing with Durable Streams](https://s2.dev/blog/video-conferencing)
* [2026-03-20, 07:00:00](https://hardware.slashdot.org/story/26/03/19/2157201/china-is-helping-drive-cubas-solar-boom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Is Helping Drive Cuba&apos;s Solar Boom](https://hardware.slashdot.org/story/26/03/19/2157201/china-is-helping-drive-cubas-solar-boom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-20, 04:55:43](https://lobste.rs/s/h008ee/100_kernel_bugs_30_days) - [100+ Kernel Bugs in 30 Days](https://substack.com/home/post/p-188916866)
* [2026-03-20, 04:44:20](https://lobste.rs/s/fqwk8a/supply_chain_attack_using_invisible_code) - [Supply-chain attack using invisible code hits GitHub and other repositories](https://arstechnica.com/security/2026/03/supply-chain-attack-using-invisible-code-hits-github-and-other-repositories/)
* [2026-03-20, 04:24:11](https://news.ycombinator.com/item?id=47450478) - [ArXiv declares independence from Cornell](https://www.science.org/content/article/arxiv-pioneering-preprint-server-declares-independence-cornell)
* [2026-03-20, 03:30:00](https://tech.slashdot.org/story/26/03/19/2217208/eu-cloud-lobby-asks-regulator-to-block-vmware-from-terminating-partner-program?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EU Cloud Lobby Asks Regulator To Block VMware From Terminating Partner Program](https://tech.slashdot.org/story/26/03/19/2217208/eu-cloud-lobby-asks-regulator-to-block-vmware-from-terminating-partner-program?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-20, 03:27:11](https://lobste.rs/s/hjr72q/be_better_programmer_write_little_proofs) - [To be a better programmer, write little proofs in your head (2025)](https://blog.get-nerve.com/to-be-a-better-programmer-write-little-proofs-in-your-head/)
* [2026-03-20, 03:11:00](https://soylentnews.org/article.pl?sid=26/03/19/035202&amp;from=rss) - [The Ongoing Strait of Hormuz Blockage Will Impact the Semiconductor and AI Industries](https://soylentnews.org/article.pl?sid=26/03/19/035202&amp;from=rss)
* [2026-03-20, 01:11:39](https://lobste.rs/s/s40j01/what_languages_is_arthur_whitney_style) - [What Languages is Arthur Whitney Style Code Possible in?](https://lobste.rs/s/s40j01/what_languages_is_arthur_whitney_style)
* [2026-03-20, 01:09:45](https://news.ycombinator.com/item?id=47448994) - [Full Disclosure: A Third (and Fourth) Azure Sign-In Log Bypass Found](https://trustedsec.com/blog/full-disclosure-a-third-and-fourth-azure-sign-in-log-bypass-found)
* [2026-03-20, 00:26:47](https://news.ycombinator.com/item?id=47448566) - [Drugwars for the TI-82/83/83 Calculators (2011)](https://gist.github.com/mattmanning/1002653/b7a1e88479a10eaae3bd5298b8b2c86e16fb4404)
* [2026-03-20, 00:22:08](https://news.ycombinator.com/item?id=47448524) - [Push events into a running session with channels](https://code.claude.com/docs/en/channels)
* [2026-03-19, 23:00:00](https://tech.slashdot.org/story/26/03/19/2144200/online-bot-traffic-will-exceed-human-traffic-by-2027-cloudflare-ceo-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Online Bot Traffic Will Exceed Human Traffic By 2027, Cloudflare CEO Says](https://tech.slashdot.org/story/26/03/19/2144200/online-bot-traffic-will-exceed-human-traffic-by-2027-cloudflare-ceo-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-19, 22:23:00](https://soylentnews.org/article.pl?sid=26/03/19/0258237&amp;from=rss) - [Over Fifteen Years Later, Microsoft Morged My Diagram](https://soylentnews.org/article.pl?sid=26/03/19/0258237&amp;from=rss)
* [2026-03-19, 22:00:00](https://tech.slashdot.org/story/26/03/19/208232/4chan-mocks-700k-fine-for-uk-online-safety-breaches?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [4Chan Mocks $700K Fine For UK Online Safety Breaches](https://tech.slashdot.org/story/26/03/19/208232/4chan-mocks-700k-fine-for-uk-online-safety-breaches?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-19, 21:00:00](https://yro.slashdot.org/story/26/03/19/1936250/rogue-ai-triggers-serious-security-incident-at-meta?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rogue AI Triggers Serious Security Incident At Meta](https://yro.slashdot.org/story/26/03/19/1936250/rogue-ai-triggers-serious-security-incident-at-meta?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-19, 20:00:00](https://yro.slashdot.org/story/26/03/19/1912217/rapper-afroman-wins-defamation-lawsuit-over-use-of-police-raid-footage-in-his-music-videos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rapper Afroman Wins Defamation Lawsuit Over Use of Police Raid Footage In His Music Videos](https://yro.slashdot.org/story/26/03/19/1912217/rapper-afroman-wins-defamation-lawsuit-over-use-of-police-raid-footage-in-his-music-videos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-19, 19:00:00](https://developers.slashdot.org/story/26/03/19/1832217/google-details-new-24-hour-process-to-sideload-unverified-android-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Details New 24-Hour Process To Sideload Unverified Android Apps](https://developers.slashdot.org/story/26/03/19/1832217/google-details-new-24-hour-process-to-sideload-unverified-android-apps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-19, 18:52:28](https://lobste.rs/s/5d6qru/how_many_branches_can_your_cpu_predict) - [How many branches can your CPU predict?](https://lemire.me/blog/2026/03/18/how-many-branches-can-your-cpu-predict/)
* [2026-03-19, 18:00:00](https://games.slashdot.org/story/26/03/19/182233/meta-backtracks-will-keep-horizon-worlds-vr-support-for-existing-games?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Backtracks, Will Keep Horizon Worlds VR Support &apos;For Existing Games&apos;](https://games.slashdot.org/story/26/03/19/182233/meta-backtracks-will-keep-horizon-worlds-vr-support-for-existing-games?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-19, 17:50:28](https://lobste.rs/s/3qhmza/getting_ziggy_with_it_re_factor) - [Getting Ziggy With It – Re: Factor](https://re.factorcode.org/2026/03/getting-ziggy-with-it.html)
* [2026-03-19, 17:38:00](https://soylentnews.org/article.pl?sid=26/03/18/1530220&amp;from=rss) - [Predicted by Einstein 100 Years Ago, This Cosmic Phenomenon Has Finally Been Observed](https://soylentnews.org/article.pl?sid=26/03/18/1530220&amp;from=rss)
* [2026-03-19, 17:32:34](https://lobste.rs/s/g1ktjl/android_developer_verification) - [Android developer verification: Balancing openness and choice with safety](https://android-developers.googleblog.com/2026/03/android-developer-verification.html)
* [2026-03-19, 17:16:04](https://news.ycombinator.com/item?id=47442690) - [Google details new 24-hour process to sideload unverified Android apps](https://arstechnica.com/gadgets/2026/03/google-details-new-24-hour-process-to-sideload-unverified-android-apps/)
* [2026-03-19, 17:00:00](https://developers.slashdot.org/story/26/03/19/1621209/openai-acquires-developer-tooling-startup-astral?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Acquires Developer Tooling Startup Astral](https://developers.slashdot.org/story/26/03/19/1621209/openai-acquires-developer-tooling-startup-astral?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-19, 16:39:31](https://lobste.rs/s/nzg621/things_turbo_pascal_is_smaller_than_2011) - [Things That Turbo Pascal is Smaller Than (2011)](https://prog21.dadgum.com/116.html)
* [2026-03-19, 16:00:00](https://yro.slashdot.org/story/26/03/19/0430224/walmart-wins-patents-to-give-algorithms-more-sway-over-prices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Walmart Wins Patents To Give Algorithms More Sway Over Prices](https://yro.slashdot.org/story/26/03/19/0430224/walmart-wins-patents-to-give-algorithms-more-sway-over-prices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-19, 15:56:06](https://news.ycombinator.com/item?id=47441546) - [Show HN: Three new Kitten TTS models – smallest less than 25MB](https://github.com/KittenML/KittenTTS)
* [2026-03-19, 15:00:00](https://yro.slashdot.org/story/26/03/19/0012252/microsoft-considers-legal-action-over-50-billion-amazon-openai-cloud-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Considers Legal Action Over $50 Billion Amazon-OpenAI Cloud Deal](https://yro.slashdot.org/story/26/03/19/0012252/microsoft-considers-legal-action-over-50-billion-amazon-openai-cloud-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-19, 14:01:12](https://lobste.rs/s/vteijd/root_from_parking_lot_openwrt_xss_through) - [Root from the parking lot: OpenWRT XSS through SSID scanning (CVE-2026-32721)](https://mxsasha.eu/posts/openwrt-ssid-xss-to-root/)
* [2026-03-19, 12:53:00](https://soylentnews.org/article.pl?sid=26/03/18/1524211&amp;from=rss) - [100 Years Later, Where is Robert Goddard&apos;s First Liquid-Fuel Rocket?](https://soylentnews.org/article.pl?sid=26/03/18/1524211&amp;from=rss)
* [2026-03-19, 12:32:27](https://lobste.rs/s/nfkpw4/ai_s_impact_on_mathematics_is_analogous) - [AI&apos;s impact on mathematics is analogous to the car&apos;s impact on cities](https://mathstodon.xyz/@tao/116252708577614828)
* [2026-03-19, 11:00:00](https://apple.slashdot.org/story/26/03/19/006207/iphone-exploit-darksword-steals-data-in-minutes-with-no-trace?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [iPhone Exploit DarkSword Steals Data In Minutes With No Trace](https://apple.slashdot.org/story/26/03/19/006207/iphone-exploit-darksword-steals-data-in-minutes-with-no-trace?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-19, 08:08:00](https://soylentnews.org/article.pl?sid=26/03/18/1522208&amp;from=rss) - [The Science of How Fireflies Stay in Sync](https://soylentnews.org/article.pl?sid=26/03/18/1522208&amp;from=rss)
* [2026-03-19, 07:00:00](https://tech.slashdot.org/story/26/03/19/001230/pardoned-nikola-fraudster-is-raising-funds-for-ai-powered-planes-he-claims-will-reshape-aviation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pardoned Nikola Fraudster Is Raising Funds For AI-Powered Planes He Claims Will Reshape Aviation](https://tech.slashdot.org/story/26/03/19/001230/pardoned-nikola-fraudster-is-raising-funds-for-ai-powered-planes-he-claims-will-reshape-aviation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-19, 04:41:45](https://lobste.rs/s/09wmcz/no_semicolons_needed) - [No Semicolons Needed](https://terts.dev/blog/no-semicolons-needed/)
* [2026-03-19, 03:23:00](https://soylentnews.org/article.pl?sid=26/03/17/0844255&amp;from=rss) - [Humanities in the Machine](https://soylentnews.org/article.pl?sid=26/03/17/0844255&amp;from=rss)
* [2026-03-18, 22:38:00](https://soylentnews.org/article.pl?sid=26/03/17/0839217&amp;from=rss) - [Chimps’ Love for Crystals Could Help Us Understand Our Own Ancestors’ Fascination With Gems](https://soylentnews.org/article.pl?sid=26/03/17/0839217&amp;from=rss)
* [2026-03-18, 17:54:00](https://soylentnews.org/politics/article.pl?sid=26/03/17/0835230&amp;from=rss) - [FCC Chairman Threatens To Revoke TV Licenses Over Iran Coverage](https://soylentnews.org/politics/article.pl?sid=26/03/17/0835230&amp;from=rss)
* [2026-03-18, 13:04:00](https://soylentnews.org/article.pl?sid=26/03/17/0831246&amp;from=rss) - [Woman Sneezes Out Maggots After Fly Larvae Get Trapped in Her Deviated Septum](https://soylentnews.org/article.pl?sid=26/03/17/0831246&amp;from=rss)
* [2026-03-18, 08:21:00](https://soylentnews.org/article.pl?sid=26/03/17/0828240&amp;from=rss) - [Research Shows How Lost Memories Can be Reactivated](https://soylentnews.org/article.pl?sid=26/03/17/0828240&amp;from=rss)
* [2026-03-18, 03:36:00](https://soylentnews.org/article.pl?sid=26/03/17/0827224&amp;from=rss) - [Apocalyptic Beliefs Are No Longer Fringe—and They&apos;re Shaping How People Respond](https://soylentnews.org/article.pl?sid=26/03/17/0827224&amp;from=rss)
* [2026-03-18, 02:28:23](https://news.ycombinator.com/item?id=47420950) - [Too Much Color](https://www.keithcirkel.co.uk/too-much-color/)
* [2026-03-17, 22:53:00](https://soylentnews.org/article.pl?sid=26/03/16/140213&amp;from=rss) - [Porsche Puts Its Faith Back in Internal Combustion Engines](https://soylentnews.org/article.pl?sid=26/03/16/140213&amp;from=rss)
* [2026-03-17, 21:00:54](https://news.ycombinator.com/item?id=47418247) - [Regex Blaster](https://mdp.github.io/regex-blaster/)
* [2026-03-17, 19:19:44](https://news.ycombinator.com/item?id=47416972) - [How the Turner twins are mythbusting modern technical apparel](https://www.carryology.com/insights/how-the-turner-twins-are-mythbusting-modern-gear/)
* [2026-03-17, 18:43:53](https://news.ycombinator.com/item?id=47416543) - [The Los Angeles Aqueduct Is Wild](https://practical.engineering/blog/2026/3/17/the-los-angeles-aqueduct-is-wild)
* [2026-03-17, 18:08:00](https://soylentnews.org/article.pl?sid=26/03/16/1356204&amp;from=rss) - [Meta is Ending Instagram Direct Message End-to-End Encryption](https://soylentnews.org/article.pl?sid=26/03/16/1356204&amp;from=rss)
* [2026-03-17, 15:16:39](https://news.ycombinator.com/item?id=47413879) - [Drawvg Filter for FFmpeg](https://ayosec.github.io/ffmpeg-drawvg/)
* [2026-03-17, 13:23:00](https://soylentnews.org/article.pl?sid=26/03/16/1353215&amp;from=rss) - [IBM, Sonic Delay Lines, and the History of the 80×24 Display](https://soylentnews.org/article.pl?sid=26/03/16/1353215&amp;from=rss)
* [2026-03-17, 10:39:55](https://news.ycombinator.com/item?id=47410871) - [VisiCalc Reconstructed](https://zserge.com/posts/visicalc/)
* [2026-03-17, 08:38:00](https://soylentnews.org/article.pl?sid=26/03/15/1351230&amp;from=rss) - [Magnetars Drag Spacetime to Power Superluminous Supernovae](https://soylentnews.org/article.pl?sid=26/03/15/1351230&amp;from=rss)
* [2026-03-17, 05:38:26](https://news.ycombinator.com/item?id=47409055) - [Flash-KMeans: Fast and Memory-Efficient Exact K-Means](https://arxiv.org/abs/2603.09229)
* [2026-03-17, 03:57:00](https://soylentnews.org/article.pl?sid=26/03/15/1339231&amp;from=rss) - [Musk Fails To Block California Data Disclosure Law He Fears Will Ruin XAI](https://soylentnews.org/article.pl?sid=26/03/15/1339231&amp;from=rss)
* [2026-03-17, 01:02:41](https://news.ycombinator.com/item?id=47407293) - [Video Encoding and Decoding with Vulkan Compute Shaders in FFmpeg](https://www.khronos.org/blog/video-encoding-and-decoding-with-vulkan-compute-shaders-in-ffmpeg)
* [2026-03-16, 23:09:00](https://soylentnews.org/article.pl?sid=26/03/15/1330233&amp;from=rss) - [11-Month Old Russian Outfit Claims It Has Developed 16-Core and 32-Core Processors, Flaunts Cyrillic](https://soylentnews.org/article.pl?sid=26/03/15/1330233&amp;from=rss)
* [2026-03-16, 22:56:13](https://news.ycombinator.com/item?id=47406160) - [Return of the Obra Dinn: spherical mapped dithering for a 1bpp first-person game](https://forums.tigsource.com/index.php?topic=40832.msg1363742#msg1363742)
* [2026-03-16, 19:49:20](https://news.ycombinator.com/item?id=47403905) - [FSF statement on copyright infringement lawsuit Bartz v. Anthropic](https://www.fsf.org/blogs/licensing/2026-anthropic-settlement)
* [2026-03-16, 18:26:00](https://soylentnews.org/article.pl?sid=26/03/15/1328200&amp;from=rss) - [Google Fiber Will be Sold to Private Equity Firm and Merge With Cable Company](https://soylentnews.org/article.pl?sid=26/03/15/1328200&amp;from=rss)
* [2026-03-16, 13:37:00](https://soylentnews.org/article.pl?sid=26/03/15/1319251&amp;from=rss) - [Why the World&apos;s Militaries Are Scrambling to Create Their Own Starlink](https://soylentnews.org/article.pl?sid=26/03/15/1319251&amp;from=rss)
* [2026-03-16, 10:53:10](https://news.ycombinator.com/item?id=47397372) - [Just Put It on a Map](https://progressandpoverty.substack.com/p/just-put-it-on-a-map)
* [2026-03-16, 09:04:43](https://news.ycombinator.com/item?id=47396593) - [Building a Reader for the Smallest Hard Drive](https://www.willwhang.dev/Reading-MK4001MTD/)
* [2026-03-16, 08:55:00](https://soylentnews.org/article.pl?sid=26/03/15/0111236&amp;from=rss) - [Iran Conflict Delays Meta&apos;s 2Africa Undersea Cable Project — Cable Layer Declares Force Majeure](https://soylentnews.org/article.pl?sid=26/03/15/0111236&amp;from=rss)
* [2026-03-16, 04:07:00](https://soylentnews.org/article.pl?sid=26/03/15/016219&amp;from=rss) - [Nvidia Is Reportedly Planning Its Own Open Source OpenClaw Competitor](https://soylentnews.org/article.pl?sid=26/03/15/016219&amp;from=rss)
