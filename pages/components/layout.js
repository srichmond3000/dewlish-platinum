import Head from 'next/head';
import Header from './header';
import Footer from './footer';

export default function Layout({ children, title = 'Default title' }) {
  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
        />
      </Head>
      <header>
        <Header></Header>
      </header>
      {children}
      <Footer></Footer>
    </>
  );
}
