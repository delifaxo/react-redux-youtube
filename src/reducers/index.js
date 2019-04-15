import { combineReducers } from 'redux';
import video from './video';
import comments from './comments';
import currentVideo from './currentVideo'

export default combineReducers({
    video,
    comments,
    currentVideo
})