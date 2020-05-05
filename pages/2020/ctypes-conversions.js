import Head from 'next/head';
import Link from 'next/link';

import Post from '../../components/layouts/post';
import { H2, H3 } from '../../components/post/heading';
import P from '../../components/post/paragraph';
import { Ref, FootNotes, Note } from '../../components/post/footnotes';
import Header from '../../components/post/header';
import Snippet from '../../components/post/snippet';

export default ({ views }) => (
  <Post>
    <Header title='Ctypes Conversions' date='May 7, 2020' views={views} />
    <Head>
      <meta property='og:title' content='Ctypes Conversions' />
      <meta property='og:site_name' content='Matt Robillard' />
      <meta
        property='og:description'
        content='The history behind why we still pay 6 percent to sell a home'
      />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@mattrobillard' />
    </Head>

    <H2>Python's Ctypes</H2>
    <P>Ctypes are a foreign function library for Python.</P>
    <Snippet className='github' language='javascript'>
      {`(num) => num + 1;
console.log('hi');`}
    </Snippet>
    <FootNotes>
      <Note id='1'></Note>
    </FootNotes>
  </Post>
);
