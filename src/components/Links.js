import { Link } from "react-router-dom";

export default function Links() {
    const style = {
        width: "200px"
    }

    return (
        <div>
            <section className="social">
            <img src="https://media.tenor.com/jjxEssOpxsMAAAAi/hi-hello.gif" style={style}/><h1><i className="textHover1">Here</i> <i className="textHover2">are</i> <i className="textHover3">my</i> <i className="textHover4">Social</i> <i className="textHover5">Media</i> <i className="textHover6">Accounts</i></h1>
            <hr className="text-light"/>
                <a href="https://web.facebook.com/wion.quintela06/" className="sociallink">Facebook</a>
                <a href="https://www.youtube.com/channel/UC4WftbieTcS90rvqLTguyZA" className="sociallink">YouTube Channel</a>
                <a href="https://github.com/rocketexpert" className="sociallink">GitHub</a>
                <a href="mailto:wionquintela06@gmail.com" className="sociallink"><i class="fa-regular fa-envelope"></i></a>
                <Link className="sociallink" to="/">Home</Link>
            </section>
        </div>
    )
}