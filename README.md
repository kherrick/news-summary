# [News Summary](https://kherrick.github.io/news-summary/)

## Tech Industry Developments

* [French-UK Starlink Rival Pitches Canada On 'Sovereign' Satellite Service](https://tech.slashdot.org/story/26/01/09/2349211/french-uk-starlink-rival-pitches-canada-on-sovereign-satellite-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - European collaboration steps up to compete with Starlink, aiming to offer Canada a sovereign satellite service.

* [Meta Signs Deals With Three Nuclear Companies For 6+ GW of Power](https://hardware.slashdot.org/story/26/01/09/2329256/meta-signs-deals-with-three-nuclear-companies-for-6-gw-of-power?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Meta partners with nuclear companies to secure a significant power supply, emphasizing its commitment to sustainable energy.

* [Microsoft Silently Kills Windows and Office Phone Activation and Forces Online Activation](https://soylentnews.org/article.pl?sid=26/01/09/1822241&amp;from=rss) - Microsoft discontinues its phone activation service for Windows and Office, making online activation mandatory.

* [Microsoft May Soon Allow IT Admins To Uninstall Copilot](https://it.slashdot.org/story/26/01/09/2219256/microsoft-may-soon-allow-it-admins-to-uninstall-copilot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Upcoming updates hint at enabling IT administrators to remove Copilot, Microsoft's integrated AI assistant.

## Artificial Intelligence Insights

* [AI Models Are Starting To Learn By Asking Themselves Questions](https://news.slashdot.org/story/26/01/09/2246235/ai-models-are-starting-to-learn-by-asking-themselves-questions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - AI models now teaching themselves by internal queries, marking a step forward in machine learning evolution.

* [AI Is Intensifying a 'Collapse' of Trust Online, Experts Say](https://news.slashdot.org/story/26/01/09/2237231/ai-is-intensifying-a-collapse-of-trust-online-experts-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - AI is eroding trust online, with experts sounding alarms about its impacts on information integrity.

* [“Erdos problem #728 was solved more or less autonomously by AI”](https://mathstodon.xyz/@tao/115855840223258103) - A mathematical problem posed by Erdos finds an AI-driven and largely autonomous solution.

## Scientific Discoveries and Innovations

* [Scientists Tried To Break Einstein's Speed of Light Rule](https://science.slashdot.org/story/26/01/09/2343237/scientists-tried-to-break-einsteins-speed-of-light-rule?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Researchers embark on a groundbreaking attempt to challenge a fundamental principle of physics laid out by Einstein.

* [Renowned Mathematician Joel David Hamkins Declares AI Models Useless for Solving Math](https://soylentnews.org/article.pl?sid=26/01/09/1820256&amp;from=rss) - Joel David Hamkins critiques the utility of AI in resolving complex mathematical problems.

* [Scientists Found a Way to Help the Brain Bounce Back From Alzheimer's](https://soylentnews.org/article.pl?sid=26/01/08/0325201&amp;from=rss) - A revolutionary discovery may bring hope to Alzheimer's patients by aiding the brain's recovery process.

## Tech and Software Innovations

* [Continuous Snapshotting Filesystem](https://nilfs.sourceforge.io/en/index.html) - Introducing a revolutionary filesystem designed for consistent automatic snapshotting.

* [A Year of Work on the ALPM Project](https://devblog.archlinux.page/2026/a-year-of-work-on-the-alpm-project/) - A behind-the-scenes look at a year's work in advancing the ALPM package manager.

* [Hongdown: An opinionated Markdown formatter in Rust](https://github.com/dahlia/hongdown) - A unique markdown formatter built with precision using the Rust programming language.

* [How we made Python's packaging library 3x faster](https://iscinumpy.dev/post/packaging-faster/) - Insights into the optimization of Python’s packaging library, achieving thrice the speed.

* [How Markdown took over the world](https://anildash.com/2026/01/09/how-markdown-took-over-the-world/) - An exploration of how the simple, elegant Markdown language came to dominate documentation and content writing.

## Unique Stories and Perspectives

* [I got paid minimum wage to solve an impossible problem](https://tiespetersen.substack.com/p/i-got-paid-minimum-wage-to-solve) - A personal narrative tackling an unfeasible problem on a low-budgeted salary.

* [Start your meetings at 5 minutes past](https://philipotoole.com/start-your-meetings-at-5-minutes-past/) - A thoughtful practice to reframe meeting schedules and minimize late arrivals.

* [Scientists Create a “Periodic Table” for Artificial Intelligence](https://soylentnews.org/article.pl?sid=26/01/06/1126220&amp;from=rss) - Researchers conceptualize AI components into an innovative periodic table format.

* [Scientists discover oldest poison, on 60k-year-old arrows](https://www.nytimes.com/2026/01/07/science/poison-arrows-south-africa.html) - Archaeologists unveil the earliest evidence of chemical weaponry from ancient times.

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

* [2026-01-10, 13:00:00](https://tech.slashdot.org/story/26/01/09/2349211/french-uk-starlink-rival-pitches-canada-on-sovereign-satellite-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [French-UK Starlink Rival Pitches Canada On &apos;Sovereign&apos; Satellite Service](https://tech.slashdot.org/story/26/01/09/2349211/french-uk-starlink-rival-pitches-canada-on-sovereign-satellite-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-10, 12:51:25](https://news.ycombinator.com/item?id=46565281) - [All my new code will be closed-source from now on](https://twitter.com/MarcJSchmidt/status/2009688028931875156)
* [2026-01-10, 12:42:00](https://soylentnews.org/article.pl?sid=26/01/09/1822241&amp;from=rss) - [Microsoft Silently Kills Windows and Office Phone Activation and Forces Online Activation](https://soylentnews.org/article.pl?sid=26/01/09/1822241&amp;from=rss)
* [2026-01-10, 12:23:20](https://news.ycombinator.com/item?id=46565132) - [A Eulogy for Dark Sky, a Data Visualization Masterpiece (2023)](https://nightingaledvs.com/dark-sky-weather-data-viz/)
* [2026-01-10, 12:15:20](https://lobste.rs/s/i9nrlh/continuous_snapshotting_filesystem) - [Continuous Snapshotting Filesystem](https://nilfs.sourceforge.io/en/index.html)
* [2026-01-10, 11:55:32](https://lobste.rs/s/osmrzx/how_i_use_jujutsu) - [How I use Jujutsu](https://abhinavsarkar.net/posts/jj-usage/)
* [2026-01-10, 11:12:15](https://news.ycombinator.com/item?id=46564696) - [Allow me to introduce, the Citroen C15](https://eupolicy.social/@jmaris/115860595238097654)
* [2026-01-10, 10:53:28](https://news.ycombinator.com/item?id=46564618) - [I got paid minimum wage to solve an impossible problem](https://tiespetersen.substack.com/p/i-got-paid-minimum-wage-to-solve)
* [2026-01-10, 10:33:29](https://lobste.rs/s/gcwkbw/year_work_on_alpm_project) - [A year of work on the ALPM project](https://devblog.archlinux.page/2026/a-year-of-work-on-the-alpm-project/)
* [2026-01-10, 10:00:00](https://science.slashdot.org/story/26/01/09/2343237/scientists-tried-to-break-einsteins-speed-of-light-rule?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Tried To Break Einstein&apos;s Speed of Light Rule](https://science.slashdot.org/story/26/01/09/2343237/scientists-tried-to-break-einsteins-speed-of-light-rule?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-10, 09:56:46](https://news.ycombinator.com/item?id=46564323) - [Beating the Tutorial](https://elliotmorris.net/blog-a-day-3-beating-the-tutorial)
* [2026-01-10, 09:16:26](https://lobste.rs/s/bstbd6/hongdown_opinionated_markdown) - [Hongdown: An opinionated Markdown formatter in Rust](https://github.com/dahlia/hongdown)
* [2026-01-10, 07:53:00](https://soylentnews.org/article.pl?sid=26/01/09/1820256&amp;from=rss) - [Renowned Mathematician Joel David Hamkins Declares AI Models Useless for Solving Math](https://soylentnews.org/article.pl?sid=26/01/09/1820256&amp;from=rss)
* [2026-01-10, 07:18:30](https://lobste.rs/s/igbrxv/tag_proposal_logic_lang) - [Tag Proposal: logic-lang](https://lobste.rs/s/igbrxv/tag_proposal_logic_lang)
* [2026-01-10, 07:00:00](https://hardware.slashdot.org/story/26/01/09/2329256/meta-signs-deals-with-three-nuclear-companies-for-6-gw-of-power?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Signs Deals With Three Nuclear Companies For 6+ GW of Power](https://hardware.slashdot.org/story/26/01/09/2329256/meta-signs-deals-with-three-nuclear-companies-for-6-gw-of-power?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-10, 06:59:11](https://lobste.rs/s/dzvt0w/type_inference_all_constructs_next_15) - [Type inference of all constructs and the next 15 months](https://elixir-lang.org/blog/2026/01/09/type-inference-of-all-and-next-15/)
* [2026-01-10, 04:35:32](https://news.ycombinator.com/item?id=46562790) - [Oh My Zsh adds bloat](https://rushter.com/blog/zsh-shell/)
* [2026-01-10, 03:52:48](https://news.ycombinator.com/item?id=46562583) - [OLED, Not for Me](https://nuxx.net/blog/2026/01/09/oled-not-for-me/)
* [2026-01-10, 03:30:00](https://news.slashdot.org/story/26/01/09/2246235/ai-models-are-starting-to-learn-by-asking-themselves-questions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Models Are Starting To Learn By Asking Themselves Questions](https://news.slashdot.org/story/26/01/09/2246235/ai-models-are-starting-to-learn-by-asking-themselves-questions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-10, 03:09:00](https://soylentnews.org/article.pl?sid=26/01/08/0331227&amp;from=rss) - [The Nation&apos;s Strictest Privacy Law Just Took Effect, to Data Brokers’ Chagrin](https://soylentnews.org/article.pl?sid=26/01/08/0331227&amp;from=rss)
* [2026-01-10, 03:08:04](https://lobste.rs/s/hf8g8k/phosh_2025_retrospect) - [Phosh 2025 in Retrospect](https://phosh.mobi/posts/phosh-2025-in-retrospect/)
* [2026-01-10, 02:02:00](https://news.slashdot.org/story/26/01/09/2237231/ai-is-intensifying-a-collapse-of-trust-online-experts-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Is Intensifying a &apos;Collapse&apos; of Trust Online, Experts Say](https://news.slashdot.org/story/26/01/09/2237231/ai-is-intensifying-a-collapse-of-trust-online-experts-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-10, 01:25:00](https://hardware.slashdot.org/story/26/01/09/2231201/intel-is-going-big-time-into-14a-says-ceo-lip-bu-tan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel Is &apos;Going Big Time Into 14A,&apos; Says CEO Lip-Bu Tan](https://hardware.slashdot.org/story/26/01/09/2231201/intel-is-going-big-time-into-14a-says-ceo-lip-bu-tan?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-10, 00:45:00](https://it.slashdot.org/story/26/01/09/2219256/microsoft-may-soon-allow-it-admins-to-uninstall-copilot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft May Soon Allow IT Admins To Uninstall Copilot](https://it.slashdot.org/story/26/01/09/2219256/microsoft-may-soon-allow-it-admins-to-uninstall-copilot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-10, 00:08:24](https://lobste.rs/s/6phxzm/how_markdown_took_over_world) - [How Markdown took over the world](https://anildash.com/2026/01/09/how-markdown-took-over-the-world/)
* [2026-01-10, 00:02:00](https://tech.slashdot.org/story/26/01/09/2117206/google-dont-make-bite-sized-content-for-llms-if-you-care-about-search-rank?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google: Don&apos;t Make &apos;Bite-Sized&apos; Content For LLMs If You Care About Search Rank](https://tech.slashdot.org/story/26/01/09/2117206/google-dont-make-bite-sized-content-for-llms-if-you-care-about-search-rank?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-09, 23:36:57](https://lobste.rs/s/mdggwb/introducing_ektupy) - [Introducing EktuPy](https://kushaldas.in/posts/introducing-ektupy.html)
* [2026-01-09, 23:20:00](https://tech.slashdot.org/story/26/01/09/216254/ces-worst-in-show-awards-call-out-the-tech-making-things-worse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CES Worst In Show Awards Call Out the Tech Making Things Worse](https://tech.slashdot.org/story/26/01/09/216254/ces-worst-in-show-awards-call-out-the-tech-making-things-worse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-09, 22:40:00](https://games.slashdot.org/story/26/01/09/2058210/latest-steamos-beta-now-includes-ntsync-kernel-driver?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Latest SteamOS Beta Now Includes NTSYNC Kernel Driver](https://games.slashdot.org/story/26/01/09/2058210/latest-steamos-beta-now-includes-ntsync-kernel-driver?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-09, 22:39:15](https://news.ycombinator.com/item?id=46560445) - [“Erdos problem #728 was solved more or less autonomously by AI”](https://mathstodon.xyz/@tao/115855840223258103)
* [2026-01-09, 22:20:00](https://soylentnews.org/article.pl?sid=26/01/08/0325201&amp;from=rss) - [Scientists Found a Way to Help the Brain Bounce Back From Alzheimer&apos;s](https://soylentnews.org/article.pl?sid=26/01/08/0325201&amp;from=rss)
* [2026-01-09, 22:19:03](https://news.ycombinator.com/item?id=46560217) - [Start your meetings at 5 minutes past](https://philipotoole.com/start-your-meetings-at-5-minutes-past/)
* [2026-01-09, 22:02:00](https://yro.slashdot.org/story/26/01/09/2052239/italy-fines-cloudflare-14-million-euros-for-refusing-to-filter-pirate-sites-on-public-1111-dns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Italy Fines Cloudflare 14 Million Euros For Refusing To Filter Pirate Sites On Public 1.1.1.1 DNS](https://yro.slashdot.org/story/26/01/09/2052239/italy-fines-cloudflare-14-million-euros-for-refusing-to-filter-pirate-sites-on-public-1111-dns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-09, 21:25:00](https://news.slashdot.org/story/26/01/09/1742218/microsoft-windows-media-player-stops-serving-up-cd-album-info?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Windows Media Player Stops Serving Up CD Album Info](https://news.slashdot.org/story/26/01/09/1742218/microsoft-windows-media-player-stops-serving-up-cd-album-info?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-09, 21:15:10](https://lobste.rs/s/jydyuw/garbage_collected_handles_are_lifetime) - [Garbage collected handles are lifetime-contravariant](https://trynova.dev/blog/garbage-collection-is-contrarian)
* [2026-01-09, 20:41:00](https://news.slashdot.org/story/26/01/09/1832229/identity-and-ideology-in-the-school-boardroom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Identity and Ideology in the School Boardroom](https://news.slashdot.org/story/26/01/09/1832229/identity-and-ideology-in-the-school-boardroom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-09, 20:27:03](https://lobste.rs/s/zdwvdw/prompting_101_show_don_t_tell) - [Prompting 101: Show, don’t tell](https://www.haskellforall.com/2026/01/prompting-101-show-dont-tell.html)
* [2026-01-09, 20:01:00](https://science.slashdot.org/story/26/01/09/1755211/the-golden-age-of-vaccine-development?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Golden Age of Vaccine Development](https://science.slashdot.org/story/26/01/09/1755211/the-golden-age-of-vaccine-development?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-09, 19:33:47](https://news.ycombinator.com/item?id=46558148) - [RTX 5090 and Raspberry Pi: Can it game?](https://scottjg.com/posts/2026-01-08-crappy-computer-showdown/)
* [2026-01-09, 19:25:00](https://news.slashdot.org/story/26/01/09/1857257/america-is-falling-out-of-love-with-pizza?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America Is Falling Out of Love With Pizza](https://news.slashdot.org/story/26/01/09/1857257/america-is-falling-out-of-love-with-pizza?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-09, 19:15:21](https://news.ycombinator.com/item?id=46557879) - [Show HN: Rocket Launch and Orbit Simulator](https://www.donutthejedi.com/)
* [2026-01-09, 18:48:30](https://news.ycombinator.com/item?id=46557489) - [JavaScript Demos in 140 Characters](https://beta.dwitter.net)
* [2026-01-09, 18:47:25](https://lobste.rs/s/yzdhxz/how_we_made_python_s_packaging_library_3x) - [How we made Python&apos;s packaging library 3x faster](https://iscinumpy.dev/post/packaging-faster/)
* [2026-01-09, 18:17:24](https://news.ycombinator.com/item?id=46557057) - [My article on why AI is great (or terrible) or how to use it](https://matthewrocklin.com/ai-zealotry/)
* [2026-01-09, 18:15:16](https://news.ycombinator.com/item?id=46557029) - [Show HN: Scroll Wikipedia like TikTok](https://quack.sdan.io)
* [2026-01-09, 17:52:20](https://news.ycombinator.com/item?id=46556695) - [How Markdown took over the world](https://www.anildash.com/2026/01/09/how-markdown-took-over-the-world/)
* [2026-01-09, 17:36:00](https://soylentnews.org/article.pl?sid=26/01/08/0319211&amp;from=rss) - [Palo Alto Networks Security-Intel Boss Calls AI Agents 2026&apos;S Biggest Insider Threat](https://soylentnews.org/article.pl?sid=26/01/08/0319211&amp;from=rss)
* [2026-01-09, 16:46:48](https://news.ycombinator.com/item?id=46555760) - [Cloudflare CEO on the Italy fines](https://twitter.com/eastdakota/status/2009654937303896492)
* [2026-01-09, 16:06:58](https://lobste.rs/s/1j4fbo/answer_set_programming_2019) - [Answer Set Programming (2019)](https://www.cs.utexas.edu/~vl/teaching/378/ASP.pdf)
* [2026-01-09, 15:21:19](https://lobste.rs/s/6rp1jv/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/6rp1jv/what_are_you_doing_this_weekend)
* [2026-01-09, 15:18:36](https://lobste.rs/s/nx9uwg/which_programming_languages_are_most) - [Which programming languages are most token-efficient?](https://martinalderson.com/posts/which-programming-languages-are-most-token-efficient/)
* [2026-01-09, 15:16:22](https://lobste.rs/s/hmlt2f/handling_secrets_somewhat_securely) - [Handling secrets (somewhat) securely in shells](https://linus.schreibt.jetzt/posts/shell-secrets.html)
* [2026-01-09, 15:07:17](https://news.ycombinator.com/item?id=46554652) - [How to store a chess position in 26 bytes (2022)](https://ezzeriesa.notion.site/How-to-store-a-chess-position-in-26-bytes-using-bit-level-magic-df1fdb5364eb42fdac11eb23b25e9605)
* [2026-01-09, 14:57:14](https://lobste.rs/s/e7lpyy/i_cannot_ssh_into_my_server_anymore_s_fine) - [I Cannot SSH Into My Server Anymore (And That’s Fine)](https://soap.coffee/~lthms/posts/i-cannot-ssh-into-my-server-anymore.html)
* [2026-01-09, 14:47:06](https://lobste.rs/s/jo3dnh/str) - [&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;&amp;str](https://ohadravid.github.io/posts/2026-01-09-fourteen-ref/)
* [2026-01-09, 14:43:39](https://lobste.rs/s/1eqclp/slidge_im_gateways_from_xmpp_other) - [slidge.im - Gateways from XMPP to Other Networks](https://slidge.im/)
* [2026-01-09, 13:32:39](https://lobste.rs/s/3o5wil/celeste_towerfall_physics) - [Celeste &amp; TowerFall Physics](https://www.maddymakesgames.com/articles/celeste_and_towerfall_physics/index.html)
* [2026-01-09, 12:54:48](https://news.ycombinator.com/item?id=46553343) - [Kagi releases alpha version of Orion for Linux](https://help.kagi.com/orion/misc/linux-status.html)
* [2026-01-09, 12:53:00](https://soylentnews.org/article.pl?sid=26/01/07/1246247&amp;from=rss) - [OpenAI Bets Big on Audio as Silicon Valley Declares War on Screens](https://soylentnews.org/article.pl?sid=26/01/07/1246247&amp;from=rss)
* [2026-01-09, 11:47:51](https://lobste.rs/s/sew4le/shell_scripts) - [Shell scripts](https://f5n.org/blog/2026/shell-scripts/)
* [2026-01-09, 09:51:19](https://lobste.rs/s/zfrf8k/european_commission_issues_call_for) - [European Commission issues call for evidence on open source](https://lwn.net/Articles/1053107/)
* [2026-01-09, 09:30:10](https://lobste.rs/s/omlcbk/magicall_end_end_encrypted) - [Magicall: end-to-end encrypted videoconferencing in the browser, now in alpha](https://magicall.online)
* [2026-01-09, 08:07:00](https://soylentnews.org/article.pl?sid=26/01/07/1228222&amp;from=rss) - [While the World Cools on EVs, Norway Pushes to 96% Electric Sales](https://soylentnews.org/article.pl?sid=26/01/07/1228222&amp;from=rss)
* [2026-01-09, 03:24:00](https://soylentnews.org/article.pl?sid=26/01/06/1126220&amp;from=rss) - [Scientists Create a “Periodic Table” for Artificial Intelligence](https://soylentnews.org/article.pl?sid=26/01/06/1126220&amp;from=rss)
* [2026-01-08, 23:24:30](https://news.ycombinator.com/item?id=46547962) - [Scientists discover oldest poison, on 60k-year-old arrows](https://www.nytimes.com/2026/01/07/science/poison-arrows-south-africa.html)
* [2026-01-08, 22:38:00](https://soylentnews.org/article.pl?sid=26/01/06/1123219&amp;from=rss) - [Ford Wants to Turn Your Sun Visor Into a Head-Up Display](https://soylentnews.org/article.pl?sid=26/01/06/1123219&amp;from=rss)
* [2026-01-08, 20:41:30](https://lobste.rs/s/fou2tb/jujutsu_v0_37_0_released) - [jujutsu v0.37.0 released](https://github.com/jj-vcs/jj/releases/tag/v0.37.0)
* [2026-01-08, 19:54:26](https://news.ycombinator.com/item?id=46545620) - [How to code Claude Code in 200 lines of code](https://www.mihaileric.com/The-Emperor-Has-No-Clothes/)
* [2026-01-08, 17:53:00](https://soylentnews.org/article.pl?sid=26/01/06/1120251&amp;from=rss) - [The French University Where Spies Go for Training](https://soylentnews.org/article.pl?sid=26/01/06/1120251&amp;from=rss)
* [2026-01-08, 16:57:55](https://news.ycombinator.com/item?id=46543359) - [Show HN: Miditui – A terminal app/UI for MIDI composing, mixing, and playback](https://github.com/minimaxir/miditui)
* [2026-01-08, 13:10:03](https://lobste.rs/s/elj9pq/what_happened_webassembly) - [What Happened To WebAssembly](https://emnudge.dev/blog/what-happened-to-webassembly/)
* [2026-01-08, 13:08:00](https://soylentnews.org/article.pl?sid=26/01/06/1049201&amp;from=rss) - [A Post-American, Enshittification-Resistant Internet](https://soylentnews.org/article.pl?sid=26/01/06/1049201&amp;from=rss)
* [2026-01-08, 08:19:00](https://soylentnews.org/article.pl?sid=26/01/06/1042201&amp;from=rss) - [The Search for Gravitons: Modifying Gravity Waves With Light](https://soylentnews.org/article.pl?sid=26/01/06/1042201&amp;from=rss)
* [2026-01-08, 03:36:00](https://soylentnews.org/article.pl?sid=26/01/06/0751234&amp;from=rss) - [How Do I Make Clear Ice at Home? a Food Scientist Shares Easy Tips](https://soylentnews.org/article.pl?sid=26/01/06/0751234&amp;from=rss)
* [2026-01-07, 22:47:00](https://soylentnews.org/article.pl?sid=26/01/06/0744236&amp;from=rss) - [Scientists Say Ozempic Could Change How You Feel After Drinking Alcohol](https://soylentnews.org/article.pl?sid=26/01/06/0744236&amp;from=rss)
* [2026-01-07, 18:00:00](https://soylentnews.org/article.pl?sid=26/01/06/0740234&amp;from=rss) - [China Leads Research in 90% of Crucial Technologies](https://soylentnews.org/article.pl?sid=26/01/06/0740234&amp;from=rss)
* [2026-01-07, 13:17:00](https://soylentnews.org/article.pl?sid=26/01/06/0727248&amp;from=rss) - [Stingless Bees from the Amazon Granted Legal Rights in World First](https://soylentnews.org/article.pl?sid=26/01/06/0727248&amp;from=rss)
* [2026-01-07, 09:35:46](https://news.ycombinator.com/item?id=46524379) - [Changes to Android Open Source Project](https://source.android.com/)
* [2026-01-07, 08:31:00](https://soylentnews.org/article.pl?sid=26/01/06/0722246&amp;from=rss) - [Lisuan&apos;s G100 Series Has Reportedly Begun Shipping Out to Customers in First Batch of Deliveries](https://soylentnews.org/article.pl?sid=26/01/06/0722246&amp;from=rss)
* [2026-01-07, 03:47:00](https://soylentnews.org/article.pl?sid=26/01/05/1230257&amp;from=rss) - [China Mandates 50% Domestic Equipment Rule for Chipmakers](https://soylentnews.org/article.pl?sid=26/01/05/1230257&amp;from=rss)
* [2026-01-07, 00:45:38](https://news.ycombinator.com/item?id=46521038) - [The paradox of failed resolutions](https://jillianhess.substack.com/p/the-paradox-of-failed-resolutions)
* [2026-01-06, 23:01:00](https://soylentnews.org/article.pl?sid=26/01/05/1222243&amp;from=rss) - [Blu-Ray Hits 20 Years Old, and It Isn&apos;t Dead Yet](https://soylentnews.org/article.pl?sid=26/01/05/1222243&amp;from=rss)
* [2026-01-06, 18:19:00](https://soylentnews.org/article.pl?sid=26/01/03/0139235&amp;from=rss) - [Strengthening Asphalt Roads With a Unique Green Ingredient: Algae](https://soylentnews.org/article.pl?sid=26/01/03/0139235&amp;from=rss)
* [2026-01-06, 14:33:30](https://news.ycombinator.com/item?id=46512743) - [Creating Embroidered Charts with R and ImageMagick](https://aman.bh/blog/2025/creating-embroidered-charts-with-r-and-imagemagick)
* [2026-01-06, 13:37:00](https://soylentnews.org/article.pl?sid=26/01/03/0137246&amp;from=rss) - [Venus Cloud Research Highlights Value of Combining Light and Polarization Measurements](https://soylentnews.org/article.pl?sid=26/01/03/0137246&amp;from=rss)
* [2026-01-06, 12:44:52](https://news.ycombinator.com/item?id=46511555) - [Greenland sharks maintain vision for centuries through DNA repair mechanism](https://phys.org/news/2026-01-eye-greenland-sharks-vision-centuries.html)
* [2026-01-06, 08:44:00](https://soylentnews.org/article.pl?sid=26/01/03/0135207&amp;from=rss) - [How Talking Slows Eye Movements Behind the Wheel](https://soylentnews.org/article.pl?sid=26/01/03/0135207&amp;from=rss)
* [2026-01-06, 04:01:00](https://soylentnews.org/article.pl?sid=26/01/03/0133238&amp;from=rss) - [Mystery Solved: Scientists Discover Why Colorectal Cancer Defies Immune System Rules](https://soylentnews.org/article.pl?sid=26/01/03/0133238&amp;from=rss)
