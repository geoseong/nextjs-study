import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import Layout from '../components/Layout'

class One extends Component {
  static getInitialProps = async function() {
    const endpoint = `https://s2wv6mjpph.execute-api.ap-northeast-2.amazonaws.com/NextJS/one`;
    // const endpoint = `http://localhost:8888/one`;
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
          <title>Page One</title>
          <meta property="og:title" content="Opengraph title page one" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://nextjs-geoseong.s3-website.ap-northeast-2.amazonaws.com/one/" />
          <meta property="og:description" content="Opengraph desc Page One" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:domain" content="nextjs-geoseong.s3-website.ap-northeast-2.amazonaws.com" />
          <meta name="twitter:title" content="TW title page one" />
          <meta name="twitter:description" content="TW desc Page One" />
          <meta name="twitter:url" content="http://nextjs-geoseong.s3-website.ap-northeast-2.amazonaws.com/one/" />
          <meta name="description" content="desc Page One" />
          <link rel="canonical" href="http://nextjs-geoseong.s3-website.ap-northeast-2.amazonaws.com/one/" /> 
        </Head>
        <div>
          <h1>Page One : Geoseong</h1>
          <p>Message: {this.props.data.message}</p>
        </div>
      </Layout>
    )
  }
}

export default One