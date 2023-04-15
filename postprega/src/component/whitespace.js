import React from 'react'
import Header from './Header'
import Question from './Question'
import QuesDetails from './QuesDetails'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './whitespace.css'

export default function whitespace() {
  const questions = [
    {
      id: 0,
      user:"Oriana González",
      title:"DeSantis signs Florida's 6-week abortion ban into law",
      desc:"Florida Gov. Ron DeSantis (R) signed legislation on a six-week abortion ban into law on Thursday night, becoming the latest Southern state looking to bar access after the bill passed in the state legislature earlier in the day.Why it matters: Florida was cons…",
      url:"https://www.axios.com/2023/04/13/florida-6-week-abortion-ban",
      image:"https://images.axios.com/e7WAn6j2tWtxMEterKj_SVicKdw=/0x0:2048x1152/1366x768/2023/04/14/1681444560811.jpg",
      publishedAt:"2023-04-14T03:52:39Z",
      content:"Florida Gov. Ron DeSantis (R) signed legislation on a six-week abortion ban into law on Thursday night, becoming the latest Southern state looking to bar access after the bill passed in the state leg… [+2917 chars]"},
      {
        id: 1,
        user: "https://www.facebook.com/bbcnews",
        title: "Los centros de orientación sobre el embarazo en Reino Unido donde manipulan a las mujeres para que no aborten",
        desc: "Una investigación de la BBC descubrió que muchas mujeres que consultan centros de orientacion sobre el embarazo reciben información falsa y consejos poco éticos destinados a evitar que se realicen un aborto.",
        url: "https://www.bbc.com/mundo/noticias-internacional-64785873",
        image: "https://ichef.bbci.co.uk/news/1024/branded_mundo/44FB/production/_128795671_3b3ecff2-f64e-4f57-a92a-6718dad39e93.jpg",
        publishedAt: "2023-04-14T03:47:11Z",
        "content": "Eleanor Layhe & Divya TalwarBBC Panorama\r\nPie de foto, BBC Panorama realizó una filmación encubierta en tres centros de orientación sobre el embarazo para ver cómo func… [+11143 chars]"
      },
      {
        id: 2,
        user: "MarketScreener",
        title: "Florida lawmakers approve six-week abortion ban",
        desc: "(marketscreener.com) STORY: Lawmakers in the Florida House on Thursday approved the six-week ban with a vote of 70-40. The bill passed the state Senate by a vote of 26-13 on April 3.https://www.marketscreener.com/quote/stock/IPSOS-4663/news/Florida-lawmakers-…",
        url: "https://www.marketscreener.com/quote/stock/IPSOS-4663/news/Florida-lawmakers-approve-six-week-abortion-ban-43490775/?utm_medium=RSS&utm_content=20230414",
        image: "https://www.marketscreener.com/images/twitter_MS_fdnoir.png",
        publishedAt: "2023-04-14T03:44:33Z",
        "content": "The legislation, which makes exceptions for abortions in cases of rape, incest and when the mother's life or health are at serious risk, next heads to the desk of Governor Ron DeSantis for his signat… [+1199 chars]"
      },
      {
        id: 3,
        user: "nbcnews.com",
        title: "Ron DeSantis signs 6-week abortion ban into law in Florida",
        desc: "Gov. Ron DeSantis quietly signed legislation Thursday that would ban most abortions after six weeks in Florida, a move that will weigh on his likely 2024 presidential bid. The governor said as far back as March that he would sign the legislation shepherded th…",
        url: "https://biztoc.com/x/3ceb8d1896ffbe40",
        image: "https://c.biztoc.com/p/3ceb8d1896ffbe40/og.webp",
        publishedAt: "2023-04-14T03:44:05Z",
        "content": "Gov. Ron DeSantis quietly signed legislation Thursday that would ban most abortions after six weeks in Florida, a move that will weigh on his likely 2024 presidential bid.The governor said as far bac… [+328 chars]"
      },
      {
        id: 4,
        user: "Chaiyospol Hemwijit",
        title: "Your horoscope for Apr 14-20",
        desc: "Your spot-on horoscope for work, money and relationship from Guru by Bangkok Post's famously accurate fortune teller. Let's see how you will fare this week and beyond!",
        url: "https://www.bangkokpost.com/life/social-and-lifestyle/2549740/your-horoscope-for-apr-14-20",
        image: "https://static.bangkokpost.com/media/content/20230414/c1_2549740_230414103956_700.jpg",
        publishedAt: "2023-04-14T03:39:00Z",
        "content": "Your spot-on horoscope for work, money and relationship from Guru by Bangkok Post's famously accurate fortune teller. Let's see how you will fare this week and beyond!\r\nNote:- () is for work, () is f… [+9859 chars]"
      },
      {
        id: 5,
        user: null,
        title: "Shabana Azmi says Satish Kaushik contemplated suicide after his film failed - Hindustan Times",
        desc: "Shabana Azmi says Satish Kaushik contemplated suicide after his film failed  Hindustan Times\r\nShabana Azmi says Satish Kaushik wanted to commit suicide after 'Roop Ki Rani Choron Ka Raja' failure - d  Indiatimes.com\r\nRemembering Sati…",
        url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiuQFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vZW50ZXJ0YWlubWVudC9ib2xseXdvb2Qvc2hhYmFuYS1hem1pLXNheXMtc2F0aXNoLWthdXNoaWstY29udGVtcGxhdGVkLXN1aWNpZGUtYWZ0ZXItaGlzLWZpcnN0LWRpcmVjdG9yaWFsLWZhaWxlZC1oZS13YXMtYS1kdWtoaS1hYXRtYS0xMDE2ODE0NDA0NTgzNzIuaHRtbNIBvQFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vZW50ZXJ0YWlubWVudC9ib2xseXdvb2Qvc2hhYmFuYS1hem1pLXNheXMtc2F0aXNoLWthdXNoaWstY29udGVtcGxhdGVkLXN1aWNpZGUtYWZ0ZXItaGlzLWZpcnN0LWRpcmVjdG9yaWFsLWZhaWxlZC1oZS13YXMtYS1kdWtoaS1hYXRtYS0xMDE2ODE0NDA0NTgzNzItYW1wLmh0bWw?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
        image: null,
        publishedAt: "2023-04-14T03:36:41Z",
        "content": "We use cookies and data toDeliver and maintain Google servicesTrack outages and protect against spam, fraud, and abuseMeasure audience engagement and site statistics to unde… [+1131 chars]"
      },
      {
        id: 6,
        user: "Matt Dixon",
        title: "Ron DeSantis signs 6-week abortion ban into law in Florida",
        desc: "Gov. Ron DeSantis signed legislation that would ban most abortions after six weeks in Florida, a move that will weigh on his likely 2024 presidential bid.",
        url: "https://www.nbcnews.com/politics/2024-election/ron-desantis-signs-6-week-abortion-ban-law-florida-rcna78989",
        image: "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-04/230410-ron-desantis-se-338p-5f9599.jpg",
        publishedAt: "2023-04-14T03:31:50Z",
        "content": "Gov. Ron DeSantis signed legislation Thursday that would ban most abortions after six weeks in Florida, a move that will weigh on his likely 2024 presidential bid.\r\nThe governor said as far back as M… [+5827 chars]"
      },
      {
        id: 7,
        user: "Aaron Navarro",
        title: "DeSantis signs Florida's six-week abortion ban into law",
        desc: "Under the law, anyone performing an abortion after six weeks of pregnancy could be charged with a third-degree felony.",
        url: "https://www.cbsnews.com/news/florida-six-week-abortion-ban-signed-into-law-ron-desantis/",
        image: "https://assets1.cbsnewsstatic.com/hub/i/r/2023/04/14/30b46929-52a5-411b-9a5b-daa66c6c1a00/thumbnail/1200x630/a7392f5f10a1f772c26bc6d9705a4787/gettyimages-1250837828.jpg",
        publishedAt: "2023-04-14T03:29:14Z",
        "content": "A six-week ban on abortion was signed into law by Florida Gov. Ron DeSantis Thursday night after the state House, which has a Republican supermajority, passed the bill, 70 to 40 earlier in the day.\r\n… [+7921 chars]"
      },
      {
        id: 8,
        user: "Melissa Romualdi",
        title: "Pete Davidson To Return To ‘Saturday Night Live’ As Host — A Guide To Season 48’s Hosts",
        desc: "\"Saturday Night Live\"'s season 48 is still going strong! The NBC mainstay recently announced the latest round of celebs they've tapped to host the celebrated sketch comedy series. \"Ghosted\" star Ana de Armas will be joined by musical guest Karol G as she head…",
        url: "https://www.etonline.com/pete-davidson-to-return-to-saturday-night-live-as-host-a-guide-to-season-48s-hosts-193491",
        image: "https://etcanada.com/wp-content/uploads/2023/04/GettyImages-1240825391.jpg?quality=80&strip=all&crop=223px%2C683px%2C1303px%2C870px&resize=720%2C480",
        publishedAt: "2023-04-14T03:21:15Z",
        "content": "“Saturday Night Live”‘s season 48 is still going strong! The NBC mainstay recently announced the latest round of celebs they’ve tapped to host the celebrated sketch comedy series.\r\n“Ghosted” star Ana… [+9337 chars]"
      },
      {
        id: 9,
        user: "somin",
        title: "Ahn Jae Hyun, Baek Jin Hee, And Jung Eui Jae Confront Each Other At The Police Station In “The Real Has Come!”",
        desc: "KBS2’s Saturday-Sunday drama “The Real Has Come!” has dropped new stills! “The Real Has Come!” is a drama about a single mom who gets into a contractual fake relationship with a man fervently opposed to marriage. Baek Jin Hee plays Oh Yeon Doo, a language ins…",
        url: "https://www.soompi.com/article/1580003wpp/ahn-jae-hyun-baek-jin-hee-and-jung-eui-jae-confront-each-other-at-the-police-station-in-the-real-has-come",
        image: "https://6.soompi.io/wp-content/uploads/image/the-real_02.jpg?s=900x600&e=t",
        publishedAt: "2023-04-14T02:47:03Z",
        "content": "KBS2s Saturday-Sunday drama The Real Has Come! has dropped new stills!\r\nThe Real Has Come! is a drama about a single mom who gets into a contractual fake relationship with a man fervently opposed to … [+1194 chars]"
      },
      {
        id: 10,
        user: "Carly Johnson",
        title: "Pregnant Rumer Willis goes topless under a sheer black robe in stunning Bumpsuit campaign",
        desc: "The House Bunny star, 34, is expecting her first child with her boyfriend Derek Richard Thomas.",
        url: "https://www.dailymail.co.uk/tvshowbiz/article-11971301/Pregnant-Rumer-Willis-goes-topless-sheer-black-robe-stunning-Bumpsuit-campaign.html",
        image: "https://i.dailymail.co.uk/1s/2023/04/14/03/69815007-0-image-a-50_1681438244980.jpg",
        publishedAt: "2023-04-14T02:11:47Z",
        "content": "Rumer Willis left little to the imagination as she posed in the latest campaign for the celeb-loved maternity brand, Bumpsuit, on Thursday.\r\nShot in stunning black-and-white, the actress shows off he… [+4384 chars]"
      },
      {
        id: 11,
        user: "Common Dreams",
        title: "Hey Florida, Here's What Your 15-Week Abortion Ban Does",
        desc: "The harrowing experiences of two close friends in Florida who experienced serious pregnancy complications days apart are among the latest to show the reality faced by pregnant people in states with forced pregnancy laws—and the future the Republican Party is …",
        url: "https://crooksandliars.com/2023/04/hey-florida-heres-what-your-15-week",
        image: "https://crooksandliars.com/files/primary_image/23/04/screenshot_2023-04-12_at_10.05.28_am.png",
        publishedAt: "2023-04-14T02:02:01Z",
        "content": "The harrowing experiences of two close friends in Florida who experienced serious pregnancy complications days apart are among the latest to show the reality faced by pregnant people in states with f… [+5009 chars]"
      },
      {
        id: 12,
        user: "LAWEEKLY",
        title: "AT-HOME COVID-19 TEST EXPIRATION DATES EXTENDED",
        desc: "You may not have to throw out your expired at-home COVID-19 test as many of the dates have been moved past their printed expiration dates. The printed expiration dates were determined by a U.S. Food and Drug Administration (FDA) approved shelf-life of about f…",
        url: "https://freerepublic.com/focus/f-news/4145453/posts",
        image: null,
        publishedAt: "2023-04-14T01:43:05Z",
        "content": "Skip to comments.\r\nAT-HOME COVID-19 TEST EXPIRATION DATES EXTENDEDLAWEEKLY ^\r\n | APRIL 7, 2023\r\n | ISAI ROCHA\r\nPosted on 04/13/2023 6:43:05 PM PDT by nickcarraway\r\nYou may not have to throw out your … [+3151 chars]"
      },
      {
        id: 13,
        user: "Sonia Horon",
        title: "Jessica Simpson is back in her Daisy Dukes as she shows off slimmed down figure to promote designs",
        desc: "Jessica Simpson rocked her famous Daisy Dukes while promoting her new Spring/Summer clothing campaign in  images shared to her  Instagram on Thursday.",
        url: "https://www.dailymail.co.uk/tvshowbiz/article-11971305/Jessica-Simpson-Daisy-Dukes-shows-slimmed-figure-promote-designs.html",
        image: "https://i.dailymail.co.uk/1s/2023/04/14/01/69813811-0-image-a-38_1681433646144.jpg",
        publishedAt: "2023-04-14T01:33:38Z",
        "content": "Jessica Simpson rocked her famous Daisy Dukes while promoting her new Spring/Summer clothing campaign in images shared to her Instagram on Thursday. \r\nTaking inspiration from her 2005 remake of The D… [+4331 chars]"
      },
      {
        id: 14,
        user: "Meadhbh McGrath",
        title: "In a Thousand Different Ways by Cecelia Ahern: Author flies too fast through challenges of a New Age ‘superhero’",
        desc: "We meet Alice Kelly when she is eight years old. She arrives home from school to find her mother Lily unconscious in bed, covered in what appears to be a thick blanket of blue. This is the first time Alice “sees colours”, experiencing Lily’s…",
        url: "https://www.independent.ie/entertainment/books/book-reviews/in-a-thousand-different-ways-by-cecelia-ahern-author-flies-too-fast-through-challenges-of-a-new-age-superhero-42430682.html",
        image: "https://www.independent.ie/entertainment/books/book-reviews/0becc/42430680.ece/AUTOCROP/w1240h700/827281Cecelia%20Ahern",
        publishedAt: "2023-04-14T01:30:00Z",
        "content": "We meet Alice Kelly when she is eight years old. She arrives home from school to find her mother Lily unconscious in bed, covered in what appears to be a thick blanket of blue. This is the first time… [+4819 chars]"
      },
      {
        id: 15,
        user: "webdesk@voanews.com (Associated Press)",
        title: "Florida Lawmakers Pass 6-Week Abortion Ban",
        desc: "The Republican-dominated Florida Legislature on Thursday approved a ban on abortions after six weeks of pregnancy, a proposal supported by the Republican Gov. Ron DeSantis as he prepares for an expected presidential run.\n\n\nDeSantis is expected to sign the bil…",
        url: "https://www.voanews.com/a/florida-lawmakers-pass-6-week-abortion-ban/7050032.html",
        image: "https://gdb.voanews.com/01000000-0aff-0242-4ce1-08db3c8694e5_cx0_cy7_cw0_w1200_r1.jpg",
        publishedAt: "2023-04-14T01:25:00Z",
        "content": "TALLAHASSEE, Fla.  The Republican-dominated Florida Legislature on Thursday approved a ban on abortions after six weeks of pregnancy, a proposal supported by the Republican Gov. Ron DeSantis as he pr… [+4366 chars]"
      },
      {
        id: 16,
        user: "Bradford Betz",
        title: "Washington state judge addresses abortion pill ruling contradicting Texas judge",
        desc: "A federal judge in Washington state has clarified his ruling on mifepristone, saying his decision maintaining access to the drug remains in effect despite contradictory rulings.",
        url: "https://www.foxnews.com/politics/washington-state-judge-addresses-abortion-pill-ruling-contradicting-texas-judge",
        image: "https://static.foxnews.com/foxnews.com/content/uploads/2023/03/Mifepristone.jpg",
        publishedAt: "2023-04-14T01:15:23Z",
        "content": "A federal judge in Washington state is clarifying his ruling on access to the abortion pill that contradicts prior rulings by two other federal courts. \r\nIn a separate suit brought by 17 states with … [+1876 chars]"
      },
      {
        id: 17,
        user: "Abe Asher",
        title: "Florida passes six-week abortion ban, one of country’s most restrictive",
        desc: "The ban is set to strike another blow against the availability of abortion in the Deep South",
        url: "https://www.independent.co.uk/news/world/americas/us-politics/florida-six-week-abortion-ban-b2319553.html",
        image: "https://static.independent.co.uk/2023/04/07/23/GettyImages-1410364097.jpg?quality=75&width=1200&auto=webp",
        publishedAt: "2023-04-14T00:53:21Z",
        "content": "Sign up for the daily Inside Washington email for exclusive US coverage and analysis sent to your inbox\r\nGet our free Inside Washington email\r\nThe Florida legislature has passed a six-week abortion b… [+2668 chars]"
      },
      {
        id: 18,
        user: "Liz Calvario",
        title: "Pregnant Rihanna surprises shoppers at Ulta Beauty store: ‘Hi guys!’",
        desc: "Rihanna surprised shoppers at Ulta Beauty while pregnant with her second child.",
        url: "https://www.today.com/style/celeb-style/rihanna-surprises-shoppers-ulta-beauty-store-rcna79661",
        image: "https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1200x630_center,f_auto,q_auto:best/rockcms/2023-04/rihanna-lc-230413-e7a4dd.jpg",
        publishedAt: "2023-04-14T00:51:47Z",
        "content": "Rihanna continues to shine bright with her pregnancy style. \r\nThe singer and entrepreneur made a surprise appearance at an Ulta Beauty store in Las Vegas on April 11 to reveal one of her latest Fenty… [+2405 chars]"
      },
      {
        id: 19,
        user: "Abe Drayton",
        title: "The Party of Child Marriage",
        desc: "Which political party came to mind when you saw the title for this post? If you’re in the United States, and you’re honest, it’s the Republican Party. They’ve got a long history of opposing efforts to make various forms of child marriage illegal, because evan…",
        url: "https://freethoughtblogs.com/oceanoxia/2023/04/13/the-party-of-child-marriage/",
        image: "https://freethoughtblogs.com/oceanoxia/wp-content/themes/ftb2-theme/images/logo.png",
        publishedAt: "2023-04-14T00:37:46Z",
        "content": "Which political party came to mind when you saw the title for this post?\r\nIf you’re in the United States, and you’re honest, it’s the Republican Party. They’ve got a long history of opposing efforts … [+2238 chars]"
      },
      {
        id: 20,
        user: "Katherine Hamilton, Katherine Hamilton",
        title: "Pro-Parent Coalition Ads Warn Against Proposed Ohio Abortion Ballot Measure: ‘Going After Our Children’",
        desc: "Protect Women Ohio (PWO), which describes itself as a pro-woman, pro-parent coalition, is launching two new 60-second advertisements this week aimed at defeating Ohio’s proposed abortion ballot measure.",
        url: "https://www.breitbart.com/politics/2023/04/13/pro-parent-coalition-ads-warn-against-proposed-ohio-abortion-ballot-measure-going-after-our-children/",
        image: "https://media.breitbart.com/media/2023/04/Abortion-Law-Protest-Video-640x335.jpg",
        publishedAt: "2023-04-14T00:37:11Z",
        "content": "Protect Women Ohio (PWO), which describes itself as a pro-woman, pro-parent coalition, is launching two new 60-second advertisements this week aimed at defeating Ohios proposed abortion ballot measur… [+5066 chars]"
      },
      {
        id: 21,
        user: "webdesk@voanews.com (VOA News)",
        title: "Abortion Drug Mifepristone to Remain Available — With Restrictions",
        desc: "The U.S. Department of Justice responded Thursday to a ruling that limits access to the abortion pill mifepristone and said it would ask the Supreme Court for an emergency order to put any restrictions on hold.\n\n\nAfter conflicting rulings by various courts on…",
        url: "https://www.voanews.com/a/abortion-drug-mifepristone-to-remain-available-with-restrictions/7049653.html",
        image: "https://gdb.voanews.com/01000000-0a00-0242-91e0-08db39bd93dd_w1200_r1.jpg",
        publishedAt: "2023-04-14T00:18:30Z",
        "content": "The U.S. Department of Justice responded Thursday to a ruling that limits access to the abortion pill mifepristone and said it would ask the Supreme Court for an emergency order to put any restrictio… [+4114 chars]"
      },
      {
        id: 22,
        user: "wsj.com",
        title: "Florida Lawmakers Pass Six-Week Abortion Ban",
        desc: "Florida legislators on Thursday passed a bill banning abortion after six weeks of pregnancy, a strict measure that indicates Republicans aren’t backing away from efforts to curtail abortion access even in states where such efforts may carry political risks. T…",
        url: "https://biztoc.com/x/b91625f07b08a3fa",
        image: "https://c.biztoc.com/p/b91625f07b08a3fa/og.webp",
        publishedAt: "2023-04-14T00:10:33Z",
        "content": "Florida legislators on Thursday passed a bill banning abortion after six weeks of pregnancy, a strict measure that indicates Republicans arent backing away from efforts to curtail abortion access eve… [+260 chars]"
      },
      {
        id: 23,
        user: "Deutsche Welle",
        title: "Florida approves 6-week abortion ban",
        desc: "Lawmakers in the US state of Florida have passed a ban on most abortions after six weeks. Meanwhile, the US Justice Department said it would ask the Supreme Court to stop abortion pill restrictions.",
        url: "https://www.dw.com/en/florida-approves-6-week-abortion-ban/a-65308848",
        image: "https://static.dw.com/image/65309064_6.jpg",
        publishedAt: "2023-04-14T00:06:00Z",
        "content": "Florida's Republican-dominated legislature has approved a ban on most abortions after six weeks.\r\nThe bill passed 70 votes to 40 in the state's lower house, a week after approval in the Senate, and w… [+2933 chars]"
      },
      {
        id: 24,
        user: "Carmen Phillips",
        title: "Also.Also.Also: The Time 100 Just Dropped, Lets See Who’s All Gay and Trans Here?",
        desc: "Congratulations to Drew Barrymore, Aubrey Plaza, Brittney Griner (written by Sue Bird!), Imara Jones (written by Tourmaline) and more!\nThe post Also.Also.Also: The Time 100 Just Dropped, Lets See Who’s All Gay and Trans Here? appeared first on Autostraddle.",
        url: "http://www.autostraddle.com/time-100-2023-lesbian-bisexual-trans-list/",
        image: "https://www.autostraddle.com/wp-content/uploads/2023/04/Feature-2.png?resize=1200,675",
        publishedAt: "2023-04-14T00:04:39Z",
        "content": "It’s been the 80s for the last two days and I have left to go outside into the sun for both of them. The dopamine hit of Mother Nature is actually unreal.\r\nQueer as in F*ck You\r\nLeft to Right: Drew B… [+3492 chars]"
      },
      {
        id: 25,
        user: "Camilla Tominey",
        title: "Meghan Markle would not have relished bending the knee to ‘cry-monger’ Catherine Princess of Wales",
        desc: "Sussex Squadders will insist the Duchess is taking one for the team but is she?",
        url: "https://www.nzherald.co.nz/lifestyle/meghan-markle-would-not-have-relished-bending-the-knee-to-cry-monger-catherine-princess-of-wales/POLPBEJ2KBGVFAYTZCG2SWXGEE/",
        image: "https://www.nzherald.co.nz/resizer/aUBZuDNP65gWwS8XhW_lYgRuy1g=/1200x675/smart/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/WFBHLOTUBSPCWLBJXYF5UUVVBU.png",
        publishedAt: "2023-04-14T00:00:00Z",
        "content": "Sussex Squadders will insist the Duchess is taking one for the team, but is she? Photo / Getty ImagesNothing in Royal Land happens by accident. From the issuing of official announcements to the plann… [+5662 chars]"
      },
      {
        id: 26,
        user: "communities@mercola.com (Dr. Joseph Mercola)",
        title: "How Many Have Died From COVID Vaccines?",
        desc: "From Dr. Joseph Mercola\r\n \n\nSince COVID-19 first entered the scene, exchange of ideas has basically been outlawed. By sharing my views and those from various experts throughout the pandemic on COVID treatments and the experimental COVID jabs, I became a main …",
        url: "https://articles.mercola.com/sites/articles/archive/2023/04/14/tucker-carlson-covid-vaccine-deaths.aspx",
        image: "https://media.mercola.com/ImageServer/Public/2021/May/FB/covid-vaccine-deaths-fb.jpg",
        publishedAt: "2023-04-14T00:00:00Z",
        "content": "Mercola proudly supports these charities and organizations. View All \r\nDisclaimer: The entire contents of this website are based upon the opinions of Dr. Mercola, unless otherwise noted. Individual a… [+1007 chars]"
      },
      {
        id: 27,
        user: "Patrick Reis",
        title: "‘We’re Getting Killed on Abortion’: Inside Trump’s Secret Meetings With the Religious Right",
        desc: "The ex-president expects anti-abortion activists to line up behind his presidential campaign, but his bid for their support is off to a rocky start",
        url: "https://www.rollingstone.com/politics/politics-features/trump-abortion-2024-primary-dobbs-effect-1234713039/",
        image: "https://www.rollingstone.com/wp-content/uploads/2023/04/trump-pence-march-2018-RS-1800.jpg?crop=0px%2C16px%2C1800px%2C1014px&resize=1600%2C900",
        publishedAt: "2023-04-13T23:59:13Z",
        "content": "Since late last year, Donald Trump has been holding private meetings with religious right figures in an effort to remind them about his anti-abortion record and ensure their support. But instead of t… [+10898 chars]"
      },
      {
        id: 28,
        user: "NEWS WIRES",
        title: "White House slams Florida's six-week abortion ban",
        desc: "The bill, which will make abortions illegal before many women usually find out that they're pregnant, will be sent to Governor Ron DeSantis for his signature.",
        url: "https://www.france24.com/en/americas/20230413-white-house-slams-florida-s-six-week-abortion-ban",
        image: "https://s.france24.com/media/display/04cf79e0-0c55-11ec-85a4-005056a97e36/w:1280/p:16x9/2021-09-02T180141Z_462445859_RC2UHP9HKFI9_RTRMADP_3_USA-COURT-ABORTION-CONGRESS.JPG",
        publishedAt: "2023-04-13T23:52:18Z",
        "content": "The bill, which will make abortions illegal before many women usually find out that they're pregnant, will be sent to Governor Ron DeSantis for his signature. Florida's Republican-dominated legislatu… [+1984 chars]"
      },
      {
        id: 29,
        user: "Paul Steinhauser",
        title: "Tim Scott supports national 20-week abortion ban, would consider 15-week limit",
        desc: "Republican Sen. Tim Scott of South Carolina tells Fox News there’s “no question\" he would support at 20-week federal ban on abortion and would possibly consider a 15-week limit.",
        url: "https://www.foxnews.com/politics/tim-scott-supports-national-20-week-abortion-ban-would-consider-15-week-limit",
        image: "https://static.foxnews.com/foxnews.com/content/uploads/2023/04/Tim-Scott-Red-Arrow-Diner-Manchester-NH-4-13-23.jpg",
        publishedAt: "2023-04-13T23:47:04Z",
        "content": "MANCHESTER, N.H. EXCLUSIVERepublican Sen. Tim Scott of South Carolina said theres \"no question\" he would support at 20-week federal ban on abortion and would consider a 15-week limit.\r\nScott, a risin… [+5506 chars]"
      },
      {
        id: 30,
        user: "Susan Rinkunas",
        title: "Congress Needs to Repeal This Zombie 1873 Abortion Ban Before It Blows Up in Our Faces",
        desc: "There is, somehow, a 150-year-old federal law still on the books that could ban abortion nationwide, and Congress needs to move to repeal it immediately. While the zombie law, the Comstock Act of 1873, hasn’t been enforced since before Roe v. Wade, it’s now a…",
        url: "https://jezebel.com/congress-needs-to-repeal-this-zombie-1873-abortion-ban-1850333302",
        image: "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/8473c328ddcb724c327c819579158112.png",
        publishedAt: "2023-04-13T23:45:00Z",
        "content": "There is, somehow, a 150-year-old federal law still on the books that could ban abortion nationwide, and Congress needs to move to repeal it immediately. While the zombie law, the Comstock Act of 187… [+4569 chars]"
      },
      {
        id: 31,
        user: "USA TODAY NETWORK, Kathryn Varn, USA TODAY NETWORK",
        title: "Florida Legislature passes 6-week abortion ban; bill heads to Gov. DeSantis' desk for signature",
        desc: "Whether it goes into effect is contingent on how the Florida Supreme Court rules in a lawsuit against the current 15-week law.",
        url: "https://www.usatoday.com/story/news/politics/2023/04/13/florida-abortion-law-6-week-ban-ron-desantis/11660085002/",
        image: "https://www.gannett-cdn.com/presto/2023/04/04/USAT/0c7df8c0-a355-4bf9-9023-b53f56e2a4b7-AP_Abortion_Florida.jpg?auto=webp&crop=4531,2549,x0,y230&format=pjpg&width=1200",
        publishedAt: "2023-04-13T23:40:47Z",
        "content": "TALLAHASSEE, Fla. — Florida House Republicans leveraged their supermajority to fast-track and pass the six-week abortion ban Thursday, hours after lawmakers rejected nearly 50 amendments proposed by … [+4894 chars]"
      },
      {
        id: 32,
        user: "LAURA UNGAR and AMANDA SEITZ Associated Press",
        title: "Abortion providers scramble as courts restrict pills",
        desc: "Doctors, clinics and telehealth providers across the country are scrambling to figure out how they will continue to provide the most common type of abortion after a federal appeals court imposed new restrictions on a key abortion medication",
        url: "https://abcnews.go.com/US/wireStory/abortion-providers-scramble-courts-restrict-pills-98572440",
        image: "https://s.abcnews.com/images/US/wirestory_9ba8f3ce130fae246e1d87ce428b74a0_16x9_992.jpg",
        publishedAt: "2023-04-13T23:32:47Z",
        "content": "Doctors, clinics and telehealth providers across the country are scrambling to figure out how they will continue to provide the most common type of abortion after a federal appeals court imposed new … [+6113 chars]"
      },
      {
        id: 33,
        user: "By Michele Munz St. Louis Post-Dispatch",
        title: "Planned Parenthood says it won't change its practice on medication abortions",
        desc: "Staff at Planned Parenthood's clinic in southern Illinois say they will continue to provide medication abortions as usual, despite a federal appeals court decision late Wednesday restricting access.",
        url: "https://www.stltoday.com/lifestyles/health-med-fit/health/planned-parenthood-says-it-wont-change-its-practice-on-medication-abortions/article_82638b17-c5a0-5d38-a4db-37b32468cc24.html",
        image: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/8/26/82638b17-c5a0-5d38-a4db-37b32468cc24/643876ee7f803.preview.jpg?crop=1763%2C926%2C0%2C124&resize=1200%2C630&order=crop%2Cresize",
        publishedAt: "2023-04-13T23:24:00Z",
        "content": "FAIRVIEW HEIGHTS Staff at Planned Parenthood's clinic in southern Illinois say they will continue to provide medication abortions as usual, despite a federal appeals court decision late Wednesday res… [+5943 chars]"
      },
      {
        id: 34,
        user: "Bob Cronin",
        title: "Florida Republicans Pass 6-Week Abortion Ban",
        desc: "The Republican-dominated Florida Legislature on Thursday approved a ban on abortions after six weeks of pregnancy, a proposal supported by GOP Gov. Ron DeSantis. Florida currently prohibits abortions after 15 weeks. A six-week ban would give DeSantis a politi…",
        url: "https://www.newser.com/story/333983/6-week-abortion-ban-goes-to-desantis.html",
        image: "https://img2-azrcdn.newser.com/image/1467357-12-20230413184741.jpeg",
        publishedAt: "2023-04-13T23:20:00Z",
        "content": "The Republican-dominated Florida Legislature on Thursday approved a ban on abortions after six weeks of pregnancy, a proposal supported by GOP Gov. Ron DeSantis. Florida currently prohibits abortions… [+1940 chars]"
      },
      {
        id: 35,
        user: null,
        title: "This gynaecologist has delivered 10,000 babies and helped with women’s most intimate problems",
        desc: "Dr Han How Chuan has made it his life’s work to help women through childbirth, miscarriage, infertility, menopause and gynaecological cancers. He tells CNA Women what he has learnt about women as an obstetrician and gynaecologist, and how it has enhanced his …",
        url: "https://cnalifestyle.channelnewsasia.com/women/singapore-gynaecologist-dr-han-how-chuan-hc-han-clinic-women-pregnancy-miscarriage-infertility-353646",
        image: "https://onecms-res.cloudinary.com/image/upload/s--MphLCkL---/c_crop,h_2110,w_3752,x_0,y_191/c_fill,g_auto,h_676,w_1200/fl_relative,g_south_east,l_mediacorp:cna:watermark:2021-08:cna,w_0.1/f_auto,q_auto/v1/mediacorp/cna/image/2023/03/30/_al_3543.jpg?itok=C4hEFI10",
        publishedAt: "2023-04-13T23:16:53Z",
        "content": "He has spent 33 years working with women listening to their most private problems, sharing their happiest moments and supporting them through times of unimaginable loss.\r\nDuring his long career, he h… [+578 chars]"
      },
      {
        id: 36,
        user: "Al Jazeera",
        title: "Florida Governor DeSantis to sign six-week abortion ban",
        desc: "DeSantis, a Republican leader and possible contender for the presidency in 2024, is expected to sign the bill into law.",
        url: "https://www.aljazeera.com/news/2023/4/13/florida-governor-desantis-to-sign-six-week-abortion-ban",
        image: "https://www.aljazeera.com/wp-content/uploads/2023/04/2023-03-30T215630Z_1184808738_RC2J40ACH4TX_RTRMADP_3_USA-ELECTION-DESANTIS.jpg?resize=1920%2C1440",
        publishedAt: "2023-04-13T23:16:42Z",
        "content": "Florida Governor Ron DeSantis, a prominent figure in the Republican Party, is expected to sign into law a six-week abortion ban, which will make the southern state the latest to enact severe restrict… [+4544 chars]"
      },
      {
        id: 37,
        user: "CBS News",
        title: "Florida Legislature passes bill banning abortion after 6 weeks",
        desc: "The Florida Legislature on Thursday passed a state Senate bill which bans abortions after six weeks of pregnancy. Under the language of the bill, physicians could be charged with a third-degree felony. It now heads to the desk of Florida Gov. Ron DeSantis for…",
        url: "https://www.cbsnews.com/video/florida-legislature-passes-bill-banning-abortion-after-6-weeks/",
        image: "https://assets1.cbsnewsstatic.com/hub/i/r/2023/04/13/4691c7ef-2226-4d53-af71-5a315062f55b/thumbnail/1200x630/a0b462ca83fa80db774ff3fef6f3bd5d/cbsn-fusion-florida-legislature-passes-bill-banning-abortion-after-6-weeks-thumbnail-1882868-640x360.jpg",
        publishedAt: "2023-04-13T23:14:30Z",
        "content": "Watch CBS News\r\nCopyright ©2023 CBS Interactive Inc. All rights reserved.\r\nGet browser notifications for breaking news, live events, and exclusive reporting.\r\nNot NowTurn On"
      },
      {
        id: 38,
        user: "Politico",
        title: "The red lights are flashing in our health care system",
        desc: "The red lights are flashing in our health care systempolitico.com",
        url: "https://www.politico.com/newsletters/politico-nightly/2023/04/13/the-red-lights-are-flashing-in-our-health-care-system-00092004",
        image: "https://static.politico.com/73/a4/24281bd34fd198174d3304955997/gettyimages-1310333748.jpg",
        publishedAt: "2023-04-13T23:11:08Z",
        "content": "Residents and staff gather and dance during an Easter concert at the Ararat Nursing Facility in Los Angeles, Calif. in 2021. Nursing homes around the country continue to experience huge staffing shor… [+12239 chars]"
      },
      {
        id: 39,
        user: "CBS News",
        title: "Justice Department to ask Supreme Court to intervene in ruling on FDA approval of mifepristone",
        desc: "The Justice Department on Thursday said it will request that the Supreme Court intervene in a Texas federal judge's ruling last week to halt the Food and Drug Administration's approval of the abortion pill mifepristone. On Wednesday, a federal appeals court o…",
        url: "https://www.cbsnews.com/video/justice-department-to-ask-supreme-court-to-intervene-in-ruling-on-fda-approval-of-mifepristone/",
        image: "https://assets1.cbsnewsstatic.com/hub/i/r/2023/04/13/937eeaad-4a4e-40a2-bd27-f4576ea38c20/thumbnail/1200x630/465ab7871bd5ea390f0ec09892ef9b81/cbsn-fusion-justice-department-to-ask-supreme-court-to-intervene-in-ruling-on-fda-approval-of-mifepristone-thumbnail-1882848-640x360.jpg",
        publishedAt: "2023-04-13T23:09:06Z",
        "content": "Watch CBS News\r\nCopyright ©2023 CBS Interactive Inc. All rights reserved.\r\nGet browser notifications for breaking news, live events, and exclusive reporting.\r\nNot NowTurn On"
      },
      {
        id: 40,
        user: "Sonia Horon, Eve Buckland, Jacqueline Lindenberg",
        title: "Minka Kelly sports white hoodie and sweatpants as she takes her dog for a walk in Los Angeles",
        desc: "Minka Kelly was pictured looking casual cool as she took her dog for a walk in Los Angeles on Thursday.",
        url: "https://www.dailymail.co.uk/tvshowbiz/article-11970929/Minka-Kelly-sports-white-hoodie-sweatpants-takes-dog-walk-Los-Angeles.html",
        image: "https://i.dailymail.co.uk/1s/2023/04/14/00/69811395-0-image-a-19_1681428253676.jpg",
        publishedAt: "2023-04-13T23:06:50Z",
        "content": "Minka Kelly was pictured looking casual cool as she took her dog for a walk in Los Angeles on Thursday.\r\nThe Friday Night Lights star, 42, sported a white hoodie with a rose motif, and a matching pai… [+7095 chars]"
      },
      {
        id: 41,
        user: "pbs.org",
        title: "How abortion providers are navigating the swiftly-changing legal landscape",
        desc: "The White House will ask the Supreme Court to intervene in the legal battle surrounding the abortion medication mifepristone. A federal appeals court ruled in favor of continuing access to the drug, but also limited its distribution through the mail and said …",
        url: "https://biztoc.com/x/951ed106b7769ed3",
        image: "https://c.biztoc.com/p/951ed106b7769ed3/og.webp",
        publishedAt: "2023-04-13T23:04:05Z",
        "content": "The White House will ask the Supreme Court to intervene in the legal battle surrounding the abortion medication mifepristone. A federal appeals court ruled in favor of continuing access to the drug, … [+266 chars]"
      },
      {
        id: 42,
        user: "PAUL J. WEBER and JESSICA GRESKO Associated Press",
        title: "DOJ to ask Supreme Court to put abortion pill limits on hold",
        desc: "At stake in the accelerating court battle that began in Texas is widespread access to the most common method of abortion in the U.S.",
        url: "https://richmond.com/news/national/doj-to-ask-supreme-court-to-put-abortion-pill-limits-on-hold/article_a37e7c23-fc75-5b93-afc9-a58441d7cd17.html",
        image: "https://bloximages.newyork1.vip.townnews.com/richmond.com/content/tncms/assets/v3/editorial/a/37/a37e7c23-fc75-5b93-afc9-a58441d7cd17/64387382c5f9a.preview.jpg?crop=1732%2C909%2C32%2C64&resize=1200%2C630&order=crop%2Cresize",
        publishedAt: "2023-04-13T23:00:00Z",
        "content": "AUSTIN, Texas The Justice Department said Thursday that it will again go to the Supreme Court over abortion after a lower court ruling allowed the abortion pill mifepristone to remain available in th… [+21537 chars]"
      },
      {
        id: 43,
        user: "Reda M. Mohamed, Said M. El-Sheikh, Mohammad W. Kadi, Ammar A. Labib, Sheta M. Sheta",
        title: "A novel test device and quantitative colorimetric method for the detection of human chorionic gonadotropin (hCG) based on Au@Zn–salen MOF for POCT applications",
        desc: "RSC Adv., 2023, 13,11751-11761DOI: 10.1039/D2RA07854F, Paper Open Access   This article is licensed under a Creative Commons Attribution-NonCommercial 3.0 Unported Licence.Reda M. Mohamed, Said M. El-Sheikh, Mohammad W. Kadi, Ammar A. Labib, Sheta M. Shet…",
        url: "https://pubs.rsc.org/en/content/articlelanding/2023/ra/d2ra07854f",
        image: "https://pubs.rsc.org/en/Content/Image/GA/D2RA07854F",
        publishedAt: "2023-04-13T23:00:00Z",
        "content": "R. M. Mohamed, S. M. El-Sheikh, M. W. Kadi, A. A. Labib and S. M. Sheta,\r\n RSC Adv., 2023, 13, 11751\r\nDOI: 10.1039/D2RA07854F \r\nThis article is licensed under a \r\n Creative Commons Attribution-NonCom… [+978 chars]"
      },
      {
        id: 44,
        user: "PAUL J. WEBER and JESSICA GRESKO Associated Press",
        title: "DOJ to ask Supreme Court to put abortion pill limits on hold",
        desc: "At stake in the accelerating court battle that began in Texas is widespread access to the most common method of abortion in the U.S.",
        url: "https://billingsgazette.com/news/national/doj-to-ask-supreme-court-to-put-abortion-pill-limits-on-hold/article_3bba49cf-dc03-56c4-b60c-ef0d58e81215.html",
        image: "https://bloximages.chicago2.vip.townnews.com/billingsgazette.com/content/tncms/assets/v3/editorial/3/bb/3bba49cf-dc03-56c4-b60c-ef0d58e81215/643873761c485.preview.jpg?crop=1732%2C909%2C32%2C64&resize=1200%2C630&order=crop%2Cresize",
        publishedAt: "2023-04-13T23:00:00Z",
        "content": "AUSTIN, Texas The Justice Department said Thursday that it will again go to the Supreme Court over abortion after a lower court ruling allowed the abortion pill mifepristone to remain available in th… [+21518 chars]"
      },
      {
        id: 46,
        user: "PAUL J. WEBER and JESSICA GRESKO Associated Press",
        title: "DOJ to ask Supreme Court to put abortion pill limits on hold",
        desc: "At stake in the accelerating court battle that began in Texas is widespread access to the most common method of abortion in the U.S.",
        url: "https://roanoke.com/news/national/doj-to-ask-supreme-court-to-put-abortion-pill-limits-on-hold/article_24727050-89a9-5ad3-97a2-fd8c74330ef9.html",
        image: "https://bloximages.newyork1.vip.townnews.com/roanoke.com/content/tncms/assets/v3/editorial/2/47/24727050-89a9-5ad3-97a2-fd8c74330ef9/64387382d8c84.preview.jpg?crop=1732%2C909%2C32%2C64&resize=1200%2C630&order=crop%2Cresize",
        publishedAt: "2023-04-13T23:00:00Z",
        "content": "AUSTIN, Texas The Justice Department said Thursday that it will again go to the Supreme Court over abortion after a lower court ruling allowed the abortion pill mifepristone to remain available in th… [+21518 chars]"
      },
      {
        id: 47,
        user: null,
        title: "Florida House Passes 6-Week Abortion Ban Amid Row",
        desc: "Florida's Republican-dominated legislature on Thursday approved a ban on most abortions after six weeks -- before many women know they are pregnant -- a measure immediately assailed by the White House as \"extreme and dangerous.\"",
        url: "https://www.ndtv.com/world-news/florida-house-passes-6-week-abortion-ban-amid-row-3946987",
        image: "https://c.ndtvimg.com/2022-05/m4k9uvfg_us-abortion-rights-protest-afp-2-650_625x300_03_May_22.jpg",
        publishedAt: "2023-04-13T22:55:19Z",
        "content": "The White House slammed the move and said that the government will bring the matter to Supreme Court.\r\nMiami, United States: Florida's Republican-dominated legislature on Thursday approved a ban on m… [+2071 chars]"
      },
      {
        id: 48,
        user: "Gabriella Borter",
        title: "Florida Lawmakers Approve 6-week Abortion Ban, Sending Bill To DeSantis For Signature",
        desc: "Florida's Republican-led House of Representatives on Thursday gave final approval to a six-week abortion ban, setting the stage for abortion access to be drastically curtailed in the state and across the U.S.",
        url: "https://www.ibtimes.com/florida-lawmakers-approve-6-week-abortion-ban-sending-bill-desantis-signature-3685795",
        image: "https://d.ibtimes.com/en/full/4445398/anti-abortion-protesters-rally-outside-clinic-clearwater-florida.jpg",
        publishedAt: "2023-04-13T22:51:35Z",
        "content": "Anti-abortion rights activists stand outside of the Bread and Roses Woman's Health Center, a clinic that provides abortions while women arrive to receive patient care in Clearwater, Florida, U.S. Feb… [+3316 chars]"
      },
      {
        id: 49,
        user: "Geoff Bennett, Karina Cuevas",
        title: "How abortion providers are navigating the swiftly-changing legal landscape",
        desc: "The White House will ask the Supreme Court to intervene in the legal battle surrounding the abortion medication mifepristone. A federal appeals court ruled in favor of continuing access to the drug, but also limited its distribution through the mail and said …",
        url: "https://www.pbs.org/newshour/show/how-abortion-providers-are-navigating-the-swiftly-changing-legal-landscape",
        image: "https://d3i6fh83elv35t.cloudfront.net/static/2023/04/AfterRoe-3-1024x683.jpg",
        publishedAt: "2023-04-13T22:50:35Z",
        "content": "The White House will ask the Supreme Court to intervene in the legal battle surrounding the abortion medication mifepristone. A federal appeals court ruled in favor of continuing access to the drug, … [+177 chars]"
      },
      {
        id: 50,
        user: "Lourdes Duarte, Adrienne Balow, Alonzo Small",
        title: "With mortalities on the rise, Black Maternal Health Week raising awareness",
        desc: "From 2020-2021, maternal mortalities rose by 60%.",
        url: "https://wgntv.com/news/illinois/with-mortalities-on-the-rise-black-maternal-health-week-raising-awareness/",
        image: "https://wgntv.com/wp-content/uploads/sites/5/2023/04/snapshot-2023-04-13T174002.415.jpg?w=1280",
        publishedAt: "2023-04-13T22:46:00Z",
        "content": "Black Maternal Health Week, April 11-17, is meant to raise awareness of the disparities Black mothers face when giving birth and caring for their babies.\r\nBlack women are nearly three times more like… [+599 chars]"
      },
      {
        id: 51,
        user: "WGN-TV",
        title: "With mortalities on the rise, Black Maternal Health Week raising awareness",
        desc: "From 2020-2021, maternal mortalities rose by 60%.",
        url: "https://wgntv.com/news/chicago-news/with-mortalities-on-the-rise-black-maternal-health-week-raising-awareness/",
        image: "https://wgntv.com/wp-content/uploads/sites/5/2023/04/snapshot-2023-04-13T174002.415.jpg?w=1280",
        publishedAt: "2023-04-13T22:46:00Z",
        "content": "Black Maternal Health Week, April 11-17, is meant to raise awareness of the disparities Black mothers face when giving birth and caring for their babies.\r\nBlack women are nearly three times more like… [+599 chars]"
      },
      {
        id: 52,
        user: "Katherine Hamilton, Katherine Hamilton",
        title: "Florida House Passes 6-Week Heartbeat Abortion Ban, Sends to Governor’s Desk",
        desc: "The Florida House passed a bill 70-40 on Thursday outlawing abortion after six weeks of pregnancy, sending it to Gov. Ron DeSantis's (R) desk for final approval.",
        url: "https://www.breitbart.com/politics/2023/04/13/florida-house-passes-6-week-heartbeat-abortion-ban-sends-to-governors-desk/",
        image: "https://media.breitbart.com/media/2021/06/Fetus-in-Utero-640x335.jpg",
        publishedAt: "2023-04-13T22:45:37Z",
        "content": "The Florida House passed a bill 70-40 on Thursday outlawing abortion after six weeks of pregnancy, sending it to Gov. Ron DeSantis’s (R) desk for final approval. \r\nSenate Bill 300 (House Bill 7) woul… [+5812 chars]"
      },
      {
        id: 53,
        user: "forbes.com",
        title: "Florida Lawmakers Pass 6-Week Abortion Ban",
        desc: "Florida’s GOP-controlled state legislature passed a ban on most abortions after six weeks of pregnancy Thursday, possibly paving the way for Florida to join 14 other states that enacted either all-out bans or heavy restrictions on the procedure since the Supr…",
        url: "https://biztoc.com/x/51d4aa9b08e8e71f",
        image: "https://c.biztoc.com/p/51d4aa9b08e8e71f/og.webp",
        publishedAt: "2023-04-13T22:42:05Z",
        "content": "Floridas GOP-controlled state legislature passed a ban on most abortions after six weeks of pregnancy Thursday, possibly paving the way for Florida to join 14 other states that enacted either all-out… [+310 chars]"
      },
      {
        id: 54,
        user: "Jacqueline Lindenberg, Eve Buckland",
        title: "Minka Kelly gets candid about 'toxic' relationship with Friday Night Lights co-star Taylor Kitsch",
        desc: "Minka Kelly has been telling all in her upcoming memoir, Tell Me Everything, and got candid about her previous 'toxic' relationship with Friday Night Lights co-star, Taylor Kitsch.",
        url: "https://www.dailymail.co.uk/tvshowbiz/article-11970865/Minka-Kelly-gets-candid-toxic-relationship-Friday-Night-Lights-star-Taylor-Kitsch.html",
        image: "https://i.dailymail.co.uk/1s/2023/04/13/23/69809965-0-image-a-4_1681425688603.jpg",
        publishedAt: "2023-04-13T22:34:38Z",
        "content": "Minka Kelly has opened up about her previous 'toxic' relationship with Friday Night Lights co-star, Taylor Kitsch, in her upcoming memoir titled, Tell Me Everything.\r\nIn excerpts obtained by The Dail… [+8292 chars]"
      },
      {
        id: 55,
        user: "Jean B Nachega, Kimberly K Scarsi, Monica Gandhi, Rachel K Scott, Lynne M Mofenson, Moherndran Archary, Sharon Nachman, Eric Decloedt, Elvin H Geng, Lindsay Wilson, Angeli Rawat, John W Mellors",
        title: "[Review] Long-acting antiretrovirals and HIV treatment adherence",
        desc: "Intramuscular injection of long-acting cabotegravir and rilpivirine is a novel, long-acting antiretroviral therapy (ART) combination approved for use as a fully suppressive regimen for people living with HIV. Long-acting cabotegravir with rilpivirine ART has …",
        url: "https://www.thelancet.com/journals/lanhiv/article/PIIS2352-3018(23)00051-6/fulltext?rss=yes",
        image: "https://www.thelancet.com/cms/asset/1bd7ab25-cc4b-4d4d-929a-29cfc093ff04/gr1.jpg",
        publishedAt: "2023-04-13T22:30:02Z",
        "content": "1.Guidelines for the use of antiretroviral agents in adults and adolescents with HIV.\r\n2.Adherence to HIV treatment regimens: systematic literature review and meta-analysis.\r\nPatient Pre… [+13163 chars]"
      },
      {
        id: 56,
        user: "Haley Gunn",
        title: "Minka Kelly Reveals Shocking Childhood Abuse: Actress Was Almost A Teen Mom",
        desc: "Minka Kelly revealed shocking details of her childhood, including abuse and a teen pregnancy.",
        url: "https://radaronline.com/p/minka-kelly-reveals-shocking-childhood-abuse-in-memoir/",
        image: "https://media.radaronline.com/brand-img/09n5dBSoK/1200x628/minkakelly-pp-1681404386586.jpg",
        publishedAt: "2023-04-13T22:30:00Z",
        "content": "Minka Kelly revealed shocking details of her childhood about being abandoned by her mother, coerced into making an adult film by an ex-boyfriend and almost becoming a teen mom, RadarOnline.com has le… [+3238 chars]"
      },
      {
        id: 57,
        user: "Brian Bushard, Forbes Staff, \n Brian Bushard, Forbes Staff\n https://www.forbes.com/sites/brianbushard/",
        title: "Florida Lawmakers Pass 6-Week Abortion Ban—And DeSantis Is Expected To Sign It",
        desc: "Gov. Ron DeSantis (R-Fla.) has suggested he will sign the stringent abortion bill into law.",
        url: "https://www.forbes.com/sites/brianbushard/2023/04/13/florida-lawmakers-pass-6-week-abortion-ban-and-desantis-is-expected-to-sign-it/",
        image: "https://imageio.forbes.com/specials-images/imageserve/64387772da16a0aff621d3ea/0x0.jpg?format=jpg&crop=3004,1690,x0,y0,safe&width=1200",
        publishedAt: "2023-04-13T22:25:34Z",
        "content": "Floridas GOP-controlled state legislature passed a ban on most abortions after six weeks of pregnancy Thursday, possibly paving the way for Florida to join 14 other states that enacted either all-out… [+2959 chars]"
      },
      {
        id: 58,
        user: "Selim Algar",
        title: "Florida lawmakers pass 6-week abortion ban after Republican lawmakers fast-track bill",
        desc: "Florida lawmakers on Thursday passed a six-week abortion ban that will now head to Gov. Ron DeSantis' desk for final approval.",
        url: "https://nypost.com/2023/04/13/florida-lawmakers-pass-6-week-abortion-ban/",
        image: "https://nypost.com/wp-content/uploads/sites/2/2023/04/newspress-collage-26582352-1681424553466.jpg?quality=75&strip=all&1681410203&w=1024",
        publishedAt: "2023-04-13T22:24:48Z",
        "content": "Florida lawmakers passed a six-week abortion ban Thursday that will now head to Gov. Ron DeSantis’ desk for final approval.\r\nThe state’s Republican-led House of Representatives voted to replace Flori… [+2301 chars]"
      },
      {
        id: 59,
        user: "Daily Mail UK",
        title: ". I wonder if he's a cross-dresser like Bradley Manning.",
        desc: "The Florida state House voted overwhelmingly Thursday to outlaw abortions in the state after six weeks of pregnancy. The vote was 70-40 in a body that skews heavily Republican. However, with just 35 Democratic seats, some GOP lawmakers joined the opposition. …",
        url: "https://freerepublic.com/focus/f-news/4145404/posts",
        image: null,
        publishedAt: "2023-04-13T22:23:45Z",
        "content": "Skip to comments.\r\n. I wonder if he's a cross-dresser like Bradley Manning. Daily Mail UK ^\r\n | April 13, 2023\r\n | Emma James\r\nPosted on 04/13/2023 3:23:45 PM PDT by Morgana\r\nThe Florida state House … [+2131 chars]"
      },
      {
        id: 60,
        user: "United Nations",
        title: "Speakers Stress Importance of Data in Addressing Development Challenges Due to Ageing Populations, Migration, Demographic Dividend, as Commission Continues Session",
        desc: "Against the backdrop of the major demographic issues facing the world today, the United Nations Population Division’s data has been essential as it serves as a reference for domestic population projections, experts underscored today, as the Commission on Popu…",
        url: "https://press.un.org/en/2023/pop1108.doc.htm",
        image: null,
        publishedAt: "2023-04-13T22:16:44Z",
        "content": "Key Role of United Nations Population Division Resources Spotlighted \r\nAgainst the backdrop of the major demographic issues facing the world today, the United Nations Population Divisions data has be… [+14242 chars]"
      },
      {
        id: 61,
        user: "Virginia Allen",
        title: "Florida House Passes Heartbeat Bill, Sends it to DeSantis’ Desk",
        desc: "Florida’s Heartbeat Protection Act is headed to Gov. Ron DeSantis’ desk for signing. On Thursday, the Florida House of Representatives passed the heartbeat bill in... Read More\nThe post Florida House Passes Heartbeat Bill, Sends it to DeSantis’ Desk appeared …",
        url: "https://www.dailysignal.com/2023/04/13/florida-passes-heartbeat-bill-sends-desantis-desk/",
        image: "https://first-heritage-foundation.s3.amazonaws.com/live_files/2023/04/Florida.jpg",
        publishedAt: "2023-04-13T22:14:30Z",
        "content": "Floridas Heartbeat Protection Act is headed to Gov. Ron DeSantis’ desk for signing.\r\nOn Thursday, the Florida House of Representatives passed the heartbeat bill in a 70-40 vote. The bill prohibits mo… [+3364 chars]"
      },
      {
        id: 62,
        user: "The Associated Press",
        title: "Florida Legislature approves banning access to abortion after 6 weeks of pregnancy",
        desc: "The Republican-dominated Florida Legislature on Thursday approved a ban on abortions after six weeks of pregnancy, a proposal supported by Florida Gov. Ron DeSantis as he prepares for an expected presidential run.",
        url: "https://www.cbc.ca/news/world/florida-legislature-abortion-ban-six-weeks-bill-1.6809909",
        image: "https://i.cbc.ca/1.6809977.1681422923!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/florida-gov-ron-desantis-speaking-in-michigan-in-april-2023.jpg",
        publishedAt: "2023-04-13T22:11:38Z",
        "content": "The Republican-dominated Florida Legislature on Thursday approved a ban on abortions after six weeks of pregnancy, a proposal supported by Florida Gov. Ron DeSantis as he prepares for an expected pre… [+3980 chars]"
      },
      {
        id: 63,
        user: null,
        title: "Florida Legislature approves banning access to abortion after 6 weeks of pregnancy - CBC News",
        desc: "Florida Legislature approves banning access to abortion after 6 weeks of pregnancy  CBC News\r\nFlorida moves to ban abortion after six weeks  BBC\r\nFlorida Governor DeSantis to sign six-week abortion ban  Al Jazeera English\r\n‘…",
        url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiV2h0dHBzOi8vd3d3LmNiYy5jYS9uZXdzL3dvcmxkL2Zsb3JpZGEtbGVnaXNsYXR1cmUtYWJvcnRpb24tYmFuLXNpeC13ZWVrcy1iaWxsLTEuNjgwOTkwOdIBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
        image: null,
        publishedAt: "2023-04-13T22:11:00Z",
        "content": "We use cookies and data toDeliver and maintain Google servicesTrack outages and protect against spam, fraud, and abuseMeasure audience engagement and site statistics to unde… [+1131 chars]"
      },
      {
        id: 64,
        user: "Adam Unikowsky",
        title: "Mifepristone and the rule of law, part II",
        desc: "The district court's decision is wrong. It must be reversed.",
        url: "https://adamunikowsky.substack.com/p/mifepristone-and-the-rule-of-law-9c4",
        image: "https://substackcdn.com/image/fetch/w_1200,h_600,c_limit,f_jpg,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe3daa0b7-8dca-406d-8375-57fcc52ad966_1024x1024.webp",
        publishedAt: "2023-04-13T22:07:39Z",
        "content": "On April 7, 2023, the U.S. District Court for the Northern District of Texas issued an order overturning the FDAs approval of mifepristone. The order will take effect within seven days unless it is s… [+49770 chars]"
      },
      {
        id: 65,
        user: "Joseph S. Pete",
        title: "Vanis Salon, an 'iconic brand' in Northwest Indiana, sold to new ownership as founder retires",
        desc: "Vanis Salon, an 'iconic brand' in Northwest Indiana, sold to new ownership as founder retiresnwitimes.com",
        url: "https://www.nwitimes.com/business/local/vanis-salon-an-iconic-brand-in-northwest-indiana-sold-to-new-ownership-as-founder-retires/article_3ceabd86-63f8-5d0b-b0bf-af2c5cd7fe7e.html",
        image: "https://bloximages.chicago2.vip.townnews.com/nwitimes.com/content/tncms/assets/v3/editorial/3/ce/3ceabd86-63f8-5d0b-b0bf-af2c5cd7fe7e/643870610e971.preview.jpg?crop=835%2C438%2C75%2C30&resize=835%2C438&order=crop%2Cresize",
        publishedAt: "2023-04-13T22:06:36Z",
        "content": "One of the biggest names in Region hair care is getting a new look.\r\nVanis Salon & Day Spa, which at one point was voted Best in the Region 25 years in a row, has been sold.\r\nChris Valavanis foun… [+5357 chars]"
      },
      {
        id: 66,
        user: null,
        title: "Florida GOP passes 6-week abortion ban; DeSantis supports it",
        desc: "The Republican-dominated Florida Legislature on Thursday approved a ban on abortions after six weeks of pregnancy, a proposal supported by GOP Gov. Ron DeSantis as he prepares for an expected presidential run.  DeSantis is expected to sign the bill into law. …",
        url: "https://japantoday.com/category/world/florida-gop-passes-6-week-abortion-ban-desantis-supports-it",
        image: null,
        publishedAt: "2023-04-13T22:02:45Z",
        "content": "The Republican-dominated Florida Legislature on Thursday approved a ban on abortions after six weeks of pregnancy, a proposal supported by GOP Gov. Ron DeSantis as he prepares for an expected preside… [+4124 chars]"
      },
      {
        id: 67,
        user: "AP",
        title: "US Abortion Landscape Shifts Yet Again Thanks To Ruling By Federal Appeals Court",
        desc: "The 5th U.S. Circuit Court of Appeals in New Orleans ruled Wednesday that the Food and Drug Administration’s initial approval of mifepristone in 2000 should remain in effect.",
        url: "https://www.huffpost.com/entry/us-abortion-landscape-federal-appeals-court_n_64387940e4b0ed74f2a1644a",
        image: "https://img.huffingtonpost.com/asset/64387a662200005700a394a0.jpeg?ops=1200_630",
        publishedAt: "2023-04-13T22:01:42Z",
        "content": "A federal appeals court has kept an abortion pill available, clarifying the U.S. abortion landscape but not settling it. The courts decision late Wednesday preserved but narrowed access to an abortio… [+5795 chars]"
      },
      {
        id: 68,
        user: "The Editorial Board",
        title: "Editorial: A Texas judge’s assault on abortion access was wrong. So was the GOP’s silence.",
        desc: "The GOP’s head-in-the-sand reaction to a Texas judge’s politically motivated attempt to take mifepristone off the market won’t be forgotten by voters, particularly suburbanites, moderate Republicans and independents.",
        url: "https://www.chicagotribune.com/opinion/editorials/ct-editorial-mifepristone-abortion-access-matthew-kacsmaryk-gop-20230413-yg4ei6unirgj5e7tman73x5z4e-story.html",
        image: "https://www.chicagotribune.com/resizer/DkVh_t5IxjW0Z8RgGWcj0HSMAzc=/1200x630/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/tronc/ZCTVY4PFDJHUVEPSSQAKK4R6PE.jpg",
        publishedAt: "2023-04-13T22:00:00Z",
        "content": ".U.S. District Judge Matthew Kacsmaryk of Texas is a household name now. Hes the judge who ignored scientific evidence in favor of partisan politics and invalidated the Food and Drug Administrations … [+5646 chars]"
      },
      {
        id: 69,
        user: "VOA Learning English",
        title: "US Court Permits Abortion Drug for Now with Restrictions",
        desc: "A federal appeals court changed a Texas judge’s ruling banning a widely used abortion drug as it considers the case. And a judge in Oregon has ordered that the same drug to be made available in 17 states.",
        url: "https://learningenglish.voanews.com/a/us-court-permits-abortion-drug-for-now-with-restrictions/7049336.html",
        image: "https://gdb.voanews.com/a5532228-92ba-4003-849d-dbb3e2123f82_w1200_r1.jpg",
        publishedAt: "2023-04-13T21:59:21Z",
        "content": "A federal appeals court ruled late Wednesday that the abortion drug mifepristone may still be used in the United States for now with some restrictions.\r\nAbortion is a process that ends a womans pregn… [+4539 chars]"
      },
      {
        id: 70,
        user: "b8two",
        title: "[SA] Pregnancy Babies & Children's Expo Adelaide Free entry",
        desc: "Received the VIP email today with free entry code to share.\n\nNormally tickets are $10/adult.",
        url: "https://www.ozbargain.com.au/node/768616",
        image: "https://files.ozbargain.com.au/n/16/768616x.jpg?h=25fed21b",
        publishedAt: "2023-04-13T21:54:19Z",
        "content": "All trademarks are owned by their respective owners.OzBargain is an independent community website which has no association with nor endorsement by the respective trademark owners.\r\nCopyright © 2006-2… [+32 chars]"
      },
      {
        id: 71,
        user: "Maeve Reston",
        title: "Tim Scott backs 20-week abortion ban, but avoids stance on medication",
        desc: "The South Carolina Republican, who has launched a presidential exploratory committee, was pressed on the issue during a trip to New Hampshire.",
        url: "https://www.washingtonpost.com/elections/2023/04/13/tim-scott-abortion-gop-2024-presidential/",
        image: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/5GC43LHJ4QR6DIFB54J65J7BEQ.jpg&w=1440",
        publishedAt: "2023-04-13T21:50:08Z",
        "content": "Comment on this story\r\nComment\r\nMANCHESTER, N.H. Sen. Tim Scott on Thursday declined to take a position on whether abortion medication should remain legal in America, telling reporters in New Hampshi… [+5666 chars]"
      },
      {
        id: 72,
        user: "Laura Ungar, Amanda Seitz, The Associated Press",
        title: "Abortion providers are scrambling to help patients and after pill restriction from courts: 'This is going to have a severe, severe impact on access'",
        desc: "One telehealth provider would have to shut down for two weeks. Some abortion clinics in Ohio are considering ditching the drug altogether.",
        url: "https://fortune.com/2023/04/13/abortion-providers-scrambling-after-court-pill-ruling-severe-impact-access/",
        image: "https://content.fortune.com/wp-content/uploads/2023/04/AP23103235296224-1-e1681420591650.jpg?resize=1200,600",
        publishedAt: "2023-04-13T21:45:31Z",
        "content": "Doctors, clinics and telehealth providers across the country are scrambling to figure out how they will continue to provide the most common type of abortion after a federal appeals court imposed new … [+5605 chars]"
      },
      {
        id: 73,
        user: "GEOFF MULVIHILL",
        title: "Latest ruling on pill shifts US abortion landscape again",
        desc: "A federal appeals court has kept an abortion pill available, clarifying the U.S. abortion landscape but not settling it. The court's decision late Wednesday preserved but narrowed access to an abortion pill across the U.S. It was a major development in a fast…",
        url: "https://www.startribune.com/latest-ruling-on-pill-shifts-us-abortion-landscape-again/600266218/",
        image: "https://chorus.stimg.co/24578242/merlin_70199709.jpg?h=630&w=1200&fit=crop&bg=999&crop=faces",
        publishedAt: "2023-04-13T21:45:03Z",
        "content": "A federal appeals court has kept an abortion pill available, clarifying the U.S. abortion landscape but not settling it. The court's decision late Wednesday preserved but narrowed access to an aborti… [+5878 chars]"
      },
      {
        id: 74,
        user: "Moshe-Mordechai van Zuiden",
        title: "A democracy with assault weapons unrestricted but abortion pills controlled?",
        desc: "There is a one-word explanation. It’s called sexism. In the US, anyone in the public (street) or private (club, church) sphere is fair game to be targeted for mass murder. Black men sit on death row for decades. But abortion is outlawed because that’s ‘murder…",
        url: "https://blogs.timesofisrael.com/a-democracy-with-assault-weapons-unrestricted-but-abortion-pills-controlled/",
        image: "https://static.timesofisrael.com/blogs/uploads/users/untitled1621433169-400x400.jpg",
        publishedAt: "2023-04-13T21:42:24Z",
        "content": "There is a one-word explanation. It’s called sexism.\r\nIn the US, anyone in the public (street) or private (club, church) sphere is fair game to be targeted for mass murder. Black men sit on death row… [+2524 chars]"
      },
      {
        id: 75,
        user: "Associated Press",
        title: "Associated Press: Florida Republicans approve 6-week abortion ban backed by DeSantis",
        desc: "DeSantis is expected to sign the bill into law. Florida currently prohibits abortions after 15 weeks.",
        url: "https://www.marketwatch.com/story/florida-republicans-approve-6-week-abortion-ban-backed-by-desantis-a64de92a",
        image: "https://images.mktw.net/im-763375/social",
        publishedAt: "2023-04-13T21:41:48Z",
        "content": "TALLAHASSEE, Fla. The Republican-dominated Florida Legislature on Thursday approved a ban on abortions after six weeks of pregnancy, a proposal supported by GOP Gov. Ron DeSantis as he prepares for a… [+4356 chars]"
      },
      {
        id: 76,
        user: "Kylie Cheung",
        title: "Republicans Can't Shut Up About How Aborted Fetuses Could Be Workers",
        desc: "Sen. Tim Scott (R-S.C.) is officially running for president and announced his support for a national abortion ban on Thursday. While endorsing the horrific idea, though, he delivered an utterly bizarre speech, concluding that abortion access is bad for the la…",
        url: "https://jezebel.com/republicans-abortion-labor-force-workers-poverty-1850334508",
        image: "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/114ee8b058173be0f6edfbb75cca7f87.png",
        publishedAt: "2023-04-13T21:41:00Z",
        "content": "Sen. Tim Scott (R-S.C.) is officially running for president and announced his support for a national abortion ban on Thursday. While endorsing the horrific idea, though, he delivered an utterly bizar… [+4198 chars]"
      },
      {
        id: 77,
        user: "Associated Press",
        title: "New Hampshire Senate rejects bill easing abortion penalties",
        desc: "The New Hampshire state Senate has rejected a bill that would ease legal penalties for late-term abortions provided illegally under a 2021 law.",
        url: "https://www.foxnews.com/politics/new-hampshire-senate-rejects-bill-easing-abortion-penalties",
        image: "https://static.foxnews.com/foxnews.com/content/uploads/2022/06/ALL_CUSTOM_FS_LOCAL_NEWS_NH_GENERAL-1.png",
        publishedAt: "2023-04-13T21:40:22Z",
        "content": "The penalties associated with New Hampshires 24-week abortion ban will remain in place after the state Senate on Thursday killed legislation that would have removed them.\r\nThe Republican-led Senate v… [+3508 chars]"
      },
      {
        id: 78,
        user: "By Michele Munz St. Louis Post-Dispatch",
        title: "Planned Parenthood says it won't follow court ruling restricting medication abortions",
        desc: "FAIRVIEW HEIGHTS — Staff at Planned Parenthood's clinic in southern Illinois say they will continue to provide medication abortions as usual, despite a federal appeals court decision late Wednesday restricting access.",
        url: "https://www.stltoday.com/lifestyles/health-med-fit/health/planned-parenthood-says-it-wont-follow-court-ruling-restricting-medication-abortions/article_82638b17-c5a0-5d38-a4db-37b32468cc24.html",
        image: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/8/26/82638b17-c5a0-5d38-a4db-37b32468cc24/643876ee7f803.preview.jpg?crop=1763%2C926%2C0%2C124&resize=1200%2C630&order=crop%2Cresize",
        publishedAt: "2023-04-13T21:38:00Z",
        "content": "FAIRVIEW HEIGHTS Staff at Planned Parenthood's clinic in southern Illinois say they will continue to provide medication abortions as usual, despite a federal appeals court decision late Wednesday res… [+6058 chars]"
      },
      {
        id: 79,
        user: "By Michele Munz St. Louis Post-Dispatch",
        title: "Planned Parenthood says it will not follow appeals court ruling restricting medication abortions",
        desc: "FAIRVIEW HEIGHTS — Staff at Planned Parenthood's clinic in southern Illinois say they will continue to provide medication abortions as usual, despite a federal appeals court decision late Wednesday restricting access.",
        url: "https://www.stltoday.com/lifestyles/health-med-fit/health/planned-parenthood-says-it-will-not-follow-appeals-court-ruling-restricting-medication-abortions/article_82638b17-c5a0-5d38-a4db-37b32468cc24.html",
        image: "https://bloximages.newyork1.vip.townnews.com/stltoday.com/content/tncms/assets/v3/editorial/8/26/82638b17-c5a0-5d38-a4db-37b32468cc24/643876ee7f803.preview.jpg?crop=1763%2C926%2C0%2C124&resize=1200%2C630&order=crop%2Cresize",
        publishedAt: "2023-04-13T21:38:00Z",
        "content": "FAIRVIEW HEIGHTS Staff at Planned Parenthood's clinic in southern Illinois say they will continue to provide medication abortions as usual, despite a federal appeals court decision late Wednesday res… [+5971 chars]"
      },
      {
        id: 80,
        user: "Newswire Editor",
        title: "NARAL Pro-Choice America Condemns Passage of Florida’s Extreme New Abortion Ban Through State Legislature",
        desc: "Today, the Florida State Legislature passed an extreme ban on abortion at six weeks of pregnancy, which is before many people even know they are pregnant (SB 300). The bill now goes to Governor Ron DeSantis, who has indicated that he intends to sign it into l…",
        url: "https://www.commondreams.org/newswire/naral-pro-choice-america-condemns-passage-of-floridas-extreme-new-abortion-ban-through-state-legislature",
        image: "https://www.commondreams.org/media-library/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8zMjEwMDM4OS9vcmlnaW4ucG5nIiwiZXhwaXJlc19hdCI6MTY4NjA3NjI1N30.IavVVsgHMaCA7BN7UN6gaGViLQu0_9g2xavOmf-Pz_A/image.png?width=210",
        publishedAt: "2023-04-13T21:37:58Z",
        "content": "\"They faced off with a large contingent of police deployed outside the building, where hours before the march got underway, other protesters had dumped bags of rubbish,\" Al Jazeerareported. \"The rubb… [+4443 chars]"
      },
      {
        id: 81,
        user: "Anna Betts",
        title: "Abortion Access Could Be Blocked In Much Of The South After Florida Lawmakers Passed A Six-Week Ban",
        desc: "Gov. Ron DeSantis is expected to sign the bill into law, though whether it goes into effect will depend on how the state Supreme Court rules on a challenge to the existing 15-week ban.View Entire Post ›",
        url: "https://www.buzzfeednews.com/article/annabetts/florida-house-passes-six-week-abortion-ban",
        image: "https://img.buzzfeed.com/buzzfeed-static/static/2023-04/13/21/campaign_images/e5e23c609037/florida-lawmakers-have-passed-a-six-week-abortion-3-2735-1681421553-2_dblbig.jpg",
        publishedAt: "2023-04-13T21:36:27Z",
        "content": "In recent weeks, court battles over mifepristone,\r\n one of the two drugs used in medication abortions, which is often referred to as the abortion pill, have taken center stage. On Wednesday,\r\n a fede… [+3805 chars]"
      },
      {
        id: 82,
        user: "Associated Press",
        title: "Republican lawmakers approve six-week abortion ban in Florida",
        desc: "Bill, which has some exceptions, is expected to be signed into law by Governor Ron DeSantisThe Republican-dominated Florida legislature on Thursday approved a ban on abortions after six weeks of pregnancy, a proposal supported by the state’s governor, Ron DeS…",
        url: "https://www.theguardian.com/world/2023/apr/13/florida-six-week-abortion-ban-republicans",
        image: "https://i.guim.co.uk/img/media/7141ec51569f02d824e8f2c8007f992e447e8b02/0_57_3258_1955/master/3258.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=924c47479d1a9853ba164f74e034172c",
        publishedAt: "2023-04-13T21:36:07Z",
        "content": "The Republican-dominated Florida legislature on Thursday approved a ban on abortions after six weeks of pregnancy, a proposal supported by the states governor, Ron DeSantis, as he prepares for an exp… [+3010 chars]"
      },
      {
        id: 83,
        user: "Newswire Editor",
        title: "Florida Passes Ban on Abortion After Six Weeks of Pregnancy",
        desc: "Today, the Florida legislature passed a ban on abortion after about six weeks of pregnancy, which is before many people know they are pregnant. The ban will now be sent to Governor Ron DeSantis, who is expected to sign the bill. Florida already has a ban on a…",
        url: "https://www.commondreams.org/newswire/florida-passes-ban-on-abortion-after-six-weeks-of-pregnancy",
        image: "https://www.commondreams.org/media-library/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8zMjEwMDM4OS9vcmlnaW4ucG5nIiwiZXhwaXJlc19hdCI6MTY4NjA3NjI1N30.IavVVsgHMaCA7BN7UN6gaGViLQu0_9g2xavOmf-Pz_A/image.png?width=210",
        publishedAt: "2023-04-13T21:36:03Z",
        "content": "\"They faced off with a large contingent of police deployed outside the building, where hours before the march got underway, other protesters had dumped bags of rubbish,\" Al Jazeerareported. \"The rubb… [+4443 chars]"
      },
      {
        id: 84,
        user: "LAURA UNGAR and AMANDA SEITZ Associated Press",
        title: "Abortion providers scramble as courts restrict pills",
        desc: "Doctors, clinics and telehealth providers across the country scrambled this week to figure out how they will continue to provide the most common type of abortion after a federal appeals court imposed new restrictions on a key abortion medication.",
        url: "https://billingsgazette.com/news/national/abortion-providers-scramble-as-courts-restrict-pills/article_14751c2f-f3b4-5c9a-b6ab-e94b57c1b385.html",
        image: "https://bloximages.chicago2.vip.townnews.com/billingsgazette.com/content/tncms/assets/v3/editorial/2/94/2945f7b7-9a1a-5afb-868d-29e8855de36b/6437e33fe6a8a.image.jpg?crop=1920%2C1008%2C0%2C35&resize=1200%2C630&order=crop%2Cresize",
        publishedAt: "2023-04-13T21:36:00Z",
        "content": "LAURA UNGAR and AMANDA SEITZ \r\nAssociated Press\r\nDoctors, clinics and telehealth providers across the country scrambled this week to figure out how they will continue to provide the most common type … [+21435 chars]"
      },
      {
        id: 85,
        user: "Jeffrey Schweers and Caroline Catherman, Orlando Sentinel",
        title: "Florida lawmakers OK 6-week abortion ban backed by Gov. DeSantis",
        desc: "TALLAHASSEE, Fla. — Rejecting Democratic efforts to change it, the Republican-controlled Legislature gave final approval Thursday to a near-total ban on...",
        url: "https://www.orlandosentinel.com/politics/os-ne-abortion-six-weeks-florida-final-passage-20230413-ejf5yfwkpjeq3pgzmms2hmvg4a-story.html",
        image: "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo-1200x1200.png",
        publishedAt: "2023-04-13T21:36:00Z",
        "content": "TALLAHASSEE, Fla. Rejecting Democratic efforts to change it, the Republican-controlled Legislature gave final approval Thursday to a near-total ban on abortion after six weeks, sending the bill to Go… [+7273 chars]"
      },
      {
        id: 86,
        user: "LAURA UNGAR and AMANDA SEITZ Associated Press",
        title: "Abortion providers scramble as courts restrict pills",
        desc: "Doctors, clinics and telehealth providers across the country scrambled this week to figure out how they will continue to provide the most common type of abortion after a federal appeals court imposed new restrictions on a key abortion medication.",
        url: "https://richmond.com/news/national/abortion-providers-scramble-as-courts-restrict-pills/article_d605c294-c9f2-5047-a6c9-d60457571a71.html",
        image: "https://bloximages.newyork1.vip.townnews.com/richmond.com/content/tncms/assets/v3/editorial/9/b2/9b29a4a7-2cc7-5fa0-b30c-b37aa4b7ee1d/6437e340cede9.image.jpg?crop=1920%2C1008%2C0%2C35&resize=1200%2C630&order=crop%2Cresize",
        publishedAt: "2023-04-13T21:36:00Z",
        "content": "LAURA UNGAR and AMANDA SEITZ \r\nAssociated Press\r\nDoctors, clinics and telehealth providers across the country scrambled this week to figure out how they will continue to provide the most common type … [+21394 chars]"
      },
      {
        id: 87,
        user: "LAURA UNGAR and AMANDA SEITZ Associated Press",
        title: "Abortion providers scramble as courts restrict pills",
        desc: "Doctors, clinics and telehealth providers across the country scrambled this week to figure out how they will continue to provide the most common type of abortion after a federal appeals court imposed new restrictions on a key abortion medication.",
        url: "https://roanoke.com/news/national/abortion-providers-scramble-as-courts-restrict-pills/article_9380cdba-630a-5151-a799-615f664d04af.html",
        image: "https://bloximages.newyork1.vip.townnews.com/roanoke.com/content/tncms/assets/v3/editorial/2/c3/2c3b17e4-c45c-574f-9218-f402a1e3b736/6437e340e2fe9.image.jpg?crop=1920%2C1008%2C0%2C35&resize=1200%2C630&order=crop%2Cresize",
        publishedAt: "2023-04-13T21:36:00Z",
        "content": "LAURA UNGAR and AMANDA SEITZ \r\nAssociated Press\r\nDoctors, clinics and telehealth providers across the country scrambled this week to figure out how they will continue to provide the most common type … [+21435 chars]"
      },
      {
        id: 88,
        user: "HOLLY RAMER",
        title: "New Hampshire Senate rejects lifting abortion penalties",
        desc: "The Republican-led New Hampshire Senate also rejected adding an explicit right to abortion up to 24 weeks to state law. Both bills had passed the House.",
        url: "https://www.bostonglobe.com/2023/04/13/metro/new-hampshire-senate-rejects-lifting-abortion-penalties/",
        image: "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/-gcweh7y8GOUhNJ-8LHcZNxvhAs=/506x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/2U7QEAOJMPPNAN3LKZARZ553JI.jpg",
        publishedAt: "2023-04-13T21:33:47Z",
        "content": "CONCORD, N.H. The penalties associated with New Hampshires 24-week abortion ban will remain in place after the state Senate on Thursday killed legislation that would have removed them.\r\nThe Republica… [+3329 chars]"
      },
      {
        id: 89,
        user: "Valerie Richardson, Alex Swoyer and Alex Swoyer, Valerie Richardson",
        title: "Abortion issue returns to Supreme Court as DOJ fights ruling on FDA's pill approval",
        desc: "The Biden administration will ask the Supreme Court to lift newly imposed court restrictions on a popular abortion pill, sending the pregnancy-termination issue back to the high court less than a year after its historic decision overturning Roe v. Wade was su…",
        url: "https://www.washingtontimes.com/news/2023/apr/13/abortion-issue-returns-supreme-court-doj-fights-ru/",
        image: "https://twt-thumbs.washtimes.com/media/image/2023/04/03/Supreme_Court_Death_Penalty_Louisiana_10755_c0-250-6000-3750_s1200x700.jpg?2cb823f519263a3e55a419724463fd44fb7f7c61",
        publishedAt: "2023-04-13T21:33:12Z",
        "content": "The Biden administration will ask the Supreme Court to lift newly imposed court restrictions on a popular abortion pill, sending the pregnancy-termination issue back to the high court less than a yea… [+7367 chars]"
      },
      {
        id: 90,
        user: "ANTHONY IZAGUIRRE Associated Press",
        title: "Florida GOP passes 6-week abortion ban; DeSantis supports it",
        desc: "The Republican-dominated Florida Legislature has approved a bill to ban abortions after six weeks of pregnancy",
        url: "https://abcnews.go.com/US/wireStory/florida-gop-passes-6-week-abortion-ban-desantis-98568965",
        image: "https://s.abcnews.com/images/US/wirestory_c9c53311a0b2426adc4b8d0b463edad1_16x9_992.jpg",
        publishedAt: "2023-04-13T21:32:42Z",
        "content": "TALLAHASSEE, Fla. -- The Republican-dominated Florida Legislature on Thursday approved a ban on abortions after six weeks of pregnancy, a proposal supported by GOP Gov. Ron DeSantis as he prepares fo… [+4394 chars]"
      },
      {
        id: 91,
        user: "Basil John",
        title: "Biden admin. vows to continue to fight for use of abortion drug",
        desc: "The Biden administration says it will ask the Supreme Court for emergency relief after a federal appeals court upheld several restrictions on the use of the abortion drug mifepristone.",
        url: "https://wgntv.com/news/washington-dc-bureau/biden-admin-vows-to-continue-to-fight-for-use-of-abortion-drug/",
        image: "https://wgntv.com/wp-content/uploads/sites/5/2023/04/The-Supreme-Court.jpg?w=1280",
        publishedAt: "2023-04-13T21:31:30Z",
        "content": "WASHINGTON (NEXSTAR) — The legal battle over whether an abortion pill should be banned in the U.S. continues.\r\n“We believe that the law is on our side and that we will prevail,” said White House Pres… [+1544 chars]"
      },
      {
        id: 92,
        user: "Kelly Glass, Data Work By Emma Rubin, Data Work By Paris Close",
        title: "These states have the highest maternal mortality rates. For Black mothers, outcomes are even worse",
        desc: "People in the U.S. die during pregnancy or relatedly within one year after pregnancy at a rate more than three times higher than people in similar countries.",
        url: "https://stacker.com/health/these-states-have-highest-maternal-mortality-rates-black-mothers-outcomes-are-even-worse",
        image: "https://bloximages.newyork1.vip.townnews.com/roanoke.com/content/tncms/assets/v3/editorial/b/73/b73fb075-5ca6-5e04-9d45-39979029ff33/6437e7c717e50.preview.jpg?crop=1080%2C567%2C0%2C101&resize=1080%2C567&order=crop%2Cresize",
        publishedAt: "2023-04-13T21:30:00Z",
        "content": "Charles Johnson said his wife, Kira, was in \"exceptional health\" when she died from childbirth in 2016. Kira Johnson had a C-section at Cedars-Sinai Medical Center in Los Angeles. Charles noticed blo… [+1886 chars]"
      },
      {
        id: 93,
        user: "Kendall Tietz",
        title: "Florida legislature passes six-week 'heartbeat bill' to limit abortion",
        desc: "Pro-life leaders applauded the passage of Florida's Heartbeat Protection Act that will prohibit abortion at six weeks and allocates $25 million in funds for pregnancy centers.",
        url: "https://www.foxnews.com/media/florida-legislature-passes-six-week-heartbeat-bill-limit-abortion",
        image: "https://static.foxnews.com/foxnews.com/content/uploads/2023/02/Florida-1.jpg",
        publishedAt: "2023-04-13T21:27:18Z",
        "content": "The Florida legislature passed the Heartbeat Protection Act Thursday that will limit abortion in the state after a heartbeat is detected. \r\nSB 300 will establish protections for unborn babies with a … [+5768 chars]"
      },
      {
        id: 94,
        user: "pbs.org",
        title: "Florida GOP passes 6-week abortion ban, Gov. DeSantis expected to sign",
        desc: "The Republican-dominated Florida Legislature on Thursday approved a ban on abortions after six weeks of pregnancy, a proposal supported by GOP Gov. Ron DeSantis as he prepares for an expected presidential run. DeSantis is expected to sign the bill into law. F…",
        url: "https://biztoc.com/x/3d8ed52d122191dc",
        image: "https://c.biztoc.com/p/3d8ed52d122191dc/og.webp",
        publishedAt: "2023-04-13T21:26:03Z",
        "content": "The Republican-dominated Florida Legislature on Thursday approved a ban on abortions after six weeks of pregnancy, a proposal supported by GOP Gov. Ron DeSantis as he prepares for an expected preside… [+314 chars]"
      },
      {
        id: 95,
        user: "ANTHONY IZAGUIRRE/AP",
        title: "Florida Legislature Passes 6-Week Abortion Ban",
        desc: "Republican Gov. Ron DeSantis is expected to sign the bill into law.",
        url: "https://time.com/6271843/florida-6-week-abortion-ban/",
        image: "https://api.time.com/wp-content/uploads/2023/04/abortion-florida-ban.jpg?quality=85&w=1200&h=628&crop=1",
        publishedAt: "2023-04-13T21:24:51Z",
        "content": "TALLAHASSEE, Fla. — The Republican-dominated Florida Legislature on Thursday approved a ban on abortions after six weeks of pregnancy, a proposal supported by GOP Gov. Ron DeSantis as he prepares for… [+4110 chars]"
      },
      {
        id: 96,
        user: "Associated Press",
        title: "Nebraska lawmakers resume debate on youth trans procedure ban",
        desc: "Nebraska's state Senate has taken up a second round of debate on a bill banning transgender therapies and procedures for minors, despite staunch opposition from its leftist members.",
        url: "https://www.foxnews.com/politics/nebraska-lawmakers-resume-debate-youth-trans-procedure-ban",
        image: "https://static.foxnews.com/foxnews.com/content/uploads/2023/04/kathleen_kauth.jpg",
        publishedAt: "2023-04-13T21:20:23Z",
        "content": "Nebraska lawmakers took up a second round of debate Thursday on a bill that would ban gender-affirming care for minors that has proved to be so contentious, it's led opponents to filibuster every bil… [+5705 chars]"
      },
      {
        id: 97,
        user: "Reuters",
        title: "Florida lawmakers approve 6-week abortion ban, sending to Governor Desantis for signature",
        desc: "By Gabriella Borter (Reuters) -   Florida's Republican-led House of Representatives on Thursday gave final approval to a six-week abortion ban, setting the stage for abortion access to be drastically curtailed in the state and across the U.S. South.",
        url: "https://www.fxempire.com/news/article/florida-lawmakers-approve-6-week-abortion-ban-sending-to-governor-desantis-for-signature-1336945",
        image: "https://responsive.fxempire.com/width/600/webp-lossy-70.q50/_fxempire_/2023/04/tagreuters.com2023newsml_LYNXMPEJ3C0UO2.jpg",
        publishedAt: "2023-04-13T21:16:14Z",
        "content": "Lawmakers in the Florida House on Thursday approved the six-week ban with a vote of 70-40. The bill passed the state Senate by a vote of 26-13 on April 3. \r\nThe legislation, which makes exceptions fo… [+1415 chars]"
      },
      {
        id: 98,
        user: "Matt Dixon and Megan Lebowitz",
        title: "Florida’s Legislature passes a 6-week abortion ban",
        desc: "Florida’s Republican-dominated Legislature on Thursday passed a ban on most abortions after six weeks, sending the bill to Gov.",
        url: "https://www.today.com/health/womens-health/floridas-legislature-passes-6-week-abortion-ban-rcna79637",
        image: "https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1200x630_center,f_auto,q_auto:best/rockcms/2023-04/230410-florida-abortion-protest-miami-se-313p-405b2d.jpg",
        publishedAt: "2023-04-13T21:14:33Z",
        "content": "Floridas Republican-dominated Legislature on Thursday passed a ban on most abortions after six weeks, sending the bill to Gov. Ron DeSantis. He has said he would sign the measure into law.\r\nFinal pas… [+6314 chars]"
      },
      {
        id: 99,
        user: "Anthony Izaguirre, Associated Press",
        title: "Florida GOP passes 6-week abortion ban, Gov. DeSantis expected to sign",
        desc: "The Republican-dominated Florida Legislature on Thursday approved a ban on abortions after six weeks of pregnancy, a proposal supported by GOP Gov. Ron DeSantis as he prepares for an expected presidential run.",
        url: "https://www.pbs.org/newshour/politics/florida-gop-passes-6-week-abortion-ban-gov-desantis-expected-to-sign",
        image: "https://d3i6fh83elv35t.cloudfront.net/static/2022/04/GettyImages-164034544-1024x683.jpg",
        publishedAt: "2023-04-13T21:13:50Z",
        "content": "TALLAHASSEE, Fla. (AP) The Republican-dominated Florida Legislature on Thursday approved a ban on abortions after six weeks of pregnancy, a proposal supported by GOP Gov. Ron DeSantis as he prepares … [+4023 chars]"
      },
      {
        id: 100,
        user: "Aaron Navarro",
        title: "Florida legislature passes six-week abortion ban",
        desc: "The bill, which now heads to Gov. Ron DeSantis' desk, comes as he is poised to launch a 2024 presidential run after the legislative session ends in May.",
        url: "https://www.cbsnews.com/news/florida-six-week-abortion-ban-ron-desantis/",
        image: "https://assets3.cbsnewsstatic.com/hub/i/r/2023/04/13/4934ad9f-1d47-4a89-8360-1fb4b752eb7a/thumbnail/1200x630/51b89f914ec3d4c6bea3b96cfd5f2b41/ap23039607550137.jpg",
        publishedAt: "2023-04-13T21:11:17Z",
        "content": "A six-week ban on abortion is headed to Florida Gov. Ron DeSantis' desk after the state House, which has a Republican supermajority, passed the bill, 70 to 40 on Thursday.\r\nSenate Bill 300, titled th… [+6649 chars]"
      }, 
]
  return (
    <Router>
    <div className='main'>
      <Header/>
    </div>
    </Router>
  )
}
