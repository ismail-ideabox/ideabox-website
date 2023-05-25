import React from "react";
import styles from "./button.module.css";
import { classNames } from "@/app/utils";
import Link from "next/link";
function Button({
  target,
  redirect,
  text,
  onClick,
  isLoading,
  loadingText,
  type = "primary",
  ...rest
}) {
  return (
    <Link
      target={target}
      {...rest}
      onClick={!isLoading && onClick}
      href={redirect}
      className={
        type === "primary"
          ? classNames(
              styles.butn,
              styles.butn__new,
              styles.primary,
              isLoading && styles.btn__loading
            )
          : classNames(
              styles.butn,
              styles.butn__new,
              styles.secondary,
              isLoading && styles.btn__loading
            )
      }
    >
      {isLoading ? loadingText : <span>{text}</span>}
    </Link>
  );
}

export default Button;
