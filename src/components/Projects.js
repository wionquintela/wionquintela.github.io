export default function Projects() {
    const style = {
        width: "200px"
    }
    return (
        <div>
           <section id="projects" className="text-center">
                <h1 className="wow fadeInUp text-center display-1">Projects</h1>
                <img src={require("./img/maintenance.png")} style={style} />
                <p>coming soon</p>
            </section> 
        </div>
    )
}