import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
          <script 
            src="https://cdnjs.cloudflare.com/ajax/libs/pixi.js/7.2.4/pixi.min.js" 
            integrity="sha512-Ch/insZXzPV4B0AJLPQdpgZ8iUQMXqBZKiGYVWrUUqnivWtIpLF5SnpZzTmTGMZTEZ+7xYJDUL3NHuHf7LZTYg==" 
            crossOrigin="anonymous" 
            referrerPolicy="no-referrer"
            strategy="beforeInteractive"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument; 