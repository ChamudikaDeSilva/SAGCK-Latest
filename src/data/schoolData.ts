export interface HeritageMilestone {
  year: string;
  era: string;
  title: string;
  description: string;
  highlight: string;
  image: string;
}

export interface HouseProfile {
  id: string;
  name: string;
  patron: string;
  patronRole: string;
  colorHex: string;
  accentHex: string;
  textHex: string;
  motto: string;
  values: string[];
  story: string;
  legacyWins: string;
}

export interface AcademicPathway {
  id: string;
  label: string;
  grades: string;
  headline: string;
  summary: string;
  mediums: string[];
  streams: {
    name: string;
    detail: string;
  }[];
  highlights: string[];
  image: string;
}

export interface CoCurricularItem {
  name: string;
  category: "Leadership & Service" | "STEM & Innovation" | "Aesthetics & Music" | "Athletics & Field Sports";
  heritageNote: string;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  subtitle: string;
  category: string;
  column: 1 | 2 | 3;
  aspectClass: string;
}

export interface NoticeItem {
  id: string;
  date: string;
  category: "Heritage" | "Academics" | "Athletics" | "Admissions";
  title: string;
  excerpt: string;
}

export const SCHOOL_IDENTITY = {
  name: "St. Anthony's Girls' College",
  city: "Kandy",
  fullName: "St. Anthony's Girls' College, Kandy",
  sinhalaName: "ශාන්ත අන්තෝනි බාලිකා විද්‍යාලය, මහනුවර",
  shortCode: "SAGCK",
  motto: "Excelsior — Ever Higher",
  colorsLabel: "Dark Blue, Light Blue & Yellow",
  foundedDate: "May 10, 1938",
  foundedYear: 1938,
  founder: "Rev. Fr. Corne Hyid",
  pioneers: "Sr. Mary Ignatius & Sr. Mary Andrew (Good Shepherd Pioneers)",
  visionSinhala: "දැයේ සවියට අභිමානවත් දියණියක්",
  visionEnglish: "A Proud Daughter for the Strength of the Nation",
  mission:
    "Nurturing compassionate, intellectually fearless, and culturally grounded young women in the hill capital of Kandy through holistic national education, bilingual fluency, scientific inquiry, and spirited sportsmanship.",
  address: "381A Katugastota Road, Kandy 20000, Sri Lanka",
  phone: "+94 81 221 2597",
  website: "www.sagc.sch.lk",
  principal: "Mrs. Ganga Jayawardena",
  principalTitle: "Principal (Covering Duties) & College Administration",
  copyrightYear: 2026,
};

export const HERO_STATS = [
  { value: 1938, suffix: "", label: "Founded May 10", prefix: "" },
  { value: 3500, suffix: "+", label: "Antonian Daughters", prefix: "" },
  { value: 25, suffix: "+", label: "Active Societies", prefix: "" },
  { value: 13, suffix: "+", label: "Sports Disciplines", prefix: "" },
];

export const HERITAGE_TIMELINE: HeritageMilestone[] = [
  {
    year: "1938",
    era: "The Genesis",
    title: "38 Pioneers in a Single Kandy Building",
    description:
      "Founded on May 10, 1938, in historic Senkadagala by Rev. Fr. Corne Hyid alongside Sister Mary Ignatius of the Good Shepherd Convent. Sister Mary Andrew served as first governor with pioneering educators Miss Daisy Agnos and Miss Doris Bolin.",
    highlight: "May 10, 1938 — First Roll Call of 38 Students",
    image: "/images/courtyard-arch.jpg",
  },
  {
    year: "1940s",
    era: "Community Resilience",
    title: "Saved by Parents' Unwavering Solidarity",
    description:
      "When early departmental proposals threatened the young girls' college with closure, determined Kandy parents rallied in heartfelt protest, securing the institution's future as a vital beacon of girls' education in the Central Province.",
    highlight: "Community Unity Preserved the Campus",
    image: "/images/hero.webp",
  },
  {
    year: "1966–1967",
    era: "Scholarly & Cultural Firsts",
    title: "First University Scholar & Champion Western Band",
    description:
      "Under Sister Mary Bernard, Ordinary Level classes matured into Advanced Level Arts in 1966, sending Miss Pushpa Boyagoda as our first university-selected student. Just one year later, Kandy's very first Western School Band captured the 1967 Bandaranaike Memorial Championship.",
    highlight: "1967 Bandaranaike Memorial Band Champions",
    image: "/images/band-heritage.jpg",
  },
  {
    year: "1970s–2000s",
    era: "Academic Expansion",
    title: "Science, Commerce, Home Science & English Medium",
    description:
      "Through dedicated principals including Mrs. N. K. Pilapitiya and Mrs. P. Attanayake, the campus expanded across Katugastota Road with dedicated Bio-Science laboratories, Commerce wings, Home Science facilities, playground grounds, and Grade 6 English Medium streams.",
    highlight: "Full Collegiate Streams & Modernized Labs",
    image: "/images/library-heritage.jpg",
  },
  {
    year: "Today",
    era: "Modern Excellence",
    title: "Digital Innovation Meets Timeless Heritage",
    description:
      "Now thriving as a premier girls' school in the Central Province, Antonian daughters excel in national STEM competitions, multimedia robotics, Girl Guides, National Cadet Corps, District Hockey, and the Pallekele Women's Cricket encounter.",
    highlight: "3,500+ Students • 25+ Clubs • 13+ Sports",
    image: "/images/academic-stem.jpg",
  },
];

