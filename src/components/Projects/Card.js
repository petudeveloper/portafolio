/* eslint-disable max-len */
import PropTypes from 'prop-types';
import { FiGithub } from 'react-icons/fi';
import { IoOpenOutline } from 'react-icons/io5';
import styles from './card.module.css';

const Card = ({
  image, projectName, description, technologies, githubLink, liveVersion,
}) => (
  <div className={styles.container}>
    <a href={githubLink}>
      <img className={styles.img} src={image} alt="app-name" />
    </a>
    <div className={styles.infoContainer}>
      <p className={styles.featuredProyect}>Featured Project</p>
      <h3 className={styles.projectTitle}><a className={styles.projectName} href="/">{projectName}</a></h3>
      <p className={styles.description}>
        {description}
      </p>
      <div className={styles.bottomContainer}>
        <ul className={styles.listContainer}>
          {
            technologies.map((tech) => <li key={tech}>{tech}</li>)
          }
        </ul>
        <div className={styles.iconsContainer}>
          <a href={githubLink}>
            <FiGithub className={styles.icon} />
          </a>
          <a href={liveVersion}>
            <IoOpenOutline className={styles.icon} />
          </a>
        </div>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  projectName: PropTypes.string.isRequired,
  liveVersion: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf.isRequired,
};

export default Card;
