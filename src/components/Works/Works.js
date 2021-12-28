/* eslint-disable jsx-a11y/no-autofocus */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './work.module.css';

const Works = ({ refProp }) => {
  const listOfWorks = [
    {
      id: 1,
      title: 'Code Reviewer (Part-time)',
      company: 'Microverse',
      date: 'Nov 2021 – Actual',
      activities: [
        'I used mentoring, teamwork, and communications skills to provide quality and timely feedback to junior developers on their technical projects to improve code quality and overall performance.',
      ],
    },
    {
      id: 2,
      title: 'Full-Stack Developer (Part-time)',
      company: 'FreshTech',
      date: 'Jan 2021 – Actual',
      activities: [
        'I used creativity, attention to detail, and analytical skills to create and maintain a relevant aesthetic for the company website always ensuring functionality while attractiveness.',
        'I used teamwork, communication, and leading skills to work closely with the client to bring imaginative and creative ideas to life.',
      ],
    },
    {
      id: 3,
      title: 'Mentor (Volunteer)',
      company: 'Microverse',
      date: 'Jul 2021 – Nov 2021',
      activities: [
        'I mentored junior web developers, providing technical support through code reviews.',
        'I provided advice and tips on how to maintain motivation to maintain longevity in the program.',
      ],
    },
    {
      id: 4,
      title: 'Mechanical Engineer',
      company: 'HEVCO',
      date: 'Jul 2020 – Nov 2020',
      activities: [
        'I designed and developed an application that helped to save 25% of the time in company processes.',
        'I used my experience, good communication, and analytics skills to assist in the creation of a new organizational structure for the after-sales department.',
      ],
    },
    {
      id: 6,
      title: 'Mechanical Engineer',
      company: 'ACAIRE',
      date: 'May 2018 – Feb 2020',
      activities: [
        'I supported the establishment, monitoring, and construction of 20 training activities for entrepreneurs in the state of Antioquia.',
        'I used organizational skills, empathy, and crisis management abilities to help construct a national normalization process for HVAC companies.',
      ],
    },
    {
      id: 7,
      title: 'Mechanical Engineer',
      company: 'DFS Ltda.',
      date: 'Jan 2014 – Jan 2015',
      activities: [
        'I applied ingenious solutions to reduce downtime by 10% in maintenance activities. Assisted in the implementation of the TPM maintenance philosophy, by training employees in the workshop area.',
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
            <button autoFocus type="button" onClick={() => handleClick(listOfWorks[0].id)}>{listOfWorks[0].company.toUpperCase()}</button>
          </li>
          {
            listOfWorks.slice(1).map((work) => (
              <li key={work.id}>
                <button type="button" onClick={() => handleClick(work.id)}>{work.company.toUpperCase()}</button>
              </li>
            ))
          }
        </ul>
        {currentWork && (
        <div>
          <p className={styles.companyCard}>{currentWork.title}</p>
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
