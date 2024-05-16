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

const UNIT_2: Question[] = [
  {
    key: "u2_1",
    body: "Real estate generally includes all the following EXCEPT",
    answers: [
      "trees.",
      "air rights.",
      "annual crops.",
      "mineral rights."
    ],
    correctAnswer: "annual crops.",
    math: false,
    unit: 2
  },
  {
    key: "u2_2",
    body: "A bookstore rents space in a commercial building. The bookstore has large reading tables fastened to the walls and bookshelves bolted to both the ceiling and the floor that create aisles from the front of the store to the back. These were all installed by the bookstore owner. Which of the following BEST characterizes the contents of the bookstore?",
    answers: [
      "The shelves and tables are trade fixtures and will transfer when the property owner sells the building.",
      "The shelves and tables are trade fixtures and may properly be removed by the bookstore's owner before the lease expires, with the tenant responsible to the landlord for any damage that the removal causes to the premises.",
      "Because the business is a tenant, the shelves and tables are fixtures and may not be removed except with the building owner's permission.",
      "Because the shelves and tables are attached to the building, they are treated the same as other fixtures."
    ],
    correctAnswer: "The shelves and tables are trade fixtures and may properly be removed by the bookstore's owner before the lease expires, with the tenant responsible to the landlord for any damage that the removal causes to the premises.",
    math: false,
    unit: 2
  },
  {
    key: "u2_3",
    body: "The term nonhomogeneity refers to",
    answers: [
      "scarcity.",
      "immobility.",
      "uniqueness.",
      "indestructibility."
    ],
    correctAnswer: "uniqueness.",
    math: false,
    unit: 2
  },
  {
    key: "u2_4",
    body: "Another term for personal property is",
    answers: [
      "realty.",
      "fixtures.",
      "chattels.",
      "fructus naturales."
    ],
    correctAnswer: "chattels.",
    math: false,
    unit: 2
  },
  {
    key: "u2_5",
    body: "A property owner wants to use water from a river that runs through the property to irrigate a potato field. To do so, the owner is required by state law to submit an application to the Department of Water Resources describing in detail the plan for beneficial use of the water. If the department approves the owner's application, it will issue a permit allowing a limited amount of river water to be diverted onto the property. Based on these facts, it can be assumed that this property owner's state relies on which rule of law?",
    answers: [
      "Riparian rights",
      "Littoral rights",
      "Doctrine of prior appropriation",
      "Doctrine of highest and best use"
    ],
    correctAnswer: "Doctrine of prior appropriation",
    math: false,
    unit: 2
  },
  {
    key: "u2_6",
    body: "The owner of a piece of vacant land removed and sold all the topsoil, limestone, and gravel. At the owner's death, which is TRUE.",
    answers: [
      "The property no longer exists.",
      "The heir of the deceased inherits the property as is.",
      "The heir of the deceased owns the gravel, limestone, and topsoil, no matter where it is.",
      "The estate of the deceased must restore the property to its original condition."
    ],
    correctAnswer: "The heir of the deceased inherits the property as is.",
    math: false,
    unit: 2
  },
  {
    key: "u2_7",
    body: "In determining whether an item is real or personal property, a court would NOT consider which of the following?",
    answers: [
      "The cost of the item when it was purchased",
      "Whether its removal would cause severe damage to the real estate",
      "Whether the item is clearly adapted to the real estate",
      "Any relevant agreement of the parties in their contract of sale"
    ],
    correctAnswer: "The cost of the item when it was purchased",
    math: false,
    unit: 2
  },
  {
    key: "u2_8",
    body: "Which of the following is a physical characteristic of land?",
    answers: [
      "Indestructibility",
      "Improvements",
      "Area preference",
      "Scarcity"
    ],
    correctAnswer: "Indestructibility",
    math: false,
    unit: 2
  },
  {
    key: "u2_9",
    body: "Which of the following describes the act by which real property can be converted into personal property?",
    answers: [
      "Severance.",
      "Accession.",
      "Conversion.",
      "Attachment."
    ],
    correctAnswer: "Severance.",
    math: false,
    unit: 2
  },
  {
    key: "u2_10",
    body: "While moving into a newly purchased home, the buyer discovered that the seller had taken the ceiling fan that hung over the dining room table. The seller had not indicated that the ceiling fan would be removed, and the contract did not address this issue. Which statement is TRUE?",
    answers: [
      "Ceiling fans are usually considered real estate.",
      "The ceiling fan belongs to the seller.",
      "Ceiling fans are considered trade fixtures.",
      "Ceiling fans are considered personal property."
    ],
    correctAnswer: "Ceiling fans are usually considered real estate.",
    math: false,
    unit: 2
  },
  {
    key: "u2_11",
    body: "A buyer purchased a parcel of land and immediately sold the mineral rights to an oil company. The buyer gave up which of the following?",
    answers: [
      "Air rights",
      "Surface rights",
      "Subsurface rights",
      "Vertical rights"
    ],
    correctAnswer: "Subsurface rights",
    math: false,
    unit: 2
  },
  {
    key: "u2_12",
    body: "A truckload of lumber that a homeowner purchased has been left in the driveway for use in building a porch. The lumber is considered",
    answers: [
      "real property.",
      "personal property.",
      "a chattel that is real property.",
      "a trade or chattel fixture."
    ],
    correctAnswer: "personal property.",
    math: false,
    unit: 2
  },
  {
    key: "u2_13",
    body: "Method of annexation, adaptation to real estate, and agreement between the parties are the legal tests for determining whether an item is",
    answers: [
      "a trade fixture or personal property.",
      "real property or real estate.",
      "a fixture of personal property.",
      "an improvement."
    ],
    correctAnswer: "a fixture of personal property.",
    math: false,
    unit: 2
  },
  {
    key: "u2_14",
    body: "Parking spaces in multiunit buildings, water rights, and similar things of value that convey with property are classified as",
    answers: [
      "covenants.",
      "emblements.",
      "chattels.",
      "appurtenances."
    ],
    correctAnswer: "appurtenances.",
    math: false,
    unit: 2
  },
  {
    key: "u2_15",
    body: "A resort purchases a large tract of scenic forest land and puts several prefabricated steel buildings there to store landscaping equipment, fuel oil, and propane canisters. Which statement is TRUE regarding this situation?",
    answers: [
      "The resort's action constitutes improvement of the property.",
      "The chemicals are considered appurtenances.",
      "The buildings are considered trade fixtures.",
      "Storing fuel oil, which is highly flammable, is not included in the bundle of legal rights."
    ],
    correctAnswer: "The resort's action constitutes improvement of the property.",
    math: false,
    unit: 2
  },
  {
    key: "u2_16",
    body: "A property owner's land is located along the banks of a river. This owner's water rights are called",
    answers: [
      "littoral rights.",
      "prior appropriation rights.",
      "riparian rights.",
      "hereditaments."
    ],
    correctAnswer: "riparian rights.",
    math: false,
    unit: 2
  },
  {
    key: "u2_17",
    body: "A property owner's bundle of legal rights entitles the owner to do all of the following EXCEPT",
    answers: [
      "sell the property to a neighbor.",
      "exclude utility meter readers.",
      "erect No Trespassing signs.",
      "enjoy profits from its ownership."
    ],
    correctAnswer: "exclude utility meter readers.",
    math: false,
    unit: 2
  },
  {
    key: "u2_18",
    body: "According to law, a trade fixture is usually treated",
    answers: [
      "realty.",
      "an easement.",
      "personalty.",
      "a license."
    ],
    correctAnswer: "personalty.",
    math: false,
    unit: 2
  },
  {
    key: "u2_19",
    body: "A buyer is interested in a house that is well designed, but is located in a busy area that is problematic for the buyer. The buyer's concern about the property's location is called",
    answers: [
      "physical deterioration.",
      "area preference.",
      "permanence of investment.",
      "immobility."
    ],
    correctAnswer: "area preference.",
    math: false,
    unit: 2
  },
  {
    key: "u2_20",
    body: "Which of the following is considered personal property?",
    answers: [
      "Wood-burning fireplace",
      "Built-in microwave",
      "Bathtub",
      "Patio furniture"
    ],
    correctAnswer: "Patio furniture",
    math: false,
    unit: 2
  }
];

