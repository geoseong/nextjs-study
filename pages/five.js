import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import Layout from '../components/Layout'

class Five extends Component {
  static getInitialProps = async function() {
    const endpoint = `https://9ze7w36n84.execute-api.ap-northeast-2.amazonaws.com/NextJS/five`;
    // const endpoint = `http://localhost:8888/five`;
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
          <title>Page five</title>
          <meta property="og:title" content="Opengraph title page five" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://nextjs-geoseong.s3-website.ap-northeast-2.amazonaws.com/five/" />
          <meta property="og:description" content="Opengraph desc Page five" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:domain" content="nextjs-geoseong.s3-website.ap-northeast-2.amazonaws.com" />
          <meta name="twitter:title" content="TW title page five" />
          <meta name="twitter:description" content="TW desc Page five" />
          <meta name="twitter:url" content="http://nextjs-geoseong.s3-website.ap-northeast-2.amazonaws.com/five/" />
          <meta name="description" content="desc Page five" />
          <link rel="canonical" href="http://nextjs-geoseong.s3-website.ap-northeast-2.amazonaws.com/five/" /> 
        </Head>
        <div>
          <h1>Page Five : Geoseong</h1>
          <p>Message: {this.props.data.message}</p>
        </div>
      </Layout>
    )
  }
}

export default Five