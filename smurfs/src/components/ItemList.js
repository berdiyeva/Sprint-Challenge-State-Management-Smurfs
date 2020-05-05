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

            <button className='button' onClick={(e) => fetchItem(e)}>
				Fetch Smurfs!
			</button>
            
			{props.items &&
				props.items.map((smurf) => {
					return (
						<div>
							<h2>Name: {smurf.name} </h2>
							<h3>Age: {smurf.age} </h3>
							<h3>Height: {smurf.height} </h3>
						</div>
					);
				})}

			{props.error && <p>{props.error}</p>}
			
		</div>
	);
};

const mapStateToProps = (state) => ({
	items: state.fetchReducer.item,
	error: state.fetchReducer.error,
	isFetching: state.fetchReducer.isFetching,
});

export default connect(mapStateToProps, { fetchItems })(ItemList);
