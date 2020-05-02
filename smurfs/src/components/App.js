import React from "react";
import { connect } from "react-redux";

import ItemList from "./ItemList";
import { fetchItems } from "./actions";

function App() {
	return (
		<div>
			<ItemList />
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		item: state.item, 
		error: state.error, 
		fetchingItems: state.fetchingItems,
	};
};

export default connect(mapStateToProps, { fetchItems })(App);
