import type { Metadata } from "next";
import { Rubik, Montserrat, Roboto } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ME Universal | Smart Building & Infrastructure Solutions",
    template: "%s | ME Universal",
  },

  description:
    "ME Universal delivers advanced smart building solutions including automation systems, waste management chute systems, PAVA, and integrated MEP infrastructure for modern commercial and residential spaces.",

  keywords: [
    "ME Universal",
    "smart building solutions",
    "building automation",
    "waste chute systems",
    "garbage chute",
    "linen chute",
    "PAVA systems",
    "MEP services",
    "wireless automation",
    "infrastructure solutions India",
  ],

  authors: [{ name: "ME Universal" }],
  creator: "ME Universal",

  openGraph: {
    title: "ME Universal | Smart Building & Infrastructure Solutions",
    description:
      "Transform buildings with intelligent automation, chute systems, and integrated infrastructure solutions by ME Universal.",
    url: "https://yourdomain.com", // 🔁 replace this
    siteName: "ME Universal",
    images: [
      {
        url: "/og-image.jpg", // put in public/
        width: 1200,
        height: 630,
        alt: "ME Universal Smart Infrastructure Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ME Universal | Smart Building Solutions",
    description:
      "Automation, chute systems, and smart infrastructure for modern buildings.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${roboto.variable} ${rubik.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
