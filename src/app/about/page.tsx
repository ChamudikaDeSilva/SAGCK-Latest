import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SchoolCrest } from "@/components/SchoolCrest";
import { HeritageTimelineSection } from "@/components/home/HeritageTimelineSection";
import { HousesShowcaseSection } from "@/components/home/HousesShowcaseSection";
import { ParallaxLayer, RevealBlock } from "@/components/motion/ParallaxPrimitives";
import { SCHOOL_IDENTITY } from "@/data/schoolData";

export const metadata: Metadata = {
  title: "Heritage & Leadership",
  description:
    "Discover the founding story of St. Anthony's Girls' College, Kandy from May 10, 1938, our pioneers, the SAGC Excelsior crest, and our four houses.",
};

const CREST_SYMBOLS = [
  {
    element: "EXCELSIOR Motto Band",
    meaning:
      "Inscribed diagonally across our royal blue shield, calling every Antonian daughter 'Ever Higher' in virtue, intellect, and leadership.",
  },
  {
    element: "SAGC Monogram",
    meaning:
      "Unites generations of St. Anthony's Girls' College, Kandy students, educators, and alumnae since May 10, 1938.",
  },
  {
    element: "Book & St. Anthony's Lily",
    meaning:
      "Combines scholarly knowledge across languages and sciences with purity of heart, humility, and grace.",
  },
  {
    element: "Dark Blue, Light Blue & Yellow",
    meaning:
      "Our proud college colors uniting depth of character, luminous clarity of thought, and radiant vitality.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Founded May 10, 1938 • Excelsior"
        title="The Story of Kandy's"
        italicWord="Antonian Daughters"
        description="From 38 students gathered by Rev. Fr. Corne Hyid and the Good Shepherd Sisters in a single building to a leading girls' institution in Sri Lanka's hill capital."
        image="/images/courtyard-arch.jpg"
        imageAlt="Historic veranda courtyard at St. Anthony's Girls' College, Kandy"
        currentPage="Heritage"
      />

      {/* Founders & Early Pioneers Narrative */}
      <section className="py-20 sm:py-28 bg-ivory-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <RevealBlock>
              <span className="text-xs uppercase tracking-[0.24em] text-sky-600 font-semibold">
                Pioneering Roots
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-navy-900 mt-2 leading-tight">
                Born in Faith, <span className="italic text-sky-600">Protected by Parents</span>
              </h2>
            </RevealBlock>

            <RevealBlock delay={0.1} className="space-y-4 text-base text-navy-900/80 leading-relaxed">
              <p>
                On <strong>May 10, 1938</strong>, Rev. Father Corne Hyid founded St. Anthony&apos;s
                Girls&apos; College in Kandy with the decisive help of Sister Mary Ignatius,
                Principal of Good Shepherd Convent. Sister Mary Andrew was entrusted as the first
                governor, guiding the first cohort of 38 pupils alongside dedicated staff members
                Miss Daisy Agnos and Miss Doris Bolin.
              </p>
              <p>
                When early administrative reviews threatened to close the young school, passionate
                protests by Kandy parents preserved its doors. Sister Mary Bernard later introduced
                Ordinary Level classes and launched Advanced Level Arts in 1966, seeing Miss Pushpa
                Boyagoda enter university as our first collegiate graduate.
              </p>
              <p>
                Subsequent visionary principals—including Mrs. N. K. Pilapitiya and Mrs. P.
                Attanayake—expanded the Katugastota Road campus with Science, Bio-Science, Commerce,
                and Home Science wings alongside vibrant playing grounds.
              </p>
            </RevealBlock>
          </div>

          <div className="lg:col-span-6">
            <ParallaxLayer offsetY={[-18, 18]}>
              <div className="rounded-[2rem] bg-navy-950 text-ivory-50 p-8 sm:p-10 border border-sky-400/30 shadow-2xl space-y-8">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <SchoolCrest className="w-24 h-24 shrink-0" animate />
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-sky-300 font-semibold">
                      Official College Crest
                    </p>
                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold mt-1">
                      SAGC • Excelsior
                    </h3>
                    <p className="font-sinhala text-sm text-gold-300 mt-1">
                      &ldquo;{SCHOOL_IDENTITY.visionSinhala}&rdquo;
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {CREST_SYMBOLS.map((sym) => (
                    <div
                      key={sym.element}
                      className="rounded-2xl bg-white/[0.05] border border-sky-300/15 p-4 space-y-1.5"
                    >
                      <h4 className="font-serif text-lg font-semibold text-gold-300">
                        {sym.element}
                      </h4>
                      <p className="text-xs text-ivory-200/75 leading-relaxed">{sym.meaning}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ParallaxLayer>
          </div>
        </div>
      </section>

      {/* Library & Archival Spirit */}
      <section className="py-16 sm:py-24 bg-ivory-200/75 border-y border-ivory-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-ivory-300 shadow-lg">
              <Image
                src="/images/library-heritage.jpg"
                alt="Sunlit historic college reading hall at St. Anthony's Girls' College, Kandy"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs uppercase tracking-[0.24em] text-sky-600 font-semibold">
              College Leadership
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-navy-900">
              Guided by Dedicated Stewards
            </h2>
            <p className="text-base text-navy-900/80 leading-relaxed">
              Under the stewardship of <strong>{SCHOOL_IDENTITY.principal}</strong> and our
              experienced academic faculty, the college continues harmonizing timeless discipline
              with 21st-century pedagogical excellence across all primary and collegiate wings.
            </p>
            <blockquote className="rounded-2xl border-l-4 border-navy-800 bg-ivory-50 p-5 font-serif text-xl italic text-navy-900 shadow-xs">
              &ldquo;{SCHOOL_IDENTITY.visionEnglish}&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      <HeritageTimelineSection />
      <HousesShowcaseSection />
    </>
  );
}
