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
        <span>Home</span>
      </ActiveLink>
      <ActiveLink href='/events'>
        <span>Events</span>
      </ActiveLink>
      <ActiveLink href='/donate'>
        <span>Donate</span>
      </ActiveLink>
      <ActiveLink href='/contact'>
        <span>Contact</span>
      </ActiveLink>
    </nav>
  );
};

export default Nav;
