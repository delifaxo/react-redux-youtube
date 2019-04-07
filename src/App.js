import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getVideo } from './actions/video';
import { getComments } from './actions/comments'
import RenderPlayer from './components/RenderPlayer'
import RenderComments from './components/RenderComments'
import RenderListVideo from './components/RenderListVideo'
import Search from './components/Search'
class App extends Component {
  constructor() {
    super();
    this.state = {
      currentVideo: "test"
    }
  }

  searchVideo = async (e) => {
    e.preventDefault();
    let data = await getVideo(e.target.searchInput.value);
    this.props.onAddVideo(data);
    console.log('баги', data.items[0].id.videoId)
    //коменты
    this.getDataComments(data.items[0].id.videoId)
    this.setState(({currentVideo}) => {
      return {
        currentVideo: data.items[0].id.videoId
      }
    })
  }

  getDataComments = async (id) => {
    let data = await getComments(id);
    this.props.onAddComments(data);
  }

  listVideo = async (e) => {
    console.log('баги - 5 '+e.target.getAttribute('name'))
    if (e.target.getAttribute('name') !== undefined) {
      let test = e.target.getAttribute('name');
    this.setState(({currentVideo}) => {
      return {
        currentVideo: test
      }
    })
  }
}

  render() {
    console.log('STORE', this.props.testStore)

    return (
      <div className="App">
        <div className="top">
          <Search
            searchVideo={this.searchVideo}
          />
          <div className="content">
            <div className="row">
              <div className="video col-lg-8">
                <RenderPlayer
                  currentVideo={this.state.currentVideo}
                />
                <div className="comments">
                  <RenderComments />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="videoside">
                  <RenderListVideo
                    listVideo={this.listVideo}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ testStore: state }),
  dispatch => ({
    onAddVideo: (state) => {
      dispatch({ type: 'ADD_VIDEO', payload: state })
    },
    onAddComments: (state) => {
      dispatch({ type: 'ADD_COMMENTS', payload: state })
    }
  })
)(App)