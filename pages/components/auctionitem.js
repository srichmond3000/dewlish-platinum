import styles from './auctionitem.module.scss';

const AuctionItem = ({ id, title, reserve, children }) => (
  <section id={id} className={styles.item}>
    <div className={styles.header}>
      <h3 className={styles.title}>{title}</h3>
      <a href='#' className={styles.topLink}>
        <span>Top</span>
      </a>
    </div>
    <div className={styles.description}>{children}</div>
    <div className={styles.reserve}>Reserve: £{reserve}</div>
  </section>
);

export default AuctionItem;
