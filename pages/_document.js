import Document, { Html, Head, Main, NextScript } from 'next/document';

class DocumentOverride extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel='shortcut icon'
            type='image/x-icon'
            href='/myfavicon.ico?v=2'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default DocumentOverride;
