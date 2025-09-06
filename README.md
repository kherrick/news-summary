# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Software

* [Wayland. (Budgie Desktop, 2023)](https://buddiesofbudgie.org/blog/wayland) - Wayland's integration into the Budgie Desktop in 2023 represents advanced desktop compositing capabilities.

* [Leptos](https://leptos.dev/) - Leptos introduces a new Rust-based reactive web framework.

* [GLM 4.5 with Claude Code](https://docs.z.ai/guides/llm/glm-4.5) - GLM 4.5 enhances AI functionality with Claude Code integration.

* [MentraOS – open-source Smart glasses OS](https://github.com/Mentra-Community/MentraOS) - Modify and enhance smart glasses with the launch of the open-source MentraOS.

* [Ray Tracing in One Weekend](https://raytracing.github.io/books/RayTracingInOneWeekend.html) - Learn the fundamentals of creating high-quality rendered 3D images with this ray tracing guide.

* [I ditched Docker for Podman](https://codesmash.dev/why-i-ditched-docker-for-podman-and-you-should-too) - The author details their migration from Docker to Podman for containerization.

## Historical and Scientific Advances

* [Oldest recorded transaction](https://avi.im/blag/2025/oldest-txn/) - Explore the history behind what’s believed to be the oldest recorded non-verbal agreement.

* [China Likely to Land on Moon Before US Does Again](https://soylentnews.org/article.pl?sid=25/09/05/0536245&from=rss) - Analysts suggest China may outpace the US in lunar exploration.

* [New Hollow-Core Fiber Outperforms Glass, Pushing Data Closer to Light Speed](https://soylentnews.org/article.pl?sid=25/09/05/0527230&from=rss) - Cutting-edge fiber technology brings data transfer closer to theoretical limits.

* [Scientists Tap 'Secret' Fresh Water Under the Ocean, Raising Hopes For a Thirsty World](https://news.slashdot.org/story/25/09/05/160234/scientists-tap-secret-fresh-water-under-the-ocean-raising-hopes-for-a-thirsty-world?utm_source=rss1.0mainlinkanon&utm_medium=feed) - New discoveries may offer a solution to global water shortages.

* [Stressed Ice Generates Electricity, Researchers Find](https://soylentnews.org/article.pl?sid=25/09/04/0430216&from=rss) - Researchers uncover a link between stressed ice and electricity generation potential.

## AI and Machine Learning

* [DuckDuckGo founder: AI surveillance should be banned](https://gabrielweinberg.com/p/ai-surveillance-should-be-banned) - The DuckDuckGo founder argues against surveillance-based AI technologies.

* [A Software Development Methodology for Disciplined LLM Collaboration](https://github.com/Varietyz/Disciplined-AI-Software-Development) - A guide for leveraging Large Language Models in software projects.

* [Anthropic agrees to pay $1.5B to settle lawsuit with book authors](https://www.nytimes.com/2025/09/05/technology/anthropic-settlement-copyright-ai.html?unlocked_article_code=1.jk8.bTTt.Zir9wmtPaTp2&smid=url-share) - Landmark copyright settlement addresses ethical issues surrounding AI training.

* [Geoffrey Hinton: 'AI Will Make a Few People Much Richer and Most People Poorer'](https://slashdot.org/story/25/09/05/1428223/geoffrey-hinton-ai-will-make-a-few-people-much-richer-and-most-people-poorer?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Pioneering AI researcher Geoffrey Hinton reflects on economic disparity brought by AI advances.

## Cybersecurity and Privacy

* [We Hacked Burger King: How Auth Bypass Led to Drive-Thru Audio Surveillance](https://bobdahacker.com/blog/rbi-hacked-drive-thrus/) - A dive into how a vulnerability compromised privacy at fast-food drive-thrus.

* [Let us git rid of it, angry GitHub users say of forced Copilot features](https://www.theregister.com/2025/09/05/github_copilot_complaints/) - Backlash emerges against GitHub's Copilot features.

* [Rug pulls, forks, and open-source feudalism](https://lwn.net/SubscriberLink/1036465/e80ebbc4cee39bfb/) - Examines the challenges of open-source sustainability in decentralized systems.

* [My Own DNS Server at Home – Part 1: IPv4](https://jan.wildeboer.net/2025/08/My-DNS-Part-1/) - A beginner’s guide to setting up a personal DNS server for enhanced network control.

* [Scammers Will Try to Trick You Into Filling Out Google Forms. Don’t Fall for It](https://soylentnews.org/article.pl?sid=25/09/04/048238&from=rss) - Warnings of emerging phishing tactics via fake Google Forms.

## Society and Ethics

* [996 – There is cost to your lifestyle](https://lucumr.pocoo.org/2025/9/4/996/) - Reflections on the detrimental effects of the '996' work culture.

* [The Fight Against Labeling Long-Term Streaming Rentals as “Purchases” You “Buy”](https://soylentnews.org/article.pl?sid=25/09/05/0259211&from=rss) - Controversy over misleading ownership descriptions in digital rentals.

* [Making a font of my handwriting](https://chameth.com/making-a-font-of-my-handwriting/) - A personal journey to digitize handwriting, demonstrating creativity and individuality.

* [AI in Schools Isn’t Progress — It’s a Sign of How Far We’ve Strayed from the Purpose of Education.](https://soylentnews.org/article.pl?sid=25/09/01/0018253&from=rss) - A critique of the rapid adoption of AI in educational environments.

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

* [2025-09-06, 14:35:48](https://lobste.rs/s/9jwjca/oldest_recorded_transaction) - [Oldest recorded transaction](https://avi.im/blag/2025/oldest-txn/)
* [2025-09-06, 14:34:55](https://news.ycombinator.com/item?id=45149626) - [Oldest Recorded Transaction](https://avi.im/blag/2025/oldest-txn/)
* [2025-09-06, 14:29:00](https://lobste.rs/s/tfpl4l/odin_does_have_undefined_behavior) - [Odin does have undefined behavior](https://www.youtube.com/watch?v=k8iCkbbBHyg)
* [2025-09-06, 13:59:51](https://lobste.rs/s/my1p2k/formality_on_demand) - [Formality on demand](https://www.inkandswitch.com/ink/notes/formality-on-demand/)
* [2025-09-06, 13:52:34](https://news.ycombinator.com/item?id=45149281) - [DuckDuckGo founder: AI surveillance should be banned](https://gabrielweinberg.com/p/ai-surveillance-should-be-banned)
* [2025-09-06, 13:32:18](https://lobste.rs/s/iajqdh/wayland_budgie_desktop_2023) - [Wayland. (Budgie Desktop, 2023)](https://buddiesofbudgie.org/blog/wayland)
* [2025-09-06, 13:29:41](https://lobste.rs/s/o38gzs/996_there_is_cost_your_lifestyle) - [996 – There is cost to your lifestyle](https://lucumr.pocoo.org/2025/9/4/996/)
* [2025-09-06, 13:20:57](https://news.ycombinator.com/item?id=45149049) - [996](https://lucumr.pocoo.org/2025/9/4/996/)
* [2025-09-06, 13:04:51](https://news.ycombinator.com/item?id=45148944) - [We Hacked Burger King: How Auth Bypass Led to Drive-Thru Audio Surveillance](https://bobdahacker.com/blog/rbi-hacked-drive-thrus/)
* [2025-09-06, 13:02:47](https://lobste.rs/s/fsczxj/patterns_vs_patterns) - [Patterns vs. \&quot;Patterns\&quot;](https://perl.plover.com/classes/design/samples/slide012a.html)
* [2025-09-06, 12:40:48](https://lobste.rs/s/zml5qc/day_return_became_enter) - [The day Return became Enter](https://aresluna.org/the-day-return-became-enter/)
* [2025-09-06, 12:13:00](https://soylentnews.org/article.pl?sid=25/09/05/0536245&amp;from=rss) - [China Likely to Land on Moon Before US Does Again](https://soylentnews.org/article.pl?sid=25/09/05/0536245&amp;from=rss)
* [2025-09-06, 10:59:12](https://news.ycombinator.com/item?id=45148237) - [Qwen3 30B A3B Hits 13 token/s on 4xRaspberry Pi 5](https://github.com/b4rtaz/distributed-llama/discussions/255)
* [2025-09-06, 10:55:33](https://lobste.rs/s/t8fc8a/unexplanations_relational_algebra_is) - [Unexplanations: relational algebra is math (2024)](https://www.scattered-thoughts.net/writing/unexplanations-relational-algebra-is-math/)
* [2025-09-06, 10:47:57](https://news.ycombinator.com/item?id=45148180) - [A Software Development Methodology for Disciplined LLM Collaboration](https://github.com/Varietyz/Disciplined-AI-Software-Development)
* [2025-09-06, 10:44:07](https://news.ycombinator.com/item?id=45148167) - [Let us git rid of it, angry GitHub users say of forced Copilot features](https://www.theregister.com/2025/09/05/github_copilot_complaints/)
* [2025-09-06, 07:29:00](https://soylentnews.org/article.pl?sid=25/09/05/0527230&amp;from=rss) - [New Hollow-Core Fiber Outperforms Glass, Pushing Data Closer to Light Speed](https://soylentnews.org/article.pl?sid=25/09/05/0527230&amp;from=rss)
* [2025-09-06, 05:59:39](https://news.ycombinator.com/item?id=45146967) - [Rug pulls, forks, and open-source feudalism](https://lwn.net/SubscriberLink/1036465/e80ebbc4cee39bfb/)
* [2025-09-06, 04:08:52](https://lobste.rs/s/m5f6ww/leptos) - [Leptos](https://leptos.dev/)
* [2025-09-06, 02:45:00](https://soylentnews.org/article.pl?sid=25/09/05/0259211&amp;from=rss) - [The Fight Against Labeling Long-Term Streaming Rentals as “Purchases” You “Buy”](https://soylentnews.org/article.pl?sid=25/09/05/0259211&amp;from=rss)
* [2025-09-06, 01:39:01](https://news.ycombinator.com/item?id=45145794) - [Developing a Space Flight Simulator in Clojure](https://www.wedesoft.de/software/2025/09/05/clojure-game/)
* [2025-09-06, 01:37:54](https://lobste.rs/s/sxamda/developing_space_flight_simulator) - [Developing a Space Flight Simulator in Clojure](https://www.wedesoft.de/software/2025/09/05/clojure-game/)
* [2025-09-06, 01:25:00](https://hardware.slashdot.org/story/25/09/05/2319259/apples-vision-pro-gaining-traction-in-some-niches-of-business?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple&apos;s Vision Pro Gaining Traction in Some Niches of Business](https://hardware.slashdot.org/story/25/09/05/2319259/apples-vision-pro-gaining-traction-in-some-niches-of-business?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-06, 00:45:08](https://news.ycombinator.com/item?id=45145457) - [GLM 4.5 with Claude Code](https://docs.z.ai/guides/llm/glm-4.5)
* [2025-09-06, 00:45:00](https://hardware.slashdot.org/story/25/09/05/2126200/americas-first-sodium-ion-battery-manufacturer-ceases-operations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America&apos;s First Sodium-Ion Battery Manufacturer Ceases Operations](https://hardware.slashdot.org/story/25/09/05/2126200/americas-first-sodium-ion-battery-manufacturer-ceases-operations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-06, 00:02:00](https://tech.slashdot.org/story/25/09/05/1957250/canada-delaying-plan-to-force-automakers-to-hit-evs-sales-targets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Canada Delaying Plan To Force Automakers To Hit EVs Sales Targets](https://tech.slashdot.org/story/25/09/05/1957250/canada-delaying-plan-to-force-automakers-to-hit-evs-sales-targets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 23:23:55](https://news.ycombinator.com/item?id=45144900) - [Tesla changes meaning of &apos;Full Self-Driving&apos;, gives up on promise of autonomy](https://electrek.co/2025/09/05/tesla-changes-meaning-full-self-driving-give-up-promise-autonomy/)
* [2025-09-05, 23:20:00](https://news.slashdot.org/story/25/09/05/1859232/trump-to-impose-tariffs-on-semiconductor-imports-from-firms-not-moving-production-to-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump To Impose Tariffs On Semiconductor Imports From Firms Not Moving Production To US](https://news.slashdot.org/story/25/09/05/1859232/trump-to-impose-tariffs-on-semiconductor-imports-from-firms-not-moving-production-to-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 23:07:19](https://lobste.rs/s/wqsxrn/natural_transformations_as_basis) - [Natural transformations as a basis of control](https://muratkasimov.art/Ya/Articles/Natural-transformation-as-a-basis-of-control)
* [2025-09-05, 22:40:00](https://news.slashdot.org/story/25/09/05/199223/firefox-ending-32-bit-linux-support-next-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Firefox Ending 32-bit Linux Support Next Year](https://news.slashdot.org/story/25/09/05/199223/firefox-ending-32-bit-linux-support-next-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 22:20:37](https://news.ycombinator.com/item?id=45144337) - [The Universe Within 12.5 Light Years](http://www.atlasoftheuniverse.com/12lys.html)
* [2025-09-05, 22:00:00](https://it.slashdot.org/story/25/09/05/196218/boffins-build-automated-android-bug-hunting-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Boffins Build Automated Android Bug Hunting System](https://it.slashdot.org/story/25/09/05/196218/boffins-build-automated-android-bug-hunting-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 21:57:00](https://soylentnews.org/article.pl?sid=25/09/04/155234&amp;from=rss) - [M365 Copilot Fails to Up Productivity in UK Government Trial](https://soylentnews.org/article.pl?sid=25/09/04/155234&amp;from=rss)
* [2025-09-05, 21:20:00](https://yro.slashdot.org/story/25/09/05/1941245/anthropic-agrees-to-pay-record-15-billion-to-settle-authors-ai-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Agrees To Pay Record $1.5 Billion To Settle Authors&apos; AI Lawsuit](https://yro.slashdot.org/story/25/09/05/1941245/anthropic-agrees-to-pay-record-15-billion-to-settle-authors-ai-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 21:05:40](https://lobste.rs/s/elgdzk/bringing_restartable_sequences_out) - [Bringing restartable sequences out of the niche](https://lwn.net/Articles/1033955/)
* [2025-09-05, 20:41:00](https://news.slashdot.org/story/25/09/05/160234/scientists-tap-secret-fresh-water-under-the-ocean-raising-hopes-for-a-thirsty-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Tap &apos;Secret&apos; Fresh Water Under the Ocean, Raising Hopes For a Thirsty World](https://news.slashdot.org/story/25/09/05/160234/scientists-tap-secret-fresh-water-under-the-ocean-raising-hopes-for-a-thirsty-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 20:01:00](https://it.slashdot.org/story/25/09/05/1628256/microsoft-365-personal-is-now-free-for-us-college-students-for-a-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft 365 Personal is Now Free For US College Students For a Year](https://it.slashdot.org/story/25/09/05/1628256/microsoft-365-personal-is-now-free-for-us-college-students-for-a-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 19:52:45](https://news.ycombinator.com/item?id=45142885) - [Anthropic agrees to pay $1.5B to settle lawsuit with book authors](https://www.nytimes.com/2025/09/05/technology/anthropic-settlement-copyright-ai.html?unlocked_article_code=1.jk8.bTTt.Zir9wmtPaTp2&amp;smid=url-share)
* [2025-09-05, 19:20:00](https://news.slashdot.org/story/25/09/05/1543244/rising-river-temperatures-threaten-pariss-water-based-building-cooling-network?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rising River Temperatures Threaten Paris&apos;s Water-Based Building Cooling Network](https://news.slashdot.org/story/25/09/05/1543244/rising-river-temperatures-threaten-pariss-water-based-building-cooling-network?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 19:08:49](https://news.ycombinator.com/item?id=45142397) - [My Own DNS Server at Home – Part 1: IPv4](https://jan.wildeboer.net/2025/08/My-DNS-Part-1/)
* [2025-09-05, 18:41:00](https://news.slashdot.org/story/25/09/05/1418221/columbia-tries-using-ai-to-cool-off-student-tensions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Columbia Tries Using AI To Cool Off Student Tensions](https://news.slashdot.org/story/25/09/05/1418221/columbia-tries-using-ai-to-cool-off-student-tensions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 18:06:33](https://news.ycombinator.com/item?id=45141636) - [Making a font of my handwriting](https://chameth.com/making-a-font-of-my-handwriting/)
* [2025-09-05, 18:01:00](https://slashdot.org/story/25/09/05/0535228/anthropic-clamps-down-on-ai-services-for-chinese-owned-firms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Clamps Down on AI Services for Chinese-Owned Firms](https://slashdot.org/story/25/09/05/0535228/anthropic-clamps-down-on-ai-services-for-chinese-owned-firms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 17:20:00](https://news.slashdot.org/story/25/09/05/1436209/public-strongly-backs-aim-of-30-of-land-and-sea-set-aside-for-nature-poll-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Public Strongly Backs Aim of 30% of Land and Sea Set Aside For Nature, Poll Finds](https://news.slashdot.org/story/25/09/05/1436209/public-strongly-backs-aim-of-30-of-land-and-sea-set-aside-for-nature-poll-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 17:13:00](https://soylentnews.org/article.pl?sid=25/09/04/150221&amp;from=rss) - [Nvidia Blasts Proposed US Bill That Would Force It to Give American Buyers First Option](https://soylentnews.org/article.pl?sid=25/09/04/150221&amp;from=rss)
* [2025-09-05, 16:44:43](https://lobste.rs/s/felr3h/ray_tracing_one_weekend) - [Ray Tracing in One Weekend](https://raytracing.github.io/books/RayTracingInOneWeekend.html)
* [2025-09-05, 16:40:00](https://slashdot.org/story/25/09/05/1428223/geoffrey-hinton-ai-will-make-a-few-people-much-richer-and-most-people-poorer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Geoffrey Hinton: &apos;AI Will Make a Few People Much Richer and Most People Poorer&apos;](https://slashdot.org/story/25/09/05/1428223/geoffrey-hinton-ai-will-make-a-few-people-much-richer-and-most-people-poorer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 16:37:55](https://lobste.rs/s/ks2nbj/icfp_contest_2025) - [ICFP contest 2025](https://icfpcontest2025.github.io/)
* [2025-09-05, 16:25:48](https://news.ycombinator.com/item?id=45140381) - [MentraOS – open-source Smart glasses OS](https://github.com/Mentra-Community/MentraOS)
* [2025-09-05, 16:00:00](https://tech.slashdot.org/story/25/09/05/1527251/google-hit-with-345-billion-eu-antitrust-fine-over-adtech-practices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Hit With $3.45 Billion EU Antitrust Fine Over Adtech Practices](https://tech.slashdot.org/story/25/09/05/1527251/google-hit-with-345-billion-eu-antitrust-fine-over-adtech-practices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 15:25:10](https://news.ycombinator.com/item?id=45139656) - [Protobuffers Are Wrong (2018)](https://reasonablypolymorphic.com/blog/protos-are-wrong/)
* [2025-09-05, 14:57:44](https://lobste.rs/s/o0x7rb/your_mouse_free_setups) - [Your mouse-free setups](https://lobste.rs/s/o0x7rb/your_mouse_free_setups)
* [2025-09-05, 14:34:57](https://news.ycombinator.com/item?id=45139088) - [Purposeful animations](https://emilkowal.ski/ui/you-dont-need-animations)
* [2025-09-05, 14:15:31](https://lobste.rs/s/ciqk7x/use_singular_nouns_for_database_table) - [Use singular nouns for database table names](https://www.teamten.com/lawrence/programming/use-singular-nouns-for-database-table-names.html)
* [2025-09-05, 13:54:16](https://lobste.rs/s/cwnytv/basecamp_campfire_is_now_open_source) - [Basecamp Campfire is now open source](https://github.com/basecamp/once-campfire)
* [2025-09-05, 13:42:44](https://lobste.rs/s/m6vk7v/stelvio_aws_for_python_devs_made_simple) - [stelvio: AWS for Python devs - made simple](https://github.com/michal-stlv/stelvio)
* [2025-09-05, 12:28:00](https://soylentnews.org/article.pl?sid=25/09/04/0430216&amp;from=rss) - [Stressed Ice Generates Electricity, Researchers Find](https://soylentnews.org/article.pl?sid=25/09/04/0430216&amp;from=rss)
* [2025-09-05, 11:56:59](https://news.ycombinator.com/item?id=45137525) - [I ditched Docker for Podman](https://codesmash.dev/why-i-ditched-docker-for-podman-and-you-should-too)
* [2025-09-05, 11:33:48](https://news.ycombinator.com/item?id=45137373) - [ML needs a new programming language – Interview with Chris Lattner](https://signalsandthreads.com/why-ml-needs-a-new-programming-language/)
* [2025-09-05, 08:19:28](https://lobste.rs/s/d30ska/nixos_is_endgame_distrohopping) - [NixOS is the endgame of distrohopping](https://joshblais.com/blog/nixos-is-the-endgame-of-distrohopping/)
* [2025-09-05, 08:00:34](https://lobste.rs/s/noazra/capitalization_initialisms_2009) - [Capitalization of Initialisms (2009)](https://www.teamten.com/lawrence/writings/capitalization_of_initialisms.html)
* [2025-09-05, 07:57:21](https://news.ycombinator.com/item?id=45136103) - [I bought the cheapest EV, a used Nissan Leaf](https://www.jeffgeerling.com/blog/2025/i-bought-cheapest-ev-used-nissan-leaf)
* [2025-09-05, 07:47:00](https://soylentnews.org/article.pl?sid=25/09/04/0419219&amp;from=rss) - [Google Won&apos;t Have to Sell Chrome, Judge Rules](https://soylentnews.org/article.pl?sid=25/09/04/0419219&amp;from=rss)
* [2025-09-05, 06:42:05](https://lobste.rs/s/rylewy/sql_needed_structure) - [SQL needed structure](https://www.scattered-thoughts.net/writing/sql-needed-structure/)
* [2025-09-05, 03:50:14](https://lobste.rs/s/d9jbh9/dealing_with_cancel_safety_async_rust) - [Dealing with cancel safety in async Rust](https://rfd.shared.oxide.computer/rfd/400)
* [2025-09-05, 03:47:27](https://lobste.rs/s/q7b1gm/fil_s_unbelievable_garbage_collector) - [Fil&apos;s Unbelievable Garbage Collector](https://fil-c.org/fugc)
* [2025-09-05, 03:03:00](https://soylentnews.org/article.pl?sid=25/09/04/0414246&amp;from=rss) - [U.S. Gov&apos;t Revokes TSMC&apos;s Authorization to Ship Tools to its Fabs in China](https://soylentnews.org/article.pl?sid=25/09/04/0414246&amp;from=rss)
* [2025-09-04, 22:16:00](https://soylentnews.org/article.pl?sid=25/09/04/048238&amp;from=rss) - [Scammers Will Try to Trick You Into Filling Out Google Forms. Don’t Fall for It](https://soylentnews.org/article.pl?sid=25/09/04/048238&amp;from=rss)
* [2025-09-04, 21:46:00](https://lobste.rs/s/gkzmfy/let_s_rename_vibecoding_tag_llms) - [Let&apos;s rename the \&quot;vibecoding\&quot; tag to \&quot;llms\&quot;](https://lobste.rs/s/gkzmfy/let_s_rename_vibecoding_tag_llms)
* [2025-09-04, 18:29:48](https://lobste.rs/s/b6ipnz/you_don_t_need_animations) - [You Don&apos;t Need Animations](https://emilkowal.ski/ui/you-dont-need-animations)
* [2025-09-04, 17:29:00](https://soylentnews.org/article.pl?sid=25/09/04/0350224&amp;from=rss) - [Passkeys Are Incompatible With Open-Source Software](https://soylentnews.org/article.pl?sid=25/09/04/0350224&amp;from=rss)
* [2025-09-04, 12:44:00](https://soylentnews.org/article.pl?sid=25/09/03/0226210&amp;from=rss) - [Get Ready for Plastic Blood](https://soylentnews.org/article.pl?sid=25/09/03/0226210&amp;from=rss)
* [2025-09-04, 07:57:00](https://soylentnews.org/article.pl?sid=25/09/03/0223245&amp;from=rss) - [Nearly 40% of Nvidia&apos;s Revenue Tied to Two Mystery Customers, Filing Shows](https://soylentnews.org/article.pl?sid=25/09/03/0223245&amp;from=rss)
* [2025-09-04, 03:14:00](https://soylentnews.org/article.pl?sid=25/09/03/0216228&amp;from=rss) - [People Who Believe in Conspiracy Theories Process Information Differently at the Neural Level](https://soylentnews.org/article.pl?sid=25/09/03/0216228&amp;from=rss)
* [2025-09-03, 23:37:54](https://news.ycombinator.com/item?id=45121581) - [Novel hollow-core optical fiber transmits data faster with record low loss](https://phys.org/news/2025-09-hollow-core-optical-fiber-transmits.html)
* [2025-09-03, 22:27:00](https://soylentnews.org/article.pl?sid=25/09/02/192213&amp;from=rss) - [CRLite: Fast, Private, and Comprehensive Certificate Revocation Checking in Firefox](https://soylentnews.org/article.pl?sid=25/09/02/192213&amp;from=rss)
* [2025-09-03, 21:53:31](https://news.ycombinator.com/item?id=45120786) - [What Is the Fourier Transform?](https://www.quantamagazine.org/what-is-the-fourier-transform-20250903/)
* [2025-09-03, 17:44:00](https://soylentnews.org/article.pl?sid=25/09/02/1855227&amp;from=rss) - [Microsoft Can&apos;t Guarantee Data Sovereignty – OVHcloud Says &apos;We Told You So&apos;](https://soylentnews.org/article.pl?sid=25/09/02/1855227&amp;from=rss)
* [2025-09-03, 13:01:00](https://soylentnews.org/article.pl?sid=25/09/02/1851257&amp;from=rss) - [Fascinating New Psychology Research Shows How Music Shapes Imagination](https://soylentnews.org/article.pl?sid=25/09/02/1851257&amp;from=rss)
* [2025-09-03, 11:27:56](https://news.ycombinator.com/item?id=45114498) - [Video Game Blurs (and how the best one works)](https://blog.frost.kiwi/dual-kawase/)
* [2025-09-03, 10:26:00](https://soylentnews.org/article.pl?sid=25/09/03/0230242&amp;from=rss) - [We Fed People a Milkshake With 130g of Fat to See What It Did to Their Brains](https://soylentnews.org/article.pl?sid=25/09/03/0230242&amp;from=rss)
* [2025-09-03, 08:41:06](https://news.ycombinator.com/item?id=45113531) - [Baby&apos;s first type checker](https://austinhenley.com/blog/babytypechecker.html)
* [2025-09-03, 08:17:00](https://soylentnews.org/article.pl?sid=25/09/02/1848251&amp;from=rss) - [DUPE - China Turns on Giant Neutrino Detector](https://soylentnews.org/article.pl?sid=25/09/02/1848251&amp;from=rss)
* [2025-09-03, 05:11:15](https://news.ycombinator.com/item?id=45112420) - [All New Java Language Features Since Java 21](https://inside.java/2025/08/31/roadto25-java-language/)
* [2025-09-03, 03:31:00](https://soylentnews.org/article.pl?sid=25/09/02/0359228&amp;from=rss) - [Artificial Toy Story: Do AI-Powered Toys Take the Life Out of Playtime?](https://soylentnews.org/article.pl?sid=25/09/02/0359228&amp;from=rss)
* [2025-09-03, 01:28:08](https://news.ycombinator.com/item?id=45111273) - [Speeding up Unreal Editor launch by not spawning unused tooltips](https://larstofus.com/2025/09/02/speeding-up-the-unreal-editor-launch-by-not-spawning-38000-tooltips/)
* [2025-09-02, 23:10:47](https://news.ycombinator.com/item?id=45110311) - [The maths you need to start understanding LLMs](https://www.gilesthomas.com/2025/09/maths-for-llms)
* [2025-09-02, 22:46:00](https://soylentnews.org/article.pl?sid=25/09/02/0144236&amp;from=rss) - [World’s Largest Neutrino Detector Switches On](https://soylentnews.org/article.pl?sid=25/09/02/0144236&amp;from=rss)
* [2025-09-02, 17:59:00](https://soylentnews.org/article.pl?sid=25/09/01/0031222&amp;from=rss) - [New Paper Finds Cases of \&quot;AI Psychosis\&quot; Manifesting Differently From Schizophrenia](https://soylentnews.org/article.pl?sid=25/09/01/0031222&amp;from=rss)
* [2025-09-02, 16:09:50](https://news.ycombinator.com/item?id=45104988) - [Meschers: Geometry Processing of Impossible Objects](https://anadodik.github.io/publication/meschers/)
* [2025-09-02, 15:02:40](https://news.ycombinator.com/item?id=45104018) - [Clarity or accuracy – what makes a good scientific image?](https://www.nature.com/articles/d41586-025-02757-7)
* [2025-09-02, 13:14:00](https://soylentnews.org/article.pl?sid=25/09/01/0021218&amp;from=rss) - [The Unix Epochalypse Might be Sooner Than You Think](https://soylentnews.org/article.pl?sid=25/09/01/0021218&amp;from=rss)
* [2025-09-02, 08:26:00](https://soylentnews.org/article.pl?sid=25/09/01/0018253&amp;from=rss) - [AI in Schools Isn’t Progress — It’s a Sign of How Far We’ve Strayed from the Purpose of Education.](https://soylentnews.org/article.pl?sid=25/09/01/0018253&amp;from=rss)
* [2025-09-02, 03:44:00](https://soylentnews.org/article.pl?sid=25/08/31/1416227&amp;from=rss) - [AMD Roadmap Leak Points to Zen 6 Mobile CPUs in 2027](https://soylentnews.org/article.pl?sid=25/08/31/1416227&amp;from=rss)
