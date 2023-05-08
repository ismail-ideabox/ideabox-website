"use client";
import React from "react";
import Image from "next/image";
import layout from "../../styles/layout.module.css";
import styles from "./testimonials.module.css";
import { images } from "../../../../public/testimonials";
import { classNames } from "@/app/utils";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function Testimonials() {
  return (
    <section
      className={classNames(
        styles.testimonials_section,
        layout.grid,
        layout.grid_col80
      )}
    >
      <div
        className={classNames(
          layout.block__inner,
          styles.testimonials_container
        )}
      >
        <div className={styles.testimonial_heading}>
          <h4 className="heading">TESTIMONIALS</h4>
          <h2 className="main-heading">
            Why Our Customers <br /> Love Us!
          </h2>
        </div>
        <div className={styles.review_container}>
          <Swiper
            className="testimonialSlider"
            slidesPerView={1}
            spaceBetween={20}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            breakpoints={{
              300: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 2,
              },
              840: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div className={styles.testimonial_review}>
                <div className={styles.review_person}>
                  <div className={styles.person_image}>
                    <Image src={images.testimonials} alt="Testimonials" />
                  </div>
                  <div className={styles.person_details}>
                    <div className={styles.person_name}>
                      <h5>Ahmed Rizvi</h5>
                    </div>
                    <div className={styles.person_position}>
                      <h5>Head of HR</h5>
                    </div>
                    <div className={styles.person_company}>
                      <h5>Hubco</h5>
                    </div>
                  </div>
                </div>
                <div className={styles.review_content}>
                  <p>
                    Great experience! Such a resourceful, Creative Team! I
                    highly recommend Purpose path
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.testimonial_review}>
                <div className={styles.review_person}>
                  <div className={styles.person_image}>
                    <Image src={images.testimonials} alt="" />
                  </div>
                  <div className={styles.person_details}>
                    <div className={styles.person_name}>
                      <h5>Ahmed Rizvi</h5>
                    </div>
                    <div className={styles.person_position}>
                      <h5>Head of HR</h5>
                    </div>
                    <div className={styles.person_company}>
                      <h5>Hubco</h5>
                    </div>
                  </div>
                </div>
                <div className={styles.review_content}>
                  <p>
                    Great experience! Such a resourceful, Creative Team! I
                    highly recommend Purpose path
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.testimonial_review}>
                <div className={styles.review_person}>
                  <div className={styles.person_image}>
                    <Image src={images.testimonials} alt="" />
                  </div>
                  <div className={styles.person_details}>
                    <div className={styles.person_name}>
                      <h5>Ahmed Rizvi</h5>
                    </div>
                    <div className={styles.person_position}>
                      <h5>Head of HR</h5>
                    </div>
                    <div className={styles.person_company}>
                      <h5>Hubco</h5>
                    </div>
                  </div>
                </div>
                <div className={styles.review_content}>
                  <p>
                    Great experience! Such a resourceful, Creative Team! I
                    highly recommend Purpose path
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.testimonial_review}>
                <div className={styles.review_person}>
                  <div className={styles.person_image}>
                    <Image src={images.testimonials} alt="" />
                  </div>
                  <div className={styles.person_details}>
                    <div className={styles.person_name}>
                      <h5>Ahmed Rizvi</h5>
                    </div>
                    <div className={styles.person_position}>
                      <h5>Head of HR</h5>
                    </div>
                    <div className={styles.person_company}>
                      <h5>Hubco</h5>
                    </div>
                  </div>
                </div>
                <div className={styles.review_content}>
                  <p>
                    Great experience! Such a resourceful, Creative Team! I
                    highly recommend Purpose path
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
