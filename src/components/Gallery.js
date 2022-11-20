import { Link } from "react-router-dom";
import ProjCarousel from "./ProjCarousel";
import Button from "./Button";
import React, { useEffect, useState } from "react";

export default function Projects() {
    const style = {
        color: "#431665"
    }

    const [state, setState] = useState(false);


    return (
        <div>
            <div className="spacer projwave"></div>
            <section className="proj" id="gallery">
            <h1 style={style} className="wow fadeInUp">Gallery</h1>
            <Button className="wow fadeInUp" onClick={() => setState(!state)} showAdd={state}/>
            {state && <ProjCarousel hue={state ? "green" : "red"}/>}
            {}
            </section>
            <div className="spacer projwave flip"></div>
        </div>
    )
}