import React, { useState, useEffect} from 'react';
import Sidebar from '../Components/Sidebar'
import '../Stylesheet/Room.css'


const Room =  () => {
    const [user_state, setState] = useState([{
        loading: false,
        display_name: 'guest',
        img_src: null
    }]);
    const [loading, setLoading] = useState(true)
    const [room_state, setRoom] = useState(false);

    useEffect(() => {
        const token = 'BQBqmMAnazjV-Mh2EeEws9E_LXrYB0kqJS4qcEvF028dcdJ6O1s7xtsbi7jlwzABOABJvm2BFBN6x7OO0VvTWfqEw_mZ77qkDkOd-M7bOcuFDDr9oNPzi0P8UkUMg7wJcqwMf1kCcMi64cxVKFEEXfh5Buec9c4JPG79BO3UK1ZbV9L7NWuPNqBb-gJNlZw2Nj_fIKCjj4pXKj-fzP2qYWXjL5Pu6oc15Zlal1jVJv7sembl4_0asjrf3Qm5p2NOaQ'

        const body = {
            URI:'2Ob2rWWwZxbz6yWuTmBd6T',
            token: token,
            id:'felle21'
        }
        const fetch_data = async () => {
            let res = await fetch('http://localhost:5000/init_new_room', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            const data = await res.json();
            setRoom(data);
            setLoading(false)
        }
        fetch_data();
    }, [])
    console.log(room_state)
    return (
        <div>
            <Sidebar state={{user_state}}/>
            {loading ? <p>Loading ...</p> : <p>This is room number: {room_state.content.id}</p>}
        </div>
    )
}

export default Room;