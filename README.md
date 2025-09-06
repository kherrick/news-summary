# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Developing a Space Flight Simulator in Clojure](https://www.wedesoft.de/software/2025/09/05/clojure-game/) ([Comments](https://news.ycombinator.com/item?id=45145794))

* [Scientists Tap 'Secret' Fresh Water Under the Ocean, Raising Hopes For a Thirsty World](https://news.slashdot.org/story/25/09/05/160234/scientists-tap-secret-fresh-water-under-the-ocean-raising-hopes-for-a-thirsty-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://news.slashdot.org/story/25/09/05/160234/scientists-tap-secret-fresh-water-under-the-ocean-raising-hopes-for-a-thirsty-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Gym Class VR (YC W22) Is Hiring – UX Design Engineer](https://www.ycombinator.com/companies/gym-class-by-irl-studios/jobs/ywXHGBv-ux-design-engineer-senior-staff-principal) ([Comments](https://news.ycombinator.com/item?id=45143548))

* [My Own DNS Server at Home – Part 1: IPv4](https://jan.wildeboer.net/2025/08/My-DNS-Part-1/) ([Comments](https://news.ycombinator.com/item?id=45142397))

* [MentraOS – open-source Smart glasses OS](https://github.com/Mentra-Community/MentraOS) ([Comments](https://news.ycombinator.com/item?id=45140381))

## Environmental and Health Challenges

* [The sunscreen scandal shocking Australia - the world's skin cancer capital](https://www.bbc.com/news/articles/c4gzl41rpdqo) ([Comments](https://news.ycombinator.com/item?id=45145624))

* [Rising River Temperatures Threaten Paris's Water-Based Building Cooling Network](https://news.slashdot.org/story/25/09/05/1543244/rising-river-temperatures-threaten-pariss-water-based-building-cooling-network?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://news.slashdot.org/story/25/09/05/1543244/rising-river-temperatures-threaten-pariss-water-based-building-cooling-network?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Stressed Ice Generates Electricity, Researchers Find](https://soylentnews.org/article.pl?sid=25/09/04/0430216&amp;from=rss) ([Comments](https://soylentnews.org/article.pl?sid=25/09/04/0430216&amp;from=rss))

## Artificial Intelligence and Software

* [GLM 4.5 with Claude Code is a killer combination](https://docs.z.ai/guides/llm/glm-4.5) ([Comments](https://news.ycombinator.com/item?id=45145457))

* [Anthropic Agrees To Pay Record $1.5 Billion To Settle Authors' AI Lawsuit](https://yro.slashdot.org/story/25/09/05/1941245/anthropic-agrees-to-pay-record-15-billion-to-settle-authors-ai-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=45142885))

* [Boffins Build Automated Android Bug Hunting System](https://it.slashdot.org/story/25/09/05/196218/boffins-build-automated-android-bug-hunting-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=45144869))

* [Should we revisit Extreme Programming in the age of AI?](https://www.hyperact.co.uk/blog/should-we-revisit-xp-in-the-age-of-ai) ([Comments](https://news.ycombinator.com/item?id=45143945))

* [Fantastic pretraining optimizers and where to find them](https://arxiv.org/abs/2509.02046) ([Comments](https://news.ycombinator.com/item?id=45141762))

## Economic and Policy Developments

* [Trump To Impose Tariffs On Semiconductor Imports From Firms Not Moving Production To US](https://news.slashdot.org/story/25/09/05/1859232/trump-to-impose-tariffs-on-semiconductor-imports-from-firms-not-moving-production-to-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=45144081))

* [Canada Delaying Plan To Force Automakers To Hit EVs Sales Targets](https://tech.slashdot.org/story/25/09/05/1957250/canada-delaying-plan-to-force-automakers-to-hit-evs-sales-targets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://tech.slashdot.org/story/25/09/05/1957250/canada-delaying-plan-to-force-automakers-to-hit-evs-sales-targets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Geoffrey Hinton: 'AI Will Make a Few People Much Richer and Most People Poorer'](https://slashdot.org/story/25/09/05/1428223/geoffrey-hinton-ai-will-make-a-few-people-much-richer-and-most-people-poorer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([Comments](https://news.ycombinator.com/item?id=45142889))

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

* [2025-09-06, 01:39:01](https://news.ycombinator.com/item?id=45145794) - [Developing a Space Flight Simulator in Clojure](https://www.wedesoft.de/software/2025/09/05/clojure-game/)
* [2025-09-06, 01:10:37](https://news.ycombinator.com/item?id=45145624) - [The sunscreen scandal shocking Australia - the world&apos;s skin cancer capital](https://www.bbc.com/news/articles/c4gzl41rpdqo)
* [2025-09-06, 00:45:08](https://news.ycombinator.com/item?id=45145457) - [GLM 4.5 with Claude Code is a killer combination](https://docs.z.ai/guides/llm/glm-4.5)
* [2025-09-06, 00:45:00](https://hardware.slashdot.org/story/25/09/05/2126200/americas-first-sodium-ion-battery-manufacturer-ceases-operations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [America&apos;s First Sodium-Ion Battery Manufacturer Ceases Operations](https://hardware.slashdot.org/story/25/09/05/2126200/americas-first-sodium-ion-battery-manufacturer-ceases-operations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-06, 00:02:00](https://tech.slashdot.org/story/25/09/05/1957250/canada-delaying-plan-to-force-automakers-to-hit-evs-sales-targets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Canada Delaying Plan To Force Automakers To Hit EVs Sales Targets](https://tech.slashdot.org/story/25/09/05/1957250/canada-delaying-plan-to-force-automakers-to-hit-evs-sales-targets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 23:20:00](https://news.slashdot.org/story/25/09/05/1859232/trump-to-impose-tariffs-on-semiconductor-imports-from-firms-not-moving-production-to-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump To Impose Tariffs On Semiconductor Imports From Firms Not Moving Production To US](https://news.slashdot.org/story/25/09/05/1859232/trump-to-impose-tariffs-on-semiconductor-imports-from-firms-not-moving-production-to-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 23:07:19](https://lobste.rs/s/wqsxrn/natural_transformations_as_basis) - [Natural transformations as a basis of control](https://muratkasimov.art/Ya/Articles/Natural-transformation-as-a-basis-of-control)
* [2025-09-05, 22:40:00](https://news.slashdot.org/story/25/09/05/199223/firefox-ending-32-bit-linux-support-next-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Firefox Ending 32-bit Linux Support Next Year](https://news.slashdot.org/story/25/09/05/199223/firefox-ending-32-bit-linux-support-next-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 22:20:37](https://news.ycombinator.com/item?id=45144337) - [The Universe Within 12.5 Light Years](http://www.atlasoftheuniverse.com/12lys.html)
* [2025-09-05, 22:09:10](https://news.ycombinator.com/item?id=45144234) - [Quantum Mechanics, Concise Book](https://github.com/basketballguy999/Quantum-Mechanics-Concise-Book)
* [2025-09-05, 22:00:00](https://it.slashdot.org/story/25/09/05/196218/boffins-build-automated-android-bug-hunting-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Boffins Build Automated Android Bug Hunting System](https://it.slashdot.org/story/25/09/05/196218/boffins-build-automated-android-bug-hunting-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 21:57:00](https://soylentnews.org/article.pl?sid=25/09/04/155234&amp;from=rss) - [M365 Copilot Fails to Up Productivity in UK Government Trial](https://soylentnews.org/article.pl?sid=25/09/04/155234&amp;from=rss)
* [2025-09-05, 21:38:50](https://news.ycombinator.com/item?id=45143945) - [Should we revisit Extreme Programming in the age of AI?](https://www.hyperact.co.uk/blog/should-we-revisit-xp-in-the-age-of-ai)
* [2025-09-05, 21:33:51](https://news.ycombinator.com/item?id=45143879) - [Nest 1st gen and 2nd gen thermostats no longer supported from 10/25/2025](https://community.hubitat.com/t/nest-1st-gen-and-2nd-gen-thermostats-no-longer-supported-by-google-from-10-25-2025/152952)
* [2025-09-05, 21:20:00](https://yro.slashdot.org/story/25/09/05/1941245/anthropic-agrees-to-pay-record-15-billion-to-settle-authors-ai-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Agrees To Pay Record $1.5 Billion To Settle Authors&apos; AI Lawsuit](https://yro.slashdot.org/story/25/09/05/1941245/anthropic-agrees-to-pay-record-15-billion-to-settle-authors-ai-lawsuit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 21:05:40](https://lobste.rs/s/elgdzk/bringing_restartable_sequences_out) - [Bringing restartable sequences out of the niche](https://lwn.net/Articles/1033955/)
* [2025-09-05, 21:00:26](https://news.ycombinator.com/item?id=45143548) - [Gym Class VR (YC W22) Is Hiring – UX Design Engineer](https://www.ycombinator.com/companies/gym-class-by-irl-studios/jobs/ywXHGBv-ux-design-engineer-senior-staff-principal)
* [2025-09-05, 20:41:00](https://news.slashdot.org/story/25/09/05/160234/scientists-tap-secret-fresh-water-under-the-ocean-raising-hopes-for-a-thirsty-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Tap &apos;Secret&apos; Fresh Water Under the Ocean, Raising Hopes For a Thirsty World](https://news.slashdot.org/story/25/09/05/160234/scientists-tap-secret-fresh-water-under-the-ocean-raising-hopes-for-a-thirsty-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 20:01:00](https://it.slashdot.org/story/25/09/05/1628256/microsoft-365-personal-is-now-free-for-us-college-students-for-a-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft 365 Personal is Now Free For US College Students For a Year](https://it.slashdot.org/story/25/09/05/1628256/microsoft-365-personal-is-now-free-for-us-college-students-for-a-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 19:52:45](https://news.ycombinator.com/item?id=45142885) - [Anthropic agrees to pay $1.5B to settle lawsuit with book authors](https://www.nytimes.com/2025/09/05/technology/anthropic-settlement-copyright-ai.html?unlocked_article_code=1.jk8.bTTt.Zir9wmtPaTp2&amp;smid=url-share)
* [2025-09-05, 19:48:01](https://lobste.rs/s/owbdo6/x_design_notes_unifying_ocaml_modules) - [X Design Notes: Unifying OCaml Modules and Values](https://blog.polybdenum.com/2025/08/19/x-design-notes-unifying-ocaml-modules-and-values.html)
* [2025-09-05, 19:20:00](https://news.slashdot.org/story/25/09/05/1543244/rising-river-temperatures-threaten-pariss-water-based-building-cooling-network?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Rising River Temperatures Threaten Paris&apos;s Water-Based Building Cooling Network](https://news.slashdot.org/story/25/09/05/1543244/rising-river-temperatures-threaten-pariss-water-based-building-cooling-network?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 19:08:49](https://news.ycombinator.com/item?id=45142397) - [My Own DNS Server at Home – Part 1: IPv4](https://jan.wildeboer.net/2025/08/My-DNS-Part-1/)
* [2025-09-05, 18:41:00](https://news.slashdot.org/story/25/09/05/1418221/columbia-tries-using-ai-to-cool-off-student-tensions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Columbia Tries Using AI To Cool Off Student Tensions](https://news.slashdot.org/story/25/09/05/1418221/columbia-tries-using-ai-to-cool-off-student-tensions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 18:15:42](https://news.ycombinator.com/item?id=45141762) - [Fantastic pretraining optimizers and where to find them](https://arxiv.org/abs/2509.02046)
* [2025-09-05, 18:06:33](https://news.ycombinator.com/item?id=45141636) - [Making a font of my handwriting](https://chameth.com/making-a-font-of-my-handwriting/)
* [2025-09-05, 18:01:00](https://slashdot.org/story/25/09/05/0535228/anthropic-clamps-down-on-ai-services-for-chinese-owned-firms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Clamps Down on AI Services for Chinese-Owned Firms](https://slashdot.org/story/25/09/05/0535228/anthropic-clamps-down-on-ai-services-for-chinese-owned-firms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 17:20:00](https://news.slashdot.org/story/25/09/05/1436209/public-strongly-backs-aim-of-30-of-land-and-sea-set-aside-for-nature-poll-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Public Strongly Backs Aim of 30% of Land and Sea Set Aside For Nature, Poll Finds](https://news.slashdot.org/story/25/09/05/1436209/public-strongly-backs-aim-of-30-of-land-and-sea-set-aside-for-nature-poll-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 17:13:00](https://soylentnews.org/article.pl?sid=25/09/04/150221&amp;from=rss) - [Nvidia Blasts Proposed US Bill That Would Force It to Give American Buyers First Option](https://soylentnews.org/article.pl?sid=25/09/04/150221&amp;from=rss)
* [2025-09-05, 17:09:35](https://news.ycombinator.com/item?id=45140921) - [Show HN: Open-sourcing our text-to-CAD app](https://github.com/Adam-CAD/CADAM)
* [2025-09-05, 16:57:45](https://news.ycombinator.com/item?id=45140786) - [Freeway guardrails are now a favorite target of thieves](https://laist.com/news/transportation/guardrails-aluminum-theft)
* [2025-09-05, 16:52:34](https://news.ycombinator.com/item?id=45140730) - [European Commission fines Google €2.95B over abusive ad tech practices](https://ec.europa.eu/commission/presscorner/detail/en/ip_25_1992)
* [2025-09-05, 16:44:43](https://lobste.rs/s/felr3h/ray_tracing_one_weekend) - [Ray Tracing in One Weekend](https://raytracing.github.io/books/RayTracingInOneWeekend.html)
* [2025-09-05, 16:40:00](https://slashdot.org/story/25/09/05/1428223/geoffrey-hinton-ai-will-make-a-few-people-much-richer-and-most-people-poorer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Geoffrey Hinton: &apos;AI Will Make a Few People Much Richer and Most People Poorer&apos;](https://slashdot.org/story/25/09/05/1428223/geoffrey-hinton-ai-will-make-a-few-people-much-richer-and-most-people-poorer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 16:37:55](https://lobste.rs/s/ks2nbj/icfp_contest_2025) - [ICFP contest 2025](https://icfpcontest2025.github.io/)
* [2025-09-05, 16:25:48](https://news.ycombinator.com/item?id=45140381) - [MentraOS – open-source Smart glasses OS](https://github.com/Mentra-Community/MentraOS)
* [2025-09-05, 16:00:00](https://tech.slashdot.org/story/25/09/05/1527251/google-hit-with-345-billion-eu-antitrust-fine-over-adtech-practices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Hit With $3.45 Billion EU Antitrust Fine Over Adtech Practices](https://tech.slashdot.org/story/25/09/05/1527251/google-hit-with-345-billion-eu-antitrust-fine-over-adtech-practices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 15:20:00](https://ask.slashdot.org/story/25/09/05/1515244/slashdot-asks-can-panasonic-reinvent-itself?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Slashdot Asks: Can Panasonic Reinvent Itself?](https://ask.slashdot.org/story/25/09/05/1515244/slashdot-asks-can-panasonic-reinvent-itself?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-05, 14:57:44](https://lobste.rs/s/o0x7rb/your_mouse_free_setups) - [Your mouse-free setups](https://lobste.rs/s/o0x7rb/your_mouse_free_setups)
* [2025-09-05, 14:34:57](https://news.ycombinator.com/item?id=45139088) - [Purposeful animations](https://emilkowal.ski/ui/you-dont-need-animations)
* [2025-09-05, 14:15:31](https://lobste.rs/s/ciqk7x/use_singular_nouns_for_database_table) - [Use singular nouns for database table names](https://www.teamten.com/lawrence/programming/use-singular-nouns-for-database-table-names.html)
* [2025-09-05, 13:54:16](https://lobste.rs/s/cwnytv/basecamp_campfire_is_now_open_source) - [Basecamp Campfire is now open source](https://github.com/basecamp/once-campfire)
* [2025-09-05, 13:42:44](https://lobste.rs/s/m6vk7v/stelvio_aws_for_python_devs_made_simple) - [stelvio: AWS for Python devs - made simple](https://github.com/michal-stlv/stelvio)
* [2025-09-05, 12:28:00](https://soylentnews.org/article.pl?sid=25/09/04/0430216&amp;from=rss) - [Stressed Ice Generates Electricity, Researchers Find](https://soylentnews.org/article.pl?sid=25/09/04/0430216&amp;from=rss)
* [2025-09-05, 11:56:59](https://news.ycombinator.com/item?id=45137525) - [I ditched Docker for Podman](https://codesmash.dev/why-i-ditched-docker-for-podman-and-you-should-too)
* [2025-09-05, 11:33:48](https://news.ycombinator.com/item?id=45137373) - [ML needs a new programming language – Interview with Chris Lattner](https://signalsandthreads.com/why-ml-needs-a-new-programming-language/)
* [2025-09-05, 11:08:26](https://news.ycombinator.com/item?id=45137245) - [Interview with Japanese Demoscener 0b5vr](https://6octaves.com/2025/09/interview-with-demoscener-0b5vr.html)
* [2025-09-05, 09:05:42](https://lobste.rs/s/ezmgyy/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/ezmgyy/what_are_you_doing_this_weekend)
* [2025-09-05, 08:19:28](https://lobste.rs/s/d30ska/nixos_is_endgame_distrohopping) - [NixOS is the endgame of distrohopping](https://joshblais.com/blog/nixos-is-the-endgame-of-distrohopping/)
* [2025-09-05, 08:00:34](https://lobste.rs/s/noazra/capitalization_initialisms_2009) - [Capitalization of Initialisms (2009)](https://www.teamten.com/lawrence/writings/capitalization_of_initialisms.html)
* [2025-09-05, 07:57:21](https://news.ycombinator.com/item?id=45136103) - [I bought the cheapest EV, a used Nissan Leaf](https://www.jeffgeerling.com/blog/2025/i-bought-cheapest-ev-used-nissan-leaf)
* [2025-09-05, 07:47:00](https://soylentnews.org/article.pl?sid=25/09/04/0419219&amp;from=rss) - [Google Won&apos;t Have to Sell Chrome, Judge Rules](https://soylentnews.org/article.pl?sid=25/09/04/0419219&amp;from=rss)
* [2025-09-05, 07:03:08](https://lobste.rs/s/gsmdft/radicle_1_4_0_lily) - [Radicle 1.4.0 – Lily](https://radicle.xyz/2025/09/04/radicle-1.4.0)
* [2025-09-05, 06:42:05](https://lobste.rs/s/rylewy/sql_needed_structure) - [SQL needed structure](https://www.scattered-thoughts.net/writing/sql-needed-structure/)
* [2025-09-05, 05:57:10](https://lobste.rs/s/rfbvqb/type_checking_is_symptom_not_solution) - [Type Checking is a Symptom, Not a Solution](https://programmingsimplicity.substack.com/p/type-checking-is-a-symptom-not-a)
* [2025-09-05, 05:01:41](https://lobste.rs/s/atvx0k/if_i_hear_design_pattern_one_more_time_i_ll) - [If I hear \&quot;design pattern\&quot; one more time, I&apos;ll go mad](https://purplesyringa.moe/blog/if-i-hear-design-pattern-one-more-time-ill-go-mad/)
* [2025-09-05, 03:50:14](https://lobste.rs/s/d9jbh9/dealing_with_cancel_safety_async_rust) - [Dealing with cancel safety in async Rust](https://rfd.shared.oxide.computer/rfd/400)
* [2025-09-05, 03:47:27](https://lobste.rs/s/q7b1gm/fil_s_unbelievable_garbage_collector) - [Fil&apos;s Unbelievable Garbage Collector](https://fil-c.org/fugc)
* [2025-09-05, 03:03:00](https://soylentnews.org/article.pl?sid=25/09/04/0414246&amp;from=rss) - [U.S. Gov&apos;t Revokes TSMC&apos;s Authorization to Ship Tools to its Fabs in China](https://soylentnews.org/article.pl?sid=25/09/04/0414246&amp;from=rss)
* [2025-09-05, 02:40:12](https://lobste.rs/s/qdsiyi/evolving_ocaml_programming_language) - [Evolving the OCaml Programming Language (2025)](https://kcsrk.info/slides/Evolution_Ashoka_2025.pdf)
* [2025-09-04, 22:16:00](https://soylentnews.org/article.pl?sid=25/09/04/048238&amp;from=rss) - [Scammers Will Try to Trick You Into Filling Out Google Forms. Don’t Fall for It](https://soylentnews.org/article.pl?sid=25/09/04/048238&amp;from=rss)
* [2025-09-04, 21:46:00](https://lobste.rs/s/gkzmfy/let_s_rename_vibecoding_tag_llms) - [Let&apos;s rename the \&quot;vibecoding\&quot; tag to \&quot;llms\&quot;](https://lobste.rs/s/gkzmfy/let_s_rename_vibecoding_tag_llms)
* [2025-09-04, 18:29:48](https://lobste.rs/s/b6ipnz/you_don_t_need_animations) - [You Don&apos;t Need Animations](https://emilkowal.ski/ui/you-dont-need-animations)
* [2025-09-04, 17:29:00](https://soylentnews.org/article.pl?sid=25/09/04/0350224&amp;from=rss) - [Passkeys Are Incompatible With Open-Source Software](https://soylentnews.org/article.pl?sid=25/09/04/0350224&amp;from=rss)
* [2025-09-04, 14:58:58](https://lobste.rs/s/vdankx/look_out_for_bugs) - [Look Out For Bugs](https://matklad.github.io/2025/09/04/look-for-bugs.html)
* [2025-09-04, 12:44:00](https://soylentnews.org/article.pl?sid=25/09/03/0226210&amp;from=rss) - [Get Ready for Plastic Blood](https://soylentnews.org/article.pl?sid=25/09/03/0226210&amp;from=rss)
* [2025-09-04, 11:27:26](https://lobste.rs/s/6tfwtv/why_ml_needs_new_programming_language) - [Why ML Needs a New Programming Language](https://signalsandthreads.com/why-ml-needs-a-new-programming-language/)
* [2025-09-04, 09:21:38](https://lobste.rs/s/ksxhza/jujutsu_v0_33_0_released) - [jujutsu v0.33.0 released](https://github.com/jj-vcs/jj/releases/tag/v0.33.0)
* [2025-09-04, 07:57:00](https://soylentnews.org/article.pl?sid=25/09/03/0223245&amp;from=rss) - [Nearly 40% of Nvidia&apos;s Revenue Tied to Two Mystery Customers, Filing Shows](https://soylentnews.org/article.pl?sid=25/09/03/0223245&amp;from=rss)
* [2025-09-04, 03:14:00](https://soylentnews.org/article.pl?sid=25/09/03/0216228&amp;from=rss) - [People Who Believe in Conspiracy Theories Process Information Differently at the Neural Level](https://soylentnews.org/article.pl?sid=25/09/03/0216228&amp;from=rss)
* [2025-09-03, 22:47:22](https://lobste.rs/s/pqy0pp/where_s_shovelware_why_ai_coding_claims) - [Where&apos;s the Shovelware? Why AI Coding Claims Don&apos;t Add Up](https://substack.com/inbox/post/172538377)
* [2025-09-03, 22:27:00](https://soylentnews.org/article.pl?sid=25/09/02/192213&amp;from=rss) - [CRLite: Fast, Private, and Comprehensive Certificate Revocation Checking in Firefox](https://soylentnews.org/article.pl?sid=25/09/02/192213&amp;from=rss)
* [2025-09-03, 17:44:00](https://soylentnews.org/article.pl?sid=25/09/02/1855227&amp;from=rss) - [Microsoft Can&apos;t Guarantee Data Sovereignty – OVHcloud Says &apos;We Told You So&apos;](https://soylentnews.org/article.pl?sid=25/09/02/1855227&amp;from=rss)
* [2025-09-03, 15:43:21](https://news.ycombinator.com/item?id=45117107) - [API Blueprint](https://apiblueprint.org)
* [2025-09-03, 14:04:56](https://news.ycombinator.com/item?id=45115974) - [Show HN: Writing Arabic in English](https://sherifelmetwally.com/writing/writing-arabic-in-english)
* [2025-09-03, 13:01:00](https://soylentnews.org/article.pl?sid=25/09/02/1851257&amp;from=rss) - [Fascinating New Psychology Research Shows How Music Shapes Imagination](https://soylentnews.org/article.pl?sid=25/09/02/1851257&amp;from=rss)
* [2025-09-03, 11:27:56](https://news.ycombinator.com/item?id=45114498) - [Video Game Blurs (and how the best one works)](https://blog.frost.kiwi/dual-kawase/)
* [2025-09-03, 10:26:00](https://soylentnews.org/article.pl?sid=25/09/03/0230242&amp;from=rss) - [We Fed People a Milkshake With 130g of Fat to See What It Did to Their Brains](https://soylentnews.org/article.pl?sid=25/09/03/0230242&amp;from=rss)
* [2025-09-03, 08:17:00](https://soylentnews.org/article.pl?sid=25/09/02/1848251&amp;from=rss) - [DUPE - China Turns on Giant Neutrino Detector](https://soylentnews.org/article.pl?sid=25/09/02/1848251&amp;from=rss)
* [2025-09-03, 03:31:00](https://soylentnews.org/article.pl?sid=25/09/02/0359228&amp;from=rss) - [Artificial Toy Story: Do AI-Powered Toys Take the Life Out of Playtime?](https://soylentnews.org/article.pl?sid=25/09/02/0359228&amp;from=rss)
* [2025-09-02, 22:46:00](https://soylentnews.org/article.pl?sid=25/09/02/0144236&amp;from=rss) - [World’s Largest Neutrino Detector Switches On](https://soylentnews.org/article.pl?sid=25/09/02/0144236&amp;from=rss)
* [2025-09-02, 20:25:45](https://news.ycombinator.com/item?id=45108536) - [All of our lives overlap in the Network Of Time](https://networkoftime.com/)
* [2025-09-02, 20:14:51](https://news.ycombinator.com/item?id=45108401) - [Apertus 70B: Truly Open - Swiss LLM by ETH, EPFL and CSCS](https://huggingface.co/swiss-ai/Apertus-70B-2509)
* [2025-09-02, 17:59:00](https://soylentnews.org/article.pl?sid=25/09/01/0031222&amp;from=rss) - [New Paper Finds Cases of \&quot;AI Psychosis\&quot; Manifesting Differently From Schizophrenia](https://soylentnews.org/article.pl?sid=25/09/01/0031222&amp;from=rss)
* [2025-09-02, 17:40:02](https://news.ycombinator.com/item?id=45106429) - [Mac Clones History: A Tale of Poor Margins and Bad Timing](https://tedium.co/2025/09/02/apple-macintosh-clones-history/)
* [2025-09-02, 16:09:50](https://news.ycombinator.com/item?id=45104988) - [Meschers: Geometry Processing of Impossible Objects](https://anadodik.github.io/publication/meschers/)
* [2025-09-02, 13:14:00](https://soylentnews.org/article.pl?sid=25/09/01/0021218&amp;from=rss) - [The Unix Epochalypse Might be Sooner Than You Think](https://soylentnews.org/article.pl?sid=25/09/01/0021218&amp;from=rss)
* [2025-09-02, 11:45:46](https://news.ycombinator.com/item?id=45101797) - [How big are our embeddings now and why?](https://vickiboykis.com/2025/09/01/how-big-are-our-embeddings-now-and-why/)
* [2025-09-02, 08:26:00](https://soylentnews.org/article.pl?sid=25/09/01/0018253&amp;from=rss) - [AI in Schools Isn’t Progress — It’s a Sign of How Far We’ve Strayed from the Purpose of Education.](https://soylentnews.org/article.pl?sid=25/09/01/0018253&amp;from=rss)
* [2025-09-02, 03:44:00](https://soylentnews.org/article.pl?sid=25/08/31/1416227&amp;from=rss) - [AMD Roadmap Leak Points to Zen 6 Mobile CPUs in 2027](https://soylentnews.org/article.pl?sid=25/08/31/1416227&amp;from=rss)
* [2025-09-02, 02:43:00](https://news.ycombinator.com/item?id=45098609) - [The Old Robots Web Site](https://www.theoldrobots.com/index2.html)
