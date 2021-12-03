import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import Login from './Pages/Login.js';
import Logged_in from './Pages/Logged_in.js';
import Room from './Pages/Room.js';


function App() {

  const [loading, setLoading] = useState(true);
  const [tokens, setTokens] = useState({});
  const [spotifyData, setSpotifyData] = useState(false);
  const [localData, setLocalData] = useState(false);

  const getTokens = (data) => {
    setTokens(data);
    fetch_data(data);
  }

  const fetch_data = async (user) => {
      await fetch(`https://api.spotify.com/v1/me`,{
          headers: {
              Accept: "application/json",
              Authorization: "Bearer " + user.access_token,
              "Content-Type": "application/json"
            }
      })
      .then(res => res.json())
      .then(data => {
        setSpotifyData(data)
      })
      
      fetch(`http://localhost:5000/get_user/${user.id}`)
      .then(res => res.json())
      .then(userFound => {
        if(userFound.statusCode === 400){
          const body = {username: user.username, id:user.id}
          fetch(`http://localhost:5000/add_user`, {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body:JSON.stringify(body)
          })
          .then(res => res.json())
          .then(data => {
            setLocalData(data.content);
            setLoading(false);
          })

        } else if(userFound.statusCode === 200){
          setLocalData(userFound.content);
          setLoading(false);
        }
      })
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login />} exact />
        <Route path="/logged_in/:data" element={ <Logged_in spotifyData={spotifyData} tokens={tokens} localUserData={localData} loading={loading} changeToken={tokens => getTokens(tokens)}/>}/>
        <Route path="/room/:id" element={ <Room spotifyData={spotifyData} tokens={tokens} localUserData={localData}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;