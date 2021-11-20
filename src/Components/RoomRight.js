import { useState, useEffect } from 'react';
import '../Stylesheet/RoomRight.css';

const RoomRight = (props) => {
    
    
    return (
        <div id="room-right-section">
            

                <div id="player-UI">
                    <div id="playlist-preview">
                        <img src="https://lite-images-i.scdn.co/image/ab67616d0000b273f130779b779893bf7334c66d"></img>
                        <h2>Playlist name</h2>
                        <p>This is the short description of the playlist!</p>
                    </div>
                    <div id="playlist-controller">
                        <button>Previous</button>
                        <button>Play</button>
                        <button>Pause</button>
                        <button>Next</button>

                        <input type="text" placeholder="Your guess"></input>
                        <input type="text" placeholder="Send message"></input>
                    </div>
                </div>




            <div id="players-container">
            <p id="players-in-room-title">Players in room</p>
                <hr></hr>
                <div id="players-list">
                    <div class="player-card">
                        <p>User1</p>
                    </div>
                    <div class="player-card">
                        <p>Guest</p>
                    </div>
                    <div class="player-card">
                        <p>Felle21</p>
                    </div>
                </div>
            </div>
        </div>
    ) 
}  

export default RoomRight;