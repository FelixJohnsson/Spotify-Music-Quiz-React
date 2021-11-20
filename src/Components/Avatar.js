import * as React from 'react';
import Avatar from '@mui/material/Avatar';

const ImageAvatars = (props) => {
  
  if(props.spotify_user){
    return (
        <Avatar alt={props.spotify_user.display_name} src={props.spotify_user.images[0].url} id="avatar"/>
    )
} else {
    return (
        <Avatar alt='Loading...' src='' />
    )
}
}

export default ImageAvatars;