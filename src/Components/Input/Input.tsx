import * as React from "react";

import "./input.scss"

interface InputProps {
 placeholder?: string;
 onChange: () => void;
 label?: string;
 htmlFor?: string;
 labelClassName?: string;
 inputClassName?: string;
}

const Input = ({ placeholder, onChange, label, htmlFor, labelClassName, inputClassName }: InputProps) => {
 return (
   <label htmlFor={htmlFor} className={labelClassName}>
    {label}
    <input onChange={onChange} className={inputClassName} placeholder={placeholder} />
   </label>
 );
};

Input.defaultProps = {
  labelClassName: "label",
  inputClassName: "input"
}

export default Input;
