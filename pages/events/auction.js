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
        <a href='#1'>Drone photography of your house</a>
      </li>
      <li>
        <a href='#2'>Bottles of sparkling wine</a>
      </li>
    </ol>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <AuctionItem id='1' title='1 Drone photography of your house' reserve='30'>
      <p>
        Gadget will come and fly his drone over your house and take photographs.
      </p>
    </AuctionItem>
    <AuctionItem id='2' title='2 Bottle of wine' reserve='30'>
      <p>Two fine bottles of sparkling wine</p>
      <ul>
        <li>From the Langham Estate</li>
      </ul>
    </AuctionItem>
  </Layout>
);

export default Auction;
