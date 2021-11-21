import { useState, useEffect, useRef } from 'react';
import socketIOClient from "socket.io-client";
import '../Stylesheet/RoomRight.css';
import CircularProgress from '@mui/material/CircularProgress';
import Messages from './Messages';

const roomID = window.location.href.split('/')[4];
const spotify_user_data = localStorage.getItem('spotify_user_data');

const spotify_user_JSON = JSON.parse(spotify_user_data) 


const socket = socketIOClient(`http://localhost:5000`, {
    withCredentials: true,

    extraHeaders: {
        "room_id": `${roomID}`
    }
});

socket.on('connect', async () => {
    console.log('Connected to server');
    socket.emit('Display name', spotify_user_JSON.display_name);
});

socket.on('msg', (event) => {
    const div = document.getElementById('chat-box');
    const p = document.createElement('p');
    const text = document.createTextNode(`${event.display_name}: ${event.msg}`);
    p.appendChild(text);
    div.appendChild(p);
})

const RoomRight = () => {
    console.log('Render')
    const [messages, setMessages] = useState([]);
    const [roomData, setRoomData] = useState(false);
    const [loading, setLoading] = useState(true);
    const [msg, setMsg] = useState(false);
    const msgRef = useRef(false);



    const msgHandler = (e) => {
        socket.emit('msg', {display_name: spotify_user_JSON.display_name, msg: msg});
        msgRef.current.value = '';
    }

    useEffect(() => {  
        fetch(`http://localhost:5000/get_room/${roomID}`)
        .then(res => res.json())
        .then(data => {
            setRoomData(data.content[0])
            setLoading(false);
        })
    }, [])
    return (
        <div id="room-right-section">
            

                <div id="player-UI">
                    <div id="playlist-preview">
                        {loading ? <CircularProgress /> : <img src={roomData.playlist_image} onClick={() => {window.open(roomData.link)}}></img>}
                        
                        {loading ? <h2>Loading ...</h2> : <h2>{roomData.playlist_name}</h2>}
                        {loading ? <p></p> : <p className='thin-font'>{roomData.playlist_description}</p>}
                        {loading ? <p></p> : <p className='thin-font'>{roomData.songs.length} songs in playlist.</p>}
                    </div>
                    <div id="playlist-controller">
                        <div id="playlist-actions">
                            <button>Previous</button>
                            <button>Play</button>
                            <button>Pause</button>
                            <button>Next</button>
                        </div>
                        <div id="inputs">
                            <div className="input-wrapper">
                                <input type="text" placeholder="Your guess"></input>
                                <button>Guess</button>
                            </div>
                            <div className="input-wrapper">
                                <input autocomplete="off" type="text" placeholder="Send message" id="sendMessage" ref={msgRef} onChange={e => {setMsg(e.target.value)} }></input>
                                <button onClick={msgHandler}>Send</button>
                            </div>
                        </div>

                        <div id="chat-box">

                        </div>
                    </div>
                </div>

            <div id="players-container">
            <p id="players-in-room-title">Players in room</p>
                <hr></hr>
                
            </div>
        </div>
    ) 
}  

export default RoomRight;