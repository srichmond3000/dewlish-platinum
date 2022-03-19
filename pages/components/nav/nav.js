import { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import ActiveLink from './activeLink';
import Hamburger from './hamburger';
import styles from './nav.module.scss';

const Nav = () => {
  const [expandMenu, setExpandMenu] = useState(false);
  const [pointDown, setPointDown] = useState(false);
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

  const handleHover = () => {
    setPointDown(!pointDown);
  };

  let navClass = expandMenu
    ? `${styles.nav} ${styles.responsive}`
    : `${styles.nav}`;

  let dropDownClass = pointDown ? 'fa fa-angle-up' : 'fa fa-angle-down';

  return (
    <nav className={navClass}>
      <Hamburger handleClick={toggleMenu} />
      <ActiveLink href='/' onNav={toggleMenu}>
        <span>Home</span>
      </ActiveLink>
      <div
        className={styles.dropdownContainer}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <div className={styles.dropdownButton}>
          <span>Events </span>
          <i className={dropDownClass}></i>
        </div>
        <div className={styles.dropdownContent}>
          <ActiveLink href='/events/auction' onNav={toggleMenu}>
            <span>Auction of Promises</span>
          </ActiveLink>
          <ActiveLink href='/events/barndance' onNav={toggleMenu}>
            <span>Barn Dance</span>
          </ActiveLink>
          <ActiveLink href='/events/treasurehunt' onNav={toggleMenu}>
            <span>Treasure Hunt</span>
          </ActiveLink>
          <ActiveLink href='/events/quiz' onNav={toggleMenu}>
            <span>Quiz</span>
          </ActiveLink>
          <ActiveLink href='/events/pastevents' onNav={toggleMenu}>
            <span>Past Events</span>
          </ActiveLink>
        </div>
      </div>
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
