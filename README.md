# [News Summary](https://kherrick.github.io/news-summary/)

## Tech Innovations and Programming

* [Nerd: The First Programming Language Not Built for Humans](https://www.nerd-lang.org/about) - [Comments](https://news.ycombinator.com/item?id=46450217)

* [Show HN: BusterMQ, Thread-per-core NATS server in Zig with io_uring](https://bustermq.sh/) - [Comments](https://news.ycombinator.com/item?id=46449812)

* [PyPI in 2025: A Year in Review](https://blog.pypi.org/posts/2025-12-31-pypi-2025-in-review/) - [Comments](https://news.ycombinator.com/item?id=46447202)

* [I Fed 24 Years of My Blog Posts to a Markov Model](https://susam.net/fed-24-years-of-posts-to-markov-model.html) - [Comments](https://lobste.rs/s/4totv7/i_fed_24_years_my_blog_posts_markov_model)

* [Formally speaking, "Transpiler" is a useless word](https://people.csail.mit.edu/rachit/post/transpiler-formal/) - [Comments](https://lobste.rs/s/0g0ebi/formally_speaking_transpiler_is_useless)

## Business and Economy

* [Warren Buffett Retires As Berkshire Hathaway CEO After 55 Years](https://news.slashdot.org/story/25/12/31/226259/warren-buffett-retires-as-berkshire-hathaway-ceo-after-55-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comments](https://news.slashdot.org/story/25/12/31/226259/warren-buffett-retires-as-berkshire-hathaway-ceo-after-55-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [OpenAI Is Paying Employees More Than Any Major Tech Startup in History](https://slashdot.org/story/25/12/31/204215/openai-is-paying-employees-more-than-any-major-tech-startup-in-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comments](https://slashdot.org/story/25/12/31/204215/openai-is-paying-employees-more-than-any-major-tech-startup-in-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Science and Health

* [Scientists unlock brain's natural clean-up system for new treatments for stroke](https://www.monash.edu/pharm/about/news/news-listing/latest/scientists-unlock-brains-natural-clean-up-system-to-develop-new-treatments-for-stroke-and-other-neurological-diseases) - [Comments](https://news.ycombinator.com/item?id=46448894)

* [Poor Sleep Quality Accelerates Brain Aging](https://science.slashdot.org/story/25/12/31/1716233/poor-sleep-quality-accelerates-brain-aging?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comments](https://science.slashdot.org/story/25/12/31/1716233/poor-sleep-quality-accelerates-brain-aging?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Privacy and Control

* [The Delete Act](https://privacy.ca.gov/drop/about-drop-and-the-delete-act/) - [Comments](https://news.ycombinator.com/item?id=46449694)

* [On privacy and control](https://toidiu.com/blog/2025-12-25-privacy-and-control/) - [Comments](https://news.ycombinator.com/item?id=46446938)

## Legacy and Reflections

* [Stewart Cheifet, Computer Chronicles Host, Dies At 87](https://hardware.slashdot.org/story/25/12/31/2149206/stewart-cheifet-computer-chronicles-host-dies-at-87?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comments](https://hardware.slashdot.org/story/25/12/31/2149206/stewart-cheifet-computer-chronicles-host-dies-at-87?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [HP-UX hits end-of-life today, and I’m sad](https://www.osnews.com/story/144094/hp-ux-hits-end-of-life-today-and-im-sad/) - [Comments](https://lobste.rs/s/hj01zc/hp_ux_hits_end_life_today_i_m_sad)

## Global Developments

* [California To Require All School Districts To Restrict Student Smartphone Use by 2026](https://news.slashdot.org/story/25/12/31/1534251/california-to-require-all-school-districts-to-restrict-student-smartphone-use-by-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comments](https://news.slashdot.org/story/25/12/31/1534251/california-to-require-all-school-districts-to-restrict-student-smartphone-use-by-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [NASA Craft To Face Heat-Shield Test on Its First Astronaut Flight Next Year](https://science.slashdot.org/story/25/12/31/1826246/nasa-craft-to-face-heat-shield-test-on-its-first-astronaut-flight-next-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Comments](https://science.slashdot.org/story/25/12/31/1826246/nasa-craft-to-face-heat-shield-test-on-its-first-astronaut-flight-next-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Creative and Storytelling Ventures

* [I canceled my programming book deal](https://austinhenley.com/blog/canceledbookdeal.html) - [Comments](https://lobste.rs/s/tenl1g/i_canceled_my_programming_book_deal)

* [What I've Learned Writing Gleam](https://nohzafk.github.io/posts/2025-12-27-what-i-ve-learned-writting-gleam/) - [Comments](https://lobste.rs/s/amcuhv/what_i_ve_learned_writing_gleam/)

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

* [2026-01-01, 01:14:33](https://news.ycombinator.com/item?id=46450217) - [Nerd: The First Programming Language Not Built for Humans](https://www.nerd-lang.org/about)
* [2026-01-01, 01:10:00](https://news.slashdot.org/story/25/12/31/226259/warren-buffett-retires-as-berkshire-hathaway-ceo-after-55-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Warren Buffett Retires As Berkshire Hathaway CEO After 55 Years](https://news.slashdot.org/story/25/12/31/226259/warren-buffett-retires-as-berkshire-hathaway-ceo-after-55-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-01, 01:01:22](https://news.ycombinator.com/item?id=46450122) - [GoGoGrandparent (YC S16) Is Hiring Tech Leads](https://www.ycombinator.com/companies/gogograndparent/jobs/w2jGKM7-gogograndparent-yc-s16-is-hiring-tech-leads)
* [2026-01-01, 00:50:00](https://hardware.slashdot.org/story/25/12/31/2149206/stewart-cheifet-computer-chronicles-host-dies-at-87?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Stewart Cheifet, Computer Chronicles Host, Dies At 87](https://hardware.slashdot.org/story/25/12/31/2149206/stewart-cheifet-computer-chronicles-host-dies-at-87?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-01, 00:37:00](https://soylentnews.org/article.pl?sid=25/12/31/0148238&amp;from=rss) - [Not Everyone Reads the Room the Same](https://soylentnews.org/article.pl?sid=25/12/31/0148238&amp;from=rss)
* [2026-01-01, 00:30:00](https://tech.slashdot.org/story/25/12/31/2238231/tech-startups-are-handing-out-free-nicotine-pouches-to-boost-productivity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tech Startups Are Handing Out Free Nicotine Pouches to Boost Productivity](https://tech.slashdot.org/story/25/12/31/2238231/tech-startups-are-handing-out-free-nicotine-pouches-to-boost-productivity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-01-01, 00:21:21](https://lobste.rs/s/lvtmvw/bokehlicious_selfies_python) - [Bokehlicious Selfies in Python](https://www.rahulrav.com/blog/bokehlicious.html)
* [2026-01-01, 00:18:53](https://lobste.rs/s/tenl1g/i_canceled_my_programming_book_deal) - [I canceled my programming book deal](https://austinhenley.com/blog/canceledbookdeal.html)
* [2026-01-01, 00:18:43](https://news.ycombinator.com/item?id=46449812) - [Show HN: BusterMQ, Thread-per-core NATS server in Zig with io_uring](https://bustermq.sh/)
* [2026-01-01, 00:02:14](https://news.ycombinator.com/item?id=46449694) - [The Delete Act](https://privacy.ca.gov/drop/about-drop-and-the-delete-act/)
* [2026-01-01, 00:00:00](https://soylentnews.org/article.pl?sid=25/12/31/0616216&amp;from=rss) - [Happy New Year 2026 !](https://soylentnews.org/article.pl?sid=25/12/31/0616216&amp;from=rss)
* [2025-12-31, 23:58:28](https://lobste.rs/s/hj01zc/hp_ux_hits_end_life_today_i_m_sad) - [HP-UX hits end-of-life today, and I’m sad](https://www.osnews.com/story/144094/hp-ux-hits-end-of-life-today-and-im-sad/)
* [2025-12-31, 23:54:46](https://news.ycombinator.com/item?id=46449643) - [2025: The Year in LLMs](https://simonwillison.net/2025/Dec/31/the-year-in-llms/)
* [2025-12-31, 23:50:00](https://it.slashdot.org/story/25/12/31/2021253/darkspectre-hackers-spread-malware-to-88-million-chrome-edge-and-firefox-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DarkSpectre Hackers Spread Malware To 8.8 Million Chrome, Edge, and Firefox Users](https://it.slashdot.org/story/25/12/31/2021253/darkspectre-hackers-spread-malware-to-88-million-chrome-edge-and-firefox-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-31, 23:10:00](https://slashdot.org/story/25/12/31/204215/openai-is-paying-employees-more-than-any-major-tech-startup-in-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Is Paying Employees More Than Any Major Tech Startup in History](https://slashdot.org/story/25/12/31/204215/openai-is-paying-employees-more-than-any-major-tech-startup-in-history?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-31, 23:04:40](https://lobste.rs/s/gs5ujg/why_object_arrays_soa_pattern_beat) - [Why Object of Arrays (SoA pattern) beat interleaved arrays: a JavaScript performance rabbit hole](https://www.royalbhati.com/posts/js-array-vs-typedarray)
* [2025-12-31, 23:01:03](https://lobste.rs/s/shqikf/way_do_open_permissionless_mesh_network) - [A way to do an open and permissionless mesh network](https://fiatjaf.com/582ccd1d.html)
* [2025-12-31, 22:30:00](https://yro.slashdot.org/story/25/12/31/1959207/trump-administration-removes-three-spyware-linked-execs-from-sanctions-list?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Administration Removes Three Spyware-Linked Execs From Sanctions List](https://yro.slashdot.org/story/25/12/31/1959207/trump-administration-removes-three-spyware-linked-execs-from-sanctions-list?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-31, 22:11:33](https://news.ycombinator.com/item?id=46448894) - [Scientists unlock brain&apos;s natural clean-up system for new treatments for stroke](https://www.monash.edu/pharm/about/news/news-listing/latest/scientists-unlock-brains-natural-clean-up-system-to-develop-new-treatments-for-stroke-and-other-neurological-diseases)
* [2025-12-31, 21:50:00](https://tech.slashdot.org/story/25/12/31/1954246/france-targets-australia-style-social-media-ban-for-children-next-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [France Targets Australia-Style Social Media Ban For Children Next Year](https://tech.slashdot.org/story/25/12/31/1954246/france-targets-australia-style-social-media-ban-for-children-next-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-31, 21:44:42](https://news.ycombinator.com/item?id=46448705) - [Warren Buffett steps down as Berkshire Hathaway CEO after six decades](https://www.latimes.com/business/story/2025-12-31/warren-buffett-steps-down-as-berkshire-hathaway-ceo-after-six-decades)
* [2025-12-31, 21:34:29](https://lobste.rs/s/foipu8/what_are_you_planning_learn_2026) - [What are you planning to learn in 2026?](https://lobste.rs/s/foipu8/what_are_you_planning_learn_2026)
* [2025-12-31, 21:15:00](https://news.slashdot.org/story/25/12/31/1834240/njs-answer-to-flooding-it-has-bought-out-and-demolished-1200-properties?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NJ&apos;s Answer To Flooding: It Has Bought Out and Demolished 1,200 Properties](https://news.slashdot.org/story/25/12/31/1834240/njs-answer-to-flooding-it-has-bought-out-and-demolished-1200-properties?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-31, 20:30:00](https://science.slashdot.org/story/25/12/31/1826246/nasa-craft-to-face-heat-shield-test-on-its-first-astronaut-flight-next-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [NASA Craft To Face Heat-Shield Test on Its First Astronaut Flight Next Year](https://science.slashdot.org/story/25/12/31/1826246/nasa-craft-to-face-heat-shield-test-on-its-first-astronaut-flight-next-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-31, 20:14:31](https://news.ycombinator.com/item?id=46447827) - [All-optical synthesis chip for large-scale intelligent semantic vision](https://www.science.org/doi/10.1126/science.adv7434)
* [2025-12-31, 19:51:00](https://slashdot.org/story/25/12/31/1817247/jpmorgan-says-javice-firms-billed-millions-just-for-attendance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [JPMorgan Says Javice Firms Billed Millions Just for &apos;Attendance&apos;](https://slashdot.org/story/25/12/31/1817247/jpmorgan-says-javice-firms-billed-millions-just-for-attendance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-31, 19:46:00](https://soylentnews.org/article.pl?sid=25/12/29/1810235&amp;from=rss) - [Jolla&apos;s Community Linux Phone Surpasses its Funding Goal](https://soylentnews.org/article.pl?sid=25/12/29/1810235&amp;from=rss)
* [2025-12-31, 19:10:00](https://tech.slashdot.org/story/25/12/31/1736226/net-neutrality-was-back-until-it-wasnt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Net Neutrality Was Back, Until It Wasn&apos;t](https://tech.slashdot.org/story/25/12/31/1736226/net-neutrality-was-back-until-it-wasnt?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-31, 19:08:39](https://news.ycombinator.com/item?id=46447202) - [PyPI in 2025: A Year in Review](https://blog.pypi.org/posts/2025-12-31-pypi-2025-in-review/)
* [2025-12-31, 18:39:40](https://news.ycombinator.com/item?id=46446938) - [On privacy and control](https://toidiu.com/blog/2025-12-25-privacy-and-control/)
* [2025-12-31, 18:37:34](https://lobste.rs/s/sp7fkl/on_privacy_control_my_tech_setup) - [On Privacy and control. My tech setup](https://toidiu.com/blog/2025-12-25-privacy-and-control/)
* [2025-12-31, 18:30:00](https://science.slashdot.org/story/25/12/31/1716233/poor-sleep-quality-accelerates-brain-aging?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Poor Sleep Quality Accelerates Brain Aging](https://science.slashdot.org/story/25/12/31/1716233/poor-sleep-quality-accelerates-brain-aging?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-31, 18:26:32](https://news.ycombinator.com/item?id=46446815) - [I canceled my book deal](https://austinhenley.com/blog/canceledbookdeal.html)
* [2025-12-31, 17:41:46](https://news.ycombinator.com/item?id=46446359) - [Stewart Cheifet, creator of The Computer Chronicles, has died](https://obits.goldsteinsfuneral.com/stewart-cheifet)
* [2025-12-31, 17:29:40](https://lobste.rs/s/99vome/agents_done_right_framework_vision_for) - [Agents Done Right: A Framework Vision for 2026](https://blog.bryanl.dev/posts/agent-framework-vision/)
* [2025-12-31, 17:26:25](https://lobste.rs/s/whjn41/apple_file_system_reference) - [Apple File System Reference](https://developer.apple.com/support/downloads/Apple-File-System-Reference.pdf)
* [2025-12-31, 17:00:00](https://ask.slashdot.org/story/25/12/31/1643240/slashdot-asks-your-favorite-2025-movies-tv-shows-and-books?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Slashdot Asks: Your Favorite 2025 Movies, TV Shows and Books?](https://ask.slashdot.org/story/25/12/31/1643240/slashdot-asks-your-favorite-2025-movies-tv-shows-and-books?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-31, 16:40:00](https://science.slashdot.org/story/25/12/31/1630256/can-colossals-genetically-engineered-animals-ever-be-the-real-thing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Can Colossal&apos;s Genetically Engineered Animals Ever Be the Real Thing?](https://science.slashdot.org/story/25/12/31/1630256/can-colossals-genetically-engineered-animals-ever-be-the-real-thing?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-31, 16:01:00](https://news.slashdot.org/story/25/12/31/1534251/california-to-require-all-school-districts-to-restrict-student-smartphone-use-by-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California To Require All School Districts To Restrict Student Smartphone Use by 2026](https://news.slashdot.org/story/25/12/31/1534251/california-to-require-all-school-districts-to-restrict-student-smartphone-use-by-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-31, 15:52:51](https://news.ycombinator.com/item?id=46445195) - [Scaffolding to Superhuman: How Curriculum Learning Solved 2048 and Tetris](https://kywch.github.io/blog/2025/12/curriculum-learning-2048-tetris/)
* [2025-12-31, 15:46:34](https://news.ycombinator.com/item?id=46445131) - [The compiler is your best friend](https://blog.daniel-beskin.com/2025-12-22-the-compiler-is-your-best-friend-stop-lying-to-it)
* [2025-12-31, 15:28:47](https://lobste.rs/s/95g7ah/lispme_implementation_scheme_for_palm) - [LispMe: An Implementation of Scheme for the Palm Pilot](https://citeseerx.ist.psu.edu/document?repid=rep1&amp;type=pdf&amp;doi=62b505a67fdaf3f9bc0212536b65ac26aaedabd1)
* [2025-12-31, 15:03:00](https://soylentnews.org/article.pl?sid=25/12/29/185233&amp;from=rss) - [Closure of US Institute Will Do Immense Harm to Climate Research](https://soylentnews.org/article.pl?sid=25/12/29/185233&amp;from=rss)
* [2025-12-31, 14:45:17](https://lobste.rs/s/2f072b/web_engine_ci_on_shoestring_budget) - [Web engine CI on a shoestring budget](https://www.azabani.com/2025/12/18/shoestring-web-engine-ci.html)
* [2025-12-31, 13:50:41](https://news.ycombinator.com/item?id=46444020) - [How AI labs are solving the power problem](https://newsletter.semianalysis.com/p/how-ai-labs-are-solving-the-power)
* [2025-12-31, 13:44:41](https://news.ycombinator.com/item?id=46443988) - [When square pixels aren&apos;t square](https://alexwlchan.net/2025/square-pixels/)
* [2025-12-31, 12:43:58](https://news.ycombinator.com/item?id=46443626) - [Nvidia GB10&apos;s Memory Subsystem, from the CPU Side](https://chipsandcheese.com/p/inside-nvidia-gb10s-memory-subsystem)
* [2025-12-31, 12:32:27](https://news.ycombinator.com/item?id=46443579) - [The most famous transcendental numbers](https://sprott.physics.wisc.edu/pickover/trans.html)
* [2025-12-31, 11:19:31](https://lobste.rs/s/x6ruya/using_corne_split_keyboard_for_half_year) - [Using The Corne Split Keyboard For Half A Year](https://rugu.dev/en/blog/corne/)
* [2025-12-31, 10:57:11](https://lobste.rs/s/lromlz/who_invented_transistor) - [Who Invented the Transistor?](https://people.idsia.ch/~juergen/who-invented-the-transistor.html)
* [2025-12-31, 10:20:00](https://soylentnews.org/article.pl?sid=25/12/29/1752203&amp;from=rss) - [Company Plans to Build Swarm of 4,000 Giant Mirrors in Low Earth Orbit to “Sell Sunlight\&quot; at Night](https://soylentnews.org/article.pl?sid=25/12/29/1752203&amp;from=rss)
* [2025-12-31, 10:12:51](https://news.ycombinator.com/item?id=46442903) - [Akin&apos;s Laws of Spacecraft Design (2011) [pdf]](https://www.ece.uvic.ca/~elec399/201409/Akin%27s%20Laws%20of%20Spacecraft%20Design.pdf)
* [2025-12-31, 10:11:14](https://lobste.rs/s/ozuobo/modular_monolith_microservices_data) - [Modular Monolith and Microservices: Data ownership, boundaries, consistency and synchronization](https://binaryigor.com/modular-monolith-and-microservices-data.html)
* [2025-12-31, 10:08:27](https://lobste.rs/s/4totv7/i_fed_24_years_my_blog_posts_markov_model) - [I Fed 24 Years of My Blog Posts to a Markov Model](https://susam.net/fed-24-years-of-posts-to-markov-model.html)
* [2025-12-31, 09:59:10](https://lobste.rs/s/z3ckd3/fixing_buffer_overflow_unix_v4_like_it_s) - [Fixing a Buffer Overflow in UNIX v4 Like It&apos;s 1973](https://sigma-star.at/blog/2025/12/unix-v4-buffer-overflow/)
* [2025-12-31, 09:49:46](https://lobste.rs/s/3cwha2/solid_load_bull) - [A SOLID Load of Bull](https://loup-vaillant.fr/articles/solid-bull)
* [2025-12-31, 07:47:44](https://news.ycombinator.com/item?id=46442245) - [Show HN: Use Claude Code to Query 600 GB Indexes over Hacker News, ArXiv, etc.](https://exopriors.com/scry)
* [2025-12-31, 07:34:20](https://lobste.rs/s/13cyor/mastodon_stories_for_systemd_v259) - [Mastodon Stories for systemd v259](https://0pointer.net/blog/mastodon-stories-for-systemd-v259.html)
* [2025-12-31, 05:35:00](https://soylentnews.org/article.pl?sid=25/12/29/1748200&amp;from=rss) - [Spotify Disables Accounts After Open-Source Group Scrapes 86 Million Songs From Platform](https://soylentnews.org/article.pl?sid=25/12/29/1748200&amp;from=rss)
* [2025-12-31, 05:30:08](https://lobste.rs/s/2zuvga/runst_does_not_prevent_resources_from) - [runST does not prevent resources from escaping](https://welltypedwit.ch/posts/runst-does-not-prevent-resources-from-escaping.html)
* [2025-12-31, 03:52:12](https://lobste.rs/s/npnchn/what_are_some_interesting_projects_you_ve) - [What are some interesting projects that you&apos;ve done this year?](https://lobste.rs/s/npnchn/what_are_some_interesting_projects_you_ve)
* [2025-12-31, 03:03:25](https://lobste.rs/s/amcuhv/what_i_ve_learned_writing_gleam) - [What I&apos;ve Learned Writing Gleam](https://nohzafk.github.io/posts/2025-12-27-what-i-ve-learned-writting-gleam/)
* [2025-12-31, 02:57:38](https://lobste.rs/s/rmolyl/simple_bidirectional_type_inference) - [Simple Bidirectional Type Inference](https://ettolrach.com/blog/bidirectional_inference.html)
* [2025-12-31, 01:33:03](https://lobste.rs/s/sfmlns/why_we_trust_strangers_open_source_more) - [Why we trust strangers’ open source more than our colleagues’](https://00f.net/2025/09/01/opensource-by-internal-contributors/)
* [2025-12-31, 00:53:00](https://soylentnews.org/article.pl?sid=25/12/29/1742252&amp;from=rss) - [Is Proton Leaving Switzerland? \&quot;Legal Uncertainty\&quot; of Proposed Surveillance Laws Would be the Reason](https://soylentnews.org/article.pl?sid=25/12/29/1742252&amp;from=rss)
* [2025-12-30, 20:04:00](https://soylentnews.org/article.pl?sid=25/12/28/1123222&amp;from=rss) - [Beware of OpenAI&apos;s &apos;Grantwashing&apos; on AI Harms](https://soylentnews.org/article.pl?sid=25/12/28/1123222&amp;from=rss)
* [2025-12-30, 15:23:00](https://soylentnews.org/article.pl?sid=25/12/28/1121243&amp;from=rss) - [First Ever Version of UNIX Written in C is Running Again](https://soylentnews.org/article.pl?sid=25/12/28/1121243&amp;from=rss)
* [2025-12-30, 15:06:28](https://lobste.rs/s/4uhvgb/fedimeteo_how_tiny_4_freebsd_vps_became) - [FediMeteo: How a Tiny €4 FreeBSD VPS Became a Global Weather Service for Thousands](https://it-notes.dragas.net/2025/02/26/fedimeteo-how-a-tiny-freebsd-vps-became-a-global-weather-service-for-thousands/)
* [2025-12-30, 15:06:13](https://lobste.rs/s/0g0ebi/formally_speaking_transpiler_is_useless) - [Formally speaking, \&quot;Transpiler\&quot; is a useless word](https://people.csail.mit.edu/rachit/post/transpiler-formal/)
* [2025-12-30, 10:36:00](https://soylentnews.org/article.pl?sid=25/12/28/1117228&amp;from=rss) - [South Korea to Require Facial Recognition for New Mobile Numbers](https://soylentnews.org/article.pl?sid=25/12/28/1117228&amp;from=rss)
* [2025-12-30, 05:53:00](https://soylentnews.org/article.pl?sid=25/12/28/1115208&amp;from=rss) - [Phoenix Emerges as a Modern X Server Written From Scratch in Zig](https://soylentnews.org/article.pl?sid=25/12/28/1115208&amp;from=rss)
* [2025-12-30, 01:12:00](https://soylentnews.org/article.pl?sid=25/12/28/1112249&amp;from=rss) - [Shouting at Seagulls Could Stop Them Stealing Your Food](https://soylentnews.org/article.pl?sid=25/12/28/1112249&amp;from=rss)
* [2025-12-29, 20:25:00](https://soylentnews.org/article.pl?sid=25/12/27/2318230&amp;from=rss) - [Engineer Turns E-Ink Tablet Into Computer Monitor in Linux](https://soylentnews.org/article.pl?sid=25/12/27/2318230&amp;from=rss)
* [2025-12-29, 15:36:00](https://soylentnews.org/article.pl?sid=25/12/27/239245&amp;from=rss) - [LG Forces TV Owners to Use Microsoft ‘AI’ Copilot App You Can&apos;t Uninstall and Nobody Asked for](https://soylentnews.org/article.pl?sid=25/12/27/239245&amp;from=rss)
* [2025-12-29, 10:52:00](https://soylentnews.org/article.pl?sid=25/12/27/235226&amp;from=rss) - [How Recent is \&quot;Recent\&quot;?](https://soylentnews.org/article.pl?sid=25/12/27/235226&amp;from=rss)
* [2025-12-29, 06:09:00](https://soylentnews.org/article.pl?sid=25/12/27/230209&amp;from=rss) - [Microsoft&apos;s Research Dream to Replace All C/C++ With Rust by 2030](https://soylentnews.org/article.pl?sid=25/12/27/230209&amp;from=rss)
* [2025-12-29, 03:25:35](https://news.ycombinator.com/item?id=46417162) - [Demystifying DVDs](https://hiddenpalace.org/News/One_Bad_Ass_Hedgehog_-_Shadow_the_Hedgehog#Demystifying_DVDs)
* [2025-12-29, 01:17:00](https://soylentnews.org/article.pl?sid=25/12/27/2258256&amp;from=rss) - [Why Swearing Makes You Stronger](https://soylentnews.org/article.pl?sid=25/12/27/2258256&amp;from=rss)
* [2025-12-28, 20:37:00](https://soylentnews.org/article.pl?sid=25/12/26/2021243&amp;from=rss) - [Your Car&apos;s Web Browser May be on the Road to Cyber Ruin](https://soylentnews.org/article.pl?sid=25/12/26/2021243&amp;from=rss)
* [2025-12-28, 17:00:00](https://soylentnews.org/article.pl?sid=25/12/28/1357214&amp;from=rss) - [The 39th Chaos Communication Congress (39C3) Taking Place Now in Hamburg Through 30 Dec 2025](https://soylentnews.org/article.pl?sid=25/12/28/1357214&amp;from=rss)
* [2025-12-28, 15:49:00](https://soylentnews.org/article.pl?sid=25/12/26/2015254&amp;from=rss) - [How OpenAI is Using GPT-5 Codex to Improve the AI Tool Itself](https://soylentnews.org/article.pl?sid=25/12/26/2015254&amp;from=rss)
* [2025-12-28, 11:02:00](https://soylentnews.org/article.pl?sid=25/12/26/205213&amp;from=rss) - [Will AI Kill All the Lawyers?](https://soylentnews.org/article.pl?sid=25/12/26/205213&amp;from=rss)
* [2025-12-28, 08:16:49](https://news.ycombinator.com/item?id=46409379) - [Observed Agent Sandbox Bypasses](https://voratiq.com/blog/yolo-in-the-sandbox/)
* [2025-12-28, 08:10:01](https://news.ycombinator.com/item?id=46409359) - [Doom in Django: testing the limits of LiveView at 600.000 divs/segundo](https://en.andros.dev/blog/7b1b607b/doom-in-django-testing-the-limits-of-liveview-at-600000-divssegundo/)
* [2025-12-28, 06:19:00](https://soylentnews.org/article.pl?sid=25/12/26/1958223&amp;from=rss) - [Texas Sues TV Makers for Taking Screenshots of What People Watch](https://soylentnews.org/article.pl?sid=25/12/26/1958223&amp;from=rss)
* [2025-12-28, 01:33:00](https://soylentnews.org/article.pl?sid=25/12/26/1946250&amp;from=rss) - [Who Sets the Doomsday Clock?](https://soylentnews.org/article.pl?sid=25/12/26/1946250&amp;from=rss)
