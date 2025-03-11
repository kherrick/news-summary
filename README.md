# [News Summary](https://kherrick.github.io/news-summary/)

## Corporate and Leadership Transition

* [Asana CEO Announces Retirement, Stock Plummets 25%](https://tech.slashdot.org/story/25/03/10/2321254/asana-ceo-announces-retirement-stock-plummets-25?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Asana's CEO announced his retirement, causing shares to drop by 25%.

* [Bluesky CEO Jay Graber Pokes Fun At Mark Zuckerberg With Latin Phrase T-Shirt](https://entertainment.slashdot.org/story/25/03/10/2111223/bluesky-ceo-jay-graber-pokes-fun-at-mark-zuckerberg-with-latin-phrase-t-shirt?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The Bluesky CEO made headlines wearing a playful Latin phrase t-shirt targeting Mark Zuckerberg.

## Environmental and Policy Changes

* [US Supreme Court Weakens Rules on Discharge of Raw Sewage Into Water Supplies](https://soylentnews.org/article.pl?sid=25/03/10/0732259&from=rss) - A controversial Supreme Court decision has eased restrictions on raw sewage discharge into water systems.

* [Internet Shutdowns At Record High In Africa As Access 'Weaponized'](https://tech.slashdot.org/story/25/03/10/212233/internet-shutdowns-at-record-high-in-africa-as-access-weaponized?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Internet access in Africa is being increasingly weaponized, with shutdowns hitting record highs.

## Technology Failures and Advancements

* [Firmware Update Bricks HP Printers, Makes Them Unable To Use HP Cartridges](https://hardware.slashdot.org/story/25/03/10/1923229/firmware-update-bricks-hp-printers-makes-them-unable-to-use-hp-cartridges?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A faulty firmware update has rendered HP printers incapable of recognizing official cartridges.

* [Apple Pulls iPhone 16 Ad Showing Off 'More Personal Siri'](https://apple.slashdot.org/story/25/03/10/1936216/apple-pulls-iphone-16-ad-showing-off-more-personal-siri?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Apple pulled a new iPhone 16 ad featuring a ‘more personal Siri’ update.

## Gaming and Entertainment Innovations

* [Sony Experiments With AI-Powered PlayStation Characters](https://games.slashdot.org/story/25/03/10/1944214/sony-experiments-with-ai-powered-playstation-characters?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Sony is exploring the integration of AI-powered characters in PlayStation games.

* [Microsoft To Launch Xbox Handheld in 2025, Next-Gen Consoles in 2027](https://games.slashdot.org/story/25/03/10/197231/microsoft-to-launch-xbox-handheld-in-2025-next-gen-consoles-in-2027?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Microsoft revealed plans for an Xbox handheld device launch in 2025.

## Scientific and Futuristic Concepts

* [Bending Spacetime in the Basement](https://www.fourmilab.ch/gravitation/foobar/) - Researchers explore unique methods for bending spacetime from less conventional environments.

* [Billions of Years Ago, Mars Featured Beaches Fit for a Vacation, Astronomers Say](https://soylentnews.org/article.pl?sid=25/03/09/0316250&from=rss) - Evidence suggests Mars once had idyllic beach-worthy landscapes billions of years ago.

## Humanities and Society

* [What made the Irish famine so deadly](https://www.newyorker.com/magazine/2025/03/17/rot-padraic-x-scanlan-book-review) - An in-depth exploration of the factors behind the high mortality of the Irish famine.

* [The shrouded sinister history of the bulldozer](https://www.noemamag.com/the-shrouded-sinister-history-of-the-bulldozer/) - Delving into the controversial past of the bulldozer and its societal impacts.

## Noteworthy Development and Programming Releases

* [Introducing Sidekiq 8.0](https://www.mikeperham.com/2025/03/05/introducing-sidekiq-8.0/) - A fresh release of Sidekiq 8.0 brings major updates for developers.

* [The Cp1 Programming Language](https://cp1-lang.org/) - A deep dive into the new Cp1 programming language for modern developers.

## Consumer Affairs

* [Volkswagen Bringing Back Physical Buttons, Says Removing Them Was a Mistake](https://tech.slashdot.org/story/25/03/10/1520223/volkswagen-bringing-back-physical-buttons-says-removing-them-was-a-mistake?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Charting a return to basics, Volkswagen admits its removal of physical buttons was a misstep.

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

* [2025-03-11, 00:50:00](https://tech.slashdot.org/story/25/03/10/2321254/asana-ceo-announces-retirement-stock-plummets-25?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Asana CEO Announces Retirement, Stock Plummets 25%](https://tech.slashdot.org/story/25/03/10/2321254/asana-ceo-announces-retirement-stock-plummets-25?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-11, 00:20:00](https://soylentnews.org/article.pl?sid=25/03/10/0732259&from=rss) - [US Supreme Court Weakens Rules on Discharge of Raw Sewage Into Water Supplies](https://soylentnews.org/article.pl?sid=25/03/10/0732259&from=rss)
* [2025-03-11, 00:11:33](https://news.ycombinator.com/item?id=43327730) - [Bending Spacetime in the Basement](https://www.fourmilab.ch/gravitation/foobar/)
* [2025-03-11, 00:10:00](https://entertainment.slashdot.org/story/25/03/10/2111223/bluesky-ceo-jay-graber-pokes-fun-at-mark-zuckerberg-with-latin-phrase-t-shirt?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Bluesky CEO Jay Graber Pokes Fun At Mark Zuckerberg With Latin Phrase T-Shirt](https://entertainment.slashdot.org/story/25/03/10/2111223/bluesky-ceo-jay-graber-pokes-fun-at-mark-zuckerberg-with-latin-phrase-t-shirt?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-10, 23:30:00](https://tech.slashdot.org/story/25/03/10/212233/internet-shutdowns-at-record-high-in-africa-as-access-weaponized?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Internet Shutdowns At Record High In Africa As Access 'Weaponized'](https://tech.slashdot.org/story/25/03/10/212233/internet-shutdowns-at-record-high-in-africa-as-access-weaponized?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-10, 22:50:00](https://tech.slashdot.org/story/25/03/10/2055237/wine-releases-framework-mono-614?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Wine Releases Framework Mono 6.14](https://tech.slashdot.org/story/25/03/10/2055237/wine-releases-framework-mono-614?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-10, 22:45:31](https://news.ycombinator.com/item?id=43326982) - [The shrouded sinister history of the bulldozer](https://www.noemamag.com/the-shrouded-sinister-history-of-the-bulldozer/)
* [2025-03-10, 22:21:17](https://lobste.rs/s/tcxwgv/stewardship_over_ownership) - [Stewardship over ownership](https://ntietz.com/blog/stewardship-over-ownership/)
* [2025-03-10, 22:10:00](https://games.slashdot.org/story/25/03/10/1944214/sony-experiments-with-ai-powered-playstation-characters?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Sony Experiments With AI-Powered PlayStation Characters](https://games.slashdot.org/story/25/03/10/1944214/sony-experiments-with-ai-powered-playstation-characters?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-10, 21:30:00](https://apple.slashdot.org/story/25/03/10/1936216/apple-pulls-iphone-16-ad-showing-off-more-personal-siri?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Pulls iPhone 16 Ad Showing Off 'More Personal Siri'](https://apple.slashdot.org/story/25/03/10/1936216/apple-pulls-iphone-16-ad-showing-off-more-personal-siri?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-10, 21:24:06](https://news.ycombinator.com/item?id=43326275) - [What made the Irish famine so deadly](https://www.newyorker.com/magazine/2025/03/17/rot-padraic-x-scanlan-book-review)
* [2025-03-10, 20:50:00](https://hardware.slashdot.org/story/25/03/10/1923229/firmware-update-bricks-hp-printers-makes-them-unable-to-use-hp-cartridges?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Firmware Update Bricks HP Printers, Makes Them Unable To Use HP Cartridges](https://hardware.slashdot.org/story/25/03/10/1923229/firmware-update-bricks-hp-printers-makes-them-unable-to-use-hp-cartridges?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-10, 20:13:44](https://lobste.rs/s/qhetdw/android_s_linux_terminal_app_is_now_widely) - [Android's Linux Terminal app is now widely available on Pixels](https://www.androidauthority.com/android-linux-terminal-app-available-3532999/)
* [2025-03-10, 20:10:00](https://games.slashdot.org/story/25/03/10/197231/microsoft-to-launch-xbox-handheld-in-2025-next-gen-consoles-in-2027?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft To Launch Xbox Handheld in 2025, Next-Gen Consoles in 2027](https://games.slashdot.org/story/25/03/10/197231/microsoft-to-launch-xbox-handheld-in-2025-next-gen-consoles-in-2027?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-10, 20:01:55](https://lobste.rs/s/ekuzbe/introducing_sidekiq_8_0) - [Introducing Sidekiq 8.0](https://www.mikeperham.com/2025/03/05/introducing-sidekiq-8.0/)
* [2025-03-10, 19:47:30](https://lobste.rs/s/tyws8h/mathml_core) - [MathML Core](https://developer.mozilla.org/en-US/docs/Web/MathML)
* [2025-03-10, 19:35:00](https://soylentnews.org/article.pl?sid=25/03/10/0720214&from=rss) - [Undocumented Commands Found in Bluetooth Chip Used by a Billion Devices](https://soylentnews.org/article.pl?sid=25/03/10/0720214&from=rss)
* [2025-03-10, 19:30:00](https://developers.slashdot.org/story/25/03/10/1921202/developer-convicted-for-kill-switch-code-activated-upon-his-termination?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Developer Convicted For 'Kill Switch' Code Activated Upon His Termination](https://developers.slashdot.org/story/25/03/10/1921202/developer-convicted-for-kill-switch-code-activated-upon-his-termination?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-10, 18:51:00](https://science.slashdot.org/story/25/03/10/1851249/are-microplastics-bad-for-your-health-more-rigorous-science-is-needed?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Are Microplastics Bad For Your Health? More Rigorous Science is Needed](https://science.slashdot.org/story/25/03/10/1851249/are-microplastics-bad-for-your-health-more-rigorous-science-is-needed?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-10, 18:27:32](https://news.ycombinator.com/item?id=43323946) - [Mathematical Foundations of Reinforcement Learning](https://github.com/MathFoundationRL/Book-Mathematical-Foundation-of-Reinforcement-Learning)
* [2025-03-10, 18:26:27](https://news.ycombinator.com/item?id=43323923) - [Firmware update bricks HP printers, makes them unable to use HP cartridges](https://arstechnica.com/gadgets/2025/03/firmware-update-bricks-hp-printers-makes-them-unable-to-use-hp-cartridges/)
* [2025-03-10, 18:22:57](https://news.ycombinator.com/item?id=43323860) - [STEPS Toward the Reinvention of Programming (2012) [pdf]](https://tinlizzie.org/VPRIPapers/tr2012001_steps.pdf)
* [2025-03-10, 18:16:26](https://news.ycombinator.com/item?id=43323755) - [People are just as bad as my LLMs](https://wilsoniumite.com/2025/03/10/people-are-just-as-bad-as-my-llms/)
* [2025-03-10, 18:10:00](https://news.slashdot.org/story/25/03/10/1759201/us-will-be-central-to-climate-fight-says-cop30-president?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [US Will Be 'Central' To Climate Fight, Says Cop30 President](https://news.slashdot.org/story/25/03/10/1759201/us-will-be-central-to-climate-fight-says-cop30-president?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-10, 17:59:02](https://lobste.rs/s/esn5gf/quick_journey_into_linux_kernel) - [A Quick Journey Into the Linux Kernel](https://www.lucavall.in/blog/a-quick-journey-into-the-linux-kernel)
* [2025-03-10, 17:51:10](https://lobste.rs/s/p4smxx/cp1_programming_language) - [The Cp1 Programming Language](https://cp1-lang.org/)
* [2025-03-10, 17:42:00](https://entertainment.slashdot.org/story/25/03/10/1743215/sony-says-it-has-already-taken-down-more-than-75000-ai-deepfake-songs?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Sony Says It Has Already Taken Down More Than 75,000 AI Deepfake Songs](https://entertainment.slashdot.org/story/25/03/10/1743215/sony-says-it-has-already-taken-down-more-than-75000-ai-deepfake-songs?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-10, 17:40:40](https://news.ycombinator.com/item?id=43323071) - [Software-Defined Radio for Engineers (2018) [pdf]](https://www.analog.com/media/en/training-seminars/design-handbooks/Software-Defined-Radio-for-Engineers-2018/SDR4Engineers.pdf)
* [2025-03-10, 17:30:34](https://news.ycombinator.com/item?id=43322922) - [uBlock Origin is no longer available on the Chrome Store](https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm?hl=en)
* [2025-03-10, 17:28:25](https://lobste.rs/s/iaqfqn/css_relative_colors) - [CSS Relative Colors](https://ishadeed.com/article/css-relative-colors/)
* [2025-03-10, 17:24:24](https://lobste.rs/s/rftm88/scroll_buddy) - [Scroll buddy](https://scrollbuddy.com/)
* [2025-03-10, 17:17:10](https://lobste.rs/s/zellpc/software_falsehoods_you_can_build_it) - [Software Falsehoods: you can build it cheap, fast, and good - pick two](https://aaronstannard.com/software-price-speed-quality/)
* [2025-03-10, 16:54:45](https://lobste.rs/s/vd6all/why_go_s_error_handling_is_awesome) - [Why Go's Error Handling is Awesome](https://rauljordan.com/why-go-error-handling-is-awesome/)
* [2025-03-10, 16:52:00](https://it.slashdot.org/story/25/03/10/1652235/microsoft-admits-github-hosted-malware-that-infected-almost-a-million-devices?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microsoft Admits GitHub Hosted Malware That Infected Almost a Million Devices](https://it.slashdot.org/story/25/03/10/1652235/microsoft-admits-github-hosted-malware-that-infected-almost-a-million-devices?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-10, 16:28:44](https://news.ycombinator.com/item?id=43322245) - [Music labels will regret coming for the Internet Archive, sound historian says](https://arstechnica.com/tech-policy/2025/03/music-labels-will-regret-coming-for-the-internet-archive-sound-historian-says/)
* [2025-03-10, 16:02:00](https://it.slashdot.org/story/25/03/10/1532234/feds-link-150m-cyberheist-to-2022-lastpass-hacks?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Feds Link $150M Cyberheist To 2022 LastPass Hacks](https://it.slashdot.org/story/25/03/10/1532234/feds-link-150m-cyberheist-to-2022-lastpass-hacks?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-10, 15:31:57](https://news.ycombinator.com/item?id=43321688) - [Show HN: Editable Games](https://playscl.com/make)
* [2025-03-10, 15:23:00](https://tech.slashdot.org/story/25/03/10/1520223/volkswagen-bringing-back-physical-buttons-says-removing-them-was-a-mistake?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Volkswagen Bringing Back Physical Buttons, Says Removing Them Was a Mistake](https://tech.slashdot.org/story/25/03/10/1520223/volkswagen-bringing-back-physical-buttons-says-removing-them-was-a-mistake?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-10, 15:12:57](https://news.ycombinator.com/item?id=43321523) - [Show HN: In-Browser Graph RAG with Kuzu-WASM and WebLLM](https://blog.kuzudb.com/post/kuzu-wasm-rag/)
* [2025-03-10, 14:53:28](https://lobste.rs/s/a46njy/rust_2025_targeting_foundational) - [Rust in 2025: Targeting foundational software](https://smallcultfollowing.com/babysteps/blog/2025/03/10/rust-2025-intro/)
* [2025-03-10, 14:46:00](https://soylentnews.org/article.pl?sid=25/03/10/077239&from=rss) - [How Tiny Can You Scale It Until Things Won't Work?](https://soylentnews.org/article.pl?sid=25/03/10/077239&from=rss)
* [2025-03-10, 14:35:05](https://news.ycombinator.com/item?id=43321131) - [A technical history of Acorn Computers](https://www.mcmordie.co.uk/acornhistory/index.shtml)
* [2025-03-10, 14:14:34](https://lobste.rs/s/u6kptl/mls_is_coming_wire_app) - [MLS is Coming to Wire App](https://wire.com/en/blog/mls-is-coming-to-wire-app-learn-more)
* [2025-03-10, 13:21:41](https://lobste.rs/s/ar6guo/building_cross_platform_sdks_from_ffi) - [Building Cross-Platform SDKs: From FFI to WebAssembly | Flipt Blog](https://blog.flipt.io/from-ffi-to-wasm)
* [2025-03-10, 13:19:16](https://lobste.rs/s/wooaru/grove_bidirectionally_typed) - [Grove: A Bidirectionally Typed Collaborative Structure Editor Calculus](https://dl.acm.org/doi/pdf/10.1145/3704909)
* [2025-03-10, 13:12:38](https://news.ycombinator.com/item?id=43320230) - [Canon EF and RF Lenses – All Autofocus Motors](https://exclusivearchitecture.com/03-technical-articles-CLT-12-autofocus-systems.html)
* [2025-03-10, 12:48:32](https://news.ycombinator.com/item?id=43320024) - [Zero-Downtime Kubernetes Deployments on AWS with EKS](https://glasskube.dev/blog/kubernetes-zero-downtime-deployments-aws-eks/)
* [2025-03-10, 12:22:55](https://lobste.rs/s/brbp3g/from_spring_boot_ruby_on_rails) - [From Spring Boot to Ruby on Rails](https://smustafa.blog/2025/03/10/from-spring-boot-to-ruby-on-rails/)
* [2025-03-10, 12:00:58](https://news.ycombinator.com/item?id=43319611) - [FurtherAI (YC W24) Is Hiring](https://www.ycombinator.com/companies/furtherai/jobs)
* [2025-03-10, 10:47:21](https://lobste.rs/s/nhaenp/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/nhaenp/what_are_you_doing_this_week)
* [2025-03-10, 10:07:33](https://lobste.rs/s/okqjn5/20_years_linux_on_desktop_part_3) - [20 years of Linux on the Desktop (part 3)](https://ploum.net/2025-03-08-linux_desktop3.html)
* [2025-03-10, 09:50:33](https://news.ycombinator.com/item?id=43318624) - [Probabilistic Artificial Intelligence](https://arxiv.org/abs/2502.05244)
* [2025-03-10, 09:27:00](https://soylentnews.org/article.pl?sid=25/03/09/0337252&from=rss) - [CISA Tags Windows, Cisco Vulnerabilities as Actively Exploited](https://soylentnews.org/article.pl?sid=25/03/09/0337252&from=rss)
* [2025-03-10, 08:50:56](https://lobste.rs/s/mxy0si/chromecast_2_s_device_authentication) - [The Chromecast 2's device authentication certificate has expired](https://old.reddit.com/r/Chromecast/comments/1j7lhrs/the_chromecast_2s_device_authentication/)
* [2025-03-10, 08:25:17](https://lobste.rs/s/cjffvm/what_it_takes_add_new_backend_futhark) - [What it takes to add a new backend to Futhark](https://futhark-lang.org/blog/2025-03-04-adding-a-new-backend.html)
* [2025-03-10, 07:42:11](https://news.ycombinator.com/item?id=43317887) - [Trees not profits: we're giving up our right to ever sell Ecosia (2018)](https://blog.ecosia.org/trees-not-profits/)
* [2025-03-10, 06:44:27](https://news.ycombinator.com/item?id=43317592) - [Performance of the Python 3.14 tail-call interpreter](https://blog.nelhage.com/post/cpython-tail-call/)
* [2025-03-10, 05:15:46](https://lobste.rs/s/tnynqn/oral_history_bank_python_2021) - [An oral history of Bank Python (2021)](https://calpaterson.com/bank-python.html)
* [2025-03-10, 04:40:00](https://soylentnews.org/article.pl?sid=25/03/09/0321220&from=rss) - ['Jetsons' Robot Finally Arrives: Sweater-Wearing Neo Gamma Android Helps With Household Chores](https://soylentnews.org/article.pl?sid=25/03/09/0321220&from=rss)
* [2025-03-10, 00:16:54](https://news.ycombinator.com/item?id=43315406) - [Chasing RFI Waves – Part Seven](https://raoulpop.com/2012/04/15/chasing-rfi-waves-part-seven/)
* [2025-03-10, 00:01:00](https://soylentnews.org/article.pl?sid=25/03/09/0316250&from=rss) - [Billions of Years Ago, Mars Featured Beaches Fit for a Vacation, Astronomers Say](https://soylentnews.org/article.pl?sid=25/03/09/0316250&from=rss)
* [2025-03-09, 22:49:59](https://lobste.rs/s/9paxz2/performance_python_3_14_tail_call) - [Performance of the Python 3.14 tail-call interpreter](https://blog.nelhage.com/post/cpython-tail-call/)
* [2025-03-09, 22:38:57](https://news.ycombinator.com/item?id=43314657) - [Apple Exclaves](https://randomaugustine.medium.com/on-apple-exclaves-d683a2c37194)
* [2025-03-09, 22:18:08](https://lobste.rs/s/8fx2je/idiomatic_go) - [Idiomatic Go](https://dmitri.shuralyov.com/idiomatic-go)
* [2025-03-09, 19:18:00](https://soylentnews.org/article.pl?sid=25/03/08/082224&from=rss) - [‘Slime’ Keeps the Brain Safe ― and Could Guard Against Ageing](https://soylentnews.org/article.pl?sid=25/03/08/082224&from=rss)
* [2025-03-09, 17:56:35](https://lobste.rs/s/fbndgj/functional_vs_data_driven_development) - [Functional vs Data-Driven development: a Case-Study in Clojure & OCaml](https://kirancodes.me/posts/log-data-oriented-programming.html)
* [2025-03-09, 15:48:52](https://lobste.rs/s/2cacfc/open_source_hosting_service_for_pijul) - [Open source hosting service for Pijul](https://nest.pijul.com/pmeunier/nest)
* [2025-03-09, 14:37:00](https://soylentnews.org/article.pl?sid=25/03/08/0753249&from=rss) - [Meet Rayhunter: A New Open Source Tool from EFF to Detect Cellular Spying](https://soylentnews.org/article.pl?sid=25/03/08/0753249&from=rss)
* [2025-03-09, 11:05:33](https://lobste.rs/s/lvsiz8/gleam_v1_9_0_released) - [Gleam v1.9.0 released](https://gleam.run/news/hello-echo-hello-git/)
* [2025-03-09, 10:29:27](https://news.ycombinator.com/item?id=43307833) - [Sigint in Fiction](https://siginthistorian.blogspot.com/2025/02/sigint-in-fiction.html)
* [2025-03-09, 09:53:00](https://soylentnews.org/article.pl?sid=25/03/08/0744250&from=rss) - [Asteroid Mining Startup Loses its Spacecraft Somewhere Beyond the Moon](https://soylentnews.org/article.pl?sid=25/03/08/0744250&from=rss)
* [2025-03-09, 09:20:20](https://news.ycombinator.com/item?id=43307541) - [How to Implement a Cosine Similarity Function in TypeScript](https://alexop.dev/posts/how-to-implement-a-cosine-similarity-function-in-typescript-for-vector-comparison/)
* [2025-03-09, 05:07:00](https://soylentnews.org/article.pl?sid=25/03/08/0739224&from=rss) - [Amid a Growing Measles Outbreak, Doctors Worry RFK is Sending the Wrong Message](https://soylentnews.org/article.pl?sid=25/03/08/0739224&from=rss)
* [2025-03-09, 00:23:00](https://soylentnews.org/politics/article.pl?sid=25/03/08/0721219&from=rss) - [Some DOGE Staffers Are Drawing Six-Figure Government Salaries](https://soylentnews.org/politics/article.pl?sid=25/03/08/0721219&from=rss)
* [2025-03-08, 19:41:00](https://soylentnews.org/article.pl?sid=25/03/08/0713256&from=rss) - [Alphabet's Taara Chip Uses Light Beams To Provide High-Speed Internet](https://soylentnews.org/article.pl?sid=25/03/08/0713256&from=rss)
* [2025-03-08, 15:37:00](https://soylentnews.org/article.pl?sid=25/03/08/1538213&from=rss) - [Temporary Problem with Stripe](https://soylentnews.org/article.pl?sid=25/03/08/1538213&from=rss)
* [2025-03-08, 14:52:00](https://soylentnews.org/article.pl?sid=25/03/08/072239&from=rss) - [Hugging Face's Chief Science Officer Worries AI is Becoming 'Yes-Men on Servers'](https://soylentnews.org/article.pl?sid=25/03/08/072239&from=rss)
* [2025-03-08, 14:14:22](https://news.ycombinator.com/item?id=43300414) - [The Einstein AI Model](https://thomwolf.io/blog/scientific-ai.html)
* [2025-03-08, 10:07:00](https://soylentnews.org/article.pl?sid=25/03/07/0436239&from=rss) - [Eerily Realistic AI Voice Demo Sparks Amazement and Discomfort Online](https://soylentnews.org/article.pl?sid=25/03/07/0436239&from=rss)
* [2025-03-08, 10:06:01](https://news.ycombinator.com/item?id=43298945) - [Asking LLMs to create my game Shepard's Dog](https://github.com/vnglst/when-ai-fails/blob/main/shepards-dog/README.md)
* [2025-03-08, 05:22:00](https://soylentnews.org/article.pl?sid=25/03/07/0427238&from=rss) - [Apple Refuses to Break Encryption, Seeks Reversal of UK Demand for Backdoor](https://soylentnews.org/article.pl?sid=25/03/07/0427238&from=rss)
* [2025-03-08, 00:37:00](https://soylentnews.org/article.pl?sid=25/03/07/0422219&from=rss) - [The International Space Station Lacks Microbial Diversity. Is It Too Clean?](https://soylentnews.org/article.pl?sid=25/03/07/0422219&from=rss)
* [2025-03-07, 19:55:00](https://soylentnews.org/article.pl?sid=25/03/07/047205&from=rss) - [Massive Supereruptions Might Not Trigger the Apocalypse, Just Decades of Chaos](https://soylentnews.org/article.pl?sid=25/03/07/047205&from=rss)
* [2025-03-07, 15:10:00](https://soylentnews.org/article.pl?sid=25/03/07/041244&from=rss) - [Your Kitchen Utensils May be Poisoning You](https://soylentnews.org/article.pl?sid=25/03/07/041244&from=rss)
* [2025-03-07, 14:36:50](https://news.ycombinator.com/item?id=43290498) - [How to Build a Thousand-Year-Old Tree](https://www.noemamag.com/how-to-build-a-thousand-year-old-tree/)
* [2025-03-07, 13:31:46](https://news.ycombinator.com/item?id=43289994) - [Planes are having their GPS hacked. Could new clocks keep them safe?](https://www.bbc.com/news/articles/cq6yg204pvmo)
* [2025-03-07, 10:26:00](https://soylentnews.org/article.pl?sid=25/03/05/1610259&from=rss) - [How We Added Interlaced Video to Raspberry Pi 5](https://soylentnews.org/article.pl?sid=25/03/05/1610259&from=rss)
* [2025-03-07, 09:42:03](https://news.ycombinator.com/item?id=43288691) - [Arranging invisible icons in quadratic time (2021)](https://randomascii.wordpress.com/2021/02/16/arranging-invisible-icons-in-quadratic-time/)
* [2025-03-07, 08:54:00](https://news.ycombinator.com/item?id=43288410) - [HyperShell X Outdoor PowerSuit Exoskeleton](https://hypershell.tech/en-us)
* [2025-03-07, 05:42:00](https://soylentnews.org/article.pl?sid=25/03/05/162236&from=rss) - [BP Shuns Renewables in Return to Oil and Gas](https://soylentnews.org/article.pl?sid=25/03/05/162236&from=rss)
* [2025-03-07, 04:07:18](https://news.ycombinator.com/item?id=43287327) - [3dfx: So powerful, it's kind of ridiculous (2023)](https://www.abortretry.fail/p/so-powerful-its-kind-of-ridiculous)
* [2025-03-07, 00:53:00](https://soylentnews.org/politics/article.pl?sid=25/03/05/1555220&from=rss) - [15 Republican AGs Urge The Supreme Court To Make Affordable Broadband For Poor People Illegal](https://soylentnews.org/politics/article.pl?sid=25/03/05/1555220&from=rss)
