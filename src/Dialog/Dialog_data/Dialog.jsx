import React from 'react';
import p from './Dialog.module.css';
import { NavLink } from "react-router-dom";

const Dialog_item = (props) => {
    let path = 'dialog/' + props.id;
    return <div className={p.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}
const Message_item = (props) => {
    return <div>
    <div className={p.message}> {props.message} </div>
    </div>
}


const Dialog = (props) => {


    return <div className={p.dialog_grid}>
        <div className={p.dialog_background + ' ' + p.dialogsItem}>
            <Dialog_item name={Dialogs_Data[0].name} id={Dialogs_Data[0].id} />
            <Dialog_item name={Dialogs_Data[1].name} id={Dialogs_Data[1].id} />
            <Dialog_item name={Dialogs_Data[2].name} id={Dialogs_Data[2].id} />
            <Dialog_item name={Dialogs_Data[3].name} id={Dialogs_Data[3].id} />
        </div>
        <div className={p.messages_background}>
            <div className={p.messages}>
               <Message_item message={Message_Data[0].message}/>
               <Message_item message={Message_Data[1].message}/>
               <Message_item message={Message_Data[2].message}/>
               <Message_item message={Message_Data[3].message}/>
            </div>
        </div>
    </div>
}

export default Dialog;