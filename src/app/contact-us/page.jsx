import React from "react";
import ContactUsPage from "../features/contactUs";
import {
  ORGANIZATION_ID,
  SITE_URL,
  WEBSITE_ID,
  createBreadcrumbSchema,
  createMetadata,
  createOrganizationGraph,
} from "../seo/config";

const title = "Contact Ideabox | UAE & Pakistan ERP & Software Services";
const description =
  "Contact Ideabox for Odoo ERP implementation, custom software, web and mobile applications, cloud, AI and enterprise technology services across the UAE, Pakistan and international markets.";

export const metadata = createMetadata({
  title,
  description,
  path: "/contact-us",
  image: `${SITE_URL}/contactUs/banner.png`,
  imageWidth: 835,
  imageHeight: 630,
  imageAlt: "Contact Ideabox",
});

function ContactUs() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      ...createOrganizationGraph(),
      {
        "@type": "ContactPage",
        "@id": `${SITE_URL}/contact-us#webpage`,
        url: `${SITE_URL}/contact-us`,
        name: title,
        description,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORGANIZATION_ID },
        inLanguage: "en",
      },
      createBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact-us" },
      ]),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactUsPage />
    </>
  );
}

export default ContactUs;
