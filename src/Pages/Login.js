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
        <div>
            <div id="background">
                <div id="container">
                    <img src={logo} id="logo"></img>
                    <p id="title-text">Show your friends who the real <b id="b-wrapper"><kbd id="artist-name">Chet Baker</kbd></b> fan is. </p>
                    <button onClick={open_login_div}>Get started</button>
                </div>
            </div>
            <div id="login-div">
                <img src={logo} id="logo"></img>
                <p class="tac">Terms and Conditions</p>
                <div id="tac-scroll-div">
                <p class="tac-sub-text">In using this website you are deemed to have read and agreed to the following terms and conditions:</p> 
                    <p>A Terms and Conditions is not required and it's not mandatory by law. Unlike Privacy Policies, which are required by laws such as the GDPR, CalOPPA and many others, there's no law or regulation on Terms and Conditions.

                        However, having a Terms and Conditions gives you the right to terminate the access of abusive users or to terminate the access to users who do not follow your rules and guidelines, as well as other desirable business benefits.

                        It's extremely important to have this agreement if you operate a SaaS app.

                        Here are a few examples of how this agreement can help you:
                        A Terms and Conditions is not required and it's not mandatory by law. Unlike Privacy Policies, which are required by laws such as the GDPR, CalOPPA and many others, there's no law or regulation on Terms and Conditions.

                        However, having a Terms and Conditions gives you the right to terminate the access of abusive users or to terminate the access to users who do not follow your rules and guidelines, as well as other desirable business benefits.

                        It's extremely important to have this agreement if you operate a SaaS app.

                        Here are a few examples of how this agreement can help you:
                        A Terms and Conditions is not required and it's not mandatory by law. Unlike Privacy Policies, which are required by laws such as the GDPR, CalOPPA and many others, there's no law or regulation on Terms and Conditions.

                        However, having a Terms and Conditions gives you the right to terminate the access of abusive users or to terminate the access to users who do not follow your rules and guidelines, as well as other desirable business benefits.

                        It's extremely important to have this agreement if you operate a SaaS app.

                        Here are a few examples of how this agreement can help you:
                        A Terms and Conditions is not required and it's not mandatory by law. Unlike Privacy Policies, which are required by laws such as the GDPR, CalOPPA and many others, there's no law or regulation on Terms and Conditions.

                        However, having a Terms and Conditions gives you the right to terminate the access of abusive users or to terminate the access to users who do not follow your rules and guidelines, as well as other desirable business benefits.

                        It's extremely important to have this agreement if you operate a SaaS app.

                        Here are a few examples of how this agreement can help you:

                    </p>
                </div>
                <button onClick={login}>Login</button>
                <button onClick={close_login_div} id="decline-button">Decline</button>
            </div>
        </div>
            )
    }
    
}

const open_login_div = () => {
    document.getElementById('login-div').style.display = 'block';
    document.getElementById('login-div').classList.add('fade-in');
    document.getElementById('background').style.filter = 'blur(10px)';
}
const close_login_div = () => {
    document.getElementById('login-div').style.display = 'none';
    document.getElementById('background').style.filter = 'blur(0px)';
}

const login = () => {
   window.location.href ="http://localhost:5000/login";
}

export default Login;