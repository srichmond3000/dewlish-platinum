import Image from 'next/image';
import Layout from './components/layout';

const Events = () => {
  return (
    <Layout title='Dewlish Platinum - Events'>
      <h2>Family Barbecue Sat 31st July 2021</h2>
      <p>
        Our first event was a family barbecue outside the village hall on Sat
        31st July. There was a great turnout of people to enjoy the burgers and
        hotdogs served up by Andy, Chris, Ron and Carole. Many thanks to Phil,
        Katy and James for running the raffle. Plus not to forget Andy running
        the game of &apos;heads and tails&apos; at the end.
      </p>
      <Image
        src='/images/barbecue.jpg'
        alt='People sat outside village hall at barbecue'
        width={500}
        height={375}
      />
      <p>The milk tanker squeezed through...just!</p>
      <Image
        src='/images/barbecue-milk-tanker.jpg'
        alt='Milk tanker squeezing past barbecue'
        width={500}
        height={375}
      />
    </Layout>
  );
};

export default Events;