export const FOUR_HOUSES: HouseProfile[] = [
  {
    id: "andrew",
    name: "Andrew House",
    patron: "Sister Mary Andrew",
    patronRole: "First Governor & Pioneer Administrator (1938)",
    colorHex: "#B91C1C",
    accentHex: "#FFD43B",
    textHex: "#FFFFFF",
    motto: "Steadfast Courage & First Light",
    values: ["Pioneering Spirit", "Graceful Leadership", "Moral Integrity"],
    story:
      "Named in tribute to Sister Mary Andrew, assigned by the Good Shepherd Convent in 1938 to shepherd our original 38 students through the college's founding years.",
    legacyWins: "Renowned for House Athletics Track supremacy and Western Brass leadership.",
  },
  {
    id: "madeline",
    name: "Madeline House",
    patron: "Sister Mary Madeline",
    patronRole: "Esteemed Early College Principal",
    colorHex: "#0C74B0",
    accentHex: "#FFD43B",
    textHex: "#FFFFFF",
    motto: "Wisdom Anchored in Service",
    values: ["Intellectual Depth", "Harmony", "Quiet Determination"],
    story:
      "Honoring Sister Mary Madeline's enduring devotion to academic discipline and pastoral care, shaping generations of articulate, compassionate Antonian scholars.",
    legacyWins: "Consistent frontrunners in Inter-House Debating, Literary Arts, and Hockey.",
  },
  {
    id: "maurice",
    name: "Maurice House",
    patron: "Sister Mary Maurice",
    patronRole: "Distinguished Pioneer Principal",
    colorHex: "#14534B",
    accentHex: "#8ED5FB",
    textHex: "#FFFFFF",
    motto: "Ever Growing, Ever Ascending",
    values: ["Creativity", "Resilience", "Community Fellowship"],
    story:
      "Dedicated to Sister Mary Maurice, whose guidance nurtured both artistic refinement and resilient character across Kandy's evolving educational landscape.",
    legacyWins: "Celebrated for Cultural Aesthetics, Girl Guides excellence, and Netball.",
  },
  {
    id: "bernard",
    name: "Bernard House",
    patron: "Sister Mary Bernard",
    patronRole: "Visionary Principal (O/L & A/L Architect, until 1973)",
    colorHex: "#B88600",
    accentHex: "#FFFFFF",
    textHex: "#FFFFFF",
    motto: "Truth Illuminated by Inquiry",
    values: ["Academic Ambition", "Perseverance", "Excellence"],
    story:
      "Named after Sister Mary Bernard, who pioneered Ordinary Level pathways and ushered in the 1966 Advanced Level milestone, opening university doors for Kandy girls.",
    legacyWins: "Distinguished in Science Quiz Olympiads, Cadet Corps drills, and Cricket.",
  },
];

