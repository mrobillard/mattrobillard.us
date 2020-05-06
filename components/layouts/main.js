import Head from 'next/head';
import 'nprogress';

import Header from '../header';
import nprogress from '../../css/nprogress';
import reset from '../../css/reset';
import typography from '../../css/typography';
import colors from '../../css/colors';

export default ({ children, headerActive }) => {
  return (
    <main>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>

      <style jsx global>
        {reset}
      </style>
      <style jsx global>
        {colors}
      </style>
      <style jsx global>
        {nprogress}
      </style>
      <style jsx global>
        {typography}
      </style>

      <Header active={headerActive} />

      {children}

      <style jsx>{`
        main {
          padding: 10px;
        }
      `}</style>
    </main>
  );
};
