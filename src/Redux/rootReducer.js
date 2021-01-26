import { combineReducers } from 'redux'
import {videoReducer} from './video/videoReducer'

const rootReducer = combineReducers({
  video: videoReducer
})

export default rootReducer