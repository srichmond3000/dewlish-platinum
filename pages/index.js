import Layout from './components/layout';
import ActiveLink from './components/nav/activeLink';

const Home = () => {
  return (
    <Layout title='Dewlish Platinum - Home'>
      <section>
        <h2>Fundraising</h2>
        <p>
          The village of Dewlish has formed a Platinum Celebration committee to
          organise a series of fund raising events through 2021-2022 to raise
          money to hold a set of events to celebrate the Queen&apos;s Platinum
          Jubilee over the extended bank holiday weekend of Thurs 2nd to Sun 5th
          June 2022.
        </p>
        <p>
          See the{' '}
          <ActiveLink href='/events'>
            <span>Events</span>
          </ActiveLink>{' '}
          page for details of our first event - a family barbecue on Sat July
          31st.
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
