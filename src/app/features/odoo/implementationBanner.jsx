import React from "react";
import { image } from "../../../../public/odoo";
import layout from "../../styles/layout.module.css";
import styles from "./odoo.module.css";
import { classNames } from "@/app/utils";
import Image from "next/image";
import Button from "@/app/components/button/button";

export default function ImplementationBanner() {
  return (
    <section
      className={classNames(
        layout.grid,
        layout.grid_col80,
        styles.primary_color_section
      )}
    >
      <div className={layout.block__inner}>
        <div className={styles.implementationBanner_container}>
          <Image src={image.implementationBanner} alt="implementation banner" className={styles.web}/>
          <Image src={image.implementationBannerMob} alt="implementation banner" className={styles.mobile}/>
          <div className={styles.bannerText}>
            <h3>End-to-end ERP implementation for all industries.</h3>
            <Button
              redirect={""}
              text={"Get Free Consultations!"}
              type="primary"
              componentType="button"
              //   onClick={() => setToggle(true)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
