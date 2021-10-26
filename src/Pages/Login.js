import React from 'react';
import '../Stylesheet/Login.css';

class Login extends React.Component {
    state = {

    }
    componentDidMount(){
    }
    render(){
        return (
            <div id="background">
                <div id="container">
                    <p id="spotify-logo-text"><b>Spotify | </b> <i>Quiz</i></p>
                    <p id="title-text">Show your friends who the real <b id="wrapper"><kbd id="artist-name">Lady gaga</kbd></b> fan is. </p>
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