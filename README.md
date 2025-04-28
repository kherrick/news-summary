# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovations

* [Could a 'Math Genius' AI Co-author Proofs Within Three Years?](https://science.slashdot.org/story/25/04/28/0255248/could-a-math-genius-ai-co-author-proofs-within-three-years?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://science.slashdot.org/story/25/04/28/0255248/could-a-math-genius-ai-co-author-proofs-within-three-years?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [TMuxAI: AI-Powered, Non-Intrusive Terminal Assistant](https://tmuxai.dev/) ([comments](https://news.ycombinator.com/item?id=43812646))

* [Watching o3 guess a photo’s location is surreal, dystopian and wildly entertaining](https://simonwillison.net/2025/Apr/26/o3-photo-locations/) ([comments](https://lobste.rs/s/geord9/watching_o3_guess_photo_s_location_is))

* [Starbucks Opens Its First 3D-Printed Store](https://hardware.slashdot.org/story/25/04/27/2041226/starbucks-opens-its-first-3d-printed-store?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://hardware.slashdot.org/story/25/04/27/2041226/starbucks-opens-its-first-3d-printed-store?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Science and Health

* [AI helps unravel a cause of Alzheimer’s and identify a therapeutic candidate](https://today.ucsd.edu/story/ai-helps-unravel-a-cause-of-alzheimers-disease-and-identify-a-therapeutic-candidate) ([comments](https://news.ycombinator.com/item?id=43815591))

* [9-Mile-Thick Layer of Solid Diamonds May Lurk Beneath Mercury's Surface, Study Hints](https://soylentnews.org/article.pl?sid=25/04/26/179216&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/04/26/179216&from=rss))

* [German Team Demonstrates Quantum Communication Over an Existing 254km Fibre Optic Network](https://soylentnews.org/article.pl?sid=25/04/25/0319203&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/04/25/0319203&from=rss))

## Cultural and Historical Insights

* [The Vietnam War ended 50 years ago, but the battle with Agent Orange continues](https://apnews.com/article/vietnam-war-anniversary-agent-orange-0829caefe48cc11fb88ab27982da922b) ([comments](https://news.ycombinator.com/item?id=43817137))

* [The suburban office park that launched Silicon Valley](https://thehustle.co/originals/the-suburban-office-park-that-launched-silicon-valley) ([comments](https://news.ycombinator.com/item?id=43815558))

* [Yoda Bloopers Released - and George Lucas Reveals Why Yoda Talks Backwards](https://entertainment.slashdot.org/story/25/04/27/040248/yoda-bloopers-released---and-george-lucas-reveals-why-yoda-talks-backwards?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://entertainment.slashdot.org/story/25/04/27/040248/yoda-bloopers-released---and-george-lucas-reveals-why-yoda-talks-backwards?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Environmental and Space Exploration

* [Can Solar Wind Make Water on the Moon? A NASA Experiment Shows Maybe](https://science.slashdot.org/story/25/04/26/2217249/can-solar-wind-make-water-on-the-moon-a-nasa-experiment-shows-maybe?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://science.slashdot.org/story/25/04/26/2217249/can-solar-wind-make-water-on-the-moon-a-nasa-experiment-shows-maybe?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [NASA’s Lucy Spacecraft Images Asteroid Donaldjohanson](https://soylentnews.org/article.pl?sid=25/04/26/1332253&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/04/26/1332253&from=rss))

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

* [2025-04-28, 03:10:59](https://news.ycombinator.com/item?id=43817137) - [The Vietnam War ended 50 years ago, but the battle with Agent Orange continues](https://apnews.com/article/vietnam-war-anniversary-agent-orange-0829caefe48cc11fb88ab27982da922b)
* [2025-04-28, 02:59:00](https://science.slashdot.org/story/25/04/28/0255248/could-a-math-genius-ai-co-author-proofs-within-three-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Could a &apos;Math Genius&apos; AI Co-author Proofs Within Three Years?](https://science.slashdot.org/story/25/04/28/0255248/could-a-math-genius-ai-co-author-proofs-within-three-years?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-28, 02:20:47](https://lobste.rs/s/ashwpk/boxie_always_offline_audio_player_for_my_3) - [Boxie - an always offline audio player for my 3 year old](https://mariozechner.at/posts/2025-04-20-boxie/)
* [2025-04-28, 01:32:57](https://news.ycombinator.com/item?id=43816697) - [To &apos;Reclaim Future-Making&apos;, Amazon Workers Published Collection of SciFi Stories](https://afteramazon.world/)
* [2025-04-28, 01:05:00](https://hardware.slashdot.org/story/25/04/28/013206/nuclear-fusion-pioneer-abandons-plan-for-prototype-reactor-will-license-reaction-boosting-nuclear-fuel-capsule?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Nuclear Fusion Pioneer Abandons Plan for Prototype Reactor, Will License Reaction-Boosting Nuclear Fuel Capsule](https://hardware.slashdot.org/story/25/04/28/013206/nuclear-fusion-pioneer-abandons-plan-for-prototype-reactor-will-license-reaction-boosting-nuclear-fuel-capsule?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-28, 00:58:05](https://lobste.rs/s/azvdtw/how_single_line_code_could_brick_your) - [How a Single Line Of Code Could Brick Your iPhone](https://rambo.codes/posts/2025-04-24-how-a-single-line-of-code-could-brick-your-iphone)
* [2025-04-28, 00:56:11](https://lobste.rs/s/geord9/watching_o3_guess_photo_s_location_is) - [Watching o3 guess a photo’s location is surreal, dystopian and wildly entertaining](https://simonwillison.net/2025/Apr/26/o3-photo-locations/)
* [2025-04-28, 00:42:00](https://soylentnews.org/article.pl?sid=25/04/26/1713213&amp;from=rss) - [Fedora Considers Dropping GNOME X11 Session From Repositories](https://soylentnews.org/article.pl?sid=25/04/26/1713213&amp;from=rss)
* [2025-04-28, 00:38:53](https://news.ycombinator.com/item?id=43816419) - [Show HN: I made a web-based, free alternative to Screen Studio](https://www.screenrecorder.me)
* [2025-04-28, 00:22:39](https://lobste.rs/s/drhief/import_death_die) - [import death; die](https://web.archive.org/web/20240206194712/https://bpa.st/3FGA)
* [2025-04-28, 00:19:26](https://news.ycombinator.com/item?id=43816327) - [New material gives copper superalloy-like strength](https://news.lehigh.edu/new-material-gives-copper-superalloy-like-strength-0)
* [2025-04-27, 23:38:00](https://news.slashdot.org/story/25/04/27/2336243/to-reclaim-future-making-amazon-workers-published-a-collection-of-science-fiction-stories?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [To &apos;Reclaim Future-Making&apos;, Amazon Workers Published a Collection of Science Fiction Stories](https://news.slashdot.org/story/25/04/27/2336243/to-reclaim-future-making-amazon-workers-published-a-collection-of-science-fiction-stories?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-27, 23:07:51](https://news.ycombinator.com/item?id=43815891) - [Restoring a Sinclair C5](https://woof.tech/@crashtestdev/114411537491626882)
* [2025-04-27, 22:19:27](https://news.ycombinator.com/item?id=43815591) - [AI helps unravel a cause of Alzheimer’s and identify a therapeutic candidate](https://today.ucsd.edu/story/ai-helps-unravel-a-cause-of-alzheimers-disease-and-identify-a-therapeutic-candidate)
* [2025-04-27, 22:14:32](https://news.ycombinator.com/item?id=43815558) - [The suburban office park that launched Silicon Valley](https://thehustle.co/originals/the-suburban-office-park-that-launched-silicon-valley)
* [2025-04-27, 22:06:38](https://news.ycombinator.com/item?id=43815511) - [Tiny Emulators](https://floooh.github.io/tiny8bit-preview/)
* [2025-04-27, 22:06:31](https://news.ycombinator.com/item?id=43815510) - [Computer Architects Can&apos;t Find the Average](https://dgsq.net/2025-04-27-averages/)
* [2025-04-27, 21:59:00](https://science.slashdot.org/story/25/04/27/2158224/russian-satellite-linked-to-its-nuclear-anti-satellite-weapon-program-appears-out-of-control-analyst-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russian Satellite Linked to Its Nuclear Anti-Satellite Weapon Program Appears Out of Control, Analyst says](https://science.slashdot.org/story/25/04/27/2158224/russian-satellite-linked-to-its-nuclear-anti-satellite-weapon-program-appears-out-of-control-analyst-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-27, 21:17:51](https://lobste.rs/s/wwldja/technical_debt_as_theory_building) - [Technical Debt as Theory Building and Practice](https://www.usenix.org/conference/srecon25americas/presentation/lam)
* [2025-04-27, 21:04:13](https://news.ycombinator.com/item?id=43815116) - [Show HN: I486SX_soft_FPU – Software FPU Emulator for NetBSD 10 on 486SX](https://github.com/mezantrop/i486SX_soft_FPU)
* [2025-04-27, 20:59:26](https://news.ycombinator.com/item?id=43815083) - [Cut: Chattanooga Civic User Testing](https://cut.chattanooga.gov/)
* [2025-04-27, 20:53:03](https://news.ycombinator.com/item?id=43815044) - [How a Pipe Organ Works (2020)](https://www.pipedreams.org/page/how-a-pipe-organ-works)
* [2025-04-27, 20:48:15](https://lobste.rs/s/zonyxg/what_does_use_client_do) - [What Does \&quot;use client\&quot; Do?](https://overreacted.io/what-does-use-client-do/)
* [2025-04-27, 20:43:00](https://hardware.slashdot.org/story/25/04/27/2041226/starbucks-opens-its-first-3d-printed-store?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Starbucks Opens Its First 3D-Printed Store](https://hardware.slashdot.org/story/25/04/27/2041226/starbucks-opens-its-first-3d-printed-store?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-27, 20:40:09](https://lobste.rs/s/rm20ex/silent_bugs_matter_study_compiler) - [Silent Bugs Matter: A Study of Compiler-Introduced Security Bugs](https://www.usenix.org/conference/usenixsecurity23/presentation/xu-jianhao)
* [2025-04-27, 20:38:17](https://lobste.rs/s/zihgia/what_s_new_apt_3_0) - [What&apos;s new in APT 3.0](https://lwn.net/Articles/1017315/)
* [2025-04-27, 20:28:46](https://lobste.rs/s/5jg6pl/unlocking_ractors_object_id) - [Unlocking Ractors: object_id](https://byroot.github.io/ruby/performance/2025/04/26/unlocking-ractors-object-id.html)
* [2025-04-27, 20:08:38](https://news.ycombinator.com/item?id=43814708) - [I just want to code (2023)](https://www.zachbellay.com/daily/i-just-want-to-code/)
* [2025-04-27, 19:56:00](https://soylentnews.org/article.pl?sid=25/04/26/179216&amp;from=rss) - [9-Mile-Thick Layer of Solid Diamonds May Lurk Beneath Mercury&apos;s Surface, Study Hints](https://soylentnews.org/article.pl?sid=25/04/26/179216&amp;from=rss)
* [2025-04-27, 19:35:55](https://news.ycombinator.com/item?id=43814497) - [Business co-founders in tech startups are less valuable than they think](https://verdikapuku.com/posts/business-founders-are-less-valuable-than-they-think/)
* [2025-04-27, 19:34:00](https://slashdot.org/story/25/04/27/1925219/consumers-arent-flocking-to-microsofts-ai-tool-copilot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Consumers Aren&apos;t Flocking to Microsoft&apos;s AI Tool &apos;Copilot&apos;](https://slashdot.org/story/25/04/27/1925219/consumers-arent-flocking-to-microsofts-ai-tool-copilot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-27, 19:26:34](https://news.ycombinator.com/item?id=43814433) - [Internet in a Box](https://internet-in-a-box.org/)
* [2025-04-27, 19:12:43](https://news.ycombinator.com/item?id=43814360) - [How a single line of code could brick your iPhone](https://rambo.codes/posts/2025-04-24-how-a-single-line-of-code-could-brick-your-iphone)
* [2025-04-27, 18:55:10](https://lobste.rs/s/jcscxj/are_ai_systems_really_tools) - [Are \&quot;AI\&quot; systems really tools?](https://tante.cc/2025/04/27/are-ai-system-really-tools/)
* [2025-04-27, 18:43:48](https://lobste.rs/s/eon9yi/openbsd_7_7_released_april_28_2025) - [OpenBSD 7.7 released April 28, 2025](https://marc.info/?l=openbsd-misc&amp;m=174577758604758&amp;w=2)
* [2025-04-27, 18:34:00](https://tech.slashdot.org/story/25/04/27/1830241/googles-deepmind-uk-team-reportedly-seeks-to-unionize?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google&apos;s DeepMind UK Team Reportedly Seeks to Unionize](https://tech.slashdot.org/story/25/04/27/1830241/googles-deepmind-uk-team-reportedly-seeks-to-unionize?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-27, 18:32:53](https://news.ycombinator.com/item?id=43814080) - [Show HN: Daily Jailbreak – Prompt Engineer&apos;s Wordle](https://www.vaultbreak.ai/daily-jailbreak)
* [2025-04-27, 17:45:46](https://lobste.rs/s/drzmfa/can_shardines_sqlite_multitenancy_with) - [A Can of Shardines: SQLite Multitenancy With Rails](https://blog.julik.nl/2025/04/a-can-of-shardines)
* [2025-04-27, 17:21:00](https://soylentnews.org/politics/article.pl?sid=25/04/26/174238&amp;from=rss) - [XKCD Cartoon Protest](https://soylentnews.org/politics/article.pl?sid=25/04/26/174238&amp;from=rss)
* [2025-04-27, 17:05:38](https://lobste.rs/s/mzogmm/how_program_text_adventure_c) - [How to Program a Text Adventure in C](http://helderman.github.io/htpataic/)
* [2025-04-27, 17:00:46](https://news.ycombinator.com/item?id=43813336) - [Extend (YC W23) is hiring engineers to build LLM document processing](https://jobs.ashbyhq.com/extend/9d4d8974-bd9b-432d-84ec-8268e5a8ed37)
* [2025-04-27, 17:00:29](https://news.ycombinator.com/item?id=43813330) - [Show HN: I created snapDOM to capture DOM nodes as images with exceptional speed](https://github.com/zumerlab/snapdom)
* [2025-04-27, 16:40:30](https://news.ycombinator.com/item?id=43813175) - [Read the Obits](https://thereader.mitpress.mit.edu/the-creativity-hack-no-one-told-you-about-read-the-obits/)
* [2025-04-27, 16:34:00](https://it.slashdot.org/story/25/04/27/088238/wsj-tech-industry-workers-now-miserable-fearing-layoffs-working-longer-hours?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [WSJ:  Tech-Industry Workers Now &apos;Miserable&apos;, Fearing Layoffs, Working Longer Hours](https://it.slashdot.org/story/25/04/27/088238/wsj-tech-industry-workers-now-miserable-fearing-layoffs-working-longer-hours?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-27, 16:27:57](https://news.ycombinator.com/item?id=43813083) - [Did 5G kill the IMSI catcher?](https://zetier.com/5g-imsi-catcher/)
* [2025-04-27, 16:23:31](https://news.ycombinator.com/item?id=43813046) - [Watching o3 model sweat over a Paul Morphy mate-in-2](https://alexop.dev/posts/how-03-model-tries-chess-puzzle/)
* [2025-04-27, 16:18:49](https://news.ycombinator.com/item?id=43812995) - [Libogc (Wii homebrew library) discovered to contain code stolen from RTEMS](https://github.com/fail0verflow/hbc/blob/80a80251f83f1993c272c58e471d040f3eb1dee9/README.md)
* [2025-04-27, 16:02:46](https://news.ycombinator.com/item?id=43812856) - [Virginia passes law to enforce maximum vehicle speeds for repeat speeders](https://www.fastcompany.com/91323835/virginia-will-use-technology-to-slow-chronic-speeders-cars-and-other-states-are-rushing-to-join-in)
* [2025-04-27, 15:35:32](https://news.ycombinator.com/item?id=43812646) - [TmuxAI: AI-Powered, Non-Intrusive Terminal Assistant](https://tmuxai.dev/)
* [2025-04-27, 15:34:00](https://news.slashdot.org/story/25/04/26/238243/canadian-university-cancels-coding-competition-over-suspected-ai-cheating?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Canadian University Cancels Coding Competition Over Suspected AI Cheating](https://news.slashdot.org/story/25/04/26/238243/canadian-university-cancels-coding-competition-over-suspected-ai-cheating?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-27, 15:12:00](https://soylentnews.org/article.pl?sid=25/04/26/171205&amp;from=rss) - [The EU is Implementing Energy Labels and Minimum Requirements for Phones and Tablets](https://soylentnews.org/article.pl?sid=25/04/26/171205&amp;from=rss)
* [2025-04-27, 15:10:06](https://news.ycombinator.com/item?id=43812459) - [The coming knowledge-work supply-chain crisis](https://worksonmymachine.substack.com/p/the-coming-knowledge-work-supply)
* [2025-04-27, 14:45:36](https://news.ycombinator.com/item?id=43812323) - [Reverse geocoding is hard](https://shkspr.mobi/blog/2025/04/reverse-geocoding-is-hard/)
* [2025-04-27, 14:34:00](https://linux.slashdot.org/story/25/04/27/0127203/lenovo-may-be-avoiding-the-windows-tax-by-offering-cheaper-laptops-with-pre-installed-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Lenovo May Be Avoiding the &apos;Windows Tax&apos; By Offering Cheaper Laptops With Pre-Installed Linux](https://linux.slashdot.org/story/25/04/27/0127203/lenovo-may-be-avoiding-the-windows-tax-by-offering-cheaper-laptops-with-pre-installed-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-27, 13:32:28](https://lobste.rs/s/jsjxzj/sigbovik_2025_conference_proceedings) - [SIGBOVIK 2025 conference proceedings](https://sigbovik.org/2025/proceedings.pdf)
* [2025-04-27, 12:16:59](https://news.ycombinator.com/item?id=43811400) - [Shardines: SQLite3 Database-per-Tenant with ActiveRecord](https://blog.julik.nl/2025/04/a-can-of-shardines)
* [2025-04-27, 11:34:00](https://entertainment.slashdot.org/story/25/04/27/040248/yoda-bloopers-released---and-george-lucas-reveals-why-yoda-talks-backwards?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Yoda Bloopers Released - and George Lucas Reveals Why Yoda Talks Backwards](https://entertainment.slashdot.org/story/25/04/27/040248/yoda-bloopers-released---and-george-lucas-reveals-why-yoda-talks-backwards?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-27, 11:02:32](https://news.ycombinator.com/item?id=43811016) - [Show HN: Bhvr, a Bun and Hono and Vite and React Starter](https://bhvr.dev)
* [2025-04-27, 10:34:13](https://lobste.rs/s/53mu4h/half_century_silicon_valley) - [A Half-Century of Silicon Valley](https://oxide-and-friends.transistor.fm/episodes/a-half-century-of-silicon-valley-with-randy-shoup)
* [2025-04-27, 10:30:00](https://soylentnews.org/article.pl?sid=25/04/26/1332253&amp;from=rss) - [NASA’s Lucy Spacecraft Images Asteroid Donaldjohanson](https://soylentnews.org/article.pl?sid=25/04/26/1332253&amp;from=rss)
* [2025-04-27, 09:25:36](https://news.ycombinator.com/item?id=43810566) - [ZFS: Apple&apos;s new filesystem that wasn&apos;t (2016)](https://ahl.dtrace.org/2016/06/15/apple_and_zfs/)
* [2025-04-27, 08:01:32](https://lobste.rs/s/hnrfdh/comfy_guide) - [Comfy.Guide](https://comfy.guide/)
* [2025-04-27, 07:58:54](https://lobste.rs/s/hnqkhk/remove_these_tags_from_head) - [Remove these tags from &lt;head&gt;](https://getoutofmyhead.dev/)
* [2025-04-27, 07:39:04](https://lobste.rs/s/p63gea/systemd_system_extensions_for_fedora) - [systemd system extensions for Fedora image based systems](https://travier.github.io/fedora-sysexts/)
* [2025-04-27, 07:34:00](https://linux.slashdot.org/story/25/04/27/0547245/linus-torvalds-expresses-his-hatred-for-case-insensitive-file-systems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linus Torvalds Expresses His Hatred For Case-Insensitive File-Systems](https://linux.slashdot.org/story/25/04/27/0547245/linus-torvalds-expresses-his-hatred-for-case-insensitive-file-systems?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-27, 05:43:00](https://soylentnews.org/article.pl?sid=25/04/26/1324227&amp;from=rss) - [Post-Quantum Crypto: McEliece Standardization](https://soylentnews.org/article.pl?sid=25/04/26/1324227&amp;from=rss)
* [2025-04-27, 05:02:15](https://lobste.rs/s/zczynh/apple_encrypted_archive) - [Apple Encrypted Archive](https://theapplewiki.com/wiki/Apple_Encrypted_Archive)
* [2025-04-27, 04:34:00](https://tech.slashdot.org/story/25/04/27/0252257/4chan-returns-details-breach-blames-funding-issues-ends-shockwave-board?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [4chan Returns, Details Breach, Blames Funding Issues, Ends Shockwave Board](https://tech.slashdot.org/story/25/04/27/0252257/4chan-returns-details-breach-blames-funding-issues-ends-shockwave-board?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-27, 03:33:13](https://lobste.rs/s/lzgrqf/9front_clause_15_common_elements_maus) - [9front “clause 15 common elements of maus and star type” released](https://9front.org/releases/2025/04/26/0/)
* [2025-04-27, 02:23:16](https://lobste.rs/s/fsyavq/unauthorized_experiment_on_cmv) - [Unauthorized Experiment on CMV Involving AI-generated Comments](https://www.reddit.com/r/changemyview/comments/1k8b2hj/meta_unauthorized_experiment_on_cmv_involving/)
* [2025-04-27, 01:34:00](https://tech.slashdot.org/story/25/04/27/0031222/ipad-jammed-in-seat-forces-emergency-landing-of-airplane-carrying-400-passengers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [iPad Jammed in Seat Forces Emergency Landing of Airplane Carrying 400 Passengers](https://tech.slashdot.org/story/25/04/27/0031222/ipad-jammed-in-seat-forces-emergency-landing-of-airplane-carrying-400-passengers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-27, 01:00:00](https://soylentnews.org/article.pl?sid=25/04/26/1322229&amp;from=rss) - [Kennedy Promises Studies Using Private Health Data to Identify Factors That May Cause Autism](https://soylentnews.org/article.pl?sid=25/04/26/1322229&amp;from=rss)
* [2025-04-26, 22:34:00](https://science.slashdot.org/story/25/04/26/2217249/can-solar-wind-make-water-on-the-moon-a-nasa-experiment-shows-maybe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Can Solar Wind Make Water on the Moon? A NASA Experiment Shows Maybe ](https://science.slashdot.org/story/25/04/26/2217249/can-solar-wind-make-water-on-the-moon-a-nasa-experiment-shows-maybe?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-04-26, 22:13:13](https://lobste.rs/s/2xti6d/compiler_reminders) - [Compiler reminders](https://jfmengels.net/compiler-reminders)
* [2025-04-26, 21:59:33](https://lobste.rs/s/9jq7kn/smallweb_your_internet_folder) - [Smallweb – Your Internet Folder](https://smallweb.run/)
* [2025-04-26, 21:52:04](https://lobste.rs/s/zhkfsl/past_present_future_sorbet_type_syntax) - [Past, Present, and Future of Sorbet Type Syntax](https://blog.jez.io/history-of-sorbet-syntax/)
* [2025-04-26, 20:12:00](https://soylentnews.org/article.pl?sid=25/04/25/0336217&amp;from=rss) - [First Confirmed Footage of a Colossal Squid](https://soylentnews.org/article.pl?sid=25/04/25/0336217&amp;from=rss)
* [2025-04-26, 16:23:17](https://lobste.rs/s/1vzqe2/parallel_configure) - [Parallel ./configure](https://tavianator.com/2025/configure.html)
* [2025-04-26, 15:28:00](https://soylentnews.org/article.pl?sid=25/04/25/0329237&amp;from=rss) - [The History of Timekeeping](https://soylentnews.org/article.pl?sid=25/04/25/0329237&amp;from=rss)
* [2025-04-26, 10:42:00](https://soylentnews.org/article.pl?sid=25/04/25/0327235&amp;from=rss) - [Drawing a Line From the Gut Microbiome to Inflammation and Depression](https://soylentnews.org/article.pl?sid=25/04/25/0327235&amp;from=rss)
* [2025-04-26, 05:55:00](https://soylentnews.org/article.pl?sid=25/04/25/0319203&amp;from=rss) - [German Team Demonstrates Quantum Communication Over an Existing 254km Fibre Optic Network](https://soylentnews.org/article.pl?sid=25/04/25/0319203&amp;from=rss)
* [2025-04-26, 01:08:00](https://soylentnews.org/article.pl?sid=25/04/25/035210&amp;from=rss) - [Matter Mediates Ultrastrong Coupling Between Light Particles](https://soylentnews.org/article.pl?sid=25/04/25/035210&amp;from=rss)
* [2025-04-25, 20:20:00](https://soylentnews.org/article.pl?sid=25/04/24/0635218&amp;from=rss) - [First SD Express 8.0 Memory Card From Adata Hits 1.6 GB/s Read Speeds](https://soylentnews.org/article.pl?sid=25/04/24/0635218&amp;from=rss)
* [2025-04-25, 15:34:00](https://soylentnews.org/politics/article.pl?sid=25/04/24/0632233&amp;from=rss) - [Harvard Stands Up for the First Amendment](https://soylentnews.org/politics/article.pl?sid=25/04/24/0632233&amp;from=rss)
* [2025-04-25, 10:47:00](https://soylentnews.org/article.pl?sid=25/04/24/0626241&amp;from=rss) - [Out-of-Balance Bacteria is Linked to Multiple Sclerosis − the Ratio Can Predict Severity of Disease](https://soylentnews.org/article.pl?sid=25/04/24/0626241&amp;from=rss)
* [2025-04-25, 06:02:00](https://soylentnews.org/article.pl?sid=25/04/24/0233226&amp;from=rss) - [4chan May be Dead, but its Toxic Legacy Lives on](https://soylentnews.org/article.pl?sid=25/04/24/0233226&amp;from=rss)
* [2025-04-25, 01:13:00](https://soylentnews.org/article.pl?sid=25/04/23/1540254&amp;from=rss) - [Crosswalk Button Voices Altered](https://soylentnews.org/article.pl?sid=25/04/23/1540254&amp;from=rss)
* [2025-04-24, 20:24:00](https://soylentnews.org/article.pl?sid=25/04/23/1538243&amp;from=rss) - [C64 Demo Using Audio for Video and Vice Versa](https://soylentnews.org/article.pl?sid=25/04/23/1538243&amp;from=rss)
* [2025-04-24, 15:38:00](https://soylentnews.org/article.pl?sid=25/04/23/1521205&amp;from=rss) - [Open Home passes 2 million homes equipped](https://soylentnews.org/article.pl?sid=25/04/23/1521205&amp;from=rss)
* [2025-04-24, 10:53:00](https://soylentnews.org/article.pl?sid=25/04/23/1515240&amp;from=rss) - [Sophisticated Gmail Attack Highlights Dangers of Trusting Big Tech with Personal Data](https://soylentnews.org/article.pl?sid=25/04/23/1515240&amp;from=rss)
* [2025-04-24, 06:11:00](https://soylentnews.org/article.pl?sid=25/04/23/0422241&amp;from=rss) - [World&apos;s First Drone System for Fighting Lightning Protects Cities and Infrastructure](https://soylentnews.org/article.pl?sid=25/04/23/0422241&amp;from=rss)
* [2025-04-24, 01:26:00](https://soylentnews.org/article.pl?sid=25/04/23/0353259&amp;from=rss) - [Lone Black Hole Discovered](https://soylentnews.org/article.pl?sid=25/04/23/0353259&amp;from=rss)
