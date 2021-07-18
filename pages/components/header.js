import Nav from './nav/nav';
import styles from './header.module.scss';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>Image</div>
      <div className={styles.title}>
        <h1>Header</h1>
      </div>
      <div className={styles.donate}>Donate</div>
      <div className={styles.subTitle}>Sub title</div>
      <div className={styles.nav}>
        <Nav></Nav>
      </div>
    </div>
  );
};

export default Header;
