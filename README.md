# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Technology Advancements

* [Meta's AI Models Are Powering the First Wave of Genesis Mission Projects](https://ai.meta.com/blog/genesis-mission-lawrence-berkeley-national-laboratory-segment-anything-dino/?_fb_noscript=1)

* [Slater – Low-memory graphdb designed for read-heavy graphs](https://github.com/Hikari-Systems/slater)

* [AI Didn't Make Programming Easier. It Just Made It Differently Difficult](https://cacm.acm.org/opinion/ai-didnt-make-programming-easier-it-just-made-it-differently-difficult/)

* [AI Agent – TRMNL](https://help.trmnl.com/en/articles/14130438-ai-agent)

* [Gemini 3.6 Flash, 3.5 Flash-Lite, and 3.5 Flash Cyber](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/)

* [Jack Dorsey launches Buzz to combine team chat, AI agents and Git hosting](https://runtimewire.com/article/jack-dorsey-block-buzz-team-chat-ai-agents-git)

## Legal and Regulatory Updates

* [Judge Approves $1.5 Billion Anthropic Settlement Over Pirated Books Used To Train Claude](https://yro.slashdot.org/story/26/07/21/1744202/judge-approves-15-billion-anthropic-settlement-over-pirated-books-used-to-train-claude?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [AT&amp;T Loses Key Ruling In Bid To Stop Offering Basic Phone Service In California](https://yro.slashdot.org/story/26/07/21/0617230/att-loses-key-ruling-in-bid-to-stop-offering-basic-phone-service-in-california?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [France's Anssi Will Block PQC-Free Products from Certification Starting 2027](https://postquantum.com/security-pqc/anssi-pqc-certification-2027/)

* [Apple Defeats Liability for Not Scanning iCloud for CSAM](https://blog.ericgoldman.org/archives/2026/07/apple-defeats-liability-for-not-scanning-icloud-for-csam-but-the-judge-was-not-pleased-amy-v-apple.htm)

## Infrastructure and Open Source

* [Cheap Self-Hosted Kubernetes on Hetzner Cloud](https://blog.qstars.nl/posts/cheap-self-hosted-kubernetes-on-hetzner-cloud/)

* [Using Nagios for small business infrastructure monitoring](https://tech.chrishardie.com/2026/nagios-small-business-infrastructure-monitoring/)

* [Linux kernel will support $ORIGIN, sort of](https://fzakaria.com/2026/07/20/linux-kernel-will-support-origin-sort-of)

* [Deep dive into my Forgejo setup](https://a.l3x.in/blog/welcome-to-my-forge/)

## Environmental Discoveries

* [Long presumed dead, a thriving coral reef is discovered in West Africa](https://e360.yale.edu/digest/benin-coral-reef)

* [Deep-Sea Life Has a Secret Food Source Scientists Never Expected](https://soylentnews.org/article.pl?sid=26/07/21/0550247&from=rss)

## Unique Tools and Open-Source Projects

* [Show HN: A self-running space economy SIM in Rust and Bevy](https://github.com/Kalcode/spaceprojectsim)

* [Show HN: CodeAlmanac – Karpathy-style codebase wiki from your conversations](https://github.com/AlmanacCode/codealmanac/)

* [Show HN: Imagin Raw – A 9MB Open-Source Alternative to Adobe Bridge for Mac](https://github.com/cristibaluta/Imagin-Raw)

* [Uhubctl – control USB power per-port on smart USB hubs](https://github.com/mvp/uhubctl)

* [PCjs Machines](https://www.pcjs.org/)

## Fascinating Science and Discoveries

* [Archaeologists Found Homer's Iliad Inside a 1,600-Year-Old Egyptian Mummy](https://soylentnews.org/article.pl?sid=26/07/17/1518215&from=rss)

* [Mathematical Explanation for Accelerated Universe Expansion That Doesn't Require Dark Energy](https://soylentnews.org/article.pl?sid=26/07/17/0430256&from=rss)

* [Experts May Have Drastically Underestimated the Lifespan of EV Batteries](https://soylentnews.org/article.pl?sid=26/07/17/1524222&from=rss)

## Security and Data

* [Hackers Are Exploiting Recently Patched WordPress Bugs, Putting Millions of Websites at Risk](https://tech.slashdot.org/story/26/07/20/234246/hackers-are-exploiting-recently-patched-wordpress-bugs-putting-millions-of-websites-at-risk?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Microsoft's Secure Boot Has Been Broken for a Decade and No One Noticed Until Now](https://soylentnews.org/article.pl?sid=26/07/16/0231216&from=rss)

* [Clever Hacker Fits 537,000 Domains in a Tiny $5 ESP32 Ad-Blocking Dongle](https://soylentnews.org/article.pl?sid=26/07/20/0344230&from=rss)

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

* [2026-07-21, 19:00:00](https://news.slashdot.org/story/26/07/21/1750207/canonical-launches-enterprise-store-for-ubuntu-pro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Canonical Launches Enterprise Store For Ubuntu Pro](https://news.slashdot.org/story/26/07/21/1750207/canonical-launches-enterprise-store-for-ubuntu-pro?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-21, 18:58:44](https://news.ycombinator.com/item?id=48996571) - [Advertise in ChatGPT](https://ads.openai.com/)
* [2026-07-21, 18:39:41](https://news.ycombinator.com/item?id=48996325) - [Slater – Low-memory graphdb designed for read-heavy graphs](https://github.com/Hikari-Systems/slater)
* [2026-07-21, 18:39:06](https://news.ycombinator.com/item?id=48996318) - [Freeink: Open Ecosystem for E-Readers](https://freeink.org/)
* [2026-07-21, 18:35:19](https://lobste.rs/s/wub9oc/using_nagios_for_small_business) - [Using Nagios for small business infrastructure monitoring](https://tech.chrishardie.com/2026/nagios-small-business-infrastructure-monitoring/)
* [2026-07-21, 18:32:21](https://news.ycombinator.com/item?id=48996236) - [AI Agent – TRMNL](https://help.trmnl.com/en/articles/14130438-ai-agent)
* [2026-07-21, 18:30:53](https://news.ycombinator.com/item?id=48996211) - [Apple has decided to compete for creativity app users](https://alex4d.com/notes/item/apple-competing-for-creativity-app-users)
* [2026-07-21, 18:30:21](https://news.ycombinator.com/item?id=48996197) - [AI Didn&apos;t Make Programming Easier. It Just Made It Differently Difficult](https://cacm.acm.org/opinion/ai-didnt-make-programming-easier-it-just-made-it-differently-difficult/)
* [2026-07-21, 18:29:57](https://news.ycombinator.com/item?id=48996187) - [Show HN: A self-running space economy SIM in Rust and Bevy](https://github.com/Kalcode/spaceprojectsim)
* [2026-07-21, 18:25:08](https://news.ycombinator.com/item?id=48996128) - [Cheap Self-Hosted Kubernetes on Hetzner Cloud](https://blog.qstars.nl/posts/cheap-self-hosted-kubernetes-on-hetzner-cloud/)
* [2026-07-21, 18:08:38](https://news.ycombinator.com/item?id=48995923) - [YouTube System Design for Robotics Data Infrastructure](https://hebbianrobotics.com/blog/youtube-system-design-for-robotics-data-infrastructure)
* [2026-07-21, 18:02:26](https://lobste.rs/s/qozazh/no_ai_statements_are_much_more_than_mere) - [“No AI” Statements Are Much More Than Mere Statements](https://journal.james-zhan.com/no-ai-statements/)
* [2026-07-21, 18:00:00](https://yro.slashdot.org/story/26/07/21/1744202/judge-approves-15-billion-anthropic-settlement-over-pirated-books-used-to-train-claude?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Judge Approves $1.5 Billion Anthropic Settlement Over Pirated Books Used To Train Claude](https://yro.slashdot.org/story/26/07/21/1744202/judge-approves-15-billion-anthropic-settlement-over-pirated-books-used-to-train-claude?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-21, 17:59:29](https://news.ycombinator.com/item?id=48995814) - [Greedy is optimal for single-pass semi-streaming matching](https://arxiv.org/abs/2607.14656)
* [2026-07-21, 17:58:21](https://news.ycombinator.com/item?id=48995796) - [Apple Private Cloud Compute SoC 3 audit reports](https://support.apple.com/guide/certifications/apple-private-cloud-compute-soc-3-audit-apc95a31b9d8/web)
* [2026-07-21, 17:50:36](https://lobste.rs/s/xroult/web_based_jujutsu_revset_explorer) - [Web-based Jujutsu revset explorer &amp; debugger](https://juju.bi/tools/revset)
* [2026-07-21, 17:34:42](https://news.ycombinator.com/item?id=48995507) - [Show HN: DocCharm – The help center that keeps itself up to date](https://doccharm.com/)
* [2026-07-21, 17:30:01](https://news.ycombinator.com/item?id=48995444) - [Show HN: Imagin Raw – A 9MB Open-Source Alternative to Adobe Bridge for Mac](https://github.com/cristibaluta/Imagin-Raw)
* [2026-07-21, 17:27:59](https://news.ycombinator.com/item?id=48995409) - [Firefox Containers Preview](https://blog.mozilla.org/en/firefox/firefox-containers-preview/)
* [2026-07-21, 17:14:06](https://news.ycombinator.com/item?id=48995213) - [Jack Dorsey launches Buzz to combine team chat, AI agents and Git hosting](https://runtimewire.com/article/jack-dorsey-block-buzz-team-chat-ai-agents-git)
* [2026-07-21, 17:12:01](https://news.ycombinator.com/item?id=48995181) - [Show HN: CodeAlmanac – Karpathy-style codebase wiki from your conversations](https://github.com/AlmanacCode/codealmanac/)
* [2026-07-21, 17:09:37](https://news.ycombinator.com/item?id=48995149) - [Uhubctl – control USB power per-port on smart USB hubs](https://github.com/mvp/uhubctl)
* [2026-07-21, 17:03:18](https://news.ycombinator.com/item?id=48995074) - [Meta&apos;s AI Models Are Powering the First Wave of Genesis Mission Projects](https://ai.meta.com/blog/genesis-mission-lawrence-berkeley-national-laboratory-segment-anything-dino/?_fb_noscript=1)
* [2026-07-21, 17:00:20](https://news.ycombinator.com/item?id=48995037) - [Bloomy (YC S26) is hiring a founding engineer](https://news.ycombinator.com/item?id=48995037)
* [2026-07-21, 17:00:00](https://yro.slashdot.org/story/26/07/21/0617230/att-loses-key-ruling-in-bid-to-stop-offering-basic-phone-service-in-california?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AT&amp;amp;T Loses Key Ruling In Bid To Stop Offering Basic Phone Service In California](https://yro.slashdot.org/story/26/07/21/0617230/att-loses-key-ruling-in-bid-to-stop-offering-basic-phone-service-in-california?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-21, 16:41:00](https://soylentnews.org/article.pl?sid=26/07/21/0553204&amp;from=rss) - [Airbus Migrating 70 Critical Apps From AWS To France&apos;s Scaleway Amid Digital Sovereignty Push](https://soylentnews.org/article.pl?sid=26/07/21/0553204&amp;from=rss)
* [2026-07-21, 16:05:58](https://news.ycombinator.com/item?id=48994178) - [The World&apos;s 2,400 Castles](https://thecastlemap.com/)
* [2026-07-21, 16:02:04](https://news.ycombinator.com/item?id=48994116) - [France&apos;s Anssi Will Block PQC-Free Products from Certification Starting 2027](https://postquantum.com/security-pqc/anssi-pqc-certification-2027/)
* [2026-07-21, 16:00:00](https://yro.slashdot.org/story/26/07/21/069239/judge-pauses-paramount-warner-bros-merger?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Judge Pauses Paramount-Warner Bros Merger](https://yro.slashdot.org/story/26/07/21/069239/judge-pauses-paramount-warner-bros-merger?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-21, 15:52:21](https://lobste.rs/s/nlhmco/capture_clauses_as_effects) - [Capture Clauses as Effects](https://blog.yoshuawuyts.com/capture-clauses-as-effects/#optimizing-for-writes)
* [2026-07-21, 15:51:04](https://lobste.rs/s/jbe8ie/claude_is_not_compiler) - [Claude Is Not a Compiler](https://blog.exe.dev/claude-is-not-a-compiler)
* [2026-07-21, 15:41:51](https://news.ycombinator.com/item?id=48993816) - [Long presumed dead, a thriving coral reef is discovered in West Africa](https://e360.yale.edu/digest/benin-coral-reef)
* [2026-07-21, 15:17:16](https://news.ycombinator.com/item?id=48993414) - [Gemini 3.6 Flash, 3.5 Flash-Lite, and 3.5 Flash Cyber](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/)
* [2026-07-21, 15:14:38](https://lobste.rs/s/z1alry/lazy_tmux_restore_tmux_sessions_lazily) - [lazy-tmux: restore tmux sessions lazily, with scrollback](https://lazy-tmux.xyz)
* [2026-07-21, 15:00:00](https://news.slashdot.org/story/26/07/21/0551243/the-galaxy-card-is-samsungs-answer-to-the-apple-card?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Galaxy Card Is Samsung&apos;s Answer To the Apple Card](https://news.slashdot.org/story/26/07/21/0551243/the-galaxy-card-is-samsungs-answer-to-the-apple-card?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-21, 14:31:41](https://news.ycombinator.com/item?id=48992870) - [Apple Defeats Liability for Not Scanning iCloud for CSAM](https://blog.ericgoldman.org/archives/2026/07/apple-defeats-liability-for-not-scanning-icloud-for-csam-but-the-judge-was-not-pleased-amy-v-apple.htm)
* [2026-07-21, 13:48:35](https://news.ycombinator.com/item?id=48992323) - [PCjs Machines](https://www.pcjs.org/)
* [2026-07-21, 12:31:15](https://lobste.rs/s/cxz7vd/git_end_options) - [git --end-of-options](https://nesbitt.io/2026/07/21/end-of-options.html)
* [2026-07-21, 12:16:08](https://lobste.rs/s/s4gljc/thoughts_on_integers_2023) - [Thoughts On Integers (2023)](https://blog.xoria.org/integers/)
* [2026-07-21, 11:45:00](https://soylentnews.org/article.pl?sid=26/07/21/0550247&amp;from=rss) - [Deep-Sea Life Has a Secret Food Source Scientists Never Expected](https://soylentnews.org/article.pl?sid=26/07/21/0550247&amp;from=rss)
* [2026-07-21, 11:00:00](https://mobile.slashdot.org/story/26/07/21/0541215/us-police-now-armed-with-israeli-spy-vans-simulating-mobile-phone-towers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Police Now Armed With Israeli Spy Vans Simulating Mobile Phone Towers](https://mobile.slashdot.org/story/26/07/21/0541215/us-police-now-armed-with-israeli-spy-vans-simulating-mobile-phone-towers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-21, 10:11:59](https://lobste.rs/s/twqtlo/github_suddenly_rejected_my_ssh_key_fix) - [GitHub suddenly rejected my SSH key (the fix was a .pub file?!)](https://thorsell.io/2026/07/21/github-ssh-keys.html)
* [2026-07-21, 10:02:46](https://lobste.rs/s/msg39b/linux_kernel_will_support_origin_sort) - [Linux kernel will support $ORIGIN, sort of](https://fzakaria.com/2026/07/20/linux-kernel-will-support-origin-sort-of)
* [2026-07-21, 09:59:57](https://lobste.rs/s/jpq033/ggg_declarative_svg_badge_generation) - [GGG – Declarative SVG badge generation using Guile Scheme and SXML](https://codeberg.org/jjba23/ggg)
* [2026-07-21, 09:57:39](https://lobste.rs/s/e7x0ha/five_moments_snapping_history) - [Five moments in snapping history](https://unsung.aresluna.org/five-moments-in-snapping-history/)
* [2026-07-21, 08:44:23](https://news.ycombinator.com/item?id=48989701) - [Qwen-Image-3.0: Rich Content, Authentic Details, Deep Knowledge](https://qwen.ai/blog?id=qwen-image-3.0)
* [2026-07-21, 07:59:00](https://soylentnews.org/article.pl?sid=26/07/20/0431234&amp;from=rss) - [Eating Chili Peppers May Raise the Risk of One Deadly Cancer](https://soylentnews.org/article.pl?sid=26/07/20/0431234&amp;from=rss)
* [2026-07-21, 07:20:43](https://lobste.rs/s/qlg8xj/kde_for_enterprise_needs_strong_pim) - [KDE for Enterprise Needs a Strong PIM Infrastructure](https://ervin.ipsquad.net/blog/2026/07/21/kde-for-entreprise-needs-a-strong-pim-infrastructure/)
* [2026-07-21, 07:00:00](https://developers.slashdot.org/story/26/07/21/0053206/drinking-5-cups-of-coffee-a-day-could-reduce-heart-risk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Drinking 5 Cups of Coffee a Day Could Reduce Heart Risk](https://developers.slashdot.org/story/26/07/21/0053206/drinking-5-cups-of-coffee-a-day-could-reduce-heart-risk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-21, 03:50:53](https://news.ycombinator.com/item?id=48987822) - [Incremental – A library for incremental computations](https://github.com/janestreet/incremental)
* [2026-07-21, 03:50:28](https://lobste.rs/s/t2jxyu/432_linux_kernel_cves_published_last_24) - [432 Linux kernel CVEs published in the last 24 hours](https://lore.kernel.org/linux-cve-announce/)
* [2026-07-21, 03:30:00](https://tech.slashdot.org/story/26/07/20/234246/hackers-are-exploiting-recently-patched-wordpress-bugs-putting-millions-of-websites-at-risk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hackers Are Exploiting Recently Patched WordPress Bugs, Putting Millions of Websites at Risk](https://tech.slashdot.org/story/26/07/20/234246/hackers-are-exploiting-recently-patched-wordpress-bugs-putting-millions-of-websites-at-risk?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-21, 03:15:00](https://soylentnews.org/article.pl?sid=26/07/20/0413210&amp;from=rss) - [US Sanctions First VPN In Crackdown On Ransomware Criminals](https://soylentnews.org/article.pl?sid=26/07/20/0413210&amp;from=rss)
* [2026-07-21, 03:02:24](https://lobste.rs/s/v3xuxn/95_reasons_for_having_your_own_website) - [95 reasons for having your own website](https://bellkiosk.website/blog/reasons-to-website.html)
* [2026-07-21, 02:23:52](https://lobste.rs/s/s13fc0/using_ssh_bastion_only_when_i_m_touching) - [Using a SSH bastion, but only when I&apos;m touching grass](https://evertpot.com/ssh-tunnel-if-unresolvable/)
* [2026-07-21, 00:09:48](https://lobste.rs/s/iypcjj/secrets_don_t_belong_config) - [Secrets Don’t Belong in Config](https://secretspec.dev/blog/secrets-dont-belong-in-config/)
* [2026-07-20, 23:16:36](https://lobste.rs/s/93norp/informal_tutorial_on_joy) - [An informal tutorial on Joy](https://www.kevinalbrecht.com/code/joy-mirror/j01tut.html)
* [2026-07-20, 23:00:00](https://news.slashdot.org/story/26/07/20/2259204/new-orleans-cops-published-policy-document-allowing-weaponized-drones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Orleans Cops Published Policy Document Allowing Weaponized Drones](https://news.slashdot.org/story/26/07/20/2259204/new-orleans-cops-published-policy-document-allowing-weaponized-drones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-20, 22:46:53](https://lobste.rs/s/boyu9x/opaque_interoperable_passkey_records) - [Opaque, Interoperable Passkey Records](https://words.filippo.io/passkey-record/)
* [2026-07-20, 22:40:00](https://news.slashdot.org/story/26/07/20/2239204/longtime-web-weirdness-site-fark-faces-ad-pinch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Longtime Web-Weirdness Site Fark Faces Ad Pinch](https://news.slashdot.org/story/26/07/20/2239204/longtime-web-weirdness-site-fark-faces-ad-pinch?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-20, 22:27:00](https://soylentnews.org/article.pl?sid=26/07/20/040231&amp;from=rss) - [A Moment Of Silence, Please, For The Final Release Of Debian On X86-32](https://soylentnews.org/article.pl?sid=26/07/20/040231&amp;from=rss)
* [2026-07-20, 22:16:00](https://lobste.rs/s/wfmpqr/human_mathematicians_are_being) - [Human mathematicians are being outcounterexampled](https://xenaproject.wordpress.com/2026/07/20/human-mathematicians-are-being-outcounterexampled/)
* [2026-07-20, 21:00:00](https://hardware.slashdot.org/story/26/07/20/205250/chinas-new-ai-model-halts-new-subscriptions-as-demand-swamps-capacity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [China&apos;s New AI Model Halts New Subscriptions As Demand Swamps Capacity](https://hardware.slashdot.org/story/26/07/20/205250/chinas-new-ai-model-halts-new-subscriptions-as-demand-swamps-capacity?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-20, 20:00:00](https://news.slashdot.org/story/26/07/20/1948206/head-of-us-safety-agency-resigns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Head of US Safety Agency Resigns](https://news.slashdot.org/story/26/07/20/1948206/head-of-us-safety-agency-resigns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-20, 19:00:00](https://news.slashdot.org/story/26/07/20/1751219/aliexpress-hit-with-record-625-million-fine-after-failing-to-make-eu-ordered-fixes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AliExpress Hit With Record $625 Million Fine After Failing To Make EU-Ordered Fixes](https://news.slashdot.org/story/26/07/20/1751219/aliexpress-hit-with-record-625-million-fine-after-failing-to-make-eu-ordered-fixes?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-20, 18:00:00](https://hardware.slashdot.org/story/26/07/20/1736218/lg-monitors-silently-install-adware-like-app-on-windows-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LG Monitors Silently Install Adware-Like App On Windows PCs](https://hardware.slashdot.org/story/26/07/20/1736218/lg-monitors-silently-install-adware-like-app-on-windows-pcs?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-20, 17:43:00](https://soylentnews.org/article.pl?sid=26/07/20/0344230&amp;from=rss) - [Clever Hacker Fits 537,000 Domains in a Tiny $5 ESP32 Ad-Blocking Dongle](https://soylentnews.org/article.pl?sid=26/07/20/0344230&amp;from=rss)
* [2026-07-20, 17:05:00](https://it.slashdot.org/story/26/07/20/172249/hacker-wipes-romanias-entire-land-registry-database?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Hacker Wipes Romania&apos;s Entire Land Registry Database](https://it.slashdot.org/story/26/07/20/172249/hacker-wipes-romanias-entire-land-registry-database?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-07-20, 16:40:40](https://lobste.rs/s/jhcyuq/deep_dive_into_my_forgejo_setup) - [A deep dive into my Forgejo setup](https://a.l3x.in/blog/welcome-to-my-forge/)
* [2026-07-20, 15:21:15](https://lobste.rs/s/kdflhr/invisicaps_fil_c_capability_model) - [InvisiCaps: The Fil-C Capability Model](https://fil-c.org/invisicaps)
* [2026-07-20, 13:58:52](https://lobste.rs/s/p3z0zw/meta_garbage_collection_using_ocaml_s_gc) - [Meta Garbage Collection: Using OCaml&apos;s GC to GC Rust](https://soteria-tools.com/blog/meta-garbage-collection)
* [2026-07-20, 12:55:00](https://soylentnews.org/article.pl?sid=26/07/20/0338215&amp;from=rss) - [Great Ape Laughter Reveals a Hidden Origin of Human Speech](https://soylentnews.org/article.pl?sid=26/07/20/0338215&amp;from=rss)
* [2026-07-20, 12:10:14](https://lobste.rs/s/21lrrw/gitolite) - [Gitolite](https://gitolite.com/gitolite/index.html)
* [2026-07-20, 08:12:00](https://soylentnews.org/article.pl?sid=26/07/20/0325216&amp;from=rss) - [Fake Go DNS Scanner Spread Malware Through Over 200 GitHub Repos](https://soylentnews.org/article.pl?sid=26/07/20/0325216&amp;from=rss)
* [2026-07-20, 07:04:02](https://lobste.rs/s/op1k28/i_wrote_api_client_for_my_water_cooled_bed) - [I wrote an API client for my water-cooled bed](https://tinkering.xyz/bedctl/)
* [2026-07-20, 06:09:25](https://news.ycombinator.com/item?id=48974862) - [My USB Drive Has a Hidden Encrypted Vault](https://rootkitlabs.com/2026/06/22/I%27m-Building-a-Secure-USB-Drive/)
* [2026-07-20, 03:24:00](https://soylentnews.org/article.pl?sid=26/07/20/0318228&amp;from=rss) - [The Galaxy&apos;s Coldest “Stars” Might Actually be Alien Megastructures](https://soylentnews.org/article.pl?sid=26/07/20/0318228&amp;from=rss)
* [2026-07-19, 21:53:00](https://soylentnews.org/article.pl?sid=26/07/19/0313244&amp;from=rss) - [Welcome to DebConf26!](https://soylentnews.org/article.pl?sid=26/07/19/0313244&amp;from=rss)
* [2026-07-19, 17:08:00](https://soylentnews.org/article.pl?sid=26/07/19/036256&amp;from=rss) - [AI Mania is Eviscerating Global Decision-Making](https://soylentnews.org/article.pl?sid=26/07/19/036256&amp;from=rss)
* [2026-07-19, 12:23:00](https://soylentnews.org/article.pl?sid=26/07/19/034232&amp;from=rss) - [Finland is Preparing to Hide an Entire City Underground](https://soylentnews.org/article.pl?sid=26/07/19/034232&amp;from=rss)
* [2026-07-19, 07:40:00](https://soylentnews.org/article.pl?sid=26/07/17/1611241&amp;from=rss) - [NTP Server That Traveled Back In Time Caused Massive Aussie Mobile Outage](https://soylentnews.org/article.pl?sid=26/07/17/1611241&amp;from=rss)
* [2026-07-19, 02:53:00](https://soylentnews.org/article.pl?sid=26/07/17/1524222&amp;from=rss) - [Experts May Have Drastically Underestimated the Lifespan of EV Batteries](https://soylentnews.org/article.pl?sid=26/07/17/1524222&amp;from=rss)
* [2026-07-18, 22:03:00](https://soylentnews.org/article.pl?sid=26/07/17/1520210&amp;from=rss) - [CXMT&apos;s DDR5 RAM Isn&apos;t As Performant Or As Consistent As SK Hynix Dies, Early Testing Shows](https://soylentnews.org/article.pl?sid=26/07/17/1520210&amp;from=rss)
* [2026-07-18, 18:09:36](https://news.ycombinator.com/item?id=48960582) - [The unreasonable difficulty of time series forecasting](https://suzyahyah.github.io/machine%20learning/2026/06/27/trouble-with-time-series.html)
* [2026-07-18, 17:20:00](https://soylentnews.org/article.pl?sid=26/07/17/1518215&amp;from=rss) - [Archaeologists Found Homer&apos;s Iliad Inside a 1,600-Year-Old Egyptian Mummy](https://soylentnews.org/article.pl?sid=26/07/17/1518215&amp;from=rss)
* [2026-07-18, 12:36:00](https://soylentnews.org/article.pl?sid=26/07/17/151212&amp;from=rss) - [Linus Torvalds Puts His Foot Down, Tells Anti-AI Programmers To &apos;Fork It&apos; - and Then This Happened](https://soylentnews.org/article.pl?sid=26/07/17/151212&amp;from=rss)
* [2026-07-18, 07:51:00](https://soylentnews.org/article.pl?sid=26/07/17/1454240&amp;from=rss) - [Hundreds Rally at Bethesda HQ to Protest Xbox Layoffs](https://soylentnews.org/article.pl?sid=26/07/17/1454240&amp;from=rss)
* [2026-07-18, 03:05:00](https://soylentnews.org/article.pl?sid=26/07/17/0436211&amp;from=rss) - [Teardown: A Generic 7-Port USB 3.0 Hub That Wasn&apos;t](https://soylentnews.org/article.pl?sid=26/07/17/0436211&amp;from=rss)
* [2026-07-17, 22:18:00](https://soylentnews.org/article.pl?sid=26/07/17/0430256&amp;from=rss) - [Mathematical Explanation for Accelerated Universe Expansion That Doesn&apos;t Require Dark Energy](https://soylentnews.org/article.pl?sid=26/07/17/0430256&amp;from=rss)
* [2026-07-17, 17:33:00](https://soylentnews.org/article.pl?sid=26/07/16/0415252&amp;from=rss) - [Why the Human Body Has So Many Design Flaws](https://soylentnews.org/article.pl?sid=26/07/16/0415252&amp;from=rss)
* [2026-07-17, 12:49:00](https://soylentnews.org/article.pl?sid=26/07/16/0231216&amp;from=rss) - [Microsoft&apos;s Secure Boot Has Been Broken for a Decade and No One Noticed Until Now](https://soylentnews.org/article.pl?sid=26/07/16/0231216&amp;from=rss)
* [2026-07-17, 08:07:00](https://soylentnews.org/article.pl?sid=26/07/16/0229204&amp;from=rss) - [Irish Datacenters Now Guzzle 23% of the Country&apos;s Electricity](https://soylentnews.org/article.pl?sid=26/07/16/0229204&amp;from=rss)
* [2026-07-17, 03:23:00](https://soylentnews.org/article.pl?sid=26/07/16/0225242&amp;from=rss) - [Miami-Based City Labs Achieves a First for Commercial Nuclear Power in Space](https://soylentnews.org/article.pl?sid=26/07/16/0225242&amp;from=rss)
