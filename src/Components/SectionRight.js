import React from 'react';
import PlaylistCard from './PlaylistCard';
import '../Stylesheet/SectionRight.css'

class SectionRight extends React.Component{
    constructor(){
        super();

        this.get_recommended_playlists_URL = 'http://localhost:5000/get_recommended';
        this.state = {
            cardComponents: ''
        }
        
    }
    
    async componentDidMount(){
        //map
        //create array with playlist cards

        let array_recommended_playlists = await fetch(this.get_recommended_playlists_URL).then(res => res.json())
        let cardComponents = [];
        cardComponents = array_recommended_playlists.content.map((el, index) => {
            return <PlaylistCard key={index} data={el} />
        })
        this.setState({
            cardComponents: cardComponents
        })
        console.log(cardComponents)

    }

    render(){
        return(
            <div id="section-right">
                <div id="top-section">
                    <p>Create room by clicking on one of the playlists</p>
                </div>
                {this.state.cardComponents}
            </div>
        )
    }
}

export default SectionRight;