/* eslint-disable max-len */
import { FiGithub } from 'react-icons/fi';
import { IoOpenOutline } from 'react-icons/io5';
import styles from './card.module.css';

const Card = () => (
  <div className={styles.container}>
    <img className={styles.img} src="./images/jde-motors.PNG" alt="app-name" />
    <div className={styles.infoContainer}>
      <p className={styles.featuredProyect}>Featured Project</p>
      <h3 className={styles.projectTitle}><a className={styles.projectName} href="/">Crypto Data</a></h3>
      <p className={styles.description}>A mobile web app that displays the total market capitalization of the top 20 cryptocurrencies in the world.</p>
      <div className={styles.bottomContainer}>
        <ul className={styles.listContainer}>
          <li>React</li>
          <li>Redux</li>
        </ul>
        <div className={styles.iconsContainer}>
          <a href="/">
            <FiGithub className={styles.icon} />
          </a>
          <a href="/">
            <IoOpenOutline className={styles.icon} />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
