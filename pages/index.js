import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import Layout from '../components/Layout'
import Prices from '../components/Prices'

const Index = (props) => (
  <Layout>
    <Head>
      <title>It is geoseong's Next.js study page!</title>
      <meta property="og:title" content="Opengraph title index" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://nextjs-geoseong.s3-website.ap-northeast-2.amazonaws.com/" />
      <meta property="og:description" content="Opengraph desc index" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:domain" content="nextjs-geoseong.s3-website.ap-northeast-2.amazonaws.com" />
      <meta name="twitter:title" content="TW title index" />
      <meta name="twitter:description" content="TW desc index" />
      <meta name="twitter:url" content="http://nextjs-geoseong.s3-website.ap-northeast-2.amazonaws.com/" />
      <meta name="description" content="desc index" />
      <link rel="canonical" href="http://nextjs-geoseong.s3-website.ap-northeast-2.amazonaws.com/" />
    </Head>
    <div>
      <h1>Welcome to BitzPrice</h1>
      <p>Application to view Bitcoin prices</p>
      <Prices data={props.data} />
      {props.data.time.updated}
    </div>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
  const data = await res.json()

  return {
    data: data
  }
}

export default Index