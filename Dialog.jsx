import React from "react";
import p from './Dialog.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/messages/" + props.id;
    return (<div className={p.dialogsItem + ' ' + p.dialog_background + ' ' + p.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


const Dialogs = (props) => {
    return (
   <div>
   <DI
   </div>
)
}
export default DialogItem;