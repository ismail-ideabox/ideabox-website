import React, { useState } from "react";
import layout from "../../styles/layout.module.css";
import Image from "next/image";
import styles from "./odoo.module.css";
import { image } from "../../../../public/odoo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { classNames } from "@/app/utils";

function Odoo() {
  const [toggleList, setToggleList] = useState(false);
  return (
    <section className={styles.odoo_partners}>
      <div className={classNames(layout.grid, layout.grid_col80)}>
        <div className={layout.block__inner}>
          <div
            className={styles.odoo_content}
            onClick={() => {
              toggleList ? setToggleList(false) : "";
            }}
          >
            <div className={styles.odoo}>
              <h2 className="main-heading">Official Partners</h2>
              <Image src={image.odoo} alt="Odoo" />
              <p>
                Odoo is a suite of open source business apps that cover all your
                company needs: CRM, eCommerce, accounting, inventory, point of
                sale, project management, etc.
              </p>
            </div>
            <div className={styles.odoo_crm_container}>
              <div className={styles.odoo_crm}>
                <p className={styles.odoo_crm_para}>
                  ODOO CRM & ERP IMPLEMENTATION
                </p>
                <p className={styles.odoo_crm_para}>ERP MIGRATION</p>
                <p className={styles.odoo_crm_para}>ODOO CUSTOMIZATION</p>
                <p className={styles.odoo_crm_para}>ODOO CONSULTANCY</p>
              </div>
              <div className={styles.odoo_crm}>
                <p className={styles.odoo_crm_para}>ODOO TRAINING & SUPPORT</p>
                <p className={styles.odoo_crm_para}>ODOO INTEGRATION</p>
                <p className={styles.odoo_crm_para}>
                  INTEGRATION OF OTHER WEB APPLICATION WITH ERP &CRM
                </p>
                <p className={styles.odoo_crm_para}>
                  TECHNICAL & FUNCTIONAL CONSULTANTS OUTSOURCING.
                </p>
              </div>
            </div>
            <div
              className={
                toggleList
                  ? classNames(
                      styles.odoo_crm_container_mob,
                      styles.odoo_crm_container_mob_active
                    )
                  : styles.odoo_crm_container_mob
              }
            >
              <p
                className={styles.odoo_crm_para}
                onClick={() => setToggleList(!toggleList)}
              >
                ODOO CRM & ERP IMPLEMENTATION
                <FontAwesomeIcon icon={faCircleChevronDown} />
              </p>
              <div
                className={
                  toggleList
                    ? classNames(
                        styles.odoo_crm_container_mob_body,
                        styles.odoo_crm_container_mob_body_active
                      )
                    : styles.odoo_crm_container_mob_body
                }
              >
                <p className={styles.odoo_crm_para}>ERP MIGRATION</p>
                <p className={styles.odoo_crm_para}>
                  INTEGRATION OF OTHER WEB APPLICATION WITH ERP & CRM
                </p>
                <p className={styles.odoo_crm_para}>ODOO CUSTOMIZATION</p>
                <p className={styles.odoo_crm_para}>ODOO CONSULTANCY</p>

                <p className={styles.odoo_crm_para}>ODOO TRAINING & SUPPORT</p>
                <p className={styles.odoo_crm_para}>ODOO INTEGRATION</p>
                <p className={styles.odoo_crm_para}>
                  INTEGRATION OF OTHER WEB APPLICATION WITH ERP &CRM
                </p>
                <p className={styles.odoo_crm_para}>
                  TECHNICAL & FUNCTIONAL CONSULTANTS OUTSOURCING.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.odoo_stats_container}>
            <div className={styles.odoo_stats_image}>
              <Image
                className={styles.odoocomponent}
                src={image.odoocomponent}
                alt="Odoo Components"
              />
              {/* <div className={styles.overlay}>
                <Image
                  className={styles.zoom}
                  src={image.zoom1}
                  alt="Odoo Zoom"
                />
              </div> */}
            </div>
            <div className={styles.odoo_stats}>
              <div className={styles.odoo_stats_content_1}>
                <h2 className={styles.purple_h2}>3K+</h2>
                <p>EMPLOYEES</p>
              </div>
              <div className={styles.odoo_stats_content}>
                <h2 className={styles.green_h2}>80%</h2>
                <p>YEARLY GROWTH</p>
              </div>
              <div className={styles.odoo_stats_content_2}>
                <h2 className={styles.purple_h2}>8M</h2>
                <p>HAPPY USERS</p>
              </div>
              <div className={styles.odoo_stats_content}>
                <h2 className={styles.green_h2}>175+</h2>
                <p>COUNTRIES</p>
              </div>
              <div className={styles.odoo_stats_content_3}>
                <h2 className={styles.purple_h2}>26K</h2>
                <p>APPS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Odoo;
