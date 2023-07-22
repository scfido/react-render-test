import { memo, useState, useEffect, useRef } from "react"
import style from "../index.css"

export default (props)=>{
  const count = useRef(0);
  console.log("Render button")
  const { text, requestText } = props;

  const buttonText = text ?? requestText?.() ?? "";
  return (
    <div>
      <button className={style.button}>{buttonText} {count.current++}</button>
      <span>button</span>
    </div>
  );
}
