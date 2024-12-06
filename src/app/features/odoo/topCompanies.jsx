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
  usingOdooImage.airbus,
  usingOdooImage.astrazeneca,
  usingOdooImage.carrefour,
  usingOdooImage.danone,
  usingOdooImage.decathlon,
  usingOdooImage.delmonte,
  usingOdooImage.foodpanda,
  usingOdooImage.fujitsu,
  usingOdooImage.huawei,
  usingOdooImage.hyundai,
  usingOdooImage.louisVuitton,
  usingOdooImage.mazda,
  usingOdooImage.mckinsey,
  usingOdooImage.nestle,
  usingOdooImage.renault,
  usingOdooImage.shell,
  usingOdooImage.suzuki,
  usingOdooImage.toshiba,
  usingOdooImage.toyota,
  usingOdooImage.wwf,
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
              className="blogsSwiper"
              slidesPerView={4}
              spaceBetween={20}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
            >
              {logosData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className={styles.company_images}>
                    <Image
                      className={styles.company_images_img}
                      alt="company logo"
                      src={item}
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
