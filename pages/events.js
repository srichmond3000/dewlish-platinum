import Image from 'next/image';
import Layout from './components/layout';

const Events = () => {
  return (
    <Layout title='Dewlish Platinum - Events'>
      <h2>Upcoming events</h2>
      <section className='event'>
        <h3>Bonfire Night Sat 6th Nov 2021</h3>
        <p>Enjoy the traditional Dewlish bonfire night.</p>
      </section>

      <section className='event'>
        <h3>Barn Dance Sat 27th Nov 2021</h3>
        <p>
          Fasten your seat belts, take a deep breath and be prepared to be
          amazed! Hold the date of 27th Nov this year and get yourself along to
          Deverell Farm (Blandford road from Milborne St. Andrew) for 7.30pm and
          let the good times roll! A Barn Dance no less, but not just any old
          barn dance. This ‘un has the iconic Black Sheep band providing the
          dozy doh music, has a big eats BBQ, a drink happy Bar and free
          parking! What’s not to like? Bring the family or friends. Go home
          smiling. You surely can’t miss it!
        </p>
      </section>

      <section className='event'>
        <h3>Auction of Promises Sat 12th Feb 2022</h3>
        <p>Details to follow</p>
      </section>
      <hr />

      <h2>Past events</h2>
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
