import React from "react";
import { ABOUT } from "../constants";

const About = () => {
    return (
        <section id="about">
            <h2 className="my-10 text-center text-3xl lg:text-6xl">About Me</h2>
            <div className="flex items-center justify-center"></div>
            <p className="mx-10 mb-20 text-2xl lg:text-4xl text-slate-300">{ABOUT}</p>
        </section>
    )
}

export default About
