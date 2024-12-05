import React from "react";
import layout from "../../styles/layout.module.css";
import styles from "./odoo.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { classNames } from "@/app/utils";

export default function OdooHeader() {
  return (
    <header
      className={classNames(
        styles.header,
        layout.grid,
        layout.grid_col80,
      )}
    >
      <div className={classNames(layout.block__inner, styles.navbar_container)}>
        <Link href="/" className={classNames(styles.logo, "")}>
          {" "}
          ideabox
        </Link>
        <nav className={classNames(styles.navbar, "")}>
          <ul className={styles.navLinks}>
            <li>
              <Link rel="nofollow" href="">
                About Us
              </Link>
            </li>
            <li>
              <Link rel="nofollow" href="">
                Services
              </Link>
            </li>
            <li>
              <Link rel="nofollow" href="">
                Our Work
              </Link>
            </li>
            <li>
              <Link rel="nofollow" href="">
                News/Blogs
              </Link>
            </li>
            <li>
              <Link rel="nofollow" href="">
                Oddo
              </Link>
            </li>
            <li>
              <Link rel="nofollow" href="">
                Contact
              </Link>
            </li>
          </ul>
          <ul className={styles.social_icons}>
            <li>
              <Link
                rel="nofollow"
                target="_blank"
                href="https://pk.linkedin.com/company/ideaboxpakistan"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                rel="nofollow"
                href="https://twitter.com/IdeaboxPakistan"
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
