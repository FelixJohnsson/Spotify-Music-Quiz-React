import React from 'react';
import Avatar from './Avatar'
import TextField from '@mui/material/TextField';
import '../Stylesheet/Logged_in.css'

const Sidebar = (props) => {
    return(
        <div id="left-sidebar">
            {props.loading ? <p id="logged-in-p">Loading ...</p> : <p id="logged-in-p">You're logged in.</p>}
                
            <div id="wrapper">
                <Avatar spotify_user={props.spotify_user}/>
                <div className="sidebar-category-div">
                {props.spotify_user ? <p>{props.spotify_user.display_name}</p> : <p>{'Guest'}</p>}
                </div>
                <div className="sidebar-category-div">
                    <TextField id="room-id-input" label="Room ID" variant="standard" color="success"/> 
                </div>
            </div>
        </div>
        )
}

export default Sidebar;