import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from '../components/layout';

const Auction = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/events');
  });

  return (
    <Layout title='Auction'>
      <h3>Auction</h3>
    </Layout>
  );
};

export default Auction;
