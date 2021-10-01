import React from "react";
import ps from '../../Profile.module.css';
import shapka from '../img/Shapka.png';
import shapka_2 from "../../../Header/img/Head_shapka.jpeg";
import avatar from "./Avatar";

const Head = () => {
    return <div className={ps.header_1}>
            <img src={shapka} alt='shapka' />
        <img src={avatar} alt='avatar'/>
        </div>
    }
    export default Head;
