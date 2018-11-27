import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import Layout from '../components/Layout'

class Two extends Component {
  static getInitialProps = async function() {
    const endpoint = `https://9ze7w36n84.execute-api.ap-northeast-2.amazonaws.com/NextJS/two`;
    // const endpoint = `http://localhost:8888/two`;
    const res = await fetch(endpoint)
    const data = await res.json()
  
    return {
      data: data
    }
  }

  render() {
    return (
      <Layout>
        <Head>
          <title>Page two</title>
          <meta property="og:title" content="Opengraph title page two" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://nextjs-geoseong.s3-website.ap-northeast-2.amazonaws.com/two/" />
          <meta property="og:description" content="Opengraph desc Page two" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:domain" content="nextjs-geoseong.s3-website.ap-northeast-2.amazonaws.com" />
          <meta name="twitter:title" content="TW title page two" />
          <meta name="twitter:description" content="TW desc Page two" />
          <meta name="twitter:url" content="http://nextjs-geoseong.s3-website.ap-northeast-2.amazonaws.com/two/" />
          <meta name="description" content="desc Page two" />
          <link rel="canonical" href="http://nextjs-geoseong.s3-website.ap-northeast-2.amazonaws.com/two/" />
        </Head>
        <div>
          <h1>Page two : Geoseong</h1>
          <p>Message: {this.props.data.message}</p>
        </div>
      </Layout>
    )
  }
}

export default Two