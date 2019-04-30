import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getVideo } from './actions/video';
import { getComments } from './actions/comments'
import RenderPlayer from './components/RenderPlayer'
import RenderComments from './components/RenderComments'
import RenderListVideo from './components/RenderListVideo'
import Search from './components/Search'
import { getApiComments, getApiListVideo, getApiVideo, getApiStatistics } from './services/index'
import { getCurrentVideo } from './actions/currentVideo'
import { getStatistics } from './actions/statistics'

class App extends Component {

  searchVideo = async (e) => {
    e.preventDefault();
    let body = await getApiListVideo(e.target.searchInput.value);
    this.props.getVideo(body);//action
    this.totalVideo(body.items[0].id.videoId);
  }

  listVideo = async (e) => {
    if (e.target.getAttribute('name') !== undefined) {
      let searchText = e.target.getAttribute('name');
      this.totalVideo(searchText);
    }
  }

  totalVideo = async (id) => {
    let a1 = await getApiVideo(id);
    this.props.getCurrentVideo(a1.items[0])
    let a2 = await getApiStatistics(id);
    this.props.getStatistics(a2.items[0])
    let a3 = await getApiComments(id);
    this.props.getComments(a3);//action
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
  getCurrentVideo,
  getStatistics
}


export default connect(mapStateToProps, mapDispatchToProps)(App);