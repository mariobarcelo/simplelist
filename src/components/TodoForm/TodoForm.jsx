import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './TodoForm.module.css';
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden';

function TodoForm({ itemsList, setItemsList }) {
	const [inputValue, setInputValue] = React.useState([]);

	return (
		<form
			className={styles.todoForm}
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
			<VisuallyHidden>
				<label htmlFor='taskInput'>Add item input</label>
			</VisuallyHidden>
			<input
				className={styles.todoInput}
				required
				id='taskInput'
				type='text'
				value={inputValue}
				onChange={(event) => {
					setInputValue(event.target.value);
				}}
			/>
			<button className={styles.submitButton}>Add item</button>
		</form>
	);
}

export default TodoForm;
