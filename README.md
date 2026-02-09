# [News Summary](https://kherrick.github.io/news-summary/)

## Emerging Technologies and Innovations

* [Show HN: Browse Internet Infrastructure](https://www.wirewiki.com) ([comments](https://news.ycombinator.com/item?id=46944555))

* [New Raspberry Pi 4 Model Splits RAM Across Dual Chips](https://hardware.slashdot.org/story/26/02/09/0644255/new-raspberry-pi-4-model-splits-ram-across-dual-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://hardware.slashdot.org/story/26/02/09/0644255/new-raspberry-pi-4-model-splits-ram-across-dual-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Show HN: Minimal NIST/OWASP-compliant auth implementation for Cloudflare Workers](https://github.com/vhscom/private-landing) ([comments](https://news.ycombinator.com/item?id=46944084))

## Open Source and Software Development

* [Vibe Coding is Killing Open Source Software](https://soylentnews.org/article.pl?sid=26/02/08/0226226&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/02/08/0226226&amp;from=rss))

* [The Case for Contextual Copyleft: Licensing Open Source Training Data and Generative AI](https://arxiv.org/pdf/2507.12713) ([comments](https://lobste.rs/s/zk4cmn/case_for_contextual_copyleft_licensing))

* [Concerns about low-quality PRs beeing merged into main](https://discourse.llvm.org/t/concerns-about-low-quality-prs-beeing-merged-into-main/89748) ([comments](https://lobste.rs/s/m4lvr0/concerns_about_low_quality_prs_beeing))

## Innovation in AI and Generative Technologies

* [AI makes the easy part easier and the hard part harder](https://www.blundergoat.com/articles/ai-makes-the-easy-part-easier-and-the-hard-part-harder) ([comments](https://news.ycombinator.com/item?id=46939593))

* [AI fatigue is real and nobody talks about it](https://siddhantkhare.com/writing/ai-fatigue-is-real) ([comments](https://lobste.rs/s/gfsl25/ai_fatigue_is_real_nobody_talks_about_it))

* [The AI productivity trap: Why your Best Engineers are Getting Slower](https://soylentnews.org/article.pl?sid=26/02/07/0352243&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/02/07/0352243&amp;from=rss))

## Scientific and Space Exploration

* [SpaceX Prioritizes Lunar 'Self-Growing City' Over Mars Project, Musk Says](https://science.slashdot.org/story/26/02/09/0536231/spacex-prioritizes-lunar-self-growing-city-over-mars-project-musk-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://science.slashdot.org/story/26/02/09/0536231/spacex-prioritizes-lunar-self-growing-city-over-mars-project-musk-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Algorithmically Finding the Longest Line of Sight on Earth](https://alltheviews.world) ([comments](https://news.ycombinator.com/item?id=46943568))

* [Scientists Explored Island Cave, Found 1 Million-Year-Old Remnants a Lost World](https://science.slashdot.org/story/26/02/08/0616224/scientists-explored-island-cave-found-1-million-year-old-remnants-a-lost-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://science.slashdot.org/story/26/02/08/0616224/scientists-explored-island-cave-found-1-million-year-old-remnants-a-lost-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Reverse Engineering and Technical Exploration

* [Reverse-engineering the PROM for the SGI O2](https://mattst88.com/blog/2026/02/08/Reverse_Engineering_the_PROM_for_the_SGI_O2/) ([comments](https://lobste.rs/s/svjxze/reverse_engineering_prom_for_sgi_o2))

* [Exploiting signed bootloaders to circumvent UEFI Secure Boot (2019)](https://habr.com/en/articles/446238/) ([comments](https://news.ycombinator.com/item?id=46934579))

* [Code injections through Git commit messages](https://mas.to/@zekjur/116022397626943871) ([comments](https://lobste.rs/s/fgeokt/code_injections_through_git_commit))

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

* [2026-02-09, 12:35:19](https://news.ycombinator.com/item?id=46944555) - [Show HN: Browse Internet Infrastructure](https://www.wirewiki.com)
* [2026-02-09, 12:34:00](https://hardware.slashdot.org/story/26/02/09/0644255/new-raspberry-pi-4-model-splits-ram-across-dual-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Raspberry Pi 4 Model Splits RAM Across Dual Chips](https://hardware.slashdot.org/story/26/02/09/0644255/new-raspberry-pi-4-model-splits-ram-across-dual-chips?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-09, 12:24:00](https://soylentnews.org/article.pl?sid=26/02/08/0226226&amp;from=rss) - [Vibe Coding is Killing Open Source Software](https://soylentnews.org/article.pl?sid=26/02/08/0226226&amp;from=rss)
* [2026-02-09, 11:53:13](https://news.ycombinator.com/item?id=46944245) - [Matrix messaging gaining ground in government IT](https://www.theregister.com/2026/02/09/matrix_element_secure_chat/)
* [2026-02-09, 11:30:06](https://news.ycombinator.com/item?id=46944084) - [Show HN: Minimal NIST/OWASP-compliant auth implementation for Cloudflare Workers](https://github.com/vhscom/private-landing)
* [2026-02-09, 11:09:53](https://lobste.rs/s/zk4cmn/case_for_contextual_copyleft_licensing) - [The Case for Contextual Copyleft: Licensing Open Source Training Data and Generative AI](https://arxiv.org/pdf/2507.12713)
* [2026-02-09, 10:37:20](https://news.ycombinator.com/item?id=46943752) - [Offpunk 3.0](https://ploum.net/2026-02-09-offpunk3.html)
* [2026-02-09, 10:35:55](https://lobste.rs/s/manrbz/offpunk_3_0) - [Offpunk 3.0](https://ploum.net/2026-02-09-offpunk3.html)
* [2026-02-09, 10:12:06](https://lobste.rs/s/8959u3/algorithmically_finding_longest_line) - [Algorithmically Finding the Longest Line of Sight on Earth](https://lobste.rs/s/8959u3/algorithmically_finding_longest_line)
* [2026-02-09, 10:05:55](https://news.ycombinator.com/item?id=46943568) - [Show HN: Algorithmically Finding the Longest Line of Sight on Earth](https://alltheviews.world)
* [2026-02-09, 09:40:30](https://lobste.rs/s/7qnakp/claude_c_compiler_vs_gcc) - [Claude C Compiler vs GCC](https://harshanu.space/en/tech/ccc-vs-gcc/)
* [2026-02-09, 08:39:00](https://soylentnews.org/article.pl?sid=26/02/07/0352243&amp;from=rss) - [The AI productivity trap: Why your Best Engineers are Getting Slower](https://soylentnews.org/article.pl?sid=26/02/07/0352243&amp;from=rss)
* [2026-02-09, 08:34:00](https://science.slashdot.org/story/26/02/09/0536231/spacex-prioritizes-lunar-self-growing-city-over-mars-project-musk-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [SpaceX Prioritizes Lunar &apos;Self-Growing City&apos; Over Mars Project, Musk Says](https://science.slashdot.org/story/26/02/09/0536231/spacex-prioritizes-lunar-self-growing-city-over-mars-project-musk-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-09, 08:16:03](https://lobste.rs/s/ahdqrf/let_s_compile_quake_like_it_s_1997) - [Let&apos;s compile Quake like it&apos;s 1997](https://fabiensanglard.net/compile_like_1997/index.html)
* [2026-02-09, 06:53:58](https://lobste.rs/s/mhgciz/alice_caml) - [Alice the Caml](https://www.gridbugs.org/alice-the-caml/)
* [2026-02-09, 06:10:08](https://lobste.rs/s/ycshwd/you_are_here) - [You Are Here](https://brooker.co.za/blog/2026/02/07/you-are-here.html)
* [2026-02-09, 05:36:51](https://lobste.rs/s/2oray0/stop_generating_start_thinking) - [Stop generating, start thinking](https://localghost.dev/blog/stop-generating-start-thinking/)
* [2026-02-09, 05:34:00](https://science.slashdot.org/story/26/02/09/053208/national-football-league-launches-challenge-to-improve-facemasks-and-reduce-concussions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [National Football League Launches Challenge to Improve Facemasks and Reduce Concussions](https://science.slashdot.org/story/26/02/09/053208/national-football-league-launches-challenge-to-improve-facemasks-and-reduce-concussions?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-09, 05:28:38](https://lobste.rs/s/jnqnqe/nobody_knows_how_whole_system_works) - [Nobody knows how the whole system works](https://surfingcomplexity.blog/2026/02/08/nobody-knows-how-the-whole-system-works/)
* [2026-02-09, 04:21:24](https://lobste.rs/s/6lutpb/secretspec_0_7_declarative_secret) - [SecretSpec 0.7: Declarative Secret Generation - devenv](https://devenv.sh/blog/2026/02/09/secretspec-07-declarative-secret-generation/)
* [2026-02-09, 03:54:00](https://soylentnews.org/article.pl?sid=26/02/07/0347222&amp;from=rss) - [FBI Stymied by Apple&apos;s Lockdown Mode After Seizing Journalist&apos;s iPhone](https://soylentnews.org/article.pl?sid=26/02/07/0347222&amp;from=rss)
* [2026-02-09, 03:03:29](https://lobste.rs/s/dndxmu/little_bool_doom) - [The little bool of doom](https://blog.svgames.pl/article/the-little-bool-of-doom)
* [2026-02-09, 02:50:28](https://lobste.rs/s/m4lvr0/concerns_about_low_quality_prs_beeing) - [Concerns about low-quality PRs beeing merged into main](https://discourse.llvm.org/t/concerns-about-low-quality-prs-beeing-merged-into-main/89748)
* [2026-02-09, 02:34:00](https://tech.slashdot.org/story/26/02/09/0030214/carmakers-rush-to-remove-chinese-code-under-new-us-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Carmakers Rush To Remove Chinese Code Under New US Rules](https://tech.slashdot.org/story/26/02/09/0030214/carmakers-rush-to-remove-chinese-code-under-new-us-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-09, 01:51:31](https://lobste.rs/s/2omooc/original_vi_is_product_its_time_its_time) - [The original vi is a product of its time (and its time has passed)](https://utcc.utoronto.ca/~cks/space/blog/unix/ViIsAProductOfItsTime)
* [2026-02-09, 01:29:03](https://lobste.rs/s/svjxze/reverse_engineering_prom_for_sgi_o2) - [Reverse-engineering the PROM for the SGI O2](https://mattst88.com/blog/2026/02/08/Reverse_Engineering_the_PROM_for_the_SGI_O2/)
* [2026-02-08, 23:34:00](https://tech.slashdot.org/story/26/02/08/2321202/amazon-delivery-drone-crashes-into-texas-apartment-building?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Delivery Drone Crashes into Texas Apartment Building](https://tech.slashdot.org/story/26/02/08/2321202/amazon-delivery-drone-crashes-into-texas-apartment-building?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-08, 23:27:59](https://news.ycombinator.com/item?id=46939685) - [Every book recommended on the Odd Lots Discord](https://odd-lots-books.netlify.app/)
* [2026-02-08, 23:13:34](https://news.ycombinator.com/item?id=46939593) - [AI makes the easy part easier and the hard part harder](https://www.blundergoat.com/articles/ai-makes-the-easy-part-easier-and-the-hard-part-harder)
* [2026-02-08, 23:12:00](https://soylentnews.org/article.pl?sid=26/02/07/0338257&amp;from=rss) - [Russian Spy Satellites Have Intercepted EU Communications Satellites](https://soylentnews.org/article.pl?sid=26/02/07/0338257&amp;from=rss)
* [2026-02-08, 22:39:46](https://news.ycombinator.com/item?id=46939312) - [Show HN: A custom font that displays Cistercian numerals using ligatures](https://bobbiec.github.io/cistercian-font.html)
* [2026-02-08, 22:38:14](https://news.ycombinator.com/item?id=46939298) - [Toma (YC W24) Is Hiring Founding Engineers](https://www.ycombinator.com/companies/toma/jobs/oONUnCf-founding-engineer-ai-products)
* [2026-02-08, 22:25:25](https://news.ycombinator.com/item?id=46939187) - [Reverse Engineering the Prom for the SGI O2](https://mattst88.com/blog/2026/02/08/Reverse_Engineering_the_PROM_for_the_SGI_O2/)
* [2026-02-08, 22:13:34](https://lobste.rs/s/es2peg/minikanren_org) - [miniKanren.org](https://minikanren.org/)
* [2026-02-08, 22:06:00](https://slashdot.org/story/26/02/08/220228/do-super-bowl-ads-for-ai-signal-a-bubble-about-to-burst?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Do Super Bowl Ads For AI Signal a Bubble About to Burst?](https://slashdot.org/story/26/02/08/220228/do-super-bowl-ads-for-ai-signal-a-bubble-about-to-burst?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-08, 21:05:24](https://news.ycombinator.com/item?id=46938511) - [Art of Roads in Games](https://sandboxspirit.com/blog/art-of-roads-in-games/)
* [2026-02-08, 20:52:55](https://news.ycombinator.com/item?id=46938398) - [More Mac malware from Google search](https://eclecticlight.co/2026/01/30/more-malware-from-google-search/)
* [2026-02-08, 20:42:00](https://tech.slashdot.org/story/26/02/08/2040202/dave-farber-dies-at-age-91?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dave Farber Dies at Age 91](https://tech.slashdot.org/story/26/02/08/2040202/dave-farber-dies-at-age-91?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-08, 20:38:55](https://news.ycombinator.com/item?id=46938280) - [Apple XNU: Clutch Scheduler](https://github.com/apple-oss-distributions/xnu/blob/main/doc/scheduler/sched_clutch_edge.md)
* [2026-02-08, 20:34:51](https://news.ycombinator.com/item?id=46938241) - [A GTA modder has got the 1997 original working on modern PCs and Steam Deck](https://gtaforums.com/topic/986492-grand-theft-auto-ready2play-full-game-windows-version/)
* [2026-02-08, 20:12:27](https://lobste.rs/s/n4ddir/don_t_get_distracted_2017) - [Don&apos;t Get Distracted (2017)](https://calebhearth.com/dont-get-distracted)
* [2026-02-08, 19:35:55](https://news.ycombinator.com/item?id=46937696) - [Ask HN: What are you working on? (February 2026)](https://news.ycombinator.com/item?id=46937696)
* [2026-02-08, 19:35:00](https://it.slashdot.org/story/26/02/08/1933223/after-six-years-two-pentesters-arrested-in-iowa-receive-600000-settlement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [After Six Years, Two Pentesters Arrested in Iowa Receive $600,000 Settlement ](https://it.slashdot.org/story/26/02/08/1933223/after-six-years-two-pentesters-arrested-in-iowa-receive-600000-settlement?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-08, 19:11:43](https://lobste.rs/s/bnldoy/i_am_happier_writing_code_by_hand) - [I Am Happier Writing Code by Hand](https://abhinavomprakash.com/posts/i-am-happier-writing-code-by-hand/)
* [2026-02-08, 18:34:00](https://entertainment.slashdot.org/story/26/02/08/1827216/prankster-launches-super-bowl-party-for-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Prankster Launches Super Bowl Party For AI Agents](https://entertainment.slashdot.org/story/26/02/08/1827216/prankster-launches-super-bowl-party-for-ai-agents?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-08, 18:24:26](https://news.ycombinator.com/item?id=46937012) - [Roundcube Webmail: SVG feImage bypasses image blocking to track email opens](https://nullcathedral.com/posts/2026-02-08-roundcube-svg-feimage-remote-image-bypass/)
* [2026-02-08, 18:13:48](https://news.ycombinator.com/item?id=46936920) - [Experts Have World Models. LLMs Have Word Models](https://www.latent.space/p/adversarial-reasoning)
* [2026-02-08, 18:08:56](https://lobste.rs/s/gfsl25/ai_fatigue_is_real_nobody_talks_about_it) - [AI fatigue is real and nobody talks about it](https://siddhantkhare.com/writing/ai-fatigue-is-real)
* [2026-02-08, 18:07:42](https://lobste.rs/s/bic9qr/rebuilding_my_home_network_with_vlans) - [Rebuilding my home network with VLANs and 10Gbps](https://clintonboys.com/projects/homelab/03-network/)
* [2026-02-08, 18:02:50](https://news.ycombinator.com/item?id=46936828) - [The Little Bool of Doom (2025)](https://blog.svgames.pl/article/the-little-bool-of-doom)
* [2026-02-08, 17:34:00](https://hardware.slashdot.org/story/26/02/08/0233236/why-is-china-building-so-many-coal-plants-despite-its-solar-and-wind-boom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Why Is China Building So Many Coal Plants Despite Its Solar and Wind Boom?](https://hardware.slashdot.org/story/26/02/08/0233236/why-is-china-building-so-many-coal-plants-despite-its-solar-and-wind-boom?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-08, 17:24:00](https://soylentnews.org/article.pl?sid=26/02/07/0328238&amp;from=rss) - [Lessons from China’s Delicate Dance of Censorship and Expression](https://soylentnews.org/article.pl?sid=26/02/07/0328238&amp;from=rss)
* [2026-02-08, 17:19:38](https://lobste.rs/s/cqso4h/constraint_propagation_for_fun) - [Constraint propagation for fun](https://eli.li/constraint-propagation-for-fun)
* [2026-02-08, 17:15:52](https://lobste.rs/s/fgeokt/code_injections_through_git_commit) - [Code injections through Git commit messages](https://mas.to/@zekjur/116022397626943871)
* [2026-02-08, 17:08:30](https://news.ycombinator.com/item?id=46936237) - [Show HN: I created a Mars colony RPG based on Kim Stanley Robinson’s Mars books](https://underhillgame.com/)
* [2026-02-08, 16:34:00](https://science.slashdot.org/story/26/02/08/0616224/scientists-explored-island-cave-found-1-million-year-old-remnants-a-lost-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Scientists Explored Island Cave, Found 1 Million-Year-Old Remnants a Lost World](https://science.slashdot.org/story/26/02/08/0616224/scientists-explored-island-cave-found-1-million-year-old-remnants-a-lost-world?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-08, 15:34:00](https://it.slashdot.org/story/26/02/08/0649245/cyber-espionage-group-breached-systems-in-37-nations-security-researchers-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cyber-Espionage Group Breached Systems in 37 Nations, Security Researchers Say](https://it.slashdot.org/story/26/02/08/0649245/cyber-espionage-group-breached-systems-in-37-nations-security-researchers-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-08, 15:32:29](https://lobste.rs/s/h3jg8m/beta_release_predicated_recursive) - [Beta release: Predicated Recursive Descent for Rust](https://wareya.wordpress.com/2026/02/01/beta-release-predicated-recursive-descent-for-rust/)
* [2026-02-08, 14:40:52](https://news.ycombinator.com/item?id=46934579) - [Exploiting signed bootloaders to circumvent UEFI Secure Boot (2019)](https://habr.com/en/articles/446238/)
* [2026-02-08, 14:26:20](https://lobste.rs/s/k2kwv0/testing_can_be_fun_actually) - [Testing can be fun, actually](https://giacomocavalieri.me/writing/testing-can-be-fun-actually)
* [2026-02-08, 14:02:58](https://news.ycombinator.com/item?id=46934266) - [Running Your Own As: BGP on FreeBSD with FRR, GRE Tunnels, and Policy Routing](https://blog.hofstede.it/running-your-own-as-bgp-on-freebsd-with-frr-gre-tunnels-and-policy-routing/)
* [2026-02-08, 13:59:54](https://lobste.rs/s/oy8aqi/running_your_own_as_bgp_on_freebsd_with_frr) - [Running Your Own AS: BGP on FreeBSD with FRR, GRE Tunnels, and Policy Routing](https://blog.hofstede.it/running-your-own-as-bgp-on-freebsd-with-frr-gre-tunnels-and-policy-routing/)
* [2026-02-08, 13:40:56](https://news.ycombinator.com/item?id=46934107) - [GitHub Agentic Workflows](https://github.github.io/gh-aw/)
* [2026-02-08, 12:38:00](https://soylentnews.org/article.pl?sid=26/02/07/0323222&amp;from=rss) - [Linux From Scratch Abandoning SysVinit Support](https://soylentnews.org/article.pl?sid=26/02/07/0323222&amp;from=rss)
* [2026-02-08, 12:34:00](https://science.slashdot.org/story/26/02/08/0545244/brookhaven-lab-shuts-down-relativistic-heavy-ion-collider-rhic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Brookhaven Lab Shuts Down Relativistic Heavy Ion Collider (RHIC)](https://science.slashdot.org/story/26/02/08/0545244/brookhaven-lab-shuts-down-relativistic-heavy-ion-collider-rhic?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-08, 11:38:57](https://news.ycombinator.com/item?id=46933401) - [Dave Farber has died](https://lists.nanog.org/archives/list/nanog@lists.nanog.org/thread/TSNPJVFH4DKLINIKSMRIIVNHDG5XKJCM/)
* [2026-02-08, 08:49:59](https://lobste.rs/s/m5v4gb/willow_protocols_for_uncertain_future) - [Willow - Protocols for an uncertain future](https://fosdem.org/2026/schedule/event/CVGZAV-willow/)
* [2026-02-08, 08:34:00](https://science.slashdot.org/story/26/02/07/0410235/have-we-been-thinking-about-exercise-wrong-for-half-a-century?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Have We Been Thinking About Exercise Wrong for Half a Century?](https://science.slashdot.org/story/26/02/07/0410235/have-we-been-thinking-about-exercise-wrong-for-half-a-century?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-08, 08:26:36](https://news.ycombinator.com/item?id=46932444) - [Quartz crystals](https://www.pa3fwm.nl/technotes/tn13a.html)
* [2026-02-08, 07:57:00](https://soylentnews.org/article.pl?sid=26/02/07/009242&amp;from=rss) - [Self-Driving Cars In ‘Difficult Driving Situations’ Are Guided By Random Filipinos Overseas](https://soylentnews.org/article.pl?sid=26/02/07/009242&amp;from=rss)
* [2026-02-08, 04:35:00](https://hardware.slashdot.org/story/26/02/08/0430252/are-big-techs-nuclear-construction-deals-a-tipping-point-for-small-modular-reactors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Are Big Tech&apos;s Nuclear Construction Deals a Tipping Point for Small Modular Reactors?](https://hardware.slashdot.org/story/26/02/08/0430252/are-big-techs-nuclear-construction-deals-a-tipping-point-for-small-modular-reactors?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-02-08, 03:14:00](https://soylentnews.org/article.pl?sid=26/02/07/006217&amp;from=rss) - [A Century of Hair Samples Proves Leaded Gas Ban Worked](https://soylentnews.org/article.pl?sid=26/02/07/006217&amp;from=rss)
* [2026-02-08, 03:09:28](https://news.ycombinator.com/item?id=46930961) - [Vouch](https://github.com/mitchellh/vouch)
* [2026-02-07, 22:21:00](https://soylentnews.org/article.pl?sid=26/02/07/004218&amp;from=rss) - [France Might Seek Restrictions on VPN Use in Campaign to Keep Minors Off Social Media](https://soylentnews.org/article.pl?sid=26/02/07/004218&amp;from=rss)
* [2026-02-07, 17:49:00](https://soylentnews.org/article.pl?sid=26/02/06/2359259&amp;from=rss) - [Used EVs Currently Offer Car Buyers Lowest Lifetime Cost of Ownership](https://soylentnews.org/article.pl?sid=26/02/06/2359259&amp;from=rss)
* [2026-02-07, 12:59:00](https://soylentnews.org/article.pl?sid=26/02/06/0310232&amp;from=rss) - [The World Factbook Shut Down Unceremonously](https://soylentnews.org/article.pl?sid=26/02/06/0310232&amp;from=rss)
* [2026-02-07, 08:16:00](https://soylentnews.org/article.pl?sid=26/02/06/038224&amp;from=rss) - [US Spy Satellite Agency Declassifies High-Flying Cold War Listening Post](https://soylentnews.org/article.pl?sid=26/02/06/038224&amp;from=rss)
* [2026-02-07, 03:28:00](https://soylentnews.org/article.pl?sid=26/02/06/031244&amp;from=rss) - [AI Agents Now Have Their Own Reddit-Style Social Network, and It&apos;s Getting Weird Fast](https://soylentnews.org/article.pl?sid=26/02/06/031244&amp;from=rss)
* [2026-02-06, 22:45:00](https://soylentnews.org/article.pl?sid=26/02/06/0248203&amp;from=rss) - [The TV Industry Finally Concedes That the Future May Not be in 8K](https://soylentnews.org/article.pl?sid=26/02/06/0248203&amp;from=rss)
* [2026-02-06, 18:00:00](https://soylentnews.org/article.pl?sid=26/02/05/133201&amp;from=rss) - [GNU Hurd is \&quot;Almost There\&quot; With X86_64, SMP &amp; ~75% of Debian Packages Building](https://soylentnews.org/article.pl?sid=26/02/05/133201&amp;from=rss)
* [2026-02-06, 13:11:00](https://soylentnews.org/article.pl?sid=26/02/05/1252238&amp;from=rss) - [Oracle May Lay Off 30,000 and Sell Healthcare Division to Fund AI Buildout](https://soylentnews.org/article.pl?sid=26/02/05/1252238&amp;from=rss)
* [2026-02-06, 08:21:00](https://soylentnews.org/article.pl?sid=26/02/03/0322237&amp;from=rss) - [How to Bypass a Parallel Port Dongle](https://soylentnews.org/article.pl?sid=26/02/03/0322237&amp;from=rss)
* [2026-02-06, 03:59:00](https://soylentnews.org/article.pl?sid=26/02/03/0321201&amp;from=rss) - [Notepad++ update feature hijacked by Chinese state hackers for months](https://soylentnews.org/article.pl?sid=26/02/03/0321201&amp;from=rss)
* [2026-02-05, 23:17:00](https://soylentnews.org/article.pl?sid=26/02/03/0318252&amp;from=rss) - [Overly Involved Parents May Hold Their Kids Back Professionally](https://soylentnews.org/article.pl?sid=26/02/03/0318252&amp;from=rss)
* [2026-02-05, 18:29:00](https://soylentnews.org/article.pl?sid=26/02/03/0317238&amp;from=rss) - [The Brain’s Response To A Heart Attack May Worsen Recovery](https://soylentnews.org/article.pl?sid=26/02/03/0317238&amp;from=rss)
* [2026-02-05, 14:20:38](https://news.ycombinator.com/item?id=46899900) - [Roman industrial hub discovered on banks of River Wear](https://www.durham.ac.uk/news-events/latest-news/2026/01/roman-industrial-hub-discovered-on-banks-of-river-wear-/)
* [2026-02-05, 13:43:00](https://soylentnews.org/article.pl?sid=26/02/02/1520246&amp;from=rss) - [Amutable: Systemd Creator Lennart Poettering Launches New Linux Security Venture](https://soylentnews.org/article.pl?sid=26/02/02/1520246&amp;from=rss)
* [2026-02-05, 11:46:00](https://soylentnews.org/article.pl?sid=26/02/02/150245&amp;from=rss) - [RIP Didier Spaier](https://soylentnews.org/article.pl?sid=26/02/02/150245&amp;from=rss)
* [2026-02-05, 09:02:00](https://soylentnews.org/article.pl?sid=26/02/02/1453203&amp;from=rss) - [Exploring How Gut Bacteria Alter the Flavor of Black Ivory Coffee Beans](https://soylentnews.org/article.pl?sid=26/02/02/1453203&amp;from=rss)
* [2026-02-05, 04:15:00](https://soylentnews.org/article.pl?sid=26/02/02/1450223&amp;from=rss) - [Autonomous Cars Vulnerable to Prompt Injection](https://soylentnews.org/article.pl?sid=26/02/02/1450223&amp;from=rss)
