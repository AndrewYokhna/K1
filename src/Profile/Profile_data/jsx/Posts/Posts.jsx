import React from "react";
<<<<<<< HEAD:src/Profile/Profile_data/jsx/Posts/Posts.jsx
import p from '../../css/Posts.module.css';
=======
import p from '../css/Posts.module.css';
import like from './../img/like.png';
>>>>>>> 7bfbbfb4555b13cce73c104dc85962f4ce06b2ef:src/Profile/Profile_data/jsx/Posts.jsx


const Posts_Item = (props) => {
    return <div>
        <ul>
            <div>
                <li>
                    <div className={p.posts_block}> {props.post} </div>
                    <div>
                        <img className={p.like} src={like} alt='like' />
                        <a>{props.likesCount} </a>
                    </div>
                </li>
            </div>
        </ul>
    </div >
}
export default Posts_Item;
