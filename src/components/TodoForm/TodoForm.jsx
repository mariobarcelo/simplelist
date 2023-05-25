import React from 'react';
import styles from './TodoForm.module.css';

function TodoForm({ itemsList, setItemsList }) {
	const [inputValue, setInputValue] = React.useState([]);

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				console.log('inputValue: ', inputValue);

				const nextItemsList = [...itemsList, inputValue];

				setItemsList(nextItemsList);

				setInputValue('');
			}}>
			<label htmlFor='taskInput'></label>
			<input
				required
				id='taskInput'
				type='text'
				value={inputValue}
				onChange={(event) => {
					setInputValue(event.target.value);
				}}
			/>
			<button>Add task</button>
		</form>
	);
}

export default TodoForm;
