# [News Summary](https://kherrick.github.io/news-summary/)

## Vulnerabilities and Cybersecurity Incidents

* [Use-after-free in CAN BCM subsystem leading to information disclosure (CVE-2023-52922)](https://allelesecurity.com/use-after-free-vulnerability-in-can-bcm-subsystem-leading-to-information-disclosure-cve-2023-52922/) ([comments](https://lobste.rs/s/o5hhsn/use_after_free_can_bcm_subsystem_leading))

* [Cloudflare Investigating Incident](https://www.cloudflarestatus.com/incidents/25r9t0vz99rp) ([comments](https://news.ycombinator.com/item?id=44261064))

* [GCP Outage](https://status.cloud.google.com/) ([comments](https://news.ycombinator.com/item?id=44260810))

* [NPM: Issues with package install, package publish, and login](https://status.npmjs.org/incidents/dn5mcp85737y) ([comments](https://news.ycombinator.com/item?id=44260900))

* [Abandoned Subdomains from Major Institutions Hijacked for AI-Generated Spam](https://tech.slashdot.org/story/25/06/12/019221/abandoned-subdomains-from-major-institutions-hijacked-for-ai-generated-spam?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://tech.slashdot.org/story/25/06/12/019221/abandoned-subdomains-from-major-institutions-hijacked-for-ai-generated-spam?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Emerging Technologies and Innovations

* [Show HN: ChatToSTL – AI text-to-CAD for 3D printing](https://huggingface.co/spaces/flowfulai/ChatToSTL) ([comments](https://news.ycombinator.com/item?id=44260649))

* [Barbie Goes AI As Mattel Teams With OpenAI To Reinvent Playtime](https://slashdot.org/story/25/06/12/1813241/barbie-goes-ai-as-mattel-teams-with-openai-to-reinvent-playtime?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://slashdot.org/story/25/06/12/1813241/barbie-goes-ai-as-mattel-teams-with-openai-to-reinvent-playtime?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Humanity Takes Its First Look At the Sun's Poles](https://science.slashdot.org/story/25/06/12/0022206/humanity-takes-its-first-look-at-the-suns-poles?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://science.slashdot.org/story/25/06/12/0022206/humanity-takes-its-first-look-at-the-suns-poles?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## AI and Ethical Implications

* [AI Boom Drives 150% Surge in Indirect Emissions at Major Tech Firms, UN Warns](https://esgnews.com/ai-boom-drives-150-surge-in-indirect-emissions-at-major-tech-firms-un-warns/) ([comments](https://lobste.rs/s/p2mqon/ai_boom_drives_150_surge_indirect))

* [Canva Now Requires Use of LLMs During Coding Interviews](https://slashdot.org/story/25/06/12/005258/canva-now-requires-use-of-llms-during-coding-interviews?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://slashdot.org/story/25/06/12/005258/canva-now-requires-use-of-llms-during-coding-interviews?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Space Exploration and Astrophysics

* [Spaceballs 2 Will See Rick Moranis Return as Dark Helmet](https://www.ign.com/articles/spaceballs-2-plots-a-course-for-2027-with-mel-brooks-in-first-teaser-trailer) ([comments](https://news.ycombinator.com/item?id=44260903))

* [India To Send First Astronaut On Mission To ISS](https://slashdot.org/story/25/06/12/0012240/india-to-send-first-astronaut-on-mission-to-iss?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://slashdot.org/story/25/06/12/0012240/india-to-send-first-astronaut-on-mission-to-iss?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Privacy and Legal Challenges

* [US-backed Israeli company's spyware used to target European journalists](https://apnews.com/article/spyware-italy-paragon-meloni-pegasus-f36dd32106f44398ee24001317ccf2bb) ([comments](https://news.ycombinator.com/item?id=44259398))

* [Deere Must Face FTC's Antitrust Lawsuit Over Repair Costs, US Judge Rules](https://yro.slashdot.org/story/25/06/12/165207/deere-must-face-ftcs-antitrust-lawsuit-over-repair-costs-us-judge-rules?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://yro.slashdot.org/story/25/06/12/165207/deere-must-face-ftcs-antitrust-lawsuit-over-repair-costs-us-judge-rules?utm_source=rss1.0mainlinkanon&utm_medium=feed))

## Societal Impacts of AI

* [Large Language Models, Small Labor Market Effects](https://slashdot.org/story/25/06/12/0117247/large-language-models-small-labor-market-effects?utm_source=rss1.0mainlinkanon&utm_medium=feed) ([comments](https://slashdot.org/story/25/06/12/0117247/large-language-models-small-labor-market-effects?utm_source=rss1.0mainlinkanon&utm_medium=feed))

* [Dancing brainwaves: How sound reshapes your brain networks in real time](https://www.sciencedaily.com/releases/2025/06/250602155001.htm) ([comments](https://news.ycombinator.com/item?id=44216370))

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

* [2025-06-12, 18:41:09](https://lobste.rs/s/yfqldg/architecture_decision_records) - [Architecture Decision Records](https://www.beflagrant.com/blog/adrs)
* [2025-06-12, 18:30:39](https://lobste.rs/s/o5hhsn/use_after_free_can_bcm_subsystem_leading) - [Use-after-free in CAN BCM subsystem leading to information disclosure (CVE-2023-52922)](https://allelesecurity.com/use-after-free-vulnerability-in-can-bcm-subsystem-leading-to-information-disclosure-cve-2023-52922/)
* [2025-06-12, 18:24:01](https://news.ycombinator.com/item?id=44261064) - [Cloudflare Investigating Incident](https://www.cloudflarestatus.com/incidents/25r9t0vz99rp)
* [2025-06-12, 18:16:33](https://news.ycombinator.com/item?id=44260903) - [Spaceballs 2 Will See Rick Moranis Return as Dark Helmet](https://www.ign.com/articles/spaceballs-2-plots-a-course-for-2027-with-mel-brooks-in-first-teaser-trailer)
* [2025-06-12, 18:16:30](https://news.ycombinator.com/item?id=44260900) - [NPM: Issues with package install, package publish, and login](https://status.npmjs.org/incidents/dn5mcp85737y)
* [2025-06-12, 18:13:00](https://slashdot.org/story/25/06/12/1813241/barbie-goes-ai-as-mattel-teams-with-openai-to-reinvent-playtime?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Barbie Goes AI As Mattel Teams With OpenAI To Reinvent Playtime](https://slashdot.org/story/25/06/12/1813241/barbie-goes-ai-as-mattel-teams-with-openai-to-reinvent-playtime?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-12, 18:11:07](https://news.ycombinator.com/item?id=44260810) - [GCP Outage](https://status.cloud.google.com/)
* [2025-06-12, 17:59:34](https://news.ycombinator.com/item?id=44260661) - [NASA Is Worth Saving](https://caseyhandmer.wordpress.com/2025/06/12/nasa-is-worth-saving/)
* [2025-06-12, 17:58:11](https://news.ycombinator.com/item?id=44260649) - [Show HN: ChatToSTL – AI text-to-CAD for 3D printing](https://huggingface.co/spaces/flowfulai/ChatToSTL)
* [2025-06-12, 17:31:00](https://yro.slashdot.org/story/25/06/12/1731258/more-than-a-dozen-vpn-apps-have-undisclosed-ties-to-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [More Than a Dozen VPN Apps Have Undisclosed Ties To China](https://yro.slashdot.org/story/25/06/12/1731258/more-than-a-dozen-vpn-apps-have-undisclosed-ties-to-china?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-12, 17:01:11](https://news.ycombinator.com/item?id=44260017) - [Roame (YC S23) Is Hiring](https://www.ycombinator.com/companies/roame/jobs/9QhTM31-founding-product-ai-engineer)
* [2025-06-12, 16:54:39](https://lobste.rs/s/vwzni0/diceomatic_dsl_for_making_children_s_dice) - [diceomatic: a DSL for making children&apos;s dice games](https://robertheaton.com/diceomatic/)
* [2025-06-12, 16:53:08](https://news.ycombinator.com/item?id=44259921) - [Google Pixels are no longer the AOSP reference device](https://9to5google.com/2025/06/12/android-open-source-project-pixel-change/)
* [2025-06-12, 16:48:00](https://it.slashdot.org/story/25/06/12/1649201/anker-recalls-over-11-million-power-banks-due-to-fire-and-burn-risks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Anker Recalls Over 1.1 Million Power Banks Due To Fire and Burn Risks](https://it.slashdot.org/story/25/06/12/1649201/anker-recalls-over-11-million-power-banks-due-to-fire-and-burn-risks?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-12, 16:46:24](https://news.ycombinator.com/item?id=44259844) - [Y Combinator startup Sorcerer raises $3.9M to launch more weather balloons](https://www.axios.com/pro/climate-deals/2025/06/12/sorcerer-seed-weather-balloons)
* [2025-06-12, 16:19:07](https://lobste.rs/s/inheuv/solving_linkedin_queens_with_smt) - [Solving LinkedIn Queens with SMT](https://buttondown.com/hillelwayne/archive/solving-linkedin-queens-with-smt/)
* [2025-06-12, 16:18:01](https://news.ycombinator.com/item?id=44259476) - [Solving LinkedIn Queens with SMT](https://buttondown.com/hillelwayne/archive/solving-linkedin-queens-with-smt/)
* [2025-06-12, 16:16:00](https://soylentnews.org/article.pl?sid=25/06/11/1627232&amp;from=rss) - [Cyberattack Cripples North America&apos;s Largest Grocery Distributor, Threatening Supply Chain](https://soylentnews.org/article.pl?sid=25/06/11/1627232&amp;from=rss)
* [2025-06-12, 16:12:45](https://news.ycombinator.com/item?id=44259398) - [US-backed Israeli company&apos;s spyware used to target European journalists](https://apnews.com/article/spyware-italy-paragon-meloni-pegasus-f36dd32106f44398ee24001317ccf2bb)
* [2025-06-12, 16:04:00](https://yro.slashdot.org/story/25/06/12/165207/deere-must-face-ftcs-antitrust-lawsuit-over-repair-costs-us-judge-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Deere Must Face FTC&apos;s Antitrust Lawsuit Over Repair Costs, US Judge Rules](https://yro.slashdot.org/story/25/06/12/165207/deere-must-face-ftcs-antitrust-lawsuit-over-repair-costs-us-judge-rules?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-12, 15:49:40](https://news.ycombinator.com/item?id=44259132) - [macOS Tahoe brings a new disk image format](https://eclecticlight.co/2025/06/12/macos-tahoe-brings-a-new-disk-image-format/)
* [2025-06-12, 15:45:35](https://lobste.rs/s/27gwjc/reflections_on_sudoku_impossibility) - [Reflections on Sudoku, Or the Impossibility of Systematizing Thought](https://rjp.io/blog/2025-06-07-reflections-on-sudoku)
* [2025-06-12, 15:39:57](https://news.ycombinator.com/item?id=44259039) - [Researchers confirm two journalists were hacked with Paragon spyware](https://techcrunch.com/2025/06/12/researchers-confirm-two-journalists-were-hacked-with-paragon-spyware/)
* [2025-06-12, 15:20:00](https://slashdot.org/story/25/06/12/0114232/native-immigrant-entrepreneurial-synergies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Native-Immigrant Entrepreneurial Synergies](https://slashdot.org/story/25/06/12/0114232/native-immigrant-entrepreneurial-synergies?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-12, 15:04:59](https://news.ycombinator.com/item?id=44258670) - [iPhone 11 emulation done in QEMU](https://github.com/ChefKissInc/QEMUAppleSilicon)
* [2025-06-12, 15:03:52](https://news.ycombinator.com/item?id=44258654) - [Why Does My Ripped CD Have Messed Up Track Names? and Why Is One Track Missing?](https://www.akpain.net/blog/inside-a-cd/)
* [2025-06-12, 14:47:22](https://lobste.rs/s/kvg7od/python_language_summit_2025) - [The Python Language Summit 2025](https://pyfound.blogspot.com/2025/06/python-language-summit-2025.html)
* [2025-06-12, 14:40:00](https://hardware.slashdot.org/story/25/06/12/0947224/world-bank-lifts-ban-on-funding-nuclear-energy-in-boost-to-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [World Bank Lifts Ban on Funding Nuclear Energy in Boost To Industry](https://hardware.slashdot.org/story/25/06/12/0947224/world-bank-lifts-ban-on-funding-nuclear-energy-in-boost-to-industry?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-12, 14:26:59](https://news.ycombinator.com/item?id=44258213) - [Seedance 1.0](https://seed.bytedance.com/en/seedance)
* [2025-06-12, 14:00:00](https://tech.slashdot.org/story/25/06/12/0920240/aosp-isnt-dead-but-google-just-landed-a-huge-blow-to-custom-rom-developers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [AOSP Isn&apos;t Dead, But Google Just Landed a Huge Blow To Custom ROM Developers](https://tech.slashdot.org/story/25/06/12/0920240/aosp-isnt-dead-but-google-just-landed-a-huge-blow-to-custom-rom-developers?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-12, 13:11:29](https://news.ycombinator.com/item?id=44257400) - [CP/M 2.2, CP/M 3.0, CP/M-86, Concurrent CP/M-86 listings by Digital Research](http://www.bitsavers.org/pdf/digitalResearch/CPM_Listings/)
* [2025-06-12, 13:09:50](https://lobste.rs/s/jumrvj/cp_m_2_2_cp_m_3_0_cp_m_86_concurrent_cp_m_86) - [CP/M 2.2, CP/M 3.0, CP/M-86, Concurrent CP/M-86 listings by Digital Research](http://www.bitsavers.org/pdf/digitalResearch/CPM_Listings)
* [2025-06-12, 12:58:53](https://lobste.rs/s/20bv3j/rumour_google_intends_discontinue) - [Rumour: Google intends to discontinue the Android Open Source Project](https://www.osnews.com/story/142553/rumour-google-intends-to-discontinue-the-android-open-source-project/)
* [2025-06-12, 12:45:00](https://tech.slashdot.org/story/25/06/12/1224214/air-india-boeing-787-carrying-242-passengers-crashes-after-takeoff?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Air India Boeing 787 Carrying 242 Passengers Crashes After Takeoff](https://tech.slashdot.org/story/25/06/12/1224214/air-india-boeing-787-carrying-242-passengers-crashes-after-takeoff?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-12, 11:41:04](https://news.ycombinator.com/item?id=44256499) - [A receipt printer cured my procrastination](https://www.laurieherault.com/articles/a-thermal-receipt-printer-cured-my-procrastination)
* [2025-06-12, 11:40:03](https://lobste.rs/s/0jgelq/analysing_fit_data_with_perl_producing) - [Analysing FIT data with Perl: producing PNG plots](https://peateasea.de/analysing-fit-data-with-perl-producing-png-plots/)
* [2025-06-12, 11:31:00](https://soylentnews.org/article.pl?sid=25/06/10/2233256&amp;from=rss) - [Dolphin LLM](https://soylentnews.org/article.pl?sid=25/06/10/2233256&amp;from=rss)
* [2025-06-12, 11:30:00](https://linux.slashdot.org/story/25/06/12/0335229/denmark-is-dumping-microsoft-office-and-windows-for-libreoffice-and-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Denmark Is Dumping Microsoft Office and Windows For LibreOffice and Linux](https://linux.slashdot.org/story/25/06/12/0335229/denmark-is-dumping-microsoft-office-and-windows-for-libreoffice-and-linux?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-12, 10:17:12](https://lobste.rs/s/qaiehy/next_js_15_1_is_unusable_outside_vercel) - [Next.js 15.1+ is unusable outside of Vercel](https://omarabid.com/nextjs-vercel)
* [2025-06-12, 10:00:00](https://science.slashdot.org/story/25/06/12/0022206/humanity-takes-its-first-look-at-the-suns-poles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Humanity Takes Its First Look At the Sun&apos;s Poles](https://science.slashdot.org/story/25/06/12/0022206/humanity-takes-its-first-look-at-the-suns-poles?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-12, 09:43:47](https://news.ycombinator.com/item?id=44255728) - [Maximizing Battery Storage Profits via High-Frequency Intraday Trading](https://arxiv.org/abs/2504.06932)
* [2025-06-12, 09:21:05](https://lobste.rs/s/9hzjeh/agentic_coding_recommendations) - [Agentic Coding Recommendations](https://lucumr.pocoo.org/2025/6/12/agentic-coding/)
* [2025-06-12, 08:13:31](https://lobste.rs/s/qvqykb/ruby_on_rails_audit_complete) - [Ruby on Rails Audit Complete](https://ostif.org/ruby-on-rails-audit-complete/)
* [2025-06-12, 07:50:55](https://lobste.rs/s/omykfd/how_much_eu_is_dns4eu) - [How much EU is in DNS4EU?](https://techlog.jenslink.net/posts/dns4eu/)
* [2025-06-12, 07:00:00](https://slashdot.org/story/25/06/12/0012240/india-to-send-first-astronaut-on-mission-to-iss?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [India To Send First Astronaut On Mission To ISS](https://slashdot.org/story/25/06/12/0012240/india-to-send-first-astronaut-on-mission-to-iss?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-12, 06:45:00](https://soylentnews.org/article.pl?sid=25/06/11/0156201&amp;from=rss) - [The Xerox Alto, Smalltalk, and Rewriting a Running GUI](https://soylentnews.org/article.pl?sid=25/06/11/0156201&amp;from=rss)
* [2025-06-12, 06:39:33](https://lobste.rs/s/p2mqon/ai_boom_drives_150_surge_indirect) - [AI Boom Drives 150% Surge in Indirect Emissions at Major Tech Firms, UN Warns](https://esgnews.com/ai-boom-drives-150-surge-in-indirect-emissions-at-major-tech-firms-un-warns/)
* [2025-06-12, 06:29:12](https://lobste.rs/s/e6nh2g/linus_torvalds_rejects_idea_enabling) - [Linus Torvalds Rejects The Idea Of Enabling DAMON By Default In The Linux Kernel](https://www.phoronix.com/news/Linux-DAMON-By-Default-No)
* [2025-06-12, 05:48:09](https://lobste.rs/s/x9wlaa/eu_launches_eu_based_privacy_focused_dns) - [EU launches EU-based, privacy-focused DNS resolution service](https://www.helpnetsecurity.com/2025/06/09/eu-launches-eu-based-privacy-focused-dns-resolution-service/)
* [2025-06-12, 03:30:00](https://slashdot.org/story/25/06/12/005258/canva-now-requires-use-of-llms-during-coding-interviews?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Canva Now Requires Use of LLMs During Coding Interviews](https://slashdot.org/story/25/06/12/005258/canva-now-requires-use-of-llms-during-coding-interviews?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-12, 02:27:30](https://lobste.rs/s/uwhv3o/writing_verified_postfix_calculator_ada) - [Writing a Verified Postfix Calculator in Ada/SPARK](https://pyjarrett.github.io/2025/06/10/postfix-calculator.html)
* [2025-06-12, 02:05:00](https://tech.slashdot.org/story/25/06/12/019221/abandoned-subdomains-from-major-institutions-hijacked-for-ai-generated-spam?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Abandoned Subdomains from Major Institutions Hijacked for AI-Generated Spam](https://tech.slashdot.org/story/25/06/12/019221/abandoned-subdomains-from-major-institutions-hijacked-for-ai-generated-spam?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-12, 01:56:00](https://soylentnews.org/article.pl?sid=25/06/11/0154240&amp;from=rss) - [The Bethesda Declaration](https://soylentnews.org/article.pl?sid=25/06/11/0154240&amp;from=rss)
* [2025-06-12, 01:20:00](https://slashdot.org/story/25/06/12/0117247/large-language-models-small-labor-market-effects?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [Large Language Models, Small Labor Market Effects](https://slashdot.org/story/25/06/12/0117247/large-language-models-small-labor-market-effects?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-12, 00:43:00](https://tech.slashdot.org/story/25/06/12/0043259/an-experimental-new-dating-site-matches-singles-based-on-their-browser-histories?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed) - [An Experimental New Dating Site Matches Singles Based on Their Browser Histories](https://tech.slashdot.org/story/25/06/12/0043259/an-experimental-new-dating-site-matches-singles-based-on-their-browser-histories?utm_source=rss1.0mainlinkanon&amp;utm_medium=feed)
* [2025-06-12, 00:37:27](https://news.ycombinator.com/item?id=44253307) - [Show HN: Eyesite – Experimental website combining computer vision and web design](https://blog.andykhau.com/blog/eyesite)
* [2025-06-12, 00:15:23](https://news.ycombinator.com/item?id=44253212) - [Microsoft Office migration from Source Depot to Git](https://danielsada.tech/blog/carreer-part-7-how-office-moved-to-git-and-i-loved-devex/)
* [2025-06-11, 21:11:00](https://soylentnews.org/article.pl?sid=25/06/11/0136231&amp;from=rss) - [New Way to Track Covertly Android Users](https://soylentnews.org/article.pl?sid=25/06/11/0136231&amp;from=rss)
* [2025-06-11, 20:23:52](https://news.ycombinator.com/item?id=44251411) - [Chatterbox TTS](https://github.com/resemble-ai/chatterbox)
* [2025-06-11, 20:17:32](https://lobste.rs/s/r0spkl/raku_s_core) - [Raku&apos;s \&quot;core\&quot;](https://gist.github.com/raiph/849a4a9d8875542fb86df2b2eda89296)
* [2025-06-11, 19:44:29](https://news.ycombinator.com/item?id=44251047) - [Research suggests Big Bang may have taken place inside a black hole](https://www.port.ac.uk/news-events-and-blogs/blogs/space-cosmology-and-the-universe/what-if-the-big-bang-wasnt-the-beginning-our-research-suggests-it-may-have-taken-place-inside-a-black-hole)
* [2025-06-11, 18:04:29](https://lobste.rs/s/aadxvm/whatever_happened_sandboxfs) - [Whatever happened to sandboxfs?](https://blogsystem5.substack.com/p/whatever-happened-to-sandboxfs)
* [2025-06-11, 17:02:56](https://news.ycombinator.com/item?id=44249565) - [Show HN: Spark, An advanced 3D Gaussian Splatting renderer for Three.js](https://sparkjs.dev/)
* [2025-06-11, 16:26:00](https://soylentnews.org/article.pl?sid=25/06/11/0127250&amp;from=rss) - [OpenAI Slams Court Order to Save All ChatGPT Logs, Including Deleted Chats](https://soylentnews.org/article.pl?sid=25/06/11/0127250&amp;from=rss)
* [2025-06-11, 15:28:46](https://lobste.rs/s/jiii0u/verse_language) - [Verse Language](https://dev.epicgames.com/documentation/en-us/fortnite/verse-language-reference)
* [2025-06-11, 14:10:57](https://lobste.rs/s/26ya82/localhost_tracking_explained_it_could) - [“Localhost tracking” explained. It could cost Meta €32b](https://www.zeropartydata.es/p/localhost-tracking-explained-it-could)
* [2025-06-11, 14:01:48](https://lobste.rs/s/5yimfy/hare_update_assists_addressing_breaking) - [hare-update assists in addressing breaking changes in your code](https://harelang.org/blog/2025-06-11-hare-update/)
* [2025-06-11, 11:45:53](https://lobste.rs/s/ee4ufm/avoiding_generative_models_is_rational) - [Avoiding generative models is the rational and responsible thing to do](https://www.baldurbjarnason.com/2025/followup-on-trusting-your-own-judgement/)
* [2025-06-11, 11:40:00](https://soylentnews.org/article.pl?sid=25/06/11/0022207&amp;from=rss) - [Hasta La Vista, Google Baby](https://soylentnews.org/article.pl?sid=25/06/11/0022207&amp;from=rss)
* [2025-06-11, 11:35:25](https://lobste.rs/s/xsrwpv/firefox_os_s_story_from_mozilla_insider) - [Firefox OS&apos;s story from a mozilla insider not working on the project (2024)](https://ludovic.hirlimann.net/2024/01/firefox-oss-story-from-mozila-insider.html)
* [2025-06-11, 06:58:00](https://soylentnews.org/article.pl?sid=25/06/10/1731239&amp;from=rss) - [‘We&apos;re Definitely on the Back Foot’: U.S. Risks Losing Fusion Energy Race to China, Industry Leaders](https://soylentnews.org/article.pl?sid=25/06/10/1731239&amp;from=rss)
* [2025-06-11, 05:48:00](https://lobste.rs/s/dfshg3/gnome_introducing_stronger) - [GNOME introducing stronger dependencies on systemd](https://blogs.gnome.org/adrianvovk/2025/06/10/gnome-systemd-dependencies/)
* [2025-06-11, 02:14:00](https://soylentnews.org/article.pl?sid=25/06/10/1727213&amp;from=rss) - [Ubuntu Dropping GNOME&apos;s X11 Session](https://soylentnews.org/article.pl?sid=25/06/10/1727213&amp;from=rss)
* [2025-06-10, 22:56:51](https://news.ycombinator.com/item?id=44242435) - [Helion: A modern fast paced Doom FPS engine in C#](https://github.com/Helion-Engine/Helion)
* [2025-06-10, 21:32:00](https://soylentnews.org/article.pl?sid=25/06/09/1724212&amp;from=rss) - [The Linux Mint Team is Testing a New Application for Providing Fingerprint Authentication](https://soylentnews.org/article.pl?sid=25/06/09/1724212&amp;from=rss)
* [2025-06-10, 20:42:19](https://news.ycombinator.com/item?id=44241242) - [First thoughts on o3 pro](https://www.latent.space/p/o3-pro)
* [2025-06-10, 16:47:00](https://soylentnews.org/article.pl?sid=25/06/09/1718210&amp;from=rss) - [Nice Ocean Conference You Have There](https://soylentnews.org/article.pl?sid=25/06/09/1718210&amp;from=rss)
* [2025-06-10, 12:07:00](https://soylentnews.org/article.pl?sid=25/06/09/1710253&amp;from=rss) - [U.S. Immigration Authorities Are Adding Children&apos;s DNA to a Criminal Database](https://soylentnews.org/article.pl?sid=25/06/09/1710253&amp;from=rss)
* [2025-06-10, 08:24:44](https://news.ycombinator.com/item?id=44234080) - [Rust compiler performance](https://kobzol.github.io/rust/rustc/2025/06/09/why-doesnt-rust-care-more-about-compiler-performance.html)
* [2025-06-10, 07:19:00](https://soylentnews.org/article.pl?sid=25/06/09/1152234&amp;from=rss) - [FDA Rushed Out Agency-Wide AI Tool](https://soylentnews.org/article.pl?sid=25/06/09/1152234&amp;from=rss)
* [2025-06-10, 02:31:00](https://soylentnews.org/article.pl?sid=25/06/08/1422259&amp;from=rss) - [American Science &amp; Surplus is Fighting for its Life and Here&apos;s Why You Should Care](https://soylentnews.org/article.pl?sid=25/06/08/1422259&amp;from=rss)
* [2025-06-09, 22:17:44](https://news.ycombinator.com/item?id=44230157) - [Archaeological evidence of intensive indigenous farming in MI&apos;s Upper Peninsula](https://www.science.org/doi/10.1126/science.ads1643)
* [2025-06-09, 21:45:00](https://soylentnews.org/article.pl?sid=25/06/08/1410212&amp;from=rss) - [New Technologies Help Wood-Burning Stoves Burn More Efficiently, Produce Less Smoke](https://soylentnews.org/article.pl?sid=25/06/08/1410212&amp;from=rss)
* [2025-06-09, 16:58:00](https://soylentnews.org/article.pl?sid=25/06/08/142216&amp;from=rss) - [Bill Atkinson, Macintosh Pioneer and Inventor of Hypercard, Dies at 74](https://soylentnews.org/article.pl?sid=25/06/08/142216&amp;from=rss)
* [2025-06-09, 12:11:00](https://soylentnews.org/article.pl?sid=25/06/08/0319228&amp;from=rss) - [University Of Michigan Achieves First Human Brain Recording With Wireless Implant](https://soylentnews.org/article.pl?sid=25/06/08/0319228&amp;from=rss)
* [2025-06-09, 07:54:59](https://news.ycombinator.com/item?id=44222307) - [Quantum Computation Lecture Notes (2022)](https://math.mit.edu/~shor/435-LN/)
* [2025-06-09, 07:27:00](https://soylentnews.org/article.pl?sid=25/06/08/0311242&amp;from=rss) - [Scientists Find New Markers To Identify Species From Fragments Of Fossilized Bone](https://soylentnews.org/article.pl?sid=25/06/08/0311242&amp;from=rss)
* [2025-06-09, 02:46:00](https://soylentnews.org/article.pl?sid=25/06/08/031256&amp;from=rss) - [Are Dead Sea Scrolls Older Than We Thought?](https://soylentnews.org/article.pl?sid=25/06/08/031256&amp;from=rss)
* [2025-06-08, 22:01:00](https://soylentnews.org/article.pl?sid=25/06/07/1357214&amp;from=rss) - [Crypto Kidnapping Organiser Arrested in Morocco](https://soylentnews.org/article.pl?sid=25/06/07/1357214&amp;from=rss)
* [2025-06-08, 17:16:00](https://soylentnews.org/article.pl?sid=25/06/07/1218218&amp;from=rss) - [Volvo is Introducing the First Multi-Adaptive Seatbelt Technology on the EX60 EV](https://soylentnews.org/article.pl?sid=25/06/07/1218218&amp;from=rss)
* [2025-06-08, 12:28:00](https://soylentnews.org/article.pl?sid=25/06/07/1211222&amp;from=rss) - [Endangered Classic Mac Plastic Color Returns as 3D-Printer Filament](https://soylentnews.org/article.pl?sid=25/06/07/1211222&amp;from=rss)
* [2025-06-08, 11:47:44](https://news.ycombinator.com/item?id=44216370) - [Dancing brainwaves: How sound reshapes your brain networks in real time](https://www.sciencedaily.com/releases/2025/06/250602155001.htm)
* [2025-06-08, 08:12:00](https://soylentnews.org/article.pl?sid=25/06/07/123250&amp;from=rss) - [UK Govt Study: Copilot AI Saved Workers 26 Minutes a Day](https://soylentnews.org/article.pl?sid=25/06/07/123250&amp;from=rss)
* [2025-06-08, 03:29:00](https://soylentnews.org/article.pl?sid=25/06/07/1155252&amp;from=rss) - [Damage-Sensing and Self-Healing Artificial Muscles Heralded as Huge Step Forward in Robotics](https://soylentnews.org/article.pl?sid=25/06/07/1155252&amp;from=rss)
