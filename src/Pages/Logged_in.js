
import {useState, useEffect} from 'react';
import Sidebar from '../Components/Sidebar.js';
import SectionRight from '../Components/SectionRight.js';
import '../Stylesheet/Logged_in.css';

const Logged_in = (props) => {
    const URL_array = window.location.href.split('/')[4].split('&');
    localStorage.setItem('room', false);

    const url_tokens = {
        access_token: URL_array[0].split('=')[1],
        refresh_token: URL_array[1].split('=')[1],
        id: URL_array[2].split('=')[1],
        username: URL_array[3].split('=')[1]
    }
    localStorage.setItem('tokens', JSON.stringify(url_tokens));
    useEffect(() => {props.changeToken(url_tokens)},[])
    

    const [spotifyUser, setspotifyUser] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetch_data = async () => {
    
            fetch(`https://api.spotify.com/v1/me`,{
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + url_tokens.access_token,
                    "Content-Type": "application/json"
                  }
            })
            .then(res => res.json())
            .then(data => {
                setspotifyUser(data);
                localStorage.setItem('spotify_user_data', JSON.stringify(data));
            })
            setLoading(false);
        }
        fetch_data();
    }, [])

    if(spotifyUser){
        return(
            <div>
                <Sidebar spotify_user={spotifyUser} loading={loading}/>
                <SectionRight spotify_user={spotifyUser} />
            </div>
        )
    } else {
        return(
        <div>
            <Sidebar spotify_user={spotifyUser} loading={loading}/>
        </div>
        )

    }
}




export default Logged_in;