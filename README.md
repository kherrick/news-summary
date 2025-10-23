# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Developments

* [Google is porting all internal workloads to Arm architecture.](https://hardware.slashdot.org/story/25/10/22/2022215/google-porting-all-internal-workloads-to-arm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Meta lays off 600 employees from their 'bloated' AI unit.](https://tech.slashdot.org/story/25/10/22/2351229/meta-lays-off-600-from-bloated-ai-unit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Samsung Galaxy XR becomes the first Android XR headset.](https://hardware.slashdot.org/story/25/10/22/1959251/samsung-galaxy-xr-is-the-first-android-xr-headset?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Willow quantum chip demonstrates verifiable quantum advantage on hardware.](https://blog.google/technology/research/quantum-echoes-willow-verifiable-quantum-advantage/)

## Cybersecurity Concerns

* [Hackers exploit a Cisco SNMP flaw to deploy a rootkit on switches.](https://soylentnews.org/article.pl?sid=25/10/22/032220&amp;from=rss)

* [A new attack steals 2-factor authentication codes from Android phones.](https://soylentnews.org/article.pl?sid=25/10/21/1229253&amp;from=rss)

* [Accessing Max Verstappen's passport and PII through FIA bugs highlights vulnerabilities.](https://ian.sh/fia)

* [Reddit sues Perplexity for scraping data to train AI systems.](https://yro.slashdot.org/story/25/10/22/1743250/reddit-sues-perplexity-for-scraping-data-to-train-ai-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Energy and Environment

* [The sodium-ion battery revolution has started, with appearances in cars and home storage.](https://cleantechnica.com/2025/10/22/the-sodium-ion-battery-revolution-has-started/)

* [Global coal use hit a record high in 2024, underscoring environmental challenges.](https://news.slashdot.org/story/25/10/22/1936249/global-use-of-coal-hit-record-high-in-2024?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Air pollution in New Delhi reaches a five-year high, raising health concerns.](https://news.slashdot.org/story/25/10/22/1818215/new-delhi-pollution-hits-five-year-high?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Bitcoin mining linked to increasing health issues among populations.](https://soylentnews.org/article.pl?sid=25/10/21/1223202&amp;from=rss)

## Major Outages and Failures

* [A SiriusXM update causes Audi screens to reboot endlessly, creating inconvenience for months.](https://tech.slashdot.org/story/25/10/23/003245/a-siriusxm-update-sent-some-audi-screens-into-a-forced-reboot-loop-for-months?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Amazon DynamoDB service disruption impacts the Northern Virginia region ([US-EAST-1](https://aws.amazon.com/message/101925/)).](https://lobste.rs/s/mw0pus/summary_amazon_dynamodb_service)

* [Windows 11 update breaks localhost, prompting workaround solutions.](https://soylentnews.org/article.pl?sid=25/10/18/002218&amp;from=rss)

* [Meta allows deepfake content related to Irish politics, sparking ethical concerns.](https://tech.slashdot.org/story/25/10/22/1724212/meta-allows-deepfake-of-irish-presidential-candidate-to-spread-for-12-hours-before-removal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## AI and Software Advancements

* [Atlas, a browser from OpenAI, offers anti-web features.](https://soylentnews.org/article.pl?sid=25/10/22/0317230&amp;from=rss)

* [Boa v0.21, a JavaScript engine written in Rust, gets a new release.](https://boajs.dev/blog/2025/10/22/boa-release-21)

* [The VST3 audio plugin format shifts to an MIT license, opening up accessibility.](https://forums.steinberg.net/t/vst-3-8-0-sdk-released/1011988)

* [Django 6.0 beta 1 makes its debut, marking progress for web framework development.](https://www.djangoproject.com/weblog/2025/oct/22/django-60-beta-released/)

## Entertainment and Cultural Shifts

* [Pitchfork experiments with beta-testing user reviews and comments as it turns 30.](https://tech.slashdot.org/story/25/10/22/2030236/pitchfork-is-beta-testing-user-reviews-and-comments-as-it-approaches-30?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [The Englishman who became the world's most prolific ghost hunter offers insights into the bizarre.](https://lithub.com/the-mild-mannered-englishman-who-was-the-worlds-most-prolific-ghost-hunter/)

* [Apple pioneer Bill Atkinson reveals his advocacy of psychedelics with 'God Molecule' contributions.](https://soylentnews.org/article.pl?sid=25/10/22/0311232&amp;from=rss)

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

* [2025-10-23, 08:41:21](https://news.ycombinator.com/item?id=45679638) - [C64 Blood Money](https://lemmings.info/c64-blood-money/)
* [2025-10-23, 08:36:00](https://soylentnews.org/article.pl?sid=25/10/22/0317230&amp;from=rss) - [OpenAI Launches Atlas Browser](https://soylentnews.org/article.pl?sid=25/10/22/0317230&amp;from=rss)
* [2025-10-23, 07:58:56](https://lobste.rs/s/d8rtdp/programming_with_less_than_nothing) - [Programming With Less Than Nothing](https://joshmoody.org/blog/programming-with-less-than-nothing/)
* [2025-10-23, 07:00:00](https://tech.slashdot.org/story/25/10/23/0311231/spacex-disables-2500-starlink-terminals-allegedly-used-by-asian-scam-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX Disables 2,500 Starlink Terminals Allegedly Used By Asian Scam Centers](https://tech.slashdot.org/story/25/10/23/0311231/spacex-disables-2500-starlink-terminals-allegedly-used-by-asian-scam-centers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-23, 05:56:23](https://news.ycombinator.com/item?id=45678603) - [Radios, how do they work? (2024)](https://lcamtuf.substack.com/p/radios-how-do-they-work)
* [2025-10-23, 05:48:02](https://news.ycombinator.com/item?id=45678549) - [VST3 audio plugin format is now MIT](https://forums.steinberg.net/t/vst-3-8-0-sdk-released/1011988)
* [2025-10-23, 05:42:31](https://news.ycombinator.com/item?id=45678511) - [Programming with Less Than Nothing](https://joshmoody.org/blog/programming-with-less-than-nothing/)
* [2025-10-23, 05:18:21](https://lobste.rs/s/yu0vd7/debian_technical_committee_overrides) - [Debian Technical Committee overrides systemd change](https://lwn.net/Articles/1041316/)
* [2025-10-23, 04:23:39](https://news.ycombinator.com/item?id=45678156) - [The mild mannered Englishman who was the most prolific ghost hunter](https://lithub.com/the-mild-mannered-englishman-who-was-the-worlds-most-prolific-ghost-hunter/)
* [2025-10-23, 03:54:00](https://soylentnews.org/article.pl?sid=25/10/22/0311232&amp;from=rss) - [Apple Pioneer Bill Atkinson Was a Secret Evangelist of the ‘God Molecule’](https://soylentnews.org/article.pl?sid=25/10/22/0311232&amp;from=rss)
* [2025-10-23, 03:51:15](https://lobste.rs/s/fyrfe0/async_django_solution_search_problem) - [Async Django: a solution in search of a problem?](https://www.loopwerk.io/articles/2025/async-django-why/)
* [2025-10-23, 03:30:00](https://tech.slashdot.org/story/25/10/23/003245/a-siriusxm-update-sent-some-audi-screens-into-a-forced-reboot-loop-for-months?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A SiriusXM Update Sent Some Audi Screens Into a Forced-Reboot Loop For Months](https://tech.slashdot.org/story/25/10/23/003245/a-siriusxm-update-sent-some-audi-screens-into-a-forced-reboot-loop-for-months?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-23, 03:09:09](https://lobste.rs/s/mw0pus/summary_amazon_dynamodb_service) - [Summary of the Amazon DynamoDB Service Disruption in Northern Virginia (US-EAST-1) Region](https://aws.amazon.com/message/101925/)
* [2025-10-23, 02:13:52](https://lobste.rs/s/ghtqi3/explicit_capture_clauses) - [Explicit capture clauses](https://smallcultfollowing.com/babysteps/blog/2025/10/22/explicit-capture-clauses/)
* [2025-10-23, 01:36:37](https://news.ycombinator.com/item?id=45677243) - [Sodium-ion batteries have started to appear in cars and home storage](https://cleantechnica.com/2025/10/22/the-sodium-ion-battery-revolution-has-started/)
* [2025-10-23, 01:30:24](https://lobste.rs/s/d3pdfi/my_2_month_beef_with_my_own_linux) - [My 2 month beef with my own Linux environment. (Developer cautionary tale)](https://www.reddit.com/r/linux/comments/1odq7ti/fixing_my_broken_system_while_breaking_my_fixed/)
* [2025-10-23, 01:25:00](https://tech.slashdot.org/story/25/10/22/2351229/meta-lays-off-600-from-bloated-ai-unit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Lays Off 600 From &apos;Bloated&apos; AI Unit](https://tech.slashdot.org/story/25/10/22/2351229/meta-lays-off-600-from-bloated-ai-unit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-23, 00:45:00](https://tech.slashdot.org/story/25/10/22/2030236/pitchfork-is-beta-testing-user-reviews-and-comments-as-it-approaches-30?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pitchfork Is Beta Testing User Reviews and Comments As It Approaches 30](https://tech.slashdot.org/story/25/10/22/2030236/pitchfork-is-beta-testing-user-reviews-and-comments-as-it-approaches-30?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-23, 00:25:15](https://lobste.rs/s/ugwu6j/triputer_ns32000_family_systems_on_fpga) - [TRIPUTER: NS32000-family systems on an FPGA](http://www.cpu-ns32k.net/TRIPUTER.html)
* [2025-10-23, 00:07:30](https://lobste.rs/s/upi3xa/boa_release_v0_21_new_release_boa) - [Boa release v0.21 - a new release of Boa, a JavaScript engine written in Rust](https://boajs.dev/blog/2025/10/22/boa-release-21)
* [2025-10-23, 00:02:00](https://hardware.slashdot.org/story/25/10/22/2022215/google-porting-all-internal-workloads-to-arm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Porting All Internal Workloads To Arm](https://hardware.slashdot.org/story/25/10/22/2022215/google-porting-all-internal-workloads-to-arm?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 23:34:51](https://lobste.rs/s/ew0tqv/redistributing_git_with_nostr) - [Redistributing Git with Nostr](https://fiatjaf.com/18ff5416.html)
* [2025-10-22, 23:20:00](https://news.slashdot.org/story/25/10/22/2011239/ai-assistants-misrepresent-news-content-45-of-the-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Assistants Misrepresent News Content 45% of the Time](https://news.slashdot.org/story/25/10/22/2011239/ai-assistants-misrepresent-news-content-45-of-the-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 23:09:00](https://soylentnews.org/article.pl?sid=25/10/22/032220&amp;from=rss) - [Hackers Exploit Cisco SNMP Flaw to Deploy Rootkit on Switches](https://soylentnews.org/article.pl?sid=25/10/22/032220&amp;from=rss)
* [2025-10-22, 22:51:58](https://news.ycombinator.com/item?id=45676162) - [VortexNet: Neural network based on fluid dynamics](https://github.com/samim23/vortexnet)
* [2025-10-22, 22:40:00](https://bsd.slashdot.org/story/25/10/22/205215/openbsd-78-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenBSD 7.8 Released](https://bsd.slashdot.org/story/25/10/22/205215/openbsd-78-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 22:00:00](https://hardware.slashdot.org/story/25/10/22/1959251/samsung-galaxy-xr-is-the-first-android-xr-headset?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Samsung Galaxy XR Is the First Android XR Headset](https://hardware.slashdot.org/story/25/10/22/1959251/samsung-galaxy-xr-is-the-first-android-xr-headset?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 21:53:14](https://lobste.rs/s/fcka9i/chatgpt_s_atlas_browser_s_anti_web) - [ChatGPT&apos;s Atlas: The Browser That&apos;s Anti-Web](https://www.anildash.com/2025/10/22/atlas-anti-web-browser/)
* [2025-10-22, 21:20:00](https://news.slashdot.org/story/25/10/22/1952245/jaguar-land-rover-hack-cost-uk-economy-an-estimated-25-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Jaguar Land Rover Hack Cost UK Economy an Estimated $2.5 Billion](https://news.slashdot.org/story/25/10/22/1952245/jaguar-land-rover-hack-cost-uk-economy-an-estimated-25-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 21:01:07](https://news.ycombinator.com/item?id=45675090) - [InpharmD (YC W21) Is Hiring – NLP Engineer](https://inpharmd.com/jobs/inpharmd-is-hiring-ai-ml-engineer)
* [2025-10-22, 20:53:49](https://news.ycombinator.com/item?id=45675015) - [Google flags Immich sites as dangerous](https://immich.app/blog/google-flags-immich-as-dangerous)
* [2025-10-22, 20:49:07](https://lobste.rs/s/elts07/django_6_0_beta_1_released) - [Django 6.0 beta 1 released](https://www.djangoproject.com/weblog/2025/oct/22/django-60-beta-released/)
* [2025-10-22, 20:44:00](https://news.slashdot.org/story/25/10/22/1936249/global-use-of-coal-hit-record-high-in-2024?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Global Use of Coal Hit Record High in 2024](https://news.slashdot.org/story/25/10/22/1936249/global-use-of-coal-hit-record-high-in-2024?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 20:13:31](https://news.ycombinator.com/item?id=45674568) - [Why SSA Compilers?](https://mcyoung.xyz/2025/10/21/ssa-1/)
* [2025-10-22, 20:01:00](https://news.slashdot.org/story/25/10/22/192225/youtube-will-help-you-quit-watching-shorts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [YouTube Will Help You Quit Watching Shorts](https://news.slashdot.org/story/25/10/22/192225/youtube-will-help-you-quit-watching-shorts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 19:42:36](https://news.ycombinator.com/item?id=45674166) - [Ovi: Twin backbone cross-modal fusion for audio-video generation](https://github.com/character-ai/Ovi)
* [2025-10-22, 19:38:54](https://news.ycombinator.com/item?id=45674126) - [Show HN: Cuq – Formal Verification of Rust GPU Kernels](https://github.com/neelsomani/cuq)
* [2025-10-22, 19:22:00](https://news.slashdot.org/story/25/10/22/1818215/new-delhi-pollution-hits-five-year-high?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Delhi Pollution Hits Five-Year High](https://news.slashdot.org/story/25/10/22/1818215/new-delhi-pollution-hits-five-year-high?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 18:44:00](https://news.slashdot.org/story/25/10/22/181246/apple-and-google-face-enforced-changes-over-uk-smartphone-dominance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple and Google Face Enforced Changes Over UK Smartphone Dominance](https://news.slashdot.org/story/25/10/22/181246/apple-and-google-face-enforced-changes-over-uk-smartphone-dominance?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 18:27:00](https://soylentnews.org/article.pl?sid=25/10/21/1918224&amp;from=rss) - [Eavesdropping on Internal Networks via Unencrypted Satellites](https://soylentnews.org/article.pl?sid=25/10/21/1918224&amp;from=rss)
* [2025-10-22, 18:21:54](https://news.ycombinator.com/item?id=45673130) - [Accessing Max Verstappen&apos;s passport and PII through FIA bugs](https://ian.sh/fia)
* [2025-10-22, 18:05:00](https://yro.slashdot.org/story/25/10/22/1743250/reddit-sues-perplexity-for-scraping-data-to-train-ai-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Reddit Sues Perplexity For Scraping Data To Train AI System](https://yro.slashdot.org/story/25/10/22/1743250/reddit-sues-perplexity-for-scraping-data-to-train-ai-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 18:00:20](https://news.ycombinator.com/item?id=45672844) - [Rivian&apos;s TM-B electric bike](https://www.theverge.com/news/804157/rivian-tm-b-electric-bike-price-specs-helmet-quad)
* [2025-10-22, 17:26:06](https://news.ycombinator.com/item?id=45672336) - [JMAP for Calendars, Contacts and Files Now in Stalwart](https://stalw.art/blog/jmap-collaboration/)
* [2025-10-22, 17:24:00](https://tech.slashdot.org/story/25/10/22/1724212/meta-allows-deepfake-of-irish-presidential-candidate-to-spread-for-12-hours-before-removal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Allows Deepfake of Irish Presidential Candidate To Spread for 12 Hours Before Removal](https://tech.slashdot.org/story/25/10/22/1724212/meta-allows-deepfake-of-irish-presidential-candidate-to-spread-for-12-hours-before-removal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-22, 17:22:21](https://lobste.rs/s/ghdv6w/i_see_future_jj) - [I see a future in jj](https://steveklabnik.com/writing/i-see-a-future-in-jj/)
* [2025-10-22, 17:07:28](https://lobste.rs/s/7uzm1p/scripts_i_wrote_i_use_all_time) - [Scripts I wrote that I use all the time](https://evanhahn.com/scripts-i-wrote-that-i-use-all-the-time/)
* [2025-10-22, 15:19:17](https://lobste.rs/s/n9cccn/satisfying_solutions_difficult) - [SATisfying Solutions to Difficult Problems](https://vaibhavsagar.com/blog/2025/10/22/satisfying-solutions/)
* [2025-10-22, 15:16:19](https://news.ycombinator.com/item?id=45670443) - [Willow quantum chip demonstrates verifiable quantum advantage on hardware](https://blog.google/technology/research/quantum-echoes-willow-verifiable-quantum-advantage/)
* [2025-10-22, 15:03:58](https://lobste.rs/s/ikcvvv/slint_1_14_released) - [Slint 1.14 Released](https://slint.dev/blog/slint-1.14-released)
* [2025-10-22, 14:53:54](https://news.ycombinator.com/item?id=45670052) - [Scripts I wrote that I use all the time](https://evanhahn.com/scripts-i-wrote-that-i-use-all-the-time/)
* [2025-10-22, 13:44:29](https://lobste.rs/s/iuvukw/word_on_omarchy) - [A Word on Omarchy](https://マリウス.com/a-word-on-omarchy/)
* [2025-10-22, 13:42:00](https://soylentnews.org/article.pl?sid=25/10/21/198229&amp;from=rss) - [He Co-founded Wikipedia, Now He Says the Site Needs a Radical Change](https://soylentnews.org/article.pl?sid=25/10/21/198229&amp;from=rss)
* [2025-10-22, 13:24:47](https://lobste.rs/s/2q5tn0/awesome_tiny_crates_bunch_small_crates) - [awesome-tiny-crates: A bunch of small crates that make writing Rust more fun](https://github.com/nik-rev/awesome-tiny-crates)
* [2025-10-22, 12:50:55](https://lobste.rs/s/cdrvo7/how_run_1_1s_as_engineering_manager) - [How to Run 1:1s as an Engineering Manager](https://justoffbyone.com/posts/how-to-run-11s/)
* [2025-10-22, 11:40:14](https://lobste.rs/s/pwsnpd/powerletters_for_rust) - [Powerletters for Rust](https://brson.github.io/2025/10/07/powerletters-for-rust)
* [2025-10-22, 09:40:38](https://lobste.rs/s/mhmcp4/15_go_subtleties_you_may_not_already_know) - [15 Go Subtleties You May Not Already Know](https://harrisoncramer.me/15-go-sublteties-you-may-not-already-know/)
* [2025-10-22, 09:03:40](https://news.ycombinator.com/item?id=45666497) - [Element: setHTML() method](https://developer.mozilla.org/en-US/docs/Web/API/Element/setHTML)
* [2025-10-22, 09:02:41](https://lobste.rs/s/jgwhwy/element_sethtml_method_on_mdn) - [Element: setHTML() method on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/setHTML)
* [2025-10-22, 08:58:00](https://soylentnews.org/article.pl?sid=25/10/21/1229253&amp;from=rss) - [A New Attack Lets Hackers Steal 2-Factor Authentication Codes From Android Phones](https://soylentnews.org/article.pl?sid=25/10/21/1229253&amp;from=rss)
* [2025-10-22, 07:28:47](https://lobste.rs/s/ikcg1l/organizing_your_nix_configuration) - [Organizing your Nix configuration without flakes](https://somas.is/note-organizing-nix-configuration-without-flakes.html)
* [2025-10-22, 04:11:00](https://soylentnews.org/article.pl?sid=25/10/21/1223202&amp;from=rss) - [Bitcoin Mining is Making People Sick](https://soylentnews.org/article.pl?sid=25/10/21/1223202&amp;from=rss)
* [2025-10-21, 23:26:00](https://soylentnews.org/article.pl?sid=25/10/21/1218221&amp;from=rss) - [Amazon Error Creates Massive Internet Outage](https://soylentnews.org/article.pl?sid=25/10/21/1218221&amp;from=rss)
* [2025-10-21, 18:41:00](https://soylentnews.org/article.pl?sid=25/10/20/2129245&amp;from=rss) - [Are We Living in a Golden Age of Stupidity?](https://soylentnews.org/article.pl?sid=25/10/20/2129245&amp;from=rss)
* [2025-10-21, 17:43:16](https://news.ycombinator.com/item?id=45658928) - [Karpathy on DeepSeek-OCR paper: Are pixels better inputs to LLMs than text?](https://twitter.com/karpathy/status/1980397031542989305)
* [2025-10-21, 13:57:00](https://soylentnews.org/article.pl?sid=25/10/20/1245230&amp;from=rss) - [Drone Tech Company DroneShield to Build 13m Facility in Australia](https://soylentnews.org/article.pl?sid=25/10/20/1245230&amp;from=rss)
* [2025-10-21, 13:09:45](https://lobste.rs/s/kltrqx/just_use_curl) - [Just use cURL](https://justuse.org/curl/)
* [2025-10-21, 12:30:27](https://lobste.rs/s/bsckho/6_months_tangled) - [6 months of Tangled](https://blog.tangled.org/6-months)
* [2025-10-21, 11:12:03](https://lobste.rs/s/0zqebs/my_most_popular_application) - [My most popular application](https://blog.6nok.org/my-most-popular-application/)
* [2025-10-21, 09:15:00](https://soylentnews.org/article.pl?sid=25/10/20/1236216&amp;from=rss) - [Lifespan of AI Chips: The $300 Billion Question](https://soylentnews.org/article.pl?sid=25/10/20/1236216&amp;from=rss)
* [2025-10-21, 04:27:00](https://soylentnews.org/article.pl?sid=25/10/20/1229240&amp;from=rss) - [GNOME Has a New Security Threat Scanner Powered by VirusTotal](https://soylentnews.org/article.pl?sid=25/10/20/1229240&amp;from=rss)
* [2025-10-20, 23:40:00](https://soylentnews.org/article.pl?sid=25/10/20/0111228&amp;from=rss) - [Russia, AI and the Future of Disinformation Warfare](https://soylentnews.org/article.pl?sid=25/10/20/0111228&amp;from=rss)
* [2025-10-20, 18:58:00](https://soylentnews.org/article.pl?sid=25/10/18/1822203&amp;from=rss) - [Oops! It&apos;s a Kernel Stack Use-After-Free: Exploiting NVIDIA&apos;s GPU Linux Drivers](https://soylentnews.org/article.pl?sid=25/10/18/1822203&amp;from=rss)
* [2025-10-20, 17:39:00](https://soylentnews.org/meta/article.pl?sid=25/10/20/098210&amp;from=rss) - [Soylent Update](https://soylentnews.org/meta/article.pl?sid=25/10/20/098210&amp;from=rss)
* [2025-10-20, 14:08:00](https://soylentnews.org/article.pl?sid=25/10/18/180239&amp;from=rss) - [Quantum Crystals Offer a Blueprint for the Future of Computing and Chemistry](https://soylentnews.org/article.pl?sid=25/10/18/180239&amp;from=rss)
* [2025-10-20, 09:26:00](https://soylentnews.org/article.pl?sid=25/10/18/1749235&amp;from=rss) - [JPMorgan Requires Staff to Hand Over Biometric Data to Access New Headquarters](https://soylentnews.org/article.pl?sid=25/10/18/1749235&amp;from=rss)
* [2025-10-20, 04:41:00](https://soylentnews.org/article.pl?sid=25/10/16/1551203&amp;from=rss) - [Tech Billionaires Seem to be Doom Prepping. Should We All be Worried?](https://soylentnews.org/article.pl?sid=25/10/16/1551203&amp;from=rss)
* [2025-10-19, 23:52:00](https://soylentnews.org/article.pl?sid=25/10/18/004205&amp;from=rss) - [Poverty in Australia Increases to 1 in 7 People, According to Report](https://soylentnews.org/article.pl?sid=25/10/18/004205&amp;from=rss)
* [2025-10-19, 19:06:00](https://soylentnews.org/article.pl?sid=25/10/18/002218&amp;from=rss) - [Windows 11 Update Breaks Localhost, Prompting Mass Uninstall Workaround](https://soylentnews.org/article.pl?sid=25/10/18/002218&amp;from=rss)
* [2025-10-19, 14:22:00](https://soylentnews.org/article.pl?sid=25/10/18/000230&amp;from=rss) - [Is AI Running Out of Training Data?](https://soylentnews.org/article.pl?sid=25/10/18/000230&amp;from=rss)
* [2025-10-19, 09:36:00](https://soylentnews.org/article.pl?sid=25/10/17/2341221&amp;from=rss) - [New Psychology Research Looks at Why We Help Our Friends When They Need It](https://soylentnews.org/article.pl?sid=25/10/17/2341221&amp;from=rss)
* [2025-10-19, 04:48:00](https://soylentnews.org/article.pl?sid=25/10/17/1219257&amp;from=rss) - [Understanding Volcanoes Better: Scientists Find Exact Locations of Magma Movement](https://soylentnews.org/article.pl?sid=25/10/17/1219257&amp;from=rss)
* [2025-10-19, 00:01:00](https://soylentnews.org/article.pl?sid=25/10/18/1745254&amp;from=rss) - [Comet Lemmon (Not Lemon) Nearing Peak](https://soylentnews.org/article.pl?sid=25/10/18/1745254&amp;from=rss)
