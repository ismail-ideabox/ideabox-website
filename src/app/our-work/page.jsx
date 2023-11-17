import React from "react";
import OurWorkPage from "../features/ourWork";

function OurWork() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Ideabox",
    image: "https://ideabox.technology/footer/ideabox.png",
    "@id": "",
    url: "https://www.ideabox.technology/",
    telephone: "+92 21 37234945",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "2nd floor, Plot 1C Khayaban-e-Saadi, Phase 7 Defence Housing Authority, Karachi, Karachi City, Sindh 75500",
      addressLocality: "Sindh",
      postalCode: "75500",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 24.831027967090243,
      longitude: 67.07490002377298,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "20:00",
    },
    sameAs: [
      "https://pk.linkedin.com/company/ideaboxpakistan",
      "https://twitter.com/IdeaboxPakistan",
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <OurWorkPage />
    </>
  );
}

export default OurWork;

export const metadata = {
  metadataBase: new URL('https://ideabox.technology'),
  title: "Our Work | Ideabox",
  description:
    "Ideabox has the capability to transform your business with cutting-edge technology solutions. We provide expert IT services to enhance efficiency and innovation",
  canonical: "https://ideabox.technology/our-work",
  openGraph: {
    url: "https://ideabox.technology/our-work",
    title: "Our Work | Ideabox",
    description:
      "Ideabox has the capability to transform your business with cutting-edge technology solutions. We provide expert IT services to enhance efficiency and innovation",
    images: [
      {
        url: "../../../../public/footer/ideabox.png",
        width: 800,
        height: 600,
        alt: "Ideabox Logo",
        type: "image/png",
      },
    ],
    siteName: "Ideabox",
  },
  twitter: {
    handle: "@IdeaboxPakistan",
    site: "@IdeaboxPakistan:Obaid Rehman",
    cardType: "summary_large_image",
  },
};
