# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Open Access Developments

* [Beginning January 2026, all ACM publications will be made open access](https://dl.acm.org/openaccess) - Starting in 2026, ACM will ensure all its publications are fully open access, promising broader accessibility to academic and scientific content. ([Comments](https://news.ycombinator.com/item?id=46313991))

* [Micron Says Memory Shortage Will 'Persist' Beyond 2026](https://it.slashdot.org/story/25/12/18/1529254/micron-says-memory-shortage-will-persist-beyond-2026?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The persistent memory chip shortage looms as Micron predicts challenges extending well into 2026. ([Comments](https://it.slashdot.org/story/25/12/18/1529254/micron-says-memory-shortage-will-persist-beyond-2026?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [systemd v259 Released](https://github.com/systemd/systemd/releases/tag/v259) - The latest release of systemd introduces various updates and improvements in system and service management. ([Comments](https://news.ycombinator.com/item?id=46313033))

* [The Tor Project is Making a Switch to Rust, Ditches C](https://soylentnews.org/article.pl?sid=25/12/17/0154226&from=rss) - The Tor Project is transitioning from using the C programming language to Rust, aiming for better safety and performance. ([Comments](https://soylentnews.org/article.pl?sid=25/12/17/0154226&from=rss))

* [Google Releases Gemini 3 Flash, Promising Improved Intelligence and Efficiency](https://tech.slashdot.org/story/25/12/17/2028231/google-releases-gemini-3-flash-promising-improved-intelligence-and-efficiency?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The tech giant reveals its newest AI model with enhancements in speed and operational effectiveness. ([Comments](https://tech.slashdot.org/story/25/12/17/2028231/google-releases-gemini-3-flash-promising-improved-intelligence-and-efficiency?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Health and Scientific Discoveries

* [Heart and Kidney Diseases and Type 2 Diabetes May Be One Ailment](https://www.scientificamerican.com/article/heart-and-kidney-diseases-plus-type-2-diabetes-may-be-one-illness-treatable/) - An emerging hypothesis suggests these chronic conditions share underlying mechanisms, paving the way for unified treatments. ([Comments](https://news.ycombinator.com/item?id=46313693))

* [Scientists Discover Early Alzheimer's Warning Sign Hiding in Routine Brain Scans](https://soylentnews.org/article.pl?sid=25/12/15/014215&from=rss) - A discovery in radiological imaging may serve as an early warning indicator for Alzheimer's disease. ([Comments](https://soylentnews.org/article.pl?sid=25/12/15/014215&from=rss))

* [After 50 Years, MIT Chemists Finally Synthesize Elusive Anti-Cancer Compound](https://soylentnews.org/article.pl?sid=25/12/17/0147256&from=rss) - Decades of persistent effort culminate in the synthesis of a compound with potential applications in cancer treatment. ([Comments](https://soylentnews.org/article.pl?sid=25/12/17/0147256&from=rss))

## AI and Software Innovations

* [AI helps ship faster but it produces 1.7× more bugs](https://www.coderabbit.ai/blog/state-of-ai-vs-human-code-generation-report) - A report explores the trade-offs between AI-assisted code generation speed and increased bug incidence. ([Comments](https://news.ycombinator.com/item?id=46312159))

* [Please Just Try Htmx](http://pleasejusttryhtmx.com/) - Promoting the use of HTMX, a front-end web framework that extends hypertext beyond traditional methods. ([Comments](https://news.ycombinator.com/item?id=46312973))

* [Virtualizing Nvidia HGX B200 GPUs with Open Source](https://www.ubicloud.com/blog/virtualizing-nvidia-hgx-b200-gpus-with-open-source) - Explains leveraging open-source solutions to optimize Nvidia GPU capabilities in virtualized environments. ([Comments](https://news.ycombinator.com/item?id=46312792))

* [lightning-extra: PyTorch Lightning plugins and utilities for cloud-native machine learning](https://github.com/ocramz/lightning-extra) - Enhancements in PyTorch Lightning's ecosystem with extensions for cloud machine learning. ([Comments](https://lobste.rs/s/lbvixt/lightning_extra_pytorch_lightning))

## Cultural and Socioeconomic Observations

* [After ruining a treasured water resource, Iran is drying up](https://e360.yale.edu/features/iran-water-drought-dams-qanats) - Chronic overuse of water resources and mismanagement exacerbate Iran's severe drought. ([Comments](https://news.ycombinator.com/item?id=46310976))

* [Spain fines Airbnb €65M: Why the government is cracking down on illegal rentals](https://www.euronews.com/travel/2025/12/15/spain-fines-airbnb-65-million-why-the-government-is-cracking-down-on-illegal-rentals) - Focused on curbing unauthorized rentals, Spanish authorities impose hefty fines on Airbnb. ([Comments](https://news.ycombinator.com/item?id=46313266))

* [The Oscars Will Abandon Broadcast TV For YouTube In 2029](https://news.slashdot.org/story/25/12/17/210247/the-oscars-will-abandon-broadcast-tv-for-youtube-in-2029?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A future shift to exclusively digital platforms indicates evolving audience preferences in entertainment consumption. ([Comments](https://news.slashdot.org/story/25/12/17/210247/the-oscars-will-abandon-broadcast-tv-for-youtube-in-2029?utm_source=rss1.0mainlinkanon&utm_medium=feed))

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

* [2025-12-18, 15:39:09](https://news.ycombinator.com/item?id=46313991) - [Beginning January 2026, all ACM publications will be made open access](https://dl.acm.org/openaccess)
* [2025-12-18, 15:35:52](https://news.ycombinator.com/item?id=46313930) - [Launch HN: Pulse (YC S24) – Production-grade unstructured document extraction](https://news.ycombinator.com/item?id=46313930)
* [2025-12-18, 15:29:00](https://it.slashdot.org/story/25/12/18/1529254/micron-says-memory-shortage-will-persist-beyond-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Micron Says Memory Shortage Will &apos;Persist&apos; Beyond 2026](https://it.slashdot.org/story/25/12/18/1529254/micron-says-memory-shortage-will-persist-beyond-2026?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-18, 15:23:05](https://news.ycombinator.com/item?id=46313693) - [Heart and Kidney Diseases and Type 2 Diabetes May Be One Ailment](https://www.scientificamerican.com/article/heart-and-kidney-diseases-plus-type-2-diabetes-may-be-one-illness-treatable/)
* [2025-12-18, 15:00:32](https://news.ycombinator.com/item?id=46313379) - [Using TypeScript to Obtain One of the Rarest License Plates](https://www.jack.bio/blog/licenseplate)
* [2025-12-18, 14:52:11](https://news.ycombinator.com/item?id=46313297) - [Your job is to deliver code you have proven to work](https://simonwillison.net/2025/Dec/18/code-proven-to-work/)
* [2025-12-18, 14:49:24](https://news.ycombinator.com/item?id=46313266) - [Spain fines Airbnb €65M: Why the government is cracking down on illegal rentals](https://www.euronews.com/travel/2025/12/15/spain-fines-airbnb-65-million-why-the-government-is-cracking-down-on-illegal-rentals)
* [2025-12-18, 14:47:00](https://news.slashdot.org/story/25/12/18/1447222/man-boards-heathrow-flight-without-passport-or-ticket?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Man Boards Heathrow Flight Without Passport or Ticket](https://news.slashdot.org/story/25/12/18/1447222/man-boards-heathrow-flight-without-passport-or-ticket?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-18, 14:38:09](https://lobste.rs/s/yme7vr/partial_inlining) - [Partial inlining](https://xania.org/202512/18-partial-inlining)
* [2025-12-18, 14:26:57](https://news.ycombinator.com/item?id=46313061) - [Are Apple gift cards safe to redeem?](https://daringfireball.net/linked/2025/12/17/are-apple-gift-cards-safe-to-redeem)
* [2025-12-18, 14:24:26](https://news.ycombinator.com/item?id=46313033) - [systemd v259 Released](https://github.com/systemd/systemd/releases/tag/v259)
* [2025-12-18, 14:18:52](https://news.ycombinator.com/item?id=46312973) - [Please Just Try Htmx](http://pleasejusttryhtmx.com/)
* [2025-12-18, 14:11:05](https://lobste.rs/s/h50lml/toml_1_1_0_released) - [TOML 1.1.0 released](https://github.com/toml-lang/toml/releases/tag/1.1.0)
* [2025-12-18, 14:04:03](https://news.ycombinator.com/item?id=46312792) - [Virtualizing Nvidia HGX B200 GPUs with Open Source](https://www.ubicloud.com/blog/virtualizing-nvidia-hgx-b200-gpus-with-open-source)
* [2025-12-18, 14:00:00](https://slashdot.org/story/25/12/18/140239/how-china-built-its-manhattan-project-to-rival-the-west-in-ai-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How China Built Its &apos;Manhattan Project&apos; To Rival the West in AI Chips](https://slashdot.org/story/25/12/18/140239/how-china-built-its-manhattan-project-to-rival-the-west-in-ai-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-18, 13:52:39](https://lobste.rs/s/hlqzhx/dear_acm_you_re_doing_ai_wrong_you_can_still) - [Dear ACM, you&apos;re doing AI wrong but you can still get it right](https://anil.recoil.org/notes/acm-ai-recs)
* [2025-12-18, 13:15:00](https://soylentnews.org/article.pl?sid=25/12/17/0154226&amp;from=rss) - [The Tor Project is Making a Switch to Rust, Ditches C](https://soylentnews.org/article.pl?sid=25/12/17/0154226&amp;from=rss)
* [2025-12-18, 13:10:05](https://lobste.rs/s/l6nsa1/remote_code_execution_via_nd6_router) - [Remote code execution via ND6 Router Advertisements](https://www.freebsd.org/security/advisories/FreeBSD-SA-25:12.rtsold.asc)
* [2025-12-18, 13:06:51](https://news.ycombinator.com/item?id=46312159) - [AI helps ship faster but it produces 1.7× more bugs](https://www.coderabbit.ai/blog/state-of-ai-vs-human-code-generation-report)
* [2025-12-18, 13:00:00](https://tech.slashdot.org/story/25/12/17/236241/doublespeed-hack-reveals-what-its-ai-generated-accounts-are-promoting?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Doublespeed Hack Reveals What Its AI-Generated Accounts Are Promoting](https://tech.slashdot.org/story/25/12/17/236241/doublespeed-hack-reveals-what-its-ai-generated-accounts-are-promoting?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-18, 12:50:23](https://news.ycombinator.com/item?id=46312021) - [Most parked domains now serving malicious content](https://krebsonsecurity.com/2025/12/most-parked-domains-now-serving-malicious-content/)
* [2025-12-18, 12:28:45](https://news.ycombinator.com/item?id=46311856) - [Classical statues were not painted horribly](https://worksinprogress.co/issue/were-classical-statues-painted-horribly/)
* [2025-12-18, 12:01:01](https://news.ycombinator.com/item?id=46311637) - [Hightouch (YC S19) Is Hiring](https://hightouch.com/careers)
* [2025-12-18, 11:21:15](https://news.ycombinator.com/item?id=46311355) - [Creating apps like Signal could be &apos;hostile activity&apos; claims UK watchdog](https://www.techradar.com/vpn/vpn-privacy-security/creating-apps-like-signal-or-whatsapp-could-be-hostile-activity-claims-uk-watchdog)
* [2025-12-18, 11:12:25](https://lobste.rs/s/eanubs/obs_studio_gets_new_renderer_how_obs) - [OBS Studio Gets A New Renderer: How OBS Adopted Metal](https://obsproject.com/blog/obs-studio-gets-a-new-renderer)
* [2025-12-18, 10:44:29](https://news.ycombinator.com/item?id=46311092) - [Slowness is a virtue](https://blog.jakobschwichtenberg.com/p/slowness-is-a-virtue)
* [2025-12-18, 10:33:03](https://lobste.rs/s/va2vtw/nvme_is_not_hard_disk_2021) - [NVME is not a hard disk (2021)](https://blog.koehntopp.info/2021/05/25/nvme-is-not-a-hard-disk.html)
* [2025-12-18, 10:27:05](https://news.ycombinator.com/item?id=46310976) - [After ruining a treasured water resource, Iran is drying up](https://e360.yale.edu/features/iran-water-drought-dams-qanats)
* [2025-12-18, 10:09:10](https://news.ycombinator.com/item?id=46310856) - [It&apos;s all about momentum](https://combo.cc/posts/its-all-about-momentum-innit/)
* [2025-12-18, 10:00:00](https://games.slashdot.org/story/25/12/17/2330210/video-game-hardware-sales-had-a-historically-bad-november-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Video Game Hardware Sales Had a Historically Bad November In the US](https://games.slashdot.org/story/25/12/17/2330210/video-game-hardware-sales-had-a-historically-bad-november-in-the-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-18, 09:40:07](https://news.ycombinator.com/item?id=46310650) - [Online Textbook for Braid groups and knots and tangles](https://matthematics.com/redoak/redoak.html)
* [2025-12-18, 08:45:26](https://lobste.rs/s/k9cyk3/microsoft_quietly_kills_intellicode) - [Microsoft quietly kills IntelliCode in favor of the paid Copilot](https://visualstudiomagazine.com/articles/2025/12/17/microsoft-quietly-kills-intellicode-as-ai-strategy-shifts-to-copilot.aspx)
* [2025-12-18, 08:38:00](https://soylentnews.org/article.pl?sid=25/12/17/0149259&amp;from=rss) - [Ford Cancels Electric F-150](https://soylentnews.org/article.pl?sid=25/12/17/0149259&amp;from=rss)
* [2025-12-18, 08:12:42](https://news.ycombinator.com/item?id=46310104) - [RCE via ND6 Router Advertisements in FreeBSD](https://www.freebsd.org/security/advisories/FreeBSD-SA-25:12.rtsold.asc)
* [2025-12-18, 07:56:26](https://lobste.rs/s/lbvixt/lightning_extra_pytorch_lightning) - [lightning-extra: PyTorch Lightning plugins and utilities for cloud-native machine learning](https://github.com/ocramz/lightning-extra)
* [2025-12-18, 07:00:00](https://science.slashdot.org/story/25/12/17/2322234/another-starship-clone-pops-up-in-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Another Starship Clone Pops Up In China](https://science.slashdot.org/story/25/12/17/2322234/another-starship-clone-pops-up-in-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-18, 06:40:29](https://news.ycombinator.com/item?id=46309571) - [What is an elliptic curve? (2019)](https://www.johndcook.com/blog/2019/02/21/what-is-an-elliptic-curve/)
* [2025-12-18, 06:08:23](https://news.ycombinator.com/item?id=46309407) - [Egyptian Hieroglyphs: Lesson 1](https://www.egyptianhieroglyphs.net/egyptian-hieroglyphs/lesson-1/)
* [2025-12-18, 05:43:50](https://lobste.rs/s/tcnstw/interactive_fluid_typography) - [Interactive Fluid Typography](https://electricmagicfactory.com/articles/interactive-fluid-typography/)
* [2025-12-18, 03:46:00](https://soylentnews.org/article.pl?sid=25/12/17/0147256&amp;from=rss) - [After 50 Years, MIT Chemists Finally Synthesize Elusive Anti-Cancer Compound](https://soylentnews.org/article.pl?sid=25/12/17/0147256&amp;from=rss)
* [2025-12-18, 03:31:33](https://lobste.rs/s/rd5yo9/ringspace_proposal_for_human_web) - [Ringspace: A Proposal for the Human Web](https://taggart-tech.com/ringspace/)
* [2025-12-18, 03:30:00](https://news.slashdot.org/story/25/12/17/2315236/mit-grieves-shooting-death-of-renowned-director-of-plasma-science-center?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [MIT Grieves Shooting Death of Renowned Director of Plasma Science Center](https://news.slashdot.org/story/25/12/17/2315236/mit-grieves-shooting-death-of-renowned-director-of-plasma-science-center?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-18, 02:11:30](https://lobste.rs/s/cbdrvp/multimedia_sketchpad) - [A Multimedia Sketchpad](https://beyondloom.com/blog/sketchpad.html)
* [2025-12-18, 00:50:00](https://science.slashdot.org/story/25/12/17/2240200/senate-confirms-billionaire-entrepreneur-jared-isaacman-as-new-nasa-chief?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Senate Confirms Billionaire Entrepreneur Jared Isaacman As New NASA Chief](https://science.slashdot.org/story/25/12/17/2240200/senate-confirms-billionaire-entrepreneur-jared-isaacman-as-new-nasa-chief?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-18, 00:10:00](https://news.slashdot.org/story/25/12/17/210247/the-oscars-will-abandon-broadcast-tv-for-youtube-in-2029?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Oscars Will Abandon Broadcast TV For YouTube In 2029](https://news.slashdot.org/story/25/12/17/210247/the-oscars-will-abandon-broadcast-tv-for-youtube-in-2029?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-18, 00:06:33](https://lobste.rs/s/kcfrr2/secure_local_configuration_kakoune) - [secure local configuration in kakoune](https://ficd.sh/blog/kak-secure-local-config/)
* [2025-12-17, 23:30:00](https://hardware.slashdot.org/story/25/12/17/2053256/meta-pauses-third-party-headset-program?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta &apos;Pauses&apos; Third-Party Headset Program](https://hardware.slashdot.org/story/25/12/17/2053256/meta-pauses-third-party-headset-program?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-17, 23:01:00](https://soylentnews.org/article.pl?sid=25/12/16/0745203&amp;from=rss) - [This Group Pays Bounties to Repair Broken Devices—Even If the Fix Breaks the Law](https://soylentnews.org/article.pl?sid=25/12/16/0745203&amp;from=rss)
* [2025-12-17, 22:50:00](https://games.slashdot.org/story/25/12/17/2049252/netflix-to-add-soccer-video-game-based-on-fifa-world-cup-next-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Netflix To Add Soccer Video Game Based On FIFA World Cup Next Year](https://games.slashdot.org/story/25/12/17/2049252/netflix-to-add-soccer-video-game-based-on-fifa-world-cup-next-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-17, 22:10:00](https://hardware.slashdot.org/story/25/12/17/2042247/github-is-going-to-start-charging-you-for-using-your-own-hardware?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GitHub Is Going To Start Charging You For Using Your Own Hardware](https://hardware.slashdot.org/story/25/12/17/2042247/github-is-going-to-start-charging-you-for-using-your-own-hardware?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-17, 21:30:00](https://it.slashdot.org/story/25/12/17/2034233/linux-kernel-rust-code-sees-its-first-cve-vulnerability?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux Kernel Rust Code Sees Its First CVE Vulnerability](https://it.slashdot.org/story/25/12/17/2034233/linux-kernel-rust-code-sees-its-first-cve-vulnerability?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-17, 21:13:33](https://news.ycombinator.com/item?id=46305585) - [I got hacked: My Hetzner server started mining Monero](https://blog.jakesaunders.dev/my-server-started-mining-monero-this-morning/)
* [2025-12-17, 20:30:00](https://tech.slashdot.org/story/25/12/17/2028231/google-releases-gemini-3-flash-promising-improved-intelligence-and-efficiency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Releases Gemini 3 Flash, Promising Improved Intelligence and Efficiency](https://tech.slashdot.org/story/25/12/17/2028231/google-releases-gemini-3-flash-promising-improved-intelligence-and-efficiency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-17, 20:21:25](https://news.ycombinator.com/item?id=46305008) - [Show HN: X Writer – VS Code extension to post tweets from your editor](https://github.com/Jawuilp/X-writer)
* [2025-12-17, 19:40:00](https://tech.slashdot.org/story/25/12/17/198250/browser-extensions-with-8-million-users-collect-extended-ai-conversations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Browser Extensions With 8 Million Users Collect Extended AI Conversations](https://tech.slashdot.org/story/25/12/17/198250/browser-extensions-with-8-million-users-collect-extended-ai-conversations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-17, 18:18:00](https://soylentnews.org/article.pl?sid=25/12/16/0740251&amp;from=rss) - [Norovirus Cases Surging in U.S.](https://soylentnews.org/article.pl?sid=25/12/16/0740251&amp;from=rss)
* [2025-12-17, 17:31:14](https://lobste.rs/s/nesn9g/linux_kernel_rust_code_sees_its_first_cve) - [Linux Kernel Rust Code Sees Its First CVE Vulnerability](https://www.phoronix.com/news/First-Linux-Rust-CVE)
* [2025-12-17, 16:42:13](https://news.ycombinator.com/item?id=46301851) - [Gemini 3 Flash: Frontier intelligence built for speed](https://blog.google/products/gemini/gemini-3-flash/)
* [2025-12-17, 16:09:19](https://lobste.rs/s/wgnk1u/what_does_database_for_ssds_look_like) - [What Does a Database for SSDs Look Like?](https://brooker.co.za/blog/2025/12/15/database-for-ssd.html)
* [2025-12-17, 15:33:24](https://lobste.rs/s/8gnr4x/maintaining_open_source_software_during) - [Maintaining an open source software during Hacktoberfest](https://crocidb.com/post/maintaining-an-oss-during-hacktoberfest/)
* [2025-12-17, 14:53:27](https://lobste.rs/s/lzfzzi/asahi_linux_progress_report_linux_6_18) - [Asahi Linux Progress Report: Linux 6.18](https://asahilinux.org/2025/12/progress-report-6-18/)
* [2025-12-17, 14:42:31](https://lobste.rs/s/knox4u/how_did_irc_ping_timeouts_end_up_lawsuit) - [How did IRC ping timeouts end up in a lawsuit?](https://mjg59.dreamwidth.org/73777.html)
* [2025-12-17, 13:38:51](https://lobste.rs/s/csp9j1/original_mozilla_dinosaur_logo_artwork) - [The original Mozilla \&quot;Dinosaur\&quot; logo artwork](https://www.jwz.org/blog/2025/12/the-original-mozilla-dinosaur-logo-artwork/)
* [2025-12-17, 13:34:00](https://soylentnews.org/article.pl?sid=25/12/16/0735240&amp;from=rss) - [Verizon Refused to Unlock Man&apos;s iPhone, So He Sued the Carrier and Won](https://soylentnews.org/article.pl?sid=25/12/16/0735240&amp;from=rss)
* [2025-12-17, 13:10:05](https://lobste.rs/s/ammoxm/yep_passkeys_still_have_problems) - [Yep, Passkeys Still Have Problems](https://fy.blackhats.net.au/blog/2025-12-17-yep-passkeys-still-have-problems/)
* [2025-12-17, 12:15:24](https://lobste.rs/s/baxkxn/how_twitter_is_probably_crawling) - [How Twitter is (probably) crawling the Internet for AI](https://kitsunemimi.pw/notes/posts/how-twitter-is-probably-crawling-the-internet-for-ai.html)
* [2025-12-17, 12:06:54](https://lobste.rs/s/2lnu5u/log_level_error_should_mean_something) - [Log level &apos;error&apos; should mean that something needs to be fixed](https://utcc.utoronto.ca/~cks/space/blog/programming/ErrorsShouldRequireFixing)
* [2025-12-17, 09:29:30](https://lobste.rs/s/glwlvx/survey_dynamic_array_structures) - [A Survey of Dynamic Array Structures](https://azmr.uk/dyn/)
* [2025-12-17, 08:49:35](https://lobste.rs/s/igmbgy/keeping_secrets_less_than_two_weeks_ago) - [Keeping secrets, or (less than two weeks ago)](https://kellett.im/a/keeping-secrets)
* [2025-12-17, 08:48:00](https://soylentnews.org/article.pl?sid=25/12/16/0725206&amp;from=rss) - [A Simple Pill Could Replace Injections for Treating Gonorrhea](https://soylentnews.org/article.pl?sid=25/12/16/0725206&amp;from=rss)
* [2025-12-17, 06:43:21](https://lobste.rs/s/l5nep0/opus_1_6_released) - [Opus 1.6 Released](https://opus-codec.org/demo/opus-1.6/)
* [2025-12-17, 04:03:00](https://soylentnews.org/article.pl?sid=25/12/16/0718227&amp;from=rss) - [Australians Install 100,000 Home Battery Systems in 17 Weeks, and They Are Getting Bigger](https://soylentnews.org/article.pl?sid=25/12/16/0718227&amp;from=rss)
* [2025-12-16, 23:18:00](https://soylentnews.org/article.pl?sid=25/12/15/0110223&amp;from=rss) - [Breaking a 50-Year Law: New Evidence Challenges Fundamental Black Hole Physics](https://soylentnews.org/article.pl?sid=25/12/15/0110223&amp;from=rss)
* [2025-12-16, 21:11:40](https://lobste.rs/s/zjq0nl/ty_extremely_fast_python_type_checker) - [ty: An extremely fast Python type checker and language server](https://astral.sh/blog/ty)
* [2025-12-16, 18:27:00](https://soylentnews.org/article.pl?sid=25/12/15/018209&amp;from=rss) - [New Review Highlights Urgent Need for Worldwide Smell Screening](https://soylentnews.org/article.pl?sid=25/12/15/018209&amp;from=rss)
* [2025-12-16, 13:45:00](https://soylentnews.org/article.pl?sid=25/12/15/016245&amp;from=rss) - [Kali Linux 2025.4 Ethical Hacking Distro Released With KDE Plasma 6.5, GNOME 49](https://soylentnews.org/article.pl?sid=25/12/15/016245&amp;from=rss)
* [2025-12-16, 09:02:00](https://soylentnews.org/article.pl?sid=25/12/15/014215&amp;from=rss) - [Scientists Discover Early Alzheimer&apos;s Warning Sign Hiding in Routine Brain Scans](https://soylentnews.org/article.pl?sid=25/12/15/014215&amp;from=rss)
* [2025-12-16, 04:15:00](https://soylentnews.org/article.pl?sid=25/12/13/1648208&amp;from=rss) - [U.S. Approves First Device to Treat Depression With Brain Stimulation at Home](https://soylentnews.org/article.pl?sid=25/12/13/1648208&amp;from=rss)
* [2025-12-15, 23:39:00](https://soylentnews.org/article.pl?sid=25/12/13/1642242&amp;from=rss) - [To Bop or to Sway? the Music Will Tell You](https://soylentnews.org/article.pl?sid=25/12/13/1642242&amp;from=rss)
* [2025-12-15, 19:01:00](https://soylentnews.org/article.pl?sid=25/12/13/1627258&amp;from=rss) - [A Speed Camera for the Universe](https://soylentnews.org/article.pl?sid=25/12/13/1627258&amp;from=rss)
* [2025-12-15, 14:11:00](https://soylentnews.org/article.pl?sid=25/12/13/1625224&amp;from=rss) - [Scientists Thought Parkinson’s Was in Our Genes. It Might Be in the Water](https://soylentnews.org/article.pl?sid=25/12/13/1625224&amp;from=rss)
* [2025-12-15, 09:22:00](https://soylentnews.org/article.pl?sid=25/12/13/1619207&amp;from=rss) - [The State of Open Source Software in 2025](https://soylentnews.org/article.pl?sid=25/12/13/1619207&amp;from=rss)
* [2025-12-15, 05:54:28](https://news.ycombinator.com/item?id=46270918) - [Working quickly is more important than it seems (2015)](https://jsomers.net/blog/speed-matters)
* [2025-12-15, 04:45:00](https://soylentnews.org/article.pl?sid=25/12/13/1616219&amp;from=rss) - [What Time is It on Mars? NIST Physicists Have the Answer](https://soylentnews.org/article.pl?sid=25/12/13/1616219&amp;from=rss)
* [2025-12-15, 01:57:54](https://news.ycombinator.com/item?id=46269507) - [The Big City; Save the Flophouses (1996)](https://www.nytimes.com/1996/01/14/magazine/the-big-city-save-the-flophouses.html)
* [2025-12-14, 23:59:00](https://soylentnews.org/article.pl?sid=25/12/13/144230&amp;from=rss) - [System76 Launches First Stable Release of Rust-Based COSMIC Desktop and Pop!_OS 24.04 LTS](https://soylentnews.org/article.pl?sid=25/12/13/144230&amp;from=rss)
* [2025-12-14, 19:11:00](https://soylentnews.org/article.pl?sid=25/12/13/0439237&amp;from=rss) - [Big Tech Joins Forces With Linux Foundation to Standardize AI Agents](https://soylentnews.org/article.pl?sid=25/12/13/0439237&amp;from=rss)
* [2025-12-14, 14:26:00](https://soylentnews.org/article.pl?sid=25/12/13/0429235&amp;from=rss) - [Calibre Now Integrated With AI](https://soylentnews.org/article.pl?sid=25/12/13/0429235&amp;from=rss)
* [2025-12-14, 11:16:52](https://news.ycombinator.com/item?id=46262294) - [Show HN: A local-first memory store for LLM agents (SQLite)](https://github.com/CaviraOSS/OpenMemory)
* [2025-12-14, 09:36:00](https://soylentnews.org/article.pl?sid=25/12/13/0329247&amp;from=rss) - [Ultra-Thin Nanomembrane Device Forms Soft, Seamless Interface With Living Tissue](https://soylentnews.org/article.pl?sid=25/12/13/0329247&amp;from=rss)
* [2025-12-14, 04:46:00](https://soylentnews.org/article.pl?sid=25/12/13/0323237&amp;from=rss) - [When It All Comes Crashing Down: The Aftermath of the AI Boom](https://soylentnews.org/article.pl?sid=25/12/13/0323237&amp;from=rss)
* [2025-12-14, 00:04:00](https://soylentnews.org/article.pl?sid=25/12/13/0314229&amp;from=rss) - [A New Anonymous Phone Carrier Lets You Sign Up With Nothing but a Zip Code](https://soylentnews.org/article.pl?sid=25/12/13/0314229&amp;from=rss)
