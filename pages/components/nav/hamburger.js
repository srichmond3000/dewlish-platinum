import styles from './nav.module.scss';

const Hamburger = ({ handleClick }) => (
  <a className={styles.icon} onClick={handleClick}>
    <i className='fa fa-bars'></i>
  </a>
);

export default Hamburger;
