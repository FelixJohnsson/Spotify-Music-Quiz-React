import {useState, useEffect} from 'react';
import PlaylistCard from './PlaylistCard';
import '../Stylesheet/SectionRight.css'


const SectionRight = (props) => {
    const get_recommended_playlists_URL = 'http://localhost:5000/get_recommended';

    let [cardComponents, setCardComponents] = useState([]);

    useEffect(() => {
            fetch(get_recommended_playlists_URL)
            .then(res => res.json())
            .then(data => {
                let array_of_cards = data.content.map((el, index) => {
                    return <PlaylistCard key={index} playlist_object={el} data={props.data} id={el.URI}/>
                })
                setCardComponents(array_of_cards)
            })
    }, [])

    return(
        <div id="section-right">
            <div id="top-section">
                <p>Create room by clicking on one of the playlists</p>
            </div>
            {cardComponents}
        </div>
    )
}

export default SectionRight;