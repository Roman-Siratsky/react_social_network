import React from 'react';
import n from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className={n.navigation}>
            <div className={n.container}>
                <NavLink to='/profile' activeClassName={n.active} className={n.item}>Profile</NavLink>
                <NavLink to='/messages' activeClassName={n.active} className={n.item}>Messages</NavLink>
                <NavLink to='/news' activeClassName={n.active} className={n.item}>News</NavLink>
                <NavLink to='/music' activeClassName={n.active} className={n.item}>Music</NavLink>
                <NavLink to='/settings' activeClassName={n.active} className={n.item}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navigation;