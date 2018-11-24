import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import Layout from '../components/Layout'

class Three extends Component {
  static getInitialProps = async function() {
    const endpoint = `https://s2wv6mjpph.execute-api.ap-northeast-2.amazonaws.com/NextJS/three`;
    // const endpoint = `http://localhost:8888/three`;
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
          <title>Page three</title>
          <meta property="og:title" content="Opengraph title page three" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://nextjs-geoseong.s3-website.ap-northeast-2.amazonaws.com/three/" />
          <meta property="og:description" content="Opengraph desc Page three" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:domain" content="nextjs-geoseong.s3-website.ap-northeast-2.amazonaws.com" />
          <meta name="twitter:title" content="TW title page three" />
          <meta name="twitter:description" content="TW desc Page three" />
          <meta name="twitter:url" content="http://nextjs-geoseong.s3-website.ap-northeast-2.amazonaws.com/three/" />
          <meta name="description" content="desc Page three" />
          <link rel="canonical" href="http://nextjs-geoseong.s3-website.ap-northeast-2.amazonaws.com/three/" /> 
        </Head>
        <div>
          <h1>Page three : Geoseong</h1>
          <p>Message: {this.props.data.message}</p>
        </div>
      </Layout>
    )
  }
}

export default Three