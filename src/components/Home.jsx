import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import {Avatar} from '@material-ui/core';  
import Search from './Search';

const Home = () => {
    return (
        <div>
            {/* <h1>This is the Homepage.</h1> */}

            <div className="home__header">
                {/* home page haeder */}
                <div className="home__headerLeft">
                    {/* link */}
                    <Link to='about' >About</Link>
                    {/* link */}
                    <Link to='search' >Store</Link>
                </div>
                <div className="home__headerRight">
                    {/* link */}
                    <Link to='/gmail'>Gmail</Link>
                    {/* link */}
                    <Link to='/images'>Images</Link>
                    {/* icon */}
                    <AppsIcon />
                    {/* avatar */}
                    <Avatar />
                </div>
            </div>
            <div className="home__body">
                {/* body of the home page */}
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" />
            </div>
            <div className="home__inputContainer">
                {/* Search */}
                <Search />
            </div>
        </div>
    )
}

export default Home;