import Solutions from "./(Home-Page)/solutions";
import type { Metadata } from "next";
import HeroSection from "./(Home-Page)/hero-section";
import TargetAudience from "./(Home-Page)/target-audience";
import Blogs from "./(Home-Page)/blogs";
import FeaturedProduct from "./(Home-Page)/featured-product";
import WhyChoose from "./(Home-Page)/why-choose";
import ProtocolSection from "./(Home-Page)/protocol";
import AboutSection from "./(Home-Page)/about-us";
import ProcessSection from "./(Home-Page)/process-section";
import PartnerLogo from "./(Home-Page)/partner-logo";
import Form from "./(Home-Page)/form";
import Faq from "./(Home-Page)/faq";
import CountriesWeServe from "./(Home-Page)/countries";
export const metadata: Metadata = {
  title: "Smart Building Technology Solutions | ME Universal",
  description:
    "Smart building automation, central vacuum, laundry & chute systems for UAE, Saudi Arabia, Qatar & more. Get a free consultation from ME Universal.",
  alternates: { canonical: "https://meuniversal.com/" },
  openGraph: {
    title: "Smart Building Technology Solutions | ME Universal",
    description:
      "Smart building automation, central vacuum, laundry & chute systems for UAE, Saudi Arabia, Qatar & more. Get a free consultation from ME Universal.",
    url: "https://meuniversal.com/",
    siteName: "ME Universal",
    images: [{ url: "https://meuniversal.com/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Building Technology Solutions | ME Universal",
    description:
      "Smart building automation, central vacuum, laundry & chute systems for UAE, Saudi Arabia, Qatar & more.",
    images: ["https://meuniversal.com/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://meuniversal.com/#organization",
      name: "ME Universal",
      legalName: "ME Universal IoT Technologies",
      url: "https://meuniversal.com/",
      description:
        "ME Universal is a smart building and lifestyle technology distributor, aggregator, and solution provider delivering integrated automation, IoT, and infrastructure solutions across India, the UAE, Saudi Arabia, Qatar, Oman, Kuwait, Iraq, Kenya, and Ethiopia.",
      areaServed: [
        "India",
        "United Arab Emirates",
        "Saudi Arabia",
        "Qatar",
        "Oman",
        "Kuwait",
        "Iraq",
        "Kenya",
        "Ethiopia",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+971-50-148-3346",
      },
    },
    {
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
      "@id": "https://meuniversal.com/#localbusiness",
      name: "ME Universal",
      url: "https://meuniversal.com/",
      telephone: "+971501483346",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Bel Resheed Building, Office No. 7, Building #2, Nadd Al Hamar",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
      parentOrganization: { "@id": "https://meuniversal.com/#organization" },
    },
    {
      "@type": "WebSite",
      "@id": "https://meuniversal.com/#website",
      url: "https://meuniversal.com/",
      name: "ME Universal",
      publisher: { "@id": "https://meuniversal.com/#organization" },
    },
    {
      "@type": "FAQPage",
      "@id": "https://meuniversal.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is ME Universal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ME Universal is a building and home technology distributor, aggregator, and solution provider offering smart building automation, IoT, and lifestyle technology solutions across India, the UAE, Saudi Arabia, Qatar, Oman, Kuwait, Iraq, Kenya, and Ethiopia.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Per Sqm model?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Per Sqm model prices smart building and lifestyle technology solutions based on a property's built-up area, giving architects, developers, and homeowners a simple way to budget automation, lighting, and infrastructure upgrades across an entire project.",
          },
        },
        {
          "@type": "Question",
          name: "What products does ME Universal offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ME Universal's hero products include DC lighting and automation, air powered laundry collection systems, central vacuum systems, and garbage and linen chute systems, alongside 18 global technology brands covering home and building solutions.",
          },
        },
        {
          "@type": "Question",
          name: "Which countries does ME Universal operate in?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ME Universal operates across India, the UAE, Saudi Arabia, Qatar, Oman, Kuwait, Iraq, Kenya, and Ethiopia, supplying and installing smart building technology through local exclusive partners and experience centers.",
          },
        },
        {
          "@type": "Question",
          name: "How can I become an ME Universal exclusive partner?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Businesses in the GCC, Middle East, and Africa can apply to become an ME Universal exclusive partner by setting up a branded experience center and investing in the Per Sqm distribution model for their region.",
          },
        },
      ],
    },
  ],
};
export default function Home() {
  return (
    <div>
      <HeroSection />
      <PartnerLogo />
      <Solutions />
      <TargetAudience />
      <AboutSection />
      <ProtocolSection />
      <WhyChoose />
      <CountriesWeServe />
      <ProcessSection />
      <FeaturedProduct />
      <Faq />
      <Blogs />
      <Form />
    </div>
  );
}
