import Link from 'next/link';

export const ESSAYS = 'ESSAYS';
export const TECHNICAL = 'TECHNICAL';
export const EMAIL = 'EMAIL';
export const TWITTER = 'TWITTER';

export default ({ active = null }) => (
  <header>
    <Link href='/'>
      <a id='logo' href='/'>
        Matt Robillard
      </a>
    </Link>

    <nav>
      <ul>
        <li className={active === ESSAYS ? 'active' : 'remove-padding'}>
          <Link href='/'>
            <a href='/'>Essays</a>
          </Link>
        </li>
        <li className={active === TECHNICAL ? 'active' : ''}>
          <Link href='/technical'>
            <a href='/technical'>Technical</a>
          </Link>
        </li>
        <li className={active === EMAIL ? 'active' : ''}>
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
        padding: 10px 0 10px 0px;
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
        background-color: #e6e6e4;
        border-radius: 5px;
        padding: 5px;
      }

      @media (max-width: 499px) {
        .remove-padding a {
          padding-left: 0px !important;
        }
      }

      @media (min-width: 500px) {
        header {
          max-width: 50rem;
          margin: auto;
          padding: 20px 0;
        }
        a {
          margin: 0 1.5px;
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
