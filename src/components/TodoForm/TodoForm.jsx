import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './TodoForm.module.css';

function TodoForm({ itemsList, setItemsList }) {
	const [inputValue, setInputValue] = React.useState([]);

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();

				const nextItem = {
					name: inputValue,
					id: uuidv4(),
					done: false,
				};

				const nextItemsList = [...itemsList, nextItem];

				setItemsList(nextItemsList);

				setInputValue('');
				console.log('task: ', nextItem);
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