export const ACADEMIC_PATHWAYS: AcademicPathway[] = [
  {
    id: "primary",
    label: "Primary Division",
    grades: "Grades 1 – 5",
    headline: "Joyful Foundations of Curiosity & Character",
    summary:
      "Our primary wing cultivates literacy, numeracy, environmental wonder, and bilingual confidence in warm, sunlit classrooms shaped by Kandy's gentle scholarly rhythm.",
    mediums: ["Sinhala Medium", "Tamil Language Enrichment", "Activity-Based English"],
    streams: [
      {
        name: "Foundational Literacy & Numeracy",
        detail: "Structured inquiry methods preparing scholars confidently for the Grade 5 National Scholarship examination.",
      },
      {
        name: "Little Friends & Rhythm",
        detail: "Early character formation through Little Friends guiding, choral singing, eastern dance, and outdoor play.",
      },
    ],
    highlights: [
      "Strong annual Grade 5 National Scholarship qualifiers",
      "Dedicated primary reading corners & interactive visual aids",
      "Nurturing transition into middle school leadership",
    ],
    image: "/images/courtyard-arch.jpg",
  },
  {
    id: "secondary",
    label: "Secondary & O/L",
    grades: "Grades 6 – 11",
    headline: "Bilingual Fluency & Holistic G.C.E. O/L Mastery",
    summary:
      "Starting in Grade 6, students may pursue either National Sinhala Medium or the College's prestigious English Medium stream alongside modern IT, aesthetic arts, and laboratory sciences.",
    mediums: ["English Medium (from Grade 6)", "Sinhala Medium"],
    streams: [
      {
        name: "Core National O/L Curriculum",
        detail: "Mathematics, Science, English, First Language, History, and Religion with diagnostic mentorship.",
      },
      {
        name: "ICT, Multimedia & Basket Electives",
        detail: "Hands-on computer laboratories, Western & Eastern Music, Dancing, Art, Commerce, and Health Sciences.",
      },
    ],
    highlights: [
      "English Medium pathway established from Grade 6 upward",
      "Modernized ICT & Multimedia innovation labs",
      "Consistently high G.C.E. O/L island & provincial pass rates",
    ],
    image: "/images/academic-stem.jpg",
  },
  {
    id: "collegiate",
    label: "Collegiate A/L",
    grades: "Grades 12 – 13",
    headline: "University-Bound Specialization & Research Rigor",
    summary:
      "Building on our historic 1966 A/L milestone, our collegiate division empowers young women across four specialized streams to enter Medicine, Engineering, Law, Management, and Humanities.",
    mediums: ["Sinhala Medium", "English Medium (Science & Commerce)"],
    streams: [
      {
        name: "Bio-Science & Physical Science",
        detail: "Physics, Chemistry, Biology, and Combined Mathematics backed by equipped wet laboratories and olympiad coaching.",
      },
      {
        name: "Commerce & Accounting",
        detail: "Economics, Accounting, Business Studies, and IT designed for modern analytical and entrepreneurial leadership.",
      },
      {
        name: "Arts, Languages & Home Science",
        detail: "Humanities, classical & modern languages, Aesthetics, and the college's celebrated Home Science discipline.",
      },
    ],
    highlights: [
      "Honoring Miss Pushpa Boyagoda's 1966 first-university legacy",
      "Full archival & reference reading hall access",
      "Senior Prefect Guild & leadership mentorship programs",
    ],
    image: "/images/library-heritage.jpg",
  },
];

