import React, { useState } from "react";
import { connect } from "react-redux";
import { addItem } from "../actions";

const CreateSmurf = (props) => {
	const initialState = { name: "", age: "", height: "" };
	const [newSmurf, setNewSmurf] = useState(initialState);

	const handleChange = (event) => {
		setNewSmurf({
			...newSmurf,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
        console.log('new smurf', newSmurf)
		event.preventDefault();
		props.addItem(newSmurf);
	};

	const resetForm = () => {
		setNewSmurf(initialState);
	};

	return ( 
    <div className='createForm'>
        <form onSubmit={handleSubmit}>
			<input
				type='text'
				name='name'
				placeholder='Name'
				onChange={handleChange}
				value={newSmurf.name} //props.name
			/>
            <input
				type='text'
				name='age'
				placeholder='Age'
				onChange={handleChange}
				value={newSmurf.age}
			/>
            <input
				type='text'
				name='height'
				placeholder='Height in cm'
				onChange={handleChange}
				value={newSmurf.height}
			/>
			<button type='submit'>Create</button>
			<button type='button' onClick={resetForm}>
				Reset
			</button>
		</form>
    </div>
		
	);
};
const mapStateToProps = (state) => ({
	item: state.item,
});

export default connect(mapStateToProps, { addItem })(CreateSmurf);
