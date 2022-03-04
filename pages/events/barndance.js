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
      <p>
        Come and join us at Deverel Farm, Milborne St Andrew, DT11 0HX on Sat
        16th April 2022 for an evening of dance, drinks, eats and merriment.
        Tickets at £10 also available from:
        <ul>
          <li>
            The Oak Pub, Dewlish <a href='#'>map</a>
          </li>
          <li>
            Milborne St Andrew Post Office <a href='#'>map</a>
          </li>
        </ul>
      </p>
      <p>
        With ample car parking on site, doors and bar open at 7:30pm and dancing
        starting around 8pm until 11:30pm. Music from Dorset’s liveliest party
        band <a href='https://www.blacksheepband.co.uk/'>Black Sheep</a>, called
        by Big Al.
      </p>
      <p>
        Why not enjoy a burger or hot dog along with a drink from our licensed
        bar?
      </p>
      <p>
        Proceeds from this event will go to the Dewlish Platinum Jubilee fund.
      </p>
    </Layout>
  );
};

export default BarnDance;
