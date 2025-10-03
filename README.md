# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Dropping upstream Nix from Determinate Nix Installer](https://determinate.systems/blog/installer-dropping-upstream/) - Exploring changes in the Determinate Nix Installer, which highlights significant shifts in tool dependency.

* [Colorado Deploys Self-Driving Crash Trucks To Protect Highway Workers](https://tech.slashdot.org/story/25/10/02/2156215/colorado-deploys-self-driving-crash-trucks-to-protect-highway-workers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Colorado reveals innovative use of self-driving vehicles for worker safety on highways.

* [Signal Protocol and Post-Quantum Ratchets](https://signal.org/blog/spqr/) - Developments in secure communication with post-quantum cryptography in Signal's protocol.

* [AMD In Early Talks To Make Chips At Intel Foundry](https://hardware.slashdot.org/story/25/10/02/210246/amd-in-early-talks-to-make-chips-at-intel-foundry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - AMD's intriguing discussions on chip manufacturing with Intel could reshape semiconductor collaboration.

## Science and Environment

* [Autism Should Not Be Seen As Single Condition With One Cause, Say Scientists](https://science.slashdot.org/story/25/10/02/2217211/autism-should-not-be-seen-as-single-condition-with-one-cause-say-scientists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Researchers argue for nuanced understanding and treatment approaches to autism.

* [Earth Is Getting Darker, Literally, and Scientists Are Trying To Find Out Why](https://news.slashdot.org/story/25/10/02/1659218/earth-is-getting-darker-literally-and-scientists-are-trying-to-find-out-why?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A puzzling environmental phenomenon where Earth's brightness diminishes.

## Cybersecurity and Data Impacts

* [Google Says Hackers Are Sending Extortion Emails To Executives](https://tech.slashdot.org/story/25/10/02/1812256/google-says-hackers-are-sending-extortion-emails-to-executives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Growing concerns over targeted email-based extortion against business leaders.

* [Japan is Running Out of Its Favorite Beer After Ransomware Attack](https://slashdot.org/story/25/10/02/1559205/japan-is-running-out-of-its-favorite-beer-after-ransomware-attack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Impacts of ransomware disrupting supply chains in the brewing industry.

* [AI Has Already Run Out of Training Data, Goldman's Data Chief Says](https://slashdot.org/story/25/10/02/191224/ai-has-already-run-out-of-training-data-goldmans-data-chief-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Exploration of the training data crisis in artificial intelligence development.

## Business and Industry

* [Ford IT Systems Tampered With To Display Vulgar Anti-RTO Message Across Office Screens](https://it.slashdot.org/story/25/10/02/224238/ford-it-systems-tampered-with-to-display-vulgar-anti-rto-message-across-office-screens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A security breach sheds light on employee sentiment towards remote work policies.

* [Linkedin CEO Says Fancy Degrees Will Matter Less in the Future of Work](https://slashdot.org/story/25/10/02/179232/linkedin-ceo-says-fancy-degrees-will-matter-less-in-the-future-of-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Forecasts on shifting priorities in job qualifications and the value of experience over credentials.

* [New Zealand's Institute of IT Professionals Collapses](https://it.slashdot.org/story/25/10/02/2116200/new-zealands-institute-of-it-professionals-collapses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Sudden institutional failure marks a potential turning point in professional IT organization dynamics.

## Cultural and Historical Insights

* [The strangest letter of the alphabet: The rise and fall of yogh](https://www.deadlanguagesociety.com/p/history-of-letter-yogh) - An intriguing dive into the history and disappearance of 'yogh' in written language.

* [Mary Carleton, Counterfeit Princess](https://publicdomainreview.org/essay/mary-carleton-counterfeit-princess/) - The story of a historical figure who epitomized deception and ingenuity in her era.

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

* [2025-10-03, 02:02:00](https://science.slashdot.org/story/25/10/02/2217211/autism-should-not-be-seen-as-single-condition-with-one-cause-say-scientists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Autism Should Not Be Seen As Single Condition With One Cause, Say Scientists](https://science.slashdot.org/story/25/10/02/2217211/autism-should-not-be-seen-as-single-condition-with-one-cause-say-scientists?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-03, 01:25:00](https://it.slashdot.org/story/25/10/02/224238/ford-it-systems-tampered-with-to-display-vulgar-anti-rto-message-across-office-screens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ford IT Systems Tampered With To Display Vulgar Anti-RTO Message Across Office Screens](https://it.slashdot.org/story/25/10/02/224238/ford-it-systems-tampered-with-to-display-vulgar-anti-rto-message-across-office-screens?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-03, 00:45:00](https://tech.slashdot.org/story/25/10/02/2156215/colorado-deploys-self-driving-crash-trucks-to-protect-highway-workers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Colorado Deploys Self-Driving Crash Trucks To Protect Highway Workers](https://tech.slashdot.org/story/25/10/02/2156215/colorado-deploys-self-driving-crash-trucks-to-protect-highway-workers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-03, 00:44:06](https://lobste.rs/s/be78ef/dropping_upstream_nix_from_determinate) - [Dropping upstream Nix from Determinate Nix Installer](https://determinate.systems/blog/installer-dropping-upstream/)
* [2025-10-03, 00:34:29](https://news.ycombinator.com/item?id=45457333) - [Apple takes down ICE tracking apps after pressure from Bondi DOJ](https://www.foxbusiness.com/politics/apple-takes-down-ice-tracking-app-after-pressure-from-ag-bondi)
* [2025-10-03, 00:12:38](https://lobste.rs/s/3oyazz/signal_protocol_post_quantum_ratchets) - [Signal Protocol and Post-Quantum Ratchets](https://signal.org/blog/spqr/)
* [2025-10-03, 00:02:00](https://it.slashdot.org/story/25/10/02/2116200/new-zealands-institute-of-it-professionals-collapses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Zealand&apos;s Institute of IT Professionals Collapses](https://it.slashdot.org/story/25/10/02/2116200/new-zealands-institute-of-it-professionals-collapses?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-02, 23:35:00](https://soylentnews.org/article.pl?sid=25/09/30/1336240&amp;from=rss) - [Mix Insect, Plant and Cultivated Proteins for Healthier, Greener, Tastier Food, Say Experts](https://soylentnews.org/article.pl?sid=25/09/30/1336240&amp;from=rss)
* [2025-10-02, 23:20:00](https://hardware.slashdot.org/story/25/10/02/210246/amd-in-early-talks-to-make-chips-at-intel-foundry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AMD In Early Talks To Make Chips At Intel Foundry](https://hardware.slashdot.org/story/25/10/02/210246/amd-in-early-talks-to-make-chips-at-intel-foundry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-02, 22:40:00](https://tech.slashdot.org/story/25/10/02/2054222/two-amazon-delivery-drones-crash-into-crane-in-arizona?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Two Amazon Delivery Drones Crash Into Crane In Arizona](https://tech.slashdot.org/story/25/10/02/2054222/two-amazon-delivery-drones-crash-into-crane-in-arizona?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-02, 22:00:00](https://yro.slashdot.org/story/25/10/02/2036202/sports-piracy-operator-goes-from-jail-to-getting-hired-by-a-tech-unicorn-in-a-month?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Sports Piracy Operator Goes From Jail To Getting Hired By a Tech Unicorn In a Month](https://yro.slashdot.org/story/25/10/02/2036202/sports-piracy-operator-goes-from-jail-to-getting-hired-by-a-tech-unicorn-in-a-month?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-02, 21:48:16](https://lobste.rs/s/letrig/zluda_update_q3_2025_zluda_5_is_here) - [ZLUDA update Q3 2025 – ZLUDA 5 is here](https://vosen.github.io/ZLUDA/blog/zluda-update-q3-2025/)
* [2025-10-02, 21:47:31](https://news.ycombinator.com/item?id=45456003) - [PortalVR: XR Without a Headset](https://portalvr.io/)
* [2025-10-02, 21:34:42](https://news.ycombinator.com/item?id=45455882) - [The strangest letter of the alphabet: The rise and fall of yogh](https://www.deadlanguagesociety.com/p/history-of-letter-yogh)
* [2025-10-02, 21:22:00](https://tech.slashdot.org/story/25/10/02/1917242/what-happened-when-a-pacific-island-was-cut-off-from-the-internet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [What Happened When a Pacific Island Was Cut Off From the Internet](https://tech.slashdot.org/story/25/10/02/1917242/what-happened-when-a-pacific-island-was-cut-off-from-the-internet?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-02, 21:21:49](https://news.ycombinator.com/item?id=45455719) - [Solveit – A course and platform for solving problems with code](https://www.answer.ai/posts/2025-10-01-solveit-full.html)
* [2025-10-02, 21:15:41](https://lobste.rs/s/xcceiy/neural_network_written_completely_jq) - [A neural network written completely in jq (2017)](https://github.com/kevin-albert/jq-neural-network)
* [2025-10-02, 20:41:00](https://slashdot.org/story/25/10/02/191224/ai-has-already-run-out-of-training-data-goldmans-data-chief-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI Has Already Run Out of Training Data, Goldman&apos;s Data Chief Says](https://slashdot.org/story/25/10/02/191224/ai-has-already-run-out-of-training-data-goldmans-data-chief-says?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-02, 20:38:31](https://lobste.rs/s/ulyau9/whatever_happened_sha_256_support_git) - [Whatever happened to SHA-256 support in Git? (2022)](https://lwn.net/Articles/898522/)
* [2025-10-02, 20:32:23](https://lobste.rs/s/yhp6ym/where_it_s_at) - [Where It&apos;s at://](https://overreacted.io/where-its-at/)
* [2025-10-02, 20:04:17](https://lobste.rs/s/2ib77w/litestream_v0_5_0_is_here) - [Litestream v0.5.0 is Here](https://fly.io/blog/litestream-v050-is-here/)
* [2025-10-02, 20:01:00](https://tech.slashdot.org/story/25/10/02/1812256/google-says-hackers-are-sending-extortion-emails-to-executives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Says Hackers Are Sending Extortion Emails To Executives](https://tech.slashdot.org/story/25/10/02/1812256/google-says-hackers-are-sending-extortion-emails-to-executives?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-02, 19:39:08](https://news.ycombinator.com/item?id=45454460) - [Anti-aging breakthrough: Stem cells reverse signs of aging in monkeys](https://www.nad.com/news/anti-aging-breakthrough-stem-cells-reverse-signs-of-aging-in-monkeys)
* [2025-10-02, 19:34:08](https://news.ycombinator.com/item?id=45454374) - [Why most product planning is bad and what to do about it](https://blog.railway.com/p/product-planning-improvement)
* [2025-10-02, 19:21:00](https://tech.slashdot.org/story/25/10/02/180240/walmart-to-deploy-sensors-to-track-90-million-grocery-pallets-by-next-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Walmart To Deploy Sensors To Track 90 Million Grocery Pallets by Next Year](https://tech.slashdot.org/story/25/10/02/180240/walmart-to-deploy-sensors-to-track-90-million-grocery-pallets-by-next-year?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-02, 18:52:08](https://lobste.rs/s/cpersg/wombat_s_book_nix) - [Wombat’s Book of Nix](https://mhwombat.codeberg.page/nix-book/)
* [2025-10-02, 18:50:20](https://lobste.rs/s/azb8k5/terminating_elegantly_guide_graceful) - [Terminating elegantly: a guide to graceful shutdowns](https://www.youtube.com/watch?v=t6zVcxT7Br4)
* [2025-10-02, 18:46:00](https://soylentnews.org/article.pl?sid=25/09/30/1328225&amp;from=rss) - [Complex Knots Can Actually be Easier to Untie Than Simple Ones](https://soylentnews.org/article.pl?sid=25/09/30/1328225&amp;from=rss)
* [2025-10-02, 18:41:00](https://slashdot.org/story/25/10/02/179232/linkedin-ceo-says-fancy-degrees-will-matter-less-in-the-future-of-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linkedin CEO Says Fancy Degrees Will Matter Less in the Future of Work](https://slashdot.org/story/25/10/02/179232/linkedin-ceo-says-fancy-degrees-will-matter-less-in-the-future-of-work?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-02, 18:37:28](https://news.ycombinator.com/item?id=45453586) - [OpenAI&apos;s H1 2025: $4.3B in income, $13.5B in loss](https://www.techinasia.com/news/openais-revenue-rises-16-to-4-3b-in-h1-2025)
* [2025-10-02, 18:26:57](https://news.ycombinator.com/item?id=45453448) - [Gemini 3.0 Pro – early tests](https://twitter.com/chetaslua/status/1973694615518880236)
* [2025-10-02, 18:13:24](https://news.ycombinator.com/item?id=45453299) - [The Answer (1954)](https://sfshortstories.com/?p=5983)
* [2025-10-02, 18:12:01](https://lobste.rs/s/afajjh/nine_http_edge_cases) - [Nine HTTP Edge Cases](https://blog.dochia.dev/blog/http_edge_cases/)
* [2025-10-02, 18:06:41](https://news.ycombinator.com/item?id=45453222) - [Babel is why I keep blogging with Emacs](https://entropicthoughts.com/why-stick-to-emacs-blog)
* [2025-10-02, 18:01:00](https://news.slashdot.org/story/25/10/02/1659218/earth-is-getting-darker-literally-and-scientists-are-trying-to-find-out-why?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Earth Is Getting Darker, Literally, and Scientists Are Trying To Find Out Why](https://news.slashdot.org/story/25/10/02/1659218/earth-is-getting-darker-literally-and-scientists-are-trying-to-find-out-why?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-02, 18:00:38](https://lobste.rs/s/oezfwk/datafusion_postgres_postgres_protocol) - [datafusion-postgres: postgres protocol adapter for datafusion query engine](https://github.com/datafusion-contrib/datafusion-postgres)
* [2025-10-02, 17:58:23](https://lobste.rs/s/tp8gzj/empirical_evaluation_property_based) - [An Empirical Evaluation of Property-Based Testing in Python](https://cseweb.ucsd.edu/~mcoblenz/assets/pdf/OOPSLA_2025_PBT.pdf)
* [2025-10-02, 17:21:00](https://slashdot.org/story/25/10/02/1559205/japan-is-running-out-of-its-favorite-beer-after-ransomware-attack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Japan is Running Out of Its Favorite Beer After Ransomware Attack](https://slashdot.org/story/25/10/02/1559205/japan-is-running-out-of-its-favorite-beer-after-ransomware-attack?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-02, 17:01:16](https://news.ycombinator.com/item?id=45452299) - [Liva AI (YC S25) Is Hiring](https://www.ycombinator.com/companies/liva-ai/jobs/6xM8JYU-founding-operations-lead)
* [2025-10-02, 16:58:55](https://news.ycombinator.com/item?id=45452261) - [Why I chose Lua for this blog](https://andregarzia.com/2025/03/why-i-choose-lua-for-this-blog.html)
* [2025-10-02, 16:40:00](https://news.slashdot.org/story/25/10/02/1612223/trust-in-media-at-new-low-of-28-in-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trust in Media at New Low of 28% in US](https://news.slashdot.org/story/25/10/02/1612223/trust-in-media-at-new-low-of-28-in-us?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-10-02, 16:09:15](https://news.ycombinator.com/item?id=45451577) - [Playball – Watch MLB games from a terminal](https://github.com/paaatrick/playball)
* [2025-10-02, 16:07:23](https://news.ycombinator.com/item?id=45451547) - [Launch HN: Simplex (YC S24) – Browser automation platform for developers](https://www.simplex.sh/)
* [2025-10-02, 16:06:10](https://news.ycombinator.com/item?id=45451527) - [Signal Protocol and Post-Quantum Ratchets](https://signal.org/blog/spqr/)
* [2025-10-02, 16:02:28](https://lobste.rs/s/w8ej0w/custom_carets_users) - [Custom Carets and Users](https://adrianroselli.com/2025/09/custom-carets-and-users-when-the-caret-is-no-longer-a-stick-yes-thats-a-poor-attempt-at-a-pun.html)
* [2025-10-02, 15:52:21](https://lobste.rs/s/bzx3ue/installing_nixos_on_raspberry_pi_4) - [Installing NixOS on Raspberry Pi 4](https://mtlynch.io/nixos-pi4/)
* [2025-10-02, 15:33:18](https://lobste.rs/s/p79vuw/i_turned_lego_game_boy_into_working_game) - [I turned the Lego Game Boy into a working Game Boy](https://blog.nataliethenerd.com/i-turned-the-lego-game-boy-into-a-working-game-boy-part-1/)
* [2025-10-02, 14:58:04](https://news.ycombinator.com/item?id=45450525) - [Work is not school: Surviving institutional stupidity](https://www.leadingsapiens.com/surviving-institutional-stupidity/)
* [2025-10-02, 14:52:49](https://news.ycombinator.com/item?id=45450449) - [Two Amazon delivery drones crash into crane in commercial area of Tolleson, AZ](https://www.abc15.com/news/region-west-valley/tolleson/two-amazon-delivery-drones-crash-into-crane-in-commercial-area-of-tolleson)
* [2025-10-02, 14:26:23](https://news.ycombinator.com/item?id=45450044) - [N8n added native persistent storage with DataTables](https://community.n8n.io/t/data-tables-are-here/192256)
* [2025-10-02, 14:03:00](https://soylentnews.org/article.pl?sid=25/09/30/1323239&amp;from=rss) - [Huawei’s Ternary Logic Breakthrough: a Game-Changer or Just Hype?](https://soylentnews.org/article.pl?sid=25/09/30/1323239&amp;from=rss)
* [2025-10-02, 11:32:19](https://news.ycombinator.com/item?id=45448326) - [NL Judge: Meta must respect user&apos;s choice of recommendation system](https://www.bitsoffreedom.nl/2025/10/02/judge-in-the-bits-of-freedom-vs-meta-lawsuit-meta-must-respect-users-choice/)
* [2025-10-02, 09:53:13](https://lobste.rs/s/8hw5n6/asked_do_something_illegal_at_work_here_s) - [Asked to do something illegal at work? Here’s what these software engineers did](https://blog.pragmaticengineer.com/asked-to-do-something-illegal-at-work/)
* [2025-10-02, 09:23:50](https://news.ycombinator.com/item?id=45447699) - [How Israeli actions caused famine in Gaza, visualized](https://www.cnn.com/2025/10/02/middleeast/gaza-famine-causes-vis-intl)
* [2025-10-02, 09:16:00](https://soylentnews.org/article.pl?sid=25/09/30/1249215&amp;from=rss) - [Experts Alarmed That AI is Now Producing Functional Viruses](https://soylentnews.org/article.pl?sid=25/09/30/1249215&amp;from=rss)
* [2025-10-02, 07:52:08](https://lobste.rs/s/v8lxdc/tutorial_for_sam_command_language) - [A Tutorial for the Sam Command Language](https://ratfactor.com/papers/sam-language)
* [2025-10-02, 04:31:00](https://soylentnews.org/article.pl?sid=25/09/30/0352206&amp;from=rss) - [Scientists Unlock Secret to Thick, Stable Beer Foams](https://soylentnews.org/article.pl?sid=25/09/30/0352206&amp;from=rss)
* [2025-10-02, 00:37:54](https://lobste.rs/s/m2ovuo/biggest_semantic_mess_futhark) - [The biggest semantic mess in Futhark](https://futhark-lang.org/blog/2025-09-26-the-biggest-semantic-mess.html)
* [2025-10-01, 23:47:00](https://soylentnews.org/article.pl?sid=25/09/30/0349204&amp;from=rss) - [Explainer: Why a Decades Old Architecture Decision is Impeding the Power of AI Computing](https://soylentnews.org/article.pl?sid=25/09/30/0349204&amp;from=rss)
* [2025-10-01, 23:34:33](https://lobste.rs/s/dopdda/jujutsu_v0_34_0_released) - [jujutsu v0.34.0 released](https://github.com/jj-vcs/jj/releases/tag/v0.34.0)
* [2025-10-01, 21:57:04](https://lobste.rs/s/pxovor/immich_v2_0_0_stable_release) - [Immich v2.0.0 - Stable Release](https://github.com/immich-app/immich/releases/tag/v2.0.0)
* [2025-10-01, 19:02:00](https://soylentnews.org/article.pl?sid=25/09/30/0346236&amp;from=rss) - [This Black Hole Flipped its Magnetic Field](https://soylentnews.org/article.pl?sid=25/09/30/0346236&amp;from=rss)
* [2025-10-01, 17:37:05](https://lobste.rs/s/w8xado/is_tech_inevitable) - [is tech inevitable](https://deviantabstraction.com/2025/09/29/against-the-tech-inevitability/)
* [2025-10-01, 15:57:47](https://lobste.rs/s/a3wcu0/who_s_hiring_q4_2025) - [Who&apos;s Hiring? Q4 2025](https://lobste.rs/s/a3wcu0/who_s_hiring_q4_2025)
* [2025-10-01, 15:40:23](https://lobste.rs/s/8nyk1p/stop_trusting_nix_caches) - [Stop Trusting Nix Caches](https://garnix.io/blog/stop-trusting-nix-caches)
* [2025-10-01, 14:15:00](https://soylentnews.org/article.pl?sid=25/09/30/0336248&amp;from=rss) - [Claude&apos;s New AI File Creation Feature Ships With Deep Security Risks Built in](https://soylentnews.org/article.pl?sid=25/09/30/0336248&amp;from=rss)
* [2025-10-01, 13:59:32](https://lobste.rs/s/jai4yu/nix_steering_committee_vote_no) - [Nix Steering Committee vote of no confidence](https://www.haskellforall.com/2025/10/nix-steering-committee-vote-of-no.html)
* [2025-10-01, 09:32:00](https://soylentnews.org/article.pl?sid=25/09/29/0143218&amp;from=rss) - [Shopify Engages in Hostile Takeover of RubyGems and Bundler](https://soylentnews.org/article.pl?sid=25/09/29/0143218&amp;from=rss)
* [2025-10-01, 09:04:10](https://news.ycombinator.com/item?id=45435720) - [Pre-Record Your Demos](https://www.steveharrison.dev/pre-record-your-demos/)
* [2025-10-01, 06:03:28](https://news.ycombinator.com/item?id=45434755) - [Mary Carleton, Counterfeit Princess](https://publicdomainreview.org/essay/mary-carleton-counterfeit-princess/)
* [2025-10-01, 04:49:00](https://soylentnews.org/article.pl?sid=25/09/29/0130236&amp;from=rss) - [Workslop - the Result of Too Much Clueless AI](https://soylentnews.org/article.pl?sid=25/09/29/0130236&amp;from=rss)
* [2025-10-01, 00:05:00](https://soylentnews.org/article.pl?sid=25/09/29/0126248&amp;from=rss) - [Inequality in Agri-Food Chains: Global South Produces the Food, the Global North Keeps the Wealth](https://soylentnews.org/article.pl?sid=25/09/29/0126248&amp;from=rss)
* [2025-09-30, 19:55:31](https://lobste.rs/s/lm3isi/glide_extensible_keyboard_focused_web) - [Glide, an extensible, keyboard-focused web browser](https://blog.craigie.dev/introducing-glide/)
* [2025-09-30, 19:24:00](https://soylentnews.org/article.pl?sid=25/09/29/0124238&amp;from=rss) - [Details Beginning to Emerge About Australia&apos;s Social Media Ban](https://soylentnews.org/article.pl?sid=25/09/29/0124238&amp;from=rss)
* [2025-09-30, 14:39:00](https://soylentnews.org/article.pl?sid=25/09/29/0111207&amp;from=rss) - [Forty Years of Commitment to Software Freedom](https://soylentnews.org/article.pl?sid=25/09/29/0111207&amp;from=rss)
* [2025-09-30, 09:57:00](https://soylentnews.org/article.pl?sid=25/09/29/018254&amp;from=rss) - [OpenAI and Nvidia’s $100B AI Plan Will Require Power Equal to 10 Nuclear Reactors](https://soylentnews.org/article.pl?sid=25/09/29/018254&amp;from=rss)
* [2025-09-30, 05:15:00](https://soylentnews.org/article.pl?sid=25/09/29/0055259&amp;from=rss) - [Think Twice Before Abandoning X11. Wayland Breaks Everything!](https://soylentnews.org/article.pl?sid=25/09/29/0055259&amp;from=rss)
* [2025-09-30, 00:32:00](https://soylentnews.org/article.pl?sid=25/09/29/0053249&amp;from=rss) - [EA is Reportedly About to be Sold in a Record-Setting $50 Billion Buyout](https://soylentnews.org/article.pl?sid=25/09/29/0053249&amp;from=rss)
* [2025-09-29, 19:46:00](https://soylentnews.org/article.pl?sid=25/09/28/0016247&amp;from=rss) - [New World Screwworm Parasite Detected in Northern Mexico Near US Border](https://soylentnews.org/article.pl?sid=25/09/28/0016247&amp;from=rss)
* [2025-09-29, 19:37:21](https://news.ycombinator.com/item?id=45417826) - [How I block all 26M of your curl requests](https://foxmoss.com/blog/packet-filtering/)
* [2025-09-29, 15:41:50](https://news.ycombinator.com/item?id=45415196) - [Class Dismissed: Profile of Joe Liemandt and Alpha School](https://joincolossus.com/article/joe-liemandt-class-dismissed/)
* [2025-09-29, 15:04:07](https://news.ycombinator.com/item?id=45414718) - [The history of cataract surgery](https://www.asimov.press/p/cataracts)
* [2025-09-29, 15:02:00](https://soylentnews.org/article.pl?sid=25/09/28/0015236&amp;from=rss) - [8,000 years of Human Activities Aave Caused Wild Animals to Shrink and Domestic Animals to Grow](https://soylentnews.org/article.pl?sid=25/09/28/0015236&amp;from=rss)
* [2025-09-29, 12:47:45](https://news.ycombinator.com/item?id=45413059) - [RISC-V Conditional Moves](https://www.corsix.org/content/riscv-conditional-moves)
* [2025-09-29, 12:29:29](https://news.ycombinator.com/item?id=45412870) - [A simple habit that saves my evenings](https://alikhil.dev/posts/the-simple-habit-that-saves-my-evenings/)
* [2025-09-29, 10:17:00](https://soylentnews.org/article.pl?sid=25/09/28/008233&amp;from=rss) - [Physicists Nearly Double Speed of Superconducting Qubit Readout in Quantum Computers](https://soylentnews.org/article.pl?sid=25/09/28/008233&amp;from=rss)
* [2025-09-29, 09:43:39](https://news.ycombinator.com/item?id=45411866) - [A primer for using weather surveillance radar to study bird migration](https://birdcast.info/news/a-primer-for-using-weather-surveillance-radar-to-study-bird-migration/)
* [2025-09-29, 08:31:36](https://news.ycombinator.com/item?id=45411514) - [Show HN: Traceroute Visualizer](https://kriztalz.sh/traceroute-visualizer/)
* [2025-09-29, 05:35:00](https://soylentnews.org/article.pl?sid=25/09/28/006252&amp;from=rss) - [The Cyber Vulnerabilities Lurking in CRM Systems](https://soylentnews.org/article.pl?sid=25/09/28/006252&amp;from=rss)
* [2025-09-29, 00:49:00](https://soylentnews.org/article.pl?sid=25/09/27/141202&amp;from=rss) - [This Experimental Computer Chip Reuses Energy](https://soylentnews.org/article.pl?sid=25/09/27/141202&amp;from=rss)
