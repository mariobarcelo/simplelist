import React from 'react';
import styles from './TodoItem.module.css';
import VisuallyHidden from '../VisuallyHidden';
import { X } from 'react-feather';

function TodoItem({ children }) {
	return (
		<li className={styles.item}>
			{children}
			<button>
				<X />
				<VisuallyHidden>Delete item</VisuallyHidden>
			</button>
		</li>
	);
}

export default TodoItem;
