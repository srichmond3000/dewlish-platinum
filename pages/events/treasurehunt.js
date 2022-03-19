import Image from 'next/image';
import Layout from '../components/layout';
import styles from './treasurehunt.module.scss';

const TreasureHunt = () => (
  <Layout title='Treasure Hunt'>
    <h2 className={styles.heading}>Treasure Hunt, 2pm Sun 10th April 2022</h2>
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src='/images/treasure-chest.jpeg'
          alt='Treasure chest'
          width={300}
          height={169}
        />
      </div>
      <div className={styles.text}>
        Join us for a treasure hunt starting at Dewlish Village Hall. Finish at
        The Oak Pub, Dewlish, assuming you make it back for closing time! £10
        per car. Any questions, contact John Seymour on 01258 837291. Click{' '}
        <a href='https://ucarecdn.com/c71a2c6b-ddf9-4cac-a2dd-4cb4659d8b2f/TreasureHunt.pdf'>
          here for a flyer
        </a>
        .
      </div>
    </div>
  </Layout>
);

export default TreasureHunt;
