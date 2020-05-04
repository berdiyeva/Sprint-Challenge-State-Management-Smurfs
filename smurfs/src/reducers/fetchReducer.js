import { FETCH_ITEMS, ITEM_FETCH_SUCCESS, ITEM_FETCH_ERROR } from "../actions";

const initialStateFetch = {
	item: [],
	error: "",
	isFetching: false,
};

export function fetchReducer(state = initialStateFetch, action) {
	console.log("reducer", action);
	switch (action.type) {
		case FETCH_ITEMS:
			return {
				...state,
				isFetching: true,
				error: "",
			};
		case ITEM_FETCH_SUCCESS:
			return {
				...state,
				item: action.payload,
				isFetching: false,
				error: "",
			};
		case ITEM_FETCH_ERROR:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
}
