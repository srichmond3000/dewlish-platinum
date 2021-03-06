import Image from 'next/image';
import Link from 'next/link';
import Nav from './nav/nav';
import styles from './header.module.scss';

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Link href='/'>
          <a>
            <Image
              src='/images/union-jack.jpg'
              alt='Union Jack'
              width={150}
              height={87}
              priority={true}
            />
          </a>
        </Link>
      </div>
      <div className={styles.title}>
        <h1>The Queen&apos;s Platinum Jubilee 2022</h1>
        <span className={styles.subTitle}>- Dewlish Village Celebration</span>
      </div>
      <div className={styles.nav}>
        <Nav />
      </div>
      {/* TODO: remove this empty div */}
      <div className={styles.cta}></div>
    </div>
  );
};

export default Header;
