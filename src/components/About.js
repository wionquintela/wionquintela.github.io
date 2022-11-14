import { Link } from 'react-router-dom';
export default function About() {
    return (
        <div>
            <div className="spacer sectionwave flip"></div>
            <section className="main2">
                <h1 className="wow fadeInRight">About me</h1>
                <p className="wow fadeInRight">When i am not coding, i usually watch my favorite shows from my computer and sometimes i play guitar and bass.</p>
                <Link className="sociallink wow fadeInRight" to="/socials">Socials</Link>
            </section>
            <div className="spacer sectionwave"></div>
        </div>
    )
}