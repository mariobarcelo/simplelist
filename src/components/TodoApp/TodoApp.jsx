import React from 'react';
import styles from './TodoApp.module.css';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList/TodoList';

function TodoApp() {
	const [itemsList, setItemsList] = React.useState(() => {
		const storedItems = JSON.parse(localStorage.getItem('items'));
		if (storedItems) {
			return storedItems;
		} else {
			return [];
		}
	});

	console.log('itemsList - TodoApp: ', itemsList);

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