const UNIT_3: Question[] = [
  {
    key: "u3_1",
    body: "The right of a government body to take ownership of real estate for public use is called",
    answers: [
      "escheat.",
      "emment domain.",
      "condemnation.",
      "police power."
    ],
    correctAnswer: "emment domain.",
    math: false,
    unit: 3
  },
  {
    key: "u3_2",
    body: "One who has ownership rights of real estate that could continue forever and which provide that no other person can claim to be the owner of or have any ownership control over the property has",
    answers: [
      "fee simple absolute.",
      "life estate.",
      "determinable fee.",
      "condition subsequent."
    ],
    correctAnswer: "fee simple absolute.",
    math: false,
    unit: 3
  },
  {
    key: "u3_3",
    body: "The owner of fee simple title to a vacant lot adjacent to a hospital decided to make a gift of the lot to the hospital. The deed conveyed ownership of the lot to the hospital 'so long as it is used for hospital purposes.' After completion of the gift, the hospital will own",
    answers: [
      "a fee simple absolute estate.",
      "a license.",
      "a fee simple determinable.",
      "a leasehold estate."
    ],
    correctAnswer: "a fee simple determinable.",
    math: false,
    unit: 3
  },
  {
    key: "u3_4",
    body: "Your neighbors use your driveway to reach the garage on their property. Your attorney explains that the neighbors' real estate includes an easement appurtenant giving them the right to do this. Your property is",
    answers: [
      "the leasehold interest.",
      "the dominant tenement.",
      "servient tenement.",
      "the license property."
    ],
    correctAnswer: "servient tenement.",
    math: false,
    unit: 3
  },
  {
    key: "u3_5",
    body: "A license is an example of",
    answers: [
      "an easement appurtenant.",
      "an encroachment.",
      "a personal privilege.",
      "a restriction."
    ],
    correctAnswer: "a personal privilege.",
    math: false,
    unit: 3
  },
  {
    key: "u3_6",
    body: "An easement appurtenant",
    answers: [
      "terminates with the sale of the property.",
      "is a right-of-way for a utility company.",
      "is revocable.",
      "runs with the land."
    ],
    correctAnswer: "runs with the land.",
    math: false,
    unit: 3
  },
  {
    key: "u3_7",
    body: "A property on Main Street that was formerly a retail store will become the site of a new city hall, made possible by the government's power of",
    answers: [
      "escheat.",
      "possibility of reverter.",
      "eminent domain.",
      "taxation."
    ],
    correctAnswer: "eminent domain.",
    math: false,
    unit: 3
  },
  {
    key: "u3_8",
    body: "Which of the following is NOT an example of governmental power?",
    answers: [
      "Remainder",
      "Police power",
      "Eminent domain",
      "Taxation"
    ],
    correctAnswer: "Remainder",
    math: false,
    unit: 3
  },
  {
    key: "u3_9",
    body: "A property owner who has the legal right to use a neighbor's land holds",
    answers: [
      "an estate in land.",
      "an easement.",
      "a police power.",
      "an encroachment."
    ],
    correctAnswer: "an easement.",
    math: false,
    unit: 3
  },
  {
    key: "u3_10",
    body: "Which of the following is a legal life estate?",
    answers: [
      "Leasehold",
      "Fee simple absolute",
      "Homestead",
      "Determinable fee"
    ],
    correctAnswer: "Homestead",
    math: false,
    unit: 3
  },
  {
    key: "u3_11",
    body: "An owner conveys ownership of a residence to a church but reserves a life estate in the residence. The future interest held by the church is",
    answers: [
      "a pur autre vie.",
      "a reminder",
      "a reversion.",
      "a leasehold."
    ],
    correctAnswer: "a reminder",
    math: false,
    unit: 3
  },
  {
    key: "u3_12",
    body: "The new owner of a property installs a fence on the property. By mistake, the fence extends one foot over the lot line onto a neighbor's property. The fence is an example of",
    answers: [
      "a license.",
      "an encroachment.",
      "an easement by necessity.",
      "an easement by prescription."
    ],
    correctAnswer: "an encroachment.",
    math: false,
    unit: 3
  },
  {
    key: "u3_13",
    body: "A homeowner may be allowed certain protection from judgments of creditors as a result of the state's",
    answers: [
      "littoral rights.",
      "curtesy rights.",
      "homestead rights.",
      "dower rights."
    ],
    correctAnswer: "homestead rights.",
    math: false,
    unit: 3
  },
  {
    key: "u3_14",
    body: "A person has permission from a property owner to hike on the owner's property during the autumn months. The hiker has",
    answers: [
      "an easement by necessity.",
      "an easement by condemnation.",
      "riparian rights.",
      "a license."
    ],
    correctAnswer: "a license.",
    math: false,
    unit: 3
  },
  {
    key: "u3_15",
    body: "A homestead is a legal life estate in real estate that is",
    answers: [
      "leased by renters.",
      "occupied as the family home.",
      "used as a vacation home.",
      "a secondary residence."
    ],
    correctAnswer: "occupied as the family home.",
    math: false,
    unit: 3
  },
  {
    key: "u3_16",
    body: "Because a homeowner failed to pay the real estate taxes on time, the taxing authority imposed a claim against the homeowner's property. This claim is known as",
    answers: [
      "a deed restriction.",
      "a lien.",
      "an easement.",
      "a reversionary interest."
    ],
    correctAnswer: "a lien.",
    math: false,
    unit: 3
  },
  {
    key: "u3_17",
    body: "The type of easement that is a right-of-way for a utility company's power lines is",
    answers: [
      "an easement in gross.",
      "an easement by necessity.",
      "an easement by prescription.",
      "a nonassignable easement."
    ],
    correctAnswer: "an easement in gross.",
    math: false,
    unit: 3
  },
  {
    key: "u3_18",
    body: "The process by which government takes control of a property after the owner dies without a will or lawful heirs is",
    answers: [
      "escheat.",
      "lis pendens.",
      "condemnation.",
      "taxation."
    ],
    correctAnswer: "escheat.",
    math: false,
    unit: 3
  },
  {
    key: "u3_19",
    body: "A landowner has divided a large parcel of land into smaller parcels and has recently sold a tract near a nature preserve that is landlocked and cannot be entered except through one of the other tracts. The buyer of that property will probably be granted what type of easement by court action?",
    answers: [
      "Easement by necessity.",
      "Easement in gross.",
      "Easement by prescription.",
      "Easement by condemnation."
    ],
    correctAnswer: "Easement by necessity.",
    math: false,
    unit: 3
  },
  {
    key: "u3_20",
    body: "All of the following will terminate an easement EXCEPT",
    answers: [
      "when the need no longer exists.",
      "nonuse of a prescriptive easement.",
      "abandonment of easement.",
      "release of the right of easement to the dominant tenement."
    ],
    correctAnswer: "release of the right of easement to the dominant tenement.",
    math: false,
    unit: 3
  }
];

