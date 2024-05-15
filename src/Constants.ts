export type Question = {
  key: string,
  body: string,
  answers: string[],
  correctAnswer: string,
  math?: boolean
};

export const QUESTIONS: Question[] = [
  {
    key: '1',
    math: false,
    body: 'The Commissioner holds an important role within the organization of GREC. Their duties include all the following except:',
    answers: ['Overseeing the day-to-day operations of GREC', 'Hiring all staff of the office', 'Voting on whether a licensee violated license law', 'Enforce the rules and regulations set forth by the Commission'],
    correctAnswer: 'Voting on whether a licensee violated license law'
  },
  {
    key: "2",
    math: false,
    body: "Sarah just turned 18 and she wants to follow in her mother's footsteps and become a real estate agent in Georgia. To fulfill her dream, she must do all of the following except:",
    answers: [
      "Pass a 75-hour prelicense course",
      "Earn a college degree",
      "Pass the state exam",
      "Get a criminal background check"
    ],
    correctAnswer: "Earn a college degree"
  },
  {
    key: "3",
    math: false,
    body: "In Georgia, if a licensee violates any real estate license law, the broker must:",
    answers: [
      "Give a verbal reprimand if it is the first offense.",
      "Notify the Commission of the violating actions.",
      "Penalize the licensee with a set fine.",
      "Transfer the licensee to another brokerage firm immediately."
    ],
    correctAnswer: "Notify the Commission of the violating actions."
  },
  {
    key: "4",
    math: false,
    body: "The city of Buckhead has seen a huge increase in crime. The city has compiled crime statistics and the demographics committing these crimes are apparent. Your neighborhood association asks you, as the \"real estate professional,\" to speak to the subdivision about the crime statistics and demographics. You should:",
    answers: [
      "Share the statistics in an informative manner but leave out the demographics portion.",
      "Send another sales associate from your office who does not live in the area.",
      "Send out CMAs to all your neighbors showing the current value of their home.",
      "Decline to speak."
    ],
    correctAnswer: "Decline to speak."
  },
  {
    key: "5",
    math: false,
    body: "When a licensee is involved in a real estate transaction, they must:",
    answers: [
      "Disclose all information to the other party.",
      "Provide equal services to consumers.",
      "Use the equal opportunity logo in all advertising.",
      "Only show homes to prequalified buyers."
    ],
    correctAnswer: "Provide equal services to consumers."
  },
  {
    key: "6",
    math: false,
    body: "You are a Georgia licensed real estate salesperson and you find a new listing that fits your need for a property to add to your rental portfolio. Your plans are to buy and hold the property and possibly place a tenant to occupy it. You draft the offer and submit it to the listing agent, but the offer price is way below the list price. You offer a quick close and state in the offer that you hold a real estate license and provide your license number. Can the listing agent present your offer to the seller even though you hold a real estate license?",
    answers: [
      "No, a licensee cannot make offers to sellers.",
      "No, because the offer is below the asking price.",
      "Yes, as long as the fact that the offeror is a licensee is kept confidential.",
      "Yes, the buying agent must disclose they hold a license and the listing agent must present all offers received."
    ],
    correctAnswer: "Yes, the buying agent must disclose they hold a license and the listing agent must present all offers received."
  },
  {
    key: "7",
    math: false,
    body: "Is it a legal requirement to have witnesses present at the signing of a deed, other than a notary in some cases, during a real estate closing when transferring ownership in real property in Georgia?",
    answers: [
      "Yes, at least one person must witness the signing of the deed.",
      "Yes, at least two persons must witness the signing of the deed.",
      "Yes, and the buyer can act as a witness.",
      "No."
    ],
    correctAnswer: "No."
  },
  {
    key: "8",
    math: false,
    body: "Susan owns a unit where she lives in a 15-unit building. She has been very active cleaning-up the common areas, hiring a quality landscape company for the exterior grounds, and putting together an annual budget to maintain these areas throughout the year. Although Susan is not a licensed Community Association Manager (CAM), are her actions permitted by Georgia law?",
    answers: [
      "Yes. A community of 15 units is exempted from CAM licensing requirements.",
      "Yes. Since she effectively is an employee of the community association.",
      "Yes. As a property owner, Susan is exempt under the CAM license laws.",
      "No. Susan may not conduct services for the community involving finances or budgets without a CAM license."
    ],
    correctAnswer: "Yes. As a property owner, Susan is exempt under the CAM license laws."
  },
  {
    key: "9",
    math: false,
    body: "In a high-end lease of a penthouse apartment, a prospective tenant requests the property manager to revise a standard Georgia lease by adding an addendum with provisions to accommodate her specific needs. How should the property manager proceed?",
    answers: [
      "The property manager should draft and attach a custom addendum to the lease.",
      "The property manager should ask the listing broker to draft the addendum.",
      "The property manager should ask the tenant's broker to draft the addendum.",
      "The property manager should contact an attorney to draft the addendum."
    ],
    correctAnswer: "The property manager should contact an attorney to draft the addendum."
  },
  {
    key: "10",
    math: false,
    body: "Under the Brokerage Relationships in Real Estate Transactions Act (BRRETA), the only licensee that is authorized to legally bind themselves in real estate contracts where a promise to pay a fee is involved is the:",
    answers: [
      "broker",
      "listing agent",
      "buyer's agent",
      "selling agent"
    ],
    correctAnswer: "broker"
  },
  {
    key: "11",
    math: true,
    body: "What is the current loan balance of a fixed rate mortgage with a 5.5% interest rate, when $935 of the next payment is applied to interest?",
    answers: [
      "$17,000",
      "$51,400",
      "$203,067",
      "$204,000"
    ],
    correctAnswer: "$204,000"
  },
  {
    key: "12",
    math: false,
    body: "What does it mean when a borrower hypothecates his or her property as a condition of a loan?",
    answers: [
      "A borrower pledges real and/or personal property as security or collateral for the loan, while still maintaining possession of it.",
      "A bank promises to discharge the lien on the property once a loan is repaid.",
      "A borrower transfers legal title to a disinterested third party until the loan has been repaid.",
      "A borrower transfers the property to the bank in settlement of the loan upon default."
    ],
    correctAnswer: "A borrower pledges real and/or personal property as security or collateral for the loan, while still maintaining possession of it."
  },
  {
    key: "13",
    math: false,
    body: "Which of the following of the secondary markets is a wholly owned government corporation, and not a Government Sponsored Enterprise?",
    answers: [
      "Ginnie Mae",
      "Fannie Mae",
      "Freddie Mac",
      "Both b and c"
    ],
    correctAnswer: "Ginnie Mae"
  },
  {
    key: "14",
    math: false,
    body: "John received a big promotion, which came with a substantial raise. John is looking ahead and would like to add an extra $350 to his monthly mortgage payment, to pay off his home loan sooner. What clause should John review, in his loan agreement, before going forward?",
    answers: [
      "Satisfaction clause",
      "Subordination clause",
      "Prepayment Clause",
      "Acceleration Clause"
    ],
    correctAnswer: "Prepayment Clause"
  },
  {
    key: "15",
    math: false,
    body: "For a real estate contract to be enforceable in a court of law in Georgia, it must:",
    answers: [
      "Be in writing and signed by the parties",
      "Have a recorded verbal agreement",
      "Be filed with the Clerk of the Superior Court",
      "Both a and c"
    ],
    correctAnswer: "Be in writing and signed by the parties"
  },
  {
    key: "16",
    math: false,
    body: "In Georgia, real estate contracts must have all of the following elements to be deemed a valid contract, except:",
    answers: [
      "Mutual consent",
      "Lawful Purpose",
      "Consideration",
      "Liquidated damages"
    ],
    correctAnswer: "Liquidated damages"
  },
  {
    key: "17",
    math: false,
    body: "A seller receives an offer for their home for $300,000. The seller counteroffers with a price of $310,000. If the counteroffer is accepted, the parties have ______ to the terms of the sale.",
    answers: [
      "partial consent",
      "mutual consent",
      "lack of consent",
      "interim consent"
    ],
    correctAnswer: "mutual consent"
  },
  {
    key: "18",
    math: false,
    body: "Marie wants to gift her family home to her grandson. The deed states that the property is given 'for love and affection'. What is this referred to as?",
    answers: [
      "Earnest money",
      "Valuable consideration",
      "Specific performance",
      "Good consideration"
    ],
    correctAnswer: "Good consideration"
  },
  {
    key: "19",
    math: false,
    body: "Liam and Joseph enter into a contract for the purchase of Liam's home. As the Seller, Liam agrees to repair the roof before closing. As the Buyer, Joseph agrees to get full approval from the lender within a two-week period. The closing date is set for the following month. This agreement is:",
    answers: [
      "An executory contract",
      "An executed contract",
      "A unilateral contract",
      "A voidable contract"
    ],
    correctAnswer: "An executory contract"
  },
  {
    key: "20",
    math: false,
    body: "Seller Roy has sold plenty of homes in the past. His last experience with an agent was unsatisfactory so he decides to market his home on his own. He places advertisements with all the brokers in town and offers a commission to any broker that brings him a buyer. This is an example of:",
    answers: [
      "An open listing",
      "An exclusive open listing",
      "An exclusive agency",
      "An exclusive right-to-sell"
    ],
    correctAnswer: "An open listing"
  },
  {
    key: "21",
    math: false,
    body: "Sales Associate Susan is working with a customer buyer. Susan and her buyer discussed agency representation at the first meaningful contact, however, the buyer decided not to commit to Susan yet, and opted to work with Susan as a customer. According to Georgia's Brokerage Relationships in Real Estate Transactions Act (BRRETA), Susan and her customer will need to sign a buyer agency agreement when:",
    answers: [
      "Susan locates home inspectors for the buyer.",
      "Susan provides pre-printed real estate form contracts.",
      "Susan advises the buyer on an offer price and terms.",
      "Susan identifies properties for sale, lease or exchange."
    ],
    correctAnswer: "Susan advises the buyer on an offer price and terms."
  },
  {
    key: "22",
    math: false,
    body: "The contract of sale states that the earnest money deposit is to be placed in an interest-bearing account with any interest earned to be given to the buyer.",
    answers: [
      "Illegal",
      "Not okay, and the broker should resign the listing",
      "Okay, because the buyer and seller have agreed to this",
      "Commingling"
    ],
    correctAnswer: "Okay, because the buyer and seller have agreed to this"
  },
  {
    key: "23",
    math: false,
    body: "If a buyer’s earnest money check is returned for insufficient funds after being deposited into the broker’s trust account, the broker should:",
    answers: [
      "Resign the agency",
      "Cover the bad check personally",
      "Tell the seller or cooperating broker that the check bounced",
      "File a police report"
    ],
    correctAnswer: "Tell the seller or cooperating broker that the check bounced"
  },
  {
    key: "24",
    math: false,
    body: "Which option best describes an exclusive-right-to sell listing?",
    answers: [
      "The listing agent will be paid a commission only if he/she procures the buyer.",
      "The agent who procures the buyer will be compensated.",
      "The listing agent only receives commission if the property sells for a certain amount.",
      "The listing agent will be paid the commission no matter who procures the buyer."
    ],
    correctAnswer: "The listing agent will be paid the commission no matter who procures the buyer."
  },
  {
    key: "25",
    math: false,
    body: "Sandy, a 16-year old, enters into a contract to buy a condo from Sue, an adult. Which statement is TRUE?",
    answers: [
      "Sandy can void any portion of the contract any time before the transaction is closed.",
      "Sandy or Sue can void the entire contract any time before the transaction is closed.",
      "Sandy can void the entire contract any time before the transaction is closed.",
      "The contract is considered void because Sandy is not permitted to enter into a real estate contract."
    ],
    correctAnswer: "Sandy can void the entire contract any time before the transaction is closed."
  },
  {
    key: "26",
    math: false,
    body: "A listing agreement between a principal and broker is a(n)",
    answers: [
      "implied contract.",
      "breach of contract.",
      "express contract.",
      "discharge of contract."
    ],
    correctAnswer: "express contract."
  },
  {
    key: "27",
    math: true,
    body: "Garrett sold his primary residence for $595,000, which was a capital gain of $315,000. How much may Garrett exclude on his income tax as a single individual?",
    answers: [
      "$315,000",
      "$100,000",
      "$476,000",
      "$250,000"
    ],
    correctAnswer: "$250,000"
  },
  {
    key: "28",
    math: true,
    body: "A parcel of land is 140 feet by 75 feet and the seller is asking $130 per square foot. What is the asking price?",
    answers: [
      "$1,050,000",
      "$1,365,000",
      "$1,470,000",
      "$1,650,000"
    ],
    correctAnswer: "$1,365,000"
  },
  {
    key: "29",
    math: true,
    body: "For this question, disregard selling costs, taxes, etc. and choose the closest answer.\nA parcel of land is sold for $163,000. If it appreciates at 14% compounded per year and the seller keeps it for seven years, how much will the seller pay for it?",
    answers: [
      "$72,000",
      "$70,500",
      "$65,000",
      "$55,000"
    ],
    correctAnswer: "$65,000"
  }
];