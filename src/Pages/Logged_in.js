
import {useState, useEffect} from 'react';
import Sidebar from '../Components/Sidebar.js';
import SectionRight from '../Components/SectionRight.js';
import '../Stylesheet/Logged_in.css';

const Logged_in = (props) => {
    const URL_array = window.location.href.split('/')[4].split('&');
    const tokens = {
        access_token: URL_array[0].split('=')[1],
        refresh_token: URL_array[1].split('=')[1],
        id: URL_array[2].split('=')[1],
        username: URL_array[3].split('=')[1]
    }
    const [localUserState, setlocalUserState] = useState(false);
    const [spotifyUser, setspotifyUser] = useState(false);
    const [loading, setLoading] = useState(true);

    

    useEffect(() => {
        const get_user_from_app_URL = 'http://localhost:5000/get_user/felle21';
        const fetch_data = async () => {
            fetch(get_user_from_app_URL)
            .then(data => setlocalUserState(data));
    
            fetch(`https://api.spotify.com/v1/me`,{
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + tokens.access_token,
                    "Content-Type": "application/json"
                  }
            })
            .then(res => res.json())
            .then(data => {
                setspotifyUser(data)
            })
            setLoading(false);
        }
        fetch_data();
    }, [])

    return(
        <div>
            <Sidebar spotify_user={spotifyUser} loading={loading}/>
            <SectionRight data={spotifyUser}/>
        </div>
    )
}




export default Logged_in;