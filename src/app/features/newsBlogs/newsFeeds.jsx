import Button from "@/app/components/button/button";
import Input from "@/app/components/getInTouch/input";
import React from "react";
import layout from "../../styles/layout.module.css";
import styles from "./newsBlogs.module.css";
import { images } from "../../../../public/newsBlogs";
import Image from "../../components/image";

function NewsFeeds() {
  return (
    <>
      <div
        className={[layout.grid, layout.grid_col80, styles.blogs_bg].join(" ")}
      >
        <div className={layout.block__inner}>
          <div className={styles.feeds_container}>
            <div className={styles.news_feed_content}>
              <h2>Get our stories delivered From us to your inbox weekly.</h2>
              <div className={styles.email_input}>
                <Input input_type="text" placeholder="Your Email" />
                <Button redirect={""} text={"LOAD MORE WORK"} type="primary" />
              </div>
              <div className={styles.news_feed_para}>
                <p>
                  Get a response tomorrow if you submit by 9pm today. If we
                  received after 9pm will get a reponse the following day.
                </p>
              </div>
            </div>
            <div className={styles.news_feed_image}>
              <Image src={images.newsfeed} alt="News Feeds" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsFeeds;
