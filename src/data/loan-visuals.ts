import businessLoan from "@/assets/business-loan.jpg";
import homeLoan from "@/assets/home-loan.jpg";
import personalLoan from "@/assets/personal-loan.jpg";
import securedLoan from "@/assets/secured-loan.jpg";
import vehicleLoan from "@/assets/vehicle-loan.jpg";

export type LoanCategory = "Personal" | "Property" | "Business" | "Vehicle" | "Secured";

type LoanVisual = {
  image: string;
  alt: string;
  category: LoanCategory;
  bestFor: string;
  security: string;
  processing: string;
};

const personal: LoanVisual = {
  image: personalLoan,
  alt: "Professional reviewing a personal loan plan at home",
  category: "Personal",
  bestFor: "Planned expenses and urgent personal needs",
  security: "No collateral",
  processing: "Typically 2–4 working days",
};

const business: LoanVisual = {
  image: businessLoan,
  alt: "Business owners reviewing expansion finance",
  category: "Business",
  bestFor: "Working capital, equipment and expansion",
  security: "Secured and unsecured options",
  processing: "Typically 3–15 working days",
};

const property: LoanVisual = {
  image: homeLoan,
  alt: "Couple celebrating their new home purchase",
  category: "Property",
  bestFor: "Purchase, construction, plot or renovation",
  security: "Property-backed",
  processing: "Typically 2–4 weeks",
};

const vehicle: LoanVisual = {
  image: vehicleLoan,
  alt: "Customer receiving a new car at a dealership",
  category: "Vehicle",
  bestFor: "New, used and commercial vehicles",
  security: "Vehicle hypothecation",
  processing: "Typically 2–7 working days",
};

const secured: LoanVisual = {
  image: securedLoan,
  alt: "Family discussing secured finance with an advisor",
  category: "Secured",
  bestFor: "Liquidity backed by property or gold",
  security: "Asset-backed",
  processing: "Typically same day to 3 weeks",
};

export const loanVisuals: Record<string, LoanVisual> = {
  "personal-loan": personal,
  "business-loan": business,
  "home-loan": property,
  "open-plot-loan": property,
  "new-car-loan": vehicle,
  "used-car-loan": vehicle,
  "two-wheeler-loan": vehicle,
  "commercial-vehicle-loan": vehicle,
  "heavy-commercial-vehicle-loan": vehicle,
  "project-loan": business,
  "overdraft-loan": business,
  "gold-loan": secured,
};

export const loanCategories: Array<"All" | LoanCategory> = [
  "All",
  "Personal",
  "Property",
  "Business",
  "Vehicle",
  "Secured",
];

export const loanGuideFaqs = [
  {
    q: "How do I choose the right type of loan?",
    a: "Start with the purpose, then compare whether collateral is available, how quickly funds are needed, and what EMI your monthly budget can support. ELOANSS can shortlist products before your application is submitted.",
  },
  {
    q: "Does checking eligibility affect my credit score?",
    a: "A preliminary conversation and document review does not require multiple lender applications. A lender may perform a formal credit enquiry when you choose to proceed.",
  },
  {
    q: "What decides my final interest rate?",
    a: "Credit history, income stability, existing obligations, loan amount, tenure, employer or business profile, and the security offered all influence the final lender quote.",
  },
  {
    q: "Should I choose a shorter or longer tenure?",
    a: "A longer tenure reduces the monthly EMI but increases total interest. Choose an EMI that leaves room for regular expenses and emergencies, then prepay when your lender terms make it worthwhile.",
  },
  {
    q: "What costs should I compare beyond the interest rate?",
    a: "Compare processing fees, insurance, valuation and legal charges, prepayment rules, late-payment fees, rate-reset terms, and the total repayment amount—not only the headline rate.",
  },
];

export function getLoanVisual(slug: string) {
  return loanVisuals[slug] ?? personal;
}