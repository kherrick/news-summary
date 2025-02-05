# [News Summary](https://kherrick.github.io/news-summary/)

## Climate and Environmental Innovations

* [Climate Change Target of 2C Is 'Dead'](https://news.slashdot.org/story/25/02/05/0557256/climate-change-target-of-2c-is-dead?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A pivotal update on the global fight against climate change as 2°C warming targets are deemed unattainable.

* [UK Team Invents Self-Healing Road Surface To Prevent Potholes](https://tech.slashdot.org/story/25/02/04/2243225/uk-team-invents-self-healing-road-surface-to-prevent-potholes?utm_source=rss1.0mainlinkanon&utm_medium=feed) - British researchers pioneer a self-repairing road material aimed at pothole prevention.

## Technology Startups and Innovations

* [Framework ships RISC-V board for its 13" laptops along with "boardless" laptop chassis](https://arstechnica.com/gadgets/2025/02/framework-laptop-expands-beyond-x86-with-its-first-ever-risc-v-based-motherboard/) - Framework introduces a RISC-V-based board to increase laptop modularity and customization.

* [A Java JIT Compiler and Runtime in Common Lisp](https://github.com/atgreen/openldk) - Demonstrating the use of Common Lisp to implement a Java Just-In-Time (JIT) compiler and runtime.

## AI and Computing Developments

* [Physicists Confirm The Existence of a Third Form of Magnetism](https://science.slashdot.org/story/25/02/05/0530255/physicists-confirm-the-existence-of-a-third-form-of-magnetism?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Researchers achieve a breakthrough by confirming a new type of magnetism.

* [Meta CTO: 2025 Make or Break Year for Metaverse](https://tech.slashdot.org/story/25/02/05/038254/meta-cto-2025-make-or-break-year-for-metaverse?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Meta's Chief Technology Officer offers a candid perspective on the Metaverse's uncertain future in 2025.

## Open Source and Developer Tools

* [GNU Make Standard Library](https://gmsl.jgc.org/) - A standardized library designed to improve the functionality of GNU Make for developers.

* [Beej's Guide to Git](https://beej.us/guide/bggit/) - A straightforward and developer-oriented guide to mastering Git.

## Society and Policy Impacts

* [USPS Halts All Packages From China, Sending the Ecommerce Industry Into Chaos](https://yro.slashdot.org/story/25/02/05/055207/usps-halts-all-packages-from-china-sending-the-ecommerce-industry-into-chaos?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The sudden suspension of mail from China disrupts supply chains and the online retail industry.

* [Tesla and BMW Sue European Commission Over Chinese EV Tariffs](https://soylentnews.org/article.pl?sid=25/02/04/0358217&from=rss) - A legal dispute emerges over European tariffs on electric vehicles produced in China.

## Historical Perspectives

* [Carl Sagan Predicts the Decline of America (1995)](https://www.openculture.com/2025/02/carl-sagan-predicts-the-decline-of-america-unable-to-know-whats-true.html) - A reflection on Carl Sagan's prescient warning about America's challenges.

* [They Thought They Were Free, by Milton Mayer, an Excerpt](https://press.uchicago.edu/Misc/Chicago/511928.htm) - Revisiting a chilling account of historical events and societal complacency.

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

* [2025-02-05, 13:00:00](https://news.slashdot.org/story/25/02/05/0557256/climate-change-target-of-2c-is-dead?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Climate Change Target of 2C Is 'Dead'](https://news.slashdot.org/story/25/02/05/0557256/climate-change-target-of-2c-is-dead?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-05, 12:18:25](https://lobste.rs/s/4p3ovs/java_jit_compiler_runtime_common_lisp) - [A Java JIT Compiler and Runtime in Common Lisp](https://github.com/atgreen/openldk)
* [2025-02-05, 12:01:00](https://news.ycombinator.com/item?id=42947306) - [Toma (YC W24) Is Hiring a Founding Platform Engineer](https://www.ycombinator.com/companies/toma/jobs/eyhn3Si-founding-platform-engineer)
* [2025-02-05, 12:00:00](https://soylentnews.org/article.pl?sid=25/02/04/042215&from=rss) - [Microsoft Defender's VPN Feature Will be Killed Off at the End of February](https://soylentnews.org/article.pl?sid=25/02/04/042215&from=rss)
* [2025-02-05, 11:30:36](https://news.ycombinator.com/item?id=42947049) - [Microsoft deletes official Windows 11 CPU/TPM bypass for unsupported PCs](https://www.neowin.net/news/microsoft-quietly-removes-official-windows-11-cputpm-bypass-for-unsupported-pcs/)
* [2025-02-05, 11:09:19](https://lobste.rs/s/pmiplu/zig_elm_linters_2022) - [Zig, Elm, and linters (2022)](https://gotopia.tech/articles/233/zig-programming-language-and-linters)
* [2025-02-05, 11:05:40](https://news.ycombinator.com/item?id=42946854) - [S1: The $6 R1 Competitor?](https://timkellogg.me/blog/2025/02/03/s1)
* [2025-02-05, 10:49:12](https://news.ycombinator.com/item?id=42946718) - [Chrome 133 Supports DOM State-Preserving Move with moveBefore()](https://chromestatus.com/feature/5135990159835136)
* [2025-02-05, 10:05:50](https://lobste.rs/s/vmn08v/puzzmo_place_for_thoughtful_puzzles) - [Puzzmo — The place for thoughtful puzzles](https://puzzmo.com/)
* [2025-02-05, 10:01:00](https://tech.slashdot.org/story/25/02/05/038254/meta-cto-2025-make-or-break-year-for-metaverse?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Meta CTO: 2025 Make or Break Year for Metaverse](https://tech.slashdot.org/story/25/02/05/038254/meta-cto-2025-make-or-break-year-for-metaverse?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-05, 09:50:30](https://news.ycombinator.com/item?id=42946281) - [Software development topics I've changed my mind on after 10 years](https://chriskiehl.com/article/thoughts-after-10-years)
* [2025-02-05, 09:44:32](https://news.ycombinator.com/item?id=42946232) - [Go Data Structures](https://research.swtch.com/godata)
* [2025-02-05, 09:21:21](https://news.ycombinator.com/item?id=42946046) - [Carl Sagan Predicts the Decline of America (1995)](https://www.openculture.com/2025/02/carl-sagan-predicts-the-decline-of-america-unable-to-know-whats-true.html)
* [2025-02-05, 07:53:36](https://lobste.rs/s/p3tcrh/how_scale_your_model) - [How To Scale Your Model](https://jax-ml.github.io/scaling-book/)
* [2025-02-05, 07:30:59](https://news.ycombinator.com/item?id=42945146) - [GNU Make Standard Library](https://gmsl.jgc.org/)
* [2025-02-05, 07:17:00](https://soylentnews.org/article.pl?sid=25/02/04/0358217&from=rss) - [Tesla and BMW Sue European Commission Over Chinese EV Tariffs](https://soylentnews.org/article.pl?sid=25/02/04/0358217&from=rss)
* [2025-02-05, 07:01:30](https://lobste.rs/s/l9pkbz/radiant_foam) - [Radiant Foam](https://radfoam.github.io/)
* [2025-02-05, 07:00:00](https://science.slashdot.org/story/25/02/05/0530255/physicists-confirm-the-existence-of-a-third-form-of-magnetism?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Physicists Confirm The Existence of a Third Form of Magnetism](https://science.slashdot.org/story/25/02/05/0530255/physicists-confirm-the-existence-of-a-third-form-of-magnetism?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-05, 06:55:04](https://news.ycombinator.com/item?id=42944858) - [NsJail: A light-weight process isolation tool for Linux](https://nsjail.dev/)
* [2025-02-05, 06:43:43](https://lobste.rs/s/sxxchv/rewriting_slipshow_ocaml_undo_able_monad) - [Rewriting Slipshow in OCaml: The undo-able monad](https://choum.net/panglesd/undo-monad/)
* [2025-02-05, 06:04:54](https://lobste.rs/s/nlm0dn/building_voice_ai_apps_elixir_with) - [Building voice AI apps in Elixir with Membrane and Google Gemini](https://blog.swmansion.com/building-a-membrane-pipeline-to-talk-to-google-gemini-ff637fc0fe40)
* [2025-02-05, 05:50:16](https://news.ycombinator.com/item?id=42944371) - [Kagi – Introducing Fair Pricing](https://kagi.com/changelog#6155)
* [2025-02-05, 05:14:25](https://news.ycombinator.com/item?id=42944108) - [I coded a Pascal compiler for transputer as a teen in 1993](https://nanochess.org/pascal.html)
* [2025-02-05, 05:07:00](https://yro.slashdot.org/story/25/02/05/055207/usps-halts-all-packages-from-china-sending-the-ecommerce-industry-into-chaos?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [USPS Halts All Packages From China, Sending the Ecommerce Industry Into Chaos](https://yro.slashdot.org/story/25/02/05/055207/usps-halts-all-packages-from-china-sending-the-ecommerce-industry-into-chaos?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-05, 04:54:04](https://news.ycombinator.com/item?id=42943973) - [They Thought They Were Free, by Milton Mayer, an Excerpt](https://press.uchicago.edu/Misc/Chicago/511928.htm)
* [2025-02-05, 04:09:35](https://news.ycombinator.com/item?id=42943662) - [Nellie Bly](https://en.wikipedia.org/wiki/Nellie_Bly)
* [2025-02-05, 03:30:00](https://tech.slashdot.org/story/25/02/04/2243225/uk-team-invents-self-healing-road-surface-to-prevent-potholes?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [UK Team Invents Self-Healing Road Surface To Prevent Potholes](https://tech.slashdot.org/story/25/02/04/2243225/uk-team-invents-self-healing-road-surface-to-prevent-potholes?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-05, 03:00:28](https://lobste.rs/s/pwqgmz/zig_what_i_think_after_months_using_it) - [Zig; what I think after months of using it](https://strongly-typed-thoughts.net/blog/zig-2025)
* [2025-02-05, 02:35:00](https://soylentnews.org/article.pl?sid=25/02/04/0355255&from=rss) - [Medical Monitoring Machines Spotted Stealing Patient Data](https://soylentnews.org/article.pl?sid=25/02/04/0355255&from=rss)
* [2025-02-05, 01:48:08](https://lobste.rs/s/x7nhcq/framework_ships_risc_v_board_for_its_13) - [Framework ships RISC-V board for its 13\" laptops along with \"boardless\" laptop chassis](https://arstechnica.com/gadgets/2025/02/framework-laptop-expands-beyond-x86-with-its-first-ever-risc-v-based-motherboard/)
* [2025-02-05, 01:43:10](https://news.ycombinator.com/item?id=42942405) - [Suspension of inbound parcels from China and Hong Kong](https://about.usps.com/newsroom/service-alerts/international/suspension-of-inbound-parcels-from-china-and-hong-kong.htm)
* [2025-02-05, 01:06:49](https://lobste.rs/s/rdgq0m/spritely_institute_decentralized) - [Spritely Institute - Decentralized Networking Technology](https://spritely.institute/)
* [2025-02-05, 00:50:00](https://news.slashdot.org/story/25/02/04/2235222/openai-partners-with-california-state-university-system?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [OpenAI Partners With California State University System](https://news.slashdot.org/story/25/02/04/2235222/openai-partners-with-california-state-university-system?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-05, 00:10:00](https://apple.slashdot.org/story/25/02/04/2226224/apple-announces-invites-app-raises-applecare-subscription-prices-for-iphone?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Apple Announces 'Invites' App, Raises AppleCare+ Subscription Prices For iPhone](https://apple.slashdot.org/story/25/02/04/2226224/apple-announces-invites-app-raises-applecare-subscription-prices-for-iphone?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-05, 00:07:24](https://news.ycombinator.com/item?id=42941283) - [Beej's Guide to Git](https://beej.us/guide/bggit/)
* [2025-02-04, 23:58:30](https://lobste.rs/s/jtd6tb/ambsheets_spreadsheets_for_exploring) - [Ambsheets: Spreadsheets for exploring scenarios](https://www.inkandswitch.com/ambsheets/)
* [2025-02-04, 23:56:25](https://news.ycombinator.com/item?id=42941143) - [Ambsheets: Spreadsheets for Exploring Scenarios](https://www.inkandswitch.com/ambsheets/)
* [2025-02-04, 23:53:42](https://lobste.rs/s/cqyu02/compiler_ir_for_scrapscript) - [A compiler IR for Scrapscript](https://bernsteinbear.com/blog/scrapscript-ir/)
* [2025-02-04, 23:30:00](https://tech.slashdot.org/story/25/02/04/2217224/google-removes-pledge-to-not-use-ai-for-weapons-from-website?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Google Removes Pledge To Not Use AI For Weapons From Website](https://tech.slashdot.org/story/25/02/04/2217224/google-removes-pledge-to-not-use-ai-for-weapons-from-website?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-04, 23:11:38](https://news.ycombinator.com/item?id=42940553) - [Nine – seemingly impossible C64 demo](https://linusakesson.net/scene/nine/index.php)
* [2025-02-04, 22:51:36](https://news.ycombinator.com/item?id=42940257) - [What's happening inside the NIH and NSF](https://www.science.org/content/blog-post/what-s-happening-inside-nih)
* [2025-02-04, 22:50:00](https://news.slashdot.org/story/25/02/04/2119257/ai-generated-slop-is-already-in-your-public-library?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [AI-Generated Slop Is Already In Your Public Library](https://news.slashdot.org/story/25/02/04/2119257/ai-generated-slop-is-already-in-your-public-library?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-04, 22:25:32](https://news.ycombinator.com/item?id=42939862) - [Infosec 101 for Activists](https://infosecforactivists.org)
* [2025-02-04, 22:10:00](https://hardware.slashdot.org/story/25/02/04/217248/risc-v-mainboard-for-the-framework-laptop-13-is-now-available?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [RISC-V Mainboard For the Framework Laptop 13 Is Now Available](https://hardware.slashdot.org/story/25/02/04/217248/risc-v-mainboard-for-the-framework-laptop-13-is-now-available?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-04, 21:50:00](https://soylentnews.org/article.pl?sid=25/02/04/0352219&from=rss) - [Artificial Gills Unlock Long-Range Underwater Robots](https://soylentnews.org/article.pl?sid=25/02/04/0352219&from=rss)
* [2025-02-04, 21:30:00](https://yro.slashdot.org/story/25/02/04/2059206/42-billion-broadband-grant-program-may-scrap-biden-admins-preference-for-fiber?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [$42 Billion Broadband Grant Program May Scrap Biden Admin's Preference For Fiber](https://yro.slashdot.org/story/25/02/04/2059206/42-billion-broadband-grant-program-may-scrap-biden-admins-preference-for-fiber?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-04, 21:12:40](https://lobste.rs/s/quy6ev/developer_serenityos_is_challenging) - [The developer of SerenityOS is challenging the browser duopoly](https://thenextweb.com/news/serenityos-creator-building-ladybird-browser)
* [2025-02-04, 20:50:00](https://linux.slashdot.org/story/25/02/04/2047240/red-hat-plans-to-add-ai-to-fedora-and-gnome?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Red Hat Plans to Add AI to Fedora and GNOME](https://linux.slashdot.org/story/25/02/04/2047240/red-hat-plans-to-add-ai-to-fedora-and-gnome?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-04, 20:14:13](https://lobste.rs/s/eocgyx/corca_collaborative_math_editor) - [Corca: Collaborative Math Editor](https://corca.io/)
* [2025-02-04, 19:55:27](https://news.ycombinator.com/item?id=42937701) - [Open Deep Research](https://github.com/huggingface/smolagents/tree/main/examples/open_deep_research)
* [2025-02-04, 19:30:51](https://lobste.rs/s/ycbpnz/animating_rick_morty_one_pixel_at_time) - [Animating Rick and Morty One Pixel at a Time](https://danielchasehooper.com/posts/code-animated-rick/)
* [2025-02-04, 19:21:00](https://slashdot.org/story/25/02/04/1830249/amazon-king-of-online-retail-cant-seem-to-make-its-physical-stores-work?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Amazon, King of Online Retail, Can't Seem To Make Its Physical Stores Work](https://slashdot.org/story/25/02/04/1830249/amazon-king-of-online-retail-cant-seem-to-make-its-physical-stores-work?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-04, 18:41:02](https://lobste.rs/s/6cpyqq/migrating_pigweed_dev_bazel) - [Migrating pigweed.dev to Bazel](https://pigweed.dev/docs/blog/08-bazel-docgen.html)
* [2025-02-04, 18:40:55](https://news.ycombinator.com/item?id=42936723) - [WikiTok](https://wikitok.vercel.app/)
* [2025-02-04, 18:40:00](https://tech.slashdot.org/story/25/02/04/1825220/cruise-to-slash-workforce-by-nearly-50-after-gm-cuts-funding-to-robotaxi-operations?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Cruise To Slash Workforce By Nearly 50% After GM Cuts Funding To Robotaxi Operations](https://tech.slashdot.org/story/25/02/04/1825220/cruise-to-slash-workforce-by-nearly-50-after-gm-cuts-funding-to-robotaxi-operations?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-04, 18:09:00](https://lobste.rs/s/ne6efs/running_archiveteam_s_warrior) - [Running ArchiveTeam's Warrior in Kubernetes](https://gabrielsimmer.com/blog/archiveteam-warrior-kubernetes)
* [2025-02-04, 18:00:00](https://slashdot.org/story/25/02/04/1738246/panasonic-to-cut-costs-to-support-shift-into-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Panasonic To Cut Costs To Support Shift Into AI](https://slashdot.org/story/25/02/04/1738246/panasonic-to-cut-costs-to-support-shift-into-ai?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-04, 17:32:08](https://lobste.rs/s/av0ka1/fat_rand_how_many_lines_do_you_need) - [Fat Rand: How Many Lines Do You Need To Generate A Random Number?](https://lucumr.pocoo.org/2025/2/4/fat-rand/)
* [2025-02-04, 17:18:45](https://lobste.rs/s/0jknbl/roc_rewrites_compiler_zig) - [Roc rewrites the compiler in Zig](https://gist.github.com/rtfeldman/77fb430ee57b42f5f2ca973a3992532f)
* [2025-02-04, 17:08:00](https://soylentnews.org/article.pl?sid=25/02/03/1327213&from=rss) - [NASA's Returned Asteroid Samples Hold the Ingredients of Life From a Watery World](https://soylentnews.org/article.pl?sid=25/02/03/1327213&from=rss)
* [2025-02-04, 16:21:58](https://news.ycombinator.com/item?id=42934422) - [Apple Invites](https://www.apple.com/newsroom/2025/02/introducing-apple-invites-a-new-app-that-brings-people-together/)
* [2025-02-04, 15:52:01](https://lobste.rs/s/ou6ky6/big_packages_many_dependencies) - [Big Packages or Many Dependencies ](https://v5.chriskrycho.com/notes/big-packages-or-many-dependencies/)
* [2025-02-04, 15:44:21](https://news.ycombinator.com/item?id=42933840) - [America desperately needs more air traffic controllers](https://www.cnn.com/2025/02/04/business/air-traffic-controller-shortage/index.html)
* [2025-02-04, 14:27:26](https://lobste.rs/s/rgydie/decorator_jits_python_as_dsl) - [Decorator JITs - Python as a DSL](https://eli.thegreenplace.net/2025/decorator-jits-python-as-a-dsl/)
* [2025-02-04, 13:42:50](https://lobste.rs/s/wucizv/no_panic_rust_nice_technique_for_systems) - [No-Panic Rust: A Nice Technique for Systems Programming](https://blog.reverberate.org/2025/02/03/no-panic-rust.html)
* [2025-02-04, 12:23:00](https://soylentnews.org/article.pl?sid=25/02/02/1444250&from=rss) - [Fediverse Explosive Growth - 100m Posts in January](https://soylentnews.org/article.pl?sid=25/02/02/1444250&from=rss)
* [2025-02-04, 10:02:46](https://lobste.rs/s/vefy9j/how_languages_influence_each_other) - [How languages influence each other and evolve](https://thetechenabler.substack.com/p/how-languages-influence-each-other)
* [2025-02-04, 07:41:00](https://soylentnews.org/article.pl?sid=25/02/02/1338233&from=rss) - [US to Deploy Molten Salt Reactors to Turn Wastewater Into Freshwater](https://soylentnews.org/article.pl?sid=25/02/02/1338233&from=rss)
* [2025-02-04, 07:38:03](https://lobste.rs/s/gjdafu/seeking_support_after_equinix_metal) - [Seeking Support After Equinix Metal Sunsets](https://alpinelinux.org/posts/Seeking-Support-After-Equinix-Metal-Sunsets.html)
* [2025-02-04, 07:15:18](https://lobste.rs/s/vr0l4g/best_simple_system_for_now) - [Best Simple System for Now](https://dannorth.net/best-simple-system-for-now/)
* [2025-02-04, 02:56:00](https://soylentnews.org/article.pl?sid=25/02/02/141218&from=rss) - [How Does DeepSeek R1 Really Fare Against OpenAI's Best Reasoning Models?](https://soylentnews.org/article.pl?sid=25/02/02/141218&from=rss)
* [2025-02-03, 22:26:35](https://news.ycombinator.com/item?id=42924182) - [MTR: 'traceroute' and 'ping' in a single tool](https://www.bitwizard.nl/mtr/)
* [2025-02-03, 22:13:00](https://soylentnews.org/article.pl?sid=25/02/02/1354257&from=rss) - [Bug That Kills PC's Audio is Seriously Widespread Affecting Multiple Windows Versions](https://soylentnews.org/article.pl?sid=25/02/02/1354257&from=rss)
* [2025-02-03, 21:24:50](https://news.ycombinator.com/item?id=42923409) - [Earth Detecting Earth](https://www.seti.org/press-release/earth-detecting-earth)
* [2025-02-03, 17:25:00](https://soylentnews.org/article.pl?sid=25/02/02/1347234&from=rss) - [The Growing Antibiotic Resistance Problem Requires Better Policy](https://soylentnews.org/article.pl?sid=25/02/02/1347234&from=rss)
* [2025-02-03, 12:40:00](https://soylentnews.org/article.pl?sid=25/02/02/1340243&from=rss) - [About Zusie (Relay Based Computer)](https://soylentnews.org/article.pl?sid=25/02/02/1340243&from=rss)
* [2025-02-03, 12:14:03](https://news.ycombinator.com/item?id=42917396) - [Converge (YC S23) will review your YC application before you submit](https://news.ycombinator.com/item?id=42917396)
* [2025-02-03, 07:51:00](https://soylentnews.org/article.pl?sid=25/02/02/1442226&from=rss) - [The Network State Coup is Happening Right Now](https://soylentnews.org/article.pl?sid=25/02/02/1442226&from=rss)
* [2025-02-03, 07:19:29](https://news.ycombinator.com/item?id=42915786) - [Julia and JuliaHub: Advancing Innovation and Growth](https://info.juliahub.com/blog/julia-juliahub-advancing-innovation-and-growth)
* [2025-02-03, 03:07:00](https://soylentnews.org/article.pl?sid=25/02/01/1542257&from=rss) - [How One YouTuber is Trying to Poison the AI Bots Stealing Her Content](https://soylentnews.org/article.pl?sid=25/02/01/1542257&from=rss)
* [2025-02-02, 22:23:00](https://soylentnews.org/article.pl?sid=25/02/01/1439213&from=rss) - [Infosec Was Trump's Lowest Priority, But He'll Change Bigly](https://soylentnews.org/article.pl?sid=25/02/01/1439213&from=rss)
* [2025-02-02, 17:38:00](https://soylentnews.org/article.pl?sid=25/02/01/1419208&from=rss) - [Maker Resurrects Toshiba T1000 With a Raspberry Pi 4 and a Slew of Upgrades](https://soylentnews.org/article.pl?sid=25/02/01/1419208&from=rss)
* [2025-02-02, 12:55:00](https://soylentnews.org/article.pl?sid=25/02/01/1416224&from=rss) - [Trump Says Microsoft is in Contention to Buy TikTok](https://soylentnews.org/article.pl?sid=25/02/01/1416224&from=rss)
* [2025-02-02, 08:47:02](https://news.ycombinator.com/item?id=42907239) - [Calculate the number of language model tokens for a string](https://blog.mastykarz.nl/calculate-number-language-model-tokens-string/)
* [2025-02-02, 08:08:00](https://soylentnews.org/article.pl?sid=25/02/01/1414214&from=rss) - [DeepDive into DeepSeek](https://soylentnews.org/article.pl?sid=25/02/01/1414214&from=rss)
* [2025-02-02, 03:24:00](https://soylentnews.org/article.pl?sid=25/02/01/145202&from=rss) - [Fake Google Ads Trick Mac Users To Install Homebrew Malware](https://soylentnews.org/article.pl?sid=25/02/01/145202&from=rss)
* [2025-02-01, 22:42:00](https://soylentnews.org/article.pl?sid=25/02/01/1359255&from=rss) - [Phone Metadata Suddenly Not So ‘Harmless’ When It's the FBI's Data Being Harvested](https://soylentnews.org/article.pl?sid=25/02/01/1359255&from=rss)
* [2025-02-01, 22:29:11](https://news.ycombinator.com/item?id=42903107) - [How to Store and Dry Your 3D Filament: Full Guide](https://syntaxglow.com/2025/02/01/how-to-store-and-dry-your-3d-filament-a-complete-guide/)
* [2025-02-01, 17:57:00](https://soylentnews.org/article.pl?sid=25/02/01/1349238&from=rss) - [A Story About USB Floppy Drives](https://soylentnews.org/article.pl?sid=25/02/01/1349238&from=rss)
* [2025-02-01, 13:13:00](https://soylentnews.org/article.pl?sid=25/02/01/1314204&from=rss) - [Hubble's Largest Panorama Ever Showcases 200 Million Stars In The Andromeda Galaxy](https://soylentnews.org/article.pl?sid=25/02/01/1314204&from=rss)
* [2025-02-01, 08:47:33](https://news.ycombinator.com/item?id=42896918) - [I spent five years building a webapp and got my first $1 (2022)](https://codingcafe.jp/posts/signal-5yrs)
* [2025-02-01, 08:22:00](https://soylentnews.org/article.pl?sid=25/01/31/1358254&from=rss) - [FCC Chair Nixes Plan to Boost Broadband Competition in Apartment Buildings](https://soylentnews.org/article.pl?sid=25/01/31/1358254&from=rss)
* [2025-02-01, 03:37:00](https://soylentnews.org/article.pl?sid=25/01/30/227223&from=rss) - [Revival of the Pebble Smartwatch](https://soylentnews.org/article.pl?sid=25/01/30/227223&from=rss)
