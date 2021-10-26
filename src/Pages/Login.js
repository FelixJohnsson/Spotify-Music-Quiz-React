import React from 'react';
import '../Stylesheet/Login.css';
import logo from '../Stylesheet/spotify-logo.png';

class Login extends React.Component {
    state = {

    }
    componentDidMount(){
    }
    render(){
        return (
            <div id="background">
                <div id="container">
                    <img src={logo} id="logo"></img>
                    <p id="title-text">Show your friends who the real <b id="wrapper"><kbd id="artist-name">Chet Baker</kbd></b> fan is. </p>
                    <button>Get started</button>
                </div>
                
            </div>
            )
    }
    
}




const login = () => {
   window.location.href ="http://localhost:5000/login";
}

export default Login;