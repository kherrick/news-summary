# [News Summary](https://kherrick.github.io/news-summary/)

## Court Cases and Corporate Disputes

* [Elon Musk and OpenAI CEO Sam Altman Head To Court](https://yro.slashdot.org/story/26/04/28/0326240/elon-musk-and-openai-ceo-sam-altman-head-to-court?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The heads of Tesla and OpenAI are heading to court over a dispute that could have significant ramifications for the tech industry.

* [Microsoft To Stop Sharing Revenue With OpenAI](https://slashdot.org/story/26/04/27/1657250/microsoft-to-stop-sharing-revenue-with-openai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Microsoft announces a major shift in its partnership with OpenAI, ending its exclusive revenue-sharing agreement.

* [China Blocks Meta's $2 Billion Takeover of AI Startup Manus](https://tech.slashdot.org/story/26/04/27/2046252/china-blocks-metas-2-billion-takeover-of-ai-startup-manus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The China government intervenes to block Meta's attempts to acquire the AI startup Manus, raising questions about global tech regulations.

## Tech Innovations and Releases

* [High Performance Git by Ted Nyman](https://gitperf.com/) - A deep dive into optimizing Git's performance metrics while enhancing capabilities.

* [AgentSwift – Open-source iOS builder agent](https://github.com/hpennington/agentswift) - Showcase of an open-source tool for building simpler workflows in iOS app development.

* [Dillo Release 3.3.0](https://dillo-browser.org/release/3.3.0/) - The minimalist web browser Dillo launches its latest major update, offering a sleek and efficient browsing solution.

## AI, Machine Learning, and Ethical Concerns

* [Study Finds a Third of New Websites Are AI-Generated](https://tech.slashdot.org/story/26/04/27/2123224/study-finds-a-third-of-new-websites-are-ai-generated?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A recent study reveals a significant increase in AI-generated websites, examining its implications on quality and authenticity.

* [GitHub Copilot is moving to usage-based billing](https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/) - GitHub rolls out major changes to how developers are charged for its AI-assisted coding tool, Copilot.

* [Google Studies Prompt Injection Attacks Against AI Agents Browsing the Web](https://it.slashdot.org/story/26/04/26/2345211/google-studies-prompt-injection-attacks-against-ai-agents-browsing-the-web?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Research delves into vulnerabilities in AI agents when interacting with publicly available web information.

## Science Discoveries and Environmental Efforts

* [FDA approves first gene therapy for treatment of genetic hearing loss](https://www.fda.gov/news-events/press-announcements/fda-approves-first-ever-gene-therapy-treatment-genetic-hearing-loss-under-national-priority-voucher) - A groundbreaking moment as the FDA greenlights the first-ever gene therapy for tackling genetic hearing loss.

* [NASA's Curiosity Rover Found Promising Organic Chemicals on Mars](https://soylentnews.org/article.pl?sid=26/04/25/1727249&amp;from=rss) - The Curiosity Rover's new findings reinvigorate discussion about the possibility of life on Mars.

* [Two Hot Climate Tech Startups Just Raised $1 Billion+ in IPOs](https://news.slashdot.org/story/26/04/27/0437225/two-hot-climate-tech-startups-just-raised-1-billion-in-ipos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Two climate tech startups rake in over $1 billion through IPOs, raising hopes for innovative solutions to environmental challenges.

## Security Concerns and Hacks

* [How I Broke the Anti-Bot Behind Nike, Kick, and Twitch](https://emro.cat/blog/how-i-broke-the-anti-bot-behind-nike-kick-and-twitch/) - An intriguing exploration of security flaws in major online platforms' anti-bot measures.

* [4TB of Voice Samples Stolen from 40k AI Contractors at Mercor](https://app.oravys.com/blog/mercor-breach-2026) - Massive data breach exposes a treasure trove of voice samples belonging to thousands of AI contractors.

## Curious and Miscellaneous

* [The gold standard of optimization: A look under the hood of RollerCoaster Tycoon](https://larstofus.com/2026/03/22/the-gold-standard-of-optimization-a-look-under-the-hood-of-rollercoaster-tycoon/) - A technical exploration of the sophisticated optimization strategies behind the classic game RollerCoaster Tycoon.

* [Is my blue your blue?](https://ismy.blue/) - A philosophical dive into a longstanding question about the subjective perception of color.

* [Men who Stare at Walls](https://www.alexselimov.com/posts/men_who_stare_at_walls/) - A reflective and philosophical piece exploring human behavior and the allure of blank walls.

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

* [2026-04-28, 03:40:00](https://yro.slashdot.org/story/26/04/28/0326240/elon-musk-and-openai-ceo-sam-altman-head-to-court?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Elon Musk and OpenAI CEO Sam Altman Head To Court](https://yro.slashdot.org/story/26/04/28/0326240/elon-musk-and-openai-ceo-sam-altman-head-to-court?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-28, 03:23:25](https://news.ycombinator.com/item?id=47930150) - [Claire&apos;s closes all 154 stores in UK and Ireland with loss of 1,300 jobs](https://www.bbc.com/news/articles/cg4047qnpk2o)
* [2026-04-28, 02:45:33](https://news.ycombinator.com/item?id=47929961) - [Show HN: Waiting for LLMs Suck – Give your user a game](https://github.com/ftaip/waiting-game)
* [2026-04-28, 01:52:15](https://lobste.rs/s/jpohft/how_i_broke_anti_bot_behind_nike_kick) - [How I Broke the Anti-Bot Behind Nike, Kick, and Twitch](https://emro.cat/blog/how-i-broke-the-anti-bot-behind-nike-kick-and-twitch/)
* [2026-04-28, 01:14:31](https://news.ycombinator.com/item?id=47929375) - [Show HN: AgentSwift – Open-source iOS builder agent](https://github.com/hpennington/agentswift)
* [2026-04-28, 01:04:00](https://soylentnews.org/article.pl?sid=26/04/26/0035245&amp;from=rss) - [Why Do I Feel Like, Somebody&apos;s Watching Me?](https://soylentnews.org/article.pl?sid=26/04/26/0035245&amp;from=rss)
* [2026-04-28, 00:32:04](https://news.ycombinator.com/item?id=47929035) - [Ted Nyman – High Performance Git](https://gitperf.com/)
* [2026-04-27, 23:14:26](https://news.ycombinator.com/item?id=47928554) - [Integrated by Design](https://vivianvoss.net/blog/integrated-by-design-launch)
* [2026-04-27, 23:00:00](https://tech.slashdot.org/story/26/04/27/2123224/study-finds-a-third-of-new-websites-are-ai-generated?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Study Finds a Third of New Websites Are AI-Generated](https://tech.slashdot.org/story/26/04/27/2123224/study-finds-a-third-of-new-websites-are-ai-generated?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-27, 22:04:21](https://lobste.rs/s/uy7ynl/fix_your_game_s_input_latency) - [Fix Your Game&apos;s Input Latency](https://www.youtube.com/watch?v=EM9utsGhaYs)
* [2026-04-27, 22:02:17](https://lobste.rs/s/hphnx4/compu_global_hyper_mega_net_retro) - [Compu-Global-Hyper-Mega-Net: A Retro Internet for Retro Computers (LFNW 2026)](https://www.youtube.com/watch?v=cSJsGNIDjtc)
* [2026-04-27, 22:00:00](https://tech.slashdot.org/story/26/04/27/2113232/eu-tells-google-to-open-up-ai-on-android-google-says-thats-unwarranted-intervention?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EU Tells Google To Open Up AI On Android; Google Says That&apos;s &apos;Unwarranted Intervention&apos;](https://tech.slashdot.org/story/26/04/27/2113232/eu-tells-google-to-open-up-ai-on-android-google-says-thats-unwarranted-intervention?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-27, 21:55:48](https://news.ycombinator.com/item?id=47927903) - [Talkie: a 13B vintage language model from 1930](https://talkie-lm.com/introducing-talkie)
* [2026-04-27, 21:50:13](https://lobste.rs/s/jl0d5b/using_rust_build_1_handheld_gaming) - [Using Rust to Build a $1 Handheld Gaming Console](https://chrisdell.info/using-rust-to-build-a-1-dollar-handheld-gaming-console/)
* [2026-04-27, 21:31:17](https://lobste.rs/s/w2oiaq/what_s_new_pip_26_1_lockfiles_dependency) - [What&apos;s new in pip 26.1 - lockfiles and dependency cooldowns](https://ichard26.github.io/blog/2026/04/whats-new-in-pip-26.1/)
* [2026-04-27, 21:20:00](https://apple.slashdot.org/story/26/04/27/2055217/notepad-finally-lands-on-macos-as-a-native-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Notepad++ Finally Lands On macOS as a Native App](https://apple.slashdot.org/story/26/04/27/2055217/notepad-finally-lands-on-macos-as-a-native-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-27, 20:44:16](https://news.ycombinator.com/item?id=47927070) - [Three men are facing charges in Toronto SMS Blaster arrests](https://www.tps.ca/media-centre/stories/unprecedented-sms-blaster-arrests/)
* [2026-04-27, 20:24:33](https://news.ycombinator.com/item?id=47926861) - [Is my blue your blue?](https://ismy.blue/)
* [2026-04-27, 20:20:00](https://soylentnews.org/politics/article.pl?sid=26/04/26/0032224&amp;from=rss) - [Big Tech Group Jumps The Gun On Unreleased Bill, Raising Questions About Cozy Ties With Lawmakers](https://soylentnews.org/politics/article.pl?sid=26/04/26/0032224&amp;from=rss)
* [2026-04-27, 20:13:04](https://lobste.rs/s/foxx1z/woes_sanitizing_svgs) - [The woes of sanitizing SVGs](https://muffin.ink/blog/scratch-svg-sanitization/)
* [2026-04-27, 20:00:00](https://tech.slashdot.org/story/26/04/27/2046252/china-blocks-metas-2-billion-takeover-of-ai-startup-manus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Blocks Meta&apos;s $2 Billion Takeover of AI Startup Manus](https://tech.slashdot.org/story/26/04/27/2046252/china-blocks-metas-2-billion-takeover-of-ai-startup-manus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-27, 19:00:00](https://yro.slashdot.org/story/26/04/27/1721238/supreme-court-reviews-police-use-of-cell-location-data-to-find-criminals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Supreme Court Reviews Police Use of Cell Location Data To Find Criminals](https://yro.slashdot.org/story/26/04/27/1721238/supreme-court-reviews-police-use-of-cell-location-data-to-find-criminals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-27, 18:00:00](https://developers.slashdot.org/story/26/04/27/1717232/github-copilot-is-moving-to-usage-based-billing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GitHub Copilot Is Moving To Usage-Based Billing](https://developers.slashdot.org/story/26/04/27/1717232/github-copilot-is-moving-to-usage-based-billing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-27, 17:50:10](https://news.ycombinator.com/item?id=47924877) - [Super ZSNES – GPU Powered SNES Emulator](https://zsnes.com/)
* [2026-04-27, 17:45:02](https://news.ycombinator.com/item?id=47924813) - [Easyduino: Open Source PCB Devboards for KiCad](https://github.com/Hanqaqa/Easyduino)
* [2026-04-27, 17:11:35](https://lobste.rs/s/qnle9l/hacking_last_z80_computer_ever_cidco) - [Hacking the last Z80 computer ever, the Cidco Mailstation](https://fosdem.org/2026/schedule/event/FEHLHY-hacking_the_last_z80_computer_ever_made/)
* [2026-04-27, 17:00:00](https://slashdot.org/story/26/04/27/1657250/microsoft-to-stop-sharing-revenue-with-openai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft To Stop Sharing Revenue With OpenAI](https://slashdot.org/story/26/04/27/1657250/microsoft-to-stop-sharing-revenue-with-openai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-27, 16:42:24](https://lobste.rs/s/d27llp/why_not_just_use_lean) - [\&quot;Why not just use Lean?\&quot;](https://lawrencecpaulson.github.io/2026/04/23/Why_not_Lean.html)
* [2026-04-27, 16:03:08](https://news.ycombinator.com/item?id=47923357) - [GitHub Copilot is moving to usage-based billing](https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/)
* [2026-04-27, 16:00:00](https://news.slashdot.org/story/26/04/27/0335242/californias-billionaire-tax-has-the-signatures-to-make-the-ballot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California&apos;s Billionaire Tax Has the Signatures to Make the Ballot](https://news.slashdot.org/story/26/04/27/0335242/californias-billionaire-tax-has-the-signatures-to-make-the-ballot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-27, 15:47:31](https://lobste.rs/s/kxnxyv/i_won_my_foia_against_twelve_south_open_up) - [I won my FOIA against Twelve South to open up the electrical information for the PlugBug 120W](https://archive.org/details/pb120-us)
* [2026-04-27, 15:36:12](https://news.ycombinator.com/item?id=47923010) - [Networking changes coming in macOS 27](https://eclecticlight.co/2026/04/23/networking-changes-coming-in-macos-27/)
* [2026-04-27, 15:33:00](https://soylentnews.org/article.pl?sid=26/04/26/0029226&amp;from=rss) - [Privacy Email Service Tuta Now Also Has Cloud Storage with Quantum-Resistant Encryption](https://soylentnews.org/article.pl?sid=26/04/26/0029226&amp;from=rss)
* [2026-04-27, 15:31:36](https://news.ycombinator.com/item?id=47922957) - [The woes of sanitizing SVGs](https://muffin.ink/blog/scratch-svg-sanitization/)
* [2026-04-27, 15:00:00](https://news.slashdot.org/story/26/04/27/0328257/deepseek-v4-arrives-with-near-state-of-the-art-intelligence-at-16th-the-cost?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DeepSeek V4 Arrives With Near State-of-the-Art Intelligence At 1/6th the Cost](https://news.slashdot.org/story/26/04/27/0328257/deepseek-v4-arrives-with-near-state-of-the-art-intelligence-at-16th-the-cost?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-27, 14:38:12](https://lobste.rs/s/5wxd5b/html_written_only_using_c_preprocessor) - [HTML written only using the C preprocessor](https://chaos.social/@citizen428/116138240021584394)
* [2026-04-27, 14:25:42](https://lobste.rs/s/nmnp96/voice_modems) - [voice modems](https://computer.rip/2026-04-26-voice-modems.html)
* [2026-04-27, 14:24:53](https://news.ycombinator.com/item?id=47922079) - [“Why not just use Lean?”](https://lawrencecpaulson.github.io//2026/04/23/Why_not_Lean.html)
* [2026-04-27, 14:01:00](https://lobste.rs/s/esrk11/email_is_crazy) - [Email is crazy](https://samkhawase.com/blog/email-is-crazy/)
* [2026-04-27, 13:22:42](https://news.ycombinator.com/item?id=47921248) - [Microsoft and OpenAI end their exclusive and revenue-sharing deal](https://www.bloomberg.com/news/articles/2026-04-27/microsoft-to-stop-sharing-revenue-with-main-ai-partner-openai)
* [2026-04-27, 12:50:05](https://lobste.rs/s/bwm12z/freebsd_device_driver_book) - [FreeBSD Device Driver Book](https://github.com/ebrandi/FDD-book)
* [2026-04-27, 12:35:55](https://news.ycombinator.com/item?id=47920787) - [Show HN: OSS Agent I built topped the TerminalBench on Gemini-3-flash-preview](https://github.com/dirac-run/dirac)
* [2026-04-27, 11:43:59](https://news.ycombinator.com/item?id=47920315) - [China blocks Meta&apos;s acquisition of AI startup Manus](https://www.cnbc.com/2026/04/27/meta-manus-china-blocks-acquisition-ai-startup.html)
* [2026-04-27, 11:14:00](https://news.slashdot.org/story/26/04/27/052242/america-now-has-70-more-bookstores-than-in-2020-says-bookshoporg-founder?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America Now Has 70% More Bookstores Than in 2020, Says Bookshop.org Founder](https://news.slashdot.org/story/26/04/27/052242/america-now-has-70-more-bookstores-than-in-2020-says-bookshoporg-founder?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-27, 11:08:26](https://news.ycombinator.com/item?id=47920074) - [Men who stare at walls](https://www.alexselimov.com/posts/men_who_stare_at_walls/)
* [2026-04-27, 10:56:34](https://news.ycombinator.com/item?id=47919997) - [Pgbackrest is no longer being maintained](https://github.com/pgbackrest/pgbackrest)
* [2026-04-27, 10:51:27](https://lobste.rs/s/uf38bg/niri_v26_04) - [Niri v26.04](https://github.com/niri-wm/niri/releases/tag/v26.04)
* [2026-04-27, 10:49:00](https://soylentnews.org/article.pl?sid=26/04/25/1736211&amp;from=rss) - [Surveillance Pricing Set to be Banned in Maryland. Could This be the End of the Predatory Retail?](https://soylentnews.org/article.pl?sid=26/04/25/1736211&amp;from=rss)
* [2026-04-27, 10:43:00](https://lobste.rs/s/kjk44q/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/kjk44q/what_are_you_doing_this_week)
* [2026-04-27, 10:32:05](https://lobste.rs/s/00eboi/httpxyz_one_month) - [httpxyz one month in](https://tildeweb.nl/~michiel/httpxyz-one-month-in.html)
* [2026-04-27, 10:15:17](https://news.ycombinator.com/item?id=47919733) - [FDA approves first gene therapy for treatment of genetic hearing loss](https://www.fda.gov/news-events/press-announcements/fda-approves-first-ever-gene-therapy-treatment-genetic-hearing-loss-under-national-priority-voucher)
* [2026-04-27, 09:57:10](https://news.ycombinator.com/item?id=47919630) - [4TB of voice samples just stolen from 40k AI contractors at Mercor](https://app.oravys.com/blog/mercor-breach-2026)
* [2026-04-27, 09:08:32](https://lobste.rs/s/mytuvk/running_gauntlet_tiny_nodejs_test_runner) - [Running the Gauntlet: a tiny nodejs test runner](https://robey.lag.net/2026/04/26/running-gauntlet.html)
* [2026-04-27, 08:55:46](https://lobste.rs/s/trap9p/from_milliseconds_26_nanoseconds_how_20) - [From Milliseconds to 26 Nanoseconds: How a $20 eBay SFP Module Beat My Entire NTP Setup](https://austinsnerdythings.com/2026/04/26/ptp-osa5401-26-nanoseconds-raspberry-pi/)
* [2026-04-27, 08:52:04](https://lobste.rs/s/99jbw2/gold_standard_optimization_look_under) - [The gold standard of optimization: A look under the hood of RollerCoaster Tycoon](https://larstofus.com/2026/03/22/the-gold-standard-of-optimization-a-look-under-the-hood-of-rollercoaster-tycoon/)
* [2026-04-27, 07:34:00](https://news.slashdot.org/story/26/04/27/0437225/two-hot-climate-tech-startups-just-raised-1-billion-in-ipos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Two Hot Climate Tech Startups Just Raised $1 Billion+ in IPOs ](https://news.slashdot.org/story/26/04/27/0437225/two-hot-climate-tech-startups-just-raised-1-billion-in-ipos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-27, 06:20:36](https://lobste.rs/s/h8hlp7/wasm_is_not_quite_stack_machine) - [Wasm is not quite a stack machine](https://purplesyringa.moe/blog/wasm-is-not-quite-a-stack-machine/)
* [2026-04-27, 06:04:00](https://soylentnews.org/article.pl?sid=26/04/25/1727249&amp;from=rss) - [NASA&apos;s Curiosity Rover Found Promising Organic Chemicals on Mars](https://soylentnews.org/article.pl?sid=26/04/25/1727249&amp;from=rss)
* [2026-04-27, 05:32:27](https://lobste.rs/s/9ckz9x/let_s_build_terminal_pt_1) - [Let&apos;s Build the Terminal Pt. 1](https://chauhankiran.blogspot.com/2026/04/lets-build-terminal-pt-1.html)
* [2026-04-27, 03:34:00](https://news.slashdot.org/story/26/04/27/0210243/right-to-repair-laws-gain-political-momentum-across-america?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Right-to-Repair Laws Gain Political Momentum Across America](https://news.slashdot.org/story/26/04/27/0210243/right-to-repair-laws-gain-political-momentum-across-america?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-27, 01:20:00](https://soylentnews.org/article.pl?sid=26/04/25/1722204&amp;from=rss) - [The Newest Influencer Health Hack? Nicotine](https://soylentnews.org/article.pl?sid=26/04/25/1722204&amp;from=rss)
* [2026-04-27, 01:14:00](https://yro.slashdot.org/story/26/04/27/0113209/bank-robber-challenges-conviction-based-on-his-cellphones-location-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bank Robber Challenges Conviction Based on His Cellphone&apos;s Location Data](https://yro.slashdot.org/story/26/04/27/0113209/bank-robber-challenges-conviction-based-on-his-cellphones-location-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-26, 23:48:00](https://it.slashdot.org/story/26/04/26/2345211/google-studies-prompt-injection-attacks-against-ai-agents-browsing-the-web?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Studies Prompt Injection Attacks Against AI Agents Browsing the Web](https://it.slashdot.org/story/26/04/26/2345211/google-studies-prompt-injection-attacks-against-ai-agents-browsing-the-web?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-26, 23:28:05](https://lobste.rs/s/5dbg0u/hardenedbsd_is_now_officially_on_radicle) - [HardenedBSD Is Now Officially on Radicle](https://hardenedbsd.org/article/shawn-webb/2026-04-26/hardenedbsd-officially-radicle)
* [2026-04-26, 20:34:00](https://soylentnews.org/article.pl?sid=26/04/25/1336233&amp;from=rss) - [Chinese Scientists Aim to Save Moore&apos;s Law by Mass-Growing 2D Materials That &apos;Outclass Silicon&apos;](https://soylentnews.org/article.pl?sid=26/04/25/1336233&amp;from=rss)
* [2026-04-26, 18:31:47](https://lobste.rs/s/fyev5y/smolwebifying_my_site) - [Smolwebifying my site](https://akselmo.dev/posts/smolwebifying-my-site/)
* [2026-04-26, 16:45:45](https://lobste.rs/s/v247np/dillo_release_3_3_0) - [Dillo release 3.3.0](https://dillo-browser.org/release/3.3.0/)
* [2026-04-26, 15:53:00](https://soylentnews.org/article.pl?sid=26/04/25/1332245&amp;from=rss) - [The Surprising Origin of 4 Features That Superglue Kids and Adults to Screens](https://soylentnews.org/article.pl?sid=26/04/25/1332245&amp;from=rss)
* [2026-04-26, 14:22:59](https://lobste.rs/s/ukar7d/lua_can_be_really_cool_html_templating) - [Lua can be a really cool HTML templating engine](https://riki.house/lua-html)
* [2026-04-26, 14:16:08](https://news.ycombinator.com/item?id=47910527) - [HVD Bodedo (2007)](https://www.hvdfonts.com/fonts/hvd-bodedo)
* [2026-04-26, 11:05:00](https://soylentnews.org/article.pl?sid=26/04/24/1514234&amp;from=rss) - [A New Liquid Battery Stores Solar Heat for Weeks](https://soylentnews.org/article.pl?sid=26/04/24/1514234&amp;from=rss)
* [2026-04-26, 06:20:00](https://soylentnews.org/article.pl?sid=26/04/24/1241239&amp;from=rss) - [European Civil Servants Are Being Forced Off WhatsApp](https://soylentnews.org/article.pl?sid=26/04/24/1241239&amp;from=rss)
* [2026-04-26, 03:52:43](https://news.ycombinator.com/item?id=47907175) - [Spanish archaeologists discover trove of ancient shipwrecks in Bay of Gibraltar](https://www.theguardian.com/science/2026/apr/15/hidden-treasures-spanish-archaeologists-discover-trove-of-ancient-shipwrecks-in-bay-of-gibraltar)
* [2026-04-26, 03:12:04](https://news.ycombinator.com/item?id=47906942) - [Meetings are forcing functions](https://www.mooreds.com/wordpress/archives/3734)
* [2026-04-26, 01:36:00](https://soylentnews.org/article.pl?sid=26/04/24/1238217&amp;from=rss) - [The Dumbest Hack of the Year Exposed a Very Real Problem](https://soylentnews.org/article.pl?sid=26/04/24/1238217&amp;from=rss)
* [2026-04-25, 22:27:44](https://news.ycombinator.com/item?id=47905208) - [How I leared what a decoupling capacitor is for, the hard way](https://nbelakovski.substack.com/p/how-i-learned-what-a-decoupling-capacitor)
* [2026-04-25, 20:54:00](https://soylentnews.org/article.pl?sid=26/04/24/1234243&amp;from=rss) - [US Wants Rare Earth Independence From China — but Can DARPA Actually Make It Work?](https://soylentnews.org/article.pl?sid=26/04/24/1234243&amp;from=rss)
* [2026-04-25, 18:25:54](https://news.ycombinator.com/item?id=47903439) - [The quiet resurgence of RF engineering](https://atempleton.bearblog.dev/quiet-resurgence-of-rf-engineering/)
* [2026-04-25, 16:08:00](https://soylentnews.org/article.pl?sid=26/04/24/1232232&amp;from=rss) - [Contrary to Popular Superstition, AES 128 is Just Fine in a Post](https://soylentnews.org/article.pl?sid=26/04/24/1232232&amp;from=rss)
* [2026-04-25, 15:41:54](https://news.ycombinator.com/item?id=47902269) - [Mo RAM, Mo Problems (2025)](https://fabiensanglard.net/curse/)
* [2026-04-25, 14:24:47](https://news.ycombinator.com/item?id=47901776) - [Radar Laboratory – Interactive Radar Phenomenology](https://radarlaboratory.com/)
* [2026-04-25, 13:28:29](https://news.ycombinator.com/item?id=47901433) - [Fully Featured Audio DSP Firmware for the Raspberry Pi Pico](https://github.com/WeebLabs/DSPi)
* [2026-04-25, 11:22:00](https://soylentnews.org/article.pl?sid=26/04/24/1227222&amp;from=rss) - [France Keeps Breaking the Internet to Stop Piracy, Even Though It&apos;s Not Working](https://soylentnews.org/article.pl?sid=26/04/24/1227222&amp;from=rss)
* [2026-04-25, 08:16:19](https://news.ycombinator.com/item?id=47899669) - [Pgrx: Build Postgres Extensions with Rust](https://github.com/pgcentralfoundation/pgrx)
* [2026-04-25, 06:38:00](https://soylentnews.org/article.pl?sid=26/04/24/1220209&amp;from=rss) - [Physicists Witness Pinpricks of Darkness Moving Faster Than the Speed of Light ‪](https://soylentnews.org/article.pl?sid=26/04/24/1220209&amp;from=rss)
* [2026-04-25, 01:56:00](https://soylentnews.org/article.pl?sid=26/04/24/0247228&amp;from=rss) - [Linux Mint Plans for Longer Development Cycle](https://soylentnews.org/article.pl?sid=26/04/24/0247228&amp;from=rss)
* [2026-04-24, 21:08:00](https://soylentnews.org/article.pl?sid=26/04/24/0051247&amp;from=rss) - [With Navigating Nematodes, Scientists Map Out How Brains Implement Behaviors](https://soylentnews.org/article.pl?sid=26/04/24/0051247&amp;from=rss)
* [2026-04-24, 16:22:00](https://soylentnews.org/article.pl?sid=26/04/24/0045252&amp;from=rss) - [They Built the ‘Cursor for Hardware.’ Now, Anthropic Wants in](https://soylentnews.org/article.pl?sid=26/04/24/0045252&amp;from=rss)
* [2026-04-24, 11:32:00](https://soylentnews.org/article.pl?sid=26/04/23/1143221&amp;from=rss) - [This Pasta Sauce Wants to Record Your Family](https://soylentnews.org/article.pl?sid=26/04/23/1143221&amp;from=rss)
* [2026-04-24, 06:51:00](https://soylentnews.org/article.pl?sid=26/04/23/1139251&amp;from=rss) - [NASA Inspector Fears New Spacesuits Won&apos;t be Ready for Moon Landing](https://soylentnews.org/article.pl?sid=26/04/23/1139251&amp;from=rss)
* [2026-04-24, 02:05:00](https://soylentnews.org/article.pl?sid=26/04/23/1118227&amp;from=rss) - [Linux 7.1 Will Have an Optional New NTFS Driver](https://soylentnews.org/article.pl?sid=26/04/23/1118227&amp;from=rss)
