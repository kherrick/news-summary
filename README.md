# [News Summary](https://kherrick.github.io/news-summary/)

## Technology and Innovation

* [Palantir extends reach into British state as gets access to sensitive FCA data](https://www.theguardian.com/technology/2026/mar/22/palantir-extends-reach-into-british-state-as-it-gets-access-to-sensitive-fca-data) ([comments](https://news.ycombinator.com/item?id=47480200))

* [Wayland Set the Linux Desktop Back by 10 Years](https://soylentnews.org/article.pl?sid=26/03/21/1339251&amp;from=rss) ([comments](https://news.ycombinator.com/item?id=47479751))

* [Why I love NixOS](https://www.birkey.co/2026-03-22-why-i-love-nixos.html) ([comments](https://news.ycombinator.com/item?id=47479751))

* [HopTab – Open source macOS app switcher and tiler that replaces Cmd+Tab](https://www.royalbhati.com/hoptab) ([comments](https://news.ycombinator.com/item?id=47474967))

* [Flash-MoE: Running a 397B Parameter Model on a Laptop](https://github.com/danveloper/flash-moe) ([comments](https://news.ycombinator.com/item?id=47476422))

## Programming and Development

* [Five Years of Running a Systems Reading Group at Microsoft](https://armaansood.com/posts/systems-reading-group/) ([comments](https://news.ycombinator.com/item?id=47479627))

* [The Slow Collapse of MkDocs](https://fpgmaas.com/blog/collapse-of-mkdocs/) ([comments](https://lobste.rs/s/qhtpe5/slow_collapse_mkdocs))

* [More common mistakes to avoid when creating system architecture diagrams](https://www.ilograph.com/blog/posts/more-common-diagram-mistakes/) ([comments](https://news.ycombinator.com/item?id=47476562))

* [The Future of Version Control](https://bramcohen.com/p/manyana) ([comments](https://news.ycombinator.com/item?id=47478401))

* [My first patch to the linux kernel](https://pooladkhay.com/posts/first-kernel-patch/) ([comments](https://news.ycombinator.com/item?id=47477090))

* [A Case Against Currying](https://emi-h.com/articles/a-case-against-currying.html) ([comments](https://news.ycombinator.com/item?id=47477090))

## Artificial Intelligence

* [Brute-forcing my algorithmic ignorance with an LLM in 7 days](http://blog.dominikrudnik.pl/my-google-recruitment-journey-part-1) ([comments](https://news.ycombinator.com/item?id=47476776))

* [Google Search Is Now Sometimes Using AI To Replace Headlines](https://tech.slashdot.org/story/26/03/22/0517221/google-search-is-now-sometimes-using-ai-to-replace-headlines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://tech.slashdot.org/story/26/03/22/0517221/google-search-is-now-sometimes-using-ai-to-replace-headlines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Show HN: Revise – An AI Editor for Documents](https://revise.io) ([comments](https://news.ycombinator.com/item?id=47477339))

## Science and Environment

* [Meteor Rumbles Over Houston, as Six-Pound Fragment Crashes Into a Texas Home](https://science.slashdot.org/story/26/03/22/0542203/meteor-rumbles-over-houston-as-six-pound-fragment-crashes-into-a-texas-home?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://science.slashdot.org/story/26/03/22/0542203/meteor-rumbles-over-houston-as-six-pound-fragment-crashes-into-a-texas-home?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Juicier Steaks Soon? The UK Approves Testing of Gene-Edited Cow Feed](https://science.slashdot.org/story/26/03/21/2036248/juicier-steaks-soon-the-uk-approves-testing-of-gene-edited-cow-feed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://science.slashdot.org/story/26/03/21/2036248/juicier-steaks-soon-the-uk-approves-testing-of-gene-edited-cow-feed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [This Fungus Can Make Water Freeze](https://soylentnews.org/article.pl?sid=26/03/21/1319201&amp;from=rss) ([comments](https://soylentnews.org/article.pl?sid=26/03/21/1319201&amp;from=rss))

## Society and Media

* [William Shatner Celebrates 95th Birthday, Smokes Cigar, Revisits 'Rocket Man' and Tests X Money](https://entertainment.slashdot.org/story/26/03/22/1752237/william-shatner-celebrates-95th-birthday-smokes-cigar-revisits-rocket-man-and-tests-x-money?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://entertainment.slashdot.org/story/26/03/22/1752237/william-shatner-celebrates-95th-birthday-smokes-cigar-revisits-rocket-man-and-tests-x-money?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [US Cable TV Industry Faces 'Dramatic Collapse' as Local Operators Shut Down - or Become ISPs](https://entertainment.slashdot.org/story/26/03/22/0422221/us-cable-tv-industry-faces-dramatic-collapse-as-local-operators-shut-down---or-become-isps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://entertainment.slashdot.org/story/26/03/22/0422221/us-cable-tv-industry-faces-dramatic-collapse-as-local-operators-shut-down---or-become-isps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

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

* [2026-03-22, 17:56:26](https://news.ycombinator.com/item?id=47480200) - [Palantir extends reach into British state as gets access to sensitive FCA data](https://www.theguardian.com/technology/2026/mar/22/palantir-extends-reach-into-british-state-as-it-gets-access-to-sensitive-fca-data)
* [2026-03-22, 17:55:00](https://entertainment.slashdot.org/story/26/03/22/1752237/william-shatner-celebrates-95th-birthday-smokes-cigar-revisits-rocket-man-and-tests-x-money?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [William Shatner Celebrates 95th Birthday, Smokes Cigar, Revisits &apos;Rocket Man&apos; and Tests X Money](https://entertainment.slashdot.org/story/26/03/22/1752237/william-shatner-celebrates-95th-birthday-smokes-cigar-revisits-rocket-man-and-tests-x-money?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-22, 17:17:06](https://news.ycombinator.com/item?id=47479751) - [Why I love NixOS](https://www.birkey.co/2026-03-22-why-i-love-nixos.html)
* [2026-03-22, 17:09:00](https://soylentnews.org/article.pl?sid=26/03/21/1339251&amp;from=rss) - [Wayland Set the Linux Desktop Back by 10 Years](https://soylentnews.org/article.pl?sid=26/03/21/1339251&amp;from=rss)
* [2026-03-22, 17:06:38](https://news.ycombinator.com/item?id=47479627) - [Five Years of Running a Systems Reading Group at Microsoft](https://armaansood.com/posts/systems-reading-group/)
* [2026-03-22, 16:38:38](https://lobste.rs/s/702zix/let_s_see_paul_allen_s_simd_csv_parser) - [Let&apos;s see Paul Allen&apos;s SIMD CSV parser](https://chunkofcoal.com/posts/simd-csv/)
* [2026-03-22, 16:34:00](https://slashdot.org/story/26/03/21/2326202/a-cnn-producer-explores-the-magic-ai-workout-mirror?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [A CNN Producer Explores the &apos;Magic AI&apos; Workout Mirror](https://slashdot.org/story/26/03/21/2326202/a-cnn-producer-explores-the-magic-ai-workout-mirror?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-22, 16:23:50](https://news.ycombinator.com/item?id=47479115) - [Ask HN: Apple terminated our dev account over a rogue employee](https://news.ycombinator.com/item?id=47479115)
* [2026-03-22, 16:18:42](https://lobste.rs/s/qhtpe5/slow_collapse_mkdocs) - [The Slow Collapse of MkDocs](https://fpgmaas.com/blog/collapse-of-mkdocs/)
* [2026-03-22, 16:15:55](https://lobste.rs/s/lchmcm/all_tests_pass_short_story) - [All tests pass: a short story](https://evanhahn.com/all-tests-pass-a-short-story/)
* [2026-03-22, 16:11:14](https://lobste.rs/s/gwp3b9/i_hate_programming_wayland_applications) - [I Hate Programming Wayland Applications](https://www.p4m.dev/posts/29/index.html)
* [2026-03-22, 16:03:42](https://lobste.rs/s/bgawym/my_first_patch_linux_kernel) - [my first patch to the linux kernel](https://pooladkhay.com/posts/first-kernel-patch/)
* [2026-03-22, 15:43:21](https://news.ycombinator.com/item?id=47478687) - [MAUI Is Coming to Linux](https://avaloniaui.net/blog/maui-avalonia-preview-1)
* [2026-03-22, 15:34:00](https://tech.slashdot.org/story/26/03/22/0517221/google-search-is-now-sometimes-using-ai-to-replace-headlines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Search Is Now Sometimes Using AI To Replace Headlines](https://tech.slashdot.org/story/26/03/22/0517221/google-search-is-now-sometimes-using-ai-to-replace-headlines?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-22, 15:29:02](https://lobste.rs/s/w2x9dq/case_against_currying) - [A Case Against Currying](https://emi-h.com/articles/a-case-against-currying.html)
* [2026-03-22, 15:16:28](https://news.ycombinator.com/item?id=47478401) - [The Future of Version Control](https://bramcohen.com/p/manyana)
* [2026-03-22, 15:15:46](https://lobste.rs/s/1vcuqm/manyana_coherent_vision_for_future) - [Manyana: A Coherent Vision For The Future Of Version Control](https://bramcohen.com/p/manyana)
* [2026-03-22, 14:34:00](https://hardware.slashdot.org/story/26/03/21/0548213/amazon-plans-to-test-four-legged-robots-on-wheels-for-deliveries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amazon Plans to Test Four-Legged Robots on Wheels for Deliveries](https://hardware.slashdot.org/story/26/03/21/0548213/amazon-plans-to-test-four-legged-robots-on-wheels-for-deliveries?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-22, 14:12:13](https://lobste.rs/s/oe0qp1/my_home_network_observes_bedtime_with) - [My home network observes bedtime with OpenBSD and pf](https://ratfactor.com/openbsd/pf-gateway-bedtime)
* [2026-03-22, 13:30:45](https://lobste.rs/s/xpek6g/windows_native_app_development_is_mess) - [Windows Native App Development Is a Mess](https://domenic.me/windows-native-dev/)
* [2026-03-22, 13:28:45](https://news.ycombinator.com/item?id=47477339) - [Show HN: Revise – An AI Editor for Documents](https://revise.io)
* [2026-03-22, 13:24:38](https://news.ycombinator.com/item?id=47477284) - [Building an FPGA 3dfx Voodoo with Modern RTL Tools](https://noquiche.fyi/voodoo)
* [2026-03-22, 13:03:55](https://news.ycombinator.com/item?id=47477090) - [A case against currying](https://emi-h.com/articles/a-case-against-currying.html)
* [2026-03-22, 12:40:43](https://lobste.rs/s/ebvrrh/floci_light_fluffy_always_free_aws_local) - [floci: Light, fluffy, and always free - AWS Local Emulator](https://github.com/hectorvent/floci)
* [2026-03-22, 12:28:38](https://news.ycombinator.com/item?id=47476821) - [Project Nomad – Knowledge That Never Goes Offline](https://www.projectnomad.us)
* [2026-03-22, 12:23:04](https://news.ycombinator.com/item?id=47476776) - [Brute-forcing my algorithmic ignorance with an LLM in 7 days](http://blog.dominikrudnik.pl/my-google-recruitment-journey-part-1)
* [2026-03-22, 12:22:00](https://soylentnews.org/article.pl?sid=26/03/21/1337239&amp;from=rss) - [Analysis From West Point Warns That Strait of Hormuz Blockade Will Strangle US Defense Industry](https://soylentnews.org/article.pl?sid=26/03/21/1337239&amp;from=rss)
* [2026-03-22, 11:53:37](https://news.ycombinator.com/item?id=47476566) - [The IBM scientist who rewrote the rules of information just won a Turing Award](https://www.ibm.com/think/news/ibm-scientist-charles-bennett-turing-award)
* [2026-03-22, 11:51:52](https://news.ycombinator.com/item?id=47476562) - [More common mistakes to avoid when creating system architecture diagrams](https://www.ilograph.com/blog/posts/more-common-diagram-mistakes/)
* [2026-03-22, 11:34:00](https://entertainment.slashdot.org/story/26/03/22/0422221/us-cable-tv-industry-faces-dramatic-collapse-as-local-operators-shut-down---or-become-isps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [US Cable TV Industry Faces &apos;Dramatic Collapse&apos; as Local Operators Shut Down - or Become ISPs](https://entertainment.slashdot.org/story/26/03/22/0422221/us-cable-tv-industry-faces-dramatic-collapse-as-local-operators-shut-down---or-become-isps?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-22, 11:30:03](https://news.ycombinator.com/item?id=47476422) - [Flash-MoE: Running a 397B Parameter Model on a Laptop](https://github.com/danveloper/flash-moe)
* [2026-03-22, 11:09:34](https://news.ycombinator.com/item?id=47476315) - [Reports of code&apos;s death are greatly exaggerated](https://stevekrouse.com/precision)
* [2026-03-22, 09:57:31](https://news.ycombinator.com/item?id=47475938) - [Windows native app development is a mess](https://domenic.me/windows-native-dev/)
* [2026-03-22, 09:37:30](https://news.ycombinator.com/item?id=47475859) - [Ask HN: AI productivity gains – do you fire devs or build better products?](https://news.ycombinator.com/item?id=47475859)
* [2026-03-22, 09:03:32](https://lobste.rs/s/8cdg1q/little_known_development_methods_2009) - [Little Known Development Methods (2009)](https://lr0.org/blog/p/lkdm/)
* [2026-03-22, 07:37:00](https://soylentnews.org/article.pl?sid=26/03/21/1319201&amp;from=rss) - [This Fungus Can Make Water Freeze](https://soylentnews.org/article.pl?sid=26/03/21/1319201&amp;from=rss)
* [2026-03-22, 07:34:00](https://science.slashdot.org/story/26/03/22/0542203/meteor-rumbles-over-houston-as-six-pound-fragment-crashes-into-a-texas-home?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Meteor Rumbles Over Houston, as Six-Pound Fragment Crashes Into a Texas Home](https://science.slashdot.org/story/26/03/22/0542203/meteor-rumbles-over-houston-as-six-pound-fragment-crashes-into-a-texas-home?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-22, 07:12:14](https://lobste.rs/s/hmb3mz/security_advisory_for_cargo) - [Security advisory for Cargo](https://blog.rust-lang.org/2026/03/21/cve-2026-33056/)
* [2026-03-22, 06:23:59](https://news.ycombinator.com/item?id=47474967) - [HopTab – Open source macOS app switcher and tiler that replaces Cmd+Tab](https://www.royalbhati.com/hoptab)
* [2026-03-22, 06:05:18](https://lobste.rs/s/hun60m/ubuntu_26_04_ends_46_years_silent_sudo) - [Ubuntu 26.04 Ends 46 Years of Silent sudo Passwords](https://pbxscience.com/ubuntu-26-04-ends-46-years-of-silent-sudo-passwords/)
* [2026-03-22, 06:04:06](https://lobste.rs/s/uaxpxu/hide_macos_tahoe_s_menu_icons) - [Hide macOS Tahoe&apos;s Menu Icons](https://512pixels.net/2026/03/hide-macos-tahoes-menu-icons-with-this-one-simple-trick/)
* [2026-03-22, 06:03:46](https://lobste.rs/s/gukzip/three_pillars_javascript_bloat) - [The Three Pillars of JavaScript Bloat](https://43081j.com/2026/03/three-pillars-of-javascript-bloat)
* [2026-03-22, 04:34:00](https://tech.slashdot.org/story/26/03/22/0317216/teslas-upcoming-electric-big-rig-is-already-a-hit-with-truckers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Tesla&apos;s Upcoming Electric Big Rig Is Already a Hit with Truckers](https://tech.slashdot.org/story/26/03/22/0317216/teslas-upcoming-electric-big-rig-is-already-a-hit-with-truckers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-22, 04:08:27](https://lobste.rs/s/bc45sc/burrow_gopher_browser_written_html) - [Burrow - A gopher browser written in HTML](https://burrow.din.gy/)
* [2026-03-22, 03:43:51](https://news.ycombinator.com/item?id=47474255) - [Cloudflare flags archive.today as \&quot;C&amp;C/Botnet\&quot;; no longer resolves via 1.1.1.2](https://radar.cloudflare.com/domains/domain/archive.today)
* [2026-03-22, 02:52:00](https://soylentnews.org/article.pl?sid=26/03/19/208240&amp;from=rss) - [Tech Hobbyist Makes Shoulder-Mounted Guided Missile Prototype With $96 In Parts And A 3D Printer](https://soylentnews.org/article.pl?sid=26/03/19/208240&amp;from=rss)
* [2026-03-22, 02:04:31](https://news.ycombinator.com/item?id=47473718) - [The three pillars of JavaScript bloat](https://43081j.com/2026/03/three-pillars-of-javascript-bloat)
* [2026-03-22, 00:53:55](https://news.ycombinator.com/item?id=47473231) - [JavaScript Is Enough](https://geajs.com/)
* [2026-03-22, 00:43:12](https://lobste.rs/s/f7pgng/what_if_i_stored_data_my_mouse) - [What if I stored data in my mouse](https://www.timwehrle.de/blog/what-if-i-stored-data-in-my-mouse/)
* [2026-03-22, 00:42:00](https://it.slashdot.org/story/26/03/22/0039257/trivy-supply-chain-attack-spreads-triggers-self-spreading-canisterworm-across-47-npm-packages?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Trivy Supply Chain Attack Spreads, Triggers Self-Spreading CanisterWorm Across 47 npm Packages](https://it.slashdot.org/story/26/03/22/0039257/trivy-supply-chain-attack-spreads-triggers-self-spreading-canisterworm-across-47-npm-packages?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-21, 22:38:00](https://yro.slashdot.org/story/26/03/21/0649247/eff-tells-publishers-blocking-the-internet-archive-wont-stop-ai-but-it-will-erase-the-historical-record?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [EFF Tells Publishers: Blocking the Internet Archive Won&apos;t Stop AI, But It Will Erase The Historical Record](https://yro.slashdot.org/story/26/03/21/0649247/eff-tells-publishers-blocking-the-internet-archive-wont-stop-ai-but-it-will-erase-the-historical-record?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-21, 22:36:10](https://lobste.rs/s/gn3gok/acme_device_attestation_smallstep) - [ACME device attestation, smallstep and pkcs11: attezt](https://linderud.dev/blog/acme-device-attestation-smallstep-and-pkcs11-attezt/)
* [2026-03-21, 22:07:00](https://soylentnews.org/article.pl?sid=26/03/19/205228&amp;from=rss) - [Nearly Half of UK Adults Happy to Use ChatGPT as a Counsellor](https://soylentnews.org/article.pl?sid=26/03/19/205228&amp;from=rss)
* [2026-03-21, 21:38:55](https://lobste.rs/s/rnfqfd/maximally_minimal_view_types) - [Maximally minimal view types](https://smallcultfollowing.com/babysteps/blog/2026/03/21/view-types-max-min/)
* [2026-03-21, 21:38:00](https://yro.slashdot.org/story/26/03/21/2135236/millions-face-mobile-internet-outages-in-moscow-digital-crackdown-feared?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Millions Face Mobile Internet Outages in Moscow. &apos;Digital Crackdown&apos; Feared](https://yro.slashdot.org/story/26/03/21/2135236/millions-face-mobile-internet-outages-in-moscow-digital-crackdown-feared?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-21, 21:37:27](https://lobste.rs/s/jr9zx6/ssh_certificates_git_signing) - [SSH certificates and git signing](https://codon.org.uk/~mjg59/blog/p/ssh-certificates-and-git-signing/)
* [2026-03-21, 21:04:37](https://lobste.rs/s/nsnlxi/bye_bye_rtmp) - [bye bye RTMP](https://daniel.haxx.se/blog/2026/03/21/bye-bye-rtmp/)
* [2026-03-21, 20:38:00](https://science.slashdot.org/story/26/03/21/2036248/juicier-steaks-soon-the-uk-approves-testing-of-gene-edited-cow-feed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Juicier Steaks Soon? The UK Approves Testing of Gene-Edited Cow Feed](https://science.slashdot.org/story/26/03/21/2036248/juicier-steaks-soon-the-uk-approves-testing-of-gene-edited-cow-feed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-21, 19:34:00](https://science.slashdot.org/story/26/03/21/1838236/can-private-space-companies-replace-the-iss-before-2030?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Can Private Space Companies Replace the ISS Before 2030?](https://science.slashdot.org/story/26/03/21/1838236/can-private-space-companies-replace-the-iss-before-2030?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-21, 18:34:00](https://tech.slashdot.org/story/26/03/21/1712201/intel-nvidia-amd-gpu-drivers-finally-play-nice-with-reactos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Intel, NVIDIA, AMD GPU Drivers Finally Play Nice With ReactOS](https://tech.slashdot.org/story/26/03/21/1712201/intel-nvidia-amd-gpu-drivers-finally-play-nice-with-reactos?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-21, 17:34:00](https://slashdot.org/story/26/03/21/0126208/50-of-consumers-prefer-brands-that-avoid-genai-content?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [50% of Consumers Prefer Brands That Avoid GenAI Content](https://slashdot.org/story/26/03/21/0126208/50-of-consumers-prefer-brands-that-avoid-genai-content?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-21, 17:22:00](https://soylentnews.org/article.pl?sid=26/03/19/203221&amp;from=rss) - [Nvidia Resumes Manufacturing of H200 Chips for China, CEO Says](https://soylentnews.org/article.pl?sid=26/03/19/203221&amp;from=rss)
* [2026-03-21, 16:40:05](https://lobste.rs/s/hlsbcu/antix_26_released_with_5_init_systems) - [antiX-26 released with 5 init systems](https://antixlinux.com/antix-26-released/)
* [2026-03-21, 16:34:00](https://news.slashdot.org/story/26/03/21/027217/firefox-announces-built-in-vpn-and-other-new-features---and-introduces-its-new-mascot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Firefox Announces Built-In VPN and Other New Features - and Introduces Its New Mascot](https://news.slashdot.org/story/26/03/21/027217/firefox-announces-built-in-vpn-and-other-new-features---and-introduces-its-new-mascot?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2026-03-21, 15:16:27](https://lobste.rs/s/uqeo3m/solod_go_can_be_better_c) - [Solod: Go can be a better C](https://antonz.org/solod/)
* [2026-03-21, 14:58:47](https://lobste.rs/s/vxsjiv/why_craft_lovers_are_losing_their_craft) - [Why craft-lovers are losing their craft](https://writings.hongminhee.org/2026/03/craft-alienation-llm/)
* [2026-03-21, 12:40:00](https://soylentnews.org/article.pl?sid=26/03/19/201233&amp;from=rss) - [Tundra Tongue: The Science Behind a Very Cold Mistake](https://soylentnews.org/article.pl?sid=26/03/19/201233&amp;from=rss)
* [2026-03-21, 09:38:09](https://lobste.rs/s/dhogio/thoughts_on_openai_acquiring_astral_uv) - [Thoughts on OpenAI acquiring Astral and uv/ruff/ty](https://simonwillison.net/2026/Mar/19/openai-acquiring-astral/)
* [2026-03-21, 07:55:00](https://soylentnews.org/article.pl?sid=26/03/19/1958201&amp;from=rss) - [Afroman Wins &apos;Lemon Pound Cake&apos; Lawsuit Over Raid-Turned-Music-Video](https://soylentnews.org/article.pl?sid=26/03/19/1958201&amp;from=rss)
* [2026-03-21, 03:07:00](https://soylentnews.org/article.pl?sid=26/03/19/1638217&amp;from=rss) - [How Should We Define Mathematical Beauty in the AI Age?](https://soylentnews.org/article.pl?sid=26/03/19/1638217&amp;from=rss)
* [2026-03-20, 22:15:00](https://soylentnews.org/article.pl?sid=26/03/19/1636248&amp;from=rss) - [Invisible Malicious Code Attacks 151 GitHub Repos And VS Code — Glassworm Attack Uses Blockchain](https://soylentnews.org/article.pl?sid=26/03/19/1636248&amp;from=rss)
* [2026-03-20, 17:53:00](https://soylentnews.org/article.pl?sid=26/03/19/1635218&amp;from=rss) - [Researchers Played Music to Cells – Aggressiveness of Laryngeal Cancer Decreased](https://soylentnews.org/article.pl?sid=26/03/19/1635218&amp;from=rss)
* [2026-03-20, 12:46:00](https://soylentnews.org/article.pl?sid=26/03/19/0318230&amp;from=rss) - [Elon Musk Says His Chipmaking &apos;Terafab Project&apos; Venture Will Launch in Seven Days](https://soylentnews.org/article.pl?sid=26/03/19/0318230&amp;from=rss)
* [2026-03-20, 07:57:00](https://soylentnews.org/article.pl?sid=26/03/19/0310236&amp;from=rss) - [Massive Interpol Operation Takes Down 45,000 Ip Addresses and Leads to 94 Arrests](https://soylentnews.org/article.pl?sid=26/03/19/0310236&amp;from=rss)
* [2026-03-20, 03:11:00](https://soylentnews.org/article.pl?sid=26/03/19/035202&amp;from=rss) - [The Ongoing Strait of Hormuz Blockage Will Impact the Semiconductor and AI Industries](https://soylentnews.org/article.pl?sid=26/03/19/035202&amp;from=rss)
* [2026-03-19, 22:23:00](https://soylentnews.org/article.pl?sid=26/03/19/0258237&amp;from=rss) - [Over Fifteen Years Later, Microsoft Morged My Diagram](https://soylentnews.org/article.pl?sid=26/03/19/0258237&amp;from=rss)
* [2026-03-19, 19:51:07](https://news.ycombinator.com/item?id=47444909) - [My first patch to the Linux kernel](https://pooladkhay.com/posts/first-kernel-patch/)
* [2026-03-19, 17:38:00](https://soylentnews.org/article.pl?sid=26/03/18/1530220&amp;from=rss) - [Predicted by Einstein 100 Years Ago, This Cosmic Phenomenon Has Finally Been Observed](https://soylentnews.org/article.pl?sid=26/03/18/1530220&amp;from=rss)
* [2026-03-19, 12:53:00](https://soylentnews.org/article.pl?sid=26/03/18/1524211&amp;from=rss) - [100 Years Later, Where is Robert Goddard&apos;s First Liquid-Fuel Rocket?](https://soylentnews.org/article.pl?sid=26/03/18/1524211&amp;from=rss)
* [2026-03-19, 08:08:00](https://soylentnews.org/article.pl?sid=26/03/18/1522208&amp;from=rss) - [The Science of How Fireflies Stay in Sync](https://soylentnews.org/article.pl?sid=26/03/18/1522208&amp;from=rss)
* [2026-03-19, 06:47:54](https://news.ycombinator.com/item?id=47435783) - [A review of dice that came with the white castle](https://boardgamegeek.com/thread/3533812/a-review-of-dice-that-came-with-the-white-castle)
* [2026-03-19, 03:23:00](https://soylentnews.org/article.pl?sid=26/03/17/0844255&amp;from=rss) - [Humanities in the Machine](https://soylentnews.org/article.pl?sid=26/03/17/0844255&amp;from=rss)
* [2026-03-18, 23:55:42](https://news.ycombinator.com/item?id=47432893) - [Monuses and Heaps](https://doisinkidney.com/posts/2026-03-03-monus-heaps.html)
* [2026-03-18, 22:38:00](https://soylentnews.org/article.pl?sid=26/03/17/0839217&amp;from=rss) - [Chimps’ Love for Crystals Could Help Us Understand Our Own Ancestors’ Fascination With Gems](https://soylentnews.org/article.pl?sid=26/03/17/0839217&amp;from=rss)
* [2026-03-18, 18:16:04](https://news.ycombinator.com/item?id=47429285) - [Why Lab Coats Turned White](https://www.asimov.press/p/lab-coat)
* [2026-03-18, 17:54:00](https://soylentnews.org/politics/article.pl?sid=26/03/17/0835230&amp;from=rss) - [FCC Chairman Threatens To Revoke TV Licenses Over Iran Coverage](https://soylentnews.org/politics/article.pl?sid=26/03/17/0835230&amp;from=rss)
* [2026-03-18, 16:51:51](https://news.ycombinator.com/item?id=47428117) - [Node.js worker threads are problematic, but they work great for us](https://www.inngest.com/blog/node-worker-threads)
* [2026-03-18, 15:44:08](https://news.ycombinator.com/item?id=47427224) - [25 Years of Eggs](https://www.john-rush.com/posts/eggs-25-years-20260219.html)
* [2026-03-18, 13:04:00](https://soylentnews.org/article.pl?sid=26/03/17/0831246&amp;from=rss) - [Woman Sneezes Out Maggots After Fly Larvae Get Trapped in Her Deviated Septum](https://soylentnews.org/article.pl?sid=26/03/17/0831246&amp;from=rss)
* [2026-03-18, 08:21:00](https://soylentnews.org/article.pl?sid=26/03/17/0828240&amp;from=rss) - [Research Shows How Lost Memories Can be Reactivated](https://soylentnews.org/article.pl?sid=26/03/17/0828240&amp;from=rss)
* [2026-03-18, 03:36:00](https://soylentnews.org/article.pl?sid=26/03/17/0827224&amp;from=rss) - [Apocalyptic Beliefs Are No Longer Fringe—and They&apos;re Shaping How People Respond](https://soylentnews.org/article.pl?sid=26/03/17/0827224&amp;from=rss)
