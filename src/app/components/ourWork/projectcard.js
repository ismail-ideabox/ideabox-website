"use client";
import React from "react";
import styles from "./ourwork.module.css";
import Button from "../button/button";
import Image from "../image";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { classNames } from "@/app/utils";

function Projectcard({ workData, isHomePage }) {
  return (
    <>
      <div className={styles.ourwork_project_container}>
        {isHomePage ? (
          <Swiper
            className="ourworkSlider"
            slidesPerView={1}
            lazy={true}
            spaceBetween={20}
            preloadimages={true}
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
            {workData.map((workData, index) => {
              let urlSlug = workData.projectName.replace(/\s+/g, "-");
              urlSlug = "/our-work/" + urlSlug;
              return (
                <SwiperSlide key={index}>
                  <div
                    className={styles.ourwork_project}
                    style={{ width: "100%", height: "100%" }}
                  >
                    <div className={styles.ourwork_flex}>
                      <div>
                        <div className={styles.project_image}>
                          <Image
                            src={workData.workCardImage}
                            alt="Case Study Card Image"
                          />
                        </div>
                        <div className={styles.project_name}>
                          <h4>{workData.projectName}</h4>
                        </div>
                        <div className={styles.project_description}>
                          <h3>
                            {workData.workInfo
                              ? workData.workInfo.slice(0, 80) + "..."
                              : workData.workInfo}
                          </h3>
                        </div>
                      </div>
                      <div className={styles.project_view}>
                        <Button
                          redirect={urlSlug}
                          text={"View Project"}
                          type="secondary"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <>
            {workData.map((workData, index) => {
              let urlSlug = workData.projectName.replace(/\s+/g, "-");
              urlSlug = "/our-work/" + urlSlug;
              return (
                <div
                  className={classNames(
                    styles.ourwork_project,
                    styles.ourwork_flex
                  )}
                >
                  <div className={styles.ourwork_with_flex}>
                    <div className={styles.project_image}>
                      <Image
                        src={workData.workCardImage}
                        alt="Case Study Card Image"
                      />
                    </div>
                    <div className={styles.project_name}>
                      <h4>{workData.projectName}</h4>
                    </div>
                    <div className={styles.project_description}>
                      <h3>
                        {workData.workInfo
                          ? workData.workInfo.slice(0, 70) + "..."
                          : workData.workInfo}
                      </h3>
                    </div>
                  </div>
                  <div className={styles.project_view}>
                    <Button
                      redirect={urlSlug}
                      text={"View Project"}
                      type="secondary"
                    />
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
}

export default Projectcard;
