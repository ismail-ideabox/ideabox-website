"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import styles from "./style.module.css";
import { classNames } from "@/app/utils";

export const ScrollToTop = ({ visible, parentRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    if (visible) {
      parentRef.current.scrollTop = 0;
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  useEffect(() => {
    if (visible !== undefined) setIsVisible(visible);
  }, [visible]);

  return (
    <div
      className={classNames(
        styles.scrollup_block,
        isVisible ? styles.opacity100 : styles.opacity0
      )}
    >
      <button
        aria-label="Scroll To Top"
        onClick={scrollToTop}
        className={styles.btn_up}
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </button>
    </div>
  );
};
