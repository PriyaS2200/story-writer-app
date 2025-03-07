import { CREATE_STORY, FETCH_STORIES } from "../actions/storyAction"

const initial = { story:[] }
export const storyReducer = (state=initial, action) => {
    switch (action.type) {
        case FETCH_STORIES:
            return {...state, story:action.payload}
        case CREATE_STORY:
            return {...state, story:[...state.story, action.payload]}
        default:
            return state
    }
}
