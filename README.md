# [News Summary](https://kherrick.github.io/news-summary/)

## Technology Innovations

* [PtrHash: Minimal Perfect Hashing at RAM Throughput](https://curiouscoding.nl/posts/ptrhash/) - A deep dive into PtrHash, a novel algorithm for high-speed, minimal perfect hashing in RAM. ([Comments](https://lobste.rs/s/lfnjvn/ptrhash_minimal_perfect_hashing_at_ram))

* [Samsung Debuts Its First Trifold Phone](https://mobile.slashdot.org/story/25/12/02/0511211/samsung-debuts-its-first-trifold-phone?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Samsung introduces a groundbreaking trifold phone technology. ([Comments](https://mobile.slashdot.org/story/25/12/02/0511211/samsung-debuts-its-first-trifold-phone?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Gitmal - a static pages generator for Git repos](https://github.com/antonmedv/gitmal) - A new tool simplifying Git repo page generation with a minimalist approach. ([Comments](https://lobste.rs/s/c8bzzd/gitmal_static_pages_generator_for_git))

* [FreeBSD 15.0-RELEASE Announcement](https://www.freebsd.org/releases/15.0R/announce/) - The latest FreeBSD release heralds advancements in features and security. ([Comments](https://lobste.rs/s/azyiij/freebsd_15_0_release_announcement))

## AI and Computing Developments

* [Apple Releases Open Weights Video Model](https://starflow-v.github.io) - Apple shares a new video processing AI, promoting transparency and innovation. ([Comments](https://news.ycombinator.com/item?id=46117802))

* [LLMs are a failure. A new AI winter is coming](https://taranis.ie/llms-are-a-failure-a-new-ai-winter-is-coming/) - A controversial perspective on the future of large language models and AI development. ([Comments](https://lobste.rs/s/gvldct/llms_are_failure_new_ai_winter_is_coming))

* [Reverse math shows why hard problems are hard](https://www.quantamagazine.org/reverse-mathematics-illuminates-why-hard-problems-are-hard-20251201/) - An exploration of reverse mathematics and its implications on problem complexity. ([Comments](https://news.ycombinator.com/item?id=46116724))

* [DeepSeek-v3.2: Pushing the frontier of open large language models [pdf]](https://huggingface.co/deepseek-ai/DeepSeek-V3.2/resolve/main/assets/paper.pdf) - Introducing the latest in open-source AI model frontiers. ([Comments](https://news.ycombinator.com/item?id=46108780))

## Cultural and Historical Insights

* [What will enter the public domain in 2026?](https://publicdomainreview.org/features/entering-the-public-domain/2026/) - A preview of how upcoming public domain releases may enrich global cultural heritage. ([Comments](https://news.ycombinator.com/item?id=46117112))

* [Cartographers have been hiding illustrations inside Switzerland’s maps (2020)](https://eyeondesign.aiga.org/for-decades-cartographers-have-been-hiding-covert-illustrations-inside-of-switzerlands-official-maps/) - A look at the hidden artistry in Swiss cartography. ([Comments](https://news.ycombinator.com/item?id=46107282))

* [Tom Stoppard has died](https://www.bbc.com/news/articles/c74xe49q7vlo) - Reflecting on the life and legacy of the celebrated playwright, Tom Stoppard. ([Comments](https://news.ycombinator.com/item?id=46091211))

* [Myths About Rapid Spread of the Black Death Influenced by Single 'Literary Tale'](https://soylentnews.org/article.pl?sid=25/11/25/1514218&from=rss) - New findings challenge long-held beliefs about the Black Death's spread. ([Comments](https://soylentnews.org/article.pl?sid=25/11/25/1514218&from=rss))

## Corporate and Industry Updates

* [Why Replicate is joining Cloudflare](https://blog.cloudflare.com/why-replicate-joining-cloudflare/) - Cloudflare integrates Replicate into their ecosystem, enhancing their capabilities. ([Comments](https://news.ycombinator.com/item?id=46117993))

* [John Giannandrea to retire from Apple](https://www.apple.com/newsroom/2025/12/john-giannandrea-to-retire-from-apple/) - News on the departure of Apple's AI chief following significant challenges. ([Comments](https://news.ycombinator.com/item?id=46114122))

* [NixOS 25.11 released](https://nixos.org/blog/announcements/2025/nixos-2511/) - Details on the latest version of the versatile and customizable operating system, NixOS. ([Comments](https://lobste.rs/s/bvuwhl/nixos_25_11_released))

## Health, Security, and Ethical Concerns

* [Smartphones At Age 12 Linked To Worse Health](https://mobile.slashdot.org/story/25/12/02/008223/smartphones-at-age-12-linked-to-worse-health?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Research highlights adverse health impacts associated with early smartphone usage. ([Comments](https://mobile.slashdot.org/story/25/12/02/008223/smartphones-at-age-12-linked-to-worse-health?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Ukraine First Country in Europe to Get Starlink Satellite Phone Service](https://soylentnews.org/article.pl?sid=25/12/01/0343223&from=rss) - A leap forward in satellite connectivity for Ukraine amidst ongoing challenges. ([Comments](https://soylentnews.org/article.pl?sid=25/12/01/0343223&from=rss))

* [New York Now Requires Retailers To Tell You When AI Sets Your Price](https://yro.slashdot.org/story/25/12/01/1740216/new-york-now-requires-retailers-to-tell-you-when-ai-sets-your-price?utm_source=rss1.0mainlinkanon&utm_medium=feed) - A step towards transparency in AI-driven pricing in New York State. ([Comments](https://yro.slashdot.org/story/25/12/01/1740216/new-york-now-requires-retailers-to-tell-you-when-ai-sets-your-price?utm_source=rss1.0mainlinkanon&utm_medium=feed))

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

* [2025-12-02, 09:34:34](https://lobste.rs/s/lfnjvn/ptrhash_minimal_perfect_hashing_at_ram) - [PtrHash: Minimal Perfect Hashing at RAM Throughput](https://curiouscoding.nl/posts/ptrhash/)
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
* [2025-12-02, 01:30:15](https://news.ycombinator.com/item?id=46116179) - [Notes on Bhutan](https://apropos.substack.com/p/notes-on-bhutan)
* [2025-12-02, 01:25:00](https://slashdot.org/story/25/12/02/0042253/swiss-illegal-cryptocurrency-mixing-service-shut-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Swiss Illegal Cryptocurrency Mixing Service Shut Down](https://slashdot.org/story/25/12/02/0042253/swiss-illegal-cryptocurrency-mixing-service-shut-down?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-02, 00:45:00](https://mobile.slashdot.org/story/25/12/02/008223/smartphones-at-age-12-linked-to-worse-health?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Smartphones At Age 12 Linked To Worse Health](https://mobile.slashdot.org/story/25/12/02/008223/smartphones-at-age-12-linked-to-worse-health?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-02, 00:31:01](https://news.ycombinator.com/item?id=46115682) - [Arcee Trinity Mini: US-Trained Moe Model](https://www.arcee.ai/blog/the-trinity-manifesto?src=hn)
* [2025-12-02, 00:25:00](https://lobste.rs/s/azyiij/freebsd_15_0_release_announcement) - [FreeBSD 15.0-RELEASE Announcement](https://www.freebsd.org/releases/15.0R/announce/)
* [2025-12-02, 00:23:00](https://apple.slashdot.org/story/25/12/02/0021253/apple-ai-chief-retiring-after-siri-failure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple AI Chief Retiring After Siri Failure](https://apple.slashdot.org/story/25/12/02/0021253/apple-ai-chief-retiring-after-siri-failure?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-02, 00:02:00](https://yro.slashdot.org/story/25/12/01/2249209/flock-uses-overseas-gig-workers-to-build-its-surveillance-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Flock Uses Overseas Gig Workers To Build Its Surveillance AI](https://yro.slashdot.org/story/25/12/01/2249209/flock-uses-overseas-gig-workers-to-build-its-surveillance-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-01, 23:37:22](https://lobste.rs/s/fkt2is/claude_4_5_opus_soul_document) - [Claude 4.5 Opus&apos; Soul Document](https://www.lesswrong.com/posts/vpNG99GhbBoLov9og/claude-4-5-opus-soul-document)
* [2025-12-01, 23:20:00](https://tech.slashdot.org/story/25/12/01/2239244/austrias-rebel-nuns-refuse-to-give-up-instagram-to-stay-in-their-convent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Austria&apos;s Rebel Nuns Refuse To Give Up Instagram To Stay In Their Convent](https://tech.slashdot.org/story/25/12/01/2239244/austrias-rebel-nuns-refuse-to-give-up-instagram-to-stay-in-their-convent?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-01, 23:16:00](https://lobste.rs/s/3mijhp/complex_end_end_tests_using_guix_g) - [Complex end-to-end tests using Guix G-expressions](https://systemreboot.net/post/complex-end-to-end-tests-using-guix-g-expressions.html)
* [2025-12-01, 22:40:00](https://news.slashdot.org/story/25/12/01/2224216/zipcar-to-end-uk-operations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Zipcar To End UK Operations](https://news.slashdot.org/story/25/12/01/2224216/zipcar-to-end-uk-operations?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-01, 22:20:33](https://news.ycombinator.com/item?id=46114122) - [John Giannandrea to retire from Apple](https://www.apple.com/newsroom/2025/12/john-giannandrea-to-retire-from-apple/)
* [2025-12-01, 22:00:00](https://yro.slashdot.org/story/25/12/01/2158251/koreas-coupang-says-data-breach-exposed-nearly-34-million-customers-personal-information?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Korea&apos;s Coupang Says Data Breach Exposed Nearly 34 Million Customers&apos; Personal Information](https://yro.slashdot.org/story/25/12/01/2158251/koreas-coupang-says-data-breach-exposed-nearly-34-million-customers-personal-information?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-01, 21:42:59](https://lobste.rs/s/xamzjw/paged_out_call_for_pages) - [Paged Out - Call for pages](https://pagedout.institute/?page=cfp.php)
* [2025-12-01, 21:26:00](https://soylentnews.org/article.pl?sid=25/12/01/0335217&amp;from=rss) - [NTSB Finds Root Cause of Container Ship Hitting Baltimore Bridge](https://soylentnews.org/article.pl?sid=25/12/01/0335217&amp;from=rss)
* [2025-12-01, 21:20:00](https://yro.slashdot.org/story/25/12/01/1740216/new-york-now-requires-retailers-to-tell-you-when-ai-sets-your-price?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New York Now Requires Retailers To Tell You When AI Sets Your Price](https://yro.slashdot.org/story/25/12/01/1740216/new-york-now-requires-retailers-to-tell-you-when-ai-sets-your-price?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-01, 21:03:23](https://lobste.rs/s/4wqk4q/benchmarking_read_latency_aws_s3_s3) - [Benchmarking read latency of AWS S3, S3 Express, EBS and Instance store](https://nixiesearch.substack.com/p/benchmarking-read-latency-of-aws)
* [2025-12-01, 20:55:56](https://news.ycombinator.com/item?id=46113092) - [Instagram chief orders staff back to the office five days a week in 2026](https://www.businessinsider.com/instagram-chief-adam-mosseri-announces-five-day-office-return-2025-12)
* [2025-12-01, 20:41:00](https://news.slashdot.org/story/25/12/01/1724252/singapore-extends-secondary-school-smartphone-ban-to-cover-entire-school-day?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Singapore Extends Secondary School Smartphone Ban To Cover Entire School Day](https://news.slashdot.org/story/25/12/01/1724252/singapore-extends-secondary-school-smartphone-ban-to-cover-entire-school-day?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-01, 20:02:00](https://tech.slashdot.org/story/25/12/01/1710222/a-windows-update-broke-login-button-and-microsofts-advice-is-to-click-where-it-used-to-be?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A Windows Update Broke Login Button, and Microsoft&apos;s Advice is To Click Where It Used To Be](https://tech.slashdot.org/story/25/12/01/1710222/a-windows-update-broke-login-button-and-microsofts-advice-is-to-click-where-it-used-to-be?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-01, 19:33:05](https://lobste.rs/s/dv0uwu/why_xor_eax_eax) - [Why xor eax, eax?](https://xania.org/202512/01-xor-eax-eax)
* [2025-12-01, 19:23:00](https://tech.slashdot.org/story/25/12/01/1657222/waymo-has-a-charging-problem?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Waymo Has A Charging Problem](https://tech.slashdot.org/story/25/12/01/1657222/waymo-has-a-charging-problem?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-01, 18:41:00](https://entertainment.slashdot.org/story/25/12/01/1649216/netflix-kills-casting-from-phones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Netflix Kills Casting From Phones](https://entertainment.slashdot.org/story/25/12/01/1649216/netflix-kills-casting-from-phones?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-12-01, 18:20:56](https://lobste.rs/s/gvldct/llms_are_failure_new_ai_winter_is_coming) - [LLMs are a failure. A new AI winter is coming](https://taranis.ie/llms-are-a-failure-a-new-ai-winter-is-coming/)
* [2025-12-01, 18:19:04](https://lobste.rs/s/lkvvh7/don_t_click_here) - [Don&apos;t Click Here](https://www.dont-click-here.com)
* [2025-12-01, 18:17:02](https://news.ycombinator.com/item?id=46110842) - [Ghostty compiled to WASM with xterm.js API compatibility](https://github.com/coder/ghostty-web)
* [2025-12-01, 16:40:00](https://soylentnews.org/article.pl?sid=25/11/30/0244232&amp;from=rss) - [Pebble, the E-Ink Smartwatch That Refuses to Die, Just Went Fully Open Source](https://soylentnews.org/article.pl?sid=25/11/30/0244232&amp;from=rss)
* [2025-12-01, 16:08:51](https://lobste.rs/s/yp2ez1/compressing_callstacks_bitpacked_dag) - [Compressing callstacks: a bitpacked DAG powered by a keyless hashmap](https://superluminal.eu/compressing-callstacks/)
* [2025-12-01, 16:01:26](https://news.ycombinator.com/item?id=46108941) - [Ask HN: Who is hiring? (December 2025)](https://news.ycombinator.com/item?id=46108941)
* [2025-12-01, 15:48:03](https://news.ycombinator.com/item?id=46108780) - [DeepSeek-v3.2: Pushing the frontier of open large language models [pdf]](https://huggingface.co/deepseek-ai/DeepSeek-V3.2/resolve/main/assets/paper.pdf)
* [2025-12-01, 15:28:49](https://news.ycombinator.com/item?id=46108563) - [Google unkills JPEG XL?](https://tonisagrista.com/blog/2025/google-unkills-jpegxl/)
* [2025-12-01, 15:18:42](https://news.ycombinator.com/item?id=46108437) - [Google, Nvidia, and OpenAI](https://stratechery.com/2025/google-nvidia-and-openai/)
* [2025-12-01, 14:13:06](https://news.ycombinator.com/item?id=46107658) - [The Penicillin Myth](https://www.asimov.press/p/penicillin-myth)
* [2025-12-01, 14:06:50](https://lobste.rs/s/i40dxk/off_grid_boat_communications_with) - [Off-grid Boat Communications with Meshtastic](https://blog.noforeignland.com/off-grid-boat-communications-with-meshtastic/)
* [2025-12-01, 13:41:15](https://news.ycombinator.com/item?id=46107282) - [Cartographers have been hiding illustrations inside Switzerland’s maps (2020)](https://eyeondesign.aiga.org/for-decades-cartographers-have-been-hiding-covert-illustrations-inside-of-switzerlands-official-maps/)
* [2025-12-01, 13:15:27](https://lobste.rs/s/tdwlso/constructing_word_s_first_jpeg_xl_md5_hash) - [Constructing The Word&apos;s First JPEG XL MD5 Hash Quine](https://stackchk.fail/blog/jxl_hashquine_writeup)
* [2025-12-01, 11:51:00](https://soylentnews.org/article.pl?sid=25/11/30/0234208&amp;from=rss) - [ClamAV Signature Retirement Announcement](https://soylentnews.org/article.pl?sid=25/11/30/0234208&amp;from=rss)
* [2025-12-01, 10:49:48](https://lobste.rs/s/8eawgd/building_perfect_linux_pc_with_linus) - [Building the perfect Linux PC with Linus Torvalds](https://youtu.be/mfv0V1SxbNA)
* [2025-12-01, 10:36:22](https://lobste.rs/s/6joasa/punycode_my_new_favorite_algorithm) - [Punycode: My New Favorite Algorithm](https://www.iankduncan.com/engineering/2025-12-01-punycode)
* [2025-12-01, 10:14:59](https://lobste.rs/s/jxubs2/internet_handle) - [Internet Handle](https://internethandle.org/)
* [2025-12-01, 07:07:00](https://soylentnews.org/article.pl?sid=25/11/30/0229203&amp;from=rss) - [Roblox to Use AI for User Age Identification but Aus Government Wants More](https://soylentnews.org/article.pl?sid=25/11/30/0229203&amp;from=rss)
* [2025-12-01, 06:45:22](https://lobste.rs/s/wsv9xn/size_matters) - [Size Matters](https://matklad.github.io/2025/11/28/size-matters.html)
* [2025-12-01, 06:30:14](https://news.ycombinator.com/item?id=46104193) - [India orders smartphone makers to preload state-owned cyber safety app](https://www.reuters.com/sustainability/boards-policy-regulation/india-orders-mobile-phones-preloaded-with-government-app-ensure-cyber-safety-2025-12-01/)
* [2025-12-01, 03:59:53](https://lobste.rs/s/ujdmkl/boing) - [Boing](https://boing.greg.technology/)
* [2025-12-01, 02:20:00](https://soylentnews.org/article.pl?sid=25/11/30/0224246&amp;from=rss) - [Particle Accelerator Waste Could Help Produce Cancer-Fighting Materials](https://soylentnews.org/article.pl?sid=25/11/30/0224246&amp;from=rss)
* [2025-11-30, 23:38:39](https://lobste.rs/s/e0s8iu/ty_python_type_checker) - [ty - Python type checker](https://docs.astral.sh/ty/)
* [2025-11-30, 21:38:06](https://lobste.rs/s/bvuwhl/nixos_25_11_released) - [NixOS 25.11 released](https://nixos.org/blog/announcements/2025/nixos-2511/)
* [2025-11-30, 21:34:00](https://soylentnews.org/article.pl?sid=25/11/30/0218206&amp;from=rss) - [AI-Induced Psychosis: The Danger of Humans and Machines Hallucinating Together](https://soylentnews.org/article.pl?sid=25/11/30/0218206&amp;from=rss)
* [2025-11-30, 20:13:25](https://lobste.rs/s/h6bmm2/hacking_on_remarkable_2) - [Hacking on the reMarkable 2](https://sgt.hootr.club/blog/hacking-on-the-remarkable-2/)
* [2025-11-30, 16:51:00](https://soylentnews.org/article.pl?sid=25/11/26/1555213&amp;from=rss) - [Rust for Linux Kernel Co-Maintainer Formally Steps Down](https://soylentnews.org/article.pl?sid=25/11/26/1555213&amp;from=rss)
* [2025-11-30, 14:59:23](https://lobste.rs/s/gtzhvt/advent_code_2025) - [Advent of Code 2025](https://adventofcode.com/2025)
* [2025-11-30, 14:17:00](https://soylentnews.org/article.pl?sid=25/11/26/1550227&amp;from=rss) - [Tor Switches to New Counter Galois Onion Relay Encryption Algorithm](https://soylentnews.org/article.pl?sid=25/11/26/1550227&amp;from=rss)
* [2025-11-30, 14:09:19](https://lobste.rs/s/mgwwtl/migrating_dillo_from_github) - [Migrating Dillo from GitHub](https://dillo-browser.org/news/migration-from-github/)
* [2025-11-30, 11:43:00](https://soylentnews.org/article.pl?sid=25/11/26/149224&amp;from=rss) - [Beijing Unveils Supercritical CO2 Turbine That Could Upend Power Tech](https://soylentnews.org/article.pl?sid=25/11/26/149224&amp;from=rss)
* [2025-11-30, 11:03:13](https://news.ycombinator.com/item?id=46095662) - [Beej&apos;s Guide to Learning Computer Science](https://beej.us/guide/bglcs/)
* [2025-11-30, 09:12:00](https://soylentnews.org/article.pl?sid=25/11/26/1415217&amp;from=rss) - [The Unpowered SSDs in Your Drawer Are Slowly Losing Your Data](https://soylentnews.org/article.pl?sid=25/11/26/1415217&amp;from=rss)
* [2025-11-30, 06:53:00](https://soylentnews.org/article.pl?sid=25/11/25/1521238&amp;from=rss) - [Horse Virus EHV-1 Outbreak Spreads to Eight Texas Counties: Two Horses Have Died](https://soylentnews.org/article.pl?sid=25/11/25/1521238&amp;from=rss)
* [2025-11-30, 04:38:00](https://soylentnews.org/article.pl?sid=25/11/25/1517228&amp;from=rss) - [Scientists Unveil Breakthrough Low-Temperature Fuel Cell That Could Revolutionize Hydrogen Power](https://soylentnews.org/article.pl?sid=25/11/25/1517228&amp;from=rss)
* [2025-11-30, 02:23:00](https://soylentnews.org/article.pl?sid=25/11/25/1514218&amp;from=rss) - [Myths About Rapid Spread of the Black Death Influenced by Single “Literary Tale”](https://soylentnews.org/article.pl?sid=25/11/25/1514218&amp;from=rss)
* [2025-11-30, 00:05:00](https://soylentnews.org/article.pl?sid=25/11/25/1512241&amp;from=rss) - [A Rare GM EV1 Saved From The Crusher is Going to be Driveable Again](https://soylentnews.org/article.pl?sid=25/11/25/1512241&amp;from=rss)
* [2025-11-29, 22:03:33](https://news.ycombinator.com/item?id=46091211) - [Tom Stoppard has died](https://www.bbc.com/news/articles/c74xe49q7vlo)
* [2025-11-29, 21:56:00](https://soylentnews.org/article.pl?sid=25/11/29/2035258&amp;from=rss) - [Valve Announces the Steam Frame: &apos;A New Way to Play Your Entire Steam Library&apos;](https://soylentnews.org/article.pl?sid=25/11/29/2035258&amp;from=rss)
* [2025-11-29, 21:16:00](https://soylentnews.org/article.pl?sid=25/11/25/157251&amp;from=rss) - [Bitcoin Mining Needs Regulatory Legislation](https://soylentnews.org/article.pl?sid=25/11/25/157251&amp;from=rss)
* [2025-11-29, 20:53:00](https://soylentnews.org/article.pl?sid=25/11/29/2053221&amp;from=rss) - [Re-releasing Stories in Queue](https://soylentnews.org/article.pl?sid=25/11/29/2053221&amp;from=rss)
* [2025-11-29, 19:43:59](https://news.ycombinator.com/item?id=46090184) - [Tested: 1981 Datsun 280ZX Turbo (1981)](https://www.caranddriver.com/reviews/a69529696/1981-datsun-280-zx-turbo-archive-test/)
* [2025-11-29, 12:26:00](https://soylentnews.org/article.pl?sid=25/11/26/2246256&amp;from=rss) - [This Linux OS Has Got a Million Downloads Since Windows 10 Support Ended](https://soylentnews.org/article.pl?sid=25/11/26/2246256&amp;from=rss)
* [2025-11-29, 07:43:00](https://soylentnews.org/article.pl?sid=25/11/26/2245225&amp;from=rss) - [Americans With Four-Year Degrees Now Comprise a Record 25% of Unemployed Workers](https://soylentnews.org/article.pl?sid=25/11/26/2245225&amp;from=rss)
* [2025-11-29, 02:58:00](https://soylentnews.org/article.pl?sid=25/11/26/2239240&amp;from=rss) - [China Launches Shenzhou-22 Early for Stranded Space Station Crew](https://soylentnews.org/article.pl?sid=25/11/26/2239240&amp;from=rss)
* [2025-11-28, 22:06:00](https://soylentnews.org/article.pl?sid=25/11/26/2238205&amp;from=rss) - [Cryptology Firm Cancels Elections After Losing Encryption Key](https://soylentnews.org/article.pl?sid=25/11/26/2238205&amp;from=rss)
* [2025-11-28, 17:41:01](https://news.ycombinator.com/item?id=46080835) - [Codex, Opus, Gemini try to build Counter Strike](https://www.instantdb.com/essays/agents_building_counterstrike)
