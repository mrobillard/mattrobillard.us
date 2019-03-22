import Page from '../layouts/main'
import Link from 'next/link'
import Head from 'next/head'

export default () => (
  <Page>
    <Head>
      <title>mattrobillard.us</title>
    </Head>

    <div className="home">
      <div className="main">
        <h1>Matt Robillard</h1>
        <nav>
          <a target="_blank" href="https://twitter.com/mattrobillard">Twitter</a>
          <Link href="/essays"><a>Essays</a></Link>
          <Link href="/other"><a>Other</a></Link>
          <a href="mailto:matt@mattrobillard.us">Email</a>
        </nav>
      </div>
    </div>

    <style jsx>{`
      .home {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .main {
        flex: none;
        text-align: center;
      }
      h1 {
        font-size: 16px;
        font-weight: normal;
      }
      nav {
        margin-top: 20px;
      }
      a {
        display: inline-block;
        margin: 0 16px;
        text-decoration: none;
      }
    `}</style>
  </Page>
)