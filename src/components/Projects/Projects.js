import PropTypes from 'prop-types';
import Card from './Card';
import styles from './projects.module.css';

const Projects = ({ refProp }) => (
  <section id="#Work" ref={refProp} className={styles.container}>
    <h2 className={styles.numberedHeading}>Some Things I’ve Built</h2>
    <div className={styles.cardsContainer}>
      <Card
        image="./images/jde-motors.PNG"
        projectName="JDE Motors"
        description="This is a web app that enables users to book an appointment to try their dream cars. The front end was made with react and redux, and the back end was made with rails. The whole page is connected by using API."
        technologies={['React', 'Redux', 'Rails']}
        githubLink="https://github.com/Emmanuelaaron/carBooking"
        liveVersion="https://github.com/Emmanuelaaron/carBooking"
      />
      <Card
        image="./images/space-travelers.PNG"
        projectName="Space Travelers"
        description="The Space Travelers is a website web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions."
        technologies={['React', 'Redux', 'Jest']}
        githubLink="https://github.com/petudeveloper/space-travelers"
        liveVersion="https://petudeveloper.github.io/space-travelers/"
      />
      <Card
        image="./images/crypto-data2.png"
        projectName="Crypto Market tracking"
        description="A mobile web app that displays the total market capitalization of the top 20 cryptocurrencies in the world."
        technologies={['React', 'Redux', 'Jest']}
        githubLink="https://github.com/petudeveloper/my-crypto-data"
        liveVersion="https://jovial-hermann-d0810a.netlify.app/#/Allcurrencies"
      />
    </div>
  </section>
);

Projects.propTypes = {
  refProp: PropTypes.isRequired,
};

export default Projects;
