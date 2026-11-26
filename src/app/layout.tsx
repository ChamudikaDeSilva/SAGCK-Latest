import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Noto_Serif_Sinhala,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notoSinhala = Noto_Serif_Sinhala({
  variable: "--font-noto-sinhala",
  subsets: ["sinhala", "latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "St. Anthony's Girls' College, Kandy | Est. 1938",
    template: "%s | St. Anthony's Girls' College, Kandy",
  },
  description:
    "Official digital showcase of St. Anthony's Girls' College, Kandy (SAGCK) — founded May 10, 1938. Shaping proud daughters for the strength of Sri Lanka through academic rigor, bilingual excellence, 25+ societies, and athletics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} ${notoSinhala.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-ivory-100 text-navy-900">
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
