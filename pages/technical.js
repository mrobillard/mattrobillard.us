import Page from '../layouts/main'
import Link from 'next/link'
import Head from 'next/head'

export default () => (
  <Page>
    <Head>
      <title>Technical</title>
    </Head>
    <ul>
      <li><Link href="/tech/ctypes-conversions"><a>Ctypes Conversions</a></Link></li>
    </ul>

    <style jsx>{`
      places {
        margin-bottom: 10px;
      }
    `}</style>
  </Page>
)