# [News Summary](https://kherrick.github.io/news-summary/)

## AI Developments and Concerns

* [Al is killing programming and the Python community](https://www.reddit.com/r/Python/s/bIYkLZu9Se) ([comments](https://news.ycombinator.com/item?id=46864602))

* [The Hot Mess of AI](https://alignment.anthropic.com/2026/hot-mess-of-ai/) ([comments](https://news.ycombinator.com/item?id=46864498))

* [Advancing AI Benchmarking with Game Arena](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/kaggle-game-arena-updates/) ([comments](https://news.ycombinator.com/item?id=46858873))

* [MaliciousCorgi: The Cute-Looking AI Extensions Leaking Code from 1.5 Million Developers](https://www.koi.ai/blog/maliciouscorgi-the-cute-looking-ai-extensions-leaking-code-from-1-5-million-developers) ([comments](https://lobste.rs/s/0wd2al/maliciouscorgi_cute_looking_ai))

## Tech Innovations and Security

* [Leica Camera's Owners Weigh $1.2 Billion Sale of Controlling Stake](https://slashdot.org/story/26/02/02/2015228/leica-cameras-owners-weigh-12-billion-sale-of-controlling-stake?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://slashdot.org/story/26/02/02/2015228/leica-cameras-owners-weigh-12-billion-sale-of-controlling-stake?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Firefox Getting New Controls to Turn Off AI Features](https://www.macrumors.com/2026/02/02/firefox-ai-toggle/) ([comments](https://news.ycombinator.com/item?id=46864120))

* [The largest number representable in 64 bits](https://tromp.github.io/blog/2026/01/28/largest-number-revised) ([comments](https://lobste.rs/s/bp8ru2/largest_number_representable_64_bits))

## Environmental and Scientific Advances

* [Court orders restart of all US offshore wind power construction](https://arstechnica.com/science/2026/02/court-orders-restart-of-all-us-offshore-wind-construction/) ([comments](https://news.ycombinator.com/item?id=46863112))

* [Geologists may have solved mystery of Green River's 'uphill' route](https://phys.org/news/2026-01-geologists-mystery-green-river-uphill.html) ([comments](https://news.ycombinator.com/item?id=46855803))

* [Discovery Challenges Assumptions About the Structure of Language](https://soylentnews.org/article.pl?sid=26/02/01/194207&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/02/01/194207&amp;from=rss))

## Industry Updates

* [Nvidia shares are down after report that its OpenAI investment stalled](https://www.cnbc.com/2026/02/02/nvidia-stock-price-openai-funding.html) ([comments](https://news.ycombinator.com/item?id=46860964))

* [Microsoft Weighs Retreat From Windows 11 AI Push, Reviews Copilot Integrations and Recall](https://tech.slashdot.org/story/26/02/02/1826219/microsoft-weighs-retreat-from-windows-11-ai-push-reviews-copilot-integrations-and-recall?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=46858622))

* [Starbucks Bets on Robots To Brew a Turnaround in Customers](https://hardware.slashdot.org/story/26/02/02/1443247/starbucks-bets-on-robots-to-brew-a-turnaround-in-customers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://hardware.slashdot.org/story/26/02/02/1443247/starbucks-bets-on-robots-to-brew-a-turnaround-in-customers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Security and Privacy Challenges

* [Notepad++ Compromised By State Actor](https://it.slashdot.org/story/26/02/02/1646253/notepad-compromised-by-state-actor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://lobste.rs/s/pt7myu/notepad_hijacked_by_state_sponsored))

* [Hacking Moltbook](https://www.wiz.io/blog/exposed-moltbook-database-reveals-millions-of-api-keys) ([comments](https://news.ycombinator.com/item?id=46857615))

* [AI Coding Assistants Secretly Copying All Code to China](https://www.schneier.com/blog/archives/2026/02/ai-coding-assistants-secretly-copying-all-code-to-china.html) ([comments](https://lobste.rs/s/wpue2f/ai_coding_assistants_secretly_copying))

## Programming and Development

* [Stelvio: Ship Python to AWS](https://github.com/stelviodev/stelvio) ([comments](https://news.ycombinator.com/item?id=46860566))

* [Zig Libc](https://ziglang.org/devlog/2026/#2026-01-31) ([comments](https://lobste.rs/s/pfhei9/zig_libc))

* [Removing Tahoe’s Unwanted Menu Icons](https://weblog.rogueamoeba.com/2026/01/10/removing-tahoes-unwanted-menu-icons/) ([comments](https://lobste.rs/s/7xegog/removing_tahoe_s_unwanted_menu_icons))

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

* [2026-02-03, 00:39:48](https://news.ycombinator.com/item?id=46864602) - [Al is killing programming and the Python community](https://www.reddit.com/r/Python/s/bIYkLZu9Se)
* [2026-02-03, 00:28:06](https://news.ycombinator.com/item?id=46864498) - [The Hot Mess of AI](https://alignment.anthropic.com/2026/hot-mess-of-ai/)
* [2026-02-03, 00:01:00](https://slashdot.org/story/26/02/02/2015228/leica-cameras-owners-weigh-12-billion-sale-of-controlling-stake?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Leica Camera&apos;s Owners Weigh $1.2 Billion Sale of Controlling Stake](https://slashdot.org/story/26/02/02/2015228/leica-cameras-owners-weigh-12-billion-sale-of-controlling-stake?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-02, 23:58:00](https://soylentnews.org/article.pl?sid=26/02/01/199225&amp;from=rss) - [Tim Berners-Lee  Wants to Save the Web](https://soylentnews.org/article.pl?sid=26/02/01/199225&amp;from=rss)
* [2026-02-02, 23:54:02](https://news.ycombinator.com/item?id=46864120) - [Firefox Getting New Controls to Turn Off AI Features](https://www.macrumors.com/2026/02/02/firefox-ai-toggle/)
* [2026-02-02, 22:57:59](https://news.ycombinator.com/item?id=46863357) - [Julia](https://borretti.me/fiction/julia)
* [2026-02-02, 22:48:10](https://news.ycombinator.com/item?id=46863162) - [The TSA&apos;s New $45 Fee to Fly Without ID Is Illegal](https://www.frommers.com/tips/airfare/the-tsa-new-45-fee-to-fly-without-id-is-illegal-says-regulatory-expert/)
* [2026-02-02, 22:45:04](https://news.ycombinator.com/item?id=46863112) - [Court orders restart of all US offshore wind power construction](https://arstechnica.com/science/2026/02/court-orders-restart-of-all-us-offshore-wind-construction/)
* [2026-02-02, 22:33:00](https://news.slashdot.org/story/26/02/02/1935214/feds-skipping-infosec-industrys-biggest-conference-this-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Feds Skipping Infosec Industry&apos;s Biggest Conference This Year](https://news.slashdot.org/story/26/02/02/1935214/feds-skipping-infosec-industrys-biggest-conference-this-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-02, 21:51:22](https://news.ycombinator.com/item?id=46862170) - [xAI joins SpaceX](https://www.spacex.com/updates#xai-joins-spacex)
* [2026-02-02, 21:43:21](https://lobste.rs/s/bywnqo/what_s_your_email_setup) - [What&apos;s your email setup?](https://lobste.rs/s/bywnqo/what_s_your_email_setup)
* [2026-02-02, 21:34:25](https://lobste.rs/s/pfhei9/zig_libc) - [zig libc](https://ziglang.org/devlog/2026/#2026-01-31)
* [2026-02-02, 21:28:16](https://news.ycombinator.com/item?id=46861842) - [GitHub experience various partial-outages/degradations](https://www.githubstatus.com?todayis=2026-02-02)
* [2026-02-02, 21:01:00](https://news.slashdot.org/story/26/02/02/1836226/finland-to-introduce-green-wave-automated-system-for-emergency-vehicles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Finland To Introduce &apos;Green Wave&apos; Automated System For Emergency Vehicles](https://news.slashdot.org/story/26/02/02/1836226/finland-to-introduce-green-wave-automated-system-for-emergency-vehicles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-02, 20:48:55](https://news.ycombinator.com/item?id=46861313) - [Anki ownership transferred to AnkiHub](https://forums.ankiweb.net/t/ankis-growing-up/68610)
* [2026-02-02, 20:25:41](https://news.ycombinator.com/item?id=46860964) - [Nvidia shares are down after report that its OpenAI investment stalled](https://www.cnbc.com/2026/02/02/nvidia-stock-price-openai-funding.html)
* [2026-02-02, 20:01:00](https://tech.slashdot.org/story/26/02/02/1826219/microsoft-weighs-retreat-from-windows-11-ai-push-reviews-copilot-integrations-and-recall?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Weighs Retreat From Windows 11 AI Push, Reviews Copilot Integrations and Recall](https://tech.slashdot.org/story/26/02/02/1826219/microsoft-weighs-retreat-from-windows-11-ai-push-reviews-copilot-integrations-and-recall?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-02, 19:59:30](https://news.ycombinator.com/item?id=46860566) - [Stelvio: Ship Python to AWS](https://github.com/stelviodev/stelvio)
* [2026-02-02, 19:56:51](https://lobste.rs/s/2yk8ao/stelvio_ship_python_aws) - [Stelvio: ship Python to AWS](http://github.com/stelviodev/stelvio)
* [2026-02-02, 19:32:12](https://lobste.rs/s/bp8ru2/largest_number_representable_64_bits) - [The largest number representable in 64 bits](https://tromp.github.io/blog/2026/01/28/largest-number-revised)
* [2026-02-02, 19:12:00](https://soylentnews.org/article.pl?sid=26/02/01/196206&amp;from=rss) - [ReactOS Turns 30](https://soylentnews.org/article.pl?sid=26/02/01/196206&amp;from=rss)
* [2026-02-02, 19:00:16](https://lobste.rs/s/fb8jur/retro_web) - [The Retro Web](https://theretroweb.com/)
* [2026-02-02, 19:00:00](https://apple.slashdot.org/story/26/02/02/1741244/the-ai-boom-is-coming-for-apples-profit-margins?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The AI Boom Is Coming for Apple&apos;s Profit Margins](https://apple.slashdot.org/story/26/02/02/1741244/the-ai-boom-is-coming-for-apples-profit-margins?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-02, 18:31:36](https://news.ycombinator.com/item?id=46859443) - [The largest number representable in 64 bits](https://tromp.github.io/blog/2026/01/28/largest-number-revised)
* [2026-02-02, 18:02:48](https://news.ycombinator.com/item?id=46859054) - [The Codex App](https://openai.com/index/introducing-the-codex-app/)
* [2026-02-02, 18:01:00](https://it.slashdot.org/story/26/02/02/1652237/vibe-coded-social-network-for-ai-bots-exposed-data-on-thousands-of-humans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Vibe-coded Social Network for AI Bots Exposed Data on Thousands of Humans](https://it.slashdot.org/story/26/02/02/1652237/vibe-coded-social-network-for-ai-bots-exposed-data-on-thousands-of-humans?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-02, 17:49:07](https://news.ycombinator.com/item?id=46858873) - [Advancing AI Benchmarking with Game Arena](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/kaggle-game-arena-updates/)
* [2026-02-02, 17:43:19](https://lobste.rs/s/7xegog/removing_tahoe_s_unwanted_menu_icons) - [Removing Tahoe’s Unwanted Menu Icons](https://weblog.rogueamoeba.com/2026/01/10/removing-tahoes-unwanted-menu-icons/)
* [2026-02-02, 17:28:19](https://news.ycombinator.com/item?id=46858622) - [Zig Libc](https://ziglang.org/devlog/2026/#2026-01-31)
* [2026-02-02, 17:25:26](https://news.ycombinator.com/item?id=46858577) - [Todd C. Miller – Sudo maintainer for over 30 years](https://www.millert.dev/)
* [2026-02-02, 17:00:00](https://it.slashdot.org/story/26/02/02/1646253/notepad-compromised-by-state-actor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Notepad++ Compromised By State Actor](https://it.slashdot.org/story/26/02/02/1646253/notepad-compromised-by-state-actor?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-02, 16:56:50](https://lobste.rs/s/8llm9z/rust_1_93_performance_improvements) - [Rust 1.93 performance improvements in format! and friends](https://hachyderm.io/@Mara/115542621720999480)
* [2026-02-02, 16:53:01](https://lobste.rs/s/halc0a/game_trees_hub_s_web_interface_is_live_we) - [Game of Trees Hub&apos;s web interface is live. And we need more subscribers](https://opencollective.com/gothub/updates/web-interface-is-now-enabled-and-we-need-more-subscribers)
* [2026-02-02, 16:08:36](https://news.ycombinator.com/item?id=46857615) - [Hacking Moltbook](https://www.wiz.io/blog/exposed-moltbook-database-reveals-millions-of-api-keys)
* [2026-02-02, 16:01:30](https://news.ycombinator.com/item?id=46857488) - [Ask HN: Who is hiring? (February 2026)](https://news.ycombinator.com/item?id=46857488)
* [2026-02-02, 16:01:30](https://news.ycombinator.com/item?id=46857487) - [Ask HN: Who wants to be hired? (February 2026)](https://news.ycombinator.com/item?id=46857487)
* [2026-02-02, 16:01:00](https://news.slashdot.org/story/26/02/02/1510241/high-speed-internet-boom-hits-low-tech-snag-a-labor-shortage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [High-Speed Internet Boom Hits Low-Tech Snag: a Labor Shortage](https://news.slashdot.org/story/26/02/02/1510241/high-speed-internet-boom-hits-low-tech-snag-a-labor-shortage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-02, 15:59:58](https://lobste.rs/s/htsg2w/uk_fuel_price_map_web_ui_for_uk_fuel_price) - [uk-fuel-price-map: A web ui for the uk fuel price data](https://github.com/markwylde/uk-fuel-price-map)
* [2026-02-02, 15:45:19](https://lobste.rs/s/0wd2al/maliciouscorgi_cute_looking_ai) - [MaliciousCorgi: The Cute-Looking AI Extensions Leaking Code from 1.5 Million Developers](https://www.koi.ai/blog/maliciouscorgi-the-cute-looking-ai-extensions-leaking-code-from-1-5-million-developers)
* [2026-02-02, 15:40:48](https://lobste.rs/s/c3vvtw/rust_coreutils_continues_working_toward) - [Rust Coreutils Continues Working Toward 100% GNU Compatibility, Proving Trolls Wrong](https://www.phoronix.com/news/Rust-Coreutils-FOSDEM-2026)
* [2026-02-02, 15:34:49](https://lobste.rs/s/igyhgw/my_experience_with_vibe_coding) - [My experience with vibe coding](https://haskellforall.com/2026/02/my-experience-with-vibe-coding)
* [2026-02-02, 14:43:00](https://hardware.slashdot.org/story/26/02/02/1443247/starbucks-bets-on-robots-to-brew-a-turnaround-in-customers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Starbucks Bets on Robots To Brew a Turnaround in Customers](https://hardware.slashdot.org/story/26/02/02/1443247/starbucks-bets-on-robots-to-brew-a-turnaround-in-customers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-02, 14:31:59](https://lobste.rs/s/wpue2f/ai_coding_assistants_secretly_copying) - [AI Coding Assistants Secretly Copying All Code to China](https://www.schneier.com/blog/archives/2026/02/ai-coding-assistants-secretly-copying-all-code-to-china.html)
* [2026-02-02, 14:28:00](https://soylentnews.org/article.pl?sid=26/02/01/194207&amp;from=rss) - [Discovery Challenges Assumptions About the Structure of Language](https://soylentnews.org/article.pl?sid=26/02/01/194207&amp;from=rss)
* [2026-02-02, 14:14:34](https://lobste.rs/s/9esltl/intro_cstml_xml_meets_json) - [Intro to CSTML (or: XML meets JSON)](https://docs.bablr.org/guides/cstml/)
* [2026-02-02, 14:00:00](https://news.slashdot.org/story/26/02/02/1359211/chinas-decades-old-genius-class-pipeline-is-quietly-fueling-its-ai-challenge-to-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s Decades-Old &apos;Genius Class&apos; Pipeline Is Quietly Fueling Its AI Challenge To the US](https://news.slashdot.org/story/26/02/02/1359211/chinas-decades-old-genius-class-pipeline-is-quietly-fueling-its-ai-challenge-to-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-02, 13:29:13](https://news.ycombinator.com/item?id=46855803) - [Geologists may have solved mystery of Green River&apos;s &apos;uphill&apos; route](https://phys.org/news/2026-01-geologists-mystery-green-river-uphill.html)
* [2026-02-02, 13:02:04](https://news.ycombinator.com/item?id=46855550) - [UK government launches fuel forecourt price API](https://www.gov.uk/guidance/access-the-latest-fuel-prices-and-forecourt-data-via-api-or-email)
* [2026-02-02, 12:52:35](https://news.ycombinator.com/item?id=46855447) - [Nano-vLLM: How a vLLM-style inference engine works](https://neutree.ai/blog/nano-vllm-part-1)
* [2026-02-02, 12:34:00](https://it.slashdot.org/story/26/02/02/0618242/is-ai-really-taking-jobs-or-are-employers-just-ai-washing-normal-layoffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is AI Really Taking Jobs? Or Are Employers Just &apos;AI-Washing&apos; Normal Layoffs?](https://it.slashdot.org/story/26/02/02/0618242/is-ai-really-taking-jobs-or-are-employers-just-ai-washing-normal-layoffs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-02, 11:55:12](https://lobste.rs/s/uvotix/resurrecting_email_notifications_on) - [Resurrecting Email Notifications on a Legacy NAS](https://rhardih.io/2026/02/resurrecting-email-notifications-on-a-legacy-nas/)
* [2026-02-02, 11:21:09](https://lobste.rs/s/rcojcc/technology_nearly_perfect_usb_cable) - [Technology: The (nearly) perfect USB cable tester does exist](https://blog.literarily-starved.com/2026/02/technology-the-nearly-perfect-usb-cable-tester-does-exist/)
* [2026-02-02, 10:12:23](https://lobste.rs/s/qgioeo/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/qgioeo/what_are_you_doing_this_week)
* [2026-02-02, 09:42:00](https://soylentnews.org/article.pl?sid=26/02/01/191257&amp;from=rss) - [The EU Tells Google to Give External AI Assistants the Same Access to Android as Gemini Has](https://soylentnews.org/article.pl?sid=26/02/01/191257&amp;from=rss)
* [2026-02-02, 09:34:00](https://linux.slashdot.org/story/26/02/02/0718228/linux-kernel-developer-chris-masons-new-initiative-ai-prompts-for-code-reviews?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux Kernel Developer Chris Mason&apos;s New Initiative: AI Prompts for Code Reviews](https://linux.slashdot.org/story/26/02/02/0718228/linux-kernel-developer-chris-masons-new-initiative-ai-prompts-for-code-reviews?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-02, 08:12:25](https://lobste.rs/s/re5z0g/disconnected_git_workflow) - [The Disconnected Git Workflow](https://ploum.net/2026-01-31-offline-git-send-email.html)
* [2026-02-02, 06:51:05](https://lobste.rs/s/vj2zkd/migrating_gtk3_re_factor) - [Migrating to GTK3 – Re: Factor](https://re.factorcode.org/2025/12/migrating-to-gtk3.html)
* [2026-02-02, 06:39:46](https://lobste.rs/s/rdmyjo/ending_15_years_subprocess_polling) - [Ending 15 years of subprocess polling](https://gmpy.dev/blog/2026/event-driven-process-waiting)
* [2026-02-02, 05:34:00](https://entertainment.slashdot.org/story/26/02/02/0152250/is-the-tv-industry-finally-conceding-that-the-future-may-not-be-8k?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is the TV Industry Finally Conceding That the Future May Not Be 8K?](https://entertainment.slashdot.org/story/26/02/02/0152250/is-the-tv-industry-finally-conceding-that-the-future-may-not-be-8k?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-02, 05:14:25](https://lobste.rs/s/6ifznf/vibe_easy_vm_sandboxes_for_llm_agents_on) - [Vibe: Easy VM sandboxes for LLM agents on MacOS](https://github.com/lynaghk/vibe/)
* [2026-02-02, 04:57:00](https://soylentnews.org/article.pl?sid=26/01/31/0217249&amp;from=rss) - [Scientists Baffled at Mysterious Ancient Creature That Doesn&apos;t Fit on the Tree of Life as We Know It](https://soylentnews.org/article.pl?sid=26/01/31/0217249&amp;from=rss)
* [2026-02-02, 04:50:06](https://news.ycombinator.com/item?id=46852535) - [Why software stocks are getting pummelled](https://www.economist.com/business/2026/02/01/why-software-stocks-are-getting-pummelled)
* [2026-02-02, 04:49:12](https://lobste.rs/s/pt7myu/notepad_hijacked_by_state_sponsored) - [Notepad++ Hijacked by State-Sponsored Hackers](https://notepad-plus-plus.org/news/hijacked-incident-info-update/)
* [2026-02-02, 03:13:00](https://science.slashdot.org/story/26/02/02/0256227/eu-deploys-new-government-satcom-program-in-sovereignty-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EU Deploys New Government Satcom Program in Sovereignty Push](https://science.slashdot.org/story/26/02/02/0256227/eu-deploys-new-government-satcom-program-in-sovereignty-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-02, 01:13:00](https://developers.slashdot.org/story/26/02/02/015206/what-go-programmers-think-of-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Go Programmers Think of AI](https://developers.slashdot.org/story/26/02/02/015206/what-go-programmers-think-of-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-02, 00:11:00](https://soylentnews.org/article.pl?sid=26/01/31/024237&amp;from=rss) - [Processor Arm Race Heats Up as Nvidia Could Soon Challenge Intel, Amd and Apple With its N1X Laptop](https://soylentnews.org/article.pl?sid=26/01/31/024237&amp;from=rss)
* [2026-02-01, 22:51:19](https://lobste.rs/s/lk7gze/defeating_40_year_old_copy_protection) - [Defeating a 40-year-old copy protection dongle](https://dmitrybrant.com/2026/02/01/defeating-a-40-year-old-copy-protection-dongle)
* [2026-02-01, 21:57:17](https://lobste.rs/s/uveyjh/my_very_fast_zero_allocation_webserver) - [My (very) fast zero-allocation webserver using OxCaml](https://anil.recoil.org/notes/oxcaml-httpz)
* [2026-02-01, 20:33:27](https://lobste.rs/s/z0mdor/archive_today_is_directing_ddos_attack) - [archive.today is directing a DDOS attack against my blog](https://gyrovague.com/2026/02/01/archive-today-is-directing-a-ddos-attack-against-my-blog/)
* [2026-02-01, 19:30:00](https://soylentnews.org/article.pl?sid=26/01/31/0151243&amp;from=rss) - [Motor Trend - Car Dealer Confidential](https://soylentnews.org/article.pl?sid=26/01/31/0151243&amp;from=rss)
* [2026-02-01, 18:15:40](https://news.ycombinator.com/item?id=46848060) - [Pretty soon, heat pumps will be able to store and distribute heat as needed](https://www.sintef.no/en/latest-news/2026/pretty-soon-heat-pumps-will-be-able-to-store-and-distribute-heat-as-needed/)
* [2026-02-01, 14:45:00](https://soylentnews.org/article.pl?sid=26/01/31/0148226&amp;from=rss) - [Voyager 2&apos;s Close Encounter With Uranus Wasn&apos;t in the Official Plan](https://soylentnews.org/article.pl?sid=26/01/31/0148226&amp;from=rss)
* [2026-02-01, 09:59:00](https://soylentnews.org/article.pl?sid=26/01/31/014212&amp;from=rss) - [How Often Do AI Chatbots Lead Users Down a Harmful Path?](https://soylentnews.org/article.pl?sid=26/01/31/014212&amp;from=rss)
* [2026-02-01, 05:15:00](https://soylentnews.org/article.pl?sid=26/01/31/0058200&amp;from=rss) - [The Path to a Sovereign Tech Stack is Via a Commodified Tech Stack](https://soylentnews.org/article.pl?sid=26/01/31/0058200&amp;from=rss)
* [2026-02-01, 00:24:00](https://soylentnews.org/article.pl?sid=26/01/31/0054256&amp;from=rss) - [Researchers Use D&amp;D to Test AI&apos;s Long-Term Decision-Making Abilities](https://soylentnews.org/article.pl?sid=26/01/31/0054256&amp;from=rss)
* [2026-01-31, 19:43:00](https://soylentnews.org/article.pl?sid=26/01/30/1620239&amp;from=rss) - [Linux after Linus?](https://soylentnews.org/article.pl?sid=26/01/30/1620239&amp;from=rss)
* [2026-01-31, 15:00:00](https://soylentnews.org/article.pl?sid=26/01/30/0637214&amp;from=rss) - [ Notes on the Intel 8086 Processor&apos;s Arithmetic-logic Unit ](https://soylentnews.org/article.pl?sid=26/01/30/0637214&amp;from=rss)
* [2026-01-31, 10:19:00](https://soylentnews.org/article.pl?sid=26/01/30/0627240&amp;from=rss) - [Signal President Warns AI Agents Are Making Encryption Irrelevant](https://soylentnews.org/article.pl?sid=26/01/30/0627240&amp;from=rss)
* [2026-01-31, 05:42:00](https://soylentnews.org/article.pl?sid=26/01/30/0623217&amp;from=rss) - [Remembering the YF-23 Stealth Fighter](https://soylentnews.org/article.pl?sid=26/01/30/0623217&amp;from=rss)
* [2026-01-31, 01:01:00](https://soylentnews.org/article.pl?sid=26/01/30/068202&amp;from=rss) - [County Pays $600,000 to Pentesters It Arrested for Assessing Courthouse Security](https://soylentnews.org/article.pl?sid=26/01/30/068202&amp;from=rss)
* [2026-01-30, 20:22:00](https://soylentnews.org/article.pl?sid=26/01/28/2253239&amp;from=rss) - [A Look at Potential Problems with Future AI](https://soylentnews.org/article.pl?sid=26/01/28/2253239&amp;from=rss)
* [2026-01-30, 17:11:55](https://news.ycombinator.com/item?id=46826991) - [IsoCoaster – Theme Park Builder](https://iso-coaster.com/)
* [2026-01-30, 16:34:05](https://news.ycombinator.com/item?id=46826454) - [Joedb, the Journal-Only Embedded Database](https://www.joedb.org/index.html)
* [2026-01-30, 15:38:00](https://soylentnews.org/article.pl?sid=26/01/28/2248256&amp;from=rss) - [Salty Facts: Takeaways Have More Salt Than Labels Claim](https://soylentnews.org/article.pl?sid=26/01/28/2248256&amp;from=rss)
* [2026-01-30, 10:46:00](https://soylentnews.org/article.pl?sid=26/01/28/2247217&amp;from=rss) - [Executives Keep Overestimating AI Benefits](https://soylentnews.org/article.pl?sid=26/01/28/2247217&amp;from=rss)
* [2026-01-30, 09:10:48](https://news.ycombinator.com/item?id=46822177) - [The Connection Machine CM-1 \&quot;Feynman\&quot; T-shirt](https://tamikothiel.com/cm/cm-tshirt.html)
* [2026-01-30, 06:10:00](https://soylentnews.org/article.pl?sid=26/01/28/2241225&amp;from=rss) - [Musk&apos;s X Releases Source Code for Platform&apos;s Algorithm](https://soylentnews.org/article.pl?sid=26/01/28/2241225&amp;from=rss)
* [2026-01-30, 03:17:32](https://news.ycombinator.com/item?id=46820142) - [4x faster network file sync with rclone (vs rsync) (2025)](https://www.jeffgeerling.com/blog/2025/4x-faster-network-file-sync-rclone-vs-rsync/)
* [2026-01-30, 01:15:00](https://soylentnews.org/article.pl?sid=26/01/28/2237224&amp;from=rss) - [For the Price of Netflix, Crooks Can Rent AI Crime Ops](https://soylentnews.org/article.pl?sid=26/01/28/2237224&amp;from=rss)
