import React from 'react';
import styles from './TodoItem.module.css';
import { X } from 'react-feather';
import { DATABASE_URL } from '../../constants';

function TodoItem({ children, id, done, itemsList, setItemsList }) {
	const liRef = React.useRef(null); /*{current: null} */

	async function deleteData(item_id) {
		const response = await fetch(DATABASE_URL, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify([item_id]),
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	}

	async function updateDoneData(item_id) {
		const response = await fetch(DATABASE_URL, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				_id: item_id,
				name: children,
				done: !done,
			}),
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	}

	return (
		<button
			ref={liRef}
			className={
				done ? `${styles.item} ${styles.done}` : `${styles.item}`
			}
			aria-label={
				done ? `${children} Crossed out item` : `${children}`
			}
			aria-live='polite'
			onClick={(event) => {
				event.stopPropagation();
				const currentItems = [...itemsList];
				const nextItemsList = currentItems.map((item) => {
					if (item._id === id) {
						const done = !item.done;
						return { ...item, done };
					} else {
						return item;
					}
				});

				setItemsList(nextItemsList);
				updateDoneData(id);
			}}>
			<li>
				<span id='itemName' className={styles.itemName}>
					{children}
				</span>

				<button
					aria-label={`Delete ${children} item`}
					className={styles.deleteItem}
					onClick={(event) => {
						event.stopPropagation();
						const currentItems = [...itemsList];
						const nextItemsList = currentItems.filter((item) => {
							return item['_id'] !== id;
						});
						deleteData(id);
						setItemsList(nextItemsList);
					}}>
					<X />
				</button>
			</li>
		</button>
	);
}

export default TodoItem;
