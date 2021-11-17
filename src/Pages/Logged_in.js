
import React from 'react';
import Sidebar from '../Components/Sidebar.js';
import SectionRight from '../Components/SectionRight.js';
import '../Stylesheet/Logged_in.css';

//import logo from '../Stylesheet/spotify-logo.png';

class Logged_in extends React.Component {
    constructor(){
        super();
            this.get_user_from_local_URL = 'http://localhost:5000/get_user/felle21';
            this.array = window.location.href.split('/')[4].split('&');

            this.tokens = {
                access_token: this.array[0].split('=')[1],
                refresh_token: this.array[1].split('=')[1],
                id: this.array[2].split('=')[1],
                username: this.array[3].split('=')[1]
            }
            this.state = {
                loading: true,
                local_user_info: null,
                spotify_user_info: null
            }
    }



    async componentDidMount(){
        let local_user =  await fetch(this.get_user_from_local_URL);
        let local_user_data = await local_user.json();
        let spotify_user_data = await fetch(`https://api.spotify.com/v1/me`,{
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + this.tokens.access_token,
                "Content-Type": "application/json"
              }
        })
        .then(res => res.json())
        .then(data => data)

        this.setState({
            local_user_info: local_user_data.content,
            loading :false, 
            spotify_user_info: spotify_user_data
        })
    }
    render(){
        return(
            <div>
                <Sidebar state={this.state} />
                <SectionRight />
            </div>
        )
        
    }
}


export default Logged_in;