import { combineReducers } from 'redux';
import video from './video';
import comments from './comments';
import currentVideo from './currentVideo'
import statistics from './statistics'

export default combineReducers({
    video,
    comments,
    currentVideo,
    statistics
})