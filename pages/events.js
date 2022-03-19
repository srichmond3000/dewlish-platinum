import Link from 'next/link';
import Layout from './components/layout';

const Events = () => {
  return (
    <Layout title='Dewlish Platinum - Events'>
      <h2>Upcoming events</h2>
      <section className='event'>
        <h3>Jubilee Quiz</h3>
        <Link href='/events/quiz'>Has moved to here</Link>
      </section>
      <section className='event'>
        <h3>Auction of Promises Sat 2nd April 2022</h3>
        <Link href='/events/auction'>Has moved to here</Link>
      </section>

      <section className='event'>
        <h3>Treasure Hunt, 2pm Sun 10th April 2022</h3>
        <Link href='/events/treasurehunt'>Has moved to here</Link>
      </section>

      <section className='event'>
        <h3>Barn Dance - Sat 16th April 2022</h3>
        <Link href='/events/barndance'>Has moved to here</Link>
      </section>
      <hr />

      <h2>Past events</h2>
      <Link href='/events/pastevents'>Have moved to here</Link>
    </Layout>
  );
};

export default Events;
