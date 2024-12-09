"use client";
import React, { useEffect, useState } from "react";
import styles from "./comparisonCard.module.css";
import { image } from "../../../../public/odoo";
import { classNames } from "@/app/utils";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useInView } from "react-intersection-observer";

export default function ErpComparison() {
  const [progressSap, setProgressSap] = useState(0);
  const [progressNetsuit, setProgressNetsuit] = useState(0);
  const [progressDynamic, setProgressDynamic] = useState(0);
  const [progressOdoo, setProgressOdoo] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger when 50% of the component is in view
  });

  useEffect(() => {
    if (inView) {
      // SAP Progress
      let currentProgressSap = 0;
      const intervalSap = setInterval(() => {
        currentProgressSap += 1;
        setProgressSap(currentProgressSap);
        if (currentProgressSap === 53) clearInterval(intervalSap);
      }, 30);

      // Netsuit Progress
      let currentProgressNetsuit = 0;
      const intervalNetsuit = setInterval(() => {
        currentProgressNetsuit += 1;
        setProgressNetsuit(currentProgressNetsuit);
        if (currentProgressNetsuit === 56) clearInterval(intervalNetsuit);
      }, 30);

      // Dynamic Progress
      let currentProgressDynamic = 0;
      const intervalDynamic = setInterval(() => {
        currentProgressDynamic += 1;
        setProgressDynamic(currentProgressDynamic);
        if (currentProgressDynamic === 65) clearInterval(intervalDynamic);
      }, 30);

      // Odoo Progress
      let currentProgressOdoo = 0;
      const intervalOdoo = setInterval(() => {
        currentProgressOdoo += 1;
        setProgressOdoo(currentProgressOdoo);
        if (currentProgressOdoo === 90) clearInterval(intervalOdoo);
      }, 30);
    }
  }, [inView]);

  return (
    <>
      <div ref={ref} className={styles.comparison_container}>
        <div className={styles.comparison_item}>
          <div className={styles.erpLogo}>
            {" "}
            <Image src={image.sap} className={styles.sapImg} />
          </div>

          <div className={styles.percent} style={{ rotate: "90deg" }}>
            <CircularProgressbar
              value={progressSap}
              text={`${progressSap}%`}
              strokeWidth={6}
              styles={buildStyles({
                strokeLinecap: "round", // Smooth edges
                textSize: "24px", // Adjust text size
                pathColor: "#58ccff", // Blue color for progress
                pathTransitionDuration: 0.3, // Smooth animation
                textColor: "#FFFFFF", // White text color
                trailColor: "#FFFFFF", // White trail color
              })}
            />
          </div>
          <ul>
            <li>
              <strong>Modular Design</strong> Low, more monolithic, and
              integrated
            </li>
            <li>
              <strong>Industry Focus</strong> Manufacturing, retail, healthcare,
              finance, and more
            </li>
            <li>
              <strong>Deployment</strong> On-premise or cloud
            </li>
            <li>
              <strong>Innovation</strong> Low, less frequent, and less
              innovative updates
            </li>
            <li>
              <strong>Implementation Time</strong> Long (months to years)
            </li>
          </ul>
        </div>
        <div className={styles.comparison_item}>
          <div className={styles.erpLogo}>
            <Image src={image.netsuit} className={styles.netsuitImg} />
          </div>
          <div className={styles.percent} style={{ rotate: "90deg" }}>
            <CircularProgressbar
              value={progressNetsuit}
              text={`${progressNetsuit}%`}
              strokeWidth={6}
              styles={buildStyles({
                strokeLinecap: "round", // Smooth edges
                textSize: "24px", // Adjust text size
                pathColor: "#004482", // Blue color for progress
                pathTransitionDuration: 0.2, // Smooth animation
                textColor: "#FFFFFF", // White text color
                trailColor: "#FFFFFF", // White trail color
              })}
            />
          </div>
          <ul>
            <li>
              <strong>Modular Design</strong> Low, more monolithic, and
              integrated
            </li>
            <li>
              <strong>Industry Focus</strong> E-commerce, professional services,
              software, and more
            </li>
            <li>
              <strong>Deployment</strong> Cloud only
            </li>
            <li>
              <strong>Innovation</strong> Moderate, more frequent, and more
              innovative updates
            </li>
            <li>
              <strong>Implementation Time</strong> Moderate (weeks to months)
            </li>
          </ul>
        </div>
        <div className={styles.comparison_item}>
          <div className={styles.erpLogo}>
            <Image src={image.dynamic} className={styles.dynamicImg} />
          </div>
          <div className={styles.percent} style={{ rotate: "90deg" }}>
            <CircularProgressbar
              value={progressDynamic}
              text={`${progressDynamic}%`}
              strokeWidth={6}
              styles={buildStyles({
                strokeLinecap: "round", // Smooth edges
                textSize: "24px", // Adjust text size
                pathColor: "#1e63db", // Blue color for progress
                pathTransitionDuration: 0.2, // Smooth animation
                textColor: "#FFFFFF", // White text color
                trailColor: "#FFFFFF", // White trail color
              })}
            />
          </div>
          <ul>
            <li>
              <strong>Modular Design</strong> Moderate, more modular, and
              flexible
            </li>
            <li>
              <strong>Industry Focus</strong>Manufacturing, retail,
              distribution, and more
            </li>
            <li>
              <strong>Deployment</strong> On-premise or cloud
            </li>
            <li>
              <strong>Innovation</strong> High, very frequent, and very
              innovative updates
            </li>
            <li>
              <strong>Implementation Time</strong> Moderate (weeks to months)
            </li>
          </ul>
        </div>
        <div className={classNames(styles.comparison_item, styles.odoo)}>
          <div className={styles.erpLogo}>
            <Image src={image.odoo} className={styles.odooImg} />
          </div>
          <div className={styles.percent} style={{ rotate: "90deg" }}>
            <CircularProgressbar
              value={progressOdoo}
              text={`${progressOdoo}%`}
              strokeWidth={6}
              styles={buildStyles({
                strokeLinecap: "round", // Smooth edges
                textSize: "24px", // Adjust text size
                pathColor: "#9c5789", // Blue color for progress
                pathTransitionDuration: 0.2, // Smooth animation

                textColor: "#714b67", // White text color
                trailColor: "#FFFFFF", // White trail color
              })}
            />
          </div>
          <ul>
            <li>
              <strong>Modular Design</strong> High, very modular, and flexible
            </li>
            <li>
              <strong>Industry Focus</strong> Manufacturing, e-commerce,
              services, and more
            </li>
            <li>
              <strong>Deployment</strong> On-premise or cloud
            </li>
            <li>
              <strong>Innovation</strong> High, very frequent, and very
              innovative updates
            </li>
            <li>
              <strong>Implementation Time</strong>Short (days to weeks)
            </li>
          </ul>
        </div>
      </div>
      <div className={[styles.comparison_mobile].join(" ")}>
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
          <SwiperSlide>
            <div className={styles.comparison_item}>
              <div className={styles.erpLogo}>
                {" "}
                <Image src={image.sap} className={styles.sapImg} />
              </div>

              <div className={styles.percent}>
                <svg>
                  <circle cx="90" cy="90" r="85"></circle>
                  <circle
                    cx="90"
                    cy="90"
                    r="85"
                    className={styles.circle1}
                  ></circle>
                </svg>
                <div className={styles.number}>
                  <h3>
                    53<span>%</span>
                  </h3>
                </div>
              </div>
              <ul>
                <li>
                  <strong>Modular Design</strong> Low, more monolithic, and
                  integrated
                </li>
                <li>
                  <strong>Industry Focus</strong> Manufacturing, retail,
                  healthcare, finance, and more
                </li>
                <li>
                  <strong>Deployment</strong> On-premise or cloud
                </li>
                <li>
                  <strong>Innovation</strong> Low, less frequent, and less
                  innovative updates
                </li>
                <li>
                  <strong>Implementation Time</strong> Long (months to years)
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.comparison_item}>
              <div className={styles.erpLogo}>
                <Image src={image.netsuit} className={styles.netsuitImg} />
              </div>
              <div className={styles.percent}>
                <svg>
                  <circle cx="90" cy="90" r="85"></circle>
                  <circle
                    cx="90"
                    cy="90"
                    r="85"
                    className={styles.circle2}
                  ></circle>
                </svg>
                <div className={styles.number}>
                  <h3>
                    56<span>%</span>
                  </h3>
                </div>
              </div>
              <ul>
                <li>
                  <strong>Modular Design</strong> Low, more monolithic, and
                  integrated
                </li>
                <li>
                  <strong>Industry Focus</strong> E-commerce, professional
                  services, software, and more
                </li>
                <li>
                  <strong>Deployment</strong> Cloud only
                </li>
                <li>
                  <strong>Innovation</strong> Moderate, more frequent, and more
                  innovative updates
                </li>
                <li>
                  <strong>Implementation Time</strong> Moderate (weeks to
                  months)
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.comparison_item}>
              <div className={styles.erpLogo}>
                <Image src={image.dynamic} className={styles.dynamicImg} />
              </div>
              <div className={styles.percent}>
                <svg>
                  <circle cx="90" cy="90" r="85"></circle>
                  <circle
                    cx="90"
                    cy="90"
                    r="85"
                    className={styles.circle3}
                  ></circle>
                </svg>
                <div className={styles.number}>
                  <h3>
                    65<span>%</span>
                  </h3>
                </div>
              </div>
              <ul>
                <li>
                  <strong>Modular Design</strong> Moderate, more modular, and
                  flexible
                </li>
                <li>
                  <strong>Industry Focus</strong>Manufacturing, retail,
                  distribution, and more
                </li>
                <li>
                  <strong>Deployment</strong> On-premise or cloud
                </li>
                <li>
                  <strong>Innovation</strong> High, very frequent, and very
                  innovative updates
                </li>
                <li>
                  <strong>Implementation Time</strong> Moderate (weeks to
                  months)
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classNames(styles.comparison_item, styles.odoo)}>
              <div className={styles.erpLogo}>
                <Image src={image.odoo} className={styles.odooImg} />
              </div>
              <div className={styles.percent}>
                <svg>
                  <circle cx="90" cy="90" r="85"></circle>
                  <circle
                    cx="90"
                    cy="90"
                    r="85"
                    className={styles.circle4}
                  ></circle>
                </svg>
                <div className={styles.number}>
                  <h3>
                    90<span>%</span>
                  </h3>
                </div>
              </div>
              <ul>
                <li>
                  <strong>Modular Design</strong> High, very modular, and
                  flexible
                </li>
                <li>
                  <strong>Industry Focus</strong> Manufacturing, e-commerce,
                  services, and more
                </li>
                <li>
                  <strong>Deployment</strong> On-premise or cloud
                </li>
                <li>
                  <strong>Innovation</strong> High, very frequent, and very
                  innovative updates
                </li>
                <li>
                  <strong>Implementation Time</strong>Short (days to weeks)
                </li>
              </ul>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
