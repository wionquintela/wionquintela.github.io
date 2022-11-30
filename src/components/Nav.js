export default function Nav() {
    return (
        <div>
            {/* <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <a className="text-light navbar-brand npy" href="#">Navbar</a>
    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-center" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item gx-2">
          <a className="navlink active" aria-current="page" href="#skills">Skillset</a>
        </li>
        <li className="nav-item gx-2">
          <a className="navlink" href="#about">About</a>
        </li>
        <li className="nav-item gx-2">
          <a className="navlink" href="#projects">Projects</a>
          </li>
          <li className="nav-item gx-2">
          <a className="navlink" href="#footer">Links</a>
          </li>
      </ul>
    </div>
  </div>
</nav> */}
<nav className="navbar navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Wion Quintela</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Navigation</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link sociallink" aria-current="page" href="#skills">Skillset</a>
          </li>
          <li className="nav-item">
            <a className="nav-link sociallink" href="#about">About Me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link sociallink" aria-current="page" href="#projects">Projects</a>
          </li>
          <li className="nav-item dropdown">
            {/* <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul> */}
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
</div>
    )
}