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
                <div className="row">
                    <div className="cols">
                    </div>
                    <div className="cols">
                    </div>
                    <div className="cols">  
                    </div>
                    <div className="cols">
                    </div>
                    <div className="cols">
                    <Link className="footerlink" to="/">Home</Link>
                    </div>
                </div>

                {/* <ul>
                    <li>
                    <a href="https://web.facebook.com/wion.quintela06/" className="footerlink"><i class="fa-brands fa-facebook"></i></a>
                    </li>
                    <li>
                    <a href="https://www.youtube.com/channel/UC4WftbieTcS90rvqLTguyZA" className="footerlink">YouTube Channel</a>
                    </li>
                    <li>
                    <a href="https://github.com/rocketexpert" className="footerlink">GitHub</a>
                    </li>
                    <li>
                    <a href="mailto:wionquintela06@gmail.com" className="footerlink"><i class="fa-regular fa-envelope"></i></a>
                    </li>
                    <li>
                    <Link className="footerlink" to="/">Home</Link>
                    </li>
                </ul> */}
            </section>
        </div>
    )
}