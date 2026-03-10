# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence Advancements

* [LLMs are bad at vibing specifications](https://buttondown.com/hillelwayne/archive/llms-are-bad-at-vibing-specifications/) - A critique exploring the limitations of large language models (LLMs) in understanding nuanced specifications. [Comments](https://lobste.rs/s/8goxn3/llms_are_bad_at_vibing_specifications)

* [OpenAI Is Walking Away From Expanding Its Stargate Data Center With Oracle](https://developers.slashdot.org/story/26/03/10/0510223/openai-is-walking-away-from-expanding-its-stargate-data-center-with-oracle?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - OpenAI decides against growing its partnership with Oracle's Stargate Data Center, hinting at potential strategic pivots. [Comments](https://news.slashdot.org/story/26/03/10/0510223?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Meta Acquires Moltbook, the Social Network For AI Agents](https://tech.slashdot.org/story/26/03/10/1524229/meta-acquires-moltbook-the-social-network-for-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Meta furthers its vision by acquiring Moltbook, integrating AI agents into the social networking framework. [Comments](https://news.ycombinator.com/item?id=47323900)

* [Surpassing vLLM with a Generated Inference Stack](https://infinity.inc/case-studies/qwen3-optimization) - Showcasing the advancements in AI inference stack technologies, challenging existing infrastructures. [Comments](https://news.ycombinator.com/item?id=47324364)

## Tributes and Achievements

* [Tony Hoare (1934-2026)](https://blog.computationalcomplexity.org/2026/03/tony-hoare-1934-2026.html) - Honoring Tony Hoare, a towering figure in computer science known for Hoare logic. [Comments](https://news.ycombinator.com/item?id=47324054)

## Programming and Development

* [I built a programming language using Claude Code](https://ankursethi.com/blog/programming-language-claude-code/) - One developer's journey of creating a new programming language utilizing Claude Code. [Comments](https://news.ycombinator.com/item?id=47325595)

* [Throwing away 18 months of code and starting over](https://tompiagg.io/posts/we-threw-away-1-5-years-of-code) - A detailed narrative about the challenges and lessons in making a fresh start in development. [Comments](https://news.ycombinator.com/item?id=47324691)

* [Launching a Space Mirror](https://science.slashdot.org/story/26/03/09/230222/startup-wants-to-launch-a-space-mirror?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A startup proposes a bold vision of deploying a space mirror for innovative applications. [Comments](https://news.slashdot.org/story/26/03/09/230222?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Engineering and Hardware Innovations

* [Intel Demos Chip to Compute with Encrypted Data](https://spectrum.ieee.org/fhe-intel) - Intel unveils a chip leveraging fully homomorphic encryption to process encrypted data, a major breakthrough in hardware security. [Comments](https://news.ycombinator.com/item?id=47322815)

* [Amazon holds engineering meeting about GenAI based outages](https://arstechnica.com/ai/2026/03/after-outages-amazon-to-make-senior-engineers-sign-off-on-ai-assisted-changes/) - Addressing outages caused by AI, Amazon establishes new protocols to mitigate risks. [Comments](https://lobste.rs/s/t5dvs5/amazon_holds_engineering_meeting_about)

## Open Source and Community Projects

* [Redox OS has adopted a Certificate of Origin policy and a strict no-LLM policy](https://gitlab.redox-os.org/redox-os/redox/-/blob/master/CONTRIBUTING.md) - Embracing open-source principles, Redox OS solidifies its policies against using LLM contributions. [Comments](https://lobste.rs/s/vkxmwj/redox_os_has_adopted_certificate_origin)

* [Debian decides not to decide on AI-generated contributions](https://lwn.net/SubscriberLink/1061544/125f911834966dd0/) - Debian opts to remain neutral on the integration of AI-generated code in open source projects. [Comments](https://news.ycombinator.com/item?id=47324087)

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

* [2026-03-10, 19:00:00](https://science.slashdot.org/story/26/03/10/1540242/ig-nobels-ceremony-moves-to-europe-indefinitely-citing-us-safety-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ig Nobels Ceremony Moves To Europe Indefinitely, Citing US Safety Concerns](https://science.slashdot.org/story/26/03/10/1540242/ig-nobels-ceremony-moves-to-europe-indefinitely-citing-us-safety-concerns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 18:53:19](https://lobste.rs/s/8goxn3/llms_are_bad_at_vibing_specifications) - [LLMs are bad at vibing specifications](https://buttondown.com/hillelwayne/archive/llms-are-bad-at-vibing-specifications/)
* [2026-03-10, 18:00:00](https://developers.slashdot.org/story/26/03/10/0510223/openai-is-walking-away-from-expanding-its-stargate-data-center-with-oracle?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Is Walking Away From Expanding Its Stargate Data Center With Oracle](https://developers.slashdot.org/story/26/03/10/0510223/openai-is-walking-away-from-expanding-its-stargate-data-center-with-oracle?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 17:49:53](https://news.ycombinator.com/item?id=47326555) - [Billion-Parameter Theories](https://www.worldgov.org/complexity.html)
* [2026-03-10, 17:14:52](https://news.ycombinator.com/item?id=47326101) - [Launch HN: RunAnywhere (YC W26) – Faster AI Inference on Apple Silicon](https://github.com/RunanywhereAI/rcli)
* [2026-03-10, 17:07:59](https://news.ycombinator.com/item?id=47326034) - [Isotopic Evidence for a Cold and Distant Origin of Interstellar Object 3I/Atlas](https://arxiv.org/abs/2603.06911)
* [2026-03-10, 17:07:27](https://news.ycombinator.com/item?id=47326025) - [Defeat as Method](https://www.cabinetmagazine.org/issues/71/khosravi.php)
* [2026-03-10, 17:00:00](https://it.slashdot.org/story/26/03/10/0521258/claude-ai-finds-bugs-in-microsoft-ctos-40-year-old-apple-ii-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Claude AI Finds Bugs In Microsoft CTO&apos;s 40-Year-Old Apple II Code](https://it.slashdot.org/story/26/03/10/0521258/claude-ai-finds-bugs-in-microsoft-ctos-40-year-old-apple-ii-code?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 16:45:35](https://lobste.rs/s/ktzbfa/i_built_programming_language_using) - [I built a programming language using Claude Code](https://ankursethi.com/blog/programming-language-claude-code/)
* [2026-03-10, 16:37:29](https://news.ycombinator.com/item?id=47325595) - [I built a programming language using Claude Code](https://ankursethi.com/blog/programming-language-claude-code/)
* [2026-03-10, 16:00:00](https://tech.slashdot.org/story/26/03/10/1524229/meta-acquires-moltbook-the-social-network-for-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meta Acquires Moltbook, the Social Network For AI Agents](https://tech.slashdot.org/story/26/03/10/1524229/meta-acquires-moltbook-the-social-network-for-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 15:45:04](https://lobste.rs/s/ysvfji/source_available_projects_their_ai) - [Source-available projects and their AI contribution policies](https://theconsensus.dev/p/2026/03/02/source-available-projects-and-their-ai-contribution-policies.html)
* [2026-03-10, 15:42:09](https://lobste.rs/s/lyktdk/tony_hoare_1934_2026) - [Tony Hoare (1934-2026)](https://blog.computationalcomplexity.org/2026/03/tony-hoare-1934-2026.html)
* [2026-03-10, 15:35:19](https://news.ycombinator.com/item?id=47324691) - [Throwing away 18 months of code and starting over](https://tompiagg.io/posts/we-threw-away-1-5-years-of-code)
* [2026-03-10, 15:18:39](https://news.ycombinator.com/item?id=47324448) - [The Enterprise Context Layer](https://andychen32.substack.com/p/the-enterprise-context-layer)
* [2026-03-10, 15:12:52](https://news.ycombinator.com/item?id=47324364) - [Surpassing vLLM with a Generated Inference Stack](https://infinity.inc/case-studies/qwen3-optimization)
* [2026-03-10, 15:08:05](https://news.ycombinator.com/item?id=47324296) - [Launch HN: Didit (YC W26) – Stripe for Identity Verification](https://news.ycombinator.com/item?id=47324296)
* [2026-03-10, 15:00:00](https://apple.slashdot.org/story/26/03/10/050253/german-publishers-push-regulators-to-fine-apple-over-app-tracking-transparency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [German Publishers Push Regulators To Fine Apple Over App Tracking Transparency](https://apple.slashdot.org/story/26/03/10/050253/german-publishers-push-regulators-to-fine-apple-over-app-tracking-transparency?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 14:53:13](https://news.ycombinator.com/item?id=47324087) - [Debian decides not to decide on AI-generated contributions](https://lwn.net/SubscriberLink/1061544/125f911834966dd0/)
* [2026-03-10, 14:50:43](https://news.ycombinator.com/item?id=47324058) - [We are building data breach machines and nobody cares](https://idealloc.me/posts/we-are-building-data-breach-machines-and-nobody-cares/)
* [2026-03-10, 14:50:16](https://news.ycombinator.com/item?id=47324054) - [Tony Hoare has died](https://blog.computationalcomplexity.org/2026/03/tony-hoare-1934-2026.html)
* [2026-03-10, 14:38:06](https://news.ycombinator.com/item?id=47323900) - [Meta acquires Moltbook](https://www.axios.com/2026/03/10/meta-facebook-moltbook-agent-social-network)
* [2026-03-10, 14:37:55](https://news.ycombinator.com/item?id=47323891) - [RFC 454545 – Human Em Dash Standard](https://gist.github.com/bignimbus/a75cc9d703abf0b21a57c0d21a79e2be)
* [2026-03-10, 14:25:25](https://lobste.rs/s/t5dvs5/amazon_holds_engineering_meeting_about) - [Amazon holds engineering meeting about GenAI based outages](https://arstechnica.com/ai/2026/03/after-outages-amazon-to-make-senior-engineers-sign-off-on-ai-assisted-changes/)
* [2026-03-10, 14:05:15](https://lobste.rs/s/5mf3cb/rebasing_magit) - [Rebasing in Magit](https://entropicthoughts.com/rebasing-in-magit)
* [2026-03-10, 14:00:00](https://linux.slashdot.org/story/26/03/10/0450204/eqt-eyes-6-billion-sale-of-suse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EQT Eyes $6 Billion Sale of SUSE](https://linux.slashdot.org/story/26/03/10/0450204/eqt-eyes-6-billion-sale-of-suse?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 13:38:39](https://news.ycombinator.com/item?id=47323105) - [Rebasing in Magit](https://entropicthoughts.com/rebasing-in-magit)
* [2026-03-10, 13:18:55](https://news.ycombinator.com/item?id=47322887) - [Show HN: How I Topped the HuggingFace Open LLM Leaderboard on Two Gaming GPUs](https://dnhkng.github.io/posts/rys/)
* [2026-03-10, 13:10:48](https://news.ycombinator.com/item?id=47322815) - [Intel Demos Chip to Compute with Encrypted Data](https://spectrum.ieee.org/fhe-intel)
* [2026-03-10, 13:00:00](https://games.slashdot.org/story/26/03/10/0442249/many-international-game-developers-plan-to-skip-gdc-in-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Many International Game Developers Plan To Skip GDC In US](https://games.slashdot.org/story/26/03/10/0442249/many-international-game-developers-plan-to-skip-gdc-in-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 12:55:54](https://lobste.rs/s/9nzeu7/madblog_turn_markdown_folder_into) - [Madblog: Turn a Markdown folder into a federated blog](https://blog.fabiomanganiello.com/article/Madblog-federated-blogging-from-markdown)
* [2026-03-10, 12:55:42](https://news.ycombinator.com/item?id=47322635) - [Online age-verification tools for child safety are surveilling adults](https://www.cnbc.com/2026/03/08/social-media-child-safety-internet-ai-surveillance.html)
* [2026-03-10, 12:13:03](https://lobste.rs/s/cpqm9i/too_much_color) - [Too Much Color](https://www.keithcirkel.co.uk/too-much-color/)
* [2026-03-10, 11:58:36](https://news.ycombinator.com/item?id=47322033) - [PgAdmin 4 9.13 with AI Assistant Panel](https://www.pgadmin.org/docs/pgadmin4/9.13/query_tool.html#ai-assistant-panel)
* [2026-03-10, 11:51:21](https://lobste.rs/s/gh0mwq/nominal_types_webassembly) - [nominal types in webassembly](https://wingolog.org/archives/2026/03/10/nominal-types-in-webassembly)
* [2026-03-10, 11:38:07](https://lobste.rs/s/izdkzi/tcxo_failure_analysis) - [TCXO failure analysis](https://serd.es/2026/03/06/TCXO-failure-analysis.html)
* [2026-03-10, 10:07:48](https://news.ycombinator.com/item?id=47321233) - [I put my whole life into a single database](https://howisfelix.today/)
* [2026-03-10, 10:07:13](https://lobste.rs/s/vkxmwj/redox_os_has_adopted_certificate_origin) - [Redox OS has adopted a Certificate of Origin policy and a strict no-LLM policy](https://gitlab.redox-os.org/redox-os/redox/-/blob/master/CONTRIBUTING.md)
* [2026-03-10, 10:00:00](https://yro.slashdot.org/story/26/03/09/236207/fbi-investigates-breach-that-may-have-hit-its-wiretapping-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [FBI Investigates Breach That May Have Hit Its Wiretapping Tools](https://yro.slashdot.org/story/26/03/09/236207/fbi-investigates-breach-that-may-have-hit-its-wiretapping-tools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 08:57:01](https://lobste.rs/s/0lbjbs/troubleshooting_bsd_tcp_network) - [troubleshooting BSD TCP network performance: part 2 (fixing NetBSD)](https://omaera.org/wlog/tech/bsd_network_p2)
* [2026-03-10, 08:54:53](https://news.ycombinator.com/item?id=47320661) - [Redox OS has adopted a Certificate of Origin policy and a strict no-LLM policy](https://gitlab.redox-os.org/redox-os/redox/-/blob/master/CONTRIBUTING.md)
* [2026-03-10, 08:53:12](https://lobste.rs/s/v6p9go/two_years_emacs_solo_35_modules_zero) - [Two Years of Emacs Solo: 35 Modules, Zero External Packages, and a Full Refactor](https://www.rahuljuliato.com/posts/emacs-solo-two-years)
* [2026-03-10, 08:51:15](https://lobste.rs/s/izprt4/evi_hard_fork_vim) - [EVi, a hard-fork of Vim](https://codeberg.org/NerdNextDoor/evi)
* [2026-03-10, 08:48:40](https://news.ycombinator.com/item?id=47320614) - [Levels of Agentic Engineering](https://www.bassimeledath.com/blog/levels-of-agentic-engineering)
* [2026-03-10, 08:47:35](https://lobste.rs/s/lsjk8m/dependency_tracking_is_hard) - [Dependency Tracking is Hard](https://daniel.haxx.se/blog/2026/03/10/dependency-tracking-is-hard/)
* [2026-03-10, 08:46:53](https://news.ycombinator.com/item?id=47320600) - [Yann LeCun raises $1B to build AI that understands the physical world](https://www.wired.com/story/yann-lecun-raises-dollar1-billion-to-build-ai-that-understands-the-physical-world/)
* [2026-03-10, 07:00:00](https://science.slashdot.org/story/26/03/09/230222/startup-wants-to-launch-a-space-mirror?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Startup Wants To Launch a Space Mirror](https://science.slashdot.org/story/26/03/09/230222/startup-wants-to-launch-a-space-mirror?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 05:30:30](https://lobste.rs/s/eh90sq/ddr4_sdram_initialization_training) - [DDR4 SDRAM - Initialization, Training and Calibration](https://www.systemverilog.io/design/ddr4-initialization-and-calibration/)
* [2026-03-10, 03:30:00](https://news.slashdot.org/story/26/03/09/2252215/european-consortium-wants-open-source-alternative-to-google-play-integrity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [European Consortium Wants Open-Source Alternative To Google Play Integrity](https://news.slashdot.org/story/26/03/09/2252215/european-consortium-wants-open-source-alternative-to-google-play-integrity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-10, 03:27:45](https://lobste.rs/s/ivb0bn/nextvi_4_0_small_hackable_vi_ex_editor_with) - [Nextvi 4.0 – A small, hackable vi/ex editor with an optional patch system](https://github.com/kyx0r/nextvi)
* [2026-03-10, 03:01:00](https://lobste.rs/s/apygc2/first_hacked_emacs_package) - [First (?) hacked Emacs package](https://old.reddit.com/r/emacs/comments/1rowm5i/first_hacked_emacs_package/)
* [2026-03-10, 02:44:13](https://lobste.rs/s/f9fepw/spacetimedb_short_technical_review) - [SpacetimeDB: a short technical review](https://strn.cat/w/articles/spacetime/)
* [2026-03-10, 02:32:31](https://lobste.rs/s/ckr3r2/do_illegible) - [Do the Illegible](https://ashwinsundar.com/posts/legibility-and-programming/)
* [2026-03-10, 01:00:00](https://mobile.slashdot.org/story/26/03/09/2234244/samsung-wants-to-let-you-vibe-code-your-galaxy-phone-experience?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Samsung Wants To Let You Vibe Code Your Galaxy Phone Experience](https://mobile.slashdot.org/story/26/03/09/2234244/samsung-wants-to-let-you-vibe-code-your-galaxy-phone-experience?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-09, 23:37:08](https://news.ycombinator.com/item?id=47317288) - [Open Weights Isn&apos;t Open Training](https://www.workshoplabs.ai/blog/open-weights-open-training)
* [2026-03-09, 23:00:00](https://games.slashdot.org/story/26/03/09/1936236/ea-lays-off-staff-across-all-battlefield-studios-following-record-breaking-battlefield-6-launch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EA Lays Off Staff Across All Battlefield Studios Following Record-Breaking Battlefield 6 Launch](https://games.slashdot.org/story/26/03/09/1936236/ea-lays-off-staff-across-all-battlefield-studios-following-record-breaking-battlefield-6-launch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-09, 22:00:00](https://yro.slashdot.org/story/26/03/09/1930204/live-nation-avoids-ticketmaster-breakup-by-open-sourcing-their-ticketing-model?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Live Nation Avoids Ticketmaster Breakup By &apos;Open Sourcing&apos; Their Ticketing Model](https://yro.slashdot.org/story/26/03/09/1930204/live-nation-avoids-ticketmaster-breakup-by-open-sourcing-their-ticketing-model?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-09, 21:00:00](https://it.slashdot.org/story/26/03/09/1912259/how-ai-assistants-are-moving-the-security-goalposts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How AI Assistants Are Moving the Security Goalposts](https://it.slashdot.org/story/26/03/09/1912259/how-ai-assistants-are-moving-the-security-goalposts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-09, 20:00:00](https://tech.slashdot.org/story/26/03/09/1919227/bluesky-ceo-jay-graber-is-stepping-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Bluesky CEO Jay Graber Is Stepping Down](https://tech.slashdot.org/story/26/03/09/1919227/bluesky-ceo-jay-graber-is-stepping-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-09, 18:52:35](https://lobste.rs/s/flbwoi/ghostty_1_3_0) - [Ghostty 1.3.0](https://ghostty.org/docs/install/release-notes/1-3-0)
* [2026-03-09, 17:24:53](https://lobste.rs/s/k6vpjh/meta_s_renewed_commitment_jemalloc) - [Meta’s Renewed Commitment to jemalloc](https://engineering.fb.com/2026/03/02/data-infrastructure/investing-in-infrastructure-metas-renewed-commitment-to-jemalloc/)
* [2026-03-09, 13:55:14](https://lobste.rs/s/dnqcvh/your_llm_doesn_t_write_correct_code_it) - [Your LLM Doesn&apos;t Write Correct Code. It Writes Plausible Code](https://blog.katanaquant.com/p/your-llm-doesnt-write-correct-code)
* [2026-03-09, 10:52:19](https://lobste.rs/s/o8vbb7/production_query_plans_without) - [Production query plans without production data](https://boringsql.com/posts/portable-stats/)
* [2026-03-09, 10:33:30](https://lobste.rs/s/jreqtw/returning_rails_2026) - [Returning To Rails in 2026](https://www.markround.com/blog/2026/03/05/returning-to-rails-in-2026/)
* [2026-03-08, 13:54:08](https://news.ycombinator.com/item?id=47297326) - [Bypassing Apache Fop PostScript Escaping to Reach GhostScript](https://offsec.almond.consulting/bypassing-apache-fop-escaping-to-reach-ghostscript.html)
* [2026-03-07, 20:22:48](https://news.ycombinator.com/item?id=47291124) - [MariaDB innovation: vector index performance](http://smalldatum.blogspot.com/2026/02/mariadb-innovation-vector-index.html)
* [2026-03-07, 19:54:26](https://news.ycombinator.com/item?id=47290918) - [I used pulsar detection techniques to turn a phone into a watch timegrapher](https://www.chronolog.watch/timegrapher)
* [2026-03-07, 18:56:56](https://news.ycombinator.com/item?id=47290426) - [A new Oracle Solaris Common Build Environment (CBE) release](https://blogs.oracle.com/solaris/announcing-a-new-version-of-our-oracle-solaris-environment-for-developers)
* [2026-03-07, 11:28:37](https://news.ycombinator.com/item?id=47286657) - [The Gervais Principle, or the Office According to \&quot;The Office\&quot; (2009)](https://www.ribbonfarm.com/2009/10/07/the-gervais-principle-or-the-office-according-to-the-office/)
* [2026-03-07, 05:31:13](https://news.ycombinator.com/item?id=47284781) - [How many options fit into a boolean?](https://herecomesthemoon.net/2025/11/how-many-options-fit-into-a-boolean/)
