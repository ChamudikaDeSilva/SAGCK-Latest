"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Globe, Mail, MapPin, Phone, Send } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { RevealBlock } from "@/components/motion/ParallaxPrimitives";
import { SCHOOL_IDENTITY } from "@/data/schoolData";

const ENTRY_PATHS = [
  {
    grade: "Grade 1 Primary Intake",
    schedule: "National Admission Circular Timeline",
    detail:
      "Follows Sri Lanka Ministry of Education national primary admission guidelines for Kandy District catchment and alumni categories.",
  },
  {
    grade: "Grade 6 & English Medium",
    schedule: "Post Grade 5 Scholarship & Placement",
    detail:
      "Welcomes scholarship qualifiers and internal primary scholars entering Sinhala or Grade 6 English Medium streams.",
  },
  {
    grade: "Grade 12 Collegiate A/L",
    schedule: "Following G.C.E. O/L Results",
    detail:
      "Open across Bio-Science, Physical Science, Commerce, Arts & Languages, and Home Science subject streams.",
  },
];

export default function AdmissionsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    parentName: "",
    studentName: "",
    emailOrPhone: "",
    entryStage: "Grade 1 Primary",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.parentName.trim() || !formState.emailOrPhone.trim()) return;
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="381A Katugastota Road, Kandy"
        title="Admissions &"
        italicWord="Campus Contact"
        description="Connect with the college office regarding Grade 1 admission guidelines, Grade 6 English Medium placement, Collegiate A/L streams, or alumnae inquiries."
        image="/images/hero.webp"
        imageAlt="St. Anthony's Girls' College Kandy campus"
        currentPage="Admissions"
      />

      <section className="py-20 sm:py-28 bg-ivory-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 space-y-16">
          {/* Entry Pathways */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ENTRY_PATHS.map((path, idx) => (
              <RevealBlock key={path.grade} delay={idx * 0.08}>
                <div className="h-full rounded-3xl border border-ivory-300 bg-ivory-50 p-7 shadow-xs space-y-3">
                  <span className="inline-block rounded-full bg-sky-100 text-navy-800 px-3 py-1 text-xs font-semibold">
                    {path.schedule}
                  </span>
                  <h2 className="font-serif text-2xl font-semibold text-navy-900">
                    {path.grade}
                  </h2>
                  <p className="text-sm text-navy-900/75 leading-relaxed">{path.detail}</p>
                </div>
              </RevealBlock>
            ))}
          </div>

          {/* Interactive Contact & Inquiry Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Directory Details */}
            <div className="lg:col-span-5 rounded-[2rem] bg-navy-950 text-ivory-50 p-8 sm:p-10 border border-sky-400/25 space-y-8">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-gold-400 font-semibold">
                  College Office
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold mt-1">
                  Visit Us in Kandy
                </h2>
                <p className="text-sm text-ivory-200/75 mt-2 leading-relaxed">
                  Office hours run Monday through Friday during school terms. Official national
                  circulars and notices are posted at the administration block and college portal.
                </p>
              </div>

              <div className="space-y-4 text-sm text-ivory-100/90">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-ivory-50">Campus Address</p>
                    <p className="text-ivory-200/75">{SCHOOL_IDENTITY.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-ivory-50">Telephone</p>
                    <a
                      href="tel:+94812212597"
                      className="text-ivory-200/75 hover:text-gold-400 transition-colors"
                    >
                      {SCHOOL_IDENTITY.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Globe className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-ivory-50">Official Portal</p>
                    <a
                      href="https://www.sagc.sch.lk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ivory-200/75 hover:text-gold-400 transition-colors"
                    >
                      {SCHOOL_IDENTITY.website}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-ivory-50">Administration</p>
                    <p className="text-ivory-200/75">{SCHOOL_IDENTITY.principal}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive Inquiry Form */}
            <div className="lg:col-span-7 rounded-[2rem] border border-ivory-300 bg-ivory-50 p-8 sm:p-10 shadow-sm">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center space-y-4"
                >
                  <div className="mx-auto w-14 h-14 rounded-full bg-sky-100 text-navy-800 flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-3xl font-semibold text-navy-900">
                    Inquiry Recorded
                  </h3>
                  <p className="text-sm text-navy-900/75 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formState.parentName}</strong>. Your inquiry regarding{" "}
                    <strong>{formState.entryStage}</strong> has been prepared for{" "}
                    {SCHOOL_IDENTITY.fullName}. For urgent official circulars, please contact{" "}
                    {SCHOOL_IDENTITY.phone}.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        parentName: "",
                        studentName: "",
                        emailOrPhone: "",
                        entryStage: "Grade 1 Primary",
                        message: "",
                      });
                    }}
                    className="rounded-full bg-navy-800 text-ivory-50 px-6 py-2.5 text-xs font-semibold hover:bg-sky-600 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h2 className="font-serif text-3xl font-semibold text-navy-900">
                      Send an Admissions or General Inquiry
                    </h2>
                    <p className="text-sm text-navy-900/70 mt-1">
                      Submit your contact details and preferred academic entry stage.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="block space-y-1.5 text-xs font-semibold uppercase tracking-wider text-navy-900/80">
                      <span>Parent / Guardian Name *</span>
                      <input
                        type="text"
                        required
                        value={formState.parentName}
                        onChange={(e) =>
                          setFormState((s) => ({ ...s, parentName: e.target.value }))
                        }
                        placeholder="e.g., Mrs. N. Perera"
                        className="w-full rounded-xl border border-ivory-300 bg-white px-4 py-3 text-sm font-normal text-navy-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </label>

                    <label className="block space-y-1.5 text-xs font-semibold uppercase tracking-wider text-navy-900/80">
                      <span>Student Name</span>
                      <input
                        type="text"
                        value={formState.studentName}
                        onChange={(e) =>
                          setFormState((s) => ({ ...s, studentName: e.target.value }))
                        }
                        placeholder="Prospective student's name"
                        className="w-full rounded-xl border border-ivory-300 bg-white px-4 py-3 text-sm font-normal text-navy-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="block space-y-1.5 text-xs font-semibold uppercase tracking-wider text-navy-900/80">
                      <span>Phone or Email *</span>
                      <input
                        type="text"
                        required
                        value={formState.emailOrPhone}
                        onChange={(e) =>
                          setFormState((s) => ({ ...s, emailOrPhone: e.target.value }))
                        }
                        placeholder="+94 77 ... or email@domain"
                        className="w-full rounded-xl border border-ivory-300 bg-white px-4 py-3 text-sm font-normal text-navy-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </label>

                    <label className="block space-y-1.5 text-xs font-semibold uppercase tracking-wider text-navy-900/80">
                      <span>Inquiry Category</span>
                      <select
                        value={formState.entryStage}
                        onChange={(e) =>
                          setFormState((s) => ({ ...s, entryStage: e.target.value }))
                        }
                        className="w-full rounded-xl border border-ivory-300 bg-white px-4 py-3 text-sm font-normal text-navy-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      >
                        <option>Grade 1 Primary</option>
                        <option>Grade 6 English Medium</option>
                        <option>Grade 12 Collegiate A/L</option>
                        <option>Past Pupils &amp; Alumni</option>
                        <option>General Administration</option>
                      </select>
                    </label>
                  </div>

                  <label className="block space-y-1.5 text-xs font-semibold uppercase tracking-wider text-navy-900/80">
                    <span>Message / Questions</span>
                    <textarea
                      rows={4}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, message: e.target.value }))
                      }
                      placeholder="Share your questions about academic streams, sports, or admission dates..."
                      className="w-full rounded-xl border border-ivory-300 bg-white px-4 py-3 text-sm font-normal text-navy-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </label>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-navy-800 text-ivory-50 px-7 py-3.5 text-sm font-semibold hover:bg-sky-600 transition-colors shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
