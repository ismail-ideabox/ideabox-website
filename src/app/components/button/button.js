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
  componentType,
  type = "primary",
  ...rest
}) {
  return (
    <>
      {componentType === "button" ? (
        <button
          {...rest}
          onClick={!isLoading && onClick}
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
        </button>
      ) : (
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
      )}
    </>
  );
}

export default Button;
