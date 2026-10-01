import HomePage from "./features/home";
import {
  ORGANIZATION_ID,
  SITE_URL,
  WEBSITE_ID,
  createFaqSchema,
  createMetadata,
  createOrganizationGraph,
  homeFaqs,
} from "./seo/config";

const title = "Ideabox | Odoo ERP & Custom Software Company in UAE & Pakistan";
const description =
  "Ideabox provides Odoo ERP implementation, custom software, web applications, mobile apps, AI, cloud and enterprise IT services across the UAE, Pakistan and international markets.";

export const metadata = createMetadata({
  title,
  description,
  path: "/",
});

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      ...createOrganizationGraph(),
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: `${SITE_URL}/`,
        name: title,
        description,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORGANIZATION_ID },
        inLanguage: "en",
      },
      createFaqSchema(homeFaqs),
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
