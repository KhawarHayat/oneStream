import { ADD_VIDEO } from "./videoType";

export function add_video(name,video) {
    console.log(name,video)
    return {
        type: ADD_VIDEO,
        name,
        video
    }
}

