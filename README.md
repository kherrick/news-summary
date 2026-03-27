# [News Summary](https://kherrick.github.io/news-summary/)

## Cybersecurity Incidents and Investigations

* [European Commission Investigating Breach After Amazon Cloud Account Hack](https://it.slashdot.org/story/26/03/27/2114234/european-commission-investigating-breach-after-amazon-cloud-account-hack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The European Commission is investigating a potential data breach that involved an Amazon Cloud account being hacked into.

* [DOJ confirms FBI Director Kash Patel's personal email was hacked](https://arstechnica.com/tech-policy/2026/03/doj-confirms-fbi-director-kash-patels-personal-email-was-hacked/) - The Department of Justice confirms that the personal email account of FBI Director Kash Patel was compromised by hackers.

* [Iran-Linked Hackers Breach FBI Director's Personal Email](https://yro.slashdot.org/story/26/03/27/1813256/iran-linked-hackers-breach-fbi-directors-personal-email?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Iran-linked hackers were behind the recent attack compromising the personal email account of the FBI director.

* [Popular LiteLLM PyPI Package Backdoored To Steal Credentials, Auth Tokens](https://it.slashdot.org/story/26/03/27/1527202/popular-litellm-pypi-package-backdoored-to-steal-credentials-auth-tokens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A widely-used PyPI package named LiteLLM has been found to contain backdoors designed to steal user credentials and authentication tokens.

## Technology and Infrastructure Developments

* [Velxio 2.0 – Emulate Arduino, ESP32, and Raspberry Pi 3 in the Browser](https://github.com/davidmonterocrespo24/velxio) - The release of Velxio 2.0 simplifies the emulation of Arduino, ESP32, and Raspberry Pi 3 boards directly in a web browser.

* [Austria Plans Social Media Ban For Under-14s](https://tech.slashdot.org/story/26/03/27/1826207/austria-plans-social-media-ban-for-under-14s?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Austria is considering a legal initiative to limit social media access for individuals under 14 years old.

* [Windows PCs Crash Three Times As Often As Macs, Report Says](https://apple.slashdot.org/story/26/03/27/1839246/windows-pcs-crash-three-times-as-often-as-macs-report-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A report highlights the reliability gap between Windows PCs and Macs, with Windows devices experiencing triple the crash rate compared to Macs.

## Ethical, Legal, and Social Challenges

* [Concerns Raised Over Shahed Kamikaze Drone Listings on Alibaba](https://soylentnews.org/article.pl?sid=26/03/26/0634229&amp;from=rss) - Listings for Shahed kamikaze drones appearing on Alibaba’s platform have raised international security concerns.

* [California Bill Would Require Parent Bloggers To Delete Content of Minors On Social Media](https://tech.slashdot.org/story/26/03/27/157209/california-bill-would-require-parent-bloggers-to-delete-content-of-minors-on-social-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A new California bill aims to mandate that parent bloggers delete any online content related to minors upon request.

* [Make macOS consistently bad (unironically)](https://lr0.org/blog/p/macos/) - A satirical critique discusses recurring frustrations about macOS's functionality and design.

* [Capability-Based Security for Redox: Namespace and CWD as Capabilities](https://www.redox-os.org/news/nlnet-cap-nsmgr-cwd/) - Redox OS developers explore the innovative use of capability-based security for enhanced namespace and current working directory management.

## Innovative Projects and Developments

* [cssDOOM](https://cssdoom.wtf/) - A creative developer crafts a playable version of the classic video game DOOM entirely in CSS.

* [A one-line Kubernetes fix that saved 600 hours a year](https://blog.cloudflare.com/one-line-kubernetes-fix-saved-600-hours-a-year/) - Cloudflare reveals how a minor tweak in Kubernetes workflow led to substantial time savings annually.

* [Immich vs Ente Photos - The Photo Backup Showdown](https://alexandmanu.com/blog/immich-vs-ente-photos/) - A detailed comparison of two photo backup solutions, Immich and Ente Photos, sheds light on features and reliability.

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

* [2026-03-27, 22:00:00](https://it.slashdot.org/story/26/03/27/2114234/european-commission-investigating-breach-after-amazon-cloud-account-hack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [European Commission Investigating Breach After Amazon Cloud Account Hack](https://it.slashdot.org/story/26/03/27/2114234/european-commission-investigating-breach-after-amazon-cloud-account-hack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-27, 21:50:00](https://soylentnews.org/article.pl?sid=26/03/26/0634229&amp;from=rss) - [Concerns Raised Over Shahed Kamikaze Drone Listings on Alibaba](https://soylentnews.org/article.pl?sid=26/03/26/0634229&amp;from=rss)
* [2026-03-27, 21:41:41](https://news.ycombinator.com/item?id=47548670) - [DOJ confirms FBI Director Kash Patel&apos;s personal email was hacked](https://arstechnica.com/tech-policy/2026/03/doj-confirms-fbi-director-kash-patels-personal-email-was-hacked/)
* [2026-03-27, 21:04:51](https://news.ycombinator.com/item?id=47548243) - [If you don&apos;t opt out by Apr 24 GitHub will train on your private repos](https://news.ycombinator.com/item?id=47548243)
* [2026-03-27, 21:00:00](https://apple.slashdot.org/story/26/03/27/1839246/windows-pcs-crash-three-times-as-often-as-macs-report-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Windows PCs Crash Three Times As Often As Macs, Report Says](https://apple.slashdot.org/story/26/03/27/1839246/windows-pcs-crash-three-times-as-often-as-macs-report-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-27, 20:51:03](https://news.ycombinator.com/item?id=47548087) - [Slovenia becomes first EU country to introduce fuel rationing](https://www.bbc.com/news/articles/c77m4zx6zvmo)
* [2026-03-27, 20:44:33](https://news.ycombinator.com/item?id=47548013) - [Velxio 2.0 – Emulate Arduino, ESP32, and Raspberry Pi 3 in the Browser](https://github.com/davidmonterocrespo24/velxio)
* [2026-03-27, 20:09:14](https://lobste.rs/s/j4hrbx/vibe_coded_ext4_for_openbsd) - [Vibe-coded ext4 for OpenBSD](https://lwn.net/SubscriberLink/1064541/1a399d572a046fb9/)
* [2026-03-27, 20:09:12](https://lobste.rs/s/qtu40j/comforting_lie_sha_pinning) - [The Comforting Lie Of SHA Pinning](https://www.vaines.org/posts/2026-03-24-the-comforting-lie-of-sha-pinning/)
* [2026-03-27, 20:02:05](https://news.ycombinator.com/item?id=47547508) - [ISBN Visualization – Annas Archive](https://annas-archive.gd/isbn-visualization?)
* [2026-03-27, 20:00:00](https://tech.slashdot.org/story/26/03/27/1826207/austria-plans-social-media-ban-for-under-14s?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Austria Plans Social Media Ban For Under-14s](https://tech.slashdot.org/story/26/03/27/1826207/austria-plans-social-media-ban-for-under-14s?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-27, 19:43:28](https://lobste.rs/s/2zlp7e/how_make_programming_terrible_for) - [how to make programming terrible for everyone](https://jneen.ca/posts/2026-03-27-how-to-make-programming-terrible-for-everyone/)
* [2026-03-27, 19:25:37](https://lobste.rs/s/bhtmcw/profiler_performance_engineering_story) - [Profiler Performance Engineering: A Story of What It Does and Doesn&apos;t Show](https://redhatperf.github.io/post/the-profiler-performance-engineering/)
* [2026-03-27, 19:22:41](https://lobste.rs/s/zcqrvb/you_have_know_what_wish_for) - [You have to know what to wish for](https://www.neversaw.us/2026/03/26/you-have-to-know-what-to-wish-for/)
* [2026-03-27, 19:15:19](https://news.ycombinator.com/item?id=47547009) - [Make macOS consistently bad (unironically)](https://lr0.org/blog/p/macos/)
* [2026-03-27, 19:06:44](https://news.ycombinator.com/item?id=47546911) - [Capability-Based Security for Redox: Namespace and CWD as Capabilities](https://www.redox-os.org/news/nlnet-cap-nsmgr-cwd/)
* [2026-03-27, 19:00:00](https://yro.slashdot.org/story/26/03/27/1813256/iran-linked-hackers-breach-fbi-directors-personal-email?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Iran-Linked Hackers Breach FBI Director&apos;s Personal Email](https://yro.slashdot.org/story/26/03/27/1813256/iran-linked-hackers-breach-fbi-directors-personal-email?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-27, 18:38:45](https://lobste.rs/s/x7re3z/pondering_effects) - [Pondering Effects](https://wiki.alopex.li/PonderingEffects)
* [2026-03-27, 18:00:00](https://it.slashdot.org/story/26/03/27/1527202/popular-litellm-pypi-package-backdoored-to-steal-credentials-auth-tokens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Popular LiteLLM PyPI Package Backdoored To Steal Credentials, Auth Tokens](https://it.slashdot.org/story/26/03/27/1527202/popular-litellm-pypi-package-backdoored-to-steal-credentials-auth-tokens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-27, 17:00:00](https://slashdot.org/story/26/03/27/1514235/number-of-ai-chatbots-ignoring-human-instructions-increasing-study-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Number of AI Chatbots Ignoring Human Instructions Increasing, Study Says](https://slashdot.org/story/26/03/27/1514235/number-of-ai-chatbots-ignoring-human-instructions-increasing-study-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-27, 16:56:16](https://lobste.rs/s/abrpfr/tailscale_d_into_homelabbing) - [Tailscale’d Into Homelabbing](https://rugu.dev/en/blog/homelabbing_01/)
* [2026-03-27, 16:33:46](https://lobste.rs/s/pvym1k/cssdoom) - [cssDOOM](https://cssdoom.wtf/)
* [2026-03-27, 16:04:49](https://lobste.rs/s/4lntz7/bigoish_test_empirical_computational) - [Bigoish: Test the empirical computational complexity of Rust algorithms](https://docs.rs/bigoish/)
* [2026-03-27, 16:03:00](https://soylentnews.org/article.pl?sid=26/03/26/0225217&amp;from=rss) - [Palantir Trial Plugs Into UK Financial Watchdog&apos;s Data Trove](https://soylentnews.org/article.pl?sid=26/03/26/0225217&amp;from=rss)
* [2026-03-27, 16:00:00](https://tech.slashdot.org/story/26/03/27/157209/california-bill-would-require-parent-bloggers-to-delete-content-of-minors-on-social-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California Bill Would Require Parent Bloggers To Delete Content of Minors On Social Media](https://tech.slashdot.org/story/26/03/27/157209/california-bill-would-require-parent-bloggers-to-delete-content-of-minors-on-social-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-27, 15:46:50](https://news.ycombinator.com/item?id=47544238) - [The Future of SCIP](https://sourcegraph.com/blog/the-future-of-scip)
* [2026-03-27, 15:36:17](https://lobste.rs/s/jxqn5s/one_line_kubernetes_fix_saved_600_hours) - [A one-line Kubernetes fix that saved 600 hours a year](https://blog.cloudflare.com/one-line-kubernetes-fix-saved-600-hours-a-year/)
* [2026-03-27, 15:31:20](https://news.ycombinator.com/item?id=47543943) - [Desk for people who work at home with a cat](https://soranews24.com/2026/03/27/japan-now-has-a-special-desk-for-people-who-work-at-home-with-a-pet-catphotos/)
* [2026-03-27, 15:31:02](https://lobste.rs/s/kpznsv/firefox_gtk_emoji_picker) - [Firefox &amp; Gtk Emoji picker](https://mastransky.wordpress.com/2026/03/20/firefox-gtk-emoji-picker/)
* [2026-03-27, 15:24:57](https://lobste.rs/s/fbgxkb/uses_for_nested_promises) - [Uses for nested promises](https://blog.jcoglan.com//2026/03/23/uses-for-nested-promises/)
* [2026-03-27, 15:00:00](https://yro.slashdot.org/story/26/03/27/0047211/judge-blocks-pentagons-effort-to-punish-anthropic-with-supply-chain-risk-label?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Judge Blocks Pentagon&apos;s Effort To &apos;Punish&apos; Anthropic With Supply Chain Risk Label](https://yro.slashdot.org/story/26/03/27/0047211/judge-blocks-pentagons-effort-to-punish-anthropic-with-supply-chain-risk-label?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-27, 14:41:02](https://news.ycombinator.com/item?id=47543204) - [Meow.camera](https://meow.camera/#4258783365322591678)
* [2026-03-27, 14:35:45](https://news.ycombinator.com/item?id=47543139) - [Anatomy of the .claude/ folder](https://blog.dailydoseofds.com/p/anatomy-of-the-claude-folder)
* [2026-03-27, 13:54:35](https://news.ycombinator.com/item?id=47542695) - [People inside Microsoft are fighting to drop mandatory Microsoft Account](https://www.windowscentral.com/microsoft/windows-11/people-inside-microsoft-are-fighting-to-drop-windows-11s-mandatory-microsoft-account-requirements-during-setup)
* [2026-03-27, 13:53:41](https://lobste.rs/s/noyefo/c_preprocessor_tricks_tips_idioms) - [C Preprocessor tricks, tips, and idioms](https://github.com/pfultz2/Cloak/wiki/C-Preprocessor-tricks,-tips,-and-idioms)
* [2026-03-27, 13:49:51](https://news.ycombinator.com/item?id=47542644) - [Installing a Let&apos;s Encrypt TLS certificate on a Brother printer with Certbot](https://owltec.ca/Other/Installing+a+Let%27s+Encrypt+TLS+certificate+on+a+Brother+printer+automatically+with+Certbot+(%26+Cloudflare))
* [2026-03-27, 13:07:14](https://lobste.rs/s/op46vm/hold_on_your_hardware) - [Hold on to Your Hardware](https://xn--gckvb8fzb.com/hold-on-to-your-hardware/)
* [2026-03-27, 13:05:11](https://lobste.rs/s/he46nq/distraction_free_writing_with_micro) - [Distraction-Free Writing with the Micro Journal Rev.2 (and Neovim)](https://www.ssp.sh/brain/my-distraction-free-typewriter-micro-journal/)
* [2026-03-27, 13:03:06](https://lobste.rs/s/ucp0wf/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/ucp0wf/what_are_you_doing_this_weekend)
* [2026-03-27, 11:29:15](https://lobste.rs/s/pxnyf9/immich_vs_ente_photos_photo_backup) - [immich vs ente photos - the photo backup showdown](https://alexandmanu.com/blog/immich-vs-ente-photos/)
* [2026-03-27, 11:20:00](https://soylentnews.org/article.pl?sid=26/03/26/0220234&amp;from=rss) - [Amid Fuel Crunch, Cuban Mechanic Converts Car to Run on Charcoal](https://soylentnews.org/article.pl?sid=26/03/26/0220234&amp;from=rss)
* [2026-03-27, 11:00:00](https://slashdot.org/story/26/03/26/2239249/openai-abandons-chatgpts-erotic-mode?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Abandons ChatGPT&apos;s Erotic Mode](https://slashdot.org/story/26/03/26/2239249/openai-abandons-chatgpts-erotic-mode?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-27, 10:27:28](https://news.ycombinator.com/item?id=47540929) - [Should QA exist?](https://www.rubick.com/should-qa-exist/)
* [2026-03-27, 10:10:41](https://news.ycombinator.com/item?id=47540833) - [Hold on to Your Hardware](https://xn--gckvb8fzb.com/hold-on-to-your-hardware/)
* [2026-03-27, 09:26:19](https://lobste.rs/s/vtqrep/jsongrep_is_faster_than_jq_jmespath) - [jsongrep is faster than {jq, jmespath, jsonpath-rust, jql}](https://micahkepe.com/blog/jsongrep/)
* [2026-03-27, 08:57:02](https://news.ycombinator.com/item?id=47540388) - [Telnyx package compromised on PyPI](https://telnyx.com/resources/telnyx-python-sdk-supply-chain-security-notice-march-2026)
* [2026-03-27, 08:55:43](https://news.ycombinator.com/item?id=47540383) - [‘Energy independence feels practical’: Europeans building mini solar farms](https://www.euronews.com/2026/03/26/suddenly-energy-independence-feels-practical-europeans-are-building-mini-solar-farms-at-ho)
* [2026-03-27, 07:12:26](https://news.ycombinator.com/item?id=47539825) - [A Faster Alternative to Jq](https://micahkepe.com/blog/jsongrep/)
* [2026-03-27, 07:00:00](https://science.slashdot.org/story/26/03/26/2219203/cern-to-host-europes-flagship-open-access-publishing-platform?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [CERN To Host Europe&apos;s Flagship Open Access Publishing Platform](https://science.slashdot.org/story/26/03/26/2219203/cern-to-host-europes-flagship-open-access-publishing-platform?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-27, 06:51:01](https://lobste.rs/s/9l6ggc/how_i_built_open_world_engine_for_n64) - [How I Built an Open-World Engine for the N64](https://www.youtube.com/watch?v=lXxmIw9axWw)
* [2026-03-27, 06:38:00](https://soylentnews.org/article.pl?sid=26/03/26/0219214&amp;from=rss) - [The US Bans All New Foreign-Made Network Routers](https://soylentnews.org/article.pl?sid=26/03/26/0219214&amp;from=rss)
* [2026-03-27, 06:32:57](https://lobste.rs/s/suqhsn/scaling_monolith_1m_loc_113_pragmatic) - [Scaling a Monolith to 1M LOC: 113 Pragmatic Lessons from Tech Lead to CTO](https://www.semicolonandsons.com/articles/scaling-a-monolith-to-1m-loc-113-pragmatic-lessons-from-tech-lead-to-cto)
* [2026-03-27, 04:47:15](https://news.ycombinator.com/item?id=47539188) - [Schedule tasks on the web](https://code.claude.com/docs/en/web-scheduled-tasks)
* [2026-03-27, 03:55:32](https://lobste.rs/s/tkofyq/ip_addresses_through_2025) - [IP addresses through 2025](https://blog.apnic.net/2026/01/20/ip-addresses-through-2025/)
* [2026-03-27, 03:30:00](https://yro.slashdot.org/story/26/03/26/2146255/apple-gives-fbi-a-users-real-name-hidden-behind-hide-my-email-feature?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Gives FBI a User&apos;s Real Name Hidden Behind &apos;Hide My Email&apos; Feature](https://yro.slashdot.org/story/26/03/26/2146255/apple-gives-fbi-a-users-real-name-hidden-behind-hide-my-email-feature?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-27, 01:55:00](https://soylentnews.org/article.pl?sid=26/03/26/0217248&amp;from=rss) - [TCL&apos;s German QLED Ban Puts Pressure on TV Brands to be More Honest About QDs](https://soylentnews.org/article.pl?sid=26/03/26/0217248&amp;from=rss)
* [2026-03-26, 23:00:00](https://hardware.slashdot.org/story/26/03/26/224256/apple-discontinues-mac-pro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Discontinues Mac Pro](https://hardware.slashdot.org/story/26/03/26/224256/apple-discontinues-mac-pro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-26, 22:00:00](https://yro.slashdot.org/story/26/03/26/1925222/senators-demand-to-know-how-much-energy-data-centers-use?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Senators Demand to Know How Much Energy Data Centers Use](https://yro.slashdot.org/story/26/03/26/1925222/senators-demand-to-know-how-much-energy-data-centers-use?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-26, 21:05:00](https://soylentnews.org/article.pl?sid=26/03/25/2355253&amp;from=rss) - [Supreme Court Says Internet Service Provider Isn&apos;t Liable for Bootlegged Music Downloads](https://soylentnews.org/article.pl?sid=26/03/25/2355253&amp;from=rss)
* [2026-03-26, 21:00:00](https://slashdot.org/story/26/03/26/1918233/jpmorgan-starts-monitoring-investment-banker-screen-time-to-prevent-burnout?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [JPMorgan Starts Monitoring Investment Banker Screen Time To Prevent Burnout](https://slashdot.org/story/26/03/26/1918233/jpmorgan-starts-monitoring-investment-banker-screen-time-to-prevent-burnout?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-26, 20:20:03](https://lobste.rs/s/haqvra/ssereload_1_introduction) - [ssereload(1) introduction](https://timmarinin.net/2026/ssereload/)
* [2026-03-26, 20:00:00](https://entertainment.slashdot.org/story/26/03/26/197231/vizio-tvs-now-require-walmart-accounts-for-smart-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Vizio TVs Now Require Walmart Accounts For Smart Features](https://entertainment.slashdot.org/story/26/03/26/197231/vizio-tvs-now-require-walmart-accounts-for-smart-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-26, 19:41:26](https://lobste.rs/s/i7z3ru/eyg_is_now_open_source) - [EYG is now open source](https://eyg.run/news/editions/6)
* [2026-03-26, 18:35:36](https://lobste.rs/s/znjvvf/i_can_t_see_apple_s_vision) - [I can&apos;t See Apple&apos;s Vision](https://matduggan.com/i-cant-see-apples-vision/)
* [2026-03-26, 18:30:20](https://lobste.rs/s/ob2ijp/rocm_7_1_1_you_can_not_build) - [ROCm 7.1.1: you can (not) build](https://lunnova.dev/articles/rocm-711-you-can-not-build/)
* [2026-03-26, 18:03:43](https://news.ycombinator.com/item?id=47533709) - [Building FireStriker: Making Civic Tech Free](https://firestriker.org/blog/building-firestriker-why-im-making-civic-tech-free)
* [2026-03-26, 16:23:00](https://soylentnews.org/article.pl?sid=26/03/25/2344247&amp;from=rss) - [Tech Employees Are Reportedly Being Evaluated by How Fast They Burn Through LLM Tokens](https://soylentnews.org/article.pl?sid=26/03/25/2344247&amp;from=rss)
* [2026-03-26, 11:40:00](https://soylentnews.org/article.pl?sid=26/03/25/2341257&amp;from=rss) - [Micron Predicts That Cars Will Need 300GB of RAM](https://soylentnews.org/article.pl?sid=26/03/25/2341257&amp;from=rss)
* [2026-03-26, 06:59:00](https://soylentnews.org/article.pl?sid=26/03/25/2339207&amp;from=rss) - [The Mystery of How Volcanic Lightning Happens Has Been Solved](https://soylentnews.org/article.pl?sid=26/03/25/2339207&amp;from=rss)
* [2026-03-26, 02:12:00](https://soylentnews.org/article.pl?sid=26/03/23/163239&amp;from=rss) - [NASA Sets &apos;Impossible&apos; Ground Rules for Relocation of &apos;Flown Space Vehicle&apos;](https://soylentnews.org/article.pl?sid=26/03/23/163239&amp;from=rss)
* [2026-03-25, 22:20:47](https://news.ycombinator.com/item?id=47524051) - [21,864 Yugoslavian .yu domains](https://jacobfilipp.com/yu/)
* [2026-03-25, 21:26:00](https://soylentnews.org/article.pl?sid=26/03/23/1558231&amp;from=rss) - [The 49MB Web Page](https://soylentnews.org/article.pl?sid=26/03/23/1558231&amp;from=rss)
* [2026-03-25, 16:41:00](https://soylentnews.org/article.pl?sid=26/03/23/1555204&amp;from=rss) - [OpenAI Delays AI Porn Feature Over Safety Uproar](https://soylentnews.org/article.pl?sid=26/03/23/1555204&amp;from=rss)
* [2026-03-25, 11:55:00](https://soylentnews.org/article.pl?sid=26/03/23/1550203&amp;from=rss) - [I Hacked ChatGPT and Google&apos;s AI](https://soylentnews.org/article.pl?sid=26/03/23/1550203&amp;from=rss)
* [2026-03-25, 07:08:00](https://soylentnews.org/article.pl?sid=26/03/23/1543235&amp;from=rss) - [The FBI is Buying Americans’ Location Data](https://soylentnews.org/article.pl?sid=26/03/23/1543235&amp;from=rss)
* [2026-03-25, 02:23:00](https://soylentnews.org/article.pl?sid=26/03/23/0124221&amp;from=rss) - [Particle Discovered at CERN Solves a 20-Year-Old Mystery](https://soylentnews.org/article.pl?sid=26/03/23/0124221&amp;from=rss)
* [2026-03-24, 21:36:00](https://soylentnews.org/article.pl?sid=26/03/23/0118220&amp;from=rss) - [FBI Surveils Russia’s Elite Agents Through Google Translate Logs](https://soylentnews.org/article.pl?sid=26/03/23/0118220&amp;from=rss)
* [2026-03-24, 16:55:00](https://soylentnews.org/article.pl?sid=26/03/23/0110201&amp;from=rss) - [Cloudflare Appeals Piracy Shield Fine, Hopes to Kill Italy&apos;s Site-Blocking Law](https://soylentnews.org/article.pl?sid=26/03/23/0110201&amp;from=rss)
* [2026-03-24, 15:12:16](https://news.ycombinator.com/item?id=47503853) - [EMachines never obsolete PCs: More than a meme](https://dfarq.homeip.net/emachines-never-obsolete-pcs-more-than-a-meme/)
* [2026-03-24, 12:10:00](https://soylentnews.org/article.pl?sid=26/03/23/013259&amp;from=rss) - [Musk&apos;s Tactic of Blaming Users for Grok Sex Images May be Foiled by EU Law](https://soylentnews.org/article.pl?sid=26/03/23/013259&amp;from=rss)
* [2026-03-24, 10:22:51](https://news.ycombinator.com/item?id=47500647) - [Can It Resolve DOOM? Game Engine in 2k DNS Records](https://core-jmp.org/2026/03/can-it-resolve-doom-game-engine-in-2000-dns-records/)
* [2026-03-24, 09:23:27](https://news.ycombinator.com/item?id=47500239) - [Ask HN: Founders of estonian e-businesses – is it worth it?](https://news.ycombinator.com/item?id=47500239)
* [2026-03-24, 07:21:00](https://soylentnews.org/article.pl?sid=26/03/23/0055212&amp;from=rss) - [Nvidia is Trying to Make a Computer for Orbital AI Data Centers](https://soylentnews.org/article.pl?sid=26/03/23/0055212&amp;from=rss)
* [2026-03-24, 06:35:08](https://news.ycombinator.com/item?id=47499262) - [Gzip decompression in 250 lines of Rust](https://iev.ee/blog/gzip-decompression-in-250-lines-of-rust/)
* [2026-03-24, 04:22:15](https://news.ycombinator.com/item?id=47498571) - [Nashville library launches Memory Lab for digitizing home movies](https://www.axios.com/local/nashville/2026/03/16/nashville-library-digitize-home-movies)
* [2026-03-24, 03:08:56](https://news.ycombinator.com/item?id=47498222) - [Embracing Bayesian methods in clinical trials](https://jamanetwork.com/journals/jama/fullarticle/2847011)
* [2026-03-24, 02:34:00](https://soylentnews.org/article.pl?sid=26/03/23/0028246&amp;from=rss) - [Never Mind Band-Aids, Neanderthals Had Antiseptic Birch Tar](https://soylentnews.org/article.pl?sid=26/03/23/0028246&amp;from=rss)
* [2026-03-23, 21:47:00](https://soylentnews.org/article.pl?sid=26/03/22/1834242&amp;from=rss) - [Big Tech’s Security Problem Just Hit Gaming](https://soylentnews.org/article.pl?sid=26/03/22/1834242&amp;from=rss)
* [2026-03-23, 21:18:53](https://news.ycombinator.com/item?id=47495245) - [LG&apos;s new 1Hz display is the secret behind a new laptop&apos;s battery life](https://www.pcworld.com/article/3096432/lgs-new-1hz-display-is-the-secret-behind-a-new-laptops-battery-life.html)
* [2026-03-23, 18:59:03](https://news.ycombinator.com/item?id=47493677) - [Explore the Hidden World of Sand](https://magnifiedsand.com/)
* [2026-03-23, 18:22:33](https://news.ycombinator.com/item?id=47493246) - [Everything old is new again: memory optimization](https://nibblestew.blogspot.com/2026/03/everything-old-is-new-again-memory.html)
* [2026-03-23, 17:02:00](https://soylentnews.org/article.pl?sid=26/03/22/1833208&amp;from=rss) - [Workers Who Love ‘Synergizing Paradigms’ Might be Bad at Their Jobs](https://soylentnews.org/article.pl?sid=26/03/22/1833208&amp;from=rss)
* [2026-03-23, 12:17:00](https://soylentnews.org/article.pl?sid=26/03/22/1822230&amp;from=rss) - [Concerns Due to TrueNAS Moving its Build Repository to Private Servers](https://soylentnews.org/article.pl?sid=26/03/22/1822230&amp;from=rss)
* [2026-03-23, 07:32:00](https://soylentnews.org/article.pl?sid=26/03/21/1413247&amp;from=rss) - [Moltbook Was Peak AI Theater](https://soylentnews.org/article.pl?sid=26/03/21/1413247&amp;from=rss)
* [2026-03-23, 02:42:00](https://soylentnews.org/article.pl?sid=26/03/21/145246&amp;from=rss) - [Commission Says EU Inc Will be in Place by End of 2026](https://soylentnews.org/article.pl?sid=26/03/21/145246&amp;from=rss)
