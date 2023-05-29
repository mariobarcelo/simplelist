import React from 'react';
import styles from './TodoList.module.css';
import TodoItem from '../TodoItem/TodoItem';

function TodoList({ itemsList, setItemsList }) {
	console.log('------ TodoList -----');

	if (itemsList.length === 0) return;

	return (
		<ul>
			{itemsList.map(({ name, id, done }) => {
				return (
					<TodoItem
						key={id}
						id={id}
						done={done}
						itemsList={itemsList}
						setItemsList={setItemsList}>
						{name}
					</TodoItem>
				);
			})}
		</ul>
	);
}

export default TodoList;
