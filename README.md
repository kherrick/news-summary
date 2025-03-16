# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Development

* [Undergraduate Upends a 40-Year-Old Data Science Conjecture](https://www.wired.com/story/undergraduate-upends-a-40-year-old-data-science-conjecture/) - An undergraduate student challenges a longstanding data science conjecture, causing ripples in the academic community. [Comments](https://news.ycombinator.com/item?id=43378256)

* [Git 2.49 released with faster packing, Rust foreign language interface](https://www.phoronix.com/news/Git-2.49-Released) - New Git version introduces enhancements such as improved packing efficiency and Rust language support. [Comments](https://lobste.rs/s/cpphd3/git_2_49_released_with_faster_packing_rust)

* [Context Switching and Performance: What Every Developer Should Know](https://blog.codingconfessions.com/p/context-switching-and-performance) - A detailed examination of context switching, its implications, and strategies for developers. [Comments](https://lobste.rs/s/zhaa9h/context_switching_performance_what)

## Science and Environment

* [Ocean Levels Rise to a 30-Year High - and Faster Than Expected](https://news.slashdot.org/story/25/03/15/0426222/ocean-levels-rise-to-a-30-year-high---and-faster-than-expected?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Latest studies reveal accelerating ocean level increases, highlighting climate change consequences. [Comments](https://news.ycombinator.com/item?id=43378239)

* [Amazon Forest Felled To Build Road For Climate Summit](https://news.slashdot.org/story/25/03/16/0136229/amazon-forest-felled-to-build-road-for-climate-summit?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Controversy surrounds the destruction of forest areas for infrastructural development for climate discussions. [Comments](https://news.slashdot.org/story/25/03/16/0136229/amazon-forest-felled-to-build-road-for-climate-summit?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Humans Have a Third Set of Teeth: Scientists Discover Medicine to Grow Them](https://soylentnews.org/article.pl?sid=25/03/13/1729224&from=rss) - Breakthrough in dental science potentially addresses tooth loss issues through regrowth technology. [Comments](https://news.ycombinator.com/item?id=43362667)

## Cybersecurity and Technology Challenges

* [Attacker Copied GitHub Project, Added Fake Stars and Malicious Code](https://www.reddit.com/r/golang/comments/1jbzuot/someone_copied_our_github_project_made_it_look/) - A concerning report of attackers altering GitHub projects to include harmful code, leveraging fake acclaim. [Comments](https://news.ycombinator.com/item?id=43377962)

* [Popular GitHub Action tj-actions/changed-files is compromised](https://www.stepsecurity.io/blog/harden-runner-detection-tj-actions-changed-files-action-is-compromised) - Security breach reported on a widely used GitHub Action. [Comments](https://lobste.rs/s/4ko499/popular_github_action_tj_actions_changed)

## Space Exploration and Discoveries

* [Firefly's 'Athena' Lander Watched Friday's Eclipse - from the Moon](https://science.slashdot.org/story/25/03/15/2217247/fireflys-athena-lander-watched-fridays-eclipse---from-the-moon?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Milestone achievement as a lunar lander observes a moon eclipse. [Comments](https://science.slashdot.org/story/25/03/15/2217247/fireflys-athena-lander-watched-fridays-eclipse---from-the-moon?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Saturn Solidifies Its Title As Moon King With Discovery of 128 New Moons](https://science.slashdot.org/story/25/03/15/0457249/saturn-solidifies-its-title-as-moon-king-with-discovery-of-128-new-moons?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Astronomers discover over 100 new moons orbiting Saturn, furthering planetary research. [Comments](https://science.slashdot.org/story/25/03/15/0457249/saturn-solidifies-its-title-as-moon-king-with-discovery-of-128-new-moons?utm_source=rss1.0mainlinkanon&utm_medium=feed)

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

* [2025-03-16, 12:01:04](https://news.ycombinator.com/item?id=43378329) - [Lago (Open-Source Usage Based Billing)Is Hiring Sr Ruby Engineers (Latam)](https://jobs.lever.co/getlago/42f45126-a365-4f03-9736-565b26bc62f5)
* [2025-03-16, 11:59:17](https://news.ycombinator.com/item?id=43378321) - [The good times in tech are over](https://www.seangoedecke.com/good-times-are-over/)
* [2025-03-16, 11:43:14](https://news.ycombinator.com/item?id=43378256) - [Undergraduate Upends a 40-Year-Old Data Science Conjecture](https://www.wired.com/story/undergraduate-upends-a-40-year-old-data-science-conjecture/)
* [2025-03-16, 11:40:27](https://lobste.rs/s/zhaa9h/context_switching_performance_what) - [Context Switching and Performance: What Every Developer Should Know](https://blog.codingconfessions.com/p/context-switching-and-performance)
* [2025-03-16, 11:38:52](https://news.ycombinator.com/item?id=43378239) - [French gov's open source alternative to Notion or Outline](https://github.com/suitenumerique/docs)
* [2025-03-16, 11:35:22](https://news.ycombinator.com/item?id=43378225) - [Styling an HTML dialog modal to take the full height of the viewport](https://til.simonwillison.net/css/dialog-full-height)
* [2025-03-16, 11:34:00](https://news.slashdot.org/story/25/03/15/0426222/ocean-levels-rise-to-a-30-year-high---and-faster-than-expected?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Ocean Levels Rise to a 30-Year High - and Faster Than Expected](https://news.slashdot.org/story/25/03/15/0426222/ocean-levels-rise-to-a-30-year-high---and-faster-than-expected?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-16, 11:09:25](https://lobste.rs/s/fahcnf/dynamically_scoped_functions_as_essence) - [Dynamically Scoped Functions as the Essence of AOP](https://citeseerx.ist.psu.edu/document?doi=8914f753f0965810c0a75df2d34a637a176ea20b)
* [2025-03-16, 11:05:42](https://lobste.rs/s/cpphd3/git_2_49_released_with_faster_packing_rust) - [Git 2.49 released with faster packing, Rust foreign language interface](https://www.phoronix.com/news/Git-2.49-Released)
* [2025-03-16, 10:29:01](https://lobste.rs/s/zbydaa/attacker_copied_github_project_added) - [Attacker Copied GitHub Project, Added Fake Stars and Malicious Code](https://www.reddit.com/r/golang/comments/1jbzuot/someone_copied_our_github_project_made_it_look/)
* [2025-03-16, 10:28:16](https://news.ycombinator.com/item?id=43377985) - [The British Nationality Act as a Prolog Program (1986) [pdf]](https://www.doc.ic.ac.uk/~rak/papers/British%20Nationality%20Act.pdf)
* [2025-03-16, 10:23:46](https://news.ycombinator.com/item?id=43377962) - [GPT 4.5 level for 1% of the price](https://twitter.com/Baidu_Inc/status/1901089355890036897)
* [2025-03-16, 09:50:14](https://news.ycombinator.com/item?id=43377867) - [Implications of Global Privacy Control](https://developer.mozilla.org/en-US/blog/global-privacy-control/)
* [2025-03-16, 09:37:59](https://news.ycombinator.com/item?id=43377829) - [Lynx is the oldest web browser still being maintained](https://news.ycombinator.com/item?id=43377829)
* [2025-03-16, 08:48:09](https://news.ycombinator.com/item?id=43377690) - [Show HN: My high school team's space probe](https://drive.google.com/file/d/1_9V6lBTIfDsPdKCohQBc5Ed5UzDbnsrI/view?usp=sharing)
* [2025-03-16, 08:46:00](https://soylentnews.org/article.pl?sid=25/03/15/1228252&from=rss) - [Sidewinder Advanced Persistent Threat (APT) Shifts to Targeting of Nuclear, Maritime Orgs](https://soylentnews.org/article.pl?sid=25/03/15/1228252&from=rss)
* [2025-03-16, 07:34:00](https://news.slashdot.org/story/25/03/16/0136229/amazon-forest-felled-to-build-road-for-climate-summit?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Amazon Forest Felled To Build Road For Climate Summit](https://news.slashdot.org/story/25/03/16/0136229/amazon-forest-felled-to-build-road-for-climate-summit?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-16, 06:31:07](https://lobste.rs/s/miyoai/review_helix_after_1_5_years) - [A Review of Helix after 1.5 Years](https://felix-knorr.net/posts/2025-03-16-helix-review.html)
* [2025-03-16, 05:59:08](https://news.ycombinator.com/item?id=43377169) - [Implementing \"Tennis for Two\" using op amps (2024)](https://blog.qiqitori.com/2024/08/implementing-tennis-for-two-using-op-amps/)
* [2025-03-16, 04:54:01](https://lobste.rs/s/bo3w9v/adding_edit_button_my_static_site_on) - [Adding an edit button to my static site on mobile](https://jamesg.blog/2025/03/15/adding-an-edit-button-to-my-static-site-on-mobile)
* [2025-03-16, 04:42:52](https://lobste.rs/s/1ula6k/defer_technical_specification_it_is_time) - [The Defer Technical Specification: It Is Time](https://thephd.dev/c2y-the-defer-technical-specification-its-time-go-go-go)
* [2025-03-16, 04:01:44](https://lobste.rs/s/pxeoiw/adafruit_fruitjam_is_mac_384k) - [AdaFruit FruitJam is a Mac 384K](https://youtu.be/FAl7iO2R6W4)
* [2025-03-16, 04:01:00](https://soylentnews.org/article.pl?sid=25/03/15/1558246&from=rss) - [SpaceX Launches Astronauts for Long-Awaited International Space Station Crew Swap](https://soylentnews.org/article.pl?sid=25/03/15/1558246&from=rss)
* [2025-03-16, 03:34:00](https://ask.slashdot.org/story/25/03/16/015209/ask-slashdot-where-are-the-open-source-local-only-ai-solutions?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Ask Slashdot: Where Are the Open-Source Local-Only AI Solutions?](https://ask.slashdot.org/story/25/03/16/015209/ask-slashdot-where-are-the-open-source-local-only-ai-solutions?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-16, 02:31:59](https://news.ycombinator.com/item?id=43376570) - [More pro for the DEC Professional 380 (featuring PRO/VENIX)](http://oldvcr.blogspot.com/2025/03/more-pro-for-dec-professional-380.html)
* [2025-03-16, 02:31:38](https://lobste.rs/s/rzgqt3/more_pro_for_dec_professional_380) - [More pro for the DEC Professional 380 (featuring PRO/VENIX)](https://oldvcr.blogspot.com/2025/03/more-pro-for-dec-professional-380.html)
* [2025-03-16, 01:34:00](https://science.slashdot.org/story/25/03/15/2217247/fireflys-athena-lander-watched-fridays-eclipse---from-the-moon?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Firefly's 'Athena' Lander Watched Friday's Eclipse - from the Moon](https://science.slashdot.org/story/25/03/15/2217247/fireflys-athena-lander-watched-fridays-eclipse---from-the-moon?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-16, 00:07:03](https://news.ycombinator.com/item?id=43376033) - [Apple's long-lost hidden recovery partition from 1994 has been found](https://www.downtowndougbrown.com/2025/03/apples-long-lost-hidden-recovery-partition-from-1994-has-been-found/)
* [2025-03-15, 23:53:52](https://lobste.rs/s/9lj3ri/year_picotron_desktop) - [The Year of the Picotron Desktop](https://arnaught.neocities.org/blog/2025/03/14/year-of-the-picotron-desktop)
* [2025-03-15, 23:48:00](https://tech.slashdot.org/story/25/03/15/236215/cloudflare-accused-of-blocking-niche-browsers?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Cloudflare Accused of Blocking Niche Browsers](https://tech.slashdot.org/story/25/03/15/236215/cloudflare-accused-of-blocking-niche-browsers?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-15, 23:41:44](https://news.ycombinator.com/item?id=43375923) - [Career Advice in 2025](https://lethain.com/career-advice-2025/)
* [2025-03-15, 23:17:00](https://soylentnews.org/article.pl?sid=25/03/14/1938229&from=rss) - [No Project is an Island: Why You Need SBOMs and Dependency Management](https://soylentnews.org/article.pl?sid=25/03/14/1938229&from=rss)
* [2025-03-15, 23:12:08](https://news.ycombinator.com/item?id=43375780) - [ESP32 WiFi Superstitions](https://supakeen.com/weblog/esp32-wifi-superstitions/)
* [2025-03-15, 21:48:00](https://news.slashdot.org/story/25/03/15/056253/340-european-cities-restrict-usage-of-cars?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [340 European Cities Restrict Usage of Cars](https://news.slashdot.org/story/25/03/15/056253/340-european-cities-restrict-usage-of-cars?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-15, 21:42:31](https://lobste.rs/s/nvsmjg/is_cap_n_proto_event_loop_friendly) - [Is Cap'n Proto Event Loop Friendly?](https://hire.jonasgalvez.com.br/2025/mar/15/capnproto/)
* [2025-03-15, 20:34:00](https://science.slashdot.org/story/25/03/15/1947252/elon-musk-says-spacexs-first-mission-to-mars-will-launch-next-year?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Elon Musk Says SpaceX's First Mission to Mars Will Launch Next Year](https://science.slashdot.org/story/25/03/15/1947252/elon-musk-says-spacexs-first-mission-to-mars-will-launch-next-year?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-15, 19:45:04](https://lobste.rs/s/q7u3vr/web_apps_common_lisp) - [Web Apps in Common Lisp](https://web-apps-in-lisp.github.io/)
* [2025-03-15, 19:34:50](https://lobste.rs/s/v80mya/my_favorite_firefox_extensions) - [My Favorite Firefox Extensions](https://alexn.org/blog/2025/03/15/firefox-extensions/)
* [2025-03-15, 19:34:00](https://science.slashdot.org/story/25/03/15/1923253/is-our-universe-trapped-inside-a-black-hole?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Is Our Universe Trapped Inside a Black Hole?](https://science.slashdot.org/story/25/03/15/1923253/is-our-universe-trapped-inside-a-black-hole?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-15, 19:06:01](https://news.ycombinator.com/item?id=43374519) - [Sign in as anyone: Bypassing SAML SSO authentication with parser differentials](https://github.blog/security/sign-in-as-anyone-bypassing-saml-sso-authentication-with-parser-differentials/)
* [2025-03-15, 18:37:25](https://lobste.rs/s/clmxv5/speeding_up_c_code_with_template_lambdas) - [Speeding up C++ code with template lambdas](https://lemire.me/blog/2025/03/15/speeding-up-c-code-with-template-lambdas/)
* [2025-03-15, 18:34:00](https://tech.slashdot.org/story/25/03/15/0546205/last-year-waymos-autonomous-vehicles-got-589-parking-tickets-in-san-francisco?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Last Year Waymo's Autonomous Vehicles Got 589 Parking Tickets in San Francisco](https://tech.slashdot.org/story/25/03/15/0546205/last-year-waymos-autonomous-vehicles-got-589-parking-tickets-in-san-francisco?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-15, 18:33:00](https://soylentnews.org/article.pl?sid=25/03/14/1933241&from=rss) - [How a Rapidly Growing Population of Crocs Has Been Impacting Northern Territories Ecosystem](https://soylentnews.org/article.pl?sid=25/03/14/1933241&from=rss)
* [2025-03-15, 18:26:57](https://lobste.rs/s/w1lhln/comparing_video_encoders) - [Comparing Video Encoders](https://giannirosato.com/blog/post/comparing-encoders/)
* [2025-03-15, 17:34:00](https://yro.slashdot.org/story/25/03/15/0351230/climatologist-michael-mann-finally-won-a-1m-defamation-suit---but-then-a-judge-threw-it-out?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Climatologist Michael Mann Finally Won a $1M Defamation Suit - But Then a Judge Threw It Out](https://yro.slashdot.org/story/25/03/15/0351230/climatologist-michael-mann-finally-won-a-1m-defamation-suit---but-then-a-judge-threw-it-out?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-15, 17:22:41](https://lobste.rs/s/t9wxfd/implicit_surfaces_independent_research) - [Implicit Surfaces & Independent Research](https://www.youtube.com/watch?v=UxGxsGnbyJ4)
* [2025-03-15, 17:05:07](https://news.ycombinator.com/item?id=43373765) - [How many artists' careers did the Beatles kill?](https://www.cantgetmuchhigher.com/p/how-many-artists-did-the-beatles)
* [2025-03-15, 16:34:00](https://hardware.slashdot.org/story/25/03/15/1616223/10-million-cubans-suffer-nationwide-power-outage?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [10 Million Cubans Suffer Nationwide Power Outage](https://hardware.slashdot.org/story/25/03/15/1616223/10-million-cubans-suffer-nationwide-power-outage?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-15, 16:15:11](https://lobste.rs/s/2fyyzi/arenaallocator_free_nested_arenas) - [ArenaAllocator.free and Nested Arenas](https://www.openmymind.net/ArenaAllocator-free-and-Nested-Arenas/)
* [2025-03-15, 15:52:56](https://lobste.rs/s/pgrwyp/code_centric_journey_into_gleam_language) - [A Code Centric Journey Into the Gleam Language](https://youtu.be/PfPIiHCId0s)
* [2025-03-15, 15:45:42](https://news.ycombinator.com/item?id=43373242) - [Show HN: A personal YouTube frontend based on yt-dlp](https://github.com/christian-fei/my-yt)
* [2025-03-15, 15:34:00](https://developers.slashdot.org/story/25/03/15/0233243/why-microsofts-developers-are-porting-typescript-to-go?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Why Microsoft's Developers are Porting TypeScript to Go](https://developers.slashdot.org/story/25/03/15/0233243/why-microsofts-developers-are-porting-typescript-to-go?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-15, 15:33:16](https://lobste.rs/s/9au3js/brat_virtual_machine) - [The Brat virtual machine](https://gitlab.com/worst-lang/brat)
* [2025-03-15, 15:32:02](https://news.ycombinator.com/item?id=43373157) - [Milk Kanban](https://brodzinski.com/2025/03/milk-kanban.html)
* [2025-03-15, 15:08:40](https://lobste.rs/s/cclrkn/were_multiple_return_values_go_s_biggest) - [Were multiple return values Go's biggest mistake?](https://herecomesthemoon.net/2025/03/multiple-return-values-in-go/)
* [2025-03-15, 14:34:00](https://hardware.slashdot.org/story/25/03/15/0253253/coal-powered-energy-finally-overtaken-by-wind-and-solar-in-the-us?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Coal-Powered Energy Finally Overtaken by Wind and Solar in the US](https://hardware.slashdot.org/story/25/03/15/0253253/coal-powered-energy-finally-overtaken-by-wind-and-solar-in-the-us?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-15, 13:53:35](https://lobste.rs/s/mt1vop/ncsa_mosaic_1_0_released) - [NCSA Mosaic 1.0 Released](http://1997.webhistory.org/www.lists/www-talk.1993q2/0128.html)
* [2025-03-15, 13:48:00](https://soylentnews.org/politics/article.pl?sid=25/03/14/1930253&from=rss) - [Judge Calls Doge Firings A \"Sham\", Orders Thousands Of Workers To Be Reinstated Immediately](https://soylentnews.org/politics/article.pl?sid=25/03/14/1930253&from=rss)
* [2025-03-15, 13:00:00](https://entertainment.slashdot.org/story/25/03/15/0515234/nab-calls-for-end-of-atsc-10?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [NAB Calls For End of ATSC 1.0](https://entertainment.slashdot.org/story/25/03/15/0515234/nab-calls-for-end-of-atsc-10?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-15, 10:00:00](https://science.slashdot.org/story/25/03/15/0457249/saturn-solidifies-its-title-as-moon-king-with-discovery-of-128-new-moons?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Saturn Solidifies Its Title As Moon King With Discovery of 128 New Moons](https://science.slashdot.org/story/25/03/15/0457249/saturn-solidifies-its-title-as-moon-king-with-discovery-of-128-new-moons?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-03-15, 09:07:00](https://soylentnews.org/article.pl?sid=25/03/14/1113259&from=rss) - [Bad News for Low Orbit Satellites: Earth's Thermosphere is Shrinking](https://soylentnews.org/article.pl?sid=25/03/14/1113259&from=rss)
* [2025-03-15, 04:22:00](https://soylentnews.org/article.pl?sid=25/03/14/115251&from=rss) - [AMD's Zen 6-Based Desktop Processors May Feature Up to 24 Cores](https://soylentnews.org/article.pl?sid=25/03/14/115251&from=rss)
* [2025-03-15, 03:21:02](https://lobste.rs/s/4ko499/popular_github_action_tj_actions_changed) - [Popular GitHub Action tj-actions/changed-files is compromised](https://www.stepsecurity.io/blog/harden-runner-detection-tj-actions-changed-files-action-is-compromised)
* [2025-03-15, 03:05:09](https://lobste.rs/s/5mlumx/why_i_don_t_like_hackathons) - [Why I Don't Like Hackathons](https://mirawelner.com/posts/hackathons.html)
* [2025-03-14, 23:34:00](https://soylentnews.org/article.pl?sid=25/03/14/0056219&from=rss) - [The Cheapest Way to Supercharge America's Power Grid](https://soylentnews.org/article.pl?sid=25/03/14/0056219&from=rss)
* [2025-03-14, 18:47:00](https://soylentnews.org/article.pl?sid=25/03/13/1729224&from=rss) - [Humans Have a Third Set of Teeth: Scientists Discover Medicine to Grow Them](https://soylentnews.org/article.pl?sid=25/03/13/1729224&from=rss)
* [2025-03-14, 14:01:00](https://soylentnews.org/article.pl?sid=25/03/13/150217&from=rss) - [Why Attention Limitations Let Idea Thieves Thrive in Workplaces](https://soylentnews.org/article.pl?sid=25/03/13/150217&from=rss)
* [2025-03-14, 13:53:10](https://news.ycombinator.com/item?id=43362667) - [High-performance computing, with much less code](https://news.mit.edu/2025/high-performance-computing-with-much-less-code-0313)
* [2025-03-14, 13:01:17](https://lobste.rs/s/c7t7kz/look_at_firefox_forks) - [A look at Firefox forks](https://lwn.net/Articles/1012453/)
* [2025-03-14, 11:49:39](https://lobste.rs/s/qkqyf4/introduction_magit_emacs_mode_for_git) - [An introduction to Magit, an Emacs mode for Git](https://www.masteringemacs.org/article/introduction-magit-emacs-mode-git)
* [2025-03-14, 11:10:12](https://news.ycombinator.com/item?id=43361440) - [Finding Signal in the Noise: Machine Learning and the Markets (Jane Street)](https://signalsandthreads.com/finding-signal-in-the-noise/)
* [2025-03-14, 09:14:00](https://soylentnews.org/article.pl?sid=25/03/13/1011234&from=rss) - [General Fusion Fires Up its Newest Steampunk Fusion Reactor](https://soylentnews.org/article.pl?sid=25/03/13/1011234&from=rss)
* [2025-03-14, 08:07:53](https://news.ycombinator.com/item?id=43360522) - [DeepSeek focuses on research over revenue](https://www.ft.com/content/fb5c11bb-1d4b-465f-8283-451a19a3d425)
* [2025-03-14, 07:02:06](https://news.ycombinator.com/item?id=43360249) - [Command A: Max performance, minimal compute – 256k context window](https://cohere.com/blog/command-a)
* [2025-03-14, 04:29:00](https://soylentnews.org/article.pl?sid=25/03/12/190247&from=rss) - [This ‘Dune’ Isn't Fiction. It's the Longest Conveyer Belt in the US and Moving Sand in Texas](https://soylentnews.org/article.pl?sid=25/03/12/190247&from=rss)
* [2025-03-14, 01:51:22](https://news.ycombinator.com/item?id=43358914) - [Show HN: Nash, I made a standalone note with single HTML file](https://keepworking.github.io/nash/)
* [2025-03-13, 23:42:00](https://soylentnews.org/article.pl?sid=25/03/12/196239&from=rss) - [ASML To Open Beijing Facility Despite US Sanctions On China](https://soylentnews.org/article.pl?sid=25/03/12/196239&from=rss)
* [2025-03-13, 18:57:00](https://soylentnews.org/article.pl?sid=25/03/12/193232&from=rss) - [Psychological 'Booster Shots' Can Strengthen Resistance to Misinformation Over Time](https://soylentnews.org/article.pl?sid=25/03/12/193232&from=rss)
* [2025-03-13, 14:46:31](https://news.ycombinator.com/item?id=43353925) - [City simulator I made in Scratch](https://scratch.mit.edu/projects/1061728417/)
* [2025-03-13, 14:10:00](https://soylentnews.org/breakingnews/article.pl?sid=25/03/13/102242&from=rss) - [Mozilla Warns Users to Update Firefox Before Certificate Expires](https://soylentnews.org/breakingnews/article.pl?sid=25/03/13/102242&from=rss)
* [2025-03-13, 09:21:00](https://soylentnews.org/article.pl?sid=25/03/12/1855238&from=rss) - [Woolly Mice Are Cute and Impressive – but They Won't Bring Back Mammoths](https://soylentnews.org/article.pl?sid=25/03/12/1855238&from=rss)
* [2025-03-13, 04:37:00](https://soylentnews.org/article.pl?sid=25/03/12/1139205&from=rss) - [Rust Drivers Expected to Become More Common in Linux Kernel](https://soylentnews.org/article.pl?sid=25/03/12/1139205&from=rss)
* [2025-03-13, 02:48:31](https://news.ycombinator.com/item?id=43349940) - [Toni Morrison's Lost Play](https://www.vulture.com/article/toni-morrison-play-dreaming-emmett-influenced-beloved.html)
* [2025-03-13, 00:44:58](https://news.ycombinator.com/item?id=43349296) - [Lego says it wants to start to bring video game development in-house](https://www.videogameschronicle.com/news/lego-is-starting-to-bring-its-game-development-in-house-key-exec-says/)
* [2025-03-12, 23:52:00](https://soylentnews.org/article.pl?sid=25/03/12/1134222&from=rss) - [Majorana 1: Microsoft Under Fire For Claiming It Has A New Quantum Computer](https://soylentnews.org/article.pl?sid=25/03/12/1134222&from=rss)
* [2025-03-12, 22:38:03](https://news.ycombinator.com/item?id=43348434) - [Strengthening AI Agent Hijacking Evaluations](https://www.nist.gov/news-events/news/2025/01/technical-blog-strengthening-ai-agent-hijacking-evaluations)
* [2025-03-12, 19:09:00](https://soylentnews.org/article.pl?sid=25/03/12/1129229&from=rss) - [DOGE Axes CISA ‘Red Team’ Staffers Amid Ongoing Federal Cuts](https://soylentnews.org/article.pl?sid=25/03/12/1129229&from=rss)
* [2025-03-12, 14:21:00](https://soylentnews.org/article.pl?sid=25/03/11/1158203&from=rss) - [Where Will the 'Blood Moon' Total Lunar Eclipse be Visible in March 2025?](https://soylentnews.org/article.pl?sid=25/03/11/1158203&from=rss)
* [2025-03-12, 09:35:00](https://soylentnews.org/article.pl?sid=25/03/11/1150225&from=rss) - [PHP-CGI RCE Flaw Exploited in Attacks on Japan's Tech, Telecom, and E-Commerce Sectors](https://soylentnews.org/article.pl?sid=25/03/11/1150225&from=rss)
* [2025-03-12, 07:20:05](https://news.ycombinator.com/item?id=43340651) - [Wyvern's Open Satellite Feed](https://tech.marksblogg.com/wyvern-open-data-feed.html)
* [2025-03-12, 04:50:00](https://soylentnews.org/article.pl?sid=25/03/11/1148251&from=rss) - [Political Poll News Site 538 to Close Amid Larger Shuttering Across ABC and Disney](https://soylentnews.org/article.pl?sid=25/03/11/1148251&from=rss)
* [2025-03-12, 01:32:59](https://news.ycombinator.com/item?id=43339084) - [Evidence that Neanderthal and Homo sapiens engaged in cultural exchange](https://phys.org/news/2025-03-burials-compelling-evidence-neanderthal-homo.html)
* [2025-03-12, 00:05:00](https://soylentnews.org/article.pl?sid=25/03/11/1138232&from=rss) - [Stars Made From Only Primordial Gas Finally Spotted](https://soylentnews.org/article.pl?sid=25/03/11/1138232&from=rss)
