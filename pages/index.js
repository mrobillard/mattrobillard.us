import Link from 'next/link';
import Head from 'next/head';

import Layout from '../components/layouts/main';
import Tag from '../components/tag';
import { posts } from '../posts';
import { ESSAYS } from '../components/header';

export function getStaticProps() {
  return {
    props: {
      posts: posts.map((post) => ({
        ...post,
        url: `${new Date(post.date).getFullYear()}/${post.id}`,
      })),
    },
  };
}

const Home = ({ posts, date }) => (
  <Layout headerActive={ESSAYS}>
    <Head>
      <title>mattrobillard.us</title>
    </Head>
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Tag date='true'>{post.date}</Tag>
          <Tag color='blue'>Real Estate</Tag>
          <Link href={post.url}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>

    <style jsx>{`
      ul li {
        padding: 10px 0px;
        display: inline-flex;
        align-items: center;
        width: auto;
        flex-wrap: wrap;
      }

      ul li span {
        color: #5b5b5b;
        display: inline-block;
        font-size: 13px;
        border: 1.3px gray solid;
        border-radius: 5px;
        width: fit-content;
        margin-right: 10px;
        padding: 0 7px;
      }

      ul li a {
        font-weight: bold;
        color: var(--link-color);
        text-decoration: none;
        display: block;
        white-space: nowrap;
        padding: 2px 0px;
        margin-top: 2px;
      }

      @media (min-width: 500px) {
        ul {
          padding: 20px 0;
          max-width: 50rem;
          margin: auto;
        }
        ul li {
          display: flex;
          padding-left: 0;
          margin-left: 3px;
        }
        ul li a {
          padding: 2px 10px;
          transition: 300ms background-color ease-in;
        }
        ul li a:hover {
          background-color: #f6f6f6;
          border-radius: 5px;
        }
        ul li span {
          display: inline-block;
          width: 160px;
          text-align: right;
          font-size: inherit;
          width: fit-content;
          padding: 0 10px;
        }
      }
    `}</style>
  </Layout>
);

export default Home;
