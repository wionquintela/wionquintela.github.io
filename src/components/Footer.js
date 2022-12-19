import { Link } from "react-router-dom";

export default function Footer({ }) {
  const style = {
    marginTop: "200px"
  }  
  
  return (
        <div className="container-fluid text-center" style={style}>
            <section id="footer">
                {/* <h1 className="wow fadeInLeft">my projects</h1>
                <Link className="link wow fadeInLeft" to="/projects">Projects</Link> */}
                {/* <a href="https://web.facebook.com/wion.quintela06/" className="sociallink">Facebook</a>
                <a href="https://www.youtube.com/channel/UC4WftbieTcS90rvqLTguyZA" className="sociallink">YouTube</a>
                <a href="https://github.com/rocketexpert" className="sociallink">GitHub</a>
                <Link className="sociallink" to="/">Home</Link> */}
                <p className="sociallink  wow fadeIn">Developed by Wion Quintel @ 2022</p>
                <div className="mysocmedlinks">
                  <a href="https://web.facebook.com/wion.quintela06/" className="footerlink"><i class="fa-brands fa-facebook"></i></a>
                  <a href="https://www.youtube.com/channel/UC4WftbieTcS90rvqLTguyZA" className="footerlink"><i class="fa-brands fa-youtube"></i></a> 
                  <a href="https://github.com/rocketexpert" className="footerlink"><i class="fa-brands fa-github"></i></a>
                  <a href="https://www.instagram.com/wayonnn/" className="footerlink"><i class="fa-brands fa-instagram"></i></a>
                  <a href="mailto:wionquintela06@gmail.com" className="footerlink"><i class="fa-solid fa-envelope"></i></a> 
                  </div>
                      {/* <div className="row row-cols-1">
                        <div className="col">
                        <h1 className="sociallink"><i class="fa-brands fa-react"></i></h1>
                        </div>
                        <div className="col">
                            
                      <h1 className="sociallink"><i class="fa-brands fa-bootstrap"></i></h1>
                        </div>
                      </div>  */}
            </section>
        </div>
    )
}