# [News Summary](https://kherrick.github.io/news-summary/)

## Cybersecurity and Exploits

* [RIPE NCC RPKI exploit chain](https://mxsasha.eu/posts/ripe-ncc-rpki-exploit-chain/) - Explores a chain of vulnerabilities in the RIPE NCC RPKI infrastructure with potential consequences for internet infrastructure. [Comments](https://lobste.rs/s/ewwdm4/ripe_ncc_rpki_exploit_chain)

* [Github RCE Vulnerability: CVE-2026-3854 Breakdown](https://www.wiz.io/blog/github-rce-vulnerability-cve-2026-3854) - A detailed breakdown of a recently disclosed remote code execution vulnerability in GitHub Actions and its implications. [Comments](https://news.ycombinator.com/item?id=47936479)

## Technology and Development

* [Warp is now open-source](https://www.warp.dev/blog/warp-is-now-open-source) - Warp, a terminal reinvented for modern workloads, is now open-sourced to encourage collaboration and customization. [Comments](https://lobste.rs/s/ccbjxb/warp_is_now_open_source)

* [Soft launch of open-source code platform for government](https://www.nldigitalgovernment.nl/news/soft-launch-for-government-open-source-code-platform/) - A new initiative launched to support governmental use of open-source tools. [Comments](https://news.ycombinator.com/item?id=47945918)

## Ethics, Platforms, and Content

* [Github banned me for no understandable reason](https://blog.hellbeast.eu.org/Github%20banned%20me%20for%20no%20understandable%20reason) - Personal recount of unexplained GitHub account suspension written by a user. [Comments](https://lobste.rs/s/tz1ra7/github_banned_me_for_no_understandable)

* [Who Owns the Code Claude Wrote?](https://legallayer.substack.com/p/who-owns-the-claude-code-wrote) - Delves into legal implications surrounding ownership of AI-generated code. [Comments](https://news.ycombinator.com/item?id=47932937)

## Innovative Use of Technology

* [Apple Vision Pro Used In World-First Cataract Surgery](https://science.slashdot.org/story/26/04/28/1923255/apple-vision-pro-used-in-world-first-cataract-surgery?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Apple’s Vision Pro headset was used as an assistive tool in revolutionary cataract surgery. [Comments](https://science.slashdot.org/story/26/04/28/1923255/apple-vision-pro-used-in-world-first-cataract-surgery?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Using a 1978 terminal in 2026 (DEC VT-100)](https://nikhiljha.com/posts/vt100/) - A surprising exploration of how a 45-year-old terminal can be repurposed for modern-day use. [Comments](https://lobste.rs/s/nrbfzz/using_1978_terminal_2026_dec_vt_100)

## Social Impacts of Technology

* [New Report Finds Some Babies Spend Up To Eight Hours a Day on Screens](https://mobile.slashdot.org/story/26/04/29/0334222/new-report-finds-some-babies-spend-up-to-eight-hours-a-day-on-screens?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A concerning report sheds light on extended screen time and its implications for early childhood development. [Comments](https://mobile.slashdot.org/story/26/04/29/0334222/new-report-finds-some-babies-spend-up-to-eight-hours-a-day-on-screens?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [The Surprising Origin of 4 Features That Superglue Kids and Adults to Screens](https://soylentnews.org/article.pl?sid=26/04/25/1332245&amp;from=rss) - Investigates features in technology that create strong psychological pulls for constant use. [Comments](https://soylentnews.org/article.pl?sid=26/04/25/1332245&amp;from=rss)

## Environmental Science and Space

* [NASA Shut Down Voyager 1 Science Instrument After Unexpected Power Drop](https://soylentnews.org/article.pl?sid=26/04/28/0547234&amp;from=rss) - NASA takes steps to preserve the Voyager 1 mission amid an unexplained energy loss. [Comments](https://soylentnews.org/article.pl?sid=26/04/28/0547234&amp;from=rss)

* [NASA's Curiosity Rover Found Promising Organic Chemicals on Mars](https://soylentnews.org/article.pl?sid=26/04/25/1727249&amp;from=rss) - The Curiosity Rover uncovers new clues about potential signs of life on Mars. [Comments](https://soylentnews.org/article.pl?sid=26/04/25/1727249&amp;from=rss)

## Cultural and Digital History

* [When the Internet Was a Place](https://www.frontporchrepublic.com/2025/09/when-the-internet-was-a-place/) - A nostalgic reflection on how online space has transformed over the years. [Comments](https://news.ycombinator.com/item?id=47943190)

* [Before GitHub](https://lucumr.pocoo.org/2026/4/28/before-github/) - An essay chronicling the history of version control and software collaboration before GitHub's era. [Comments](https://lobste.rs/s/bui1eh/before_github)

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

* [2026-04-29, 10:16:11](https://lobste.rs/s/ewwdm4/ripe_ncc_rpki_exploit_chain) - [RIPE NCC RPKI exploit chain](https://mxsasha.eu/posts/ripe-ncc-rpki-exploit-chain/)
* [2026-04-29, 10:06:32](https://lobste.rs/s/tz1ra7/github_banned_me_for_no_understandable) - [Github banned me for no understandable reason](https://blog.hellbeast.eu.org/Github%20banned%20me%20for%20no%20understandable%20reason)
* [2026-04-29, 09:21:32](https://news.ycombinator.com/item?id=47945955) - [Show HN: Rip.so – a graveyard for dead internet things](https://rip.so)
* [2026-04-29, 09:14:37](https://news.ycombinator.com/item?id=47945918) - [Soft launch of open-source code platform for government](https://www.nldigitalgovernment.nl/news/soft-launch-for-government-open-source-code-platform/)
* [2026-04-29, 09:03:31](https://news.ycombinator.com/item?id=47945861) - [Why Law Is Law-Shaped](https://lawvm.org/why-law-is-law-shaped/)
* [2026-04-29, 08:43:45](https://lobste.rs/s/tzqafn/why_i_still_reach_for_lisp_scheme_instead) - [Why I Still Reach for Lisp (&amp; Scheme) Instead of Haskell](https://jointhefreeworld.org/blog/articles/lisps/why-i-still-reach-for-scheme-instead-of-haskell/index.html)
* [2026-04-29, 08:16:37](https://news.ycombinator.com/item?id=47945522) - [Tell HN: An update from the new Tindie team](https://news.ycombinator.com/item?id=47945522)
* [2026-04-29, 08:07:16](https://lobste.rs/s/9bkq7o/day_i_logged_1_every_2000_public_ipv4) - [The Day I Logged 1 In Every 2000 Public IPv4: Visualizing The AI Scraper DDoS](https://vulpinecitrus.info/blog/one-in-every-2000-ipv4-visualizing-ddos-ai-web-scrapers/)
* [2026-04-29, 07:00:00](https://mobile.slashdot.org/story/26/04/29/0334222/new-report-finds-some-babies-spend-up-to-eight-hours-a-day-on-screens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Report Finds Some Babies Spend Up To Eight Hours a Day on Screens](https://mobile.slashdot.org/story/26/04/29/0334222/new-report-finds-some-babies-spend-up-to-eight-hours-a-day-on-screens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-29, 06:47:53](https://news.ycombinator.com/item?id=47944931) - [Low-Compilation-Cost Register Allocation in LLVM-Based Binary Translation](https://dl.acm.org/doi/abs/10.1145/3767295.3803591)
* [2026-04-29, 06:38:44](https://news.ycombinator.com/item?id=47944864) - [HardenedBSD Is Now Officially on Radicle](https://hardenedbsd.org/article/shawn-webb/2026-04-26/hardenedbsd-officially-radicle)
* [2026-04-29, 06:09:00](https://soylentnews.org/article.pl?sid=26/04/28/0551255&amp;from=rss) - [Firefox Has Quietly Integrated Brave&apos;s Adblock Engine](https://soylentnews.org/article.pl?sid=26/04/28/0551255&amp;from=rss)
* [2026-04-29, 03:30:00](https://yro.slashdot.org/story/26/04/29/0311202/musk-testifies-openai-was-created-as-nonprofit-to-counter-google?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Musk Testifies OpenAI Was Created As Nonprofit To Counter Google](https://yro.slashdot.org/story/26/04/29/0311202/musk-testifies-openai-was-created-as-nonprofit-to-counter-google?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-29, 03:16:18](https://lobste.rs/s/ccbjxb/warp_is_now_open_source) - [Warp is now open-source](https://www.warp.dev/blog/warp-is-now-open-source)
* [2026-04-29, 03:01:06](https://lobste.rs/s/lpozc6/apple_wants_kill_your_time_capsule_they) - [Apple wants to kill your Time Capsule, but they run NetBSD so they can’t](https://www.osnews.com/story/144845/apple-wants-to-kill-your-time-capsule-but-they-run-netbsd-so-they-cant/)
* [2026-04-29, 02:19:11](https://news.ycombinator.com/item?id=47943499) - [Bugs Rust won&apos;t catch](https://corrode.dev/blog/bugs-rust-wont-catch/)
* [2026-04-29, 01:36:52](https://news.ycombinator.com/item?id=47943190) - [When the Internet Was a Place](https://www.frontporchrepublic.com/2025/09/when-the-internet-was-a-place/)
* [2026-04-29, 01:26:00](https://soylentnews.org/article.pl?sid=26/04/28/0547234&amp;from=rss) - [NASA Shut Down Voyager 1 Science Instrument After Unexpected Power Drop](https://soylentnews.org/article.pl?sid=26/04/28/0547234&amp;from=rss)
* [2026-04-29, 01:11:54](https://lobste.rs/s/a50exb/code_golfing_riki_s_html_templating) - [Code-golfing riki&apos;s HTML templating engine in Julia](https://gist.github.com/OTDE/96584a4a83c73fb02e463eef83170cc3)
* [2026-04-28, 23:59:57](https://news.ycombinator.com/item?id=47942492) - [Regression: malware reminder on every read still causes subagent refusals](https://github.com/anthropics/claude-code/issues/49363)
* [2026-04-28, 23:54:14](https://news.ycombinator.com/item?id=47942437) - [How ChatGPT serves ads](https://www.buchodi.com/how-chatgpt-serves-ads-heres-the-full-attribution-loop/)
* [2026-04-28, 23:43:53](https://news.ycombinator.com/item?id=47942353) - [Apple CMF (Color-Matching Functions) 2026](https://www.lttlabs.com/articles/2026/04/11/apple-studio-display-xdr-display-testing-results)
* [2026-04-28, 23:43:02](https://lobste.rs/s/bui1eh/before_github) - [Before GitHub](https://lucumr.pocoo.org/2026/4/28/before-github/)
* [2026-04-28, 23:00:00](https://developers.slashdot.org/story/26/04/28/1935206/electrical-current-might-be-the-key-to-a-better-cup-of-coffee?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Electrical Current Might Be the Key To a Better Cup of Coffee](https://developers.slashdot.org/story/26/04/28/1935206/electrical-current-might-be-the-key-to-a-better-cup-of-coffee?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-28, 22:00:00](https://science.slashdot.org/story/26/04/28/1923255/apple-vision-pro-used-in-world-first-cataract-surgery?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Vision Pro Used In World-First Cataract Surgery](https://science.slashdot.org/story/26/04/28/1923255/apple-vision-pro-used-in-world-first-cataract-surgery?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-28, 21:34:31](https://lobste.rs/s/cv2rg6/from_github_codeberg_forgejo) - [From GitHub to Codeberg/Forgejo](https://www.jonashietala.se/blog/2026/04/28/from_github_to_codebergforgejo)
* [2026-04-28, 21:18:39](https://lobste.rs/s/lm0mlt/i_built_my_own_hair_electrolysis_machine) - [I Built My Own Hair Electrolysis Machine](https://www.scd31.com/posts/diy-hair-electrolysis-machine)
* [2026-04-28, 21:17:40](https://news.ycombinator.com/item?id=47940921) - [Before GitHub](https://lucumr.pocoo.org/2026/4/28/before-github/)
* [2026-04-28, 21:13:07](https://lobste.rs/s/o8ycev/ditching_github) - [Ditching GitHub](https://lonami.dev/blog/ditching-github/)
* [2026-04-28, 21:00:00](https://games.slashdot.org/story/26/04/28/1919200/sony-rolls-out-30-day-online-drm-check-in-for-playstation-digital-games?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sony Rolls Out 30-Day Online DRM Check-In For PlayStation Digital Games](https://games.slashdot.org/story/26/04/28/1919200/sony-rolls-out-30-day-online-drm-check-in-for-playstation-digital-games?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-28, 20:58:56](https://lobste.rs/s/swbkcl/carrot_disclosure_forgejo) - [Carrot disclosure: Forgejo](https://dustri.org/b/carrot-disclosure-forgejo.html)
* [2026-04-28, 20:38:21](https://news.ycombinator.com/item?id=47940389) - [I won a championship that doesn&apos;t exist](https://ron.stoner.com/How_I_Won_a_Championship_That_Doesnt_Exist/)
* [2026-04-28, 20:01:50](https://lobste.rs/s/cmov68/ghostty_is_leaving_github) - [Ghostty Is Leaving GitHub](https://mitchellh.com/writing/ghostty-leaving-github)
* [2026-04-28, 20:00:00](https://news.slashdot.org/story/26/04/28/1913247/apple-introduces-a-cheaper-option-for-app-store-subscriptions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Introduces a Cheaper Option For App Store Subscriptions](https://news.slashdot.org/story/26/04/28/1913247/apple-introduces-a-cheaper-option-for-app-store-subscriptions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-28, 19:44:52](https://news.ycombinator.com/item?id=47939579) - [Ghostty is leaving GitHub](https://mitchellh.com/writing/ghostty-leaving-github)
* [2026-04-28, 19:24:43](https://news.ycombinator.com/item?id=47939320) - [OpenAI models coming to Amazon Bedrock: Interview with OpenAI and AWS CEOs](https://stratechery.com/2026/an-interview-with-openai-ceo-sam-altman-and-aws-ceo-matt-garman-about-bedrock-managed-agents/)
* [2026-04-28, 19:19:50](https://lobste.rs/s/nrbfzz/using_1978_terminal_2026_dec_vt_100) - [Using a 1978 terminal in 2026 (DEC VT-100)](https://nikhiljha.com/posts/vt100/)
* [2026-04-28, 19:00:00](https://news.slashdot.org/story/26/04/28/1832202/the-bloomberg-terminal-is-getting-an-ai-makeover?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Bloomberg Terminal Is Getting an AI Makeover](https://news.slashdot.org/story/26/04/28/1832202/the-bloomberg-terminal-is-getting-an-ai-makeover?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-28, 18:40:00](https://soylentnews.org/article.pl?sid=26/04/26/1853229&amp;from=rss) - [Someone Made a Windows 95 Subsystem for Linux](https://soylentnews.org/article.pl?sid=26/04/26/1853229&amp;from=rss)
* [2026-04-28, 18:00:00](https://tech.slashdot.org/story/26/04/28/1634227/google-and-pentagon-reportedly-agree-on-deal-for-any-lawful-use-of-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google and Pentagon Reportedly Agree On Deal For &apos;Any Lawful&apos; Use of AI](https://tech.slashdot.org/story/26/04/28/1634227/google-and-pentagon-reportedly-agree-on-deal-for-any-lawful-use-of-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-28, 17:12:30](https://news.ycombinator.com/item?id=47937380) - [Show HN: Auto-Architecture: Karpathy&apos;s Loop, pointed at a CPU](https://github.com/FeSens/auto-arch-tournament/blob/main/docs/auto-arch-tournament-blog-post.md)
* [2026-04-28, 17:00:00](https://news.slashdot.org/story/26/04/28/1622229/uae-to-leave-opec-amid-hormuz-oil-crisis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UAE To Leave OPEC Amid Hormuz Oil Crisis](https://news.slashdot.org/story/26/04/28/1622229/uae-to-leave-opec-amid-hormuz-oil-crisis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-28, 16:45:32](https://lobste.rs/s/uhsedd/7_reasons_i_switched_back_php_after_2_years) - [7 reasons I switched back to PHP after 2 years on Rails (2007)](https://sive.rs/rails2php)
* [2026-04-28, 16:43:54](https://lobste.rs/s/jgsiqa/on_limits_self_improving_large_language) - [On the Limits of Self-Improving in Large Language Models: The Singularity Is Not Near Without Symbolic Model Synthesis](https://arxiv.org/html/2601.05280v2)
* [2026-04-28, 16:15:43](https://news.ycombinator.com/item?id=47936479) - [GitHub RCE Vulnerability: CVE-2026-3854 Breakdown](https://www.wiz.io/blog/github-rce-vulnerability-cve-2026-3854)
* [2026-04-28, 16:03:34](https://news.ycombinator.com/item?id=47936312) - [Show HN: Drive any macOS app in the background without stealing the cursor](https://github.com/trycua/cua)
* [2026-04-28, 16:00:00](https://slashdot.org/story/26/04/28/0429234/bay-area-homeowner-offers-property-in-exchange-for-anthropic-stock?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bay Area Homeowner Offers Property In Exchange For Anthropic Stock](https://slashdot.org/story/26/04/28/0429234/bay-area-homeowner-offers-property-in-exchange-for-anthropic-stock?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-28, 15:58:30](https://news.ycombinator.com/item?id=47936264) - [Warp is now open-source](https://www.warp.dev/blog/warp-is-now-open-source)
* [2026-04-28, 15:40:05](https://lobste.rs/s/szrxqe/illegal_vs_unwanted_states) - [Illegal vs Unwanted States](https://buttondown.com/hillelwayne/archive/illegal-vs-unwanted-states/)
* [2026-04-28, 15:21:00](https://news.ycombinator.com/item?id=47935853) - [Your phone is about to stop being yours](https://keepandroidopen.org/en/)
* [2026-04-28, 15:00:00](https://yro.slashdot.org/story/26/04/28/0421237/supreme-court-hears-case-on-how-to-label-risks-of-popular-weed-killer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Supreme Court Hears Case On How To Label Risks of Popular Weed Killer](https://yro.slashdot.org/story/26/04/28/0421237/supreme-court-hears-case-on-how-to-label-risks-of-popular-weed-killer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-28, 14:35:59](https://news.ycombinator.com/item?id=47935246) - [Show HN: Rocky – Rust SQL engine with branches, replay, column lineage](https://github.com/rocky-data/rocky)
* [2026-04-28, 14:30:43](https://lobste.rs/s/a7aoor/best_query_plans_mice_men) - [The Best (Query) Plans of Mice and Men](https://ohadravid.github.io/posts/2026-04-query-plans/)
* [2026-04-28, 14:00:00](https://soylentnews.org/article.pl?sid=26/04/26/1758257&amp;from=rss) - [Raccoons Solve Puzzles for the Fun of It](https://soylentnews.org/article.pl?sid=26/04/26/1758257&amp;from=rss)
* [2026-04-28, 13:02:01](https://news.ycombinator.com/item?id=47933983) - [UAE to leave OPEC](https://www.ft.com/content/8c354f2d-3e66-47f1-aad4-9b4aa30e386d)
* [2026-04-28, 12:34:00](https://lobste.rs/s/mhflmp/bypassing_dpi_with_ebpf_no_vpn_proxy) - [Bypassing DPI with eBPF, no VPN or proxy needed](https://bora.sh/bypassing-dpi-with-ebpf/)
* [2026-04-28, 12:25:54](https://lobste.rs/s/pv23xq/who_owns_code_claude_wrote) - [Who Owns the Code Claude Wrote?](https://legallayer.substack.com/p/who-owns-the-claude-code-wrote)
* [2026-04-28, 11:54:20](https://news.ycombinator.com/item?id=47933208) - [Localsend: An open-source cross-platform alternative to AirDrop](https://github.com/localsend/localsend)
* [2026-04-28, 11:24:52](https://news.ycombinator.com/item?id=47932937) - [Who owns the code Claude Code wrote?](https://legallayer.substack.com/p/who-owns-the-claude-code-wrote)
* [2026-04-28, 11:20:06](https://lobste.rs/s/tknct7/update_on_github_availability) - [An update on GitHub availability](https://github.blog/news-insights/company-news/an-update-on-github-availability/)
* [2026-04-28, 11:00:00](https://science.slashdot.org/story/26/04/28/0413216/the-silent-frequency-that-makes-old-buildings-feel-haunted?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Silent Frequency That Makes Old Buildings Feel Haunted](https://science.slashdot.org/story/26/04/28/0413216/the-silent-frequency-that-makes-old-buildings-feel-haunted?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-28, 10:50:00](https://lobste.rs/s/ngogon/github_actions_is_weakest_link) - [GitHub Actions is the weakest link](https://nesbitt.io/2026/04/28/github-actions-is-the-weakest-link.html)
* [2026-04-28, 10:21:43](https://lobste.rs/s/tchcjd/fosdem_2026_all_fosdem_2026_videos_are) - [FOSDEM 2026 - All FOSDEM 2026 videos are online](https://fosdem.org/2026/news/2026-04-26-all-videos-published/)
* [2026-04-28, 09:43:40](https://lobste.rs/s/exlogg/jjj) - [jjj](https://oppi.li/posts/jjj/)
* [2026-04-28, 09:22:00](https://soylentnews.org/article.pl?sid=26/04/26/1740233&amp;from=rss) - [A Sun is Not Required to Generate Conditions Suitable for Life on Exoplanet Moons](https://soylentnews.org/article.pl?sid=26/04/26/1740233&amp;from=rss)
* [2026-04-28, 07:00:00](https://hardware.slashdot.org/story/26/04/28/041256/trump-administration-will-pay-more-energy-firms-to-cancel-wind-farms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Administration Will Pay More Energy Firms to Cancel Wind Farms](https://hardware.slashdot.org/story/26/04/28/041256/trump-administration-will-pay-more-energy-firms-to-cancel-wind-farms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-28, 05:46:00](https://soylentnews.org/article.pl?sid=26/04/26/1727213&amp;from=rss) - [Electric Field Tunes Vibrations to Ease Heat Transfer](https://soylentnews.org/article.pl?sid=26/04/26/1727213&amp;from=rss)
* [2026-04-28, 05:23:54](https://lobste.rs/s/rmujw3/donating_open_source) - [Donating to open source](https://entropicthoughts.com/open-source-donation)
* [2026-04-28, 03:40:00](https://yro.slashdot.org/story/26/04/28/0326240/elon-musk-and-openai-ceo-sam-altman-head-to-court?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Elon Musk and OpenAI CEO Sam Altman Head To Court](https://yro.slashdot.org/story/26/04/28/0326240/elon-musk-and-openai-ceo-sam-altman-head-to-court?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-28, 01:04:00](https://soylentnews.org/article.pl?sid=26/04/26/0035245&amp;from=rss) - [Why Do I Feel Like, Somebody&apos;s Watching Me?](https://soylentnews.org/article.pl?sid=26/04/26/0035245&amp;from=rss)
* [2026-04-27, 23:00:00](https://tech.slashdot.org/story/26/04/27/2123224/study-finds-a-third-of-new-websites-are-ai-generated?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Study Finds a Third of New Websites Are AI-Generated](https://tech.slashdot.org/story/26/04/27/2123224/study-finds-a-third-of-new-websites-are-ai-generated?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-27, 21:55:48](https://news.ycombinator.com/item?id=47927903) - [Talkie: a 13B vintage language model from 1930](https://talkie-lm.com/introducing-talkie)
* [2026-04-27, 20:20:00](https://soylentnews.org/politics/article.pl?sid=26/04/26/0032224&amp;from=rss) - [Big Tech Group Jumps The Gun On Unreleased Bill, Raising Questions About Cozy Ties With Lawmakers](https://soylentnews.org/politics/article.pl?sid=26/04/26/0032224&amp;from=rss)
* [2026-04-27, 19:27:47](https://news.ycombinator.com/item?id=47926148) - [Withnail&apos;s Coat and I](https://ontherow.substack.com/p/withnails-coat-and-i)
* [2026-04-27, 15:33:00](https://soylentnews.org/article.pl?sid=26/04/26/0029226&amp;from=rss) - [Privacy Email Service Tuta Now Also Has Cloud Storage with Quantum-Resistant Encryption](https://soylentnews.org/article.pl?sid=26/04/26/0029226&amp;from=rss)
* [2026-04-27, 13:54:47](https://news.ycombinator.com/item?id=47921610) - [Behavioral timescale synaptic plasticity rewires the brain after an experience](https://www.quantamagazine.org/a-new-type-of-neuroplasticity-rewires-the-brain-after-a-single-experience-20260424/)
* [2026-04-27, 12:17:19](https://news.ycombinator.com/item?id=47920599) - [We still don&apos;t have a more precise value for \&quot;Big G\&quot;](https://arstechnica.com/science/2026/04/we-still-dont-have-a-more-precise-value-for-big-g/)
* [2026-04-27, 11:31:20](https://news.ycombinator.com/item?id=47920214) - [Gallium oxide electronics withstand extreme cold](https://discovery.kaust.edu.sa/en/article/26858/gallium-oxide-electronics-withstand-extreme-cold/)
* [2026-04-27, 10:49:00](https://soylentnews.org/article.pl?sid=26/04/25/1736211&amp;from=rss) - [Surveillance Pricing Set to be Banned in Maryland. Could This be the End of the Predatory Retail?](https://soylentnews.org/article.pl?sid=26/04/25/1736211&amp;from=rss)
* [2026-04-27, 06:04:00](https://soylentnews.org/article.pl?sid=26/04/25/1727249&amp;from=rss) - [NASA&apos;s Curiosity Rover Found Promising Organic Chemicals on Mars](https://soylentnews.org/article.pl?sid=26/04/25/1727249&amp;from=rss)
* [2026-04-27, 01:20:00](https://soylentnews.org/article.pl?sid=26/04/25/1722204&amp;from=rss) - [The Newest Influencer Health Hack? Nicotine](https://soylentnews.org/article.pl?sid=26/04/25/1722204&amp;from=rss)
* [2026-04-26, 20:34:00](https://soylentnews.org/article.pl?sid=26/04/25/1336233&amp;from=rss) - [Chinese Scientists Aim to Save Moore&apos;s Law by Mass-Growing 2D Materials That &apos;Outclass Silicon&apos;](https://soylentnews.org/article.pl?sid=26/04/25/1336233&amp;from=rss)
* [2026-04-26, 15:53:00](https://soylentnews.org/article.pl?sid=26/04/25/1332245&amp;from=rss) - [The Surprising Origin of 4 Features That Superglue Kids and Adults to Screens](https://soylentnews.org/article.pl?sid=26/04/25/1332245&amp;from=rss)
* [2026-04-26, 11:05:00](https://soylentnews.org/article.pl?sid=26/04/24/1514234&amp;from=rss) - [A New Liquid Battery Stores Solar Heat for Weeks](https://soylentnews.org/article.pl?sid=26/04/24/1514234&amp;from=rss)
* [2026-04-26, 06:20:00](https://soylentnews.org/article.pl?sid=26/04/24/1241239&amp;from=rss) - [European Civil Servants Are Being Forced Off WhatsApp](https://soylentnews.org/article.pl?sid=26/04/24/1241239&amp;from=rss)
* [2026-04-26, 01:36:00](https://soylentnews.org/article.pl?sid=26/04/24/1238217&amp;from=rss) - [The Dumbest Hack of the Year Exposed a Very Real Problem](https://soylentnews.org/article.pl?sid=26/04/24/1238217&amp;from=rss)
* [2026-04-25, 20:54:00](https://soylentnews.org/article.pl?sid=26/04/24/1234243&amp;from=rss) - [US Wants Rare Earth Independence From China — but Can DARPA Actually Make It Work?](https://soylentnews.org/article.pl?sid=26/04/24/1234243&amp;from=rss)
* [2026-04-25, 16:08:00](https://soylentnews.org/article.pl?sid=26/04/24/1232232&amp;from=rss) - [Contrary to Popular Superstition, AES 128 is Just Fine in a Post](https://soylentnews.org/article.pl?sid=26/04/24/1232232&amp;from=rss)
* [2026-04-25, 11:22:00](https://soylentnews.org/article.pl?sid=26/04/24/1227222&amp;from=rss) - [France Keeps Breaking the Internet to Stop Piracy, Even Though It&apos;s Not Working](https://soylentnews.org/article.pl?sid=26/04/24/1227222&amp;from=rss)
* [2026-04-25, 06:38:00](https://soylentnews.org/article.pl?sid=26/04/24/1220209&amp;from=rss) - [Physicists Witness Pinpricks of Darkness Moving Faster Than the Speed of Light ‪](https://soylentnews.org/article.pl?sid=26/04/24/1220209&amp;from=rss)
* [2026-04-25, 01:56:00](https://soylentnews.org/article.pl?sid=26/04/24/0247228&amp;from=rss) - [Linux Mint Plans for Longer Development Cycle](https://soylentnews.org/article.pl?sid=26/04/24/0247228&amp;from=rss)
