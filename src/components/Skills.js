export default function Skills() {
    return (
        <div id="skills">
             <section>
                <h1 className="wow fadeInLeft" >Skills</h1>
                <p className="wow fadeInLeft">currently learning front-end development frameworks including: React, NodeJS, and ExpressJS.</p>
                <div className="row">
                    <div className="col"><img className="reactlogo wow fadeInUp" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" data-wow-delay=".2s"/></div>
                    <div className="col">
                        <img className="nodelogo wow fadeInUp" src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png" data-wow-delay=".3s"/>
                    </div>
                    <div className="col">
                        <img className="jslogo wow fadeInUp" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" data-wow-delay=".4s"/>
                    </div>
                </div>
            </section>
        </div>
    )
}