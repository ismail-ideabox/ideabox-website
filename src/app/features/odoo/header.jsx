"use client";
import React, { useState } from "react";
import layout from "../../styles/layout.module.css";
import styles from "./odoo.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { classNames } from "@/app/utils";
import mainStyles from "../../components/header/header.module.css";

export default function OdooHeader() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggle = () => setToggleMenu(!toggleMenu);
  return (
    <header
      className={classNames(styles.header, layout.grid, layout.grid_col80)}
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
            <li style={{ minWidth: "30px " }} >
              <ul
                className={
                  toggleMenu
                    ? classNames(
                        mainStyles.menu_btn,
                        mainStyles.menu_btn_active,
                        mainStyles.activeCloseBtn
                      )
                    : classNames(mainStyles.menu_btn)
                }
                onClick={handleToggle}
              >
                <li className="nav-bar"></li>
                <li className="nav-bar"></li>
                <li className="nav-bar"></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className={
          toggleMenu
            ? classNames(mainStyles.menu_active, mainStyles.menu, "menu_slider")
            : classNames(mainStyles.menu, "menu_slider")
        }
      >
        <div>
          <ul className={mainStyles.menu_nav}>
            <li>
              {/* <Link href="" className={classNames(mainStyles.nav_link, "")}>
                About Us
              </Link> */}
            </li>
            <li>
              <Link
                href={"/?services=true"}
                className={classNames(mainStyles.nav_link, "")}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/our-work"
                className={classNames(mainStyles.nav_link, "")}
              >
                Our Work
              </Link>
            </li>
            {/* <li>
              <Link
                href="/news-and-blogs"
                className={classNames(mainStyles.nav_link, "")}
              >
                News and Blogs
              </Link>
            </li> */}
            <li>
              <Link
                href="/contact-us"
                className={classNames(mainStyles.nav_link, "")}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className={mainStyles.contact_block}>
          <div className={mainStyles.contact_block_social}>
            <Link
              target="_blank"
              rel="nofollow"
              href="https://twitter.com/IdeaboxPakistan"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </Link>
            <Link
              rel="nofollow"
              target="_blank"
              href="https://pk.linkedin.com/company/ideaboxpakistan"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
          </div>
          <div className={mainStyles.contact_details}>
            <h3>
              <Link href={"mailto:hello@ideabox.technology"}>
                hello@ideabox.technology
              </Link>
            </h3>
            <h3>+92 21 37234945</h3>
          </div>
        </div>
      </div>
    </header>
  );
}
