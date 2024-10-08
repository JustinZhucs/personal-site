import React from "react";
import { PROJECTS } from "../constants";

const Projects = () => {
    return (
        <section id="projects">
            <h2 className="my-10 text-center text-3xl lg:text-6xl">My Work</h2>
            <div className="columns-2 gaps-4 md:columns-3 ls:columns-3 mx-10">
                {PROJECTS.map((project) => (
                    <div className="relative mb-4 overflow-hidden rounded-lg bg-white shadow-lg justify-center">
                        <a key={project.id} href={project.link} target="_blank" 
                            rel="noopener noreferrer" className="block">
                            <img src={project.imgSrc} alt={project.title}
                            className="h-auto w-full object-covegyuccr"/>
                            <div className="absolute bottom-0 left-0 right-0 m-0 p-8 text-white backdrop-blur-md">
                                <h3 className="text-3xl">{project.title}</h3>
                                <p className="text-lg">{project.description}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects
