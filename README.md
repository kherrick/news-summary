# [News Summary](https://kherrick.github.io/news-summary/)

## Programming and Software Development

* [Rust’s worst feature](https://mina86.com/2025/rusts-worst-feature/) - A critique of one of Rust programming language's controversial features, sparking debate among developers. [Comments](https://lobste.rs/s/2wuzgd/rust_s_worst_feature)

* [My failed attempt to shrink all NPM packages by 5%](https://evanhahn.com/my-failed-attempt-to-shrink-all-npm-packages-by-5-percent/) - An in-depth exploration of the challenges faced when trying to optimize npm packages. [Comments](https://news.ycombinator.com/item?id=42840548)

## Science and Medicine

* [The Cancer That Doctors Don't Want to Call Cancer](https://science.slashdot.org/story/25/01/27/1515239/the-cancer-that-doctors-dont-want-to-call-cancer?utm_source=rss1.0mainlinkanon&utm_medium=feed) - An insightful article discussing a controversial medical classification. [Comments](https://science.slashdot.org/story/25/01/27/1515239/the-cancer-that-doctors-dont-want-to-call-cancer?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Technology and Innovations

* [DeepSeek Rattles Wall Street With Claims of Cheaper AI Breakthroughs](https://slashdot.org/story/25/01/27/142255/deepseek-rattles-wall-street-with-claims-of-cheaper-ai-breakthroughs?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A revolutionary AI claim shakes financial paradigms. [Comments](https://slashdot.org/story/25/01/27/142255/deepseek-rattles-wall-street-with-claims-of-cheaper-ai-breakthroughs?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Linux kernel could cut energy use in data centres by up to 30 per cent](https://cs.uwaterloo.ca/news/cheriton-school-computer-science-researchers-update-linux) - Researchers propose potential energy efficiency in Linux for data centers. [Comments](https://news.ycombinator.com/item?id=42841981)

## Privacy and Security

* [EU's Digital Identity Systems - Reality Check and Techniques for Better Privacy](https://www.youtube.com/watch?v=omljDJGxjx4) - An overview of privacy concerns and solutions with EU’s digital identity systems. [Comments](https://lobste.rs/s/llkvam/eu_s_digital_identity_systems_reality)

## Work and Society

* [Two Hundred UK Companies Sign Up For Permanent Four-day Working Week](https://news.slashdot.org/story/25/01/27/1443219/two-hundred-uk-companies-sign-up-for-permanent-four-day-working-week?utm_source=rss1.0mainlinkanon&utm_medium=feed) - An insight into the growing shift towards shorter workweeks in the UK. [Comments](https://news.slashdot.org/story/25/01/27/1443219/two-hundred-uk-companies-sign-up-for-permanent-four-day-working-week?utm_source=rss1.0mainlinkanon&utm_medium=feed)

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

* [2025-01-27, 15:53:50](https://lobste.rs/s/2wuzgd/rust_s_worst_feature) - [Rust’s worst feature](https://mina86.com/2025/rusts-worst-feature/)
* [2025-01-27, 15:42:02](https://news.ycombinator.com/item?id=42842270) - [Bilinear down/upsampling, aligning pixel grids, and that infamous GPU half pixel (2021)](https://bartwronski.com/2021/02/15/bilinear-down-upsampling-pixel-grids-and-that-half-pixel-offset/)
* [2025-01-27, 15:29:54](https://news.ycombinator.com/item?id=42842123) - [Show HN: I Created ErisForge, a Python Library for Abliteration of LLMs](https://github.com/Tsadoq/ErisForge)
* [2025-01-27, 15:24:59](https://lobste.rs/s/lwf8lc/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/lwf8lc/what_are_you_doing_this_week)
* [2025-01-27, 15:21:00](https://science.slashdot.org/story/25/01/27/1515239/the-cancer-that-doctors-dont-want-to-call-cancer?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [The Cancer That Doctors Don't Want to Call Cancer](https://science.slashdot.org/story/25/01/27/1515239/the-cancer-that-doctors-dont-want-to-call-cancer?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-27, 15:17:48](https://news.ycombinator.com/item?id=42841981) - [Linux kernel could cut energy use in data centres by up to 30 per cent](https://cs.uwaterloo.ca/news/cheriton-school-computer-science-researchers-update-linux)
* [2025-01-27, 15:14:08](https://lobste.rs/s/llkvam/eu_s_digital_identity_systems_reality) - [EU's Digital Identity Systems - Reality Check and Techniques for Better Privacy](https://www.youtube.com/watch?v=omljDJGxjx4)
* [2025-01-27, 14:44:00](https://news.slashdot.org/story/25/01/27/1443219/two-hundred-uk-companies-sign-up-for-permanent-four-day-working-week?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Two Hundred UK Companies Sign Up For Permanent Four-day Working Week](https://news.slashdot.org/story/25/01/27/1443219/two-hundred-uk-companies-sign-up-for-permanent-four-day-working-week?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-27, 14:26:04](https://lobste.rs/s/vy25lh/steam_brick_no_screen_no_controller) - [Steam Brick: No screen, no controller, and absolutely no sense, just a power button and a USB port](https://crastinator-pro.github.io/steam-brick/)
* [2025-01-27, 14:22:06](https://lobste.rs/s/j9iugq/is_nixos_truly_reproducible) - [Is NixOS truly reproducible?](https://luj.fr/blog/is-nixos-truly-reproducible.html)
* [2025-01-27, 14:02:00](https://slashdot.org/story/25/01/27/142255/deepseek-rattles-wall-street-with-claims-of-cheaper-ai-breakthroughs?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [DeepSeek Rattles Wall Street With Claims of Cheaper AI Breakthroughs](https://slashdot.org/story/25/01/27/142255/deepseek-rattles-wall-street-with-claims-of-cheaper-ai-breakthroughs?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-27, 13:55:00](https://soylentnews.org/article.pl?sid=25/01/27/033246&from=rss) - [Think It Takes 21 Days to Form a Habit? Science Says Think Again](https://soylentnews.org/article.pl?sid=25/01/27/033246&from=rss)
* [2025-01-27, 12:44:39](https://news.ycombinator.com/item?id=42840548) - [My failed attempt to shrink all NPM packages by 5%](https://evanhahn.com/my-failed-attempt-to-shrink-all-npm-packages-by-5-percent/)
* [2025-01-27, 12:42:10](https://lobste.rs/s/ldaaql/my_failed_attempt_shrink_all_npm_packages) - [My failed attempt to shrink all npm packages by 5%](https://evanhahn.com/my-failed-attempt-to-shrink-all-npm-packages-by-5-percent/)
* [2025-01-27, 12:34:00](https://news.slashdot.org/story/25/01/26/0259252/bill-gates-thanks-parents-in-new-memoir-acknowledges-lucky-timing-and-possible-autism?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Bill Gates Thanks Parents in New Memoir, Acknowledges 'Lucky Timing' and Possible Autism](https://news.slashdot.org/story/25/01/26/0259252/bill-gates-thanks-parents-in-new-memoir-acknowledges-lucky-timing-and-possible-autism?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-27, 12:18:35](https://news.ycombinator.com/item?id=42840352) - [Oliver Heaviside and the theory of transmission lines (2021)](https://www.pa3fwm.nl/technotes/tn28-heaviside-transmission-lines.html)
* [2025-01-27, 10:32:35](https://news.ycombinator.com/item?id=42839501) - [SiFive's P550 Microarchitecture](https://chipsandcheese.com/p/inside-sifives-p550-microarchitecture)
* [2025-01-27, 09:39:13](https://lobste.rs/s/qgell4/how_long_is_second_javascript) - [How long is a second in JavaScript?](https://docs.timetime.in/blog/how-long-is-a-second-in-js/)
* [2025-01-27, 09:32:56](https://lobste.rs/s/6ggnss/kleisli_functional_query_system) - [Kleisli, a functional query system](https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=3f7f766df1ca10ebe30c6026678f9a8e95c64fc2)
* [2025-01-27, 09:10:00](https://soylentnews.org/article.pl?sid=25/01/26/0453205&from=rss) - [Medical Device Company Suddenly Stops Hospitals From Fixing Machines Themselves](https://soylentnews.org/article.pl?sid=25/01/26/0453205&from=rss)
* [2025-01-27, 08:56:16](https://news.ycombinator.com/item?id=42838875) - [Show HN: I Made an iOS Podcast Player with Racket](https://defn.io/2024/11/16/podcatcher/)
* [2025-01-27, 08:34:00](https://slashdot.org/story/25/01/27/0455205/internet-connected-smart-products-for-babies-suddenly-start-charging-subscription-fees?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Internet-Connected 'Smart' Products for Babies Suddenly Start Charging Subscription Fees](https://slashdot.org/story/25/01/27/0455205/internet-connected-smart-products-for-babies-suddenly-start-charging-subscription-fees?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-27, 08:22:41](https://news.ycombinator.com/item?id=42838700) - [A layoff fundamentally changed how I perceive work](https://mertbulan.com/2025/01/26/once-you-are-laid-off-you-will-never-be-the-same-again/)
* [2025-01-27, 07:59:00](https://lobste.rs/s/9ihbuh/surface_stable_fractal_dithering) - [Surface-Stable Fractal Dithering](https://www.youtube.com/watch?v=HPqGaIMVuLs)
* [2025-01-27, 07:32:43](https://news.ycombinator.com/item?id=42838355) - [Show HN: Making AR experiences is still painful – had to make my own editor](https://ordinary.space/)
* [2025-01-27, 06:58:37](https://lobste.rs/s/qvr98h/maps_are_faster_go_1_24) - [Maps are faster in Go 1.24](https://www.bytesizego.com/blog/go-124-swiss-table-maps)
* [2025-01-27, 05:56:00](https://hardware.slashdot.org/story/25/01/27/0539219/should-big-tech-plug-its-data-centers-directly-into-power-plants?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Should Big Tech Plug Its Data Centers Directly Into Power Plants?](https://hardware.slashdot.org/story/25/01/27/0539219/should-big-tech-plug-its-data-centers-directly-into-power-plants?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-27, 05:11:07](https://news.ycombinator.com/item?id=42837636) - [Hedy: Textual programming made easy](https://www.hedy.org/)
* [2025-01-27, 04:22:00](https://soylentnews.org/article.pl?sid=25/01/26/0444214&from=rss) - [Mysterious Blobs Found Inside Cells Are Rewriting the Story of How Life Works](https://soylentnews.org/article.pl?sid=25/01/26/0444214&from=rss)
* [2025-01-27, 03:58:00](https://tech.slashdot.org/story/25/01/27/0355223/the-super-bowl-for-nerds-scenes-from-the-microsoft-excel-world-championship?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [The 'Super Bowl for Nerds':  Scenes from the Microsoft Excel World Championship ](https://tech.slashdot.org/story/25/01/27/0355223/the-super-bowl-for-nerds-scenes-from-the-microsoft-excel-world-championship?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-27, 03:14:45](https://lobste.rs/s/pzr5nj/future_microprocessors) - [The Future of Microprocessors](https://www.youtube.com/watch?v=MkbgZMCTUyU)
* [2025-01-27, 03:12:30](https://lobste.rs/s/9w75v8/what_re_best_things_you_read_learned_2024) - [What're the Best Things you Read and Learned in 2024?](https://lobste.rs/s/9w75v8/what_re_best_things_you_read_learned_2024)
* [2025-01-27, 01:54:24](https://lobste.rs/s/3w9f40/on_dualities) - [On Dualities](http://dicioccio.fr/on-dualities.html)
* [2025-01-27, 01:47:00](https://tech.slashdot.org/story/25/01/27/0140243/another-undersea-cable-damaged-in-baltic-sea-criminal-sabotage-investigation-launched?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Another Undersea Cable Damaged in Baltic Sea. Criminal Sabotage Investigation Launched](https://tech.slashdot.org/story/25/01/27/0140243/another-undersea-cable-damaged-in-baltic-sea-criminal-sabotage-investigation-launched?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-27, 01:39:05](https://news.ycombinator.com/item?id=42836405) - [Marginalia – A search engine that prioritizes non-commercial content](https://marginalia-search.com/)
* [2025-01-27, 00:14:53](https://news.ycombinator.com/item?id=42835798) - [Shunpo: Minimalist bash tool to make directory navigation a little bit faster](https://github.com/egurapha/Shunpo)
* [2025-01-27, 00:11:27](https://news.ycombinator.com/item?id=42835772) - [Openhaystack: Build 'AirTags' – track Bluetooth devices via Apple's network](https://github.com/seemoo-lab/openhaystack)
* [2025-01-27, 00:04:00](https://tech.slashdot.org/story/25/01/26/2316243/a-new-bid-for-tiktok-from-perplexity-ai-would-give-the-us-government-a-50-stake?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [A New Bid for TikTok from Perplexity AI Would Give the US Government a 50% Stake](https://tech.slashdot.org/story/25/01/26/2316243/a-new-bid-for-tiktok-from-perplexity-ai-would-give-the-us-government-a-50-stake?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-26, 23:34:00](https://soylentnews.org/article.pl?sid=25/01/25/155223&from=rss) - [Florida Man Eats Diet of Butter, Cheese, Beef; Cholesterol Oozes From His Body](https://soylentnews.org/article.pl?sid=25/01/25/155223&from=rss)
* [2025-01-26, 23:13:01](https://news.ycombinator.com/item?id=42835282) - [Lessons in creating family photos that people want to keep (2018)](https://estherschindler.medium.com/the-old-family-photos-project-lessons-in-creating-family-photos-that-people-want-to-keep-ea3909129943)
* [2025-01-26, 23:04:00](https://tech.slashdot.org/story/25/01/26/231212/biometrics-windmills-and-vhs-tapes-the-winners-of-rest-of-world-international-tech-photo-contest?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Biometrics, Windmills, and VHS tapes:  The Winners of 'Rest of World' International Tech Photo Contest](https://tech.slashdot.org/story/25/01/26/231212/biometrics-windmills-and-vhs-tapes-the-winners-of-rest-of-world-international-tech-photo-contest?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-26, 21:52:00](https://tech.slashdot.org/story/25/01/26/2150209/bad-week-for-unoccupied-waymo-cars-one-hit-in-fatal-collision-one-vandalized-by-mob?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Bad Week for Unoccupied Waymo Cars:  One Hit in Fatal Collision, One Vandalized by Mob](https://tech.slashdot.org/story/25/01/26/2150209/bad-week-for-unoccupied-waymo-cars-one-hit-in-fatal-collision-one-vandalized-by-mob?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-26, 21:35:42](https://lobste.rs/s/zimti0/petrol_embedding_type_safe_sql_api_ocaml) - [Petrol: embedding a type-safe SQL API in OCaml using GADTs](https://kirancodes.me/posts/log-ways-of-sql-in-ocaml.html)
* [2025-01-26, 20:46:00](https://tech.slashdot.org/story/25/01/26/2043253/cory-doctorow-asks-can-interoperability-end-enshittification-and-fix-social-media?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Cory Doctorow Asks: Can Interoperability End 'Enshittification' and Fix Social Media?](https://tech.slashdot.org/story/25/01/26/2043253/cory-doctorow-asks-can-interoperability-end-enshittification-and-fix-social-media?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-26, 20:17:38](https://news.ycombinator.com/item?id=42833638) - [Amsterdam Compiler Kit for Cray X-MP](https://github.com/kej715/ack)
* [2025-01-26, 19:50:36](https://lobste.rs/s/w0cuh3/two_bites_data_science_k) - [Two Bites of Data Science in K](https://blog.zdsmith.com/posts/two-bites-of-data-science-in-k.html)
* [2025-01-26, 19:29:16](https://lobste.rs/s/fqtxpv/openai_launches_operator_ai_agent_can_do) - [OpenAI launches Operator, an AI agent that can do tasks on the web](https://arstechnica.com/ai/2025/01/openai-launches-operator-an-ai-agent-that-can-operate-your-computer/)
* [2025-01-26, 19:23:54](https://lobste.rs/s/sz09um/exploit_me_baby_one_more_time_command) - [Exploit Me, Baby, One More Time: Command Injection in Kubernetes Log Query](https://www.akamai.com/blog/security-research/2024-january-kubernetes-log-query-rce-windows)
* [2025-01-26, 19:17:48](https://lobste.rs/s/pvnlp0/noria_fast_web_applications_through) - [noria: Fast web applications through dynamic, partially-stateful dataflow](https://github.com/mit-pdos/noria)
* [2025-01-26, 18:51:00](https://soylentnews.org/article.pl?sid=25/01/25/152224&from=rss) - [Real Datacenter Emissions Are A Dirty Secret](https://soylentnews.org/article.pl?sid=25/01/25/152224&from=rss)
* [2025-01-26, 18:43:00](https://hardware.slashdot.org/story/25/01/26/1841249/californias-battery-plant-fire-sparks-call-for-investigation-new-regulations?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [California's Battery Plant Fire Sparks Call for Investigation, New Regulations](https://hardware.slashdot.org/story/25/01/26/1841249/californias-battery-plant-fire-sparks-call-for-investigation-new-regulations?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-26, 17:34:00](https://news.slashdot.org/story/25/01/26/1547204/new-michigan-law-requires-high-schools-to-offer-cs-classes?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [New Michigan Law Requires High Schools to Offer CS Classes](https://news.slashdot.org/story/25/01/26/1547204/new-michigan-law-requires-high-schools-to-offer-cs-classes?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-26, 17:24:15](https://news.ycombinator.com/item?id=42831769) - [Qwen2.5-1M: Deploy your own Qwen with context length up to 1M tokens](https://qwenlm.github.io/blog/qwen2.5-1m/)
* [2025-01-26, 16:57:52](https://news.ycombinator.com/item?id=42831509) - [Hard numbers in the Wayland vs. X11 input latency discussion](https://mort.coffee/home/wayland-input-latency/)
* [2025-01-26, 16:55:45](https://lobste.rs/s/oxtwre/hard_numbers_wayland_vs_x11_input_latency) - [Hard numbers in the Wayland vs X11 input latency discussion](https://mort.coffee/home/wayland-input-latency/)
* [2025-01-26, 16:34:00](https://linux.slashdot.org/story/25/01/25/2343225/linux-614-brings-some-systems-faster-suspend-and-resume?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Linux 6.14 Brings Some Systems Faster Suspend and Resume](https://linux.slashdot.org/story/25/01/25/2343225/linux-614-brings-some-systems-faster-suspend-and-resume?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-01-26, 16:26:05](https://lobste.rs/s/tz23of/when_ai_promises_speed_delivers) - [When AI Promises Speed but Delivers Debugging Hell](https://nsavage.substack.com/p/when-ai-promises-speed-but-delivers)
* [2025-01-26, 14:10:00](https://soylentnews.org/article.pl?sid=25/01/25/1456254&from=rss) - [Touchscreen Dashboards Have Finally Taken Over and Ruined Driving](https://soylentnews.org/article.pl?sid=25/01/25/1456254&from=rss)
* [2025-01-26, 14:05:15](https://news.ycombinator.com/item?id=42830155) - [No one is disrupting banks – at least not the big ones](https://www.popularfintech.com/p/no-one-is-disrupting-banks)
* [2025-01-26, 13:38:36](https://news.ycombinator.com/item?id=42830033) - [Halliday AR(Not?)/AI Glasses](https://kguttag.com/2025/01/25/halliday-arnot-ai-glasses/)
* [2025-01-26, 11:12:36](https://lobste.rs/s/en0mrm/cs16_css_css_library_based_on_counter) - [cs16.css: CSS library based on Counter Strike 1.6 UI](https://cs16.samke.me/)
* [2025-01-26, 09:53:59](https://lobste.rs/s/x7lve1/foa_ferris_on_air_experimental_wi_fi_stack) - [FoA: Ferris-on-Air: An experimental Wi-Fi stack for rust on the ESP32](https://github.com/esp32-open-mac/FoA)
* [2025-01-26, 09:25:00](https://soylentnews.org/article.pl?sid=25/01/25/1448247&from=rss) - [“Project Mini Rack” Wants Make Your Mini-Homelab a Reality](https://soylentnews.org/article.pl?sid=25/01/25/1448247&from=rss)
* [2025-01-26, 08:57:51](https://news.ycombinator.com/item?id=42828833) - [Show HN: Bagels – TUI expense tracker](https://github.com/EnhancedJax/Bagels)
* [2025-01-26, 04:38:00](https://soylentnews.org/article.pl?sid=25/01/24/2112249&from=rss) - [Anthropic Chief Says AI Could Surpass “Almost All Humans at Almost Everything” Shortly After 2027](https://soylentnews.org/article.pl?sid=25/01/24/2112249&from=rss)
* [2025-01-26, 02:19:29](https://lobste.rs/s/bmwj0a/exploring_new_go_tool_support_go_1_24) - [Exploring the new \"go tool\" support in Go 1.24](https://blog.howardjohn.info/posts/go-tools-command/)
* [2025-01-26, 00:48:45](https://lobste.rs/s/atihtk/snac2_simple_minimalistic_activitypub) - [snac2 - A simple, minimalistic ActivityPub instance written in portable C](https://codeberg.org/grunfink/snac2)
* [2025-01-25, 23:53:00](https://soylentnews.org/article.pl?sid=25/01/24/2110218&from=rss) - [Not an Asteroid, Just Elon's Car](https://soylentnews.org/article.pl?sid=25/01/24/2110218&from=rss)
* [2025-01-25, 19:08:00](https://soylentnews.org/article.pl?sid=25/01/24/1325241&from=rss) - [How Many Sexes Are There?](https://soylentnews.org/article.pl?sid=25/01/24/1325241&from=rss)
* [2025-01-25, 15:30:25](https://news.ycombinator.com/item?id=42822162) - [The impact of competition and DeepSeek on Nvidia](https://youtubetranscriptoptimizer.com/blog/05_the_short_case_for_nvda)
* [2025-01-25, 14:38:21](https://lobste.rs/s/qjzguh/fizzbuzz_did_not_get_me_job) - [The fizzbuzz that did not get me the job](https://kranga.notion.site/The-fizzbuzz-that-did-not-get-me-the-job-180e7c22ef3b80c3a386f7f8de720ac7)
* [2025-01-25, 14:23:00](https://soylentnews.org/article.pl?sid=25/01/24/1324218&from=rss) - [Wine 10.0 Brings Arm Windows Apps to Linux, Still Isn't an Emulator](https://soylentnews.org/article.pl?sid=25/01/24/1324218&from=rss)
* [2025-01-25, 09:40:00](https://soylentnews.org/article.pl?sid=25/01/24/1255245&from=rss) - [Trump Pardons Dark Web Silk Road Marketplace Founder Ross Ulbricht](https://soylentnews.org/article.pl?sid=25/01/24/1255245&from=rss)
* [2025-01-25, 04:54:00](https://soylentnews.org/article.pl?sid=25/01/24/1251214&from=rss) - [Opinion: We Need to Protect the Protocol That Runs Bluesky](https://soylentnews.org/article.pl?sid=25/01/24/1251214&from=rss)
* [2025-01-25, 00:09:00](https://soylentnews.org/article.pl?sid=25/01/24/1234214&from=rss) - [AI Workloads Spur Bigger Memory Drives](https://soylentnews.org/article.pl?sid=25/01/24/1234214&from=rss)
* [2025-01-24, 23:44:50](https://news.ycombinator.com/item?id=42818047) - [Autodesk partially restores old forum posts](https://forums.autodesk.com/t5/community-announcements/update-on-archiving-idea-boards-and-forums/td-p/13276594)
* [2025-01-24, 19:24:00](https://soylentnews.org/article.pl?sid=25/01/23/1255246&from=rss) - [Oyster Blood: A New Frontier in Fighting Infection](https://soylentnews.org/article.pl?sid=25/01/23/1255246&from=rss)
* [2025-01-24, 17:38:11](https://news.ycombinator.com/item?id=42815454) - [Peanut Butter Day: Going Nuts over NIST's Standard Reference Peanut Butter](https://www.nist.gov/blogs/taking-measure/going-nuts-over-nists-standard-reference-peanut-butter)
* [2025-01-24, 14:38:00](https://soylentnews.org/article.pl?sid=25/01/23/1249227&from=rss) - [Chinese Salt Typhoon Hackers 1st Spotted on Federal Networks Under Another Name](https://soylentnews.org/article.pl?sid=25/01/23/1249227&from=rss)
* [2025-01-24, 10:59:19](https://news.ycombinator.com/item?id=42812029) - [Supercharge SQLite with Ruby Functions](https://blog.julik.nl/2025/01/supercharge-sqlite-with-ruby-functions)
* [2025-01-24, 09:53:00](https://soylentnews.org/article.pl?sid=25/01/23/1247207&from=rss) - [New California Law Criminalizing AI Generated Child Porn Claims First Arrest](https://soylentnews.org/article.pl?sid=25/01/23/1247207&from=rss)
* [2025-01-24, 05:07:00](https://soylentnews.org/article.pl?sid=25/01/23/0458201&from=rss) - [Time to Check My Tire Pressures...Hand Me That Hammer](https://soylentnews.org/article.pl?sid=25/01/23/0458201&from=rss)
* [2025-01-24, 00:46:55](https://news.ycombinator.com/item?id=42809518) - [Show HN: A new native app for 20 year old OS X](https://uppercut.chadbibler.com)
* [2025-01-24, 00:22:00](https://soylentnews.org/article.pl?sid=25/01/23/0454218&from=rss) - [Google Is Now the East India Company of the Internet](https://soylentnews.org/article.pl?sid=25/01/23/0454218&from=rss)
* [2025-01-23, 21:38:27](https://news.ycombinator.com/item?id=42808355) - [Using the most unhinged AVX-512 instruction to make fastest phrase search algo](https://gab-menezes.github.io/2025/01/13/using-the-most-unhinged-avx-512-instruction-to-make-the-fastest-phrase-search-algo.html)
* [2025-01-23, 21:01:47](https://news.ycombinator.com/item?id=42808027) - [C Is Not Suited to SIMD (2019)](http://blog.vmchale.com/article/notes-c-simd)
* [2025-01-23, 19:38:00](https://soylentnews.org/article.pl?sid=25/01/23/0452251&from=rss) - [Microsoft To Force Windows 11 24H2 On Home And Pro Users](https://soylentnews.org/article.pl?sid=25/01/23/0452251&from=rss)
* [2025-01-23, 14:53:00](https://soylentnews.org/article.pl?sid=25/01/22/1845245&from=rss) - [Mind Control? Scientists Have Discovered How to Use Nanoparticles to Remotely Control Behavior](https://soylentnews.org/article.pl?sid=25/01/22/1845245&from=rss)
* [2025-01-23, 13:35:04](https://news.ycombinator.com/item?id=42803822) - [Show HN: 3D printing giant things with a Python jigsaw generator](https://calbryant.uk/blog/3d-printing-giant-things-with-jigsaw-generator/)
* [2025-01-23, 10:05:00](https://soylentnews.org/article.pl?sid=25/01/22/1845235&from=rss) - [TSMC Reportedly Pauses Production After Earthquake](https://soylentnews.org/article.pl?sid=25/01/22/1845235&from=rss)
* [2025-01-23, 05:22:00](https://soylentnews.org/article.pl?sid=25/01/22/1835217&from=rss) - [Findings Challenge Assumption That AI Will Soon Replace Human Doctors](https://soylentnews.org/article.pl?sid=25/01/22/1835217&from=rss)
* [2025-01-23, 00:35:00](https://soylentnews.org/article.pl?sid=25/01/21/1517219&from=rss) - [Not Sure What Font to Choose? Typography Study Helps Find the Right Type](https://soylentnews.org/article.pl?sid=25/01/21/1517219&from=rss)
