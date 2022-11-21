import Skills from "./Skills";
import About from "./About";
import Footer from "./Footer";
import Nav from "./Nav";
import Gallery from "./Gallery";
import Projects from "./Projects";


export default function Headers() {    
    return (
        <div>
            <Nav/>
            <section className="main">
                <div><h6 className="text-center wow fadeIn">Hey, I am</h6><h1 className="wow animate__fadeInUp text display-1" data-wow-delay=".3s">Wion Quintela</h1></div>
                <div className="container-sm"><a href="#"><i className="sociallink fa-solid fa-arrow-up fixed-bottom p-4"></i></a></div>
            </section>
            <div className="mainwave spacer">
            </div>
            <Skills />
            <About />
            <Projects />
            <Gallery />
            <Footer />
        </div>
    )
}