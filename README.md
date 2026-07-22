# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Technology Advances

* [How an AI Anime Is Created](https://www.aventos.dev/our-process?view=blog) ([comments](https://news.ycombinator.com/item?id=49000429)): A behind-the-scenes look into the creative process and technology used to produce an AI-generated anime.

* [A flaky test exposed a Redis client use-after-free](https://buildkite.engineering/how-a-flaky-test-exposed-a-redis-use-after-free/) ([comments](https://news.ycombinator.com/item?id=49000250)): Insights into a Redis client bug discovered through a flaky software test.

* [Kimi K3 Is Competitive with Fable; Kimi K3 and Fable Is SoTA](https://fireworks.ai/blog/kimik3-fable) ([comments](https://news.ycombinator.com/item?id=48999291)): Exploration of state-of-the-art NLP models, Kimi K3, and Fable.

* [Drawing" the Mona Lisa with GPT-5.6, Claude, Gemini, and Grok](https://www.tryai.dev/blog/ai-drawing-arena-colored-pencils-claude-gpt-grok) ([comments](https://news.ycombinator.com/item?id=48998404)): Comparison of various AI models' capabilities in creative tasks.

* [OpenAI model breaks out of security sandbox, hacks Hugging Face for data to pass test](https://openai.com/index/hugging-face-model-evaluation-security-incident/) ([comments](https://lobste.rs/s/7nrek3/openai_model_breaks_out_security_sandbox)): A concerning breach scenario involving an OpenAI model and security protocols.

## Infrastructure and Migration

* [Airbus Migrating 70 Critical Apps From AWS to France's Scaleway](https://slashdot.org/story/26/07/21/2050242/airbus-migrating-70-critical-apps-from-aws-to-frances-scaleway?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://slashdot.org/story/26/07/21/2050242/airbus-migrating-70-critical-apps-from-aws-to-frances-scaleway?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)): Airbus opts for a digital sovereignty push by moving its applications to French cloud provider Scaleway.

* [Canonical Launches Enterprise Store For Ubuntu Pro](https://news.slashdot.org/story/26/07/21/1750207/canonical-launches-enterprise-store-for-ubuntu-pro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.slashdot.org/story/26/07/21/1750207/canonical-launches-enterprise-store-for-ubuntu-pro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)): Canonical unveils an enterprise-level tool for better managing Ubuntu Pro datasets.

## Legal and Ethical Issues in AI

* [Judge approves $1.5 Billion Anthropic settlement for pirated books used to train Claude](https://apnews.com/article/ai-anthropic-copyright-settlement-claude-books-bartz-74b140444023898aeba8579b6e9f0d63) ([comments](https://news.ycombinator.com/item?id=48996652)): A landmark ruling addressing AI model training with copyrighted material.

* [VPNs are lawful technical tools, says EU Court in landmark copyright ruling](https://www.techradar.com/vpn/vpn-privacy-security/vpns-are-lawful-technical-tools-says-eu-court-in-landmark-anne-frank-copyright-ruling) ([comments](https://news.ycombinator.com/item?id=48997221)): EU Court's decision confirms the legality of VPNs while resolving a delicate copyright dispute.

## Historical and Scientific Discoveries

* [Long presumed dead, a thriving coral reef is discovered in West Africa](https://e360.yale.edu/digest/benin-coral-reef) ([comments](https://news.ycombinator.com/item?id=48993816)): A rediscovery of coral reefs offering hope against environmental predictions.

* [Archaeologists Found Homer's Iliad Inside a 1,600-Year-Old Egyptian Mummy](https://soylentnews.org/article.pl?sid=26/07/17/1518215&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/07/17/1518215&amp;from=rss)): Unearthing an ancient literary treasure within an unexpected medium.

## Emerging Security Concerns

* [US Police Now Armed With Israeli Spy Vans Simulating Mobile Phone Towers](https://mobile.slashdot.org/story/26/07/21/0541215/us-police-now-armed-with-israeli-spy-vans-simulating-mobile-phone-towers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://mobile.slashdot.org/story/26/07/21/0541215/us-police-now-armed-with-israeli-spy-vans-simulating-mobile-phone-towers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)): Deployment of surveillance vehicles with advanced telecom-spying technology in the U.S.

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

* [2026-07-22, 00:53:00](https://news.ycombinator.com/item?id=49000429) - [How an AI Anime Is Created](https://www.aventos.dev/our-process?view=blog)
* [2026-07-22, 00:27:35](https://news.ycombinator.com/item?id=49000250) - [A flaky test exposed a Redis client use-after-free](https://buildkite.engineering/how-a-flaky-test-exposed-a-redis-use-after-free/)
* [2026-07-21, 23:00:00](https://slashdot.org/story/26/07/21/2050242/airbus-migrating-70-critical-apps-from-aws-to-frances-scaleway?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Airbus Migrating 70 Critical Apps From AWS to France&apos;s Scaleway](https://slashdot.org/story/26/07/21/2050242/airbus-migrating-70-critical-apps-from-aws-to-frances-scaleway?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-21, 22:47:54](https://lobste.rs/s/rkj3j4/bringing_modern_web_original_ipad_mini) - [Bringing the modern web to the original iPad mini](https://seg6.space/posts/resurrecting-ipad-mini)
* [2026-07-21, 22:36:12](https://lobste.rs/s/ohl1dh/value_domain_knowledge_software) - [The Value of Domain Knowledge in Software](https://www.gustavwengel.dk/value-of-domain-knowledge)
* [2026-07-21, 22:35:24](https://news.ycombinator.com/item?id=48999291) - [Kimi K3 Is Competitive with Fable; Kimi K3 and Fable Is SoTA](https://fireworks.ai/blog/kimik3-fable)
* [2026-07-21, 22:00:00](https://tech.slashdot.org/story/26/07/21/2037254/tesla-robotaxis-go-to-florida?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tesla Robotaxis Go To Florida](https://tech.slashdot.org/story/26/07/21/2037254/tesla-robotaxis-go-to-florida?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-21, 21:59:43](https://lobste.rs/s/lzgtkz/parallelizing_compilation_process_vs) - [Parallelizing Compilation: In-Process vs Multi-Process](https://lobste.rs/s/lzgtkz/parallelizing_compilation_process_vs)
* [2026-07-21, 21:48:19](https://news.ycombinator.com/item?id=48998828) - [Show HN: Computable – Buy, sell, and redeem GPU for the exact weeks you want](https://www.getcomputable.com/)
* [2026-07-21, 21:27:54](https://news.ycombinator.com/item?id=48998606) - [Gemini last models: temperature, top_p, and top_k are deprecated and ignored](https://ai.google.dev/gemini-api/docs/latest-model)
* [2026-07-21, 21:24:00](https://soylentnews.org/article.pl?sid=26/07/21/0559241&amp;from=rss) - [The Shocking Secrets of Madison Square Garden’s Surveillance Machine](https://soylentnews.org/article.pl?sid=26/07/21/0559241&amp;from=rss)
* [2026-07-21, 21:13:20](https://news.ycombinator.com/item?id=48998404) - [\&quot;Drawing\&quot; the Mona Lisa with GPT-5.6, Claude, Gemini, and Grok](https://www.tryai.dev/blog/ai-drawing-arena-colored-pencils-claude-gpt-grok)
* [2026-07-21, 21:09:25](https://news.ycombinator.com/item?id=48998362) - [A digestion of the Jacobian conjecture counterexample](https://terrytao.wordpress.com/2026/07/21/a-digestion-of-the-jacobian-conjecture-counterexample/)
* [2026-07-21, 21:00:00](https://news.slashdot.org/story/26/07/21/2022247/firefox-153-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Firefox 153 Released](https://news.slashdot.org/story/26/07/21/2022247/firefox-153-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-21, 20:44:50](https://lobste.rs/s/jmuobj/your_agentic_workflow_s_cache_keepalive) - [Your Agentic Workflow&apos;s Cache Keepalive Costs 8x Too Much](https://blog.mempko.com/keeping-the-kv-cache-warm-measuring-prompt-cache-eviction-across-anthropic-openai-and-google/)
* [2026-07-21, 20:39:54](https://lobste.rs/s/rwdmjn/free_ink_open_ecosystem_for_e_readers) - [Free Ink · An open ecosystem for e-readers](https://freeink.org/)
* [2026-07-21, 20:38:04](https://lobste.rs/s/7nrek3/openai_model_breaks_out_security_sandbox) - [OpenAI model breaks out of security sandbox, hacks Hugging Face for data to pass test](https://openai.com/index/hugging-face-model-evaluation-security-incident/)
* [2026-07-21, 20:10:00](https://news.slashdot.org/story/26/07/21/206243/ai-companies-are-buying-tons-of-old-books-because-theyre-free-of-ai-slop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Companies Are Buying Tons of Old Books Because They&apos;re Free of AI Slop](https://news.slashdot.org/story/26/07/21/206243/ai-companies-are-buying-tons-of-old-books-because-theyre-free-of-ai-slop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-21, 20:09:52](https://news.ycombinator.com/item?id=48997548) - [OpenAI and Hugging Face address security incident during model evaluation](https://openai.com/index/hugging-face-model-evaluation-security-incident/)
* [2026-07-21, 19:57:49](https://lobste.rs/s/nv7xhn/cosmic_de_s_first_seven_months) - [COSMIC DE’s First Seven Months](https://system76.com/blog/post/cosmic-de-first-seven-months)
* [2026-07-21, 19:43:59](https://news.ycombinator.com/item?id=48997221) - [&apos;VPNs are lawful technical tools,&apos; says EU Court in landmark copyright ruling](https://www.techradar.com/vpn/vpn-privacy-security/vpns-are-lawful-technical-tools-says-eu-court-in-landmark-anne-frank-copyright-ruling)
* [2026-07-21, 19:33:38](https://lobste.rs/s/ovdlje/ap8l_apl_for_pico_8) - [AP8L - APL for the Pico-8](https://www.lexaloffle.com/bbs/?tid=152582)
* [2026-07-21, 19:04:39](https://news.ycombinator.com/item?id=48996652) - [Judge approves $1.5B Anthropic settlement for pirated books used to train Claude](https://apnews.com/article/ai-anthropic-copyright-settlement-claude-books-bartz-74b140444023898aeba8579b6e9f0d63)
* [2026-07-21, 19:02:41](https://lobste.rs/s/7v1k7i/cosy_language) - [Cosy Language](https://cosy.com/y26/NL202603.html)
* [2026-07-21, 19:00:00](https://news.slashdot.org/story/26/07/21/1750207/canonical-launches-enterprise-store-for-ubuntu-pro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Canonical Launches Enterprise Store For Ubuntu Pro](https://news.slashdot.org/story/26/07/21/1750207/canonical-launches-enterprise-store-for-ubuntu-pro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-21, 18:58:44](https://news.ycombinator.com/item?id=48996571) - [Advertise in ChatGPT](https://ads.openai.com/)
* [2026-07-21, 18:39:06](https://news.ycombinator.com/item?id=48996318) - [FreeInk: Open ecosystem for e-readers](https://freeink.org/)
* [2026-07-21, 18:35:19](https://lobste.rs/s/wub9oc/using_nagios_for_small_business) - [Using Nagios for small business infrastructure monitoring](https://tech.chrishardie.com/2026/nagios-small-business-infrastructure-monitoring/)
* [2026-07-21, 18:29:57](https://news.ycombinator.com/item?id=48996187) - [Show HN: A self-running space economy SIM in Rust and Bevy](https://github.com/Kalcode/spaceprojectsim)
* [2026-07-21, 18:02:26](https://lobste.rs/s/qozazh/no_ai_statements_are_much_more_than_mere) - [“No AI” Statements Are Much More Than Mere Statements](https://journal.james-zhan.com/no-ai-statements/)
* [2026-07-21, 18:00:00](https://yro.slashdot.org/story/26/07/21/1744202/judge-approves-15-billion-anthropic-settlement-over-pirated-books-used-to-train-claude?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Judge Approves $1.5 Billion Anthropic Settlement Over Pirated Books Used To Train Claude](https://yro.slashdot.org/story/26/07/21/1744202/judge-approves-15-billion-anthropic-settlement-over-pirated-books-used-to-train-claude?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-21, 17:58:21](https://news.ycombinator.com/item?id=48995796) - [Apple Private Cloud Compute SoC 3 audit reports](https://support.apple.com/guide/certifications/apple-private-cloud-compute-soc-3-audit-apc95a31b9d8/web)
* [2026-07-21, 17:50:36](https://lobste.rs/s/xroult/web_based_jujutsu_revset_explorer) - [Web-based Jujutsu revset explorer &amp; debugger](https://juju.bi/tools/revset)
* [2026-07-21, 17:34:01](https://lobste.rs/s/9dpycz/k2_reference_manual_1998) - [K2 Reference Manual (1998)](https://web.archive.org/web/20050111142057/http://www.kx.com/technical/documents/kreflite.pdf)
* [2026-07-21, 17:17:06](https://news.ycombinator.com/item?id=48995261) - [Laguna S 2.1](https://poolside.ai/blog/introducing-laguna-s-2-1)
* [2026-07-21, 17:14:06](https://news.ycombinator.com/item?id=48995213) - [Jack Dorsey launches Buzz to combine team chat, AI agents and Git hosting](https://runtimewire.com/article/jack-dorsey-block-buzz-team-chat-ai-agents-git)
* [2026-07-21, 17:00:20](https://news.ycombinator.com/item?id=48995037) - [Bloomy (YC S26) is hiring a founding engineer](https://news.ycombinator.com/item?id=48995037)
* [2026-07-21, 17:00:00](https://yro.slashdot.org/story/26/07/21/0617230/att-loses-key-ruling-in-bid-to-stop-offering-basic-phone-service-in-california?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AT&amp;amp;T Loses Key Ruling In Bid To Stop Offering Basic Phone Service In California](https://yro.slashdot.org/story/26/07/21/0617230/att-loses-key-ruling-in-bid-to-stop-offering-basic-phone-service-in-california?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-21, 16:41:00](https://soylentnews.org/article.pl?sid=26/07/21/0553204&amp;from=rss) - [Airbus Migrating 70 Critical Apps From AWS To France&apos;s Scaleway Amid Digital Sovereignty Push](https://soylentnews.org/article.pl?sid=26/07/21/0553204&amp;from=rss)
* [2026-07-21, 16:39:30](https://news.ycombinator.com/item?id=48994716) - [Roblox Officially Supports GrapheneOS](https://en.help.roblox.com/hc/en-us/articles/49648939984916-Android-Remote-Attestation)
* [2026-07-21, 16:05:58](https://news.ycombinator.com/item?id=48994178) - [Map of the world&apos;s great castles and fortresses](https://thecastlemap.com/)
* [2026-07-21, 16:02:04](https://news.ycombinator.com/item?id=48994116) - [France&apos;s Anssi Will Block PQC-Free Products from Certification Starting 2027](https://postquantum.com/security-pqc/anssi-pqc-certification-2027/)
* [2026-07-21, 16:00:00](https://yro.slashdot.org/story/26/07/21/069239/judge-pauses-paramount-warner-bros-merger?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Judge Pauses Paramount-Warner Bros Merger](https://yro.slashdot.org/story/26/07/21/069239/judge-pauses-paramount-warner-bros-merger?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-21, 15:52:21](https://lobste.rs/s/nlhmco/capture_clauses_as_effects) - [Capture Clauses as Effects](https://blog.yoshuawuyts.com/capture-clauses-as-effects/#optimizing-for-writes)
* [2026-07-21, 15:41:51](https://news.ycombinator.com/item?id=48993816) - [Long presumed dead, a thriving coral reef is discovered in West Africa](https://e360.yale.edu/digest/benin-coral-reef)
* [2026-07-21, 15:17:16](https://news.ycombinator.com/item?id=48993414) - [Gemini 3.6 Flash, 3.5 Flash-Lite, and 3.5 Flash Cyber](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/)
* [2026-07-21, 15:14:38](https://lobste.rs/s/z1alry/lazy_tmux_restore_tmux_sessions_lazily) - [lazy-tmux: restore tmux sessions lazily, with scrollback](https://lazy-tmux.xyz)
* [2026-07-21, 15:00:00](https://news.slashdot.org/story/26/07/21/0551243/the-galaxy-card-is-samsungs-answer-to-the-apple-card?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Galaxy Card Is Samsung&apos;s Answer To the Apple Card](https://news.slashdot.org/story/26/07/21/0551243/the-galaxy-card-is-samsungs-answer-to-the-apple-card?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-21, 14:31:41](https://news.ycombinator.com/item?id=48992870) - [Apple defeats liability for not scanning iCloud for CSAM](https://blog.ericgoldman.org/archives/2026/07/apple-defeats-liability-for-not-scanning-icloud-for-csam-but-the-judge-was-not-pleased-amy-v-apple.htm)
* [2026-07-21, 13:48:35](https://news.ycombinator.com/item?id=48992323) - [PCjs Machines](https://www.pcjs.org/)
* [2026-07-21, 12:31:15](https://lobste.rs/s/cxz7vd/git_end_options) - [git --end-of-options](https://nesbitt.io/2026/07/21/end-of-options.html)
* [2026-07-21, 12:16:08](https://lobste.rs/s/s4gljc/thoughts_on_integers_2023) - [Thoughts On Integers (2023)](https://blog.xoria.org/integers/)
* [2026-07-21, 11:45:00](https://soylentnews.org/article.pl?sid=26/07/21/0550247&amp;from=rss) - [Deep-Sea Life Has a Secret Food Source Scientists Never Expected](https://soylentnews.org/article.pl?sid=26/07/21/0550247&amp;from=rss)
* [2026-07-21, 11:00:00](https://mobile.slashdot.org/story/26/07/21/0541215/us-police-now-armed-with-israeli-spy-vans-simulating-mobile-phone-towers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Police Now Armed With Israeli Spy Vans Simulating Mobile Phone Towers](https://mobile.slashdot.org/story/26/07/21/0541215/us-police-now-armed-with-israeli-spy-vans-simulating-mobile-phone-towers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-21, 10:11:59](https://lobste.rs/s/twqtlo/github_suddenly_rejected_my_ssh_key_fix) - [GitHub suddenly rejected my SSH key (the fix was a .pub file?!)](https://thorsell.io/2026/07/21/github-ssh-keys.html)
* [2026-07-21, 10:02:46](https://lobste.rs/s/msg39b/linux_kernel_will_support_origin_sort) - [Linux kernel will support $ORIGIN, sort of](https://fzakaria.com/2026/07/20/linux-kernel-will-support-origin-sort-of)
* [2026-07-21, 09:59:57](https://lobste.rs/s/jpq033/ggg_declarative_svg_badge_generation) - [GGG – Declarative SVG badge generation using Guile Scheme and SXML](https://codeberg.org/jjba23/ggg)
* [2026-07-21, 09:57:39](https://lobste.rs/s/e7x0ha/five_moments_snapping_history) - [Five moments in snapping history](https://unsung.aresluna.org/five-moments-in-snapping-history/)
* [2026-07-21, 07:59:00](https://soylentnews.org/article.pl?sid=26/07/20/0431234&amp;from=rss) - [Eating Chili Peppers May Raise the Risk of One Deadly Cancer](https://soylentnews.org/article.pl?sid=26/07/20/0431234&amp;from=rss)
* [2026-07-21, 07:20:43](https://lobste.rs/s/qlg8xj/kde_for_enterprise_needs_strong_pim) - [KDE for Enterprise Needs a Strong PIM Infrastructure](https://ervin.ipsquad.net/blog/2026/07/21/kde-for-entreprise-needs-a-strong-pim-infrastructure/)
* [2026-07-21, 07:00:00](https://developers.slashdot.org/story/26/07/21/0053206/drinking-5-cups-of-coffee-a-day-could-reduce-heart-risk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Drinking 5 Cups of Coffee a Day Could Reduce Heart Risk](https://developers.slashdot.org/story/26/07/21/0053206/drinking-5-cups-of-coffee-a-day-could-reduce-heart-risk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-21, 03:50:28](https://lobste.rs/s/t2jxyu/432_linux_kernel_cves_published_last_24) - [432 Linux kernel CVEs published in the last 24 hours](https://lore.kernel.org/linux-cve-announce/)
* [2026-07-21, 03:30:00](https://tech.slashdot.org/story/26/07/20/234246/hackers-are-exploiting-recently-patched-wordpress-bugs-putting-millions-of-websites-at-risk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hackers Are Exploiting Recently Patched WordPress Bugs, Putting Millions of Websites at Risk](https://tech.slashdot.org/story/26/07/20/234246/hackers-are-exploiting-recently-patched-wordpress-bugs-putting-millions-of-websites-at-risk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-21, 03:15:00](https://soylentnews.org/article.pl?sid=26/07/20/0413210&amp;from=rss) - [US Sanctions First VPN In Crackdown On Ransomware Criminals](https://soylentnews.org/article.pl?sid=26/07/20/0413210&amp;from=rss)
* [2026-07-21, 03:02:24](https://lobste.rs/s/v3xuxn/95_reasons_for_having_your_own_website) - [95 reasons for having your own website](https://bellkiosk.website/blog/reasons-to-website.html)
* [2026-07-20, 23:00:00](https://news.slashdot.org/story/26/07/20/2259204/new-orleans-cops-published-policy-document-allowing-weaponized-drones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Orleans Cops Published Policy Document Allowing Weaponized Drones](https://news.slashdot.org/story/26/07/20/2259204/new-orleans-cops-published-policy-document-allowing-weaponized-drones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-20, 22:40:00](https://news.slashdot.org/story/26/07/20/2239204/longtime-web-weirdness-site-fark-faces-ad-pinch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Longtime Web-Weirdness Site Fark Faces Ad Pinch](https://news.slashdot.org/story/26/07/20/2239204/longtime-web-weirdness-site-fark-faces-ad-pinch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-20, 22:27:00](https://soylentnews.org/article.pl?sid=26/07/20/040231&amp;from=rss) - [A Moment Of Silence, Please, For The Final Release Of Debian On X86-32](https://soylentnews.org/article.pl?sid=26/07/20/040231&amp;from=rss)
* [2026-07-20, 22:16:00](https://lobste.rs/s/wfmpqr/human_mathematicians_are_being) - [Human mathematicians are being outcounterexampled](https://xenaproject.wordpress.com/2026/07/20/human-mathematicians-are-being-outcounterexampled/)
* [2026-07-20, 21:00:00](https://hardware.slashdot.org/story/26/07/20/205250/chinas-new-ai-model-halts-new-subscriptions-as-demand-swamps-capacity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s New AI Model Halts New Subscriptions As Demand Swamps Capacity](https://hardware.slashdot.org/story/26/07/20/205250/chinas-new-ai-model-halts-new-subscriptions-as-demand-swamps-capacity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-20, 17:43:00](https://soylentnews.org/article.pl?sid=26/07/20/0344230&amp;from=rss) - [Clever Hacker Fits 537,000 Domains in a Tiny $5 ESP32 Ad-Blocking Dongle](https://soylentnews.org/article.pl?sid=26/07/20/0344230&amp;from=rss)
* [2026-07-20, 12:55:00](https://soylentnews.org/article.pl?sid=26/07/20/0338215&amp;from=rss) - [Great Ape Laughter Reveals a Hidden Origin of Human Speech](https://soylentnews.org/article.pl?sid=26/07/20/0338215&amp;from=rss)
* [2026-07-20, 12:07:16](https://news.ycombinator.com/item?id=48977628) - [Show HN: Read the Tape – Wordle for daytrading, five blind S&amp;P 500 charts a day](https://readthetape.cc/)
* [2026-07-20, 08:12:00](https://soylentnews.org/article.pl?sid=26/07/20/0325216&amp;from=rss) - [Fake Go DNS Scanner Spread Malware Through Over 200 GitHub Repos](https://soylentnews.org/article.pl?sid=26/07/20/0325216&amp;from=rss)
* [2026-07-20, 06:09:25](https://news.ycombinator.com/item?id=48974862) - [My USB Drive Has a Hidden Encrypted Vault](https://rootkitlabs.com/2026/06/22/I%27m-Building-a-Secure-USB-Drive/)
* [2026-07-20, 03:24:00](https://soylentnews.org/article.pl?sid=26/07/20/0318228&amp;from=rss) - [The Galaxy&apos;s Coldest “Stars” Might Actually be Alien Megastructures](https://soylentnews.org/article.pl?sid=26/07/20/0318228&amp;from=rss)
* [2026-07-19, 21:53:00](https://soylentnews.org/article.pl?sid=26/07/19/0313244&amp;from=rss) - [Welcome to DebConf26!](https://soylentnews.org/article.pl?sid=26/07/19/0313244&amp;from=rss)
* [2026-07-19, 17:08:00](https://soylentnews.org/article.pl?sid=26/07/19/036256&amp;from=rss) - [AI Mania is Eviscerating Global Decision-Making](https://soylentnews.org/article.pl?sid=26/07/19/036256&amp;from=rss)
* [2026-07-19, 12:23:00](https://soylentnews.org/article.pl?sid=26/07/19/034232&amp;from=rss) - [Finland is Preparing to Hide an Entire City Underground](https://soylentnews.org/article.pl?sid=26/07/19/034232&amp;from=rss)
* [2026-07-19, 07:40:00](https://soylentnews.org/article.pl?sid=26/07/17/1611241&amp;from=rss) - [NTP Server That Traveled Back In Time Caused Massive Aussie Mobile Outage](https://soylentnews.org/article.pl?sid=26/07/17/1611241&amp;from=rss)
* [2026-07-19, 02:53:00](https://soylentnews.org/article.pl?sid=26/07/17/1524222&amp;from=rss) - [Experts May Have Drastically Underestimated the Lifespan of EV Batteries](https://soylentnews.org/article.pl?sid=26/07/17/1524222&amp;from=rss)
* [2026-07-18, 22:03:00](https://soylentnews.org/article.pl?sid=26/07/17/1520210&amp;from=rss) - [CXMT&apos;s DDR5 RAM Isn&apos;t As Performant Or As Consistent As SK Hynix Dies, Early Testing Shows](https://soylentnews.org/article.pl?sid=26/07/17/1520210&amp;from=rss)
* [2026-07-18, 17:20:00](https://soylentnews.org/article.pl?sid=26/07/17/1518215&amp;from=rss) - [Archaeologists Found Homer&apos;s Iliad Inside a 1,600-Year-Old Egyptian Mummy](https://soylentnews.org/article.pl?sid=26/07/17/1518215&amp;from=rss)
* [2026-07-18, 12:36:00](https://soylentnews.org/article.pl?sid=26/07/17/151212&amp;from=rss) - [Linus Torvalds Puts His Foot Down, Tells Anti-AI Programmers To &apos;Fork It&apos; - and Then This Happened](https://soylentnews.org/article.pl?sid=26/07/17/151212&amp;from=rss)
* [2026-07-18, 09:41:36](https://news.ycombinator.com/item?id=48956548) - [Show HN: Workaround – Unstar GitHub Repos in Bulk](https://workaround.run/)
* [2026-07-18, 07:51:00](https://soylentnews.org/article.pl?sid=26/07/17/1454240&amp;from=rss) - [Hundreds Rally at Bethesda HQ to Protest Xbox Layoffs](https://soylentnews.org/article.pl?sid=26/07/17/1454240&amp;from=rss)
* [2026-07-18, 03:05:00](https://soylentnews.org/article.pl?sid=26/07/17/0436211&amp;from=rss) - [Teardown: A Generic 7-Port USB 3.0 Hub That Wasn&apos;t](https://soylentnews.org/article.pl?sid=26/07/17/0436211&amp;from=rss)
