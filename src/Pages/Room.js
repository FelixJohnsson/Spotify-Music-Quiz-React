import React, { useState, useEffect } from 'react';
import Sidebar from '../Components/Sidebar';
import RoomRight from '../Components/RoomRight';
import '../Stylesheet/Room.css';


const Room =  (props) => {
    const [loading, setLoading] = useState(true);
    const [spotify_user_data, setSpotifyUser] = useState(false);
    const [room_data, setRoomData] = useState(false);
    let spotify_user = localStorage.getItem('spotify_user_data');
    spotify_user =  JSON.parse(spotify_user)
    
    useEffect(() => {
        
        fetch('http://localhost:5000/get_room/1')
        .then(res => res.json())
        .then(data => {
            setRoomData(data.content[0]);
            setLoading(false);
            setSpotifyUser(spotify_user);
        })
        
    }, [])
    
    return (
        <div>
            <Sidebar spotify_user={spotify_user_data}/>
            <RoomRight spotify_user={spotify_user_data} room_data={room_data} loading={loading}/>
        </div>
    )
}

export default Room;