import React from "react";
import OdooPage from "../features/odoo";

export const metadata = {
  metadataBase: new URL("https://ideabox.technology"),
  title: "Odoo Implementation Partner in Pakistan | Ideabox ERP Solutions",
  description:
    "Ideabox is a leading Odoo implementation partner in Pakistan offering Odoo ERP customization, development, integration, and support services for businesses in Pakistan, USA, and Europe.",
  canonical: "https://ideabox.technology/odoo",
  keywords: "Odoo Pakistan, Odoo partner Pakistan, Odoo official partner Pakistan, Odoo implementation Pakistan, Odoo ERP Pakistan, Odoo consultants Pakistan, Odoo developers Pakistan, Odoo company Pakistan, Odoo Karachi, Odoo partner Karachi, Odoo implementation company Pakistan, Odoo ERP solutions Pakistan, Odoo customization Pakistan, Odoo development services Pakistan, Odoo integration services Pakistan, Odoo migration services Pakistan, Odoo support services Pakistan, Odoo enterprise implementation, Odoo community version, hire Odoo developer Pakistan, offshore Odoo development, remote Odoo developers, Odoo USA, Odoo partner USA, Odoo implementation USA, Odoo Europe, Odoo partner Europe, global Odoo partner, Odoo international implementation, Ideabox Odoo partner, Ideabox Odoo services, Ideabox ERP solutions",
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
    description: "Odoo ERP implementation, customization, and consulting services",
    areaServed: ["Pakistan", "USA", "Europe"],
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
