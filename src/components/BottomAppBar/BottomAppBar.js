import React from 'react';
import { Link } from 'react-router-dom';
import { GiGreenhouse } from 'react-icons/gi';
import { MdAdd } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";

import './BottomAppBar.css';
const BottomAppBar = (props) => {
    let view = props.location.pathname;
    return (
        <nav className={`bottom-app-bar ${view === '/categories' ? "not-home" : ''}`}>
            <span className='main-icon'>
                <Link to="/categories"><GiGreenhouse fill={view === "/categories" ? "white" : "#017c68"} /></Link>
            </span>
            {
                view === '/categories' &&
                <span className="add-new-category-icon">
                    <MdAdd />
                </span>
            }
                <span className="spacer">
                    <IoMdNotificationsOutline fill={view === "/categories" ? "white" : "#017c68"}/>
                </span>
        </nav>
    )
}

export default BottomAppBar;