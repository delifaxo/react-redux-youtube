import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getVideo } from './actions/video';
import { getComments } from './actions/comments'
import RenderPlayer from './components/RenderPlayer'
import RenderComments from './components/RenderComments'
import RenderListVideo from './components/RenderListVideo'
import Search from './components/Search'
import getResourse from './services/index'
import {getCurrentVideo} from './actions/currentVideo'

class App extends Component {
 
  searchVideo = async (e) => {
    e.preventDefault();
    var body = await getResourse(`search?part=snippet&maxResults=6&q=${e.target.searchInput.value}&type=video&key=`)
    this.getDataComments(body.items[0].id.videoId)
    this.props.getVideo(body);//action
    this.props.getCurrentVideo(body.items[0])
  }

  getDataComments = async (id) => {
    var body = await getResourse(`commentThreads?part=id%2Csnippet&videoId=${id}&key=`)
    this.props.getComments(body);//action
  }

  listVideo = async (e) => {
    if (e.target.getAttribute('name') !== undefined) {
      var body = await getResourse(`videos?part=snippet&id=${e.target.getAttribute('name')}&key=`)
      this.props.getCurrentVideo(body.items[0].id.videoId)
      let searchText = e.target.getAttribute('name');
      this.getDataComments(searchText);
    }
  }

  render() {
    console.log('STORE', this.props.testStore)
    return (
      <div className="App">
        <div className="top">
          <Search
            searchVideo={this.searchVideo} />
          <div className="content">
            <div className="row">
              <div className="video col-lg-8">
                <RenderPlayer />
                <div className="comments">
                  <RenderComments />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="videoside">
                  <RenderListVideo listVideo={this.listVideo} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  testStore: state
})
/*
const mapDispatchToProps = (dispatch) => ({
  onAddVideo: (state) => {
      dispatch({ type: 'ADD_VIDEO', payload: state })
    },
    onAddComments: (state) => {
      dispatch({ type: 'ADD_COMMENTS', payload: state })
    }
})
*/
const mapDispatchToProps = {
  getVideo,
  getComments,
  getCurrentVideo
}


export default connect(mapStateToProps, mapDispatchToProps)(App);