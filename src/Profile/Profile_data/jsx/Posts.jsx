import React from "react";
import p from '../css/Posts.module.css';


const posts = (props) => {
return <div className={p.posts_block}>
    <div className={p.item}>
        {props.message}
    </div>
    </div>
}
export default posts;
