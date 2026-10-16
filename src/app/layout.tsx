import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";

export const metadata: Metadata = {
  metadataBase: new URL("https://aarvainteriors.vercel.app"),

  title: {
    default:
      "Aarva Interiors | Premium Residential Interior Design in Hyderabad",
    template: "%s | Aarva Interiors",
  },

  description:
    "Explore residential interior design, selected work, and the design approach of Aarva Interiors in Hyderabad.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "/",
    siteName: "Aarva Interiors",
    locale: "en_IN",
    title:
      "Aarva Interiors | Premium Residential Interior Design in Hyderabad",
    description:
      "Explore residential interiors, selected work, and the design approach of Aarva Interiors in Hyderabad.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Aarva Interiors residential interior design in Hyderabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Aarva Interiors | Premium Residential Interior Design in Hyderabad",
    description:
      "Explore residential interiors, selected work, and the design approach of Aarva Interiors in Hyderabad.",
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
