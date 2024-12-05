import React from "react";
import layout from "../../styles/layout.module.css";
import styles from "./odoo.module.css";
import { classNames } from "@/app/utils";
import Image from "next/image";
import { image } from "../../../../public/odoo";
import Button from "@/app/components/button/button";

export default function Pricing() {
  return (
    <section
      className={classNames(
        layout.grid,
        layout.grid_col80,
        styles.primary_color_section
      )}
    >
      <div className={layout.block__inner}>
        <div className={styles.section_container}>
          <div className={styles.pricing_container}>
            <div className={styles.pricing_text}>
            <h4 className="heading">PRICING</h4>
              <p>
                Odoo pricing plans are based on the number of users linked with
                countries and Odoo apps selected for business needs. SaaS
                standard pricing for Odoo software for business management
                starts at as low as $12 per month for 1 user with new customer
                discounts. Functional business applications comprising the ERP
                and CRM and Partner implementation services cost extra.{" "}
              </p>
              <Button
                redirect={""}
                text={"GET STARTED NOW!"}
                type="primary"
                // onClick={() => setToggle(true)}
              />
            </div>

            <div className={styles.pricingImageBlock}>
              <Image src={image.usa} alt="usa flag" className={styles.flag}/>  
              <Image src={image.pricing} alt="pricing" className={styles.pricingImage}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
