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
			{console.log("props1", props)}

			{/* <div>
				{props.item.map((smurf) => (<h4 key={smurf.id}>{smurf.name}</h4>))}
			</div> */}

			{props.items &&
				props.items.map((smurf) => {
					return (
						<div>
							<h1>name: {smurf.name} </h1>
							<h1>age: {smurf.age} </h1>
							<h1>height: {smurf.height} </h1>
						</div>
					);
				})}

			{props.error && <p>{props.error}</p>}
			<button className='button' onClick={(e) => fetchItem(e)}>
				Fetch Smurfs!
			</button>
		</div>
	);
};

const mapStateToProps = (state) => ({
	items: state.items,
	error: state.error,
	isFetching: state.isFetching,
});

export default connect(mapStateToProps, { fetchItems})(ItemList);
