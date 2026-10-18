import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";


export const metadata: Metadata = {
  metadataBase: new URL("https://aarva-interiors.vercel.app"),

  title: {
    default: "Aarva Interiors | Luxury Home Interiors in Hyderabad",
    template: "%s | Aarva Interiors",
  },

  description:
    "Explore premium residential interior design, selected projects, and our design approach at Aarva Interiors in Hyderabad.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "/",
    siteName: "Aarva Interiors",
    locale: "en_IN",
    title: "Aarva Interiors | Luxury Home Interiors in Hyderabad",
    description:
      "Explore premium residential interiors, selected projects, and our design approach in Hyderabad.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Aarva Interiors | Luxury Residential Interior Design",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Aarva Interiors | Luxury Home Interiors in Hyderabad",
    description:
      "Explore premium residential interiors and selected projects in Hyderabad.",
    images: ["/opengraph-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  other: {
    "theme-color": "#171717",
  },
};


const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} font-sans h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
