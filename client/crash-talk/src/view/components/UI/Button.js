import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  const { onClick, className, children, disabled, type } = props;
  return (
    <button
      onClick={onClick}
      className={`${classes.button} ${className}`}
      disabled={disabled}
      type={type || "submit"}
    >
      {children}
    </button>
  );
};

export default Button;
