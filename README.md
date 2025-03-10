# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software Updates

* [DOJ: Google must sell Chrome, Android could be next](https://arstechnica.com/google/2025/03/doj-google-must-sell-chrome-android-could-be-next/) ([comments](https://news.ycombinator.com/item?id=43323485))

* [uBlock Origin is no longer available on the Chrome Store](https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?hl=en) ([comments](https://news.ycombinator.com/item?id=43322922))

* [Microsoft Admits GitHub Hosted Malware That Infected Almost a Million Devices](https://it.slashdot.org/story/25/03/10/1652235/microsoft-admits-github-hosted-malware-that-infected-almost-a-million-devices?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43319611))

* [New Open Source Windows-Compatible Operating System Released](https://tech.slashdot.org/story/25/03/10/0142235/new-open-source-windows-compatible-operating-system-released?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43315406))

* [Bringing WebKit back to Android](https://blogs.igalia.com/jani/bringing-webkit-back-to-android/) ([comments](https://lobste.rs/s/lipjwc/bringing_webkit_back_android))

## Artificial Intelligence and Ethics

* [Sony Says It Has Already Taken Down More Than 75,000 AI Deepfake Songs](https://entertainment.slashdot.org/story/25/03/10/1743215/sony-says-it-has-already-taken-down-more-than-75000-ai-deepfake-songs?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43321523))

* [AI Isn't Creating New Knowledge, Hugging Face Co-Founder Says](https://slashdot.org/story/25/03/10/145255/ai-isnt-creating-new-knowledge-hugging-face-co-founder-says?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [How the AI Talent Race Is Reshaping the Tech Job Market](https://slashdot.org/story/25/03/10/1444216/how-the-ai-talent-race-is-reshaping-the-tech-job-market?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43315406))

* [Zuckerberg's Meta Considered Sharing User Data with China, Whistleblower Alleges](https://tech.slashdot.org/story/25/03/10/0532235/zuckerbergs-meta-considered-sharing-user-data-with-china-whistleblower-alleges?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Science and Health

* [Are Microplastics Bad For Your Health? More Rigorous Science is Needed](https://science.slashdot.org/story/25/03/10/1851249/are-microplastics-bad-for-your-health-more-rigorous-science-is-needed?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43323974))

* [Study finds bullies have more children than non-bullies](https://phys.org/news/2025-02-bullies-children.html) ([comments](https://news.ycombinator.com/item?id=43323738))

* [Bispecific antibodies potently neutralize SARS-CoV-2 variants of concern](https://www.science.org/doi/10.1126/scitranslmed.adq5720) ([comments](https://news.ycombinator.com/item?id=43315406))

* [Performance of the Python 3.14 tail-call interpreter](https://blog.nelhage.com/post/cpython-tail-call/) ([comments](https://lobste.rs/s/tnynqn/oral_history_bank_python_2021))

## Programming and Engineering

* [Mathematical Foundations of Reinforcement Learning](https://github.com/MathFoundationRL/Book-Mathematical-Foundation-of-Reinforcement-Learning) ([comments](https://news.ycombinator.com/item?id=43323946))

* [A Quick Journey Into the Linux Kernel](https://www.lucavall.in/blog/a-quick-journey-into-the-linux-kernel) ([comments](https://lobste.rs/s/esn5gf/quick_journey_into_linux_kernel))

* [Rust in 2025: Targeting foundational software](https://smallcultfollowing.com/babysteps/blog/2025/03/10/rust-2025-intro/) ([comments](https://lobste.rs/s/a46njy/rust_2025_targeting_foundational))

* [Css Relative Colors](https://ishadeed.com/article/css-relative-colors/) ([comments](https://lobste.rs/s/iaqfqn/css_relative_colors))

## Environmental and Climatic Issues

* [US Will Be 'Central' To Climate Fight, Says Cop30 President](https://news.slashdot.org/story/25/03/10/1759201/us-will-be-central-to-climate-fight-says-cop30-president?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=43315406))

* [Volkswagen Bringing Back Physical Buttons, Says Removing Them Was a Mistake](https://tech.slashdot.org/story/25/03/10/1520223/volkswagen-bringing-back-physical-buttons-says-removing-them-was-a-mistake?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Alphabet's Taara Chip Uses Light Beams To Provide High-Speed Internet](https://soylentnews.org/article.pl?sid=25/03/10/0331220&from=rss) ([comments](https://news.ycombinator.com/item?id=43315374))

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

* [2025-03-10, 18:51:00](https://science.slashdot.org/story/25/03/10/1851249/are-microplastics-bad-for-your-health-more-rigorous-science-is-needed?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Are Microplastics Bad For Your Health? More Rigorous Science is Needed](https://science.slashdot.org/story/25/03/10/1851249/are-microplastics-bad-for-your-health-more-rigorous-science-is-needed?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-10, 18:50:29](https://lobste.rs/s/fhbzdf/debts_tech_otherwise) - [Debts, Tech and Otherwise](https://blogs.newardassociates.com/blog/2025/debts-tech-and-otherwise.html)
* [2025-03-10, 18:29:00](https://news.ycombinator.com/item?id=43323974) - [What We've Learned from 150 Years of Stock Market Crashes](https://www.morningstar.com/economy/what-weve-learned-150-years-stock-market-crashes)
* [2025-03-10, 18:27:32](https://news.ycombinator.com/item?id=43323946) - [Mathematical Foundations of Reinforcement Learning](https://github.com/MathFoundationRL/Book-Mathematical-Foundation-of-Reinforcement-Learning)
* [2025-03-10, 18:15:34](https://news.ycombinator.com/item?id=43323738) - [Study finds bullies have more children than non-bullies](https://phys.org/news/2025-02-bullies-children.html)
* [2025-03-10, 18:10:00](https://news.slashdot.org/story/25/03/10/1759201/us-will-be-central-to-climate-fight-says-cop30-president?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [US Will Be 'Central' To Climate Fight, Says Cop30 President](https://news.slashdot.org/story/25/03/10/1759201/us-will-be-central-to-climate-fight-says-cop30-president?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-10, 18:02:49](https://news.ycombinator.com/item?id=43323485) - [DOJ: Google must sell Chrome, Android could be next](https://arstechnica.com/google/2025/03/doj-google-must-sell-chrome-android-could-be-next/)
* [2025-03-10, 17:59:02](https://lobste.rs/s/esn5gf/quick_journey_into_linux_kernel) - [A Quick Journey Into the Linux Kernel](https://www.lucavall.in/blog/a-quick-journey-into-the-linux-kernel)
* [2025-03-10, 17:51:10](https://lobste.rs/s/p4smxx/cp1_programming_language) - [The Cp1 Programming Language](https://cp1-lang.org/)
* [2025-03-10, 17:42:00](https://entertainment.slashdot.org/story/25/03/10/1743215/sony-says-it-has-already-taken-down-more-than-75000-ai-deepfake-songs?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Sony Says It Has Already Taken Down More Than 75,000 AI Deepfake Songs](https://entertainment.slashdot.org/story/25/03/10/1743215/sony-says-it-has-already-taken-down-more-than-75000-ai-deepfake-songs?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-10, 17:40:40](https://news.ycombinator.com/item?id=43323071) - [Software-Defined Radio for Engineers (2018) [pdf]](https://www.analog.com/media/en/training-seminars/design-handbooks/Software-Defined-Radio-for-Engineers-2018/SDR4Engineers.pdf)
* [2025-03-10, 17:30:34](https://news.ycombinator.com/item?id=43322922) - [uBlock Origin is no longer available on the Chrome Store](https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?hl=en)
* [2025-03-10, 17:28:25](https://lobste.rs/s/iaqfqn/css_relative_colors) - [CSS Relative Colors](https://ishadeed.com/article/css-relative-colors/)
* [2025-03-10, 17:24:24](https://lobste.rs/s/rftm88/scroll_buddy) - [Scroll buddy](https://scrollbuddy.com/)
* [2025-03-10, 16:56:08](https://news.ycombinator.com/item?id=43322496) - [Does Visual Studio rot the mind? (2005)](https://charlespetzold.com/etc/DoesVisualStudioRotTheMind.html)
* [2025-03-10, 16:54:45](https://lobste.rs/s/vd6all/why_go_s_error_handling_is_awesome) - [Why Go's Error Handling is Awesome](https://rauljordan.com/why-go-error-handling-is-awesome/)
* [2025-03-10, 16:52:00](https://it.slashdot.org/story/25/03/10/1652235/microsoft-admits-github-hosted-malware-that-infected-almost-a-million-devices?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Admits GitHub Hosted Malware That Infected Almost a Million Devices](https://it.slashdot.org/story/25/03/10/1652235/microsoft-admits-github-hosted-malware-that-infected-almost-a-million-devices?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-10, 16:28:44](https://news.ycombinator.com/item?id=43322245) - [Music labels will regret coming for the Internet Archive, sound historian says](https://arstechnica.com/tech-policy/2025/03/music-labels-will-regret-coming-for-the-internet-archive-sound-historian-says/)
* [2025-03-10, 16:02:00](https://it.slashdot.org/story/25/03/10/1532234/feds-link-150m-cyberheist-to-2022-lastpass-hacks?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Feds Link $150M Cyberheist To 2022 LastPass Hacks](https://it.slashdot.org/story/25/03/10/1532234/feds-link-150m-cyberheist-to-2022-lastpass-hacks?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-10, 15:31:57](https://news.ycombinator.com/item?id=43321688) - [Show HN: Editable Games](https://playscl.com/make)
* [2025-03-10, 15:23:00](https://tech.slashdot.org/story/25/03/10/1520223/volkswagen-bringing-back-physical-buttons-says-removing-them-was-a-mistake?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Volkswagen Bringing Back Physical Buttons, Says Removing Them Was a Mistake](https://tech.slashdot.org/story/25/03/10/1520223/volkswagen-bringing-back-physical-buttons-says-removing-them-was-a-mistake?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-10, 15:12:57](https://news.ycombinator.com/item?id=43321523) - [Show HN: In-Browser Graph RAG with Kuzu-WASM and WebLLM](https://blog.kuzudb.com/post/kuzu-wasm-rag/)
* [2025-03-10, 14:53:28](https://lobste.rs/s/a46njy/rust_2025_targeting_foundational) - [Rust in 2025: Targeting foundational software](https://smallcultfollowing.com/babysteps/blog/2025/03/10/rust-2025-intro/)
* [2025-03-10, 14:46:00](https://soylentnews.org/article.pl?sid=25/03/10/077239&from=rss) - [How Tiny Can You Scale It Until Things Won't Work?](https://soylentnews.org/article.pl?sid=25/03/10/077239&from=rss)
* [2025-03-10, 14:44:00](https://slashdot.org/story/25/03/10/1444216/how-the-ai-talent-race-is-reshaping-the-tech-job-market?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [How the AI Talent Race Is Reshaping the Tech Job Market](https://slashdot.org/story/25/03/10/1444216/how-the-ai-talent-race-is-reshaping-the-tech-job-market?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-10, 14:36:48](https://news.ycombinator.com/item?id=43321145) - [YouTube DRM added on ALL videos with TV (TVHTML5) clients](https://github.com/yt-dlp/yt-dlp/issues/12563)
* [2025-03-10, 14:35:05](https://news.ycombinator.com/item?id=43321131) - [A technical history of Acorn Computers](https://www.mcmordie.co.uk/acornhistory/index.shtml)
* [2025-03-10, 14:14:34](https://lobste.rs/s/u6kptl/mls_is_coming_wire_app) - [MLS is Coming to Wire App](https://wire.com/en/blog/mls-is-coming-to-wire-app-learn-more)
* [2025-03-10, 14:05:00](https://slashdot.org/story/25/03/10/145255/ai-isnt-creating-new-knowledge-hugging-face-co-founder-says?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [AI Isn't Creating New Knowledge, Hugging Face Co-Founder Says](https://slashdot.org/story/25/03/10/145255/ai-isnt-creating-new-knowledge-hugging-face-co-founder-says?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-10, 13:21:41](https://lobste.rs/s/ar6guo/building_cross_platform_sdks_from_ffi) - [Building Cross-Platform SDKs: From FFI to WebAssembly | Flipt Blog](https://blog.flipt.io/from-ffi-to-wasm)
* [2025-03-10, 13:19:16](https://lobste.rs/s/wooaru/grove_bidirectionally_typed) - [Grove: A Bidirectionally Typed Collaborative Structure Editor Calculus](https://dl.acm.org/doi/pdf/10.1145/3704909)
* [2025-03-10, 13:12:38](https://news.ycombinator.com/item?id=43320230) - [Canon EF and RF Lenses – All Autofocus Motors](https://exclusivearchitecture.com/03-technical-articles-CLT-12-autofocus-systems.html)
* [2025-03-10, 12:48:32](https://news.ycombinator.com/item?id=43320024) - [Zero-Downtime Kubernetes Deployments on AWS with EKS](https://glasskube.dev/blog/kubernetes-zero-downtime-deployments-aws-eks/)
* [2025-03-10, 12:22:55](https://lobste.rs/s/brbp3g/from_spring_boot_ruby_on_rails) - [From Spring Boot to Ruby on Rails](https://smustafa.blog/2025/03/10/from-spring-boot-to-ruby-on-rails/)
* [2025-03-10, 12:00:58](https://news.ycombinator.com/item?id=43319611) - [FurtherAI (YC W24) Is Hiring](https://www.ycombinator.com/companies/furtherai/jobs)
* [2025-03-10, 11:34:00](https://yro.slashdot.org/story/25/03/10/0321237/thousands-of-freed-scam-center-workers-now-trapped-in-overcrowded-detention-centers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Thousands of Freed Scam Center Workers Now Trapped in Overcrowded Detention Centers](https://yro.slashdot.org/story/25/03/10/0321237/thousands-of-freed-scam-center-workers-now-trapped-in-overcrowded-detention-centers?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-10, 10:47:21](https://lobste.rs/s/nhaenp/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/nhaenp/what_are_you_doing_this_week)
* [2025-03-10, 10:07:33](https://lobste.rs/s/okqjn5/20_years_linux_on_desktop_part_3) - [20 years of Linux on the Desktop (part 3)](https://ploum.net/2025-03-08-linux_desktop3.html)
* [2025-03-10, 09:50:33](https://news.ycombinator.com/item?id=43318624) - [Probabilistic Artificial Intelligence](https://arxiv.org/abs/2502.05244)
* [2025-03-10, 09:27:00](https://soylentnews.org/article.pl?sid=25/03/09/0337252&from=rss) - [CISA Tags Windows, Cisco Vulnerabilities as Actively Exploited](https://soylentnews.org/article.pl?sid=25/03/09/0337252&from=rss)
* [2025-03-10, 08:50:56](https://lobste.rs/s/mxy0si/chromecast_2_s_device_authentication) - [The Chromecast 2's device authentication certificate has expired](https://old.reddit.com/r/Chromecast/comments/1j7lhrs/the_chromecast_2s_device_authentication/)
* [2025-03-10, 08:25:17](https://lobste.rs/s/cjffvm/what_it_takes_add_new_backend_futhark) - [What it takes to add a new backend to Futhark](https://futhark-lang.org/blog/2025-03-04-adding-a-new-backend.html)
* [2025-03-10, 07:54:00](https://tech.slashdot.org/story/25/03/10/0532235/zuckerbergs-meta-considered-sharing-user-data-with-china-whistleblower-alleges?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Zuckerberg's Meta Considered Sharing User Data with China, Whistleblower Alleges](https://tech.slashdot.org/story/25/03/10/0532235/zuckerbergs-meta-considered-sharing-user-data-with-china-whistleblower-alleges?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-10, 07:42:11](https://news.ycombinator.com/item?id=43317887) - [Trees not profits: we're giving up our right to ever sell Ecosia (2018)](https://blog.ecosia.org/trees-not-profits/)
* [2025-03-10, 06:44:27](https://news.ycombinator.com/item?id=43317592) - [Performance of the Python 3.14 tail-call interpreter](https://blog.nelhage.com/post/cpython-tail-call/)
* [2025-03-10, 05:15:46](https://lobste.rs/s/tnynqn/oral_history_bank_python_2021) - [An oral history of Bank Python (2021)](https://calpaterson.com/bank-python.html)
* [2025-03-10, 04:56:03](https://lobste.rs/s/lipjwc/bringing_webkit_back_android) - [Bringing WebKit back to Android](https://blogs.igalia.com/jani/bringing-webkit-back-to-android/)
* [2025-03-10, 04:40:00](https://soylentnews.org/article.pl?sid=25/03/09/0321220&from=rss) - ['Jetsons' Robot Finally Arrives: Sweater-Wearing Neo Gamma Android Helps With Household Chores](https://soylentnews.org/article.pl?sid=25/03/09/0321220&from=rss)
* [2025-03-10, 04:34:00](https://entertainment.slashdot.org/story/25/03/09/214237/oscar-winning-movie-criticized-for-using-ai-to-correct-dialects?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Oscar-Winning Movie Criticized for Using AI To Correct Dialects](https://entertainment.slashdot.org/story/25/03/09/214237/oscar-winning-movie-criticized-for-using-ai-to-correct-dialects?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-10, 02:45:00](https://tech.slashdot.org/story/25/03/10/0142235/new-open-source-windows-compatible-operating-system-released?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [New Open Source Windows-Compatible Operating System Released](https://tech.slashdot.org/story/25/03/10/0142235/new-open-source-windows-compatible-operating-system-released?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-10, 02:13:38](https://lobste.rs/s/u0ctt0/developing_pkgsrc_with_git) - [Developing pkgsrc with git](https://bentsukun.ch/posts/pkgsrc-with-git/)
* [2025-03-10, 00:59:00](https://hardware.slashdot.org/story/25/03/10/0054257/adafruit-successfully-automates-arduino-development-using-claude-code-llm?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Adafruit Successfully Automates Arduino Development Using 'Claude Code' LLM](https://hardware.slashdot.org/story/25/03/10/0054257/adafruit-successfully-automates-arduino-development-using-claude-code-llm?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-10, 00:46:00](https://news.ycombinator.com/item?id=43315634) - [Bispecific antibodies potently neutralize SARS-CoV-2 variants of concern](https://www.science.org/doi/10.1126/scitranslmed.adq5720)
* [2025-03-10, 00:16:54](https://news.ycombinator.com/item?id=43315406) - [Chasing RFI Waves – Part Seven](https://raoulpop.com/2012/04/15/chasing-rfi-waves-part-seven/)
* [2025-03-10, 00:01:00](https://soylentnews.org/article.pl?sid=25/03/09/0316250&from=rss) - [Billions of Years Ago, Mars Featured Beaches Fit for a Vacation, Astronomers Say](https://soylentnews.org/article.pl?sid=25/03/09/0316250&from=rss)
* [2025-03-09, 23:19:00](https://science.slashdot.org/story/25/03/09/2316231/that-galaxy-next-door-its-home-to-a-monster-black-hole?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [That Galaxy Next Door?  It's Home to a Monster Black Hole](https://science.slashdot.org/story/25/03/09/2316231/that-galaxy-next-door-its-home-to-a-monster-black-hole?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-09, 22:49:59](https://lobste.rs/s/9paxz2/performance_python_3_14_tail_call) - [Performance of the Python 3.14 tail-call interpreter](https://blog.nelhage.com/post/cpython-tail-call/)
* [2025-03-09, 22:38:57](https://news.ycombinator.com/item?id=43314657) - [Apple Exclaves](https://randomaugustine.medium.com/on-apple-exclaves-d683a2c37194)
* [2025-03-09, 22:18:08](https://lobste.rs/s/8fx2je/idiomatic_go) - [Idiomatic Go](https://dmitri.shuralyov.com/idiomatic-go)
* [2025-03-09, 21:48:00](https://tech.slashdot.org/story/25/03/09/2144209/can-ants-teach-us-how-to-program-self-driving-cars?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Can Ants Teach Us How to Program Self-Driving Cars?](https://tech.slashdot.org/story/25/03/09/2144209/can-ants-teach-us-how-to-program-self-driving-cars?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-09, 19:18:00](https://soylentnews.org/article.pl?sid=25/03/08/082224&from=rss) - [‘Slime’ Keeps the Brain Safe ― and Could Guard Against Ageing](https://soylentnews.org/article.pl?sid=25/03/08/082224&from=rss)
* [2025-03-09, 17:56:35](https://lobste.rs/s/fbndgj/functional_vs_data_driven_development) - [Functional vs Data-Driven development: a Case-Study in Clojure & OCaml](https://kirancodes.me/posts/log-data-oriented-programming.html)
* [2025-03-09, 17:40:38](https://news.ycombinator.com/item?id=43311573) - [Ecosia is teaming up with Qwant to build a European search index](https://blog.ecosia.org/eusp/)
* [2025-03-09, 16:23:27](https://lobste.rs/s/caldlu/ai_uncertain_future_work) - [AI and the Uncertain Future of Work](https://matthewbilyeu.com/blog/2025-03-08/ai)
* [2025-03-09, 15:48:52](https://lobste.rs/s/2cacfc/open_source_hosting_service_for_pijul) - [Open source hosting service for Pijul](https://nest.pijul.com/pmeunier/nest)
* [2025-03-09, 14:37:00](https://soylentnews.org/article.pl?sid=25/03/08/0753249&from=rss) - [Meet Rayhunter: A New Open Source Tool from EFF to Detect Cellular Spying](https://soylentnews.org/article.pl?sid=25/03/08/0753249&from=rss)
* [2025-03-09, 13:40:35](https://news.ycombinator.com/item?id=43308994) - [It is as if you were on your phone](https://pippinbarr.com/it-is-as-if-you-were-on-your-phone/info/)
* [2025-03-09, 11:05:33](https://lobste.rs/s/lvsiz8/gleam_v1_9_0_released) - [Gleam v1.9.0 released](https://gleam.run/news/hello-echo-hello-git/)
* [2025-03-09, 10:29:27](https://news.ycombinator.com/item?id=43307833) - [Sigint in Fiction](https://siginthistorian.blogspot.com/2025/02/sigint-in-fiction.html)
* [2025-03-09, 09:53:00](https://soylentnews.org/article.pl?sid=25/03/08/0744250&from=rss) - [Asteroid Mining Startup Loses its Spacecraft Somewhere Beyond the Moon](https://soylentnews.org/article.pl?sid=25/03/08/0744250&from=rss)
* [2025-03-09, 06:29:34](https://lobste.rs/s/dslris/what_s_cooking_on_sourcehut_q1_2025) - [What's cooking on SourceHut? Q1 2025](https://sourcehut.org/blog/2025-03-07-whats-cooking-q1-25/)
* [2025-03-09, 05:07:00](https://soylentnews.org/article.pl?sid=25/03/08/0739224&from=rss) - [Amid a Growing Measles Outbreak, Doctors Worry RFK is Sending the Wrong Message](https://soylentnews.org/article.pl?sid=25/03/08/0739224&from=rss)
* [2025-03-09, 05:04:05](https://news.ycombinator.com/item?id=43306435) - [A Post Mortem on the Gino Case](https://statmodeling.stat.columbia.edu/2025/03/08/a-post-mortem-on-the-gino-case-committing-fraud-is-right-now-a-viable-career-strategy-that-can-propel-you-at-the-top-of-the-academic-world/)
* [2025-03-09, 00:23:00](https://soylentnews.org/politics/article.pl?sid=25/03/08/0721219&from=rss) - [Some DOGE Staffers Are Drawing Six-Figure Government Salaries](https://soylentnews.org/politics/article.pl?sid=25/03/08/0721219&from=rss)
* [2025-03-08, 19:41:00](https://soylentnews.org/article.pl?sid=25/03/08/0713256&from=rss) - [Alphabet's Taara Chip Uses Light Beams To Provide High-Speed Internet](https://soylentnews.org/article.pl?sid=25/03/08/0713256&from=rss)
* [2025-03-08, 15:37:00](https://soylentnews.org/article.pl?sid=25/03/08/1538213&from=rss) - [Temporary Problem with Stripe](https://soylentnews.org/article.pl?sid=25/03/08/1538213&from=rss)
* [2025-03-08, 14:52:00](https://soylentnews.org/article.pl?sid=25/03/08/072239&from=rss) - [Hugging Face's Chief Science Officer Worries AI is Becoming 'Yes-Men on Servers'](https://soylentnews.org/article.pl?sid=25/03/08/072239&from=rss)
* [2025-03-08, 14:14:22](https://news.ycombinator.com/item?id=43300414) - [The Einstein AI Model](https://thomwolf.io/blog/scientific-ai.html)
* [2025-03-08, 10:07:00](https://soylentnews.org/article.pl?sid=25/03/07/0436239&from=rss) - [Eerily Realistic AI Voice Demo Sparks Amazement and Discomfort Online](https://soylentnews.org/article.pl?sid=25/03/07/0436239&from=rss)
* [2025-03-08, 05:22:00](https://soylentnews.org/article.pl?sid=25/03/07/0427238&from=rss) - [Apple Refuses to Break Encryption, Seeks Reversal of UK Demand for Backdoor](https://soylentnews.org/article.pl?sid=25/03/07/0427238&from=rss)
* [2025-03-08, 00:37:00](https://soylentnews.org/article.pl?sid=25/03/07/0422219&from=rss) - [The International Space Station Lacks Microbial Diversity. Is It Too Clean?](https://soylentnews.org/article.pl?sid=25/03/07/0422219&from=rss)
* [2025-03-07, 19:55:00](https://soylentnews.org/article.pl?sid=25/03/07/047205&from=rss) - [Massive Supereruptions Might Not Trigger the Apocalypse, Just Decades of Chaos](https://soylentnews.org/article.pl?sid=25/03/07/047205&from=rss)
* [2025-03-07, 15:10:00](https://soylentnews.org/article.pl?sid=25/03/07/041244&from=rss) - [Your Kitchen Utensils May be Poisoning You](https://soylentnews.org/article.pl?sid=25/03/07/041244&from=rss)
* [2025-03-07, 14:36:50](https://news.ycombinator.com/item?id=43290498) - [How to Build a Thousand-Year-Old Tree](https://www.noemamag.com/how-to-build-a-thousand-year-old-tree/)
* [2025-03-07, 13:31:46](https://news.ycombinator.com/item?id=43289994) - [Planes are having their GPS hacked. Could new clocks keep them safe?](https://www.bbc.com/news/articles/cq6yg204pvmo)
* [2025-03-07, 10:26:00](https://soylentnews.org/article.pl?sid=25/03/05/1610259&from=rss) - [How We Added Interlaced Video to Raspberry Pi 5](https://soylentnews.org/article.pl?sid=25/03/05/1610259&from=rss)
* [2025-03-07, 05:42:00](https://soylentnews.org/article.pl?sid=25/03/05/162236&from=rss) - [BP Shuns Renewables in Return to Oil and Gas](https://soylentnews.org/article.pl?sid=25/03/05/162236&from=rss)
* [2025-03-07, 04:07:18](https://news.ycombinator.com/item?id=43287327) - [3dfx: So powerful, it's kind of ridiculous (2023)](https://www.abortretry.fail/p/so-powerful-its-kind-of-ridiculous)
* [2025-03-07, 00:53:00](https://soylentnews.org/politics/article.pl?sid=25/03/05/1555220&from=rss) - [15 Republican AGs Urge The Supreme Court To Make Affordable Broadband For Poor People Illegal](https://soylentnews.org/politics/article.pl?sid=25/03/05/1555220&from=rss)
* [2025-03-06, 20:10:00](https://soylentnews.org/article.pl?sid=25/03/05/1550252&from=rss) - [World's First \"Synthetic Biological Intelligence\" Runs on Living Human Cells](https://soylentnews.org/article.pl?sid=25/03/05/1550252&from=rss)
* [2025-03-06, 15:25:00](https://soylentnews.org/article.pl?sid=25/03/05/1546231&from=rss) - [Google Cofounder Exhorts Employees to Work 60-Hour Weeks to Create AI Designed to Replace Them](https://soylentnews.org/article.pl?sid=25/03/05/1546231&from=rss)
* [2025-03-06, 14:23:24](https://news.ycombinator.com/item?id=43280517) - [Exploring Polymorphism in C: Lessons from Linux and FFmpeg's Code Design (2019)](https://leandromoreira.com/2019/08/02/linux-ffmpeg-source-internals-a-good-software-design/)
* [2025-03-06, 10:42:00](https://soylentnews.org/article.pl?sid=25/03/05/0314241&from=rss) - [First Petawatt Electron Beam Arrives, Ready to Rip Apart Matter and Space](https://soylentnews.org/article.pl?sid=25/03/05/0314241&from=rss)
* [2025-03-06, 05:59:00](https://soylentnews.org/article.pl?sid=25/03/05/031211&from=rss) - ['Fire the Intel Board and Rehire Pat Gelsinger,' Argues Former Intel Ceo Craig Barrett](https://soylentnews.org/article.pl?sid=25/03/05/031211&from=rss)
* [2025-03-06, 01:13:00](https://soylentnews.org/article.pl?sid=25/03/05/0257200&from=rss) - [Some of Earth's Meteors Are Probably Coming All the Way From a Neighboring Star System](https://soylentnews.org/article.pl?sid=25/03/05/0257200&from=rss)
