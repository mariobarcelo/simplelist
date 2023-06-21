import React from 'react';
import styles from './TodoForm.module.css';
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden';
import { DATABASE_URL } from '../../constants';

function TodoForm({ itemsList, setItemsList }) {
	const [inputValue, setInputValue] = React.useState([]);
	const inputRef = React.useRef(null);

	async function handleSubmit(event) {
		event.preventDefault();

		const item = {
			name: inputValue,
			done: false,
		};

		const nextItem = await postData(item);

		const nextItemsList = [...itemsList, nextItem];

		setItemsList(nextItemsList);

		setInputValue('');
		inputRef.current.focus();
	}

	async function postData({ name, done }) {
		const response = await fetch(DATABASE_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify([{ name, done }]),
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
		return data[0];
	}

	return (
		<form
			className={styles.todoForm}
			onSubmit={(event) => {
				handleSubmit(event);
			}}>
			<VisuallyHidden>
				<label htmlFor='taskInput'>Add item input</label>
			</VisuallyHidden>
			<input
				className={styles.todoInput}
				required
				ref={inputRef}
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
