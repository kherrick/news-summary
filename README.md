# [News Summary](https://kherrick.github.io/news-summary/)

## Cybersecurity Incidents and Breaches

* [Iran-Linked Hackers Breach FBI Director&apos;s Personal Email](https://yro.slashdot.org/story/26/03/27/1813256/iran-linked-hackers-breach-fbi-directors-personal-email?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [PyPI package telnyx has been compromised in yet another supply chain attack](https://www.aikido.dev/blog/telnyx-pypi-compromised-teampcp-canisterworm)

* [Popular LiteLLM PyPI Package Backdoored To Steal Credentials, Auth Tokens](https://it.slashdot.org/story/26/03/27/1527202/popular-litellm-pypi-package-backdoored-to-steal-credentials-auth-tokens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Iran-linked hackers have breached FBI director&apos;s personal emails](https://www.cnn.com/2026/03/27/politics/iran-linked-hackers-fbi-director-patel)

## Technological Advancements and Innovations

* [Byte Magazine Archive 1975 to 1995](https://www.worldradiohistory.com/Byte_Magazine.htm)

* [A one-line Kubernetes fix that saved 600 hours a year](https://blog.cloudflare.com/one-line-kubernetes-fix-saved-600-hours-a-year/)

* [cssDOOM](https://cssdoom.wtf/)

* [jsongrep is faster than {jq, jmespath, jsonpath-rust, jql}](https://micahkepe.com/blog/jsongrep/)

## Artificial Intelligence and Machine Learning Developments

* [Number of AI Chatbots Ignoring Human Instructions Increasing, Study Says](https://slashdot.org/story/26/03/27/1514235/number-of-ai-chatbots-ignoring-human-instructions-increasing-study-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [AI got the blame for the Iran school bombing. The truth is more worrying](https://www.theguardian.com/news/2026/mar/26/ai-got-the-blame-for-the-iran-school-bombing-the-truth-is-far-more-worrying)

* [Wikipedia Bans Use of Generative AI](https://news.slashdot.org/story/26/03/26/1818215/wikipedia-bans-use-of-generative-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Privacy, Surveillance, and Technology Ethics

* [Apple Gives FBI a User&apos;s Real Name Hidden Behind &apos;Hide My Email&apos; Feature](https://yro.slashdot.org/story/26/03/26/2146255/apple-gives-fbi-a-users-real-name-hidden-behind-hide-my-email-feature?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [The FBI is Buying Americans’ Location Data](https://soylentnews.org/article.pl?sid=26/03/23/1543235&amp;from=rss)

## Environmental and Sustainable Innovations

* [‘Energy independence feels practical’: Europeans building mini solar farms](https://www.euronews.com/2026/03/26/suddenly-energy-independence-feels-practical-europeans-are-building-mini-solar-farms-at-ho)

* [Amid Fuel Crunch, Cuban Mechanic Converts Car to Run on Charcoal](https://soylentnews.org/article.pl?sid=26/03/26/0220234&amp;from=rss)

## Unique and Niche Technologies

* [Meow.camera](https://meow.camera/#4258783365322591678)

* [Can It Resolve Doom? Game Engine in 2k DNS Records](https://core-jmp.org/2026/03/can-it-resolve-doom-game-engine-in-2000-dns-records/)

* [C Preprocessor tricks, tips, and idioms](https://github.com/pfultz2/Cloak/wiki/C-Preprocessor-tricks,-tips,-and-idioms)

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

* [2026-03-27, 19:00:00](https://yro.slashdot.org/story/26/03/27/1813256/iran-linked-hackers-breach-fbi-directors-personal-email?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Iran-Linked Hackers Breach FBI Director&apos;s Personal Email](https://yro.slashdot.org/story/26/03/27/1813256/iran-linked-hackers-breach-fbi-directors-personal-email?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-27, 18:51:06](https://news.ycombinator.com/item?id=47546732) - [Vibe-Coded Ext4 for OpenBSD](https://lwn.net/SubscriberLink/1064541/1a399d572a046fb9/)
* [2026-03-27, 18:38:45](https://lobste.rs/s/x7re3z/pondering_effects) - [Pondering Effects](https://wiki.alopex.li/PonderingEffects)
* [2026-03-27, 18:13:57](https://news.ycombinator.com/item?id=47546265) - [PyPI package telnyx has been compromised in yet another supply chain attack](https://www.aikido.dev/blog/telnyx-pypi-compromised-teampcp-canisterworm)
* [2026-03-27, 18:00:00](https://it.slashdot.org/story/26/03/27/1527202/popular-litellm-pypi-package-backdoored-to-steal-credentials-auth-tokens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Popular LiteLLM PyPI Package Backdoored To Steal Credentials, Auth Tokens](https://it.slashdot.org/story/26/03/27/1527202/popular-litellm-pypi-package-backdoored-to-steal-credentials-auth-tokens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-27, 17:58:52](https://news.ycombinator.com/item?id=47546081) - [Telnyx Python SDK: Supply Chain Security Notice](https://telnyx.com/resources/telnyx-python-sdk-supply-chain-security-notice-march-2026)
* [2026-03-27, 17:55:44](https://news.ycombinator.com/item?id=47546028) - [We broke 92% of SHA-256 – you should start to migrate from it](https://stateofutopia.com/papers/2/we-broke-92-percent-of-sha-256.html)
* [2026-03-27, 17:21:11](https://news.ycombinator.com/item?id=47545594) - [Byte Magazine Archive 1975 to 1995](https://www.worldradiohistory.com/Byte_Magazine.htm)
* [2026-03-27, 17:00:00](https://slashdot.org/story/26/03/27/1514235/number-of-ai-chatbots-ignoring-human-instructions-increasing-study-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Number of AI Chatbots Ignoring Human Instructions Increasing, Study Says](https://slashdot.org/story/26/03/27/1514235/number-of-ai-chatbots-ignoring-human-instructions-increasing-study-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-27, 16:56:16](https://lobste.rs/s/abrpfr/tailscale_d_into_homelabbing) - [Tailscale’d Into Homelabbing](https://rugu.dev/en/blog/homelabbing_01/)
* [2026-03-27, 16:42:02](https://news.ycombinator.com/item?id=47545032) - [Iran-linked hackers have breached FBI director&apos;s personal emails](https://www.cnn.com/2026/03/27/politics/iran-linked-hackers-fbi-director-patel)
* [2026-03-27, 16:39:32](https://news.ycombinator.com/item?id=47544980) - [AI got the blame for the Iran school bombing. The truth is more worrying](https://www.theguardian.com/news/2026/mar/26/ai-got-the-blame-for-the-iran-school-bombing-the-truth-is-far-more-worrying)
* [2026-03-27, 16:33:46](https://lobste.rs/s/pvym1k/cssdoom) - [cssDOOM](https://cssdoom.wtf/)
* [2026-03-27, 16:11:27](https://news.ycombinator.com/item?id=47544614) - [Apple says no one using Lockdown Mode has been hacked with spyware](https://techcrunch.com/2026/03/27/apple-says-no-one-using-lockdown-mode-has-been-hacked-with-spyware/)
* [2026-03-27, 16:04:49](https://lobste.rs/s/4lntz7/bigoish_test_empirical_computational) - [Bigoish: Test the empirical computational complexity of Rust algorithms](https://docs.rs/bigoish/)
* [2026-03-27, 16:03:00](https://soylentnews.org/article.pl?sid=26/03/26/0225217&amp;from=rss) - [Palantir Trial Plugs Into UK Financial Watchdog&apos;s Data Trove](https://soylentnews.org/article.pl?sid=26/03/26/0225217&amp;from=rss)
* [2026-03-27, 16:00:00](https://tech.slashdot.org/story/26/03/27/157209/california-bill-would-require-parent-bloggers-to-delete-content-of-minors-on-social-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [California Bill Would Require Parent Bloggers To Delete Content of Minors On Social Media](https://tech.slashdot.org/story/26/03/27/157209/california-bill-would-require-parent-bloggers-to-delete-content-of-minors-on-social-media?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-27, 15:36:17](https://lobste.rs/s/jxqn5s/one_line_kubernetes_fix_saved_600_hours) - [A one-line Kubernetes fix that saved 600 hours a year](https://blog.cloudflare.com/one-line-kubernetes-fix-saved-600-hours-a-year/)
* [2026-03-27, 15:31:20](https://news.ycombinator.com/item?id=47543943) - [Desk for people who work at home with a cat](https://soranews24.com/2026/03/27/japan-now-has-a-special-desk-for-people-who-work-at-home-with-a-pet-catphotos/)
* [2026-03-27, 15:31:02](https://lobste.rs/s/kpznsv/firefox_gtk_emoji_picker) - [Firefox &amp; Gtk Emoji picker](https://mastransky.wordpress.com/2026/03/20/firefox-gtk-emoji-picker/)
* [2026-03-27, 15:24:57](https://lobste.rs/s/fbgxkb/uses_for_nested_promises) - [Uses for nested promises](https://blog.jcoglan.com//2026/03/23/uses-for-nested-promises/)
* [2026-03-27, 15:00:00](https://yro.slashdot.org/story/26/03/27/0047211/judge-blocks-pentagons-effort-to-punish-anthropic-with-supply-chain-risk-label?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Judge Blocks Pentagon&apos;s Effort To &apos;Punish&apos; Anthropic With Supply Chain Risk Label](https://yro.slashdot.org/story/26/03/27/0047211/judge-blocks-pentagons-effort-to-punish-anthropic-with-supply-chain-risk-label?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-27, 14:41:02](https://news.ycombinator.com/item?id=47543204) - [Meow.camera](https://meow.camera/#4258783365322591678)
* [2026-03-27, 14:35:45](https://news.ycombinator.com/item?id=47543139) - [Anatomy of the .claude/ folder](https://blog.dailydoseofds.com/p/anatomy-of-the-claude-folder)
* [2026-03-27, 13:54:35](https://news.ycombinator.com/item?id=47542695) - [People inside Microsoft are fighting to drop mandatory Microsoft Account](https://www.windowscentral.com/microsoft/windows-11/people-inside-microsoft-are-fighting-to-drop-windows-11s-mandatory-microsoft-account-requirements-during-setup)
* [2026-03-27, 13:53:41](https://lobste.rs/s/noyefo/c_preprocessor_tricks_tips_idioms) - [C Preprocessor tricks, tips, and idioms](https://github.com/pfultz2/Cloak/wiki/C-Preprocessor-tricks,-tips,-and-idioms)
* [2026-03-27, 13:49:51](https://news.ycombinator.com/item?id=47542644) - [Installing a Let&apos;s Encrypt TLS Certificate on a Brother Printer with Certbot](https://owltec.ca/Other/Installing+a+Let%27s+Encrypt+TLS+certificate+on+a+Brother+printer+automatically+with+Certbot+(%26+Cloudflare))
* [2026-03-27, 13:07:14](https://lobste.rs/s/op46vm/hold_on_your_hardware) - [Hold on to Your Hardware](https://xn--gckvb8fzb.com/hold-on-to-your-hardware/)
* [2026-03-27, 13:05:11](https://lobste.rs/s/he46nq/distraction_free_writing_with_micro) - [Distraction-Free Writing with the Micro Journal Rev.2 (and Neovim)](https://www.ssp.sh/brain/my-distraction-free-typewriter-micro-journal/)
* [2026-03-27, 13:03:06](https://lobste.rs/s/ucp0wf/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/ucp0wf/what_are_you_doing_this_weekend)
* [2026-03-27, 12:46:49](https://news.ycombinator.com/item?id=47542057) - [The &apos;paperwork flood&apos;: How I drowned a bureaucrat before dinner](https://sightlessscribbles.com/posts/the-paperwork-flood/)
* [2026-03-27, 11:29:15](https://lobste.rs/s/pxnyf9/immich_vs_ente_photos_photo_backup) - [immich vs ente photos - the photo backup showdown](https://alexandmanu.com/blog/immich-vs-ente-photos/)
* [2026-03-27, 11:20:00](https://soylentnews.org/article.pl?sid=26/03/26/0220234&amp;from=rss) - [Amid Fuel Crunch, Cuban Mechanic Converts Car to Run on Charcoal](https://soylentnews.org/article.pl?sid=26/03/26/0220234&amp;from=rss)
* [2026-03-27, 11:00:00](https://slashdot.org/story/26/03/26/2239249/openai-abandons-chatgpts-erotic-mode?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Abandons ChatGPT&apos;s Erotic Mode](https://slashdot.org/story/26/03/26/2239249/openai-abandons-chatgpts-erotic-mode?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-27, 10:27:28](https://news.ycombinator.com/item?id=47540929) - [Should QA exist?](https://www.rubick.com/should-qa-exist/)
* [2026-03-27, 10:10:41](https://news.ycombinator.com/item?id=47540833) - [Hold on to Your Hardware](https://xn--gckvb8fzb.com/hold-on-to-your-hardware/)
* [2026-03-27, 09:26:19](https://lobste.rs/s/vtqrep/jsongrep_is_faster_than_jq_jmespath) - [jsongrep is faster than {jq, jmespath, jsonpath-rust, jql}](https://micahkepe.com/blog/jsongrep/)
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
* [2026-03-27, 01:54:37](https://lobste.rs/s/waxfu3/prompt_engineering_is_not_engineering_is) - [Prompt Engineering Is Not. Engineering, That Is](https://the-infrastructure-mindset.ghost.io/prompt-engineering-is-not/)
* [2026-03-26, 23:33:07](https://lobste.rs/s/2debab/seed_adding_vau_with_immutable_dynamic) - [seed: Adding `vau` with an immutable dynamic environment to Chez Scheme](https://github.com/amirouche/seed)
* [2026-03-26, 23:00:00](https://hardware.slashdot.org/story/26/03/26/224256/apple-discontinues-mac-pro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Discontinues Mac Pro](https://hardware.slashdot.org/story/26/03/26/224256/apple-discontinues-mac-pro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-26, 22:00:00](https://yro.slashdot.org/story/26/03/26/1925222/senators-demand-to-know-how-much-energy-data-centers-use?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Senators Demand to Know How Much Energy Data Centers Use](https://yro.slashdot.org/story/26/03/26/1925222/senators-demand-to-know-how-much-energy-data-centers-use?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-26, 21:05:00](https://soylentnews.org/article.pl?sid=26/03/25/2355253&amp;from=rss) - [Supreme Court Says Internet Service Provider Isn&apos;t Liable for Bootlegged Music Downloads](https://soylentnews.org/article.pl?sid=26/03/25/2355253&amp;from=rss)
* [2026-03-26, 21:04:50](https://news.ycombinator.com/item?id=47535708) - [Apple discontinues the Mac Pro](https://9to5mac.com/2026/03/26/apple-discontinues-the-mac-pro/)
* [2026-03-26, 21:00:00](https://slashdot.org/story/26/03/26/1918233/jpmorgan-starts-monitoring-investment-banker-screen-time-to-prevent-burnout?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [JPMorgan Starts Monitoring Investment Banker Screen Time To Prevent Burnout](https://slashdot.org/story/26/03/26/1918233/jpmorgan-starts-monitoring-investment-banker-screen-time-to-prevent-burnout?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-26, 20:20:03](https://lobste.rs/s/haqvra/ssereload_1_introduction) - [ssereload(1) introduction](https://timmarinin.net/2026/ssereload/)
* [2026-03-26, 20:00:00](https://entertainment.slashdot.org/story/26/03/26/197231/vizio-tvs-now-require-walmart-accounts-for-smart-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Vizio TVs Now Require Walmart Accounts For Smart Features](https://entertainment.slashdot.org/story/26/03/26/197231/vizio-tvs-now-require-walmart-accounts-for-smart-features?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-26, 19:41:26](https://lobste.rs/s/i7z3ru/eyg_is_now_open_source) - [EYG is now open source](https://eyg.run/news/editions/6)
* [2026-03-26, 19:00:00](https://tech.slashdot.org/story/26/03/26/1827208/mozilla-and-mila-team-up-on-open-source-ai-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mozilla and Mila Team Up On Open Source AI Push](https://tech.slashdot.org/story/26/03/26/1827208/mozilla-and-mila-team-up-on-open-source-ai-push?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-26, 18:35:36](https://lobste.rs/s/znjvvf/i_can_t_see_apple_s_vision) - [I can&apos;t See Apple&apos;s Vision](https://matduggan.com/i-cant-see-apples-vision/)
* [2026-03-26, 18:30:20](https://lobste.rs/s/ob2ijp/rocm_7_1_1_you_can_not_build) - [ROCm 7.1.1: you can (not) build](https://lunnova.dev/articles/rocm-711-you-can-not-build/)
* [2026-03-26, 18:20:00](https://news.slashdot.org/story/26/03/26/1818215/wikipedia-bans-use-of-generative-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Wikipedia Bans Use of Generative AI](https://news.slashdot.org/story/26/03/26/1818215/wikipedia-bans-use-of-generative-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-26, 18:03:43](https://news.ycombinator.com/item?id=47533709) - [Building FireStriker: Making Civic Tech Free](https://firestriker.org/blog/building-firestriker-why-im-making-civic-tech-free)
* [2026-03-26, 17:00:00](https://news.slashdot.org/story/26/03/26/1628201/tracy-kidder-author-of-the-soul-of-a-new-machine-dies-at-80?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tracy Kidder, Author of &apos;The Soul of a New Machine&apos;, Dies At 80](https://news.slashdot.org/story/26/03/26/1628201/tracy-kidder-author-of-the-soul-of-a-new-machine-dies-at-80?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-26, 16:23:00](https://soylentnews.org/article.pl?sid=26/03/25/2344247&amp;from=rss) - [Tech Employees Are Reportedly Being Evaluated by How Fast They Burn Through LLM Tokens](https://soylentnews.org/article.pl?sid=26/03/25/2344247&amp;from=rss)
* [2026-03-26, 14:17:45](https://lobste.rs/s/sazeyn/don_t_trust_software_verify_it) - [Don’t trust software, verify it](https://daniel.haxx.se/blog/2026/03/26/dont-trust-verify/)
* [2026-03-26, 11:40:00](https://soylentnews.org/article.pl?sid=26/03/25/2341257&amp;from=rss) - [Micron Predicts That Cars Will Need 300GB of RAM](https://soylentnews.org/article.pl?sid=26/03/25/2341257&amp;from=rss)
* [2026-03-26, 06:59:00](https://soylentnews.org/article.pl?sid=26/03/25/2339207&amp;from=rss) - [The Mystery of How Volcanic Lightning Happens Has Been Solved](https://soylentnews.org/article.pl?sid=26/03/25/2339207&amp;from=rss)
* [2026-03-26, 02:12:00](https://soylentnews.org/article.pl?sid=26/03/23/163239&amp;from=rss) - [NASA Sets &apos;Impossible&apos; Ground Rules for Relocation of &apos;Flown Space Vehicle&apos;](https://soylentnews.org/article.pl?sid=26/03/23/163239&amp;from=rss)
* [2026-03-25, 23:56:51](https://lobste.rs/s/iqctrn/vim_classic_long_term_maintenance_vim_8_x) - [vim-classic: Long-term maintenance of Vim 8.x](https://sr.ht/~sircmpwn/vim-classic/)
* [2026-03-25, 22:43:44](https://lobste.rs/s/xpx9vi/shell_tricks_actually_make_life_easier) - [Shell Tricks That Actually Make Life Easier (And Save Your Sanity)](https://blog.hofstede.it/shell-tricks-that-actually-make-life-easier-and-save-your-sanity/)
* [2026-03-25, 22:20:47](https://news.ycombinator.com/item?id=47524051) - [21,864 Yugoslavian .yu domains](https://jacobfilipp.com/yu/)
* [2026-03-25, 21:26:00](https://soylentnews.org/article.pl?sid=26/03/23/1558231&amp;from=rss) - [The 49MB Web Page](https://soylentnews.org/article.pl?sid=26/03/23/1558231&amp;from=rss)
* [2026-03-25, 16:41:00](https://soylentnews.org/article.pl?sid=26/03/23/1555204&amp;from=rss) - [OpenAI Delays AI Porn Feature Over Safety Uproar](https://soylentnews.org/article.pl?sid=26/03/23/1555204&amp;from=rss)
* [2026-03-25, 15:46:29](https://news.ycombinator.com/item?id=47518960) - [Why so many control rooms were seafoam green (2025)](https://bethmathews.substack.com/p/why-so-many-control-rooms-were-seafoam)
* [2026-03-25, 11:55:00](https://soylentnews.org/article.pl?sid=26/03/23/1550203&amp;from=rss) - [I Hacked ChatGPT and Google&apos;s AI](https://soylentnews.org/article.pl?sid=26/03/23/1550203&amp;from=rss)
* [2026-03-25, 07:08:00](https://soylentnews.org/article.pl?sid=26/03/23/1543235&amp;from=rss) - [The FBI is Buying Americans’ Location Data](https://soylentnews.org/article.pl?sid=26/03/23/1543235&amp;from=rss)
* [2026-03-25, 02:23:00](https://soylentnews.org/article.pl?sid=26/03/23/0124221&amp;from=rss) - [Particle Discovered at CERN Solves a 20-Year-Old Mystery](https://soylentnews.org/article.pl?sid=26/03/23/0124221&amp;from=rss)
* [2026-03-24, 21:36:00](https://soylentnews.org/article.pl?sid=26/03/23/0118220&amp;from=rss) - [FBI Surveils Russia’s Elite Agents Through Google Translate Logs](https://soylentnews.org/article.pl?sid=26/03/23/0118220&amp;from=rss)
* [2026-03-24, 16:55:00](https://soylentnews.org/article.pl?sid=26/03/23/0110201&amp;from=rss) - [Cloudflare Appeals Piracy Shield Fine, Hopes to Kill Italy&apos;s Site-Blocking Law](https://soylentnews.org/article.pl?sid=26/03/23/0110201&amp;from=rss)
* [2026-03-24, 15:12:16](https://news.ycombinator.com/item?id=47503853) - [EMachines never obsolete PCs: More than a meme](https://dfarq.homeip.net/emachines-never-obsolete-pcs-more-than-a-meme/)
* [2026-03-24, 12:10:00](https://soylentnews.org/article.pl?sid=26/03/23/013259&amp;from=rss) - [Musk&apos;s Tactic of Blaming Users for Grok Sex Images May be Foiled by EU Law](https://soylentnews.org/article.pl?sid=26/03/23/013259&amp;from=rss)
* [2026-03-24, 10:22:51](https://news.ycombinator.com/item?id=47500647) - [Can It Resolve Doom? Game Engine in 2k DNS Records](https://core-jmp.org/2026/03/can-it-resolve-doom-game-engine-in-2000-dns-records/)
* [2026-03-24, 07:21:00](https://soylentnews.org/article.pl?sid=26/03/23/0055212&amp;from=rss) - [Nvidia is Trying to Make a Computer for Orbital AI Data Centers](https://soylentnews.org/article.pl?sid=26/03/23/0055212&amp;from=rss)
* [2026-03-24, 06:35:08](https://news.ycombinator.com/item?id=47499262) - [Gzip decompression in 250 lines of Rust](https://iev.ee/blog/gzip-decompression-in-250-lines-of-rust/)
* [2026-03-24, 03:08:56](https://news.ycombinator.com/item?id=47498222) - [Embracing Bayesian Methods in Clinical Trials](https://jamanetwork.com/journals/jama/fullarticle/2847011)
* [2026-03-24, 02:34:00](https://soylentnews.org/article.pl?sid=26/03/23/0028246&amp;from=rss) - [Never Mind Band-Aids, Neanderthals Had Antiseptic Birch Tar](https://soylentnews.org/article.pl?sid=26/03/23/0028246&amp;from=rss)
* [2026-03-23, 21:47:00](https://soylentnews.org/article.pl?sid=26/03/22/1834242&amp;from=rss) - [Big Tech’s Security Problem Just Hit Gaming](https://soylentnews.org/article.pl?sid=26/03/22/1834242&amp;from=rss)
* [2026-03-23, 18:59:03](https://news.ycombinator.com/item?id=47493677) - [Sand from Different Beaches in the World](https://magnifiedsand.com/)
* [2026-03-23, 18:22:33](https://news.ycombinator.com/item?id=47493246) - [Everything old is new again: memory optimization](https://nibblestew.blogspot.com/2026/03/everything-old-is-new-again-memory.html)
* [2026-03-23, 17:02:00](https://soylentnews.org/article.pl?sid=26/03/22/1833208&amp;from=rss) - [Workers Who Love ‘Synergizing Paradigms’ Might be Bad at Their Jobs](https://soylentnews.org/article.pl?sid=26/03/22/1833208&amp;from=rss)
* [2026-03-23, 15:10:43](https://news.ycombinator.com/item?id=47490609) - [How and why to take a logarithm of an image [video]](https://www.youtube.com/watch?v=ldxFjLJ3rVY)
* [2026-03-23, 12:17:00](https://soylentnews.org/article.pl?sid=26/03/22/1822230&amp;from=rss) - [Concerns Due to TrueNAS Moving its Build Repository to Private Servers](https://soylentnews.org/article.pl?sid=26/03/22/1822230&amp;from=rss)
* [2026-03-23, 07:32:00](https://soylentnews.org/article.pl?sid=26/03/21/1413247&amp;from=rss) - [Moltbook Was Peak AI Theater](https://soylentnews.org/article.pl?sid=26/03/21/1413247&amp;from=rss)
* [2026-03-23, 02:42:00](https://soylentnews.org/article.pl?sid=26/03/21/145246&amp;from=rss) - [Commission Says EU Inc Will be in Place by End of 2026](https://soylentnews.org/article.pl?sid=26/03/21/145246&amp;from=rss)
