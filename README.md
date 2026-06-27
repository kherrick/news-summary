# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Advancements and Innovations

* [AI Learns the "Dark Art" of RF Chip Design](https://spectrum.ieee.org/ai-radio-chip-design) - Researchers explore how artificial intelligence is taking to designing next-generation radio frequency (RF) chips, potentially surpassing human ingenuity in this specialized domain. [Comments](https://lobste.rs/s/bxhmjt/ai_learns_dark_art_rf_chip_design)

* [AI Is Designing Radio Chips That Humans Couldn't Even Imagine](https://spectrum.ieee.org/ai-radio-chip-design) - An in-depth look at how AI is pushing the boundaries of radio chip design by creating previously inconceivable designs. [Comments](https://news.ycombinator.com/item?id=48645510)

## Health and Science Breakthroughs

* [Non-Invasive Stimulation of the Brain Ended Opioid Addiction, Cigarette Craving](https://science.slashdot.org/story/26/06/26/221205/non-invasive-stimulation-of-the-brain-ended-opioid-addiction-cigarette-craving?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Promising developments in non-invasive brain stimulation suggest it could aid in treating opioid addiction and cigarette cravings. [Comments](https://science.slashdot.org/story/26/06/26/221205/non-invasive-stimulation-of-the-brain-ended-opioid-addiction-cigarette-craving?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Doctors suspected man had brain cancer. He had worms](https://arstechnica.com/health/2026/06/doctors-suspected-man-had-brain-cancer-he-actually-had-worms/) - A cautionary tale of a misdiagnosed brain worm infection initially thought to be cancer. [Comments](https://news.ycombinator.com/item?id=48699617)

## AI and Society

* [US Government Allows Anthropic Limited Release of 'Mythos' AI Model, Saying 'Appropriate Safeguards are in Place'](https://news.slashdot.org/story/26/06/27/0159230/us-government-allows-anthropic-limited-release-of-mythos-ai-model-saying-appropriate-safeguards-are-in-place?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The U.S. government permits the controlled release of Anthropic's new AI model, emphasizing the necessity of safeguards. [Comments](https://news.slashdot.org/story/26/06/27/0159230/us-government-allows-anthropic-limited-release-of-mythos-ai-model-saying-appropriate-safeguards-are-in-place?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Privacy and Cybersecurity

* [Anonymous GitHub Account Mass-Dropping Undisclosed 0-Days](https://github.com/bikini/exploitarium) - A mysterious anonymous account is revealing undisclosed cybersecurity vulnerabilities, raising questions about digital security. [Comments](https://news.ycombinator.com/item?id=48698617)

* [Pluralistic: Spying on Kids to Save Kids From Spying is Very, Very Stupid](https://soylentnews.org/article.pl?sid=26/06/26/1415219&from=rss) - A critique on privacy paradoxes and approaches in safeguarding kids on the internet. [Comments](https://soylentnews.org/article.pl?sid=26/06/26/1415219&from=rss)

## Space Exploration

* [SpaceX Plans To Build 'Starpipe' Natural Gas Pipeline To Fuel Starship Rockets](https://science.slashdot.org/story/26/06/26/0037206/spacex-plans-to-build-starpipe-natural-gas-pipeline-to-fuel-starship-rockets?utm_source=rss1.0mainlinkanon&utm_medium=feed) - SpaceX's new project aims to secure a natural gas supply line for powering its next-generation Starship rockets. [Comments](https://science.slashdot.org/story/26/06/26/0037206/spacex-plans-to-build-starpipe-natural-gas-pipeline-to-fuel-starship-rockets?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* ['Fingerprints' of Black Hole's Event Horizon Detected For First Time](https://science.slashdot.org/story/26/06/25/2123205/fingerprints-of-black-holes-event-horizon-detected-for-first-time?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Breakthrough discovery of black hole 'fingerprints', offering fresh perspectives in astrophysical studies. [Comments](https://science.slashdot.org/story/26/06/25/2123205/fingerprints-of-black-holes-event-horizon-detected-for-first-time?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Tech Policy and Society

* [Streaming Services' Obnoxiously Loud Ads Become Illegal on July 1 in California](https://arstechnica.com/gadgets/2026/06/streaming-services-obnoxiously-loud-ads-become-illegal-on-july-1-in-california/) - New regulations in California prohibit disproportionately loud advertisements on streaming platforms. [Comments](https://news.ycombinator.com/item?id=48697768)

* [Cory Doctorow on the Right — and Wrong — Way to Criticize AI](https://soylentnews.org/article.pl?sid=26/06/25/0345250&from=rss) - Author and activist Cory Doctorow weighs in on how misconceptions cloud debates on AI development. [Comments](https://soylentnews.org/article.pl?sid=26/06/25/0345250&from=rss)

## Unique Scientific Discoveries

* [Astronomers Find Biggest Super-Puff Planets Yet That Are Lighter Than Cotton Candy](https://science.slashdot.org/story/26/06/25/0525240/astronomers-find-biggest-super-puff-planets-yet-that-are-lighter-than-cotton-candy?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A newfound class of exoplanets puzzles researchers by being massive yet surprisingly low in density. [Comments](https://science.slashdot.org/story/26/06/25/0525240/astronomers-find-biggest-super-puff-planets-yet-that-are-lighter-than-cotton-candy?utm_source=rss1.0mainlinkanon&utm_medium=feed)

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

* [2026-06-27, 18:34:00](https://yro.slashdot.org/story/26/06/27/0635220/california-sheriff-says-their-drone-disarmed-a-suspect-shares-video-on-instagram?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California Sheriff Says Their Drone Disarmed a Suspect, Shares Video on Instagram](https://yro.slashdot.org/story/26/06/27/0635220/california-sheriff-says-their-drone-disarmed-a-suspect-shares-video-on-instagram?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-27, 18:03:29](https://lobste.rs/s/bxhmjt/ai_learns_dark_art_rf_chip_design) - [AI Learns the \&quot;Dark Art\&quot; of RF Chip Design](https://spectrum.ieee.org/ai-radio-chip-design)
* [2026-06-27, 18:00:46](https://news.ycombinator.com/item?id=48700317) - [The Card That Made the Apple II Serious](https://www.wiseowl.com/articles/a2fpga-videx-01-the-card-that-made-the-apple-ii-serious/)
* [2026-06-27, 17:34:00](https://science.slashdot.org/story/26/06/26/221205/non-invasive-stimulation-of-the-brain-ended-opioid-addiction-cigarette-craving?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Non-Invasive Stimulation of the Brain Ended Opioid Addiction, Cigarette Craving](https://science.slashdot.org/story/26/06/26/221205/non-invasive-stimulation-of-the-brain-ended-opioid-addiction-cigarette-craving?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-27, 17:24:00](https://soylentnews.org/article.pl?sid=26/06/26/1425225&amp;from=rss) - [Goalkeepers Beware: Trionda World Cup Ball Hits ‘Crisis’ Point at Certain Speed](https://soylentnews.org/article.pl?sid=26/06/26/1425225&amp;from=rss)
* [2026-06-27, 17:11:20](https://news.ycombinator.com/item?id=48699928) - [Turn your site into a place people can bump into each other](https://cauenapier.com/blog/townsquare_release/)
* [2026-06-27, 17:09:07](https://lobste.rs/s/q7e7hp/c_linux_kernel) - [C in the Linux Kernel](https://www.youtube.com/watch?v=iqqf8YWJhSs)
* [2026-06-27, 17:00:15](https://news.ycombinator.com/item?id=48699842) - [Supabase (YC S20) Is Hiring for Multigres](https://jobs.ashbyhq.com/supabase/2e718684-4f75-4a99-8d6b-3b6bd44e4228)
* [2026-06-27, 16:51:09](https://news.ycombinator.com/item?id=48699778) - [Screen time can damage under-twos&apos; development, landmark study suggests](https://www.theguardian.com/society/2026/jun/27/screen-time-damage-under-twos-development-study)
* [2026-06-27, 16:34:00](https://news.slashdot.org/story/26/06/27/0538246/fsf-librelocal-organized-from-prison-by-iranian-man-jailed-for-cyber-crimes-after-promoting-free-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FSF &apos;LibreLocal&apos; Organized From Prison by Iranian Man Jailed for &apos;Cyber-Crimes&apos; After Promoting Free Software](https://news.slashdot.org/story/26/06/27/0538246/fsf-librelocal-organized-from-prison-by-iranian-man-jailed-for-cyber-crimes-after-promoting-free-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-27, 16:31:58](https://news.ycombinator.com/item?id=48699617) - [Doctors suspected man had brain cancer. He had worms](https://arstechnica.com/health/2026/06/doctors-suspected-man-had-brain-cancer-he-actually-had-worms/)
* [2026-06-27, 16:19:10](https://lobste.rs/s/b2emi7/guards_guards) - [Guards! Guards](https://hauleth.dev/post/guards-guards/)
* [2026-06-27, 15:34:00](https://developers.slashdot.org/story/26/06/25/0546238/forget-prompt-engineering-loop-engineering-is-all-the-rage-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Forget Prompt Engineering: &apos;Loop Engineering&apos; Is All the Rage Now](https://developers.slashdot.org/story/26/06/25/0546238/forget-prompt-engineering-loop-engineering-is-all-the-rage-now?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-27, 15:16:10](https://lobste.rs/s/6c5c4j/comparing_transformers_hybrid_models_at) - [Comparing Transformers and Hybrid Models at the Token Level](https://arxiv.org/pdf/2606.20936)
* [2026-06-27, 15:10:14](https://lobste.rs/s/boap41/peek_into_reddit_s_anti_spam_internals) - [A peek into Reddit&apos;s anti-spam internals](https://lyra.horse/blog/2026/06/reddit-spam-internals/)
* [2026-06-27, 14:38:05](https://news.ycombinator.com/item?id=48698684) - [Zuckerberg&apos;s Increasingly Bizarre War on Whistleblowers](https://pluralistic.net/2026/06/27/zuckerstreisand-2/)
* [2026-06-27, 14:31:00](https://news.ycombinator.com/item?id=48698617) - [Anonymous GitHub account mass-dropping undisclosed 0-days](https://github.com/bikini/exploitarium)
* [2026-06-27, 14:29:27](https://lobste.rs/s/ciwbiq/linux_7_2_improves_anonymous_unnamed_pipe) - [Linux 7.2 Improves Anonymous/Unnamed Pipe Performance For Shell Pipelines &amp; More](https://www.phoronix.com/news/Linux-72-Faster-Anon-Pipe-Write)
* [2026-06-27, 14:23:40](https://news.ycombinator.com/item?id=48698559) - [Post-Mythos Cybersecurity: Keep calm and carry on](https://cephalosec.com/blog/cybersecurity-in-the-post-mythos-era-keep-calm-and-carry-on/)
* [2026-06-27, 14:18:23](https://lobste.rs/s/xmsj3r/data_access_patterns_makes_your_cpu) - [Data Access Patterns That Makes Your CPU Really Angry](https://blog.weineng.me/posts/slowest_add/)
* [2026-06-27, 13:32:20](https://news.ycombinator.com/item?id=48698151) - [Suspicious Discontinuities (2020)](https://danluu.com/discontinuities/)
* [2026-06-27, 12:53:26](https://lobste.rs/s/z7eoo7/excessive_nil_pointer_checks_go) - [Excessive nil pointer checks in Go](https://konradreiche.com/blog/excessive-nil-pointer-checks-in-go/)
* [2026-06-27, 12:43:16](https://news.ycombinator.com/item?id=48697768) - [Streaming services&apos; obnoxiously loud ads become illegal on July 1 in California](https://arstechnica.com/gadgets/2026/06/streaming-services-obnoxiously-loud-ads-become-illegal-on-july-1-in-california/)
* [2026-06-27, 12:43:00](https://soylentnews.org/article.pl?sid=26/06/26/1420245&amp;from=rss) - [The Memory Crisis Is Getting So Bad That Even Retro RAM Prices Are Becoming Ridiculous](https://soylentnews.org/article.pl?sid=26/06/26/1420245&amp;from=rss)
* [2026-06-27, 12:40:59](https://news.ycombinator.com/item?id=48697746) - [How Many Elementary Particles Are There, Really?](https://www.quantamagazine.org/how-many-elementary-particles-are-there-really-20260615/)
* [2026-06-27, 12:40:25](https://lobste.rs/s/oaq69a/shard_your_locks_benchmarking_6_go_cache) - [Shard your locks: benchmarking 6 Go cache designs](https://strebkov.dev/posts/shard-your-locks/)
* [2026-06-27, 12:10:27](https://news.ycombinator.com/item?id=48697560) - [OpenRA](https://www.openra.net/)
* [2026-06-27, 12:00:00](https://science.slashdot.org/story/26/06/26/0037206/spacex-plans-to-build-starpipe-natural-gas-pipeline-to-fuel-starship-rockets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX Plans To Build &apos;Starpipe&apos; Natural Gas Pipeline To Fuel Starship Rockets](https://science.slashdot.org/story/26/06/26/0037206/spacex-plans-to-build-starpipe-natural-gas-pipeline-to-fuel-starship-rockets?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-27, 11:32:10](https://news.ycombinator.com/item?id=48697335) - [If you can&apos;t hold it, you don&apos;t own it](https://dervis.de/physical/)
* [2026-06-27, 10:28:53](https://news.ycombinator.com/item?id=48696982) - [Fintech Engineering Handbook](https://w.pitula.me/fintech-engineering-handbook/)
* [2026-06-27, 09:18:52](https://news.ycombinator.com/item?id=48696585) - [DSpark: Speculative decoding accelerates LLM inference [pdf]](https://github.com/deepseek-ai/DeepSpec/blob/main/DSpark_paper.pdf)
* [2026-06-27, 09:17:42](https://lobste.rs/s/n2r6r6/how_think_about_ai_cory_doctorow_on_big) - [\&quot;How to Think About AI\&quot;: Cory Doctorow on Big Tech, Understanding AI, Labor Automation &amp; More](https://www.youtube.com/watch?v=OBUzl_IaWIw)
* [2026-06-27, 09:06:11](https://news.ycombinator.com/item?id=48696510) - [Beer CSS – Build material design in record time](https://www.beercss.com)
* [2026-06-27, 09:02:59](https://lobste.rs/s/zxt3em/openzl) - [OpenZL](https://openzl.org/)
* [2026-06-27, 08:00:00](https://news.slashdot.org/story/26/06/27/0257237/bitcoin-drops-again-skeptical-investment-strategist-calls-it-useless?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bitcoin Drops Again. Skeptical Investment Strategist Calls It &apos;Useless&apos;](https://news.slashdot.org/story/26/06/27/0257237/bitcoin-drops-again-skeptical-investment-strategist-calls-it-useless?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-27, 07:57:00](https://soylentnews.org/article.pl?sid=26/06/26/1417252&amp;from=rss) - [Wikipedia Cofounder Larry Sanger Blocked From Editing Wikipedia](https://soylentnews.org/article.pl?sid=26/06/26/1417252&amp;from=rss)
* [2026-06-27, 07:54:36](https://lobste.rs/s/klhhzq/fifa_interactive_bracket_world_cup) - [FIFA Interactive Bracket (World Cup)](https://worldcup.reeseric.ci)
* [2026-06-27, 07:51:26](https://news.ycombinator.com/item?id=48696127) - [Researchers have developed pixels that can emit and analyse light together](https://ethz.ch/en/news-and-events/eth-news/news/2026/06/a-new-type-of-pixel.html)
* [2026-06-27, 07:04:29](https://lobste.rs/s/uws0wx/tiny_compiler_for_data_parallel_kernels) - [A Tiny Compiler for Data-Parallel Kernels](https://healeycodes.com/a-tiny-compiler-for-data-parallel-kernels)
* [2026-06-27, 05:00:00](https://science.slashdot.org/story/26/06/25/0525240/astronomers-find-biggest-super-puff-planets-yet-that-are-lighter-than-cotton-candy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Astronomers Find Biggest Super-Puff Planets Yet That Are Lighter Than Cotton Candy](https://science.slashdot.org/story/26/06/25/0525240/astronomers-find-biggest-super-puff-planets-yet-that-are-lighter-than-cotton-candy?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-27, 03:56:22](https://lobste.rs/s/u1clgf/text_files_as_user_interface) - [Text files as a user interface](https://ratfactor.com/cards/text-files-as-ui)
* [2026-06-27, 03:30:01](https://news.ycombinator.com/item?id=48694853) - [WordStar: A Writer&apos;s Word Processor (1996)](https://www.sfwriter.com/wordstar.htm)
* [2026-06-27, 03:13:00](https://soylentnews.org/article.pl?sid=26/06/26/1415219&amp;from=rss) - [Pluralistic: Spying on Kids to Save Kids From Spying is Very, Very Stupid](https://soylentnews.org/article.pl?sid=26/06/26/1415219&amp;from=rss)
* [2026-06-27, 02:09:00](https://news.slashdot.org/story/26/06/27/0159230/us-government-allows-anthropic-limited-release-of-mythos-ai-model-saying-appropriate-safeguards-are-in-place?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Government Allows Anthropic Limited Release of &apos;Mythos&apos; AI Model, Saying &apos;Appropriate Safeguards are in Place\&quot;](https://news.slashdot.org/story/26/06/27/0159230/us-government-allows-anthropic-limited-release-of-mythos-ai-model-saying-appropriate-safeguards-are-in-place?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-27, 00:27:42](https://lobste.rs/s/hvd5hk/what_does_it_mean_be_mathematician_when_ai) - [What does it mean to be a mathematician when AI does the math?](https://spectrum.ieee.org/ai-in-mathematics)
* [2026-06-27, 00:08:45](https://lobste.rs/s/s138jl/nlnet_labs_llm_policy) - [NLNet Labs LLM Policy](https://nlnetlabs.nl/llm-policy/)
* [2026-06-26, 22:43:29](https://news.ycombinator.com/item?id=48692946) - [Why does kinetic energy increase quadratically, not linearly, with speed? (2011)](https://physics.stackexchange.com/questions/535/why-does-kinetic-energy-increase-quadratically-not-linearly-with-speed)
* [2026-06-26, 22:38:19](https://lobste.rs/s/xpdod3/visual_basic_on_pc_w_windows_3_1) - [Visual Basic on the PC w/Windows 3.1](https://stonetools.ghost.io/visualbasic-win31/)
* [2026-06-26, 22:26:00](https://soylentnews.org/article.pl?sid=26/06/25/0459200&amp;from=rss) - [Day-to-Day Cyber Disruptions Driving Loss for SMEs, Finds Report](https://soylentnews.org/article.pl?sid=26/06/25/0459200&amp;from=rss)
* [2026-06-26, 20:00:00](https://tech.slashdot.org/story/26/06/26/0029235/microsoft-adds-another-year-to-windows-10-extended-update-program?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Adds Another Year To Windows 10 Extended Update Program](https://tech.slashdot.org/story/26/06/26/0029235/microsoft-adds-another-year-to-windows-10-extended-update-program?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-26, 19:05:42](https://lobste.rs/s/y4jrtn/youre_os_game_where_you_are_computer_s_os) - [youre-the-os: A game where you are a computer&apos;s OS](https://github.com/plbrault/youre-the-os)
* [2026-06-26, 18:36:13](https://lobste.rs/s/jespwh/aria_anti_patterns_you) - [ARIA, anti-patterns, and you](https://dbushell.com/2026/06/26/aria-anti-patterns-and-you/)
* [2026-06-26, 18:27:04](https://lobste.rs/s/atsrpy/making_devenv_start_fast_whole_nixpkgs) - [Making devenv start fast, and the whole nixpkgs with it - devenv](https://devenv.sh/blog/2026/06/26/making-devenv-start-fast-and-the-whole-nixpkgs-with-it/)
* [2026-06-26, 17:44:00](https://soylentnews.org/article.pl?sid=26/06/25/0445223&amp;from=rss) - [Automakers Could Stop Selling Cars in California Rather Than Comply With Tracking Laws](https://soylentnews.org/article.pl?sid=26/06/25/0445223&amp;from=rss)
* [2026-06-26, 17:06:55](https://news.ycombinator.com/item?id=48689028) - [Previewing GPT‑5.6 Sol: a next-generation model](https://openai.com/index/previewing-gpt-5-6-sol/)
* [2026-06-26, 16:20:06](https://news.ycombinator.com/item?id=48688438) - [One man, two kernels, and a lot of RISC-V](https://www.theregister.com/software/2026/06/26/one-man-two-kernels-and-a-lot-of-risc-v/5262858)
* [2026-06-26, 15:42:28](https://lobste.rs/s/6q12d7/incident_report_cve_2026_lgtm) - [Incident Report: CVE-2026-LGTM](https://nesbitt.io/2026/06/26/incident-report-cve-2026-lgtm.html)
* [2026-06-26, 15:00:00](https://tech.slashdot.org/story/26/06/25/2113249/airbus-is-ordered-to-inspect-16-jets-after-cracks-are-found-in-wings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Airbus Is Ordered To Inspect 16 Jets After Cracks Are Found In Wings](https://tech.slashdot.org/story/26/06/25/2113249/airbus-is-ordered-to-inspect-16-jets-after-cracks-are-found-in-wings?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-26, 14:58:54](https://lobste.rs/s/j2ua4f/anatomy_failed_nation_state_attack) - [Anatomy of a Failed (Nation-State?) Attack](https://grack.com/blog/2026/06/25/dissecting-a-failed-nation-state-attack/)
* [2026-06-26, 13:21:48](https://lobste.rs/s/rm7qnt/guixpkgs_every_guix_package_as_nix_flake) - [GuixPkgs: every Guix package, as a Nix flake](https://fzakaria.com/2026/06/25/guixpkgs-every-guix-package-as-a-nix-flake)
* [2026-06-26, 12:55:00](https://soylentnews.org/article.pl?sid=26/06/25/0441233&amp;from=rss) - [The Database That Refused to Die: How Postgres Survived its Own Creators](https://soylentnews.org/article.pl?sid=26/06/25/0441233&amp;from=rss)
* [2026-06-26, 11:00:00](https://slashdot.org/story/26/06/25/2038233/notion-mail-is-shutting-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Notion Mail Is Shutting Down](https://slashdot.org/story/26/06/25/2038233/notion-mail-is-shutting-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-26, 09:48:57](https://lobste.rs/s/yvvhve/all_you_need_is_postgresql) - [All you need is PostgreSQL](https://ebellani.github.io/blog/2026/all-you-need-is-postgresql/)
* [2026-06-26, 08:12:59](https://lobste.rs/s/dpctyb/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/dpctyb/what_are_you_doing_this_weekend)
* [2026-06-26, 08:06:00](https://soylentnews.org/article.pl?sid=26/06/25/0430237&amp;from=rss) - [As China Looms, Taiwan Makes More Drones for Defense and the US Military](https://soylentnews.org/article.pl?sid=26/06/25/0430237&amp;from=rss)
* [2026-06-26, 07:00:00](https://science.slashdot.org/story/26/06/25/2123205/fingerprints-of-black-holes-event-horizon-detected-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Fingerprints&apos; of Black Hole&apos;s Event Horizon Detected For First Time](https://science.slashdot.org/story/26/06/25/2123205/fingerprints-of-black-holes-event-horizon-detected-for-first-time?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-26, 04:13:28](https://news.ycombinator.com/item?id=48682243) - [Faster KNN search in Manticore: 2-pass HNSW, batched distances, and AVX-512](https://medium.com/@s_nikolaev/faster-knn-search-in-manticore-2-pass-hnsw-batched-distances-and-avx-512-b85604647aab)
* [2026-06-26, 03:30:00](https://hardware.slashdot.org/story/26/06/25/2056248/spain-to-require-carriers-to-keep-mobile-networks-live-during-power-outages?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Spain To Require Carriers To Keep Mobile Networks Live During Power Outages](https://hardware.slashdot.org/story/26/06/25/2056248/spain-to-require-carriers-to-keep-mobile-networks-live-during-power-outages?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-26, 03:24:00](https://soylentnews.org/article.pl?sid=26/06/25/046226&amp;from=rss) - [Beats Studio Buds Flaw Could Let Nearby Attackers Eavesdrop on Users](https://soylentnews.org/article.pl?sid=26/06/25/046226&amp;from=rss)
* [2026-06-25, 23:00:00](https://tech.slashdot.org/story/26/06/25/2046248/polestar-banned-from-selling-cars-in-us-from-model-year-2027?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Polestar Banned From Selling Cars In US From Model Year 2027](https://tech.slashdot.org/story/26/06/25/2046248/polestar-banned-from-selling-cars-in-us-from-model-year-2027?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-25, 22:37:00](https://soylentnews.org/article.pl?sid=26/06/25/0348249&amp;from=rss) - [Interplanetary Fossil Find?](https://soylentnews.org/article.pl?sid=26/06/25/0348249&amp;from=rss)
* [2026-06-25, 22:00:00](https://yro.slashdot.org/story/26/06/25/215241/trump-administration-asks-openai-to-stagger-release-of-new-model?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Administration Asks OpenAI To Stagger Release of New Model](https://yro.slashdot.org/story/26/06/25/215241/trump-administration-asks-openai-to-stagger-release-of-new-model?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-06-25, 18:42:17](https://news.ycombinator.com/item?id=48677564) - [Long Wave radio era set to end with switch-off](https://www.economist.com/britain/2026/06/25/the-bbc-switches-off-its-oldest-service)
* [2026-06-25, 17:54:00](https://soylentnews.org/article.pl?sid=26/06/25/0345250&amp;from=rss) - [Cory Doctorow on the Right — and Wrong — Way to Criticize AI](https://soylentnews.org/article.pl?sid=26/06/25/0345250&amp;from=rss)
* [2026-06-25, 15:54:17](https://news.ycombinator.com/item?id=48675290) - [Cultures of Making and Relating](https://blog.khinsen.net/posts/2026/06/25/cultures.html)
* [2026-06-25, 14:45:17](https://news.ycombinator.com/item?id=48674244) - [A History of Menus Is a Menu of History](https://pudding.cool/2026/06/menu-story/)
* [2026-06-25, 13:10:00](https://soylentnews.org/article.pl?sid=26/06/25/0341243&amp;from=rss) - [Die Analysis of the 8087 Math Coprocessor&apos;s Fast Bit Shifter](https://soylentnews.org/article.pl?sid=26/06/25/0341243&amp;from=rss)
* [2026-06-25, 08:28:00](https://soylentnews.org/article.pl?sid=26/06/25/0339211&amp;from=rss) - [Nvidia&apos;s New AI Racks Run on 45°C Liquid Cooling](https://soylentnews.org/article.pl?sid=26/06/25/0339211&amp;from=rss)
* [2026-06-25, 07:26:06](https://news.ycombinator.com/item?id=48670103) - [The US Army Issued Ocarinas to Soldiers in World War II](https://www.flutetunes.com/articles/my-flute-goes-to-war/)
* [2026-06-25, 04:06:29](https://news.ycombinator.com/item?id=48668747) - [Linux on Older Hardware: The Complete Revival Guide](https://www.fosslinux.com/158206/linux-on-older-hardware-revival-guide.htm)
* [2026-06-25, 03:45:00](https://soylentnews.org/article.pl?sid=26/06/25/0336221&amp;from=rss) - [Brave Gives Linux Users Its Stripped Down Origin Browser for Free](https://soylentnews.org/article.pl?sid=26/06/25/0336221&amp;from=rss)
* [2026-06-24, 21:10:00](https://soylentnews.org/article.pl?sid=26/06/23/0949209&amp;from=rss) - [Russian Satellites Cosmos 2546 Have Been Jamming GPS Signals Across Europe](https://soylentnews.org/article.pl?sid=26/06/23/0949209&amp;from=rss)
* [2026-06-24, 18:42:12](https://news.ycombinator.com/item?id=48664063) - [Reducing tick density along recreational trails in Ottawa, Canada](https://www.sciencedirect.com/science/article/pii/S1877959X26000476)
* [2026-06-24, 16:25:00](https://soylentnews.org/article.pl?sid=26/06/23/0941229&amp;from=rss) - [Voyager 1 Will Cross The 1 Light-Day Threshold On November 18, 2026](https://soylentnews.org/article.pl?sid=26/06/23/0941229&amp;from=rss)
* [2026-06-24, 14:02:16](https://news.ycombinator.com/item?id=48660021) - [AI Is Designing Radio Chips That Humans Couldn&apos;t Even Imagine](https://spectrum.ieee.org/ai-radio-chip-design)
* [2026-06-24, 11:42:00](https://soylentnews.org/article.pl?sid=26/06/23/0934229&amp;from=rss) - [Crypto Clipper Spreads Over USB and Communicates Over Tor](https://soylentnews.org/article.pl?sid=26/06/23/0934229&amp;from=rss)
* [2026-06-24, 06:54:00](https://soylentnews.org/article.pl?sid=26/06/23/0931228&amp;from=rss) - [Intel And AMD&apos;s New ACE CPU Extensions Bring An Efficient AI-Oriented Instruction Set To X86](https://soylentnews.org/article.pl?sid=26/06/23/0931228&amp;from=rss)
* [2026-06-24, 02:07:00](https://soylentnews.org/article.pl?sid=26/06/23/0928218&amp;from=rss) - [GM Replaces Over 1,000 Detroit Workers With Just 50 Robots](https://soylentnews.org/article.pl?sid=26/06/23/0928218&amp;from=rss)
* [2026-06-23, 21:24:00](https://soylentnews.org/article.pl?sid=26/06/23/0925237&amp;from=rss) - [We Treat the Eight-hour Day as an Acceptable Day&apos;s Work ....](https://soylentnews.org/article.pl?sid=26/06/23/0925237&amp;from=rss)
* [2026-06-23, 16:38:00](https://soylentnews.org/article.pl?sid=26/06/22/039226&amp;from=rss) - [AI Economics for Dummies](https://soylentnews.org/article.pl?sid=26/06/22/039226&amp;from=rss)
* [2026-06-23, 14:28:20](https://news.ycombinator.com/item?id=48645510) - [Task Failed Successfully: Saturating NIC and Disk Bandwidth](https://blog.mrcroxx.com/posts/task-failed-successfully-saturating-nic-and-disk-bandwidth/)
* [2026-06-23, 11:54:00](https://soylentnews.org/article.pl?sid=26/06/22/038218&amp;from=rss) - [Leaked Financial Docs Show OpenAI Is Losing Billions Of Dollars A Year](https://soylentnews.org/article.pl?sid=26/06/22/038218&amp;from=rss)
* [2026-06-23, 07:03:00](https://soylentnews.org/article.pl?sid=26/06/22/034203&amp;from=rss) - [Think That Conversation Will be Boring? Science Says Think Again](https://soylentnews.org/article.pl?sid=26/06/22/034203&amp;from=rss)
* [2026-06-23, 02:22:00](https://soylentnews.org/article.pl?sid=26/06/22/029235&amp;from=rss) - [Ozempic Literally Came From a Monster – And It&apos;s Not Alone](https://soylentnews.org/article.pl?sid=26/06/22/029235&amp;from=rss)
