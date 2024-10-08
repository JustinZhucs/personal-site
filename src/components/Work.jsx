import React from "react";
import { EXPERIENCES } from "../constants";

const Work = () => {
    return (
        <section id="experience">
            <h2 className="mb-5 my-12 mt-18 text-center text-3xl lg:text-6xl">Work Experience</h2>
            <div className="mx-10 lg:mx-20">
                {EXPERIENCES.map((experience, id) => (
                    <div key={id} className="mx-4 mb-20">
                        <h2 className="font-medium text-lg lg:text-2xl">{experience.company}</h2>
                        <div className="flex justify-between">
                            <p className="py-4 tracking-wide text-md lg:text-xl">{experience.role}</p>
                            <p className="py-4 text-md lg:text-xl">{experience.year}</p>
                        </div>
                        <p className="text-gray-400 text:md lg:text-lg ">{experience.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Work
