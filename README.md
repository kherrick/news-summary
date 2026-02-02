# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Technology Ethics

* [MaliciousCorgi: AI Extensions send your code to China](https://www.koi.ai/blog/maliciouscorgi-the-cute-looking-ai-extensions-leaking-code-from-1-5-million-developers) ([comments](https://news.ycombinator.com/item?id=46855527))

* [Is AI Really Taking Jobs? Or Are Employers Just 'AI-Washing' Normal Layoffs?](https://it.slashdot.org/story/26/02/02/0618242/is-ai-really-taking-jobs-or-are-employers-just-ai-washing-normal-layoffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://it.slashdot.org/story/26/02/02/0618242/is-ai-really-taking-jobs-or-are-employers-just-ai-washing-normal-layoffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Technology Innovations and Trends

* [Compiling Rust to readable C with Eurydice](https://lwn.net/SubscriberLink/1055211/6f51ebe751ce69a9/) ([comments](https://lobste.rs/s/h46dxr/compiling_rust_readable_c_with_eurydice))

* [Migrating to GTK3 – Re: Factor](https://re.factorcode.org/2025/12/migrating-to-gtk3.html) ([comments](https://lobste.rs/s/vj2zkd/migrating_gtk3_re_factor))

* [The Disconnected Git Workflow](https://ploum.net/2026-01-31-offline-git-send-email.html) ([comments](https://lobste.rs/s/re5z0g/disconnected_git_workflow))

* [Termux](https://github.com/termux/termux-app) ([comments](https://news.ycombinator.com/item?id=46854642))

* [Resurrecting Email Notifications on a Legacy NAS](https://rhardih.io/2026/02/resurrecting-email-notifications-on-a-legacy-nas/) ([comments](https://lobste.rs/s/uvotix/resurrecting_email_notifications_on))

## Security and Cyber Threats

* [Notepad++ Hijacked by State-Sponsored Hackers](https://notepad-plus-plus.org/news/hijacked-incident-info-update/) ([comments](https://lobste.rs/s/pt7myu/notepad_hijacked_by_state_sponsored))

* [Leaked Chats Expose the Daily Life of a Scam Compound's Enslaved Workforce](https://www.wired.com/story/the-red-bull-leaks/) ([comments](https://news.ycombinator.com/item?id=46852660))

* [Inside Lodash’s Security Reset and Maintenance Reboot](https://socket.dev/blog/inside-lodash-security-reset) ([comments](https://lobste.rs/s/nrwrh1/inside_lodash_s_security_reset))

## Science and Space Exploration

* [Scientists Baffled at Mysterious Ancient Creature That Doesn't Fit on the Tree of Life as We Know It](https://soylentnews.org/article.pl?sid=26/01/31/0217249&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/01/31/0217249&amp;from=rss))

* [EU Deploys New Government Satcom Program in Sovereignty Push](https://science.slashdot.org/story/26/02/02/0256227/eu-deploys-new-government-satcom-program-in-sovereignty-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=46853888))

* [Microbes In Space Mutated and Developed a Remarkable Ability](https://science.slashdot.org/story/26/02/01/0710229/microbes-in-space-mutated-and-developed-a-remarkable-ability?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://science.slashdot.org/story/26/02/01/0710229/microbes-in-space-mutated-and-developed-a-remarkable-ability?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Historical and Niche Technological Insights

* [Defeating a 40-year-old copy protection dongle](https://dmitrybrant.com/2026/02/01/defeating-a-40-year-old-copy-protection-dongle) ([comments](https://lobste.rs/s/lk7gze/defeating_40_year_old_copy_protection))

* [Voyager 2's Close Encounter With Uranus Wasn't in the Official Plan](https://soylentnews.org/article.pl?sid=26/01/31/0148226&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/01/31/0148226&amp;from=rss))

* [Ian's Shoelace Site](https://www.fieggen.com/shoelace/) ([comments](https://news.ycombinator.com/item?id=46848231))

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

* [2026-02-02, 12:59:58](https://news.ycombinator.com/item?id=46855527) - [MaliciousCorgi: AI Extensions send your code to China](https://www.koi.ai/blog/maliciouscorgi-the-cute-looking-ai-extensions-leaking-code-from-1-5-million-developers)
* [2026-02-02, 12:34:00](https://it.slashdot.org/story/26/02/02/0618242/is-ai-really-taking-jobs-or-are-employers-just-ai-washing-normal-layoffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is AI Really Taking Jobs? Or Are Employers Just &apos;AI-Washing&apos; Normal Layoffs?](https://it.slashdot.org/story/26/02/02/0618242/is-ai-really-taking-jobs-or-are-employers-just-ai-washing-normal-layoffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-02, 11:55:12](https://lobste.rs/s/uvotix/resurrecting_email_notifications_on) - [Resurrecting Email Notifications on a Legacy NAS](https://rhardih.io/2026/02/resurrecting-email-notifications-on-a-legacy-nas/)
* [2026-02-02, 11:52:29](https://news.ycombinator.com/item?id=46854951) - [Microsoft is walking back Windows 11&apos;s AI overload](https://www.windowscentral.com/microsoft/windows-11/microsoft-is-reevaluating-its-ai-efforts-on-windows-11-plans-to-reduce-copilot-integrations-and-evolve-recall)
* [2026-02-02, 11:21:09](https://lobste.rs/s/rcojcc/technology_nearly_perfect_usb_cable) - [Technology: The (nearly) perfect USB cable tester does exist](https://blog.literarily-starved.com/2026/02/technology-the-nearly-perfect-usb-cable-tester-does-exist/)
* [2026-02-02, 11:05:14](https://lobste.rs/s/u5jcwz/apple_s_macbook_pro_dfu_port) - [Apple’s MacBook Pro DFU port documentation is wrong](https://lapcatsoftware.com/articles/2026/2/1.html)
* [2026-02-02, 11:03:44](https://news.ycombinator.com/item?id=46854642) - [Termux](https://github.com/termux/termux-app)
* [2026-02-02, 10:45:44](https://news.ycombinator.com/item?id=46854534) - [My (very) fast zero-allocation webserver using OxCaml](https://anil.recoil.org/notes/oxcaml-httpz)
* [2026-02-02, 10:19:47](https://lobste.rs/s/9ychvo/trust_ranking) - [Trust in Ranking](https://www.marginalia.nu/log/a_130_trust_in_ranking/)
* [2026-02-02, 10:12:23](https://lobste.rs/s/qgioeo/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/qgioeo/what_are_you_doing_this_week)
* [2026-02-02, 09:42:00](https://soylentnews.org/article.pl?sid=26/02/01/191257&amp;from=rss) - [The EU Tells Google to Give External AI Assistants the Same Access to Android as Gemini Has](https://soylentnews.org/article.pl?sid=26/02/01/191257&amp;from=rss)
* [2026-02-02, 09:34:00](https://linux.slashdot.org/story/26/02/02/0718228/linux-kernel-developer-chris-masons-new-initiative-ai-prompts-for-code-reviews?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux Kernel Developer Chris Mason&apos;s New Initiative: AI Prompts for Code Reviews](https://linux.slashdot.org/story/26/02/02/0718228/linux-kernel-developer-chris-masons-new-initiative-ai-prompts-for-code-reviews?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-02, 09:14:14](https://lobste.rs/s/jtmd88/purely_functional_games_2018) - [Purely Functional Games (2018)](https://soupi.github.io/rfc/pfgames/)
* [2026-02-02, 08:59:40](https://news.ycombinator.com/item?id=46853888) - [EU launches government satcom program in sovereignty push](https://spacenews.com/eu-launches-government-satcom-program-in-sovereignty-push/)
* [2026-02-02, 08:12:25](https://lobste.rs/s/re5z0g/disconnected_git_workflow) - [The Disconnected Git Workflow](https://ploum.net/2026-01-31-offline-git-send-email.html)
* [2026-02-02, 07:58:49](https://news.ycombinator.com/item?id=46853552) - [Library of Juggling](https://libraryofjuggling.com/)
* [2026-02-02, 07:28:39](https://lobste.rs/s/ekr6c0/lambda_cube) - [Lambda cube](https://en.wikipedia.org/wiki/Lambda_cube)
* [2026-02-02, 06:51:05](https://lobste.rs/s/vj2zkd/migrating_gtk3_re_factor) - [Migrating to GTK3 – Re: Factor](https://re.factorcode.org/2025/12/migrating-to-gtk3.html)
* [2026-02-02, 06:39:46](https://lobste.rs/s/rdmyjo/ending_15_years_subprocess_polling) - [Ending 15 years of subprocess polling](https://gmpy.dev/blog/2026/event-driven-process-waiting)
* [2026-02-02, 06:13:41](https://lobste.rs/s/rtkmpd/selfish_ai) - [Selfish AI](https://www.garfieldtech.com/blog/selfish-ai)
* [2026-02-02, 06:05:37](https://lobste.rs/s/h46dxr/compiling_rust_readable_c_with_eurydice) - [Compiling Rust to readable C with Eurydice](https://lwn.net/SubscriberLink/1055211/6f51ebe751ce69a9/)
* [2026-02-02, 05:34:00](https://entertainment.slashdot.org/story/26/02/02/0152250/is-the-tv-industry-finally-conceding-that-the-future-may-not-be-8k?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is the TV Industry Finally Conceding That the Future May Not Be 8K?](https://entertainment.slashdot.org/story/26/02/02/0152250/is-the-tv-industry-finally-conceding-that-the-future-may-not-be-8k?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-02, 05:14:25](https://lobste.rs/s/6ifznf/vibe_easy_vm_sandboxes_for_llm_agents_on) - [Vibe: Easy VM sandboxes for LLM agents on MacOS](https://github.com/lynaghk/vibe/)
* [2026-02-02, 05:10:59](https://news.ycombinator.com/item?id=46852660) - [Leaked Chats Expose the Daily Life of a Scam Compound&apos;s Enslaved Workforce](https://www.wired.com/story/the-red-bull-leaks/)
* [2026-02-02, 04:57:00](https://soylentnews.org/article.pl?sid=26/01/31/0217249&amp;from=rss) - [Scientists Baffled at Mysterious Ancient Creature That Doesn&apos;t Fit on the Tree of Life as We Know It](https://soylentnews.org/article.pl?sid=26/01/31/0217249&amp;from=rss)
* [2026-02-02, 04:49:12](https://lobste.rs/s/pt7myu/notepad_hijacked_by_state_sponsored) - [Notepad++ Hijacked by State-Sponsored Hackers](https://notepad-plus-plus.org/news/hijacked-incident-info-update/)
* [2026-02-02, 03:29:55](https://news.ycombinator.com/item?id=46852096) - [Apple&apos;s MacBook Pro DFU port documentation is wrong](https://lapcatsoftware.com/articles/2026/2/1.html)
* [2026-02-02, 03:13:00](https://science.slashdot.org/story/26/02/02/0256227/eu-deploys-new-government-satcom-program-in-sovereignty-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EU Deploys New Government Satcom Program in Sovereignty Push](https://science.slashdot.org/story/26/02/02/0256227/eu-deploys-new-government-satcom-program-in-sovereignty-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-02, 02:27:40](https://lobste.rs/s/et8pfu/resurrecting_crimsonland) - [Resurrecting Crimsonland](https://banteg.xyz/posts/crimsonland/)
* [2026-02-02, 01:46:20](https://lobste.rs/s/nrwrh1/inside_lodash_s_security_reset) - [Inside Lodash’s Security Reset and Maintenance Reboot](https://socket.dev/blog/inside-lodash-security-reset)
* [2026-02-02, 01:13:00](https://developers.slashdot.org/story/26/02/02/015206/what-go-programmers-think-of-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Go Programmers Think of AI](https://developers.slashdot.org/story/26/02/02/015206/what-go-programmers-think-of-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-02, 01:11:15](https://news.ycombinator.com/item?id=46851192) - [Actors: A Model of Concurrent Computation [pdf] (1985)](https://apps.dtic.mil/sti/tr/pdf/ADA157917.pdf)
* [2026-02-02, 00:12:19](https://news.ycombinator.com/item?id=46850803) - [Show HN: Wikipedia as a doomscrollable social media feed](https://xikipedia.org)
* [2026-02-02, 00:11:00](https://soylentnews.org/article.pl?sid=26/01/31/024237&amp;from=rss) - [Processor Arm Race Heats Up as Nvidia Could Soon Challenge Intel, Amd and Apple With its N1X Laptop](https://soylentnews.org/article.pl?sid=26/01/31/024237&amp;from=rss)
* [2026-02-01, 23:59:00](https://tech.slashdot.org/story/26/02/01/2353221/anthropics-200m-pentagon-contract-at-risk-over-objections-to-domestic-surveillance-autonomous-deployments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic&apos;s $200M Pentagon Contract at Risk Over Objections to Domestic Surveillance, Autonomous Deployments](https://tech.slashdot.org/story/26/02/01/2353221/anthropics-200m-pentagon-contract-at-risk-over-objections-to-domestic-surveillance-autonomous-deployments?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-01, 23:45:18](https://news.ycombinator.com/item?id=46850588) - [Two kinds of AI users are emerging](https://martinalderson.com/posts/two-kinds-of-ai-users-are-emerging/)
* [2026-02-01, 22:59:00](https://tech.slashdot.org/story/26/02/01/2255206/is-metas-huge-spending-on-ai-actually-paying-off?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is Meta&apos;s Huge Spending on AI Actually Paying Off?](https://tech.slashdot.org/story/26/02/01/2255206/is-metas-huge-spending-on-ai-actually-paying-off?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-01, 22:51:19](https://lobste.rs/s/lk7gze/defeating_40_year_old_copy_protection) - [Defeating a 40-year-old copy protection dongle](https://dmitrybrant.com/2026/02/01/defeating-a-40-year-old-copy-protection-dongle)
* [2026-02-01, 22:49:22](https://news.ycombinator.com/item?id=46850205) - [Show HN: NanoClaw – “Clawdbot” in 500 lines of TS with Apple container isolation](https://github.com/gavrielc/nanoclaw)
* [2026-02-01, 22:14:39](https://news.ycombinator.com/item?id=46849926) - [Treasures found on HS2 route stored in secret warehouse](https://www.bbc.com/news/articles/c93v21q5xdvo)
* [2026-02-01, 21:57:17](https://lobste.rs/s/uveyjh/my_very_fast_zero_allocation_webserver) - [My (very) fast zero-allocation webserver using OxCaml](https://anil.recoil.org/notes/oxcaml-httpz)
* [2026-02-01, 21:49:00](https://slashdot.org/story/26/02/01/2146224/bitcoin-drops-40-in-four-months-bloomberg-blames-absence-of-buyers-and-belief?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bitcoin Drops 40% in Four Months.  Bloomberg Blames Absence of Buyers and Belief](https://slashdot.org/story/26/02/01/2146224/bitcoin-drops-40-in-four-months-bloomberg-blames-absence-of-buyers-and-belief?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-01, 21:30:51](https://news.ycombinator.com/item?id=46849567) - [Defeating a 40-year-old copy protection dongle](https://dmitrybrant.com/2026/02/01/defeating-a-40-year-old-copy-protection-dongle)
* [2026-02-01, 20:51:56](https://news.ycombinator.com/item?id=46849258) - [My iPhone 16 Pro Max produces garbage output when running MLX LLMs](https://journal.rafaelcosta.me/my-thousand-dollar-iphone-cant-do-math/)
* [2026-02-01, 20:40:45](https://news.ycombinator.com/item?id=46849154) - [Building Your Own Efficient uint128 in C++](https://solidean.com/blog/2026/building-your-own-u128/)
* [2026-02-01, 20:33:27](https://lobste.rs/s/z0mdor/archive_today_is_directing_ddos_attack) - [archive.today is directing a DDOS attack against my blog](https://gyrovague.com/2026/02/01/archive-today-is-directing-a-ddos-attack-against-my-blog/)
* [2026-02-01, 20:22:00](https://tech.slashdot.org/story/26/02/01/1959234/walmart-begins-building-out-nationwide-ev-charging-network-across-america?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Walmart Begins Building Out Nationwide EV Charging Network Across America](https://tech.slashdot.org/story/26/02/01/1959234/walmart-begins-building-out-nationwide-ev-charging-network-across-america?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-01, 19:39:19](https://lobste.rs/s/vldzbz/this_year_i_will_write_gui_for_my_emacs) - [This year, I will write a GUI for my Emacs clone](https://kyo.iroiro.party/en/posts/this-year-a-shitty-gui/)
* [2026-02-01, 19:30:00](https://soylentnews.org/article.pl?sid=26/01/31/0151243&amp;from=rss) - [Motor Trend - Car Dealer Confidential](https://soylentnews.org/article.pl?sid=26/01/31/0151243&amp;from=rss)
* [2026-02-01, 19:22:00](https://news.slashdot.org/story/26/02/01/1915221/when-20-year-old-bill-gates-fought-the-worlds-first-software-pirates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [When 20-Year-Old Bill Gates Fought the World&apos;s First Software Pirates](https://news.slashdot.org/story/26/02/01/1915221/when-20-year-old-bill-gates-fought-the-worlds-first-software-pirates?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-01, 19:09:24](https://lobste.rs/s/fprlzs/building_blocks_for_peer_peer) - [Building blocks for peer-to-peer applications](https://p2panda.org/)
* [2026-02-01, 18:38:04](https://news.ycombinator.com/item?id=46848231) - [Ian&apos;s Shoelace Site](https://www.fieggen.com/shoelace/)
* [2026-02-01, 18:05:11](https://lobste.rs/s/rzptdh/forget_technical_debt) - [Forget technical debt](https://www.ufried.com/blog/forget_technical_debt/)
* [2026-02-01, 17:36:57](https://news.ycombinator.com/item?id=46847780) - [Apple I Advertisement (1976)](http://apple1.chez.com/Apple1project/Gallery/Gallery.htm)
* [2026-02-01, 17:34:00](https://hardware.slashdot.org/story/26/02/01/0821212/fourth-us-wind-farm-project-blocked-by-trump-allowed-to-resume-construction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fourth US Wind Farm Project Blocked By Trump Allowed to Resume Construction](https://hardware.slashdot.org/story/26/02/01/0821212/fourth-us-wind-farm-project-blocked-by-trump-allowed-to-resume-construction?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-01, 16:34:00](https://hardware.slashdot.org/story/26/02/01/0616236/scientists-create-programmable-autonomous-robots-smaller-than-a-grain-of-salt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Create Programmable, Autonomous Robots Smaller Than a Grain of Salt](https://hardware.slashdot.org/story/26/02/01/0616236/scientists-create-programmable-autonomous-robots-smaller-than-a-grain-of-salt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-01, 15:34:00](https://science.slashdot.org/story/26/02/01/0710229/microbes-in-space-mutated-and-developed-a-remarkable-ability?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microbes In Space Mutated and Developed a Remarkable Ability](https://science.slashdot.org/story/26/02/01/0710229/microbes-in-space-mutated-and-developed-a-remarkable-ability?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-01, 14:45:00](https://soylentnews.org/article.pl?sid=26/01/31/0148226&amp;from=rss) - [Voyager 2&apos;s Close Encounter With Uranus Wasn&apos;t in the Official Plan](https://soylentnews.org/article.pl?sid=26/01/31/0148226&amp;from=rss)
* [2026-02-01, 13:56:56](https://news.ycombinator.com/item?id=46846252) - [Adventure Game Studio: OSS software for creating adventure games](https://www.adventuregamestudio.co.uk/)
* [2026-02-01, 13:38:13](https://lobste.rs/s/lgnaoi/api_tooling_crisis_why_developers_are) - [The API Tooling Crisis: Why developers are abandoning Postman and its clones?](https://efpasia.github.io/blog/2025/12/24/api-tooling-crisis/)
* [2026-02-01, 12:34:00](https://hardware.slashdot.org/story/26/02/01/080244/99-of-new-us-energy-capacity-will-be-green-in-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [99% of New US Energy Capacity Will Be Green in 2026](https://hardware.slashdot.org/story/26/02/01/080244/99-of-new-us-energy-capacity-will-be-green-in-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-01, 10:30:41](https://news.ycombinator.com/item?id=46845103) - [FOSDEM 2026 – Open-Source Conference in Brussels – Day#1 Recap](https://gyptazy.com/blog/fosdem-2026-opensource-conference-brussels/)
* [2026-02-01, 10:29:07](https://news.ycombinator.com/item?id=46845097) - [Show HN: Apate API mocking/prototyping server and Rust unit test library](https://github.com/rustrum/apate)
* [2026-02-01, 09:59:00](https://soylentnews.org/article.pl?sid=26/01/31/014212&amp;from=rss) - [How Often Do AI Chatbots Lead Users Down a Harmful Path?](https://soylentnews.org/article.pl?sid=26/01/31/014212&amp;from=rss)
* [2026-02-01, 08:34:00](https://yro.slashdot.org/story/26/02/01/0540213/china-executes-11-members-of-myanmar-scam-mafia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Executes 11 Members of Myanmar Scam Mafia](https://yro.slashdot.org/story/26/02/01/0540213/china-executes-11-members-of-myanmar-scam-mafia?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-01, 08:15:21](https://news.ycombinator.com/item?id=46844466) - [Contracts in Nix](https://sraka.xyz/posts/contracts.html)
* [2026-02-01, 08:02:25](https://lobste.rs/s/zhhlod/coding_agent_vms_on_nixos_with_microvm_nix) - [Coding Agent VMs on NixOS with microvm.nix](https://michael.stapelberg.ch/posts/2026-02-01-coding-agent-microvm-nix/)
* [2026-02-01, 05:15:00](https://soylentnews.org/article.pl?sid=26/01/31/0058200&amp;from=rss) - [The Path to a Sovereign Tech Stack is Via a Commodified Tech Stack](https://soylentnews.org/article.pl?sid=26/01/31/0058200&amp;from=rss)
* [2026-02-01, 00:28:52](https://lobste.rs/s/jnttzy/praise_dry_run) - [In Praise of –dry-run](https://henrikwarne.com/2026/01/31/in-praise-of-dry-run/)
* [2026-02-01, 00:24:00](https://soylentnews.org/article.pl?sid=26/01/31/0054256&amp;from=rss) - [Researchers Use D&amp;D to Test AI&apos;s Long-Term Decision-Making Abilities](https://soylentnews.org/article.pl?sid=26/01/31/0054256&amp;from=rss)
* [2026-01-31, 19:43:00](https://soylentnews.org/article.pl?sid=26/01/30/1620239&amp;from=rss) - [Linux after Linus?](https://soylentnews.org/article.pl?sid=26/01/30/1620239&amp;from=rss)
* [2026-01-31, 15:00:00](https://soylentnews.org/article.pl?sid=26/01/30/0637214&amp;from=rss) - [ Notes on the Intel 8086 Processor&apos;s Arithmetic-logic Unit ](https://soylentnews.org/article.pl?sid=26/01/30/0637214&amp;from=rss)
* [2026-01-31, 10:19:00](https://soylentnews.org/article.pl?sid=26/01/30/0627240&amp;from=rss) - [Signal President Warns AI Agents Are Making Encryption Irrelevant](https://soylentnews.org/article.pl?sid=26/01/30/0627240&amp;from=rss)
* [2026-01-31, 05:42:00](https://soylentnews.org/article.pl?sid=26/01/30/0623217&amp;from=rss) - [Remembering the YF-23 Stealth Fighter](https://soylentnews.org/article.pl?sid=26/01/30/0623217&amp;from=rss)
* [2026-01-31, 01:01:00](https://soylentnews.org/article.pl?sid=26/01/30/068202&amp;from=rss) - [County Pays $600,000 to Pentesters It Arrested for Assessing Courthouse Security](https://soylentnews.org/article.pl?sid=26/01/30/068202&amp;from=rss)
* [2026-01-30, 21:17:21](https://news.ycombinator.com/item?id=46830026) - [Hypergrowth isn&apos;t always easy](https://tailscale.com/blog/hypergrowth-isnt-always-easy)
* [2026-01-30, 20:22:00](https://soylentnews.org/article.pl?sid=26/01/28/2253239&amp;from=rss) - [A Look at Potential Problems with Future AI](https://soylentnews.org/article.pl?sid=26/01/28/2253239&amp;from=rss)
* [2026-01-30, 16:02:53](https://news.ycombinator.com/item?id=46826011) - [Efficient String Compression for Modern Database Systems](https://cedardb.com/blog/string_compression/)
* [2026-01-30, 15:38:00](https://soylentnews.org/article.pl?sid=26/01/28/2248256&amp;from=rss) - [Salty Facts: Takeaways Have More Salt Than Labels Claim](https://soylentnews.org/article.pl?sid=26/01/28/2248256&amp;from=rss)
* [2026-01-30, 13:29:44](https://news.ycombinator.com/item?id=46824147) - [Board Games in Ancient Fiction: Egypt, Iran, Greece](https://reference-global.com/article/10.2478/bgs-2022-0016)
* [2026-01-30, 11:02:16](https://news.ycombinator.com/item?id=46822961) - [Rev Up the Viral Factories](https://www.science.org/content/blog-post/rev-viral-factories)
* [2026-01-30, 10:46:00](https://soylentnews.org/article.pl?sid=26/01/28/2247217&amp;from=rss) - [Executives Keep Overestimating AI Benefits](https://soylentnews.org/article.pl?sid=26/01/28/2247217&amp;from=rss)
* [2026-01-30, 06:10:00](https://soylentnews.org/article.pl?sid=26/01/28/2241225&amp;from=rss) - [Musk&apos;s X Releases Source Code for Platform&apos;s Algorithm](https://soylentnews.org/article.pl?sid=26/01/28/2241225&amp;from=rss)
* [2026-01-30, 01:15:00](https://soylentnews.org/article.pl?sid=26/01/28/2237224&amp;from=rss) - [For the Price of Netflix, Crooks Can Rent AI Crime Ops](https://soylentnews.org/article.pl?sid=26/01/28/2237224&amp;from=rss)
* [2026-01-29, 20:30:00](https://soylentnews.org/article.pl?sid=26/01/27/0538204&amp;from=rss) - [Four Arrested Following $1.6 Million NFT Heist in the Netherlands](https://soylentnews.org/article.pl?sid=26/01/27/0538204&amp;from=rss)
* [2026-01-29, 18:46:33](https://news.ycombinator.com/item?id=46814581) - [Founding is a snowball](https://blog.bawolf.com/p/founding-is-a-snowball)
* [2026-01-29, 18:31:48](https://news.ycombinator.com/item?id=46814340) - [Ratchets in Software Development](https://qntm.org/ratchet)
* [2026-01-29, 16:54:39](https://news.ycombinator.com/item?id=46812795) - [MicroPythonOS graphical operating system delivers Android-like user experience](https://www.cnx-software.com/2026/01/29/micropythonos-graphical-operating-system-delivers-android-like-user-experience-on-microcontrollers/)
* [2026-01-29, 15:40:00](https://soylentnews.org/article.pl?sid=26/01/27/0515229&amp;from=rss) - [Microsoft Admits Windows 11 Update Is Nuking System Drives but There&apos;s &apos;A Limited Number Of Reports&apos;](https://soylentnews.org/article.pl?sid=26/01/27/0515229&amp;from=rss)
* [2026-01-29, 10:59:00](https://soylentnews.org/article.pl?sid=26/01/27/0441241&amp;from=rss) - [Breakthrough Wireless Transceiver Transmits Data 24 Times Faster Than 5G Connections](https://soylentnews.org/article.pl?sid=26/01/27/0441241&amp;from=rss)
* [2026-01-29, 06:11:00](https://soylentnews.org/article.pl?sid=26/01/27/0433200&amp;from=rss) - [Red Dwarfs are Too Dim to Generate Complex Life](https://soylentnews.org/article.pl?sid=26/01/27/0433200&amp;from=rss)
* [2026-01-29, 04:38:29](https://news.ycombinator.com/item?id=46805867) - [High performance, open source RAFT clustered database: RooDB](https://github.com/jgarzik/roodb)
* [2026-01-29, 01:30:00](https://soylentnews.org/article.pl?sid=26/01/27/0352207&amp;from=rss) - [AI is Already Writing Almost One-Third of New Software Code](https://soylentnews.org/article.pl?sid=26/01/27/0352207&amp;from=rss)
