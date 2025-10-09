# [News Summary](https://kherrick.github.io/news-summary/)

## Technological Innovations and Discoveries

* [Intel's Open Source Future in Question as Exec Says He's Done Carrying the Competition](https://news.slashdot.org/story/25/10/09/2016225/intels-open-source-future-in-question-as-exec-says-hes-done-carrying-the-competition?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Intel's shift in strategy may have far-reaching consequences, raising concerns within the open-source community.

* [Show HN: GYST – Digital organizer that replicates the feeling of a physical desk](https://gyst.fr/) - A creative digital tool aiming to mimic physical desk organization for productivity.

* [Judge Dismisses Retail Group's Challenge To New York Surveillance Pricing Law](https://news.slashdot.org/story/25/10/09/185236/judge-dismisses-retail-groups-challenge-to-new-york-surveillance-pricing-law?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Surveillance pricing law in New York remains in place despite retail challenges.

* [Python 3.14 is here. How fast is it?](https://blog.miguelgrinberg.com/post/python-3-14-is-here-how-fast-is-it) - Evaluation of Python 3.14's speed sheds light on the performance improvements.

## Health and Scientific Breakthroughs

* [New nanotherapy clears amyloid-β, reversing symptoms of Alzheimer's in mice](https://www.drugtargetreview.com/news/189235/new-nanotherapy-clears-amyloid-%CE%B2-reversing-alzheimers-in-mice/) - Promising therapy developments in Alzheimer's research highlighted through animal studies.

* [A built-in 'off switch' to stop persistent pain](https://penntoday.upenn.edu/news/select-neurons-brainstem-may-hold-key-treating-chronic-pain) - Research on specific brainstem neurons reveals potential breakthrough in chronic pain treatment.

* [Human Skin Cells Turned Into Fertilisable Eggs for First Time](https://soylentnews.org/article.pl?sid=25/10/06/1325211&from=rss) - Landmark development in reproductive science that could redefine fertility treatments.

## AI and Open Source Controversies

* [McKinsey Wonders How To Sell AI Apps With No Measurable Benefits](https://slashdot.org/story/25/10/09/1132230/mckinsey-wonders-how-to-sell-ai-apps-with-no-measurable-benefits?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Highlights skepticism around the practical utility of many AI-driven applications.

* [Fedora floats AI-assisted contributions policy](https://lwn.net/Articles/1039623/) - Fedora considers integrating AI to assist contributors, sparking policy debate.

* [DC Comics Won't Support Generative AI: 'Not Now, Not Ever'](https://entertainment.slashdot.org/story/25/10/09/157259/dc-comics-wont-support-generative-ai-not-now-not-ever?utm_source=rss1.0mainlinkanon&utm_medium=feed) - DC Comics firmly opposes generative AI for creative works.

## Engineering and Compilers

* [Goiaba: An experimental Go compiler, written in Rust](https://github.com/raphamorim/goiaba) - Innovation intersects programming with this experimental Go compiler using Rust.

* [Four years, Five failures, One compiler - The journey](https://daymare.net/blogs/four-years-five-failures-one-compiler/) - Chronicles of persistence and innovation in compiler development.

## Open Source and Community Contributions

* [My first contribution to Linux](https://vkoskiv.com/first-linux-patch/) - Celebrates a meaningful first step into the world of Linux development.

* [Introducing the React Foundation: The New Home for React & React Native](https://engineering.fb.com/2025/10/07/open-source/introducing-the-react-foundation-the-new-home-for-react-react-native/) - Strategic changes in React's governance and its new organizational home.

## Astronomy and Cosmic Discoveries

* [First Dark Matter Sub-Halo Found in the Milky Way](https://soylentnews.org/article.pl?sid=25/10/05/2326245&from=rss) - A remarkable astronomical finding expands understanding of dark matter distribution.

* [JWST Finds an Exoplanet Around a Pulsar Whose Atmosphere is All Carbon](https://soylentnews.org/article.pl?sid=25/10/05/0119224&from=rss) - Powerful insights from JWST into exoplanet atmospheres highlight the vast variety of celestial objects.

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

* [2025-10-09, 22:00:00](https://tech.slashdot.org/story/25/10/09/2044214/apple-and-google-reluctantly-comply-with-texas-age-verification-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple and Google Reluctantly Comply With Texas Age Verification Law](https://tech.slashdot.org/story/25/10/09/2044214/apple-and-google-reluctantly-comply-with-texas-age-verification-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-09, 21:43:00](https://soylentnews.org/article.pl?sid=25/10/07/2330231&amp;from=rss) - [Here&apos;s the Real Reason Endurance Sank](https://soylentnews.org/article.pl?sid=25/10/07/2330231&amp;from=rss)
* [2025-10-09, 21:22:00](https://news.slashdot.org/story/25/10/09/2016225/intels-open-source-future-in-question-as-exec-says-hes-done-carrying-the-competition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel&apos;s Open Source Future in Question as Exec Says He&apos;s Done Carrying the Competition](https://news.slashdot.org/story/25/10/09/2016225/intels-open-source-future-in-question-as-exec-says-hes-done-carrying-the-competition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-09, 21:18:29](https://news.ycombinator.com/item?id=45533208) - [Show HN: GYST – Digital organizer that replicates the feeling of a physical desk](https://gyst.fr/)
* [2025-10-09, 20:55:00](https://news.ycombinator.com/item?id=45532971) - [Show HN: Open-Source Voice AI Badge Powered by ESP32+WebRTC](https://github.com/VapiAI/vapicon-2025-hardware-workshop)
* [2025-10-09, 20:42:00](https://science.slashdot.org/story/25/10/09/1913200/he-was-expected-to-get-alzheimers-25-years-ago-why-hasnt-he?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [He Was Expected To Get Alzheimer&apos;s 25 Years Ago. Why Hasn&apos;t He?](https://science.slashdot.org/story/25/10/09/1913200/he-was-expected-to-get-alzheimers-25-years-ago-why-hasnt-he?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-09, 20:38:52](https://lobste.rs/s/6kfcqo/magnolia_interactive_shell_navigation) - [magnolia: Interactive shell navigation and history](https://codeberg.org/mtmn/magnolia)
* [2025-10-09, 20:27:39](https://news.ycombinator.com/item?id=45532685) - [A built-in &apos;off switch&apos; to stop persistent pain](https://penntoday.upenn.edu/news/select-neurons-brainstem-may-hold-key-treating-chronic-pain)
* [2025-10-09, 20:27:28](https://news.ycombinator.com/item?id=45532680) - [Finding a VS Code Memory Leak](https://randomascii.wordpress.com/2025/10/09/finding-a-vs-code-memory-leak/)
* [2025-10-09, 20:08:02](https://lobste.rs/s/yzfo82/making_slint_desktop_ready) - [Making Slint Desktop-Ready](https://slint.dev/blog/making-slint-desktop-ready)
* [2025-10-09, 20:01:00](https://tech.slashdot.org/story/25/10/09/1850202/windows-product-activation-creator-reveals-truth-behind-xps-most-notorious-product-key?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Windows Product Activation Creator Reveals Truth Behind XP&apos;s Most Notorious Product Key](https://tech.slashdot.org/story/25/10/09/1850202/windows-product-activation-creator-reveals-truth-behind-xps-most-notorious-product-key?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-09, 20:00:31](https://news.ycombinator.com/item?id=45532352) - [The Burrows-Wheeler Transform](https://sandbox.bio/concepts/bwt)
* [2025-10-09, 19:46:25](https://lobste.rs/s/niramb/code_is_never_neutral_why_all_software_is) - [Code is Never Neutral: Why All Software is Political](https://www.youtube.com/watch?v=Kpfff6TS018)
* [2025-10-09, 19:32:27](https://lobste.rs/s/rwvh6g/examples_are_best_documentation) - [Examples are the best documentation](https://rakhim.exotext.com/examples-are-the-best-documentation)
* [2025-10-09, 19:22:00](https://tech.slashdot.org/story/25/10/09/1811209/internet-archive-ordered-to-block-books-in-belgium-after-talks-with-publishers-fail?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Internet Archive Ordered To Block Books in Belgium After Talks With Publishers Fail](https://tech.slashdot.org/story/25/10/09/1811209/internet-archive-ordered-to-block-books-in-belgium-after-talks-with-publishers-fail?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-09, 19:03:43](https://news.ycombinator.com/item?id=45531721) - [The government ate my name](https://slate.com/life/2025/10/passport-name-change-united-states-mexico-spain-immigration.html)
* [2025-10-09, 18:40:00](https://news.slashdot.org/story/25/10/09/185236/judge-dismisses-retail-groups-challenge-to-new-york-surveillance-pricing-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Judge Dismisses Retail Group&apos;s Challenge To New York Surveillance Pricing Law](https://news.slashdot.org/story/25/10/09/185236/judge-dismisses-retail-groups-challenge-to-new-york-surveillance-pricing-law?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-09, 18:33:17](https://news.ycombinator.com/item?id=45531367) - [Hacker News Live Feed](https://jerbear2008.github.io/hn-live/)
* [2025-10-09, 18:25:49](https://news.ycombinator.com/item?id=45531284) - [2025 MacArthur Fellows](https://www.macfound.org/programs/awards/fellows/)
* [2025-10-09, 18:06:53](https://lobste.rs/s/pds2zb/small_number_samples_can_poison_llms_any) - [A small number of samples can poison LLMs of any size](https://www.anthropic.com/research/small-samples-poison)
* [2025-10-09, 18:01:00](https://slashdot.org/story/25/10/09/1753223/intels-next-generation-panther-lake-laptop-chips-could-be-a-return-to-form?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel&apos;s Next-Generation Panther Lake Laptop Chips Could Be a Return To Form](https://slashdot.org/story/25/10/09/1753223/intels-next-generation-panther-lake-laptop-chips-could-be-a-return-to-form?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-09, 17:48:23](https://news.ycombinator.com/item?id=45530832) - [Rubygems.org AWS Root Access Event – September 2025](https://rubycentral.org/news/rubygems-org-aws-root-access-event-september-2025/)
* [2025-10-09, 17:38:29](https://news.ycombinator.com/item?id=45530744) - [Subway Builder: A realistic subway simulation game](https://www.subwaybuilder.com/)
* [2025-10-09, 17:22:00](https://tech.slashdot.org/story/25/10/09/1525208/isps-created-so-many-fees-that-fcc-will-kill-requirement-to-list-them-all?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ISPs Created So Many Fees That FCC Will Kill Requirement To List Them All](https://tech.slashdot.org/story/25/10/09/1525208/isps-created-so-many-fees-that-fcc-will-kill-requirement-to-list-them-all?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-09, 17:16:28](https://news.ycombinator.com/item?id=45530486) - [LLMs are mortally terrified of exceptions](https://twitter.com/karpathy/status/1976077806443569355)
* [2025-10-09, 17:09:22](https://news.ycombinator.com/item?id=45530388) - [Show HN: I wrote a full text search engine in Go](https://github.com/wizenheimer/blaze)
* [2025-10-09, 17:06:26](https://lobste.rs/s/dhegkj/fedora_floats_ai_assisted_contributions) - [Fedora floats AI-assisted contributions policy](https://lwn.net/Articles/1039623/)
* [2025-10-09, 16:56:52](https://news.ycombinator.com/item?id=45530261) - [ESP32 and Termux](https://blog.gavide.dev/blog/esp32-and-termux)
* [2025-10-09, 16:55:00](https://soylentnews.org/article.pl?sid=25/10/07/2326258&amp;from=rss) - [Forensic Test Recovers Fingerprints From Fired Ammunition Casings Despite Intense Heat](https://soylentnews.org/article.pl?sid=25/10/07/2326258&amp;from=rss)
* [2025-10-09, 16:49:22](https://lobste.rs/s/pydvse/fireman_sam_commodore_64) - [Fireman Sam (COMMODORE 64)](http://retrovania-vgjunk.blogspot.com/2016/11/fireman-sam-commodore-64.html)
* [2025-10-09, 16:41:00](https://entertainment.slashdot.org/story/25/10/09/157259/dc-comics-wont-support-generative-ai-not-now-not-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DC Comics Won&apos;t Support Generative AI: &apos;Not Now, Not Ever&apos;](https://entertainment.slashdot.org/story/25/10/09/157259/dc-comics-wont-support-generative-ai-not-now-not-ever?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-09, 16:15:08](https://news.ycombinator.com/item?id=45529748) - [Goiaba: An experimental Go compiler, written in Rust](https://github.com/raphamorim/goiaba)
* [2025-10-09, 16:06:49](https://news.ycombinator.com/item?id=45529628) - [Launch HN: Extend (YC W23) – Turn your messiest documents into data](https://www.extend.ai/)
* [2025-10-09, 16:04:04](https://news.ycombinator.com/item?id=45529587) - [A small number of samples can poison LLMs of any size](https://www.anthropic.com/research/small-samples-poison)
* [2025-10-09, 16:01:00](https://slashdot.org/story/25/10/09/1132230/mckinsey-wonders-how-to-sell-ai-apps-with-no-measurable-benefits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [McKinsey Wonders How To Sell AI Apps With No Measurable Benefits](https://slashdot.org/story/25/10/09/1132230/mckinsey-wonders-how-to-sell-ai-apps-with-no-measurable-benefits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-09, 16:00:48](https://lobste.rs/s/3hamiv/what_is_algebraic_about_algebraic) - [What is Algebraic about Algebraic Effects?](https://interjectedfuture.com/what-is-algebraic-about-algebraic-effects/)
* [2025-10-09, 15:55:05](https://lobste.rs/s/twddhr/two_kinds_relicensing_2023) - [Two Kinds of \&quot;Relicensing\&quot; (2023)](https://writing.kemitchell.com/2023/09/23/Two-Kinds-Relicensing)
* [2025-10-09, 15:51:20](https://news.ycombinator.com/item?id=45529393) - [Show HN: I&apos;ve built a tiny hand-held keyboard](https://github.com/mafik/keyer)
* [2025-10-09, 15:40:05](https://lobste.rs/s/0j2e2w/write_stuff_concurrent_write) - [The Write Stuff: Concurrent Write Transactions in SQLite](https://oldmoe.blog/2024/07/08/the-write-stuff-concurrent-write-transactions-in-sqlite/)
* [2025-10-09, 15:21:00](https://news.slashdot.org/story/25/10/09/1058217/china-confirms-solar-panel-projects-are-irreversibly-changing-desert-ecosystems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Confirms Solar Panel Projects Are Irreversibly Changing Desert Ecosystems](https://news.slashdot.org/story/25/10/09/1058217/china-confirms-solar-panel-projects-are-irreversibly-changing-desert-ecosystems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-09, 15:05:09](https://lobste.rs/s/mczi9m/four_years_five_failures_one_compiler) - [Four years, Five failures, One compiler - The journey](https://daymare.net/blogs/four-years-five-failures-one-compiler/)
* [2025-10-09, 14:40:00](https://it.slashdot.org/story/25/10/09/1017255/one-man-spam-campaign-ravages-eu-chat-control-bill?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [One-Man Spam Campaign Ravages EU &apos;Chat Control&apos; Bill](https://it.slashdot.org/story/25/10/09/1017255/one-man-spam-campaign-ravages-eu-chat-control-bill?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-09, 14:36:52](https://news.ycombinator.com/item?id=45528308) - [New nanotherapy clears amyloid-β, reversing symptoms of Alzheimer&apos;s in mice](https://www.drugtargetreview.com/news/189235/new-nanotherapy-clears-amyloid-%CE%B2-reversing-alzheimers-in-mice/)
* [2025-10-09, 14:35:18](https://lobste.rs/s/c3dnrm/how_store_ordered_information) - [How to store ordered information in a Relational Database (2015)](https://softwareengineering.stackexchange.com/questions/304593/how-to-store-ordered-information-in-a-relational-database)
* [2025-10-09, 14:21:16](https://lobste.rs/s/83xufu/solving_git_s_pain_points_with_jujutsu) - [Solving Git&apos;s Pain Points with Jujutsu](https://www.youtube.com/watch?v=ulJ_Pw8qqsE)
* [2025-10-09, 14:18:19](https://lobste.rs/s/digojk/intel_s_open_source_strategy_is_changing) - [Intel&apos;s Open-Source Strategy Is Changing At Odds With The Ethos Of Open-Source](https://www.phoronix.com/review/intel-open-source-2025)
* [2025-10-09, 14:00:00](https://news.slashdot.org/story/25/10/09/1012240/uks-central-bank-warns-of-growing-risk-that-ai-bubble-could-burst?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK&apos;s Central Bank Warns of Growing Risk That AI Bubble Could Burst](https://news.slashdot.org/story/25/10/09/1012240/uks-central-bank-warns-of-growing-risk-that-ai-bubble-could-burst?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-09, 13:55:04](https://news.ycombinator.com/item?id=45527758) - [Python&apos;s splitlines does more than just newlines](https://yossarian.net/til/post/python-s-splitlines-does-a-lot-more-than-just-newlines/)
* [2025-10-09, 13:53:00](https://lobste.rs/s/dpm6uh/til_python_s_splitlines_does_lot_more_than) - [TIL: Python&apos;s splitlines does a lot more than just newlines](https://yossarian.net/til/post/python-s-splitlines-does-a-lot-more-than-just-newlines/)
* [2025-10-09, 13:36:01](https://news.ycombinator.com/item?id=45527507) - [Using a laptop as an HDMI monitor for an SBC](https://danielmangum.com/posts/laptop-hdmi-monitor-sbc/)
* [2025-10-09, 13:27:14](https://news.ycombinator.com/item?id=45527402) - [Figure 03, our 3rd generation humanoid robot](https://www.figure.ai/news/introducing-figure-03)
* [2025-10-09, 13:00:00](https://yro.slashdot.org/story/25/10/08/2259252/discord-says-70000-users-may-have-had-their-government-ids-leaked-in-breach?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Discord Says 70,000 Users May Have Had Their Government IDs Leaked In Breach](https://yro.slashdot.org/story/25/10/08/2259252/discord-says-70000-users-may-have-had-their-government-ids-leaked-in-breach?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-09, 12:45:28](https://news.ycombinator.com/item?id=45526890) - [Show HN: I built a web framework in C](https://github.com/ashtonjamesd/lavandula)
* [2025-10-09, 12:36:05](https://news.ycombinator.com/item?id=45526754) - [The fight between doctors and insurance companies over &apos;downcoding&apos;](https://www.nbcnews.com/health/health-care/guilty-proven-innocent-fight-doctors-insurance-companies-downcoding-rcna230714)
* [2025-10-09, 12:13:00](https://soylentnews.org/article.pl?sid=25/10/06/1337206&amp;from=rss) - [UK Submarine Cable Security is All at Sea](https://soylentnews.org/article.pl?sid=25/10/06/1337206&amp;from=rss)
* [2025-10-09, 10:29:38](https://lobste.rs/s/fysgz3/introducing_react_foundation_new_home) - [Introducing the React Foundation: The New Home for React &amp; React Native](https://engineering.fb.com/2025/10/07/open-source/introducing-the-react-foundation-the-new-home-for-react-react-native/)
* [2025-10-09, 10:00:00](https://news.slashdot.org/story/25/10/08/2253241/internet-archive-ordered-to-block-books-in-belgium?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Internet Archive Ordered to Block Books in Belgium](https://news.slashdot.org/story/25/10/08/2253241/internet-archive-ordered-to-block-books-in-belgium?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-09, 09:55:56](https://lobste.rs/s/n6jiog/how_i_learned_code_using_japanese_method) - [How I Learned to Code (using Japanese Method)](https://blog.stackademic.com/how-i-learned-to-code-using-japanese-method-a01a74c35224)
* [2025-10-09, 09:52:27](https://lobste.rs/s/ivx7ex/interval_calculator) - [Interval Calculator](https://victorpoughon.github.io/interval-calculator/)
* [2025-10-09, 07:40:42](https://news.ycombinator.com/item?id=45524702) - [Python 3.14 is here. How fast is it?](https://blog.miguelgrinberg.com/post/python-3-14-is-here-how-fast-is-it)
* [2025-10-09, 07:25:00](https://soylentnews.org/article.pl?sid=25/10/06/1331238&amp;from=rss) - [The QNX Operating System: A Deep Dive Into the History of QNX!](https://soylentnews.org/article.pl?sid=25/10/06/1331238&amp;from=rss)
* [2025-10-09, 04:33:48](https://news.ycombinator.com/item?id=45523537) - [Two things LLM coding agents are still bad at](https://kix.dev/two-things-llm-coding-agents-are-still-bad-at/)
* [2025-10-09, 02:41:00](https://soylentnews.org/article.pl?sid=25/10/06/1325211&amp;from=rss) - [Human Skin Cells Turned Into Fertilisable Eggs for First Time](https://soylentnews.org/article.pl?sid=25/10/06/1325211&amp;from=rss)
* [2025-10-08, 22:15:53](https://lobste.rs/s/obvyuo/oral_history_ken_thompson) - [Oral History of Ken Thompson](https://www.youtube.com/watch?v=OmVHkL0IWk4)
* [2025-10-08, 21:58:00](https://soylentnews.org/article.pl?sid=25/10/06/1313245&amp;from=rss) - [Google Clarifies That Owners Will Still Be Able To Sideload Unverified Apps](https://soylentnews.org/article.pl?sid=25/10/06/1313245&amp;from=rss)
* [2025-10-08, 19:36:03](https://lobste.rs/s/ilcane/huml_human_oriented_markup_language) - [HUML :: Human-oriented Markup Language](https://huml.io)
* [2025-10-08, 18:46:53](https://lobste.rs/s/xg9xxx/julia_v1_12_release_highlights) - [Julia v1.12 release highlights](https://julialang.org/blog/2025/10/julia-1.12-highlights/)
* [2025-10-08, 17:14:00](https://soylentnews.org/article.pl?sid=25/10/06/1314255&amp;from=rss) - [Ultra-Thin Sodium Films Offer Low-Cost Alternative to Gold and Silver in Optical Technologies](https://soylentnews.org/article.pl?sid=25/10/06/1314255&amp;from=rss)
* [2025-10-08, 17:10:37](https://lobste.rs/s/jljxt2/citizen_protest_halts_chat_control) - [Citizen Protest Halts Chat Control](https://www.patrick-breyer.de/en/citizen-protest-halts-chat-control-breyer-celebrates-major-victory-for-digital-privacy/)
* [2025-10-08, 13:52:18](https://lobste.rs/s/wl2tp2/how_we_found_bug_go_s_arm64_compiler) - [How we found a bug in Go&apos;s arm64 compiler](https://blog.cloudflare.com/how-we-found-a-bug-in-gos-arm64-compiler/)
* [2025-10-08, 12:31:00](https://soylentnews.org/article.pl?sid=25/10/06/1158252&amp;from=rss) - [Apple Removes ICE Tracking Apps After Pressure by Trump Administration](https://soylentnews.org/article.pl?sid=25/10/06/1158252&amp;from=rss)
* [2025-10-08, 12:25:24](https://lobste.rs/s/ykwhqs/programmer_identity_crisis) - [The Programmer Identity Crisis](https://hojberg.xyz/the-programmer-identity-crisis/)
* [2025-10-08, 10:01:42](https://news.ycombinator.com/item?id=45514245) - [A 16.67 Millisecond Frame](https://koolcodez.com/blog/inside-the-frame/)
* [2025-10-08, 07:44:00](https://soylentnews.org/article.pl?sid=25/10/05/2326245&amp;from=rss) - [First Dark Matter Sub-Halo Found in the Milky Way](https://soylentnews.org/article.pl?sid=25/10/05/2326245&amp;from=rss)
* [2025-10-08, 03:13:35](https://lobste.rs/s/emvkea/why_we_didn_t_rewrite_our_feed_handler_rust) - [Why we didn&apos;t rewrite our feed handler in Rust](https://databento.com/blog/why-we-didnt-rewrite-our-feed-handler-in-rust)
* [2025-10-08, 03:03:00](https://soylentnews.org/article.pl?sid=25/10/06/1151211&amp;from=rss) - [Instagram Says It is Not Listening to Users’ Microphones to Serve Ads](https://soylentnews.org/article.pl?sid=25/10/06/1151211&amp;from=rss)
* [2025-10-07, 22:17:00](https://soylentnews.org/article.pl?sid=25/10/05/2328230&amp;from=rss) - [New Test to Track How Medicines &apos;Hitchhike&apos; on Cholesterol](https://soylentnews.org/article.pl?sid=25/10/05/2328230&amp;from=rss)
* [2025-10-07, 17:32:00](https://soylentnews.org/article.pl?sid=25/10/06/1143245&amp;from=rss) - [US-Made Leonidas Microwave Weapon Takes Down 49 Drones With a Single Blast](https://soylentnews.org/article.pl?sid=25/10/06/1143245&amp;from=rss)
* [2025-10-07, 12:49:00](https://soylentnews.org/article.pl?sid=25/10/05/2320242&amp;from=rss) - [Twisted Graphene Reveals Double-Dome Superconductivity Controlled by Electric Field](https://soylentnews.org/article.pl?sid=25/10/05/2320242&amp;from=rss)
* [2025-10-07, 07:58:00](https://soylentnews.org/article.pl?sid=25/10/05/201242&amp;from=rss) - [Harvard Researchers Develop First Ever Continuously Operating Quantum Computer](https://soylentnews.org/article.pl?sid=25/10/05/201242&amp;from=rss)
* [2025-10-07, 03:16:00](https://soylentnews.org/article.pl?sid=25/10/05/1955231&amp;from=rss) - [Venture Capital Valuations of AI Startups Surge and Raise Fears of an AI Bubble Forming](https://soylentnews.org/article.pl?sid=25/10/05/1955231&amp;from=rss)
* [2025-10-06, 22:31:00](https://soylentnews.org/article.pl?sid=25/10/05/1935200&amp;from=rss) - [Earth&apos;s Crust is Tearing Apart Off the Pacific Northwest—and That&apos;s Not Necessarily Bad News](https://soylentnews.org/article.pl?sid=25/10/05/1935200&amp;from=rss)
* [2025-10-06, 17:44:00](https://soylentnews.org/article.pl?sid=25/10/05/1356208&amp;from=rss) - [Flock’s Gunshot Detection Microphones Will Start Listening for Human Voices](https://soylentnews.org/article.pl?sid=25/10/05/1356208&amp;from=rss)
* [2025-10-06, 12:59:00](https://soylentnews.org/article.pl?sid=25/10/05/0119224&amp;from=rss) - [JWST Finds an Exoplanet Around a Pulsar Whose Atmosphere is All Carbon](https://soylentnews.org/article.pl?sid=25/10/05/0119224&amp;from=rss)
* [2025-10-06, 12:31:32](https://news.ycombinator.com/item?id=45490652) - [My first contribution to Linux](https://vkoskiv.com/first-linux-patch/)
* [2025-10-06, 11:57:33](https://news.ycombinator.com/item?id=45490403) - [A case for learning GPU programming with a compute-first mindset](https://themaister.net/blog/2025/10/05/a-case-for-learning-gpu-programming-with-a-compute-first-mindset/)
* [2025-10-06, 10:40:28](https://news.ycombinator.com/item?id=45489884) - [Embracing the parallel coding agent lifestyle](https://simonwillison.net/2025/Oct/5/parallel-coding-agents/)
* [2025-10-06, 09:06:12](https://news.ycombinator.com/item?id=45489311) - [Neutts-air – open-source, on device TTS](https://github.com/neuphonic/neutts-air)
* [2025-10-06, 08:13:00](https://soylentnews.org/article.pl?sid=25/10/05/0111221&amp;from=rss) - [How Can We Keep Livestock Safe as Wolves Return?](https://soylentnews.org/article.pl?sid=25/10/05/0111221&amp;from=rss)
* [2025-10-06, 03:30:00](https://soylentnews.org/article.pl?sid=25/10/05/012221&amp;from=rss) - [Setting Bounds on SETI](https://soylentnews.org/article.pl?sid=25/10/05/012221&amp;from=rss)
* [2025-10-05, 22:43:00](https://soylentnews.org/article.pl?sid=25/10/04/1856221&amp;from=rss) - [Historic First: Scientists Turn Light Into Supersolid](https://soylentnews.org/article.pl?sid=25/10/04/1856221&amp;from=rss)
* [2025-10-05, 18:02:00](https://soylentnews.org/politics/article.pl?sid=25/10/04/195256&amp;from=rss) - [Taiwan Pressured to Move 50% of Chip Production to US or Lose Protection](https://soylentnews.org/politics/article.pl?sid=25/10/04/195256&amp;from=rss)
* [2025-10-05, 16:03:00](https://soylentnews.org/meta/article.pl?sid=25/10/05/162227&amp;from=rss) - [The Site is Experiencing 50x Problems](https://soylentnews.org/meta/article.pl?sid=25/10/05/162227&amp;from=rss)
* [2025-10-05, 13:16:00](https://soylentnews.org/article.pl?sid=25/10/04/1858242&amp;from=rss) - [First Wolf-Dog Hybrid Confirmed in Greece](https://soylentnews.org/article.pl?sid=25/10/04/1858242&amp;from=rss)
* [2025-10-05, 08:26:00](https://soylentnews.org/article.pl?sid=25/10/04/0347255&amp;from=rss) - [Meta Advertisment Based on AI Chats](https://soylentnews.org/article.pl?sid=25/10/04/0347255&amp;from=rss)
* [2025-10-05, 03:45:00](https://soylentnews.org/article.pl?sid=25/10/04/0342221&amp;from=rss) - [Hosting a WebSite on a Disposable Vape](https://soylentnews.org/article.pl?sid=25/10/04/0342221&amp;from=rss)
