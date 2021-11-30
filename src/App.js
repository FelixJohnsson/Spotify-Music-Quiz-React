import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';
import Login from './Pages/Login.js';
import Logged_in from './Pages/Logged_in.js';
import Room from './Pages/Room.js';


function App() {
  const [loading, setLoading] = useState(true);
  
  const [tokens, setTokens] = useState(false);
  const [spotifyData, setSpotifyData] = useState(false);
  const [localData, setLocalData] = useState(false);
  const [roomData, setRoomData] = useState(false);
  
const fetch_data = async () => {
      const data = await fetch(`https://api.spotify.com/v1/me`,{
          headers: {
              Accept: "application/json",
              Authorization: "Bearer " + tokens.access_token,
              "Content-Type": "application/json"
            }
      })
      .then(res => res.json())
      .then(data => data)
      return data;
  }

  if(tokens){
    fetch_data()
    .then(data => console.log(data))
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login />} exact />
        <Route path="/logged_in/:data" element={ <Logged_in changeToken={tokens => setTokens(tokens)}/>} />
        <Route path="/room" element={ <Room />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;