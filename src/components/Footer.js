import { Link } from "react-router-dom";

export default function Footer({ }) {
    return (
        <div>
            <section className="animate__animated animate__slideInLeft">
                <h1 className="wow fadeInLeft">my projects</h1>
                <Link className="link wow fadeInLeft" to="/projects">Projects</Link>
            </section>
        </div>
    )
}