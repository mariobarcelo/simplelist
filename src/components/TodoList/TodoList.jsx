import React from 'react';
import styles from './TodoList.module.css';
import TodoItem from '../TodoItem/TodoItem';

function TodoList({ itemsList }) {
	if (!itemsList) return;

	return (
		<ul>
			{itemsList.map(({ name, id }) => {
				return <TodoItem key={id}>{name}</TodoItem>;
			})}
		</ul>
	);
}

export default TodoList;
