"use client";
import React from "react";
import styles from "./newsBlogs.module.css";
import layout from "../../styles/layout.module.css";
import { images } from "../../../../public/newsBlogs";
import Image from "next/image";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Faqs from "@/app/components/faqs";
import { ScrollToTop } from "@/app/components/scrollToTop";
import NewsFeeds from "./newsFeeds";
import BlogsCards from "./blogsCards";
import blogsData from "@/app/data/blogs";

function NewsBlogs() {
  return (
    <>
      <Header innerPage={true} />
      <div
        className={[layout.grid, layout.grid_col80, styles.banner_bg].join(" ")}
      >
        <div className={layout.block__inner}>
          <div className={styles.banner_container}>
            <div className={styles.banner_heading}>
              <div className="heading">BLOGS AND NEWS</div>
              <h2>Stay Updated With Latest Tech Info!</h2>
            </div>
            <div className={styles.banner_image}>
              <div className={styles.banner_image_web}>
                <Image
                  className={styles.banner_image_web}
                  src={images.bannerweb}
                  alt="News and Blogs Banner"
                />
              </div>
              <div className={styles.banner_image_mob}>
                <Image
                  className={styles.banner_image_mob}
                  src={images.bannermob}
                  alt="News and BlogsMobile Banner"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={[layout.grid, layout.grid_col80, styles.card_bg].join(" ")}
      >
        <div className={layout.block__inner}>
          <BlogsCards blogsCard={blogsData} />
        </div>
      </div>
      <NewsFeeds />
      <Faqs />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default NewsBlogs;
