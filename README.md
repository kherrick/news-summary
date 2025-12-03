# [News Summary](https://kherrick.github.io/news-summary/)

## Space and Aerospace Developments

* [Chinese Reusable Booster Explodes During First Orbital Test](https://science.slashdot.org/story/25/12/03/1510248/chinese-reusable-booster-explodes-during-first-orbital-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A significant setback in reusable space technology development.

* [LandSpace Could Become China's First Company To Land a Reusable Rocket](https://science.slashdot.org/story/25/12/03/0457240/landspace-could-become-chinas-first-company-to-land-a-reusable-rocket?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Innovations in China's private space sector.

* [Researchers Find Microbe Capable of Producing Oxygen from Martian Soil](https://scienceclock.com/microbe-that-could-turn-martian-dust-into-oxygen/) - A breakthrough that could support future Martian colonization.

## AI and Technology Concerns

* [OpenAI Declares 'Code Red' As Google Catches Up In AI Race](https://tech.slashdot.org/story/25/12/02/2221238/openai-declares-code-red-as-google-catches-up-in-ai-race?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The intensifying competition in generative AI developments.

* [IBM CEO Says There is 'No Way' Spending on AI Data Centers Will Pay Off](https://www.businessinsider.com/ibm-ceo-big-tech-ai-capex-data-center-spending-2025-12) - Critical commentary on AI data center expenses.

* [Are we repeating the telecoms crash with AI datacenters?](https://martinalderson.com/posts/are-we-really-repeating-the-telecoms-crash-with-ai-datacenters/) - An exploration of potential financial pitfalls in AI infrastructure investments.

## Zig and GitHub Controversy

* [Zig Quits GitHub, Says Microsoft's AI Obsession Has Ruined the Service](https://slashdot.org/story/25/12/03/070228/zig-quits-github-says-microsofts-ai-obsession-has-ruined-the-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The impact of GitHub's AI-focused strategy on user satisfaction.

* [Zig's New Plan for Asynchronous Programs](https://lwn.net/SubscriberLink/1046084/6cb9e4e1fd82a90d/) - Zig's evolving approach to asynchronous programming paradigms.

## Healthcare and Environmental Insights

* [Mapping Every Dollar of America's $5T Healthcare System](https://healthisotherpeople.substack.com/p/an-abominable-creature) - A detailed financial analysis of the U.S. healthcare industry's expenditures.

* [Scientists Warn Mountain Climate Change is Accelerating Faster Than Predicted](https://soylentnews.org/article.pl?sid=25/12/01/0716216&amp;from=rss) - Alarming new findings on climate change's effects in mountain regions.

## Gaming and Technology Reductions

* [Helldivers 2 Devs Slash Install Size from 154GB to 23GB](https://www.tomshardware.com/video-games/pc-gaming/helldivers-2-install-size-slashed-from-154gb-to-just-23gb-85-percent-reduction-accomplished-by-de-duplicating-game-data-an-optimization-for-older-mechanical-hard-drives) - A drastic optimization in game data management.

* [Getting from Tested to Battle-Tested](https://blog.janestreet.com/getting-from-tested-to-battle-tested/) - Insights into advancing technology reliability under rigorous conditions.

## Miscellaneous Innovations

* [Congressional Lawmakers 47% Pts Better at Picking Stocks](https://www.nber.org/papers/w34524) - A new economic study highlighting lawmakers' financial acumen.

* [Interview with RollerCoaster Tycoon's Creator, Chris Sawyer (2024)](https://medium.com/atari-club/interview-with-rollercoaster-tycoons-creator-chris-sawyer-684a0efb0f13) - A candid discussion about game development and design.

* [You Can't Fool the Optimizer](https://xania.org/202512/03-more-adding-integers) - An intriguing dive into machine optimization subtleties.

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

* [2025-12-03, 15:30:30](https://news.ycombinator.com/item?id=46135627) - [Why are my headphones buzzing whenever I run my game?](https://alexene.dev/2025/12/03/Why-do-my-headphones-buzz-when-i-run-my-game.html)
* [2025-12-03, 15:15:00](https://science.slashdot.org/story/25/12/03/1510248/chinese-reusable-booster-explodes-during-first-orbital-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chinese Reusable Booster Explodes During First Orbital Test](https://science.slashdot.org/story/25/12/03/1510248/chinese-reusable-booster-explodes-during-first-orbital-test?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-03, 15:11:58](https://news.ycombinator.com/item?id=46135388) - [Microsoft lowers AI software sales quota](https://finance.yahoo.com/news/microsoft-lowers-ai-software-sales-141531121.html)
* [2025-12-03, 15:05:48](https://lobste.rs/s/t2rpap/getting_from_tested_battle_tested) - [Getting from tested to battle-tested](https://blog.janestreet.com/getting-from-tested-to-battle-tested/)
* [2025-12-03, 14:42:02](https://news.ycombinator.com/item?id=46135008) - [Mapping Every Dollar of America&apos;s $5T Healthcare System](https://healthisotherpeople.substack.com/p/an-abominable-creature)
* [2025-12-03, 14:40:25](https://news.ycombinator.com/item?id=46134991) - [GSWT: Gaussian Splatting Wang Tiles](https://yunfan.zone/gswt_webpage/)
* [2025-12-03, 14:14:00](https://slashdot.org/story/25/12/03/070228/zig-quits-github-says-microsofts-ai-obsession-has-ruined-the-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Zig Quits GitHub, Says Microsoft&apos;s AI Obsession Has Ruined the Service](https://slashdot.org/story/25/12/03/070228/zig-quits-github-says-microsofts-ai-obsession-has-ruined-the-service?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-03, 13:59:21](https://lobste.rs/s/jcrlmk/desugaring_relationship_between) - [Desugaring the Relationship Between Concrete and Abstract Syntax](https://thunderseethe.dev/posts/desugar-base/)
* [2025-12-03, 13:50:10](https://news.ycombinator.com/item?id=46134443) - [Congressional lawmakers 47% pts better at picking stocks](https://www.nber.org/papers/w34524)
* [2025-12-03, 13:20:58](https://news.ycombinator.com/item?id=46134178) - [Helldivers 2 devs slash install size from 154GB to 23GB](https://www.tomshardware.com/video-games/pc-gaming/helldivers-2-install-size-slashed-from-154gb-to-just-23gb-85-percent-reduction-accomplished-by-de-duplicating-game-data-an-optimization-for-older-mechanical-hard-drives)
* [2025-12-03, 13:13:00](https://news.slashdot.org/story/25/12/03/0649236/japanese-devs-face-font-licensing-dilemma-as-annual-costs-increase-from-380-to-20k?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japanese Devs Face Font Licensing Dilemma as Annual Costs Increase From $380 To $20K](https://news.slashdot.org/story/25/12/03/0649236/japanese-devs-face-font-licensing-dilemma-as-annual-costs-increase-from-380-to-20k?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-03, 12:44:29](https://lobste.rs/s/hjhrcg/you_can_t_fool_optimiser) - [You can&apos;t fool the optimiser](https://xania.org/202512/03-more-adding-integers)
* [2025-12-03, 12:14:34](https://news.ycombinator.com/item?id=46133622) - [You Can&apos;t Fool the Optimizer](https://xania.org/202512/03-more-adding-integers)
* [2025-12-03, 11:50:00](https://news.ycombinator.com/item?id=46133422) - [The \&quot;Mad Men\&quot; in 4K on HBO Max Debacle](http://fxrant.blogspot.com/2025/12/the-mad-men-in-4k-on-hbo-max-debacle.html)
* [2025-12-03, 11:20:00](https://soylentnews.org/article.pl?sid=25/12/01/0721253&amp;from=rss) - [Bright Orange Life-Form Could Point to New Dino Discoveries](https://soylentnews.org/article.pl?sid=25/12/01/0721253&amp;from=rss)
* [2025-12-03, 11:14:56](https://news.ycombinator.com/item?id=46133141) - [Are we repeating the telecoms crash with AI datacenters?](https://martinalderson.com/posts/are-we-really-repeating-the-telecoms-crash-with-ai-datacenters/)
* [2025-12-03, 11:06:10](https://news.ycombinator.com/item?id=46133068) - [India scraps order to pre-install state-run cyber safety app on smartphones](https://www.bbc.com/news/articles/clydg2re4d1o)
* [2025-12-03, 10:35:15](https://lobste.rs/s/hd5ci1/it_s_not_always_icache) - [It&apos;s Not Always ICache](https://matklad.github.io/2021/07/10/its-not-always-icache.html)
* [2025-12-03, 10:10:00](https://science.slashdot.org/story/25/12/03/0457240/landspace-could-become-chinas-first-company-to-land-a-reusable-rocket?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [LandSpace Could Become China&apos;s First Company To Land a Reusable Rocket](https://science.slashdot.org/story/25/12/03/0457240/landspace-could-become-chinas-first-company-to-land-a-reusable-rocket?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-03, 09:53:27](https://news.ycombinator.com/item?id=46132531) - [Anthropic reportedly preparing for $300B IPO](https://vechron.com/2025/12/anthropic-hires-wilson-sonsini-ipo-2026-openai-race/)
* [2025-12-03, 08:05:57](https://lobste.rs/s/uzfrya/zig_s_new_plan_for_asynchronous_programs) - [Zig&apos;s new plan for asynchronous programs](https://lwn.net/SubscriberLink/1046084/6cb9e4e1fd82a90d/)
* [2025-12-03, 07:52:37](https://news.ycombinator.com/item?id=46131406) - [Zig quits GitHub, says Microsoft&apos;s AI obsession has ruined the service](https://www.theregister.com/2025/12/02/zig_quits_github_microsoft_ai_obsession/)
* [2025-12-03, 07:07:00](https://science.slashdot.org/story/25/12/03/0447236/study-finds-tattoo-ink-moves-through-the-body-killing-immune-cells?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Study Finds Tattoo Ink Moves Through the Body, Killing Immune Cells](https://science.slashdot.org/story/25/12/03/0447236/study-finds-tattoo-ink-moves-through-the-body-killing-immune-cells?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-03, 06:58:00](https://soylentnews.org/article.pl?sid=25/12/01/0719241&amp;from=rss) - [Dell: About 1 Billion PCs Will Not or Cannot be Upgraded to Windows 11](https://soylentnews.org/article.pl?sid=25/12/01/0719241&amp;from=rss)
* [2025-12-03, 06:34:28](https://news.ycombinator.com/item?id=46130907) - [Researchers Find Microbe Capable of Producing Oxygen from Martian Soil](https://scienceclock.com/microbe-that-could-turn-martian-dust-into-oxygen/)
* [2025-12-03, 06:07:22](https://news.ycombinator.com/item?id=46130784) - [Quad9 DOH HTTP/1.1 Retirement, December 15, 2025](https://quad9.net/news/blog/doh-http-1-1-retirement/)
* [2025-12-03, 05:05:00](https://developers.slashdot.org/story/25/12/03/0437256/anthropic-acquires-bun-in-first-acquisition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anthropic Acquires Bun In First Acquisition](https://developers.slashdot.org/story/25/12/03/0437256/anthropic-acquires-bun-in-first-acquisition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-03, 04:32:16](https://news.ycombinator.com/item?id=46130335) - [Interview with RollerCoaster Tycoon&apos;s Creator, Chris Sawyer (2024)](https://medium.com/atari-club/interview-with-rollercoaster-tycoons-creator-chris-sawyer-684a0efb0f13)
* [2025-12-03, 03:59:37](https://lobste.rs/s/iomcvh/how_large_dom_sizes_affect_interactivity) - [How large DOM sizes affect interactivity, and what you can do about it (2023)](https://web.dev/articles/dom-size-and-interactivity)
* [2025-12-03, 03:43:23](https://lobste.rs/s/gdpcfi/luarrow_true_pipeline_operators_elegant) - [Luarrow - True pipeline operators and elegant Haskell-style function composition for Lua](https://github.com/aiya000/luarrow.lua)
* [2025-12-03, 03:18:01](https://lobste.rs/s/ooaiag/running_linux_on_riscpc_why_is_it_so_hard) - [Running Linux on a RiscPC, why is it so hard?](https://www.thejpster.org.uk/blog/blog-2025-12-02/)
* [2025-12-03, 03:03:00](https://science.slashdot.org/story/25/12/02/2229255/san-francisco-will-sue-ultraprocessed-food-companies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [San Francisco Will Sue Ultraprocessed Food Companies](https://science.slashdot.org/story/25/12/02/2229255/san-francisco-will-sue-ultraprocessed-food-companies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-03, 02:53:58](https://lobste.rs/s/2bqnnc/avoiding_space_leaks_at_all_costs_2022) - [Avoiding space leaks at all costs (2022)](https://chshersh.com/blog/2022-08-08-space-leak.html)
* [2025-12-03, 02:52:19](https://lobste.rs/s/lsf4hv/roko_s_dancing_basilisk) - [Roko&apos;s dancing basilisk](https://boston.conman.org/2025/12/02.1)
* [2025-12-03, 02:03:39](https://lobste.rs/s/1ullif/how_should_we_peer_review_software) - [How should we peer review software?](https://mirawelner.com/posts/peer_review.html)
* [2025-12-03, 02:02:00](https://tech.slashdot.org/story/25/12/02/2322203/waymo-hits-a-dog-in-san-francisco-reigniting-safety-debate?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Waymo Hits a Dog In San Francisco, Reigniting Safety Debate](https://tech.slashdot.org/story/25/12/02/2322203/waymo-hits-a-dog-in-san-francisco-reigniting-safety-debate?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-03, 01:53:00](https://soylentnews.org/article.pl?sid=25/12/01/0716216&amp;from=rss) - [Scientists Warn Mountain Climate Change is Accelerating Faster Than Predicted](https://soylentnews.org/article.pl?sid=25/12/01/0716216&amp;from=rss)
* [2025-12-03, 01:01:00](https://news.slashdot.org/story/25/12/02/2253248/kubernetes-is-retiring-its-popular-ingress-nginx-controller?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Kubernetes Is Retiring Its Popular Ingress NGINX Controller](https://news.slashdot.org/story/25/12/02/2253248/kubernetes-is-retiring-its-popular-ingress-nginx-controller?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-03, 00:00:00](https://tech.slashdot.org/story/25/12/02/2221238/openai-declares-code-red-as-google-catches-up-in-ai-race?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [OpenAI Declares &apos;Code Red&apos; As Google Catches Up In AI Race](https://tech.slashdot.org/story/25/12/02/2221238/openai-declares-code-red-as-google-catches-up-in-ai-race?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-02, 23:23:00](https://apple.slashdot.org/story/25/12/02/2214241/apple-to-resist-india-order-to-preload-state-run-app-as-political-outcry-builds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple To Resist India Order To Preload State-Run App As Political Outcry Builds](https://apple.slashdot.org/story/25/12/02/2214241/apple-to-resist-india-order-to-preload-state-run-app-as-political-outcry-builds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-02, 22:22:00](https://news.slashdot.org/story/25/12/02/221215/uk-plans-to-ban-cryptocurrency-political-donations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK Plans To Ban Cryptocurrency Political Donations](https://news.slashdot.org/story/25/12/02/221215/uk-plans-to-ban-cryptocurrency-political-donations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-02, 21:29:00](https://soylentnews.org/article.pl?sid=25/12/01/0713251&amp;from=rss) - [Scientists Discover That People Act Way Better When Batman is Present](https://soylentnews.org/article.pl?sid=25/12/01/0713251&amp;from=rss)
* [2025-12-02, 21:21:00](https://slashdot.org/story/25/12/02/1930223/amazon-to-use-nvidia-tech-in-ai-chips-roll-out-new-servers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon To Use Nvidia Tech In AI Chips, Roll Out New Servers](https://slashdot.org/story/25/12/02/1930223/amazon-to-use-nvidia-tech-in-ai-chips-roll-out-new-servers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-02, 20:20:00](https://news.slashdot.org/story/25/12/02/1924229/smarttube-youtube-app-for-android-tv-breached-to-push-malicious-update?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SmartTube YouTube App For Android TV Breached To Push Malicious Update](https://news.slashdot.org/story/25/12/02/1924229/smarttube-youtube-app-for-android-tv-breached-to-push-malicious-update?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-02, 20:14:20](https://news.ycombinator.com/item?id=46126217) - [Paged Out](https://pagedout.institute)
* [2025-12-02, 19:59:53](https://lobste.rs/s/vkyrtf/defense_lock_poisoning_rust) - [In defense of lock poisoning in Rust](https://sunshowers.io/posts/on-poisoning/)
* [2025-12-02, 19:19:00](https://politics.slashdot.org/story/25/12/02/1916207/michael-and-susan-dell-donate-625-billion-to-encourage-families-to-claim-trump-accounts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Michael and Susan Dell Donate $6.25 Billion To Encourage Families To Claim &apos;Trump Accounts&apos;](https://politics.slashdot.org/story/25/12/02/1916207/michael-and-susan-dell-donate-625-billion-to-encourage-families-to-claim-trump-accounts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-02, 19:15:54](https://lobste.rs/s/yvb1ve/can_we_build_wechat_mini_apps_using_open) - [Can we build WeChat Mini Apps using open web standards?](https://dmathewwws.com/antler-an-irl-browser)
* [2025-12-02, 18:41:43](https://lobste.rs/s/ymwbkg/web_based_markdown_editor_with_no_ai) - [Web-based markdown editor with no AI](https://kraa.io/about)
* [2025-12-02, 18:36:41](https://lobste.rs/s/kwbowm/acme_challenge_for_persistent_dns_txt) - [ACME Challenge for Persistent DNS TXT Record Validation](https://datatracker.ietf.org/doc/html/draft-sheurich-acme-dns-persist-01)
* [2025-12-02, 18:10:23](https://news.ycombinator.com/item?id=46124324) - [IBM CEO says there is &apos;no way&apos; spending on AI data centers will pay off](https://www.businessinsider.com/ibm-ceo-big-tech-ai-capex-data-center-spending-2025-12)
* [2025-12-02, 18:05:44](https://news.ycombinator.com/item?id=46124267) - [Anthropic acquires Bun](https://bun.com/blog/bun-joins-anthropic)
* [2025-12-02, 17:54:35](https://lobste.rs/s/xvroiv/progress_on_typescript_7_december_2025) - [Progress on TypeScript 7 - December 2025](https://devblogs.microsoft.com/typescript/progress-on-typescript-7-december-2025/)
* [2025-12-02, 17:25:18](https://lobste.rs/s/tvweri/emacsconf_2025) - [EmacsConf 2025](https://emacsconf.org/2025/)
* [2025-12-02, 16:42:31](https://lobste.rs/s/fvdh2d/zmx_session_persistence_for_terminal) - [zmx: session persistence for terminal processes](https://github.com/neurosnap/zmx)
* [2025-12-02, 16:22:00](https://soylentnews.org/article.pl?sid=25/12/01/0413229&amp;from=rss) - [Major Software Version Releases for Blender and Bottles](https://soylentnews.org/article.pl?sid=25/12/01/0413229&amp;from=rss)
* [2025-12-02, 15:00:16](https://news.ycombinator.com/item?id=46121870) - [OpenAI declares &apos;code red&apos; as Google catches up in AI race](https://www.theverge.com/news/836212/openai-code-red-chatgpt)
* [2025-12-02, 14:52:22](https://lobste.rs/s/ysvvbi/nixtml_static_website_blog_generator) - [nixtml: Static website and blog generator written in nix](https://github.com/arnarg/nixtml)
* [2025-12-02, 14:20:03](https://lobste.rs/s/fd2j1n/my_first_impressions_meshcore_off_grid) - [My First Impressions of MeshCore Off-Grid Messaging](https://mtlynch.io/first-impressions-of-meshcore/)
* [2025-12-02, 13:46:18](https://lobste.rs/s/cw85yf/lazier_binary_decision_diagrams_bdds_for) - [Lazier Binary Decision Diagrams (BDDs) for set-theoretic types](https://elixir-lang.org/blog/2025/12/02/lazier-bdds-for-set-theoretic-types/)
* [2025-12-02, 12:30:19](https://lobste.rs/s/dngk6l/go_proposal_type_safe_error_checking) - [Go proposal: Type-safe error checking](https://antonz.org/accepted/errors-astype/)
* [2025-12-02, 11:40:00](https://soylentnews.org/article.pl?sid=25/12/01/043228&amp;from=rss) - [Mind-Reading Devices Can Now Predict Preconscious Thoughts: Is It Time to Worry?](https://soylentnews.org/article.pl?sid=25/12/01/043228&amp;from=rss)
* [2025-12-02, 11:39:18](https://lobste.rs/s/1naccs/new_ai_slop_signal_code_blocks_with_weird) - [New AI slop signal: code blocks with weird indentation](https://xeiaso.net/notes/2025/slop-signal-indentation/)
* [2025-12-02, 07:00:11](https://lobste.rs/s/r2bamx/decreasing_certificate_lifetimes_45) - [Decreasing Certificate Lifetimes to 45 Days](https://letsencrypt.org/2025/12/02/from-90-to-45.html)
* [2025-12-02, 06:57:00](https://soylentnews.org/article.pl?sid=25/12/01/0350249&amp;from=rss) - [Billion-Dollar AI Chip Deal Between Google and Meta Could be on the Cards](https://soylentnews.org/article.pl?sid=25/12/01/0350249&amp;from=rss)
* [2025-12-02, 06:26:01](https://lobste.rs/s/c8bzzd/gitmal_static_pages_generator_for_git) - [Gitmal - a static pages generator for Git repos](https://github.com/antonmedv/gitmal)
* [2025-12-02, 02:09:00](https://soylentnews.org/article.pl?sid=25/12/01/0343223&amp;from=rss) - [Ukraine First Country in Europe to Get Starlink Satellite Phone Service](https://soylentnews.org/article.pl?sid=25/12/01/0343223&amp;from=rss)
* [2025-12-01, 21:26:00](https://soylentnews.org/article.pl?sid=25/12/01/0335217&amp;from=rss) - [NTSB Finds Root Cause of Container Ship Hitting Baltimore Bridge](https://soylentnews.org/article.pl?sid=25/12/01/0335217&amp;from=rss)
* [2025-12-01, 16:40:00](https://soylentnews.org/article.pl?sid=25/11/30/0244232&amp;from=rss) - [Pebble, the E-Ink Smartwatch That Refuses to Die, Just Went Fully Open Source](https://soylentnews.org/article.pl?sid=25/11/30/0244232&amp;from=rss)
* [2025-12-01, 11:51:00](https://soylentnews.org/article.pl?sid=25/11/30/0234208&amp;from=rss) - [ClamAV Signature Retirement Announcement](https://soylentnews.org/article.pl?sid=25/11/30/0234208&amp;from=rss)
* [2025-12-01, 07:07:00](https://soylentnews.org/article.pl?sid=25/11/30/0229203&amp;from=rss) - [Roblox to Use AI for User Age Identification but Aus Government Wants More](https://soylentnews.org/article.pl?sid=25/11/30/0229203&amp;from=rss)
* [2025-12-01, 02:20:00](https://soylentnews.org/article.pl?sid=25/11/30/0224246&amp;from=rss) - [Particle Accelerator Waste Could Help Produce Cancer-Fighting Materials](https://soylentnews.org/article.pl?sid=25/11/30/0224246&amp;from=rss)
* [2025-11-30, 21:34:00](https://soylentnews.org/article.pl?sid=25/11/30/0218206&amp;from=rss) - [AI-Induced Psychosis: The Danger of Humans and Machines Hallucinating Together](https://soylentnews.org/article.pl?sid=25/11/30/0218206&amp;from=rss)
* [2025-11-30, 16:51:00](https://soylentnews.org/article.pl?sid=25/11/26/1555213&amp;from=rss) - [Rust for Linux Kernel Co-Maintainer Formally Steps Down](https://soylentnews.org/article.pl?sid=25/11/26/1555213&amp;from=rss)
* [2025-11-30, 14:17:00](https://soylentnews.org/article.pl?sid=25/11/26/1550227&amp;from=rss) - [Tor Switches to New Counter Galois Onion Relay Encryption Algorithm](https://soylentnews.org/article.pl?sid=25/11/26/1550227&amp;from=rss)
* [2025-11-30, 11:43:00](https://soylentnews.org/article.pl?sid=25/11/26/149224&amp;from=rss) - [Beijing Unveils Supercritical CO2 Turbine That Could Upend Power Tech](https://soylentnews.org/article.pl?sid=25/11/26/149224&amp;from=rss)
* [2025-11-30, 09:12:00](https://soylentnews.org/article.pl?sid=25/11/26/1415217&amp;from=rss) - [The Unpowered SSDs in Your Drawer Are Slowly Losing Your Data](https://soylentnews.org/article.pl?sid=25/11/26/1415217&amp;from=rss)
* [2025-11-30, 07:27:25](https://news.ycombinator.com/item?id=46094606) - [Qwen3-VL can scan two-hour videos and pinpoint nearly every detail](https://the-decoder.com/qwen3-vl-can-scan-two-hour-videos-and-pinpoint-nearly-every-detail/)
* [2025-11-30, 06:56:33](https://news.ycombinator.com/item?id=46094460) - [I designed and printed a custom nose guard to help my dog with DLE](https://snoutcover.com/billie-story)
* [2025-11-30, 06:53:00](https://soylentnews.org/article.pl?sid=25/11/25/1521238&amp;from=rss) - [Horse Virus EHV-1 Outbreak Spreads to Eight Texas Counties: Two Horses Have Died](https://soylentnews.org/article.pl?sid=25/11/25/1521238&amp;from=rss)
* [2025-11-30, 04:38:00](https://soylentnews.org/article.pl?sid=25/11/25/1517228&amp;from=rss) - [Scientists Unveil Breakthrough Low-Temperature Fuel Cell That Could Revolutionize Hydrogen Power](https://soylentnews.org/article.pl?sid=25/11/25/1517228&amp;from=rss)
* [2025-11-30, 02:23:00](https://soylentnews.org/article.pl?sid=25/11/25/1514218&amp;from=rss) - [Myths About Rapid Spread of the Black Death Influenced by Single “Literary Tale”](https://soylentnews.org/article.pl?sid=25/11/25/1514218&amp;from=rss)
* [2025-11-30, 00:05:00](https://soylentnews.org/article.pl?sid=25/11/25/1512241&amp;from=rss) - [A Rare GM EV1 Saved From The Crusher is Going to be Driveable Again](https://soylentnews.org/article.pl?sid=25/11/25/1512241&amp;from=rss)
* [2025-11-29, 21:56:00](https://soylentnews.org/article.pl?sid=25/11/29/2035258&amp;from=rss) - [Valve Announces the Steam Frame: &apos;A New Way to Play Your Entire Steam Library&apos;](https://soylentnews.org/article.pl?sid=25/11/29/2035258&amp;from=rss)
* [2025-11-29, 21:16:00](https://soylentnews.org/article.pl?sid=25/11/25/157251&amp;from=rss) - [Bitcoin Mining Needs Regulatory Legislation](https://soylentnews.org/article.pl?sid=25/11/25/157251&amp;from=rss)
* [2025-11-29, 20:53:00](https://soylentnews.org/article.pl?sid=25/11/29/2053221&amp;from=rss) - [Re-releasing Stories in Queue](https://soylentnews.org/article.pl?sid=25/11/29/2053221&amp;from=rss)
* [2025-11-29, 12:26:00](https://soylentnews.org/article.pl?sid=25/11/26/2246256&amp;from=rss) - [This Linux OS Has Got a Million Downloads Since Windows 10 Support Ended](https://soylentnews.org/article.pl?sid=25/11/26/2246256&amp;from=rss)
* [2025-11-29, 07:43:00](https://soylentnews.org/article.pl?sid=25/11/26/2245225&amp;from=rss) - [Americans With Four-Year Degrees Now Comprise a Record 25% of Unemployed Workers](https://soylentnews.org/article.pl?sid=25/11/26/2245225&amp;from=rss)
* [2025-11-29, 02:58:00](https://soylentnews.org/article.pl?sid=25/11/26/2239240&amp;from=rss) - [China Launches Shenzhou-22 Early for Stranded Space Station Crew](https://soylentnews.org/article.pl?sid=25/11/26/2239240&amp;from=rss)
