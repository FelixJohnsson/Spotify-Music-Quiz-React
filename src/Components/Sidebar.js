import React from 'react';

const array = window.location.href.split('/')[4].split('&');
const access_token = array[0].split('=')[1];
const refresh_token = array[1].split('=')[1];
const id = array[2].split('=')[1];
const username = array[3].split('=')[1];
const get_user_URL = 'http://localhost:5000/get_user/felle21';


    

    

class Sidebar extends React.Component {
    
    state = {
        loading: true,
        user_info: null
    }

    async componentDidMount(){
        let res = await fetch(get_user_URL);
        let data = await res.json();
        this.setState({user_info:data.content, loading:false})
    }

    render(){
        return(
            
        <div id="left-sidebar">
            {this.state.user_info === null ? (
                <p>You're not logged in.</p>
            ) : (
                <p>You're logged in.</p>
            )}
            <p></p>
            <div id="wrapper">
                <div className="sidebar-category-div">
                    <p>Username: {username}</p>
                </div>
            </div>
        </div>
        )
    }

}


export default Sidebar;