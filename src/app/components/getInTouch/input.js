import React from "react";
import styles from "./getInTouch.module.css";

function Input({ type, placeholder, id, name, value, onChange }) {
  return (
    <input
      onChange={onChange}
      value={value}
      id={id}
      name={name}
      type={type}
      className={styles.input_fields}
      placeholder={placeholder}
    />
  );
}

export default Input;
