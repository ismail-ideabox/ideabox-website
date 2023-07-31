"use client";

import Link from "next/link";
import styles from "./header.module.css";
import layout from "../../styles/layout.module.css";
import { classNames, isSticky } from "@/app/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useRouter, useSearchParams } from "next/navigation";

function Header({ innerPage, headerVisible, onMenuToggle }) {
  const childRef = useRef(null);
  const router = useRouter();
  const isHomePage = router.usePathname === "/";
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggle = () => setToggleMenu(!toggleMenu);
  const isSmallScreen = useMediaQuery({ query: "(min-width: 800px)" });
  const searchParams = useSearchParams();
  useEffect(() => {
    if (!headerVisible) {
      window.addEventListener("scroll", isSticky);
      return () => {
        window.removeEventListener("scroll", isSticky);
      };
    }
  }, []);

  useEffect(() => {
    if (!isSmallScreen) {
      const header = document.querySelector(".headerWrapper");
      headerVisible
        ? header.classList.add("is-sticky")
        : header.classList.remove("is-sticky");
    }
  }, [headerVisible]);

  useEffect(() => {
    setToggleMenu(false);
  }, [searchParams]);
  useEffect(() => {
    if (onMenuToggle) {
      onMenuToggle(toggleMenu);
    }
  }, [toggleMenu]);

  useEffect(() => {
   
    if (toggleMenu) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";

    } else if(!isSmallScreen && toggleMenu) {
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    } else {
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    }
    
  }, [toggleMenu]);

  return (
    <>
      {/* <Head>
        <link rel="stylesheet" href="./header.module.css" />
      </Head> */}
      <header
        className={classNames(
          styles.header,
          layout.grid,
          layout.grid_col80,
          "headerWrapper"
        )}
      >
        <div className={classNames(layout.block__inner, styles.navbar)}>
          <Link href="/" className={classNames(styles.logo, "")}>
            {" "}
            ideabox
          </Link>
          <nav>
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
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </li>
              <li style={{ minWidth: "30px " }}>
                <ul
                  className={
                    toggleMenu
                      ? classNames(
                          styles.menu_btn,
                          styles.menu_btn_active,
                          styles.activeCloseBtn,
                          innerPage && styles.menu_btn_white
                        )
                      : classNames(
                          styles.menu_btn,
                          innerPage && styles.menu_btn_white
                        )
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
              ? classNames(styles.menu_active, styles.menu, "menu_slider")
              : classNames(styles.menu, "menu_slider")
          }
        >
          <div>
            <ul className={styles.menu_nav}>
              <li>
                {/* <Link href="" className={classNames(styles.nav_link, "")}>
                About Us
              </Link> */}
              </li>
              <li>
                <Link
                  href={"/?services=true"}
                  className={classNames(styles.nav_link, "")}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/our-work"
                  className={classNames(styles.nav_link, "")}
                >
                  Our Work
                </Link>
              </li>
              {/* <li>
              <Link
                href="/news-and-blogs"
                className={classNames(styles.nav_link, "")}
              >
                News and Blogs
              </Link>
            </li> */}
              <li>
                <Link
                  href="/contact-us"
                  className={classNames(styles.nav_link, "")}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.contact_block}>
            <div className={styles.contact_block_social}>
              <Link
                target="_blank"
                rel="nofollow"
                href="https://twitter.com/IdeaboxPakistan"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
              <Link
                rel="nofollow"
                target="_blank"
                href="https://pk.linkedin.com/company/ideaboxpakistan"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </Link>
            </div>
            <div className={styles.contact_details}>
              <h3>
                <Link href={"mailto:info@ideabox.pk"}>hello@ideabox.pk</Link>
              </h3>
              <h3>+92 21 37234945</h3>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
