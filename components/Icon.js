import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import styles from './Icon.module.css';
import Head from 'next/head';  
 

const Icon = () => {
  return (
    <div>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Head>
    <div className={styles.iconContainer}>
      <a href="https://www.facebook.com" className={styles.iconLink}>
        <i className="fab fa-facebook"></i>
      </a>
      <a href="https://www.twitter.com" className={styles.iconLink}>
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://www.instagram.com" className={styles.iconLink}>
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.linkedin.com" className={styles.iconLink}>
        <i className="fab fa-linkedin"></i>
      </a>
    </div>
    </div>
  );
};

export default Icon;
