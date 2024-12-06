"use client";
import React, { useState } from "react";
import layout from "../../styles/layout.module.css";
import styles from "./odoo.module.css";
import { classNames } from "@/app/utils";
import Button from "@/app/components/button/button";
import Image from "next/image";
import { image } from "../../../../public/odoo";

const testimonialsData = [
  {
    id: 1,
    title: "CUSTOMER REVIEWS",
    isActive:true,
    customerReviews: [
      {
        id: 1,
        image: image.testimonial1,
        title: "A Journey of Comfort and Innovation: Yoosha Ergonomics",
        date: "Nov 28, 2024",
      },
      {
        id: 2,
        image: image.testimonial1,
        title:
          "How Odoo Helped Al Hadaya Mall Deliver a Seamless Shopping Experience",
        date: "Nov 28, 2024",
      },
      {
        id: 3,
        image: image.testimonial1,
        title:
          "Top Seedz and Odoo: The Power Duo of Tasty Crackers and the Right ERP",
        date: "Nov 28, 2024",
      },
      {
        id: 4,
        image: image.testimonial1,
        title: "A Journey of Comfort and Innovation: Yoosha Ergonomics",
        date: "Nov 28, 2024",
      },
      {
        id: 5,
        image: image.testimonial1,
        title:
          "How Odoo Helped Al Hadaya Mall Deliver a Seamless Shopping Experience",
        date: "Nov 28, 2024",
      },
      {
        id: 6,
        image: image.testimonial1,
        title:
          "Top Seedz and Odoo: The Power Duo of Tasty Crackers and the Right ERP",
        date: "Nov 28, 2024",
      },
    ],
  },
  {
    id: 2,
    title: "PARTNER STORIES",
    isActive:false,
    customerReviews: [
      {
        id: 1,
        image: image.testimonial1,
        title: "A Journey of Comfort and Innovation: Yoosha Ergonomics",
        date: "Nov 28, 2024",
      },
      {
        id: 2,
        image: image.testimonial1,
        title:
          "How Odoo Helped Al Hadaya Mall Deliver a Seamless Shopping Experience",
        date: "Nov 28, 2024",
      },
      {
        id: 3,
        image: image.testimonial1,
        title:
          "Top Seedz and Odoo: The Power Duo of Tasty Crackers and the Right ERP",
        date: "Nov 28, 2024",
      },
    ],
  },
];

export default function Testimonials() {
  const [testimonialCardData, setTestimonialCardData] = useState(
    testimonialsData[0].customerReviews
  );
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
          <h4 className="heading">TESTIMONIALS</h4>
          <h2 className="main-heading">
            Success Stories
            <br /> With Odoo
          </h2>
          <div className={styles.testimonial_container}>
            <div className={styles.buttonsContainer}>
              {testimonialsData.map((item, index) => (
                <Button
                  key={index}
                  redirect={""}
                  text={item.title}
                  type="primary"
                  componentType="button"
                  //   onClick={() => setToggle(true)}
                />
              ))}
            </div>
            <div className={styles.testimonialsWrapper}>
              {testimonialCardData.map((item, index) => (
                <div className={styles.testimonialsCard} key={index}>
                  <div className={styles.cardImage}>
                    <Image src={image.ideaboxLineLogo} className={styles.ideaboxLogo}/>
                    <Image src={item.image} alt="testimonials" />
                  </div>
                  <div className={styles.cardText}>
                    <h4>
                     {item.title}
                    </h4>
                    <p>{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
