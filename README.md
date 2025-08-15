# [News Summary](https://kherrick.github.io/news-summary/)

## Technological Advancements and Innovations

* [Pentagon Funded Experiment Develops Robots That Change By 'Consuming' Other Robots](https://news.slashdot.org/story/25/08/15/158204/pentagon-funded-experiment-develops-robots-that-change-by-consuming-other-robots?utm_source=rss1.0mainlinkanon&utm_medium=feed) - An experiment funded by the Pentagon has resulted in robots that adapt and transform by 'consuming' other robots.

* [China is About To Launch SSDs So Small You Insert Them Like a SIM Card](https://hardware.slashdot.org/story/25/08/15/104251/china-is-about-to-launch-ssds-so-small-you-insert-them-like-a-sim-card?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A revolutionary new form of SSDs, sized like SIM cards, is being launched in China.

* [Imagen 4 is now generally available](https://developers.googleblog.com/en/announcing-imagen-4-fast-and-imagen-4-family-generally-available-in-the-gemini-api/) - Google's Imagen 4, part of the Gemini API suite, has been officially released to the public.

* [China Launches Three-Day Robot Olympics Featuring Football and Table Tennis](https://hardware.slashdot.org/story/25/08/15/0643213/china-launches-three-day-robot-olympics-featuring-football-and-table-tennis?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Robots compete in events like football and table tennis during the Robot Olympics in China.

* [Open hardware desktop 3D printing is dead?](https://www.josefprusa.com/articles/open-hardware-in-3d-printing-is-dead/) - A deep dive into the decline of open hardware in the 3D printing landscape.

## Security and Privacy Concerns

* [Proton Begins Shifting Infrastructure Outside of Switzerland Ahead of Surveillance Legislation](https://yro.slashdot.org/story/25/08/15/1612259/proton-begins-shifting-infrastructure-outside-of-switzerland-ahead-of-surveillance-legislation?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Proton moves its operations out of Switzerland in response to pending surveillance laws.

* [Meta’s AI rules have let bots hold ‘sensual’ chats with kids, offer false medical info](https://www.reuters.com/investigates/special-report/meta-ai-chatbot-guidelines/) - Investigations show troubling failures in Meta’s AI moderation that pose risks to users.

* [Vaultwarden now supports SSO with OIDC](https://news.ycombinator.com/item?id=44911560) - The software Vaultwarden introduces Single Sign-On functionality using OpenID Connect.

* [Russian Hackers Seized Control of Norwegian Dam, Spy Chief Says](https://it.slashdot.org/story/25/08/14/232228/russian-hackers-seized-control-of-norwegian-dam-spy-chief-says?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A major security breach involves Russian hackers taking over controls of a Norwegian dam.

## Artificial Intelligence and AI Ethics

* [Sam Altman Says 'Yes,' AI Is In a Bubble](https://news.slashdot.org/story/25/08/15/1416222/sam-altman-says-yes-ai-is-in-a-bubble?utm_source=rss1.0mainlinkanon&utm_medium=feed) - OpenAI's CEO admits the AI industry may be overhyped as investments continue to surge.

* [Half of US Adults Now Use AI—but Views on How to Regulate the Technology Vary Widely by State](https://soylentnews.org/article.pl?sid=25/08/13/1633213&from=rss) - Report highlights differing attitudes across states on how to handle AI’s rapid integration.

* [Letting inmates run the asylum: Using AI to secure AI](https://mattsayar.com/letting-inmates-run-the-asylum-using-ai-to-secure-ai/) - Analysis on using artificial intelligence to regulate or monitor other AI systems.

## Scientific Discoveries and Explorations

* ['Ghost Particle' That Smashed Into Earth Breaks Records](https://science.slashdot.org/story/25/08/14/2335238/ghost-particle-that-smashed-into-earth-breaks-records?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A groundbreaking discovery as a rare 'ghost particle' makes an impact on Earth.

* [Simulating and Visualising the Central Limit Theorem](https://blog.foletta.net/post/2025-07-14-clt/) - An interactive exploration of the mathematical Central Limit Theorem through simulation.

## Cultural and Social Perspectives

* [An interactive guide to sensor fusion with quaternions](https://quaternion.cafe/) - Explore sensor fusion with an engaging interactive guide focused on quaternion mechanics.

* [Margaret Boden, Philosopher of Artificial Intelligence, Dies At 88](https://slashdot.org/story/25/08/15/0050241/margaret-boden-philosopher-of-artificial-intelligence-dies-at-88?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The AI community mourns the loss of Margaret Boden, a legendary thinker in the field.

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

* [2025-08-15, 18:41:00](https://news.slashdot.org/story/25/08/15/158204/pentagon-funded-experiment-develops-robots-that-change-by-consuming-other-robots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pentagon Funded Experiment Develops Robots That Change By &apos;Consuming&apos; Other Robots](https://news.slashdot.org/story/25/08/15/158204/pentagon-funded-experiment-develops-robots-that-change-by-consuming-other-robots?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-15, 18:23:35](https://lobste.rs/s/q4t1wi/is_openbsd_10x_faster_than_linux) - [is OpenBSD 10x faster than Linux?](https://flak.tedunangst.com/post/is-OpenBSD-10x-faster-than-Linux)
* [2025-08-15, 18:00:00](https://yro.slashdot.org/story/25/08/15/1612259/proton-begins-shifting-infrastructure-outside-of-switzerland-ahead-of-surveillance-legislation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Proton Begins Shifting Infrastructure Outside of Switzerland Ahead of Surveillance Legislation](https://yro.slashdot.org/story/25/08/15/1612259/proton-begins-shifting-infrastructure-outside-of-switzerland-ahead-of-surveillance-legislation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-15, 17:39:02](https://news.ycombinator.com/item?id=44915220) - [Show HN: JMAP MCP – Email for your agents](https://github.com/wyattjoh/jmap-mcp)
* [2025-08-15, 17:38:05](https://news.ycombinator.com/item?id=44915206) - [Launch HN: Embedder (YC S25) – Claude Code for Embedded Software](https://news.ycombinator.com/item?id=44915206)
* [2025-08-15, 17:36:15](https://news.ycombinator.com/item?id=44915187) - [Imagen 4 is now generally available](https://developers.googleblog.com/en/announcing-imagen-4-fast-and-imagen-4-family-generally-available-in-the-gemini-api/)
* [2025-08-15, 17:35:00](https://soylentnews.org/article.pl?sid=25/08/13/1633213&amp;from=rss) - [Half of US Adults Now Use AI—but Views on How to Regulate the Technology Vary Widely by State](https://soylentnews.org/article.pl?sid=25/08/13/1633213&amp;from=rss)
* [2025-08-15, 17:34:54](https://news.ycombinator.com/item?id=44915164) - [Show HN: Edka – Deploy Kubernetes on your own Hetzner account in minutes](https://edka.io)
* [2025-08-15, 17:29:17](https://lobste.rs/s/mkbepn/single_sign_on_for_furries) - [Single Sign On for Furries](https://cendyne.dev/posts/2025-08-15-single-sign-on-for-furries.html)
* [2025-08-15, 17:20:00](https://news.slashdot.org/story/25/08/15/1416222/sam-altman-says-yes-ai-is-in-a-bubble?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sam Altman Says &apos;Yes,&apos; AI Is In a Bubble](https://news.slashdot.org/story/25/08/15/1416222/sam-altman-says-yes-ai-is-in-a-bubble?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-15, 17:17:30](https://lobste.rs/s/nx2rcy/bullfrog_dungeon) - [Bullfrog in the Dungeon](https://www.filfre.net/2025/08/bullfrog-in-the-dungeon/)
* [2025-08-15, 17:01:23](https://news.ycombinator.com/item?id=44914771) - [EasyPost (YC S13) Is Hiring](https://www.easypost.com/careers)
* [2025-08-15, 16:40:00](https://it.slashdot.org/story/25/08/15/1357205/microsoft-kills-volume-rebates-in-name-of-transparency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Kills Volume Rebates in Name of &apos;Transparency&apos;](https://it.slashdot.org/story/25/08/15/1357205/microsoft-kills-volume-rebates-in-name-of-transparency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-15, 16:25:36](https://lobste.rs/s/8pofbl/vaultwarden_now_supports_sso_with_oidc) - [Vaultwarden now supports SSO with OIDC](https://news.ycombinator.com/item?id=44911560)
* [2025-08-15, 16:10:18](https://news.ycombinator.com/item?id=44914149) - [Bullfrog in the Dungeon](https://www.filfre.net/2025/08/bullfrog-in-the-dungeon/)
* [2025-08-15, 16:03:36](https://news.ycombinator.com/item?id=44914061) - [Occult books digitized and put online by Amsterdam’s Ritman Library](https://www.openculture.com/2025/08/2178-occult-books-now-digitized-put-online.html)
* [2025-08-15, 16:02:25](https://news.ycombinator.com/item?id=44914040) - [I let LLMs write an Elixir NIF in C; it mostly worked](https://overbring.com/blog/2025-08-13-writing-an-elixir-nif-with-genai/)
* [2025-08-15, 15:50:00](https://linux.slashdot.org/story/25/08/15/1549253/the-plan-for-linux-after-torvalds-has-a-kernel-of-truth-there-isnt-one?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Plan For Linux After Torvalds Has a Kernel of Truth: There Isn&apos;t One](https://linux.slashdot.org/story/25/08/15/1549253/the-plan-for-linux-after-torvalds-has-a-kernel-of-truth-there-isnt-one?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-15, 15:42:17](https://lobste.rs/s/d2w4rm/nesting_git_repositories) - [Nesting Git Repositories](https://nixpulvis.com/ramblings/2024-04-24-nesting-git-repositories)
* [2025-08-15, 15:36:06](https://news.ycombinator.com/item?id=44913682) - [Letting inmates run the asylum: Using AI to secure AI](https://mattsayar.com/letting-inmates-run-the-asylum-using-ai-to-secure-ai/)
* [2025-08-15, 15:34:43](https://news.ycombinator.com/item?id=44913663) - [The Electric Fence Stopped Working Years Ago](https://soonly.com/electric-fences/)
* [2025-08-15, 15:20:00](https://hardware.slashdot.org/story/25/08/15/104251/china-is-about-to-launch-ssds-so-small-you-insert-them-like-a-sim-card?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China is About To Launch SSDs So Small You Insert Them Like a SIM Card](https://hardware.slashdot.org/story/25/08/15/104251/china-is-about-to-launch-ssds-so-small-you-insert-them-like-a-sim-card?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-15, 15:07:04](https://news.ycombinator.com/item?id=44913359) - [Do Things That Don&apos;t Scale (2013)](https://paulgraham.com/ds.html)
* [2025-08-15, 15:05:02](https://news.ycombinator.com/item?id=44913340) - [The beauty of a text only webpage](https://albanbrooke.com/the-beauty-of-a-text-only-webpage/)
* [2025-08-15, 14:40:00](https://hardware.slashdot.org/story/25/08/15/0643213/china-launches-three-day-robot-olympics-featuring-football-and-table-tennis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China Launches Three-Day Robot Olympics Featuring Football and Table Tennis](https://hardware.slashdot.org/story/25/08/15/0643213/china-launches-three-day-robot-olympics-featuring-football-and-table-tennis?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-15, 14:24:36](https://lobste.rs/s/grlpzi/is_germany_on_brink_banning_ad_blockers) - [Is Germany on the Brink of Banning Ad Blockers? User Freedom, Privacy, and Security Is At Risk](https://blog.mozilla.org/netpolicy/2025/08/14/is-germany-on-the-brink-of-banning-ad-blockers-user-freedom-privacy-and-security-is-at-risk/)
* [2025-08-15, 14:19:21](https://lobste.rs/s/ruoge2/development_journey_on_game) - [Development Journey on Game Decompilation Using AI](https://gambiconf.substack.com/p/development-journey-on-game-decompilation)
* [2025-08-15, 14:17:07](https://news.ycombinator.com/item?id=44912727) - [An interactive guide to sensor fusion with quaternions](https://quaternion.cafe/)
* [2025-08-15, 14:15:31](https://lobste.rs/s/mj875x/interactive_guide_sensor_fusion_with) - [An interactive guide to sensor fusion with quaternions](https://quaternion.cafe/)
* [2025-08-15, 14:10:45](https://news.ycombinator.com/item?id=44912646) - [The Timmy Trap](https://jenson.org/timmy/)
* [2025-08-15, 14:00:00](https://apple.slashdot.org/story/25/08/15/0631212/foxconn-now-making-more-from-servers-than-iphones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Foxconn Now Making More From Servers than iPhones](https://apple.slashdot.org/story/25/08/15/0631212/foxconn-now-making-more-from-servers-than-iphones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-15, 13:00:00](https://slashdot.org/story/25/08/15/0050241/margaret-boden-philosopher-of-artificial-intelligence-dies-at-88?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Margaret Boden, Philosopher of Artificial Intelligence, Dies At 88](https://slashdot.org/story/25/08/15/0050241/margaret-boden-philosopher-of-artificial-intelligence-dies-at-88?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-15, 12:51:00](https://soylentnews.org/article.pl?sid=25/08/13/1629233&amp;from=rss) - [Awesome Wooden Pixel Display](https://soylentnews.org/article.pl?sid=25/08/13/1629233&amp;from=rss)
* [2025-08-15, 12:34:08](https://lobste.rs/s/y6b7an/proposal_ban_tedunangst_com) - [Proposal: ban tedunangst.com](https://lobste.rs/s/y6b7an/proposal_ban_tedunangst_com)
* [2025-08-15, 12:32:43](https://news.ycombinator.com/item?id=44911571) - [Non-invasive vagus nerve stimulation and exercise capacity in healthy volunteers](https://academic.oup.com/eurheartj/article/46/17/1634/8023896?login=false)
* [2025-08-15, 12:31:54](https://news.ycombinator.com/item?id=44911560) - [Vaultwarden commit introduces SSO using OpenID Connect](https://github.com/dani-garcia/vaultwarden/pull/3899)
* [2025-08-15, 12:27:10](https://lobste.rs/s/95ukhs/what_are_you_doing_this_weekend) - [What are you doing this weekend?](https://lobste.rs/s/95ukhs/what_are_you_doing_this_weekend)
* [2025-08-15, 12:14:46](https://news.ycombinator.com/item?id=44911423) - [Open hardware desktop 3D printing is dead?](https://www.josefprusa.com/articles/open-hardware-in-3d-printing-is-dead/)
* [2025-08-15, 11:46:17](https://news.ycombinator.com/item?id=44911169) - [Fairness is what the powerful &apos;can get away with&apos; study shows](https://phys.org/news/2025-07-fairness-powerful.html)
* [2025-08-15, 11:32:40](https://news.ycombinator.com/item?id=44911069) - [Court Records Reveal Sig Sauer Knew of Pistol Risks for Years](https://smokinggun.org/court-records-reveal-sig-sauer-knew-of-pistol-risks-for-years/)
* [2025-08-15, 10:07:53](https://lobste.rs/s/l4rowa/github_actions_safe_sleep_sh) - [GitHub Actions safe_sleep.sh](https://github.com/actions/runner/blob/v2.328.0/src/Misc/layoutroot/safe_sleep.sh)
* [2025-08-15, 10:00:00](https://slashdot.org/story/25/08/14/2325232/applied-materials-sued-in-china-over-alleged-trade-secret-theft?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Applied Materials Sued In China Over Alleged Trade Secret Theft](https://slashdot.org/story/25/08/14/2325232/applied-materials-sued-in-china-over-alleged-trade-secret-theft?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-15, 08:51:06](https://lobste.rs/s/yk6f9n/anaphoric_macros) - [Anaphoric Macros](https://letoverlambda.com/index.cl/guest/chap6.html)
* [2025-08-15, 08:07:00](https://soylentnews.org/article.pl?sid=25/08/13/1625217&amp;from=rss) - [Culture Influences Men&apos;s Experiences With Intimate Partner Violence, Study Finds](https://soylentnews.org/article.pl?sid=25/08/13/1625217&amp;from=rss)
* [2025-08-15, 07:35:26](https://lobste.rs/s/p7eaca/slog_is_aptly_named) - [slog is aptly named](https://flak.tedunangst.com/post/slog-is-aptly-named)
* [2025-08-15, 07:22:29](https://lobste.rs/s/g1a53z/ed25519_support_chrome_making_web_faster) - [Ed25519 Support in Chrome: Making the Web Faster and Safer](https://ipfsfoundation.org/ed25519-support-in-chrome-making-the-web-faster-and-safer-2/)
* [2025-08-15, 07:00:00](https://science.slashdot.org/story/25/08/14/2335238/ghost-particle-that-smashed-into-earth-breaks-records?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Ghost Particle&apos; That Smashed Into Earth Breaks Records](https://science.slashdot.org/story/25/08/14/2335238/ghost-particle-that-smashed-into-earth-breaks-records?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-15, 06:11:51](https://news.ycombinator.com/item?id=44909133) - [Simulating and Visualising the Central Limit Theorem](https://blog.foletta.net/post/2025-07-14-clt/)
* [2025-08-15, 04:34:12](https://lobste.rs/s/dguris/meta_s_ai_rules_have_let_bots_hold_sensual) - [Meta’s AI rules have let bots hold ‘sensual’ chats with kids, offer false medical info](https://www.reuters.com/investigates/special-report/meta-ai-chatbot-guidelines/)
* [2025-08-15, 04:33:56](https://lobste.rs/s/nu7cjz/why_lean_4_replaced_ocaml_as_my_primary) - [Why Lean 4 replaced OCaml as my Primary Language](https://kirancodes.me/posts/log-ocaml-to-lean.html)
* [2025-08-15, 03:47:21](https://lobste.rs/s/wcevj6/your_mac_game_is_probably_rendering) - [Your Mac Game Is Probably Rendering Blurry](https://www.colincornaby.me/2025/08/your-mac-game-is-probably-rendering-blurry/)
* [2025-08-15, 03:30:00](https://news.slashdot.org/story/25/08/14/2315236/african-union-urges-adoption-of-world-map-showing-continents-true-size?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [African Union Urges Adoption of World Map Showing Continent&apos;s True Size](https://news.slashdot.org/story/25/08/14/2315236/african-union-urges-adoption-of-world-map-showing-continents-true-size?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-15, 03:20:00](https://soylentnews.org/article.pl?sid=25/08/13/1621256&amp;from=rss) - [Harvard Business School on the Value of Open Source Software](https://soylentnews.org/article.pl?sid=25/08/13/1621256&amp;from=rss)
* [2025-08-15, 01:25:00](https://it.slashdot.org/story/25/08/14/232228/russian-hackers-seized-control-of-norwegian-dam-spy-chief-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russian Hackers Seized Control of Norwegian Dam, Spy Chief Says](https://it.slashdot.org/story/25/08/14/232228/russian-hackers-seized-control-of-norwegian-dam-spy-chief-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-15, 01:01:13](https://news.ycombinator.com/item?id=44907531) - [I used to know how to write in Japanese](https://aethermug.com/posts/i-used-to-know-how-to-write-in-japanese)
* [2025-08-15, 01:00:00](https://it.slashdot.org/story/25/08/14/236202/plex-users-urged-to-update-media-server-after-security-flaw-exposed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Plex Users Urged To Update Media Server After Security Flaw Exposed](https://it.slashdot.org/story/25/08/14/236202/plex-users-urged-to-update-media-server-after-security-flaw-exposed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-15, 00:45:00](https://yro.slashdot.org/story/25/08/14/2252251/trump-administration-considers-stake-in-intel?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trump Administration Considers Stake In Intel](https://yro.slashdot.org/story/25/08/14/2252251/trump-administration-considers-stake-in-intel?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-08-14, 22:56:14](https://lobste.rs/s/8hsb3l/we_rewrote_ghostty_gtk_application) - [We Rewrote the Ghostty GTK Application](https://mitchellh.com/writing/ghostty-gtk-rewrite)
* [2025-08-14, 22:37:00](https://soylentnews.org/article.pl?sid=25/08/13/1347256&amp;from=rss) - [Joint Polar System METOP-SGA1 Launched](https://soylentnews.org/article.pl?sid=25/08/13/1347256&amp;from=rss)
* [2025-08-14, 22:11:47](https://news.ycombinator.com/item?id=44906305) - [Blurry rendering of games on Mac](https://www.colincornaby.me/2025/08/your-mac-game-is-probably-rendering-blurry/)
* [2025-08-14, 21:19:00](https://news.ycombinator.com/item?id=44905808) - [We rewrote the Ghostty GTK application](https://mitchellh.com/writing/ghostty-gtk-rewrite)
* [2025-08-14, 21:06:37](https://lobste.rs/s/ms94ja/what_is_go_proxy_even_doing) - [what is the go proxy even doing?](https://flak.tedunangst.com/post/what-is-the-go-proxy-even-doing)
* [2025-08-14, 20:52:10](https://lobste.rs/s/zwz8ka/nan_propagation_novel_method_for) - [NaN-Propagation: A Novel Method for Sparsity Detection in Black-Box Computational Functions](https://arxiv.org/abs/2507.23186)
* [2025-08-14, 18:22:58](https://lobste.rs/s/1v1slg/jujutsu_with_radicle) - [Jujutsu with Radicle](https://radicle.xyz/2025/08/14/jujutsu-with-radicle)
* [2025-08-14, 17:52:00](https://soylentnews.org/article.pl?sid=25/08/13/1344242&amp;from=rss) - [AOL is Discontinuing its Dial-Up Service](https://soylentnews.org/article.pl?sid=25/08/13/1344242&amp;from=rss)
* [2025-08-14, 17:33:06](https://lobste.rs/s/kbxhp4/fun_with_finite_state_transducers) - [Fun with finite state transducers](https://blog.yossarian.net/2025/08/14/Fun-with-finite-state-transducers)
* [2025-08-14, 16:06:55](https://news.ycombinator.com/item?id=44902127) - [I made a real-time C/C++/Rust build visualizer](https://danielchasehooper.com/posts/syscall-build-snooping/)
* [2025-08-14, 15:44:55](https://lobste.rs/s/acbnix/why_llms_can_t_really_build_software) - [Why LLMs Can&apos;t Really Build Software](https://zed.dev/blog/why-llms-cant-build-software)
* [2025-08-14, 13:03:00](https://soylentnews.org/article.pl?sid=25/08/13/1139229&amp;from=rss) - [Microsoft Recall Exposes Passwords and Banking Data](https://soylentnews.org/article.pl?sid=25/08/13/1139229&amp;from=rss)
* [2025-08-14, 10:54:09](https://lobste.rs/s/nvt1zk/org_social_is_decentralized_social) - [Org-social is a decentralized social network that runs on an Org Mode](https://github.com/tanrax/org-social)
* [2025-08-14, 08:22:00](https://soylentnews.org/article.pl?sid=25/08/13/1127246&amp;from=rss) - [Reddit Bars Internet Archive From its Website, Sparking Access Concerns](https://soylentnews.org/article.pl?sid=25/08/13/1127246&amp;from=rss)
* [2025-08-14, 03:37:00](https://soylentnews.org/article.pl?sid=25/08/12/180244&amp;from=rss) - [Debian 13 \&quot;Trixie\&quot; and Debian \&quot;Hurd 2025\&quot; Released](https://soylentnews.org/article.pl?sid=25/08/12/180244&amp;from=rss)
* [2025-08-13, 22:56:00](https://soylentnews.org/article.pl?sid=25/08/12/1737238&amp;from=rss) - [Microsoft Sued for Discontinuing Windows 10 Support](https://soylentnews.org/article.pl?sid=25/08/12/1737238&amp;from=rss)
* [2025-08-13, 18:10:00](https://soylentnews.org/article.pl?sid=25/08/12/1155214&amp;from=rss) - [Oracle VirtualBox Licensing Tweak Lies in Wait for Unwary](https://soylentnews.org/article.pl?sid=25/08/12/1155214&amp;from=rss)
* [2025-08-13, 18:04:35](https://lobste.rs/s/isgyrq/why_i_chose_ocaml_as_my_primary_language) - [Why I chose OCaml as my primary language](https://xvw.lol/en/articles/why-ocaml.html)
* [2025-08-13, 13:22:00](https://soylentnews.org/article.pl?sid=25/08/12/1147242&amp;from=rss) - [Smartwatches Offer Little Insight Into Stress Levels, Researchers Find](https://soylentnews.org/article.pl?sid=25/08/12/1147242&amp;from=rss)
* [2025-08-13, 08:34:00](https://soylentnews.org/article.pl?sid=25/08/12/1137226&amp;from=rss) - [Small Clouds Out as VMware Again Changes Partner Program](https://soylentnews.org/article.pl?sid=25/08/12/1137226&amp;from=rss)
* [2025-08-13, 03:51:00](https://soylentnews.org/article.pl?sid=25/08/12/0427247&amp;from=rss) - [OpenAI Will Not Disclose GPT-5’s Energy Use. It Could be Higher Than Past Models](https://soylentnews.org/article.pl?sid=25/08/12/0427247&amp;from=rss)
* [2025-08-12, 23:08:00](https://soylentnews.org/article.pl?sid=25/08/12/0419218&amp;from=rss) - [Using a Fan Can Make Older Adults Hotter in a Dry Heat](https://soylentnews.org/article.pl?sid=25/08/12/0419218&amp;from=rss)
* [2025-08-12, 23:00:46](https://news.ycombinator.com/item?id=44882754) - [In-depth analysis on Valorant&apos;s Guarded Regions](https://reversing.info/posts/guardedregions/)
* [2025-08-12, 18:25:00](https://soylentnews.org/article.pl?sid=25/08/11/2227259&amp;from=rss) - [Post-Quantum Cryptography Advice Added to OpenSSH Website](https://soylentnews.org/article.pl?sid=25/08/11/2227259&amp;from=rss)
* [2025-08-12, 15:06:08](https://news.ycombinator.com/item?id=44877201) - [Recto – A Truly 2D Language](https://masatohagiwara.net/recto.html)
* [2025-08-12, 14:03:47](https://news.ycombinator.com/item?id=44876346) - [ARM adds neural accelerators to GPUs](https://newsroom.arm.com/news/arm-announces-arm-neural-technology)
* [2025-08-12, 13:42:00](https://soylentnews.org/article.pl?sid=25/08/10/233218&amp;from=rss) - [Coding Error Blamed After Parts of Constitution Disappear From US Website](https://soylentnews.org/article.pl?sid=25/08/10/233218&amp;from=rss)
* [2025-08-12, 08:55:00](https://soylentnews.org/article.pl?sid=25/08/10/2217254&amp;from=rss) - [Extra-Strong Bacterial Cellulose Sheets as a Biodegradable Alternative to Plastic](https://soylentnews.org/article.pl?sid=25/08/10/2217254&amp;from=rss)
* [2025-08-12, 05:04:21](https://news.ycombinator.com/item?id=44872584) - [Compiler Bug Causes Compiler Bug: How a 12-Year-Old G++ Bug Took Down Solidity](https://osec.io/blog/2025-08-11-compiler-bug-causes-compiler-bug/)
* [2025-08-12, 04:14:00](https://soylentnews.org/article.pl?sid=25/08/10/1521232&amp;from=rss) - [Here’s How Deepfake Vishing Attacks Work, and Why They Can Be Hard to Detect](https://soylentnews.org/article.pl?sid=25/08/10/1521232&amp;from=rss)
* [2025-08-11, 23:28:00](https://soylentnews.org/article.pl?sid=25/08/10/1038254&amp;from=rss) - [Quantum \&quot;Schrödinger&apos;s Cat\&quot; Survives For Mind-Blowing 23 Minutes In Record-Breaking Experiment](https://soylentnews.org/article.pl?sid=25/08/10/1038254&amp;from=rss)
* [2025-08-11, 21:21:01](https://news.ycombinator.com/item?id=44869601) - [The Lifecycle of a Pull Request](https://blog.tangled.sh/pulls)
* [2025-08-11, 18:45:00](https://soylentnews.org/article.pl?sid=25/08/10/1036210&amp;from=rss) - [Asian Hornet’s Unique Buzz May Hold Secret to Containing Invasive Species](https://soylentnews.org/article.pl?sid=25/08/10/1036210&amp;from=rss)
* [2025-08-11, 18:42:11](https://news.ycombinator.com/item?id=44867842) - [Rain: Transiently Leaking Data from Public Clouds Using Old Vulnerabilities](https://openreview.net/forum?id=4tDNvQe2G0)
* [2025-08-11, 14:14:00](https://soylentnews.org/article.pl?sid=25/08/11/145224&amp;from=rss) - [RIP: Dame Stephanie &apos;Steve&apos; Shirley, Technology Pioneer, Dies Aged 91](https://soylentnews.org/article.pl?sid=25/08/11/145224&amp;from=rss)
* [2025-08-11, 14:01:00](https://soylentnews.org/article.pl?sid=25/08/09/1958210&amp;from=rss) - [CalyxOS: The Pause That Wasn&apos;t](https://soylentnews.org/article.pl?sid=25/08/09/1958210&amp;from=rss)
* [2025-08-11, 09:11:00](https://soylentnews.org/article.pl?sid=25/08/09/1827235&amp;from=rss) - [Americans, Be Warned: Lessons From Reddit’s Chaotic UK Age Verification Rollout](https://soylentnews.org/article.pl?sid=25/08/09/1827235&amp;from=rss)
* [2025-08-11, 05:14:00](https://soylentnews.org/article.pl?sid=25/08/11/0456211&amp;from=rss) - [RIP: James Lovell Dead at 97](https://soylentnews.org/article.pl?sid=25/08/11/0456211&amp;from=rss)
* [2025-08-11, 04:34:00](https://soylentnews.org/article.pl?sid=25/08/09/1818247&amp;from=rss) - [WinRAR zero-day Exploited to Plant Malware on Archive Extraction](https://soylentnews.org/article.pl?sid=25/08/09/1818247&amp;from=rss)
