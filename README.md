# [News Summary](https://kherrick.github.io/news-summary/)

## Scientific and Mathematical Advances

* [After 20 Years, Math Couple Solves Major Group Theory Problem](https://soylentnews.org/article.pl?sid=25/02/23/1133234&from=rss) - A groundbreaking solution in group theory by a mathematician couple after two decades of effort. [Comments](https://soylentnews.org/article.pl?sid=25/02/23/1133234&from=rss)

* [Unexpected Shape of Lead-208 Nucleus May Force Scientists to Reevaluate Atomic Nuclei Models](https://science.slashdot.org/story/25/02/23/0051225/unexpected-shape-of-lead-208-nucleus-may-force-scientists-to-reevaluate-atomic-nuclei-models?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Surprising discovery in nuclear physics challenges current atomic models. [Comments](https://science.slashdot.org/story/25/02/23/0051225/unexpected-shape-of-lead-208-nucleus-may-force-scientists-to-reevaluate-atomic-nuclei-models?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Technology and Infrastructure

* [DeepSeek Open Source FlashMLA – MLA Decoding Kernel for Hopper GPUs](https://github.com/deepseek-ai/FlashMLA) - A novel open-source tool for data decoding and processing on advanced GPUs. [Comments](https://news.ycombinator.com/item?id=43155023)

* [Useless High-Voltage Power Lines Risk Sparking California Fires](https://hardware.slashdot.org/story/25/02/24/0216236/useless-high-voltage-power-lines-risk-sparking-california-fires?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Investigation highlights the wildfire dangers of unused power lines in California. [Comments](https://hardware.slashdot.org/story/25/02/24/0216236/useless-high-voltage-power-lines-risk-sparking-california-fires?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Space and Astronomy

* [Firefly's Moon-Orbiting 'Blue Ghost' Lunar Lander Tracked Earth-Orbiting GPS-Type Satellites](https://science.slashdot.org/story/25/02/23/2348229/fireflys-moon-orbiting-blue-ghost-lunar-lander-tracked-earth-orbiting-gps-type-satellites?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Exploration of lunar navigation systems using GPS-like satellites for precision positioning. [Comments](https://science.slashdot.org/story/25/02/23/2348229/fireflys-moon-orbiting-blue-ghost-lunar-lander-tracked-earth-orbiting-gps-type-satellites?utm_source=rss1.0mainlinkanon&utm_medium=feed)

## Software and Programming

* [Epoch Semantic Versioning](https://antfu.me/posts/epoch-semver) - Introduces a proposal for managing software changes through this new versioning methodology. [Comments](https://lobste.rs/s/4aa2rr/epoch_semantic_versioning)

* [Emacs 30.1 released](https://lists.gnu.org/archive/html/emacs-devel/2025-02/msg00997.html) - The newest iteration of Emacs arrives with many updates and improvements. [Comments](https://lobste.rs/s/on1dfb/emacs_30_1_released)

* [Tokio + prctl = nasty bug](https://kobzol.github.io/rust/2025/02/23/tokio-plus-prctl-equals-nasty-bug.html) - A detailed bug analysis within the popular Rust programming library. [Comments](https://lobste.rs/s/zvhl39/tokio_prctl_nasty_bug)

## Design and Themed Content

* [Vietnamese Graphic Design](https://vietgd.com/) - A visual journey through the aesthetics and style in Vietnamese design. [Comments](https://news.ycombinator.com/item?id=43149266)

* [Adding Mastodon Comments to Your Blog](https://beej.us/blog/data/mastodon-comments/) - A guide on integrating Mastodon engagement widgets for dynamic blogging platforms. [Comments](https://news.ycombinator.com/item?id=43154148)

## Cultural and Technological Overlaps

* [Decades of Research Misconduct Stalled an Alzheimer's Cure](https://www.sciencefriday.com/articles/doctored-book-excerpt/) - A critical analysis of how misplaced studies delayed significant health solutions. [Comments](https://news.ycombinator.com/item?id=43151320)

* [Animated 'Avatar: the Last Airbender' Gets Sequel, Plus Two More of Netflix's Live-Action Seasons](https://entertainment.slashdot.org/story/25/02/23/2317226/animated-avatar-the-last-airbender-gets-sequel-plus-two-more-of-netflixs-live-action-seasons?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Expanded storytelling in the beloved 'Avatar' franchise. [Comments](https://entertainment.slashdot.org/story/25/02/23/2317226/animated-avatar-the-last-airbender-gets-sequel-plus-two-more-of-netflixs-live-action-seasons?utm_source=rss1.0mainlinkanon&utm_medium=feed)

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

* [2025-02-24, 03:23:00](https://lobste.rs/s/4aa2rr/epoch_semantic_versioning) - [Epoch Semantic Versioning](https://antfu.me/posts/epoch-semver)
* [2025-02-24, 03:03:00](https://soylentnews.org/article.pl?sid=25/02/23/1133234&from=rss) - [After 20 Years, Math Couple Solves Major Group Theory Problem](https://soylentnews.org/article.pl?sid=25/02/23/1133234&from=rss)
* [2025-02-24, 02:34:00](https://hardware.slashdot.org/story/25/02/24/0216236/useless-high-voltage-power-lines-risk-sparking-california-fires?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Useless High-Voltage Power Lines Risk Sparking California Fires](https://hardware.slashdot.org/story/25/02/24/0216236/useless-high-voltage-power-lines-risk-sparking-california-fires?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-24, 02:08:32](https://lobste.rs/s/zvhl39/tokio_prctl_nasty_bug) - [Tokio + prctl = nasty bug](https://kobzol.github.io/rust/2025/02/23/tokio-plus-prctl-equals-nasty-bug.html)
* [2025-02-24, 02:01:53](https://lobste.rs/s/9b7odp/macos_for_kde_users) - [MacOS for KDE Users](https://matklad.github.io/2025/02/23/macos-for-kde-users.html)
* [2025-02-24, 01:37:24](https://news.ycombinator.com/item?id=43155023) - [DeepSeek Open Source FlashMLA – MLA Decoding Kernel for Hopper GPUs](https://github.com/deepseek-ai/FlashMLA)
* [2025-02-24, 00:34:34](https://news.ycombinator.com/item?id=43154666) - [Write the post you wish you'd found](https://www.gilesthomas.com/2025/02/20250223-til-deep-dive-posts)
* [2025-02-24, 00:34:00](https://science.slashdot.org/story/25/02/23/2348229/fireflys-moon-orbiting-blue-ghost-lunar-lander-tracked-earth-orbiting-gps-type-satellites?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Firefly's Moon-Orbiting 'Blue Ghost' Lunar Lander Tracked Earth-Orbiting GPS-Type Satellites](https://science.slashdot.org/story/25/02/23/2348229/fireflys-moon-orbiting-blue-ghost-lunar-lander-tracked-earth-orbiting-gps-type-satellites?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-24, 00:09:16](https://news.ycombinator.com/item?id=43154501) - [How the UK Is Weakening Safety Worldwide](https://blog.thenewoil.org/how-the-uk-is-weakening-safety-worldwide)
* [2025-02-23, 23:59:54](https://lobste.rs/s/gxwaf0/dos_3_3_sys_com_bug_hunt) - [The DOS 3.3 SYS.COM Bug Hunt](https://www.brutman.com/Adventures_In_Code/DOS_33_SYS_Bug_Hunt/DOS_33_SYS_Bug_Hunt.html)
* [2025-02-23, 23:42:33](https://news.ycombinator.com/item?id=43154331) - [Sublinear Time Algorithms](https://people.csail.mit.edu/ronitt/sublinear.html)
* [2025-02-23, 23:23:04](https://news.ycombinator.com/item?id=43154218) - [Defragging my old Dell's UEFI NVRAM](https://artemis.sh/2025/02/22/uefi-nvram-defrag.html)
* [2025-02-23, 23:21:54](https://lobste.rs/s/ymmy0t/defragging_my_old_dell_s_uefi_nvram) - [Defragging my old Dell’s UEFI NVRAM](https://artemis.sh/2025/02/22/uefi-nvram-defrag.html)
* [2025-02-23, 23:19:00](https://entertainment.slashdot.org/story/25/02/23/2317226/animated-avatar-the-last-airbender-gets-sequel-plus-two-more-of-netflixs-live-action-seasons?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Animated 'Avatar: the Last Airbender' Gets Sequel, Plus Two More of Netflix's Live-Action Seasons](https://entertainment.slashdot.org/story/25/02/23/2317226/animated-avatar-the-last-airbender-gets-sequel-plus-two-more-of-netflixs-live-action-seasons?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-23, 23:12:46](https://news.ycombinator.com/item?id=43154148) - [Adding Mastodon Comments to Your Blog](https://beej.us/blog/data/mastodon-comments/)
* [2025-02-23, 22:37:57](https://news.ycombinator.com/item?id=43153901) - [Tokio and Prctl = Nasty Bug](https://kobzol.github.io/rust/2025/02/23/tokio-plus-prctl-equals-nasty-bug.html)
* [2025-02-23, 22:26:01](https://lobste.rs/s/6hp9k7/memory_hell) - [Memory hell](https://trynova.dev/blog/memory-hell)
* [2025-02-23, 22:14:00](https://soylentnews.org/article.pl?sid=25/02/22/1716217&from=rss) - [NVidia to Consume 77% of Wafers Used for AI Processors in 2025](https://soylentnews.org/article.pl?sid=25/02/22/1716217&from=rss)
* [2025-02-23, 22:06:09](https://news.ycombinator.com/item?id=43153662) - [Partnering with the Shawnee Tribe for Civilization VII](https://civilization.2k.com/civ-vii/news/civilization-vii-shawnee-tribe-partnership/)
* [2025-02-23, 21:55:00](https://hardware.slashdot.org/story/25/02/23/2152220/robot-umpires-come-to-major-league-baseball-spring-training-games?utm_source=rss1.0mainlinkanon&utm_medium=feed) - ['Robot' Umpires Come to Major League Baseball (Spring Training) Games](https://hardware.slashdot.org/story/25/02/23/2152220/robot-umpires-come-to-major-league-baseball-spring-training-games?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-23, 21:11:44](https://news.ycombinator.com/item?id=43153262) - [Bitwarden Authenticator](https://bitwarden.com/products/authenticator/)
* [2025-02-23, 20:36:10](https://lobste.rs/s/35gepf/building_roottrees_are_dead) - [Building The Roottrees are Dead](https://eviltrout.com/2025/01/27/building-the-roottrees.html)
* [2025-02-23, 20:34:00](https://hardware.slashdot.org/story/25/02/23/1919200/is-the-ai-boom-leading-to-more-natural-gas-powered-utilities?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Is the AI Boom Leading to More Natural Gas-Powered Utilities?](https://hardware.slashdot.org/story/25/02/23/1919200/is-the-ai-boom-leading-to-more-natural-gas-powered-utilities?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-23, 20:05:49](https://news.ycombinator.com/item?id=43152704) - [Show HN: Jq-Like Tool for Markdown](https://github.com/yshavit/mdq)
* [2025-02-23, 19:53:03](https://news.ycombinator.com/item?id=43152587) - [European word translator: an interactive map showing words in over 30 languages](https://ukdataexplorer.com/european-translator/)
* [2025-02-23, 19:34:00](https://slashdot.org/story/25/02/23/1746247/richard-dawkins-asks-chatgpt-if-its-conscious?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Richard Dawkins Asks ChatGPT If It's Conscious](https://slashdot.org/story/25/02/23/1746247/richard-dawkins-asks-chatgpt-if-its-conscious?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-23, 18:34:00](https://yro.slashdot.org/story/25/02/23/1651227/angry-workers-use-ai-to-bombard-businesses-with-employment-lawsuits?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Angry Workers Use AI to Bombard Businesses With Employment Lawsuits](https://yro.slashdot.org/story/25/02/23/1651227/angry-workers-use-ai-to-bombard-businesses-with-employment-lawsuits?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-23, 18:08:46](https://lobste.rs/s/on1dfb/emacs_30_1_released) - [Emacs 30.1 released](https://lists.gnu.org/archive/html/emacs-devel/2025-02/msg00997.html)
* [2025-02-23, 17:46:09](https://news.ycombinator.com/item?id=43151320) - [Decades of Research Misconduct Stalled an Alzheimer's Cure](https://www.sciencefriday.com/articles/doctored-book-excerpt/)
* [2025-02-23, 17:43:34](https://news.ycombinator.com/item?id=43151294) - [WhiteSur: macOS-like theme for GTK desktops](https://github.com/vinceliuice/WhiteSur-gtk-theme)
* [2025-02-23, 17:37:00](https://soylentnews.org/politics/article.pl?sid=25/02/22/1638251&from=rss) - [Trump to Introduce 25% and 'Higher' Tariff on Imported Semiconductors but the Timing is Unclear](https://soylentnews.org/politics/article.pl?sid=25/02/22/1638251&from=rss)
* [2025-02-23, 17:34:00](https://linux.slashdot.org/story/25/02/22/0543255/greg-kroah-hartman-supports-rust-in-the-kernel?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Greg Kroah-Hartman Supports Rust in the Kernel](https://linux.slashdot.org/story/25/02/22/0543255/greg-kroah-hartman-supports-rust-in-the-kernel?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-23, 17:16:14](https://lobste.rs/s/w2jpto/removing_jeff_bezos_from_my_bed) - [Removing Jeff Bezos From My Bed](https://trufflesecurity.com/blog/removing-jeff-bezos-from-my-bed)
* [2025-02-23, 17:07:32](https://lobste.rs/s/zzpim9/war_rooms_vs_deep_investigations) - [War rooms vs. deep investigations](https://rachelbythebay.com/w/2025/02/22/war/)
* [2025-02-23, 17:05:22](https://lobste.rs/s/9wmvvp/three_questions_about_apple_encryption_u) - [Three questions about Apple, encryption, and the U.K](https://blog.cryptographyengineering.com/2025/02/23/three-questions-about-apple-encryption-and-the-u-k/)
* [2025-02-23, 17:00:51](https://news.ycombinator.com/item?id=43150885) - [PropRise (YC S23) Is Hiring Engineer #1](https://www.ycombinator.com/companies/proprise/jobs/ppipLUK-founding-engineer)
* [2025-02-23, 16:34:00](https://tech.slashdot.org/story/25/02/23/067249/mozilla-wants-to-expand-from-firefox-to-open-source-ai-and-privacy-respecting-ads?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Mozilla Wants to Expand from Firefox to Open-Source AI and Privacy-Respecting Ads](https://tech.slashdot.org/story/25/02/23/067249/mozilla-wants-to-expand-from-firefox-to-open-source-ai-and-privacy-respecting-ads?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-23, 16:08:51](https://lobste.rs/s/ny2s9f/openbsd_innovations) - [OpenBSD: Innovations](https://www.openbsd.org/innovations.html)
* [2025-02-23, 16:03:13](https://news.ycombinator.com/item?id=43150217) - [Ultima VII: Revisited](https://www.u7revisited.com/)
* [2025-02-23, 15:34:00](https://science.slashdot.org/story/25/02/23/0654242/elon-musk-urges-deorbiting-the-international-space-station-as-soon-as-possible?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Elon Musk Urges Deorbiting the International Space Station 'As Soon as Possible'](https://science.slashdot.org/story/25/02/23/0654242/elon-musk-urges-deorbiting-the-international-space-station-as-soon-as-possible?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-23, 14:53:42](https://news.ycombinator.com/item?id=43149648) - [Pee If You Want to Go Deeper (2021)](https://peeifyouwanttogofaster.com/2021/05/24/pee-if-you-want-to-go-deeper/)
* [2025-02-23, 14:45:33](https://lobste.rs/s/369gwi/calling_private_methods_without_losing) - [Calling private methods without losing sleep at night](https://justin.searls.co/posts/calling-private-methods-without-losing-sleep-at-night/)
* [2025-02-23, 14:00:25](https://news.ycombinator.com/item?id=43149266) - [Vietnamese Graphic Design](https://vietgd.com/)
* [2025-02-23, 13:24:35](https://lobste.rs/s/d51owo/vcmi_open_source_engine_for_heroes_might) - [vcmi: Open-source engine for Heroes of Might and Magic III](https://github.com/vcmi/vcmi)
* [2025-02-23, 13:22:21](https://lobste.rs/s/xv210z/why_are_qr_codes_with_capital_letters) - [Why are QR Codes with capital letters smaller than QR codes with lower-case letters?](https://shkspr.mobi/blog/2025/02/why-are-qr-codes-with-capital-letters-smaller-than-qr-codes-with-lower-case-letters/)
* [2025-02-23, 12:55:00](https://soylentnews.org/article.pl?sid=25/02/22/1636233&from=rss) - [Electric Truck-Maker Nikola Falls Into Bankruptcy Joining a Procession of Failed EV Startups](https://soylentnews.org/article.pl?sid=25/02/22/1636233&from=rss)
* [2025-02-23, 12:34:00](https://science.slashdot.org/story/25/02/23/0051225/unexpected-shape-of-lead-208-nucleus-may-force-scientists-to-reevaluate-atomic-nuclei-models?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Unexpected Shape of Lead-208 Nucleus May Force Scientists to Reevaluate Atomic Nuclei Models](https://science.slashdot.org/story/25/02/23/0051225/unexpected-shape-of-lead-208-nucleus-may-force-scientists-to-reevaluate-atomic-nuclei-models?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-23, 12:10:33](https://lobste.rs/s/2asryi/possibly_one_step_towards_named) - [Possibly one step towards named arguments in Rust (2020)](https://yoric.github.io/post/rust-named-arguments/)
* [2025-02-23, 12:01:56](https://news.ycombinator.com/item?id=43148683) - [War Rooms vs. Deep Investigations](https://rachelbythebay.com/w/2025/02/22/war/)
* [2025-02-23, 11:03:37](https://news.ycombinator.com/item?id=43148438) - [But good sir, what is electricity?](https://lcamtuf.substack.com/p/but-good-sir-what-is-electricity)
* [2025-02-23, 10:10:56](https://lobste.rs/s/mx9uqy/microsoft_makes_more_their_directx) - [Microsoft makes more of their DirectX compiler code open-source](https://www.phoronix.com/news/DirectXShaderCompiler-2025)
* [2025-02-23, 10:04:00](https://soylentnews.org/meta/article.pl?sid=25/02/21/1425224&from=rss) - [Adoption of Site Documentation - THIS IS THE VOTE - RESTORED](https://soylentnews.org/meta/article.pl?sid=25/02/21/1425224&from=rss)
* [2025-02-23, 08:34:00](https://news.slashdot.org/story/25/02/23/0529220/amazon-is-killing-the-ability-to-download-ebooks-to-your-computer?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Amazon Is Killing the Ability to Download eBooks to Your Computer](https://news.slashdot.org/story/25/02/23/0529220/amazon-is-killing-the-ability-to-download-ebooks-to-your-computer?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-23, 08:18:15](https://news.ycombinator.com/item?id=43147698) - [Half-Life](https://www.filfre.net/2024/12/half-life/)
* [2025-02-23, 08:05:00](https://soylentnews.org/article.pl?sid=25/02/22/1634220&from=rss) - [Humane's AI Pin is No More and Owners are Left With Nothing](https://soylentnews.org/article.pl?sid=25/02/22/1634220&from=rss)
* [2025-02-23, 05:34:00](https://hardware.slashdot.org/story/25/02/23/039220/lithium-batteries-reignited-tuesday-at-the-moss-landing-power-plant-fire-site?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Lithium Batteries Reignited Tuesday at the Moss Landing Power Plant Fire Site](https://hardware.slashdot.org/story/25/02/23/039220/lithium-batteries-reignited-tuesday-at-the-moss-landing-power-plant-fire-site?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-23, 03:24:00](https://soylentnews.org/article.pl?sid=25/02/22/1627256&from=rss) - [The Odds of a City-Killer Asteroid Impact in 2032 Keep Rising](https://soylentnews.org/article.pl?sid=25/02/22/1627256&from=rss)
* [2025-02-23, 03:22:04](https://news.ycombinator.com/item?id=43146155) - [Thailand to Cut Power to Myanmar Scam Hubs](https://bangkoklocal.info/2025/02/05/thailand-to-cut-power-to-myanmar-scam-hubs/)
* [2025-02-23, 02:56:03](https://lobste.rs/s/qigwnx/how_we_built_vr_headset_sees_people) - [How we built a VR Headset that sees people through walls. (Treehacks ‘25)](https://0xredj.medium.com/how-we-built-a-vr-headset-that-sees-people-through-walls-treehacks-25-e517cb805b9c)
* [2025-02-23, 02:34:00](https://it.slashdot.org/story/25/02/23/0034221/ai-may-not-impact-tech-sector-employment-projects-us-department-of-labor?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [AI May Not Impact Tech-Sector Employment, Projects US Department of Labor](https://it.slashdot.org/story/25/02/23/0034221/ai-may-not-impact-tech-sector-employment-projects-us-department-of-labor?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-23, 02:25:51](https://news.ycombinator.com/item?id=43145753) - [Making any integer with four 2s](https://eli.thegreenplace.net/2025/making-any-integer-with-four-2s/)
* [2025-02-23, 02:10:12](https://lobste.rs/s/ocxaqf/new_math_library_for_ada_neosimd) - [A new math library for Ada - NeoSIMD](https://blog.adacore.com/a-new-math-library-for-ada-neo-simd)
* [2025-02-22, 23:30:34](https://lobste.rs/s/nlv92i/ffmpeg_school_assembly_language) - [The FFmpeg School of Assembly Language](https://github.com/FFmpeg/asm-lessons/blob/main/lesson_01/index.md)
* [2025-02-22, 23:03:00](https://yro.slashdot.org/story/25/02/22/230253/will-consumer-data-collection-lead-to-algorithm-adjusted-surveillance-pricing?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Will Consumer Data Collection Lead to Algorithm-Adjusted 'Surveillance Pricing'?](https://yro.slashdot.org/story/25/02/22/230253/will-consumer-data-collection-lead-to-algorithm-adjusted-surveillance-pricing?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-22, 22:41:39](https://lobste.rs/s/ctpdvb/vine_programming_language_based_on) - [Vine: A programming language based on Interaction Nets](https://vine.dev/)
* [2025-02-22, 22:40:00](https://soylentnews.org/article.pl?sid=25/02/22/1622206&from=rss) - [HP  Deliberately Adds 15 Minutes Wait Time for Support Calls](https://soylentnews.org/article.pl?sid=25/02/22/1622206&from=rss)
* [2025-02-22, 17:55:00](https://soylentnews.org/article.pl?sid=25/02/21/056231&from=rss) - [Webcomic Author AndyOh of TMI-Comic Has Died](https://soylentnews.org/article.pl?sid=25/02/21/056231&from=rss)
* [2025-02-22, 17:13:17](https://lobste.rs/s/bjngsz/llm_commit_plugin_for_llm_generates) - [llm-commit: A plugin for llm that generates commit messages](https://github.com/GNtousakis/llm-commit)
* [2025-02-22, 17:03:42](https://lobste.rs/s/n9fhi8/1_5b_bybit_hack_era_operational_security) - [The $1.5B Bybit Hack: The Era of Operational Security Failures Has Arrived](https://blog.trailofbits.com/2025/02/21/the-1.5b-bybit-hack-the-era-of-operational-security-failures-has-arrived/)
* [2025-02-22, 16:40:38](https://lobste.rs/s/fgzitm/bookmarklets_custom_url_schemes_are) - [Bookmarklets (and Custom URL Schemes) Are Criminally Underrated](https://silly.business/blog/bookmarklets-and-custom-url-schemes-are-criminally-underrated/)
* [2025-02-22, 16:06:49](https://lobste.rs/s/qu6kay/solving_jit_calculator_challenge) - [Solving the JIT calculator challenge](https://ochagavia.nl/blog/solving-the-jit-calculator-challenge/)
* [2025-02-22, 13:14:00](https://soylentnews.org/article.pl?sid=25/02/21/055211&from=rss) - [Google's New AI Generates Hypotheses for Researchers](https://soylentnews.org/article.pl?sid=25/02/21/055211&from=rss)
* [2025-02-22, 09:44:29](https://news.ycombinator.com/item?id=43137586) - [Why Clojure?](https://gaiwan.co/blog/why-clojure/)
* [2025-02-22, 08:31:00](https://soylentnews.org/article.pl?sid=25/02/21/0455231&from=rss) - [Gnome 48 Goes Into Beta, Should Launch in a Month](https://soylentnews.org/article.pl?sid=25/02/21/0455231&from=rss)
* [2025-02-22, 03:48:00](https://soylentnews.org/article.pl?sid=25/02/21/0429228&from=rss) - [DRAM and NAND Prices Are Expected to Rise in the Second Half of 2025](https://soylentnews.org/article.pl?sid=25/02/21/0429228&from=rss)
* [2025-02-22, 00:03:58](https://news.ycombinator.com/item?id=43134673) - [Orchid's nutrient theft from fungi shows photosynthesis-parasitism continuum](https://phys.org/news/2025-02-orchid-nutrient-theft-fungi-photosynthesis.html)
* [2025-02-21, 23:01:00](https://soylentnews.org/article.pl?sid=25/02/20/181218&from=rss) - [12VHPWR Adapters Sporting Heatsinks and Thermal Pads Show How Problematic the Connector Is](https://soylentnews.org/article.pl?sid=25/02/20/181218&from=rss)
* [2025-02-21, 22:22:59](https://news.ycombinator.com/item?id=43133772) - [Aqueous-based recycling of perovskite photovoltaics](https://www.nature.com/articles/s41586-024-08408-7)
* [2025-02-21, 18:17:00](https://soylentnews.org/article.pl?sid=25/02/20/169239&from=rss) - [Intel's Head of Datacenter and AI Unit Leaves to Lead Nokia](https://soylentnews.org/article.pl?sid=25/02/20/169239&from=rss)
* [2025-02-21, 14:20:00](https://soylentnews.org/meta/article.pl?sid=25/02/21/1414222&from=rss) - [Soylent Update - Adoption of Proposed Documents - How the Vote Will be Managed](https://soylentnews.org/meta/article.pl?sid=25/02/21/1414222&from=rss)
* [2025-02-21, 13:32:00](https://soylentnews.org/article.pl?sid=25/02/20/165216&from=rss) - [What Would Happen If a (Small) Black Hole Passed Through Your Body ?](https://soylentnews.org/article.pl?sid=25/02/20/165216&from=rss)
* [2025-02-21, 07:44:00](https://soylentnews.org/article.pl?sid=25/02/20/137208&from=rss) - [A Single Protein May Have Helped Shape the Emergence of Spoken Language](https://soylentnews.org/article.pl?sid=25/02/20/137208&from=rss)
* [2025-02-21, 07:12:17](https://news.ycombinator.com/item?id=43124902) - ['Indiana Jones' jailbreak approach highlights vulnerabilities of existing LLMs](https://techxplore.com/news/2025-02-indiana-jones-jailbreak-approach-highlights.html)
* [2025-02-21, 02:59:00](https://soylentnews.org/article.pl?sid=25/02/20/131244&from=rss) - [Burning in Woman's Legs Turned Out to be Slug Parasites Migrating to Her Brain](https://soylentnews.org/article.pl?sid=25/02/20/131244&from=rss)
* [2025-02-21, 00:25:17](https://news.ycombinator.com/item?id=43122473) - [Ara Agui Nakajima DCT compression algorithm](https://leetarxiv.substack.com/p/aan-discrete-cosine-transform-paper)
* [2025-02-20, 22:12:00](https://soylentnews.org/article.pl?sid=25/02/20/1255237&from=rss) - [10 Years on After 'Data and Goliath' Warned of Data Collection](https://soylentnews.org/article.pl?sid=25/02/20/1255237&from=rss)
* [2025-02-20, 18:49:29](https://news.ycombinator.com/item?id=43118514) - [Show HN: Benchmarking VLMs vs. Traditional OCR](https://getomni.ai/ocr-benchmark)
* [2025-02-20, 17:27:00](https://soylentnews.org/article.pl?sid=25/02/20/1249208&from=rss) - [Scientists Use Crystals to Cram Terabytes of Data Into Millimeter-Sized Memory](https://soylentnews.org/article.pl?sid=25/02/20/1249208&from=rss)
* [2025-02-20, 12:45:00](https://soylentnews.org/article.pl?sid=25/02/20/1244255&from=rss) - [Noise-Cancelling Headphones Possible Source of Hearing Problems](https://soylentnews.org/article.pl?sid=25/02/20/1244255&from=rss)
* [2025-02-20, 07:58:47](https://news.ycombinator.com/item?id=43112187) - [It is not a compiler error. It is never a compiler error (2017)](https://blog.plover.com/2017/11/12/)
* [2025-02-20, 07:53:00](https://soylentnews.org/article.pl?sid=25/02/17/1613236&from=rss) - [Scientists Just Discovered ‘Quipu,’ the New Largest Structure in Our Cosmos](https://soylentnews.org/article.pl?sid=25/02/17/1613236&from=rss)
* [2025-02-20, 05:28:07](https://news.ycombinator.com/item?id=43111417) - [LeetCode but You Can Force People to Code in Light Mode](https://www.beatcode.dev/)
* [2025-02-20, 03:10:00](https://soylentnews.org/article.pl?sid=25/02/19/033237&from=rss) - [Arm Poaching Talent to Produce Their Own Chips](https://soylentnews.org/article.pl?sid=25/02/19/033237&from=rss)
