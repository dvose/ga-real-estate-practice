export type Question = {
  key: string,
  body: string,
  answers: string[],
  correctAnswer: string,
  math?: boolean,
  unit?: number
};

const UNIT_1: Question[] = [
  {
    key: "u1_1",
    body: "Property market value, based on established methods and using trained judgment, is performed by",
    answers: [
      "a real estate attorney.",
      "real estate appraiser.",
      "a real estate counselor.",
      "a home inspector."
    ],
    correctAnswer: "real estate appraiser.",
    math: false,
    unit: 1
  },
  {
    key: "u1_2",
    body: "In general, when the supply of a certain commodity increases,",
    answers: [
      "price tends to rise.",
      "price tends to drop.",
      "demand for it tends to rise.",
      "demand for it tends to drop."
    ],
    correctAnswer: "price tends to drop.",
    math: false,
    unit: 1
  },
  {
    key: "u1_3",
    body: "Which factor primarily affects supply in the real estate market?",
    answers: [
      "Population",
      "Demographics",
      "Employment",
      "Governmental monetary policy"
    ],
    correctAnswer: "Governmental monetary policy",
    math: false,
    unit: 1
  },
  {
    key: "u1_4",
    body: "Which factor is MOST likely to influence demand for real estate?",
    answers: [
      "Number of real estate professionals in the area",
      "Number of full-time real estate professionals in the area",
      "Wage levels and employment opportunities",
      "Price of new homes being built in the area"
    ],
    correctAnswer: "Wage levels and employment opportunities",
    math: false,
    unit: 1
  },
  {
    key: "u1_5",
    body: "Property management, appraisal, financing, and development are all examples of",
    answers: [
      "factors affecting demand.",
      "specializations within the real estate industry",
      "non-real estate professions.",
      "activities requiring broker management and supervision."
    ],
    correctAnswer: "specializations within the real estate industry",
    math: false,
    unit: 1
  },
  {
    key: "u1_6",
    body: "What type of federal law prohibits discrimination in the provision of housing and housing-related services (including lending) based on an individual's race, color, national origin, religion, sex, familial status, or disability?",
    answers: [
      "Licensing",
      "Lot size",
      "Home ownership",
      "Fair housing"
    ],
    correctAnswer: "Fair housing",
    math: false,
    unit: 1
  },
  {
    key: "u1_7",
    body: "A major manufacturer of automobiles announces that it will relocate one of its factories, along with 2,000 employees, to a small town. What effect will this announcement MOST likely have on the small town's housing market?",
    answers: [
      "Houses will likely become less expensive.",
      "Houses will likely become more expensive.",
      "Because the announcement involves an issue of demographics, not of supply and demand, housing prices will stay the same.",
      "The announcement involves an industrial property; residential housing will not be affected."
    ],
    correctAnswer: "Houses will likely become more expensive.",
    math: false,
    unit: 1
  },
  {
    key: "u1_8",
    body: "A real estate professional who has several years of experience in the industry decided to retire from actively marketing properties. Now this person helps clients choose among the various alternatives involved in purchasing, using, or investing in property. What is this person's profession?",
    answers: [
      "Real estate counselor",
      "Real estate appraiser",
      "Real estate educator",
      "Building inspector"
    ],
    correctAnswer: "Real estate counselor",
    math: false,
    unit: 1
  },
  {
    key: "u1_9",
    body: "Nationwide Multistate Licensing System and Registry was created to register",
    answers: [
      "appraisers.",
      "property managers.",
      "home inspectors.",
      "mortgage loan originators."
    ],
    correctAnswer: "mortgage loan originators.",
    math: false,
    unit: 1
  },
  {
    key: "u1_10",
    body: "Schools would be considered part of which real estate classification?",
    answers: [
      "Special purpose",
      "Industrial",
      "Commercial",
      "Residential"
    ],
    correctAnswer: "Special purpose",
    math: false,
    unit: 1
  },
  {
    key: "u1_11",
    body: "When demand for a commodity decreases and supply remains the same,",
    answers: [
      "price tends to rise",
      "price tends to fall",
      "price is not affected",
      "the market becomes stagnant"
    ],
    correctAnswer: "price tends to fall",
    math: false,
    unit: 1
  },
  {
    key: "u1_12",
    body: "The difference between the cost basis of property and its net selling price is",
    answers: [
      "cost recovery.",
      "capital gain.",
      "leverage.",
      "appreciation."
    ],
    correctAnswer: "capital gain.",
    math: false,
    unit: 1
  },
  {
    key: "u1_13",
    body: "The use of borrowed money to finance an investment is called",
    answers: [
      "appreciation.",
      "leverage.",
      "depreciation.",
      "capital gain."
    ],
    correctAnswer: "leverage.",
    math: false,
    unit: 1
  },
  {
    key: "u1_14",
    body: "All of the following are categories of the uses of real property EXCEPT",
    answers: [
      "residential.",
      "developmental.",
      "agricultural.",
      "industrial."
    ],
    correctAnswer: "developmental.",
    math: false,
    unit: 1
  },
  {
    key: "u1_15",
    body: "All of the following would affect demand EXCEPT",
    answers: [
      "population.",
      "demographics.",
      "wage levels.",
      "monetary policy."
    ],
    correctAnswer: "monetary policy.",
    math: false,
    unit: 1
  },
  {
    key: "u1_16",
    body: "All of the following affect how quickly the forces of supply and demand work EXCEPT",
    answers: [
      "a property's specific geographic location.",
      "immobility of a property.",
      "degree of standardization of the property's price.",
      "uniqueness of a property."
    ],
    correctAnswer: "degree of standardization of the property's price.",
    math: false,
    unit: 1
  },
  {
    key: "u1_17",
    body: "A person who performs a visual survey of a property structure and writes a report for a buyer is",
    answers: [
      "an educator.",
      "a home inspector.",
      "an appraiser.",
      "a property manager."
    ],
    correctAnswer: "a home inspector.",
    math: false,
    unit: 1
  },
  {
    key: "u1_18",
    body: "Another name for depreciation is",
    answers: [
      "cost recovery.",
      "leverage.",
      "capital gain.",
      "inflation."
    ],
    correctAnswer: "cost recovery.",
    math: false,
    unit: 1
  },
  {
    key: "u1_19",
    body: "A person or company responsible for maintaining client's property and maximizing the return on the client's investment is serving as",
    answers: [
      "a rental agent.",
      "a building maintenance specialist.",
      "a property manager.",
      "an investment counselor."
    ],
    correctAnswer: "a property manager.",
    math: false,
    unit: 1
  },
  {
    key: "u1_20",
    body: "Detailed information about the age, education, behavior, and other characteristics of members of a population group is called",
    answers: [
      "population analysis.",
      "demographics.",
      "family lifestyles.",
      "household data."
    ],
    correctAnswer: "demographics.",
    math: false,
    unit: 1
  }
];

export const QUESTIONS: Question[] = [
  ...UNIT_1
];