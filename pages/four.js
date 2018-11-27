import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import Layout from '../components/Layout'

class Four extends Component {
  static getInitialProps = async function() {
    const endpoint = `https://9ze7w36n84.execute-api.ap-northeast-2.amazonaws.com/NextJS/four`;
    // const endpoint = `http://localhost:8888/four`;
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
          <title>Page four</title>
          <meta property="og:title" content="Opengraph title page four" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://nextjs-geoseong.s3-website.ap-northeast-2.amazonaws.com/four/" />
          <meta property="og:description" content="Opengraph desc Page four" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:domain" content="nextjs-geoseong.s3-website.ap-northeast-2.amazonaws.com" />
          <meta name="twitter:title" content="TW title page four" />
          <meta name="twitter:description" content="TW desc Page four" />
          <meta name="twitter:url" content="http://nextjs-geoseong.s3-website.ap-northeast-2.amazonaws.com/four/" />
          <meta name="description" content="desc Page four" />
          <link rel="canonical" href="http://nextjs-geoseong.s3-website.ap-northeast-2.amazonaws.com/four/" />
        </Head>
        <div>
          <h1>Page Four : Geoseong</h1>
          <p>Message: {this.props.data.message}</p>
        </div>
      </Layout>
    )
  }
}

export default Four