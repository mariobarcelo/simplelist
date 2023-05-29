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
				done ? `${styles.item} ${styles.done}` : `${styles.item}`
			}
			onClick={(event) => {
				event.stopPropagation();
				const currentItems = [...itemsList];
				const nextItemsList = currentItems.map((item) => {
					if (item.id === id) {
						const done = !item.done;
						return { ...item, done };
					} else {
						return item;
					}
				});
				setItemsList(nextItemsList);
			}}>
			<span className={styles.itemName}>{children}</span>

			<button
				className={styles.deleteItem}
				onClick={(event) => {
					event.stopPropagation();
					const currentItems = [...itemsList];
					const nextItemsList = currentItems.filter((item) => {
						return item.id !== id;
					});

					setItemsList(nextItemsList);
				}}>
				<X />
				<VisuallyHidden>Delete item</VisuallyHidden>
			</button>
		</li>
	);
}

export default TodoItem;
