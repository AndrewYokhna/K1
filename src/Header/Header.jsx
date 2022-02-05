import React from 'react';
import p from './Head.module.css';
import shapka_2 from './img/Head_shapka.jpeg';
import logo from './img/logo.png';

const Header = (props) => {
    return <header className={p.header}>
        <div>
            <img className={p.img_head} src={shapka_2} alt='shapka_2' />
            <img className={p.img_logo} src={logo} alt='logo' />
        </div>
    </header>
}

export default Header;