import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
export default function Home() {
    return (
        <motion.div
            className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            {/* Hero */}
            <section className="px-6 py-24 text-center bg-gradient-to-br from-indigo-600 to-cyan-500 text-white shadow-md flex-none">
                <motion.h1
                    className="text-5xl sm:text-6xl font-extrabold mb-4 tracking-tight"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    TOYINSOLA OBAYEMI
                </motion.h1>
                <motion.p
                    className="text-xl sm:text-2xl max-w-2xl mx-auto mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    Full-Stack Developer and UI/UX enthusiast. Building functional web applications and mobile utilities while mapping user requirements into clean digital experiences.
                </motion.p>
                <motion.div
                    className="flex justify-center gap-4 flex-wrap"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <Link
                        to="/projects"
                        className="bg-white text-indigo-700 font-semibold px-6 py-2 rounded-md shadow hover:bg-indigo-100"
                    >
                        View Projects
                    </Link>
                    <Link
                        to="/contact"
                        className="border border-white text-white px-6 py-2 rounded-md hover:bg-white hover:text-indigo-700"
                    >
                        Contact Me
                    </Link>
                </motion.div>
            </section>

            {/* About snippet */}
            <section className="flex-grow flex items-center justify-center px-6 py-16 bg-white dark:bg-gray-900">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl font-bold text-indigo-600 dark:text-cyan-400">Who am I?</h2>
                    <p className="text-gray-700 dark:text-gray-300 text-lg">
                        I am a Computer Science student at the University of Gueplh focused on bridging the gap between 
                        clean engineering and user-centered design. I enjoy crafting intuitive interfaces using tools
                        like <strong>Figma</strong> and <strong>Tailwind CSS</strong>, and implementing reliable backend solutions
                        using the<strong> MERN stack</strong> (MongoDB, Express.js, React, and Node.js). I'm passionate about learning
                        through hands-on development, solving problems systemically, and using tools like Google Forms to collect user
                         feedback so I can design software based on real-world workflow requirements.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-md italic border-t border-gray-200 dark:border-gray-800 pt-4">
                        Dedicated to writing clean, modular code, managing version control pipelines, and conducting deep root-cause debugging to ensure system reliability.
                    </p>
                </div>
            </section>

        </motion.div>
    );
}