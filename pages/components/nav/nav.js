import { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import ActiveLink from './activeLink';
import Hamburger from './hamburger';
import styles from './nav.module.scss';

const Nav = () => {
  const [expandMenu, setExpandMenu] = useState(false);
  const { user } = useUser();

  const renderAdmin = () => {
    return (
      user && (
        <>
          <ActiveLink href='/admin/admin' onNav={toggleMenu}>
            <span>Admin</span>
          </ActiveLink>
          <ActiveLink href='/api/auth/logout' onNav={toggleMenu}>
            <span>Logout</span>
          </ActiveLink>
        </>
      )
    );
  };

  const toggleMenu = () => {
    setExpandMenu(!expandMenu);
  };

  let navClass = expandMenu
    ? `${styles.nav} ${styles.responsive}`
    : `${styles.nav}`;

  return (
    <nav className={navClass}>
      <Hamburger handleClick={toggleMenu} />
      <ActiveLink href='/' onNav={toggleMenu}>
        <span>Home</span>
      </ActiveLink>
      <ActiveLink href='/events' onNav={toggleMenu}>
        <span>Events</span>
      </ActiveLink>
      <ActiveLink href='/dewlish' onNav={toggleMenu}>
        <span>Dewlish History</span>
      </ActiveLink>
      <ActiveLink href='/contact' onNav={toggleMenu}>
        <span>Contact</span>
      </ActiveLink>
      {renderAdmin()}
    </nav>
  );
};

export default Nav;
