import React, { Component } from 'react'
import { connect } from 'react-redux';




function RPlayer(body) {
    console.log(body.testStore)
    if (!body.testStore.video[0]) {
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
                    src={`//www.youtube.com/embed/${body.testStore.video[0].items[0].id.videoId}`}>
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
        console.log("player", this.props)
        console.log(this.props.testStore.video[1]);

        return (
            <div>
                <RPlayer testStore={this.props.testStore} />
            </div>
        )
    }
}

 

export default connect(
    state => ({
        testStore: state
    })

)(RenderPlayer)
 