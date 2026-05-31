# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [I Put a Datacenter GPU in My Gaming PC for £200](https://blog.tymscar.com/posts/v100localllm/) - A deep dive into upgrading a gaming PC with a datacenter GPU for improved performance, all for just £200. [Comments](https://lobste.rs/s/2tskyy/i_put_datacenter_gpu_my_gaming_pc_for_200)

* [securix: NixOS-based secure operating system. Provides a hardened environment with strong isolation, reproducibility, and policy-driven configurations](https://github.com/cloud-gouv/securix) - A secure OS built on NixOS principles with features for enhanced system security and configuration. [Comments](https://lobste.rs/s/45dqvh/securix_nixos_based_secure_operating)

* [Apple M1 Chip Deep-Dive](https://www.youtube.com/watch?v=mHEWMiHgyU8) - A comprehensive analysis of Apple's M1 chip. [Comments](https://lobste.rs/s/np6twr/apple_m1_chip_deep_dive)

* [What Is a Dickover?](https://daringfireball.net/2026/05/what_is_a_dickover) - A breakdown of the term 'Dickover' and its relevance in the digital age. [Comments](https://soylentnews.org/article.pl?sid=26/05/30/1415220&amp;from=rss)

## Gaming and Entertainment

* [UK-Based Rockstar Games North Workers Formally Announce Union](https://games.slashdot.org/story/26/05/31/0227212/uk-based-rockstar-games-north-workers-formally-announce-union?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Rockstar Games North employees officially form a union to advocate for better conditions. [Comments](https://games.slashdot.org/story/26/05/31/0227212/uk-based-rockstar-games-north-workers-formally-announce-union?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Call Of Duty: Warzone Is Shutting Down On PS4 And Xbox One](https://games.slashdot.org/story/26/05/30/1911241/call-of-duty-warzone-is-shutting-down-on-ps4-and-xbox-one?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - The end of 'Call of Duty: Warzone' support for PS4 and Xbox One detailed. [Comments](https://games.slashdot.org/story/26/05/30/1911241/call-of-duty-warzone-is-shutting-down-on-ps4-and-xbox-one?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

## Science and Space

* [Mars Minerals Reveals an Ancient Ocean's Potential For Life - and a Possible Way to Make Oxygen](https://science.slashdot.org/story/26/05/30/0538233/mars-minerals-reveals-an-ancient-oceans-potential-for-life---and-a-possible-way-to-make-oxygen?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - A discovery about Martian minerals suggests ancient life and potential oxygen production. [Comments](https://science.slashdot.org/story/26/05/30/0538233/mars-minerals-reveals-an-ancient-oceans-potential-for-life---and-a-possible-way-to-make-oxygen?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Researchers Develop A New Process To Get Lithium Out Of Rocks](https://soylentnews.org/article.pl?sid=26/05/29/159239&amp;from=rss) - Scientists introduce a novel way to extract lithium from rocks, paving the way for advancements in battery tech. [Comments](https://soylentnews.org/article.pl?sid=26/05/29/159239&amp;from=rss)

## Artificial Intelligence

* [Google Search is Becoming Something Fundamentally Different](https://soylentnews.org/article.pl?sid=26/05/29/0212218&amp;from=rss) - The evolution of Google search and how AI is shaping its future. [Comments](https://soylentnews.org/article.pl?sid=26/05/29/0212218&amp;from=rss)

* [AI Code Increasingly Leads to Production Failures](https://soylentnews.org/article.pl?sid=26/05/29/152259&amp;from=rss) - A discussion on the growing challenges presented by AI-generated code in production. [Comments](https://soylentnews.org/article.pl?sid=26/05/29/152259&amp;from=rss)

## Privacy and Surveillance

* [Journalist Spots Fugitive Terrorist Using Facial Recognition Software](https://yro.slashdot.org/story/26/05/30/2125244/journalist-spots-fugitive-terrorist-using-facial-recognition-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Insight into the controversial use of facial recognition technology in criminal investigations. [Comments](https://yro.slashdot.org/story/26/05/30/2125244/journalist-spots-fugitive-terrorist-using-facial-recognition-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Pentagon Says US Military Personnel Targeted Using Commercial Location Data](https://yro.slashdot.org/story/26/05/30/2233210/pentagon-says-us-military-personnel-targeted-using-commercial-location-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - Allegations of targeting US military personnel via commercial location data. [Comments](https://yro.slashdot.org/story/26/05/30/2233210/pentagon-says-us-military-personnel-targeted-using-commercial-location-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

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

* [2026-05-31, 09:43:06](https://lobste.rs/s/2tskyy/i_put_datacenter_gpu_my_gaming_pc_for_200) - [I Put a Datacenter GPU in My Gaming PC for £200](https://blog.tymscar.com/posts/v100localllm/)
* [2026-05-31, 09:40:35](https://lobste.rs/s/45dqvh/securix_nixos_based_secure_operating) - [securix: NixOS-based secure operating system. Provides a hardened environment with strong isolation, reproducibility, and policy-driven configurations](https://github.com/cloud-gouv/securix)
* [2026-05-31, 09:13:13](https://lobste.rs/s/1xzofw/s_interoperability) - [The S in interoperability](https://frederikbraun.de/the-s-in-interoperability.html)
* [2026-05-31, 08:35:19](https://news.ycombinator.com/item?id=48344016) - [The dangerous delusion of modern warfare](https://economist.com/interactive/essay/2026/05/28/the-dangerous-delusion-of-modern-warfare)
* [2026-05-31, 08:33:10](https://lobste.rs/s/wgfasz/website_checklist) - [Website checklist](https://specification.website/checklist/)
* [2026-05-31, 07:54:00](https://soylentnews.org/article.pl?sid=26/05/30/1415220&amp;from=rss) - [What is a Dickover?](https://soylentnews.org/article.pl?sid=26/05/30/1415220&amp;from=rss)
* [2026-05-31, 07:34:00](https://games.slashdot.org/story/26/05/31/0227212/uk-based-rockstar-games-north-workers-formally-announce-union?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [UK-Based Rockstar Games North Workers Formally Announce Union ](https://games.slashdot.org/story/26/05/31/0227212/uk-based-rockstar-games-north-workers-formally-announce-union?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-31, 07:16:18](https://news.ycombinator.com/item?id=48343714) - [London&apos;s Free Roof Terraces](https://diamondgeezer.blogspot.com/2026/05/londons-free-roof-terraces.html)
* [2026-05-31, 07:09:50](https://news.ycombinator.com/item?id=48343683) - [The Website Specification](https://specification.website/)
* [2026-05-31, 07:00:50](https://news.ycombinator.com/item?id=48343635) - [Telli (YC F24) is hiring in engineering, design, and GTM [Berlin, on-site]](https://hi.telli.com/join-us)
* [2026-05-31, 06:45:21](https://lobste.rs/s/np6twr/apple_m1_chip_deep_dive) - [Apple M1 Chip Deep-Dive](https://www.youtube.com/watch?v=mHEWMiHgyU8)
* [2026-05-31, 06:43:48](https://lobste.rs/s/mem2md/simple_project_switcher_for_kakoune) - [A simple project switcher for Kakoune](https://bhoot.org/2026/kakoune-project-switcher/)
* [2026-05-31, 06:15:56](https://lobste.rs/s/bykj53/why_custom_attributes_net_give_me) - [Why Custom Attributes in .NET give me Nightmares](https://blog.washi.dev/posts/custom-attributes-and-why-they-suck/)
* [2026-05-31, 06:13:59](https://news.ycombinator.com/item?id=48343424) - [Avian Visitors](https://theodore.net/projects/AvianVisitors/)
* [2026-05-31, 05:30:18](https://news.ycombinator.com/item?id=48343287) - [A pictorial introduction to differential geometry (2017)](https://arxiv.org/abs/1709.08492)
* [2026-05-31, 04:42:14](https://news.ycombinator.com/item?id=48343078) - [Ahoy, DECmate II the little PDP-8 that could](http://oldvcr.blogspot.com/2026/05/ahoy-decmate-ii-little-pdp-8-that-could.html)
* [2026-05-31, 04:03:52](https://news.ycombinator.com/item?id=48342935) - [86Box v6.0](https://86box.net/2026/05/31/86box-v6-0.html)
* [2026-05-31, 03:34:00](https://developers.slashdot.org/story/26/05/31/0016209/fed-up-with-vibe-coders-dev-sneaks-data-nuking-prompt-injection-into-testing-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Fed Up With Vibe Coders, Dev Sneaks Data-Nuking Prompt Injection Into Testing App](https://developers.slashdot.org/story/26/05/31/0016209/fed-up-with-vibe-coders-dev-sneaks-data-nuking-prompt-injection-into-testing-app?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-31, 03:16:48](https://news.ycombinator.com/item?id=48342705) - [Please Do Not Vibe Fuck Up This Software](https://github.com/RsyncProject/rsync/issues/929)
* [2026-05-31, 03:09:00](https://soylentnews.org/article.pl?sid=26/05/29/1513233&amp;from=rss) - [‘AI Washing’: Firms Are Scrambling to Rebrand Themselves as Tech-Focused](https://soylentnews.org/article.pl?sid=26/05/29/1513233&amp;from=rss)
* [2026-05-31, 02:20:15](https://lobste.rs/s/e7n06u/ahoy_decmate_ii_little_pdp_8_could) - [Ahoy, DECmate II! the little PDP-8 that could](http://oldvcr.blogspot.com/2026/05/ahoy-decmate-ii-little-pdp-8-that-could.html)
* [2026-05-31, 02:04:34](https://lobste.rs/s/giktao/my_accessibility_stack_future_on_wayland) - [My Accessibility Stack and the future on Wayland](https://nocoffei.com/?p=451)
* [2026-05-31, 01:49:17](https://lobste.rs/s/w7sajs/av2_v1_0_0_specification) - [AV2 v1.0.0 specification](https://av2.aomedia.org/)
* [2026-05-31, 01:34:00](https://yro.slashdot.org/story/26/05/30/2233210/pentagon-says-us-military-personnel-targeted-using-commercial-location-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Pentagon Says US Military Personnel Targeted Using Commercial Location Data](https://yro.slashdot.org/story/26/05/30/2233210/pentagon-says-us-military-personnel-targeted-using-commercial-location-data?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-31, 00:38:11](https://lobste.rs/s/eitko7/simple_sprite_editor_j) - [Simple Sprite Editor in J](https://www.youtube.com/watch?v=CzK2SazvCxM)
* [2026-05-31, 00:25:12](https://news.ycombinator.com/item?id=48341932) - [Mechanical Pencil: An illustrated celebration of the engineering around us](https://mechanical-pencil.com/)
* [2026-05-30, 23:55:50](https://lobste.rs/s/253fit/elf_linker_improvements_zig) - [ELF Linker Improvements in Zig](https://ziglang.org/devlog/2026/?2026-05-30#2026-05-30)
* [2026-05-30, 23:32:14](https://lobste.rs/s/b1yg8b/microcode_inside_intel_8087_floating) - [Microcode inside the Intel 8087 floating-point chip: register exchange](http://www.righto.com/2026/05/microcode-inside-intel-8087-floating.html)
* [2026-05-30, 23:26:13](https://news.ycombinator.com/item?id=48341578) - [Microsoft Office 2019 and 2021 for Mac view-only conversion](https://consumerrights.wiki/w/Microsoft_Office_2019_and_2021_for_Mac_view-only_conversion_(2026))
* [2026-05-30, 23:01:52](https://lobste.rs/s/8ukphx/data_types_la_carte_2008) - [Data types à la carte (2008)](https://www.cambridge.org/core/journals/journal-of-functional-programming/article/data-types-a-la-carte/14416CB20C4637164EA9F77097909409)
* [2026-05-30, 22:34:00](https://yro.slashdot.org/story/26/05/30/2125244/journalist-spots-fugitive-terrorist-using-facial-recognition-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Journalist Spots Fugitive Terrorist Using Facial Recognition Software](https://yro.slashdot.org/story/26/05/30/2125244/journalist-spots-fugitive-terrorist-using-facial-recognition-software?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-30, 22:23:00](https://soylentnews.org/article.pl?sid=26/05/29/1511219&amp;from=rss) - [The LLM Permission Slip](https://soylentnews.org/article.pl?sid=26/05/29/1511219&amp;from=rss)
* [2026-05-30, 22:06:38](https://news.ycombinator.com/item?id=48341062) - [Shantell Sans (2023)](https://shantellsans.com/process)
* [2026-05-30, 21:55:47](https://lobste.rs/s/wa3gxl/new_design_for_pretty_printer) - [A New Design for Pretty Printer Implementations in Rust](https://blog.wybxc.cc/blog/pretty-printer-pye/)
* [2026-05-30, 21:46:18](https://news.ycombinator.com/item?id=48340910) - [The AV2 Video Standard Has Released (Final v1.0 Specification)](https://av2.aomedia.org)
* [2026-05-30, 21:34:00](https://linux.slashdot.org/story/26/05/30/2040224/linux-developers-consider-retiring-the-x32-abi?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Linux Developers Consider Retiring The x32 ABI](https://linux.slashdot.org/story/26/05/30/2040224/linux-developers-consider-retiring-the-x32-abi?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-30, 21:04:14](https://lobste.rs/s/nwf2cq/real_origin_lorem_ipsum) - [The real origin of Lorem Ipsum](https://www.youtube.com/watch?v=kL1PDqzqhM4)
* [2026-05-30, 20:42:28](https://news.ycombinator.com/item?id=48340422) - [wolfSSL releases a new product; wolfCOSE a zero alloc C embbedded COSE stack](https://github.com/wolfSSL/wolfCOSE)
* [2026-05-30, 20:40:57](https://news.ycombinator.com/item?id=48340411) - [Domain expertise has always been the real moat](https://www.brethorsting.com/blog/2026/05/domain-expertise-has-always-been-the-real-moat/)
* [2026-05-30, 20:34:00](https://games.slashdot.org/story/26/05/30/1911241/call-of-duty-warzone-is-shutting-down-on-ps4-and-xbox-one?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Call Of Duty: Warzone&apos; Is Shutting Down On PS4 And Xbox One ](https://games.slashdot.org/story/26/05/30/1911241/call-of-duty-warzone-is-shutting-down-on-ps4-and-xbox-one?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-30, 20:30:53](https://news.ycombinator.com/item?id=48340315) - [Show HN: Breathe CLI – Paced resonance breathing in the macOS terminal](https://github.com/marekkowalczyk/breathe-cli)
* [2026-05-30, 20:24:36](https://lobste.rs/s/oktynl/am_i_bad_friend) - [Am I a Bad Friend?](https://drobinin.com/posts/am-i-a-bad-friend/)
* [2026-05-30, 19:47:36](https://news.ycombinator.com/item?id=48339943) - [Parallel Reconstruction of Lawful TLS Wiretapping](https://remyhax.xyz/posts/reproducing-lawful-tls-wiretapping/)
* [2026-05-30, 19:42:33](https://news.ycombinator.com/item?id=48339894) - [Jef Raskin, the Visionary Behind the Mac (2013)](https://lowendmac.com/2013/jef-raskin-the-visionary-behind-the-mac/)
* [2026-05-30, 19:34:00](https://it.slashdot.org/story/26/05/30/0559243/microsoft-criticized-for-threatening-legal-action-against-security-researcher?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Criticized for Threatening Legal Action Against Security Researcher](https://it.slashdot.org/story/26/05/30/0559243/microsoft-criticized-for-threatening-legal-action-against-security-researcher?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-30, 18:34:00](https://science.slashdot.org/story/26/05/30/0538233/mars-minerals-reveals-an-ancient-oceans-potential-for-life---and-a-possible-way-to-make-oxygen?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Mars Minerals Reveals an Ancient Ocean&apos;s Potential For Life - and a Possible Way to Make Oxygen](https://science.slashdot.org/story/26/05/30/0538233/mars-minerals-reveals-an-ancient-oceans-potential-for-life---and-a-possible-way-to-make-oxygen?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-30, 17:38:00](https://soylentnews.org/article.pl?sid=26/05/29/159239&amp;from=rss) - [Researchers Develop A New Process To Get Lithium Out Of Rocks](https://soylentnews.org/article.pl?sid=26/05/29/159239&amp;from=rss)
* [2026-05-30, 17:34:00](https://tech.slashdot.org/story/26/05/30/0511236/duckduckgo-installs-up-30-after-google-announced-ai-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [DuckDuckGo Installs Up 30% After Google Announced AI Search](https://tech.slashdot.org/story/26/05/30/0511236/duckduckgo-installs-up-30-after-google-announced-ai-search?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-30, 17:29:47](https://lobste.rs/s/fcoley/voxel_space) - [Voxel Space](https://s-macke.github.io/VoxelSpace/)
* [2026-05-30, 17:29:22](https://news.ycombinator.com/item?id=48338673) - [Zig ELF Linker Improvements Devlog](https://ziglang.org/devlog/2026/#2026-05-30)
* [2026-05-30, 17:05:39](https://lobste.rs/s/wht0iv/canonical_takes_over_flutter_desktop) - [Canonical takes over Flutter desktop maintenance &amp; roadmap](https://www.omgubuntu.co.uk/2026/05/flutter-desktop-canonical-maintained)
* [2026-05-30, 16:34:00](https://science.slashdot.org/story/26/05/30/0411212/ozempic-may-be-reshaping-the-brain-scientists-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Ozempic May Be Reshaping the Brain, Scientists Say](https://science.slashdot.org/story/26/05/30/0411212/ozempic-may-be-reshaping-the-brain-scientists-say?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-30, 16:28:58](https://news.ycombinator.com/item?id=48337987) - [Accenture to acquire Ookla](https://newsroom.accenture.com/news/2026/accenture-to-acquire-ookla-to-strengthen-network-intelligence-and-experience-with-data-and-ai-for-enterprises)
* [2026-05-30, 15:34:00](https://slashdot.org/story/26/05/29/2126214/software-stocks-have-best-month-since-2001-talk-of-saaspocalypse-subsides?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Software Stocks Have Best Month Since 2001. Talk of &apos;SaaSpocalypse&apos; Subsides](https://slashdot.org/story/26/05/29/2126214/software-stocks-have-best-month-since-2001-talk-of-saaspocalypse-subsides?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-30, 14:47:40](https://lobste.rs/s/pudkct/nixos_26_05_released) - [NixOS 26.05 released](https://nixos.org/blog/announcements/2026/nixos-2605/)
* [2026-05-30, 14:25:50](https://news.ycombinator.com/item?id=48336564) - [Voxel Space (2017)](https://s-macke.github.io/VoxelSpace/)
* [2026-05-30, 14:05:57](https://lobste.rs/s/awqcgc/nix_on_sailfish_x_sailfish_os_for_sony) - [Nix on Sailfish X (Sailfish OS for Sony Xperia)](https://toast.al/posts/techlore/2026-05-30_nix-on-sailfish-os/)
* [2026-05-30, 12:52:00](https://soylentnews.org/article.pl?sid=26/05/29/155242&amp;from=rss) - [Finding a Parking Spot in Pyongyang-Chinese Cars in N. Korea](https://soylentnews.org/article.pl?sid=26/05/29/155242&amp;from=rss)
* [2026-05-30, 11:34:00](https://hardware.slashdot.org/story/26/05/28/2121228/us-aims-to-give-cold-war-plutonium-to-startups-for-nuclear-fuel?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Aims to Give Cold War Plutonium to Startups For Nuclear Fuel](https://hardware.slashdot.org/story/26/05/28/2121228/us-aims-to-give-cold-war-plutonium-to-startups-for-nuclear-fuel?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-30, 10:51:48](https://news.ycombinator.com/item?id=48334854) - [Openrsync: An implementation of rsync, by the OpenBSD team](https://github.com/kristapsdz/openrsync)
* [2026-05-30, 09:56:42](https://news.ycombinator.com/item?id=48334515) - [Pandoc Templates](https://pandoc-templates.org/)
* [2026-05-30, 08:02:00](https://soylentnews.org/article.pl?sid=26/05/29/152259&amp;from=rss) - [AI Code Increasingly Leads to Production Failures](https://soylentnews.org/article.pl?sid=26/05/29/152259&amp;from=rss)
* [2026-05-30, 08:00:00](https://apple.slashdot.org/story/26/05/28/2242216/apple-working-to-cram-massive-gemini-model-into-iphone-to-power-new-siri?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Working To Cram Massive Gemini Model Into iPhone To Power New Siri](https://apple.slashdot.org/story/26/05/28/2242216/apple-working-to-cram-massive-gemini-model-into-iphone-to-power-new-siri?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-30, 07:22:51](https://lobste.rs/s/e1kdrn/on_rendering_diffs) - [On Rendering Diffs](https://pierre.computer/writing/on-rendering-diffs)
* [2026-05-30, 03:30:00](https://entertainment.slashdot.org/story/26/05/30/0246210/rip-marcia-lucas-oscar-winning-star-wars-editor-dies-at-80?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [RIP: Marcia Lucas, Oscar-Winning Star Wars Editor, Dies At 80](https://entertainment.slashdot.org/story/26/05/30/0246210/rip-marcia-lucas-oscar-winning-star-wars-editor-dies-at-80?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-30, 03:19:00](https://soylentnews.org/article.pl?sid=26/05/29/0212218&amp;from=rss) - [Google Search is Becoming Something Fundamentally Different](https://soylentnews.org/article.pl?sid=26/05/29/0212218&amp;from=rss)
* [2026-05-30, 01:09:37](https://lobste.rs/s/xsurh7/what_is_dickover) - [What Is a Dickover?](https://daringfireball.net/2026/05/what_is_a_dickover)
* [2026-05-29, 23:34:00](https://slashdot.org/story/26/05/29/2033206/dell-stock-surges-32-in-one-day-big-revenue-from-ai-servers-stuns-analysts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Dell Stock Surges 32% in One Day. Big Revenue From AI Servers Stuns Analysts](https://slashdot.org/story/26/05/29/2033206/dell-stock-surges-32-in-one-day-big-revenue-from-ai-servers-stuns-analysts?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-05-29, 22:36:00](https://soylentnews.org/article.pl?sid=26/05/29/028217&amp;from=rss) - [Chinese GPU Maker Sells Out Over 30,000 Gaming GPUs Within 48 Hours Despite Lukewarm Benchmarks](https://soylentnews.org/article.pl?sid=26/05/29/028217&amp;from=rss)
* [2026-05-29, 20:54:43](https://lobste.rs/s/vyi4gp/ev_stupidity_checklist) - [EV Stupidity Checklist](http://hypercritical.co/2026/05/29/ev-stupidity-checklist)
* [2026-05-29, 17:53:00](https://soylentnews.org/article.pl?sid=26/05/29/024230&amp;from=rss) - [(Next Step in the) NASA Moon Base Revealed](https://soylentnews.org/article.pl?sid=26/05/29/024230&amp;from=rss)
* [2026-05-29, 16:31:14](https://lobste.rs/s/axg3ga/i_am_retiring_from_tech_live_offline) - [I Am Retiring from Tech to Live Offline](https://openpath.quest/2026/i-am-retiring-from-tech-to-live-offline/)
* [2026-05-29, 14:07:59](https://news.ycombinator.com/item?id=48323303) - [One year of Roto, a compiled scripting language for Rust](https://blog.nlnetlabs.nl/one-year-of-roto-the-compiled-scripting-language-for-rust/)
* [2026-05-29, 13:11:00](https://soylentnews.org/article.pl?sid=26/05/29/022223&amp;from=rss) - [The Boring Internet - the Internet You Grew Up on Isn&apos;t Dying](https://soylentnews.org/article.pl?sid=26/05/29/022223&amp;from=rss)
* [2026-05-29, 08:29:00](https://soylentnews.org/article.pl?sid=26/05/28/1232210&amp;from=rss) - [HP Now Sponsoring The Linux Vendor Firmware Service / Fwupd](https://soylentnews.org/article.pl?sid=26/05/28/1232210&amp;from=rss)
* [2026-05-29, 03:47:00](https://soylentnews.org/article.pl?sid=26/05/28/1228205&amp;from=rss) - [ESA Boss Tires of Being Dragged Around by NASA Mood Swings](https://soylentnews.org/article.pl?sid=26/05/28/1228205&amp;from=rss)
* [2026-05-29, 03:22:19](https://news.ycombinator.com/item?id=48318624) - [A Gentle Introduction to Lattice-Based Cryptography [pdf]](https://cryptography101.ca/wp-content/uploads/lattice-based-cryptography.pdf)
* [2026-05-29, 02:49:43](https://news.ycombinator.com/item?id=48318402) - [I found a seashell in the middle of the desert](https://github.com/Hawzen/I-found-a-seashell-in-the-middle-of-the-desert#i-found-a-seashell-in-the-middle-of-the-desert)
* [2026-05-28, 21:00:00](https://soylentnews.org/article.pl?sid=26/05/26/1729236&amp;from=rss) - [Why Mosquitoes Swarm Your Head: They&apos;re Following Signals, Not Each Other](https://soylentnews.org/article.pl?sid=26/05/26/1729236&amp;from=rss)
* [2026-05-28, 19:11:59](https://news.ycombinator.com/item?id=48313952) - [Associative learning turns DEET from aversive to appetitive in Aedes aegypti](https://journals.biologists.com/jeb/article/229/10/jeb251935/371741/Associative-learning-switches-DEET-valence-from)
* [2026-05-28, 16:16:00](https://soylentnews.org/article.pl?sid=26/05/26/1726257&amp;from=rss) - [California Moves To Exempt Linux From Its Upcoming Age-Verification Law After Backlash](https://soylentnews.org/article.pl?sid=26/05/26/1726257&amp;from=rss)
* [2026-05-28, 14:40:38](https://news.ycombinator.com/item?id=48309623) - [Soviet 80s supercomputer project \&quot;Start\&quot;](https://start.iis.nsk.su/)
* [2026-05-28, 11:34:00](https://soylentnews.org/article.pl?sid=26/05/26/1725241&amp;from=rss) - [Researchers Issue Warning About using WiFi Routers as Surveillance Tech](https://soylentnews.org/article.pl?sid=26/05/26/1725241&amp;from=rss)
* [2026-05-28, 09:42:40](https://news.ycombinator.com/item?id=48306713) - [Racket v9.2](https://blog.racket-lang.org/2026/05/racket-v9-2.html)
* [2026-05-28, 06:53:00](https://soylentnews.org/article.pl?sid=26/05/26/1722203&amp;from=rss) - [5 Ways Pope Leo Says AI Could Warp Humanity](https://soylentnews.org/article.pl?sid=26/05/26/1722203&amp;from=rss)
* [2026-05-28, 02:03:00](https://soylentnews.org/article.pl?sid=26/05/26/1718219&amp;from=rss) - [Power Prices to Fall for Most Customers, With Bigger Drops for Businesses](https://soylentnews.org/article.pl?sid=26/05/26/1718219&amp;from=rss)
* [2026-05-27, 21:19:00](https://soylentnews.org/article.pl?sid=26/05/26/179259&amp;from=rss) - [Nature Might Have a Universal Rhythm](https://soylentnews.org/article.pl?sid=26/05/26/179259&amp;from=rss)
* [2026-05-27, 16:35:00](https://soylentnews.org/article.pl?sid=26/05/26/0146250&amp;from=rss) - [In Addition to Space Stations, Vast Says It Will Now Build High-Power Satellites](https://soylentnews.org/article.pl?sid=26/05/26/0146250&amp;from=rss)
* [2026-05-27, 11:52:00](https://soylentnews.org/article.pl?sid=26/05/26/0145204&amp;from=rss) - [With &apos;The Mandalorian and Grogu&apos; Out, Can &apos;Star Wars&apos; Ever Feel Like a Big-Screen Event Again?](https://soylentnews.org/article.pl?sid=26/05/26/0145204&amp;from=rss)
* [2026-05-27, 07:05:00](https://soylentnews.org/article.pl?sid=26/05/26/0141244&amp;from=rss) - [Google Antigravity 2.0 Forced Update Strips Code Editor, Leaves Developers With a Chat Window](https://soylentnews.org/article.pl?sid=26/05/26/0141244&amp;from=rss)
* [2026-05-27, 02:24:00](https://soylentnews.org/article.pl?sid=26/05/25/1525251&amp;from=rss) - [AI Sackings Reach New Zealand, Which Will Use It to Eject 14 Percent of Government Staff](https://soylentnews.org/article.pl?sid=26/05/25/1525251&amp;from=rss)
