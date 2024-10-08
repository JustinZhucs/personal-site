import { useEffect } from "react"
import { useState } from "react"
import { FaBars, FaTimes, FaCircleNotch } from "react-icons/fa"
import { LINKS } from '../constants/index';
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [visible, setVisible] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    window.addEventListener("scroll", toggleVisible);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
            /* you can also use 'auto' behaviour
         in place of 'smooth' */
        });
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen])

    const containerVariants = {
        hidden: {opacity: 0, y: "-100%"},
        visible: {opacity: 1, y: 0,
            transition: {
                staggerChildren: 0.1
            }
        }

    }

    const linkVariants = {
        hidden: {opacity: 0, y: -50},
        visible: {opacity: 1, y: 0}
    }

    const navVariants = {
        hidden: {opacity: 0, x: -20},
        visible: {opacity: 1, x: 0}
    }

    return (
        <>
        <nav className="fixed left-0 top-0 z-30 p-4">
            <motion.button onClick={scrollToTop} 
                className="rounded-md p-2" 
                variants={navVariants}
                initial="hidden" 
                animate={visible ? "visible" : "hidden"} // Trigger animation based on 'visible'
            >
                <FaCircleNotch className="-translate-x-1 transition-all duration-150"/>
            </motion.button>
        </nav>
        <nav className="fixed right-0 top-0 z-30 p-4">
            <button onClick={toggleMenu} className="rounded-md p-2">
                {isOpen ? (
                    <FaTimes className="h-6 w-6"/>
                ) : (
                    <FaBars className="h-6 w-6"/>
                )}
            </button>
        </nav>
        <AnimatePresence>
        {isOpen && (
            <motion.div 
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
            className="fixed inset-0 z-20 flex flex-col items-center 
            justify-center bg-black text-white">
                <ul className="space-y-6 text-3xl">
                    {LINKS.map((link) => (
                        <motion.li variants={linkVariants} key={link.id}>
                                <a href={`#${link.id}`} onClick={toggleMenu}
                                className="text-5xl font-semibold uppercase
                                tracking-wide hover:text-lime-300 lg:text-9xl">
                                    {link.name}
                                </a>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        )}
        </AnimatePresence>
    </>
    )
}

export default Navbar