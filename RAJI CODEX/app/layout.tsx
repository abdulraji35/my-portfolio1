import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Abdulsamad Raji | Data Analyst Portfolio",
  description:
    "Portfolio website for Abdulsamad Raji, a data analyst building premium dashboards, data workflows, and AI-driven analytics systems.",
  keywords: [
    "Abdulsamad Raji",
    "Data Analyst",
    "Power BI",
    "SQL",
    "Excel",
    "Python",
    "Portfolio",
  ],
  openGraph: {
    title: "Abdulsamad Raji | Data Analyst Portfolio",
    description:
      "Results-driven data analyst with 3+ years of experience in Power BI, SQL, Excel, and AI-assisted analytics.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdulsamad Raji | Data Analyst Portfolio",
    description:
      "Data analyst portfolio focused on dashboards, decision intelligence, and AI-powered workflows.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
