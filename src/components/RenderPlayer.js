import React, { Component } from 'react'
import { connect } from 'react-redux';


function RPlayer(currentVideo) {
    if (!currentVideo.currentVideo.currentVideo[0]) {
        return <div className="RPSearch">Начните поиск</div>;
    }
    else {
        return (
            <div>
                <div>
                    Название видео {currentVideo.currentVideo.currentVideo[0].snippet.title}
                </div>
                <iframe className="ytplayer" allowFullScreen="allowfullScreen"
                    mozallowfullscreen="mozallowfullscreen"
                    msallowfullscreen="msallowfullscreen"
                    oallowfullscreen="oallowfullscreen"
                    webkitallowfullscreen="webkitallowfullscreen"
                    src={`//www.youtube.com/embed/${currentVideo.currentVideo.currentVideo[0].id}`}>
                </iframe>
                <div>Название канала {currentVideo.currentVideo.currentVideo[0].snippet.channelTitle}</div>
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
        console.log("STORE-2", this.props.testStore)
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
