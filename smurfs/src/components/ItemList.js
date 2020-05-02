import React from "react";
import { connect } from "react-redux";

import { fetchItems } from "./actions";

const ItemList = (props) => {
    console.log(props)
	const fetchItem = (e) => {
		e.preventDefault();
		props.fetchItems();
	};

	return (
		<div>
			<h1>Smurfs</h1>

			{props.item.map((smurf) => (
				<h4 key={smurf.id}>{smurf.name}</h4>
			))}

			{props.error && <p>{props.error}</p>}
			<button className="button" onClick={(e) => fetchItem(e)}>Fetch Smurfs!</button>
		</div>
	);
};

const mapStateToProps = (state) => ({
	item: state.item,
	error: state.error,
	isFetching: state.isFetching,
});

export default connect(mapStateToProps, { fetchItems })(ItemList);
