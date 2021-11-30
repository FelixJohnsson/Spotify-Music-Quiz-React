import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Login from './Pages/Login.js';
import Logged_in from './Pages/Logged_in.js';
import Room from './Pages/Room.js';


function App() {
  const [tokens, setTokens] = useState(false);
  const [spotifyData, setSpotifyData] = useState(false);
  if(tokens){
    
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