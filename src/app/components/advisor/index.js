import React from "react";
import styles from "./advisor.module.css";
import layout from "../../styles/layout.module.css";
import { classNames } from "@/app/utils";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { images } from "../../../../public/advisor";

function Advisor() {
  return (
    <section
      className={classNames(
        styles.advisor_section,
        layout.grid,
        layout.grid_col80
      )}
    >
      <div className={layout.block__inner}>
        <div className={styles.advisor_container}>
          <div className={styles.advisor_board}>
            <h3>ADVISOR BOARD</h3>
          </div>
          <div className={styles.advisor_profile_container}>
            <div className={styles.advisor_profile}>
              <div className={styles.advisor_image}>
                <Image src={images.omer} alt="Advisor Image" />
                <div className={styles.advisor_linkedin}>
                  <Link href="" className={styles.linkedin_icon}>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </Link>
                </div>
              </div>
              <div className={styles.advisor_name}>
                <h4>Omer Sajid</h4>
              </div>
              <div className={styles.advisor_desig}>
                <p>Financial Advisor</p>
              </div>
            </div>
            <div className={styles.advisor_profile}>
              <div className={styles.advisor_image}>
                <Image src={images.syed} alt="Advisor Image" />
                <div className={styles.advisor_linkedin}>
                  <Link href="" className={styles.linkedin_icon}>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </Link>
                </div>
              </div>
              <div className={styles.advisor_name}>
                <h4>Syed Amir</h4>
              </div>
              <div className={styles.advisor_desig}>
                <p>Technology Advisor</p>
              </div>
            </div>
            <div className={styles.advisor_profile}>
              <div className={styles.advisor_image}>
                <Image src={images.umair} alt="Advisor Image" />
                <div className={styles.advisor_linkedin}>
                  <Link href="" className={styles.linkedin_icon}>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </Link>
                </div>
              </div>
              <div className={styles.advisor_name}>
                <h4>Umair Vadria</h4>
              </div>
              <div className={styles.advisor_desig}>
                <p>Legal Advisor</p>
              </div>
            </div>
            <div className={styles.advisor_profile}>
              <div className={styles.advisor_image}>
                <Image src={images.ayesha} alt="Advisor Image" />
                <div className={styles.advisor_linkedin}>
                  <Link href="" className={styles.linkedin_icon}>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </Link>
                </div>
              </div>
              <div className={styles.advisor_name}>
                <h4>Ayesha Eirabi</h4>
              </div>
              <div className={styles.advisor_desig}>
                <p>Marketing & Communications Advisor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advisor;
