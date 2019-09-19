import Head from 'next/head'

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

    { /* global styles */ }
    <style jsx global>{`
      * {
        margin: 0;
        box-sizing: border-box;
      }
      body {
        font: 13px Roboto;
      }
      a {
        color: #767676;
        font: 13px Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
      }
      a:hover {
        color: #000;
        text-decoration: none;
      }
    `}</style>
  </div>
)