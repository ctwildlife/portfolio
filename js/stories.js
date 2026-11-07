// Add or edit stories here. The page builds itself from this list.
// image: file in /images   link: live URL, or a PDF in /clips
// outlet/date: fill in where blank (shown under the headline when present)
const STORIES = [
  // Agriculture
  { beat: "Agriculture", title: "Idaho dairymen struggle to stay afloat after years of persistently low milk prices",
    image: "thumbnails/too-much-milk.jpg", link: "clips/too-much-milk.pdf", outlet: "", date: "" },
  { beat: "Agriculture", title: "Record-breaking drought has Eastern Washington farmers worried",
    image: "thumbnails/drought-wheat.webp", link: "https://www.spokesman.com/stories/2021/may/26/drought-has-these-eastern-washington-farmers-worri/", outlet: "The Spokesman-Review", date: "May 2021" },
  { beat: "Agriculture", title: "Farmers forced to dump milk as COVID-19 pandemic shutters restaurants",
    image: "thumbnails/down-the-drain.jpg", link: "clips/down-the-drain.pdf", outlet: "", date: "" },

  // Environment
  { beat: "Environment", title: "‘The hired gun of the livestock industry’: Federal gov’t kills over 100,000 animals in WA annually",
    image: "thumbnails/coyote.webp", link: "https://www.spokesman.com/stories/2023/mar/12/the-hired-gun-of-the-livestock-industry-this-feder/", outlet: "The Spokesman-Review", date: "March 2023" },
  { beat: "Environment", title: "Where do the antelope play? Idaho Fish and Game tracking pronghorn migration patterns",
    image: "thumbnails/pronghorn.jpg", link: "clips/where-do-the-antelope-play.pdf", outlet: "", date: "" },
  { beat: "Environment", title: "Electric scooters keep ending up in the river, and gov’t agencies are doing little to stop it",
    image: "thumbnails/lime.jpg", link: "clips/scooters.pdf", outlet: "", date: "" },

  // Government
  { beat: "Government", title: "Spokane County stands to lose thousands over stalled criminal justice reform program",
    image: "thumbnails/courthouse.webp", link: "https://www.spokesman.com/stories/2022/feb/09/spokane-county-stands-to-lose-thousands-in-macarth/", outlet: "The Spokesman-Review", date: "February 2022" },
  { beat: "Government", title: "‘People have gotten sucked into a lot of lies’: Experts say elections are secure despite GOP claims",
    image: "thumbnails/election_integrity.webp", link: "https://www.spokesman.com/stories/2022/aug/21/people-have-gotten-sucked-into-a-lot-of-lies-exper/", outlet: "The Spokesman-Review", date: "August 2022" },
  { beat: "Government", title: "Crashing the party: Spokane County GOP moving further to the right, Republicans say",
    image: "thumbnails/spokane-gop.webp", link: "https://www.spokesman.com/stories/2022/dec/19/crashing-the-party-spokane-county-gop-moving-to-th/", outlet: "The Spokesman-Review", date: "December 2022" },

  // Energy
  { beat: "Energy", title: "Massive oil and gas project would bring billions in revenue and major environmental impacts",
    image: "thumbnails/the-boom.jpg", link: "clips/the-boom.pdf", outlet: "", date: "" },
  { beat: "Energy", title: "CO2 capture technology could save hundreds of jobs and revive dead oil fields",
    image: "thumbnails/dave-johnston.jpg", link: "clips/carbon-capture.pdf", outlet: "", date: "" },
  { beat: "Energy", title: "Oil and gas boom leaving some homeless as housing prices skyrocket",
    image: "thumbnails/walt.webp", link: "clips/goodbye-glenrock.pdf", outlet: "", date: "" },

  // Features
  { beat: "Features", title: "Walking by faith: After going blind, Louis Grimes proselytized across America on foot",
    image: "thumbnails/walking-by-faith.webp", link: "clips/walking-by-faith.pdf", outlet: "", date: "" },
  { beat: "Features", title: "Farewell in the forecast: Weatherman Neudorff leaving the KMVT green screen",
    image: "thumbnails/weatherman.webp", link: "clips/farewell-in-the-forecast.pdf", outlet: "", date: "" },
  { beat: "Features", title: "Mothing to boast of: Moth expert expanding scientific knowledge of Northwest species",
    image: "thumbnails/carl.webp", link: "https://www.spokesman.com/stories/2023/oct/22/mothing-to-boast-of-amateur-moth-expert-expanding-/", outlet: "The Spokesman-Review", date: "October 2023" }
];