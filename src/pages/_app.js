import Head from 'next/head'
import Layout from 'common/layouts/main'
import 'common/styles/index.sass'

import { GoogleAnalyticsComponent } from 'common/features/googleAnalytics'


const MyApp = ({ Component, pageProps }) => {
  return(
  <Layout>
    <Head>
      <link rel="shortcut icon" href="/favicon.png" />
      <meta name="viewport" content="width=device-width"/>
    </Head>
    <Component {...pageProps} />

    <GoogleAnalyticsComponent/>
  </Layout>
  )
}

export default MyApp
