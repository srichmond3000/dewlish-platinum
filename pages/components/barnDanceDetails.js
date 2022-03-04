import Link from 'next/link';

const BarnDanceDetails = () => (
  <>
    <h2>Barn Dance Sat 16th April</h2>
    <p>
      Come and join us at Deverel Farm, Milborne St Andrew, DT11 0HX for an
      evening of dance, drinks, eats and merriment. Tickets at £10 each
      available from:
      <ul>
        <li>
          <Link href='/events/barndance'>Online</Link>
        </li>
        <li>
          The Oak Pub, Dewlish <a href='#'>map</a>
        </li>
        <li>
          Milborne St Andrew Post Office <a href='#'>map</a>
        </li>
      </ul>
    </p>
  </>
);

export default BarnDanceDetails;
