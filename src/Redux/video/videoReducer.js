import {ADD_VIDEO} from './videoType'
const initialState = {
   name: 'Recorded Videos on Social Media',
   video: './Video1',
}
export const videoReducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_VIDEO:
        return {
            ...state,
            name: action.name,
            video: action.video
        }
        default:
        return state
    }
    


}