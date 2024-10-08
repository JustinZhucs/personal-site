import React from "react";
import { CONTACT, SOCIAL_MEDIA_LINKS } from "../constants";

const Contact = () => {
    return (
        <section id="contact">
            <div className="sm:mx-10 lg:mx-20">
                <p className="my-8 text-center text-3xl lg:text-6xl">Interested In Working Together?</p>
                <p className="p-4 text-center text-xl">{CONTACT.text}</p>
                <p className="my-4 text-center text-xl font-medium text-lime-300 lg:pt-6 lg:text-3xl">{CONTACT.email}</p>
                <p className="my-4 text-center text-xl font-medium text-lime-300 lg:pb-6 lg:text-3xl">{CONTACT.phone}</p>
            </div>
            <div className="mt-15 flex items-center justify-center gap-8">
                {SOCIAL_MEDIA_LINKS.map((link, index) => (
                    <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.icon}
                    </a>
                ))}
            </div>
            <p className="my-8 text-center text-gray-400">&copy; Justin Zhu 2024. All rights reserved.</p>
        </section>
    )
}

export default Contact
