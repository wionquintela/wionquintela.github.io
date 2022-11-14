import { Link } from "react-router-dom";

export default function Links() {
    return (
        <div>
            <section className="social">
                <a href="https://web.facebook.com/wion.quintela06/" className="sociallink">Facebook</a>
                <a href="https://www.youtube.com/channel/UC4WftbieTcS90rvqLTguyZA" className="sociallink">YouTube</a>
                <a href="https://github.com/rocketexpert" className="sociallink">GitHub</a>
                <Link className="sociallink" to="/">Home</Link>
            </section>
        </div>
    )
}