import React from 'react';
import styles from './TodoApp.module.css';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList/TodoList';

function TodoApp() {
	const [itemsList, setItemsList] = React.useState([]);
	console.log('itemsList - TodoApp: ', itemsList);

	return (
		<>
			<TodoForm itemsList={itemsList} setItemsList={setItemsList} />
			<TodoList itemsList={itemsList} setItemsList={setItemsList} />
		</>
	);
}

export default TodoApp;
