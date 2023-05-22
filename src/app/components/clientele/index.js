import React from "react";
import styles from "./clientele.module.css";
import layout from "../../styles/layout.module.css";
import { classNames } from "@/app/utils";
import Image from "../image";
import clienteleLogo from "@/app/data/clientele";
import clienteleLogoTwo from "@/app/data/clienteletwo";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import Link from "next/link";

function Clientele() {
  return (
    <section className={styles.clientele_section}>
      <div className={classNames(layout.grid, layout.grid_col80)}>
        <div className={layout.block__inner}>
          <div className={styles.clientele_container}>
            <div className={styles.clientele_heading}>
              <h4 className={"heading"}>CLIENTELE</h4>
            </div>
            <div className={styles.trusted_client}>
              <h2 className={styles.trusted_client_heading}>
                Our Trusted
                <br /> Clients
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.padding_bottom}>
        <div className={styles.clientele_images}>
          <Swiper
            sl
            className="clienteleslider"
            slidesPerView={7}
            loop={true}
            // freeMode={true}
            spaceBetween={2}
            speed={8000}
            // Autoplay={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              300: {
                slidesPerView: 4,
              },
              600: {
                slidesPerView: 5,
              },
              840: {
                slidesPerView: 8,
              },
            }}
            modules={[Pagination, Autoplay]}
          >
            {clienteleLogo.map((clienteleLogo, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className={styles.work_logo_img}>
                    <Link target="_blank" href={clienteleLogo.url}>
                      <Image alt="Clientele Logo" src={clienteleLogo.logo} />
                    </Link>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className={styles.clientele_images}>
          <Swiper
            className="clienteleslider"
            slidesPerView={8}
            loop={true}
            // freeMode={true}
            spaceBetween={20}
            speed={10000}
            // Autoplay={true}
            autoplay={{
              reverseDirection: true,
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              300: {
                slidesPerView: 4,
              },
              600: {
                slidesPerView: 5,
              },
              840: {
                slidesPerView: 8,
              },
            }}
            grabCursor={true}
            modules={[Pagination, Autoplay]}
          >
            {clienteleLogoTwo.map((clienteleLogo, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className={styles.work_logo_img}>
                    <Link target="_blank" href={clienteleLogo.url}>
                      <Image alt="Clientele Logo" src={clienteleLogo.logo} />
                    </Link>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Clientele;
