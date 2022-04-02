import React from 'react';
import { useState } from 'react';
import Avatar from './Avatar'
import TextField from '@mui/material/TextField';
import '../Stylesheet/Logged_in.css'

const Sidebar = (props) => {
    const [loggedIn, setLoggedIn] = useState(null);

    
    return(
        <div id="left-sidebar">
            <div id="wrapper">
                {Avatar}
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