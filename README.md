# [News Summary](https://kherrick.github.io/news-summary/)

## Artificial Intelligence and Technology Developments

* [Trust in AI is Much Higher in China Than in the US](https://slashdot.org/story/25/02/13/2118210/trust-in-ai-is-much-higher-in-china-than-in-the-us?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Highlights the disparity in trust levels towards AI between China and the US.

* [Baidu Scraps Fees For AI Chatbot in Battle for China Tech Supremacy](https://slashdot.org/story/25/02/13/1147245/baidu-scraps-fees-for-ai-chatbot-in-battle-for-china-tech-supremacy?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Explores Baidu's strategy to eliminate fees for its AI chatbot to gain an edge in the Chinese tech landscape.

* [Musk Says New AI Chatbot Outperforms Rivals, Nears Launch](https://slashdot.org/story/25/02/13/1154209/musk-says-new-ai-chatbot-outperforms-rivals-nears-launch?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Elon Musk claims his upcoming AI chatbot offers superior performance compared to competitors.

* [Phind 2: AI search with visual answers and multi-step reasoning](https://www.phind.com/blog/phind-2) - An innovation in AI-powered search with the ability to provide visual responses and reason through multiple steps.

## Gaming and Entertainment

* [Nintendo Patent Push Against Hit Game Palworld Hits Roadblock in US](https://games.slashdot.org/story/25/02/13/2023245/nintendo-patent-push-against-hit-game-palworld-hits-roadblock-in-us?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Details Nintendo's legal hurdles in its patent battles over the popular game Palworld.

## Scientific Innovations and Theories

* [Money May Have Originated Through Long Distance Trade, New Theory Suggests](https://soylentnews.org/article.pl?sid=25/02/13/0126236&from=rss) - A new historical theory suggests the origins of money are tied to long-distance trade.

* [Magnetic field sorting of superconducting graphite particles with Tc>400K (2024)](https://arxiv.org/abs/2410.18020) - Research paper discusses magnetic field techniques for sorting superconducting graphite with extraordinary properties.

## Environmental Warnings and Climate Insights

* [World's Largely Unprotected Peatlands Are Ticking 'Carbon Bomb,' Warns Study](https://news.slashdot.org/story/25/02/13/141239/worlds-largely-unprotected-peatlands-are-ticking-carbon-bomb-warns-study?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Raises concerns about peatlands and their vulnerability to climate change as significant carbon sinks.

## Business and Workforce Dynamics

* [Bezos-Backed Blue Origin To Cut 10% of Its Workforce](https://science.slashdot.org/story/25/02/13/203243/bezos-backed-blue-origin-to-cut-10-of-its-workforce?utm_source=rss1.0mainlinkanon&utm_medium=feed) - Blue Origin is set to downsize its workforce as part of restructuring efforts.

* [JPMorgan CEO Dimon Slams Return-To-Office Pushback](https://slashdot.org/story/25/02/13/197228/jpmorgan-ceo-dimon-slams-return-to-office-pushback?utm_source=rss1.0mainlinkanon&utm_medium=feed) - The JPMorgan CEO criticizes resistance towards returning to traditional office settings.

## Space and Exploration

* [White Hat Hackers Expose Iridium Satellite Security Flaws](https://spectrum.ieee.org/iridium-satellite) - Ethical hackers reveal critical security vulnerabilities in Iridium's satellite communications.

* [Private Spacecraft Gets Dramatic View Of Earth Eclipsing Moon](https://soylentnews.org/article.pl?sid=25/02/09/194224&from=rss) - A remarkable celestial event captured by private space enterprises.

## Innovative Solutions and Open Source

* [MapTCHA, the open-source CAPTCHA that improves OpenStreetMap [video]](https://fosdem.org/2025/schedule/event/fosdem-2025-5879-maptcha-the-open-source-captcha-that-improves-openstreetmap/) - Introduces a CAPTCHA mechanism to simultaneously improve OpenStreetMap.

* [Build Your Own GitHub Codespaces Alternative in 222 Lines of Pulumi](https://devcontainer.community/20250213-pulumi/) - A guide to crafting a lightweight alternative to GitHub Codespaces using Pulumi.

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

* [2025-02-13, 21:40:00](https://slashdot.org/story/25/02/13/2118210/trust-in-ai-is-much-higher-in-china-than-in-the-us?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Trust in AI is Much Higher in China Than in the US](https://slashdot.org/story/25/02/13/2118210/trust-in-ai-is-much-higher-in-china-than-in-the-us?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-13, 21:39:50](https://news.ycombinator.com/item?id=43041726) - [Amazon ends kindle ebooks \"Download and Transfer via USB\"](https://goodereader.com/blog/kindle/amazon-removing-download-and-transfer-on-the-kindle-feb-26th)
* [2025-02-13, 21:15:00](https://soylentnews.org/article.pl?sid=25/02/13/0126236&from=rss) - [Money May Have Originated Through Long Distance Trade, New Theory Suggests](https://soylentnews.org/article.pl?sid=25/02/13/0126236&from=rss)
* [2025-02-13, 21:00:00](https://games.slashdot.org/story/25/02/13/2023245/nintendo-patent-push-against-hit-game-palworld-hits-roadblock-in-us?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Nintendo Patent Push Against Hit Game Palworld Hits Roadblock in US](https://games.slashdot.org/story/25/02/13/2023245/nintendo-patent-push-against-hit-game-palworld-hits-roadblock-in-us?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-13, 20:51:42](https://lobste.rs/s/mq0dzt/challenges_developers_face_creating_api) - [Challenges Developers Face in Creating API and Code Documentation](https://www.coderabbit.ai/blog/challenges-developers-face-in-creating-api-and-code-documentation)
* [2025-02-13, 20:39:48](https://news.ycombinator.com/item?id=43041033) - [The Death of the Web (2024)](https://garry.net/posts/the-death-of-the-web)
* [2025-02-13, 20:34:44](https://lobste.rs/s/ndcuhz/how_add_directory_your_path) - [How to add a directory to your PATH](https://jvns.ca/blog/2025/02/13/how-to-add-a-directory-to-your-path/)
* [2025-02-13, 20:23:35](https://lobste.rs/s/oafv9d/on_jujutsu_magit_experience_report) - [On Jujutsu and Magit: experience report](https://blog.alarsyo.net/posts/2025/02/on-jujutsu-and-magit/)
* [2025-02-13, 20:21:00](https://science.slashdot.org/story/25/02/13/203243/bezos-backed-blue-origin-to-cut-10-of-its-workforce?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Bezos-Backed Blue Origin To Cut 10% of Its Workforce](https://science.slashdot.org/story/25/02/13/203243/bezos-backed-blue-origin-to-cut-10-of-its-workforce?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-13, 19:57:29](https://news.ycombinator.com/item?id=43040521) - [Privacy Pass Authentication for Kagi Search](https://blog.kagi.com/kagi-privacy-pass)
* [2025-02-13, 19:44:34](https://news.ycombinator.com/item?id=43040382) - [MapTCHA, the open-source CAPTCHA that improves OpenStreetMap [video]](https://fosdem.org/2025/schedule/event/fosdem-2025-5879-maptcha-the-open-source-captcha-that-improves-openstreetmap/)
* [2025-02-13, 19:40:00](https://slashdot.org/story/25/02/13/197228/jpmorgan-ceo-dimon-slams-return-to-office-pushback?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [JPMorgan CEO Dimon Slams Return-To-Office Pushback](https://slashdot.org/story/25/02/13/197228/jpmorgan-ceo-dimon-slams-return-to-office-pushback?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-13, 19:30:54](https://lobste.rs/s/f9zeee/why_i_built_hyper_personalized_seach) - [why I built a hyper-personalized seach engine that isn't very good](https://search.technomancy.us/why)
* [2025-02-13, 19:00:00](https://news.slashdot.org/story/25/02/13/1813228/libreoffice-marks-40th-year-with-browser-based-overhaul?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [LibreOffice Marks 40th Year With Browser-Based Overhaul](https://news.slashdot.org/story/25/02/13/1813228/libreoffice-marks-40th-year-with-browser-based-overhaul?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-13, 18:55:19](https://news.ycombinator.com/item?id=43039734) - [How Hans Bethe Stumbled Upon Perfect Quantum Theories](https://www.quantamagazine.org/how-hans-bethe-stumbled-upon-perfect-quantum-theories-20250212/)
* [2025-02-13, 18:23:53](https://news.ycombinator.com/item?id=43039347) - [Tolerating full cloud outages with Monzo Stand-in](https://monzo.com/blog/tolerating-full-cloud-outages-with-monzo-stand-in)
* [2025-02-13, 18:20:29](https://news.ycombinator.com/item?id=43039308) - [Phind 2: AI search with visual answers and multi-step reasoning](https://www.phind.com/blog/phind-2)
* [2025-02-13, 18:20:00](https://slashdot.org/story/25/02/13/1147245/baidu-scraps-fees-for-ai-chatbot-in-battle-for-china-tech-supremacy?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Baidu Scraps Fees For AI Chatbot in Battle for China Tech Supremacy](https://slashdot.org/story/25/02/13/1147245/baidu-scraps-fees-for-ai-chatbot-in-battle-for-china-tech-supremacy?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-13, 17:40:00](https://news.slashdot.org/story/25/02/13/141239/worlds-largely-unprotected-peatlands-are-ticking-carbon-bomb-warns-study?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [World's Largely Unprotected Peatlands Are Ticking 'Carbon Bomb,' Warns Study](https://news.slashdot.org/story/25/02/13/141239/worlds-largely-unprotected-peatlands-are-ticking-carbon-bomb-warns-study?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-13, 17:30:42](https://lobste.rs/s/vvky3g/2024_state_rust_survey_results) - [2024 State of Rust Survey Results](https://blog.rust-lang.org/2025/02/13/2024-State-Of-Rust-Survey-results.html)
* [2025-02-13, 17:13:01](https://news.ycombinator.com/item?id=43038395) - [Who exactly needs to get approval from an institutional review board (IRB)?](https://dynomight.net/irb/)
* [2025-02-13, 17:00:00](https://hardware.slashdot.org/story/25/02/13/1356235/data-center-power-demand-almost-doubled-in-virginia-utility-says?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Data Center Power Demand Almost Doubled in Virginia, Utility Says](https://hardware.slashdot.org/story/25/02/13/1356235/data-center-power-demand-almost-doubled-in-virginia-utility-says?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-13, 16:59:43](https://news.ycombinator.com/item?id=43038200) - [LibreOffice still kicking at 40, now with browser tricks and real-time collab](https://www.theregister.com/2025/02/13/libreoffice_wasm_zetaoffice/)
* [2025-02-13, 16:29:00](https://soylentnews.org/article.pl?sid=25/02/12/1247251&from=rss) - [Developer Creates Endless Wikipedia Feed to Fight Algorithm Addiction](https://soylentnews.org/article.pl?sid=25/02/12/1247251&from=rss)
* [2025-02-13, 16:23:50](https://news.ycombinator.com/item?id=43037623) - [White Hat Hackers Expose Iridium Satellite Security Flaws](https://spectrum.ieee.org/iridium-satellite)
* [2025-02-13, 16:20:00](https://apple.slashdot.org/story/25/02/13/1352250/german-regulator-charges-apple-with-abuse-of-power-over-app-tracking-tool?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [German Regulator Charges Apple With Abuse of Power Over App Tracking Tool](https://apple.slashdot.org/story/25/02/13/1352250/german-regulator-charges-apple-with-abuse-of-power-over-app-tracking-tool?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-13, 16:18:32](https://lobste.rs/s/ulr1pl/accelerating_adoption_post_quantum) - [Accelerating The Adoption of Post-Quantum Cryptography with PHP](https://paragonie.com/blog/2025/02/accelerating-adoption-post-quantum-cryptography)
* [2025-02-13, 16:02:20](https://lobste.rs/s/onehu6/compiling_array_languages_for_simd) - [Compiling Array Languages for SIMD](http://vmchale.com/static/serve/simd.pdf)
* [2025-02-13, 15:57:01](https://lobste.rs/s/zck7bo/resigning_as_asahi_linux_project_lead) - [Resigning as Asahi Linux project lead](https://marcan.st/2025/02/resigning-as-asahi-linux-project-lead/)
* [2025-02-13, 15:40:00](https://news.slashdot.org/story/25/02/13/1415255/are-phds-losing-their-lustre-why-fewer-students-are-enrolling-in-doctoral-degrees?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Are PhDs Losing Their Lustre? Why Fewer Students Are Enrolling in Doctoral Degrees](https://news.slashdot.org/story/25/02/13/1415255/are-phds-losing-their-lustre-why-fewer-students-are-enrolling-in-doctoral-degrees?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-13, 15:34:57](https://news.ycombinator.com/item?id=43036904) - [Resigning as Asahi Linux project lead](https://marcan.st/2025/02/resigning-as-asahi-linux-project-lead/)
* [2025-02-13, 15:20:52](https://news.ycombinator.com/item?id=43036742) - [Magnetic field sorting of superconducting graphite particles with Tc>400K (2024)](https://arxiv.org/abs/2410.18020)
* [2025-02-13, 15:08:34](https://news.ycombinator.com/item?id=43036593) - [Better text rendering in Chromium-based browsers on Windows](https://developer.chrome.com/blog/better-text-rendering-in-chromium-based-browsers-on-windows)
* [2025-02-13, 15:00:00](https://slashdot.org/story/25/02/13/1154209/musk-says-new-ai-chatbot-outperforms-rivals-nears-launch?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Musk Says New AI Chatbot Outperforms Rivals, Nears Launch](https://slashdot.org/story/25/02/13/1154209/musk-says-new-ai-chatbot-outperforms-rivals-nears-launch?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-13, 14:53:21](https://news.ycombinator.com/item?id=43036428) - [Fewer students are enrolling in doctoral degrees](https://www.nature.com/articles/d41586-025-00425-4)
* [2025-02-13, 14:27:49](https://lobste.rs/s/umhsxc/explaining_my_fast_6502_code_generator) - [Explaining my fast 6502 code generator](https://pubby.games/codegen.html)
* [2025-02-13, 14:00:00](https://news.slashdot.org/story/25/02/13/1349244/uk-demand-for-a-back-door-to-apple-data-threatens-americans-lawmakers-say?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [UK Demand For a Back Door To Apple Data Threatens Americans, Lawmakers Say](https://news.slashdot.org/story/25/02/13/1349244/uk-demand-for-a-back-door-to-apple-data-threatens-americans-lawmakers-say?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-13, 13:40:00](https://yro.slashdot.org/story/25/02/13/022230/elizabeth-holmes-breaks-her-silence-in-first-interview-from-prison?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Elizabeth Holmes Breaks Her Silence In First Interview From Prison](https://yro.slashdot.org/story/25/02/13/022230/elizabeth-holmes-breaks-her-silence-in-first-interview-from-prison?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-13, 13:25:09](https://lobste.rs/s/doxlbs/random_numbers_from_pcg32_at_200_gbit_s) - [random numbers from pcg32 at 200 Gbit/s](https://dotat.at/@/2025-02-13-pcg32-simd.html)
* [2025-02-13, 13:00:00](https://tech.slashdot.org/story/25/02/13/0150244/is-it-time-for-a-change-in-gnome-leadership?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [Is It Time For a Change In GNOME Leadership?](https://tech.slashdot.org/story/25/02/13/0150244/is-it-time-for-a-change-in-gnome-leadership?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-13, 12:55:45](https://lobste.rs/s/iwiwye/reassessing_wayland) - [Reassessing Wayland](https://dudemanguy.github.io/blog/posts/2025-02-03-wayland-xorg-2/wayland-xorg-2.html)
* [2025-02-13, 12:50:15](https://lobste.rs/s/fw48of/programs_don_t_kill_people_computers_do) - [Programs don't kill people, computers do](http://crowdhailer.me/2025-02-06/programs-dont-kill-people-computers-do/)
* [2025-02-13, 12:36:49](https://lobste.rs/s/z1xro4/descent_into_v_x) - [A Descent Into the Vᴏ̈ʀᴛᴇx](https://tigerbeetle.com/blog/2025-02-13-a-descent-into-the-vortex/)
* [2025-02-13, 12:19:08](https://news.ycombinator.com/item?id=43035147) - [Cheap blood test detects pancreatic cancer before it spreads](https://www.nature.com/articles/d41586-025-00438-z)
* [2025-02-13, 12:00:00](https://tech.slashdot.org/story/25/02/13/0153239/the-future-of-gplv3-hangs-in-the-balance?utm_source=rss1.0mainlinkanon&utm_medium=feed) - [The Future of GPLv3 Hangs In the Balance](https://tech.slashdot.org/story/25/02/13/0153239/the-future-of-gplv3-hangs-in-the-balance?utm_source=rss1.0mainlinkanon&utm_medium=feed)
* [2025-02-13, 11:48:58](https://lobste.rs/s/jmjqin/build_your_own_github_codespaces) - [Build Your Own GitHub Codespaces Alternative in 222 Lines of Pulumi](https://devcontainer.community/20250213-pulumi/)
* [2025-02-13, 11:43:00](https://soylentnews.org/article.pl?sid=25/02/12/1237237&from=rss) - [Is the EF5 Tornado Rating Effectively Obsolete?](https://soylentnews.org/article.pl?sid=25/02/12/1237237&from=rss)
* [2025-02-13, 10:53:14](https://lobste.rs/s/bfvovo/devenv_1_4_generating_nix_developer) - [devenv 1.4: Generating Nix Developer Environments Using AI](https://devenv.sh/blog/2025/02/13/devenv-14-generating-nix-developer-environments-using-ai/)
* [2025-02-13, 10:20:46](https://lobste.rs/s/ieicfy/homemade_polarimetric_synthetic) - [Homemade polarimetric synthetic aperture radar drone](https://hforsten.com/homemade-polarimetric-synthetic-aperture-radar-drone.html)
* [2025-02-13, 09:44:25](https://news.ycombinator.com/item?id=43034329) - [Self hosted FLOSS fitness/workout tracker](https://github.com/wger-project/wger)
* [2025-02-13, 08:38:13](https://news.ycombinator.com/item?id=43033971) - [Learning fast and accurate absolute pitch judgment in adulthood](https://link.springer.com/article/10.3758/s13423-024-02620-2)
* [2025-02-13, 06:59:47](https://lobste.rs/s/pnq8vs/flac_1_5_0_released) - [FLAC 1.5.0 released](https://xiph.org/flac/2025/02/11/flac-1-5-0-released.html)
* [2025-02-13, 06:57:00](https://soylentnews.org/article.pl?sid=25/02/12/1234248&from=rss) - [A Pinch of Salt Boosts Aluminum Batteries](https://soylentnews.org/article.pl?sid=25/02/12/1234248&from=rss)
* [2025-02-13, 06:03:23](https://lobste.rs/s/zaubhd/engineers_who_won_t_commit_force_bad) - [Engineers who won’t commit force bad decisions](https://www.seangoedecke.com/taking-a-position/)
* [2025-02-13, 02:12:00](https://soylentnews.org/article.pl?sid=25/02/12/095248&from=rss) - [AI Increases Unemployment Rates in US IT Sector](https://soylentnews.org/article.pl?sid=25/02/12/095248&from=rss)
* [2025-02-13, 01:58:05](https://lobste.rs/s/70htqn/ki_editor_now_supports_reveal) - [Ki Editor now supports Reveal](https://ki-editor.github.io/ki-editor/docs/normal-mode/space-menu#reveal)
* [2025-02-13, 00:22:25](https://lobste.rs/s/y95hnw/tiny_jits_for_faster_ffi) - [Tiny JITs for a Faster FFI](https://railsatscale.com/2025-02-12-tiny-jits-for-a-faster-ffi/)
* [2025-02-12, 22:31:10](https://lobste.rs/s/2jgv7x/how_i_automated_my_computer_life_with) - [How I Automated My Computer Life With macOS Folder Actions](https://interfacecraft.online/posts/blog/2025/how-i-automated-my-computer-life-with-macos-folder-actions/)
* [2025-02-12, 22:20:19](https://news.ycombinator.com/item?id=43030388) - [Tiny JITs for a Faster FFI](https://railsatscale.com/2025-02-12-tiny-jits-for-a-faster-ffi/)
* [2025-02-12, 21:28:00](https://soylentnews.org/article.pl?sid=25/02/11/1313219&from=rss) - [Want the News Summarized Accurately?  Don't Ask an \"AI\".](https://soylentnews.org/article.pl?sid=25/02/11/1313219&from=rss)
* [2025-02-12, 21:02:12](https://lobste.rs/s/l5a9uh/you_don_t_link_all_libc) - [you don't link all of libc](https://flak.tedunangst.com/post/you-dont-link-all-of-libc)
* [2025-02-12, 20:17:08](https://news.ycombinator.com/item?id=43029314) - [Basis of the Kalman Filter [pdf]](https://github.com/tpn/pdfs/blob/master/Understanding%20the%20Basis%20of%20the%20Kalman%20Filter%20Via%20a%20Simple%20and%20Intuitive%20Derivation%20%282012%29.pdf)
* [2025-02-12, 20:13:34](https://lobste.rs/s/opel7n/derivative_at_discontinuity) - [Derivative AT a Discontinuity](https://alok.github.io/2024/09/28/discontinuous-derivative/)
* [2025-02-12, 19:02:46](https://lobste.rs/s/1o4dtp/smuggling_arbitrary_data_through_emoji) - [Smuggling arbitrary data through an emoji](https://paulbutler.org/2025/smuggling-arbitrary-data-through-an-emoji/)
* [2025-02-12, 18:37:15](https://news.ycombinator.com/item?id=43028300) - [The Human Alphabet](https://publicdomainreview.org/collection/the-human-alphabet/)
* [2025-02-12, 18:25:55](https://lobste.rs/s/5akiq3/are_efficiency_horizontal_scalability) - [Are Efficiency and Horizontal Scalability at odds?](https://buttondown.com/hillelwayne/archive/are-efficiency-and-horizontal-scalability-at-odds/)
* [2025-02-12, 16:43:00](https://soylentnews.org/article.pl?sid=25/02/11/1216252&from=rss) - [MP Materials Starts Producing Neodymium Magnets in the US](https://soylentnews.org/article.pl?sid=25/02/11/1216252&from=rss)
* [2025-02-12, 11:59:00](https://soylentnews.org/article.pl?sid=25/02/11/1210226&from=rss) - [Undergraduate Upends a 40-Year-Old Data Science Conjecture](https://soylentnews.org/article.pl?sid=25/02/11/1210226&from=rss)
* [2025-02-12, 09:24:08](https://news.ycombinator.com/item?id=43023508) - [Smuggling arbitrary data through an emoji](https://paulbutler.org/2025/smuggling-arbitrary-data-through-an-emoji/)
* [2025-02-12, 07:43:34](https://news.ycombinator.com/item?id=43022892) - [WASM-Native Orchestration](https://wasmcloud.com/)
* [2025-02-12, 07:12:00](https://soylentnews.org/article.pl?sid=25/02/11/127212&from=rss) - [Handful of Users Claim New Nvidia GPUs Are Melting Power Cables Again](https://soylentnews.org/article.pl?sid=25/02/11/127212&from=rss)
* [2025-02-12, 01:29:00](https://soylentnews.org/article.pl?sid=25/02/11/122248&from=rss) - [Boeing Has Informed its Employees of Uncertainty in Future SLS Contracts](https://soylentnews.org/article.pl?sid=25/02/11/122248&from=rss)
* [2025-02-11, 19:45:00](https://soylentnews.org/article.pl?sid=25/02/10/133233&from=rss) - [Asteroid's Odds of Hitting Earth Went Up. But Not Why You Think](https://soylentnews.org/article.pl?sid=25/02/10/133233&from=rss)
* [2025-02-11, 15:45:00](https://soylentnews.org/meta/article.pl?sid=25/02/04/106248&from=rss) - [Soylent Update - February 2025](https://soylentnews.org/meta/article.pl?sid=25/02/04/106248&from=rss)
* [2025-02-11, 15:00:00](https://soylentnews.org/article.pl?sid=25/02/09/1917214&from=rss) - [Researchers Used AI To Build Groundbreaking Nanomaterials Lighter And Stronger Than Titanium](https://soylentnews.org/article.pl?sid=25/02/09/1917214&from=rss)
* [2025-02-11, 10:23:00](https://soylentnews.org/article.pl?sid=25/02/09/194224&from=rss) - [Private Spacecraft Gets Dramatic View Of Earth Eclipsing Moon](https://soylentnews.org/article.pl?sid=25/02/09/194224&from=rss)
* [2025-02-11, 05:45:00](https://soylentnews.org/article.pl?sid=25/02/09/190215&from=rss) - [Intel Has Already Received $2.2B in Federal Grants for Chip Production](https://soylentnews.org/article.pl?sid=25/02/09/190215&from=rss)
* [2025-02-11, 01:00:00](https://soylentnews.org/article.pl?sid=25/02/09/1853248&from=rss) - [Rare Otter 'Disappeared' In Kyrgyzstan, Experts Warn](https://soylentnews.org/article.pl?sid=25/02/09/1853248&from=rss)
* [2025-02-10, 20:19:00](https://soylentnews.org/article.pl?sid=25/02/09/1410202&from=rss) - [IBM Banks on Friendlier Us Regulatory Climate for Dealmaking](https://soylentnews.org/article.pl?sid=25/02/09/1410202&from=rss)
* [2025-02-10, 15:34:00](https://soylentnews.org/article.pl?sid=25/02/09/145236&from=rss) - [Kaspersky Researchers Find Screenshot-Reading Malware on the App Store and Google Play](https://soylentnews.org/article.pl?sid=25/02/09/145236&from=rss)
* [2025-02-10, 12:52:19](https://news.ycombinator.com/item?id=42999655) - [Thinkserver: My web-based coding environment](https://checkmyworking.com/posts/2025/02/thinkserver-my-web-based-coding-environment/)
* [2025-02-10, 11:51:07](https://news.ycombinator.com/item?id=42999258) - [An Infinitely Large Napkin [pdf] (2019)](https://venhance.github.io/napkin/Napkin.pdf)
* [2025-02-10, 10:52:00](https://soylentnews.org/article.pl?sid=25/02/09/1336213&from=rss) - [Your AI Can't See Gorillas](https://soylentnews.org/article.pl?sid=25/02/09/1336213&from=rss)
* [2025-02-10, 10:38:29](https://news.ycombinator.com/item?id=42998904) - [SQL pipe syntax available in public preview in BigQuery](https://cloud.google.com/bigquery/docs/pipe-syntax-guide)
* [2025-02-10, 06:28:28](https://news.ycombinator.com/item?id=42997496) - [Why does Mill use Scala?](https://mill-build.org/mill/depth/why-scala.html)
* [2025-02-10, 06:10:00](https://soylentnews.org/article.pl?sid=25/02/09/1321246&from=rss) - [WhatsApp Says Journalists and Civil Society Members Were Targets of Israeli Spyware](https://soylentnews.org/article.pl?sid=25/02/09/1321246&from=rss)
* [2025-02-10, 01:23:00](https://soylentnews.org/article.pl?sid=25/02/08/1514221&from=rss) - [Facebook Torrents 81TB of Data to Feed their Models](https://soylentnews.org/article.pl?sid=25/02/08/1514221&from=rss)
* [2025-02-10, 00:35:17](https://news.ycombinator.com/item?id=42995656) - [MESI Cache Coherency Protocol Visualization](https://www.scss.tcd.ie/Jeremy.Jones/vivio/caches/MESI.htm)
* [2025-02-09, 23:54:20](https://news.ycombinator.com/item?id=42995418) - [Residential Networking over Telephone](https://computer.rip/2025-02-02-residential-networking-over-telephone.html)
* [2025-02-09, 22:29:32](https://news.ycombinator.com/item?id=42994749) - [Show HN: Detective Stories -Lateral thinking detective game with Deepseek player](https://detective-stories.com/)
* [2025-02-09, 20:36:00](https://soylentnews.org/article.pl?sid=25/02/08/1511237&from=rss) - [NASA Scientists Want to Solve a Mystery: Why Did Life \"Turn Left?\"](https://soylentnews.org/article.pl?sid=25/02/08/1511237&from=rss)
* [2025-02-09, 18:36:04](https://news.ycombinator.com/item?id=42992505) - [Why Does Integer Addition Approximate Float Multiplication?](https://probablydance.com/2025/02/08/why-does-integer-addition-approximate-float-multiplication/)
* [2025-02-09, 15:52:00](https://soylentnews.org/article.pl?sid=25/02/08/155232&from=rss) - [U.K. Orders Apple to Let It Spy on Users’ Encrypted Accounts](https://soylentnews.org/article.pl?sid=25/02/08/155232&from=rss)
* [2025-02-09, 11:08:00](https://soylentnews.org/article.pl?sid=25/02/08/1249225&from=rss) - [Fixing E.T. the Extra-Terrestrial for the Atari 2600](https://soylentnews.org/article.pl?sid=25/02/08/1249225&from=rss)
* [2025-02-09, 06:23:00](https://soylentnews.org/article.pl?sid=25/02/08/1244232&from=rss) - [ 'Cracked' and 'Nulled' Crime Forums,Closed Down In European Cyber Bust](https://soylentnews.org/article.pl?sid=25/02/08/1244232&from=rss)
* [2025-02-09, 01:38:00](https://soylentnews.org/article.pl?sid=25/02/08/1232254&from=rss) - [Mysterious Radiation Belts Detected Around Earth After Epic Solar Storm](https://soylentnews.org/article.pl?sid=25/02/08/1232254&from=rss)
