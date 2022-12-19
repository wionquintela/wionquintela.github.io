



export default function Nav() {
    return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Wion Quintela</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#skills">Skillset</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#projects">Projects</a>
          </li>
        </ul>
      </div>
    </div>
  </nav> 
    </div>
    )
}