import OurWorkDetails from "@/app/features/ourWorkDetails";
import workData from "@/app/data/work";
import {
  ORGANIZATION_ID,
  SITE_URL,
  WEBSITE_ID,
  createBreadcrumbSchema,
  createMetadata,
  createOrganizationGraph,
} from "@/app/seo/config";

function getProject(params) {
  const title = params?.name?.replaceAll("-", " ");
  return workData.find(
    (project) =>
      project.projectName.toLocaleLowerCase() === title?.toLocaleLowerCase()
  );
}

export function generateMetadata({ params }) {
  const project = getProject(params);
  const slug = params?.name?.toLowerCase() || "project";
  const title = project?.projectName
    ? `${project.projectName} | Ideabox Case Study`
    : "Project | Ideabox";
  const description =
    project?.metaDescription ||
    "Explore an Ideabox technology project and case study covering software, ERP, web or mobile application development.";

  return createMetadata({
    title,
    description,
    path: `/our-work/${slug}`,
    image: project?.cardImage?.src,
    imageWidth: project?.cardImage?.width,
    imageHeight: project?.cardImage?.height,
    imageAlt: project?.projectName ? `${project.projectName} case study` : "Ideabox case study",
  });
}

function WorkDetail({ params }) {
  const project = getProject(params);
  const title = params?.name?.replaceAll("-", " ");
  const slug = params?.name?.toLowerCase() || "project";
  const pageTitle = project?.projectName
    ? `${project.projectName} | Ideabox Case Study`
    : "Project | Ideabox";
  const description =
    project?.metaDescription ||
    "Explore an Ideabox technology project and case study covering software, ERP, web or mobile application development.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      ...createOrganizationGraph(),
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/our-work/${slug}#webpage`,
        url: `${SITE_URL}/our-work/${slug}`,
        name: pageTitle,
        description,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": `${SITE_URL}/our-work/${slug}#case-study` },
        inLanguage: "en",
      },
      {
        "@type": "CreativeWork",
        "@id": `${SITE_URL}/our-work/${slug}#case-study`,
        name: project?.projectName || title,
        description,
        url: `${SITE_URL}/our-work/${slug}`,
        creator: { "@id": ORGANIZATION_ID },
      },
      createBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Our Work", path: "/our-work" },
        { name: project?.projectName || title || "Project", path: `/our-work/${slug}` },
      ]),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <OurWorkDetails workTitle={title} />
    </>
  );
}

export default WorkDetail;
