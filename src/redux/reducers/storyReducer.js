import { CONTRIBUTE_STORIES, CREATE_STORY, FETCH_STORIES } from "../actions/storyAction"

const initial = { story:[] }
export const storyReducer = (state=initial, action) => {
    switch (action.type) {
        case FETCH_STORIES:
            return {...state, story:action.payload}
        case CREATE_STORY:
            return {...state, story:[...state.story, action.payload]}
        case CONTRIBUTE_STORIES:
            const updated = state.story.map((story) =>
            {
                story.id == action.payload.id ? 
                {
                    ...story,
                    contributions:[...story.contributions , action.payload.contribution]
                }
                : story
            }
            )
            return {...state, story: updated}
        default:
            return state
    }
}
