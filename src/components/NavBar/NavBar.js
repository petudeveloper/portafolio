import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import styles from './navBar.module.css';

const NavBar = ({
  aboutProp, experienciaProp, workRefProp, contactProp,
}) => {
  const [open, setOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

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

  return (
    <header className={styles.container}>
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
            <a href="https://drive.google.com/file/d/10bXSy-KujbD_eB2rkJ79WwhLdxfNXFUd/view?usp=sharing" className={styles.resumeLink}>Resume</a>
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
