import React, { Component } from 'react'
import { connect } from 'react-redux';


function RPlayer(currentVideo) {
    if (!currentVideo.currentVideo.currentVideo[0]) {
        return <div>Начните поиск</div>;
    }
    else {
        return (
            <div>
                <iframe className="ytplayer" allowFullScreen="allowfullScreen"
                    mozallowfullscreen="mozallowfullscreen"
                    msallowfullscreen="msallowfullscreen"
                    oallowfullscreen="oallowfullscreen"
                    webkitallowfullscreen="webkitallowfullscreen"
                    src={`//www.youtube.com/embed/${currentVideo.currentVideo.currentVideo[0].id.videoId}`}>
                </iframe>
            </div>
        );
    }
}

class RenderPlayer extends Component {
    
    constructor() {
        super();
        this.state = {
            loading: true
        };
    }
    render() {
        console.log("STORE-2",this.props.testStore)
        return (
            <div>
                <RPlayer currentVideo={this.props.testStore} />
            </div>
        )
    }
}

export default connect(
    state => ({
        testStore: state
    })

)(RenderPlayer)
 