import Page from '../layouts/main'
import Link from 'next/link'
import Head from 'next/head'

export default () => (
  <Page>
    <Head>
      <title>Explorations</title>
    </Head>
    <ul>
      <li><Link href="/places/jardin"><a>Jardín, Colombia</a></Link></li>
      <li><Link href="/places/buford"><a>Buford Spring, Chassahowitzka, Florida</a></Link></li>
    </ul>

    <style jsx>{`
      li {
        margin-bottom: 5px;
      }
    `}</style>
  </Page>
)
