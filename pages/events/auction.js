import Layout from '../components/layout';
import AuctionItem from '../components/auctionitem';
import styles from './auction.module.scss';

const Auction = () => (
  <Layout title='Auction'>
    <h2 className={styles.heading}>Auction of Promises Sat 2nd April 2022</h2>
    <p>
      Come and join us at Dewlish Village Hall (
      <a href='https://goo.gl/maps/tHL6oy9SUC9hVzV96'>map</a>) for an auction of
      promises.
    </p>
    <h3>Catalogue</h3>
    <ol>
      <li>
        <a href='#drone-photo'>Drone photography of your house</a>
      </li>
      <li>Bottles of sparkling wine.</li>
    </ol>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <AuctionItem
      id='drone-photo'
      title='Drone photography of your house'
      description='Gadget will come and fly his drone over your house and take photographs.'
      reserve='30'
    />
  </Layout>
);

export default Auction;
