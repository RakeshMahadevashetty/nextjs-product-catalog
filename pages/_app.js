import styles from '../styles/Home.module.css';
import dynamic from 'next/dynamic';

const Navigationbar = dynamic(() => import('../_components/Navigationbar'));
const Footer = dynamic(() => import('../_components/Footer'));
const MainHead = dynamic(() => import('../_components/MainHead'));

function MyApp({ Component, pageProps }) {
  return <>
  <main className={styles.main}>
    <MainHead/>
    <Navigationbar />
    <Component {...pageProps} />
    </main>
    <footer className={styles.footer}><Footer /></footer>
  </>
}

export default MyApp
