"use client";
import React, { useEffect, useState } from "react";
import ContactUsPage from "../features/contactUs";

function ContactUs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);
  return (
    <>
      <NextSeo
        title="Contact Us | Ideabox"
        description=""
        canonical="https://ideabox.com.pk/contact-us"
        openGraph={{
          url: "https://ideabox.com.pk/contact-us",
          title: "Ideabox | Official Website ® | Tech Solution Provider",
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
        }}
        twitter={{
          handle: "@IdeaboxPakistan",
          site: "@IdeaboxPakistan:Obaid Rehman",
          cardType: "summary_large_image",
        }}
      />
      {/* <head>
        <title>Contact Us | Ideabox</title>
      </head> */}
      <ContactUsPage />
    </>
  );
}

export default ContactUs;
