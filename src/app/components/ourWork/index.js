"use client";
import React from "react";
import layout from "../../styles/layout.module.css";
import styles from "./ourwork.module.css";
import Button from "../button/button";
import { classNames } from "@/app/utils";
import Projectcard from "./projectcard";
import workDetail from "@/app/data/work";
function Ourwork({ isHomePage }) {
  return (
    <section
      className={classNames(
        layout.grid,
        layout.grid_col80,
        styles.ourwork_section
      )}
    >
      <div className={layout.block__inner}>
        <div className={styles.ourwork_container}>
          <div className={styles.ourwork_heading}>
            <h4 className="heading">OUR WORK</h4>
          </div>
          <div className={styles.ourwork_casestudies}>
            <h2 className="main-heading">Case Studies</h2>
          </div>
          <Projectcard
            workData={workDetail.slice(0, 6)}
            isHomePage={isHomePage}
          />
          <div className={styles.ourwork_viewmore}>
            <Button
              redirect={"/our-work"}
              text={"VIEW MORE WORK"}
              type="primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ourwork;
