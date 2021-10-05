import React from 'react';
import p from './Dialog.module.css';
import {NavLink} from "react-router-dom";


const Dialog = () => {
    return <div className={p.dialog_grid}>
        <div className={p.dialogsItem + ' ' + p.dialog_background + ' ' + p.dialog}>
            <div>
                <NavLink to="/messages/1">
                    Andrey
                </NavLink>
            </div>
            <div>
                <NavLink to="/messages/2">
                    Joe
                </NavLink>
            </div>
            <div>
                <NavLink to="/messages/3">
                    Viktor
                </NavLink>
            </div>
            <div>
                <NavLink to="/messages/4">
                    Bred
                </NavLink>
            </div>
        </div>
        <div className={p.messages_background + ' ' + p.messages + ' ' + p.message}>
            <div> hi</div>
            <div> hi</div>
            <div> hi</div>
            <div> hi</div>
        </div>
    </div>
}

export default Dialog;