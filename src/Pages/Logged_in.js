import { useEffect } from 'react';
import Sidebar from '../Components/Sidebar.js';
import SectionRight from '../Components/SectionRight.js';
import '../Stylesheet/Logged_in.css';

const Logged_in = (props) => {
    const URL_array = window.location.href.split('/')[4].split('&');
    const url_tokens = {
        access_token: URL_array[0].split('=')[1],
        refresh_token: URL_array[1].split('=')[1],
        id: URL_array[2].split('=')[1],
        username: URL_array[3].split('=')[1]
    }
    useEffect(() => {props.changeToken(url_tokens)},[])

    localStorage.setItem('logged_in', true);
    localStorage.setItem('access_token', url_tokens.access_token);
    localStorage.setItem('refresh_token', url_tokens.refresh_token);
    localStorage.setItem('display_name', url_tokens.username);
    localStorage.setItem('time_loggedin', Date.now());

    if(!props.loading){
        return(
            <div>
                <SectionRight spotifyData={props.spotifyData} tokens={props.tokens}/>
            </div>
        )
    } else {
        return(
        <div>
            <Sidebar spotifyData={props.spotifyData} loading={props.loading}/>
        </div>
        )

    }
}




export default Logged_in;