import { memo, useState, useEffect, useRef } from "react"
import HooksButton from "./HooksButton"
import style from "../index.css"

export default memo(props => {

    const [renderCount, setRenderCount] = useState(0);
    const count = useRef(0);

    console.log("Render hook button")
    const { text } = props.text;
    return (
        <div>
            <button className={style.button}>{text} {count.current++}</button>
            <span>Memo Hooks</span>
        </div>
    );
});
