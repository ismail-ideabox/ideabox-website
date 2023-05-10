import React from "react";
import styles from "./button.module.css";
import Link from "next/link";
import { classNames } from "@/app/utils";
function Button({
  target,
  redirect,
  text,
  onClick,
  isLoading,
  type = "primary",
  ...rest
}) {
  return (
    <Link
      target={target}
      isLoading={isLoading}
      {...rest}
      onClick={onClick}
      href={redirect}
      className={
        type === "primary"
          ? classNames(styles.butn, styles.butn__new, styles.primary)
          : classNames(styles.butn, styles.butn__new, styles.secondary)
      }
    >
      <span>{text}</span>
    </Link>
  );
}

export default Button;
