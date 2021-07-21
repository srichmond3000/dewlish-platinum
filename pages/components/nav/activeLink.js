import { useRouter } from 'next/router';
import styles from './nav.module.scss';

const ActiveLink = ({ children, href }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  const className = router.asPath === href ? `${styles.active}` : '';

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default ActiveLink;
