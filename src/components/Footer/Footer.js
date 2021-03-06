import {
  FiGithub, FiInstagram, FiTwitter, FiLinkedin,
} from 'react-icons/fi';
import styles from './footer.module.css';

const Footer = () => (
  <footer className={styles.container}>
    <ul className={styles.iconContainer}>
      <li>
        <a target="_blank" href="https://github.com/petudeveloper" className={styles.icon} rel="noreferrer">
          <FiGithub />
        </a>
      </li>
      <li>
        <a target="_blank" href="https://www.instagram.com/petudeveloper/" className={styles.icon} rel="noreferrer">
          <FiInstagram />
        </a>
      </li>
      <li>
        <a target="_blank" href="https://twitter.com/petudeveloper" className={styles.icon} rel="noreferrer">
          <FiTwitter />
        </a>
      </li>
      <li>
        <a target="_blank" href="https://www.linkedin.com/in/davidalvarezmazzo/" className={styles.icon} rel="noreferrer">
          <FiLinkedin />
        </a>
      </li>
    </ul>
    <p>
      Designed & Built by
      {' '}
      <a target="_blank" href="https://github.com/petudeveloper" rel="noreferrer">@petudeveloper</a>
    </p>
  </footer>
);

export default Footer;
