import OurWorkDetails from "@/app/features/ourWorkDetails";
import workDetail from "@/app/data/work";
import workData from "@/app/data/work";

export function generateMetadata({ params, searchParams }, parent) {

  const title = params?.name?.replaceAll("-", " ");
  const filteredWork = workData.find(
    (ele) => ele.projectName.toLocaleLowerCase() === title?.toLocaleLowerCase()
  );
  return {
    metadataBase: new URL("https://ideabox.technology"),
    title: filteredWork?.projectName + " | Ideabox",
    description: filteredWork?.metaDescription,
    canonical: filteredWork?.canonicalTag,
    openGraph: {
      type: "website",
      locale: "en_Us",
      url: "https://ideabox.technology",
      title: "Ideabox | Official Website ® | Tech Solution Provider",
      description: filteredWork?.metaDescription,
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
}

function WorkDetail({ params }) {
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
  const title = params?.name?.replaceAll("-", " ");
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <OurWorkDetails workTitle={title} />;
    </>
  )
}

export default WorkDetail;
