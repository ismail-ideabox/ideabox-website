"use client";
import Button from "@/app/components/button/button";
import React, { useState } from "react";
import { image } from "../../../../public/odoo";
import layout from "../../styles/layout.module.css";
import styles from "./odoo.module.css";
import { classNames } from "@/app/utils";
import Image from "next/image";
import FormModal from "@/app/components/formModal";

export default function ErpBusinessCard() {
  const [toggle, setToggle] = useState(false);

  return (
    <section
      className={classNames(
        layout.grid,
        layout.grid_col80,
        styles.primary_color_section
      )}
    >
      <div className={layout.block__inner}>
        <div className={styles.businessCard_container}>
          <div>
            <h3>Boost Your Business Efficiency with Odoo ERP</h3>
            <p>
              Streamline operations with seamless integration, powerful
              customization, and expert support
            </p>
            <Button
              redirect={""}
              text={"Contact Us Now"}
              type="primary"
              componentType="button"
              onClick={() => setToggle(true)}
            />
          </div>
          <div className={styles.logoImage}>
            <div className={styles.odooWithPartner}>
              <Image src={image.odooLogo} alt="odoo logo" className={styles.mainOdooImg}/>
              <Image
                src={image.silverPartner}
                alt=""
                className={styles.silverPartner}
              />
            </div>
          </div>
        </div>
      </div>
      <FormModal toggle={toggle} setToggle={setToggle} />
    </section>
  );
}
