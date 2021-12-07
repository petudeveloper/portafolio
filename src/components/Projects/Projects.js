import Card from './Card';
import styles from './projects.module.css';

const Projects = () => (
  <section className={styles.container}>
    <h2 className={styles.numberedHeading}>Some Things I’ve Built</h2>
    <div className>
      <Card />
    </div>
  </section>
);

export default Projects;
