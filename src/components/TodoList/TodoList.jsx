import React from 'react';
import styles from './TodoList.module.css';

function TodoList({ itemsList }) {
	if (!itemsList) return;

	return (
		<ul>
			{itemsList.map((item) => {
				return <li>{item}</li>;
			})}
		</ul>
	);
}

export default TodoList;
