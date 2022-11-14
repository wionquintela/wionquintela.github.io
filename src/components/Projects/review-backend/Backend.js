import { Link } from "react-router-dom";

export default function Backend() {
    const posts = [{
        title: "Post 1",
        body: "this is post 1"
    }, {
        title: "Post 2",
        body: "this is post 2"
    }]

    const text = document.getElementById("h1");

    function displayData() {
        setTimeout(() => {
            posts.forEach((items) => {
                text += items.title
            })
        }, 1000);
    }

    displayData()
    
    return (
        <div>
            <section>
                <h1 id="h1"></h1>
                <Link className="sociallink" to="/projects">Go back</Link>
            </section>
        </div>
    )
}