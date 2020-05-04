import React from "react";
import { connect } from "react-redux";

import { fetchItems } from "../actions";

const ItemList = (props) => {
	console.log("props", props);

	const fetchItem = (e) => {
		e.preventDefault();
		props.fetchItems();
	};

	return (
		<div>
			<h1>Welcome to Smurfs Village</h1>

			{/* {props.item.map((smurf) => (
				<h4 key={smurf.id}>{smurf.name}</h4>
			))} */}

			{/* {props.item.map((smurf) => (
				<div className='user'>
					<h1>name: {smurf.name} </h1>
					<h1>age: {smurf.age} </h1>
					<h1>height: {smurf.height} </h1>
				</div>
			))} */}

			{props.error && <p>{props.error}</p>}
			<button className='button' onClick={(e) => fetchItem(e)}>
				Fetch Smurfs!
			</button>
		</div>
	);
};

const mapStateToProps = (state) => ({
	item: state.item,
	error: state.error,
	isFetching: state.isFetching,
});

export default connect(mapStateToProps, { fetchItems })(ItemList);
