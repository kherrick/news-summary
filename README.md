# [News Summary](https://kherrick.github.io/news-summary/)

## Online Privacy and Security

* [Show HN: Use Their ID – Use Your Local UK MP's ID for the Online Safety Act](https://use-their-id.com/) ([Comments](https://news.ycombinator.com/item?id=44716106))

* [VPN use surges in UK as new online safety rules kick in](https://www.ft.com/content/356674b0-9f1d-4f95-b1d5-f27570379a9b) ([Comments](https://news.ycombinator.com/item?id=44706653))

* [Google's New Security Project 'OSS Rebuild' Tackles Package Supply Chain Verification](https://news.slashdot.org/story/25/07/28/0254233/googles-new-security-project-oss-rebuild-tackles-package-supply-chain-verification?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=44716106))

* [A Surveillance Vendor Was Caught Exploiting a New SS7 Attack to Track People's Phone Locations](https://soylentnews.org/article.pl?sid=25/07/23/1249230&from=rss) ([Comments](https://news.ycombinator.com/item?id=44692487))

## Advancements in AI and Robotics

* [Tesla Signs $16.5 Billion Contract With Samsung To Make AI Chips](https://hardware.slashdot.org/story/25/07/28/207225/tesla-signs-165-billion-contract-with-samsung-to-make-ai-chips?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=44714994))

* [Robot hand could harvest blackberries better than humans](https://news.uark.edu/articles/79750/robot-hand-could-harvest-blackberries-better-than-humans) ([Comments](https://news.ycombinator.com/item?id=44714954))

* [Chinese Universities Want Students To Use More AI, Not Less](https://news.slashdot.org/story/25/07/28/1732217/chinese-universities-want-students-to-use-more-ai-not-less?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=44713757))

* [Principles for production AI agents](https://www.app.build/blog/six-principles-production-ai-agents) ([Comments](https://news.ycombinator.com/item?id=44712315))

## Significant Technological Developments

* [I designed my own fast game streaming video codec – PyroWave](https://themaister.net/blog/2025/06/16/i-designed-my-own-ridiculously-fast-game-streaming-video-codec-pyrowave/) ([Comments](https://news.ycombinator.com/item?id=44714914))

* [Testing the GCC-based Rust compiler(backend)](https://fractalfir.github.io/generated_html/cg_gcc_bootstrap_2.html) ([Comments](https://lobste.rs/s/59sgaj/testing_gcc_based_rust_compiler_backend))

* [SIMD within a register: How I doubled hash table lookup performance](https://maltsev.space/blog/012-simd-within-a-register-how-i-doubled-hash-table-lookup-performance) ([Comments](https://news.ycombinator.com/item?id=44707546))

* [Cyberattack Cripples Russian Airline Aeroflot](https://it.slashdot.org/story/25/07/28/2018201/cyberattack-cripples-russian-airline-aeroflot?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=44715391))

## Cultural and Societal Highlights

* [George Lucas Makes First Comic-Con Appearance to Discuss His Upcoming 'Museum of Narrative Art'](https://entertainment.slashdot.org/story/25/07/28/0047248/george-lucas-makes-first-comic-con-appearance-to-discuss-his-upcoming-museum-of-narrative-art?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=44708028))

* [Tom Lehrer, Satirical Songwriter and Mathematician, Dies at Age 97](https://entertainment.slashdot.org/story/25/07/27/2347205/tom-lehrer-satirical-songwriter-and-mathematician-dies-at-age-97?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=44705445))

* [Inventor Claims Bleach Injections will Destroy Cancer Tumors](https://soylentnews.org/article.pl?sid=25/07/26/1844226&from=rss) ([Comments](https://news.ycombinator.com/item?id=44693007))

* [Can a Country Be Too Rich? Norway Is Finding Out](https://news.slashdot.org/story/25/07/28/1350217/can-a-country-be-too-rich-norway-is-finding-out?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=44711532))

## Miscellaneous Innovations and Ideas

* [Copyparty – Turn almost any device into a file server](https://github.com/9001/copyparty) ([Comments](https://news.ycombinator.com/item?id=44711519))

* [Shrinkle – Shrink words, find hidden phrase](https://www.shrinkle.org/) ([Comments](https://news.ycombinator.com/item?id=44714167))

* [‘I witnessed war crimes’ in Gaza – former worker at GHF aid site [video]](https://www.bbc.com/news/videos/cy8k8045nx9o) ([Comments](https://news.ycombinator.com/item?id=44714221))

* [How I hacked my washing machine](https://nexy.blog/2025/07/27/how-i-hacked-my-washing-machine/) ([Comments](https://lobste.rs/s/0hadx0/how_i_hacked_my_washing_machine))

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

* [2025-07-28, 21:49:10](https://news.ycombinator.com/item?id=44716106) - [Show HN: Use Their ID – Use Your Local UK MP&apos;s ID for the Online Safety Act](https://use-their-id.com/)
* [2025-07-28, 21:30:00](https://mobile.slashdot.org/story/25/07/28/2024254/say-goodbye-to-your-custom-roms-as-samsungs-one-ui-8-kills-bootloader-unlock?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Say Goodbye To Your Custom ROMs As Samsung&apos;s One UI 8 Kills Bootloader Unlock](https://mobile.slashdot.org/story/25/07/28/2024254/say-goodbye-to-your-custom-roms-as-samsungs-one-ui-8-kills-bootloader-unlock?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-28, 20:50:00](https://it.slashdot.org/story/25/07/28/2018201/cyberattack-cripples-russian-airline-aeroflot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cyberattack Cripples Russian Airline Aeroflot](https://it.slashdot.org/story/25/07/28/2018201/cyberattack-cripples-russian-airline-aeroflot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-28, 20:44:26](https://news.ycombinator.com/item?id=44715391) - [The Useless UseCallback](https://tkdodo.eu/blog/the-useless-use-callback)
* [2025-07-28, 20:24:38](https://news.ycombinator.com/item?id=44715166) - [Sign in with Google in Chrome](https://underpassapp.com/news/2025/7/5.html)
* [2025-07-28, 20:10:04](https://news.ycombinator.com/item?id=44714994) - [Why not Matrix (2024)](https://benharri.org/why-not-matrix/)
* [2025-07-28, 20:10:00](https://hardware.slashdot.org/story/25/07/28/207225/tesla-signs-165-billion-contract-with-samsung-to-make-ai-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tesla Signs $16.5 Billion Contract With Samsung To Make AI Chips](https://hardware.slashdot.org/story/25/07/28/207225/tesla-signs-165-billion-contract-with-samsung-to-make-ai-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-28, 20:06:03](https://news.ycombinator.com/item?id=44714954) - [Robot hand could harvest blackberries better than humans](https://news.uark.edu/articles/79750/robot-hand-could-harvest-blackberries-better-than-humans)
* [2025-07-28, 20:01:26](https://news.ycombinator.com/item?id=44714914) - [I designed my own fast game streaming video codec – PyroWave](https://themaister.net/blog/2025/06/16/i-designed-my-own-ridiculously-fast-game-streaming-video-codec-pyrowave/)
* [2025-07-28, 19:28:17](https://lobste.rs/s/ucvpt5/i_designed_my_own_ridiculously_fast_game) - [I designed my own ridiculously fast game streaming video codec](https://themaister.net/blog/2025/06/16/i-designed-my-own-ridiculously-fast-game-streaming-video-codec-pyrowave/)
* [2025-07-28, 19:05:47](https://news.ycombinator.com/item?id=44714223) - [Different Clocks](https://ianto-cannon.github.io/clock.html)
* [2025-07-28, 19:05:41](https://news.ycombinator.com/item?id=44714221) - [‘I witnessed war crimes’ in Gaza – former worker at GHF aid site [video]](https://www.bbc.com/news/videos/cy8k8045nx9o)
* [2025-07-28, 19:02:38](https://news.ycombinator.com/item?id=44714167) - [Shrinkle – Shrink words, find hidden phrase](https://www.shrinkle.org/)
* [2025-07-28, 19:01:46](https://lobste.rs/s/hffqyh/bevy_production_building_modeling_at) - [Bevy in Production: Building Modeling at Metabuild](https://www.youtube.com/watch?v=16r9plbAhXo)
* [2025-07-28, 18:27:51](https://news.ycombinator.com/item?id=44713757) - [Claude Code weekly rate limits](https://news.ycombinator.com/item?id=44713757)
* [2025-07-28, 18:12:00](https://slashdot.org/story/25/07/28/1812229/microsoft-adds-copilot-mode-to-edge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Adds Copilot Mode To Edge](https://slashdot.org/story/25/07/28/1812229/microsoft-adds-copilot-mode-to-edge?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-28, 18:09:17](https://news.ycombinator.com/item?id=44713579) - [Interstellar Comet 3I/Atlas: What We Know Now](https://skyandtelescope.org/astronomy-news/interstellar-comet-3i-atlas-what-we-know-now/)
* [2025-07-28, 18:03:34](https://lobste.rs/s/regzyw/giving_benchmarks_boat) - [Giving Benchmarks a Boat](https://buttondown.com/jaffray/archive/giving-benchmarks-a-boat/)
* [2025-07-28, 17:53:52](https://news.ycombinator.com/item?id=44713414) - [Visa and Mastercard are getting overwhelmed by gamer fury over censorship](https://www.polygon.com/news/616835/visa-mastercard-steam-itchio-campaign-adult-games)
* [2025-07-28, 17:32:00](https://news.slashdot.org/story/25/07/28/1732217/chinese-universities-want-students-to-use-more-ai-not-less?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chinese Universities Want Students To Use More AI, Not Less](https://news.slashdot.org/story/25/07/28/1732217/chinese-universities-want-students-to-use-more-ai-not-less?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-28, 17:11:00](https://soylentnews.org/article.pl?sid=25/07/26/1924256&amp;from=rss) - [AMD CEO Says U.S.-Made TSMC Chips Are More Expensive, But Worth It](https://soylentnews.org/article.pl?sid=25/07/26/1924256&amp;from=rss)
* [2025-07-28, 17:00:38](https://lobste.rs/s/nled17/jeopardy_world) - [Jeopardy! world](https://hauleth.dev/post/jeopardy-world/)
* [2025-07-28, 16:53:00](https://news.slashdot.org/story/25/07/28/1653234/nearly-half-of-us-venture-capital-professionals-in-middle-to-senior-positions-have-no-successful-investments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nearly Half of US Venture Capital Professionals in Middle To Senior Positions Have No Successful Investments](https://news.slashdot.org/story/25/07/28/1653234/nearly-half-of-us-venture-capital-professionals-in-middle-to-senior-positions-have-no-successful-investments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-28, 16:29:27](https://lobste.rs/s/59sgaj/testing_gcc_based_rust_compiler_backend) - [Testing the GCC-based Rust compiler(backend)](https://fractalfir.github.io/generated_html/cg_gcc_bootstrap_2.html)
* [2025-07-28, 16:19:03](https://news.ycombinator.com/item?id=44712315) - [Principles for production AI agents](https://www.app.build/blog/six-principles-production-ai-agents)
* [2025-07-28, 16:18:49](https://news.ycombinator.com/item?id=44712311) - [I saved a PNG image to a bird](https://www.youtube.com/watch?v=hCQCP-5g5bo)
* [2025-07-28, 16:18:45](https://lobste.rs/s/bqwfhe/on_designing_application_uis_for) - [On designing application UIs for children](https://shaneosullivan.wordpress.com/2025/07/28/on-designing-for-children/)
* [2025-07-28, 16:07:00](https://tech.slashdot.org/story/25/07/28/166238/windows-11-is-a-minefield-of-micro-aggressions-in-the-shipping-lane-of-progress?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Windows 11 is a &apos;Minefield of Micro-aggressions in the Shipping Lane of Progress&apos;](https://tech.slashdot.org/story/25/07/28/166238/windows-11-is-a-minefield-of-micro-aggressions-in-the-shipping-lane-of-progress?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-28, 15:22:00](https://tech.slashdot.org/story/25/07/28/1521248/security-researchers-find-evidence-skyrover-x1-is-disguised-dji-product?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Security Researchers Find Evidence SkyRover X1 Is Disguised DJI Product](https://tech.slashdot.org/story/25/07/28/1521248/security-researchers-find-evidence-skyrover-x1-is-disguised-dji-product?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-28, 15:21:13](https://news.ycombinator.com/item?id=44711745) - [Simplify, then add delightness: On designing for children](https://shaneosullivan.wordpress.com/2025/07/28/on-designing-for-children/)
* [2025-07-28, 15:06:00](https://news.ycombinator.com/item?id=44711612) - [FDA has approved Yeztugo, a drug that provides protection against HIV infection](https://newatlas.com/infectious-diseases/hiv-prevention-fda-lenacapavir/)
* [2025-07-28, 14:57:55](https://news.ycombinator.com/item?id=44711519) - [Copyparty – Turn almost any device into a file server](https://github.com/9001/copyparty)
* [2025-07-28, 14:40:00](https://news.slashdot.org/story/25/07/28/1350217/can-a-country-be-too-rich-norway-is-finding-out?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Can a Country Be Too Rich? Norway Is Finding Out](https://news.slashdot.org/story/25/07/28/1350217/can-a-country-be-too-rich-norway-is-finding-out?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-28, 14:36:39](https://news.ycombinator.com/item?id=44711306) - [Tao on “blue team” vs. “red team” LLMs](https://mathstodon.xyz/@tao/114915604830689046)
* [2025-07-28, 14:21:42](https://lobste.rs/s/iesijl/following_up_on_python_jit) - [Following up on the Python JIT](https://lwn.net/Articles/1029307/)
* [2025-07-28, 14:15:52](https://news.ycombinator.com/item?id=44711106) - [GLM-4.5: Reasoning, Coding, and Agentic Abililties](https://z.ai/blog/glm-4.5)
* [2025-07-28, 14:11:35](https://news.ycombinator.com/item?id=44711075) - [AI Companion Piece](https://thezvi.substack.com/p/ai-companion-piece)
* [2025-07-28, 14:00:00](https://science.slashdot.org/story/25/07/28/1336248/ageing-accelerates-at-around-age-50---some-organs-faster-than-others?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ageing Accelerates at Around Age 50 - Some Organs Faster Than Others](https://science.slashdot.org/story/25/07/28/1336248/ageing-accelerates-at-around-age-50---some-organs-faster-than-others?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-28, 13:10:00](https://news.ycombinator.com/item?id=44710533) - [The Geological Sublime](https://harpers.org/archive/2025/07/the-geological-sublime-lewis-hyde-deep-time/)
* [2025-07-28, 13:05:37](https://lobste.rs/s/r44lr9/ai_tool_i_find_useful) - [An AI tool I find useful](https://notes.billmill.org/blog/2025/07/An_AI_tool_I_find_useful.html)
* [2025-07-28, 12:30:00](https://soylentnews.org/article.pl?sid=25/07/26/192237&amp;from=rss) - [Inventor Claims Bleach Injections will Destroy Cancer Tumors](https://soylentnews.org/article.pl?sid=25/07/26/192237&amp;from=rss)
* [2025-07-28, 12:06:27](https://lobste.rs/s/jdd06m/no_moar_cookies) - [No moar cookies](https://paretosecurity.com/blog/no-moar-cookies/)
* [2025-07-28, 11:34:00](https://news.slashdot.org/story/25/07/28/0254233/googles-new-security-project-oss-rebuild-tackles-package-supply-chain-verification?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s New Security Project &apos;OSS Rebuild&apos; Tackles Package Supply Chain Verification](https://news.slashdot.org/story/25/07/28/0254233/googles-new-security-project-oss-rebuild-tackles-package-supply-chain-verification?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-28, 10:13:07](https://lobste.rs/s/bwpn8i/simd_within_register_how_i_doubled_hash) - [SIMD Within a Register: How I Doubled Hash Table Lookup Performance](https://maltsev.space/blog/012-simd-within-a-register-how-i-doubled-hash-table-lookup-performance)
* [2025-07-28, 10:10:41](https://lobste.rs/s/2ftfd1/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/2ftfd1/what_are_you_doing_this_week)
* [2025-07-28, 10:02:36](https://lobste.rs/s/gzsg8m/how_make_websites_will_require_lots_your) - [How to Make Websites That Will Require Lots of Your Time and Energy](https://blog.jim-nielsen.com/2025/how-to-make-websites-that-require-lots-of-time-and-energy/)
* [2025-07-28, 10:02:14](https://lobste.rs/s/i4hxlc/approve_merge_requests_with_your_eyes) - [Approve merge requests with your eyes closed](https://blog.jse.li/posts/approval/)
* [2025-07-28, 08:22:10](https://lobste.rs/s/8reksn/bard_shell) - [The Bard and The Shell](https://journal.bsd.cafe/2025/07/28/the-bard-and-the-shell/)
* [2025-07-28, 07:45:00](https://soylentnews.org/article.pl?sid=25/07/26/1848241&amp;from=rss) - [Coding, Remote Work and Rehabilitation](https://soylentnews.org/article.pl?sid=25/07/26/1848241&amp;from=rss)
* [2025-07-28, 07:41:41](https://news.ycombinator.com/item?id=44708270) - [How to make websites that will require lots of your time and energy](https://blog.jim-nielsen.com/2025/how-to-make-websites-that-require-lots-of-time-and-energy/)
* [2025-07-28, 07:41:11](https://lobste.rs/s/zs2xhp/redditor_speculates_eu_age_verification) - [Redditor Speculates that EU age verification app to ban any Android system not licensed by Google](https://www.reddit.com/r/degoogle/comments/1mau7yl/eu_age_verification_app_to_ban_any_android_system/)
* [2025-07-28, 07:34:00](https://science.slashdot.org/story/25/07/28/043232/astronomers-use-black-holes-to-pinpoint-earths-location-but-are-phones-and-wifi-blocking-the-view?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Astronomers Use Black Holes to Pinpoint Earth&apos;s Location.  But are Phones and Wifi Blocking the View?](https://science.slashdot.org/story/25/07/28/043232/astronomers-use-black-holes-to-pinpoint-earths-location-but-are-phones-and-wifi-blocking-the-view?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-28, 07:02:14](https://news.ycombinator.com/item?id=44708028) - [LLM Embeddings Explained: A Visual and Intuitive Guide](https://huggingface.co/spaces/hesamation/primer-llm-embedding)
* [2025-07-28, 06:39:26](https://lobste.rs/s/yornw7/many_javascript_runtimes_last_decade) - [The many JavaScript runtimes of the last decade](https://buttondown.com/whatever_jamie/archive/the-many-many-many-javascript-runtimes-of-the-last-decade/)
* [2025-07-28, 06:28:23](https://lobste.rs/s/4clcyb/yalep_micro_language_based_on_lean_for) - [Yalep - Micro language based on Lean for teaching mathematical high-school proofs](https://gricad-gitlab.univ-grenoble-alpes.fr/yalep/Yalep)
* [2025-07-28, 05:41:34](https://news.ycombinator.com/item?id=44707546) - [SIMD within a register: How I doubled hash table lookup performance](https://maltsev.space/blog/012-simd-within-a-register-how-i-doubled-hash-table-lookup-performance)
* [2025-07-28, 05:40:42](https://lobste.rs/s/eqmttb/trane) - [[trane]](https://lisp.trane.studio/?tutor)
* [2025-07-28, 03:34:00](https://entertainment.slashdot.org/story/25/07/28/0047248/george-lucas-makes-first-comic-con-appearance-to-discuss-his-upcoming-museum-of-narrative-art?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [George Lucas Makes First Comic-Con Appearance to Discuss His Upcoming &apos;Museum of Narrative Art&apos;](https://entertainment.slashdot.org/story/25/07/28/0047248/george-lucas-makes-first-comic-con-appearance-to-discuss-his-upcoming-museum-of-narrative-art?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-28, 03:27:34](https://lobste.rs/s/zqinhx/programming_languages_application) - [Programming Languages: Application and Interpretation (3rd edition)](https://www.plai.org)
* [2025-07-28, 02:58:00](https://soylentnews.org/article.pl?sid=25/07/26/1844226&amp;from=rss) - [Google Sues Operators of 10-Million-Device Badbox 2.0 Botnet](https://soylentnews.org/article.pl?sid=25/07/26/1844226&amp;from=rss)
* [2025-07-28, 02:33:04](https://news.ycombinator.com/item?id=44706653) - [VPN use surges in UK as new online safety rules kick in](https://www.ft.com/content/356674b0-9f1d-4f95-b1d5-f27570379a9b)
* [2025-07-28, 01:39:00](https://games.slashdot.org/story/25/07/28/0057226/easy-ntsync-arrives-for-steam-users-with-ge-proton-1010?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Easy NTSYNC Arrives For Steam Users With GE-Proton 10.10](https://games.slashdot.org/story/25/07/28/0057226/easy-ntsync-arrives-for-steam-users-with-ge-proton-1010?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-28, 00:18:58](https://lobste.rs/s/hua8nl/enough_ai_copilots_we_need_ai_huds) - [Enough AI copilots! We need AI HUDs](https://www.geoffreylitt.com/2025/07/27/enough-ai-copilots-we-need-ai-huds)
* [2025-07-27, 23:49:00](https://entertainment.slashdot.org/story/25/07/27/2347205/tom-lehrer-satirical-songwriter-and-mathematician-dies-at-age-97?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tom Lehrer, Satirical Songwriter and Mathematician, Dies at Age 97](https://entertainment.slashdot.org/story/25/07/27/2347205/tom-lehrer-satirical-songwriter-and-mathematician-dies-at-age-97?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-27, 22:51:28](https://news.ycombinator.com/item?id=44705445) - [Enough AI copilots, we need AI HUDs](https://www.geoffreylitt.com/2025/07/27/enough-ai-copilots-we-need-ai-huds)
* [2025-07-27, 22:15:00](https://soylentnews.org/article.pl?sid=25/07/26/1830254&amp;from=rss) - [The Cells That Breathe Two Ways](https://soylentnews.org/article.pl?sid=25/07/26/1830254&amp;from=rss)
* [2025-07-27, 21:02:28](https://lobste.rs/s/0hadx0/how_i_hacked_my_washing_machine) - [How I hacked my washing machine](https://nexy.blog/2025/07/27/how-i-hacked-my-washing-machine/)
* [2025-07-27, 19:13:03](https://lobste.rs/s/ehq72u/revontuli_colorscheme_collection) - [Revontuli Colorscheme Collection](https://codeberg.org/akselmo/Revontuli)
* [2025-07-27, 19:01:16](https://lobste.rs/s/jqm47i/til_exception_add_note) - [TIL: Exception.add_note](https://daniel.feldroy.com/posts/til-2025-05-exception-add_note)
* [2025-07-27, 17:37:00](https://soylentnews.org/article.pl?sid=25/07/26/1613246&amp;from=rss) - [UK To Ban Making Ransomware Payments For Some Organizations](https://soylentnews.org/article.pl?sid=25/07/26/1613246&amp;from=rss)
* [2025-07-27, 12:22:19](https://lobste.rs/s/m8ytbz/jj_vcs_workshop_zero_hero_speedrun) - [The JJ VCS Workshop: A Zero-to-Hero Speedrun](https://github.com/jkoppel/jj-workshop)
* [2025-07-27, 11:47:00](https://soylentnews.org/article.pl?sid=25/07/26/0330200&amp;from=rss) - [Japan Bets Big on Ultrathin, Ultralight Solar Panels](https://soylentnews.org/article.pl?sid=25/07/26/0330200&amp;from=rss)
* [2025-07-27, 06:54:49](https://lobste.rs/s/lfovd1/development_shells_with_nix_four_quick) - [Development shells with Nix: four quick examples](https://michael.stapelberg.ch/posts/2025-07-27-dev-shells-with-nix-4-quick-examples/)
* [2025-07-27, 06:50:00](https://soylentnews.org/article.pl?sid=25/07/26/0153214&amp;from=rss) - [WD Makes Click Of Death A Feature](https://soylentnews.org/article.pl?sid=25/07/26/0153214&amp;from=rss)
* [2025-07-27, 02:06:00](https://soylentnews.org/article.pl?sid=25/07/26/0146240&amp;from=rss) - [Social Media Is Dead – Here’s What Comes Next](https://soylentnews.org/article.pl?sid=25/07/26/0146240&amp;from=rss)
* [2025-07-26, 21:19:00](https://soylentnews.org/article.pl?sid=25/07/26/0136203&amp;from=rss) - [Tesla Continues Slide As Musk Warns Of \&quot;Rough Quarters\&quot; Ahead](https://soylentnews.org/article.pl?sid=25/07/26/0136203&amp;from=rss)
* [2025-07-26, 16:32:00](https://soylentnews.org/article.pl?sid=25/07/26/0131222&amp;from=rss) - [AI Industry&apos;s Size Obsession Is Killing ROI, Engineer Argues](https://soylentnews.org/article.pl?sid=25/07/26/0131222&amp;from=rss)
* [2025-07-26, 11:43:00](https://soylentnews.org/article.pl?sid=25/07/25/0534229&amp;from=rss) - [Work Less, Feel Better](https://soylentnews.org/article.pl?sid=25/07/25/0534229&amp;from=rss)
* [2025-07-26, 06:58:00](https://soylentnews.org/article.pl?sid=25/07/25/0511234&amp;from=rss) - [Debian Linux \&quot;Trixie\&quot; is Planned to Release on August 9](https://soylentnews.org/article.pl?sid=25/07/25/0511234&amp;from=rss)
* [2025-07-26, 02:54:46](https://news.ycombinator.com/item?id=44690914) - [SQLx – Rust SQL Toolkit](https://github.com/launchbadge/sqlx)
* [2025-07-26, 02:14:00](https://soylentnews.org/article.pl?sid=25/07/25/055215&amp;from=rss) - [Low(er) Price Tesla Announced](https://soylentnews.org/article.pl?sid=25/07/25/055215&amp;from=rss)
* [2025-07-25, 21:31:00](https://soylentnews.org/article.pl?sid=25/07/25/0459237&amp;from=rss) - [NASA Scientist Finds Predicted Companion Star to Betelgeuse - NASA](https://soylentnews.org/article.pl?sid=25/07/25/0459237&amp;from=rss)
* [2025-07-25, 14:44:00](https://soylentnews.org/article.pl?sid=25/07/24/1036232&amp;from=rss) - [Doctors Used Music Instead of Medication for Dementia Treatment](https://soylentnews.org/article.pl?sid=25/07/24/1036232&amp;from=rss)
* [2025-07-25, 12:38:31](https://news.ycombinator.com/item?id=44682451) - [Cells that breathe oxygen and sulfur at the same time](https://www.quantamagazine.org/the-cells-that-breathe-two-ways-20250723/)
* [2025-07-25, 11:08:45](https://news.ycombinator.com/item?id=44681858) - [Terminal app can now run full graphical Linux apps in the latest Android Canary](https://www.androidauthority.com/linux-terminal-graphical-apps-3580905/)
* [2025-07-25, 10:01:00](https://soylentnews.org/article.pl?sid=25/07/24/1032215&amp;from=rss) - [Welcome to DebConf25 - the 26th Debian Linux Conference](https://soylentnews.org/article.pl?sid=25/07/24/1032215&amp;from=rss)
* [2025-07-25, 05:17:00](https://soylentnews.org/article.pl?sid=25/07/24/1027254&amp;from=rss) - [&apos;I Destroyed Months of Your Work in Seconds&apos; Says AI Coding Tool ](https://soylentnews.org/article.pl?sid=25/07/24/1027254&amp;from=rss)
* [2025-07-25, 00:28:00](https://soylentnews.org/article.pl?sid=25/07/24/1023256&amp;from=rss) - [How the Space Shuttles Were Given Better Names Thanks to Star Trek](https://soylentnews.org/article.pl?sid=25/07/24/1023256&amp;from=rss)
* [2025-07-24, 20:35:04](https://news.ycombinator.com/item?id=44675771) - [NixOS on a Tuxedo InfinityBook Pro 14 Gen9 AMD Laptop](https://fnune.com/hardware/2025/07/20/nixos-on-a-tuxedo-infinitybook-pro-14-gen9-amd/)
* [2025-07-24, 19:41:00](https://soylentnews.org/article.pl?sid=25/07/24/0312243&amp;from=rss) - [mwm: An X11 Window Manager in 20 Lines of Code](https://soylentnews.org/article.pl?sid=25/07/24/0312243&amp;from=rss)
* [2025-07-24, 14:56:00](https://soylentnews.org/article.pl?sid=25/07/23/1245206&amp;from=rss) - [Real Milk Proteins, No Cows: Engineered Bacteria Pave the Way for Vegan Cheese and Yogurt](https://soylentnews.org/article.pl?sid=25/07/23/1245206&amp;from=rss)
* [2025-07-24, 10:15:00](https://soylentnews.org/meta/article.pl?sid=25/07/24/1019233&amp;from=rss) - [Bots, Spiders, Scrapers and AI - Connections to SN](https://soylentnews.org/meta/article.pl?sid=25/07/24/1019233&amp;from=rss)
* [2025-07-24, 10:11:00](https://soylentnews.org/article.pl?sid=25/07/23/1253202&amp;from=rss) - [Fearful of AI-Generated Grant Proposals, NIH Limits Scientists to Six Applications Per Year](https://soylentnews.org/article.pl?sid=25/07/23/1253202&amp;from=rss)
* [2025-07-24, 05:28:00](https://soylentnews.org/article.pl?sid=25/07/23/1249230&amp;from=rss) - [A Surveillance Vendor Was Caught Exploiting a New SS7 Attack to Track People&apos;s Phone Locations](https://soylentnews.org/article.pl?sid=25/07/23/1249230&amp;from=rss)
* [2025-07-24, 00:39:00](https://soylentnews.org/article.pl?sid=25/07/23/1254253&amp;from=rss) - [UPDATED: SharePoint Vulnerability With 9.8 Severity Rating Under Exploit Across Globe](https://soylentnews.org/article.pl?sid=25/07/23/1254253&amp;from=rss)
