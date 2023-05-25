import React from 'react';
import styles from './TodoList.module.css';

function TodoList({ itemsList }) {
	if (!itemsList) return;

	return (
		<ul>
			{itemsList.map(({ name, id }) => {
				return <li key={id}>{name}</li>;
			})}
		</ul>
	);
}

export default TodoList;
