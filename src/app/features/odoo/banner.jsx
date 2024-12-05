import React from "react";
import layout from "../../styles/layout.module.css";
import styles from "./odoo.module.css";
import Image from "next/image";
import { image } from "../../../../public/odoo";
import { classNames } from "@/app/utils";
import Button from "@/app/components/button/button";

export default function OdooBanner() {
  return (
    <div className={styles.banner_container}>
      <Image src={image.bannerImage} alt="" className={styles.bannerImage} />
      <div className={styles.imageShadow}></div>
      <div className={styles.banner_text_wrapper}>
        <div className={classNames(layout.grid, layout.grid_col80)}>
          <div className={classNames(layout.block__inner)}>
            <div className={styles.banner_text}>
              <h1>Revolutionize Your Business With <b>Odoo</b> ERP Solutions</h1>
              <p>
                Seamlessly Integrated Apps To Simplify Your Business Processes!
              </p>
              <Button
                redirect={""}
                text={"Get a Free Consultation"}
                type="primary"
                // onClick={() => setToggle(true)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
