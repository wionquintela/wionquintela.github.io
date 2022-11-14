import Skills from "./Skills";
import About from "./About";
import Footer from "./Footer";

export default function Headers() {
    return (
        <div>
            <section className="main">
                <h1 className="wow fadeIn text pt-5">Hi, I am wion quintela</h1>
            </section>
            <div className="mainwave spacer">
            </div>
            <Skills />
            <About />
            <Footer />
        </div>
    )
}