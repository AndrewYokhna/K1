import React from 'react';
<<<<<<< HEAD
import Avatar from "./Profile_data/jsx/Profile/Avatar";
import Posts from "./Profile_data/jsx/Posts/Posts.jsx";
import Head from "./Profile_data/jsx/Profile/Header";
import Posting from "./Profile_data/jsx/Posts/Posting.jsx";
=======
import Avatar from "./Profile_data/jsx/Avatar";
import Head from "./Profile_data/jsx/Header";
import Posting from "./Profile_data/jsx/Posting";
>>>>>>> 7bfbbfb4555b13cce73c104dc85962f4ce06b2ef
import p from './Profile_data/css/Posts.module.css';
import Posts_Item from './Profile_data/jsx/Posts';


<<<<<<< HEAD
const Posts_Item = (props) => {
    return <div>
        <div>
            <div className={p.posts_block}> {props.post} </div>
            <div ><img className={p.like} src={like} alt='like' />
                <a>{props.likesCount} </a>
            </div>
        </div>
    </div>
}
=======
>>>>>>> 7bfbbfb4555b13cce73c104dc85962f4ce06b2ef

const Profile = (props) => {

    let PostsData = [
        { id: 1, message: 'hi', likesCount: 11 },
        { id: 2, message: 'this my first prog', likesCount: 12 },
        { id: 3, message: 'Post message', likesCount: 13 },
        { id: 4, message: 'Plan', likesCount: 14 },
    ]
    return <div>
        <Head />
        <Avatar />
        <Posting />
        <div className={p.posts_block + ' ' + p.item}>
            <Posts_Item post={PostsData[0].message} likesCount={PostsData[0].likesCount} />
            <Posts_Item post={PostsData[1].message} likesCount={PostsData[1].likesCount} />
            <Posts_Item post={PostsData[2].message} likesCount={PostsData[2].likesCount} />
            <Posts_Item post={PostsData[3].message} likesCount={PostsData[3].likesCount} />
        </div>
    </div>
}
export default Profile;