import React from 'react';
import styles from './TodoList.module.css';
import TodoItem from '../TodoItem/TodoItem';

function TodoList({ itemsList, setItemsList }) {
	if (itemsList?.length === 0 || !itemsList) return;

	return (
		<ul>
			{itemsList.map(({ name, _id, done }) => {
				return (
					<TodoItem
						key={_id}
						id={_id}
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
