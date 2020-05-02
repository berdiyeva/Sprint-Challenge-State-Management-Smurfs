import {
	FETCH_ITEMS,
	ITEM_FETCH_SUCCESS,
	ITEM_FETCH_ERROR,
} from "./actions";

const initialState = {
	item: [],           //object with name, age, height and id
    error: "",
    isFetching: false
};

function reducer(state = initialState, action) {
    console.log('reducer', action);
	switch (action.type) {
		case FETCH_ITEMS:
			return {
                ...state,
                isFetching: true,
                error: ''
              };
		case ITEM_FETCH_SUCCESS:
            return {
                ...state,
                item: action.payload,
                isFetching: false,
                error: ''
              };
		case ITEM_FETCH_ERROR:
            return {
                ...state,
                error: action.payload
              };
		default:
			return state;
	}
}

export default reducer;

// fetching
// feteched
// errorFetching