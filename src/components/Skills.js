export default function Skills() {
    return (
        <div id="skills">
             <section>
                <h1 className="wow fadeInUp">My Skills</h1>
                <p className="wow fadeInLeft">In programming, I am currently studying front-end development. It is more focus on the client side or what the users see on the website, I usually focus my skill in that zone. My skills involve basic knowledge of HTML, CSS, and JavaScript. I'm also currently studying ReactJS, which is a JavaScript library that makes my code composable and easy to edit and access. In terms of design I use the Bootstrap framework mainly because of its simplicity and cleanliness.</p>
                <div className="row row-cols-3 text-center">
                <div className="col">
                        <img className="m-4 jslogo wow fadeInUp" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/640px-HTML5_Badge.svg.png" data-wow-delay=".1s"/>
                    </div>
                    <div className="col">
                        <img className="m-4 jslogo wow fadeInUp" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/512px-CSS3_logo.svg.png?20210705212817" data-wow-delay=".2s"/>
                    </div>
                    <div className="col">
                        <img className="m-4 jslogo wow fadeInUp" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" data-wow-delay=".3s"/>
                    </div>
                    <div className="col"><img className="m-4 reactlogo wow fadeInUp" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" data-wow-delay=".4s"/></div>
                    <div className="col">
                        <img className="m-4 nodelogo wow fadeInUp" src="https://user-images.githubusercontent.com/2327532/39481401-fa7d2992-4d30-11e8-886d-c4a3ee88147f.png" data-wow-delay=".5s"/>
                    </div>
                    <div className="col">
                        <img className="m-4 jslogo wow fadeInUp" src="https://avatars.githubusercontent.com/u/18133?s=200&v=4" data-wow-delay=".6s"/>
                    </div>
                </div>
            </section>
        </div>
    )
}