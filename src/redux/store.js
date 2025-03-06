import { applyMiddleware, combineReducers } from "redux";
import { authReducer } from "./reducers/authReducer";
import { storyReducer } from "./reducers/storyReducer";
import { legacy_createStore as createStore} from "redux";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    auth:authReducer,
    stories:storyReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk))