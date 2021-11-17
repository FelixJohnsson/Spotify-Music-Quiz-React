import React from 'react';
import '../Stylesheet/Cards.css'

class PlaylistCard extends React.Component{
    constructor(){
        super();


    }

    render(){
        return(
            <div className="playlist-card">
                <img src={this.props.data.img_src}></img>
                <p className="playlist-card-title">{this.props.data.title}</p>
                <p className="playlist-card-description">{this.props.data.description}</p>
            </div>
        )
    }
}

export default PlaylistCard;