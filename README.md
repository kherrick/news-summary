# [News Summary](https://kherrick.github.io/news-summary/)

## Entertainment and Culture News

* [RIP - Ozzy Osborne](https://soylentnews.org/article.pl?sid=25/07/22/1846202&amp;from=rss) - Black Sabbath's lead singer, Ozzy Osbourne, passes away at age 76.

* [Spotify Publishes AI-Generated Songs From Dead Artists Without Permission](https://entertainment.slashdot.org/story/25/07/21/2037254/spotify-publishes-ai-generated-songs-from-dead-artists-without-permission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Discussion about ethical considerations in AI-generated art featuring deceased artists.

* [Thelonious Monk, the Teenage Weirdo, and the Battle Over a Lost Sonic Masterpiece](https://soylentnews.org/article.pl?sid=25/07/21/1617239&amp;from=rss) - A retrospective on a rare recording by jazz legend Thelonious Monk.

## Science and Space Headlines

* [First Hubble Telescope Images of Interstellar Comet 3I/Atlas](https://bsky.app/profile/astrafoxen.bsky.social/post/3luiwnar3j22o) - New Hubble imagery captures fascinating details of an interstellar comet.

* [Gemini North telescope discovers long-predicted stellar companion of Betelgeuse](https://www.science.org/content/article/betelgeuse-s-long-predicted-stellar-companion-may-have-been-found-last) - Discovery of a long-anticipated celestial companion of the famous Betelgeuse star.

* [NASA Saved a Camera From 370 Million Miles Away](https://science.slashdot.org/story/25/07/22/0642211/how-nasa-saved-a-camera-from-370-million-miles-away?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Engineers make an incredible recovery of a deep-space camera.

* [Many Lung Cancers Are Now in Nonsmokers. Scientists Want to Know Why.](https://science.slashdot.org/story/25/07/22/163219/many-lung-cancers-are-now-in-nonsmokers-scientists-want-to-know-why?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Research into the emerging trend of nonsmokers being affected by lung cancer.

## Artificial Intelligence and Technology

* [Stop Pretending LLMs Have Feelings Media's Dangerous AI Anthropomorphism Problem](https://www.readtpa.com/p/stop-pretending-chatbots-have-feelings) - Analysis of media's anthropomorphism of AI technologies and its unintended consequences.

* [Microsoft Poaches Top Google DeepMind Staff in AI Talent War](https://slashdot.org/story/25/07/22/1727252/microsoft-poaches-top-google-deepmind-staff-in-ai-talent-war?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Microsoft's aggressive recruitment among AI talent.

* [Yt-transcriber – Give a YouTube URL and get a transcription](https://github.com/pmarreck/yt-transcriber) - A handy tool for transcribing YouTube videos.

* [ChatGPT Users Send 2.5 Billion Prompts a Day](https://news.slashdot.org/story/25/07/22/0645255/chatgpt-users-send-25-billion-prompts-a-day?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Highlights the sheer scale of ChatGPT usage, showcasing AI's growing role.

* [Can AI Think - and Should It? What It Means To Think, From Plato To ChatGPT](https://slashdot.org/story/25/07/21/2052216/can-ai-think---and-should-it-what-it-means-to-think-from-plato-to-chatgpt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Philosophical exploration of artificial intelligence's capacity to think.

## Programming and Software Development

* [P Verified](https://b-hilprecht.github.io/2025/07/10/p-verified-log-1-the-need-for-verification.html) - Progress in formal verification and its implications for computer science.

* [Tailwind is the Worst of All Worlds](https://colton.dev/blog/tailwind-is-the-worst-of-all-worlds/) - A critique of Tailwind CSS and its limitations in modern web development.

* [How to Firefox](https://kau.sh/blog/how-to-firefox/) - Tips for customizing and optimizing the Firefox browser.

* [Reverse Proxy Deep Dive: Why HTTP Parsing at the Edge Is Harder Than It Looks](https://startwithawhy.com/reverseproxy/2025/07/20/ReverseProxy-Deep-Dive-Part2.html) - A technical exploration of HTTP parsing challenges.

* [Why Lexing and Parsing Should Be Separate](https://github.com/oils-for-unix/oils/wiki/Why-Lexing-and-Parsing-Should-Be-Separate) - A strong case for modular compiler design, distinguishing lexing from parsing.

## Astronomy and Cosmic Discoveries

* [A Strange Fossil at the Edge of the Solar System Just Shook Up Planet Nine Theories](https://soylentnews.org/article.pl?sid=25/07/21/2130213&amp;from=rss) - New discoveries challenge existing Planet Nine theories.

* [Cosmic Dawn: The Untold Story of the James Webb Space Telescope](https://plus.nasa.gov/video/cosmic-dawn-the-untold-story-of-the-james-webb-space-telescope/) - Insights into the revolutionary scientific journey of the Webb Telescope.

* [Weird Space Weather Seems to Have Influenced Human Behavior 41,000 years ago](https://soylentnews.org/article.pl?sid=25/07/20/221207&amp;from=rss) - Study on ancient correlations between unusual space weather and human activities.

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

* [2025-07-22, 18:48:00](https://soylentnews.org/article.pl?sid=25/07/22/1846202&amp;from=rss) - [RIP - Ozzy Osborne](https://soylentnews.org/article.pl?sid=25/07/22/1846202&amp;from=rss)
* [2025-07-22, 18:20:47](https://news.ycombinator.com/item?id=44651066) - [Black Sabbath&apos;s Ozzy Osbourne dies aged 76](https://www.bbc.co.uk/news/live/cn0qq5nyxn0t)
* [2025-07-22, 18:12:55](https://lobste.rs/s/m7oa87/p_verified) - [P Verified](https://b-hilprecht.github.io/2025/07/10/p-verified-log-1-the-need-for-verification.html)
* [2025-07-22, 18:01:10](https://lobste.rs/s/mmdeza/asymmetry_verification_verifier_s_law) - [Asymmetry of verification and verifier’s law](https://www.jasonwei.net/blog/asymmetry-of-verification-and-verifiers-law)
* [2025-07-22, 17:51:53](https://news.ycombinator.com/item?id=44650694) - [Stop Pretending LLMs Have Feelings Media&apos;s Dangerous AI Anthropomorphism Problem](https://www.readtpa.com/p/stop-pretending-chatbots-have-feelings)
* [2025-07-22, 17:40:40](https://news.ycombinator.com/item?id=44650567) - [Show HN: Any-LLM – lightweight and open-source router to access any LLM Provider](https://github.com/mozilla-ai/any-llm)
* [2025-07-22, 17:27:00](https://slashdot.org/story/25/07/22/1727252/microsoft-poaches-top-google-deepmind-staff-in-ai-talent-war?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Poaches Top Google DeepMind Staff in AI Talent War](https://slashdot.org/story/25/07/22/1727252/microsoft-poaches-top-google-deepmind-staff-in-ai-talent-war?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-22, 17:00:10](https://news.ycombinator.com/item?id=44649999) - [Better Auth (YC X25) Is Hiring](https://www.ycombinator.com/companies/better-auth/jobs/N0CtN58-staff-engineer)
* [2025-07-22, 16:50:09](https://lobste.rs/s/5u6ydr/tailwind_is_worst_all_worlds) - [Tailwind is the Worst of All Worlds](https://colton.dev/blog/tailwind-is-the-worst-of-all-worlds/)
* [2025-07-22, 16:41:32](https://news.ycombinator.com/item?id=44649653) - [First Hubble Telescope Images of Interstellar Comet 3I/Atlas](https://bsky.app/profile/astrafoxen.bsky.social/post/3luiwnar3j22o)
* [2025-07-22, 16:41:31](https://news.ycombinator.com/item?id=44649651) - [Gemini North telescope discovers long-predicted stellar companion of Betelgeuse](https://www.science.org/content/article/betelgeuse-s-long-predicted-stellar-companion-may-have-been-found-last)
* [2025-07-22, 16:40:00](https://tech.slashdot.org/story/25/07/22/1629240/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results-pew-research-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Users Are Less Likely To Click on Links When an AI Summary Appears in the Results, Pew Research Finds](https://tech.slashdot.org/story/25/07/22/1629240/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results-pew-research-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-22, 16:37:44](https://lobste.rs/s/kykhhj/trust_deterministic_execution_scale) - [Trust Deterministic Execution to Scale &amp; Simplify Your Systems](https://www.youtube.com/watch?v=siEtKc6Sq2Y)
* [2025-07-22, 16:22:51](https://news.ycombinator.com/item?id=44649319) - [Tiny Code Reader: a $7 QR code sensor](https://excamera.substack.com/p/tiny-code-reader-a-7-qr-code-sensor)
* [2025-07-22, 16:11:45](https://news.ycombinator.com/item?id=44649115) - [Launch HN: Promi (YC S24) – Personalize e-commerce discounts and retail offers](https://news.ycombinator.com/item?id=44649115)
* [2025-07-22, 16:07:22](https://news.ycombinator.com/item?id=44649036) - [CSS&apos;s problems are Tailwind&apos;s problems](https://colton.dev/blog/tailwind-is-the-worst-of-all-worlds/)
* [2025-07-22, 16:03:11](https://news.ycombinator.com/item?id=44648957) - [Bypassing Watermark Implementations](https://blog.kulkan.com/bypassing-watermark-implementations-fe39e98ca22b)
* [2025-07-22, 16:03:00](https://science.slashdot.org/story/25/07/22/163219/many-lung-cancers-are-now-in-nonsmokers-scientists-want-to-know-why?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Many Lung Cancers Are Now in Nonsmokers. Scientists Want to Know Why.](https://science.slashdot.org/story/25/07/22/163219/many-lung-cancers-are-now-in-nonsmokers-scientists-want-to-know-why?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-22, 15:54:31](https://news.ycombinator.com/item?id=44648772) - [Blip: Peer-to-Peer Massive File Sharing by Former Dropbox Engineers](https://blip.net/)
* [2025-07-22, 15:51:50](https://news.ycombinator.com/item?id=44648728) - [Facts don&apos;t change minds, structure does](https://vasily.cc/blog/facts-dont-change-minds/)
* [2025-07-22, 15:22:00](https://slashdot.org/story/25/07/22/1451201/banks-view-heavy-buy-now-pay-later-use-as-red-flag-for-loan-approvals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Banks View Heavy &apos;Buy Now, Pay Later&apos; Use as Red Flag for Loan Approvals](https://slashdot.org/story/25/07/22/1451201/banks-view-heavy-buy-now-pay-later-use-as-red-flag-for-loan-approvals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-22, 15:22:00](https://soylentnews.org/article.pl?sid=25/07/21/2130213&amp;from=rss) - [A Strange Fossil at the Edge of the Solar System Just Shook Up Planet Nine Theories](https://soylentnews.org/article.pl?sid=25/07/21/2130213&amp;from=rss)
* [2025-07-22, 14:47:54](https://news.ycombinator.com/item?id=44647609) - [1KB JavaScript Numbers Station](https://shkspr.mobi/blog/2025/07/1kb-js-numbers-station/)
* [2025-07-22, 14:47:33](https://news.ycombinator.com/item?id=44647600) - [Reverse Proxy Deep Dive: Why HTTP Parsing at the Edge Is Harder Than It Looks](https://startwithawhy.com/reverseproxy/2025/07/20/ReverseProxy-Deep-Dive-Part2.html)
* [2025-07-22, 14:45:45](https://news.ycombinator.com/item?id=44647572) - [Go allocation probe](https://www.scattered-thoughts.net/writing/go-allocation-probe/)
* [2025-07-22, 14:40:00](https://yro.slashdot.org/story/25/07/22/140208/mike-lynchs-estate-and-business-partner-owe-hp-944m-court-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mike Lynch&apos;s Estate and Business Partner Owe HP $944M, Court Rules](https://yro.slashdot.org/story/25/07/22/140208/mike-lynchs-estate-and-business-partner-owe-hp-944m-court-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-22, 14:17:05](https://news.ycombinator.com/item?id=44647190) - [Font Comparison: Atkinson Hyperlegible Mono vs. JetBrains Mono and Fira Code](https://www.anthes.is/font-comparison-review-atkinson-hyperlegible-mono.html)
* [2025-07-22, 14:04:00](https://tech.slashdot.org/story/25/07/22/144239/google-launches-oss-rebuild?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Launches OSS Rebuild](https://tech.slashdot.org/story/25/07/22/144239/google-launches-oss-rebuild?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-22, 14:02:48](https://lobste.rs/s/iodpgb/library_babel) - [Library of Babel](https://libraryofbabel.app/about)
* [2025-07-22, 13:53:46](https://news.ycombinator.com/item?id=44646925) - [OSS Rebuild: open-source, Rebuilt to Last](https://security.googleblog.com/2025/07/introducing-oss-rebuild-open-source.html)
* [2025-07-22, 13:51:21](https://news.ycombinator.com/item?id=44646901) - [Yt-transcriber – Give a YouTube URL and get a transcription](https://github.com/pmarreck/yt-transcriber)
* [2025-07-22, 13:48:55](https://news.ycombinator.com/item?id=44646869) - [DaisyUI: Tailwind CSS Components](https://daisyui.com/)
* [2025-07-22, 13:43:16](https://news.ycombinator.com/item?id=44646801) - [TODOs Aren&apos;t for Doing](https://sophiebits.com/2025/07/21/todos-arent-for-doing)
* [2025-07-22, 13:40:34](https://lobste.rs/s/j1hijj/todos_aren_t_for_doing) - [TODOs aren’t for doing](https://sophiebits.com/2025/07/21/todos-arent-for-doing)
* [2025-07-22, 13:36:20](https://lobste.rs/s/d5ugox/detecting_organic_contaminants_with) - [Detecting Organic Contaminants With Less Data](https://mirawelner.com/posts/spectroscopy.html)
* [2025-07-22, 13:34:49](https://lobste.rs/s/tbyuze/fedora_must_carefully_embrace_flathub) - [Fedora Must (Carefully) Embrace Flathub](https://blogs.gnome.org/mcatanzaro/2025/07/21/fedora-must-carefully-embrace-flathub/)
* [2025-07-22, 13:00:00](https://science.slashdot.org/story/25/07/22/0642211/how-nasa-saved-a-camera-from-370-million-miles-away?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How NASA Saved a Camera From 370 Million Miles Away](https://science.slashdot.org/story/25/07/22/0642211/how-nasa-saved-a-camera-from-370-million-miles-away?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-22, 12:05:44](https://news.ycombinator.com/item?id=44645846) - [Show HN: The Magic of Code – book about the wonders and weirdness of computation](https://themagicofcode.com/sample/)
* [2025-07-22, 12:00:00](https://news.slashdot.org/story/25/07/21/2226250/us-signals-intention-to-rethink-job-h-1b-lottery?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Signals Intention To Rethink Job H-1B Lottery](https://news.slashdot.org/story/25/07/21/2226250/us-signals-intention-to-rethink-job-h-1b-lottery?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-22, 11:31:24](https://news.ycombinator.com/item?id=44645597) - [Show HN: A word of the day that doesn&apos;t suck](https://news.ycombinator.com/item?id=44645597)
* [2025-07-22, 10:52:24](https://lobste.rs/s/pb6ghy/anatomy_syn_ack_attack_2019) - [Anatomy of a SYN-ACK attack (2019)](https://www.akamai.com/blog/security/anatomy-of-a-syn-ack-attack)
* [2025-07-22, 10:51:30](https://news.ycombinator.com/item?id=44645353) - [How to Firefox](https://kau.sh/blog/how-to-firefox/)
* [2025-07-22, 10:50:17](https://lobste.rs/s/0ab7g3/comparing_glove80_maltron_keyboards) - [Comparing the Glove80 and Maltron keyboards](https://tratt.net/laurie/blog/2025/comparing_the_glove80_and_maltron_keyboards.html)
* [2025-07-22, 10:33:00](https://soylentnews.org/article.pl?sid=25/07/21/1642237&amp;from=rss) - [Microsoft Says It Will No Longer Use Engineers in China for Department of Defense Work](https://soylentnews.org/article.pl?sid=25/07/21/1642237&amp;from=rss)
* [2025-07-22, 10:16:55](https://lobste.rs/s/lenqkc/self_hosted_bsd_native_gemini_protocol) - [A Self-hosted, BSD-native Gemini Protocol Server Stack](https://journal.bsd.cafe/2025/07/22/a-self-hosted-bsd-native-gemini-protocol-server-stack/)
* [2025-07-22, 10:05:16](https://lobste.rs/s/2m8sl6/foreword_for_fuzz_testing_book) - [Foreword for Fuzz Testing Book](https://pages.cs.wisc.edu/~bart/fuzz/Foreword1.html)
* [2025-07-22, 10:00:00](https://news.slashdot.org/story/25/07/22/0645255/chatgpt-users-send-25-billion-prompts-a-day?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ChatGPT Users Send 2.5 Billion Prompts a Day](https://news.slashdot.org/story/25/07/22/0645255/chatgpt-users-send-25-billion-prompts-a-day?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-22, 07:00:00](https://news.slashdot.org/story/25/07/21/2218208/climate-change-is-making-fire-weather-worse-for-worlds-forests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Climate Change Is Making Fire Weather Worse for World&apos;s Forests](https://news.slashdot.org/story/25/07/21/2218208/climate-change-is-making-fire-weather-worse-for-worlds-forests?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-22, 05:47:00](https://soylentnews.org/article.pl?sid=25/07/21/1617239&amp;from=rss) - [Thelonious Monk, the Teenage Weirdo, and the Battle Over a Lost Sonic Masterpiece](https://soylentnews.org/article.pl?sid=25/07/21/1617239&amp;from=rss)
* [2025-07-22, 05:42:10](https://news.ycombinator.com/item?id=44643564) - [Complete silence is always hallucinated as \&quot;ترجمة نانسي قنقر\&quot; in Arabic](https://github.com/openai/whisper/discussions/2608)
* [2025-07-22, 04:27:28](https://lobste.rs/s/r79s3w/devenv_1_8_progress_tui_secretspec) - [devenv 1.8: Progress TUI, SecretSpec Integration, Listing Tasks, and Smaller Containers](https://devenv.sh/blog/2025/07/22/devenv-18-progress-tui-secretspec-integration-listing-tasks-and-smaller-containers)
* [2025-07-22, 04:20:00](https://science.slashdot.org/story/25/07/21/228202/at-least-750-us-hospitals-faced-disruptions-during-last-years-crowdstrike-outage-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [At Least 750 US Hospitals Faced Disruptions During Last Year&apos;s CrowdStrike Outage, Study Finds](https://science.slashdot.org/story/25/07/21/228202/at-least-750-us-hospitals-faced-disruptions-during-last-years-crowdstrike-outage-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-22, 03:30:00](https://slashdot.org/story/25/07/21/2052216/can-ai-think---and-should-it-what-it-means-to-think-from-plato-to-chatgpt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Can AI Think - and Should It? What It Means To Think, From Plato To ChatGPT](https://slashdot.org/story/25/07/21/2052216/can-ai-think---and-should-it-what-it-means-to-think-from-plato-to-chatgpt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-22, 01:40:00](https://slashdot.org/story/25/07/21/220229/softbank-and-open-ais-500-billion-ai-project-struggles-to-get-off-ground?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SoftBank and Open AI&apos;s $500 Billion AI Project Struggles To Get Off Ground](https://slashdot.org/story/25/07/21/220229/softbank-and-open-ais-500-billion-ai-project-struggles-to-get-off-ground?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-22, 01:04:00](https://soylentnews.org/article.pl?sid=25/07/20/2227233&amp;from=rss) - [Meta is Building “Several” Multi-Gigawatt Compute Clusters](https://soylentnews.org/article.pl?sid=25/07/20/2227233&amp;from=rss)
* [2025-07-22, 01:00:00](https://tech.slashdot.org/story/25/07/21/2044200/fcc-to-eliminate-gigabit-speed-goal-scrap-analysis-of-broadband-prices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FCC To Eliminate Gigabit Speed Goal, Scrap Analysis of Broadband Prices](https://tech.slashdot.org/story/25/07/21/2044200/fcc-to-eliminate-gigabit-speed-goal-scrap-analysis-of-broadband-prices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-22, 00:20:00](https://entertainment.slashdot.org/story/25/07/21/2037254/spotify-publishes-ai-generated-songs-from-dead-artists-without-permission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Spotify Publishes AI-Generated Songs From Dead Artists Without Permission](https://entertainment.slashdot.org/story/25/07/21/2037254/spotify-publishes-ai-generated-songs-from-dead-artists-without-permission?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-21, 23:41:28](https://lobste.rs/s/j5ahk8/jujutsu_for_busy_devs) - [Jujutsu For Busy Devs](https://maddie.wtf/posts/2025-07-21-jujutsu-for-busy-devs)
* [2025-07-21, 22:52:49](https://lobste.rs/s/mzrah6/rfc_865_quote_day_protocol) - [RFC 865: Quote of the Day Protocol](https://datatracker.ietf.org/doc/html/rfc865)
* [2025-07-21, 21:53:24](https://lobste.rs/s/brxlbh/advanced_version_gemini_with_deep_think) - [Advanced version of Gemini with Deep Think officially achieves gold-medal standard at the International Mathematical Olympiad](https://deepmind.google/discover/blog/advanced-version-of-gemini-with-deep-think-officially-achieves-gold-medal-standard-at-the-international-mathematical-olympiad/)
* [2025-07-21, 21:49:28](https://lobste.rs/s/h8bfgy/sapling) - [Sapling](https://sapling-scm.com/)
* [2025-07-21, 21:16:10](https://lobste.rs/s/cvhdvw/garbage_collection_for_systems) - [Garbage Collection for Systems Programmers (2023)](https://bitbashing.io/gc-for-systems-programmers.html)
* [2025-07-21, 21:10:55](https://lobste.rs/s/obhc4f/working_on_programming_language_age_llms) - [Working on a Programming Language in the Age of LLMs](https://ryelang.org/blog/posts/programming-language-in-age-of-llms/)
* [2025-07-21, 20:49:09](https://lobste.rs/s/6uj96z/automating_away_claude_s_bad_habits_with) - [Automating Away Claude&apos;s Bad Habits with Hooks](https://writeaheadblogg.ing/posts/claude-hooks-auto-fix-trailing-whitespace/)
* [2025-07-21, 20:19:00](https://soylentnews.org/article.pl?sid=25/07/20/221207&amp;from=rss) - [Weird Space Weather Seems to Have Influenced Human Behavior 41,000 years ago](https://soylentnews.org/article.pl?sid=25/07/20/221207&amp;from=rss)
* [2025-07-21, 18:09:56](https://lobste.rs/s/1ylyds/pogocache_fast_caching_software) - [Pogocache - Fast caching software](https://github.com/tidwall/pogocache)
* [2025-07-21, 15:48:48](https://lobste.rs/s/sdpydb/connmap_x11_desktop_widget_shows) - [connmap: X11 desktop widget that shows location of your current network peers on a world map in real-time](https://github.com/h2337/connmap)
* [2025-07-21, 15:39:00](https://soylentnews.org/article.pl?sid=25/07/20/1650210&amp;from=rss) - [HP is Going to Monitor PC Usage With a \&quot;Carfax for PCs\&quot; ](https://soylentnews.org/article.pl?sid=25/07/20/1650210&amp;from=rss)
* [2025-07-21, 12:34:37](https://lobste.rs/s/qykvpg/deeper_theories_program_design) - [Deeper theories of program design](https://typesanitizer.com/blog/deeper-theories.html)
* [2025-07-21, 12:13:19](https://lobste.rs/s/adii2s/dissertation_typesetting) - [Dissertation Typesetting Considerations](https://tony-zorman.com/posts/phd-typesetting.html)
* [2025-07-21, 10:55:00](https://soylentnews.org/article.pl?sid=25/07/20/0259241&amp;from=rss) - [Delta Air Lines is Using AI to Set the Maximum Price You’re Willing to Pay](https://soylentnews.org/article.pl?sid=25/07/20/0259241&amp;from=rss)
* [2025-07-21, 06:09:00](https://soylentnews.org/article.pl?sid=25/07/20/0228244&amp;from=rss) - [For Algorithms, a Little Memory Outweighs a Lot of Time](https://soylentnews.org/article.pl?sid=25/07/20/0228244&amp;from=rss)
* [2025-07-21, 01:22:00](https://soylentnews.org/article.pl?sid=25/07/19/1538201&amp;from=rss) - [Open, Free, and Completely Ignored: The Strange Afterlife of Symbian](https://soylentnews.org/article.pl?sid=25/07/19/1538201&amp;from=rss)
* [2025-07-20, 23:32:43](https://lobste.rs/s/tpmdss/why_lexing_parsing_should_be_separate) - [Why Lexing and Parsing Should Be Separate](https://github.com/oils-for-unix/oils/wiki/Why-Lexing-and-Parsing-Should-Be-Separate)
* [2025-07-20, 20:35:00](https://soylentnews.org/article.pl?sid=25/07/19/1342209&amp;from=rss) - [Iran Seeks Three Cloud Providers To Power Its Government](https://soylentnews.org/article.pl?sid=25/07/19/1342209&amp;from=rss)
* [2025-07-20, 19:12:00](https://soylentnews.org/article.pl?sid=25/07/20/1854256&amp;from=rss) - [Remote Access Trojan (RAT) Found in the AUR (Arch Linux User Repository)](https://soylentnews.org/article.pl?sid=25/07/20/1854256&amp;from=rss)
* [2025-07-20, 15:49:00](https://soylentnews.org/article.pl?sid=25/07/19/123202&amp;from=rss) - [Intel Has Discontinued Clear Linux, Effective Immediately](https://soylentnews.org/article.pl?sid=25/07/19/123202&amp;from=rss)
* [2025-07-20, 11:04:00](https://soylentnews.org/article.pl?sid=25/07/19/0033258&amp;from=rss) - [The Latest Windows PCs Remember Everything](https://soylentnews.org/article.pl?sid=25/07/19/0033258&amp;from=rss)
* [2025-07-20, 06:18:00](https://soylentnews.org/article.pl?sid=25/07/19/0023239&amp;from=rss) - [Infographic: Every Microsoft Acquisition Since 1986](https://soylentnews.org/article.pl?sid=25/07/19/0023239&amp;from=rss)
* [2025-07-20, 01:33:00](https://soylentnews.org/article.pl?sid=25/07/18/2350226&amp;from=rss) - [Is Tor Trustworthy and Safe?](https://soylentnews.org/article.pl?sid=25/07/18/2350226&amp;from=rss)
* [2025-07-19, 20:44:19](https://news.ycombinator.com/item?id=44619206) - [Don&apos;t animate height](https://www.granola.ai/blog/dont-animate-height)
* [2025-07-19, 20:33:00](https://soylentnews.org/article.pl?sid=25/07/18/0948223&amp;from=rss) - [The Fascinating Science of Pain – and Why Everyone Feels it Differently](https://soylentnews.org/article.pl?sid=25/07/18/0948223&amp;from=rss)
* [2025-07-19, 19:24:46](https://news.ycombinator.com/item?id=44618509) - [Cosmic Dawn: The Untold Story of the James Webb Space Telescope](https://plus.nasa.gov/video/cosmic-dawn-the-untold-story-of-the-james-webb-space-telescope/)
* [2025-07-19, 15:50:00](https://soylentnews.org/article.pl?sid=25/07/18/0939219&amp;from=rss) - [FuguIta: OpenBSD Live CD - Desktop Environment Demo Version with XFCE v.4.20.0](https://soylentnews.org/article.pl?sid=25/07/18/0939219&amp;from=rss)
* [2025-07-19, 12:08:40](https://news.ycombinator.com/item?id=44614837) - [MakeShift: Security Analysis of Shimano Di2 Wireless Gear Shifting in Bicycles](https://www.usenix.org/conference/woot24/presentation/motallebighomi)
* [2025-07-19, 11:08:00](https://soylentnews.org/article.pl?sid=25/07/18/0920228&amp;from=rss) - [Most Warming This Century May Be Due To Air Pollution Cuts](https://soylentnews.org/article.pl?sid=25/07/18/0920228&amp;from=rss)
* [2025-07-19, 08:18:57](https://news.ycombinator.com/item?id=44613594) - [From Cartography to Code: Architectures of Power at the Venice Biennale 2025](https://www.stirworld.com/see-features-from-cartography-to-code-architectures-of-power-at-the-venice-biennale-2025)
* [2025-07-19, 07:48:15](https://news.ycombinator.com/item?id=44613438) - [Show HN: Compass CNC – Open-Source Handheld CNC Router](https://www.compassrouter.com)
* [2025-07-19, 06:20:00](https://soylentnews.org/article.pl?sid=25/07/18/0136203&amp;from=rss) - [Two Guys Hated Using Comcast, So They Built Their Own Fiber ISP](https://soylentnews.org/article.pl?sid=25/07/18/0136203&amp;from=rss)
* [2025-07-19, 01:37:00](https://soylentnews.org/article.pl?sid=25/07/18/0124213&amp;from=rss) - [Radio Hobbyists, Rejoice! Good News for LoRa &amp; Mesh](https://soylentnews.org/article.pl?sid=25/07/18/0124213&amp;from=rss)
* [2025-07-18, 20:55:00](https://soylentnews.org/article.pl?sid=25/07/18/0111248&amp;from=rss) - [Drones, AI and Robot Pickers: Meet the Fully Autonomous Farm](https://soylentnews.org/article.pl?sid=25/07/18/0111248&amp;from=rss)
* [2025-07-18, 16:10:00](https://soylentnews.org/article.pl?sid=25/07/18/011202&amp;from=rss) - [DOGE Staffer With Access to Americans&apos; Personal Data Leaked Private xAI API Key](https://soylentnews.org/article.pl?sid=25/07/18/011202&amp;from=rss)
* [2025-07-18, 11:26:00](https://soylentnews.org/article.pl?sid=25/07/17/127255&amp;from=rss) - [Intel Axes Thousands of Technicians and Engineers in Sweeping U.S. Layoffs](https://soylentnews.org/article.pl?sid=25/07/17/127255&amp;from=rss)
* [2025-07-18, 08:55:56](https://news.ycombinator.com/item?id=44602609) - [An unprecedented window into how diseases take hold years before symptoms appear](https://www.bloomberg.com/news/articles/2025-07-18/what-scientists-learned-scanning-the-bodies-of-100-000-brits)
* [2025-07-18, 06:49:00](https://soylentnews.org/article.pl?sid=25/07/17/124242&amp;from=rss) - [Engineering the Origin of the Wheel](https://soylentnews.org/article.pl?sid=25/07/17/124242&amp;from=rss)
* [2025-07-18, 02:05:00](https://soylentnews.org/article.pl?sid=25/07/17/1148204&amp;from=rss) - [Nvidia Chips Become the First GPUs to Fall to Rowhammer Bit-Flip Attacks](https://soylentnews.org/article.pl?sid=25/07/17/1148204&amp;from=rss)
