# [News Summary](https://kherrick.github.io/news-summary/)

## Space and Technology Advancements

* [Hubble's Largest Panorama Ever Showcases 200 Million Stars](https://science.slashdot.org/story/25/01/25/0043227/hubbles-largest-panorama-ever-showcases-200-million-stars?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The Hubble Space Telescope reveals its most extensive and detailed panorama of stars ever captured, providing astronomers with an unprecedented view of the cosmos.

* [Ultra-Fast Cancer Treatments Could Replace Conventional Radiotherapy](https://science.slashdot.org/story/25/01/25/0020230/ultra-fast-cancer-treatments-could-replace-conventional-radiotherapy?utm_source=rss1.0mainlinkanon&utm_medium=feed) - New advancements in cancer treatments promise significant reductions in treatment times compared to conventional radiotherapy methods.

## Science and Health

* [Microplastics Block Blood Flow in the Brain, Mouse Study Reveals](https://science.slashdot.org/story/25/01/24/2348221/microplastics-block-blood-flow-in-the-brain-mouse-study-reveals?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Research finds that microplastics can severely restrict blood flow in the brain, sparking concerns over their health implications.

* [Oyster Blood: A New Frontier in Fighting Infection](https://soylentnews.org/article.pl?sid=25/01/23/1255246&from=rss) - Scientists discover healing properties in oyster blood that could revolutionize modern infection control.

## Cybersecurity and Data Breaches

* [UnitedHealth Data Breach Hits 190 Million Americans in Worst Healthcare Hack](https://yro.slashdot.org/story/25/01/24/2337254/unitedhealth-data-breach-hits-190-million-americans-in-worst-healthcare-hack?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A new healthcare data breach exposes sensitive data for 190 million individuals, marking it as one of the largest in history.

* [Google's official URL shortcut is compromised](https://gist.github.com/zachlatta/f86317493654b550c689dc6509973aa4) - A phishing campaign exploits Google's URL shortening service, raising alarms about its ongoing security vulnerabilities.

## Programming and Development Tools

* [Tutorials on Tinygrad](https://mesozoic-egg.github.io/tinygrad-notes/) - Dive into Tinygrad with a hands-on series of tutorials that make this lightweight machine learning library accessible to developers.

* [A WebAssembly compiler that fits in a tweet](https://wasmgroundup.com/blog/wasm-compiler-in-a-tweet/) - A minimalist WebAssembly compiler that demonstrates powerful engineering in an ultra-compact form.

## Cultural and Social Impacts

* [Trump Pardons Dark Web Silk Road Marketplace Founder Ross Ulbricht](https://soylentnews.org/article.pl?sid=25/01/24/1255245&from=rss) - Controversy reignites as former President Trump issues a pardon to the founder of the Silk Road dark web marketplace.

* [The Need for a Strategic Fact Reserve](https://soylentnews.org/article.pl?sid=25/01/21/0030206&from=rss) - An argument for creating a reserve of verified facts to tackle misinformation in the digital age.

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

* [2025-01-25, 10:00:00](https://science.slashdot.org/story/25/01/25/0043227/hubbles-largest-panorama-ever-showcases-200-million-stars?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Hubble's Largest Panorama Ever Showcases 200 Million Stars](https://science.slashdot.org/story/25/01/25/0043227/hubbles-largest-panorama-ever-showcases-200-million-stars?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-25, 09:40:00](https://soylentnews.org/article.pl?sid=25/01/24/1255245&from=rss) - [Trump Pardons Dark Web Silk Road Marketplace Founder Ross Ulbricht](https://soylentnews.org/article.pl?sid=25/01/24/1255245&from=rss)
* [2025-01-25, 09:03:22](https://lobste.rs/s/4rfoaj/c_26_pack_indexing) - [C++26: pack indexing](https://www.sandordargo.com/blog/2025/01/22/cpp26-pack-indexing)
* [2025-01-25, 08:48:42](https://news.ycombinator.com/item?id=42820421) - [Gongzilla: The collapsing cost of dumb ideas](https://everything.intellectronica.net/p/gongzilla)
* [2025-01-25, 08:23:32](https://lobste.rs/s/isrnzi/life_pro_tip_oracle_linux_is_best_local_vm) - [Life pro tip: Oracle Linux is the best local VM for MacBooks](https://xeiaso.net/notes/2025/k8s-dev-mac-oracle-linux/)
* [2025-01-25, 07:07:11](https://news.ycombinator.com/item?id=42820053) - [First Look: Loops, by Pixelfed – Decentralised TikTok Competitor (2024)](https://wedistribute.org/2024/11/loops-early-look/)
* [2025-01-25, 07:00:15](https://lobste.rs/s/sr126x/tutorials_on_tinygrad) - [Tutorials on Tinygrad](https://mesozoic-egg.github.io/tinygrad-notes/)
* [2025-01-25, 07:00:00](https://science.slashdot.org/story/25/01/25/0020230/ultra-fast-cancer-treatments-could-replace-conventional-radiotherapy?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Ultra-Fast Cancer Treatments Could Replace Conventional Radiotherapy](https://science.slashdot.org/story/25/01/25/0020230/ultra-fast-cancer-treatments-could-replace-conventional-radiotherapy?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-25, 06:42:24](https://lobste.rs/s/fibb44/regular_expressions_which_query_oracles) - [Regular Expressions which query Oracles](https://arxiv.org/abs/2410.13262)
* [2025-01-25, 04:54:00](https://soylentnews.org/article.pl?sid=25/01/24/1251214&from=rss) - [Opinion: We Need to Protect the Protocol That Runs Bluesky](https://soylentnews.org/article.pl?sid=25/01/24/1251214&from=rss)
* [2025-01-25, 03:38:52](https://news.ycombinator.com/item?id=42819262) - [TinyZero](https://github.com/Jiayi-Pan/TinyZero)
* [2025-01-25, 03:35:19](https://lobste.rs/s/wzevin/trying_out_zed_after_more_than_decade_vim) - [Trying out Zed after more than a decade of Vim/Neovim](https://sgoel.dev/posts/trying-out-zed-after-more-than-a-decade-of-vim-neovim/)
* [2025-01-25, 03:30:00](https://tech.slashdot.org/story/25/01/25/0011211/us-reviewing-automatic-emergency-braking-rule?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [US Reviewing Automatic Emergency Braking Rule](https://tech.slashdot.org/story/25/01/25/0011211/us-reviewing-automatic-emergency-braking-rule?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-25, 02:10:00](https://tech.slashdot.org/story/25/01/24/2356254/nvidia-starts-phasing-out-maxwell-pascal-and-volta-gpus?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Nvidia Starts Phasing Out Maxwell, Pascal, and Volta GPUs](https://tech.slashdot.org/story/25/01/24/2356254/nvidia-starts-phasing-out-maxwell-pascal-and-volta-gpus?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-25, 01:53:11](https://news.ycombinator.com/item?id=42818692) - [Caltrain's electric fleet more efficient than expected](https://www.caltrain.com/news/caltrains-electric-fleet-more-efficient-expected)
* [2025-01-25, 01:30:00](https://news.slashdot.org/story/25/01/24/2351234/british-museum-forced-to-partly-close-after-alleged-it-attack-by-former-employee?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [British Museum Forced To Partly Close After Alleged IT Attack By Former Employee](https://news.slashdot.org/story/25/01/24/2351234/british-museum-forced-to-partly-close-after-alleged-it-attack-by-former-employee?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-25, 00:51:00](https://science.slashdot.org/story/25/01/24/2348221/microplastics-block-blood-flow-in-the-brain-mouse-study-reveals?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microplastics Block Blood Flow in the Brain, Mouse Study Reveals](https://science.slashdot.org/story/25/01/24/2348221/microplastics-block-blood-flow-in-the-brain-mouse-study-reveals?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-25, 00:28:20](https://news.ycombinator.com/item?id=42818278) - [File Explorer is merged to Helix editor](https://github.com/helix-editor/helix/pull/11285)
* [2025-01-25, 00:23:34](https://news.ycombinator.com/item?id=42818248) - [You could have invented Fenwick trees](https://www.cambridge.org/core/journals/journal-of-functional-programming/article/you-could-have-invented-fenwick-trees/B4628279D4E54229CED97249E96F721D)
* [2025-01-25, 00:10:00](https://yro.slashdot.org/story/25/01/24/2337254/unitedhealth-data-breach-hits-190-million-americans-in-worst-healthcare-hack?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [UnitedHealth Data Breach Hits 190 Million Americans in Worst Healthcare Hack](https://yro.slashdot.org/story/25/01/24/2337254/unitedhealth-data-breach-hits-190-million-americans-in-worst-healthcare-hack?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-25, 00:09:00](https://soylentnews.org/article.pl?sid=25/01/24/1234214&from=rss) - [AI Workloads Spur Bigger Memory Drives](https://soylentnews.org/article.pl?sid=25/01/24/1234214&from=rss)
* [2025-01-24, 23:30:00](https://news.slashdot.org/story/25/01/24/2322249/crypto-czar-david-sacks-says-nfts-and-memecoins-are-collectibles-not-securities?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Crypto Czar David Sacks Says NFTs and Memecoins Are Collectibles, Not Securities](https://news.slashdot.org/story/25/01/24/2322249/crypto-czar-david-sacks-says-nfts-and-memecoins-are-collectibles-not-securities?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-24, 22:50:00](https://apple.slashdot.org/story/25/01/24/2113240/apple-enlists-veteran-software-executive-to-help-fix-ai-and-siri?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Enlists Veteran Software Executive To Help Fix AI and Siri](https://apple.slashdot.org/story/25/01/24/2113240/apple-enlists-veteran-software-executive-to-help-fix-ai-and-siri?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-24, 22:45:34](https://lobste.rs/s/2r41of/drunken_plagiarists_working_with_co) - [The Drunken Plagiarists - Working with Co-pilots](https://queue.acm.org/detail.cfm?id=3711675&doi=10.1145%2F3711675)
* [2025-01-24, 22:15:32](https://news.ycombinator.com/item?id=42817439) - [Show HN: Lightpanda, an open-source headless browser in Zig](https://github.com/lightpanda-io/browser)
* [2025-01-24, 22:15:16](https://news.ycombinator.com/item?id=42817438) - [Show HN: Onit – open-source ChatGPT Desktop with local mode, Claude, Gemini](https://github.com/synth-inc/onit)
* [2025-01-24, 22:10:00](https://ask.slashdot.org/story/25/01/24/2057209/ask-slashdot-what-matters-when-buying-a-new-smartphone?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Ask Slashdot: What Matters When Buying a New Smartphone?](https://ask.slashdot.org/story/25/01/24/2057209/ask-slashdot-what-matters-when-buying-a-new-smartphone?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-24, 22:09:44](https://lobste.rs/s/line1v/vic_20_elite) - [VIC-20 Elite](https://vic20elite.wordpress.com/)
* [2025-01-24, 21:53:00](https://news.ycombinator.com/item?id=42817277) - [Trying out Zed after more than a decade of Vim/Neovim](https://sgoel.dev/posts/trying-out-zed-after-more-than-a-decade-of-vim-neovim/)
* [2025-01-24, 21:44:09](https://lobste.rs/s/r3hhuz/restoring_trust_online_communication) - [Restoring Trust in Online Communication in a Post-LLM Era](https://lobste.rs/s/r3hhuz/restoring_trust_online_communication)
* [2025-01-24, 21:30:00](https://entertainment.slashdot.org/story/25/01/24/2052235/netflixs-cloud-plans-include-co-op-and-party-games?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Netflix's Cloud Plans Include Co-Op and Party Games](https://entertainment.slashdot.org/story/25/01/24/2052235/netflixs-cloud-plans-include-co-op-and-party-games?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-24, 20:50:00](https://games.slashdot.org/story/25/01/24/2046222/complexity-physics-finds-crucial-tipping-points-in-chess-games?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Complexity Physics Finds Crucial Tipping Points In Chess Games](https://games.slashdot.org/story/25/01/24/2046222/complexity-physics-finds-crucial-tipping-points-in-chess-games?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-24, 19:56:31](https://news.ycombinator.com/item?id=42816418) - [A very Chicago gamble](https://www.bitsaboutmoney.com/archive/chicago-casino-investment-offering/)
* [2025-01-24, 19:48:51](https://news.ycombinator.com/item?id=42816359) - [The hidden complexity of scaling WebSockets](https://composehq.com/blog/scaling-websockets-1-23-25)
* [2025-01-24, 19:24:00](https://soylentnews.org/article.pl?sid=25/01/23/1255246&from=rss) - [Oyster Blood: A New Frontier in Fighting Infection](https://soylentnews.org/article.pl?sid=25/01/23/1255246&from=rss)
* [2025-01-24, 18:50:00](https://it.slashdot.org/story/25/01/24/1851209/fbi-north-korean-it-workers-steal-source-code-to-extort-employers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [FBI: North Korean IT Workers Steal Source Code To Extort Employers](https://it.slashdot.org/story/25/01/24/1851209/fbi-north-korean-it-workers-steal-source-code-to-extort-employers?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-24, 18:32:38](https://lobste.rs/s/xu2de3/what_i_ve_learned_about_writing_ai_apps_so) - [What I've learned about writing AI apps so far](https://seldo.com/posts/what-ive-learned-about-writing-ai-apps-so-far)
* [2025-01-24, 18:19:35](https://news.ycombinator.com/item?id=42815755) - [Anatomy of a Formal Proof](https://www.ams.org/journals/notices/202502/noti3114/noti3114.html)
* [2025-01-24, 18:12:00](https://slashdot.org/story/25/01/24/1813201/walgreens-replaced-fridge-doors-with-smart-screens-its-now-a-200-million-fiasco?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Walgreens Replaced Fridge Doors With Smart Screens. It's Now a $200 Million Fiasco](https://slashdot.org/story/25/01/24/1813201/walgreens-replaced-fridge-doors-with-smart-screens-its-now-a-200-million-fiasco?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-24, 17:59:13](https://lobste.rs/s/1juvjj/wild_very_fast_linker_for_linux) - [wild: A very fast linker for Linux](https://github.com/davidlattimore/wild)
* [2025-01-24, 17:30:00](https://tech.slashdot.org/story/25/01/24/171242/electric-cars-in-uk-last-as-long-as-petrol-and-diesel-vehicles-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Electric Cars in UK Last as Long as Petrol and Diesel Vehicles, Study Finds](https://tech.slashdot.org/story/25/01/24/171242/electric-cars-in-uk-last-as-long-as-petrol-and-diesel-vehicles-study-finds?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-24, 17:21:44](https://news.ycombinator.com/item?id=42815288) - [Subpixel Snake [video]](https://www.youtube.com/watch?v=iDwganLjpW0)
* [2025-01-24, 17:07:21](https://lobste.rs/s/ymci71/tabboo_add_random_jumpscares_sites_you_re) - [TabBoo: Add random jumpscares to sites you're trying to avoid](https://tabboo.xyz/)
* [2025-01-24, 16:51:16](https://news.ycombinator.com/item?id=42814948) - [A WebAssembly compiler that fits in a tweet](https://wasmgroundup.com/blog/wasm-compiler-in-a-tweet/)
* [2025-01-24, 16:50:08](https://lobste.rs/s/aheves/webassembly_compiler_fits_tweet) - [A WebAssembly compiler that fits in a tweet](https://wasmgroundup.com/blog/wasm-compiler-in-a-tweet)
* [2025-01-24, 16:40:11](https://news.ycombinator.com/item?id=42814820) - [Snowdrop OS – a homebrew operating system from scratch, in assembly language](http://sebastianmihai.com/snowdrop/)
* [2025-01-24, 16:25:53](https://news.ycombinator.com/item?id=42814683) - [Wild – A fast linker for Linux](https://github.com/davidlattimore/wild)
* [2025-01-24, 16:06:40](https://lobste.rs/s/hgpo26/ui_is_hell_four_function_calculators) - [UI is hell: four-function calculators](https://lcamtuf.substack.com/p/ui-is-hell-four-function-calculators)
* [2025-01-24, 16:00:07](https://lobste.rs/s/zw14an/template_literal_types_typescript) - [Template literal types in TypeScript: parsing during type checking and more](https://2ality.com/2025/01/template-literal-types.html)
* [2025-01-24, 15:59:23](https://news.ycombinator.com/item?id=42814373) - [Cloud Virtualization: Red Hat, AWS Firecracker, and Ubicloud internals](https://www.ubicloud.com/blog/cloud-virtualization-red-hat-aws-firecracker-and-ubicloud-internals)
* [2025-01-24, 15:50:23](https://news.ycombinator.com/item?id=42814275) - [New book-sorting algorithm almost reaches perfection](https://www.quantamagazine.org/new-book-sorting-algorithm-almost-reaches-perfection-20250124/)
* [2025-01-24, 15:37:07](https://news.ycombinator.com/item?id=42814110) - [Show HN: Cs16.css – CSS library based on Counter Strike 1.6 UI](https://cs16.samke.me)
* [2025-01-24, 14:51:33](https://news.ycombinator.com/item?id=42813513) - [How I Use Home Assistant in 2025](https://vpetersson.com/2025/01/22/how-i-use-home-assistant-in-2025.html)
* [2025-01-24, 14:38:00](https://soylentnews.org/article.pl?sid=25/01/23/1249227&from=rss) - [Chinese Salt Typhoon Hackers 1st Spotted on Federal Networks Under Another Name](https://soylentnews.org/article.pl?sid=25/01/23/1249227&from=rss)
* [2025-01-24, 14:28:03](https://lobste.rs/s/jvruyj/tilde_my_llvm_alternative) - [Tilde, my LLVM alternative](https://yasserarg.com/tb)
* [2025-01-24, 14:25:01](https://lobste.rs/s/eei735/state_vim) - [The state of Vim](https://lwn.net/Articles/1002342/)
* [2025-01-24, 13:57:10](https://news.ycombinator.com/item?id=42813049) - [Every System is a Log: Avoiding coordination in distributed applications](https://restate.dev/blog/every-system-is-a-log-avoiding-coordination-in-distributed-applications/)
* [2025-01-24, 13:20:56](https://news.ycombinator.com/item?id=42812779) - [Ask HN: Why buy domains and 301 redirect them to me?](https://news.ycombinator.com/item?id=42812779)
* [2025-01-24, 13:19:35](https://lobste.rs/s/mbdy2j/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/mbdy2j/what_are_you_doing_this_weekend)
* [2025-01-24, 12:52:35](https://lobste.rs/s/a5vkze/build_it_yourself) - [Build It Yourself](https://lucumr.pocoo.org/2025/1/24/build-it-yourself/)
* [2025-01-24, 11:03:33](https://lobste.rs/s/ryhav2/mankier_html_man_pages) - [ManKier - HTML man pages](https://www.mankier.com/)
* [2025-01-24, 10:59:15](https://lobste.rs/s/mzcu6b/buzz_0_5_0_release) - [buzz 0.5.0 release](https://github.com/buzz-language/buzz/releases/tag/0.5.0)
* [2025-01-24, 09:53:00](https://soylentnews.org/article.pl?sid=25/01/23/1247207&from=rss) - [New California Law Criminalizing AI Generated Child Porn Claims First Arrest](https://soylentnews.org/article.pl?sid=25/01/23/1247207&from=rss)
* [2025-01-24, 09:44:08](https://lobste.rs/s/qy04po/google_s_official_url_shortcut_is) - [Google's official URL shortcut is compromised](https://gist.github.com/zachlatta/f86317493654b550c689dc6509973aa4)
* [2025-01-24, 09:30:55](https://lobste.rs/s/5m8vpa/results_big_array_size_survey_for_c) - [Results! - The Big Array Size Survey for C](https://thephd.dev/the-big-array-size-survey-for-c-results)
* [2025-01-24, 08:31:29](https://lobste.rs/s/whskpr/javascript_temporal_is_coming) - [JavaScript Temporal is coming](https://developer.mozilla.org/en-US/blog/javascript-temporal-is-coming/)
* [2025-01-24, 05:07:00](https://soylentnews.org/article.pl?sid=25/01/23/0458201&from=rss) - [Time to Check My Tire Pressures...Hand Me That Hammer](https://soylentnews.org/article.pl?sid=25/01/23/0458201&from=rss)
* [2025-01-24, 03:38:46](https://news.ycombinator.com/item?id=42810252) - [A phishing attack involving g.co, Google's URL shortener](https://gist.github.com/zachlatta/f86317493654b550c689dc6509973aa4)
* [2025-01-24, 00:22:00](https://soylentnews.org/article.pl?sid=25/01/23/0454218&from=rss) - [Google Is Now the East India Company of the Internet](https://soylentnews.org/article.pl?sid=25/01/23/0454218&from=rss)
* [2025-01-23, 20:53:11](https://lobste.rs/s/h8hv70/preview_fbounds_safety_is_now_accessible) - [The preview of -fbounds-safety is now accessible to the community](https://discourse.llvm.org/t/the-preview-of-fbounds-safety-is-now-accessible-to-the-community/84221)
* [2025-01-23, 19:38:00](https://soylentnews.org/article.pl?sid=25/01/23/0452251&from=rss) - [Microsoft To Force Windows 11 24H2 On Home And Pro Users](https://soylentnews.org/article.pl?sid=25/01/23/0452251&from=rss)
* [2025-01-23, 14:53:00](https://soylentnews.org/article.pl?sid=25/01/22/1845245&from=rss) - [Mind Control? Scientists Have Discovered How to Use Nanoparticles to Remotely Control Behavior](https://soylentnews.org/article.pl?sid=25/01/22/1845245&from=rss)
* [2025-01-23, 11:38:49](https://lobste.rs/s/tvqmjb/cvss_is_dead_us) - [CVSS is dead to us](https://daniel.haxx.se/blog/2025/01/23/cvss-is-dead-to-us/)
* [2025-01-23, 10:05:00](https://soylentnews.org/article.pl?sid=25/01/22/1845235&from=rss) - [TSMC Reportedly Pauses Production After Earthquake](https://soylentnews.org/article.pl?sid=25/01/22/1845235&from=rss)
* [2025-01-23, 05:22:00](https://soylentnews.org/article.pl?sid=25/01/22/1835217&from=rss) - [Findings Challenge Assumption That AI Will Soon Replace Human Doctors](https://soylentnews.org/article.pl?sid=25/01/22/1835217&from=rss)
* [2025-01-23, 00:35:00](https://soylentnews.org/article.pl?sid=25/01/21/1517219&from=rss) - [Not Sure What Font to Choose? Typography Study Helps Find the Right Type](https://soylentnews.org/article.pl?sid=25/01/21/1517219&from=rss)
* [2025-01-22, 19:51:00](https://soylentnews.org/article.pl?sid=25/01/21/1512214&from=rss) - [ISPs Must Offer Cheaper Internet To Low Income Households After Trying To Prevent It](https://soylentnews.org/article.pl?sid=25/01/21/1512214&from=rss)
* [2025-01-22, 19:23:48](https://news.ycombinator.com/item?id=42796496) - [Show HN: Trolling SMS spammers with Ollama](https://evan.widloski.com/software/sms_llm/)
* [2025-01-22, 18:01:18](https://news.ycombinator.com/item?id=42795646) - [Life lessons from the first half-century of my career](https://cacm.acm.org/opinion/life-lessons-from-the-first-half-century-of-my-career/)
* [2025-01-22, 15:08:00](https://soylentnews.org/article.pl?sid=25/01/21/159259&from=rss) - [How Unix Spell Ran in 64kB RAM](https://soylentnews.org/article.pl?sid=25/01/21/159259&from=rss)
* [2025-01-22, 12:24:13](https://news.ycombinator.com/item?id=42791994) - [Her dad, the 10k records he left behind and a viral lesson in grief](https://www.washingtonpost.com/style/2025/01/18/vinyl-albums-grief-music-healing/)
* [2025-01-22, 12:12:37](https://news.ycombinator.com/item?id=42791906) - [Urban legend: I think there is a world market for maybe five computers](https://geekhistory.com/content/urban-legend-i-think-there-world-market-maybe-five-computers)
* [2025-01-22, 09:22:00](https://soylentnews.org/article.pl?sid=25/01/21/1330227&from=rss) - [Reverse-Engineering a Carry-Lookahead Adder in the Pentium](https://soylentnews.org/article.pl?sid=25/01/21/1330227&from=rss)
* [2025-01-22, 05:24:03](https://news.ycombinator.com/item?id=42789323) - [Chatbox: Cross-platform desktop client for ChatGPT, Claude and other LLMs](https://github.com/Bin-Huang/chatbox)
* [2025-01-22, 04:37:00](https://soylentnews.org/article.pl?sid=25/01/21/1329212&from=rss) - [China to Pit 12,000 Humans Against Robots in World's First AI Marathon Race](https://soylentnews.org/article.pl?sid=25/01/21/1329212&from=rss)
* [2025-01-21, 23:54:00](https://soylentnews.org/article.pl?sid=25/01/21/1315246&from=rss) - [TSMC Ends Contract With Singapore-Based Company Over Alleged Huawei Ties](https://soylentnews.org/article.pl?sid=25/01/21/1315246&from=rss)
* [2025-01-21, 20:15:05](https://news.ycombinator.com/item?id=42784699) - [The FizzBuzz that did not get me the job](https://kranga.notion.site/The-fizzbuzz-that-did-not-get-me-the-job-180e7c22ef3b80c3a386f7f8de720ac7)
* [2025-01-21, 19:10:00](https://soylentnews.org/article.pl?sid=25/01/21/1311222&from=rss) - [DOJ Remotely Cleaned Thousands of Computers Infected With Chinese Malware](https://soylentnews.org/article.pl?sid=25/01/21/1311222&from=rss)
* [2025-01-21, 14:24:00](https://soylentnews.org/article.pl?sid=25/01/21/0044227&from=rss) - [Spacecraft Captures Spectacularly Detailed Images Of Mercury's Hidden Surface](https://soylentnews.org/article.pl?sid=25/01/21/0044227&from=rss)
* [2025-01-21, 12:22:26](https://news.ycombinator.com/item?id=42779330) - [Show HN: Using YOLO to Detect Office Chairs in 40M Hotel Photos](https://news.ycombinator.com/item?id=42779330)
* [2025-01-21, 09:39:00](https://soylentnews.org/article.pl?sid=25/01/21/0030206&from=rss) - [The Need for a Strategic Fact Reserve](https://soylentnews.org/article.pl?sid=25/01/21/0030206&from=rss)
* [2025-01-21, 04:56:00](https://soylentnews.org/article.pl?sid=25/01/20/2337224&from=rss) - [U.S. Satellites Reveal China's Solar Dominance](https://soylentnews.org/article.pl?sid=25/01/20/2337224&from=rss)
* [2025-01-21, 00:09:00](https://soylentnews.org/article.pl?sid=25/01/20/0732227&from=rss) - [Mark Zuckerberg Plans To Lay Off An Additional Five Percent Of Meta's Workforce](https://soylentnews.org/article.pl?sid=25/01/20/0732227&from=rss)
