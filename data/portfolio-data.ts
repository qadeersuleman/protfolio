export interface ProjectItem {
  id: string;
  title: string;
  category: "Invitation" | "Menu" | "Flyer" | "Product Ad" | "Academic";
  categoryLabel: string;
  shortDesc: string;
  fullDesc: string;
  clientOrContext: string;
  toolsUsed: string[];
  themeColor: string;
  accentBg: string;
  previewType: "wedding" | "birthday" | "bakery" | "restaurant" | "iftar" | "skincare" | "serum" | "poetry";
  aspectRatio?: string;
  metadata?: {
    date?: string;
    dimensions?: string;
    purpose?: string;
    instructorOrTarget?: string;
  };
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  partner?: string;
  issueDate: string;
  credentialId?: string;
  description: string;
  category: "Internship" | "Artificial Intelligence" | "Productivity" | "Freelancing" | "Leadership" | "Global Summit";
  badgeColor: string;
  signatory: string;
  verifyNote?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location?: string;
  period: string;
  badge: string;
  highlights: string[];
  type: "Internship" | "Training" | "Summit" | "Leadership";
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  title: string;
  organization: string;
  date: string;
  documentType: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  color: string;
  skills: { name: string; level?: string }[];
}

export const PERSONAL_INFO = {
  name: "Sumera Lakhan",
  firstName: "Sumera",
  lastName: "Lakhan",
  year: "2026",
  location: "Ghotki, Sindh, Pakistan",
  shortLocation: "Ghotki, Pakistan",
  tagline: "Content Writer · Researcher · Visual Designer",
  currentRole: "Final-year BS English Student at Shah Abdul Latif University",
  bio: "Final-year BS English student at Shah Abdul Latif University, Ghotki campus. I write clearly, research carefully and design invitations, menus and product posters.",
  phone: "03272868060",
  formattedPhone: "+92 327 2868060",
  email: "aliankhan856529@gmail.com",
  linkedin: "https://linkedin.com/in/sumera-lakhan-0865b3420",
  linkedinDisplay: "linkedin.com/in/sumera-lakhan-0865b3420",
  aboutHeading: "A student of English who likes finished work.",
  aboutParagraphs: [
    "I am Sumera, a final-year BS English student. In 2026 I completed a one-month Content Writing & Research internship at CodeAlpha, and in 2024 I trained in freelancing through DigiSkills.pk.",
    "I also learn the tools that make writing and reporting easier, such as MS Excel and Google’s Generative AI Studio. Outside class I design invitations, menus and product posters. I work in Sindhi, Urdu and English."
  ],
  education: [
    {
      degree: "BS English, Semester 8",
      institution: "Shah Abdul Latif University, Ghotki campus",
      status: "Final Year",
      details: "Seven semesters complete, currently in the final year pursuing specialized literature and linguistic research."
    },
    {
      degree: "Intermediate",
      institution: "Roshan Tara Model Higher Secondary School, Ghotki",
      status: "Completed",
      details: "Higher secondary education with solid academic foundations in language and humanities."
    }
  ],
  languages: [
    { name: "Sindhi", proficiency: "Native / First Language", tag: "Native" },
    { name: "Urdu", proficiency: "National Language / Fluent", tag: "Fluent" },
    { name: "English", proficiency: "Academic & Professional Writing", tag: "Professional" }
  ],
  workingStyle: [
    { title: "Communication", desc: "Clear, articulated written & spoken conveyance." },
    { title: "Time Management", desc: "Disciplined delivery on academic & client deadlines." },
    { title: "Teamwork", desc: "Collaborative and supportive team orientation." },
    { title: "Creativity", desc: "Aesthetic harmony in visual design & literary expression." },
    { title: "Problem-Solving", desc: "Analytical mindset for research & practical roadblocks." }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Writing & Research",
    iconName: "PenTool",
    color: "from-rose-500 to-pink-500",
    skills: [
      { name: "Content Writing", level: "Expert" },
      { name: "Academic Research", level: "Advanced" },
      { name: "Classical Poetry Study", level: "Specialized" },
      { name: "Report Writing & Analysis", level: "Advanced" },
      { name: "Literary Editing & Proofreading", level: "Proficient" }
    ]
  },
  {
    title: "Digital & AI Tools",
    iconName: "Cpu",
    color: "from-purple-500 to-indigo-500",
    skills: [
      { name: "Google's Generative AI Studio", level: "Certified" },
      { name: "MS Excel (Data & Formulas)", level: "Certified" },
      { name: "MS Word & Documentation", level: "Advanced" },
      { name: "PowerPoint Presentations", level: "Advanced" },
      { name: "Freelancing Platforms", level: "Trained" }
    ]
  },
  {
    title: "Visual Design",
    iconName: "Palette",
    color: "from-amber-500 to-orange-500",
    skills: [
      { name: "Invitations (Weddings, Iftar, Birthdays)", level: "Specialist" },
      { name: "Product Posters & Social Ads", level: "Advanced" },
      { name: "Bakery & Restaurant Menus", level: "Specialist" },
      { name: "Promotional Event Flyers", level: "Advanced" },
      { name: "Typography & Layout Hierarchy", level: "Proficient" }
    ]
  },
  {
    title: "Working Style & Soft Skills",
    iconName: "Sparkles",
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "Clear Communication" },
      { name: "Punctual Time Management" },
      { name: "Cross-functional Teamwork" },
      { name: "Creative Aesthetic Sense" },
      { name: "Analytical Problem-Solving" }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "nylp-leadership",
    role: "Leadership Session Attendee",
    organization: "National Youth Leadership Program (NYLP)",
    period: "27 SEP 2026",
    badge: "Leadership",
    type: "Leadership",
    highlights: [
      "Attended the prestigious leadership session celebrating 100K followers milestone on LinkedIn.",
      "Engaged with youth leaders, discussing community impact, public speaking, and professional development.",
      "Awarded Certificate of Valuable Participation signed by Founder & Chairman Khoja Sheraaz Ali."
    ]
  },
  {
    id: "peace-summit",
    role: "Summit Participant & Delegate",
    organization: "1st International Peace Summit 2026 (IHRC-RFT)",
    location: "Istanbul, Turkey",
    period: "20–21 SEP 2026",
    badge: "International Summit",
    type: "Summit",
    highlights: [
      "Took part in the international summit focusing on global peace, human rights, and diplomatic collaboration.",
      "Received an official certificate of participation with international verification ID: IPS-2026-IHRC-654.",
      "Engaged with international delegates and human rights ambassadors."
    ]
  },
  {
    id: "codealpha-internship",
    role: "Content Writing & Research Intern",
    organization: "CodeAlpha",
    period: "10 JUN – 10 JUL 2026",
    badge: "Virtual Internship",
    type: "Internship",
    highlights: [
      "Completed a rigorous one-month virtual internship program focused on content writing, research, and technical reporting.",
      "Received a formal Letter of Recommendation directly from CodeAlpha's Founder and CEO highlighting exceptional analytical skills and rapid technology adoption.",
      "Fostered strong peer collaboration and displayed high-level productivity in emerging tech workflows."
    ]
  },
  {
    id: "digiskills-training",
    role: "Freelancing Training Program",
    organization: "DigiSkills.pk (DSTP 2.0, Batch 08)",
    period: "JUL – OCT 2024",
    badge: "Govt of Pakistan Certification",
    type: "Training",
    highlights: [
      "Completed the official freelancing course under the Ministry of IT & Telecom’s DigiSkills Training Program.",
      "Conducted in partnership with Virtual University of Pakistan and Ignite National Technology Fund.",
      "Graduated with official training certificate issued on 24 October 2024."
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "wedding-invitation",
    title: "Wedding Invitation — Zayb & Tahleem",
    category: "Invitation",
    categoryLabel: "INVITATION",
    shortDesc: "Refined luxury wedding invitation featuring ornate botanical filigree and classic serif typography.",
    fullDesc: "Custom-crafted bespoke wedding card designed for the ceremony of Zayb & Tahleem. Integrates delicate floral borders, romantic champagne tones, and balanced typographical hierarchy that conveys warmth, elegance, and solemnity.",
    clientOrContext: "Client Commission / Private Event",
    toolsUsed: ["Visual Design", "Typography Hierarchy", "Digital Layout"],
    themeColor: "from-rose-400 to-amber-200",
    accentBg: "bg-rose-950/40 border-rose-800/40",
    previewType: "wedding",
    metadata: {
      date: "May 2030 / Bespoke Edition",
      dimensions: "Print Ready 5x7 in",
      purpose: "Formal Wedding Reception",
      instructorOrTarget: "Private Wedding Host"
    }
  },
  {
    id: "birthday-invitation",
    title: "Birthday Party Invitation — Midnight Celebration",
    category: "Invitation",
    categoryLabel: "INVITATION",
    shortDesc: "Vibrant dark-mode festive party invitation with glowing balloons, confetti, and modern bold layout.",
    fullDesc: "Designed with an energetic midnight navy and gold color scheme. Features floating celebration balloons, illuminated script typography ('Birthday Party'), and clear logistical details for guests.",
    clientOrContext: "Event Invitation Series",
    toolsUsed: ["Digital Art", "Lighting Effects", "Party Collateral"],
    themeColor: "from-amber-400 to-indigo-500",
    accentBg: "bg-indigo-950/40 border-indigo-800/40",
    previewType: "birthday",
    metadata: {
      date: "December 25",
      dimensions: "Digital & Mobile Invite (1080x1920)",
      purpose: "Birthday Celebration",
      instructorOrTarget: "Youth Social Gathering"
    }
  },
  {
    id: "bakery-menu",
    title: "Artisan Bakery Menu — Sweet Delights",
    category: "Menu",
    categoryLabel: "MENU",
    shortDesc: "Pastel-themed menu layout featuring cupcake assortments, desserts, drinks, and clean price tables.",
    fullDesc: "A warm and appetizing menu crafted with a soft peach and cream palette. Features distinct sections for Cupcakes (Vanilla, Chocolate, Cherry, Blueberry, Strawberry), Gourmet Desserts, and Refreshing Drinks alongside price indicators.",
    clientOrContext: "Culinary & Bakery Client Project",
    toolsUsed: ["Menu Engineering", "Pricing Grids", "Pastel Aesthetics"],
    themeColor: "from-pink-400 to-amber-300",
    accentBg: "bg-pink-950/40 border-pink-800/40",
    previewType: "bakery",
    metadata: {
      dimensions: "A4 Tri-fold / Single Page",
      purpose: "Bakery Counter & Dine-in Menu",
      instructorOrTarget: "Artisan Cafe & Bakery"
    }
  },
  {
    id: "restaurant-flyer",
    title: "Restaurant Promo Flyer — 25% Off Deal",
    category: "Flyer",
    categoryLabel: "FLYER",
    shortDesc: "High-contrast promotional marketing flyer highlighting exclusive food discount deals and dining hotline.",
    fullDesc: "Eye-catching promotional flyer featuring rich dark culinary backdrop, appetizing food imagery, prominent 'DISCOUNT 25% NOW' badge, fast delivery value proposition ('Get the best food in your home'), and contact information.",
    clientOrContext: "Restaurant Marketing Campaign",
    toolsUsed: ["Food Marketing", "Discount Callout Badges", "Promotional Print"],
    themeColor: "from-amber-500 to-red-600",
    accentBg: "bg-amber-950/40 border-amber-800/40",
    previewType: "restaurant",
    metadata: {
      dimensions: "Social Feed (1080x1080) & Handout Flyer",
      purpose: "Customer Acquisition & Promo Campaign",
      instructorOrTarget: "Bistro & Gourmet Eatery"
    }
  },
  {
    id: "iftar-invitation",
    title: "Iftar Gathering Invitation — Ramadan Mubarak",
    category: "Invitation",
    categoryLabel: "INVITATION",
    shortDesc: "Graceful Ramadan Iftar invitation decorated with white florals, gold geometric motifs, and elegant calligraphy.",
    fullDesc: "Spiritual and festive invitation designed for an evening Iftar banquet. Emphasizes warm hospitality with 'Joyfully invite you to invite their Iftar party', accompanied by elegant botanical florals and soft golden flourishes.",
    clientOrContext: "Community & Family Gathering",
    toolsUsed: ["Islamic Art Elements", "Serif Typography", "Floral Accents"],
    themeColor: "from-emerald-400 to-amber-200",
    accentBg: "bg-emerald-950/40 border-emerald-800/40",
    previewType: "iftar",
    metadata: {
      date: "Ramadan Season",
      dimensions: "Square Digital Card",
      purpose: "Community Iftar Gathering",
      instructorOrTarget: "Family & Organizational Host"
    }
  },
  {
    id: "skincare-ad",
    title: "Minimalist Skincare Product Ad",
    category: "Product Ad",
    categoryLabel: "PRODUCT AD",
    shortDesc: "Sleek, clinical, and clean beauty advertisement showcasing pure skincare bottles with botanical shadows.",
    fullDesc: "Designed with cool aquatic blues and pristine white bottles. Highlights minimalist cosmetic branding, clear call-to-action button ('SHOP NOW'), and limited availability messaging designed for high-conversion social campaigns.",
    clientOrContext: "E-Commerce Beauty Campaign",
    toolsUsed: ["Cosmetics Advertising", "Minimalist Clean Layout", "CTA Optimization"],
    themeColor: "from-sky-400 to-blue-600",
    accentBg: "bg-sky-950/40 border-sky-800/40",
    previewType: "skincare",
    metadata: {
      dimensions: "Instagram / Digital Ad 1:1",
      purpose: "Product Launch & Online Store Promotion",
      instructorOrTarget: "Dermatological Skincare Brand"
    }
  },
  {
    id: "beauty-serum-ad",
    title: "Organic Beauty Serum — Amber Bottle Ad",
    category: "Product Ad",
    categoryLabel: "PRODUCT AD",
    shortDesc: "Luxury cosmetic poster for revitalizing beauty serums with organic botanicals and warm amber hues.",
    fullDesc: "Warm, earthy luxury beauty campaign featuring amber dropper bottles nestled in natural botanicals. Focuses on organic authenticity, gentle typography, and premium skincare appeal.",
    clientOrContext: "Organic Cosmetics Showcase",
    toolsUsed: ["Luxury Branding", "Earth-tone Color Palette", "Product Display"],
    themeColor: "from-amber-600 to-stone-400",
    accentBg: "bg-amber-950/40 border-stone-800/40",
    previewType: "serum",
    metadata: {
      dimensions: "Print & Social Carousel",
      purpose: "Organic Serum Campaign",
      instructorOrTarget: "Natural Skincare Line"
    }
  },
  {
    id: "poetry-assignment",
    title: "Classical Poetry Academic Study",
    category: "Academic",
    categoryLabel: "ACADEMIC",
    shortDesc: "University literary analysis exploring John Donne's Holy Sonnets: 'Thou hast made and shall thy work decay!'.",
    fullDesc: "Academic submission for Shah Abdul Latif University (Ghotki campus) assigned by Sir Ahemed on 12 May 2025. Deep critical inquiry into classical poetry themes of divine grace, existential mortality, and literary rhetorical devices.",
    clientOrContext: "Shah Abdul Latif University — Dept. of English",
    toolsUsed: ["Literary Analysis", "Classical Poetry Research", "Academic Formatting"],
    themeColor: "from-violet-400 to-rose-300",
    accentBg: "bg-violet-950/40 border-violet-800/40",
    previewType: "poetry",
    metadata: {
      date: "12 May 2025",
      instructorOrTarget: "Assigned by Sir Ahemed",
      purpose: "Semester Academic Requirement",
      dimensions: "Formal Literary Research Paper"
    }
  }
];

