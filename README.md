# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Making an SNES Game the Way Nintendo Intended](https://www.youtube.com/watch?v=kYLJLJkVfLk) - Explore how authentic tools from the SNES era are used to create a game exactly like developers did during Nintendo's heyday, a nostalgic and technical deep dive.

* [Tutorials on Tinygrad](https://mesozoic-egg.github.io/tinygrad-notes/) - A collection of guides to working with Tinygrad, a library that simplifies deep learning.

* [Wine 10.0 Brings Arm Windows Apps to Linux, Still Isn't an Emulator](https://soylentnews.org/article.pl?sid=25/01/24/1324218&from=rss) - Wine's latest update enhances cross-platform compatibility, enabling Arm Windows apps to run on Linux.

* [A WebAssembly compiler that fits in a tweet](https://wasmgroundup.com/blog/wasm-compiler-in-a-tweet) - This impressive compact WebAssembly compiler demonstrates the power of succinct coding.

* [Snowdrop OS – a homebrew operating system from scratch, in assembly language](http://sebastianmihai.com/snowdrop/) - Follow the journey of building an OS entirely from scratch using assembly language.

## Science and Health Advances

* [Ultra-Fast Cancer Treatments Could Replace Conventional Radiotherapy](https://science.slashdot.org/story/25/01/25/0020230/ultra-fast-cancer-treatments-could-replace-conventional-radiotherapy?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A promising new radiotherapy method could revolutionize cancer treatments by providing faster and more efficient options.

* [Microplastics Block Blood Flow in the Brain, Mouse Study Reveals](https://science.slashdot.org/story/25/01/24/2348221/microplastics-block-blood-flow-in-the-brain-mouse-study-reveals?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Alarming findings demonstrate how microplastics may impede cerebral blood flow, raising health concerns.

* [Hubble's Largest Panorama Ever Showcases 200 Million Stars](https://science.slashdot.org/story/25/01/25/0043227/hubbles-largest-panorama-ever-showcases-200-million-stars?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Marvel at this unprecedented cosmic image from Hubble, an awe-inspiring tapestry of our universe.

## Cybersecurity and Hacks

* [UnitedHealth Data Breach Hits 190 Million Americans in Worst Healthcare Hack](https://yro.slashdot.org/story/25/01/24/2337254/unitedhealth-data-breach-hits-190-million-americans-in-worst-healthcare-hack?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The largest healthcare data breach in U.S. history raises concerns about cybersecurity measures.

* [Hacker infects 18,000 "script kiddies" with fake malware builder](https://www.bleepingcomputer.com/news/security/hacker-infects-18-000-script-kiddies-with-fake-malware-builder/) - A creative hacker counters malicious users with counter-malware tricks, leading to an ironic twist.

## Sustainability and Energy

* [America Lags on Renewable Energy. Blame Regulations and Grid Connection Issues](https://news.slashdot.org/story/25/01/25/002249/america-lags-on-renewable-energy-blame-regulations-and-grid-connection-issues?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A critical look at why the U.S. struggles to keep pace with renewable energy adoption.

* [Researchers Say New Attack Could Take Down the European Power Grid](https://hardware.slashdot.org/story/25/01/25/0037206/researchers-say-new-attack-could-take-down-the-european-power-grid?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Experts warn of new vulnerabilities in the European power grid that could cause catastrophic outages.

## AI and Software Development

* [Show HN: Lightpanda, an open-source headless browser in Zig](https://github.com/lightpanda-io/browser) - Introducing Lightpanda, a fresh take on headless web browsing built using Zig programming language.

* [Trying out Zed after more than a decade of Vim/Neovim](https://sgoel.dev/posts/trying-out-zed-after-more-than-a-decade-of-vim-neovim/) - Reflections on switching from Vim to Zed after years of dedication, detailing the experiences and challenges.

## Curious Finds and Intriguing Stories

* [Doorbell camera catches rare footage of meteorite striking home's front walkway](https://www.cnn.com/2025/01/22/science/meteorite-strike-doorbell-camera/index.html) - A rare meteorite impact is captured on a home security camera, offering spectacular real-world footage.

* [The fizzbuzz that did not get me the job](https://kranga.notion.site/The-fizzbuzz-that-did-not-get-me-the-job-180e7c22ef3b80c3a386f7f8de720ac7) - An intriguing tale of the infamous FizzBuzz coding test and its unexpected consequences.

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

* [2025-01-25, 18:50:36](https://lobste.rs/s/jpdmbb/making_snes_game_way_nintendo_intended) - [Making an SNES Game the Way Nintendo Intended](https://www.youtube.com/watch?v=kYLJLJkVfLk)
* [2025-01-25, 18:34:00](https://tech.slashdot.org/story/25/01/25/0345200/ev-maker-canoo-goes-belly-up-after-moving-to-texas?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [EV Maker Canoo 'Goes Belly-Up After Moving to Texas'](https://tech.slashdot.org/story/25/01/25/0345200/ev-maker-canoo-goes-belly-up-after-moving-to-texas?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-25, 18:33:41](https://news.ycombinator.com/item?id=42823510) - [DOGE Takeover of USDS Allows Them to Surveil the US Government from the Inside](https://www.wired.com/story/doge-elon-musk/)
* [2025-01-25, 18:09:13](https://lobste.rs/s/1vgfey/sdl_3_2_0) - [SDL 3.2.0](https://github.com/libsdl-org/SDL/releases/tag/release-3.2.0)
* [2025-01-25, 17:35:35](https://lobste.rs/s/vmyk7d/composable_sql) - [Composable SQL](https://borretti.me/article/composable-sql)
* [2025-01-25, 17:34:00](https://tech.slashdot.org/story/25/01/25/0450205/people-are-hawking-tiktok-loading-phones-for-thousands-on-ebay-facrebook?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [People are Hawking TikTok-Loading Phones for Thousands on eBay, Facrebook](https://tech.slashdot.org/story/25/01/25/0450205/people-are-hawking-tiktok-loading-phones-for-thousands-on-ebay-facrebook?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-25, 16:59:35](https://news.ycombinator.com/item?id=42822825) - [Why North England is poor](https://tomforth.co.uk/whynorthenglandispoor/)
* [2025-01-25, 16:34:50](https://lobste.rs/s/0kmpkv/updated_freebsd_bhyve_companion_tools) - [Updated FreeBSD Bhyve Companion Tools](https://vermaden.wordpress.com/2024/06/23/freebsd-bhyve-companion-tools/)
* [2025-01-25, 16:34:00](https://hardware.slashdot.org/story/25/01/25/031258/bambu-labs-3d-printer-authorization-update-beta-sparks-concerns?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Bambu Labs' 3D Printer 'Authorization' Update Beta Sparks Concerns](https://hardware.slashdot.org/story/25/01/25/031258/bambu-labs-3d-printer-authorization-update-beta-sparks-concerns?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-25, 16:33:28](https://lobste.rs/s/zol11z/use_monoids_for_construction) - [Use Monoids for Construction](https://reasonablypolymorphic.com/blog/use-monoids/index.html)
* [2025-01-25, 15:34:00](https://news.slashdot.org/story/25/01/25/002249/america-lags-on-renewable-energy-blame-regulations-and-grid-connection-issues?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [America Lags on Renewable Energy. Blame Regulations and Grid Connection Issues](https://news.slashdot.org/story/25/01/25/002249/america-lags-on-renewable-energy-blame-regulations-and-grid-connection-issues?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-25, 14:47:33](https://news.ycombinator.com/item?id=42821922) - [Arsenal FC AI Research Engineer Job Posting](https://careers.arsenal.com/jobs/5434108-research-engineer)
* [2025-01-25, 14:45:15](https://news.ycombinator.com/item?id=42821911) - [Doorbell camera catches rare footage of meteorite striking home's front walkway](https://www.cnn.com/2025/01/22/science/meteorite-strike-doorbell-camera/index.html)
* [2025-01-25, 14:38:21](https://lobste.rs/s/qjzguh/fizzbuzz_did_not_get_me_job) - [The fizzbuzz that did not get me the job](https://kranga.notion.site/The-fizzbuzz-that-did-not-get-me-the-job-180e7c22ef3b80c3a386f7f8de720ac7)
* [2025-01-25, 14:31:45](https://lobste.rs/s/qsytzj/unix_print_driver_fun) - [Unix Print Driver Fun](https://jholloway.dev/posts/print-driver-fun/)
* [2025-01-25, 14:23:00](https://soylentnews.org/article.pl?sid=25/01/24/1324218&from=rss) - [Wine 10.0 Brings Arm Windows Apps to Linux, Still Isn't an Emulator](https://soylentnews.org/article.pl?sid=25/01/24/1324218&from=rss)
* [2025-01-25, 13:55:00](https://news.ycombinator.com/item?id=42821654) - [IEEE Credentialing Program](https://www.ieee.org/education/credentialing/index.html)
* [2025-01-25, 13:52:39](https://news.ycombinator.com/item?id=42821643) - [Show HN: Krita RGBA Tech – Exploring Filter Engines in Open-Source Art](https://github.com/Draneria/Toolkit-by-Draneria_Krita-Brushes)
* [2025-01-25, 13:47:52](https://news.ycombinator.com/item?id=42821611) - [Hacker infects 18,000 \"script kiddies\" with fake malware builder](https://www.bleepingcomputer.com/news/security/hacker-infects-18-000-script-kiddies-with-fake-malware-builder/)
* [2025-01-25, 13:31:31](https://news.ycombinator.com/item?id=42821531) - [Advent of Code 2024 and BQN](https://nrk.neocities.org/articles/aoc24-bqn)
* [2025-01-25, 13:29:05](https://news.ycombinator.com/item?id=42821519) - [Pixelfed Hit 500K Users](https://fedidb.org/software/pixelfed)
* [2025-01-25, 13:14:37](https://news.ycombinator.com/item?id=42821457) - [Show HN: I built a DIY plane spotting system at home](https://pilane.obviy.us/)
* [2025-01-25, 13:00:00](https://hardware.slashdot.org/story/25/01/25/0037206/researchers-say-new-attack-could-take-down-the-european-power-grid?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Researchers Say New Attack Could Take Down the European Power Grid](https://hardware.slashdot.org/story/25/01/25/0037206/researchers-say-new-attack-could-take-down-the-european-power-grid?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-25, 12:01:09](https://news.ycombinator.com/item?id=42821138) - [Inboxbooster (YC W17) Is Hiring](https://www.ycombinator.com/companies/inboxbooster/jobs/ci7Hwk0-jvm-bytecode-engineer-full-remote)
* [2025-01-25, 10:00:00](https://science.slashdot.org/story/25/01/25/0043227/hubbles-largest-panorama-ever-showcases-200-million-stars?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Hubble's Largest Panorama Ever Showcases 200 Million Stars](https://science.slashdot.org/story/25/01/25/0043227/hubbles-largest-panorama-ever-showcases-200-million-stars?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-25, 09:40:00](https://soylentnews.org/article.pl?sid=25/01/24/1255245&from=rss) - [Trump Pardons Dark Web Silk Road Marketplace Founder Ross Ulbricht](https://soylentnews.org/article.pl?sid=25/01/24/1255245&from=rss)
* [2025-01-25, 08:47:31](https://news.ycombinator.com/item?id=42820419) - [The Mythical IO-Bound Rails App](https://byroot.github.io/ruby/performance/2025/01/23/the-mythical-io-bound-rails-app.html)
* [2025-01-25, 08:23:32](https://lobste.rs/s/isrnzi/life_pro_tip_oracle_linux_is_best_local_vm) - [Life pro tip: Oracle Linux is the best local VM for MacBooks](https://xeiaso.net/notes/2025/k8s-dev-mac-oracle-linux/)
* [2025-01-25, 07:00:15](https://lobste.rs/s/sr126x/tutorials_on_tinygrad) - [Tutorials on Tinygrad](https://mesozoic-egg.github.io/tinygrad-notes/)
* [2025-01-25, 07:00:00](https://science.slashdot.org/story/25/01/25/0020230/ultra-fast-cancer-treatments-could-replace-conventional-radiotherapy?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Ultra-Fast Cancer Treatments Could Replace Conventional Radiotherapy](https://science.slashdot.org/story/25/01/25/0020230/ultra-fast-cancer-treatments-could-replace-conventional-radiotherapy?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-25, 04:54:00](https://soylentnews.org/article.pl?sid=25/01/24/1251214&from=rss) - [Opinion: We Need to Protect the Protocol That Runs Bluesky](https://soylentnews.org/article.pl?sid=25/01/24/1251214&from=rss)
* [2025-01-25, 03:38:52](https://news.ycombinator.com/item?id=42819262) - [TinyZero](https://github.com/Jiayi-Pan/TinyZero)
* [2025-01-25, 03:35:19](https://lobste.rs/s/wzevin/trying_out_zed_after_more_than_decade_vim) - [Trying out Zed after more than a decade of Vim/Neovim](https://sgoel.dev/posts/trying-out-zed-after-more-than-a-decade-of-vim-neovim/)
* [2025-01-25, 03:30:00](https://tech.slashdot.org/story/25/01/25/0011211/us-reviewing-automatic-emergency-braking-rule?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [US Reviewing Automatic Emergency Braking Rule](https://tech.slashdot.org/story/25/01/25/0011211/us-reviewing-automatic-emergency-braking-rule?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-25, 02:10:00](https://tech.slashdot.org/story/25/01/24/2356254/nvidia-starts-phasing-out-maxwell-pascal-and-volta-gpus?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Nvidia Starts Phasing Out Maxwell, Pascal, and Volta GPUs](https://tech.slashdot.org/story/25/01/24/2356254/nvidia-starts-phasing-out-maxwell-pascal-and-volta-gpus?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-25, 01:30:00](https://news.slashdot.org/story/25/01/24/2351234/british-museum-forced-to-partly-close-after-alleged-it-attack-by-former-employee?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [British Museum Forced To Partly Close After Alleged IT Attack By Former Employee](https://news.slashdot.org/story/25/01/24/2351234/british-museum-forced-to-partly-close-after-alleged-it-attack-by-former-employee?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-25, 00:51:00](https://science.slashdot.org/story/25/01/24/2348221/microplastics-block-blood-flow-in-the-brain-mouse-study-reveals?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microplastics Block Blood Flow in the Brain, Mouse Study Reveals](https://science.slashdot.org/story/25/01/24/2348221/microplastics-block-blood-flow-in-the-brain-mouse-study-reveals?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-25, 00:28:20](https://news.ycombinator.com/item?id=42818278) - [File Explorer is merged to Helix editor](https://github.com/helix-editor/helix/pull/11285)
* [2025-01-25, 00:10:00](https://yro.slashdot.org/story/25/01/24/2337254/unitedhealth-data-breach-hits-190-million-americans-in-worst-healthcare-hack?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [UnitedHealth Data Breach Hits 190 Million Americans in Worst Healthcare Hack](https://yro.slashdot.org/story/25/01/24/2337254/unitedhealth-data-breach-hits-190-million-americans-in-worst-healthcare-hack?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-25, 00:09:00](https://soylentnews.org/article.pl?sid=25/01/24/1234214&from=rss) - [AI Workloads Spur Bigger Memory Drives](https://soylentnews.org/article.pl?sid=25/01/24/1234214&from=rss)
* [2025-01-24, 23:30:00](https://news.slashdot.org/story/25/01/24/2322249/crypto-czar-david-sacks-says-nfts-and-memecoins-are-collectibles-not-securities?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Crypto Czar David Sacks Says NFTs and Memecoins Are Collectibles, Not Securities](https://news.slashdot.org/story/25/01/24/2322249/crypto-czar-david-sacks-says-nfts-and-memecoins-are-collectibles-not-securities?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-24, 22:50:00](https://apple.slashdot.org/story/25/01/24/2113240/apple-enlists-veteran-software-executive-to-help-fix-ai-and-siri?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Enlists Veteran Software Executive To Help Fix AI and Siri](https://apple.slashdot.org/story/25/01/24/2113240/apple-enlists-veteran-software-executive-to-help-fix-ai-and-siri?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-24, 22:45:34](https://lobste.rs/s/2r41of/drunken_plagiarists_working_with_co) - [The Drunken Plagiarists - Working with Co-pilots](https://queue.acm.org/detail.cfm?id=3711675&doi=10.1145%2F3711675)
* [2025-01-24, 22:15:32](https://news.ycombinator.com/item?id=42817439) - [Show HN: Lightpanda, an open-source headless browser in Zig](https://github.com/lightpanda-io/browser)
* [2025-01-24, 22:10:00](https://ask.slashdot.org/story/25/01/24/2057209/ask-slashdot-what-matters-when-buying-a-new-smartphone?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Ask Slashdot: What Matters When Buying a New Smartphone?](https://ask.slashdot.org/story/25/01/24/2057209/ask-slashdot-what-matters-when-buying-a-new-smartphone?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-24, 22:09:44](https://lobste.rs/s/line1v/vic_20_elite) - [VIC-20 Elite](https://vic20elite.wordpress.com/)
* [2025-01-24, 21:44:09](https://lobste.rs/s/r3hhuz/restoring_trust_online_communication) - [Restoring Trust in Online Communication in a Post-LLM Era](https://lobste.rs/s/r3hhuz/restoring_trust_online_communication)
* [2025-01-24, 19:24:00](https://soylentnews.org/article.pl?sid=25/01/23/1255246&from=rss) - [Oyster Blood: A New Frontier in Fighting Infection](https://soylentnews.org/article.pl?sid=25/01/23/1255246&from=rss)
* [2025-01-24, 18:32:38](https://lobste.rs/s/xu2de3/what_i_ve_learned_about_writing_ai_apps_so) - [What I've learned about writing AI apps so far](https://seldo.com/posts/what-ive-learned-about-writing-ai-apps-so-far)
* [2025-01-24, 18:08:14](https://news.ycombinator.com/item?id=42815673) - [Show HN: Using aerospace projects to teach maths [video]](https://www.youtube.com/watch?v=yJ-ovZGp-D0)
* [2025-01-24, 17:59:13](https://lobste.rs/s/1juvjj/wild_very_fast_linker_for_linux) - [wild: A very fast linker for Linux](https://github.com/davidlattimore/wild)
* [2025-01-24, 17:07:21](https://lobste.rs/s/ymci71/tabboo_add_random_jumpscares_sites_you_re) - [TabBoo: Add random jumpscares to sites you're trying to avoid](https://tabboo.xyz/)
* [2025-01-24, 16:50:08](https://lobste.rs/s/aheves/webassembly_compiler_fits_tweet) - [A WebAssembly compiler that fits in a tweet](https://wasmgroundup.com/blog/wasm-compiler-in-a-tweet)
* [2025-01-24, 16:40:11](https://news.ycombinator.com/item?id=42814820) - [Snowdrop OS – a homebrew operating system from scratch, in assembly language](http://sebastianmihai.com/snowdrop/)
* [2025-01-24, 16:25:53](https://news.ycombinator.com/item?id=42814683) - [Wild – A fast linker for Linux](https://github.com/davidlattimore/wild)
* [2025-01-24, 16:06:40](https://lobste.rs/s/hgpo26/ui_is_hell_four_function_calculators) - [UI is hell: four-function calculators](https://lcamtuf.substack.com/p/ui-is-hell-four-function-calculators)
* [2025-01-24, 15:37:07](https://news.ycombinator.com/item?id=42814110) - [Show HN: Cs16.css – CSS library based on Counter Strike 1.6 UI](https://cs16.samke.me)
* [2025-01-24, 14:38:00](https://soylentnews.org/article.pl?sid=25/01/23/1249227&from=rss) - [Chinese Salt Typhoon Hackers 1st Spotted on Federal Networks Under Another Name](https://soylentnews.org/article.pl?sid=25/01/23/1249227&from=rss)
* [2025-01-24, 14:28:03](https://lobste.rs/s/jvruyj/tilde_my_llvm_alternative) - [Tilde, my LLVM alternative](https://yasserarg.com/tb)
* [2025-01-24, 14:25:01](https://lobste.rs/s/eei735/state_vim) - [The state of Vim](https://lwn.net/Articles/1002342/)
* [2025-01-24, 13:19:35](https://lobste.rs/s/mbdy2j/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/mbdy2j/what_are_you_doing_this_weekend)
* [2025-01-24, 12:52:35](https://lobste.rs/s/a5vkze/build_it_yourself) - [Build It Yourself](https://lucumr.pocoo.org/2025/1/24/build-it-yourself/)
* [2025-01-24, 09:53:00](https://soylentnews.org/article.pl?sid=25/01/23/1247207&from=rss) - [New California Law Criminalizing AI Generated Child Porn Claims First Arrest](https://soylentnews.org/article.pl?sid=25/01/23/1247207&from=rss)
* [2025-01-24, 09:44:08](https://lobste.rs/s/qy04po/google_s_official_url_shortcut_is) - [Google's official URL shortcut is compromised](https://gist.github.com/zachlatta/f86317493654b550c689dc6509973aa4)
* [2025-01-24, 09:30:55](https://lobste.rs/s/5m8vpa/results_big_array_size_survey_for_c) - [Results! - The Big Array Size Survey for C](https://thephd.dev/the-big-array-size-survey-for-c-results)
* [2025-01-24, 08:31:29](https://lobste.rs/s/whskpr/javascript_temporal_is_coming) - [JavaScript Temporal is coming](https://developer.mozilla.org/en-US/blog/javascript-temporal-is-coming/)
* [2025-01-24, 05:07:00](https://soylentnews.org/article.pl?sid=25/01/23/0458201&from=rss) - [Time to Check My Tire Pressures...Hand Me That Hammer](https://soylentnews.org/article.pl?sid=25/01/23/0458201&from=rss)
* [2025-01-24, 03:46:02](https://news.ycombinator.com/item?id=42810293) - [How far can you get in 40 minutes from each subway station in NYC?](https://subwaysheds.com/#11.27/40.7427/-73.9869)
* [2025-01-24, 03:38:46](https://news.ycombinator.com/item?id=42810252) - [A phishing attack involving g.co, Google's URL shortener](https://gist.github.com/zachlatta/f86317493654b550c689dc6509973aa4)
* [2025-01-24, 00:22:00](https://soylentnews.org/article.pl?sid=25/01/23/0454218&from=rss) - [Google Is Now the East India Company of the Internet](https://soylentnews.org/article.pl?sid=25/01/23/0454218&from=rss)
* [2025-01-23, 21:02:57](https://news.ycombinator.com/item?id=42808038) - [How to build your own ZX80/ZX81 (2019)](http://searle.x10host.com/zx80/zx80.html)
* [2025-01-23, 19:38:00](https://soylentnews.org/article.pl?sid=25/01/23/0452251&from=rss) - [Microsoft To Force Windows 11 24H2 On Home And Pro Users](https://soylentnews.org/article.pl?sid=25/01/23/0452251&from=rss)
* [2025-01-23, 14:53:00](https://soylentnews.org/article.pl?sid=25/01/22/1845245&from=rss) - [Mind Control? Scientists Have Discovered How to Use Nanoparticles to Remotely Control Behavior](https://soylentnews.org/article.pl?sid=25/01/22/1845245&from=rss)
* [2025-01-23, 13:28:52](https://news.ycombinator.com/item?id=42803774) - [An overview of gradient descent optimization algorithms (2016)](https://www.ruder.io/optimizing-gradient-descent/)
* [2025-01-23, 10:05:00](https://soylentnews.org/article.pl?sid=25/01/22/1845235&from=rss) - [TSMC Reportedly Pauses Production After Earthquake](https://soylentnews.org/article.pl?sid=25/01/22/1845235&from=rss)
* [2025-01-23, 05:22:00](https://soylentnews.org/article.pl?sid=25/01/22/1835217&from=rss) - [Findings Challenge Assumption That AI Will Soon Replace Human Doctors](https://soylentnews.org/article.pl?sid=25/01/22/1835217&from=rss)
* [2025-01-23, 00:35:00](https://soylentnews.org/article.pl?sid=25/01/21/1517219&from=rss) - [Not Sure What Font to Choose? Typography Study Helps Find the Right Type](https://soylentnews.org/article.pl?sid=25/01/21/1517219&from=rss)
* [2025-01-22, 19:51:00](https://soylentnews.org/article.pl?sid=25/01/21/1512214&from=rss) - [ISPs Must Offer Cheaper Internet To Low Income Households After Trying To Prevent It](https://soylentnews.org/article.pl?sid=25/01/21/1512214&from=rss)
* [2025-01-22, 19:23:48](https://news.ycombinator.com/item?id=42796496) - [Show HN: Trolling SMS spammers with Ollama](https://evan.widloski.com/software/sms_llm/)
* [2025-01-22, 18:01:18](https://news.ycombinator.com/item?id=42795646) - [Life lessons from the first half-century of my career](https://cacm.acm.org/opinion/life-lessons-from-the-first-half-century-of-my-career/)
* [2025-01-22, 15:08:00](https://soylentnews.org/article.pl?sid=25/01/21/159259&from=rss) - [How Unix Spell Ran in 64kB RAM](https://soylentnews.org/article.pl?sid=25/01/21/159259&from=rss)
* [2025-01-22, 15:06:36](https://news.ycombinator.com/item?id=42793580) - [A FPGA friendly 32 bit RISC-V CPU implementation](https://github.com/SpinalHDL/VexRiscv)
* [2025-01-22, 10:49:56](https://news.ycombinator.com/item?id=42791378) - [Open Heart Protocol](https://openheart.fyi/)
* [2025-01-22, 09:27:07](https://news.ycombinator.com/item?id=42790828) - [Show HN: Habby – A straightforward bullet journal with habit tracking](https://habby.day/)
* [2025-01-22, 09:22:00](https://soylentnews.org/article.pl?sid=25/01/21/1330227&from=rss) - [Reverse-Engineering a Carry-Lookahead Adder in the Pentium](https://soylentnews.org/article.pl?sid=25/01/21/1330227&from=rss)
* [2025-01-22, 06:21:12](https://news.ycombinator.com/item?id=42789670) - [I got OpenAI o1 to play the boardgame Codenames and it's super good](https://suveenellawela.com/thoughts/codenames-ai)
* [2025-01-22, 04:37:00](https://soylentnews.org/article.pl?sid=25/01/21/1329212&from=rss) - [China to Pit 12,000 Humans Against Robots in World's First AI Marathon Race](https://soylentnews.org/article.pl?sid=25/01/21/1329212&from=rss)
* [2025-01-21, 23:54:00](https://soylentnews.org/article.pl?sid=25/01/21/1315246&from=rss) - [TSMC Ends Contract With Singapore-Based Company Over Alleged Huawei Ties](https://soylentnews.org/article.pl?sid=25/01/21/1315246&from=rss)
* [2025-01-21, 19:10:00](https://soylentnews.org/article.pl?sid=25/01/21/1311222&from=rss) - [DOJ Remotely Cleaned Thousands of Computers Infected With Chinese Malware](https://soylentnews.org/article.pl?sid=25/01/21/1311222&from=rss)
* [2025-01-21, 14:24:00](https://soylentnews.org/article.pl?sid=25/01/21/0044227&from=rss) - [Spacecraft Captures Spectacularly Detailed Images Of Mercury's Hidden Surface](https://soylentnews.org/article.pl?sid=25/01/21/0044227&from=rss)
* [2025-01-21, 12:22:26](https://news.ycombinator.com/item?id=42779330) - [Show HN: Using YOLO to Detect Office Chairs in 40M Hotel Photos](https://news.ycombinator.com/item?id=42779330)
* [2025-01-21, 09:39:00](https://soylentnews.org/article.pl?sid=25/01/21/0030206&from=rss) - [The Need for a Strategic Fact Reserve](https://soylentnews.org/article.pl?sid=25/01/21/0030206&from=rss)
* [2025-01-21, 04:56:00](https://soylentnews.org/article.pl?sid=25/01/20/2337224&from=rss) - [U.S. Satellites Reveal China's Solar Dominance](https://soylentnews.org/article.pl?sid=25/01/20/2337224&from=rss)
* [2025-01-21, 00:09:00](https://soylentnews.org/article.pl?sid=25/01/20/0732227&from=rss) - [Mark Zuckerberg Plans To Lay Off An Additional Five Percent Of Meta's Workforce](https://soylentnews.org/article.pl?sid=25/01/20/0732227&from=rss)
