import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getVideo } from './actions/video';
import { getComments } from './actions/comments'
import RenderPlayer from './components/RenderPlayer'
import RenderComments from './components/RenderComments'
import RenderListVideo from './components/RenderListVideo'
class App extends Component {

  searchVideo = async (e) => {
    let data = await getVideo(this.trackInput.value);
    this.props.onAddVideo(data);
    //коменты
    this.getDataComments(data.items[0].id.videoId)
    this.trackInput.value = ""
  }

  getDataComments = async (id) => {
    let data = await getComments(id);//getComments
    this.props.onAddComments(data);
  }

  render() {
    console.log('STORE', this.props.testStore)
    return (
      <div className="App">
        <input type="text" ref={(input => { this.trackInput = input })} />
        <button onClick={this.searchVideo}>push</button>
        <RenderPlayer />
        <RenderComments/>
        <RenderListVideo />
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