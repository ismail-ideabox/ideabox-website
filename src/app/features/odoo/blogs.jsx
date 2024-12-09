"use client";
import React from "react";
import { image } from "../../../../public/odoo";
import layout from "../../styles/layout.module.css";
import styles from "./odoo.module.css";
import { classNames } from "@/app/utils";
import BlogsCards from "../newsBlogs/blogsCards";

const blogsData = [
  {
    cardImage: image.blog1,
    blogTitle: "Regaining Confidence in ERP: from SAP to Odoo",
    date: "21 Apr", //2020
    link:"https://www.odoo.com/blog/customer-reviews-6/regaining-confidence-in-erp-from-sap-to-odoo-595"
  },
  {
    cardImage: image.blog2,
    blogTitle: "Transforming a 9,000-employee company in just six months!",
    date: "11 Jul",//2024
    link:"https://www.odoo.com/blog/customer-reviews-6/transforming-a-9000-employee-company-in-just-six-months-1342"
  },
  {
    cardImage: image.blog3,
    blogTitle: "Odoo Saves Operation Time For Japanese Snack Manufacturer KOIKEYA",
    date: "22 Apr",//2024
    link:" https://www.odoo.com/blog/customer-reviews-6/odoo-saves-operation-time-for-japanese-snack-manufacturer-koikeya-1217"
  },
  {
    cardImage: image.blog4,
    blogTitle: "Amnesty International Italy: Increasing Efficiency to Help More People",
    date: "24 Jun",//2019
    link:"https://www.odoo.com/blog/customer-reviews-6/amnesty-international-italy-increasing-efficiency-to-help-more-people-549"
  },
  {
    cardImage: image.blog5,
    blogTitle: "How many eucalyptus trees WWF helped to grow with Odoo?",
    date: "19 Sep", // 2014
    link:"https://www.odoo.com/blog/customer-reviews-6/how-many-eucalyptus-trees-wwf-helped-to-grow-with-odoo-188"
  },
  {
    cardImage: image.blog6,
    blogTitle: "Unleashing the Power of Odoo in Business and Education",
    date: "26 Aug",//2024
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
