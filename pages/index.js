import Layout from './components/layout';
import ActiveLink from './components/nav/activeLink';

const Home = () => {
  return (
    <Layout title='Dewlish Platinum - Home'>
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
        page for details of our first event - a village barbecue on Sat July
        31st.
      </p>
    </Layout>
  );
};

export default Home;
