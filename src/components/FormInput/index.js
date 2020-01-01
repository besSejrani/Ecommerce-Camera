import React from "react";
import "./formInput.scss";

const formInput = ({ changeInput, label, ...otherProps }) => (
  <div className="group">
    <input
      type="text"
      className="form-input"
      onChange={changeInput}
      {...otherProps}
    />
    {label ? (
      <label
        className={`${
          otherProps.value.lentgh ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default formInput;
