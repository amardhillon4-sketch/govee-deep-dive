export const observedOn = "8 October 2026";

export const sources = {
  store: "https://us.govee.com/",
  outdoor: "https://us.govee.com/collections/outdoor-lights",
  news: "https://us.govee.com/blogs/news",
  meta: "https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=ALL&is_targeted_country=false&media_type=all&search_type=page&sort_data[direction]=desc&sort_data[mode]=total_impressions&start_date[min]=2026-08-01&view_all_page_id=110849893092563",
  adspy:
    "https://app.adspy.com/ads;seenBetween=%EF%BC%BB%2201-Jul-2026%22%EF%BC%8C%2230-Sep-2026%22%EF%BC%BD;orderBy=total_likes;searches=%EF%BC%BB%EF%BD%9B%22type%22%CB%B8%22advertisers%22%EF%BC%8C%22value%22%CB%B8%22Govee%22%EF%BC%8C%22current%22%CB%B8true%EF%BD%9D%EF%BC%BD;selectedValue=advertisers",
  archive: "https://admakeai.com/advertisers/govee",
  halloween:
    "https://www.prnewswire.com/news-releases/govee-turns-up-the-spooky-with-sarah-michelle-gellar-in-new-nationwide-halloween-campaign-302892255.html",
  dog: "https://campaignbriefasia.com/2026/05/25/a-talking-dog-ai-and-everyday-chaos-behind-govees-new-campaign-via-vantage-pictures/",
} as const;

export const nav = [
  { href: "#argument", label: "Argument" },
  { href: "#store", label: "Store" },
  { href: "#system", label: "System" },
  { href: "#year", label: "2026" },
  { href: "#paid", label: "Paid social" },
  { href: "#patterns", label: "Patterns" },
] as const;

export const stats = [
  {
    value: "~1,000",
    label: "Ads in this view",
    detail: "Active, impressions on or after 1 Aug 2026",
  },
  {
    value: "9 Jun 2025",
    label: "Second card’s start",
    detail: "Floor-lamp video still at the top of the library URL",
  },
  {
    value: "No. 1",
    label: "US permanent outdoor",
    detail: "Euromonitor sales value, 2025, research June 2026",
  },
  {
    value: "Oct 8–11",
    label: "Prime encore",
    detail: "Homepage window, PDT, paired with Halloween",
  },
] as const;

export const mix = [
  { name: "Image", count: 976, share: 47 },
  { name: "Video", count: 725, share: 35 },
  { name: "Carousel", count: 254, share: 12 },
  { name: "Dynamic", count: 120, share: 6 },
] as const;

export const platforms = [
  { name: "Facebook", count: 1976 },
  { name: "Instagram", count: 1953 },
  { name: "Audience Network", count: 1658 },
  { name: "Messenger", count: 1597 },
] as const;

export type PriceSet = "encore" | "prime";

export const prices: Record<
  PriceSet,
  { caption: string; rows: { product: string; now: string; was: string; note: string }[] }
> = {
  encore: {
    caption:
      "Live prices on the US outdoor collection during the 8–11 October Prime Big Deal Days encore.",
    rows: [
      {
        product: "Permanent Outdoor Lights Pro",
        now: "$459.99",
        was: "$759.99",
        note: "$300 off. Homepage also tiles this line from $149.99 / $199.99 and $159.99 / $229.99 without a length on the card.",
      },
      {
        product: "Permanent Outdoor Lights 2",
        now: "$189.99",
        was: "$279.99",
        note: "$90 off. VHB glue and clips.",
      },
      {
        product: "Outdoor String Lights 2",
        now: "$119.99",
        was: "$189.99",
        note: "$70 off. 47 scene modes.",
      },
      {
        product: "Outdoor UpDown Wall Light",
        now: "$159.99",
        was: "$229.99",
        note: "Matches the homepage “lowest price” tile.",
      },
      {
        product: "Permanent Outdoor Lights Prism",
        now: "$654.99",
        was: "$859.99",
        note: "$205 off. Triple-color, IP68.",
      },
      {
        product: "Outdoor Light Show Box",
        now: "$24.99",
        was: "$39.99",
        note: "The cheap add-on under the hero kits.",
      },
    ],
  },
  prime: {
    caption:
      "Prices in the 16 June release for the 23–26 June Prime Day event. Not the October encore.",
    rows: [
      {
        product: "Permanent Outdoor Lights Pro, 100 ft",
        now: "$279.99",
        was: "$439.99",
        note: "36% off",
      },
      {
        product: "Permanent Outdoor Lights Pro, 150 ft",
        now: "$389.99",
        was: "$599.99",
        note: "35% off",
      },
      {
        product: "Permanent Outdoor Lights Pro, 200 ft",
        now: "$459.99",
        was: "$759.99",
        note: "39% off. Same strike pair as the October collection card.",
      },
      {
        product: "Uplighter Floor Lamp",
        now: "$125.99",
        was: "$179.99",
        note: "30% off. Still a paid-social workhorse in October.",
      },
      {
        product: "TV Backlight 3 Lite, 55–65 in",
        now: "$58.99",
        was: "$89.99",
        note: "Called the best-selling TV backlight in that release.",
      },
      {
        product: "Envisual TV Backlight T2, 55–65 in",
        now: "$64.99",
        was: "$139.99",
        note: "Deepest cut in the release, 53% off.",
      },
    ],
  },
};

