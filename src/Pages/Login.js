const Login = () => {
    return (
    <div className="App">
        <div id="login-div">
            <p id="login-p">By logging in through this application, you accept that it can read your Spotify playlist data and your username(s).
              It will however only save your Spotify ID, username, time stamps and the playlists you play through this application. 
                <a href="http:localhost:5000/info"> Click here </a>for all details, contact info and general info.
            </p>
            <button id="login-button" onClick={login}>Login</button>
        </div>
    </div>
    )
}

const login = () => {
   window.location.href ="http://localhost:5000/login";
}

export default Login;