import Page from '../layouts/landing'
import Link from 'next/link'
import Head from 'next/head'

export default () => (
  <Page>
    <div className="home">
      <div className="main">
        <h1>MATT ROBILLARD</h1>
        <nav>
          <a target="_blank" href="https://twitter.com/mattrobillard">Twitter</a>
          <Link href="/essays"><a>Essays</a></Link>
          <Link href="/technical"><a>Technical</a></Link>
          <Link href="/explorations"><a>Explorations</a></Link>
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
        font-size: 20px;
        font-weight: bold;
        font-family: 'AvenirNext-DemiBold';
        letter-spacing: 4px;
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