export default function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
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
          <a className="navlink" href="#gallery">Gallery</a>
          </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    )
}