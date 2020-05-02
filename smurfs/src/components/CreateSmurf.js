import React, { useState } from "react";

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
		event.preventDefault();
	};

	const resetForm = () => {
		setNewSmurf(initialState);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				name='name'
				placeholder='Name'
				onChange={handleChange}
				value={newSmurf.name}
			/>

			<button type='submit'>Create</button>
			<button type='button' onClick={resetForm}>
				Reset
			</button>
		</form>
	);
};

export default CreateSmurf;
