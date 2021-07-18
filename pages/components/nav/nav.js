import { useState } from 'react';
import ActiveLink from './activeLink';
import Hamburger from './hamburger';
import styles from './nav.module.scss';

const Nav = () => {
  const [expandMenu, setExpandMenu] = useState(false);

  const toggleMenu = () => {
    setExpandMenu(!expandMenu);
  };

  let navClass = expandMenu
    ? `${styles.nav} ${styles.responsive}`
    : `${styles.nav}`;

  return (
    <nav className={navClass}>
      <Hamburger handleClick={toggleMenu} />
      <ActiveLink href='/'>
        <a>Home</a>
      </ActiveLink>
      <ActiveLink href='/events'>
        <a>Events</a>
      </ActiveLink>
      <ActiveLink href='/donate'>
        <a>Donate</a>
      </ActiveLink>
      <ActiveLink href='/contact'>
        <a>Contact</a>
      </ActiveLink>
    </nav>
  );
};

export default Nav;
