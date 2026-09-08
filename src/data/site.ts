export const site = {
  name: "ELOANSS",
  tagline: "Your Trusted Partner for Loans, Insurance & Investments",
  phone: "+91 90000 00000",
  phoneHref: "tel:+919000000000",
  whatsapp: "919000000000",
  email: "support@eloanss.com",
  address: "3rd Floor, Fintech Tower, Banjara Hills Road No. 12, Hyderabad, Telangana 500034, India",
  hours: "Mon – Sat: 9:30 AM – 7:00 PM | Sunday: Closed",
  mapQuery: "Banjara Hills Road No 12, Hyderabad, Telangana 500034",
};

export const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  "Hi ELOANSS, I would like to know more about your loan and insurance services.",
)}`;

export const partnerBanks = [
  "HDFC Bank",
  "ICICI Bank",
  "Axis Bank",
  "Kotak Mahindra",
  "SBI",
  "Bajaj Finserv",
  "Tata Capital",
  "IDFC First",
];

export const testimonials = [
  {
    name: "Ramesh Kulkarni",
    city: "Pune",
    role: "Business Owner",
    quote:
      "My working capital loan was sanctioned in six days. The team explained every charge upfront — no surprises at all.",
  },
  {
    name: "Sneha Reddy",
    city: "Hyderabad",
    role: "Software Engineer",
    quote:
      "I compared five home loan offers in one call. ELOANSS got me a rate 0.45% lower than my own bank offered.",
  },
  {
    name: "Imran Shaikh",
    city: "Mumbai",
    role: "Fleet Operator",
    quote:
      "Commercial vehicle finance plus insurance handled together. Documentation support saved me weeks of running around.",
  },
  {
    name: "Anita Verma",
    city: "Delhi",
    role: "Doctor",
    quote:
      "They reviewed my term and health cover honestly and recommended only what I actually needed. Very transparent.",
  },
];

export const steps = [
  {
    title: "Submit Enquiry",
    text: "Share your requirement in a 2-minute form. A dedicated advisor calls you back the same working day.",
  },
  {
    title: "Get Best Offers Matched",
    text: "We compare rates, tenure and charges across partner banks and NBFCs and shortlist the best fit.",
  },
  {
    title: "Document Verification",
    text: "Our team checks your paperwork before submission so your file clears the lender review in one go.",
  },
  {
    title: "Loan Disbursed",
    text: "Sanction letter, agreement and disbursal — tracked end to end with clear updates at every stage.",
  },
];
