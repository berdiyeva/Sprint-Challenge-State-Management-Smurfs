import axios from "axios";

export const FETCH_ITEMS = "FETCH_ITEMS";
export const ITEM_FETCH_SUCCESS = "ITEM_FETCH_SUCCESS";
export const ITEM_FETCH_ERROR = "ITEM_FETCH_ERROR";

export const ADDING_ITEM = "ADDING_ITEM";
export const ADDED_ITEM = "ADDED_ITEM";
export const ADD_ITEM_FAILED = "ADD_ITEM_FAILED";

export const fetchItems = () => (dispatch) => {
	dispatch({ type: FETCH_ITEMS });
	axios
		.get("http://localhost:3333/smurfs")
		.then((res) => dispatch({ type: ITEM_FETCH_SUCCESS, payload: res.data }))
		.catch((err) => dispatch({ type: ITEM_FETCH_ERROR, payload: err }));
};

//for CreateSmurf
export const addItem = (item) => (dispatch) => {
	dispatch({ type: ADDING_ITEM });
	axios
		.post("http://localhost:3333/smurfs", item)
		.then((res) => dispatch({ type: ADDED_ITEM }))
		.catch((err) => dispatch({ type: ADD_ITEM_FAILED }));

	fetchItems();
};
