import React from 'react';
import Avatar from './Avatar'
import TextField from '@mui/material/TextField';
import '../Stylesheet/Logged_in.css'

class Sidebar extends React.Component {
    

    render(){
        return(
        <div id="left-sidebar">
            {this.props.state.loading ? <p id="logged-in-p">Loading ...</p> : <p id="logged-in-p">You're logged in.</p>}
                
            <div id="wrapper">
                <Avatar state={this.props.state}/>
                <div className="sidebar-category-div">
                {this.props.state.spotify_user_info ? <p>{this.props.state.spotify_user_info.display_name}</p> : <p>{'Guest'}</p>}
                </div>
                <div className="sidebar-category-div">
                    <TextField id="room-id-input" label="Room ID" variant="standard" color="success"/> 
                </div>
            </div>
        </div>
        )
    }

}


export default Sidebar;