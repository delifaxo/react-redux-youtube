import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getVideo } from './actions/video';
import { getLoadingVideo } from './actions/video';
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
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
class App extends Component {
  state={
    currentPage: 1,
  }

  searchVideo = async (e) => {
    e.preventDefault();
    this.props.getLoadingVideo()
    let searchInput = e.target.searchInput.value
    this.props.currentRequestSearch(searchInput)
    let body = await getApiListVideo(searchInput);
    this.props.getVideo(body);//action
    if (!body.error) {
      (body.items[0]) ? this.totalVideo(body.items[0].id.videoId) : alert('Видео не было найдено')
    }
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

  selectlistVideo = async (e, { activePage }) => {
    console.log(activePage)
    this.setState({ currentPage: activePage }, async function() {
    if (this.state.currentPage > activePage) {
      this.props.getLoadingVideo()
          let data = await getApiselectlistVideo(this.props.testStore.video[0].prevPageToken,
            this.props.testStore.currentRequestSearch[0]);
          if (data.prevPageToken !== undefined || data.nextPageToken === "CAYQAA") {
            this.props.getVideo(data);
          }    }
    else {
      this.props.getLoadingVideo()
        let data = await getApiselectlistVideo(this.props.testStore.video[0].nextPageToken,
          this.props.testStore.currentRequestSearch[0]);
        if (data.nextPageToken !== undefined) {
          this.props.getVideo(data)
        }
      }
      })
    
    // if (e.target.getAttribute('name') === "prevPageToken") {
    //   if (this.props.testStore.video[0].prevPageToken !== undefined) {
    //     this.props.getLoadingVideo()
    //     let data = await getApiselectlistVideo(this.props.testStore.video[0].prevPageToken,
    //       this.props.testStore.currentRequestSearch[0]);
    //     if (data.prevPageToken !== undefined || data.nextPageToken === "CAYQAA") {
    //       this.props.getVideo(data);
    //     }
    //   }
    // }

    // else if ((e.target.getAttribute('name') === "nextPageToken") && e.target.getAttribute('name') !== undefined) {
    //   this.props.getLoadingVideo()
    //   let data = await getApiselectlistVideo(this.props.testStore.video[0].nextPageToken,
    //     this.props.testStore.currentRequestSearch[0]);
    //   if (data.nextPageToken !== undefined) {
    //     this.props.getVideo(data)
    //   }
    // }
  }

  loadingComments = async () => {
    let { testStore } = this.props;
    let body = await getApiCommentsNext(testStore.comments[testStore.comments.length - 1].nextPageToken,
      testStore.currentVideo[0].id);
    (body.items) ? this.props.loadComments(body) : console.log('dont work load comments')
  }

  render() {
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
                    loadingComments={this.loadingComments} />
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
  getLoadingVideo,
  getVideo,
  getComments,
  getCurrentVideo,
  getStatistics,
  currentRequestSearch,
  loadComments
}

export default connect(mapStateToProps, mapDispatchToProps)(App);