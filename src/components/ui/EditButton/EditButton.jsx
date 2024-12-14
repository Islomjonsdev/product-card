import React from 'react';
import { MdOutlineEdit } from "react-icons/md";
import style from "./EditButton.module.scss"

const EditButton = ({title, ...props}) => {
  return (
    <div {...props}>
        <button className={style.edit_button}><MdOutlineEdit />{title}</button>
    </div>
  )
}

export default EditButton