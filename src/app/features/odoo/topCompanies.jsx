import React from "react";
import layout from "../../styles/layout.module.css";
import styles from "./odoo.module.css";
import { classNames } from "@/app/utils";
import Image from "next/image";
import { image } from "../../../../public/odoo";
import { images } from "../../../../public/ideabox";


export default function TopCompanies() {
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
          <h4 className="heading">GLOBAL IMPLEMENTATIONS</h4>
          <h2 className="main-heading">
            Top Companies
            <br />
            Using ODOO
          </h2>
          <div className={styles.company_logo_container}>
            <div className={styles.company_images}>
              <Image
                className={styles.company_images_img}
                alt="Node Js technology"
                src={images.node}
              />
            </div>
            <div className={styles.company_images}>
              <Image
                className={styles.company_images_img}
                alt="Dot Net technology"
                src={images.dotnet}
              />
            </div>
            <div className={styles.company_images}>
              <Image
                className={styles.company_images_img}
                alt="Php technology"
                src={images.php}
              />
            </div>
            <div className={styles.company_images}>
              <Image
                className={styles.company_images_img}
                alt="Php technology"
                src={images.php}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
