import { ADDING_ITEM, ADDED_ITEM, ADD_ITEM_FAILED } from "../actions";

const initialStateCreate = {
	item: {
		name: "",
		age: "",
		height: "",
	},

	items: [],
};

export const createReducer = (state = initialStateCreate, action) => {
	switch (action.type) {
		case ADDING_ITEM:
			return {
				...state,
				items: action.payload,
			};
		default:
			return state;
	}
};
