# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Development

* [Exposing concurrency bugs with a custom scheduler [LWN.net]](https://lwn.net/Articles/1007689/) - A deep dive into how a custom scheduler can reveal concurrency bugs in software systems. [Comments](https://lobste.rs/s/g1lc5p/exposing_concurrency_bugs_with_custom)

* [Linux kernel cgroups writeback high CPU troubleshooting](https://dasl.cc/2025/01/01/debugging-our-new-linux-kernel/) - Learn techniques for addressing high CPU usage in Linux kernels caused by cgroups writeback issues. [Comments](https://news.ycombinator.com/item?id=43046174)

* [Rust: Doubling Throughput with Continuous Profiling and Optimization](https://www.polarsignals.com/blog/posts/2025/02/11/doubling-throughput-with-continuous-profiling-and-optimization) - Continuous profiling in Rust to achieve better performance and throughput. [Comments](https://news.ycombinator.com/item?id=43046122)

* [Terminader: merging the Finder and Terminal](https://github.com/shuang886/Terminader) - Explore a tool designed to integrate Finder and Terminal into a single interface. [Comments](https://lobste.rs/s/bwzc42/terminader_merging_finder_terminal)

## Artificial Intelligence and Machine Learning

* [Alibaba To Partner With Apple On AI Features, Sending Shares To 3-Year High](https://apple.slashdot.org/story/25/02/14/051243/alibaba-to-partner-with-apple-on-ai-features-sending-shares-to-3-year-high?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Alibaba teams up with Apple to enhance AI features, boosting its market shares. [Comments](https://apple.slashdot.org/story/25/02/14/051243/alibaba-to-partner-with-apple-on-ai-features-sending-shares-to-3-year-high?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [The Impact of Generative AI on Critical Thinking](https://www.microsoft.com/en-us/research/uploads/prod/2025/01/lee_2025_ai_critical_thinking_survey.pdf) - Microsoft's survey highlights how generative AI tools influence decision-making and logic in education. [Comments](https://lobste.rs/s/p4bcxv/impact_generative_ai_on_critical)

* [Brain Implant That Could Boost Mood By Using Ultrasound To Go Under NHS Trial](https://science.slashdot.org/story/25/02/14/0045254/brain-implant-that-could-boost-mood-by-using-ultrasound-to-go-under-nhs-trial?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A potential breakthrough in mental health treatment leveraging AI and ultrasound. [Comments](https://science.slashdot.org/story/25/02/14/0045254/brain-implant-that-could-boost-mood-by-using-ultrasound-to-go-under-nhs-trial?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Earth and Environment

* [Earth's Inner Core is Less Solid Than Previously Thought: Study Reveals Structural Transformation](https://soylentnews.org/article.pl?sid=25/02/13/1825211&from=rss) - Researchers uncover surprising details about the Earth's inner core structure. [Comments](https://soylentnews.org/article.pl?sid=25/02/13/1825211&from=rss)

* [US Wildfire Suppressants Rife With Toxic Heavy Metals, Study Finds](https://news.slashdot.org/story/25/02/14/057227/us-wildfire-suppressants-rife-with-toxic-heavy-metals-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Concerns rise over the environmental and health impacts of toxic chemicals in wildfire suppression. [Comments](https://news.slashdot.org/story/25/02/14/057227/us-wildfire-suppressants-rife-with-toxic-heavy-metals-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Privacy and Cybersecurity

* [Hackers Leak Cop Manuals for Departments Nationwide After Breaching Major Provider](https://soylentnews.org/article.pl?sid=25/02/13/0155211&from=rss) - A massive data breach exposes police manuals, raising questions of cybersecurity in law enforcement. [Comments](https://soylentnews.org/article.pl?sid=25/02/13/0155211&from=rss)

* [Ricochet: Peer-to-peer instant messaging system built on Tor hidden services](https://github.com/ricochet-im/ricochet) - Explore a privacy-focused messaging platform leveraging Tor for enhanced anonymity. [Comments](https://news.ycombinator.com/item?id=43046192)

## Science and Exploration

* [Benchmarking Vision-Language Models on OCR in Dynamic Video Environments](https://arxiv.org/abs/2502.06445) - An in-depth evaluation of OCR models tackling complex conditions in videos. [Comments](https://news.ycombinator.com/item?id=43045801)

* [The Science of Why There's Less Passing in the Daytona 500](https://soylentnews.org/article.pl?sid=25/02/13/0145233&from=rss) - An exploration of the mechanics and dynamics affecting speedway races. [Comments](https://soylentnews.org/article.pl?sid=25/02/13/0145233&from=rss)

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

* [2025-02-14, 12:52:39](https://lobste.rs/s/g1lc5p/exposing_concurrency_bugs_with_custom) - [Exposing concurrency bugs with a custom scheduler [LWN.net]](https://lwn.net/Articles/1007689/)
* [2025-02-14, 12:41:46](https://lobste.rs/s/qk4qpt/hickory_dns_is_moving_toward_production) - [Hickory DNS is moving toward production readiness](https://www.memorysafety.org/blog/hickory-update-2025/)
* [2025-02-14, 12:38:32](https://lobste.rs/s/gm5vhq/ocaml_gadts_for_authentication_tokens) - [OCaml GADTs for Authentication Tokens](https://dev.to/maxim092001/ocaml-gadts-for-authentication-tokens-57be)
* [2025-02-14, 11:53:38](https://lobste.rs/s/ei9qpl/switching_on_strings_zig) - [Switching on Strings in Zig](https://www.openmymind.net/Switching-On-Strings-In-Zig/)
* [2025-02-14, 11:34:00](https://soylentnews.org/article.pl?sid=25/02/13/1825211&from=rss) - [Earth's Inner Core is Less Solid Than Previously Thought: Study Reveals Structural Transformation](https://soylentnews.org/article.pl?sid=25/02/13/1825211&from=rss)
* [2025-02-14, 11:18:26](https://lobste.rs/s/zbb947/zed_now_predicts_next_edit_with_new_open) - [Zed now predicts next edit with new open model](https://zed.dev/blog/edit-prediction)
* [2025-02-14, 10:56:07](https://lobste.rs/s/qr5vww/unix_operating_system_is_ide_2021) - [The UNIX Operating System is an IDE (2021)](https://0x19.org/posts/2021-12-04.php)
* [2025-02-14, 10:46:14](https://lobste.rs/s/9scmw4/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/9scmw4/what_are_you_doing_this_weekend)
* [2025-02-14, 10:00:00](https://apple.slashdot.org/story/25/02/14/051243/alibaba-to-partner-with-apple-on-ai-features-sending-shares-to-3-year-high?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Alibaba To Partner With Apple On AI Features, Sending Shares To 3-Year High](https://apple.slashdot.org/story/25/02/14/051243/alibaba-to-partner-with-apple-on-ai-features-sending-shares-to-3-year-high?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-14, 09:10:08](https://lobste.rs/s/mwhpgb/launching_interop_2025) - [Launching Interop 2025](https://hacks.mozilla.org/2025/02/interop-2025/)
* [2025-02-14, 08:55:41](https://lobste.rs/s/p4bcxv/impact_generative_ai_on_critical) - [The Impact of Generative AI on Critical Thinking](https://www.microsoft.com/en-us/research/uploads/prod/2025/01/lee_2025_ai_critical_thinking_survey.pdf)
* [2025-02-14, 08:34:31](https://news.ycombinator.com/item?id=43046192) - [Ricochet: Peer-to-peer instant messaging system built on Tor hidden services](https://github.com/ricochet-im/ricochet)
* [2025-02-14, 08:30:27](https://news.ycombinator.com/item?id=43046174) - [Linux kernel cgroups writeback high CPU troubleshooting](https://dasl.cc/2025/01/01/debugging-our-new-linux-kernel/)
* [2025-02-14, 08:29:23](https://news.ycombinator.com/item?id=43046170) - [Evaluating RAG for large scale codebases](https://www.qodo.ai/blog/evaluating-rag-for-large-scale-codebases/)
* [2025-02-14, 08:21:12](https://news.ycombinator.com/item?id=43046122) - [Rust: Doubling Throughput with Continuous Profiling and Optimization](https://www.polarsignals.com/blog/posts/2025/02/11/doubling-throughput-with-continuous-profiling-and-optimization)
* [2025-02-14, 07:26:16](https://news.ycombinator.com/item?id=43045801) - [Benchmarking Vision-Language Models on OCR in Dynamic Video Environments](https://arxiv.org/abs/2502.06445)
* [2025-02-14, 07:12:41](https://news.ycombinator.com/item?id=43045713) - [On Bloat](https://docs.google.com/presentation/d/e/2PACX-1vSmIbSwh1_DXKEMU5YKgYpt5_b4yfOfpfEOKS5_cvtLdiHsX6zt-gNeisamRuCtDtCb2SbTafTI8V47/pub?start=false&loop=false&delayms=3000)
* [2025-02-14, 07:08:53](https://news.ycombinator.com/item?id=43045698) - [Extensible WASM Applications with Go](https://go.dev/blog/wasmexport)
* [2025-02-14, 07:00:41](https://news.ycombinator.com/item?id=43045656) - [Yhangry (YC W22) Is Hiring](https://news.ycombinator.com/item?id=43045656)
* [2025-02-14, 07:00:00](https://news.slashdot.org/story/25/02/14/057227/us-wildfire-suppressants-rife-with-toxic-heavy-metals-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [US Wildfire Suppressants Rife With Toxic Heavy Metals, Study Finds](https://news.slashdot.org/story/25/02/14/057227/us-wildfire-suppressants-rife-with-toxic-heavy-metals-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-14, 06:50:47](https://news.ycombinator.com/item?id=43045606) - [Zed now predicts your next edit with Zeta, our new open model](https://zed.dev/blog/edit-prediction)
* [2025-02-14, 06:50:00](https://soylentnews.org/article.pl?sid=25/02/13/0155211&from=rss) - [Hackers Leak Cop Manuals for Departments Nationwide After Breaching Major Provider](https://soylentnews.org/article.pl?sid=25/02/13/0155211&from=rss)
* [2025-02-14, 06:40:11](https://news.ycombinator.com/item?id=43045558) - [The New York Stock Exchange to Launch NYSE Texas](https://ir.theice.com/press/news-details/2025/The-New-York-Stock-Exchange-to-Launch-NYSE-Texas/default.aspx)
* [2025-02-14, 06:14:19](https://news.ycombinator.com/item?id=43045406) - [Does X cause Y? An in-depth evidence review](https://www.cold-takes.com/does-x-cause-y-an-in-depth-evidence-review/)
* [2025-02-14, 05:27:19](https://news.ycombinator.com/item?id=43045151) - [Exposing concurrency bugs with a custom scheduler](https://lwn.net/Articles/1007689/)
* [2025-02-14, 04:57:57](https://lobste.rs/s/bwzc42/terminader_merging_finder_terminal) - [Terminader: merging the Finder and Terminal](https://github.com/shuang886/Terminader)
* [2025-02-14, 03:30:00](https://science.slashdot.org/story/25/02/14/0045254/brain-implant-that-could-boost-mood-by-using-ultrasound-to-go-under-nhs-trial?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Brain Implant That Could Boost Mood By Using Ultrasound To Go Under NHS Trial](https://science.slashdot.org/story/25/02/14/0045254/brain-implant-that-could-boost-mood-by-using-ultrasound-to-go-under-nhs-trial?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-14, 02:51:31](https://lobste.rs/s/rvhull/atkinson_hyperlegible_next_atkinson) - [Atkinson Hyperlegible Next and Atkinson Hyperlegible Mono](https://www.brailleinstitute.org/freefont/)
* [2025-02-14, 02:45:12](https://lobste.rs/s/jwbutw/on_bloat) - [On Bloat](https://commandcenter.blogspot.com/2025/02/on-bloat-these-are-slides-from-talk-i.html)
* [2025-02-14, 02:15:13](https://lobste.rs/s/rmb9s6/bauhaus_ninety_years_inspiration_2009) - [Bauhaus: Ninety Years of Inspiration (2009)](https://www.smashingmagazine.com/2009/08/bauhaus-ninety-years-of-inspiration/)
* [2025-02-14, 02:04:00](https://soylentnews.org/article.pl?sid=25/02/13/0145233&from=rss) - [The Science of Why There's Less Passing in the Daytona 500](https://soylentnews.org/article.pl?sid=25/02/13/0145233&from=rss)
* [2025-02-14, 01:40:00](https://slashdot.org/story/25/02/14/0033232/amazon-is-closing-a-kindle-loophole-that-makes-it-easy-to-remove-drm?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Amazon Is Closing a Kindle Loophole That Makes It Easy To Remove DRM](https://slashdot.org/story/25/02/14/0033232/amazon-is-closing-a-kindle-loophole-that-makes-it-easy-to-remove-drm?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-14, 01:34:05](https://news.ycombinator.com/item?id=43043671) - [OCR4all](https://www.ocr4all.org/)
* [2025-02-14, 01:00:00](https://hardware.slashdot.org/story/25/02/14/0026249/arm-is-launching-its-own-chip-this-year-with-meta-as-a-customer?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Arm Is Launching Its Own Chip This Year With Meta As a Customer](https://hardware.slashdot.org/story/25/02/14/0026249/arm-is-launching-its-own-chip-this-year-with-meta-as-a-customer?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-14, 00:40:00](https://apple.slashdot.org/story/25/02/14/0037255/apple-to-restore-tiktok-to-us-app-store-following-justice-department-letter?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple To Restore TikTok To US App Store Following Justice Department Letter](https://apple.slashdot.org/story/25/02/14/0037255/apple-to-restore-tiktok-to-us-app-store-following-justice-department-letter?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-14, 00:20:00](https://tech.slashdot.org/story/25/02/14/0019213/ai-licensing-deals-with-google-and-openai-make-up-10-of-reddits-revenue?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [AI Licensing Deals With Google and OpenAI Make Up 10% of Reddit's Revenue](https://tech.slashdot.org/story/25/02/14/0019213/ai-licensing-deals-with-google-and-openai-make-up-10-of-reddits-revenue?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-14, 00:04:48](https://news.ycombinator.com/item?id=43043063) - [What if Eye...?](https://eyes.mit.edu/)
* [2025-02-13, 23:40:00](https://yro.slashdot.org/story/25/02/13/2227239/news-orgs-say-ai-firm-stole-articles-spit-out-hallucinations?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [News Orgs Say AI Firm Stole Articles, Spit Out 'Hallucinations'](https://yro.slashdot.org/story/25/02/13/2227239/news-orgs-say-ai-firm-stole-articles-spit-out-hallucinations?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-13, 23:21:21](https://news.ycombinator.com/item?id=43042753) - [LM2: Large Memory Models](https://arxiv.org/abs/2502.06049)
* [2025-02-13, 23:00:00](https://yro.slashdot.org/story/25/02/13/2220251/us-releases-russian-cybercriminal-as-part-of-prisoner-swap?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [US Releases Russian Cybercriminal As Part of Prisoner Swap](https://yro.slashdot.org/story/25/02/13/2220251/us-releases-russian-cybercriminal-as-part-of-prisoner-swap?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-13, 22:52:02](https://lobste.rs/s/3p049a/tsforge) - [TSforge](https://massgrave.dev/blog/tsforge)
* [2025-02-13, 22:40:00](https://apple.slashdot.org/story/25/02/13/2214200/apple-teases-special-product-launch-coming-next-week?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Teases Special Product Launch Coming Next Week](https://apple.slashdot.org/story/25/02/13/2214200/apple-teases-special-product-launch-coming-next-week?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-13, 22:20:00](https://tech.slashdot.org/story/25/02/13/227253/nearly-a-year-later-mozilla-is-still-promoting-onerep?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Nearly a Year Later, Mozilla Is Still Promoting OneRep](https://tech.slashdot.org/story/25/02/13/227253/nearly-a-year-later-mozilla-is-still-promoting-onerep?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-13, 21:59:22](https://lobste.rs/s/z4q3un/prototyping_machine_deployment_tool) - [Prototyping a machine deployment tool with Spritely Goblins](https://www.terracrypt.net/posts/gobs-of-machines.html)
* [2025-02-13, 21:49:16](https://news.ycombinator.com/item?id=43041827) - [Show HN: SQL Noir – Learn SQL by solving crimes](https://www.sqlnoir.com)
* [2025-02-13, 21:40:00](https://slashdot.org/story/25/02/13/2118210/trust-in-ai-is-much-higher-in-china-than-in-the-us?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Trust in AI is Much Higher in China Than in the US](https://slashdot.org/story/25/02/13/2118210/trust-in-ai-is-much-higher-in-china-than-in-the-us?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-13, 21:15:00](https://soylentnews.org/article.pl?sid=25/02/13/0126236&from=rss) - [Money May Have Originated Through Long Distance Trade, New Theory Suggests](https://soylentnews.org/article.pl?sid=25/02/13/0126236&from=rss)
* [2025-02-13, 21:00:00](https://games.slashdot.org/story/25/02/13/2023245/nintendo-patent-push-against-hit-game-palworld-hits-roadblock-in-us?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Nintendo Patent Push Against Hit Game Palworld Hits Roadblock in US](https://games.slashdot.org/story/25/02/13/2023245/nintendo-patent-push-against-hit-game-palworld-hits-roadblock-in-us?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-13, 20:34:44](https://lobste.rs/s/ndcuhz/how_add_directory_your_path) - [How to add a directory to your PATH](https://jvns.ca/blog/2025/02/13/how-to-add-a-directory-to-your-path/)
* [2025-02-13, 20:23:35](https://lobste.rs/s/oafv9d/on_jujutsu_magit_experience_report) - [On Jujutsu and Magit: experience report](https://blog.alarsyo.net/posts/2025/02/on-jujutsu-and-magit/)
* [2025-02-13, 20:21:00](https://science.slashdot.org/story/25/02/13/203243/bezos-backed-blue-origin-to-cut-10-of-its-workforce?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Bezos-Backed Blue Origin To Cut 10% of Its Workforce](https://science.slashdot.org/story/25/02/13/203243/bezos-backed-blue-origin-to-cut-10-of-its-workforce?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-13, 19:57:29](https://news.ycombinator.com/item?id=43040521) - [Privacy Pass Authentication for Kagi Search](https://blog.kagi.com/kagi-privacy-pass)
* [2025-02-13, 19:44:34](https://news.ycombinator.com/item?id=43040382) - [MapTCHA, the open-source CAPTCHA that improves OpenStreetMap [video]](https://fosdem.org/2025/schedule/event/fosdem-2025-5879-maptcha-the-open-source-captcha-that-improves-openstreetmap/)
* [2025-02-13, 19:40:00](https://slashdot.org/story/25/02/13/197228/jpmorgan-ceo-dimon-slams-return-to-office-pushback?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [JPMorgan CEO Dimon Slams Return-To-Office Pushback](https://slashdot.org/story/25/02/13/197228/jpmorgan-ceo-dimon-slams-return-to-office-pushback?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-13, 19:30:54](https://lobste.rs/s/f9zeee/why_i_built_hyper_personalized_search) - [why I built a hyper-personalized search engine that isn't very good](https://search.technomancy.us/why)
* [2025-02-13, 18:20:29](https://news.ycombinator.com/item?id=43039308) - [Phind 2: AI search with visual answers and multi-step reasoning](https://www.phind.com/blog/phind-2)
* [2025-02-13, 17:30:42](https://lobste.rs/s/vvky3g/2024_state_rust_survey_results) - [2024 State of Rust Survey Results](https://blog.rust-lang.org/2025/02/13/2024-State-Of-Rust-Survey-results.html)
* [2025-02-13, 16:29:00](https://soylentnews.org/article.pl?sid=25/02/12/1247251&from=rss) - [Developer Creates Endless Wikipedia Feed to Fight Algorithm Addiction](https://soylentnews.org/article.pl?sid=25/02/12/1247251&from=rss)
* [2025-02-13, 16:02:20](https://lobste.rs/s/onehu6/compiling_array_languages_for_simd) - [Compiling Array Languages for SIMD](http://vmchale.com/static/serve/simd.pdf)
* [2025-02-13, 15:57:01](https://lobste.rs/s/zck7bo/resigning_as_asahi_linux_project_lead) - [Resigning as Asahi Linux project lead](https://marcan.st/2025/02/resigning-as-asahi-linux-project-lead/)
* [2025-02-13, 14:53:21](https://news.ycombinator.com/item?id=43036428) - [Fewer students are enrolling in doctoral degrees](https://www.nature.com/articles/d41586-025-00425-4)
* [2025-02-13, 12:55:45](https://lobste.rs/s/iwiwye/reassessing_wayland) - [Reassessing Wayland](https://dudemanguy.github.io/blog/posts/2025-02-03-wayland-xorg-2/wayland-xorg-2.html)
* [2025-02-13, 12:50:15](https://lobste.rs/s/fw48of/algebraic_effects_are_functional) - [Algebraic effects are a functional approach to manage side effects](http://crowdhailer.me/2025-02-06/programs-dont-kill-people-computers-do/)
* [2025-02-13, 12:36:49](https://lobste.rs/s/z1xro4/descent_into_v_x) - [A Descent Into the Vᴏ̈ʀᴛᴇx](https://tigerbeetle.com/blog/2025-02-13-a-descent-into-the-vortex/)
* [2025-02-13, 11:43:00](https://soylentnews.org/article.pl?sid=25/02/12/1237237&from=rss) - [Is the EF5 Tornado Rating Effectively Obsolete?](https://soylentnews.org/article.pl?sid=25/02/12/1237237&from=rss)
* [2025-02-13, 10:53:14](https://lobste.rs/s/bfvovo/devenv_1_4_generating_nix_developer) - [devenv 1.4: Generating Nix Developer Environments Using AI](https://devenv.sh/blog/2025/02/13/devenv-14-generating-nix-developer-environments-using-ai/)
* [2025-02-13, 06:57:00](https://soylentnews.org/article.pl?sid=25/02/12/1234248&from=rss) - [A Pinch of Salt Boosts Aluminum Batteries](https://soylentnews.org/article.pl?sid=25/02/12/1234248&from=rss)
* [2025-02-13, 02:12:00](https://soylentnews.org/article.pl?sid=25/02/12/095248&from=rss) - [AI Increases Unemployment Rates in US IT Sector](https://soylentnews.org/article.pl?sid=25/02/12/095248&from=rss)
* [2025-02-12, 21:28:00](https://soylentnews.org/article.pl?sid=25/02/11/1313219&from=rss) - [Want the News Summarized Accurately?  Don't Ask an \"AI\".](https://soylentnews.org/article.pl?sid=25/02/11/1313219&from=rss)
* [2025-02-12, 20:17:08](https://news.ycombinator.com/item?id=43029314) - [Basis of the Kalman Filter [pdf]](https://github.com/tpn/pdfs/blob/master/Understanding%20the%20Basis%20of%20the%20Kalman%20Filter%20Via%20a%20Simple%20and%20Intuitive%20Derivation%20%282012%29.pdf)
* [2025-02-12, 16:43:00](https://soylentnews.org/article.pl?sid=25/02/11/1216252&from=rss) - [MP Materials Starts Producing Neodymium Magnets in the US](https://soylentnews.org/article.pl?sid=25/02/11/1216252&from=rss)
* [2025-02-12, 11:59:00](https://soylentnews.org/article.pl?sid=25/02/11/1210226&from=rss) - [Undergraduate Upends a 40-Year-Old Data Science Conjecture](https://soylentnews.org/article.pl?sid=25/02/11/1210226&from=rss)
* [2025-02-12, 08:58:01](https://news.ycombinator.com/item?id=43023338) - [Everything about Google Translate crashing React (and other web apps)](https://martijnhols.nl/blog/everything-about-google-translate-crashing-react)
* [2025-02-12, 07:32:03](https://news.ycombinator.com/item?id=43022824) - [Alt.Anonymous.Messages Newsgroup](http://wudewasa.blogspot.com/2017/05/altanonymousmessages-newsgroup.html)
* [2025-02-12, 07:12:00](https://soylentnews.org/article.pl?sid=25/02/11/127212&from=rss) - [Handful of Users Claim New Nvidia GPUs Are Melting Power Cables Again](https://soylentnews.org/article.pl?sid=25/02/11/127212&from=rss)
* [2025-02-12, 01:29:00](https://soylentnews.org/article.pl?sid=25/02/11/122248&from=rss) - [Boeing Has Informed its Employees of Uncertainty in Future SLS Contracts](https://soylentnews.org/article.pl?sid=25/02/11/122248&from=rss)
* [2025-02-11, 19:45:00](https://soylentnews.org/article.pl?sid=25/02/10/133233&from=rss) - [Asteroid's Odds of Hitting Earth Went Up. But Not Why You Think](https://soylentnews.org/article.pl?sid=25/02/10/133233&from=rss)
* [2025-02-11, 15:45:00](https://soylentnews.org/meta/article.pl?sid=25/02/04/106248&from=rss) - [Soylent Update - February 2025](https://soylentnews.org/meta/article.pl?sid=25/02/04/106248&from=rss)
* [2025-02-11, 15:00:00](https://soylentnews.org/article.pl?sid=25/02/09/1917214&from=rss) - [Researchers Used AI To Build Groundbreaking Nanomaterials Lighter And Stronger Than Titanium](https://soylentnews.org/article.pl?sid=25/02/09/1917214&from=rss)
* [2025-02-11, 10:23:00](https://soylentnews.org/article.pl?sid=25/02/09/194224&from=rss) - [Private Spacecraft Gets Dramatic View Of Earth Eclipsing Moon](https://soylentnews.org/article.pl?sid=25/02/09/194224&from=rss)
* [2025-02-11, 05:45:00](https://soylentnews.org/article.pl?sid=25/02/09/190215&from=rss) - [Intel Has Already Received $2.2B in Federal Grants for Chip Production](https://soylentnews.org/article.pl?sid=25/02/09/190215&from=rss)
* [2025-02-11, 01:00:00](https://soylentnews.org/article.pl?sid=25/02/09/1853248&from=rss) - [Rare Otter 'Disappeared' In Kyrgyzstan, Experts Warn](https://soylentnews.org/article.pl?sid=25/02/09/1853248&from=rss)
* [2025-02-11, 00:47:17](https://news.ycombinator.com/item?id=43007453) - [Do Lake Names Reflect Their Properties?](https://ivanludvig.dev/tech/lake-colors)
* [2025-02-10, 23:21:49](https://news.ycombinator.com/item?id=43006584) - [Pied Beauty: Wari Tie-Dye Textiles (Ca. 425–1100)](https://publicdomainreview.org/collection/wari-tie-dye/)
* [2025-02-10, 20:19:00](https://soylentnews.org/article.pl?sid=25/02/09/1410202&from=rss) - [IBM Banks on Friendlier Us Regulatory Climate for Dealmaking](https://soylentnews.org/article.pl?sid=25/02/09/1410202&from=rss)
* [2025-02-10, 17:52:31](https://news.ycombinator.com/item?id=43003052) - [Show HN: I made a tiny book using a pen-plotter and AI](https://muffinman.io/blog/the-tiny-book-of-great-joys/)
* [2025-02-10, 15:34:00](https://soylentnews.org/article.pl?sid=25/02/09/145236&from=rss) - [Kaspersky Researchers Find Screenshot-Reading Malware on the App Store and Google Play](https://soylentnews.org/article.pl?sid=25/02/09/145236&from=rss)
* [2025-02-10, 14:35:55](https://news.ycombinator.com/item?id=43000764) - [Show HN: A unique generated maze to share with your valentine](https://love.berk.es/)
* [2025-02-10, 12:22:26](https://news.ycombinator.com/item?id=42999454) - [I built an AI company to save my open source project](https://timefold.ai/blog/how-i-built-an-ai-company-to-save-my-open-source-project)
* [2025-02-10, 10:52:00](https://soylentnews.org/article.pl?sid=25/02/09/1336213&from=rss) - [Your AI Can't See Gorillas](https://soylentnews.org/article.pl?sid=25/02/09/1336213&from=rss)
* [2025-02-10, 09:16:04](https://news.ycombinator.com/item?id=42998383) - [Nvidia Security Team: “What if we just stopped using C?” (2022)](https://blog.adacore.com/nvidia-security-team-what-if-we-just-stopped-using-c)
* [2025-02-10, 06:10:00](https://soylentnews.org/article.pl?sid=25/02/09/1321246&from=rss) - [WhatsApp Says Journalists and Civil Society Members Were Targets of Israeli Spyware](https://soylentnews.org/article.pl?sid=25/02/09/1321246&from=rss)
* [2025-02-10, 05:53:29](https://news.ycombinator.com/item?id=42997327) - [Jooki – Taking Control of a Forgotten Device](https://nv1t.github.io/blog/reviving-jooki/)
* [2025-02-10, 01:23:00](https://soylentnews.org/article.pl?sid=25/02/08/1514221&from=rss) - [Facebook Torrents 81TB of Data to Feed their Models](https://soylentnews.org/article.pl?sid=25/02/08/1514221&from=rss)
