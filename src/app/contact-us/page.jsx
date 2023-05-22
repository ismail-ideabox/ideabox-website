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
      <head>
        <title>Contact Us | Ideabox</title>
      </head>
      <ContactUsPage />
    </>
  );
}

export default ContactUs;
