import Head from 'next/head'
import Post from '../../layouts/post'
import Title from '../../components/post/title'
import P from '../../components/post/paragraph'
import { Ref, FootNotes, Note } from '../../components/post/footnotes'

export default () => (
  <Post>
    <Head><title>25 Things I Learned By 25</title></Head>
    <Title>25 Things I Learned By 25</Title>

    <P>1. Regrets are the worst thing to have in life. More times than not,
    you regret what you didn’t do, not what you did. You regret the plane
    tickets you didn’t buy, the shots (figuratively and occasionally,
    literally) you didn’t take, the food you didn’t try, the nights you stayed
    in. There’s personally nothing worse than knowing I left something on
    the table.</P>

    <FootNotes>
      <Note id="1">
        User comments about best-practices, errors and snippets in
        combination with permalinks made the <a target="_blank" href={links[3]}>PHP manual</a> one
        of the best resources for newcomers and experts alike.
      </Note>
    </FootNotes>
  </Post>
)

const links = [
  'http://elm-lang.org/blog/compiler-errors-for-humans',
  'https://i.imgur.com/OANtEbP.jpg',
  'http://fb.me/react-warning-keys',
  'http://php.net/manual/en/keyword.paamayim-nekudotayim.php#69537'
]
