import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

class ImageAvatars extends React.Component {
    
  render(){
    if(this.props.state.local_user_info != null){
        return (
            <Avatar alt={this.props.state.spotify_user_info.display_name} src={this.props.state.spotify_user_info.images[0].url} id="avatar"/>
        )
    } else {
        return (
            <Avatar alt='Loading...' src='' />
        )
    }
  }
}

export default ImageAvatars;