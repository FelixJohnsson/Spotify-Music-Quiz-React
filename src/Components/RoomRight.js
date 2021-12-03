import { useState, useEffect, useRef } from 'react';
import socketIOClient from "socket.io-client";
import '../Stylesheet/RoomRight.css';
import CircularProgress from '@mui/material/CircularProgress';


const spotify_user_data = localStorage.getItem('spotify_user_data');
const spotify_user_JSON = JSON.parse(spotify_user_data) 

const tokens_data = localStorage.getItem('tokens');
const tokens_JSON = JSON.parse(tokens_data) 


const roomID = localStorage.getItem('room');

const socket = socketIOClient(`http://localhost:5000/`, {
    withCredentials: true,
    extraHeaders: {
        "room_id": `${roomID}`
    }
});

socket.on('connect', async () => {
    console.log('Connected to server');
    if(spotify_user_JSON) socket.emit('Display name', spotify_user_JSON.display_name);
    
});

socket.on('msg', (event) => {
    console.log('message received')
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
    const [tokens, setTokens] = useState(tokens_JSON);
    const [msg, setMsg] = useState(false);
    const msgRef = useRef(false);



    const msgHandler = (e) => {
        socket.emit('msg', {display_name: spotify_user_JSON.display_name, msg: msg});
        msgRef.current.value = '';
    }

    useEffect(() => {  
        fetch(`http://localhost:5000/get_room/${window.location.href.split('/')[4]}`)
        .then(res => res.json())
        .then(data => {
            if(data.content != undefined){
                setRoomData(data.content[0])
                setLoading(false);
            }
        })
    }, [])

    const playHandler = () => {
        //SEND EMIT
        const room_data = {
            room_id: roomID,
            type: 'Increment room',
            value: null
        }
        socket.emit('Play', { user: spotify_user_JSON.display_name, room:roomID});
        //INCREMENT ROOM
        fetch('http://localhost:5000/update_room', {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(room_data)
            }
        )
        .then(res => res.json())
        .then(data => {
            const body = { 
                context_uri:data.content.uri,
                offset: {
                    position: data.content.currently_playing_offset
                  },
                  position_ms: 0
              }

              console.log(body)
            fetch(`https://api.spotify.com/v1/me/player/play`,{
                body: JSON.stringify(body),
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + tokens.access_token,
                    "Content-Type": "application/json"
                  }, 
                  method:'PUT'
            })
            .then(res => res.json())
            .then(data => console.log(data))            

        })
        //PLAY


    }

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
                            <button onClick={playHandler}>Play</button>
                            <button>Pause</button>
                            <button>Next</button>
                        </div>
                        <div id="inputs">
                            <div className="input-wrapper">
                                <input type="text" placeholder="Your guess"></input>
                                <button>Guess</button>
                            </div>
                            <div className="input-wrapper">
                                <input autoComplete="off" type="text" placeholder="Send message" id="sendMessage" ref={msgRef} onChange={e => {setMsg(e.target.value)} }></input>
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