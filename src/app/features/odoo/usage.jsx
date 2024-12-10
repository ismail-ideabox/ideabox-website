import React from "react";
import layout from "../../styles/layout.module.css";
import styles from "./odoo.module.css";
import { classNames } from "@/app/utils";
import { image } from "../../../../public/odoo";
import Image from "next/image";

export default function Usage() {
  return (
    <section
      className={classNames(
        layout.grid,
        layout.grid_col80,
        styles.secondary_color_section
      )}
    >
      <div className={layout.block__inner}>
        <div className={styles.section_container}>
          <h4 className="heading">USAGE</h4>
          <h2 className="main-heading">
            Industries We Empower<br/> With Odoo
          </h2>
          <div className={styles.industries_container}>
            <div className={styles.industries_card}>
              <Image
                loading="lazy"
                src={image.manufacturing}
                alt="manufacturing"
              />
              <p>Manufacturing companies</p>
            </div>
            <div className={styles.industries_card}>
              <Image
                loading="lazy"
                src={image.distribution}
                alt="distribution"
              />
              <p>Distribution companies</p>
            </div>
            <div className={styles.industries_card}>
              <Image
                loading="lazy"
                src={image.retailers}
                alt="retailers"
              />
              <p>Retailers</p>
            </div>
            <div className={styles.industries_card}>
              <Image
                loading="lazy"
                src={image.fieldService}
                alt="field service operations"
              />
              <p>field service operations</p>
            </div>
            <div className={styles.industries_card}>
              <Image
                loading="lazy"
                src={image.RAndDCompanies}
                alt="R&D companies"
              />
              <p>R&D companies</p>
            </div>
            <div className={styles.industries_card}>
              <Image
                loading="lazy"
                src={image.serviceCompanies}
                alt="Service companies"
              />
              <p>Service companies</p>
            </div>
            <div className={styles.industries_card}>
              <Image
                loading="lazy"
                src={image.marketing}
                alt="Marketing companies"
              />
              <p>Marketing companies</p>
            </div>
            <div className={styles.industries_card}>
              <Image
                loading="lazy"
                src={image.consultants}
                alt="Consultants & Odoo Partners"
              />
              <p>Consultants & Odoo Partners</p>
            </div>
            <div className={styles.industries_card}>
              <Image
                loading="lazy"
                src={image.itCompanies}
                alt="IT companies with trained developers"
              />
              <p>IT companies with trained developers</p>
            </div>
            <div className={styles.industries_card}>
              <Image
                loading="lazy"
                src={image.accounting}
                alt="Accounting firms"
              />
              <p>Accounting firms</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
