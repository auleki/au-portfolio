import React from 'react';
import styles from './App.module.scss';
// import Header from './components/Header/Header'
import { About, Home, Header, Footer } from './components/index';

const App = () => {
	return (
		<div className={styles.main_container}>
			{/* <h2 className={styles.header}>The World Resumes</h2> */}
            <About/>
		</div>
	);
};

export default App;
