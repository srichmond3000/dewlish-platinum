import Link from 'next/link';
import Image from 'next/image';
import Layout from './components/layout';
import ActiveLink from './components/nav/activeLink';

const Home = () => {
  return (
    <Layout title='Dewlish Platinum - Home'>
      <p>
        This year sees the Queen&apos;s Platinum Jubilee which will be
        celebrated nationally with an extended bank holiday weekend from Thurs
        2nd to Sun 5th June. The village of Dewlish is planning to organise
        several events to mark the occasion and also provide an opportunity for
        the community to come together again after the disruption caused by
        Covid.
        <p>
          The main events will be the lighting of a beacon on Whitelands Down
          above the village on Thurs 2nd: part of the national network of
          beacons, and a dance &amp; barbecue on Sat 4th June.
        </p>
        <p>
          To help fund this we will be holding a series of events in the run up
          to the Platinum Jubilee weekend, which will be fun social occasions
          also.
        </p>
      </p>
      <Image
        src='/images/village-hall-new.jpeg'
        alt='Dewlish village hall'
        width={960}
        height={540}
      />
      <br />
      <section>
        <h2>Events</h2>
        <p>
          We&apos;re looking forward to an Auction of Promises, Treasure Hunt,
          and a Barn Dance in the New Year. Previous events include the Dewlish
          Bonfire Night, Tea on the Lawn and a family barbecue.
        </p>
        <p>
          See the{' '}
          <ActiveLink href='/events'>
            <span>Events</span>
          </ActiveLink>{' '}
          page for further details of our upcoming and past events.
        </p>
      </section>
      <section>
        <h2>Dewlish</h2>
        <p>
          Dewlish is a small village in the heart of Dorset with a thriving
          community. Find out more about it{' '}
          <Link href='/dewlish'>
            <a>here</a>
          </Link>
          .
        </p>
      </section>
      <section>
        <h2>Diamond Jubilee 2012</h2>
        <p>
          We also held a very successful series of events to celebrate the
          Queen&apos;s Diamond Jubilee back in 2012. Click{' '}
          <ActiveLink href='https://ucarecdn.com/94424e45-2a10-47e2-bf50-fad661471e1e/JubileeBook.pdf'>
            here to read about it
          </ActiveLink>
          .
        </p>
      </section>
    </Layout>
  );
};

export default Home;
