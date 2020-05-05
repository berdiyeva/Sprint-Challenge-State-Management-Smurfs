import React from "react";
import { connect } from "react-redux";

import ItemList from "./ItemList";
import { fetchItems, addItem } from "../actions";
import CreateSmurf from "./CreateSmurf";

function App() {
	React.useEffect(() => {
		fetchItems();
	});

	return (
		<div>
			<CreateSmurf />
			<ItemList />
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		items: state.items,
		error: state.error,
		fetchingItems: state.fetchingItems,
	};
};

export default connect(mapStateToProps, { fetchItems, addItem })(App);
