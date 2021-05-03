import React from 'react';
import Input from './Input';
import Nav from './Nav'


function Header(props) {
    return (
        <>
        <header className="banner">
            <span className="search">
            <a href="/">Mender</a>
            </span>
            <Nav/>
        </header>
        </>
    );
}

export default Header;