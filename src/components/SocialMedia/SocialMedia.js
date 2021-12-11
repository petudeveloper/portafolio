import {
  FiGithub, FiInstagram, FiTwitter, FiLinkedin,
} from 'react-icons/fi';
import styles from './socialMedia.module.css';

const SocialMedia = () => (
  <div className={styles.container}>
    <ul className={styles.list}>
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
  </div>
);

export default SocialMedia;
