"use client";
import React, { useEffect, useState } from "react";
import styles from "./ourWork.module.css";
import layout from "../../styles/layout.module.css";
import { images } from "../../../../public/caseStudies";
import Image from "../../components/image";
import Button from "../../components/button/button";
import Faqs from "../../components/faqs";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { ScrollToTop } from "@/app/components/scrollToTop";
import Projectcard from "@/app/components/ourWork/projectcard";
import workDetail from "@/app/data/work";

function OurWork({ isHomePage }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);
  const [offset, setOffset] = useState(6);
  const handleLoadMore = (e) => {
    e.preventDefault();
    setOffset((preValue) => preValue + 6);
  };
  return (
    <>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="canonical" content={metadata.canonical} />
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
        <meta
          property="og:image:height"
          content={metadata.openGraph.images[0].height}
        />
        <meta
          property="og:image:alt"
          content={metadata.openGraph.images[0].alt}
        />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta name="twitter:card" content={metadata.twitter.cardType} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:creator" content={metadata.twitter.handle} />
      </head>
      <Header innerPage={true} />
      <div
        className={[
          styles.banner_container,
          layout.grid,
          layout.grid_col80,
        ].join(" ")}
      >
        <div className={layout.block__inner}>
          <div className={styles.banner_content}>
            <div className={styles.banner_heading}>
              <div className="heading">CASE STUDIES</div>
              <h2>Together We Achieved</h2>
            </div>
            <div className={styles.banner_image}>
              <div className={styles.image_arrow}>
                <Image src={images.arrow} alt="Our Work Banner" />
              </div>
              <div className={styles.banner_work}>
                <Image src={images.banner} alt=" Our Work Mobile Banner" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={[
          styles.casestudies_container,
          layout.grid,
          layout.grid_col80,
        ].join(" ")}
      >
        <div className={layout.block__inner}>
          <Projectcard
            workData={workDetail.slice(0, offset)}
            isHomePage={isHomePage}
          />
          {workDetail.length > offset && (
            <div className={styles.casestudies_loadmore}>
              <Button
                redirect={""}
                onClick={(e) => handleLoadMore(e)}
                text={"Load MORE WORK"}
                type="primary"
              />
            </div>
          )}
        </div>
      </div>
      <div className={styles.casestudies_faq}>
        <Faqs />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default OurWork;

export const metadata = {
  title: "Our Work | Ideabox",
  description: "",
  canonical: "https://ideabox.com.pk/our-work",
  openGraph: {
    url: "https://ideabox.com.pk/our-work",
    title: "Our Work | Ideabox",
    description: "Open Graph Description",
    images: [
      {
        url: "../../../../public/footer/ideabox.png",
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
