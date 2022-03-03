import { useEffect } from 'react';
import Layout from '../components/layout';
import BarnDanceDetails from '../components/barnDanceDetails';

const BarnDance = () => {
  useEffect(() => {
    var el = document.createElement('script');
    el.src = 'https://www.ticketsource.co.uk/ticketshop/JFHDE';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(el, s);
  }, []);

  return (
    <Layout title='Barn Dance'>
      <h2>Barn Dance Sat 27th Nov 2021</h2>
      <div id='embedTS_JFHDE' style={{ width: '100%' }}></div>
      <BarnDanceDetails onlineMessage={' (see above)'} />
    </Layout>
  );
};

export default BarnDance;
