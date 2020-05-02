import axios from "axios";

export const FETCH_ITEMS = "FETCH_ITEMS";
export const ITEM_FETCH_SUCCESS = "ITEM_FETCH_SUCCESS";
export const ITEM_FETCH_ERROR = "ITEM_FETCH_ERROR";

export const fetchItems = () => (dispatch) => {
	dispatch({ type: FETCH_ITEMS });
	axios
		.get("http://localhost:3333/smurfs")
		.then((res) => dispatch({ type: ITEM_FETCH_SUCCESS, payload: res.data }))
		.catch((err) => dispatch({ type: ITEM_FETCH_ERROR, payload: err }));
};


//action and action creater for creating a new smurf