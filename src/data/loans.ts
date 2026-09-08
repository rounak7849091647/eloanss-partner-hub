export type Loan = {
  slug: string;
  name: string;
  short: string;
  intro: string;
  rate: string;
  tenure: string;
  amount: string;
  benefits: string[];
  eligibility: string[];
  documents: string[];
  features: string[];
  faqs: { q: string; a: string }[];
};

const commonDocs = [
  "PAN card and Aadhaar (or any valid address proof)",
  "Recent passport-size photographs",
  "Last 6 months bank statements",
  "Income proof — salary slips or ITR with computation",
];

const salariedEligibility = [
  "Indian resident aged 21 to 60 years",
  "Salaried with at least 1 year of total work experience",
  "Minimum net monthly income of ₹20,000",
  "CIBIL score of 700 or above preferred",
];

const businessEligibility = [
  "Business vintage of at least 2 years",
  "Applicant aged 23 to 65 years",
  "Audited or ITR-filed turnover for the last 2 years",
  "Stable repayment track record and CIBIL 700+",
];

export const loans: Loan[] = [
  {
    slug: "personal-loan",
    name: "Personal Loan",
    short: "Unsecured funds for weddings, education, travel or emergencies.",
    intro:
      "A personal loan gives you ready funds without pledging any asset. We compare offers from banks and NBFCs so you get the lowest rate your profile qualifies for, with clear fees and no hidden charges.",
    rate: "10.25% – 18% p.a.",
    tenure: "12 – 72 months",
    amount: "₹50,000 – ₹40 Lakh",
    benefits: [
      "No collateral or guarantor required",
      "Approval decisions in as little as 24 hours",
      "Free eligibility check with no impact on your plans",
      "Flexible tenure so the EMI fits your monthly budget",
      "Balance transfer option to reduce an existing high-rate loan",
    ],
    eligibility: salariedEligibility,
    documents: commonDocs,
    features: [
      "Fully digital application and tracking",
      "Part-prepayment allowed with most lenders",
      "Dedicated advisor from enquiry to disbursal",
    ],
    faqs: [
      {
        q: "How fast can a personal loan be disbursed?",
        a: "For a complete file with clean documents, sanction usually comes within 24–48 hours and disbursal within 2–4 working days.",
      },
      {
        q: "Does ELOANSS charge the customer any fee?",
        a: "We tell you every applicable charge in writing before you apply. Lender processing fees are deducted by the bank; there are no hidden broker charges.",
      },
      {
        q: "What CIBIL score do I need?",
        a: "700 and above gives the best pricing. We also work with lenders who consider 650+ profiles at a slightly higher rate.",
      },
      {
        q: "Can I prepay or foreclose the loan?",
        a: "Yes. Most lenders allow foreclosure after 6–12 EMIs, with charges between 0% and 4% of the outstanding amount.",
      },
      {
        q: "Can self-employed applicants apply?",
        a: "Yes, with 2 years of ITR and bank statements showing consistent business income.",
      },
      {
        q: "Will multiple applications hurt my credit score?",
        a: "We shortlist the best-fit lender first, so your file is submitted where approval odds are highest instead of applying everywhere.",
      },
    ],
  },
  {
    slug: "business-loan",
    name: "Business Loan",
    short: "Working capital and expansion finance for MSMEs and firms.",
    intro:
      "Fund inventory, payroll, new machinery or a new branch with structured business finance. We match your cash-flow cycle to the right product — term loan, working capital or unsecured business loan.",
    rate: "11% – 20% p.a.",
    tenure: "12 – 84 months",
    amount: "₹2 Lakh – ₹5 Crore",
    benefits: [
      "Collateral-free options up to ₹50 Lakh",
      "Structured repayment aligned to your cash flow",
      "Top-up facility as your turnover grows",
      "GST and banking-based assessment for faster approval",
      "Support with MSME and government-linked schemes",
    ],
    eligibility: businessEligibility,
    documents: [
      "PAN and Aadhaar of proprietor / partners / directors",
      "Business registration, GST certificate and GST returns",
      "Last 2 years ITR with audited financials",
      "Last 12 months current account statements",
    ],
    features: [
      "Term loan, overdraft and invoice-backed options",
      "Multi-lender comparison in one enquiry",
      "Assistance with projections and CMA data",
    ],
    faqs: [
      {
        q: "Is collateral mandatory for a business loan?",
        a: "Not always. Unsecured business loans are available up to about ₹50 Lakh based on turnover and banking behaviour.",
      },
      {
        q: "How much turnover do I need?",
        a: "Most lenders look for annual turnover of ₹20 Lakh or more with 2 years of filed returns.",
      },
      {
        q: "Can a new business apply?",
        a: "Businesses under 2 years old can explore project loans or secured facilities against property or deposits.",
      },
      {
        q: "How is the loan amount decided?",
        a: "Lenders assess turnover, profit margins, existing obligations and bank statement conduct to set the limit.",
      },
      {
        q: "How long does approval take?",
        a: "Unsecured loans typically 3–7 working days; secured facilities 2–4 weeks including valuation and legal checks.",
      },
      {
        q: "Do you help with rejected applications?",
        a: "Yes. We review why the file was declined, fix the gaps and place it with a lender whose policy fits your profile.",
      },
    ],
  },
  {
    slug: "home-loan",
    name: "Home Loan / Mortgage Loan",
    short: "Buy, build, renovate or transfer your home loan at a better rate.",
    intro:
      "Home finance is a long commitment, so a small rate difference matters. We compare housing finance companies and banks on rate, processing fee and prepayment terms, and manage the legal and valuation process for you.",
    rate: "8.35% – 10.5% p.a.",
    tenure: "Up to 30 years",
    amount: "₹5 Lakh – ₹10 Crore",
    benefits: [
      "Long tenure keeps EMIs comfortable",
      "Tax benefits under Sections 24(b) and 80C",
      "Balance transfer with top-up for existing borrowers",
      "Up to 90% funding on property value for eligible profiles",
      "Joint application to increase eligibility",
    ],
    eligibility: [
      "Salaried or self-employed Indian resident or NRI",
      "Aged 21 to 65 years at loan maturity",
      "Stable income for at least 2 years",
      "Clear and marketable property title",
    ],
    documents: [
      ...commonDocs,
      "Sale agreement / allotment letter and property chain documents",
      "Approved building plan and latest tax receipt",
    ],
    features: [
      "Fixed and floating rate options",
      "Under-construction and resale property funding",
      "Guidance on stamp duty, registration and legal checks",
    ],
    faqs: [
      {
        q: "How much of the property value can I borrow?",
        a: "Typically 75%–90% of the agreement value depending on loan size, property type and your income profile.",
      },
      {
        q: "What is a balance transfer?",
        a: "Moving your existing home loan to a lender offering a lower rate, often with an additional top-up loan.",
      },
      {
        q: "Are NRIs eligible?",
        a: "Yes. NRI home loans need passport, visa, overseas income proof and a power of attorney holder in India.",
      },
      {
        q: "Which charges should I expect?",
        a: "Processing fee (0.25%–1%), legal and technical valuation, stamp duty on documents, and insurance if opted.",
      },
      {
        q: "Can I add a co-applicant?",
        a: "Yes, and combining incomes usually increases the sanctioned amount. Co-owners must be co-applicants.",
      },
      {
        q: "How long does sanction take?",
        a: "Income approval in 3–5 days; full disbursal after legal and technical clearance, usually 2–4 weeks.",
      },
    ],
  },
  {
    slug: "open-plot-loan",
    name: "Open Plot Loan",
    short: "Finance for residential land purchase with optional construction funding.",
    intro:
      "Buying land is the first step to your own home. A plot loan funds the purchase of an approved residential plot, and can be converted into a composite loan when you start construction.",
    rate: "8.75% – 11.5% p.a.",
    tenure: "Up to 20 years",
    amount: "₹3 Lakh – ₹5 Crore",
    benefits: [
      "Up to 70%–75% of plot value funded",
      "Composite loan covering plot plus construction",
      "Tax benefits once construction is complete",
      "Approved-layout plots processed faster",
    ],
    eligibility: [
      "Indian resident aged 21 to 60 years",
      "Plot within municipal or approved layout limits",
      "Clear title with no litigation",
      "Stable income for at least 2 years",
    ],
    documents: [
      ...commonDocs,
      "Plot sale deed / agreement and layout approval",
      "Encumbrance certificate and latest tax receipt",
    ],
    features: [
      "Construction-linked disbursal option",
      "Title verification support",
      "Higher tenure when converted to a home loan",
    ],
    faqs: [
      {
        q: "Can I buy agricultural land with this loan?",
        a: "No. Lenders fund only non-agricultural, approved residential plots.",
      },
      {
        q: "Is there a deadline to start construction?",
        a: "Most lenders expect construction to begin within 2–3 years of disbursal for composite loans.",
      },
      {
        q: "Do plot loans get tax benefits?",
        a: "Interest deduction applies only after the house is built and possession is taken.",
      },
      {
        q: "What margin money do I need?",
        a: "Plan for 25%–30% of the plot cost from your own funds, plus registration charges.",
      },
      {
        q: "Are gram panchayat plots funded?",
        a: "Some NBFCs consider them with proper approvals; bank policies are usually stricter.",
      },
    ],
  },
  {
    slug: "new-car-loan",
    name: "New Car Loan",
    short: "Up to 100% on-road funding for your new car.",
    intro:
      "Drive home your new car without draining your savings. We arrange competitive new car finance with quick approval and dealer coordination so delivery is not delayed.",
    rate: "8.5% – 12% p.a.",
    tenure: "12 – 84 months",
    amount: "₹1 Lakh – ₹1.5 Crore",
    benefits: [
      "Up to 100% on-road price funding for strong profiles",
      "Same-day in-principle approval",
      "Zero foreclosure charges with select lenders",
      "Bundled motor insurance at partner rates",
    ],
    eligibility: salariedEligibility,
    documents: [...commonDocs, "Vehicle quotation / proforma invoice from the dealer"],
    features: ["Dealer tie-up coordination", "Flexible EMI dates", "Insurance and extended warranty add-ons"],
    faqs: [
      {
        q: "Can I get 100% funding?",
        a: "Yes, for salaried applicants with strong credit history; most profiles get 85%–95% of the on-road price.",
      },
      {
        q: "Is the car hypothecated to the lender?",
        a: "Yes, hypothecation is noted in the RC and removed after you close the loan.",
      },
      { q: "How fast is approval?", a: "In-principle approval often the same day; disbursal to the dealer in 2–3 working days." },
      { q: "Can I choose a shorter tenure?", a: "Yes. A shorter tenure means a higher EMI but noticeably lower total interest." },
      { q: "Is insurance mandatory?", a: "Comprehensive motor insurance is mandatory for the entire loan period." },
    ],
  },
  {
    slug: "used-car-loan",
    name: "Used Car Loan",
    short: "Pre-owned car finance with quick valuation and approval.",
    intro:
      "Buying pre-owned is smart if the finance is structured well. We arrange used car loans with fair valuation, transparent rates and support on RC transfer and insurance.",
    rate: "11% – 16% p.a.",
    tenure: "12 – 60 months",
    amount: "₹75,000 – ₹50 Lakh",
    benefits: [
      "Up to 85% of valuation funded",
      "Cars up to 10 years old considered",
      "Dealer and private-sale purchases supported",
      "Fast valuation and documentation help",
    ],
    eligibility: [...salariedEligibility, "Vehicle age plus loan tenure within lender limits"],
    documents: [...commonDocs, "Original RC, insurance copy and valuation report", "Sale agreement with the seller"],
    features: ["Private-sale funding", "RC transfer assistance", "Insurance transfer support"],
    faqs: [
      { q: "How old a car can be financed?", a: "Usually up to 8–10 years at the end of the loan tenure, depending on the lender." },
      { q: "Who decides the car's value?", a: "A lender-empanelled valuer inspects the car; funding is a percentage of that value." },
      { q: "Can I buy from an individual?", a: "Yes. We help structure the payment and RC transfer safely." },
      { q: "Is the rate higher than a new car loan?", a: "Slightly, because used-car risk and depreciation are higher." },
      { q: "Are commercial-use cars covered?", a: "Those are financed as commercial vehicles with different norms." },
    ],
  },
  {
    slug: "two-wheeler-loan",
    name: "Two-Wheeler Loan",
    short: "Easy bike and scooter finance with low down payment.",
    intro:
      "Get on the road quickly with two-wheeler finance that keeps the down payment low and EMIs affordable, including options for first-time borrowers.",
    rate: "9.5% – 21% p.a.",
    tenure: "12 – 48 months",
    amount: "₹20,000 – ₹5 Lakh",
    benefits: [
      "Up to 95% on-road funding",
      "Minimal documentation and quick approval",
      "Options for applicants with limited credit history",
      "EMIs starting under ₹1,500 for entry models",
    ],
    eligibility: [
      "Indian resident aged 18 to 60 years",
      "Salaried or self-employed with regular income",
      "Valid ID and address proof",
      "Minimum monthly income of ₹12,000",
    ],
    documents: [
      "PAN and Aadhaar",
      "3 months bank statement or salary slips",
      "Dealer quotation for the vehicle",
      "Passport-size photographs",
    ],
    features: ["Approval at the dealership", "Flexible tenure", "Insurance bundled at partner rates"],
    faqs: [
      { q: "Can a student apply?", a: "Yes, with a co-applicant who has stable, provable income." },
      { q: "Is a credit score mandatory?", a: "New-to-credit applicants are considered, usually at a higher rate." },
      { q: "How long does it take?", a: "Often same-day approval at partner dealerships." },
      { q: "Are electric two-wheelers financed?", a: "Yes, and some lenders offer concessional rates on EVs." },
      { q: "Can I prepay?", a: "Yes, generally after 6 EMIs with a small foreclosure charge." },
    ],
  },
  {
    slug: "commercial-vehicle-loan",
    name: "Commercial Vehicle Loan",
    short: "Finance for goods carriers, pickups and passenger vehicles.",
    intro:
      "Grow your fleet with commercial vehicle finance built around earning cycles. We arrange funding for new and used vehicles for first-time buyers, retail operators and fleet owners.",
    rate: "10.5% – 18% p.a.",
    tenure: "12 – 60 months",
    amount: "₹1 Lakh – ₹1 Crore",
    benefits: [
      "Up to 90% chassis and body funding",
      "First-time buyer programmes available",
      "Repayment aligned to route earnings",
      "Refinance option on owned vehicles",
    ],
    eligibility: [
      "Aged 21 to 65 years with valid commercial licence or driver arrangement",
      "Existing operators: 1+ year of transport experience",
      "Bank statements showing route or contract income",
      "Satisfactory repayment record on existing vehicles",
    ],
    documents: [
      ...commonDocs,
      "Vehicle quotation, permit and route details",
      "Existing fleet RC copies, if any",
    ],
    features: ["New and used vehicle funding", "Top-up and refinance", "Insurance arranged alongside the loan"],
    faqs: [
      { q: "Can a first-time buyer get finance?", a: "Yes, with driving experience, a route or contract plan and slightly higher margin money." },
      { q: "Is a permit required before sanction?", a: "Permit and fitness details are needed before disbursal for most vehicle categories." },
      { q: "Can I refinance an owned vehicle?", a: "Yes, refinance releases cash against a vehicle you already own." },
      { q: "What margin money is expected?", a: "Typically 10%–25% depending on vehicle type and your experience." },
      { q: "Is insurance included?", a: "Comprehensive commercial vehicle insurance is mandatory; we arrange it at partner rates." },
    ],
  },
  {
    slug: "heavy-commercial-vehicle-loan",
    name: "Heavy Commercial Vehicle Loan",
    short: "Trucks, tippers, trailers and construction equipment finance.",
    intro:
      "Heavy vehicles are large investments with long earning cycles. We structure HCV finance with the right tenure, margin and insurance so your monthly outflow stays predictable.",
    rate: "10% – 16.5% p.a.",
    tenure: "24 – 72 months",
    amount: "₹5 Lakh – ₹5 Crore",
    benefits: [
      "Funding for trucks, tippers, trailers and tankers",
      "Multi-vehicle and fleet limits",
      "Body-building cost included in funding",
      "Construction equipment finance available",
    ],
    eligibility: [
      "Transport business vintage of 2+ years preferred",
      "Aged 23 to 65 years",
      "Contract, load or route documentation",
      "Clean repayment track record on existing assets",
    ],
    documents: [
      "KYC of proprietor / partners / directors",
      "Business proof, GST and 2 years ITR",
      "12 months bank statements",
      "Vehicle quotation, body-builder estimate and permit papers",
    ],
    features: ["Fleet-level sanction limits", "Seasonal repayment structuring", "Dedicated relationship manager"],
    faqs: [
      { q: "Is body-building cost funded?", a: "Yes, many lenders fund chassis plus body cost as a single facility." },
      { q: "Can I finance several trucks together?", a: "Yes, fleet limits let you draw down as each vehicle is purchased." },
      { q: "Is construction equipment covered?", a: "Yes — excavators, cranes, loaders and similar assets are funded under equipment finance." },
      { q: "What tenure works best?", a: "48–60 months usually balances EMI affordability against total interest." },
      { q: "Are used trucks financed?", a: "Yes, subject to age, valuation and fitness certification." },
    ],
  },
  {
    slug: "project-loan",
    name: "Project Loan",
    short: "Long-term funding for plants, expansion and infrastructure.",
    intro:
      "Project finance funds capital expenditure — a new unit, plant modernisation or capacity expansion — assessed on projected cash flows. We help you build the case and place it with the right lender.",
    rate: "10% – 16% p.a.",
    tenure: "3 – 15 years",
    amount: "₹25 Lakh – ₹100 Crore",
    benefits: [
      "Moratorium during the construction period",
      "Term loan plus working capital structured together",
      "Support with project reports and CMA data",
      "Eligible for government and MSME subsidy schemes",
    ],
    eligibility: [
      "Registered company, LLP or partnership firm",
      "Promoter contribution of 20%–30% of project cost",
      "Detailed project report with viable projections",
      "Land, approvals and clearances in place or in progress",
    ],
    documents: [
      "Company KYC, incorporation and ownership documents",
      "Detailed project report and cost estimates",
      "3 years financials and ITR of the entity and promoters",
      "Land documents, approvals and quotations for plant and machinery",
    ],
    features: ["Consortium and multi-lender structuring", "Subsidy and scheme guidance", "Drawdown planning"],
    faqs: [
      { q: "How much do I need to invest myself?", a: "Promoter contribution is usually 20%–30% of total project cost." },
      { q: "What is a moratorium?", a: "A pause on principal repayment while the project is being built and revenue has not started." },
      { q: "How long does appraisal take?", a: "Typically 4–10 weeks depending on project size and documentation readiness." },
      { q: "Do you prepare the project report?", a: "We guide the structure and review the numbers with you before submission." },
      { q: "Is collateral required?", a: "Yes — project assets are charged, and additional security may be sought." },
    ],
  },
  {
    slug: "overdraft-loan",
    name: "OD / Overdraft Loan",
    short: "Flexible credit limit where you pay interest only on usage.",
    intro:
      "An overdraft gives you a sanctioned limit you can draw and repay freely. Interest is charged only on the amount used for the days used — ideal for managing payment cycles.",
    rate: "9.5% – 16% p.a.",
    tenure: "12 months, renewable",
    amount: "₹1 Lakh – ₹10 Crore",
    benefits: [
      "Interest only on the utilised amount",
      "Unlimited withdrawals and repayments within the limit",
      "Secured and unsecured options",
      "Annual renewal with limit enhancement",
    ],
    eligibility: [
      "Business vintage of 2+ years, or salaried with an eligible security",
      "Aged 23 to 65 years",
      "Consistent banking turnover",
      "Security such as property, FD or receivables for secured limits",
    ],
    documents: [
      "KYC documents of applicant and co-applicants",
      "Business proof, GST returns and 2 years ITR",
      "12 months current account statements",
      "Security documents for secured overdrafts",
    ],
    features: ["Dropline and regular OD variants", "Digital limit tracking", "Renewal support each year"],
    faqs: [
      { q: "How is OD interest calculated?", a: "Daily, on the utilised balance only. No usage means no interest." },
      { q: "What is a dropline OD?", a: "A limit that reduces every month, combining overdraft flexibility with term-loan discipline." },
      { q: "Is property mandatory?", a: "No. Unsecured overdrafts are available on turnover and banking conduct." },
      { q: "Can the limit be increased?", a: "Yes, at annual renewal based on turnover and conduct." },
      { q: "Are there non-usage charges?", a: "Some lenders levy a small commitment charge on unused limits — we disclose this upfront." },
    ],
  },
  {
    slug: "gold-loan",
    name: "Gold Loan",
    short: "Instant funds against gold jewellery with secure storage.",
    intro:
      "Turn idle gold into same-day funds. Valuation happens in front of you, your jewellery is stored in an insured vault, and you get it back intact once the loan is closed.",
    rate: "8.5% – 18% p.a.",
    tenure: "3 – 36 months",
    amount: "₹10,000 – ₹2 Crore",
    benefits: [
      "Disbursal within an hour of valuation",
      "No income proof or credit score required",
      "Up to 75% of gold value as per RBI norms",
      "Insured vault storage of your jewellery",
    ],
    eligibility: [
      "Indian resident aged 18 years or above",
      "Owner of the gold being pledged",
      "Gold purity between 18 and 22 carats",
      "Valid ID and address proof",
    ],
    documents: ["PAN or Form 60", "Aadhaar or other valid address proof", "Passport-size photograph", "Gold jewellery for valuation"],
    features: ["Interest-only repayment plans", "Part-release of pledged gold", "Transparent, witnessed valuation"],
    faqs: [
      { q: "How much can I get per gram?", a: "Up to 75% of the market value of the gold content, as permitted by RBI." },
      { q: "Is my jewellery safe?", a: "Yes. It is sealed, insured and stored in a strong room, returned in the same condition." },
      { q: "Do you accept gold coins or bars?", a: "Bank-minted coins up to 50 grams are accepted by most lenders; bars usually are not." },
      { q: "Is a credit score needed?", a: "No. The loan is secured by gold, so income and score checks are minimal." },
      { q: "What if I cannot repay on time?", a: "Talk to us early — renewal, part-payment or interest-only options usually avoid auction." },
    ],
  },
];

export const loanBySlug = (slug: string) => loans.find((l) => l.slug === slug);
