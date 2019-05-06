import React, { Component } from 'react'
import { connect } from 'react-redux';

//<div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
class RenderListVideo extends Component {

  render() {
    if (!this.props.testStore.video[0]) {
      return []
    }
    else {
      return (
        <div>
          {this.props.testStore.video[0].items.map(({ id, snippet }) => {
            return (
              <div key={`${id.videoId}`} onClick={this.props.listVideo} name={`${id.videoId}`}
                className="card bg-light md-3">
                <div name={`${id.videoId}`}>
                  <img className="video-side-img"
                    name={`${id.videoId}`} src={`https://i.ytimg.com/vi/${id.videoId}/mqdefault.jpg`}></img>
                  <div name={`${id.videoId}`} className="text-side-bar">
                    <p dangerouslySetInnerHTML={{ __html: `${snippet.title}` }}></p>
                  </div>
                </div>
              </div>
            )
          }
          )}
          <div>
          </div>
          <div>
            <button className="btn card bg-light btnleft" name="prevPageToken" onClick={this.props.selectlistVideo}>Prev video
          </button>
            <button className="btn card bg-light btnrigth" name= "nextPageToken" onClick={this.props.selectlistVideo}>Next video
           </button>
          </div> </div>
      )
    }
  }
}

export default connect(
  state => ({
    testStore: state
  })
)(RenderListVideo)