export const CERTIFICATES: CertificateItem[] = [
  {
    id: "codealpha-cert",
    title: "Content Writing & Research Internship",
    issuer: "CodeAlpha Virtual Internship Program",
    issueDate: "11 JUL 2026",
    credentialId: "CA/GP1128383",
    description: "Awarded for active participation with dedication and hard work in Content Writing & Research during the virtual internship program.",
    category: "Internship",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    signatory: "CEO & Founder, CodeAlpha",
    verifyNote: "MSME Verified & QR Authentication Code included"
  },
  {
    id: "genai-cert",
    title: "Introduction to Generative AI Studio",
    issuer: "Simplilearn SkillUp",
    partner: "Google Cloud",
    issueDate: "2026",
    description: "Declaration of Completion for demonstrating professional initiative and commitment to deepening skills in Google Cloud Generative AI Studio.",
    category: "Artificial Intelligence",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    signatory: "Krishna Kumar, CEO, Simplilearn",
    verifyNote: "Certified in Google Cloud Generative AI Studio"
  },
  {
    id: "excel-cert",
    title: "Introduction to MS Excel",
    issuer: "Simplilearn SkillUp",
    partner: "Microsoft",
    issueDate: "2026",
    description: "Declaration of Completion acknowledging professional proficiency in data manipulation, formatting, and computational spreadsheets using Microsoft Excel.",
    category: "Productivity",
    badgeColor: "bg-teal-500/10 text-teal-400 border-teal-500/30",
    signatory: "Krishna Kumar, CEO, Simplilearn",
    verifyNote: "Microsoft Curriculum Alignment"
  },
  {
    id: "digiskills-cert",
    title: "Freelancing Training Certificate",
    issuer: "DigiSkills.pk — Govt. of Pakistan",
    partner: "Virtual University & Ignite Fund",
    issueDate: "24 OCT 2024",
    credentialId: "DSTP2.0-Batch-08 Jul 2024-Oct 2024",
    description: "Completed comprehensive freelancing training under Ministry of IT & Telecom with Virtual University of Pakistan and Ignite National Technology Fund.",
    category: "Freelancing",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    signatory: "Rector Virtual University & CEO Ignite",
    verifyNote: "National Technology Certification ID: K28QWMRNK"
  },
  {
    id: "nylp-cert",
    title: "Leadership Session Participation",
    issuer: "National Youth Leadership Program (NYLP)",
    issueDate: "27 SEP 2026",
    description: "Certificate of Participation honoring valuable attendance and active contribution during the NYLP Leadership Session celebrating 100K Followers on LinkedIn.",
    category: "Leadership",
    badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
    signatory: "Khoja Sheraaz Ali, Founder & Chairman, NYLP",
    verifyNote: "Youth Leadership Credential"
  },
  {
    id: "peace-summit-cert",
    title: "1st International Peace Summit 2026",
    issuer: "IHRC-RFT · Istanbul, Turkey",
    issueDate: "20–21 SEP 2026",
    credentialId: "IPS-2026-IHRC-654",
    description: "Certificate of Participation presented in recognition of valuable participation and dedicated efforts in making the 1st International Peace Summit 2026 a success.",
    category: "Global Summit",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/30",
    signatory: "Amb. Dr. M. Shahid Amin Khan, World Chairman IHRC-RFT",
    verifyNote: "International Diplomatic & Human Rights Summit, Turkey"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "codealpha-recommendation-1",
    quote: "He/She has excellent analytical skills and He/She quickly acquired new skills and adeptly adapted to emerging technologies, demonstrating a high level of productivity.",
    author: "Founder & CEO",
    title: "Founder & Chief Executive Officer",
    organization: "CodeAlpha Virtual Internship Program",
    date: "11 JUL 2026",
    documentType: "Letter of Recommendation"
  },
  {
    id: "codealpha-recommendation-2",
    quote: "He/She consistently displayed a willingness to provide assistance and fostered strong collaboration with fellow team members.",
    author: "Founder & CEO",
    title: "Founder & Chief Executive Officer",
    organization: "CodeAlpha Virtual Internship Program",
    date: "11 JUL 2026",
    documentType: "Letter of Recommendation"
  },
  {
    id: "nylp-citation",
    quote: "In recognition of your valuable participation and contribution to the NYLP Leadership Session.",
    author: "Khoja Sheraaz Ali",
    title: "Founder & Chairman",
    organization: "National Youth Leadership Program (NYLP)",
    date: "27 SEP 2026",
    documentType: "Citation of Recognition"
  }
];
