import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdChevronLeft, MdAccountCircle } from 'react-icons/md';
import './TopAppBar.css';

const TopAppBar = (props) => {
    const [currentScreen, setCurrentScreen] = useState('');
    
    useEffect(() => {
        
        setCurrentScreen(props.location.pathname.replace(/\//g, '')); 
    }, [props.location.pathname, props.pageTitle])

    return (
        <nav className="top-app-bar">
            {currentScreen === '' ? (
                <span className="main-icon">
                    <MdAccountCircle />
                </span>
            ) : (
                <span className="main-icon">
                <Link to={{ pathname: "/", state: { prevPath: props.location.pathname } }}>
                <MdChevronLeft />
                </Link>
            </span>
            )             
            }
        </nav>
    );
};

export default TopAppBar;