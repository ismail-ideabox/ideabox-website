"use client"
import React from "react";
import { image } from "../../../../public/odoo";
import layout from "../../styles/layout.module.css";
import styles from "./odoo.module.css";
import { classNames } from "@/app/utils";
import Image from "next/image";
import Button from "@/app/components/button/button";
import BlogsCards from "../newsBlogs/blogsCards";
import blogsData from "@/app/data/blogs";

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
