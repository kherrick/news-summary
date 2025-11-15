# [News Summary](https://kherrick.github.io/news-summary/)

## Tech and AI Developments

* [She Used ChatGPT To Win the Virginia Lottery, Then Donated Every Dollar](https://news.slashdot.org/story/25/11/15/0025246/she-used-chatgpt-to-win-the-virginia-lottery-then-donated-every-dollar?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://news.slashdot.org/story/25/11/15/0025246/she-used-chatgpt-to-win-the-virginia-lottery-then-donated-every-dollar?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [AI note-taking startup Fireflies was really two guys typing notes by hand](https://www.pcgamer.com/software/ai/usd1-billion-ai-company-co-founder-admits-that-its-usd100-a-month-transcription-service-was-originally-two-guys-surviving-on-pizza-and-typing-out-notes-by-hand/) ([Comments](https://news.ycombinator.com/item?id=45934447))

* [Mentra (YC W25) Is Hiring: Head of Growth to Make Smart Glasses Mainstream](https://www.ycombinator.com/companies/mentra/jobs/2YbQCRw-make-smart-glasses-mainstream-head-of-growth) ([Comments](https://news.ycombinator.com/item?id=45932131))

* [Sam Altman Celebrates ChatGPT Finally Following Em Dash Formatting Rules](https://slashdot.org/story/25/11/14/2129248/sam-altman-celebrates-chatgpt-finally-following-em-dash-formatting-rules?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://slashdot.org/story/25/11/14/2129248/sam-altman-celebrates-chatgpt-finally-following-em-dash-formatting-rules?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Security and Privacy Breaches

* [Logitech Reports Data Breach From Zero-Day Software Vulnerability](https://yro.slashdot.org/story/25/11/14/2140205/logitech-reports-data-breach-from-zero-day-software-vulnerability?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://yro.slashdot.org/story/25/11/14/2140205/logitech-reports-data-breach-from-zero-day-software-vulnerability?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Russian Hackers Abuse Hyper-V to Hide Malware in Linux VMs](https://soylentnews.org/article.pl?sid=25/11/13/0318258&from=rss) ([Comments](https://soylentnews.org/article.pl?sid=25/11/13/0318258&from=rss))

* [The disguised return of EU Chat Control](https://reclaimthenet.org/the-disguised-return-of-the-eus-private-message-scanning-plot) ([Comments](https://news.ycombinator.com/item?id=45929511))

* [Five People Plead Quilty To Helping North Koreans Infiltrate US Companies](https://yro.slashdot.org/story/25/11/14/2143240/five-people-plead-quilty-to-helping-north-koreans-infiltrate-us-companies?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://yro.slashdot.org/story/25/11/14/2143240/five-people-plead-quilty-to-helping-north-koreans-infiltrate-us-companies?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Innovations in Technology

* [Announcing IncusOS](https://discuss.linuxcontainers.org/t/announcing-incusos/25139) ([Comments](https://lobste.rs/s/9l70qt/announcing_incusos))

* [Moonpool and OCaml5 in Imandrax](https://docs.imandra.ai/imandrax/blog/2025-11-12-moonpool-in-imandrax/) ([Comments](https://lobste.rs/s/4vb7wg/moonpool_ocaml5_imandrax))

* [Furgit: fast implementation of Git in pure Go](https://github.com/runxiyu/furgit) ([Comments](https://lobste.rs/s/xsq6ld/furgit_fast_implementation_git_pure_go))

* [Apple's $230 iPhone Pocket Sells Out Nearly Immediately](https://apple.slashdot.org/story/25/11/15/0011232/apples-230-iphone-pocket-sells-out-nearly-immediately?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([Comments](https://apple.slashdot.org/story/25/11/15/0011232/apples-230-iphone-pocket-sells-out-nearly-immediately?utm_source=rss1.0mainlinkanon&utm_medium=feed))

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

* [2025-11-15, 03:58:01](https://news.ycombinator.com/item?id=45934940) - [I can&apos;t recommend Grafana anymore](https://henrikgerdes.me/blog/2025-11-grafana-mess/)
* [2025-11-15, 03:30:00](https://news.slashdot.org/story/25/11/15/0025246/she-used-chatgpt-to-win-the-virginia-lottery-then-donated-every-dollar?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [She Used ChatGPT To Win the Virginia Lottery, Then Donated Every Dollar](https://news.slashdot.org/story/25/11/15/0025246/she-used-chatgpt-to-win-the-virginia-lottery-then-donated-every-dollar?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-15, 03:22:49](https://lobste.rs/s/z0midp/go_s_sweet_16) - [Go’s Sweet 16](https://go.dev/blog/16years)
* [2025-11-15, 02:58:56](https://news.ycombinator.com/item?id=45934683) - [Over-reliance on English hinders cognitive science](https://www.cell.com/trends/cognitive-sciences/fulltext/S1364-6613(22)00236-4)
* [2025-11-15, 02:11:43](https://news.ycombinator.com/item?id=45934447) - [AI note-taking startup Fireflies was really two guys typing notes by hand](https://www.pcgamer.com/software/ai/usd1-billion-ai-company-co-founder-admits-that-its-usd100-a-month-transcription-service-was-originally-two-guys-surviving-on-pizza-and-typing-out-notes-by-hand/)
* [2025-11-15, 01:54:00](https://soylentnews.org/article.pl?sid=25/11/13/0359225&amp;from=rss) - [How to Declutter, Quiet Down, and Take the AI Out of Windows 11 25H2](https://soylentnews.org/article.pl?sid=25/11/13/0359225&amp;from=rss)
* [2025-11-15, 01:30:00](https://entertainment.slashdot.org/story/25/11/15/019213/youtube-tv-and-disney-reach-deal-ending-two-week-blackout-of-espn-abc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [YouTube TV and Disney Reach Deal Ending Two-Week Blackout of ESPN, ABC](https://entertainment.slashdot.org/story/25/11/15/019213/youtube-tv-and-disney-reach-deal-ending-two-week-blackout-of-espn-abc?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-15, 00:50:00](https://apple.slashdot.org/story/25/11/15/0011232/apples-230-iphone-pocket-sells-out-nearly-immediately?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple&apos;s $230 iPhone Pocket Sells Out Nearly Immediately](https://apple.slashdot.org/story/25/11/15/0011232/apples-230-iphone-pocket-sells-out-nearly-immediately?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-15, 00:10:00](https://yro.slashdot.org/story/25/11/14/2143240/five-people-plead-quilty-to-helping-north-koreans-infiltrate-us-companies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Five People Plead Quilty To Helping North Koreans Infiltrate US Companies](https://yro.slashdot.org/story/25/11/14/2143240/five-people-plead-quilty-to-helping-north-koreans-infiltrate-us-companies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-14, 23:39:36](https://news.ycombinator.com/item?id=45933497) - [No Leak, No Problem – Bypassing ASLR with a ROP Chain to Gain RCE](https://modzero.com/en/blog/no-leak-no-problem/)
* [2025-11-14, 23:30:00](https://tech.slashdot.org/story/25/11/14/2153236/russia-imposes-24-hour-mobile-internet-blackout-for-travelers-returning-home?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russia Imposes 24-Hour Mobile Internet Blackout For Travelers Returning Home](https://tech.slashdot.org/story/25/11/14/2153236/russia-imposes-24-hour-mobile-internet-blackout-for-travelers-returning-home?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-14, 22:50:00](https://yro.slashdot.org/story/25/11/14/2140205/logitech-reports-data-breach-from-zero-day-software-vulnerability?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Logitech Reports Data Breach From Zero-Day Software Vulnerability](https://yro.slashdot.org/story/25/11/14/2140205/logitech-reports-data-breach-from-zero-day-software-vulnerability?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-14, 22:43:18](https://lobste.rs/s/xmdarh/no_leak_no_problem_bypassing_aslr_with_rop) - [No Leak, No Problem - Bypassing ASLR with a ROP Chain to Gain RCE](https://modzero.com/en/blog/no-leak-no-problem/)
* [2025-11-14, 22:33:15](https://news.ycombinator.com/item?id=45932962) - [Go&apos;s Sweet 16](https://go.dev/blog/16years)
* [2025-11-14, 22:24:31](https://lobste.rs/s/km1ho1/rmpocalypse_attack_how_catch_22_breaks) - [RMPocalypse Attack: How a Catch-22 Breaks AMD SEV-SNP](https://rmpocalypse.github.io/)
* [2025-11-14, 22:15:04](https://news.ycombinator.com/item?id=45932798) - [SSL Configuration Generator](https://ssl-config.mozilla.org/)
* [2025-11-14, 22:10:00](https://news.slashdot.org/story/25/11/14/2135239/jpmorgan-chase-wins-fight-with-fintech-firms-over-fees-to-access-customer-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [JPMorgan Chase Wins Fight With Fintech Firms Over Fees To Access Customer Data](https://news.slashdot.org/story/25/11/14/2135239/jpmorgan-chase-wins-fight-with-fintech-firms-over-fees-to-access-customer-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-14, 21:30:00](https://slashdot.org/story/25/11/14/2129248/sam-altman-celebrates-chatgpt-finally-following-em-dash-formatting-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sam Altman Celebrates ChatGPT Finally Following Em Dash Formatting Rules](https://slashdot.org/story/25/11/14/2129248/sam-altman-celebrates-chatgpt-finally-following-em-dash-formatting-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-14, 21:21:29](https://lobste.rs/s/svyej1/how_use_uuidv7_python_django_postgresql) - [How to use UUIDv7 in Python, Django and PostgreSQL](https://www.paulox.net//2025/11/14/how-to-use-uuidv7-in-python-django-and-postgresql/)
* [2025-11-14, 21:12:00](https://soylentnews.org/article.pl?sid=25/11/13/0353240&amp;from=rss) - [What Do We Do If SETI is Successful?](https://soylentnews.org/article.pl?sid=25/11/13/0353240&amp;from=rss)
* [2025-11-14, 21:00:25](https://news.ycombinator.com/item?id=45932131) - [Mentra (YC W25) Is Hiring: Head of Growth to Make Smart Glasses Mainstream](https://www.ycombinator.com/companies/mentra/jobs/2YbQCRw-make-smart-glasses-mainstream-head-of-growth)
* [2025-11-14, 19:54:58](https://news.ycombinator.com/item?id=45931403) - [All praise to the lunch ladies](https://bittersoutherner.com/issue-no-12/all-praise-to-the-lunch-ladies)
* [2025-11-14, 19:04:23](https://news.ycombinator.com/item?id=45930598) - [Structured outputs on the Claude Developer Platform](https://www.claude.com/blog/structured-outputs-on-the-claude-developer-platform)
* [2025-11-14, 19:03:18](https://lobste.rs/s/9l70qt/announcing_incusos) - [Announcing IncusOS](https://discuss.linuxcontainers.org/t/announcing-incusos/25139)
* [2025-11-14, 18:35:22](https://news.ycombinator.com/item?id=45930151) - [AI World Clocks](https://clocks.brianmoore.com/)
* [2025-11-14, 18:20:08](https://news.ycombinator.com/item?id=45929921) - [A race condition in Aurora RDS](https://hightouch.com/blog/uncovering-a-race-condition-in-aurora-rds)
* [2025-11-14, 18:05:00](https://tech.slashdot.org/story/25/11/14/1739233/retail-traders-left-exposed-in-high-stakes-crypto-treasury-deals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Retail Traders Left Exposed in High-Stakes Crypto Treasury Deals](https://tech.slashdot.org/story/25/11/14/1739233/retail-traders-left-exposed-in-high-stakes-crypto-treasury-deals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-14, 17:56:12](https://lobste.rs/s/lywf8s/ai_water_issue_is_fake) - [The AI water issue is fake](https://andymasley.substack.com/p/the-ai-water-issue-is-fake)
* [2025-11-14, 17:54:07](https://news.ycombinator.com/item?id=45929511) - [The disguised return of EU Chat Control](https://reclaimthenet.org/the-disguised-return-of-the-eus-private-message-scanning-plot)
* [2025-11-14, 17:43:40](https://news.ycombinator.com/item?id=45929358) - [Bitchat for Gaza – messaging without internet](https://updates.techforpalestine.org/bitchat-for-gaza-messaging-without-internet/)
* [2025-11-14, 17:34:59](https://lobste.rs/s/sokew0/version_control_external_content) - [Version Control External Content Referenced in Your Blog](https://lgug2z.com/articles/version-control-external-content-referenced-in-your-blog/)
* [2025-11-14, 17:24:00](https://entertainment.slashdot.org/story/25/11/14/1715240/only-half-the-homes-in-america-have-cable-tv-anymore?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Only Half the Homes in America Have Cable TV Anymore](https://entertainment.slashdot.org/story/25/11/14/1715240/only-half-the-homes-in-america-have-cable-tv-anymore?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-14, 17:08:15](https://news.ycombinator.com/item?id=45928912) - [Being poor vs. being broke](https://blog.ctms.me/posts/2025-11-14-being-poor-or-being-broke/)
* [2025-11-14, 17:04:49](https://news.ycombinator.com/item?id=45928873) - [Moving Back to a Tiling WM – XMonad](https://wssite.vercel.app/blog/moving-back-to-a-tiling-wm-xmonad)
* [2025-11-14, 16:51:03](https://news.ycombinator.com/item?id=45928709) - [Manganese is Lyme disease&apos;s double-edge sword](https://news.northwestern.edu/stories/2025/11/manganese-is-lyme-diseases-double-edge-sword)
* [2025-11-14, 16:48:00](https://entertainment.slashdot.org/story/25/11/14/1648232/where-have-all-the-tv-cameras-gone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Where Have All the TV Cameras Gone?](https://entertainment.slashdot.org/story/25/11/14/1648232/where-have-all-the-tv-cameras-gone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-14, 16:31:26](https://news.ycombinator.com/item?id=45928492) - [&apos;No One Lives Forever&apos; turns 25 and you still can&apos;t buy it legitimately](https://www.techdirt.com/2025/11/13/no-one-lives-forever-turns-25-you-still-cant-buy-it-legitimately/)
* [2025-11-14, 16:31:00](https://soylentnews.org/article.pl?sid=25/11/13/0325258&amp;from=rss) - [Google Confirms AI Search Will Have Ads, but They May Look Different](https://soylentnews.org/article.pl?sid=25/11/13/0325258&amp;from=rss)
* [2025-11-14, 16:25:42](https://lobste.rs/s/rd1tcy/portable_python_self_contained_python) - [portable_python: Self-contained Python distribution for Linux](https://github.com/qznc/portable_python)
* [2025-11-14, 16:03:58](https://lobste.rs/s/towlmt/marimo_reactive_notebook_for_python) - [marimo — reactive notebook for Python](https://github.com/marimo-team/marimo)
* [2025-11-14, 16:02:00](https://news.slashdot.org/story/25/11/14/1233226/why-every-company-suddenly-wants-to-become-a-bank?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Every Company Suddenly Wants To Become a Bank](https://news.slashdot.org/story/25/11/14/1233226/why-every-company-suddenly-wants-to-become-a-bank?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-14, 15:25:28](https://lobste.rs/s/9appzu/how_we_avoided_side_channels_our_new_post) - [How we avoided side-channels in our new post-quantum Go cryptography libraries](https://blog.trailofbits.com/2025/11/14/how-we-avoided-side-channels-in-our-new-post-quantum-go-cryptography-libraries/)
* [2025-11-14, 15:20:53](https://lobste.rs/s/4vb7wg/moonpool_ocaml5_imandrax) - [Moonpool and OCaml5 in Imandrax](https://docs.imandra.ai/imandrax/blog/2025-11-12-moonpool-in-imandrax/)
* [2025-11-14, 15:20:00](https://slashdot.org/story/25/11/14/1118241/krafton-launches-voluntary-resignation-program-weeks-after-declaring-ai-first-company-future?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Krafton Launches Voluntary Resignation Program Weeks After Declaring &apos;AI-First Company&apos; Future](https://slashdot.org/story/25/11/14/1118241/krafton-launches-voluntary-resignation-program-weeks-after-declaring-ai-first-company-future?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-14, 14:55:57](https://lobste.rs/s/jtpw7d/last_couple_years_v8_s_garbage_collector) - [the last couple years in v8&apos;s garbage collector](https://wingolog.org/archives/2025/11/13/the-last-couple-years-in-v8s-garbage-collector)
* [2025-11-14, 14:46:27](https://news.ycombinator.com/item?id=45927210) - [Linear algebra explains why some words are effectively untranslatable](https://aethermug.com/posts/linear-algebra-explains-why-some-words-are-effectively-untranslatable)
* [2025-11-14, 14:40:00](https://science.slashdot.org/story/25/11/14/0836231/all-lupus-cases-may-be-linked-to-a-common-virus-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [All Lupus Cases May Be Linked To a Common Virus, Study Finds](https://science.slashdot.org/story/25/11/14/0836231/all-lupus-cases-may-be-linked-to-a-common-virus-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-14, 14:00:00](https://news.slashdot.org/story/25/11/14/080207/the-economic-impact-of-brexit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Economic Impact of Brexit](https://news.slashdot.org/story/25/11/14/080207/the-economic-impact-of-brexit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-14, 13:14:44](https://lobste.rs/s/k99bvq/structural_regular_expression_engine) - [A structural regular expression engine for Rust](https://www.sminez.dev/match-it-again-sam/)
* [2025-11-14, 13:07:11](https://lobste.rs/s/zgrrqx/amd_gpus_go_brrr) - [AMD GPUs go brrr](https://hazyresearch.stanford.edu/blog/2025-11-09-amd-brr)
* [2025-11-14, 12:57:01](https://lobste.rs/s/yceoaw/announcing_unikraft_support_for) - [Announcing Unikraft Support for MirageOS Unikernels](https://tarides.com/blog/2025-11-13-announcing-unikraft-support-for-mirageos-unikernels)
* [2025-11-14, 12:44:07](https://news.ycombinator.com/item?id=45926224) - [Winamp clone in Swift for macOS](https://github.com/mgreenwood1001/winamp)
* [2025-11-14, 12:09:59](https://news.ycombinator.com/item?id=45926037) - [Magit manuals are available online again](https://github.com/magit/magit/issues/5472)
* [2025-11-14, 11:47:00](https://soylentnews.org/article.pl?sid=25/11/13/0318258&amp;from=rss) - [Russian Hackers Abuse Hyper-V to Hide Malware in Linux VMs](https://soylentnews.org/article.pl?sid=25/11/13/0318258&amp;from=rss)
* [2025-11-14, 10:54:20](https://lobste.rs/s/ndfgai/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/ndfgai/what_are_you_doing_this_weekend)
* [2025-11-14, 09:23:47](https://lobste.rs/s/l4vg9a/this_isn_t_battle) - [This Isn&apos;t a Battle](https://my-notes.dragas.net/2025/11/14/this-isnt-a-battle/)
* [2025-11-14, 06:59:00](https://soylentnews.org/article.pl?sid=25/11/13/0314253&amp;from=rss) - [Your Worn-Out Keyboard Keys Reveal More About You Than You Think](https://soylentnews.org/article.pl?sid=25/11/13/0314253&amp;from=rss)
* [2025-11-14, 06:54:12](https://lobste.rs/s/9dkn3m/nation_state_threat_actor_used_claude) - [Nation state threat actor used Claude Code to orchestrate cyber attacks](https://www.anthropic.com/news/disrupting-AI-espionage)
* [2025-11-14, 05:23:04](https://lobste.rs/s/3wgqtc/how_get_north_korea_antarctica_vps) - [How to Get a North Korea / Antarctica VPS](https://blog.lyc8503.net/en/post/asn-5-worldwide-servers/)
* [2025-11-14, 04:48:43](https://lobste.rs/s/xsq6ld/furgit_fast_implementation_git_pure_go) - [Furgit: fast implementation of Git in pure Go](https://github.com/runxiyu/furgit)
* [2025-11-14, 03:33:44](https://lobste.rs/s/3rqy74/logic_cue) - [The Logic of CUE](https://cuelang.org/docs/concept/the-logic-of-cue/)
* [2025-11-14, 02:27:20](https://news.ycombinator.com/item?id=45923188) - [HipKittens: Fast and furious AMD kernels](https://hazyresearch.stanford.edu/blog/2025-11-09-hk)
* [2025-11-14, 02:12:00](https://soylentnews.org/article.pl?sid=25/11/13/033247&amp;from=rss) - [Bombshell Report Exposes How Meta Relied on Scam Ad Profits to Fund AI](https://soylentnews.org/article.pl?sid=25/11/13/033247&amp;from=rss)
* [2025-11-13, 21:23:00](https://soylentnews.org/article.pl?sid=25/11/12/1214254&amp;from=rss) - [Google&apos;s Gemini Deep Research Can Now Read Your Gmail and Rummage Through Google Drive](https://soylentnews.org/article.pl?sid=25/11/12/1214254&amp;from=rss)
* [2025-11-13, 20:06:25](https://lobste.rs/s/nrrijz/rust_android_move_fast_fix_things) - [Rust in Android: move fast and fix things](https://security.googleblog.com/2025/11/rust-in-android-move-fast-fix-things.html)
* [2025-11-13, 16:41:00](https://soylentnews.org/article.pl?sid=25/11/12/124239&amp;from=rss) - [Microsoft Task Manager Bug Spawns New Processes](https://soylentnews.org/article.pl?sid=25/11/12/124239&amp;from=rss)
* [2025-11-13, 15:51:03](https://lobste.rs/s/4inlhr/language_design_notes) - [Language Design Notes](https://cs.lmu.edu/~ray/notes/languagedesignnotes/)
* [2025-11-13, 15:41:56](https://lobste.rs/s/knelbm/there_is_no_such_thing_as_3_5_inch_floppy) - [There is no such thing as a 3.5 inch floppy disc](https://jdebp.uk/FGA/floppy-discs-are-90mm-not-3-and-a-half-inches.html)
* [2025-11-13, 14:43:58](https://lobste.rs/s/6dfpil/parsing_integers_c) - [Parsing integers in C](https://daniel.haxx.se/blog/2025/11/13/parsing-integers-in-c/)
* [2025-11-13, 11:57:00](https://soylentnews.org/article.pl?sid=25/11/11/0337247&amp;from=rss) - [Want to be More Persuasive? Talk With Your Hands, Study Finds](https://soylentnews.org/article.pl?sid=25/11/11/0337247&amp;from=rss)
* [2025-11-13, 07:05:00](https://soylentnews.org/article.pl?sid=25/11/11/0336223&amp;from=rss) - [Hyundai&apos;s New EV Training Center Opens Amid Market Turmoil](https://soylentnews.org/article.pl?sid=25/11/11/0336223&amp;from=rss)
* [2025-11-13, 02:33:00](https://soylentnews.org/article.pl?sid=25/11/11/0334251&amp;from=rss) - [Sun: First Glimpse of Polar Magnetic Field in Motion](https://soylentnews.org/article.pl?sid=25/11/11/0334251&amp;from=rss)
* [2025-11-12, 21:49:00](https://soylentnews.org/article.pl?sid=25/11/10/1942230&amp;from=rss) - [Brewing Controversy: How Coffee Sparked Fierce Debate in the 16th-Century](https://soylentnews.org/article.pl?sid=25/11/10/1942230&amp;from=rss)
* [2025-11-12, 17:05:00](https://soylentnews.org/article.pl?sid=25/11/10/1939208&amp;from=rss) - [NASA Confirms Voyager Spacecraft Has Encountered a “Wall of Fire” at the Edge of the Solar System](https://soylentnews.org/article.pl?sid=25/11/10/1939208&amp;from=rss)
* [2025-11-12, 12:24:00](https://soylentnews.org/article.pl?sid=25/11/10/1931219&amp;from=rss) - [FBI Tries to Unmask Owner of Infamous Archive.is Site](https://soylentnews.org/article.pl?sid=25/11/10/1931219&amp;from=rss)
* [2025-11-12, 07:34:00](https://soylentnews.org/article.pl?sid=25/11/10/1925212&amp;from=rss) - [Trinity Desktop Environment R14.1.5 Released with Support for Debian Trixie](https://soylentnews.org/article.pl?sid=25/11/10/1925212&amp;from=rss)
* [2025-11-12, 02:51:00](https://soylentnews.org/article.pl?sid=25/11/10/122217&amp;from=rss) - [The Art and Science of Negotiation](https://soylentnews.org/article.pl?sid=25/11/10/122217&amp;from=rss)
* [2025-11-11, 22:03:00](https://soylentnews.org/article.pl?sid=25/11/10/1159252&amp;from=rss) - [MX Linux 25 “Infinity” Is Now Available for Download, Based on Debian 13 “Trixie”](https://soylentnews.org/article.pl?sid=25/11/10/1159252&amp;from=rss)
* [2025-11-11, 17:18:00](https://soylentnews.org/article.pl?sid=25/11/10/1130222&amp;from=rss) - [New Physical Attacks Are Quickly Diluting Secure Enclave Defenses From Nvidia, AMD, and Intel](https://soylentnews.org/article.pl?sid=25/11/10/1130222&amp;from=rss)
* [2025-11-11, 13:52:15](https://news.ycombinator.com/item?id=45887262) - [Has Google solved two of AI’s oldest problems?](https://generativehistory.substack.com/p/has-google-quietly-solved-two-of)
* [2025-11-11, 12:37:00](https://soylentnews.org/article.pl?sid=25/11/09/141240&amp;from=rss) - [Watch Out for These Recent Windows and NPM Vulnerabilities](https://soylentnews.org/article.pl?sid=25/11/09/141240&amp;from=rss)
* [2025-11-11, 09:48:05](https://news.ycombinator.com/item?id=45885677) - [Xqerl – Erlang XQuery 3.1 Processor](https://zadean.github.io/xqerl/)
* [2025-11-11, 07:50:00](https://soylentnews.org/article.pl?sid=25/11/09/1352235&amp;from=rss) - [UK Carriers to Block Spoofed Phone Numbers in Fraud Crackdown](https://soylentnews.org/article.pl?sid=25/11/09/1352235&amp;from=rss)
* [2025-11-11, 03:04:00](https://soylentnews.org/article.pl?sid=25/11/09/1338227&amp;from=rss) - [AI Sets Up Kodak Moment for Global Consultants](https://soylentnews.org/article.pl?sid=25/11/09/1338227&amp;from=rss)
