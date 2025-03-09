import axios from "axios";

export const FETCH_STORIES = "FETCH_STORIES";
export const CREATE_STORY = "CREATE_STORY";
export const CONTRIBUTE_STORIES = "CONTRIBUTE_STORIES";

export const fetchStories = () => async(dispatch) => {
       const response = await axios.get('https://story-writer-app-da603-default-rtdb.firebaseio.com/stories.json');
       const data = response.data;
       const stories = data ? Object.entries(data).map(([id,value]) => ({
        id,...value,contributions: value.contributions ?? []
       }))
       : [];
       dispatch({type: FETCH_STORIES, payload: stories})
}

export const createStory = (storyData) => async(dispatch) => {
       const response = await axios.post(`https://story-writer-app-da603-default-rtdb.firebaseio.com/stories.json`,{
              ...storyData,
              contributions: {},
       })
       dispatch({
              type: CREATE_STORY,
              payload: { id: response.data.name, ...storyData}
       })
}

export const contributeStory = (id, contribution) => async (dispatch) => {
       const response = await axios.post(`https://story-writer-app-da603-default-rtdb.firebaseio.com/stories/${id}/contributions.json`,{
              ...contribution,
       })
       dispatch({type: CONTRIBUTE_STORIES, payload:{id, ...contribution}})
}