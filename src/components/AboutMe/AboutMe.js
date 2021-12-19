/* eslint-disable max-len */
import PropTypes from 'prop-types';
import styles from './aboutMe.module.css';

const AboutMe = ({ refProp }) => (
  <section id="#About" ref={refProp} className={styles.container}>
    <h2 className={styles.numberedHeading}>About Me</h2>
    <div className={styles.content}>
      <div>
        <p>
          Hello! My name is David and I enjoy creating things that live on the internet. My interest in web development started back in 2019 when I was working as a mechanical engineer and I developed an application that helped to save time in company processes, turns out I enjoyed so much the extra hours spent providing programming-based solutions, that since then, all my professional endeavors are dedicated to becoming an expert software developer.
        </p>
        <p>
          Fast-forward to today, and I’ve had the privilege to succeed in the Full Stack Web Development program at Microverse, be a volunteer Mentor, work as a part-time Code Reviewer, and build some interesting projects as a freelance developer. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
        </p>
        <p>
          Here are a few technologies I’ve been working with recently:
        </p>
        <ul className={styles.list}>
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Ruby on Rails</li>
          <li>PostgreSQL-MySQL</li>
        </ul>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.img} src="./images/foto-David2.jpg" alt="David Alvarez" />
      </div>
    </div>
  </section>
);

AboutMe.propTypes = {
  refProp: PropTypes.isRequired,
};

export default AboutMe;
