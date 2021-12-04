import React from 'react';
import { useState } from 'react';
import Avatar from './Avatar'
import TextField from '@mui/material/TextField';
import '../Stylesheet/Logged_in.css'

const Sidebar = (props) => {
    const [loggedIn, setLoggedIn] = useState(null);

    if(!props.spotifyData && localStorage.getItem('logged_in') === 'false'){
        useState(false);
    } else if(!props.spotifyData && localStorage.getItem('logged_in') === 'true'){
        console.log('Youre logged in but we dont have your data in state')
    } else {
        useState(true);
    }
    
    return(
        <div id="left-sidebar">
            {loading}
                
            <div id="wrapper">
                {avatar}
                <div className="sidebar-category-div">
                    {loggedIn}
                </div>
                <div className="sidebar-category-div">
                    <TextField id="room-id-input" label="Room ID" variant="standard" color="success"/> 
                </div>
            </div>
        </div>
        )
}

export default Sidebar;