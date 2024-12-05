import React from "react";
import layout from "../../styles/layout.module.css";
import styles from "./odoo.module.css";
import { classNames } from "@/app/utils";
import Image from "next/image";
import { interactiveFeaturesData } from "@/app/utils/data";

export default function InteractiveFeatures() {
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
          <h4 className="heading">INTERACTIVE FEATURES</h4>
          <h2 className="main-heading">
            ODOO Major
            <br />
            Modules & Features
          </h2>
          <div className={styles.interactive_container}>
            {interactiveFeaturesData.map((item, index) => (
              <div className={styles.odooAppsCard} key={index}>
                <Image src={item.image} alt="" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
