import React, { useState } from "react";
import Image from "next/image";
import styles from "./proudproduct.module.css";
import layout from "../../styles/layout.module.css";
import { image } from "../../../../public/saloonPlus";
import { classNames } from "@/app/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";

function Proudproduct() {
  const [toggleList, setToggleList] = useState(false);
  return (
    <section className={styles.proudproduct_section}>
      <div
        className={classNames(layout.grid, layout.grid_col80)}
        onClick={() => {
          toggleList ? setToggleList(false) : "";
        }}
      >
        <div className={layout.block__inner}>
          <div className={styles.proudproduct_container}>
            <div className={styles.proudproduct_heading}>
              <h2 className="main-heading">
                Our Proud
                <br /> Product
              </h2>
            </div>
            <div className={styles.saloonplus_content}>
              <div className={styles.saloonplus_image}>
                <Image src={image.salonlogo} alt="Saloon Plus" />
                <p>
                  A fully customised web-based solution for Salon & Spa
                  industry. The software has multiple modules
                </p>
              </div>
              <div className={styles.saloonplus_para}>
                <p>
                  Salonplus has all the great tools to run a salon. For you, our
                  application will handle day-to-day tasks so salons are free to
                  focus on making their clients look and feel their best. It’s a
                  complete web-based software which is accessible through
                  laptop, tablet or even mobile phone so all the operations can
                  be viewed and managed from any location in the world
                </p>
              </div>
            </div>
            <div className={styles.software_modules}>
              <ul className={styles.modules_ul}>
                <li>
                  CUSTOMER RELATIONSHIP MODULE{" "}
                  <FontAwesomeIcon icon={faCircleChevronDown} />
                </li>
                <li>NOTIFICATIONS & REMINDERS </li>
                <li>SMS PORTAL </li>
                <li>APPOINTMENT MANAGEMENT </li>
                <li>BILLING SERVICES </li>
                <li>INVENTORY MANAGEMENT </li>
                <li>STAFF MANAGEMENT </li>
                <li>DEALS MANAGEMENT </li>
                <li>DASHBOARD & ANALYTICS </li>
                <li>REPORTS LOYALTY MANAGEMENT </li>
                <li>EXPENSE MANAGEMENT </li>
                <li>HR (STAFF MANAGEMENT) </li>
              </ul>
            </div>
            <div
              className={
                toggleList
                  ? classNames(
                      styles.software_modules_mob_active,
                      styles.software_modules_mob
                    )
                  : styles.software_modules_mob
              }
            >
              <ul className={styles.modules_ul}>
                <li onClick={() => setToggleList(!toggleList)}>
                  CUSTOMER RELATIONSHIP MODULE{" "}
                  <FontAwesomeIcon icon={faCircleChevronDown} />
                </li>
                <div
                  className={
                    toggleList
                      ? classNames(
                          styles.software_modules_mob_body,
                          styles.software_modules_mob_body_active
                        )
                      : styles.software_modules_mob_body
                  }
                >
                  <li>NOTIFICATIONS & REMINDERS </li>
                  <li>SMS PORTAL </li>
                  <li>APPOINTMENT MANAGEMENT </li>
                  <li>BILLING SERVICES </li>
                  <li>INVENTORY MANAGEMENT </li>
                  <li>STAFF MANAGEMENT </li>
                  <li>DEALS MANAGEMENT </li>
                  <li>DASHBOARD & ANALYTICS </li>
                  <li>REPORTS LOYALTY MANAGEMENT </li>
                  <li>EXPENSE MANAGEMENT </li>
                  <li>HR (STAFF MANAGEMENT) </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Proudproduct;