const UNIT_4: Question[] = [
  {
    key: "u4_1",
    body: "The four unities of possession, interest, time, and title are associated with which of the following?",
    answers: [
      "Community property",
      "Severalty ownership",
      "Tenants in common",
      "Joint tenancy"
    ],
    correctAnswer: "Joint tenancy",
    math: false,
    unit: 4
  },
  {
    key: "u4_2",
    body: "A parcel of property was purchased by two friends. The deed they received from the seller at closing transferred the property without stipulating a form of ownership. The two friends took title as which of the following?",
    answers: [
      "Joint tenants",
      "Tenants in common",
      "Tenants by the entirety",
      "Community property owners"
    ],
    correctAnswer: "Tenants in common",
    math: false,
    unit: 4
  },
  {
    key: "u4_3",
    body: "Three people are joint tenants with rights of survivorship in a tract of land. One owner conveys his interest to a friend. Which statement is TRUE?",
    answers: [
      "The other two owners remain joint tenants.",
      "The new owner has severalty ownership.",
      "They all become tenants in common.",
      "They all become joint tenants."
    ],
    correctAnswer: "The other two owners remain joint tenants.",
    math: false,
    unit: 4
  },
  {
    key: "u4_4",
    body: "A man owns one of 20 units in fee simple, along with a 5% ownership share in the parking facilities, recreation center, and grounds. What kind of property does he own?",
    answers: [
      "Cooperative",
      "Condominium",
      "Time-share",
      "Land trust"
    ],
    correctAnswer: "Condominium",
    math: false,
    unit: 4
  },
  {
    key: "u4_5",
    body: "A trust is a legal arrangement in which property is held for the benefit of a third party by",
    answers: [
      "a beneficiary.",
      "a trustor.",
      "a trustee.",
      "an attorney-in-fact."
    ],
    correctAnswer: "a trustee.",
    math: false,
    unit: 4
  },
  {
    key: "u4_6",
    body: "According to some states, any real property that either spouse owns at the time of marriage remains separate property. Further, any real property acquired by either spouse during the marriage (except by gift or inheritance or with the proceeds of separate property) belongs to both of them equally. What is this form of ownership called?",
    answers: [
      "Partnership",
      "Joint tenancy",
      "Tenancy by the entirety",
      "Community property"
    ],
    correctAnswer: "Community property",
    math: false,
    unit: 4
  },
  {
    key: "u4_7",
    body: "Three people were concurrent owners of a parcel of real estate. When one of the owners died, that interest became part of the deceased's estate. The deceased was",
    answers: [
      "a joint tenant.",
      "a tenant in common.",
      "a tenant by the entirety.",
      "a severalty owner."
    ],
    correctAnswer: "a tenant in common.",
    math: false,
    unit: 4
  },
  {
    key: "u4_8",
    body: "A legal arrangement under which the title to real property is held to protect the interests of a beneficiary is",
    answers: [
      "a trust.",
      "a corporation.",
      "a limited partnership.",
      "a general partnership."
    ],
    correctAnswer: "a trust.",
    math: false,
    unit: 4
  },
  {
    key: "u4_9",
    body: "A person lives in an apartment building. The land and structures are owned by a corporation, with one mortgage loan securing the entire property. Like the other residents, this person owns stock in the corporation and has a lease to the apartment. This type of ownership is called",
    answers: [
      "condominium.",
      "planned unit development.",
      "time-share.",
      "cooperative."
    ],
    correctAnswer: "cooperative.",
    math: false,
    unit: 4
  },
  {
    key: "u4_10",
    body: "An owner purchased an interest in a house in Beachfront. The owner is entitled to the right of possession only between July 10 and August 4 of each year. Which of the following is MOST likely the type of ownership that has been purchased?",
    answers: [
      "Cooperative.",
      "Condominium.",
      "Time-share.",
      "Partnership."
    ],
    correctAnswer: "Time-share.",
    math: false,
    unit: 4
  },
  {
    key: "u4_11",
    body: "A corporation is a legal entity, recognized as an artificial person. Property owned solely by the corporation is owned in",
    answers: [
      "trust.",
      "partnership.",
      "severalty.",
      "survivorship tenancy."
    ],
    correctAnswer: "severalty.",
    math: false,
    unit: 4
  },
  {
    key: "u4_12",
    body: "Which of the following refers to ownership by one person?",
    answers: [
      "Tenancy by the entirety",
      "Community property",
      "Tenancy in common",
      "Severalty"
    ],
    correctAnswer: "Severalty",
    math: false,
    unit: 4
  },
  {
    key: "u4_13",
    body: "A married couple co-owns a farm and has the right of survivorship. This arrangement is MOST likely",
    answers: [
      "severalty ownership.",
      "community property.",
      "a tenancy in common.",
      "an estate by the entirety."
    ],
    correctAnswer: "an estate by the entirety.",
    math: false,
    unit: 4
  },
  {
    key: "u4_14",
    body: "The real property interest that takes the form of personal property is",
    answers: [
      "ownership in severalty.",
      "cooperative unit ownership.",
      "condominium unit ownership.",
      "tenancy in common."
    ],
    correctAnswer: "cooperative unit ownership.",
    math: false,
    unit: 4
  },
  {
    key: "u4_15",
    body: "Two people are co-owners of a small office building with the right of survivorship. One of the co-owners dies intestate and leaves nothing to be distributed to heirs. Which of the following would explain why the surviving co-owner acquired the deceased's interest?",
    answers: [
      "Severalty",
      "Joint tenancy",
      "Community property",
      "Condominium"
    ],
    correctAnswer: "Joint tenancy",
    math: false,
    unit: 4
  },
  {
    key: "u4_16",
    body: "Which of the following is MOST likely evidence of ownership in a cooperative?",
    answers: [
      "Tax bill for an individual unit",
      "Existence of a reverter clause",
      "Shareholder stock",
      "Right of first refusal"
    ],
    correctAnswer: "Shareholder stock",
    math: false,
    unit: 4
  },
  {
    key: "u4_17",
    body: "An ownership interest that can be an estate interest or a right of use is",
    answers: [
      "a leasehold.",
      "a time-share.",
      "a condominium.",
      "a cooperative."
    ],
    correctAnswer: "a time-share.",
    math: false,
    unit: 4
  },
  {
    key: "u4_18",
    body: "Which statement applies to both joint tenancy and tenancy by the entirety?",
    answers: [
      "There is no right to file a partition suit.",
      "The last survivor becomes a severalty owner.",
      "A deed signed by one owner will convey a fractional interest.",
      "A deed will not convey any interest unless signed by both spouses."
    ],
    correctAnswer: "The last survivor becomes a severalty owner.",
    math: false,
    unit: 4
  },
  {
    key: "u4_19",
    body: "Which of the following is NOT a form of co-ownership?",
    answers: [
      "Tenancy in common",
      "Ownership in severalty",
      "Tenancy by the entirety",
      "Community property"
    ],
    correctAnswer: "Ownership in severalty",
    math: false,
    unit: 4
  },
  {
    key: "u4_20",
    body: "If property is held by two or more owners as joint tenants, the interest of a deceased co-owner will be passed to",
    answers: [
      "the surviving owner or owners.",
      "the heirs of the deceased.",
      "the state, under the law of escheat.",
      "the trust under which the property was owned."
    ],
    correctAnswer: "the surviving owner or owners.",
    math: false,
    unit: 4
  }
];

export const QUESTIONS: Question[] = [
  ...UNIT_1,
  ...UNIT_2,
  ...UNIT_3,
  ...UNIT_4
];