import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
	return (
		<div className={styles.container}>
			<h1>
				Frontend Engineer <i class="yellow fas fa-code" />
			</h1>

			<p className={`${styles.para_title} ${styles.para_color}`}>
			
				Hi, my name is <span className="title">Wahab Giwa</span>
			</p>
			<p className="bio_para">
				I love coding, mostly cause of how alive I feel when building stunning web applications users can engage
				and get some amazing things done with. When I am away from my computer I prefer to indulge in a game of
				basketball, or create some music.
			</p>
		</div>
	);
};

export default Header;
