import React from "react";
import OdooPage from "../features/odoo";

export const metadata = {
  metadataBase: new URL("https://ideabox.technology"),
  title: "Odoo | Ideabox",
  description:
    "Simplify your business with Odoo ERP. As official Odoo partners, Ideabox delivers expert implementation, customization, and integration worldwide.",
  canonical: "https://ideabox.technology/odoo",
  openGraph: {
    url: "https://ideabox.technology/odoo",
    title: "Odoo | Ideabox",
    description:
      "Simplify your business with Odoo ERP. As official Odoo partners, Ideabox delivers expert implementation, customization, and integration worldwide.",
    images: [
      {
        url: "../../../public/footer/ideabox.png",
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

export default function Odoo() {
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
        "Office No: 005, NASTP Sierra, Shahrah-e-Faisal Rd, Faisal Cantonment, Karachi, Karachi City, Sindh 75240",
      addressLocality: "Sindh",
      postalCode: "75240",
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
      <OdooPage />
    </>
  );
}
