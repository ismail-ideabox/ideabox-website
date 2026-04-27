import HomePage from "./features/home";

export const metadata = {
  metadataBase: new URL("https://ideabox.technology"),
  title: "Ideabox | Official Website ® | Tech Solution Provider",
  keywords:
    "Ideabox, Ideabox Pakistan, Ideabox Odoo partner, Odoo Pakistan, Odoo partner Pakistan, Odoo implementation company Pakistan, Odoo ERP Pakistan, Odoo consultants Pakistan, Odoo developers Pakistan, Odoo Karachi, Odoo partner Karachi, ERP company Pakistan, ERP solutions Pakistan, ERP implementation Pakistan, Odoo implementation services, Odoo customization services, Odoo development company, Odoo integration services, Odoo migration services, Odoo support services, Odoo ERP solutions, Odoo enterprise implementation, Odoo community version, hire Odoo developer Pakistan, offshore Odoo development, remote Odoo developers, Odoo USA, Odoo partner USA, Odoo implementation USA, Odoo Europe, Odoo partner Europe, global Odoo partner, Odoo international implementation, ERP software company, business automation solutions, enterprise software solutions, digital transformation company, Ideabox ERP solutions, Ideabox Odoo services, Ideabox global Odoo partner",
  description:
    "We Hand-Craft creative tech solutions with solid strategies & powerful technologies. We have the experience & expertise to develop & deliver complex applications",
  canonical: "https://ideabox.technology",
  openGraph: {
    type: "website",
    locale: "en_Us",
    url: "https://ideabox.technology",
    title: "Ideabox | Official Website ® | Tech Solution Provider",
    description:
      "We Hand-Craft creative tech solutions with solid strategies & powerful technologies. We have the experience & expertise to develop & deliver complex applications",
    images: [
      {
        url: "https://ideabox.technology/footer/ideabox.png",
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

export default function Home() {
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
      <HomePage />
    </>
  );
}
