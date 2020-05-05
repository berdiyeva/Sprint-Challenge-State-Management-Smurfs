import { fetchReducer } from "./fetchReducer";
import { createReducer } from "./createReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
	fetchReducer,
	createReducer,
});

export default rootReducer;
