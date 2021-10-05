import React from 'react';
import p from './Dialog.module.css';
import {NavLink} from "react-router-dom";


const Dialog = () => {
    return <div className={p.dialog_grid}>
        <div className={p.dialog_background + ' ' + p.dialogsItem + ' ' + p.dialog}>
            <div>
                <NavLink to='/dialog/1'> Andrey </NavLink>
            </div>
            <div>
                <NavLink to='/dialog/2'> Dima </NavLink>
            </div>
            <div>
                <NavLink to='/dialog/3'> Viktor </NavLink>
            </div>
            <div>
                <NavLink to='/dialog/4'> Natali </NavLink>
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