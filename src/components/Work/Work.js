import { useState } from 'react';
import Card from './Card';
import styles from './work.module.css';

const Work = () => {
  const [currentWork, setCurrentWork] = useState('');

  const works = [
    {
      id: 1,
      title: 'CODE REVIEWER',
      company: 'Microverse',
      date: 'Nov 2021 – Actual',
      functions: [
        'Use mentoring, teamwork, and communications skills to provide quality and timely feedback to junior developers on their technical projects to improve code quality and overall performance.',
      ],
    },
    {
      id: 2,
      title: 'FREELANCE FULL-STACK DEVELOPER',
      company: 'FreshTech',
      date: 'Nov 2020 – Actual',
      functions: [
        'Use creativity, attention to detail, and analytical skills to create and maintain a relevant aesthetic for the company website always ensuring functionality while attractiveness.',
        'Use teamwork, communication, and leading skills to work closely with the client to bring imaginative and creative ideas to life.',
      ],
    },
    {
      id: 3,
      title: 'MENTOR(Volunteer)',
      company: 'Microverse',
      date: 'Jul 2021 – Nov 2021',
      functions: [
        'Mentored junior web developers, providing technical support through code reviews.',
        'Provided advice and tips on how to maintain motivation to maintain longevity in the program.',
      ],
    },
    {
      id: 4,
      title: 'MECHANICAL ENGINEER',
      company: 'HEVCO',
      date: 'Jul 2021 – Nov 2021',
      functions: [
        'Designed and developed an application that helped to save 25% of the time in company processes.',
        'Used my experience, good communication, and analytics skills to assist in the creation of a new organizational structure for the after-sales department.',
      ],
    },
  ];

  const handleClick = (id) => {
    const work = works.find((work) => work.id === id);
    setCurrentWork(work);
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.numberedHeading}>Where I’ve Worked</h2>
      <div className={styles.content}>
        <ul>
          {
            works.map((work) => (
              <li key={work.id}>
                <button type="button" onClick={() => handleClick(work.id)}>{work.company}</button>
              </li>
            ))
          }
        </ul>
        {currentWork && (
        <Card
          title={currentWork.title}
          company={currentWork.company}
          date={currentWork.date}
          functions={currentWork.functions}
        />
        )}

      </div>
    </section>
  );
};

export default Work;
