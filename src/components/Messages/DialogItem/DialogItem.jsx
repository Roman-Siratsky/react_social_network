import React from "react";
import p from "../Messages.module.css";
import { NavLink } from 'react-router-dom'
// import Post from './Messages/Messages'

const DialogItem = (props) => {
    return (
        <NavLink to={'/messages/' + props.id} className={p.dialog} activeClassName={p.active}>{ props.name }</NavLink>
    )
}


export default DialogItem;
