import React from "react";
import shortid from "shortid";
import '../navbar.scss';

const classNames = require('classnames');

const Navbar = ({condensed}) => {
    const condensedClass = classNames({
        'condensed': condensed
    })
    const getId = () => {
        const id = shortid.generate();
        return id;
    };

    return (
        <nav className={`navbar ${condensedClass}`}>
            <ul className={`navbar--list ${condensedClass}`}>
                <li className='navbar--listitem'>
                    <a href='' className='navbar--link'>About</a>
                </li>
                <li className='navbar--listitem'>
                    <a href='' className='navbar--link'>Projects</a>
                </li>
                <li className='navbar--listitem'>
                    <a href='' className='navbar--link'>Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;