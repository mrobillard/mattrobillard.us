import Head from 'next/head';
import Link from 'next/link';

import Post from '../../components/layouts/post';
import { H2, H3 } from '../../components/post/heading';
import P from '../../components/post/paragraph';
import { Ref, FootNotes, Note } from '../../components/post/footnotes';
import Header from '../../components/post/header';

export default ({ views }) => (
  <Post>
    <Header
      title='The Sacrosanct Six Percent'
      date='May 1, 2020'
      views={views}
    />
    <Head>
      <meta property='og:title' content='The Sacrosanct Six Percent' />
      <meta property='og:site_name' content='Matt Robillard' />
      <meta
        property='og:description'
        content='The history behind why we still pay 6 percent to sell a home'
      />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@mattrobillard' />
    </Head>

    <P>
      <br />
      <em style={{ fontFamily: 'Playfair', fontWeight: 500, fontSize: '20px' }}>
        "All professions are conspiracies against the laity." &mdash;George
        Bernard Shaw
      </em>
    </P>
    <H2>The Very Beginning</H2>
    <P>
      The United States has a romance with homeownership that traces its roots
      back to the 1800's and the formation of the country. In a sprawling and
      disparate land, ownership of homes and property helped unite people, quite
      literally giving them a stake in a new country full of immigrants. It was
      a sense of belonging that would otherwise be hard to cultivate
      <Ref id='1' />.
    </P>
    <FootNotes>
      <Note id='1'>
        This is an example of a reference with a{' '}
        <a target='_blank' href='https://google.com'>
          link
        </a>{' '}
        in the note.
      </Note>
    </FootNotes>
  </Post>
);
