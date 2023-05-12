"use client";
import { React, useState } from "react";
import styles from "./overview.module.css";
import layout from "../../styles/layout.module.css";
import { classNames } from "@/app/utils";
import CountUp from "react-countup";

function Overview({ childRef, isVisible }) {
  console.log(isVisible, "isVisible");
  return (
    <section
      ref={childRef}
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
                {isVisible ? (
                  <CountUp
                    start={0}
                    end={352}
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
                {isVisible ? (
                  <CountUp
                    start={0}
                    end={300}
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
                {isVisible ? (
                  <CountUp
                    start={0}
                    end={65}
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
                {isVisible ? (
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
            <div className={styles.overview_stats_content}>
              <span>
                0
                {isVisible ? (
                  <CountUp start={0} end={5} duration={2} delay={0} />
                ) : (
                  "0"
                )}
              </span>
              <p>CONTINENTS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
