# [News Summary](https://kherrick.github.io/news-summary/)

## Tech and Business Insights

* [I'm recomming my customers switch to Linux rather that Upgrade to Windows 11](https://www.scottrlarson.com/publications/publication-windows-move-towards-surveillance/) ([comments](https://news.ycombinator.com/item?id=45600338))

* [Waymo's Robotaxis Are Coming To London](https://tech.slashdot.org/story/25/10/15/2239222/waymos-robotaxis-are-coming-to-london?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://tech.slashdot.org/story/25/10/15/2239222/waymos-robotaxis-are-coming-to-london?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Mozilla Is Recruiting Beta Testers For a Free, Baked-In Firefox VPN](https://news.slashdot.org/story/25/10/15/2229217/mozilla-is-recruiting-beta-testers-for-a-free-baked-in-firefox-vpn?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.slashdot.org/story/25/10/15/2229217/mozilla-is-recruiting-beta-testers-for-a-free-baked-in-firefox-vpn?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Anthropic Aims To Nearly Triple Annualized Revenue In 2026](https://slashdot.org/story/25/10/15/2223200/anthropic-aims-to-nearly-triple-annualized-revenue-in-2026?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://slashdot.org/story/25/10/15/2223200/anthropic-aims-to-nearly-triple-annualized-revenue-in-2026?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [US Dept of Interior denies canceling largest solar project after axing review](https://www.utilitydive.com/news/department-interior-cancels-review-nevada-solar-project-trump/802704/) ([comments](https://news.ycombinator.com/item?id=45599496))

## Cybersecurity Threats and Innovations

* [China 'Stole Vast Amounts' of Classified UK Documents, Officials Say](https://news.slashdot.org/story/25/10/15/2254230/china-stole-vast-amounts-of-classified-uk-documents-officials-say?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.slashdot.org/story/25/10/15/2254230/china-stole-vast-amounts-of-classified-uk-documents-officials-say?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [F5 Says Nation-State Hackers Stole Source Code and Vulnerability Data](https://www.securityweek.com/f5-blames-nation-state-hackers-for-theft-of-source-code-and-vulnerability-data/amp/) ([comments](https://lobste.rs/s/8pbyxc/f5_says_nation_state_hackers_stole_source))

## Artificial Intelligence and Scientific Endeavors

* [Writing an LLM from scratch, part 22 – training our LLM](https://www.gilesthomas.com/2025/10/llm-from-scratch-22-finally-training-our-llm) ([comments](https://news.ycombinator.com/item?id=45599727))

* [A Gemma model helped discover a new potential cancer therapy pathway](https://blog.google/technology/ai/google-gemma-ai-cancer-therapy-discovery/) ([comments](https://news.ycombinator.com/item?id=45597006))

* [97% of Companies Struggle to Prove AI's ROI - but These 5 Expert Tips Can Help](https://soylentnews.org/article.pl?sid=25/10/13/233212&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/10/13/233212&from=rss))

## Breaking Barriers in Software Development

* [Why C variable argument functions are an abomination (and what to do about it)](https://h4x0r.org/vargs/) ([comments](https://lobste.rs/s/v96g77/why_c_variable_argument_functions_are))

* [Porting from Perl to Go: Simplifying for Platform Engineering](https://phoenixtrap.com/2025/10/05/brew-patch-upgrade-go-port/) ([comments](https://lobste.rs/s/ccj5nt/porting_from_perl_go_simplifying_for))

* [Testing Frozen String Literals in Production](https://intertwingly.net/blog/2025/10/15/Frozen-String-Literals.html) ([comments](https://lobste.rs/s/j4v4db/testing_frozen_string_literals))

## Cultural and Environmental Reflections

* [Green Solvents Could Unlock Plant Protein From Rapeseed Waste](https://soylentnews.org/article.pl?sid=25/10/13/2254230&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/10/13/2254230&from=rss))

* [Nobel Economics Prize Goes to 3 Researchers for Explaining Innovation-Driven Economic Growth](https://soylentnews.org/article.pl?sid=25/10/13/1540238&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/10/13/1540238&from=rss))

* [The Numbers Six and Seven Are Making Life Hell for Math Teachers](https://science.slashdot.org/story/25/10/15/1340240/the-numbers-six-and-seven-are-making-life-hell-for-math-teachers?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://science.slashdot.org/story/25/10/15/1340240/the-numbers-six-and-seven-are-making-life-hell-for-math-teachers?utm_source=rss1.0mainlinkanon&utm_medium=feed))

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

* [2025-10-16, 01:00:17](https://news.ycombinator.com/item?id=45600338) - [I&apos;m recomming my customers switch to Linux rather that Upgrade to Windows 11](https://www.scottrlarson.com/publications/publication-windows-move-towards-surveillance/)
* [2025-10-16, 01:00:00](https://news.slashdot.org/story/25/10/15/2254230/china-stole-vast-amounts-of-classified-uk-documents-officials-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China &apos;Stole Vast Amounts&apos; of Classified UK Documents, Officials Say](https://news.slashdot.org/story/25/10/15/2254230/china-stole-vast-amounts-of-classified-uk-documents-officials-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-16, 00:54:00](https://soylentnews.org/article.pl?sid=25/10/13/233212&amp;from=rss) - [97% of Companies Struggle to Prove AI&apos;s ROI - but These 5 Expert Tips Can Help](https://soylentnews.org/article.pl?sid=25/10/13/233212&amp;from=rss)
* [2025-10-16, 00:20:00](https://tech.slashdot.org/story/25/10/15/2239222/waymos-robotaxis-are-coming-to-london?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Waymo&apos;s Robotaxis Are Coming To London](https://tech.slashdot.org/story/25/10/15/2239222/waymos-robotaxis-are-coming-to-london?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-15, 23:42:12](https://news.ycombinator.com/item?id=45599727) - [Writing an LLM from scratch, part 22 – training our LLM](https://www.gilesthomas.com/2025/10/llm-from-scratch-22-finally-training-our-llm)
* [2025-10-15, 23:40:00](https://news.slashdot.org/story/25/10/15/2229217/mozilla-is-recruiting-beta-testers-for-a-free-baked-in-firefox-vpn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mozilla Is Recruiting Beta Testers For a Free, Baked-In Firefox VPN](https://news.slashdot.org/story/25/10/15/2229217/mozilla-is-recruiting-beta-testers-for-a-free-baked-in-firefox-vpn?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-15, 23:24:47](https://news.ycombinator.com/item?id=45599567) - [IRS Open Sources its Fact Graph](https://github.com/IRS-Public/fact-graph)
* [2025-10-15, 23:16:07](https://news.ycombinator.com/item?id=45599496) - [US Dept of Interior denies canceling largest solar project after axing review](https://www.utilitydive.com/news/department-interior-cancels-review-nevada-solar-project-trump/802704/)
* [2025-10-15, 23:00:00](https://slashdot.org/story/25/10/15/2223200/anthropic-aims-to-nearly-triple-annualized-revenue-in-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Aims To Nearly Triple Annualized Revenue In 2026](https://slashdot.org/story/25/10/15/2223200/anthropic-aims-to-nearly-triple-annualized-revenue-in-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-15, 22:28:55](https://news.ycombinator.com/item?id=45599084) - [ImapGoose](https://whynothugo.nl/journal/2025/10/15/introducing-imapgoose/)
* [2025-10-15, 22:28:11](https://news.ycombinator.com/item?id=45599075) - [How First Wap tracks phones around the world](https://www.lighthousereports.com/methodology/surveillance-secrets-explainer/)
* [2025-10-15, 22:20:00](https://it.slashdot.org/story/25/10/15/2214235/f5-says-hackers-stole-undisclosed-big-ip-flaws-source-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [F5 Says Hackers Stole Undisclosed BIG-IP Flaws, Source Code](https://it.slashdot.org/story/25/10/15/2214235/f5-says-hackers-stole-undisclosed-big-ip-flaws-source-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-15, 22:11:57](https://lobste.rs/s/3ujqcs/writing_json_parser_bqn) - [Writing a JSON Parser in BQN](https://tony-zorman.com/posts/bqn-json.html)
* [2025-10-15, 21:54:14](https://news.ycombinator.com/item?id=45598776) - [Acrobat is intrusive, slow and non-customizable](https://www.vincentuden.xyz/blog/pdf-reader)
* [2025-10-15, 21:41:45](https://lobste.rs/s/nla8ek/no_silver_bullets_why_understanding) - [No Silver Bullets: Why Understanding Software Cycle Time is Messy, Not Magic](https://johnflournoy.science/no-silver-bullets/)
* [2025-10-15, 21:32:19](https://news.ycombinator.com/item?id=45598590) - [Next Steps for the Caddy Project Maintainership](https://caddy.community/t/next-steps-for-the-caddy-project-maintainership/33076)
* [2025-10-15, 21:22:00](https://tech.slashdot.org/story/25/10/15/1818213/google-will-let-friends-help-you-recover-an-account?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Will Let Friends Help You Recover an Account](https://tech.slashdot.org/story/25/10/15/1818213/google-will-let-friends-help-you-recover-an-account?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-15, 20:41:00](https://tech.slashdot.org/story/25/10/15/1736225/reddit-cofounder-says-much-of-the-internet-is-now-dead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Reddit Cofounder Says &apos;Much of the Internet is Now Dead&apos;](https://tech.slashdot.org/story/25/10/15/1736225/reddit-cofounder-says-much-of-the-internet-is-now-dead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-15, 20:08:07](https://lobste.rs/s/dt0n7w/paneru_sliding_tiling_window_manager_for) - [Paneru - A sliding, tiling window manager for MacOS](https://github.com/karinushka/paneru)
* [2025-10-15, 20:03:00](https://soylentnews.org/article.pl?sid=25/10/13/2254230&amp;from=rss) - [Green Solvents Could Unlock Plant Protein From Rapeseed Waste](https://soylentnews.org/article.pl?sid=25/10/13/2254230&amp;from=rss)
* [2025-10-15, 20:01:00](https://news.slashdot.org/story/25/10/15/1713252/us-falls-out-of-top-10-on-list-of-the-worlds-most-powerful-passports?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Falls Out of Top 10 on List of the World&apos;s Most Powerful Passports](https://news.slashdot.org/story/25/10/15/1713252/us-falls-out-of-top-10-on-list-of-the-worlds-most-powerful-passports?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-15, 19:25:09](https://lobste.rs/s/bkoa67/i_am_sorry_everyone_is_getting_syntax) - [I am sorry, but everyone is getting syntax highlighting wrong](https://tonsky.me/blog/syntax-highlighting/)
* [2025-10-15, 19:22:00](https://news.slashdot.org/story/25/10/15/171238/government-told-to-prepare-for-2c-warming-by-2050?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Government Told To Prepare For 2C Warming By 2050](https://news.slashdot.org/story/25/10/15/171238/government-told-to-prepare-for-2c-warming-by-2050?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-15, 19:04:07](https://news.ycombinator.com/item?id=45597006) - [A Gemma model helped discover a new potential cancer therapy pathway](https://blog.google/technology/ai/google-gemma-ai-cancer-therapy-discovery/)
* [2025-10-15, 18:44:08](https://lobste.rs/s/xbrton/modifying_python_repl) - [Modifying the Python REPL](https://treyhunner.com/2025/10/handy-python-repl-modifications/)
* [2025-10-15, 18:40:00](https://news.slashdot.org/story/25/10/15/1654239/almost-70-of-us-adults-would-be-deemed-obese-based-on-new-definition-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Almost 70% of US Adults Would Be Deemed Obese Based on New Definition, Study Finds](https://news.slashdot.org/story/25/10/15/1654239/almost-70-of-us-adults-would-be-deemed-obese-based-on-new-definition-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-15, 18:00:00](https://science.slashdot.org/story/25/10/15/1340240/the-numbers-six-and-seven-are-making-life-hell-for-math-teachers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Numbers Six and Seven Are Making Life Hell for Math Teachers](https://science.slashdot.org/story/25/10/15/1340240/the-numbers-six-and-seven-are-making-life-hell-for-math-teachers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-15, 17:45:00](https://apple.slashdot.org/story/25/10/15/1745223/new-macbook-pro-does-not-include-a-charger-in-the-box-in-europe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New MacBook Pro Does Not Include a Charger in the Box in Europe](https://apple.slashdot.org/story/25/10/15/1745223/new-macbook-pro-does-not-include-a-charger-in-the-box-in-europe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-15, 17:43:27](https://news.ycombinator.com/item?id=45596059) - [Recursive Language Models (RLMs)](https://alexzhang13.github.io/blog/2025/rlm/)
* [2025-10-15, 17:42:11](https://lobste.rs/s/ysrvbn/cmux_coding_agent_multiplexer) - [cmux – Coding Agent Multiplexer](https://github.com/coder/cmux)
* [2025-10-15, 17:27:52](https://lobste.rs/s/8pbyxc/f5_says_nation_state_hackers_stole_source) - [F5 Says Nation-State Hackers Stole Source Code and Vulnerability Data](https://www.securityweek.com/f5-blames-nation-state-hackers-for-theft-of-source-code-and-vulnerability-data/amp/)
* [2025-10-15, 17:18:13](https://news.ycombinator.com/item?id=45595724) - [Are hard drives getting better?](https://www.backblaze.com/blog/are-hard-drives-getting-better-lets-revisit-the-bathtub-curve/)
* [2025-10-15, 17:09:56](https://lobste.rs/s/ccj5nt/porting_from_perl_go_simplifying_for) - [Porting from Perl to Go: Simplifying for Platform Engineering](https://phoenixtrap.com/2025/10/05/brew-patch-upgrade-go-port/)
* [2025-10-15, 16:55:06](https://news.ycombinator.com/item?id=45595403) - [Claude Haiku 4.5](https://www.anthropic.com/news/claude-haiku-4-5)
* [2025-10-15, 16:40:00](https://tech.slashdot.org/story/25/10/15/0933248/nearly-40-of-kids-under-2-years-old-interact-with-smartphones-according-to-their-parents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nearly 40% of Kids Under 2 Years Old Interact With Smartphones, According To Their Parents](https://tech.slashdot.org/story/25/10/15/0933248/nearly-40-of-kids-under-2-years-old-interact-with-smartphones-according-to-their-parents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-15, 16:24:29](https://news.ycombinator.com/item?id=45594920) - [Zed is now available on Windows](https://zed.dev/blog/zed-for-windows-is-here)
* [2025-10-15, 16:01:00](https://entertainment.slashdot.org/story/25/10/15/133206/japan-asks-openai-to-stop-sora-2-from-infringing-on-irreplaceable-treasures-anime-and-manga?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japan Asks OpenAI To Stop Sora 2 From Infringing on &apos;Irreplaceable Treasures&apos; Anime and Manga](https://entertainment.slashdot.org/story/25/10/15/133206/japan-asks-openai-to-stop-sora-2-from-infringing-on-irreplaceable-treasures-anime-and-manga?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-15, 15:41:58](https://lobste.rs/s/gmjcf0/pwning_entire_nix_ecosystem) - [Pwning the Entire Nix Ecosystem](https://ptrpa.ws/nixpkgs-actions-abuse)
* [2025-10-15, 15:33:54](https://lobste.rs/s/teve66/unfair_flips_world_record_strategy) - [Unfair Flips World Record Strategy](https://graham.build/s/a-blog/028-unfair-flips-world-record-strategy/)
* [2025-10-15, 15:20:00](https://apple.slashdot.org/story/25/10/15/1213242/apples-tim-cook-promises-to-boost-china-investment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple&apos;s Tim Cook Promises To Boost China Investment](https://apple.slashdot.org/story/25/10/15/1213242/apples-tim-cook-promises-to-boost-china-investment?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-15, 15:20:00](https://soylentnews.org/article.pl?sid=25/10/13/171230&amp;from=rss) - [Interstellar Object is Spraying Something Weird, Scientists Find](https://soylentnews.org/article.pl?sid=25/10/13/171230&amp;from=rss)
* [2025-10-15, 14:52:20](https://lobste.rs/s/v96g77/why_c_variable_argument_functions_are) - [Why C variable argument functions are an abomination (and what to do about it)](https://h4x0r.org/vargs/)
* [2025-10-15, 14:43:15](https://lobste.rs/s/ytv7mi/recreating_canon_cat_document_interface) - [Recreating the Canon Cat document interface](https://lab.alexanderobenauer.com/updates/the-jasper-report)
* [2025-10-15, 14:42:14](https://news.ycombinator.com/item?id=45593390) - [Recreating the Canon Cat document interface](https://lab.alexanderobenauer.com/updates/the-jasper-report)
* [2025-10-15, 13:52:15](https://news.ycombinator.com/item?id=45592585) - [A kernel stack use-after-free: Exploiting Nvidia&apos;s GPU Linux drivers](https://blog.quarkslab.com/./nvidia_gpu_kernel_vmalloc_exploit.html)
* [2025-10-15, 13:41:44](https://news.ycombinator.com/item?id=45592401) - [Pwning the Nix ecosystem](https://ptrpa.ws/nixpkgs-actions-abuse)
* [2025-10-15, 13:33:27](https://news.ycombinator.com/item?id=45592271) - [F5 says hackers stole undisclosed BIG-IP flaws, source code](https://www.bleepingcomputer.com/news/security/f5-says-hackers-stole-undisclosed-big-ip-flaws-source-code/)
* [2025-10-15, 13:02:53](https://news.ycombinator.com/item?id=45591799) - [Apple M5 chip](https://www.apple.com/newsroom/2025/10/apple-unleashes-m5-the-next-big-leap-in-ai-performance-for-apple-silicon/)
* [2025-10-15, 13:00:40](https://lobste.rs/s/j4v4db/testing_frozen_string_literals) - [Testing Frozen String Literals in Production](https://intertwingly.net/blog/2025/10/15/Frozen-String-Literals.html)
* [2025-10-15, 12:56:12](https://news.ycombinator.com/item?id=45591707) - [I almost got hacked by a &apos;job interview&apos;](https://blog.daviddodda.com/how-i-almost-got-hacked-by-a-job-interview)
* [2025-10-15, 12:50:12](https://lobste.rs/s/1kweb2/reverse_engineering_iwork) - [Reverse Engineering iWork](https://andrews.substack.com/p/reverse-engineering-iwork)
* [2025-10-15, 12:08:04](https://news.ycombinator.com/item?id=45591149) - [Garbage collection for Rust: The finalizer frontier](https://soft-dev.org/pubs/html/hughes_tratt__garbage_collection_for_rust_the_finalizer_frontier/)
* [2025-10-15, 12:07:35](https://lobste.rs/s/w3yzd2/garbage_collection_for_rust_finalizer) - [Garbage Collection for Rust: The Finalizer Frontier](https://soft-dev.org/pubs/html/hughes_tratt__garbage_collection_for_rust_the_finalizer_frontier/)
* [2025-10-15, 12:00:06](https://lobste.rs/s/twvpz9/osm_perfect_intersection_editor) - [OSM Perfect Intersection Editor](https://www.openstreetmap.org/user/Mikhail%20Kuzin/diary/407577)
* [2025-10-15, 11:45:47](https://news.ycombinator.com/item?id=45590949) - [Show HN: Halloy – Modern IRC client](https://github.com/squidowl/halloy)
* [2025-10-15, 11:20:35](https://news.ycombinator.com/item?id=45590756) - [Leaving serverless led to performance improvement and a simplified architecture](https://www.unkey.com/blog/serverless-exit)
* [2025-10-15, 10:53:13](https://lobste.rs/s/zqiy8l/why_export_templates_would_be_useful_c) - [Why export templates would be useful in C++ (2010)](http://warp.povusers.org/programming/export_templates.html)
* [2025-10-15, 10:35:00](https://soylentnews.org/article.pl?sid=25/10/13/1540238&amp;from=rss) - [Nobel Economics Prize Goes to 3 Researchers for Explaining Innovation-Driven Economic Growth](https://soylentnews.org/article.pl?sid=25/10/13/1540238&amp;from=rss)
* [2025-10-15, 09:34:29](https://lobste.rs/s/gbp005/when_you_opened_screen_shot_video_paint) - [When you opened a screen shot of a video in Paint, the video was playing in it](https://devblogs.microsoft.com/oldnewthing/20251014-00/?p=111681)
* [2025-10-15, 05:51:00](https://soylentnews.org/article.pl?sid=25/10/13/1457221&amp;from=rss) - [Warp Speed! How Some Galaxies Can Move Away From Us Faster Than Light](https://soylentnews.org/article.pl?sid=25/10/13/1457221&amp;from=rss)
* [2025-10-15, 05:16:10](https://lobste.rs/s/yzsv13/i_am_programmer_not_rubber_stamp_approves) - [I am a programmer, not a rubber-stamp that approves Copilot generated code](https://prahladyeri.github.io/blog/2025/10/i-am-a-programmer.html)
* [2025-10-15, 04:52:22](https://lobste.rs/s/g0oxmh/fsf_announces_librephone_project) - [FSF announces Librephone project](https://www.fsf.org/news/librephone-project)
* [2025-10-15, 01:02:00](https://soylentnews.org/article.pl?sid=25/10/13/1447222&amp;from=rss) - [Scientists Studied Ayahuasca Users—What They Found About Death](https://soylentnews.org/article.pl?sid=25/10/13/1447222&amp;from=rss)
* [2025-10-15, 00:07:29](https://lobste.rs/s/p6yk6b/binmoji_compact_lossless_64_bit_emoji) - [binmoji: a compact, lossless, 64-bit emoji encoding](https://github.com/jb55/binmoji)
* [2025-10-14, 23:47:08](https://news.ycombinator.com/item?id=45586339) - [FSF announces Librephone project](https://www.fsf.org/news/librephone-project)
* [2025-10-14, 20:20:00](https://soylentnews.org/article.pl?sid=25/10/13/0325250&amp;from=rss) - [A Unique Case of a Woman With Male Chromosomes in Her Blood](https://soylentnews.org/article.pl?sid=25/10/13/0325250&amp;from=rss)
* [2025-10-14, 20:11:19](https://lobste.rs/s/fpri94/dhh_problem_2014) - [The DHH Problem (2014)](https://tomstu.art/the-dhh-problem)
* [2025-10-14, 18:26:55](https://lobste.rs/s/roygg3/why_your_boss_isn_t_worried_about_ai_can_t) - [Why your boss isn&apos;t worried about AI - \&quot;can&apos;t you just turn it off?\&quot;](https://boydkane.com/essays/boss)
* [2025-10-14, 16:10:18](https://lobste.rs/s/xqk3yj/hold_off_on_litestream_0_5_0) - [Hold Off on Litestream 0.5.0](https://mtlynch.io/notes/hold-off-on-litestream-0.5.0/)
* [2025-10-14, 15:34:00](https://soylentnews.org/article.pl?sid=25/10/13/0319211&amp;from=rss) - [OpenAI and AMD Announce Multibillion-Dollar Partnership](https://soylentnews.org/article.pl?sid=25/10/13/0319211&amp;from=rss)
* [2025-10-14, 13:42:17](https://lobste.rs/s/pkowfh/meta_news_on_lix_october_2025) - [Meta news on Lix in October 2025](https://lix.systems/blog/2025-10-13-meta-lix-news/)
* [2025-10-14, 10:51:00](https://soylentnews.org/article.pl?sid=25/10/13/0313201&amp;from=rss) - [Cambridge University to Rescue Data Trapped on Old Floppy Disks](https://soylentnews.org/article.pl?sid=25/10/13/0313201&amp;from=rss)
* [2025-10-14, 06:11:00](https://soylentnews.org/article.pl?sid=25/10/12/1454236&amp;from=rss) - [Salesforce Hacked With Threat to Release 1 Billion Customer Records](https://soylentnews.org/article.pl?sid=25/10/12/1454236&amp;from=rss)
* [2025-10-14, 01:24:00](https://soylentnews.org/article.pl?sid=25/10/12/1446251&amp;from=rss) - [When the US Gov&apos;t Built High Quality Housing for Workers...](https://soylentnews.org/article.pl?sid=25/10/12/1446251&amp;from=rss)
* [2025-10-13, 20:41:00](https://soylentnews.org/article.pl?sid=25/10/12/1442253&amp;from=rss) - [What Past Education Tech Failures Can Teach Us About the Future of AI in Schools](https://soylentnews.org/article.pl?sid=25/10/12/1442253&amp;from=rss)
* [2025-10-13, 15:58:00](https://soylentnews.org/article.pl?sid=25/10/12/1437218&amp;from=rss) - [Nuclear Bombs on Drones: The Next Arms Race That Has Experts &apos;Very Concerned&apos;](https://soylentnews.org/article.pl?sid=25/10/12/1437218&amp;from=rss)
* [2025-10-13, 11:12:00](https://soylentnews.org/article.pl?sid=25/10/12/1414249&amp;from=rss) - [Here&apos;s How to See Two Newly Discovered Comets This Month](https://soylentnews.org/article.pl?sid=25/10/12/1414249&amp;from=rss)
* [2025-10-13, 06:24:00](https://soylentnews.org/article.pl?sid=25/10/12/1411214&amp;from=rss) - [Companies Are Making the Same Mistake With AI That Tesla Made With Robots](https://soylentnews.org/article.pl?sid=25/10/12/1411214&amp;from=rss)
* [2025-10-13, 01:39:00](https://soylentnews.org/article.pl?sid=25/10/12/141230&amp;from=rss) - [Using a Litter Box to Determine a Cat&apos;s Health](https://soylentnews.org/article.pl?sid=25/10/12/141230&amp;from=rss)
* [2025-10-12, 20:50:00](https://soylentnews.org/article.pl?sid=25/10/12/0052201&amp;from=rss) - [The FCC Will Allow ABC, CBS, FOX, &amp; NBC TV Stations Decide When Switch to ATSC 3.0](https://soylentnews.org/article.pl?sid=25/10/12/0052201&amp;from=rss)
* [2025-10-12, 16:05:00](https://soylentnews.org/article.pl?sid=25/10/11/148201&amp;from=rss) - [“Like Putting on Glasses for the First Time”—How AI Improves Earthquake Detection](https://soylentnews.org/article.pl?sid=25/10/11/148201&amp;from=rss)
* [2025-10-12, 11:20:00](https://soylentnews.org/article.pl?sid=25/10/11/143225&amp;from=rss) - [Starlink Burns Up One to Two Satellites a Day](https://soylentnews.org/article.pl?sid=25/10/11/143225&amp;from=rss)
* [2025-10-12, 06:37:00](https://soylentnews.org/article.pl?sid=25/10/11/1348219&amp;from=rss) - [Discord Customer Service Data Breached; Government-ID Images, and User Details Stolen](https://soylentnews.org/article.pl?sid=25/10/11/1348219&amp;from=rss)
* [2025-10-12, 01:47:00](https://soylentnews.org/article.pl?sid=25/10/11/1340244&amp;from=rss) - [Covert Eavesdropping Through Computer Mice - the \&quot;Mic-E-Mouse\&quot;](https://soylentnews.org/article.pl?sid=25/10/11/1340244&amp;from=rss)
