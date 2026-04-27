# [News Summary](https://kherrick.github.io/news-summary/)

## Taxation and Policy Developments

* [California's Billionaire Tax Has the Signatures to Make the Ballot](https://news.slashdot.org/story/26/04/27/0335242/californias-billionaire-tax-has-the-signatures-to-make-the-ballot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - California's proposed billionaire tax has successfully gathered enough signatures to qualify for the ballot, marking a significant step in legislative and political efforts to address income inequality.

## Technology and Cybersecurity

* [DeepSeek V4 Arrives With Near State-of-the-Art Intelligence At 1/6th the Cost](https://news.slashdot.org/story/26/04/27/0328257/deepseek-v4-arrives-with-near-state-of-the-art-intelligence-at-16th-the-cost?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - An advanced new AI model, DeepSeek V4, achieves near state-of-the-art capabilities at significantly reduced costs, potentially expanding access to cutting-edge AI technology.

* [Running Local LLMs Offline on a Ten-Hour Flight](https://deploy.live/blog/running-local-llms-offline-on-a-ten-hour-flight/) - The challenges and successes of operating local large language models (LLMs) offline on extended travel, showcasing the viability of running AI without constant internet connectivity.

* [Show HN: A terminal spreadsheet editor with Vim keybindings](https://github.com/garritfra/cell) - A new open-source terminal-based spreadsheet editor with Vim-like keybindings offers developers enhanced productivity for data manipulation tasks.

## Legal and Ethical Issues

* [US Supreme Court Reviews Police Use of Cell Location Data to Find Criminals](https://www.nytimes.com/2026/04/27/us/politics/supreme-court-cell-data-geofence.html) - The U.S. Supreme Court is deliberating a pivotal case concerning law enforcement's use of geofence warrants and cell location data in criminal investigations.

* [Bank Robber Challenges Conviction Based on His Cellphone's Location Data](https://yro.slashdot.org/story/26/04/27/0113209/bank-robber-challenges-conviction-based-on-his-cellphones-location-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A bank robber appeals his conviction, citing the use of cellphone location data, raising questions about privacy and legal evidence.

## Scientific Breakthroughs

* [NASA's Curiosity Rover Found Promising Organic Chemicals on Mars](https://soylentnews.org/article.pl?sid=26/04/25/1727249&amp;from=rss) - NASA's Curiosity Rover has discovered promising organic compounds on Mars, offering new insights into the planet's potential for past life.

* [FDA Approves First-Ever Gene Therapy for Treatment of Genetic Hearing Loss](https://www.fda.gov/news-events/press-announcements/fda-approves-first-ever-gene-therapy-treatment-genetic-hearing-loss-under-national-priority-voucher) - A groundbreaking gene therapy for the treatment of genetic hearing loss has been approved by the FDA, marking a significant milestone in medical science.

## Notable Innovations

* [Tendril – a self-extending agent that builds and registers its own tools](https://github.com/serverless-dna/tendril) - Meet Tendril: a cutting-edge self-expanding agent capable of developing and registering its own utilities for dynamic functionality.

* [The gold standard of optimization: A look under the hood of RollerCoaster Tycoon](https://larstofus.com/2026/03/22/the-gold-standard-of-optimization-a-look-under-the-hood-of-rollercoaster-tycoon/) - A deep dive into the groundbreaking optimization techniques used in the classic game RollerCoaster Tycoon.

## Business and Industry

* [Microsoft and OpenAI end their exclusive and revenue-sharing deal](https://www.bloomberg.com/news/articles/2026-04-27/microsoft-to-stop-sharing-revenue-with-main-ai-partner-openai) - A major shift in the partnership between tech giants as Microsoft announces the end of its exclusive and revenue-sharing agreement with OpenAI.

* [Two Hot Climate Tech Startups Just Raised $1 Billion+ in IPOs ](https://news.slashdot.org/story/26/04/27/0437225/two-hot-climate-tech-startups-just-raised-1-billion-in-ipos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Two climate technology startups make headlines by raising over $1 billion each in highly successful IPOs.

* [Dutch central bank dithces AWS and chooses Lidl for European Cloud](https://www.techzine.eu/news/infrastructure/140634/dutch-central-bank-chooses-lidl-for-european-cloud/) - In a surprising shift, the Dutch central bank has replaced its AWS infrastructure with Lidl's European cloud services for better data management and sovereignty.

## Cultural Trends and Commentary

* [Men who stare at walls](https://www.alexselimov.com/posts/men_who_stare_at_walls/) - Reflective musings on the human experience and existential thoughts inspired by moments of stillness and solitude.

* [America Now Has 70% More Bookstores Than in 2020, Says Bookshop.org Founder](https://news.slashdot.org/story/26/04/27/052242/america-now-has-70-more-bookstores-than-in-2020-says-bookshoporg-founder?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - An encouraging update on the U.S. bookstore industry, revealing significant growth since 2020 thanks to community-focused bookstores.

## Engineering and Technical Deep Dives

* [From Milliseconds to 26 Nanoseconds: How a $20 eBay SFP Module Beat My Entire NTP Setup](https://austinsnerdythings.com/2026/04/26/ptp-osa5401-26-nanoseconds-raspberry-pi/) - A remarkable story of optimizing network time synchronization down to nanoseconds using inexpensive hardware.

* [HTML written only using the C preprocessor](https://chaos.social/@citizen428/116138240021584394) - A creative exploration of generating HTML using the C preprocessor to highlight coding ingenuity.

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

* [2026-04-27, 16:00:00](https://news.slashdot.org/story/26/04/27/0335242/californias-billionaire-tax-has-the-signatures-to-make-the-ballot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California&apos;s Billionaire Tax Has the Signatures to Make the Ballot](https://news.slashdot.org/story/26/04/27/0335242/californias-billionaire-tax-has-the-signatures-to-make-the-ballot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-27, 15:47:31](https://lobste.rs/s/kxnxyv/i_won_my_foia_against_twelve_south_open_up) - [I won my FOIA against Twelve South to open up the electrical information for the PlugBug 120W](https://archive.org/details/pb120-us)
* [2026-04-27, 15:36:12](https://news.ycombinator.com/item?id=47923010) - [Apple is dropping AFP/TimeCapsule support in macOS 27](https://eclecticlight.co/2026/04/23/networking-changes-coming-in-macos-27/)
* [2026-04-27, 15:33:00](https://soylentnews.org/article.pl?sid=26/04/26/0029226&amp;from=rss) - [Privacy Email Service Tuta Now Also Has Cloud Storage with Quantum-Resistant Encryption](https://soylentnews.org/article.pl?sid=26/04/26/0029226&amp;from=rss)
* [2026-04-27, 15:31:36](https://news.ycombinator.com/item?id=47922957) - [The Woes of Sanitizing SVGs](https://muffin.ink/blog/scratch-svg-sanitization/)
* [2026-04-27, 15:29:41](https://news.ycombinator.com/item?id=47922940) - [US Supreme Court Reviews Police Use of Cell Location Data to Find Criminals](https://www.nytimes.com/2026/04/27/us/politics/supreme-court-cell-data-geofence.html)
* [2026-04-27, 15:12:41](https://news.ycombinator.com/item?id=47922712) - [Dutch central bank dithces AWS and chooses Lidl for European Cloud](https://www.techzine.eu/news/infrastructure/140634/dutch-central-bank-chooses-lidl-for-european-cloud/)
* [2026-04-27, 15:00:00](https://news.slashdot.org/story/26/04/27/0328257/deepseek-v4-arrives-with-near-state-of-the-art-intelligence-at-16th-the-cost?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DeepSeek V4 Arrives With Near State-of-the-Art Intelligence At 1/6th the Cost](https://news.slashdot.org/story/26/04/27/0328257/deepseek-v4-arrives-with-near-state-of-the-art-intelligence-at-16th-the-cost?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-27, 14:59:11](https://lobste.rs/s/yszhgw/compositing_blending) - [Compositing &amp; Blending](https://nik.digital/posts/compositing-blending)
* [2026-04-27, 14:38:12](https://lobste.rs/s/5wxd5b/html_written_only_using_c_preprocessor) - [HTML written only using the C preprocessor](https://chaos.social/@citizen428/116138240021584394)
* [2026-04-27, 14:25:42](https://lobste.rs/s/nmnp96/voice_modems) - [voice modems](https://computer.rip/2026-04-26-voice-modems.html)
* [2026-04-27, 14:24:53](https://news.ycombinator.com/item?id=47922079) - [\&quot;Why not just use Lean?\&quot;](https://lawrencecpaulson.github.io//2026/04/23/Why_not_Lean.html)
* [2026-04-27, 14:16:15](https://lobste.rs/s/h0izqx/abject_v0_3_9) - [Abject v0.3.9](https://abject.world)
* [2026-04-27, 14:01:00](https://lobste.rs/s/esrk11/email_is_crazy) - [Email is crazy](https://samkhawase.com/blog/email-is-crazy/)
* [2026-04-27, 13:34:48](https://news.ycombinator.com/item?id=47921377) - [Tendril – a self-extending agent that builds and registers its own tools](https://github.com/serverless-dna/tendril)
* [2026-04-27, 13:22:42](https://news.ycombinator.com/item?id=47921248) - [Microsoft and OpenAI end their exclusive and revenue-sharing deal](https://www.bloomberg.com/news/articles/2026-04-27/microsoft-to-stop-sharing-revenue-with-main-ai-partner-openai)
* [2026-04-27, 13:05:59](https://news.ycombinator.com/item?id=47921064) - [Running Local LLMs Offline on a Ten-Hour Flight](https://deploy.live/blog/running-local-llms-offline-on-a-ten-hour-flight/)
* [2026-04-27, 12:50:05](https://lobste.rs/s/bwm12z/freebsd_device_driver_book) - [FreeBSD Device Driver Book](https://github.com/ebrandi/FDD-book)
* [2026-04-27, 12:35:55](https://news.ycombinator.com/item?id=47920787) - [Show HN: OSS Agent I built topped the TerminalBench on Gemini-3-flash-preview](https://github.com/dirac-run/dirac)
* [2026-04-27, 11:39:49](https://news.ycombinator.com/item?id=47920289) - [Show HN: A terminal spreadsheet editor with Vim keybindings](https://github.com/garritfra/cell)
* [2026-04-27, 11:14:00](https://news.slashdot.org/story/26/04/27/052242/america-now-has-70-more-bookstores-than-in-2020-says-bookshoporg-founder?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America Now Has 70% More Bookstores Than in 2020, Says Bookshop.org Founder](https://news.slashdot.org/story/26/04/27/052242/america-now-has-70-more-bookstores-than-in-2020-says-bookshoporg-founder?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-27, 11:08:26](https://news.ycombinator.com/item?id=47920074) - [Men who stare at walls](https://www.alexselimov.com/posts/men_who_stare_at_walls/)
* [2026-04-27, 10:56:34](https://news.ycombinator.com/item?id=47919997) - [Pgbackrest is no longer being maintained](https://github.com/pgbackrest/pgbackrest)
* [2026-04-27, 10:51:27](https://lobste.rs/s/uf38bg/niri_v26_04) - [Niri v26.04](https://github.com/niri-wm/niri/releases/tag/v26.04)
* [2026-04-27, 10:49:00](https://soylentnews.org/article.pl?sid=26/04/25/1736211&amp;from=rss) - [Surveillance Pricing Set to be Banned in Maryland. Could This be the End of the Predatory Retail?](https://soylentnews.org/article.pl?sid=26/04/25/1736211&amp;from=rss)
* [2026-04-27, 10:43:00](https://lobste.rs/s/kjk44q/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/kjk44q/what_are_you_doing_this_week)
* [2026-04-27, 10:32:05](https://lobste.rs/s/00eboi/httpxyz_one_month) - [httpxyz one month in](https://tildeweb.nl/~michiel/httpxyz-one-month-in.html)
* [2026-04-27, 10:15:17](https://news.ycombinator.com/item?id=47919733) - [FDA Approves First-Ever Gene Therapy for Treatment of Genetic Hearing Loss](https://www.fda.gov/news-events/press-announcements/fda-approves-first-ever-gene-therapy-treatment-genetic-hearing-loss-under-national-priority-voucher)
* [2026-04-27, 09:57:10](https://news.ycombinator.com/item?id=47919630) - [4TB of voice samples just stolen from 40k AI contractors at Mercor](https://app.oravys.com/blog/mercor-breach-2026)
* [2026-04-27, 09:08:32](https://lobste.rs/s/mytuvk/running_gauntlet_tiny_nodejs_test_runner) - [Running the Gauntlet: a tiny nodejs test runner](https://robey.lag.net/2026/04/26/running-gauntlet.html)
* [2026-04-27, 08:55:46](https://lobste.rs/s/trap9p/from_milliseconds_26_nanoseconds_how_20) - [From Milliseconds to 26 Nanoseconds: How a $20 eBay SFP Module Beat My Entire NTP Setup](https://austinsnerdythings.com/2026/04/26/ptp-osa5401-26-nanoseconds-raspberry-pi/)
* [2026-04-27, 08:54:57](https://news.ycombinator.com/item?id=47919240) - [Quarkdown – Markdown with Superpowers](https://quarkdown.com/)
* [2026-04-27, 08:52:04](https://lobste.rs/s/99jbw2/gold_standard_optimization_look_under) - [The gold standard of optimization: A look under the hood of RollerCoaster Tycoon](https://larstofus.com/2026/03/22/the-gold-standard-of-optimization-a-look-under-the-hood-of-rollercoaster-tycoon/)
* [2026-04-27, 08:11:16](https://news.ycombinator.com/item?id=47918961) - [It&apos;s OK to abandon your side-project (2024)](https://robbowen.digital/wrote-about/abandoned-side-projects/)
* [2026-04-27, 07:34:00](https://news.slashdot.org/story/26/04/27/0437225/two-hot-climate-tech-startups-just-raised-1-billion-in-ipos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Two Hot Climate Tech Startups Just Raised $1 Billion+ in IPOs ](https://news.slashdot.org/story/26/04/27/0437225/two-hot-climate-tech-startups-just-raised-1-billion-in-ipos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-27, 06:20:36](https://lobste.rs/s/h8hlp7/wasm_is_not_quite_stack_machine) - [Wasm is not quite a stack machine](https://purplesyringa.moe/blog/wasm-is-not-quite-a-stack-machine/)
* [2026-04-27, 06:04:00](https://soylentnews.org/article.pl?sid=26/04/25/1727249&amp;from=rss) - [NASA&apos;s Curiosity Rover Found Promising Organic Chemicals on Mars](https://soylentnews.org/article.pl?sid=26/04/25/1727249&amp;from=rss)
* [2026-04-27, 05:32:27](https://lobste.rs/s/9ckz9x/let_s_build_terminal_pt_1) - [Let&apos;s Build the Terminal Pt. 1](https://chauhankiran.blogspot.com/2026/04/lets-build-terminal-pt-1.html)
* [2026-04-27, 03:34:00](https://news.slashdot.org/story/26/04/27/0210243/right-to-repair-laws-gain-political-momentum-across-america?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Right-to-Repair Laws Gain Political Momentum Across America](https://news.slashdot.org/story/26/04/27/0210243/right-to-repair-laws-gain-political-momentum-across-america?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-27, 02:50:01](https://lobste.rs/s/l4kgqg/cryptographic_registries_considered) - [(Cryptographic) Registries Considered Harmful (2020)](https://words.filippo.io/registries-considered-harmful/)
* [2026-04-27, 02:18:58](https://news.ycombinator.com/item?id=47917026) - [The Prompt API](https://developer.chrome.com/docs/ai/prompt-api)
* [2026-04-27, 01:54:32](https://news.ycombinator.com/item?id=47916890) - [TurboQuant: A first-principles walkthrough](https://arkaung.github.io/interactive-turboquant/)
* [2026-04-27, 01:20:00](https://soylentnews.org/article.pl?sid=26/04/25/1722204&amp;from=rss) - [The Newest Influencer Health Hack? Nicotine](https://soylentnews.org/article.pl?sid=26/04/25/1722204&amp;from=rss)
* [2026-04-27, 01:14:00](https://yro.slashdot.org/story/26/04/27/0113209/bank-robber-challenges-conviction-based-on-his-cellphones-location-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bank Robber Challenges Conviction Based on His Cellphone&apos;s Location Data](https://yro.slashdot.org/story/26/04/27/0113209/bank-robber-challenges-conviction-based-on-his-cellphones-location-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-26, 23:48:00](https://it.slashdot.org/story/26/04/26/2345211/google-studies-prompt-injection-attacks-against-ai-agents-browsing-the-web?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Studies Prompt Injection Attacks Against AI Agents Browsing the Web](https://it.slashdot.org/story/26/04/26/2345211/google-studies-prompt-injection-attacks-against-ai-agents-browsing-the-web?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-26, 23:28:05](https://lobste.rs/s/5dbg0u/hardenedbsd_is_now_officially_on_radicle) - [HardenedBSD Is Now Officially on Radicle](https://hardenedbsd.org/article/shawn-webb/2026-04-26/hardenedbsd-officially-radicle)
* [2026-04-26, 21:59:00](https://news.slashdot.org/story/26/04/26/2155259/elon-musk-vies-to-turn-x-into-super-app-with-banking-tool-near-launch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Elon Musk Vies to Turn X Into Super App With Banking Tool Near Launch](https://news.slashdot.org/story/26/04/26/2155259/elon-musk-vies-to-turn-x-into-super-app-with-banking-tool-near-launch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-26, 20:54:00](https://tech.slashdot.org/story/26/04/26/2038235/remembering-the-1984-unix-pc-why-did-it-fail-so-hard?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Remembering The 1984 Unix PC. Why Did It Fail So Hard?](https://tech.slashdot.org/story/26/04/26/2038235/remembering-the-1984-unix-pc-why-did-it-fail-so-hard?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-26, 20:41:06](https://news.ycombinator.com/item?id=47914165) - [I bought Friendster for $30k – Here&apos;s what I&apos;m doing with it](https://ca98am79.medium.com/i-bought-friendster-for-30k-heres-what-i-m-doing-with-it-d5e8ddb3991d)
* [2026-04-26, 20:34:00](https://soylentnews.org/article.pl?sid=26/04/25/1336233&amp;from=rss) - [Chinese Scientists Aim to Save Moore&apos;s Law by Mass-Growing 2D Materials That &apos;Outclass Silicon&apos;](https://soylentnews.org/article.pl?sid=26/04/25/1336233&amp;from=rss)
* [2026-04-26, 20:18:37](https://news.ycombinator.com/item?id=47913855) - [Fast16: High-precision software sabotage 5 years before Stuxnet](https://www.sentinelone.com/labs/fast16-mystery-shadowbrokers-reference-reveals-high-precision-software-sabotage-5-years-before-stuxnet/)
* [2026-04-26, 20:03:12](https://news.ycombinator.com/item?id=47913650) - [AI should elevate your thinking, not replace it](https://www.koshyjohn.com/blog/ai-should-elevate-your-thinking-not-replace-it/)
* [2026-04-26, 19:54:00](https://apple.slashdot.org/story/26/04/26/1951219/how-will-apple-change-under-its-new-ceo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Will Apple Change Under Its New CEO?](https://apple.slashdot.org/story/26/04/26/1951219/how-will-apple-change-under-its-new-ceo?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-26, 19:35:38](https://lobste.rs/s/b2tvhe/why_future_doesn_t_need_us_bill_joy_2000) - [Why the Future Doesn&apos;t Need Us (Bill Joy, 2000)](https://web.archive.org/web/20160210081017/https://www.wired.com/2000/04/joy-2/)
* [2026-04-26, 18:31:47](https://lobste.rs/s/fyev5y/smolwebifying_my_site) - [Smolwebifying my site](https://akselmo.dev/posts/smolwebifying-my-site/)
* [2026-04-26, 18:06:00](https://linux.slashdot.org/story/26/04/26/184253/linux-version-of-frameworks-laptop-13-pro-is-outselling-its-windows-variant?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux Version of Framework&apos;s Laptop 13 Pro is Outselling Its Windows Variant](https://linux.slashdot.org/story/26/04/26/184253/linux-version-of-frameworks-laptop-13-pro-is-outselling-its-windows-variant?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-26, 16:45:45](https://lobste.rs/s/v247np/dillo_release_3_3_0) - [Dillo release 3.3.0](https://dillo-browser.org/release/3.3.0/)
* [2026-04-26, 16:34:00](https://science.slashdot.org/story/26/04/26/0815214/new-problem-for-nasas-lunar-gateway-corrosion-in-two-modules-caused-by-supplier?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Problem for NASA&apos;s &apos;Lunar Gateway&apos;:  Corrosion in Two Modules Caused by Supplier](https://science.slashdot.org/story/26/04/26/0815214/new-problem-for-nasas-lunar-gateway-corrosion-in-two-modules-caused-by-supplier?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-26, 15:53:00](https://soylentnews.org/article.pl?sid=26/04/25/1332245&amp;from=rss) - [The Surprising Origin of 4 Features That Superglue Kids and Adults to Screens](https://soylentnews.org/article.pl?sid=26/04/25/1332245&amp;from=rss)
* [2026-04-26, 15:34:00](https://news.slashdot.org/story/26/04/25/066224/how-teachers-fight-students-shortening-attention-spans-shorter-activities-hands-on-projects-and-meditation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Teachers Fight Students&apos; Shortening Attention Spans  Shorter Activities, Hands-On Projects, and Meditation](https://news.slashdot.org/story/26/04/25/066224/how-teachers-fight-students-shortening-attention-spans-shorter-activities-hands-on-projects-and-meditation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-26, 14:22:59](https://lobste.rs/s/ukar7d/lua_can_be_really_cool_html_templating) - [Lua can be a really cool HTML templating engine](https://riki.house/lua-html)
* [2026-04-26, 14:19:13](https://lobste.rs/s/2lzsw6/swissing_table) - [Swissing a table](https://philpearl.github.io/post/swissing_a_table/)
* [2026-04-26, 14:04:00](https://games.slashdot.org/story/26/04/26/0719241/fans-angry-over-pokemon-go-champions-disqualification-for-allegedly-shaking-the-table?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fans Angry Over Pokemon Go Champion&apos;s Disqualification For Allegedly Shaking the Table](https://games.slashdot.org/story/26/04/26/0719241/fans-angry-over-pokemon-go-champions-disqualification-for-allegedly-shaking-the-table?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-26, 13:45:03](https://news.ycombinator.com/item?id=47910287) - [Branimir Lambov from IBM on Cassandra](https://theconsensus.dev/p/2026/04/26/branimir-lambov-from-ibm-on-cassandra.html)
* [2026-04-26, 13:01:54](https://lobste.rs/s/viax22/fastest_linux_timestamps) - [The fastest Linux timestamps](https://www.hmpcabral.com/2026/04/26/the-fastest-linux-timestamps/)
* [2026-04-26, 12:10:21](https://lobste.rs/s/bzrow5/asahi_linux_progress_report_linux_7_0) - [Asahi Linux Progress Report: Linux 7.0](https://asahilinux.org/2026/04/progress-report-7-0/)
* [2026-04-26, 11:34:00](https://yro.slashdot.org/story/26/04/26/0541202/privacy-advocate-accuses-us-government-of-investing-in-ai-powered-mass-surveillance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Privacy Advocate Accuses US Government of Investing in AI-Powered Mass Surveillance](https://yro.slashdot.org/story/26/04/26/0541202/privacy-advocate-accuses-us-government-of-investing-in-ai-powered-mass-surveillance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-26, 11:05:00](https://soylentnews.org/article.pl?sid=26/04/24/1514234&amp;from=rss) - [A New Liquid Battery Stores Solar Heat for Weeks](https://soylentnews.org/article.pl?sid=26/04/24/1514234&amp;from=rss)
* [2026-04-26, 08:49:42](https://lobste.rs/s/cpu221/i_left_port_22_open_on_internet_for_54_days) - [I Left Port 22 Open on the Internet for 54 Days. Here&apos;s Who Showed Up](https://arman-bd.hashnode.dev/i-left-port-22-open-on-the-internet-for-54-days-here-s-who-showed-up)
* [2026-04-26, 07:00:39](https://news.ycombinator.com/item?id=47908051) - [Self-updating screenshots](https://interblah.net/self-updating-screenshots)
* [2026-04-26, 06:20:00](https://soylentnews.org/article.pl?sid=26/04/24/1241239&amp;from=rss) - [European Civil Servants Are Being Forced Off WhatsApp](https://soylentnews.org/article.pl?sid=26/04/24/1241239&amp;from=rss)
* [2026-04-26, 01:36:00](https://soylentnews.org/article.pl?sid=26/04/24/1238217&amp;from=rss) - [The Dumbest Hack of the Year Exposed a Very Real Problem](https://soylentnews.org/article.pl?sid=26/04/24/1238217&amp;from=rss)
* [2026-04-25, 23:43:19](https://news.ycombinator.com/item?id=47905761) - [Understanding the short circuit in solid-state batteries](https://www.mpie.de/5151287/short-circuit-solid-state-batteries)
* [2026-04-25, 20:54:00](https://soylentnews.org/article.pl?sid=26/04/24/1234243&amp;from=rss) - [US Wants Rare Earth Independence From China — but Can DARPA Actually Make It Work?](https://soylentnews.org/article.pl?sid=26/04/24/1234243&amp;from=rss)
* [2026-04-25, 18:41:03](https://news.ycombinator.com/item?id=47903541) - [Three constraints before I build anything](https://jordanlord.co.uk/blog/3-constraints/)
* [2026-04-25, 16:08:00](https://soylentnews.org/article.pl?sid=26/04/24/1232232&amp;from=rss) - [Contrary to Popular Superstition, AES 128 is Just Fine in a Post](https://soylentnews.org/article.pl?sid=26/04/24/1232232&amp;from=rss)
* [2026-04-25, 13:28:29](https://news.ycombinator.com/item?id=47901433) - [Fully Featured Audio DSP Firmware for the Raspberry Pi Pico](https://github.com/WeebLabs/DSPi)
* [2026-04-25, 11:39:53](https://news.ycombinator.com/item?id=47900649) - [Getting my daily news from a dot matrix printer 2024](https://aschmelyun.com/blog/getting-my-daily-news-from-a-dot-matrix-printer/)
* [2026-04-25, 11:22:00](https://soylentnews.org/article.pl?sid=26/04/24/1227222&amp;from=rss) - [France Keeps Breaking the Internet to Stop Piracy, Even Though It&apos;s Not Working](https://soylentnews.org/article.pl?sid=26/04/24/1227222&amp;from=rss)
* [2026-04-25, 07:11:55](https://news.ycombinator.com/item?id=47899399) - [Managing the Unmanaged Switch](https://watchmysys.com/blog/2026/03/managing-the-unmanaged-switch/)
* [2026-04-25, 06:38:00](https://soylentnews.org/article.pl?sid=26/04/24/1220209&amp;from=rss) - [Physicists Witness Pinpricks of Darkness Moving Faster Than the Speed of Light ‪](https://soylentnews.org/article.pl?sid=26/04/24/1220209&amp;from=rss)
* [2026-04-25, 01:56:00](https://soylentnews.org/article.pl?sid=26/04/24/0247228&amp;from=rss) - [Linux Mint Plans for Longer Development Cycle](https://soylentnews.org/article.pl?sid=26/04/24/0247228&amp;from=rss)
* [2026-04-24, 21:08:00](https://soylentnews.org/article.pl?sid=26/04/24/0051247&amp;from=rss) - [With Navigating Nematodes, Scientists Map Out How Brains Implement Behaviors](https://soylentnews.org/article.pl?sid=26/04/24/0051247&amp;from=rss)
* [2026-04-24, 17:45:52](https://news.ycombinator.com/item?id=47893516) - [Den stora Älgvandringen – The great moose migration (live)](https://www.svtplay.se/video/jXv3A5G/den-stora-algvandringen/idag-00-00)
* [2026-04-24, 16:22:00](https://soylentnews.org/article.pl?sid=26/04/24/0045252&amp;from=rss) - [They Built the ‘Cursor for Hardware.’ Now, Anthropic Wants in](https://soylentnews.org/article.pl?sid=26/04/24/0045252&amp;from=rss)
* [2026-04-24, 11:32:00](https://soylentnews.org/article.pl?sid=26/04/23/1143221&amp;from=rss) - [This Pasta Sauce Wants to Record Your Family](https://soylentnews.org/article.pl?sid=26/04/23/1143221&amp;from=rss)
* [2026-04-24, 06:51:00](https://soylentnews.org/article.pl?sid=26/04/23/1139251&amp;from=rss) - [NASA Inspector Fears New Spacesuits Won&apos;t be Ready for Moon Landing](https://soylentnews.org/article.pl?sid=26/04/23/1139251&amp;from=rss)
* [2026-04-24, 02:05:00](https://soylentnews.org/article.pl?sid=26/04/23/1118227&amp;from=rss) - [Linux 7.1 Will Have an Optional New NTFS Driver](https://soylentnews.org/article.pl?sid=26/04/23/1118227&amp;from=rss)
* [2026-04-23, 21:21:00](https://soylentnews.org/article.pl?sid=26/04/23/1112242&amp;from=rss) - [Scientists Load Quantum Computer With First Complete Genome to Crack Biology&apos;s &apos;Impossible&apos; Puzzle](https://soylentnews.org/article.pl?sid=26/04/23/1112242&amp;from=rss)
* [2026-04-23, 16:34:00](https://soylentnews.org/article.pl?sid=26/04/22/0215210&amp;from=rss) - [Europe&apos;s EV Sales Jump 51% as Iran War Sends Gasoline Prices Soaring](https://soylentnews.org/article.pl?sid=26/04/22/0215210&amp;from=rss)
* [2026-04-23, 13:54:31](https://news.ycombinator.com/item?id=47875795) - [Flipdiscs](https://flipdisc.io)
* [2026-04-23, 11:50:00](https://soylentnews.org/article.pl?sid=26/04/22/023218&amp;from=rss) - [Bluetooth Tracker Hidden in a Postcard and Mailed to a Warship Exposed its Location](https://soylentnews.org/article.pl?sid=26/04/22/023218&amp;from=rss)
* [2026-04-23, 07:07:00](https://soylentnews.org/article.pl?sid=26/04/21/2358226&amp;from=rss) - [The NAND Gate of Continuous Math](https://soylentnews.org/article.pl?sid=26/04/21/2358226&amp;from=rss)
* [2026-04-23, 02:22:00](https://soylentnews.org/article.pl?sid=26/04/21/2355256&amp;from=rss) - [WebinarTV’s Rampant Scraping of Online Meetings ](https://soylentnews.org/article.pl?sid=26/04/21/2355256&amp;from=rss)
