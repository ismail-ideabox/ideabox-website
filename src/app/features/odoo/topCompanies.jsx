"use client";
import React from "react";
import layout from "../../styles/layout.module.css";
import styles from "./odoo.module.css";
import { classNames } from "@/app/utils";
import Image from "next/image";
import { usingOdooImage } from "../../../../public/usingOdoo";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const logosData = [
  usingOdooImage.funclusion,
  usingOdooImage.anh,
  usingOdooImage.chimek,
  usingOdooImage.conwood,
  usingOdooImage.iwc,
  usingOdooImage.lambda,
  usingOdooImage.boucherat,
  usingOdooImage.luxafar,
  usingOdooImage.nadia,
  usingOdooImage.plush,
  usingOdooImage.precision,
  usingOdooImage.proactive,
  usingOdooImage.solution,
  usingOdooImage.talha,
  usingOdooImage.techworks,
  usingOdooImage.ubench,
  usingOdooImage.voltie,
  usingOdooImage.zod,
];

export default function TopCompanies() {
  return (
    <section
      className={classNames(
        layout.grid,
        layout.grid_col80,
        styles.primary_color_section
      )}
    >
      <div className={layout.block__inner}>
        <div className={styles.section_container}>
          <h4 className="heading">GLOBAL IMPLEMENTATIONS</h4>
          <h2 className="main-heading">
            Top Companies
            <br />
            Using ODOO
          </h2>
          <div className={styles.company_logo_container}>
            <Swiper
              style={{ padding: "50px 0" }}
              className="topCompaniesSwiper"
              slidesPerView={2}
              spaceBetween={20}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              loop={true}
              breakpoints={{
                900: {
                  slidesPerView: 5,
                },
                676: {
                  slidesPerView: 4,
                },
                380: {
                  slidesPerView: 3,
                }
              }}
            >
              {logosData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div style={{ margin: "0 auto" }} className={styles.company_images}>
                    <Image
                      className={styles.company_images_img}
                      alt="company logo"
                      src={item}
                      width={120}
                      height={80}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
