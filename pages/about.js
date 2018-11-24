import Link from 'next/link';
import Head from 'next/head'
import Layout from '../components/Layout'

const About = () => (
  <Layout>
    <Head>
      <title>About</title>
      <meta property="og:title" content="Opengraph title About" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://nextjs-geoseong.s3-website.ap-northeast-2.amazonaws.com/about/" />
      <meta property="og:description" content="Opengraph desc About" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:domain" content="nextjs-geoseong.s3-website.ap-northeast-2.amazonaws.com" />
      <meta name="twitter:title" content="TW title About" />
      <meta name="twitter:description" content="TW desc About" />
      <meta name="twitter:url" content="http://nextjs-geoseong.s3-website.ap-northeast-2.amazonaws.com/about/" />
      <meta name="description" content="desc About" />
      <link rel="canonical" href="http://nextjs-geoseong.s3-website.ap-northeast-2.amazonaws.com/about/" /> 
    </Head>
    <div>
      <h1>This is about page</h1>
      <p>Application to view Bitcoin prices</p>
    </div>
  </Layout>
)

export default About