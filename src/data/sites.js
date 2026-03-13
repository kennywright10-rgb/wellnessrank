// ═══════════════════════════════════════════════════════════
// IVRANKER — MASTER DATA FILE
// All city pages, provider listings, and content are generated
// from this data. To add a new city or provider, just add a
// row here and redeploy. For 50+ cities, move to Supabase.
// ═══════════════════════════════════════════════════════════

// ── CITIES ──────────────────────────────────────────────────
export const cities = [
  {
    slug: "alpharetta",
    name: "Alpharetta",
    county: "Fulton County",
    state: "GA",
    stateSlug: "georgia",
    population: "67,213",
    tagline: "The Technology City of the South",
    description: "As North Atlanta's premier tech hub, Alpharetta draws busy professionals, entrepreneurs, and active families who demand peak performance. The city's booming wellness scene reflects its population — driven, health-conscious, and willing to invest in feeling their best.",
    whyIV: "Alpharetta's tech professionals and active residents are increasingly turning to IV therapy as a fast, effective way to combat the fatigue and burnout that comes with high-pressure careers. Whether you're recovering from a long week at one of Alpharetta's many tech campuses or prepping for a weekend at Big Creek Greenway, IV hydration delivers results that oral supplements simply can't match.",
    demographics: "tech professionals, entrepreneurs, young families",
    nearbyAreas: ["roswell", "johns-creek", "milton", "cumming", "sandy-springs"],
    zipCodes: ["30004", "30005", "30009", "30022", "30023"],
    metaTitle: "Best IV Therapy in Alpharetta, GA (2026) — Compare Providers | IV Ranker",
    metaDescription: "Find and compare the best IV therapy providers in Alpharetta, GA. Read reviews, compare prices for Myers Cocktail, NAD+, hydration & more. Updated 2026.",
  },
  {
    slug: "roswell",
    name: "Roswell",
    county: "Fulton County",
    state: "GA",
    stateSlug: "georgia",
    population: "94,786",
    tagline: "Where History Meets Modern Wellness",
    description: "Roswell blends Southern charm with a growing health and wellness scene. From the historic Canton Street district to the Chattahoochee River trails, Roswell residents are active, community-oriented, and increasingly seeking advanced wellness treatments like IV therapy.",
    whyIV: "Roswell's active lifestyle — from river kayaking to Canton Street 5Ks — creates real demand for rapid recovery and hydration. IV therapy providers along the Alpharetta Street and Holcomb Bridge corridors serve everyone from weekend warriors to busy parents who can't afford downtime.",
    demographics: "young professionals, active families, retirees",
    nearbyAreas: ["alpharetta", "sandy-springs", "johns-creek", "dunwoody"],
    zipCodes: ["30075", "30076", "30077"],
    metaTitle: "Best IV Therapy in Roswell, GA (2026) — Compare Providers | IV Ranker",
    metaDescription: "Find the best IV therapy providers in Roswell, GA. Compare clinics, prices, and treatments including NAD+, Myers Cocktail, and hydration therapy.",
  },
  {
    slug: "johns-creek",
    name: "Johns Creek",
    county: "Fulton County",
    state: "GA",
    stateSlug: "georgia",
    population: "82,453",
    tagline: "One of America's Safest and Most Affluent Cities",
    description: "Consistently ranked among Georgia's wealthiest and safest cities, Johns Creek is home to a health-conscious population that values premium wellness services. The city's family-oriented community and high-income demographics make it a natural fit for IV therapy.",
    whyIV: "Johns Creek families prioritize health and are willing to invest in preventive wellness. The city's proximity to top-tier medical facilities along McGinnis Ferry Road and Medlock Bridge corridors means residents have access to both medical-grade and boutique IV therapy options.",
    demographics: "affluent families, medical professionals, executives",
    nearbyAreas: ["alpharetta", "suwanee", "duluth", "peachtree-corners", "roswell"],
    zipCodes: ["30005", "30022", "30024", "30097"],
    metaTitle: "Best IV Therapy in Johns Creek, GA (2026) — Compare Providers | IV Ranker",
    metaDescription: "Compare IV therapy providers in Johns Creek, GA. Find NAD+, hydration, immune boost and more from vetted local clinics.",
  },
  {
    slug: "sandy-springs",
    name: "Sandy Springs",
    county: "Fulton County",
    state: "GA",
    stateSlug: "georgia",
    population: "108,080",
    tagline: "The Corporate Gateway to North Atlanta",
    description: "Sandy Springs is a major business hub with corporate headquarters, upscale dining, and a rapidly growing wellness industry. Its central location between Buckhead and the northern suburbs makes it a prime corridor for IV therapy services.",
    whyIV: "Home to major corporate campuses and a fast-paced professional workforce, Sandy Springs residents experience the kind of chronic stress and burnout that IV therapy was designed to address. The Roswell Road and Perimeter corridors are seeing a surge in wellness clinics.",
    demographics: "corporate professionals, dual-income households, fitness enthusiasts",
    nearbyAreas: ["dunwoody", "roswell", "brookhaven", "buckhead"],
    zipCodes: ["30328", "30338", "30339", "30342", "30350"],
    metaTitle: "Best IV Therapy in Sandy Springs, GA (2026) — Compare Providers | IV Ranker",
    metaDescription: "Find IV therapy in Sandy Springs, GA. Compare providers, read reviews, and book hydration, NAD+, and immune boost treatments.",
  },
  {
    slug: "cumming",
    name: "Cumming",
    county: "Forsyth County",
    state: "GA",
    stateSlug: "georgia",
    population: "8,050",
    tagline: "The Gateway to Lake Lanier",
    description: "Cumming and the broader Forsyth County area represent one of Georgia's fastest-growing markets. Young families relocating from Atlanta proper are bringing demand for premium wellness services, including IV therapy, to this rapidly developing corridor.",
    whyIV: "As Forsyth County continues its explosive growth, the demand for wellness services is outpacing supply. Weekend warriors returning from Lake Lanier, busy families, and professionals commuting to Alpharetta's tech corridor all represent underserved IV therapy customers.",
    demographics: "young families, outdoor enthusiasts, commuters",
    nearbyAreas: ["alpharetta", "johns-creek", "dawsonville", "buford"],
    zipCodes: ["30028", "30040", "30041"],
    metaTitle: "Best IV Therapy in Cumming, GA (2026) — Compare Providers | IV Ranker",
    metaDescription: "Find IV therapy providers in Cumming and Forsyth County, GA. Compare mobile and in-clinic options for hydration, vitamins, and NAD+.",
  },
  {
    slug: "dunwoody",
    name: "Dunwoody",
    county: "DeKalb County",
    state: "GA",
    stateSlug: "georgia",
    population: "51,683",
    tagline: "Perimeter's Premier Live-Work-Play Destination",
    description: "Anchored by Perimeter Mall and a booming mixed-use development scene, Dunwoody combines suburban comfort with urban convenience. Its health-conscious residents and proximity to major medical centers make it a growing market for IV therapy.",
    whyIV: "Dunwoody's Perimeter Center district is packed with professionals who work long hours and need quick wellness solutions. The growth of medical spas along Ashford-Dunwoody Road reflects increasing demand for IV hydration and vitamin infusions.",
    demographics: "corporate professionals, young urbanites, active retirees",
    nearbyAreas: ["sandy-springs", "brookhaven", "chamblee", "peachtree-corners"],
    zipCodes: ["30338", "30346", "30360"],
    metaTitle: "Best IV Therapy in Dunwoody, GA (2026) — Compare Providers | IV Ranker",
    metaDescription: "Compare IV therapy providers in Dunwoody, GA. Find hydration, NAD+, Myers Cocktail and more near Perimeter Center.",
  },
  {
    slug: "milton",
    name: "Milton",
    county: "Fulton County",
    state: "GA",
    stateSlug: "georgia",
    population: "41,540",
    tagline: "North Fulton's Rural-Luxury Community",
    description: "Milton offers a unique blend of equestrian estates, upscale neighborhoods, and rural charm — all just minutes from Alpharetta's tech corridor. Residents here tend to be high-income families who prioritize wellness.",
    whyIV: "Milton's affluent, health-conscious population is underserved by local wellness providers, meaning most residents travel to Alpharetta or Roswell for IV therapy. This creates a strong market for mobile IV services.",
    demographics: "affluent families, equestrians, executives",
    nearbyAreas: ["alpharetta", "roswell", "cumming", "woodstock"],
    zipCodes: ["30004", "30009"],
    metaTitle: "Best IV Therapy in Milton, GA (2026) — Compare Providers | IV Ranker",
    metaDescription: "Find IV therapy options in Milton, GA. Compare mobile and nearby clinic providers for hydration, recovery, and wellness infusions.",
  },
  {
    slug: "suwanee",
    name: "Suwanee",
    county: "Gwinnett County",
    state: "GA",
    stateSlug: "georgia",
    population: "21,219",
    tagline: "Award-Winning Town Center Living",
    description: "Suwanee's award-winning Town Center, top-rated schools, and family-friendly atmosphere have made it one of Georgia's most desirable suburbs. The wellness market is growing as residents seek convenient, premium health services.",
    whyIV: "Suwanee's growth has attracted young, active families and professionals who are prime candidates for IV therapy. The town's emphasis on outdoor recreation creates natural demand for recovery and hydration services.",
    demographics: "young families, runners, community-oriented professionals",
    nearbyAreas: ["johns-creek", "duluth", "buford", "sugar-hill"],
    zipCodes: ["30024"],
    metaTitle: "Best IV Therapy in Suwanee, GA (2026) — Compare Providers | IV Ranker",
    metaDescription: "Find IV therapy in Suwanee, GA. Compare mobile IV providers and nearby clinics for hydration, immune boost, and NAD+ treatments.",
  },
  {
    slug: "marietta",
    name: "Marietta",
    county: "Cobb County",
    state: "GA",
    stateSlug: "georgia",
    population: "60,972",
    tagline: "The Heart of Cobb County",
    description: "Marietta's charming Square, thriving arts scene, and diverse neighborhoods make it one of metro Atlanta's most vibrant cities. The wellness market spans from budget-friendly hydration bars to premium medical-grade infusions.",
    whyIV: "Marietta's central Cobb County location and diverse population create a broad market for IV therapy. From athletes training near Kennesaw Mountain to professionals in the Cumberland corridor, the demand spans multiple demographics.",
    demographics: "diverse families, professionals, students, military-connected",
    nearbyAreas: ["kennesaw", "smyrna", "east-cobb", "woodstock", "sandy-springs"],
    zipCodes: ["30060", "30062", "30064", "30066", "30067", "30068"],
    metaTitle: "Best IV Therapy in Marietta, GA (2026) — Compare Providers | IV Ranker",
    metaDescription: "Compare IV therapy providers in Marietta and East Cobb, GA. Find hydration, recovery, and vitamin infusion clinics.",
  },
  {
    slug: "woodstock",
    name: "Woodstock",
    county: "Cherokee County",
    state: "GA",
    stateSlug: "georgia",
    population: "35,065",
    tagline: "Downtown Charm Meets Outdoor Adventure",
    description: "Woodstock has transformed from a quiet Cherokee County town into a vibrant destination with a revitalized downtown, craft breweries, and a growing wellness scene.",
    whyIV: "Woodstock's outdoor culture — mountain biking at Blankets Creek, hiking nearby trails, and weekend 5Ks — creates consistent demand for athletic recovery IV treatments.",
    demographics: "outdoor enthusiasts, young families, craft beer culture",
    nearbyAreas: ["canton", "roswell", "kennesaw", "alpharetta"],
    zipCodes: ["30188", "30189"],
    metaTitle: "Best IV Therapy in Woodstock, GA (2026) — Compare Providers | IV Ranker",
    metaDescription: "Find IV therapy in Woodstock, GA. Athletic recovery, hydration, and vitamin infusions for Cherokee County's active community.",
  },
  {
    slug: "peachtree-corners",
    name: "Peachtree Corners",
    county: "Gwinnett County",
    state: "GA",
    stateSlug: "georgia",
    population: "43,501",
    tagline: "Georgia's Silicon Valley",
    description: "Peachtree Corners is home to Curiosity Lab, Georgia's smart city technology hub, and a growing population of tech workers and innovators. The forward-thinking community embraces optimization-focused services like IV therapy.",
    whyIV: "As a tech-forward community, Peachtree Corners attracts biohacking, optimization-minded professionals who are early adopters of IV therapy for cognitive performance and recovery.",
    demographics: "tech workers, biohackers, innovators, families",
    nearbyAreas: ["norcross", "duluth", "johns-creek", "dunwoody"],
    zipCodes: ["30092", "30097"],
    metaTitle: "Best IV Therapy in Peachtree Corners, GA (2026) — Compare Providers | IV Ranker",
    metaDescription: "Compare IV therapy providers in Peachtree Corners, GA. Find NAD+, hydration, and wellness infusions in Gwinnett's tech hub.",
  },
  {
    slug: "duluth",
    name: "Duluth",
    county: "Gwinnett County",
    state: "GA",
    stateSlug: "georgia",
    population: "30,621",
    tagline: "Gwinnett's Cultural Crossroads",
    description: "Duluth has become one of metro Atlanta's most diverse and dynamic cities, with a thriving food scene, cultural festivals, and a mix of established neighborhoods and new development.",
    whyIV: "Duluth's diverse community and growing professional class make it a promising market for IV therapy. The Gas South District brings thousands of visitors for events, creating additional demand.",
    demographics: "diverse professionals, event-goers, multicultural families",
    nearbyAreas: ["suwanee", "johns-creek", "peachtree-corners", "norcross"],
    zipCodes: ["30096", "30097", "30099"],
    metaTitle: "Best IV Therapy in Duluth, GA (2026) — Compare Providers | IV Ranker",
    metaDescription: "Find IV therapy providers in Duluth, GA. Compare mobile and in-clinic options for hydration, immune support, and vitamin infusions.",
  },
];

