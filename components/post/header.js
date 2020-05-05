import Head from 'next/head';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

import TimeAgo from '../time-ago';

export default ({ title, date, tweetUrl = null }) => {
  const [istMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <main>
      <Head>
        <title>{title}</title>
      </Head>

      <h1>{title}</h1>

      <nav>
        <span className='meta'>
          <a
            className='author'
            href='https://twitter.com/mattrobillard'
            target='_blank'
          >
            <img src='https://pbs.twimg.com/profile_images/1166878017559379968/YU8Pe4-e_400x400.jpg' />
            mattrobillard
          </a>

          <span className={`date`}>
            <span className='sep' />
            <span className='short'>
              <TimeAgo date={date} />
            </span>
            <span className='full'>
              <TimeAgo date={date} long={true} />
            </span>
          </span>
        </span>
      </nav>

      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          color: var(--meta-text-color);
          margin-top: 4px;
        }

        nav a {
          color: inherit;
        }

        .meta {
          display: flex;
          font-weight: 500;
          align-items: center;
        }

        .meta .date {
          opacity: 1;
          transition: 100ms ease-in opacity;
          display: flex;
          align-items: center;
        }

        .meta a.date {
          text-decoration: none;
          border-bottom-width: 1px;
          border-bottom-style: dashed;
          border-bottom-color: var(--text-meta);
        }

        .meta .author {
          display: flex;
          align-items: center;
          padding-right: 10px;
          text-decoration: none;
        }

        .meta .author img {
          width: 25px;
          height: 25px;
          border-radius: 100%;
          margin-right: 5px;
        }

        .meta .date .full {
          display: none;
        }

        .meta .date .sep {
          background: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNLjUgMTUuNWw3LTE1IiBzdHJva2U9IiNDOEM4QzgiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIvPjwvc3ZnPg==);
          width: 8px;
          height: 16px;
          margin-right: 10px;
        }

        @media (min-width: 500px) {
          nav a:hover {
            color: var(--link-color);
          }
          .meta .date .short {
            display: none;
          }
          .meta .date .full {
            display: inherit;
          }
        }
      `}</style>
    </main>
  );
};
