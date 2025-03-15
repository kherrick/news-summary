# [News Summary](https://kherrick.github.io/news-summary/)

## Space and Science Discoveries

* [Bad News for Low Orbit Satellites: Earth's Thermosphere is Shrinking](https://soylentnews.org/article.pl?sid=25/03/14/1113259&from=rss) - An analysis of the thermosphere's contraction could have implications for satellite operations.

* [Dead Athena Moon Lander Seen Inside Its Crater Grave From Lunar Orbit](https://science.slashdot.org/story/25/03/15/0447257/dead-athena-moon-lander-seen-inside-its-crater-grave-from-lunar-orbit?utm_source=rss1.0mainlinkanon&utm_medium=feed) - High-resolution imagery reveals the aftermath of the Athena Moon lander's crash.

* [SpaceX Launches NASA's Crew-10 Mission To ISS](https://science.slashdot.org/story/25/03/15/0033233/spacex-launches-nasas-crew-10-mission-to-iss?utm_source=rss1.0mainlinkanon&utm_medium=feed) - SpaceX facilitates the next major advancement in international space collaboration.

## Technology and Innovations

* [Nubmq: A high performant key-value store engine built from first principles](https://news.ycombinator.com/item?id=43371097) - A deep-dive into a new approach to database engines.

* [ruby_llm, a delightful Ruby way to work with AI](https://github.com/crmne/ruby_llm) - Explore a Ruby-based AI tool designed for ease of use.

* [Transformers Without Normalization](https://jiachenzhu.github.io/DyT/) - Innovative work on transformers challenges standard AI models.

* [AMD's Zen 6-Based Desktop Processors May Feature Up to 24 Cores](https://soylentnews.org/article.pl?sid=25/03/14/115251&from=rss) - Insights into the next leap in desktop processing power.

## Security and Privacy Concerns

* [Popular GitHub Action tj-actions/changed-files is compromised](https://www.stepsecurity.io/blog/harden-runner-detection-tj-actions-changed-files-action-is-compromised) - A warning about potential GitHub security issues.

* [Everything You Say To Your Echo Will Be Sent To Amazon Starting On March 28](https://yro.slashdot.org/story/25/03/14/2113257/everything-you-say-to-your-echo-will-be-sent-to-amazon-starting-on-march-28?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Concerns arise regarding privacy and voice data usage.

* [AI Summaries Are Coming To Notepad](https://slashdot.org/story/25/03/14/2027208/ai-summaries-are-coming-to-notepad?utm_source=rss1.0mainlinkanon&utm_medium=feed) - What could personalized AI-generated data mean for user information security?

## Society and Economics

* [Gen Z Americans Don't Have Enough Saved To Cover a Single Month of Spending](https://news.slashdot.org/story/25/03/14/2136247/gen-z-americans-dont-have-enough-saved-to-cover-a-single-month-of-spending?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A financial overview of the younger generation's economic struggles.

* [The Curious Surge of Productivity in U.S. Restaurants](https://bfi.uchicago.edu/working-papers/the-curious-surge-of-productivity-in-u-s-restaurants/) - A surprising shift in restaurant efficiency metrics.

* [US IRS To Re-Evaluate Modernization Investments In Light of AI Technology](https://yro.slashdot.org/story/25/03/14/2128204/us-irs-to-re-evaluate-modernization-investments-in-light-of-ai-technology?utm_source=rss1.0mainlinkanon&utm_medium=feed) - How AI is shaping government infrastructure.

## Uncommon and Fun Stories

* [Super Nintendo Hardware Is Running Faster As It Ages](https://hardware.slashdot.org/story/25/03/15/0147220/super-nintendo-hardware-is-running-faster-as-it-ages?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A curious case of vintage technology performance.

* [That time I recreated Photoshop in C++](https://f055.net/technology/that-time-i/that-time-i-recreated-photoshop-in-c/) - The journey of reimagining a popular tool.

* [How to beat NES Mario in 0.000005 seconds](https://www.youtube.com/watch?v=pK7hU-ovUso) - Exploring game glitches for speedrunning excellence.

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

* [2025-03-15, 09:07:00](https://soylentnews.org/article.pl?sid=25/03/14/1113259&from=rss) - [Bad News for Low Orbit Satellites: Earth's Thermosphere is Shrinking](https://soylentnews.org/article.pl?sid=25/03/14/1113259&from=rss)
* [2025-03-15, 08:54:23](https://news.ycombinator.com/item?id=43371097) - [Nubmq: A high performant key-value store engine built from first principles](https://news.ycombinator.com/item?id=43371097)
* [2025-03-15, 07:00:29](https://news.ycombinator.com/item?id=43370596) - [Noloco (YC S21) Is Hiring a Product Designer in Barcelona](https://www.ycombinator.com/companies/noloco/jobs/MCp9ejT-founding-product-designer)
* [2025-03-15, 07:00:00](https://science.slashdot.org/story/25/03/15/0447257/dead-athena-moon-lander-seen-inside-its-crater-grave-from-lunar-orbit?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Dead Athena Moon Lander Seen Inside Its Crater Grave From Lunar Orbit](https://science.slashdot.org/story/25/03/15/0447257/dead-athena-moon-lander-seen-inside-its-crater-grave-from-lunar-orbit?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-15, 04:22:00](https://soylentnews.org/article.pl?sid=25/03/14/115251&from=rss) - [AMD's Zen 6-Based Desktop Processors May Feature Up to 24 Cores](https://soylentnews.org/article.pl?sid=25/03/14/115251&from=rss)
* [2025-03-15, 03:30:00](https://hardware.slashdot.org/story/25/03/15/0147220/super-nintendo-hardware-is-running-faster-as-it-ages?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Super Nintendo Hardware Is Running Faster As It Ages](https://hardware.slashdot.org/story/25/03/15/0147220/super-nintendo-hardware-is-running-faster-as-it-ages?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-15, 03:25:06](https://lobste.rs/s/4cw1ua/ruby_llm_delightful_ruby_way_work_with_ai) - [ruby_llm, a delightful Ruby way to work with AI](https://github.com/crmne/ruby_llm)
* [2025-03-15, 03:21:02](https://lobste.rs/s/4ko499/popular_github_action_tj_actions_changed) - [Popular GitHub Action tj-actions/changed-files is compromised](https://www.stepsecurity.io/blog/harden-runner-detection-tj-actions-changed-files-action-is-compromised)
* [2025-03-15, 03:12:39](https://news.ycombinator.com/item?id=43369633) - [Transformers Without Normalization](https://jiachenzhu.github.io/DyT/)
* [2025-03-15, 03:05:09](https://lobste.rs/s/5mlumx/why_i_don_t_like_hackathons) - [Why I Don't Like Hackathons](https://mirawelner.com/posts/hackathons.html)
* [2025-03-15, 02:20:07](https://news.ycombinator.com/item?id=43369354) - [Using a graphics tablet as a programming tool (2018)](https://jeandavidmoisan.com/posts/using-a-graphics-tablet-as-a-programming-tool/)
* [2025-03-15, 02:00:00](https://tech.slashdot.org/story/25/03/15/016220/end-of-windows-10-leaves-pc-charities-with-tough-choice?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [End of Windows 10 Leaves PC Charities With Tough Choice](https://tech.slashdot.org/story/25/03/15/016220/end-of-windows-10-leaves-pc-charities-with-tough-choice?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-15, 01:57:59](https://news.ycombinator.com/item?id=43369230) - [Google Being Forced to Sell Chrome Is Not Good for the Web](https://chriscoyier.net/2025/03/14/google-being-forced-to-sell-chrome-is-not-good-for-the-web/)
* [2025-03-15, 01:30:00](https://apple.slashdot.org/story/25/03/15/0053233/leaked-apple-meeting-shows-how-dire-the-siri-situation-really-is?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Leaked Apple Meeting Shows How Dire the Siri Situation Really Is](https://apple.slashdot.org/story/25/03/15/0053233/leaked-apple-meeting-shows-how-dire-the-siri-situation-really-is?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-15, 01:00:00](https://science.slashdot.org/story/25/03/15/0033233/spacex-launches-nasas-crew-10-mission-to-iss?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [SpaceX Launches NASA's Crew-10 Mission To ISS](https://science.slashdot.org/story/25/03/15/0033233/spacex-launches-nasas-crew-10-mission-to-iss?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-15, 00:43:02](https://news.ycombinator.com/item?id=43368870) - [Popular GitHub Action tj-actions/changed-files is compromised](https://semgrep.dev/blog/2025/popular-github-action-tj-actionschanged-files-is-compromised/)
* [2025-03-15, 00:20:00](https://news.slashdot.org/story/25/03/14/2136247/gen-z-americans-dont-have-enough-saved-to-cover-a-single-month-of-spending?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Gen Z Americans Don't Have Enough Saved To Cover a Single Month of Spending](https://news.slashdot.org/story/25/03/14/2136247/gen-z-americans-dont-have-enough-saved-to-cover-a-single-month-of-spending?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-14, 23:40:00](https://yro.slashdot.org/story/25/03/14/2128204/us-irs-to-re-evaluate-modernization-investments-in-light-of-ai-technology?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [US IRS To Re-Evaluate Modernization Investments In Light of AI Technology](https://yro.slashdot.org/story/25/03/14/2128204/us-irs-to-re-evaluate-modernization-investments-in-light-of-ai-technology?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-14, 23:34:18](https://lobste.rs/s/1v580x/disclosing_youtube_creator_emails_for) - [Disclosing YouTube Creator Emails for a $20k Bounty](https://brutecat.com/articles/youtube-creator-emails)
* [2025-03-14, 23:34:00](https://soylentnews.org/article.pl?sid=25/03/14/0056219&from=rss) - [The Cheapest Way to Supercharge America's Power Grid](https://soylentnews.org/article.pl?sid=25/03/14/0056219&from=rss)
* [2025-03-14, 23:21:18](https://news.ycombinator.com/item?id=43368365) - ['Once in a Century' Proof Settles Math's Kakeya Conjecture](https://www.quantamagazine.org/once-in-a-century-proof-settles-maths-kakeya-conjecture-20250314/)
* [2025-03-14, 23:09:40](https://lobste.rs/s/3dvymp/sicl_fresh_implementation_common_lisp) - [SICL: Fresh Implementation of Common Lisp](https://github.com/robert-strandh/SICL)
* [2025-03-14, 23:00:00](https://tech.slashdot.org/story/25/03/14/2121205/google-is-officially-replacing-assistant-with-gemini?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google Is Officially Replacing Assistant With Gemini](https://tech.slashdot.org/story/25/03/14/2121205/google-is-officially-replacing-assistant-with-gemini?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-14, 22:20:00](https://yro.slashdot.org/story/25/03/14/2113257/everything-you-say-to-your-echo-will-be-sent-to-amazon-starting-on-march-28?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Everything You Say To Your Echo Will Be Sent To Amazon Starting On March 28](https://yro.slashdot.org/story/25/03/14/2113257/everything-you-say-to-your-echo-will-be-sent-to-amazon-starting-on-march-28?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-14, 21:40:00](https://slashdot.org/story/25/03/14/2034209/strava-bans-user-for-running-in-north-korea?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Strava Bans User for Running in North Korea](https://slashdot.org/story/25/03/14/2034209/strava-bans-user-for-running-in-north-korea?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-14, 21:27:25](https://news.ycombinator.com/item?id=43367482) - [Show HN: Web Audio Spring-Mass Synthesis](https://blog.cochlea.xyz/string.html)
* [2025-03-14, 21:25:24](https://lobste.rs/s/l6ignk/matching_regexps_200_times_faster) - [Matching Regexps 200 Times Faster](https://eregon.me/blog/2025/03/14/matching-regexps-200-times-faster.html)
* [2025-03-14, 21:00:00](https://slashdot.org/story/25/03/14/2027208/ai-summaries-are-coming-to-notepad?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [AI Summaries Are Coming To Notepad](https://slashdot.org/story/25/03/14/2027208/ai-summaries-are-coming-to-notepad?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-14, 20:46:34](https://lobste.rs/s/tp9nd9/ruby_debugging_tips_recommendations) - [Ruby Debugging Tips and Recommendations in 2025](https://railsatscale.com/2025-03-14-ruby-debugging-tips-and-recommendations-2025/)
* [2025-03-14, 20:26:26](https://lobste.rs/s/dckdk4/shellcode_encoded_uuids) - [Shellcode Encoded in UUIDs](https://isc.sans.edu/diary/31752)
* [2025-03-14, 20:20:00](https://developers.slashdot.org/story/25/03/14/2020232/jpmorgan-engineers-efficiency-jumps-as-much-as-20-from-using-coding-assistant?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [JPMorgan Engineers' Efficiency Jumps as Much as 20% From Using Coding Assistant](https://developers.slashdot.org/story/25/03/14/2020232/jpmorgan-engineers-efficiency-jumps-as-much-as-20-from-using-coding-assistant?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-14, 19:47:12](https://news.ycombinator.com/item?id=43366479) - [Kerning, the Hard Way](https://home.octetfont.com/blog/kerning-hard.html)
* [2025-03-14, 19:44:11](https://lobste.rs/s/fvm1xn/kerning_hard_way) - [Kerning, the Hard Way](https://home.octetfont.com/blog/kerning-hard.html)
* [2025-03-14, 18:47:00](https://soylentnews.org/article.pl?sid=25/03/13/1729224&from=rss) - [Humans Have a Third Set of Teeth: Scientists Discover Medicine to Grow Them](https://soylentnews.org/article.pl?sid=25/03/13/1729224&from=rss)
* [2025-03-14, 18:40:00](https://tech.slashdot.org/story/25/03/14/1746200/var-technology-faces-backlash-following-champions-league-controversy?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [VAR Technology Faces Backlash Following Champions League Controversy](https://tech.slashdot.org/story/25/03/14/1746200/var-technology-faces-backlash-following-champions-league-controversy?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-14, 18:37:37](https://lobste.rs/s/eo4avr/how_beat_nes_mario_0_000005_seconds) - [How to beat NES mario in 0.000005 seconds](https://www.youtube.com/watch?v=pK7hU-ovUso)
* [2025-03-14, 18:35:47](https://news.ycombinator.com/item?id=43365734) - [Exo: Exocompilation for productive programming of hardware accelerators](https://github.com/exo-lang/exo)
* [2025-03-14, 18:24:41](https://lobste.rs/s/mhlu10/pi_search_page) - [The Pi-Search Page](http://angio.net/pi)
* [2025-03-14, 18:02:00](https://slashdot.org/story/25/03/14/1732237/china-announces-generative-ai-labeling-to-cull-disinformation?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [China Announces Generative AI Labeling To Cull Disinformation](https://slashdot.org/story/25/03/14/1732237/china-announces-generative-ai-labeling-to-cull-disinformation?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-14, 17:51:44](https://lobste.rs/s/9jyyx3/time_i_recreated_photoshop_c) - [That time I recreated Photoshop in C++](https://f055.net/technology/that-time-i/that-time-i-recreated-photoshop-in-c/)
* [2025-03-14, 17:45:33](https://news.ycombinator.com/item?id=43365083) - [Decrypting encrypted files from Akira ransomware using a bunch of GPUs](https://tinyhack.com/2025/03/13/decrypting-encrypted-files-from-akira-ransomware-linux-esxi-variant-2024-using-a-bunch-of-gpus/)
* [2025-03-14, 17:20:00](https://slashdot.org/story/25/03/14/179218/no-one-knows-what-the-hell-an-ai-agent-is?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['No One Knows What the Hell an AI Agent Is'](https://slashdot.org/story/25/03/14/179218/no-one-knows-what-the-hell-an-ai-agent-is?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-14, 17:12:18](https://news.ycombinator.com/item?id=43364715) - [The curious surge of productivity in U.S. restaurants](https://bfi.uchicago.edu/working-papers/the-curious-surge-of-productivity-in-u-s-restaurants/)
* [2025-03-14, 16:10:04](https://news.ycombinator.com/item?id=43364016) - [Samsung Q990D unresponsive after 1020 firmware update](https://us.community.samsung.com/t5/Home-Theater/Samsung-Q990D-unresponsive-after-1020-firmware-update/td-p/3168571)
* [2025-03-14, 15:10:25](https://lobste.rs/s/hxbjug/did_u_ever_read_so_hard_u_accidentally) - [did u ever read so hard u accidentally wrote?](https://blog.danslimmon.com/2025/03/14/did-u-ever-read-so-hard-u-accidentally-wrote/)
* [2025-03-14, 15:03:01](https://news.ycombinator.com/item?id=43363293) - [Why do transit agencies keep falling for the hydrogen bus myth?](https://cleantechnica.com/2025/03/13/why-do-transit-agencies-keep-falling-for-the-hydrogen-bus-myth/)
* [2025-03-14, 14:58:32](https://news.ycombinator.com/item?id=43363247) - [Block Diffusion: Interpolating between autoregressive and diffusion models](https://arxiv.org/abs/2503.09573)
* [2025-03-14, 14:39:00](https://news.ycombinator.com/item?id=43363056) - [I'm Peter Roberts, immigration attorney who does work for YC and startups. AMA](https://news.ycombinator.com/item?id=43363056)
* [2025-03-14, 14:36:23](https://news.ycombinator.com/item?id=43363031) - [Briar: Peer to Peer Encrypted Messaging](https://briarproject.org/how-it-works/)
* [2025-03-14, 14:01:00](https://soylentnews.org/article.pl?sid=25/03/13/150217&from=rss) - [Why Attention Limitations Let Idea Thieves Thrive in Workplaces](https://soylentnews.org/article.pl?sid=25/03/13/150217&from=rss)
* [2025-03-14, 13:34:33](https://lobste.rs/s/fwr4xh/my_scammer_girlfriend_baiting_romance) - [My Scammer Girlfriend: Baiting A Romance Fraudster](https://www.bentasker.co.uk/posts/blog/security/seducing-a-romance-scammer.html)
* [2025-03-14, 13:01:17](https://lobste.rs/s/c7t7kz/look_at_firefox_forks) - [A look at Firefox forks](https://lwn.net/Articles/1012453/)
* [2025-03-14, 12:25:04](https://news.ycombinator.com/item?id=43361959) - [A look at Firefox forks](https://lwn.net/Articles/1012453/)
* [2025-03-14, 12:20:26](https://lobste.rs/s/zu67of/pam_unixsock) - [PAM unixsock](https://miek.nl/2025/march/14/pam-unixsock/)
* [2025-03-14, 12:07:06](https://news.ycombinator.com/item?id=43361822) - [Apple will soon support encrypted RCS messaging with Android users](https://www.theverge.com/news/629620/apple-iphone-e2ee-encryption-rcs-messaging-android)
* [2025-03-14, 11:49:39](https://lobste.rs/s/qkqyf4/introduction_magit_emacs_mode_for_git) - [An introduction to Magit, an Emacs mode for Git](https://www.masteringemacs.org/article/introduction-magit-emacs-mode-git)
* [2025-03-14, 11:45:15](https://lobste.rs/s/ybqek7/tinykvm_fastest_sandbox) - [TinyKVM: The Fastest Sandbox](https://info.varnish-software.com/blog/tinykvm-the-fastest-sandbox)
* [2025-03-14, 10:27:58](https://lobste.rs/s/l4tc7w/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/l4tc7w/what_are_you_doing_this_weekend)
* [2025-03-14, 10:22:09](https://lobste.rs/s/emajqr/enhancing_ca_practices_key_updates) - [Enhancing CA Practices: Key Updates in Mozilla Root Store Policy, v3.0](https://blog.mozilla.org/security/2025/03/12/enhancing-ca-practices-key-updates-in-mozilla-root-store-policy-v3-0/)
* [2025-03-14, 09:14:00](https://soylentnews.org/article.pl?sid=25/03/13/1011234&from=rss) - [General Fusion Fires Up its Newest Steampunk Fusion Reactor](https://soylentnews.org/article.pl?sid=25/03/13/1011234&from=rss)
* [2025-03-14, 08:33:52](https://lobste.rs/s/ix1yqo/i_cant_believe_its_not_webusb_hacking) - [i-cant-believe-its-not-webusb: Hacking around lack of WebUSB support in Firefox](https://github.com/ArcaneNibble/i-cant-believe-its-not-webusb)
* [2025-03-14, 08:32:49](https://lobste.rs/s/lomwgf/coq_rust_formal_verification_tool_for) - [coq-of-rust: Formal verification tool for Rust](https://github.com/formal-land/coq-of-rust)
* [2025-03-14, 07:09:00](https://lobste.rs/s/ve6gyy/recursion_kills_story_behind_cve_2024) - [Recursion kills: The story behind CVE-2024-8176 / Expat 2.7.0 released, includes security fixes](https://blog.hartwork.org/posts/expat-2-7-0-released/)
* [2025-03-14, 04:29:00](https://soylentnews.org/article.pl?sid=25/03/12/190247&from=rss) - [This ‘Dune’ Isn't Fiction. It's the Longest Conveyer Belt in the US and Moving Sand in Texas](https://soylentnews.org/article.pl?sid=25/03/12/190247&from=rss)
* [2025-03-14, 03:46:11](https://news.ycombinator.com/item?id=43359412) - [Athena landed in a dark crater where the temperature was minus 280° F / 173° C](https://arstechnica.com/space/2025/03/athena-landed-in-a-dark-crater-where-the-temperature-was-minus-280-f/)
* [2025-03-13, 23:42:00](https://soylentnews.org/article.pl?sid=25/03/12/196239&from=rss) - [ASML To Open Beijing Facility Despite US Sanctions On China](https://soylentnews.org/article.pl?sid=25/03/12/196239&from=rss)
* [2025-03-13, 22:58:42](https://lobste.rs/s/ozgd5s/can_we_communally_deprecate_git_checkout) - [Can we communally deprecate git checkout?](https://mirawelner.com/posts/checkout.html)
* [2025-03-13, 22:36:40](https://lobste.rs/s/lni15k/what_programming_concepts_do_you) - [What Programming Concepts do you Struggle to Grok or Use in Production?](https://lobste.rs/s/lni15k/what_programming_concepts_do_you)
* [2025-03-13, 18:57:00](https://soylentnews.org/article.pl?sid=25/03/12/193232&from=rss) - [Psychological 'Booster Shots' Can Strengthen Resistance to Misinformation Over Time](https://soylentnews.org/article.pl?sid=25/03/12/193232&from=rss)
* [2025-03-13, 14:10:00](https://soylentnews.org/breakingnews/article.pl?sid=25/03/13/102242&from=rss) - [Mozilla Warns Users to Update Firefox Before Certificate Expires](https://soylentnews.org/breakingnews/article.pl?sid=25/03/13/102242&from=rss)
* [2025-03-13, 09:21:00](https://soylentnews.org/article.pl?sid=25/03/12/1855238&from=rss) - [Woolly Mice Are Cute and Impressive – but They Won't Bring Back Mammoths](https://soylentnews.org/article.pl?sid=25/03/12/1855238&from=rss)
* [2025-03-13, 06:02:28](https://news.ycombinator.com/item?id=43350733) - [Rembrandt to Picasso: Five ways to spot a fake masterpiece](https://www.bbc.com/culture/article/20250311-rembrandt-to-picasso-five-ways-to-spot-a-fake-masterpiece)
* [2025-03-13, 04:37:00](https://soylentnews.org/article.pl?sid=25/03/12/1139205&from=rss) - [Rust Drivers Expected to Become More Common in Linux Kernel](https://soylentnews.org/article.pl?sid=25/03/12/1139205&from=rss)
* [2025-03-12, 23:52:00](https://soylentnews.org/article.pl?sid=25/03/12/1134222&from=rss) - [Majorana 1: Microsoft Under Fire For Claiming It Has A New Quantum Computer](https://soylentnews.org/article.pl?sid=25/03/12/1134222&from=rss)
* [2025-03-12, 19:09:00](https://soylentnews.org/article.pl?sid=25/03/12/1129229&from=rss) - [DOGE Axes CISA ‘Red Team’ Staffers Amid Ongoing Federal Cuts](https://soylentnews.org/article.pl?sid=25/03/12/1129229&from=rss)
* [2025-03-12, 14:21:00](https://soylentnews.org/article.pl?sid=25/03/11/1158203&from=rss) - [Where Will the 'Blood Moon' Total Lunar Eclipse be Visible in March 2025?](https://soylentnews.org/article.pl?sid=25/03/11/1158203&from=rss)
* [2025-03-12, 09:35:00](https://soylentnews.org/article.pl?sid=25/03/11/1150225&from=rss) - [PHP-CGI RCE Flaw Exploited in Attacks on Japan's Tech, Telecom, and E-Commerce Sectors](https://soylentnews.org/article.pl?sid=25/03/11/1150225&from=rss)
* [2025-03-12, 05:27:40](https://news.ycombinator.com/item?id=43340222) - [An Egyptian Temple Reborn](https://archaeology.org/issues/march-april-2025/features/an-egyptian-temple-reborn/)
* [2025-03-12, 04:50:00](https://soylentnews.org/article.pl?sid=25/03/11/1148251&from=rss) - [Political Poll News Site 538 to Close Amid Larger Shuttering Across ABC and Disney](https://soylentnews.org/article.pl?sid=25/03/11/1148251&from=rss)
* [2025-03-12, 00:05:00](https://soylentnews.org/article.pl?sid=25/03/11/1138232&from=rss) - [Stars Made From Only Primordial Gas Finally Spotted](https://soylentnews.org/article.pl?sid=25/03/11/1138232&from=rss)
* [2025-03-11, 19:23:00](https://soylentnews.org/article.pl?sid=25/03/11/1134214&from=rss) - [How to Build a Static Website on a Raspberry Pi](https://soylentnews.org/article.pl?sid=25/03/11/1134214&from=rss)
* [2025-03-11, 17:49:15](https://news.ycombinator.com/item?id=43335144) - [Can a Geothermal Startup Vaporize Rock to Drill the Deepest Holes?](https://www.msn.com/en-us/money/markets/can-a-geothermal-startup-vaporize-rock-to-drill-the-deepest-holes-ever/ar-AA1AoaWT)
* [2025-03-11, 16:43:00](https://news.ycombinator.com/item?id=43334320) - [It doesn't cost much to improve someone's life](https://ourworldindata.org/foreign-aid-donations-increase)
* [2025-03-11, 14:34:00](https://soylentnews.org/article.pl?sid=25/03/11/1132214&from=rss) - [Musk Complains: X Site Under Attack, and DOGE Interferes With His Job](https://soylentnews.org/article.pl?sid=25/03/11/1132214&from=rss)
* [2025-03-11, 12:40:55](https://news.ycombinator.com/item?id=43331847) - [RubyLLM: A delightful Ruby way to work with AI](https://github.com/crmne/ruby_llm)
* [2025-03-11, 12:18:25](https://news.ycombinator.com/item?id=43331706) - [So Long and Thanks for All the Words: A Toast to Douglas Adams](https://multiverseemployeehandbook.com/blog/adams-birthday-toast/)
* [2025-03-11, 10:31:53](https://news.ycombinator.com/item?id=43331048) - [Fitness Trackers Are Only 67% Accurate, New Research Finds](https://wellnesspulse.com/research/accuracy-of-fitness-trackers/)
* [2025-03-11, 10:15:21](https://news.ycombinator.com/item?id=43330954) - [Why do some birds mimic the sounds of other species?](https://www.allaboutbirds.org/news/why-do-some-birds-mimic-the-sounds-of-other-species/)
* [2025-03-11, 09:50:00](https://soylentnews.org/article.pl?sid=25/03/11/0428255&from=rss) - [A Paleoarchaean Impact Crater in the Pilbara Craton, Western Australia](https://soylentnews.org/article.pl?sid=25/03/11/0428255&from=rss)
* [2025-03-11, 09:48:14](https://news.ycombinator.com/item?id=43330796) - [Switching to BunnyCDN in Less Than 2 Hours](https://jonathan-frere.com/posts/switching-to-bunny-cdn)
* [2025-03-11, 05:06:00](https://soylentnews.org/article.pl?sid=25/03/10/1151258&from=rss) - [Microsoft Admits GitHub Used to Store Malware That Infected Almost a Million Devices](https://soylentnews.org/article.pl?sid=25/03/10/1151258&from=rss)
* [2025-03-11, 00:20:00](https://soylentnews.org/article.pl?sid=25/03/10/0732259&from=rss) - [US Supreme Court Weakens Rules on Discharge of Raw Sewage Into Water Supplies](https://soylentnews.org/article.pl?sid=25/03/10/0732259&from=rss)
