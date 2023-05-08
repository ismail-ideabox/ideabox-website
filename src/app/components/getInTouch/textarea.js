import React from "react";
import styles from "./getInTouch.module.css";

function TextArea({ placeholder, name, id }) {
  return (
    <textarea
      className={styles.input_fields}
      name={name}
      id={id}
      placeholder={placeholder}
    ></textarea>
  );
}

export default TextArea;
