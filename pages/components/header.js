import Nav from './nav/nav';
import styles from './header.module.scss';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>The Queen&apos;s Platinum Jubilee 2022</h1>
        <span className={styles.subTitle}>- Dewlish Village Celebration</span>
      </div>
      <div className={styles.nav}>
        <Nav />
      </div>
    </div>
  );
};

export default Header;
