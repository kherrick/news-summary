# [News Summary](https://kherrick.github.io/news-summary/)

## Space, Technology, and AI Innovations

* [Man unexpectedly cured of HIV after stem cell transplant](https://www.newscientist.com/article/2506595-man-unexpectedly-cured-of-hiv-after-stem-cell-transplant/) ([comments](https://news.ycombinator.com/item?id=46119699))

* [Apple Releases Open Weights Video Model](https://starflow-v.github.io) ([comments](https://news.ycombinator.com/item?id=46117802))

* [Billion-Dollar AI Chip Deal Between Google and Meta Could be on the Cards](https://soylentnews.org/article.pl?sid=25/12/01/0350249&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/12/01/0350249&amp;from=rss))

* [Gitmal - a static pages generator for Git repos](https://github.com/antonmedv/gitmal) ([comments](https://lobste.rs/s/c8bzzd/gitmal_static_pages_generator_for_git))

* [Decreasing Certificate Lifetimes to 45 Days](https://letsencrypt.org/2025/12/02/from-90-to-45.html) ([comments](https://lobste.rs/s/r2bamx/decreasing_certificate_lifetimes_45))

## Science and Future Tech Concepts

* [Mind-Reading Devices Can Now Predict Preconscious Thoughts: Is It Time to Worry?](https://soylentnews.org/article.pl?sid=25/12/01/043228&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=25/12/01/043228&amp;from=rss))

* [New AI slop signal: code blocks with weird indentation](https://xeiaso.net/notes/2025/slop-signal-indentation/) ([comments](https://lobste.rs/s/1naccs/new_ai_slop_signal_code_blocks_with_weird))

* [PtrHash: Minimal Perfect Hashing at RAM Throughput](https://curiouscoding.nl/posts/ptrhash/) ([comments](https://lobste.rs/s/lfnjvn/ptrhash_minimal_perfect_hashing_at_ram))

* [Reverse math shows why hard problems are hard](https://www.quantamagazine.org/reverse-mathematics-illuminates-why-hard-problems-are-hard-20251201/) ([comments](https://news.ycombinator.com/item?id=46116724))

* [Russian Launch Site Mishap Shows Perilous State of Storied Space Program](https://science.slashdot.org/story/25/12/02/0110257/russian-launch-site-mishap-shows-perilous-state-of-storied-space-program?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://science.slashdot.org/story/25/12/02/0110257/russian-launch-site-mishap-shows-perilous-state-of-storied-space-program?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

## Unique Cultural and Social Developments

* [A series of vignettes from my childhood and early career](https://www.jasonscheirer.com/weblog/vignettes/) ([comments](https://news.ycombinator.com/item?id=46120549))

* [Smartphones At Age 12 Linked To Worse Health](https://mobile.slashdot.org/story/25/12/02/008223/smartphones-at-age-12-linked-to-worse-health?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://mobile.slashdot.org/story/25/12/02/008223/smartphones-at-age-12-linked-to-worse-health?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [What will enter the public domain in 2026?](https://publicdomainreview.org/features/entering-the-public-domain/2026/) ([comments](https://news.ycombinator.com/item?id=46117112))

* [Frequently Asked Unicycling Questions](https://vale.rocks/posts/unicycle-faq) ([comments](https://news.ycombinator.com/item?id=46117900))

* [Russia Still Using Black Market Starlink Terminals On Its Drones](https://science.slashdot.org/story/25/12/02/0125248/russia-still-using-black-market-starlink-terminals-on-its-drones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://science.slashdot.org/story/25/12/02/0125248/russia-still-using-black-market-starlink-terminals-on-its-drones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

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

* [2025-12-02, 12:30:19](https://lobste.rs/s/dngk6l/go_proposal_type_safe_error_checking) - [Go proposal: Type-safe error checking](https://antonz.org/accepted/errors-astype/)
* [2025-12-02, 12:28:34](https://news.ycombinator.com/item?id=46120549) - [A series of vignettes from my childhood and early career](https://www.jasonscheirer.com/weblog/vignettes/)
* [2025-12-02, 11:40:00](https://soylentnews.org/article.pl?sid=25/12/01/043228&amp;from=rss) - [Mind-Reading Devices Can Now Predict Preconscious Thoughts: Is It Time to Worry?](https://soylentnews.org/article.pl?sid=25/12/01/043228&amp;from=rss)
* [2025-12-02, 11:39:18](https://lobste.rs/s/1naccs/new_ai_slop_signal_code_blocks_with_weird) - [New AI slop signal: code blocks with weird indentation](https://xeiaso.net/notes/2025/slop-signal-indentation/)
* [2025-12-02, 11:31:23](https://lobste.rs/s/2ucpgd/addressing_adding_situation) - [Addressing the adding situation](https://xania.org/202512/02-adding-integers)
* [2025-12-02, 11:30:29](https://news.ycombinator.com/item?id=46120181) - [Addressing the adding situation](https://xania.org/202512/02-adding-integers)
* [2025-12-02, 10:20:34](https://news.ycombinator.com/item?id=46119699) - [Man unexpectedly cured of HIV after stem cell transplant](https://www.newscientist.com/article/2506595-man-unexpectedly-cured-of-hiv-after-stem-cell-transplant/)
* [2025-12-02, 10:00:00](https://science.slashdot.org/story/25/12/02/0125248/russia-still-using-black-market-starlink-terminals-on-its-drones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russia Still Using Black Market Starlink Terminals On Its Drones](https://science.slashdot.org/story/25/12/02/0125248/russia-still-using-black-market-starlink-terminals-on-its-drones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-02, 09:51:42](https://news.ycombinator.com/item?id=46119500) - [Advent of Compiler Optimisations 2025](https://xania.org/202511/advent-of-compiler-optimisation)
* [2025-12-02, 09:34:34](https://lobste.rs/s/lfnjvn/ptrhash_minimal_perfect_hashing_at_ram) - [PtrHash: Minimal Perfect Hashing at RAM Throughput](https://curiouscoding.nl/posts/ptrhash/)
* [2025-12-02, 09:11:41](https://news.ycombinator.com/item?id=46119214) - [Comparing AWS Lambda ARM64 vs. x86_64 Performance Across Runtimes in Late 2025](https://chrisebert.net/comparing-aws-lambda-arm64-vs-x86_64-performance-across-multiple-runtimes-in-late-2025/)
* [2025-12-02, 07:46:47](https://news.ycombinator.com/item?id=46118722) - [How Brian Eno Created Ambient 1: Music for Airports (2019)](https://reverbmachine.com/blog/deconstructing-brian-eno-music-for-airports/)
* [2025-12-02, 07:01:03](https://news.ycombinator.com/item?id=46118432) - [Rootless Pings in Rust](https://bou.ke/blog/rust-ping/)
* [2025-12-02, 07:00:11](https://lobste.rs/s/r2bamx/decreasing_certificate_lifetimes_45) - [Decreasing Certificate Lifetimes to 45 Days](https://letsencrypt.org/2025/12/02/from-90-to-45.html)
* [2025-12-02, 07:00:00](https://science.slashdot.org/story/25/12/02/0110257/russian-launch-site-mishap-shows-perilous-state-of-storied-space-program?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Russian Launch Site Mishap Shows Perilous State of Storied Space Program](https://science.slashdot.org/story/25/12/02/0110257/russian-launch-site-mishap-shows-perilous-state-of-storied-space-program?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-02, 06:57:00](https://soylentnews.org/article.pl?sid=25/12/01/0350249&amp;from=rss) - [Billion-Dollar AI Chip Deal Between Google and Meta Could be on the Cards](https://soylentnews.org/article.pl?sid=25/12/01/0350249&amp;from=rss)
* [2025-12-02, 06:26:01](https://lobste.rs/s/c8bzzd/gitmal_static_pages_generator_for_git) - [Gitmal - a static pages generator for Git repos](https://github.com/antonmedv/gitmal)
* [2025-12-02, 05:40:39](https://news.ycombinator.com/item?id=46117993) - [Why Replicate is joining Cloudflare](https://blog.cloudflare.com/why-replicate-joining-cloudflare/)
* [2025-12-02, 05:27:18](https://news.ycombinator.com/item?id=46117900) - [Frequently Asked Unicycling Questions](https://vale.rocks/posts/unicycle-faq)
* [2025-12-02, 05:13:00](https://mobile.slashdot.org/story/25/12/02/0511211/samsung-debuts-its-first-trifold-phone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Samsung Debuts Its First Trifold Phone](https://mobile.slashdot.org/story/25/12/02/0511211/samsung-debuts-its-first-trifold-phone?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-02, 05:10:01](https://news.ycombinator.com/item?id=46117802) - [Apple Releases Open Weights Video Model](https://starflow-v.github.io)
* [2025-12-02, 03:30:00](https://developers.slashdot.org/story/25/12/02/0049229/we-built-a-database-of-290000-english-medieval-soldiers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;We Built a Database of 290,000 English Medieval Soldiers&apos;](https://developers.slashdot.org/story/25/12/02/0049229/we-built-a-database-of-290000-english-medieval-soldiers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-02, 03:23:10](https://news.ycombinator.com/item?id=46117112) - [What will enter the public domain in 2026?](https://publicdomainreview.org/features/entering-the-public-domain/2026/)
* [2025-12-02, 03:06:53](https://lobste.rs/s/avpdkm/easiest_way_build_type_checker) - [The Easiest Way to Build a Type Checker](https://jimmyhmiller.com/easiest-way-to-build-type-checker)
* [2025-12-02, 02:35:47](https://news.ycombinator.com/item?id=46116724) - [Reverse math shows why hard problems are hard](https://www.quantamagazine.org/reverse-mathematics-illuminates-why-hard-problems-are-hard-20251201/)
* [2025-12-02, 02:12:14](https://news.ycombinator.com/item?id=46116567) - [After Windows Update, Password icon invisible, click where it used to be](https://support.microsoft.com/en-us/topic/august-29-2025-kb5064081-os-build-26100-5074-preview-3f9eb9e1-72ca-4b42-af97-39aace788d93)
* [2025-12-02, 02:09:00](https://soylentnews.org/article.pl?sid=25/12/01/0343223&amp;from=rss) - [Ukraine First Country in Europe to Get Starlink Satellite Phone Service](https://soylentnews.org/article.pl?sid=25/12/01/0343223&amp;from=rss)
* [2025-12-02, 01:25:00](https://slashdot.org/story/25/12/02/0042253/swiss-illegal-cryptocurrency-mixing-service-shut-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Swiss Illegal Cryptocurrency Mixing Service Shut Down](https://slashdot.org/story/25/12/02/0042253/swiss-illegal-cryptocurrency-mixing-service-shut-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-02, 00:45:00](https://mobile.slashdot.org/story/25/12/02/008223/smartphones-at-age-12-linked-to-worse-health?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Smartphones At Age 12 Linked To Worse Health](https://mobile.slashdot.org/story/25/12/02/008223/smartphones-at-age-12-linked-to-worse-health?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-02, 00:25:00](https://lobste.rs/s/azyiij/freebsd_15_0_release_announcement) - [FreeBSD 15.0-RELEASE Announcement](https://www.freebsd.org/releases/15.0R/announce/)
* [2025-12-02, 00:23:00](https://apple.slashdot.org/story/25/12/02/0021253/apple-ai-chief-retiring-after-siri-failure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple AI Chief Retiring After Siri Failure](https://apple.slashdot.org/story/25/12/02/0021253/apple-ai-chief-retiring-after-siri-failure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-02, 00:02:00](https://yro.slashdot.org/story/25/12/01/2249209/flock-uses-overseas-gig-workers-to-build-its-surveillance-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Flock Uses Overseas Gig Workers To Build Its Surveillance AI](https://yro.slashdot.org/story/25/12/01/2249209/flock-uses-overseas-gig-workers-to-build-its-surveillance-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-01, 23:37:22](https://lobste.rs/s/fkt2is/claude_4_5_opus_soul_document) - [Claude 4.5 Opus&apos; Soul Document](https://www.lesswrong.com/posts/vpNG99GhbBoLov9og/claude-4-5-opus-soul-document)
* [2025-12-01, 23:20:00](https://tech.slashdot.org/story/25/12/01/2239244/austrias-rebel-nuns-refuse-to-give-up-instagram-to-stay-in-their-convent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Austria&apos;s Rebel Nuns Refuse To Give Up Instagram To Stay In Their Convent](https://tech.slashdot.org/story/25/12/01/2239244/austrias-rebel-nuns-refuse-to-give-up-instagram-to-stay-in-their-convent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-01, 23:16:00](https://lobste.rs/s/3mijhp/complex_end_end_tests_using_guix_g) - [Complex end-to-end tests using Guix G-expressions](https://systemreboot.net/post/complex-end-to-end-tests-using-guix-g-expressions.html)
* [2025-12-01, 22:40:00](https://news.slashdot.org/story/25/12/01/2224216/zipcar-to-end-uk-operations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Zipcar To End UK Operations](https://news.slashdot.org/story/25/12/01/2224216/zipcar-to-end-uk-operations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-01, 22:00:00](https://yro.slashdot.org/story/25/12/01/2158251/koreas-coupang-says-data-breach-exposed-nearly-34-million-customers-personal-information?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Korea&apos;s Coupang Says Data Breach Exposed Nearly 34 Million Customers&apos; Personal Information](https://yro.slashdot.org/story/25/12/01/2158251/koreas-coupang-says-data-breach-exposed-nearly-34-million-customers-personal-information?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-01, 21:42:59](https://lobste.rs/s/xamzjw/paged_out_call_for_pages) - [Paged Out - Call for pages](https://pagedout.institute/?page=cfp.php)
* [2025-12-01, 21:26:00](https://soylentnews.org/article.pl?sid=25/12/01/0335217&amp;from=rss) - [NTSB Finds Root Cause of Container Ship Hitting Baltimore Bridge](https://soylentnews.org/article.pl?sid=25/12/01/0335217&amp;from=rss)
* [2025-12-01, 21:20:00](https://yro.slashdot.org/story/25/12/01/1740216/new-york-now-requires-retailers-to-tell-you-when-ai-sets-your-price?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New York Now Requires Retailers To Tell You When AI Sets Your Price](https://yro.slashdot.org/story/25/12/01/1740216/new-york-now-requires-retailers-to-tell-you-when-ai-sets-your-price?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-01, 21:03:23](https://lobste.rs/s/4wqk4q/benchmarking_read_latency_aws_s3_s3) - [Benchmarking read latency of AWS S3, S3 Express, EBS and Instance store](https://nixiesearch.substack.com/p/benchmarking-read-latency-of-aws)
* [2025-12-01, 20:41:00](https://news.slashdot.org/story/25/12/01/1724252/singapore-extends-secondary-school-smartphone-ban-to-cover-entire-school-day?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Singapore Extends Secondary School Smartphone Ban To Cover Entire School Day](https://news.slashdot.org/story/25/12/01/1724252/singapore-extends-secondary-school-smartphone-ban-to-cover-entire-school-day?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-01, 20:02:00](https://tech.slashdot.org/story/25/12/01/1710222/a-windows-update-broke-login-button-and-microsofts-advice-is-to-click-where-it-used-to-be?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Windows Update Broke Login Button, and Microsoft&apos;s Advice is To Click Where It Used To Be](https://tech.slashdot.org/story/25/12/01/1710222/a-windows-update-broke-login-button-and-microsofts-advice-is-to-click-where-it-used-to-be?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-01, 19:33:05](https://lobste.rs/s/dv0uwu/why_xor_eax_eax) - [Why xor eax, eax?](https://xania.org/202512/01-xor-eax-eax)
* [2025-12-01, 19:23:00](https://tech.slashdot.org/story/25/12/01/1657222/waymo-has-a-charging-problem?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Waymo Has A Charging Problem](https://tech.slashdot.org/story/25/12/01/1657222/waymo-has-a-charging-problem?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-01, 18:20:56](https://lobste.rs/s/gvldct/llms_are_failure_new_ai_winter_is_coming) - [LLMs are a failure. A new AI winter is coming](https://taranis.ie/llms-are-a-failure-a-new-ai-winter-is-coming/)
* [2025-12-01, 18:19:04](https://lobste.rs/s/lkvvh7/don_t_click_here) - [Don&apos;t Click Here](https://www.dont-click-here.com)
* [2025-12-01, 18:17:02](https://news.ycombinator.com/item?id=46110842) - [Ghostty compiled to WASM with xterm.js API compatibility](https://github.com/coder/ghostty-web)
* [2025-12-01, 16:40:00](https://soylentnews.org/article.pl?sid=25/11/30/0244232&amp;from=rss) - [Pebble, the E-Ink Smartwatch That Refuses to Die, Just Went Fully Open Source](https://soylentnews.org/article.pl?sid=25/11/30/0244232&amp;from=rss)
* [2025-12-01, 16:08:51](https://lobste.rs/s/yp2ez1/compressing_callstacks_bitpacked_dag) - [Compressing callstacks: a bitpacked DAG powered by a keyless hashmap](https://superluminal.eu/compressing-callstacks/)
* [2025-12-01, 16:01:26](https://news.ycombinator.com/item?id=46108941) - [Ask HN: Who is hiring? (December 2025)](https://news.ycombinator.com/item?id=46108941)
* [2025-12-01, 15:48:03](https://news.ycombinator.com/item?id=46108780) - [DeepSeek-v3.2: Pushing the frontier of open large language models [pdf]](https://huggingface.co/deepseek-ai/DeepSeek-V3.2/resolve/main/assets/paper.pdf)
* [2025-12-01, 15:28:49](https://news.ycombinator.com/item?id=46108563) - [Google unkills JPEG XL?](https://tonisagrista.com/blog/2025/google-unkills-jpegxl/)
* [2025-12-01, 15:18:42](https://news.ycombinator.com/item?id=46108437) - [Google, Nvidia, and OpenAI](https://stratechery.com/2025/google-nvidia-and-openai/)
* [2025-12-01, 14:06:50](https://lobste.rs/s/i40dxk/off_grid_boat_communications_with) - [Off-grid Boat Communications with Meshtastic](https://blog.noforeignland.com/off-grid-boat-communications-with-meshtastic/)
* [2025-12-01, 13:41:15](https://news.ycombinator.com/item?id=46107282) - [Cartographers have been hiding illustrations inside Switzerland’s maps (2020)](https://eyeondesign.aiga.org/for-decades-cartographers-have-been-hiding-covert-illustrations-inside-of-switzerlands-official-maps/)
* [2025-12-01, 13:15:27](https://lobste.rs/s/tdwlso/constructing_word_s_first_jpeg_xl_md5_hash) - [Constructing The Word&apos;s First JPEG XL MD5 Hash Quine](https://stackchk.fail/blog/jxl_hashquine_writeup)
* [2025-12-01, 11:51:00](https://soylentnews.org/article.pl?sid=25/11/30/0234208&amp;from=rss) - [ClamAV Signature Retirement Announcement](https://soylentnews.org/article.pl?sid=25/11/30/0234208&amp;from=rss)
* [2025-12-01, 10:49:48](https://lobste.rs/s/8eawgd/building_perfect_linux_pc_with_linus) - [Building the perfect Linux PC with Linus Torvalds](https://youtu.be/mfv0V1SxbNA)
* [2025-12-01, 10:36:22](https://lobste.rs/s/6joasa/punycode_my_new_favorite_algorithm) - [Punycode: My New Favorite Algorithm](https://www.iankduncan.com/engineering/2025-12-01-punycode)
* [2025-12-01, 10:14:59](https://lobste.rs/s/jxubs2/internet_handle) - [Internet Handle](https://internethandle.org/)
* [2025-12-01, 07:07:00](https://soylentnews.org/article.pl?sid=25/11/30/0229203&amp;from=rss) - [Roblox to Use AI for User Age Identification but Aus Government Wants More](https://soylentnews.org/article.pl?sid=25/11/30/0229203&amp;from=rss)
* [2025-12-01, 06:30:14](https://news.ycombinator.com/item?id=46104193) - [India orders smartphone makers to preload state-owned cyber safety app](https://www.reuters.com/sustainability/boards-policy-regulation/india-orders-mobile-phones-preloaded-with-government-app-ensure-cyber-safety-2025-12-01/)
* [2025-12-01, 03:59:53](https://lobste.rs/s/ujdmkl/boing) - [Boing](https://boing.greg.technology/)
* [2025-12-01, 02:20:00](https://soylentnews.org/article.pl?sid=25/11/30/0224246&amp;from=rss) - [Particle Accelerator Waste Could Help Produce Cancer-Fighting Materials](https://soylentnews.org/article.pl?sid=25/11/30/0224246&amp;from=rss)
* [2025-11-30, 23:38:39](https://lobste.rs/s/e0s8iu/ty_python_type_checker) - [ty - Python type checker](https://docs.astral.sh/ty/)
* [2025-11-30, 21:38:06](https://lobste.rs/s/bvuwhl/nixos_25_11_released) - [NixOS 25.11 released](https://nixos.org/blog/announcements/2025/nixos-2511/)
* [2025-11-30, 21:34:00](https://soylentnews.org/article.pl?sid=25/11/30/0218206&amp;from=rss) - [AI-Induced Psychosis: The Danger of Humans and Machines Hallucinating Together](https://soylentnews.org/article.pl?sid=25/11/30/0218206&amp;from=rss)
* [2025-11-30, 20:13:25](https://lobste.rs/s/h6bmm2/hacking_on_remarkable_2) - [Hacking on the reMarkable 2](https://sgt.hootr.club/blog/hacking-on-the-remarkable-2/)
* [2025-11-30, 16:51:00](https://soylentnews.org/article.pl?sid=25/11/26/1555213&amp;from=rss) - [Rust for Linux Kernel Co-Maintainer Formally Steps Down](https://soylentnews.org/article.pl?sid=25/11/26/1555213&amp;from=rss)
* [2025-11-30, 14:17:00](https://soylentnews.org/article.pl?sid=25/11/26/1550227&amp;from=rss) - [Tor Switches to New Counter Galois Onion Relay Encryption Algorithm](https://soylentnews.org/article.pl?sid=25/11/26/1550227&amp;from=rss)
* [2025-11-30, 11:43:00](https://soylentnews.org/article.pl?sid=25/11/26/149224&amp;from=rss) - [Beijing Unveils Supercritical CO2 Turbine That Could Upend Power Tech](https://soylentnews.org/article.pl?sid=25/11/26/149224&amp;from=rss)
* [2025-11-30, 11:03:13](https://news.ycombinator.com/item?id=46095662) - [Beej&apos;s Guide to Learning Computer Science](https://beej.us/guide/bglcs/)
* [2025-11-30, 09:12:00](https://soylentnews.org/article.pl?sid=25/11/26/1415217&amp;from=rss) - [The Unpowered SSDs in Your Drawer Are Slowly Losing Your Data](https://soylentnews.org/article.pl?sid=25/11/26/1415217&amp;from=rss)
* [2025-11-30, 06:53:00](https://soylentnews.org/article.pl?sid=25/11/25/1521238&amp;from=rss) - [Horse Virus EHV-1 Outbreak Spreads to Eight Texas Counties: Two Horses Have Died](https://soylentnews.org/article.pl?sid=25/11/25/1521238&amp;from=rss)
* [2025-11-30, 04:38:00](https://soylentnews.org/article.pl?sid=25/11/25/1517228&amp;from=rss) - [Scientists Unveil Breakthrough Low-Temperature Fuel Cell That Could Revolutionize Hydrogen Power](https://soylentnews.org/article.pl?sid=25/11/25/1517228&amp;from=rss)
* [2025-11-30, 04:09:41](https://news.ycombinator.com/item?id=46093613) - [YouTube increases FreeBASIC performance (2019)](https://freebasic.net/forum/viewtopic.php?t=27927)
* [2025-11-30, 02:23:00](https://soylentnews.org/article.pl?sid=25/11/25/1514218&amp;from=rss) - [Myths About Rapid Spread of the Black Death Influenced by Single “Literary Tale”](https://soylentnews.org/article.pl?sid=25/11/25/1514218&amp;from=rss)
* [2025-11-30, 00:05:00](https://soylentnews.org/article.pl?sid=25/11/25/1512241&amp;from=rss) - [A Rare GM EV1 Saved From The Crusher is Going to be Driveable Again](https://soylentnews.org/article.pl?sid=25/11/25/1512241&amp;from=rss)
* [2025-11-29, 22:03:33](https://news.ycombinator.com/item?id=46091211) - [Tom Stoppard has died](https://www.bbc.com/news/articles/c74xe49q7vlo)
* [2025-11-29, 21:56:00](https://soylentnews.org/article.pl?sid=25/11/29/2035258&amp;from=rss) - [Valve Announces the Steam Frame: &apos;A New Way to Play Your Entire Steam Library&apos;](https://soylentnews.org/article.pl?sid=25/11/29/2035258&amp;from=rss)
* [2025-11-29, 21:16:00](https://soylentnews.org/article.pl?sid=25/11/25/157251&amp;from=rss) - [Bitcoin Mining Needs Regulatory Legislation](https://soylentnews.org/article.pl?sid=25/11/25/157251&amp;from=rss)
* [2025-11-29, 20:53:00](https://soylentnews.org/article.pl?sid=25/11/29/2053221&amp;from=rss) - [Re-releasing Stories in Queue](https://soylentnews.org/article.pl?sid=25/11/29/2053221&amp;from=rss)
* [2025-11-29, 12:26:00](https://soylentnews.org/article.pl?sid=25/11/26/2246256&amp;from=rss) - [This Linux OS Has Got a Million Downloads Since Windows 10 Support Ended](https://soylentnews.org/article.pl?sid=25/11/26/2246256&amp;from=rss)
* [2025-11-29, 07:43:00](https://soylentnews.org/article.pl?sid=25/11/26/2245225&amp;from=rss) - [Americans With Four-Year Degrees Now Comprise a Record 25% of Unemployed Workers](https://soylentnews.org/article.pl?sid=25/11/26/2245225&amp;from=rss)
* [2025-11-29, 05:02:06](https://news.ycombinator.com/item?id=46085279) - [Wacky Fun Physics Ideas](https://scottlocklin.wordpress.com/2025/11/22/wacky-fun-physics-ideas/)
* [2025-11-29, 02:58:00](https://soylentnews.org/article.pl?sid=25/11/26/2239240&amp;from=rss) - [China Launches Shenzhou-22 Early for Stranded Space Station Crew](https://soylentnews.org/article.pl?sid=25/11/26/2239240&amp;from=rss)
* [2025-11-28, 22:06:00](https://soylentnews.org/article.pl?sid=25/11/26/2238205&amp;from=rss) - [Cryptology Firm Cancels Elections After Losing Encryption Key](https://soylentnews.org/article.pl?sid=25/11/26/2238205&amp;from=rss)
* [2025-11-28, 17:41:01](https://news.ycombinator.com/item?id=46080835) - [Codex, Opus, Gemini try to build Counter Strike](https://www.instantdb.com/essays/agents_building_counterstrike)
