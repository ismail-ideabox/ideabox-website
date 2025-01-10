"use client";
import React, { useState } from "react";
import layout from "../../styles/layout.module.css";
import styles from "./odoo.module.css";
import Image from "next/image";
import { image } from "../../../../public/odoo";
import { classNames } from "@/app/utils";
import Button from "@/app/components/button/button";
import FormModal from "@/app/components/formModal";

export default function OdooBanner() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={styles.banner_container}>
      <div className={styles.bannerImage}>
        <Image src={image.bannerImage} alt="odoo banner" />
        <div className={styles.imageShadow}></div>
      </div>

      <div className={styles.banner_text_wrapper}>
        <div className={classNames(layout.grid, layout.grid_col80)}>
          <div className={classNames(layout.block__inner)}>
            <div className={styles.banner_text}>
              <h1>
                Revolutionize Your Business With <b>Odoo</b> ERP Solutions
              </h1>
              <p>
                Seamlessly Integrated Apps To Simplify Your Business Processes!
              </p>

              <Button
                redirect={""}
                text={"Get a Free Consultation"}
                type="primary"
                onClick={() => setToggle(true)}
              />

              <div className={styles.logoImage}>
                <div className={styles.odooWithPartner}>
                  <Image
                    src={image.odooLogo}
                    alt="odoo logo"
                    className={styles.mainOdooImg}
                  />
                  <Image
                    src={image.silverPartner}
                    alt=""
                    className={styles.silverPartner}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FormModal toggle={toggle} setToggle={setToggle} />
    </div>
  );
}
