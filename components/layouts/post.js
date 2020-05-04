import Page from './main';

export default ({ tweets, children }) => (
  <Page>
    <main>
      <article>{children}</article>
    </main>

    <style jsx>{`
      main {
        padding: 15px;
        font-size: 18px;
      }
      @media (min-width: 500px) {
        max-width: 50rem;
        margin: auto;
      }
    `}</style>
  </Page>
);
