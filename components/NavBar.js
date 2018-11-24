import Link from 'next/link';

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="/">Geoseong's Next.js Study</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link href="/"><a className="nav-link">Home</a></Link>
        </li>
        <li className="nav-item">
          <Link href="./about"><a className="nav-link">About</a></Link>
        </li>
        <li className="nav-item">
          <Link href="./one"><a className="nav-link">one</a></Link>
        </li>
        <li className="nav-item">
          <Link href="./two"><a className="nav-link">two</a></Link>
        </li>
        <li className="nav-item">
          <Link href="./three"><a className="nav-link">three</a></Link>
        </li>
        <li className="nav-item">
          <Link href="./four"><a className="nav-link">four</a></Link>
        </li>
        <li className="nav-item">
          <Link href="./five"><a className="nav-link">five</a></Link>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>

  // <div>
  //   <ul>
  //     <li><Link href="/"><a>Home</a></Link></li>
  //     <li><Link href="/about"><a>About</a></Link></li>
  //   </ul>
  //   How to use inline component css
  //   <style jsx>{`
  //     ul {
  //       background: #333;
  //       color: #fff;
  //       list-style: none;
  //       display: flex;
  //     }
  //     ul li {
  //       font-size: 18px;
  //       margin-right: 20px;
  //     }
  //     ul li a {
  //       color: #fff;
  //       text-decoration: none;
  //     }
  //   `}</style>
  // </div>
)

export default NavBar