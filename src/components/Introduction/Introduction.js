import styles from './introduction.module.css';

const Introduction = () => (
  <section className={styles.container}>
    <h1 className={styles.h1}>Hi, my name is</h1>
    <h2 className={styles.h2}>David Alvarez.</h2>
    <h3 className={styles.h3}>I build things for the web.</h3>
    <p className={styles.text}>
      I&apos;m a Colombia-based software engineer specializing in
      {' '}
      building (and occasionally designing) exceptional digital experiences. Currently,
      {' '}
      I&apos;m focused on building accessible, human-centered products as a freelance
      {' '}
      <span className={styles.highlight}>full-stack developer</span>
      .
    </p>
  </section>
);

export default Introduction;
