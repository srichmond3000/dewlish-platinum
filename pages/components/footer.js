import Image from 'next/image';
import ActiveLink from '../components/nav/activeLink';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <nav className={styles.nav}>
        <ActiveLink href='/admin/admin'>
          <span>&copy;</span>
        </ActiveLink>
      </nav>
      <span>&nbsp;Dewlish Platinum 2021</span>

      <a
        href='https://www.facebook.com/Dewlish-VillageDorset-984377341722347'
        className={styles.facebookLink}
      >
        <Image
          src='/images/f_logo_RGB-Blue_58.png'
          alt='Link to facebook'
          width={24}
          height={24}
        />
      </a>
    </div>
  );
};

export default Footer;
