import Link from 'next/link';
import Head from 'next/head';

import Layout from '../components/layouts/main';
import { posts } from '../technical-posts';
import { TECHNICAL } from '../components/header';

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

const Technical = ({ posts, date }) => (
  <Layout headerActive={TECHNICAL}>
    <Head>
      <title>mattrobillard.us</title>
    </Head>
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <span>{post.date}</span>
          <Link href={post.url}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>

    <style jsx>{`
      ul li {
        padding: 10px 0px;
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
      }
      @media (min-width: 500px) {
        ul {
          padding: 20px 0;
          max-width: 50rem;
          margin: auto;
        }
        ul li {
          padding-left: 0;
          margin-left: 8px;
        }
        ul li a {
          padding: 5px 10px;
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

export default Technical;
