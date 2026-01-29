# [News Summary](https://kherrick.github.io/news-summary/)

## Cybersecurity and Privacy

* [FBI Seizes RAMP Cybercrime Forum Used By Ransomware Gangs](https://yro.slashdot.org/story/26/01/29/0533228/fbi-seizes-ramp-cybercrime-forum-used-by-ransomware-gangs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [US Cyber Defense Chief Uploaded Sensitive Files Into a Public Version of ChatGPT](https://yro.slashdot.org/story/26/01/28/2144213/us-cyber-defense-chief-uploaded-sensitive-files-into-a-public-version-of-chatgpt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Amazon is Ending Its Palm ID System for Retail, Amazon One, as It Closes Physical Stores](https://yro.slashdot.org/story/26/01/28/1951234/amazon-is-ending-its-palm-id-system-for-retail-amazon-one-as-it-closes-physical-stores?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Artificial Intelligence Developments

* [Software Company Bonds Drop As Investors' AI Worries Mount](https://tech.slashdot.org/story/26/01/28/2214257/software-company-bonds-drop-as-investors-ai-worries-mount?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [AI is Already Writing Almost One-Third of New Software Code](https://soylentnews.org/article.pl?sid=26/01/27/0352207&amp;from=rss)

## Space and Environment

* [Europe's next-generation weather satellite sends back first images](https://www.esa.int/Applications/Observing_the_Earth/Meteorological_missions/meteosat_third_generation/Europe_s_next-generation_weather_satellite_sends_back_first_images)

* [Satellites encased in wood are in the works](https://www.economist.com/science-and-technology/2026/01/21/satellites-encased-in-wood-are-in-the-works)

* [Extremophile Molds Are Invading Art Museums](https://science.slashdot.org/story/26/01/28/2332202/extremophile-molds-are-invading-art-museums?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Technology and Innovation

* [Bf-Tree A Modern Concurrent Larger-Than-Memory Range Index](https://github.com/microsoft/bf-tree/)

* [Ariel OS is a library operating system for secure, memory-safe, low-power Internet of Things, written in Rust](https://github.com/ariel-os/ariel-os)

* [Time Machine inside a FreeBSD jail](https://it-notes.dragas.net/2026/01/28/time-machine-freebsd-jail/)

## Transportation and Energy

* [Tesla ending Models S and X production](https://www.cnbc.com/2026/01/28/tesla-ending-model-s-x-production.html)

* [Fully Electric Vehicle Sales In EU Overtake Petrol For First Time In December](https://tech.slashdot.org/story/26/01/28/2239249/fully-electric-vehicle-sales-in-eu-overtake-petrol-for-first-time-in-december?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Cultural and Literary Trends

* [Brandon Sanderson's Literary Fantasy Universe 'Cosmere' Picked Up by Apple TV](https://entertainment.slashdot.org/story/26/01/29/0544212/brandon-sandersons-literary-fantasy-universe-cosmere-picked-up-by-apple-tv?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [How London became the rest of the world’s startup capital](https://www.economist.com/britain/2026/01/26/how-london-became-the-rest-of-the-worlds-startup-capital)

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

* [2026-01-29, 10:00:00](https://yro.slashdot.org/story/26/01/29/0533228/fbi-seizes-ramp-cybercrime-forum-used-by-ransomware-gangs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FBI Seizes RAMP Cybercrime Forum Used By Ransomware Gangs](https://yro.slashdot.org/story/26/01/29/0533228/fbi-seizes-ramp-cybercrime-forum-used-by-ransomware-gangs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 09:34:06](https://lobste.rs/s/97wsdw/phantom_obligation) - [Phantom Obligation](https://terrygodier.com/phantom-obligation)
* [2026-01-29, 09:22:36](https://lobste.rs/s/a3qcah/9front_gefs_service_pack_1_released) - [9front \&quot;GEFS SERVICE PACK 1\&quot; released](https://9front.org/releases/2026/01/24/0/)
* [2026-01-29, 09:20:16](https://lobste.rs/s/g0ep2s/30_years_reactos) - [30 years of ReactOS](https://reactos.org/blogs/30yrs-of-ros/)
* [2026-01-29, 08:28:41](https://lobste.rs/s/pimcz4/simple_http_tunnel_ngrok_alternative) - [A simple HTTP tunnel ngrok alternative (2024)](https://github.com/peter-leonov/webhooks-proxy-tunnel)
* [2026-01-29, 07:32:19](https://news.ycombinator.com/item?id=46806959) - [The Only Moat Left Is Knowing Things](https://growtika.com/blog/authenticity-edge)
* [2026-01-29, 07:07:17](https://news.ycombinator.com/item?id=46806773) - [Europe&apos;s next-generation weather satellite sends back first images](https://www.esa.int/Applications/Observing_the_Earth/Meteorological_missions/meteosat_third_generation/Europe_s_next-generation_weather_satellite_sends_back_first_images)
* [2026-01-29, 07:00:00](https://entertainment.slashdot.org/story/26/01/29/0544212/brandon-sandersons-literary-fantasy-universe-cosmere-picked-up-by-apple-tv?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Brandon Sanderson&apos;s Literary Fantasy Universe &apos;Cosmere&apos; Picked Up by Apple TV](https://entertainment.slashdot.org/story/26/01/29/0544212/brandon-sandersons-literary-fantasy-universe-cosmere-picked-up-by-apple-tv?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 06:11:00](https://soylentnews.org/article.pl?sid=26/01/27/0433200&amp;from=rss) - [Red Dwarfs are Too Dim to Generate Complex Life](https://soylentnews.org/article.pl?sid=26/01/27/0433200&amp;from=rss)
* [2026-01-29, 05:40:45](https://news.ycombinator.com/item?id=46806245) - [Why do RSS readers look like email clients?](https://www.terrygodier.com/phantom-obligation)
* [2026-01-29, 05:31:07](https://lobste.rs/s/651hoq/bf_tree_modern_concurrent_larger_than) - [Bf-Tree A Modern Concurrent Larger-Than-Memory Range Index](https://github.com/microsoft/bf-tree/)
* [2026-01-29, 04:39:10](https://lobste.rs/s/hcw4pb/some_notes_on_starting_use_django) - [Some notes on starting to use Django](https://jvns.ca/blog/2026/01/27/some-notes-on-starting-to-use-django/)
* [2026-01-29, 04:11:40](https://lobste.rs/s/eqgc61/can_ai_companies_become_profitable) - [Can AI companies become profitable?](https://epoch.ai/gradient-updates/can-ai-companies-become-profitable)
* [2026-01-29, 03:58:33](https://news.ycombinator.com/item?id=46805665) - [We can&apos;t send mail farther than 500 miles (2002)](https://web.mit.edu/jemorris/humor/500-miles)
* [2026-01-29, 03:30:00](https://science.slashdot.org/story/26/01/28/2332202/extremophile-molds-are-invading-art-museums?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Extremophile Molds Are Invading Art Museums](https://science.slashdot.org/story/26/01/28/2332202/extremophile-molds-are-invading-art-museums?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 03:29:53](https://news.ycombinator.com/item?id=46805439) - [Questom (YC F25) is hiring an engineer](https://www.ycombinator.com/companies/questom/jobs/UBebsyO-founding-engineer)
* [2026-01-29, 02:59:28](https://lobste.rs/s/qonvof/arm_mte_performance_practice_extended) - [ARM MTE Performance in Practice (Extended Version)](https://arxiv.org/pdf/2601.11786)
* [2026-01-29, 02:11:42](https://news.ycombinator.com/item?id=46804854) - [Maine’s ‘Lobster Lady’ who fished for nearly a century dies aged 105](https://www.theguardian.com/us-news/2026/jan/28/maine-lobster-lady-dies-aged-105)
* [2026-01-29, 02:08:40](https://news.ycombinator.com/item?id=46804828) - [Render Mermaid diagrams as SVGs or ASCII art](https://github.com/lukilabs/beautiful-mermaid)
* [2026-01-29, 02:02:00](https://tech.slashdot.org/story/26/01/28/2239249/fully-electric-vehicle-sales-in-eu-overtake-petrol-for-first-time-in-december?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fully Electric Vehicle Sales In EU Overtake Petrol For First Time In December](https://tech.slashdot.org/story/26/01/28/2239249/fully-electric-vehicle-sales-in-eu-overtake-petrol-for-first-time-in-december?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 01:30:42](https://lobste.rs/s/0f7x2a/i_still_don_t_understand_this_syn_attack) - [I still don&apos;t understand this SYN attack, but now I can block it easily](https://boston.conman.org/2026/01/28.2)
* [2026-01-29, 01:30:00](https://soylentnews.org/article.pl?sid=26/01/27/0352207&amp;from=rss) - [AI is Already Writing Almost One-Third of New Software Code](https://soylentnews.org/article.pl?sid=26/01/27/0352207&amp;from=rss)
* [2026-01-29, 01:25:00](https://linux.slashdot.org/story/26/01/28/2253239/kernel-community-drafts-a-plan-for-replacing-linus-torvalds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Kernel Community Drafts a Plan For Replacing Linus Torvalds](https://linux.slashdot.org/story/26/01/28/2253239/kernel-community-drafts-a-plan-for-replacing-linus-torvalds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 00:45:00](https://mobile.slashdot.org/story/26/01/28/2233210/french-lawmakers-vote-to-ban-social-media-use-by-under-15s?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [French Lawmakers Vote To Ban Social Media Use By Under-15s](https://mobile.slashdot.org/story/26/01/28/2233210/french-lawmakers-vote-to-ban-social-media-use-by-under-15s?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-29, 00:02:00](https://tech.slashdot.org/story/26/01/28/2214257/software-company-bonds-drop-as-investors-ai-worries-mount?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Software Company Bonds Drop As Investors&apos; AI Worries Mount](https://tech.slashdot.org/story/26/01/28/2214257/software-company-bonds-drop-as-investors-ai-worries-mount?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-28, 23:20:00](https://apple.slashdot.org/story/26/01/28/222215/apple-tells-patreon-to-move-creators-to-in-app-purchase-for-subscriptions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Tells Patreon To Move Creators To In-App Purchase For Subscriptions](https://apple.slashdot.org/story/26/01/28/222215/apple-tells-patreon-to-move-creators-to-in-app-purchase-for-subscriptions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-28, 22:53:54](https://news.ycombinator.com/item?id=46802867) - [Tesla ending Models S and X production](https://www.cnbc.com/2026/01/28/tesla-ending-model-s-x-production.html)
* [2026-01-28, 22:40:00](https://tech.slashdot.org/story/26/01/28/2149236/google-says-ai-agent-can-now-browse-on-users-behalf?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Says AI Agent Can Now Browse on Users&apos; Behalf](https://tech.slashdot.org/story/26/01/28/2149236/google-says-ai-agent-can-now-browse-on-users-behalf?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-28, 22:05:05](https://news.ycombinator.com/item?id=46802210) - [Bf-Tree: modern read-write-optimized concurrent larger-than-memory range index](https://github.com/microsoft/bf-tree)
* [2026-01-28, 22:02:00](https://yro.slashdot.org/story/26/01/28/2144213/us-cyber-defense-chief-uploaded-sensitive-files-into-a-public-version-of-chatgpt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Cyber Defense Chief Uploaded Sensitive Files Into a Public Version of ChatGPT](https://yro.slashdot.org/story/26/01/28/2144213/us-cyber-defense-chief-uploaded-sensitive-files-into-a-public-version-of-chatgpt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-28, 21:50:47](https://news.ycombinator.com/item?id=46802067) - [Somebody used spoofed ADSB signals to raster the meme of JD Vance](https://alecmuffett.com/article/143548)
* [2026-01-28, 21:22:00](https://yro.slashdot.org/story/26/01/28/1951234/amazon-is-ending-its-palm-id-system-for-retail-amazon-one-as-it-closes-physical-stores?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon is Ending Its Palm ID System for Retail, Amazon One, as It Closes Physical Stores](https://yro.slashdot.org/story/26/01/28/1951234/amazon-is-ending-its-palm-id-system-for-retail-amazon-one-as-it-closes-physical-stores?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-28, 20:59:30](https://news.ycombinator.com/item?id=46801419) - [Apple to soon take up to 30% cut from all Patreon creators in iOS app](https://www.macrumors.com/2026/01/28/patreon-apple-tax/)
* [2026-01-28, 20:44:00](https://slashdot.org/story/26/01/28/1937218/urban-expansion-in-the-age-of-liberalism?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Urban Expansion in the Age of Liberalism](https://slashdot.org/story/26/01/28/1937218/urban-expansion-in-the-age-of-liberalism?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-28, 20:39:00](https://soylentnews.org/article.pl?sid=26/01/26/1911209&amp;from=rss) - [The Return of Digg, and the Proliferation of Cancel Culture](https://soylentnews.org/article.pl?sid=26/01/26/1911209&amp;from=rss)
* [2026-01-28, 20:02:00](https://science.slashdot.org/story/26/01/28/1920237/cancer-might-protect-against-alzheimers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cancer Might Protect Against Alzheimer&apos;s](https://science.slashdot.org/story/26/01/28/1920237/cancer-might-protect-against-alzheimers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-28, 19:56:09](https://lobste.rs/s/avdx9j/bootstrap_chain_for_nixos_which_builds) - [\&quot;a bootstrap chain for NixOS which builds the whole system from a small hand-auditable binary seed\&quot;](https://chaos.social/@nzbr/115973847897716839)
* [2026-01-28, 19:22:00](https://tech.slashdot.org/story/26/01/28/199225/experians-tech-chief-defends-credit-scores-were-not-palantir?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Experian&apos;s Tech Chief Defends Credit Scores: &apos;We&apos;re Not Palantir&apos;](https://tech.slashdot.org/story/26/01/28/199225/experians-tech-chief-defends-credit-scores-were-not-palantir?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-28, 18:52:24](https://news.ycombinator.com/item?id=46799898) - [Show HN: A MitM proxy to see what your LLM tools are sending](https://github.com/jmuncor/sherlock)
* [2026-01-28, 18:48:00](https://it.slashdot.org/story/26/01/28/1849206/theres-a-rash-of-scam-spam-coming-from-a-real-microsoft-address?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [There&apos;s a Rash of Scam Spam Coming From a Real Microsoft Address](https://it.slashdot.org/story/26/01/28/1849206/theres-a-rash-of-scam-spam-coming-from-a-real-microsoft-address?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-28, 18:35:18](https://lobste.rs/s/tvprul/why_i_still_teach_opengl_es_3_0) - [Why I still teach OpenGL ES 3.0](https://eliasfarhan.ch/jekyll/update/2026/01/27/why-i-teach-opengles.html)
* [2026-01-28, 18:23:14](https://news.ycombinator.com/item?id=46799477) - [LM Studio 0.4](https://lmstudio.ai/blog/0.4.0)
* [2026-01-28, 17:54:54](https://news.ycombinator.com/item?id=46798994) - [Computer History Museum Launches Digital Portal to Its Collection](https://computerhistory.org/press-releases/computer-history-museum-launches-digital-portal-to-its-vast-collection/)
* [2026-01-28, 17:20:31](https://news.ycombinator.com/item?id=46798402) - [Mousefood – Build embedded terminal UIs for microcontrollers](https://github.com/ratatui/mousefood)
* [2026-01-28, 16:34:54](https://lobste.rs/s/pnrw6j/ariel_os_is_library_operating_system_for) - [Ariel OS is a library operating system for secure, memory-safe, low-power Internet of Things, written in Rust](https://github.com/ariel-os/ariel-os)
* [2026-01-28, 16:32:00](https://news.ycombinator.com/item?id=46797594) - [Oban, the job processing framework from Elixir, has come to Python](https://www.dimamik.com/posts/oban_py/)
* [2026-01-28, 16:20:07](https://lobste.rs/s/zxwgrs/accessing_luks_ext4_drives_from_macos) - [Accessing LUKS and ext4 drives from macOS](https://nmattia.com/posts/2026-01-13-using-luks-on-macos/)
* [2026-01-28, 15:55:00](https://soylentnews.org/article.pl?sid=26/01/26/197234&amp;from=rss) - [Socializing Alone: The Downside of Communication Technology](https://soylentnews.org/article.pl?sid=26/01/26/197234&amp;from=rss)
* [2026-01-28, 14:38:39](https://lobste.rs/s/m0krf8/there_back_again_from_quickstrom) - [There and Back Again: From Quickstrom to Bombadil](https://wickstrom.tech/2026-01-28-there-and-back-again-from-quickstrom-to-bombadil.html)
* [2026-01-28, 14:32:30](https://news.ycombinator.com/item?id=46795908) - [Airfoil (2024)](https://ciechanow.ski/airfoil/)
* [2026-01-28, 13:44:48](https://lobste.rs/s/rcffs8/make_ts) - [make.ts](https://matklad.github.io/2026/01/27/make-ts.html)
* [2026-01-28, 11:59:30](https://lobste.rs/s/1omm6b/uefigame_win_boot_lose_shutdown) - [UEFIGame: \&quot;Win -&gt; Boot, Lose -&gt; Shutdown\&quot;](https://github.com/mycroftsnm/UEFIGame)
* [2026-01-28, 11:13:00](https://soylentnews.org/article.pl?sid=26/01/26/195201&amp;from=rss) - [TSMC Says AI Demand is “Endless” After Record Q4 Earnings](https://soylentnews.org/article.pl?sid=26/01/26/195201&amp;from=rss)
* [2026-01-28, 09:37:34](https://lobste.rs/s/0x2zgn/time_machine_inside_freebsd_jail) - [Time Machine inside a FreeBSD jail](https://it-notes.dragas.net/2026/01/28/time-machine-freebsd-jail/)
* [2026-01-28, 07:42:25](https://lobste.rs/s/pjuesf/rise_sanityware) - [The Rise of Sanityware](https://thatshubham.com/blog/2026.html)
* [2026-01-28, 06:27:00](https://soylentnews.org/article.pl?sid=26/01/26/192227&amp;from=rss) - [Design Your Next Building Out of Bamboo](https://soylentnews.org/article.pl?sid=26/01/26/192227&amp;from=rss)
* [2026-01-28, 04:24:34](https://lobste.rs/s/rxowxr/use_z_not_with_python_regular_expressions) - [Use “\\A...\\z”, not “^...$” with Python regular expressions](https://sethmlarson.dev/use-backslash-A-and-z-not-%5E-and-%24-with-python-regular-expressions)
* [2026-01-28, 03:34:45](https://news.ycombinator.com/item?id=46790740) - [Android&apos;s desktop interface leaks](https://9to5google.com/2026/01/27/android-desktop-leak/)
* [2026-01-28, 01:42:00](https://soylentnews.org/article.pl?sid=26/01/26/191227&amp;from=rss) - [North Sea Winds Of Change](https://soylentnews.org/article.pl?sid=26/01/26/191227&amp;from=rss)
* [2026-01-28, 00:57:52](https://news.ycombinator.com/item?id=46789561) - [Trinity large: An open 400B sparse MoE model](https://www.arcee.ai/blog/trinity-large)
* [2026-01-28, 00:18:58](https://news.ycombinator.com/item?id=46789205) - [Did a celebrated researcher obscure a baby&apos;s poisoning?](https://www.newyorker.com/magazine/2026/02/02/did-a-celebrated-researcher-obscure-a-fatal-poisoning)
* [2026-01-28, 00:16:57](https://news.ycombinator.com/item?id=46789180) - [How London became the rest of the world’s startup capital](https://www.economist.com/britain/2026/01/26/how-london-became-the-rest-of-the-worlds-startup-capital)
* [2026-01-27, 21:22:07](https://lobste.rs/s/7cdb2b/pure_go_linux_environment_written_by) - [A \&quot;Pure Go\&quot; Linux environment, written by Claude](https://www.jtolio.com/2026/01/a-pure-go-linux-environment-written-by-claude-directed-by-fabrice-bellard/)
* [2026-01-27, 21:02:47](https://lobste.rs/s/atvvjp/it_is_incorrect_normalize_http_url_paths) - [It is incorrect to “normalize” // in HTTP URL paths](https://runxiyu.org/comp/doubleslash/)
* [2026-01-27, 21:02:00](https://soylentnews.org/article.pl?sid=26/01/26/1857242&amp;from=rss) - [Proton VPN Reveals Major Linux Makeover](https://soylentnews.org/article.pl?sid=26/01/26/1857242&amp;from=rss)
* [2026-01-27, 19:40:59](https://lobste.rs/s/vfofzr/blocking_claude) - [Blocking Claude](https://aphyr.com/posts/403-blocking-claude)
* [2026-01-27, 18:55:13](https://lobste.rs/s/igpevt/lobsters_vibecoding_challenge_winter) - [Lobsters Vibecoding Challenge (Winter 2025-2026)](https://gist.github.com/MostAwesomeDude/bb8cbfd005a33f5dd262d1f20a63a693)
* [2026-01-27, 18:08:48](https://lobste.rs/s/kaftkn/i_started_identifying_corporate_devices) - [I Started Identifying Corporate Devices in My Software](https://lgug2z.com/articles/i-started-identifying-corporate-devices-in-my-software/)
* [2026-01-27, 16:22:52](https://lobste.rs/s/csxfc6/cloudflare_claimed_they_implemented) - [Cloudflare claimed they implemented Matrix on Cloudflare workers. They didn&apos;t](https://tech.lgbt/@JadedBlueEyes/115967791152135761)
* [2026-01-27, 16:19:00](https://soylentnews.org/article.pl?sid=26/01/26/1850245&amp;from=rss) - [80386 Multiplication and Division](https://soylentnews.org/article.pl?sid=26/01/26/1850245&amp;from=rss)
* [2026-01-27, 11:39:00](https://soylentnews.org/article.pl?sid=26/01/25/1435251&amp;from=rss) - [Microsoft CEO Says AI Needs to Have Wider Impact or Risk Quickly Losing \&quot;Social Permission\&quot;](https://soylentnews.org/article.pl?sid=26/01/25/1435251&amp;from=rss)
* [2026-01-27, 07:37:56](https://news.ycombinator.com/item?id=46776643) - [Show HN: Externalized Properties, a modern Java configuration library](https://github.com/joel-jeremy/externalized-properties)
* [2026-01-27, 06:54:00](https://soylentnews.org/article.pl?sid=26/01/25/1419203&amp;from=rss) - [The Hidden Complexity Crisis: When Simple Radio Buttons Require 200+ Lines of Code](https://soylentnews.org/article.pl?sid=26/01/25/1419203&amp;from=rss)
* [2026-01-27, 02:08:00](https://soylentnews.org/article.pl?sid=26/01/25/1410231&amp;from=rss) - [Elon Musk Restarts Dojo3 &apos;Space&apos; Supercomputer Project As AI5 Chip Design Gets In &apos;Good Shape&apos;](https://soylentnews.org/article.pl?sid=26/01/25/1410231&amp;from=rss)
* [2026-01-26, 21:19:00](https://soylentnews.org/article.pl?sid=26/01/25/145215&amp;from=rss) - [Apple&apos;s Enshittification Moment: How the App Store is Quietly Abandoning User Trust](https://soylentnews.org/article.pl?sid=26/01/25/145215&amp;from=rss)
* [2026-01-26, 17:42:18](https://news.ycombinator.com/item?id=46768845) - [Decompiling Xbox games using PDB debug info](https://i686.me/blog/csplit/)
* [2026-01-26, 16:38:00](https://soylentnews.org/article.pl?sid=26/01/25/1312202&amp;from=rss) - [Snover.exit()](https://soylentnews.org/article.pl?sid=26/01/25/1312202&amp;from=rss)
* [2026-01-26, 11:55:00](https://soylentnews.org/article.pl?sid=26/01/25/0439223&amp;from=rss) - [Starlink Now Uses Customers&apos; Personal Data for AI Training](https://soylentnews.org/article.pl?sid=26/01/25/0439223&amp;from=rss)
* [2026-01-26, 07:11:00](https://soylentnews.org/article.pl?sid=26/01/25/0432221&amp;from=rss) - [Attackers Find a New Way to Share Malicious Snap Packages](https://soylentnews.org/article.pl?sid=26/01/25/0432221&amp;from=rss)
* [2026-01-26, 03:26:00](https://soylentnews.org/article.pl?sid=26/01/25/0429246&amp;from=rss) - [UK MPs Call for AI Stress Testing in Financial Services](https://soylentnews.org/article.pl?sid=26/01/25/0429246&amp;from=rss)
* [2026-01-26, 01:08:13](https://news.ycombinator.com/item?id=46760542) - [Satellites encased in wood are in the works](https://www.economist.com/science-and-technology/2026/01/21/satellites-encased-in-wood-are-in-the-works)
* [2026-01-25, 22:36:00](https://soylentnews.org/article.pl?sid=26/01/24/0116243&amp;from=rss) - [Microsoft Gave FBI a Set of BitLocker Encryption Keys to Unlock Suspects’ Laptops](https://soylentnews.org/article.pl?sid=26/01/24/0116243&amp;from=rss)
* [2026-01-25, 21:44:50](https://news.ycombinator.com/item?id=46758652) - [Mecha Comet – Open Modular Linux Handheld Computer](https://mecha.so/comet)
* [2026-01-25, 17:53:00](https://soylentnews.org/article.pl?sid=26/01/24/0114253&amp;from=rss) - [This May Be The Grossest Eye Pic Ever—but the Cause is What’s Truly Horrifying](https://soylentnews.org/article.pl?sid=26/01/24/0114253&amp;from=rss)
* [2026-01-25, 13:02:00](https://soylentnews.org/article.pl?sid=26/01/24/0112225&amp;from=rss) - [OpenAI Rolls Out Ads in ChatGPT as Expenses Skyrocket](https://soylentnews.org/article.pl?sid=26/01/24/0112225&amp;from=rss)
* [2026-01-25, 12:52:37](https://news.ycombinator.com/item?id=46753697) - [Is it worth it? (2021)](https://griffin.com/blog/is-it-worth-it)
* [2026-01-25, 11:12:47](https://news.ycombinator.com/item?id=46753037) - [Xmake: A cross-platform build utility based on Lua](https://xmake.io/)
* [2026-01-25, 08:30:00](https://soylentnews.org/article.pl?sid=26/01/24/0110242&amp;from=rss) - [Major River Deltas Are Sinking Faster Than Sea-Level Rise](https://soylentnews.org/article.pl?sid=26/01/24/0110242&amp;from=rss)
* [2026-01-25, 03:38:00](https://soylentnews.org/article.pl?sid=26/01/24/019242&amp;from=rss) - [How Greenwashing Creates &apos;False Stability&apos; for Companies](https://soylentnews.org/article.pl?sid=26/01/24/019242&amp;from=rss)
