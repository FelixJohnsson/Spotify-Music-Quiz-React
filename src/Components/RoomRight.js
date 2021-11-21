import { useState, useEffect } from 'react';
import socketIOClient from "socket.io-client";
import '../Stylesheet/RoomRight.css';
import CircularProgress from '@mui/material/CircularProgress';

const RoomRight = (props) => {
    
    const [roomData, setRoomData] = useState(false);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const roomID = window.location.href.split('/')[4];
        fetch(`http://localhost:5000/get_room/${roomID}`)
        .then(res => res.json())
        .then(data => {
            setRoomData(data.content[0])
            setLoading(false);
            const socket = socketIOClient(`http://localhost:5000`, {
            withCredentials: true,

            extraHeaders: {
                "room_id": `${roomID}`
            }
            });
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
                        <button>Previous</button>
                        <button>Play</button>
                        <button>Pause</button>
                        <button>Next</button>

                        <input type="text" placeholder="Your guess"></input>
                        <input type="text" placeholder="Send message"></input>
                        <div id="chat-box">

                        </div>
                    </div>
                </div>




            <div id="players-container">
            <p id="players-in-room-title">Players in room</p>
                <hr></hr>
                <div id="players-list">
                    <div className="player-card">
                        <p>User1</p>
                    </div>
                    <div className="player-card">
                        <p>Guest</p>
                    </div>
                    <div className="player-card">
                        <p>Felle21</p>
                    </div>
                </div>
            </div>
        </div>
    ) 
}  

export default RoomRight;