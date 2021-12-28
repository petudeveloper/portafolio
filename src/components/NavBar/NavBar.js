import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import styles from './navBar.module.css';
import debounce from '../../utilities/helpers';

const NavBar = ({
  aboutProp, experienciaProp, workRefProp, contactProp,
}) => {
  const [open, setOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70)
    || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const executeScroll = (reference) => {
    switch (reference) {
      case 'About':
        aboutProp.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      case 'Experinece':
        experienciaProp.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      case 'Work':
        workRefProp.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      case 'Contact':
        contactProp.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      default:
        window.scrollTo(0, 0);
    }
  };

  const navbarStyles = {
    transition: 'top 0.5s',
  };

  return (
    <header className={styles.container} style={{ ...navbarStyles, top: visible ? '0' : '-150px' }}>
      <nav className={styles.nav}>
        <div>
          <a href="/" className={styles.logoLink}>
            <img src="./images/logo.png" alt="petudeveloper-logo" className={styles.logo} />
          </a>
        </div>
        <div className={styles.icons}>
          <a href="/" onClick={(e) => handleClick(e)}>
            <FaBars className={open ? styles.invisibleIcon : styles.visibleIcon} />
          </a>
          <a href="/" onClick={(e) => handleClick(e)}>
            <AiOutlineClose className={open ? styles.visibleIcon : styles.invisibleIcon} />
          </a>
        </div>
        <div className={open ? styles.visibleLinks : styles.links}>
          <ol>
            <li>
              <button type="button" onClick={(e) => executeScroll(e.target.innerHTML)} className={styles.listElement}>About</button>
            </li>
            <li>
              <button type="button" onClick={(e) => executeScroll(e.target.innerHTML)} className={styles.listElement}>Experinece</button>
            </li>
            <li>
              <button type="button" onClick={(e) => executeScroll(e.target.innerHTML)} className={styles.listElement}>Work</button>
            </li>
            <li>
              <button type="button" onClick={(e) => executeScroll(e.target.innerHTML)} className={styles.listElement}>Contact</button>
            </li>
          </ol>
          <div>
            <a
              href="https://drive.google.com/file/d/1rFcNtlyhZ0Dw9Ztw9rigV27v9thpuQzi/view?usp=sharing"
              className={styles.resumeLink}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

NavBar.propTypes = {
  aboutProp: PropTypes.isRequired,
  experienciaProp: PropTypes.isRequired,
  workRefProp: PropTypes.isRequired,
  contactProp: PropTypes.isRequired,
};

export default NavBar;
