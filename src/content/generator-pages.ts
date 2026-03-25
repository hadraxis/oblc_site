export type GeneratorPage = {
  slug: string;
  city: string;
  state: string;
  county: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  headlineLines: string[];
  subhead: string;
  bodyCopy: string[];
  stats: { number: string; unit?: string; label: string }[];
  reasons: { title: string; body: string }[];
  pullQuote: string;
  formTitle: string;
  formNote: string;
  mapEmbed: string;
};

export const generatorPages: GeneratorPage[] = [
  {
    slug: "houston",
    city: "Houston",
    state: "TX",
    county: "Harris County",
    metaTitle: "Standby Generator Installation Houston TX | Free Home Estimate",
    metaDescription:
      "Houston loses power 20+ times a year — mostly on regular Tuesdays, not just hurricanes. Find out if a standby generator is right for your home. See the math.",
    eyebrow: "Houston, TX — Harris County",
    headlineLines: ["You Don't Need", "A Generator.", "You Need Days."],
    subhead:
      "Most Houston homes lose power more than 20 times a year. The outages that cause real damage aren't the hurricanes — they're the ones you didn't prepare for.",
    bodyCopy: [
      "CenterPoint's territory posts one of the worst reliability scores in the country. The average Harris County household experiences 20+ outages annually — most lasting 1 to 4 hours, most happening on ordinary afternoons.",
      "A properly sized standby generator doesn't wait for storm season. It kicks on automatically within seconds, keeps the freezer running, the AC going, and the security system live — on a Tuesday in July when the grid goes down for no particular reason.",
    ],
    stats: [
      { number: "20+", label: "Outages per year for the\naverage Houston home" },
      { number: "1–4", unit: "hrs", label: "The most common outage\nduration in Harris County" },
      { number: "10 sec", label: "Time to automatic transfer\nwith a standby generator" },
    ],
    reasons: [
      {
        title: "No fuel runs",
        body: "Connects directly to your natural gas or propane line. No cans, no trips, no rationing.",
      },
      {
        title: "Automatic transfer",
        body: "Detects an outage and starts within 10 seconds. You don't touch anything.",
      },
      {
        title: "Whole-home coverage",
        body: "Sized correctly, it runs your AC, refrigerator, and essentials simultaneously — not just a few outlets.",
      },
    ],
    pullQuote: "It's not the hurricane. It's every Tuesday.",
    formTitle: "See the math for your home",
    formNote: "Serving Houston and Harris County. No obligation.",
    mapEmbed: "https://www.openstreetmap.org/export/embed.html?bbox=-95.57%2C29.62%2C-95.15%2C29.90&layer=mapnik&marker=29.7604%2C-95.3698",
  },
  {
    slug: "katy",
    city: "Katy",
    state: "TX",
    county: "Fort Bend / Harris County",
    metaTitle: "Standby Generator Installation Katy TX | Free Home Estimate",
    metaDescription:
      "Katy homeowners deal with regular outages year-round — not just during storms. Get a free standby generator estimate for your home.",
    eyebrow: "Katy, TX — Fort Bend / Harris County",
    headlineLines: ["Katy Loses", "Power. A Lot.", "Be Ready."],
    subhead:
      "New construction in Katy doesn't mean reliable power. Grid stress, summer heat, and afternoon storms hit this corridor hard every year.",
    bodyCopy: [
      "Katy sits at the edge of two utility territories, and rapid growth hasn't been matched by infrastructure investment. High-demand summer months push the grid to its limit — and neighborhoods in the 77449, 77450, and 77494 zip codes feel it regularly.",
      "HOA-heavy developments mean noise ordinances matter. A natural gas standby generator runs quieter than a portable, doesn't require fuel storage, and starts automatically before you've finished wondering if the power's out.",
    ],
    stats: [
      { number: "77449", label: "One of the most affected\nzip codes in the Katy corridor" },
      { number: "3x", label: "More outages in summer\nvs. the rest of the year" },
      { number: "10 sec", label: "Automatic transfer\nafter outage detection" },
    ],
    reasons: [
      {
        title: "No HOA approval needed",
        body: "Many Katy HOAs require ACC approval, sound barriers, and rear-yard placement for generators. A wall-mounted battery has nothing to object to.",
      },
      {
        title: "No manual startup",
        body: "Automatic transfer switch monitors grid 24/7 and switches over without you doing anything.",
      },
      {
        title: "Built for heat season",
        body: "Keeps essentials running through summer outages — fridge, fans, Wi-Fi, phones — without the fuel cost or noise.",
      },
    ],
    pullQuote: "New house. Old grid. Not your problem anymore.",
    formTitle: "See the math for your Katy home",
    formNote: "Serving Katy and surrounding Fort Bend / Harris County areas. No obligation.",
    mapEmbed: "https://www.openstreetmap.org/export/embed.html?bbox=-95.95%2C29.72%2C-95.70%2C29.84&layer=mapnik&marker=29.7858%2C-95.8245",
  },
  {
    slug: "sugar-land",
    city: "Sugar Land",
    state: "TX",
    county: "Fort Bend County",
    metaTitle: "Standby Generator Installation Sugar Land TX | Free Home Estimate",
    metaDescription:
      "Sugar Land homeowners invest in their homes. A standby generator protects that investment through every outage, storm season and off-season. See the math.",
    eyebrow: "Sugar Land, TX — Fort Bend County",
    headlineLines: ["Your Home", "Deserves", "Backup Power."],
    subhead:
      "Fort Bend County outages don't announce themselves. A standby generator means your home runs normally whether the grid cooperates or not.",
    bodyCopy: [
      "Sugar Land's master-planned communities — First Colony, Riverstone, Telfair, Sienna — were built with high standards. Backup power is the one infrastructure investment that stays invisible until you need it, and then it's the most important thing in the house.",
      "A whole-home generator keeps your HVAC, refrigerator, sump pump, security, and medical equipment running through any outage. No extension cords, no rotating circuits, no manual startup. Just continuous power.",
    ],
    stats: [
      { number: "54", unit: "hrs", label: "Backup coverage from a\nproperly sized system" },
      { number: "0", label: "Manual steps required\nafter installation" },
      { number: "400+", unit: "W", label: "Average storm-mode draw\nfor a well-managed home" },
    ],
    reasons: [
      {
        title: "HOA-friendly by default",
        body: "First Colony, Riverstone, and Telfair all have deed restrictions. Wall-mounted battery requires no ACC approval, no sound barrier, no outdoor unit.",
      },
      {
        title: "Medical-grade reliability",
        body: "If anyone in your home depends on powered medical equipment, there is no acceptable alternative.",
      },
      {
        title: "Increases home value",
        body: "A permitted, professionally installed backup power system is a documented home improvement that transfers with the property.",
      },
    ],
    pullQuote: "The grid doesn't care about your schedule. Your backup power does.",
    formTitle: "See the math for your Sugar Land home",
    formNote: "Serving Sugar Land and Fort Bend County. No obligation.",
    mapEmbed: "https://www.openstreetmap.org/export/embed.html?bbox=-95.73%2C29.56%2C-95.50%2C29.68&layer=mapnik&marker=29.6197%2C-95.6349",
  },
  {
    slug: "pearland",
    city: "Pearland",
    state: "TX",
    county: "Brazoria County",
    metaTitle: "Standby Generator Installation Pearland TX | Free Home Estimate",
    metaDescription:
      "Pearland is one of Texas's fastest growing cities — and its grid hasn't kept up. Get a free standby generator estimate for your Pearland home.",
    eyebrow: "Pearland, TX — Brazoria County",
    headlineLines: ["Fast Growth.", "Slow Grid.", "Your Move."],
    subhead:
      "Pearland added tens of thousands of residents in a decade. The infrastructure is catching up. Until it does, your backup plan matters.",
    bodyCopy: [
      "Pearland's growth rate is one of the fastest in Texas, but utility infrastructure doesn't scale as quickly as subdivision permits. Shadow Creek Ranch, Silverlake, and Southdown neighborhoods see regular outages during peak demand — and the fix isn't coming fast.",
      "A standby generator is the one thing that makes the grid's problems irrelevant for your household. It monitors line voltage continuously and switches over in seconds — before your security system, freezer, or HVAC has time to register the gap.",
    ],
    stats: [
      { number: "#4", label: "Fastest growing city\nin Texas (recent census)" },
      { number: "2–6", unit: "hrs", label: "Typical storm outage\nduration in Brazoria County" },
      { number: "22", unit: "kW", label: "Typical capacity for a\nfull Pearland home system" },
    ],
    reasons: [
      {
        title: "Growing demand, same lines",
        body: "More homes on the same circuits means more strain and more failures. The generator sits outside all of that.",
      },
      {
        title: "Storm corridor exposure",
        body: "Brazoria County sits in a direct path for Gulf storm systems. Preparation isn't optional in this zip code.",
      },
      {
        title: "Young families, full houses",
        body: "Infants, young children, pets — heat during a summer outage isn't discomfort. It's a hazard.",
      },
    ],
    pullQuote: "The city is growing. The grid is not. Plan accordingly.",
    formTitle: "See the math for your Pearland home",
    formNote: "Serving Pearland and Brazoria County. No obligation.",
    mapEmbed: "https://www.openstreetmap.org/export/embed.html?bbox=-95.40%2C29.52%2C-95.19%2C29.64&layer=mapnik&marker=29.5636%2C-95.2860",
  },
  {
    slug: "the-woodlands",
    city: "The Woodlands",
    state: "TX",
    county: "Montgomery County",
    metaTitle: "Standby Generator Installation The Woodlands TX | Free Home Estimate",
    metaDescription:
      "The Woodlands homeowners expect reliability. A standby generator delivers it, every time the grid can't. See the math for Montgomery County homes.",
    eyebrow: "The Woodlands, TX — Montgomery County",
    headlineLines: ["The Grid", "Has Off Days.", "You Shouldn't."],
    subhead:
      "Even in well-maintained communities, the power goes out. Trees, heat, equipment failure — it doesn't discriminate by neighborhood.",
    bodyCopy: [
      "The Woodlands is one of the most planned communities in the country. Canopy roads and mature tree coverage make it beautiful — and a consistent source of downed lines and outages during any storm with wind. Spring, Creekside, and Grogan's Mill Village all have the same problem.",
      "A whole-home standby generator doesn't require you to be home, awake, or paying attention. It starts itself, runs itself, and shuts itself down when grid power returns. The only thing you'll notice is that your house never stopped working.",
    ],
    stats: [
      { number: "100%", label: "Automatic — no manual\nsteps after installation" },
      { number: "0", label: "Hours of food spoilage\nduring the next outage" },
      { number: "7", label: "Days of coverage possible\nwith extended fuel supply" },
    ],
    reasons: [
      {
        title: "Tree canopy = outage risk",
        body: "The Woodlands' signature tree coverage is also its main grid liability. Backup power neutralizes that entirely.",
      },
      {
        title: "No HOA fight",
        body: "Woodlands covenant restrictions require ACC approval for outdoor generators. Battery mounts inside — no approval, no sound barrier, no visibility issue.",
      },
      {
        title: "Protect home office and remote work",
        body: "Working from home means an outage is lost income. Backup power keeps you on the clock regardless.",
      },
    ],
    pullQuote: "Beautiful neighborhood. Unreliable grid. Easy fix.",
    formTitle: "See the math for your Woodlands home",
    formNote: "Serving The Woodlands and Montgomery County. No obligation.",
    mapEmbed: "https://www.openstreetmap.org/export/embed.html?bbox=-95.61%2C30.09%2C-95.37%2C30.22&layer=mapnik&marker=30.1488%2C-95.4613",
  },
];
