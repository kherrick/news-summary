# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Engineering Innovations

* [Wombat’s Book of Nix](https://mhwombat.codeberg.page/nix-book/) explores Nix, an advanced functional package management tool. [Comments](https://lobste.rs/s/cpersg/wombat_s_book_nix)

* [Gemini 3.0 Pro – early tests](https://twitter.com/chetaslua/status/1973694615518880236) provide insights into its capabilities within the community. [Comments](https://news.ycombinator.com/item?id=45453448)

* [Signal Protocol and Post-Quantum Ratchets](https://signal.org/blog/spqr/) examines advancements in secure communication technologies. [Comments](https://news.ycombinator.com/item?id=45451527)

* [Installing NixOS on Raspberry Pi 4](https://mtlynch.io/nixos-pi4/) covers practical steps to bring NixOS onto ARM platforms. [Comments](https://lobste.rs/s/bzx3ue/installing_nixos_on_raspberry_pi_4)

## Cybersecurity Incidents

* [Red Hat Investigating Breach Impacting as Many as 28,000 Customers](https://linux.slashdot.org/story/25/10/02/1538229/red-hat-investigating-breach-impacting-as-many-as-28000-customers-including-the-navy-and-congress?utm_source=rss1.0mainlinkanon&utm_medium=feed) highlights the scale and stakeholders involved in this breach. [Comments](https://news.ycombinator.com/item?id=45448772)

* [Intel and AMD Trusted Enclaves Fall To Physical Attacks](https://it.slashdot.org/story/25/10/01/229239/intel-and-amd-trusted-enclaves-a-foundation-for-network-security-fall-to-physical-attacks?utm_source=rss1.0mainlinkanon&utm_medium=feed) assesses vulnerabilities in essential security frameworks. [Comments](https://news.ycombinator.com/item?id=45448772)

## AI and Future of Work

* [Linkedin CEO Says Fancy Degrees Will Matter Less in the Future of Work](https://slashdot.org/story/25/10/02/179232/linkedin-ceo-says-fancy-degrees-will-matter-less-in-the-future-of-work?utm_source=rss1.0mainlinkanon&utm_medium=feed). [Comments](https://slashdot.org/story/25/10/02/179232/linkedin-ceo-says-fancy-degrees-will-matter-less-in-the-future-of-work?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [OpenAI's H1 2025: $4.3B in income, $13.5B in loss](https://www.techinasia.com/news/openais-revenue-rises-16-to-4-3b-in-h1-2025) evaluates its financial challenges. [Comments](https://news.ycombinator.com/item?id=45453586)

* [EU Funds Flowing into Spyware Companies and Calls for Answers](https://www.theregister.com/2025/10/02/eu_spyware_funding/) highlights controversies over public spending in tech. [Comments](https://news.ycombinator.com/item?id=45448825)

## Environmental and Health Issues

* [Earth Is Getting Darker, Literally, and Scientists Are Trying To Find Out Why](https://news.slashdot.org/story/25/10/02/1659218/earth-is-getting-darker-literally-and-scientists-are-trying-to-find-out-why?utm_source=rss1.0mainlinkanon&utm_medium=feed). [Comments](https://news.slashdot.org/story/25/10/02/1659218/earth-is-getting-darker-literally-and-scientists-are-trying-to-find-out-why?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Japan Saw Record Number Treated For Heatstroke in Hottest-Ever Summer](https://news.slashdot.org/story/25/10/02/0811215/japan-saw-record-number-treated-for-heatstroke-in-hottest-ever-summer?utm_source=rss1.0mainlinkanon&utm_medium=feed). [Comments](https://news.slashdot.org/story/25/10/02/0811215/japan-saw-record-number-treated-for-heatstroke-in-hottest-ever-summer?utm_source=rss1.0mainlinkanon&utm_medium=feed)

* [Solar Leads EU Electricity Generation As Renewables Hit 54%](https://hardware.slashdot.org/story/25/10/01/2215232/solar-leads-eu-electricity-generation-as-renewables-hit-54?utm_source=rss1.0mainlinkanon&utm_medium=feed) signifies the progress in renewable energy adoption. [Comments](https://hardware.slashdot.org/story/25/10/01/2215232/solar-leads-eu-electricity-generation-as-renewables-hit-54?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Unique Projects and Concepts

* [I turned the Lego Game Boy into a working Game Boy](https://blog.nataliethenerd.com/i-turned-the-lego-game-boy-into-a-working-game-boy-part-1/) showcases innovation and creativity. [Comments](https://lobste.rs/s/p79vuw/i_turned_lego_game_boy_into_working_game)

* [IP Over Lasers](https://www.mikekohn.net/micro/ip_over_lasers.php) explores unconventional yet fascinating communication methods. [Comments](https://lobste.rs/s/vawrag/ip_over_lasers)

* [Pong Wars: A battle between day and night, good and bad](https://github.com/vnglst/pong-wars) revisits a classic in gaming with a fresh twist. [Comments](https://news.ycombinator.com/item?id=45413717)

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

* [2025-10-02, 18:52:08](https://lobste.rs/s/cpersg/wombat_s_book_nix) - [Wombat’s Book of Nix](https://mhwombat.codeberg.page/nix-book/)
* [2025-10-02, 18:50:20](https://lobste.rs/s/azb8k5/terminating_elegantly_guide_graceful) - [Terminating elegantly: a guide to graceful shutdowns](https://www.youtube.com/watch?v=t6zVcxT7Br4)
* [2025-10-02, 18:41:00](https://slashdot.org/story/25/10/02/179232/linkedin-ceo-says-fancy-degrees-will-matter-less-in-the-future-of-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linkedin CEO Says Fancy Degrees Will Matter Less in the Future of Work](https://slashdot.org/story/25/10/02/179232/linkedin-ceo-says-fancy-degrees-will-matter-less-in-the-future-of-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-02, 18:37:28](https://news.ycombinator.com/item?id=45453586) - [OpenAI&apos;s H1 2025: $4.3B in income, $13.5B in loss](https://www.techinasia.com/news/openais-revenue-rises-16-to-4-3b-in-h1-2025)
* [2025-10-02, 18:26:57](https://news.ycombinator.com/item?id=45453448) - [Gemini 3.0 Pro – early tests](https://twitter.com/chetaslua/status/1973694615518880236)
* [2025-10-02, 18:13:24](https://news.ycombinator.com/item?id=45453299) - [The Answer (1954)](https://sfshortstories.com/?p=5983)
* [2025-10-02, 18:12:01](https://lobste.rs/s/afajjh/nine_http_edge_cases) - [Nine HTTP Edge Cases](https://blog.dochia.dev/blog/http_edge_cases/)
* [2025-10-02, 18:09:46](https://news.ycombinator.com/item?id=45453257) - [Dropping Trust in US Media](https://news.gallup.com/poll/695762/trust-media-new-low.aspx)
* [2025-10-02, 18:06:41](https://news.ycombinator.com/item?id=45453222) - [I Keep Blogging with Emacs](https://entropicthoughts.com/why-stick-to-emacs-blog)
* [2025-10-02, 18:01:00](https://news.slashdot.org/story/25/10/02/1659218/earth-is-getting-darker-literally-and-scientists-are-trying-to-find-out-why?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Earth Is Getting Darker, Literally, and Scientists Are Trying To Find Out Why](https://news.slashdot.org/story/25/10/02/1659218/earth-is-getting-darker-literally-and-scientists-are-trying-to-find-out-why?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-02, 18:00:38](https://lobste.rs/s/oezfwk/datafusion_postgres_postgres_protocol) - [datafusion-postgres: postgres protocol adapter for datafusion query engine](https://github.com/datafusion-contrib/datafusion-postgres)
* [2025-10-02, 18:00:27](https://news.ycombinator.com/item?id=45453135) - [Email immutability matters more in a world with AI](https://www.fastmail.com/blog/not-written-with-ai/)
* [2025-10-02, 17:58:23](https://lobste.rs/s/tp8gzj/empirical_evaluation_property_based) - [An Empirical Evaluation of Property-Based Testing in Python](https://cseweb.ucsd.edu/~mcoblenz/assets/pdf/OOPSLA_2025_PBT.pdf)
* [2025-10-02, 17:21:00](https://slashdot.org/story/25/10/02/1559205/japan-is-running-out-of-its-favorite-beer-after-ransomware-attack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japan is Running Out of Its Favorite Beer After Ransomware Attack](https://slashdot.org/story/25/10/02/1559205/japan-is-running-out-of-its-favorite-beer-after-ransomware-attack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-02, 17:01:16](https://news.ycombinator.com/item?id=45452299) - [Liva AI (YC S25) Is Hiring](https://www.ycombinator.com/companies/liva-ai/jobs/6xM8JYU-founding-operations-lead)
* [2025-10-02, 16:58:55](https://news.ycombinator.com/item?id=45452261) - [Why I chose Lua for this blog](https://andregarzia.com/2025/03/why-i-choose-lua-for-this-blog.html)
* [2025-10-02, 16:40:00](https://news.slashdot.org/story/25/10/02/1612223/trust-in-media-at-new-low-of-28-in-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trust in Media at New Low of 28% in US](https://news.slashdot.org/story/25/10/02/1612223/trust-in-media-at-new-low-of-28-in-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-02, 16:36:53](https://news.ycombinator.com/item?id=45451961) - [The Atlantic Quantum team is joining Google](https://blog.google/technology/research/scaling-quantum-computing-even-faster-with-atlantic-quantum/)
* [2025-10-02, 16:09:15](https://news.ycombinator.com/item?id=45451577) - [Watch MLB games from the comfort of your own terminal](https://github.com/paaatrick/playball)
* [2025-10-02, 16:07:23](https://news.ycombinator.com/item?id=45451547) - [Launch HN: Simplex (YC S24) – Browser automation platform for developers](https://www.simplex.sh/)
* [2025-10-02, 16:06:10](https://news.ycombinator.com/item?id=45451527) - [Signal Protocol and Post-Quantum Ratchets](https://signal.org/blog/spqr/)
* [2025-10-02, 16:02:28](https://lobste.rs/s/w8ej0w/custom_carets_users) - [Custom Carets and Users](https://adrianroselli.com/2025/09/custom-carets-and-users-when-the-caret-is-no-longer-a-stick-yes-thats-a-poor-attempt-at-a-pun.html)
* [2025-10-02, 16:02:00](https://linux.slashdot.org/story/25/10/02/1538229/red-hat-investigating-breach-impacting-as-many-as-28000-customers-including-the-navy-and-congress?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Red Hat Investigating Breach Impacting as Many as 28,000 Customers, Including the Navy and Congress](https://linux.slashdot.org/story/25/10/02/1538229/red-hat-investigating-breach-impacting-as-many-as-28000-customers-including-the-navy-and-congress?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-02, 15:52:21](https://lobste.rs/s/bzx3ue/installing_nixos_on_raspberry_pi_4) - [Installing NixOS on Raspberry Pi 4](https://mtlynch.io/nixos-pi4/)
* [2025-10-02, 15:33:18](https://lobste.rs/s/p79vuw/i_turned_lego_game_boy_into_working_game) - [I turned the Lego Game Boy into a working Game Boy](https://blog.nataliethenerd.com/i-turned-the-lego-game-boy-into-a-working-game-boy-part-1/)
* [2025-10-02, 15:21:00](https://tech.slashdot.org/story/25/10/02/1044234/in-a-sea-of-tech-talent-companies-cant-find-the-workers-they-want?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [In a Sea of Tech Talent, Companies Can&apos;t Find the Workers They Want](https://tech.slashdot.org/story/25/10/02/1044234/in-a-sea-of-tech-talent-companies-cant-find-the-workers-they-want?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-02, 15:07:48](https://news.ycombinator.com/item?id=45450694) - [Pharma is a small component of US health care spending](https://www.economist.com/business/2025/10/02/does-big-pharma-gouge-americans)
* [2025-10-02, 14:58:04](https://news.ycombinator.com/item?id=45450525) - [Work is not school: Surviving institutional stupidity](https://www.leadingsapiens.com/surviving-institutional-stupidity/)
* [2025-10-02, 14:52:49](https://news.ycombinator.com/item?id=45450449) - [Two Amazon delivery drones crash into crane in commercial area of Tolleson, AZ](https://www.abc15.com/news/region-west-valley/tolleson/two-amazon-delivery-drones-crash-into-crane-in-commercial-area-of-tolleson)
* [2025-10-02, 14:40:00](https://news.slashdot.org/story/25/10/02/0811215/japan-saw-record-number-treated-for-heatstroke-in-hottest-ever-summer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japan Saw Record Number Treated For Heatstroke in Hottest-Ever Summer](https://news.slashdot.org/story/25/10/02/0811215/japan-saw-record-number-treated-for-heatstroke-in-hottest-ever-summer?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-02, 14:26:23](https://news.ycombinator.com/item?id=45450044) - [N8n added native persistent storage with DataTables](https://community.n8n.io/t/data-tables-are-here/192256)
* [2025-10-02, 14:00:00](https://news.slashdot.org/story/25/10/02/0751244/insurers-are-using-cancer-patients-as-leverage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Insurers Are Using Cancer Patients as Leverage](https://news.slashdot.org/story/25/10/02/0751244/insurers-are-using-cancer-patients-as-leverage?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-02, 13:29:55](https://news.ycombinator.com/item?id=45449348) - [Daniel Stenberg on 22 curl bugs found by AI and fixed](https://mastodon.social/@bagder/115241241075258997)
* [2025-10-02, 12:34:43](https://news.ycombinator.com/item?id=45448825) - [EU funds are flowing into spyware companies and politicians demanding answers](https://www.theregister.com/2025/10/02/eu_spyware_funding/)
* [2025-10-02, 12:28:27](https://news.ycombinator.com/item?id=45448772) - [Red Hat confirms security incident after hackers breach GitLab instance](https://www.bleepingcomputer.com/news/security/red-hat-confirms-security-incident-after-hackers-claim-github-breach/)
* [2025-10-02, 11:32:19](https://news.ycombinator.com/item?id=45448326) - [NL Judge: Meta must respect user&apos;s choice of recommendation system](https://www.bitsoffreedom.nl/2025/10/02/judge-in-the-bits-of-freedom-vs-meta-lawsuit-meta-must-respect-users-choice/)
* [2025-10-02, 10:00:00](https://tech.slashdot.org/story/25/10/02/036238/google-cuts-more-than-100-design-related-roles-in-cloud-unit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Cuts More Than 100 Design-Related Roles In Cloud Unit](https://tech.slashdot.org/story/25/10/02/036238/google-cuts-more-than-100-design-related-roles-in-cloud-unit?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-02, 09:53:13](https://lobste.rs/s/8hw5n6/asked_do_something_illegal_at_work_here_s) - [Asked to do something illegal at work? Here’s what these software engineers did](https://blog.pragmaticengineer.com/asked-to-do-something-illegal-at-work/)
* [2025-10-02, 09:23:50](https://news.ycombinator.com/item?id=45447699) - [How Israeli actions caused famine in Gaza, visualized](https://www.cnn.com/2025/10/02/middleeast/gaza-famine-causes-vis-intl)
* [2025-10-02, 07:52:08](https://lobste.rs/s/v8lxdc/tutorial_for_sam_command_language) - [A Tutorial for the Sam Command Language](https://ratfactor.com/papers/sam-language)
* [2025-10-02, 07:00:00](https://science.slashdot.org/story/25/10/02/0257214/prospect-of-life-on-saturns-moons-rises-after-discovery-of-organic-substances?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Prospect of Life On Saturn&apos;s Moons Rises After Discovery of Organic Substances](https://science.slashdot.org/story/25/10/02/0257214/prospect-of-life-on-saturns-moons-rises-after-discovery-of-organic-substances?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-02, 06:11:31](https://lobste.rs/s/hhohj2/how_engineers_operationalize_machine) - [How Engineers Operationalize Machine Learning](https://arxiv.org/html/2403.16795v1)
* [2025-10-02, 06:05:07](https://lobste.rs/s/r5bmxd/rfc_llvm_ai_tool_policy_start_small_no_slop) - [[RFC] LLVM AI tool policy: start small, no slop](https://discourse.llvm.org/t/rfc-llvm-ai-tool-policy-start-small-no-slop/88476)
* [2025-10-02, 03:30:00](https://slashdot.org/story/25/10/01/2226205/mira-muratis-stealth-ai-lab-launches-its-first-product?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mira Murati&apos;s Stealth AI Lab Launches Its First Product](https://slashdot.org/story/25/10/01/2226205/mira-muratis-stealth-ai-lab-launches-its-first-product?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-02, 02:02:00](https://hardware.slashdot.org/story/25/10/01/2215232/solar-leads-eu-electricity-generation-as-renewables-hit-54?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Solar Leads EU Electricity Generation As Renewables Hit 54%](https://hardware.slashdot.org/story/25/10/01/2215232/solar-leads-eu-electricity-generation-as-renewables-hit-54?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-02, 01:25:00](https://it.slashdot.org/story/25/10/01/229239/intel-and-amd-trusted-enclaves-a-foundation-for-network-security-fall-to-physical-attacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel and AMD Trusted Enclaves, a Foundation For Network Security, Fall To Physical Attacks](https://it.slashdot.org/story/25/10/01/229239/intel-and-amd-trusted-enclaves-a-foundation-for-network-security-fall-to-physical-attacks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-02, 00:45:00](https://apple.slashdot.org/story/25/10/01/221223/apple-shelves-vision-headset-revamp-to-prioritize-meta-like-ai-glasses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Shelves Vision Headset Revamp to Prioritize Meta-Like AI Glasses](https://apple.slashdot.org/story/25/10/01/221223/apple-shelves-vision-headset-revamp-to-prioritize-meta-like-ai-glasses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-02, 00:37:54](https://lobste.rs/s/m2ovuo/biggest_semantic_mess_futhark) - [The biggest semantic mess in Futhark](https://futhark-lang.org/blog/2025-09-26-the-biggest-semantic-mess.html)
* [2025-10-02, 00:02:00](https://hardware.slashdot.org/story/25/10/01/2125250/airpods-pro-3-impossible-to-repair-earn-score-of-0-in-ifixit-teardown?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AirPods Pro 3 Impossible To Repair, Earn Score of 0 In iFixit Teardown](https://hardware.slashdot.org/story/25/10/01/2125250/airpods-pro-3-impossible-to-repair-earn-score-of-0-in-ifixit-teardown?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-01, 23:48:58](https://lobste.rs/s/9o8m3u/primitive_overloading) - [Primitive overloading](https://mlochbaum.github.io/BQN/commentary/overload.html)
* [2025-10-01, 23:34:33](https://lobste.rs/s/dopdda/jujutsu_v0_34_0_released) - [jujutsu v0.34.0 released](https://github.com/jj-vcs/jj/releases/tag/v0.34.0)
* [2025-10-01, 23:06:55](https://news.ycombinator.com/item?id=45444694) - [Cormac McCarthy&apos;s personal library](https://www.smithsonianmag.com/arts-culture/two-years-cormac-mccarthys-death-rare-access-to-personal-library-reveals-man-behind-myth-180987150/)
* [2025-10-01, 21:57:04](https://lobste.rs/s/pxovor/immich_v2_0_0_stable_release) - [Immich v2.0.0 - Stable Release](https://github.com/immich-app/immich/releases/tag/v2.0.0)
* [2025-10-01, 19:36:00](https://lobste.rs/s/vawrag/ip_over_lasers) - [IP Over Lasers](https://www.mikekohn.net/micro/ip_over_lasers.php)
* [2025-10-01, 19:11:17](https://lobste.rs/s/va0frj/serving_half_billion_requests_per_day) - [Serving a half billion requests per day with Rust + CGI](https://jacob.gold/posts/serving-half-billion-requests-with-rust-cgi/)
* [2025-10-01, 18:42:19](https://lobste.rs/s/liw1e8/we_tried_go_s_experimental_green_tea) - [We tried Go&apos;s experimental Green Tea garbage collector and it didn&apos;t help performance](https://www.dolthub.com/blog/2025-09-26-greentea-gc-with-dolt/)
* [2025-10-01, 17:37:05](https://lobste.rs/s/w8xado/is_tech_inevitable) - [is tech inevitable](https://deviantabstraction.com/2025/09/29/against-the-tech-inevitability/)
* [2025-10-01, 15:57:47](https://lobste.rs/s/a3wcu0/who_s_hiring_q4_2025) - [Who&apos;s Hiring? Q4 2025](https://lobste.rs/s/a3wcu0/who_s_hiring_q4_2025)
* [2025-10-01, 15:40:23](https://lobste.rs/s/8nyk1p/stop_trusting_nix_caches) - [Stop Trusting Nix Caches](https://garnix.io/blog/stop-trusting-nix-caches)
* [2025-10-01, 13:59:32](https://lobste.rs/s/jai4yu/nix_steering_committee_vote_no) - [Nix Steering Committee vote of no confidence](https://www.haskellforall.com/2025/10/nix-steering-committee-vote-of-no.html)
* [2025-10-01, 13:53:03](https://lobste.rs/s/fygftm/f3_open_source_data_file_format_for_future) - [F3: The Open-Source Data File Format for the Future](https://db.cs.cmu.edu/papers/2025/zeng-sigmod2025.pdf)
* [2025-10-01, 13:52:41](https://news.ycombinator.com/item?id=45437759) - [F3: Open-source data file format for the future [pdf]](https://db.cs.cmu.edu/papers/2025/zeng-sigmod2025.pdf)
* [2025-09-30, 19:55:31](https://lobste.rs/s/lm3isi/glide_extensible_keyboard_focused_web) - [Glide, an extensible, keyboard-focused web browser](https://blog.craigie.dev/introducing-glide/)
* [2025-09-29, 17:39:02](https://news.ycombinator.com/item?id=45416552) - [Adding a new instruction to RISC-V back end in LLVM](https://blog.gustavoleite.me/llvm-riscv-instruction)
* [2025-09-29, 15:04:07](https://news.ycombinator.com/item?id=45414718) - [The history of cataract surgery](https://www.asimov.press/p/cataracts)
* [2025-09-29, 13:44:02](https://news.ycombinator.com/item?id=45413717) - [Pong Wars: A battle between day and night, good and bad](https://github.com/vnglst/pong-wars)
* [2025-09-29, 08:31:36](https://news.ycombinator.com/item?id=45411514) - [Show HN: Traceroute Visualizer](https://kriztalz.sh/traceroute-visualizer/)
* [2025-09-29, 03:22:27](https://news.ycombinator.com/item?id=45410068) - [I built ChatGPT with Minecraft redstone [video]](https://www.youtube.com/watch?v=VaeI9YgE1o8)
* [2025-09-28, 21:00:18](https://news.ycombinator.com/item?id=45407953) - [We bought the whole GPU, so we&apos;re damn well going to use the whole GPU](https://hazyresearch.stanford.edu/blog/2025-09-28-tp-llama-main)
* [2025-09-28, 18:46:22](https://news.ycombinator.com/item?id=45406804) - [Throne of the Third Heaven of the Nations&apos; Millennium General Assembly (2021)](https://americanart.si.edu/blog/throne-james-hampton)
