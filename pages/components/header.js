import Image from 'next/image';
import Link from 'next/link';
import Nav from './nav/nav';
import styles from './header.module.scss';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src='/images/union-jack.jpg'
          alt='Union Jack'
          width={150}
          height={87}
          priority={true}
        />
      </div>
      <div className={styles.title}>
        <h1>The Queen&apos;s Platinum Jubilee 2022</h1>
        <span className={styles.subTitle}>- Dewlish Village Celebration</span>
      </div>
      <div className={styles.headerBottom}>
        <div className={styles.nav}>
          <Nav />
        </div>
        <div className={styles.cta}>
          <Link href='/events#barn-dance'>
            <a>Get Barn Dance tickets</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
