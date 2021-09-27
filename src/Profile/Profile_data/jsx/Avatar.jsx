import React from "react";
import p from '../css/Avatar.module.css';


const Avatar = () => {
    return <div className={p.descriptionBlock}>
        <div className={p.face}>
            <img
                src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'/>
            <a>My name</a>
        </div>
    </div>
}

export default Avatar;
