import Image from 'next/image';
import Link from 'next/link';
import Layout from './components/layout';

const Events = () => {
  return (
    <Layout title='Dewlish Platinum - Events'>
      <h2>Upcoming events</h2>

      <section className='event'>
        <h3>Auction of Promises Sat 2nd April 2022</h3>
        <p>Details to follow</p>
      </section>

      <section className='event'>
        <h3>Treasure Hunt Sat 9th April 2022</h3>
        <p>Details to follow</p>
      </section>

      <section className='event'>
        <h3>Barn Dance - Sat 16th April</h3>
        <p>Watch this space for further details!</p>
      </section>
      <hr />

      <h2>Past events</h2>
      <section className='event'>
        <h3>Bonfire Night Sat 6th Nov 2021</h3>
        <p>
          The Dewlish Bonfire &amp; Firework extravaganza on Sat. 6th. Nov. very
          much lived up to the pre-event publicity! There was an element of
          folks being released from Covid restraints as car parking was nil
          problem, the live band created a thread of sound to permeate the
          nearby BBQ, cake stall, soup &amp; roll + other catering tents, not
          forgetting the ever busy bar – and the madding throng were kept
          entertained, fed and watered. The bonfire then blazed into the night
          spreading a welcome heat on a tad fresh evening before the fireworks
          crowned the occasion. This was a display which would not have been out
          of place in any nearby large town or other major conurbation such was
          the sheer magnificence of the truly awesome spectacle. Suffice to say,
          these happenings do not conduct themselves and thanks must be said to
          the many villagers who staffed and ran the stalls, parking and the
          flash, bang, whoosh firework show. Particular thanks though, must go
          to the John Martins, Snr. &amp; Jnr., who not only allowed the fields
          to be used but provided &amp; built the bonfire itself. Good people!
        </p>
        <p>
          Note in the diary for 2022. 7th. November. Dewlish Bonfire &amp;
          Firework party. <strong>Do NOT miss it!</strong>
        </p>
        <Image
          src='/images/bonfire-night.jpg'
          alt='Bonfire night'
          width={2048}
          height={1536}
        />
      </section>

      <section className='event'>
        <h3>Tea on the Lawn Sun 5th Sept 2021</h3>
        <p>
          The great and the good from our village - which explains why there
          were so many there! - came to the picturesque gardens of Albert &amp;
          Nonie Ross for a full blown cream tea with scones, clotted cream,
          strawberry jam &amp; a glass of wine. All this in aid of the swelling
          fund for the Queen&apos;s Platinum Jubilee celebrations in 2022.
          Glorious weather weather and a chance to spend time with friends old
          and new while relaxing in sylvan surrounds and contributing to such a
          good cause - why not! This was the latest in a string of happenings
          scheduled to lead up to the events themselves and which are indicative
          of the strong bonds of community which support such efforts. Our
          thanks to the many who helped make the day a resounding success!
        </p>
        <Image
          src='/images/tea-party.jpg'
          alt='People at the afternoon tea'
          width={1600}
          height={900}
        />
      </section>

      <section className='event'>
        <h3>Family Barbecue Sat 31st July 2021</h3>
        <p>
          Our first event was a family barbecue outside the village hall on Sat
          31st July. There was a great turnout of people to enjoy the burgers
          and hotdogs served up by Andy, Chris, Ron and Carole. Many thanks to
          Phil and Katy for running the raffle. Plus not to forget Andy running
          the game of &apos;heads and tails&apos; at the end.
        </p>
        <Image
          src='/images/Optimized-barbecue.jpg'
          alt='People sat outside village hall at barbecue'
          width={500}
          height={375}
        />
        <p>The milk tanker squeezed through...just!</p>
        <Image
          src='/images/Optimized-barbecue-milk-tanker.jpg'
          alt='Milk tanker squeezing past barbecue'
          width={500}
          height={375}
        />
      </section>
    </Layout>
  );
};

export default Events;
