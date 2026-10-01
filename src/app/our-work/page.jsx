import React from "react";
import OurWorkPage from "../features/ourWork";
import workData from "../data/work";
import {
  ORGANIZATION_ID,
  SITE_URL,
  WEBSITE_ID,
  createBreadcrumbSchema,
  createMetadata,
  createOrganizationGraph,
} from "../seo/config";

const title = "Our Work | ERP, Software, Web & Mobile Projects | Ideabox";
const description =
  "Explore Ideabox ERP, Odoo, custom software, web application, mobile app, AI and digital transformation projects delivered across industries and international markets.";

export const metadata = createMetadata({
  title,
  description,
  path: "/our-work",
  image: `${SITE_URL}/caseStudies/banner.png`,
  imageWidth: 791,
  imageHeight: 612,
  imageAlt: "Ideabox technology projects and case studies",
});

function OurWork() {
  const itemList = workData.map((project, index) => {
    const slug = project.projectName.replace(/\s+/g, "-").toLowerCase();
    return {
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/our-work/${slug}`,
      name: project.projectName,
    };
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      ...createOrganizationGraph(),
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/our-work#webpage`,
        url: `${SITE_URL}/our-work`,
        name: title,
        description,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORGANIZATION_ID },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: itemList,
        },
        inLanguage: "en",
      },
      createBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Our Work", path: "/our-work" },
      ]),
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
