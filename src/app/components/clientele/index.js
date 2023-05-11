import React from "react";
import Image from "next/image";
import styles from "./clientele.module.css";
import layout from "../../styles/layout.module.css";
import { images } from "../../../../public/clientele";
import { classNames } from "@/app/utils";
import clienteleLogo from "@/app/data/clientele";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import Link from "next/link";

function Clientele() {
  return (
    <section
      className={classNames(
        layout.grid,
        layout.grid_col80,
        styles.clientele_section
      )}
    >
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
          <div className={styles.clientele_images}>
            <Swiper
              className="clienteleslider"
              slidesPerView={6}
              freeMode={true}
              spaceBetween={70}
              speed={3000}
              loop={true}
              // Autoplay={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                // pauseOnMouseEnter: true,
              }}
              breakpoints={{
                300: {
                  slidesPerView: 3,
                },
                600: {
                  slidesPerView: 5,
                },
                840: {
                  slidesPerView: 6,
                },
              }}
              _freeModeNoMomentumRelease={false}
              // pagination={{
              //   clickable: false,
              // }}
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
        </div>
      </div>
    </section>
  );
}

export default Clientele;
