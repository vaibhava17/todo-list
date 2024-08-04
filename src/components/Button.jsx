import React from "react";
import styles from "./components.module.css";
import clsx from "clsx";

const AppButton = ({ label, onClick, type, className, ...rest }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(styles.btnMain, className)}
      {...rest}
    >
      {label}
    </button>
  );
};

export default AppButton;
