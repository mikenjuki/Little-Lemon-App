import React from "react";

const Button = ({ styles, children }) => {
  return (
    <button
      type="button"
      className={`btn btn-primary shadow-lg hover:-translate-y-0.5 transform transition ${styles}`}
    >
      {children}
    </button>
  );
};

export default Button;
