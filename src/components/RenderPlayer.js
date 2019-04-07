import React, { Component } from 'react'
import { connect } from 'react-redux';




function RPlayer(currentVideo) {
console.log('баги-2 ',currentVideo.currentVideo)
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



//<div className="loader"></div>32434
//<div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
class RenderPlayer extends Component {
    constructor() {
        super();
        this.state = {
            loading: true
        };
    }

    render() {
        
        console.log("player", this.props.currentVideo)
        console.log(this.props.testStore.video[1]);

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
 