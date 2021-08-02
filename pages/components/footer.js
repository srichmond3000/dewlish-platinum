import Image from 'next/image';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <span className={styles.copy}>&copy; Dewlish Platinum 2021</span>

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
