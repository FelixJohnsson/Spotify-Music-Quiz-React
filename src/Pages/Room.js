import React, { useState, useEffect } from 'react';
import Sidebar from '../Components/Sidebar';
import RoomRight from '../Components/RoomRight';
import '../Stylesheet/Room.css';


const Room =  (props) => {
    const [loading, setLoading] = useState(true);
    const [spotifyData, setSpotifyData] = useState(props.spotifyData);
    const [room_data, setRoomData] = useState(false);
    const [tokens, setTokens] = useState(props.tokens);
    const [localData, setLocalData] = useState(props.localUserData);

    console.log(spotifyData)
    useEffect(() => {
        
        fetch('http://localhost:5000/get_room/1')
        .then(res => res.json())
        .then(data => {
            setRoomData(data.content[0]);
            setLoading(false);
        })
        
    }, [])
    
    return (
        <div>
            <Sidebar spotifyData={spotifyData} loading={loading} />
            <RoomRight spotify_user={spotifyData} room_data={room_data} loading={loading}/>
        </div>
    )
}

export default Room;