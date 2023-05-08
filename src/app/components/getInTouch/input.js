import React from "react";
import styles from "./getInTouch.module.css";

function Input({ input_type, placeholder, id, name }) {
  return (
    <input
      id={id}
      name={name}
      type={input_type}
      className={styles.input_fields}
      placeholder={placeholder}
    />
  );
}

export default Input;
