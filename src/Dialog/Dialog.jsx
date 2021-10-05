import React from 'react';
import p from './Dialog.module.css';
import {NavLink} from "react-router-dom";

const Dialog_item = (props) => {
    return <div className={p.dialog}>
        <NavLink to={'dialog/' + props.id}>{props.name}</NavLink>
    </div>
}

const Dialog = (props) => {
    return <div className={p.dialog_grid}>
        <div className={p.dialog_background + ' ' + p.dialogsItem}>
           <div>
            <Dialog_item name='Andrey' id='1'/>

        </div>
        <div>
            <Dialog_item name='Viktor' id='2'/>

        </div>
        <div>
            <Dialog_item name='Natali' id='3'/>

        </div>
        <div>
            <Dialog_item name='Joe' id='4'/>

        </div>

    </div>
    <div className={p.messages_background}>
        <div className={p.message + ' ' + p.messages}>
            <div>
                Hello
            </div>
            <div>
                Hello
            </div>
            <div>
                Hello
            </div>
            <div>
                Hello
            </div>
        </div>
    </div>


</div>
}

export default Dialog;