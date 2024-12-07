import { classNames } from "@/app/utils";
import React from "react";
import layout from "../../styles/layout.module.css";
import styles from "./odoo.module.css";
import Link from "next/link";
import { image } from "../../../../public/odoo";
import Image from "next/image";

export default function Overview() {
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
          <h4 className="heading">OVERVIEW</h4>
          <h2 className="main-heading">What Is Odoo?</h2>
          <div className={styles.video_container}>
            <p>
              Odoo ERP system is enterprise resource planning software used
              company-wide for the management of business processes. Odoo
              provides seamlessly integrated functional business apps called
              Odoo apps that form an ERP solution when combined. Open-source
              software, Odoo, is available with SaaS subscription pricing as the
              Enterprise edition.
              <br />
              <br /> Odoo Enterprise edition is desktop or cloud-hosted Odoo
              Online, available anywhere and from any device. Mobile device
              operating systems include the Apple iOS and Google Android.
            </p>
            <div className={styles.video}>
              <Image
                src={image.ideaboxLineLogo}
                className={styles.ideaboxLineLogo}
              />
              <video autoPlay muted>
                <source src="./odoo/overviewVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <p className={styles.linksParagraph}>
            Based on our Odoo review, Odoo is a reasonably good ERP Solution For
            Small Businesses and some mid-sized companies that you should
            consider in your software evaluation. Odoo ERP can easily compete
            with pricey high-end systems like{" "}
            <Link href={"https://www.sap.com"} target="_blank">
              SAP
            </Link>{" "}
            or
            <Link href={"https://www.oracle.com/erp/"} target="_blank">
              {" "}
              Oracle ERP.
            </Link>{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
