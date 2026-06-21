import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashinsana | IT Undergraduate Portfolio",
  description: "Personal portfolio website of Ashinsana, an Information Technology undergraduate seeking software engineering internships. Showcase of skills in Java, React, Node.js, and SQL.",
  icons: {
    icon: "/favicon.jpg",
  },
  keywords: [
    "IT Undergraduate",
    "Software Engineering Intern",
    "Web Developer Portfolio",
    "React Developer",
    "Java Developer",
    "CeylonLeaf",
    "HelpAura",
    "JobsAdawiya",
    "Habit Tracker Mobile App"
  ],
  authors: [{ name: "Ashinsana" }],
  creator: "Ashinsana",
  openGraph: {
    title: "Ashinsana | IT Undergraduate Portfolio",
    description: "Personal portfolio website of Ashinsana, an Information Technology undergraduate seeking software engineering internships.",
    url: "https://ashinsana-portfolio.vercel.app",
    siteName: "Ashinsana Portfolio",
    images: [
      {
        url: "https://ashinsana-portfolio.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ashinsana - IT Undergraduate Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashinsana | IT Undergraduate Portfolio",
    description: "Personal portfolio website of Ashinsana, an Information Technology undergraduate seeking software engineering internships.",
    images: ["https://ashinsana-portfolio.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data for Google Rich Snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "dateCreated": "2026-06-21T00:00:00Z",
    "mainEntity": {
      "@type": "Person",
      "name": "Ashinsana",
      "description": "Information Technology Undergraduate seeking software developer internships.",
      "jobTitle": "Aspiring Software Developer",
      "knowsAbout": [
        "Software Engineering",
        "React",
        "Next.js",
        "Java",
        "Node.js",
        "Express.js",
        "MySQL",
        "MongoDB",
        "Tailwind CSS"
      ],
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "State University of Information Technology"
        },
        {
          "@type": "EducationalOrganization",
          "name": "Esoft Metro Campus"
        }
      ]
    }
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 dark:bg-zinc-950 text-slate-800 dark:text-zinc-550 transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
