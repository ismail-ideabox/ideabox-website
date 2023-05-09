import React from "react";
import styles from "./getInTouch.module.css";

function TextArea({ placeholder, name, id, value, onChange }) {
  return (
    <textarea
      onChange={onChange}
      value={value}
      className={styles.input_fields}
      name={name}
      id={id}
      placeholder={placeholder}
    ></textarea>
  );
}

export default TextArea;
