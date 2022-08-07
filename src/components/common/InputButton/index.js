import React from "react";
import "./styles.css";
const InputAtom = ({
  label,
  value,
  placeholder,
  handleInput,
  type,
  name,
  id,
  required,
}) => {
  return (
    <div className="input-wrap">
      <label htmlFor={id} className="input-label">
        {label}
      </label>
      <input
        type={type}
        id={id}
        required={required}
        className="input"
        placeholder={placeholder}
        name={name}
        onChange={handleInput}
        value={value}
      />
      <span className="input-grow"></span>
    </div>
  );
};

export default InputAtom;
