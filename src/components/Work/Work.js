import { useState } from 'react';
import Card from './Card';
import styles from './work.module.css';

const Work = () => {
  const [currentWork, setCurrentWork] = useState('');

  const handleClick = (e) => {
    setCurrentWork(e.target.value);
  };

  const works = [
    {
      id: 1,
      title: 'Mentor',
      company: 'Microverse',
      date: 'Nov 2021– Actual',
      functions: [
        'Use mentoring, teamwork, and communications skills to provide quality and timely feedback to junior developers on their technical projects to improve code quality and overall performance.',
      ],
    },
  ];

  return (
    <section className={styles.container}>
      <h2 className={styles.numberedHeading}>Where I’ve Worked</h2>
      <div className={styles.content}>
        <ul>
          {
            works.map((work) => (
              <li key={work.id}>
                <button type="button" onClick={(e) => handleClick(e)}>{work.company}</button>
              </li>
            ))
          }
        </ul>
        <Card
          title={currentWork.title}
          company={currentWork.company}
          date={currentWork.date}
          functions={currentWork.functions}
        />
      </div>
    </section>
  );
};

export default Work;
