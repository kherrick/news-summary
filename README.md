# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Technology Controversies

* [After Reddit Thread on 'ChatGPT-Induced Psychosis', OpenAI Rolls Back GPT4o Update](https://slashdot.org/story/25/05/05/0234215/after-reddit-thread-on-chatgpt-induced-psychosis-openai-rolls-back-gpt4o-update?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [People are losing loved ones to AI-fueled spiritual fantasies](https://www.rollingstone.com/culture/culture-features/ai-spiritual-delusions-destroying-human-relationships-1235330175/)

* [Tech Companies Apparently Do Not Understand Why We Dislike AI](https://soatok.blog/2025/05/04/tech-companies-apparently-do-not-understand-why-we-dislike-ai/)

* [Why Do So Many AI Company Logos Look Like Buttholes?](https://soylentnews.org/article.pl?sid=25/05/03/145213&from=rss)

## Software and Open Source Highlights

* [The UN Ditches Google for Form Submissions, Opts for Open Source 'CryptPad' Instead](https://news.slashdot.org/story/25/05/04/2350224/the-un-ditches-google-for-form-submissions-opts-for-open-source-cryptpad-instead?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Show HN: Driverless print server for legacy printers, profit goes to open-source](https://printserver.ink/)

* [Feather: A web framework that skips Rust’s async boilerplate and just works](https://github.com/BersisSe/feather)

* [Urtext: The Python plaintext library for people who've tried everything else](https://urtext.co/)

## Human-Centric Experiences and Reflections

* [On Not Carrying a Camera – Cultivating memories instead of snapshots](https://hedgehogreview.com/issues/after-neoliberalism/articles/on-not-carrying-a-camera)

* [Dying for Beauty](https://alan.norbauer.com/articles/dying-for-beauty/)

* [Hello my perverted friend](https://hackerfactor.com/blog/index.php?/archives/1066-Hello-my-perverted-friend.html)

## Innovations and Science

* [Did Peking U. Just Make the World's Fastest Transistor - Without Using Silicon?](https://hardware.slashdot.org/story/25/05/04/036210/did-peking-u-just-make-the-worlds-fastest-transistor---without-using-silicon?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [NASA's Perseverance Rover Just Had A Close Call On Mars](https://soylentnews.org/article.pl?sid=25/05/03/0334239&from=rss)

* [The 35th Anniversary of the Hubble Space Telescope](https://soylentnews.org/article.pl?sid=25/05/03/024229&from=rss)

* [Largest Imaging Spectro-Polarimeter Achieves First Light](https://soylentnews.org/article.pl?sid=25/05/03/1359244&from=rss)

## Unique Projects and Creativity

* [Helmdar: 3D Scanning Brooklyn on Rollerblades](https://owentrueblood.com/blog/2025/05/04/helmdar/)

* [Cyborg cicadas play Pachelbel's Canon](https://arstechnica.com/science/2025/05/cyborg-cicadas-play-pachelbels-canon/)

* [I turned a 40 year old Apple Mouse into a speech to text button](https://workshop.cjpais.com/projects/handy-m0100)

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

* [2025-05-05, 03:43:00](https://slashdot.org/story/25/05/05/0234215/after-reddit-thread-on-chatgpt-induced-psychosis-openai-rolls-back-gpt4o-update?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [After Reddit Thread on &apos;ChatGPT-Induced Psychosis&apos;, OpenAI Rolls Back GPT4o Update](https://slashdot.org/story/25/05/05/0234215/after-reddit-thread-on-chatgpt-induced-psychosis-openai-rolls-back-gpt4o-update?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-05, 03:16:00](https://soylentnews.org/article.pl?sid=25/05/03/147205&amp;from=rss) - [The Absurdly Complicated Circuitry for the 386 Processor&apos;s Registers](https://soylentnews.org/article.pl?sid=25/05/03/147205&amp;from=rss)
* [2025-05-05, 02:41:08](https://lobste.rs/s/vv8azf/ibeacons) - [iBeacons](https://computer.rip/2025-05-04-iBeacons.html)
* [2025-05-05, 01:53:00](https://entertainment.slashdot.org/story/25/05/05/0150219/star-wars-day-celebrations-hit-fortnite-disney-xcom---and-retailers-everywhere?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Star Wars Day&apos; Celebrations Hit Fortnite, Disney+, X.com - and Retailers Everywhere](https://entertainment.slashdot.org/story/25/05/05/0150219/star-wars-day-celebrations-hit-fortnite-disney-xcom---and-retailers-everywhere?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-05, 01:44:09](https://news.ycombinator.com/item?id=43891245) - [Show HN: My AI Native Resume](https://ai.jakegaylor.com/)
* [2025-05-04, 23:54:17](https://news.ycombinator.com/item?id=43890649) - [People are losing loved ones to AI-fueled spiritual fantasies](https://www.rollingstone.com/culture/culture-features/ai-spiritual-delusions-destroying-human-relationships-1235330175/)
* [2025-05-04, 23:53:00](https://news.slashdot.org/story/25/05/04/2350224/the-un-ditches-google-for-form-submissions-opts-for-open-source-cryptpad-instead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The UN Ditches Google for Form Submissions, Opts for Open Source &apos;CryptPad&apos; Instead](https://news.slashdot.org/story/25/05/04/2350224/the-un-ditches-google-for-form-submissions-opts-for-open-source-cryptpad-instead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-04, 23:35:30](https://news.ycombinator.com/item?id=43890538) - [Matrix-vector multiplication implemented in off-the-shelf DRAM for Low-Bit LLMs](https://arxiv.org/abs/2503.23817)
* [2025-05-04, 23:32:21](https://news.ycombinator.com/item?id=43890525) - [On Not Carrying a Camera – Cultivating memories instead of snapshots](https://hedgehogreview.com/issues/after-neoliberalism/articles/on-not-carrying-a-camera)
* [2025-05-04, 23:01:45](https://lobste.rs/s/q1lmxq/tech_companies_apparently_do_not) - [Tech Companies Apparently Do Not Understand Why We Dislike AI](https://soatok.blog/2025/05/04/tech-companies-apparently-do-not-understand-why-we-dislike-ai/)
* [2025-05-04, 22:32:00](https://soylentnews.org/article.pl?sid=25/05/03/145213&amp;from=rss) - [Why Do So Many AI Company Logos Look Like Buttholes?](https://soylentnews.org/article.pl?sid=25/05/03/145213&amp;from=rss)
* [2025-05-04, 21:49:40](https://news.ycombinator.com/item?id=43889875) - [Helmdar: 3D Scanning Brooklyn on Rollerblades](https://owentrueblood.com/blog/2025/05/04/helmdar/)
* [2025-05-04, 21:41:00](https://games.slashdot.org/story/25/05/04/2134209/harassed-by-assasins-creed-gamers-a-professor-fought-back-with-kindness?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Harassed by Assasin&apos;s Creed Gamers, A Professor Fought Back With Kindness&apos;](https://games.slashdot.org/story/25/05/04/2134209/harassed-by-assasins-creed-gamers-a-professor-fought-back-with-kindness?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-04, 21:09:16](https://news.ycombinator.com/item?id=43889610) - [Graceful Shutdown in Go: Practical Patterns](https://victoriametrics.com/blog/go-graceful-shutdown/index.html)
* [2025-05-04, 21:08:06](https://lobste.rs/s/embsi9/load_store_conflicts) - [Load-store conflicts](https://zeux.io/2025/05/03/load-store-conflicts/)
* [2025-05-04, 21:05:02](https://lobste.rs/s/08nzki/moving_beyond_containers_introducing) - [Moving Beyond Containers - Introducing Boxer by Daniel Phillips @Wasm I/O 2025](https://www.youtube.com/watch?v=rHOwhkHv21U)
* [2025-05-04, 21:01:11](https://news.ycombinator.com/item?id=43889543) - [KaiPod Learning (YC S21) Is Hiring VP of Engineering](https://www.ycombinator.com/companies/kaipod-learning/jobs/Bs3H9uB-vp-of-engineering)
* [2025-05-04, 20:41:00](https://hardware.slashdot.org/story/25/05/04/2040204/disneyland-imagineers-defend-new-show-recreating-walt-disney-as-a-robot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Disneyland Imagineers Defend New Show  Recreating Walt Disney as a Robot](https://hardware.slashdot.org/story/25/05/04/2040204/disneyland-imagineers-defend-new-show-recreating-walt-disney-as-a-robot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-04, 20:34:40](https://lobste.rs/s/8dkeup/andreas_kling_s_keynote_presentation_on) - [Andreas Kling&apos;s Keynote Presentation on the Ladybird Browser](https://www.youtube.com/watch?v=9YM7pDMLvr4)
* [2025-05-04, 19:53:59](https://lobste.rs/s/iu01xj/you_can_t_prevent_your_last_outage_no) - [You can’t prevent your last outage, no matter how hard you try](https://surfingcomplexity.blog/2025/05/04/you-cant-prevent-your-last-outage-no-matter-how-hard-you-try/)
* [2025-05-04, 19:20:00](https://tech.slashdot.org/story/25/05/04/1911207/kde-plasma-lts-releases-are-dead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;KDE Plasma LTS Releases Are Dead&apos;](https://tech.slashdot.org/story/25/05/04/1911207/kde-plasma-lts-releases-are-dead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-04, 19:17:28](https://news.ycombinator.com/item?id=43888803) - [I&apos;d rather read the prompt](https://claytonwramsey.com/blog/prompt/)
* [2025-05-04, 19:17:03](https://lobste.rs/s/yklcli/git_with_me_peer_peer_encrypted_ephemeral) - [Git With Me: Peer-to-peer, encrypted, ephemeral Git collaboration](https://sr.ht/~meejah/git-withme/)
* [2025-05-04, 19:14:44](https://news.ycombinator.com/item?id=43888777) - [The complicated business of electing a Doge](https://www.theballotboy.com/electing-the-doge)
* [2025-05-04, 18:20:24](https://lobste.rs/s/gkfqsa/my_first_experience_using_swift_swiftui) - [My first experience using Swift, SwiftUI, and XCode](https://austinhenley.com/blog/firstswiftproject.html)
* [2025-05-04, 18:20:00](https://developers.slashdot.org/story/25/05/04/1815242/tech-leaders-launch-campaign-to-make-cs-and-ai-a-graduation-requirement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tech Leaders Launch Campaign To Make CS and AI a Graduation Requirement](https://developers.slashdot.org/story/25/05/04/1815242/tech-leaders-launch-campaign-to-make-cs-and-ai-a-graduation-requirement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-04, 17:55:27](https://news.ycombinator.com/item?id=43888239) - [Orders of Infinity](https://terrytao.wordpress.com/2025/05/04/orders-of-infinity/)
* [2025-05-04, 17:44:00](https://soylentnews.org/article.pl?sid=25/05/03/1359244&amp;from=rss) - [Largest Imaging Spectro-Polarimeter Achieves First Light](https://soylentnews.org/article.pl?sid=25/05/03/1359244&amp;from=rss)
* [2025-05-04, 17:43:00](https://news.ycombinator.com/item?id=43888157) - [Show HN: Driverless print server for legacy printers, profit goes to open-source](https://printserver.ink/)
* [2025-05-04, 17:38:13](https://news.ycombinator.com/item?id=43888117) - [Design for 3D-Printing](https://blog.rahix.de/design-for-3d-printing/)
* [2025-05-04, 17:22:50](https://lobste.rs/s/tjbv1p/beauty_having_pi_hole) - [The Beauty Of Having A Pi-hole](https://den.dev/blog/pihole/)
* [2025-05-04, 17:17:35](https://news.ycombinator.com/item?id=43887998) - [Typed Lisp, a Primer](https://alhassy.com/TypedLisp.html)
* [2025-05-04, 17:15:19](https://lobste.rs/s/spxkvs/typed_lisp_primer) - [Typed Lisp, A Primer](https://alhassy.com/TypedLisp.html)
* [2025-05-04, 16:37:00](https://soylentnews.org/meta/article.pl?sid=25/05/02/0531214&amp;from=rss) - [janrinok - Resignation](https://soylentnews.org/meta/article.pl?sid=25/05/02/0531214&amp;from=rss)
* [2025-05-04, 16:36:02](https://news.ycombinator.com/item?id=43887708) - [Minimal Linux Bootloader (2018)](https://raw.githubusercontent.com/Stefan20162016/linux-insides-code/master/bootloader.asm)
* [2025-05-04, 16:34:00](https://news.slashdot.org/story/25/05/03/0620253/fsf-announces-free-software-hackathon-honoring-its-40th-anniversary?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FSF Announces Free Software Hackathon Honoring Its 40th Anniversary](https://news.slashdot.org/story/25/05/03/0620253/fsf-announces-free-software-hackathon-honoring-its-40th-anniversary?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-04, 16:26:28](https://news.ycombinator.com/item?id=43887637) - [Dummy&apos;s Guide to Modern LLM Sampling](https://rentry.co/samplers)
* [2025-05-04, 15:59:00](https://lobste.rs/s/km7sp9/feather_web_framework_skips_rust_s_async) - [Feather: A web framework that skips Rust’s async boilerplate and just works](https://github.com/BersisSe/feather)
* [2025-05-04, 15:34:00](https://science.slashdot.org/story/25/05/04/0934243/we-may-be-in-a-post-herd-immunity-world-says-immunology-expert?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [We May Be In a &apos;Post-Herd Immunity World&apos;, says Immunology Expert](https://science.slashdot.org/story/25/05/04/0934243/we-may-be-in-a-post-herd-immunity-world-says-immunology-expert?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-04, 15:33:41](https://lobste.rs/s/m65t5p/site_for_making_bots_for_fediverse) - [a site for making bots for the fediverse](https://fedibot.club)
* [2025-05-04, 15:20:25](https://lobste.rs/s/euv4fr/functional_html) - [Functional HTML](https://overreacted.io/functional-html/)
* [2025-05-04, 14:50:10](https://lobste.rs/s/uuvlrv/filtering_github_actions_by_changed) - [Filtering GitHub actions by changed files](https://nedbatchelder.com/blog/202505/filtering_github_actions_by_changed_files.html)
* [2025-05-04, 14:34:00](https://linux.slashdot.org/story/25/05/04/0455245/security-researchers-create-proof-of-concept-program-that-evades-linux-syscall-watching-antivirus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Security Researchers Create Proof-of-Concept Program that Evades Linux Syscall-Watching Antivirus](https://linux.slashdot.org/story/25/05/04/0455245/security-researchers-create-proof-of-concept-program-that-evades-linux-syscall-watching-antivirus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-04, 13:29:55](https://news.ycombinator.com/item?id=43886601) - [TScale – Distributed training on consumer GPUs](https://github.com/Foreseerr/TScale)
* [2025-05-04, 13:21:33](https://news.ycombinator.com/item?id=43886552) - [A Texan who built an empire of ecstasy](https://www.texasmonthly.com/news-politics/ecstasy-starck-club-drugs-eighties-dallas/)
* [2025-05-04, 13:00:00](https://soylentnews.org/article.pl?sid=25/05/03/0340234&amp;from=rss) - [Microsoft: Windows Server Hotpatching to Require Subscription](https://soylentnews.org/article.pl?sid=25/05/03/0340234&amp;from=rss)
* [2025-05-04, 12:10:03](https://news.ycombinator.com/item?id=43886271) - [Lilith and Modula-2](https://astrobe.com/Modula2/)
* [2025-05-04, 12:02:35](https://news.ycombinator.com/item?id=43886243) - [An Alabama landline that keeps ringing](https://oxfordamerican.org/oa-now/the-alabama-landline-that-keeps-ringing)
* [2025-05-04, 11:34:00](https://news.slashdot.org/story/25/05/04/0754238/firefox-could-be-doomed-without-google-search-deal-executive-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Firefox Could Be Doomed Without Google Search Deal, Executive Says](https://news.slashdot.org/story/25/05/04/0754238/firefox-could-be-doomed-without-google-search-deal-executive-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-04, 11:32:48](https://lobste.rs/s/qpumou/rfc_5081_using_openpgp_keys_for_transport) - [RFC 5081: Using OpenPGP Keys for Transport Layer Security (TLS) Authentication](https://www.rfc-editor.org/rfc/rfc5081.html)
* [2025-05-04, 10:58:00](https://lobste.rs/s/oyyrx0/new_go_garbage_collector) - [New Go garbage collector](https://bsky.app/profile/michael.express/post/3lo7irdr6ic24)
* [2025-05-04, 09:47:12](https://lobste.rs/s/g1l4xi/show_me_pull_requests) - [Show me the Pull Requests](https://www.linkedin.com/posts/kittylyst_ai-llms-activity-7321451673275514880-npfA/)
* [2025-05-04, 08:54:44](https://news.ycombinator.com/item?id=43885478) - [Oberon Pi](http://pascal.hansotten.com/niklaus-wirth/project-oberon/oberon-pi/)
* [2025-05-04, 08:12:00](https://soylentnews.org/article.pl?sid=25/05/03/0334239&amp;from=rss) - [NASA&apos;s Perseverance Rover Just Had A Close Call On Mars ](https://soylentnews.org/article.pl?sid=25/05/03/0334239&amp;from=rss)
* [2025-05-04, 07:34:00](https://hardware.slashdot.org/story/25/05/04/036210/did-peking-u-just-make-the-worlds-fastest-transistor---without-using-silicon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Did Peking U. Just Make the World&apos;s Fastest Transistor - Without Using Silicon?](https://hardware.slashdot.org/story/25/05/04/036210/did-peking-u-just-make-the-worlds-fastest-transistor---without-using-silicon?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-04, 07:22:44](https://lobste.rs/s/0cmy6t/simple_common_lisp_web_app) - [A simple Common Lisp web app](https://www.scotto.me/blog/a-simple-common-lisp-web-app/)
* [2025-05-04, 07:22:36](https://lobste.rs/s/ebsgja/postgresql_planner_gotcha_with_ctes) - [A PostgreSQL planner gotcha with CTEs DELETE and LIMIT](https://www.shayon.dev/post/2025/119/a-postgresql-planner-gotcha-with-ctes-delete-and-limit/)
* [2025-05-04, 06:13:43](https://lobste.rs/s/gk9qon/single_day_firebase_bill_for_100_000) - [Single day Firebase bill for $100,000](https://serverlesshorrors.com/all/firebase-100k/)
* [2025-05-04, 04:34:00](https://slashdot.org/story/25/05/04/0341234/how-badly-did-chatgpt-and-copilot-fail-to-predict-the-winners-of-the-kentucky-derby?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Badly Did ChatGPT and Copilot Fail to Predict the Winners of the Kentucky Derby?](https://slashdot.org/story/25/05/04/0341234/how-badly-did-chatgpt-and-copilot-fail-to-predict-the-winners-of-the-kentucky-derby?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-04, 04:29:37](https://lobste.rs/s/td6ttp/dying_for_beauty) - [Dying for Beauty](https://alan.norbauer.com/articles/dying-for-beauty/)
* [2025-05-04, 03:33:00](https://soylentnews.org/article.pl?sid=25/05/03/0224236&amp;from=rss) - [TSMC Breaks Ground On Third Plant In Arizona](https://soylentnews.org/article.pl?sid=25/05/03/0224236&amp;from=rss)
* [2025-05-04, 01:57:17](https://lobste.rs/s/kurgp3/what_went_wrong_with_wireless_usb) - [What went wrong with wireless USB](http://oldvcr.blogspot.com/2025/05/what-went-wrong-with-wireless-usb.html)
* [2025-05-04, 01:34:00](https://science.slashdot.org/story/25/05/03/1934218/dying-satellites-can-drive-climate-change-and-ozone-depletion-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dying Satellites Can Drive Climate Change and Ozone Depletion, Study Finds](https://science.slashdot.org/story/25/05/03/1934218/dying-satellites-can-drive-climate-change-and-ozone-depletion-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-04, 00:49:38](https://lobste.rs/s/gwlxu1/hello_my_perverted_friend) - [Hello my perverted friend](https://hackerfactor.com/blog/index.php?/archives/1066-Hello-my-perverted-friend.html)
* [2025-05-03, 22:55:24](https://lobste.rs/s/tydkji/gorgeous_grub_collection_decent) - [Gorgeous-GRUB: collection of decent community-made GRUB themes](https://github.com/Jacksaur/Gorgeous-GRUB)
* [2025-05-03, 22:49:00](https://soylentnews.org/article.pl?sid=25/05/03/0218240&amp;from=rss) - [Another Periodic Suggestion to Try, Just Try, Switching to Kagi for Search](https://soylentnews.org/article.pl?sid=25/05/03/0218240&amp;from=rss)
* [2025-05-03, 22:43:00](https://hardware.slashdot.org/story/25/05/03/198214/ai-driven-robot-installs-nearly-10000-solar-modules-in-australia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI-Driven Robot Installs Nearly 10,000 Solar Modules in Australia](https://hardware.slashdot.org/story/25/05/03/198214/ai-driven-robot-installs-nearly-10000-solar-modules-in-australia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-03, 21:32:41](https://lobste.rs/s/x3dflu/better_man_page_viewer) - [A Better Man Page Viewer](https://www.visualmode.dev/a-better-man-page-viewer)
* [2025-05-03, 21:00:54](https://news.ycombinator.com/item?id=43882287) - [Cyborg cicadas play Pachelbel&apos;s Canon](https://arstechnica.com/science/2025/05/cyborg-cicadas-play-pachelbels-canon/)
* [2025-05-03, 18:03:00](https://soylentnews.org/article.pl?sid=25/05/03/024229&amp;from=rss) - [The 35th Anniversary of the Hubble Space Telescope](https://soylentnews.org/article.pl?sid=25/05/03/024229&amp;from=rss)
* [2025-05-03, 13:20:00](https://soylentnews.org/article.pl?sid=25/05/03/021233&amp;from=rss) - [Let&apos;s Remember That Extraordinary Claims Need Extraordinary Evidence](https://soylentnews.org/article.pl?sid=25/05/03/021233&amp;from=rss)
* [2025-05-03, 08:37:00](https://soylentnews.org/article.pl?sid=25/05/03/0154209&amp;from=rss) - [A Strange Phrase Keeps Turning Up in Scientific Papers, but Why?](https://soylentnews.org/article.pl?sid=25/05/03/0154209&amp;from=rss)
* [2025-05-03, 08:28:23](https://news.ycombinator.com/item?id=43877644) - [Why Archers Didn&apos;t Volley Fire](https://acoup.blog/2025/05/02/collections-why-archers-didnt-volley-fire/)
* [2025-05-03, 03:52:00](https://soylentnews.org/article.pl?sid=25/05/02/0710252&amp;from=rss) - [\&quot;Aerial Urination\&quot;](https://soylentnews.org/article.pl?sid=25/05/02/0710252&amp;from=rss)
* [2025-05-03, 03:49:35](https://news.ycombinator.com/item?id=43876725) - [The Once and Future Genius](https://literaryreview.co.uk/the-once-future-genius)
* [2025-05-03, 01:12:44](https://news.ycombinator.com/item?id=43876084) - [I turned a 40 year old Apple Mouse into a speech to text button](https://workshop.cjpais.com/projects/handy-m0100)
* [2025-05-02, 23:20:59](https://news.ycombinator.com/item?id=43875476) - [Technical analysis of TM SGNL, the unofficial Signal app Trump officials used](https://micahflee.com/tm-sgnl-the-obscure-unofficial-signal-app-mike-waltz-uses-to-text-with-trump-officials/)
* [2025-05-02, 23:10:00](https://soylentnews.org/article.pl?sid=25/05/02/064235&amp;from=rss) - [Monty Python and the Holy Grail Turns 50](https://soylentnews.org/article.pl?sid=25/05/02/064235&amp;from=rss)
* [2025-05-02, 21:13:07](https://news.ycombinator.com/item?id=43874641) - [Evidence of controversial Planet 9 uncovered in sky surveys taken 23 years apart](https://www.space.com/astronomy/solar-system/evidence-of-controversial-planet-9-uncovered-in-sky-surveys-taken-23-years-apart)
* [2025-05-02, 18:25:00](https://soylentnews.org/article.pl?sid=25/05/02/0551254&amp;from=rss) - [Flying Squirrel-Inspired Drone With Foldable Wings Demonstrates High Maneuverability](https://soylentnews.org/article.pl?sid=25/05/02/0551254&amp;from=rss)
* [2025-05-02, 15:39:39](https://news.ycombinator.com/item?id=43871250) - [A Hyper-Catalan Series Solution to Polynomial Equations, and the Geode](https://www.tandfonline.com/doi/full/10.1080/00029890.2025.2460966#d1e523)
* [2025-05-02, 13:42:00](https://soylentnews.org/article.pl?sid=25/05/02/0534212&amp;from=rss) - [China&apos;s &apos;2D&apos; Chip Could Soon be Used to Make Silicon-Free Chips](https://soylentnews.org/article.pl?sid=25/05/02/0534212&amp;from=rss)
* [2025-05-02, 08:54:00](https://soylentnews.org/article.pl?sid=25/04/30/1527224&amp;from=rss) - [A Gas Clump in the Milky Way’s Neighborhood Might be a ‘Dark Galaxy’](https://soylentnews.org/article.pl?sid=25/04/30/1527224&amp;from=rss)
* [2025-05-02, 04:13:00](https://soylentnews.org/article.pl?sid=25/04/30/1513218&amp;from=rss) - [Google is Killing Software Support for Early Nest Thermostats](https://soylentnews.org/article.pl?sid=25/04/30/1513218&amp;from=rss)
* [2025-05-01, 23:32:00](https://soylentnews.org/article.pl?sid=25/04/30/1511234&amp;from=rss) - [OIN Marks 20 Years Of Defending Linux And Open Source From Patent Trolls](https://soylentnews.org/article.pl?sid=25/04/30/1511234&amp;from=rss)
* [2025-05-01, 18:52:00](https://soylentnews.org/article.pl?sid=25/04/30/157220&amp;from=rss) - [Left or Right Arm? New Research Reveals Why Vaccination Site Matters for Immune Response](https://soylentnews.org/article.pl?sid=25/04/30/157220&amp;from=rss)
* [2025-05-01, 14:03:00](https://soylentnews.org/article.pl?sid=25/04/30/154230&amp;from=rss) - [Fusion Reactor Called ‘Norm’ Could Outperform Everything We’ve Built So Far](https://soylentnews.org/article.pl?sid=25/04/30/154230&amp;from=rss)
* [2025-05-01, 09:27:48](https://news.ycombinator.com/item?id=43855386) - [Urtext: The Python plaintext library for people who&apos;ve tried everything else](https://urtext.co/)
* [2025-05-01, 09:21:00](https://soylentnews.org/article.pl?sid=25/04/30/0213229&amp;from=rss) - [Here’s How We Might Generate Electricity From Rain](https://soylentnews.org/article.pl?sid=25/04/30/0213229&amp;from=rss)
* [2025-05-01, 04:34:00](https://soylentnews.org/article.pl?sid=25/04/30/025225&amp;from=rss) - [Wired on Protecting Your Phone — and Your Privacy — at the US Border](https://soylentnews.org/article.pl?sid=25/04/30/025225&amp;from=rss)
* [2025-05-01, 00:16:26](https://news.ycombinator.com/item?id=43852217) - [Thunderscope update: My take: Why open source is better](https://www.crowdsupply.com/eevengers/thunderscope/updates/revving-up-for-production)
