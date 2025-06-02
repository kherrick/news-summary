# [News Summary](https://kherrick.github.io/news-summary/)

## Cybersecurity and Software Vulnerabilities

* [CVE 2025-31200 CoreAudio bug exploited in the wild](https://blog.noahhw.dev/posts/cve-2025-31200/) ([comments](https://lobste.rs/s/wxdkfg/cve_2025_31200_coreaudio_bug_exploited))

* [New Moderate Linux Flaw Allows Password Hash Theft Via Core Dumps in Ubuntu, RHEL, Fedora](https://it.slashdot.org/story/25/06/02/0140228/new-moderate-linux-flaw-allows-password-hash-theft-via-core-dumps-in-ubuntu-rhel-fedora?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://it.slashdot.org/story/25/06/02/0140228/new-moderate-linux-flaw-allows-password-hash-theft-via-core-dumps-in-ubuntu-rhel-fedora?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Botnet Hacks 9,000+ ASUS Routers to Add Persistent SSH Backdoor](https://soylentnews.org/article.pl?sid=25/05/29/0642240&amp;from=rss)

## Artificial Intelligence

* [Business Insider Recommended Nonexistent Books To Staff As It Leans Into AI](https://news.slashdot.org/story/25/06/02/1537210/business-insider-recommended-nonexistent-books-to-staff-as-it-leans-into-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://news.slashdot.org/story/25/06/02/1537210/business-insider-recommended-nonexistent-books-to-staff-as-it-leans-into-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [The Unreliability of LLMs and What Lies Ahead](https://verissimo.substack.com/p/verissimo-monthly-may-2025) ([comments](https://news.ycombinator.com/item?id=44160573))

* [ReasoningGym: Reasoning Environments for RL with Verifiable Rewards](https://arxiv.org/abs/2505.24760) ([comments](https://news.ycombinator.com/item?id=44157077))

* [Some Signs of AI Model Collapse Begin to Reveal Themselves](https://soylentnews.org/article.pl?sid=25/05/28/1747229&amp;from=rss)

## Science and Space

* [New JWST Observations of 'Trans-Neptunian Objects' Could Help Reveal Our Solar System's Past](https://soylentnews.org/article.pl?sid=25/06/01/1439246&amp;from=rss)

* [Clock Still Keeping Village on Time After 500 Years](https://soylentnews.org/article.pl?sid=25/06/01/159251&amp;from=rss) ([comments](https://news.ycombinator.com/item?id=44157177))

* [Scientists Just Discovered A Mysterious New World Far Beyond Pluto](https://soylentnews.org/article.pl?sid=25/05/28/0352254&amp;from=rss)

## Software Development and Engineering

* [Faster route propagation by rewriting our Traefik gateway in Rust](https://rivet.gg/blog/2025-06-02-faster-route-propagation-by-rewriting-our-traefik-gateway-in-rust) ([comments](https://lobste.rs/s/nahh5c/faster_route_propagation_by_rewriting))

* [Gleam v1.11.0 released](https://gleam.run/news/gleam-javascript-gets-30-percent-faster/) ([comments](https://lobste.rs/s/02usbk/gleam_v1_11_0_released))

* [How We Migrated 30+ Kubernetes Clusters to Terraform](https://medium.com/learnings-from-the-paas/how-we-migrated-30-kubernetes-clusters-to-terraform-cd2b1cef8b84) ([comments](https://lobste.rs/s/cfwjgx/how_we_migrated_30_kubernetes_clusters))

## Technology and Society

* [ISP Settles With Record Labels That Demanded Mass Termination of Internet Users](https://tech.slashdot.org/story/25/06/02/1811207/isp-settles-with-record-labels-that-demanded-mass-termination-of-internet-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://tech.slashdot.org/story/25/06/02/1811207/isp-settles-with-record-labels-that-demanded-mass-termination-of-internet-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

* [Going To an Office and Pretending To Work: A Business That's Booming in China](https://slashdot.org/story/25/06/02/0858222/going-to-an-office-and-pretending-to-work-a-business-thats-booming-in-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)

* [Microsoft Mandates Universal USB-C Functionality To End 'USB-C Port Confusion' on Windows 11 Devices](https://tech.slashdot.org/story/25/06/02/1640227/microsoft-mandates-universal-usb-c-functionality-to-end-usb-c-port-confusion-on-windows-11-devices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) ([comments](https://tech.slashdot.org/story/25/06/02/1640227/microsoft-mandates-universal-usb-c-functionality-to-end-usb-c-port-confusion-on-windows-11-devices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed))

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

* [2025-06-02, 18:56:14](https://lobste.rs/s/wxdkfg/cve_2025_31200_coreaudio_bug_exploited) - [CVE 2025-31200 CoreAudio bug exploited in the wild](https://blog.noahhw.dev/posts/cve-2025-31200/)
* [2025-06-02, 18:10:00](https://tech.slashdot.org/story/25/06/02/1811207/isp-settles-with-record-labels-that-demanded-mass-termination-of-internet-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [ISP Settles With Record Labels That Demanded Mass Termination of Internet Users](https://tech.slashdot.org/story/25/06/02/1811207/isp-settles-with-record-labels-that-demanded-mass-termination-of-internet-users?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-02, 17:44:28](https://news.ycombinator.com/item?id=44161271) - [Disaster awaits if we don&apos;t secure IoT now](https://spectrum.ieee.org/iot-security-root-of-trust)
* [2025-06-02, 17:25:00](https://science.slashdot.org/story/25/06/02/172202/web-scraping-ai-bots-cause-disruption-for-scientific-databases-and-journals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Web-Scraping AI Bots Cause Disruption For Scientific Databases and Journals](https://science.slashdot.org/story/25/06/02/172202/web-scraping-ai-bots-cause-disruption-for-scientific-databases-and-journals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-02, 17:00:38](https://news.ycombinator.com/item?id=44160870) - [Piramidal (YC W24) Is Hiring a Senior Full Stack Engineer](https://www.ycombinator.com/companies/piramidal/jobs/1a1PgE9-senior-full-stack-engineer)
* [2025-06-02, 16:44:00](https://tech.slashdot.org/story/25/06/02/1640227/microsoft-mandates-universal-usb-c-functionality-to-end-usb-c-port-confusion-on-windows-11-devices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Microsoft Mandates Universal USB-C Functionality To End &apos;USB-C Port Confusion&apos; on Windows 11 Devices](https://tech.slashdot.org/story/25/06/02/1640227/microsoft-mandates-universal-usb-c-functionality-to-end-usb-c-port-confusion-on-windows-11-devices?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-02, 16:36:46](https://news.ycombinator.com/item?id=44160573) - [The Unreliability of LLMs and What Lies Ahead](https://verissimo.substack.com/p/verissimo-monthly-may-2025)
* [2025-06-02, 16:24:32](https://lobste.rs/s/8byzhb/can_chrome_extension_host_terminal) - [Can a chrome extension host a terminal emulator?](https://blog.pomdtr.me/posts/integrated-terminal/)
* [2025-06-02, 16:16:11](https://news.ycombinator.com/item?id=44160358) - [Arcol simplifies building design with browser-based modeling](https://www.arcol.io/)
* [2025-06-02, 16:07:00](https://apple.slashdot.org/story/25/06/02/166230/apple-challenges-eu-order-to-open-ios-to-rivals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Apple Challenges EU Order To Open iOS To Rivals](https://apple.slashdot.org/story/25/06/02/166230/apple-challenges-eu-order-to-open-ios-to-rivals?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-02, 15:49:08](https://news.ycombinator.com/item?id=44160073) - [Show HN: Penny-1.7B Irish Penny Journal style transfer](https://huggingface.co/dleemiller/Penny-1.7B)
* [2025-06-02, 15:36:00](https://news.slashdot.org/story/25/06/02/1537210/business-insider-recommended-nonexistent-books-to-staff-as-it-leans-into-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Business Insider Recommended Nonexistent Books To Staff As It Leans Into AI](https://news.slashdot.org/story/25/06/02/1537210/business-insider-recommended-nonexistent-books-to-staff-as-it-leans-into-ai?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-02, 15:23:01](https://news.ycombinator.com/item?id=44159798) - [Mesh Edge Construction](https://maxliani.wordpress.com/2025/03/01/mesh-edge-construction/)
* [2025-06-02, 15:20:13](https://news.ycombinator.com/item?id=44159758) - [Show HN: A toy version of Wireshark (student project)](https://github.com/lixiasky/vanta)
* [2025-06-02, 15:01:18](https://news.ycombinator.com/item?id=44159528) - [Ask HN: Who is hiring? (June 2025)](https://news.ycombinator.com/item?id=44159528)
* [2025-06-02, 15:01:18](https://news.ycombinator.com/item?id=44159525) - [Ask HN: Who wants to be hired? (June 2025)](https://news.ycombinator.com/item?id=44159525)
* [2025-06-02, 14:59:52](https://lobste.rs/s/piezrc/how_deal_with_rust_dependencies) - [How to deal with Rust dependencies](https://notgull.net/rust-dependencies/)
* [2025-06-02, 14:40:00](https://developers.slashdot.org/story/25/06/02/0922250/how-stack-overflows-reputation-system-led-to-its-own-downfall?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [How Stack Overflow&apos;s Reputation System Led To Its Own Downfall](https://developers.slashdot.org/story/25/06/02/0922250/how-stack-overflows-reputation-system-led-to-its-own-downfall?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-02, 14:39:18](https://news.ycombinator.com/item?id=44159318) - [A Hidden Weakness](https://serge-sans-paille.github.io/pythran-stories/a-hidden-weakness.html)
* [2025-06-02, 14:28:11](https://lobste.rs/s/nahh5c/faster_route_propagation_by_rewriting) - [Faster route propagation by rewriting our Traefik gateway in Rust](https://rivet.gg/blog/2025-06-02-faster-route-propagation-by-rewriting-our-traefik-gateway-in-rust)
* [2025-06-02, 14:24:54](https://news.ycombinator.com/item?id=44159166) - [Cloudlflare builds OAuth with Claude and publishes all the prompts](https://github.com/cloudflare/workers-oauth-provider/commits/main/)
* [2025-06-02, 14:24:00](https://soylentnews.org/article.pl?sid=25/06/01/1517235&amp;from=rss) - [OpenAI Model Modifies Own Shutdown Script, Say Researchers](https://soylentnews.org/article.pl?sid=25/06/01/1517235&amp;from=rss)
* [2025-06-02, 14:00:00](https://slashdot.org/story/25/06/02/0858222/going-to-an-office-and-pretending-to-work-a-business-thats-booming-in-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Going To an Office and Pretending To Work: A Business That&apos;s Booming in China](https://slashdot.org/story/25/06/02/0858222/going-to-an-office-and-pretending-to-work-a-business-thats-booming-in-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-02, 13:49:20](https://lobste.rs/s/02usbk/gleam_v1_11_0_released) - [Gleam v1.11.0 released](https://gleam.run/news/gleam-javascript-gets-30-percent-faster/)
* [2025-06-02, 13:43:38](https://lobste.rs/s/bbeigb/practical_dev_tcp_https_era) - [Practical /dev/tcp in the HTTPS Era](https://blog.pkgforge.dev/https-via-http)
* [2025-06-02, 13:41:22](https://lobste.rs/s/iq5doq/whisperd_linux_voice_text_using_openai) - [WhisperD: linux voice-to-text using OpenAI whisper-1 transcription](https://github.com/icholy/whisperd/)
* [2025-06-02, 13:36:40](https://news.ycombinator.com/item?id=44158720) - [Reducing Cargo target directory size with -Zno-embed-metadata](https://kobzol.github.io/rust/rustc/2025/06/02/reduce-cargo-target-dir-size-with-z-no-embed-metadata.html)
* [2025-06-02, 13:33:54](https://lobste.rs/s/iqgjau/reducing_cargo_target_directory_size) - [Reducing Cargo target directory size with -Zno-embed-metadata](https://kobzol.github.io/rust/rustc/2025/06/02/reduce-cargo-target-dir-size-with-z-no-embed-metadata.html)
* [2025-06-02, 13:33:09](https://lobste.rs/s/jg3m3x/my_idea_how_modern_mailing_service_should) - [My idea of how a modern mailing service should work (2011)](https://utcc.utoronto.ca/~cks/space/blog/spam/ModernMailingServiceIdea)
* [2025-06-02, 13:18:39](https://lobste.rs/s/9uetee/our_grafana_loki_installs_have_quietly) - [Our Grafana and Loki installs have quietly become &apos;legacy software&apos; here](https://utcc.utoronto.ca/~cks/space/blog/sysadmin/GrafanaAndLokiLegacyHere)
* [2025-06-02, 13:08:18](https://lobste.rs/s/qlozpy/ducklake_manifesto_sql_as_lakehouse) - [The DuckLake Manifesto: SQL as a Lakehouse Format](https://ducklake.select/manifesto/)
* [2025-06-02, 12:59:19](https://lobste.rs/s/wwuqua/posix_you_can_theoretically_use_inode) - [In POSIX, you can theoretically use inode zero](https://utcc.utoronto.ca/~cks/space/blog/unix/POSIXAllowsZeroInode)
* [2025-06-02, 12:58:10](https://news.ycombinator.com/item?id=44158353) - [How do I learn robotics in 2025?](https://news.ycombinator.com/item?id=44158353)
* [2025-06-02, 12:00:43](https://lobste.rs/s/cfwjgx/how_we_migrated_30_kubernetes_clusters) - [How We Migrated 30+ Kubernetes Clusters to Terraform](https://medium.com/learnings-from-the-paas/how-we-migrated-30-kubernetes-clusters-to-terraform-cd2b1cef8b84)
* [2025-06-02, 11:38:55](https://lobste.rs/s/wmk4we/tour_upcoming_rfcs_for_hare_programming) - [A tour of upcoming RFCs for the Hare programming language](https://harelang.org/blog/2025-06-02-planned-breaking-changes/)
* [2025-06-02, 11:34:00](https://slashdot.org/story/25/06/02/0114203/ais-adoption-and-growth-truly-is-unprecedented?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AI&apos;s Adoption and Growth Truly is &apos;Unprecedented&apos;](https://slashdot.org/story/25/06/02/0114203/ais-adoption-and-growth-truly-is-unprecedented?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-02, 11:09:45](https://news.ycombinator.com/item?id=44157584) - [Show HN: Fast Random Library for C++17](https://github.com/DmitriBogdanov/UTL/blob/master/docs/module_random.md)
* [2025-06-02, 10:31:57](https://news.ycombinator.com/item?id=44157406) - [ThorVG: Super Lightweight Vector Graphics Engine](https://www.thorvg.org/about)
* [2025-06-02, 09:48:00](https://soylentnews.org/article.pl?sid=25/06/01/159251&amp;from=rss) - [Clock Still Keeping Village on Time After 500 Years](https://soylentnews.org/article.pl?sid=25/06/01/159251&amp;from=rss)
* [2025-06-02, 09:47:48](https://news.ycombinator.com/item?id=44157177) - [Show HN: Kan.bn – An open-source alterative to Trello](https://github.com/kanbn/kan)
* [2025-06-02, 09:45:40](https://lobste.rs/s/usvbn9/what_are_you_doing_this_week) - [What are you doing this week?](https://lobste.rs/s/usvbn9/what_are_you_doing_this_week)
* [2025-06-02, 09:27:26](https://news.ycombinator.com/item?id=44157077) - [ReasoningGym: Reasoning Environments for RL with Verifiable Rewards](https://arxiv.org/abs/2505.24760)
* [2025-06-02, 08:59:37](https://news.ycombinator.com/item?id=44156935) - [If you are useful, it doesn&apos;t mean you are valued](https://betterthanrandom.substack.com/p/if-you-are-useful-it-doesnt-mean)
* [2025-06-02, 08:45:45](https://lobste.rs/s/iuvb8a/designing_error_types_rust_libraries) - [Designing Error Types in Rust Libraries](https://d34dl0ck.me/rust-bites-designing-error-types-in-rust-libraries/index.html)
* [2025-06-02, 08:05:16](https://lobste.rs/s/s1jm7e/hypervisors_for_memory_introspection) - [Hypervisors for Memory Introspection and Reverse Engineering](https://secret.club/2025/06/02/hypervisors-for-memory-introspection-and-reverse-engineering.html)
* [2025-06-02, 07:34:00](https://science.slashdot.org/story/25/06/02/049212/hubble-tension-and-the-nobel-prize-winner-who-wants-to-replace-cosmologys-standard-model?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Hubble Tension&apos; and the Nobel Prize Winner Who Wants to Replace Cosmology&apos;s Standard Model](https://science.slashdot.org/story/25/06/02/049212/hubble-tension-and-the-nobel-prize-winner-who-wants-to-replace-cosmologys-standard-model?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-02, 06:04:34](https://news.ycombinator.com/item?id=44156157) - [War and Wilderness: British Soldiers in Revolutionary America](https://www.historytoday.com/archive/feature/war-and-wilderness-british-soldiers-revolutionary-america)
* [2025-06-02, 05:43:54](https://lobste.rs/s/vhi9w8/is_it_javascript) - [Is It JavaScript?](https://blog.jim-nielsen.com/2025/is-it-javascript/)
* [2025-06-02, 05:16:49](https://lobste.rs/s/zjbb1m/is_transition_ipv6_inevitable) - [Is the transition to IPv6 inevitable?](https://ipv6.hanazo.no/posts/ipv6-transition-inevitable/)
* [2025-06-02, 05:00:00](https://soylentnews.org/article.pl?sid=25/06/01/151242&amp;from=rss) - [Malware Reverse Engineering - Unraveling the Secrets of Encryption in Malware](https://soylentnews.org/article.pl?sid=25/06/01/151242&amp;from=rss)
* [2025-06-02, 04:34:00](https://it.slashdot.org/story/25/06/02/0140228/new-moderate-linux-flaw-allows-password-hash-theft-via-core-dumps-in-ubuntu-rhel-fedora?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [New Moderate Linux Flaw Allows Password Hash Theft Via Core Dumps in Ubuntu, RHEL, Fedora](https://it.slashdot.org/story/25/06/02/0140228/new-moderate-linux-flaw-allows-password-hash-theft-via-core-dumps-in-ubuntu-rhel-fedora?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-02, 04:05:26](https://news.ycombinator.com/item?id=44155761) - [Is “The Phoenician Scheme” Wes Anderson&apos;s Most Emotional Film?](https://www.newyorker.com/magazine/2025/06/09/the-phoenician-scheme-movie-review)
* [2025-06-02, 04:01:00](https://news.ycombinator.com/item?id=44155746) - [How to post when no one is reading](https://www.jeetmehta.com/posts/thrive-in-obscurity)
* [2025-06-02, 01:54:33](https://news.ycombinator.com/item?id=44155247) - [The Princeton INTERCAL Compiler&apos;s source code](https://esoteric.codes/blog/published-for-the-first-time-the-original-intercal72-compiler-code)
* [2025-06-02, 01:34:00](https://entertainment.slashdot.org/story/25/06/01/2323253/doctor-who-regenerates-in-surprise-season-finale-but-will-the-show-return?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [&apos;Doctor Who&apos;  Regenerates in Surprise Season Finale.  But Will the Show Return?](https://entertainment.slashdot.org/story/25/06/01/2323253/doctor-who-regenerates-in-surprise-season-finale-but-will-the-show-return?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-02, 00:16:00](https://soylentnews.org/article.pl?sid=25/06/01/1439246&amp;from=rss) - [New JWST Observations of &apos;Trans-Neptunian Objects&apos; Could Help Reveal Our Solar System&apos;s Past](https://soylentnews.org/article.pl?sid=25/06/01/1439246&amp;from=rss)
* [2025-06-01, 22:38:00](https://science.slashdot.org/story/25/06/01/2234237/six-more-humans-successfully-carried-to-the-edge-of-space-by-blue-origin?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Six More Humans Successfully Carried to the Edge of Space by Blue Origin](https://science.slashdot.org/story/25/06/01/2234237/six-more-humans-successfully-carried-to-the-edge-of-space-by-blue-origin?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-01, 22:34:00](https://it.slashdot.org/story/25/05/31/0545201/amid-turmoil-stack-overflow-asks-about-ai-salary-remote-work-in-15th-annual-developer-survey?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Amid Turmoil, Stack Overflow Asks About AI, Salary, Remote Work in 15th Annual Developer Survey](https://it.slashdot.org/story/25/05/31/0545201/amid-turmoil-stack-overflow-asks-about-ai-salary-remote-work-in-15th-annual-developer-survey?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-01, 21:57:35](https://news.ycombinator.com/item?id=44154032) - [The Visual World of &apos;Samurai Jack&apos;](https://animationobsessive.substack.com/p/the-visual-world-of-samurai-jack)
* [2025-06-01, 21:29:00](https://developers.slashdot.org/story/25/06/01/2114234/is-the-ai-job-apocalypse-already-here-for-some-recent-grads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Is the AI Job Apocalypse Already Here for Some Recent Grads?](https://developers.slashdot.org/story/25/06/01/2114234/is-the-ai-job-apocalypse-already-here-for-some-recent-grads?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-01, 21:02:17](https://news.ycombinator.com/item?id=44153732) - [The rise of judgement over technical skill](https://notsocommonthoughts.com/blog/ai-and-judgement/)
* [2025-06-01, 21:00:00](https://soylentnews.org/breakingnews/article.pl?sid=25/06/01/2038209&amp;from=rss) - [NOAA Issues a &apos;Severe&apos; Solar Storm Alert, Auroras Expected at Lower Latitudes](https://soylentnews.org/breakingnews/article.pl?sid=25/06/01/2038209&amp;from=rss)
* [2025-06-01, 20:29:00](https://tech.slashdot.org/story/25/06/01/203226/google-maps-falsely-told-drivers-in-germany-that-roads-across-the-country-were-closed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Google Maps Falsely Told Drivers in Germany That Roads Across the Country Were Closed](https://tech.slashdot.org/story/25/06/01/203226/google-maps-falsely-told-drivers-in-germany-that-roads-across-the-country-were-closed?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-01, 19:34:00](https://soylentnews.org/article.pl?sid=25/05/31/1945211&amp;from=rss) - [Using HDMI EMI for Fast Wireless Data Transfer](https://soylentnews.org/article.pl?sid=25/05/31/1945211&amp;from=rss)
* [2025-06-01, 16:47:41](https://lobste.rs/s/qgvx5p/wl_kbptr_control_mouse_pointer_with) - [wl-kbptr: Control the mouse pointer with the keyboard on Wayland](https://github.com/moverest/wl-kbptr)
* [2025-06-01, 16:39:36](https://lobste.rs/s/bmq1cs/root_shell_on_credit_card_terminal) - [Root Shell on Credit Card Terminal](https://stefan-gloor.ch/yomani-hack)
* [2025-06-01, 16:26:29](https://lobste.rs/s/qmtc8m/what_technology_use_for_small_ngo_website) - [What technology to use for a small NGO website?](https://lobste.rs/s/qmtc8m/what_technology_use_for_small_ngo_website)
* [2025-06-01, 14:48:00](https://soylentnews.org/article.pl?sid=25/05/30/198205&amp;from=rss) - [Victoria&apos;s Secret Website Laid Bare For Three Days After &apos;Security Incident&apos;](https://soylentnews.org/article.pl?sid=25/05/30/198205&amp;from=rss)
* [2025-06-01, 11:51:03](https://lobste.rs/s/cae88e/progressive_json) - [Progressive JSON](https://overreacted.io/progressive-json/)
* [2025-06-01, 10:03:00](https://soylentnews.org/article.pl?sid=25/05/31/1552206&amp;from=rss) - [Trump Proposes Huge Reduction in National Science Foundation Funding](https://soylentnews.org/article.pl?sid=25/05/31/1552206&amp;from=rss)
* [2025-06-01, 06:23:30](https://lobste.rs/s/cyan5l/how_i_like_install_nixos_declaratively) - [How I like to install NixOS (declaratively)](https://michael.stapelberg.ch/posts/2025-06-01-nixos-installation-declarative/)
* [2025-06-01, 05:18:00](https://soylentnews.org/article.pl?sid=25/05/30/1851210&amp;from=rss) - [Gallery Showcases The Dustiest, Grimiest PCs In Germany - 400 Images Of Fascinating Horror](https://soylentnews.org/article.pl?sid=25/05/30/1851210&amp;from=rss)
* [2025-06-01, 00:33:00](https://soylentnews.org/article.pl?sid=25/05/30/1846202&amp;from=rss) - [China Hygon And Sugon Merge To Form Vertically Integrated Supercomputing Giant Against US Sanctions](https://soylentnews.org/article.pl?sid=25/05/30/1846202&amp;from=rss)
* [2025-05-31, 22:39:28](https://lobste.rs/s/1qmcac/tools_built_on_tree_sitter_s_concrete) - [Tools built on tree-sitter&apos;s concrete syntax trees](https://www.scannedinavian.com/tools-built-on-tree-sitters-concrete-syntax-trees.html)
* [2025-05-31, 19:47:00](https://soylentnews.org/article.pl?sid=25/05/30/190238&amp;from=rss) - [Overlooked Cells Might Explain The Human Brain’s Huge Storage Capacity](https://soylentnews.org/article.pl?sid=25/05/30/190238&amp;from=rss)
* [2025-05-31, 19:09:09](https://news.ycombinator.com/item?id=44146339) - [Intelligent Agent Technology: Open Sesame! (1993)](https://blog.gingerbeardman.com/2025/05/31/intelligent-agent-technology-open-sesame-1993/)
* [2025-05-31, 15:03:00](https://soylentnews.org/article.pl?sid=25/05/30/1544203&amp;from=rss) - [German Court Jails Volkswagen Execs Over Dieselgate Scandal](https://soylentnews.org/article.pl?sid=25/05/30/1544203&amp;from=rss)
* [2025-05-31, 10:19:00](https://soylentnews.org/article.pl?sid=25/05/30/0621214&amp;from=rss) - [Microsoft Dumps AI Into Notepad as &apos;Copilot All the Things&apos; Mania Takes Hold](https://soylentnews.org/article.pl?sid=25/05/30/0621214&amp;from=rss)
* [2025-05-31, 10:18:40](https://news.ycombinator.com/item?id=44143253) - [Cuss: Map of profane words to a rating of sureness](https://github.com/words/cuss)
* [2025-05-31, 06:24:01](https://news.ycombinator.com/item?id=44142259) - [I made a chair](https://milofultz.com/2025-05-27-i-made-a-chair.html)
* [2025-05-31, 05:37:00](https://soylentnews.org/article.pl?sid=25/05/30/041203&amp;from=rss) - [Verizon Asks Trump Admin to Destroy All Popular Phone Unlocking Requirements](https://soylentnews.org/article.pl?sid=25/05/30/041203&amp;from=rss)
* [2025-05-31, 00:49:00](https://soylentnews.org/article.pl?sid=25/05/30/0618221&amp;from=rss) - [Stack Overflow&apos;s Plan to Survive the Age of AI](https://soylentnews.org/article.pl?sid=25/05/30/0618221&amp;from=rss)
* [2025-05-30, 20:07:00](https://soylentnews.org/article.pl?sid=25/05/29/0642240&amp;from=rss) - [Botnet Hacks 9,000+ ASUS Routers to Add Persistent SSH Backdoor](https://soylentnews.org/article.pl?sid=25/05/29/0642240&amp;from=rss)
* [2025-05-30, 15:25:00](https://soylentnews.org/article.pl?sid=25/05/29/0634252&amp;from=rss) - [Bed Bugs Are Most Likely the First Human Pest, New Research Shows](https://soylentnews.org/article.pl?sid=25/05/29/0634252&amp;from=rss)
* [2025-05-30, 10:41:00](https://soylentnews.org/article.pl?sid=25/05/29/0338204&amp;from=rss) - [5 Ways to Stop AI Cheating](https://soylentnews.org/article.pl?sid=25/05/29/0338204&amp;from=rss)
* [2025-05-30, 05:56:00](https://soylentnews.org/article.pl?sid=25/05/29/0334246&amp;from=rss) - [Lenovo Caught Out by Trump&apos;s on-Again Off-Again Tariffs](https://soylentnews.org/article.pl?sid=25/05/29/0334246&amp;from=rss)
* [2025-05-30, 01:12:00](https://soylentnews.org/article.pl?sid=25/05/29/0327229&amp;from=rss) - [How to Stop and Disable Unwanted Services From Linux System](https://soylentnews.org/article.pl?sid=25/05/29/0327229&amp;from=rss)
* [2025-05-29, 22:16:18](https://news.ycombinator.com/item?id=44130915) - [The Atomic Airplane](https://whatisnuclear.com/the-story-of-the-atomic-airplane.html)
* [2025-05-29, 20:30:00](https://soylentnews.org/article.pl?sid=25/05/29/0221209&amp;from=rss) - [Russia is Still Swimming in New Intel and AMD Chips Thanks to Sanction \&quot;Workarounds\&quot;](https://soylentnews.org/article.pl?sid=25/05/29/0221209&amp;from=rss)
* [2025-05-29, 16:31:15](https://news.ycombinator.com/item?id=44127653) - [Show HN: Onlook – Open-source, visual-first Cursor for designers](https://github.com/onlook-dev/onlook)
* [2025-05-29, 15:48:00](https://soylentnews.org/article.pl?sid=25/05/28/1749257&amp;from=rss) - [University Of Arizona Scientists Unveil Breakthrough Petahertz-Speed Transistor](https://soylentnews.org/article.pl?sid=25/05/28/1749257&amp;from=rss)
* [2025-05-29, 12:25:19](https://news.ycombinator.com/item?id=44125334) - [EasyTier – P2P mesh VPN written in Rust using Tokio](https://easytier.cn/en/)
* [2025-05-29, 11:06:00](https://soylentnews.org/article.pl?sid=25/05/28/1747229&amp;from=rss) - [Some Signs of AI Model Collapse Begin to Reveal Themselves](https://soylentnews.org/article.pl?sid=25/05/28/1747229&amp;from=rss)
* [2025-05-29, 06:15:00](https://soylentnews.org/article.pl?sid=25/05/28/0352254&amp;from=rss) - [Scientists Just Discovered A Mysterious New World Far Beyond Pluto](https://soylentnews.org/article.pl?sid=25/05/28/0352254&amp;from=rss)
* [2025-05-29, 01:30:00](https://soylentnews.org/article.pl?sid=25/05/27/2358202&amp;from=rss) - [Humanoid AI-powered Robots Duke It Out In China Fight Competition](https://soylentnews.org/article.pl?sid=25/05/27/2358202&amp;from=rss)
