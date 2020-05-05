import Head from 'next/head';
import Post from '../../components/layouts/post';
import Title from '../../components/post/title';
import P from '../../components/post/paragraph';
import { Ref, FootNotes, Note } from '../../components/post/footnotes';

export default () => (
  <Post>
    <Head>
      <title>Mortgage Alternatives</title>
    </Head>
    <Title>Mortgage Alternatives</Title>

    <P>
      Buying a house - or selling one - is often an arduous and complex process.
      It tends to involve numerous intermediaries and can also be quite
      expensive. Does it have to be? No - in fact, not at all. The entire
      process is convoluted, opaque, and downright anachronistic. Despite this,
      we continue to complacently accept this reality, notwithstanding living in
      an on-demand age where we expect more speed, transparency, and ease of
      use.
    </P>

    <P>
      Part of the challenge is that the entire process of transacting
      homeownership is completely fragmented, with many different players
      profiting from different elements of the transaction. Multiple third
      parties are involved, often required by regulation, collecting disparate
      offline data. And why does it still take 45 days to close?{' '}
    </P>

    <FootNotes>
      <Note id='1'>
        The average time to close on a house is an estimate taken from{' '}
        <a target='_blank' href={links[0]}>
          here
        </a>
        .
      </Note>
    </FootNotes>
  </Post>
);

const links = ['https://www.thebalance.com/the-home-closing-process-1798319'];
