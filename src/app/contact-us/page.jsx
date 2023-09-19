"use client";
import React, { useEffect, useState } from "react";
import ContactUsPage from "../features/contactUs";

function ContactUs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);
  const metadata = {
    title: "Contact Us | Ideabox",
    description:
      "Get in touch with our skilled team for comprehensive technology solutions. Contact us today on hello@ideabox.pk and let us help you with your technology needs",
    canonical: "https://ideabox.com.pk/contact-us",
    openGraph: {
      url: "https://ideabox.com.pk/contact-us",
      title: "Contact Us | Ideabox",
      description: "Open Graph Description",
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
  return (
    <>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={metadata.canonical} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta
          property="og:image:width"
          content={metadata.openGraph.images[0].width}
        />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta name="twitter:card" content={metadata.twitter.cardType} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:creator" content={metadata.twitter.handle} />
      </head>

      <ContactUsPage />
    </>
  );
}

export default ContactUs;
