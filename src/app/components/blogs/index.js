import React from "react";
import styles from "./Blogs.module.css";
import layout from "../../styles/layout.module.css";
import BlogsCards from "@/app/features/newsBlogs/blogsCards";
import { classNames } from "@/app/utils";

function Blogs({ blogsCard }) {
  return (
    <>
      <section
        className={classNames(
          styles.blogs_section,
          layout.grid,
          layout.grid_col80,
          "home-blog-card"
        )}
      >
        <div className={layout.block__inner}>
          <div className={styles.blog_container}>
            <div className={styles.blogs_heading}>
              <h3 className="heading">NEWS & BLOGS</h3>
            </div>
            <div className={styles.leaderboard}>
              <h2 className="main-heading">
                Stay Updated With <br /> Latest Tech Info!
              </h2>
            </div>
            <BlogsCards
              className={styles.blogs_container}
              blogsCard={blogsCard}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;
