import React from "react";
import styles from './Footer.scss';

function Footer(): JSX.Element {
  return (
    <footer className={styles['footer']}>
    <div className={styles['footer-container']}>
      <a className={styles['github']} href="https://github.com/GarretHawke" target="_blank">GarretHawke</a>
      <a className={styles['rss']} href="https://rs.school/js/" target="_blank" rel="noopener">
        <span className={styles['rss-year']}>'21</span>
      </a>
    </div>
  </footer>
  );
}

export default Footer;
