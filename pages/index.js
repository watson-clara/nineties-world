import Head from 'next/head';
import PixiRoom from '../components/PixiRoom';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kawaii Pixel Room</title>
        <meta name="description" content="A cute pixel art room" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <PixiRoom />
      </main>
    </div>
  );
} 