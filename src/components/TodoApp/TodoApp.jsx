import React from 'react';
import styles from './TodoApp.module.css';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList/TodoList';
import { v4 as uuidv4 } from 'uuid';

function TodoApp() {
	const [itemsList, setItemsList] = React.useState(() => {
		const storedItems = JSON.parse(localStorage.getItem('items'));
		if (storedItems) {
			return storedItems;
		} else {
			return [
				{
					name: 'Create items like this!',
					id: uuidv4(),
					done: false,
				},
				{
					name: 'This is a marked item. Click it to unmark it.',
					id: uuidv4(),
					done: true,
				},
				{
					name: 'Touch the X to delete an item.',
					id: uuidv4(),
					done: false,
				},
			];
		}
	});

	React.useEffect(() => {
		const storedItems = JSON.parse(localStorage.getItem('items'));

		if (storedItems !== itemsList) {
			localStorage.setItem('items', JSON.stringify(itemsList));
		}
	}, [itemsList]);

	return (
		<div className={styles.wrapper}>
			<TodoForm itemsList={itemsList} setItemsList={setItemsList} />
			<TodoList itemsList={itemsList} setItemsList={setItemsList} />
		</div>
	);
}

export default TodoApp;
