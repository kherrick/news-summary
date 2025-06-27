# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Breakthroughs

* [A Solid-State Battery Breakthrough May be Taking Shape in Maryland](https://soylentnews.org/article.pl?sid=25/06/26/0234223&amp;from=rss) - Highlights research progress in solid-state battery technology that promises improved energy storage solutions.

* [James Webb Space Telescope Reveals Its First Direct Image of an Exoplanet](https://www.smithsonianmag.com/smart-news/james-webb-space-telescope-reveals-its-first-direct-image-discovery-of-an-exoplanet-180986886/) - Captures a significant astronomical milestone with the telescope's first-ever direct exoplanet image.

* [Modified Bacteria Convert Plastic Waste Into Pain Reliever](https://soylentnews.org/article.pl?sid=25/06/26/0223205&amp;from=rss) - Showcases transformative research where bacteria process plastic into medical substances.

* [Transmitting data via ultrasound without any special equipment](https://halcy.de/blog/2025/06/27/transmitting-data-via-ultrasound-without-any-special-equipment/) - Discusses an innovative method of data transmission through ultrasound, requiring no special hardware.

## AI and Machine Learning

* [Facebook Is Asking To Use Meta AI On Photos In Your Camera Roll You Haven&apos;t Yet Shared](https://yro.slashdot.org/story/25/06/27/1954211/facebook-is-asking-to-use-meta-ai-on-photos-in-your-camera-roll-you-havent-yet-shared?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Examines Facebook's proposal to integrate AI with personal media storage.

* [Normalizing Flows Are Capable Generative Models](https://machinelearning.apple.com/research/normalizing-flows) - Presents research into advanced AI modeling using Normalizing Flows.

* [SymbolicAI: A neuro-symbolic perspective on LLMs](https://github.com/ExtensityAI/symbolicai) - Introduces a fusion of neuro-symbolic methods to enhance large language models' capabilities.

* [Project Vend: Can Claude run a small shop? (And why does that matter?)](https://www.anthropic.com/research/project-vend-1) - Investigates the practicality of using AI, specifically Claude, to automate small business operations.

## Legal and Ethical Debates

* [Tesla has been ordered to stop \

* &quot;deceptive practices&quot; about driving ability](https://www.latintimes.com/tesla-ordered-stop-deceptive-practices-cars-self-driving-capabilities-france-face-thousands-585563) - Covers legal actions against Tesla's claims on self-driving car features.

* [Supreme Court Rejects Challenge To FCC Broadband Subsidy Program](https://tech.slashdot.org/story/25/06/27/1718259/supreme-court-rejects-challenge-to-fcc-broadband-subsidy-program?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Explores the Court's decision to uphold subsidies for broadband access.

* [Brazil Supreme Court Rules Digital Platforms Are Liable For Users\' Posts](https://tech.slashdot.org/story/25/06/27/0624226/brazil-supreme-court-rules-digital-platforms-are-liable-for-users-posts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Discusses accountability rules for digital platforms enforced by Brazil.

## Science and Research

* [A Brief History of Children Sent Through the Mail](https://www.smithsonianmag.com/smart-news/brief-history-children-sent-through-mail-180959372/) - Provides a quirky dive into historical practices involving mailing children via postal services.

* [Astronomers Locate Universe&apos;s &apos;Missing&apos; Matter in the Largest Cosmic Structures](https://soylentnews.org/article.pl?sid=25/06/22/0357239&amp;from=rss) - Details new advancements in understanding the universe's 'missing' baryonic matter.

* [Deeper Sleep Stages Boost Problem-Solving Insights, Study Finds](https://science.slashdot.org/story/25/06/27/0724231/deeper-sleep-stages-boost-problem-solving-insights-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Explores the link between quality sleep stages and increased cognitive problem-solving.

## Programming and Software

* [Run Coverage on Tests](https://hugovk.dev/blog/2025/run-coverage-on-tests/) - Offers insights into improving code coverage analysis for software testing.

* [Python can run Mojo now](https://koaning.io/posts/giving-mojo-a-spin/) - Reviews a new capability allowing Python to interface with the Mojo language effectively.

* [Richard Feldman on new language adoption in the LLM age](https://youtu.be/ZsBHc-J9f8o) - Analyzes challenges and strategies for language adoption in light of advancements in large language models.

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

* [2025-06-27, 21:54:36](https://lobste.rs/s/kwrdic/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/kwrdic/what_are_you_doing_this_weekend)
* [2025-06-27, 21:40:00](https://yro.slashdot.org/story/25/06/27/1954211/facebook-is-asking-to-use-meta-ai-on-photos-in-your-camera-roll-you-havent-yet-shared?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Facebook Is Asking To Use Meta AI On Photos In Your Camera Roll You Haven&apos;t Yet Shared](https://yro.slashdot.org/story/25/06/27/1954211/facebook-is-asking-to-use-meta-ai-on-photos-in-your-camera-roll-you-havent-yet-shared?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-27, 21:33:43](https://news.ycombinator.com/item?id=44400441) - [Tesla has been ordered to stop \&quot;deceptive practices\&quot; about driving ability](https://www.latintimes.com/tesla-ordered-stop-deceptive-practices-cars-self-driving-capabilities-france-face-thousands-585563)
* [2025-06-27, 21:33:00](https://soylentnews.org/article.pl?sid=25/06/26/0234223&amp;from=rss) - [A Solid-State Battery Breakthrough May be Taking Shape in Maryland](https://soylentnews.org/article.pl?sid=25/06/26/0234223&amp;from=rss)
* [2025-06-27, 21:32:30](https://lobste.rs/s/qkdlxt/journey_bypassing_ubuntu_s_unprivileged) - [The Journey of Bypassing Ubuntu’s Unprivileged Namespace Restriction](https://u1f383.github.io/linux/2025/06/26/the-journey-of-bypassing-ubuntus-unprivileged-namespace-restriction.html)
* [2025-06-27, 21:01:03](https://news.ycombinator.com/item?id=44400190) - [Spark AI (YC W24) is hiring a full-stack engineer in SF (founding team)](https://www.ycombinator.com/companies/spark/jobs/kDeJlPK-software-engineer-full-stack-founding-team)
* [2025-06-27, 21:00:00](https://news.slashdot.org/story/25/06/27/1956207/renewables-soar-but-fossil-fuels-continue-to-rise-as-global-electricity-demand-hits-record-levels?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Renewables Soar, But Fossil Fuels Continue To Rise as Global Electricity Demand Hits Record Levels](https://news.slashdot.org/story/25/06/27/1956207/renewables-soar-but-fossil-fuels-continue-to-rise-as-global-electricity-demand-hits-record-levels?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-27, 20:50:10](https://news.ycombinator.com/item?id=44400105) - [Normalizing Flows Are Capable Generative Models](https://machinelearning.apple.com/research/normalizing-flows)
* [2025-06-27, 20:48:18](https://lobste.rs/s/pnfosx/shell_startup_scripts_2020) - [Shell startup scripts (2020)](https://blog.flowblok.id.au/2013-02/shell-startup-scripts.html)
* [2025-06-27, 20:20:00](https://apple.slashdot.org/story/25/06/27/1949207/deepseek-faces-ban-from-apple-google-app-stores-in-germany?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DeepSeek Faces Ban From Apple, Google App Stores In Germany](https://apple.slashdot.org/story/25/06/27/1949207/deepseek-faces-ban-from-apple-google-app-stores-in-germany?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-27, 20:12:00](https://news.ycombinator.com/item?id=44399854) - [A Brief History of Children Sent Through the Mail](https://www.smithsonianmag.com/smart-news/brief-history-children-sent-through-mail-180959372/)
* [2025-06-27, 20:01:41](https://lobste.rs/s/6oqgv7/python_can_run_mojo_now) - [Python can run Mojo now](https://koaning.io/posts/giving-mojo-a-spin/)
* [2025-06-27, 19:55:26](https://news.ycombinator.com/item?id=44399757) - [Structuring Arrays with Algebraic Shapes](https://dl.acm.org/doi/abs/10.1145/3736112.3736141)
* [2025-06-27, 19:53:33](https://lobste.rs/s/iwoipn/structuring_arrays_with_algebraic) - [Structuring Arrays with Algebraic Shapes](https://dl.acm.org/doi/abs/10.1145/3736112.3736141)
* [2025-06-27, 19:42:21](https://news.ycombinator.com/item?id=44399666) - [Show HN: Shouldiuse.dev – Software dependency health checker](https://shouldiuse.dev/)
* [2025-06-27, 19:40:00](https://news.slashdot.org/story/25/06/27/1935258/canadas-digital-services-tax-to-stay-in-place-despite-g7-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Canada&apos;s Digital Services Tax To Stay In Place Despite G7 Deal](https://news.slashdot.org/story/25/06/27/1935258/canadas-digital-services-tax-to-stay-in-place-despite-g7-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-27, 19:10:50](https://news.ycombinator.com/item?id=44399416) - [Run Coverage on Tests](https://hugovk.dev/blog/2025/run-coverage-on-tests/)
* [2025-06-27, 19:08:48](https://lobste.rs/s/ggzbe1/run_coverage_on_tests) - [Run coverage on tests](https://hugovk.dev/blog/2025/run-coverage-on-tests/)
* [2025-06-27, 18:49:57](https://news.ycombinator.com/item?id=44399234) - [SymbolicAI: A neuro-symbolic perspective on LLMs](https://github.com/ExtensityAI/symbolicai)
* [2025-06-27, 18:45:05](https://news.ycombinator.com/item?id=44399193) - [nimbme – Nim bare-metal environment](https://github.com/mikra01/nimbme)
* [2025-06-27, 18:43:41](https://news.ycombinator.com/item?id=44399186) - [New Process Uses Microbes to Create Valuable Materials from Urine](https://newscenter.lbl.gov/2025/06/17/new-process-uses-microbes-to-create-valuable-materials-from-urine/)
* [2025-06-27, 18:01:00](https://tech.slashdot.org/story/25/06/27/1737221/android-16-will-tell-you-when-fake-cell-towers-try-to-track-your-phone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Android 16 Will Tell You When Fake Cell Towers Try To Track Your Phone](https://tech.slashdot.org/story/25/06/27/1737221/android-16-will-tell-you-when-fake-cell-towers-try-to-track-your-phone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-27, 17:44:32](https://news.ycombinator.com/item?id=44398756) - [James Webb Space Telescope Reveals Its First Direct Image of an Exoplanet](https://www.smithsonianmag.com/smart-news/james-webb-space-telescope-reveals-its-first-direct-image-discovery-of-an-exoplanet-180986886/)
* [2025-06-27, 17:38:08](https://news.ycombinator.com/item?id=44398710) - [US Supreme Court limits federal judges&apos; power to block Trump orders](https://www.theguardian.com/us-news/2025/jun/27/trump-supreme-court-birthright-citizenship-scotus)
* [2025-06-27, 17:35:59](https://lobste.rs/s/orj2th/parameterized_types_c_using_new_tag) - [Parameterized types in C using the new tag compatibility rule](https://nullprogram.com/blog/2025/06/26/)
* [2025-06-27, 17:20:00](https://tech.slashdot.org/story/25/06/27/1718259/supreme-court-rejects-challenge-to-fcc-broadband-subsidy-program?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Supreme Court Rejects Challenge To FCC Broadband Subsidy Program](https://tech.slashdot.org/story/25/06/27/1718259/supreme-court-rejects-challenge-to-fcc-broadband-subsidy-program?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-27, 17:02:17](https://news.ycombinator.com/item?id=44398390) - [Transmitting data via ultrasound without any special equipment](https://halcy.de/blog/2025/06/27/transmitting-data-via-ultrasound-without-any-special-equipment/)
* [2025-06-27, 17:00:56](https://lobste.rs/s/96xzbg/transmitting_data_via_ultrasound) - [Transmitting data via ultrasound without any special equipment](https://halcy.de/blog/2025/06/27/transmitting-data-via-ultrasound-without-any-special-equipment/)
* [2025-06-27, 16:47:00](https://soylentnews.org/article.pl?sid=25/06/26/0227253&amp;from=rss) - [Greek Man Sentenced to Prison for Running a Private Torrent Site 10 Years Ago](https://soylentnews.org/article.pl?sid=25/06/26/0227253&amp;from=rss)
* [2025-06-27, 16:40:00](https://tech.slashdot.org/story/25/06/27/0624226/brazil-supreme-court-rules-digital-platforms-are-liable-for-users-posts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Brazil Supreme Court Rules Digital Platforms Are Liable For Users&apos; Posts](https://tech.slashdot.org/story/25/06/27/0624226/brazil-supreme-court-rules-digital-platforms-are-liable-for-users-posts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-27, 16:09:14](https://news.ycombinator.com/item?id=44397923) - [Project Vend: Can Claude run a small shop? (And why does that matter?)](https://www.anthropic.com/research/project-vend-1)
* [2025-06-27, 16:01:00](https://news.slashdot.org/story/25/06/27/1322241/zuckerbergs-advocacy-group-warns-us-families-they-cant-afford-immigration-policy-changes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Zuckerberg&apos;s Advocacy Group Warns US Families They Can&apos;t Afford Immigration Policy Changes](https://news.slashdot.org/story/25/06/27/1322241/zuckerbergs-advocacy-group-warns-us-families-they-cant-afford-immigration-policy-changes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-27, 15:20:00](https://science.slashdot.org/story/25/06/27/0724231/deeper-sleep-stages-boost-problem-solving-insights-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Deeper Sleep Stages Boost Problem-Solving Insights, Study Finds](https://science.slashdot.org/story/25/06/27/0724231/deeper-sleep-stages-boost-problem-solving-insights-study-finds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-27, 15:08:26](https://news.ycombinator.com/item?id=44397367) - [Weird Expressions in Rust](https://www.wakunguma.com/blog/rust-weird-expr)
* [2025-06-27, 14:42:04](https://news.ycombinator.com/item?id=44397168) - [10 Years of Pomological Watercolors](https://parkerhiggins.net/2025/04/10-years-of-pomological-watercolors/)
* [2025-06-27, 14:40:00](https://tech.slashdot.org/story/25/06/27/0637210/starlink-helps-eight-more-nations-pass-50-ipv6-adoption?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Starlink Helps Eight More Nations Pass 50% IPv6 Adoption](https://tech.slashdot.org/story/25/06/27/0637210/starlink-helps-eight-more-nations-pass-50-ipv6-adoption?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-27, 14:35:04](https://news.ycombinator.com/item?id=44397124) - [Qwen VLo: From \&quot;Understanding\&quot; the World to \&quot;Depicting\&quot; It](https://qwenlm.github.io/blog/qwen-vlo/)
* [2025-06-27, 14:00:00](https://news.slashdot.org/story/25/06/27/1340213/36-of-chinese-undergraduates-choose-engineering-compared-to-5-in-us-and-uk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [36% of Chinese Undergraduates Choose Engineering, Compared To 5% in US and UK](https://news.slashdot.org/story/25/06/27/1340213/36-of-chinese-undergraduates-choose-engineering-compared-to-5-in-us-and-uk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-27, 13:34:46](https://lobste.rs/s/2le5gj/richard_feldman_on_new_language_adoption) - [Richard Feldman on new language adoption in the LLM age](https://youtu.be/ZsBHc-J9f8o)
* [2025-06-27, 13:06:54](https://news.ycombinator.com/item?id=44396518) - [Show HN: I&apos;m an airline pilot – I built interactive graphs/globes of my flights](https://jameshard.ing/pilot)
* [2025-06-27, 13:00:00](https://hardware.slashdot.org/story/25/06/26/2351234/brother-printer-bug-in-689-models-exposes-millions-to-hacking?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Brother Printer Bug In 689 Models Exposes Millions To Hacking](https://hardware.slashdot.org/story/25/06/26/2351234/brother-printer-bug-in-689-models-exposes-millions-to-hacking?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-27, 12:04:00](https://soylentnews.org/article.pl?sid=25/06/26/0225203&amp;from=rss) - [An Updated PNG Spec](https://soylentnews.org/article.pl?sid=25/06/26/0225203&amp;from=rss)
* [2025-06-27, 11:55:25](https://lobste.rs/s/7x7pey/memory_safety_is_merely_table_stakes_safe) - [Memory Safety is Merely Table Stakes: Safe Interactions with Foreign Languages through Omniglot](https://www.usenix.org/publications/loginonline/memory-safety-merely-table-stakes)
* [2025-06-27, 11:14:54](https://lobste.rs/s/nkizry/conferences_clarity_smokescreens) - [Conferences, Clarity, and Smokescreens](https://infrequently.org/2025/06/conferences-clarity-and-smokescreens/)
* [2025-06-27, 11:07:53](https://lobste.rs/s/pibyff/my_lights_run_on_bash) - [My Lights Run on Bash](https://kramkow.ski/article/2025/06/27/my_lights_run_on_bash.html)
* [2025-06-27, 11:06:43](https://news.ycombinator.com/item?id=44395782) - [Copilot Chat in VS Code is now open source](https://github.com/microsoft/vscode-copilot-chat)
* [2025-06-27, 10:48:35](https://lobste.rs/s/33tzjt/lispmfpga_goal_this_project_is_create) - [LispmFPGA: the goal of this project is to create a small Lisp-Machine in an FPGA](http://www.aviduratas.de/lisp/lispmfpga/index.html)
* [2025-06-27, 10:00:00](https://science.slashdot.org/story/25/06/26/2339259/new-iq-research-shows-why-smarter-people-make-better-decisions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New IQ Research Shows Why Smarter People Make Better Decisions](https://science.slashdot.org/story/25/06/26/2339259/new-iq-research-shows-why-smarter-people-make-better-decisions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-27, 08:28:28](https://news.ycombinator.com/item?id=44394929) - [Show HN: Zenta – Mindfulness for Terminal Users](https://github.com/e6a5/zenta)
* [2025-06-27, 07:50:31](https://lobste.rs/s/y41wti/simplifying_vulkan_synchronization) - [Simplifying Vulkan Synchronization](https://www.khronos.org/blog/so-long-image-layouts-simplifying-vulkan-synchronisation)
* [2025-06-27, 07:14:00](https://soylentnews.org/article.pl?sid=25/06/26/0223205&amp;from=rss) - [Modified Bacteria Convert Plastic Waste Into Pain Reliever](https://soylentnews.org/article.pl?sid=25/06/26/0223205&amp;from=rss)
* [2025-06-27, 07:05:58](https://news.ycombinator.com/item?id=44394386) - [PJ5 TTL CPU](https://pj5cpu.wordpress.com/)
* [2025-06-27, 07:00:00](https://hardware.slashdot.org/story/25/06/26/2336210/britain-shuns-34-billion-morocco-uk-subsea-power-project?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Britain Shuns $34 Billion Morocco-UK Subsea Power Project](https://hardware.slashdot.org/story/25/06/26/2336210/britain-shuns-34-billion-morocco-uk-subsea-power-project?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-27, 06:01:37](https://news.ycombinator.com/item?id=44394051) - [Show HN: Sink – Sync any directory with any device on your local network](https://github.com/sirbread/sink)
* [2025-06-27, 05:31:56](https://news.ycombinator.com/item?id=44393942) - [Parameterized types in C using the new tag compatibility rule](https://nullprogram.com/blog/2025/06/26/)
* [2025-06-27, 04:30:00](https://tech.slashdot.org/story/25/06/27/0426230/big-accounting-firms-fail-to-track-ai-impact-on-audit-quality-says-regulator?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Big Accounting Firms Fail To Track AI Impact on Audit Quality, Says Regulator](https://tech.slashdot.org/story/25/06/27/0426230/big-accounting-firms-fail-to-track-ai-impact-on-audit-quality-says-regulator?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-27, 02:29:00](https://soylentnews.org/article.pl?sid=25/06/26/0210246&amp;from=rss) - [Why Geoengineering is No Longer a Complete Taboo for Scientists](https://soylentnews.org/article.pl?sid=25/06/26/0210246&amp;from=rss)
* [2025-06-27, 00:27:26](https://news.ycombinator.com/item?id=44392776) - [Slightly better named character reference tokenization than Chrome, Safari, FF](https://www.ryanliptak.com/blog/better-named-character-reference-tokenization/)
* [2025-06-27, 00:24:59](https://lobste.rs/s/ozguu9/slightly_better_named_character) - [Slightly better named character reference tokenization than Chrome, Safari, and Firefox](https://www.ryanliptak.com/blog/better-named-character-reference-tokenization/)
* [2025-06-26, 21:43:00](https://soylentnews.org/article.pl?sid=25/06/25/1717228&amp;from=rss) - [Apple&apos;s A19 May Be Powerful, But Leans Towards Saving Power](https://soylentnews.org/article.pl?sid=25/06/25/1717228&amp;from=rss)
* [2025-06-26, 20:52:48](https://lobste.rs/s/vzgkve/apple_announces_sweeping_app_store) - [Apple announces sweeping App Store changes in the EU](https://9to5mac.com/2025/06/26/apple-announces-sweeping-app-store-changes-in-the-eu/)
* [2025-06-26, 20:08:28](https://lobste.rs/s/7qwju2/adding_trash_can_linux_with_trash_cli) - [Adding a trash can to Linux with trash-cli](https://ittavern.com/adding-a-trash-can-to-linux-with-trash-cli/)
* [2025-06-26, 19:40:25](https://lobste.rs/s/k9fv55/no_time_learn_web_framework_x) - [No Time To Learn (Web) Framework X](https://brainbaking.com/post/2025/06/no-time-to-learn-web-framework-x/)
* [2025-06-26, 19:31:29](https://news.ycombinator.com/item?id=44390501) - [Alternative Layout System](https://alternativelayoutsystem.com/scripts/#same-sizer)
* [2025-06-26, 19:14:05](https://lobste.rs/s/2uixrw/new_zine_secret_rules_terminal) - [New zine: The Secret Rules of the Terminal](https://jvns.ca/blog/2025/06/24/new-zine--the-secret-rules-of-the-terminal/)
* [2025-06-26, 18:58:39](https://lobste.rs/s/llgmmr/announcing_rust_1_88_0) - [Announcing Rust 1.88.0](https://blog.rust-lang.org/2025/06/26/Rust-1.88.0/)
* [2025-06-26, 16:53:00](https://soylentnews.org/article.pl?sid=25/06/25/1715224&amp;from=rss) - [Rubin Telescope To Collect Up To 500,000 Tb Of Data From 3,200-Megapixel Camera Over Ten Years](https://soylentnews.org/article.pl?sid=25/06/25/1715224&amp;from=rss)
* [2025-06-26, 15:56:58](https://lobste.rs/s/72hbqg/why_is_rust_compiler_so_slow) - [\&quot;Why is the Rust compiler so slow?\&quot;](https://sharnoff.io/blog/why-rust-compiler-slow)
* [2025-06-26, 12:39:49](https://lobste.rs/s/nwvary/you_don_t_own_word_freedom_full_burn) - [You Don’t Own the Word “Freedom”: A Full-Burn Response to the GNU/Linux Comment That Tried to Gatekeep Me Off My Own Machine](https://fireborn.mataroa.blog/blog/you-dont-own-the-word-freedom-a-full-burn-response-to-the-gnulinux-comment-that-tried-to-gatekeep-me-off-my-own-machine/)
* [2025-06-26, 12:11:00](https://soylentnews.org/article.pl?sid=25/06/25/1712202&amp;from=rss) - [Key Fair Use Ruling Clarifies When Books Can be Used for AI Training](https://soylentnews.org/article.pl?sid=25/06/25/1712202&amp;from=rss)
* [2025-06-26, 12:10:26](https://lobste.rs/s/nr9t3s/rss_server_side_reader) - [RSS Server Side Reader](https://matklad.github.io/2025/06/26/rssssr.html)
* [2025-06-26, 11:04:04](https://lobste.rs/s/9ssix0/ticket_driven_development_fastest_way_go) - [Ticket-Driven Development: The Fastest Way to Go Nowhere](https://thecynical.dev/posts/ticket-driven-development/)
* [2025-06-26, 07:23:00](https://soylentnews.org/article.pl?sid=25/06/25/0358212&amp;from=rss) - [Blaze Sends Ship Carrying Hundreds Of Chinese EVs To Bottom Of Pacific](https://soylentnews.org/article.pl?sid=25/06/25/0358212&amp;from=rss)
* [2025-06-26, 06:38:17](https://lobste.rs/s/qaukc0/png_is_back) - [PNG is back](https://www.programmax.net/articles/png-is-back/)
* [2025-06-26, 02:38:00](https://soylentnews.org/article.pl?sid=25/06/24/2342222&amp;from=rss) - [Judge Denies Creating “Mass Surveillance Program” Harming All ChatGPT Users](https://soylentnews.org/article.pl?sid=25/06/24/2342222&amp;from=rss)
* [2025-06-25, 22:17:00](https://soylentnews.org/article.pl?sid=25/06/24/1258205&amp;from=rss) - [Creating AI Based Entirely on Ethically-Sourced Data](https://soylentnews.org/article.pl?sid=25/06/24/1258205&amp;from=rss)
* [2025-06-25, 17:30:00](https://soylentnews.org/article.pl?sid=25/06/24/1256227&amp;from=rss) - [New Research Provides First Evidence of the Use of Browser Fingerprints for Online Tracking](https://soylentnews.org/article.pl?sid=25/06/24/1256227&amp;from=rss)
* [2025-06-25, 12:45:00](https://soylentnews.org/article.pl?sid=25/06/24/0336243&amp;from=rss) - [Apple to Australians: You&apos;re Too Stupid to Choose Your Own Apps](https://soylentnews.org/article.pl?sid=25/06/24/0336243&amp;from=rss)
* [2025-06-25, 08:02:00](https://soylentnews.org/article.pl?sid=25/06/24/0044241&amp;from=rss) - [UK Retail&apos;s Estimated Cyberattack Costs Pegged at $500M](https://soylentnews.org/article.pl?sid=25/06/24/0044241&amp;from=rss)
* [2025-06-25, 03:18:00](https://soylentnews.org/article.pl?sid=25/06/24/0039212&amp;from=rss) - [BEV Battery Swapping in Shanghai](https://soylentnews.org/article.pl?sid=25/06/24/0039212&amp;from=rss)
* [2025-06-24, 22:36:00](https://soylentnews.org/article.pl?sid=25/06/24/0032246&amp;from=rss) - [Peru Gas Workers Find Thousand-Year-Old Mummy](https://soylentnews.org/article.pl?sid=25/06/24/0032246&amp;from=rss)
* [2025-06-24, 17:51:00](https://soylentnews.org/article.pl?sid=25/06/24/0030208&amp;from=rss) - [Breathprints?](https://soylentnews.org/article.pl?sid=25/06/24/0030208&amp;from=rss)
* [2025-06-24, 13:09:00](https://soylentnews.org/article.pl?sid=25/06/24/0021200&amp;from=rss) - [Cloudflare CEO Warns AI Crawlers and Summaries Are Eroding the Internet&apos;s Business Model](https://soylentnews.org/article.pl?sid=25/06/24/0021200&amp;from=rss)
* [2025-06-24, 12:23:48](https://news.ycombinator.com/item?id=44365404) - [Glass nanostructures reflect nearly all visible light, challenging assumptions](https://phys.org/news/2025-06-glass-nanostructures-visible-photonics-assumptions.html)
* [2025-06-24, 08:23:00](https://soylentnews.org/article.pl?sid=25/06/23/194255&amp;from=rss) - [Massive DDoS Attack Delivered 37.4Tb In 45 Seconds, Equivalent To 10,000 Hd Movies, To One Victim IP](https://soylentnews.org/article.pl?sid=25/06/23/194255&amp;from=rss)
* [2025-06-24, 08:19:49](https://news.ycombinator.com/item?id=44363948) - [Show HN: Do you know RGB?](https://maxwellito.github.io/do-you-know-rgb/)
* [2025-06-24, 03:36:00](https://soylentnews.org/article.pl?sid=25/06/22/1718247&amp;from=rss) - [US Tech Czar: China Just Two Years Behind On Chip Design](https://soylentnews.org/article.pl?sid=25/06/22/1718247&amp;from=rss)
* [2025-06-24, 03:27:48](https://news.ycombinator.com/item?id=44362628) - [A New Kind of Computer (April 2025)](https://lightmatter.co/blog/a-new-kind-of-computer/)
* [2025-06-23, 22:52:00](https://soylentnews.org/article.pl?sid=25/06/22/179210&amp;from=rss) - [A Cracked Piece of Metal Self-Healed in Experiment That Stunned Scientists](https://soylentnews.org/article.pl?sid=25/06/22/179210&amp;from=rss)
* [2025-06-23, 19:09:00](https://soylentnews.org/breakingnews/article.pl?sid=25/06/23/1910209&amp;from=rss) - [US and Allied Base  Al Udeid in Qatar Attacked](https://soylentnews.org/breakingnews/article.pl?sid=25/06/23/1910209&amp;from=rss)
* [2025-06-23, 18:08:00](https://soylentnews.org/article.pl?sid=25/06/22/173242&amp;from=rss) - [50 Years of JAWS](https://soylentnews.org/article.pl?sid=25/06/22/173242&amp;from=rss)
* [2025-06-23, 14:56:02](https://news.ycombinator.com/item?id=44356456) - [Sailing the fjords like the Vikings yields unexpected insights](https://arstechnica.com/science/2025/06/this-archaeologist-built-a-replica-boat-to-sail-like-the-vikings/)
* [2025-06-23, 14:25:56](https://news.ycombinator.com/item?id=44356130) - [Whitesmiths C compiler: One of the earliest commercial C compilers available](https://github.com/hansake/Whitesmiths-C-compiler)
* [2025-06-23, 13:18:00](https://soylentnews.org/article.pl?sid=25/06/22/1649205&amp;from=rss) - [Open Internet Stack: The EU Commission’s Vague Plans for Open Source](https://soylentnews.org/article.pl?sid=25/06/22/1649205&amp;from=rss)
* [2025-06-23, 08:34:00](https://soylentnews.org/article.pl?sid=25/06/22/0357239&amp;from=rss) - [Astronomers Locate Universe&apos;s &apos;Missing&apos; Matter in the Largest Cosmic Structures](https://soylentnews.org/article.pl?sid=25/06/22/0357239&amp;from=rss)
* [2025-06-23, 03:48:00](https://soylentnews.org/article.pl?sid=25/06/22/0341247&amp;from=rss) - [The GPU 16-Pin Melting Fiasco Is Getting Ridiculous](https://soylentnews.org/article.pl?sid=25/06/22/0341247&amp;from=rss)
