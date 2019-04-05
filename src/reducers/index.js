import { combineReducers } from 'redux';
import video from './video';
import comments from './comments';
import test from './test'

export default combineReducers({
    video,
    comments,
    test
})