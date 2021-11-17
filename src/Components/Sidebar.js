import React from 'react';




    

    

class Sidebar extends React.Component {
    

    render(){
        return(
            
        <div id="left-sidebar">
                <p>You're logged in.</p>
            <div id="wrapper">
                <div className="sidebar-category-div">
                    <p>Username: {this.props.data.username}</p>
                </div>
            </div>
        </div>
        )
    }

}


export default Sidebar;