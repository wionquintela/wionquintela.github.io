import { Link } from "react-router-dom";

export default function Footer({ }) {
    return (
        <div className="container-fluid">
            <section>
                {/* <h1 className="wow fadeInLeft">my projects</h1>
                <Link className="link wow fadeInLeft" to="/projects">Projects</Link> */}
                {/* <a href="https://web.facebook.com/wion.quintela06/" className="sociallink">Facebook</a>
                <a href="https://www.youtube.com/channel/UC4WftbieTcS90rvqLTguyZA" className="sociallink">YouTube</a>
                <a href="https://github.com/rocketexpert" className="sociallink">GitHub</a>
                <Link className="sociallink" to="/">Home</Link> */}
                <p className="sociallink  wow fadeIn">Developed by Wion Quintela @ 2022</p>
                      <div className="row">
                        <div className="col">
                        <h1 className="sociallink"><i class="fa-brands fa-react"></i></h1>
                        </div>
                        <div className="col">
                            
                      <h1 className="sociallink"><i class="fa-brands fa-bootstrap"></i></h1>
                        </div>
                      </div> 
            </section>
        </div>
    )
}