export const system = [
  {
    name: "Life is Colorful",
    body: "The line they repeat in every release. Color is the brand, white light is the permission to live with it after the party.",
  },
  {
    name: "DreamView",
    body: "Many fixtures, one scene. The Halloween release uses it to sync the house to music. The TV backlight release caps a room at 10 devices.",
  },
  {
    name: "AI Lighting Bot 2.0",
    body: "Text, voice, and image in, a scene out. Prompts in the Halloween release: “moonlit and mysterious,” “classic and dramatic,” “playful and family friendly.”",
  },
  {
    name: "LuminBlend+",
    body: "The accuracy claim on Floor Lamp 3 and the Lantern: pastels without banding, even at 1% brightness, plus a 1,000K–10,000K white range.",
  },
  {
    name: "DaySync",
    body: "Color temperature follows the day so the lamp can be a lamp. This is how they leave the RGB-toy aisle.",
  },
  {
    name: "Matter, then the ecosystems",
    body: "Matter is the table stakes line. Alexa, Google Home, Apple HomeKit, and Samsung SmartThings get named when the product is entertainment or a flagship lamp.",
  },
] as const;

export const year = [
  {
    date: "7 May",
    title: "Floor Lamp 3 and Lantern",
    body: "Flagship accuracy story. Floor Lamp 3 at $169.99, Lantern and Floor Lamp 3 Lite at $129.99. The lamp ladder runs $99.99 to $199.99.",
  },
  {
    date: "18 May",
    title: "TV Backlight 3",
    body: "4MP dual camera, hybrid glass-plastic lens, up to 24 zones. $109.99 for 55–65 inch, $139.99 for 75–85 inch.",
  },
  {
    date: "25 May",
    title: "The dog film",
    body: "Vantage Pictures, Paul Moore. A home is never one mood. Lights behave like another character. AI is used as timing VFX, not as the picture.",
  },
  {
    date: "10 Jun",
    title: "Tim Howard",
    body: "Watch-party lighting for the summer tournament, plus a TikTok stream battle from 12 June. Focaldata: 68% of US adults prefer a private home for the matches.",
  },
  {
    date: "22 Jun",
    title: "House of the Dragon",
    body: "Official smart-lighting partner. Scenes named Dracarys, Fire & Blood, and Green Reign, played on the TV Backlight ladder.",
  },
  {
    date: "26 Jun",
    title: "Moana",
    body: "Three app effects before the 10 July film: Wayfinding, Motunui, Heart of Island. Bundle offer on the release page: pick 2, save 10% or more, 1–26 July.",
  },
  {
    date: "4 Sep",
    title: "Designers, not gadgets",
    body: "The homepage dates the interior story to 4 September. Gemma Mahabeer-Goldsmith and Melanie Lissack use Floor Lamp 3 and the Lantern as materials in a room. Jerry Lin’s line: light should belong to the space.",
  },
  {
    date: "7 Sep",
    title: "IFA, then a new outdoor flagship",
    body: "The homepage dates the IFA AI-lighting story to 7 September. Permanent Outdoor Lights 2 Pro, dual-layer illumination, is dated 7 September in the news index and also sits beside the 3 October Halloween story on the homepage.",
  },
  {
    date: "3 Oct",
    title: "Sarah Michelle Gellar",
    body: "“Turn Up the Spooky. Slay Halloween.” Roofline first, then string, wall, and path. Her tip: light one feature and leave the rest dark.",
  },
] as const;

export type Market = "all" | "US" | "EU" | "CA" | "UK";

export type RankedAd = {
  rank: number;
  libraryId: string;
  market: Exclude<Market, "all"> | "Page";
  started: string;
  title: string;
  copy: string;
  landing: string;
  cta: string;
  note: string;
};

