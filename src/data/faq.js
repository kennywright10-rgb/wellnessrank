// ═══════════════════════════════════════════════════════════
// IVRANKER FAQ — Comprehensive FAQ Hub
// 50+ questions organized by category, optimized for
// Google's "People Also Ask" and FAQ rich snippets
// ═══════════════════════════════════════════════════════════

export const faqCategories = [
  {
    slug: "basics",
    name: "IV Therapy Basics",
    icon: "💉",
    description: "Everything you need to know before your first IV therapy session.",
    questions: [
      { q: "What is IV therapy?", a: "IV (intravenous) therapy is a medical treatment that delivers fluids, vitamins, minerals, and amino acids directly into your bloodstream through a small catheter placed in a vein. By bypassing the digestive system, IV therapy achieves near 100% absorption of nutrients — compared to only 10-25% from oral supplements. Sessions typically take 30-60 minutes and are administered by licensed nurses or medical professionals." },
      { q: "How does IV therapy work?", a: "A licensed nurse inserts a small catheter into a vein in your arm or hand. The catheter is connected to an IV bag containing a customized blend of fluids and nutrients, which drips into your bloodstream at a controlled rate. Because the nutrients enter your circulatory system directly, they're immediately available for your cells to use — no waiting for digestion or worrying about absorption issues." },
      { q: "Is IV therapy safe?", a: "IV therapy is generally considered safe when administered by licensed medical professionals using sterile, medical-grade equipment. Reputable providers conduct health screenings before treatment to identify any contraindications. Minor side effects like bruising at the injection site or a cool sensation during infusion are possible but uncommon. Serious complications are rare when proper protocols are followed." },
      { q: "Does IV therapy hurt?", a: "Most people describe the IV insertion as a brief pinch — similar to a blood draw. Once the catheter is in place and secured, you typically don't feel it at all during the infusion. If you have a fear of needles, let your provider know — experienced IV nurses have techniques to minimize discomfort. The infusion itself is painless, and many people find the session relaxing." },
      { q: "How long does an IV therapy session take?", a: "Standard IV therapy sessions take 30-60 minutes. Basic hydration drips tend to be on the shorter end, while vitamin-rich infusions like the Myers' Cocktail take 30-45 minutes. NAD+ therapy is the exception — these sessions typically take 1-2 hours because NAD+ must be infused slowly to minimize side effects." },
      { q: "How quickly will I feel results from IV therapy?", a: "Many people feel the effects during or immediately after their session, particularly with hydration IVs. Energy improvements and mental clarity often kick in within a few hours. Some benefits — like immune support or skin improvements from glutathione — may develop more gradually over days or with repeated sessions. Individual results vary based on your baseline health and the specific treatment." },
      { q: "How often should I get IV therapy?", a: "For general wellness maintenance, most providers recommend once or twice per month. Athletes or those with specific health goals may benefit from weekly sessions during training blocks. If you're using IV therapy for acute needs like illness recovery or hangovers, you'd only go as needed. Your provider will recommend a schedule based on your individual health goals." },
      { q: "Who administers IV therapy?", a: "IV therapy should always be administered by licensed healthcare professionals — typically registered nurses (RNs), nurse practitioners (NPs), or physician assistants (PAs). Reputable clinics also have a medical director (a licensed physician) who oversees treatment protocols and approves patients for treatment. In Georgia, IV therapy must be performed under medical supervision." },
      { q: "Can anyone get IV therapy?", a: "Most healthy adults are candidates for IV therapy, but it's not appropriate for everyone. People with kidney disease, heart failure, certain blood disorders, or allergies to specific IV ingredients may need to avoid certain treatments. This is why reputable providers conduct a health screening before your first session — to identify any conditions that could make IV therapy risky for you." },
      { q: "Do I need a doctor's referral for IV therapy?", a: "No. In Georgia, you don't need a referral or separate prescription from your primary care doctor. IV therapy clinics have their own medical directors who oversee treatments and approve patients after a health screening. However, if you have existing medical conditions, it's always a good idea to mention IV therapy to your regular doctor." },
    ]
  },
  {
    slug: "cost-insurance",
    name: "Cost & Insurance",
    icon: "💰",
    description: "What to expect for pricing, payment options, and insurance coverage.",
    questions: [
      { q: "How much does IV therapy cost?", a: "IV therapy pricing in the North Atlanta area typically ranges from $100 to $500+ per session depending on the treatment. Basic hydration IVs start around $55-$150. A Myers' Cocktail costs $150-$250. Immune boost infusions run $150-$200. NAD+ therapy is the most expensive at $250-$500+ per session. Prices vary by provider, location, and whether you have a membership." },
      { q: "Does insurance cover IV therapy?", a: "Most health insurance plans do not cover elective or wellness-focused IV therapy. However, if IV therapy is prescribed by a physician as medically necessary for a specific condition (such as severe dehydration, nutrient malabsorption, or chemotherapy support), some insurance plans may provide partial coverage. Contact your insurance provider to verify your specific coverage." },
      { q: "Can I use my HSA or FSA for IV therapy?", a: "Yes — many IV therapy providers in North Atlanta accept HSA (Health Savings Account) and FSA (Flexible Spending Account) payments. Since IV therapy is administered by licensed medical professionals under physician supervision, it typically qualifies as an eligible medical expense. Using pre-tax HSA/FSA dollars effectively reduces your cost by your tax bracket percentage. Always verify eligibility with your benefits administrator." },
      { q: "Are there membership plans for IV therapy?", a: "Most IV therapy clinics offer membership plans that provide significant savings for regular clients. A typical membership costs $100-$200 per month and includes one IV drip session, 20-50% off additional treatments and add-ons, and sometimes perks like priority scheduling. Most plans require a 3-month minimum commitment. If you plan to get IV therapy monthly, a membership almost always saves money." },
      { q: "Is mobile IV therapy more expensive than in-clinic?", a: "Mobile IV services typically charge a slight premium — roughly $25-$75 more than in-clinic pricing — to cover travel time and convenience. However, most mobile providers don't charge separate travel fees within their primary service area, so the total cost difference is often modest. Group bookings (parties, corporate events, teams) may receive per-person discounts that make mobile service cost-competitive." },
      { q: "Why is NAD+ therapy so expensive?", a: "NAD+ (nicotinamide adenine dinucleotide) is significantly more expensive than other IV treatments for several reasons. The raw NAD+ compound itself is costly to produce and source from quality compounding pharmacies. Sessions take 1-2 hours compared to 30-60 minutes for standard IVs, requiring more staff time. And the doses used (250-1000mg) represent a significant quantity of a premium pharmaceutical ingredient. Despite the cost, many patients find the cognitive and energy benefits justify the investment." },
    ]
  },
  {
    slug: "treatments",
    name: "Treatments & Ingredients",
    icon: "⚡",
    description: "Learn about specific IV therapy treatments, what they contain, and what they do.",
    questions: [
      { q: "What is a Myers' Cocktail?", a: "The Myers' Cocktail is the most popular and widely offered IV therapy treatment. Named after Dr. John Myers who developed it in the 1970s, it contains magnesium, calcium, B-complex vitamins (B1, B2, B3, B5, B6, B12), and vitamin C mixed in sterile saline. It's used to address fatigue, migraines, muscle spasms, seasonal allergies, and general wellness. It's the recommended starting point for first-time IV therapy patients." },
      { q: "What is NAD+ therapy?", a: "NAD+ (nicotinamide adenine dinucleotide) is a coenzyme found in every cell that plays a critical role in energy metabolism, DNA repair, and cellular signaling. NAD+ levels naturally decline with age. IV NAD+ therapy aims to replenish these levels, potentially improving energy, cognitive function, cellular health, and longevity. Sessions take 1-2 hours and cost $250-$500+. It's popular among executives and health-conscious individuals interested in anti-aging." },
      { q: "What is glutathione and why is it in IV drips?", a: "Glutathione is called the 'master antioxidant' because it's the most abundant antioxidant your body produces. It neutralizes free radicals, supports liver detoxification, boosts immune function, and promotes skin health. Oral glutathione supplements are poorly absorbed, making IV delivery the most effective way to raise blood levels. It's available as a standalone treatment ($50-$150) or as an add-on to other IVs ($25-$75)." },
      { q: "What's the difference between IV hydration and vitamin infusion?", a: "IV hydration is primarily saline or lactated Ringer's solution focused on rapid rehydration and electrolyte restoration. It's the simplest and most affordable IV treatment. Vitamin infusions add specific vitamins, minerals, amino acids, or other nutrients to the base fluid, targeting specific health goals like energy, immunity, or recovery. Think of hydration as the foundation and vitamin infusion as the customized upgrade." },
      { q: "Can IV therapy help with hangovers?", a: "Yes — hangover IVs are one of the most popular treatments at IV clinics. They typically combine rapid rehydration with B vitamins (to replace what alcohol depleted), anti-nausea medication, anti-inflammatory medication, and sometimes glutathione for liver support. Most patients report significant improvement within 30-45 minutes. The primary mechanism is rapid rehydration — alcohol causes dehydration, and IV delivery restores fluids much faster than drinking water." },
      { q: "What vitamins are commonly used in IV therapy?", a: "The most common IV therapy vitamins and nutrients include vitamin C (immune support, antioxidant), B-complex vitamins (energy, nervous system), vitamin B12 (energy, cognitive function), magnesium (muscle function, migraine prevention), calcium (bone health, nerve function), zinc (immune support), glutathione (antioxidant, liver support, skin health), amino acids like taurine and L-carnitine (recovery, metabolism), and NAD+ (cellular energy, anti-aging)." },
      { q: "Is high-dose vitamin C IV therapy effective?", a: "High-dose IV vitamin C achieves blood concentrations many times higher than oral supplementation can — a fact confirmed by research. At these elevated levels, vitamin C has enhanced antioxidant and immune-modulating properties. It's been studied for immune support, cancer treatment side effects, and general wellness. While evidence for some claims is still developing, the bioavailability advantage of IV delivery over oral vitamin C is well-established." },
      { q: "What is an immune boost IV?", a: "An immune boost IV is formulated to support your body's natural defenses. It typically contains high-dose vitamin C (5-10+ grams), zinc, glutathione, B-complex vitamins, and sometimes selenium. These nutrients support white blood cell function, antioxidant defense, and overall immune response. Immune IVs are most popular during cold and flu season, before travel, or at the first sign of illness." },
    ]
  },
  {
    slug: "safety-side-effects",
    name: "Safety & Side Effects",
    icon: "🛡️",
    description: "Understanding the risks, side effects, and safety considerations of IV therapy.",
    questions: [
      { q: "What are the side effects of IV therapy?", a: "Common minor side effects include a brief pinch during IV insertion, slight bruising at the injection site, a cool sensation in the arm during infusion, and occasionally a metallic taste (especially with magnesium or glutathione). Rare side effects include dizziness, nausea, or lightheadedness — usually from infusing too quickly. Serious complications like infection or allergic reaction are very rare when treatment is administered by trained professionals using sterile equipment." },
      { q: "Can you get too much IV therapy?", a: "Yes — overhydration and nutrient excess are possible with too-frequent IV therapy. Excessive fluid intake can strain your kidneys and upset electrolyte balance. Too much of certain vitamins (like fat-soluble vitamins A, D, E, K) can reach toxic levels, though most IV nutrients are water-soluble and excess is excreted naturally. This is why reputable providers assess your health history, recommend appropriate treatment frequencies, and monitor your response." },
      { q: "Is IV therapy FDA approved?", a: "The individual components used in IV therapy — saline, vitamins, minerals, and amino acids — are FDA-regulated pharmaceutical products. However, the specific vitamin cocktail formulations (like the Myers' Cocktail) are considered compounded medications and are not individually FDA-approved as treatments for specific conditions. IV therapy clinics operate under state medical practice regulations, and treatments are administered under physician oversight." },
      { q: "Who should NOT get IV therapy?", a: "People with certain conditions should avoid IV therapy or specific treatments. This includes those with kidney disease or kidney failure (impaired ability to process fluids and minerals), congestive heart failure (fluid overload risk), certain blood disorders, allergies to specific IV ingredients, and pregnant women should consult their OB-GYN before treatment. A proper health screening before your first session should identify any contraindications." },
      { q: "Can IV therapy cause infection?", a: "Infection risk exists with any procedure that breaks the skin, but it's extremely low when proper sterile techniques are used. Reputable providers use single-use, individually packaged sterile catheters and supplies, alcohol or chlorhexidine skin preparation before insertion, gloves and hand hygiene protocols, and supplies sourced from FDA-registered compounding pharmacies. Ask your provider about their infection control protocols if you're concerned." },
      { q: "What happens if I have an allergic reaction during IV therapy?", a: "Allergic reactions to IV therapy are rare but possible. Quality providers are prepared for this with trained staff who can recognize early signs of reaction, emergency medications on hand (epinephrine, diphenhydramine, etc.), established protocols for managing adverse events, and the ability to stop the infusion immediately. This is one reason it's important to choose a provider with proper medical oversight and trained clinical staff rather than an unregulated service." },
    ]
  },
  {
    slug: "comparison",
    name: "Comparisons & Alternatives",
    icon: "⚖️",
    description: "How IV therapy compares to other wellness treatments and supplement options.",
    questions: [
      { q: "Is IV therapy better than drinking water?", a: "For normal daily hydration, drinking water is perfectly adequate and far more practical. However, when you're significantly dehydrated — from illness, intense exercise, heat exposure, or alcohol — IV hydration restores fluid and electrolyte balance much faster than oral intake. IV fluids enter the bloodstream directly, while drinking water requires digestion and absorption through the gut, which is slower and less efficient when you're already depleted." },
      { q: "IV therapy vs. oral supplements — which is better?", a: "Neither is universally better — they serve different purposes. Oral supplements are ideal for daily baseline nutrition: they're affordable, convenient, and sufficient for most healthy people. IV therapy excels when you need rapid delivery, higher therapeutic doses, or when digestive issues limit oral absorption. The smartest approach for most people is to use quality oral supplements daily and add periodic IV therapy for targeted support when the situation calls for it." },
      { q: "Is IV therapy better than vitamin shots (injections)?", a: "IV therapy and vitamin injections (intramuscular or subcutaneous shots) both bypass the digestive system, but they differ in scope. Vitamin shots deliver a single nutrient — most commonly B12 or a lipotropic blend — in a quick injection. IV therapy delivers a comprehensive blend of multiple nutrients plus hydration over 30-60 minutes. Shots are faster and cheaper ($25-$50); IVs are more comprehensive. Many people use both — monthly IV drips plus weekly B12 shots." },
      { q: "Can IV therapy replace a healthy diet?", a: "No. IV therapy is a supplement to — not a replacement for — good nutrition. A balanced diet provides fiber, phytonutrients, and sustained nutritional support that IV therapy cannot replicate. Think of IV therapy as a targeted boost for specific situations: rapid hydration, high-dose nutrient delivery, immune support, or recovery. The foundation of good health is still a nutritious diet, regular exercise, adequate sleep, and stress management." },
    ]
  },
  {
    slug: "local",
    name: "North Atlanta & Georgia",
    icon: "📍",
    description: "Questions specific to getting IV therapy in the North Atlanta metro area.",
    questions: [
      { q: "Where can I get IV therapy in Alpharetta?", a: "Alpharetta has more IV therapy options than any other North Atlanta city. Providers include physician-supervised clinics like Thrive 4 Peak Performance, national franchises like Restore Hyper Wellness at Avalon, specialty nutrient therapy centers like IV Nutrition, med spas like Youthtopia and Alpha Aesthetics, functional medicine practices like BodyWorks, and mobile IV services that come to your home or office. Visit our Alpharetta page for a full directory." },
      { q: "Is IV therapy regulated in Georgia?", a: "Yes. In Georgia, IV therapy must be administered under medical supervision by licensed healthcare professionals. This means a licensed physician (MD or DO) must serve as the medical director overseeing treatment protocols, and the actual IV insertion and monitoring must be performed by licensed nurses (RN), nurse practitioners (NP), or physician assistants (PA). Georgia's medical practice laws apply to all IV therapy providers operating in the state." },
      { q: "Are there mobile IV therapy services in North Atlanta?", a: "Yes — several mobile IV companies serve the North Atlanta metro area, including Alpharetta, Roswell, Johns Creek, Sandy Springs, Milton, Cumming, and surrounding cities. Mobile services dispatch licensed nurses to your home, office, hotel, or event venue, typically arriving within 45-60 minutes of booking. Popular mobile providers in the area include HydraMed, Mobile IV Medics, and several locally-owned services." },
      { q: "What cities in North Atlanta have IV therapy clinics?", a: "IV therapy clinics and services are available throughout the North Atlanta metro, including Alpharetta, Roswell, Johns Creek, Sandy Springs, Cumming, Dunwoody, Milton, Suwanee, Marietta, Woodstock, Peachtree Corners, and Duluth. Some cities have more brick-and-mortar options (Alpharetta and Roswell lead the market), while others are primarily served by mobile IV providers. IV Ranker covers all 12 of these cities." },
      { q: "How do I choose between IV therapy providers in my area?", a: "Look for providers with a named medical director, licensed nursing staff (ideally with ER or infusion center experience), a health screening process before treatment, ingredients sourced from FDA-registered compounding pharmacies, transparent pricing, and positive patient reviews. IV Ranker lists verified providers across 12 North Atlanta cities so you can compare options, specialties, and pricing in one place." },
    ]
  },
  {
    slug: "preparation",
    name: "Before & After Your Session",
    icon: "📋",
    description: "How to prepare for IV therapy and what to do afterward.",
    questions: [
      { q: "How should I prepare for my IV therapy appointment?", a: "Eat a light meal 1-2 hours before your appointment — arriving on an empty stomach can cause lightheadedness. Stay well-hydrated beforehand, as hydrated veins are easier to access. Wear a short-sleeved shirt or something with sleeves you can easily roll up. Bring your phone, a book, or work materials since you'll be sitting for 30-60 minutes. Arrive a few minutes early for paperwork if it's your first visit." },
      { q: "What should I do after an IV therapy session?", a: "Drink water to continue hydrating. Eat a normal meal if you're hungry. You can resume all normal activities immediately — there's no downtime. Avoid intense exercise for a few hours if you had a large-volume infusion. Leave the small bandage on for 15-30 minutes to prevent bruising. Some people feel an energy boost right away; others notice gradual improvement over the following hours or days." },
      { q: "Can I drive after IV therapy?", a: "Yes. Standard IV therapy does not impair your ability to drive. You can drive yourself to and from your appointment. The only exception would be if you had a reaction (extremely rare) or if your treatment included sedating medications (uncommon in standard wellness IVs). If you're getting a hangover IV and were recently intoxicated, make sure you're sober enough to drive regardless of the treatment." },
      { q: "Can I eat or drink during IV therapy?", a: "Yes. You can eat snacks, drink water or coffee, and consume anything you normally would during your IV session. In fact, staying hydrated during the infusion is encouraged. Many IV clinics offer water, tea, or light refreshments to clients during their sessions." },
      { q: "How long do the effects of IV therapy last?", a: "This varies by treatment and individual. Hydration benefits are often felt immediately and last 1-3 days. Energy improvements from vitamin infusions typically last several days to a week. Immune-supporting effects may persist for 1-2 weeks. NAD+ benefits are often cumulative, building over a series of treatments. The duration depends on your baseline health, lifestyle, and how quickly your body metabolizes the nutrients." },
    ]
  },
];

// Helper functions
export function getAllFaqCategories() {
  return faqCategories;
}

export function getFaqCategory(slug) {
  return faqCategories.find(c => c.slug === slug) || null;
}

export function getAllFaqQuestions() {
  return faqCategories.flatMap(cat =>
    cat.questions.map(q => ({ ...q, category: cat.name, categorySlug: cat.slug }))
  );
}

export function getTotalQuestionCount() {
  return faqCategories.reduce((sum, cat) => sum + cat.questions.length, 0);
}
