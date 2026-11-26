import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Cpu, FlaskConical, Globe2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { AcademicsExplorerSection } from "@/components/home/AcademicsExplorerSection";
import { ParallaxLayer, RevealBlock } from "@/components/motion/ParallaxPrimitives";

export const metadata: Metadata = {
  title: "Academics & Streams",
  description:
    "Explore primary education, Grade 6 English Medium, O/L mastery, and Collegiate A/L Bio-Science, Physical Science, Commerce, Arts, and Home Science at SAGCK.",
};

const FACILITIES = [
  {
    icon: FlaskConical,
    title: "Bio-Science & Chemistry Labs",
    detail:
      "Fully equipped microscopy and wet chemistry labs supporting G.C.E. A/L Bio-Science and Physical Science research.",
  },
  {
    icon: Cpu,
    title: "Multimedia & ICT Innovation",
    detail:
      "Modernized computer centers established under national secondary education initiatives for coding, digital literacy, and robotics.",
  },
  {
    icon: Globe2,
    title: "English Medium Wing",
    detail:
      "Introduced from Grade 6 upward so students develop fluent international expression alongside national heritage.",
  },
  {
    icon: BookOpen,
    title: "Collegiate Library & Reading Hall",
    detail:
      "Sunlit timber-arched study space housing thousands of reference volumes across Sinhala, English, and Tamil scholarship.",
  },
];

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        eyebrow="Scholarship & Inquiry"
        title="Academic Rigor Across"
        italicWord="Every Stream"
        description="Aligned with Sri Lanka's Ministry of Education national framework, enriched with English Medium pathways from Grade 6, modern STEM hubs, and collegiate specialization."
        image="/images/academic-stem.jpg"
        imageAlt="St. Anthony's Girls' College students collaborating in modern STEM laboratory"
        currentPage="Academics"
      />

      <AcademicsExplorerSection />

      {/* Campus Learning Facilities */}
      <section className="py-24 sm:py-32 bg-ivory-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 space-y-14">
          <RevealBlock className="max-w-2xl space-y-3">
            <span className="text-xs uppercase tracking-[0.24em] text-sky-600 font-semibold">
              Learning Infrastructure
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-navy-900">
              Spaces Designed for <span className="italic text-sky-600">Discovery</span>
            </h2>
          </RevealBlock>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FACILITIES.map((fac, idx) => {
              const Icon = fac.icon;
              return (
                <RevealBlock key={fac.title} delay={idx * 0.07}>
                  <div className="h-full rounded-3xl border border-ivory-300 bg-ivory-50 p-7 shadow-xs hover:shadow-lg hover:border-sky-500/40 transition-all duration-300 space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-navy-800 text-gold-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-navy-900">
                      {fac.title}
                    </h3>
                    <p className="text-sm text-navy-900/75 leading-relaxed">{fac.detail}</p>
                  </div>
                </RevealBlock>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-[2rem] bg-navy-950 text-ivory-50 p-8 sm:p-12 border border-sky-400/25 overflow-hidden">
            <div className="lg:col-span-6 space-y-4">
              <p className="text-xs uppercase tracking-[0.24em] text-sky-300 font-semibold">
                Home Science &amp; Collegiate Arts Legacy
              </p>
              <h3 className="font-serif text-3xl sm:text-4xl font-semibold">
                Honoring Miss Pushpa Boyagoda&apos;s 1966 Milestone
              </h3>
              <p className="text-sm sm:text-base text-ivory-200/80 leading-relaxed">
                Since our first A/L university scholar entered higher education in 1966, hundreds of
                Antonian graduates have entered Sri Lankan universities in Medicine, Engineering,
                Law, Economics, Languages, and Home Science.
              </p>
              <div className="pt-2">
                <Link
                  href="/admissions"
                  className="inline-flex items-center gap-2 rounded-full bg-gold-500 text-navy-950 px-6 py-3 text-sm font-semibold hover:bg-gold-400 transition-colors"
                >
                  <span>Inquire About A/L &amp; Grade 6 Placement</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <ParallaxLayer offsetY={[-14, 14]}>
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/15">
                  <Image
                    src="/images/library-heritage.jpg"
                    alt="Collegiate reading hall and library at SAGCK"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </ParallaxLayer>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
