# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Innovations and AI Applications

* [Lufthansa To Cut 4,000 Jobs As Airline Turns To AI To Boost Efficiency](https://slashdot.org/story/25/10/01/0320206/lufthansa-to-cut-4000-jobs-as-airline-turns-to-ai-to-boost-efficiency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Exploring how Lufthansa plans to streamline operations using AI.

* [Scientists Make Embryos From Human Skin DNA For First Time](https://science.slashdot.org/story/25/09/30/2243218/scientists-make-embryos-from-human-skin-dna-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A groundbreaking development in biotechnology.

* [Intelligent Kubernetes Load Balancing at Databricks](https://www.databricks.com/blog/intelligent-kubernetes-load-balancing-databricks) - Insights into improving Kubernetes efficiency.

* [Amazon Launches Vegas OS, Its Android Replacement For Fire TV With No Sideloading](https://tech.slashdot.org/story/25/09/30/2225237/amazon-launches-vegas-os-its-android-replacement-for-fire-tv-with-no-sideloading?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - New OS for Fire TV with restricted app installation.

* [Open Printer is an open source inkjet printer with DRM-free ink and roll paper support](https://www.notebookcheck.net/Open-Printer-is-an-open-source-inkjet-printer-with-DRM-free-ink-and-roll-paper-support.1126929.0.html) - Open-source printing technology advancement.

## Security and Cyber Threats

* [Hackers strike Harrods in latest UK cyberattack](https://observer.co.uk/news/national/article/hackers-strike-harrods-in-latest-uk-cyberattack) - Discussing cybersecurity issues in the UK retail sector.

* [China Hackers Breached Foreign Ministers' Emails, Palo Alto Says](https://it.slashdot.org/story/25/09/30/1655230/china-hackers-breached-foreign-ministers-emails-palo-alto-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Cyber espionage targeting global diplomats.

## Environmental and Scientific Discoveries

* [Making Florida More Flood Resistant Is Forcing Hard Choices for Homeowners](https://www.nytimes.com/2025/09/27/us/making-florida-more-flood-resistant-is-forcing-hard-choices-for-homeowners.html) - Innovations and challenges in flood management.

* [Leaf miners identified as oldest insect plague in the history of Earth](https://phys.org/news/2025-09-leaf-miners-oldest-insect-plague.html) - Ancient ecological discoveries unfold.

* [Magma Displacement Triggered Tens of Thousands of Earthquakes, Santorini Swarm Study Finds](https://soylentnews.org/article.pl?sid=25/09/26/2314203&amp;from=rss) - New insights into seismic activities.

* [US Intel Officials “Concerned” China Will Soon Master Reusable Launch](https://soylentnews.org/article.pl?sid=25/09/27/1340248&amp;from=rss) - Strategic implications of reusable spacecraft technology.

* [Physics-Informed AI Learns Local Rules Behind Flocking and Collective Motion Behaviors](https://soylentnews.org/article.pl?sid=25/09/27/1348254&amp;from=rss) - AI simulation of natural biological swarming behaviors.

## Corporate and Financial Headlines

* [Charlie Javice Sentenced To 7 Years In Prison For Fraudulent Sale of Her Startup To JPMorgan](https://yro.slashdot.org/story/25/09/30/2230245/charlie-javice-sentenced-to-7-years-in-prison-for-fraudulent-sale-of-her-startup-to-jpmorgan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Financial scandal involving a tech entrepreneur.

* [Spotify's Founder and CEO Daniel Ek Is Stepping Down](https://slashdot.org/story/25/09/30/2237218/spotifys-founder-and-ceo-daniel-ek-is-stepping-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Leadership changes in music streaming.

* [EA is Reportedly About to be Sold in a Record-Setting $50 Billion Buyout](https://soylentnews.org/article.pl?sid=25/09/29/0053249&amp;from=rss) - Gaming industry poised for major buyout.

* [Forty Years of Commitment to Software Freedom](https://soylentnews.org/article.pl?sid=25/09/29/0111207&amp;from=rss) - Glimpses into software freedom principles.

* [Venmo and PayPal Users Will Finally Be Able To Send Money To Each Other](https://news.slashdot.org/story/25/09/30/2019252/venmo-and-paypal-users-will-finally-be-able-to-send-money-to-each-other?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Enhancing payment platform interoperability.

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

* [2025-10-01, 13:00:00](https://slashdot.org/story/25/10/01/0320206/lufthansa-to-cut-4000-jobs-as-airline-turns-to-ai-to-boost-efficiency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lufthansa To Cut 4,000 Jobs As Airline Turns To AI To Boost Efficiency](https://slashdot.org/story/25/10/01/0320206/lufthansa-to-cut-4000-jobs-as-airline-turns-to-ai-to-boost-efficiency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-01, 12:47:10](https://news.ycombinator.com/item?id=45437060) - [Hackers strike Harrods in latest UK cyberattack](https://observer.co.uk/news/national/article/hackers-strike-harrods-in-latest-uk-cyberattack)
* [2025-10-01, 12:41:23](https://news.ycombinator.com/item?id=45437003) - [Broadcom Fails to Disclose Zero-Day Exploitation of VMware Vulnerability](https://www.securityweek.com/broadcom-fails-to-disclose-zero-day-exploitation-of-vmware-vulnerability/)
* [2025-10-01, 11:55:15](https://news.ycombinator.com/item?id=45436664) - [People want platforms (not governments) to be responsible for moderating content](https://reutersinstitute.politics.ox.ac.uk/news/most-people-want-platforms-not-governments-be-responsible-moderating-content)
* [2025-10-01, 11:33:19](https://news.ycombinator.com/item?id=45436534) - [Why TigerBeetle is the most interesting database in the world](https://www.amplifypartners.com/blog-posts/why-tigerbeetle-is-the-most-interesting-database-in-the-world)
* [2025-10-01, 11:31:10](https://lobste.rs/s/6bid4y/why_tigerbeetle_is_most_interesting) - [Why TigerBeetle is the most interesting database in the world](https://www.amplifypartners.com/blog-posts/why-tigerbeetle-is-the-most-interesting-database-in-the-world)
* [2025-10-01, 10:00:29](https://news.ycombinator.com/item?id=45436027) - [FlowSynx – Orchestrate Declarative, Plugin-Driven DAG Workflows on .NET](https://flowsynx.io/)
* [2025-10-01, 10:00:00](https://science.slashdot.org/story/25/10/01/0322228/curiosity-drives-viewers-to-ignore-trigger-warnings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Curiosity Drives Viewers To Ignore Trigger Warnings](https://science.slashdot.org/story/25/10/01/0322228/curiosity-drives-viewers-to-ignore-trigger-warnings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-01, 09:32:00](https://soylentnews.org/article.pl?sid=25/09/29/0143218&amp;from=rss) - [Shopify Engages in Hostile Takeover of RubyGems and Bundler](https://soylentnews.org/article.pl?sid=25/09/29/0143218&amp;from=rss)
* [2025-10-01, 09:22:10](https://news.ycombinator.com/item?id=45435825) - [Our efforts, in part, define us](https://weakty.com/posts/efforts/)
* [2025-10-01, 09:20:46](https://lobste.rs/s/nisytd/our_efforts_part_define_us) - [Our efforts, in part, define us](https://weakty.com/posts/efforts/)
* [2025-10-01, 08:32:40](https://lobste.rs/s/i1dy7u/what_s_difference_between_files) - [What’s the difference between files and directories in a Unix-like filesystem?](https://jack23247.github.io/blog/linux/inodes/)
* [2025-10-01, 08:06:50](https://news.ycombinator.com/item?id=45435463) - [I only use Google Sheets](https://mayberay.bearblog.dev/why-i-only-use-google-sheets/)
* [2025-10-01, 08:04:08](https://lobste.rs/s/cetldx/register_allocation_go_compiler_2024) - [Register allocation in the Go compiler [2024]](https://vnmakarov.github.io/2024/09/24/register-allocation-in-the-go-compiler.html)
* [2025-10-01, 08:00:30](https://news.ycombinator.com/item?id=45435422) - [Category Theory Illustrated – Natural Transformations](https://abuseofnotation.github.io/category-theory-illustrated/11_natural_transformations/)
* [2025-10-01, 08:00:11](https://lobste.rs/s/ufpajh/category_theory_illustrated_natural) - [Category Theory Illustrated - Natural transformations](https://abuseofnotation.github.io/category-theory-illustrated/11_natural_transformations/)
* [2025-10-01, 07:00:21](https://news.ycombinator.com/item?id=45435100) - [Type Theory and Functional Programming (1999) [pdf]](https://www.cs.cornell.edu/courses/cs6110/2015sp/textbook/Simon%20Thompson%20textbook.pdf)
* [2025-10-01, 07:00:00](https://news.slashdot.org/story/25/10/01/0326222/independent-uk-bookshops-to-begin-selling-ebooks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Independent UK Bookshops To Begin Selling eBooks](https://news.slashdot.org/story/25/10/01/0326222/independent-uk-bookshops-to-begin-selling-ebooks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-01, 06:33:02](https://news.ycombinator.com/item?id=45434941) - [High-resolution efficient image generation from WiFi Mapping](https://arxiv.org/abs/2506.10605)
* [2025-10-01, 06:19:11](https://lobste.rs/s/rthlbj/what_was_longest_time_you_ever_took_return) - [What was the longest time you ever took to return to a software project?](https://lobste.rs/s/rthlbj/what_was_longest_time_you_ever_took_return)
* [2025-10-01, 05:30:47](https://lobste.rs/s/ka3uqb/generate_html_conveniently_efficiently) - [Generate HTML conveniently and efficiently with Python generators](https://github.com/pcarbonn/fast_html)
* [2025-10-01, 05:22:06](https://news.ycombinator.com/item?id=45434511) - [Basic Dialects, IDEs, and Tutorials](https://github.com/JohnBlood/awesome-basic)
* [2025-10-01, 05:06:38](https://news.ycombinator.com/item?id=45434417) - [Intelligent Kubernetes Load Balancing at Databricks](https://www.databricks.com/blog/intelligent-kubernetes-load-balancing-databricks)
* [2025-10-01, 04:49:00](https://soylentnews.org/article.pl?sid=25/09/29/0130236&amp;from=rss) - [Workslop - the Result of Too Much Clueless AI](https://soylentnews.org/article.pl?sid=25/09/29/0130236&amp;from=rss)
* [2025-10-01, 03:30:00](https://science.slashdot.org/story/25/09/30/2243218/scientists-make-embryos-from-human-skin-dna-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Make Embryos From Human Skin DNA For First Time](https://science.slashdot.org/story/25/09/30/2243218/scientists-make-embryos-from-human-skin-dna-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-01, 03:13:16](https://news.ycombinator.com/item?id=45433926) - [Blockdiff: We built our own file format for VM disk snapshots](https://cognition.ai/blog/blockdiff)
* [2025-10-01, 02:38:18](https://news.ycombinator.com/item?id=45433768) - [CDC File Transfer](https://github.com/google/cdc-file-transfer)
* [2025-10-01, 00:05:00](https://soylentnews.org/article.pl?sid=25/09/29/0126248&amp;from=rss) - [Inequality in Agri-Food Chains: Global South Produces the Food, the Global North Keeps the Wealth](https://soylentnews.org/article.pl?sid=25/09/29/0126248&amp;from=rss)
* [2025-09-30, 23:40:00](https://yro.slashdot.org/story/25/09/30/2230245/charlie-javice-sentenced-to-7-years-in-prison-for-fraudulent-sale-of-her-startup-to-jpmorgan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Charlie Javice Sentenced To 7 Years In Prison For Fraudulent Sale of Her Startup To JPMorgan](https://yro.slashdot.org/story/25/09/30/2230245/charlie-javice-sentenced-to-7-years-in-prison-for-fraudulent-sale-of-her-startup-to-jpmorgan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-30, 23:20:00](https://slashdot.org/story/25/09/30/2237218/spotifys-founder-and-ceo-daniel-ek-is-stepping-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Spotify&apos;s Founder and CEO Daniel Ek Is Stepping Down](https://slashdot.org/story/25/09/30/2237218/spotifys-founder-and-ceo-daniel-ek-is-stepping-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-30, 23:00:00](https://tech.slashdot.org/story/25/09/30/2225237/amazon-launches-vegas-os-its-android-replacement-for-fire-tv-with-no-sideloading?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Launches Vegas OS, Its Android Replacement For Fire TV With No Sideloading](https://tech.slashdot.org/story/25/09/30/2225237/amazon-launches-vegas-os-its-android-replacement-for-fire-tv-with-no-sideloading?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-30, 22:20:00](https://yro.slashdot.org/story/25/09/30/2035246/chinese-woman-convicted-after-worlds-biggest-bitcoin-seizure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chinese Woman Convicted After &apos;World&apos;s Biggest&apos; Bitcoin Seizure](https://yro.slashdot.org/story/25/09/30/2035246/chinese-woman-convicted-after-worlds-biggest-bitcoin-seizure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-30, 22:09:29](https://lobste.rs/s/rlohwt/rubygems_stewardship_where_we_are_what_s) - [RubyGems stewardship: Where we are, what’s changing and how we’ll engage](https://rubycentral.org/news/our-stewardship-where-we-are-whats-changing-and-how-well-engage/)
* [2025-09-30, 21:57:19](https://lobste.rs/s/uda4e6/diff_algorithms) - [Diff Algorithms](https://flo.znkr.io/diff/)
* [2025-09-30, 21:40:00](https://tech.slashdot.org/story/25/09/30/2028215/openais-new-social-video-app-will-let-you-deepfake-your-friends?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI&apos;s New Social Video App Will Let You Deepfake Your Friends](https://tech.slashdot.org/story/25/09/30/2028215/openais-new-social-video-app-will-let-you-deepfake-your-friends?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-30, 21:08:28](https://news.ycombinator.com/item?id=45431271) - [Introduction to Multi-Armed Bandits (2019)](https://arxiv.org/abs/1904.07272)
* [2025-09-30, 21:08:02](https://lobste.rs/s/gxdnb7/bevy_0_17) - [Bevy 0.17](https://bevy.org/news/bevy-0-17/)
* [2025-09-30, 21:00:00](https://news.slashdot.org/story/25/09/30/2019252/venmo-and-paypal-users-will-finally-be-able-to-send-money-to-each-other?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Venmo and PayPal Users Will Finally Be Able To Send Money To Each Other](https://news.slashdot.org/story/25/09/30/2019252/venmo-and-paypal-users-will-finally-be-able-to-send-money-to-each-other?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-30, 20:58:52](https://news.ycombinator.com/item?id=45431167) - [Mind the encryptionroot: How to save your data when ZFS loses its mind](https://sambowman.tech/blog/posts/mind-the-encryptionroot-how-to-save-your-data-when-zfs-loses-its-mind/)
* [2025-09-30, 20:29:18](https://lobste.rs/s/vgcxcw/systems_programming_with_zig) - [Systems Programming with Zig](https://www.manning.com/books/systems-programming-with-zig)
* [2025-09-30, 20:20:00](https://entertainment.slashdot.org/story/25/09/30/2016222/fcc-to-consider-ending-merger-ban-among-us-broadcast-networks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FCC To Consider Ending Merger Ban Among US Broadcast Networks](https://entertainment.slashdot.org/story/25/09/30/2016222/fcc-to-consider-ending-merger-ban-among-us-broadcast-networks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-30, 20:09:44](https://news.ycombinator.com/item?id=45430604) - [Diff Algorithms](https://flo.znkr.io/diff/)
* [2025-09-30, 20:03:19](https://lobste.rs/s/fcimmd/organize_your_slack_channels_by_how_often) - [Organize your Slack channels by “How Often”, not “What”](https://aggressivelyparaphrasing.me/2025/09/30/organize-your-slack-channels-by-how-often-not-what/)
* [2025-09-30, 20:00:21](https://news.ycombinator.com/item?id=45430498) - [Inflammation now predicts heart disease more strongly than cholesterol](https://www.empirical.health/blog/inflammation-and-heart-health/)
* [2025-09-30, 19:55:31](https://lobste.rs/s/lm3isi/glide_extensible_keyboard_focused_web) - [Glide, an extensible, keyboard-focused web browser](https://blog.craigie.dev/introducing-glide/)
* [2025-09-30, 19:24:00](https://soylentnews.org/article.pl?sid=25/09/29/0124238&amp;from=rss) - [Details Beginning to Emerge About Australia&apos;s Social Media Ban](https://soylentnews.org/article.pl?sid=25/09/29/0124238&amp;from=rss)
* [2025-09-30, 18:32:59](https://lobste.rs/s/hk8yw5/steel_bank_common_lisp_2_5_9) - [Steel Bank Common Lisp 2.5.9](https://www.sbcl.org/news.html#2.5.9)
* [2025-09-30, 18:27:00](https://tech.slashdot.org/story/25/09/30/1827229/windows-11s-2025-update-arrives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Windows 11&apos;s 2025 Update Arrives](https://tech.slashdot.org/story/25/09/30/1827229/windows-11s-2025-update-arrives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-30, 17:31:34](https://news.ycombinator.com/item?id=45428482) - [Boeing has started working on a 737 MAX replacement](https://www.wsj.com/business/airlines/boeing-has-started-working-on-a-737-max-replacement-40a110df)
* [2025-09-30, 17:30:00](https://news.slashdot.org/story/25/09/30/1715206/imgur-pulls-out-of-uk-as-data-watchdog-threatens-fine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Imgur Pulls Out of UK as Data Watchdog Threatens Fine](https://news.slashdot.org/story/25/09/30/1715206/imgur-pulls-out-of-uk-as-data-watchdog-threatens-fine?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-30, 16:56:23](https://lobste.rs/s/ytwdqu/behind_y_s2_serverless_multiplayer_rooms) - [Behind y-s2: serverless multiplayer rooms](https://s2.dev/blog/durable-yjs-rooms)
* [2025-09-30, 16:55:01](https://news.ycombinator.com/item?id=45427982) - [Sora 2](https://openai.com/index/sora-2/)
* [2025-09-30, 16:55:00](https://it.slashdot.org/story/25/09/30/1655230/china-hackers-breached-foreign-ministers-emails-palo-alto-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Hackers Breached Foreign Ministers&apos; Emails, Palo Alto Says](https://it.slashdot.org/story/25/09/30/1655230/china-hackers-breached-foreign-ministers-emails-palo-alto-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-30, 16:10:00](https://science.slashdot.org/story/25/09/30/1549226/what-researchers-suspect-may-be-fueling-cancer-among-millennials?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Researchers Suspect May Be Fueling Cancer Among Millennials](https://science.slashdot.org/story/25/09/30/1549226/what-researchers-suspect-may-be-fueling-cancer-among-millennials?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-30, 16:00:36](https://news.ycombinator.com/item?id=45427197) - [Leaked Apple M5 9 core Geekbench scores](https://browser.geekbench.com/v6/cpu/14173685)
* [2025-09-30, 15:47:19](https://lobste.rs/s/6bjcok/how_write_complete_gnome_application_lua) - [How to write a complete GNOME application in Lua](https://www.vtrlx.ca/posts/2025/howto-complete-lua-gnome-app/)
* [2025-09-30, 15:21:23](https://news.ycombinator.com/item?id=45426680) - [Designing agentic loops](https://simonwillison.net/2025/Sep/30/designing-agentic-loops/)
* [2025-09-30, 14:39:00](https://soylentnews.org/article.pl?sid=25/09/29/0111207&amp;from=rss) - [Forty Years of Commitment to Software Freedom](https://soylentnews.org/article.pl?sid=25/09/29/0111207&amp;from=rss)
* [2025-09-30, 14:01:39](https://lobste.rs/s/rouky6/software_essays_shaped_me) - [The Software Essays that Shaped Me](https://refactoringenglish.com/blog/software-essays-that-shaped-me/)
* [2025-09-30, 13:01:05](https://news.ycombinator.com/item?id=45424888) - [Imgur pulls out of UK as data watchdog threatens fine](https://www.express.co.uk/news/uk/2115228/image-site-imgur-pulls-out)
* [2025-09-30, 12:53:49](https://news.ycombinator.com/item?id=45424827) - [Founder sentenced to seven years in prison for fraudulent sale to JPMorgan](https://www.cnn.com/2025/09/30/business/charlie-javice-frank-sentenced-jpmorgan-intl)
* [2025-09-30, 12:15:25](https://lobste.rs/s/1zmau9/radicle_1_5_0_hibiscus) - [Radicle 1.5.0 – Hibiscus](https://radicle.xyz/2025/09/30/radicle-1.5.0)
* [2025-09-30, 12:08:50](https://lobste.rs/s/r6elsg/open_printer_is_open_source_inkjet) - [Open Printer is an open source inkjet printer with DRM-free ink and roll paper support](https://www.notebookcheck.net/Open-Printer-is-an-open-source-inkjet-printer-with-DRM-free-ink-and-roll-paper-support.1126929.0.html)
* [2025-09-30, 12:02:32](https://lobste.rs/s/yfmq0d/expression_problem_rust) - [The expression problem and Rust](https://purplesyringa.moe/blog/the-expression-problem-and-rust/)
* [2025-09-30, 11:52:36](https://lobste.rs/s/1vew74/go_proposal_hashers) - [Go proposal: Hashers](https://antonz.org/accepted/maphash-hasher/)
* [2025-09-30, 09:57:00](https://soylentnews.org/article.pl?sid=25/09/29/018254&amp;from=rss) - [OpenAI and Nvidia’s $100B AI Plan Will Require Power Equal to 10 Nuclear Reactors](https://soylentnews.org/article.pl?sid=25/09/29/018254&amp;from=rss)
* [2025-09-30, 07:30:38](https://lobste.rs/s/bt97wm/bcachefs_removed_from_mainline_kernel) - [Bcachefs removed from the mainline kernel](https://lwn.net/Articles/1040120/)
* [2025-09-30, 07:03:11](https://news.ycombinator.com/item?id=45422717) - [Defer: Resource cleanup in C with GCCs magic](https://oshub.org/projects/retros-32/posts/defer-resource-cleanup-in-c-with-gccs-magic)
* [2025-09-30, 05:38:52](https://lobste.rs/s/t3t3zr/we_move_as_1) - [we move as 1](https://stopthrowingrocks.github.io/wma1/)
* [2025-09-30, 05:27:06](https://lobste.rs/s/06ef3a/maml_new_configuration_language_similar) - [MAML - a new configuration language (similar to JSON, YAML, and TOML)](https://maml.dev/)
* [2025-09-30, 05:18:55](https://lobste.rs/s/mhczmh/pidgin_3_0_experimental_4_2_93_0_has_been) - [Pidgin 3.0 Experimental 4 (2.93.0) has been released](https://discourse.imfreedom.org/t/pidgin-3-0-experimental-4-2-93-0-has-been-released/)
* [2025-09-30, 05:15:00](https://soylentnews.org/article.pl?sid=25/09/29/0055259&amp;from=rss) - [Think Twice Before Abandoning X11. Wayland Breaks Everything!](https://soylentnews.org/article.pl?sid=25/09/29/0055259&amp;from=rss)
* [2025-09-30, 00:32:00](https://soylentnews.org/article.pl?sid=25/09/29/0053249&amp;from=rss) - [EA is Reportedly About to be Sold in a Record-Setting $50 Billion Buyout](https://soylentnews.org/article.pl?sid=25/09/29/0053249&amp;from=rss)
* [2025-09-29, 19:46:00](https://soylentnews.org/article.pl?sid=25/09/28/0016247&amp;from=rss) - [New World Screwworm Parasite Detected in Northern Mexico Near US Border](https://soylentnews.org/article.pl?sid=25/09/28/0016247&amp;from=rss)
* [2025-09-29, 15:02:00](https://soylentnews.org/article.pl?sid=25/09/28/0015236&amp;from=rss) - [8,000 years of Human Activities Aave Caused Wild Animals to Shrink and Domestic Animals to Grow](https://soylentnews.org/article.pl?sid=25/09/28/0015236&amp;from=rss)
* [2025-09-29, 10:17:00](https://soylentnews.org/article.pl?sid=25/09/28/008233&amp;from=rss) - [Physicists Nearly Double Speed of Superconducting Qubit Readout in Quantum Computers](https://soylentnews.org/article.pl?sid=25/09/28/008233&amp;from=rss)
* [2025-09-29, 05:35:00](https://soylentnews.org/article.pl?sid=25/09/28/006252&amp;from=rss) - [The Cyber Vulnerabilities Lurking in CRM Systems](https://soylentnews.org/article.pl?sid=25/09/28/006252&amp;from=rss)
* [2025-09-29, 00:49:00](https://soylentnews.org/article.pl?sid=25/09/27/141202&amp;from=rss) - [This Experimental Computer Chip Reuses Energy](https://soylentnews.org/article.pl?sid=25/09/27/141202&amp;from=rss)
* [2025-09-28, 23:34:13](https://news.ycombinator.com/item?id=45409005) - [Making Florida More Flood Resistant Is Forcing Hard Choices for Homeowners](https://www.nytimes.com/2025/09/27/us/making-florida-more-flood-resistant-is-forcing-hard-choices-for-homeowners.html)
* [2025-09-28, 20:01:00](https://soylentnews.org/article.pl?sid=25/09/27/1352245&amp;from=rss) - [US Uncovers 100,000 SIM Cards That Could Have “Shut Down” NYC Cell Network](https://soylentnews.org/article.pl?sid=25/09/27/1352245&amp;from=rss)
* [2025-09-28, 15:40:04](https://news.ycombinator.com/item?id=45405144) - [NJ theme park puts animatronic dinosaurs on Facebook Marketplace](https://gizmodo.com/new-jersey-theme-park-puts-animatronic-dinosaurs-on-facebook-marketplace-as-it-shuts-down-2000664489)
* [2025-09-28, 15:15:00](https://soylentnews.org/article.pl?sid=25/09/27/1348254&amp;from=rss) - [Physics-Informed AI Learns Local Rules Behind Flocking and Collective Motion Behaviors](https://soylentnews.org/article.pl?sid=25/09/27/1348254&amp;from=rss)
* [2025-09-28, 15:05:12](https://news.ycombinator.com/item?id=45404868) - [Leaf miners identified as oldest insect plague in the history of Earth](https://phys.org/news/2025-09-leaf-miners-oldest-insect-plague.html)
* [2025-09-28, 10:29:00](https://soylentnews.org/article.pl?sid=25/09/27/1340248&amp;from=rss) - [US Intel Officials “Concerned” China Will Soon Master Reusable Launch](https://soylentnews.org/article.pl?sid=25/09/27/1340248&amp;from=rss)
* [2025-09-28, 05:44:00](https://soylentnews.org/article.pl?sid=25/09/27/1329235&amp;from=rss) - [Consumer Reports Slams Microsoft for Windows 10 Mess, Urges Extension of Free Updates](https://soylentnews.org/article.pl?sid=25/09/27/1329235&amp;from=rss)
* [2025-09-28, 00:56:00](https://soylentnews.org/article.pl?sid=25/09/27/1318227&amp;from=rss) - [Airlines Seen as Vulnerable After Confirmed Ransomware Cyberattack, Suspect Arrested](https://soylentnews.org/article.pl?sid=25/09/27/1318227&amp;from=rss)
* [2025-09-27, 21:43:47](https://news.ycombinator.com/item?id=45399589) - [Washi: The Japanese paper crafted to last 1000 years [video]](https://www.bbc.com/reel/video/p0m4mg2j/washi-the-japanese-paper-crafted-to-last-1-000-years)
* [2025-09-27, 20:13:00](https://soylentnews.org/article.pl?sid=25/09/27/1254248&amp;from=rss) - [How AI is Subsidized by Your Utility Bills and Drives Copper Prices](https://soylentnews.org/article.pl?sid=25/09/27/1254248&amp;from=rss)
* [2025-09-27, 15:27:00](https://soylentnews.org/article.pl?sid=25/09/26/2326219&amp;from=rss) - [Cloudflare DDoSed Itself With React UseEffect Hook Blunder](https://soylentnews.org/article.pl?sid=25/09/26/2326219&amp;from=rss)
* [2025-09-27, 12:24:30](https://news.ycombinator.com/item?id=45395115) - [The Prehistory of Computing, Part II](https://www.oranlooney.com/post/history-of-computing-2/)
* [2025-09-27, 10:41:00](https://soylentnews.org/article.pl?sid=25/09/26/2314203&amp;from=rss) - [Magma Displacement Triggered Tens of Thousands of Earthquakes, Santorini Swarm Study Finds](https://soylentnews.org/article.pl?sid=25/09/26/2314203&amp;from=rss)
* [2025-09-27, 05:56:00](https://soylentnews.org/article.pl?sid=25/09/26/239227&amp;from=rss) - [China&apos;s Latest GPU Arrives With Claims of CUDA Compatibility and RT Support](https://soylentnews.org/article.pl?sid=25/09/26/239227&amp;from=rss)
* [2025-09-27, 01:06:00](https://soylentnews.org/article.pl?sid=25/09/26/1437222&amp;from=rss) - [How India&apos;s Unplanned Hydropower Dams and Tunnels Are Disrupting Himalayan Landscapes](https://soylentnews.org/article.pl?sid=25/09/26/1437222&amp;from=rss)
