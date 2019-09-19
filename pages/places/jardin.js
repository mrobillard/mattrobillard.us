import Head from 'next/head'
import Post from '../../layouts/post'
import Title from '../../components/post/title'
import P from '../../components/post/paragraph'

export default () => (
  <Post>
    <Head><title>Jardin, Colombia</title></Head>
    <Title>Jardin, Colombia</Title>

    <P>Jardin, Colombia is a small coffee town in the Andes.</P> 

    <style jsx>{`
      img {
        margin-top: 60px;
        margin-bottom: 70px;
        width: auto; 
        height: 340px;
        transform: rotate(90deg);
        overflow: hidden;
      }
    `}</style>

  </Post>
)