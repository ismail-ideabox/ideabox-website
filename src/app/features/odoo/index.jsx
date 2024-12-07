"use client";
import React, { useEffect, useState } from "react";
import styles from "./odoo.module.css";
import OdooHeader from "./header";
import Banner from "./banner";
import Overview from "./overview";
import Footer from "@/app/components/footer";
import Usage from "./usage";
import WhyOdoo from "./whyOdoo";
import OdooBannerImage from "./odooBannerImage";
import Pricing from "./pricing";
import Partner from "./partner";
import Faqs from "@/app/components/faqs";
import Services from "./services";
import Testimonials from "./testimonials";
import ErpBusinessCard from "./odooBusinessCard";
import InteractiveFeatures from "./interactiveFeatures";
import Regions from "./regions";
import TopCompanies from "./topCompanies";
import GlobalFootprint from "./globalFootprint";
import ImplementationBanner from "./implementationBanner";
import Blogs from "./blogs";
import Contact from "./contact";
import FaqsOdoo from "@/app/components/faqsOdoo";

export default function OdooPage() {
  useEffect(() => {
    document.getElementsByTagName("body")[0].style.overflow = "auto";
  }, []);
  return (
    <div>
      <OdooHeader />
      <Banner />
      <Overview />
      <Usage />
      <WhyOdoo />
      {/* <OdooBannerImage /> */}
      <Pricing />
      <Partner />
      <Services />
      {/* <Testimonials/> */}
      <ErpBusinessCard />
      <FaqsOdoo />
      <InteractiveFeatures />
      <TopCompanies />
      <Regions />
      <GlobalFootprint />
      <ImplementationBanner />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}
