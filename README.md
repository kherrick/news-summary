# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Digital Security

* [Most Parked Domains Now Serving Malicious Content](https://krebsonsecurity.com/2025/12/most-parked-domains-now-serving-malicious-content/) ([comments](https://news.ycombinator.com/item?id=46312021))

* [Creating apps like Signal could be 'hostile activity' claims UK watchdog](https://www.techradar.com/vpn/vpn-privacy-security/creating-apps-like-signal-or-whatsapp-could-be-hostile-activity-claims-uk-watchdog) ([comments](https://news.ycombinator.com/item?id=46311355))

* [Microsoft quietly kills IntelliCode in favor of the paid Copilot](https://visualstudiomagazine.com/articles/2025/12/17/microsoft-quietly-kills-intellicode-as-ai-strategy-shifts-to-copilot.aspx) ([comments](https://lobste.rs/s/k9cyk3/microsoft_quietly_kills_intellicode))

* [It’s all about momentum](https://combo.cc/posts/its-all-about-momentum-innit/) ([comments](https://news.ycombinator.com/item?id=46310856))

* [RCE via ND6 Router Advertisements in FreeBSD](https://www.freebsd.org/security/advisories/FreeBSD-SA-25:12.rtsold.asc) ([comments](https://news.ycombinator.com/item?id=46310104))

* [GitHub Actions for Self-Hosted Runners Price Increase Postponed](https://pricetimeline.com/news/189) ([comments](https://news.ycombinator.com/item?id=46310146))

## Environmental and Scientific Discoveries

* [After Ruining a Treasured Water Resource, Iran Is Drying Up](https://e360.yale.edu/features/iran-water-drought-dams-qanats) ([comments](https://news.ycombinator.com/item?id=46310976))

* [Another Starship Clone Pops Up In China](https://science.slashdot.org/story/25/12/17/2322234/another-starship-clone-pops-up-in-china?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://science.slashdot.org/story/25/12/17/2322234/another-starship-clone-pops-up-in-china?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Gut bacteria from amphibians and reptiles achieve tumor elimination in mice](https://www.jaist.ac.jp/english/whatsnew/press/2025/12/17-1.html) ([comments](https://news.ycombinator.com/item?id=46306894))

* [Norovirus Cases Surging in U.S.](https://soylentnews.org/article.pl?sid=25/12/16/0740251&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/12/16/0740251&from=rss))

* [Scientists Discover Early Alzheimer's Warning Sign Hiding in Routine Brain Scans](https://soylentnews.org/article.pl?sid=25/12/15/014215&from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/12/15/014215&from=rss))

## Artificial Intelligence and Machine Learning

* [Classical statues were not painted horribly](https://worksinprogress.co/issue/were-classical-statues-painted-horribly/) ([comments](https://news.ycombinator.com/item?id=46311856))

* [Video Game Hardware Sales Had a Historically Bad November In the US](https://games.slashdot.org/story/25/12/17/2330210/video-game-hardware-sales-had-a-historically-bad-november-in-the-us?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://games.slashdot.org/story/25/12/17/2330210/video-game-hardware-sales-had-a-historically-bad-november-in-the-us?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Browser Extensions With 8 Million Users Collect Extended AI Conversations](https://tech.slashdot.org/story/25/12/17/198250/browser-extensions-with-8-million-users-collect-extended-ai-conversations?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://tech.slashdot.org/story/25/12/17/198250/browser-extensions-with-8-million-users-collect-extended-ai-conversations?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Cultural and Historical Insights

* [Egyptian Hieroglyphs: Lesson 1](https://www.egyptianhieroglyphs.net/egyptian-hieroglyphs/lesson-1/) ([comments](https://news.ycombinator.com/item?id=46309407))

* [How getting richer made teenagers less free](https://www.theargumentmag.com/p/how-getting-richer-made-teenagers) ([comments](https://news.ycombinator.com/item?id=46310823))

## Business and Industry Shifts

* [Hightouch (YC S19) Is Hiring](https://hightouch.com/careers) ([comments](https://news.ycombinator.com/item?id=46311637))

* [Coursera Acquires Udemy For $930 Million](https://news.slashdot.org/story/25/12/17/1650219/coursera-acquires-udemy-for-930-million?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://news.slashdot.org/story/25/12/17/1650219/coursera-acquires-udemy-for-930-million?utm_source=rss1.0mainlinkanon&utm_medium=feed))

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

* [2025-12-18, 12:50:23](https://news.ycombinator.com/item?id=46312021) - [Most Parked Domains Now Serving Malicious Content](https://krebsonsecurity.com/2025/12/most-parked-domains-now-serving-malicious-content/)
* [2025-12-18, 12:28:45](https://news.ycombinator.com/item?id=46311856) - [Classical statues were not painted horribly](https://worksinprogress.co/issue/were-classical-statues-painted-horribly/)
* [2025-12-18, 12:01:01](https://news.ycombinator.com/item?id=46311637) - [Hightouch (YC S19) Is Hiring](https://hightouch.com/careers)
* [2025-12-18, 11:50:06](https://news.ycombinator.com/item?id=46311558) - [A school locked down after AI flagged a gun. It was a clarinet](https://www.washingtonpost.com/nation/2025/12/17/ai-gun-school-detection/)
* [2025-12-18, 11:21:15](https://news.ycombinator.com/item?id=46311355) - [Creating apps like Signal could be &apos;hostile activity&apos; claims UK watchdog](https://www.techradar.com/vpn/vpn-privacy-security/creating-apps-like-signal-or-whatsapp-could-be-hostile-activity-claims-uk-watchdog)
* [2025-12-18, 11:12:25](https://lobste.rs/s/eanubs/obs_studio_gets_new_renderer_how_obs) - [OBS Studio Gets A New Renderer: How OBS Adopted Metal](https://obsproject.com/blog/obs-studio-gets-a-new-renderer)
* [2025-12-18, 11:01:20](https://news.ycombinator.com/item?id=46311220) - [America&apos;s Dirtiest Carbon Polluters, Mapped to Ridiculous Precision](https://gizmodo.com/americas-dirtiest-carbon-polluters-mapped-to-ridiculous-precision-2000700924)
* [2025-12-18, 10:44:29](https://news.ycombinator.com/item?id=46311092) - [Slowness Is a Virtue](https://blog.jakobschwichtenberg.com/p/slowness-is-a-virtue)
* [2025-12-18, 10:33:03](https://lobste.rs/s/va2vtw/nvme_is_not_hard_disk_2021) - [NVME is not a hard disk (2021)](https://blog.koehntopp.info/2021/05/25/nvme-is-not-a-hard-disk.html)
* [2025-12-18, 10:27:05](https://news.ycombinator.com/item?id=46310976) - [After Ruining a Treasured Water Resource, Iran Is Drying Up](https://e360.yale.edu/features/iran-water-drought-dams-qanats)
* [2025-12-18, 10:09:10](https://news.ycombinator.com/item?id=46310856) - [It&apos;s all about momentum](https://combo.cc/posts/its-all-about-momentum-innit/)
* [2025-12-18, 10:03:42](https://news.ycombinator.com/item?id=46310823) - [How getting richer made teenagers less free](https://www.theargumentmag.com/p/how-getting-richer-made-teenagers)
* [2025-12-18, 10:00:00](https://games.slashdot.org/story/25/12/17/2330210/video-game-hardware-sales-had-a-historically-bad-november-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Video Game Hardware Sales Had a Historically Bad November In the US](https://games.slashdot.org/story/25/12/17/2330210/video-game-hardware-sales-had-a-historically-bad-november-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-18, 09:40:07](https://news.ycombinator.com/item?id=46310650) - [Online Textbook for Braid groups and knots and tangles](https://matthematics.com/redoak/redoak.html)
* [2025-12-18, 08:45:26](https://lobste.rs/s/k9cyk3/microsoft_quietly_kills_intellicode) - [Microsoft quietly kills IntelliCode in favor of the paid Copilot](https://visualstudiomagazine.com/articles/2025/12/17/microsoft-quietly-kills-intellicode-as-ai-strategy-shifts-to-copilot.aspx)
* [2025-12-18, 08:38:00](https://soylentnews.org/article.pl?sid=25/12/17/0149259&amp;from=rss) - [Ford Cancels Electric F-150](https://soylentnews.org/article.pl?sid=25/12/17/0149259&amp;from=rss)
* [2025-12-18, 08:18:46](https://news.ycombinator.com/item?id=46310146) - [GitHub Actions for Self-Hosted Runners Price Increase Postponed](https://pricetimeline.com/news/189)
* [2025-12-18, 08:12:42](https://news.ycombinator.com/item?id=46310104) - [RCE via ND6 Router Advertisements in FreeBSD](https://www.freebsd.org/security/advisories/FreeBSD-SA-25:12.rtsold.asc)
* [2025-12-18, 07:56:26](https://lobste.rs/s/lbvixt/lightning_extra_pytorch_lightning) - [lightning-extra: PyTorch Lightning plugins and utilities for cloud-native machine learning](https://github.com/ocramz/lightning-extra)
* [2025-12-18, 07:00:00](https://science.slashdot.org/story/25/12/17/2322234/another-starship-clone-pops-up-in-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Another Starship Clone Pops Up In China](https://science.slashdot.org/story/25/12/17/2322234/another-starship-clone-pops-up-in-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-18, 06:40:29](https://news.ycombinator.com/item?id=46309571) - [What is an elliptic curve? (2019)](https://www.johndcook.com/blog/2019/02/21/what-is-an-elliptic-curve/)
* [2025-12-18, 06:08:23](https://news.ycombinator.com/item?id=46309407) - [Egyptian Hieroglyphs: Lesson 1](https://www.egyptianhieroglyphs.net/egyptian-hieroglyphs/lesson-1/)
* [2025-12-18, 05:43:50](https://lobste.rs/s/tcnstw/interactive_fluid_typography) - [Interactive Fluid Typography](https://electricmagicfactory.com/articles/interactive-fluid-typography/)
* [2025-12-18, 04:27:53](https://news.ycombinator.com/item?id=46308893) - [Judge hints Vizio TV buyers may have rights to source code licensed under GPL](https://www.theregister.com/2025/12/05/vizio_gpl_source_code_ruling/)
* [2025-12-18, 03:46:00](https://soylentnews.org/article.pl?sid=25/12/17/0147256&amp;from=rss) - [After 50 Years, MIT Chemists Finally Synthesize Elusive Anti-Cancer Compound](https://soylentnews.org/article.pl?sid=25/12/17/0147256&amp;from=rss)
* [2025-12-18, 03:31:33](https://lobste.rs/s/rd5yo9/ringspace_proposal_for_human_web) - [Ringspace: A Proposal for the Human Web](https://taggart-tech.com/ringspace/)
* [2025-12-18, 03:30:00](https://news.slashdot.org/story/25/12/17/2315236/mit-grieves-shooting-death-of-renowned-director-of-plasma-science-center?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [MIT Grieves Shooting Death of Renowned Director of Plasma Science Center](https://news.slashdot.org/story/25/12/17/2315236/mit-grieves-shooting-death-of-renowned-director-of-plasma-science-center?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-18, 02:11:30](https://lobste.rs/s/cbdrvp/multimedia_sketchpad) - [A Multimedia Sketchpad](https://beyondloom.com/blog/sketchpad.html)
* [2025-12-18, 01:36:54](https://news.ycombinator.com/item?id=46307973) - [Ask HN: Those making $500/month on side projects in 2025 – Show and tell](https://news.ycombinator.com/item?id=46307973)
* [2025-12-18, 00:50:00](https://science.slashdot.org/story/25/12/17/2240200/senate-confirms-billionaire-entrepreneur-jared-isaacman-as-new-nasa-chief?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Senate Confirms Billionaire Entrepreneur Jared Isaacman As New NASA Chief](https://science.slashdot.org/story/25/12/17/2240200/senate-confirms-billionaire-entrepreneur-jared-isaacman-as-new-nasa-chief?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-18, 00:10:00](https://news.slashdot.org/story/25/12/17/210247/the-oscars-will-abandon-broadcast-tv-for-youtube-in-2029?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Oscars Will Abandon Broadcast TV For YouTube In 2029](https://news.slashdot.org/story/25/12/17/210247/the-oscars-will-abandon-broadcast-tv-for-youtube-in-2029?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-18, 00:06:33](https://lobste.rs/s/kcfrr2/secure_local_configuration_kakoune) - [secure local configuration in kakoune](https://ficd.sh/blog/kak-secure-local-config/)
* [2025-12-17, 23:30:00](https://hardware.slashdot.org/story/25/12/17/2053256/meta-pauses-third-party-headset-program?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta &apos;Pauses&apos; Third-Party Headset Program](https://hardware.slashdot.org/story/25/12/17/2053256/meta-pauses-third-party-headset-program?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-17, 23:11:14](https://news.ycombinator.com/item?id=46306894) - [Gut bacteria from amphibians and reptiles achieve tumor elimination in mice](https://www.jaist.ac.jp/english/whatsnew/press/2025/12/17-1.html)
* [2025-12-17, 23:01:00](https://soylentnews.org/article.pl?sid=25/12/16/0745203&amp;from=rss) - [This Group Pays Bounties to Repair Broken Devices—Even If the Fix Breaks the Law](https://soylentnews.org/article.pl?sid=25/12/16/0745203&amp;from=rss)
* [2025-12-17, 22:50:00](https://games.slashdot.org/story/25/12/17/2049252/netflix-to-add-soccer-video-game-based-on-fifa-world-cup-next-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Netflix To Add Soccer Video Game Based On FIFA World Cup Next Year](https://games.slashdot.org/story/25/12/17/2049252/netflix-to-add-soccer-video-game-based-on-fifa-world-cup-next-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-17, 22:10:00](https://hardware.slashdot.org/story/25/12/17/2042247/github-is-going-to-start-charging-you-for-using-your-own-hardware?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GitHub Is Going To Start Charging You For Using Your Own Hardware](https://hardware.slashdot.org/story/25/12/17/2042247/github-is-going-to-start-charging-you-for-using-your-own-hardware?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-17, 21:30:00](https://it.slashdot.org/story/25/12/17/2034233/linux-kernel-rust-code-sees-its-first-cve-vulnerability?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux Kernel Rust Code Sees Its First CVE Vulnerability](https://it.slashdot.org/story/25/12/17/2034233/linux-kernel-rust-code-sees-its-first-cve-vulnerability?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-17, 21:13:33](https://news.ycombinator.com/item?id=46305585) - [I got hacked: My Hetzner server started mining Monero](https://blog.jakesaunders.dev/my-server-started-mining-monero-this-morning/)
* [2025-12-17, 20:59:29](https://news.ycombinator.com/item?id=46305428) - [OBS Studio Gets a New Renderer](https://obsproject.com/blog/obs-studio-gets-a-new-renderer)
* [2025-12-17, 20:30:00](https://tech.slashdot.org/story/25/12/17/2028231/google-releases-gemini-3-flash-promising-improved-intelligence-and-efficiency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Releases Gemini 3 Flash, Promising Improved Intelligence and Efficiency](https://tech.slashdot.org/story/25/12/17/2028231/google-releases-gemini-3-flash-promising-improved-intelligence-and-efficiency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-17, 19:40:00](https://tech.slashdot.org/story/25/12/17/198250/browser-extensions-with-8-million-users-collect-extended-ai-conversations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Browser Extensions With 8 Million Users Collect Extended AI Conversations](https://tech.slashdot.org/story/25/12/17/198250/browser-extensions-with-8-million-users-collect-extended-ai-conversations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-17, 19:00:00](https://news.slashdot.org/story/25/12/17/1849246/english-has-become-easier-to-read?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [English Has Become Easier To Read](https://news.slashdot.org/story/25/12/17/1849246/english-has-become-easier-to-read?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-17, 18:18:00](https://soylentnews.org/article.pl?sid=25/12/16/0740251&amp;from=rss) - [Norovirus Cases Surging in U.S.](https://soylentnews.org/article.pl?sid=25/12/16/0740251&amp;from=rss)
* [2025-12-17, 18:17:00](https://yro.slashdot.org/story/25/12/17/1817255/fcc-chair-suggests-agency-isnt-independent-word-cut-from-mission-statement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FCC Chair Suggests Agency Isn&apos;t Independent, Word Cut From Mission Statement](https://yro.slashdot.org/story/25/12/17/1817255/fcc-chair-suggests-agency-isnt-independent-word-cut-from-mission-statement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-17, 17:38:00](https://science.slashdot.org/story/25/12/17/1738215/how-we-ingest-plastic-chemicals-while-consuming-food?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How We Ingest Plastic Chemicals While Consuming Food](https://science.slashdot.org/story/25/12/17/1738215/how-we-ingest-plastic-chemicals-while-consuming-food?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-17, 17:31:14](https://lobste.rs/s/nesn9g/linux_kernel_rust_code_sees_its_first_cve) - [Linux Kernel Rust Code Sees Its First CVE Vulnerability](https://www.phoronix.com/news/First-Linux-Rust-CVE)
* [2025-12-17, 17:13:03](https://news.ycombinator.com/item?id=46302337) - [A Safer Container Ecosystem with Docker: Free Docker Hardened Images](https://www.docker.com/blog/docker-hardened-images-for-every-developer/)
* [2025-12-17, 17:08:35](https://news.ycombinator.com/item?id=46302267) - [AWS CEO says replacing junior devs with AI is &apos;one of the dumbest ideas&apos;](https://www.finalroundai.com/blog/aws-ceo-ai-cannot-replace-junior-developers)
* [2025-12-17, 16:49:00](https://news.slashdot.org/story/25/12/17/1650219/coursera-acquires-udemy-for-930-million?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Coursera Acquires Udemy For $930 Million](https://news.slashdot.org/story/25/12/17/1650219/coursera-acquires-udemy-for-930-million?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-17, 16:42:13](https://news.ycombinator.com/item?id=46301851) - [Gemini 3 Flash: Frontier intelligence built for speed](https://blog.google/products/gemini/gemini-3-flash/)
* [2025-12-17, 16:09:19](https://lobste.rs/s/wgnk1u/what_does_database_for_ssds_look_like) - [What Does a Database for SSDs Look Like?](https://brooker.co.za/blog/2025/12/15/database-for-ssd.html)
* [2025-12-17, 15:33:24](https://lobste.rs/s/8gnr4x/maintaining_open_source_software_during) - [Maintaining an open source software during Hacktoberfest](https://crocidb.com/post/maintaining-an-oss-during-hacktoberfest/)
* [2025-12-17, 14:53:27](https://lobste.rs/s/lzfzzi/asahi_linux_progress_report_linux_6_18) - [Asahi Linux Progress Report: Linux 6.18](https://asahilinux.org/2025/12/progress-report-6-18/)
* [2025-12-17, 14:42:31](https://lobste.rs/s/knox4u/how_did_irc_ping_timeouts_end_up_lawsuit) - [How did IRC ping timeouts end up in a lawsuit?](https://mjg59.dreamwidth.org/73777.html)
* [2025-12-17, 13:38:51](https://lobste.rs/s/csp9j1/original_mozilla_dinosaur_logo_artwork) - [The original Mozilla \&quot;Dinosaur\&quot; logo artwork](https://www.jwz.org/blog/2025/12/the-original-mozilla-dinosaur-logo-artwork/)
* [2025-12-17, 13:34:00](https://soylentnews.org/article.pl?sid=25/12/16/0735240&amp;from=rss) - [Verizon Refused to Unlock Man&apos;s iPhone, So He Sued the Carrier and Won](https://soylentnews.org/article.pl?sid=25/12/16/0735240&amp;from=rss)
* [2025-12-17, 13:10:05](https://lobste.rs/s/ammoxm/yep_passkeys_still_have_problems) - [Yep, Passkeys Still Have Problems](https://fy.blackhats.net.au/blog/2025-12-17-yep-passkeys-still-have-problems/)
* [2025-12-17, 12:45:40](https://news.ycombinator.com/item?id=46301346) - [Coursera to combine with Udemy](https://investor.coursera.com/news/news-details/2025/Coursera-to-Combine-with-Udemy-to-Empower-the-Global-Workforce-with-Skills-for-the-AI-Era/default.aspx)
* [2025-12-17, 12:15:24](https://lobste.rs/s/baxkxn/how_twitter_is_probably_crawling) - [How Twitter is (probably) crawling the Internet for AI](https://kitsunemimi.pw/notes/posts/how-twitter-is-probably-crawling-the-internet-for-ai.html)
* [2025-12-17, 12:06:54](https://lobste.rs/s/2lnu5u/log_level_error_should_mean_something) - [Log level &apos;error&apos; should mean that something needs to be fixed](https://utcc.utoronto.ca/~cks/space/blog/programming/ErrorsShouldRequireFixing)
* [2025-12-17, 12:01:44](https://lobste.rs/s/sfjtvo/wrong_question_about_type_systems) - [The Wrong Question About Type Systems](https://furkan3ayraktar.github.io/blog/the-wrong-question-about-type-systems.html)
* [2025-12-17, 11:27:30](https://lobste.rs/s/lfd78r/short_circuiting_correlated_subqueries) - [Short-Circuiting Correlated Subqueries in SQLite](https://emschwartz.me/short-circuiting-correlated-subqueries-in-sqlite/)
* [2025-12-17, 09:29:30](https://lobste.rs/s/glwlvx/survey_dynamic_array_structures) - [A Survey of Dynamic Array Structures](https://azmr.uk/dyn/)
* [2025-12-17, 08:49:35](https://lobste.rs/s/igmbgy/keeping_secrets_less_than_two_weeks_ago) - [Keeping secrets, or (less than two weeks ago)](https://kellett.im/a/keeping-secrets)
* [2025-12-17, 08:48:00](https://soylentnews.org/article.pl?sid=25/12/16/0725206&amp;from=rss) - [A Simple Pill Could Replace Injections for Treating Gonorrhea](https://soylentnews.org/article.pl?sid=25/12/16/0725206&amp;from=rss)
* [2025-12-17, 07:28:16](https://lobste.rs/s/7jdpgz/qjp_turn_any_json_file_into_quick_tui_menu) - [qjp - turn any json file into a quick TUI menu](https://github.com/plainas/qjp)
* [2025-12-17, 06:43:21](https://lobste.rs/s/l5nep0/opus_1_6_released) - [Opus 1.6 Released](https://opus-codec.org/demo/opus-1.6/)
* [2025-12-17, 04:03:00](https://soylentnews.org/article.pl?sid=25/12/16/0718227&amp;from=rss) - [Australians Install 100,000 Home Battery Systems in 17 Weeks, and They Are Getting Bigger](https://soylentnews.org/article.pl?sid=25/12/16/0718227&amp;from=rss)
* [2025-12-17, 00:26:20](https://lobste.rs/s/lgputz/vm_overcommit_memory_2_is_always_right) - [vm.overcommit_memory=2 is always the right setting](https://ariadne.space/2025/12/16/vmovercommitmemory-is-always-the-right.html)
* [2025-12-16, 23:18:00](https://soylentnews.org/article.pl?sid=25/12/15/0110223&amp;from=rss) - [Breaking a 50-Year Law: New Evidence Challenges Fundamental Black Hole Physics](https://soylentnews.org/article.pl?sid=25/12/15/0110223&amp;from=rss)
* [2025-12-16, 21:11:40](https://lobste.rs/s/zjq0nl/ty_extremely_fast_python_type_checker) - [ty: An extremely fast Python type checker and language server](https://astral.sh/blog/ty)
* [2025-12-16, 18:27:00](https://soylentnews.org/article.pl?sid=25/12/15/018209&amp;from=rss) - [New Review Highlights Urgent Need for Worldwide Smell Screening](https://soylentnews.org/article.pl?sid=25/12/15/018209&amp;from=rss)
* [2025-12-16, 13:45:00](https://soylentnews.org/article.pl?sid=25/12/15/016245&amp;from=rss) - [Kali Linux 2025.4 Ethical Hacking Distro Released With KDE Plasma 6.5, GNOME 49](https://soylentnews.org/article.pl?sid=25/12/15/016245&amp;from=rss)
* [2025-12-16, 09:02:00](https://soylentnews.org/article.pl?sid=25/12/15/014215&amp;from=rss) - [Scientists Discover Early Alzheimer&apos;s Warning Sign Hiding in Routine Brain Scans](https://soylentnews.org/article.pl?sid=25/12/15/014215&amp;from=rss)
* [2025-12-16, 04:15:00](https://soylentnews.org/article.pl?sid=25/12/13/1648208&amp;from=rss) - [U.S. Approves First Device to Treat Depression With Brain Stimulation at Home](https://soylentnews.org/article.pl?sid=25/12/13/1648208&amp;from=rss)
* [2025-12-15, 23:39:00](https://soylentnews.org/article.pl?sid=25/12/13/1642242&amp;from=rss) - [To Bop or to Sway? the Music Will Tell You](https://soylentnews.org/article.pl?sid=25/12/13/1642242&amp;from=rss)
* [2025-12-15, 19:01:00](https://soylentnews.org/article.pl?sid=25/12/13/1627258&amp;from=rss) - [A Speed Camera for the Universe](https://soylentnews.org/article.pl?sid=25/12/13/1627258&amp;from=rss)
* [2025-12-15, 17:10:08](https://news.ycombinator.com/item?id=46277233) - [Don MacKinnon: Why Simplicity Beats Cleverness in Software Design [audio]](https://maintainable.fm/episodes/don-mackinnon-why-simplicity-beats-cleverness-in-software-design)
* [2025-12-15, 14:11:00](https://soylentnews.org/article.pl?sid=25/12/13/1625224&amp;from=rss) - [Scientists Thought Parkinson’s Was in Our Genes. It Might Be in the Water](https://soylentnews.org/article.pl?sid=25/12/13/1625224&amp;from=rss)
* [2025-12-15, 10:03:18](https://news.ycombinator.com/item?id=46272454) - [Building a High-Performance OpenAPI Parser in Go](https://www.speakeasy.com/blog/building-speakeasy-openapi-go-library)
* [2025-12-15, 09:22:00](https://soylentnews.org/article.pl?sid=25/12/13/1619207&amp;from=rss) - [The State of Open Source Software in 2025](https://soylentnews.org/article.pl?sid=25/12/13/1619207&amp;from=rss)
* [2025-12-15, 05:54:28](https://news.ycombinator.com/item?id=46270918) - [Working quickly is more important than it seems (2015)](https://jsomers.net/blog/speed-matters)
* [2025-12-15, 04:45:00](https://soylentnews.org/article.pl?sid=25/12/13/1616219&amp;from=rss) - [What Time is It on Mars? NIST Physicists Have the Answer](https://soylentnews.org/article.pl?sid=25/12/13/1616219&amp;from=rss)
* [2025-12-14, 23:59:00](https://soylentnews.org/article.pl?sid=25/12/13/144230&amp;from=rss) - [System76 Launches First Stable Release of Rust-Based COSMIC Desktop and Pop!_OS 24.04 LTS](https://soylentnews.org/article.pl?sid=25/12/13/144230&amp;from=rss)
* [2025-12-14, 19:11:00](https://soylentnews.org/article.pl?sid=25/12/13/0439237&amp;from=rss) - [Big Tech Joins Forces With Linux Foundation to Standardize AI Agents](https://soylentnews.org/article.pl?sid=25/12/13/0439237&amp;from=rss)
* [2025-12-14, 14:26:00](https://soylentnews.org/article.pl?sid=25/12/13/0429235&amp;from=rss) - [Calibre Now Integrated With AI](https://soylentnews.org/article.pl?sid=25/12/13/0429235&amp;from=rss)
* [2025-12-14, 12:32:22](https://news.ycombinator.com/item?id=46262584) - [Fluent: A Localization System for Natural-Sounding Translations](https://projectfluent.org/)
* [2025-12-14, 09:36:00](https://soylentnews.org/article.pl?sid=25/12/13/0329247&amp;from=rss) - [Ultra-Thin Nanomembrane Device Forms Soft, Seamless Interface With Living Tissue](https://soylentnews.org/article.pl?sid=25/12/13/0329247&amp;from=rss)
* [2025-12-14, 04:46:00](https://soylentnews.org/article.pl?sid=25/12/13/0323237&amp;from=rss) - [When It All Comes Crashing Down: The Aftermath of the AI Boom](https://soylentnews.org/article.pl?sid=25/12/13/0323237&amp;from=rss)
* [2025-12-14, 00:04:00](https://soylentnews.org/article.pl?sid=25/12/13/0314229&amp;from=rss) - [A New Anonymous Phone Carrier Lets You Sign Up With Nothing but a Zip Code](https://soylentnews.org/article.pl?sid=25/12/13/0314229&amp;from=rss)