// ── PROVIDERS ───────────────────────────────────────────────
// sortOrder: lower = higher on page. Sponsored providers always sort first.
// sponsorTier: "platinum" | "gold" | "silver" | null
export const providers = [
  // === ALPHARETTA ===
  { id: 1, name: "Thrive 4 Peak Performance", slug: "thrive-4-peak-performance", city: "alpharetta", address: "Alpharetta, GA", phone: "", website: "https://thrive4peakperformance.com", specialty: "Physician-Supervised IV, Hormone Optimization, NAD+, Peptide Therapy", priceRange: "$$-$$$", rating: 4.9, reviewCount: 47, description: "Physician-supervised wellness clinic offering premium IV therapy, hormone optimization, GLP-1 weight management, peptide therapy, NAD+ infusions, and longevity medicine. Led by Dr. Lori Marshall M.D. and a team committed to evidence-based wellness.", featured: true, sponsored: true, sponsorTier: "platinum", sortOrder: 0 },
  { id: 2, name: "Restore Hyper Wellness - Avalon", slug: "restore-avalon", city: "alpharetta", address: "3060 Avalon Blvd, Alpharetta, GA 30009", phone: "", website: "https://restore.com/locations/ga-alpharetta-ga002", specialty: "Cryotherapy + IV Drips", priceRange: "$$-$$$", rating: 4.6, reviewCount: 128, description: "National franchise offering cryotherapy, IV drip therapy, mild hyperbaric oxygen therapy, infrared sauna, and compression therapy at the Avalon mixed-use development.", featured: false, sponsored: false, sponsorTier: null, sortOrder: 10 },
  { id: 3, name: "IV Nutrition Alpharetta", slug: "iv-nutrition-alpharetta", city: "alpharetta", address: "5530 Windward Pkwy, Alpharetta, GA 30004", phone: "", website: "https://ivnutrition.com/locations/alpharetta-ga/", specialty: "NAD+ & Nutrient Therapy", priceRange: "$$", rating: 4.7, reviewCount: 89, description: "Full-spectrum IV nutrition services including NAD+ (250-1000mg), glutathione deep detox, and custom nutrient blends. Mobile services available for homes and offices.", featured: false, sponsored: false, sponsorTier: null, sortOrder: 20 },
  { id: 4, name: "Youthtopia Med Spa", slug: "youthtopia", city: "alpharetta", address: "Alpharetta, GA", phone: "", website: "https://youthtopiamedspa.com/iv-therapy/", specialty: "Myers Cocktail IV", priceRange: "$$", rating: 4.5, reviewCount: 62, description: "Med spa offering Myers Mix IV therapy with 1000mL lactated ringers, B vitamins, magnesium, and vitamin C for wellness support and chronic condition management.", featured: false, sponsored: false, sponsorTier: null, sortOrder: 30 },
  { id: 5, name: "Alpha Aesthetics & Health", slug: "alpha-aesthetics", city: "alpharetta", address: "Alpharetta, GA", phone: "", website: "https://alphaaesthetichealth.com/services/alternative-therapies/iv-therapy-alpharetta-ga", specialty: "LiquidVida IV Therapy", priceRange: "$$-$$$", rating: 4.8, reviewCount: 34, description: "Advanced LiquidVida IV infusions for energy enhancement, immune function, recovery, skin health, reduced inflammation, and better sleep quality.", featured: false, sponsored: false, sponsorTier: null, sortOrder: 40 },
  { id: 6, name: "Ayuh Wellness Center", slug: "ayuh-wellness", city: "alpharetta", address: "Alpharetta, GA", phone: "", website: "https://www.ayuhwellnesscenter.com/services/iv-nutritional-therapy/", specialty: "Chelation & Oxidative IV Therapy", priceRange: "$$$", rating: 4.4, reviewCount: 21, description: "Internal medicine practice offering medical-grade IV nutrition including Myers Cocktail, immune boost, chelation therapy, high-dose vitamin C, and hydrogen peroxide therapy.", featured: false, sponsored: false, sponsorTier: null, sortOrder: 50 },
  { id: 7, name: "BodyWorks - The Human Body Shop", slug: "bodyworks", city: "alpharetta", address: "Alpharetta, GA", phone: "(770) 575-8399", website: "https://mybodyworkswell.com/services/iv-therapy/", specialty: "Functional Medicine + IV Therapy", priceRange: "$$-$$$", rating: 4.7, reviewCount: 55, description: "Doctor-supervised functional medicine practice led by Dr. Andrew Pugliese. Combines IV therapy with 3D body scanning, peptide therapy, and weight management programs.", featured: false, sponsored: false, sponsorTier: null, sortOrder: 60 },

  // === ROSWELL ===
  { id: 8, name: "wHydrate Roswell", slug: "whydrate-roswell", city: "roswell", address: "1245 Alpharetta St, Roswell, GA 30075", phone: "(770) 209-3466", website: "https://whydrate.com/locations/iv-therapy-roswell-ga/", specialty: "IV Infusions & Injections", priceRange: "$$", rating: 4.6, reviewCount: 45, description: "IV therapy spa offering infusions, vitamin injections, and wellness treatments. Member discounts and seasonal specials available.", featured: false, sponsored: false, sponsorTier: null, sortOrder: 10 },
  { id: 9, name: "Prime IV Hydration & Wellness", slug: "prime-iv-roswell", city: "roswell", address: "Roswell, GA 30075", phone: "", website: "https://primeivhydration.com/locations/georgia/roswell-30075/", specialty: "Hydration, NAD+ & Memberships", priceRange: "$$", rating: 4.5, reviewCount: 38, description: "Premier hydration clinic with heated massage chairs, oxygen treatments, and comprehensive nutrient infusions. HSA/FSA accepted. Membership plans available.", featured: false, sponsored: false, sponsorTier: null, sortOrder: 20 },
  { id: 10, name: "Elite Health HRT", slug: "elite-health-roswell", city: "roswell", address: "Roswell, GA", phone: "", website: "https://elitehealthhrt.com/iv-therapy/", specialty: "IV Therapy & Hormone Replacement", priceRange: "$-$$", rating: 4.7, reviewCount: 29, description: "IV therapy starting at $55 with walk-ins welcome. Brain health, immunity, and energy blends available. Also serving Milton, Alpharetta, and Canton.", featured: false, sponsored: false, sponsorTier: null, sortOrder: 30 },
  { id: 11, name: "Atlanta Integrative & Internal Medicine", slug: "atlanta-integrative", city: "roswell", address: "45 W Crossville Rd Suite 501, Roswell, GA 30075", phone: "", website: "https://atlantaintegrativeandinternalmedicine.com/intravenous-therapy/", specialty: "Medical IV, Ozone & Functional Medicine", priceRange: "$$$", rating: 4.8, reviewCount: 67, description: "Integrative medicine practice offering individualized IV therapy formulas based on lab results, history, and published studies. Includes ozone and high-dose vitamin C protocols.", featured: false, sponsored: false, sponsorTier: null, sortOrder: 40 },
  { id: 12, name: "VC Esthetics", slug: "vc-esthetics", city: "roswell", address: "976 Mansell Rd, Roswell, GA 30076", phone: "(770) 341-1110", website: "https://www.vcesthetics.com/iv-hydration", specialty: "IV Hydration & Med Spa", priceRange: "$$", rating: 4.5, reviewCount: 28, description: "Medical spa offering immunity, brain health, gut health, and general hydration IV treatments. Same-day appointments available.", featured: false, sponsored: false, sponsorTier: null, sortOrder: 50 },
  { id: 13, name: "Glow Anti-Aging Center", slug: "glow-roswell", city: "roswell", address: "1297 Hembree Rd Suite 201, Roswell, GA 30076", phone: "(770) 740-8444", website: "https://www.agelessglowspa.com/service/iv-hydration", specialty: "IV Hydration & Anti-Aging", priceRange: "$$", rating: 4.4, reviewCount: 19, description: "Medical spa offering basic rehydration ($100), immunity support, energy boost, and anti-aging IV packages in a relaxing spa environment.", featured: false, sponsored: false, sponsorTier: null, sortOrder: 60 },

  // === JOHNS CREEK ===
  { id: 14, name: "HydraMed Mobile IV", slug: "hydramed-johns-creek", city: "johns-creek", address: "Serving Johns Creek, GA", phone: "", website: "https://hydramed.com/areas-served/georgia/atlanta", specialty: "Mobile IV Therapy (18+ nutrients)", priceRange: "$$-$$$", rating: 4.8, reviewCount: 156, description: "Top-rated mobile IV therapy with 18+ nutrient options. Experienced ER/ICU nurses, 5,000+ five-star reviews. HSA/FSA eligible. Arrives in 45 minutes or less.", featured: false, sponsored: false, sponsorTier: null, sortOrder: 10 },
  { id: 15, name: "Mobile IV Medics", slug: "mobile-iv-medics-jc", city: "johns-creek", address: "Serving Johns Creek, GA", phone: "", website: "https://mobileivmedics.com/service-areas/georgia/alpharetta/", specialty: "Mobile IV Therapy", priceRange: "$$", rating: 4.6, reviewCount: 92, description: "Physician-owned mobile IV company with certified registered nurses. Available 7 days a week, 8am-8pm. Customizable IV add-ons including vitamins, minerals, and medicines.", featured: false, sponsored: false, sponsorTier: null, sortOrder: 20 },
  { id: 16, name: "Karera Health", slug: "karera-health", city: "johns-creek", address: "Serving Johns Creek & Alpharetta", phone: "", website: "https://karerahealth.com/iv-hydration-therapy/", specialty: "Mobile IV Hydration", priceRange: "$$", rating: 4.5, reviewCount: 31, description: "Mobile IV therapy serving Johns Creek and Metro Atlanta. Treatments delivered at home, office, or any convenient location with flexible scheduling.", featured: false, sponsored: false, sponsorTier: null, sortOrder: 30 },

  // === SANDY SPRINGS ===
  { id: 17, name: "CellTechMD", slug: "celltechmd", city: "sandy-springs", address: "Sandy Springs & Alpharetta, GA", phone: "(470) 552-1770", website: "https://celltechmd.com/iv-therapy/", specialty: "IV Hydration & Infusion Therapy", priceRange: "$$", rating: 4.5, reviewCount: 41, description: "IV therapy clinic offering anti-aging, immunity, hydration, and performance cocktails with custom vitamin additions. Personalized treatment plans available.", featured: false, sponsored: false, sponsorTier: null, sortOrder: 10 },
  { id: 18, name: "Restore Hyper Wellness - Sandy Springs", slug: "restore-sandy-springs", city: "sandy-springs", address: "Sandy Springs, GA", phone: "", website: "https://restore.com", specialty: "Cryotherapy + IV Drips", priceRange: "$$-$$$", rating: 4.5, reviewCount: 76, description: "National franchise offering cryotherapy, IV drip therapy, compression therapy, and infrared sauna sessions.", featured: false, sponsored: false, sponsorTier: null, sortOrder: 20 },

  // === CUMMING ===
  { id: 19, name: "Natural Medical Solutions", slug: "natural-medical-cumming", city: "cumming", address: "Serving Cumming from Roswell clinic", phone: "(770) 674-6311", website: "https://www.integrative-medicine-clinics.com/roswell/ga/high-dose-vitamin-c-therapy.html", specialty: "High-Dose Vitamin C IV", priceRange: "$$$", rating: 4.6, reviewCount: 44, description: "Natural medicine clinic offering high-dose vitamin C infusions and other IV micronutrient therapies. Serving Cumming, Canton, Woodstock, and surrounding areas.", featured: false, sponsored: false, sponsorTier: null, sortOrder: 10 },
  { id: 20, name: "Mobile IV Medics - Cumming", slug: "mobile-iv-medics-cumming", city: "cumming", address: "Serving Cumming, GA", phone: "", website: "https://mobileivmedics.com", specialty: "Mobile IV Therapy", priceRange: "$$", rating: 4.6, reviewCount: 92, description: "Physician-owned mobile IV company with certified nurses. 7-day availability for home, office, or hotel service throughout Forsyth County.", featured: false, sponsored: false, sponsorTier: null, sortOrder: 20 },

  // === DUNWOODY ===
  { id: 21, name: "Restore Hyper Wellness - Dunwoody", slug: "restore-dunwoody", city: "dunwoody", address: "Dunwoody, GA", phone: "", website: "https://restore.com", specialty: "Cryotherapy + IV Drips", priceRange: "$$-$$$", rating: 4.5, reviewCount: 64, description: "National wellness franchise near Perimeter Center offering IV drip therapy, cryotherapy, infrared sauna, and compression.", featured: false, sponsored: false, sponsorTier: null, sortOrder: 10 },

  // === MARIETTA ===
  { id: 22, name: "Restore Hyper Wellness - East Cobb", slug: "restore-east-cobb", city: "marietta", address: "East Cobb / Marietta, GA", phone: "", website: "https://restore.com", specialty: "Cryotherapy + IV Drips", priceRange: "$$-$$$", rating: 4.5, reviewCount: 58, description: "Full-service wellness franchise offering IV drips, cryotherapy, and recovery treatments in the East Cobb corridor.", featured: false, sponsored: false, sponsorTier: null, sortOrder: 10 },

  // === WOODSTOCK ===
  { id: 23, name: "Elite Health HRT - Canton/Hickory Flat", slug: "elite-health-woodstock", city: "woodstock", address: "Serving Woodstock from Canton clinic", phone: "", website: "https://elitehealthhrt.com/iv-therapy/", specialty: "IV Therapy & HRT", priceRange: "$-$$", rating: 4.7, reviewCount: 29, description: "Walk-in friendly IV therapy starting at $55. Brain fog, immunity, energy, and recovery blends. Closest option for Woodstock, Holly Springs, and Canton residents.", featured: false, sponsored: false, sponsorTier: null, sortOrder: 10 },
];

