import Sidebar from '../Components/Sidebar.js'
import React from 'react';
import '../Stylesheet/Logged_in.css';
import logo from '../Stylesheet/spotify-logo.png';

class Logged_in extends React.Component {
    constructor(){
        super();
            this.get_user_from_local = 'http://localhost:5000/get_user/felle21';
            this.array = window.location.href.split('/')[4].split('&');

            this.data = {
                access_token: this.array[0].split('=')[1],
                refresh_token: this.array[1].split('=')[1],
                id: this.array[2].split('=')[1],
                username: this.array[3].split('=')[1]
            }
    }

    state = {
        loading: true,
        local_user_info: null
    }

    async componentDidMount(){
        let res = await fetch(this.get_user_from_local);
        let data = await res.json();
        console.log(data)
        this.setState({local_user_info:data.content, loading:false})
    }
    render(){
        return(
            <Sidebar data={this.data}/>
        )
        
    }
}


export default Logged_in;