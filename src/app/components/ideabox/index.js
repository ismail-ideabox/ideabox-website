import React from "react";
import styles from "./ideabox.module.css";
import layout from "../../styles/layout.module.css";
import Image from "next/image";
import { classNames } from "@/app/utils";
import { images } from "../../../../public/ideabox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

function Ideabox() {
  return (
    <section
      className={classNames(
        layout.grid,
        layout.grid_col80,
        styles.ideabox_section
      )}
    >
      <div className={layout.block__inner}>
        <div className={styles.ideabox_container}>
          <div className={styles.why_ideabox}>
            <h2 className="main-heading">Why Ideabox?</h2>
          </div>
          <div className={styles.ideabox_features}>
            <div className={styles.features}>
              <h3>
                STRATEGIC <br /> APPROACH
              </h3>
              <p>
                Purpose Path helps you reach your goals faster with insightful
                market research
              </p>
            </div>
            <div className={styles.features}>
              <h3>
                CREATIVE <br /> GUIDANCE
              </h3>
              <p>
                Work on your most outrageously creative ideas, with a team of
                seasoned creatives at your disposal
              </p>
            </div>
            <div className={styles.features}>
              <h3>
                FAST <br /> TURNAROUNDS
              </h3>
              <p>
                A dedicated project manager ensures your projects are delivered
                before your deadlines
              </p>
            </div>
            <div className={styles.features}>
              <h3>
                PAY AS <br /> YOU GO
              </h3>
              <p>
                Flexible payment plans and no-monthly commitments for all
                services
              </p>
            </div>
            <div className={styles.features}>
              <h3>
                ALWAYS <br /> AVAILABLE
              </h3>
              <p>
                24/7 support with a real person is standard when you work with
                Purpose Path
              </p>
            </div>
            <div className={styles.features}>
              <h3>REVENUE DRIVEN</h3>
              <p>
                Numbers never lie. Purpose Path focuses on relevant metrics, not
                empty numbers
              </p>
            </div>
          </div>
          <div className={styles.tech_container}>
            <div className={styles.tech_images}>
              <Image
                className={styles.tech_images_img}
                alt=""
                src={images.node}
              />
            </div>
            <div className={styles.tech_images}>
              <Image
                className={styles.tech_images_img}
                alt=""
                src={images.dotnet}
              />
            </div>
            <div className={styles.tech_images}>
              <Image
                className={styles.tech_images_img}
                alt=""
                src={images.php}
              />
            </div>
            <div className={styles.tech_images}>
              <Image
                className={styles.tech_images_img}
                alt=""
                src={images.angular}
              />
            </div>
            <div className={styles.tech_images}>
              <Image
                className={styles.tech_images_img}
                alt=""
                src={images.reactjs}
              />
            </div>
            <div className={styles.tech_images}>
              <Image
                className={styles.tech_images_img}
                alt=""
                src={images.android}
              />
            </div>
            <div className={styles.tech_images}>
              <Image
                className={styles.tech_images_img}
                alt=""
                src={images.reactnative}
              />
            </div>

            <div className={styles.tech_images}>
              <Image
                className={styles.tech_images_img}
                alt=""
                src={images.ios}
              />
            </div>
            <div className={styles.tech_images}>
              <Image
                className={styles.tech_images_img}
                alt=""
                src={images.python}
              />
            </div>
            <div className={styles.tech_images}>
              <Image
                className={styles.tech_images_img}
                alt=""
                src={images.odoo}
              />
            </div>
            <div className={styles.tech_images}>
              <Image
                className={styles.tech_images_img}
                alt=""
                src={images.sap}
              />
            </div>
            <div className={styles.tech_images}>
              <Image
                className={styles.tech_images_img}
                alt=""
                src={images.aws}
              />
            </div>
            <div className={styles.tech_images}>
              <Image
                className={styles.tech_images_img}
                alt=""
                src={images.azure}
              />
            </div>
          </div>
          <div className={styles.tech_container_slider}>
            <Swiper
              className="ideaboxSlider"
              slidesPerView={7}
              loop={true}
              // freeMode={true}
              spaceBetween={0}
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
              <SwiperSlide>
                <div className={styles.tech_images}>
                  <Image
                    className={styles.tech_images_img}
                    alt=""
                    src={images.node}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.tech_images}>
                  <Image
                    className={styles.tech_images_img}
                    alt=""
                    src={images.dotnet}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.tech_images}>
                  <Image
                    className={styles.tech_images_img}
                    alt=""
                    src={images.php}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.tech_images}>
                  <Image
                    className={styles.tech_images_img}
                    alt=""
                    src={images.angular}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.tech_images}>
                  <Image
                    className={styles.tech_images_img}
                    alt=""
                    src={images.reactjs}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.tech_images}>
                  <Image
                    className={styles.tech_images_img}
                    alt=""
                    src={images.android}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className={styles.tech_images}>
                  <Image
                    className={styles.tech_images_img}
                    alt=""
                    src={images.reactnative}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.tech_images}>
                  <Image
                    className={styles.tech_images_img}
                    alt=""
                    src={images.ios}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className={styles.tech_images}>
                  <Image
                    className={styles.tech_images_img}
                    alt=""
                    src={images.python}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.tech_images}>
                  <Image
                    className={styles.tech_images_img}
                    alt=""
                    src={images.odoo}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className={styles.tech_images}>
                  <Image
                    className={styles.tech_images_img}
                    alt=""
                    src={images.sap}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.tech_images}>
                  <Image
                    className={styles.tech_images_img}
                    alt=""
                    src={images.aws}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.tech_images}>
                  <Image
                    className={styles.tech_images_img}
                    alt=""
                    src={images.azure}
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ideabox;
