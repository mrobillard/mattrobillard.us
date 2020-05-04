import Link from 'next/link';

export const WRITINGS = 'WRITINGS';
export const TECHNICAL = 'TECHNICAL';
export const ABOUT = 'ABOUT';
export const TWITTER = 'TWITTER';
export const SOURCE = 'SOURCE';

export default ({ active = null }) => (
  <header>
    <Link href='/'>
      <a id='logo' href='/'>
        Matt Robillard
      </a>
    </Link>

    <nav>
      <ul>
        <li className={active === WRITINGS ? 'active' : ''}>
          <Link href='/'>
            <a href='/'>Writings</a>
          </Link>
        </li>
        <li className={active === TECHNICAL ? 'active' : ''}>
          <Link href='/'>
            <a href='/'>Technical</a>
          </Link>
        </li>
        <li className={active === ABOUT ? 'active' : ''}>
          <a href='mailto:robillard.matt@gmail.com'>Email</a>
        </li>
        <li className={active === TWITTER ? 'active' : ''}>
          <a href='https://twitter.com/mattrobillard' target='_blank'>
            Twitter
          </a>
        </li>
      </ul>
    </nav>

    <style jsx>{`
      nav {
        padding: 10px 0 10px 5px;
      }
      ul {
        display: flex;
        list-style-type: none;
      }
      a {
        text-decoration: none;
        color: #000;
        display: inline-flex;
        transition: 150ms background-color ease;
        padding: 5px;
      }
      #logo {
        font-family: 'Avenir Next';
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 3px;
      }
      #logo:hover {
        background-color: white;
      }
      ul li a {
        padding: 2px 10px;
      }
      .active a {
        font-weight: bold;
        pointer-events: none;
      }
      @media (min-width: 500px) {
        header {
          max-width: 50rem;
          margin: auto;
          padding: 20px 0;
        }
        a:hover {
          background-color: #f6f6f6;
          border-radius: 5px;
        }
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        nav {
          padding: 0;
        }
      }
    `}</style>
  </header>
);
