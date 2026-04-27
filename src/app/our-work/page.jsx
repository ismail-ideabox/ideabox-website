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
      <OurWorkPage />
    </>
  );
}

export default OurWork;

export const metadata = {
  metadataBase: new URL('https://ideabox.technology'),
  title: "Our Work | Ideabox",
  keywords: "Odoo Pakistan, Odoo partner Pakistan, Odoo official partner Pakistan, Odoo implementation Pakistan, Odoo ERP Pakistan, Odoo Karachi, Odoo partner Karachi, Odoo consultants Pakistan, Odoo developers Pakistan, Odoo implementation services Pakistan, Odoo customization Pakistan, Odoo ERP solutions Pakistan, Odoo USA, Odoo partner USA, Odoo implementation USA, Odoo ERP USA, Odoo consultants USA, Odoo developers USA, Odoo implementation services USA, Odoo customization USA, Odoo ERP solutions USA, Odoo Europe, Odoo partner Europe, Odoo implementation Europe, Odoo ERP Europe, Odoo consultants Europe, Odoo developers Europe, Odoo implementation services Europe, Odoo customization Europe, Odoo ERP solutions Europe, Odoo UK, Odoo partner UK, Odoo Germany Odoo implementation, Odoo Netherlands partner, Odoo Middle East, Odoo UAE, Odoo Saudi Arabia, Odoo global partner, Odoo international implementation, offshore Odoo development, remote Odoo developers, hire Odoo developer remotely, Odoo ERP implementation company global, Odoo integration services global, Odoo migration services global, Odoo support services global, Ideabox Odoo partner, Ideabox Pakistan, Ideabox Odoo services, Ideabox global Odoo partner, Ideabox ERP solutions",
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
