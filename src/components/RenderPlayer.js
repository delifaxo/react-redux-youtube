import React, { Component } from 'react'
import { connect } from 'react-redux';


function RPlayer(currentVideo) {
    if (currentVideo.currentVideo === "test") {
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
                    src={`//www.youtube.com/embed/${currentVideo.currentVideo}`}>
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
        return (
            <div>
                <RPlayer currentVideo={this.props.currentVideo} />
            </div>
        )
    }
}

export default connect(
    state => ({
        testStore: state
    })

)(RenderPlayer)
 