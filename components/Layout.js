import Head from 'next/head'
import NavBar from './NavBar'

const Layout = (props) => (
  <div>
    <Head>
      <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      <meta property="og:site_name" content="Geoseong's Next.js" />
      <meta property="og:image" content="https://avatars2.githubusercontent.com/u/19166187?s=460&v=4" />
      <meta name="twitter:image" content="https://avatars2.githubusercontent.com/u/19166187?s=460&v=4" />
      <link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.css" />
      {/* WebMaster Tool */}
      <meta name="google-site-verification" content="b9f9pZDPKGgvgDvrQ90YBTdm2_wO0t255GgQzJp79Ew" />
      <meta name="naver-site-verification" content="974e44a5d49702094ee662b879e34157b1c4b8fa"/>
    </Head>
    <NavBar />
    <div className="container">
      {props.children}
    </div>
  </div>
)

export default Layout