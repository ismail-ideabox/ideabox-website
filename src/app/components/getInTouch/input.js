import React from "react";
import styles from "./getInTouch.module.css";

function Input({
  type,
  placeholder,
  id,
  name,
  value,
  onChange,
  isError,
  message,
}) {
  return (
    <div className={styles.formItem}>
      <input
        onChange={onChange}
        value={value}
        id={id}
        name={name}
        type={type}
        className={styles.input_fields}
        placeholder={placeholder}
      />
      {isError && <p>{message}</p>}
    </div>
  );
}

export default Input;
