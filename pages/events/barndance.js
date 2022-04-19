import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/layout';

const BarnDance = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/events');
  });

  return (
    <Layout title='Barn Dance'>
      <h2>Barn Dance Sat 16th April 2022</h2>
    </Layout>
  );
};

export default BarnDance;
