"use client";
import React from "react";
import { images } from "../../../../public/newsBlogs";
import layout from "../../styles/layout.module.css";
import styles from "./odoo.module.css";
import { classNames } from "@/app/utils";
import BlogsCards from "../newsBlogs/blogsCards";

const blogsData = [
  {
    cardImage: images.cardbanner,
    blogTitle: "Regaining Confidence in ERP: from SAP to Odoo",
    date: "02 May",
    link:"https://www.odoo.com/blog/customer-reviews-6/regaining-confidence-in-erp-from-sap-to-odoo-595"
  },
  {
    cardImage: images.cardbanner,
    blogTitle: "Transforming a 9,000-employee company in just six months!",
    date: "02 May",
    link:"https://www.odoo.com/blog/customer-reviews-6/transforming-a-9000-employee-company-in-just-six-months-1342"
  },
  {
    cardImage: images.cardbanner,
    blogTitle: "Odoo Saves Operation Time For Japanese Snack Manufacturer KOIKEYA",
    date: "02 May",
    link:" https://www.odoo.com/blog/customer-reviews-6/odoo-saves-operation-time-for-japanese-snack-manufacturer-koikeya-1217"
  },
  {
    cardImage: images.cardbanner,
    blogTitle: "Amnesty International Italy: Increasing Efficiency to Help More People",
    date: "02 May",
    link:"https://www.odoo.com/blog/customer-reviews-6/amnesty-international-italy-increasing-efficiency-to-help-more-people-549"
  },
  {
    cardImage: images.cardbanner,
    blogTitle: "How many eucalyptus trees WWF helped to grow with Odoo?",
    date: "02 May",
    link:"https://www.odoo.com/blog/customer-reviews-6/how-many-eucalyptus-trees-wwf-helped-to-grow-with-odoo-188"
  },
  {
    cardImage: images.cardbanner,
    blogTitle: "Unleashing the Power of Odoo in Business and Education",
    date: "02 May",
    link:"https://www.odoo.com/blog/customer-reviews-6/unleashing-the-power-of-odoo-in-business-and-education-1309"
  },
];

export default function Blogs() {
  return (
    <section
      className={classNames(
        layout.grid,
        layout.grid_col80,
        styles.primary_color_section
      )}
    >
      <div className={layout.block__inner}>
        <h4 className="heading">BLOGS</h4>
        <h2 className="main-heading">
          Stay Updated With
          <br />
          Latest Tech Info!
        </h2>
        <div className={styles.blogs_container}>
          <BlogsCards blogsCard={blogsData} />
        </div>
      </div>
    </section>
  );
}
