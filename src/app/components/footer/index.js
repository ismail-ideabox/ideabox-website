import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";
import layout from "../../styles/layout.module.css";
import { images } from "../../../../public/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { classNames } from "@/app/utils";
import Button from "../button/button";

function Footer() {
  return (
    <section className={styles.footer_section}>
      <div className={classNames(layout.grid, layout.grid_col80)}>
        <div className={layout.block__inner}>
          <div className={styles.footer_container}>
            <div className={styles.footer_ideabox}>
              <div className={styles.ideabox_image}>
                <Image src={images.ideabox} alt="IdeaBox Logo" />
              </div>
              <div className={styles.ideabox_description}>
                <p>
                  At Ideabox, we don’t just talk about integrity, we demonstrate
                  it. Honoring commitments, whether towards our employees or our
                  clients, is something we hold in very high regard.
                </p>
              </div>
              <div className={styles.ideabox_social}>
                <Link
                  target="_blank"
                  href="https://pk.linkedin.com/company/ideaboxpakistan"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </Link>
                <Link href="">
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </div>
            </div>
            <div className={styles.footer_navbar}>
              <ul>
                <li>
                  <Link href={"/?services=true"} className={""}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/our-work" className={""}>
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link href="/news-and-blogs" className={""}>
                    News and Blogs
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className={""}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.footer_address}>
              <div className={styles.address_heading}>
                <p className={""}>Get In Touch:</p>
              </div>
              <div className={styles.address_direction_container}>
                <div className={styles.address_direction}>
                  <div className={styles.direction_country}>
                    <h5>PAKISTAN</h5>
                  </div>
                  <div className={styles.country_address}>
                    <p>
                      2nd floor, Plot 1C Khayaban-e-Saadi, Phase 7 Defence
                      Housing Authority, Karachi, Karachi City, Sindh 75500
                    </p>
                  </div>
                  <div className={styles.view_direction}>
                    <Button
                      redirect={""}
                      type="primary"
                      text={"view direction"}
                    />
                  </div>
                </div>
                <div className={styles.address_direction}>
                  <div className={styles.direction_country}>
                    <h5>UK</h5>
                  </div>
                  <div className={styles.country_address}>
                    <p>
                      2nd floor, Plot 1C Khayaban-e-Saadi, Phase 7 Defence
                      Housing Authority, Karachi, Karachi City, Sindh 75500
                    </p>
                  </div>
                  <div className={styles.view_direction}>
                    <Button
                      redirect={""}
                      type="primary"
                      text={"view direction"}
                    />
                  </div>
                </div>
                <div className={styles.address_direction}>
                  <div className={styles.direction_country}>
                    <h5>USA</h5>
                  </div>
                  <div className={styles.country_address}>
                    <p>
                      2nd floor, Plot 1C Khayaban-e-Saadi, Phase 7 Defence
                      Housing Authority, Karachi, Karachi City, Sindh 75500
                    </p>
                  </div>
                  <div className={styles.view_direction}>
                    <Button
                      redirect={""}
                      type="primary"
                      text={"view direction"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_copywrite}>
        <p>
          All Rights Reserved ® <span>{new Date().getFullYear()}</span> |
          Ideabox
        </p>
      </div>
    </section>
  );
}

export default Footer;
