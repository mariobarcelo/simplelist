import React from 'react';
import styles from './TodoItem.module.css';
import VisuallyHidden from '../VisuallyHidden';
import { X } from 'react-feather';

function TodoItem({ children, id, done, itemsList, setItemsList }) {
	const liRef = React.useRef(null); /*{current: null} */

	return (
		<li
			ref={liRef}
			className={
				done ? `${styles.task} ${styles.done}` : `${styles.task}`
			}
			onClick={(event) => {
				event.stopPropagation();
				const currentItems = [...itemsList];
				console.log('currentItems - OnClick: ', currentItems);
				const nextItemsList = currentItems.map((item) => {
					console.log(item);
					if (item.id === id) {
						console.log('item.done BEFORE: ', item.done);
						console.log(`Hola soy la tarea con nombre ${children}`);
						const done = !item.done;
						return { ...item, done };
					} else {
						return item;
					}
				});
				console.log('nextItemsList - OnClick', nextItemsList);
				setItemsList(nextItemsList);
			}}>
			{children}
			<button
				onClick={(event) => {
					event.stopPropagation();
					const currentItems = [...itemsList];
					// console.log('currentItems: ', currentItems);
					const nextItemsList = currentItems.filter((item) => {
						return item.id !== id;
					});
					// console.log('nextItemsList: ', nextItemsList);

					setItemsList(nextItemsList);
				}}>
				<X />
				<VisuallyHidden>Delete item</VisuallyHidden>
			</button>
		</li>
	);
}

export default TodoItem;
