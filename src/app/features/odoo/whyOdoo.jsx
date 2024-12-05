import React from "react";
import layout from "../../styles/layout.module.css";
import styles from "./odoo.module.css";
import { classNames } from "@/app/utils";
import Image from "next/image";
import { image } from "../../../../public/odoo";
import ComparisonCard from "@/app/components/comparisonCard";

export default function WhyOdoo() {
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
          {/* <h4 className="heading">WHY ODOO?</h4> */}
          <h2 className="main-heading">
            ODOO Comparison With
            <br />
            Other Leading ERP Solutions
          </h2>
          <ComparisonCard/>
          {/* <div className={styles.erp_icons_container}>
            <div className={styles.erp_icons}>
              <div
                className={classNames(styles.circle_color, styles.bg_color_1)}
              ></div>
              <Image src={image.sap} alt="sap" className={styles.sapImg} />
            </div>
            <div className={styles.erp_icons}>
              <div
                className={classNames(styles.circle_color, styles.bg_color_2)}
              ></div>
              <Image
                src={image.netsuit}
                alt="netsuit"
                className={styles.netsuitImg}
              />
            </div>
            <div className={styles.erp_icons}>
              <div
                className={classNames(styles.circle_color, styles.bg_color_3)}
              ></div>
              <Image
                src={image.dynamaic}
                alt="dynamic365"
                className={styles.dynamicImg}
              />
            </div>
            <div className={styles.erp_icons}>
              <div
                className={classNames(styles.circle_color, styles.bg_color_4)}
              ></div>
              <Image
                src={image.odooLogo}
                alt="odoo"
                className={styles.odooImg}
              />
            </div>
          </div>
          <div className={styles.graph_container}>
            <Image src={image.graph} />
            <h2 className={styles.vertical_title}>RATINGS (1 TO 4)</h2>
          </div> */}
        </div>
      </div>
    </section>
  );
}
