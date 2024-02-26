import React from "react";
import styles from "./footer.module.css";
import layout from "../../styles/layout.module.css";
import { classNames } from "@/app/utils";
import Link from "next/link";
import Image from "../image";
import { images } from "../../../../public/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons";
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
                  rel="nofollow"
                  target="_blank"
                  href="https://pk.linkedin.com/company/ideaboxpakistan"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </Link>
                <Link
                  target="_blank"
                  rel="nofollow"
                  href="https://twitter.com/IdeaboxPakistan"
                >
                  {/* <FontAwesomeIcon icon={faTwitter} /> */}
                  <FontAwesomeIcon icon={faXTwitter} />
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
                {/* <li>
                  <Link href="/news-and-blogs" className={""}>
                    News and Blogs
                  </Link>
                </li> */}
                <li>
                  <Link href="/contact-us" className={""}>
                    Contact
                  </Link>
                </li>
                <li>
                  <p style={{ color: "#8a8a8a", fontSize: "14px" }}><strong style={{ color: "#a02021", fontFamily: "Arvo", fontWeight: "400" }}>License No:</strong> 4309264</p>
                  <p style={{
                    color: "#8a8a8a",
                    fontSize: "14px"
                  }}><strong style={{ color: "#a02021", fontFamily: "Arvo", fontWeight: "400" }}>Tax No:</strong> 104172555500003</p>
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
                    <h5>UAE</h5>
                  </div>
                  <div className={styles.country_address}>
                    <p>
                      Business Center, Sharjah Publishing City, Sharjah, United
                      Arab Emirates
                    </p>
                    <Link href={"mailto:hello@ideabox.technology"}>
                      <span>hello@ideabox.technology</span>
                    </Link>
                  </div>
                  <div className={styles.view_direction}>
                    <Button
                      target={"_blank"}
                      redirect={"https://goo.gl/maps/4cmuMo4TU8m3VKtq8"}
                      type="primary"
                      text={"view direction"}
                    />
                  </div>
                </div>
                <div className={styles.address_direction}>
                  <div className={styles.direction_country}>
                    <h5>PAKISTAN</h5>
                  </div>
                  <div className={styles.country_address}>
                    <p>
                      2nd floor, Plot 1C Khayaban-e-Saadi, Phase 7 Defence
                      Housing Authority, Karachi, Karachi City, Sindh 75500
                    </p>
                    <Link href={"mailto:hello@ideabox.technology"}>
                      <span>hello@ideabox.technology</span>
                    </Link>
                  </div>
                  <div className={styles.view_direction}>
                    <Button
                      target={"_blank"}
                      redirect={"https://goo.gl/maps/Yf9eiWA64m6bND796"}
                      type="primary"
                      text={"view direction"}
                    />
                  </div>
                </div>

                {/*
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
                </div> */}
              </div>
            </div>
            {/* <div className={styles.footer_map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.959398979597!2d67.07270061566327!3d24.831062052548955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33c53f5ced18b%3A0xb527f2354c7936a6!2sIdeabox%20Pakistan!5e0!3m2!1sen!2s!4v1680993933348!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div> */}
          </div>
        </div>
      </div>
      <div className={styles.footer_copywrite}>
        <p>
          All Rights Reserved ® <span>{new Date().getFullYear()}</span> |
          Ideabox
        </p>
      </div>
    </section >
  );
}

export default Footer;
