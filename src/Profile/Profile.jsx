import React from 'react';
import Avatar from "./Profile_data/jsx/Profile/Avatar";
import Posts_Item from "./Profile_data/jsx/Posts/Posts";
import Head from "./Profile_data/jsx/Profile/Header.jsx";
import Posting from "./Profile_data/jsx/Posts/Posting.jsx";
import p from './Profile_data/css/Posts.module.css';





const Profile = (props) => {


    return (
        <div>
            <Head />
            <Avatar />
            <Posting />
            <div className={p.posts_block + ' ' + p.item + ' ' + p.item}>
                <Posts_Item posts={PostsData[0].message} likesCount={PostsData[0].likesCount} />
                <Posts_Item posts={PostsData[1].message} likesCount={PostsData[1].likesCount} />
                <Posts_Item posts={PostsData[2].message} likesCount={PostsData[2].likesCount} />
                <Posts_Item posts={PostsData[3].message} likesCount={PostsData[3].likesCount} />
            </div>
        </div>)
}
export default Profile;