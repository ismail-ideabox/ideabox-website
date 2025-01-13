"use client";
import React, { useState } from "react";
import layout from "../../styles/layout.module.css";
import styles from "./odoo.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faXTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
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
            {/* <li>
              <Link rel="nofollow" href="">
                About Us
              </Link>
            </li> */}
            <li>
              <Link href="/?services=true">Services</Link>
            </li>
            <li>
              <Link href="/our-work">Our Work</Link>
            </li>
            {/* <li>
              <Link rel="nofollow" href="">
                News/Blogs
              </Link>
            </li> */}
            <li>
              <Link href="/odoo">Odoo</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact</Link>
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
            {/* <li>
              <Link
                target="_blank"
                rel="nofollow"
                href="https://twitter.com/IdeaboxPakistan"
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </Link>
            </li> */}
            <li>
              <Link
                target="_blank"
                rel="nofollow"
                href="https://www.facebook.com/profile.php?id=61569658704415"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                rel="nofollow"
                href="https://www.instagram.com/ideabox_technology?igsh=MXZvcHI4anZ4OGg1YQ=="
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </li>

            <li
              style={{ minWidth: "30px " }}
              className={styles.navbarButtonIcon}
            >
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
          <ul className={classNames(mainStyles.menu_nav, styles.menu_nav_odoo)}>
            <li>
              {/* <Link href="" className={classNames(mainStyles.nav_link, styles.nav_link_odoo)}>
                About Us
              </Link> */}
            </li>
            <li>
              <Link
                href={"/?services=true"}
                className={classNames(
                  mainStyles.nav_link,
                  styles.nav_link_odoo
                )}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href={"/odoo"}
                className={classNames(
                  mainStyles.nav_link,
                  styles.nav_link_odoo
                )}
              >
                Odoo
              </Link>
            </li>
            <li>
              <Link
                href="/our-work"
                className={classNames(
                  mainStyles.nav_link,
                  styles.nav_link_odoo
                )}
              >
                Our Work
              </Link>
            </li>
            {/* <li>
              <Link
                href="/news-and-blogs"
                className={classNames(mainStyles.nav_link, styles.nav_link_odoo)}
              >
                News and Blogs
              </Link>
            </li> */}
            <li>
              <Link
                href="/contact-us"
                className={classNames(
                  mainStyles.nav_link,
                  styles.nav_link_odoo
                )}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className={mainStyles.contact_block}>
          <div className={mainStyles.contact_block_social}>
            {/* <Link
              target="_blank"
              rel="nofollow"
              href="https://twitter.com/IdeaboxPakistan"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </Link> */}
            <Link
              target="_blank"
              rel="nofollow"
              href="https://www.facebook.com/profile.php?id=61569658704415"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link
              target="_blank"
              rel="nofollow"
              href="https://www.instagram.com/ideabox_technology?igsh=MXZvcHI4anZ4OGg1YQ=="
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link
              rel="nofollow"
              target="_blank"
              href="https://pk.linkedin.com/company/ideaboxpakistan"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
          </div>
          <div
            className={classNames(
              mainStyles.contact_details,
              styles.contact_detail_odoo_menu
            )}
          >
            <h3>
              <Link href={"mailto:hello@ideabox.technology"}>
                hello@ideabox.technology
              </Link>
            </h3>
            <h3>+92 308 2224604</h3>
          </div>
        </div>
      </div>
    </header>
  );
}