// ── IV TREATMENT TYPES ──────────────────────────────────────
export const ivTypes = [
  { slug: "myers-cocktail", name: "Myers' Cocktail", icon: "⚡", description: "The gold standard IV blend of magnesium, calcium, B vitamins, and vitamin C. Developed by Dr. John Myers, this infusion addresses fatigue, migraines, muscle spasms, and seasonal allergies. It's the most widely offered IV treatment and a great starting point for IV therapy newcomers." },
  { slug: "nad-plus", name: "NAD+ Therapy", icon: "🧬", description: "Nicotinamide adenine dinucleotide (NAD+) supports cellular energy production, cognitive function, and healthy aging. As NAD+ levels naturally decline with age, supplementation via IV can help restore mental clarity, boost metabolism, and support neurological health. Popular among executives and biohackers." },
  { slug: "immune-boost", name: "Immune Boost", icon: "🛡️", description: "High-dose vitamin C, zinc, glutathione, and B-complex delivered directly to your bloodstream. Ideal at the first sign of cold or flu, before travel, or as preventive care during illness season. Many patients report faster recovery times when started early." },
  { slug: "hydration", name: "Hydration Therapy", icon: "💧", description: "Rapid rehydration with electrolytes, minerals, and essential fluids. Equivalent to drinking 2-3 gallons of water in terms of cellular hydration. Perfect for athletes, travelers, hangover recovery, and anyone suffering from dehydration due to heat, illness, or intense activity." },
  { slug: "athletic-recovery", name: "Athletic Recovery", icon: "🏋️", description: "Amino acids, B vitamins, magnesium, and anti-inflammatory nutrients designed to reduce muscle soreness, speed recovery time, and support peak athletic performance. Popular with CrossFit athletes, runners, and weekend warriors throughout North Atlanta." },
  { slug: "beauty-anti-aging", name: "Beauty & Anti-Aging", icon: "✨", description: "Biotin, glutathione (the master antioxidant), and vitamin C work together to support radiant skin, stronger hair and nails, reduced wrinkles, and overall anti-aging benefits from the inside out. Results are often visible within days of treatment." },
];

