import { useState, useEffect } from 'react';
import '../Stylesheet/RoomRight.css';

const RoomRight = (props) => {
    
    
    return (
        <div id="room-right-section">
            <div id="room-UI">

                <div id="player-UI">

                </div>




                <div id="players-container">
                <p id="players-in-room-title">Players in room</p>
                    <hr></hr>
                    <div id="players-list">
                        <div class="player-card">
                            <p>EternalMarch</p>
                        </div>
                        <div class="player-card">
                            <p>Riccina</p>
                        </div>
                        <div class="player-card">
                            <p>Felle21</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}  

export default RoomRight;