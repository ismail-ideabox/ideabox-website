"use client";
import React from "react";
import layout from "../../styles/layout.module.css";
import styles from "./odoo.module.css";
import { classNames } from "@/app/utils";
import Image from "next/image";
import { image } from "../../../../public/odoo";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function GlobalFootprint() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once when it comes into view
    threshold: 0.5, // Trigger when 20% of the section is visible
  });
  return (
    <section
      ref={ref}
      className={classNames(
        layout.grid,
        layout.grid_col80,
        styles.black_color_section
      )}
    >
      <div className={layout.block__inner}>
        <div className={styles.section_container}>
          <div className={styles.globalFootprint_container}>
            <div className={styles.globalFootprint_header}>
              <h2 className="main-heading">GLOBAL FOOTPRINT</h2>
              <p>
                Over a span of just three years, we have managed to develop
                client relationships across the globe.
              </p>
              <Image src={image.mapImage} />
            </div>

            <div className={styles.globalFootprint_stats}>
              <div className={styles.globalFootprint_stats_content}>
                <span>
                  {inView ? (
                    <CountUp
                      start={0}
                      end={2014}
                      duration={2}
                      delay={0}
                      separator=""
                    />
                  ) : (
                    "0"
                  )}
                </span>

                <p>FOUNDED</p>
              </div>
              <div className={styles.globalFootprint_stats_content}>
                <span>
                  {inView ? (
                    <CountUp
                      start={0}
                      end={400}
                      duration={2}
                      delay={0}
                      suffix="+"
                    />
                  ) : (
                    "0%"
                  )}
                </span>
                <p>PROJECTS COMPLETED</p>
              </div>
              <div className={styles.globalFootprint_stats_content}>
                <span>
                  {inView ? (
                    <CountUp
                      start={0}
                      end={300}
                      duration={2}
                      delay={0}
                      suffix="+"
                    />
                  ) : (
                    "0+"
                  )}
                </span>
                <p>
                  GROWTH
                  IN THE <br />LAST
                  2 YEARS

                </p>
              </div>
              <div className={styles.globalFootprint_stats_content}>
                <span>
                  {inView ? (
                    <CountUp
                      start={0}
                      end={85}
                      duration={2}
                      delay={0}
                      suffix="+"
                    />
                  ) : (
                    "0"
                  )}
                </span>
                <p>NO. OF PEOPLE</p>
              </div>
              <div className={styles.globalFootprint_stats_content}>
                <span>
                  0
                  {inView ? (
                    <CountUp start={0} end={5} duration={2} delay={0} />
                  ) : (
                    "0"
                  )}
                </span>
                <p>CLIENTS OVER CONTINENT</p>
              </div>
              <div className={styles.globalFootprint_stats_content}>
                <span>
                  0
                  {inView ? (
                    <CountUp start={0} end={3} duration={2} delay={0} />
                  ) : (
                    "0"
                  )}
                </span>
                <p>OFFICES IN COUNTRIES</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
