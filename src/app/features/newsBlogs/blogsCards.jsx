import React from "react";
import styles from "./newsBlogs.module.css";
import layout from "../../styles/layout.module.css";
import Image from "../../components/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { classNames } from "@/app/utils";

function BlogsCards({ blogsCard }) {
  return (
    <>
      <div className={classNames(styles.blogs_container, styles.blogs_web)}>
        {blogsCard.map((blogCard, index) => (
          <div className={styles.blogs_card_web} key={index}>
            <div className={styles.card_image}>
              <Image src={blogCard.cardImage} alt="Card Image for the Blog" />
            </div>
            <div className={styles.card_content}>
              <Link href={""}>
                <h2>{blogCard.blogTitle}</h2>
              </Link>
              {blogCard.blogDescription && (
                <div className={styles.blog_description}>
                  <p>{blogCard.blogDescription.slice(0, 132)}...</p>
                </div>
              )}
              <div className={styles.author_details}>
                <div className={styles.blogs_read_more}>
                  <Link href={blogCard.link?blogCard.link:""} target="_blank">
                    <p className={styles.read_more}>Read More</p>
                  </Link>
                </div>
                <div className={styles.day_date}>
                  <p>{blogCard.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className={[
          layout.block__inner,
          styles.blogs_container,
          styles.blogs_mobile,
        ].join(" ")}
      >
        <Swiper
          className="blogsSwiper"
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
        >
          {blogsCard.map((blogCard, index) => (
            <SwiperSlide key={index}>
              <div className={styles.blogs_card}>
                <div className={styles.card_image}>
                  <Image
                    src={blogCard.cardImage}
                    alt="Card Image for the Blog"
                  />
                </div>
                <div className={styles.card_content}>
                  <Link href={""}>
                    <h2>{blogCard.blogTitle}</h2>
                  </Link>
                  <div className={styles.blog_description}>
                    <p>{blogCard.blogDescription}</p>
                  </div>
                  <div className={styles.author_details}>
                    <div className={styles.blogs_read_more}>
                      <Link href={""}>
                        <p className={styles.read_more}>Read More</p>
                      </Link>
                    </div>
                    <div className={styles.day_date}>
                      <p>{blogCard.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default BlogsCards;
