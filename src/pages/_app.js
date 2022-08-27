import Layout from '../components/layout'
import '../styles/globals.css'
import '../styles/main.css'
import '../styles/layout.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return(
  <Layout>
    <Head>
      <meta name="viewport" content="width=device-width"/>
    </Head>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
