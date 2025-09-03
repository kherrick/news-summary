# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Waymo Expands to Denver and Seattle](https://tech.slashdot.org/story/25/09/02/2132215/waymo-expands-to-denver-and-seattle?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Alphabet's autonomous vehicle subsidiary is broadening its robotaxi services to two new cities, underscoring the technology's growing urban adoption.

* [AI in Schools Isn’t Progress — It’s a Sign of How Far We’ve Strayed from the Purpose of Education](https://soylentnews.org/article.pl?sid=25/09/01/0018253&from=rss) - A critical examination of AI's infusion into educational systems questions its alignment with education's goals.

* [SAP To Invest Over 20 Billion Euros In 'Sovereign Cloud'](https://news.slashdot.org/story/25/09/02/1959258/sap-to-invest-over-20-billion-euros-in-sovereign-cloud?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The German enterprise software giant takes a massive leap into cloud innovation with focused investment in data sovereignty.

## Cybersecurity and Legal Developments

* [Frostbyte10 Bugs Put Thousands of Refrigerators At Major Grocery Chains At Risk](https://it.slashdot.org/story/25/09/02/209250/frostbyte10-bugs-put-thousands-of-refrigerators-at-major-grocery-chains-at-risk?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Vulnerabilities in refrigeration technology expose risks to critical food storage infrastructures.

* [Google Gets To Keep Chrome But Is Barred From Exclusive Search Deals, Judge Rules](https://yro.slashdot.org/story/25/09/02/2119208/google-gets-to-keep-chrome-but-is-barred-from-exclusive-search-deals-judge-rules?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A ruling limits Google's dominance by restricting exclusive arrangements while maintaining browser rights.

* [Hackers Threaten To Submit Artists' Data To AI Models If Art Site Doesn't Pay Up](https://it.slashdot.org/story/25/09/02/1936245/hackers-threaten-to-submit-artists-data-to-ai-models-if-art-site-doesnt-pay-up?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A chilling ultimatum highlights the intersection of ransomware and artificial intelligence in creative industries.

## Gaming and Entertainment

* [Paramount and Activision Team For 'Call of Duty' Movie](https://games.slashdot.org/story/25/09/02/2111258/paramount-and-activision-team-for-call-of-duty-movie?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Two entertainment powerhouses unite to translate the gaming world of 'Call of Duty' into a cinematic experience.

* [Show HN: LightCycle, a FOSS game in Rust based on Tron](https://github.com/Tortured-Metaphor/LightCycle) - An open-source game brings the nostalgic Tron-vibe into the modern era using the Rust programming language.

* [32GB of RAM On Track To Become the New Majority For Gamers](https://games.slashdot.org/story/25/09/02/1631203/32gb-of-ram-on-track-to-become-the-new-majority-for-gamers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Advancements in game design and tech hardware standards propel RAM requirements for gaming systems.

## Science and Space

* [World’s Largest Neutrino Detector Switches On](https://soylentnews.org/article.pl?sid=25/09/02/0144236&from=rss) - A cutting-edge scientific facility begins its mission to uncover the universe's deepest neutrino mysteries.

* [Scientists Produce Quantum Entanglement-like Results Without Entangled Particles](https://soylentnews.org/article.pl?sid=25/08/29/2346225&from=rss) - A breakthrough in quantum research demonstrates phenomena akin to entanglement without traditional particle involvement.

* [AMD Roadmap Leak Points to Zen 6 Mobile CPUs in 2027](https://soylentnews.org/article.pl?sid=25/08/31/1416227&from=rss) - Insights into AMD's future chip architecture reveal developments in computing technology aimed at mobile applications.

## Environmental Concerns

* [New Study Proves EVs Are Always Cleaner Than Gas Cars](https://tech.slashdot.org/story/25/09/02/1921238/new-study-proves-evs-are-always-cleaner-than-gas-cars?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Researchers cement electric vehicles' environmental benefits compared to traditional internal combustion engines.

* [Poor Amazon Rains Linked To Brazil Deforestation](https://news.slashdot.org/story/25/09/02/1649244/poor-amazon-rains-linked-to-brazil-deforestation?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A study underscores deforestation's detrimental effects on Brazil's Amazonian ecosystem and water cycle.

* [Summer 2025 is the Warmest on Record for the UK](https://news.slashdot.org/story/25/09/02/191239/summer-2025-is-the-warmest-on-record-for-the-uk?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The UK faces escalating climate challenges as it logs historically high summer temperatures.

## Programming and Software Development

* [Adding #[derive(From)] to Rust](https://kobzol.github.io/rust/2025/09/02/adding-derive-from-to-rust.html) - A proposal enriches Rust's flexibility with a new code transformation feature.

* [Making XML Human-Readable Without XSLT](https://jakearchibald.com/2025/making-xml-human-readable-without-xslt/) - A guide demonstrates techniques for simplifying XML presentation, avoiding the need for XSLT.

* [Laravel Inventor Tells Devs To Quit Writing 'Cathedrals of Complexity'](https://developers.slashdot.org/story/25/09/02/1829251/laravel-inventor-tells-devs-to-quit-writing-cathedrals-of-complexity?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Laravel's creator warns developers against overarchitected solutions, advocating for simplicity.

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

* [2025-09-03, 01:25:00](https://tech.slashdot.org/story/25/09/02/2132215/waymo-expands-to-denver-and-seattle?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Waymo Expands to Denver and Seattle](https://tech.slashdot.org/story/25/09/02/2132215/waymo-expands-to-denver-and-seattle?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-03, 00:45:00](https://games.slashdot.org/story/25/09/02/2111258/paramount-and-activision-team-for-call-of-duty-movie?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Paramount and Activision Team For &apos;Call of Duty&apos; Movie](https://games.slashdot.org/story/25/09/02/2111258/paramount-and-activision-team-for-call-of-duty-movie?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-03, 00:08:54](https://news.ycombinator.com/item?id=45110748) - [Show HN: LightCycle, a FOSS game in Rust based on Tron](https://github.com/Tortured-Metaphor/LightCycle)
* [2025-09-03, 00:02:00](https://it.slashdot.org/story/25/09/02/209250/frostbyte10-bugs-put-thousands-of-refrigerators-at-major-grocery-chains-at-risk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Frostbyte10 Bugs Put Thousands of Refrigerators At Major Grocery Chains At Risk](https://it.slashdot.org/story/25/09/02/209250/frostbyte10-bugs-put-thousands-of-refrigerators-at-major-grocery-chains-at-risk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-03, 00:01:02](https://news.ycombinator.com/item?id=45110688) - [%CPU utilization is a lie](https://www.brendanlong.com/cpu-utilization-is-a-lie.html)
* [2025-09-02, 23:42:52](https://lobste.rs/s/kyml3m/passkeys_modern_authentication) - [Passkeys and Modern Authentication](https://lucumr.pocoo.org/2025/9/2/passkeys/)
* [2025-09-02, 23:42:29](https://lobste.rs/s/ce22dx/adding_derive_from_rust) - [Adding #[derive(From)] to Rust](https://kobzol.github.io/rust/2025/09/02/adding-derive-from-to-rust.html)
* [2025-09-02, 23:21:30](https://news.ycombinator.com/item?id=45110386) - [Indices, not Pointers](https://joegm.github.io/blog/indices-not-pointers/)
* [2025-09-02, 23:20:00](https://tech.slashdot.org/story/25/09/02/204241/chrome-increases-its-overwhelming-market-share-now-over-70?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chrome Increases Its Overwhelming Market Share, Now Over 70%](https://tech.slashdot.org/story/25/09/02/204241/chrome-increases-its-overwhelming-market-share-now-over-70?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-02, 22:58:23](https://news.ycombinator.com/item?id=45110209) - [This blog is running on a recycled Google Pixel 5 (2024)](https://blog.ctms.me/posts/2024-08-29-running-this-blog-on-a-pixel-5/)
* [2025-09-02, 22:46:00](https://soylentnews.org/article.pl?sid=25/09/02/0144236&amp;from=rss) - [World’s Largest Neutrino Detector Switches On](https://soylentnews.org/article.pl?sid=25/09/02/0144236&amp;from=rss)
* [2025-09-02, 22:40:00](https://news.slashdot.org/story/25/09/02/1959258/sap-to-invest-over-20-billion-euros-in-sovereign-cloud?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SAP To Invest Over 20 Billion Euros In &apos;Sovereign Cloud&apos;](https://news.slashdot.org/story/25/09/02/1959258/sap-to-invest-over-20-billion-euros-in-sovereign-cloud?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-02, 22:00:00](https://slashdot.org/story/25/09/02/1955214/openai-to-acquire-product-testing-startup-statsig-appoints-cto-of-applications?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI To Acquire Product Testing Startup Statsig, Appoints CTO of Applications](https://slashdot.org/story/25/09/02/1955214/openai-to-acquire-product-testing-startup-statsig-appoints-cto-of-applications?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-02, 21:31:37](https://news.ycombinator.com/item?id=45109324) - [You&apos;re Not Interviewing for the Job. You&apos;re Auditioning for the Job Title](https://idiallo.com/blog/performing-for-the-job-title)
* [2025-09-02, 21:24:00](https://yro.slashdot.org/story/25/09/02/2119208/google-gets-to-keep-chrome-but-is-barred-from-exclusive-search-deals-judge-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Gets To Keep Chrome But Is Barred From Exclusive Search Deals, Judge Rules](https://yro.slashdot.org/story/25/09/02/2119208/google-gets-to-keep-chrome-but-is-barred-from-exclusive-search-deals-judge-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-02, 21:10:20](https://lobste.rs/s/h5jrbk/matrix_org_major_outage_database) - [matrix.org Major Outage - Database Incident (September 2nd 2025)](https://status.matrix.org/incidents/mm9hdm78svgv)
* [2025-09-02, 21:04:14](https://lobste.rs/s/ei2xvg/kernel_hack_drill_new_approach) - [Kernel-hack-drill and a new approach to exploiting CVE-2024-50264 in the Linux kernel](https://a13xp0p0v.github.io/2025/09/02/kernel-hack-drill-and-CVE-2024-50264.html)
* [2025-09-02, 20:41:00](https://it.slashdot.org/story/25/09/02/1936245/hackers-threaten-to-submit-artists-data-to-ai-models-if-art-site-doesnt-pay-up?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hackers Threaten To Submit Artists&apos; Data To AI Models If Art Site Doesn&apos;t Pay Up](https://it.slashdot.org/story/25/09/02/1936245/hackers-threaten-to-submit-artists-data-to-ai-models-if-art-site-doesnt-pay-up?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-02, 20:26:47](https://news.ycombinator.com/item?id=45108548) - [Google can keep its Chrome browser but will be barred from exclusive contracts](https://www.cnbc.com/2025/09/02/google-antitrust-search-ruling.html)
* [2025-09-02, 20:01:00](https://tech.slashdot.org/story/25/09/02/1921238/new-study-proves-evs-are-always-cleaner-than-gas-cars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Study Proves EVs Are Always Cleaner Than Gas Cars](https://tech.slashdot.org/story/25/09/02/1921238/new-study-proves-evs-are-always-cleaner-than-gas-cars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-02, 19:47:30](https://lobste.rs/s/em4yrb/why_self_host_9front) - [why self-host 9front](https://orib.dev/selfhost.html)
* [2025-09-02, 19:42:48](https://news.ycombinator.com/item?id=45108066) - [Making a Linux home server sleep on idle and wake on demand (2023)](https://dgross.ca/blog/linux-home-server-auto-sleep)
* [2025-09-02, 19:34:24](https://news.ycombinator.com/item?id=45107962) - [A staff engineer&apos;s journey with Claude Code](https://www.sanity.io/blog/first-attempt-will-be-95-garbage)
* [2025-09-02, 19:33:42](https://lobste.rs/s/1kql5c/making_xml_human_readable_without_xslt) - [Making XML human-readable without XSLT](https://jakearchibald.com/2025/making-xml-human-readable-without-xslt/)
* [2025-09-02, 19:28:43](https://news.ycombinator.com/item?id=45107891) - [Amazon must face US nationwide class action over third-party sales](https://www.reuters.com/legal/government/amazon-must-face-us-nationwide-class-action-over-third-party-sales-2025-09-02/)
* [2025-09-02, 19:22:00](https://news.slashdot.org/story/25/09/02/191239/summer-2025-is-the-warmest-on-record-for-the-uk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Summer 2025 is the Warmest on Record for the UK](https://news.slashdot.org/story/25/09/02/191239/summer-2025-is-the-warmest-on-record-for-the-uk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-02, 18:58:00](https://news.ycombinator.com/item?id=45107505) - [Civics is boring, so, let&apos;s encrypt something (2024)](https://queue.acm.org/detail.cfm?id=3703126)
* [2025-09-02, 18:48:26](https://news.ycombinator.com/item?id=45107364) - [Show HN: Amber – better Beeper, a modern all-in-one messenger](https://useamber.app/)
* [2025-09-02, 18:41:00](https://developers.slashdot.org/story/25/09/02/1829251/laravel-inventor-tells-devs-to-quit-writing-cathedrals-of-complexity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Laravel Inventor Tells Devs To Quit Writing &apos;Cathedrals of Complexity&apos;](https://developers.slashdot.org/story/25/09/02/1829251/laravel-inventor-tells-devs-to-quit-writing-cathedrals-of-complexity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-02, 18:18:10](https://news.ycombinator.com/item?id=45106981) - [Vijaye Raji to become CTO of Applications with acquisition of Statsig](https://openai.com/index/vijaye-raji-to-become-cto-of-applications-with-acquisition-of-statsig/)
* [2025-09-02, 18:07:22](https://news.ycombinator.com/item?id=45106846) - [Physically based rendering from first principles](https://imadr.me/pbr/)
* [2025-09-02, 18:07:12](https://lobste.rs/s/ntnjvx/physically_based_rendering_from_first) - [Physically based rendering from first principles](https://imadr.me/pbr/)
* [2025-09-02, 18:01:00](https://news.slashdot.org/story/25/09/02/1649244/poor-amazon-rains-linked-to-brazil-deforestation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Poor Amazon Rains Linked To Brazil Deforestation](https://news.slashdot.org/story/25/09/02/1649244/poor-amazon-rains-linked-to-brazil-deforestation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-02, 17:59:00](https://soylentnews.org/article.pl?sid=25/09/01/0031222&amp;from=rss) - [New Paper Finds Cases of \&quot;AI Psychosis\&quot; Manifesting Differently From Schizophrenia](https://soylentnews.org/article.pl?sid=25/09/01/0031222&amp;from=rss)
* [2025-09-02, 17:46:31](https://lobste.rs/s/kjrhtp/python_has_had_async_for_10_years_why_isn_t) - [Python has had async for 10 years -- why isn&apos;t it more popular?](https://tonybaloney.github.io/posts/why-isnt-python-async-more-popular.html)
* [2025-09-02, 17:32:08](https://news.ycombinator.com/item?id=45106314) - [Introduction to Ada: a project-based exploration with rosettas](https://blog.adacore.com/introduction-to-ada-a-project-based-exploration-with-rosettas)
* [2025-09-02, 17:31:52](https://lobste.rs/s/ood3fy/introduction_ada_project_based) - [Introduction to Ada: a project-based exploration with rosettas](https://blog.adacore.com/introduction-to-ada-a-project-based-exploration-with-rosettas)
* [2025-09-02, 17:28:51](https://lobste.rs/s/yp0rg4/reflections_on_haskell_meta) - [Reflections on Haskell@Meta](https://www.youtube.com/watch?v=gEWBHP0PvRw)
* [2025-09-02, 17:24:57](https://news.ycombinator.com/item?id=45106189) - [Python has had async for 10 years – why isn&apos;t it more popular?](https://tonybaloney.github.io/posts/why-isnt-python-async-more-popular.html)
* [2025-09-02, 17:22:00](https://news.slashdot.org/story/25/09/02/1643241/youtube-is-pausing-premium-family-plans-if-you-arent-watching-from-the-same-address?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [YouTube Is Pausing Premium Family Plans if You Aren&apos;t Watching From the Same Address](https://news.slashdot.org/story/25/09/02/1643241/youtube-is-pausing-premium-family-plans-if-you-arent-watching-from-the-same-address?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-02, 17:16:42](https://news.ycombinator.com/item?id=45106049) - [&lt;template&gt;: The Content Template element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/template)
* [2025-09-02, 16:53:29](https://news.ycombinator.com/item?id=45105710) - [&apos;World Models,&apos; an old idea in AI, mount a comeback](https://www.quantamagazine.org/world-models-an-old-idea-in-ai-mount-a-comeback-20250902/)
* [2025-09-02, 16:42:00](https://games.slashdot.org/story/25/09/02/1631203/32gb-of-ram-on-track-to-become-the-new-majority-for-gamers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [32GB of RAM On Track To Become the New Majority For Gamers](https://games.slashdot.org/story/25/09/02/1631203/32gb-of-ram-on-track-to-become-the-new-majority-for-gamers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-02, 16:32:11](https://lobste.rs/s/r9akhl/clonos_freebsd_based_distro_for_virtual) - [ClonOS: FreeBSD based distro for virtual hosting platform and appliances](https://clonos.convectix.com/)
* [2025-09-02, 16:08:31](https://news.ycombinator.com/item?id=45104974) - [Launch HN: Datafruit (YC S25) – AI for DevOps](https://news.ycombinator.com/item?id=45104974)
* [2025-09-02, 16:04:15](https://news.ycombinator.com/item?id=45104907) - [Anthropic raises $13B Series F](https://www.anthropic.com/news/anthropic-raises-series-f-at-usd183b-post-money-valuation)
* [2025-09-02, 16:04:00](https://news.slashdot.org/story/25/09/02/164215/americans-lose-faith-that-hard-work-leads-to-economic-gains-wsj-norc-poll-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Americans Lose Faith That Hard Work Leads to Economic Gains, WSJ-NORC Poll Finds](https://news.slashdot.org/story/25/09/02/164215/americans-lose-faith-that-hard-work-leads-to-economic-gains-wsj-norc-poll-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-02, 15:25:44](https://news.ycombinator.com/item?id=45104303) - [Static sites enable a good time travel experience](https://hamatti.org/posts/static-sites-enable-a-good-time-travel-experience/)
* [2025-09-02, 15:24:48](https://news.ycombinator.com/item?id=45104289) - [The staff ate it later](https://en.wikipedia.org/wiki/The_staff_ate_it_later)
* [2025-09-02, 15:21:35](https://lobste.rs/s/kahscv/beware_sorting_locales) - [Beware of Sorting Locales](https://www.adrianstoll.com/post/beware-of-sorting-locales/)
* [2025-09-02, 14:49:40](https://news.ycombinator.com/item?id=45103857) - [Removing Guix from Debian](https://lwn.net/SubscriberLink/1035491/d8100135a8ae4246/)
* [2025-09-02, 14:45:13](https://lobste.rs/s/mt8qo5/wikidata_mundaneum_triumph_commons) - [Wikidata and Mundaneum - The Triumph of the Commons](https://schmud.de/programs/2025-09-02-wikidata-mundaneum.html)
* [2025-09-02, 14:17:07](https://news.ycombinator.com/item?id=45103436) - [The Little Book of Linear Algebra](https://github.com/the-litte-book-of/linear-algebra)
* [2025-09-02, 13:14:00](https://soylentnews.org/article.pl?sid=25/09/01/0021218&amp;from=rss) - [The Unix Epochalypse Might be Sooner Than You Think](https://soylentnews.org/article.pl?sid=25/09/01/0021218&amp;from=rss)
* [2025-09-02, 12:58:47](https://lobste.rs/s/rmmccx/aperiodic_tilings_v_refinable_frontier) - [Aperiodic Tilings V: the Refinable Frontier](https://www.chiark.greenend.org.uk/~sgtatham/quasiblog/aperiodic-refine/)
* [2025-09-02, 12:56:37](https://news.ycombinator.com/item?id=45102512) - [Take something you don’t like and try to like it](https://dynomight.net/liking/)
* [2025-09-02, 11:44:14](https://news.ycombinator.com/item?id=45101779) - [Toronto’s network of pedestrian tunnels](https://www.worksinprogress.news/p/torontos-underground-labyrinth)
* [2025-09-02, 10:17:15](https://lobste.rs/s/umaxfz/rats_ratchets_2024) - [Of Rats and Ratchets (2024)](https://matklad.github.io/2024/01/03/of-rats-and-ratchets.html)
* [2025-09-02, 08:40:25](https://lobste.rs/s/nr8kkd/debugging_rustler_on_illumos) - [Debugging Rustler on illumos](https://system-illumination.org/01-rustler.html)
* [2025-09-02, 08:26:00](https://soylentnews.org/article.pl?sid=25/09/01/0018253&amp;from=rss) - [AI in Schools Isn’t Progress — It’s a Sign of How Far We’ve Strayed from the Purpose of Education.](https://soylentnews.org/article.pl?sid=25/09/01/0018253&amp;from=rss)
* [2025-09-02, 08:25:47](https://news.ycombinator.com/item?id=45100421) - [Light Sleep: Waking VMs in 200ms with eBPF and snapshots](https://www.koyeb.com/blog/scale-to-zero-wake-vms-in-200-ms-with-light-sleep-ebpf-and-snapshots)
* [2025-09-02, 07:40:59](https://lobste.rs/s/57djg3/irc_serial_port_s_love_letter_internet) - [IRC - The Serial Port&apos;s love letter to Internet Relay Chat](https://www.youtube.com/watch?v=6UbKenFipjo)
* [2025-09-02, 05:02:07](https://lobste.rs/s/aypgqu/compile_svelte_5_your_head) - [Compile Svelte 5 in your head](https://lihautan.com/compile-svelte-5-in-your-head)
* [2025-09-02, 03:44:00](https://soylentnews.org/article.pl?sid=25/08/31/1416227&amp;from=rss) - [AMD Roadmap Leak Points to Zen 6 Mobile CPUs in 2027](https://soylentnews.org/article.pl?sid=25/08/31/1416227&amp;from=rss)
* [2025-09-02, 01:50:23](https://lobste.rs/s/qk5qw7/next_js_is_infuriating) - [Next.js Is Infuriating](https://blog.meca.sh/3lxoty3shjc2z)
* [2025-09-02, 01:33:38](https://lobste.rs/s/ig1k0s/saturation_triumph_history_how_most) - [Saturation and the Triumph of History: How most of the behavior of Tech Leaders since 2016 can be explained by smartphone market saturation](https://notes.hella.cheap/saturation-and-the-triumph-of-history.html)
* [2025-09-01, 23:04:00](https://soylentnews.org/article.pl?sid=25/08/31/146226&amp;from=rss) - [AI Crawlers Destroying Websites in Hunger for Content](https://soylentnews.org/article.pl?sid=25/08/31/146226&amp;from=rss)
* [2025-09-01, 22:36:42](https://lobste.rs/s/ukn1u3/faster_linking_times_with_1_90_0_stable_on) - [Faster linking times with 1.90.0 stable on Linux using the LLD linker](https://blog.rust-lang.org/2025/09/01/rust-lld-on-1.90.0-stable/)
* [2025-09-01, 22:24:51](https://lobste.rs/s/p8fj5d/future_32_bit_support_kernel) - [The future of 32-bit support in the kernel](https://lwn.net/SubscriberLink/1035727/4837b0d3dccf1cbb/)
* [2025-09-01, 21:05:23](https://lobste.rs/s/x5xf4g/bear_is_now_source_available) - [Bear is now source-available](https://herman.bearblog.dev/license/)
* [2025-09-01, 18:14:00](https://soylentnews.org/article.pl?sid=25/08/31/1355250&amp;from=rss) - [Tesla Denied Having Fatal Crash Data Until a Hacker Found It](https://soylentnews.org/article.pl?sid=25/08/31/1355250&amp;from=rss)
* [2025-09-01, 16:02:58](https://lobste.rs/s/fdyjno/what_s_cooking_on_sourcehut_q3_2025) - [What&apos;s cooking on SourceHut? Q3 2025](https://sourcehut.org/blog/2025-09-01-whats-cooking-q3-2025/)
* [2025-09-01, 13:32:00](https://soylentnews.org/article.pl?sid=25/08/31/1353201&amp;from=rss) - [Massive Data Breach: Google Warns 2.5 Billion Gmail Users](https://soylentnews.org/article.pl?sid=25/08/31/1353201&amp;from=rss)
* [2025-09-01, 08:44:00](https://soylentnews.org/article.pl?sid=25/08/30/1515239&amp;from=rss) - [Medical Cannabis Fails the Long-Term Test: 58% of Patients Quit Within a Year](https://soylentnews.org/article.pl?sid=25/08/30/1515239&amp;from=rss)
* [2025-09-01, 08:04:50](https://lobste.rs/s/qejtqj/passkeys_are_incompatible_with_open) - [Passkeys are incompatible with open-source software](https://www.smokingonabike.com/2025/01/04/passkey-marketing-is-lying-to-you/)
* [2025-09-01, 04:01:00](https://soylentnews.org/article.pl?sid=25/08/30/157235&amp;from=rss) - [The Mysterious Shortwave Radio Station Stoking US-Russia Nuclear Fears](https://soylentnews.org/article.pl?sid=25/08/30/157235&amp;from=rss)
* [2025-08-31, 23:13:00](https://soylentnews.org/article.pl?sid=25/08/30/1445255&amp;from=rss) - [Elon Musk Says xAI Has Open Sourced Grok 2.5](https://soylentnews.org/article.pl?sid=25/08/30/1445255&amp;from=rss)
* [2025-08-31, 18:25:00](https://soylentnews.org/article.pl?sid=25/08/30/1427217&amp;from=rss) - [US Military&apos;s X-37B Spaceplane Stays Relevant With Launch of Another Mission](https://soylentnews.org/article.pl?sid=25/08/30/1427217&amp;from=rss)
* [2025-08-31, 13:38:00](https://soylentnews.org/article.pl?sid=25/08/30/1419247&amp;from=rss) - [A New Security Flaw in TheTruthSpy Phone Spyware is Putting Victims at Risk](https://soylentnews.org/article.pl?sid=25/08/30/1419247&amp;from=rss)
* [2025-08-31, 08:47:00](https://soylentnews.org/article.pl?sid=25/08/29/2355251&amp;from=rss) - [Transport for London (TfL) Asks Mobile Users to Wear Headphones](https://soylentnews.org/article.pl?sid=25/08/29/2355251&amp;from=rss)
* [2025-08-31, 05:53:19](https://news.ycombinator.com/item?id=45080683) - [Still Asking: How Good Are Query Optimizers, Really? [pdf]](https://www.vldb.org/pvldb/vol18/p5531-viktor.pdf)
* [2025-08-31, 03:59:00](https://soylentnews.org/article.pl?sid=25/08/29/2346225&amp;from=rss) - [Scientists Produce Quantum Entanglement-like Results Without Entangled Particles](https://soylentnews.org/article.pl?sid=25/08/29/2346225&amp;from=rss)
* [2025-08-30, 23:14:00](https://soylentnews.org/article.pl?sid=25/08/29/2330255&amp;from=rss) - [Rare Quadruple Star System May Solve the Mystery of Brown Dwarfs](https://soylentnews.org/article.pl?sid=25/08/29/2330255&amp;from=rss)
* [2025-08-30, 18:34:00](https://soylentnews.org/article.pl?sid=25/08/29/1422213&amp;from=rss) - [4chan and Kiwi Farms Sue UK Regulator Ofcom Over Online Censorship Law](https://soylentnews.org/article.pl?sid=25/08/29/1422213&amp;from=rss)
* [2025-08-30, 13:51:00](https://soylentnews.org/article.pl?sid=25/08/29/0536231&amp;from=rss) - [US Attorneys General Tell AI Companies They &apos;Will be Held Accountable&apos; for Child Safety Failures](https://soylentnews.org/article.pl?sid=25/08/29/0536231&amp;from=rss)
* [2025-08-30, 09:04:00](https://soylentnews.org/article.pl?sid=25/08/29/0527204&amp;from=rss) - [ADAS (Driver Assist) Gen 2 From BMW](https://soylentnews.org/article.pl?sid=25/08/29/0527204&amp;from=rss)
* [2025-08-30, 08:46:05](https://news.ycombinator.com/item?id=45073031) - [Triangle Grids](https://kvachev.com/blog/posts/triangular-grid/)
* [2025-08-30, 04:21:00](https://soylentnews.org/article.pl?sid=25/08/29/0523215&amp;from=rss) - [A Gentle Introduction to CP/M](https://soylentnews.org/article.pl?sid=25/08/29/0523215&amp;from=rss)
* [2025-08-30, 02:35:00](https://news.ycombinator.com/item?id=45071457) - [What Happens During Startup?](https://eclecticlight.co/2025/08/29/what-happens-during-startup/)
