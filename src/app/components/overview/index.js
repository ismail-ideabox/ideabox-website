"use client";
import styles from "./overview.module.css";
import layout from "../../styles/layout.module.css";
import { classNames } from "@/app/utils";
import { React, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";


function Overview({ isVisible }) {
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
        styles.overview_section
      )}
    >
      <div className={layout.block__inner}>
        <div className={styles.overview_container}>
          <div className={styles.heading}>
            <h3 className="heading">OVERVIEW</h3>
            <h2 className="main-heading">
              Ideabox At
              <br /> A Glance
            </h2>
          </div>

          <div className={styles.overview_stats}>
            <div className={styles.overview_stats_content}>
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
                  "0+"
                )}
              </span>

              <p>PROJECTS COMPLETED</p>
            </div>
            <div className={styles.overview_stats_content}>
              <span>
                {inView ? (
                  <CountUp
                    start={0}
                    end={200}
                    duration={2}
                    delay={0}
                    suffix="%"
                  />
                ) : (
                  "0%"
                )}
              </span>
              <p>GROWTH (LAST 2 YEARS)</p>
            </div>
            <div className={styles.overview_stats_content}>
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
                  "0+"
                )}
              </span>
              <p>TEAM MEMBERS</p>
            </div>
            <div className={styles.overview_stats_content}>
              <span>
                0
                {inView ? (
                  <CountUp start={0} end={5} duration={2} delay={0} />
                ) : (
                  "0"
                )}
              </span>
              <p>CONTINENTS</p>
            </div>
            <div className={styles.overview_stats_content}>
              <span>
                {inView ? (
                  <CountUp
                    start={0}
                    end={17}
                    duration={2}
                    delay={0}
                    suffix="+"
                  />
                ) : (
                  "0"
                )}
              </span>
              <p>COUNTRIES</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
