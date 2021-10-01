import React from "react";
import p from '../css/Avatar.module.css';
import avatar from '../img/ava.jpg';



const Avatar = () => {
    return <div className={p.descriptionBlock}>
        <div className={p.face}>
            <img src={avatar} alt='avatar' />
            <a>Andrew</a>
        </div>
    </div>
}

export default Avatar;
