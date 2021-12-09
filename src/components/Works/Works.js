/* eslint-disable jsx-a11y/no-autofocus */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './work.module.css';

const Works = ({ refProp }) => {
  const listOfWorks = [
    {
      id: 1,
      title: 'CODE REVIEWER',
      company: 'Microverse',
      date: 'Nov 2021 – Actual',
      activities: [
        'Use mentoring, teamwork, and communications skills to provide quality and timely feedback to junior developers on their technical projects to improve code quality and overall performance.',
      ],
    },
    {
      id: 2,
      title: 'FULL-STACK DEVELOPER',
      company: 'FreshTech',
      date: 'Nov 2020 – Actual',
      activities: [
        'Use creativity, attention to detail, and analytical skills to create and maintain a relevant aesthetic for the company website always ensuring functionality while attractiveness.',
        'Use teamwork, communication, and leading skills to work closely with the client to bring imaginative and creative ideas to life.',
      ],
    },
    {
      id: 3,
      title: 'MENTOR(Volunteer)',
      company: 'Microverse',
      date: 'Jul 2021 – Nov 2021',
      activities: [
        'Mentored junior web developers, providing technical support through code reviews.',
        'Provided advice and tips on how to maintain motivation to maintain longevity in the program.',
      ],
    },
    {
      id: 4,
      title: 'MECHANICAL ENGINEER',
      company: 'HEVCO',
      date: 'Jul 2021 – Nov 2021',
      activities: [
        'Designed and developed an application that helped to save 25% of the time in company processes.',
        'Used my experience, good communication, and analytics skills to assist in the creation of a new organizational structure for the after-sales department.',
      ],
    },
  ];
  const [currentWork, setCurrentWork] = useState(listOfWorks[0]);

  const handleClick = (id) => {
    const work = listOfWorks.find((work) => work.id === id);
    setCurrentWork(work);
  };

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <section id="#Experinece" ref={refProp} className={styles.container}>
      <h2 className={styles.numberedHeading}>Where I’ve Worked</h2>
      <div className={styles.content}>
        <ul className={styles.list}>
          <li key={listOfWorks[0].id}>
            <button autoFocus type="button" onClick={() => handleClick(listOfWorks[0].id)}>{listOfWorks[0].title}</button>
          </li>
          {
            listOfWorks.slice(1).map((work) => (
              <li key={work.id}>
                <button type="button" onClick={() => handleClick(work.id)}>{work.title}</button>
              </li>
            ))
          }
        </ul>
        {currentWork && (
        <div>
          <p className={styles.companyCard}>{currentWork.company}</p>
          <p className={styles.dateCard}>{currentWork.date}</p>
          <ul className={styles.activities}>
            {
              currentWork.activities.map((activity) => (
                <li key={activity}>{activity}</li>
              ))
            }
          </ul>
        </div>
        )}

      </div>
    </section>
  );
};

Works.propTypes = {
  refProp: PropTypes.isRequired,
};

export default Works;
