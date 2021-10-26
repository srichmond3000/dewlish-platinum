import Link from 'next/link';
import Layout from '.././components/layout';

const Barndance = () => {
  return (
    <Layout title='Dewlish Platinum - Barndance'>
      <section>
        <h2>Barn Dance - cancellation</h2>
        <p>
          Unfortunately, due to the recent surge in Covid cases we had no
          alternative but to postpone this event. It will now take place in
          spring 2022. Watch this space for the new date!
        </p>
        <p>
          Head over to the{' '}
          <Link href='/events'>
            <a>events</a>
          </Link>{' '}
          page for details of our other events.
        </p>
      </section>
    </Layout>
  );
};

export default Barndance;
