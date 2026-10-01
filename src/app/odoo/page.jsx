import React from "react";
import OdooPage from "../features/odoo";
import {
  INTERNATIONAL_ODOO_REGIONS,
  ORGANIZATION_ID,
  SITE_URL,
  WEBSITE_ID,
  createBreadcrumbSchema,
  createFaqSchema,
  createMetadata,
  createOrganizationGraph,
  odooFaqs,
} from "../seo/config";

const title = "Odoo ERP Implementation Partner | UAE, Pakistan & Global | Ideabox";
const description =
  "Ideabox provides Odoo ERP implementation, customization, integration, migration, hosting, training and support for businesses in the UAE, Pakistan and international markets.";

export const metadata = createMetadata({
  title,
  description,
  path: "/odoo",
  image: `${SITE_URL}/odoo/odoo-banner.png`,
  imageWidth: 1920,
  imageHeight: 1213,
  imageAlt: "Ideabox Odoo ERP implementation services",
});

export default function Odoo() {
  const serviceId = `${SITE_URL}/odoo#service`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      ...createOrganizationGraph(),
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/odoo#webpage`,
        url: `${SITE_URL}/odoo`,
        name: title,
        description,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": serviceId },
        inLanguage: "en",
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: "Odoo ERP Implementation, Customization & Integration",
        serviceType: "Odoo ERP implementation and consulting",
        category: "ERP implementation and business software services",
        description,
        url: `${SITE_URL}/odoo`,
        provider: { "@id": ORGANIZATION_ID },
        areaServed: INTERNATIONAL_ODOO_REGIONS.map((name) => ({
          "@type": "Country",
          name,
        })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Odoo Services",
          itemListElement: [
            "Odoo ERP Implementation",
            "Odoo Customization",
            "Odoo Integration",
            "Odoo Migration",
            "Odoo Consultancy",
            "Odoo Training & Support",
            "Odoo Hosting",
            "Odoo Development",
            "Business Process Re-engineering",
            "Third-Party App & API Integration",
          ].map((name) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name,
            },
          })),
        },
      },
      createFaqSchema(odooFaqs),
      createBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Odoo", path: "/odoo" },
      ]),
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
