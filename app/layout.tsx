import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://romanoweb.com"),
  alternates: {
    canonical: "https://romanoweb.com",
  },
  title: "Andoni Romano",
  description:
    "Andoni Romano is a Front-End Developer passionate about UI/UX, motion, and creative development.",
  keywords:
    "Andoni Romano, Front-End Developer, UI/UX, Web Development, JavaScript, TypeScript, React, Vue, Stencil, GSAP, Webflow, Creative Coding, Motion Design, Web Components",
  openGraph: {
    locale: "en_US",
    siteName: "Andoni Romano",
    type: "website",
    title: "Andoni Romano",
    description:
      "Andoni Romano is a Front-End Developer passionate about UI/UX, motion, and creative development.",
    url: "https://romanoweb.com",
    images: [
      {
        url: "", // update this if you have a real OG image
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andoni Romano",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
