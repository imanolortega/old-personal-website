import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
            rel="stylesheet"></link>
        </Head>
        <body className='overflow-x-hidden'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
