import React from "react";
import { NavLink } from 'react-router-dom'

class Nav extends React.Component {
    render() {
        return (
            <div className='nav'>
                <nav>
                    <ul className='nav-links'>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/books'>Books</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                        <li><NavLink to='/blog'>Blog</NavLink></li>
                        <li><NavLink to='/login'>Login</NavLink></li>
                    </ul>
                </nav>
            </div>
        );
    }   
};

export default Nav;
