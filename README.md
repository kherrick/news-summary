# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [RedoxFS is the default filesystem of Redox OS, inspired by ZFS](https://doc.redox-os.org/book/redoxfs.html) ([comments](https://news.ycombinator.com/item?id=45379325))

* [The VAX (John Mashey, 2005)](https://yarchive.net/comp/vax.html) ([comments](https://news.ycombinator.com/item?id=45378413))

* [Raspberry Pi 500+ launched](https://www.raspberrypi.com/news/the-ultimate-all-in-one-pc-raspberry-pi-500-plus-on-sale-now-at-200/) ([comments](https://news.ycombinator.com/item?id=45370304))

* [Helium Browser](https://helium.computer) ([comments](https://lobste.rs/s/iztrs8/helium_browser))

* [Knotty: A domain-specific language for knitting patterns](https://t0mpr1c3.github.io/knotty/index.html) ([comments](https://news.ycombinator.com/item?id=45369768))

## Open Source Challenges and Developments

* [Open Source Turmoil: RubyGems Maintainers Kicked Off GitHub](https://news.slashdot.org/story/25/09/25/1956228/open-source-turmoil-rubygems-maintainers-kicked-off-github?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=45378910))

* [CHERI and the efforts to get Linux running on it](https://lwn.net/SubscriberLink/1037974/903c6f9a42f7782a/) ([comments](https://lobste.rs/s/zph6zo/knotty_domain_specific_language_for))

* [crates.io: Malicious crates faster_log and async_println](https://blog.rust-lang.org/2025/09/24/crates.io-malicious-crates-fasterlog-and-asyncprintln/) ([comments](https://lobste.rs/s/o8ibca/crates_io_malicious_crates_faster_log))

## AI in Society and Business

* [Experts Urge Caution About Using ChatGPT To Pick Stocks](https://slashdot.org/story/25/09/25/1948246/experts-urge-caution-about-using-chatgpt-to-pick-stocks?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=45378896))

* [OpenAI Says GPT-5 Stacks Up To Humans in a Wide Range of Jobs](https://slashdot.org/story/25/09/25/176219/openai-says-gpt-5-stacks-up-to-humans-in-a-wide-range-of-jobs?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=45375477))

* [Cloudflare To Launch Stablecoin for AI-Driven Internet Economy](https://tech.slashdot.org/story/25/09/25/1842223/cloudflare-to-launch-stablecoin-for-ai-driven-internet-economy?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.ycombinator.com/item?id=45377030))

## Space and Environmental Insights

* [New Quasi-Moon Discovered Orbiting Earth, but It&apos;s Been Around for Decades](https://explorersweb.com/new-quasi-moon-discovered-orbiting-earth-but-its-been-around-for-decades/) ([comments](https://news.ycombinator.com/item?id=45378871))

* [The Ganges River is Drying at an Unprecedented Rate](https://soylentnews.org/article.pl?sid=25/09/25/0014257&from=rss) ([comments](https://news.slashdot.org/story/25/09/24/2249237/japanese-city-passes-two-hours-a-day-smartphone-usage-ordinance))

* [How Billions of Hacked Mosquitoes and a Vaccine Could Beat the Deadly Dengue Virus](https://soylentnews.org/article.pl?sid=25/09/23/0616240&from=rss) ([comments](https://news.slashdot.org/story/25/09/24/2237215/experimental-gene-therapy-found-to-slow-huntingtons-disease-progression))

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

* [2025-09-25, 21:25:51](https://news.ycombinator.com/item?id=45379325) - [RedoxFS is the default filesystem of Redox OS, inspired by ZFS](https://doc.redox-os.org/book/redoxfs.html)
* [2025-09-25, 21:24:00](https://news.slashdot.org/story/25/09/25/1956228/open-source-turmoil-rubygems-maintainers-kicked-off-github?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Open Source Turmoil: RubyGems Maintainers Kicked Off GitHub](https://news.slashdot.org/story/25/09/25/1956228/open-source-turmoil-rubygems-maintainers-kicked-off-github?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-25, 20:53:40](https://news.ycombinator.com/item?id=45378910) - [Factory Raises $50M Series B](https://factory.ai/news/series-b)
* [2025-09-25, 20:52:33](https://news.ycombinator.com/item?id=45378896) - [U.S. once again hits new low in World Happiness Report](https://www.axios.com/2025/03/20/us-new-low-world-happiness-report)
* [2025-09-25, 20:50:05](https://news.ycombinator.com/item?id=45378871) - [New Quasi-Moon Discovered Orbiting Earth, but It&apos;s Been Around for Decades](https://explorersweb.com/new-quasi-moon-discovered-orbiting-earth-but-its-been-around-for-decades/)
* [2025-09-25, 20:42:00](https://soylentnews.org/article.pl?sid=25/09/25/1225209&amp;from=rss) - [The Future of Nuclear Reactors is Making its Way to the US](https://soylentnews.org/article.pl?sid=25/09/25/1225209&amp;from=rss)
* [2025-09-25, 20:40:00](https://slashdot.org/story/25/09/25/1948246/experts-urge-caution-about-using-chatgpt-to-pick-stocks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Experts Urge Caution About Using ChatGPT To Pick Stocks](https://slashdot.org/story/25/09/25/1948246/experts-urge-caution-about-using-chatgpt-to-pick-stocks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-25, 20:17:48](https://news.ycombinator.com/item?id=45378413) - [The VAX (John Mashey, 2005)](https://yarchive.net/comp/vax.html)
* [2025-09-25, 20:03:00](https://slashdot.org/story/25/09/25/1921208/amazon-blamed-ai-for-layoffs-then-hired-cheap-h1-b-workers-senators-allege?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Blamed AI For Layoffs, Then Hired Cheap H1-B Workers, Senators Allege](https://slashdot.org/story/25/09/25/1921208/amazon-blamed-ai-for-layoffs-then-hired-cheap-h1-b-workers-senators-allege?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-25, 19:28:16](https://news.ycombinator.com/item?id=45377748) - [Can a model trained on satellite data really find brambles on the ground?](https://toao.com/blog/can-we-really-see-brambles-from-space)
* [2025-09-25, 19:22:00](https://it.slashdot.org/story/25/09/25/1916215/microsoft-disables-some-cloud-services-used-by-israels-defense-ministry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Disables Some Cloud Services Used by Israel&apos;s Defense Ministry](https://it.slashdot.org/story/25/09/25/1916215/microsoft-disables-some-cloud-services-used-by-israels-defense-ministry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-25, 19:21:52](https://news.ycombinator.com/item?id=45377641) - [Ollama Web Search](https://ollama.com/blog/web-search)
* [2025-09-25, 19:17:18](https://news.ycombinator.com/item?id=45377572) - [Implementing UI translation in SumatraPDF, a C++ Windows application](https://blog.kowalczyk.info/a-vn0v/implementing-ui-translation-in-sumatrapdf-a-c-windows-application.html)
* [2025-09-25, 19:04:53](https://lobste.rs/s/vxzaqm/investigating_forged_pdf) - [Investigating a Forged PDF](https://mjg59.dreamwidth.org/73317.html)
* [2025-09-25, 18:42:00](https://tech.slashdot.org/story/25/09/25/1842223/cloudflare-to-launch-stablecoin-for-ai-driven-internet-economy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cloudflare To Launch Stablecoin for AI-Driven Internet Economy](https://tech.slashdot.org/story/25/09/25/1842223/cloudflare-to-launch-stablecoin-for-ai-driven-internet-economy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-25, 18:40:22](https://news.ycombinator.com/item?id=45377030) - [Tracing JITs in the Real World CPython Core Dev Sprint](https://antocuni.eu/2025/09/24/tracing-jits-in-the-real-world--cpython-core-dev-sprint/)
* [2025-09-25, 18:36:20](https://news.ycombinator.com/item?id=45376977) - [Electron-based apps cause system-wide lag on macOS 26 Tahoe](https://github.com/electron/electron/issues/48311)
* [2025-09-25, 18:29:50](https://news.ycombinator.com/item?id=45376895) - [Redox OS Development Priorities for 2025/26](https://www.redox-os.org/news/development-priorities-2025-09/)
* [2025-09-25, 18:09:47](https://news.ycombinator.com/item?id=45376605) - [Athlon 64: How AMD turned the tables on Intel](https://dfarq.homeip.net/athlon-64-how-amd-turned-the-tables-on-intel/)
* [2025-09-25, 18:03:43](https://lobste.rs/s/c1oexv/tracing_jits_real_world_cpython_core_dev) - [Tracing JITs in the real world @ CPython Core Dev Sprint](https://antocuni.eu/2025/09/24/tracing-jits-in-the-real-world--cpython-core-dev-sprint/)
* [2025-09-25, 18:01:00](https://slashdot.org/story/25/09/25/176219/openai-says-gpt-5-stacks-up-to-humans-in-a-wide-range-of-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Says GPT-5 Stacks Up To Humans in a Wide Range of Jobs](https://slashdot.org/story/25/09/25/176219/openai-says-gpt-5-stacks-up-to-humans-in-a-wide-range-of-jobs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-25, 17:20:56](https://news.ycombinator.com/item?id=45375845) - [Improved Gemini 2.5 Flash and Flash-Lite](https://developers.googleblog.com/en/continuing-to-bring-you-our-latest-models-with-an-improved-gemini-2-5-flash-and-flash-lite-release/)
* [2025-09-25, 17:20:00](https://slashdot.org/story/25/09/25/1642255/ai-isnt-replacing-radiologists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Isn&apos;t Replacing Radiologists](https://slashdot.org/story/25/09/25/1642255/ai-isnt-replacing-radiologists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-25, 16:59:55](https://news.ycombinator.com/item?id=45375477) - [ChatGPT Pulse](https://openai.com/index/introducing-chatgpt-pulse/)
* [2025-09-25, 16:42:00](https://news.slashdot.org/story/25/09/25/1335206/stablecoin-issuer-circle-examines-reversible-transactions-in-departure-for-crypto?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stablecoin Issuer Circle Examines &apos;Reversible&apos; Transactions in Departure For Crypto](https://news.slashdot.org/story/25/09/25/1335206/stablecoin-issuer-circle-examines-reversible-transactions-in-departure-for-crypto?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-25, 16:01:41](https://news.ycombinator.com/item?id=45374500) - [ChatControl: EU wants to scan all private messages, even in encrypted apps](https://metalhearf.fr/posts/chatcontrol-wants-your-private-messages/)
* [2025-09-25, 15:54:00](https://soylentnews.org/article.pl?sid=25/09/25/1221237&amp;from=rss) - [Different Types of Magic Mushrooms Use Unique Biochemical Paths to Produce the Same Active Compound](https://soylentnews.org/article.pl?sid=25/09/25/1221237&amp;from=rss)
* [2025-09-25, 15:52:00](https://yro.slashdot.org/story/25/09/25/1552229/amazon-reaches-25-billion-settlement-with-ftc-over-deceptive-prime-program?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Reaches $2.5 Billion Settlement With FTC Over &apos;Deceptive&apos; Prime Program](https://yro.slashdot.org/story/25/09/25/1552229/amazon-reaches-25-billion-settlement-with-ftc-over-deceptive-prime-program?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-25, 15:35:19](https://news.ycombinator.com/item?id=45374064) - [Amazon fined $2.5B for using deceptive methods to sign up consumers for Prime](https://www.ftc.gov/news-events/news/press-releases/2025/09/ftc-secures-historic-25-billion-settlement-against-amazon)
* [2025-09-25, 15:32:36](https://lobste.rs/s/ppm44i/very_early_history_algebraic_data_types) - [A Very Early History of Algebraic Data Types](https://www.hillelwayne.com/post/algdt-history/)
* [2025-09-25, 15:21:00](https://it.slashdot.org/story/25/09/25/1458207/accenture-to-exit-staff-that-cannot-be-retrained-for-age-of-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Accenture To &apos;Exit&apos; Staff That Cannot Be Retrained For Age of AI](https://it.slashdot.org/story/25/09/25/1458207/accenture-to-exit-staff-that-cannot-be-retrained-for-age-of-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-25, 14:40:00](https://tech.slashdot.org/story/25/09/25/126212/x-ray-scans-reveal-the-hidden-risks-of-cheap-batteries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [X-ray Scans Reveal the Hidden Risks of Cheap Batteries](https://tech.slashdot.org/story/25/09/25/126212/x-ray-scans-reveal-the-hidden-risks-of-cheap-batteries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-25, 14:36:12](https://news.ycombinator.com/item?id=45373102) - [The story of DOGE, as told by federal workers](https://www.wired.com/story/oral-history-doge-federal-workers/)
* [2025-09-25, 14:33:50](https://news.ycombinator.com/item?id=45373081) - [Cloudflare Email Service: private beta](https://blog.cloudflare.com/email-service/)
* [2025-09-25, 14:28:24](https://news.ycombinator.com/item?id=45373008) - [Launch HN: Webhound (YC S23) – Research agent that builds datasets from the web](https://news.ycombinator.com/item?id=45373008)
* [2025-09-25, 14:13:40](https://lobste.rs/s/hy2hxg/announcing_do_v2_0_dependency_injection) - [Announcing \&quot;do\&quot; v2.0 - Dependency injection for Go](https://github.com/samber/do/releases/tag/v2.0.0)
* [2025-09-25, 14:08:51](https://lobste.rs/s/smlfkc/this_month_servo_variable_fonts_network) - [This month in Servo: variable fonts, network tools, SVG](https://servo.org/blog/2025/09/25/this-month-in-servo/)
* [2025-09-25, 14:01:00](https://apple.slashdot.org/story/25/09/25/0410249/apple-asks-eu-to-scrap-landmark-digital-competition-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Asks EU To Scrap Landmark Digital Competition Law](https://apple.slashdot.org/story/25/09/25/0410249/apple-asks-eu-to-scrap-landmark-digital-competition-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-25, 13:59:36](https://lobste.rs/s/et0bry/ceiling_division_mip_map_sizes) - [Ceiling division and mip map sizes](https://fgiesen.wordpress.com/2025/09/25/ceiling-division-and-mip-map-sizes/)
* [2025-09-25, 13:52:33](https://lobste.rs/s/8ug7iy/postgresql_18_released) - [PostgreSQL 18 Released](https://www.postgresql.org/about/news/postgresql-18-released-3142/)
* [2025-09-25, 13:27:21](https://lobste.rs/s/gi7ac7/what_are_popular_ai_coding_benchmarks) - [What are popular AI coding benchmarks actually measuring?](https://blog.nilenso.com/blog/2025/09/25/swe-benchmarks/)
* [2025-09-25, 13:19:47](https://news.ycombinator.com/item?id=45372335) - [Demand for human radiologists is at an all-time high](https://www.worksinprogress.news/p/why-ai-isnt-replacing-radiologists)
* [2025-09-25, 13:00:00](https://tech.slashdot.org/story/25/09/24/2244215/facebook-data-reveal-the-devastating-real-world-harms-caused-by-the-spread-of-misinformation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Facebook Data Reveal the Devastating Real-World Harms Caused By the Spread of Misinformation](https://tech.slashdot.org/story/25/09/24/2244215/facebook-data-reveal-the-devastating-real-world-harms-caused-by-the-spread-of-misinformation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-25, 12:50:24](https://lobste.rs/s/6b0ud8/introducing_emacs_agent_shell_powered_by) - [Introducing Emacs agent-shell (powered by ACP)](https://xenodium.com/introducing-agent-shell)
* [2025-09-25, 12:48:50](https://news.ycombinator.com/item?id=45372113) - [Resurrect the Old Web](https://stevedylandev.bearblog.dev/resurrect-the-old-web/)
* [2025-09-25, 11:43:00](https://soylentnews.org/article.pl?sid=25/09/25/0014257&amp;from=rss) - [The Ganges River is Drying at an Unprecedented Rate](https://soylentnews.org/article.pl?sid=25/09/25/0014257&amp;from=rss)
* [2025-09-25, 10:49:20](https://lobste.rs/s/jqikf7/thoughts_on_cloudflare) - [Thoughts on Cloudflare](https://xn--gckvb8fzb.com/thoughts-on-cloudflare/)
* [2025-09-25, 10:35:19](https://news.ycombinator.com/item?id=45371283) - [The Theatre of Pull Requests and Code Review](https://meks.quest/blogs/the-theatre-of-pull-requests-and-code-review)
* [2025-09-25, 10:32:24](https://lobste.rs/s/4lva3o/theatre_pull_requests_code_review) - [The Theatre of Pull Requests and Code Review](https://meks.quest/blogs/the-theatre-of-pull-requests-and-code-review)
* [2025-09-25, 10:00:00](https://yro.slashdot.org/story/25/09/24/2249237/japanese-city-passes-two-hours-a-day-smartphone-usage-ordinance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japanese City Passes Two-Hours-a-Day Smartphone Usage Ordinance](https://yro.slashdot.org/story/25/09/24/2249237/japanese-city-passes-two-hours-a-day-smartphone-usage-ordinance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-25, 09:57:18](https://lobste.rs/s/iw0yyl/wind_pole_dragon) - [The Wind, a Pole, and the Dragon](https://entropicthoughts.com/the-wind-a-pole-and-the-dragon)
* [2025-09-25, 09:34:10](https://lobste.rs/s/qt82iv/some_interesting_stuff_i_found_on_ix_lans) - [Some interesting stuff I found on IX LANs](https://blog.benjojo.co.uk/post/ixp-bad-broadcast-packets-interesting)
* [2025-09-25, 08:08:02](https://lobste.rs/s/ruifje/raspberry_pi_500_launched) - [Raspberry Pi 500+ launched](https://www.raspberrypi.com/news/the-ultimate-all-in-one-pc-raspberry-pi-500-plus-on-sale-now-at-200/)
* [2025-09-25, 07:52:28](https://news.ycombinator.com/item?id=45370304) - [Raspberry Pi 500+](https://www.raspberrypi.com/news/the-ultimate-all-in-one-pc-raspberry-pi-500-plus-on-sale-now-at-200/)
* [2025-09-25, 07:31:29](https://lobste.rs/s/iztrs8/helium_browser) - [Helium Browser](https://helium.computer)
* [2025-09-25, 07:01:00](https://soylentnews.org/article.pl?sid=25/09/24/122235&amp;from=rss) - [Nvidia&apos;s $100 Billion Investment in OpenAI Raises Big Antitrust Concerns](https://soylentnews.org/article.pl?sid=25/09/24/122235&amp;from=rss)
* [2025-09-25, 07:00:00](https://science.slashdot.org/story/25/09/24/2237215/experimental-gene-therapy-found-to-slow-huntingtons-disease-progression?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Experimental Gene Therapy Found To Slow Huntington&apos;s Disease Progression](https://science.slashdot.org/story/25/09/24/2237215/experimental-gene-therapy-found-to-slow-huntingtons-disease-progression?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-09-25, 06:13:32](https://news.ycombinator.com/item?id=45369768) - [Knotty: A domain-specific language for knitting patterns](https://t0mpr1c3.github.io/knotty/index.html)
* [2025-09-25, 06:13:03](https://lobste.rs/s/5yxfew/cheri_efforts_get_linux_running_on_it) - [CHERI and the efforts to get Linux running on it](https://lwn.net/SubscriberLink/1037974/903c6f9a42f7782a/)
* [2025-09-25, 06:12:49](https://lobste.rs/s/zph6zo/knotty_domain_specific_language_for) - [Knotty: A domain-specific language for knitting patterns](https://t0mpr1c3.github.io/knotty/index.html)
* [2025-09-25, 05:13:43](https://lobste.rs/s/39ecmg/what_does_actual_functional_programming) - [What Does Actual Functional Programming Look Like?](https://jerf.org/iri/post/2025/fp_lessons_actual_fp/)
* [2025-09-25, 04:48:30](https://lobste.rs/s/p3wmty/step_right_up_lobsters_blog_carnival) - [¡Step right up to the Lobsters! Blog! Carnival](https://lobste.rs/s/p3wmty/step_right_up_lobsters_blog_carnival)
* [2025-09-25, 03:56:20](https://lobste.rs/s/5v3efy/how_many_valid_json_strings_are_there) - [How many valid JSON strings are there?](https://qntm.org/jsoncount)
* [2025-09-25, 03:24:57](https://lobste.rs/s/xdghmi/use_force_feedback_solder_small_things) - [Use the Force (Feedback) to Solder Small Things](https://www.bunniestudios.com/blog/2025/use-the-force-feedback-to-solder-small-things/)
* [2025-09-25, 03:16:00](https://soylentnews.org/article.pl?sid=25/09/24/1152227&amp;from=rss) - [The End of EU-Imposed Cookie Consent Pop-Ups Could be Nigh](https://soylentnews.org/article.pl?sid=25/09/24/1152227&amp;from=rss)
* [2025-09-25, 03:13:55](https://news.ycombinator.com/item?id=45368899) - [Pablo Picasso&apos;s poetry](https://news.artnet.com/art-world/art-bites-picasso-poetry-2669332)
* [2025-09-24, 22:36:00](https://soylentnews.org/article.pl?sid=25/09/24/1148218&amp;from=rss) - [Cloudflare is Sponsoring Ladybird and Omarchy](https://soylentnews.org/article.pl?sid=25/09/24/1148218&amp;from=rss)
* [2025-09-24, 20:40:58](https://lobste.rs/s/o8ibca/crates_io_malicious_crates_faster_log) - [crates.io: Malicious crates faster_log and async_println](https://blog.rust-lang.org/2025/09/24/crates.io-malicious-crates-fasterlog-and-asyncprintln/)
* [2025-09-24, 17:48:00](https://soylentnews.org/article.pl?sid=25/09/23/0616240&amp;from=rss) - [How Billions of Hacked Mosquitoes and a Vaccine Could Beat the Deadly Dengue Virus](https://soylentnews.org/article.pl?sid=25/09/23/0616240&amp;from=rss)
* [2025-09-24, 16:27:40](https://lobste.rs/s/8vj1t9/temporal_rs_is_here_datetime_library) - [Temporal_rs is here! The datetime library powering Temporal in Boa, Kiesel, and V8](https://boajs.dev/blog/2025/09/24/temporal-release)
* [2025-09-24, 13:51:00](https://lobste.rs/s/f13wey/don_t_even_consider_starting_with) - [Don&apos;t even consider starting with Microsoft](https://lionelbarrow.substack.com/p/dont-even-consider-starting-with)
* [2025-09-24, 13:02:00](https://soylentnews.org/article.pl?sid=25/09/23/066237&amp;from=rss) - [Why do Some Gamers Invert Their Controls?](https://soylentnews.org/article.pl?sid=25/09/23/066237&amp;from=rss)
* [2025-09-24, 10:03:24](https://lobste.rs/s/p1mdwu/how_s3_scales_petabytes_second_on_top_tens) - [How S3 scales to petabytes a second on top of tens of millions of slow HDDs](https://bigdatastream.substack.com/p/how-aws-s3-scales-with-tens-of-millions-of-hard-drives)
* [2025-09-24, 08:16:00](https://soylentnews.org/article.pl?sid=25/09/23/0557257&amp;from=rss) - [&apos;a Black Hole of Energy Use&apos;: Meta&apos;s Massive AI Data Center is Stressing Out a Louisiana Community](https://soylentnews.org/article.pl?sid=25/09/23/0557257&amp;from=rss)
* [2025-09-24, 03:35:00](https://soylentnews.org/article.pl?sid=25/09/23/0552218&amp;from=rss) - [When Cancer Targets the Young](https://soylentnews.org/article.pl?sid=25/09/23/0552218&amp;from=rss)
* [2025-09-23, 22:48:00](https://soylentnews.org/article.pl?sid=25/09/22/2131204&amp;from=rss) - [Porsche EV Roll-Out Delay Deals $6 Billion Hit to Parent Volkswagen](https://soylentnews.org/article.pl?sid=25/09/22/2131204&amp;from=rss)
* [2025-09-23, 18:06:00](https://soylentnews.org/article.pl?sid=25/09/22/1156248&amp;from=rss) - [Scientists Found 7,000-Year-Old Mummies in the Desert That Don&apos;t Share DNA With Modern Humans](https://soylentnews.org/article.pl?sid=25/09/22/1156248&amp;from=rss)
* [2025-09-23, 13:54:10](https://news.ycombinator.com/item?id=45347072) - [Brutalita Sans: An Experimental Font and Font Editor](https://brutalita.com/)
* [2025-09-23, 13:24:00](https://soylentnews.org/article.pl?sid=25/09/21/2249222&amp;from=rss) - [Deaths From Flesh-Eating Bacteria are on the Rise. Who is at Risk?](https://soylentnews.org/article.pl?sid=25/09/21/2249222&amp;from=rss)
* [2025-09-23, 13:11:32](https://news.ycombinator.com/item?id=45346538) - [Cosmic simulations that once needed supercomputers now run on a laptop](https://www.sciencedaily.com/releases/2025/09/250918225001.htm)
* [2025-09-23, 12:23:04](https://news.ycombinator.com/item?id=45346014) - [Bach Cello Suites (2024)](https://bachcellosuites.co.uk/)
* [2025-09-23, 08:35:00](https://soylentnews.org/article.pl?sid=25/09/21/2243223&amp;from=rss) - [We Risk a Deluge of AI-Written ‘Science’ Pushing Corporate Interests](https://soylentnews.org/article.pl?sid=25/09/21/2243223&amp;from=rss)
* [2025-09-23, 08:16:30](https://news.ycombinator.com/item?id=45344250) - [Wild performance tricks](https://davidlattimore.github.io/posts/2025/09/02/rustforge-wild-performance-tricks.html)
* [2025-09-23, 03:52:00](https://soylentnews.org/article.pl?sid=25/09/21/2234254&amp;from=rss) - [Something Extremely Strange is Happening at the Event Horizon of This Supermassive Blackhole](https://soylentnews.org/article.pl?sid=25/09/21/2234254&amp;from=rss)
* [2025-09-22, 23:08:00](https://soylentnews.org/article.pl?sid=25/09/21/2230245&amp;from=rss) - [OpenAI&apos;s Research on AI Models Deliberately Lying is Wild](https://soylentnews.org/article.pl?sid=25/09/21/2230245&amp;from=rss)
* [2025-09-22, 22:15:23](https://news.ycombinator.com/item?id=45340278) - [Identity Types](https://bartoszmilewski.com/2025/09/22/identity-types/)
* [2025-09-22, 18:23:00](https://soylentnews.org/article.pl?sid=25/09/21/1435205&amp;from=rss) - [Online Book:  The Pattern Language of Software Architecture](https://soylentnews.org/article.pl?sid=25/09/21/1435205&amp;from=rss)
* [2025-09-22, 13:40:00](https://soylentnews.org/article.pl?sid=25/09/21/1430243&amp;from=rss) - [Electronic Locks Have Backdoors, Too](https://soylentnews.org/article.pl?sid=25/09/21/1430243&amp;from=rss)
* [2025-09-22, 08:53:00](https://soylentnews.org/article.pl?sid=25/09/21/1427240&amp;from=rss) - [Rare Apple-1 With Storied Ownership Fetched Over $500,000 at Auction](https://soylentnews.org/article.pl?sid=25/09/21/1427240&amp;from=rss)
* [2025-09-22, 04:07:00](https://soylentnews.org/article.pl?sid=25/09/21/1419259&amp;from=rss) - [AI Can Forecast Your Future Health – Just Like the Weather](https://soylentnews.org/article.pl?sid=25/09/21/1419259&amp;from=rss)
* [2025-09-21, 23:23:00](https://soylentnews.org/article.pl?sid=25/09/21/0028219&amp;from=rss) - [When Non-Avian Dinosaurs Went Extinct, the Earth Changed](https://soylentnews.org/article.pl?sid=25/09/21/0028219&amp;from=rss)
* [2025-09-21, 18:44:00](https://soylentnews.org/article.pl?sid=25/09/21/009253&amp;from=rss) - [Half a Million Screens go Dark . . .](https://soylentnews.org/article.pl?sid=25/09/21/009253&amp;from=rss)
* [2025-09-21, 13:57:00](https://soylentnews.org/article.pl?sid=25/09/20/0338224&amp;from=rss) - [Netscape Navigator 2.0 Was Released 30 years Ago](https://soylentnews.org/article.pl?sid=25/09/20/0338224&amp;from=rss)
* [2025-09-21, 09:08:00](https://soylentnews.org/article.pl?sid=25/09/20/0336240&amp;from=rss) - [Brazil&apos;s Payment System Puts Credit Card Firms to the Test](https://soylentnews.org/article.pl?sid=25/09/20/0336240&amp;from=rss)
* [2025-09-21, 04:22:00](https://soylentnews.org/article.pl?sid=25/09/20/0333256&amp;from=rss) - [IG Nobel 2025 winners](https://soylentnews.org/article.pl?sid=25/09/20/0333256&amp;from=rss)
