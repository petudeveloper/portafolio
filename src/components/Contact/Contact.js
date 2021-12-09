/* eslint-disable max-len */
import styles from './contact.module.css';

const Contact = () => {
  const handleClick = () => {
    console.log('this is a test');
  };
  return (
    <section className={styles.container}>
      <h2 className={styles.numberedHeading}>What’s Next?</h2>
      <h2 className={styles.secondTitle}>Get In Touch</h2>
      <p className={styles.text}>
        I am currently exploring new opportunities, I would ideally like to find a place that allows me to expand on my software development experience. My inbox is always open. whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p>
      <div className={styles.btnContainer}>
        <a href="mailto:davidalvarezmazzo@gmail.com" className={styles.btn} onClick={handleClick}>Say Hello</a>
      </div>
    </section>
  );
};

export default Contact;
