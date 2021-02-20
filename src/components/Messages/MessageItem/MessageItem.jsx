import React from "react";
import p from "../Messages.module.css";
// import { NavLink } from 'react-router-dom'


const MessageItem = (props) => {
    return (
        <div className={p.message}>{props.message}</div>
    )
}

export default MessageItem;