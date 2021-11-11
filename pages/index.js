import Link from 'next/link';
import Image from 'next/image';
import Layout from './components/layout';
import ActiveLink from './components/nav/activeLink';

const Home = () => {
  return (
    <Layout title='Dewlish Platinum - Home'>
      <p>
        The village of Dewlish is organising a series of fund raising events
        through 2021-2022 to raise money to celebrate the Queen&apos;s Platinum
        Jubilee over the extended bank holiday weekend of Thurs 2nd to Sun 5th
        June 2022.
      </p>
      <Image
        src='/images/village-hall-new.jpeg'
        alt='Dewlish village hall'
        width={960}
        height={540}
      />
      <br />
      <section className='event'>
        <h3>Barn Dance - postponed till Sat 16th April 2022</h3>
        <p>
          Unfortunately, due to the recent surge in Covid cases we had no
          alternative but to postpone this event. It will now take place on Sat
          16th April. Watch this space for further details!
        </p>
      </section>
      <section>
        <h2>Events</h2>

        <p>
          See the{' '}
          <ActiveLink href='/events'>
            <span>Events</span>
          </ActiveLink>{' '}
          page for details of our upcoming and past events.
        </p>
        <p>
          Dewlish is a thriving small village in the heart of Dorset. Find out
          more about it{' '}
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
