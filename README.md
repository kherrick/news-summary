# [News Summary](https://kherrick.github.io/news-summary/)

## AI and Technology Innovations

* [Mozilla Unveils Plans for New 'AI Window' Browsing Mode in Firefox, Opens Signups](https://soylentnews.org/article.pl?sid=25/11/18/018202&amp;from=rss) - Mozilla introduces a new experimental AI-integrated browsing feature.

* [Klarna Says AI Drive Has Helped Halve Staff Numbers and Boost Pay](https://slashdot.org/story/25/11/18/1951214/klarna-says-ai-drive-has-helped-halve-staff-numbers-and-boost-pay) - Klarna demonstrates the impact of AI on workforce optimization and increased pay.

* [Oracle is Already Underwater On Its 'Astonishing' $300B OpenAI Deal](https://developers.slashdot.org/story/25/11/18/1919245/oracle-is-already-underwater-on-its-astonishing-300b-openai-deal) - Oracle’s costly involvement with OpenAI sparks financial concern.

* [Fund Managers Warn AI Investment Boom Has Gone Too Far](https://tech.slashdot.org/story/25/11/18/1723237/fund-managers-warn-ai-investment-boom-has-gone-too-far) - Concerns about overinvestment in AI projects and technologies arise from finance experts.

## Cybersecurity and Digital Privacy

* [Cloudflare outage on November 18, 2025](https://blog.cloudflare.com/18-november-2025-outage/) - A critical outage at Cloudflare and its implications.

* [IRS Accessed Massive Database of Americans Flights Without a Warrant](https://yro.slashdot.org/story/25/11/18/1850240/irs-accessed-massive-database-of-americans-flights-without-a-warrant) - Reports reveal warrantless access to personal flight data.

* [ACLU and EFF Sue a City Blanketed With Flock Surveillance Cameras](https://yro.slashdot.org/story/25/11/18/2038256/aclu-and-eff-sue-a-city-blanketed-with-flock-surveillance-cameras) - Civil rights organizations take action against pervasive surveillance.

## Energy and Environmental Developments

* [US Backs Three Mile Island Nuclear Restart With $1 Billion Loan To Constellation](https://hardware.slashdot.org/story/25/11/19/0026252/us-backs-three-mile-island-nuclear-restart-with-1-billion-loan-to-constellation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The US government aims to revive nuclear power with a significant investment.

* [Australians to Get Three Hours of Free Electricity Every Day Under Solar Scheme](https://soylentnews.org/article.pl?sid=25/11/15/0349259&amp;from=rss) - A solar initiative in Australia offers daily free electricity to residents.

* [Nvidia’s Jensen Huang: China will Surpass U.S. in AI Race Through ENERGY](https://soylentnews.org/article.pl?sid=25/11/17/0240210&amp;from=rss) - Nvidia’s CEO comments on energy's critical role in AI dominance.

## Tech Industry Dynamics and Legal Challenges

* [Red Hat Losing Another Prominent Linux Kernel Engineer](https://linux.slashdot.org/story/25/11/18/2229244/red-hat-losing-another-prominent-linux-kernel-engineer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Red Hat continues to see attrition among key developers.

* [Federal Judge Rules Meta's Instagram and WhatsApp Purchases Did Not Stifle Competition](https://tech.slashdot.org/story/25/11/18/184258/federal-judge-rules-metas-instagram-and-whatsapp-purchases-did-not-stifle-competition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A legal victory for Meta in its significant tech acquisitions.

* [Mexico Partially Lifts Longstanding Website Ban On Tor Network](https://tech.slashdot.org/story/25/11/19/000255/mexico-partially-lifts-longstanding-website-ban-on-tor-network?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A breakthrough for internet privacy advocates in Mexico.

## Remarkable Scientific and Cultural Entries

* [Raccoons Are Showing Early Signs of Domestication](https://soylentnews.org/article.pl?sid=25/11/18/014241&amp;from=rss) - A curious exploration into the behavior and domestication of raccoons.

* [A Spine-Tingling Discovery: This Dinosaur Had Spiked Body Armor](https://soylentnews.org/article.pl?sid=25/11/16/1311207&amp;from=rss) - Paleontologists uncover unique features of a prehistoric creature.

* [Lego: The Final Frontier. Star Trek's First Set Beams Down in 3,600 Pieces](https://soylentnews.org/article.pl?sid=25/11/13/2136225&amp;from=rss) - The launch of an extensive Lego Star Trek set excites fans.

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

* [2025-11-19, 05:16:00](https://soylentnews.org/article.pl?sid=25/11/18/018202&amp;from=rss) - [Mozilla Unveils Plans for New &apos;AI Window&apos; Browsing Mode in Firefox, Opens Signups](https://soylentnews.org/article.pl?sid=25/11/18/018202&amp;from=rss)
* [2025-11-19, 03:49:59](https://lobste.rs/s/wj0k0e/improving_nat_traversal_part_2) - [Improving NAT traversal, part 2: challenges in cloud environments](https://tailscale.com/blog/nat-traversal-improvements-pt-2-cloud-environments)
* [2025-11-19, 03:30:00](https://hardware.slashdot.org/story/25/11/19/0026252/us-backs-three-mile-island-nuclear-restart-with-1-billion-loan-to-constellation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Backs Three Mile Island Nuclear Restart With $1 Billion Loan To Constellation](https://hardware.slashdot.org/story/25/11/19/0026252/us-backs-three-mile-island-nuclear-restart-with-1-billion-loan-to-constellation?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 02:54:20](https://lobste.rs/s/nac5wa/cloudflare_outage_on_november_18_2025) - [Cloudflare outage on November 18, 2025](https://blog.cloudflare.com/18-november-2025-outage/)
* [2025-11-19, 02:20:00](https://yro.slashdot.org/story/25/11/19/0018216/chinese-spies-are-trying-to-reach-uk-lawmakers-via-linkedin-mi5-warns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Chinese Spies Are Trying To Reach UK Lawmakers Via LinkedIn, MI5 Warns](https://yro.slashdot.org/story/25/11/19/0018216/chinese-spies-are-trying-to-reach-uk-lawmakers-via-linkedin-mi5-warns?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 02:02:10](https://news.ycombinator.com/item?id=45975006) - [DOE gives Microsoft partner $1B loan to restart Three Mile Island reactor](https://techcrunch.com/2025/11/18/trump-doe-gives-microsoft-partner-1b-loan-to-restart-three-mile-island-reactor/)
* [2025-11-19, 01:41:33](https://news.ycombinator.com/item?id=45974869) - [I just want working RCS messaging](https://wt.gd/i-just-want-my-rcs-messaging-to-work)
* [2025-11-19, 01:40:00](https://tech.slashdot.org/story/25/11/19/000255/mexico-partially-lifts-longstanding-website-ban-on-tor-network?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mexico Partially Lifts Longstanding Website Ban On Tor Network](https://tech.slashdot.org/story/25/11/19/000255/mexico-partially-lifts-longstanding-website-ban-on-tor-network?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 01:00:00](https://it.slashdot.org/story/25/11/18/2341220/gen-z-officially-worse-at-passwords-than-80-year-olds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Gen Z Officially Worse At Passwords Than 80-Year-Olds](https://it.slashdot.org/story/25/11/18/2341220/gen-z-officially-worse-at-passwords-than-80-year-olds?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 00:31:00](https://soylentnews.org/article.pl?sid=25/11/18/014241&amp;from=rss) - [Raccoons Are Showing Early Signs of Domestication](https://soylentnews.org/article.pl?sid=25/11/18/014241&amp;from=rss)
* [2025-11-19, 00:20:00](https://slashdot.org/story/25/11/18/2242231/cloud-native-computing-is-poised-to-explode?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Cloud-Native Computing Is Poised To Explode](https://slashdot.org/story/25/11/18/2242231/cloud-native-computing-is-poised-to-explode?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-19, 00:05:28](https://news.ycombinator.com/item?id=45974012) - [I made a down detector for down detector](https://downdetectorsdowndetector.com)
* [2025-11-18, 23:59:14](https://news.ycombinator.com/item?id=45973955) - [Lucent 7 R/E 5ESS Telephone Switch Rescue (2024)](http://kev009.com/wp/2024/07/Lucent-5ESS-Rescue/)
* [2025-11-18, 23:40:00](https://linux.slashdot.org/story/25/11/18/2229244/red-hat-losing-another-prominent-linux-kernel-engineer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Red Hat Losing Another Prominent Linux Kernel Engineer](https://linux.slashdot.org/story/25/11/18/2229244/red-hat-losing-another-prominent-linux-kernel-engineer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-18, 23:31:22](https://news.ycombinator.com/item?id=45973709) - [Cloudflare outage on November 18, 2025 post mortem](https://blog.cloudflare.com/18-november-2025-outage/)
* [2025-11-18, 23:13:35](https://news.ycombinator.com/item?id=45973573) - [Rebecca Heineman – from homelessness to porting Doom (2022)](https://corecursive.com/doomed-to-fail-with-burger-becky/)
* [2025-11-18, 23:07:23](https://lobste.rs/s/yit3fo/actor_model_multi_core_scheduler_for) - [An actor-model multi-core scheduler for OCaml 5](https://github.com/riot-ml/riot)
* [2025-11-18, 23:00:00](https://tech.slashdot.org/story/25/11/18/2224225/blender-50-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Blender 5.0 Released](https://tech.slashdot.org/story/25/11/18/2224225/blender-50-released?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-18, 22:54:48](https://lobste.rs/s/hhuu5z/experiment_making_typescript_immutable) - [Experiment: making TypeScript immutable-by-default](https://evanhahn.com/typescript-immutability-experiment/)
* [2025-11-18, 22:41:52](https://lobste.rs/s/0r5kmb/month_chat_oriented_programming) - [A Month of Chat-Oriented Programming](https://checkeagle.com/checklists/njr/a-month-of-chat-oriented-programming/)
* [2025-11-18, 22:34:33](https://lobste.rs/s/pmsbte/self_hosting_dns_for_no_fun_little_profit) - [Self-hosting DNS for no fun, but a little profit](https://linderud.dev/blog/self-hosting-dns-for-no-fun-but-a-little-profit/)
* [2025-11-18, 22:20:00](https://hardware.slashdot.org/story/25/11/18/2220205/report-claims-that-apple-has-yet-again-put-the-mac-pro-on-the-back-burner?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Report Claims That Apple Has Yet Again Put the Mac Pro &apos;On the Back Burner&apos;](https://hardware.slashdot.org/story/25/11/18/2220205/report-claims-that-apple-has-yet-again-put-the-mac-pro-on-the-back-burner?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-18, 21:39:18](https://news.ycombinator.com/item?id=45972519) - [Blender 5.0](https://www.blender.org/download/releases/5-0/)
* [2025-11-18, 21:29:37](https://news.ycombinator.com/item?id=45972390) - [Bild AI (YC W25) is hiring – Make housing affordable](https://www.ycombinator.com/companies/bild-ai/jobs/m2ilR5L-founding-engineer-applied-ai)
* [2025-11-18, 21:25:00](https://yro.slashdot.org/story/25/11/18/2038256/aclu-and-eff-sue-a-city-blanketed-with-flock-surveillance-cameras?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ACLU and EFF Sue a City Blanketed With Flock Surveillance Cameras](https://yro.slashdot.org/story/25/11/18/2038256/aclu-and-eff-sue-a-city-blanketed-with-flock-surveillance-cameras?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-18, 21:14:41](https://lobste.rs/s/nnhfdb/better_dom_morphing_with_morphlex) - [Better DOM Morphing with Morphlex](https://joel.drapper.me/p/morphlex/)
* [2025-11-18, 20:50:00](https://slashdot.org/story/25/11/18/1951214/klarna-says-ai-drive-has-helped-halve-staff-numbers-and-boost-pay?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Klarna Says AI Drive Has Helped Halve Staff Numbers and Boost Pay](https://slashdot.org/story/25/11/18/1951214/klarna-says-ai-drive-has-helped-halve-staff-numbers-and-boost-pay?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-18, 20:40:46](https://news.ycombinator.com/item?id=45971726) - [GitHub: Git operation failures](https://www.githubstatus.com/incidents/5q7nmlxz30sk)
* [2025-11-18, 20:10:00](https://developers.slashdot.org/story/25/11/18/1919245/oracle-is-already-underwater-on-its-astonishing-300b-openai-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Oracle is Already Underwater On Its &apos;Astonishing&apos; $300B OpenAI Deal](https://developers.slashdot.org/story/25/11/18/1919245/oracle-is-already-underwater-on-its-astonishing-300b-openai-deal?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-18, 19:50:34](https://lobste.rs/s/1rluks/surprise_with_how_handles_its_program) - [A surprise with how &apos;#!&apos; handles its program argument in practice](https://utcc.utoronto.ca/~cks/space/blog/unix/ShebangRelativePathSurprise?showcomments)
* [2025-11-18, 19:47:00](https://soylentnews.org/article.pl?sid=25/11/17/119215&amp;from=rss) - [DHS Offers “Disturbing New Excuses” to Seize Kids’ Biometric Data, Expert Says](https://soylentnews.org/article.pl?sid=25/11/17/119215&amp;from=rss)
* [2025-11-18, 19:31:00](https://it.slashdot.org/story/25/11/18/1932202/talking-to-windows-copilot-ai-makes-a-computer-feel-incompetent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Talking To Windows&apos; Copilot AI Makes a Computer Feel Incompetent&apos;](https://it.slashdot.org/story/25/11/18/1932202/talking-to-windows-copilot-ai-makes-a-computer-feel-incompetent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-18, 18:54:54](https://news.ycombinator.com/item?id=45970391) - [OrthoRoute – GPU-accelerated autorouting for KiCad](https://bbenchoff.github.io/pages/OrthoRoute.html)
* [2025-11-18, 18:54:19](https://lobste.rs/s/sjkuyp/pebble_rebble_path_forward) - [Pebble, Rebble, and a Path Forward](https://ericmigi.com/blog/pebble-rebble-and-a-path-forward)
* [2025-11-18, 18:50:00](https://news.ycombinator.com/item?id=45970338) - [Show HN: RowboatX – open-source Claude Code for everyday automations](https://github.com/rowboatlabs/rowboat)
* [2025-11-18, 18:50:00](https://yro.slashdot.org/story/25/11/18/1850240/irs-accessed-massive-database-of-americans-flights-without-a-warrant?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [IRS Accessed Massive Database of Americans Flights Without a Warrant](https://yro.slashdot.org/story/25/11/18/1850240/irs-accessed-massive-database-of-americans-flights-without-a-warrant?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-18, 18:13:30](https://news.ycombinator.com/item?id=45969909) - [I am stepping down as the CEO of Mastodon](https://blog.joinmastodon.org/2025/11/my-next-chapter-with-mastodon/)
* [2025-11-18, 18:04:00](https://tech.slashdot.org/story/25/11/18/184258/federal-judge-rules-metas-instagram-and-whatsapp-purchases-did-not-stifle-competition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Federal Judge Rules Meta&apos;s Instagram and WhatsApp Purchases Did Not Stifle Competition](https://tech.slashdot.org/story/25/11/18/184258/federal-judge-rules-metas-instagram-and-whatsapp-purchases-did-not-stifle-competition?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-18, 17:38:04](https://lobste.rs/s/gwchzg/whatsapp_census) - [WhatsApp Census](https://github.com/sbaresearch/whatsapp-census/blob/main/Hey_there_You_are_using_WhatsApp.pdf)
* [2025-11-18, 17:24:27](https://news.ycombinator.com/item?id=45969250) - [Pebble, Rebble, and a path forward](https://ericmigi.com/blog/pebble-rebble-and-a-path-forward/)
* [2025-11-18, 17:24:00](https://tech.slashdot.org/story/25/11/18/1723237/fund-managers-warn-ai-investment-boom-has-gone-too-far?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fund Managers Warn AI Investment Boom Has Gone Too Far](https://tech.slashdot.org/story/25/11/18/1723237/fund-managers-warn-ai-investment-boom-has-gone-too-far?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-11-18, 16:38:15](https://lobste.rs/s/urbviy/inside_rust_s_std_parking_lot_mutexes_who) - [Inside Rust&apos;s std and parking_lot mutexes - who wins?](https://blog.cuongle.dev/p/inside-rusts-std-and-parking-lot-mutexes-who-win)
* [2025-11-18, 16:33:39](https://lobste.rs/s/psrp8z/google_summer_code_2025_results) - [Google Summer of Code 2025 results](https://blog.rust-lang.org/2025/11/18/gsoc-2025-results/)
* [2025-11-18, 16:26:28](https://news.ycombinator.com/item?id=45968362) - [Solving a million-step LLM task with zero errors](https://arxiv.org/abs/2511.09030)
* [2025-11-18, 16:10:34](https://news.ycombinator.com/item?id=45968121) - [The code and open-source tools I used to produce a science fiction anthology](https://compellingsciencefiction.com/posts/the-code-and-open-source-tools-i-used-to-produce-a-science-fiction-anthology.html)
* [2025-11-18, 16:01:03](https://lobste.rs/s/ei2zx3/ruby_4_0_0_preview2_released) - [Ruby 4.0.0 preview2 Released](https://www.ruby-lang.org/en/news/2025/11/17/ruby-4-0-0-preview2-released/)
* [2025-11-18, 15:47:38](https://news.ycombinator.com/item?id=45967814) - [Google Antigravity](https://antigravity.google/)
* [2025-11-18, 15:09:38](https://news.ycombinator.com/item?id=45967211) - [Gemini 3](https://blog.google/products/gemini/gemini-3/)
* [2025-11-18, 15:04:00](https://soylentnews.org/article.pl?sid=25/11/17/0246249&amp;from=rss) - [The Data Center Resistance Has Arrived](https://soylentnews.org/article.pl?sid=25/11/17/0246249&amp;from=rss)
* [2025-11-18, 15:01:46](https://lobste.rs/s/lqsrgo/announcing_lix_2_94_acai_na_tigela) - [Announcing Lix 2.94 “Açaí na tigela”](https://lix.systems/blog/2025-11-18-lix-2.94-release/)
* [2025-11-18, 15:00:36](https://news.ycombinator.com/item?id=45967079) - [Show HN: Browser-based interactive 3D Three-Body problem simulator](https://trisolarchaos.com/?pr=O_8(0.6)&amp;n=3&amp;s=5.0&amp;so=0.00&amp;im=rk4&amp;dt=1.00e-4&amp;rt=1.0e-6&amp;at=1.0e-8&amp;bs=0.15&amp;sf=0&amp;sv=0&amp;cm=free&amp;kt=1&amp;st=1&amp;tl=1500&amp;cp=2.5208,1.5125,2.5208&amp;ct=0.0000,0.0000,0.1670)
* [2025-11-18, 14:23:18](https://news.ycombinator.com/item?id=45966435) - [Short Little Difficult Books](https://countercraft.substack.com/p/short-little-difficult-books)
* [2025-11-18, 14:19:46](https://lobste.rs/s/wtnzei/rebecca_heineman_from_homelessness) - [Rebecca Heineman - from homelessness to porting Doom](https://corecursive.com/doomed-to-fail-with-burger-becky/)
* [2025-11-18, 14:11:17](https://news.ycombinator.com/item?id=45966251) - [Nearly all UK drivers say headlights are too bright](https://www.bbc.com/news/articles/c1j8ewy1p86o)
* [2025-11-18, 12:56:39](https://lobste.rs/s/bb3wu5/do_not_put_your_site_behind_cloudflare_if) - [Do Not Put Your Site Behind Cloudflare if You Don&apos;t Need To](https://huijzer.xyz/posts/123/do-not-put-your-site-behind-cloudflare-if-you-dont)
* [2025-11-18, 12:40:48](https://lobste.rs/s/phd5uy/my_first_fifteen_compilers) - [My First Fifteen Compilers](https://blog.sigplan.org/2019/07/09/my-first-fifteen-compilers/)
* [2025-11-18, 12:36:54](https://news.ycombinator.com/item?id=45964835) - [GoSign Desktop RCE flaws affecting users in Italy](https://www.ush.it/2025/11/14/multiple-vulnerabilities-gosign-desktop-remote-code-execution/)
* [2025-11-18, 11:35:10](https://news.ycombinator.com/item?id=45963780) - [Cloudflare Global Network experiencing issues](https://www.cloudflarestatus.com/incidents/8gmgl950y3h7)
* [2025-11-18, 11:12:20](https://news.ycombinator.com/item?id=45963670) - [Gemini 3 Pro Model Card [pdf]](https://storage.googleapis.com/deepmind-media/Model-Cards/Gemini-3-Pro-Model-Card.pdf)
* [2025-11-18, 10:58:34](https://lobste.rs/s/i8ez2g/small_vanilla_kubernetes_install_on) - [A &apos;small&apos; vanilla Kubernetes install on NixOS](https://stephank.nl/p/2025-11-17-a-small-vanilla-kubernetes-install-on-nixos.html)
* [2025-11-18, 10:23:00](https://soylentnews.org/article.pl?sid=25/11/17/0243214&amp;from=rss) - [Google Settlement With Epic Caps Play Store Fees, Boosts Other Android App Stores](https://soylentnews.org/article.pl?sid=25/11/17/0243214&amp;from=rss)
* [2025-11-18, 09:22:50](https://lobste.rs/s/nnor3p/6_years_after_too_much_crypto) - [6 years after too much crypto](https://bfswa.substack.com/p/6-years-after-too-much-crypto)
* [2025-11-18, 09:16:15](https://lobste.rs/s/t37jcs/my_next_chapter_with_mastodon) - [My next chapter with Mastodon](https://blog.joinmastodon.org/2025/11/my-next-chapter-with-mastodon/)
* [2025-11-18, 06:06:52](https://news.ycombinator.com/item?id=45961886) - [Google boss says AI investment boom has &apos;elements of irrationality&apos;](https://www.bbc.com/news/articles/cwy7vrd8k4eo)
* [2025-11-18, 05:37:00](https://soylentnews.org/article.pl?sid=25/11/17/0240210&amp;from=rss) - [Nvidia’s Jensen Huang: China will Surpass U.S. in AI Race Through ENERGY](https://soylentnews.org/article.pl?sid=25/11/17/0240210&amp;from=rss)
* [2025-11-18, 00:53:00](https://soylentnews.org/article.pl?sid=25/11/16/1340211&amp;from=rss) - [Starshield Satellite Constellation Emitting Unusual Radio Signals](https://soylentnews.org/article.pl?sid=25/11/16/1340211&amp;from=rss)
* [2025-11-17, 22:29:05](https://lobste.rs/s/uipd87/450_kb_static_site_generator_based_on) - [A 450 KB static site generator based on Markdown and Lua](https://log.schemescape.com/posts/static-site-generators/smallest-static-site-generator.html)
* [2025-11-17, 21:42:24](https://lobste.rs/s/wqrzcy/chuck_moore_retires_from_colorforth) - [Chuck Moore retires from colorforth after latest Windows breaks rendering](https://www.youtube.com/watch?v=MvkGBWXb2oQ)
* [2025-11-17, 20:22:43](https://lobste.rs/s/plohjq/garbage_collection_is_useful) - [Garbage collection is useful](https://dubroy.com/blog/garbage-collection-is-useful/)
* [2025-11-17, 20:14:00](https://soylentnews.org/article.pl?sid=25/11/16/1329214&amp;from=rss) - [Microsoft: the Company Doesn&apos;t Have Enough Electricity to Install All the AI GPUs in its Inventory](https://soylentnews.org/article.pl?sid=25/11/16/1329214&amp;from=rss)
* [2025-11-17, 18:32:55](https://lobste.rs/s/lijpxq/towards_interplanetary_quic_traffic) - [Towards interplanetary QUIC traffic](https://ochagavia.nl/blog/towards-interplanetary-quic-traffic/)
* [2025-11-17, 16:26:28](https://lobste.rs/s/q50ecd/strace_macos_clone_strace_command_for) - [strace-macos: A clone of the strace command for macOS](https://github.com/Mic92/strace-macos)
* [2025-11-17, 15:33:00](https://soylentnews.org/article.pl?sid=25/11/16/1317229&amp;from=rss) - [Lawmakers Want to Ban VPNs—And They Have No Idea What They&apos;re Doing](https://soylentnews.org/article.pl?sid=25/11/16/1317229&amp;from=rss)
* [2025-11-17, 10:44:00](https://soylentnews.org/article.pl?sid=25/11/16/1316249&amp;from=rss) - [NVIDIA 580.105.08 Linux Graphics Driver Released With a New Environment Variable](https://soylentnews.org/article.pl?sid=25/11/16/1316249&amp;from=rss)
* [2025-11-17, 06:01:00](https://soylentnews.org/article.pl?sid=25/11/16/1311207&amp;from=rss) - [A Spine-Tingling Discovery: This Dinosaur Had Spiked Body Armor](https://soylentnews.org/article.pl?sid=25/11/16/1311207&amp;from=rss)
* [2025-11-17, 01:14:00](https://soylentnews.org/article.pl?sid=25/11/15/0741250&amp;from=rss) - [Devuan Version 6.0 \&quot;Excalibur\&quot; is Available Now](https://soylentnews.org/article.pl?sid=25/11/15/0741250&amp;from=rss)
* [2025-11-16, 20:28:00](https://soylentnews.org/article.pl?sid=25/11/15/0726208&amp;from=rss) - [Youtube Ads - Legal Advice Required](https://soylentnews.org/article.pl?sid=25/11/15/0726208&amp;from=rss)
* [2025-11-16, 15:45:00](https://soylentnews.org/article.pl?sid=25/11/15/0419235&amp;from=rss) - [This Rare ‘Mad Honey’ is Only Found in Two Places in the World](https://soylentnews.org/article.pl?sid=25/11/15/0419235&amp;from=rss)
* [2025-11-16, 10:58:00](https://soylentnews.org/article.pl?sid=25/11/15/045217&amp;from=rss) - [AI Resistance: Who Says No to AI and Why?](https://soylentnews.org/article.pl?sid=25/11/15/045217&amp;from=rss)
* [2025-11-16, 06:17:00](https://soylentnews.org/article.pl?sid=25/11/15/0349259&amp;from=rss) - [Australians to Get Three Hours of Free Electricity Every Day Under Solar Scheme](https://soylentnews.org/article.pl?sid=25/11/15/0349259&amp;from=rss)
* [2025-11-16, 01:36:00](https://soylentnews.org/article.pl?sid=25/11/15/0341210&amp;from=rss) - [FreeBSD: Reproducible Rootless Builds and Moving From Windows to This Linux Chaos Alternative](https://soylentnews.org/article.pl?sid=25/11/15/0341210&amp;from=rss)
* [2025-11-15, 20:51:00](https://soylentnews.org/article.pl?sid=25/11/13/2136225&amp;from=rss) - [Lego: The Final Frontier. Star Trek&apos;s First Set Beams Down in 3,600 Pieces](https://soylentnews.org/article.pl?sid=25/11/13/2136225&amp;from=rss)
* [2025-11-15, 16:08:00](https://soylentnews.org/article.pl?sid=25/11/13/2125207&amp;from=rss) - [New Project Brings Strong Linux Compatibility to More Classic Windows Games](https://soylentnews.org/article.pl?sid=25/11/13/2125207&amp;from=rss)
* [2025-11-15, 11:23:00](https://soylentnews.org/article.pl?sid=25/11/13/2130222&amp;from=rss) - [Gary McKinnon: He Was Looking for Aliens - and Became the No. 1 Enemy of the State](https://soylentnews.org/article.pl?sid=25/11/13/2130222&amp;from=rss)
* [2025-11-15, 06:36:00](https://soylentnews.org/article.pl?sid=25/11/13/0410238&amp;from=rss) - [Brussels Knifes Privacy to Feed the AI Boom](https://soylentnews.org/article.pl?sid=25/11/13/0410238&amp;from=rss)
* [2025-11-15, 01:54:00](https://soylentnews.org/article.pl?sid=25/11/13/0359225&amp;from=rss) - [How to Declutter, Quiet Down, and Take the AI Out of Windows 11 25H2](https://soylentnews.org/article.pl?sid=25/11/13/0359225&amp;from=rss)
