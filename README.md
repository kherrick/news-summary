# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Technology Innovations

* [Thomson Reuters Wins First Major AI Copyright Case In the US](https://yro.slashdot.org/story/25/02/11/2139217/thomson-reuters-wins-first-major-ai-copyright-case-in-the-us?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Thomson Reuters secures a groundbreaking victory in an AI-related copyright case, setting a significant precedent in US law. [Comments](https://news.ycombinator.com/item?id=43018251)

* [Google Chrome May Soon Use 'AI' To Replace Compromised Passwords](https://it.slashdot.org/story/25/02/11/1952248/google-chrome-may-soon-use-ai-to-replace-compromised-passwords?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Google's plans to enhance security by using AI to manage compromised passwords could redefine user safety online.

* [DeepScaleR: Surpassing O1-Preview with a 1.5B Model by Scaling RL](https://pretty-radio-b75.notion.site/DeepScaleR-Surpassing-O1-Preview-with-a-1-5B-Model-by-Scaling-RL-19681902c1468005bed8ca303013a4e2) - Explore how reinforcement learning scaling achieves breakthroughs with a 1.5 billion-parameter model. [Comments](https://news.ycombinator.com/item?id=43017599)

* [EU Pledges $200 Billion in AI Spending in Bid To Catch Up With US, China](https://news.slashdot.org/story/25/02/11/1617259/eu-pledges-200-billion-in-ai-spending-in-bid-to-catch-up-with-us-china?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Massive investment in AI signals EU's effort to compete with global technology leaders.

* [AI Can Now Replicate Itself](https://slashdot.org/story/25/02/11/0137223/ai-can-now-replicate-itself?utm_source=rss1.0mainlinkanon&utm_medium=feed) - At the forefront of scientific discovery, AI systems now demonstrate self-replication capabilities.

## Cybersecurity and Software Insights

* [ROPing our way to RCE](https://modzero.com/en/blog/roping-our-way-to-rce/) - A detailed exploration of advanced exploitation techniques leading to remote code execution. [Comments](https://lobste.rs/s/as8dio/roping_our_way_rce)

* [Hackers Call Current AI Security Testing 'Bullshit'](https://it.slashdot.org/story/25/02/11/191240/hackers-call-current-ai-security-testing-bullshit?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Critical voices emerge over the inadequacy of AI security measures.

* [Supercharge Your Installs with apt-eatmydata: Because Who Needs Crash Safety Anyway?](https://balintreczey.hu/blog/supercharge-your-installs-with-apt-eatmydata-because-who-needs-crash-safety-anyway/) - A witty take on high-speed data installation tools with reduced safety. [Comments](https://lobste.rs/s/islphy/supercharge_your_installs_with_apt)

## Science and Environmental News

* [Only One Big Economy Is Aiming for Paris Agreement's 1.5C Goal](https://news.slashdot.org/story/25/02/11/1815209/only-one-big-economy-is-aiming-for-paris-agreements-15c-goal?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Growing concerns as global powers struggle to meet crucial climate change targets.

* [Asteroid's Odds of Hitting Earth Went Up. But Not Why You Think](https://soylentnews.org/article.pl?sid=25/02/10/133233&from=rss) - Reassessing asteroid impact probabilities highlights new challenges in space monitoring. [Comments](https://news.ycombinator.com/item?id=43017612)

* [Earth's Inner Core May Have Changed Shape, Say Scientists](https://news.slashdot.org/story/25/02/11/0130213/earths-inner-core-may-have-changed-shape-say-scientists?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Discoveries about our planet's core reveal unprecedented geological transformations.

* [Microplastics Can Block Blood Vessels in Mice Brains, Researchers Find](https://science.slashdot.org/story/25/02/11/1323249/microplastics-can-block-blood-vessels-in-mice-brains-researchers-find?utm_source=rss1.0mainlinkanon&utm_medium=feed) - New study reveals alarming effects of microplastics on brain health.

## Unique Tools and Projects

* [Writing my own dithering algorithm in Racket](https://amanvir.com/blog/writing-my-own-dithering-algorithm-in-racket) - Dive into the creative process of designing a unique dithering strategy in Racket. [Comments](https://lobste.rs/s/g8qbl7/writing_my_own_dithering_algorithm)

* [llm-sort: Sort input lines semantically with LLMs](https://github.com/vagos/llm-sort) - Harness LLMs for smart, context-aware text sorting algorithms. [Comments](https://lobste.rs/s/yxlisx/llm_sort_sort_input_lines_semantically)

* [Anchoreum: A game for learning CSS anchor positioning](https://anchoreum.com) - Innovative learning tool combining CSS and interactive gameplay. [Comments](https://news.ycombinator.com/item?id=43012714)

## Historical and Cultural Highlights

* [Windows 7: A 2025 perspective (rose-tinted or not)](https://www.dedoimedo.com/computers/windows-7-review-2025-perspective.html) - Reflecting on Windows 7's legacy and its relevance in modern computing. [Comments](https://lobste.rs/s/bleaa6/windows_7_2025_perspective_rose_tinted)

* [I tasted Honda's spicy rodent-repelling tape and I will do it again (2021)](https://haterade.substack.com/p/i-tasted-hondas-spicy-rodent-repelling) - Quirky hands-on review of Honda's rodent-repelling innovations. [Comments](https://news.ycombinator.com/item?id=43013615)

* [How Copyover MUD Servers Worked](http://jackkelly.name/blog/archives/2025/02/06/how_copyover_mud_servers_worked/) - A nostalgic dive into the mechanics of MUD server restarts. [Comments](https://lobste.rs/s/fwqjqm/how_copyover_mud_servers_worked)

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

* [2025-02-11, 21:40:00](https://yro.slashdot.org/story/25/02/11/2139217/thomson-reuters-wins-first-major-ai-copyright-case-in-the-us?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Thomson Reuters Wins First Major AI Copyright Case In the US](https://yro.slashdot.org/story/25/02/11/2139217/thomson-reuters-wins-first-major-ai-copyright-case-in-the-us?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 21:02:12](https://news.ycombinator.com/item?id=43018312) - [The Butter Thesis (2019)](https://nickgrossman.xyz/the-butter-thesis)
* [2025-02-11, 21:00:32](https://news.ycombinator.com/item?id=43018293) - [Empirical Health (YC S23) Is Hiring Design Engineers in NYC](https://www.ycombinator.com/companies/empirical-health/jobs/nZFQWLW-design-engineer)
* [2025-02-11, 20:56:21](https://news.ycombinator.com/item?id=43018251) - [Thomson Reuters wins first major AI copyright case in the US](https://www.wired.com/story/thomson-reuters-ai-copyright-lawsuit/)
* [2025-02-11, 20:55:00](https://lobste.rs/s/as8dio/roping_our_way_rce) - [ROPing our way to RCE](https://modzero.com/en/blog/roping-our-way-to-rce/)
* [2025-02-11, 20:55:00](https://tech.slashdot.org/story/25/02/11/2011222/anduril-to-take-over-managing-microsoft-goggles-for-us-army?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Anduril To Take Over Managing Microsoft Goggles for US Army](https://tech.slashdot.org/story/25/02/11/2011222/anduril-to-take-over-managing-microsoft-goggles-for-us-army?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 20:42:46](https://lobste.rs/s/g8qbl7/writing_my_own_dithering_algorithm) - [Writing my own dithering algorithm in Racket](https://amanvir.com/blog/writing-my-own-dithering-algorithm-in-racket)
* [2025-02-11, 20:17:24](https://lobste.rs/s/owydl7/open_source_software_corporate) - [Open Source Software and Corporate Influence](https://www.alilleybrinker.com/blog/open-source-software-and-corporate-influence/)
* [2025-02-11, 20:15:00](https://it.slashdot.org/story/25/02/11/1952248/google-chrome-may-soon-use-ai-to-replace-compromised-passwords?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google Chrome May Soon Use 'AI' To Replace Compromised Passwords](https://it.slashdot.org/story/25/02/11/1952248/google-chrome-may-soon-use-ai-to-replace-compromised-passwords?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 20:00:13](https://news.ycombinator.com/item?id=43017612) - [PassMark sees the first yearly drop in average CPU performance in its 20 years](https://www.tomshardware.com/pc-components/cpus/passmark-sees-the-first-yearly-drop-in-average-cpu-performance-in-its-20-years-of-benchmark-results)
* [2025-02-11, 19:59:00](https://news.ycombinator.com/item?id=43017599) - [DeepScaleR: Surpassing O1-Preview with a 1.5B Model by Scaling RL](https://pretty-radio-b75.notion.site/DeepScaleR-Surpassing-O1-Preview-with-a-1-5B-Model-by-Scaling-RL-19681902c1468005bed8ca303013a4e2)
* [2025-02-11, 19:45:00](https://soylentnews.org/article.pl?sid=25/02/10/133233&from=rss) - [Asteroid's Odds of Hitting Earth Went Up. But Not Why You Think](https://soylentnews.org/article.pl?sid=25/02/10/133233&from=rss)
* [2025-02-11, 19:39:21](https://lobste.rs/s/bleaa6/windows_7_2025_perspective_rose_tinted) - [Windows 7: A 2025 perspective (rose-tinted or not)](https://www.dedoimedo.com/computers/windows-7-review-2025-perspective.html)
* [2025-02-11, 19:35:00](https://slashdot.org/story/25/02/11/1932223/ftc-fines-donotpay-over-misleading-claims-of-robot-lawyer?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [FTC Fines DoNotPay Over Misleading Claims of 'Robot Lawyer'](https://slashdot.org/story/25/02/11/1932223/ftc-fines-donotpay-over-misleading-claims-of-robot-lawyer?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 19:31:03](https://lobste.rs/s/gjxaca/is_it_okay) - [Is it okay?](https://www.robinsloan.com/lab/is-it-okay/)
* [2025-02-11, 19:27:08](https://lobste.rs/s/islphy/supercharge_your_installs_with_apt) - [Supercharge Your Installs with apt-eatmydata: Because Who Needs Crash Safety Anyway?](https://balintreczey.hu/blog/supercharge-your-installs-with-apt-eatmydata-because-who-needs-crash-safety-anyway/)
* [2025-02-11, 19:15:02](https://news.ycombinator.com/item?id=43017010) - [The subtle art of designing physical controls for cars](https://www.theturnsignalblog.com/the-subtle-art-of-designing-physical-control-for-cars/)
* [2025-02-11, 19:01:46](https://news.ycombinator.com/item?id=43016802) - [Database of 750 companies building for people with disabilities](https://data.perkins.org/)
* [2025-02-11, 19:01:00](https://it.slashdot.org/story/25/02/11/191240/hackers-call-current-ai-security-testing-bullshit?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Hackers Call Current AI Security Testing 'Bullshit'](https://it.slashdot.org/story/25/02/11/191240/hackers-call-current-ai-security-testing-bullshit?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 18:44:48](https://news.ycombinator.com/item?id=43016574) - [Trust, 2-Party Relays, and QUIC](https://obscura.net/blog/bootstrapping-trust/)
* [2025-02-11, 18:30:13](https://news.ycombinator.com/item?id=43016353) - [Japan can be a science heavyweight once more if it rethinks funding](https://www.nature.com/articles/d41586-025-00394-8)
* [2025-02-11, 18:23:03](https://news.ycombinator.com/item?id=43016248) - [Reviving the joy and honor of working with your hands (2015)](https://richmond.com/holmberg-reviving-the-joy-and-honor-of-working-with-your-hands-will-strengthen-our-nation/article_d8130166-855d-53b6-94e1-cb735edcd7cc.html)
* [2025-02-11, 18:14:00](https://news.slashdot.org/story/25/02/11/1815209/only-one-big-economy-is-aiming-for-paris-agreements-15c-goal?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Only One Big Economy Is Aiming for Paris Agreement's 1.5C Goal](https://news.slashdot.org/story/25/02/11/1815209/only-one-big-economy-is-aiming-for-paris-agreements-15c-goal?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 18:07:56](https://lobste.rs/s/yxlisx/llm_sort_sort_input_lines_semantically) - [llm-sort: Sort input lines semantically with LLMs](https://github.com/vagos/llm-sort)
* [2025-02-11, 17:37:38](https://news.ycombinator.com/item?id=43015631) - [ASTRA: HackerRank's coding benchmark for LLMs](https://www.hackerrank.com/ai/astra-reports)
* [2025-02-11, 17:35:00](https://slashdot.org/story/25/02/11/1735222/kickstarter-will-alert-backers-when-a-project-has-failed?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Kickstarter Will Alert Backers When a Project Has Failed](https://slashdot.org/story/25/02/11/1735222/kickstarter-will-alert-backers-when-a-project-has-failed?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 17:08:35](https://news.ycombinator.com/item?id=43015267) - [Launch HN: A0.dev (YC W25) – React Native App Generator](https://news.ycombinator.com/item?id=43015267)
* [2025-02-11, 16:50:00](https://news.slashdot.org/story/25/02/11/1617259/eu-pledges-200-billion-in-ai-spending-in-bid-to-catch-up-with-us-china?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [EU Pledges $200 Billion in AI Spending in Bid To Catch Up With US, China](https://news.slashdot.org/story/25/02/11/1617259/eu-pledges-200-billion-in-ai-spending-in-bid-to-catch-up-with-us-china?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 16:46:24](https://lobste.rs/s/hnn6hg/composiphrase_composable_editing) - [Composiphrase: Composable editing language like Vim, but moreso](https://www.willghatch.net/blog/text-editing/composiphrase_composable-editing-language-like-vim-but-moreso/)
* [2025-02-11, 16:40:20](https://news.ycombinator.com/item?id=43014918) - [LLMs can teach themselves to better predict the future](https://arxiv.org/abs/2502.05253)
* [2025-02-11, 16:15:05](https://lobste.rs/s/f4ivxh/machine_learning_human_unlearning) - [Machine: Learning; Human: Unlearning](https://wickstrom.tech/2025-02-11-machine-learning-human-unlearning.html)
* [2025-02-11, 16:14:03](https://news.ycombinator.com/item?id=43014573) - [Time to act on the risk of efficient personalized text generation](https://arxiv.org/abs/2502.06560)
* [2025-02-11, 16:12:00](https://tech.slashdot.org/story/25/02/11/1612249/meta-starts-eliminating-jobs-in-shift-to-find-ai-talent?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Meta Starts Eliminating Jobs in Shift To Find AI Talent](https://tech.slashdot.org/story/25/02/11/1612249/meta-starts-eliminating-jobs-in-shift-to-find-ai-talent?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 16:00:59](https://news.ycombinator.com/item?id=43014408) - [Intel's Battlemage Architecture](https://chipsandcheese.com/p/intels-battlemage-architecture)
* [2025-02-11, 15:45:00](https://soylentnews.org/meta/article.pl?sid=25/02/04/106248&from=rss) - [Soylent Update - February 2025](https://soylentnews.org/meta/article.pl?sid=25/02/04/106248&from=rss)
* [2025-02-11, 15:41:00](https://news.slashdot.org/story/25/02/11/1541222/youtube-surprise-ceo-says-tv-overtakes-mobile-as-primary-device-for-viewing?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [YouTube Surprise: CEO Says TV Overtakes Mobile as 'Primary Device' for Viewing](https://news.slashdot.org/story/25/02/11/1541222/youtube-surprise-ceo-says-tv-overtakes-mobile-as-primary-device-for-viewing?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 15:40:11](https://news.ycombinator.com/item?id=43014070) - [Get in loser. We're rewinding the stack](https://andrews.substack.com/p/get-in-loser-were-rewinding-the-stack)
* [2025-02-11, 15:39:53](https://lobste.rs/s/ctbita/skill_future_is_focus_not_ai) - [The skill of the future is 'Focus', not 'AI'](https://www.carette.xyz/posts/focus_will_be_the_skill_of_the_future/)
* [2025-02-11, 15:37:43](https://lobste.rs/s/p5nshp/boring_tech_is_mature_not_old) - [Boring tech is mature, not old](https://rubenerd.com/boring-tech-is-mature-not-old/)
* [2025-02-11, 15:08:08](https://news.ycombinator.com/item?id=43013615) - [I tasted Honda's spicy rodent-repelling tape and I will do it again (2021)](https://haterade.substack.com/p/i-tasted-hondas-spicy-rodent-repelling)
* [2025-02-11, 15:00:00](https://soylentnews.org/article.pl?sid=25/02/09/1917214&from=rss) - [Researchers Used AI To Build Groundbreaking Nanomaterials Lighter And Stronger Than Titanium](https://soylentnews.org/article.pl?sid=25/02/09/1917214&from=rss)
* [2025-02-11, 14:55:45](https://news.ycombinator.com/item?id=43013431) - [Backblaze Drive Stats for 2024](https://www.backblaze.com/blog/backblaze-drive-stats-for-2024/)
* [2025-02-11, 14:41:00](https://science.slashdot.org/story/25/02/11/1323249/microplastics-can-block-blood-vessels-in-mice-brains-researchers-find?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Microplastics Can Block Blood Vessels in Mice Brains, Researchers Find](https://science.slashdot.org/story/25/02/11/1323249/microplastics-can-block-blood-vessels-in-mice-brains-researchers-find?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 14:33:36](https://lobste.rs/s/8fnyam/your_ai_can_t_see_gorillas) - [Your AI can’t see gorillas](https://chiraaggohel.com/posts/llms-eda/)
* [2025-02-11, 14:10:36](https://lobste.rs/s/ohcl00/catalog_ways_generate_ssa) - [A catalog of ways to generate SSA](https://bernsteinbear.com/blog/ssa/)
* [2025-02-11, 14:08:22](https://news.ycombinator.com/item?id=43012862) - [Boring tech is mature, not old](https://rubenerd.com/boring-tech-is-mature-not-old/)
* [2025-02-11, 14:00:00](https://news.slashdot.org/story/25/02/11/1316202/uk-and-us-refuse-to-sign-international-ai-declaration?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [UK and US Refuse To Sign International AI Declaration](https://news.slashdot.org/story/25/02/11/1316202/uk-and-us-refuse-to-sign-international-ai-declaration?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 13:58:01](https://news.ycombinator.com/item?id=43012751) - [FLAC 1.5 Delivers Multi-Threaded Encoding](https://www.phoronix.com/news/FLAC-1.5-Released)
* [2025-02-11, 13:54:01](https://news.ycombinator.com/item?id=43012714) - [Anchoreum: A game for learning CSS anchor positioning](https://anchoreum.com)
* [2025-02-11, 13:00:00](https://slashdot.org/story/25/02/11/0137223/ai-can-now-replicate-itself?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [AI Can Now Replicate Itself](https://slashdot.org/story/25/02/11/0137223/ai-can-now-replicate-itself?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 12:44:06](https://lobste.rs/s/lymowb/frontier_ai_systems_have_surpassed_self) - [Frontier AI systems have surpassed the self-replicating red line](https://arxiv.org/abs/2412.12140)
* [2025-02-11, 12:28:49](https://lobste.rs/s/5feang/how_about_trailing_commas_sql) - [How about trailing commas in SQL?](https://peter.eisentraut.org/blog/2025/02/11/how-about-trailing-commas-in-sql)
* [2025-02-11, 10:23:00](https://soylentnews.org/article.pl?sid=25/02/09/194224&from=rss) - [Private Spacecraft Gets Dramatic View Of Earth Eclipsing Moon](https://soylentnews.org/article.pl?sid=25/02/09/194224&from=rss)
* [2025-02-11, 10:00:00](https://news.slashdot.org/story/25/02/11/0130213/earths-inner-core-may-have-changed-shape-say-scientists?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Earth's Inner Core May Have Changed Shape, Say Scientists](https://news.slashdot.org/story/25/02/11/0130213/earths-inner-core-may-have-changed-shape-say-scientists?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 09:42:42](https://news.ycombinator.com/item?id=43010814) - [Firing programmers for AI is a mistake](https://defragzone.substack.com/p/techs-dumbest-mistake-why-firing)
* [2025-02-11, 09:03:47](https://lobste.rs/s/4a2qzs/writing_git_extensions_perl) - [Writing git extensions in Perl](https://dev.to/jj/writing-git-extensions-in-perl-3ken)
* [2025-02-11, 08:26:16](https://news.ycombinator.com/item?id=43010365) - [How about trailing commas in SQL?](http://peter.eisentraut.org/blog/2025/02/11/how-about-trailing-commas-in-sql)
* [2025-02-11, 07:05:39](https://news.ycombinator.com/item?id=43009850) - [TSMC 2nm Process Disclosure – How Does It Measure Up?](https://semiwiki.com/semiconductor-services/techinsights/352972-iedm-2025-tsmc-2nm-process-disclosure-how-does-it-measure-up/)
* [2025-02-11, 07:00:00](https://tech.slashdot.org/story/25/02/11/0122253/us-funded-social-network-attacking-pesticide-critics-shuts-down?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [US-Funded 'Social Network' Attacking Pesticide Critics Shuts Down](https://tech.slashdot.org/story/25/02/11/0122253/us-funded-social-network-attacking-pesticide-critics-shuts-down?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-11, 06:13:41](https://lobste.rs/s/gr3ghv/we_replaced_our_react_frontend_with_go) - [We Replaced Our React Frontend with Go and WebAssembly](https://dagger.io/blog/replaced-react-with-go)
* [2025-02-11, 05:45:00](https://soylentnews.org/article.pl?sid=25/02/09/190215&from=rss) - [Intel Has Already Received $2.2B in Federal Grants for Chip Production](https://soylentnews.org/article.pl?sid=25/02/09/190215&from=rss)
* [2025-02-11, 04:53:05](https://lobste.rs/s/s4ew3u/introduction_operating_system) - [Introduction to Operating System Abstractions using Plan 9](https://archive.org/details/plan9designintro)
* [2025-02-11, 04:13:47](https://news.ycombinator.com/item?id=43008879) - [Nvidia's RTX 5090 power connectors are melting](https://www.theverge.com/news/609207/nvidia-rtx-5090-power-connector-melting-burning-issues)
* [2025-02-11, 01:20:21](https://lobste.rs/s/fwqjqm/how_copyover_mud_servers_worked) - [How Copyover MUD Servers Worked](http://jackkelly.name/blog/archives/2025/02/06/how_copyover_mud_servers_worked/)
* [2025-02-11, 01:00:00](https://soylentnews.org/article.pl?sid=25/02/09/1853248&from=rss) - [Rare Otter 'Disappeared' In Kyrgyzstan, Experts Warn](https://soylentnews.org/article.pl?sid=25/02/09/1853248&from=rss)
* [2025-02-10, 23:14:02](https://lobste.rs/s/fkr3ha/some_terminal_frustrations) - [Some terminal frustrations](https://jvns.ca/blog/2025/02/05/some-terminal-frustrations/)
* [2025-02-10, 23:05:03](https://lobste.rs/s/uoiosa/undergraduate_invents_faster_hash_table) - [Undergraduate Invents Faster Hash Table](https://www.quantamagazine.org/undergraduate-upends-a-40-year-old-data-science-conjecture-20250210/)
* [2025-02-10, 20:57:55](https://lobste.rs/s/ktw3bz/you_should_use_tmp_more) - [You Should Use /tmp/ More](https://atthis.link/blog/2025/58671.html)
* [2025-02-10, 20:56:54](https://lobste.rs/s/kthinp/free_wiki_hosting_no_ads) - [Free Wiki Hosting, No Ads](https://miraheze.org)
* [2025-02-10, 20:19:00](https://soylentnews.org/article.pl?sid=25/02/09/1410202&from=rss) - [IBM Banks on Friendlier Us Regulatory Climate for Dealmaking](https://soylentnews.org/article.pl?sid=25/02/09/1410202&from=rss)
* [2025-02-10, 15:43:08](https://lobste.rs/s/jpa59v/sandboxing_perl_with_webassembly) - [Sandboxing Perl with WebAssembly](https://andrews.substack.com/p/zeroperl-sandboxed-perl-with-webassembly)
* [2025-02-10, 15:34:00](https://soylentnews.org/article.pl?sid=25/02/09/145236&from=rss) - [Kaspersky Researchers Find Screenshot-Reading Malware on the App Store and Google Play](https://soylentnews.org/article.pl?sid=25/02/09/145236&from=rss)
* [2025-02-10, 13:20:55](https://lobste.rs/s/ymszmx/i_blog_with_raw_txt) - [I blog with raw txt](https://misc.l3m.in/txt/raw_txt.txt)
* [2025-02-10, 13:11:28](https://news.ycombinator.com/item?id=42999788) - [The hallucinatory thoughts of the dying mind](https://thereader.mitpress.mit.edu/the-hallucinatory-thoughts-of-the-dying-mind/)
* [2025-02-10, 11:59:41](https://news.ycombinator.com/item?id=42999297) - [Building a personal, private AI computer on a budget](https://ewintr.nl/posts/2025/building-a-personal-private-ai-computer-on-a-budget/)
* [2025-02-10, 10:52:00](https://soylentnews.org/article.pl?sid=25/02/09/1336213&from=rss) - [Your AI Can't See Gorillas](https://soylentnews.org/article.pl?sid=25/02/09/1336213&from=rss)
* [2025-02-10, 09:22:29](https://news.ycombinator.com/item?id=42998431) - [Show HN: Seen – Virtual list rendering with 1M+ notes](https://seen-v2.vercel.app/)
* [2025-02-10, 08:20:54](https://news.ycombinator.com/item?id=42998009) - [Craftax: (Crafter and NetHack) RL Environment in Jax](https://github.com/MichaelTMatthews/Craftax)
* [2025-02-10, 06:10:00](https://soylentnews.org/article.pl?sid=25/02/09/1321246&from=rss) - [WhatsApp Says Journalists and Civil Society Members Were Targets of Israeli Spyware](https://soylentnews.org/article.pl?sid=25/02/09/1321246&from=rss)
* [2025-02-10, 01:25:05](https://news.ycombinator.com/item?id=42995991) - [Show HN: Infinite horizontal arrays of text editors](https://zeminary.com/arrays/app.html)
* [2025-02-10, 01:23:00](https://soylentnews.org/article.pl?sid=25/02/08/1514221&from=rss) - [Facebook Torrents 81TB of Data to Feed their Models](https://soylentnews.org/article.pl?sid=25/02/08/1514221&from=rss)
* [2025-02-09, 20:36:00](https://soylentnews.org/article.pl?sid=25/02/08/1511237&from=rss) - [NASA Scientists Want to Solve a Mystery: Why Did Life \"Turn Left?\"](https://soylentnews.org/article.pl?sid=25/02/08/1511237&from=rss)
* [2025-02-09, 15:52:00](https://soylentnews.org/article.pl?sid=25/02/08/155232&from=rss) - [U.K. Orders Apple to Let It Spy on Users’ Encrypted Accounts](https://soylentnews.org/article.pl?sid=25/02/08/155232&from=rss)
* [2025-02-09, 11:08:00](https://soylentnews.org/article.pl?sid=25/02/08/1249225&from=rss) - [Fixing E.T. the Extra-Terrestrial for the Atari 2600](https://soylentnews.org/article.pl?sid=25/02/08/1249225&from=rss)
* [2025-02-09, 06:23:00](https://soylentnews.org/article.pl?sid=25/02/08/1244232&from=rss) - [ 'Cracked' and 'Nulled' Crime Forums,Closed Down In European Cyber Bust](https://soylentnews.org/article.pl?sid=25/02/08/1244232&from=rss)
* [2025-02-09, 01:38:00](https://soylentnews.org/article.pl?sid=25/02/08/1232254&from=rss) - [Mysterious Radiation Belts Detected Around Earth After Epic Solar Storm](https://soylentnews.org/article.pl?sid=25/02/08/1232254&from=rss)
* [2025-02-08, 20:49:00](https://soylentnews.org/article.pl?sid=25/02/07/1312257&from=rss) - [Meta Says This is the Make or Break Year for the Metaverse](https://soylentnews.org/article.pl?sid=25/02/07/1312257&from=rss)
* [2025-02-08, 16:07:00](https://soylentnews.org/article.pl?sid=25/02/07/048232&from=rss) - [Catalytic Converters: How Much Platinum Do They Contain?](https://soylentnews.org/article.pl?sid=25/02/07/048232&from=rss)
* [2025-02-08, 11:20:00](https://soylentnews.org/article.pl?sid=25/02/07/044225&from=rss) - [Cloudflare Browser Integrity Check Blocking Many Non-Mainstream Browsers Again](https://soylentnews.org/article.pl?sid=25/02/07/044225&from=rss)
* [2025-02-08, 06:32:00](https://soylentnews.org/politics/article.pl?sid=25/02/07/0354212&from=rss) - [US ICE Updates Immigration Raid Timestamps to Game Goggle Search Results](https://soylentnews.org/politics/article.pl?sid=25/02/07/0354212&from=rss)
* [2025-02-08, 01:49:00](https://soylentnews.org/article.pl?sid=25/02/07/0350219&from=rss) - [Piecing Together the Puzzle of the World's Earliest Datable Rune Stone](https://soylentnews.org/article.pl?sid=25/02/07/0350219&from=rss)
* [2025-02-07, 21:02:00](https://soylentnews.org/article.pl?sid=25/02/06/1054246&from=rss) - [Deepfake Videos are Getting Shockingly Good](https://soylentnews.org/article.pl?sid=25/02/06/1054246&from=rss)
* [2025-02-07, 16:14:00](https://soylentnews.org/article.pl?sid=25/02/06/1043254&from=rss) - [As Internet Enshittification Marches On, Here are Some of the Worst Offenders](https://soylentnews.org/article.pl?sid=25/02/06/1043254&from=rss)
* [2025-02-07, 11:28:00](https://soylentnews.org/article.pl?sid=25/02/06/0612223&from=rss) - [Russia VPN Crackdown Revelation - VPN Sites Hide Their IP Addresses ](https://soylentnews.org/article.pl?sid=25/02/06/0612223&from=rss)
* [2025-02-07, 06:43:00](https://soylentnews.org/article.pl?sid=25/02/06/0534246&from=rss) - [Educated but Easily Fooled? Who Falls for Misinformation and Why](https://soylentnews.org/article.pl?sid=25/02/06/0534246&from=rss)
* [2025-02-07, 01:55:00](https://soylentnews.org/article.pl?sid=25/02/06/0531248&from=rss) - [Google Removes Pledge to Not Use AI for Weapons From Website](https://soylentnews.org/article.pl?sid=25/02/06/0531248&from=rss)
