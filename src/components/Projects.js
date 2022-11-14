import { Link } from "react-router-dom";

export default function Projects() {
    return (
        <div>
            <section className="proj">
            <h1>Projects</h1>
            <Link className="sociallink" to="/">Home</Link>
            {/* <h2>To my backend project</h2>
            <Link className="sociallink" to="/projects/backend">Backend</Link> */}
            </section>
            <div className="spacer projwave"></div>
            <h1 className="text-center">SOON!</h1>
        </div>
    )
}