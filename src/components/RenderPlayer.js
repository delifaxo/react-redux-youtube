import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Preloader, Placeholder } from 'react-preloading-screen';


function RPlayer(currentVideo) {
    if (!currentVideo.currentVideo.currentVideo[0]) {
        return <div className="RPSearch">Начните поиск</div>;
    }
    else {
        return (
            <Preloader>
                <div>
                    <div>
                        Название видео {currentVideo.currentVideo.currentVideo[0].snippet.title}
                    </div>
                    <iframe className="ytplayer" allowFullScreen="allowfullScreen"
                        mozallowfullscreen="mozallowfullscreen"
                        title="video"
                        msallowfullscreen="msallowfullscreen"
                        oallowfullscreen="oallowfullscreen"
                        webkitallowfullscreen="webkitallowfullscreen"
                        src={`//www.youtube.com/embed/${currentVideo.currentVideo.currentVideo[0].id}`}>
                    </iframe>
                    <div>Название канала {currentVideo.currentVideo.currentVideo[0].snippet.channelTitle}</div>
                </div>
                <Placeholder>
                <div className="lds-roller">
                <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </Placeholder>
            </Preloader>
        );
    }
}

function Rstatistics(body) {

    if (!body.body.statistics[0]) {
        return []
    }
    else {
        return (
            <div>
                лайков -{` `}{body.body.statistics[0].statistics.likeCount.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,'$1.')}
                {` `}дизлайков -{` `}
                {body.body.statistics[0].statistics.dislikeCount.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,'$1.')}<br />
                просмотров - {` `}
                {body.body.statistics[0].statistics.viewCount.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,'$1.')}
            </div>
            )
    }
}
class RenderPlayer extends Component {
    render() {
        return (
            <div>
                <RPlayer currentVideo={this.props.testStore} />
                <Rstatistics body={this.props.testStore} />
            </div>
        )
    }
}

export default connect(
    state => ({
        testStore: state
    })

)(RenderPlayer)
