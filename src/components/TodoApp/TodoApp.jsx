import React from 'react';
import styles from './TodoApp.module.css';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList/TodoList';
import { DATABASE_URL } from '../../constants';

function TodoApp() {
	const [itemsList, setItemsList] = React.useState([]);

	React.useEffect(() => {
		async function fetchData() {
			const response = await fetch(DATABASE_URL);

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = await response.json();

			const item = data.data;

			setItemsList(item);

			return item;
		}

		fetchData();
	}, []);

	return (
		<div className={styles.wrapper}>
			<TodoForm itemsList={itemsList} setItemsList={setItemsList} />
			<TodoList itemsList={itemsList} setItemsList={setItemsList} />
		</div>
	);
}

export default TodoApp;
