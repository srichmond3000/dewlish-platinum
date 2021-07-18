import Image from 'next/image';
import Nav from './nav/nav';
import styles from './header.module.scss';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src='/images/union-jack.jpg'
          alt='Union Jack'
          width='150'
          height='87'
        />
      </div>
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
