import "./Button.scss"
import React from 'react';
import { IoMdAdd } from "react-icons/io";

const Button = ({title, ...props}) => {
  return (
    <div {...props}>
        <button className="create_btn"><IoMdAdd /> {title}</button>
    </div>
  )
}

export default Button