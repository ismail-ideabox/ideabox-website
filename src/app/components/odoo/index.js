import React, { useState } from "react";
import layout from "../../styles/layout.module.css";
import styles from "./odoo.module.css";
import { classNames } from "@/app/utils";
import Image from "../image";
import { image } from "../../../../public/odoo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function Odoo() {
  const [toggleList, setToggleList] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once when it comes into view
    threshold: 1, // Trigger when 20% of the section is visible
  });
  return (
    <section
      ref={ref}
      className={styles.odoo_partners}
      onClick={() => {
        toggleList ? setToggleList(false) : "";
      }}
    >
      <div className={classNames(layout.grid, layout.grid_col80)}>
        <div className={layout.block__inner}>
          <div className={styles.odoo_content}>
            <div className={styles.odoo}>
              <h2 className="main-heading">Official Partners</h2>

              <p>
                Odoo is a suite of open source business apps that cover all your
                company needs: CRM, eCommerce, accounting, inventory, point of
                sale, project management, etc.
              </p>
            </div>

            {/* <div className={styles.odoo_crm_container}>
              <div className={styles.odoo_crm}>
                <p className={styles.odoo_crm_para}>
                  TECHNICAL & FUNCTIONAL CONSULTANTS OUTSOURCING
                </p>
                <p className={styles.odoo_crm_para}>ODOO CUSTOMIZATION</p>
                <p className={styles.odoo_crm_para}>
                  ODOO CRM & ERP IMPLEMENTATION
                </p>
                <p className={styles.odoo_crm_para}>ODOO INTEGRATION</p>
              </div>
              <div className={styles.odoo_crm}>
                <p className={styles.odoo_crm_para}>
                  INTEGRATION OF OTHER WEB APPLICATION WITH ERP &CRM
                </p>
                <p className={styles.odoo_crm_para}>ODOO CONSULTANCY</p>
                <p className={styles.odoo_crm_para}>ODOO TRAINING & SUPPORT</p>

                <p className={styles.odoo_crm_para}>ERP MIGRATION</p>
              </div>
            </div> */}
          </div>
          <div className={styles.partnership_logo}>
            <Image
              src={image.odooIdeaboxLogo}
              alt={"Ideabox Odoo Partnership "}
            />
          </div>
          <div className={styles.odoo_working_domains}>
            <div>
              <span>Manufacturing companies</span>
            </div>
            <div>
              <span>Distribution companies</span>
            </div>
            <div>
              <span>Retailers</span>
            </div>
            <div>
              <span>field service operations</span>
            </div>
            <div>
              <span>R&D companies</span>
            </div>
            <div>
              <span>Service companies</span>
            </div>
            <div className={styles.third_row}>
              <span>Marketing companies</span>
            </div>
            <div className={styles.third_row}>
              <span>Consultants & Odoo Partners</span>
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
              <p className={styles.odoo_crm_para}>Manufacturing companies</p>
              <p className={styles.odoo_crm_para}>Distribution companie</p>
              <p className={styles.odoo_crm_para}>Retailers</p>

              <p className={styles.odoo_crm_para}>field service operations</p>
              <p className={styles.odoo_crm_para}>R&D companies</p>
              <p className={styles.odoo_crm_para}>Service companies</p>
              <p className={styles.odoo_crm_para}>Marketing companies</p>
              <p className={styles.odoo_crm_para}>
                Consultants & Odoo Partners
              </p>
            </div>
          </div>
          <div className={styles.odoo_counter}>
            <div>
              <span>
                {inView ? (
                  <CountUp
                    start={0}
                    end={3}
                    duration={4}
                    delay={0}
                    suffix="k+"
                  />
                ) : (
                  "0k+"
                )}
              </span>
              <p>EMPLOYES</p>
            </div>
            <div>
              <span>
                {inView ? (
                  <CountUp
                    start={0}
                    end={60}
                    duration={4}
                    delay={0}
                    suffix="%"
                  />
                ) : (
                  "0%"
                )}
              </span>
              <p>YEARLY GROWTH</p>
            </div>
            <div>
              <span>
                {inView ? (
                  <CountUp
                    start={0}
                    end={12}
                    duration={4}
                    delay={0}
                    suffix="M+"
                  />
                ) : (
                  "0M+"
                )}
              </span>
              <p>HAPPY USERS</p>
            </div>
            <div>
              <span>
                {inView ? (
                  <CountUp
                    start={0}
                    end={175}
                    duration={4}
                    delay={0}
                    suffix="+"
                  />
                ) : (
                  "0+"
                )}
              </span>
              <p>COUNTRIES</p>
            </div>
            <div>
              <span>
                {inView ? (
                  <CountUp
                    start={0}
                    end={16}
                    duration={4}
                    delay={0}
                    suffix="K+"
                  />
                ) : (
                  "0K+"
                )}
              </span>
              <p>APPS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Odoo;
