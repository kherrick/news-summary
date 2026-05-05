# [News Summary](https://kherrick.github.io/news-summary/)

## Tech Security and Vulnerabilities

* [An exploitable integer overflow in Lix (CVE-2026-44028)](https://lix.systems/blog/2026-05-05-lix-unsigned-integer-overflow/) ([comments](https://lobste.rs/s/ebv5qy/exploitable_integer_overflow_lix_cve))

* [Canonical’s Ubuntu Servers Go Down as Hackers Demand Direct Talks](https://soylentnews.org/article.pl?sid=26/05/04/1434244&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/05/04/1434244&amp;from=rss))

* [Podman rootless containers and the Copy Fail exploit](https://garrido.io/notes/podman-rootless-containers-copy-fail/) ([comments](https://lobste.rs/s/pdckk8/podman_rootless_containers_copy_fail))

## Artificial Intelligence Advances and Concerns

* [Accelerating Gemma 4: faster inference with multi-token prediction drafters](https://blog.google/innovation-and-ai/technology/developers-tools/multi-token-prediction-gemma-4/) ([comments](https://news.ycombinator.com/item?id=48024540))

* [How OpenAI delivers low-latency voice AI at scale](https://openai.com/index/delivering-low-latency-voice-ai-at-scale/) ([comments](https://news.ycombinator.com/item?id=48013919))

* [OpenAI, Google, and Microsoft Back Bill To Fund 'AI Literacy' In Schools](https://news.slashdot.org/story/26/05/04/1934208/openai-google-and-microsoft-back-bill-to-fund-ai-literacy-in-schools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://yro.slashdot.org/story/26/05/04/1934208/openai-google-and-microsoft-back-bill-to-fund-ai-literacy-in-schools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Developer Tools and Innovations

* [VS Code Update Added Copilot As Default Co-Author To Git Commits](https://slashdot.org/story/26/05/05/0335220/vs-code-update-added-copilot-as-default-co-author-to-git-commits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://slashdot.org/story/26/05/05/0335220/vs-code-update-added-copilot-as-default-co-author-to-git-commits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Building my own Vi text editor in BASIC](https://leetusman.com/nosebook/yvi) ([comments](https://lobste.rs/s/ib8cgq/building_my_own_vi_text_editor_basic))

* [We&apos;re announcing Mikan: a proof assistant for cubical type theory, forked from the Agda codebase](https://types.pl/@amy/116522250630340534) ([comments](https://lobste.rs/s/njja19/we_re_announcing_mikan_proof_assistant))

## AI and Ethics

* [AI didn&apos;t delete your database, you did](https://idiallo.com/blog/ai-didnt-delete-your-database-you-did) ([comments](https://news.ycombinator.com/item?id=48022742))

* [When everyone has AI and the company still learns nothing](https://www.robert-glaser.de/when-everyone-has-ai-and-the-company-still-learns-nothing/) ([comments](https://news.ycombinator.com/item?id=48020063))

* [How LLMs Distort Our Written Language](https://sites.google.com/view/llmwritingdistortion/home) ([comments](https://lobste.rs/s/pidcaz/how_llms_distort_our_written_language))

## New Innovations

* [Post-Quantum VPN Based on QUIC](https://github.com/quincy-rs/quincy) ([comments](https://lobste.rs/s/ewpr4z/post_quantum_vpn_based_on_quic))

* [Infrasound Waves Stop Kitchen Fires, But Can They Replace Sprinklers?](https://science.slashdot.org/story/26/05/04/0357217/infrasound-waves-stop-kitchen-fires-but-can-they-replace-sprinklers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://science.slashdot.org/story/26/05/04/0357217/infrasound-waves-stop-kitchen-fires-but-can-they-replace-sprinklers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [iOS 27 is adding a &apos;Create a Pass&apos; button to Apple Wallet](https://walletwallet.alen.ro/blog/ios-27-wallet-create-pass/) ([comments](https://news.ycombinator.com/item?id=48021561))

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

* [2026-05-05, 16:44:33](https://lobste.rs/s/ebv5qy/exploitable_integer_overflow_lix_cve) - [An exploitable integer overflow in Lix (CVE-2026-44028)](https://lix.systems/blog/2026-05-05-lix-unsigned-integer-overflow/)
* [2026-05-05, 16:14:17](https://news.ycombinator.com/item?id=48024540) - [Accelerating Gemma 4: faster inference with multi-token prediction drafters](https://blog.google/innovation-and-ai/technology/developers-tools/multi-token-prediction-gemma-4/)
* [2026-05-05, 16:03:17](https://news.ycombinator.com/item?id=48024364) - [UK: Two millionth electric car registered as market rebounds strongly](https://www.smmt.co.uk/two-millionth-electric-car-registered-as-market-rebounds-strongly-from-tax-changes/)
* [2026-05-05, 16:00:00](https://slashdot.org/story/26/05/05/0335220/vs-code-update-added-copilot-as-default-co-author-to-git-commits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [VS Code Update Added Copilot As Default Co-Author To Git Commits](https://slashdot.org/story/26/05/05/0335220/vs-code-update-added-copilot-as-default-co-author-to-git-commits?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-05, 15:49:34](https://news.ycombinator.com/item?id=48024160) - [Instagram Encrypted Messaging Ends on Friday, May 8](https://www.macrumors.com/2026/05/05/psa-instagram-encrypted-messaging-ends-may-8/)
* [2026-05-05, 15:47:18](https://news.ycombinator.com/item?id=48024129) - [EEVblog: The 555 Timer is 55 years old](https://www.youtube.com/watch?v=6JhK8iCQuqI)
* [2026-05-05, 15:27:18](https://news.ycombinator.com/item?id=48023861) - [Three Inverse Laws of AI](https://susam.net/inverse-laws-of-robotics.html)
* [2026-05-05, 15:15:55](https://news.ycombinator.com/item?id=48023691) - [New Landing Page for Awesome PaaS](https://debarshibasak.github.io/awesome-paas/)
* [2026-05-05, 15:15:49](https://lobste.rs/s/njja19/we_re_announcing_mikan_proof_assistant) - [We&apos;re announcing Mikan: a proof assistant for cubical type theory, forked from the Agda codebase](https://types.pl/@amy/116522250630340534)
* [2026-05-05, 15:09:28](https://news.ycombinator.com/item?id=48023587) - [Show HN: A Mutating Webhook to automatically strip PII from K8s logs](https://github.com/aragossa/pii-shield)
* [2026-05-05, 15:05:47](https://news.ycombinator.com/item?id=48023533) - [Agents for financial services and insurance](https://www.anthropic.com/news/finance-agents)
* [2026-05-05, 15:03:18](https://news.ycombinator.com/item?id=48023496) - [Show HN: Airbyte Agents – context for agents across multiple data sources](https://news.ycombinator.com/item?id=48023496)
* [2026-05-05, 15:00:00](https://tech.slashdot.org/story/26/05/04/232252/notepad-for-mac-release-is-disavowed-by-the-creator-of-the-original?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Notepad++ For Mac&apos; Release Is Disavowed By the Creator of the Original](https://tech.slashdot.org/story/26/05/04/232252/notepad-for-mac-release-is-disavowed-by-the-creator-of-the-original?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-05, 14:46:08](https://lobste.rs/s/z0nkyf/rss_feeds_send_me_more_traffic_than_google) - [RSS Feeds Send Me More Traffic Than Google](https://shkspr.mobi/blog/2026/05/rss-feeds-send-me-more-traffic-than-google/)
* [2026-05-05, 14:21:18](https://news.ycombinator.com/item?id=48022900) - [Incident with Actions](https://www.githubstatus.com/incidents/1j40g94rn22j)
* [2026-05-05, 14:08:00](https://soylentnews.org/article.pl?sid=26/05/04/1439238&amp;from=rss) - [Round Up of Latest OS and Software Releases](https://soylentnews.org/article.pl?sid=26/05/04/1439238&amp;from=rss)
* [2026-05-05, 14:07:50](https://news.ycombinator.com/item?id=48022742) - [AI didn&apos;t delete your database, you did](https://idiallo.com/blog/ai-didnt-delete-your-database-you-did)
* [2026-05-05, 14:00:58](https://lobste.rs/s/gsjskz/behavior_oriented_concurrency_for) - [Behavior-Oriented Concurrency for Python: Lock-less, Deadlock-free, Ownership-based](https://microsoft.github.io/bocpy/)
* [2026-05-05, 13:55:45](https://news.ycombinator.com/item?id=48022596) - [Simple Meta-Harness on Islo.dev](https://zozo123.github.io/meta-harness-on-islo-page/)
* [2026-05-05, 13:46:37](https://lobste.rs/s/yhk0mq/why_didn_t_ipv6_work_my_home_network) - [Why didn’t IPv6 work in my home network?](https://gowtham.dev/blog/ipv6-problems.html)
* [2026-05-05, 13:28:42](https://lobste.rs/s/3c4ba9/tokens_dreams) - [Tokens and Dreams](https://charlesleifer.com/blog/tokens-and-dreams/)
* [2026-05-05, 13:27:10](https://lobste.rs/s/kn0jwm/claude_code_is_not_making_your_product) - [claude code is not making your product better](https://ethanding.substack.com/p/claude-code-is-not-making-your-product)
* [2026-05-05, 13:21:28](https://lobste.rs/s/rsj8sx/bidirectional_typechecking_puzzle) - [A bidirectional typechecking puzzle](https://haskellforall.com/2026/05/a-bidirectional-typechecking-puzzle)
* [2026-05-05, 13:17:51](https://lobste.rs/s/ib8cgq/building_my_own_vi_text_editor_basic) - [Building my own Vi text editor in BASIC](https://leetusman.com/nosebook/yvi)
* [2026-05-05, 13:00:47](https://news.ycombinator.com/item?id=48021968) - [AI Product Graveyard](https://tooldirectory.ai/ai-graveyard)
* [2026-05-05, 12:32:59](https://lobste.rs/s/z0ozbb/caddy_cert_expired_because_systemd) - [A Caddy Cert Expired Because systemd-resolved Was Selectively Broken](https://rant.mvh.dev/a-caddy-cert-expired-because-systemd-resolved-was-selectively-broken/)
* [2026-05-05, 12:28:28](https://news.ycombinator.com/item?id=48021561) - [iOS 27 is adding a &apos;Create a Pass&apos; button to Apple Wallet](https://walletwallet.alen.ro/blog/ios-27-wallet-create-pass/)
* [2026-05-05, 12:14:17](https://news.ycombinator.com/item?id=48021420) - [Show HN: I built a new word game, Wordtrak](https://wordtrak.com/blog/2026-05-05-I-built-a-new-word-game)
* [2026-05-05, 11:00:00](https://news.slashdot.org/story/26/05/05/0341243/how-microplastics-are-likely-helping-to-heat-up-the-planet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Microplastics Are Likely Helping To Heat Up the Planet](https://news.slashdot.org/story/26/05/05/0341243/how-microplastics-are-likely-helping-to-heat-up-the-planet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-05, 10:20:30](https://lobste.rs/s/ewpr4z/post_quantum_vpn_based_on_quic) - [Post-Quantum VPN Based on QUIC](https://github.com/quincy-rs/quincy)
* [2026-05-05, 09:48:54](https://lobste.rs/s/yfuber/minipgp6_very_lean_interpretation) - [minipgp6: A very lean interpretation of modern OpenPGP](https://codeberg.org/minipgp6/minipgp6)
* [2026-05-05, 09:30:22](https://news.ycombinator.com/item?id=48020063) - [When everyone has AI and the company still learns nothing](https://www.robert-glaser.de/when-everyone-has-ai-and-the-company-still-learns-nothing/)
* [2026-05-05, 09:25:00](https://soylentnews.org/article.pl?sid=26/05/04/1436227&amp;from=rss) - [New Report Highlights Fructose as a Key Driver of Metabolic Disease](https://soylentnews.org/article.pl?sid=26/05/04/1436227&amp;from=rss)
* [2026-05-05, 07:44:59](https://lobste.rs/s/3dp42s/macbook_neo_deep_dive_benchmarks_wafer) - [MacBook Neo Deep Dive: Benchmarks, Wafer Economics, and the 8GB Gamble](https://www.jdhodges.com/blog/macbook-neo-benchmarks-analysis/)
* [2026-05-05, 07:34:55](https://news.ycombinator.com/item?id=48019219) - [Google Chrome silently installs a 4 GB AI model on your device without consent](https://www.thatprivacyguy.com/blog/chrome-silent-nano-install/)
* [2026-05-05, 07:26:03](https://news.ycombinator.com/item?id=48019163) - [Async Rust never left the MVP state](https://tweedegolf.nl/en/blog/237/async-rust-never-left-the-mvp-state)
* [2026-05-05, 07:05:25](https://news.ycombinator.com/item?id=48019025) - [Lessons for Agentic Coding: What should we do when code is cheap?](https://www.dbreunig.com/2026/05/04/10-lessons-for-agentic-coding.html)
* [2026-05-05, 07:00:00](https://science.slashdot.org/story/26/05/05/0320235/astronomers-may-have-detected-an-atmosphere-around-a-tiny-icy-world-past-pluto?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Astronomers May Have Detected an Atmosphere Around a Tiny, Icy World Past Pluto](https://science.slashdot.org/story/26/05/05/0320235/astronomers-may-have-detected-an-atmosphere-around-a-tiny-icy-world-past-pluto?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-05, 05:57:19](https://lobste.rs/s/hmunw6/inexpressibility_exp_minus_log) - [Inexpressibility in Exp-Minus-Log](https://arxiv.org/abs/2605.01636)
* [2026-05-05, 04:41:00](https://soylentnews.org/article.pl?sid=26/05/04/1434244&amp;from=rss) - [Canonical’s Ubuntu Servers Go Down as Hackers Demand Direct Talks](https://soylentnews.org/article.pl?sid=26/05/04/1434244&amp;from=rss)
* [2026-05-05, 04:33:22](https://news.ycombinator.com/item?id=48018066) - [Empty Screenings – Finds AMC movie screenings with few or no tickets sold](https://walzr.com/empty-screenings)
* [2026-05-05, 04:02:01](https://news.ycombinator.com/item?id=48017907) - [Hand Drawn QR Codes (2025)](https://sethmlarson.dev/hand-drawn-qr-codes)
* [2026-05-05, 03:43:08](https://news.ycombinator.com/item?id=48017813) - [CVE-2026-31431: Copy Fail vs. rootless containers](https://www.dragonsreach.it/2026/05/04/cve-2026-31431-copy-fail-rootless-containers/)
* [2026-05-05, 03:30:00](https://yro.slashdot.org/story/26/05/04/2247258/openai-president-discloses-his-stake-in-the-company-is-worth-30-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI President Discloses His Stake In the Company Is Worth $30 Billion](https://yro.slashdot.org/story/26/05/04/2247258/openai-president-discloses-his-stake-in-the-company-is-worth-30-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-05, 03:07:03](https://lobste.rs/s/otxkjw/bun_js_runtime_is_being_vibe_ported_from) - [Bun (the js runtime) is being vibe-ported from zig to rust](https://github.com/oven-sh/bun/blob/claude/phase-a-port/docs/PORTING.md)
* [2026-05-05, 01:21:42](https://lobste.rs/s/bc2zth/embedded_rust_c_firmware_lessons_from) - [Embedded Rust or C Firmware? Lessons from an Industrial Microcontroller Use Case with Ariel OS](https://arxiv.org/pdf/2604.25679)
* [2026-05-04, 23:56:00](https://soylentnews.org/article.pl?sid=26/05/04/1427214&amp;from=rss) - [Anthropic Secretly Installs Spyware When You Install Claude Desktop](https://soylentnews.org/article.pl?sid=26/05/04/1427214&amp;from=rss)
* [2026-05-04, 23:00:00](https://yro.slashdot.org/story/26/05/04/1954244/white-house-considers-vetting-ai-models-before-they-are-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [White House Considers Vetting AI Models Before They Are Released](https://yro.slashdot.org/story/26/05/04/1954244/white-house-considers-vetting-ai-models-before-they-are-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-04, 22:20:57](https://lobste.rs/s/pdckk8/podman_rootless_containers_copy_fail) - [Podman rootless containers and the Copy Fail exploit](https://garrido.io/notes/podman-rootless-containers-copy-fail/)
* [2026-05-04, 22:00:00](https://news.slashdot.org/story/26/05/04/1934208/openai-google-and-microsoft-back-bill-to-fund-ai-literacy-in-schools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI, Google, and Microsoft Back Bill To Fund &apos;AI Literacy&apos; In Schools](https://news.slashdot.org/story/26/05/04/1934208/openai-google-and-microsoft-back-bill-to-fund-ai-literacy-in-schools?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-04, 21:00:00](https://hardware.slashdot.org/story/26/05/04/1929210/the-pixel-11-could-be-the-next-victim-of-the-ram-shortage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Pixel 11 Could Be the Next Victim of the RAM Shortage](https://hardware.slashdot.org/story/26/05/04/1929210/the-pixel-11-could-be-the-next-victim-of-the-ram-shortage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-04, 20:38:33](https://lobste.rs/s/nmnmnq/nondeterminism_s_not_problem) - [Nondeterminism&apos;s not the problem](https://isaacvando.com/nondeterminisms-not-the-problem)
* [2026-05-04, 20:17:53](https://lobste.rs/s/g0crsm/security_advisory_local_privilege) - [Security Advisory: Local privilege escalation in Lix and Nix](https://discourse.nixos.org/t/security-advisory-local-privilege-escalation-in-lix-and-nix/77407)
* [2026-05-04, 20:00:00](https://linux.slashdot.org/story/26/05/04/1920215/expanded-amd-hdmi-21-support-is-coming-to-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Expanded AMD HDMI 2.1 Support Is Coming To Linux](https://linux.slashdot.org/story/26/05/04/1920215/expanded-amd-hdmi-21-support-is-coming-to-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-04, 19:42:47](https://news.ycombinator.com/item?id=48013919) - [How OpenAI delivers low-latency voice AI at scale](https://openai.com/index/delivering-low-latency-voice-ai-at-scale/)
* [2026-05-04, 19:07:09](https://lobste.rs/s/tzewx3/oasis_linux) - [Oasis Linux](https://git.sr.ht/~mcf/oasis)
* [2026-05-04, 19:07:00](https://soylentnews.org/article.pl?sid=26/05/03/0258243&amp;from=rss) - [NHS Goes to War Against Open Source](https://soylentnews.org/article.pl?sid=26/05/03/0258243&amp;from=rss)
* [2026-05-04, 19:06:29](https://lobste.rs/s/jh9f2r/release_v0_9_0_foxboron_ssh_tpm_agent) - [Release v0.9.0 · Foxboron/ssh-tpm-agent](https://github.com/Foxboron/ssh-tpm-agent/releases/tag/v0.9.0)
* [2026-05-04, 19:00:00](https://slashdot.org/story/26/05/04/1651204/the-audio-industry-is-grappling-with-the-rise-of-podslop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [The Audio Industry Is Grappling With the Rise of &apos;Podslop&apos;](https://slashdot.org/story/26/05/04/1651204/the-audio-industry-is-grappling-with-the-rise-of-podslop?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-04, 18:00:00](https://news.slashdot.org/story/26/05/04/1638217/anthropic-nears-15-billion-ai-joint-venture-with-wall-street-firms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Nears $1.5 Billion AI Joint Venture With Wall Street Firms](https://news.slashdot.org/story/26/05/04/1638217/anthropic-nears-15-billion-ai-joint-venture-with-wall-street-firms?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-04, 17:14:49](https://lobste.rs/s/mfizts/losing_skills) - [Losing Skills](https://noahbogart.com/posts/2026-05-03-losing-skills/)
* [2026-05-04, 17:00:00](https://slashdot.org/story/26/05/04/1612202/gamestop-offers-to-buy-ebay-for-56-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [GameStop Offers to Buy eBay for $56 Billion](https://slashdot.org/story/26/05/04/1612202/gamestop-offers-to-buy-ebay-for-56-billion?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-04, 16:00:00](https://science.slashdot.org/story/26/05/04/046204/scientists-discover-27-potential-new-planets-that-orbit-two-stars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Discover 27 Potential New Planets That Orbit Two Stars](https://science.slashdot.org/story/26/05/04/046204/scientists-discover-27-potential-new-planets-that-orbit-two-stars?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-04, 15:00:00](https://science.slashdot.org/story/26/05/04/0357217/infrasound-waves-stop-kitchen-fires-but-can-they-replace-sprinklers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Infrasound Waves Stop Kitchen Fires, But Can They Replace Sprinklers?](https://science.slashdot.org/story/26/05/04/0357217/infrasound-waves-stop-kitchen-fires-but-can-they-replace-sprinklers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-04, 14:26:01](https://lobste.rs/s/flowcy/async_rust_never_left_mvp_state) - [Async Rust never left the MVP state](https://tweedegolf.nl/en/blog/237/async-rust-never-left-the-mvp-state)
* [2026-05-04, 14:20:00](https://soylentnews.org/article.pl?sid=26/05/03/0252239&amp;from=rss) - [Zambia Cancels Global Digital Freedoms Conference Days Before Start](https://soylentnews.org/article.pl?sid=26/05/03/0252239&amp;from=rss)
* [2026-05-04, 12:24:41](https://lobste.rs/s/pidcaz/how_llms_distort_our_written_language) - [How LLMs Distort Our Written Language](https://sites.google.com/view/llmwritingdistortion/home)
* [2026-05-04, 11:34:00](https://news.slashdot.org/story/26/05/04/0227227/16-of-parents-help-their-children-bypass-online-age-checks-study-finds-one-15-year-old-just-uses-a-fake-moustache?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [16% of Parents Help Their Children Bypass Online Age Checks, Study Finds. One 15-Year-Old Just Uses a Fake Moustache](https://news.slashdot.org/story/26/05/04/0227227/16-of-parents-help-their-children-bypass-online-age-checks-study-finds-one-15-year-old-just-uses-a-fake-moustache?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-04, 09:39:00](https://soylentnews.org/article.pl?sid=26/05/03/0232241&amp;from=rss) - [An Amateur Just Solved a 60-Year-Old Math Problem—by Asking AI](https://soylentnews.org/article.pl?sid=26/05/03/0232241&amp;from=rss)
* [2026-05-04, 06:36:50](https://lobste.rs/s/6cmh6h/reminder_you_can_stitch_together_lots) - [Reminder: You Can Stitch Together Lots of Little HTML Pages With Navigations For Interactions](https://blog.jim-nielsen.com/2026/small-html-pages/)
* [2026-05-04, 04:52:00](https://soylentnews.org/article.pl?sid=26/05/03/0223205&amp;from=rss) - [The Mushroom Making People Hallucinate Dozens of Tiny Humans](https://soylentnews.org/article.pl?sid=26/05/03/0223205&amp;from=rss)
* [2026-05-04, 00:09:00](https://soylentnews.org/article.pl?sid=26/05/03/020241&amp;from=rss) - [Ask.com Closes](https://soylentnews.org/article.pl?sid=26/05/03/020241&amp;from=rss)
* [2026-05-03, 19:19:00](https://soylentnews.org/article.pl?sid=26/05/01/079248&amp;from=rss) - [The Linux Kernel Tree About to Hit 40 Million Lines, AMD Driver Above 6 Million Lines](https://soylentnews.org/article.pl?sid=26/05/01/079248&amp;from=rss)
* [2026-05-03, 14:35:00](https://soylentnews.org/article.pl?sid=26/05/01/078213&amp;from=rss) - [There&apos;s a Good Reason Semi Trucks Don&apos;t Use V8s](https://soylentnews.org/article.pl?sid=26/05/01/078213&amp;from=rss)
* [2026-05-03, 09:52:00](https://soylentnews.org/article.pl?sid=26/05/01/073236&amp;from=rss) - [Ghostty Is Leaving GitHub - Ghostty Developer Loses Confidence in GitHub’s Reliability](https://soylentnews.org/article.pl?sid=26/05/01/073236&amp;from=rss)
* [2026-05-03, 05:10:00](https://soylentnews.org/article.pl?sid=26/05/01/0658214&amp;from=rss) - [Round Up of Latest OS and Browser Releases](https://soylentnews.org/article.pl?sid=26/05/01/0658214&amp;from=rss)
* [2026-05-03, 04:06:08](https://news.ycombinator.com/item?id=47993240) - [Comparing the Z80 and 6502 to Their Relatives](https://bumbershootsoft.wordpress.com/2026/05/02/comparing-the-z80-and-6502-to-their-relatives/)
* [2026-05-03, 03:54:47](https://news.ycombinator.com/item?id=47993181) - [The first photo published in a newspaper](https://phsne.org/the-first-photograph-published-in-a-newspaper-1848/)
* [2026-05-03, 00:27:00](https://soylentnews.org/article.pl?sid=26/05/01/0648229&amp;from=rss) - [The Resurrected Commodore 64 is Getting a Facelift Like the Original](https://soylentnews.org/article.pl?sid=26/05/01/0648229&amp;from=rss)
* [2026-05-02, 21:03:48](https://news.ycombinator.com/item?id=47990491) - [Farewell to a Giant of Botany](https://nautil.us/farewell-to-a-giant-of-botany-1280409)
* [2026-05-02, 19:42:00](https://soylentnews.org/article.pl?sid=26/05/01/0645211&amp;from=rss) - [Drone Pilot Makes US Rescind No-Fly Zones Around Unmarked, Moving ICE Vehicles](https://soylentnews.org/article.pl?sid=26/05/01/0645211&amp;from=rss)
* [2026-05-02, 15:52:27](https://news.ycombinator.com/item?id=47987463) - [Did I photograph the Aurora or was it something else? (2016)](https://wp.lancs.ac.uk/aurorawatchuk/2016/03/16/did-i-photgraph-the-aurora-or-was-it-something-else/)
* [2026-05-02, 14:56:00](https://soylentnews.org/article.pl?sid=26/05/01/0637252&amp;from=rss) - [Linux Cryptographic Code Flaw Offers Fast Route to Root](https://soylentnews.org/article.pl?sid=26/05/01/0637252&amp;from=rss)
* [2026-05-02, 14:40:55](https://news.ycombinator.com/item?id=47986798) - [sRGB profile comparison](https://ninedegreesbelow.com/photography/srgb-profile-comparison.html)
* [2026-05-02, 13:41:43](https://news.ycombinator.com/item?id=47986331) - [Docker 29 has changed its default image store for new installs](https://docs.docker.com/engine/storage/containerd)
* [2026-05-02, 10:07:00](https://soylentnews.org/article.pl?sid=26/04/30/1239239&amp;from=rss) - [Apple Wants to Kill Your Time Capsule, but They Run NetBSD So They Can&apos;t](https://soylentnews.org/article.pl?sid=26/04/30/1239239&amp;from=rss)
* [2026-05-02, 05:21:00](https://soylentnews.org/article.pl?sid=26/04/30/1235210&amp;from=rss) - [Google and Pentagon Reportedly Agree on Deal for ‘Any Lawful’ Use of AI](https://soylentnews.org/article.pl?sid=26/04/30/1235210&amp;from=rss)
* [2026-05-02, 00:38:00](https://soylentnews.org/article.pl?sid=26/04/30/1229213&amp;from=rss) - [How Linux 7.0 Broke PostgreSQL](https://soylentnews.org/article.pl?sid=26/04/30/1229213&amp;from=rss)
* [2026-05-01, 19:55:00](https://soylentnews.org/article.pl?sid=26/04/30/1227212&amp;from=rss) - [Colorado&apos;s Anti-Repair Bill is Dead](https://soylentnews.org/article.pl?sid=26/04/30/1227212&amp;from=rss)
* [2026-05-01, 15:11:00](https://soylentnews.org/article.pl?sid=26/04/30/0232227&amp;from=rss) - [Vibe Coding Will Break Your Company      ](https://soylentnews.org/article.pl?sid=26/04/30/0232227&amp;from=rss)
* [2026-05-01, 10:25:00](https://soylentnews.org/article.pl?sid=26/04/30/0229207&amp;from=rss) - [Google Ad Income Per User - With Demographic Breakdown](https://soylentnews.org/article.pl?sid=26/04/30/0229207&amp;from=rss)
* [2026-05-01, 05:41:00](https://soylentnews.org/article.pl?sid=26/04/30/0224241&amp;from=rss) - [Microsoft Pushes Out Experienced American Talent to Fuel AI Ambitions](https://soylentnews.org/article.pl?sid=26/04/30/0224241&amp;from=rss)
* [2026-05-01, 00:58:00](https://soylentnews.org/article.pl?sid=26/04/30/0223202&amp;from=rss) - [Your Phone is About to Stop Being Yours. Keep Android Open!](https://soylentnews.org/article.pl?sid=26/04/30/0223202&amp;from=rss)
