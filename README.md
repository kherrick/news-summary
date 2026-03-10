# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Technology Innovations

* [Meta Acquires Moltbook, the Social Network For AI Agents](https://tech.slashdot.org/story/26/03/10/1524229/meta-acquires-moltbook-the-social-network-for-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Discussed in the context of AI agents, Meta has acquired Moltbook, a platform specifically designed for AI-driven social networking.

* [Yann LeCun's AI startup raises $1B in Europe’s largest ever seed round](https://www.ft.com/content/e5245ec3-1a58-4eff-ab58-480b6259aaf1) - AI pioneer Yann LeCun has made waves with his startup securing $1 billion in funding in a monumental seed round, elevating Europe's AI landscape.

* [Intel Demos Chip to Compute with Encrypted Data](https://spectrum.ieee.org/fhe-intel) - Intel showcases groundbreaking advancements in computing, unveiling a chip capable of processing encrypted data without compromising its privacy.

* [Show HN: How I Topped the HuggingFace Open LLM Leaderboard on Two Gaming GPUs](https://dnhkng.github.io/posts/rys/) - A fascinating personal project outlines how GPUs can achieve extraordinary AI results.

* [LoGeR – 3D reconstruction from extremely long videos (DeepMind, UC Berkeley)](https://loger-project.github.io) - Researchers from DeepMind and UC Berkeley present innovations in 3D reconstruction with extensive video data.

## Tributes and Obituaries

* [Tony Hoare (1934-2026)](https://blog.computationalcomplexity.org/2026/03/tony-hoare-1934-2026.html) - A tribute to the famed computer scientist known for contributions such as Quicksort and Hoare logic.

* [Tony Hoare has died](https://blog.computationalcomplexity.org/2026/03/tony-hoare-1934-2026.html) - Commentary and remembrance for computer science legend Tony Hoare.

## Programming and Development Highlights

* [Two Years of Emacs Solo: 35 Modules, Zero External Packages, and a Full Refactor](https://www.rahuljuliato.com/posts/emacs-solo-two-years) - A developer shares insights from their journey of using Emacs over two years, showcasing custom modules while avoiding external packages.

* [Madblog: Turn a Markdown folder into a federated blog](https://blog.fabiomanganiello.com/article/Madblog-federated-blogging-from-markdown) - Discover how you can transform a simple folder of Markdown files into a fully functional federated blog.

* [EVi, a hard-fork of Vim](https://codeberg.org/NerdNextDoor/evi) - Introducing EVi, a lightweight, hackable fork of the Vim editor adopting modern patches and modularity.

* [Rebasing in Magit](https://entropicthoughts.com/rebasing-in-magit) - A comprehensive tutorial on streamlining the rebasing process using Magit within Emacs.

## Privacy and Security Insights

* [FBI Investigates Breach That May Have Hit Its Wiretapping Tools](https://yro.slashdot.org/story/26/03/09/236207/fbi-investigates-breach-that-may-have-hit-its-wiretapping-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The FBI launches an investigation into a breach potentially targeting its wiretapping technologies.

* [Online age-verification tools for child safety are surveilling adults](https://www.cnbc.com/2026/03/08/social-media-child-safety-internet-ai-surveillance.html) - An exploration into how tools intended for child protection inadvertently contribute to mass surveillance.

* [Debian decides not to decide on AI-generated contributions](https://lwn.net/SubscriberLink/1061544/125f911834966dd0/) - The Debian community deliberates over policies regarding AI-generated code submissions.

## Industry Updates and Market Shifts

* [German Publishers Push Regulators To Fine Apple Over App Tracking Transparency](https://apple.slashdot.org/story/26/03/10/050253/german-publishers-push-regulators-to-fine-apple-over-app-tracking-transparency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Publishers in Germany call for regulatory action against Apple's approach to app tracking transparency.

* [EQT Eyes $6 Billion Sale of SUSE](https://linux.slashdot.org/story/26/03/10/0450204/eqt-eyes-6-billion-sale-of-suse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - SUSE's current owner, EQT, is reportedly considering selling the open-source software company for $6 billion.

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

* [2026-03-10, 16:25:58](https://lobste.rs/s/lmjmig/ruby_users_forum_february_march_update) - [Ruby Users Forum February–March Update](https://www.rubyforum.org/t/monthly-update-february-wrap-up-march-preview/177/2)
* [2026-03-10, 16:17:55](https://news.ycombinator.com/item?id=47325280) - [Ad-tech is fascist tech](https://pluralistic.net/2026/03/10/ice-tech/#foreseeable-outcomes)
* [2026-03-10, 16:00:00](https://tech.slashdot.org/story/26/03/10/1524229/meta-acquires-moltbook-the-social-network-for-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Acquires Moltbook, the Social Network For AI Agents](https://tech.slashdot.org/story/26/03/10/1524229/meta-acquires-moltbook-the-social-network-for-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 15:45:04](https://lobste.rs/s/ysvfji/source_available_projects_their_ai) - [Source-available projects and their AI contribution policies](https://theconsensus.dev/p/2026/03/02/source-available-projects-and-their-ai-contribution-policies.html)
* [2026-03-10, 15:42:09](https://lobste.rs/s/lyktdk/tony_hoare_1934_2026) - [Tony Hoare (1934-2026)](https://blog.computationalcomplexity.org/2026/03/tony-hoare-1934-2026.html)
* [2026-03-10, 15:08:05](https://news.ycombinator.com/item?id=47324296) - [Launch HN: Didit (YC W26) – Stripe for Identity Verification](https://news.ycombinator.com/item?id=47324296)
* [2026-03-10, 15:01:35](https://news.ycombinator.com/item?id=47324211) - [Amazon is holding a mandatory meeting about AI breaking its systems](https://twitter.com/lukolejnik/status/2031257644724342957)
* [2026-03-10, 15:00:00](https://apple.slashdot.org/story/26/03/10/050253/german-publishers-push-regulators-to-fine-apple-over-app-tracking-transparency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [German Publishers Push Regulators To Fine Apple Over App Tracking Transparency](https://apple.slashdot.org/story/26/03/10/050253/german-publishers-push-regulators-to-fine-apple-over-app-tracking-transparency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 14:53:13](https://news.ycombinator.com/item?id=47324087) - [Debian decides not to decide on AI-generated contributions](https://lwn.net/SubscriberLink/1061544/125f911834966dd0/)
* [2026-03-10, 14:50:16](https://news.ycombinator.com/item?id=47324054) - [Tony Hoare has died](https://blog.computationalcomplexity.org/2026/03/tony-hoare-1934-2026.html)
* [2026-03-10, 14:38:06](https://news.ycombinator.com/item?id=47323900) - [Meta acquires Moltbook](https://www.axios.com/2026/03/10/meta-facebook-moltbook-agent-social-network)
* [2026-03-10, 14:05:15](https://lobste.rs/s/5mf3cb/rebasing_magit) - [Rebasing in Magit](https://entropicthoughts.com/rebasing-in-magit)
* [2026-03-10, 14:00:00](https://linux.slashdot.org/story/26/03/10/0450204/eqt-eyes-6-billion-sale-of-suse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EQT Eyes $6 Billion Sale of SUSE](https://linux.slashdot.org/story/26/03/10/0450204/eqt-eyes-6-billion-sale-of-suse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 13:38:39](https://news.ycombinator.com/item?id=47323105) - [Rebasing in Magit](https://entropicthoughts.com/rebasing-in-magit)
* [2026-03-10, 13:29:21](https://news.ycombinator.com/item?id=47322998) - [Sending Jabber/XMPP Messages via HTTP](https://gultsch.de/posts/xmpp-via-http/)
* [2026-03-10, 13:18:55](https://news.ycombinator.com/item?id=47322887) - [Show HN: How I Topped the HuggingFace Open LLM Leaderboard on Two Gaming GPUs](https://dnhkng.github.io/posts/rys/)
* [2026-03-10, 13:13:48](https://news.ycombinator.com/item?id=47322838) - [Show HN: DD Photos – open-source photo album site generator (Go and SvelteKit)](https://github.com/dougdonohoe/ddphotos)
* [2026-03-10, 13:10:48](https://news.ycombinator.com/item?id=47322815) - [Intel Demos Chip to Compute with Encrypted Data](https://spectrum.ieee.org/fhe-intel)
* [2026-03-10, 13:00:00](https://games.slashdot.org/story/26/03/10/0442249/many-international-game-developers-plan-to-skip-gdc-in-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Many International Game Developers Plan To Skip GDC In US](https://games.slashdot.org/story/26/03/10/0442249/many-international-game-developers-plan-to-skip-gdc-in-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 12:55:54](https://lobste.rs/s/9nzeu7/madblog_turn_markdown_folder_into) - [Madblog: Turn a Markdown folder into a federated blog](https://blog.fabiomanganiello.com/article/Madblog-federated-blogging-from-markdown)
* [2026-03-10, 12:55:42](https://news.ycombinator.com/item?id=47322635) - [Online age-verification tools for child safety are surveilling adults](https://www.cnbc.com/2026/03/08/social-media-child-safety-internet-ai-surveillance.html)
* [2026-03-10, 12:55:14](https://news.ycombinator.com/item?id=47322629) - [Traffic from Russia to Cloudflare is 60% down from last year](https://radar.cloudflare.com/traffic/ru?dateRange=52w)
* [2026-03-10, 12:13:03](https://lobste.rs/s/cpqm9i/too_much_color) - [Too Much Color](https://www.keithcirkel.co.uk/too-much-color/)
* [2026-03-10, 11:58:36](https://news.ycombinator.com/item?id=47322033) - [PgAdmin 4 9.13 with AI Assistant Panel](https://www.pgadmin.org/docs/pgadmin4/9.13/query_tool.html#ai-assistant-panel)
* [2026-03-10, 11:51:21](https://lobste.rs/s/gh0mwq/nominal_types_webassembly) - [nominal types in webassembly](https://wingolog.org/archives/2026/03/10/nominal-types-in-webassembly)
* [2026-03-10, 11:38:07](https://lobste.rs/s/izdkzi/tcxo_failure_analysis) - [TCXO failure analysis](https://serd.es/2026/03/06/TCXO-failure-analysis.html)
* [2026-03-10, 10:50:30](https://news.ycombinator.com/item?id=47321533) - [Yann LeCun&apos;s AI startup raises $1B in Europe&apos;s largest ever seed round](https://www.ft.com/content/e5245ec3-1a58-4eff-ab58-480b6259aaf1)
* [2026-03-10, 10:07:48](https://news.ycombinator.com/item?id=47321233) - [I put my whole life into a single database](https://howisfelix.today/)
* [2026-03-10, 10:07:13](https://lobste.rs/s/vkxmwj/redox_os_has_adopted_certificate_origin) - [Redox OS has adopted a Certificate of Origin policy and a strict no-LLM policy](https://gitlab.redox-os.org/redox-os/redox/-/blob/master/CONTRIBUTING.md)
* [2026-03-10, 10:00:00](https://yro.slashdot.org/story/26/03/09/236207/fbi-investigates-breach-that-may-have-hit-its-wiretapping-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FBI Investigates Breach That May Have Hit Its Wiretapping Tools](https://yro.slashdot.org/story/26/03/09/236207/fbi-investigates-breach-that-may-have-hit-its-wiretapping-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 08:57:01](https://lobste.rs/s/0lbjbs/troubleshooting_bsd_tcp_network) - [troubleshooting BSD TCP network performance: part 2 (fixing NetBSD)](https://omaera.org/wlog/tech/bsd_network_p2)
* [2026-03-10, 08:54:53](https://news.ycombinator.com/item?id=47320661) - [Redox OS has adopted a Certificate of Origin policy and a strict no-LLM policy](https://gitlab.redox-os.org/redox-os/redox/-/blob/master/CONTRIBUTING.md)
* [2026-03-10, 08:53:12](https://lobste.rs/s/v6p9go/two_years_emacs_solo_35_modules_zero) - [Two Years of Emacs Solo: 35 Modules, Zero External Packages, and a Full Refactor](https://www.rahuljuliato.com/posts/emacs-solo-two-years)
* [2026-03-10, 08:51:15](https://lobste.rs/s/izprt4/evi_hard_fork_vim) - [EVi, a hard-fork of Vim](https://codeberg.org/NerdNextDoor/evi)
* [2026-03-10, 08:47:35](https://lobste.rs/s/lsjk8m/dependency_tracking_is_hard) - [Dependency Tracking is Hard](https://daniel.haxx.se/blog/2026/03/10/dependency-tracking-is-hard/)
* [2026-03-10, 07:00:00](https://science.slashdot.org/story/26/03/09/230222/startup-wants-to-launch-a-space-mirror?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Startup Wants To Launch a Space Mirror](https://science.slashdot.org/story/26/03/09/230222/startup-wants-to-launch-a-space-mirror?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 06:16:06](https://news.ycombinator.com/item?id=47319620) - [LoGeR – 3D reconstruction from extremely long videos (DeepMind, UC Berkeley)](https://loger-project.github.io)
* [2026-03-10, 05:30:30](https://lobste.rs/s/eh90sq/ddr4_sdram_initialization_training) - [DDR4 SDRAM - Initialization, Training and Calibration](https://www.systemverilog.io/design/ddr4-initialization-and-calibration/)
* [2026-03-10, 03:30:00](https://news.slashdot.org/story/26/03/09/2252215/european-consortium-wants-open-source-alternative-to-google-play-integrity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [European Consortium Wants Open-Source Alternative To Google Play Integrity](https://news.slashdot.org/story/26/03/09/2252215/european-consortium-wants-open-source-alternative-to-google-play-integrity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 03:27:45](https://lobste.rs/s/ivb0bn/nextvi_4_0_small_hackable_vi_ex_editor_with) - [Nextvi 4.0 – A small, hackable vi/ex editor with an optional patch system](https://github.com/kyx0r/nextvi)
* [2026-03-10, 03:01:00](https://lobste.rs/s/apygc2/first_hacked_emacs_package) - [First (?) hacked Emacs package](https://old.reddit.com/r/emacs/comments/1rowm5i/first_hacked_emacs_package/)
* [2026-03-10, 02:44:13](https://lobste.rs/s/f9fepw/spacetimedb_short_technical_review) - [SpacetimeDB: a short technical review](https://strn.cat/w/articles/spacetime/)
* [2026-03-10, 02:32:31](https://lobste.rs/s/ckr3r2/do_illegible) - [Do the Illegible](https://ashwinsundar.com/posts/legibility-and-programming/)
* [2026-03-10, 01:00:00](https://mobile.slashdot.org/story/26/03/09/2234244/samsung-wants-to-let-you-vibe-code-your-galaxy-phone-experience?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Samsung Wants To Let You Vibe Code Your Galaxy Phone Experience](https://mobile.slashdot.org/story/26/03/09/2234244/samsung-wants-to-let-you-vibe-code-your-galaxy-phone-experience?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 00:16:44](https://news.ycombinator.com/item?id=47317616) - [Two Years of Emacs Solo](https://www.rahuljuliato.com/posts/emacs-solo-two-years)
* [2026-03-09, 23:22:06](https://news.ycombinator.com/item?id=47317132) - [No, it doesn&apos;t cost Anthropic $5k per Claude Code user](https://martinalderson.com/posts/no-it-doesnt-cost-anthropic-5k-per-claude-code-user/)
* [2026-03-09, 23:00:00](https://games.slashdot.org/story/26/03/09/1936236/ea-lays-off-staff-across-all-battlefield-studios-following-record-breaking-battlefield-6-launch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EA Lays Off Staff Across All Battlefield Studios Following Record-Breaking Battlefield 6 Launch](https://games.slashdot.org/story/26/03/09/1936236/ea-lays-off-staff-across-all-battlefield-studios-following-record-breaking-battlefield-6-launch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-09, 22:00:00](https://yro.slashdot.org/story/26/03/09/1930204/live-nation-avoids-ticketmaster-breakup-by-open-sourcing-their-ticketing-model?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Live Nation Avoids Ticketmaster Breakup By &apos;Open Sourcing&apos; Their Ticketing Model](https://yro.slashdot.org/story/26/03/09/1930204/live-nation-avoids-ticketmaster-breakup-by-open-sourcing-their-ticketing-model?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-09, 21:00:00](https://it.slashdot.org/story/26/03/09/1912259/how-ai-assistants-are-moving-the-security-goalposts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How AI Assistants Are Moving the Security Goalposts](https://it.slashdot.org/story/26/03/09/1912259/how-ai-assistants-are-moving-the-security-goalposts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-09, 20:00:00](https://tech.slashdot.org/story/26/03/09/1919227/bluesky-ceo-jay-graber-is-stepping-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bluesky CEO Jay Graber Is Stepping Down](https://tech.slashdot.org/story/26/03/09/1919227/bluesky-ceo-jay-graber-is-stepping-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-09, 19:00:00](https://hardware.slashdot.org/story/26/03/09/1716250/qualcomms-new-arduino-ventuno-q-is-an-ai-focused-computer-designed-for-robotics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Qualcomm&apos;s New Arduino Ventuno Q Is an AI-Focused Computer Designed For Robotics](https://hardware.slashdot.org/story/26/03/09/1716250/qualcomms-new-arduino-ventuno-q-is-an-ai-focused-computer-designed-for-robotics?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-09, 18:52:35](https://lobste.rs/s/flbwoi/ghostty_1_3_0) - [Ghostty 1.3.0](https://ghostty.org/docs/install/release-notes/1-3-0)
* [2026-03-09, 18:00:00](https://yro.slashdot.org/story/26/03/09/1710252/anthropic-sues-the-pentagon-after-being-labeled-a-threat-to-national-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Sues the Pentagon After Being Labeled a Threat To National Security](https://yro.slashdot.org/story/26/03/09/1710252/anthropic-sues-the-pentagon-after-being-labeled-a-threat-to-national-security?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-09, 17:24:53](https://lobste.rs/s/k6vpjh/meta_s_renewed_commitment_jemalloc) - [Meta’s Renewed Commitment to jemalloc](https://engineering.fb.com/2026/03/02/data-infrastructure/investing-in-infrastructure-metas-renewed-commitment-to-jemalloc/)
* [2026-03-09, 17:11:41](https://lobste.rs/s/yg9m2q/video_conferencing_with_postgres) - [Video Conferencing with Postgres](https://planetscale.com/blog/video-conferencing-with-postgres)
* [2026-03-09, 17:02:22](https://news.ycombinator.com/item?id=47311815) - [Building a Procedural Hex Map with Wave Function Collapse](https://felixturner.github.io/hex-map-wfc/article/)
* [2026-03-09, 17:00:00](https://mobile.slashdot.org/story/26/03/09/0453203/if-lockheed-martin-made-a-game-boy-would-you-buy-one?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;If Lockheed Martin Made a Game Boy, Would You Buy One?&apos;](https://mobile.slashdot.org/story/26/03/09/0453203/if-lockheed-martin-made-a-game-boy-would-you-buy-one?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-09, 16:43:39](https://news.ycombinator.com/item?id=47311484) - [JSLinux Now Supports x86_64](https://bellard.org/jslinux/)
* [2026-03-09, 15:28:31](https://lobste.rs/s/hsegku/abusing_arpa_tld_isn_t_supposed_host) - [Abusing .arpa, the TLD that isn’t supposed to host anything](https://www.infoblox.com/blog/threat-intelligence/abusing-arpa-the-tld-that-isnt-supposed-to-host-anything/)
* [2026-03-09, 13:55:14](https://lobste.rs/s/dnqcvh/your_llm_doesn_t_write_correct_code_it) - [Your LLM Doesn&apos;t Write Correct Code. It Writes Plausible Code](https://blog.katanaquant.com/p/your-llm-doesnt-write-correct-code)
* [2026-03-09, 10:52:19](https://lobste.rs/s/o8vbb7/production_query_plans_without) - [Production query plans without production data](https://boringsql.com/posts/portable-stats/)
* [2026-03-09, 10:33:30](https://lobste.rs/s/jreqtw/returning_rails_2026) - [Returning To Rails in 2026](https://www.markround.com/blog/2026/03/05/returning-to-rails-in-2026/)
* [2026-03-08, 22:54:17](https://news.ycombinator.com/item?id=47302493) - [Optimizing Top K in Postgres](https://www.paradedb.com/blog/optimizing-top-k)
* [2026-03-07, 18:56:56](https://news.ycombinator.com/item?id=47290426) - [A New Version of Our Oracle Solaris Environment for Developers](https://blogs.oracle.com/solaris/announcing-a-new-version-of-our-oracle-solaris-environment-for-developers)
* [2026-03-07, 11:28:37](https://news.ycombinator.com/item?id=47286657) - [The Gervais Principle, or the Office According to \&quot;The Office\&quot; (2009)](https://www.ribbonfarm.com/2009/10/07/the-gervais-principle-or-the-office-according-to-the-office/)
* [2026-03-07, 05:31:13](https://news.ycombinator.com/item?id=47284781) - [How many options fit into a boolean?](https://herecomesthemoon.net/2025/11/how-many-options-fit-into-a-boolean/)
* [2026-03-07, 04:49:38](https://news.ycombinator.com/item?id=47284587) - [TCXO Failure Analysis](https://serd.es/2026/03/06/TCXO-failure-analysis.html)
* [2026-03-07, 04:22:20](https://news.ycombinator.com/item?id=47284461) - [Practical Guide to Bare Metal C++](https://arobenko.github.io/bare_metal_cpp/#_abstract_classes)
* [2026-03-06, 19:11:24](https://news.ycombinator.com/item?id=47279633) - [Lotus 1-2-3 on the PC with DOS](https://stonetools.ghost.io/lotus123-dos/)
* [2026-03-06, 15:59:29](https://news.ycombinator.com/item?id=47276644) - [Caxlsx: Ruby gem for xlsx generation with charts, images, schema validation](https://github.com/caxlsx/caxlsx)
