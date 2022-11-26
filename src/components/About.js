import { Link } from 'react-router-dom';
export default function About() {
    const h1Style = {
        color: "#A04000",
        borderColor: "#A04000"
    }

    const pic = {
        width: "400px"
    }

    return (
        <div>
            <div className="spacer sectionwave flip"></div>
            <section className="main2" id="about">
            <h1 className="wow fadeInUp text-center" style={h1Style}>About the Creator</h1>
                <div className="row row-cols-1 row-cols-md-2">
                <div className="col">
<<<<<<< HEAD
                        <img src={require("./img/propayl.jpg")} className="img-fluid p-1 wow fadeInLeft" style={pic}/>
=======
                        <img src="img/propayl.jpg" className="img-fluid p-1 wow fadeInLeft" style={pic}/>
>>>>>>> 5b17e7e4b6a0d7954824d049d87e53ffbb48a8cc
                    </div>
                    <div className="col">
                <p className="wow fadeInRight pt-3">My name is Wion M. Quintela, and I became interested in programming back in January out of curiosity. I started programming in Python and learn from watching in YouTube. Usually when I am not coding, I play my guitar and bass, watch TV shows, play Steam Games like TF2 and Brawlhalla, listen to some good music including Arctic Monkeys and Drake, and occasionally create and publish my animations on YouTube. Currently, I am focusing on my studies since I am now in Senior High School and I need to be always learning because it is different from Junior High School which was more laid-back, but the subjects now are more vigorous and mind-melting, and I hate Gen Chem.</p>
                    </div>
                </div>
                <Link className="aboutlink wow fadeInUp mt-3" to="/socials">Socials</Link>
            </section>
            <div className="spacer sectionwave"></div>
        </div>
    )
}
