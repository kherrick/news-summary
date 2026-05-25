# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Ethical Concerns

* [Pope Leo XIV says AI must serve humanity, not the powerful few](https://religionnews.com/2026/05/25/in-his-first-encyclical-pope-leo-xiv-says-ai-must-serve-humanity-not-the-powerful-few/) ([comments](https://news.ycombinator.com/item?id=48266485))

* [California Executive Order Directs Businesses and State Agencies to Prepare for AI-Driven Workforce Disruption](https://yro.slashdot.org/story/26/05/25/0128243/california-executive-order-directs-businesses-and-state-agencies-to-prepare-for-ai-driven-workforce-disruption?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=48263253))

* [1 in 5 Brits Think AI Layoffs Could Trigger Civil Unrest](https://soylentnews.org/article.pl?sid=26/05/23/1259209&amp;from=rss)

## Advancements in Technology

* [Uncle Sam's Next Big Supercomputer Might Use Something More Exotic Than GPUs](https://soylentnews.org/article.pl?sid=26/05/24/136257&amp;from=rss) ([comments](https://news.ycombinator.com/item?id=48266051))

* [IBM Spins Off the First Pure-Play Quantum Chip Foundry](https://futurumgroup.com/insights/2-billion-chips-act-investment-in-quantum-bets-on-ibms-300mm-superconducting-silicon/) ([comments](https://news.ycombinator.com/item?id=48265056))

* [China Says 'World's First' Offshore Wind-Powered Underwater Data Center Has Entered Full Operation](https://soylentnews.org/politics/article.pl?sid=26/05/24/1253249&amp;from=rss)

* [Wind and Solar Generated More Power Than Gas Globally in April](https://hardware.slashdot.org/story/26/05/24/0339201/wind-and-solar-generated-more-power-than-gas-globally-in-april?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Microsoft Surprises With its First Server Linux Distribution: Azure Linux 4.0](https://soylentnews.org/article.pl?sid=26/05/19/1855242&amp;from=rss)

## Human and Cultural Impact of Technology

* [Will Big Tech Layoffs Bring a Culture Shift to Anxiety and Job Insecurity?](https://it.slashdot.org/story/26/05/25/0042201/will-big-tech-layoffs-bring-a-culture-shift-to-anxiety-and-job-insecurity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [AI 'Crashes the Party' at This Year's Cannes Film Festival - Including Multi-Year Meta Partnership](https://entertainment.slashdot.org/story/26/05/24/173224/ai-crashes-the-party-at-this-years-cannes-film-festival---including-multi-year-meta-partnership?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=48258015))

* [Disney's 'Star Wars: The Mandalorian and Grogu' Opens to 'Mixed' Box Office Results](https://entertainment.slashdot.org/story/26/05/24/1841202/disneys-star-wars-the-mandalorian-and-grogu-opens-to-mixed-box-office-results?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Environmental and Climate Issues

* [Rising seas will swallow New Orleans. People need to start relocating now](https://www.cnn.com/2026/05/25/climate/new-orleans-sea-level-rise-relocation) ([comments](https://news.ycombinator.com/item?id=48265049))

* [Tesla's Electric Cybercab is Certified as the Most Efficient EV Ever](https://tech.slashdot.org/story/26/05/24/036212/teslas-electric-cybercab-is-certified-as-the-most-efficient-ev-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Innovations in Computing and Development

* [Scaling Akvorado BMP RIB with sharding](https://vincent.bernat.ch/en/blog/2026-akvorado-rib-sharding) ([comments](https://lobste.rs/s/cwvbah/scaling_akvorado_bmp_rib_with_sharding))

* [JS Crossword - a crossword where the clue = eval(answer)](https://lyra.horse/fun/jscrossword/) ([comments](https://lobste.rs/s/nkrgmr/js_crossword_crossword_where_clue_eval))

* [Jira Is Turing-Complete](https://seriot.ch/computation/jira.html) ([comments](https://news.ycombinator.com/item?id=48263253))

## Scientific Discoveries and Discussions

* [A fundamental principle of aeronautical engineering has been overturned](https://www.wired.com/story/a-fundamental-principle-of-aeronautical-engineering-has-been-overturned) ([comments](https://news.ycombinator.com/item?id=48260117))

* [What Do Gödel's Incompleteness Theorems Truly Mean?](https://soylentnews.org/article.pl?sid=26/05/22/0314250&amp;from=rss)

* [Didgeridoo playing as alternative treatment for obstructive sleep apnoea (2006)](https://pmc.ncbi.nlm.nih.gov/articles/PMC1360393/) ([comments](https://news.ycombinator.com/item?id=48243666))

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

* [2026-05-25, 13:17:58](https://news.ycombinator.com/item?id=48266485) - [Pope Leo XIV says AI must serve humanity, not the powerful few](https://religionnews.com/2026/05/25/in-his-first-encyclical-pope-leo-xiv-says-ai-must-serve-humanity-not-the-powerful-few/)
* [2026-05-25, 12:27:11](https://news.ycombinator.com/item?id=48266051) - [Search engines alternatives now that Google isn&apos;t Google anymore](https://techcrunch.com/2026/05/21/six-search-engines-worth-trying-now-that-google-isnt-really-google-anymore/)
* [2026-05-25, 12:18:00](https://soylentnews.org/article.pl?sid=26/05/24/136257&amp;from=rss) - [Uncle Sam&apos;s Next Big Supercomputer Might Use Something More Exotic Than GPUs](https://soylentnews.org/article.pl?sid=26/05/24/136257&amp;from=rss)
* [2026-05-25, 12:09:24](https://lobste.rs/s/kgem4b/social_contract_writing) - [The social contract of writing](https://jola.dev/posts/the-social-contract-of-writing)
* [2026-05-25, 12:03:54](https://news.ycombinator.com/item?id=48265876) - [Leave Me Behind](http://androidessence.com/leave-me-behind/)
* [2026-05-25, 11:38:59](https://lobste.rs/s/c7dq7x/host_tuned_gcc_for_faster_compilation) - [Host-Tuned GCC for Faster Compilation](https://peter0x44.github.io/posts/super-gcc/)
* [2026-05-25, 11:34:00](https://it.slashdot.org/story/26/05/25/0042201/will-big-tech-layoffs-bring-a-culture-shift-to-anxiety-and-job-insecurity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Will Big Tech Layoffs Bring a Culture Shift to Anxiety and Job Insecurity?](https://it.slashdot.org/story/26/05/25/0042201/will-big-tech-layoffs-bring-a-culture-shift-to-anxiety-and-job-insecurity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-25, 11:23:24](https://lobste.rs/s/3izfup/switching_colemak) - [Switching to Colemak](https://pta2002.com/blog/colemak/)
* [2026-05-25, 11:19:36](https://lobste.rs/s/vvb79k/fully_browser_container_builds) - [Fully in-browser container builds](https://ochagavia.nl/blog/fully-in-browser-container-builds/)
* [2026-05-25, 10:57:33](https://lobste.rs/s/2ibvbm/nix_s_substituter_list_is_not_routing) - [Nix&apos;s Substituter List Is Not a Routing Table](https://notashelf.dev/posts/nix-cache-proxy)
* [2026-05-25, 10:28:29](https://lobste.rs/s/vf66rg/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/vf66rg/what_are_you_doing_this_week)
* [2026-05-25, 10:11:29](https://news.ycombinator.com/item?id=48265206) - [Magnifica Humanitas (Encyclical Letter)](https://www.vatican.va/content/leo-xiv/en/encyclicals/documents/20260515-magnifica-humanitas.html)
* [2026-05-25, 09:43:03](https://news.ycombinator.com/item?id=48265056) - [IBM Spins Off the First Pure-Play Quantum Chip Foundry](https://futurumgroup.com/insights/2-billion-chips-act-investment-in-quantum-bets-on-ibms-300mm-superconducting-silicon/)
* [2026-05-25, 09:41:38](https://news.ycombinator.com/item?id=48265049) - [Rising seas will swallow New Orleans. People need to start relocating now](https://www.cnn.com/2026/05/25/climate/new-orleans-sea-level-rise-relocation)
* [2026-05-25, 08:25:00](https://news.ycombinator.com/item?id=48264635) - [Show HN: Geomatic – a command-driven geometry studio enabled with autodiff](https://www.tinyvolt.com/geomatic)
* [2026-05-25, 07:34:00](https://science.slashdot.org/story/26/05/25/023251/its-like-the-olympics---but-steroids-are-allowed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [It&apos;s Like the Olympics - But Steroids Are Allowed](https://science.slashdot.org/story/26/05/25/023251/its-like-the-olympics---but-steroids-are-allowed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-25, 07:28:00](https://soylentnews.org/politics/article.pl?sid=26/05/24/1253249&amp;from=rss) - [China Says &apos;World&apos;s First&apos; Offshore Wind-Powered Underwater Data Center Has Entered Full Operation](https://soylentnews.org/politics/article.pl?sid=26/05/24/1253249&amp;from=rss)
* [2026-05-25, 06:51:29](https://lobste.rs/s/kmbmt1/scoped_error_rust) - [Scoped Error in Rust](https://kanru.info/scoped-error/)
* [2026-05-25, 06:37:47](https://lobste.rs/s/kizott/lambda_on_lambda_serverless_haskell_on) - [Lambda on Lambda: Serverless Haskell on AWS](http://jackkelly.name/blog/archives/2026/06/24/lambda_on_lambda_serverless_haskell_on_aws/index.html)
* [2026-05-25, 06:24:53](https://lobste.rs/s/yp2w5p/announcing_feed_repeat_v1_0) - [Announcing feed-repeat v1.0](https://abhinavsarkar.net/notes/2026-feed-repeat/)
* [2026-05-25, 05:52:51](https://lobste.rs/s/cwvbah/scaling_akvorado_bmp_rib_with_sharding) - [Scaling Akvorado BMP RIB with sharding](https://vincent.bernat.ch/en/blog/2026-akvorado-rib-sharding)
* [2026-05-25, 05:50:44](https://lobste.rs/s/c8fuwg/building_pi_with_pi) - [Building Pi with Pi](https://lucumr.pocoo.org/2026/5/24/pi-oss/)
* [2026-05-25, 05:46:04](https://lobste.rs/s/qv4wl7/eyg_host_cli_improvements_new_guides_new) - [EYG: Host of CLI improvements, new guides and new effects](https://eyg.run/news/editions/9)
* [2026-05-25, 04:34:00](https://yro.slashdot.org/story/26/05/25/0128243/california-executive-order-directs-businesses-and-state-agencies-to-prepare-for-ai-driven-workforce-disruption?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California Executive Order Directs Businesses and State Agencies to Prepare for AI-Driven Workforce Disruption](https://yro.slashdot.org/story/26/05/25/0128243/california-executive-order-directs-businesses-and-state-agencies-to-prepare-for-ai-driven-workforce-disruption?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-25, 03:54:14](https://news.ycombinator.com/item?id=48263253) - [Jira Is Turing-Complete](https://seriot.ch/computation/jira.html)
* [2026-05-25, 02:46:00](https://soylentnews.org/article.pl?sid=26/05/24/1247208&amp;from=rss) - [Bots be Sorting](https://soylentnews.org/article.pl?sid=26/05/24/1247208&amp;from=rss)
* [2026-05-25, 01:34:00](https://entertainment.slashdot.org/story/26/05/24/173224/ai-crashes-the-party-at-this-years-cannes-film-festival---including-multi-year-meta-partnership?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI &apos;Crashes the Party&apos; at This Year&apos;s Cannes Film Festival - Including Multi-Year Meta Partnership](https://entertainment.slashdot.org/story/26/05/24/173224/ai-crashes-the-party-at-this-years-cannes-film-festival---including-multi-year-meta-partnership?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-25, 00:35:59](https://lobste.rs/s/pwnqab/eternal_sloptember) - [The Eternal Sloptember](https://geohot.github.io//blog/jekyll/update/2026/05/24/the-eternal-sloptember.html)
* [2026-05-24, 23:38:12](https://lobste.rs/s/nkrgmr/js_crossword_crossword_where_clue_eval) - [JS Crossword - a crossword where the clue = eval(answer)](https://lyra.horse/fun/jscrossword/)
* [2026-05-24, 22:57:46](https://lobste.rs/s/26wkdp/discussion_about_c_array_type_semantics) - [Discussion about C array type semantics](https://anselmschueler.com/blogposts/2025-c-pointers/)
* [2026-05-24, 22:11:00](https://tech.slashdot.org/story/26/05/24/213229/freebsd-foundation-executive-director-tries-daily-driving-freebsd-on-laptop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FreeBSD Foundation Executive Director Tries Daily Driving FreeBSD On Laptop](https://tech.slashdot.org/story/26/05/24/213229/freebsd-foundation-executive-director-tries-daily-driving-freebsd-on-laptop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-24, 22:00:00](https://soylentnews.org/article.pl?sid=26/05/23/2053216&amp;from=rss) - [Prankster Posts Real Monet Painting, Tells People It&apos;s AI](https://soylentnews.org/article.pl?sid=26/05/23/2053216&amp;from=rss)
* [2026-05-24, 21:24:12](https://lobste.rs/s/gfbpgq/flatpak_will_depend_on_systemd) - [Flatpak will depend on systemd](https://www.osnews.com/story/145071/flatpak-will-depend-on-systemd/)
* [2026-05-24, 21:11:00](https://news.slashdot.org/story/26/05/24/2042245/canonical-is-shutting-down-ubuntu-pastebin?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Canonical Is Shutting Down Ubuntu Pastebin](https://news.slashdot.org/story/26/05/24/2042245/canonical-is-shutting-down-ubuntu-pastebin?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-24, 21:00:34](https://lobste.rs/s/ydqlgv/soul_maintaining_new_machine) - [The Soul of Maintaining a New Machine](https://books.worksinprogress.co/book/maintenance-of-everything/communities-of-practice/the-soul-of-maintaining-a-new-machine/3)
* [2026-05-24, 20:11:00](https://news.slashdot.org/story/26/05/24/209218/mozilla-brings-web-serial-workflows-to-firefox-collaborates-with-adafruit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mozilla Brings Web Serial Workflows to Firefox, Collaborates With Adafruit](https://news.slashdot.org/story/26/05/24/209218/mozilla-brings-web-serial-workflows-to-firefox-collaborates-with-adafruit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-24, 19:10:26](https://news.ycombinator.com/item?id=48260117) - [A fundamental principle of aeronautical engineering has been overturned](https://www.wired.com/story/a-fundamental-principle-of-aeronautical-engineering-has-been-overturned/)
* [2026-05-24, 18:42:00](https://entertainment.slashdot.org/story/26/05/24/1841202/disneys-star-wars-the-mandalorian-and-grogu-opens-to-mixed-box-office-results?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Disney&apos;s &apos;Star Wars: The Mandalorian and Grogu&apos; Opens to &apos;Mixed&apos; Box Office Results](https://entertainment.slashdot.org/story/26/05/24/1841202/disneys-star-wars-the-mandalorian-and-grogu-opens-to-mixed-box-office-results?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-24, 18:39:10](https://news.ycombinator.com/item?id=48259861) - [Defeating Git Rigour Fatigue with Jujutsu](https://ikesau.co/blog/defeating-git-rigour-fatigue-with-jujutsu/)
* [2026-05-24, 18:31:42](https://news.ycombinator.com/item?id=48259808) - [Migrating from Go to Rust](https://corrode.dev/learn/migration-guides/go-to-rust/)
* [2026-05-24, 17:39:00](https://apple.slashdot.org/story/26/05/24/1737259/apple-preparing-new-gen-ai-website-ahead-of-wwdc-and-new-ai-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Preparing New &apos;Gen AI&apos; Website Ahead of WWDC &amp;mdash; and New AI Features?](https://apple.slashdot.org/story/26/05/24/1737259/apple-preparing-new-gen-ai-website-ahead-of-wwdc-and-new-ai-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-24, 17:22:48](https://news.ycombinator.com/item?id=48259192) - [Building Pi with Pi](https://lucumr.pocoo.org/2026/5/24/pi-oss/)
* [2026-05-24, 17:12:00](https://soylentnews.org/article.pl?sid=26/05/23/1259209&amp;from=rss) - [1 in 5 Brits Think AI Layoffs Could Trigger Civil Unrest](https://soylentnews.org/article.pl?sid=26/05/23/1259209&amp;from=rss)
* [2026-05-24, 16:34:00](https://hardware.slashdot.org/story/26/05/24/0339201/wind-and-solar-generated-more-power-than-gas-globally-in-april?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wind and Solar Generated More Power Than Gas Globally in April](https://hardware.slashdot.org/story/26/05/24/0339201/wind-and-solar-generated-more-power-than-gas-globally-in-april?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-24, 16:31:29](https://news.ycombinator.com/item?id=48258684) - [Memory has grown to nearly two-thirds of AI chip component costs](https://epoch.ai/data-insights/ai-chip-component-cost-shares)
* [2026-05-24, 15:34:00](https://slashdot.org/story/26/05/24/040224/scammers-are-abusing-an-internal-microsoft-account-to-send-spam-links?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scammers Are Abusing an Internal Microsoft Account to Send Spam Links](https://slashdot.org/story/26/05/24/040224/scammers-are-abusing-an-internal-microsoft-account-to-send-spam-links?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-24, 15:25:43](https://news.ycombinator.com/item?id=48258015) - [Show HN: Audiomass – a free, open-source multitrack audio editor for the web](https://audiomass.co/?multitrack=1)
* [2026-05-24, 15:03:22](https://lobste.rs/s/t1spjc/omarchy_is_not_distro) - [omarchy is not a distro](https://abyss.fish/your_dotfiles_are_not_a_distro)
* [2026-05-24, 14:41:12](https://lobste.rs/s/5xwplk/no_linux_support_on_free_version_vivado) - [No Linux support on free version of Vivado 2026.1](https://www.amd.com/en/products/software/adaptive-socs-and-fpgas/vivado/vivado-licensing-options.html)
* [2026-05-24, 14:38:34](https://lobste.rs/s/5y9u93/how_my_minimal_memory_safe_go_rsync_steers) - [How my minimal, memory-safe Go rsync steers clear of vulnerabilities](https://michael.stapelberg.ch/posts/2026-05-24-minimal-memory-safe-go-rsync-vulns/)
* [2026-05-24, 14:34:00](https://linux.slashdot.org/story/26/05/24/0522202/lenovo-dell-and-hp-financially-support-linux-vendor-firmware-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lenovo, Dell, and HP Financially Support Linux Vendor Firmware Service](https://linux.slashdot.org/story/26/05/24/0522202/lenovo-dell-and-hp-financially-support-linux-vendor-firmware-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-24, 14:22:54](https://lobste.rs/s/vqivdq/from_afsk_goertzel) - [From AFSK to Goertzel](https://uart.cz/2959/from-afsk-to-goertzel/)
* [2026-05-24, 13:02:06](https://news.ycombinator.com/item?id=48256953) - [DeepSeek reasonix, DeepSeek native coding agent with high caching and low cost](https://esengine.github.io/DeepSeek-Reasonix/)
* [2026-05-24, 12:55:53](https://news.ycombinator.com/item?id=48256912) - [Constraint Decay: The Fragility of LLM Agents in Back End Code Generation](https://arxiv.org/abs/2605.06445)
* [2026-05-24, 12:24:00](https://soylentnews.org/article.pl?sid=26/05/23/1239233&amp;from=rss) - [The US Space Enterprise is Desperately Waiting for Starship—Will It Finally Deliver?](https://soylentnews.org/article.pl?sid=26/05/23/1239233&amp;from=rss)
* [2026-05-24, 12:07:34](https://news.ycombinator.com/item?id=48256597) - [Childhood Computing](https://susam.net/childhood-computing.html)
* [2026-05-24, 11:34:00](https://games.slashdot.org/story/26/05/24/0158236/more-videogames-developers-consider-unionization---some-spurred-by-changes-to-remote-work-policies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [More Videogames Developers Consider Unionization - Some Spurred By Changes to Remote Work Policies](https://games.slashdot.org/story/26/05/24/0158236/more-videogames-developers-consider-unionization---some-spurred-by-changes-to-remote-work-policies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-24, 07:47:58](https://lobste.rs/s/qgq6ur/declarative_partial_updates) - [Declarative partial updates](https://developer.chrome.com/blog/declarative-partial-updates)
* [2026-05-24, 07:42:00](https://soylentnews.org/article.pl?sid=26/05/23/1223236&amp;from=rss) - [Baidu Says the Quiet Part Out Loud – You Can&apos;t Build AI Infrastructure, So Clouds Can Cash in](https://soylentnews.org/article.pl?sid=26/05/23/1223236&amp;from=rss)
* [2026-05-24, 07:34:00](https://tech.slashdot.org/story/26/05/24/0043256/underminr-cdn-vulnerability-hides-malicious-traffic-behind-trusted-domains?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Underminr&apos; CDN Vulnerability Hides Malicious Traffic Behind Trusted Domains](https://tech.slashdot.org/story/26/05/24/0043256/underminr-cdn-vulnerability-hides-malicious-traffic-behind-trusted-domains?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-24, 03:34:00](https://tech.slashdot.org/story/26/05/24/036212/teslas-electric-cybercab-is-certified-as-the-most-efficient-ev-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tesla&apos;s Electric Cybercab is Certified as the Most Efficient EV Ever](https://tech.slashdot.org/story/26/05/24/036212/teslas-electric-cybercab-is-certified-as-the-most-efficient-ev-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-24, 02:53:00](https://soylentnews.org/article.pl?sid=26/05/23/1216212&amp;from=rss) - [Silicon Valley Wants to Put a Chip in Your Brain](https://soylentnews.org/article.pl?sid=26/05/23/1216212&amp;from=rss)
* [2026-05-24, 01:21:13](https://news.ycombinator.com/item?id=48253386) - [Microsoft open-sources “the earliest DOS source code discovered to date”](https://arstechnica.com/gadgets/2026/04/microsoft-open-sources-the-earliest-dos-source-code-discovered-to-date/)
* [2026-05-24, 00:51:32](https://news.ycombinator.com/item?id=48253186) - [Scammers are abusing an internal Microsoft account to send spam links](https://techcrunch.com/2026/05/21/scammers-are-abusing-an-internal-microsoft-account-to-send-spam/)
* [2026-05-23, 22:08:00](https://soylentnews.org/article.pl?sid=26/05/22/0553256&amp;from=rss) - [Coding After AI - Are Humans Still Good Enough for Software Development?](https://soylentnews.org/article.pl?sid=26/05/22/0553256&amp;from=rss)
* [2026-05-23, 22:01:32](https://lobste.rs/s/oyzqgz/it_s_time_talk_about_my_writerdeck) - [It&apos;s time to talk about my writerdeck](https://veronicaexplains.net/my-first-writerdeck/)
* [2026-05-23, 18:57:06](https://lobste.rs/s/dqig3h/on_dl_2021) - [On the &lt;dl&gt; (2021)](https://benmyers.dev/blog/on-the-dl/)
* [2026-05-23, 18:55:05](https://lobste.rs/s/6rwldo/jira_is_turing_complete) - [Jira is Turing-Complete](https://seriot.ch/computation/jira.html)
* [2026-05-23, 17:20:00](https://soylentnews.org/article.pl?sid=26/05/22/0545221&amp;from=rss) - [In Stunning Display Of Stupid, Secret CISA Credentials Found In Public GitHub Repo](https://soylentnews.org/article.pl?sid=26/05/22/0545221&amp;from=rss)
* [2026-05-23, 12:35:00](https://soylentnews.org/article.pl?sid=26/05/22/0314250&amp;from=rss) - [What Do Gödel&apos;s Incompleteness Theorems Truly Mean?](https://soylentnews.org/article.pl?sid=26/05/22/0314250&amp;from=rss)
* [2026-05-23, 08:38:44](https://news.ycombinator.com/item?id=48245916) - [White Rabbit – sub-nanosecond synchronization for large distributed systems](https://ohwr.org/projects/white-rabbit/)
* [2026-05-23, 07:46:00](https://soylentnews.org/article.pl?sid=26/05/22/032239&amp;from=rss) - [Amazon is Shutting Down Support for Older Kindles Soon. Here&apos;s How You Can Save Yours](https://soylentnews.org/article.pl?sid=26/05/22/032239&amp;from=rss)
* [2026-05-23, 03:04:00](https://soylentnews.org/article.pl?sid=26/05/22/0247218&amp;from=rss) - [AI Data Centers Trigger Massive &apos;Irreversible&apos; 76% Electricity Price Spike in Largest US Region](https://soylentnews.org/article.pl?sid=26/05/22/0247218&amp;from=rss)
* [2026-05-23, 01:37:02](https://news.ycombinator.com/item?id=48243666) - [Didgeridoo playing as alternative treatment for obstructive sleep apnoea (2006)](https://pmc.ncbi.nlm.nih.gov/articles/PMC1360393/)
* [2026-05-22, 22:43:04](https://news.ycombinator.com/item?id=48242546) - [Bug 1950764: Work Around Crash on Intel Raptor Lake CPU](https://phabricator.services.mozilla.com/D301917)
* [2026-05-22, 22:15:00](https://soylentnews.org/article.pl?sid=26/05/22/0239256&amp;from=rss) - [Pompeii Victim ID&apos;d as a Likely Doctor](https://soylentnews.org/article.pl?sid=26/05/22/0239256&amp;from=rss)
* [2026-05-22, 20:31:04](https://news.ycombinator.com/item?id=48241239) - [you_can::turn_off_the_borrow_checker](https://docs.rs/you-can/latest/you_can/attr.turn_off_the_borrow_checker.html)
* [2026-05-22, 19:04:25](https://news.ycombinator.com/item?id=48240025) - [I love my Bluetooth keyboard](https://liquidbrain.net/blog/i-love-my-bluetooth-keyboard/)
* [2026-05-22, 17:27:00](https://soylentnews.org/article.pl?sid=26/05/22/0231209&amp;from=rss) - [Space Factories Edge Closer After Experimental Capsule Survives Hypersonic Landing](https://soylentnews.org/article.pl?sid=26/05/22/0231209&amp;from=rss)
* [2026-05-22, 14:56:57](https://news.ycombinator.com/item?id=48236816) - [AI errno(2) values](https://www.netmeister.org/blog/ai-errno.html)
* [2026-05-22, 14:12:08](https://news.ycombinator.com/item?id=48236122) - [Bytecode VMs in surprising places (2024)](https://dubroy.com/blog/bytecode-vms-in-surprising-places/)
* [2026-05-22, 12:43:00](https://soylentnews.org/article.pl?sid=26/05/22/0225208&amp;from=rss) - [Intel Tells PC Makers to Adopt 18A CPUs or Lose Their Supply](https://soylentnews.org/article.pl?sid=26/05/22/0225208&amp;from=rss)
* [2026-05-22, 08:01:00](https://soylentnews.org/article.pl?sid=26/05/21/042230&amp;from=rss) - [Jury Dismisses All Claims in Elon Musk&apos;s Lawsuit Against OpenAI CEO Sam Altman](https://soylentnews.org/article.pl?sid=26/05/21/042230&amp;from=rss)
* [2026-05-22, 03:19:00](https://soylentnews.org/article.pl?sid=26/05/19/1855242&amp;from=rss) - [Microsoft Surprises With its First Server Linux Distribution: Azure Linux 4.0](https://soylentnews.org/article.pl?sid=26/05/19/1855242&amp;from=rss)
* [2026-05-21, 22:34:00](https://soylentnews.org/article.pl?sid=26/05/19/1728216&amp;from=rss) - [Iran Demands Big Tech Pay Fees For Undersea Internet Cables In Strait Of Hormuz](https://soylentnews.org/article.pl?sid=26/05/19/1728216&amp;from=rss)
* [2026-05-21, 17:51:00](https://soylentnews.org/article.pl?sid=26/05/19/1726205&amp;from=rss) - [Physicists at Odds Over Greatest Physics Mysteries](https://soylentnews.org/article.pl?sid=26/05/19/1726205&amp;from=rss)
* [2026-05-21, 15:05:28](https://news.ycombinator.com/item?id=48223997) - [I spent 50 hours drawing a line graph](https://www.dougmacdowell.com/50-hours-to-draw-some-lines.html)
* [2026-05-21, 13:03:00](https://soylentnews.org/article.pl?sid=26/05/19/1720228&amp;from=rss) - [Barnes &amp; Noble CEO Backs Selling AI-Written Books in Stores](https://soylentnews.org/article.pl?sid=26/05/19/1720228&amp;from=rss)
* [2026-05-21, 08:17:00](https://soylentnews.org/article.pl?sid=26/05/19/1718231&amp;from=rss) - [PlayStation Plus to Raise Monthly Subscription Fee](https://soylentnews.org/article.pl?sid=26/05/19/1718231&amp;from=rss)
* [2026-05-21, 08:06:45](https://news.ycombinator.com/item?id=48219373) - [The physicists who convinced Fermilab to send Brazil&apos;s emails](https://buttondown.com/blog/brazil-fermilab-email)
* [2026-05-21, 03:36:00](https://soylentnews.org/article.pl?sid=26/05/19/1128257&amp;from=rss) - [Casimir Force Co-Opted to Generate Free Energy, Midichlorians Not Included](https://soylentnews.org/article.pl?sid=26/05/19/1128257&amp;from=rss)
