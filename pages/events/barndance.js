import { useEffect } from 'react';
import Layout from '../components/layout';

const BarnDance = () => {
  useEffect(() => {
    var el = document.createElement('script');
    el.src = 'https://www.ticketsource.co.uk/ticketshop/JFHDE';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(el, s);
  }, []);

  return (
    <Layout title='Barn Dance'>
      <h2>Barn Dance</h2>
      <div id='embedTS_JFHDE' style={{ width: '100%' }}></div>
    </Layout>
  );
};

export default BarnDance;
