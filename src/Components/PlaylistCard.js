import '../Stylesheet/Cards.css'

const PlaylistCard = (props) => {
    const token = 'BQDoTfpjvvmv0iGpxuImU_0hDCqcLFIAaGeb5t0Y3Ji0boCOgsG7evKFiknV5zFF1q3xTZQLjtU7DvxOX9YnqIdzHRns0lGJ4YsIfgLOvJRC8cbmMs-8_9mXw938iT7yIP9iqePhCr6zFKGpxL7JD28JyoaEIusfDmT1ZXSD8uT0LbpfdlJaBX9b1B_3TUiZroM2hdk_NVdAK9Q_9xT6ZtgETkOyuQO3FVfMJ3rVVxHwwPJdqMIDRa-7HzNTF_8PDw'
 
    return (
    <div className="playlist-card" onClick={(async (e) => {
        console.log(props)
            const body = {
                playlist_URI: props.playlist_object.URI,
                token: token,
                user_id:'felle21'
            }
            let res = await fetch('http://localhost:5000/init_new_room', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            const data = await res.json();
            console.log(data);
    })}>
        <img src={props.playlist_object.img_src}></img>
            <p className="playlist-card-title">{props.playlist_object.title}</p>
            <p className="playlist-card-description">{props.playlist_object.description}</p>
    </div>
    )
}

export default PlaylistCard;