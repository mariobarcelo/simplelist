import TodoApp from '../TodoApp';
import styles from './App.module.css';

function App() {
	return (
		<div className={styles.wrapper}>
			<h1>SimpleList</h1>
			<TodoApp />
		</div>
	);
}

export default App;
