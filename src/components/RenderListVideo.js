import React, { Component } from 'react'
import { connect } from 'react-redux';


function Rlist(body) {
  console.log('загвозка ', body)
  if (!body.testStore.video[0]) {
    return []
  }
  else {
    return (
      <div>
        {body.testStore.video[0].items.map(({ id, snippet }) => {

          return (
            <div className="card bg-light md-3">
              <img className="video-side-img" name={`${id.videoId}`} src={`https://i.ytimg.com/vi/${id.videoId}/mqdefault.jpg`}></img>
              <div name={`${id.videoId}`} className="text-side-bar">{snippet.title}</div>
            </div>
          )
        }
        )}
      </div>
    )
  }
}

//<div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
class RenderListVideo extends Component {

  render() {
    return (<div>
      <Rlist testStore={this.props.testStore} />
    </div>
    )
  }
}

export default connect(
  state => ({
    testStore: state
  })

)(RenderListVideo)
