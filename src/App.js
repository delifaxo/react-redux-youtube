import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getVideo } from './actions/video';
import { getComments, loadComments } from './actions/comments'
import RenderPlayer from './components/RenderPlayer'
import RenderComments from './components/RenderComments'
import RenderListVideo from './components/RenderListVideo'
import Search from './components/Search'
import { getApiComments, getApiListVideo, getApiVideo, getApiStatistics, getApiselectlistVideo } from './services/index'
import { getCurrentVideo } from './actions/currentVideo'
import { getStatistics } from './actions/statistics'
import { currentRequestSearch } from './actions/currentRequestSearch'
import { getApiCommentsNext } from './services/index'
class App extends Component {

  searchVideo = async (e) => {
    e.preventDefault();
    let searchInput = e.target.searchInput.value
    this.props.currentRequestSearch(searchInput)
    let body = await getApiListVideo(searchInput);
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

  selectlistVideo = async (e) => {
    if (e.target.getAttribute('name') === "prevPageToken") {
      let data = await getApiselectlistVideo(this.props.testStore.video[0].prevPageToken,
        this.props.testStore.currentRequestSearch[0]);
      if (this.props.testStore.video[0].prevPageToken !== undefined) {
        this.props.getVideo(data);
      }
    }
    
    else if ((e.target.getAttribute('name') === "nextPageToken") && e.target.getAttribute('name') !== undefined) {
      let data = await getApiselectlistVideo(this.props.testStore.video[0].nextPageToken,
        this.props.testStore.currentRequestSearch[0]);
      if (this.props.testStore.video[0].nextPageToken !== undefined) {
        this.props.getVideo(data);
      }
    }
  }

  loadingComments = async () => {
    let body = await getApiCommentsNext(this.props.testStore.comments[0].nextPageToken,
      this.props.testStore.currentVideo[0].id);
    this.props.loadComments(body);//action
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
                  <RenderComments
                    loadingComments={this.loadingComments}
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="videoside">
                  <RenderListVideo listVideo={this.listVideo}
                    selectlistVideo={this.selectlistVideo} />
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

const mapDispatchToProps = {
  getVideo,
  getComments,
  getCurrentVideo,
  getStatistics,
  currentRequestSearch,
  loadComments
}

export default connect(mapStateToProps, mapDispatchToProps)(App);