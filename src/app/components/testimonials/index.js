"use client";
import layout from "../../styles/layout.module.css";
import styles from "./testimonials.module.css";
import { classNames } from "@/app/utils";
import React, { useState } from "react";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import testimonial from "@/app/data/testimonial";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function Testimonials() {
  const [toggle, setToggle] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(null);
  const handleReadMore = (index) => {
    setActiveTestimonial(index);
    setToggle(true);
  };
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
            // autoplay={{
            //   delay: 2000,
            //   disableOnInteraction: false,
            // }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            breakpoints={{
              300: {
                slidesPerView: 1,
              },
              700: {
                slidesPerView: 2,
              },
              1000: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonial.map((testimonial, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className={styles.testimonial_review}>
                    <div className={styles.review_person}>
                      <div className={styles.person_image}>
                        <Image src={testimonial.logo} alt="Testimonials" />
                      </div>
                      <div className={styles.person_details}>
                        <div className={styles.person_name}>
                          <h5>{testimonial.person}</h5>
                        </div>
                        <div className={styles.person_position}>
                          <h5>{testimonial.position}</h5>
                        </div>
                        <div className={styles.person_company}>
                          <Link href={testimonial.companyUrl}>
                            <h5>{testimonial.company}</h5>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className={styles.review_content}>
                      <p>{testimonial.testimonial.slice(0, 75)}...</p>
                    </div>
                    <Link
                      className={styles.read_more}
                      onClick={(e) => {
                        e.preventDefault;
                        handleReadMore(index);
                      }}
                      href={""}
                    >
                      Read More
                    </Link>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        {activeTestimonial !== null && (
          <div
            className={
              toggle
                ? classNames(styles.modal_container, styles.modal_active)
                : styles.modal_container
            }
          >
            <div className={styles.close_btn} onClick={() => setToggle(false)}>
              <FontAwesomeIcon icon={faClose} />
            </div>
            <div className={styles.testimonial_modal}>
              <div className={styles.testimonial_border}>
                <div className={styles.review_person_modal}>
                  <div className={styles.person_image}>
                    <Image
                      src={testimonial[activeTestimonial].logo}
                      alt="Testimonials"
                    />
                  </div>
                  <div className={styles.person_details}>
                    <div className={styles.person_name}>
                      <h5>{testimonial[activeTestimonial].person}</h5>
                    </div>
                    <div className={styles.person_position}>
                      <h5>{testimonial[activeTestimonial].position}</h5>
                    </div>
                    <div className={styles.person_company}>
                      <Link href={testimonial[activeTestimonial].companyUrl}>
                        <h5>{testimonial[activeTestimonial].company}</h5>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={styles.review_content_modal}>
                  <p>{testimonial[activeTestimonial].testimonial}...</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Testimonials;
