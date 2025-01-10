import Image from "next/image";
import React from "react";
import { image } from "../../../../public/odoo";
import layout from "../../styles/layout.module.css";
import styles from "./odoo.module.css";
import { classNames } from "@/app/utils";

export default function Partner() {
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
          <h4 className="heading">PARTNER</h4>
          <div className={styles.partner_header_Content}>
            <h2 className="main-heading">
              Why Choose
              <br /> Ideabox For Odoo?
            </h2>
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

          <div className={styles.partner_container}>
            <p>
              Among the Odoo partners, Ideabox Technology can be positioned as
              one of the best in terms of value and expertise. We have a team of
              certified Odoo professionals who have extensive knowledge in the
              fields of implementation, development, consultancy, migration,
              customizing, and perfecting Odoo ERP app solutions in various
              industries. We differ from many partners in that we pursue a
              client-first strategy, meaning that we begin with the analysis of
              our clientele’s company needs, pain points and address specific
              business challenges.
            </p>
            <div className={styles.partnerImagesGrid}>
              <Image src={image.partner1} alt="partner" />
              <Image src={image.partner2} alt="partner" />
              <Image src={image.partner3} alt="partner" />
              <Image src={image.partner3} alt="partner" />
            </div>
            <p>
              The projects we have completed to date cover areas as wholesale
              and retail, as well as manufacturing, e-commerce, and various
              services, all successfully implementing Odoo modules aimed at
              increasing productivity and automating business processes. What
              differentiates us from the rest is that we do not just think of
              the current need but focus on future possibilities using AI and
              business intelligence with Odoo systems.
              <br />
              <br />
              Ideabox offers a comprehensive approach which involves requirement
              analysis, module installation and customization, users training,
              and customer assistance. We also guarantee smooth implementation
              due to clear and efficient communication, the flexibility in the
              mode of engagement, and delivery within set timelines. In
              addition, given the fast paced environment, we are keen on
              professional growth whereby we are equipped with new possibilities
              in newer versions of Odoo and its functionalities for our clients’
              benefit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