export const CO_CURRICULAR_ITEMS: CoCurricularItem[] = [
  {
    name: "Western Marching Band",
    category: "Aesthetics & Music",
    heritageNote: "First in Kandy District; 1967 Bandaranaike Memorial Champions.",
  },
  {
    name: "Girl Guides & Little Friends",
    category: "Leadership & Service",
    heritageNote: "Decades of All-Island campcraft, civic service, and Queen's Guide honors.",
  },
  {
    name: "National Cadet Corps (Girls)",
    category: "Leadership & Service",
    heritageNote: "Precision drill, discipline, and Central Province battalion accolades.",
  },
  {
    name: "Women's Cricket XI",
    category: "Athletics & Field Sports",
    heritageNote: "Competing in the annual Pallekele International Stadium Big Match.",
  },
  {
    name: "Field Hockey Squad",
    category: "Athletics & Field Sports",
    heritageNote: "Renowned Kandy District contenders with fierce turf precision.",
  },
  {
    name: "ICT, Coding & Robotics Guild",
    category: "STEM & Innovation",
    heritageNote: "Student-led multimedia engineering, web craft, and provincial tech fairs.",
  },
  {
    name: "Science & Environmental Society",
    category: "STEM & Innovation",
    heritageNote: "Investigative STEM expos, botany conservation, and Olympiad prep.",
  },
  {
    name: "English & Sinhala Debating",
    category: "Leadership & Service",
    heritageNote: "Articulate voices representing Kandy at national parliamentary debates.",
  },
  {
    name: "Kandyan & Eastern Dance Troupe",
    category: "Aesthetics & Music",
    heritageNote: "Celebrating Senkadagala cultural artistry at national festivals.",
  },
  {
    name: "Eastern & Western Choirs",
    category: "Aesthetics & Music",
    heritageNote: "Sacred hymns, classical choral harmonies, and Founders' Day recitals.",
  },
  {
    name: "Netball & Track Athletics",
    category: "Athletics & Field Sports",
    heritageNote: "Central Province relay champions and inter-house championship pride.",
  },
  {
    name: "Prefects' Guild & Interact",
    category: "Leadership & Service",
    heritageNote: "Stewarding daily campus culture, charity drives, and community outreach.",
  },
  {
    name: "Swimming & Badminton",
    category: "Athletics & Field Sports",
    heritageNote: "13+ structured athletic disciplines nurturing grit and teamwork.",
  },
  {
    name: "Astronomical & Quiz Circles",
    category: "STEM & Innovation",
    heritageNote: "Expanding curiosity beyond textbooks with 25+ active societies.",
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "hero-vista",
    src: "/images/hero.webp",
    title: "Katugastota Road Heritage Wing",
    subtitle: "Morning light over our historic arched buildings and Kandy's emerald hills.",
    category: "Architecture",
    column: 1,
    aspectClass: "aspect-[4/3]",
  },
  {
    id: "courtyard",
    src: "/images/courtyard-arch.jpg",
    title: "The Rain-Tree Veranda",
    subtitle: "Shaded stone colonnades connecting classrooms since our early decades.",
    category: "Campus Grounds",
    column: 1,
    aspectClass: "aspect-[3/4]",
  },
  {
    id: "stem-lab",
    src: "/images/academic-stem.jpg",
    title: "STEM & Robotics Discovery",
    subtitle: "Senior scholars collaborating across microscopy, computation, and engineering.",
    category: "Academics",
    column: 2,
    aspectClass: "aspect-[3/4]",
  },
  {
    id: "band",
    src: "/images/band-heritage.jpg",
    title: "The 1967 Band Legacy",
    subtitle: "Brass trumpets, French horns, and ceremonial dark blue, light blue, and yellow banners.",
    category: "Tradition",
    column: 2,
    aspectClass: "aspect-[4/3]",
  },
  {
    id: "library",
    src: "/images/library-heritage.jpg",
    title: "Collegiate Reading Hall",
    subtitle: "Quiet scholarly reflection beneath tall timber arches and brass lamps.",
    category: "Scholarship",
    column: 3,
    aspectClass: "aspect-[4/3]",
  },
  {
    id: "sports",
    src: "/images/sports-campus.jpg",
    title: "Antonian Turf & Grounds",
    subtitle: "Field hockey and women's cricket squads training in the Kandy dawn.",
    category: "Athletics",
    column: 3,
    aspectClass: "aspect-[3/4]",
  },
];

export const LATEST_NOTICES: NoticeItem[] = [
  {
    id: "founders-day",
    date: "May 10",
    category: "Heritage",
    title: "Commemorating 88 Years of Antonian Grace",
    excerpt:
      "Honoring Rev. Fr. Corne Hyid, the Good Shepherd pioneers, and the 38 founding daughters of May 10, 1938.",
  },
  {
    id: "big-match",
    date: "Term II",
    category: "Athletics",
    title: "Annual Women's Cricket Encounter — Pallekele",
    excerpt:
      "Our First XI steps onto the international turf in dark blue, light blue, and yellow pride alongside alumni and Kandy supporters.",
  },
  {
    id: "al-intake",
    date: "Admissions",
    category: "Academics",
    title: "Grade 12 Collegiate A/L & Grade 6 English Medium Pathways",
    excerpt:
      "Applications open across Bio-Science, Physical Science, Commerce, Arts, and Home Science following national examination schedules.",
  },
];