// ── FAQ DATA ────────────────────────────────────────────────
export const faqs = [
  { q: "How much does IV therapy cost in {city}?", a: "IV therapy pricing in {city} typically ranges from $100 to $350 per session depending on the treatment type. Basic hydration IVs start around $100-$150, while specialty treatments like NAD+ can cost $250-$500+. Many providers offer membership plans that reduce per-session costs by 20-40%." },
  { q: "Is IV therapy safe?", a: "IV therapy is generally considered safe when administered by licensed medical professionals such as registered nurses, nurse practitioners, or physicians. Reputable providers in {city} conduct health screenings before treatment and use sterile, medical-grade equipment. Minor side effects like bruising at the injection site are possible but uncommon." },
  { q: "How long does an IV therapy session take?", a: "Most standard IV therapy sessions in {city} take between 30 and 60 minutes. NAD+ infusions may take longer — typically 1 to 2 hours depending on the dose. Many clinics offer comfortable seating, Wi-Fi, and entertainment so you can relax or work during your session." },
  { q: "Do I need a prescription for IV therapy?", a: "In Georgia, IV therapy must be administered under medical supervision, but you typically don't need a separate prescription from your primary care doctor. Most IV therapy clinics in {city} have on-staff medical directors who oversee treatments and approve patients after a brief health screening." },
  { q: "Can I use my HSA or FSA for IV therapy?", a: "Many IV therapy providers in {city} accept HSA (Health Savings Account) and FSA (Flexible Spending Account) payments. Since IV therapy is administered by medical professionals, it often qualifies as an eligible medical expense. Check with your specific provider and benefits administrator to confirm." },
  { q: "How often should I get IV therapy?", a: "For general wellness, most providers in {city} recommend IV therapy once or twice per month. Athletes or those managing specific health concerns may benefit from weekly sessions. Your provider will recommend a treatment schedule based on your health goals and current nutrient levels." },
  { q: "What's the difference between IV therapy and oral supplements?", a: "The key difference is absorption. Oral supplements pass through your digestive system where only 10-25% of nutrients are typically absorbed. IV therapy delivers nutrients directly into your bloodstream, achieving close to 100% bioavailability. This means faster results and higher effective doses." },
  { q: "Does insurance cover IV therapy in {city}?", a: "Most health insurance plans do not cover elective IV therapy treatments. However, if IV therapy is medically necessary (prescribed by a physician for a specific condition), some insurance plans may provide partial coverage. HSA and FSA accounts are a more common payment method for IV therapy in {city}." },
];

// ── ADSENSE CONFIG ──────────────────────────────────────────
export const adConfig = {
  publisherId: "ca-pub-XXXXXXXXXXXXXXXX", // Replace with your AdSense publisher ID
  slots: {
    leaderboardTop: "ivr-leaderboard-top",
    midListing: "ivr-mid-listing",
    midPage: "ivr-midpage",
    sidebar: "ivr-sidebar",
    bottomLeaderboard: "ivr-bottom-leaderboard",
    homeLeaderboard: "ivr-home-leaderboard",
    homeBottom: "ivr-home-bottom",
    blogSidebar: "ivr-blog-sidebar",
    blogInArticle: "ivr-blog-in-article",
  },
};

// ── HELPER FUNCTIONS ────────────────────────────────────────
export function getCityBySlug(slug) {
  return cities.find(c => c.slug === slug) || null;
}

export function getProvidersByCity(citySlug) {
  return providers
    .filter(p => p.city === citySlug)
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getCityFaqs(cityName) {
  return faqs.map(f => ({
    q: f.q.replace(/{city}/g, cityName),
    a: f.a.replace(/{city}/g, cityName),
  }));
}

export function getAllCitySlugs() {
  return cities.map(c => c.slug);
}
