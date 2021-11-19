import React, { useState} from 'react';
import Sidebar from '../Components/Sidebar'
import '../Stylesheet/Room.css'


const Room =  () => {
    const [user_state, setState] = useState([{
        loading: false,
        display_name: 'guest',
        img_src: null
    }]);

    console.log(user_state)
    return (
        <div>
            <Sidebar state={{user_state}}/>
            {user_state.loading ? <p>Loading ...</p> : <p>This is room number: {'0001'}</p>}
        </div>
    )
}

export default Room;