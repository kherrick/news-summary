# [News Summary](https://kherrick.github.io/news-summary/)

## Technology, AI, and Software Developments

* [FTC Removes Posts Critical of Amazon, Microsoft, and AI Companies](https://www.wired.com/story/federal-trade-commission-removed-blogs-critical-of-ai-amazon-microsoft/) - The FTC allegedly removes blog posts critical of major corporations and AI, raising concerns over censorship. [Comments](https://news.ycombinator.com/item?id=43402957)

* [US appeals court rules AI generated art cannot be copyrighted](https://www.reuters.com/world/us/us-appeals-court-rejects-copyrights-ai-generated-art-lacking-human-creator-2025-03-18/) - Legal precedent establishes that AI-created works cannot receive copyright protection. [Comments](https://news.ycombinator.com/item?id=43402790)

* [The First New Pebble Smartwatches Are Coming Later This Year](https://tech.slashdot.org/story/25/03/18/1621244/the-first-new-pebble-smartwatches-are-coming-later-this-year?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Pebble prepares to re-enter the smartwatch market, reviving its fanbase. [Comments](https://news.ycombinator.com/item?id=43402149)

* [Meta's Llama AI Models Hit 1 Billion Downloads, Zuckerberg Says](https://tech.slashdot.org/story/25/03/18/161237/metas-llama-ai-models-hit-1-billion-downloads-zuckerberg-says?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Meta's open-source AI model reaches milestones with significant adoption. [Comments](https://news.ycombinator.com/item?id=43398518)

* [Tesla Hate Is Making Insurance More Expensive for Owners](https://gizmodo.com/tesla-hate-is-making-insurance-more-expensive-for-owners-2000577467) - The perceived public disdain for Tesla may be adversely influencing insurance costs. [Comments](https://news.ycombinator.com/item?id=43402373)

## Legal and Regulatory Updates

* [Apple Loses German Antitrust Appeal, Opening Door for Greater Controls](https://apple.slashdot.org/story/25/03/18/1528219/apple-loses-german-antitrust-appeal-opening-door-for-greater-controls?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A significant antitrust decision against Apple in Germany may influence EU regulations. [Comments](https://news.ycombinator.com/item?id=43398589)

* [Hollywood Urges Trump To Not Let AI Companies 'Exploit' Copyrighted Works](https://tech.slashdot.org/story/25/03/18/000234/hollywood-urges-trump-to-not-let-ai-companies-exploit-copyrighted-works?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Film industry pushes back against AI infringement on copyrighted content. [Comments](https://news.ycombinator.com/item?id=43402115)

## Science and Innovation

* [Unearthed Notebooks Shed Light on Victorian Genius Who Inspired Einstein](https://soylentnews.org/article.pl?sid=25/03/18/0150258&from=rss) - Newly discovered notebooks reveal the ideas of a little-known figure who influenced Einstein's theories. [Comments](https://news.ycombinator.com/item?id=43402667)

* [New Form of Parkinson's Treatment Uses Real-Time Deep-Brain Stimulation](https://science.slashdot.org/story/25/03/18/0443229/new-form-of-parkinsons-treatment-uses-real-time-deep-brain-stimulation?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Innovative Parkinson's therapy promises improved results using advanced neurotechnology. [Comments](https://news.ycombinator.com/item?id=43396735)

* [Volkswagen's Cheapest EV Ever Is the First to Use Rivian Software](https://techcrunch.com/2025/03/05/volkswagens-cheapest-ev-ever-is-the-first-to-use-rivian-software/) - Rivian collaborates with Volkswagen on affordable EV technology. [Comments](https://news.ycombinator.com/item?id=43402622)

## Business and Economics

* [Google Parent Alphabet Acquires Wiz For $32 Billion](https://tech.slashdot.org/story/25/03/18/1117215/google-parent-alphabet-acquires-wiz-for-32-billion?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Alphabet expands its cybersecurity capabilities with Wiz acquisition. [Comments](https://news.ycombinator.com/item?id=43398518)

* [Software Startup Rippling Sues Competitor Deel, Claiming a Spy Carried Out 'Corporate Espionage'](https://tech.slashdot.org/story/25/03/18/0436243/software-startup-rippling-sues-competitor-deel-claiming-a-spy-carried-out-corporate-espionage?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Corporate espionage allegations shake the software industry. [Comments](https://news.ycombinator.com/item?id=43399190)

## Society and Culture

* [Ask HN: How Do I Escape Homelessness After Rebuilding My Mental Health?](https://news.ycombinator.com/item?id=43402315) - A personal and reflective call for advice on overcoming homelessness resonates across communities. [Comments](https://news.ycombinator.com/item?id=43401245)

* [A Society That Lost Focus](https://ploum.net/2024-03-18-lost-focus.html) - Observations on the decline of focus in modern society offer a pressing critique. [Comments](https://news.ycombinator.com/item?id=43402667)

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

* [2025-03-18, 18:27:42](https://news.ycombinator.com/item?id=43402957) - [FTC Removes Posts Critical of Amazon, Microsoft, and AI Companies](https://www.wired.com/story/federal-trade-commission-removed-blogs-critical-of-ai-amazon-microsoft/)
* [2025-03-18, 18:17:33](https://news.ycombinator.com/item?id=43402790) - [US appeals court rules AI generated art cannot be copyrighted](https://www.reuters.com/world/us/us-appeals-court-rejects-copyrights-ai-generated-art-lacking-human-creator-2025-03-18/)
* [2025-03-18, 18:10:00](https://news.slashdot.org/story/25/03/18/1734252/vance-slams-globalization-for-hampering-american-innovation?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Vance Slams Globalization For Hampering American Innovation](https://news.slashdot.org/story/25/03/18/1734252/vance-slams-globalization-for-hampering-american-innovation?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-18, 18:08:19](https://news.ycombinator.com/item?id=43402667) - [JDK Distributions](https://sdkman.io/jdks/)
* [2025-03-18, 18:03:50](https://news.ycombinator.com/item?id=43402622) - [Volkswagen's cheapest EV ever is the first to use Rivian software](https://techcrunch.com/2025/03/05/volkswagens-cheapest-ev-ever-is-the-first-to-use-rivian-software/)
* [2025-03-18, 17:49:00](https://soylentnews.org/article.pl?sid=25/03/18/0150258&from=rss) - [Unearthed Notebooks Shed Light on Victorian Genius Who Inspired Einstein](https://soylentnews.org/article.pl?sid=25/03/18/0150258&from=rss)
* [2025-03-18, 17:46:51](https://news.ycombinator.com/item?id=43402373) - [Tesla Hate Is Making Insurance More Expensive for Owners](https://gizmodo.com/tesla-hate-is-making-insurance-more-expensive-for-owners-2000577467)
* [2025-03-18, 17:42:21](https://news.ycombinator.com/item?id=43402315) - [Ask HN: How Do I Escape Homelessness After Rebuilding My Mental Health?](https://news.ycombinator.com/item?id=43402315)
* [2025-03-18, 17:30:16](https://lobste.rs/s/acuyjl/opentimes_free_travel_times_between_u_s) - [OpenTimes: Free travel times between U.S. Census geographies](https://sno.ws/opentimes/)
* [2025-03-18, 17:30:13](https://news.ycombinator.com/item?id=43402149) - [HTTrack Website Copier](https://www.httrack.com/)
* [2025-03-18, 17:30:00](https://tech.slashdot.org/story/25/03/18/1621244/the-first-new-pebble-smartwatches-are-coming-later-this-year?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [The First New Pebble Smartwatches Are Coming Later This Year](https://tech.slashdot.org/story/25/03/18/1621244/the-first-new-pebble-smartwatches-are-coming-later-this-year?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-18, 17:27:46](https://news.ycombinator.com/item?id=43402115) - [Amazon to kill off local Alexa processing, all voice requests shipped to cloud](https://www.theregister.com/2025/03/17/amazon_kills_on_device_alexa/)
* [2025-03-18, 17:07:39](https://news.ycombinator.com/item?id=43401855) - [Show HN: I made a tool to port tweets to Bluesky mantaining their original date](https://bluemigrate.com)
* [2025-03-18, 17:05:26](https://news.ycombinator.com/item?id=43401831) - [Jensen Huang – Nvidia GTC 2025 Keynote](https://www.nvidia.com/gtc/keynote/)
* [2025-03-18, 17:01:16](https://news.ycombinator.com/item?id=43401772) - [Spaceium Inc (YC S24) Is Hiring a Software Engineer](https://www.ycombinator.com/companies/spaceium-inc/jobs/XGMVnH3-software-engineer)
* [2025-03-18, 16:48:17](https://news.ycombinator.com/item?id=43401595) - [Fedora 42 Beta](https://www.redhat.com/en/blog/fedora-42-beta-now-available)
* [2025-03-18, 16:40:00](https://entertainment.slashdot.org/story/25/03/18/1634231/why-are-the-most-expensive-netflix-movies-also-the-worst?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Why Are the Most Expensive Netflix Movies Also the Worst?](https://entertainment.slashdot.org/story/25/03/18/1634231/why-are-the-most-expensive-netflix-movies-also-the-worst?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-18, 16:36:20](https://news.ycombinator.com/item?id=43401421) - [Preview: Amazon S3 Tables and Lakehouse in DuckDB](https://duckdb.org/2025/03/14/preview-amazon-s3-tables.html)
* [2025-03-18, 16:32:53](https://lobste.rs/s/fydrkd/virtual_reality_projection_shenanigans) - [Virtual Reality Projection Shenanigans](https://slugcat.systems/post/25-03-18-virtual-reality-projection-shenanigans/)
* [2025-03-18, 16:23:21](https://news.ycombinator.com/item?id=43401245) - [Apple restricts Pebble from being awesome with iPhones](https://ericmigi.com/blog/apple-restricts-pebble-from-being-awesome-with-iphones/)
* [2025-03-18, 16:08:49](https://lobste.rs/s/a2gqkn/real_failure_rate_ebs) - [The Real Failure Rate of EBS](https://planetscale.com/blog/the-real-fail-rate-of-ebs)
* [2025-03-18, 16:05:00](https://tech.slashdot.org/story/25/03/18/161237/metas-llama-ai-models-hit-1-billion-downloads-zuckerberg-says?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Meta's Llama AI Models Hit 1 Billion Downloads, Zuckerberg Says](https://tech.slashdot.org/story/25/03/18/161237/metas-llama-ai-models-hit-1-billion-downloads-zuckerberg-says?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-18, 15:59:27](https://news.ycombinator.com/item?id=43400989) - [Two new PebbleOS watches](https://ericmigi.com/blog/introducing-two-new-pebbleos-watches/)
* [2025-03-18, 15:43:41](https://lobste.rs/s/fnx5fv/recyling_oneplus_6t_into_kubernetes_node) - [Recyling a OnePlus 6T into a Kubernetes Node](https://gabrielsimmer.com/blog/kubernetes-plus-oneplus)
* [2025-03-18, 15:28:00](https://apple.slashdot.org/story/25/03/18/1528219/apple-loses-german-antitrust-appeal-opening-door-for-greater-controls?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Loses German Antitrust Appeal, Opening Door for Greater Controls](https://apple.slashdot.org/story/25/03/18/1528219/apple-loses-german-antitrust-appeal-opening-door-for-greater-controls?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-18, 14:40:00](https://developers.slashdot.org/story/25/03/18/1428226/vibe-coding-is-letting-10-engineers-do-the-work-of-a-team-of-50-to-100-says-yc-ceo?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['Vibe Coding' is Letting 10 Engineers Do the Work of a Team of 50 To 100, Says YC CEO](https://developers.slashdot.org/story/25/03/18/1428226/vibe-coding-is-letting-10-engineers-do-the-work-of-a-team-of-50-to-100-says-yc-ceo?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-18, 14:00:00](https://tech.slashdot.org/story/25/03/18/1117215/google-parent-alphabet-acquires-wiz-for-32-billion?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google Parent Alphabet Acquires Wiz For $32 Billion](https://tech.slashdot.org/story/25/03/18/1117215/google-parent-alphabet-acquires-wiz-for-32-billion?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-18, 13:25:46](https://news.ycombinator.com/item?id=43399190) - [North Korea Launders Billions in Stolen Crypto](https://www.coindesk.com/policy/2025/03/07/here-s-how-north-korea-launders-billions-of-stolen-crypto)
* [2025-03-18, 13:22:42](https://lobste.rs/s/qvnjtz/hexagons_beyond_flexible_responsive) - [Hexagons and Beyond: Flexible, Responsive Grid Patterns, Sans Media Queries (2021)](https://css-tricks.com/hexagons-and-beyond-flexible-responsive-grid-patterns-sans-media-queries/)
* [2025-03-18, 13:07:00](https://soylentnews.org/article.pl?sid=25/03/17/128219&from=rss) - [On the Road to Idiocracy](https://soylentnews.org/article.pl?sid=25/03/17/128219&from=rss)
* [2025-03-18, 13:04:37](https://news.ycombinator.com/item?id=43398968) - [Show HN: I converted my notebook into a searchable database of IT keywords](https://techbook.digital/)
* [2025-03-18, 12:25:52](https://news.ycombinator.com/item?id=43398589) - [Stamina Is a Quiet Advantage](https://kupajo.com/stamina-is-a-quiet-advantage/)
* [2025-03-18, 12:18:29](https://news.ycombinator.com/item?id=43398518) - [Google to buy Wiz for $32B](https://www.reuters.com/technology/cybersecurity/google-agrees-buy-cybersecurity-startup-wiz-32-bln-ft-reports-2025-03-18/)
* [2025-03-18, 11:18:33](https://lobste.rs/s/ogaalf/i_don_t_think_error_handling_is_solved) - [I don't think error handling is a solved problem in language design](https://utcc.utoronto.ca/~cks/space/blog/programming/ErrorHandlingNotSolvedProblem)
* [2025-03-18, 11:17:44](https://news.ycombinator.com/item?id=43398081) - [Show HN: I made a live multiplayer Minesweeper game](https://www.minesweeperpro.com/)
* [2025-03-18, 10:26:48](https://lobste.rs/s/otthd0/society_lost_focus) - [A Society That Lost Focus](https://ploum.net/2024-03-18-lost-focus.html)
* [2025-03-18, 10:20:41](https://lobste.rs/s/jrpdre/pi_5_trillion_digits_2010) - [Pi - 5 Trillion Digits (2010)](http://numberworld.org/misc_runs/pi-5t/details.html)
* [2025-03-18, 10:07:21](https://lobste.rs/s/0sf074/why_i_m_no_longer_talking_architects_about) - [Why I'm No Longer Talking to Architects About Microservices](https://blog.container-solutions.com/why-im-no-longer-talking-to-architects-about-microservices)
* [2025-03-18, 10:00:00](https://tech.slashdot.org/story/25/03/18/0436243/software-startup-rippling-sues-competitor-deel-claiming-a-spy-carried-out-corporate-espionage?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Software Startup Rippling Sues Competitor Deel, Claiming a Spy Carried Out 'Corporate Espionage'](https://tech.slashdot.org/story/25/03/18/0436243/software-startup-rippling-sues-competitor-deel-claiming-a-spy-carried-out-corporate-espionage?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-18, 09:22:39](https://lobste.rs/s/kat2r2/gpt_3_5_latest_models) - [GPT-3.5 and the latest models](https://omarabid.com/gpt3-now)
* [2025-03-18, 08:24:00](https://soylentnews.org/article.pl?sid=25/03/17/126247&from=rss) - [Forget Windows 11, SteamOS for Desktops May be Released Soon](https://soylentnews.org/article.pl?sid=25/03/17/126247&from=rss)
* [2025-03-18, 07:59:50](https://news.ycombinator.com/item?id=43396735) - [Block YouTube ads on AppleTV by decrypting and stripping ads from Profobuf (2022)](https://ericdraken.com/pfsense-decrypt-ad-traffic/)
* [2025-03-18, 07:55:58](https://lobste.rs/s/1o6zda/slack_art_being_busy_without_getting) - [Slack: The Art of Being Busy Without Getting Anything Done](https://matduggan.com/slack-the-art-of-being-busy-without-getting-anything-done/)
* [2025-03-18, 07:37:04](https://lobste.rs/s/0pwhse/nginx_rejects_dark_mode_support_for_error) - [Nginx Rejects Dark Mode Support For Error Pages](https://www.phoronix.com/news/Nginx-Dark-Mode-Errors-Rejected)
* [2025-03-18, 07:13:34](https://lobste.rs/s/sgyyww/stop_using_recommending_react) - [Stop Using and Recommending React](https://blog.lusito.info/stop-using-and-recommending-react.html)
* [2025-03-18, 07:00:00](https://science.slashdot.org/story/25/03/18/0443229/new-form-of-parkinsons-treatment-uses-real-time-deep-brain-stimulation?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [New Form of Parkinson's Treatment Uses Real-Time Deep-Brain Stimulation](https://science.slashdot.org/story/25/03/18/0443229/new-form-of-parkinsons-treatment-uses-real-time-deep-brain-stimulation?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-18, 06:15:22](https://lobste.rs/s/1htmqf/extracting_content_from_lcp_protected) - [Extracting content from an LCP \"protected\" ePub](https://shkspr.mobi/blog/2025/03/towards-extracting-content-from-an-lcp-protected-epub/)
* [2025-03-18, 03:38:00](https://soylentnews.org/article.pl?sid=25/03/17/123238&from=rss) - [Chaos in Gravity - the Quantum Based Magnetic Monopole of Mass?](https://soylentnews.org/article.pl?sid=25/03/17/123238&from=rss)
* [2025-03-18, 03:30:00](https://tech.slashdot.org/story/25/03/18/000234/hollywood-urges-trump-to-not-let-ai-companies-exploit-copyrighted-works?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Hollywood Urges Trump To Not Let AI Companies 'Exploit' Copyrighted Works](https://tech.slashdot.org/story/25/03/18/000234/hollywood-urges-trump-to-not-let-ai-companies-exploit-copyrighted-works?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-18, 02:42:16](https://lobste.rs/s/gqyrxk/can_we_consider_self_promo_discussion_off) - [Can we consider self-promo discussion off-topic?](https://lobste.rs/s/gqyrxk/can_we_consider_self_promo_discussion_off)
* [2025-03-18, 01:52:18](https://news.ycombinator.com/item?id=43394951) - [20 Years of YC / HN](https://vickiboykis.com/2025/03/17/20-years-of-yc/)
* [2025-03-18, 01:25:00](https://hardware.slashdot.org/story/25/03/17/2350228/byd-unveils-new-super-charging-ev-tech-with-peak-speeds-of-1000-kw?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [BYD Unveils New Super-Charging EV Tech With Peak Speeds of 1,000 kW](https://hardware.slashdot.org/story/25/03/17/2350228/byd-unveils-new-super-charging-ev-tech-with-peak-speeds-of-1000-kw?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-18, 00:45:00](https://hardware.slashdot.org/story/25/03/17/2129257/google-is-switching-legacy-g-suite-users-to-pooled-workspace-storage?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google Is Switching Legacy G Suite Users To Pooled Workspace Storage](https://hardware.slashdot.org/story/25/03/17/2129257/google-is-switching-legacy-g-suite-users-to-pooled-workspace-storage?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-18, 00:10:46](https://lobste.rs/s/rm7jdg/offline_pki_using_3_yubikeys_arm_single) - [Offline PKI using 3 YubiKeys and an ARM single board computer](https://vincent.bernat.ch/en/blog/2025-offline-pki-yubikeys)
* [2025-03-18, 00:02:00](https://slashdot.org/story/25/03/17/2122232/roku-tests-autoplaying-ads-loading-before-the-home-screen?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Roku Tests Autoplaying Ads Loading Before the Home Screen](https://slashdot.org/story/25/03/17/2122232/roku-tests-autoplaying-ads-loading-before-the-home-screen?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-17, 23:35:11](https://lobste.rs/s/jtk4tx/gimp_3_0_released) - [GIMP 3.0 Released](https://www.gimp.org/news/2025/03/16/gimp-3-0-released/)
* [2025-03-17, 23:20:00](https://tech.slashdot.org/story/25/03/17/2117212/top-broadband-official-exits-commerce-department-with-warning-about-starlink?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Top Broadband Official Exits Commerce Department With Warning About Starlink](https://tech.slashdot.org/story/25/03/17/2117212/top-broadband-official-exits-commerce-department-with-warning-about-starlink?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-17, 22:53:00](https://soylentnews.org/article.pl?sid=25/03/15/1626204&from=rss) - [OpenAI Wants All The Data And For US Law To Apply Everywhere](https://soylentnews.org/article.pl?sid=25/03/15/1626204&from=rss)
* [2025-03-17, 22:40:00](https://tech.slashdot.org/story/25/03/17/215231/alphabet-back-in-talks-to-buy-wiz-for-30-billion?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Alphabet Back In Talks To Buy Wiz For $30 Billion](https://tech.slashdot.org/story/25/03/17/215231/alphabet-back-in-talks-to-buy-wiz-for-30-billion?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-17, 20:10:57](https://lobste.rs/s/4guing/after_47_years_openvms_gets_package) - [After 47 years, OpenVMS gets a package manager (VSP)](https://raymii.org/s/blog/After_47_years_OpenVMS_gets_a_package_manager_VSP.html)
* [2025-03-17, 19:23:08](https://lobste.rs/s/hqxvb6/atrocious_state_binary_compatibility_on) - [The Atrocious State Of Binary Compatibility on Linux and How To Address It](https://jangafx.com/insights/linux-binary-compatibility)
* [2025-03-17, 18:24:49](https://lobste.rs/s/tzjxrc/password_reuse_is_rampant_nearly_half) - [Password reuse is rampant: nearly half of observed user logins are compromised](https://blog.cloudflare.com/password-reuse-rampant-half-user-logins-compromised/)
* [2025-03-17, 18:11:00](https://soylentnews.org/article.pl?sid=25/03/15/1622220&from=rss) - [Six Weeks of CloudFlare Stalling; Still Blocking Niche Browsers](https://soylentnews.org/article.pl?sid=25/03/15/1622220&from=rss)
* [2025-03-17, 17:36:20](https://lobste.rs/s/s5p1ng/announcing_snix) - [Announcing Snix](https://snix.dev/blog/announcing-snix/)
* [2025-03-17, 17:07:43](https://lobste.rs/s/7iel5b/rhombus_programming_language) - [The Rhombus Programming Language](https://rhombus-lang.org)
* [2025-03-17, 15:25:49](https://lobste.rs/s/zmreeg/introducing_intel_advanced_performance) - [Introducing Intel® Advanced Performance Extensions (Intel® APX)](https://www.intel.com/content/www/us/en/developer/articles/technical/advanced-performance-extensions-apx.html)
* [2025-03-17, 15:10:25](https://lobste.rs/s/r8mdl9/http_3_is_everywhere_nowhere) - [HTTP/3 is everywhere but nowhere](https://httptoolkit.com/blog/http3-quic-open-source-support-nowhere/)
* [2025-03-17, 13:23:00](https://soylentnews.org/article.pl?sid=25/03/15/1619204&from=rss) - [NIST Selects HQC as Fifth Algorithm for Post-Quantum Encryption](https://soylentnews.org/article.pl?sid=25/03/15/1619204&from=rss)
* [2025-03-17, 13:03:52](https://news.ycombinator.com/item?id=43388133) - [Rippling sues Deel over spying](https://twitter.com/parkerconrad/status/1901615179718406276)
* [2025-03-17, 11:10:11](https://lobste.rs/s/dmuad3/mitigating_sourcehut_s_partial_outage) - [Mitigating SourceHut's partial outage caused by aggressive crawlers](https://status.sr.ht/issues/2025-03-17-git.sr.ht-llms/)
* [2025-03-17, 08:36:00](https://soylentnews.org/article.pl?sid=25/03/15/1617256&from=rss) - [World's Smallest Microcontroller](https://soylentnews.org/article.pl?sid=25/03/15/1617256&from=rss)
* [2025-03-17, 03:50:00](https://soylentnews.org/article.pl?sid=25/03/15/1220208&from=rss) - [ESA Cuts the Ribbon at 34,000-Core HPC Center](https://soylentnews.org/article.pl?sid=25/03/15/1220208&from=rss)
* [2025-03-16, 23:07:00](https://soylentnews.org/article.pl?sid=25/03/15/1540201&from=rss) - [A New Age for Geothermal](https://soylentnews.org/article.pl?sid=25/03/15/1540201&from=rss)
* [2025-03-16, 18:20:00](https://soylentnews.org/article.pl?sid=25/03/15/141211&from=rss) - [Apple Encrypted Data Row Case Begins in Secret](https://soylentnews.org/article.pl?sid=25/03/15/141211&from=rss)
* [2025-03-16, 13:34:00](https://soylentnews.org/article.pl?sid=25/03/15/1357206&from=rss) - [5 Years After Covid-19 Became a Pandemic, Are We Ready for What's Next?](https://soylentnews.org/article.pl?sid=25/03/15/1357206&from=rss)
* [2025-03-16, 12:42:02](https://news.ycombinator.com/item?id=43378571) - [Rust on the RP2350 (2024)](https://thejpster.org.uk/blog/blog-2024-08-08/)
* [2025-03-16, 08:46:00](https://soylentnews.org/article.pl?sid=25/03/15/1228252&from=rss) - [Sidewinder Advanced Persistent Threat (APT) Shifts to Targeting of Nuclear, Maritime Orgs](https://soylentnews.org/article.pl?sid=25/03/15/1228252&from=rss)
* [2025-03-16, 08:03:36](https://news.ycombinator.com/item?id=43377533) - [The race is on to build the most complex machine](https://www.economist.com/science-and-technology/2025/03/12/the-race-is-on-to-build-the-worlds-most-complex-machine)
* [2025-03-16, 04:01:00](https://soylentnews.org/article.pl?sid=25/03/15/1558246&from=rss) - [SpaceX Launches Astronauts for Long-Awaited International Space Station Crew Swap](https://soylentnews.org/article.pl?sid=25/03/15/1558246&from=rss)
* [2025-03-15, 23:17:00](https://soylentnews.org/article.pl?sid=25/03/14/1938229&from=rss) - [No Project is an Island: Why You Need SBOMs and Dependency Management](https://soylentnews.org/article.pl?sid=25/03/14/1938229&from=rss)
* [2025-03-15, 18:38:19](https://news.ycombinator.com/item?id=43374369) - [Extracting DNA from the air – DNA evidence of human occupancy in indoor premises](https://www.nature.com/articles/s41598-023-46151-7)
* [2025-03-15, 18:33:00](https://soylentnews.org/article.pl?sid=25/03/14/1933241&from=rss) - [How a Rapidly Growing Population of Crocs Has Been Impacting Northern Territories Ecosystem](https://soylentnews.org/article.pl?sid=25/03/14/1933241&from=rss)
* [2025-03-15, 13:48:00](https://soylentnews.org/politics/article.pl?sid=25/03/14/1930253&from=rss) - [Judge Calls Doge Firings A \"Sham\", Orders Thousands Of Workers To Be Reinstated Immediately](https://soylentnews.org/politics/article.pl?sid=25/03/14/1930253&from=rss)
* [2025-03-15, 09:07:00](https://soylentnews.org/article.pl?sid=25/03/14/1113259&from=rss) - [Bad News for Low Orbit Satellites: Earth's Thermosphere is Shrinking](https://soylentnews.org/article.pl?sid=25/03/14/1113259&from=rss)
* [2025-03-15, 04:22:00](https://soylentnews.org/article.pl?sid=25/03/14/115251&from=rss) - [AMD's Zen 6-Based Desktop Processors May Feature Up to 24 Cores](https://soylentnews.org/article.pl?sid=25/03/14/115251&from=rss)
* [2025-03-15, 00:42:22](https://news.ycombinator.com/item?id=43368863) - [SheepIt Render Farm server code goes open source](https://gitlab.com/sheepitrenderfarm)
* [2025-03-14, 23:34:00](https://soylentnews.org/article.pl?sid=25/03/14/0056219&from=rss) - [The Cheapest Way to Supercharge America's Power Grid](https://soylentnews.org/article.pl?sid=25/03/14/0056219&from=rss)
* [2025-03-14, 21:18:55](https://news.ycombinator.com/item?id=43367401) - [The Dark Crystal: Age of Resistance Is a Stone-Cold Masterpiece](https://gizmodo.com/reminder-the-dark-crystal-age-of-resistance-is-a-stone-cold-masterpiece-2000574613)
* [2025-03-14, 18:47:00](https://soylentnews.org/article.pl?sid=25/03/13/1729224&from=rss) - [Humans Have a Third Set of Teeth: Scientists Discover Medicine to Grow Them](https://soylentnews.org/article.pl?sid=25/03/13/1729224&from=rss)
* [2025-03-14, 14:01:00](https://soylentnews.org/article.pl?sid=25/03/13/150217&from=rss) - [Why Attention Limitations Let Idea Thieves Thrive in Workplaces](https://soylentnews.org/article.pl?sid=25/03/13/150217&from=rss)
* [2025-03-14, 13:48:16](https://news.ycombinator.com/item?id=43362616) - [Sesame CSM: A Conversational Speech Generation Model](https://github.com/SesameAILabs/csm)
* [2025-03-14, 10:51:01](https://news.ycombinator.com/item?id=43361333) - [Building AI agents to query your databases](https://blog.dust.tt/spreadsheets-databases-and-beyond-creating-a-universal-ai-query-layer/)
* [2025-03-14, 09:14:00](https://soylentnews.org/article.pl?sid=25/03/13/1011234&from=rss) - [General Fusion Fires Up its Newest Steampunk Fusion Reactor](https://soylentnews.org/article.pl?sid=25/03/13/1011234&from=rss)
* [2025-03-14, 04:29:00](https://soylentnews.org/article.pl?sid=25/03/12/190247&from=rss) - [This ‘Dune’ Isn't Fiction. It's the Longest Conveyer Belt in the US and Moving Sand in Texas](https://soylentnews.org/article.pl?sid=25/03/12/190247&from=rss)
