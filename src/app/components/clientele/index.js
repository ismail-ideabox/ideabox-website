import React from "react";
import Image from "next/image";
import styles from "./clientele.module.css";
import layout from "../../styles/layout.module.css";
import { images } from "../../../../public/clientele";
import { classNames } from "@/app/utils";
import clienteleLogo from "@/app/data/clientele";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

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
            <h2 className="main-heading">
              Our Trusted
              <br /> Clients
            </h2>
          </div>
          <div className={styles.clientele_images}>
            <Swiper
              className="clienteleslider"
              slidesPerView={3}
              freeMode={true}
              spaceBetween={20}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: false,
              }}
              modules={[Pagination, Autoplay]}
            >
              {clienteleLogo.map((clienteleLogo, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className={styles.work_logo_img}>
                      <Image alt="Clientele Logo" src={clienteleLogo.logo} />
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
