import React from 'react';
import styles from './Footer.module.scss';


const Footer = () => {
  return(
    <footer className={styles.footer_container}>
        <div>
            <p>Created by <span className={styles.footer_span}>Wahab Giwa</span></p>
        </div>
        <div className={styles.social_icons}>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-github"></i>
            <i class="fab fa-instagram"></i>
        </div>

    </footer>
    
)
}

export default Footer;