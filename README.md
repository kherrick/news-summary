# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence

* [Is ChatGPT Making You Stupid?](https://slashdot.org/story/25/07/27/1818251/is-chatgpt-making-you-stupid?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Exploring the potential cognitive downsides of relying on AI like ChatGPT for problem-solving and decision-making. [Comments](https://slashdot.org/story/25/07/27/1818251/is-chatgpt-making-you-stupid?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [The Chaos of AI Agents](https://www.youtube.com/watch?v=2YYjPs8t8MI) - A YouTube video delves into the unpredictable and chaotic behavior of AI agents. [Comments](https://lobste.rs/s/p3bxpe/chaos_ai_agents)

## Security and Privacy

* [Disabling telemetry in ByteDance's VSCode fork increases data sent to its server](https://github.com/segmentationf4u1t/trae_telemetry_research) - An analysis reveals that disabling telemetry in ByteDance's VSCode fork counterintuitively sends more data. [Comments](https://news.ycombinator.com/item?id=44703164)

* [Allianz Life says 'majority' of customers' personal data stolen in cyberattack](https://techcrunch.com/2025/07/26/allianz-life-says-majority-of-customers-personal-data-stolen-in-cyberattack/) - Allianz Life reports a massive data breach affecting a majority of its customers' personal information. [Comments](https://news.ycombinator.com/item?id=44703079)

* [Did a Vendor's Leak Help Attackers Exploit Microsoft's SharePoint Servers?](https://it.slashdot.org/story/25/07/27/0337218/did-a-vendors-leak-help-attackers-exploit-microsofts-sharepoint-servers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Examining the potential role of a vendor's vulnerability in enabling attacks on SharePoint. [Comments](https://soylentnews.org/article.pl?sid=25/07/26/0131222&amp;from=rss)

* [The future is not self-hosted, but self-sovereign](https://www.robertmao.com/blog/en/the-future-is-not-self-hosted-but-self-sovereign) - An article discussing the transition from self-hosted to self-sovereign systems for improved security. [Comments](https://news.ycombinator.com/item?id=44698899)

## Science and Health

* [Beetroot juice lowers blood pressure in older people by changing oral microbiome](https://news.exeter.ac.uk/faculty-of-health-and-life-sciences/beetroot-juice-lowers-blood-pressure-in-older-people-by-changing-oral-microbiome/) - New research highlights the health benefits of beetroot juice in managing blood pressure. [Comments](https://news.ycombinator.com/item?id=44700923)

* [Japan Bets Big on Ultrathin, Ultralight Solar Panels](https://soylentnews.org/article.pl?sid=25/07/26/0330200&amp;from=rss) - Japan takes significant steps toward advancing solar panel technology with ultrathin solutions. [Comments](https://soylentnews.org/article.pl?sid=25/07/26/0330200&amp;from=rss)

## Technology and Development

* [printSim: a command-line python program that turns gcode into realistic 3d printer sound](https://github.com/dannyboy1996/printSim) - A Python tool that simulates the sound of 3D printers using G-code. [Comments](https://lobste.rs/s/zqlhys/printsim_command_line_python_program)

* [Instrumenting Next.js with runtime secret injection](https://phase.dev/blog/instrumenting-nextjs-with-runtime-secret-injection/) - Detailed exploration of how to use runtime secret injection in Next.js. [Comments](https://news.ycombinator.com/item?id=44702627)

* [Development shells with Nix: four quick examples](https://michael.stapelberg.ch/posts/2025-07-27-dev-shells-with-nix-4-quick-examples/) - A guide showcasing four practical examples of using Nix development shells. [Comments](https://lobste.rs/s/lfovd1/development_shells_with_nix_four_quick)

## Entertainment

* ['It's DOOM, but You Can Cut, Copy and Paste Opponents'](https://games.slashdot.org/story/25/07/27/1640244/its-doom-but-you-can-cut-copy-and-paste-opponents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - An inventive twist on the classic game DOOM allows players to manipulate enemies like text. [Comments](https://games.slashdot.org/story/25/07/27/1640244/its-doom-but-you-can-cut-copy-and-paste-opponents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Fantastic Four' Tops 'Superman' Opening, Second-Largest of the Year](https://entertainment.slashdot.org/story/25/07/26/2225254/fantastic-four-tops-superman-opening-second-largest-of-the-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The 'Fantastic Four' movie sets a record-breaking box office weekend. [Comments](https://entertainment.slashdot.org/story/25/07/26/2225254/fantastic-four-tops-superman-opening-second-largest-of-the-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Tom Lehrer, Musical Satirist with a Dark Streak, Dies at 97](https://www.nytimes.com/2025/07/27/arts/music/tom-lehrer-dead.html) - A reflection on the legacy of Tom Lehrer, known for his satirical and witty music. [Comments](https://news.ycombinator.com/item?id=44702782)

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

* [2025-07-27, 18:34:00](https://slashdot.org/story/25/07/27/1818251/is-chatgpt-making-you-stupid?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is ChatGPT Making You Stupid?](https://slashdot.org/story/25/07/27/1818251/is-chatgpt-making-you-stupid?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-27, 18:15:00](https://lobste.rs/s/zqlhys/printsim_command_line_python_program) - [printSim: a command-line python program that turns gcode into realistic 3d printer sound](https://github.com/dannyboy1996/printSim)
* [2025-07-27, 17:57:06](https://news.ycombinator.com/item?id=44703164) - [Disabling telemetry in ByteDance&apos;s VSCode fork increases data sent to its server](https://github.com/segmentationf4u1t/trae_telemetry_research)
* [2025-07-27, 17:49:23](https://news.ycombinator.com/item?id=44703079) - [Allianz Life says &apos;majority&apos; of customers&apos; personal data stolen in cyberattack](https://techcrunch.com/2025/07/26/allianz-life-says-majority-of-customers-personal-data-stolen-in-cyberattack/)
* [2025-07-27, 17:37:00](https://soylentnews.org/article.pl?sid=25/07/26/1613246&amp;from=rss) - [UK To Ban Making Ransomware Payments For Some Organizations](https://soylentnews.org/article.pl?sid=25/07/26/1613246&amp;from=rss)
* [2025-07-27, 17:34:00](https://games.slashdot.org/story/25/07/27/1640244/its-doom-but-you-can-cut-copy-and-paste-opponents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;It&apos;s DOOM, but You Can Cut, Copy and Paste Opponents&apos;](https://games.slashdot.org/story/25/07/27/1640244/its-doom-but-you-can-cut-copy-and-paste-opponents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-27, 17:27:26](https://news.ycombinator.com/item?id=44702894) - [Show HN: Windows 7 GUI for the Web](https://khang-nd.github.io/7.css/)
* [2025-07-27, 17:19:19](https://news.ycombinator.com/item?id=44702833) - [Ask HN: What Are You Working On? (July 2025)](https://news.ycombinator.com/item?id=44702833)
* [2025-07-27, 17:13:25](https://news.ycombinator.com/item?id=44702782) - [Tom Lehrer, Musical Satirist with a Dark Streak, Dies at 97](https://www.nytimes.com/2025/07/27/arts/music/tom-lehrer-dead.html)
* [2025-07-27, 16:53:00](https://news.ycombinator.com/item?id=44702627) - [Instrumenting Next.js with runtime secret injection](https://phase.dev/blog/instrumenting-nextjs-with-runtime-secret-injection/)
* [2025-07-27, 16:34:00](https://entertainment.slashdot.org/story/25/07/26/2225254/fantastic-four-tops-superman-opening-second-largest-of-the-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Fantastic Four&apos; Tops &apos;Superman&apos; Opening, Second-Largest of the Year](https://entertainment.slashdot.org/story/25/07/26/2225254/fantastic-four-tops-superman-opening-second-largest-of-the-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-27, 15:34:00](https://hardware.slashdot.org/story/25/07/26/0358240/to-fight-climate-change-norway-wants-to-become-europes-carbon-dump?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [To Fight Climate Change, Norway Wants to Become Europe&apos;s Carbon Dump](https://hardware.slashdot.org/story/25/07/26/0358240/to-fight-climate-change-norway-wants-to-become-europes-carbon-dump?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-27, 14:34:00](https://idle.slashdot.org/story/25/07/27/0015211/creator-of-1995-phishing-tool-aohell-on-piracy-script-kiddies-and-what-he-thinks-of-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Creator of 1995 Phishing Tool &apos;AOHell&apos; On Piracy, Script Kiddies, and What He Thinks of AI](https://idle.slashdot.org/story/25/07/27/0015211/creator-of-1995-phishing-tool-aohell-on-piracy-script-kiddies-and-what-he-thinks-of-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-27, 14:28:49](https://news.ycombinator.com/item?id=44701574) - [The many, many, many JavaScript runtimes of the last decade](https://buttondown.com/whatever_jamie/archive/the-many-many-many-javascript-runtimes-of-the-last-decade/)
* [2025-07-27, 14:25:47](https://news.ycombinator.com/item?id=44701555) - [Dumb Pipe](https://www.dumbpipe.dev/)
* [2025-07-27, 12:44:31](https://news.ycombinator.com/item?id=44700923) - [Beetroot juice lowers blood pressure in older people by changing oral microbiome](https://news.exeter.ac.uk/faculty-of-health-and-life-sciences/beetroot-juice-lowers-blood-pressure-in-older-people-by-changing-oral-microbiome/)
* [2025-07-27, 12:22:35](https://lobste.rs/s/uajkl0/overhaul_harnessing_automation_for_c) - [OverHAuL: Harnessing Automation for C Libraries with Large Language Models](https://kchousos.github.io/BSc-Thesis/)
* [2025-07-27, 12:22:19](https://lobste.rs/s/m8ytbz/jj_vcs_workshop_zero_hero_speedrun) - [The JJ VCS Workshop: A Zero-to-Hero Speedrun](https://github.com/jkoppel/jj-workshop)
* [2025-07-27, 11:47:00](https://soylentnews.org/article.pl?sid=25/07/26/0330200&amp;from=rss) - [Japan Bets Big on Ultrathin, Ultralight Solar Panels](https://soylentnews.org/article.pl?sid=25/07/26/0330200&amp;from=rss)
* [2025-07-27, 11:34:00](https://idle.slashdot.org/story/25/07/27/0532227/chuck-e-cheese-handcuffed-and-arrested-in-florida-charged-with-using-a-stolen-credit-card?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Chuck E. Cheese&apos; Handcuffed and Arrested in Florida, Charged with Using a Stolen Credit Card](https://idle.slashdot.org/story/25/07/27/0532227/chuck-e-cheese-handcuffed-and-arrested-in-florida-charged-with-using-a-stolen-credit-card?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-27, 10:54:54](https://lobste.rs/s/z8gz9w/intro_security_with_eggs_please) - [An intro to security, with eggs, please](https://binturo.ng/blog/2025-07-25-ovosec/)
* [2025-07-27, 10:39:07](https://lobste.rs/s/wvzkzs/copyparty_portable_file_server_with) - [copyparty: portable file server with resumable uploads, dedup, WebDAV, and more](https://github.com/9001/copyparty)
* [2025-07-27, 09:53:03](https://lobste.rs/s/rgqxgn/llms_are_bad_at_returning_code_json) - [LLMs are bad at returning code in JSON](https://aider.chat/2024/08/14/code-in-json.html)
* [2025-07-27, 09:21:13](https://news.ycombinator.com/item?id=44699980) - [Constrained languages are easier to optimize](https://jyn.dev/constrained-languages-are-easier-to-optimize/)
* [2025-07-27, 07:34:00](https://science.slashdot.org/story/25/07/27/0233215/serious-delays-hit-satellite-mega-constellations-of-chinas-starlink-rivals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Serious Delays&apos; Hit Satellite Mega-Constellations of China&apos;s Starlink Rivals ](https://science.slashdot.org/story/25/07/27/0233215/serious-delays-hit-satellite-mega-constellations-of-chinas-starlink-rivals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-27, 07:15:57](https://news.ycombinator.com/item?id=44699452) - [Hierarchical Reasoning Model](https://arxiv.org/abs/2506.21734)
* [2025-07-27, 07:07:09](https://news.ycombinator.com/item?id=44699421) - [When we get Komooted](https://bikepacking.com/plog/when-we-get-komooted/)
* [2025-07-27, 07:01:02](https://news.ycombinator.com/item?id=44699393) - [Linux on Snapdragon X Elite: Linaro and Tuxedo Pave the Way for ARM64 Laptops](https://www.linaro.org/blog/linux-on-snapdragon-x-elite/)
* [2025-07-27, 06:54:49](https://lobste.rs/s/lfovd1/development_shells_with_nix_four_quick) - [Development shells with Nix: four quick examples](https://michael.stapelberg.ch/posts/2025-07-27-dev-shells-with-nix-4-quick-examples/)
* [2025-07-27, 06:50:04](https://lobste.rs/s/8tscsv/specials_2021) - [Specials (2021)](https://www.brendangregg.com/specials.html)
* [2025-07-27, 06:50:00](https://soylentnews.org/article.pl?sid=25/07/26/0153214&amp;from=rss) - [WD Makes Click Of Death A Feature](https://soylentnews.org/article.pl?sid=25/07/26/0153214&amp;from=rss)
* [2025-07-27, 06:09:40](https://lobste.rs/s/p3bxpe/chaos_ai_agents) - [The Chaos of AI Agents](https://www.youtube.com/watch?v=2YYjPs8t8MI)
* [2025-07-27, 05:17:03](https://news.ycombinator.com/item?id=44699052) - [4k NASA employees opt to leave agency through deferred resignation program](https://www.kcrw.com/news/shows/npr/npr-story/nx-s1-5481304)
* [2025-07-27, 04:35:33](https://news.ycombinator.com/item?id=44698928) - [Chemical process produces critical battery metals with no waste](https://spectrum.ieee.org/nmc-battery-aspiring-materials)
* [2025-07-27, 04:34:00](https://it.slashdot.org/story/25/07/27/0337218/did-a-vendors-leak-help-attackers-exploit-microsofts-sharepoint-servers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Did a Vendor&apos;s Leak Help Attackers Exploit Microsoft&apos;s SharePoint Servers?](https://it.slashdot.org/story/25/07/27/0337218/did-a-vendors-leak-help-attackers-exploit-microsofts-sharepoint-servers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-27, 04:26:08](https://news.ycombinator.com/item?id=44698899) - [The future is not self-hosted, but self-sovereign](https://www.robertmao.com/blog/en/the-future-is-not-self-hosted-but-self-sovereign)
* [2025-07-27, 03:38:27](https://news.ycombinator.com/item?id=44698754) - [Fast and cheap bulk storage: using LVM to cache HDDs on SSDs](https://quantum5.ca/2025/05/11/fast-cheap-bulk-storage-using-lvm-to-cache-hdds-on-ssds/)
* [2025-07-27, 03:37:12](https://lobste.rs/s/xtxvyd/fast_cheap_bulk_storage_using_lvm_cache) - [Fast and cheap bulk storage: using LVM to cache HDDs on SSDs](https://quantum5.ca/2025/05/11/fast-cheap-bulk-storage-using-lvm-to-cache-hdds-on-ssds/)
* [2025-07-27, 03:34:47](https://news.ycombinator.com/item?id=44698733) - [Smallest particulate matter air quality sensor for ultra-compact IoT devices](https://www.bosch-sensortec.com/news/worlds-smallest-particulate-matter-sensor-bmv080.html)
* [2025-07-27, 02:49:34](https://lobste.rs/s/6i8us2/exosphere_simple_centralized_patch) - [exosphere: A simple centralized patch management and reporting tool for unix systems](https://github.com/mrdaemon/exosphere)
* [2025-07-27, 02:06:00](https://soylentnews.org/article.pl?sid=25/07/26/0146240&amp;from=rss) - [Social Media Is Dead – Here’s What Comes Next](https://soylentnews.org/article.pl?sid=25/07/26/0146240&amp;from=rss)
* [2025-07-27, 01:35:00](https://entertainment.slashdot.org/story/25/07/27/0131241/comic-con-peeks-at-new-alien-and-avatar-series-plus-predator-and-coyote-vs-acme-movies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comic-Con Peeks at New &apos;Alien&apos; and &apos;Avatar&apos; Series, Plus &apos;Predator&apos; and &apos;Coyote vs. Acme&apos; Movies](https://entertainment.slashdot.org/story/25/07/27/0131241/comic-con-peeks-at-new-alien-and-avatar-series-plus-predator-and-coyote-vs-acme-movies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-27, 01:28:36](https://news.ycombinator.com/item?id=44698185) - [Janet: Lightweight, Expressive, Modern Lisp](https://janet-lang.org)
* [2025-07-27, 00:31:13](https://lobste.rs/s/og1pru/how_configure_x11_simple_way) - [How to configure X11 in a simple way](https://eugene-andrienko.com/en/it/2025/07/24/x11-configuration-simple.html)
* [2025-07-27, 00:23:12](https://lobste.rs/s/hhcapy/getting_decent_error_reports_bash_when) - [Getting decent error reports in Bash when you&apos;re using &apos;set -e&apos;](https://utcc.utoronto.ca/~cks/space/blog/programming/BashGoodSetEReports)
* [2025-07-26, 23:05:15](https://lobste.rs/s/u1dhre/wren_small_fast_class_based_concurrent) - [Wren - a small, fast, class-based concurrent scripting language](https://github.com/wren-lang/wren)
* [2025-07-26, 22:34:00](https://yro.slashdot.org/story/25/07/26/0126224/astronomer-hires-coldplay-lead-singers-ex-wife-as-temporary-spokesperson-gwyneth-paltrow?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Astronomer Hires Coldplay Lead Singer&apos;s Ex-Wife as &apos;Temporary&apos; Spokesperson:  Gwyneth Paltrow](https://yro.slashdot.org/story/25/07/26/0126224/astronomer-hires-coldplay-lead-singers-ex-wife-as-temporary-spokesperson-gwyneth-paltrow?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-26, 21:57:06](https://lobste.rs/s/juw6wz/resizable_structs_zig) - [Resizable structs in Zig](https://tristanpemble.com/resizable-structs-in-zig/)
* [2025-07-26, 21:45:07](https://news.ycombinator.com/item?id=44697145) - [Coronary artery calcium testing can reveal plaque in arteries, but is underused](https://www.nytimes.com/2025/07/26/health/coronary-artery-calcium-heart.html)
* [2025-07-26, 21:34:00](https://hardware.slashdot.org/story/25/07/26/2123234/google-will-help-scale-long-duration-energy-storage-solution-for-clean-power?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Will Help Scale &apos;Long-Duration Energy Storage&apos; Solution for Clean Power](https://hardware.slashdot.org/story/25/07/26/2123234/google-will-help-scale-long-duration-energy-storage-solution-for-clean-power?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-26, 21:24:51](https://news.ycombinator.com/item?id=44697007) - [Teach Yourself Programming in Ten Years (1998)](https://norvig.com/21-days.html)
* [2025-07-26, 21:19:00](https://soylentnews.org/article.pl?sid=25/07/26/0136203&amp;from=rss) - [Tesla Continues Slide As Musk Warns Of \&quot;Rough Quarters\&quot; Ahead](https://soylentnews.org/article.pl?sid=25/07/26/0136203&amp;from=rss)
* [2025-07-26, 21:04:12](https://lobste.rs/s/stness/test_results_for_amd_zen_5) - [Test results for AMD Zen 5](https://www.agner.org/forum/viewtopic.php?t=287&amp;start=11)
* [2025-07-26, 20:34:00](https://hardware.slashdot.org/story/25/07/26/1946217/stack-exchange-moves-everything-to-the-cloud-destroys-servers-in-new-jersey?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stack Exchange Moves Everything to the Cloud, Destroys Servers in New Jersey ](https://hardware.slashdot.org/story/25/07/26/1946217/stack-exchange-moves-everything-to-the-cloud-destroys-servers-in-new-jersey?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-26, 19:34:00](https://games.slashdot.org/story/25/07/26/1658233/chatgpt-loses-in-a-game-of-chess-against-magnus-carlsen?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ChatGPT Loses in a Game of Chess Against Magnus Carlsen](https://games.slashdot.org/story/25/07/26/1658233/chatgpt-loses-in-a-game-of-chess-against-magnus-carlsen?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-26, 18:34:00](https://developers.slashdot.org/story/25/07/26/0642239/google-gemini-deletes-users-files-then-just-admits-i-have-failed-you-completely-and-catastrophically?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Gemini Deletes User&apos;s Files, Then Just Admits &apos;I Have Failed You Completely and Catastrophically&apos;](https://developers.slashdot.org/story/25/07/26/0642239/google-gemini-deletes-users-files-then-just-admits-i-have-failed-you-completely-and-catastrophically?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-26, 17:34:00](https://science.slashdot.org/story/25/07/26/0456207/asteroid-2024-yr4-spared-the-earth-what-happens-if-it-hits-the-moon-instead-in-2032?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Asteroid 2024 YR4 Spared The Earth. What Happens if It Hits the Moon Instead in 2032?](https://science.slashdot.org/story/25/07/26/0456207/asteroid-2024-yr4-spared-the-earth-what-happens-if-it-hits-the-moon-instead-in-2032?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-07-26, 16:45:50](https://lobste.rs/s/jfbzwa/optimi_zi_n_g_sudoku_solving) - [Optimi-Zi(n)g Sudoku-Solving](https://log.pfad.fr/2025/optimi-zig-sudoku-solving/)
* [2025-07-26, 16:32:00](https://soylentnews.org/article.pl?sid=25/07/26/0131222&amp;from=rss) - [AI Industry&apos;s Size Obsession Is Killing ROI, Engineer Argues](https://soylentnews.org/article.pl?sid=25/07/26/0131222&amp;from=rss)
* [2025-07-26, 16:06:09](https://news.ycombinator.com/item?id=44695098) - [How we rooted Copilot](https://research.eye.security/how-we-rooted-copilot/)
* [2025-07-26, 14:56:13](https://lobste.rs/s/78kvoj/clj_coll_clojure_collections_sequences) - [clj-coll: Clojure collections and sequences in Common Lisp](https://github.com/dtenny/clj-coll)
* [2025-07-26, 14:36:45](https://lobste.rs/s/8cwich/perfecting_anti_aliasing_on_signed) - [Perfecting anti-aliasing on signed distance functions](https://blog.pkh.me/p/44-perfecting-anti-aliasing-on-signed-distance-functions.html)
* [2025-07-26, 12:04:54](https://lobste.rs/s/byakmv/from_async_await_virtual_threads) - [From Async/Await to Virtual Threads](https://lucumr.pocoo.org/2025/7/26/virtual-threads/)
* [2025-07-26, 11:43:00](https://soylentnews.org/article.pl?sid=25/07/25/0534229&amp;from=rss) - [Work Less, Feel Better](https://soylentnews.org/article.pl?sid=25/07/25/0534229&amp;from=rss)
* [2025-07-26, 11:12:27](https://lobste.rs/s/mf5mup/arm_desktop_x86_emulation) - [Arm desktop: x86 emulation](https://marcin.juszkiewicz.com.pl/2025/07/22/arm-desktop-emulation/)
* [2025-07-26, 11:00:03](https://lobste.rs/s/6yqrbm/heredocs_can_make_your_bash_scripts_self) - [Heredocs Can Make Your Bash Scripts Self-Documenting](https://holdtherobot.com/blog/heredocs-can-make-your-bash-scripts-self-documenting/)
* [2025-07-26, 09:01:51](https://lobste.rs/s/zditcp/it_s_time_for_modern_css_kill_spa) - [It&apos;s time for modern CSS to kill the SPA](https://www.jonoalderson.com/conjecture/its-time-for-modern-css-to-kill-the-spa/)
* [2025-07-26, 06:58:00](https://soylentnews.org/article.pl?sid=25/07/25/0511234&amp;from=rss) - [Debian Linux \&quot;Trixie\&quot; is Planned to Release on August 9](https://soylentnews.org/article.pl?sid=25/07/25/0511234&amp;from=rss)
* [2025-07-26, 04:38:35](https://lobste.rs/s/jmttl2/can_llms_do_accounting) - [Can LLMs Do Accounting?](https://accounting.penrose.com/)
* [2025-07-26, 02:14:00](https://soylentnews.org/article.pl?sid=25/07/25/055215&amp;from=rss) - [Low(er) Price Tesla Announced](https://soylentnews.org/article.pl?sid=25/07/25/055215&amp;from=rss)
* [2025-07-25, 21:38:09](https://lobste.rs/s/terwiu/lobsters_interview_with_technomancy) - [Lobsters Interview with Technomancy](https://lobste.rs/s/terwiu/lobsters_interview_with_technomancy)
* [2025-07-25, 21:31:00](https://soylentnews.org/article.pl?sid=25/07/25/0459237&amp;from=rss) - [NASA Scientist Finds Predicted Companion Star to Betelgeuse - NASA](https://soylentnews.org/article.pl?sid=25/07/25/0459237&amp;from=rss)
* [2025-07-25, 14:44:00](https://soylentnews.org/article.pl?sid=25/07/24/1036232&amp;from=rss) - [Doctors Used Music Instead of Medication for Dementia Treatment](https://soylentnews.org/article.pl?sid=25/07/24/1036232&amp;from=rss)
* [2025-07-25, 10:01:00](https://soylentnews.org/article.pl?sid=25/07/24/1032215&amp;from=rss) - [Welcome to DebConf25 - the 26th Debian Linux Conference](https://soylentnews.org/article.pl?sid=25/07/24/1032215&amp;from=rss)
* [2025-07-25, 05:17:00](https://soylentnews.org/article.pl?sid=25/07/24/1027254&amp;from=rss) - [&apos;I Destroyed Months of Your Work in Seconds&apos; Says AI Coding Tool ](https://soylentnews.org/article.pl?sid=25/07/24/1027254&amp;from=rss)
* [2025-07-25, 00:28:00](https://soylentnews.org/article.pl?sid=25/07/24/1023256&amp;from=rss) - [How the Space Shuttles Were Given Better Names Thanks to Star Trek](https://soylentnews.org/article.pl?sid=25/07/24/1023256&amp;from=rss)
* [2025-07-24, 19:41:00](https://soylentnews.org/article.pl?sid=25/07/24/0312243&amp;from=rss) - [mwm: An X11 Window Manager in 20 Lines of Code](https://soylentnews.org/article.pl?sid=25/07/24/0312243&amp;from=rss)
* [2025-07-24, 14:56:00](https://soylentnews.org/article.pl?sid=25/07/23/1245206&amp;from=rss) - [Real Milk Proteins, No Cows: Engineered Bacteria Pave the Way for Vegan Cheese and Yogurt](https://soylentnews.org/article.pl?sid=25/07/23/1245206&amp;from=rss)
* [2025-07-24, 10:19:59](https://news.ycombinator.com/item?id=44669026) - [BlueOS Kernel – Written in Rust, compatible with POSIX](https://github.com/vivoblueos/kernel)
* [2025-07-24, 10:15:00](https://soylentnews.org/meta/article.pl?sid=25/07/24/1019233&amp;from=rss) - [Bots, Spiders, Scrapers and AI - Connections to SN](https://soylentnews.org/meta/article.pl?sid=25/07/24/1019233&amp;from=rss)
* [2025-07-24, 10:11:00](https://soylentnews.org/article.pl?sid=25/07/23/1253202&amp;from=rss) - [Fearful of AI-Generated Grant Proposals, NIH Limits Scientists to Six Applications Per Year](https://soylentnews.org/article.pl?sid=25/07/23/1253202&amp;from=rss)
* [2025-07-24, 05:28:00](https://soylentnews.org/article.pl?sid=25/07/23/1249230&amp;from=rss) - [A Surveillance Vendor Was Caught Exploiting a New SS7 Attack to Track People&apos;s Phone Locations](https://soylentnews.org/article.pl?sid=25/07/23/1249230&amp;from=rss)
* [2025-07-24, 01:51:04](https://news.ycombinator.com/item?id=44666032) - [When photography was born, fascination, obsession, and danger followed](https://www.washingtonpost.com/books/2025/07/12/flashes-brilliance-history-early-photography-anika-burgess-review/)
* [2025-07-24, 01:12:35](https://news.ycombinator.com/item?id=44665816) - [16colo.rs: ANSI/ASCII art archive](https://16colo.rs/)
* [2025-07-24, 00:47:24](https://news.ycombinator.com/item?id=44665662) - [Katharine Graham: The Washington Post](https://fs.blog/knowledge-project-podcast/outliers-katharine-graham/)
* [2025-07-24, 00:43:38](https://news.ycombinator.com/item?id=44665644) - [Purple Earth hypothesis](https://en.wikipedia.org/wiki/Purple_Earth_hypothesis)
* [2025-07-24, 00:39:00](https://soylentnews.org/article.pl?sid=25/07/23/1254253&amp;from=rss) - [UPDATED: SharePoint Vulnerability With 9.8 Severity Rating Under Exploit Across Globe](https://soylentnews.org/article.pl?sid=25/07/23/1254253&amp;from=rss)
* [2025-07-23, 19:54:00](https://soylentnews.org/article.pl?sid=25/07/22/0833233&amp;from=rss) - [Conversations Between LLMs Could Automate the Creation of Exploits, Study Shows](https://soylentnews.org/article.pl?sid=25/07/22/0833233&amp;from=rss)
* [2025-07-23, 15:20:28](https://news.ycombinator.com/item?id=44660219) - [A low power 1U Raspberry Pi cluster server for inexpensive colocation (2021)](https://github.com/pawl/raspberry-pi-1u-server)
* [2025-07-23, 15:10:00](https://soylentnews.org/article.pl?sid=25/07/22/0822201&amp;from=rss) - [Microsoft Wants to Find Out Why Windows 11 is So Slow](https://soylentnews.org/article.pl?sid=25/07/22/0822201&amp;from=rss)
* [2025-07-23, 12:58:48](https://news.ycombinator.com/item?id=44658722) - [High-performance RISC-V processors: UltraRISC UR-DP1000, Zhihe A210, SpacemIT K3](https://www.cnx-software.com/2025/07/22/three-high-performance-risc-v-processors-to-watch-in-h2-2025-ultrarisc-ur-dp1000-zizhe-a210-and-spacemit-k3/)
* [2025-07-23, 12:13:52](https://news.ycombinator.com/item?id=44658323) - [Return of wolves to Yellowstone has led to a surge in aspen trees](https://www.livescience.com/animals/land-mammals/return-of-wolves-to-yellowstone-has-led-to-a-surge-in-aspen-trees-unseen-for-80-years)
* [2025-07-23, 10:24:00](https://soylentnews.org/article.pl?sid=25/07/22/079200&amp;from=rss) - [The Atomic Bomb Marker Inside Your Body](https://soylentnews.org/article.pl?sid=25/07/22/079200&amp;from=rss)
* [2025-07-23, 05:35:00](https://soylentnews.org/article.pl?sid=25/07/22/074257&amp;from=rss) - [Matson Suspends Shipping EVs Citing Hazards of Lithium-ion Batteries](https://soylentnews.org/article.pl?sid=25/07/22/074257&amp;from=rss)
* [2025-07-23, 00:54:00](https://soylentnews.org/article.pl?sid=25/07/21/225220&amp;from=rss) - [11,000-Year-Old Feast Uncovered: Why Hunters Hauled Wild Boars Across Mountains](https://soylentnews.org/article.pl?sid=25/07/21/225220&amp;from=rss)
