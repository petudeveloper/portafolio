import styles from './navBar.module.css';
import { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [open, setOpen] = useState(false)
  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!open)
  }

  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <div>
          <a href="/" className={styles.logoLink}>
            <img src="./images/logo.png" alt="petudeveloper-logo" className={styles.logo}/>
          </a>
        </div>
        <div className={styles.icons} >
          <a href="/" onClick={(e) => handleClick(e)}>
            <FaBars className={open ? styles.visibleIcon : styles.invisibleIcon}/>
          </a>
          <a href="/" onClick={(e) => handleClick(e)}>
            <AiOutlineClose className={open ? styles.invisibleIcon : styles.visibleIcon} />
          </a>
        </div>
        <div className={styles.links}>
          <ol>
            <li>
              <span className={styles.listElement}>About</span>
            </li>
            <li>
              <span className={styles.listElement}>Experinece</span>
            </li>
            <li>
              <span className={styles.listElement}>Work</span>
            </li>
            <li>
              <span className={styles.listElement}>Contact</span>
            </li>
          </ol>
          <div>
            <a href="/" className={styles.resumeLink}>Resume</a>
          </div>
        </div>
      </nav>
    </header>
  )
};

export default NavBar;
