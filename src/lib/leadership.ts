export type Executive = {
  slug: string;
  name: string;
  role: string;
  tagline: string;
  image?: string | null; // set to "/images/executives/<slug>.jpg" when you have photos
  location?: string;
  bio: string[];
  responsibilities?: string[];
  expertise?: string[];
  credentials?: string[];
};

export const EXECUTIVES: Executive[] = [
  {
    slug: "gracious-mutsindikwa",
    name: "Gracious Mutsindikwa",
    role: "Co-founder, Partner & Business Development Director",
    tagline: "Business development, corporate clients, and strategic direction.",
    image: null,
    location: "Southern Africa",
    bio: [
      "Gracious Mutsindikwa is the Co-founder, Partner & Business Development Director. She commenced her career as a trainee accountant with Portland Holdings in Zimbabwe (PPC).",
      "She later joined BancABC Bank in Bulawayo, working in back-office operations before moving to the Treasury department as a dealer, and then into corporate banking as an investment banker.",
      "She has also worked as a project coordinator at Lupane State University and has completed consultancy work as a business developer and financial analyst for over 10 years across multiple projects and countries.",
      "She holds a Bachelor of Commerce Honours Degree in Banking (NUST) and a Masters in Banking and Financial Services (NUST). She is an Associate Member of Diaspora Infrastructure Development Group in Botswana and is an enterprising entrepreneur.",
    ],
    responsibilities: [
      "Creating, communicating and implementing the organization’s vision, mission and overall direction.",
      "Leading the development and implementation of the overall organization’s strategy.",
      "Overseeing the complete operation of the organization in accordance with the strategic plan.",
      "Evaluating performance of executives for compliance with established policies and objectives, and contributions toward objectives.",
    ],
    expertise: [
      "Business development",
      "Corporate banking and client management",
      "Treasury exposure",
      "Financial analysis",
      "Strategic leadership",
    ],
    credentials: [
      "Bachelor of Commerce Honours Degree in Banking (NUST)",
      "Masters in Banking and Financial Services (NUST)",
      "Associate Member: Diaspora Infrastructure Development Group (Botswana)",
    ],
  },
  {
    slug: "smile-carnegie-sibanda",
    name: "Smile Carnegie Sibanda",
    role: "Finance Director",
    tagline: "Financial leadership, controls, and governance support.",
    image: null,
    location: "Southern Africa",
    bio: [
      "Smile Carnegie Sibanda is the Finance Director. He commenced his career as a trainee accountant with the City of Harare.",
      "He later joined the City of Bulawayo as a Principal Accountant responsible for projects, gaining extensive experience in public sector accounting and auditing.",
      "He moved into auditing and joined the National University of Science & Technology as Chief Internal Auditor, and later became Finance Director at Lupane State University (a position he still holds).",
    ],
    responsibilities: [
      "Financial Leadership & Strategy",
      "Fund & Investment Financial Management",
      "Wealth Management Oversight",
      "Project & Structured Finance",
      "Financial Reporting & Controls",
      "Budgeting, Forecasting & Cash Flow Management",
      "Risk Management & Compliance",
      "Investor & Stakeholder Relations",
      "Systems, Processes & Team Management",
      "Governance & Board Support",
    ],
    expertise: [
      "Public sector finance and auditing",
      "Internal audit leadership",
      "Financial controls and reporting",
      "Risk management and compliance",
      "Stakeholder relations",
    ],
    credentials: [
      "Higher National Diploma in Accounting",
      "Bachelor of Accountancy Honours Degree (U.Z)",
      "Executive Master of Business Administration (EMBA) (NUST)",
      "Associate Member: Institute of Forensic Auditors",
      "Member: Institute of Internal Auditors",
    ],
  },
  {
    slug: "managing-partner",
    name: "Managing Partner (Name pending)",
    role: "Co-Founder and Managing Partner",
    tagline: "Strategic direction, investment oversight, and investor relations.",
    image: null,
    location: "Africa",
    bio: [
      "The Managing Partner is a Co-Founder responsible for strategic direction, investment oversight, and investor relations.",
      "With over 5 years of experience in investment management, private equity, and corporate finance, she has advised on and executed transactions across multiple sectors in Africa.",
    ],
    expertise: [
      "Capital structuring",
      "Private equity & alternative investments",
      "Strategic leadership",
      "Investor relations",
    ],
  },
  {
    slug: "chief-investment-officer",
    name: "Chief Investment Officer (CIO) (Name pending)",
    role: "Chief Investment Officer (CIO)",
    tagline: "Portfolio construction, risk oversight, and investment strategy.",
    image: null,
    location: "Africa / Global",
    bio: [
      "The CIO leads investment strategy, portfolio construction, and risk oversight across private equity, hedge funds, and managed portfolios.",
      "Previously held senior roles in banks, asset managers, or private equity firms, with a strong track record in delivering risk-adjusted returns.",
    ],
    expertise: [
      "Portfolio management",
      "Due diligence",
      "Asset allocation",
      "Risk management",
    ],
  },
];

export function getExecutive(slug: string) {
  return EXECUTIVES.find((e) => e.slug === slug) ?? null;
}
