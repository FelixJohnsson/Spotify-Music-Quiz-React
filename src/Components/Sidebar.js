import React from 'react';
import Avatar from './Avatar'
import '../Stylesheet/Logged_in.css'

class Sidebar extends React.Component {
    

    render(){
        console.log(this.props.state)
        return(
        <div id="left-sidebar">
            {this.props.state.loading ? <p id="logged-in-p">Loading ...</p> : <p id="logged-in-p">You're logged in.</p>}
                
            <div id="wrapper">
                <Avatar state={this.props.state}/>
                <div className="sidebar-category-div">
                {this.props.state.loading ? <p></p> : <p>{this.props.state.spotify_user_info.display_name}</p>}
                </div>
            </div>
        </div>
        )
    }

}


export default Sidebar;