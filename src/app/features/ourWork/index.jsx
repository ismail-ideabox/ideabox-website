"use client";
import React from "react";
import styles from "./ourWork.module.css";
import layout from "../../styles/layout.module.css";
import { images } from "../../../../public/caseStudies";
import Image from "next/image";
import Button from "../../components/button/button";
import Faqs from "../../components/faqs";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { ScrollToTop } from "@/app/components/scrollToTop";
import Projectcard from "@/app/components/ourWork/projectcard";
import workDetail from "@/app/data/work";
import { useState } from "react";

function OurWork({ isHomePage }) {
  const [offset, setOffset] = useState(6);
  const handleLoadMore = (e) => {
    e.preventDefault();
    setOffset((preValue) => preValue + 6);
  };
  return (
    <>
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