export const rankedAds: RankedAd[] = [
  {
    rank: 1,
    libraryId: "1465609628245692",
    market: "EU",
    started: "27 Feb 2026",
    title: "Life is Colorful",
    copy: "Govee transforms routines into memories. Because every day deserves to shine. Because Life is Colorful.",
    landing: "eu-store.govee.com",
    cta: "Shop Now",
    note: "Multiple versions. The first version on the card was RGBIC LED strip lights with a protective coating. Another version of the same library ID is a Wi-Fi thermo-hygrometer.",
  },
  {
    rank: 2,
    libraryId: "2123742558131197",
    market: "US",
    started: "9 Jun 2025",
    title: "Transform your space",
    copy: "Transform your space. Brighten up any room with the Govee LED Smart Floor Lamp. Say goodbye to dullness and hello to ambiance.",
    landing: "us.govee.com · Govee LED Smart Floor Lamp",
    cta: "Shop now",
    note: "Nine-second video. Description line: High quality and fast delivery. This card has been in market for sixteen months.",
  },
  {
    rank: 3,
    libraryId: "842227435166792",
    market: "US",
    started: "28 May 2026",
    title: "Find the best deals",
    copy: "Find the best deals at Govee. Make every part of your home feel special.",
    landing: "us.govee.com · RGBIC Basic Wi-Fi + Bluetooth LED strip lights",
    cta: "Shop Now",
    note: "Multiple versions. The body copy under the headline is a category list: strips, outdoor, floor lamps, TV backlight, appliances.",
  },
  {
    rank: 4,
    libraryId: "2110190359732758",
    market: "CA",
    started: "27 Feb 2026",
    title: "Unlock savings now",
    copy: "Unlock savings now. Explore Govee’s innovative products. Buy today, enjoy instant discounts. Elevate your lifestyle.",
    landing: "ca.govee.com · Bluetooth hygrometer thermometer",
    cta: "Shop Now",
    note: "Multiple versions. A sensor, not a light, is sitting in the top of a lighting brand’s paid list.",
  },
  {
    rank: 5,
    libraryId: "3060201187502922",
    market: "EU",
    started: "9 Jul 2026",
    title: "Life is Colorful, again",
    copy: "Same brand stanza as the first card: routines into memories, every day deserves to shine, Life is Colorful.",
    landing: "eu.govee.com · RGBICWW Flow Plus light bars",
    cta: "Shop Now",
    note: "Multiple versions. Recommended for displays under 45 inches. The line is the brand. The product is a pair of bars.",
  },
  {
    rank: 6,
    libraryId: "2074053646834046",
    market: "EU",
    started: "20 Aug 2026",
    title: "Best deals, EU store",
    copy: "Find the best deals at Govee. Make every part of your home feel special.",
    landing: "eu-store.govee.com · Flow Plus light bars",
    cta: "Shop Now",
    note: "Multiple versions. Same offer sentence as the US strip card, pointed at a different product and store.",
  },
  {
    rank: 7,
    libraryId: "668769672222138",
    market: "US",
    started: "25 Aug 2025",
    title: "Pathway lights",
    copy: "Upper and lower lighting, four-section independent control, for safety and ambiance. App or voice. The card calls out Christmas and Halloween in the description.",
    landing: "us.govee.com · Outdoor Pathway Lights",
    cta: "Shop now",
    note: "Headline on the card: Free shipping and high quality. Running more than a year.",
  },
  {
    rank: 8,
    libraryId: "1623097475591458",
    market: "UK",
    started: "16 Mar 2026",
    title: "Pay with Klarna",
    copy: "Upgrade your home lighting with Govee. Shop now, pay with Klarna.",
    landing: "uk.govee.com · Glide Hexa light panels",
    cta: "Shop Now",
    note: "Multiple versions. The only top card that leads with a financing brand.",
  },
  {
    rank: 9,
    libraryId: "1451410906858789",
    market: "Page",
    started: "3 Oct 2026",
    title: "Slay Halloween",
    copy: "She’s slayed vampires. Now she’s slaying Halloween decor.",
    landing: "Govee Outdoor Lights",
    cta: "Learn More",
    note: "Thirty-second video. Headline: Slay Halloween. Two ads use this creative and text. This is the first Sarah Michelle Gellar card in the list, five days old on the day it was read.",
  },
];

export const patterns = [
  {
    title: "One architectural feature",
    body: "Gellar’s quoted direction matches the product system. Permanent lights draw the roofline. String, wall, and path lights fill the rest. The ad should show one lit edge and a dark yard, not a house on fire with color.",
  },
  {
    title: "White light is the closer",
    body: "Every entertainment story ends the same way: after the match, the film, or the party, the lights go back to white. That sentence is what makes a $460 roofline kit feel like a fixture instead of a costume.",
  },
  {
    title: "The film is ninth, not first",
    body: "Sarah Michelle Gellar’s line is on the library page, started 3 October, and it is the ninth card. Ahead of it: the brand sentence, a sixteen-month-old floor lamp, deal copy, a Canadian hygrometer, light bars, pathway lights, and Klarna in the UK.",
  },
  {
    title: "Proof is operational",
    body: "The store leads with a 30-day any-reason refund, a one-year warranty (three years on permanent outdoor), ship in one business day, delivery in two to six, and lifetime tech support. The old ads already knew to say warranty and free shipping.",
  },
  {
    title: "AI is a prompt, not a chip",
    body: "In ads they can quote, AI shows up as a sentence a person would say to a lamp. In the dog film it shows up as invisible post. They are not running a “we use AI” campaign. They are running a mood campaign that happens to be steered by a bot.",
  },
  {
    title: "The cut is the creative",
    body: "June went as far as 53% off a legacy backlight. October still strikes hundreds of dollars off permanent outdoor kits. A large share of the new Meta volume is that offer wearing a Halloween hat.",
  },
] as const;
