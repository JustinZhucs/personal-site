import React from "react";
import { EXPERIENCES } from "../constants";

const Work = () => {
    return (
        <section id="experience">
            <h2 className="mb-5 my-12 mt-18 text-center text-3xl lg:text-6xl">Work Experience</h2>
            <div className="sm:mx-10 lg:mx-20">
                {EXPERIENCES.map((experience, id) => (
                    <div key={id} className="mx-4 mb-20">
                        <h2 className="font-medium lg:text-2xl">{experience.company}</h2>
                        <div className="flex justify-between">
                            <p className="py-4 tracking-wide lg:text-xl">{experience.role}</p>
                            <p className="py-4 lg:text-xl">{experience.year}</p>
                        </div>
                        <p className="font-sans text-gray-400 text-lg ">{experience.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Work
