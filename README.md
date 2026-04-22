# [News Summary](https://kherrick.github.io/news-summary/)

## Tech Innovations and Scientific Discoveries

* [Windows 9x Subsystem for Linux](https://social.hails.org/@hailey/116446826733136456) - A fascinating tool that integrates classic Windows 9x systems into a Linux environment for seamless operation. [Comments](https://news.ycombinator.com/item?id=47861270)

* [Fusion Power Plant Simulator](https://www.fusionenergybase.com/fusion-power-plant-simulator) - Explore cutting-edge simulation technologies for fusion energy systems with this immersive tool. [Comments](https://news.ycombinator.com/item?id=47849315)

* [Diverse organic molecules on Mars revealed by the first SAM TMAH experiment](https://www.courthousenews.com/preserved-for-billions-of-years-organic-compounds-found-on-mars/) - NASA's ground-breaking experiment detects organic compounds on Mars, expanding possibilities for extraterrestrial life studies. [Comments](https://news.ycombinator.com/item?id=47846861)

* [Meet Orpheus—a Hopper Mission Built to Hunt for Life in Martian Volcanoes](https://soylentnews.org/article.pl?sid=26/04/17/0326235&amp;from=rss) - Highlights an innovative project to explore Mars and the possibility of life in volcanic terrains.

## AI and Tech Company Dynamics

* [Meta to start capturing employee mouse movements, keystrokes for AI training](https://www.reuters.com/sustainability/boards-policy-regulation/meta-start-capturing-employee-mouse-movements-keystrokes-ai-training-data-2026-04-21/) - A controversial AI-training protocol at Meta raises data privacy concerns. [Comments](https://news.ycombinator.com/item?id=47851948)

* [Google's Internal Politics Leave It Playing Catch-Up On AI Coding](https://developers.slashdot.org/story/26/04/21/1655253/googles-internal-politics-leave-it-playing-catch-up-on-ai-coding?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Here’s how company politics might be holding Google back in the AI race.

* [Mozilla Uses Anthropic's Mythos To Fix 271 Bugs In Firefox](https://news.slashdot.org/story/26/04/21/2028206/mozilla-uses-anthropics-mythos-to-fix-271-bugs-in-firefox?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Mozilla integrates AI for debugging and achieves impressive results.

* [SpaceX Strikes Deal With Coding Startup Cursor For $60 Billion](https://developers.slashdot.org/story/26/04/21/2343219/spacex-strikes-deal-with-coding-startup-cursor-for-60-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - SpaceX invests heavily in AI-focused software companies for space exploration advances. [Comments](https://news.ycombinator.com/item?id=47855293)

## Technology in Everyday Life

* [Framework Laptop 13 Pro Is a Major Overhaul For the Modular, Upgradeable Laptop](https://hardware.slashdot.org/story/26/04/21/2019256/framework-laptop-13-pro-is-a-major-overhaul-for-the-modular-upgradeable-laptop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Framework offers a significant upgrade for users favoring modular hardware design.

* [Cal.diy: open-source community edition of cal.com](https://github.com/calcom/cal.diy) - A new, open-source scheduling tool promotes collaboration and accessibility. [Comments](https://news.ycombinator.com/item?id=47852155)

* [CrabTrap: An LLM-as-a-judge HTTP proxy to secure agents in production](https://www.brex.com/crabtrap) - A unique tool to ensure security for machine learning agents utilizing large language models. [Comments](https://news.ycombinator.com/item?id=47850212)

## Advancing Science, Environment, and Society

* [Total Solar Eclipse Led to Seismic Quiet for Cities Within its Path](https://soylentnews.org/article.pl?sid=26/04/20/0228241&amp;from=rss) - New findings reveal how solar eclipses influence seismic activities.

* [Global Growth In Solar 'the Largest Ever Observed For Any Source'](https://hardware.slashdot.org/story/26/04/21/1549243/global-growth-in-solar-the-largest-ever-observed-for-any-source?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Solar energy achieves unprecedented global scales of adoption.

## Security, Privacy, and Surveillance Issues

* [Maryland Becomes First State To Pass Bill Banning 'Surveillance Pricing'](https://yro.slashdot.org/story/26/04/21/0115210/maryland-becomes-first-state-to-pass-bill-banning-surveillance-pricing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Maryland takes a stand against consumer data exploitation in retail.

* [Irony as Meta staff unhappy about running surveillance software on work PCs](https://www.theregister.com/2026/04/22/meta_employee_surveillance_software/) - Employees push back against their company’s surveillance practices. [Comments](https://news.ycombinator.com/item?id=47860742)

## Historical Reflections and Cultural Insights

* [Soviet CDs and CD Players Existed, and They Were Strange](https://soylentnews.org/article.pl?sid=26/04/19/1333258&amp;from=rss) - A deep dive into the unique quirks of Soviet-era technology.

* [Irish Bog Plant Revives Ancient Remedy as a New Weapon Vs Superbugs](https://soylentnews.org/article.pl?sid=26/04/18/1847221&amp;from=rss) - The rediscovery of an ancient remedy in Irish bogs could revolutionize modern medicine.

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

* [2026-04-22, 09:52:52](https://news.ycombinator.com/item?id=47861270) - [Windows 9x Subsystem for Linux](https://social.hails.org/@hailey/116446826733136456)
* [2026-04-22, 09:22:05](https://news.ycombinator.com/item?id=47861087) - [How the Heck Does GPS Work?](https://perthirtysix.com/how-the-heck-does-gps-work)
* [2026-04-22, 09:02:46](https://news.ycombinator.com/item?id=47860961) - [Meta employees are up in arms over a mandatory program to train AI on their](https://www.businessinsider.com/meta-new-ai-tool-tracks-staff-activity-sparks-concern-2026-4)
* [2026-04-22, 08:33:17](https://news.ycombinator.com/item?id=47860742) - [Irony as Meta staff unhappy about running surveillance software on work PCs](https://www.theregister.com/2026/04/22/meta_employee_surveillance_software/)
* [2026-04-22, 07:27:00](https://soylentnews.org/article.pl?sid=26/04/20/0227209&amp;from=rss) - [The Friction We Forgot](https://soylentnews.org/article.pl?sid=26/04/20/0227209&amp;from=rss)
* [2026-04-22, 07:00:00](https://yro.slashdot.org/story/26/04/22/0348204/fbi-looks-into-dead-or-missing-scientists-tied-to-sensitive-us-research?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FBI Looks Into Dead or Missing Scientists Tied To Sensitive US Research](https://yro.slashdot.org/story/26/04/22/0348204/fbi-looks-into-dead-or-missing-scientists-tied-to-sensitive-us-research?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-22, 05:28:58](https://news.ycombinator.com/item?id=47859442) - [What Async Promised and What It Delivered](https://causality.blog/essays/what-async-promised/)
* [2026-04-22, 03:30:00](https://developers.slashdot.org/story/26/04/21/2343219/spacex-strikes-deal-with-coding-startup-cursor-for-60-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX Strikes Deal With Coding Startup Cursor For $60 Billion](https://developers.slashdot.org/story/26/04/21/2343219/spacex-strikes-deal-with-coding-startup-cursor-for-60-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-22, 02:34:00](https://soylentnews.org/article.pl?sid=26/04/20/0228241&amp;from=rss) - [Total Solar Eclipse Led to Seismic Quiet for Cities Within its Path](https://soylentnews.org/article.pl?sid=26/04/20/0228241&amp;from=rss)
* [2026-04-22, 02:15:38](https://news.ycombinator.com/item?id=47857964) - [Kuri – Zig based agent-browser alternative](https://github.com/justrach/kuri)
* [2026-04-21, 23:00:00](https://yro.slashdot.org/story/26/04/21/2039235/florida-launches-criminal-investigation-into-chatgpt-over-school-shooting?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Florida Launches Criminal Investigation Into ChatGPT Over School Shooting](https://yro.slashdot.org/story/26/04/21/2039235/florida-launches-criminal-investigation-into-chatgpt-over-school-shooting?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-21, 22:13:18](https://news.ycombinator.com/item?id=47855293) - [SpaceX says it has agreement to acquire Cursor for $60B](https://twitter.com/spacex/status/2046713419978453374)
* [2026-04-21, 22:00:00](https://news.slashdot.org/story/26/04/21/2028206/mozilla-uses-anthropics-mythos-to-fix-271-bugs-in-firefox?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mozilla Uses Anthropic&apos;s Mythos To Fix 271 Bugs In Firefox](https://news.slashdot.org/story/26/04/21/2028206/mozilla-uses-anthropics-mythos-to-fix-271-bugs-in-firefox?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-21, 21:50:00](https://soylentnews.org/article.pl?sid=26/04/19/1341258&amp;from=rss) - [A Fresh Scar on the Moon: Newly Discovered Crater Reveals Recent Impact](https://soylentnews.org/article.pl?sid=26/04/19/1341258&amp;from=rss)
* [2026-04-21, 21:00:00](https://hardware.slashdot.org/story/26/04/21/2019256/framework-laptop-13-pro-is-a-major-overhaul-for-the-modular-upgradeable-laptop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Framework Laptop 13 Pro Is a Major Overhaul For the Modular, Upgradeable Laptop](https://hardware.slashdot.org/story/26/04/21/2019256/framework-laptop-13-pro-is-a-major-overhaul-for-the-modular-upgradeable-laptop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-21, 20:00:00](https://news.slashdot.org/story/26/04/21/194240/job-cuts-driven-by-ai-are-rising-on-wall-street?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Job Cuts Driven By AI Are Rising On Wall Street](https://news.slashdot.org/story/26/04/21/194240/job-cuts-driven-by-ai-are-rising-on-wall-street?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-21, 19:00:00](https://tech.slashdot.org/story/26/04/21/1849217/meta-to-start-capturing-employee-mouse-movements-keystrokes-for-ai-training-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta To Start Capturing Employee Mouse Movements, Keystrokes For AI Training Data](https://tech.slashdot.org/story/26/04/21/1849217/meta-to-start-capturing-employee-mouse-movements-keystrokes-for-ai-training-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-21, 18:50:00](https://news.ycombinator.com/item?id=47852835) - [ChatGPT Images 2.0](https://openai.com/index/introducing-chatgpt-images-2-0/)
* [2026-04-21, 18:00:34](https://news.ycombinator.com/item?id=47852177) - [Framework Laptop 13 Pro](https://frame.work/laptop13pro)
* [2026-04-21, 18:00:00](https://developers.slashdot.org/story/26/04/21/1655253/googles-internal-politics-leave-it-playing-catch-up-on-ai-coding?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s Internal Politics Leave It Playing Catch-Up On AI Coding](https://developers.slashdot.org/story/26/04/21/1655253/googles-internal-politics-leave-it-playing-catch-up-on-ai-coding?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-21, 17:58:21](https://news.ycombinator.com/item?id=47852155) - [Cal.diy: open-source community edition of cal.com](https://github.com/calcom/cal.diy)
* [2026-04-21, 17:40:39](https://news.ycombinator.com/item?id=47851948) - [Meta to start capturing employee mouse movements, keystrokes for AI training](https://www.reuters.com/sustainability/boards-policy-regulation/meta-start-capturing-employee-mouse-movements-keystrokes-ai-training-data-2026-04-21/)
* [2026-04-21, 17:33:50](https://news.ycombinator.com/item?id=47851885) - [Britannica11.org – a structured edition of the 1911 Encyclopædia Britannica](https://britannica11.org/)
* [2026-04-21, 17:14:35](https://news.ycombinator.com/item?id=47851634) - [The Vercel breach: OAuth attack exposes risk in platform environment variables](https://www.trendmicro.com/en_us/research/26/d/vercel-breach-oauth-supply-chain.html)
* [2026-04-21, 17:05:00](https://soylentnews.org/article.pl?sid=26/04/19/1338217&amp;from=rss) - [Europol Launches Operation PowerOFF — Warns 75,000 DDoS Users and Takes Down 53 Domains](https://soylentnews.org/article.pl?sid=26/04/19/1338217&amp;from=rss)
* [2026-04-21, 17:00:00](https://games.slashdot.org/story/26/04/21/1639222/xbox-game-pass-ultimate-gets-a-price-cut?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Xbox Game Pass Ultimate Gets a Price Cut](https://games.slashdot.org/story/26/04/21/1639222/xbox-game-pass-ultimate-gets-a-price-cut?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-21, 16:00:00](https://hardware.slashdot.org/story/26/04/21/1549243/global-growth-in-solar-the-largest-ever-observed-for-any-source?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Global Growth In Solar &apos;the Largest Ever Observed For Any Source&apos;](https://hardware.slashdot.org/story/26/04/21/1549243/global-growth-in-solar-the-largest-ever-observed-for-any-source?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-21, 15:29:16](https://news.ycombinator.com/item?id=47850212) - [CrabTrap: An LLM-as-a-judge HTTP proxy to secure agents in production](https://www.brex.com/crabtrap)
* [2026-04-21, 15:00:00](https://yro.slashdot.org/story/26/04/21/0115210/maryland-becomes-first-state-to-pass-bill-banning-surveillance-pricing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Maryland Becomes First State To Pass Bill Banning &apos;Surveillance Pricing&apos;](https://yro.slashdot.org/story/26/04/21/0115210/maryland-becomes-first-state-to-pass-bill-banning-surveillance-pricing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-21, 14:26:52](https://news.ycombinator.com/item?id=47849315) - [Fusion Power Plant Simulator](https://www.fusionenergybase.com/fusion-power-plant-simulator)
* [2026-04-21, 12:19:00](https://soylentnews.org/article.pl?sid=26/04/19/1333258&amp;from=rss) - [Soviet CDs and CD Players Existed, and They Were Strange](https://soylentnews.org/article.pl?sid=26/04/19/1333258&amp;from=rss)
* [2026-04-21, 11:04:56](https://news.ycombinator.com/item?id=47847179) - [Laws of Software Engineering](https://lawsofsoftwareengineering.com)
* [2026-04-21, 11:00:00](https://slashdot.org/story/26/04/21/014228/amazon-to-invest-up-to-another-25-billion-in-anthropic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon To Invest Up To Another $25 Billion In Anthropic](https://slashdot.org/story/26/04/21/014228/amazon-to-invest-up-to-another-25-billion-in-anthropic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-21, 10:19:49](https://news.ycombinator.com/item?id=47846861) - [Diverse organic molecules on Mars revealed by the first SAM TMAH experiment](https://www.courthousenews.com/preserved-for-billions-of-years-organic-compounds-found-on-mars/)
* [2026-04-21, 07:32:00](https://soylentnews.org/article.pl?sid=26/04/19/125219&amp;from=rss) - [Chinese Carmaker Patents Voice-Controlled &apos;in-Vehicle Toilet&apos;](https://soylentnews.org/article.pl?sid=26/04/19/125219&amp;from=rss)
* [2026-04-21, 07:00:00](https://science.slashdot.org/story/26/04/21/0012245/iphone-video-shows-earthset-from-space?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [iPhone Video Shows &apos;Earthset&apos; From Space](https://science.slashdot.org/story/26/04/21/0012245/iphone-video-shows-earthset-from-space?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-21, 03:30:00](https://games.slashdot.org/story/26/04/20/2357225/playstation-to-require-age-verification-for-messages-and-voice-chat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [PlayStation To Require Age Verification For Messages and Voice Chat](https://games.slashdot.org/story/26/04/20/2357225/playstation-to-require-age-verification-for-messages-and-voice-chat?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-21, 02:47:00](https://soylentnews.org/article.pl?sid=26/04/19/120245&amp;from=rss) - [In the Face of Rampant AI, is ‘Data Poisoning’ a New Form of Civil Disobedience?](https://soylentnews.org/article.pl?sid=26/04/19/120245&amp;from=rss)
* [2026-04-20, 23:35:06](https://news.ycombinator.com/item?id=47842569) - [Making RAM at Home [video]](https://www.youtube.com/watch?v=h6GWikWlAQA)
* [2026-04-20, 23:00:00](https://mobile.slashdot.org/story/26/04/20/2014246/mobile-phones-to-be-banned-in-schools-in-england-under-new-plans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mobile Phones To Be Banned In Schools In England Under New Plans](https://mobile.slashdot.org/story/26/04/20/2014246/mobile-phones-to-be-banned-in-schools-in-england-under-new-plans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-04-20, 22:02:00](https://soylentnews.org/article.pl?sid=26/04/19/1148259&amp;from=rss) - [The Quiet Colossus](https://soylentnews.org/article.pl?sid=26/04/19/1148259&amp;from=rss)
* [2026-04-20, 18:24:05](https://news.ycombinator.com/item?id=47838508) - [Changes to GitHub Copilot individual plans](https://github.blog/news-insights/company-news/changes-to-github-copilot-individual-plans/)
* [2026-04-20, 17:16:00](https://soylentnews.org/article.pl?sid=26/04/19/1147228&amp;from=rss) - [How Much Does Chatbot Bias Influence Users? A Lot, It Turns Out](https://soylentnews.org/article.pl?sid=26/04/19/1147228&amp;from=rss)
* [2026-04-20, 15:34:45](https://news.ycombinator.com/item?id=47835837) - [A printing press for biological data](https://www.owlposting.com/p/the-printing-press-for-biological)
* [2026-04-20, 15:21:16](https://news.ycombinator.com/item?id=47835635) - [Acetaminophen vs. ibuprofen](https://asteriskmag.com/issues/14/the-mystery-in-the-medicine-cabinet)
* [2026-04-20, 12:29:00](https://soylentnews.org/article.pl?sid=26/04/19/000236&amp;from=rss) - [Russia Hits European Thermal Power Plant in Attempted ‘Destructive’ Cyberattack](https://soylentnews.org/article.pl?sid=26/04/19/000236&amp;from=rss)
* [2026-04-20, 11:18:57](https://news.ycombinator.com/item?id=47832720) - [All your agents are going async](https://zknill.io/posts/all-your-agents-are-going-async/)
* [2026-04-20, 07:43:00](https://soylentnews.org/article.pl?sid=26/04/18/2354201&amp;from=rss) - [How Two Motorola Transistors Became the World&apos;s Default NPNs](https://soylentnews.org/article.pl?sid=26/04/18/2354201&amp;from=rss)
* [2026-04-20, 05:21:12](https://news.ycombinator.com/item?id=47830633) - [Rock carving facts – Tanum Sweden](https://www.tanumworldheritage.se/rock-carving-facts/?lang=en)
* [2026-04-20, 03:01:00](https://soylentnews.org/article.pl?sid=26/04/18/2352244&amp;from=rss) - [10 Math Books That Sharpen Your Thinking](https://soylentnews.org/article.pl?sid=26/04/18/2352244&amp;from=rss)
* [2026-04-19, 22:16:00](https://soylentnews.org/article.pl?sid=26/04/18/2348241&amp;from=rss) - [“TotalRecall Reloaded” Tool Finds a Side Entrance to the Windows 11 Recall Database](https://soylentnews.org/article.pl?sid=26/04/18/2348241&amp;from=rss)
* [2026-04-19, 17:34:00](https://soylentnews.org/article.pl?sid=26/04/18/195238&amp;from=rss) - [Pentagon Reportedly Asks Detroit to Use More Car Factories as Arms Factories](https://soylentnews.org/article.pl?sid=26/04/18/195238&amp;from=rss)
* [2026-04-19, 12:51:00](https://soylentnews.org/article.pl?sid=26/04/18/192211&amp;from=rss) - [The \&quot;Passive Income\&quot; Trap Ate a Generation of Entrepreneurs](https://soylentnews.org/article.pl?sid=26/04/18/192211&amp;from=rss)
* [2026-04-19, 12:29:35](https://news.ycombinator.com/item?id=47823814) - [Context Is Software, Weights Are Hardware](https://www.aravindjayendran.com/writing/context-is-not-learning)
* [2026-04-19, 11:53:31](https://news.ycombinator.com/item?id=47823654) - [Contact Lens Uses Microfluidics to Monitor and Treat Glaucoma](https://spectrum.ieee.org/smart-contact-lens-glaucoma-microfluidics)
* [2026-04-19, 09:26:04](https://news.ycombinator.com/item?id=47822978) - [Edit store price tags using Flipper Zero](https://github.com/i12bp8/TagTinker)
* [2026-04-19, 08:03:00](https://soylentnews.org/article.pl?sid=26/04/18/1855201&amp;from=rss) - [Why the Phrase &apos;Super El Niño&apos; Makes Australian Climate Scientists Roll Their Eyes](https://soylentnews.org/article.pl?sid=26/04/18/1855201&amp;from=rss)
* [2026-04-19, 04:41:59](https://news.ycombinator.com/item?id=47821853) - [Garbage Collection Without Unsafe Code](https://fitzgen.com/2024/02/06/safe-gc.html)
* [2026-04-19, 04:28:31](https://news.ycombinator.com/item?id=47821801) - [Windows Server 2025 Runs Better on ARM](https://jasoneckert.github.io/myblog/server-2025-arm64/)
* [2026-04-19, 03:14:00](https://soylentnews.org/article.pl?sid=26/04/18/1847221&amp;from=rss) - [Irish Bog Plant Revives Ancient Remedy as a New Weapon Vs Superbugs](https://soylentnews.org/article.pl?sid=26/04/18/1847221&amp;from=rss)
* [2026-04-19, 00:34:11](https://news.ycombinator.com/item?id=47820791) - [MuJoCo – Advanced Physics Simulation](https://github.com/google-deepmind/mujoco)
* [2026-04-18, 22:26:00](https://soylentnews.org/article.pl?sid=26/04/17/0348237&amp;from=rss) - [Netgear Routers Seemingly Won&apos;t be Banned in the US After All](https://soylentnews.org/article.pl?sid=26/04/17/0348237&amp;from=rss)
* [2026-04-18, 17:42:00](https://soylentnews.org/article.pl?sid=26/04/17/0337240&amp;from=rss) - [Scientists Invented a Fake Disease. AI Told People It Was Real](https://soylentnews.org/article.pl?sid=26/04/17/0337240&amp;from=rss)
* [2026-04-18, 12:54:00](https://soylentnews.org/article.pl?sid=26/04/17/0336248&amp;from=rss) - [Online Response to the Attack on Sam Altman&apos;s House Shows a Generational Divide](https://soylentnews.org/article.pl?sid=26/04/17/0336248&amp;from=rss)
* [2026-04-18, 10:53:42](https://news.ycombinator.com/item?id=47814874) - [Stephen&apos;s Sausage Roll remains one of the most influential puzzle games](https://thinkygames.com/features/10-years-of-grilling-stephens-sausage-roll-remains-one-of-the-most-influential-puzzle-games-ever-created/)
* [2026-04-18, 08:12:00](https://soylentnews.org/article.pl?sid=26/04/17/0326235&amp;from=rss) - [Meet Orpheus—a Hopper Mission Built to Hunt for Life in Martian Volcanoes](https://soylentnews.org/article.pl?sid=26/04/17/0326235&amp;from=rss)
* [2026-04-18, 03:30:00](https://soylentnews.org/article.pl?sid=26/04/17/0318245&amp;from=rss) - [IPv6 Adoption Reaches 50% - The Long Journey Toward Internet&apos;s Next Generation](https://soylentnews.org/article.pl?sid=26/04/17/0318245&amp;from=rss)
