import type { Metadata } from "next";
import { Be_Vietnam_Pro, Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const fontHeading = Work_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
});

const fontBody = Be_Vietnam_Pro({
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Governor for MP | Abdul Rauf Sulemana for Kumbungu",
    template: "%s | Governor for MP",
  },
  description:
    'Abdul Rauf "Governor" Sulemana is running for Member of Parliament for Kumbungu Constituency under the New Patriotic Party — fighting for youth, farmers, and every family in Kumbungu.',
  metadataBase: new URL("https://abdulformp.com"),
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: "https://abdulformp.com",
    siteName: "Governor for MP",
    title: "Governor for MP | Abdul Rauf Sulemana for Kumbungu",
    description:
      'Abdul Rauf "Governor" Sulemana is running for Member of Parliament for Kumbungu Constituency — fighting for youth, farmers, and every family in Kumbungu.',
    images: [
      {
        url: "/hero-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Abdul Rauf Governor Sulemana — MP for Kumbungu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Governor for MP | Abdul Rauf Sulemana for Kumbungu",
    description:
      'Abdul Rauf "Governor" Sulemana is running for Member of Parliament for Kumbungu Constituency — fighting for youth, farmers, and every family in Kumbungu.',
    images: ["/hero-banner.jpg"],
  },
  keywords: [
    "Governor Sulemana",
    "Abdul Rauf Sulemana",
    "Kumbungu MP",
    "Kumbungu constituency",
    "NPP Kumbungu",
    "Member of Parliament Ghana",
    "New Patriotic Party",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontHeading.variable} ${fontBody.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
