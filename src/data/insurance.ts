export type Insurance = {
  slug: string;
  name: string;
  short: string;
  intro: string;
  cover: string;
  benefits: string[];
  whoFor: string[];
  faqs: { q: string; a: string }[];
};

export const insurances: Insurance[] = [
  {
    slug: "life-insurance",
    name: "Life Insurance",
    short: "Long-term protection with savings and maturity benefits.",
    intro:
      "Life insurance protects your family's income and can also build a corpus for goals like education or retirement. We compare endowment, ULIP and guaranteed-return plans and explain exactly what you are paying for.",
    cover: "₹5 Lakh – ₹5 Crore",
    benefits: [
      "Financial security for your family",
      "Maturity or survival benefits on savings plans",
      "Tax benefits under Sections 80C and 10(10D)",
      "Optional riders for accident and critical illness",
    ],
    whoFor: ["Sole earners in a family", "Parents planning long-term goals", "Anyone with a home loan or other liability"],
    faqs: [
      { q: "How much cover do I need?", a: "A common benchmark is 10–15 times your annual income, plus outstanding loans." },
      { q: "Endowment or term plan?", a: "Term gives the highest cover per rupee; endowment adds savings. Many families use both." },
      { q: "Can I pay annually?", a: "Yes — annual, half-yearly, quarterly and monthly modes are available." },
      { q: "What if I miss a premium?", a: "Most policies have a 15–30 day grace period and can be revived within a set window." },
      { q: "Are medical tests required?", a: "Depends on age and cover amount; higher cover usually needs a health check." },
    ],
  },
  {
    slug: "health-insurance",
    name: "Health Insurance",
    short: "Cashless hospitalisation cover for you and your family.",
    intro:
      "Medical costs rise faster than income. A good health policy covers hospitalisation, day-care procedures and pre/post treatment expenses with cashless access at network hospitals.",
    cover: "₹3 Lakh – ₹1 Crore",
    benefits: [
      "Cashless treatment at network hospitals",
      "Family floater covers everyone in one policy",
      "No-claim bonus increases your cover each year",
      "Tax deduction under Section 80D",
    ],
    whoFor: ["Families with children or elderly parents", "Self-employed professionals without group cover", "Anyone relying only on an employer policy"],
    faqs: [
      { q: "What is a waiting period?", a: "Pre-existing conditions are typically covered after 2–4 years of continuous cover." },
      { q: "Individual or family floater?", a: "Floaters are cheaper for young families; separate policies suit older members." },
      { q: "Is maternity covered?", a: "Selected plans cover maternity after a 2–4 year waiting period." },
      { q: "Can I port my existing policy?", a: "Yes, at renewal, and accumulated waiting-period credit carries over." },
      { q: "What is a room-rent limit?", a: "A cap on eligible room charges. We recommend plans without restrictive caps." },
    ],
  },
  {
    slug: "term-insurance",
    name: "Term Insurance",
    short: "Maximum life cover at the lowest possible premium.",
    intro:
      "Term insurance is pure protection: a large sum assured for a small premium. It is the most efficient way to make sure your family's lifestyle and loans are secure if something happens to you.",
    cover: "₹25 Lakh – ₹10 Crore",
    benefits: [
      "Very high cover for a low annual premium",
      "Level, increasing or return-of-premium options",
      "Riders for critical illness and accidental disability",
      "Tax benefit under Section 80C",
    ],
    whoFor: ["Young earners starting a family", "Home loan borrowers", "Business owners with liabilities"],
    faqs: [
      { q: "Until what age should I take cover?", a: "Ideally until your planned retirement age or until major loans are repaid." },
      { q: "Why is term cover so cheap?", a: "There is no savings component — the entire premium goes towards risk cover." },
      { q: "Does it pay anything if I survive?", a: "Standard term plans do not; return-of-premium variants refund premiums at maturity." },
      { q: "Is smoking declaration important?", a: "Yes. Non-disclosure is the most common reason claims get rejected." },
      { q: "Can cover be increased later?", a: "Yes, at life stages like marriage or childbirth if the plan allows, or through a second policy." },
    ],
  },
  {
    slug: "travel-insurance",
    name: "Travel Insurance",
    short: "Medical, baggage and trip protection anywhere in the world.",
    intro:
      "From a visa requirement to a genuine medical emergency abroad, travel insurance keeps a trip from becoming a financial setback. Single-trip and multi-trip options for students, families and business travellers.",
    cover: "USD 50,000 – USD 500,000",
    benefits: [
      "Emergency medical and hospitalisation abroad",
      "Trip cancellation and delay compensation",
      "Lost baggage and passport assistance",
      "Schengen and student visa compliant plans",
    ],
    whoFor: ["International holiday travellers", "Students going abroad", "Frequent business flyers"],
    faqs: [
      { q: "Is it mandatory?", a: "For Schengen and several other visas, yes. Elsewhere it is optional but strongly advised." },
      { q: "Are pre-existing conditions covered?", a: "Only life-threatening emergencies, in most plans. Declare conditions upfront." },
      { q: "Can I extend the policy mid-trip?", a: "Yes, most insurers allow extension before the policy expires." },
      { q: "Does it cover domestic travel?", a: "Separate domestic travel plans are available." },
      { q: "How do I claim abroad?", a: "Call the insurer's 24x7 helpline for cashless approval at the treating hospital." },
    ],
  },
  {
    slug: "property-insurance",
    name: "Property Insurance",
    short: "Cover for home, office, shop, stock and machinery.",
    intro:
      "Protect the building and its contents against fire, burglary, flood, earthquake and accidental damage. Essential for homeowners as well as shops, warehouses and manufacturing units.",
    cover: "₹5 Lakh – ₹50 Crore",
    benefits: [
      "Fire, flood, earthquake and burglary cover",
      "Contents, stock and machinery protection",
      "Rent-for-alternate-accommodation option",
      "Public liability add-ons for commercial premises",
    ],
    whoFor: ["Homeowners and landlords", "Shop and showroom owners", "Warehouse and factory operators"],
    faqs: [
      { q: "Is tenant property covered?", a: "Yes, tenants can insure contents while the owner insures the structure." },
      { q: "How is the sum insured decided?", a: "Reinstatement cost of the structure plus the value of contents and stock." },
      { q: "Is business interruption covered?", a: "Available as an add-on on commercial policies." },
      { q: "Are long-term policies available?", a: "Yes, multi-year home policies usually cost less per year." },
      { q: "What is excluded?", a: "Wear and tear, wilful damage and unoccupied-premises losses beyond the stated period." },
    ],
  },
  {
    slug: "vehicle-insurance",
    name: "Vehicle Insurance",
    short: "Comprehensive motor cover with cashless garage network.",
    intro:
      "Mandatory by law and vital in practice. We compare comprehensive motor plans on claim settlement record, garage network and add-ons — not just on premium.",
    cover: "IDV based + ₹15 Lakh owner cover",
    benefits: [
      "Third-party and own-damage protection",
      "Cashless repairs at network garages",
      "Zero-depreciation and engine protect add-ons",
      "No-claim bonus transfer on renewal",
    ],
    whoFor: ["Car and two-wheeler owners", "New vehicle buyers", "Owners with lapsed policies"],
    faqs: [
      { q: "Third-party or comprehensive?", a: "Third-party is the legal minimum; comprehensive also covers damage to your own vehicle." },
      { q: "What is IDV?", a: "Insured Declared Value — the current market value used as the maximum claim payout." },
      { q: "Is zero-depreciation worth it?", a: "Yes for vehicles under 5 years; it significantly increases claim payouts." },
      { q: "Can I renew a lapsed policy?", a: "Yes, usually after a vehicle inspection." },
      { q: "Does NCB carry to a new car?", a: "Yes, your accumulated no-claim bonus transfers to your next vehicle." },
    ],
  },
  {
    slug: "heavy-vehicle-insurance",
    name: "Heavy Vehicle Insurance",
    short: "Fleet and commercial vehicle cover including goods in transit.",
    intro:
      "Trucks and buses face higher exposure and stricter liability. We arrange commercial motor cover with legal liability for drivers and cleaners, and optional goods-in-transit protection.",
    cover: "IDV based + statutory liability",
    benefits: [
      "Fleet policies under a single renewal date",
      "Legal liability cover for driver, cleaner and helper",
      "Goods-in-transit add-on",
      "Pan-India cashless garage and workshop network",
    ],
    whoFor: ["Fleet owners and transporters", "Single-truck operators", "Construction equipment owners"],
    faqs: [
      { q: "Is goods-in-transit included?", a: "It is a separate cover or add-on; we advise based on the cargo you carry." },
      { q: "Can I insure a whole fleet together?", a: "Yes, fleet policies simplify renewals and often reduce premium." },
      { q: "Are drivers covered?", a: "Yes, through statutory legal liability and optional personal accident cover." },
      { q: "Does the permit type matter?", a: "Yes, national and state permits carry different risk pricing." },
      { q: "How fast are claims settled?", a: "With complete documents, typically 7–21 days depending on survey and repair time." },
    ],
  },
];

export const insuranceBySlug = (slug: string) => insurances.find((i) => i.slug === slug);
