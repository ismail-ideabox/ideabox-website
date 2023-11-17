import React from "react";
import ContactUsPage from "../features/contactUs";
export const metadata = {
  metadataBase: new URL("https://ideabox.technology"),
  title: "Contact Us | Ideabox",
  description:
    "Get in touch with our skilled team for comprehensive technology solutions. Contact us today on hello@ideabox.technology and let us help you with your technology needs",
  canonical: "https://ideabox.technology/contact-us",
  openGraph: {
    url: "https://ideabox.technology/contact-us",
    title: "Contact Us | Ideabox",
    description: "Get in touch with our skilled team for comprehensive technology solutions. Contact us today on hello@ideabox.technology and let us help you with your technology needs",
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

function ContactUs() {
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
