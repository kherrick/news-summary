# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [A Look at the NYC Subway's Archaic Signal System](https://tech.slashdot.org/story/25/05/05/0712248/a-look-at-the-nyc-subways-archaic-signal-system?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Explore how outdated signal systems still guide NYC's extensive subway network.

* [Show HN: VectorVFS, your filesystem as a vector database](https://vectorvfs.readthedocs.io/en/latest/) - Introducing an innovative approach to treating filesystems as vector databases.

* [AWS Built a Security Tool. It Introduced a Security Risk](https://www.token.security/blog/aws-built-a-security-tool-it-introduced-a-security-risk) - Analyzing a tool from AWS that inadvertently created vulnerabilities.

* [China Successfully Reloads a Running Thorium Reactor](https://soylentnews.org/article.pl?sid=25/05/03/1421205&from=rss) - A glimpse into China's groundbreaking nuclear energy advancements.

* [Helmdar: 3D Scanning Brooklyn on Rollerblades](https://owentrueblood.com/blog/2025/05/04/helmdar/) - A unique project documenting Brooklyn's streets using rollerblades and 3D scanning.

## Game Development and Entertainment

* [Budget Titles Dominate 2025's Top-Rated Games as AAA Prices Climb To $80](https://games.slashdot.org/story/25/05/05/073207/budget-titles-dominate-2025s-top-rated-games-as-aaa-prices-climb-to-80?utm_source=rss1.0mainlinkanon&utm_medium=feed) - How budget-friendly games are outperforming high-priced AAA titles.

* ['Harassed by Assassin's Creed Gamers, A Professor Fought Back With Kindness'](https://games.slashdot.org/story/25/05/04/2134209/harassed-by-assasins-creed-gamers-a-professor-fought-back-with-kindness?utm_source=rss1.0mainlinkanon&utm_medium=feed) - An inspiring tale of how positivity defeated online harassment.

* ['Star Wars Day' Celebrations Hit Fortnite, Disney+, X.com - and Retailers Everywhere](https://entertainment.slashdot.org/story/25/05/05/0150219/star-wars-day-celebrations-hit-fortnite-disney-xcom---and-retailers-everywhere?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Star Wars-themed events take over popular platforms.

* [History of "Adventure" for the Atari 2600](https://www.atariarchive.org/blog/adventure-march-1980/) - A retrospective on the pioneer of action-adventure gaming.

## AI and Machine Learning

* [Has Meta Figured Out How to Monetize AI - By Using It For Targeted Advertising?](https://tech.slashdot.org/story/25/05/05/0558205/has-meta-figured-out-how-to-monetize-ai---by-using-it-for-targeted-advertising?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Meta's controversial plans for AI in advertising.

* [Judge said Meta illegally used books to build its AI](https://www.wired.com/story/meta-lawsuit-copyright-hearing-artificial-intelligence/) - A legal battle addressing copyright in AI training.

* [AI Meets WinDBG](https://svnscha.de/posts/ai-meets-windbg/) - A look into integrating AI to enhance debugging processes.

* [After Reddit Thread on 'ChatGPT-Induced Psychosis', OpenAI Rolls Back GPT4o Update](https://slashdot.org/story/25/05/05/0234215/after-reddit-thread-on-chatgpt-induced-psychosis-openai-rolls-back-gpt4o-update?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The unintended consequences of advanced AI development spark a rollback.

## Engineering and Hardware

* [A Tektronix TDS 684B Oscilloscope Uses CCD Analog Memory](https://tomverbeure.github.io/2025/05/04/TDS684B-CCD-Memory.html) - An examination of an innovative method of using CCD for data memory.

* [Gandi March 9, 2025 incident postmortem](https://news.gandi.net/en/2025/03/gandi-incident-on-march-9-2025/) - A technical breakdown of a significant cloud services outage.

* [The Absurdly Complicated Circuitry for the 386 Processor's Registers](https://soylentnews.org/article.pl?sid=25/05/03/147205&from=rss) - Shedding light on the intricate architecture behind legacy processors.

* [Modern-latex: A short guide to LaTeX that avoids legacy cruft](https://github.com/mrkline/modern-latex) - Simplifying LaTeX for easier documentation.

## Society and Science

* [Majority in UK Now 'Self-Identify' as Neurodivergent](https://news.slashdot.org/story/25/05/05/0649225/majority-in-uk-now-self-identify-as-neurodivergent?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A dive into the societal shift towards recognizing neurodivergence.

* [NASA's Perseverance Rover Just Had A Close Call On Mars ](https://soylentnews.org/article.pl?sid=25/05/03/0334239&from=rss) - A critical moment for NASA's Mars rover mission.

* [On Not Carrying a Camera – Cultivating memories instead of snapshots](https://hedgehogreview.com/issues/after-neoliberalism/articles/on-not-carrying-a-camera) - A philosophical observation on experiencing life versus documenting it.

* [Why Archers Didn't Volley Fire](https://acoup.blog/2025/05/02/collections-why-archers-didnt-volley-fire/) - A historical analysis of military tactics.

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

* [2025-05-05, 15:21:00](https://tech.slashdot.org/story/25/05/05/0712248/a-look-at-the-nyc-subways-archaic-signal-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Look at the NYC Subway&apos;s Archaic Signal System](https://tech.slashdot.org/story/25/05/05/0712248/a-look-at-the-nyc-subways-archaic-signal-system?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-05, 15:17:33](https://news.ycombinator.com/item?id=43896011) - [Show HN: VectorVFS, your filesystem as a vector database](https://vectorvfs.readthedocs.io/en/latest/)
* [2025-05-05, 15:01:30](https://news.ycombinator.com/item?id=43895852) - [Geometrically understanding calculus of inverse functions (2023)](https://tobylam.xyz/2023/11/27/inverse-functions-legendre-part-1)
* [2025-05-05, 14:40:00](https://games.slashdot.org/story/25/05/05/073207/budget-titles-dominate-2025s-top-rated-games-as-aaa-prices-climb-to-80?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Budget Titles Dominate 2025&apos;s Top-Rated Games as AAA Prices Climb To $80](https://games.slashdot.org/story/25/05/05/073207/budget-titles-dominate-2025s-top-rated-games-as-aaa-prices-climb-to-80?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-05, 14:37:51](https://news.ycombinator.com/item?id=43895622) - [A Tektronix TDS 684B Oscilloscope Uses CCD Analog Memory](https://tomverbeure.github.io/2025/05/04/TDS684B-CCD-Memory.html)
* [2025-05-05, 14:20:04](https://news.ycombinator.com/item?id=43895456) - [Show HN: Bracket – selfhosted tournament system](https://github.com/evroon/bracket)
* [2025-05-05, 14:01:34](https://news.ycombinator.com/item?id=43895237) - [History of \&quot;Adventure\&quot; for the Atari 2600](https://www.atariarchive.org/blog/adventure-march-1980/)
* [2025-05-05, 14:00:00](https://news.slashdot.org/story/25/05/05/0649225/majority-in-uk-now-self-identify-as-neurodivergent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Majority in UK Now &apos;Self-Identify&apos; as Neurodivergent](https://news.slashdot.org/story/25/05/05/0649225/majority-in-uk-now-self-identify-as-neurodivergent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-05, 13:12:00](https://news.ycombinator.com/item?id=43894753) - [Jiga (YC W21) Is Hiring Engineers](https://www.workatastartup.com/companies/jiga)
* [2025-05-05, 12:47:23](https://lobste.rs/s/ozgnfx/odin_pragmatic_c_alternative_with_go) - [Odin, A Pragmatic C Alternative with a Go Flavour](https://bitshifter-1.github.io/2025/05/04/odin.html)
* [2025-05-05, 12:43:00](https://soylentnews.org/article.pl?sid=25/05/03/1427232&amp;from=rss) - [You Have Two Months Left to Update Your Old LG Phone](https://soylentnews.org/article.pl?sid=25/05/03/1427232&amp;from=rss)
* [2025-05-05, 12:34:11](https://lobste.rs/s/bdvhas/augmentation_replacement) - [Augmentation / Replacement](https://olano.dev/blog/augmentation-replacement)
* [2025-05-05, 12:22:10](https://news.ycombinator.com/item?id=43894305) - [The Death of Daydreaming: What we lose when phones take away boredom](https://www.afterbabel.com/p/on-the-death-of-daydreaming)
* [2025-05-05, 11:37:04](https://news.ycombinator.com/item?id=43893906) - [AWS Built a Security Tool. It Introduced a Security Risk](https://www.token.security/blog/aws-built-a-security-tool-it-introduced-a-security-risk)
* [2025-05-05, 11:34:00](https://tech.slashdot.org/story/25/05/05/0558205/has-meta-figured-out-how-to-monetize-ai---by-using-it-for-targeted-advertising?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Has Meta Figured Out How to Monetize AI - By Using It For Targeted Advertising?](https://tech.slashdot.org/story/25/05/05/0558205/has-meta-figured-out-how-to-monetize-ai---by-using-it-for-targeted-advertising?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-05, 11:16:16](https://news.ycombinator.com/item?id=43893762) - [Judge said Meta illegally used books to build its AI](https://www.wired.com/story/meta-lawsuit-copyright-hearing-artificial-intelligence/)
* [2025-05-05, 11:10:58](https://news.ycombinator.com/item?id=43893740) - [Gandi March 9, 2025 incident postmortem](https://news.gandi.net/en/2025/03/gandi-incident-on-march-9-2025/)
* [2025-05-05, 10:48:21](https://news.ycombinator.com/item?id=43893601) - [The vocal effects of Daft Punk](https://bjango.com/articles/daftpunkvocaleffects/)
* [2025-05-05, 10:10:36](https://lobste.rs/s/okbblr/stop_fighting_your_ros_2_environment) - [Stop Fighting Your ROS 2 Environment: Build Faster, Reproducibly, Anywhere](https://index.0x77.dev/blog/ros-devenv)
* [2025-05-05, 09:58:31](https://lobste.rs/s/cpsmuq/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/cpsmuq/what_are_you_doing_this_week)
* [2025-05-05, 09:25:45](https://news.ycombinator.com/item?id=43893225) - [The Design of Compact Elastic Binary Trees (Cebtree)](http://wtarreau.blogspot.com/2025/03/on-design-of-compact-elastic-binary.html)
* [2025-05-05, 08:08:37](https://news.ycombinator.com/item?id=43892856) - [Show HN: CodeCafé – A real-time collaborative code editor in the browser](https://github.com/mrktsm/codecafe)
* [2025-05-05, 08:04:00](https://soylentnews.org/article.pl?sid=25/05/03/1421205&amp;from=rss) - [China Successfully Reloads a Running Thorium Reactor](https://soylentnews.org/article.pl?sid=25/05/03/1421205&amp;from=rss)
* [2025-05-05, 07:34:00](https://tech.slashdot.org/story/25/05/04/2341203/class-action-accuses-toyota-of-illegally-sharing-drivers-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Class Action Accuses Toyota of Illegally Sharing Drivers&apos; Data](https://tech.slashdot.org/story/25/05/04/2341203/class-action-accuses-toyota-of-illegally-sharing-drivers-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-05, 07:24:06](https://lobste.rs/s/yggamf/fuzzing_with_grammars) - [Fuzzing with Grammars](https://www.fuzzingbook.org/html/Grammars.html)
* [2025-05-05, 06:38:04](https://lobste.rs/s/akhul3/modern_latex_short_guide_latex_avoids) - [modern-latex: A short guide to LaTeX that avoids legacy cruft](https://github.com/mrkline/modern-latex)
* [2025-05-05, 05:11:51](https://news.ycombinator.com/item?id=43892096) - [AI Meets WinDBG](https://svnscha.de/posts/ai-meets-windbg/)
* [2025-05-05, 03:43:00](https://slashdot.org/story/25/05/05/0234215/after-reddit-thread-on-chatgpt-induced-psychosis-openai-rolls-back-gpt4o-update?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [After Reddit Thread on &apos;ChatGPT-Induced Psychosis&apos;, OpenAI Rolls Back GPT4o Update](https://slashdot.org/story/25/05/05/0234215/after-reddit-thread-on-chatgpt-induced-psychosis-openai-rolls-back-gpt4o-update?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-05, 03:16:00](https://soylentnews.org/article.pl?sid=25/05/03/147205&amp;from=rss) - [The Absurdly Complicated Circuitry for the 386 Processor&apos;s Registers](https://soylentnews.org/article.pl?sid=25/05/03/147205&amp;from=rss)
* [2025-05-05, 02:41:08](https://lobste.rs/s/vv8azf/ibeacons) - [iBeacons](https://computer.rip/2025-05-04-iBeacons.html)
* [2025-05-05, 02:17:12](https://news.ycombinator.com/item?id=43891398) - [Driving Compilers (2023)](https://fabiensanglard.net/dc/index.php)
* [2025-05-05, 01:53:00](https://entertainment.slashdot.org/story/25/05/05/0150219/star-wars-day-celebrations-hit-fortnite-disney-xcom---and-retailers-everywhere?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Star Wars Day&apos; Celebrations Hit Fortnite, Disney+, X.com - and Retailers Everywhere](https://entertainment.slashdot.org/story/25/05/05/0150219/star-wars-day-celebrations-hit-fortnite-disney-xcom---and-retailers-everywhere?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-05, 01:44:09](https://news.ycombinator.com/item?id=43891245) - [Show HN: My AI Native Resume](https://ai.jakegaylor.com/)
* [2025-05-05, 01:19:50](https://news.ycombinator.com/item?id=43891128) - [Unparalleled Misalignments](https://rickiheicklen.com/unparalleled-misalignments.html)
* [2025-05-04, 23:53:00](https://news.slashdot.org/story/25/05/04/2350224/the-un-ditches-google-for-form-submissions-opts-for-open-source-cryptpad-instead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The UN Ditches Google for Form Submissions, Opts for Open Source &apos;CryptPad&apos; Instead](https://news.slashdot.org/story/25/05/04/2350224/the-un-ditches-google-for-form-submissions-opts-for-open-source-cryptpad-instead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-04, 23:35:30](https://news.ycombinator.com/item?id=43890538) - [Matrix-vector multiplication implemented in off-the-shelf DRAM for Low-Bit LLMs](https://arxiv.org/abs/2503.23817)
* [2025-05-04, 23:32:21](https://news.ycombinator.com/item?id=43890525) - [On Not Carrying a Camera – Cultivating memories instead of snapshots](https://hedgehogreview.com/issues/after-neoliberalism/articles/on-not-carrying-a-camera)
* [2025-05-04, 23:11:05](https://news.ycombinator.com/item?id=43890412) - [V.S. Naipaul: The Grief and the Glory](https://granta.com/vs-naipaul-the-grief-and-the-glory/)
* [2025-05-04, 23:01:45](https://lobste.rs/s/q1lmxq/tech_companies_apparently_do_not) - [Tech Companies Apparently Do Not Understand Why We Dislike AI](https://soatok.blog/2025/05/04/tech-companies-apparently-do-not-understand-why-we-dislike-ai/)
* [2025-05-04, 22:32:00](https://soylentnews.org/article.pl?sid=25/05/03/145213&amp;from=rss) - [Why Do So Many AI Company Logos Look Like Buttholes?](https://soylentnews.org/article.pl?sid=25/05/03/145213&amp;from=rss)
* [2025-05-04, 21:47:17](https://lobste.rs/s/jqw7pn/helmdar_3d_scanning_brooklyn_on) - [Helmdar: 3D Scanning Brooklyn on Rollerblades](https://owentrueblood.com/blog/2025/05/04/helmdar/)
* [2025-05-04, 21:41:00](https://games.slashdot.org/story/25/05/04/2134209/harassed-by-assasins-creed-gamers-a-professor-fought-back-with-kindness?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Harassed by Assasin&apos;s Creed Gamers, A Professor Fought Back With Kindness&apos;](https://games.slashdot.org/story/25/05/04/2134209/harassed-by-assasins-creed-gamers-a-professor-fought-back-with-kindness?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-04, 21:08:06](https://lobste.rs/s/embsi9/load_store_conflicts) - [Load-store conflicts](https://zeux.io/2025/05/03/load-store-conflicts/)
* [2025-05-04, 20:41:00](https://hardware.slashdot.org/story/25/05/04/2040204/disneyland-imagineers-defend-new-show-recreating-walt-disney-as-a-robot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Disneyland Imagineers Defend New Show  Recreating Walt Disney as a Robot](https://hardware.slashdot.org/story/25/05/04/2040204/disneyland-imagineers-defend-new-show-recreating-walt-disney-as-a-robot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-04, 20:34:40](https://lobste.rs/s/8dkeup/andreas_kling_s_keynote_presentation_on) - [Andreas Kling&apos;s Keynote Presentation on the Ladybird Browser](https://www.youtube.com/watch?v=9YM7pDMLvr4)
* [2025-05-04, 19:53:59](https://lobste.rs/s/iu01xj/you_can_t_prevent_your_last_outage_no) - [You can’t prevent your last outage, no matter how hard you try](https://surfingcomplexity.blog/2025/05/04/you-cant-prevent-your-last-outage-no-matter-how-hard-you-try/)
* [2025-05-04, 19:20:00](https://tech.slashdot.org/story/25/05/04/1911207/kde-plasma-lts-releases-are-dead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;KDE Plasma LTS Releases Are Dead&apos;](https://tech.slashdot.org/story/25/05/04/1911207/kde-plasma-lts-releases-are-dead?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-04, 19:17:28](https://news.ycombinator.com/item?id=43888803) - [I&apos;d rather read the prompt](https://claytonwramsey.com/blog/prompt/)
* [2025-05-04, 19:17:03](https://lobste.rs/s/yklcli/git_with_me_peer_peer_encrypted_ephemeral) - [Git With Me: Peer-to-peer, encrypted, ephemeral Git collaboration](https://sr.ht/~meejah/git-withme/)
* [2025-05-04, 18:20:24](https://lobste.rs/s/gkfqsa/my_first_experience_using_swift_swiftui) - [My first experience using Swift, SwiftUI, and XCode (2023)](https://austinhenley.com/blog/firstswiftproject.html)
* [2025-05-04, 18:20:00](https://developers.slashdot.org/story/25/05/04/1815242/tech-leaders-launch-campaign-to-make-cs-and-ai-a-graduation-requirement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tech Leaders Launch Campaign To Make CS and AI a Graduation Requirement](https://developers.slashdot.org/story/25/05/04/1815242/tech-leaders-launch-campaign-to-make-cs-and-ai-a-graduation-requirement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-04, 17:44:00](https://soylentnews.org/article.pl?sid=25/05/03/1359244&amp;from=rss) - [Largest Imaging Spectro-Polarimeter Achieves First Light](https://soylentnews.org/article.pl?sid=25/05/03/1359244&amp;from=rss)
* [2025-05-04, 17:38:13](https://news.ycombinator.com/item?id=43888117) - [Design for 3D-Printing](https://blog.rahix.de/design-for-3d-printing/)
* [2025-05-04, 17:22:50](https://lobste.rs/s/tjbv1p/beauty_having_pi_hole) - [The Beauty Of Having A Pi-hole](https://den.dev/blog/pihole/)
* [2025-05-04, 17:15:19](https://lobste.rs/s/spxkvs/typed_lisp_primer) - [Typed Lisp, A Primer](https://alhassy.com/TypedLisp.html)
* [2025-05-04, 16:37:00](https://soylentnews.org/meta/article.pl?sid=25/05/02/0531214&amp;from=rss) - [janrinok - Resignation](https://soylentnews.org/meta/article.pl?sid=25/05/02/0531214&amp;from=rss)
* [2025-05-04, 16:34:00](https://news.slashdot.org/story/25/05/03/0620253/fsf-announces-free-software-hackathon-honoring-its-40th-anniversary?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FSF Announces Free Software Hackathon Honoring Its 40th Anniversary](https://news.slashdot.org/story/25/05/03/0620253/fsf-announces-free-software-hackathon-honoring-its-40th-anniversary?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-04, 15:59:00](https://lobste.rs/s/km7sp9/feather_web_framework_skips_rust_s_async) - [Feather: A web framework that skips Rust’s async boilerplate and just works](https://github.com/BersisSe/feather)
* [2025-05-04, 15:34:00](https://science.slashdot.org/story/25/05/04/0934243/we-may-be-in-a-post-herd-immunity-world-says-immunology-expert?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [We May Be In a &apos;Post-Herd Immunity World&apos;, says Immunology Expert](https://science.slashdot.org/story/25/05/04/0934243/we-may-be-in-a-post-herd-immunity-world-says-immunology-expert?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-04, 15:33:41](https://lobste.rs/s/m65t5p/site_for_making_bots_for_fediverse) - [a site for making bots for the fediverse](https://fedibot.club)
* [2025-05-04, 15:20:25](https://lobste.rs/s/euv4fr/functional_html) - [Functional HTML](https://overreacted.io/functional-html/)
* [2025-05-04, 14:50:10](https://lobste.rs/s/uuvlrv/filtering_github_actions_by_changed) - [Filtering GitHub actions by changed files](https://nedbatchelder.com/blog/202505/filtering_github_actions_by_changed_files.html)
* [2025-05-04, 14:34:00](https://linux.slashdot.org/story/25/05/04/0455245/security-researchers-create-proof-of-concept-program-that-evades-linux-syscall-watching-antivirus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Security Researchers Create Proof-of-Concept Program that Evades Linux Syscall-Watching Antivirus](https://linux.slashdot.org/story/25/05/04/0455245/security-researchers-create-proof-of-concept-program-that-evades-linux-syscall-watching-antivirus?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-05-04, 13:00:00](https://soylentnews.org/article.pl?sid=25/05/03/0340234&amp;from=rss) - [Microsoft: Windows Server Hotpatching to Require Subscription](https://soylentnews.org/article.pl?sid=25/05/03/0340234&amp;from=rss)
* [2025-05-04, 10:58:00](https://lobste.rs/s/oyyrx0/new_go_garbage_collector) - [New Go garbage collector](https://bsky.app/profile/michael.express/post/3lo7irdr6ic24)
* [2025-05-04, 09:47:12](https://lobste.rs/s/g1l4xi/show_me_pull_requests) - [Show me the Pull Requests](https://www.linkedin.com/posts/kittylyst_ai-llms-activity-7321451673275514880-npfA/)
* [2025-05-04, 08:12:00](https://soylentnews.org/article.pl?sid=25/05/03/0334239&amp;from=rss) - [NASA&apos;s Perseverance Rover Just Had A Close Call On Mars ](https://soylentnews.org/article.pl?sid=25/05/03/0334239&amp;from=rss)
* [2025-05-04, 06:13:43](https://lobste.rs/s/gk9qon/single_day_firebase_bill_for_100_000) - [Single day Firebase bill for $100,000](https://serverlesshorrors.com/all/firebase-100k/)
* [2025-05-04, 04:29:37](https://lobste.rs/s/td6ttp/dying_for_beauty) - [Dying for Beauty](https://alan.norbauer.com/articles/dying-for-beauty/)
* [2025-05-04, 03:33:00](https://soylentnews.org/article.pl?sid=25/05/03/0224236&amp;from=rss) - [TSMC Breaks Ground On Third Plant In Arizona](https://soylentnews.org/article.pl?sid=25/05/03/0224236&amp;from=rss)
* [2025-05-04, 01:57:17](https://lobste.rs/s/kurgp3/what_went_wrong_with_wireless_usb) - [What went wrong with wireless USB](http://oldvcr.blogspot.com/2025/05/what-went-wrong-with-wireless-usb.html)
* [2025-05-03, 22:49:00](https://soylentnews.org/article.pl?sid=25/05/03/0218240&amp;from=rss) - [Another Periodic Suggestion to Try, Just Try, Switching to Kagi for Search](https://soylentnews.org/article.pl?sid=25/05/03/0218240&amp;from=rss)
* [2025-05-03, 22:04:14](https://news.ycombinator.com/item?id=43882740) - [Digitization Complete for World-Renowned Franco Novacco Map Collection](https://www.newberry.org/news/digitization-complete-for-world-renowned-franco-novacco-map-collection)
* [2025-05-03, 18:03:00](https://soylentnews.org/article.pl?sid=25/05/03/024229&amp;from=rss) - [The 35th Anniversary of the Hubble Space Telescope](https://soylentnews.org/article.pl?sid=25/05/03/024229&amp;from=rss)
* [2025-05-03, 16:41:07](https://news.ycombinator.com/item?id=43880248) - [Ghost in the machine? Legend of the &apos;haunted&apos; N64 video game cartridge](https://www.bbc.com/future/article/20250501-the-haunted-video-game-that-traumatised-the-web)
* [2025-05-03, 13:20:00](https://soylentnews.org/article.pl?sid=25/05/03/021233&amp;from=rss) - [Let&apos;s Remember That Extraordinary Claims Need Extraordinary Evidence](https://soylentnews.org/article.pl?sid=25/05/03/021233&amp;from=rss)
* [2025-05-03, 08:37:00](https://soylentnews.org/article.pl?sid=25/05/03/0154209&amp;from=rss) - [A Strange Phrase Keeps Turning Up in Scientific Papers, but Why?](https://soylentnews.org/article.pl?sid=25/05/03/0154209&amp;from=rss)
* [2025-05-03, 08:28:23](https://news.ycombinator.com/item?id=43877644) - [Why Archers Didn&apos;t Volley Fire](https://acoup.blog/2025/05/02/collections-why-archers-didnt-volley-fire/)
* [2025-05-03, 07:03:44](https://news.ycombinator.com/item?id=43877356) - [Circuitpainter: Create PCBs using a simplfiied graphics language](https://github.com/Blinkinlabs/circuitpainter)
* [2025-05-03, 03:52:00](https://soylentnews.org/article.pl?sid=25/05/02/0710252&amp;from=rss) - [\&quot;Aerial Urination\&quot;](https://soylentnews.org/article.pl?sid=25/05/02/0710252&amp;from=rss)
* [2025-05-03, 01:20:46](https://news.ycombinator.com/item?id=43876135) - [Fuzzy images are our first look at Amazon&apos;s super-secret satellites](https://arstechnica.com/space/2025/05/we-finally-know-a-little-more-about-amazons-super-secret-satellites/)
* [2025-05-02, 23:10:00](https://soylentnews.org/article.pl?sid=25/05/02/064235&amp;from=rss) - [Monty Python and the Holy Grail Turns 50](https://soylentnews.org/article.pl?sid=25/05/02/064235&amp;from=rss)
* [2025-05-02, 22:28:05](https://news.ycombinator.com/item?id=43875136) - [A 1903 Proposal to Preserve the Dead in Glass Cubes](https://hyperallergic.com/406959/preserving-the-dead-in-glass/)
* [2025-05-02, 18:25:00](https://soylentnews.org/article.pl?sid=25/05/02/0551254&amp;from=rss) - [Flying Squirrel-Inspired Drone With Foldable Wings Demonstrates High Maneuverability](https://soylentnews.org/article.pl?sid=25/05/02/0551254&amp;from=rss)
* [2025-05-02, 13:42:00](https://soylentnews.org/article.pl?sid=25/05/02/0534212&amp;from=rss) - [China&apos;s &apos;2D&apos; Chip Could Soon be Used to Make Silicon-Free Chips](https://soylentnews.org/article.pl?sid=25/05/02/0534212&amp;from=rss)
* [2025-05-02, 08:54:00](https://soylentnews.org/article.pl?sid=25/04/30/1527224&amp;from=rss) - [A Gas Clump in the Milky Way’s Neighborhood Might be a ‘Dark Galaxy’](https://soylentnews.org/article.pl?sid=25/04/30/1527224&amp;from=rss)
* [2025-05-02, 04:13:00](https://soylentnews.org/article.pl?sid=25/04/30/1513218&amp;from=rss) - [Google is Killing Software Support for Early Nest Thermostats](https://soylentnews.org/article.pl?sid=25/04/30/1513218&amp;from=rss)
* [2025-05-01, 23:32:00](https://soylentnews.org/article.pl?sid=25/04/30/1511234&amp;from=rss) - [OIN Marks 20 Years Of Defending Linux And Open Source From Patent Trolls](https://soylentnews.org/article.pl?sid=25/04/30/1511234&amp;from=rss)
* [2025-05-01, 18:52:00](https://soylentnews.org/article.pl?sid=25/04/30/157220&amp;from=rss) - [Left or Right Arm? New Research Reveals Why Vaccination Site Matters for Immune Response](https://soylentnews.org/article.pl?sid=25/04/30/157220&amp;from=rss)
* [2025-05-01, 18:10:54](https://news.ycombinator.com/item?id=43861297) - [Towards the Cutest Neural Network](https://kevinlynagh.com/towards-the-cutest-neural-network/)
* [2025-05-01, 14:03:00](https://soylentnews.org/article.pl?sid=25/04/30/154230&amp;from=rss) - [Fusion Reactor Called ‘Norm’ Could Outperform Everything We’ve Built So Far](https://soylentnews.org/article.pl?sid=25/04/30/154230&amp;from=rss)
* [2025-05-01, 09:27:48](https://news.ycombinator.com/item?id=43855386) - [Urtext: The Python plaintext library for people who&apos;ve tried everything else](https://urtext.co/)
* [2025-05-01, 09:21:00](https://soylentnews.org/article.pl?sid=25/04/30/0213229&amp;from=rss) - [Here’s How We Might Generate Electricity From Rain](https://soylentnews.org/article.pl?sid=25/04/30/0213229&amp;from=rss)
* [2025-05-01, 04:34:00](https://soylentnews.org/article.pl?sid=25/04/30/025225&amp;from=rss) - [Wired on Protecting Your Phone — and Your Privacy — at the US Border](https://soylentnews.org/article.pl?sid=25/04/30/025225&amp;from=rss)
