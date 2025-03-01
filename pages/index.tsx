import Head from 'next/head';
import Script from 'next/script';
import PixiRoom from '../components/PixiRoom';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

export default function Home() {
  const [pixiLoaded, setPixiLoaded] = useState(false);

  useEffect(() => {
    // Check if PIXI is already loaded
    if (window.PIXI) {
      setPixiLoaded(true);
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Kawaii Pixel Room</title>
        <meta name="description" content="A cute pixel art room" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Head>

      {/* Add PixiJS script with next/script */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/pixi.js/7.2.4/pixi.min.js"
        strategy="beforeInteractive"
        onLoad={() => setPixiLoaded(true)}
      />

      <main className={styles.main}>
        {pixiLoaded ? (
          <PixiRoom />
        ) : (
          <div className={styles.loading}>
            Loading PixiJS...
          </div>
        )}
      </main>
    </div>
  );
} 