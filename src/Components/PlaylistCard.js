import '../Stylesheet/Cards.css'
import { useNavigate } from "react-router-dom";

const PlaylistCard = (props) => {
    const navigate = useNavigate();
    const body = {
        URI:props.playlist_object.URI,
        token: props.tokens.access_token,
        id: props.spotifyData.display_name
    }
    return (
    <div className="playlist-card" onClick={(async (e) => {
        fetch('http://localhost:5000/init_new_room', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(data => {
            
            navigate(`/room/${data.content.id}`);
        })
    })}>
        <img src={props.playlist_object.img_src}></img>
            <p className="playlist-card-title">{props.playlist_object.title}</p>
            <p className="playlist-card-description">{props.playlist_object.description}</p>
    </div>
    )
}

export default PlaylistCard;

