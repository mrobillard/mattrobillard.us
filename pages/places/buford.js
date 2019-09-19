import Head from 'next/head'
import Post from '../../layouts/post'
import Title from '../../components/post/title'
import P from '../../components/post/paragraph'

export default () => (
  <Post>
    <Head><title>Buford Springs</title></Head>
    <Title>Buford Springs</Title>

    <P>Buford Springs is a cave system in North Florida.</P> 

    <img src="/static/buford.jpeg" alt="Buford Springs"/>

    <P>Like Eagle's Nest, this is an extremely advanced dive due to the distance from help and the depths found here (not to mention the gators).</P>

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

